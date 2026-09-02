# V1-B071-CORRECTIVE-PLAN — T5/T6 Ontology Correction: Implementation Plan (DRAFT)

**Status: DRAFT — not applied to any governed tier.** This file exists so the corrective packet
`docs/handoff/B-071-b070-options-and-desk-editor-ontology-require-correction.md` describes can be
reviewed as one connected plan before any of it is written into `V1-DECISION-REGISTER.md`,
`V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, `Modular_PRD.md`, `FN-GATES-01-05.md`, the RACI
matrix, the crosswalk, `B-070`, or `LANE-B-WORK-ORDER.md`. Nothing here is a decision. It becomes
one only if the Judge approves it after independent review (see §Approval Gate).

**Owner:** Lane A (drafting). **Independent reviewer:** Lane B (the entry that raised B-071).
**Approver:** Judge/Chief Editor — same person, `D-158`.

**Source:** `docs/handoff/B-071-*.md`, §"What you need" (steps 1–9) and §"Normalized target model
supplied by the Judge." This plan consolidates that table into reviewable units.

**Revision note (incorporates independent review `B071-R8`–`R14`):** Lane B's independent review
of the first draft (commit `80c8f38`) found the artifact classification, verification claim,
approval-boundary wording, act cardinality, lifecycle dispositions, and Final Sign-Off conditions
all needed correction before this plan is reliable input to a Judge decision. Consolidated into
`B-071` rather than a separate handoff — no `B-072` was minted. This revision applies all seven
corrections; see the changed sections below and the review's own record in `B-071` for the
original findings.

**Artifact classification (`B071-R8`):** this file is itself a `docs/v1/` tracking artifact under
`D-36`, the same class as `V1-PHASE-CLOSURE.md` and `docs/v1/drafts/README.md` — both of which
carry `V1-ARTIFACT-INVENTORY.md` rows. A row has been added for this file in the same pass as this
revision (§7 also lists it). It is **not** a fourth independent tracker: it exists to support one
`B-071` correction and is retired — row removed or marked historical — when `D-182` is recorded
and propagated, so the correction has exactly one live source, not two.

---

## Read order

Steps are dependency-ordered, not numbered for convenience — §2 cannot be reviewed correctly
without §1's decision text, because §2 is the ontology that decision authorizes.

## §1 — Proposed decision (Lane A drafts; Judge originates/approves)

**Proposed register entry:** `D-182` — *T5/T6 corrective ruling: Desk Editor is one actor role,
Editorial Desk Review is a separate node, T5 splits into two workstreams, Final Sign-Off carries
no `R`.* Partially supersedes `D-175`–`D-181` — see supersession table below. Does **not** touch
`D-171`'s S2 hold, which stays unaffected and not reopened, consistent with every decision in the
`D-172`–`D-181` chain.

### Proposed decision content (normalized draft derived from the Judge's clarifications, not verbatim register text — `B071-R10`)

1. `T5-EDITORIAL-REVIEW` is a single route-selected virtual review: Desk Editor for
   `ROUTE-PROD-1`; Chief Journalist for the other named routes. A fallback reviewer is an internal
   judgment preparer, never a replacement for the route's human or external RACI `A`.
2. `T5-ASSURANCE-PREPARATION` is a separate parallel flow: the Editorial Desk Review node and the
   Chief Journalist review node each seal a separately attributable brief. It is internal
   preparation, not independent Line 3 assurance.
3. Both T5 workstreams are held before `T6`. A report cannot satisfy both merely because the same
   role participated; every act carries a distinct workstream/purpose code.
4. `T6` remains the natural-person Chief Editor's final judgment. Agent attempts to record the
   final `T6` disposition remain refused. The complete T5 packet supplies the judgment-rule inputs
   OD4 would require before any future automation; OD4 remains deferred and is not a pipeline
   stage.
5. Sheet 1 `A` owns route/stage accountability. Sheet 2 `A` owns task accountability; where a task
   has no local `A`, the governed parent/milestone/stage `A` supplies the effective task `A`.
   Neither scope overwrites the other; each scope has exactly one effective `A`.
6. `OP-FINAL-SIGNOFF` is a task-level approval control. Its `A` signs the completion evidence
   produced by required prior `R` work; `R = not_applicable` for the sign-off control itself, not
   `unknown`. The route/stage `A` remains separately recorded; an external route authority still
   requires its own external acceptance or mandate record.

### Supersession table (draft — Judge confirms retained/re-derived/superseded per clause)

**Caution (`B071-R12`):** the "Retained"/"orthogonal" dispositions below reflect a read of what
`D-176`–`D-180` decided, not a completed clause-by-clause re-verification against those decisions'
actual text under the three-act model in §4. Do not treat this table as settled until the §7
drafting pass re-checks each row — in particular, event *prerequisites* and bundle-membership
detail tied to the old one/two cardinality may need re-derivation even where the higher-level
disposition ("retained") turns out correct.

| Clause | Origin | Disposition under `D-182` |
|---|---|---|
| Two-role, route-dependent T5 cardinality (by route family) | `D-175` | **Superseded** — replaced by two-workstream model (§4 below), not route-family cardinality |
| `ROLE-CHIEF-EDITORIAL-DESK` as second canonical executor role | `D-175` | **Superseded** — relabeled `NODE-EDITORIAL-DESK-REVIEW`, mapped to `ROLE-DESK-EDITOR` (§2) |
| `F2` human Chief Editor at `T6` | `D-175` | **Retained**, unchanged by `D-182` |
| `D-171` explicit S2 hold | `D-171` | **Retained**, unaffected and not reopened |
| Route-applicability matrix (43 joins) | `D-176` | **Retained** — orthogonal to actor/node identity |
| Event-sequence corrections | `D-177`/`D-178` | **Retained** — orthogonal |
| Acceptance-ownership crosswalk (`AC-05a`–`AC-08a`) | `D-179`/`D-180` | **Re-derived** — same ACs, target content updated for two-workstream model (§4) |
| RACI task-boundary correction | `D-180` | **Re-derived** — must reflect Sheet1/Sheet2 `A` separation (§3) |
| `D-181` current T5/T6 anchor | `D-181` | **Superseded** — `D-182` becomes current anchor; `D-181` keeps a forward notice, same pattern as `D-170`→`D-180`→`D-181` |

---

## §2 — Ontology normalization (depends on §1)

| Item | From | To |
|---|---|---|
| Canonical actor role | — | `ROLE-DESK-EDITOR` (sole canonical Desk Editor actor; unchanged from CSVs) |
| Workcell/review node | `ROLE-CHIEF-EDITORIAL-DESK` (executor role) | `NODE-EDITORIAL-DESK-REVIEW` (virtual node, mapped to `ROLE-DESK-EDITOR` for `ROUTE-PROD-1`; not a second actor identity) |
| Chief Journalist | — | Stays distinct; unaffected |
| Display aliases | `Editorial Desk Editor`, `Desk Chief`, `Chief Editorial Desk` | `Chief Editorial Desk` is the node/workcell display label for `NODE-EDITORIAL-DESK-REVIEW`, not a dropped term (`B071-R14` — the first draft omitted it from this row). `Editorial Desk Editor`/`Desk Chief` remain optional actor display aliases for `ROLE-DESK-EDITOR` only if the Judge separately approves; none are new IDs |

**Ownership of the actor/node distinction (`B071-R14`):** the rule that one actor role maps to one
review node is stated here and in §1/§3 — Product/Fn_Spec (`Modular_PRD.md`, `FN-GATES-01-05.md`)
is where it becomes governed functional behavior. The `docs/specs/ux/` file in §6 **represents**
that rule (labels, refusal states); it never originates it. If UX text and Fn_Spec text disagree
after §7's propagation, Fn_Spec wins and UX is corrected, not the reverse.

**Files to edit (not yet edited):** `docs/governance/raci-involvement-matrix.md` §§3.1/8,
`docs/governance/factory-route-operation-crosswalk.md` §§2–4, `docs/fn-specs/FN-GATES-01-05.md`
§11, any role catalog referencing `ROLE-CHIEF-EDITORIAL-DESK` as an executor.

**Verification:** grep for `ROLE-CHIEF-EDITORIAL-DESK` across `docs/` after edit — zero
executor-context hits should remain; historical/superseded-decision citations may keep it as
prose.

## §3 — Accountability model and Final Sign-Off (depends on §1)

- Task `A` (Sheet 2) and route/stage `A` (Sheet 1) are separate scopes; parent/milestone/stage `A`
  fills a task with no local `A`; neither overwrites the other.
- `OP-FINAL-SIGNOFF` carries `R = not_applicable`, not `unknown` — it is an approval control over
  prior `R` work, not a work task needing its own executor.

**Testable refusal conditions (`B071-R13` — `R = not_applicable` alone is not enough to implement
against):** a `OP-FINAL-SIGNOFF` act is refused, not merely deferred, when any of the following
holds:

- Required prior `R` evidence (the three acts in §4) is incomplete for the route.
- The effective task `A` resolves to zero or to more than one person (§3's Sheet1/Sheet2 rule must
  yield exactly one).
- The signer is an agent, not a natural person.
- A route that requires external acceptance or mandate has no such record attached.

A valid sign-off is append-only, records signer/authority/evidence-set/timestamp/decision, and
closes only its own workflow stage — it does not imply or record external GRC acceptance, which
remains a separate external record where the route requires one.

**Files to edit:** `docs/governance/factory-route-operation-crosswalk.md` (remove "missing `R`
unresolved" marking on `OP-FINAL-SIGNOFF`; add the refusal conditions above), `docs/governance/
raci-involvement-matrix.md` (Sheet1/Sheet2 `A` separation note).

**Verification:** crosswalk no longer lists `OP-FINAL-SIGNOFF`'s `R` as unresolved; route/stage
`A` and task `A` are independently queryable in the matrix; each refusal condition above has a
corresponding negative test.

## §4 — Two-workstream cardinality, stated as a three-act completion unit (depends on §2, §3;
corrected by `B071-R11`)

Replace route-family one/two T5 cardinality with the two workstreams from §1 (`T5-EDITORIAL-
REVIEW`, `T5-ASSURANCE-PREPARATION`), stated as an exact act count so an implementation cannot
deduplicate by role:

**Every route requires exactly three separately sealed acts, each with its own evidence ID and
workstream/purpose code:**

1. One `T5-EDITORIAL-REVIEW` act — route-selected executor (Desk Editor for `ROUTE-PROD-1`, Chief
   Journalist otherwise).
2. One `T5-ASSURANCE-PREPARATION` act from the Editorial Desk Review node.
3. One `T5-ASSURANCE-PREPARATION` act from the Chief Journalist review node.

The same person may hold the role behind two of these acts (e.g. Chief Journalist performs both
the route's Editorial Review and its own Assurance Preparation act on a non-`ROUTE-PROD-1` route).
**Role identity performing two acts never collapses them into one, and never counts as
independence-by-difference** — the acts are distinguished by workstream/purpose code and evidence
ID, not by who performed them. Exactly one deterministic join reads all three sealed acts and
performs `Drafted → Reviewed`; the join fires once and only once all three exist.

Re-derive against this three-act unit:

- Bundle membership (which artifacts satisfy `Drafted → Reviewed`)
- Return/rerun behavior
- Metrics (`G-05a` and related)
- Security rows (`SEC-01a`, `SEC-03a`)
- Acceptance criteria `AC-05a`–`AC-08a`

**Files to edit:** `docs/Modular_PRD.md` (`US-04a`/`US-05a`, `AC-05a`–`AC-08a`),
`docs/fn-specs/FN-GATES-01-05.md`, `docs/v1/V1-BUILD-SPEC.md` §"S2 — Line assignment and
four-eyes" (target DoD only — `D-171`'s hold means no S2 rewrite/authorization here).

**Verification:** exactly one join performs `Drafted → Reviewed`, firing once per route; all three
acts carry distinct evidence IDs; no evidence ID or purpose code satisfies two acts even when the
same person performed them.

## §5 — Redraft B-070's two options (depends on §4)

- **Option A** becomes a bounded implementation of the `D-182` packet, with no route enablement.
- **Option B** becomes route-specific readiness — not a global wait, and not gated on
  `OP-FINAL-SIGNOFF`'s `R` (which is `not_applicable` by design, not a missing executor).

Neither redrafted option may cite `D-181`'s now-superseded clauses.

**Files to edit:** `docs/handoff/B-070-lane-b-work-order-stale-s2-instruction.md` — append a
correction section rather than editing the original body (matches this repo's append-only
convention for handoff/register entries); does not change B-070's own `Resolution` field except to
note it is superseded by `D-182`'s content where applicable.

## §6 — Chief Editor publication-workspace UX spec (depends on §4)

New file: `docs/specs/ux/chief-editor-publication-workspace.md`. Must show, and the UI must
enforce:

- Both T5 workstreams (Editorial Review, Assurance Preparation) and their separate attribution
- Authority provenance (task `A` vs. route/stage `A` vs. external authority)
- Required external evidence/acceptance records
- Unresolved disagreement between workstreams
- The human-only `T6` control — UI refuses submission of `T6`/publication disposition from an
  agent; only a natural-person Chief Editor action satisfies it

Marked `[V1]` per `D-36`'s spec versioning convention; this is a new file, not an edit to an
existing `[V1]` section.

## §7 — Propagation (depends on §1–§6)

Single-pass sweep per `D-54`, once §1–§6 are Judge-approved:

| Tier | Action |
|---|---|
| `V1-DECISION-REGISTER.md` | Add `D-182` (§1), supersession table |
| `V1-BUILD-SPEC.md` | Update S2 target DoD only (§4) — hold stays |
| `V1-ARTIFACT-INVENTORY.md` | Add `docs/specs/ux/chief-editor-publication-workspace.md` (§6) |
| `Modular_PRD.md` §8 | Update `US-04a`/`US-05a` rows (§4) |
| `FN-GATES-01-05.md` | §11 update (§2, §4) |
| `raci-involvement-matrix.md` | §§3.1/8 update (§2, §3) |
| `factory-route-operation-crosswalk.md` | §§2–4 update (§2, §3) |
| `B-070` | Correction section appended (§5) |
| `LANE-B-WORK-ORDER.md` | Fix §1's stale `Eligible` definition (`B071-R7` — independent of the
  ontology fix, but bundled here since it's in the same propagation pass) |
| `V1-ARTIFACT-INVENTORY.md` (this file's own row) | Retire or mark historical — this plan supported one `B-071` correction, not a permanent fourth tracker (`B071-R8`) |

## §8 — Commit, graph sync, verification handback (depends on §7)

1. Commit the full source + curated-fragment packet in one Lane A pass.
2. `npx graphify hook-rebuild`; re-merge `docs/graph-fragments/` if curated node count drops.
3. `bun run check` — full suite green.
4. Return to Lane B for independent verification (this repeats the `B-071` pattern: Lane A cannot
   mark its own fix `Verified`, only `Applied`).

---

## Independent Review (Lane B) — checklist

**Round 1 (commit `80c8f38`) — completed, findings `B071-R8`–`R14` incorporated into this
revision:** artifact classification, verification-result accuracy, approval-boundary wording, act
cardinality, lifecycle-disposition caution, Final Sign-Off testability, and terminology/UX
ownership. See `B-071`'s "Consolidated independent review" section for the original findings.

**Round 2 — outstanding, before this revision reaches the Judge for Gate A:**

- [ ] This revision's §1 decision text and §4 three-act model match `B-071`'s "Normalized target
      model" with no drift introduced during consolidation
- [ ] The supersession table's dispositions are individually correct against `D-175`–`D-181`'s
      actual clauses — the caution note added under `B071-R12` has not yet been resolved by a
      clause-level check, only flagged
- [ ] §2–§6 leave no clause dangling — every superseded clause in §1 has a corresponding
      corrected treatment somewhere in §2–§6
- [ ] `D-171`'s S2 hold is genuinely unaffected by every section
- [ ] §7's tier list, including the new Inventory row, is complete against `D-54`'s propagation
      requirement
- [ ] Nothing in §1–§8 authorizes S2 implementation or moves Lane B from `Eligible` — Gate A and
      Gate B stay separate
- [ ] The new `V1-ARTIFACT-INVENTORY.md` row for this file is itself correct and does not overstate
      this plan's status as a standing tracker

## Approval Gate — split per `B071-R10`

**Two separate Judge approvals, never conflated:**

| Gate | Covers | Authorizes | Does NOT authorize |
|---|---|---|---|
| **Gate A** | §1's decision text (confirm or amend), §2–§8 as one documentation/Graphify propagation pass | Lane A to write `D-182`, the ontology relabel, accountability model, three-act cardinality, redrafted `B-070` options, and the UX spec — all documentation, no product code | S2 implementation; any lane-state change |
| **Gate B** | `B-071` step 9, after Gate A's pass is independently `Verified` | The Judge selecting the corrected `B-070` option and moving Lane B `Eligible`→`Active` for one named run | Nothing further — this is the terminal authorization for the implementation unit named |

Gate A must reach `Verified` (independent confirmation, not Lane A's own `Applied`) before Gate B
is even proposed. Approving Gate A is a documentation decision; it never doubles as Gate B.
