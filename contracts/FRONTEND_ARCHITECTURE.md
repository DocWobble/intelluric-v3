# InTelluric Frontend Architecture

Status: **binding**

This document fixes the frontend structure before page implementation. It is the migration and construction map for the public InTelluric site and Pitch Synthase. Agents may implement this architecture; they may not redesign it.

## Repository topology

```text
apps/
  public-site/           Editorial conversion surface
  pitch-synthase/        Instrument application
packages/
  design-tokens/         Shared scalar values; generated CSS, TS, and JSON
  material-system/       Shared browser-rendered material primitives
  content/               Approved public copy and case-study records
  contracts/             Runtime schemas and boundary validation
contracts/
  VISUAL_AUTHORITY.md
  VISUAL_SYSTEM_CONTRACT.md
  FRONTEND_ARCHITECTURE.md
reference/
  visual-contract/       Binding screenshot fixtures and manifest
```

No third application owns public-facing UI. Existing backend functions, generation pipelines, intake handlers, payment handlers, and document compilers migrate behind these two frontend applications through typed boundaries.

## Authority chain

When implementation references disagree, apply this order:

1. Supplied visual-contract screenshots for observable page composition.
2. `VISUAL_SYSTEM_CONTRACT.md` for universal shared decisions.
3. Generated design tokens for shared scalar values.
4. `@intelluric/material-system` for optical construction and reusable component geometry.
5. This architecture for routes, ownership, and assembly.
6. Page copy contract for literal public text.

A lower source cannot override a higher source.

## Shells

### Editorial shell

Owner: `apps/public-site`

Purpose: establish legitimacy, demonstrate capability through inspectable work, and convert qualified visitors into low-friction inquiries or tool users.

Shared structure:

1. Sparse public header: InTelluric, Work, Engagements, About, Contact.
2. Mineral canvas and ambient technical trace.
3. Bounded machined content frames.
4. Proof-first content hierarchy.
5. Low-pressure primary and secondary actions.
6. Shared footer with practice description and intake guidance.

### Instrument shell

Owner: `apps/pitch-synthase`

Purpose: guide a user from bounded source material to a reviewed, editable, exportable deck.

Shared structure:

1. InTelluric and Pitch Synthase product header.
2. Persistent five-stage progress indicator.
3. Workflow context rail on desktop; compact context drawer on mobile.
4. One dominant task surface.
5. Contextual inspector or decision panel.
6. Persistent save state and forward/back actions.

The instrument shell is denser than the editorial shell. It is not a separate brand and cannot introduce another material system.

## Public route contract

| Route | Purpose | Required first viewport | Primary action |
|---|---|---|---|
| `/` | Orient and qualify | Firm proposition plus engineered proof artifact | Inspect the work |
| `/work` | Public proof index | Publication-authorized technical records | Open a case study |
| `/work/[slug]` | Inspectable case study | Decision, examined mechanism, verdict, representative outputs | Request this kind of review |
| `/engagements` | Explain purchasable work | Review types, deliverables, timing, fit | Describe the project |
| `/about` | Explain operating model | Handoff problem, method, senior accountability | Start the conversation |
| `/contact` | Low-friction intake | Short-description rule and scope-check process | Send inquiry |
| `/privacy` | Public policy | Current privacy terms | Return to site |
| `/terms` | Public policy | Current service/tool terms | Return to site |
| `/inquiry/received` | Conversion confirmation | Submission confirmation and next event | Inspect work |

No page called Services is required. Engagements explains the work in the language of client situations and deliverables.

## Homepage assembly contract

The homepage is a lobby, not a catalog. Assemble it in this order:

1. `PublicHeader`
2. `MachinedFrame > Hero`
   - technical eyebrow;
   - literal proposition;
   - short explanation;
   - `CrystalButton`: Inspect the work;
   - `RecessedControl`: Describe the project;
   - dimensional proof artifact occupying the opposite half.
3. `ConfidenceStrip`
   - 2–7 solar days;
   - scoped by deliverables;
   - no billable hours;
   - no IP claims.
4. `EngagementSelector`
   - independent review;
   - pitch decks;
   - grant applications;
   - IRB proposals;
   - patent and invention;
   - feasibility.
5. `PanelWell > ProofCarousel`
   - four representative outputs;
   - one contextual accent;
   - no invented client identity.
6. `SelectedWork`
   - three publication-authorized records.
7. `DiagnosticCallout`
   - for visitors unable to name the needed artifact.
8. `PublicFooter`

The first viewport proves engineering quality before asking for trust.

## Pitch Synthase route contract

| Stage | Route | Required decision |
|---|---|---|
| 1 | `/pitch-synthase/source` | Audience, elevator pitch, intended impressions, sources, images, slide count |
| 2 | `/pitch-synthase/approaches` | Select one of four generated narrative approaches |
| 3 | `/pitch-synthase/preview` | Review and refine representative slides |
| 4 | `/pitch-synthase/outline` | Approve full slide sequence and inference permissions |
| 5 | `/pitch-synthase/generate` | Generate, verify, revise, and export the final deck |

Wizard state is one versioned object. Routes do not maintain divergent copies. Each stage reads the same source record and writes only its owned fields.

Required application components:

- `InstrumentHeader`
- `WizardStepper`
- `ContextRail`
- `SourceIntake`
- `ApproachCard`
- `ApproachComparison`
- `SlidePreview`
- `SlideTray`
- `SlideInspector`
- `InferenceControls`
- `VerificationStatus`
- `ExportBar`

All material surfaces in these components come from `@intelluric/material-system`.

## Shared primitive contract

The following are the only constructors for repeated physical surfaces:

- `MachinedFrame`
- `PanelWell`
- `RaisedCard`
- `RecessedControl`
- `CrystalButton`
- `TechnicalLabel`
- `TechnicalOverlay`

Applications compose these primitives. Applications do not recreate their background, border, shadow, texture, bevel, or illumination CSS.

## Responsive contract

### Desktop: 1024 px and above

- Public maximum content width: token value `layout.content-max`.
- Hero uses two columns when a dimensional proof artifact exists.
- Pitch Synthase retains context rail and inspector.
- Dense rows remain horizontal only while all content fits without truncation.

### Tablet: 768–1023 px

- Hero may stack copy above the artifact.
- Context rail becomes a horizontal summary.
- Inspector moves below the dominant work surface.
- Minimum interactive target remains 44 CSS pixels.

### Mobile: below 768 px

- One content column.
- Public navigation becomes a menu control.
- Instrument progress remains visible but labels may collapse.
- No horizontally clipped page-level tray.
- Carousels may scroll horizontally with visible continuation affordance.
- Large artifacts crop intentionally inside their own bounded region.
- Material depth remains; mobile is not a flat alternate theme.

## Asset contract

Use three asset classes:

1. Shared procedural assets — grain, etching, technical grids, masks. Generated once and referenced by tokens or the material system.
2. Page-specific proof assets — risk maps, claim/evidence matrices, document excerpts, slide previews. Stored with their record.
3. Hero dimensional assets — owl cutaway, stacked plates, document case, technical apparatus. Transparent standalone images with no embedded page copy.

No screenshot of an entire mockup ships as a webpage. No generated asset contains navigation, buttons, or editable text.

## Copy boundary

Public copy is data, not JSX improvisation. Approved copy lives in `packages/content` and is imported by route. Components may provide accessible labels and state descriptions; they may not rewrite headlines, service names, prices, timelines, verdicts, or case-study facts.

## Migration rule

Legacy code enters this repository only through an inventory containing:

- source repository and path;
- destination package and path;
- behavior retained;
- behavior rejected;
- dependencies;
- secrets or environment bindings;
- acceptance test.

No legacy stylesheet, theme provider, page shell, or copy block migrates wholesale.

## Frontend completion proof

Frontend architecture is complete only when:

1. both applications consume the same generated token package;
2. both applications consume the same material-system package;
3. every required route exists and has one named purpose;
4. the primary CTA on every route reaches a real next state;
5. desktop and mobile contract screenshots pass visual comparison;
6. all interactive controls work by keyboard and touch;
7. no route contains raw shared material CSS;
8. no placeholder, generated filler, or unapproved public copy is present;
9. no console error or broken asset appears on a public route;
10. the production build and route-level smoke tests pass.

Anything short of those ten conditions is an implementation checkpoint, not a finished frontend.
