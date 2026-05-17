/* Ancestors & Ale — generator engine v2.
 *
 * Driven by the PDF's quality tiers. One good descriptive voice, but with
 * sentence-frame variation so repeated pours don't feel templated.
 *
 * API:
 *   const gen = AncestorsAndAle.createDrinkGenerator();
 *   const drink = gen.generate({ beerType, quality, verbosity });
 *   // drink = { name, beerType, quality, appearance, scent, flavor, mouthfeel }
 *
 * Quality tiers (from PDF d20):
 *   basic        — off-flavors x2, no fruit/spice
 *   fine         — off-flavors x1, no fruit/spice
 *   average      — no off-flavors, no fruit/spice
 *   decent       — no off-flavors, fruit OR spice
 *   exceptional  — complex malt, fruit OR spice x2
 *   legendary    — layered malt, fruit OR spice x3
 *   random       — roll d20 per PDF distribution
 */

(function (global) {
  'use strict';

  // ---------- Tables (PDF-faithful) ----------

  const T = {
    nameTypes: ["Bock","Dark Ale","Hoppy Pale Ale","Lager","Pale Ale","Pilsner","Porter","Saison","Sour","Stout","Tripel","Wheat Beer"],
    namePrefixes: ["Iron","Steel","Copper","Bronze","Brass","Lead","Granite","Obsidian","Onyx","Marble","Slate","Basalt","Quartz","Crimson","Ruby","Amber","Charcoal","Ivory","Pale","Ebony","Ashen","Frost","Fire","Flame","Cold","Ember","Smoke","Burning","Shadow","Stone","Emerald","Winter","Autumn","Summer","Spring","Diamond","Sapphire","Amethyst","Opal","Garnet"],
    nameAdjectives: ["Crown","Shield","Axe","Hammer","Spear","Hearth","Forge","Smith","Anvil","Mountain","Peak","Summit","Barrow","Hollow","Vault","Ring","Blade","Throne","Mace","Sword","Chain","Spindle","Gate","Deep","Dagger","Tomb","Bastion","Haven","Spire","Hill","River","Lake","Block","Canyon","Valley","Stream","Void","Ridge","Basin","Brow","Cave","Crag","Crater","Divide","Dome","Crest","Hogback","Meadow","Monument"],
    optionalNameElements: ["Reserve","Select","Special","Limited Batch","Premium","Signature Brew","Heritage","Private Stock","Legacy","Vintage"],

    liquidShades: ["Light","Medium","Deep","Dark","Reddish","Purplish","Ruby","Brown"],
    clarity: ["brilliant","clear","slightly hazy","hazy","cloudy","opaque"],
    foamTextures: ["none","poor","moderate","good","thin","wispy","fluffy","mousse-like"],
    foamHues: ["white","cream","tan","yellow","brownish","reddish"],

    malts: ["Malty","Biscuity","Bread-like","Grainy","Rich","Deep","Roasted","Coffee","Caramel","Toffee-like","Molasses","Smokey","Sweet","Autumnal","Burnt Cream","Oatmeal","Rustic","Scalded Milk"],
    hops:  ["Pine","Citrus","Earthy","Musty","Spicy","Grassy","Bright","Fresh","Herbal","Juniper-like","Lemony","Floral","Spring-like","Minty","Spruce-like","Orangey","Zippy"],
    yeast: ["Earthy","Woody","Musty","Nutty","Buttery","Butterscotch","Estery","Bready","Biscuity","Yeasty","Banana-like"],
    fruits:["Citrus","Lemon","Orange","Cherry","Strawberry","Blueberry","Blackberry","Wild Berry","Apricot","Rhubarb","Apple","Blackcurrant","Peach","Red Plum","Blue Plum","Date","Gooseberry","Cranberry","Fig"],
    spices:["Pepper","Clover","Anise","Woodruff","Cinnamon","Vanilla","Radish","Nutmeg","Ginger","Fennel","Saffron","Juniper","Maple","Heather","Hibiscus","Coriander","Elderflower","Peppermint"],

    mouthfeel: ["thick","creamy","watery","balanced","full","heavy","medium","light","dense","viscous","thin","crisp","flat","round","sharp","silky","prickly","wispy","velvety","delicate","spritzy","robust","hot"],
    afterfeel: ["astringent","sticky","smooth","dry","oily","bitter","warming","effervescent","clean","gassy","tingly"],
    afterfeelLong: { // some afterfeels read better expanded
      "vanishing": "that vanishes on the tongue"
    },

    offFlavors: ["medicinal","chemical","rotten","barnyard","rancid","muddy","clove","green-leaf","sweaty","buttery","vinegary","peanut-like"]
  };

  const beerTypeColorRanges = {
    "Bock":["Amber","Brown"], "Dark Ale":["Copper","Walnut"],
    "Hoppy Pale Ale":["Straw","Gold"], "Lager":["Straw","Gold"],
    "Pale Ale":["Straw","Gold"], "Pilsner":["Yellow","Amber"],
    "Porter":["Copper","Walnut"], "Saison":["Straw","Gold"],
    "Sour":["Yellow","Amber"], "Stout":["Brown","Black"],
    "Tripel":["Yellow","Amber"], "Wheat Beer":["Straw","Gold"]
  };

  // ---------- Synonym banks (used for same-attribute variation) ----------

  const maltSyn = {
    Malty:["toasty","nutty","biscuity","cereal"], Biscuity:["cracker-like","crumbly","dry-malt"],
    "Bread-like":["yeasty","doughy","crusty"], Grainy:["rustic","hearty","earthy-grain"],
    Rich:["velvety","deep-malt","weighty"], Deep:["dark-malt","robust","weighty"],
    Roasted:["charred","smoky-malt","burnt"], Coffee:["espresso","dark-roast","bitter-coffee"],
    Caramel:["toffee","honeyed","brown-sugar"], "Toffee-like":["caramelized","sticky-sweet","brown-sugared"],
    Molasses:["syrupy","burnt-sugar","dark-caramel"], Smokey:["smokehouse","ashy","hearthsmoke"],
    Sweet:["honeyed","soft","sugared"], Autumnal:["spiced-malt","toasted","harvest"],
    "Burnt Cream":["scorched-cream","crème-brûlée","toasted-sugar"], Oatmeal:["porridge","creamy-malt","smooth-oat"],
    Rustic:["rough-hewn","coarse","farmhouse"], "Scalded Milk":["scalded","warm-dairy","cooked-cream"]
  };
  const hopSyn = {
    Pine:["resinous","piney","evergreen"], Citrus:["zesty","tangy","bright-citrus"],
    Earthy:["rooted","loamy","damp-earth"], Musty:["aged","dank","cellar-like"],
    Spicy:["peppery","bold-spice","hot"], Grassy:["green","fresh-cut","lawn-like"],
    Bright:["lively","vivid","sharp"], Fresh:["crisp","clean","invigorating"],
    Herbal:["aromatic","herby","thyme-like"], "Juniper-like":["gin-like","evergreen","woody-resin"],
    Lemony:["lemon-zest","bright-lemon","tart"], Floral:["perfumed","blossoming","honeysuckle"],
    "Spring-like":["budding","green-shoot","fresh-bud"], Minty:["cool","menthol","refreshing"],
    "Spruce-like":["piny-resin","forest","woody"], Orangey:["orange-peel","bitter-orange","tangerine"],
    Zippy:["sharp-zest","bracing","citric"]
  };
  const yeastSyn = {
    Earthy:["earth-note","soil-like","loamy"], Woody:["oaken","cedar","timber"],
    Musty:["attic-like","dank","aged"], Nutty:["almond","hazel","walnut-skin"],
    Buttery:["rich-butter","cream-butter","slick"], Butterscotch:["caramel-butter","toffee-cream"],
    Estery:["fruity-ester","ripe-fruit","pear-like"], Bready:["fresh-loaf","rising-dough","warm-bread"],
    Biscuity:["shortbread","digestive","dry-biscuit"], Yeasty:["raw-yeast","doughy","fermenting"],
    "Banana-like":["ripe-banana","banana-peel","tropical"]
  };
  const fruitSyn = {
    Citrus:["citrus zest","tangy brightness","bright acidity"],
    Lemon:["lemon sharpness","fresh lemon","zested lemon"],
    Orange:["ripe orange","sweet orange","orange peel"],
    Cherry:["tart cherry","red cherry","morello"],
    Strawberry:["sweet strawberry","ripe strawberry","strawberry preserve"],
    Blueberry:["soft blueberry","ripe blueberry","fresh blueberry"],
    Blackberry:["jammy blackberry","dark blackberry","bramble"],
    "Wild Berry":["mixed berry","forest berry","bramble fruit"],
    Apricot:["ripe apricot","dried apricot","stone fruit"],
    Rhubarb:["tart rhubarb","stewed rhubarb","earthy rhubarb"],
    Apple:["crisp apple","baked apple","orchard apple"],
    Blackcurrant:["bold blackcurrant","dark currant","cassis"],
    Peach:["juicy peach","ripe peach","stone-fruit peach"],
    "Red Plum":["juicy red plum","ripe red plum","tart plum"],
    "Blue Plum":["dark plum","ripe blue plum","sweet plum"],
    Date:["sticky date","caramelized date","dried date"],
    Gooseberry:["zesty gooseberry","green gooseberry","tart gooseberry"],
    Cranberry:["tart cranberry","bright cranberry","dried cranberry"],
    Fig:["ripe fig","dried fig","fig preserve"]
  };
  const spiceSyn = {
    Pepper:["cracked pepper","peppery heat","black pepper"],
    Clover:["clover honey","clover-floral","meadow-herb"],
    Anise:["licorice","star anise","sweet-anise"],
    Woodruff:["woodruff","hay-sweet","vanilla-grass"],
    Cinnamon:["warm cinnamon","cinnamon bark","baking spice"],
    Vanilla:["soft vanilla","rich vanilla","vanilla bean"],
    Radish:["radish root","peppery-root","sharp radish"],
    Nutmeg:["warm nutmeg","fresh-ground nutmeg","spiced nutmeg"],
    Ginger:["fresh ginger","fiery ginger","candied ginger"],
    Fennel:["fennel seed","anise-like fennel","licorice-fennel"],
    Saffron:["saffron thread","golden saffron","warm saffron"],
    Juniper:["juniper berry","resinous juniper","gin-like juniper"],
    Maple:["maple syrup","maple sugar","amber maple"],
    Heather:["heather flower","moorland heather","dry heather"],
    Hibiscus:["tart hibiscus","floral hibiscus","red-flower"],
    Coriander:["coriander seed","citrus-coriander","bright-coriander"],
    Elderflower:["soft elderflower","sweet elderflower","spring elderflower"],
    Peppermint:["cool peppermint","fresh mint","bright mint"]
  };
  const offSyn = {
    medicinal:["medicinal","antiseptic","clinical"],
    chemical:["chemical","synthetic","metallic"],
    rotten:["rotten","spoiled","putrid"],
    barnyard:["barnyard","earthy-funk","animal-hide"],
    rancid:["rancid","stale","rank"],
    muddy:["muddy","murky","stagnant"],
    clove:["clove-phenolic","overclove","medicinal-spice"],
    "green-leaf":["green-leaf","hay","crushed-leaf"],
    sweaty:["sweaty","funky","musky"],
    buttery:["diacetyl","slick-butter","oily-butter"],
    vinegary:["vinegary","acetic","sharp-sour"],
    "peanut-like":["peanut-skin","stale-nut","old-oil"]
  };

  // ---------- Utilities ----------

  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const chance = (p) => Math.random() < p;
  const vowels = new Set(["a","e","i","o","u"]);
  const aOrAn = (w) => w && vowels.has(String(w).trim()[0].toLowerCase()) ? "an" : "a";
  const cap   = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

  function pickUnused(arr, used) {
    const fresh = arr.filter(x => !used.has(String(x).toLowerCase()));
    const r = pick(fresh.length ? fresh : arr);
    used.add(String(r).toLowerCase());
    return r;
  }
  function synonymOf(primary, bank, used) {
    const pool = [primary, ...(bank[primary] || [])];
    const fresh = pool.filter(x => !used.has(String(x).toLowerCase()));
    const r = pick(fresh.length ? fresh : pool);
    used.add(String(r).toLowerCase());
    used.add(String(primary).toLowerCase());
    return String(r).toLowerCase();
  }

  // Build a paired set of descriptors for the same attribute so scent & flavor
  // read as the same underlying trait without repeating a single phrase.
  function pairDescriptors(primary, bank, used) {
    const a = synonymOf(primary, bank, used);
    const b = synonymOf(primary, bank, used); // will avoid 'a' via used set
    return { scent: a, flavor: b };
  }

  // Multi-roll (for Exceptional/Legendary fruit/spice stacks)
  function multi(arr, bank, used, n) {
    const out = [];
    for (let i = 0; i < n; i++) {
      const base = pickUnused(arr, used);
      out.push(synonymOf(base, bank, used));
    }
    return out;
  }

  // ---------- Quality tier → recipe ----------
  // Returns the "shape" of the drink (how many off-flavors, fruit/spice, etc.)
  function resolveQuality(q) {
    let tier = q;
    if (!tier || tier === "random") {
      const r = Math.ceil(Math.random() * 20);
      tier = r <= 4 ? "basic" : r <= 8 ? "fine" : r <= 12 ? "average" : r <= 16 ? "decent" : r === 20 ? "legendary" : "exceptional";
    }
    const map = {
      basic:       { label: "Basic",       offCount: 2, fruitCount: 0, spiceCount: 0, maltMode: "single" },
      fine:        { label: "Fine",        offCount: 1, fruitCount: 0, spiceCount: 0, maltMode: "single" },
      average:     { label: "Average",     offCount: 0, fruitCount: 0, spiceCount: 0, maltMode: "single" },
      decent:      { label: "Decent",      offCount: 0, fruitOrSpice: 1,              maltMode: "single" },
      exceptional: { label: "Exceptional", offCount: 0, fruitOrSpice: 2,              maltMode: "complex" },
      legendary:   { label: "Legendary",   offCount: 0, fruitOrSpice: 3,              maltMode: "layered" }
    };
    return { tier, ...map[tier] };
  }

  // ---------- Frames (variation scaffolds) ----------
  // Each frame takes a structured drink + options and returns a string.
  // Multiple frames per field ⇒ repeated pours look structurally different
  // even when vocabulary overlaps.

  const frames = {
    appearance: [
      (d) => `${cap(d.shade)} ${d.hue} with ${aOrAn(d.clarity)} ${d.clarity} clarity${d.foam ? `, ${d.foam}` : ""}.`,
      (d) => `Pours ${d.shade.toLowerCase()} ${d.hue}, ${d.clarity} in the glass${d.foam ? `, ${d.foam}` : ""}.`,
      (d) => `${d.foam ? cap(d.foam) + ` over ` : ""}${d.clarity} ${d.shade.toLowerCase()} ${d.hue}.`,
      (d) => `${cap(d.shade)} ${d.hue} beneath ${d.foam ? d.foam : aOrAn(d.clarity) + " " + d.clarity + " surface"}.`,
      (d) => `A ${d.clarity} ${d.shade.toLowerCase()} ${d.hue}${d.foam ? `, crowned by ${d.foam}` : ""}.`
    ],

    scent: [
      (d, ctx) => `${cap(d.maltScent)} malt meets ${d.hopScent} hops${d.yeastScent ? `, with ${d.yeastScent} yeast beneath` : ""}${ctx.scentOff ? `, clouded by ${ctx.scentOff}` : ""}.`,
      (d, ctx) => `The nose opens with ${d.maltScent} malt and ${d.hopScent} hops${d.yeastScent ? `; ${d.yeastScent} yeast rounds it out` : ""}${ctx.scentOff ? `. An unmistakable ${ctx.scentOff} note intrudes` : ""}.`,
      (d, ctx) => `${cap(d.hopScent)} hops lead, trailed by ${d.maltScent} malt${d.yeastScent ? ` and ${d.yeastScent} yeast` : ""}${ctx.scentOff ? `, though ${ctx.scentOff} lurks` : ""}.`,
      (d, ctx) => `Aroma: ${d.maltScent} malt, ${d.hopScent} hops${d.yeastScent ? `, ${d.yeastScent} yeast` : ""}${ctx.scentOff ? `; a ${ctx.scentOff} fault is present` : ""}.`,
      (d, ctx) => `${cap(d.yeastScent || d.maltScent)} ${d.yeastScent ? "yeast" : "malt"} threads through ${d.hopScent} hops${!d.yeastScent ? ` and a ${d.maltScent} base` : ""}${ctx.scentOff ? `, marred by ${ctx.scentOff}` : ""}.`
    ],

    flavor: [
      (d, ctx) => `${cap(d.maltFlavor)} malt anchors the palate, met by ${d.hopFlavor} hops${ctx.fruitStr ? `, with ${ctx.fruitStr}` : ""}${ctx.spiceStr ? `${ctx.fruitStr ? " and " : ", accented by "}${ctx.spiceStr}` : ""}${ctx.tasteOff ? `, dimmed by ${ctx.tasteOff}` : ""}.`,
      (d, ctx) => `Tastes of ${d.maltFlavor} malt and ${d.hopFlavor} hops${ctx.fruitStr ? `; ${ctx.fruitStr} unfurls beneath` : ""}${ctx.spiceStr ? `${ctx.fruitStr ? `, ${ctx.spiceStr} trailing after` : `, a note of ${ctx.spiceStr} following`}` : ""}${ctx.tasteOff ? `. ${cap(ctx.tasteOff)} lingers on the swallow` : ""}.`,
      (d, ctx) => `On the tongue: ${d.maltFlavor} malt, ${d.hopFlavor} hops${ctx.fruitStr ? `, ${ctx.fruitStr}` : ""}${ctx.spiceStr ? `, ${ctx.spiceStr}` : ""}${ctx.tasteOff ? `; ${ctx.tasteOff} intrudes mid-palate` : ""}.`,
      (d, ctx) => `${cap(d.hopFlavor)} hops carry ${d.maltFlavor} malt${ctx.fruitStr ? `, with ${ctx.fruitStr} woven through` : ""}${ctx.spiceStr ? ` and ${ctx.spiceStr} at the edges` : ""}${ctx.tasteOff ? `, though ${ctx.tasteOff} blunts the finish` : ""}.`,
      (d, ctx) => `A palate of ${d.maltFlavor} malt against ${d.hopFlavor} hops${ctx.fruitStr ? `; ${ctx.fruitStr} emerges` : ""}${ctx.spiceStr ? `${ctx.fruitStr ? `, softened by ${ctx.spiceStr}` : `, edged with ${ctx.spiceStr}`}` : ""}${ctx.tasteOff ? `. A ${ctx.tasteOff} fault surfaces` : ""}.`
    ],

    mouthfeel: [
      (d) => `${cap(aOrAn(d.mouthfeel))} ${d.mouthfeel} body, with ${aOrAn(d.afterfeel)} ${d.afterfeel} finish.`,
      (d) => `Drinks ${d.mouthfeel}, finishes ${d.afterfeel}.`,
      (d) => `${cap(d.mouthfeel)} through the mouth, ${d.afterfeel} at the close.`,
      (d) => `Body: ${d.mouthfeel}. Finish: ${d.afterfeel}.`,
      (d) => `${cap(d.mouthfeel)} and ${d.afterfeel} — the two hold the drink together.`
    ]
  };

  // ---------- Name generation ----------

  function generateName(type, recent) {
    const used = new Set();
    let name, tries = 0;
    do {
      const prefix = pickUnused(T.namePrefixes, used);
      const adj = pickUnused(T.nameAdjectives, used);
      const optional = chance(0.12) ? " " + pick(T.optionalNameElements) : "";
      name = `${prefix} ${adj} ${type}${optional}`;
      tries++;
    } while (recent.includes(name) && tries < 12);
    return name;
  }

  // ---------- Main ----------

  function createDrinkGenerator() {
    const recent = [];
    const MAX_RECENT = 14;

    function generate(opts = {}) {
      const { beerType = "any", quality = "random", verbosity = "normal" } = opts;
      const Q = resolveQuality(quality);
      const type = (!beerType || beerType === "any") ? pick(T.nameTypes) : beerType;

      const name = generateName(type, recent);
      if (recent.length >= MAX_RECENT) recent.shift();
      recent.push(name);

      const used = new Set();

      // Appearance
      const shade = pickUnused(T.liquidShades, used);
      const hue = pick(beerTypeColorRanges[type] || ["Amber"]).toLowerCase();
      used.add(hue);
      const clarity = pickUnused(T.clarity, used);

      const foamTex = pickUnused(T.foamTextures, used);
      let foam = "";
      if (foamTex !== "none") {
        const foamHue = pickUnused(T.foamHues, used);
        const foamFrame = pick([
          `${foamTex} ${foamHue} foam`,
          `${aOrAn(foamTex)} ${foamTex} ${foamHue} head`,
          `${foamHue} foam, ${foamTex} in texture`
        ]);
        foam = foamFrame;
      }

      // Malt — single / complex / layered per tier
      const maltBase1 = pickUnused(T.malts, used);
      let maltScent, maltFlavor;
      if (Q.maltMode === "single") {
        const pair = pairDescriptors(maltBase1, maltSyn, used);
        maltScent = pair.scent; maltFlavor = pair.flavor;
      } else {
        // complex / layered ⇒ two malt notes braided together
        const maltBase2 = pickUnused(T.malts, used);
        const p1 = pairDescriptors(maltBase1, maltSyn, used);
        const p2 = pairDescriptors(maltBase2, maltSyn, used);
        const word = Q.maltMode === "complex" ? "complex" : "layered";
        maltScent = `${word} ${p1.scent} and ${p2.scent}`;
        maltFlavor = `${word} ${p1.flavor} and ${p2.flavor}`;
      }

      // Hops
      const hopBase = pickUnused(T.hops, used);
      const hopPair = pairDescriptors(hopBase, hopSyn, used);

      // Yeast (new axis). Always included; it's fundamental per the PDF.
      // Included in scent frames sometimes; verbosity = terse may drop it.
      const yeastBase = pickUnused(T.yeast, used);
      const yeastPair = pairDescriptors(yeastBase, yeastSyn, used);

      // Fruit / Spice based on tier
      let fruitParts = [], spiceParts = [];
      const fruitSpiceCount = Q.fruitOrSpice || 0;
      for (let i = 0; i < fruitSpiceCount; i++) {
        if (chance(0.5)) {
          const fb = pickUnused(T.fruits, used);
          fruitParts.push(synonymOf(fb, fruitSyn, used));
        } else {
          const sb = pickUnused(T.spices, used);
          spiceParts.push(synonymOf(sb, spiceSyn, used));
        }
      }
      const joinList = (arr) => {
        if (!arr.length) return "";
        if (arr.length === 1) return arr[0];
        if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
        return `${arr.slice(0, -1).join(", ")}, and ${arr[arr.length - 1]}`;
      };
      const fruitStr = joinList(fruitParts);
      const spiceStr = joinList(spiceParts);

      // Off-flavors
      let scentOff = "", tasteOff = "";
      if (Q.offCount >= 1) {
        const o1 = pickUnused(T.offFlavors, used);
        scentOff = synonymOf(o1, offSyn, used);
        tasteOff = scentOff;
      }
      if (Q.offCount >= 2) {
        const o2 = pickUnused(T.offFlavors, used);
        tasteOff = synonymOf(o2, offSyn, used);
      }

      const mouthfeel = pickUnused(T.mouthfeel, used);
      const afterfeel = pickUnused(T.afterfeel, used);

      // Assemble, picking a frame per field
      const drinkShape = {
        shade, hue, clarity, foam,
        maltScent, maltFlavor,
        hopScent: hopPair.scent, hopFlavor: hopPair.flavor,
        yeastScent: yeastPair.scent, yeastFlavor: yeastPair.flavor,
        mouthfeel, afterfeel
      };
      const ctx = { scentOff, tasteOff, fruitStr, spiceStr };

      // Verbosity: terse drops yeast & secondary clauses; flowery picks longer frames.
      if (verbosity === "terse") {
        drinkShape.yeastScent = "";
        // shorten clarity descriptor
      }

      const appearance = pick(frames.appearance)(drinkShape, ctx);
      const scent      = pick(frames.scent)(drinkShape, ctx);
      const flavor     = pick(frames.flavor)(drinkShape, ctx);
      const mouthfeelText = pick(frames.mouthfeel)(drinkShape, ctx);

      let out = {
        name,
        beerType: type,
        quality: Q.label,
        appearance,
        scent,
        flavor,
        mouthfeel: mouthfeelText
      };

      if (verbosity === "flowery") {
        const tails = [
          " A drink fit for long memory.",
          " Not a pour quickly forgotten.",
          " One for the ballads, perhaps.",
          " A pint with a story in it.",
          " A brew worth the waiting."
        ];
        out.flavor = out.flavor.replace(/\.$/, "") + "." + pick(tails);
      } else if (verbosity === "terse") {
        // Trim appearance + mouthfeel to their first clause
        out.appearance = out.appearance.split(",")[0].replace(/\.$/, "") + ".";
        out.mouthfeel  = out.mouthfeel.split(",")[0].replace(/\.$/, "") + ".";
      }

      return out;
    }

    return { generate };
  }

  // ---------- Signature drinks (canon, from the PDF) ----------

  const SIGNATURE_DRINKS = [
    { name: "Black Beard Bitter", beerType: "Bitter (Regular)", quality: "Canon",
      custom: "For airing a grievance. Call for it to signal a quarrel — or to interrupt, to disagree.",
      appearance: "Golden, hazy, with a foamy white head.",
      scent: "Musty and spicy.",
      flavor: "Earthy and spicy.",
      mouthfeel: "Bitter and dry." },
    { name: "Blood and Bone Stout", beerType: "Stout (Strong)", quality: "Canon",
      custom: "A meal in a mug — breakfast, lunch, siege rations. Non-dwarves rarely stomach it.",
      appearance: "Inky with a thick, yellow foam.",
      scent: "Burnt caramel and mushroom.",
      flavor: "Smokey — almost burnt — dark malts, and oats.",
      mouthfeel: "Thick and grainy, with an oily residue." },
    { name: "Coalbound Ale", beerType: "Ale (Regular)", quality: "Canon",
      custom: "For mourning. Poured at funerals; joviality unwelcome.",
      appearance: "Ruby red and cloudy, with pink foam.",
      scent: "Wild berries and oak.",
      flavor: "Sweet, tart, and acidic.",
      mouthfeel: "Smooth and crisp, with a dry finish." },
    { name: "Crystal Pilsner", beerType: "Pilsner (Regular)", quality: "Canon",
      custom: "Ordered for another to open a conversation — a deal that doesn't involve coin.",
      appearance: "Clear pale gold, with a thick white head.",
      scent: "Malty, hops, and butter.",
      flavor: "Bready, mute-hop, slightly mossy.",
      mouthfeel: "Watery — vanishes on the tongue." },
    { name: "Dour Double Bock", beerType: "Bock (Regular)", quality: "Canon",
      custom: "For philosophizing. Drunk alongside other beers to add nuance to public-yet-private talk.",
      appearance: "Dark caramel, with a yellowish foam.",
      scent: "Toffee and nutty.",
      flavor: "Mellow and coffee-like.",
      mouthfeel: "Silky and flat." },
    { name: "Dross Wheat Ale", beerType: "Wheat Ale (Light)", quality: "Canon",
      custom: "Dwarves do not drink this. Offered to travelers thought unworthy — or used to insult.",
      appearance: "Hazy yellow, with a rocky white head.",
      scent: "Yeast, wheat, and hops.",
      flavor: "Wheat grain and yeast.",
      mouthfeel: "Crisp and clean." },
    { name: "Frostbeard Sour Ale", beerType: "Sour Ale (Regular)", quality: "Canon",
      custom: "Drunk only before battle. Chugged for confidence; poured out when return seems unlikely.",
      appearance: "Purplish brown, with a tan, foamy head.",
      scent: "Vinegar and malt.",
      flavor: "Tart berry, bitter, and slightly sweet.",
      mouthfeel: "Thin and spritzy." },
    { name: "Goldbound Wild Ale", beerType: "Wild Ale (Regular)", quality: "Canon",
      custom: "For announcing success. The drink of a dwarf who has been asked to brag.",
      appearance: "Orange and cloudy, with white lacing.",
      scent: "Lemon, citrus, and funk.",
      flavor: "Citrus, vanilla, and sourness.",
      mouthfeel: "Medium and dry." },
    { name: "Doublestone Rye", beerType: "Rye (Strong)", quality: "Canon",
      custom: "Not a grievance — a declaration of war. Those who drink it are on the verge of violence.",
      appearance: "Deep brown, with a tall cream head.",
      scent: "Caramel, vanilla, and rye spice.",
      flavor: "Oak, spicy rye, and caramel.",
      mouthfeel: "Thick and creamy." },
    { name: "Hangrin's Honey Hop Ale", beerType: "Ale (Regular)", quality: "Canon",
      custom: "A celebratory ale. Ordering it for another buys them a round — never refused.",
      appearance: "Honey-colored, with slight cloudiness.",
      scent: "Resin, floral, and hops.",
      flavor: "Hoppy and sweet.",
      mouthfeel: "Effervescent and dry." },
    { name: "The Monarch's Malt", beerType: "Ale (Regular)", quality: "Canon",
      custom: "Drunk to toast the monarch. The recipe changes with the crown.",
      appearance: "Yellow, with a tall snowy head.",
      scent: "Toasted grain, caramel, and hops.",
      flavor: "Earthy hoppiness, with an herbal aftertaste.",
      mouthfeel: "Light, thin, and dry." },
    { name: "Ironjaw Brown Ale", beerType: "Brown Ale (Regular)", quality: "Canon",
      custom: "For talking coin. The size of the pour signals the size of the deal.",
      appearance: "Red-brown, with veins of crimson and a foamy head.",
      scent: "Boozy and clove-like.",
      flavor: "Biscuity, with a metallic finish.",
      mouthfeel: "Warm and watery." },
    { name: "Stormhammer Porter", beerType: "Porter (Stiff)", quality: "Canon",
      custom: "For sipping when subtlety is unwanted. Call for it to end a conversation.",
      appearance: "Dark black, with a frothy tan head.",
      scent: "Dark chocolate, roasted malt, and espresso.",
      flavor: "Full-bodied chocolate, vanilla, and bitter coffee.",
      mouthfeel: "Smooth, creamy, and flat." }
  ];

  global.AncestorsAndAle = {
    createDrinkGenerator,
    TABLES: T,
    beerTypeColorRanges,
    SIGNATURE_DRINKS,
    QUALITY_TIERS: [
      { value: "random",      label: "Random (d20)" },
      { value: "basic",       label: "Basic" },
      { value: "fine",        label: "Fine" },
      { value: "average",     label: "Average" },
      { value: "decent",      label: "Decent" },
      { value: "exceptional", label: "Exceptional" },
      { value: "legendary",   label: "Legendary" }
    ]
  };
})(window);
