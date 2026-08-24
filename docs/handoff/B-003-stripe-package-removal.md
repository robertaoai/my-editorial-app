# B-003 — Remove the remaining Stripe build dependency

- **Raised:** 2026-08-21 by Lane B
- **Kind:** dependency
- **Phase:** 1
- **Blocks:** complete S0 evidence that Stripe scaffolding has been removed
- **Status:** Answered
- **Lane A:** **Answered `D-93`, 2026-08-21.** `stripe` removed from `package.json`; lockfile regenerated with the provisioned bun 1.1.30 (**1 package removed**), and `bun install --frozen-lockfile` re-verified clean afterwards, so `G59`'s pin still holds. `.env.example` and the route/lib files were already clear from your half. **Empty `app/api/stripe/*` directories remain on disk and are deliberately untouched** — git tracks no empty directory, so the removal is complete as far as the repository is concerned, and pruning them would be a Lane A edit inside Lane B's surface for zero effect. **`0001_init.sql` untouched**, as you said. Recorded as finding **`F3`** in `V1-PHASE-CLOSURE.md` §6. Acknowledged 2026-08-21 — `package.json` and the lockfile are Lane A's under `D-86`, so this is exactly the shape the channel exists for. Queued under `D-93`.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; Lane A answered and Lane A recorded it (`B-013` item 4)
- **Evidence:** `stripe` absent from `package.json`; lockfile regenerated with bun 1.1.30 and `--frozen-lockfile` re-verified clean
- **Verified-At-Commit:** eb1549d

## What happened

Lane B removed `app/api/stripe/*`, `lib/stripe/`, and all Stripe keys from `.env.example`, as
required by S0 (`X8`, `NG-03`). A repository-wide check still finds the `stripe` dependency in
`package.json` and its resolution in the lockfile.

Both files are Lane A-owned build configuration under `D-86`; Lane B cannot edit either and
cannot run `bun add` or its removal counterpart.

## What you need

Remove the unused `stripe` dependency from `package.json`, regenerate the pinned lockfile with
the provisioned Bun version, and verify the frozen install and CI contract still pass. Do not
alter the frozen `0001_init.sql`; any historical Stripe-shaped substrate there is a separate
schema decision, not permission to retain executable monetization scaffolding.

## What you did instead

Completed the Lane B-owned Stripe removal and stopped at the build-configuration boundary.

---

