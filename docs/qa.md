# InstaCard — QA and delivery evidence

## Scope and result
**PASS for the static design handoff** on Chromium 153.0.8010.0, 22 September 2026. This is not a production-app, WCAG-conformance, cross-browser or usability certification. No cloud Factory QA run was claimed.

### Rendered checks
Both `/index.html` and `/design-notes.html` checked at widths **320, 390, 700, 701, 768, 950, 951, 1024, 1199, 1200, 1440**. This covers declared mobile/desktop and layout transition pressure points.

- 22 route/viewport checks: no horizontal page overflow, no broken images, no missing nonempty fragment targets.
- Axe WCAG 2/2.1 A/AA tagged checks: **0 reported violations** on both routes at 390 and 1440px; see `incomplete` entries in raw evidence for checks requiring manual judgment. Automated coverage is not a conformance claim.
- No observed page JavaScript errors or HTTP 4xx/5xx responses.
- Keyboard FAQ expand works with Enter.
- Mobile menu opens, closes via Escape and closes after anchor navigation.
- Email empty/invalid state sets `aria-invalid`; valid input explicitly reports no data sent or saved. Hero and footer both checked. Browser local/session storage remain empty.
- Primary CTA computed default and hover: white on #1465D9 / #0B4BA7; focus ring 3px solid. Reduced-motion transition resolves to 0s.
- `node --check script.js` and `git diff --check` passed.

### Actual screenshot inspection
Opened and visually inspected desktop hero/full page, mobile hero/full page, tablet full page, and desktop/mobile design notes. Review covered macro hierarchy, spacing, CTA visibility, logo, card composition, six benefits, footer contrast and responsive reading order.

Repairs based on evidence:
1. Moved the hero sharing annotation below the profile card so it no longer hides the Save contact label.
2. Replaced an unsupported Japanese sample glyph string with a supported French greeting; no missing-glyph boxes remain in the benefits illustration.
3. Set explicit dimensions on the Microsoft contact-integration motif grid cells.
4. Darkened the struck-through sample address from #89909A to #66717F after axe detected insufficient contrast. Reran the affected visual/automated checks; no remaining reported violations.

### Creative review
- **KEEP:** blue card identity, large direct headline, one CTA, static layered hero, product-specific benefit miniatures.
- **REVISE (completed):** annotation placement and sample-address contrast.
- **REMOVE:** unverified “173 trees/day”, fake social proof, auto-animation and unsupported character rendering.

### Evidence files
- `evidence/desktop-1440.png` — complete desktop landing design.
- `evidence/mobile-390.png` — complete mobile landing design.
- `evidence/desktop-hero.png`, `evidence/mobile-hero.png` — first viewport details.
- `evidence/tablet-768.png` — intermediate layout.
- `evidence/design-notes-1440.png`, `evidence/design-notes-390.png` — rationale/sitemap/flow presentation.
- `evidence/browser-report.json` — raw viewport/state/axe results.

### Limits and deferred work
No Safari/Firefox or real-device tests, assistive-technology session, formal text-enlargement audit, Lighthouse run, real user research or analytics. No live email, auth, payment, contact import/sync or print integration. App screens beyond the landing are proposed UX flows, not implemented pages. GitHub delivery is source/design review, not a production deployment.

The agent-browser CLI could not start its daemon in this environment. Rendered evidence instead uses Playwright with Chromium and axe. This fallback did not alter product code or weaken the checks.
