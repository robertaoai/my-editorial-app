# B-110 — D-231 creates a control file but omits required V1 propagation

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** claiming D-231 is fully recorded or ready for Graphify synchronization and independent verification; does not block review of its committed matcher behavior
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `D-54` in `AGENTS.md`; commit `c53412ba414841b45c90c9b66bee03d89761fe8d` creates `scripts/checks/governed-intent.mjs`; `docs/v1/V1-BUILD-SPEC.md` and `docs/v1/V1-ARTIFACT-INVENTORY.md` contain no D-231 propagation at that commit
- **Verified-At-Commit:** c53412ba414841b45c90c9b66bee03d89761fe8d

## What happened

D-231 creates `scripts/checks/governed-intent.mjs` and changes the behavior and verification cases
for two existing consistency controls. The current Lane A working-tree draft adds D-231 only to the
Decision Register and states that `V1-ARTIFACT-INVENTORY.md` is unaffected.

That disposition contradicts D-54's explicit rule: a decision that creates, sequences, or retires
an artifact lands in all three `docs/v1/` documents in the same pass — Register, Build Spec and
Artifact Inventory. The new matcher is an artifact even though it is a governance control rather
than a Product feature. The Build Spec must carry its scope, sequence and completion evidence, and
the Inventory must record that the file exists and why it is required.

`docs/Modular_PRD.md` §8 remains unaffected because D-231 closes no sprint and opens no tier. The
storyboard, story panels, UML/data flow, Encyclopedia and Product traceability are likewise
unaffected because the matcher changes graph-control scope rather than editorial behavior.

## What you need

Lane A Code should complete D-231 parent-first before rebuilding Graphify:

1. Keep the Decision Register entry, but correct its tier-applicability table: the Build Spec and
   Artifact Inventory are affected under D-54.
2. Add the D-231 control to `V1-BUILD-SPEC.md` with its bounded behavior and DoD: both checks share
   one exclusion matcher; handoff-only and Graphify-scratch paths are excluded; governed-only and
   mixed changes still fail; an unreachable analyzed commit fails closed.
3. Add `scripts/checks/governed-intent.mjs` to `V1-ARTIFACT-INVENTORY.md` by role. Do not copy a
   changing check or file count.
4. State explicitly that `Modular_PRD.md` §8 and the Product-facing artifacts are unaffected because
   no sprint closes, no tier opens and no editorial requirement changes.
5. Resolve B-109's no-shell Git argument boundary before treating the control implementation as
   complete.
6. Commit the corrected three-tier propagation. Record the actual history honestly: implementation
   commit `c53412b` preceded the Register propagation commit, while the previously committed Judge
   authorization in B-102 supplied the authority. Do not describe the files as having landed in one
   atomic commit if they did not.
7. Add or merge D-231's curated graph meaning, rebuild after the governed-doc commit, re-merge the
   curated layer and prove query/explain returns D-231 linked to both controls, the Build Spec and
   the Artifact Inventory.
8. Obtain independent Lane B review before terminal disposition.

### Failure-derived completion evidence

- the Register, Build Spec and Artifact Inventory each carry D-231's fact in their owning form;
- the Inventory names the new matcher file, while the Build Spec owns behavior and DoD;
- no Product-facing artifact gains a placeholder or irrelevant edit;
- B-109's argument-safe Git invocation passes its negative test;
- Graphify query/explain returns D-231 and the required tracking/control relationships; and
- the complete consistency and fixture suites pass from a clean tree.

## What you did instead

Stopped at the handoff boundary. Lane A's uncommitted Decision Register edit was not changed,
staged, or committed. No governed source, checker, fixture, application code, workflow, or Graphify
artifact was altered by this entry.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-231 bounded exclusion intent | Phase 1 — semantics confirmed by five matcher cases |
| Approve-with-conditions | D-231 completion | Phase 1 — D-54 propagation, B-109 repair, graph sync and independent review |
| Reject | `V1-ARTIFACT-INVENTORY.md` as unaffected | D-231 creates `scripts/checks/governed-intent.mjs` |
| Reject | Graphify rebuild before the canonical tracking set is complete | Register, Build Spec and Inventory land first |
| Defer | Product, application, workflow, deployment and publication changes | Separate authorized units |
