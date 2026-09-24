# InstaCard — UX Research

## 1. Research purpose
This document supports the BCA UI/UX Designer test by connecting **competitive research → product opportunity → landing-page decisions**.

The three competitors required by the brief are:

1. **Bizz Card** — https://apps.apple.com/us/app/bizz-card/id732435448
2. **WorldCard Mobile** — https://apps.apple.com/us/app/worldcard-mobile/id333211045
3. **Linktree** — https://linktr.ee

Research scope is intentionally lightweight: the goal is not to rank competitors, but to understand adjacent product patterns and explain why InstaCard’s landing page is structured the way it is.

> Evidence rule: brief/assets are verified inputs. Public competitor observations are desk-research evidence. User pain points and behavioral implications are hypotheses unless validated by interviews or product analytics.

---

## 2. Competitive Landscape & Design Implications

| Competitor | Product pattern / role in the landscape | What this reveals for InstaCard | Landing-page implication |
|---|---|---|---|
| **Bizz Card** | Included by BCA as a direct digital-business-card reference. The supplied App Store URL could not be independently verified in the project research environment, so detailed feature claims are intentionally not asserted. | InstaCard still needs to communicate its value quickly against the familiar idea of a digital business card: simpler exchange, clearer identity, fewer steps for the recipient. | Keep **Simple / No app friction** near the top and show the outcome of sharing instead of feature-heavy copy. |
| **WorldCard Mobile** | App Store positioning centers on digitizing paper business cards through OCR/contact capture and multilingual recognition. | InstaCard can position itself as **digital-first**: share source-entered contact data directly instead of requiring the recipient to scan/retype a paper card. | Make **Accurate** and **Multilingual** concrete: no retyping/OCR dependency, preserve original contact information. |
| **Linktree** | Strong mental model of one shareable link that aggregates multiple destinations and social channels. | A digital business card can go beyond phone/email and become a compact professional identity. | Support the proposition **“One link. All of you.”** and group contact + social channels into one card experience. |

### Research takeaway

The three references represent three adjacent directions:

- **Digital card management** → Bizz Card
- **Paper-card capture / OCR** → WorldCard Mobile
- **One-link identity aggregation** → Linktree

InstaCard’s opportunity is to combine the useful mental models without copying their visual language:

> **A digital-first professional identity that is easy to share, easy to save, and easy to continue the conversation from.**

---

## 3. How competitor research changed the landing page

| Research implication | UI/content decision in the final landing |
|---|---|
| Recipient friction should be reduced | “No app needed to receive a card” appears close to the primary CTA |
| Scanning/retyping introduces avoidable friction | **Accurate** benefit explains direct data sharing instead of manual entry/OCR |
| One link can represent more than contact information | Hero/connection messaging includes social channels and “One link. All of you.” |
| A new product needs to explain the exchange model quickly | Added **How it works** with Make → Share → Keep the connection |
| Users need to see what the product looks like | Original supplied InstaCard product screenshots are shown in the landing and evidence section |
| Early Access has one conversion goal | Hero and closing section repeat the same primary CTA rather than introducing competing actions |

---

## 4. Pain points — design hypotheses

These are **design hypotheses**, not user-research findings.

### H1 — Contact information is fragmented
A professional identity can include phone, email, portfolio, LinkedIn, Instagram, WhatsApp and other channels. Sharing them one by one creates friction.

**Design response:** one card / one link / grouped channels.

### H2 — Recipient-side setup can interrupt a conversation
If a recipient has to download an app or create an account before viewing/saving a contact, the exchange becomes heavier.

**Design response:** browser-first recipient flow and no-app reassurance in the hero.

### H3 — Manual retyping or paper-card scanning can introduce errors
The more information that must be re-entered, the more opportunities there are for incorrect names, addresses or unfamiliar characters.

**Design response:** direct digital data sharing; **Accurate** and **Multilingual** benefits.

### H4 — Static paper cards age badly
Role, phone number, company, portfolio and social links can change after a card is printed.

**Design response:** emphasize reusable digital identity and customization rather than print replacement as the main product story.

---

## 5. Consumer insight hypotheses

### “I want the connection to continue, not just the card exchange.”
The useful outcome is not owning a card; it is being able to contact the right person later.

**Implication:** copy focuses on staying connected rather than “having a digital card.”

### “Don’t make the other person work for my contact.”
The recipient should not need to understand the product before saving the contact.

**Implication:** QR/link → public card → save/contact/social.

### “My professional identity is more than a phone number.”
Freelancers and client-facing professionals often need to share portfolio/social context along with contact details.

**Implication:** personalization and social-link support are part of the value proposition.

---

## 6. Positioning statement

**InstaCard is a digital-first business card experience that brings contact details and professional channels into one shareable identity, reducing the friction between meeting someone and staying connected.**

Concept:
**Less exchanging. More connecting.**

Art direction:
**Clear · Personal · Effortless**

---

## 7. Research guardrails

Do **not** present the following as verified facts without a cited source:

- “88% of business cards are thrown away”
- “30% of manually entered contacts contain errors”
- “10,000+ professionals”
- “50+ countries”
- “99% satisfaction”
- “Help save 173 trees a day” — preserved as a **brief-provided marketing claim**; not independently validated in this study.
- “Sync to Microsoft, Google or store directly on your phone” — treat **cloud sync** and **local device storage** as two distinct user benefits.
- current competitor pricing, download requirements, or feature limitations unless independently verified

The final BCA submission deliberately avoids fake social proof and unsupported market statistics.

---

## 8. Figma presentation takeaway

For the recruiter-facing Figma deck, this document should become **one concise frame**:

**03 — Competitive Landscape & Design Implications**

Recommended content:
- 3-column competitor matrix: Bizz Card / WorldCard Mobile / Linktree
- one “Opportunity for InstaCard” callout
- three direct arrows into design decisions:
  - **Less recipient friction → Simple**
  - **No retyping/OCR dependency → Accurate**
  - **One identity / many channels → Integrated + Customized**

Keep the full research detail in this file; keep the Figma frame scannable in 30–45 seconds.
