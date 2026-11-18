#!/usr/bin/env python3
"""Import the Shadow of the Dragon Queen homebrew pages into the site.

    python tools/import_sotdq.py SOURCE_DIR

SOURCE_DIR holds the sotdq-*.md files. Each becomes a page under
docs/dragonlance/shadow-of-the-dragon-queen/, with three adjustments:

  - links between the files, and to other DungeonBrew pages, point at the
    site's own pages
  - a list starting right under a line of text gets the blank line MkDocs
    needs to see it as a list
  - lines that sit together (verse, stat-block headers, a run of quoted
    lines) keep their line breaks instead of merging into one paragraph

Every page except the index ends with the Fan Content Policy notice; the
index carries it in its credits.
"""

import os
import re
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO_ROOT, "docs", "dragonlance", "shadow-of-the-dragon-queen")

PAGES = {  # source file -> page path under OUT
    "sotdq-index.md": "index.md",
    "sotdq-prelude-kender-jail.md": "preludes/kender-in-kalaman-jail.md",
    "sotdq-prelude-cleric-vision.md": "preludes/clerics-vision.md",
    "sotdq-prelude-wizard-trial.md": "preludes/wizards-trial.md",
    "sotdq-prelude-squire-thrip.md": "preludes/squire-at-thrip.md",
    "sotdq-prelude-paladin-dream.md": "preludes/paladins-dream.md",
    "sotdq-knight-test.md": "knights-test.md",
    "sotdq-mage-test.md": "test-of-high-sorcery.md",
    "sotdq-lore-and-songs.md": "lore-and-songs.md",
    "sotdq-legacy-items.md": "legacy-items.md",
}
SITE_LINKS = {  # absolute DungeonBrew addresses -> docs/ paths
    "https://dungeonbrewofficial.github.io/DungeonBrew/supplements/lingering-injuries-and-insanity/":
        "supplements/lingering-injuries-and-insanity.md",
}
NOTICE = ("*This is unofficial Fan Content permitted under the Fan Content Policy. "
          "Not approved/endorsed by Wizards. Portions of the materials used are "
          "property of Wizards of the Coast. ©Wizards of the Coast LLC.*")

LIST_ITEM = re.compile(r"^\s*(?:[-*+]|\d+\.)\s")
BLOCK_START = re.compile(r"^\s*(?:#|\||---|___|```)")


def relink(text, page):
    here = os.path.dirname(os.path.join(OUT, page))

    def target(path):
        return os.path.relpath(path, here).replace(os.sep, "/")

    for src, dst in PAGES.items():
        text = text.replace(f"]({src})", f"]({target(os.path.join(OUT, dst))})")
    for url, dst in SITE_LINKS.items():
        text = text.replace(f"]({url})", f"]({target(os.path.join(REPO_ROOT, 'docs', dst))})")
    return text


def is_text(line):
    """A line of running text, as opposed to a list, table, heading, or rule."""
    body = line[1:].strip() if line.startswith(">") else line.strip()
    return bool(body) and not LIST_ITEM.match(body) and not BLOCK_START.match(body)


def tidy(lines):
    out = []
    for i, line in enumerate(lines):
        prev = out[-1] if out else ""
        if LIST_ITEM.match(line) and not line[:1].isspace() and prev.strip() \
                and not LIST_ITEM.match(prev) and not prev[:1].isspace():
            out.append("")
        nxt = lines[i + 1] if i + 1 < len(lines) else ""
        same_kind = line.startswith(">") == nxt.startswith(">")
        if is_text(line) and is_text(nxt) and same_kind:
            line = line.rstrip() + "  "  # hard line break
        out.append(line)
    return out


def main():
    src_dir = sys.argv[1]
    missing = [f for f in PAGES if not os.path.exists(os.path.join(src_dir, f))]
    if missing:
        sys.exit(f"import_sotdq: missing {', '.join(missing)}")
    for src, page in PAGES.items():
        with open(os.path.join(src_dir, src), encoding="utf-8") as f:
            text = f.read().rstrip("\n")
        lines = tidy(relink(text, page).split("\n"))
        if page != "index.md":
            lines += ["", "---", "", NOTICE]
        path = os.path.join(OUT, page)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            f.write("\n".join(lines) + "\n")
    print(f"Wrote {len(PAGES)} pages to {os.path.relpath(OUT, REPO_ROOT)}")


if __name__ == "__main__":
    main()
