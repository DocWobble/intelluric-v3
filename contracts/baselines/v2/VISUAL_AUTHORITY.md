# InTelluric Frontend Visual Authority

Status: **binding; primary screenshots are the final observable authority**

This file is the only entry point for frontend visual implementation.

## Primary contracts

| Route | Fixture | Native viewport | Role |
|---|---|---:|---|
| `/` | `reference/visual-contract/DECF9777-2952-4B46-A439-DF4BE7F67DEF.jpeg` | `1448 × 1086` | Public homepage, editorial shell, conversion hierarchy |
| `/pitch-synthase/wizard/reference` | `reference/visual-contract/1872091A-8BC0-4130-AEB8-8CF0D244ECD2.contract.webp` | `1448 × 1086` | Pitch Synthase instrument shell, seven-step wizard, Step 2 reference-analysis screen |

The repository must reproduce these screens as interfaces, not reinterpret them as mood boards.

## Authority order

1. Primary screenshot pixels at the native viewport.
2. `contracts/SCREEN_GEOMETRY_CONTRACT.md`.
3. `reference/visual-contract/visual-contract.v2.json`.
4. `contracts/VISUAL_SYSTEM_CONTRACT.md`.
5. `contracts/FRONTEND_ARCHITECTURE.md`.
6. `packages/design-tokens/src/`.
7. `packages/material-system/src/material-system.css` and `primitives.tsx`.
8. Route content and isolated visual assets inside their declared boundaries.

A lower authority never overrides a higher authority.

## Fixture classes

- **Primary** — establishes shared visual grammar and must be matched at the native viewport.
- **Supplemental** — route-specific evidence only where the primary fixtures are silent. It may not change shared shell, material, typography, or density.
- **Historical** — retained for provenance. It has no implementation authority.

The former Pitch Synthase source/approach fixtures are historical because they encode the superseded five-stage workflow.

## Observable invariants

### Shared header

Both primary screens use the same public header:

- near-black canvas;
- InTelluric mark and logotype at left;
- small practice descriptor;
- centered sparse navigation;
- blue crystal review CTA at right;
- one-pixel lower divider;
- no alternate app header above it.

### Shared material grammar

- mineral-black canvas with restrained blue ambient field;
- machined outer framing with warm alloy hairline, dark groove, and inner edge;
- blue-black panel wells;
- raised card faces with contact shadow and fine internal highlight;
- sapphire/violet crystal illumination used only for active state and primary action;
- ivory display typography, silver body typography, uppercase tracked technical labels;
- fine-line technical iconography;
- dense but calm composition.

### Homepage invariants

- hero occupies the first major frame immediately below the header;
- text is left, owl cutaway is right, and neither is vertically centered in a generic two-column box;
- the headline is four lines with the last two lines italic and blue;
- confidence strip sits physically attached beneath the hero;
- six service tiles, four example-output cards, three selected-work cards, and one diagnostic callout are all visible in the native viewport;
- no large whitespace band appears between sections.

### Pitch Synthase invariants

- the public header remains visible;
- one large machined instrument frame contains the workflow;
- seven-step progress rail is persistent;
- Step 2 is active in sapphire;
- the title/action row precedes a three-column work area;
- reference image, analysis results, and explanatory rail remain simultaneously visible;
- four carry-forward controls form one horizontal row;
- save state, project metadata, and Help occupy the footer rail;
- visual density is not reduced to a generic SaaS form.

## Deterministic implementation rule

Repeated physical surfaces may only be composed from:

- `MachinedFrame`
- `PanelWell`
- `RaisedCard`
- `RecessedControl`
- `CrystalButton`
- `TechnicalLabel`
- `TechnicalOverlay`

Applications may size and arrange primitives according to the screen contracts. Applications may not reproduce or override their gradients, borders, shadows, bevels, textures, glows, or pseudo-elements.

## Asset boundary

The full-page screenshot is never a runtime page asset.

Permitted raster assets are isolated visual content such as:

- the owl cutaway/branch hero artwork;
- example-output thumbnails;
- case-study artwork;
- the uploaded reference image shown inside the wizard.

Navigation, headings, buttons, fields, labels, switches, borders, frames, and panels must remain real interface elements.

## Required verification

`npm run check` must fail when:

- either primary fixture is absent or byte-altered;
- the manifest and machine contract disagree;
- the wizard has other than seven steps or uses different labels;
- an authority file is absent;
- page-local visual recipes appear;
- a second visual authority is introduced;
- generated token outputs are stale;
- a required material primitive is missing.
