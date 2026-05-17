/* Canine Companions — stat block UI.
 *
 * Renders the live stat block computed by engine.js. Two related components:
 *
 *   <CompactStats block />        — single-line summary for at-a-glance scanning
 *   <StatBlock    block log? />   — full 5e-style block + optional modifier log
 *
 * The stat block is wrapped in <details> so a parent <details open> attribute
 * or @media print rule can force it open. The opening summary doubles as the
 * compact strip when collapsed.
 */

const SB_ABILITIES = ["str","dex","con","int","wis","cha"];
const SB_ABILITY_LABEL = { str:"STR", dex:"DEX", con:"CON", int:"INT", wis:"WIS", cha:"CHA" };
const SB_SIGN = n => n >= 0 ? `+${n}` : `${n}`;

function CompactStats({ block }) {
  if (!block) return null;
  return (
    <div className="cc-compact">
      <span className="cc-compact-cell"><em>{block.size}</em> beast</span>
      <span className="cc-compact-cell"><em>AC</em> {block.ac}</span>
      <span className="cc-compact-cell"><em>HP</em> {block.computedHP} <small>({block.hd})</small></span>
      <span className="cc-compact-cell"><em>Spd</em> {block.speed} ft</span>
      <span className="cc-compact-cell cc-compact-abilities">
        <span><em>STR</em> {block.abilities.str}</span>
        <span><em>DEX</em> {block.abilities.dex}</span>
        <span><em>CON</em> {block.abilities.con}</span>
      </span>
      <span className="cc-compact-cell"><em>CR</em> {block.cr}</span>
    </div>
  );
}

function StatBlockHeader({ block }) {
  const hpExtra = block.bonuses && block.bonuses.hpExtra;
  return (
    <div className="cc-sb-header">
      <p className="cc-sb-type">
        <em>{block.size} {block.type}, {block.alignment}</em>
      </p>
      <div className="cc-sb-lead">
        <span><em>AC</em> {block.ac}</span>
        <span><em>Initiative</em> {SB_SIGN(block.initiative)} ({10 + block.initiative})</span>
        <span><em>HP</em> {block.computedHP} <small>({block.hd}{hpExtra ? ` ${SB_SIGN(hpExtra)}` : ""})</small></span>
        <span><em>Speed</em> {block.speed} ft.</span>
      </div>
    </div>
  );
}

function AbilityTable({ block }) {
  return (
    <table className="cc-sb-ability">
      <thead>
        <tr>
          {SB_ABILITIES.map(a => (
            <th key={a}>{SB_ABILITY_LABEL[a]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="cc-sb-ability-score">
          {SB_ABILITIES.map(a => (
            <td key={a}>{block.abilities[a]}</td>
          ))}
        </tr>
        <tr className="cc-sb-ability-mod">
          {SB_ABILITIES.map(a => (
            <td key={a}>{SB_SIGN(block.abilityMods[a])}</td>
          ))}
        </tr>
        <tr className="cc-sb-ability-save">
          {SB_ABILITIES.map(a => (
            <td key={a}>{SB_SIGN(block.abilityMods[a])}</td>
          ))}
        </tr>
      </tbody>
      <tfoot>
        <tr><td colSpan={6}>
          <span className="cc-sb-ability-key"><em>Score</em> · <em>Mod</em> · <em>Save</em></span>
        </td></tr>
      </tfoot>
    </table>
  );
}

function MetaLines({ block }) {
  const skills = (block.skills || []).map(s => `${s.name} ${SB_SIGN(s.bonus)}`).join(", ");
  const senses = [];
  if (block.senses && block.senses.darkvision) senses.push(`Darkvision ${block.senses.darkvision} ft.`);
  senses.push(`Passive Perception ${block.passivePerception}`);
  return (
    <div className="cc-sb-meta">
      {skills && (
        <p><span className="cc-sb-meta-k">Skills</span> {skills}</p>
      )}
      <p><span className="cc-sb-meta-k">Senses</span> {senses.join(", ")}</p>
      <p><span className="cc-sb-meta-k">Languages</span> {block.languages || "—"}</p>
      <p><span className="cc-sb-meta-k">CR</span> {block.cr} ({block.xp} XP; PB {SB_SIGN(block.pb)})</p>
    </div>
  );
}

function FeatureList({ block }) {
  const feats = block.featureBlocks || [];
  if (!feats.length) return null;
  return (
    <section className="cc-sb-section">
      <h5 className="cc-sb-section-head">Traits</h5>
      <div className="cc-sb-section-body">
        {feats.map((f, i) => (
          <p key={i}><strong><em>{f.name}.</em></strong> {f.text}</p>
        ))}
      </div>
    </section>
  );
}

function ActionList({ block }) {
  const bite = block.biteRendered;
  if (!bite) return null;
  return (
    <section className="cc-sb-section">
      <h5 className="cc-sb-section-head">Actions</h5>
      <div className="cc-sb-section-body">
        <p><strong><em>{bite.name}.</em></strong> {bite.text}</p>
      </div>
    </section>
  );
}

function ModifierLog({ log }) {
  if (!log || !log.length) return null;
  return (
    <details className="cc-sb-modlog" open>
      <summary>
        <span className="cc-sb-modlog-caret">▾</span>
        <span className="cc-sb-modlog-title">Trait modifiers</span>
        <span className="cc-sb-modlog-count">{log.reduce((n, x) => n + x.changes.length, 0)} change{log.reduce((n, x) => n + x.changes.length, 0) === 1 ? "" : "s"}</span>
      </summary>
      <ul className="cc-sb-modlog-list">
        {log.map((row, i) => (
          <li key={i} className={"cc-sb-modlog-row cc-sb-modlog-row--" + row.kind}>
            <span className="cc-sb-modlog-trait">{row.trait}</span>
            <span className="cc-sb-modlog-changes">{row.changes.join(" · ")}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}

function StatBlock({ block, log, variant }) {
  if (!block) return null;
  const cls = "cc-sb cc-sb--" + (variant || "dark");
  return (
    <div className={cls}>
      <StatBlockHeader block={block} />
      <AbilityTable block={block} />
      <MetaLines block={block} />
      <FeatureList block={block} />
      <ActionList block={block} />
      <ModifierLog log={log} />
    </div>
  );
}

// Expose to other Babel-compiled files (kennel.jsx).
Object.assign(window, { CompactStats, StatBlock });
