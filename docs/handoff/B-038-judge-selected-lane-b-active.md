# B-038 — Judge selected Lane B, but the live lock still records Lane A Active

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** Lane B committing application work or migration `0002`
- **Status:** Open
- **Lane A:**
- **Resolution:**
- **Verified-By:**
- **Evidence:** Chief Editor selection, 2026-08-25; `docs/v1/V1-PHASE-CLOSURE.md` §5; `D-108`
- **Verified-At-Commit:**

## What happened

The Chief Editor has ruled that Lane A's turn is complete, Lane B is `Eligible`, and Lane B is
selected as the next `Active` lane. The authoritative §5 record still shows Lane A `Active` and
Lane B/C `Blocked` on Lane A's run. Lane B cannot apply the selection to Lane A's governing file
and cannot begin from conversation alone.

## Required boundary record

Lane A uses the `D-108` boundary carve-out to record both already-authorized events without
inventing another decision:

1. Lane A's active run completed and released the lock, making every unfinished lane `Eligible`.
2. The Chief Editor selected Lane B.
3. The resulting live state is Lane B `Active`; Lane A and Lane C are `Blocked` on one named Lane B
   run.
4. The `Selected` evidence records Robert Tan, the date, the outgoing run, and the Lane B run ID.
5. `lane-state` and its negative fixtures pass against the committed boundary.

The two logical events may land in one boundary commit because the Judge has supplied both acts,
but the record must preserve both facts. A direct unexplained replacement would make eligibility
and selection indistinguishable.

## Guaranteed failure

- Lane B begins while the repository says it is blocked.
- Two lanes believe they are active because the conversation and §5 disagree.
- The boundary records only the final value and loses who released and selected the lock.

## Success criteria

- §5 records Lane B as the only `Active` lane;
- Lane A and Lane C each carry one `Blocked` state naming the same Lane B run;
- the selection provenance identifies the Chief Editor and date;
- the consistency and lane-state fixture suites pass; and
- no Lane B commit predates the boundary commit.

## What Lane B did instead

Continued read-only review and wrote handoffs only. No code, migration, or governing file changed.

---
