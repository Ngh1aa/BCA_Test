# InstaCard — Design Contract

## Scope / 22 September 2026
One landing-page UI option in English, desktop 1440 and mobile 390; complete proposed product sitemap and flows in Vietnamese. Static HTML is the design medium. No functional app prototype, real sign-up, payment, authentication, analytics or live integration is in scope.

## Source and audit
Target repository contained only .gitattributes at 93d189c. User brief and seven supplied assets are authoritative. Preserve the original SVG logo and blue identity. App screenshots establish create, edit/design, view/share, My Card, Premium and printing functions, not production availability or current prices.

UIUX Factory + skills_UIUX source: Ngh1aa/uiux-ai-workspace @ a0343ac3dba7fa10eb937664e2a076305ed453ff. Read root AGENTS, README, project-context template and prototype checklist; use Factory's external-collaborator lifecycle and design/evidence contracts. Route the full system through its documented smallest applicable graph: project truth → research → IA/journey → visual direction → conversion content → design system → responsive implementation → rendered visual QA. No claim that provider-backed Factory runtime or cloud QA ran. Prototype-only instructions yield to user's no-prototype requirement.

## Product argument
Audience hypothesis: independent professionals, client-facing staff, freelancers and people networking across languages. Owner goal: qualified early-access interest. User goal: understand the product and exchange contact details with little friction. Primary landing journey: understand → see how sharing works → evaluate benefits/personalization → resolve questions → early-access intent.

Concept: **Less exchanging. More connecting.** Three adjectives: clear, personal, effortless. A card is a portable professional identity, not just a phone number. Signature: oversized blue keyword typography paired with layered business-card surfaces and a legible digital-profile UI.

## References → synthesis
- Linktree: one destination for multiple social channels. Adopt information grouping, reject creator-commerce breadth.
- HiHello: clarify that recipients do not need an app. Adopt benefit proximity to CTA, reject borrowed customer counts/logos.
- Blinq: QR/link → public profile → save contact. Adopt visible task outcome, reject NFC/wearable promises absent from brief.
- WorldCard Mobile: OCR-based card capture and multilingual recognition. Differentiate with source-entered data; do not imply translation.
- Bizz Card: supplied App Store URL could not be retrieved; no feature claim based on it.
- 21st.dev Ruixen CardStack: adapt layered composition as a static card arrangement; reject autoplay/drag, no third-party source code copied.

## Composition contract
| Surface | Question | First anchor / structure | Mobile |
|---|---|---|---|
| Hero | What is this and why care? | 52/48 split, large headline, email CTA, product card stack | Copy/CTA first, recomposed compact card scene below |
| How it works | How do we connect? | Three numbered steps with ruled dividers | Vertical steps |
| Benefits | What friction disappears? | Six benefits, varied product-led tiles | Single column; keep all six |
| Personalization | Can it feel like me? | Pale-blue field, supplied app view + typography | Copy above screenshot |
| FAQ and closing | What remains unclear? | Simple native disclosure rows, large blue signup band | Full-width form, no forced modal |

## Foundation
White page; ink #142333; muted #536272; primary #1465D9 (darker CTA for contrast); brand light #EAF4FF; borders #DDE5ED. Brand gradient remains in supplied logo, not a page-wide effect. Typography: locally bundled Bricolage Grotesque Bold for expressive headings and Instrument Sans for readable body text (OFL licenses included). H1 80 desktop / 57 mobile, H2 48 / 34, body 17, labels 14. Max content 1248px, gutters 64 desktop / 24 mobile, 8px spacing base. Card radii 18–28; controls 12. Only short hover/focus transitions, no autonomous motion.

## Reality, copy and constraints
Preserve requested headline and CTA; correct “Effortless” spelling. All six brief benefits present. Replace unsupported 173 trees/day with qualitative paper reduction. No invented testimonials, partner badges, uplift, usage counts or launch date. Microsoft/Google sync is a brief requirement and planned capability, not verified integration. Screenshot prices are historical brief context, not landing pricing. Email fields illustrate the conversion design; clearly explain that this design preview does not collect data. Demo card identity is fictional, uses reserved example.com; visual controls in card are noninteractive presentation.

## Acceptance / QA
Inspect actual desktop/mobile pixels; validate 320, 390, 768, 1024 and 1440 layouts, image loading, anchor targets, CTA hover/focus contrast, FAQ keyboard behavior, and email preview disclosure. All flows include recovery. No user testing or business-results claims. Keep product UI out of UX documentation navigation except a discreet footer design-notes link. No production launch without a real signup endpoint and reviewed privacy copy.
