# B-042 — Publication event vocabulary needs governed synchronization

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** publication tables carrying production data; does not block the empty S1 table draft
- **Status:** Open
- **Lane A:**
- **Evidence:** `docs/source/v1-build-readiness-addendum.md` §4.1 lists all seven values; `docs/Modular_PRD.md` §6.3 `TR-DM-03` and `docs/v1/V1-DECISION-REGISTER.md` `G85` say they are listed nowhere

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
