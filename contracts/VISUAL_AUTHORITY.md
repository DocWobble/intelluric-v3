# InTelluric Visual Authority

Status: **binding**

This file is the entry point for the InTelluric design system. It governs appearance, reusable component anatomy, and visual acceptance. It does not govern consumer product behavior.

## Primary implementation reference

| Authority | Visual reference | Repository-resident source | Native viewport | Role |
|---|---|---|---:|---|
| `primary` | supplied optimized homepage screenshot, recorded SHA-256 `b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6` | `staging/optimized-homepage-2026-07-29/` plus `TEXT_SOURCE_MANIFEST.md` | `1448 × 1086` | Public-site composition, commercial hierarchy, material finish, and filtered artifact-evidence browser |

## Style specimens

Other supplied screenshots may be retained as **non-normative style specimens**. They may inform:

- material depth;
- frame, well, card, and control construction;
- typography and icon treatment;
- density and spacing relationships;
- generic editorial or instrument-shell anatomy;
- state legibility.

They do not define routes, workflow stages, backend ownership, product state, payment, generation, review, verification, or export behavior.

In particular, any Pitch Synthase screenshot is subordinate to the current product contract in `DocWobble/Pitch_Synthase_v2`.

## Authority order

1. Approved visual references establish intended appearance.
2. `contracts/VISUAL_SYSTEM_CONTRACT.md` translates that appearance into reusable design grammar.
3. `packages/design-tokens/src/` is the scalar and semantic implementation authority.
4. `packages/material-system/src/` is the compound physical-surface authority.
5. Generic component contracts define visual anatomy and responsive behavior.
6. `contracts/HOMEPAGE_REVISION_CONTRACT.md` and the staged homepage source define the public homepage composition.
7. Consumer repositories define their own routes, data, state, and behavior.

A visual contract never overrides a consumer product contract.

## Homepage observable invariants

- shared InTelluric header and material grammar;
- optimized two-line proposition: `We help your idea` / `defend itself.`;
- direct actions: `Start a Project` and `View Sample Work`;
- four-cell scope strip;
- six artifact-type controls;
- one attached sample-work carousel tray;
- selecting an artifact type replaces the tray collection in place without page navigation;
- carousel controls, drag/scroll, keyboard access, and mobile continuation affordance;
- one integrated closing project-intake callout;
- no superseded selected-work row or separate diagnostic panel;
- dense first-viewport composition without generic marketing whitespace.

## Consumer boundary

The public-site frontend may be implemented from the homepage composition contract after the token and material foundation passes. Pitch Synthase must be implemented by applying the same design system to the current states exposed by `DocWobble/Pitch_Synthase_v2`.

No fixed Pitch Synthase labels, step count, route sequence, state schema, or backend mapping is authoritative here.

## Asset boundary

Whole-page screenshots are reference evidence, never runtime page backgrounds. Bounded artwork may be replaced independently. Navigation, headings, buttons, selectors, cards, progress indicators, labels, frames, and fields remain semantic interface elements.