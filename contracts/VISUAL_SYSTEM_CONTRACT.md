# InTelluric Visual System Contract

Status: **binding**

This contract translates the two primary screenshots into one reusable design grammar. It governs shared chrome and repeated surfaces. Unique owl artwork, product photography, output thumbnails, and record-specific diagrams retain their declared content boundaries.

## Design thesis

The public site is an architectural lobby for consequential technical work. Pitch Synthase is a precision instrument built inside the same practice.

The system communicates engineered permanence through dark mineral surfaces, warm machined edges, sapphire-crystal light, disciplined typography, and inspectable technical artifacts.

It must never become:

- flat black SaaS;
- generic enterprise blue;
- neon cyberpunk;
- frosted-glass dashboard;
- decorative steampunk;
- luxury gold-on-black branding;
- oversized whitespace with thin content.

## 1. Canvas

### Base field

Canonical dark range:

- deepest: `#00030A`;
- canvas: `#010712`;
- raised blue-black: `#061526`;
- active blue field: `#0A1E44`.

The canvas is not a uniform fill. It combines:

1. near-black blue vertical field;
2. restrained upper/right sapphire ambient light;
3. low-opacity technical traces;
4. micro-grain;
5. peripheral vignette.

Texture remains subordinate to text and never reads as a separate illustration.

## 2. Material hierarchy

From lowest to highest:

1. **Canvas**
2. **Structural frame**
3. **Panel well**
4. **Raised card**
5. **Crystal control / selected state**
6. **Content artifact**

No page-local surface may skip the hierarchy by using one background plus one box shadow.

## 3. Structural frame

A machined frame contains:

1. outer black groove;
2. warm copper/bronze structural hairline;
3. dark metallic face;
4. neutral inner blue-steel hairline;
5. upper specular edge;
6. lower black seam;
7. cast separation shadow.

The warm line is structural, not decorative. It remains subdued until light catches an edge.

Primary desktop radii:

- homepage hero corners: approximately `32 px`;
- instrument outer frame corners: approximately `30 px`;
- ordinary wells: `14–16 px`;
- ordinary cards: `10–12 px`;
- controls: `7–9 px`;
- pills and switches: fully rounded.

## 4. Panel well

A panel well must read below its frame before any content appears.

Construction:

- blue-black face;
- slightly brighter upper-left field;
- inner top occlusion;
- neutral alloy hairline;
- lower internal falloff;
- subtle contact shadow around children.

Wells contain rows, cards, or work surfaces. They do not glow as a whole.

## 5. Raised card

A raised card must read above a well without hover.

Construction:

- directional dark face;
- fine brushed trace;
- one-pixel upper highlight;
- one-pixel lower seam;
- contact shadow;
- restrained contextual edge;
- optional active aperture line.

Hover adds edge illumination and at most `2–3 px` visual elevation. It does not scale, bounce, or materially change layout.

## 6. Crystal controls

Primary actions and current steps use a crystal construction:

- dark translucent face;
- sapphire or contextual inner reflection;
- sharp one-pixel bright rim;
- low-radius bloom outside the rim;
- internal aperture highlight;
- ivory text.

Glow never substitutes for a visible border.

The default primary action hue in both primary fixtures is sapphire-blue, approximately:

- core: `#4B8FE8`;
- bright rim: `#7DB2FF`;
- pale highlight: `#B8D5FF`;
- deep fill: `#183C6E`.

Violet is permitted for the diagnostic and explanatory callouts, not as the universal CTA color.

## 7. Color roles

| Role | Contract |
|---|---|
| Primary display text | warm ivory |
| Body text | cool silver |
| Metadata | muted steel |
| Structural edge | restrained copper/bronze |
| Current wizard step | sapphire |
| Primary action | sapphire |
| Completion/success | green or teal |
| Warning/medium confidence | amber |
| Diagnostic emphasis | violet with sapphire action |
| Service categories | sapphire, cyan, green, amber, violet, copper |

Contextual accents alter hue only. Geometry, material stack, typography, and shadow remain fixed.

## 8. Typography

Canonical families:

- display/brand: `Cormorant Garamond`;
- interface/body: `Inter`;
- technical labels: `IBM Plex Mono`.

Rules:

- display headings use sentence case;
- technical eyebrows use uppercase with generous tracking;
- body text never uses monospaced type;
- panel names and card titles may use the display serif;
- navigation uses the body face;
- metadata may use body or technical face according to the fixture;
- line wrapping at the native viewport is part of the contract.

The homepage hero requires a mixed-style heading: upright ivory followed by italic sapphire. Do not simulate italics by skewing.

## 9. Iconography

- line icons only;
- nominal stroke `1.25–1.75 px`;
- no cartoon fill;
- no emoji;
- no inconsistent icon packs;
- icons sit within an explicit aperture or alignment box;
- contextual color is applied to stroke and small edge bloom, not to large filled backgrounds.

Wizard analysis icons use technical radial/geometric motifs. Service icons are simple domain symbols with one accent hue.

## 10. Density and spacing

Base rhythm: `4 px`.

The screenshots use compact vertical sequencing. At the native desktop viewport:

- header height is approximately `78 px`;
- first major surface starts immediately below the header;
- major section gaps are approximately `8–16 px`;
- panel internal padding is approximately `16–22 px`;
- card gaps are approximately `10–14 px`;
- control heights are approximately `42–46 px`.

Do not introduce a second airy spacing system for marketing pages.

## 11. Shared public header

The same header appears on both primary screens.

Required order:

1. InTelluric mark and logotype;
2. two-line practice descriptor;
3. Services;
4. What We Review;
5. Selected Work;
6. About;
7. Resources;
8. Request Technical Review.

The header is sparse but not detached. It uses a one-pixel lower divider and remains on the canvas, not inside the page frame.

## 12. Editorial shell

Used by the public site.

Traits:

- large serif proposition;
- proof-first composition;
- dimensional visual artifact;
- horizontally efficient first viewport;
- confidence and work evidence before long-form explanation;
- low-pressure but unmistakable actions.

The homepage exact assembly is fixed in `SCREEN_GEOMETRY_CONTRACT.md`.

## 13. Instrument shell

Used by Pitch Synthase.

Traits:

- public header continuity;
- one enclosing machined frame;
- persistent seven-step progress;
- higher information density;
- one page title/action band;
- dominant task panels;
- visible context/explanation rail;
- persistent state footer.

The instrument is not a separate brand. It cannot introduce a new font, material, corner language, or navigation system.

## 14. Wizard progress grammar

Exact labels:

1. Project Setup
2. Reference Analysis
3. Narrative Foundation
4. Slide Structure
5. Content Synthesis
6. Visual Crafting
7. Review & Export

States:

- complete: quiet bright rim and readable label;
- current: sapphire fill, bright rim, low-radius glow;
- pending: dark fill and alloy outline;
- blocked: same geometry with muted label;
- error: same geometry with red state treatment.

Node size and connector line do not change by state.

## 15. Form and switch grammar

- fields use recessed wells;
- labels sit outside or at the top edge, never as floating placeholders;
- uploaded assets appear in bounded media viewports;
- switches use sapphire track and ivory thumb when on;
- focus adds a visible sharp rim without moving layout;
- primary/secondary action hierarchy matches the fixture.

## 16. Copy and content boundaries

Editable:

- project names;
- record names;
- card descriptions;
- confidence values;
- uploaded image and file metadata;
- dynamic state text;
- output thumbnails.

Not editable without a contract revision:

- navigation labels;
- hero proposition;
- seven wizard step labels;
- major section labels;
- action hierarchy;
- native-view geometry;
- shared material recipes.

## 17. Motion

Motion is restrained and mechanical.

- hover/focus: `90–160 ms`;
- panel transition: `180–240 ms`;
- step progression: `200–320 ms`;
- easing: decisive cubic curves, no spring;
- reduced-motion mode preserves all state through color, border, and text.

No parallax, floating idle motion, pulsing neon, or elastic overshoot.

## 18. Responsive derivation

The native desktop fixtures are primary.

Desktop `>= 1024 px`:

- preserve exact native proportions at `1448 px`;
- scale gutters and flexible columns without changing hierarchy;
- keep all homepage evidence bands visible when height permits;
- keep the wizard explanation rail visible.

Tablet `768–1023 px`:

- retain material depth;
- stack hero copy above artwork;
- convert three-column wizard workspace to two columns, with explanation rail below;
- preserve the seven-step rail as horizontally scrollable or compressed labels.

Mobile `< 768 px`:

- one content column;
- public nav becomes a menu;
- step nodes remain visible;
- labels may collapse after the current/adjacent steps;
- carousels scroll horizontally with continuation affordance;
- no page-level horizontal clipping;
- controls remain at least `44 px` high.

Responsive behavior may reflow. It may not flatten the material system.

## 19. Prohibited drift

- one-off gradients in applications;
- page-local shadows, bevels, textures, or glows;
- alternate five-step wizard;
- a narrow centered SaaS card in place of the instrument frame;
- different radii for equivalent objects;
- arbitrary font sizes;
- gray text below the semantic secondary token;
- decorative glow without state or interaction meaning;
- whole-page raster implementation;
- screenshot-specific CSS hacks that fail outside `1448 × 1086`;
- generic template cards replacing the dense evidence layout;
- “cleaning up” by removing visible information.

## 20. Acceptance gate

A surface is eligible for visual review only when:

- primary fixture hash is intact;
- semantic DOM and real controls exist;
- native-view landmarks are within contract tolerance;
- material stack is supplied by the canonical package;
- copy wraps as shown;
- keyboard and touch interactions work;
- reduced-motion mode preserves state;
- no raw application-level visual recipe exists;
- visual-regression output meets `PIXEL_ACCEPTANCE_CONTRACT.md`.
