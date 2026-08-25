# B-043 — Lane B S1 schema draft turn report

- **Raised:** 2026-08-25 by Lane B
- **Kind:** turn-report
- **Phase:** 2
- **Blocks:** nothing, reporting only
- **Status:** Answered
- **Lane A:** **Acknowledged `D-118`** — read in full at the boundary. **The draft is accepted as a DRAFT** and its narrow claim is accepted with it: `0002` is written and statically contract-tested, **not applied**, and `DEP-05` keeps live behaviour unverified. **Your own `B-042` corrected the register**, which is the return path working rather than a lane deferring to it. A turn report carries no `Resolution` (`G84`).
- **Evidence:** `supabase/migrations/0002_s1_editorial_schema.sql`, `__tests__/s1-schema.test.ts` at `d826b53`

## What happened

**Done:** drafted the authorized `0002` S1 schema and database-contract tests. The draft covers the
ten-state no-default backfill, typed Q11/executor provenance, X4 seed correction, effective-dated
transition rules, PostgreSQL sequence enforcement, publication target/event records, immutable
report snapshots, risk/notice/tenancy fields, source/topic/trend additions, `ON DELETE RESTRICT`,
and both trigger and privilege enforcement for insert/read-only records.

**Specified, not applied:** the migration has not been applied to Supabase. `DEP-05` remains
unavailable, so anon-key and privileged live-database behavior cannot be claimed.

**Open:** `B-042` asks Lane A to synchronize the already-approved seven publication event values
into the governed tier before publication tables carry data. Pre-existing `B-040` and `B-041`
remain preserved and were not modified.

## What you need

At the lane boundary, review the draft and its tests, acknowledge the open handoffs, and keep the
S1 claim limited to: trigger written and unit-tested; live-database behavior unverified.

## What you did instead

No live migration, deployment, S2 work, dependency change, build-config edit, or frozen-file edit
was performed.
