# InTelluric Visual System Contract

Status: **binding**

This contract translates the supplied public-site and Pitch Synthase images into one reusable design grammar. It governs shared chrome. Unique diagrams, hero compositions, slide artwork, record content, and workflow-specific controls retain their page-specific geometry.

## Contract viewports

- Desktop baseline: `1448 × 1086`
- Mobile baseline: `864 × 1536`

Future visual-regression fixtures must preserve these native dimensions in addition to ordinary responsive coverage.

## Design thesis

The public site is an architectural lobby. Pitch Synthase is a precision instrument built inside the same practice.

The system communicates engineered permanence through dark mineral surfaces, brushed-alloy edges, sapphire-crystal light, disciplined typography, and inspectable technical artifacts. It must never become neon cyberpunk, glassmorphic SaaS, generic enterprise blue, or decorative steampunk.

## Canonical shared decisions

### Canvas

- One near-black blue mineral canvas is universal.
- Subtle radial illumination and technical-grid traces provide depth.
- Texture remains below text contrast and never behaves as an illustration.

### Material hierarchy

1. **Canvas** — deepest mineral field.
2. **Frame** — primary page or workflow boundary with a subdued copper-alloy hairline.
3. **Panel** — blue-black inset material with a neutral alloy internal border.
4. **Elevated panel** — stronger edge light and shadow, reserved for active work.
5. **Crystal control** — luminous interactive surface used for the primary action and selected states.

No repeated object receives a unique material recipe at page level.

## Material construction

Depth is produced by ordered optical layers, not by a lone drop shadow. Every shared surface uses the following causal stack:

1. **Canvas field** — mineral gradient, micro-grain, technical trace, ambient illumination, and edge vignette.
2. **Machined frame** — copper structural hairline, dark outer groove, neutral inner hairline, upper specular edge, lower black seam, and separation shadow.
3. **Panel well** — a darker surface inset inside the frame with upper occlusion, internal falloff, and a restrained reflected field.
4. **Raised object** — directional face gradient, brushed trace, upper highlight, lower seam, contact shadow, and elevated cast shadow.
5. **Active illumination** — sharp contextual border, low-radius edge bloom, internal reflection, and an aperture line. Glow never replaces geometry.
6. **Dimensional artifact** — hero plates, trays, diagrams, and other unique objects occupy a declared plane and cast contact shadows onto the surface beneath them.

The canonical browser implementation is `packages/material-system/src/material-system.css`. Tokens provide shared values; that stylesheet fixes layer order and pseudo-element geometry.

## Canonical component primitives

| Primitive | Required construction |
|---|---|
| `MachinedFrame` | Outer groove, structural border, inner border, specular edge, lower seam, frame shadow |
| `PanelWell` | Recessed surface, internal falloff, occlusion shadow, neutral border |
| `RaisedCard` | Raised face, contact shadow, contextual border, optional active aperture |
| `RecessedControl` | Dark well, upper occlusion, internal shadow, visible focus state |
| `CrystalButton` | Translucent contextual face, internal reflection, sharp rim, controlled bloom |
| `TechnicalOverlay` | Non-interactive grid or etching below readable content |

Consumers may change content, dimensions explicitly defined by a responsive contract, and contextual accent. Consumers may not alter construction order.

## Color

- Ivory is the authoritative reading color.
- Silver is the operational/body color.
- Muted steel is secondary metadata.
- Teal is the default action and completion color.
- Sapphire marks the current wizard step and information state.
- Copper marks structural framing, craft, and warm emphasis.
- Violet and amber are contextual categorical accents.
- Green, amber, red, and blue status colors are reserved for state.

Page accents may select a different hue with `data-accent`; component geometry, material, typography, and illumination remain unchanged.

## Typography

- Display and brand typography: Cormorant Garamond.
- Interface and body typography: Inter.
- Technical labels and machine-readable fragments: IBM Plex Mono.
- Display headings use sentence case.
- Technical eyebrows use uppercase with generous tracking.
- Body copy never uses monospaced type.

## Geometry

- Outer page and workflow frames: 20–24 px radius.
- Standard panels: 16 px radius.
- Controls: 8–10 px radius.
- Pills and switches: fully rounded.
- Borders are normally one physical pixel.
- Acute chamfers belong only to unique technical artwork, never routine forms.

## Spacing

- Four-pixel base grid.
- Desktop page gutter: 24 px minimum.
- Mobile page gutter: 16 px.
- Dense application panels use the same scale at a tighter semantic step; they do not introduce a second spacing system.

## Interaction

- Primary actions use the crystal construction with contextual light.
- Secondary actions use a quiet mineral surface and alloy border.
- Focus is always visible and uses the current contextual accent.
- Hover adds edge illumination and a small elevation change, not a large translation.
- Motion is restrained and mechanical. No elastic or playful easing.

## Canonical conflict resolutions

| Repeated element | Universal choice |
|---|---|
| Outer panel borders | Copper-alloy structural hairline |
| Inner panel borders | Neutral blue-steel hairline |
| Primary action | Crystal surface, teal by default, contextual hue permitted |
| Active navigation | Ivory text with contextual underline |
| Wizard completion | Teal |
| Wizard current step | Sapphire |
| Body text | Silver, never low-contrast gray |
| Display heading | Ivory Cormorant Garamond |
| Technical label | Uppercase IBM Plex Mono |
| Panel radius | 16 px |
| Control radius | 10 px |
| Shadow | Low black separation plus restrained inset alloy highlight |

## Shell-specific rules

### Editorial shell

- Used by the homepage, work index, case studies, engagements, about, contact, legal, and confirmation pages.
- Wider reading rhythm and larger display hierarchy.
- Navigation is sparse and civilian-facing.
- Proof artifacts, process diagrams, and case-study records carry the density.

### Instrument shell

- Used by Pitch Synthase.
- Higher information density and persistent workflow context.
- Stepper, side rails, slide trays, inspectors, upload controls, and export controls remain mechanically aligned.
- Density changes do not authorize smaller than accessible control targets.

## Prohibited drift

- One-off gradients inside pages.
- Unregistered accent colors.
- Page-local button styles.
- Different radii for equivalent panels.
- Arbitrary font-size values.
- Gray-on-black body text below the semantic secondary-text token.
- Decorative glow without interaction or semantic purpose.
- Reconstructing generated token output manually.
- Replacing a compound material with one background, one border, and one shadow.
- Implementing material depth in page-local CSS.
- Using an exported SVG or raster mockup as evidence that browser materials render correctly.

## Frontend acceptance gate

A frontend milestone is eligible for page construction only when the browser specimen demonstrates all of the following at desktop and mobile widths:

- canvas grain remains visible without reducing text contrast;
- the outer groove, structural border, and inner border remain distinct;
- the panel well reads below its frame;
- a raised card reads above its well without hover;
- active and inactive instances preserve identical geometry;
- hover and keyboard focus do not shift surrounding layout;
- contextual accents alter hue only;
- no raw page-local material recipe exists;
- reduced-motion mode preserves state and hierarchy;
- body text remains readable at the contract viewport.
