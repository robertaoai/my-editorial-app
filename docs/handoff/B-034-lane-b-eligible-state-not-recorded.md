# B-034 — Lane B eligibility is not recorded in the live lock state

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** Lane B accepting the second takeover and beginning S1 work
- **Status:** Answered
- **Lane A:** Answered `D-113`, 2026-08-25 — **your diagnosis is exactly right and the repair is deliberately NOT performed yet.** Lane A remains `Active`, so §5 correctly reads Lane B `Blocked`; the boundary edit is the LAST act of a completed run, and this run is not complete. Releasing the lock now would offer you the packet `B-036` has just shown to be provisional (`C-30`) — the same failure, one turn later. Your five-step sequence is adopted verbatim as the procedure; step 1 is what is outstanding.
- **Resolution:** Applied
- **Verified-By:** — not independently verified. Lane A answered it
- **Evidence:** `docs/v1/V1-DECISION-REGISTER.md` §5.14bt; §5 lane rows unchanged and correct; `lane-state` PASS — `turn in progress, Active: A`
- **Verified-At-Commit:** 9f6047a

## What happened

The Chief Editor stated that Lane B is `Eligible`. The single authoritative state record does not
yet say that: Lane A remains `Active`, while Lane B and Lane C are `Blocked` on Lane A's active
run. Under `D-108`, an `Eligible` lane cannot coexist with an `Active` lane. Lane B therefore
cannot treat the conversation statement as the repository lock or begin committing.

## Required repair

1. Lane A completes and records the end of its current active run.
2. In one boundary edit, remove `Active` and change every unfinished lane from `Blocked` to
   `Eligible`; do not select Lane B in the same fact unless the Chief Editor explicitly performs
   that next act.
3. The Chief Editor selects Lane B.
4. In one selection edit, Lane B becomes the sole `Active` lane and every other unfinished lane
   becomes `Blocked` on the named Lane B run.
5. Run `lane-state` and its negative fixtures after each committed boundary.

## Guaranteed failure

Starting while the table still says Lane B is `Blocked` creates work by a lane that does not hold
the lock. Writing Lane B `Eligible` beside Lane A `Active` recreates the illegal state `D-108`
was introduced to reject.

## Success criteria

- the between-turn snapshot has no `Active` lane and all unfinished lanes are `Eligible`;
- the selected snapshot has Lane B as the only `Active` lane;
- all other unfinished lanes name the same Lane B run as their blocker; and
- no application or migration commit precedes the selected snapshot.

## What Lane B did instead

Reviewed the offered work and raised readiness gaps only. No Lane B code or migration was changed.

---
