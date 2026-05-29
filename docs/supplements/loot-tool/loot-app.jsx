/* Furs & Gems Loot Generator — main app shell
 * Method picker on left, results stage, hoard sidebar on right.
 */
const LD = window.LootData;
const LE = window.LootEngine;

function Logo() {
  return (
    <a href="https://www.patreon.com/DungeonBrew" target="_blank" rel="noreferrer"
       className="aa-logo" aria-label="Dungeon Brew — Patreon">
      <img src="assets/logo.png" alt="Dungeon Brew" width="44" height="44" />
    </a>
  );
}

// ============================================================
// ItemCard — fur or gem
// ============================================================
function QualityPips({ q }) {
  return (
    <span className={"lg-quality-pips q-" + q}>
      <span></span><span></span><span></span>
    </span>
  );
}

function FurCard({ item, onDelete, onSave, showDesc }) {
  return (
    <div className="lg-item is-fur">
      <span className="lg-item-kind">{item.group} · Fur</span>
      <div className="lg-item-name">{item.name}</div>
      <div className="lg-item-meta">
        <QualityPips q={item.quality} />
        <span>{item.qualityLabel} ({item.qualityMult}×)</span>
      </div>
      {showDesc && item.desc && <div className="lg-desc">{item.desc}</div>}
      <div className="lg-item-price">
        <span className={"lg-region-pill reg-" + item.region}>{item.regionLabel}</span>
        <span className="lg-item-price-v">{item.displayPrice}</span>
      </div>
      {onDelete && (
        <button className="lg-item-action del" title="Discard" onClick={onDelete}>×</button>
      )}
      {onSave && !onDelete && (
        <button className="lg-item-action" title="Keep" onClick={onSave}>✚</button>
      )}
    </div>
  );
}

function GemCard({ item, onDelete, onSave, showRolls, showDesc }) {
  return (
    <div className="lg-item is-gem">
      <span className="lg-item-kind">Gem · {item.base} gp base</span>
      <div className="lg-item-name">{item.name}</div>
      <div className="lg-item-meta">
        <span>{item.quality} ({item.qualityMult}×)</span>
        <span className="sep">·</span>
        <span>{item.carat}ct</span>
      </div>
      {showDesc && item.desc && <div className="lg-desc">{item.desc}</div>}
      {showRolls && item.d100 != null && (
        <div className="lg-rolldetail">
          <span><span className="roll-k">d100</span><span className="roll-v">{item.d100}</span></span>
          <span><span className="roll-k">2d10</span><span className="roll-v">{item.qualityDice.join("+")} = {item.qualityTotal}</span></span>
          <span><span className="roll-k">carat</span><span className="roll-v">[{item.caratTrace.join(",")}]</span></span>
          <span className="roll-eq">= {item.base}gp × {item.qualityMult} × {item.carat}ct × {item.regionMult}</span>
        </div>
      )}
      <div className="lg-item-price">
        <span className={"lg-region-pill reg-" + item.region}>{item.regionLabel}</span>
        <span className="lg-item-price-v">{item.displayPrice}</span>
      </div>
      {onDelete && <button className="lg-item-action del" title="Discard" onClick={onDelete}>×</button>}
      {onSave && !onDelete && <button className="lg-item-action" title="Keep" onClick={onSave}>✚</button>}
    </div>
  );
}

function ItemCard(props) {
  if (props.item.kind === "fur") return <FurCard {...props} />;
  if (props.item.kind === "gem") return <GemCard {...props} showRolls={props.showRolls} />;
  return null;
}
// ============================================================
// Stage readout — totals across current result set
// ============================================================
function StageReadout({ items }) {
  const totalCp = items.reduce((s, it) => s + (it.finalPriceCp || 0), 0);
  const fursCt = items.filter(i => i.kind === "fur").length;
  const gemsCt = items.filter(i => i.kind === "gem").length;
  return (
    <div className="lg-readout">
      <div className="lg-readout-cell">
        <div className="lg-readout-k">Items</div>
        <div className="lg-readout-v">{items.length}</div>
      </div>
      <div className="lg-readout-cell">
        <div className="lg-readout-k">Furs</div>
        <div className="lg-readout-v">{fursCt}</div>
      </div>
      <div className="lg-readout-cell">
        <div className="lg-readout-k">Gems</div>
        <div className="lg-readout-v">{gemsCt}</div>
      </div>
      <div className="lg-readout-cell">
        <div className="lg-readout-k">Total Value</div>
        <div className="lg-readout-v is-accent">{items.length ? LE.formatCp(totalCp) : "—"}</div>
      </div>
    </div>
  );
}

// ============================================================
// Hoard sidebar — items + bundles
// ============================================================
function HoardSidebar({
  items, bundles, hoardName,
  activeTab, setActiveTab,
  onRemoveItem, onRemoveBundle, onRenameBundle,
  onExtractFromBundle, onGroupSelected, onPrint, onDownload, onClearAll
}) {
  const totalItemsCp = items.reduce((s, i) => s + (i.finalPriceCp || 0), 0);
  const totalBundlesCp = bundles.reduce((s, b) => s + b.items.reduce((ss, i) => ss + (i.finalPriceCp || 0), 0), 0);

  const [selectMode, setSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  // Drop selections that no longer exist; exit mode when list empties
  useEffect(() => {
    const live = new Set(items.map(i => i.id));
    setSelectedIds(prev => prev.filter(id => live.has(id)));
  }, [items]);
  useEffect(() => {
    if (activeTab !== "items") { setSelectMode(false); setSelectedIds([]); }
  }, [activeTab]);

  const toggleId = (id) => setSelectedIds(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const selectedItems = items.filter(i => selectedIds.includes(i.id));
  const selectedCp = selectedItems.reduce((s, i) => s + (i.finalPriceCp || 0), 0);

  const doGroup = () => {
    if (!selectedIds.length) return;
    onGroupSelected(selectedIds);
    setSelectedIds([]);
    setSelectMode(false);
  };

  return (
    <section className="aa-menu">
      <div className="aa-menu-toolbar">
        <h3 className="aa-h3">The Hoard <span className="aa-count">{items.length + bundles.length}</span></h3>
        <div className="aa-menu-actions">
          <button className="aa-btn aa-btn-ghost" onClick={onPrint}
                  disabled={!items.length && !bundles.length}>Print</button>
          <button className="aa-btn aa-btn-ghost" onClick={onDownload}
                  disabled={!items.length && !bundles.length}>.txt</button>
          <button className="aa-btn aa-btn-ghost aa-danger" onClick={onClearAll}
                  disabled={!items.length && !bundles.length}>Clear</button>
        </div>
      </div>

      <div className="aa-paper-tabs">
        <button className={"aa-paper-tab" + (activeTab === "items" ? " is-active" : "")}
                onClick={() => setActiveTab("items")}>
          Loose Items <span className="ct">({items.length})</span>
        </button>
        <button className={"aa-paper-tab" + (activeTab === "bundles" ? " is-active" : "")}
                onClick={() => setActiveTab("bundles")}>
          Bundles <span className="ct">({bundles.length})</span>
        </button>
      </div>

      <div className="aa-menu-scroll">
        {activeTab === "items" ? (
          items.length ? (
            <>
              {items.length > 1 && (
                <div className="aa-selectbar">
                  {selectMode ? (
                    <>
                      <span className="aa-selectbar-count">
                        {selectedIds.length
                          ? `${selectedIds.length} selected · ${LE.formatCp(selectedCp)}`
                          : "Tap items to select"}
                      </span>
                      <div className="aa-selectbar-actions">
                        <button className="aa-mini-link" onClick={() => setSelectedIds(items.map(i => i.id))}>All</button>
                        <button className="aa-mini-link" onClick={() => { setSelectMode(false); setSelectedIds([]); }}>Cancel</button>
                        <button className="aa-btn aa-btn-primary aa-btn-tiny"
                                disabled={!selectedIds.length}
                                onClick={doGroup}>Bundle {selectedIds.length || ""}</button>
                      </div>
                    </>
                  ) : (
                    <button className="aa-mini-link" onClick={() => setSelectMode(true)}>⊞ Select &amp; group into bundle</button>
                  )}
                </div>
              )}
              <ol className="aa-menu-list">
                {items.map((it, i) => (
                  <ItemListRow key={it.id} item={it} index={i + 1}
                               selectable={selectMode}
                               selected={selectedIds.includes(it.id)}
                               onToggleSelect={() => toggleId(it.id)}
                               onRemove={() => onRemoveItem(it.id)} />
                ))}
              </ol>
              <div className="aa-menu-item" style={{paddingTop: 10, borderBottom: "none"}}>
                <div className="aa-menu-item-head">
                  <span className="aa-menu-num">Σ</span>
                  <div className="aa-menu-title">
                    <h4>Loose items total</h4>
                  </div>
                  <div></div>
                  <div className="aa-menu-price">{LE.formatCp(totalItemsCp)}</div>
                </div>
              </div>
            </>
          ) : (
            <Empty mark="❦" text="No loose items yet." sub="Roll something, tap ✚ to keep it, then select &amp; group your keepers into a bundle." />
          )
        ) : (
          bundles.length ? (
            <>
              {bundles.map((b, i) => (
                <BundleCard key={b.id} bundle={b} index={i + 1}
                            onRemove={() => onRemoveBundle(b.id)}
                            onRename={(name) => onRenameBundle(b.id, name)}
                            onExtractItem={(itemId) => onExtractFromBundle(b.id, itemId)} />
              ))}
              <div className="aa-menu-item" style={{paddingTop: 10, borderBottom: "none"}}>
                <div className="aa-menu-item-head">
                  <span className="aa-menu-num">Σ</span>
                  <div className="aa-menu-title">
                    <h4>Bundles total</h4>
                  </div>
                  <div></div>
                  <div className="aa-menu-price">{LE.formatCp(totalBundlesCp)}</div>
                </div>
              </div>
            </>
          ) : (
            <Empty mark="✦" text="No bundles yet." sub="Use “Save as Bundle” on any generated set." />
          )
        )}
      </div>
    </section>
  );
}

function Empty({ mark, text, sub }) {
  return (
    <div className="aa-empty">
      <div className="aa-empty-mark">{mark}</div>
      <p>{text}</p>
      <p className="aa-empty-sub">{sub}</p>
    </div>
  );
}

function ItemListRow({ item, index, onRemove, selectable, selected, onToggleSelect }) {
  const kindLabel = item.kind === "fur" ? "Fur" : "Gem";
  const detail = item.kind === "fur"
    ? `${item.qualityLabel} · ${item.regionLabel}`
    : `${item.quality} · ${item.carat}ct · ${item.regionLabel}`;
  return (
    <li className={"aa-menu-item" + (selectable ? " is-selectable" : "") + (selected ? " is-selected" : "")}
        onClick={selectable ? onToggleSelect : undefined}>
      <div className={"aa-menu-item-head" + (selectable ? " has-check" : "")}>
        {selectable && (
          <span className={"aa-row-check" + (selected ? " is-on" : "")} aria-hidden="true"></span>
        )}
        <span className="aa-menu-num">{String(index).padStart(2, "0")}</span>
        <div className="aa-menu-title">
          <h4>{item.name}</h4>
          <span className="aa-menu-type">{kindLabel} · {detail}</span>
        </div>
        <div className="aa-menu-price">{item.displayPrice}</div>
        <button className="aa-x" onClick={(e) => { e.stopPropagation(); onRemove(); }} title="Remove">×</button>
      </div>
    </li>
  );
}

function BundleCard({ bundle, index, onRemove, onRename, onExtractItem }) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(bundle.name);
  useEffect(() => { setName(bundle.name); }, [bundle.name]);

  const total = bundle.items.reduce((s, i) => s + (i.finalPriceCp || 0), 0);
  const fursCt = bundle.items.filter(i => i.kind === "fur").length;
  const gemsCt = bundle.items.filter(i => i.kind === "gem").length;

  const commit = () => {
    setEditing(false);
    if (name.trim()) onRename(name.trim());
  };

  return (
    <div className={"aa-bundle" + (open ? " is-open" : "")}>
      <div className="aa-bundle-head" onClick={(e) => {
        if (editing) return;
        // Don't toggle when clicking input or button inside
        if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") return;
        setOpen(!open);
      }}>
        <span className="aa-bundle-caret">›</span>
        {editing ? (
          <input className="aa-bundle-title-input" value={name}
                 onChange={e => setName(e.target.value)}
                 onBlur={commit}
                 onKeyDown={e => e.key === "Enter" && commit()}
                 autoFocus
                 onClick={e => e.stopPropagation()} />
        ) : (
          <span className="aa-bundle-title" onDoubleClick={(e) => { e.stopPropagation(); setEditing(true); }}>{bundle.name}</span>
        )}
        <span className="aa-bundle-ct">{fursCt}f · {gemsCt}g</span>
        <span className="aa-bundle-total">{LE.formatCp(total)}</span>
        <button className="aa-x" onClick={(e) => { e.stopPropagation(); onRemove(); }} title="Remove bundle">×</button>
      </div>
      {open && (
        <>
          <div className="aa-bundle-body">
            <ol className="aa-menu-list">
              {bundle.items.map((it, i) => (
                <ItemListRow key={it.id} item={it} index={i + 1}
                             onRemove={() => onExtractItem(it.id)} />
              ))}
            </ol>
          </div>
          <div className="aa-bundle-actions">
            <button className="aa-mini-link" onClick={() => setEditing(true)}>Rename</button>
          </div>
        </>
      )}
    </div>
  );
}

// ============================================================
// Print sheet (opens new window, calls window.print())
// ============================================================
function printHoard(hoardName, items, bundles, includeLore) {
  const w = window.open("", "_blank", "width=900,height=1100");
  if (!w) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));

  const renderItems = (arr) => `<table class="loot"><thead><tr>
      <th class="n">#</th><th>Item</th><th>Kind</th><th>Detail</th><th class="r">Value</th>
    </tr></thead><tbody>
    ${arr.map((it, i) => {
      const detail = it.kind === "fur"
        ? `${it.qualityLabel} · ${it.regionLabel}`
        : `${it.quality} · ${it.carat}ct · ${it.regionLabel}`;
      const loreRow = (includeLore && it.desc)
        ? `<tr class="lore"><td></td><td colspan="4" class="lore-cell">${esc(it.desc)}</td></tr>`
        : "";
      return `<tr>
        <td class="n">${String(i+1).padStart(2,"0")}</td>
        <td class="nm">${esc(it.name)}</td>
        <td class="k">${it.kind === "fur" ? "Fur" : "Gem"}</td>
        <td class="d">${esc(detail)}</td>
        <td class="r">${esc(it.displayPrice)}</td>
      </tr>${loreRow}`;
    }).join("")}
    <tr class="sum">
      <td></td><td colspan="3" class="d">Subtotal</td>
      <td class="r">${esc(LE.formatCp(arr.reduce((s,i)=>s+(i.finalPriceCp||0),0)))}</td>
    </tr>
    </tbody></table>`;

  const looseBlock = items.length ? `
    <section class="block">
      <h2>Loose Items</h2>
      ${renderItems(items)}
    </section>` : "";

  const bundleBlocks = bundles.map((b, i) => `
    <section class="block">
      <h2>Bundle ${String(i+1).padStart(2,"0")} — ${esc(b.name)}</h2>
      ${renderItems(b.items)}
    </section>
  `).join("");

  const grandTotalCp =
    items.reduce((s,i)=>s+(i.finalPriceCp||0),0)
    + bundles.reduce((s,b)=>s+b.items.reduce((ss,i)=>ss+(i.finalPriceCp||0),0),0);

  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(hoardName)} — Hoard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=IM+Fell+English+SC&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
  <style>
    @page { size: Letter; margin: 0.55in; }
    html, body { background: #f6efe0; color: #1c1611; font-family: 'EB Garamond', Georgia, serif; }
    body { padding: 0; margin: 0; }
    .sheet { padding: 28px 32px; max-width: 760px; margin: 0 auto; }
    header { text-align: center; border-bottom: 2px double #3b2f1d; padding-bottom: 14px; margin-bottom: 22px; }
    header .kicker { font-family:'IM Fell English SC', serif; letter-spacing:.24em; font-size:11px; color:#6b4f2c; }
    header h1 { font-family:'Cormorant Garamond', serif; font-weight:600; font-size:40px; letter-spacing:.02em; margin:4px 0 2px; }
    header .sub { font-style: italic; color:#4a382a; font-size:13px; }
    .orn { text-align:center; margin: 4px 0 0; color:#6b4f2c; font-size:18px; letter-spacing:.6em; }
    section.block { break-inside: avoid; margin: 0 0 22px; }
    section.block h2 {
      font-family:'Cormorant Garamond', serif; font-weight: 600; font-size: 20px;
      color: #1c1611; margin: 0 0 6px; padding-bottom: 3px;
      border-bottom: 1px dotted #b2905c;
      display: flex; justify-content: space-between; align-items: baseline;
    }
    table.loot { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }
    table.loot th {
      font-family:'IM Fell English SC', serif; font-weight: 400;
      font-size: 10.5px; letter-spacing:.18em; color:#6b4f2c;
      text-align: left; padding: 6px 8px 5px;
      border-bottom: 1px solid #b2905c;
    }
    table.loot th.n { width: 28px; text-align: center; }
    table.loot th.r, table.loot td.r { text-align: right; }
    table.loot td { padding: 5px 8px; font-size: 14px; vertical-align: top; border-bottom: 1px dotted #d2bf95; }
    table.loot td.n { color:#6b4f2c; font-family:'IM Fell English SC', serif; font-size:11px; text-align:center; }
    table.loot td.nm { font-family:'Cormorant Garamond', serif; font-weight: 600; font-size: 15px; }
    table.loot td.k { font-family:'IM Fell English SC', serif; font-size:10.5px; letter-spacing:.16em; color:#6b4f2c; }
    table.loot td.d { color:#4a382a; font-style: italic; font-size: 13px; }
    table.loot td.r { font-family:'Cormorant Garamond', serif; font-weight: 600; font-size: 15px; }
    table.loot tr.sum td { border-bottom: none; padding-top: 8px; font-size: 15px; }
    table.loot tr.lore td.lore-cell { font-style: italic; color: #5a4636; font-size: 12.5px; padding: 0 8px 7px; border-bottom: 1px dotted #d2bf95; }
    table.loot tr.sum td.d { font-family:'IM Fell English SC', serif; letter-spacing: .2em; font-style: normal; color:#6b4f2c; font-size: 11px; text-align: right; }
    .grand { text-align: right; font-family:'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; margin-top: 14px; padding-top: 10px; border-top: 2px double #3b2f1d; }
    .grand .lbl { font-family:'IM Fell English SC', serif; letter-spacing: .22em; font-size: 11px; color: #6b4f2c; margin-right: 14px; }
    footer { text-align: center; margin-top: 24px; font-family:'IM Fell English SC', serif; letter-spacing: .22em; font-size: 10px; color: #6b4f2c; }
    @media print { .noprint { display: none; } }
    .noprint { position: fixed; top: 14px; right: 14px; }
    .noprint button { padding: 8px 14px; font: 14px/1 'EB Garamond', serif; background: #1c1611; color: #f6efe0; border: none; border-radius: 3px; cursor: pointer; }
  </style></head><body>
    <div class="noprint"><button onclick="window.print()">Print</button></div>
    <div class="sheet">
      <header>
        <div class="kicker">— a hoard ledger —</div>
        <h1>${esc(hoardName)}</h1>
        <div class="sub">An accounting of furs &amp; gems</div>
        <div class="orn">❦ · ❦ · ❦</div>
      </header>
      ${looseBlock}
      ${bundleBlocks}
      <div class="grand"><span class="lbl">Grand Total</span>${esc(LE.formatCp(grandTotalCp))}</div>
      <footer>— Furs &amp; Gems Loot Generator —</footer>
    </div>
    <script>setTimeout(() => window.print(), 350);<\/script>
  </body></html>`);
  w.document.close();
}

// ============================================================
// .txt download
// ============================================================
function downloadTxt(hoardName, items, bundles, includeLore) {
  const lines = [];
  lines.push(hoardName);
  lines.push("=".repeat(hoardName.length));
  lines.push("");
  const emit = (arr) => {
    arr.forEach((it, i) => {
      const num = String(i + 1).padStart(2, "0");
      const detail = it.kind === "fur"
        ? `${it.qualityLabel} · ${it.regionLabel}`
        : `${it.quality} · ${it.carat}ct · ${it.regionLabel}`;
      lines.push(`  ${num}. ${it.name}  [${it.kind === "fur" ? "Fur" : "Gem"}]`);
      lines.push(`      ${detail}  —  ${it.displayPrice}`);
      if (includeLore && it.desc) lines.push(`      “${it.desc}”`);
    });
    const subtotalCp = arr.reduce((s, i) => s + (i.finalPriceCp || 0), 0);
    lines.push(`      ${"-".repeat(40)}`);
    lines.push(`      Subtotal:  ${LE.formatCp(subtotalCp)}`);
  };
  if (items.length) {
    lines.push("LOOSE ITEMS");
    lines.push("-----------");
    emit(items);
    lines.push("");
  }
  bundles.forEach((b, i) => {
    lines.push(`BUNDLE ${String(i+1).padStart(2,"0")} — ${b.name}`);
    lines.push("-".repeat(("BUNDLE 00 — " + b.name).length));
    emit(b.items);
    lines.push("");
  });
  const grand =
    items.reduce((s, i) => s + (i.finalPriceCp || 0), 0)
    + bundles.reduce((s, b) => s + b.items.reduce((ss, i) => ss + (i.finalPriceCp || 0), 0), 0);
  lines.push("");
  lines.push(`GRAND TOTAL:  ${LE.formatCp(grand)}`);
  lines.push("");
  lines.push("-- Furs & Gems Loot Generator --");

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${hoardName.replace(/\s+/g, "_")}_hoard.txt`;
  a.click();
}

// ============================================================
// App
// ============================================================
function App() {
  const [methodId, setMethodId] = useState(() => localStorage.getItem("lg.method") || "VI");
  const [hoardName, setHoardName] = useState(() => localStorage.getItem("lg.hoardName") || "The Travellers' Hoard");
  const [bundleName, setBundleName] = useState("");
  const [activeTab, setActiveTab] = useState("items");
  const [showLore, setShowLore] = useState(() => localStorage.getItem("lg.showLore") !== "0");

  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("lg.items") || "[]"); } catch { return []; }
  });
  const [bundles, setBundles] = useState(() => {
    try { return JSON.parse(localStorage.getItem("lg.bundles") || "[]"); } catch { return []; }
  });

  const [results, setResults] = useState([]);
  const [methodNote, setMethodNote] = useState("");
  const [genKey, setGenKey] = useState(0);

  useEffect(() => { localStorage.setItem("lg.method", methodId); }, [methodId]);
  useEffect(() => { localStorage.setItem("lg.showLore", showLore ? "1" : "0"); }, [showLore]);
  useEffect(() => { localStorage.setItem("lg.hoardName", hoardName); }, [hoardName]);
  useEffect(() => { localStorage.setItem("lg.items", JSON.stringify(items)); }, [items]);
  useEffect(() => { localStorage.setItem("lg.bundles", JSON.stringify(bundles)); }, [bundles]);

  const switchMethod = (id) => {
    if (id === methodId) return;
    setResults([]);
    setMethodNote("");
    setMethodId(id);
  };

  const ctlProps = {
    onResult: setResults,
    onNote: setMethodNote,
    generateKey: genKey
  };

  let body = null;
  switch (methodId) {
    case "I":    body = <MethodSpecificFur {...ctlProps} />; break;
    case "II":   body = <MethodRandomFur {...ctlProps} />; break;
    case "III":  body = <MethodFurHaul {...ctlProps} />; break;
    case "IV":   body = <MethodFurBudget {...ctlProps} />; break;
    case "V":    body = <MethodSpecificGem {...ctlProps} />; break;
    case "VI":   body = <MethodRandomGem {...ctlProps} />; break;
    case "VII":  body = <MethodGemLot {...ctlProps} />; break;
    case "VIII": body = <MethodGemBudget {...ctlProps} />; break;
    case "IX":   body = <MethodHoardByValue {...ctlProps} />; break;
    case "X":    body = <MethodHoardByTier {...ctlProps} />; break;
    default: body = null;
  }

  const activeMethod = LD.METHODS.find(m => m.id === methodId) || LD.METHODS[0];

  // Save current result set as a bundle
  const saveAsBundle = () => {
    if (!results.length) return;
    const name = bundleName.trim() || `${activeMethod.title} #${bundles.length + 1}`;
    const newBundle = {
      id: LE.cryptoId(),
      name,
      method: activeMethod.title,
      createdAt: Date.now(),
      items: results.map(r => ({ ...r, id: LE.cryptoId() }))
    };
    setBundles(prev => [newBundle, ...prev]);
    setBundleName("");
    setActiveTab("bundles");
  };

  // Save current result set as loose items (each individually)
  const saveAsLoose = () => {
    if (!results.length) return;
    const fresh = results.map(r => ({ ...r, id: LE.cryptoId() }));
    setItems(prev => [...fresh, ...prev]);
    setActiveTab("items");
  };

  // Save just one result item
  const saveOneItem = (resultItem) => {
    const fresh = { ...resultItem, id: LE.cryptoId() };
    setItems(prev => [fresh, ...prev]);
  };

  // Pop from result set without saving (helps avoid duplication)
  const discardOneResult = (id) => {
    setResults(prev => prev.filter(r => r.id !== id));
  };

  // Bundle ops
  const removeBundle = (id) => setBundles(prev => prev.filter(b => b.id !== id));
  const renameBundle = (id, name) => setBundles(prev => prev.map(b => b.id === id ? { ...b, name } : b));

  // Group selected loose items into a new bundle (moves them out of Loose Items)
  const groupSelected = (ids) => {
    const idSet = new Set(ids);
    const picked = items.filter(i => idSet.has(i.id));
    if (!picked.length) return;
    const newBundle = {
      id: LE.cryptoId(),
      name: bundleName.trim() || `Bundle #${bundles.length + 1}`,
      method: "Hand-picked",
      createdAt: Date.now(),
      items: picked.map(p => ({ ...p, id: LE.cryptoId() }))
    };
    setBundles(prev => [newBundle, ...prev]);
    setItems(prev => prev.filter(i => !idSet.has(i.id)));
    setBundleName("");
    setActiveTab("bundles");
  };
  const extractFromBundle = (bundleId, itemId) => {
    setBundles(prev => prev.map(b => {
      if (b.id !== bundleId) return b;
      return { ...b, items: b.items.filter(i => i.id !== itemId) };
    }).filter(b => b.items.length > 0));
  };

  // Show rolls (for gem cards) — pulled from results if marker present
  const showRollsForGems = results.length > 0 && results[0].kind === "gem" && results[0]._showRolls;

  return (
    <div className="aa-root">
      <header className="aa-topbar">
        <Logo />
        <div className="aa-wordmark">
          <div className="aa-wm-kicker">— a Dungeon Brew tool —</div>
          <h1 className="aa-wm-title">Furs &amp; Gems Loot Generator</h1>
          <div className="aa-wm-sub">Ten methods · pelts, stones &amp; hoards</div>
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
              {LD.METHODS.map(m => (
                <button key={m.id} type="button"
                  className={"aa-method-tile fam-" + m.family + (methodId === m.id ? " is-active" : "")}
                  onClick={() => switchMethod(m.id)}>
                  <span className="num">METHOD {m.num}</span>
                  <span className="ttl">{m.title}</span>
                  <span className="fam">{m.family.toUpperCase()}</span>
                </button>
              ))}
            </div>

            <div className="aa-panel-head" style={{marginTop: 4}}>
              <div className="aa-rule" /><span>Method {activeMethod.num} — {activeMethod.title}</span><div className="aa-rule" />
            </div>

            {body}
          </div>

          <div className="aa-stage">
            <div className="aa-stage-head">
              <div className="aa-stage-kicker">— Your Result —</div>
              <h2 className="aa-stage-title">Method {activeMethod.num}: {activeMethod.title}</h2>
              {methodNote && <div className="aa-stage-sub">{methodNote}</div>}
              <button className={"lg-lore-toggle" + (showLore ? " is-on" : "")}
                      onClick={() => setShowLore(v => !v)}
                      title="Toggle flavor descriptions">
                {showLore ? "✓ Lore shown" : "Show lore"}
              </button>
            </div>

            <StageReadout items={results} />

            {results.length === 0 ? (
              <div className="aa-stage-empty">
                <span className="mark">❦</span>
                Adjust the method's controls — your result will appear here.
              </div>
            ) : (
              <div className="lg-itemlist">
                {results.map(it => (
                  <ItemCard key={it.id}
                    item={it}
                    showRolls={!!it._showRolls}
                    showDesc={showLore}
                    onDelete={results.length > 1 ? () => discardOneResult(it.id) : null}
                    onSave={() => saveOneItem(it)} />
                ))}
              </div>
            )}

            <div className="lg-saverow">
              <label>Bundle name</label>
              <input className="lg-bundle-input"
                placeholder={`${activeMethod.title} #${bundles.length + 1}`}
                value={bundleName}
                onChange={e => setBundleName(e.target.value)} />
              <button className="aa-btn aa-btn-secondary"
                disabled={!results.length}
                onClick={saveAsLoose}
                title="Add each item to Loose Items">+ Loose</button>
              <button className="aa-btn aa-btn-primary"
                disabled={!results.length}
                onClick={saveAsBundle}>Save as Bundle</button>
            </div>
          </div>
        </section>

        <section className="aa-right">
          <div className="aa-hoard-name">
            <span className="aa-hoard-label">Hoard</span>
            <input className="aa-hoard-input"
              value={hoardName}
              onChange={e => setHoardName(e.target.value)} />
          </div>
          <HoardSidebar
            items={items}
            bundles={bundles}
            hoardName={hoardName}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onRemoveItem={(id) => setItems(prev => prev.filter(i => i.id !== id))}
            onRemoveBundle={removeBundle}
            onRenameBundle={renameBundle}
            onExtractFromBundle={extractFromBundle}
            onGroupSelected={groupSelected}
            onPrint={() => printHoard(hoardName, items, bundles, showLore)}
            onDownload={() => downloadTxt(hoardName, items, bundles, showLore)}
            onClearAll={() => {
              if (confirm("Clear the entire hoard?")) { setItems([]); setBundles([]); }
            }} />
        </section>
      </main>

      <footer className="aa-footer">
        <span>Furs &amp; Gems Loot Generator · Dungeon Brew</span>
        <span className="aa-orn">❦</span>
        <span>What the pelt fetched · what the gem weighed · what the hoard held</span>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
