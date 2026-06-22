# The Creator Blueprint

A single-page, no-build, static field manual for building a YouTube-first content business from zero — merged from three separate research prompts into one de-duplicated, phase-by-phase guide.

**Live structure:** 8 phases, from niche validation through a 90-day launch plan, including three "live demo" blocks showing exactly what AI-assisted niche scoring, scriptwriting, and SEO metadata output looks like in practice.

## File structure

```
creator-blueprint/
├── index.html      # All content — single page, anchor-linked phases
├── css/
│   └── styles.css  # All styling (dark "editing console" theme)
└── js/
    └── main.js     # Scrollspy nav + reading-progress indicator + mobile nav
```

No build step, no dependencies to install, no framework. It's plain HTML/CSS/JS and loads two Google Fonts at runtime.

## Publishing to GitHub Pages

1. Create a new repository on GitHub (or use an existing one).
2. Upload these three items — `index.html`, the `css/` folder, and the `js/` folder — to the repository root, preserving the folder structure.
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch**, pick the `main` branch and `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

No other configuration is required — there's no `package.json`, no build command, and no environment variables.

## Updating content

All page content lives in `index.html`, organized into eight `<section class="phase-section" id="phase-N">` blocks. Each phase is self-contained — you can edit the text inside one phase without affecting the others. The sidebar navigation and mobile nav menu are separate lists near the top of the file and need their own edits if you add or rename a phase.

## Notes on the content

Platform rules, pricing, and benchmark figures cited throughout (YouTube Partner Program thresholds, CTR benchmarks, tool pricing) reflect publicly available information as of mid-2026 and are explicitly flagged in the page itself as subject to change. Verify current thresholds directly in YouTube Studio and on each tool's pricing page before making decisions based on them.
