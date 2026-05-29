/* Furs & Gems Loot Generator — data tables
 * Single source of truth for fur prices, gem types, quality, carat, biomes.
 * Add new entries here; the methods auto-pick them up.
 *
 * Currency: 1 gp = 10 sp = 100 cp.  Furs are priced in sp; gems in gp.
 */
(function () {
  // ============================================================
  // FURS — base price is "Average" quality, in sp.
  // Quality: Poor 0.5x, Average 1x, Pristine 3x.
  // Each fur is tagged with biomes for biome-biased generation.
  // ============================================================
  const FURS = [
    // Bears
    { id: "bear-black",     name: "Bear, Black",         group: "Bear",     base: 70,  biomes: ["woodland", "mountain"] },
    { id: "bear-brown",     name: "Bear, Brown",         group: "Bear",     base: 120, biomes: ["woodland", "mountain"] },
    { id: "bear-white",     name: "Bear, White",         group: "Bear",     base: 160, biomes: ["arctic"] },

    // Canine
    { id: "coyote",         name: "Coyote / Jackal",     group: "Canine",   base: 8,   biomes: ["plains", "desert"] },
    { id: "dhole",          name: "Dhole",               group: "Canine",   base: 10,  biomes: ["jungle", "plains"] },
    { id: "dog",            name: "Dog",                 group: "Canine",   base: 2,   biomes: ["domestic"] },
    { id: "fox-arctic",     name: "Fox, Arctic",         group: "Canine",   base: 36,  biomes: ["arctic"] },
    { id: "fox-cross",      name: "Fox, Cross",          group: "Canine",   base: 24,  biomes: ["woodland", "mountain"] },
    { id: "fox-red",        name: "Fox, Red",            group: "Canine",   base: 16,  biomes: ["woodland", "plains"] },
    { id: "fox-silver",     name: "Fox, Silver",         group: "Canine",   base: 40,  biomes: ["woodland", "arctic"] },
    { id: "wolf",           name: "Wolf",                group: "Canine",   base: 10,  biomes: ["woodland", "arctic", "mountain"] },

    // Feline
    { id: "bobcat",         name: "Bobcat / Wildcat",    group: "Feline",   base: 20,  biomes: ["woodland", "mountain"] },
    { id: "cheetah",        name: "Cheetah",             group: "Feline",   base: 180, biomes: ["plains"] },
    { id: "cougar",         name: "Cougar",              group: "Feline",   base: 120, biomes: ["mountain", "woodland"] },
    { id: "jaguar",         name: "Jaguar",              group: "Feline",   base: 200, biomes: ["jungle"] },
    { id: "leopard",        name: "Leopard",             group: "Feline",   base: 250, biomes: ["jungle", "plains"] },
    { id: "leopard-snow",   name: "Leopard, Snow",       group: "Feline",   base: 350, biomes: ["mountain", "arctic"] },
    { id: "lion",           name: "Lion",                group: "Feline",   base: 300, biomes: ["plains"] },
    { id: "lynx",           name: "Lynx",                group: "Feline",   base: 50,  biomes: ["woodland", "arctic", "mountain"] },
    { id: "ocelot",         name: "Ocelot",              group: "Feline",   base: 40,  biomes: ["jungle"] },
    { id: "panther",        name: "Panther",             group: "Feline",   base: 240, biomes: ["jungle"] },
    { id: "tiger",          name: "Tiger",               group: "Feline",   base: 350, biomes: ["jungle"] },

    // Hoofed
    { id: "antelope",       name: "Antelope / Gazelle",  group: "Hoofed",   base: 6,   biomes: ["plains", "desert"] },
    { id: "bison",          name: "Bison",               group: "Hoofed",   base: 24,  biomes: ["plains"] },
    { id: "boar",           name: "Boar / Pig",          group: "Hoofed",   base: 4,   biomes: ["woodland", "domestic"] },
    { id: "chamois",        name: "Chamois",             group: "Hoofed",   base: 6,   biomes: ["mountain"] },
    { id: "deer",           name: "Deer",                group: "Hoofed",   base: 8,   biomes: ["woodland", "plains"] },
    { id: "goat",           name: "Goat",                group: "Hoofed",   base: 4,   biomes: ["mountain", "domestic"] },
    { id: "horse-cow",      name: "Horse / Cow",         group: "Hoofed",   base: 6,   biomes: ["plains", "domestic"] },
    { id: "moose-elk",      name: "Moose / Elk",         group: "Hoofed",   base: 20,  biomes: ["woodland", "arctic"] },
    { id: "reindeer",       name: "Reindeer / Caribou",  group: "Hoofed",   base: 12,  biomes: ["arctic"] },
    { id: "sheep",          name: "Sheep",               group: "Hoofed",   base: 4,   biomes: ["mountain", "domestic"] },

    // Weasel
    { id: "badger",         name: "Badger",              group: "Weasel",   base: 8,   biomes: ["woodland", "plains"] },
    { id: "fisher",         name: "Fisher",              group: "Weasel",   base: 60,  biomes: ["woodland", "arctic"] },
    { id: "marten-beech",   name: "Marten, Beech",       group: "Weasel",   base: 70,  biomes: ["woodland"] },
    { id: "marten-pine",    name: "Marten, Pine",        group: "Weasel",   base: 80,  biomes: ["woodland"] },
    { id: "mink",           name: "Mink",                group: "Weasel",   base: 150, biomes: ["woodland", "aquatic"] },
    { id: "otter",          name: "Otter (Sea & River)", group: "Weasel",   base: 75,  biomes: ["aquatic"] },
    { id: "polecat",        name: "Polecat (Fitch)",     group: "Weasel",   base: 16,  biomes: ["woodland", "plains"] },
    { id: "sable",          name: "Sable",               group: "Weasel",   base: 400, biomes: ["arctic", "woodland"] },
    { id: "ermine",         name: "Weasel, Ermine",      group: "Weasel",   base: 330, biomes: ["arctic"] },
    { id: "weasel-common",  name: "Weasel (Common)",     group: "Weasel",   base: 4,   biomes: ["woodland", "plains"] },
    { id: "lettice",        name: "Weasel, Lettice",     group: "Weasel",   base: 10,  biomes: ["arctic"] },
    { id: "wolverine",      name: "Wolverine",           group: "Weasel",   base: 40,  biomes: ["arctic", "mountain"] },

    // Rodent
    { id: "beaver",         name: "Beaver",              group: "Rodent",   base: 30,  biomes: ["aquatic", "woodland"] },
    { id: "chinchilla",     name: "Chinchilla",          group: "Rodent",   base: 20,  biomes: ["mountain"] },
    { id: "dormouse",       name: "Dormouse",            group: "Rodent",   base: 2,   biomes: ["woodland"] },
    { id: "marmot",         name: "Marmot",              group: "Rodent",   base: 4,   biomes: ["mountain", "plains"] },
    { id: "muskrat",        name: "Muskrat / Nutria",    group: "Rodent",   base: 6,   biomes: ["aquatic"] },
    { id: "rabbit",         name: "Rabbit (Coney) / Hare", group: "Rodent", base: 2,   biomes: ["woodland", "plains", "domestic"] },
    { id: "squirrel-gris",  name: "Squirrel, Gris",      group: "Rodent",   base: 2,   biomes: ["woodland"] },
    // Squirrel Red is unusual — 5 cp / 1 sp / 3 sp; represent base as 1 sp.
    { id: "squirrel-red",   name: "Squirrel, Red",       group: "Rodent",   base: 1,   biomes: ["woodland"], lowBand: true },
    { id: "squirrel-vair",  name: "Squirrel, Vair",     group: "Rodent",   base: 4,   biomes: ["woodland"] }
  ];

  const FUR_QUALITY = [
    { id: "poor",     label: "Poor",     mult: 0.5, sym: "♦" },
    { id: "average",  label: "Average",  mult: 1,   sym: "♦♦" },
    { id: "pristine", label: "Pristine", mult: 3,   sym: "♦♦♦" }
  ];

  // Weighted random quality
  // Default bias: 25% poor / 55% average / 20% pristine
  function rollFurQuality(bias) {
    bias = bias || { poor: 25, average: 55, pristine: 20 };
    const r = Math.random() * 100;
    if (r < bias.poor) return FUR_QUALITY[0];
    if (r < bias.poor + bias.average) return FUR_QUALITY[1];
    return FUR_QUALITY[2];
  }

  const BIOMES = [
    { id: "any",      label: "Any region",  hint: "all furs" },
    { id: "arctic",   label: "Arctic",      hint: "tundra, frozen north" },
    { id: "woodland", label: "Woodland",    hint: "temperate forest" },
    { id: "plains",   label: "Plains",      hint: "savanna, steppe" },
    { id: "jungle",   label: "Jungle",      hint: "tropics, dense forest" },
    { id: "mountain", label: "Mountain",    hint: "highland, alpine" },
    { id: "aquatic",  label: "Aquatic",     hint: "river, coast" },
    { id: "desert",   label: "Desert",      hint: "arid scrubland" },
    { id: "domestic", label: "Farmstead",   hint: "livestock & cottage" }
  ];

  // ============================================================
  // GEMS — d100 table with base value (gp), and a name.
  // ============================================================
  const GEM_TABLE = [
    // [d100 low, d100 high, name, baseGp]
    { lo: 1,  hi: 3,  name: "Andesine",            base: 1 },
    { lo: 4,  hi: 6,  name: "Kyanite",             base: 1 },
    { lo: 7,  hi: 9,  name: "Quartz",              base: 1 },
    { lo: 10, hi: 11, name: "Amber",               base: 2 },
    { lo: 12, hi: 13, name: "Iolite",              base: 2 },
    { lo: 14, hi: 15, name: "Sillimanite",         base: 2 },
    { lo: 16, hi: 17, name: "Zircon",              base: 2 },
    { lo: 18, hi: 19, name: "Amblygonite",         base: 2 },
    { lo: 20, hi: 21, name: "Apatite",             base: 2 },
    { lo: 22, hi: 23, name: "Citrine",             base: 2 },
    { lo: 24, hi: 25, name: "Hiddenite",           base: 2 },
    { lo: 26, hi: 27, name: "Jade",                base: 2 },
    { lo: 28, hi: 29, name: "Kornerupine",         base: 2 },
    { lo: 30, hi: 31, name: "Petalite",            base: 3 },
    { lo: 32, hi: 33, name: "Phenakite",           base: 3 },
    { lo: 34, hi: 35, name: "Taafeite",            base: 3 },
    { lo: 36, hi: 37, name: "Tanzanite",           base: 3 },
    { lo: 38, hi: 39, name: "Andalusite",          base: 4 },
    { lo: 40, hi: 41, name: "Diopside",            base: 4 },
    { lo: 42, hi: 43, name: "Enstatite",           base: 4 },
    { lo: 44, hi: 45, name: "Garnet, Malaia",      base: 4 },
    { lo: 46, hi: 47, name: "Ametrine",            base: 5 },
    { lo: 48, hi: 49, name: "Idocrase",            base: 5 },
    { lo: 50, hi: 51, name: "Sphalerite",          base: 5 },
    { lo: 52, hi: 53, name: "Sphene",              base: 5 },
    { lo: 54, hi: 55, name: "Axinite",             base: 6 },
    { lo: 56, hi: 57, name: "Garnet, Mali",        base: 6 },
    { lo: 58, hi: 59, name: "Scapolite",           base: 6 },
    { lo: 60, hi: 61, name: "Spinel",              base: 6 },
    { lo: 62, hi: 63, name: "Garnet, Hessonite",   base: 7 },
    { lo: 64, hi: 65, name: "Chrysoberyl",         base: 8 },
    { lo: 66, hi: 67, name: "Danburite",           base: 8 },
    { lo: 68, hi: 69, name: "Diaspore",            base: 8 },
    { lo: 70, hi: 71, name: "Garnet, Demantoid",   base: 8 },
    { lo: 72, hi: 73, name: "Tourmaline",          base: 9 },
    { lo: 74, hi: 75, name: "Fluorite",            base: 10 },
    { lo: 76, hi: 77, name: "Peridot",             base: 10 },
    { lo: 78, hi: 79, name: "Tourmaline, Bi-Color",base: 10 },
    { lo: 80, hi: 81, name: "Sinhalite",           base: 10 },
    { lo: 82, hi: 82, name: "Garnet, Rhodolite",   base: 12 },
    { lo: 83, hi: 83, name: "Kunzite",             base: 12 },
    { lo: 84, hi: 84, name: "Garnet, Spessartite", base: 14 },
    { lo: 85, hi: 85, name: "Sunstone",            base: 16 },
    { lo: 86, hi: 86, name: "Pezzotaite",          base: 20 },
    { lo: 87, hi: 87, name: "Topaz",               base: 20 },
    { lo: 88, hi: 88, name: "Garnet, Tsavorite",   base: 24 },
    { lo: 89, hi: 89, name: "Aquamarine",          base: 32 },
    { lo: 90, hi: 90, name: "Opal, White",         base: 36 },
    { lo: 91, hi: 91, name: "Alexandrite",         base: 40 },
    { lo: 92, hi: 92, name: "Benitoite",           base: 40 },
    { lo: 93, hi: 93, name: "Opal, Fire",          base: 40 },
    { lo: 94, hi: 94, name: "Sapphire",            base: 40 },
    { lo: 95, hi: 95, name: "Amethyst",            base: 60 },
    { lo: 96, hi: 96, name: "Beryl",               base: 60 },
    { lo: 97, hi: 97, name: "Diamond",             base: 60 },
    { lo: 98, hi: 98, name: "Emerald",             base: 60 },
    { lo: 99, hi: 99, name: "Opal, Black",         base: 60 },
    { lo: 100,hi: 100,name: "Ruby",                base: 60 }
  ];

  // Rarity tiers grouped by base value
  const GEM_RARITY = [
    { id: "common",    label: "Common",    hint: "base 1–3 gp",  filter: g => g.base <= 3 },
    { id: "uncommon",  label: "Uncommon",  hint: "base 4–7 gp",  filter: g => g.base >= 4 && g.base <= 7 },
    { id: "rare",      label: "Rare",      hint: "base 8–16 gp", filter: g => g.base >= 8 && g.base <= 16 },
    { id: "legendary", label: "Legendary", hint: "base 20+ gp",  filter: g => g.base >= 20 },
    { id: "any",       label: "Any rarity",hint: "use d100",     filter: () => true }
  ];

  // Quality 2d10 → multiplier
  const GEM_QUALITY = [
    { lo: 2,  hi: 6,  label: "Flawed",      mult: 1 },
    { lo: 7,  hi: 10, label: "Fair",        mult: 2 },
    { lo: 11, hi: 13, label: "Good",        mult: 3 },
    { lo: 14, hi: 15, label: "Fine",        mult: 4 },
    { lo: 16, hi: 16, label: "Superior",    mult: 5 },
    { lo: 17, hi: 17, label: "Excellent",   mult: 6 },
    { lo: 18, hi: 18, label: "Outstanding", mult: 7 },
    { lo: 19, hi: 19, label: "Exceptional", mult: 8 },
    { lo: 20, hi: 20, label: "Flawless",    mult: 10 }
  ];

  // ============================================================
  // REGIONAL TRADE — applies to both furs & gems
  // Same multipliers as the fur source (gems treated identically).
  // ============================================================
  const REGIONS = [
    { id: "local",    label: "Local",    mult: 0.05, hint: "trapper / mine direct" },
    { id: "regional", label: "Regional", mult: 0.25, hint: "trade hub" },
    { id: "exotic",   label: "Exotic",   mult: 1,    hint: "luxury market (base)" }
  ];

  // ============================================================
  // HOARD TIERS — generic descriptors (no branded references)
  // Each tier defines a value range (in gp) and a content profile.
  // ============================================================
  const HOARD_TIERS = [
    {
      id: "trivial", label: "Trivial Find",
      hint: "pickpocket score, hedge crone's purse",
      gpMin: 1, gpMax: 25,
      furCount: [0, 2], gemCount: [0, 2],
      gemRarityBias: { common: 80, uncommon: 18, rare: 2, legendary: 0 },
      furQualityBias: { poor: 60, average: 35, pristine: 5 }
    },
    {
      id: "modest", label: "Modest Cache",
      hint: "bandit camp, trapper's lockbox",
      gpMin: 25, gpMax: 250,
      furCount: [1, 4], gemCount: [1, 3],
      gemRarityBias: { common: 55, uncommon: 35, rare: 10, legendary: 0 },
      furQualityBias: { poor: 35, average: 55, pristine: 10 }
    },
    {
      id: "notable", label: "Notable Trove",
      hint: "merchant strongbox, baron's safe",
      gpMin: 250, gpMax: 2500,
      furCount: [2, 6], gemCount: [2, 6],
      gemRarityBias: { common: 25, uncommon: 40, rare: 30, legendary: 5 },
      furQualityBias: { poor: 15, average: 55, pristine: 30 }
    },
    {
      id: "lavish", label: "Lavish Hoard",
      hint: "vault, royal chamber",
      gpMin: 2500, gpMax: 25000,
      furCount: [4, 10], gemCount: [4, 10],
      gemRarityBias: { common: 10, uncommon: 25, rare: 40, legendary: 25 },
      furQualityBias: { poor: 5, average: 35, pristine: 60 }
    },
    {
      id: "legendary", label: "Legendary Trove",
      hint: "dragon's bed, lich's reliquary",
      gpMin: 25000, gpMax: 200000,
      furCount: [6, 14], gemCount: [6, 18],
      gemRarityBias: { common: 5, uncommon: 15, rare: 35, legendary: 45 },
      furQualityBias: { poor: 0, average: 20, pristine: 80 }
    }
  ];

  // Method registry — single source for the picker
  const METHODS = [
    { id: "I",    num: "I",    title: "Specific Fur",    family: "fur"   },
    { id: "II",   num: "II",   title: "Random Fur",      family: "fur"   },
    { id: "III",  num: "III",  title: "Trapper's Haul",  family: "fur"   },
    { id: "IV",   num: "IV",   title: "Fur by Budget",   family: "fur"   },
    { id: "V",    num: "V",    title: "Specific Gem",    family: "gem"   },
    { id: "VI",   num: "VI",   title: "Random Gem",      family: "gem"   },
    { id: "VII",  num: "VII",  title: "Jeweler's Lot",   family: "gem"   },
    { id: "VIII", num: "VIII", title: "Gem by Budget",   family: "gem"   },
    { id: "IX",   num: "IX",   title: "Hoard by Value",  family: "hoard" },
    { id: "X",    num: "X",    title: "Hoard by Tier",   family: "hoard" }
  ];

  window.LootData = {
    FURS, FUR_QUALITY, BIOMES, rollFurQuality,
    GEM_TABLE, GEM_QUALITY, GEM_RARITY,
    REGIONS, HOARD_TIERS, METHODS
  };
})();
