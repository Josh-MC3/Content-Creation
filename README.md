# The Creator Blueprint

A two-page, no-build, static site for building a YouTube-first content business from zero — merged from three separate research prompts into one de-duplicated, phase-by-phase guide, plus a companion tool-pricing reference.

**Page 1 — `index.html` (The Blueprint):** 8 phases, from niche validation through a 90-day launch plan, including three "live demo" blocks showing exactly what AI-assisted niche scoring, scriptwriting, and SEO metadata output looks like in practice.

**Page 2 — `tools.html` (The Tool Stack):** a standalone reference page with a sticky top tab bar (Home + 4 categories) covering Voice Cloning & Audio, Video Editing, AI Voice for Content, and AI Video Creation — ten tools each, every pricing tier, plus a "which one should I actually pick" decision box per category.

## File structure

```
creator-blueprint/
├── index.html      # The Blueprint — 8 phases, anchor-linked sections
├── tools.html      # The Tool Stack — top-bar tabs, linked from index.html
├── css/
│   └── styles.css  # All styling for both pages (dark "editing console" theme)
└── js/
    ├── main.js     # index.html only: scrollspy nav, reading-progress, mobile nav
    └── tools.js     # tools.html only: top-bar tab switching
```

No build step, no dependencies to install, no framework. It's plain HTML/CSS/JS and loads two Google Fonts at runtime.

## Publishing to GitHub Pages

1. Create a new repository on GitHub (or use an existing one).
2. Upload `index.html`, `tools.html`, the `css/` folder, and the `js/` folder to the repository root, preserving the folder structure.
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch**, pick the `main` branch and `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two. `tools.html` will be reachable at `.../tools.html` and is already linked from the Blueprint's mobile menu, sidebar, and end-of-Phase-8 nav.

No other configuration is required — there's no `package.json`, no build command, and no environment variables.

## Updating content

**Blueprint (`index.html`):** content lives in eight `<section class="phase-section" id="phase-N">` blocks. Each phase is self-contained. The sidebar navigation and mobile nav menu are separate lists near the top of the file and need their own edits if you add or rename a phase.

**Tool Stack (`tools.html`):** each category is a `<div class="tab-panel" data-panel="...">` block containing a decision box and a pricing table. The top bar buttons (`<button class="tools-tab" data-tab="...">`) must keep matching `data-tab`/`data-panel` values for `tools.js` to switch panels correctly. Adding a fifth category means adding both a new top-bar button and a new panel with the same identifier.

## Notes on the content

Platform rules, pricing, and benchmark figures cited throughout (YouTube Partner Program thresholds, CTR benchmarks, tool pricing) reflect publicly available information as of mid-2026 and are explicitly flagged on both pages as subject to change. Verify current thresholds directly in YouTube Studio and on each tool's pricing page before making decisions based on them.
