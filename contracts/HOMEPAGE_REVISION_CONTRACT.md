# Optimized Homepage Revision Contract

Status: **binding**

Route: `/`

Source image identity: `contract-reference.jpeg`, `1448 × 1086`, SHA-256 `b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6`.

## Purpose

The homepage is a minimum commercial surface that moves a visitor through one causal chain:

`understand the offer → understand the complete process → choose an artifact type → inspect matching proof → start a project`.

## Exact assembly

1. `PublicHeader`
2. `HomepageHero`
3. `ScopeStrip`
4. `ArtifactEvidenceBrowser`
   - `ArtifactTypeSelector`
   - `SampleWorkCarouselTray`
5. `ProjectIntakeCallout`

No selected-work row or separate diagnostic card is inserted between the sample tray and closing callout.

## Fixed header language

- Services
- Sample Work
- How It Works
- About
- Resources
- Start a Project

## Fixed hero language

Eyebrow: `TECHNICAL DOCUMENTS AND PRESENTATIONS`

Headline:

1. `We help your idea`
2. `defend itself.` — italic sapphire display type

Body:

`InTelluric turns technical ideas into documents and presentations people can act on. From a blank page or an existing draft, we handle the research, analysis, writing, visuals, and technical review—so your work is ready for funding, approval, investment, litigation, and other high-stakes decisions.`

Actions:

- primary: `Start a Project`
- secondary: `View Sample Work`

## Scope strip

1. `START FROM ANYWHERE`
2. `RESEARCH AND ANALYSIS INCLUDED`
3. `ONE COMPLETE PROCESS`
4. `BUILT FOR THE DECISION`

## Artifact taxonomy

1. `PITCH DECKS`
2. `IRB PROPOSALS`
3. `GRANT APPLICATIONS`
4. `PATENT LITIGATION`
5. `FEASIBILITY ASSESSMENTS`
6. `TECHNICAL DUE DILIGENCE`

Each control has identical geometry. Accent hue, icon, label, description, and selected state vary by category.

## Artifact-evidence browser behavior

The six artifact controls are state controls, not navigation links.

Selection must perform this transaction atomically:

1. update the active control and `aria-pressed` state;
2. update the tray category label;
3. replace the visible example collection with records belonging to that category;
4. reset or restore the category-specific carousel position;
5. preserve page position;
6. announce the new collection to assistive technology;
7. optionally synchronize a shareable URL parameter or fragment without full navigation;
8. preserve browser back/forward semantics when URL state is used.

Category selection must not reload the page, leave `/`, open a modal, or display a mixed-category collection.

## Carousel tray behavior

The attached tray must provide:

- four visible cards at the native desktop viewport;
- previous and next controls overlapping tray edges;
- touch/trackpad horizontal scrolling;
- deterministic one-card movement from arrow controls;
- scroll snapping;
- visible focus and keyboard operation;
- reduced-motion-safe state changes;
- boundary-disabled states;
- graceful handling of one, few, many, empty, loading, and error collections;
- no layout collapse when the category changes.

Each example card contains a title, concise technical description, format/page-or-slide metadata, bounded preview art, and a real canonical detail target.

## Indexing contract

The interactive tray is not the only representation of evidence. The same canonical content records must generate crawlable category and artifact pages, metadata, sitemap entries, and internal links. JavaScript-only tray content is insufficient indexing.

## Closing callout

Title: `Not sure what the deliverable should be?`

Primary action: `Describe Your Project`

Secondary action: `View Sample Work`

The primary action reaches the real project-intake path. It must not be inert or route to a placeholder.

## Responsive derivation

- Desktop: one-row scope strip, six artifact controls, four-card tray.
- Tablet: reflow without flattening material depth; three artifact controls per row or equivalent deliberate layout; fewer visible carousel cards.
- Mobile: one-column hero, accessible menu, horizontally operable artifact selector and sample tray, preserved active state and continuation affordance.

## Acceptance

The page is incomplete until the fixed copy, category transaction, carousel operation, routing, responsive behavior, keyboard/touch behavior, and source-backed indexable artifact records pass their tests.
