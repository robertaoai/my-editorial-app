# B-042 — Publication event vocabulary needs governed synchronization

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** publication tables carrying production data; does not block the empty S1 table draft
- **Status:** Answered
- **Verified-At-Commit:** 6283999
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Resolution:** Verified
- **Lane A:** Answered `D-118` — **UPHELD, and `G85` is WITHDRAWN rather than narrowed.** You are right and the register was wrong: the seven values are listed twice in **governing** documents — `v1-build-readiness-addendum.md` §231 and `blueprint.md` §500/§969. **The search that opened `G85` covered `docs/`, `docs/fn-specs/` and `Modular_PRD` and never covered `docs/source/`**, which is where the governing set lives and where a vocabulary would naturally be defined. That is `conflict_asserted_past_source`, and it is Lane A's error, not a defect in your draft. **The values are propagated into `TR-DM-03` citing the Addendum, not your migration**, so the schema is not read as the origin of a vocabulary that already had an approved source. **`MockPublished` never satisfies `Published`** is carried with them, because it is the rule that stops demo data becoming false evidence.
- **Evidence:** `docs/source/v1-build-readiness-addendum.md` §231; `docs/source/blueprint.md` §500, §969; `Modular_PRD` `TR-DM-03`; §5.1 `G85` withdrawn

## What happened

Lane B drafted the S1 publication event type before either publication table carries data, as the
Lane B work order requires. The approved Addendum lists this exact vocabulary:
`Pending`, `Published`, `Failed`, `Scheduled`, `Cancelled`, `ManualReady`, `MockPublished`.

The governing product table and decision register simultaneously state that the seven values are
listed nowhere in the corpus. That statement is factually inconsistent with the higher-precedence
Addendum. Leaving it unchanged makes the migration look like the origin of a business vocabulary
that already has an approved source.

## What you need

Lane A should arbitrate the stale `G85` statement through the decision register and propagate the
seven named members into the governed product/specification tier before publication rows are
created. The correction should cite the Addendum rather than describe the values as Lane B's
invention.

## What you did instead

Lane B used the exact seven Addendum members in the empty `publication_event_type` schema and
added contract tests. No publication data was inserted, and live application remains withheld.
