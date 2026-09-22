# InstaCard — BCA UI/UX Design Test

Static landing page built with **plain HTML, CSS and JavaScript** and prepared for **GitHub Pages**.

## Runtime files

- `index.html` — landing page markup
- `styles.css` — responsive styling
- `script.js` — mobile navigation and form interaction
- `assets/` — logo, screenshots and local fonts
- `.nojekyll` — keeps GitHub Pages in plain static-file mode

There is no React, Vue, Next.js, Vite, npm build step or framework runtime.

## Run locally

```bash
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173/
```

## Deploy with GitHub Pages

This repository is safe to publish from the repository root and all CSS, JS, fonts and images use relative paths so they work under the project subpath:

```text
https://ngh1aa.github.io/BCA_Test/
```

In GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**.
4. Save.

No build command or output directory is required.

## Design documentation

- `design-notes.html` — concept, sitemap and user-flow presentation
- `docs/ux-strategy.md` — UX strategy and complete user flows
- `docs/design-contract.md` — design/system decisions
- `docs/qa.md` — QA notes
- `evidence/` — desktop/mobile visual evidence

## Scope

The landing page is a static UI deliverable. Early-access email submission is intentionally presentation-only and does not transmit or store data.


## Figma conversion

The public landing is intentionally structured for HTML → Figma import:

- marketing and product copy stays as real DOM text;
- native forms and `details/summary` were replaced with static editable layout blocks;
- absolute positioning and decorative transforms were removed from the landing;
- inline SVG is used for vector icons;
- the original client-provided Logo.svg and six PNG product screenshots are preserved byte-for-byte and remain visible as image/vector layers;
- screenshot pixels are intentionally not rebuilt or modified; only the surrounding HTML/CSS is conversion-safe.

This reduces flattening in tools such as html.to.design / Dmaya, while preserving the GitHub Pages static deployment.
