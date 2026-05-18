/* Ability Score Generator — main app
 * Shell, method picker, stage with live ability array, roster.
 */
const { useState, useEffect, useRef, useCallback, useMemo } = React;
const ASG = window.AbilityScoreGen;
const ABILS = ASG.ABILITIES;
const SHORT = ASG.ABILITY_SHORT;

const METHODS = [
  { id: "I",    num: "I",    title: "Point Buy" },
  { id: "II",   num: "II",   title: "Standard Array" },
  { id: "III",  num: "III",  title: "Matrix Array" },
  { id: "IV",   num: "IV",   title: "Non-Incremental" },
  { id: "V",    num: "V",    title: "3d6" },
  { id: "VI",   num: "VI",   title: "4d6 Drop Lowest" },
  { id: "VII",  num: "VII",  title: "Dice Pool" },
  { id: "VIII", num: "VIII", title: "Targeted" },
  { id: "IX",   num: "IX",   title: "Rolemaster" },
  { id: "X",    num: "X",    title: "Dice Point Buy" },
  { id: "XI",   num: "XI",   title: "Table Roll" },
  { id: "XII",  num: "XII",  title: "Hand of Fate" },
  { id: "XIII", num: "XIII", title: "d20" }
];

function Logo() {
  return (
    <a href="https://www.patreon.com/DungeonBrew" target="_blank" rel="noreferrer"
       className="aa-logo" aria-label="Dungeon Brew — Patreon">
      <img src="assets/logo.png" alt="Dungeon Brew" width="44" height="44" />
    </a>
  );
}

// ============================================================
// AbilityArray — the live 6-score stage
// ============================================================
function AbilityArray({ assignment, assignmentEx, selectedPoolValue, onAssign, onClearSlot }) {
  // assignmentEx: optional {ab: {score, max}}
  return (
    <div className="asg-array">
      {ABILS.map(a => {
        const ex = assignmentEx && assignmentEx[a];
        const score = ex ? ex.score : assignment[a];
        const max = ex ? ex.max : null;
        const empty = score == null;
        const mod = empty ? null : ASG.modifier(score);
        return (
          <div key={a}
               className={"asg-ab" + (selectedPoolValue != null && empty ? " is-drop" : "") + (!empty ? " is-target" : "")}
               onClick={() => selectedPoolValue != null && empty && onAssign(a)}
               style={{cursor: selectedPoolValue != null && empty ? "pointer" : "default"}}>
            <div className="asg-ab-label">{SHORT[a]}</div>
            <div className={"asg-ab-score" + (empty ? " is-empty" : "")}>
              {empty ? "—" : score}
              {max != null && !empty && (
                <span style={{fontSize:13, color:"var(--aa-ink-3)", fontWeight:400, marginLeft:4}}>/ {max}</span>
              )}
            </div>
            <div className="asg-ab-mod">{empty ? "—" : ASG.sgn(mod)}</div>
            {!empty && onClearSlot && (
              <button className="asg-ab-clear" onClick={(e) => { e.stopPropagation(); onClearSlot(a); }} title="Clear">×</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

function StageReadout({ scores, hasMax }) {
  const filled = scores.filter(s => s != null);
  const total = filled.reduce((s, x) => s + x, 0);
  const pbe   = filled.length === 6 ? ASG.pbeOfArray(filled) : null;
  const tier  = pbe != null ? ASG.tierOf(pbe) : null;
  return (
    <div className="asg-readout">
      <div className="asg-readout-cell">
        <div className="asg-readout-k">Sum</div>
        <div className="asg-readout-v">{filled.length === 6 ? total : `${total} / ?`}</div>
      </div>
      <div className="asg-readout-cell">
        <div className="asg-readout-k">PBE</div>
        <div className="asg-readout-v">{pbe != null ? pbe : "—"}</div>
      </div>
      <div className="asg-readout-cell">
        <div className="asg-readout-k">Tier</div>
        <div className="asg-readout-v">
          {tier ? <span className={"asg-tier-pill asg-tier-pill--" + tier.id}>{tier.label}</span> : "—"}
        </div>
      </div>
      <div className="asg-readout-cell">
        <div className="asg-readout-k">Status</div>
        <div className="asg-readout-v" style={{fontSize:13, fontFamily:"'EB Garamond', serif", fontStyle:"italic", color: filled.length === 6 ? "var(--aa-ink-2)" : "var(--aa-ink-3)"}}>
          {filled.length === 6 ? "Complete" : `${filled.length}/6 placed`}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Pool — selectable list of available scores
// ============================================================
function Pool({ items, used, selectedId, onSelect }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="asg-pool">
      <div className="asg-pool-head">
        <span>Available scores ({items.filter(it => !used.has(it.id)).length}/{items.length})</span>
        <span className="asg-pool-hint">click a chip, then click an ability above</span>
      </div>
      <div className="asg-pool-list">
        {items.map(it => (
          <button key={it.id} type="button"
            className={"asg-pool-chip" + (used.has(it.id) ? " is-used" : "") + (selectedId === it.id ? " is-selected" : "")}
            disabled={used.has(it.id)}
            onClick={() => onSelect(it.id)}>
            <span className="asg-pool-chip-val">{it.value}</span>
            <span className="asg-pool-chip-detail">{it.detail || ""}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Roster — saved characters (paper sheet on right)
// ============================================================
function CharacterRoster({ chars, onRemove, onPrint }) {
  return (
    <section className="aa-menu">
      <div className="aa-menu-toolbar">
        <h3 className="aa-h3">The Roster <span className="aa-count">{chars.length}</span></h3>
        <div className="aa-menu-actions">
          <button type="button" className="aa-btn aa-btn-ghost" onClick={onPrint} disabled={!chars.length}>Print Sheet</button>
        </div>
      </div>
      <div className="aa-menu-scroll">
        {!chars.length ? (
          <div className="aa-empty">
            <div className="aa-empty-mark">❦</div>
            <p>No characters saved yet.</p>
            <p className="aa-empty-sub">Generate an array and "Save to Roster" to keep it.</p>
          </div>
        ) : (
          <ol className="aa-menu-list">
            {chars.map((c, i) => (
              <li key={c.id} className="aa-menu-item">
                <div className="aa-menu-item-head">
                  <span className="aa-menu-num">{String(i+1).padStart(2,"0")}</span>
                  <div className="aa-menu-title">
                    <h4>{c.name}</h4>
                    <span className="aa-menu-type">
                      {c.methodLabel}{c.tier ? ` · ${c.tier}` : ""}{c.pbe != null ? ` · PBE ${c.pbe}` : ""}
                    </span>
                  </div>
                  <button type="button" className="aa-x" onClick={() => onRemove(c.id)} aria-label="Remove">×</button>
                </div>
                <div className="asg-roster-array">
                  {ABILS.map(a => {
                    const ex = c.maxes && c.maxes[a];
                    const v = c.scores[a];
                    const m = v != null ? ASG.modifier(v) : null;
                    return (
                      <div key={a} className={"asg-roster-ab" + (ex ? " has-max" : "")} data-max={ex || ""}>
                        <div className="lbl">{SHORT[a]}</div>
                        <div className="val">{v != null ? v : "—"}</div>
                        <div className="mod">{m != null ? ASG.sgn(m) : ""}</div>
                      </div>
                    );
                  })}
                </div>
                {c.note && (
                  <div className="asg-roster-meta">
                    <span><em>Method</em> {c.note}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

// ============================================================
// Print
// ============================================================
function printRoster(chars, partyName) {
  const w = window.open("", "_blank", "width=900,height=1100");
  if (!w) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));
  const items = chars.map((c, i) => `
    <li class="item">
      <div class="row">
        <h3>${esc(c.name)}</h3>
        <span class="dots"></span>
        <span class="type">${esc(c.methodLabel)}${c.tier ? " · " + esc(c.tier) : ""}${c.pbe != null ? " · PBE " + c.pbe : ""}</span>
      </div>
      <table class="abil"><tbody>
        <tr>${ABILS.map(a => `<th>${SHORT[a]}</th>`).join("")}</tr>
        <tr>${ABILS.map(a => `<td class="score">${c.scores[a] ?? "—"}${c.maxes && c.maxes[a] ? "<small>/"+c.maxes[a]+"</small>" : ""}</td>`).join("")}</tr>
        <tr>${ABILS.map(a => `<td class="mod">${c.scores[a] != null ? ASG.sgn(ASG.modifier(c.scores[a])) : "—"}</td>`).join("")}</tr>
      </tbody></table>
      ${c.note ? `<p class="note"><em>Method.</em> ${esc(c.note)}</p>` : ""}
    </li>`).join("");

  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(partyName)} — Roster</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=IM+Fell+English+SC&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
  <style>
    @page { size: Letter; margin: 0.6in; }
    html,body { background:#f6efe0; color:#1c1611; font-family:'EB Garamond', Georgia, serif; }
    body { padding:0; margin:0; }
    .sheet { padding: 28px 32px; max-width: 720px; margin: 0 auto; }
    header { text-align:center; border-bottom:2px double #3b2f1d; padding-bottom:14px; margin-bottom:22px; }
    header .kicker { font-family:'IM Fell English SC', serif; letter-spacing:.24em; font-size:11px; color:#6b4f2c; }
    header h1 { font-family:'Cormorant Garamond', serif; font-weight:600; font-size:42px; letter-spacing:.02em; margin:4px 0 2px; }
    header .sub { font-style:italic; color:#4a382a; font-size:13px; }
    ol { list-style:none; padding:0; margin:0; }
    .item { break-inside: avoid; margin: 0 0 22px; padding-bottom: 14px; border-bottom: 1px dotted #b2905c; }
    .item:last-child { border-bottom:none; }
    .row { display:flex; align-items:baseline; gap:10px; }
    .row h3 { font-family:'Cormorant Garamond', serif; font-weight:600; font-size:22px; margin:0; }
    .row .type { font-family:'IM Fell English SC', serif; font-size:11px; letter-spacing:.18em; color:#6b4f2c; white-space:nowrap; }
    .row .dots { flex:1; border-bottom: 1px dotted #9b7a4a; transform: translateY(-4px); }
    table.abil { width:100%; border-collapse:collapse; margin-top:8px; font-variant-numeric: tabular-nums; }
    table.abil th { font-family:'IM Fell English SC', serif; font-weight:400; font-size:11px; letter-spacing:.22em; color:#6b4f2c; text-align:center; padding:3px 0; border-bottom:1px solid #b2905c; }
    table.abil td { text-align:center; padding:3px 0; font-family:'Cormorant Garamond', serif; }
    table.abil td.score { font-weight:600; font-size:20px; color:#1c1611; }
    table.abil td.score small { font-size:12px; color:#6b4f2c; font-weight:400; }
    table.abil td.mod { color:#6b4f2c; font-size:13px; }
    .note { font-size:12px; color:#4a382a; margin:6px 0 0; font-style:italic; }
    footer { text-align:center; margin-top: 24px; font-family:'IM Fell English SC', serif; letter-spacing:.22em; font-size:10px; color:#6b4f2c; }
    .orn { text-align:center; margin: 6px 0 0; color:#6b4f2c; font-size:18px; letter-spacing:.6em; }
    @media print { .noprint { display:none; } }
    .noprint { position: fixed; top: 14px; right: 14px; }
    .noprint button { padding:8px 14px; font: 14px/1 'EB Garamond', serif; background:#1c1611; color:#f6efe0; border:none; border-radius:3px; cursor:pointer; }
  </style></head><body>
    <div class="noprint"><button onclick="window.print()">Print</button></div>
    <div class="sheet">
      <header>
        <div class="kicker">— Ability Score Options —</div>
        <h1>${esc(partyName)}</h1>
        <div class="sub">Characters of the Roster, as they began</div>
        <div class="orn">❦ · ❦ · ❦</div>
      </header>
      <ol>${items}</ol>
      <footer>— A Dungeon Brew tool —</footer>
    </div>
    <script>setTimeout(() => window.print(), 350);<\/script>
  </body></html>`);
  w.document.close();
}

// ============================================================
// App
// ============================================================
function App() {
  const [method, setMethod] = useState(() => localStorage.getItem("asg.method") || "VI");
  const [partyName, setPartyName] = useState(() => localStorage.getItem("asg.party") || "The Session Zero Party");
  const [charName, setCharName]   = useState("Unnamed Adventurer");

  // Live array state — methods write here.
  const [assignment, setAssignment] = useState(() => Object.fromEntries(ABILS.map(a => [a, null])));
  const [assignmentEx, setAssignmentEx] = useState(null); // {ab: {score, max}} for Rolemaster
  const [pool, setPool] = useState([]);
  const [methodNote, setMethodNote] = useState("");
  const [selectedPoolId, setSelectedPoolId] = useState(null);

  const [chars, setChars] = useState(() => {
    try { return JSON.parse(localStorage.getItem("asg.chars") || "[]"); } catch { return []; }
  });

  // Bump generateKey to force re-roll inside method components.
  const [genKey, setGenKey] = useState(0);
  const bump = () => setGenKey(k => k + 1);

  // Persist
  useEffect(() => { localStorage.setItem("asg.method", method); }, [method]);
  useEffect(() => { localStorage.setItem("asg.party", partyName); }, [partyName]);
  useEffect(() => { localStorage.setItem("asg.chars", JSON.stringify(chars)); }, [chars]);

  // Reset is performed synchronously in switchMethod() below so that
  // the new method controller's mount-time effects (which call onAssignment / onPool
  // with initial values) are not clobbered by a later async reset.
  const switchMethod = (m) => {
    if (m === method) return;
    setAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    setAssignmentEx(null);
    setPool([]);
    setSelectedPoolId(null);
    setUsedIds(new Set());
    setMethodNote("");
    setMethod(m);
  };

  // Used pool ids = pool items whose value has been assigned somewhere.
  // We need to track per-id usage, not per-value, since the same value can repeat.
  // Approach: pool items have id; assignments store {ab: poolId} when from pool.
  // Simpler: track used ids in a separate state, updated when user clicks an empty slot
  // while a pool chip is selected.
  const [usedIds, setUsedIds] = useState(new Set());

  // When pool changes (method-generated re-roll), reset used ids and clear assignments
  // of *pool-sourced* slots. Pure scoring methods (Point Buy etc.) keep their direct assignment.
  useEffect(() => {
    setUsedIds(new Set());
    setSelectedPoolId(null);
    // If the method produces a pool, blank out assignments to start fresh.
    if (pool && pool.length > 0) {
      setAssignment(Object.fromEntries(ABILS.map(a => [a, null])));
    }
  }, [pool]);

  const onAssignSlot = (ab) => {
    if (selectedPoolId == null) return;
    const it = pool.find(p => p.id === selectedPoolId);
    if (!it) return;
    setAssignment(prev => ({ ...prev, [ab]: it.value }));
    if (it.max != null) {
      // Rolemaster free-assign: stash max in assignmentEx
      setAssignmentEx(prev => ({ ...(prev || Object.fromEntries(ABILS.map(a => [a, null]))), [ab]: { score: it.value, max: it.max } }));
    }
    setUsedIds(prev => { const n = new Set(prev); n.add(selectedPoolId); return n; });
    setSelectedPoolId(null);
  };

  const onClearSlot = (ab) => {
    // Find which pool id was placed here (if any) by value-matching the most-recently-used id of that value
    const placedVal = assignment[ab];
    setAssignment(prev => ({ ...prev, [ab]: null }));
    if (assignmentEx) setAssignmentEx(prev => ({ ...prev, [ab]: null }));
    // Free up the pool id with the matching value (first one)
    if (pool && pool.length) {
      const candidate = [...usedIds].map(id => pool.find(p => p.id === id)).filter(p => p && p.value === placedVal);
      if (candidate.length) {
        const freeId = candidate[0].id;
        setUsedIds(prev => { const n = new Set(prev); n.delete(freeId); return n; });
      }
    }
  };

  // Active method's controller. Each handler is stable across renders.
  const ctlProps = {
    onAssignment: setAssignment,
    onAssignmentEx: setAssignmentEx,
    onPool: setPool,
    onMethodNote: setMethodNote,
    generateKey: genKey
  };

  let body = null;
  switch (method) {
    case "I":    body = <MethodPointBuy {...ctlProps} />; break;
    case "II":   body = <MethodStandardArray {...ctlProps} />; break;
    case "III":  body = <MethodMatrix {...ctlProps} />; break;
    case "IV":   body = <MethodNonIncPB {...ctlProps} />; break;
    case "V":    body = <MethodDice kind="3d6" {...ctlProps} />; break;
    case "VI":   body = <MethodDice kind="4d6" {...ctlProps} />; break;
    case "VII":  body = <MethodDicePool {...ctlProps} />; break;
    case "VIII": body = <MethodTargeted {...ctlProps} />; break;
    case "IX":   body = <MethodRolemaster {...ctlProps} />; break;
    case "X":    body = <MethodDicePB {...ctlProps} />; break;
    case "XI":   body = <MethodTableRoll {...ctlProps} />; break;
    case "XII":  body = <MethodHandOfFate {...ctlProps} />; break;
    case "XIII": body = <MethodD20 {...ctlProps} />; break;
    default: body = null;
  }

  const activeMethod = METHODS.find(m => m.id === method) || METHODS[0];

  const scoresArr = ABILS.map(a => assignment[a]);
  const filledScores = scoresArr.filter(s => s != null);
  const pbe  = filledScores.length === 6 ? ASG.pbeOfArray(filledScores) : null;
  const tier = pbe != null ? ASG.tierOf(pbe) : null;

  const saveChar = () => {
    if (filledScores.length !== 6) return;
    const maxes = {};
    let hasMax = false;
    if (assignmentEx) {
      for (const a of ABILS) {
        if (assignmentEx[a] && assignmentEx[a].max != null) { maxes[a] = assignmentEx[a].max; hasMax = true; }
      }
    }
    const newC = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now())+Math.random(),
      name: charName || "Unnamed Adventurer",
      methodLabel: `Method ${activeMethod.num} — ${activeMethod.title}`,
      note: methodNote,
      scores: { ...assignment },
      maxes: hasMax ? maxes : null,
      pbe,
      tier: tier ? tier.label : null,
      createdAt: Date.now()
    };
    setChars(prev => [newC, ...prev]);
  };

  const downloadTxt = () => {
    if (!chars.length) return;
    const body = chars.map(c => {
      const line = ABILS.map(a => `${SHORT[a]} ${c.scores[a]}${c.maxes && c.maxes[a] ? "/"+c.maxes[a] : ""} (${ASG.sgn(ASG.modifier(c.scores[a]))})`).join("  ");
      return `${c.name}\n${"-".repeat(c.name.length)}\n${c.methodLabel}${c.tier ? " · " + c.tier : ""}${c.pbe != null ? " · PBE " + c.pbe : ""}\n${line}\n${c.note ? c.note : ""}`;
    }).join("\n\n");
    const blob = new Blob([`${partyName}\n\n${body}\n`], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${partyName.replace(/\s+/g, "_")}_roster.txt`;
    a.click();
  };

  return (
    <div className="aa-root">
      <header className="aa-topbar">
        <Logo />
        <div className="aa-wordmark">
          <div className="aa-wm-kicker">— a Dungeon Brew tool —</div>
          <h1 className="aa-wm-title">Ability Score Generator</h1>
          <div className="aa-wm-sub">Thirteen methods for Session Zero</div>
        </div>
        <div></div>
      </header>

      <main className="aa-grid">
        <section className="aa-left">
          <div className="aa-panel">
            <div className="aa-panel-head">
              <div className="aa-rule" /><span>Method</span><div className="aa-rule" />
            </div>

            <div className="aa-method-grid">
              {METHODS.map(m => (
                <button key={m.id} type="button"
                  className={"aa-method-tile" + (method === m.id ? " is-active" : "")}
                  onClick={() => switchMethod(m.id)}>
                  <span className="num">METHOD {m.num}</span>
                  <span className="ttl">{m.title}</span>
                </button>
              ))}
            </div>

            <div className="aa-panel-head" style={{marginTop:4}}>
              <div className="aa-rule" /><span>Method {activeMethod.num} — {activeMethod.title}</span><div className="aa-rule" />
            </div>

            {body}
          </div>

          <div className="aa-stage">
            <div className="aa-stage-head">
              <div className="aa-stage-kicker">— Your Array —</div>
              <h2 className="aa-stage-title">Method {activeMethod.num}: {activeMethod.title}</h2>
              {methodNote && <div className="aa-stage-sub">{methodNote}</div>}
            </div>

            <AbilityArray
              assignment={assignment}
              assignmentEx={assignmentEx}
              selectedPoolValue={selectedPoolId != null ? (pool.find(p => p.id === selectedPoolId) || {}).value : null}
              onAssign={onAssignSlot}
              onClearSlot={onClearSlot} />

            <Pool items={pool} used={usedIds} selectedId={selectedPoolId} onSelect={setSelectedPoolId} />

            <StageReadout scores={scoresArr} />

            <div className="asg-charname-row">
              <label>Character Name</label>
              <input className="asg-charname-input" value={charName} onChange={e => setCharName(e.target.value)} />
              <button type="button" className="aa-btn aa-btn-primary"
                      disabled={filledScores.length !== 6}
                      onClick={saveChar}>Save to Roster</button>
            </div>
          </div>
        </section>

        <section className="aa-right">
          <div className="aa-tavern-name">
            <span className="aa-tavern-label">Party</span>
            <input className="aa-tavern-input" value={partyName} onChange={e => setPartyName(e.target.value)} />
          </div>
          <CharacterRoster chars={chars} onRemove={(id) => setChars(prev => prev.filter(c => c.id !== id))} onPrint={() => printRoster(chars, partyName)} />
          <div className="aa-right-actions">
            <button type="button" className="aa-btn aa-btn-ghost" onClick={downloadTxt} disabled={!chars.length}>Download .txt</button>
            <button type="button" className="aa-btn aa-btn-ghost aa-danger" onClick={() => setChars([])} disabled={!chars.length}>Clear Roster</button>
          </div>
        </section>
      </main>

      <footer className="aa-footer">
        <span>Ability Score Generator · Dungeon Brew</span>
        <span className="aa-orn">❦</span>
        <span>The dice — or the budget — set the tone of every campaign</span>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
