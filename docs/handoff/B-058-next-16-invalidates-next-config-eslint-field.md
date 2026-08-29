# B-058 — Next 16 invalidates the Lane A-owned Next config ESLint field

- **Raised:** 2026-08-29 by Lane B
- **Kind:** dependency
- **Phase:** 1
- **Blocks:** repository-wide typecheck evidence for `LB-S1-02`
- **Status:** Open
- **Lane A:**
- **Evidence:** `bun run typecheck` fails at `next.config.ts:8` after the uncommitted `package.json` change from Next 15 to Next 16; the S1 database suite and Lane B static tests pass
- **Verified-At-Commit:** pending

## What happened

Lane B completed the database-executed `C-33` test against local Supabase. The required
repository-wide verification then failed because `next.config.ts` contains the removed
`NextConfig.eslint` property while the working tree's `package.json` now declares Next 16.3.3.

Both `next.config.ts` and `package.json` are Lane A-owned build configuration under `D-86`.
Lane B cannot change either file or decide whether the uncommitted Next upgrade is intended.

## What you need

Reconcile the uncommitted package change and `next.config.ts` as one Lane A toolchain act. If
Next 16 is intended, remove or replace the unsupported `eslint` property while preserving the
separate `bun run lint` gate. If the upgrade is unintended, restore the governed pinned package
state and lockfile. Then run `bun run typecheck`, `bun run lint`, and `bun run check`.

## What you did instead

Lane B retained the passing migration and pgTAP work, did not touch build configuration, and
continued with every verification step that does not require crossing the lane boundary.
