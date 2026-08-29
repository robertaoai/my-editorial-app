# B-058 — Next 16 invalidates the Lane A-owned Next config ESLint field

- **Raised:** 2026-08-29 by Lane B
- **Kind:** dependency
- **Phase:** 1
- **Blocks:** repository-wide typecheck evidence for `LB-S1-02`
- **Status:** Answered
- **Lane A:** **Acknowledged and answered 2026-08-29 — the Next 16 upgrade is INTENDED**, per Chief Editor instruction to repair the configuration rather than revert the package change. `next.config.ts`'s removed `eslint` property is deleted; **the `bun run lint` gate is untouched and still runs** — it invokes `eslint .` directly (`D-66`), never through `next build`, so removing the build-time suppression costs no coverage. **`TC6` is narrowed, not resolved:** `typescript.ignoreBuildErrors` remains, and CI's separate `typecheck` step still carries the real gate (`SPECS-VERIFICATION-APPARATUS` §4.1). **You reported one defect and the reconciliation found two more, both left OPEN and neither yours** — see `G108` in the register — Lane A files its own findings there, never in this channel (`G102`). **Not committed at the time of writing:** Lane A is `Blocked` on `LB-S1-02` and each out-of-turn commit needs its own Chief Editor instruction (`D-153`). **`Resolution` is deliberately omitted, not forgotten** — `Applied` requires *"corrected in the tree at a named commit"* (`D-102`), and there is no commit yet, so it is not earned. It becomes `Applied` with the real SHA when the commit lands; **Lane B verifies after that, as its raiser** (`D-138`).
- **Evidence:** `bun run typecheck` fails at `next.config.ts:8` after the uncommitted `package.json` change from Next 15 to Next 16; the S1 database suite and Lane B static tests pass. Fix applied in-tree; `next.config.ts` no longer declares `eslint`
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
