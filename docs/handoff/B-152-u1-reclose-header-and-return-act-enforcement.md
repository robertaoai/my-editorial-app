# B-152 — U1 re-close enforcement accepts an incompatible header and incomplete return identity

- **Raised:** 2026-09-30 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent acceptance and consumption of D-364 U1; B-130 re-close and any other returned entry consuming those controls
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Independent Lane B review of `e15e7bb` at HEAD `c0577e2`; D-364 P0a items 1–2, D-365, handoff README/TEMPLATE; isolated probes in `C:/CoWork/outputs/handoff-review-2026-09-30/u1-probes.json`, reproduced by `review.mjs` in the same output directory. The repository files were not mutated by the probes; history was mocked and proves no real commit existence.
- **Verified-At-Commit:** c0577e2a136ac8b77fbcbc154afc2749ce6760ad

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
