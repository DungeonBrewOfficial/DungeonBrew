/* Furs & Gems Loot Generator — methods
 * One component per generation method. All call into LootEngine.
 * Each method emits items via props.onResult(items[]).
 */
const D = window.LootData;
const E = window.LootEngine;

const { useState, useEffect, useMemo, useCallback, useRef } = React;

// ============================================================
// Shared atoms
// ============================================================
function FieldLabel({ children }) {
  return <span className="aa-field-label">{children}</span>;
}
function Field({ label, children }) {
  return <label className="aa-field"><FieldLabel>{label}</FieldLabel>{children}</label>;
}
function Seg({ options, value, onChange }) {
  return (
    <div className="aa-seg">
      {options.map(o => (
        <button key={o.value} type="button"
          className={"aa-seg-btn" + (value === o.value ? " is-active" : "")}
          onClick={() => onChange(o.value)}>{o.label}</button>
      ))}
    </div>
  );
}
function RegionField({ value, onChange, label = "Trade region" }) {
  return (
    <Field label={label}>
      <Seg
        value={value}
        onChange={onChange}
        options={D.REGIONS.map(r => ({ value: r.id, label: `${r.label} (${r.mult}×)` }))} />
    </Field>
  );
}
function BiomeField({ value, onChange, label = "Biome filter" }) {
  return (
    <Field label={label}>
      <select className="aa-select" value={value} onChange={e => onChange(e.target.value)}>
        {D.BIOMES.map(b => <option key={b.id} value={b.id}>{b.label} — {b.hint}</option>)}
      </select>
    </Field>
  );
}
function GemRarityField({ value, onChange }) {
  return (
    <Field label="Rarity tier">
      <select className="aa-select" value={value} onChange={e => onChange(e.target.value)}>
        {D.GEM_RARITY.map(r => <option key={r.id} value={r.id}>{r.label} — {r.hint}</option>)}
      </select>
    </Field>
  );
}

// ============================================================
// METHOD I — Specific Fur
// Pick animal + quality + region; shows live price.
// ============================================================
function MethodSpecificFur({ onResult, onNote, generateKey }) {
  const [furId, setFurId] = useState(D.FURS[0].id);
  const [qualityId, setQualityId] = useState("average");
  const [region, setRegion] = useState("exotic");

  const fur = D.FURS.find(f => f.id === furId);
  const quality = D.FUR_QUALITY.find(q => q.id === qualityId);
  const item = useMemo(() => E.buildFurItem(fur, quality, region), [furId, qualityId, region]);

  useEffect(() => {
    onNote(`${fur.name} · ${quality.label} (${quality.mult}×) · ${D.REGIONS.find(r => r.id === region).label}`);
    onResult([item]);
    // eslint-disable-next-line
  }, [furId, qualityId, region, generateKey]);

  // Group furs for the selector
  const groups = useMemo(() => {
    const g = {};
    D.FURS.forEach(f => { (g[f.group] = g[f.group] || []).push(f); });
    return g;
  }, []);

  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Specific Fur.</em> Pick an animal, set quality and market, see its price.</div>
      <div className="aa-field-row">
        <Field label="Animal">
          <select className="aa-select" value={furId} onChange={e => setFurId(e.target.value)}>
            {Object.entries(groups).map(([gname, arr]) => (
              <optgroup key={gname} label={gname}>
                {arr.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
              </optgroup>
            ))}
          </select>
        </Field>
        <Field label="Quality">
          <Seg
            value={qualityId}
            onChange={setQualityId}
            options={D.FUR_QUALITY.map(q => ({ value: q.id, label: `${q.label} (${q.mult}×)` }))} />
        </Field>
      </div>
      <RegionField value={region} onChange={setRegion} />
    </div>
  );
}

// ============================================================
// METHOD II — Random Fur
// Single random fur with optional quality bias.
// ============================================================
function MethodRandomFur({ onResult, onNote, generateKey, onRerollSetter }) {
  const [biome, setBiome] = useState("any");
  const [region, setRegion] = useState("exotic");
  const [qualityMode, setQualityMode] = useState("random"); // "random" | "fixed"
  const [fixedQuality, setFixedQuality] = useState("average");

  // Track current generated item so we can show it inline
  const [tick, setTick] = useState(0);
  const item = useMemo(() => E.generateFur({
    biome, region,
    qualityMode,
    fixedQuality
  }), [tick, biome, region, qualityMode, fixedQuality]);

  useEffect(() => { onResult([item]); onNote(`Random fur · ${biome === "any" ? "any region" : D.BIOMES.find(b => b.id === biome).label}`); }, [item]);
  useEffect(() => { if (onRerollSetter) onRerollSetter(() => () => setTick(t => t + 1)); }, [onRerollSetter]);
  useEffect(() => { setTick(t => t + 1); }, [generateKey]);

  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Random Fur.</em> Roll one random pelt. Quality may be biased by biome (arctic & mountain favor pristine winter coats).</div>
      <div className="aa-field-row-3">
        <BiomeField value={biome} onChange={setBiome} />
        <Field label="Quality">
          <Seg
            value={qualityMode}
            onChange={setQualityMode}
            options={[{value:"random", label:"Random"}, {value:"fixed", label:"Fixed"}]} />
        </Field>
        {qualityMode === "fixed" ? (
          <Field label="Fixed at">
            <Seg
              value={fixedQuality}
              onChange={setFixedQuality}
              options={D.FUR_QUALITY.map(q => ({ value: q.id, label: q.label }))} />
          </Field>
        ) : (
          <RegionField value={region} onChange={setRegion} />
        )}
      </div>
      {qualityMode === "fixed" && (
        <RegionField value={region} onChange={setRegion} />
      )}
      <div className="aa-cta-row">
        <button className="aa-btn aa-btn-primary" onClick={() => setTick(t => t + 1)}>↻ Roll Again</button>
      </div>
    </div>
  );
}

// ============================================================
// METHOD III — Trapper's Haul (random batch)
// ============================================================
function MethodFurHaul({ onResult, onNote, generateKey }) {
  const [count, setCount] = useState(6);
  const [biome, setBiome] = useState("woodland");
  const [region, setRegion] = useState("regional");
  const [qualityMode, setQualityMode] = useState("random");
  const [fixedQuality, setFixedQuality] = useState("average");
  const [tick, setTick] = useState(0);

  const items = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(E.generateFur({ biome, region, qualityMode, fixedQuality }));
    }
    return arr;
  }, [tick, count, biome, region, qualityMode, fixedQuality]);

  useEffect(() => {
    onResult(items);
    onNote(`Trapper's Haul · ${count} pelts · ${biome === "any" ? "any region" : D.BIOMES.find(b => b.id === biome).label}`);
  }, [items]);
  useEffect(() => { setTick(t => t + 1); }, [generateKey]);

  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Trapper's Haul.</em> A batch of pelts as a trapper might bring to market.</div>
      <div className="aa-field-row-3">
        <Field label="How many">
          <input type="number" className="aa-input" min={1} max={40}
                 value={count} onChange={e => setCount(Math.max(1, Math.min(40, +e.target.value || 1)))} />
        </Field>
        <BiomeField value={biome} onChange={setBiome} />
        <RegionField value={region} onChange={setRegion} label="Market" />
      </div>
      <div className="aa-field-row">
        <Field label="Quality">
          <Seg
            value={qualityMode}
            onChange={setQualityMode}
            options={[{value:"random", label:"Random (biased)"}, {value:"fixed", label:"All same"}]} />
        </Field>
        {qualityMode === "fixed" && (
          <Field label="Fixed at">
            <Seg
              value={fixedQuality}
              onChange={setFixedQuality}
              options={D.FUR_QUALITY.map(q => ({ value: q.id, label: q.label }))} />
          </Field>
        )}
      </div>
      <div className="aa-cta-row">
        <button className="aa-btn aa-btn-primary" onClick={() => setTick(t => t + 1)}>↻ Roll Haul</button>
      </div>
    </div>
  );
}

// ============================================================
// METHOD IV — Fur by Budget
// ============================================================
function MethodFurBudget({ onResult, onNote, generateKey }) {
  const [targetSp, setTargetSp] = useState(500);
  const [count, setCount] = useState(4);
  const [biome, setBiome] = useState("any");
  const [region, setRegion] = useState("exotic");
  const [tick, setTick] = useState(0);

  const items = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const item = E.pickFurForBudget
        ? E.pickFurForBudget(targetSp / count, biome, region)
        : null;
      if (item) arr.push(item);
    }
    return arr;
  }, [tick, count, targetSp, biome, region]);

  useEffect(() => {
    onResult(items);
    const total = items.reduce((s, x) => s + x.finalPriceSp, 0);
    onNote(`Fur by Budget · target ≈ ${targetSp} sp · actual ${Math.round(total)} sp`);
  }, [items]);
  useEffect(() => { setTick(t => t + 1); }, [generateKey]);

  // expose pickFurForBudget — it's a local helper inside engine.js but we marked it exported
  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Fur by Budget.</em> Find pelts that fit a target value in silver pieces. Useful for "the merchant has roughly X sp of stock."</div>
      <div className="aa-field-row-4">
        <Field label="Target (sp)">
          <input type="number" className="aa-input" min={1} max={200000}
                 value={targetSp} onChange={e => setTargetSp(Math.max(1, +e.target.value || 1))} />
        </Field>
        <Field label="# of pelts">
          <input type="number" className="aa-input" min={1} max={30}
                 value={count} onChange={e => setCount(Math.max(1, Math.min(30, +e.target.value || 1)))} />
        </Field>
        <BiomeField value={biome} onChange={setBiome} />
        <RegionField value={region} onChange={setRegion} label="Market" />
      </div>
      <div className="aa-cta-row">
        <button className="aa-btn aa-btn-primary" onClick={() => setTick(t => t + 1)}>↻ Re-pick</button>
      </div>
    </div>
  );
}

// ============================================================
// METHOD V — Specific Gem
// ============================================================
function MethodSpecificGem({ onResult, onNote, generateKey }) {
  const [gemName, setGemName] = useState("Sapphire");
  const [qLabel, setQLabel] = useState("Good");
  const [carat, setCarat] = useState(1);
  const [region, setRegion] = useState("exotic");

  const item = useMemo(() =>
    E.buildSpecificGem(gemName, qLabel, carat, region),
    [gemName, qLabel, carat, region]);

  useEffect(() => {
    if (item) {
      onResult([item]);
      onNote(`${gemName} · ${qLabel} · ${carat}ct · ${D.REGIONS.find(r => r.id === region).label}`);
    }
  }, [item]);

  // Group gems by base value tier for a friendlier selector
  const grouped = useMemo(() => {
    const groups = {
      "Common (1–3 gp)":      [],
      "Uncommon (4–7 gp)":    [],
      "Rare (8–16 gp)":       [],
      "Legendary (20+ gp)":   []
    };
    D.GEM_TABLE.forEach(g => {
      if (g.base <= 3) groups["Common (1–3 gp)"].push(g);
      else if (g.base <= 7) groups["Uncommon (4–7 gp)"].push(g);
      else if (g.base <= 16) groups["Rare (8–16 gp)"].push(g);
      else groups["Legendary (20+ gp)"].push(g);
    });
    return groups;
  }, []);

  const caratOptions = [0.25, 0.5, 0.75, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Specific Gem.</em> Pick a stone, quality, and carat.</div>
      <div className="aa-field-row-4">
        <Field label="Gemstone">
          <select className="aa-select" value={gemName} onChange={e => setGemName(e.target.value)}>
            {Object.entries(grouped).map(([gname, arr]) => (
              <optgroup key={gname} label={gname}>
                {arr.map(g => <option key={g.name} value={g.name}>{g.name} ({g.base} gp)</option>)}
              </optgroup>
            ))}
          </select>
        </Field>
        <Field label="Quality">
          <select className="aa-select" value={qLabel} onChange={e => setQLabel(e.target.value)}>
            {D.GEM_QUALITY.map(q => <option key={q.label} value={q.label}>{q.label} ({q.mult}×)</option>)}
          </select>
        </Field>
        <Field label="Carats">
          <select className="aa-select" value={carat} onChange={e => setCarat(+e.target.value)}>
            {caratOptions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <RegionField value={region} onChange={setRegion} />
      </div>
    </div>
  );
}

// ============================================================
// METHOD VI — Random Gem (full d100 / 2d10 / cascade)
// ============================================================
function MethodRandomGem({ onResult, onNote, generateKey, showRollsControl }) {
  const [region, setRegion] = useState("exotic");
  const [showRolls, setShowRolls] = useState(true);
  const [tick, setTick] = useState(0);

  const item = useMemo(() => E.generateGem({ region }), [tick, region]);

  useEffect(() => {
    onResult([{ ...item, _showRolls: showRolls }]);
    onNote(`Random Gem · d100 → ${item.d100 ?? "—"} · ${item.quality} · ${item.carat}ct`);
  }, [item, showRolls]);
  useEffect(() => { setTick(t => t + 1); }, [generateKey]);

  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Random Gem.</em> The full pipeline — d100 type, 2d10 quality, cascading d4 carats.</div>
      <div className="aa-field-row">
        <RegionField value={region} onChange={setRegion} />
        <Field label="Show dice">
          <Seg
            value={showRolls ? "yes" : "no"}
            onChange={v => setShowRolls(v === "yes")}
            options={[{value:"yes", label:"Show rolls"}, {value:"no", label:"Just the result"}]} />
        </Field>
      </div>
      {showRolls && (
        <div className="lg-dice-strip">
          <div className="grp"><span className="grp-k">Type d100</span><span className="grp-v">{item.d100}</span><span className="arrow">→</span><span className="grp-v">{item.name}</span></div>
          <div className="grp"><span className="grp-k">Quality 2d10</span><span className="grp-v">{item.qualityDice[0]} + {item.qualityDice[1]} = {item.qualityTotal}</span><span className="arrow">→</span><span className="grp-v">{item.quality} ({item.qualityMult}×)</span></div>
          <div className="grp"><span className="grp-k">Carat d4!</span><span className="grp-v">[{item.caratTrace.join(", ")}]</span><span className="arrow">→</span><span className="grp-v">{item.carat}ct</span></div>
        </div>
      )}
      <div className="aa-cta-row">
        <button className="aa-btn aa-btn-primary" onClick={() => setTick(t => t + 1)}>↻ Roll Again</button>
      </div>
    </div>
  );
}

// ============================================================
// METHOD VII — Jeweler's Lot (random gem batch)
// ============================================================
function MethodGemLot({ onResult, onNote, generateKey }) {
  const [count, setCount] = useState(6);
  const [rarity, setRarity] = useState("any");
  const [region, setRegion] = useState("regional");
  const [tick, setTick] = useState(0);

  const items = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) arr.push(E.generateGem({ rarity, region }));
    return arr;
  }, [tick, count, rarity, region]);

  useEffect(() => {
    onResult(items);
    onNote(`Jeweler's Lot · ${count} gems · ${D.GEM_RARITY.find(r => r.id === rarity).label}`);
  }, [items]);
  useEffect(() => { setTick(t => t + 1); }, [generateKey]);

  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Jeweler's Lot.</em> A batch of stones, as a gem merchant might stock.</div>
      <div className="aa-field-row-3">
        <Field label="How many">
          <input type="number" className="aa-input" min={1} max={40}
                 value={count} onChange={e => setCount(Math.max(1, Math.min(40, +e.target.value || 1)))} />
        </Field>
        <GemRarityField value={rarity} onChange={setRarity} />
        <RegionField value={region} onChange={setRegion} label="Market" />
      </div>
      <div className="aa-cta-row">
        <button className="aa-btn aa-btn-primary" onClick={() => setTick(t => t + 1)}>↻ Roll Lot</button>
      </div>
    </div>
  );
}

// ============================================================
// METHOD VIII — Gem by Budget
// ============================================================
function MethodGemBudget({ onResult, onNote, generateKey }) {
  const [targetGp, setTargetGp] = useState(500);
  const [count, setCount] = useState(4);
  const [region, setRegion] = useState("exotic");
  const [tick, setTick] = useState(0);

  const items = useMemo(() => {
    const arr = [];
    const each = targetGp / count;
    for (let i = 0; i < count; i++) {
      // Brute-force search for nearest match
      const candidates = [];
      for (let k = 0; k < 12; k++) candidates.push(E.generateGem({ region }));
      candidates.sort((a, b) => Math.abs(a.finalPriceGp - each) - Math.abs(b.finalPriceGp - each));
      arr.push(candidates[0]);
    }
    return arr;
  }, [tick, targetGp, count, region]);

  useEffect(() => {
    onResult(items);
    const total = items.reduce((s, x) => s + x.finalPriceGp, 0);
    onNote(`Gem by Budget · target ≈ ${targetGp} gp · actual ${Math.round(total)} gp`);
  }, [items]);
  useEffect(() => { setTick(t => t + 1); }, [generateKey]);

  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Gem by Budget.</em> Find a set of stones that fit a target value.</div>
      <div className="aa-field-row-3">
        <Field label="Target (gp)">
          <input type="number" className="aa-input" min={1} max={1000000}
                 value={targetGp} onChange={e => setTargetGp(Math.max(1, +e.target.value || 1))} />
        </Field>
        <Field label="# of gems">
          <input type="number" className="aa-input" min={1} max={30}
                 value={count} onChange={e => setCount(Math.max(1, Math.min(30, +e.target.value || 1)))} />
        </Field>
        <RegionField value={region} onChange={setRegion} label="Market" />
      </div>
      <div className="aa-cta-row">
        <button className="aa-btn aa-btn-primary" onClick={() => setTick(t => t + 1)}>↻ Re-pick</button>
      </div>
    </div>
  );
}

// ============================================================
// METHOD IX — Hoard by Value (target gp, mix of furs+gems)
// ============================================================
function MethodHoardByValue({ onResult, onNote, generateKey }) {
  const [targetGp, setTargetGp] = useState(1000);
  const [mix, setMix] = useState("balanced");
  const [biome, setBiome] = useState("any");
  const [region, setRegion] = useState("exotic");
  const [tick, setTick] = useState(0);

  const items = useMemo(() =>
    E.generateByValue({ targetGp, mix, biome, region }),
    [tick, targetGp, mix, biome, region]);

  useEffect(() => {
    onResult(items);
    const total = items.reduce((s, x) => s + (x.finalPriceCp / 100), 0);
    onNote(`Hoard by Value · target ${targetGp} gp · actual ${Math.round(total)} gp · ${items.length} items`);
  }, [items]);
  useEffect(() => { setTick(t => t + 1); }, [generateKey]);

  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Hoard by Value.</em> Fill a target value with a blend of pelts and stones.</div>
      <div className="aa-field-row-4">
        <Field label="Target (gp)">
          <input type="number" className="aa-input" min={1} max={1000000}
                 value={targetGp} onChange={e => setTargetGp(Math.max(1, +e.target.value || 1))} />
        </Field>
        <Field label="Mix">
          <select className="aa-select" value={mix} onChange={e => setMix(e.target.value)}>
            <option value="balanced">Balanced (50/50)</option>
            <option value="fur-heavy">Fur-heavy (75/25)</option>
            <option value="gem-heavy">Gem-heavy (25/75)</option>
            <option value="all-furs">All furs</option>
            <option value="all-gems">All gems</option>
          </select>
        </Field>
        <BiomeField value={biome} onChange={setBiome} label="Fur biome" />
        <RegionField value={region} onChange={setRegion} />
      </div>
      <div className="aa-cta-row">
        <button className="aa-btn aa-btn-primary" onClick={() => setTick(t => t + 1)}>↻ Roll Hoard</button>
      </div>
    </div>
  );
}

// ============================================================
// METHOD X — Hoard by Tier (curated profile)
// ============================================================
function MethodHoardByTier({ onResult, onNote, generateKey }) {
  const [tierId, setTierId] = useState("notable");
  const [biome, setBiome] = useState("any");
  const [region, setRegion] = useState("exotic");
  const [tick, setTick] = useState(0);

  const { tier, items } = useMemo(() =>
    E.generateByTier({ tierId, biome, region }),
    [tick, tierId, biome, region]);

  useEffect(() => {
    onResult(items);
    const total = items.reduce((s, x) => s + (x.finalPriceCp / 100), 0);
    onNote(`${tier.label} · ${items.length} items · ${Math.round(total)} gp`);
  }, [items]);
  useEffect(() => { setTick(t => t + 1); }, [generateKey]);

  const tierObj = D.HOARD_TIERS.find(t => t.id === tierId);

  return (
    <div className="lg-method-body">
      <div className="aa-note"><em>Hoard by Tier.</em> Curated treasure profiles — count, quality bias, and rarity bias are all set by tier.</div>
      <div className="aa-field-row-3">
        <Field label="Tier">
          <select className="aa-select" value={tierId} onChange={e => setTierId(e.target.value)}>
            {D.HOARD_TIERS.map(t => <option key={t.id} value={t.id}>{t.label} — {t.hint}</option>)}
          </select>
        </Field>
        <BiomeField value={biome} onChange={setBiome} label="Fur biome" />
        <RegionField value={region} onChange={setRegion} />
      </div>
      <div className="lg-ghosthelp">
        {tierObj.gpMin.toLocaleString()}–{tierObj.gpMax.toLocaleString()} gp range · {tierObj.furCount[0]}–{tierObj.furCount[1]} pelts · {tierObj.gemCount[0]}–{tierObj.gemCount[1]} gems
      </div>
      <div className="aa-cta-row">
        <button className="aa-btn aa-btn-primary" onClick={() => setTick(t => t + 1)}>↻ Roll {tierObj.label}</button>
      </div>
    </div>
  );
}

// Expose methods globally so app file can pick them up
Object.assign(window, {
  MethodSpecificFur, MethodRandomFur, MethodFurHaul, MethodFurBudget,
  MethodSpecificGem, MethodRandomGem, MethodGemLot, MethodGemBudget,
  MethodHoardByValue, MethodHoardByTier
});
