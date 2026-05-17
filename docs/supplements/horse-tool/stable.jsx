/* Hoof & Rein — Stable UI.
 * Controls panel → mount stage → stable roster → Renowned Mounts drawer.
 */

const { useState, useEffect, useRef, useCallback } = React;

function Logo({ size = 44 }) {
  return (
    <a href="https://www.patreon.com/DungeonBrew" target="_blank" rel="noreferrer"
       className="aa-logo" aria-label="Dungeon Brew — Patreon">
      <img src="assets/logo.png" alt="Dungeon Brew" width={size} height={size} />
    </a>
  );
}

function Field({ label, children }) {
  return (
    <label className="aa-field">
      <span className="aa-field-label">{label}</span>
      {children}
    </label>
  );
}

function TraitList({ traits, tricks }) {
  if ((!traits || !traits.length) && (!tricks || !tricks.length)) {
    return <em className="cc-no-traits">No notable traits rolled.</em>;
  }
  return (
    <ul className="cc-traits">
      {traits && traits.map((t, i) => (
        <li key={"t" + i} className={"cc-trait cc-trait--" + t.kind}>
          <span className="cc-trait-tag">{t.kind}</span>
          <span className="cc-trait-key">{t.key}{t.trainable && <sup className="cc-trainable-mark" title="Trainable">T</sup>}</span>
          <span className="cc-trait-text">{t.text}</span>
        </li>
      ))}
      {tricks && tricks.map((t, i) => (
        <li key={"k" + i} className="cc-trait cc-trait--trick">
          <span className="cc-trait-tag">trick</span>
          <span className="cc-trait-key">{t.key}<sup className="cc-trainable-mark" title="Trainable">T</sup></span>
          <span className="cc-trait-text">{t.text}</span>
        </li>
      ))}
    </ul>
  );
}

function MountCard({ mount }) {
  if (!mount) return null;
  let block = mount.statBlock;
  let modLog = mount.modifierLog;
  if (!block && window.HoofAndRein.rebuildStatBlock) {
    const rebuilt = window.HoofAndRein.rebuildStatBlock(mount);
    if (rebuilt) { block = rebuilt.block; modLog = rebuilt.log; }
  }
  return (
    <article className="aa-drink">
      <header className="aa-drink-head">
        <div className="aa-drink-kicker">— From the Stables —</div>
        <h2 className="aa-drink-name">{mount.name}</h2>
        <div className="aa-drink-type">
          <span>{mount.type}</span>
          <span className="aa-drink-quality"> · {mount.gender}, {mount.age}</span>
          {mount.disposition && (
            <span className="aa-drink-quality"> · {mount.disposition}</span>
          )}
        </div>
        {mount.price && (
          <div className="cc-price">
            <span className="cc-price-calc">Base {mount.price.base} gp · {mount.disposition} {mount.price.pctLabel}</span>
            <span className="cc-price-eq">=</span>
            <span className="cc-price-final">{mount.price.final} gp</span>
          </div>
        )}
      </header>
      <dl className="aa-drink-body">
        <div><dt>Appearance</dt><dd>{mount.appearance}</dd></div>
        <div><dt>Traits</dt><dd className="cc-traits-cell"><TraitList traits={mount.traits} tricks={mount.tricks} /></dd></div>
        {block && (
          <div className="cc-stat-row">
            <dt>Stat Block</dt>
            <dd className="cc-stat-cell">
              <details className="cc-stat-disclosure">
                <summary className="cc-stat-summary">
                  <CompactStats block={block} />
                  <span className="cc-stat-toggle">
                    <span className="cc-stat-toggle-open">View full block ▾</span>
                    <span className="cc-stat-toggle-close">Collapse ▴</span>
                  </span>
                </summary>
                <StatBlock block={block} log={modLog} variant="dark" />
              </details>
            </dd>
          </div>
        )}
        {!block && mount.statNote && (
          <div><dt>Stat Block</dt><dd className="cc-notes">{mount.statNote}</dd></div>
        )}
      </dl>
    </article>
  );
}

function RosterSheet({ mounts, onRemove, onPrint }) {
  return (
    <section className="aa-menu">
      <div className="aa-menu-toolbar">
        <h3 className="aa-h3">Stable Roster <span className="aa-count">{mounts.length}</span></h3>
        <div className="aa-menu-actions">
          <button type="button" className="aa-btn aa-btn-ghost" onClick={onPrint} disabled={!mounts.length}>Print Roster</button>
        </div>
      </div>

      <div className="aa-menu-scroll">
        {!mounts.length ? (
          <div className="aa-empty">
            <div className="aa-empty-mark">❦</div>
            <p>No horses on the roster yet.</p>
            <p className="aa-empty-sub">Saddle a mount into the stable, or add a Renowned Mount to begin.</p>
          </div>
        ) : (
          <ol className="aa-menu-list">
            {mounts.map((m, i) => (
              <li key={m.id} className="aa-menu-item">
                <div className="aa-menu-item-head">
                  <span className="aa-menu-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="aa-menu-title">
                    <h4>{m.name}</h4>
                    <span className="aa-menu-type">
                      {m.type} · {m.gender}, {m.age}{m.disposition ? ` · ${m.disposition}` : ""}{m.price ? ` · ${m.price.final} gp` : ""}
                    </span>
                  </div>
                  <button type="button" className="aa-x" aria-label="Remove" onClick={() => onRemove(m.id)}>×</button>
                </div>
                <div className="aa-menu-desc">
                  <p><em>Appearance.</em> {m.appearance}</p>
                  {m.traits && m.traits.length > 0 && (
                    <ul className="cc-roster-traits">
                      {m.traits.map((t, i) => (
                        <li key={i} className={"cc-roster-trait cc-roster-trait--" + t.kind}>
                          <span className="cc-roster-tag">{t.kind}</span> <strong>{t.key}.</strong> {t.text}
                        </li>
                      ))}
                      {m.tricks && m.tricks.map((t, i) => (
                        <li key={"k" + i} className="cc-roster-trait cc-roster-trait--trick">
                          <span className="cc-roster-tag">trick</span> <strong>{t.key}.</strong> {t.text}
                        </li>
                      ))}
                    </ul>
                  )}
                  {(() => {
                    let block = m.statBlock; let log = m.modifierLog;
                    if (!block && window.HoofAndRein.rebuildStatBlock) {
                      const r = window.HoofAndRein.rebuildStatBlock(m);
                      if (r) { block = r.block; log = r.log; }
                    }
                    if (!block) return m.statNote ? <p className="cc-menu-stat"><em>Stat.</em> {m.statNote}</p> : null;
                    return (
                      <details className="cc-stat-disclosure cc-stat-disclosure--paper">
                        <summary className="cc-stat-summary cc-stat-summary--paper">
                          <CompactStats block={block} />
                          <span className="cc-stat-toggle">
                            <span className="cc-stat-toggle-open">View full block ▾</span>
                            <span className="cc-stat-toggle-close">Collapse ▴</span>
                          </span>
                        </summary>
                        <StatBlock block={block} log={log} variant="paper" />
                      </details>
                    );
                  })()}
                  {m.price && (
                    <p className="cc-menu-price"><em>Price.</em> Base {m.price.base} gp · {m.disposition} {m.price.pctLabel} = <strong>{m.price.final} gp</strong></p>
                  )}
                  {m.trainable && m.trainable.length > 0 && (
                    <p className="cc-menu-trainable">
                      <span className="cc-trainable-label cc-trainable-label--paper">Trainable</span>
                      <span>{m.trainable.join(" · ")}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

function RenownedDrawer({ open, onClose, onAdd, alreadyIn }) {
  if (!open) return null;
  const mounts = window.HoofAndRein.RENOWNED_MOUNTS;
  return (
    <div className="aa-drawer-scrim" onClick={onClose}>
      <aside className="aa-drawer" onClick={e => e.stopPropagation()} role="dialog" aria-label="Renowned Mounts">
        <header className="aa-drawer-head">
          <div>
            <div className="aa-drawer-kicker">— Tales of Horseflesh —</div>
            <h2 className="aa-drawer-title">Renowned Mounts</h2>
            <p className="aa-drawer-sub">A dozen mounts whose names outlived their riders. Add any to your roster.</p>
          </div>
          <button type="button" className="aa-x aa-x-big" aria-label="Close" onClick={onClose}>×</button>
        </header>

        <ul className="aa-sig-list">
          {mounts.map(m => {
            const added = alreadyIn.has(m.name);
            return (
              <li key={m.name} className="aa-sig-item">
                <div className="aa-sig-head">
                  <h4>{m.name}</h4>
                  <span className="aa-sig-type">{m.type}, {m.gender}{m.price ? ` · ${m.price.final} gp` : ""}</span>
                </div>
                <p className="aa-sig-custom"><em>{m.age}.</em> {m.disposition}.</p>
                <p className="aa-sig-notes"><em>A.</em> {m.appearance}</p>
                {m.statBlock && (
                  <details className="cc-stat-disclosure cc-stat-disclosure--drawer">
                    <summary className="cc-stat-summary cc-stat-summary--drawer">
                      <CompactStats block={m.statBlock} />
                      <span className="cc-stat-toggle">
                        <span className="cc-stat-toggle-open">View full block ▾</span>
                        <span className="cc-stat-toggle-close">Collapse ▴</span>
                      </span>
                    </summary>
                    <StatBlock block={m.statBlock} log={m.modifierLog} variant="dark" />
                  </details>
                )}
                {!m.statBlock && m.statNote && (
                  <p className="aa-sig-notes"><em>Stat.</em> {m.statNote}</p>
                )}
                {m.traits && m.traits.length > 0 && (
                  <ul className="cc-drawer-traits">
                    {m.traits.map((t, i) => (
                      <li key={i} className={"cc-drawer-trait cc-drawer-trait--" + t.kind}>
                        <span className="cc-drawer-tag">{t.kind}</span> <strong>{t.key}.</strong> {t.text}
                      </li>
                    ))}
                    {m.tricks && m.tricks.map((t, i) => (
                      <li key={"k" + i} className="cc-drawer-trait cc-drawer-trait--trick">
                        <span className="cc-drawer-tag">trick</span> <strong>{t.key}.</strong> {t.text}
                      </li>
                    ))}
                  </ul>
                )}
                {m.trainable && m.trainable.length > 0 && (
                  <div className="cc-trainable">
                    <span className="cc-trainable-label">Trainable</span>
                    <span className="cc-trainable-list">{m.trainable.join(" · ")}</span>
                  </div>
                )}
                <button
                  type="button"
                  className={"aa-btn " + (added ? "aa-btn-ghost" : "aa-btn-secondary")}
                  onClick={() => onAdd(m)}
                  disabled={added}
                >{added ? "On Roster" : "Add to Roster"}</button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}

function abilityRowHTML(block) {
  const aLab = { str:"STR", dex:"DEX", con:"CON", int:"INT", wis:"WIS", cha:"CHA" };
  const sgn = n => (n >= 0 ? "+" + n : "" + n);
  const order = ["str","dex","con","int","wis","cha"];
  const heads = order.map(a => `<th>${aLab[a]}</th>`).join("");
  const scores = order.map(a => `<td>${block.abilities[a]}</td>`).join("");
  const mods = order.map(a => `<td>${sgn(block.abilityMods[a])}</td>`).join("");
  const saves = order.map(a => {
    const save = (block.saves || []).find(s => s.ability === a);
    return `<td>${sgn(save ? save.bonus : block.abilityMods[a])}</td>`;
  }).join("");
  return `<table class="sb-ability">
    <thead><tr>${heads}</tr></thead>
    <tbody>
      <tr class="row-score">${scores}</tr>
      <tr class="row-mod">${mods}</tr>
      <tr class="row-save">${saves}</tr>
    </tbody>
    <tfoot><tr><td colspan="6"><em>Score</em> · <em>Mod</em> · <em>Save</em></td></tr></tfoot>
  </table>`;
}

function statBlockHTML(d) {
  let block = d.statBlock;
  let log = d.modifierLog;
  if (!block && window.HoofAndRein && window.HoofAndRein.rebuildStatBlock) {
    const r = window.HoofAndRein.rebuildStatBlock(d);
    if (r) { block = r.block; log = r.log; }
  }
  if (!block) {
    return `<p class="stat"><em>Stat.</em> ${escape(d.statNote || d.notes || "")}</p>`;
  }
  const sgn = n => (n >= 0 ? "+" + n : "" + n);
  const saves = (block.saves || []).map(s => `${s.ability.toUpperCase()} ${sgn(s.bonus)}`).join(", ");
  const skills = (block.skills || []).map(s => `${escape(s.name)} ${sgn(s.bonus)}`).join(", ");
  const senses = [];
  if (block.senses && block.senses.darkvision) senses.push(`Darkvision ${block.senses.darkvision} ft.`);
  senses.push(`Passive Perception ${block.passivePerception}`);
  const feats = (block.featureBlocks || []).map(f => `<p><strong><em>${escape(f.name)}.</em></strong> ${escape(f.text)}</p>`).join("");
  const atks = (block.attacksRendered || []).map(a => `<p><strong><em>${escape(a.name)}.</em></strong> ${escape(a.text)}</p>`).join("");
  const logRows = (log || []).map(row => `<li><span class="modtrait">${escape(row.trait)}</span> <span class="modchanges">${escape(row.changes.join(" · "))}</span></li>`).join("");

  return `<div class="sb">
    <p class="sb-type"><em>${escape(block.label)} — ${escape(block.size)} ${escape(block.type)}, ${escape(block.alignment)}</em></p>
    <div class="sb-lead">
      <span><strong>AC</strong> ${block.ac}</span>
      <span><strong>Initiative</strong> ${sgn(block.initiative)} (${10 + block.initiative})</span>
      <span><strong>HP</strong> ${block.computedHP} <small>(${escape(block.hd)}${block.bonuses && block.bonuses.hpExtra ? " " + sgn(block.bonuses.hpExtra) : ""})</small></span>
      <span><strong>Speed</strong> ${block.speed} ft.</span>
    </div>
    ${abilityRowHTML(block)}
    <div class="sb-meta">
      ${saves ? `<p><strong>Saves</strong> ${saves}</p>` : ""}
      ${skills ? `<p><strong>Skills</strong> ${skills}</p>` : ""}
      <p><strong>Senses</strong> ${senses.join(", ")}</p>
      <p><strong>Languages</strong> ${escape(block.languages || "—")}</p>
      <p><strong>CR</strong> ${escape(block.cr)} (${block.xp} XP; PB ${sgn(block.pb)})</p>
    </div>
    ${feats ? `<section class="sb-sect"><h5>Traits</h5>${feats}</section>` : ""}
    ${atks ? `<section class="sb-sect"><h5>Actions</h5>${atks}</section>` : ""}
    ${logRows ? `<section class="sb-modlog"><h5>Trait Modifiers</h5><ul>${logRows}</ul></section>` : ""}
  </div>`;
}

function printRoster(mounts, stableName) {
  const win = window.open("", "_blank", "width=900,height=1100");
  if (!win) return;
  const items = mounts.map((d) => {
    const traitLines = (d.traits || []).map(t => `<li><span class="k">[${escape(t.kind)}]</span> <strong>${escape(t.key)}.</strong> ${escape(t.text)}</li>`).join("");
    const trickLines = (d.tricks || []).map(t => `<li><span class="k">[trick]</span> <strong>${escape(t.key)}.</strong> ${escape(t.text)}</li>`).join("");
    return `
    <li class="item">
      <div class="row">
        <h3>${escape(d.name)}</h3>
        <span class="dots"></span>
        <span class="type">${escape(d.type)} · ${escape(d.gender)}, ${escape(d.age)}${d.disposition ? " · " + escape(d.disposition) : ""}</span>
      </div>
      <p class="desc"><em>Appearance.</em> ${escape(d.appearance)}</p>
      ${(traitLines || trickLines) ? `<ul class="traits">${traitLines}${trickLines}</ul>` : ""}
      ${statBlockHTML(d)}
      ${d.trainable && d.trainable.length ? `<p class="trainable"><em>Trainable.</em> ${d.trainable.map(escape).join(" · ")}</p>` : ""}
      ${d.price ? `<p class="price"><em>Price.</em> Base ${d.price.base} gp · ${escape(d.disposition)} ${escape(d.price.pctLabel)} = <strong>${d.price.final} gp</strong></p>` : ""}
    </li>
  `;
  }).join("");

  win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${escape(stableName)} — Roster</title>
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
    .item { break-inside: avoid; margin: 0 0 18px; padding-bottom: 12px; border-bottom: 1px dotted #b2905c; }
    .item:last-child { border-bottom:none; }
    .row { display:flex; align-items:baseline; gap:10px; }
    .row h3 { font-family:'Cormorant Garamond', serif; font-weight:600; font-size:20px; margin:0; }
    .row .type { font-family:'IM Fell English SC', serif; font-size:11px; letter-spacing:.18em; color:#6b4f2c; white-space:nowrap; }
    .row .dots { flex:1; border-bottom: 1px dotted #9b7a4a; transform: translateY(-4px); }
    .desc { margin: 4px 0 0; font-size: 13.5px; line-height: 1.45; color:#2b2117; }
    .traits { list-style: none; margin: 4px 0 0; padding: 0; font-size: 13px; line-height: 1.45; color:#2b2117; }
    .traits li { padding: 2px 0; }
    .traits .k { font-family: 'IM Fell English SC', serif; font-size: 10px; letter-spacing: .14em; color: #6b4f2c; text-transform: uppercase; margin-right: 4px; }
    .stat, .price { margin: 3px 0 0; font-size: 12.5px; line-height: 1.45; color:#4a382a; font-family: 'EB Garamond', serif; }
    .trainable { margin: 3px 0 0; font-size: 11.5px; line-height: 1.45; color:#6b4f2c; font-family: 'IM Fell English SC', serif; letter-spacing:.14em; }
    .trainable em { font-family: 'IM Fell English SC', serif; font-style: normal; color: #3b2f1d; letter-spacing:.2em; }
    .desc em, .stat em { font-style: italic; color: #6b4f2c; font-weight:500; }

    .sb { margin: 8px 0 4px; padding: 10px 12px; border-top: 1px solid #6b4f2c; border-bottom: 1px solid #6b4f2c; background: rgba(155,122,74,.05); break-inside: avoid; }
    .sb p { margin: 0; }
    .sb-type { font-size: 12.5px; color: #4a382a; margin-bottom: 6px !important; }
    .sb-type em { color: #4a382a; font-style: italic; }
    .sb-lead { display: flex; flex-wrap: wrap; column-gap: 14px; row-gap: 2px; font-size: 12.5px; color: #1c1611; padding: 2px 0 6px; border-bottom: 1px dotted #b2905c; margin-bottom: 6px; font-variant-numeric: tabular-nums; }
    .sb-lead strong { font-family: 'IM Fell English SC', serif; font-size: 10px; letter-spacing: .18em; color: #6b4f2c; font-weight: 400; text-transform: uppercase; margin-right: 4px; }
    .sb-lead small { color: #6b4f2c; font-size: 11px; }
    .sb-ability { width: 100%; border-collapse: collapse; margin: 4px 0 6px; font-variant-numeric: tabular-nums; }
    .sb-ability th { font-family: 'IM Fell English SC', serif; font-size: 10px; letter-spacing: .18em; color: #6b4f2c; font-weight: 400; text-align: center; padding: 2px 0; border-bottom: 1px solid #b2905c; }
    .sb-ability td { text-align: center; padding: 1px 0; font-size: 13px; color: #1c1611; }
    .sb-ability .row-score { font-weight: 600; }
    .sb-ability .row-mod, .sb-ability .row-save { color: #4a382a; }
    .sb-ability tfoot td { font-family: 'IM Fell English SC', serif; font-size: 9px; letter-spacing: .16em; color: #9b7a4a; padding: 3px 0 0; text-align: center; border-top: 1px dotted #b2905c; }
    .sb-ability tfoot em { font-style: normal; }
    .sb-meta { font-size: 12px; color: #2b2117; line-height: 1.45; padding: 4px 0; border-bottom: 1px dotted #b2905c; margin-bottom: 6px; }
    .sb-meta p { margin: 1px 0 !important; font-size: 12px !important; color: #2b2117 !important; }
    .sb-meta strong { font-family: 'IM Fell English SC', serif; font-size: 10px; letter-spacing: .18em; color: #6b4f2c; font-weight: 400; text-transform: uppercase; margin-right: 4px; }
    .sb-sect { margin-top: 6px; }
    .sb-sect h5 { font-family: 'IM Fell English SC', serif; font-size: 10.5px; letter-spacing: .22em; color: #6b4f2c; font-weight: 400; text-transform: uppercase; margin: 0 0 3px; padding-bottom: 2px; border-bottom: 1px dotted #b2905c; }
    .sb-sect p { font-size: 12.5px !important; color: #2b2117; line-height: 1.5; margin: 2px 0 !important; text-wrap: pretty; }
    .sb-sect strong em { color: #4a382a; font-weight: 600; font-style: italic; }
    .sb-modlog { margin-top: 8px; padding-top: 6px; border-top: 1px dotted #b2905c; }
    .sb-modlog h5 { font-family: 'IM Fell English SC', serif; font-size: 10px; letter-spacing: .2em; color: #6b4f2c; font-weight: 400; text-transform: uppercase; margin: 0 0 4px; }
    .sb-modlog ul { list-style: none; padding: 0; margin: 0; }
    .sb-modlog li { font-size: 11.5px; color: #4a382a; padding: 1px 0; line-height: 1.45; }
    .sb-modlog .modtrait { font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 12.5px; color: #1c1611; margin-right: 6px; }
    .sb-modlog .modchanges { font-variant-numeric: tabular-nums; }
    footer { text-align:center; margin-top: 24px; font-family:'IM Fell English SC', serif; letter-spacing:.22em; font-size:10px; color:#6b4f2c; }
    .orn { text-align:center; margin: 6px 0 0; color:#6b4f2c; font-size:18px; letter-spacing:.6em; }
    @media print { .noprint { display:none; } }
    .noprint { position: fixed; top: 14px; right: 14px; }
    .noprint button { padding:8px 14px; font: 14px/1 'EB Garamond', serif; background:#1c1611; color:#f6efe0; border:none; border-radius:3px; cursor:pointer; }
  </style></head><body>
    <div class="noprint"><button onclick="window.print()">Print</button></div>
    <div class="sheet">
      <header>
        <div class="kicker">— Hoof & Rein —</div>
        <h1>${escape(stableName)}</h1>
        <div class="sub">The Stable Roster, as kept this season</div>
        <div class="orn">❦ · ❦ · ❦</div>
      </header>
      <ol>${items}</ol>
      <footer>— A rider is only as good as the horse beneath them —</footer>
    </div>
    <script>setTimeout(() => window.print(), 350);<\/script>
  </body></html>`);
  win.document.close();
}

// --------- Main app ---------

function App() {
  const HR = window.HoofAndRein;
  const GENDERS = HR.GENDERS;
  const TYPES_FOR_GENDER = HR.TYPES_FOR_GENDER;
  const ALL_TYPES = HR.ALL_TYPES;
  const AGES = HR.AGES;
  const DISPOSITION_TIERS = HR.DISPOSITION_TIERS;

  const [gender, setGender]       = useState("any");
  const [type, setType]           = useState("any");
  const [age, setAge]             = useState("any");
  const [disposition, setDispo]   = useState("random");

  const [stableName, setStableName] = useState(() =>
    localStorage.getItem("hr.stable") || "The Low Gate Stables"
  );

  const [mount, setMount] = useState(null);
  const [saved, setSaved] = useState(() => {
    try { return JSON.parse(localStorage.getItem("hr.saved") || "[]"); } catch { return []; }
  });
  const [flashed, setFlashed] = useState(false);
  const [sigOpen, setSigOpen] = useState(false);

  const genRef = useRef(null);
  if (!genRef.current) genRef.current = HR.createHorseGenerator();

  const generate = useCallback(() => {
    const m = genRef.current.generate({ gender, type, age, disposition });
    setMount(m);
    setFlashed(true);
    setTimeout(() => setFlashed(false), 350);
  }, [gender, type, age, disposition]);

  useEffect(() => { generate(); /* eslint-disable-next-line */ }, []);
  useEffect(() => { localStorage.setItem("hr.saved", JSON.stringify(saved)); }, [saved]);
  useEffect(() => { localStorage.setItem("hr.stable", stableName); }, [stableName]);

  const newId = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random());

  const save = () => {
    if (!mount) return;
    if (saved.some(s => s.name === mount.name)) return;
    setSaved(xs => [{ id: newId(), ...mount }, ...xs]);
  };

  const addRenowned = (sig) => {
    if (saved.some(s => s.name === sig.name)) return;
    setSaved(xs => [{ id: newId(), ...sig }, ...xs]);
  };

  const remove = (id) => setSaved(xs => xs.filter(s => s.id !== id));

  const downloadTxt = () => {
    if (!saved.length) return;
    const body = saved.map(d => {
      const lines = [
        d.name,
        "-".repeat(d.name.length),
        `Type: ${d.type} · ${d.gender}${d.disposition ? " · " + d.disposition : ""}`,
        `Age: ${d.age}`,
        `Appearance: ${d.appearance}`
      ];
      if (d.traits && d.traits.length) {
        d.traits.forEach(t => lines.push(`  [${t.kind}] ${t.key}: ${t.text}`));
      }
      if (d.tricks && d.tricks.length) {
        d.tricks.forEach(t => lines.push(`  [trick] ${t.key}: ${t.text}`));
      }
      lines.push(`Stat: ${d.notes || d.statNote || ""}`);
      if (d.trainable && d.trainable.length) lines.push(`Trainable: ${d.trainable.join(" · ")}`);
      if (d.price) lines.push(`Price: Base ${d.price.base} gp · ${d.disposition} ${d.price.pctLabel} = ${d.price.final} gp`);
      return lines.join("\n");
    }).join("\n\n");
    const blob = new Blob([`${stableName}\n\n${body}\n`], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${stableName.replace(/\s+/g,"_")}_roster.txt`;
    a.click();
  };

  const savedNames = new Set(saved.map(s => s.name));

  // Type options depend on gender selection.
  const typeOptions = gender === "any" ? ALL_TYPES : TYPES_FOR_GENDER[gender];
  // If current type isn't valid for the gender, clear it.
  useEffect(() => {
    if (type !== "any" && !typeOptions.includes(type)) setType("any");
  }, [gender]); // eslint-disable-line

  return (
    <div className="aa-root">
      <header className="aa-topbar">
        <Logo size={44} />
        <div className="aa-wordmark">
          <div className="aa-wm-kicker">— a Dungeon Brew tool —</div>
          <h1 className="aa-wm-title">Hoof &amp; Rein</h1>
          <div className="aa-wm-sub">Random Horse Generator</div>
        </div>
        <div className="aa-topbar-spacer" />
      </header>

      <main className="aa-grid">
        <section className="aa-left">
          <div className="aa-panel">
            <div className="aa-panel-head">
              <div className="aa-rule" /><span>Stable Controls</span><div className="aa-rule" />
            </div>

            <div className="aa-controls">
              <div className="aa-field-row">
                <Field label="Gender">
                  <select value={gender} onChange={e => setGender(e.target.value)} className="aa-select">
                    <option value="any">Random (d12)</option>
                    {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </Field>

                <Field label="Horse Type">
                  <select value={type} onChange={e => setType(e.target.value)} className="aa-select">
                    <option value="any">Random</option>
                    {typeOptions.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              <div className="aa-field-row">
                <Field label="Age Bracket">
                  <select value={age} onChange={e => setAge(e.target.value)} className="aa-select">
                    <option value="any">Random (d8)</option>
                    <option value="young">Young (foal, colt, filly)</option>
                    <option value="adult">Adult (stud, mare, gelding)</option>
                    <option value="old">Old (aged, nag, crowbait)</option>
                  </select>
                </Field>

                <Field label="Disposition">
                  <select value={disposition} onChange={e => setDispo(e.target.value)} className="aa-select">
                    {DISPOSITION_TIERS.map(q => <option key={q.value} value={q.value}>{q.label}</option>)}
                  </select>
                </Field>
              </div>

              <p className="aa-quality-note">
                Disposition reads the age-bracket trait tables:
                <em> Liability</em> & <em>Rough</em> stack bad habits;
                <em> Unschooled</em> mixes bad with neutral;
                <em> Sound</em> rolls one neutral;
                <em> Steady</em> rolls two neutrals;
                <em> Promising</em> brings a neutral and a good;
                <em> Prized</em> rolls one good; <em>Storied</em> rolls two.
                A trick is only known when <em>Knows Trick</em> comes up in the goods.
              </p>

              <p className="aa-quality-note cc-training-note">
                <span className="cc-training-kicker">On Training</span>
                Most bad and neutral traits, and any trick, can be drilled out over weeks of downtime:
                <em> DC 15 Animal Handling</em>, one check per week. <em>Four successes</em> remove the trait or teach the trick;
                <em> four failures</em> make it permanent. One trait or trick at a time. Look for the <span className="cc-trainable-inline">Trainable</span> tag on a mount's sheet.
              </p>

              <p className="aa-quality-note">
                <em>On gender.</em> Stallions are powerful but unpredictable — the only choice for a warhorse.
                Mares are even-tempered and reliable. Geldings are calmer and steadier than stallions, but never warhorses.
              </p>
            </div>

            <div className="aa-cta-row">
              <button type="button" className="aa-btn aa-btn-primary" onClick={generate}>Saddle Another</button>
              <button type="button" className="aa-btn aa-btn-secondary" onClick={save} disabled={!mount}>Save to Roster</button>
            </div>
          </div>

          <div className={"aa-stage" + (flashed ? " is-flashing" : "")}>
            <MountCard mount={mount} />
          </div>
        </section>

        <section className="aa-right">
          <div className="aa-tavern-name">
            <span className="aa-tavern-label">Stable</span>
            <input
              className="aa-tavern-input"
              value={stableName}
              onChange={e => setStableName(e.target.value)}
              aria-label="Stable name"
            />
            <button type="button" className="aa-btn aa-btn-ghost aa-sig-open" onClick={() => setSigOpen(true)}>
              Renowned Mounts
            </button>
          </div>
          <RosterSheet mounts={saved} onRemove={remove} onPrint={() => printRoster(saved, stableName)} />
          <div className="aa-right-actions">
            <button type="button" className="aa-btn aa-btn-ghost" onClick={downloadTxt} disabled={!saved.length}>Download .txt</button>
            <button type="button" className="aa-btn aa-btn-ghost aa-danger" onClick={() => setSaved([])} disabled={!saved.length}>Clear Roster</button>
          </div>
        </section>
      </main>

      <footer className="aa-footer">
        <span>Hoof &amp; Rein · Dungeon Brew</span>
        <span className="aa-orn">❦</span>
        <span>A rider is only as good as the horse beneath them</span>
      </footer>

      <RenownedDrawer
        open={sigOpen}
        onClose={() => setSigOpen(false)}
        onAdd={addRenowned}
        alreadyIn={savedNames}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
