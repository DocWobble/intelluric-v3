# InTelluric Visual System Contract

Status: **binding**

This contract translates approved InTelluric references into one reusable design grammar. It governs shared chrome, tokens, physical surfaces, generic component anatomy, motion, responsive behavior, and visual acceptance. It does not define consumer product behavior.

## Design thesis

InTelluric should feel like an architectural practice and precision laboratory for consequential technical work: dark mineral surfaces, restrained machined edges, sapphire-crystal light, disciplined typography, compact information density, and inspectable technical artifacts.

It must never become:

- flat black SaaS;
- generic enterprise blue;
- neon cyberpunk;
- frosted-glass dashboard;
- decorative steampunk;
- luxury gold-on-black branding;
- oversized whitespace with thin content.

## Foundation order

The design system is built in this order:

1. semantic design tokens;
2. compound material recipes;
3. generic component patterns;
4. specimens and acceptance evidence;
5. consumer frontends.

A later layer may compose an earlier layer. It may not redefine it.

## Canvas

The canvas is a near-black blue field with restrained upper or lateral sapphire ambience, subordinate technical traces, micro-grain, and peripheral falloff. Texture never competes with text or reads as a separate illustration.

Canonical roles—not page-local values—cover:

- deepest background;
- canvas background;
- raised blue-black surface;
- active blue field;
- muted and emphasized text;
- structural warm edge;
- neutral steel edge;
- contextual state accents.

## Material hierarchy

From lowest to highest:

1. canvas;
2. structural frame;
3. panel well;
4. raised card;
5. recessed or crystal control state;
6. bounded content artifact.

No consumer surface may collapse this hierarchy into one background and one shadow.

## Canonical physical primitives

### `MachinedFrame`

Contains an outer groove, subdued warm structural hairline, dark metallic face, neutral inner edge, upper specular edge, lower seam, and cast separation shadow.

### `PanelWell`

Reads below its frame through a blue-black face, upper-left field, inner occlusion, alloy hairline, lower falloff, and child contact shadow.

### `RaisedCard`

Reads above a well before hover through a directional dark face, fine brushed trace, upper highlight, lower seam, contact shadow, and restrained contextual edge.

### `RecessedControl`

Uses inset geometry, visible label hierarchy, stable layout, and a sharp focus rim. Placeholder text never replaces a persistent label.

### `CrystalButton`

Uses a dark translucent face, contextual inner reflection, sharp bright rim, bounded bloom, internal aperture highlight, and ivory text. Glow never substitutes for a visible border.

### `TechnicalLabel`

Provides compact uppercase or monospaced metadata without turning body copy into instrumentation noise.

### `TechnicalOverlay`

Provides grids, traces, diagrams, and inspection marks as subordinate information layers rather than decorative wallpaper.

Compound gradients, textures, shadows, bevels, and illumination belong only to the material-system package.

## Color roles

| Role | Contract |
|---|---|
| Primary display text | warm ivory |
| Body text | cool silver |
| Metadata | muted steel |
| Structural edge | restrained copper or bronze |
| Primary action | sapphire |
| Current or selected state | sapphire or contextual accent |
| Completion or success | green or teal |
| Warning or medium confidence | amber |
| Error or destructive state | restrained red |
| Explanatory emphasis | violet with sapphire action |
| Category accents | sapphire, cyan, green, amber, violet, copper |

Contextual accents alter semantic hue and state emphasis. They do not change equivalent geometry or material construction.

## Typography

Canonical families:

- display and brand: `Cormorant Garamond`;
- interface and body: `Inter`;
- technical labels and code-like metadata: `IBM Plex Mono`.

Rules:

- display headings use sentence case;
- technical eyebrows use uppercase with generous tracking;
- body text never uses monospaced type;
- panel and card titles may use the display serif;
- navigation uses the body face;
- metadata uses body or technical face according to role;
- line wrapping at approved reference viewports is part of visual acceptance.

## Iconography

- line icons only;
- consistent nominal stroke;
- no cartoon fill or emoji;
- one coherent icon family;
- explicit aperture or alignment box;
- contextual hue applies to stroke and bounded edge bloom, not large filled backgrounds.

## Density and spacing

Base rhythm: `4 px`.

The system is compact and horizontally efficient. Typical desktop relationships:

- header near `78 px` high;
- first major surface immediately below the header;
- major section gaps around `8–16 px`;
- panel padding around `16–22 px`;
- card gaps around `10–14 px`;
- ordinary control heights around `42–46 px`;
- touch targets never below `44 px` where touch use is expected.

Do not introduce a second airy spacing system for marketing or application pages.

## Shared header

The header uses the same brand, descriptor, typography, divider, and material treatment across consumers. Navigation labels and destinations belong to the consuming application or approved public-site composition; the visual system owns their anatomy, spacing, focus, active, and responsive treatment.

## Editorial shell

Traits:

- large serif proposition;
- proof-first composition;
- dimensional visual artifact;
- horizontally efficient first viewport;
- evidence before long-form explanation;
- low-pressure but unmistakable actions.

The approved homepage assembly is fixed separately in the homepage and geometry contracts.

## Instrument shell

A generic instrument-shaped surface may contain:

- public-header continuity when appropriate;
- one enclosing machined frame;
- a data-driven progress or status region;
- a page title and action band;
- dominant task surfaces;
- optional context or explanation rails;
- persistent action, status, or delivery areas.

The instrument shell is a visual pattern, not a route map. The consumer supplies the number of states, labels, branching, data, and transitions.

## Progress and state grammar

Progress indicators must accept variable counts and labels. Supported states include:

- complete;
- current;
- pending;
- blocked;
- skipped;
- processing;
- warning;
- error.

Equivalent nodes and connectors retain stable geometry. State is communicated by border, fill, icon, text, and accessible status—not by arbitrary shape changes.

No fixed application stage list is part of this contract.

## Forms and controls

- fields use recessed wells;
- labels remain visible outside or at the top edge;
- uploaded assets appear in bounded media viewports;
- switches and toggles use semantic state tokens;
- focus adds a visible sharp rim without moving layout;
- primary, secondary, and destructive actions remain visually distinct;
- validation and error messages remain adjacent and programmatically associated.

## Content boundaries

Editable consumer data includes project names, records, descriptions, confidence values, uploaded metadata, dynamic state text, and output imagery.

Design-system authority includes token roles, material recipes, typography roles, icon grammar, component anatomy, state treatment, responsive behavior, and approved public-homepage composition.

Consumer authority includes routes, workflow labels, state machines, API data, backend logic, payment, generation, review, verification, and exports.

## Motion

Motion is restrained and mechanical:

- hover and focus: `90–160 ms`;
- panel transition: `180–240 ms`;
- progress transition: `200–320 ms`;
- decisive cubic easing;
- no spring, elastic overshoot, pulsing neon, parallax, or floating idle motion;
- reduced-motion mode preserves all state through border, fill, icon, and text.

## Responsive derivation

Desktop preserves approved proportions and information hierarchy. Tablet may reduce columns and move context rails below dominant work surfaces. Mobile uses one primary content column, menu navigation, horizontally operable carousels where appropriate, visible current status, and no page-level clipping.

Responsive behavior may reflow. It may not flatten the material system or hide required state.

## Prohibited drift

- page-local gradients, shadows, bevels, textures, or glows;
- alternate raw color or font systems;
- hardcoded consumer workflow labels in the design-system package;
- fixed progress-node counts in generic components;
- copied backend models or route maps;
- narrow generic SaaS cards replacing the intended framed composition;
- inconsistent radii for equivalent objects;
- decorative glow without state or interaction meaning;
- whole-page raster implementation;
- screenshot-specific hacks that fail responsively;
- generic template cards replacing dense evidence layouts;
- “cleaning up” by removing necessary information.

## Acceptance gate

A surface is eligible for design review only when:

- semantic DOM and real controls exist;
- shared values resolve through design tokens;
- compound surfaces resolve through the material system;
- approved visual landmarks are within contract tolerance;
- keyboard and touch interactions work;
- reduced-motion mode preserves state;
- no consumer-local visual recipe competes with the shared system;
- consumer product behavior remains sourced from the consumer repository;
- applicable visual-acceptance checks pass.