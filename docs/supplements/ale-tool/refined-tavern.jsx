/* Ancestors & Ale — Refined Tavern (v2).
 * - Single descriptive voice (no voice selector).
 * - Quality tier dropdown replaces fruit/spice/off-flavor checkboxes.
 * - Signature Drinks drawer: 13 canon dwarven drinks, one-click insert.
 * - Sentence-frame variation in the engine so repeated pours don't feel templated.
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

function Segmented({ value, onChange, options }) {
  return (
    <div className="aa-seg" role="radiogroup">
      {options.map(opt => (
        <button
          key={opt.value}
          role="radio"
          aria-checked={value === opt.value}
          className={"aa-seg-btn" + (value === opt.value ? " is-active" : "")}
          onClick={() => onChange(opt.value)}
          type="button"
        >{opt.label}</button>
      ))}
    </div>
  );
}

function DrinkCard({ drink }) {
  if (!drink) return null;
  return (
    <article className="aa-drink">
      <header className="aa-drink-head">
        <div className="aa-drink-kicker">— The House Pours —</div>
        <h2 className="aa-drink-name">{drink.name}</h2>
        <div className="aa-drink-type">
          <span>{drink.beerType}</span>
          {drink.quality && <span className="aa-drink-quality"> · {drink.quality}</span>}
        </div>
      </header>
      <dl className="aa-drink-body">
        <div><dt>Appearance</dt><dd>{drink.appearance}</dd></div>
        <div><dt>Scent</dt><dd>{drink.scent}</dd></div>
        <div><dt>Flavor</dt><dd>{drink.flavor}</dd></div>
        <div><dt>Mouthfeel</dt><dd>{drink.mouthfeel}</dd></div>
        {drink.custom && <div><dt>Custom</dt><dd><em>{drink.custom}</em></dd></div>}
      </dl>
    </article>
  );
}

function MenuSheet({ drinks, onRemove, onPrint }) {
  return (
    <section className="aa-menu">
      <div className="aa-menu-toolbar">
        <h3 className="aa-h3">Cellar Ledger <span className="aa-count">{drinks.length}</span></h3>
        <div className="aa-menu-actions">
          <button type="button" className="aa-btn aa-btn-ghost" onClick={onPrint} disabled={!drinks.length}>Print Menu</button>
        </div>
      </div>

      <div className="aa-menu-scroll">
        {!drinks.length ? (
          <div className="aa-empty">
            <div className="aa-empty-mark">❦</div>
            <p>No drinks in the ledger yet.</p>
            <p className="aa-empty-sub">Save a pour, or add a Signature Drink to begin.</p>
          </div>
        ) : (
          <ol className="aa-menu-list">
            {drinks.map((d, i) => (
              <li key={d.id} className="aa-menu-item">
                <div className="aa-menu-item-head">
                  <span className="aa-menu-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="aa-menu-title">
                    <h4>{d.name}</h4>
                    <span className="aa-menu-type">
                      {d.beerType}{d.quality ? ` · ${d.quality}` : ""}
                    </span>
                  </div>
                  <button type="button" className="aa-x" aria-label="Remove" onClick={() => onRemove(d.id)}>×</button>
                </div>
                <div className="aa-menu-desc">
                  <p><em>Appearance.</em> {d.appearance}</p>
                  <p><em>Scent.</em> {d.scent}</p>
                  <p><em>Flavor.</em> {d.flavor}</p>
                  <p><em>Mouthfeel.</em> {d.mouthfeel}</p>
                  {d.custom && <p className="aa-menu-custom"><em>Custom.</em> {d.custom}</p>}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

// --- Signature drinks drawer ---
function SignatureDrawer({ open, onClose, onAdd, alreadyIn }) {
  if (!open) return null;
  const drinks = window.AncestorsAndAle.SIGNATURE_DRINKS;
  return (
    <div className="aa-drawer-scrim" onClick={onClose}>
      <aside className="aa-drawer" onClick={e => e.stopPropagation()} role="dialog" aria-label="Signature Drinks">
        <header className="aa-drawer-head">
          <div>
            <div className="aa-drawer-kicker">— The Old Recipes —</div>
            <h2 className="aa-drawer-title">Signature Drinks</h2>
            <p className="aa-drawer-sub">Thirteen named ales from the dwarven tradition. Add any to your ledger.</p>
          </div>
          <button type="button" className="aa-x aa-x-big" aria-label="Close" onClick={onClose}>×</button>
        </header>

        <ul className="aa-sig-list">
          {drinks.map(d => {
            const added = alreadyIn.has(d.name);
            return (
              <li key={d.name} className="aa-sig-item">
                <div className="aa-sig-head">
                  <h4>{d.name}</h4>
                  <span className="aa-sig-type">{d.beerType}</span>
                </div>
                <p className="aa-sig-custom"><em>Custom.</em> {d.custom}</p>
                <p className="aa-sig-notes">
                  <em>A.</em> {d.appearance} <em>S.</em> {d.scent} <em>F.</em> {d.flavor} <em>M.</em> {d.mouthfeel}
                </p>
                <button
                  type="button"
                  className={"aa-btn " + (added ? "aa-btn-ghost" : "aa-btn-secondary")}
                  onClick={() => onAdd(d)}
                  disabled={added}
                >{added ? "In Ledger" : "Add to Ledger"}</button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

// --- Printable menu ---
function escape(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}
function printMenu(drinks, tavernName) {
  const win = window.open("", "_blank", "width=900,height=1100");
  if (!win) return;
  const items = drinks.map((d) => `
    <li class="item">
      <div class="row">
        <h3>${escape(d.name)}</h3>
        <span class="dots"></span>
        <span class="type">${escape(d.beerType)}${d.quality ? " · " + escape(d.quality) : ""}</span>
      </div>
      <p class="desc"><em>Appearance.</em> ${escape(d.appearance)} <em>Scent.</em> ${escape(d.scent)} <em>Flavor.</em> ${escape(d.flavor)} <em>Mouthfeel.</em> ${escape(d.mouthfeel)}</p>
      ${d.custom ? `<p class="custom"><em>Custom.</em> ${escape(d.custom)}</p>` : ""}
    </li>
  `).join("");

  win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${escape(tavernName)} — Menu</title>
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
    .custom { margin: 3px 0 0; font-size: 12.5px; line-height: 1.45; color:#4a382a; font-style: italic; }
    .desc em, .custom em { font-style: italic; color: #6b4f2c; font-weight:500; }
    footer { text-align:center; margin-top: 24px; font-family:'IM Fell English SC', serif; letter-spacing:.22em; font-size:10px; color:#6b4f2c; }
    .orn { text-align:center; margin: 6px 0 0; color:#6b4f2c; font-size:18px; letter-spacing:.6em; }
    @media print { .noprint { display:none; } }
    .noprint { position: fixed; top: 14px; right: 14px; }
    .noprint button { padding:8px 14px; font: 14px/1 'EB Garamond', serif; background:#1c1611; color:#f6efe0; border:none; border-radius:3px; cursor:pointer; }
  </style></head><body>
    <div class="noprint"><button onclick="window.print()">Print</button></div>
    <div class="sheet">
      <header>
        <div class="kicker">— Ancestors &amp; Ale —</div>
        <h1>${escape(tavernName)}</h1>
        <div class="sub">The House Ledger, as set down this evening</div>
        <div class="orn">❦ · ❦ · ❦</div>
      </header>
      <ol>${items}</ol>
      <footer>— Drink deep, traveller —</footer>
    </div>
    <script>setTimeout(() => window.print(), 350);</script>
  </body></html>`);
  win.document.close();
}

// --------- Main app ---------

function App({ themeClass = "" } = {}) {
  const [beerType, setBeerType] = useState("any");
  const [quality, setQuality] = useState("random");
  const [verbosity, setVerbosity] = useState("normal");
  const [tavernName, setTavernName] = useState(() =>
    localStorage.getItem("aa.tavern") || "The Hollow Tankard"
  );

  const [drink, setDrink] = useState(null);
  const [saved, setSaved] = useState(() => {
    try { return JSON.parse(localStorage.getItem("aa.saved") || "[]"); } catch { return []; }
  });
  const [flashed, setFlashed] = useState(false);
  const [sigOpen, setSigOpen] = useState(false);

  const genRef = useRef(null);
  if (!genRef.current) genRef.current = window.AncestorsAndAle.createDrinkGenerator();

  const generate = useCallback(() => {
    const d = genRef.current.generate({ beerType, quality, verbosity });
    setDrink(d);
    setFlashed(true);
    setTimeout(() => setFlashed(false), 350);
  }, [beerType, quality, verbosity]);

  useEffect(() => { generate(); /* eslint-disable-next-line */ }, []);
  useEffect(() => { localStorage.setItem("aa.saved", JSON.stringify(saved)); }, [saved]);
  useEffect(() => { localStorage.setItem("aa.tavern", tavernName); }, [tavernName]);

  const newId = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random());

  const save = () => {
    if (!drink) return;
    if (saved.some(s => s.name === drink.name)) return;
    setSaved(xs => [{ id: newId(), ...drink }, ...xs]);
  };

  const addSignature = (sig) => {
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
        `Type: ${d.beerType}${d.quality ? " · " + d.quality : ""}`,
        `Appearance: ${d.appearance}`,
        `Scent: ${d.scent}`,
        `Flavor: ${d.flavor}`,
        `Mouthfeel: ${d.mouthfeel}`
      ];
      if (d.custom) lines.push(`Custom: ${d.custom}`);
      return lines.join("\n");
    }).join("\n\n");
    const blob = new Blob([`${tavernName}\n\n${body}\n`], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${tavernName.replace(/\s+/g,"_")}_ledger.txt`;
    a.click();
  };

  const savedNames = new Set(saved.map(s => s.name));

  const QUALITY_TIERS = window.AncestorsAndAle.QUALITY_TIERS;

  return (
    <div className={"aa-root " + themeClass}>
      <header className="aa-topbar">
        <Logo size={44} />
        <div className="aa-wordmark">
          <div className="aa-wm-kicker">— a Dungeon Brew tool —</div>
          <h1 className="aa-wm-title">Ancestors &amp; Ale</h1>
          <div className="aa-wm-sub">Random Drink Generator</div>
        </div>
        <div className="aa-topbar-spacer" />
      </header>

      <main className="aa-grid">
        <section className="aa-left">
          <div className="aa-panel">
            <div className="aa-panel-head">
              <div className="aa-rule" /><span>Brew Controls</span><div className="aa-rule" />
            </div>

            <div className="aa-controls">
              <div className="aa-field-row">
                <Field label="Beer Type">
                  <select value={beerType} onChange={e => setBeerType(e.target.value)} className="aa-select">
                    <option value="any">Random</option>
                    {window.AncestorsAndAle.TABLES.nameTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>

                <Field label="Quality">
                  <select value={quality} onChange={e => setQuality(e.target.value)} className="aa-select">
                    {QUALITY_TIERS.map(q => <option key={q.value} value={q.value}>{q.label}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Verbosity">
                <Segmented value={verbosity} onChange={setVerbosity} options={[
                  { value: "terse",   label: "Terse" },
                  { value: "normal",  label: "Normal" },
                  { value: "flowery", label: "Flowery" },
                ]} />
              </Field>

              <p className="aa-quality-note">
                Quality drives the drink: <em>Basic</em> and <em>Fine</em> carry off-flavors;
                <em> Decent</em> adds fruit or spice; <em>Exceptional</em> & <em>Legendary</em> braid complex malts.
              </p>
            </div>

            <div className="aa-cta-row">
              <button type="button" className="aa-btn aa-btn-primary" onClick={generate}>Pour Another</button>
              <button type="button" className="aa-btn aa-btn-secondary" onClick={save} disabled={!drink}>Save to Ledger</button>
            </div>
          </div>

          <div className={"aa-stage" + (flashed ? " is-flashing" : "")}>
            <DrinkCard drink={drink} />
          </div>
        </section>

        <section className="aa-right">
          <div className="aa-tavern-name">
            <span className="aa-tavern-label">Tavern</span>
            <input
              className="aa-tavern-input"
              value={tavernName}
              onChange={e => setTavernName(e.target.value)}
              aria-label="Tavern name"
            />
            <button type="button" className="aa-btn aa-btn-ghost aa-sig-open" onClick={() => setSigOpen(true)}>
              Signature Drinks
            </button>
          </div>
          <MenuSheet drinks={saved} onRemove={remove} onPrint={() => printMenu(saved, tavernName)} />
          <div className="aa-right-actions">
            <button type="button" className="aa-btn aa-btn-ghost" onClick={downloadTxt} disabled={!saved.length}>Download .txt</button>
            <button type="button" className="aa-btn aa-btn-ghost aa-danger" onClick={() => setSaved([])} disabled={!saved.length}>Clear Ledger</button>
          </div>
        </section>
      </main>

      <footer className="aa-footer">
        <span>Ancestors &amp; Ale · Dungeon Brew</span>
        <span className="aa-orn">❦</span>
        <span>Drink deep, traveller</span>
      </footer>

      <SignatureDrawer
        open={sigOpen}
        onClose={() => setSigOpen(false)}
        onAdd={addSignature}
        alreadyIn={savedNames}
      />
    </div>
  );
}

const __themeClass = (document.getElementById("root").dataset.theme || "");
ReactDOM.createRoot(document.getElementById("root")).render(<App themeClass={__themeClass} />);
