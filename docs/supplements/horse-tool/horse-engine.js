/* Hoof & Rein — generator engine.
 *
 * Source: Hoof & Rein supplement.
 *
 * Pipeline:
 *   1. Roll gender (Gelding / Mare / Stallion), which selects the horse-type pool.
 *   2. Roll horse type (Donkey/Mule, Draft, Pony, Riding, Wild, War Light/Medium/Heavy).
 *   3. Roll age category (varies by gender) and the numeric age within it.
 *   4. Roll appearance: base coat × dilution × markings/patterns.
 *   5. Roll traits per disposition tier (bad / neutral / good) using the age-bracket
 *      d100 tables.
 *   6. For dice-defined trait effects, roll once and freeze the resolved value
 *      on the trait, so the same horse re-renders identically across reloads.
 *   7. Compute a live stat block for types with one (Draft, Wild, Warhorse ×3).
 *      Pony / Riding Horse / Donkey-or-Mule use the official published stat block
 *      per the source — we surface a note rather than fabricate numbers.
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
    const m = expr.match(/^(\d+)d(\d+)(?:\+(\d+))?$/);
    if (!m) return 0;
    const n = parseInt(m[1], 10), s = parseInt(m[2], 10), b = m[3] ? parseInt(m[3], 10) : 0;
    return rollN(n, s) + b;
  }

  function pickUnused(arr, used) {
    const fresh = arr.filter(x => !used.has(x.key));
    const r = pick(fresh.length ? fresh : arr);
    used.add(r.key);
    return r;
  }

  // ========== Gender / Type ==========

  const GENDERS = ["Gelding", "Mare", "Stallion"];

  // d10 for Gelding/Mare; d12 for Stallion.
  const TYPE_OTHER = [
    { range: [1,2],  type: "Donkey or Mule" },
    { range: [3,4],  type: "Draft Horse" },
    { range: [5,6],  type: "Pony" },
    { range: [7,10], type: "Riding Horse" }
  ];
  const TYPE_MALE = [
    { range: [1,1],   type: "Wild Horse" },
    { range: [2,3],   type: "Donkey or Mule" },
    { range: [4,5],   type: "Draft Horse" },
    { range: [6,7],   type: "Pony" },
    { range: [8,9],   type: "Riding Horse" },
    { range: [10,10], type: "Light War Horse" },
    { range: [11,11], type: "Medium War Horse" },
    { range: [12,12], type: "Heavy War Horse" }
  ];

  const ALL_TYPES = [
    "Donkey or Mule", "Pony", "Riding Horse", "Draft Horse",
    "Wild Horse", "Light War Horse", "Medium War Horse", "Heavy War Horse"
  ];
  // Types that may appear for each gender.
  const TYPES_FOR_GENDER = {
    Gelding:  ["Donkey or Mule", "Draft Horse", "Pony", "Riding Horse"],
    Mare:     ["Donkey or Mule", "Draft Horse", "Pony", "Riding Horse"],
    Stallion: ["Wild Horse", "Donkey or Mule", "Draft Horse", "Pony", "Riding Horse",
               "Light War Horse", "Medium War Horse", "Heavy War Horse"]
  };

  const TYPE_BLURB = {
    "Donkey or Mule":   "small, sure-footed, durable; bred for short hauling and rough terrain.",
    "Draft Horse":      "large, muscular, bred for heavy labor; unmatched at draught, slow under saddle.",
    "Pony":             "shorter than full-sized horses but strong for the build; sometimes stubborn.",
    "Riding Horse":     "the everyday mount of merchants, travelers, and messengers — dependable, well-rounded.",
    "Wild Horse":       "untrained and wary of people; must be broken before it can be ridden.",
    "Light War Horse":  "fast and maneuverable; for skirmishers, scouts, and mounted archers.",
    "Medium War Horse": "balance of speed and strength; the knight's and cavalryman's choice.",
    "Heavy War Horse":  "fearless and aggressive, bred to carry armor and trample through ranks."
  };

  function rollTypeForGender(gender) {
    if (gender === "Stallion") {
      const r = rollN(1, 12);
      return TYPE_MALE.find(t => r >= t.range[0] && r <= t.range[1]).type;
    }
    const r = rollN(1, 10);
    return TYPE_OTHER.find(t => r >= t.range[0] && r <= t.range[1]).type;
  }

  function rollGender() {
    const r = rollN(1, 12);
    return r <= 4 ? "Gelding" : r <= 8 ? "Mare" : "Stallion";
  }

  // ========== Age tables ==========

  // Age categories used by the trait tables: "Young" / "Adult" / "Old".
  const AGE_TABLES = {
    Gelding: [
      { range: [1,2], label: "Gelding Colt", years: () => rollN(2,2),     bracket: "young" },
      { range: [3,6], label: "Gelding",      years: () => rollN(2,8) + 2, bracket: "adult" },
      { range: [7,7], label: "Aged",         years: () => rollN(8,4),     bracket: "old"   },
      { range: [8,8], label: "Crowbait",     years: () => rollN(10,4),    bracket: "old"   }
    ],
    Mare: [
      { range: [1,1], label: "Foal",  years: () => 0,                 yearsLabel: "<1", bracket: "young" },
      { range: [2,2], label: "Filly", years: () => rollN(1,3) + 1,    bracket: "young" },
      { range: [3,4], label: "Dam",   years: () => rollN(3,6) + 2,    bracket: "adult" },
      { range: [5,6], label: "Mare",  years: () => rollN(3,6),        bracket: "adult" },
      { range: [7,7], label: "Aged",  years: () => rollN(8,4),        bracket: "old"   },
      { range: [8,8], label: "Nag",   years: () => rollN(10,4),       bracket: "old"   }
    ],
    Stallion: [
      { range: [1,1], label: "Foal",      years: () => 0,             yearsLabel: "<1", bracket: "young" },
      { range: [2,2], label: "Colt",      years: () => rollN(1,3)+1,  bracket: "young" },
      { range: [3,4], label: "Stud",      years: () => rollN(3,6)+2,  bracket: "adult" },
      { range: [5,6], label: "Stallion",  years: () => rollN(3,6),    bracket: "adult" },
      { range: [7,7], label: "Aged",      years: () => rollN(8,4),    bracket: "old"   },
      { range: [8,8], label: "Crowbait",  years: () => rollN(10,4),   bracket: "old"   }
    ]
  };

  function rollAge(gender, ageOption) {
    const table = AGE_TABLES[gender];
    let row;
    if (!ageOption || ageOption === "any") {
      const r = rollN(1, 8);
      row = table.find(r2 => r >= r2.range[0] && r <= r2.range[1]);
    } else {
      // ageOption is a bracket: "young" / "adult" / "old"
      const candidates = table.filter(r2 => r2.bracket === ageOption);
      row = pick(candidates);
    }
    const yrs = row.years();
    const yearsLabel = row.yearsLabel ? row.yearsLabel : String(yrs);
    return {
      category: row.label,
      years: yrs,
      yearsLabel,
      bracket: row.bracket,
      label: `${row.label} · ${yearsLabel} yr${(typeof yrs === 'number' && yrs === 1) ? "" : "s"}`
    };
  }

  // ========== Appearance ==========

  // Each subtable below preserves the source's d-roll mapping so weights match.
  // Where the source uses paired ranges (e.g. 1-2 / 3-4), we encode them
  // explicitly rather than picking uniformly from the deduped name list.

  const BAY_SUB = ["Blood Bay","Copper Bay","Dark Bay","Faded Bay","Gold Bay","Mahogany Bay"]; // d6, unique
  const CHESTNUT_SUB = ["Sorrel","Liver Chestnut","Cherry Chestnut","Golden Chestnut","Honey Chestnut","Black Chestnut"]; // d6, unique
  const GRAY_SUB = [
    { range: [1,1], val: "Gray" }, { range: [2,2], val: "Dapple Gray" }, { range: [3,3], val: "Rose Gray" },
    { range: [4,4], val: "Iron Gray" }, { range: [5,5], val: "Dark Gray" }, { range: [6,6], val: "Mulberry Gray" },
    { range: [7,7], val: "White Gray" }, { range: [8,8], val: "Fleabitten Gray", rerollAppearance: true },
    { range: [9,9], val: "Watermark Gray", rerollAppearance: true },
    { range: [10,10], val: "ROAN" }
  ];
  const ROAN_SUB = ["Strawberry Roan","Blue Roan","Red Roan","Lilac Roan","Honey Roan"]; // d10, 1-2/3-4/5-6/7-8/9-10
  // Dun Dilute d20: 1-2 Peach, 3-4 Red, 5-6 Copper, 7-8 Bronze, 9-10 Liver,
  // 11-12 Classic, 13-14 Buttermilk, 15 Slate, 16 Blue, 17 Silver, 18 Coyote,
  // 19 Wolf, 20 Olive.
  const DUN_SUB = [
    { range:[1,2],  val:"Peach Dun" }, { range:[3,4],  val:"Red Dun" },
    { range:[5,6],  val:"Copper Dun" }, { range:[7,8],  val:"Bronze Dun" },
    { range:[9,10], val:"Liver Dun" }, { range:[11,12],val:"Classic Dun" },
    { range:[13,14],val:"Buttermilk Dun" }, { range:[15,15],val:"Slate Dun" },
    { range:[16,16],val:"Blue Dun" }, { range:[17,17],val:"Silver Dun" },
    { range:[18,18],val:"Coyote Dun" }, { range:[19,19],val:"Wolf Dun" },
    { range:[20,20],val:"Olive Dun" }
  ];
  // Cream Dilute 2d6: index 2..12 directly into this array.
  const CREAM_SUB = [
    null,null,
    "Golden Palomino","Caramel Palomino","Cremello","Smoky Black","Smoky Cream",
    "Buckskin","Buttermilk Buckskin","Golden Buckskin","Bronze Buckskin","Perlino","Black Buckskin"
  ];
  // Champagne d10, 1-2/3-4/5-6/7-8/9-10 — even weights so a uniform
  // pick from 5 is mathematically identical, but encoded explicitly.
  const CHAMP_SUB = [
    { range:[1,2],   val:"Gold Champagne" },
    { range:[3,4],   val:"Amber Champagne" },
    { range:[5,6],   val:"Champagne Black" },
    { range:[7,8],   val:"Sable Champagne" },
    { range:[9,10],  val:"Dark Gold Champagne" }
  ];
  // Silver Dilute d4 — unique entries.
  const SILVER_SUB = ["Silver Dapple","Chocolate Silver","Red Silver","Blue Silver"];
  // Dilute Combination d100, faithful ranges.
  const DILUTE_COMBO = [
    { range:[1,5],    val:"Yellow Dun" }, { range:[6,10],   val:"Cream Dun" },
    { range:[11,14],  val:"Gold Cream" }, { range:[15,18],  val:"Ivory Champagne" },
    { range:[19,22],  val:"Gold Dun" },   { range:[23,26],  val:"Smoky Black Dun" },
    { range:[27,30],  val:"Smoky Cream Grulla" }, { range:[31,34],  val:"Silver Smoky Black" },
    { range:[35,38],  val:"Smoky Black Champagne" }, { range:[39,43],  val:"Classic Dun Champagne" },
    { range:[44,46],  val:"Silver Dapple Grulla" },  { range:[47,51],  val:"Classic Silver" },
    { range:[52,55],  val:"Silver Dapple Smoky Grulla" }, { range:[56,60],  val:"Dunskin" },
    { range:[61,65],  val:"Dun Perlino" }, { range:[66,70],  val:"Silver Buckskin" },
    { range:[71,75],  val:"Amber Cream" }, { range:[76,80],  val:"Amber Dun" },
    { range:[81,84],  val:"Amber Silver" }, { range:[85,88],  val:"Brown Dunskin" },
    { range:[89,92],  val:"Sable Cream" }, { range:[93,96],  val:"Sable Dun" },
    { range:[97,100], val:"Pearl" }
  ];

  // Basic Patterns 2d4, weighted by sum. Indexed 2..8 directly.
  const BASIC_PATTERNS = [
    null,null,
    "Rabicano","Sooty","Lemonsilla","Mealy","Flaxen","Brindle","Reverse Brindle"
  ];
  // Pinto Patterns d10: 1..9 unique, 10 = recursion across Pinto/Appaloosa/Appearance.
  const PINTO_PATTERNS = [
    "Minimal Tobiano","Tobiano","Extreme Tobiano","Medicine Hat","Full Head Tobiano",
    "Frame","Sabino","Splash White","Tovero"
  ];
  // Appaloosa Patterns d12: 1..11 unique, 12 = recursion.
  const APPALOOSA_PATTERNS = [
    "Minimal Blanket","Blanket","Extended Blanket","Leopard","Semi-Leopard",
    "Marble","Frost","Snowflake","Snowcap","Ghost","Halo Spots"
  ];
  // Other Markings d6 — unique entries.
  const OTHER_MARKINGS = [
    "Birdcatcher Spots","Chubari Spots","Grease Spots","Manchado","Lacing","Mosaic"
  ];

  // Helper: look up a value in a [{range, val}] list by die roll.
  function pickFromRanges(rows, r) {
    return rows.find(x => r >= x.range[0] && r <= x.range[1]).val;
  }

  // Source d20 main appearance table.
  // depth guards us against pathological pattern-recursion loops.
  function rollAppearance(depth = 0) {
    const r = rollN(1, 20);
    if (r === 1) return { base: "Jet Black", description: "a deep, glossy black coat without any fading or highlights" };
    if (r === 2) return { base: "Fading Black", description: "black in winter, fading to brown or rusty tones in the sun" };
    if (r === 3) return { base: "Seal Brown", description: "nearly black with subtle reddish or mahogany highlights at flanks and muzzle" };
    if (r === 4) return { base: "Brown", description: "a solid brown coat, uniform with no black points" };
    if (r <= 6) {
      const sub = pick(BAY_SUB);
      return { base: sub, family: "Bay", description: "reddish-brown coat with black points at mane, tail, and legs" };
    }
    if (r <= 8) {
      const sub = pick(CHESTNUT_SUB);
      return { base: sub, family: "Chestnut", description: "a reddish coat with no black points; mane and tail match or run lighter" };
    }
    if (r <= 10) return rollGray(depth);
    if (r <= 12) {
      const sub = pickFromRanges(DUN_SUB, rollN(1, 20));
      return { base: sub, family: "Dun Dilute", description: "a dusty, muted ground with a dark dorsal stripe and primitive markings" };
    }
    if (r <= 14) {
      const sub = CREAM_SUB[rollN(2, 6)];
      return { base: sub, family: "Cream Dilute", description: "a soft, light golden coat — often paired with blue or hazel eyes" };
    }
    if (r <= 16) {
      const sub = pickFromRanges(CHAMP_SUB, rollN(1, 10));
      return { base: sub, family: "Champagne Dilute", description: "soft gold or amber with freckled skin and light eyes" };
    }
    if (r <= 18) {
      const sub = pick(SILVER_SUB);
      return { base: sub, family: "Silver Dilute", description: "black pigment lightened to silver in mane and tail" };
    }
    if (r === 19) {
      const sub = pickFromRanges(DILUTE_COMBO, rollN(1, 100));
      return { base: sub, family: "Dilute Combination", description: "layered dilution genes producing a rare, complex coat" };
    }
    // 20 — patterns
    return rollPatterns(depth);
  }

  function rollGray(depth = 0) {
    const r = rollN(1, 10);
    const row = GRAY_SUB.find(g => r >= g.range[0] && r <= g.range[1]);
    if (row.val === "ROAN") {
      const sub = pickFromRanges(ROAN_SUB.map((v,i) => ({ range:[i*2+1, i*2+2], val:v })), rollN(1, 10));
      return { base: sub, family: "Gray › Roan", description: "an even intermix of colored and white hairs across the body" };
    }
    if (row.rerollAppearance && depth < 2) {
      // Fleabitten / Watermark Gray: source says reroll on Horse Appearance.
      // We layer the second roll as an overlay note.
      const overlay = rollAppearance(depth + 1);
      return {
        base: `${row.val} over ${overlay.base}`,
        family: "Gray",
        description: `${overlay.description}, ticked or watermarked with gray`
      };
    }
    return { base: row.val, family: "Gray", description: "a gray coat lightening with age; coats darken-to-silver over years" };
  }

  function rollPatterns(depth = 0) {
    const r = rollN(1, 4);
    if (r === 1) {
      const idx = rollN(2, 4); // 2..8
      const pat = BASIC_PATTERNS[idx];
      const baseInner = rollNonPatternBase();
      return { base: `${pat} ${baseInner.base}`, family: "Basic Pattern", description: `${pat.toLowerCase()} variation on a ${baseInner.base.toLowerCase()} ground` };
    }
    if (r === 2) {
      const rPinto = rollN(1, 10);
      if (rPinto === 10 && depth < 2) {
        // Source: "Pinto, Appaloosa, and Appearance Subtables" — recurse through patterns.
        return rollPatterns(depth + 1);
      }
      const pat = PINTO_PATTERNS[Math.min(rPinto - 1, PINTO_PATTERNS.length - 1)];
      const baseInner = rollNonPatternBase();
      return { base: `${pat} on ${baseInner.base}`, family: "Pinto Pattern", description: "large, irregular patches of white over the base coat" };
    }
    if (r === 3) {
      const rApp = rollN(1, 12);
      if (rApp === 12 && depth < 2) {
        return rollPatterns(depth + 1);
      }
      const pat = APPALOOSA_PATTERNS[Math.min(rApp - 1, APPALOOSA_PATTERNS.length - 1)];
      const baseInner = rollNonPatternBase();
      return { base: `${pat} on ${baseInner.base}`, family: "Appaloosa Pattern", description: "mottling, spots, and blankets of color over the hindquarters" };
    }
    const pat = pick(OTHER_MARKINGS);
    const baseInner = rollNonPatternBase();
    return { base: `${pat} on ${baseInner.base}`, family: "Other Marking", description: "rare or unusual figuring — freckling, marbling, or lacework" };
  }

  // Helper for pattern subrolls — drops the pattern branch to avoid infinite recursion.
  function rollNonPatternBase() {
    const r = rollN(1, 19);
    if (r === 1) return { base: "Jet Black" };
    if (r === 2) return { base: "Fading Black" };
    if (r === 3) return { base: "Seal Brown" };
    if (r === 4) return { base: "Brown" };
    if (r <= 6) return { base: pick(BAY_SUB) };
    if (r <= 8) return { base: pick(CHESTNUT_SUB) };
    if (r <= 10) {
      const g = rollGray(2); // depth=2 caps any further appearance reroll
      return { base: g.base };
    }
    if (r <= 12) return { base: pickFromRanges(DUN_SUB, rollN(1, 20)) };
    if (r <= 14) return { base: CREAM_SUB[rollN(2,6)] };
    if (r <= 16) return { base: pickFromRanges(CHAMP_SUB, rollN(1, 10)) };
    if (r <= 18) return { base: pick(SILVER_SUB) };
    return { base: pickFromRanges(DILUTE_COMBO, rollN(1, 100)) };
  }

  // ========== Trait tables ==========
  //
  // Effects use the same shape as Canine Companions:
  //   abilityAdd      { target, value }
  //   abilityAddDice  { target, dice, sign } — resolved once at roll time
  //   speedMul / speedAdd
  //   hpPerHD         { value }
  //   attackAdd       { value } / damageAdd { value }
  //   hoofDamageAdd   { value }
  //   carryPctAdd     { value }   — narrative carrying-capacity adjustment, not on the stat block
  //   feedCostMul     { value }   — also narrative (no roll number)
  //   adv_fear        — flag for advantage on Wis saves vs. fear
  //   note            — purely narrative text

  const BAD_TRAITS = [
    { key: "Lame",          trainable: false, max: 1,
      text: "Injured at a joint or hoof; unusable for riding above a walk or for pulling vehicles.",
      effects: [{ kind: "speedMul", value: 0.5 }, { kind: "note", text: "Cannot canter, gallop, or pull a vehicle." }] },
    { key: "Biter",         trainable: true,
      text: "Often (50%) tries to bite anyone within 5 feet for 1d4 + STR damage.",
      effects: [{ kind: "note", text: "Adds an opportunistic Bite action (1d4 + Str)." }] },
    { key: "Bucker",        trainable: true,
      text: "Often (50%) attempts to buck anyone on its back.",
      effects: [] },
    { key: "Kicker",        trainable: true,
      text: "Often (50%) attempts to kick anyone within 5 feet that is not its rider.",
      effects: [] },
    { key: "Rears",         trainable: true,
      text: "Often (50%) rears in combat. A DC 15 Animal Handling check is required to stay mounted.",
      effects: [] },
    { key: "Rough String",  trainable: true,
      text: "Bites, bucks, or kicks every time it is saddled.",
      effects: [] },
    { key: "Stubborn",      trainable: true,
      text: "Disadvantage on Animal Handling checks made to direct the horse.",
      effects: [] },
    { key: "Untrained",     trainable: true,
      text: "The horse has never known a rider and must be trained before it can be ridden.",
      effects: [] },
    { key: "Won't Gallop",  trainable: true,
      text: "Refuses to travel faster than a canter. Effective top speed is doubled, not quadrupled.",
      effects: [{ kind: "note", text: "Treats Speed × 2 as its maximum gait." }] }
  ];

  const NEUTRAL_TRAITS = [
    { key: "Chews Fences",  trainable: false,
      text: "May cause damage when stabled, but gains a Bite attack (1d4 + STR) as a bonus action.",
      effects: [{ kind: "feature", name: "Bite (bonus)", text: "Bonus Action — Melee Weapon Attack, reach 5 ft., one target. Hit: 1d4 + Str piercing damage." }] },
    { key: "Cob",           trainable: false,
      text: "Shorter than average for its type, but with a 10% increased carrying capacity.",
      effects: [{ kind: "carryPctAdd", value: 10 }] },
    { key: "Green",         trainable: true,
      text: "Untrained but has no negative traits — a clean slate.",
      effects: [] },
    { key: "Hard Keeper",   trainable: false,
      text: "Costs twice as much to feed but can travel twice as long without tiring.",
      effects: [{ kind: "feedCostMul", value: 2 }, { kind: "note", text: "Doubles its forced-march endurance." }] },
    { key: "Headstrong",    trainable: true,
      text: "Disadvantage on Animal Handling checks, but advantage on Wisdom saving throws against fear.",
      effects: [{ kind: "adv_fear" }] },
    { key: "Single Rider",  trainable: true,
      text: "Will not accept any rider other than its chosen one.",
      effects: [] },
    { key: "Steps on Feet", trainable: false,
      text: "Awkward at close quarters and may step on a handler's foot, but deals +2 damage on hoof attacks.",
      effects: [{ kind: "hoofDamageAdd", value: 2 }] }
  ];

  const GOOD_TRAITS = [
    { key: "Charger",       trainable: false,
      text: "Advantage on Wisdom saving throws vs. fear, and +2 to attack and damage rolls when charging.",
      effects: [{ kind: "adv_fear" }, { kind: "note", text: "+2 to attack and damage rolls when charging (≥20 ft. straight line)." }] },
    { key: "Easy Keeper",   trainable: false,
      text: "Feed costs are halved.",
      effects: [{ kind: "feedCostMul", value: 0.5 }] },
    { key: "Fast",          trainable: false,
      text: "Movement speed increased by 15 feet.",
      effects: [{ kind: "speedAdd", value: 15 }] },
    { key: "High-Spirited", trainable: false,
      text: "+1 to attack rolls, +1 to damage rolls, and Speed +5 feet.",
      effects: [{ kind: "attackAdd", value: 1 }, { kind: "damageAdd", value: 1 }, { kind: "speedAdd", value: 5 }] },
    { key: "Knows Trick",   trainable: true,  text: null, isTrick: true, effects: [] },
    { key: "Leaper",        trainable: false,
      text: "No riding check is needed to clear obstacles up to 5 feet high or gaps up to 20 feet across.",
      effects: [] },
    { key: "Strong",        trainable: false,
      text: "Carrying capacity is increased by 15%.",
      effects: [{ kind: "carryPctAdd", value: 15 }] }
  ];

  const TRICKS = [
    { key: "Bow",          trainable: true, text: "Bows when prompted, so long as it is below its Max Canter Weight." },
    { key: "Whistle",      trainable: true, text: "Comes to its rider's whistle when within hearing distance." },
    { key: "Wait",         trainable: true, text: "Waits in a 30-foot radius when instructed, for up to 2d4 hours." },
    { key: "Fetch",        trainable: true, text: "Fetches one predetermined item. The item may be changed once per week." },
    { key: "Trick Riding", trainable: true, text: "Rider has advantage on Animal Handling checks involving tricks performed in the saddle." },
    { key: "Lie Down",     trainable: true, text: "Lies down when commanded, and remains so for up to 1 minute." }
  ];

  // ========== Disposition tiers (age-bracket d100 → tier) ==========

  const DISPOSITION_TIERS = [
    { value: "random",     label: "Random" },
    { value: "liability",  label: "Liability" },
    { value: "rough",      label: "Rough" },
    { value: "unschooled", label: "Unschooled" },
    { value: "sound",      label: "Sound" },
    { value: "steady",     label: "Steady" },
    { value: "promising",  label: "Promising" },
    { value: "prized",     label: "Prized" },
    { value: "storied",    label: "Storied" }
  ];

  // Per-bracket distribution match to source d100 tables.
  // Each entry: { tier, pct, bad, neutral, good }
  const TIER_SHAPE = {
    liability:  { label: "Liability",  pct: -75, bad: 2, neutral: 0, good: 0 },
    rough:      { label: "Rough",      pct: -50, bad: 1, neutral: 0, good: 0 },
    unschooled: { label: "Unschooled", pct: -25, bad: 1, neutral: 1, good: 0 },
    sound:      { label: "Sound",      pct:   0, bad: 0, neutral: 1, good: 0 },
    steady:     { label: "Steady",     pct:   0, bad: 0, neutral: 2, good: 0 },
    promising:  { label: "Promising",  pct:  25, bad: 0, neutral: 1, good: 1 },
    prized:     { label: "Prized",     pct:  75, bad: 0, neutral: 0, good: 1 },
    storied:    { label: "Storied",    pct: 125, bad: 0, neutral: 0, good: 2 }
  };

  // d100 → tier for the Young / Adult / Old brackets, transcribed from the
  // source tables.
  function rollTier(bracket) {
    const r = rollN(1, 100);
    if (bracket === "young") {
      if (r <= 10) return "liability";
      if (r <= 20) return "rough";
      if (r <= 35) return "unschooled";
      if (r <= 50) return "sound";
      if (r <= 60) return "steady";
      if (r <= 75) return "promising";
      if (r <= 90) return "prized";
      return "storied";
    }
    if (bracket === "adult") {
      if (r <= 10) return "liability";
      if (r <= 20) return "rough";
      if (r <= 30) return "unschooled";
      if (r <= 50) return "sound";
      if (r <= 60) return "steady";
      if (r <= 70) return "promising";
      if (r <= 90) return "prized";
      return "storied";
    }
    // old
    if (r <= 20) return "liability";
    if (r <= 30) return "rough";
    if (r <= 50) return "unschooled";
    if (r <= 60) return "sound";
    if (r <= 70) return "steady";
    if (r <= 80) return "promising";
    if (r <= 90) return "prized";
    return "storied";
  }

  function resolveDisposition(tierOpt, bracket) {
    const t = (!tierOpt || tierOpt === "random") ? rollTier(bracket) : tierOpt;
    return { tier: t, ...TIER_SHAPE[t] };
  }

  // ========== Base prices ==========

  const BASE_PRICE = {
    "Donkey or Mule":   8,
    "Pony":             30,
    "Draft Horse":      50,
    "Wild Horse":       25,
    "Riding Horse":     75,
    "Light War Horse":  150,
    "Medium War Horse": 250,
    "Heavy War Horse":  400
  };

  function computePrice(type, pct) {
    const base = BASE_PRICE[type] || 50;
    const final = Math.max(1, Math.round(base * (1 + pct/100)));
    const s = pct > 0 ? "+" : pct < 0 ? "−" : "±";
    const pctLabel = pct === 0 ? "±0%" : s + Math.abs(pct) + "%";
    return { base, pct, final, pctLabel };
  }

  // ========== Stat blocks ==========
  //
  // Five types from the source: Draft, Wild, Warhorse Light/Medium/Heavy.
  // Pony / Riding Horse / Donkey-or-Mule explicitly defer to the official
  // published stat block per the source — we surface a notes line for those.

  const STAT_BLOCK_DATA = {
    "Draft Horse": {
      label: "Horse, Draft",
      size: "Large", type: "Beast", alignment: "Unaligned",
      ac: 10, hp: 15, hd: "2d10 + 4", hdCount: 2, speed: 40, pb: 2,
      abilities: { str:20, dex:10, con:14, int:2, wis:11, cha:6 },
      saveProfs: ["wis"],
      skillProfs: [],
      senses: { darkvision: 0 },
      languages: "—",
      cr: "1/2", xp: 100,
      features: [
        { name: "Beast of Burden", text: "The draft horse counts as one size larger for the purpose of carrying capacity and push/drag/lift limits." }
      ],
      attacks: [
        { name: "Hooves", attackAbility: "str", dice: "1d6", bonus: 5, damageType: "bludgeoning", reach: 5 }
      ]
    },
    "Wild Horse": {
      label: "Horse, Wild",
      size: "Large", type: "Beast", alignment: "Unaligned",
      ac: 12, hp: 19, hd: "3d10 + 3", hdCount: 3, speed: 60, pb: 2,
      abilities: { str:16, dex:14, con:12, int:2, wis:13, cha:5 },
      saveProfs: ["wis"],
      skillProfs: [],
      senses: { darkvision: 0 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: [
        { name: "Wary", text: "The horse has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
      ],
      attacks: [
        { name: "Hooves", attackAbility: "str", dice: "1d8", bonus: 3, damageType: "bludgeoning", reach: 5 }
      ]
    },
    "Light War Horse": {
      label: "Warhorse, Light",
      size: "Large", type: "Beast", alignment: "Unaligned",
      ac: 12, hp: 13, hd: "2d10 + 2", hdCount: 2, speed: 70, pb: 2,
      abilities: { str:15, dex:14, con:12, int:2, wis:12, cha:6 },
      saveProfs: [],
      skillProfs: [],
      senses: { darkvision: 0 },
      languages: "—",
      cr: "1/4", xp: 50,
      features: [
        { name: "Multiattack", text: "The horse makes one Hooves attack and one Bite attack." }
      ],
      attacks: [
        { name: "Hooves", attackAbility: "str", dice: "2d4", bonus: 2, damageType: "bludgeoning", reach: 5 },
        { name: "Bite",   attackAbility: "str", dice: "1d6", bonus: 2, damageType: "piercing",     reach: 5 }
      ]
    },
    "Medium War Horse": {
      label: "Warhorse, Medium",
      size: "Large", type: "Beast", alignment: "Unaligned",
      ac: 11, hp: 24, hd: "3d10 + 6", hdCount: 3, speed: 60, pb: 2,
      abilities: { str:17, dex:12, con:14, int:2, wis:12, cha:6 },
      saveProfs: ["wis"],
      skillProfs: [],
      senses: { darkvision: 0 },
      languages: "—",
      cr: "1/2", xp: 100,
      features: [
        { name: "Multiattack", text: "The horse makes one Hooves attack and one Bite attack." }
      ],
      attacks: [
        { name: "Hooves", attackAbility: "str", dice: "2d4", bonus: 3, damageType: "bludgeoning", reach: 5,
          rider: "If the horse moved at least 20 ft. straight toward the target before hitting, the target must succeed on a DC 13 Strength saving throw or fall prone." },
        { name: "Bite",   attackAbility: "str", dice: "1d6", bonus: 3, damageType: "piercing",     reach: 5 }
      ]
    },
    "Heavy War Horse": {
      label: "Warhorse, Heavy",
      size: "Large", type: "Beast", alignment: "Unaligned",
      ac: 10, hp: 32, hd: "4d10 + 8", hdCount: 4, speed: 50, pb: 2,
      abilities: { str:18, dex:10, con:14, int:2, wis:12, cha:6 },
      saveProfs: ["wis"],
      skillProfs: [],
      senses: { darkvision: 0 },
      languages: "—",
      cr: "1", xp: 200,
      features: [
        { name: "Trampling Charge", text: "If the horse moves at least 20 feet straight toward a creature and hits it with a hoof attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage and must succeed on a DC 14 Strength saving throw or fall prone." },
        { name: "Multiattack",      text: "The horse makes one Hooves attack and one Bite attack." }
      ],
      attacks: [
        { name: "Hooves", attackAbility: "str", dice: "2d6", bonus: 4, damageType: "bludgeoning", reach: 5 },
        { name: "Bite",   attackAbility: "str", dice: "1d6", bonus: 4, damageType: "piercing",     reach: 5 }
      ]
    },
    "Riding Horse": {
      label: "Riding Horse",
      size: "Large", type: "Beast", alignment: "Unaligned",
      ac: 11, hp: 13, hd: "2d10 + 2", hdCount: 2, speed: 60, pb: 2,
      abilities: { str:16, dex:13, con:12, int:2, wis:11, cha:7 },
      saveProfs: [],
      skillProfs: [],
      senses: { darkvision: 0 },
      languages: "None",
      cr: "1/4", xp: 50,
      features: [],
      attacks: [
        { name: "Hooves", attackAbility: "str", dice: "1d8", bonus: 3, damageType: "bludgeoning", reach: 5 }
      ]
    },
    "Donkey or Mule": {
      label: "Mule",
      size: "Medium", type: "Beast", alignment: "Unaligned",
      ac: 10, hp: 11, hd: "2d8 + 2", hdCount: 2, speed: 40, pb: 2,
      abilities: { str:14, dex:10, con:13, int:2, wis:10, cha:5 },
      saveProfs: ["str"],
      skillProfs: [],
      senses: { darkvision: 0 },
      languages: "None",
      cr: "1/8", xp: 25,
      features: [
        { name: "Beast of Burden", text: "The mule counts as one size larger for the purpose of determining its carrying capacity." }
      ],
      attacks: [
        { name: "Hooves", attackAbility: "str", dice: "1d4", bonus: 2, damageType: "bludgeoning", reach: 5 }
      ]
    }
  };

  // ========== Trait effect resolution ==========

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

  function applyEffect(block, eff) {
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
        return `${a.toUpperCase()} ${before} → ${after} (${sign(eff.value)})`;
      }
      case "hpPerHD": {
        const extra = eff.value * block.hdCount;
        block.bonuses.hpExtra += extra;
        return `HP +${extra} (+${eff.value} per HD × ${block.hdCount} HD)`;
      }
      case "hoofDamageAdd": {
        block.bonuses.hoofDamage += eff.value;
        return `Hooves damage ${sign(eff.value)}`;
      }
      case "attackAdd": {
        block.bonuses.attack += eff.value;
        return `Attack ${sign(eff.value)}`;
      }
      case "damageAdd": {
        block.bonuses.damage += eff.value;
        return `Damage ${sign(eff.value)}`;
      }
      case "carryPctAdd": {
        block.bonuses.carryPct += eff.value;
        return `Carrying capacity ${sign(eff.value)}%`;
      }
      case "feedCostMul": {
        block.bonuses.feedMul *= eff.value;
        const lbl = eff.value > 1 ? `×${eff.value} feed` : `feed cost ÷${1/eff.value}`;
        return lbl;
      }
      case "adv_fear": {
        block.bonuses.advFear = true;
        return `Advantage vs. fear`;
      }
      case "feature": {
        block.addedFeatures.push({ name: eff.name, text: eff.text });
        return `Adds feature: ${eff.name}`;
      }
      case "note": {
        block.bonuses.notes.push(eff.text);
        return eff.text;
      }
      default:
        return null;
    }
  }

  function computeLiveBlock(typeKey, traits) {
    const base = STAT_BLOCK_DATA[typeKey];
    if (!base) return null;
    const block = deepClone(base);
    block.bonuses = { attack: 0, damage: 0, hoofDamage: 0, hpExtra: 0, carryPct: 0, feedMul: 1, advFear: false, notes: [] };
    block.addedFeatures = [];

    const log = [];
    for (const tr of (traits || [])) {
      const changes = [];
      for (const eff of (tr.effects || [])) {
        const change = applyEffect(block, eff);
        if (change) changes.push(change);
      }
      if (changes.length) log.push({ trait: tr.key, kind: tr.kind || "trait", changes });
    }

    block.abilityMods = {};
    for (const a of ["str","dex","con","int","wis","cha"]) block.abilityMods[a] = mod(block.abilities[a]);
    block.computedHP = block.hp + block.bonuses.hpExtra;
    block.initiative = block.abilityMods.dex;

    block.saves = (block.saveProfs || []).map(ab => ({
      ability: ab, bonus: block.abilityMods[ab] + block.pb
    }));
    block.skills = (block.skillProfs || []).map(([name, ab]) => ({
      name, ability: ab, bonus: block.abilityMods[ab] + block.pb
    }));
    const hasPerc = (block.skillProfs || []).some(([n]) => n === "Perception");
    block.passivePerception = 10 + block.abilityMods.wis + (hasPerc ? block.pb : 0);

    // Render attacks against live ability mods.
    block.attacksRendered = (block.attacks || []).map(a => renderAttack(a, block));

    // Live feature blocks: base features + features added by traits.
    block.featureBlocks = [...(block.features || []), ...block.addedFeatures];

    return { block, log };
  }

  function renderAttack(a, block) {
    const m = block.abilityMods[a.attackAbility];
    const attackBonus = m + block.pb + (block.bonuses.attack || 0);
    const dmgBase = (a.bonus || 0) + (block.bonuses.damage || 0) + (a.name === "Hooves" ? (block.bonuses.hoofDamage || 0) : 0);
    const [dCount, dSize] = a.dice.split("d").map(Number);
    const dmgAvg = Math.max(1, avgDmg(dCount, dSize, dmgBase));
    const rollStr = `${dCount}d${dSize}${dmgBase !== 0 ? ` ${signedWord(dmgBase)}` : ""}`;
    let txt = `Melee Weapon Attack: ${sign(attackBonus)} to hit, reach ${a.reach} ft., one target. Hit: ${dmgAvg} (${rollStr}) ${a.damageType} damage.`;
    if (a.rider) txt += " " + a.rider;
    return { name: a.name, text: txt };
  }

  function shortStatSummary(block) {
    return `${block.size} beast · AC ${block.ac} · HP ${block.computedHP} (${block.hd}) · Spd ${block.speed} ft · STR ${block.abilities.str} DEX ${block.abilities.dex} CON ${block.abilities.con} · CR ${block.cr}`;
  }

  // Stable note for types whose stat block is referred to the published source.
  const REFERRED_TYPES = new Set(["Pony"]);
  function referredStatNote(type) {
    return `Use the published stat block for a ${type}.`;
  }

  // ========== Names ==========

  const NAME_ROOTS = [
    "Ember","Saffron","Cinder","Marrow","Tally","Wisp","Coalfoot","Pip","Tug","Rune",
    "Spindle","Hob","Husk","Smoke","Reek","Quint","Bracken","Slate","Gristle","Hazel",
    "Mossy","Brace","Drum","Ash","Yew","Linnet","Crow","Plover","Vesper","Tinder",
    "Larch","Whetstone","Quarrel","Buckthorn","Garron","Tibb","Wren","Furze","Cobble","Holler",
    "Pike","Drog","Hatch","Briar","Black Pip","Red Marrow","Stoneflank","Greatpaw","Reverend",
    "Sorrel","Dapple","Comet","Hailshot","Thistle","Bayard","Old Mossy","Long Shadow",
    "Iron Bell","Bramble","Rye","Gallowsmare","Wagonback","Plowfoot","Galloper","Brimstone",
    "Foxglove","Mire","Pellet","Tussock","Cob","Halter","Snaffle","Bittersweet"
  ];
  const NAME_EPITHETS = [
    "the Black","of Helmsgrave","of the Vault","of the Long Road","Ash-coat","of Long Memory",
    "of Three Ditches","Hearthwise","of the Low Gate","Briarback","of the Old Roads",
    "Stonelick","the Dust","of Marrow Hall","of the Cold Hearth","of the High Pass",
    "Stormbringer","of the Salt Fens","Greymane","Wolfsbane","of the Iron Bridle"
  ];

  function rollName() {
    const root = pick(NAME_ROOTS);
    const ep = chance(0.18) ? ", " + pick(NAME_EPITHETS) : "";
    return root + ep;
  }

  // ========== Trait rolling ==========

  // Source recursion:
  //   Bad d10 → 10 = reroll on Neutral
  //   Neutral d8 → 8 = reroll on Good
  //   Good d8 → 8 = roll twice on Good
  //
  // Each "slot" the disposition asks for therefore cascades. We track the used
  // sets across cascades within a single generation so a single horse can't
  // duplicate the same trait via the recursive path.

  function rollOneBad(usedBad, usedNeutral, usedGood, bag) {
    const r = rollN(1, 10);
    if (r === 10) {
      rollOneNeutral(usedNeutral, usedGood, bag);
      return;
    }
    // Map 1..9 directly to the 9 entries in BAD_TRAITS (source order).
    const t = BAD_TRAITS[r - 1];
    if (!usedBad.has(t.key)) { usedBad.add(t.key); bag.bad.push(t); }
  }
  function rollOneNeutral(usedNeutral, usedGood, bag) {
    const r = rollN(1, 8);
    if (r === 8) {
      rollOneGood(usedGood, bag);
      return;
    }
    const t = NEUTRAL_TRAITS[r - 1];
    if (!usedNeutral.has(t.key)) { usedNeutral.add(t.key); bag.neutral.push(t); }
  }
  function rollOneGood(usedGood, bag) {
    const r = rollN(1, 8);
    if (r === 8) {
      // Roll twice on this table — each subroll can itself recurse.
      rollOneGood(usedGood, bag);
      rollOneGood(usedGood, bag);
      return;
    }
    const t = GOOD_TRAITS[r - 1];
    if (usedGood.has(t.key)) return;
    usedGood.add(t.key);
    bag.good.push(t);
    if (t.isTrick) bag.tricks.push(pick(TRICKS));
  }

  function rollTraits(D) {
    const usedBad = new Set(), usedNeutral = new Set(), usedGood = new Set();
    const bag = { bad: [], neutral: [], good: [], tricks: [] };
    for (let i = 0; i < D.bad; i++)     rollOneBad(usedBad, usedNeutral, usedGood, bag);
    for (let i = 0; i < D.neutral; i++) rollOneNeutral(usedNeutral, usedGood, bag);
    for (let i = 0; i < D.good; i++)    rollOneGood(usedGood, bag);
    return bag;
  }

  // ========== Main generate ==========

  function createHorseGenerator() {
    const recent = [];
    const MAX_RECENT = 14;

    function safeName() {
      let tries = 0, n;
      do { n = rollName(); tries++; } while (recent.includes(n) && tries < 12);
      if (recent.length >= MAX_RECENT) recent.shift();
      recent.push(n);
      return n;
    }

    function generate(opts = {}) {
      const { gender = "any", type = "any", age = "any", disposition = "random" } = opts;

      // Gender.
      const g = (!gender || gender === "any") ? rollGender() : gender;

      // Type, respecting gender constraints.
      let chosenType;
      if (!type || type === "any") {
        chosenType = rollTypeForGender(g);
      } else if (TYPES_FOR_GENDER[g].includes(type)) {
        chosenType = type;
      } else {
        // Caller asked for a type incompatible with the gender → fall back to a valid one.
        chosenType = rollTypeForGender(g);
      }

      // Age.
      const ageInfo = rollAge(g, age);

      // Disposition (bracket-aware d100 roll).
      const D = resolveDisposition(disposition, ageInfo.bracket);

      // Appearance.
      const coat = rollAppearance();

      // Traits.
      const t = rollTraits(D);

      const name = safeName();

      // Build trait list w/ effects resolved.
      const traitList = [
        ...t.good.map(x   => resolveTraitEffects({ kind:"good",    key:x.key, text:x.text, trainable:x.trainable, isTrick:!!x.isTrick, effects:x.effects })),
        ...t.neutral.map(x=> resolveTraitEffects({ kind:"neutral", key:x.key, text:x.text, trainable:x.trainable, effects:x.effects })),
        ...t.bad.map(x    => resolveTraitEffects({ kind:"bad",     key:x.key, text:x.text, trainable:x.trainable, effects:x.effects }))
      ];

      const trickList = t.tricks.map(tr => ({ key: tr.key, text: tr.text, trainable: tr.trainable }));

      // Stat block (if applicable).
      let statBlock = null, modifierLog = null, statNote = null;
      if (STAT_BLOCK_DATA[chosenType]) {
        const r = computeLiveBlock(chosenType, traitList);
        statBlock = r.block; modifierLog = r.log;
      } else if (REFERRED_TYPES.has(chosenType)) {
        statNote = referredStatNote(chosenType);
      }

      // Price.
      const price = computePrice(chosenType, D.pct);

      const appearance = `${coat.base} — ${coat.description}.`;

      const notes = statBlock ? shortStatSummary(statBlock) : (statNote || "");

      // Trainable badge list.
      const trainable = [];
      t.bad.forEach(x => { if (x.trainable) trainable.push(x.key); });
      t.neutral.forEach(x => { if (x.trainable) trainable.push(x.key); });
      t.good.forEach((x) => {
        if (!x.trainable) return;
        if (x.isTrick) {
          const tk = trickList[trickList.length - 1];
          trainable.push(`Knows Trick${tk ? " (" + tk.key + ")" : ""}`);
        } else {
          trainable.push(x.key);
        }
      });

      return {
        name,
        gender: g,
        type: chosenType,
        typeBlurb: TYPE_BLURB[chosenType] || "",
        age: ageInfo.label,
        ageBracket: ageInfo.bracket,
        disposition: D.label,
        price,
        appearance,
        coat: coat.base,
        coatFamily: coat.family || null,
        traits: traitList,
        tricks: trickList,
        statBlock,
        modifierLog,
        statNote,
        notes,
        trainable
      };
    }

    return { generate };
  }

  function rebuildStatBlock(horse) {
    if (!horse) return null;
    if (!STAT_BLOCK_DATA[horse.type]) return null;
    const traits = (horse.traits || []).map(t => {
      if (!t.effects) {
        const pool = t.kind === "good" ? GOOD_TRAITS : t.kind === "neutral" ? NEUTRAL_TRAITS : t.kind === "bad" ? BAD_TRAITS : [];
        const master = pool.find(m => m.key === t.key);
        if (master && master.effects && master.effects.length) return resolveTraitEffects({ ...t, effects: master.effects });
        return { ...t, effects: [] };
      }
      return t;
    });
    return computeLiveBlock(horse.type, traits);
  }

  // ========== Renowned Mounts ==========

  function findTrait(kind, key) {
    const pool = kind === "good" ? GOOD_TRAITS : kind === "neutral" ? NEUTRAL_TRAITS : BAD_TRAITS;
    return pool.find(t => t.key === key);
  }
  function findTrick(key) { return TRICKS.find(t => t.key === key); }

  const DISPO_PCT = { Liability:-75, Rough:-50, Unschooled:-25, Sound:0, Steady:0, Promising:25, Prized:75, Storied:125 };

  const RENOWNED_SEEDS = [
    { name: "Bayard of the Long Road", gender: "Stallion", type: "Heavy War Horse",
      age: "Stallion · 8 yrs", ageBracket: "adult", disposition: "Storied",
      appearance: "Mahogany Bay — reddish-brown coat with black points at mane, tail, and legs.",
      good: ["Charger","Strong"], neutral: [], bad: [] },
    { name: "Old Mossy", gender: "Gelding", type: "Draft Horse",
      age: "Gelding · 14 yrs", ageBracket: "adult", disposition: "Prized",
      appearance: "Dapple Gray — a gray coat lightening with age; coats darken-to-silver over years.",
      good: ["Easy Keeper","Knows Trick"], neutral: [], bad: [],
      trick: "Wait" },
    { name: "Wisp of the Salt Fens", gender: "Mare", type: "Riding Horse",
      age: "Mare · 6 yrs", ageBracket: "adult", disposition: "Prized",
      appearance: "Buckskin — a soft, light golden coat — often paired with blue or hazel eyes.",
      good: ["Fast","Knows Trick"], neutral: [], bad: [],
      trick: "Whistle" },
    { name: "Stoneflank", gender: "Stallion", type: "Medium War Horse",
      age: "Stallion · 7 yrs", ageBracket: "adult", disposition: "Prized",
      appearance: "Iron Gray — a gray coat lightening with age; coats darken-to-silver over years.",
      good: ["High-Spirited"], neutral: ["Single Rider"], bad: [] },
    { name: "Brimstone", gender: "Stallion", type: "Light War Horse",
      age: "Stallion · 5 yrs", ageBracket: "adult", disposition: "Promising",
      appearance: "Liver Chestnut — a reddish coat with no black points; mane and tail match or run lighter.",
      good: ["Fast"], neutral: ["Headstrong"], bad: [] },
    { name: "Gallowsmare", gender: "Mare", type: "Draft Horse",
      age: "Mare · 11 yrs", ageBracket: "adult", disposition: "Storied",
      appearance: "Fading Black — black in winter, fading to brown or rusty tones in the sun.",
      good: ["Strong","Knows Trick"], neutral: ["Hard Keeper"], bad: [],
      trick: "Lie Down" },
    { name: "Pellet, the Dust", gender: "Gelding", type: "Pony",
      age: "Gelding · 9 yrs", ageBracket: "adult", disposition: "Sound",
      appearance: "Sorrel — a reddish coat with no black points; mane and tail match or run lighter.",
      good: [], neutral: ["Cob"], bad: [] },
    { name: "Long Shadow", gender: "Stallion", type: "Wild Horse",
      age: "Stallion · 6 yrs", ageBracket: "adult", disposition: "Rough",
      appearance: "Coyote Dun — a dusty, muted ground with a dark dorsal stripe and primitive markings.",
      good: [], neutral: [], bad: ["Untrained"] },
    { name: "Snaffle", gender: "Mare", type: "Pony",
      age: "Filly · 3 yrs", ageBracket: "young", disposition: "Promising",
      appearance: "Strawberry Roan — an even intermix of colored and white hairs across the body.",
      good: ["Leaper"], neutral: ["Underfoot would, but"], bad: [] },
    { name: "Comet of the High Pass", gender: "Stallion", type: "Light War Horse",
      age: "Stallion · 6 yrs", ageBracket: "adult", disposition: "Storied",
      appearance: "Cremello — a soft, light golden coat — often paired with blue or hazel eyes.",
      good: ["Fast","High-Spirited"], neutral: [], bad: [] },
    { name: "Whetstone", gender: "Gelding", type: "Riding Horse",
      age: "Aged · 18 yrs", ageBracket: "old", disposition: "Sound",
      appearance: "Dark Bay — reddish-brown coat with black points at mane, tail, and legs.",
      good: [], neutral: ["Steps on Feet"], bad: [] },
    { name: "Iron Bell, the Reverend", gender: "Stallion", type: "Heavy War Horse",
      age: "Aged · 19 yrs", ageBracket: "old", disposition: "Storied",
      appearance: "Jet Black — a deep, glossy black coat without any fading or highlights.",
      good: ["Charger","Knows Trick"], neutral: [], bad: ["Stubborn"],
      trick: "Bow" }
  ];

  // Quick patch — the Snaffle seed used a neutral key that doesn't exist; swap.
  RENOWNED_SEEDS.forEach(s => { if (s.neutral && s.neutral.includes("Underfoot would, but")) s.neutral = ["Cob"]; });

  const RENOWNED_MOUNTS = RENOWNED_SEEDS.map(seed => {
    const traitList = [];
    (seed.good || []).forEach(k => {
      const m = findTrait("good", k);
      if (m) traitList.push(resolveTraitEffects({ kind:"good", key:m.key, text:m.text, trainable:m.trainable, isTrick:!!m.isTrick, effects:m.effects }));
    });
    (seed.neutral || []).forEach(k => {
      const m = findTrait("neutral", k);
      if (m) traitList.push(resolveTraitEffects({ kind:"neutral", key:m.key, text:m.text, trainable:m.trainable, effects:m.effects }));
    });
    (seed.bad || []).forEach(k => {
      const m = findTrait("bad", k);
      if (m) traitList.push(resolveTraitEffects({ kind:"bad", key:m.key, text:m.text, trainable:m.trainable, effects:m.effects }));
    });
    const tricks = [];
    if (seed.trick) {
      const t = findTrick(seed.trick);
      if (t) tricks.push({ key: t.key, text: t.text, trainable: true });
    }
    const trainable = [];
    (seed.bad || []).forEach(k => { const m = findTrait("bad", k); if (m && m.trainable) trainable.push(k); });
    (seed.neutral || []).forEach(k => { const m = findTrait("neutral", k); if (m && m.trainable) trainable.push(k); });
    (seed.good || []).forEach(k => {
      const m = findTrait("good", k);
      if (!m || !m.trainable) return;
      if (m.isTrick) trainable.push(`Knows Trick${seed.trick ? " (" + seed.trick + ")" : ""}`); else trainable.push(k);
    });

    let statBlock = null, modifierLog = null, statNote = null;
    if (STAT_BLOCK_DATA[seed.type]) {
      const r = computeLiveBlock(seed.type, traitList);
      statBlock = r.block; modifierLog = r.log;
    } else {
      statNote = referredStatNote(seed.type);
    }
    const price = computePrice(seed.type, DISPO_PCT[seed.disposition] ?? 0);
    const notes = statBlock ? shortStatSummary(statBlock) : (statNote || "");

    return {
      name: seed.name,
      gender: seed.gender,
      type: seed.type,
      typeBlurb: TYPE_BLURB[seed.type] || "",
      age: seed.age,
      ageBracket: seed.ageBracket,
      disposition: seed.disposition,
      appearance: seed.appearance,
      traits: traitList,
      tricks,
      statBlock,
      modifierLog,
      statNote,
      notes,
      trainable,
      price
    };
  });

  // ========== Public API ==========

  global.HoofAndRein = {
    createHorseGenerator,
    rebuildStatBlock,
    computeLiveBlock,
    RENOWNED_MOUNTS,
    DISPOSITION_TIERS,
    TIER_SHAPE,
    BASE_PRICE,
    STAT_BLOCK_DATA,
    TYPE_BLURB,
    TYPES_FOR_GENDER,
    ALL_TYPES,
    GENDERS,
    BAD_TRAITS, NEUTRAL_TRAITS, GOOD_TRAITS, TRICKS,
    AGES: ["young","adult","old"]
  };
})(window);
