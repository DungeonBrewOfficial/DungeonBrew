/* Furs & Gems Loot Generator — engine
 * Pure functions: rolling, pricing, formatting, generation.
 */
(function () {
  const D = window.LootData;

  // -------- RNG --------
  const r = (n) => Math.floor(Math.random() * n) + 1;
  const rollDie = (sides) => r(sides);
  const rollD = (n, sides) => {
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(rollDie(sides));
    return arr;
  };
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  const choose = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const weightedChoose = (entries) => {
    // entries: [{item, weight}]
    const total = entries.reduce((s, e) => s + e.weight, 0);
    let pick = Math.random() * total;
    for (const e of entries) {
      pick -= e.weight;
      if (pick <= 0) return e.item;
    }
    return entries[entries.length - 1].item;
  };

  // -------- Currency formatting --------
  // Internal unit: copper pieces. 1 gp = 100 cp, 1 sp = 10 cp.
  const sp = (n) => n * 10;        // sp → cp
  const gp = (n) => n * 100;       // gp → cp
  const toCP = (sp, cp) => sp * 10 + (cp || 0);

  // Display: prefer gp when ≥ 100 cp, sp when < 100 and ≥ 10, cp when below.
  function formatCp(cp) {
    cp = Math.round(cp);
    if (cp === 0) return "0 cp";
    const g = Math.floor(cp / 100);
    const s = Math.floor((cp - g * 100) / 10);
    const c = cp - g * 100 - s * 10;
    const parts = [];
    if (g) parts.push(g.toLocaleString() + " gp");
    if (s) parts.push(s + " sp");
    if (c) parts.push(c + " cp");
    return parts.join(" ");
  }
  // Compact: round to nearest sp for display when value is in sp range
  function formatPriceFromSp(spValue) {
    if (spValue < 1) {
      const c = Math.round(spValue * 10);
      return c + " cp";
    }
    if (spValue < 10) {
      // Could be fractional sp; round to nearest whole sp or show cp
      if (spValue % 1 === 0) return spValue + " sp";
      const cp = Math.round(spValue * 10);
      return formatCp(cp);
    }
    return formatCp(Math.round(spValue * 10));
  }
  function formatPriceFromGp(gpValue) {
    if (gpValue < 1) {
      return formatCp(Math.round(gpValue * 100));
    }
    if (gpValue % 1 === 0) {
      return gpValue.toLocaleString() + " gp";
    }
    return formatCp(Math.round(gpValue * 100));
  }

  // -------- FURS --------
  function furByValue(spValue) {
    if (spValue < 1) return Math.round(spValue * 10) + " cp";
    return Math.round(spValue) + " sp";
  }

  // Generate a random fur, optionally filtered by biome and quality bias.
  function generateFur({ biome, qualityMode, fixedQuality, region } = {}) {
    biome = biome || "any";
    let pool = D.FURS;
    if (biome !== "any") {
      pool = D.FURS.filter(f => f.biomes.includes(biome));
      if (pool.length === 0) pool = D.FURS;
    }
    const fur = choose(pool);
    let quality;
    if (qualityMode === "fixed" && fixedQuality) {
      quality = D.FUR_QUALITY.find(q => q.id === fixedQuality) || D.FUR_QUALITY[1];
    } else {
      // Biome-aware bias: arctic and mountain favor pristine winter coats
      let bias = { poor: 25, average: 55, pristine: 20 };
      if (biome === "arctic")      bias = { poor: 15, average: 45, pristine: 40 };
      else if (biome === "mountain") bias = { poor: 20, average: 50, pristine: 30 };
      else if (biome === "domestic") bias = { poor: 35, average: 60, pristine: 5 };
      quality = D.rollFurQuality(bias);
    }
    return buildFurItem(fur, quality, region);
  }

  function buildFurItem(fur, quality, region) {
    region = region || "exotic";
    const reg = D.REGIONS.find(r => r.id === region) || D.REGIONS[2];
    const basePriceSp = fur.base * quality.mult;       // exotic / listed
    const finalSp = basePriceSp * reg.mult;
    const desc = (window.LootDesc && window.LootDesc.FUR_DESC[fur.id]) || "";
    return {
      kind: "fur",
      id: cryptoId(),
      furId: fur.id,
      name: fur.name,
      group: fur.group,
      desc,
      quality: quality.id,
      qualityLabel: quality.label,
      qualityMult: quality.mult,
      basePriceSp,            // sp at exotic market
      region: reg.id,
      regionLabel: reg.label,
      regionMult: reg.mult,
      finalPriceSp: finalSp,
      finalPriceCp: finalSp * 10,
      displayPrice: formatPriceFromSp(finalSp)
    };
  }

  // -------- GEMS --------
  function gemFromD100(roll) {
    const row = D.GEM_TABLE.find(g => roll >= g.lo && roll <= g.hi);
    return row || D.GEM_TABLE[0];
  }
  function rollGemQuality() {
    const dice = [rollDie(10), rollDie(10)];
    const s = sum(dice);
    const q = D.GEM_QUALITY.find(x => s >= x.lo && s <= x.hi);
    return { dice, total: s, quality: q };
  }
  // Cascading d4 carat per source rules:
  //   roll 1d4
  //   if 1 → roll 1d4 again; result maps 1→0.25, 2→0.5, 3→0.75, 4→1
  //   if 2 → 2 carats
  //   if 3 → 3 carats
  //   if 4 → 3 + 1d4 (so 4–7 carats), then if it returns 4 → 7+1d4 (so 8-11), etc.
  function rollCarat() {
    const trace = [];
    let total = 0;
    let next = rollDie(4);
    trace.push(next);
    if (next === 1) {
      const sub = rollDie(4);
      trace.push(sub);
      const map = { 1: 0.25, 2: 0.5, 3: 0.75, 4: 1 };
      total = map[sub];
    } else if (next === 2) {
      total = 2;
    } else if (next === 3) {
      total = 3;
    } else {
      // next === 4 → exploding chain
      let base = 3;
      while (next === 4) {
        const more = rollDie(4);
        trace.push(more);
        if (more === 4) {
          base += 3;
          next = 4;
        } else {
          base += more;
          next = 0; // stop
        }
      }
      total = base;
    }
    return { carat: total, trace };
  }

  function generateGem({ forcedRoll, rarity, region } = {}) {
    rarity = rarity || "any";
    let d100;
    let row;
    if (forcedRoll != null) {
      d100 = forcedRoll;
      row = gemFromD100(forcedRoll);
    } else if (rarity === "any") {
      d100 = rollDie(100);
      row = gemFromD100(d100);
    } else {
      const tier = D.GEM_RARITY.find(x => x.id === rarity);
      const pool = D.GEM_TABLE.filter(tier.filter);
      row = choose(pool);
      d100 = null; // didn't use d100
    }
    const q = rollGemQuality();
    const c = rollCarat();
    return buildGemItem(row, q, c, region, d100);
  }

  function buildGemItem(row, q, c, region, d100) {
    region = region || "exotic";
    const reg = D.REGIONS.find(r => r.id === region) || D.REGIONS[2];
    const baseGp = row.base * q.quality.mult * c.carat;   // listed (exotic)
    const finalGp = baseGp * reg.mult;
    const desc = (window.LootDesc && window.LootDesc.GEM_DESC[row.name]) || "";
    return {
      kind: "gem",
      id: cryptoId(),
      name: row.name,
      desc,
      base: row.base,
      d100,
      qualityDice: q.dice,
      qualityTotal: q.total,
      quality: q.quality.label,
      qualityMult: q.quality.mult,
      caratTrace: c.trace,
      carat: c.carat,
      basePriceGp: baseGp,
      region: reg.id,
      regionLabel: reg.label,
      regionMult: reg.mult,
      finalPriceGp: finalGp,
      finalPriceCp: finalGp * 100,
      displayPrice: formatPriceFromGp(finalGp)
    };
  }

  // Build a "specific" gem with chosen type / quality / carat
  function buildSpecificGem(gemName, qualityLabel, carat, region) {
    const row = D.GEM_TABLE.find(g => g.name === gemName);
    if (!row) return null;
    const ql = D.GEM_QUALITY.find(q => q.label === qualityLabel);
    if (!ql) return null;
    const fakeQ = { dice: [0,0], total: 0, quality: ql };
    const fakeC = { trace: [], carat };
    return buildGemItem(row, fakeQ, fakeC, region, null);
  }

  // -------- HOARDS --------
  function valueOfItemCp(item) {
    return item.finalPriceCp;
  }
  function hoardTotalCp(items) {
    return items.reduce((s, it) => s + valueOfItemCp(it), 0);
  }

  // Fill a hoard to target gp value, with proportion of furs vs gems.
  // strategy: keep adding items, weighted by current shortfall and biases.
  function generateByValue({ targetGp, mix = "balanced", region = "exotic", biome = "any", maxIter = 200 }) {
    // mix: "all-furs" | "all-gems" | "balanced" | "fur-heavy" | "gem-heavy"
    const items = [];
    const targetCp = targetGp * 100;
    const tolerance = Math.max(targetCp * 0.05, 100); // within 5% or 1gp
    const mixWeights = {
      "all-furs":   { fur: 1, gem: 0 },
      "all-gems":   { fur: 0, gem: 1 },
      "fur-heavy":  { fur: 3, gem: 1 },
      "gem-heavy":  { fur: 1, gem: 3 },
      "balanced":   { fur: 1, gem: 1 }
    }[mix] || { fur: 1, gem: 1 };

    let safety = 0;
    while (safety++ < maxIter) {
      const currentCp = hoardTotalCp(items);
      const remaining = targetCp - currentCp;
      if (remaining <= tolerance) break;

      // Pick kind by weight
      const pickFur = (Math.random() * (mixWeights.fur + mixWeights.gem)) < mixWeights.fur;
      let candidate;
      // Try to match remaining value tier
      const remainGp = remaining / 100;
      if (pickFur) {
        // Choose biased toward furs whose final price is around remainGp*10 (sp) or smaller
        const targetSp = remainGp * 10;
        candidate = pickFurForBudget(targetSp, biome, region);
      } else {
        candidate = pickGemForBudget(remainGp, region);
      }
      if (!candidate) {
        // try the other kind
        candidate = pickFur
          ? pickGemForBudget(remainGp, region)
          : pickFurForBudget(remainGp * 10, biome, region);
      }
      if (!candidate) break;
      // Skip items that wildly overshoot
      if (candidate.finalPriceCp > remaining * 4 && items.length > 0) continue;
      items.push(candidate);
    }
    return items;
  }

  function pickFurForBudget(targetSp, biome, region) {
    const pool = biome && biome !== "any"
      ? D.FURS.filter(f => f.biomes.includes(biome))
      : D.FURS;
    if (pool.length === 0) return null;
    // List all (fur, quality) combos at exotic price; we'll then multiply for region.
    const regMult = (D.REGIONS.find(r => r.id === region) || D.REGIONS[2]).mult;
    const combos = [];
    for (const f of pool) for (const q of D.FUR_QUALITY) {
      const priceSp = f.base * q.mult * regMult;
      combos.push({ fur: f, q, priceSp });
    }
    // Soft weight: prefer combos with priceSp <= targetSp, by proximity
    const weighted = combos.map(c => {
      const ratio = targetSp > 0 ? Math.min(c.priceSp / targetSp, 4) : 1;
      // prefer ratios near 0.2-1.0
      let w = 1;
      if (ratio <= 1) w = 4 - 3 * ratio;          // 1.0 at 1.0, 4.0 at 0.0
      else w = Math.max(0.05, 1 - (ratio - 1));  // decays past target
      return { item: c, weight: w };
    });
    const picked = weightedChoose(weighted);
    return buildFurItem(picked.fur, picked.q, region);
  }

  function pickGemForBudget(targetGp, region) {
    // Try a few rolls and pick the one closest (under) to target
    const regMult = (D.REGIONS.find(r => r.id === region) || D.REGIONS[2]).mult;
    const attempts = [];
    for (let i = 0; i < 8; i++) {
      const g = generateGem({ region });
      attempts.push(g);
    }
    // Prefer the gem with finalPriceGp closest to (and ≤) target; fall back to closest
    const targetGpNet = targetGp;
    const under = attempts.filter(a => a.finalPriceGp <= targetGpNet);
    if (under.length) {
      under.sort((a,b) => b.finalPriceGp - a.finalPriceGp);
      return under[0];
    }
    attempts.sort((a,b) => Math.abs(a.finalPriceGp - targetGpNet) - Math.abs(b.finalPriceGp - targetGpNet));
    return attempts[0];
  }

  // Generate a hoard for a tier
  function generateByTier({ tierId, region = "exotic", biome = "any" }) {
    const tier = D.HOARD_TIERS.find(t => t.id === tierId) || D.HOARD_TIERS[1];
    const items = [];
    // Furs
    const furN = randInt(tier.furCount[0], tier.furCount[1]);
    for (let i = 0; i < furN; i++) {
      const qBias = tier.furQualityBias;
      const qSel = pickByBias(qBias);
      const fur = generateFur({ biome, qualityMode: "fixed", fixedQuality: qSel, region });
      items.push(fur);
    }
    // Gems
    const gemN = randInt(tier.gemCount[0], tier.gemCount[1]);
    for (let i = 0; i < gemN; i++) {
      const rBias = tier.gemRarityBias;
      const rSel = pickByBias(rBias);
      const gem = generateGem({ rarity: rSel, region });
      items.push(gem);
    }
    return { tier, items };
  }
  function randInt(lo, hi) { return Math.floor(Math.random() * (hi - lo + 1)) + lo; }
  function pickByBias(bias) {
    const entries = Object.entries(bias).filter(([_, w]) => w > 0);
    const total = entries.reduce((s, [_, w]) => s + w, 0);
    let pick = Math.random() * total;
    for (const [k, w] of entries) {
      pick -= w;
      if (pick <= 0) return k;
    }
    return entries[0][0];
  }

  // -------- Misc --------
  function cryptoId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
    return "id-" + Math.random().toString(36).slice(2, 11);
  }

  window.LootEngine = {
    rollDie, rollD, sum, choose,
    formatCp, formatPriceFromSp, formatPriceFromGp,
    generateFur, buildFurItem, pickFurForBudget,
    generateGem, buildSpecificGem, rollCarat, rollGemQuality, gemFromD100,
    generateByValue, generateByTier,
    valueOfItemCp, hoardTotalCp,
    cryptoId
  };
})();
