# Exact Source Import Gate

Status: **blocking**

The earlier staging commit contained reduced and duplicated transport derivatives. Those files have been removed. They are not valid implementation evidence.

The source package to import is `intelluric-ui-contract-729.zip`:

- ZIP SHA-256: `bca746aff822eb2ea6b6df270d1b7898e92912ced4a9f23997efef034e3fec03`
- optimized homepage source: `assets/contract-reference.jpeg`
- native dimensions: `1448 × 1086`
- source SHA-256: `b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6`

Exact required files and hashes are enforced by `scripts/check-optimized-homepage-source.mjs`. `npm run check` must fail until every source member is present byte-for-byte, including the exact native homepage image and distinct sample assets.

The exact text members already present are retained. Non-exact binary derivatives and the altered stylesheet were removed rather than allowed to masquerade as the source package.
