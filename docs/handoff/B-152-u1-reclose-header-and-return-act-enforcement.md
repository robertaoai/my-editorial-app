# B-152 — U1 re-close enforcement accepts an incompatible header and incomplete return identity

- **Raised:** 2026-09-30 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent acceptance and consumption of D-364 U1; B-130 re-close and any other returned entry consuming those controls
- **Status:** Answered
- **Lane A:** **Answered 2026-09-30 (`D-366`), applied at `4c5b750`.** F1: a completed return now requires Status
  exactly `Answered`, so `Withdrawn` beside a Re-close record fails. F2, under the Judge's token rule:
  `Reclosed-Return` must cite the return's `Returned-At-Commit` and its `Return-Act` — every `D-NNN` the act names,
  or its date when it names none — and wrapped continuation lines are read. The SOP README and TEMPLATE state the
  rule. Fixtures prove each item this entry asked for: a completed return passes as `Answered`/`Applied` and as
  independently `Verified`; `Withdrawn` fails; SHA-only, wrong-act, act-without-SHA and date-only-uncited citations
  fail; a correct two-part citation passes. `bun run check` passes 19/19, and `bun run fixtures` on a clean tree at
  `4c5b750` passes 209/209 with the tree restored. Lane B re-review and Lane C Level 2 review come next, before B-130
  consumes the controls.
  *Earlier receipt:* Acknowledged 2026-09-30, receipt only, read at `c0577e2`. Both findings are confirmed in the source at
  `e15e7bb`. **F1:** `checkReturnRecord`'s completed-episode branch rejects only a missing or `Open` Status, and the
  general branch accepts `Withdrawn`. **F2:** the episode binding keeps only `Returned-At-Commit`, and `citesCommit`
  tests only the SHA, so `Return-Act` is never compared. The `recloseRecordForm` fixtures had no case for either
  shape, so D-365's "every fixture behaved as intended" was true and still missed both; this is recorded as a
  critic finding against D-365. `U4-G8` (the `Verified-By` rule) is unaffected. The repair is inside `U1`'s
  `D-364` bound; its F2 matching rule is presented to the Judge before it is applied. The Lane C concurrence
  supplied by the Judge is received as evidence only. B-130 stays `Open`.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent re-review 2026-09-30
- **Evidence:** D-366 repair at `4c5b750`, independently read at `b2b1e87`; response/history controls, README/TEMPLATE and fixtures reviewed together; 209/209 fixtures independently re-run on the clean tree, restored afterward; four additional isolated token/wrapping probes passed (`C:/CoWork/outputs/handoff-review-2026-09-30/u1-re-review-probes.json`). Original defect evidence at `c0577e2` remains below. Current Level 1 verification is bounded to the B-152 correction; Lane C Level 2 acceptance of the repaired U1 remains required before B-130 consumes it.
- **Verified-At-Commit:** b2b1e871694c07d9be328754c7766cea1f7b2787

## What happened

**Parent:** [B-150](B-150-premature-closure-audit-and-residual-transfer-plan.md), S5 / O0. This is the new, bounded correction child for two demonstrated gaps in the applied U1 form control. It does not repeat B-130's accepted loader work, B-151's Jev coverage concern or the existing historical-closure audit.

Lane B reviewed U1's SOP/template, `handoff-response.mjs`, `terminal-return.mjs`, relevant fixtures and their coupling at the named revision. The existing positive re-close and wrong-commit negative probe behave as intended. Two distinct parts of the governed episode identity/header contract still pass malformed input:

| Finding | Governed contract | Reproduction and narrower observed result |
|---|---|---|
| F1 — completed return permits the wrong Status | D-364 item 2 and README require the completed latest episode to read Answered with a Resolution | A complete Return/Re-close pair with `Status: Withdrawn` and `Resolution: Applied` produces zero `handoff-response` findings. Its completed-episode branch rejects missing/Open, not every value other than Answered; the general status branch separately accepts Withdrawn. The two branches therefore admit a combination the re-close contract forbids |
| F2 — Reclosed-Return omits one of its required identity components | D-364 item 1 and the template require Return-Act **and** Returned-At-Commit | A citation containing only the correct return SHA produces zero findings. A citation with a different Return-Act and the correct SHA also passes. `latest` retains only the SHA, and `citesCommit` checks only SHA presence. Required Act presence is unenforced; substantive identity of the cited act also remains unproved |

These are control gaps, not a finding that a live handoff has already used either malformed shape: B-071 and B-130 currently have Return records and no live Re-close record. The supplied Lane C assessment calls for the U1 review but is not itself an independent code acceptance of this correction.

## What you need

Lane A acknowledges this entry, fixes the two boundaries in U1's existing owned controls and adds failure-derived fixtures before any returned handoff consumes the form:

1. Require Answered for the latest completed return, while retaining Open/no Resolution for the latest uncompleted return. Prove positive Answered/Applied and independently verified completed records; reject Withdrawn/Applied, Open with a re-close, and a later return covered by an older re-close. Do not remove genuine withdrawal from the general handoff vocabulary.
2. Require both components of Reclosed-Return and bind them to the preceding Return record. Preserve existing commit-abbreviation support and all Return history. Test missing Act, missing SHA, correct SHA with a different Act, and a correct two-component citation. If reliable Act binding requires a new citation syntax or changes the adopted contract, present that bounded question to the Judge before changing the form; do not silently weaken it to commit-only identity. This is not a request to prove Completion-Evidence truth with a parser.
3. Check coupling/history and run the appropriate fixtures on a clean, isolated review tree or after the raiser edits are durably recorded. The current shared tree contains review edits; no destructive fixture run or stash of another actor's work is authorized by this entry.
4. Record the applying revision and honest Applied disposition. Lane B re-reviews the fix; Lane C performs Level 2. Both review receipts precede B-130's receiver Re-close, which then needs its own independent verification.

## What you did instead

Ran five isolated probes with the real form checker: a valid completed pair passed and a wrong SHA was rejected; Withdrawn/Applied, SHA-only citation and wrong-Act/right-SHA citation passed unexpectedly. The history helper reported no findings under a mocked ordered history, as expected from its commit-order scope. No repository control, receiver answer, source disposition, Register act, application or test construction changed. The unused number B-152 is used only for this correction.

| Item | Verdict | Condition / follow-up phase |
|---|---|---|
| U1 consumption in its current form | Reject | Correct F1/F2 and independently review before use. Phase 1 / O0 |
| Bounded U1 repair | Approve-with-conditions | Lane A fixes within D-364's bound; any required contract extension returns to the Judge; fixtures and Level 1/2 receipts precede use. Phase 1 |
| B-130 terminal closure | Defer | Reviewed controls -> receiver Re-close/Applied -> independent verification. Phase 1 |

**Supplied Lane C concurrence, received 2026-09-30:** the Judge supplied attachment `906608b5-a1ff-4bd9-9747-d12e09b432e3/Pasted text.txt` (SHA-256 `06926b1a3599abc235a38d1a0b631de26063394a5bb5bdbd300717e1fdb19e08`). It reports an independent source inspection at `c0577e2` and concurs with F1/F2 and rejection of current U1 consumption. This is supplied review evidence, not a Lane A acknowledgement, disposition of B-152, actual repair or Level 2 acceptance of a repaired control. F1's condition is in `checkReturnRecord`'s completed-episode branch (the attachment calls it `checkRecloseBlock`); F2 is the commit-only binding in the same episode validator. The receiver field and Open status remain unchanged.

## Independent Lane B re-review — 2026-09-30

**Current result:** the Judge authorized this re-review after Lane A completed its work. The D-366 repair at
`4c5b750` satisfies B-152 F1/F2 and its failure-derived control criteria, independently read at `b2b1e87`.
The historical rejection above describes `e15e7bb`; it does not describe the repaired control.
Lane A's answer is preserved. This entry now records `Answered` / `Verified` for that bounded correction.

| Criterion | Independent evidence / result |
|---|---|
| F1 — completed episode requires Answered | Source requires the Answered state; fixtures accept Answered/Applied and independently Verified, reject Withdrawn and Open beside a completed episode, and keep the latest uncompleted return Open |
| F2 — citation binds act and commit | Source compares every D-NNN in the Return-Act, or dates when no decision ID exists, plus the existing abbreviated-SHA rule. Fixtures reject SHA-only, wrong-act, act-without-SHA, uncited date and unidentifiable act; valid date-only and wrapped citations pass |
| Multiple IDs and both wrapped fields | Four additional isolated probes pass: both IDs in a wrapped Return-Act are required; omitting the second or substituting D-3000 for D-300 fails; an abbreviated SHA with a wrapped Reclosed-Return passes. These are form probes, not history proof |
| Coupled controls and actual history | README/TEMPLATE agree with the adopted token rule. Independently re-run existing fixtures: **209/209**, working tree restored. Live-history fixture walks 92 terminal-file histories with no uncovered step and proves B-071/B-130's two Return records. Mocked completion-history fixtures retain their stated limits |

**Acceptance boundary:** these controls prove citation/header form, existing revisions and episode ordering;
they do not prove Completion-Evidence truth or close another source's children. The earlier Lane C concurrence
was about the defect at `c0577e2`. It is not Level 2 acceptance of the repair. Lane C's repaired-U1 review still
precedes B-130's receiver Re-close; B-130 then requires its own independent verification. B-071's distinct
obligations, B-150 U2 and B-151 U3 remain with their existing owners. No application construction or lane change
is authorized by this verification.

| Item | Verdict | Condition / follow-up phase |
|---|---|---|
| B-152 F1/F2 repair and Level 1 verification | Approve | Independently verified at the read revision. Phase 1 / O0 |
| Repaired U1 consumption | Approve-with-conditions | Lane C Level 2 review of the actual repair before use. Phase 1 / O0 |
| B-130 closure and Gate 2 | Defer | Reviewed U1 -> receiver Re-close -> source verification; existing U2/U3, source clearance, setup evidence and Judge acts remain required. Phase 1 -> Gate 2 |
