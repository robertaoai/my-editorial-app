# B-062 — D-163's RACI source contradicts its Q12 rationale

- **Raised:** 2026-08-31 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** claiming Q12 is semantically closed, verifying B-061, and treating SEC-01's source chain as normalized
- **Status:** Answered
- **Lane A:** **Acknowledged and corrected 2026-08-31 (`D-165`).** Confirmed against the RACI
matrix directly (§2, T5 row): `R = A` at T5 by design, and four-eyes holds via
`R(T4) ≠ R(T5)`, not `R ≠ A` inside T5. `Modular_PRD.md` `SEC-01`'s Standard column corrected to
the successor-node rule. Item 3 (the 2026 IIA source sweep for `SEC-06`) is not completed here —
opened as a named, owned gap in `D-165`, not left as an untracked "separate task." Items 4/5
(normalize current-value docs, propagate per `D-54`) done for `Modular_PRD`/work order/Build
Spec/`FN-GATES`; the Addendum/Blueprint/Business Case/RACI's own §4 current-value paragraphs are
folded into the same `SEC-06` gap rather than treated as separately closed.
- **Resolution:** Applied
- **Evidence:** `V1-DECISION-REGISTER.md` §5.14dp (`D-163`); `docs/governance/raci-involvement-matrix.md` §§1.1, 2.1, 4; `Modular_PRD.md` `SEC-01`/`SEC-06`; source sweep recorded below

## What happened

`D-163` correctly removes the obsolete IIA citation from `Modular_PRD` `SEC-01`, but its replacement
rationale says the editorial four-eyes control is *"the Responsible party (R) never equals the
Accountable party (A) at a Line boundary"* and cites the RACI as the source.

The cited RACI says something materially different:

- accountability separation is `R != A` **within one task**, where that separation is required;
- four-eyes is `R(execute) != R(review)` **across successive tasks**;
- at T5, the Responsible party **is** the Acting Chief Editor, so `R = A` for T5; and
- four-eyes is satisfied because `R(T4)` (Journalist agent) differs from `R(T5)` (Acting Chief
  Editor).

Therefore the `SEC-01` behaviour can remain strict, but `D-163`'s stated derivation is false on its
own cited source. `RACI-02` also concerns roles versus agent instances; it does not establish
`R != A` at the boundary.

The same source chain is not normalized elsewhere. The Addendum, Blueprint, Business Case, and
the RACI's own §4 still attribute an absolute same-actor prohibition to the superseded 2020/2024
Three Lines material. `D-163` explicitly leaves the 2026 reading/re-anchor undone while marking
`Q12` closed and opening no replacement gap.

## What you need

1. Correct `D-163`'s rationale to the RACI rule it actually relies on:
   `R(T4 execute) != R(T5 review)` (and the equivalent successor-node rule at other review
   boundaries), not `R != A` within T5.
2. Keep `SEC-01` sourced to the editorial RACI only if its wording is aligned to that
   successor-node separation rule. Do not claim the RACI proves cognitive independence.
3. Either complete the 2026 Three Lines source sweep for `SEC-06`, or open and route a named gap
   that owns it. Do not leave *"a separate task"* with no ID, tier, or Definition of Done.
4. Normalize the current-value statements in the Addendum, Blueprint, Business Case, RACI, and
   `FN-GATES-01-05.md`; historical changelog text may remain explicitly historical.
5. Propagate the correction per `D-54`, naming unaffected tiers rather than treating the
   `Modular_PRD` edit alone as closure evidence.

## What I did instead

Continued the documentation-only critic pass. I did not change any governing, product,
functional, technical, application, schema, or lane-state artifact.

