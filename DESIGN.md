# Design System: Noctune (Editorial Night Dark)

> Visual Identity & Architectural Specification for Noctune Landing Page.
> Adapted from the Resend editorial design system (awesome-design-md) and calibrated for Noctune.
> Dial: ENERGY 2 / RHYTHM 3 / MOTION 1

---

## 1. Visual Theme & Atmosphere

Noctune's visual identity is a nocturnal listening room: deep, disciplined, and acoustically warm. The canvas is near-pure void black (`#000000`), with structural cards rendered in ink-black (`#0a0a0c`) and elevated components in obsidian (`#101012`). Hairline borders (`rgba(255, 255, 255, 0.07)`) provide crisp architectural division without heavy box shadows or blur effects.

Typography establishes print-magazine authority: an oversized display serif (`Fraunces` / `Instrument Serif`) commands the hero and major chapter headers, evoking classical nocturnes and acoustic precision. It is balanced by a high-legibility neo-grotesk sans (`Hanken Grotesk`) for body copy and `JetBrains Mono` for technical metrics and keyboard hotkeys.

The singular chromatic accent is Noctune Gold (`#eab14c` / `rgb(234, 177, 76)`), deployed strictly at functional moments (playback progress, active audio visualizer bars, and verified stream status). The primary CTA is solid off-white (`#fcfdff`) with dark ink text (`#0a0a0c`), delivering instant conversion confidence without neon gimmickry.

---

## 2. Color Palette & Semantic Tokens

### Canvas & Surfaces
- `canvas-base`: `#000000` (deep background, no colored gradient mesh blobs)
- `surface-card`: `#0a0a0c` (section containers, feature blocks)
- `surface-elevated`: `#101012` (modal overlays, active tabs, dropdown menus)
- `surface-hover`: `#16171a` (interactive state background)
- `surface-subtle`: `rgba(255, 255, 255, 0.03)` (inset code and keycap frames)

### Hairlines & Dividers
- `hairline-subtle`: `rgba(255, 255, 255, 0.07)` (standard structural border)
- `hairline-strong`: `rgba(255, 255, 255, 0.14)` (hover, focus ring, and active card edge)
- `hairline-gold`: `rgba(234, 177, 76, 0.35)` (playback active indicator)

### Ink & Typography
- `ink-primary`: `#fcfdff` (headlines, primary labels, high-emphasis text)
- `ink-secondary`: `rgba(252, 253, 255, 0.70)` (readable explanatory copy, descriptions)
- `ink-muted`: `rgba(252, 253, 255, 0.42)` (timestamps, footnotes, inactive states)
- `ink-disabled`: `rgba(252, 253, 255, 0.22)` (inactive borders and ghost controls)

### Brand Accent & Functional States
- `accent-gold`: `#eab14c` / `rgb(234, 177, 76)` (Noctune brand accent)
- `accent-gold-dim`: `#c8923a` / `rgb(200, 146, 58)` (gold hover/border state)
- `accent-gold-glow`: `rgba(234, 177, 76, 0.15)` (restrained audio visualizer backdrop)
- `accent-emerald`: `#34d399` (verified stream match, local sqlite indicator)
- `accent-danger`: `#f87171` (destructive action, connection error)

---

## 3. Typography Hierarchy

| Role | Font Family | Size | Weight | Tracking | Usage |
|---|---|---|---|---|---|
| Display Mega | `Fraunces`, serif | 56px-76px | 400 | -1.5px | Hero main headline |
| Section Headline | `Fraunces`, serif | 36px-48px | 400 | -1.0px | Major narrative chapter titles |
| Subhead / Lead | `Hanken Grotesk`, sans-serif | 18px-20px | 400 | -0.2px | Editorial intro text below headlines |
| Section Kicker | `JetBrains Mono`, monospace | 12px | 500 | +1.5px | Monospace uppercase category marker |
| Body Text | `Hanken Grotesk`, sans-serif | 15px-16px | 400 | 0 | Standard narrative and feature copy |
| Caption / Meta | `Hanken Grotesk`, sans-serif | 13px-14px | 400 | 0 | Metadata, helper labels, notes |
| Code / Keycaps | `JetBrains Mono`, monospace | 12px-13px | 500 | 0 | Keyboard shortcuts, telemetry, specs |

---

## 4. Component Rules

### Buttons
- **Primary CTA:** Solid off-white `#fcfdff`, text color `#0a0a0c`, font weight 600, border-radius 6px (or pill where context demands), subtle hover lift without heavy colored glow.
- **Secondary CTA:** Hairline border `rgba(255, 255, 255, 0.14)` on `#0a0a0c`, text color `#fcfdff`, hover border `rgba(255, 255, 255, 0.3)`.
- **Tertiary / Link:** Text link with subtle underline on hover, gold color on interactive music links.

### Containers & Frames
- Clean 8px-12px border radius on cards and modal frames.
- Hairline borders: `1px solid rgba(255, 255, 255, 0.07)`.
- Zero floating shadows; elevation communicated via surface lightness step (`#000000` -> `#0a0a0c` -> `#101012`).

### Anti-Slop Guardrails
- No generic bento grid mosaics. Layout flows as an asymmetric narrative.
- Zero em dashes (`—`) in UI copy.
- No decorative pulsing dots or capsule badges with "AI Powered".
- Single accent color: Noctune Gold reserved for real playback states.
