# InTelluric Frontend Architecture

Status: **binding**

This document fixes frontend topology and workflow ownership. It is not authorization to redesign the primary screenshots.

## Repository topology

```text
apps/
  public-site/           Editorial conversion surface
  pitch-synthase/        Seven-step instrument application
packages/
  design-tokens/         Shared scalar values
  material-system/       Shared browser-rendered physical primitives
  content/               Approved public copy and case-study records
  contracts/             Runtime schemas and boundary validation
contracts/
  VISUAL_AUTHORITY.md
  SCREEN_GEOMETRY_CONTRACT.md
  VISUAL_SYSTEM_CONTRACT.md
  FRONTEND_ARCHITECTURE.md
  PIXEL_ACCEPTANCE_CONTRACT.md
reference/
  visual-contract/
    SCREENSHOT_MANIFEST.md
    SOURCE_PROVENANCE.md
    visual-contract.v2.json
```

No third application owns public-facing UI.

## Authority chain

Apply:

1. primary screenshot;
2. screen geometry;
3. machine contract;
4. visual-system contract;
5. this architecture;
6. generated tokens;
7. material primitives;
8. content.

## Shared public header

Both applications render the same `PublicHeader`. Pitch Synthase does not replace it with an app-only top bar.

Header content:

- InTelluric brand;
- practice descriptor;
- Services;
- What We Review;
- Selected Work;
- About;
- Resources;
- Request Technical Review.

## Application 1 — public site

Purpose: establish legitimacy, demonstrate capability through inspectable work, and convert qualified visitors.

### Public routes

| Route | Purpose | Primary action |
|---|---|---|
| `/` | Orient, qualify, and prove capability | Inspect the Work |
| `/services` | Explain purchasable work | Describe the Project |
| `/work` | Browse publication-authorized evidence | Open a case study |
| `/work/[slug]` | Inspect a technical record | Request this kind of review |
| `/about` | Explain operating model | Start the conversation |
| `/resources` | Access public reference material | Open resource |
| `/contact` | Low-friction intake | Send inquiry |
| `/privacy` | Privacy terms | Return |
| `/terms` | Service/tool terms | Return |
| `/inquiry/received` | Confirmation | Inspect work |

### Homepage component assembly

Exact order:

1. `PublicHeader`
2. `HomepageHero`
   - technical eyebrow;
   - mixed-style four-line proposition;
   - compact explanation;
   - `CrystalButton`: Inspect the Work;
   - secondary recessed action: Describe the Project;
   - owl cutaway artifact.
3. `ConfidenceStrip`
4. `EngagementSelector`
   - Pitch Decks;
   - IRB Proposals;
   - Grant Applications;
   - Patent Litigation;
   - Feasibility Assessments;
   - Due Diligence.
5. `ExampleOutputsCarousel`
6. `SelectedWork`
7. `DiagnosticCallout`

At the native viewport, items 2–7 are visible in the first screenshot. No footer is inserted above them.

## Application 2 — Pitch Synthase

Purpose: take bounded source material through analysis, narrative selection, structure, synthesis, rendering, review, and export.

### UI route contract

| Step | Label | Route | User decision / state |
|---:|---|---|---|
| 1 | Project Setup | `/pitch-synthase/wizard/project` | Audience, pitch, intended impression, sources, slide count |
| 2 | Reference Analysis | `/pitch-synthase/wizard/reference` | Decide what aesthetic, product, factual, and mockup information carries forward |
| 3 | Narrative Foundation | `/pitch-synthase/wizard/narrative` | Select or refine one of four strategic approaches |
| 4 | Slide Structure | `/pitch-synthase/wizard/structure` | Approve ordered slide plan and aspect policies |
| 5 | Content Synthesis | `/pitch-synthase/wizard/content` | Inspect synthesized narrative, claims, and source/inference boundaries |
| 6 | Visual Crafting | `/pitch-synthase/wizard/visual` | Render slides, monitor generation, and resolve verification findings |
| 7 | Review & Export | `/pitch-synthase/wizard/review` | Edit, approve, finalize, and download deliverables |

The exact seven labels are public product language and are not implementation placeholders.

### Backend pipeline mapping

The UI steps group the backend DAG without rewriting it:

| UI step | Backend ownership |
|---|---|
| Project Setup | job creation, text/document intake |
| Reference Analysis | image scan, image analysis, intake options |
| Narrative Foundation | approach drafting, previews, human selection |
| Slide Structure | pitch-aspect modes, slide count, storyboard approval |
| Content Synthesis | Anchor Writer, Deck Builder, source/inference canon |
| Visual Crafting | per-slide generation, specialist verification, regeneration |
| Review & Export | human review, finalization, PDF/PPTX/HTML/Markdown/PNG package |

The UI state is one versioned wizard record. Routes do not keep divergent copies.

### Required instrument components

- `InstrumentFrame`
- `ProductIdentity`
- `WizardStepper`
- `WizardTitleBand`
- `ReferenceMediaPanel`
- `AnalysisResultsPanel`
- `ExplanationRail`
- `CarryForwardControl`
- `ApproachCard`
- `ApproachComparison`
- `SlideStructureEditor`
- `InferenceControls`
- `ContentInspector`
- `GenerationStatus`
- `SlideTray`
- `SlideInspector`
- `VerificationStatus`
- `ReviewEditor`
- `ExportBar`
- `InstrumentFooterRail`

All repeated surfaces compose canonical material primitives.

## State boundaries

Each wizard step owns only these fields:

```text
project:
  audience
  elevator_pitch
  conveys
  doc_text
  slide_count

reference:
  supporting_image
  image_analysis
  use_aesthetic
  use_product_form
  use_facts
  infer_mockup
  infer_prototype

narrative:
  approach_candidates
  selected_approach
  selected_archetype

structure:
  pitch_aspect_modes
  excepted_inference_elements
  ordered_storyboard

content:
  anchor_narrative
  authorized_inferences
  source_conflicts
  content_approval

visual:
  visual_grammar
  generated_slides
  verification_reports
  corrective_regenerations

review:
  reviewed_slides
  universal_instruction
  final_manifest
  export_artifacts
```

A later step may read earlier state. It may not silently overwrite it.

## Shared primitive contract

Repeated surfaces are limited to:

- `MachinedFrame`
- `PanelWell`
- `RaisedCard`
- `RecessedControl`
- `CrystalButton`
- `TechnicalLabel`
- `TechnicalOverlay`

Unique layout components may compose these primitives but may not reimplement their physical recipes.

## Asset classes

1. **Shared procedural assets** — grain, grid, etching, masks.
2. **Route content assets** — thumbnails, diagrams, record art, uploaded images.
3. **Hero dimensional assets** — owl cutaway and branch.
4. **Primary fixtures** — visual-regression evidence only; never shipped as whole-page UI.

## Copy boundary

Public copy and wizard labels are data, not JSX improvisation.

Components may create accessible descriptions and state announcements. They may not rewrite:

- the homepage hero;
- navigation labels;
- service names;
- confidence-strip terms;
- seven wizard step labels;
- fixed CTA hierarchy.

## Responsive contract

### Desktop — `>= 1024 px`

- converge on primary fixtures at `1448 × 1086`;
- homepage uses fixed evidence bands;
- wizard retains three-column Step 2 workspace;
- stepper shows all seven labels;
- minimum interactive target remains `42–44 px`.

### Tablet — `768–1023 px`

- hero may stack;
- wizard workspace becomes two columns;
- explanation rail moves below;
- footer state remains persistent;
- material depth remains.

### Mobile — `< 768 px`

- one column;
- public nav becomes menu;
- progress remains visible;
- carousels scroll with continuation affordance;
- panels stack without losing labels or state;
- no flat alternate theme.

## Migration rule

Legacy code enters only through an inventory containing:

- source repository/path;
- destination;
- behavior retained;
- behavior rejected;
- dependencies;
- secrets/environment bindings;
- acceptance test.

No legacy shell, stylesheet, theme provider, or copy block migrates wholesale.

## Completion proof

Frontend architecture is complete only when:

1. both applications consume the same token and material packages;
2. all routes exist;
3. real backend state reaches each wizard step;
4. primary CTAs reach real next states;
5. native-view visual regression passes;
6. keyboard and touch operation pass;
7. no raw shared material CSS exists in an application;
8. no placeholder or invented public copy remains;
9. no broken asset or console error remains;
10. production build and route smoke tests pass.

Anything less is an implementation checkpoint.
