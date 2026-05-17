/* Canine Companions — generator engine.
 *
 * Source: Canine Companions PDF.
 *
 * Stat blocks: 10 blocks across Guard / Hunting / Scout / War × Standard / Heavy / Giant.
 * Hunting|Giant and Scout|Giant are intentionally absent — the source's breed tables
 * produce no breeds in those slots, and the PDF does not provide blocks for them.
 *
 * Pipeline:
 *   1. Roll archetype / build / breed / age / disposition.
 *   2. Roll traits per disposition tier (bad / neutral / good).
 *   3. For dice-defined trait effects (Runt's ±1d4, Strong's +1d4), roll once and
 *      freeze the resolved value on the trait. The dog stays the same dog across
 *      renders, localStorage round-trips, and page reloads.
 *   4. Compute a live stat block: clone the base archetype block, apply trait
 *      effects in order, re-derive bite attack / damage / save DCs from the final
 *      ability scores, and record a per-trait modifier log.
 *
 * Note on PDF damage averages: the source prints `2d4+3 = 7` and `2d6+2 = 8` for
 * Scout dogs' advantage damage. Standard 5e formula floor(N·(D+1)/2 + bonus)
 * gives 8 and 9 respectively — the PDF is off-by-one. Once traits modify the
 * dice, the formula has to be the source of truth, so we use floor(N·(D+1)/2)
 * everywhere. A clean Scout with no trait modifiers will read 8 / 9 here, not
 * 7 / 8.
 */

(function (global) {
  'use strict';

  // ========== Small helpers ==========

  const pick = a => a[Math.floor(Math.random() * a.length)];
  const chance = p => Math.random() < p;
  const rollN = (n, sides) => { let s = 0; for (let i = 0; i < n; i++) s += 1 + Math.floor(Math.random() * sides); return s; };
  const cap = s => s ? s[0].toUpperCase() + s.slice(1) : "";
  const sign = n => n >= 0 ? `+${n}` : `${n}`;
  const signedWord = n => n >= 0 ? `+ ${n}` : `− ${Math.abs(n)}`;
  const mod = score => Math.floor((score - 10) / 2);
  const deepClone = x => JSON.parse(JSON.stringify(x));

  function avgDmg(count, sides, bonus) {
    return Math.floor(count * (sides + 1) / 2 + bonus);
  }

  function rollDice(expr) {
    const m = expr.match(/^(\d+)d(\d+)$/);
    if (!m) return 0;
    return rollN(parseInt(m[1], 10), parseInt(m[2], 10));
  }

  function pickUnused(arr, used) {
    const fresh = arr.filter(x => !used.has(x.key));
    const r = pick(fresh.length ? fresh : arr);
    used.add(r.key);
    return r;
  }

  // ========== Source tables (PDF-faithful) ==========

  const ARCHETYPE_BREEDS = {
    Guard: [
      ["Mountain Dog","Giant"],["Hovawart","Heavy"],["Ridgeback","Heavy"],
      ["Wooly Mastiff","Giant"],["Shepherd","Standard"],["Bullmastiff","Giant"],
      ["Boxer","Heavy"],["Boerboel","Giant"],["Beauceron","Heavy"],["Sheepdog","Standard"]
    ],
    Hunting: [
      ["Labrador Retriever","Heavy"],["Golden Retriever","Heavy"],["Foxhound","Heavy"],
      ["Springer Spaniel","Standard"],["Pointer","Heavy"],["Bay Retriever","Standard"],
      ["Coonhound","Heavy"],["Setter","Heavy"],["Bloodhound","Heavy"],["Weimaraner","Heavy"]
    ],
    Scout: [
      ["Fox Terrier","Standard"],["Beagle","Standard"],["Collie","Heavy"],
      ["Miniature Schnauzer","Standard"],["Poodle","Heavy"],["Cairn Terrier","Standard"],
      ["Shepherd","Standard"],["King Terrier","Standard"],["Spaniel","Standard"],
      ["Giant Schnauzer","Heavy"]
    ],
    War: [
      ["Wolfhound","Giant"],["Deerhound","Giant"],["Mastiff","Giant"],
      ["Molossus","Heavy"],["Great Shepherd","Heavy"],["Alaunt","Heavy"],
      ["Malinois","Heavy"],["Mountain Dog","Giant"],["Sheepdog","Heavy"],
      ["Leonberger","Giant"]
    ]
  };

  const SOLID_COLORS = [
    "Jet Black","White","Gray","Fawn","Lilac","Red Sable","Red Gold","Cream","Blue",
    "Chocolate","Liver","Yellow","Seal Brown","Fading Black","Silver","Bronze",
    "Copper","Chestnut","Mahogany","Ivory"
  ];
  const WILD_PATTERNS  = ["Agouti","Jackal","Backed","Side-Striped"];
  const MARKINGS = [
    "Countershaded","Urajiro","Nonself","Dark Mask","Saddle","Minimal White",
    "Extreme White","Mealy","Piebald","Extreme Piebald","Spotted","Watermark"
  ];
  const BRINDLES = [
    "Black Brindle (Reverse)","Red Brindle","Light Brindle","Brindle","Fawn Brindle",
    "Dark Brindle","Silver Brindle","Liver Brindle","Brindle and White","Gold Brindle"
  ];
  const TICKROAN = [
    "Bluetick","Diluted Bluetick","Redtick","Diluted Redtick","Black and Tan Tick",
    "Blue Roan","Red Roan","Liver Roan"
  ];
  const MERLES = [
    "Blue Merle","Red Merle","Lilac Merle","Light Merle","Tan and Red Merle",
    "Tweed Merle","Harlequin","Sable Merle","Liver Merle","Blue Merle and Tan",
    "Agouti Merle","Double Merle"
  ];
  const BODYMARK = [
    "Sable Tricolor","Red/Sable Tricolor","Spotted Tricolor","Liver Tricolor",
    "Black Tricolor","Black and Tan","Liver and White","Liver and Tan"
  ];
  const COAT_FAMILIES = [
    { kind: "Solid",   pool: SOLID_COLORS },
    { kind: "Wild",    pool: WILD_PATTERNS },
    { kind: "Markings",pool: MARKINGS },
    { kind: "Brindle", pool: BRINDLES },
    { kind: "Body",    pool: BODYMARK },
    { kind: "Tick",    pool: TICKROAN },
    { kind: "Merle",   pool: MERLES }
  ];

  const COAT_NOTE = {
    "Agouti": "individual hairs banded with light and dark, the overall coat grizzled",
    "Jackal": "darker along the spine, fading to lighter tones beneath",
    "Backed": "a clear darker saddle across the back, paler at the legs and flanks",
    "Side-Striped": "vertical bands of contrasting colour along the flanks",
    "Countershaded": "dark across the topline, pale at the belly and throat",
    "Urajiro": "pale reddish-white at muzzle, cheeks, chest, and inner legs",
    "Nonself": "small mismatched white markings at chest, toes, and tail tip",
    "Dark Mask": "a dark mask laid across muzzle and eyes",
    "Saddle": "a darker patch saddled across the back",
    "Minimal White": "minor splashes of white at chest and feet",
    "Extreme White": "near-white with only small islands of base colour",
    "Mealy": "pale, mealy points at muzzle, eyes, and belly",
    "Piebald": "irregular patches of white over the colour",
    "Extreme Piebald": "mostly white, the colour reduced to a few small patches",
    "Spotted": "rounded spots scattered across a white ground",
    "Watermark": "subtle wavy figuring shifting in the light",
    "Bluetick": "fine black ticking sprayed across a white ground",
    "Diluted Bluetick": "soft grey ticking dusting a white ground",
    "Redtick": "warm red ticking through a white coat",
    "Diluted Redtick": "muted fawn ticking on white",
    "Black and Tan Tick": "black-and-tan markings ticked at the white",
    "Blue Roan": "black and white hairs intermixed to a steel grey",
    "Red Roan": "red and white hairs blended to a pinkish wash",
    "Liver Roan": "liver and white hairs blended to a soft brown haze",
    "Blue Merle": "black patches on a slate-blue diluted ground",
    "Red Merle": "rust patches on a faded reddish ground",
    "Lilac Merle": "liver patches on a pale lilac ground",
    "Light Merle": "low-contrast merling, diluted overall",
    "Tan and Red Merle": "red merle figured with tan points",
    "Tweed Merle": "multiple shades layered through the merle",
    "Harlequin": "torn-edged patches on a near-white coat",
    "Sable Merle": "sable patches on a diluted ground",
    "Liver Merle": "liver patches on a softer brown ground",
    "Blue Merle and Tan": "blue merle with bright tan points",
    "Agouti Merle": "banded hairs overlaid with merle mottling",
    "Double Merle": "broad white with sparse, soft merle islands",
    "Sable Tricolor": "sable main coat with white markings and tan points",
    "Red/Sable Tricolor": "reddish main coat broken by white and tan",
    "Spotted Tricolor": "white ground bearing distinct spots of two colours",
    "Liver Tricolor": "liver main coat with white markings and tan points",
    "Black Tricolor": "black main coat with white and tan points",
    "Black and Tan": "black above with crisp tan at the brows, muzzle, and legs",
    "Liver and White": "liver patches over a white ground",
    "Liver and Tan": "liver above with tan at brows and legs",
    "Black Brindle (Reverse)": "dark base coat overlaid with paler stripes",
    "Red Brindle": "distinct black stripes over a red ground",
    "Light Brindle": "low-contrast stripes over a cream base",
    "Brindle": "black stripes set into a fawn ground",
    "Fawn Brindle": "black stripes through pale fawn",
    "Dark Brindle": "near-black ground crossed by faint stripes",
    "Silver Brindle": "black stripes laid over silvery grey",
    "Liver Brindle": "liver stripes over cream",
    "Brindle and White": "brindle interrupted by white markings at chest and feet",
    "Gold Brindle": "black stripes through a rich golden ground"
  };

  // ========== Trait tables (with structured `effects`) ==========
  //
  // Effect kinds:
  //   abilityAddDice  → roll-once: { target, dice, sign }. Resolved to abilityAdd at roll time.
  //   abilityAdd      → { target, value }
  //   speedMul        → multiply current speed
  //   speedAdd        → add (or subtract) to current speed
  //   hpPerHD         → +value HP per HD
  //   biteDamageAdd   → +value to bite damage
  //   attackAdd       → +value to all attack rolls
  //   damageAdd       → +value to all damage rolls
  //   removeFeatureIfBuild → remove a feature key if build matches
  //
  // Absence of `effects`, or `effects: []`, means the trait is narrative-only —
  // its rules text is shown but no number on the stat block changes.

  const BAD_TRAITS = [
    { key: "Poor Mobility", trainable:false,
      text: "Moves at half speed (due to joints, age, or genetics).",
      effects: [{ kind: "speedMul", value: 0.5 }] },
    { key: "Mouthiness",    trainable:true,
      text: "Will often (50%) try to bite anyone within 5 feet.",
      effects: [] },
    { key: "Prey Driven",   trainable:true,
      text: "Will often (50%) chase any perceived small prey it notices.",
      effects: [] },
    { key: "Barker",        trainable:true,
      text: "Will often (50%) bark when excited, surprised, or uncertain.",
      effects: [] },
    { key: "Lonely",        trainable:true,
      text: "Refuses to stay alone; follows master regardless of commands.",
      effects: [] },
    { key: "Intolerant",    trainable:true,
      text: "Exhausted easily in extreme weather (GM determines Hot/Cold, or by breed).",
      effects: [] },
    { key: "Stubborn",      trainable:true,
      text: "Disadvantage on Animal Handling checks.",
      effects: [] },
    { key: "Untrained",     trainable:true,
      text: "Never known a master; must be trained.",
      effects: [] },
    { key: "Wanderlust",    trainable:true,
      text: "Likely to wander off if bored or unattended. Returns after GM-determined time.",
      effects: [] }
  ];

  const NEUTRAL_TRAITS = [
    { key: "Chewer",        trainable:false,
      text: "May damage objects when kenneled, unattended, or bored, but deals +2 damage on bite attacks.",
      effects: [{ kind: "biteDamageAdd", value: 2 }] },
    { key: "Runt",          trainable:false,
      text: "Smaller than average (Strength −1d4), but faster (Dexterity +1d4). Giant dogs lose Powerful Build.",
      effects: [
        { kind: "abilityAddDice", target: "str", dice: "1d4", sign: -1 },
        { kind: "abilityAddDice", target: "dex", dice: "1d4", sign:  1 },
        { kind: "removeFeatureIfBuild", feature: "Powerful Build", build: "Giant" }
      ] },
    { key: "Green",         trainable:true,
      text: "Untrained but has no negative traits.",
      effects: [] },
    { key: "Hard Keeper",   trainable:false,
      text: "Costs 2× as much to feed, but gains +1 to HP per HD.",
      effects: [{ kind: "hpPerHD", value: 1 }] },
    { key: "Headstrong",    trainable:true,
      text: "Disadvantage on Animal Handling checks, but advantage on Wisdom saves vs. fear.",
      effects: [] },
    { key: "Single Master", trainable:true,
      text: "Will not accept commands from anyone other than its Master.",
      effects: [] },
    { key: "Underfoot",     trainable:false,
      text: "Constantly nearby (may cause penalties to reactions or surprise), but can pass through allied spaces without penalty.",
      effects: [] }
  ];

  const GOOD_TRAITS = [
    { key: "Aggressive",    trainable:false,
      text: "Advantage on Wisdom saves vs. fear, and +1 to attack and damage rolls.",
      effects: [{ kind: "attackAdd", value: 1 }, { kind: "damageAdd", value: 1 }] },
    { key: "Easy Keeper",   trainable:false,
      text: "Feed costs are halved.",
      effects: [] },
    { key: "Fast",          trainable:false,
      text: "Movement speed increased by 10 feet.",
      effects: [{ kind: "speedAdd", value: 10 }] },
    { key: "Energetic",     trainable:false,
      text: "+1 to attack rolls, damage rolls, and Speed +5 feet.",
      effects: [{ kind: "attackAdd", value: 1 }, { kind: "damageAdd", value: 1 }, { kind: "speedAdd", value: 5 }] },
    { key: "Knows Trick",   trainable:true,  text: null, isTrick: true,
      effects: [] },
    { key: "Leaper",        trainable:false,
      text: "Can leap up to 6 feet vertically.",
      effects: [] },
    { key: "Strong",        trainable:false,
      text: "Increase Strength score by 1d4.",
      effects: [{ kind: "abilityAddDice", target: "str", dice: "1d4", sign: 1 }] }
  ];

  const TRICKS = [
    { key: "Message",  trainable:true, text: "Will seek out a recognized ally (up to 4 miles away) on command, usually to bring an item or message." },
    { key: "Whistle",  trainable:true, text: "Will come to your whistle when within hearing distance." },
    { key: "Stay",     trainable:true, text: "Will wait in a 30-foot radius when instructed, for up to 2d4 hours." },
    { key: "Fetch",    trainable:true, text: "Will fetch one predetermined item. The item may be changed once per week." },
    { key: "Play Dead",trainable:true, text: "Pretends to be dead for 1d4 hours or until commanded otherwise." },
    { key: "Search",   trainable:true, text: "Proficient in Perception for finding traps or objects; searches a 10-ft. area for 1 minute on command. Scout archetypes gain Expertise." }
  ];

  // ========== Stat block data ==========
  //
  // Base block per archetype|build. The Bite action is parameterized
  // (finesse: uses max(STR, DEX) mod), so trait math propagates naturally.
  // Features are stored as keys into FEATURES; their text renders against
  // the live ability scores.

  const STAT_BLOCK_DATA = {
    "Guard|Standard": {
      archetype: "Guard", build: "Standard",
      size: "Small", type: "Beast", alignment: "Unaligned",
      ac: 13, hp: 13, hd: "3d6+3", hdCount: 3, speed: 40, pb: 2,
      abilities: { str:13, dex:17, con:13, int:3, wis:13, cha:8 },
      skillProfs: [["Perception","wis"],["Insight","wis"],["Intimidation","cha"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["Alert"],
      bite: { damageDie: "1d4", damageType: "piercing",
              grappleSize: "Small", rider: null, advBoost: null }
    },
    "Guard|Heavy": {
      archetype: "Guard", build: "Heavy",
      size: "Medium", type: "Beast", alignment: "Unaligned",
      ac: 12, hp: 13, hd: "2d8+4", hdCount: 2, speed: 40, pb: 2,
      abilities: { str:15, dex:15, con:15, int:3, wis:13, cha:8 },
      skillProfs: [["Perception","wis"],["Insight","wis"],["Intimidation","cha"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["Alert"],
      bite: { damageDie: "1d6", damageType: "piercing",
              grappleSize: "Medium", rider: null, advBoost: null }
    },
    "Guard|Giant": {
      archetype: "Guard", build: "Giant",
      size: "Medium", type: "Beast", alignment: "Unaligned",
      ac: 11, hp: 13, hd: "2d8+4", hdCount: 2, speed: 40, pb: 2,
      abilities: { str:17, dex:13, con:15, int:3, wis:13, cha:8 },
      skillProfs: [["Perception","wis"],["Insight","wis"],["Intimidation","cha"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["Alert","PowerfulBuild"],
      bite: { damageDie: "1d8", damageType: "piercing",
              grappleSize: "Medium", rider: null, advBoost: null }
    },
    "Hunting|Standard": {
      archetype: "Hunting", build: "Standard",
      size: "Small", type: "Beast", alignment: "Unaligned",
      ac: 13, hp: 13, hd: "3d6+3", hdCount: 3, speed: 40, pb: 2,
      abilities: { str:13, dex:17, con:13, int:3, wis:13, cha:8 },
      skillProfs: [["Perception","wis"],["Stealth","dex"],["Survival","wis"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["KeenTracker"],
      bite: { damageDie: "1d4", damageType: "piercing",
              grappleSize: null, rider: "speedReduce10", advBoost: null }
    },
    "Hunting|Heavy": {
      archetype: "Hunting", build: "Heavy",
      size: "Medium", type: "Beast", alignment: "Unaligned",
      ac: 12, hp: 13, hd: "2d8+4", hdCount: 2, speed: 40, pb: 2,
      abilities: { str:15, dex:15, con:15, int:3, wis:13, cha:7 },
      skillProfs: [["Perception","wis"],["Stealth","dex"],["Survival","wis"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["KeenTracker"],
      bite: { damageDie: "1d6", damageType: "piercing",
              grappleSize: null, rider: "speedReduce10", advBoost: null }
    },
    "Scout|Standard": {
      archetype: "Scout", build: "Standard",
      size: "Small", type: "Beast", alignment: "Unaligned",
      ac: 13, hp: 13, hd: "3d6+3", hdCount: 3, speed: 40, pb: 2,
      abilities: { str:13, dex:17, con:13, int:3, wis:13, cha:7 },
      skillProfs: [["Acrobatics","dex"],["Perception","wis"],["Stealth","dex"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["HazardSense"],
      bite: { damageDie: "1d4", damageType: "piercing",
              grappleSize: null, rider: null, advBoost: "doubleDice" }
    },
    "Scout|Heavy": {
      archetype: "Scout", build: "Heavy",
      size: "Medium", type: "Beast", alignment: "Unaligned",
      ac: 12, hp: 13, hd: "2d8+4", hdCount: 2, speed: 40, pb: 2,
      abilities: { str:15, dex:15, con:15, int:3, wis:13, cha:7 },
      skillProfs: [["Acrobatics","dex"],["Perception","wis"],["Stealth","dex"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["HazardSense"],
      bite: { damageDie: "1d6", damageType: "piercing",
              grappleSize: null, rider: null, advBoost: "doubleDice" }
    },
    "War|Standard": {
      archetype: "War", build: "Standard",
      size: "Small", type: "Beast", alignment: "Unaligned",
      ac: 13, hp: 13, hd: "3d6+3", hdCount: 3, speed: 40, pb: 2,
      abilities: { str:13, dex:17, con:13, int:3, wis:13, cha:8 },
      skillProfs: [["Perception","wis"],["Insight","wis"],["Intimidation","cha"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["Charger"],
      bite: { damageDie: "1d4", damageType: "piercing",
              grappleSize: null, rider: null, advBoost: null }
    },
    "War|Heavy": {
      archetype: "War", build: "Heavy",
      size: "Medium", type: "Beast", alignment: "Unaligned",
      ac: 12, hp: 13, hd: "2d8+4", hdCount: 2, speed: 40, pb: 2,
      abilities: { str:15, dex:15, con:15, int:3, wis:13, cha:7 },
      skillProfs: [["Perception","wis"],["Insight","wis"],["Intimidation","cha"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["Charger"],
      bite: { damageDie: "1d6", damageType: "piercing",
              grappleSize: null, rider: null, advBoost: null }
    },
    "War|Giant": {
      archetype: "War", build: "Giant",
      size: "Medium", type: "Beast", alignment: "Unaligned",
      ac: 11, hp: 13, hd: "2d8+4", hdCount: 2, speed: 40, pb: 2,
      abilities: { str:17, dex:13, con:15, int:3, wis:13, cha:7 },
      skillProfs: [["Acrobatics","dex"],["Athletics","str"]],
      senses: { darkvision: 60 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: ["Charger","PowerfulBuild"],
      bite: { damageDie: "1d8", damageType: "piercing",
              grappleSize: null, rider: null, advBoost: null }
    }
  };

  // Features: key → function (live block) → { name, text }
  // Live block is passed so DC-bearing features pick up the current STR mod.
  const FEATURES = {
    Alert: () => ({
      name: "Alert",
      text: "The dog cannot be surprised while conscious."
    }),
    PowerfulBuild: () => ({
      name: "Powerful Build",
      text: "The dog counts as one size larger when determining its carrying capacity and the weight it can push, drag, or lift."
    }),
    KeenTracker: () => ({
      name: "Keen Tracker",
      text: "The dog has advantage on Wisdom (Survival) checks that rely on smell to track creatures."
    }),
    HazardSense: () => ({
      name: "Hazard Sense",
      text: "The dog has advantage on Wisdom (Perception) checks made to detect traps, hazards, or hidden objects."
    }),
    Charger: (b) => ({
      name: "Charger",
      text: `If the dog moves at least 15 ft. straight toward a target and hits with Bite on the same turn, the target takes an extra 2 (1d4) bludgeoning damage, and must succeed on a DC ${strSaveDC(b)} Strength saving throw or be knocked prone.`
    })
  };

  function strSaveDC(block) {
    return 8 + mod(block.abilities.str) + block.pb;
  }

  // ========== Trait effect resolution ==========

  // Replace abilityAddDice with abilityAdd carrying the resolved roll.
  function resolveTraitEffects(trait) {
    if (!trait.effects || !trait.effects.length) return trait;
    const resolved = trait.effects.map(eff => {
      if (eff.kind === "abilityAddDice") {
        const roll = rollDice(eff.dice);
        return {
          kind: "abilityAdd",
          target: eff.target,
          value: roll * eff.sign,
          source: { dice: eff.dice, sign: eff.sign, roll }
        };
      }
      return eff;
    });
    return { ...trait, effects: resolved };
  }

  // Apply one resolved effect; mutate the block; return a human log string or null.
  function applyEffect(block, eff, build) {
    switch (eff.kind) {
      case "speedMul": {
        const before = block.speed;
        block.speed = Math.round(block.speed * eff.value);
        return `Speed ${before} → ${block.speed} ft. (×${eff.value})`;
      }
      case "speedAdd": {
        const before = block.speed;
        block.speed = before + eff.value;
        return `Speed ${before} → ${block.speed} ft. (${sign(eff.value)})`;
      }
      case "abilityAdd": {
        const a = eff.target;
        const before = block.abilities[a];
        const after = Math.max(1, before + eff.value);
        block.abilities[a] = after;
        const label = a.toUpperCase();
        const src = eff.source;
        const note = src
          ? ` (${sign(eff.value)}, rolled ${src.dice})`
          : ` (${sign(eff.value)})`;
        return `${label} ${before} → ${after}${note}`;
      }
      case "hpPerHD": {
        const extra = eff.value * block.hdCount;
        block.bonuses.hpExtra += extra;
        return `HP +${extra} (+${eff.value} per HD × ${block.hdCount} HD)`;
      }
      case "biteDamageAdd": {
        block.bonuses.biteDamage += eff.value;
        return `Bite damage ${sign(eff.value)}`;
      }
      case "attackAdd": {
        block.bonuses.attack += eff.value;
        return `Attack ${sign(eff.value)}`;
      }
      case "damageAdd": {
        block.bonuses.damage += eff.value;
        return `Damage ${sign(eff.value)}`;
      }
      case "removeFeatureIfBuild": {
        if (build !== eff.build) return null;
        // Feature keys are CamelCase; the effect names the human-facing name.
        const key = eff.feature.replace(/\s+/g, "");
        const idx = block.features.indexOf(key);
        if (idx >= 0) {
          block.features.splice(idx, 1);
          return `removes ${eff.feature} (${build} build)`;
        }
        return null;
      }
      default:
        return null;
    }
  }

  // Build a live stat block from base + traits, with re-derived numbers.
  function computeLiveBlock(baseKey, traits, build) {
    const base = STAT_BLOCK_DATA[baseKey];
    if (!base) return null;
    const block = deepClone(base);
    block.bonuses = { attack: 0, damage: 0, biteDamage: 0, hpExtra: 0 };

    const log = [];
    for (const tr of (traits || [])) {
      const changes = [];
      for (const eff of (tr.effects || [])) {
        const change = applyEffect(block, eff, build);
        if (change) changes.push(change);
      }
      if (changes.length) log.push({ trait: tr.key, kind: tr.kind || "trait", changes });
    }

    // Derive: ability mods, HP, bite text.
    block.abilityMods = {};
    for (const a of ["str","dex","con","int","wis","cha"]) {
      block.abilityMods[a] = mod(block.abilities[a]);
    }
    block.computedHP = block.hp + block.bonuses.hpExtra;
    block.initiative = block.abilityMods.dex;

    // Skills with proficiency:
    block.skills = (block.skillProfs || []).map(([name, ab]) => ({
      name, ability: ab,
      bonus: block.abilityMods[ab] + block.pb
    }));

    // Passive Perception:
    const wisMod = block.abilityMods.wis;
    const hasPerc = (block.skillProfs || []).some(([n]) => n === "Perception");
    block.passivePerception = 10 + wisMod + (hasPerc ? block.pb : 0);

    // Rendered features (resolved against live block):
    block.featureBlocks = (block.features || []).map(k => {
      const fn = FEATURES[k];
      return fn ? fn(block) : { name: k, text: "" };
    });

    // Bite rendering:
    block.biteRendered = renderBite(block);

    return { block, log };
  }

  function renderBite(block) {
    const strM = block.abilityMods.str;
    const dexM = block.abilityMods.dex;
    const primary = Math.max(strM, dexM);
    const primaryLabel = primary === dexM && dexM > strM ? "Dex" : "Str";
    const attackBonus = primary + block.pb + (block.bonuses.attack || 0);
    const dmgBonus = primary + (block.bonuses.damage || 0) + (block.bonuses.biteDamage || 0);
    const [dCount, dSize] = block.bite.damageDie.split("d").map(Number);
    const dmgAvg = Math.max(1, avgDmg(dCount, dSize, dmgBonus));

    const rollStr = `${dCount}d${dSize}${dmgBonus !== 0 ? ` ${signedWord(dmgBonus)}` : ""}`;

    let txt = `Melee Weapon Attack: ${sign(attackBonus)} to hit, reach 5 ft., one target. Hit: ${dmgAvg} (${rollStr}) ${block.bite.damageType} damage`;

    if (block.bite.advBoost === "doubleDice") {
      const dAdv = Math.max(1, avgDmg(dCount * 2, dSize, dmgBonus));
      const advRoll = `${dCount * 2}d${dSize}${dmgBonus !== 0 ? ` ${signedWord(dmgBonus)}` : ""}`;
      txt += `, or ${dAdv} (${advRoll}) ${block.bite.damageType} damage if the dog had advantage on the attack roll`;
    }
    txt += ".";

    if (block.bite.rider === "speedReduce10") {
      txt += " If the target is a Medium or smaller creature, its speed is reduced by 10 feet until the start of the dog's next turn.";
    }
    if (block.bite.grappleSize) {
      const dc = 8 + strM + block.pb; // grapple always uses Str
      txt += ` If the target is a ${block.bite.grappleSize} or smaller creature, it must succeed on a DC ${dc} Strength saving throw (8 + PB + Str Mod) or gain the Grappled condition (escape DC ${dc}).`;
    }

    return {
      name: "Bite",
      text: txt,
      attackBonus,
      damageAvg: dmgAvg,
      damageRoll: rollStr,
      primaryAbility: primaryLabel
    };
  }

  // Short summary line for menu / compact-strip usage.
  function shortStatSummary(block) {
    const a = block.abilityMods;
    return `${block.size} beast · AC ${block.ac} · HP ${block.computedHP} (${block.hd}) · Spd ${block.speed} ft · STR ${block.abilities.str} DEX ${block.abilities.dex} CON ${block.abilities.con} · CR ${block.cr}`;
  }

  // ========== Names ==========

  const NAME_ROOTS = [
    "Cinder","Sorrel","Bramble","Marrow","Tally","Wisp","Coalfoot","Pip","Tug","Knuckle",
    "Spindle","Hob","Husk","Rune","Reek","Quint","Bracken","Slate","Gristle","Hazel",
    "Mossy","Brace","Drum","Ash","Ember","Yew","Linnet","Crow","Plover","Vesper",
    "Tinder","Brisket","Larch","Whetstone","Quarrel","Buckthorn","Garron","Tibb","Wren","Furze",
    "Bodge","Cobble","Holler","Tare","Pike","Drog","Hatch","Briar","Old Mossy","Black Pip",
    "Red Marrow","Stoneclaw","Greatpaw","Beggar","Reverend"
  ];
  const NAME_EPITHETS = [
    "the Black","of Helmsgrave","of the Vault","of the Ledger","Ash-coat","of Long Memory",
    "of Three Ditches","Hearthwise","of the Low Gate","Briarback","of the Old Roads",
    "Stonelick","the Dust","of Marrow Hall","of the Cold Hearth"
  ];

  // ========== Age ranges ==========

  const AGE_RANGES = {
    "Standard|Puppy":     { roll: () => rollN(2,6),     unit: "months" },
    "Standard|Adult":     { roll: () => rollN(1,10),    unit: "years"  },
    "Standard|Senior":    { roll: () => rollN(1,4)+8,   unit: "years"  },
    "Standard|Geriatric": { roll: () => rollN(1,4)+12,  unit: "years"  },
    "Heavy|Puppy":        { roll: () => rollN(2,8),     unit: "months" },
    "Heavy|Adult":        { roll: () => rollN(1,6)+1,   unit: "years"  },
    "Heavy|Senior":       { roll: () => rollN(1,6)+6,   unit: "years"  },
    "Heavy|Geriatric":    { roll: () => rollN(1,4)+11,  unit: "years"  },
    "Giant|Puppy":        { roll: () => rollN(2,12),    unit: "months" },
    "Giant|Adult":        { roll: () => rollN(2,3),     unit: "years"  },
    "Giant|Senior":       { roll: () => rollN(1,4)+5,   unit: "years"  },
    "Giant|Geriatric":    { roll: () => rollN(1,4)+8,   unit: "years"  }
  };

  // ========== Disposition tiers + pricing ==========

  const DISPOSITION_TIERS = [
    { value: "random",     label: "Random" },
    { value: "liability",  label: "Liability" },
    { value: "rough",      label: "Rough" },
    { value: "unschooled", label: "Unschooled" },
    { value: "sound",      label: "Sound" },
    { value: "promising",  label: "Promising" },
    { value: "prized",     label: "Prized" },
    { value: "storied",    label: "Storied" }
  ];

  const BASE_PRICE = { Hunting: 10, Scout: 15, Guard: 20, War: 25 };

  function resolveDisposition(d) {
    let tier = d;
    if (!tier || tier === "random") {
      const r = rollN(1,100);
      tier = r <= 10 ? "liability"
           : r <= 20 ? "rough"
           : r <= 35 ? "unschooled"
           : r <= 60 ? "sound"
           : r <= 75 ? "promising"
           : r <= 90 ? "prized" : "storied";
    }
    const map = {
      liability:  { label:"Liability",  pct:-75, bad:2, neutral:0, good:0 },
      rough:      { label:"Rough",      pct:-50, bad:1, neutral:0, good:0 },
      unschooled: { label:"Unschooled", pct:-25, bad:1, neutral:1, good:0 },
      sound:      { label:"Sound",      pct:  0, bad:0, neutral:1, good:0 },
      promising:  { label:"Promising",  pct:+25, bad:0, neutral:1, good:1 },
      prized:     { label:"Prized",     pct:+75, bad:0, neutral:0, good:2 },
      storied:    { label:"Storied",    pct:+125,bad:0, neutral:0, good:2 }
    };
    return { tier, ...map[tier] };
  }

  function computePrice(archetype, pct) {
    const base = BASE_PRICE[archetype] || 15;
    const final = Math.max(1, Math.round(base * (1 + pct/100)));
    const s = pct > 0 ? "+" : pct < 0 ? "−" : "±";
    const pctLabel = pct === 0 ? "±0%" : s + Math.abs(pct) + "%";
    return { base, pct, final, pctLabel };
  }

  // ========== Generator ==========

  function createDogGenerator() {
    const recent = [];
    const MAX_RECENT = 14;

    function chooseBreed(archetype, build) {
      const arch = (!archetype || archetype === "any") ? pick(Object.keys(ARCHETYPE_BREEDS)) : archetype;
      let pool = ARCHETYPE_BREEDS[arch];
      if (build && build !== "any") {
        const filtered = pool.filter(([, b]) => b === build);
        if (filtered.length) pool = filtered;
      }
      const [breed, breedBuild] = pick(pool);
      return { archetype: arch, breed, build: breedBuild };
    }

    function chooseAge(build, ageOpt) {
      let category;
      if (!ageOpt || ageOpt === "any") {
        const r = rollN(2,6);
        category = r <= 2 ? "Puppy" : r <= 6 ? "Adult" : r === 7 ? "Senior" : "Geriatric";
      } else category = ageOpt;
      const key = build + "|" + category;
      const rangeFn = AGE_RANGES[key];
      const value = rangeFn ? rangeFn.roll() : 1;
      const unit = rangeFn ? rangeFn.unit : "years";
      return { category, value, unit, label: `${value} ${unit} (${category})` };
    }

    function rollCoat() {
      return rollCoatOfKind(pick(COAT_FAMILIES).kind);
    }
    function rollCoatOfKind(kind) {
      if (kind === "Solid") {
        return { family: "Solid", name: pick(SOLID_COLORS), extra: "", note: "" };
      }
      if (kind === "Wild") {
        const pattern = pick(WILD_PATTERNS);
        return { family: "Wild", name: pattern, extra: `, on ${pick(SOLID_COLORS).toLowerCase()}`, note: COAT_NOTE[pattern] || "" };
      }
      if (kind === "Markings") {
        const pattern = pick(MARKINGS);
        return { family: "Markings", name: pattern, extra: `, on ${pick(SOLID_COLORS).toLowerCase()}`, note: COAT_NOTE[pattern] || "" };
      }
      if (kind === "Brindle") {
        const pattern = pick(BRINDLES);
        return { family: "Brindle", name: pattern, extra: "", note: COAT_NOTE[pattern] || "" };
      }
      if (kind === "Tick") {
        const pattern = pick(TICKROAN);
        return { family: "Tick", name: pattern, extra: "", note: COAT_NOTE[pattern] || "" };
      }
      if (kind === "Body") {
        const pattern = pick(BODYMARK);
        let extra = "";
        if (pattern === "Spotted Tricolor") extra = `, on ${pick(SOLID_COLORS).toLowerCase()}`;
        return { family: "Body", name: pattern, extra, note: COAT_NOTE[pattern] || "" };
      }
      if (kind === "Merle") {
        const pattern = pick(MERLES);
        let extra = "";
        if (pattern === "Harlequin" || pattern === "Agouti Merle") {
          extra = `, on ${pick(SOLID_COLORS).toLowerCase()}`;
        } else if (pattern === "Double Merle") {
          extra = `, over ${pick(MERLES.filter(m => m !== "Double Merle")).toLowerCase()}`;
        }
        return { family: "Merle", name: pattern, extra, note: COAT_NOTE[pattern] || "" };
      }
      return { family: "Solid", name: pick(SOLID_COLORS), extra: "", note: "" };
    }

    function rollName() {
      let tries = 0, name;
      do {
        const root = pick(NAME_ROOTS);
        const ep = chance(0.18) ? ", " + pick(NAME_EPITHETS) : "";
        name = root + ep;
        tries++;
      } while (recent.includes(name) && tries < 12);
      if (recent.length >= MAX_RECENT) recent.shift();
      recent.push(name);
      return name;
    }

    function rollTraits(D) {
      const usedBad = new Set(), usedNeutral = new Set(), usedGood = new Set();
      const bad = []; const neutral = []; const good = []; const tricks = [];
      for (let i = 0; i < D.bad; i++)     bad.push(pickUnused(BAD_TRAITS, usedBad));
      for (let i = 0; i < D.neutral; i++) neutral.push(pickUnused(NEUTRAL_TRAITS, usedNeutral));
      for (let i = 0; i < D.good; i++) {
        const g = pickUnused(GOOD_TRAITS, usedGood);
        good.push(g);
        if (g.isTrick) tricks.push(pick(TRICKS));
      }
      return { bad, neutral, good, tricks };
    }

    function generate(opts = {}) {
      const { archetype = "any", build = "any", age = "any", disposition = "random" } = opts;

      const D = resolveDisposition(disposition);
      const a = chooseBreed(archetype, build);
      const price = computePrice(a.archetype, D.pct);
      const ageInfo = chooseAge(a.build, age);
      const name = rollName();
      const coat = rollCoat();
      const traits = rollTraits(D);

      // Appearance — one factual sentence, breed + build + coat.
      const buildAdj = a.build === "Giant" ? "giant" : a.build === "Heavy" ? "heavy" : "standard";
      const coatLine = coat.note
        ? `${coat.name} coat — ${coat.note}${coat.extra}`
        : `${coat.name} coat${coat.extra}`;
      const appearance = `${cap(buildAdj)}-build ${a.breed}; ${coatLine}.`;

      // Build the trait list (with effects resolved — dice rolled once and frozen).
      const traitList = [
        ...traits.good.map(t   => resolveTraitEffects({ kind:"good",    key:t.key, text:t.text, trainable:t.trainable, isTrick:!!t.isTrick, effects:t.effects })),
        ...traits.neutral.map(t=> resolveTraitEffects({ kind:"neutral", key:t.key, text:t.text, trainable:t.trainable, effects:t.effects })),
        ...traits.bad.map(t    => resolveTraitEffects({ kind:"bad",     key:t.key, text:t.text, trainable:t.trainable, effects:t.effects }))
      ];

      const trickList = traits.tricks.map(t => ({ key: t.key, text: t.text, trainable: t.trainable }));

      // Compute live block.
      const liveKey = a.archetype + "|" + a.build;
      const { block: statBlock, log: modifierLog } = computeLiveBlock(liveKey, traitList, a.build);

      // Short summary stays as `notes` for back-compat (used in saved-roster export, etc.).
      const notes = shortStatSummary(statBlock);

      // Trainable badge list.
      const trainable = [];
      traits.bad.forEach(t => { if (t.trainable) trainable.push(t.key); });
      traits.neutral.forEach(t => { if (t.trainable) trainable.push(t.key); });
      traits.good.forEach((t) => {
        if (!t.trainable) return;
        if (t.isTrick) {
          const tk = trickList[trickList.length - 1];
          trainable.push(`Knows Trick${tk ? " (" + tk.key + ")" : ""}`);
        } else {
          trainable.push(t.key);
        }
      });

      return {
        name,
        breed: a.breed,
        archetype: a.archetype,
        build: a.build,
        age: ageInfo.label,
        disposition: D.label,
        price,
        appearance,
        traits: traitList,
        tricks: trickList,
        statBlock,
        modifierLog,
        notes,
        trainable,
        coat: coat.name
      };
    }

    return { generate };
  }

  // Recompute a live stat block for a saved/legacy dog. Used to upgrade
  // dogs that were saved to localStorage before this schema existed —
  // they have traits, archetype, build, so we can rebuild the live block.
  function rebuildStatBlock(dog) {
    if (!dog || !dog.archetype || !dog.build) return null;
    const key = dog.archetype + "|" + dog.build;
    if (!STAT_BLOCK_DATA[key]) return null;
    const traits = (dog.traits || []).map(t => {
      // If a legacy trait lacks effects, look it up from the master table.
      if (!t.effects) {
        const pool = t.kind === "good" ? GOOD_TRAITS
                   : t.kind === "neutral" ? NEUTRAL_TRAITS
                   : t.kind === "bad" ? BAD_TRAITS : [];
        const master = pool.find(m => m.key === t.key);
        if (master && master.effects && master.effects.length) {
          return resolveTraitEffects({ ...t, effects: master.effects });
        }
        return { ...t, effects: [] };
      }
      return t;
    });
    return computeLiveBlock(key, traits, dog.build);
  }

  // ========== Renowned Hounds ==========
  //
  // Each is defined by trait keys; the engine enriches each trait with effects
  // from the master tables, rolls any dice once at module load, and computes
  // the live stat block. The rolls stay stable for the page session; when
  // added to a roster they get persisted along with the rolled values.

  const SIGNATURE_SEEDS = [
    { name: "Old Mossy of Helmsgrave", breed: "Mountain Dog", archetype: "Guard", build: "Giant",
      age: "11 years (Senior)", disposition: "Storied",
      appearance: "Giant-build Mountain Dog; Saddle marking — a darker patch saddled across the back, on fading black.",
      good: ["Easy Keeper","Knows Trick"], neutral: ["Single Master"], bad: [],
      trick: "Stay" },
    { name: "Wisp", breed: "Fox Terrier", archetype: "Scout", build: "Standard",
      age: "4 years (Adult)", disposition: "Prized",
      appearance: "Standard-build Fox Terrier; Piebald marking — irregular patches of white over the colour, on jet black.",
      good: ["Leaper","Knows Trick"], neutral: [], bad: [],
      trick: "Search" },
    { name: "Wodensbane", breed: "Wolfhound", archetype: "War", build: "Giant",
      age: "5 years (Adult)", disposition: "Prized",
      appearance: "Giant-build Wolfhound; Blue Merle coat — black patches on a slate-blue diluted ground.",
      good: ["Aggressive","Strong"], neutral: [], bad: [] },
    { name: "Marrow", breed: "Bloodhound", archetype: "Hunting", build: "Heavy",
      age: "6 years (Adult)", disposition: "Storied",
      appearance: "Heavy-build Bloodhound; Black and Tan body marking — black above with crisp tan at the brows, muzzle, and legs.",
      good: ["Fast","Easy Keeper","Knows Trick"], neutral: [], bad: [],
      trick: "Message" },
    { name: "Bramble", breed: "Beagle", archetype: "Scout", build: "Standard",
      age: "3 years (Adult)", disposition: "Promising",
      appearance: "Standard-build Beagle; Black Tricolor body marking — black main coat combined with distinct white markings and tan points.",
      good: ["Leaper"], neutral: ["Underfoot"], bad: [] },
    { name: "The Ironback", breed: "Molossus", archetype: "War", build: "Heavy",
      age: "7 years (Senior)", disposition: "Storied",
      appearance: "Heavy-build Molossus; Dark Brindle coat — near-black ground crossed by faint stripes.",
      good: ["Strong","Aggressive","Knows Trick"], neutral: [], bad: [],
      trick: "Stay" },
    { name: "Tally-ho", breed: "Foxhound", archetype: "Hunting", build: "Heavy",
      age: "4 years (Adult)", disposition: "Prized",
      appearance: "Heavy-build Foxhound; Sable Tricolor body marking — sable main coat combined with distinct white markings and tan points.",
      good: ["Fast","Energetic"], neutral: [], bad: [] },
    { name: "Reverend", breed: "Hovawart", archetype: "Guard", build: "Heavy",
      age: "8 years (Senior)", disposition: "Prized",
      appearance: "Heavy-build Hovawart; Black and Tan body marking — black above with crisp tan at the brows, muzzle, and chest.",
      good: ["Easy Keeper","Knows Trick"], neutral: [], bad: [],
      trick: "Whistle" },
    { name: "Quartermaster", breed: "Alaunt", archetype: "War", build: "Heavy",
      age: "5 years (Adult)", disposition: "Sound",
      appearance: "Heavy-build Alaunt; Sable Tricolor body marking — sable main coat combined with distinct white markings and tan points.",
      good: [], neutral: ["Single Master"], bad: [] },
    { name: "Gristle", breed: "Mastiff", archetype: "War", build: "Giant",
      age: "9 years (Senior)", disposition: "Promising",
      appearance: "Giant-build Mastiff; Dark Mask marking — dark pigmentation covering the muzzle, on fawn.",
      good: ["Strong"], neutral: ["Hard Keeper"], bad: [] },
    { name: "Pip", breed: "Springer Spaniel", archetype: "Hunting", build: "Standard",
      age: "2 years (Adult)", disposition: "Promising",
      appearance: "Standard-build Springer Spaniel; Liver and White body marking — distinct patches of liver on a white background.",
      good: ["Energetic","Knows Trick"], neutral: [], bad: ["Lonely"],
      trick: "Fetch" },
    { name: "Old Briar", breed: "Giant Schnauzer", archetype: "Scout", build: "Heavy",
      age: "10 years (Geriatric)", disposition: "Storied",
      appearance: "Heavy-build Giant Schnauzer; Agouti wild pattern — individual hairs banded with light and dark, on silver.",
      good: ["Easy Keeper","Knows Trick"], neutral: ["Underfoot"], bad: [],
      trick: "Search" }
  ];

  function findTrait(kind, key) {
    const pool = kind === "good" ? GOOD_TRAITS : kind === "neutral" ? NEUTRAL_TRAITS : BAD_TRAITS;
    return pool.find(t => t.key === key);
  }
  function findTrick(key) { return TRICKS.find(t => t.key === key); }

  const DISPO_PCT = { Liability:-75, Rough:-50, Unschooled:-25, Sound:0, Promising:25, Prized:75, Storied:125 };

  const SIGNATURE_HOUNDS = SIGNATURE_SEEDS.map(seed => {
    const traitList = [];
    seed.good.forEach(k => {
      const m = findTrait("good", k);
      if (m) traitList.push(resolveTraitEffects({ kind:"good", key:m.key, text:m.text, trainable:m.trainable, isTrick:!!m.isTrick, effects:m.effects }));
    });
    seed.neutral.forEach(k => {
      const m = findTrait("neutral", k);
      if (m) traitList.push(resolveTraitEffects({ kind:"neutral", key:m.key, text:m.text, trainable:m.trainable, effects:m.effects }));
    });
    seed.bad.forEach(k => {
      const m = findTrait("bad", k);
      if (m) traitList.push(resolveTraitEffects({ kind:"bad", key:m.key, text:m.text, trainable:m.trainable, effects:m.effects }));
    });
    const tricks = [];
    if (seed.trick) {
      const t = findTrick(seed.trick);
      if (t) tricks.push({ key: t.key, text: t.text, trainable: true });
    }
    const trainable = [];
    seed.bad.forEach(k => { const m = findTrait("bad", k); if (m && m.trainable) trainable.push(k); });
    seed.neutral.forEach(k => { const m = findTrait("neutral", k); if (m && m.trainable) trainable.push(k); });
    seed.good.forEach(k => {
      const m = findTrait("good", k);
      if (!m || !m.trainable) return;
      if (m.isTrick) trainable.push(`Knows Trick (${seed.trick || ""})`.replace(" ()","")); else trainable.push(k);
    });

    const liveKey = seed.archetype + "|" + seed.build;
    const { block: statBlock, log: modifierLog } = computeLiveBlock(liveKey, traitList, seed.build);
    const price = computePrice(seed.archetype, DISPO_PCT[seed.disposition] ?? 0);
    const notes = shortStatSummary(statBlock);

    return {
      name: seed.name,
      breed: seed.breed,
      archetype: seed.archetype,
      build: seed.build,
      age: seed.age,
      disposition: seed.disposition,
      appearance: seed.appearance,
      traits: traitList,
      tricks,
      statBlock,
      modifierLog,
      notes,
      trainable,
      price
    };
  });

  // ========== Public API ==========

  global.CanineCompanions = {
    createDogGenerator,
    rebuildStatBlock,
    computeLiveBlock,
    SIGNATURE_HOUNDS,
    DISPOSITION_TIERS,
    BASE_PRICE,
    STAT_BLOCK_DATA,
    FEATURES,
    BAD_TRAITS, NEUTRAL_TRAITS, GOOD_TRAITS, TRICKS,
    ARCHETYPES: ["Guard","Hunting","Scout","War"],
    BUILDS: ["Standard","Heavy","Giant"],
    AGES: ["Puppy","Adult","Senior","Geriatric"]
  };
})(window);
