# intelluric-v3

Canonical repository for the InTelluric public site and Pitch Synthase.

The active visual contract is version 2. It is anchored to two exact `1448 × 1086` screenshots:

- public homepage;
- Pitch Synthase Step 2 — Reference Analysis.

Frontend work begins at [`contracts/VISUAL_AUTHORITY.md`](contracts/VISUAL_AUTHORITY.md). Exact fixture bytes and hashes live under [`reference/visual-contract/`](reference/visual-contract/). Measured native-view geometry is defined in [`contracts/SCREEN_GEOMETRY_CONTRACT.md`](contracts/SCREEN_GEOMETRY_CONTRACT.md), and the machine-readable contract is [`reference/visual-contract/visual-contract.v2.json`](reference/visual-contract/visual-contract.v2.json).

The prior contract state is preserved on branch:

`archive/2026-07-27-pre-contract-realignment`

Materialize the encoded Step 2 transport fixture when a local image is needed:

```bash
npm run visual:hydrate
```

Run the contract checks:

```bash
npm run check
```

A passing check proves that token outputs are current, required material primitives exist, primary screenshot bytes are intact, the machine contract agrees with the manifest, the seven-step Pitch Synthase shell remains fixed, and no competing application-level visual grammar has appeared.
