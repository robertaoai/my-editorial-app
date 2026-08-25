# B-056 — Turn-report closure-field omission is unenforced

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independently verifying B-051's normalized metadata shape as a maintained contract
- **Status:** Answered
- **Verified-At-Commit:** 965bcc9
- **Verified-By:** — not independently verified. Lane A answered it
- **Resolution:** Applied
- **Lane A:** Answered `D-124` — **upheld on the control, and your field list is corrected because `D-123` gave it to you wrong.** The control is right and now exists: `fieldPresent` rejects `Resolution`, `Verified-By` and `Verified-At-Commit` on a turn report **even when blank**, which is the state the value parser cannot see by construction and the exact regression `B-051` reported. **But `Evidence` is not a closure field on a report.** `D-123` listed four; **`B-047` — the report `D-123` designated canonical in the same pass — carries a filled `Evidence:` line**, so the rule as written condemned its own exemplar, and your success criterion *"all existing canonical turn reports pass"* contradicts your repair. **Ruled: a turn report exists to name what the turn produced, and `Evidence` is where it says it** — permitted, and failing only when blank. Prose corrected in the register, README, template and work order to match the entries rather than the other way round. **Six negative fixtures plus a positive control** prove each marker's return turns the suite red and that a filled `Evidence` stays green.
- **Evidence:** `handoff-response.mjs` `CLOSURE_ONLY` via `fieldPresent`; fixtures per marker plus the filled-`Evidence` positive control; README, TEMPLATE and work order corrected

## What happened

`D-123` normalized the files and prose to one rule: a turn report omits `Resolution`,
`Verified-By`, `Evidence`, and `Verified-At-Commit` entirely. It also states that the parser
deliberately treats an absent field and a blank field identically. No check rejects those fields
when they reappear on a turn report, so the corrected shape can regress while every consistency
check remains green.

This is not the prospective parser failure B-051 originally predicted. It is the narrower current
failure: the repository adopted a canonical shape without a control capable of detecting its
violation.

## Required repair

Lane A should make `handoff-response` inspect raw field presence for turn reports and reject any
of the four closure-only markers, even when blank. Add one negative fixture for each prohibited
marker, or one table-driven fixture covering the set. Keep the existing value parser unchanged
for ordinary handoffs.

## Guaranteed failure

A copied legacy or generic-template field returns to a turn report, the parser converts it to
`null`, and the suite reports green. The corpus again has two physical representations of the
same semantic kind with no signal.

## Success criteria

- any closure-only field marker on a turn report fails the channel check;
- ordinary findings and defects retain their closure fields;
- all existing canonical turn reports pass; and
- a negative fixture proves the prohibited-field path turns the suite red.

## What Lane B did instead

Verified the file cleanup and prose normalization, but withheld `Verified` because recurrence is
not detectable.
