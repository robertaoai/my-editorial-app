# B-071 — B-070 options and Desk Editor ontology require correction before S2 authorization

- **Raised:** 2026-09-02 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** terminal verification of `B-070`; any fresh S2 authorization; Lane B beginning
  `T5`/`T6`, route-readiness, judgment-packet, or publication-decision implementation
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-02. Implementation plan drafted at
  `docs/v1/V1-B071-CORRECTIVE-PLAN.md`, consolidating steps 1-9 into reviewable sections. DRAFT
  only — no governed tier (Register, Build Spec, Inventory, Modular_PRD, FN-GATES, RACI,
  crosswalk, `B-070`, work order) has been edited. Awaiting independent review (plan's own
  checklist) and Judge approval before §2-§8 execute or §9's lane transition is authorized.
- **Independent-Review:** Lane B reviewed the Lane A draft at `80c8f38` on 2026-09-02. Corrections
  are consolidated in this same handoff below; no separate `B-072` item is retained.
- **Evidence:** `docs/handoff/B-070-lane-b-work-order-stale-s2-instruction.md` Options A/B;
  `docs/v1/V1-DECISION-REGISTER.md` `D-171`, `D-175`–`D-181`;
  `docs/v1/V1-BUILD-SPEC.md` §"S2 — Line assignment and four-eyes";
  `docs/Modular_PRD.md` `US-04a`/`US-05a`, `AC-05a`–`AC-08a`;
  `docs/governance/raci-involvement-matrix.md` §§3.1/8;
  `docs/governance/factory-route-operation-crosswalk.md` §§2–4;
  `docs/fn-specs/FN-GATES-01-05.md` §11;
  `docs/LANE-B-WORK-ORDER.md` §§1/2.2d; both supplied Editorial Stage/Task CSVs; Chief Editor/Judge
  clarifications supplied directly on 2026-09-02 and not yet represented in the repository

## What happened

Lane B independently reviewed the two S2 options Lane A drafted in `B-070`, then traced the terms
`Desk Editor`, `Editorial Desk Editor`, `Chief Editorial Desk`, and `Desk Chief` through the supplied
CSVs, the RACI journal, the current role/node catalogs, the Product requirements, the Build Spec,
and decisions `D-170`–`D-181`.

`B-070` correctly removed the historical D-164/D-165 packet as Lane B's "next code unit," but neither
of its authorization options is approvable as drafted after the Judge's clarifications:

- Option A adopts `D-181` unchanged, including a role/cardinality model the clarification corrects.
- Option B waits for every currently listed unresolved operation shape, including
  `OP-FINAL-SIGNOFF`'s absent `R`; the Judge has now explained that this absence is intentional
  because Final Sign-Off is an approval control over prior `R` work, not another work task.

The underlying category error is narrower than "two titles are aliases" and broader than a spelling
change. The evidence supports one Desk Editor actor role and one separate editorial-desk review
workcell/node. `D-175` promoted the workcell label `Chief Editorial Desk` into a second canonical
executor role even though the supplied CSVs contain only `Desk Editor`. Different RACI and gate
functions require different scope/node/workstream fields, not automatically different actor IDs.

### Terminology map

| Existing term | Current use | Corrected canonical treatment |
|---|---|---|
| `Desk Editor` | Supplied CSV actor; route/task RACI involvement | `ROLE-DESK-EDITOR`, the canonical actor role |
| `Chief Editorial Desk` | D-170–D-181 T5 workcell promoted to `ROLE-*` | Relabel as `NODE-EDITORIAL-DESK-REVIEW`; historical wording or workcell alias only |
| `Editorial Desk Editor` | Judge clarification; absent from current repository | Optional display alias for `ROLE-DESK-EDITOR`, not a new ID |
| `Desk Chief` | Historical B-068/D-170 alias | Keep historical unless the Judge separately approves it as a display alias |
| `Chief Editorila Desk` | Typographical variant; no repository use | Reject; never canonical |
| T5 `Assurance Preparation` | Internal virtual-node workstream preparing the T6 packet | Not IIA Line 3, external GRC acceptance, OD4 execution, `senior_reviewed`, or Sheet 2 Legal/Ethical/Risk work |

### Normalized target model supplied by the Judge

1. `T5-EDITORIAL-REVIEW` is a single route-selected virtual review: Desk Editor for
   `ROUTE-PROD-1`; Chief Journalist for the other named routes. A fallback reviewer is an internal
   judgment preparer, never a replacement for the route's human or external RACI `A`.
2. `T5-ASSURANCE-PREPARATION` is a separate parallel flow: the Editorial Desk Review node and the
   Chief Journalist review node each seal a separately attributable brief. It is internal
   preparation, not independent Line 3 assurance.
3. Both T5 workstreams are held before `T6`. A report cannot satisfy both merely because the same
   role participated; every act carries a distinct workstream/purpose code.
4. `T6` remains the natural-person Chief Editor's final judgment. Agent attempts to record the final
   T6 disposition remain refused. The complete T5 packet supplies the judgment-rule inputs that OD4
   would require before any future automation; OD4 remains deferred and is not a pipeline stage.
5. Sheet 1 `A` owns route/stage accountability. Sheet 2 `A` owns task accountability; where a task
   has no local `A`, the governed parent/milestone/stage `A` supplies the effective task `A`. Neither
   scope overwrites the other, and each scope has exactly one effective `A`.
6. `OP-FINAL-SIGNOFF` is a task-level approval control. Its `A` signs the completion evidence
   produced by required prior `R` work; `R = not_applicable` for the sign-off control itself, not
   `unknown`. The route/stage `A` remains separately recorded, and an external route authority still
   requires its own external acceptance or mandate record.

### Drift and gaps

| Finding | Evidence state | Why it blocks |
|---|---|---|
| `B071-R1` — B-070 Option A adopts D-181's stale T5 membership | VERIFIED against B-070 and D-181 | Would authorize the wrong role/node and workstream contract |
| `B071-R2` — B-070 Option B treats Final Sign-Off's absent `R` as unresolved work | VERIFIED against B-070/crosswalk; replacement meaning is Judge-supplied, not yet in tree | Would block forever on an executor the approval control must not invent |
| `B071-R3` — `ROLE-CHIEF-EDITORIAL-DESK` conflates an app workcell with the CSV `Desk Editor` actor | VERIFIED against both CSVs and the RACI catalog | Creates two artificial actor identities and false separation evidence |
| `B071-R4` — current one/two T5 cardinality is derived from route family instead of separate Editorial Review and Assurance Preparation workstreams | VERIFIED against Product/Build/RACI target rows; replacement is Judge-supplied, not yet in tree | Can omit assurance evidence or count one report twice |
| `B071-R5` — task `A`, stage `A`, fallback reviewer, and external authority are not consistently separated | VERIFIED across crosswalk/RACI/Product rows | Internal software can appear to overwrite human or GRC authority |
| `B071-R6` — no `docs/specs/ux/` artifact owns the Chief Editor publication workspace that must display both T5 workstreams and the T6 human control | VERIFIED by repository inventory | Functional text has no UI/UX consumer contract; implementation would guess |
| `B071-R7` — `LANE-B-WORK-ORDER.md` §1 still says `Eligible` means the lock is free, contrary to D-156 and live §5 | VERIFIED | Can turn nomination into execution authority or produce a false lane transition |

Graphify is mechanically current at `bcfc8bc`, but it correctly reproduces the repository's old
`D-181` semantics. That is semantic drift from the new Judge clarification, not a stale graph build.
Rebuilding before the source documents are corrected would preserve the same error.

## What you need

Apply one parent-first Lane A correction; do not patch each old decision independently.

| Order | Fix | Owner | Depends on | Verification |
|---:|---|---|---|---|
| 1 | Record one new current T5/T6 decision. Preserve `D-171`'s hold and partially supersede only the affected `D-175`–`D-181` clauses | Lane A / Judge | — | One lifecycle table states retained, re-derived, and superseded clauses |
| 2 | Normalize the ontology: retain `ROLE-DESK-EDITOR`; replace executor uses of `ROLE-CHIEF-EDITORIAL-DESK` with a mapped `NODE-EDITORIAL-DESK-REVIEW`; keep Chief Journalist distinct | Lane A | 1 | One actor role, one mapped workcell node; no label-based independence proof |
| 3 | Correct the accountability model and Final Sign-Off shape: task `A` and stage `A` are separate scopes; Final Sign-Off is an approval control with no `R` of its own | Lane A | 1 | Crosswalk no longer marks missing `R` unresolved; prior-work and external-acceptance refusals remain explicit |
| 4 | Replace route-family one/two cardinality with the two T5 workstreams and re-derive bundle membership, return/rerun behavior, metrics, security, and acceptance criteria | Lane A | 2, 3 | Editorial brief plus both assurance-preparation briefs are separately sealed; exactly one join performs `Drafted → Reviewed`; T6 stays human-only |
| 5 | Redraft B-070's choices: Option A becomes a bounded implementation of the corrected packet with no route enablement; Option B becomes route-specific readiness, not a global wait and not a Final-Sign-Off missing-`R` hold | Lane A | 4 | Neither option cites D-181's superseded clauses or an invented Final-Sign-Off executor |
| 6 | Add the Chief Editor publication-workspace UX specification under `docs/specs/ux/`, showing Editorial Review, Assurance Preparation, authority provenance, external records, disagreement, and the human T6 control | Lane A | 4 | UX refuses T6/publication until all required packet sections exist; agents cannot submit the human disposition |
| 7 | Propagate the fact, not a tally, through the Decision Register, Build Spec, Artifact Inventory if a UX file is created, `Modular_PRD` §8 and owning rows, FN-GATES, RACI, crosswalk, publication/transition specs, B-070, and the Lane B work order | Lane A | 1–6 | Tier sweep plus direct semantic comparison; historical bodies retained with lifecycle notices |
| 8 | Commit the complete source/curated-fragment packet, rebuild Graphify at that HEAD, run the full suite, then return this item for Lane B independent verification | Lane A, then Lane B | 7 | Graph nodes distinguish role/node/workstream; docs-drift passes at the same HEAD; `B-071` may then move from Open to Answered/Applied and later Verified |
| 9 | Only after independent verification, ask the Judge to select the corrected B-070 authorization option and formally move Lane B from `Eligible` to `Active` for one named run | Judge / Lane A | 8 | Fresh authorization names one unit, exclusions and DoD; live lane table names exactly one Active lane |

### Success criteria

- `ROLE-DESK-EDITOR` is the sole canonical Desk Editor actor role.
- `NODE-EDITORIAL-DESK-REVIEW` is a separate virtual workcell mapped to that role.
- Four-eyes and attribution compare executor identity, role, workstream, and evidence purpose; a
  different label or node name never proves independence.
- T5 completion requires the route-selected Editorial Review brief and both separately attributable
  Assurance Preparation briefs; no report is reused across purposes.
- Only the T5 join changes `Drafted → Reviewed`, exactly once.
- Only the natural-person Chief Editor records the T6 final disposition.
- Task `A`, route/stage `A`, internal fallback reviewer, and external authority remain separately
  queryable and never overwrite one another.
- Final Sign-Off cannot occur before required prior `R` work is complete; it carries no invented `R`.
- Internal Assurance Preparation is never presented as IIA Line 3, OD4 execution, external GRC
  assurance, the Legal/Ethical/Risk operation, or `senior_reviewed`.
- The Chief Editor UI displays both T5 workstreams, unresolved disagreement, authority provenance,
  required external evidence, and the human T6 decision control.

## What you did instead

Stopped at the lane boundary and recorded this new handoff. Did not edit `B-070` or any governed
source/derived tier, did not create a Graphify fragment, did not authorize or build S2, and did not
move Lane B from `Eligible`. `B-070` remains `Resolution: Applied`, not `Verified`; `D-171` remains
fully binding until Lane A records and propagates a corrected target and the Judge separately
authorizes one implementation unit.

## Consolidated independent review of Lane A's draft plan

This section incorporates the proposed `B-072` review into `B-071`. It supplements the existing
steps 1–9 without repeating the target model above. The `B-072` draft was never committed, so its
number is not minted and no supersession record is required.

### Findings added by independent review

| Finding | What is unclear or incorrect | Guaranteed failure if unchanged | Required correction |
|---|---|---|---|
| `B071-R8` — draft artifact classification | `V1-B071-CORRECTIVE-PLAN.md` says no governed tier was touched, but a `V1-*` file under `docs/v1/` is itself a tracking artifact under `D-36` | A fourth operative tracker exists without a Register, Build Spec or Inventory fact; B-071 and the plan duplicate the same correction | Keep `B-071` as the sole handoff. When `D-182` is applied, retire the duplicate draft and record that artifact fact in the same `D-54` pass. If the Judge wants a permanent fourth tracker instead, authorize and propagate it explicitly |
| `B071-R9` — verification result | Lane A reported 16/17 with only graph coverage failing | The approval relies on false evidence: independent execution at HEAD `80c8f38` passed 15/17; `graph-coverage` omitted B-071 and its plan, and `docs-drift` showed analyzed `d64739c` versus HEAD `80c8f38` | Treat both as failures. A draft/open graph node records lifecycle status, not approval; synchronize only after the source correction is final |
| `B071-R10` — approval boundary | The plan says Judge approval includes item (c), then says item (c) is separate and plan approval does not authorize S2 | A documentation approval can be misread as an `Eligible`→`Active` transition and fresh build authorization | Split into Gate A (Phase 1 documentation correction only) and later Gate B (one named implementation unit and lane transition after independent verification) |
| `B071-R11` — T5 completion unit | The plan names two workstreams but does not state the exact act cardinality when one role appears in both | A role-based implementation will deduplicate participation and accept an incomplete packet while reviewer-count checks pass | Require three separately sealed acts on every route: one route-selected Editorial Review act plus two Assurance Preparation acts; no evidence ID or purpose may satisfy two acts |
| `B071-R12` — lifecycle dispositions | The plan calls all `D-177`/`D-178` event clauses orthogonal and all 43 `D-176` joins retained | Old route-dependent bundle prerequisites can remain active under the new three-act model | Retain blind/reveal ordering, attribution, one completion transition and D-176 applicability dispositions; re-derive event prerequisites, bundle membership and any Final-Sign-Off completion/evidence semantics |
| `B071-R13` — Final Sign-Off acceptance | `R = not_applicable` is decided, but the plan's verification only removes the old “missing R” label | Sign-off can occur before prior work, resolve zero or multiple effective `A`, or falsely imply external GRC acceptance | Specify prior-work completion, exactly one effective task `A`, signer/authority/evidence/time/decision fields, distinct external acceptance, stage-only closure and refusal cases |
| `B071-R14` — terminology and UX ownership | The plan omits `Chief Editorial Desk` from its alias row and lets the proposed UX file appear to originate refusal behavior | Actor and node can reconflate; a UI document can become the only source of a business rule | Canonical actor `ROLE-DESK-EDITOR`; node `NODE-EDITORIAL-DESK-REVIEW`; `Chief Editorial Desk` is a node/workcell display label; functional behavior originates in Product/Fn_Spec and UX only represents it |

### Parent-first amendment to the existing steps 1–9

1. **Approval and artifact boundary first:** amend the proposed `D-182` wording from “verbatim” to
   “normalized draft derived from the Judge's clarifications”; resolve `B071-R8`; split Gate A from
   Gate B. No code or lane transition is part of Gate A.
2. **Then define the completion invariant:** every route requires exactly one Editorial Review act
   and two Assurance Preparation acts, each with a unique evidence ID, workstream/purpose code and
   seal. One deterministic join performs `Drafted → Reviewed` only after all three exist.
3. **Then correct lifecycle and acceptance ownership:** reclassify the affected `D-176`–`D-180`
   clauses retained/re-derived/superseded at clause level. Map behavior to the owning Product
   requirement and feature group before assuming the same `AC-05a`–`AC-08a` identities survive.
4. **Then make Final Sign-Off testable:** refuse it when prior required `R` evidence is incomplete,
   effective task `A` is zero/multiple, the signer is an agent, or required external acceptance is
   absent. A valid sign-off is append-only and closes only its respective workflow stage.
5. **Then normalize downstream presentation:** actor, node, workstream, task `A`, stage `A`, T6
   internal judgment and external authority remain separate. Product/Fn_Spec owns behavior; the new
   UX artifact consumes it. If that UX tier/file opens, `Modular_PRD.md` §8 and all three trackers
   receive the artifact fact in the same pass.
6. **Finally synchronize one HEAD:** commit source plus curated fragments, rebuild and re-merge
   Graphify, run the full suite without a later tracked commit, push, and return that exact commit to
   Lane B. Lane A may mark its work `Applied`; only the independent review may mark it `Verified`.

### Additional success criteria

- All seven routes prove exactly **1 Editorial Review act + 2 Assurance Preparation acts**, three
  unique evidence records, no cross-purpose reuse and no early `Drafted → Reviewed` transition.
- The same Desk Editor or Chief Journalist may perform acts in two workstreams, but role identity
  never collapses the acts or proves independence.
- Only the natural-person Chief Editor records T6; internal T6 never impersonates external GRC
  authority or constitutes external acceptance.
- Every retained earlier clause is textually unaffected; every changed clause has one current
  anchor; active documents do not cite superseded route-cardinality rules.
- `graph-coverage` includes B-071 and every retained planning artifact; `docs-drift` reports
  `lastAnalyzedHead = HEAD`; the full suite is green at the exact independently reviewed commit.

### Clear Judge decision gate

| Decision | Tier | Meaning | Follow-up phase |
|---|---|---|---|
| **Approve-with-conditions** | Phase 1 documentation plan | Lane A may incorporate `B071-R8`–`R14` and apply the corrected documentation/Graphify packet only; no product code or lane transition | Lane A correction, then Lane B independent verification |
| **Reject** | Current `V1-B071-CORRECTIVE-PLAN.md` wording | Do not apply it unchanged because its artifact status, evidence result, act cardinality and approval boundary are unreliable | Revise under this consolidated B-071 record |
| **Defer** | S2 implementation and Lane B activation | `D-171` and Lane B's current `Eligible` state remain unchanged | Separate Gate B after terminal verification |
