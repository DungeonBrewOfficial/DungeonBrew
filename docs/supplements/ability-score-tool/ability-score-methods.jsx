/* Ability Score Generator — method controllers
 * Each Method* component owns the controls for that generation method
 * and reports out via the unified callbacks:
 *   - onAssignment(map)       — direct assignment {str: score, ...}
 *   - onAssignmentEx(map)     — extended {str: {score, max}}  (Rolemaster)
 *   - onPool(items)           — score pool [{id, value, detail}]
 *   - onMethodNote(string)    — sub-line under stage title
 *
 * The shared core (AssignmentSlot, Pool, etc.) is in app.jsx.
 */
const ASG = window.AbilityScoreGen;
const ABILS = ASG.ABILITIES;
const SHORT = ASG.ABILITY_SHORT;

// ---------- Small shared bits ----------
function DiceRow({ dice, drop, keep }) {
  // dice: number[]; drop: indices to mark dropped; keep: indices to mark kept
  return (
    <span className="asg-dice-row">
      {dice.map((d, i) => (
        <span key={i} className={
          "asg-die" +
          (drop && drop.includes(i) ? " is-dropped" : "") +
          (keep && keep.includes(i) ? " is-kept" : "")
        }>{d}</span>
      ))}
    </span>
  );
}
function uid() { return Math.random().toString(36).slice(2, 9); }
function poolFromValues(values, detailFn) {
  return values.map((v, i) => ({
    id: uid(),
    value: typeof v === "number" ? v : v.value,
    detail: detailFn ? detailFn(v, i) : (typeof v === "object" ? v.detail : "")
  }));
}

// ============================================================
// Method I — Point Buy (default scaling cost)
// ============================================================
function MethodPointBuy({ alt, defaults, onAssignment, onMethodNote }) {
  // Player adjusts each ability between 8 and 15 (or capped).
  const [budget, setBudget] = React.useState(defaults?.budget ?? 27);
  const [cap, setCap] = React.useState(defaults?.cap ?? 15);
  const [rolled, setRolled] = React.useState(null); // optional: budget rolled from dice
  const [scores, setScores] = React.useState(() => Object.fromEntries(ABILS.map(a => [a, 8])));

  const table = alt ? ASG.PB_COST_ALT : ASG.PB_COST;
  const spent = ABILS.reduce((s, a) => s + (table[scores[a]] || 0), 0);
  const effBudget = rolled != null ? rolled : budget;
  const remaining = effBudget - spent;
  const min = 8;

  const inc = (a) => {
    const v = scores[a]; if (v >= cap) return;
    const cost = (table[v+1] || 0) - (table[v] || 0);
    if (cost > remaining) return;
    setScores({ ...scores, [a]: v + 1 });
  };
  const dec = (a) => {
    const v = scores[a]; if (v <= min) return;
    setScores({ ...scores, [a]: v - 1 });
  };
  const resetAll = () => setScores(Object.fromEntries(ABILS.map(a => [a, 8])));

  // Configurable random budget
  const rollBudget = (dice) => {
    const r = ASG.rollDice(dice, 6);
    const sum = ASG.sumD(r);
    setRolled(sum);
    setScores(Object.fromEntries(ABILS.map(a => [a, 8])));
  };

  React.useEffect(() => {
    onAssignment(scores);
    onMethodNote(`${spent}/${effBudget} pts spent · cap ${cap} · ${alt ? "alt costs" : "scaling costs"}`);
  }, [scores, effBudget, cap, alt]);

  return (
    <div className="asg-method-body">
      <div className="aa-field-row-3">
        <label className="aa-field">
          <span className="aa-field-label">Point Budget</span>
          <select className="aa-select" value={rolled == null ? budget : "rolled"}
                  onChange={e => {
                    if (e.target.value === "rolled") return;
                    setRolled(null); setBudget(parseInt(e.target.value, 10));
                  }}>
            <option value="15">15 — Average</option>
            <option value="27">27 — Elite (default)</option>
            <option value="39">39 — Heroic</option>
            <option value="51">51 — Mythic</option>
            {rolled != null && <option value="rolled">{rolled} — rolled</option>}
          </select>
        </label>
        <label className="aa-field">
          <span className="aa-field-label">Score Cap</span>
          <select className="aa-select" value={cap} onChange={e => setCap(parseInt(e.target.value, 10))}>
            <option value="15">15 (recommended)</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18 (uncapped)</option>
          </select>
        </label>
        <label className="aa-field">
          <span className="aa-field-label">Random Budget</span>
          <div className="aa-seg">
            <button type="button" className="aa-seg-btn" onClick={() => rollBudget(4)}>4d6</button>
            <button type="button" className="aa-seg-btn" onClick={() => rollBudget(8)}>8d6</button>
            <button type="button" className="aa-seg-btn" onClick={() => rollBudget(11)}>11d6</button>
            <button type="button" className="aa-seg-btn" onClick={() => rollBudget(14)}>14d6</button>
          </div>
        </label>
      </div>

      <p className="aa-note">
        <strong>How it works.</strong> Every ability starts at 8. Spend your budget to raise scores
        — scores 9–13 cost 1 each, 14 costs {alt ? 6 : 7}, 15 costs {alt ? 8 : 9}, 16 costs {alt ? 10 : 12},
        17 costs {alt ? 13 : 15}, 18 costs {alt ? 16 : 19}. Use the <em>+ / –</em> bumpers on each ability.
      </p>

      <div className="asg-bumprow" style={{display:"grid", gridTemplateColumns:"repeat(6, 1fr)", gap:10}}>
        {ABILS.map(a => (
          <div key={a} style={{textAlign:"center"}}>
            <div className="asg-ab-label">{SHORT[a]}</div>
            <div className="asg-ab-score" style={{fontSize:32, margin:"2px 0"}}>{scores[a]}</div>
            <div className="asg-ab-sub" style={{fontSize:11}}>cost {table[scores[a]] || 0}</div>
            <div className="asg-ab-bump">
              <button type="button" onClick={() => dec(a)} disabled={scores[a] <= min}>−</button>
              <button type="button" onClick={() => inc(a)}
                disabled={scores[a] >= cap || ((table[scores[a]+1] || 0) - (table[scores[a]] || 0)) > remaining}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="aa-cta-row">
        <button type="button" className="aa-btn aa-btn-secondary" onClick={resetAll}>Reset to 8s</button>
      </div>
    </div>
  );
}

// ============================================================
// Method IV — Non-Incremental Point Buy
// ============================================================
function MethodNonIncPB({ onAssignment, onMethodNote }) {
  const [budget, setBudget] = React.useState(54);
  const [minScore, setMinScore] = React.useState(3);
  const [maxScore, setMaxScore] = React.useState(18);
  const [scores, setScores] = React.useState(() => Object.fromEntries(ABILS.map(a => [a, 3])));

  const spent = ABILS.reduce((s, a) => s + (scores[a] - 3), 0);
  const remaining = budget - spent;

  const inc = (a) => { if (scores[a] >= maxScore || remaining <= 0) return; setScores({...scores, [a]: scores[a]+1}); };
  const dec = (a) => { if (scores[a] <= minScore) return; setScores({...scores, [a]: scores[a]-1}); };

  React.useEffect(() => {
    onAssignment(scores);
    onMethodNote(`${spent}/${budget} pts · 1-for-1, range ${minScore}–${maxScore}`);
  }, [scores, budget, minScore, maxScore]);

  return (
    <div className="asg-method-body">
      <div className="aa-field-row-3">
        <label className="aa-field">
          <span className="aa-field-label">Point Budget</span>
          <select className="aa-select" value={budget} onChange={e => setBudget(parseInt(e.target.value,10))}>
            <option value="45">45 — Average</option>
            <option value="54">54 — Elite</option>
            <option value="60">60 — Heroic</option>
            <option value="66">66 — Mythic</option>
          </select>
        </label>
        <label className="aa-field">
          <span className="aa-field-label">Minimum</span>
          <select className="aa-select" value={minScore} onChange={e => setMinScore(parseInt(e.target.value,10))}>
            <option value="3">3 (none)</option><option value="6">6</option><option value="8">8</option><option value="10">10</option>
          </select>
        </label>
        <label className="aa-field">
          <span className="aa-field-label">Maximum</span>
          <select className="aa-select" value={maxScore} onChange={e => setMaxScore(parseInt(e.target.value,10))}>
            <option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option>
          </select>
        </label>
      </div>

      <p className="aa-note">
        <strong>1-for-1.</strong> Every ability starts at 3. Each point raises a score by one
        — flat cost, no scaling. Cannot exceed {maxScore}; cannot go below {minScore}.
      </p>

      <div style={{display:"grid", gridTemplateColumns:"repeat(6, 1fr)", gap:10}}>
        {ABILS.map(a => (
          <div key={a} style={{textAlign:"center"}}>
            <div className="asg-ab-label">{SHORT[a]}</div>
            <div className="asg-ab-score" style={{fontSize:32, margin:"2px 0"}}>{scores[a]}</div>
            <div className="asg-ab-sub" style={{fontSize:11}}>{scores[a] - 3} pt</div>
            <div className="asg-ab-bump">
              <button type="button" onClick={() => dec(a)} disabled={scores[a] <= minScore}>−</button>
              <button type="button" onClick={() => inc(a)} disabled={scores[a] >= maxScore || remaining <= 0}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="aa-cta-row">
        <button type="button" className="aa-btn aa-btn-secondary"
                onClick={() => setScores(Object.fromEntries(ABILS.map(a => [a, minScore])))}>Reset to {minScore}s</button>
      </div>
    </div>
  );
}

// ============================================================
// Method II — Standard Array
// ============================================================
function MethodStandardArray({ onPool, onMethodNote, generateKey }) {
  const [tier, setTier] = React.useState("elite");
  React.useEffect(() => {
    const arr = ASG.STANDARD_ARRAYS[tier];
    onPool(poolFromValues(arr));
    onMethodNote(`${tier[0].toUpperCase() + tier.slice(1)} Array — assign as you wish`);
  }, [tier, generateKey]);

  return (
    <div className="asg-method-body">
      <div className="aa-field">
        <span className="aa-field-label">Array Tier</span>
        <div className="aa-seg">
          {["average","elite","heroic","mythic"].map(t => (
            <button key={t} type="button"
              className={"aa-seg-btn" + (tier === t ? " is-active" : "")}
              onClick={() => setTier(t)}>{t[0].toUpperCase() + t.slice(1)}</button>
          ))}
        </div>
      </div>
      <p className="aa-note">
        <strong>Pre-balanced.</strong> A fixed list of six scores. Pick a tier, then drag each
        score down into an ability — or click a chip below and then click an ability slot.
      </p>
    </div>
  );
}

// ============================================================
// Method III — Matrix Array
// ============================================================
function MethodMatrix({ onPool, onAssignment, onMethodNote, generateKey }) {
  const [tier, setTier] = React.useState("elite");
  const [sel, setSel] = React.useState({ kind: "row", index: 0 });
  const [reversed, setReversed] = React.useState(false);
  const [assignFree, setAssignFree] = React.useState(false);
  const matrix = ASG.MATRICES[tier];

  const arr = ASG.matrixSelect(matrix, sel.kind, sel.index, reversed);

  React.useEffect(() => {
    if (assignFree) {
      onPool(poolFromValues(arr));
      onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    } else {
      onPool([]);
      onAssignment(Object.fromEntries(ABILS.map((a, i) => [a, arr[i]])));
    }
    const dirLabel = sel.kind === "diag" ? "Diagonal ↘" :
                     sel.kind === "antidiag" ? "Diagonal ↙" :
                     sel.kind === "row" ? `Row ${sel.index+1}` : `Column ${sel.index+1}`;
    onMethodNote(`${tier[0].toUpperCase()+tier.slice(1)} Matrix · ${dirLabel}${reversed ? " · reversed" : ""}${assignFree ? " · free assign" : " · in order"}`);
  }, [tier, sel, reversed, assignFree, generateKey]);

  const hl = (r, c) => {
    if (sel.kind === "row" && sel.index === r) return true;
    if (sel.kind === "col" && sel.index === c) return true;
    if (sel.kind === "diag" && r === c) return true;
    if (sel.kind === "antidiag" && r + c === 5) return true;
    return false;
  };

  return (
    <div className="asg-method-body">
      <div className="aa-field">
        <span className="aa-field-label">Matrix Tier</span>
        <div className="aa-seg">
          {["average","elite","heroic","mythic"].map(t => (
            <button key={t} type="button"
              className={"aa-seg-btn" + (tier === t ? " is-active" : "")}
              onClick={() => setTier(t)}>{t[0].toUpperCase() + t.slice(1)}</button>
          ))}
        </div>
      </div>

      <table className="asg-matrix">
        <tbody>
          {matrix.map((row, r) => (
            <tr key={r}>
              <td className="corner" onClick={() => setSel({ kind:"row", index: r })}
                  title={`Row ${r+1}`}>R{r+1}</td>
              {row.map((v, c) => (
                <td key={c} className={hl(r, c) ? "is-hl" : ""}
                    onClick={() => {
                      // click toggles which dimension to select
                      const cs = sel;
                      if (cs.kind === "row" && cs.index !== r) setSel({kind:"row", index:r});
                      else if (cs.kind === "col" && cs.index !== c) setSel({kind:"col", index:c});
                      else setSel({kind:"row", index:r});
                    }}>{v}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="corner"></td>
            {[0,1,2,3,4,5].map(c => (
              <td key={c} className="corner" onClick={() => setSel({kind:"col", index: c})}>C{c+1}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="asg-matrix-actions">
        <button type="button" className={"asg-matrix-btn" + (sel.kind==="diag" ? " is-on" : "")}
                onClick={() => setSel({kind:"diag", index:0})}>Diagonal ↘</button>
        <button type="button" className={"asg-matrix-btn" + (sel.kind==="antidiag" ? " is-on" : "")}
                onClick={() => setSel({kind:"antidiag", index:0})}>Diagonal ↙</button>
        <button type="button" className={"asg-matrix-btn" + (reversed ? " is-on" : "")}
                onClick={() => setReversed(r => !r)}>Reverse</button>
        <button type="button" className={"asg-matrix-btn" + (assignFree ? " is-on" : "")}
                onClick={() => setAssignFree(f => !f)}>Free Assign</button>
      </div>

      <p className="aa-note">
        Click any row label (R), column label (C), or a diagonal button to select a 6-score
        array, in order. The arrays are intended to be used in order, but
        <em> Free Assign</em> lets you place them where you like.
      </p>
    </div>
  );
}

// ============================================================
// Method V — 3d6 / VI — 4d6 drop lowest / V&VI alternatives
// ============================================================
function MethodDice({ kind, onPool, onAssignment, onMethodNote, generateKey }) {
  // kind: "3d6" | "4d6" | "5d6" (drop two lowest)
  // Two independent toggles:
  //   rollStyle:  standard | best7 | rerolllow | bestoftwo
  //   assignStyle: assign | inorder
  const [rollStyle, setRollStyle] = React.useState("standard");
  const [assignStyle, setAssignStyle] = React.useState("assign");
  const [sets, setSets] = React.useState(null);

  const roll = React.useCallback(() => {
    let s;
    const makeSet = () => {
      if (kind === "3d6") {
        const r = ASG.rollDice(3, 6);
        return { dice: r, kept: r, dropped: [], score: ASG.sumD(r) };
      } else if (kind === "4d6") {
        const r = ASG.rollDice(4, 6);
        const sorted = r.slice().sort((a,b) => b-a);
        return { dice: r, kept: sorted.slice(0,3), dropped: [sorted[3]], score: ASG.sumD(sorted.slice(0,3)) };
      } else { // 5d6
        const r = ASG.rollDice(5, 6);
        const sorted = r.slice().sort((a,b) => b-a);
        return { dice: r, kept: sorted.slice(0,3), dropped: sorted.slice(3), score: ASG.sumD(sorted.slice(0,3)) };
      }
    };

    if (rollStyle === "best7") {
      const seven = [];
      for (let i = 0; i < 7; i++) seven.push(makeSet());
      seven.sort((a,b) => b.score - a.score);
      s = seven.slice(0, 6);
    } else if (rollStyle === "bestoftwo") {
      const A = []; const B = [];
      for (let i = 0; i < 6; i++) { A.push(makeSet()); B.push(makeSet()); }
      const sa = A.reduce((x,y) => x+y.score, 0);
      const sb = B.reduce((x,y) => x+y.score, 0);
      s = sa >= sb ? A : B;
    } else {
      s = [];
      for (let i = 0; i < 6; i++) s.push(makeSet());
      if (rollStyle === "rerolllow") {
        s.sort((a,b) => a.score - b.score);
        s[0] = makeSet();
      }
    }
    setSets(s);
  }, [kind, rollStyle]);

  React.useEffect(() => { roll(); }, [rollStyle, kind, generateKey]);

  React.useEffect(() => {
    if (!sets) return;
    if (assignStyle === "inorder") {
      onPool([]);
      onAssignment(Object.fromEntries(ABILS.map((a, i) => [a, sets[i].score])));
    } else {
      onPool(sets.map(s => ({
        id: uid(),
        value: s.score,
        detail: `${s.kept.join("+")}${s.dropped && s.dropped.length ? " (drop " + s.dropped.join(",") + ")" : ""}`
      })));
      onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    }
    const lbl = {
      "3d6": "3d6",
      "4d6": "4d6 drop lowest",
      "5d6": "5d6 drop two lowest"
    }[kind];
    const rsLbl = ({
      standard: "standard roll",
      best7: "7 sets, keep 6 best",
      rerolllow: "reroll the lowest",
      bestoftwo: "best of two arrays"
    })[rollStyle];
    const asLbl = assignStyle === "inorder" ? "in order" : "assign as you wish";
    onMethodNote(`${lbl} · ${rsLbl} · ${asLbl}`);
  }, [sets, assignStyle]);

  return (
    <div className="asg-method-body">
      <div className="aa-field-row">
        <div className="aa-field">
          <span className="aa-field-label">Roll Style</span>
          <div className="aa-seg" style={{flexWrap:"wrap"}}>
            {[
              ["standard", "Standard"],
              ["best7", "Best 6 of 7"],
              ["rerolllow", "Reroll Lowest"],
              ["bestoftwo", "Best of Two"]
            ].map(([v,l]) => (
              <button key={v} type="button" className={"aa-seg-btn" + (rollStyle === v ? " is-active" : "")}
                      onClick={() => setRollStyle(v)}>{l}</button>
            ))}
          </div>
        </div>
        <div className="aa-field">
          <span className="aa-field-label">Assignment</span>
          <div className="aa-seg">
            <button type="button" className={"aa-seg-btn" + (assignStyle === "assign" ? " is-active" : "")}
                    onClick={() => setAssignStyle("assign")}>Assign</button>
            <button type="button" className={"aa-seg-btn" + (assignStyle === "inorder" ? " is-active" : "")}
                    onClick={() => setAssignStyle("inorder")}>In Order</button>
          </div>
        </div>
      </div>

      <div className="aa-cta-row">
        <button type="button" className="aa-btn aa-btn-primary" onClick={roll}>Roll {kind === "5d6" ? "5d6 ×6" : kind === "4d6" ? "4d6 ×6" : "3d6 ×6"}</button>
      </div>

      {sets && (
        <div style={{display:"grid", gap:8}}>
          {sets.map((s, i) => (
            <div key={i} style={{display:"flex", alignItems:"center", gap:12}}>
              <span style={{fontFamily:"'IM Fell English SC', serif", fontSize:11, color:"var(--aa-ink-3)", letterSpacing:".2em", width:34}}>
                {(i+1).toString().padStart(2,"0")}
              </span>
              <DiceRow dice={s.dice}
                       keep={s.dice.map((d, idx) => {
                         // find indices that are in kept array (but only once each)
                         const taken = new Set();
                         return s.kept.find((kd, ki) => kd === d && !taken.has(idx) && (taken.add(idx), true)) ? idx : null;
                       }).filter(x => x !== null)}
                       drop={s.dice.map((d, idx) => {
                         // mark dice not in `kept` (lowest ones)
                         const sorted = s.dice.slice().sort((a,b) => a-b);
                         const dropCount = s.dice.length - 3;
                         const dropSet = sorted.slice(0, dropCount);
                         return dropSet.includes(d) ? idx : null;
                       }).filter(x => x !== null)} />
              <span style={{marginLeft:"auto", fontFamily:"'Cormorant Garamond', serif", fontWeight:600, fontSize:22, color:"var(--aa-accent)"}}>
                {s.score}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Method VII — Dice Pool
// ============================================================
function MethodDicePool({ onPool, onAssignment, onMethodNote, generateKey }) {
  const [poolSize, setPoolSize] = React.useState(18);
  const [dice, setDice] = React.useState(null); // pool of die values
  // Partition: 6 buckets, each holds up to 3 die indices.
  // A die index not present in any bucket is "in the pool".
  const [partition, setPartition] = React.useState(() => [[],[],[],[],[],[]]);
  const [pickedDie, setPickedDie] = React.useState(null); // die index currently held

  const roll = React.useCallback(() => {
    const d = ASG.rollDice(poolSize, 6);
    setDice(d);
    setPartition([[],[],[],[],[],[]]);
    setPickedDie(null);
  }, [poolSize]);

  React.useEffect(() => { roll(); }, [poolSize, generateKey]);

  const used = new Set(partition.flat());

  // Remove dieIdx from wherever it currently is; return a fresh partition.
  const removeFromAny = (part, dieIdx) =>
    part.map(s => s.filter(i => i !== dieIdx));

  // Click a die (anywhere). Toggles "picked".
  // - If no die is picked: pick this one up.
  // - If THIS die is already picked: drop it back to the pool (unpick).
  // - If a DIFFERENT die is picked: swap selection to this one (so users can change their mind mid-move).
  const onClickDie = (dieIdx) => {
    if (pickedDie === dieIdx) {
      // already picked → put it back where it was AND unpick (returns to pool if it was in a slot)
      setPartition(p => removeFromAny(p, dieIdx));
      setPickedDie(null);
      return;
    }
    setPickedDie(dieIdx);
  };

  // Click a slot. If a die is picked, move it there (from wherever it currently lives).
  const placeIn = (slot) => {
    if (pickedDie == null) return;
    if (partition[slot].length >= 3 && !partition[slot].includes(pickedDie)) return;
    // Remove from any other slot first
    let next = removeFromAny(partition, pickedDie);
    // If it was already in `slot`, we just removed it — that's "move back to pool".
    // If not, place it.
    if (!partition[slot].includes(pickedDie)) {
      next = next.map((s, i) => i === slot ? s.concat([pickedDie]) : s);
    }
    setPartition(next);
    setPickedDie(null);
  };

  // Click the pool area background — return picked die (from a slot) to the pool.
  const sendToPool = () => {
    if (pickedDie == null) return;
    setPartition(p => removeFromAny(p, pickedDie));
    setPickedDie(null);
  };

  const clearSlot = (slot) => {
    const next = partition.map((s, i) => i === slot ? [] : s);
    setPartition(next);
    setPickedDie(null);
  };
  const autoAssign = () => {
    // Greedy: largest dice go together in highest-buckets
    if (!dice) return;
    const sorted = dice.map((v, i) => ({ v, i })).sort((a,b) => b.v - a.v);
    const next = [[],[],[],[],[],[]];
    for (let k = 0; k < sorted.length; k++) {
      const slot = Math.floor(k / 3);
      if (slot >= 6) break;
      next[slot].push(sorted[k].i);
    }
    setPartition(next);
    setPickedDie(null);
  };
  const clearAll = () => { setPartition([[],[],[],[],[],[]]); setPickedDie(null); };

  // Compute scores for slots
  React.useEffect(() => {
    if (!dice) return;
    const sums = partition.map(s => s.length === 3 ? s.reduce((sum, idx) => sum + dice[idx], 0) : null);
    const allFilled = sums.every(s => s !== null);
    if (allFilled) {
      onPool(poolFromValues(sums));
      onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    } else {
      onPool([]);
      onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    }
    onMethodNote(`${poolSize}d6 pool · partition into six groups of three`);
  }, [dice, partition, poolSize]);

  return (
    <div className="asg-method-body">
      <div className="aa-field-row">
        <label className="aa-field">
          <span className="aa-field-label">Pool Size</span>
          <select className="aa-select" value={poolSize} onChange={e => setPoolSize(parseInt(e.target.value,10))}>
            <option value="18">18d6 (default)</option>
            <option value="21">21d6</option>
            <option value="24">24d6</option>
            <option value="27">27d6</option>
          </select>
        </label>
        <div className="aa-field">
          <span className="aa-field-label">Actions</span>
          <div className="aa-seg">
            <button type="button" className="aa-seg-btn" onClick={roll}>Re-roll Pool</button>
            <button type="button" className="aa-seg-btn" onClick={autoAssign}>Auto-Partition</button>
            <button type="button" className="aa-seg-btn" onClick={clearAll}>Clear All</button>
          </div>
        </div>
      </div>

      <p className="aa-note">
        <strong>Pool & partition.</strong> Roll a shared pool of d6s. Each player partitions the
        numbers into six groups of three — each group is summed to make one ability score.
        <em> Click a die</em> to pick it up, then <em>click a slot</em> to place it. Click a placed
        die to pick it up again, or click empty pool space to drop it back.
      </p>

      {dice && (
        <>
          <div className="asg-pool-head">
            <span>Pool — {dice.length}d6 · sum {ASG.sumD(dice)}</span>
            <span className="asg-pool-hint">click a die · then a slot</span>
          </div>
          <div className="asg-pool-list" onClick={(e) => { if (e.target === e.currentTarget) sendToPool(); }}>
            {dice.map((v, i) => (
              <button key={i} type="button" disabled={used.has(i)}
                className={"asg-pool-chip" + (used.has(i) ? " is-used" : "") + (pickedDie === i ? " is-selected" : "")}
                onClick={() => onClickDie(i)}>
                <span className="asg-pool-chip-val">{v}</span>
                <span className="asg-pool-chip-detail">d6</span>
              </button>
            ))}
          </div>
        </>
      )}

      {dice && (
        <div className="asg-partition">
          {partition.map((slot, i) => {
            const slotFull = slot.length >= 3;
            const canTarget = pickedDie != null && (slot.includes(pickedDie) || !slotFull);
            return (
              <div key={i} className={"asg-partbox" + (canTarget ? " is-target" : "")}
                   onClick={() => placeIn(i)}>
                <div className="lbl">Slot {i+1}</div>
                <div className="dice">
                  {slot.map(idx => (
                    <button key={idx}
                      className={"asg-die" + (pickedDie === idx ? " is-kept" : "")}
                      style={{cursor:"pointer"}}
                      onClick={(e) => { e.stopPropagation(); onClickDie(idx); }}>
                      {dice[idx]}
                    </button>
                  ))}
                  {Array.from({length: 3 - slot.length}).map((_, k) => (
                    <span key={"e"+k} className="asg-die" style={{opacity:.25}}>·</span>
                  ))}
                </div>
                <div className="sum">{slot.length === 3 ? slot.reduce((s, idx) => s + dice[idx], 0) : "—"}</div>
                {slot.length > 0 && (
                  <button className="partclear" onClick={(e) => { e.stopPropagation(); clearSlot(i); }}>clear</button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Method VIII — Targeted Rolling
// ============================================================
function MethodTargeted({ onAssignment, onMethodNote, generateKey, onPool }) {
  const [klass, setKlass] = React.useState("Fighter");
  const [variant, setVariant] = React.useState("class"); // class | swappable
  const [data, setData] = React.useState(null); // per-ability rolls or array of sets

  const roll = React.useCallback(() => {
    if (variant === "class") setData(ASG.genMethodVIII(klass));
    else setData(ASG.genMethodVIII_swappable());
  }, [klass, variant]);
  React.useEffect(() => { roll(); }, [klass, variant, generateKey]);

  React.useEffect(() => {
    if (!data) return;
    if (variant === "class") {
      // direct assignment
      onPool([]);
      onAssignment(Object.fromEntries(ABILS.map(a => [a, data[a].score])));
      onMethodNote(`Targeted · ${klass} class profile`);
    } else {
      onPool(data.map(s => ({ id: uid(), value: s.score, detail: `${s.count}d6 → top 3 = ${s.kept.join("+")}` })));
      onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
      onMethodNote(`Swappable · 8d6/7d6/6d6/5d6/4d6/3d6 · top 3 each`);
    }
  }, [data, variant]);

  const profile = ASG.CLASS_DICE[klass];

  return (
    <div className="asg-method-body">
      <div className="aa-field-row">
        <label className="aa-field">
          <span className="aa-field-label">Variant</span>
          <div className="aa-seg">
            <button type="button" className={"aa-seg-btn" + (variant==="class" ? " is-active" : "")} onClick={() => setVariant("class")}>By Class</button>
            <button type="button" className={"aa-seg-btn" + (variant==="swappable" ? " is-active" : "")} onClick={() => setVariant("swappable")}>Swappable Pool</button>
          </div>
        </label>
        {variant === "class" && (
          <label className="aa-field">
            <span className="aa-field-label">Class</span>
            <select className="aa-select" value={klass} onChange={e => setKlass(e.target.value)}>
              {Object.keys(ASG.CLASS_DICE).map(k => <option key={k} value={k}>{k}</option>)}
            </select>
          </label>
        )}
      </div>

      {variant === "class" && profile && (
        <div className="asg-prof-bar">
          {ABILS.map(a => (
            <div key={a}>
              <div className="ab">{SHORT[a]}</div>
              <div className="dn">{profile[a]}d6</div>
            </div>
          ))}
        </div>
      )}

      <p className="aa-note">
        <strong>Built to fit.</strong> Roll the listed dice pool for each ability — keep only the
        top three dice. This method consistently produces <em>Mythic</em> arrays; the swappable
        variant lets you assign which pile goes where.
      </p>

      <div className="aa-cta-row">
        <button type="button" className="aa-btn aa-btn-primary" onClick={roll}>Roll Again</button>
      </div>

      {data && variant === "class" && (
        <div style={{display:"grid", gap:6}}>
          {ABILS.map(a => (
            <div key={a} style={{display:"flex", alignItems:"center", gap:12}}>
              <span style={{fontFamily:"'IM Fell English SC', serif", fontSize:11, color:"var(--aa-ink-3)", letterSpacing:".22em", width:40}}>{SHORT[a]}</span>
              <DiceRow dice={data[a].dice}
                drop={data[a].dice.map((d, i) => {
                  const sorted = data[a].dice.slice().sort((a,b)=>a-b);
                  const dropSet = sorted.slice(0, data[a].dice.length - 3);
                  // greedy match
                  return dropSet.includes(d) ? i : null;
                }).filter(x => x!==null)} />
              <span style={{marginLeft:"auto", fontFamily:"'Cormorant Garamond', serif", fontWeight:600, fontSize:22, color:"var(--aa-accent)"}}>
                {data[a].score}
              </span>
            </div>
          ))}
        </div>
      )}

      {data && variant === "swappable" && (
        <div style={{display:"grid", gap:6}}>
          {data.map((s, i) => (
            <div key={i} style={{display:"flex", alignItems:"center", gap:12}}>
              <span style={{fontFamily:"'IM Fell English SC', serif", fontSize:11, color:"var(--aa-ink-3)", letterSpacing:".22em", width:40}}>{s.count}d6</span>
              <DiceRow dice={s.dice}
                drop={s.dice.map((d, i) => {
                  const sorted = s.dice.slice().sort((a,b)=>a-b);
                  return sorted.slice(0, s.dice.length - 3).includes(d) ? i : null;
                }).filter(x => x!==null)} />
              <span style={{marginLeft:"auto", fontFamily:"'Cormorant Garamond', serif", fontWeight:600, fontSize:22, color:"var(--aa-accent)"}}>
                {s.score}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Method IX — Rolemaster Style
// ============================================================
function MethodRolemaster({ onAssignmentEx, onMethodNote, generateKey, onPool, onAssignment }) {
  const [variant, setVariant] = React.useState("standard"); // standard | alt
  const [assignFree, setAssignFree] = React.useState(false);
  const [sets, setSets] = React.useState(null);

  const roll = React.useCallback(() => {
    setSets(variant === "standard" ? ASG.genMethodIX() : ASG.genMethodIX_alt());
  }, [variant]);
  React.useEffect(() => { roll(); }, [variant, generateKey]);

  React.useEffect(() => {
    if (!sets) return;
    if (assignFree) {
      // pool by start; max travels with the score in a different way — we need to attach
      onPool(sets.map(s => ({ id: uid(), value: s.start, max: s.max, detail: `start ${s.start} · max ${s.max}` })));
      onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
      onAssignmentEx(null);
    } else {
      onPool([]);
      const map = Object.fromEntries(ABILS.map((a, i) => [a, { score: sets[i].start, max: sets[i].max }]));
      onAssignmentEx(map);
    }
    onMethodNote(`Rolemaster Style · ${variant === "standard" ? "3d6 vs 4d6 drop lowest" : "4d6 → low 3 / all 4"}${assignFree ? " · free assign" : " · in order"}`);
  }, [sets, assignFree, variant]);

  return (
    <div className="asg-method-body">
      <div className="aa-field-row">
        <label className="aa-field">
          <span className="aa-field-label">Variant</span>
          <div className="aa-seg">
            <button type="button" className={"aa-seg-btn" + (variant==="standard" ? " is-active" : "")} onClick={() => setVariant("standard")}>3d6 vs 4d6</button>
            <button type="button" className={"aa-seg-btn" + (variant==="alt" ? " is-active" : "")} onClick={() => setVariant("alt")}>4d6 (low 3 / all 4)</button>
          </div>
        </label>
        <label className="aa-check" style={{alignSelf:"end", marginBottom:8}}>
          <input type="checkbox" checked={assignFree} onChange={e => setAssignFree(e.target.checked)} />
          <span className="aa-check-box"></span>
          <span>Free assign (off = in order)</span>
        </label>
      </div>

      <p className="aa-note">
        <strong>Two tracks: start & potential.</strong> Each ability has a starting score and a
        higher maximum. As your character grows, you may raise an ability one point per level —
        never exceeding its potential. Expect a low-powered start.
      </p>

      <div className="aa-cta-row">
        <button type="button" className="aa-btn aa-btn-primary" onClick={roll}>Roll Again</button>
      </div>

      {sets && (
        <div className="asg-rmrow">
          {sets.map((s, i) => (
            <div key={i} className="asg-rmcell">
              <div className="asg-rmcell-lbl">{assignFree ? "—" : SHORT[ABILS[i]]}</div>
              <div className="asg-rmcell-start">{s.start}</div>
              <div className="asg-rmcell-arrow">↑</div>
              <div className="asg-rmcell-max">{s.max}</div>
              <div className="asg-rmcell-dice">
                {variant === "standard"
                  ? <>3d6: {s.d3.join("+")}<br/>4d6: top3 {s.d4.slice().sort((a,b)=>b-a).slice(0,3).join("+")}</>
                  : <>4d6: {s.d4.join(",")}</>
                }
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Method X — Dice Point Buy
// ============================================================
function MethodDicePB({ onPool, onAssignment, onMethodNote, generateKey }) {
  const [tier, setTier] = React.useState("heroic");
  const [budget] = React.useState(4);
  const [picks, setPicks] = React.useState([3, 1, 0, 0, 0, 0]); // costs for each of 6 slots
  const [rolled, setRolled] = React.useState(null);

  const table = ASG.DPB_VARIANTS[tier];
  const totalSpent = picks.reduce((s, c) => s + c, 0);

  const rollAll = React.useCallback(() => {
    const results = picks.map(c => {
      const opt = table.find(o => o.cost === c);
      const r = opt.roll();
      return { cost: c, label: opt.label, value: r.value, dice: r.dice };
    });
    setRolled(results);
  }, [picks, tier]);
  React.useEffect(() => { rollAll(); }, [picks, tier, generateKey]);

  React.useEffect(() => {
    if (!rolled) return;
    onPool(rolled.map(r => ({ id: uid(), value: r.value, detail: `${r.label}` })));
    onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    onMethodNote(`Dice Point Buy · ${tier} · ${totalSpent}/${budget} pts spent`);
  }, [rolled, tier]);

  const setPick = (i, c) => {
    const next = picks.slice();
    next[i] = c;
    const sum = next.reduce((s,x) => s+x, 0);
    if (sum <= budget) setPicks(next);
  };

  return (
    <div className="asg-method-body">
      <div className="aa-field-row">
        <label className="aa-field">
          <span className="aa-field-label">Tier</span>
          <div className="aa-seg">
            <button type="button" className={"aa-seg-btn" + (tier==="average" ? " is-active" : "")} onClick={() => setTier("average")}>Average</button>
            <button type="button" className={"aa-seg-btn" + (tier==="elite" ? " is-active" : "")} onClick={() => setTier("elite")}>Elite</button>
            <button type="button" className={"aa-seg-btn" + (tier==="heroic" ? " is-active" : "")} onClick={() => setTier("heroic")}>Heroic</button>
          </div>
        </label>
        <div className="aa-field">
          <span className="aa-field-label">Budget Used</span>
          <div className="asg-numpill"><strong>{totalSpent}</strong> / {budget}</div>
        </div>
      </div>

      <p className="aa-note">
        <strong>Buy six.</strong> 4 points to spend across six scores. Pricier costs lock in higher
        floors — the 0-cost roll is fully random. Choose each slot's cost; click <em>Re-roll</em>
        to roll the dice for the chosen options.
      </p>

      <div style={{display:"grid", gap:8}}>
        {picks.map((c, i) => (
          <div key={i} style={{display:"grid", gridTemplateColumns:"36px 1fr 110px 60px", gap:10, alignItems:"center"}}>
            <span style={{fontFamily:"'IM Fell English SC', serif", fontSize:11, color:"var(--aa-ink-3)", letterSpacing:".22em"}}>{(i+1).toString().padStart(2,"0")}</span>
            <div className="aa-seg" style={{padding:2}}>
              {table.map(opt => (
                <button key={opt.cost} type="button"
                  className={"aa-seg-btn" + (c === opt.cost ? " is-active" : "")}
                  onClick={() => setPick(i, opt.cost)}
                  disabled={(totalSpent - c + opt.cost) > budget}
                  title={opt.label}>
                  {opt.cost}p
                </button>
              ))}
            </div>
            <span style={{fontSize:12.5, color:"var(--aa-ink-2)", fontStyle:"italic"}}>
              {table.find(o => o.cost === c).label}
            </span>
            <span style={{textAlign:"right", fontFamily:"'Cormorant Garamond', serif", fontWeight:600, fontSize:22, color:"var(--aa-accent)"}}>
              {rolled ? rolled[i].value : "—"}
            </span>
          </div>
        ))}
      </div>

      <div className="aa-cta-row">
        <button type="button" className="aa-btn aa-btn-primary" onClick={rollAll}>Re-roll Dice</button>
      </div>
    </div>
  );
}

// ============================================================
// Method XI — Table Roll
// ============================================================
function MethodTableRoll({ onPool, onAssignment, onMethodNote, generateKey }) {
  const [weighted, setWeighted] = React.useState(false);
  const [sets, setSets] = React.useState(null);

  const roll = React.useCallback(() => {
    const out = [];
    for (let i = 0; i < 6; i++) {
      let row, col;
      if (weighted) {
        const r2 = ASG.d(6) + ASG.d(6); // 2..12
        row = Math.min(6, Math.max(1, Math.round((r2 - 2) / 10 * 5) + 1)); // map 2-12 → 1-6 roughly
        col = ASG.d(6);
      } else {
        row = ASG.d(6); col = ASG.d(6);
      }
      out.push({ row, col, score: ASG.TABLE_ROLL[row-1][col-1] });
    }
    setSets(out);
  }, [weighted]);
  React.useEffect(() => { roll(); }, [weighted, generateKey]);

  React.useEffect(() => {
    if (!sets) return;
    onPool(sets.map(s => ({ id: uid(), value: s.score, detail: `R${s.row}·C${s.col}` })));
    onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    onMethodNote(`Table Roll · ${weighted ? "weighted 2d6/1d6" : "1d6 + 1d6"}`);
  }, [sets, weighted]);

  return (
    <div className="asg-method-body">
      <div className="aa-field-row">
        <label className="aa-field">
          <span className="aa-field-label">Variant</span>
          <div className="aa-seg">
            <button type="button" className={"aa-seg-btn" + (!weighted ? " is-active" : "")} onClick={() => setWeighted(false)}>1d6 + 1d6</button>
            <button type="button" className={"aa-seg-btn" + (weighted ? " is-active" : "")} onClick={() => setWeighted(true)}>Weighted (2d6 + 1d6)</button>
          </div>
        </label>
      </div>

      <table className="asg-matrix" style={{maxWidth:380}}>
        <tbody>
          {ASG.TABLE_ROLL.map((row, r) => (
            <tr key={r}>
              <td className="corner">{r+1}</td>
              {row.map((v, c) => (
                <td key={c}
                    className={sets && sets.some(s => s.row === r+1 && s.col === c+1) ? "is-hl" : ""}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="aa-note">
        Roll <em>2d6</em>: one for row, one for column. Look up the score on the table.
        The weighted variant uses 2d6 for the row, biasing toward higher rows (and higher scores).
      </p>

      <div className="aa-cta-row">
        <button type="button" className="aa-btn aa-btn-primary" onClick={roll}>Roll Six Scores</button>
      </div>

      {sets && (
        <div style={{display:"grid", gap:6}}>
          {sets.map((s, i) => (
            <div key={i} style={{display:"flex", gap:12, alignItems:"center"}}>
              <span style={{fontFamily:"'IM Fell English SC', serif", fontSize:11, color:"var(--aa-ink-3)", letterSpacing:".22em", width:34}}>
                {(i+1).toString().padStart(2,"0")}
              </span>
              <span style={{fontSize:12.5, color:"var(--aa-ink-2)"}}>row {s.row} · col {s.col}</span>
              <span style={{marginLeft:"auto", fontFamily:"'Cormorant Garamond', serif", fontWeight:600, fontSize:22, color:"var(--aa-accent)"}}>{s.score}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Method XII — Hand of Fate
// ============================================================
function MethodHandOfFate({ onPool, onAssignment, onMethodNote, generateKey }) {
  const [handSize, setHandSize] = React.useState(9);
  const [hand, setHand] = React.useState(null);           // array of dealt cards
  const [slots, setSlots] = React.useState(() => [[],[],[],[],[],[]]); // each slot holds card indices
  const [picked, setPicked] = React.useState(null);       // index of card currently picked up

  const dealNew = React.useCallback(() => {
    const h = ASG.dealHand(handSize);
    setHand(h);
    setSlots([[],[],[],[],[],[]]);
    setPicked(null);
  }, [handSize]);
  React.useEffect(() => { dealNew(); }, [handSize, generateKey]);

  // ---- Hand evaluation for an arbitrary 1-3 card slot ----
  // Returns { kind, score } or { kind:"—", score: null } for invalid combinations.
  function evaluateSlot(cardIdxs) {
    if (!hand || cardIdxs.length === 0) return { kind: "empty", score: null };
    const cs = cardIdxs.map(i => hand[i]);
    if (cs.length === 1) return { kind: "High Card", score: cs[0].value };
    if (cs.length === 2) {
      if (cs[0].value === cs[1].value) return { kind: "Pair", score: 14 };
      return { kind: "incomplete", score: null };
    }
    // 3 cards
    const sameSuit = cs.every(c => c.suit === cs[0].suit);
    const vals = cs.map(c => c.value).sort((a,b) => a-b);
    const isRun = (vals[2] - vals[0] === 2 && new Set(vals).size === 3) ||
                  (vals.includes(14) && vals.includes(2) && vals.includes(3));
    const sameRank = cs.every(c => c.value === cs[0].value);
    if (sameSuit && isRun) return { kind: "Straight Flush", score: 18 };
    if (sameRank)          return { kind: "Three of a Kind", score: 17 };
    if (isRun)             return { kind: "Straight", score: 16 };
    if (sameSuit)          return { kind: "Flush", score: 15 };
    return { kind: "invalid", score: null };
  }

  // ---- Manipulation ----
  const removeFromAny = (sls, idx) => sls.map(s => s.filter(i => i !== idx));
  const onClickCard = (idx) => {
    if (picked === idx) {
      // toggle off — return to pool
      setSlots(s => removeFromAny(s, idx));
      setPicked(null);
      return;
    }
    setPicked(idx);
  };
  const placeIn = (slot) => {
    if (picked == null) return;
    const slotHasIt = slots[slot].includes(picked);
    if (slots[slot].length >= 3 && !slotHasIt) return;
    let next = removeFromAny(slots, picked);
    if (!slotHasIt) next = next.map((s, i) => i === slot ? s.concat([picked]) : s);
    setSlots(next);
    setPicked(null);
  };
  const sendToPool = () => {
    if (picked == null) return;
    setSlots(s => removeFromAny(s, picked));
    setPicked(null);
  };
  const clearSlot = (slot) => { setSlots(s => s.map((x, i) => i === slot ? [] : x)); setPicked(null); };
  const clearAll = () => { setSlots([[],[],[],[],[],[]]); setPicked(null); };

  const autoBuild = () => {
    if (!hand) return;
    const result = ASG.buildBestHands(hand);
    // Translate result.hands (lists of Card objects) into indices into `hand`.
    // We greedily match cards back to indices (cards are unique by rank+suit).
    const used = new Set();
    const indexOf = (card) => {
      for (let i = 0; i < hand.length; i++) {
        if (used.has(i)) continue;
        if (hand[i].rank === card.rank && hand[i].suit === card.suit) {
          used.add(i); return i;
        }
      }
      return -1;
    };
    const next = result.hands.map(h => h.cards.map(indexOf).filter(i => i >= 0)).slice(0, 6);
    while (next.length < 6) next.push([]);
    setSlots(next);
    setPicked(null);
  };

  // Used indices = anything placed in a slot
  const used = new Set(slots.flat());

  // Compute pool of completed ability scores and push up.
  React.useEffect(() => {
    if (!hand) return;
    const evals = slots.map(s => evaluateSlot(s));
    const allComplete = evals.every(e => e.score != null);
    if (allComplete) {
      onPool(evals.map(e => ({ id: uid(), value: e.score, detail: e.kind })));
      onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    } else {
      onPool([]);
      onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    }
    onMethodNote(`Hand of Fate · ${handSize}-card draw${allComplete ? "" : ` · ${evals.filter(e => e.score != null).length}/6 hands built`}`);
  }, [slots, hand]);

  return (
    <div className="asg-method-body">
      <div className="aa-field-row">
        <label className="aa-field">
          <span className="aa-field-label">Hand Size</span>
          <div className="aa-seg">
            {[9, 11, 13].map(n => (
              <button key={n} type="button"
                className={"aa-seg-btn" + (handSize === n ? " is-active" : "")}
                onClick={() => setHandSize(n)}>
                {n} cards
              </button>
            ))}
          </div>
        </label>
        <div className="aa-field">
          <span className="aa-field-label">Actions</span>
          <div className="aa-seg">
            <button type="button" className="aa-seg-btn" onClick={dealNew}>Deal Again</button>
            <button type="button" className="aa-seg-btn" onClick={autoBuild}>Auto-Build Best</button>
            <button type="button" className="aa-seg-btn" onClick={clearAll}>Clear Hands</button>
          </div>
        </div>
      </div>

      <p className="aa-note">
        <strong>Build six hands.</strong> Deal <em>{handSize}</em> cards, then form up to six
        ability hands. Click a card to pick it up, click a slot to place it.
        <em> Straight Flush = 18</em>, <em>Three of a Kind = 17</em>, <em>Straight = 16</em>,
        <em> Flush = 15</em>, <em>Pair = 14</em>; a single card scores its face value
        (Ace = 14, King = 13, Queen = 12, Jack = 11).
      </p>

      {hand && (
        <>
          <div className="asg-pool-head">
            <span>Drawn cards — {handSize} total · {hand.length - used.size} unplaced</span>
            <span className="asg-pool-hint">click a card · then a slot</span>
          </div>
          <div className="asg-card-pool" onClick={(e) => { if (e.target === e.currentTarget) sendToPool(); }}>
            {hand.map((c, i) => {
              const isUsed = used.has(i);
              return (
                <button key={i} type="button"
                  className={"asg-card-btn" + (isUsed ? " is-used" : "") + (picked === i ? " is-selected" : "")}
                  onClick={() => onClickCard(i)}
                  disabled={isUsed}>
                  <Card card={c} />
                </button>
              );
            })}
          </div>

          <div className="asg-handlist">
            {slots.map((s, i) => {
              const ev = evaluateSlot(s);
              const empty = s.length === 0;
              const canTarget = picked != null && (s.includes(picked) || s.length < 3);
              return (
                <div key={i}
                  className={"asg-handlist-item asg-handslot" + (canTarget ? " is-target" : "") + (ev.score != null ? " is-good" : (empty ? " is-empty" : " is-bad"))}
                  onClick={() => placeIn(i)}>
                  <span className="asg-handlist-score">
                    {ev.score != null ? ev.score : (empty ? "·" : "—")}
                  </span>
                  <div className="asg-handlist-kind">
                    Hand {i+1}{empty ? "" : " · " + (
                      ev.kind === "incomplete" ? "needs 1 more" :
                      ev.kind === "invalid"    ? "invalid combo" :
                      ev.kind
                    )}
                  </div>
                  <div className="asg-handlist-cards">
                    {s.map(idx => (
                      <button key={idx} className={"asg-card-btn small" + (picked === idx ? " is-selected" : "")}
                        onClick={(e) => { e.stopPropagation(); onClickCard(idx); }}>
                        <Card card={hand[idx]} small />
                      </button>
                    ))}
                    {Array.from({length: 3 - s.length}).map((_, k) => (
                      <span key={"e"+k} className="asg-card-slot-empty">·</span>
                    ))}
                  </div>
                  {!empty && (
                    <button className="partclear" onClick={(e) => { e.stopPropagation(); clearSlot(i); }}>clear</button>
                  )}
                </div>
              );
            })}
          </div>

          {hand.length - used.size > 0 && slots.some(s => s.length === 0) && (
            <p className="aa-note" style={{marginTop: 4}}>
              <em>Tip.</em> Each hand can hold 1–3 cards. Try <em>Auto-Build Best</em> for a
              starting partition, then re-arrange to taste.
            </p>
          )}
        </>
      )}
    </div>
  );
}
function Card({ card, small, leftover }) {
  const suitClass = card.suit === "♥" ? "suit-h" :
                    card.suit === "♦" ? "suit-d" :
                    card.suit === "♠" ? "suit-s" : "suit-c";
  return (
    <div className={"asg-card " + suitClass + (leftover ? " is-leftover" : "")}>
      <span className="asg-card-rank">{card.rank}</span>
      <span className="asg-card-suit">{card.suit}</span>
    </div>
  );
}

// ============================================================
// Method XIII — d20
// ============================================================
function MethodD20({ onPool, onAssignment, onMethodNote, generateKey }) {
  const [variant, setVariant] = React.useState("inorder"); // inorder | rerolllow | bestoftwo | assign
  const [sets, setSets] = React.useState(null);

  const roll = React.useCallback(() => {
    if (variant === "bestoftwo") {
      const A = ASG.genMethodXIII(false);
      const B = ASG.genMethodXIII(false);
      const sa = A.reduce((s,x) => s+x.score, 0);
      const sb = B.reduce((s,x) => s+x.score, 0);
      setSets(sa >= sb ? A : B);
    } else {
      setSets(ASG.genMethodXIII(variant === "rerolllow"));
    }
  }, [variant]);
  React.useEffect(() => { roll(); }, [variant, generateKey]);

  React.useEffect(() => {
    if (!sets) return;
    if (variant === "assign") {
      onPool(sets.map(s => ({ id: uid(), value: s.score, detail: `d20 ${s.rolls.length>1 ? "(reroll)" : ""}` })));
      onAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    } else {
      onPool([]);
      onAssignment(Object.fromEntries(ABILS.map((a, i) => [a, sets[i].score])));
    }
    onMethodNote(`d20 · ${({inorder:"in order", rerolllow:"reroll 1s and 2s", bestoftwo:"best of two arrays", assign:"assign as you wish"})[variant]}`);
  }, [sets, variant]);

  return (
    <div className="asg-method-body">
      <div className="aa-field">
        <span className="aa-field-label">Variant</span>
        <div className="aa-seg">
          <button type="button" className={"aa-seg-btn" + (variant==="inorder" ? " is-active" : "")} onClick={() => setVariant("inorder")}>In Order</button>
          <button type="button" className={"aa-seg-btn" + (variant==="rerolllow" ? " is-active" : "")} onClick={() => setVariant("rerolllow")}>Reroll 1–2</button>
          <button type="button" className={"aa-seg-btn" + (variant==="bestoftwo" ? " is-active" : "")} onClick={() => setVariant("bestoftwo")}>Best of Two</button>
          <button type="button" className={"aa-seg-btn" + (variant==="assign" ? " is-active" : "")} onClick={() => setVariant("assign")}>Assign</button>
        </div>
      </div>

      <p className="aa-note aa-note-warn">
        <strong>Maximum chaos.</strong> One d20 per ability. Flat distribution: as likely to roll a 1
        as a 20. Expect wildly uneven characters; party balance is not guaranteed.
      </p>

      <div className="aa-cta-row">
        <button type="button" className="aa-btn aa-btn-primary" onClick={roll}>Roll d20 × 6</button>
      </div>

      {sets && (
        <div style={{display:"grid", gap:6}}>
          {sets.map((s, i) => (
            <div key={i} style={{display:"flex", gap:12, alignItems:"center"}}>
              <span style={{fontFamily:"'IM Fell English SC', serif", fontSize:11, color:"var(--aa-ink-3)", letterSpacing:".22em", width:40}}>
                {variant === "inorder" || variant === "bestoftwo" || variant === "rerolllow"
                  ? SHORT[ABILS[i]]
                  : (i+1).toString().padStart(2,"0")}
              </span>
              <DiceRow dice={s.rolls.map(r => r)} keep={[s.rolls.length-1]} drop={s.rolls.length > 1 ? [0] : []} />
              <span style={{marginLeft:"auto", fontFamily:"'Cormorant Garamond', serif", fontWeight:600, fontSize:22, color:"var(--aa-accent)"}}>{s.score}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Export to window
// ============================================================
Object.assign(window, {
  MethodPointBuy, MethodNonIncPB,
  MethodStandardArray, MethodMatrix,
  MethodDice, MethodDicePool,
  MethodTargeted, MethodRolemaster,
  MethodDicePB, MethodTableRoll,
  MethodHandOfFate, MethodD20,
  DiceRow, Card, uid
});
