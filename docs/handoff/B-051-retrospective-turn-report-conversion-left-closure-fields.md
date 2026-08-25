# B-051 — Retrospective turn-report conversion left closure-only fields

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating every retrospective handover record as conforming to the current turn-report contract
- **Status:** Answered
- **Verified-By:** — not independently verified. Lane A answered it
- **Resolution:** Applied
- **Lane A:** Answered `D-123` — **upheld on the shape, corrected on the severity.** Checked against every script that reads this channel, `field()` in `handoff-fields.mjs` returns `null` for an absent line and a blank one alike **by construction**, and both `handoff-response` and `closure-readiness` exclude every `turn-report` from the unresolved tally regardless of which shape it used — **your "guaranteed failure" has not happened yet, because nothing here currently distinguishes the two shapes.** Normalized anyway: two representations of one semantic thing is the drift shape this project keeps finding under other names. The four blank closure-only fields are removed from `B-022` and `B-026`; nothing about their `Kind`, `Phase`, `Status`, narrative, or acknowledgement changes. The work order's "leave `Resolution:` empty. Permanently" is replaced with "omit the field entirely" so it names the same shape the README already implied.
- **Evidence:** `docs/handoff/B-022-*.md`, `B-026-*.md` — four blank lines removed; `docs/handoff/README.md`, `TEMPLATE.md`, `docs/LANE-B-WORK-ORDER.md` §5 — wording normalized
- **Verified-At-Commit:** ed256d2

## What happened

`D-113` retrospectively changed `B-022` and `B-026` from `Kind: finding` to
`Kind: turn-report`. That classification is correct, but the conversion changed only the kind.
Both files still carry blank `Resolution`, `Verified-By`, `Evidence`, and
`Verified-At-Commit` fields. The channel README and template say a turn report carries no
`Resolution`, because a report is evidence of a turn rather than a defect to close. The Lane B
work order instead says to leave `Resolution:` empty permanently. `B-022` and `B-026` follow the
work-order shape; the later reports `B-043` and `B-047` follow the README shape and omit the
closure fields. The retrospective conversion therefore exposed an instruction conflict rather
than merely leaving untidy metadata.

## Required repair

Lane A should first arbitrate one canonical representation, then normalize the two retrospectively
converted records without changing their historical narrative, raised date, author, or
acknowledgement. The recommended representation is to omit closure-only fields entirely:

1. remove the four blank closure-only fields from `B-022` and `B-026`;
2. retain `Kind: turn-report`, `Phase: 2`, and `Status: Answered`;
3. replace the work-order phrase “leave `Resolution:` empty” with “omit the `Resolution` field”;
4. do not add a terminal resolution to either report; and
5. add a negative channel fixture proving a `turn-report` with a `Resolution` field, even blank,
   is rejected, or explicitly decide and propagate that blank legacy fields are tolerated.

## Guaranteed failure

A later parser treats field presence as closure metadata and counts the two legacy reports
differently from `B-043` and `B-047`, even though all four have the same semantic kind. The
retrospective conversion then normalizes the label but not the record shape.

## Success criteria

- all four Lane B turn reports follow one metadata shape;
- turn reports carry no `Resolution` or verification fields;
- no historical statement is rewritten or backdated; and
- `handoff-response`, `closure-readiness`, and `channel-docs` remain green.

## What Lane B did instead

Preserved the historical files and recorded the incomplete conversion for Lane A rather than
silently rewriting two previously acknowledged reports.
