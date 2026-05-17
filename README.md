# Dheghom Website - Phase 1: Scaffolding + Introduction

## What You've Got

This is your Dheghom documentation site, built with MkDocs and the Material theme.

**Status:** Phase 1 Complete
- ✅ Site framework set up
- ✅ Navigation structure in place
- ✅ Introduction fully converted and formatted
- ⏳ Other chapters are placeholders (we'll add them in future sessions)

## How to Preview It Locally

1. Open a terminal/command prompt
2. Navigate to this folder
3. Run: `mkdocs serve`
4. Open your browser to: `http://127.0.0.1:8000`

The site will auto-reload as you make changes.

## How to Deploy It

### Option 1: Netlify Drop (Easiest - No Git)
1. Go to https://app.netlify.com/drop
2. Drag the entire `site` folder onto the page
3. Get a live URL instantly
4. Free, permanent hosting

### Option 2: GitHub Pages (Better for Community Contributions)
1. Create a new GitHub repo called `dheghom-world`
2. In your terminal, navigate to this folder
3. Run these commands (I'll walk you through this when you're ready):
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/dheghom-world.git
   git push -u origin main
   ```
4. Enable GitHub Pages in repo settings
5. Site goes live at `your-username.github.io/dheghom-world`

## File Structure

```
dheghom-site/
├── mkdocs.yml          # Site configuration (navigation, theme, etc.)
├── docs/               # Your content (markdown files)
│   ├── index.md        # Home page (Introduction)
│   ├── history.md      # Placeholder
│   ├── gazetteer.md    # Placeholder
│   ├── factions.md     # Placeholder
│   ├── characters.md   # Placeholder
│   ├── equipment.md    # Placeholder
│   └── monsters.md     # Placeholder
└── site/               # Built site (generated HTML - this is what you deploy)
```

## Next Steps

When you're ready, we'll tackle the next chapter. Options:
1. **History** - The big cosmology/timeline doc
2. **Gazetteer** - This will need the most work (breaking nations into individual pages)
3. **Factions** - Smaller, easier to add
4. **Character Options** - If you want player content first

Just let me know which chapter you want next, and we'll chunk through it without burning all your tokens.

## Notes

- The site is fully searchable (search bar in the top right)
- Dark theme by default (fits the grimdark vibe)
- Mobile-friendly
- All content is in plain markdown - easy to edit

---

**Built by Claude on April 20, 2026**
