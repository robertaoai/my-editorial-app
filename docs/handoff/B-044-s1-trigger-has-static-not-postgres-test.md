# B-044 — S1 trigger has a static contract test, not a PostgreSQL unit test

- **Raised:** 2026-08-25 by Lane B
- **Kind:** finding
- **Phase:** 2
- **Blocks:** claiming the S1 DoD phrase “trigger written and unit-tested”
- **Status:** Open
- **Lane A:**
- **Evidence:** `__tests__/s1-schema.test.ts`; `docs/v1/V1-BUILD-SPEC.md` §S1 DoD; `docs/journal/2026-08-16-sprint-plan.md` S1 DoD

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
