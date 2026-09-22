# InstaCard — BCA UI/UX Design Test

Static landing page built with **plain HTML, CSS and JavaScript** and prepared for **GitHub Pages**.

## Runtime files

- `index.html` — landing page markup
- `styles.css` — responsive styling
- `script.js` — mobile navigation only
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

- `design-notes.html` — recruiter-facing concept, competitor, sitemap and user-flow presentation
- `docs/ux-research.md` — competitive landscape, pain-point hypotheses and design implications
- `docs/ux-strategy.md` — UX strategy and complete user flows
- `docs/figma-frame-inventory.md` — final list of frames to convert/build in Figma
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
- the original client-provided `logo.svg` remains the brand vector used in the landing;
- the six legacy app screenshots remain in `assets/` and `design-notes.html` as **reference evidence only**;
- the landing hero and Card Builder visuals are rebuilt as HTML/CSS/SVG so the main UI does not flatten into screenshot bitmaps.

This reduces flattening in tools such as html.to.design / Dmaya, while preserving the GitHub Pages static deployment.


## Final Figma frame list

The BCA submission should be converted into these recruiter-facing frames:

1. Project Overview
2. Problem & Consumer Insight
3. **Competitive Landscape & Design Implications**
4. Sitemap
5. User Flow — Early Access
6. User Flow — Core Product
7. Concept & Visual Direction
8. Final Landing — Desktop 1440
9. Final Landing — Mobile 390

Full conversion notes: `docs/figma-frame-inventory.md`.


## Final visual direction

**Original logo → new marketing visuals → UX rationale → polished desktop/mobile UI.**

The supplied app screenshots are product-context evidence, not mandatory landing-page artwork. The final landing uses a custom editable digital identity / recipient preview / QR-share composition in the hero and an editable Card Builder concept in the personalization section.
