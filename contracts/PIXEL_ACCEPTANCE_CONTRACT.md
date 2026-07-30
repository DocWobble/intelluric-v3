# Pixel Acceptance Contract

Status: **binding — version 3**

## Required routes

- `/`
- `/pitch-synthase/wizard/reference`

Capture at `1448 × 1086`, DPR 1, 100% zoom, dark scheme, settled/reduced motion, fully loaded fonts, no browser chrome.

## Source handling

Homepage native scoring requires the exact source whose SHA-256 is `b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6`. The `512 × 384` repository preview is not a substitute for native pixel scoring.

Pitch Synthase scoring continues against its unchanged primary fixture.

## Forbidden shortcut

Whole-page raster backgrounds, large UI screenshot crops, canvas tracing, or image maps are not implementations. Acceptance requires semantic DOM, real text, real controls, focus, responsive layout, and isolated content images.

## Homepage fixed-copy audit

Exact:

- header labels;
- hero eyebrow, headline, body, and actions;
- four scope-strip labels;
- six artifact labels;
- sample-tray labels;
- closing callout title and actions.

## Homepage interaction audit

Required:

- six controls expose selected state;
- category selection does not navigate away;
- selected category and tray label agree;
- every visible example belongs to the selected category;
- previous/next, touch, trackpad, and keyboard interaction operate the carousel;
- category change preserves layout and announces updated content;
- reduced-motion mode preserves state;
- canonical artifact links remain real and crawlable.

## Geometry and material proof

At native desktop width, source-derived region edges and repeated component geometry target `±2 CSS px`; structural lines target `±1 physical px`. Material layers must remain separately legible: canvas, groove, warm hairline, frame face, panel well, raised card, crystal state, contact shadow, and bounded content art.

## Responsive proof

Also test `1024 × 768`, `768 × 1024`, and `390 × 844`. Responsive captures are judged for hierarchy, state visibility, material persistence, carousel operability, and absence of clipping.

## Acceptance artifact

Every implementation PR includes source/implementation overlays, landmark report, fixed-copy report, interaction report, accessibility smoke result, responsive captures, declared artwork masks, and explanations for remaining mismatches.

Native homepage SSIM/pixel-difference claims are prohibited until the exact source bytes are materialized in the test environment.
