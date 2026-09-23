# InstaCard — Final QA

## Status
**PASS for the BCA landing-page submission scope.**

Renderer:
- Playwright 1.55.0 / Chromium
- static capture mode: `?figma=1`

## Automated browser evidence

### Desktop — 1440 × 1000
- runtime errors: **0**
- horizontal overflow: **0**
- broken images: **0**
- Hero email input: **present**
- Footer email input: **present**
- six required benefits: **6 / 6 present**
- unsupported NFC claim: **absent**
- unsupported Apple/Google Wallet claim: **absent**
- unsupported OCR/Smart Scanner claim: **absent**
- fabricated 10,000+/50 countries/99% proof: **absent**

### Mobile — 390 × 844
- runtime errors: **0**
- horizontal overflow: **0**
- broken images: **0**
- Hero email input: **present**
- Footer email input: **present**
- six required benefits: **6 / 6 present**
- unsupported NFC/Wallet/OCR/fake stats: **absent**

Machine-readable report:
- `evidence/brief-qa.json`

Rendered evidence:
- `evidence/desktop-1440.png`
- `evidence/desktop-preview.jpg`
- `evidence/mobile-390.png`

Both desktop and mobile evidence were visually inspected after capture.

## Brief compliance checked
Required content present:
- original InstaCard logo
- anchor navigation
- “Say goodbye to business cards”
- corrected “Effortless contact exchange”
- Hero email + Get Early Access
- Simple — No app download required
- Accurate — No typos or OCR errors
- Multilingual — Save cards in languages you can’t type
- Integrated — Microsoft / Google / phone
- Green — Help save 173 trees a day
- Customized — professional templates / design your own
- Footer email + Get Early Access

## Evidence / claim note
“173 trees a day” and Microsoft/Google sync wording are retained because they are explicit client-brief requirements. They remain client-supplied claims and should be verified before production launch.

## Not claimed
- production email submission
- production integrations
- formal WCAG conformance
- real-device Safari/Android parity
- usability-test outcomes or conversion uplift
