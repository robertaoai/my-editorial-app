# B-044 — S1 trigger has a static contract test, not a PostgreSQL unit test

- **Raised:** 2026-08-25 by Lane B
- **Kind:** finding
- **Phase:** 2
- **Blocks:** claiming the S1 DoD phrase “trigger written and unit-tested”
- **Status:** Answered
- **Verified-At-Commit:** 1cf6479
- **Verified-By:** — not independently verified. Lane A answered it
- **Resolution:** Applied
- **Lane A:** Answered `D-118` — **accepted in full, and the DoD phrase is NOT recorded.** You audited your own work and reported that it falls short of the phrase you were entitled to claim. **`__tests__/s1-schema.test.ts` asserts on migration TEXT** — it never starts PostgreSQL, applies `0001` and `0002`, invokes the trigger, or observes a rollback. **A text assertion stays green while the SQL is syntactically invalid**, which is `probe_that_cannot_fail` in the one place the whole sequence invariant lives. **The governed DoD distinguishes the live anon-key test (`DEP-05`, may remain unverified) from a local PostgreSQL unit test (still required)**, and your entry is the first thing in this corpus to hold those apart. **Carried as `C-33`**; §5's Lane B row records the narrow claim so no later reader inherits the wider one. **Your eight-case list is adopted as the test contract.**
- **Evidence:** `__tests__/s1-schema.test.ts` retains the static contract; `supabase/tests/database/s1_transition_enforcement.test.sql` passes 30 PostgreSQL assertions after a clean local `0001` + `0002` reset at `1cf6479`; independent verification remains pending

## What happened

The Bun test reads `0002_s1_editorial_schema.sql` as text. It proves that required declarations
and forbidden literals are present or absent, but it never starts PostgreSQL, applies `0001` and
`0002`, invokes the trigger, or observes transaction rollback. Calling this a trigger unit test
would overstate the evidence.

`DEP-05` withholds the provisioned Supabase credentials, but the governed DoD distinguishes that
live anon-key test from a local or branch PostgreSQL unit test. The former may remain unverified;
the latter is still required before the exact S1 completion phrase is earned.

## Required repair

1. Keep `__tests__/s1-schema.test.ts` and label it a static migration-contract test.
2. Add a database-executed S1 test script under Lane B's surface, using an already provisioned
   PostgreSQL runner or a dependency requested from Lane A.
3. Apply `0001` then `0002` to a disposable database and test at minimum:
   - valid `Logged → Validated` with exactly one preceding transition;
   - invalid `Logged → Drafted` rejected by PostgreSQL;
   - state change with no transition rejected;
   - agent execution of T5 rejected;
   - no-op/concurrent duplicate attempt rolled back without an orphan transition;
   - UPDATE and DELETE rejected for every insert/read-only table;
   - approval without an eager target rejected; and
   - publication without a same-transaction live publication event rejected.
4. Roll back every fixture or destroy the disposable database.
5. Keep the separate `DEP-05` caveat: actual Supabase anon-key and privileged-role behavior remains
   unverified until credentials are supplied.

## Guaranteed failure

A text assertion remains green while the SQL is syntactically invalid or PostgreSQL executes the
trigger differently from the intended transaction model. The handoff then says “unit-tested” when
no database ever ran it.

## Success criteria

- the migration applies cleanly after frozen `0001` in disposable PostgreSQL;
- the negative cases fail at the database and leave no orphan evidence rows;
- the positive case commits exactly one transition and one state change; and
- the report says “local PostgreSQL unit-tested; live Supabase anon-key behavior unverified.”

## What Lane B did instead

Recorded the evidence boundary and retained the passing static contract test. No database was
started and no dependency or build configuration was added during this closure audit.

## Verification review — 2026-08-29

**Keep `Applied`.** The static contract suite passes, but no PostgreSQL process applied
`0001` + `0002` and exercised the trigger. `C-33` therefore remains the active child of the
current `LB-S1-02` run.

**Draft Lane B fix:** execute the eight database cases already specified in this entry against a
disposable PostgreSQL database, prove rollback leaves no orphan transition, and keep live
Supabase anon-key behavior explicitly unverified until credentials are available.

## Repair applied — 2026-08-29

**Keep `Applied`; independent verification is still required before `Verified`.** Commit
`1cf6479` creates the database test and executes this entry's adopted eight-case contract against
the disposable local Supabase PostgreSQL instance. The clean reset applies frozen `0001` followed
by corrected `0002`; pgTAP passes all 30 assertions, and a final reset removes every fixture.

The first PostgreSQL run found a defect the static suite could not see: comparing a row's `xmin`
to `txid_current()` rejects a valid transition inside a savepoint because the two can carry a
subtransaction ID and top-level ID respectively. The migration now uses MVCC visibility plus an
in-progress creating transaction, which preserves the same-transaction rule across savepoints.

The permitted claim is now **local PostgreSQL unit-tested; live Supabase anon-key behavior
unverified**. `DEP-05` remains separate and unchanged. `B-059` is the canonical turn report for
`LB-S1-02`; Lane A acknowledgment and an independent rerun remain open.
