# Screenshot Source Provenance

## Primary homepage

The exact homepage bytes supplied in the implementation conversation are already stored as:

`DECF9777-2952-4B46-A439-DF4BE7F67DEF.jpeg`

Native size: `1448 × 1086`  
SHA-256: `e8c3fba4d380f8bb60fa4254915201bdd3aac89d51e4dcdeaae5baac687508fe`

The separately uploaded file `0C18EFB6-E2C4-466C-9767-CF68EE29DFEC.jpeg` has the same SHA-256 digest, proving byte identity.

## Primary Pitch Synthase screen

The Step 2 reference-analysis screenshot was supplied directly in the implementation conversation on 2026-07-27.

Original source:

- filename: `1872091A-8BC0-4130-AEB8-8CF0D244ECD2.jpeg`
- native size: `1448 × 1086`
- source SHA-256: `fc77b6444a1f5ba0caf532716cd9cda4e567f87b1d342dd117d6a86de42d42a2`

Repository transport fixture:

- filename: `1872091A-8BC0-4130-AEB8-8CF0D244ECD2.contract.webp`
- native size: `1448 × 1086`
- fixture SHA-256: `ac57f00a72df876ac7aa7431a399997422d92281b2d41a495f8abb7c035d3f53`
- encoding: WebP quality 75, dimensions unchanged

The repository fixture is a transport copy for visual inspection and regression geometry. The original JPEG source hash remains the provenance identity. The measured geometry and machine contract were derived from the original source, not from a rescaled image.

The transport fixture is committed as ordered base64 source shards under `reference/visual-contract/source/` and is materialized by:

```bash
npm run visual:hydrate
```

## Handling rule

Primary source identity is immutable. Do not resize, crop, annotate, or overwrite source records. Derived transport fixtures, crops, and isolated runtime artwork use different filenames and never replace the recorded source identity.

Supplemental and historical fixture provenance remains recorded in `SCREENSHOT_MANIFEST.md`. Historical Pitch Synthase images have no implementation authority.
