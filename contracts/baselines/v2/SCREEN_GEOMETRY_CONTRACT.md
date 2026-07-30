# Binding Screen Geometry Contract

Status: **binding**

This document converts the two primary `1448 × 1086` screenshots into implementation landmarks. Coordinates are CSS-pixel coordinates in the native fixture. The origin is the top-left of the screenshot.

The screenshot remains authoritative if a measurement below differs by one pixel because of JPEG antialiasing.

## Shared viewport and header

| Element | x | y | width | height |
|---|---:|---:|---:|---:|
| Native viewport | 0 | 0 | 1448 | 1086 |
| Public header | 0 | 0 | 1448 | 78 |
| Header lower divider | 0 | 77 | 1448 | 1 |
| Brand lockup safe area | 63 | 20 | 330 | 44 |
| Navigation band | 564 | 24 | 535 | 38 |
| Header CTA | 1134 | 23 | 193 | 38 |

Header invariants:

- brand mark begins at approximately `x=64`;
- nav remains visually centered in the open middle band;
- review CTA right edge is approximately `x=1327`;
- header content never touches the full-page outer frame;
- both applications share this exact header.

---

# Screen A — Public homepage

Fixture: `DECF9777-2952-4B46-A439-DF4BE7F67DEF.jpeg`  
Route: `/`

## Major regions

| Region | x | y | width | height | Notes |
|---|---:|---:|---:|---:|---|
| Hero machined frame | 20 | 78 | 1408 | 429 | Rounded frame; owl artwork is clipped within the right side |
| Hero copy block | 108 | 108 | 500 | 374 | Eyebrow, headline, body, two actions |
| Hero artwork region | 728 | 79 | 660 | 425 | Half-wireframe owl, branch, dark blue field |
| Confidence strip | 53 | 507 | 1302 | 43 | Four equal facts with separators |
| Engagement selector well | 52 | 551 | 1303 | 143 | Six equal cards |
| Example outputs well | 51 | 694 | 1306 | 177 | Label plus four-card carousel |
| Selected work well | 51 | 871 | 910 | 179 | Label plus three record cards |
| Diagnostic callout | 969 | 872 | 386 | 178 | Violet/blue distinct conversion surface |

## Hero copy geometry

| Element | x | y | width | height |
|---|---:|---:|---:|---:|
| Eyebrow | 109 | 109 | 292 | 20 |
| Headline block | 108 | 137 | 502 | 190 |
| Supporting paragraph | 109 | 341 | 382 | 79 |
| Primary action | 109 | 437 | 234 | 44 |
| Secondary action | 365 | 437 | 204 | 44 |

Headline line ownership is fixed:

1. `You already know how`
2. `to defend your idea.`
3. `We help your idea`
4. `defend itself.`

Lines 1–2 use upright ivory display type. Lines 3–4 use italic sapphire display type. Do not merge the headline into fewer lines at the native viewport.

## Confidence strip

The strip uses four equal semantic cells with vertical dividers at approximately:

`x = 334, 685, 976`

Labels:

1. `2–7 SOLAR DAYS`
2. `SCOPED BY DELIVERABLES`
3. `NO BILLABLE HOURS`
4. `NO IP CLAIMS`

Small explanatory text sits directly beneath each label. Icons remain left of each cell’s text.

## Engagement selector

Outer well: `x=52, y=551, w=1303, h=143`.

Six cards occupy one row. Approximate card bounds:

| Card | x | width | Accent |
|---|---:|---:|---|
| Pitch Decks | 94 | 191 | sapphire |
| IRB Proposals | 297 | 191 | cyan |
| Grant Applications | 501 | 190 | green |
| Patent Litigation | 703 | 194 | amber |
| Feasibility Assessments | 911 | 194 | violet |
| Due Diligence | 1117 | 191 | copper |

Card height is approximately `122 px` and top is approximately `563 px`.

The card geometry is identical across accents. Hue is the only permitted variation.

## Example outputs

- Technical label begins around `x=110, y=704`.
- Carousel viewport begins around `x=110, y=722`.
- Four cards are visible simultaneously.
- Left/right continuation controls overlap the well edges rather than consuming a card column.
- Cards use image-top / text-bottom composition.
- Titles are ivory display type.
- Descriptions and metadata remain visible at the native viewport.

## Bottom band

Selected-work record cards remain in one horizontal row. The diagnostic callout is not a fourth matching card; it is a distinct raised conversion panel with:

- circular search aperture;
- serif title;
- compact explanatory copy;
- full-width blue crystal action at the bottom.

---

# Screen B — Pitch Synthase Step 2

Fixture: `1872091A-8BC0-4130-AEB8-8CF0D244ECD2.contract.webp`  
Route: `/pitch-synthase/wizard/reference`

## Outer instrument geometry

| Region | x | y | width | height |
|---|---:|---:|---:|---:|
| Instrument machined frame | 28 | 79 | 1388 | 966 |
| Stepper well | 64 | 105 | 1263 | 118 |
| Title/action band | 67 | 244 | 1258 | 124 |
| Reference image panel | 67 | 384 | 494 | 411 |
| Analysis results panel | 575 | 384 | 424 | 411 |
| Explanation rail | 1011 | 384 | 313 | 411 |
| Carry-forward well | 67 | 813 | 1258 | 153 |
| Footer rail | 67 | 983 | 1258 | 43 |

The frame consumes almost the entire page below the shared header. Do not place the wizard inside a narrow centered card.

## Seven-step rail

Product mark occupies approximately `x=72..265`.

Step node centers:

| Step | Label | center x | center y | state in fixture |
|---:|---|---:|---:|---|
| 1 | Project Setup | 318 | 146 | complete/available |
| 2 | Reference Analysis | 455 | 146 | current |
| 3 | Narrative Foundation | 608 | 146 | pending |
| 4 | Slide Structure | 761 | 146 | pending |
| 5 | Content Synthesis | 915 | 146 | pending |
| 6 | Visual Crafting | 1062 | 146 | pending |
| 7 | Review & Export | 1208 | 146 | pending |

Node diameter: approximately `36 px`.

The connector line passes through the node centers. Step 2 uses sapphire fill, bright rim, and low-radius glow. Other nodes keep identical size and outline.

Labels wrap to two lines and remain centered beneath nodes. The seven labels are exact product language.

## Title/action band

| Element | x | y | width | height |
|---|---:|---:|---:|---:|
| Step eyebrow | 75 | 251 | 110 | 18 |
| Page title | 75 | 276 | 580 | 48 |
| Supporting text | 75 | 329 | 480 | 48 |
| Back action | 927 | 267 | 112 | 43 |
| Next action | 1054 | 267 | 270 | 43 |

The page title reads `Step 2 — Reference Analysis`.

The next action reads `Next: Narrative Foundation`.

## Three-column workspace

### Reference image panel

- panel label at `x≈86, y≈399`;
- upload status aligned right;
- image viewport begins at approximately `x=83, y=425`;
- image viewport size approximately `462 × 307`;
- filename and metadata sit below;
- `Replace Image` is a compact secondary action at bottom right.

The product image is content, not a surface recipe.

### Analysis results panel

Four equal stacked rows plus a bottom utility row.

Rows:

1. Aesthetic — High — `0.94`
2. Product Form — High — `0.91`
3. Facts Detected — High — `0.88`
4. Context Inferred — Medium — `0.72`

Each row contains:

- technical icon aperture;
- serif row title;
- one- or two-line body description;
- status pill and confidence value aligned right.

`View Full Analysis` is a recessed full-width utility row, not a primary action.

### Explanation rail

The rail is a separate raised panel with blue/violet edge illumination.

An icon aperture and the heading `How this helps your deck` appear at the top. Four benefit rows follow:

1. Maintains visual coherence across all slides
2. Preserves product accuracy and key details
3. Grounds the narrative in your real-world context
4. Reduces rework and speeds up creation

This rail must not collapse into tooltip text on desktop.

## Carry-forward controls

Outer well: `x=67, y=813, w=1258, h=153`.

Four cards form one row:

1. Use aesthetic
2. Use product form
3. Use facts
4. Infer mockup/prototype

Every card has:

- icon aperture at left;
- serif title;
- two- or three-line explanation;
- switch at upper right;
- identical geometry.

Switches are on in the fixture. Active track is sapphire and knob is ivory.

## Footer rail

- autosave state at left;
- project name and deck type centered;
- Help at right;
- no extra action buttons;
- rail remains visually recessed.

---

# Shared typography landmarks

| Use | Family | Native size | Line height | Weight/style |
|---|---|---:|---:|---|
| Brand logotype | display serif | 29–31 px | 1 | regular |
| Homepage hero | display serif | 50–54 px | 0.98–1.03 | regular / italic |
| Wizard page title | display serif | 44–47 px | 1.02 | regular |
| Panel title | display serif | 17–19 px | 1.1 | regular |
| Navigation/body | sans serif | 14–16 px | 1.45–1.6 | regular |
| Technical label | mono or narrow sans | 11–12 px | 1.2 | uppercase, tracked |
| Metadata | sans or mono | 11–13 px | 1.3 | muted |

Typography must preserve hierarchy and line wrapping at the native viewport. Font substitution is not acceptable when it changes line breaks.

# Native-view implementation tolerance

At `1448 × 1086`, measured region edges, centers, and baselines must remain within `±2 CSS px` of this contract. Repeated card widths may distribute a single residual pixel through CSS grid rounding.

Material edges, divider lines, and control bounds must not blur across more than two physical pixels at device-pixel-ratio 1.
