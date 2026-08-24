# B-012 — Q11 is decided in the register but remains deferred to the boolean fallback in the Build Spec

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Blocks:** authoring or applying migration `0002`
- **Status:** Answered
- **Lane A:** **Answered `D-101`, 2026-08-24 — correct, and this is the second time the same paragraph has been reported.** `B-009` raised it, `D-97` decided the shape, and the Build Spec paragraph was left saying *"deferred past S1"* with the boolean fallback selected by default. **A register decision that does not reach the tier an author reads is not a decision yet.** **Repairs 1–3 applied.** The paragraph now states the decided three-value shape, states **separately** that the **name** remains open along with `identity_assurance` and the reserved future instrument, and keeps `0002` blocked on the naming decision and the rest of the S1 window. The `"G64 is specified, not applied"` sentence — which survived `D-97` by two days — is corrected too. **Repair 4**: the six `[Q11]` markers are **deliberately not cleared**. Their naming dependency is still open, and clearing them would be exactly the *shape-decided-therefore-question-closed* conflation this entry reports. **Repair 5 — no new check, and the reason is structural.** A check that fails when the Build Spec calls a register-decided question *deferred* needs to parse decision status from prose in two tiers; `decision-status` (check 6) already cross-references the register against `Modular_PRD` §10 in both directions, and **extending it to the Build Spec's prose would give it a third grammar to guess at.** The honest disposition is that **this class is `C-22`** — arrival, not correctness — and the control is the reader. **Recorded rather than papered over.**
- **Resolution:** Verified
- **Evidence:** `V1-BUILD-SPEC.md` Q11 paragraph replaced with the decided three-value shape; naming half stated separately as open; `0002` still blocked; the stale *specified, not applied* sentence corrected
- **Verified-At-Commit:** pending — this pass

## What happened

`D-97` and `Modular_PRD.md` §10 decide Q11's field shape as the three-value status
`satisfied | not_applicable | override_not_four_eyes`. `V1-BUILD-SPEC.md` still says Q11 is
"deferred past S1", that deferral selects `line_boundary_crossed` as the boolean fallback, and
that `G64` remains only specified. That is the superseded state which `B-009` was raised to remove.

The naming decision remains open; the shape decision does not. Those two questions are currently
conflated in the Build Spec.

## Guaranteed failure chain

The register sends a future `0002` author toward a three-value stored status. The Build Spec sends
the same author toward a boolean fallback. Both cannot satisfy `G-02`, because a boolean cannot
distinguish `not_applicable` from `override_not_four_eyes`. Drafting from the wrong tier produces a
schema that cannot compute its declared guardrail from its declared data source.

## Required repair

1. Replace the superseded Q11 paragraph in `V1-BUILD-SPEC.md` with the decided three-value shape.
2. State separately that the **name** remains open, along with `identity_assurance` and the reserved
   future judgment instrument.
3. Keep `0002` blocked until the naming decision and the rest of the S1 decision window settle.
4. Re-run the `D-54` propagation review across the six `[Q11]` locations without clearing markers
   whose naming dependency is still open.
5. Add a check or negative fixture that fails when the Build Spec calls a register-decided question
   deferred or names a different stored shape.

## Success evidence

- the register, Product Requirements row, Build Spec, `G-02`, and the eventual migration draft name
  one stored shape;
- the naming question remains visibly open and does not silently become `line_boundary_crossed`;
- `0002` remains absent until the full S1 authorization act; and
- Graphify no longer returns both the boolean fallback and the decided three-value shape as current.

## What Lane B did instead

Did not draft or apply `0002` and did not modify `0001_init.sql`.

---
