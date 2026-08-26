# B-057 — B-040 application left its closure metadata blank

- **Raised:** 2026-08-26 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** claiming every Lane A handoff application has a tracked closure state
- **Status:** Open
- **Lane A:**
- **Evidence:** `B-040`; `D-134`; `D-135`; `closure-readiness` current detail

## What happened

Lane A appended to `B-040` that all five business values arrived under `D-134` and that the
nine-step runbook was applied in full under `D-135`. The handoff still has a blank `Resolution:`,
blank `Verified-By:`, and blank `Verified-At-Commit:`. The live tracker therefore reports one
answered non-report entry with no resolution.

The work may be applied, but the handoff that owns the work does not record `Applied`. `Answered`
proves Lane A replied; it does not close or even classify the correction.

## Required repair

Lane A should record `Resolution: Applied` and `Verified-At-Commit: 50772f1` on `B-040`, leaving
`Verified-By` explicitly awaiting Lane B. Lane B then independently checks the four policy tiers,
the five consumer dispositions, the retention coupling control, and its adversarial fixtures. Only
that later pass may change the resolution to `Verified`.

Do not create a separate closure spreadsheet or tally. The handoff entry is the tracking record,
and `closure-readiness` derives the portfolio view from it.

## Guaranteed failure

A decision title says the runbook was applied while the authoritative handoff remains unclassified.
A reader equates “57 answered” with “57 closed,” or the phase reaches a Judge boundary with work
that exists but cannot satisfy the terminal-resolution rule.

## Success criteria

- `B-040` records `Applied` at the actual application commit;
- Lane B independently verifies or rejects the nine-step result against named evidence;
- `closure-readiness` reports no answered non-report lacking a resolution; and
- no duplicate tracking artifact is introduced.

## What Lane B did instead

Verified the shared controls already covered by the fixture suite, but withheld verification of
the complete nine-step policy application until its own handoff records the applied state.
