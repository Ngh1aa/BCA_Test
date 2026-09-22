# InstaCard — BCA UI/UX design test

One landing-page visual direction for desktop and mobile, plus the proposed whole-product UX architecture. Built from the supplied InstaCard brief/assets with UIUX Factory + skills_UIUX research/design/QA governance and 21st.dev composition research.

## Review
- `index.html` — responsive landing page, English marketing content.
- `design-notes.html` — visual design rationale, research, sitemap and flow overview in Vietnamese.
- [UX strategy, complete sitemap and user flows](docs/ux-strategy.md).
- [Design contract and workflow provenance](docs/design-contract.md).
- [QA evidence](docs/qa.md).
- `evidence/` — desktop/mobile captures and browser report.

## Open locally
No build or runtime dependencies are required.

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/` or open `index.html` directly. Relative assets support GitHub Pages subpaths and static hosting. Do not enable live signup from this static build without a reviewed privacy policy and real endpoint.

## Scope and reality
This is a design deliverable, **not a working app prototype**. Menu anchors, responsive navigation, FAQs and email-format feedback assist review. Email is never transmitted or stored. All app routes in the UX document are proposals. No payment, authentication, contact sync or printing integration is implemented. No claims of user testing or business uplift.

Logo and original screenshots belong to the client. Fictional hero details use reserved example.com addresses. Typefaces have bundled OFL licenses; Lucide icons have their bundled license. 21st.dev is attributed as visual-pattern inspiration; its component source and example assets were not copied.
