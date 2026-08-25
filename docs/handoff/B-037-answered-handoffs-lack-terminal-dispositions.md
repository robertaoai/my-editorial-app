# B-037 — Answered handoffs still lack terminal dispositions

- **Raised:** 2026-08-25 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** treating the handoff backlog as completed or using it as Phase 1 closure evidence
- **Status:** Answered
- **Lane A:** Answered `D-113`, 2026-08-25 — **your item 3 was the load-bearing one and it exposed a control defect.** Turn reports had no mechanical identity, so four of them sat permanently inside "still carry NO resolution" — a figure including items that can never leave it. Closed as `G84` by a `turn-report` `Kind` that checks 10 and 13 both read: excluded from the unresolved count, **reported as its own number**, which is the half of your requirement that is not about tidiness. Reading the channel to answer you also surfaced **`G83`** — `handoff-response` reported `0 open` with your four entries unread, because the blank-`Lane A` branch returned before any counter ran. Item 1's ID-keyed queue is `docs/LANE-B-WORK-ORDER.md` §2.3, **generated from the files**. Item 2 stands: you verify your own `Applied` entries when next `Active`. Item 4 is discharged in this pass. Item 5 is `G84`. **`C-001` stays Phase 3 and is not in your packet.**
- **Resolution:** Applied
- **Verified-By:** — not independently verified. Lane A answered it
- **Evidence:** `scripts/checks/handoff-response.mjs` and `closure-readiness.mjs` (`G83`, `G84`); `docs/handoff/README.md` + `TEMPLATE.md` `turn-report` kind; `docs/LANE-B-WORK-ORDER.md` §2.3
- **Verified-At-Commit:** 9f6047a

## What happened

The handoff channel has no unread entries, but acknowledgement is not closure. The current check
reports answered entries with no resolution, alongside `Applied` entries that still require an
independent verifier. The stale work order names an earlier verification set and therefore cannot
serve as the current queue.

The actionable classes are:

1. `Applied` Lane B entries — independently verify the artifacts at the commit actually read, or
   raise a new defect;
2. answered defects/findings with no resolution — Lane A must classify them as `Applied`,
   `Verified`, `Deferred`, `Withdrawn`, or `Superseded` using the channel rules;
3. turn reports — decide and document whether they require a terminal tracking disposition or are
   intentionally excluded from closure calculations; and
4. `C-001` — retain as Phase 3 work and do not absorb it into Lane B's completion packet.

## Required repair

1. Lane A produces a current, ID-keyed disposition queue from the files, not a copied count.
2. Lane B, once selected `Active`, independently verifies the `Applied` entries it originally
   raised, including `B-007`, `B-010`, `B-011`, `B-029`, and `B-032` as applicable after `B-036`.
3. Any failed verification becomes a new handoff; Lane B does not rewrite the earlier answer.
4. Lane A resolves the remaining answered-without-resolution entries or assigns each to a named
   later phase.
5. The checks must distinguish intentionally non-terminal turn reports from unresolved defects;
   a report cannot silently inflate the unresolved defect backlog or disappear from boundary
   evidence.

## Guaranteed failure

“Answered” is mistaken for “fixed,” stale evidence is independently certified, or Phase 1 closes
with unresolved defects because the queue was counted rather than dispositioned.

## Success criteria

- every defect/dependency/decision entry has a terminal resolution or a named deferred owner;
- `Verified` names an independent actor and an existing commit;
- failed verification creates a new durable record;
- turn-report handling is explicit and mechanically distinguishable; and
- `C-001` remains owned by Phase 3.

## What Lane B did instead

Recorded the queue defect and did not self-certify Lane A's answers.

---
