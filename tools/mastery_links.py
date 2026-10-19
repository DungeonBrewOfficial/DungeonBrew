"""Cross-reference links and condition tooltips for the generated Mastery pages.

sync_mastery.py renders every page, then hands them all to link_pages(),
which adds three kinds of link:

  sections    a chapter followed by a plain section name,
              "*Magic Mastery*, Connected Form" or "see Combat, Trauma Table",
              links the section name straight to that section
  references  italicized names the source already uses as pointers:
              *Magic Mastery*, *Magic Mastery, Duels*, *Resting*,
              *Wilderness (Beast Lore)*, *Expert Mastery*, and plain
              "see Resisting Spells" / "see the Mastery chapter"
  conditions  capitalized condition names (Tainted, Prone, ...), linked to
              their entry with the rules text as a hover tooltip

Each target is linked once per section, so repeated mentions in prose stay
plain. Table rows and list items are lookups, so each one links on its own.
A name that matches more than one heading is left unlinked and reported
rather than guessed.
"""

import os
import re
import unicodedata

# Chapter names as the source uses them -> the pages each chapter became.
# A bare reference links the first page; "Chapter, Section" searches them all.
CHAPTERS = {
    "magic mastery": ["magic/index", "magic/rites"],
    "mastery system": ["core/mastery"],
    "mastery": ["core/mastery"],
    "skill mastery": ["skills/index"],  # skill pages appended in link_pages()
    "weapon mastery": ["weapons/index", "weapons/style", "weapons/type"],
    "combat": ["core/combat"],
    "conditions": ["core/conditions"],
    "alchemy": ["alchemy/index"],  # concoction pages appended in link_pages()
    "equipment": ["equip/gear", "equip/coin", "equip/armor", "equip/weapons", "equip/animals"],
    "general rules": ["core/exploration", "core/durability", "char/factions"],
    "treasure": ["treasure/index", "treasure/furs", "treasure/gems", "treasure/art",
                 "treasure/great"],
    "monster manual": ["bestiary/rules", "bestiary/design"],
    "animal companion advancement": ["skills/companions"],
}
FORMS = {"fire", "sea", "sky", "stone", "primal", "profane", "sacred", "void"}
TRADITIONS = {"occult", "priscan", "telluric", "theurgic"}
# Mechanic nouns that head sections in several unrelated places. These link
# only from context (same page, or a named chapter), never on a lone match.
GENERIC = {"attack", "barriers", "casting", "components", "cost", "damage", "death",
           "defense", "duration", "durability", "healing", "health", "interaction",
           "movement", "protection", "resistance", "rest", "size", "speed",
           "structure", "terrain", "time"}
LEVEL = re.compile(r"(untrained|basic|skilled|expert|master|grand master) mastery")

CONDITIONS_PAGE = "core/conditions"
TOOLTIP_MAX = 600

HEADING = re.compile(r"^(#{1,6})\s+(.*?)\s*$")
PROTECTED = re.compile(r"`[^`\n]*`|\[[^\]\n]*\]\([^)\n]*\)|<[^>\n]+>")
ITALIC = re.compile(r"(?<![*\w])\*(?=[^\s*])([^*\n]{1,80}?)(?<=\S)\*(?![*\w])")
SEE = re.compile(r"\b([Ss]ee (?:the )?)([A-Z][\w'’-]*(?: (?:[A-Z][\w'’-]*|of|and|the|on))*)")
TABLE_RULE = re.compile(r"^\s*\|?\s*:?-{3,}")
LOOKUP_LINE = re.compile(r"^\s*(?:\||[-*+]\s|\d+\.\s)")  # table row or list item
IDCOUNT = re.compile(r"^(.*)_([0-9]+)$")
LEAD_BOLD = re.compile(r"^(?:<span[^>]*></span>)?\*\*[^*]+\*\*")


def slugify(text):
    """Python-Markdown's toc slugify, applied to the heading's visible text."""
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"<[^>]+>|[*`]", "", text)
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    text = re.sub(r"[^\w\s-]", "", text).strip().lower()
    return re.sub(r"[-\s]+", "-", text)


def unique(slug, used):
    """Python-Markdown's toc de-duplication: foo, foo_1, foo_2, ..."""
    while slug in used or not slug:
        m = IDCOUNT.match(slug)
        slug = f"{m.group(1)}_{int(m.group(2)) + 1}" if m else f"{slug}_1"
    used.add(slug)
    return slug


def plain(text):
    """Markdown to tooltip-safe plain text."""
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"<[^>]+>|\*+|`", "", text)
    text = text.replace('"', "'").replace("|", "/")
    return " ".join(text.split())


def body_lines(text):
    """Yield (index, line, linkable) for a page, skipping front matter and code."""
    lines = text.split("\n")
    start = 0
    if lines and lines[0] == "---":
        start = lines.index("---", 1) + 1
    fenced = False
    for i, line in enumerate(lines):
        if i < start:
            yield i, line, False
            continue
        if line.startswith("```"):
            fenced = not fenced
            yield i, line, False
            continue
        yield i, line, not fenced


class Site:
    def __init__(self, pages):
        self.pages = pages  # key -> {"path", "title", "text"}
        self.headings = {}  # key -> [(line index, depth, text, id)]
        self.by_text = {}   # casefolded heading text -> [(key, id)]
        self.by_title = {}  # casefolded page title -> key
        for key, page in pages.items():
            self.by_title.setdefault(page["title"].casefold(), key)
            short = re.sub(r"\s*\(.*\)$", "", page["title"])  # "Morphon (Eidos)"
            self.by_title.setdefault(short.casefold(), key)
            self.index_page(key)

    def index_page(self, key):
        used, found = set(), []
        for i, line, ok in body_lines(self.pages[key]["text"]):
            m = HEADING.match(line) if ok else None
            if m:
                found.append((i, len(m.group(1)), m.group(2), unique(slugify(m.group(2)), used)))
            for anchor in re.findall(r'<span id="([^"]+)"></span>', line):
                used.add(anchor)
        self.headings[key] = found
        for k in list(self.by_text):
            self.by_text[k] = [t for t in self.by_text[k] if t[0] != key]
        for _, depth, text, anchor in found:
            if depth > 1:
                self.by_text.setdefault(text.casefold(), []).append((key, anchor))

    def find(self, text, keys):
        for key in keys:
            for k, anchor in self.by_text.get(text.casefold(), []):
                if k == key:
                    return (key, anchor)
        for key in keys:
            if self.pages[key]["title"].casefold() == text.casefold():
                return (key, None)
        return None

    def resolve(self, text, cur):
        """Return (key, anchor), ("ambiguous", hits), or None."""
        text = " ".join(text.split())
        norm = text.casefold()

        m = re.fullmatch(r"(.+?),\s*(.+)", text)
        if m and m.group(1).casefold() in CHAPTERS:
            keys = CHAPTERS[m.group(1).casefold()]
            section = m.group(2)
            for part in (section, *reversed(section.split(":"))):
                hit = self.find(part.strip(), keys)
                if hit:
                    return hit
            return (keys[0], None)

        if LEVEL.fullmatch(norm):
            return self.find("Mastery Levels", ["core/mastery"])
        if norm in TRADITIONS:
            return self.find(f"{text} Magic", ["magic/index"])
        if norm in FORMS:
            return self.find(text, ["magic/index"])

        # "Wilderness", "Wilderness (Beast Lore)", "Trade Healer"
        m = re.fullmatch(r"(\w+)(?:\s*\((.+)\)|\s+(\w[\w ]*))?", text)
        skill = m and f"skill/{m.group(1).title()}"
        if skill in self.pages:
            sub = m.group(2) or m.group(3)
            if sub and "," not in sub and sub.casefold() != "all":
                hit = (self.find(sub, [skill]) or self.find(f"{sub} Discipline", [skill])
                       or self.find(sub, [k for k in self.pages if k.startswith("skill")]))
                if hit:
                    return hit
            if not m.group(3):  # "Wilderness Rest" is a kind of rest, not the skill
                return (skill, None)

        if norm in CHAPTERS:
            return (CHAPTERS[norm][0], None)

        hits = self.by_text.get(norm, [])
        local = [h for h in hits if h[0] == cur]
        if len(local) == 1:
            return local[0]
        if norm in self.by_title:
            return (self.by_title[norm], None)
        if norm in GENERIC:
            return None
        if len(hits) == 1:
            return hits[0]
        if len(hits) > 1:
            return ("ambiguous", hits)
        return None


def condition_entries(site):
    """Find each condition on the conditions page: name -> (anchor, tooltip).

    Chained conditions are the #### headings; simple conditions are bold-led
    paragraphs, which get a <span id> anchor added here.
    """
    page = site.pages[CONDITIONS_PAGE]
    lines = page["text"].split("\n")
    entries = {}
    section = None
    for i, line, ok in body_lines(page["text"]):
        m = HEADING.match(line) if ok else None
        if m:
            section = m.group(2)
            continue
        if section != "Simple Conditions":
            continue
        b = re.match(r"^\*\*([A-Z][a-z]+)\b", line)
        if b and b.group(1) not in entries:
            anchor = slugify(b.group(1))
            lines[i] = f'<span id="{anchor}"></span>' + line
            text = plain(re.sub(r"^\*\*[^*]+\*\*\s*", "", line))
            entries[b.group(1)] = (anchor, text)
    page["text"] = "\n".join(lines)
    site.index_page(CONDITIONS_PAGE)
    for name, (anchor, _) in entries.items():
        site.by_text.setdefault(name.casefold(), []).append((CONDITIONS_PAGE, anchor))

    parents = {"Negative Conditions", "Positive Conditions", "Neutral Conditions"}
    heads = site.headings[CONDITIONS_PAGE]
    parent = None
    for n, (i, depth, text, anchor) in enumerate(heads):
        if depth == 3:
            parent = text
        if depth != 4 or parent not in parents:
            continue
        end = heads[n + 1][0] if n + 1 < len(heads) else len(lines)
        block = [l for l in lines[i + 1:end] if l.strip() and l.strip() != "---"]
        resist = next((l.strip("* ") for l in block if re.fullmatch(r"\*[^*]+\*", l)), None)
        tiers = [l for l in block if l.startswith("**Tier ")]
        desc = next((l for l in block if not l.startswith(("*", "-"))), "")
        tier_text = " ".join(plain(t).replace("Tier ", "T", 1) for t in tiers)
        tip = plain(desc) + (f" {tier_text}" if tier_text else "")
        if len(tip) > TOOLTIP_MAX:
            names = [re.sub(r"^\*\*Tier \d+ — ([^:*]+).*", r"\1", t) for t in tiers]
            tip = plain(desc) + (f" Tiers: {', '.join(names)}." if names else "")
        if resist:
            tip = f"{resist}. {tip}"
        entries[text] = (anchor, tip)
    return entries


def link_pages(pages):
    """Add links in place. Returns (links, skipped) for the review report."""
    CHAPTERS["skill mastery"] = ["skills/index", *(k for k in pages if k.startswith("skill/"))]
    CHAPTERS["alchemy"] = ["alchemy/index", *(k for k in pages
                                              if k.startswith("alchemy/") and k != "alchemy/index")]

    site = Site(pages)
    conditions = condition_entries(site)
    names = "|".join(re.escape(c) for c in sorted(CHAPTERS, key=len, reverse=True))
    section_ref = re.compile(
        r"(\*(?i:" + names + r")\*|\b[Ss]ee (?:the )?(?i:" + names + r"))"
        r",\s+([A-Z][\w'’-]*(?:\s+[\w'’-]+){0,7})")
    unmatched = []
    cond_re = re.compile(r"\b(" + "|".join(sorted(conditions, key=len, reverse=True)) + r")\b")
    links, skipped = [], []

    for key, page in pages.items():
        lines = page["text"].split("\n")
        here = os.path.dirname(page["path"])
        section_anchor, section_text, seen = None, page["title"], set()
        current = {"line": ""}
        heading_ids = {i: (text, anchor) for i, _, text, anchor in site.headings[key]}

        def url(target, anchor):
            if target == key:
                return f"#{anchor}"
            rel = os.path.relpath(pages[target]["path"], here).replace(os.sep, "/")
            return rel + (f"#{anchor}" if anchor else "")

        def take(target, anchor, text, kind):
            """Decide whether this mention gets a link; record it if so."""
            if target == key and (anchor is None or anchor == section_anchor):
                return False
            if (target, anchor) in seen:
                return False
            seen.add((target, anchor))
            links.append({"page": key, "section": section_text, "text": text,
                          "target": target, "anchor": anchor, "kind": kind,
                          "context": context(current["line"], text)})
            return True

        def outside_protected(line, fn):
            """Apply fn only to text outside code, links, and HTML. On the
            conditions page, a paragraph's leading bold label is the entry's
            own name, so it stays plain too."""
            spans = [(m.start(), m.end()) for m in PROTECTED.finditer(line)]
            if key == CONDITIONS_PAGE:
                lead = LEAD_BOLD.match(line)
                if lead:
                    spans.append((0, lead.end()))
            merged = []
            for start, end in sorted(spans):
                if merged and start <= merged[-1][1]:
                    merged[-1][1] = max(merged[-1][1], end)
                else:
                    merged.append([start, end])
            pieces, last = [], 0
            for start, end in merged:
                pieces.append(fn(line[last:start]))
                pieces.append(line[start:end])
                last = end
            pieces.append(fn(line[last:]))
            return "".join(pieces)

        def link_sections(seg):
            def sub(m):
                chapter = re.sub(r"^\*|\*$|^[Ss]ee (?:the )?", "", m.group(1)).casefold()
                words = m.group(2).split()
                for n in range(len(words), 0, -1):
                    text = " ".join(words[:n])
                    hit = site.find(text, CHAPTERS[chapter])
                    if hit:
                        rest = m.group(2)[len(text):]
                        if take(hit[0], hit[1], text, "section"):
                            return f"{m.group(1)}, [{text}]({url(*hit)}){rest}"
                        return m.group(0)
                unmatched.append({"page": key, "section": section_text,
                                  "text": f"{m.group(1).strip('*')}, {m.group(2)}"})
                return m.group(0)
            return section_ref.sub(sub, seg)

        def link_italics(seg):
            def sub(m):
                text = m.group(1)
                if "[" in text or "]" in text or text in conditions:
                    return m.group(0)
                hit = site.resolve(text, key)
                before = re.search(r"\*([^*]+)\*,\s*$", seg[:m.start()])
                if before and before.group(1).casefold() in CHAPTERS:
                    hit = site.find(text, CHAPTERS[before.group(1).casefold()]) or hit
                after = seg[m.end():]
                inside = re.match(r"\s+in\s+\*([^*]+)\*", after)
                if inside and inside.group(1).casefold() in CHAPTERS:
                    hit = site.find(text, CHAPTERS[inside.group(1).casefold()])
                if hit and hit[0] == "ambiguous":
                    skipped.append({"page": key, "section": section_text, "text": text,
                                    "hits": hit[1]})
                    return m.group(0)
                if hit and take(hit[0], hit[1], text, "reference"):
                    return f"*[{text}]({url(*hit)})*"
                return m.group(0)
            return ITALIC.sub(sub, seg)

        def link_see(seg):
            def sub(m):
                words = m.group(2).split(" ")
                for n in range(len(words), 0, -1):
                    text = " ".join(words[:n])
                    if text in conditions:
                        break
                    hit = site.resolve(text, key)
                    if hit and hit[0] != "ambiguous":
                        if take(hit[0], hit[1], text, "reference"):
                            rest = m.group(2)[len(text):]
                            return f"{m.group(1)}[{text}]({url(*hit)}){rest}"
                        break
                return m.group(0)
            return SEE.sub(sub, seg)

        def link_conditions(seg):
            def sub(m):
                name = m.group(1)
                anchor, tip = conditions[name]
                if take(CONDITIONS_PAGE, anchor, name, "condition"):
                    return f'[{name}]({url(CONDITIONS_PAGE, anchor)} "{tip}")'
                return name
            return cond_re.sub(sub, seg)

        for i, line, ok in body_lines(page["text"]):
            if i in heading_ids:
                section_text, section_anchor = heading_ids[i]
                seen = set()
                continue
            if not ok or not line.strip() or TABLE_RULE.match(line) or line.startswith("!!!"):
                continue
            current["line"] = line
            lookup = LOOKUP_LINE.match(line)
            if lookup:  # a row or item links on its own, apart from the prose
                prose_seen, seen = seen, set()
            for step in (link_sections, link_italics, link_see, link_conditions):
                line = outside_protected(line, step)
            if lookup:
                seen = prose_seen
            lines[i] = line
        page["text"] = "\n".join(lines)

    return links, skipped, unmatched


def context(line, text, width=70):
    """The words around a mention, as plain text, for the review report."""
    line = plain(line)
    at = line.find(text)
    if at < 0:
        return ""
    start, end = max(0, at - width), at + len(text) + width
    return (("…" if start else "") + line[start:at] + f"**{text}**" +
            line[at + len(text):end] + ("…" if end < len(line) else ""))


def write_report(path, links, skipped, unmatched, pages):
    """A reviewable list of every link, grouped by where it points."""
    def where(target, anchor):
        return pages[target]["title"] + (f" › #{anchor}" if anchor else "")

    by_target = {}
    for l in links:
        by_target.setdefault((l["kind"], where(l["target"], l["anchor"])), []).append(l)

    out = ["# Mastery cross-reference report", "",
           f"{len(links)} links: "
           f"{sum(l['kind'] == 'section' for l in links)} chapter sections, "
           f"{sum(l['kind'] == 'reference' for l in links)} references, "
           f"{sum(l['kind'] == 'condition' for l in links)} conditions. "
           f"{len(skipped)} ambiguous mentions left unlinked.", ""]
    for kind, title in (("section", "Chapter sections"), ("reference", "References"),
                        ("condition", "Conditions")):
        out += [f"## {title}", ""]
        for (k, dest), items in sorted(by_target.items()):
            if k != kind:
                continue
            texts = sorted({l["text"] for l in items})
            out.append(f"**{dest}** ({len(items)}) from text: {', '.join(texts)}")
            out.append("")
            for l in items:
                where_from = f"{pages[l['page']]['title']} › {l['section']}"
                if kind != "condition" and l["context"]:
                    out.append(f"- {where_from}: {l['context']}")
                else:
                    out.append(f"- {where_from}")
            out.append("")
    out += ["## Chapter sections not found (chapter linked, section left plain)", ""]
    for u in unmatched:
        out.append(f"- {pages[u['page']]['title']} › {u['section']}: {u['text']}")
    out += ["", "## Left unlinked (ambiguous)", ""]
    for s in skipped:
        opts = "; ".join(where(*h) for h in s["hits"])
        out.append(f"- *{s['text']}* in {pages[s['page']]['title']} › {s['section']}: {opts}")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(out) + "\n")
