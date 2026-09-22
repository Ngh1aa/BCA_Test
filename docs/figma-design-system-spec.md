# InstaCard — Figma Design System Spec

## Purpose
This file is the source for the Figma **UI Foundations** and **Components & UI Styles** frames.

These values are a **retained design-system snapshot from the previous implementation**. Revalidate them against the new local implementation after upload before final Figma delivery.

---

## 1. Typography

### Font families
- **Display / headings:** Bricolage Grotesque Bold
- **Body / UI:** Instrument Sans

Font family references retained for Figma:
- Bricolage Grotesque Bold
- Instrument Sans Regular
- Instrument Sans Bold

The previous local font files were intentionally removed with the old implementation. Re-add font assets only if the new code requires them.

### Text styles

| Figma style | Font | Weight | Size | Line height | Tracking | Usage |
|---|---|---:|---:|---:|---:|---|
| Display / Hero | Bricolage Grotesque | 700 | 58–92px responsive | .98 | -4.5% | Hero headline |
| Heading / H1 Base | Bricolage Grotesque | 700 | 78px | 1.05 | -4.5% | Large presentation heading |
| Heading / H2 | Bricolage Grotesque | 700 | 48px | 1.05 | -4.5% | Section heading |
| Heading / H3 | Instrument Sans / Bricolage by section | 700 | 24–25px | 1.2 | -2.5% when Bricolage | Card/section title |
| Body / Large | Instrument Sans | 400 | 18px | 1.65 | 0 | Hero/supporting copy |
| Body / Default | Instrument Sans | 400 | 17px | 1.6 | 0 | Base body |
| Body / Medium | Instrument Sans | 400 | 15–16px | 1.6–1.75 | 0 | Section/card body |
| Body / Small | Instrument Sans | 400 | 13–14px | 1.45–1.65 | 0 | Supporting UI copy |
| UI / Button | Instrument Sans | 700 | 15px | Auto | 0 | Primary CTA |
| UI / Nav | Instrument Sans | 400 | 14px | Auto | 0 | Navigation |
| UI / Label | Instrument Sans | 700 | 9–12px | Auto | 8–12% | Eyebrow/status/metadata |
| UI / Caption | Instrument Sans | 400 | 12px | Auto | 0 | Form caption |

### Responsive type notes
- Hero desktop: `clamp(58px, 6.2vw, 92px)`
- Hero mobile: 52px
- H2 mobile: 38px
- Closing CTA desktop: 66px
- Closing CTA mobile: 48px
- Closing CTA ≤390px: 42px

---

## 2. Color tokens

| Token | Value | Usage |
|---|---|---|
| Color / Ink | `#142333` | Headings / primary text |
| Color / Muted | `#536272` | Body text |
| Color / Primary Blue | `#1465D9` | CTA / icon / highlight |
| Color / Blue Dark | `#0B4BA7` | Primary hover |
| Color / Hero BG | `#DFF0FF` | Hero background |
| Color / Pale Blue | `#EAF4FF` | Preview/light branded surface |
| Color / Surface | `#F7F9FB` | Alternate section |
| Color / Border | `#DDE5ED` | Generic divider/border |
| Color / White | `#FFFFFF` | Cards / button text |
| Color / Green Surface | `#EDF5EC` | Sustainability benefit |
| Color / Closing Blue | `#105CC8` | Closing CTA section |
| Color / Dark CTA | `#122F4F` | Dark CTA |
| Color / Dark CTA Hover | `#0A1E35` | Dark CTA hover |
| Color / Orbit Fill | `#D4EBFF` | Hero decorative circle |
| Color / Orbit Line | `#B9DEF8` | Hero decorative circle border |

---

## 3. Layout & grid

- Desktop content width: **92%**, max **1248px**
- Mobile content width: **88%**
- Standard section padding: **104px vertical**
- Mobile section padding: **68px vertical**
- Desktop header: **90px**
- Mobile header: **74px**
- Key breakpoints:
  - 1100px
  - 760px
  - 390px

Recommended Figma layout grid:
- Desktop 1440: 12 columns, 24px gutter, centered 1248px max content
- Mobile 390: 4 columns, 16px gutter

---

## 4. Spacing scale

Primary spacing values currently used:

`4 · 6 · 8 · 9 · 10 · 12 · 14 · 16 · 18 · 20 · 22 · 24 · 28 · 30 · 34 · 36 · 42 · 44 · 48 · 52 · 68 · 76 · 78 · 90 · 104`

Recommended Figma variables:
- Space / 1 = 4
- Space / 2 = 8
- Space / 3 = 12
- Space / 4 = 16
- Space / 5 = 20
- Space / 6 = 24
- Space / 7 = 28
- Space / 8 = 32
- Space / 9 = 40
- Space / 10 = 48
- Space / 12 = 64
- Space / 16 = 80
- Space / Section = 104

---

## 5. Radius scale

| Token | Value |
|---|---:|
| Radius / XS | 8px |
| Radius / SM | 10px |
| Radius / MD | 12px |
| Radius / LG | 18px |
| Radius / XL | 20px |
| Radius / 2XL | 28px |
| Radius / Pill | 999px |
| Radius / Circle | 50% |

Current special values also include 7px, 9px, 11px.

---

## 6. Shadow / effects

| Style | Value | Usage |
|---|---|---|
| Effect / Hero | `0 24px 60px rgba(23,58,92,.08)` | Hero/product visual |
| Effect / Builder | `0 22px 54px rgba(23,58,92,.06)` | Card Builder |
| Effect / Profile Card | `0 16px 30px rgba(23,58,92,.07)` | Mini profile |
| Effect / Hover Card | `0 18px 34px rgba(23,58,92,.06)` | Hover elevation |
| Effect / Sharing Pill | `0 8px 20px rgba(23,58,92,.03)` | Sharing chips |

---

## 7. Buttons

### Primary
- Min height: 54px
- Padding: 14px 22px
- Radius: 12px
- Background: `#1465D9`
- Text: white
- Font: Instrument Sans 15px / 700
- Icon/text gap: 14px
- Hover: `#0B4BA7`

### Small
- Min height: 46px
- Padding: 10px 17px

### Dark
- Background: `#122F4F`
- Hover: `#0A1E35`
- Text: white

---

## 8. Input / Early Access field

- Min height: 56px
- Padding: 0 16px
- Radius: 11px
- Background: white
- Border: `#CBD6E1`
- Text: `#6B7F92`
- Font: 14px
- Leading icon: 18px

---

## 9. Cards

### Benefit card
- Min height: 380px
- Padding: 28px
- Radius: 20px
- Background: white
- Border: `#E0E7ED`

Blue variant:
- BG `#E9F3FF`
- Border `#D9E9FC`

Green variant:
- BG `#EDF5EC`
- Border `#DFE8DD`

### Builder outer card
- Padding: 24px
- Radius: 28px
- BG: `#F4F8FC`
- Border: `#DBE5EE`

### Builder inner panels
- Radius: 18px
- BG: white
- Border: `#DCE6EE`

### Mini profile card
- Max width: 290px
- Padding: 20px
- Radius: 18px
- BG: white
- Border: `#DCE7F1`

---

## 10. Chips / pills

### Sharing pill
- Min height: 48px
- Padding: 0 16px
- Radius: 999px
- BG: white
- Border: `#DBE5EE`
- Text: `#3B5268`
- Font: 13px
- Icon gap: 11px

### Channel chip
- Padding: 6px 8px
- Radius: 999px
- Border: `#DDE6EE`
- Text: `#45647F`
- Font: 8px / 700

### Builder status
- Padding: 6px 9px
- Radius: 999px
- Border: `#CFE0EF`
- Text: `#1465D9`
- Font: 9px / 700

---

## 11. Icon system

Base icon:
- 21 × 21px
- Outline
- Fill: none
- Stroke: currentColor
- Stroke width: 1.7px
- Line cap: round
- Line join: round

Variants:
- Email: 18px
- Hero reassurance: 17px
- Sharing: 20px

Step icon:
- 42 × 42px
- Radius: 10px
- Border: `#CFE0F0`
- Color: `#1465D9`

Benefit label icon:
- 30 × 30px
- Radius: 8px
- Border: `#CFDDEA`

Mobile menu:
- 44 × 44px
- Radius: 10px
- Border: `#DDE5ED`

---

## 12. Component states

Document these in Figma:
- Primary button: default / hover
- Dark button: default / hover
- Navigation link: default / hover
- Benefit card: default / hover lift
- Sharing pill: default / hover
- Channel chip: default / hover
- Theme swatch: default / hover
- Mobile menu: closed / open
- Motion note: default animated runtime vs `?figma=1` static conversion mode

---

## Figma variables / styles to create

### Variables
- Colors
- Spacing
- Radius

### Text Styles
- Display / Hero
- Heading / H1
- Heading / H2
- Heading / H3
- Body / Large
- Body / Default
- Body / Medium
- Body / Small
- UI / Button
- UI / Nav
- UI / Label
- UI / Caption

### Effect Styles
- Hero
- Builder
- Profile Card
- Hover Card
- Sharing Pill

### Components
- Button / Primary
- Button / Small
- Button / Dark
- Field / Early Access
- Card / Benefit
- Card / Builder
- Card / Profile
- Chip / Sharing
- Chip / Channel
- Badge / Status
- Icon Box / Step
