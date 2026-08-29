# B-059 — LB-S1-02 database verification turn report

- **Raised:** 2026-08-29 by Lane B
- **Kind:** turn-report
- **Run:** LB-S1-02
- **Phase:** 2
- **Blocks:** nothing, reporting only
- **Status:** Answered
- **Lane A:** **Acknowledged 2026-08-29. Received, and the three conditions you named are the three checks that were red** — `handoff-response` (this queue unread), `graph-coverage` (your two entries absent), `docs-drift` (`lastAnalyzedHead` null). All three are Lane A's to clear and are cleared in this pass. **`B-058` is answered**: Next 16 is intended, `next.config.ts` repaired. **The `xmin` / `txid_current()` finding is the substantive result here** — a subtransaction ID where the top-level was assumed would have passed a static test and failed in production, and it was only reachable by executing against PostgreSQL. That is exactly what `C-33` existed to force. **Two further build-config defects found while reconciling `B-058`, neither yours** — `G108` in the register. **No boundary is recorded by this acknowledgement**: releasing `LB-S1-02` and selecting the next lane are the Chief Editor's acts (`G102` steps 1–3), and recording them before they happen is `G90`.
- **Evidence:** local `0001` + `0002` reset succeeds; `supabase test db --local` passes 30 PostgreSQL assertions; `bun test` passes 20 tests; `bun run lint` passes; `B-058` records the Lane A-owned typecheck condition

## Done

- Created `supabase/tests/database/s1_transition_enforcement.test.sql`, the database-executed
  implementation of `B-044`'s eight-case contract.
- Reapplied frozen `0001_init.sql` followed by `0002_s1_editorial_schema.sql` against the
  disposable local Supabase database. Both migrations apply cleanly; `0001` is unchanged.
- Removed `articles_url_uidx` under `D-121` and added both static and PostgreSQL guards proving
  separate editorial commissions may reuse one source URL.
- Replaced the trigger's top-level transaction-ID comparison with a savepoint-safe MVCC check.
  The first PostgreSQL run exposed that `xmin` may hold a subtransaction ID while
  `txid_current()` returns the top-level ID; the corrected test passes the valid, duplicate,
  no-op, rollback, append-only, approval-target, and same-transaction publication cases.
- Reset the disposable database after the test, removing every fixture while leaving the clean
  migrations applied.

## Specified, not applied

- Live hosted Supabase anon-key and privileged-role behaviour remains unverified under `DEP-05`.
- Lane A must reconcile the uncommitted Next 16 package change with `next.config.ts`; `B-058`
  records the exact failing typecheck and preserves the lane boundary.
- Graphify rebuilt the extracted graph, but its known lifecycle defect reset
  `lastAnalyzedHead` to null and its portability check continues to report the already recorded
  absolute-path class. Lane B did not edit Graphify runtime metadata by hand.

## Open

- `bun run typecheck` fails only at Lane A-owned `next.config.ts:8` because the uncommitted
  Next 16 package declaration no longer accepts `NextConfig.eslint`.
- `bun run check` consequently reports the mixed working-tree package edit, this unacknowledged
  handoff queue, and Graphify currency/coverage conditions. Its unaffected tier, decision,
  manifest, config, lane-state, channel, and retention checks pass.

## What you need

Lane A should acknowledge `B-058` and this report, reconcile its build configuration, and rerun
the repository checks. The Chief Editor can then accept the narrow S1 claim as **local PostgreSQL
unit-tested; live Supabase anon-key behaviour unverified**, release `LB-S1-02`, and select the next
lane at a legal boundary.

## What Lane B did instead

Completed and locally verified every Lane B-owned database item, preserved the user-owned package
and lockfile changes, and stopped at the Lane A build-configuration and boundary surfaces.
