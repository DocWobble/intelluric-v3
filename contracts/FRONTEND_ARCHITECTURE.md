# InTelluric Frontend Architecture

Status: **binding — version 3**

## Repository topology

```text
apps/
  public-site/
  pitch-synthase/
packages/
  design-tokens/
  material-system/
  content/
  contracts/
contracts/
reference/visual-contract/
staging/optimized-homepage-2026-07-29/
```

No third application owns public-facing UI. The staging folder is reference source, not a production app and not a second authority.

## Shared shell

Both applications render one `PublicHeader` and consume the same token and material packages. Pitch Synthase does not replace the public header with an unrelated app shell.

## Public-site launch topology

| Route | Purpose |
|---|---|
| `/` | Optimized commercial homepage and artifact-evidence browser |
| `/services` | Purchasable work |
| `/sample-work` | Crawlable evidence catalog |
| `/sample-work/[category]` | Crawlable category record set |
| `/sample-work/[category]/[slug]` | Inspectable artifact record |
| `/how-it-works` | Process and engagement model |
| `/about` | Practice and operating model |
| `/resources` | Public resources |
| `/start-project` | Client intake |
| `/inquiry/received` | Verified submission confirmation |
| `/privacy` | Privacy terms |
| `/terms` | Service and tool terms |

## Homepage components

1. `PublicHeader`
2. `HomepageHero`
3. `ScopeStrip`
4. `ArtifactEvidenceBrowser`
   - `ArtifactTypeSelector`
   - `SampleWorkCarouselTray`
5. `ProjectIntakeCallout`

The browser owns one active category ID and a category-indexed carousel position map. Content records—not page-local arrays—are the single source of truth for initial markup, category replacement, artifact routes, metadata, and sitemap generation.

## Pitch Synthase

The seven UI routes and one versioned wizard record remain unchanged:

1. Project Setup
2. Reference Analysis
3. Narrative Foundation
4. Slide Structure
5. Content Synthesis
6. Visual Crafting
7. Review & Export

The UI groups the existing backend DAG; it does not rewrite it.

## Shared primitives

Repeated physical surfaces may only compose:

- `MachinedFrame`
- `PanelWell`
- `RaisedCard`
- `RecessedControl`
- `CrystalButton`
- `TechnicalLabel`
- `TechnicalOverlay`

The staging CSS demonstrates composition but may not become a competing production material authority. Port its topology and behavior through shared primitives and tokens.

## State boundaries

Homepage evidence state:

```text
active_category_id
carousel_position_by_category
collection_status
focused_artifact_id
```

Required states: idle, loading, ready, empty, error. Category changes are atomic and do not navigate away.

External systems enter through typed adapters for intake, content, analytics, Pitch Synthase jobs, checkout, entitlement, and export. Legacy field names and error shapes remain behind an anti-corruption layer.

## Responsive contract

Desktop converges on the source at `1448 × 1086`. Tablet and mobile reflow while preserving hierarchy, material depth, active state, carousel operability, semantic labels, and real controls.

## Completion proof

Frontend architecture is complete only when:

1. production apps consume shared tokens/materials;
2. every declared route exists;
3. homepage category selection replaces only the associated tray collection;
4. artifact/category pages are crawlable from the same records;
5. all primary actions reach real next states;
6. keyboard and touch operation pass;
7. no placeholder or invented public evidence remains;
8. no broken asset or console error remains;
9. production build and route smoke tests pass;
10. visual acceptance uses the current v3 authority.
