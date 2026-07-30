# Pixel Acceptance Contract

Status: **binding**

This contract defines proof that an implementation matches the primary screenshots rather than merely resembling them.

## 1. Required captures

Capture at:

- viewport: `1448 × 1086`;
- device pixel ratio: `1`;
- browser zoom: `100%`;
- color scheme: dark;
- reduced motion: on for deterministic capture;
- animation time: settled;
- fonts: fully loaded;
- no browser chrome in the capture.

Required routes:

- `/`
- `/pitch-synthase/wizard/reference`

## 2. Forbidden shortcut

A whole-page fixture, large screenshot crop containing editable UI, or canvas tracing of the screenshot is not an implementation.

Acceptance requires:

- semantic DOM;
- real text;
- real buttons;
- real form controls;
- keyboard focus;
- responsive layout;
- isolated content images only.

## 3. Geometry tolerances

At the native viewport:

- major region bounds: `±2 CSS px`;
- repeated card widths/gaps: `±2 CSS px`;
- text baselines: `±2 CSS px`;
- icon aperture centers: `±2 CSS px`;
- border/rim thickness: `±1 physical px`;
- corner radius: `±2 CSS px`;
- step node centers: `±2 CSS px`.

A one-pixel grid rounding residual may be distributed across repeated columns.

## 4. Copy tolerances

These must be exact:

- visible navigation labels;
- hero headline and body;
- CTA labels;
- confidence-strip labels;
- service names;
- section labels;
- seven wizard step labels;
- Step 2 title;
- analysis row names;
- carry-forward option names.

Dynamic example records may be replaced only through approved content data while preserving card geometry and density.

## 5. Typography proof

Reject when:

- a heading wraps differently at the native viewport;
- italic and upright hero lines are merged;
- fallback fonts visibly change width or baseline;
- technical labels lose tracking or uppercase;
- body text becomes lower contrast than the fixture;
- text is shrunk to conceal layout mismatch.

## 6. Material proof

The following must remain separately legible:

- canvas field;
- outer groove;
- warm structural hairline;
- inner frame line;
- panel well;
- raised card;
- crystal rim;
- crystal internal reflection;
- contact shadow;
- contextual edge bloom.

Reject a surface represented by one fill, one border, and one shadow.

## 7. Automated visual regression targets

After deterministic capture:

- structural landmark audit: all landmarks pass geometry tolerance;
- OCR audit: fixed copy is exact;
- global SSIM target: `>= 0.985`;
- non-artwork structural SSIM target: `>= 0.992`;
- pixel outlier budget: no more than `0.75%` of unmasked pixels with per-channel difference greater than `16/255`;
- flat-field sampled color delta: CIEDE2000 `<= 3.0`;
- no single contiguous mismatch region larger than `1.0%` of the viewport outside declared artwork masks.

Artwork masks may cover:

- owl/branch pixels;
- example-output thumbnail imagery;
- uploaded reference-image pixels.

Masks may not cover frames, text, buttons, labels, controls, or panel geometry.

## 8. Interaction proof

Required:

- all actions receive visible keyboard focus;
- switches expose checked state;
- stepper exposes current step;
- disabled controls are distinguishable without opacity-only communication;
- hover/focus does not shift surrounding geometry;
- reduced-motion mode preserves all state;
- Help, Back, Next, and primary homepage actions have real targets.

## 9. Responsive proof

Desktop fidelity does not excuse fixed-canvas implementation.

Also test:

- `1024 × 768`;
- `768 × 1024`;
- `390 × 844`.

Responsive captures are evaluated for hierarchy, visibility, material persistence, and absence of clipping. They are not required to preserve desktop coordinates.

## 10. Acceptance artifact

Every implementation PR must include:

- before/after overlay for each primary route;
- landmark report;
- OCR fixed-copy report;
- visual-regression metrics;
- accessibility smoke result;
- list of declared artwork masks;
- explanation of every remaining diff above threshold.

“Visually close” is not an acceptance result.
