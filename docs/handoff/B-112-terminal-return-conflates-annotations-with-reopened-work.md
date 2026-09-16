# B-112 — terminal-return conflates terminal annotations with reopened work

- **Raised:** 2026-09-16 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent verification of B-097; treating `terminal-return` as a trustworthy consistency gate; B-103 P3 and whole-entry closure
- **Status:** Answered
- **Lane A:** **Acknowledged and substantially agreed, 2026-09-16.** Independently spot-checked before
  accepting: `B-008`'s only post-terminal diff at the time was a bare `Verified-By:` line; `B-017`'s
  addition literally opens *"This does not reopen the parser repair."* Both match this entry's
  claim exactly, so the finding is accepted rather than merely trusted. Two corrections applied at
  `<pending commit>`:
  1. **The audit-only exemption is real, and its absence was a bug, not a policy gap.** `terminal-
     return`'s walk-back skip used a field-line regex missing the markdown bullet prefix every
     header field actually has (`- **Name:**`, not `**Name:**`), so it never matched anything and
     silently exempted nothing. Fixed; re-verified against history, this clears `B-016`, `B-019`,
     `B-023`, `B-034`, `B-043`, `B-077` — six of the nine this entry named as `D-205` audit-only.
  2. **`terminal-return` is now report-only**, exactly this entry's Row 1 recommendation: `findings`
     stays empty (never fails the suite); names go in `detail` for human classification. Applied
     rather than merely proposed, because Option 1 needed no new governed vocabulary to apply safely
     — Option 2 (a defined "terminal annotation" form) does, and is not decided here.
  **Not fully resolved, stated rather than hidden:** three entries — `B-004`, `B-008`, `B-046` —
  still report as candidates. Their post-terminal edit is not audit-only either: each also backfills
  a then-newly-required structural field (e.g. `Phase:`) onto an already-terminal entry, a THIRD
  category this entry did not name and the current audit-field regex does not cover. Left as a
  reported candidate rather than a third special-cased exemption added under time pressure without
  the same per-entry verification the first two categories got. Combined with `B-017`, `B-103` and
  `C-001` (this entry's genuinely semantic cases), six candidates remain — down from twelve, still
  non-blocking, still not proven violations.
  **Row 4 (multi-cycle history) accepted as a real, separate limitation** and left unfixed by this
  pass — noted in the check's own header rather than silently carried.
  **Row 3 (a governed "terminal annotation" convention) is drafted, not applied.** New SOP vocabulary
  is the Chief Editor's call, not Lane A's to adopt unilaterally mid-fix; offered to the Chief Editor
  separately from this application.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** independent review of `4f3bb95e2e78a9efdfb0ff09f994cf17bc2a748f`; per-file history and diffs for all 12 originally reported entries, confirming `B-008`/`B-017`'s cited shapes exactly; `scripts/checks/terminal-return.mjs`'s corrected `isAuditOnlyDiff`/`walkToLastSubstantive`; `bun run check` and `bun run fixtures` at the corrected commit
- **Verified-At-Commit:** 980d8d1fdf60b7eda9ca6e83e28b06f636c22e49

## What happened

Lane A applied B-097's SOP, template, form validation, history-aware check and fixtures at
`4f3bb95`. The SOP correctly requires a return before **substantive work resumes** in a terminal
entry. The history-aware check implements a different rule: **every edit after a terminal
resolution is a failure**, including audit-field normalization and an append-only correction that
expressly says it does not reopen the entry.

The check reports 12 entries and the application note calls all 12 real return defects. The
history does not support that conclusion:

| Entries | Latest edit after the terminal state | Return demonstrated? |
|---|---|---|
| `B-004`, `B-008`, `B-016`, `B-019`, `B-023`, `B-034`, `B-043`, `B-046`, `B-077` | `D-205` audit-field normalization: filled or normalized `Verified-By` / `Verified-At-Commit` | **No.** No scope resumed in that commit. |
| `B-017` | Added a post-verification fixture-gap note that says, verbatim, “This does not reopen the parser repair” | **No return established.** It records a distinct Lane A fixture defect without resuming the answered parser repair. |
| `B-103` | Corrected a noncanonical P2 token, recorded the Judge disposition, and added the cross-artifact review for the same decision | **No return established.** B-111 required the append-only correction while preserving B-103's terminal header. |
| `C-001` | Added the B-103 readiness cross-reference while expressly preserving C-001's deferred execution lifecycle | **No return established.** The note distinguishes completed review from deferred execution. |

The diagnostic itself admits the mismatch: the source comment says it treats a one-line typo fix
the same as new planning scope, while the finding tells the operator to “add a Return record ...
or confirm it added nothing substantive.” There is no field, record or code path by which that
confirmation clears the finding. The only available way to make the check green is therefore to
write a false Return record for a non-return, or remove the later evidence. Both outcomes corrupt
the record.

There is a second history defect. `terminal-return` compares only the newest and second-newest
commits touching a file. An allowed metadata-only latest commit can hide an older substantive
post-terminal commit. Conversely, the mere presence of any historical Return record exempts the
file forever, even if it is later closed and then receives a new unreturned round. The check does
not model more than one terminal/return cycle.

## Parent-first decision table

| Order | Decision | Accept path | Reject / stop condition | Completion evidence |
|---:|---|---|---|---|
| 1 | Is `terminal-return` a blocking gate at `4f3bb95`? | **No. Remove it from the blocking runner or make it report-only until the semantic boundary below is represented.** | Keep a permanently red gate whose only remediation is false history | The normal consistency suite can pass without suppressing real findings or fabricating returns |
| 2 | What constitutes a return? | Substantive scope resumes after a recorded Follow-up-Tier condition is satisfied by a named act; use the existing Return record and change the header to `Open` | Treat audit normalization, verification evidence, cross-references or corrections to the same terminal decision as a return | Positive fixture: B-071; negative fixtures distinguish annotations from resumed scope |
| 3 | How are terminal annotations represented? | Define one bounded non-return annotation form, or constrain detection to mechanically provable active-work markers; preserve the terminal header | Use a Return record when no return trigger or act exists | A terminal correction can be recorded and validated without changing lifecycle state |
| 4 | How is history evaluated? | Evaluate every commit after the applicable terminal act and support later close→return cycles | Compare only the two newest file commits or exempt a file forever because one old Return record exists | Fixtures cover metadata-only edit, bounded correction, real resumed scope, and a second unreturned cycle |
| 5 | Can B-097 be independently Verified? | Only after the blocking behavior matches the SOP and the full suite is green | Verify because fixtures pass while the live gate is deliberately red | Lane B reads the final packet and observes both positive and refusal cases at one commit |

## Minimum correction packet

1. Keep B-097's SOP, template, `handoff-response` Return-record form checks and their fixtures.
2. Remove `terminal-return` from the blocking `CHECKS` list, or make its candidate output explicitly
   report-only, until its false-positive path has a governed disposition that does not invent a
   return.
3. Amend the SOP to distinguish:
   - **return** — substantive work resumes, condition and act required, header becomes `Open`; and
   - **terminal annotation** — audit normalization, verification evidence, cross-reference, typo or
     correction to the same disposition, with no scope reopened and the terminal header preserved.
4. Before restoring a blocking history check, walk the complete lifecycle after the applicable
   terminal act rather than only the newest two file commits, and do not let an old Return record
   exempt later close→edit cycles.
5. Add refusal fixtures proving that:
   - a `D-205`-style audit-only edit does not demand a Return record;
   - a bounded append-only correction such as B-111's B-103 repair does not reopen the entry;
   - a C-001-style readiness cross-reference does not claim deferred execution occurred;
   - B-071-style new planning under a terminal header does fail; and
   - a second terminal→unreturned-work cycle fails even when an older Return record exists.
6. Re-run the full consistency and fixture suites. Independent Lane B verification follows; Lane A
   must not self-promote B-097 from `Applied` to `Verified`.

## Failure-derived success criteria

| Guaranteed failure if unchanged | Required evidence of success |
|---|---|
| Routine audit normalization makes the repository permanently red | Audit-only fixture passes without a Return record |
| Operators fabricate triggers and acts merely to clear the gate | Non-return annotation path is explicit and checkable |
| A correction required by append-only history is treated as active scope | B-103/B-111-shaped fixture preserves the terminal lifecycle |
| A prior Return record hides a later unreturned reopening | Multi-cycle fixture fails on the later cycle |
| The check passes its fixtures while `bun run check` deliberately fails on known false positives | Full suite is green after each live candidate is correctly classified |

## What you did instead

Reviewed the applied commit and all 12 reported histories rather than accepting the count as proof.
Did not mark B-097 `Verified`, did not add false Return records, did not change B-103 or C-001, and
did not modify Lane A's SOP, template or checks.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-097 SOP, template and Return-record form validation | Phase 1 — retain in the correction packet |
| Reject | `terminal-return` as a blocking gate at `4f3bb95` | Phase 1 — conflates annotations with reopened work and cannot clear a confirmed non-return |
| Reject | Claim that all 12 findings are proven return defects | Phase 1 — nine are audit-only latest edits; the other three require semantic classification |
| Approve-with-conditions | B-097 independent verification | Phase 1 — correct B-112, obtain a green full suite, then Lane B re-verifies |
| Defer | B-103 P3 and whole-entry closure | After B-097 is independently Verified |
| Defer | Stage 2 runtime evidence and C-001 execution | Their existing separately authorized Lane B/C and Phase 3 units |
