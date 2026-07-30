# Historical Baseline Scope

Status: **non-normative history only**

The former version-2 baseline contained application-specific Pitch Synthase routes, workflow labels, backend mappings, state ownership, and acceptance requirements. Those materials are not valid design-system authority and are being removed from the active repository surface.

## What may be retained conceptually

Only reusable visual observations may survive migration into current design-system contracts:

- material hierarchy;
- typography and icon treatment;
- density and spacing relationships;
- generic frame, panel, card, control, and progress-state anatomy;
- responsive and accessibility principles that are independent of product behavior.

A visual observation becomes current only after it is expressed through `VISUAL_SYSTEM_CONTRACT.md`, design tokens, material primitives, or a generic component contract.

## What is explicitly superseded

- every copied Pitch Synthase route;
- every fixed step label, step count, or step order;
- backend-DAG mappings and worker ownership;
- product state schemas;
- payment, generation, review, verification, and export behavior;
- application-specific component inventories;
- any statement that this repository governs Pitch Synthase behavior.

`DocWobble/Pitch_Synthase_v2` is the sole product authority for Pitch Synthase. Historical files do not override it, even when they use words such as “binding,” “canonical,” or “required.”

## Conflict rule

Current design-system contracts win over historical visual notes. Current consumer repositories win over this repository for all product behavior. No historical product baseline is binding.