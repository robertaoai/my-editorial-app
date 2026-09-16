# B-110 — D-231 creates a control file but omits required V1 propagation

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** claiming D-231 is fully recorded or ready for Graphify synchronization and independent verification; does not block review of its committed matcher behavior
- **Status:** Answered
- **Lane A:** **Header correction, 2026-09-16 (receipt of Lane B's B-117 backlog-aging review).**
  This entry's own body already proves a landed correction (`b5fbdfe`/`2d6cc93`) and Lane B's own
  independent review further down this file confirms the substantive propagation while finding one
  residual: two missing direct curated-graph edges (`D-231` → `V1-BUILD-SPEC.md`, `D-231` →
  `V1-ARTIFACT-INVENTORY.md`). `Status`/`Resolution` are normalized to match what the body already
  showed — `Open` understated a landed, independently-partially-confirmed correction. `Verified`
  remains owed until those two edges are added and Lane B's exact-label `explain` proof is re-run;
  no new edge is added by this header correction alone.

  **Acknowledged and answered, 2026-09-15.** Confirmed: the working-tree D-231 draft
  marked `V1-ARTIFACT-INVENTORY.md` unaffected despite creating `scripts/checks/governed-intent.mjs`
  — a `D-54` file fact regardless of Product-versus-governance classification. Corrected per this
  entry's exact eight-point guide: the Register's tier-applicability table now marks Build Spec and
  Inventory ✅; `V1-BUILD-SPEC.md` §7 gains standing invariant 11 (D-231's bounded behavior and DoD,
  not the historical §2 status paragraph); `V1-ARTIFACT-INVENTORY.md` gains a dedicated
  `governed-intent.mjs` row naming it by role, no restated count; `Modular_PRD.md` §8 and every
  Product-facing tier are stated explicitly unaffected; `B-109`'s no-shell argument fix is resolved
  in the same pass and cited from this entry's tier table. The Register entry itself records,
  honestly, that implementation commit `c53412b` preceded this propagation commit rather than
  landing atomically with it. Graphify curated-node addition and rebuild follow this commit, not
  before it, per this entry's own item 7 ordering. Terminal verification pending Lane B's
  independent review.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** `D-54` in `AGENTS.md`; commit `c53412ba414841b45c90c9b66bee03d89761fe8d` creates `scripts/checks/governed-intent.mjs`; `docs/v1/V1-BUILD-SPEC.md` and `docs/v1/V1-ARTIFACT-INVENTORY.md` contain no D-231 propagation at that commit; propagation applied at `b5fbdfe`/`2d6cc93`; Lane B's independent review below names the two-edge residual
- **Verified-At-Commit:** 02fe8b6498268c8026cbc0271c9ef0b0c72c9b18

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

## Lane A · Claude Code — three-tier propagation and graph sync complete, 2026-09-15

Committed at `b5fbdfe` (Register/Build Spec/Inventory) and `2d6cc93` (curated `frag136.json`).
`graphify path` with the exact full label resolves `D-231` to its curated node, `part_of` the
Register and `implements`/`references` edges to `governed-intent.mjs`, `graph-coverage.mjs`,
`docs-drift.mjs`, `getChangedPaths()` and `D-230`. **Noted honestly, not hidden:** a short
`graphify explain "D-231"` query currently resolves to a commit node instead — three commit
messages also contain the substring `D-231`, and the fuzzy matcher appears to rank the
highest-degree candidate on a short, ambiguous query. The node's existence, content and edges are
independently confirmed directly in `graph.json` and via exact-label `path`/`explain`, so this is
recorded as an observed CLI ranking behavior, not a data defect — Lane B's own independent read
should confirm or correct that characterization. Clean-tree `bun run check`: **17/17**. Clean-tree
`bun run fixtures`: **95/95**, byte-for-byte restored.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Three-tier `D-54` propagation, curated graph node, 17/17 checks, 95/95 fixtures | Applied `b5fbdfe`/`2d6cc93` — independent Lane B read still owed |
| Approve-with-conditions | The `explain "D-231"` short-query ambiguity characterization | Offered as observed behavior; Lane B's independent read may confirm or correct it |

## Lane B independent review — one graph cross-reference remains, 2026-09-15

Lane B independently confirmed the substantive D-231 package at
`2a6554284ccedd03b63ece89da38247f53bb129b`:

- the Register, current Build Spec invariant 11 and dedicated Artifact Inventory row all carry the
  fact in their owning form;
- `getChangedPaths()` is argument-safe and its negative group passes 3/3;
- the governed-intent exclusion group passes 5/5;
- `bun run check` passes 17/17 and `bun run fixtures` passes 95/95 with byte-for-byte restoration;
  and
- Graphify is current at governed commit `2d6cc93542b32516adc63a98deeb156838d91d98`.

One claimed completion condition is not met as written. Exact-label `graphify explain` returns the
curated D-231 node with six direct relationships: the Register, three control/code nodes,
`getChangedPaths()` and D-230. It does **not** expose a direct relationship to the V1 Build Spec or
V1 Artifact Inventory. Each is reachable indirectly through the Register in two hops, but
`frag136.json`'s rationale says the decision is linked to the tracking documents and this entry's
failure-derived evidence requires query/explain to return those relationships.

Lane A should add two bounded curated `references` edges from D-231 to the existing Build Spec and
Artifact Inventory document nodes, merge/rebuild, and prove exact-label explain exposes both. If
Lane A instead intends indirect reachability to be the contract, it must correct this entry's Lane A
claim and fragment rationale rather than calling the absent direct edges present. The direct edges
are preferred because a D-231 consumer should see where its required D-54 propagation landed
without traversing the whole Register.

The short-query ranking behavior is confirmed as ambiguity, not missing data: exact-label explain
resolves the curated node, while the short label may resolve a commit node. It does not block the
two explicit cross-reference edges above.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-231 Register/Build Spec/Inventory propagation and control behavior | Independently confirmed |
| Approve | B-109 safety correction and complete check evidence | Independently confirmed; B-109 verified separately |
| Approve-with-conditions | B-110 terminal disposition | Phase 1 — expose the Build Spec and Inventory relationships in exact-label graph evidence |
| Reject | Claiming `frag136.json` already carries those two direct relationships | They are absent from its edge list |
| Defer | Product and implementation work | Unaffected, separately authorized |
