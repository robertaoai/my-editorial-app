# B-071 — B-070 options and Desk Editor ontology require correction before S2 authorization

- **Raised:** 2026-09-02 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** terminal verification of `B-070`; any fresh S2 authorization; Lane B beginning
  `T5`/`T6`, route-readiness, judgment-packet, or publication-decision implementation
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-02. **Approval-provenance corrected retroactively per the Judge's
  provenance rule** (§"Judge ruling — approval-provenance for direct instructions," below): every
  "the Judge approved Draft N" statement previously written in this field is corrected to the precise
  form the rule requires. What actually occurred, restated:
  - The narrow Graphify tooling/status precondition (`merge7.js` fix + `frag119.json` status refresh,
    committed and pushed at `838baff`): **Judge approval received in the current conversation for
    that specific bounded action, pending durable registration** — not `AUTH-DOC`, not approval of
    Draft 9 as a packet.
  - Draft 10: **Judge authorized Lane A to prepare Draft 10** incorporating `B071-R61`–`R66` — not
    "the Judge approved Draft 10" as a consolidated artifact. Round 10 independent review
    subsequently found Draft 10 not approvable for `AUTH-DOC`.
  - Draft 11: **Judge authorized Lane A to prepare Draft 11 directly, superseding Draft 10** —
    likewise not artifact-level approval. Round 11 independent review found Draft 11 not yet
    executable for `AUTH-DOC` (`B071-R67`–`R83`).
  - The stable-T5/T6-UI-shell clarification (commit `7797139`): **Judge clarification received**
    (explains meaning/requirements; does not itself authorize an action).
  Implementation plan at `docs/v1/V1-B071-CORRECTIVE-PLAN.md` is Draft 11 pending Draft 12 (not yet
  produced). No commit's push status is asserted here beyond git's own record — see repository state
  for current HEAD/remote. **`AUTH-DOC` remains unapproved by any of the above; `D-171` remains fully
  binding.** No statement in this field implies Decision-Register-level durable approval, independent
  verification, artifact approval, push authority, or authority for a different checkpoint than the
  one named (provenance rule, point 2).
- **Independent-Review:** Round 1 (Lane B, `80c8f38`, findings `B071-R8`–`R14`), round 2 (Lane
  B, `c6afdd0`, findings `B071-R15`–`R21`, plus the Chief Editor's direct `B071-R22`
  clarification), round 3 (Lane B, `2147636`, findings `B071-R23`–`R29`), round 4 (Lane B,
  reviewing Draft 4 at shared HEAD `d3cadda`, findings `B071-R30`–`R37`), round 5 (Lane B,
  reviewing Draft 5 at `5bd9b90`, findings `B071-R38`–`R44`), round 6 (Lane B, reviewing Draft 6 at
  `2d3bd49`, findings `B071-R45`–`R49`, plus the Judge's direct four-identifier clarification),
  round 7 (Lane B, reviewing the uncommitted Draft 7 worktree over `2d3bd49`, findings
  `B071-R50`–`R55`), round 8 (Lane B, reviewing committed/pushed Draft 8 at `d3898db`, findings
  `B071-R56`–`R60`, recorded in pushed commit `cd08c5b`), and round 9 (Lane B, reviewing pushed
  Draft 9 + Graphify precondition at `838baff`, findings `B071-R61`–`R66`, recorded in pushed commit
  `6fb32ea`) all consolidated below. No separate `B-072` *T5/T6 ontology* item was ever minted —
  `B-072` as filed is a distinct governance topic (handoff-only commit authority), not a duplicate of
  this thread.
- **Evidence:** `docs/handoff/B-070-lane-b-work-order-stale-s2-instruction.md` Options A/B;
  `docs/v1/V1-DECISION-REGISTER.md` `D-171`, `D-175`–`D-181`;
  `docs/v1/V1-BUILD-SPEC.md` §"S2 — Line assignment and four-eyes";
  `docs/Modular_PRD.md` `US-04a`/`US-05a`, `AC-05a`–`AC-08a`;
  `docs/governance/raci-involvement-matrix.md` §§3.1/8;
  `docs/governance/factory-route-operation-crosswalk.md` §§2–4;
  `docs/fn-specs/FN-GATES-01-05.md` §11;
  `docs/LANE-B-WORK-ORDER.md` §§1/2.2d; both supplied Editorial Stage/Task CSVs; Chief Editor/Judge
  clarifications supplied directly on 2026-09-02, now represented in this file's Judge-clarification
  section (`R50` corrects the prior "not yet represented" line)

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

## Round 2 independent review — Lane A revision `c6afdd0`

Lane B checked the revised plan against `D-175`–`D-181`, the crosswalk, Product/Fn_Spec target
rows, Graphify and the full local consistency suite. The revision corrects `B071-R8`–`R14`
directionally, but Gate A is still **not approval-ready**. Keep this review in B-071; do not mint a
second handoff.

### New findings

| Finding | What is unclear or incorrect | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R15` — Graphify failure is not expected | Graphify is current at `c6afdd0`, but `graph-coverage` cannot find B-071 or its inventoried plan. Lane A says representing disputed content would pre-empt the Judge | Round 2 cannot use Graphify to find the very draft it must review; a repository check stays red by design | Curate B-071 as `Open` and the plan as `DRAFT/proposed`, with edges to `D-171` and proposed `D-182`. Lifecycle labels represent status; they do not approve content. Require the full suite green before Gate A |
| `B071-R16` — plan-artifact propagation remains incomplete | The plan now has an Inventory row, while its header still says no governed tier was touched. Its creation fact is absent from the Register and Build Spec, and retirement says “row removed or marked historical” | `D-54` is satisfied in only one of three trackers; deletion of the row would erase artifact history | State that the proposal's *content* is unapplied but the plan artifact is inventoried. Propagate its creation/temporary sequencing through all three trackers. On `D-182`, keep the file and Inventory row, mark both historical/superseded; do not remove the row |
| `B071-R17` — Final Sign-Off is ordered backwards and inherits T6 rules | Plan §3 requires the three T5 acts and a natural-person signer before `OP-FINAL-SIGNOFF`; the crosswalk places Final Sign-Off immediately before the T5 review set. External acceptance is governed before Delivery, not universally before this sign-off | Circular wait: Final Sign-Off waits for T5 while T5 waits for the signed package. Valid task `A` agents are also refused by a human-only rule that belongs solely to T6 | Final Sign-Off approves completion evidence from prior applicable Sheet 2 `R` operations and closes that workstage; T5 consumes its signed package. Its signer is the one effective task `A` and is not automatically human-only. Keep external acceptance as a distinct prerequisite at its governed stage, normally before Delivery. T6 alone requires the natural-person Chief Editor |
| `B071-R18` — Assurance Preparation has an executor hole | The node is mapped to `ROLE-DESK-EDITOR` only for `ROUTE-PROD-1`, but its Assurance Preparation act is required on all seven routes | Six routes require an act no executor is authorized to perform; implementations will either omit it or invent a role | Map `NODE-EDITORIAL-DESK-REVIEW` to `ROLE-DESK-EDITOR` for Assurance Preparation on every route. Route selection affects only the single Editorial Review act. The two Assurance Preparation sibling acts must use the Desk Editor and Chief Journalist roles/nodes respectively |
| `B071-R19` — “caution” does not resolve lifecycle dispositions | The supersession table still labels `D-176` and `D-177`/`D-178` broadly retained/orthogonal, then warns that those labels may be wrong | Lane A can propagate a table it already knows is unverified, leaving old cardinality, evidence and readiness clauses active | Replace the caution with the clause-level disposition table below before Gate A |
| `B071-R20` — propagation write set is incomplete | §4 says metrics/security/returns are re-derived but omits their owning rows/files. §7 maps `Modular_PRD.md §8` to User Story edits, which do not live in §8, and omits the Exceptions and Publication Fn_Specs | Product, behavior, UX and external-acceptance contracts diverge while tier-sweep still passes citation presence | Add the complete owner/write-set below. Record the UX tier/file opening in §8; edit User Stories and requirements in their owning Product sections |
| `B071-R21` — Gate B says “nothing further” | The phrase can be read as unrestricted terminal authority after one unit is named | A bounded S2 unit can silently become route enablement, release or deployment authority | Gate B must name one implementation unit, included routes, exclusions, tests and DoD; explicitly exclude other routes, production enablement, release and deployment unless separately named |

### Clause-level lifecycle disposition required by `B071-R19`

| Origin | Retain | Re-derive or supersede |
|---|---|---|
| `D-175` | Human Chief Editor at T6; one T5 stage; Senior Journalist EW trigger; route/stage `A`; `ENV-EXT`; T5 Line 1/T6 Line 2 placement | `ROLE-CHIEF-EDITORIAL-DESK`; route-family one/two-reviewer cardinality; any claim that node labels prove actor separation |
| `D-176` | The 43 applicability dispositions; blank external-source cells remaining `unknown`; undecomposed milestone holds; `ROUTE-PROD-1` route `A`; `ENV-EXT` | “No `A` inherits” becomes the governed local-task-else-parent rule; Final Sign-Off missing-`R` hold becomes `R = not_applicable`; Final Sign-Off sequence/evidence row is re-derived |
| `D-177`/`D-178` | Route-basis semantics; canonical reveal-event name; blind/reveal ordering; external-trigger versus external-acceptance separation; one non-judgment completion join; historical `[V1]` treatment | T5 event count/prerequisites/bundle membership; return/rerun scope; affected evidence overlay; T5 cardinality measure; readiness row removing Final Sign-Off's missing-`R` hold |
| `D-179`/`D-180` | Historical/target marking method; human-only `AC-06a`; blind-order/disagreement intent; `AC-08a` ownership by `FR-06`; unaffected EW/Delivery/external-acceptance IDs; `SEC-03a` Line placement | `US-04a`/`US-05a`, `FR-04a`/`FR-05a`, `AC-05a`/`AC-05b` and bundle-dependent AC text; `G-05a`; `SEC-01a`; RACI T5 acts and successor proof |
| `D-181` | `AC-01b`; `G-02a`; consuming-evidence `AC-22` outside changed T5 prerequisites; join-only ownership of `Drafted → Reviewed` | D-181 as current anchor; any route-dependent one/two-act prerequisite within `AC-22` or the join contract |

### Correct dependency order for Final Sign-Off and T5

```text
Applicable Sheet 2 work with R
  → completion evidence sealed
  → OP-FINAL-SIGNOFF by exactly one effective task A (R = not_applicable)
  → signed workstage package
  → T5 Editorial Review (one route-selected act)
     + T5 Assurance Preparation (Desk Editor act and Chief Journalist act)
  → one non-judgment three-act join: Drafted → Reviewed
  → human-only T6 Chief Editor judgment
  → external acceptance/mandate at its governed point where required
  → Delivery
```

The same role/identity may perform the route-selected Editorial Review and that role's own
Assurance Preparation act, but these remain different evidence records and purposes. The two
Assurance Preparation siblings are different role/node assignments; relabeling one executor cannot
satisfy both.

### Complete Gate A write set required by `B071-R20`

1. `V1-DECISION-REGISTER.md`: `D-182`, clause-level lifecycle table, temporary-plan artifact fact,
   UX artifact creation, and explicit `D-171` hold preservation.
2. `V1-BUILD-SPEC.md`: three-act target DoD, Final-Sign-Off-before-T5 sequence, temporary-plan
   sequencing, UX artifact sequencing, no implementation authorization.
3. `V1-ARTIFACT-INVENTORY.md`: keep the plan row and later mark it historical; add the approved UX
   artifact. Never remove the historical plan row.
4. `Modular_PRD.md` owning sections: `US-04a`/`US-05a`, `FR-04a`/`FR-05a`, `AC-05a`–`AC-08a`,
   `G-05a`, `SEC-01a`/`SEC-03a`, and any T5 prerequisite in `AC-22`. §8 separately records the UX
   tier/file opening and unchanged S2 hold; it does not own the User Story rows.
5. `FN-GATES-01-05.md`: actor/node mapping, three acts, join, blind order and consuming evidence.
6. `FN-EXCEPTIONS-06-11-12.md`: three-act-aware invalidation/rerun and external-trigger separation.
7. `FN-PUBLICATION-09-10-13.md`: external acceptance at its governed pre-Delivery point and Delivery
   refusal, without moving that requirement into Final Sign-Off.
8. RACI matrix and factory crosswalk: scoped `A` resolution, Final Sign-Off ordering, all-route Desk
   Review mapping, three T5 acts and the one join.
9. Chief Editor UX spec, B-070 correction and Lane B work order, followed by draft-status Graphify
   nodes, one final rebuild and independent verification of the exact pushed HEAD.

### Round 2 success criteria

- The full consistency suite is green before Gate A; a red `graph-coverage` result is not accepted as
  evidence of safety.
- Final Sign-Off depends only on its applicable prior operation work, never on T5 or T6; only T6 is
  categorically human-only.
- Every route resolves one Desk Editor Assurance Preparation act and one Chief Journalist Assurance
  Preparation act, plus one route-selected Editorial Review act, before the single join.
- The two Assurance Preparation sibling assignments cannot collapse to one executor under two
  labels; cross-workstream reuse never reuses an evidence ID or purpose.
- External acceptance remains separately attributable and occurs at its governed route/stage point;
  internal sign-off or T6 never impersonates it.
- Every artifact creation/retirement fact reaches all three V1 trackers; historical rows are marked,
  not removed.
- Gate A authorizes documentation/Graphify only. Gate B remains absent until Gate A is independently
  Verified and then authorizes only its explicitly named implementation unit.

### Round 2 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve-with-conditions** | Lane A Gate A revision | `B071-R8`–`R14` improved the plan, but `B071-R15`–`R21` must be incorporated first | Lane A round-2 correction, then Lane B independent review |
| **Reject** | Current Gate A approval | The dependency cycle, incomplete lifecycle table/write set and red graph make the current text unsafe to approve | Re-draft under this B-071 section |
| **Defer** | Gate B / S2 / lane transition | `D-171` remains binding; no build authorization exists | Only after Gate A is terminally Verified |

## Chief Editor clarification — B-070's two options are superseded as options

**Clarification supplied directly after the round-two review:** B-070 Option A and Option B solve
different features. They are not mutually exclusive alternatives and the Judge must not be asked to
select one instead of the other.

### `B071-R22` — a feature boundary was represented as a decision choice

| B-070 wording | Actual feature | Correct disposition |
|---|---|---|
| Option A — bounded unit now | T5/T6 judgment-control feature: three T5 acts, one join, human T6, audit evidence; no route enablement | **Superseded as an option.** Preserve its corrected functional scope as the first bounded implementation unit after Gate A is Verified |
| Option B — wait for all operation shapes | Factory-route operations/readiness feature: resolve each route's applicable task executor, accountability and atomic completion contract, then integrate/enable that route | **Superseded as an option and as a global wait.** Preserve the underlying work as a separate feature unit; it neither replaces nor blocks specification of the judgment-control feature |

The valid content survives; only the false either/or is retired. B-070's already-applied correction
to the stale “next code unit” instruction remains valid and is not reopened. Lane A should append a
forward notice to B-070 rather than rewriting its historical body or changing the whole handoff's
`Resolution: Applied`.

### Replacement parent-first work structure

1. **Parent — Gate A documentation correction:** approve and apply the corrected `D-182` ontology,
   lifecycle table, Final-Sign-Off ordering, acceptance ownership, complete propagation set and
   Graphify representation. Preserve `D-171` until independently verified.
2. **Child Feature 1 — T5/T6 judgment control:** after Gate A is Verified, a separate bounded
   authorization may build the three attributable T5 acts, the one non-judgment completion join,
   blind reveal order and human-only T6. It enables no production, fallout or GRC route.
3. **Child Feature 2 — factory route operations/readiness:** resolve the operation-shape holds and
   implement route-specific execution/readiness. Its specification can progress independently, but
   a route cannot be enabled until both its own operation contract and the shared judgment-control
   dependency are verified.
4. **Route activation:** authorize one named route at a time, with its required/conditional
   operations, external-authority prerequisites, tests, exclusions and DoD. This is not implied by
   completing either child feature alone.

### Guaranteed failures if the two-option framing remains

- Choosing Option A falsely rejects the route-operations feature even though the system still needs
  it later.
- Choosing Option B falsely blocks the independent judgment-control feature on unrelated operation
  shapes.
- Marking either option “done” can be misread as completing both features.
- A single Gate B can silently authorize route enablement when only the shared T5/T6 control was
  reviewed.

### Required edits to the existing Lane A draft plan

1. Replace §5 “Redraft B-070's two options” with **“Supersede the false options; define two feature
   units.”** Do not recommend or select either one.
2. Replace singular Gate B with:
   - **Gate B1:** one bounded T5/T6 judgment-control implementation unit; no route activation.
   - **Gate B2:** one bounded factory-route/readiness implementation unit or one named route;
     requires its own resolved operation shapes and verified dependencies.
3. Amend `D-182`'s lifecycle notice so B-070's option text is historical/superseded while its stale-
   work-order correction remains Applied.
4. Update `V1-BUILD-SPEC.md`, `Modular_PRD.md` §8 and `LANE-B-WORK-ORDER.md` to sequence both child
   features separately. Do not restate a combined tally.
5. Give each feature its own scope, exclusions, AC ownership, DoD and authorization. A dependency
   link may connect them; one feature's completion must never serve as evidence that the other is
   complete.

### Success criteria for the replacement

- No active document asks the Judge to choose B-070 Option A **or** Option B.
- The judgment-control feature and factory-route feature have different names, scopes, ACs, DoD and
  authorization records.
- Feature 1 can be implemented and tested with every route disabled.
- Feature 2 cannot enable a route until that route's operation shapes and the shared judgment-control
  dependency are both verified.
- `D-171` is lifted only for the specifically authorized unit; it is never lifted globally by
  approving documentation.
- Completion of either feature alone cannot satisfy the other feature's acceptance criteria or
  authorize production, fallout, GRC, release or deployment.

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | B-070 option lifecycle | Supersede both as alternatives; preserve their valid content as two separate feature units | Lane A Gate A revision |
| **Approve-with-conditions** | Feature sequencing | Judgment control first as the shared bounded unit; route readiness separately, with route activation requiring both verified dependencies | Build Spec/Product sequencing during Gate A |
| **Reject** | Either/or selection | The Judge is not selecting Option A versus Option B | Remove from every approval form |
| **Defer** | Gate B1, Gate B2 and route activation | No implementation authorization or lane transition is granted here | Separate decisions after Gate A is Verified |

## Round 3 independent review — Lane A Draft 3 at `2147636`

No Judge approval is inferred. Lane B independently confirmed the mechanical evidence: the full
consistency suite passes, `docs-drift` is synchronized at `2147636`, and Graphify now covers B-071
and its draft plan. The following remaining defects are semantic and are not detected by those
checks.

### Round 3 findings

| Finding | What remains unclear or contradictory | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R23` — artifact propagation is planned, not completed | Draft 3 says its artifact fact is completed across all three trackers, but only the Inventory contains it. The header and graph node still say “not applied to any governed tier,” although the Inventory is a governed tracker | Gate A can be approved on a false completion claim; the Inventory revision count also drifts every round | Say **proposal content unapplied; artifact creation applied to Inventory; Register/Build propagation pending Gate A**. Remove round-number detail from the Inventory row. When D-182 lands, keep and mark the plan/file row historical—never delete it |
| `B071-R24` — Final Sign-Off still contains an external-acceptance contradiction | External acceptance appears inside the list of conditions that refuse `OP-FINAL-SIGNOFF`, followed by “not a Final-Sign-Off precondition” | Implementers will again block Final Sign-Off on a record governed only before Delivery, recreating the circular/early dependency R17 removed | Remove external acceptance from the Final-Sign-Off refusal list. Put it only in the relevant route's pre-Delivery/Delivery refusal rule. Resolve Final Sign-Off to exactly one effective accountable actor assignment, not necessarily a natural person |
| `B071-R25` — documentation verification appears to expire `D-171` | §5 says `D-171` stays in force “until Gate A is independently Verified” | A documentation result can be read as automatically lifting the build hold without a named implementation authorization | State that Gate A verification **does not lift D-171**. The hold remains until Gate B1 or Gate B2 explicitly lifts it for one bounded unit; all other scope remains held |
| `B071-R26` — Feature 2 and route activation reconflate | Gate B2 is “a Feature 2 unit or one named route,” requires Gate B1, yet the following prose says B1/B2 are independent and neither activates a route | The same approval can alternate between building factory capability and activating production; dependency order becomes impossible to audit | Gate B1 authorizes only shared judgment control. Gate B2 authorizes only bounded factory-route capability and may proceed after Gate A independently of B1. Add a separate **Route Activation Gate** requiring both verified features plus the named route's resolved contracts |
| `B071-R27` — Gate B1 incorrectly asks for named routes | Feature 1 is shared and explicitly enables no route, but its Gate B1 row asks for “named routes” | A shared control unit acquires accidental route scope, or reviewers reject it because no route should be enabled | Gate B1 names the shared component, seven-route test matrix, exclusions and DoD—never enabled routes. Route names in tests are coverage, not authorization |
| `B071-R28` — graph lifecycle edge overstates application | `frag119.json` labels the plan `DRAFT` but relates it to B-071 with `implements_plan_for`; its description repeats the false “not applied to any governed tier” status | Graph queries can infer that the proposal implements/resolves the handoff even though no decision is approved | Change the relation to `proposes_resolution_for` (or equivalent non-applied relation) and synchronize the description with R23's split artifact/content status |
| `B071-R29` — review commit is not on the remote branch | Local HEAD is `2147636`; `origin/docs/journal-2026-08-16` remains `c6afdd0` | Another reviewer can inspect a different Draft 2 while being told Draft 3 passed, so commit identity no longer proves shared evidence | Do not mark round 3 or Gate A terminally Verified until the exact reviewed commit is pushed and remote equality is confirmed; pushing alone changes no approval state |

### Corrected approval architecture

```text
Gate A — documentation and Graphify only
  ↓ independently Verified; D-171 still binding
Gate B1 — Feature 1: shared T5/T6 judgment-control implementation
  ↘
    Route Activation Gate — one named route only, after both dependencies are Verified
  ↗
Gate B2 — Feature 2: bounded factory-route capability implementation
```

- Gate B1 and Gate B2 each require Gate A, but neither requires the other to begin its own bounded
  implementation.
- The Route Activation Gate requires verified B1, verified B2 for the named route, resolved
  operation shapes, external-authority prerequisites, tests, exclusions and DoD.
- `D-171` is narrowed only by the specific Gate B authorization being exercised. Unnamed units,
  routes, release and deployment remain held.

### Corrected Final Sign-Off success criteria

- Required prior Sheet 2 `R` work is complete and sealed.
- Exactly one effective task `A` is resolved from local task `A`, otherwise its governed parent.
- The sign-off record is append-only and records accountable actor, authority scope, evidence IDs,
  timestamp and decision.
- Final Sign-Off closes only its workstage and supplies T5's signed input package.
- It never depends on T5, T6 or external acceptance, and it never impersonates those controls.
- Missing required external acceptance blocks the governed pre-Delivery/Delivery act, not Final
  Sign-Off.

### Round 3 checklist outcome

| Draft 3 review item | Result |
|---|---|
| Corrected Final-Sign-Off-before-T5 order | **Partially passes** — core order is correct; external-acceptance refusal remains in the wrong control (`R24`) |
| Clause-level D-175–D-181 lifecycle table | **Passes with condition** — dispositions are usable after R23–R25 wording is corrected |
| Feature 1 / Feature 2 split | **Partially passes** — feature scopes survive; Gate B2 and route activation remain conflated (`R26`/`R27`) |
| Complete propagation write set | **Partially passes** — future Gate A set is substantially complete; present plan-artifact propagation is overstated (`R23`) |
| No implementation authorization | **Fails semantic clarity** — “until Gate A Verified” can imply automatic hold expiry (`R25`) |
| Graph status-only representation | **Partially passes** — coverage is green; edge/status semantics overstate application (`R28`) |

### Round 3 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Mechanical docs/graph synchronization | Full consistency suite passes and graph matches local HEAD `2147636` | Preserve during the next correction |
| **Approve-with-conditions** | Draft 3 ontology and feature decomposition | Core T5/T6 model, clause table and two-feature split are usable after `B071-R23`–`R29` | Lane A Draft 4, then independent review |
| **Reject** | Gate A approval now | Final-Sign-Off conditions, D-171 lifecycle, activation boundary and graph semantics remain unsafe | Correct before asking the Judge |
| **Defer** | Gate B1, Gate B2, Route Activation Gate and lane transition | No Judge approval exists; local Draft 3 is not yet the remote branch | After corrected Gate A is pushed and independently Verified |

## B-070 predecessor cross-reference and closure boundary

`B-070` is the predecessor to this handoff, not a duplicate and not a competing current decision.
Its append-only forward notice now separates the part Lane A applied from the part that remained
unresolved:

| Record | What it owns | What it does not prove |
|---|---|---|
| `B-070` | The applied removal of the stale “next code unit” instruction from `LANE-B-WORK-ORDER.md` | Approval of Option A or B; fresh S2 authority; route activation; completion of either feature |
| `B-071` | The current ontology correction, Final-Sign-Off boundary, two-feature decomposition, corrected approval gates and independent-review findings | Judge approval, implementation authority, lane transition or terminal verification while its corrections remain open |

The historical B-070 Option A/B text remains useful evidence of how the two feature scopes were
first framed, but it is superseded **only as an either/or choice**. It must not be copied into an
approval form or treated as a decision still awaiting selection. The replacement dependency order
is:

1. **Gate A:** correct and propagate documentation and Graphify semantics; independent review does
   not lift `D-171`.
2. **Gate B1 and Gate B2:** separately authorize a bounded Feature 1 or Feature 2 implementation
   unit. Each narrows `D-171` only for its named scope.
3. **Route Activation Gate:** authorize one named route only after both applicable feature
   dependencies and that route's contracts are verified.

### Cross-reference acceptance criteria

- B-070's header may remain `Status: Answered`, `Resolution: Applied` because its applied edit is
  real; the forward notice makes the partial-answer scope explicit.
- No document says B-070's options are awaiting Judge selection.
- B-071 is the single current handoff for the replacement model; no B-072 duplicates it.
- Verifying B-070's work-order correction cannot satisfy B-071, Gate A, either feature gate or
  route activation.
- Closing B-071 requires its latest corrective findings to be applied, pushed at one exact commit,
  Graphify-synchronized and independently reviewed. It still grants no implementation authority.

### Consolidated approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Handoff / B-070 applied correction | Preserve the stale-work-order fix and its evidence; the forward notice now defines its limited scope | Independent verification may assess that clause without reopening it |
| **Approve-with-conditions** | Handoff / B-071 replacement model | Use B-071 as the sole current record and apply its open findings parent-first | Lane A Draft 4, Graphify sync, then Lane B independent review |
| **Reject** | Decision and Build Spec approval forms | Do not present B-070 Option A and Option B as alternatives or infer S2 authority from `Status: Answered` | Remove the false choice during Gate A correction |
| **Defer** | Product implementation / lane state / route activation | `D-171` remains binding; no Gate B or activation decision exists | Separate bounded authorization after Gate A is independently Verified |

## Round 4 independent review — Lane A Draft 4 at shared HEAD `d3cadda`

**Judge approval: none.** This is Lane B's independent review of the plan, not approval of its
proposed `D-182` or authorization to edit governed tiers. Git confirms local and
`origin/docs/journal-2026-08-16` both resolve to `d3cadda`; Graphify reports
`lastAnalyzedHead = d3cadda`, `stale = false`; and the full consistency suite passes at that
committed snapshot. The former `B071-R29` remote-equality precondition is therefore satisfied as
evidence availability only. It does not make the plan, Gate A or this handoff `Verified`.

Draft 4 itself first landed in `6b9a78f`; `d3cadda` is the later B-070 forward-cross-reference
commit. Reviewing `d3cadda` reviews both through ancestry, but the two commit responsibilities must
not be collapsed into one provenance claim.

### Round 4 findings — parent first

| Finding | What remains unclear or contradictory | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R30` — approval vocabulary recreates the collision | “Gate A”, “Gate B1” and “Gate B2” sit beside development **Lane A/B/C**, editorial `T1`–`T6`/`EG*` gates and route activation. “Gate B” can be read as Lane B rather than an approval checkpoint | Approval evidence cannot unambiguously state whether it authorized documentation, selected a development lane, completed an editorial gate or enabled a route | Rename the four approval checkpoints `AUTH-DOC`, `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`. Keep Lane A/B/C only for development ownership and `T1`–`T6`/`EG*` only for the product workflow |
| `B071-R31` — `D-171` non-expiry correction is still contradicted | Draft 4 §5 still says “`D-171` stays in force **until Gate A is independently Verified**,” although §Approval Gate correctly says documentation verification never lifts it | A reader can treat documentation verification as the hold's automatic expiry and begin S2 with no bounded authorization | Replace the sentence everywhere: `D-171` remains binding after `AUTH-DOC` is Verified; only an explicit `AUTH-F1` or `AUTH-F2` decision narrows it for one named unit, and all unnamed scope stays held |
| `B071-R32` — independent features are not independent lane runs | Draft 4 says B1 and B2 may proceed independently and each moves Lane B `Eligible → Active`, but it does not say the two authorizations cannot be exercised concurrently under one Active lane | Feature scopes can be mixed into one run/commit, defeating separate DoD and making it impossible to prove which authorization a change consumed | “Independent” means no feature dependency and either may be selected first, **not concurrent authority**. Authorize one named unit/run at a time; record its exclusions and completion/handback before the other authorization is exercised |
| `B071-R33` — the execution write set cannot close its own tracking | §7 schedules another B-070 edit even though its forward notice is already applied at `d3cadda`, but omits B-071 and the plan file itself. It therefore cannot move B-071 from Open to Answered/Applied or retire the plan's `DRAFT` label after `D-182` lands | Lane A can finish every listed edit while the live handoff still says Open and the executed plan still says DRAFT; a duplicate B-070 appendix can also be appended | Mark B-070 **already applied; cite, do not edit again**. Add B-071 (Lane A answer + `Resolution: Applied`, never self-Verified) and `V1-B071-CORRECTIVE-PLAN.md` (executed/historical with forward link to `D-182`) to §7 |
| `B071-R34` — review metadata is stale | B-071's Lane A field still says “not yet pushed”; Draft 4's Source says only two review rounds/R1–R21; the revision note calls Route Activation a “third” gate although the plan defines four checkpoints; the round-4 checklist still treats remote equality as open | A reviewer can stop on a satisfied blocker, cite the wrong review population, or reintroduce a three-versus-four approval count | Record `6b9a78f` as Draft 4, `d3cadda` as the shared review HEAD, R1–R29 as three completed review rounds, and remote equality as satisfied. Replace the count with the four stable authorization IDs; do not restate a mutable tally elsewhere |
| `B071-R35` — Graphify is current but semantically behind the handoff | `frag119.json`'s B-071 node still describes R1–R22 and two review rounds, while the source contains R1–R29 and Draft 4. §8 also does not say how the Draft/Open nodes transition when `D-182` is applied | Graph queries return a mechanically current but incomplete lifecycle account; after `D-182`, the graph can leave the proposal looking perpetually Draft/Open | Update the status-only description to the exact reviewed round without asserting approval. In the authorized documentation pass, add the `D-182` decision node, change B-071/plan lifecycle labels and relations to Applied/historical as appropriate, preserve the edge to `D-171`, then rebuild and re-query |
| `B071-R36` — assurance separation is not machine-testable | Draft 4 prohibits one executor from satisfying both Assurance Preparation acts “by relabeling,” but its §4 verification checks only evidence IDs and purpose codes. It never states the required executor-identity inequality between the Desk Editor and Chief Journalist Assurance Preparation acts | One account holding two labels can submit both assurance briefs and pass the stated tests, producing false two-reviewer evidence | Require distinct executor IDs, distinct canonical roles/nodes, distinct evidence IDs and distinct purpose codes between the two Assurance Preparation acts. Permit the same executor to perform the route-selected Editorial Review plus **that executor's own** Assurance Preparation act only; add a negative same-executor test for the two assurance acts |
| `B071-R37` — external-acceptance refusal names the wrong subject | §3 says “External acceptance/mandate is refused,” when the intended rule is that a pre-Delivery/Delivery action is refused if its required external record is missing or invalid | An implementation can reject or mutate the external authority record rather than refuse the internal transition that lacks evidence | State the subject explicitly: the required external record remains separately attributable and append-only; when it is missing or invalid, refuse only the governed pre-Delivery/Delivery transition, never Final Sign-Off or T6 |

### Corrected parent-first authorization model

```text
AUTH-DOC — Judge approves the documentation/Graphify correction only
  ↓ Lane A applies; Lane B independently verifies; D-171 still binding
AUTH-F1 — one bounded shared T5/T6 judgment-control run
  ↘
    AUTH-ROUTE — one named route, only after both verified dependencies
  ↗
AUTH-F2 — one bounded factory-route capability run
```

- `AUTH-F1` and `AUTH-F2` may be selected in either order after `AUTH-DOC` is Verified, but only
  one named implementation run may exercise the development lock at a time.
- `AUTH-ROUTE` requires the shared Feature 1 result to be Verified against the seven-route test
  matrix and the named route's Feature 2 contract to be Verified. Feature 1 is not “Verified for a
  route”; route names in its tests are coverage, not activation scope.
- None of these identifiers replaces or aliases EW phase gates, IIA Lines, OD4 roles, factory
  tiers/routes or development lanes.

### Round 4 success criteria

- One authorization vocabulary has one meaning: `AUTH-DOC`, `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`.
- `D-171` has no time- or status-based expiry; every narrowing names one unit and leaves the rest
  held.
- The two feature units have separate authorization, run identity, exclusions, DoD, evidence and
  handback; independence never means concurrent execution.
- B-070 is cited as already applied and is not edited again; B-071 and the plan have explicit
  post-application lifecycle updates.
- The two Assurance Preparation acts have different executor IDs, roles/nodes, evidence IDs and
  purposes; a same-executor negative test fails even if that account holds two labels.
- Missing external acceptance refuses only the governed pre-Delivery/Delivery transition.
- Source, handoff, curated fragment and rebuilt graph report the same review round, lifecycle and
  exact shared commit. A green consistency suite is supporting evidence, never Judge approval.

### Round 4 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Handoff / B-070 applied correction | Forward notice is present at shared HEAD `d3cadda`; its limited applied scope is preserved | Independent verification may verify that clause; it grants no S2 authority |
| **Approve** | Decision lifecycle analysis | Draft 4's D-175–D-181 clause table and corrected Final-Sign-Off-before-T5 direction are usable | Preserve while applying `B071-R30`–`R37` |
| **Approve-with-conditions** | Lane A implementation plan | Core ontology and two-feature split survive, subject to the eight Round 4 corrections above | Lane A Draft 5, then Lane B independent review |
| **Reject** | `AUTH-DOC` approval now | Approval vocabulary, `D-171` expiry wording, run serialization, lifecycle write set and assurance identity test remain unsafe | Correct Draft 5 before asking the Judge |
| **Defer** | Product implementation / lane transition / route activation | Judge approval remains none; `D-171` is fully binding | Separate bounded authorization only after corrected documentation is applied and independently Verified |

## Round 5 independent review — Lane A Draft 5 at `5bd9b90`

**Judge approval: none.** Lane B reviewed the actual two-commit sequence, not Lane A's summary:
`428731d` contains this handoff's Round 4 findings and `5bd9b90` contains Draft 5 plus Lane A's
response update. Local HEAD and `origin/docs/journal-2026-08-16` both resolve to `5bd9b90`, so the
claim that these commits are unpushed is false. Graphify is the opposite: its
`lastAnalyzedHead` remains `d3cadda`, so `docs-drift` fails at `5bd9b90`. The full suite therefore
passes 16 checks and fails `docs-drift`; it is not 17/17 at the reviewed HEAD.

### Round 5 findings — parent first

| Finding | What remains unclear or contradictory | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R38` — shared-evidence status is inverted | B-071 says Draft 5 is not pushed, but local and remote are both `5bd9b90`. Conversely, Graphify still analyzes `d3cadda` while the plan's checklist treats push equality as the remaining evidence condition | A reviewer can wait on a push already completed while accepting a graph that demonstrably analyzes the wrong commit | Record push equality as satisfied at `5bd9b90`; record Graphify as stale and Round 5 as 16/17. Do not claim full synchronization until the corrected source and curated fragment are committed, rebuilt and checked at one later HEAD |
| `B071-R39` — the vocabulary rule fails its own test | Draft 5 says the authorization checkpoints are never abbreviated as “Gate” in the file, and Round 5 requires zero old labels, but its revision history and review history intentionally retain “Gate A/B1/B2/Route Activation Gate” | The checklist fails forever or history is rewritten merely to make a text search green | Apply `AUTH-*` exclusively to operative instructions. Label old terms as historical vocabulary and make the check scope-aware; preserve historical evidence instead of demanding zero occurrences across the whole file |
| `B071-R40` — authorization drafting is forbidden by the plan that drafts it | The approval section says `AUTH-F1`/`AUTH-F2` cannot be **proposed** before `AUTH-DOC` is Verified, while §§5 and Approval Gate already propose their scopes for review | The present plan violates its own entry condition, so either Draft 5 is invalid or later reviewers must suppress necessary planning | Allow bounded authorization proposals and review before `AUTH-DOC` verification; prohibit only their approval, exercise, lane transition and implementation until `AUTH-DOC` is Verified |
| `B071-R41` — shared Feature 1 is still made route-specific | The `AUTH-ROUTE` table row requires `AUTH-F1` and `AUTH-F2` “Verified for that route,” although the text immediately below correctly says Feature 1 is shared and route names are test coverage only | Route activation will demand nonexistent route-specific Feature 1 verification or create seven duplicate Feature 1 approvals | Require one globally Verified shared Feature 1 result plus the named route's Verified Feature 2 contract, operation shapes and external prerequisites |
| `B071-R42` — lifecycle closure still contains two impossible facts | The opening still says the plan precedes writing into B-070 even though B-070 was already amended at `d3cadda`. Section 7 says B-071 becomes Applied after “§1–§9” propagate, but the plan ends at §8 | Gate A can complete every real step while B-071 remains Open forever on nonexistent §9; Lane A can also re-edit B-070 despite the later cite-only rule | Remove B-070 from the opening's future-write list and cite its already-applied notice. Change the B-071 condition to successful execution of the actual §1–§8 packet at the named commit |
| `B071-R43` — `B071-R35` is described as applied but its status-only graph fix is absent | `frag119.json` still describes B-071 as R1–R22/two rounds and uses the retired Gate vocabulary. Draft 5 correctly says updating that description needs no `AUTH-DOC`, but Lane A did not update it | Graph queries omit R23–R37 and surface an obsolete approval model during the very review that depends on the graph | In Draft 6's documentation packet, update the status-only node to B-071 Open, Draft 5/R1–R37 independently reviewed, Judge approval none, and `AUTH-*` vocabulary. Do not add or mark `D-182` decided before `AUTH-DOC` |
| `B071-R44` — commit and graph-rebuild order is ambiguous | Section 8 first commits the “full source + curated-fragment packet,” then its rebuild step says to add/change those curated nodes “in this same pass” | If the fragment changes after the commit, the final graph can be correct locally while its source is uncommitted; if it changed before, the instruction is redundant and unverifiable | Order it once: edit all approved source and `frag119.json` → commit that complete packet → rebuild at that commit → re-merge curated fragments → run the full suite and semantic queries → make no further tracked edit before independent review |

### Draft 6 success criteria

- Current metadata states: Draft 5 and this review are pushed; Graphify is stale until the next
  synchronized commit; Judge approval remains none.
- Operative approval language uses only `AUTH-DOC`, `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`; historical
  terminology is retained but explicitly non-operative.
- `AUTH-F1` and `AUTH-F2` may be drafted and reviewed early, but cannot be approved or exercised
  before `AUTH-DOC` is independently Verified.
- `AUTH-ROUTE` consumes one globally Verified Feature 1 result and one named-route Feature 2 result;
  it never manufactures route-specific Feature 1 approvals.
- B-070 is cite-only. B-071 becomes Applied after the real §1–§8 packet, with no nonexistent step.
- The curated fragment and graph state the same review range and authorization vocabulary as the
  source, while keeping `D-182` proposed until the Judge approves `AUTH-DOC`.
- Source and curated fragment are committed before rebuilding; after rebuild,
  `lastAnalyzedHead = HEAD = origin`, the full suite passes, and semantic queries return the
  current lifecycle. Those facts still do not constitute Judge approval.

### Round 5 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Handoff / B-070 | Its applied correction remains bounded and is not reopened | Cite only during Draft 6 |
| **Approve-with-conditions** | Lane A Draft 5 | Core actor/node split, three-act T5 model, Final-Sign-Off ordering, `D-171` non-expiry and serialized feature runs are preserved | Apply `B071-R38`–`R44` in Draft 6 |
| **Reject** | `AUTH-DOC` approval now | Evidence state, proposal timing, shared-feature scope, lifecycle closure and graph/commit order remain contradictory | Lane A Draft 6, then Lane B independent review |
| **Defer** | `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`, S2 implementation and lane transition | No Judge approval exists; `D-171` remains binding | Only after corrected `AUTH-DOC` is applied and independently Verified |

## Round 6 independent review — Lane A Draft 6 at `2d3bd49`

**Judge approval: none.** Lane B reviewed the actual Draft 6 commit, not Lane A's summary. Local
`HEAD` and `origin/docs/journal-2026-08-16` both resolve to `2d3bd49`; the handoff header's “Not yet
pushed” statement is therefore false. `.graphify/branch.json` records the same
`lastAnalyzedHead`, `stale = false`, and the full local consistency suite passes. The current local
graph's two B-071 descriptions match tracked `frag119.json`. Those facts establish a shared,
mechanically current review baseline; they do **not** establish that the curated graph can be
reproduced from tracked inputs, that Draft 6 is semantically complete, or that the Judge approved
`AUTH-DOC`.

### Round 6 findings — parent first

| Finding | What remains unclear or contradictory | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R45` — the review baseline contradicts itself | B-071's header says Draft 6 is unpushed although local and remote are both `2d3bd49`. The plan's Source stops at `R37`; Draft 5 and Draft 6 are both labelled “this revision”; its graph paragraph still says `frag119.json` stops at `R22`; and its Round 6 checklist requires `R1`–`R37`/Draft 5 although the tracked fragment already says `R1`–`R44`/Draft 6 | A reviewer can wait on a completed push, apply an obsolete checklist to a newer fragment, or regress the fragment to Draft 5 while claiming to synchronize it | First correct B-071's Lane A/evidence text to the shared Draft 6 baseline and record this Round 6 review as pending incorporation. Draft 7 then states six completed review rounds through `R49`, removes “this revision” from Draft 5/6, marks Draft 7 current, and aligns its graph paragraph, tracked fragment and Round 7 checklist to `R1`–`R49`/Draft 7/Judge approval none |
| `B071-R46` — curated graph updates are not reproducible | `docs/graph-fragments/merge7.js` skips an existing node ID and an existing edge key instead of updating fragment-owned fields. Section 8 re-merges only if the curated node count drops. Lane A therefore had to patch ignored `.graphify/graph.json` directly to make Draft 6's descriptions current | A rebuild can retain the same node count and pass `graph-coverage`/`docs-drift` while returning stale lifecycle text. Another machine cannot reproduce the manually patched graph from the tracked fragment | Make curated merging a deterministic upsert: update fragment-owned fields for an existing node ID/edge key and fail on conflicting duplicate definitions. Re-merge after every rebuild, not only after a count drop. Add a semantic equality check between every tracked fragment-owned node/edge field and `.graphify/graph.json`; success is a clean rebuild + merge reproducing the current descriptions with no direct graph edit |
| `B071-R47` — “distinct executor IDs” has no stable identity key | Draft 6 does not say whether executor identity means `actor_id`, `agent_id`, or per-invocation `agent_run_id`. The current Product model says Phase 0 identity is self-asserted until S6, and the schema stores all three values plus `identity_assurance` | One executor can use two run IDs—or submit two self-asserted actor IDs—and pass the stated inequality, producing false two-reviewer evidence while the negative test appears green | Define one stable `executor_principal_key` contract before `AUTH-DOC`: derived from the governed human `actor_id` or stable virtual-agent `agent_id`; never from event/evidence IDs or `agent_run_id`. Retries retain the principal key. Store and test `identity_assurance`. Put the self-asserted policy to the Judge explicitly; recommended safe default: self-asserted identities may support a visibly labelled demo record but cannot satisfy the independent-two-executor completion claim or `AUTH-ROUTE`, which require authenticated or system-attested stable principals |
| `B071-R48` — the two assurance nodes are named asymmetrically | The Desk act has canonical `NODE-EDITORIAL-DESK-REVIEW`; the other is only prose (“Chief Journalist review node”), while the plan requires distinct canonical roles/nodes and the existing Fn_Spec catalog has only the parent `EG4` node | Implementations and tests can compare a node ID on one side with an arbitrary label on the other; role separation can be mistaken for node separation | Name the sibling canonical node, e.g. `NODE-CHIEF-JOURNALIST-REVIEW`, map it only to `ROLE-CHIEF-JOURNALIST`, and state that both are child workcells within the one `EG4`/`T5` stage. Require each assurance act to record its canonical node ID, role ID, purpose code, evidence ID, and stable executor principal key |
| `B071-R49` — Final Sign-Off alternates between “person” and non-human signer | Section 3 refuses zero/multiple “persons” and says “whichever person” signs, while the same section says the effective task `A` need not be a natural person. Only T6 is human-only | A valid agent `A` can be rejected by person-only wording, or a system can silently treat every `A` as human and collapse the T6-specific control into Final Sign-Off | Use **accountable principal** consistently for Final Sign-Off. Record `principal_id`, `principal_type`, canonical role, authority scope and provenance; require exactly one effective task-`A` principal. Reserve **natural person** exclusively for the T6 Chief Editor rule |

**Judge clarification required before `AUTH-DOC`:** may two `self_asserted` stable identities satisfy
the Assurance Preparation two-executor rule, or must both be `authenticated`/system-attested? Lane
B recommends the latter; otherwise the control proves two submitted labels, not two independent
executors. This clarification changes no current lane state and authorizes no implementation.

### Draft 7 success criteria

- One review baseline is used everywhere: Draft 7 incorporates six completed review rounds through
  `B071-R49`, names shared Draft 6 commit `2d3bd49` as its reviewed predecessor, marks Round 7
  outstanding, and records Judge approval as none.
- A clean Graphify rebuild followed by the tracked merge reproduces every fragment-owned field;
  no direct edit of ignored `.graphify/graph.json` is required, and a semantic mismatch fails the
  consistency suite even when node counts and commit hashes match.
- The two Assurance Preparation acts use different stable, authenticated or system-attested
  executor principals. Different run IDs, evidence IDs, role labels or self-asserted actor IDs do
  not satisfy executor separation.
- `NODE-EDITORIAL-DESK-REVIEW` and the canonical Chief Journalist sibling node are explicit child
  workcells of one `EG4`/`T5` stage; their identity never creates another gate or serial review.
- Final Sign-Off resolves exactly one accountable principal and records its type/provenance; only
  T6 requires a natural-person Chief Editor.
- `D-171` remains binding. Draft 7, graph/tooling correction and independent re-review authorize
  no product code, route activation, release or deployment.

### Round 6 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Handoff / B-070 | Its applied cite-only correction remains bounded and is not reopened | Cite only during Draft 7 |
| **Approve-with-conditions** | Lane A Draft 6 | Core T5 two-workstream model, Final-Sign-Off-before-T5 order, `D-171` non-expiry and four serialized authorization checkpoints remain usable | Apply `B071-R45`–`R49` in Lane A Draft 7 |
| **Reject** | `AUTH-DOC` approval now | Review metadata is contradictory; graph derivation is non-reproducible; executor-principal and sibling-node contracts are not yet safe or testable | Lane A Draft 7, clean graph reproduction, then Lane B Round 7 independent review |
| **Defer** | `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`, S2 implementation and lane transition | No Judge approval exists and `D-171` remains fully binding | Only after corrected `AUTH-DOC` is applied and independently Verified |

## Judge clarification — executor identity and attempt-badge exposure (resolves the `B071-R47` open question)

**Judge approval: the identifier model below, direct ruling, 2026-09-02.** This closes the "may
`self_asserted` identities satisfy the two-executor rule" question Round 6 left open. It does not by
itself close `B071-R47`/`B071-R48` as findings — per point 10 below, those close only once Lane A
incorporates this ruling into the plan and Lane B independently verifies the result.

An earlier same-turn draft proposed treating `executor_principal_key` as an alias for `agent_id`.
**The Judge rejected that equivalence.** They are four separate identifiers, not three collapsed
into an alias pair.

### Identifier model

| Identifier | Meaning | Stability | Exposed to |
|---|---|---|---|
| `agent_id` | Stable internal technical identity of a virtual agent | Same across runs | Internal only |
| `agent_run_id` | One execution attempt | New per attempt | Internal only |
| `agent_attempt_badge_id` | Internal full attempt identifier, binds `agent_id` + `agent_run_id` | New per attempt | Internal to the agent/audit mechanism only — **not** the Chief Editor's normal UI |
| `executor_principal_key` | Separate, stable, system-attested identifier | Same across an executor's retries/attempts | Exposed in my-editorial-app to its natural-person user (Chief Editor) |
| `identity_assurance` | How the identity was established (`self_asserted` vs. system-attested) | Recorded per event | Not displayed as an identity itself |

### Ruling

1. `agent_id` is the stable internal technical identity of a virtual agent.
2. `agent_run_id` identifies one execution attempt.
3. `agent_attempt_badge_id` is the internal full attempt identifier. It binds the relevant `agent_id`
   and `agent_run_id`. It is internal to the agent/audit mechanism and is not the identifier exposed
   to the Chief Editor.
4. `executor_principal_key` is a separate, stable, system-attested identifier exposed in
   my-editorial-app to its natural-person user, presently the Chief Editor.
5. Every `agent_attempt_badge_id` is tagged/linked to exactly one `executor_principal_key`. One
   `executor_principal_key` may have multiple attempt badges (retries, later attempts).
6. Assurance Preparation executor separation is evaluated using `executor_principal_key`. Different
   `agent_run_id` or `agent_attempt_badge_id` values do not establish different executors.
7. The two Assurance Preparation acts must contain different, system-attested `executor_principal_key`
   values and the correct node-role bindings:
   - `NODE-EDITORIAL-DESK-REVIEW` → `ROLE-DESK-EDITOR`
   - `NODE-CHIEF-JOURNALIST-REVIEW` → `ROLE-CHIEF-JOURNALIST`
8. A `self_asserted` value cannot satisfy this comparison. It may remain visibly marked as
   demonstration or historical evidence only.
9. The Chief Editor's interface displays the AI identity, canonical role/node and
   `executor_principal_key`. Raw `agent_id`, `agent_run_id` and `agent_attempt_badge_id` values
   remain internal unless an authorized audit view specifically requires them.
10. This ruling resolves the Judge decision required by `B071-R47`. The finding itself becomes
    closed only after Lane A incorporates the ruling into Draft 7 and Lane B independently verifies
    the result.

### Article 50 scope — corrected by `B071-R51`, not an open gap

The prior revision of this section treated "what is disclosed to an external natural-person reader"
as an open fifth-identifier question. **That was a phantom question.** The governed scope contains
no direct external-reader interaction with the virtual agents — the natural person directly
interacting with them is the Chief Editor. Article 50(1)/(5) disclosure applies to that direct
interaction: an explicit AI label, canonical role/node, and `executor_principal_key`, shown at first
interaction; raw `agent_id`/`agent_run_id`/`agent_attempt_badge_id` stay internal. Whether published
article text itself needs an AI-generation label is a separate Article 50(4) publication question,
assessed later in the publication feature — it is not a disclosure requirement on the T5/T6
identifier model and does not block `AUTH-DOC`. No fifth identifier is required.

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Four-identifier model and Chief-Editor exposure rule | Final; supersedes the rejected `executor_principal_key`≡`agent_id` equivalence | Incorporate into Lane A Draft 7 |
| **Reject** | `self_asserted` for executor comparison | Confirmed rejected (point 8) | Demo/historical evidence only, never operative comparison |
| **Reject** | Fifth Article 50 external-reader token | No governed direct external-reader interaction exists (`B071-R51`); Chief Editor is the direct-interaction audience | Chief-Editor disclosure per this ruling; Article 50(4) publication labelling assessed separately |
| **Defer** | `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`, S2 implementation | Unaffected | After `AUTH-DOC` is applied and independently Verified |

## Round 7 independent review — Lane A Draft 7, uncommitted worktree over `2d3bd49`

**Judge approval: the four-identifier relationship and rejection of `self_asserted` only. No
`AUTH-DOC`, plan, tooling, implementation or route approval exists.** Lane B reviewed the actual
two-file worktree diff. The checked-in graph still correctly represents committed Draft 6 at
`2d3bd49`; it cannot represent uncommitted Draft 7 and must not be described as Draft-7-synced.
The following findings are new or show that a Round 6 correction was claimed but not actually
completed.

### Round 7 findings — parent first

| Finding | What remains unclear or contradictory | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R50` — `R45` is claimed closed but its live metadata is untouched | Draft 7 says `R45` was corrected “in the handoff file itself,” yet B-071's Lane A header still says Draft 6 is unpushed, its Independent-Review field stops at Round 5, and its Evidence line says the direct clarifications are not represented. The plan's Source still stops at `R37`, and Draft 5 still says “this revision” | The next reviewer receives two incompatible baselines and can approve the wrong revision or wait for a push already completed | Correct the live header and Source, not only the revision narrative: shared predecessor `2d3bd49`; Draft 7 uncommitted/pending Round 7; completed reviews through `R49`; Judge identifier ruling represented but `AUTH-DOC` approval none. Remove “this revision” from Draft 5 and reserve it for Draft 7 only |
| `B071-R51` — Article 50 is applied to an invented external-reader interaction | The plan opens a fifth-token question for an “external natural-person reader,” but the governed scope contains no direct external-reader AI interaction. The Chief Editor is already the natural person directly interacting with the virtual agents. Article 50(1) requires clear AI disclosure for direct interaction; it does not require a public technical token. Published public-interest text is a separate Article 50(4) question | A nonexistent external interaction becomes an `AUTH-DOC` blocker, while the real Chief-Editor disclosure can remain underspecified. Direct-interaction disclosure and publication labelling will be implemented as one confused control | Close the phantom question: no fifth identifier is required in this plan. For the Chief Editor's direct interaction, display an explicit AI label, canonical role/node and `executor_principal_key` at first interaction. Keep raw attempt identifiers internal. If a future external interactive feature is proposed, specify its disclosure then; assess Article 50(4) publication labelling separately in the publication feature |
| `B071-R52` — “system-attested” cannot be represented by the governed assurance vocabulary | Draft 7 records `identity_assurance` as `self_asserted` versus `system-attested`, but the Product contract and applied `0002` enum contain only `self_asserted` and `authenticated` | Writers must either store a value the database rejects or mislabel agent attestation as human/account authentication; append-only evidence then preserves the wrong provenance permanently | Define the target vocabulary explicitly as `self_asserted` / `authenticated` / `system_attested`: `authenticated` for a verified natural-person/account principal, `system_attested` for a server-issued virtual-agent principal. Preserve historical `self_asserted` values. Route the physical schema change to a later authorized migration; do not edit `0002` |
| `B071-R53` — the four identifiers have no owning data contract or propagation path | Draft 7 adds `executor_principal_key` and `agent_attempt_badge_id`, plus their one-principal-to-many-attempt relationship, only inside the corrective plan and proposed UX. Section 7 omits `Modular_PRD`'s `TR-DM-02`/identity NFR and any Fn_Spec/SPECS ownership for issuance, immutability, tenancy, uniqueness, linkage and retention | The UI can promise an identifier that no governed record stores; retries can re-key the principal; tenant collisions and orphan attempt badges remain legal; the negative test cannot be implemented consistently | Add the logical identity relationship to Product ownership (`TR-DM-02`, the relevant security/audit NFR and target ACs); add behavior/refusal rules to `FN-GATES`; route physical storage, key constraints and server-only issuance to a named `SPECS` candidate. Require one stable principal key per tenant/agent, one unique attempt badge per attempt, exactly one principal per badge, many badges per principal, immutable historical linkage and no client-supplied attestation |
| `B071-R54` — the Graphify repair is ordered after the commit that must contain it | Section 8 step 2 commits the complete packet, then step 3 says `merge7.js` and the semantic check “must be fixed before this pass.” Neither tooling file appears in §7's write set | Following the order literally creates an uncommitted tooling edit after the purported complete commit, violating both the complete-packet claim and the no-further-edit rule; skipping it reproduces `R46` | Put `merge7.js` and the semantic equality check in §7 and §8 step 1's authorized write set. Commit source tiers, fragment and tooling together; only then rebuild, merge, run the full suite and query semantics. No direct `.graphify/graph.json` edit and no tracked edit after verification |
| `B071-R55` — virtual-agent execution still uses human/account language | Section 4 says “the same person” performs virtual-agent acts, and the negative test uses “an account holding both labels.” The ruled comparison object is `executor_principal_key`, not a person or login account | Manual human workflow, authenticated account and virtual-agent principal collapse again; one service account hosting two valid agents may be rejected, or one agent with two labels may pass depending on how “account” is interpreted | Say “the same executor principal may perform the route-selected Editorial Review and that principal's own Assurance Preparation act.” The negative test submits the same `executor_principal_key` under two role/node labels and must fail. Keep natural-person language only for Chief Editor/T6 and Article 50 exposure |

Official source boundary for `B071-R51`: Article 50(1) covers AI systems directly interacting with
natural persons; Article 50(5) requires clear, distinguishable and accessible notice by the first
interaction or exposure. Article 50(4)'s published-text rule is separate. See the European
Commission's [Article 50 FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)
and [AI Act Service Desk Article 50 text](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50).

### Draft 8 success criteria

- B-071's live header, the plan Source, revision history and review checklist state one lifecycle:
  Draft 7 is the uncommitted response to Round 6; Round 7 findings are pending Draft 8; Judge
  approval covers the identifier ruling only, not `AUTH-DOC`.
- No fifth/public token is invented. The Chief Editor sees a clear AI label, canonical role/node
  and `executor_principal_key`; raw `agent_id`, `agent_run_id` and `agent_attempt_badge_id` remain
  internal except in an authorized audit view.
- The governed assurance vocabulary can store `system_attested` without rewriting history or
  overloading `authenticated`.
- Product, Fn_Spec and SPECS ownership together define issuance, stability, tenancy, uniqueness,
  linkage, retry continuity, retention and refusal behavior for both new identifiers.
- Executor separation compares two system-attested `executor_principal_key` values. A different
  attempt badge, run ID, role label or self-asserted value never creates a second executor.
- The Graphify upsert and semantic-equality tooling are part of the pre-rebuild committed packet;
  a clean rebuild reproduces the curated state without a hand edit.
- `D-171` remains binding and no Draft 8 work authorizes product code, route activation, release or
  deployment.

### Round 7 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Judge identifier ruling | Four identifiers remain separate; `executor_principal_key` is user-visible and tags internal attempt badges; `self_asserted` is rejected for executor separation | Preserve in Draft 8 |
| **Approve-with-conditions** | Lane A Draft 7 | T5/T6 ontology, sibling node, accountable-principal correction and four-checkpoint structure survive | Apply `B071-R50`–`R55` in Lane A Draft 8 |
| **Reject** | Article 50 external-reader token blocker | No direct external-reader interaction is in governed scope; no fifth token is required here | Replace with Chief-Editor direct-interaction disclosure; assess publication labelling separately |
| **Reject** | Commit now / `AUTH-DOC` approval now | Live metadata, identity storage ownership, assurance vocabulary and Graphify ordering remain contradictory | Hold commit; Draft 8, then Lane B Round 8 review |
| **Defer** | `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`, S2 implementation and lane transition | No authorization exists; `D-171` remains fully binding | Only after corrected `AUTH-DOC` is applied and independently Verified |

## Round 8 independent review — Lane A Draft 8 at `d3898db`

**Reviewed state, 2026-09-02.** Local HEAD and
`origin/docs/journal-2026-08-16` both resolve to `d3898db`; the push condition is met. The commit
touches only this handoff and `V1-B071-CORRECTIVE-PLAN.md`. The working tree contains only the
pre-existing untracked `package-lock.json`, which was not examined or staged. The full local
consistency suite passes every check except `docs-drift`: Graphify analyzes `2d3bd49`, while HEAD
is `d3898db`. `frag119.json` still describes `R1`–`R44`/Draft 6. This is a known state, not
completion evidence.

### Round 8 findings — parent first

| Finding | What remains unclear or contradictory | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R56` — pre-approval review and post-approval application form a circular gate | The Round 8 checklist says it must complete **before** the plan reaches the Judge for `AUTH-DOC`, but that same checklist requires the `merge7.js` repair, `frag119.json` lifecycle change, rebuild and green suite. Sections 7–8 authorize those acts only **after** `AUTH-DOC` | No literal execution order can pass. Applying the files first pre-empts the Judge; waiting for approval leaves Round 8 incomplete, so the plan never reaches the Judge | Split two gates explicitly: (1) independent **plan review** of the pushed draft; (2) after Judge approval, Lane A **application**, graph sync and independent applied-state verification. If current-draft graph currency is required before plan approval, authorize only the graph-tooling/status repair as a named precondition; it must not apply `D-182` or any disputed target contract |
| `B071-R57` — the live lifecycle metadata became stale at the commit it describes | B-071's header and the plan's Draft 8 revision note still say Draft 8 is uncommitted/unpushed over `2d3bd49`; B-071's Draft 8 success criterion still describes Draft 8 as pending. The actual shared commit is pushed `d3898db` | A reviewer can wait for work already done, review the wrong base, or treat the current Draft 8 as an uncommitted proposal that may change beneath the review | Append the factual correction without rewriting history: Draft 7 was an uncommitted intermediate; Draft 8 is committed and pushed at `d3898db`; Round 8 is this review; Judge approval remains limited to the identifier ruling and does not include `AUTH-DOC` |
| `B071-R58` — the `R49`/`R55` semantic replacement is still incomplete | Operative plan §3 refuses Final Sign-Off when task `A` resolves to multiple **persons** and describes its signer as “not necessarily a natural person”; §4 verification still says “even when the same person performed them”; the Round 8 checklist still tests “two labels on one account” | Implementers can again treat Final Sign-Off as human-only, or compare a login account/person instead of `executor_principal_key`. The negative test then passes or fails for the wrong identity object | Use **accountable principal** throughout Final Sign-Off. Use **executor principal**/`executor_principal_key` throughout virtual-agent execution and its negative test. Reserve **natural-person Chief Editor** for `T6` and direct-interaction disclosure. Historical finding quotations may retain the old terms when marked historical |
| `B071-R59` — the two proposed technical artifacts are not named consistently | §6 proposes `docs/specs/ux/chief-editor-publication-workspace.md`, while `docs/specs/README.md` requires `docs/specs/ux/UX-*.md`. Section 7 also says only “`SPECS` candidate (new)” for the identifier storage contract, names no path, and the Inventory action adds only the UX file | Lane A can create two differently named UX artifacts, omit the identity spec from inventory, or put schema rules into an arbitrary existing spec. `D-54` propagation cannot prove which artifact was created | Name both target paths before approval. Use the governed `UX-*` convention for the workspace file. Either name one exact `docs/specs/SPEC-*.md` identity/attestation file and add it to Inventory, or prove by the `D-30` redundancy test that no new technical spec is needed and remove “new” |
| `B071-R60` — Graphify is stale, not safely complete | Lane A's handback calls the `docs-drift` failure “expected, not a problem,” but Draft 8 itself retains `B071-R15`: a red `docs-drift` is never safety/completion evidence. `merge7.js` still skips existing node/edge keys, and `frag119.json` is two review rounds behind | Rebuilding now can preserve stale semantics with the same node count; leaving it indefinitely makes graph queries return Draft 6 while the reviewed source is Draft 8 | Do not call the current state complete and do not rebuild with the known skip-on-existing merger. After `R56` chooses the lawful gate, fix and commit deterministic upsert plus semantic equality, update the status-only fragment without asserting `D-182`, rebuild/re-merge, require `lastAnalyzedHead = HEAD`, and rerun the full suite |

### Round 8 success criteria for Draft 9

1. One acyclic sequence distinguishes plan review, Judge approval, applied-state verification and
   later feature/route authorizations.
2. Every live lifecycle statement names pushed commit `d3898db` as Draft 8's evidence and names
   the later Draft 9 commit only after it exists.
3. Final Sign-Off compares one effective accountable principal; Assurance Preparation compares
   two distinct, system-attested `executor_principal_key` values. No operative person/account
   wording changes either rule.
4. Both proposed spec artifacts have exact governed paths, and Inventory treatment follows from
   whether each file is actually created.
5. Graphify's tracked fragment and rebuilt graph are semantically equal at one committed HEAD;
   the full local suite is green before applied-state verification.
6. No step applies `D-182`, starts S2, changes lane state, or authorizes `AUTH-F1`, `AUTH-F2` or
   `AUTH-ROUTE` before its named approval.

### Round 8 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Handoff evidence | Draft 8 is committed and pushed at `d3898db`; the unrelated `package-lock.json` remains outside the packet | Preserve as the Round 8 review base |
| **Approve-with-conditions** | Lane A corrective plan | T5/T6, four-identifier, two-feature and four-authorization models survive; `B071-R56`–`R60` must be incorporated | Lane A Draft 9, then independent plan re-review |
| **Approve-with-conditions** | Graphify tooling precondition | A narrow `merge7.js` upsert/equality repair may precede `AUTH-DOC` only if separately Judge-authorized and it represents Draft/Open lifecycle status without applying `D-182` | Lane A tooling/status-only pass, then full local verification |
| **Reject** | `AUTH-DOC` approval now | The gate is circular, lifecycle text is stale, operative identity terms remain mixed, and new spec paths are incomplete | Correct Draft 9 first |
| **Reject** | Current Graphify completion claim | `docs-drift` fails and the curated source still describes Draft 6 | Tooling repair, status-fragment update, rebuild/re-merge and semantic check |
| **Defer** | `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`, S2 implementation and lane transition | `D-171` remains binding; this is review evidence only | After corrected `AUTH-DOC` is applied and independently Verified |

## Round 9 independent review — Lane A Draft 9 and Graphify precondition at `838baff`

**Judge approval: the identifier ruling and the narrow Graphify tooling/status precondition only.**
Lane B reviewed the actual pushed commit, not Lane A's summary. Local `HEAD` and
`origin/docs/journal-2026-08-16` both resolve to `838baff`; `.graphify/branch.json` records the same
`lastAnalyzedHead` with `stale = false`; and the full local consistency suite passes. The working
tree contains only the pre-existing untracked `package-lock.json`, which was not examined or
staged. These facts prove a shared, current review baseline. They do not prove that Draft 9's
propagation set is complete or that the new merger enforces the semantic contract it claims.

### Round 9 findings — parent first

| Finding | What remains unclear or contradictory | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R61` — the parent governing propagation set is incomplete | Draft 9 §7 starts at the V1 trackers and Product tier. It omits the editable governing-set files `v1-build-readiness-addendum.md`, `blueprint.md` and `business-case.md`, although they still define T5 as Line-2/human-primary and T6 as Line-1/agent. It also omits derived operational readers that repeat or enforce that model: `docs/README.md`, `SPECS-TRANSITION-ENFORCEMENT.md` and the media-industry fallback plan | `D-182` can be applied in the register while higher/read-first documents and the existing enforcement spec continue prescribing the opposite executor, Line and `human_only` behavior. Arbitration may identify the winner, but implementers and tests will still consume contradictory requirements | Before any child edit, add a clause-level propagation/forward-notice row for every affected non-frozen file. Preserve historical text where required, but mark the current target explicitly. Never edit frozen `docs/PRD.md` or the Charter. For existing `[V1]` technical text, use the governed `[V1→V2]`/target overlay rather than an unmarked rewrite |
| `B071-R62` — human-only T6 has no pre-auth trust boundary | The plan says only an authenticated natural-person Chief Editor may complete T6, while the build plan defers authentication lockdown to S6 and the demo remains accessible without a login wall. Draft 9 does not say how a pre-S6 caller is prevented from self-asserting the human role | An agent or arbitrary client can present a human actor label and satisfy an actor-type check. The system then records a false human-only assurance while every stated T6 test can appear green | Decide the behavior before `AUTH-DOC`: either authenticated Chief-Editor identity is a hard dependency for operative T6, or pre-auth T6 is visibly `self_asserted`/demo-only and cannot satisfy publication or `AUTH-ROUTE`. Add a negative test proving a client-supplied human label cannot create an operative T6 event |
| `B071-R63` — identity-spec ownership and naming are still conditional | Draft 9 calls `SPECS-IDENTITY-ATTESTATION.md` governed naming, but `docs/specs/README.md` still prescribes singular `SPEC-*.md`, while the actual sibling files use plural `SPECS-*`. The `D-30` owner decision is deferred until execution even though `SPECS-TRANSITION-ENFORCEMENT.md` already excludes column/type ownership | The application pass can create a file whose name violates the index, omit it from Inventory, or extend an unrelated spec; different reviewers can legitimately choose different artifacts from the same approved plan | Resolve the redundancy and naming decision in the plan: record why the transition spec cannot own identity storage, select one exact file, and include the specs README/index normalization in §7 if `SPECS-*` is the intended convention. Inventory must follow that decided file, not a future conditional |
| `B071-R64` — one operative canonical-node reference remains prose | Proposed `D-182` §1 point 2 still says “Chief Journalist review node” rather than `NODE-CHIEF-JOURNALIST-REVIEW`, although the plan-review checklist requires the canonical ID wherever that prose appeared | The decision origin can authorize an unnamed node while child tiers implement the canonical node, recreating the node/role ambiguity the packet is meant to remove | Replace the operative prose in proposed `D-182` with `NODE-CHIEF-JOURNALIST-REVIEW` and retain the one-to-one mapping to `ROLE-CHIEF-JOURNALIST` |
| `B071-R65` — the completed Graphify precondition is scheduled a second time | The precondition was authorized and applied at `838baff`, but §7 still lists `merge7.js` as a future `AUTH-DOC` edit, §8 says it is fixed in step 1, and the precondition section still says “If the Judge grants it” and “Declining it leaves the graph stale” | A literal runbook execution either reopens completed tooling work, claims the current graph is stale when it is not, or mixes a tooling correction into the later ontology-application commit and obscures what `AUTH-DOC` actually changed | Mark the precondition completed at `838baff`. In §7/§8, cite and verify the existing tool instead of scheduling the same repair again; reopen it only for the separate `R66` defects below |
| `B071-R66` — the merger's semantic check can produce false green evidence | `--verify-only` writes the graph before it verifies; dangling fragment edges are reported then dropped and skipped by verification; only the selected fragment is checked; cross-fragment conflicting ownership is not detected; and a failed verification occurs after the tracked input has already mutated the graph. “Every fragment-owned field” is also undefined: a read-only all-fragment comparison finds many differences dominated by Graphify-derived `community` fields, so neither the plan nor tool identifies which layer owns them | A destructive “verify-only” run can repair the evidence it is supposed to inspect; an invalid required edge can disappear with exit 0; two fragments can silently overwrite one another; and the applied-state checklist can never consistently prove global equality across machines | Treat the current tool as applied but not verified. Parse mode before mutation; make verify-only read-only; fail on dangling edges and cross-fragment conflicts before any write; validate the in-memory candidate then replace atomically; add an all-fragment audit; explicitly enumerate curated-owned fields and exclude or govern Graphify-derived fields; add negative tests for no-write verification, dangling edges, same/cross-fragment conflicts and update-in-place behavior |

### Draft 10 success criteria

1. The parent decision names every affected editable governing and derived tier; no current T5/T6
   reader prescribes the retired human-T5/agent-T6 model without an explicit historical/target
   notice.
2. Operative T6 completion proves an authenticated natural-person Chief Editor. Until that trust
   boundary exists, a self-asserted/demo event cannot authorize publication or `AUTH-ROUTE`.
3. The identity-attestation technical owner and exact path are decided before application, and
   `docs/specs/README.md`, Inventory and §7 use one naming rule.
4. Proposed `D-182` uses both canonical T5 child-node IDs and their canonical role bindings.
5. Draft 10 records the Graphify status precondition as completed at `838baff`; it neither calls the
   graph stale nor schedules the same repair as new `AUTH-DOC` work.
6. Graph verification is non-mutating, fails closed on dangling/conflicting definitions, checks all
   tracked fragments under an explicit owned-field policy, and is covered by negative tests.
7. `D-171` remains binding. No plan correction applies `D-182`, starts S2, changes lane state, or
   authorizes `AUTH-F1`, `AUTH-F2` or `AUTH-ROUTE`.

### Round 9 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Git/GitHub and Graphify baseline | Shared pushed commit is `838baff`; graph commit metadata matches; the full local suite passes | Preserve as the Round 9 evidence baseline |
| **Approve-with-conditions** | Graphify tooling/status precondition | Status-only sync is correctly bounded and current, but the verifier is not yet safe enough to support applied-state proof | Apply `B071-R65`/`R66`, add negative tests, then independent tool re-review |
| **Approve-with-conditions** | Lane A Draft 9 | Core T5/T6, four-identifier, two-feature and four-authorization structure remains usable | Apply `B071-R61`–`R66` parent-first in Draft 10 |
| **Reject** | `AUTH-DOC` approval now | Governing propagation, T6 authentication, spec ownership and verification semantics remain incomplete | Lane A Draft 10, pushed shared baseline, then Lane B independent plan review |
| **Defer** | `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`, S2 implementation and lane transition | `D-171` remains binding; this round authorizes no implementation | Only after corrected `AUTH-DOC` is applied and independently Verified |

## Round 10 independent review — Lane A Draft 10 and tooling commit `a309ba3`

**Judge approval: none for Draft 10 or `AUTH-DOC`.** The request supplying Lane A's handback says
this explicitly; the contradictory sentence in this file's Lane A field and Lane A's summary is an
unverified claim, not decision evidence. Local `HEAD` and `origin/docs/journal-2026-08-16` both
resolve to `a309ba3`. Graphify still analyzes `838baff`, so the full local suite is 16/17 with
`docs-drift` as the sole failure. The only unrelated working-tree item is the pre-existing untracked
`package-lock.json`, which was not examined or staged.

### Round 10 findings — parent first

| Finding | What remains unclear or contradictory | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R67` — approval provenance is false | The live Lane A field says “The Judge approved Draft 10,” while the controlling request says “Judge Approved: none since still pending review of plans first.” Draft 10 also labels the R62 policy “decided” without a decision-register entry or direct ruling | A proposal can be promoted into governing behavior merely because its drafter calls it approved; every later `AUTH-*` gate then rests on invented authority | Append a factual correction and change current-value metadata to “Draft 10 proposed; Round 10 reviewed; Judge approval none.” Preserve the earlier claim as historical evidence of the defect, never as authority |
| `B071-R68` — the pre-`AUTH-DOC` circular gate has returned | Draft 10's “Round 10 — outstanding, before this revision reaches the Judge” requires every R61 target file to **carry** its overlay and requires `docs/specs/README.md` to **match** the new convention. Those are §7 application edits, and §7 remains gated on `AUTH-DOC` | Waiting for approval fails the checklist; satisfying the checklist first applies disputed content without approval. The plan again has no legal execution order | Make Round 10 plan-review-only: verify that §7 names exact future edits. Move “files carry/match” and all post-write evidence exclusively to the applied-state checklist after `AUTH-DOC` |
| `B071-R69` — the demo-first rule is treated as a business decision | “No login wall in v1” says when authentication is built; it does not choose whether pre-auth T6 is disabled, demonstrative/non-operative, or performed through another trusted mechanism. Lane A selected one branch and called it decided | An infrastructure sequencing rule silently determines publication authority. The Judge may approve a plan believing the T6 policy was still open while the proposed decision already fixes it | Present the branches to the Judge. Lane B recommends the bounded option already drafted—pre-auth T6 may be demonstrative but never operative—but it stays **proposed** until expressly approved |
| `B071-R70` — T6 is conflated with publication | Proposed D-182 says an authenticated T6 closes `Drafted → Reviewed → Published`. The governed state machine defines T6 as `Reviewed → Approved`; T7 performs automated `Approved → Published`, and T11 may promote on the first manually confirmed live target | Implementers can publish directly from T6, bypass publication-target evidence and the T7/T11 controls while claiming compliance with D-182 | State only: authenticated T6 may perform `Reviewed → Approved`. Publication remains exclusively under the existing T7/T10/T11 feature group and its live-target rules |
| `B071-R71` — R61 is not yet an executable propagation plan | The success criterion requires one clause-level treatment per affected file, but §7 combines six heterogeneous files in one row with no exact paths/anchors and proposes a single forward notice despite multiple operative tables, tests and narrative rules in those files | A top-of-file notice can coexist with executable current-value rows and acceptance tests that still require human T5/agent T6; a search cannot prove which clauses became historical | Split the combined row by exact path and anchor. For each current-value clause choose `replace`, `[V1→V2] target overlay`, or `historical notice`; name the negative search that proves no unmarked operative contradiction remains |
| `B071-R72` — R66 remains false-green and its lifecycle is stale | The commit added no tracked tests. `--verify-only` no longer writes, but it first overlays the fragment onto an in-memory candidate and then compares that candidate to the same fragment, so a stale real graph can still pass. `--all` checks cross-fragment whole-object conflicts only; it does not compare all fragment-owned fields with the graph or validate global dangling edges. The final write is direct, not atomic. Draft 10 still describes these defects as “remaining” even though Lane A's summary calls all six fixes complete | A stale graph passes verify-only because the expected values were injected before comparison; an all-fragment audit can be green without semantic parity; a partial disk write can corrupt the graph; and no regression suite prevents recurrence | Separate `verifyExisting(graph, fragment)` from `buildCandidate`; `--verify-only` must compare the untouched graph. Make `--all` validate global endpoints and semantic parity under field-level ownership, not whole-object equality. Write temp-then-rename after validation and re-read. Add tracked automated tests for stale-field failure, no-write verification, dangling edges, same/cross-fragment overlap, atomic failure and update-in-place. Then update Draft 10's lifecycle text and independently rerun them |

### Draft 11 success criteria

1. Current metadata says Draft 10 is proposed and independently reviewed; Judge approval remains
   none until a direct ruling is recorded.
2. The checklist that precedes `AUTH-DOC` is text-only. Actual tier edits and their evidence appear
   only in the post-approval applied-state checklist.
3. The Judge explicitly chooses the pre-authentication T6 policy; the plan does not derive it from
   the demo-first build rule.
4. T6 ends at `Approved`. T7/T10/T11 remain the only governed publication mechanisms.
5. Each R61 file has an exact path, anchor, treatment and negative search in the proposed write set.
6. Graph verification compares untouched state, audits all fragments and endpoints, writes
   atomically, and has tracked negative tests. Graphify then analyzes the same pushed HEAD.
7. `D-171` remains binding; no `AUTH-*`, S2, lane-state, release or deployment authority is implied.

### Round 10 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Git/GitHub evidence | Draft 10/tooling commit `a309ba3` is pushed and local/remote match | Preserve as Round 10 review base |
| **Approve** | `B071-R64`/`R65` plan corrections | Canonical sibling node and completed-precondition wording are corrected | Preserve in Draft 11 |
| **Approve-with-conditions** | R61/R63 planning direction | Governing propagation and exact identity-spec ownership are directionally sound but not yet executable clause by clause | Apply `B071-R71` in Draft 11 |
| **Reject** | Draft 10 approval / `AUTH-DOC` now | Approval provenance, gate order, T6 semantics and Graphify proof are defective | Lane A Draft 11, pushed/synced, then independent review |
| **Reject** | Graphify verification claim | `docs-drift` is red and `merge7.js` still verifies a self-overlaid candidate without tracked tests | Apply `B071-R72`, rebuild/re-merge, run full suite |
| **Defer** | `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`, S2 and lane transition | `D-171` remains binding; no implementation is authorized | Only after `AUTH-DOC` is applied and independently Verified |

## Judge decision packet — pre-authentication T6 policy

- **Kind:** blocked-on-decision within existing `B-071`; no new handoff
- **Decision owner:** Judge / Chief Editor (the same natural person under `D-158`)
- **Decision required before:** Draft 11 can be approved for `AUTH-DOC`
- **Does not authorize:** implementation, route activation, publication, lane transition or `D-171`
  relaxation

### What happened

Draft 10 selected a pre-authentication T6 policy and called it “decided,” but no Judge ruling exists.
The infrastructure rule “demo-first, no login wall in v1” does not answer the business-control
question. It says when authentication is built; it does not say whether an unauthenticated action
may authorize an article.

Three facts are already fixed and are not part of the choice:

1. `T6` is the natural-person Chief Editor's final editorial judgment.
2. `T6` changes only `Reviewed → Approved`; it never changes an article to `Published`.
3. T7/T10/T11 and the publication-target evidence govern publication separately.

### What the Judge must choose

| Option | Simple rule | Benefit | Cost/risk | Lane B recommendation |
|---|---|---|---|---|
| **A — demonstrate T6, but do not make it operative before authentication** | The Chief Editor may exercise the T6 UI in the open demo. The resulting evidence is visibly `self_asserted`/demo-only. It does **not** create the authoritative `Reviewed → Approved` transition, trigger publication, or satisfy `AUTH-ROUTE` | Preserves an end-to-end UI demonstration without pretending the natural person was authenticated | Requires the UI and evidence view to distinguish “demonstrated judgment” from “operative approval” | **Approve — recommended** |
| **B — disable T6 until authentication exists** | The demo stops after T5. T6 controls are disabled until an authenticated Chief Editor session exists | Simplest and strongest assurance boundary | The open demo cannot demonstrate the final Chief Editor action | Approve only if assurance is more important than demonstrating the full workflow |
| **C — allow `self_asserted` T6 to approve** | An unauthenticated caller claiming the Chief Editor role may create `Reviewed → Approved` | Fastest apparent workflow completion | Does not prove a natural person acted; any caller or agent can claim the role; creates false approval evidence and can unlock downstream publication | **Reject** |

**Recommended ruling:** approve Option A, reject Option C, and retain Option B only as the fallback
if a safe demo-only record cannot be represented without changing authoritative workflow state.

### What is guaranteed to fail without this ruling

- Treating `executor_principal_key`, an AI badge, a role label or a browser session as proof of
  authentication. They identify or label an executor; they do not prove the Chief Editor logged in.
- Writing the canonical `Reviewed → Approved` transition and merely adding a “demo” label afterward.
  The authoritative state has already changed, so the label cannot make it non-operative.
- Triggering T7 or creating publication-ready evidence from a pre-authentication T6 demonstration.
- Saying T6 reaches `Published`; that bypasses the separate publication feature group.
- Showing no visible distinction between a demonstration and an authenticated approval.

### Success criteria if the Judge approves Option A

| ID | Given | When | Then |
|---|---|---|---|
| `T6-PREAUTH-01` | The article is `Reviewed` and no authenticated Chief Editor principal exists | A user exercises the T6 demo control | A visibly demo-only, `self_asserted` record may be retained, but the authoritative article state remains `Reviewed` |
| `T6-PREAUTH-02` | A pre-authentication T6 demonstration exists | Publication or `AUTH-ROUTE` eligibility is evaluated | The demonstration contributes no approval evidence and the action is refused |
| `T6-PREAUTH-03` | A caller supplies a Chief Editor role label or `executor_principal_key` without authenticated assurance | The caller attempts operative T6 | Refused; identifiers and labels do not substitute for authentication |
| `T6-AUTH-01` | The article is `Reviewed` and the natural-person Chief Editor is authenticated | The Chief Editor approves at T6 | Exactly one authoritative `Reviewed → Approved` transition is appended with the authenticated principal and required T5 evidence references |
| `T6-AUTH-02` | An authenticated T6 has produced `Approved` | Publication eligibility is evaluated | The existing T7/T10/T11 rules decide publication; T6 itself never records `Published` |
| `T6-AGENT-01` | Any virtual agent or system principal attempts operative T6 | The request is evaluated | Refused even if the agent has a valid system-attested identity or attempt badge |

### Parent-first drafting steps after the Judge rules

1. **Decision first:** Draft 11 records the chosen option in proposed `D-182`, corrects the false
   “decided/approved” metadata, and states T6 as `Reviewed → Approved` only.
2. **Product behavior second:** the proposed `Modular_PRD` and `FN-GATES` edits distinguish
   demonstration evidence from an authoritative transition and carry the negative criteria above.
3. **Technical/UI representation third:** the proposed transition-enforcement and Chief Editor UX
   specs define how the demo is visibly labeled and prevented from changing canonical state. They
   must reuse the eventual governed evidence model rather than invent a field in this handoff.
4. **Publication boundary fourth:** the publication Fn_Spec remains unchanged in ownership; it only
   consumes an authenticated `Approved` state under its existing T7/T10/T11 rules.
5. **Independent review last:** Lane B verifies the Draft 11 text. Only then may the Judge consider
   `AUTH-DOC`; implementation remains separately gated by `AUTH-F1`/`AUTH-F2`/`AUTH-ROUTE`.

### Judge response — concise

| Decision | Tier | Status if selected | Follow-up phase |
|---|---|---|---|
| **Approve** | Pre-authentication T6 policy | **Option A:** demo-only evidence; no authoritative transition or publication effect | Lane A Draft 11, then Lane B independent review |
| **Approve-with-conditions** | Pre-authentication T6 policy | **Option B:** disable T6 until authentication; accept incomplete open-demo workflow | Lane A Draft 11, then Lane B independent review |
| **Reject** | Pre-authentication T6 policy | **Option C:** never allow `self_asserted` operative approval | Preserve as a negative requirement in Draft 11 |
| **Defer** | Implementation and route activation | No option authorizes code, S2 or a lane transition | After `AUTH-DOC` is applied and independently Verified |

## Judge clarification — editorial flow and route-gated GRC assurance (2026-09-03)

**Judge ruling received.** This corrects the prior decision packet's assumption that every article
has a universal human-final-judgment T6. The earlier packet remains historical evidence; the model
below is the current target for Draft 11.

### Normalized routing rule

| Route family | GRC is route/stage `A`? | Editorial flow | GRC-assurance flow `T6` |
|---|:---:|---|:---:|
| `ROUTE-PROD-1` | No | T1 → T2 → T3 → T4 → T5 | Not required |
| `ROUTE-PROD-2` | No | T1 → T2 → T3 → T4 → T5 | Not required |
| `ROUTE-PROD-3` | No | T1 → T2 → T3 → T4 → T5 | Not required |
| `ROUTE-FALLOUT-1` | No | T1 → T2 → T3 → T4 → T5 | Not required |
| `ROUTE-FALLOUT-2` | No | T1 → T2 → T3 → T4 → T5 | Not required |
| `ROUTE-FALLOUT-3` | **Yes — external GRC** | T1 → T2 → T3 → T4 → T5 | **Required after T5** |
| `ROUTE-GRC` | **Yes — external GRC** | T1 → T2 → T3 → T4 → T5 | **Required after T5** |

### Ontology correction

1. **Editorial flow is universal:** every article completes T1–T5. Its route-specific accountable
   role is resolved from the Sheet 1 RACI; external GRC is not `A` on the five non-GRC-accountable
   route families above.
2. **Assurance flow is conditional:** only articles on `ROUTE-FALLOUT-3` or `ROUTE-GRC` enter T6,
   because external GRC is `A` for those route/stage decisions.
3. **T5 is editorial, not assurance:** Draft 10's universal `T5-ASSURANCE-PREPARATION` premise must
   not remain as a required three-act completion unit on every route. Any evidence prepared for GRC
   belongs to the conditional assurance branch, not the universal editorial gate.
4. **External accountability stays external:** the Chief Editor, a virtual agent, an
   `executor_principal_key` or an authenticated recorder cannot substitute for external GRC's `A`.
   Authentication proves who recorded/submitted evidence; it does not prove the institution
   accepted it.
5. **IIA, OD4 and GRC remain different:** this T6 is the route-triggered GRC-assurance workflow. It
   is not IIA Line 3, not OD4 Proposer/Critics/Judge, and not a generic “assurance” stage for every
   article.

### Effect on the pre-authentication T6 question

The question now applies only to `ROUTE-FALLOUT-3` and `ROUTE-GRC`:

- **Recommended before authentication:** the UI may demonstrate preparation/submission of the GRC
  assurance packet, but the record is visibly `self_asserted`/demo-only and cannot complete T6,
  claim external GRC acceptance, or unlock downstream delivery/publication.
- **After authentication:** an authenticated Chief Editor may record or submit the internal action,
  but T6 still completes only when the governed external GRC acceptance evidence exists.
- **Always reject:** treating the Chief Editor's authentication, an agent badge, or a local approval
  as external GRC acceptance.

One drafting detail remains for Lane A to make explicit from the RACI source: the responsible
internal executor for the GRC packet on each of the two affected routes. That `R` prepares or records
the evidence; it never becomes the external `A`.

### Guaranteed failures if Draft 10 is only patched superficially

- Leaving Assurance Preparation inside universal T5 sends all seven route families through a GRC
  control that the RACI assigns to only two.
- Leaving T6 as the Chief Editor's universal final editorial judgment makes external GRC `A` either
  redundant or silently replaced by the internal user.
- Allowing a non-GRC route to require T6 blocks ordinary editorial completion on an authority that
  has no accountability assignment there.
- Allowing a GRC-accountable route to bypass T6 permits delivery without the accountable external
  institution's evidence.
- Treating authenticated recording as institutional acceptance proves the recorder, not the
  external decision.

### Draft 11 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `FLOW-EDITORIAL-01` | An article belongs to any of the seven routes | Its workflow is initialized | T1–T5 are required exactly once as the universal editorial flow |
| `FLOW-GRC-01` | Route is `ROUTE-PROD-1/2/3` or `ROUTE-FALLOUT-1/2` | T5 completes | T6 is `not_applicable`; no GRC-accountability wait is created |
| `FLOW-GRC-02` | Route is `ROUTE-FALLOUT-3` or `ROUTE-GRC` | T5 completes | T6 becomes required and downstream delivery remains held |
| `FLOW-GRC-03` | T6 is required but only internal preparation, a self-asserted action or a Chief Editor approval exists | T6 completion is evaluated | Refused; none substitutes for external GRC acceptance evidence |
| `FLOW-GRC-04` | T6 is required and valid external GRC acceptance evidence is recorded with provenance | T6 completion is evaluated | T6 may complete; the evidence remains append-only and attributable to the external authority and the internal recorder separately |
| `FLOW-GRC-05` | A non-GRC route completes T5 | Publication/delivery eligibility is evaluated | Existing editorial/publication rules apply without manufacturing a T6 record |

### Parent-first correction plan

1. Rewrite proposed `D-182`'s parent flow: universal editorial T1–T5, conditional T6 only for the
   two GRC-accountable routes; remove universal T5 Assurance Preparation.
2. Resolve the RACI-derived internal `R` for each affected T6 route while preserving external GRC
   as the sole route/stage `A`.
3. Redraft the route-operation crosswalk and Fn_Spec behavior before revising acceptance criteria;
   cardinality and `not_applicable` follow from the route matrix above.
4. Redraft the pre-authentication policy around **recording/submission versus external acceptance**,
   not around a universal Chief Editor approval.
5. Propagate only after the corrected Draft 11 passes independent review and the Judge separately
   grants `AUTH-DOC`; implementation remains separately authorized.

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Business workflow / RACI routing | T1–T5 universal; T6 required only for `ROUTE-FALLOUT-3` and `ROUTE-GRC` | Lane A Draft 11, then independent review |
| **Approve** | External accountability | GRC remains external `A`; internal identities never substitute for its acceptance | Lane A Draft 11, then independent review |
| **Reject** | Draft 10 parent model | Universal T5 Assurance Preparation and universal Chief-Editor T6 are superseded by this clarification | Reconstruct Draft 11 parent-first |
| **Defer** | Exact internal T6 `R` mapping | Must be copied from the Sheet 1 RACI for each affected route, not inferred | Lane A Draft 11 evidence table |
| **Defer** | Implementation, `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE` and lane transition | This ruling changes the plan only; `D-171` remains binding | After corrected `AUTH-DOC` is applied and independently Verified |

## Judge clarification — T5/T6 publication-workspace layering (2026-09-03)

**Judge ruling received.** This refines the preceding route-gated clarification. The earlier phrase
“T5 is editorial, not assurance” is narrowed: **T5 contains assurance preparation, but no human
assurance judgment.** T6 contains the human assurance judgment. Preparation, judgment, external
accountability and Delivery are separate acts.

### Current target flow

```text
T1–T4 editorial preparation
        ↓
T5 evidence workstreams
  ├─ Editorial Review: one route-selected virtual reviewer
  └─ Assurance Preparation: Desk Editor + Chief Journalist in parallel
        ↓
Combined judgment packet
        ↓
T5 publication workspace: human Chief Editor EDITORIAL judgment
  └─ Assurance section is view-only
        ↓
Route decision
  ├─ GRC is not A: assurance judgment not applicable
  └─ GRC is A: T6 required
        ↓
T6 publication workspace: human Chief Editor ASSURANCE judgment
        ↓
Delivery: POC/public explainable content plus report
```

### Layer contract

| Layer | Who acts | What it does | What it must not claim |
|---|---|---|---|
| T5 Editorial Review | One route-selected virtual reviewer | Produces the route-specific editorial review brief | Final human editorial judgment |
| T5 Assurance Preparation | `ROLE-DESK-EDITOR` and `ROLE-CHIEF-JOURNALIST` in parallel | Produces two separately attributable assurance-preparation briefs for the combined packet | Human assurance judgment, external GRC acceptance or IIA Line 3 assurance |
| T5 Chief Editor UI | Natural-person Chief Editor | Makes the final **editorial** judgment in the publication workspace | Assurance approval; the assurance section is view-only here |
| T6 Chief Editor UI | Natural-person Chief Editor, only where the route requires T6 | Makes the internal **assurance** judgment using the sealed packet | Acting as external GRC `A` or directly publishing content |
| External GRC record | External accountable institution on `ROUTE-FALLOUT-3`/`ROUTE-GRC` | Supplies the external acceptance/mandate provenance required by the route | Being replaced by the Chief Editor's internal judgment or authentication |
| Delivery | System/manual publication mechanisms | Produces POC/public explainable content with its report and executes existing target outcomes | Editing either judgment or treating T6 itself as publication |

### Route application

- All seven routes execute both T5 preparation workstreams and expose one combined packet to the
  Chief Editor.
- `ROUTE-PROD-1/2/3` and `ROUTE-FALLOUT-1/2`: the Chief Editor makes the T5 editorial judgment;
  the assurance section remains view-only and T6 assurance judgment is `not_applicable`.
- `ROUTE-FALLOUT-3` and `ROUTE-GRC`: after the T5 editorial judgment, the T6 assurance control is
  enabled. Delivery remains held until the required internal assurance judgment and the separately
  attributable external GRC acceptance/mandate evidence both exist.

### Publication, amendment and retraction boundary

“Publication section” names the Chief Editor's workspace location; it does not mean that T5 or T6
publishes. Delivery continues to use the governed publication mechanisms. The MVP assurance view
may display amendment/retraction evidence and outcomes, but it does not collapse those operations
into T6. A retraction notice remains a new governed article/publication record under `FR-13`; an
amendment follows its governed correction path. Neither silently edits the original report or T6
judgment.

### One remaining state-machine decision for Draft 11

The current state model fixes T5 as `Drafted → Reviewed` and T6 as `Reviewed → Approved`. The Judge
has now ruled that non-GRC routes require no T6 **assurance judgment**, but those routes still need a
defined path from `Reviewed` to `Approved`. Lane A must present, not infer, one of these:

| Option | State behavior | Trade-off | Lane B recommendation |
|---|---|---|---|
| **S-A — retain the state model** | T5 human editorial judgment produces `Reviewed`. On a non-GRC route, the system records assurance as `not_applicable` and performs the existing `Reviewed → Approved` finalization without showing a T6 assurance-judgment UI. On a GRC route, that transition waits for the human T6 assurance judgment plus external evidence | Preserves the ten-state model and makes non-applicability explicit, but the transition event must not be described as a human assurance judgment on non-GRC routes | **Recommend** |
| **S-B — make T5 route-dependent** | T5 moves non-GRC routes directly to `Approved`, while GRC routes stop at `Reviewed` for T6 | Matches the visible UI literally, but changes T5's fixed state pair and creates route-dependent transition semantics across existing specs/tests | Reject unless the state model is deliberately redesigned |

### Guaranteed failures if these layers collapse

- Treating either virtual brief as the Chief Editor's judgment lets preparation approve itself.
- Letting the T5 assurance panel accept edits creates a second hidden assurance decision before T6.
- Running a human T6 assurance judgment on every route contradicts the route-level GRC `A` matrix.
- Omitting a non-GRC `Reviewed → Approved` rule leaves five route families unable to reach Delivery.
- Calling T6 “publication” bypasses T7/T10/T11 and their publication-target evidence.
- Calling Chief Editor T6 judgment “GRC acceptance” moves external accountability inside the app.
- Treating Retraction/Amend as a T6 state mutation destroys the append-only correction model.

### Draft 11 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `UX-T5-01` | Both T5 workstreams have sealed their required briefs | The Chief Editor opens the publication workspace | Editorial evidence is actionable for the T5 judgment; assurance evidence is visible but read-only |
| `UX-T5-02` | The Chief Editor completes the T5 editorial judgment | The record is appended | It is labeled editorial, cites the combined packet, and cannot satisfy T6 or external GRC acceptance |
| `UX-T6-01` | Route is one of the five non-GRC-accountable routes | The article completes T5 | No human T6 assurance UI is required; the selected state option handles approval without inventing assurance |
| `UX-T6-02` | Route is `ROUTE-FALLOUT-3` or `ROUTE-GRC` | T5 editorial judgment completes | T6 assurance UI becomes actionable; Delivery stays held |
| `UX-T6-03` | T6 is required | The Chief Editor reviews the packet | The assurance section permits a distinct human assurance judgment without changing the sealed T5 briefs |
| `UX-T6-04` | Internal T6 judgment exists but external GRC evidence is absent | Delivery is attempted | Refused; internal judgment never substitutes for external `A` |
| `DELIVERY-01` | All route-required editorial, assurance and external evidence exists | Delivery begins | Delivery consumes immutable judgments and produces the POC/public explainable content plus report under existing publication rules |
| `CORRECTION-01` | An amendment or retraction is required after Delivery | The correction is initiated | A governed correction/retraction record is created; original judgments and reports remain immutable |

### Parent-first correction plan

1. Draft 11 first replaces the conflicting parent clauses with the flow and layer contract above.
2. The Judge selects state option S-A or S-B; Lane A may not infer it from the UI diagram.
3. Only then redraft T5/T6 acceptance criteria, route crosswalk cardinality and UI states.
4. Keep external GRC evidence and Delivery as separate downstream prerequisites.
5. Independently review Draft 11 before `AUTH-DOC`; implementation and route activation remain
   separately gated.

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | T5 Product/UI behavior | Two virtual preparation workstreams feed one human Chief Editor editorial judgment; assurance view is read-only | Lane A Draft 11 |
| **Approve** | T6 Product/UI behavior | Human Chief Editor assurance judgment is distinct and route-gated; external GRC `A` remains separate | Lane A Draft 11 |
| **Approve** | Delivery/correction boundary | Delivery consumes immutable judgments; Retraction/Amend remain governed downstream records | Lane A Draft 11 |
| **Approve-with-conditions** | State transition model | Select S-A to preserve fixed states while recording non-GRC assurance as `not_applicable` | Judge selection, then Draft 11 |
| **Reject** | Conflated model | T5/T6 as publication actions, T5 editable assurance judgment, or Chief Editor as external GRC acceptance | Remove from Draft 11 |
| **Defer** | Implementation and route activation | `D-171` remains binding | After corrected `AUTH-DOC` is applied and independently Verified |

## Judge clarification — editorial approval state and assurance-review status (2026-09-03)

**Judge ruling received.** This closes the state-machine choice left open in the preceding section
for the five editorial-only routes. It supersedes both proposed options S-A and S-B: the human Chief
Editor makes the editorial approval decision in the T5 publication workspace, while the assurance
analysis remains a reviewed input and does not acquire an approval state.

### Normalized state axes

| Axis | T5 result | Chief Editor action | Result |
|---|---|---|---|
| Article editorial workflow (`workflow_state`) | Article reaches `Reviewed` after the required T5 evidence is sealed | Human Chief Editor approves the editorial decision in the publication workspace | Article moves `Reviewed → Approved`, opening the governed publication flow |
| Assurance status | Parallel Desk Editor and Chief Journalist analysis reaches `reviewed` | No T6 action occurs on an editorial-only route | Remains `reviewed`; it is neither `not_applicable` nor `approved` |
| Publication-target status | No publication has occurred | Editorial approval only enables the publication controls | Unchanged until T7/T10/T11 records the actual target outcome |
| Newsworthiness-trigger evidence | The reviewed assurance analysis contains a newsworthiness ranking | A governed trigger rule accepts the ranking for reuse | A new linked editorial-work candidate may start at T1; the source article and its evidence remain unchanged |

“Publication workspace” is a UI location. `Approved` is the article's editorial `workflow_state`;
it must not be added to, or confused with, the status of an individual publication target.

### Editorial-only route flow

```text
T1–T4 editorial preparation
        ↓
T5 virtual-node evidence and parallel assurance analysis
        ↓
article workflow = Reviewed
assurance status = reviewed
        ↓
human Chief Editor editorial judgment in the publication workspace
        ↓
article workflow = Approved
assurance status remains reviewed
        ↓
publication UI enabled
        ↓
T7/T10/T11 records the actual Delivery/publication outcome
```

This route contains no T6 assurance judgment and makes no external-GRC acceptance claim. The prior
route-gated T6 ruling remains unchanged for `ROUTE-FALLOUT-3` and `ROUTE-GRC`; this clarification
only closes the non-GRC/editorial-only branch.

### Direct effect on Draft 11

1. Remove S-A's invented `assurance = not_applicable` result. The T5 parallel analysis exists and
   remains `reviewed`.
2. Remove S-A's system-performed approval and S-B's route-dependent T5 state pair. The natural-person
   Chief Editor performs the editorial `Reviewed → Approved` action after T5 evidence is complete.
3. Do not label that human editorial action T6. Existing documents currently use T6 for the
   `Reviewed → Approved` state transition while the clarified ontology reserves T6 for conditional
   assurance judgment. Draft 11 must assign an unambiguous editorial-approval event/transition
   identity before propagation; one identifier must not mean both acts.
4. Preserve publication as a later operation. Editorial `Approved` enables the publication UI but
   does not set a publication target to `Published`, `Scheduled`, `ManualReady` or any other target
   outcome.
5. Specify newsworthiness reuse as a linked new-work trigger. It must not reopen the current article,
   mutate its sealed evidence or recursively create duplicate work from the same evidence.

### What is still unclear

The business outcome is decided. Draft 11 still has to name the editorial-approval transition/event
that replaces the overloaded use of “T6” on non-GRC routes. The newsworthiness trigger also needs an
owning feature group, an activation rule (automatic threshold or Chief Editor confirmation) and an
idempotency key. Those are specification details, not reasons to reopen this Judge ruling.

### Guaranteed failures if the axes remain conflated

- Reusing T6 for both editorial approval and assurance judgment makes audit evidence unable to say
  which decision occurred.
- Setting assurance to `approved` invents an assurance decision that no person or external authority
  made; setting it to `not_applicable` discards the T5 analysis the Judge requires.
- Adding `Approved` to publication-target status claims a delivery result before T7/T10/T11 runs.
- Letting an agent or the system perform `Reviewed → Approved` removes the natural-person Chief
  Editor from the final editorial decision.
- Reusing a newsworthiness ranking without source linkage and duplicate protection can create an
  unbounded self-triggering loop and multiple work orders for the same evidence.

### Draft 11 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `STATE-EDITORIAL-01` | A non-GRC article has completed T5 and its article workflow is `Reviewed` | The human Chief Editor records the editorial approval in the publication workspace | The article workflow becomes `Approved`; the append-only event identifies the human decision; assurance status remains `reviewed` |
| `STATE-ASSURANCE-01` | A non-GRC article's two parallel T5 assurance-analysis acts are sealed | T5 completion is evaluated | Assurance status is `reviewed`; no T6 assurance judgment or external-GRC acceptance record is created |
| `STATE-PUBLICATION-01` | The article workflow becomes `Approved` | The publication workspace is evaluated | Publication controls may open, but no publication-target outcome changes until its governed operation succeeds |
| `STATE-GRC-01` | Route is `ROUTE-FALLOUT-3` or `ROUTE-GRC` | T5 editorial approval completes | The previously ruled conditional T6 assurance branch remains required and Delivery remains held by its governed evidence rules |
| `TRIGGER-NEWS-01` | Reviewed assurance analysis contains a qualifying newsworthiness ranking | The governed trigger rule accepts it | At most one new editorial-work candidate is created at T1 with immutable provenance to the source evidence |
| `TRIGGER-NEWS-02` | The same source evidence and trigger rule are evaluated again | Candidate creation is attempted | No duplicate candidate is created and the source article's states and evidence remain unchanged |

### Parent-first correction plan

1. Record the four independent state axes and reserve T6 for route-gated assurance judgment.
2. Name the human editorial-approval transition/event and propagate its `Reviewed → Approved`
   contract before changing UI wording.
3. Update T5/T6 functional criteria and the route crosswalk from that parent decision.
4. Update the publication workspace so editorial approval is actionable, assurance is read-only on
   editorial-only routes, and publication-target outcomes remain separate.
5. Add the newsworthiness-trigger behavior only in its owning feature group, including provenance,
   activation and idempotency rules.
6. Independently review the corrected Draft 11 before `AUTH-DOC`; implementation remains separately
   gated.

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Product workflow / state model | Human Chief Editor editorial judgment moves a non-GRC article `Reviewed → Approved` in the publication workspace | Lane A Draft 11 |
| **Approve** | Assurance behavior | Non-GRC assurance analysis remains `reviewed` from T5; no T6 assurance judgment occurs | Lane A Draft 11 |
| **Approve-with-conditions** | Newsworthiness trigger | Reviewed assurance ranking may seed one new linked T1 candidate without changing the source record | Owning feature-group specification must define activation, provenance and idempotency before `AUTH-DOC` |
| **Reject** | State vocabulary | `Approved` as a publication-target status, assurance approval on editorial-only routes, or one T6 identifier for both editorial and assurance decisions | Remove during Lane A Draft 11 |
| **Defer** | Implementation and route activation | This ruling authorizes planning only; `D-171` remains binding | After corrected `AUTH-DOC` is applied and independently Verified |

## Judge clarification — POC-first Chief Editor UI scope (2026-09-03)

**Judge ruling received.** To stop assurance-interface drafting from delaying the main editorial
feature, the current UI/UX scope is narrowed to the Chief Editor's T5 editorial decision and the
POC output. Detailed T6 assurance UI/UX becomes a separate backlog feature.

This is a delivery-sequencing decision, not removal of the assurance control. The route rules and
the distinction between T5 editorial judgment and conditional T6 assurance judgment remain binding.

### Current POC UI scope — editorial flow

The Chief Editor UI must provide one short, usable path:

1. Show the main trigger details and the sealed T5 editorial packet.
2. Show the publication section with a `Publication status` field.
3. Allow the natural-person Chief Editor to record the editorial decision that changes the article
   workflow from `Reviewed` to `Approved`.
4. Enable the governed POC/publication action after editorial approval and any applicable route
   controls.
5. Show a URL to the downloadable **Public Explainable Content with report** once that artifact
   exists.

For this UI, `Publication status: Reviewed/Approved` is a human-facing projection of the article's
editorial `workflow_state`. It is not the status of an individual publication target. The output URL
is also not the source-article URL: it resolves to the generated, downloadable POC/report artifact
and must retain provenance to the article and decision record.

### Current POC UI scope — assurance visibility

The publication section shows only a read-only `Assurance status` field. In the current editorial
flow, `Reviewed` means the parallel T5 assurance analysis has been completed and sealed. It does not
mean that a human T6 assurance judgment or external GRC acceptance has occurred.

The following assurance UI/UX is moved to one separate backlog feature:

- detailed assurance evidence and brief views beyond the status summary;
- the Chief Editor's T6 assurance-decision controls;
- external GRC acceptance/mandate evidence capture and provenance;
- assurance-specific refusal, amendment and retraction interactions; and
- the complete assurance audit view presented with the publication record.

On the five non-GRC routes, no T6 action is required and the editorial POC flow can proceed under
the clarified state rules. On `ROUTE-FALLOUT-3` and `ROUTE-GRC`, backlogging the T6 interface must
not create a bypass: the affected route remains held before Delivery until the separately governed
assurance feature and its required external evidence are available.

### What is unclear versus decided

The feature boundary is decided. Lane A still has to define the exact UI source mapping for the
human-facing `Publication status` so it cannot write to the publication-target status field, and the
artifact contract for the downloadable URL must name its owner, availability condition and failure
state. Those are Draft 11 specification tasks, not further Judge questions.

### Guaranteed failures if the scope cut is implemented loosely

- Binding `Publication status: Approved` to a publication-target record would claim publication
  before a delivery operation succeeds.
- Showing `Assurance status: Reviewed` without defining it as T5 preparation would imply that T6
  assurance or external GRC acceptance has been completed.
- Hiding the deferred assurance interface while allowing GRC-accountable routes to deliver would
  turn a backlog choice into a control bypass.
- Using the trigger/source URL as the POC download URL would send the Chief Editor to the input
  instead of the generated explainable artifact.
- Exposing a URL before the report is complete, or without article/decision provenance, would make
  the downloadable evidence unreliable and unauditable.
- Continuing to design the complete T6 experience inside the editorial POC feature would preserve
  the drafting bottleneck this ruling is intended to remove.

### Draft 11 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `UX-POC-01` | A Chief Editor opens a T5 article | The editorial decision view loads | The main trigger details, sealed T5 packet and publication section are visible without requiring the deferred T6 interface |
| `UX-POC-02` | Article workflow is `Reviewed` | The human Chief Editor approves the editorial decision | The UI shows `Publication status: Approved`, backed by article `workflow_state`; no publication-target outcome is written |
| `UX-POC-03` | The Public Explainable Content with report has been generated successfully | The publication section refreshes | One clearly labeled downloadable URL is shown and resolves to the governed artifact with article and decision provenance |
| `UX-POC-04` | The report does not yet exist or generation failed | The publication section loads | No successful download is implied; the UI shows the governed pending or failure condition |
| `UX-ASSURANCE-01` | T5 parallel assurance analysis is sealed | The publication section loads | A read-only `Assurance status: Reviewed` is shown and explicitly means T5 analysis only |
| `UX-ASSURANCE-02` | Route is `ROUTE-FALLOUT-3` or `ROUTE-GRC` and the deferred T6 capability is unavailable or incomplete | Delivery is attempted | Delivery is refused; no local editorial approval or T5 assurance status substitutes for T6 and external GRC evidence |
| `BACKLOG-ASSURANCE-01` | Draft 11 records the POC scope | Assurance UI/UX work is planned | One separately owned backlog feature contains the deferred assurance behavior and dependencies without duplicating the editorial POC criteria |

### Parent-first correction plan

1. Record the POC scope boundary: editorial T5 UI now; detailed assurance/T6 UI later.
2. Define the `Publication status` projection and keep it separate from publication-target state.
3. Specify the Chief Editor editorial action and its append-only `Reviewed → Approved` evidence.
4. Specify the downloadable Public Explainable Content-with-report artifact and URL behavior.
5. Create one assurance UI/UX backlog feature, preserving the GRC-route Delivery hold.
6. Remove detailed assurance UI work from the current POC acceptance set, then independently review
   Draft 11 before `AUTH-DOC`.

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Product UI / current POC | Chief Editor T5 editorial UI includes trigger details, publication status and the editorial decision | Lane A Draft 11 |
| **Approve-with-conditions** | POC/report artifact | Show one downloadable Public Explainable Content-with-report URL after successful generation with provenance | Owning Fn_Spec and artifact contract before `AUTH-DOC` |
| **Approve** | Assurance UI sequencing | Current UI shows only read-only assurance status; detailed T6 assurance UI is one separate backlog feature | Lane A Draft 11 and backlog registration |
| **Reject** | GRC route behavior | Deferral of UI as permission to bypass T6 or external GRC evidence | Preserve the route hold in Draft 11 |
| **Reject** | State/data mapping | Writing editorial `Approved` into a publication-target status or treating assurance `Reviewed` as T6 approval | Correct field ownership in Draft 11 |
| **Defer** | Detailed assurance UI/UX and implementation | Separate feature; no build authorization is granted by this ruling | After editorial POC scope is approved and the assurance feature is independently specified |

## Judge clarification — Option A is an operational POC, not a non-operative mock (2026-09-03)

**Judge ruling received: Option A is approved with corrected semantics.** The earlier
pre-authentication packet conflated lack of authentication with lack of operation. This product is a
zero-to-one business: the demo is the working operational flow used first as an internal POC/MVP for
the Chief Editor and later as a client-facing POC. It is not a disconnected preview and it must not
stop before its approved, in-scope job is complete.

The old Option A wording remains historical but is superseded where it says a pre-authentication
action is “non-operative,” cannot update canonical POC state, or must leave the article at
`Reviewed`. Those claims would reproduce the empty-demo failure forbidden by the project's binding
demo-first rule.

### Normalized boundaries

| Boundary | What the POC must do | What the POC must not claim |
|---|---|---|
| Functional operation | Execute real forms, decisions, state changes, evidence writes, reloads and artifact generation against POC data | That a screen-only interaction or unpersisted preview is an operational workflow |
| Editorial authority | Let the natural-person Chief Editor complete the in-scope editorial decision and persist `Reviewed → Approved` | That `self_asserted` proves an authenticated production identity |
| Identity assurance | Record the pre-authentication actor as `self_asserted` and make that limitation visible in audit evidence | That a role label, principal key, agent badge or browser session is authentication |
| Publication evidence | Produce the downloadable Public Explainable Content with report and use the governed mock publication outcome where live credentials are absent | That `MockPublished` satisfies `Published` or proves a live external-target result |
| External GRC authority | Preserve external GRC as the accountable institution and keep its evidence distinct from the Chief Editor's internal action | That an operational POC event is real external GRC acceptance, licensing or mandate evidence |
| Development authorization | Keep `AUTH-DOC`, `AUTH-F1`, `AUTH-F2` and `AUTH-ROUTE` under the existing Judge/phase process | That any runtime event—demo or production—can grant a development authorization |

“Operational” and “authoritative” therefore answer different questions. The POC is operational
inside its declared POC data and execution boundary. Its `self_asserted`, mock and simulated evidence
remains non-production evidence and cannot be presented as authenticated identity, live publication
or an external institution's act.

### Product-maturity sequence

1. **Internal POC/MVP:** the Chief Editor can perform the complete approved editorial flow, persist
   the decision and download the explainable-content report using POC/seed data.
2. **Client POC:** clients can experience that same operational flow with visibly bounded POC data
   and evidence; this is product validation, not a production-authority claim.
3. **Production:** authentication, real-user/data controls, live publication credentials and any
   required external GRC integration provide the additional evidence needed for production claims.

The detailed assurance/T6 UI remains the separate backlog feature established by the preceding
ruling. Its deferral narrows the **current** operational POC to the editorial feature; it does not
make that feature non-operative. When the assurance feature is later demonstrated, its internal POC
acts may also execute and persist, but any simulated institutional response must remain distinct from
real external GRC acceptance.

### Direct corrections required in Draft 11

1. Replace “demo-only/non-operative” with **“operational POC; self-asserted and non-production.”**
2. Replace `T6-PREAUTH-01`'s “authoritative article state remains Reviewed” rule. In the current
   editorial POC, the human Chief Editor's in-scope action persists the article's editorial
   `Reviewed → Approved` transition.
3. Remove the claim that a runtime T6 or editorial event can satisfy or fail `AUTH-ROUTE`.
   `AUTH-ROUTE` is a development-governance authorization, not product workflow state.
4. Preserve `identity_assurance = self_asserted` on pre-authentication evidence. It describes the
   strength of actor proof; it must not disable the approved POC workflow.
5. Preserve the existing publication boundary: the report URL is a real downloadable POC artifact;
   `MockPublished` remains distinct from a live-target `Published` result.
6. Preserve the GRC boundary: neither editorial approval nor a future self-asserted internal T6 POC
   act constitutes external GRC acceptance.

### What remains unclear

No further Judge choice blocks the current editorial POC plan. The later client-POC and assurance
features still need to specify whether they use only mock targets or any sandbox/live integration,
and how simulated external-GRC responses are labeled and stored. Those questions belong to their
own feature specifications and must not delay Draft 11's editorial POC correction.

### Guaranteed failures if “demo” remains conflated with “non-operative”

- Leaving canonical POC state at `Reviewed` after the Chief Editor approves produces a demonstration
  that cannot complete the product's main job.
- Allowing buttons to show success without persisted state and reload evidence creates a front-end
  mock, contrary to the binding working-app rule.
- Treating `self_asserted` as either “no action allowed” or “fully authenticated” collapses identity
  strength into workflow permission; one blocks the POC and the other fabricates trust.
- Treating the downloadable report or `MockPublished` event as live publication creates false
  external evidence.
- Treating a simulated GRC response as institutional acceptance transfers accountability from the
  external organization into the app.
- Letting product runtime evidence satisfy `AUTH-ROUTE` mixes application state with development
  governance and makes lane authorization data-dependent.

### Draft 11 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `POC-OPS-01` | The open POC has approved seed/POC data and no login wall | The Chief Editor completes the in-scope editorial flow | Every action persists, survives reload and is visible in its append-only evidence trail |
| `POC-OPS-02` | Article editorial workflow is `Reviewed` | The natural-person Chief Editor records editorial approval | The canonical POC article workflow becomes `Approved`; the event is visibly `self_asserted` until authentication exists |
| `POC-OPS-03` | The POC/report generation succeeds | The Chief Editor opens the publication section | A working URL downloads the Public Explainable Content with report and retains article/decision provenance |
| `POC-ID-01` | A pre-authentication human action is stored | Audit evidence is viewed | It identifies the asserted principal and `self_asserted` assurance without describing the actor as authenticated |
| `POC-PUB-01` | No live publication credentials or successful live-target result exists | Publication outcome is evaluated | The outcome may be `MockPublished` but never `Published`; the mock outcome does not satisfy live publication criteria |
| `POC-GRC-01` | An editorial POC event or future internal T6 POC event exists | External GRC evidence is evaluated | The event cannot satisfy external acceptance; real and simulated institutional evidence remain distinguishable |
| `POC-GOV-01` | Any product workflow event exists | A development authorization is evaluated | It has no effect on `AUTH-DOC`, `AUTH-F1`, `AUTH-F2` or `AUTH-ROUTE`; only the governed Judge process changes those states |

### Parent-first correction plan

1. Correct proposed `D-182`: Option A means operational POC with self-asserted/non-production
   evidence, not non-operative demonstration evidence.
2. Replace the superseded pre-authentication criteria and remove the runtime/`AUTH-ROUTE` category
   error before propagating any child requirement.
3. Align the Product/Fn_Spec criteria with the operational editorial state transition, persistent
   evidence and downloadable POC/report artifact.
4. Align UI language with the three evidence boundaries: editorial approval, assurance status and
   publication-target outcome.
5. Keep the detailed assurance UI as a separately owned backlog feature and carry forward the
   external-GRC non-substitution rule.
6. Independently review Draft 11, then seek `AUTH-DOC`; implementation remains separately gated.

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Product strategy / POC | Option A is the operational zero-to-one product flow, first for the Chief Editor and later for clients | Lane A Draft 11 |
| **Approve** | Editorial Product behavior | A self-asserted Chief Editor action may persist the editorial `Reviewed → Approved` transition inside the POC boundary | Lane A Draft 11 |
| **Approve-with-conditions** | Identity and evidence | Pre-authentication operation remains visibly `self_asserted`; POC/mock evidence cannot be represented as authenticated, live or externally accepted | Product/Fn_Spec acceptance criteria before `AUTH-DOC` |
| **Reject** | Superseded Option A semantics | “Demo-only” as non-operative UI, unchanged canonical POC state or disabled end-to-end workflow | Remove from Draft 11 |
| **Reject** | Governance conflation | Runtime events satisfying `AUTH-ROUTE`, `MockPublished` satisfying `Published`, or internal events satisfying external GRC acceptance | Preserve as negative requirements |
| **Defer** | Detailed assurance UI, client-integration mode and implementation | Separate feature decisions; this ruling approves the plan semantics only | After corrected Draft 11 is independently reviewed and `AUTH-DOC` is granted |

## Judge clarification — `M-MVP` proof first, `M-POC` client proof later (2026-09-03)

**Judge ruling received.** This corrects the maturity-label conflation in the preceding Option A
clarification. The approved statement is:

> **Option A — demo only:** Lane A must not equate “demo” with “non-operational.” This zero-to-one
> product uses the demo as its operational flow: first as the `M-MVP` proof of concept for the Chief
> Editor, and later through `M-POC` as the proof of concept for clients.

The preceding phrases “internal POC/MVP” and “client-facing POC” are superseded. They used “POC”
both as a generic validation purpose and as the established module identifier `M-POC`. Draft 11 must
use the module IDs whenever it means product scope.

### Canonical maturity map

| Term | Meaning in this project | Audience | Scope consequence |
|---|---|---|---|
| Demo | The no-login, seed/POC-data execution condition used to prove that the working product flow operates end to end | Initially the Chief Editor | Does not name a module and does not mean screen-only or non-persistent |
| `M-MVP` | The active editorial pipeline product and current operational proof of concept | Chief Editor | Current implementation-plan scope; real POC-state transitions and evidence within the demo boundary |
| `M-POC` | The later Professional Evidence Review engagement supported by the same editorial engine | Clients/commissioning professionals, with Chief Editor operation | Later exposure with its own governed client-package, engagement and folder-separation requirements; not pulled into current `M-MVP` scope |
| Production | Later operation with the required authentication, real-user/data controls, live integrations and external-authority evidence | Authorized real users and institutions | Neither the `M-MVP` proof nor `M-POC` client proof may claim this state merely because their flows are operational |

“Proof of concept” is therefore a maturity purpose, while `M-POC` is a named module. An operative
instruction must not use bare “POC” when the reader cannot tell which meaning applies.

### One engine, staged proofs

```text
Operational demo condition
          ↓
M-MVP — Chief Editor proves the editorial workflow and its evidence
          ↓
M-POC — clients test the value of an evidence-review engagement
          ↓
Production — additional identity, live-target and external-authority controls
```

`M-POC` does not create a second editorial pipeline. It reuses the `M-MVP` engine and preserves its
existing invariants. Its later client package remains separated from the internal publishable
article. Conversely, an internal downloadable report shown to the Chief Editor during `M-MVP`
validation does not by itself open the `M-POC` engagement, `/request-brief` path, client folder,
commercial boundary or client-facing delivery scope.

### Direct corrections required in Draft 11

1. Replace unqualified “operational POC” in the current-feature description with **“operational
   `M-MVP` proof of concept for the Chief Editor.”**
2. Replace “client-facing POC” with **“later `M-POC` proof of concept for clients.”**
3. Keep Option A's `demo-only` evidence boundary: the `M-MVP` flow operates and persists, while
   pre-authentication identity remains `self_asserted` and non-production.
4. Scope the current Chief Editor UI, editorial transition and internal downloadable artifact to
   `M-MVP`. Do not import `M-POC` engagement fields, client delivery, folder creation, payment trace
   or `/request-brief` behavior into the current feature.
5. Preserve `M-POC`'s one-engine rule: later client proof traverses the unchanged editorial pipeline
   and adds only its governed exposure/package behavior.
6. In every acceptance criterion, expand generic “proof of concept” and use `M-MVP` or `M-POC` when
   a module boundary, output or audience is meant.

### What is unclear versus decided

The sequence and audiences are decided. The earlier Chief Editor UI clarification called its
downloadable item “Public Explainable Content with report,” while the governed `M-POC` module owns
the later client-facing publicly-expandable/explainable package and `M-MVP` owns the internal
publishable article. Draft 11 must name the current `M-MVP` artifact and its audience precisely,
without silently moving the `M-POC` client package into `M-MVP`. This is an artifact-ownership
clarification for Lane A, not a reason to reopen the maturity sequence.

### Guaranteed failures if the labels remain loose

- Calling the current feature simply “POC” makes `/editorial` and `M-MVP` requirements
  indistinguishable from `/request-brief` and `M-POC` requirements.
- Pulling `M-POC` client-package, account, payment or folder behavior into the current `M-MVP`
  creates unauthorized scope and defeats the MVP-first order.
- Building a second client pipeline instead of reusing `M-MVP` violates the one-engine invariant
  and makes the two proofs incomparable.
- Treating the Chief Editor's internal proof as client proof claims market evidence before clients
  have received or evaluated the `M-POC` package.
- Exposing the internal publishable article as the client deliverable breaks `M-POC`'s core folder-
  separation rule.
- Using “demo” to mean non-persistent still fails the current `M-MVP`, regardless of which maturity
  label is correct.

### Draft 11 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `MATURITY-TERM-01` | An operative Draft 11 instruction refers to proof-of-concept work | Its scope is read | It names `M-MVP` or `M-POC`; bare “POC” is used only when explicitly defined as the generic maturity purpose |
| `MATURITY-MVP-01` | The Chief Editor uses the demo condition | The current editorial proof is executed | The `M-MVP` flow operates, persists and produces its governed internal evidence without requiring `M-POC` behavior |
| `MATURITY-MVP-02` | Current UI/output scope is enumerated | The write set is reviewed | No `M-POC` engagement field, client account/delivery, payment behavior, client folder or `/request-brief` behavior has been pulled forward |
| `MATURITY-POC-01` | A later client proof is authorized | An `M-POC` engagement begins | It enters through its governed boundary and traverses the unchanged `M-MVP` editorial engine rather than a forked pipeline |
| `MATURITY-POC-02` | An `M-POC` engagement completes | Its outputs are inspected | The client explainable package and internal publishable article remain separated under the governed engagement identifier |
| `MATURITY-EVIDENCE-01` | Either proof runs before production controls exist | Its evidence is presented | Operational results remain distinguishable from authenticated identity, live publication and external GRC acceptance |

### Parent-first correction plan

1. Put the maturity map above into proposed `D-182` before redrafting feature or UI rows.
2. Correct the current feature everywhere to `M-MVP`; preserve `M-POC` as the later client proof.
3. Resolve the current downloadable artifact's module owner and audience without importing later
   client-package scope.
4. Propagate the module-qualified language into Product/Fn_Spec and UI acceptance criteria.
5. Negative-sweep Draft 11 for ambiguous bare “POC,” unauthorized `M-POC` scope and any forked
   pipeline.
6. Independently review Draft 11 before `AUTH-DOC`; implementation remains separately gated.

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Product maturity / `M-MVP` | The operational demo is the `M-MVP` proof of concept for the Chief Editor | Lane A Draft 11 |
| **Approve** | Product maturity / `M-POC` | `M-POC` is the later proof of concept for clients using the same editorial engine | Preserve as later-module scope |
| **Approve-with-conditions** | Current downloadable artifact | Keep it internal to `M-MVP` unless its governing owner explicitly places it in `M-POC`; do not infer client exposure from the generic phrase | Artifact ownership resolved in Draft 11 before `AUTH-DOC` |
| **Reject** | Terminology | “Internal POC/MVP,” “client-facing POC,” or unqualified “POC” where a module boundary is intended | Replace with `M-MVP`/`M-POC` in Draft 11 |
| **Reject** | Scope/pipeline | Pulling later `M-POC` behavior into current `M-MVP` or creating a second client editorial pipeline | Preserve module boundary and one-engine invariant |
| **Defer** | `M-POC` client UI and implementation | Later proof stage; this ruling changes planning language only | After `M-MVP` proof and separate `M-POC` authorization |

## Judge clarification — the downloadable report is an `M-MVP` artifact, gating `M-POC` start (2026-09-03)

**Judge ruling received.** This closes the one open item the preceding maturity-model clarification
left unresolved: which module owns the downloadable Public Explainable Content with report.

> Public Explainable Content with report is part of the common engine in `M-MVP`; hence the
> downloadable artifact has to be ready before the start of `M-POC`. Why? This is to validate that
> all the items in "Public Explainable Content with report" are completed up to the Minimum
> Marketable Feature for `M-MVP`.

### Resolved artifact ownership

| Question | Answer |
|---|---|
| Which module owns the downloadable report? | `M-MVP` — it is part of the common editorial engine, not an `M-POC` client-package artifact |
| Who is its audience in the current scope? | The Chief Editor, inside the `M-MVP` proof of concept — not a client |
| When must it exist? | Before `M-POC` begins — its successful generation is a gating checkpoint, not an optional nicety |
| Why does `M-POC` wait on it? | It is the evidence that every `M-MVP` item is complete to the Minimum Marketable Feature (MMF) bar; `M-POC` reuses the same engine and must not start client validation on an engine that hasn't cleared its own MMF |

**Terminology check:** the ruling says "Minimum Markable Feature." Normalizing this to the standard
product-management term **Minimum Marketable Feature (MMF)** — the smallest feature slice that is
complete enough to demonstrate real value to an external audience, as distinct from an MVP's
internal completeness bar. Flagging the substitution here rather than silently assuming it; correct
if "Markable" meant something else.

### Direct corrections required in Draft 11

1. Name the current downloadable artifact **"`M-MVP` Public Explainable Content with report"** —
   never bare "POC report" — matching `MATURITY-TERM-01`'s bare-"POC" prohibition.
2. Add one `M-MVP`-completion gate: `M-POC` engagement start requires the report's successful,
   provenance-linked generation as evidence that `M-MVP` has reached its MMF bar. This is a new
   precondition on the `M-MVP → M-POC` sequence, not a restatement of `UX-POC-03`/`UX-POC-04`
   (which govern the Chief Editor's UI display of the same artifact within `M-MVP`).
3. Do not attach any `M-POC` client-package field (engagement ID, client folder, `/request-brief`
   linkage) to this artifact or its generation record — it remains internal `M-MVP` evidence that
   `M-POC` *reads as a precondition*, never a client-facing deliverable itself.

### What remains unclear

None for artifact ownership — this was the last open item the maturity-model clarification named.
Whether MMF completeness is measured automatically (e.g., all `M-MVP` acceptance criteria green) or
requires an explicit Chief-Editor/Judge sign-off is a Draft 11 specification detail, not a further
Judge question.

### Guaranteed failures if this stays unresolved

- Treating the report as an `M-POC` client artifact would pull client-package/folder-separation
  rules into current `M-MVP` scope, which the preceding ruling already forbids.
- Starting `M-POC` client validation before the report exists would let a later, client-facing proof
  begin on an editorial engine that never demonstrated its own completeness.
- Restating this as a UI display rule (`UX-POC-03`) instead of an `M-MVP → M-POC` sequencing gate
  would lose the "why" — MMF validation — that this ruling exists to establish.

### Draft 11 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `MATURITY-GATE-01` | An `M-POC` engagement is proposed to begin | Its preconditions are evaluated | The `M-MVP` downloadable Public Explainable Content with report must already exist, successfully generated, with article/decision provenance |
| `MATURITY-GATE-02` | The `M-MVP` report does not yet exist or generation failed | `M-POC` start is attempted | Refused; `M-POC` cannot begin on an unproven `M-MVP` engine |
| `MATURITY-GATE-03` | The report and its generation record are inspected | Ownership is evaluated | Both are `M-MVP` artifacts with no `M-POC` engagement, client, folder or `/request-brief` field attached |

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Artifact ownership | The downloadable report is an `M-MVP` common-engine artifact, Chief-Editor-facing only in current scope | Lane A Draft 11 |
| **Approve** | Sequencing gate | `M-POC` start requires the `M-MVP` report to exist as MMF-completion evidence | Lane A Draft 11, new gate criteria |
| **Approve-with-conditions** | Terminology | "Minimum Markable Feature" normalized to "Minimum Marketable Feature (MMF)" pending confirmation | Confirm or correct before Draft 11 propagation |
| **Reject** | Scope leakage | Any `M-POC` client-package field attached to this artifact or its generation record | Keep the artifact strictly internal to `M-MVP` |
| **Defer** | Automatic-vs-manual MMF measurement | Specification detail, not a governance question | Draft 11 |

## Independent review — Draft 10 and the post-Draft-10 Judge clarifications (2026-09-03)

- **Review baseline:** local `2a9ea27`; remote `9efc086`; Draft 10 remains the plan at
  `docs/v1/V1-B071-CORRECTIVE-PLAN.md`
- **Review role:** Lane B, independent of Lane A's Draft 10 and the local report-ownership addition
- **Approval state:** **none** — this review does not approve Draft 10, `AUTH-DOC`, a push,
  implementation or a lane transition
- **Result:** Draft 11 is required. None of `B071-R67`–`R72` is fully closed in the current plan.

### `B071-R67`–`R72` closure audit

| Finding | Current state | Evidence in the current tree | Smallest Draft 11 fix |
|---|---|---|---|
| `B071-R67` — false approval provenance | **Open** | B-071's live Lane A field still says “The Judge approved Draft 10”; the plan remains `DRAFT`, and the current instruction says Judge approval is none. Later direct clarifications are source inputs, not approval of Draft 10 as a complete packet | Correct the live header and Draft 11 metadata to “Draft 10 reviewed and superseded as a draft; Judge clarifications received; plan approval none.” Do not rewrite the historical false claim |
| `B071-R68` — circular pre-`AUTH-DOC` checklist | **Open** | The old “Round 10 — outstanding” checklist still requires governing/derived files to carry overlays, the identity spec to exist, naming conventions to match and tooling tests to exist before the plan reaches the Judge. Those are application/tooling outcomes, not text-only plan-review conditions | Retire that checklist as historical. Keep only a text-review checklist before `AUTH-DOC`; move applied-file and runtime evidence exclusively after authorization. Track the R72 tooling repair separately |
| `B071-R69` — infrastructure rule substituted for Judge policy | **Partially resolved, not closed in Draft 10** | The Judge has now selected Option A and corrected it to “operational `M-MVP`, `self_asserted`, non-production.” Draft 10 still says demo/non-operative, only authenticated T6 can be operative, and runtime evidence can satisfy `AUTH-ROUTE` | Record the direct ruling, remove the superseded non-operative/auth-only behavior, and remove the runtime/`AUTH-ROUTE` category error. A runtime event never grants a development authorization |
| `B071-R70` — T6 conflated with publication | **Open** | Draft 10 still says authenticated T6 closes `Drafted → Reviewed → Published`. Later rulings reserve T6 for conditional GRC-route assurance; editorial `Reviewed → Approved` is a separate human action, and T7/T10/T11 own publication | Replace the parent state flow before editing any child criterion. Give editorial approval its own unambiguous event identity; keep T6 conditional; keep publication-target outcomes downstream |
| `B071-R71` — propagation is not clause-executable | **Open and expanded** | §7 still combines six heterogeneous files into one row without exact paths, anchors, clause treatments or negative searches. It also predates the T5/T6, Option A, UI-scope, maturity and report-gate rulings | Produce one row per exact file/anchor with `replace`, target overlay or historical notice. Add every new owning tier named below; never use a top-level notice to mask live contradictory rows |
| `B071-R72` — Graphify verifier is self-referential | **Open** | `merge7.js` still calls `buildCandidate(g, frag)` before `verify(candidate, frag)`, so `--verify-only` checks values it just overlaid rather than untouched graph state. It still writes `graph.json` directly with `writeFileSync`; no tracked negative-test suite was found. Header comments claiming all R66 defects are fixed exceed the implementation | Add untouched-graph verification, global endpoint/field-ownership audit, atomic temp-write/re-read, and tracked negative tests. Correct the lifecycle comments. Do not use the current verifier as terminal semantic-parity evidence |

### New findings created by the later rulings

| Finding | Gap | Guaranteed failure | Draft fix |
|---|---|---|---|
| `B071-R73` — Draft 10's parent ontology is superseded | Proposed `D-182` still defines universal human T6 and a single three-act T5 join. The later Judge rulings define universal editorial T1–T5, separate editorial/assurance state axes, human editorial approval after T5, and conditional T6 only for `ROUTE-FALLOUT-3`/`ROUTE-GRC` | Every corrected child row would still inherit the wrong parent sequence; non-GRC routes either block on nonexistent assurance or T6 again means two decisions | Rewrite proposed `D-182` first, then regenerate all dependent flow, RACI, state and UI clauses from it |
| `B071-R74` — the approved POC-first UI cut is absent | Draft 10 schedules a complete Chief Editor publication/assurance workspace. It does not limit current scope to trigger details, editorial decision, publication-status projection, read-only assurance status and the downloadable report; nor does it isolate detailed T6 UI as one backlog feature | Assurance design continues delaying the editorial MMF, or a partial screen is mistaken for the complete T6 control | Split current `M-MVP` editorial UI from the separately owned assurance/T6 backlog feature and preserve the GRC-route Delivery hold |
| `B071-R75` — the `M-MVP → M-POC` report gate lacks owning-tier propagation | The local clarification makes the `M-MVP` report a precondition for `M-POC`, but Draft 10 contains no write-set rows for the new `M-MVP` product requirement or the affected `M-POC` requirements/Fn_Spec. Existing `PR-13` already blocks engagement start on ten real-valued boundaries | One tier allows `M-POC` to start while another refuses it; or the new report gate silently replaces the ten existing boundaries | State the rule conjunctively: the governed `PR-13` boundaries **and** the successful provenance-linked `M-MVP` report are required. Give the report an `M-MVP` Product owner/criterion and add target overlays to `M-POC-REQUIREMENTS.md` and `FN-POC-ENGAGEMENT-01-13.md`; identify any Build-Spec sequencing consequence. Inventory is unaffected unless a new repository file is created |
| `B071-R76` — “Markable” was normalized without authority | The Judge wording recorded in the local clarification is “Minimum Markable Feature,” but the same section changes it to “Minimum Marketable Feature (MMF)” and then uses MMF operatively while asking for confirmation | A useful but unapproved industry term becomes a requirement and may change the intended completion test | Preserve the Judge's exact phrase with `definition_pending`; do not abbreviate it to MMF or define its measurement until the Judge confirms “Marketable” or supplies the intended “Markable” definition |

### Parent-first Draft 11 corrective plan

1. **Provenance first (`R67`):** state that Draft 10 is not approved; distinguish direct Judge
   clarifications from approval of the consolidated plan.
2. **Parent ontology (`R69`, `R70`, `R73`):** rewrite proposed `D-182` around universal editorial
   T1–T5, distinct editorial approval, conditional GRC-route T6, operational/self-asserted
   `M-MVP`, and downstream publication.
3. **Current UI scope (`R74`):** specify only the Chief Editor's `M-MVP` editorial flow and internal
   report now; register detailed assurance/T6 UI as one later feature without weakening GRC holds.
4. **Maturity and artifact gate (`R75`, `R76`):** define the internal `M-MVP` report and make it an
   additional `M-POC` start prerequisite beside—not instead of—existing `PR-13`; hold the
   Markable/Marketable term unresolved.
5. **Executable write set (`R71`):** give each exact file and anchor one treatment and a negative
   search. Include `Modular_PRD.md`, `docs/modules/M-POC-REQUIREMENTS.md`,
   `docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md`, the relevant `M-MVP` Fn_Spec, the Chief Editor UX
   spec, and all previously named transition/RACI/crosswalk tiers.
6. **Non-circular review (`R68`):** plan review proves the proposed text only. Applied-state checks
   remain after `AUTH-DOC`. Tooling correctness is a separately authorized Lane A concern.
7. **Graph verifier (`R72`):** specify and later test untouched-state verification, global fragment
   integrity and atomic writes before using it as terminal Graphify evidence.
8. **Evidence order:** commit Draft 11 and its status-only curated fragment, rebuild and re-merge at
   that exact commit, run the full suite, make no further tracked edit, then push and hand back for
   independent review. Only after that review may the Judge consider `AUTH-DOC`.

### Draft 11 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `PLAN-PROVENANCE-01` | Draft 11 is opened | Approval metadata is read | It says plan approval is none and separately enumerates the direct Judge clarifications used as inputs |
| `PLAN-FLOW-01` | Any route's target flow is inspected | T5/T6 meaning is traced | Editorial approval and conditional assurance are different events; T6 is required only on the two GRC-accountable routes; publication remains T7/T10/T11-owned |
| `PLAN-DEMO-01` | The pre-authentication `M-MVP` behavior is inspected | The Chief Editor completes the editorial proof | The flow persists operational POC state with `self_asserted`, non-production identity evidence; no text calls it non-operative or lets it grant `AUTH-ROUTE` |
| `PLAN-UI-01` | Current and deferred UI scope are compared | The plan is reviewed | Current `M-MVP` editorial UI and the later assurance/T6 UI are separately owned with no duplicated criteria |
| `PLAN-MATURITY-01` | `M-POC` start is evaluated | Any existing `PR-13` boundary is unset or the governed `M-MVP` report is absent/failed | Start is refused; the report gate is additive and never replaces the existing boundaries |
| `PLAN-TERM-01` | “Minimum Markable Feature” is encountered | Its meaning has not been confirmed by the Judge | It remains quoted and definition-pending; “Minimum Marketable Feature”/`MMF` is not operative |
| `PLAN-PROPAGATION-01` | The Draft 11 write set is inspected | Any affected file is selected | Its exact path, anchor, clause treatment, owner and negative search are stated; combined catch-all rows fail review |
| `PLAN-REVIEW-01` | The pre-`AUTH-DOC` checklist is executed | An item would require applying §7/§8 | That item is rejected from plan review and placed in the post-authorization applied-state checklist |
| `PLAN-GRAPH-01` | Graph semantic verification runs | The untouched graph contains a stale fragment-owned value or dangling endpoint | Verification fails without mutating the graph; failed writes leave the prior graph byte-intact |

### Independent-review approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Direct Judge clarifications as Draft 11 inputs | Route-gated T6, separate state axes, operational Option A, POC-first UI, `M-MVP → M-POC` maturity order and `M-MVP` report ownership are recorded inputs—not approval of Draft 10 | Lane A Draft 11 |
| **Approve-with-conditions** | `M-MVP` report as an `M-POC` start gate | Direction is coherent only when additive to existing `PR-13` and propagated to both module and Fn_Spec owners | Lane A Draft 11 |
| **Reject** | Draft 10 / `AUTH-DOC` | Draft 10 remains materially superseded and still contains every R67–R72 plan defect in whole or in part | Replace with Draft 11, then independent review |
| **Reject** | R67–R72 closure claim | None is fully closed in the current plan; R69 has a Judge decision but no conforming plan application | Use the closure audit above |
| **Defer** | Markable/Marketable terminology | The substitution is unapproved | Judge confirms the intended term before Draft 11 makes it operative |
| **Defer** | Graphify synchronization | The graph is stale and its verifier remains defective; syncing now would not close R72 | Lane A fixes/tests R72, then rebuilds and re-merges at the final Draft 11 commit |
| **Defer** | Push, `AUTH-DOC`, implementation and lane transition | Local `2a9ea27` is not remote; this review grants no push or build authority | Active Lane A decides the shared push after Draft 11 review packaging |

## Lane A response — Draft 11 produced, supersedes Draft 10

**Correction (applying the Judge's approval-provenance rule retroactively):** the original wording
here said "the Judge approved proceeding directly to Draft 11." The precise statement is **Judge
authorized Lane A to prepare Draft 11 directly, superseding Draft 10**, per the Round 10 closure
audit above — an authorization to prepare a revision, not artifact-level approval of Draft 11 itself.
`docs/v1/V1-B071-CORRECTIVE-PLAN.md` was Draft 11. Round 11 independent review subsequently found it
not yet executable for `AUTH-DOC` (`B071-R67`–`R83`); Draft 12 is pending. Findings `B071-R67`–`R76`
that Draft 11 addressed:

- `R67`: the plan's own header now states approval as none and separates Judge clarifications
  (inputs) from plan approval.
- `R68`: the old circular checklist is retired as historical; only the text-only plan-review
  checklist gates `AUTH-DOC`.
- `R69`: pre-authentication behavior is corrected throughout to operational/`self_asserted`/
  non-production — never non-operative or disabled.
- `R70`/`R73`: the parent flow is rewritten — universal `T5-EDITORIAL-APPROVAL`
  (`workflow_state: Reviewed → Approved`) is a new, distinct event from conditional
  `T6-ASSURANCE-JUDGMENT` (`ROUTE-FALLOUT-3`/`ROUTE-GRC` only); neither reaches `Published`.
- `R71`: the six-file combined propagation row is split into exact file/anchor rows with real line
  numbers (§7).
- `R72`: the Graphify verifier's remaining defects (self-referential comparison, non-atomic write,
  no tracked tests) are stated honestly as not-yet-done, with explicit applied-state checklist items.
- `R74`: §6/§6a record the POC-first UI cut — current `M-MVP` editorial scope, detailed `T6` UI as a
  separate backlog feature, GRC-route hold preserved.
- `R75`: the `M-MVP` report is named as an additive `M-POC`-start gate beside `PR-13`, with exact
  target files (`M-POC-REQUIREMENTS.md`, `FN-POC-ENGAGEMENT-01-13.md`).
- `R76`: the unauthorized "Minimum Marketable Feature (MMF)" substitution is withdrawn; the Judge's
  exact phrase "Minimum Markable Feature" is restored, quoted, `definition_pending`.

Not committed or pushed as part of this response beyond what the working tree already carries.
`AUTH-DOC` remains unapproved; `D-171` remains fully binding. Ready for Lane B's Round 11 independent
plan review.

## Independent review — Draft 11 (Round 11, 2026-09-03)

- **Review baseline:** local `8986ac6`; remote `9efc086`. The local branch is three commits ahead;
  Draft 11 and this review are not shared remote evidence.
- **Review role:** Lane B, independent of Lane A's Draft 11.
- **Approval state:** **none**. Direct Judge clarifications are source inputs, not approval of the
  consolidated plan. This review authorizes no push, `AUTH-DOC`, governed-tier edit, implementation,
  route activation, or lane transition.
- **Result:** **reject Draft 11 for `AUTH-DOC` in its current form**. Its parent direction is usable,
  but the approval provenance, current/deferred feature boundary, T6 dependency order, state
  ownership, and propagation instructions are not yet mutually executable. `B071-R72` also remains
  open exactly as Draft 11 acknowledges.

### Existing-finding closure audit

| Finding | Round 11 status | Evidence and disposition |
|---|---|---|
| `B071-R67` — approval provenance | **Open; recurred** | The plan header correctly says approval is none, but B-071's live Lane A field still says “The Judge approved Draft 10,” the Lane A response says the Judge approved proceeding to Draft 11, and Draft 11's revision history repeats that claim. Replace current-value metadata with “Draft 11 produced from direct clarifications; plan approval none.” Preserve prior wording only as labeled historical defect evidence. |
| `B071-R68` — circular plan review | **Closed in plan text** | The pre-`AUTH-DOC` checklist is now text-only. Remote equality is a shared-evidence condition before verification, not permission to apply §7. Do not turn it into authority to push; push authorization remains a separate lane-governance act. |
| `B071-R69` — operational pre-authentication behavior | **Closed as policy text** | Draft 11 now consistently permits real, persisted, visibly `self_asserted`, non-production actions and keeps runtime events separate from development authorization. Feature sequencing remains open under `B071-R77`. |
| `B071-R70` / `B071-R73` — parent T5/T6 model | **Partially closed** | The two human judgments are now named separately and publication remains downstream. The dependency diagram still makes external GRC evidence appear to hold T6, and §3/checklist still say only T6 is human-only. Correct under `B071-R78`/`R79`. |
| `B071-R71` — clause-executable propagation | **Open** | Exact treatments were added for the six previously combined files, but several other §7 rows still name broad documents/sections without one anchor, treatment, owner, and negative search per affected clause. The new report gate also lacks exact owning requirement/AC identifiers and version-overlay treatment. Correct under `B071-R81`. |
| `B071-R72` — Graphify verifier | **Open; specified, not applied** | `merge7.js` still builds the overlaid candidate before verification and writes `graph.json` directly; no atomic replace/re-read or tracked negative-test suite exists. Its header nevertheless says all R66 defects are fixed. Do not call R72 applied or use this verifier as terminal parity evidence. |
| `B071-R74` — current UI versus assurance backlog | **Partially closed** | §6 makes the intended UI cut, but §5 and the Approval Gate still put conditional T6 inside `AUTH-F1`, and §6a does not actually name an assurance-backlog feature or authorization owner. Correct under `B071-R77`. |
| `B071-R75` — additive report gate | **Partially closed** | The plan preserves the existing `PR-13` boundaries and adds the report conjunctively. Exact Product/Fn_Spec ownership and version treatment remain incomplete under `B071-R81`. |
| `B071-R76` — Markable/Marketable substitution | **Closed for vocabulary preservation only** | “Minimum Markable Feature” is now quoted and definition-pending. An undefined phrase still cannot be an executable completion measure; use observable report evidence until the Judge defines it (`B071-R82`). |

### New Round 11 findings

| Finding | What is unclear | Guaranteed failure if unchanged | Smallest Draft 12 fix |
|---|---|---|---|
| `B071-R77` — `AUTH-F1` still combines the current editorial proof with the deferred assurance feature | §6 defers the Chief Editor T6 controls, external-GRC capture, and assurance interactions, while §5/Approval Gate define `AUTH-F1` as the complete shared T5/T6 unit. §6 says §6a names the backlog feature, but §6a names only the maturity/report gate | Either the detailed assurance work continues delaying the Judge-approved `M-MVP` editorial flow, or Lane B is told to complete T6 without its interface and evidence-capture contract | Keep current `AUTH-F1` limited to the operable `M-MVP` editorial proof: T1–T5 preparation, the route-selected review, both Assurance Preparation acts, their sealed/read-only projection, Chief Editor editorial approval, and report. Name one later assurance feature/authorization for conditional T6 and external-GRC UI. If the Judge instead keeps T6 in `AUTH-F1`, remove the backlog claim and fully specify T6 now; both cannot be true |
| `B071-R78` — the human-only rule contradicts itself | §1 correctly makes both `T5-EDITORIAL-APPROVAL` and `T6-ASSURANCE-JUDGMENT` human-only. §3 says “only T6,” and the plan-review checklist permits “natural person” only in the T6 rule | A valid requirement or negative test for human Chief Editor editorial approval will fail the plan's own checklist, or an agent will be allowed to approve editorial content | State one invariant everywhere: exactly the two named judgment events are natural-person Chief Editor acts; Final Sign-Off and virtual-agent preparation use accountable/executor principals, not a human-only rule |
| `B071-R79` — external evidence is attached to the wrong transition in the parent flow | §1 point 5 and §4a say Delivery waits for internal T6 plus external GRC evidence, and §1 point 8 says missing external evidence never refuses T6. The dependency diagram instead says T6 is “held pending” that evidence | T6 and external acceptance can deadlock or implementation can reject T6 for a condition governed only at pre-Delivery/Delivery | Allow required T6 to complete independently over the sealed packet. Evaluate external GRC evidence separately. Refuse only the governed pre-Delivery/Delivery transition until both records exist |
| `B071-R80` — `assurance_status` has no owning contract | The phrase began as a read-only UI label, but Draft 11 promotes it to a state axis/enum and says the T5 join sets it. No current Product/data-model/spec owner defines storage, event derivation, legal transitions, or the future T6 result value | Implementers will invent a database field or compute different values; the UI, event log, tests, and later migration will disagree while each appears locally correct | Recommended for current `M-MVP`: define `Assurance status: reviewed` as a derived read-only projection of the two sealed T5 Assurance Preparation acts, not a persisted enum. The later assurance feature owns the T6 judgment-result vocabulary. If persistence is required now, add its Product requirement, data/SPECS owner, migration owner, transition table, and refusal tests to §7 before `AUTH-DOC` |
| `B071-R81` — the write set is not yet executable for every affected owner | Broad rows remain for `Modular_PRD`, three Fn_Specs, RACI, crosswalk, and V1 tracking; the new `M-MVP` report/`M-POC` gate rows name files but not stable requirement/AC identifiers or `[V1→V2]` treatment | Lane A can apply only part of the ontology, silently overwrite a `[V1]` clause, or make the report replace rather than supplement `PR-13` | Give every affected file one exact stable anchor, owner, treatment (`replace`, target overlay, historical notice, create), and negative search. Give the `M-MVP` report one Product AC and the `M-POC` refusal one target requirement/AC that explicitly requires **PR-13 and report**. State that Artifact Inventory is unaffected unless a repository file is created |
| `B071-R82` — a definition-pending phrase is still treated as a completion bar | The plan properly refuses to define “Minimum Markable Feature,” yet uses it to explain what the report proves | No reviewer can objectively prove the named bar, so `M-POC` admission can pass or fail by interpretation | Until separately defined, make the executable gate only: successful report generation, article/decision provenance, and all existing `PR-13` boundaries. Keep “Minimum Markable Feature” as non-normative quoted rationale, not a test predicate |
| `B071-R83` — Draft 11 has small structural regressions | §1 says downstream §§2–9 although the plan ends at §8; §7 has a duplicated stray `B071-R20` line; the Draft 11 commit message says R67–R76 were “applied” although R72 remains open | Review automation and readers will search for a nonexistent §9, malformed text can enter an applied packet, and an open tooling defect is reported closed | Change §§2–9 to §§2–8, remove the duplicate line, and describe R72 as “specified/open,” never applied |

### Parent-first Draft 12 corrective plan

1. **Authority and status first:** close `R67` in every live metadata location. Say direct Judge
   clarifications informed Draft 11; do not say the Judge approved Draft 10 or authorized Draft 11.
2. **Choose one feature boundary (`R77`):** recommended — current `AUTH-F1` is the editorial
   `M-MVP` proof; conditional T6/external-GRC interaction is one named later assurance feature. If
   T6 remains in `AUTH-F1`, withdraw the deferral and specify it completely now.
3. **Regenerate the parent contract (`R78`–`R80`):** both named Chief Editor judgments are
   human-only; T6 never waits on external acceptance; Delivery evaluates the two records; current
   Assurance status is derived unless persistence is explicitly authorized.
4. **Make propagation executable (`R81`):** assign stable anchors, treatments, owners, version
   overlays, and negative searches to every affected file. Keep the report gate additive to `PR-13`.
5. **Make tests observable (`R82`):** gate `M-POC` on the report's successful provenance-linked
   existence and the existing boundaries, not an undefined label.
6. **Repair plan integrity (`R83`):** correct the section range, duplicate line, and R72 lifecycle
   wording. R72's tooling implementation remains a separately tracked Lane A task.
7. **Independent text re-review:** review Draft 12 before `AUTH-DOC`. Do not edit governed tiers,
   rebuild/merge the graph, or exercise an implementation authorization during plan review.
8. **Only after Judge approval:** Lane A may apply the approved §7 packet, commit it, repair/test
   R72 if separately authorized, rebuild/re-merge Graphify at the final source commit, run the full
   suite, push when lane governance authorizes it, and return the shared commit for Lane B
   verification. `D-171` stays binding unless a later bounded authorization narrows it.

### Draft 12 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `PLAN12-AUTH-01` | Draft 12 is opened | Every live approval/status field is read | Plan approval is `none`; direct clarifications are inputs only; no text asserts approval to draft, apply, push, or build |
| `PLAN12-SCOPE-01` | Current and deferred features are compared | `AUTH-F1` scope is traced | One authorization owns one executable feature; no deferred T6 UI is required to complete the current editorial proof |
| `PLAN12-HUMAN-01` | Either Chief Editor judgment is attempted by an agent | Actor rules are evaluated | Both named judgment events refuse the agent; Final Sign-Off and virtual preparation remain principal-based rather than human-only |
| `PLAN12-GRC-01` | Required internal T6 completes but external evidence is absent | The next transition is evaluated | T6 evidence persists; only pre-Delivery/Delivery is refused until separately attributable external evidence exists |
| `PLAN12-STATE-01` | Current `M-MVP` shows Assurance status | Its source is traced | `reviewed` is reproducibly derived from both sealed T5 Assurance Preparation acts, or a fully owned persistent-state contract is explicitly present—never an implicit field |
| `PLAN12-PROP-01` | Any §7 target is selected | Its planned edit is inspected | Exact path, stable anchor, owner, treatment, version marking, negative search, and affected/unaffected tier are stated |
| `PLAN12-MATURITY-01` | `M-POC` start is attempted | Admission is evaluated | Every existing `PR-13` boundary and the successfully generated provenance-linked `M-MVP` report are required; “Minimum Markable Feature” is not an executable predicate while undefined |
| `PLAN12-GRAPH-01` | Graphify currency or semantic parity is claimed | Evidence is inspected | HEAD equals `lastAnalyzedHead`, and terminal parity is not claimed from `merge7.js` until R72's untouched-state, atomic-write, and negative-test requirements pass |

### Round 11 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Product ontology direction | Separate editorial approval, conditional GRC-route assurance, external accountability, and downstream publication are the right parent concepts | Preserve in Lane A Draft 12 |
| **Approve-with-conditions** | Current `M-MVP` scope | Approve the editorial proof and read-only assurance projection only after `R77`/`R80` give them one unambiguous feature and state owner | Lane A Draft 12, then independent review |
| **Approve-with-conditions** | `M-MVP → M-POC` report gate | Direction is sound when the observable report requirement is additive to `PR-13` and the undefined Markable phrase is non-normative | Lane A Draft 12 |
| **Reject** | Draft 11 / `AUTH-DOC` | R67 and R71 remain open; R77–R83 make the current packet non-executable | Supersede with Draft 12 and re-review |
| **Reject verification** | Graphify parity / B-071 closure | Graph analyzed `838baff` while reviewed HEAD is `8986ac6`; R72 remains unimplemented | Lane A repair/test, final-HEAD rebuild, then independent Lane B verification |
| **Defer** | Push | Local branch is ahead of remote and this review grants no external-write authority | Active Lane A obtains/uses the applicable push authorization |
| **Defer** | `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`, S2 implementation and lane transition | `D-171` remains binding; no plan or implementation authorization exists | After corrected `AUTH-DOC` is applied and independently Verified |

## Judge clarification — stable T5/T6 UI shell, separate assurance storage (2026-09-03)

- **Kind:** direct Judge clarification applied to the Draft 12 plan, not approval of Draft 11 or
  `AUTH-DOC`.
- **Affects:** `B071-R77` and `B071-R80`.
- **Does not authorize:** governed-tier edits, implementation, push, route activation, or a lane
  transition.

### What happened

Round 11 framed the current editorial feature and the deferred T6 assurance feature as though their
UI regions also had to be separated. The Judge's clarification narrows the split: it is primarily a
**data-storage and executable-capability boundary**, not a reason to remove the future assurance
region from the present publication-workspace layout.

The current `M-MVP` UI may therefore reserve a stable T5/T6 structure now:

1. **T5 region — current and functional:** read-only display of the sealed parallel Assurance
   Preparation evidence, alongside the editorial publication section. This display does not create
   another judgment or rewrite the underlying append-only evidence.
2. **T6 region — current layout placeholder, deferred function:** reserves the location where the
   conditional assurance judgment for `ROUTE-FALLOUT-3` and `ROUTE-GRC` will later appear. It has no
   operative control, no T6 storage write, no T6 event, and no authority effect in current scope.
3. **Route-dependent display:** the same region remains structurally stable across routes. The five
   non-GRC-accountable routes show `Not required for this route`; `ROUTE-FALLOUT-3` and `ROUTE-GRC`
   show an explicit `Deferred assurance function — no judgment recorded` placeholder until the later
   assurance feature is authorized and built.

This preserves editorial-industry layout consistency and reduces later UI rework without falsely
representing a placeholder as a completed assurance control.

### Normalized vocabulary

| Term | One meaning in this packet | Must not mean |
|---|---|---|
| `EXT-GRC` | The external GRC accountable authority/institution whose evidence remains separately attributable | A route, internal agent, or my-editorial-app executor |
| `ROUTE-GRC` | The factory/workflow route identifier | The external institution itself |
| T5 Assurance display | A read-only projection of the two sealed Assurance Preparation acts | A human T6 judgment, external acceptance, or a second copy of evidence |
| T6 placeholder | Reserved UI location and truthful availability message | A T6 action, stored result, completion event, or assurance evidence |
| T6 assurance feature | The later capability that owns the judgment control, persistence/result vocabulary, evidence capture, refusal behavior, and audit view | A present capability inferred from the placeholder |

### What is now decided, and what remains open

| Item | Status | Draft 12 treatment |
|---|---|---|
| Keep T5 and T6 regions in one stable publication-workspace layout | **Judge clarified** | Include both regions in the current UX specification; give each an explicit current/deferred state |
| Current T5 parallel-assurance display | **Judge clarified** | Read-only, derived from sealed T5 evidence; no duplicate persistence or judgment event |
| Current T6 behavior | **Judge clarified** | Placeholder only; cannot be clicked to judge, cannot write T6 state, and cannot satisfy Delivery or `AUTH-ROUTE` |
| Later T6 behavior and storage | **Still deferred** | One separately named assurance feature owns its data contract, result vocabulary, UI controls, external-GRC evidence interaction, tests, and authorization |
| `assurance_status` persistence | **Not authorized** | For current `M-MVP`, use an explicitly derived display projection. Do not add a stored enum/column merely to support the placeholder |

### Corrected parent-first feature and route plan

1. **Parent — `AUTH-DOC`:** record the UI/data distinction in proposed `D-182`, the Product
   criteria, the UX specification plan, Build-Spec sequencing, and Graphify representation.
2. **Current editorial feature — revised `AUTH-F1` scope:** own the functional editorial flow,
   sealed T5 evidence, read-only T5 Assurance display, human `T5-EDITORIAL-APPROVAL`, report, and the
   non-operative T6 layout placeholder. It owns no T6 result storage or T6 completion event.
3. **Later assurance feature:** own conditional `T6-ASSURANCE-JUDGMENT`, its stored evidence/result
   model, Chief Editor control, external-GRC evidence interaction, refusal/amendment/retraction UI,
   and audit detail. Draft 12 must give this feature one stable name and one bounded authorization
   path; the placeholder does not authorize it.
4. **Route activation dependency:** production routes and `ROUTE-FALLOUT-1/2` do not depend on the
   later T6 feature. `ROUTE-FALLOUT-3` and `ROUTE-GRC` may display the placeholder during `M-MVP`, but
   cannot receive `AUTH-ROUTE` until the later assurance feature and the route's external-evidence
   contract are independently complete.
5. **Propagation:** the current Product/UX clauses define the display shell and its negative
   behavior. The later feature's Product, Fn_Spec, SPECS/data, migration, and detailed UX ownership
   remains a named backlog package rather than implicit current scope.

### Guaranteed failures if the distinction is lost

- Treating the placeholder as T6 evidence lets a layout element satisfy an assurance or Delivery
  rule without a judgment, actor, provenance, or external record.
- Removing the T6 region entirely from current UI forces a later publication-workspace redesign and
  risks inconsistent layouts between editorial and GRC-accountable routes.
- Creating current T6 storage only to populate a placeholder silently pulls the deferred assurance
  feature back into `AUTH-F1` and delays the editorial proof.
- Hiding the T6 region on non-GRC routes makes absence ambiguous; an explicit `Not required` state
  is distinguishable from missing, failed, pending, and deferred.
- Calling `EXT-GRC` a route, or `ROUTE-GRC` an actor, recreates the authority/routing conflation and
  makes internal evidence appear to be external acceptance.

### Draft 12 success criteria added by this clarification

| ID | Given | When | Then |
|---|---|---|---|
| `PLAN12-UI-SHELL-01` | Any route is opened in the publication workspace | T5/T6 layout is rendered | Both regions occupy stable named locations; their content changes by governed route state, not by an unrelated page redesign |
| `PLAN12-T5-DISPLAY-01` | Both T5 Assurance Preparation acts are sealed | The Chief Editor opens the T5 region | The UI reads their evidence/projection without creating a new judgment, transition, or duplicate evidence record |
| `PLAN12-T6-PLACEHOLDER-01` | `ROUTE-FALLOUT-3` or `ROUTE-GRC` is viewed before the later assurance feature exists | The T6 region is inspected or submitted | It says the assurance function is deferred; no operative submit action exists and no T6 event/state/evidence is written |
| `PLAN12-T6-NOT-REQUIRED-01` | A production route or `ROUTE-FALLOUT-1/2` is viewed | The T6 region is inspected | It says `Not required for this route`, never `completed`, `approved`, or external-GRC accepted |
| `PLAN12-STORAGE-01` | Current `M-MVP` storage is inspected | T6 placeholder support is traced | No T6 result column/event/enum exists solely for the placeholder; current Assurance display is derived from sealed T5 evidence |
| `PLAN12-ROUTE-HOLD-01` | A GRC-accountable route has only the T6 placeholder | `AUTH-ROUTE` or Delivery is evaluated | The placeholder contributes no completion evidence; the governed transition remains unavailable until real internal T6 and separate external evidence exist |
| `PLAN12-EXT-GRC-01` | External accountability is displayed or recorded | Actor and route identifiers are inspected | `EXT-GRC` identifies the institution and `ROUTE-GRC` identifies the route; neither identifier substitutes for the other |

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Product/UX planning | One stable publication-workspace shell may contain current T5 display and a truthful T6 placeholder | Lane A Draft 12 |
| **Approve** | Current data boundary | T5 display is derived/read-only; the T6 placeholder writes no T6 state or evidence | Lane A Draft 12 Product/Fn_Spec/UX plan |
| **Approve-with-conditions** | Later assurance feature | Preserve its UI location now, but give its storage, behavior, tests and authorization one separate named backlog owner | Lane A Draft 12, then future bounded authorization |
| **Reject** | Placeholder-as-capability | A visible T6 section cannot prove T6 completion, external acceptance, Delivery eligibility, or `AUTH-ROUTE` readiness | Negative criteria in Draft 12 |
| **Defer** | Detailed T6 storage and interaction | Outside the current editorial proof; no storage shape or result enum is authorized by this clarification | Later assurance feature |
| **Defer** | Draft 11 / `AUTH-DOC`, push, implementation and lane transition | This clarification corrects the plan only; the Round 11 rejection and `D-171` hold remain | Draft 12 and independent re-review |

## Judge ruling — approval-provenance for direct real-time instructions (2026-09-03)

**Judge approval received in the current conversation for adopting this provenance rule as binding
on how Lane A records every future direct Judge instruction across `docs/handoff/` and
`docs/v1/`, pending durable registration.** This directly answers the recurring defect (`B071-R45`,
`R57`, `R67`) where a real-time chat instruction was written as "the Judge approved Draft N" and the
next independent-review round correctly found that unverifiable against any durable record.

### The rule

1. A direct real-time Judge instruction is valid authority when it explicitly names: the object or
   immutable revision; the authorized action; the scope and exclusions; the applicable authorization
   checkpoint, if any.
2. Before it is durably recorded, describe it as: *"Judge approval received in the current
   conversation for [specific action], pending durable registration."* This permits only the
   explicitly authorized action. It is not durable shared evidence, independent verification,
   approval of the resulting artifact, push authority, or authority for another checkpoint.
3. Use *"Judge clarification received"* when the message explains meaning or supplies requirements
   but does not explicitly authorize an action.
4. Distinguish: "Judge authorized Lane A to prepare Draft 11" / "Judge approved Draft 11 at commit
   `<sha>`" / "Judge granted `AUTH-DOC` for the packet at commit `<sha>`" / "Judge authorized push of
   commit `<sha>`." None implies another.
5. Lane A records an explicit approval in the next available Decision Register entry and propagates
   it as required. After that commit, use: *"Judge approval recorded by `D-NNN` at commit `<sha>`."*
6. Independent review verifies that the recorded decision and its application match the Judge's
   instruction. It does not recreate, replace, or retrospectively grant the approval.
7. Approval of one revision never transfers automatically to a later draft. Material changes require
   renewed approval of the new immutable revision.

### Applied retroactively in this same pass

The header ("Lane A:" field) and the "Lane A response — Draft 11 produced" section above are
corrected to use points 2 and 4's precise vocabulary instead of the prior unqualified "the Judge
approved Draft N" statements. `docs/v1/V1-B071-CORRECTIVE-PLAN.md`'s Draft 11 revision-history entry
is corrected the same way.

### Durable registration — recorded by `D-183`

**Judge approval recorded by `D-183`** (`docs/v1/V1-DECISION-REGISTER.md` §5.14e8, committed in the
same pass as this paragraph — see git history for the exact commit SHA rather than restating a
mutable hash here). The Judge's Approve/Reject/Defer table
confirmed the rule (row 1: Approve — Governance semantics) and the same table's own logic closes the
Defer row that had blocked Register propagation: that row's precondition was "the Judge approves this
provenance rule," satisfied by the Approve row immediately above it in the same response. `D-183`
is the next-available-decision-entry follow-up that row named — not a separate, still-open ask.
Every `identity_assurance`-style "pending durable registration" phrase in this file's Judge-ruling
section above now resolves to this citation.

**Self-verification limit (per the Judge's "Reject — Self-verification" row):** this handoff entry is
not, by itself, proof that `D-183` was correctly applied — that proof is the Register entry plus
independent Lane B verification together. Lane B has not yet independently verified this entry
against the Judge's instruction; treat `D-183` as recorded-pending-independent-verification, not
terminally closed.

### Approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Approval-provenance rule (points 1–7) | Confirmed by the Judge's Approve/Reject/Defer table | Governs all future Lane A approval statements immediately |
| **Approve** | Retroactive correction of the three flagged statements | Applied in this same pass | Closed |
| **Reject** | Approval inheritance | Permission to draft never becomes approval of the resulting draft | Governs `R67` and all future recurrences |
| **Reject** | Self-verification by this handoff alone | `B-071` is not sole proof of the authority it claims | Requires `D-183` + independent Lane B review together |
| **Approve** | Decision-Register entry for this rule | Recorded as `D-183` in this same pass | Independent Lane B verification of `D-183`'s application |

## Lane B task guide — produce Draft 12 one bounded commit at a time (review baseline `2b8d5b2`)

### Rewritten task

Prepare—not apply—one reviewable Draft 12 that resolves the existing `B071-R67` and
`B071-R77`–`R83` findings plus the Judge's stable-T5/T6-UI-shell clarification. Work parent first,
commit one bounded correction unit at a time, keep every intermediate revision labelled Draft 12
work-in-progress, and perform Graphify synchronization only after the final source commit. This
guide grants no `AUTH-DOC`, product implementation, push, lane transition or route activation.

### Preflight — do not hide the remaining graph gap inside B-071

The source branch and extracted graph are commit-current at `2b8d5b2`, and the consistency suite
passes. That does not make every curated description current:

- `frag119.json` now says Draft 11, but its B-071 node still stops at `R60`/`R66`, its plan node
  still says round 9 is outstanding, and its B-072 node still describes the standing authority as
  proposed with Judge approval none;
- `frag121.json` still describes B-077 as `Resolution Applied`, although B-077 is currently
  `Answered` without a resolution.

Those are B-077 graph-parity follow-ups, not Draft 12 product content. Lane A should correct them in
one separate tracked-fragment commit before using Graphify as B-071 review evidence. Do not copy the
status prose into this plan, and do not call local extracted-description enrichment a shared repo
fact.

### What is unclear

1. The later conditional T6 assurance capability has a clarified scope, but no stable feature ID or
   future authorization owner. `AUTH-F1` cannot own it after the Judge limited `AUTH-F1` to the
   current editorial proof, and `AUTH-F2` already means factory-route capability.
2. `assurance_status` is used as if it were both a stored state and a derived UI projection. The
   latest Judge clarification selects the derived/read-only model for current `M-MVP`, but Draft 11
   has not incorporated it.
3. Draft 11 still makes external GRC evidence appear to hold T6 in its flow diagram, even though the
   governing clarification allows internal T6 to complete and refuses only pre-Delivery/Delivery.
4. The propagation table names many files but does not give every affected clause a stable anchor,
   owner, treatment, version overlay and negative search.

### Guaranteed failures if Lane A edits child documents first

- A combined `AUTH-F1` makes the deferred assurance feature block the current editorial proof, or
  silently ships T6 without its storage/evidence contract.
- Treating `assurance_status` as persisted causes an invented column/event/enum; treating it as
  derived elsewhere gives the UI two incompatible sources of truth.
- Holding T6 on external GRC evidence deadlocks internal judgment with an external acceptance record
  that belongs only at the Delivery boundary.
- Updating broad files without clause treatments overwrites `[V1]` history or leaves contradictory
  live rows behind while a top-level notice appears correct.
- Rebuilding Graphify after every work-in-progress commit creates repeated drift work and makes an
  intermediate Draft 12 look reviewable.

### Commit-by-commit guide — highest parent first

Every commit below is a Draft 12 planning commit only. Before each commit, bind its exact paths and
confirm that no unrelated file—including `package-lock.json`—is staged. Push authority is evaluated
separately; a successful commit is not evidence of a successful push.

| Unit | Finding closed | Exact drafting action | Allowed paths | Done when |
|---|---|---|---|---|
| **0 — graph review baseline** | B-077 graph-parity carryover | Upsert the existing B-071/plan/B-072 descriptions in `frag119.json` and B-077 description in `frag121.json`; preserve node IDs and edges; do not add D-182 | `docs/graph-fragments/frag119.json`, `frag121.json` | Tracked descriptions agree with current source; no obsolete Draft 9/round-9/B-072-proposed/B-077-Applied claim remains |
| **1 — authority and current status** | `R67` | In current-valued B-071 and plan metadata, say Draft 11 was produced from direct Judge clarifications, plan approval is none, and Draft 12 is work-in-progress. Treat `D-183` as the provenance rule, not proof of a Draft-11-specific approval. Preserve prior statements only as labelled history | B-071; `V1-B071-CORRECTIVE-PLAN.md` | No current text claims the Judge approved Draft 10/11, granted `AUTH-DOC`, or authorized Draft 12 application |
| **2 — feature boundary** | `R77` plus the stable-shell clarification | Limit proposed `AUTH-F1` to the operational editorial `M-MVP`: T1–T5 preparation, route-selected review, both sealed Assurance Preparation acts, read-only T5 projection, human editorial approval and report. Put functional conditional T6/external-GRC interaction in one explicitly proposed later feature; preserve only its non-operative UI location now | `V1-B071-CORRECTIVE-PLAN.md` | Current completion never depends on a functional T6 control; the placeholder cannot write state or satisfy Delivery/route activation |
| **3 — human judgment and transition order** | `R78`, `R79` | State one invariant: `T5-EDITORIAL-APPROVAL` and `T6-ASSURANCE-JUDGMENT` are the two human Chief Editor acts. Required internal T6 may complete without external acceptance; the pre-Delivery/Delivery transition evaluates internal T6 evidence and separately attributable external GRC evidence | `V1-B071-CORRECTIVE-PLAN.md` | Agent attempts at either judgment are refused; missing external evidence never refuses or erases T6, only Delivery progression |
| **4 — state and UI ownership** | `R80` plus the stable-shell clarification | Make current `Assurance status: reviewed` a derived, read-only projection of both sealed T5 Assurance Preparation acts. Keep the T5 display functional and the T6 region a route-aware placeholder. Assign T6 persistence/result vocabulary to the later feature only | `V1-B071-CORRECTIVE-PLAN.md` | No current T6 column/event/enum is implied; non-GRC routes display `Not required`; GRC-accountable routes display a truthful deferred state |
| **5 — executable propagation** | `R71`, `R81` | Replace every broad §7 row with one clause row per exact path and stable anchor. Name owner, treatment, `[V1→V2]` overlay where required, negative search and affected/unaffected tier. Allocate explicit Product/Fn_Spec requirement and AC identities for the report and `M-POC` refusal | `V1-B071-CORRECTIVE-PLAN.md` | No catch-all row remains; the report condition is explicitly conjunctive with existing `PR-13`, never a replacement |
| **6 — observable maturity oracle** | `R82` | Define admission using successful provenance-linked report generation plus all existing `PR-13` boundaries. Keep “Minimum Markable Feature” quoted as non-normative, definition-pending rationale | `V1-B071-CORRECTIVE-PLAN.md` | A reviewer can decide pass/fail from records; no undefined phrase is a test predicate |
| **7 — structural integrity** | `R83` | Correct downstream `§§2–§9` to `§§2–§8`; remove the stray duplicated `B071-R20` text; state that R72 is specified/open, never applied | `V1-B071-CORRECTIVE-PLAN.md` | Searches find no nonexistent §9 target, duplicate stray line or R72-applied claim in current text |
| **8 — Graphify verifier plan** | `R72` | Keep the tooling fix outside Draft 12 content application. Specify a separately authorized Lane A unit for untouched-graph verification, dangling/global conflict checks, atomic replace/re-read and tracked negative tests | B-071 and plan references only | Text review can complete without pretending tooling is built; terminal Graphify parity remains conditional on the separate tooling unit |
| **9 — review-ready metadata** | all above | Mark Draft 12 review-ready—not approved—in the plan and B-071 current fields; update only the existing status nodes in `frag119.json`. Do not add D-182 or mark the plan historical | B-071; plan; `frag119.json` | One immutable source commit contains the final proposed text and matching tracked status descriptions |

### Evidence sequence after Unit 9

1. Rebuild the extracted graph once at the final source commit.
2. Re-merge all tracked fragments and run the conflict audit.
3. Run the full consistency suite and the B-071/D-182 semantic queries.
4. Report extraction currency, curated coverage, curated parity and local semantic-enrichment state
   separately.
5. Make no further tracked edit before Lane B reviews the same pushed revision.
6. If Lane B finds no defect, present that immutable Draft 12 to the Judge for `AUTH-DOC` consideration.
   Passing review does not itself grant `AUTH-DOC`.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `B071-GUIDE-SC1` | Draft 12 is opened | Authority text is read | Direct clarifications are inputs; plan approval and every `AUTH-*` checkpoint remain unapproved |
| `B071-GUIDE-SC2` | Current and deferred features are traced | `AUTH-F1` completion is evaluated | The operational editorial proof can complete without functional T6; the later assurance feature has one proposed owner and no borrowed `AUTH-F2` meaning |
| `B071-GUIDE-SC3` | Either human judgment is attempted | Actor and dependency rules run | An agent is refused; T6 does not depend on external acceptance; Delivery evaluates the separate records |
| `B071-GUIDE-SC4` | Current assurance UI is rendered | Its storage source is traced | T5 evidence is read-only/derived and the T6 placeholder writes nothing |
| `B071-GUIDE-SC5` | A §7 row is selected | Its application is prepared | Exact path, anchor, owner, treatment, version marking, negative search and tier effect are all present |
| `B071-GUIDE-SC6` | `M-POC` admission is evaluated | Evidence is incomplete | Missing report or any existing `PR-13` boundary independently refuses admission; “Minimum Markable Feature” is not executable |
| `B071-GUIDE-SC7` | Draft 12 is handed back | Git and Graphify evidence is checked | Local/upstream/final analyzed revision agree; tracked status nodes match source; local-only semantics are not presented as shared evidence |

### Approve/reject gate for this guide

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Draft 12 parent direction | Existing `R77`–`R83` findings and the stable-shell clarification yield one dependency-ordered plan | Judge authorizes Draft 12 preparation, then Lane A Units 1–9 |
| **Approve-with-conditions** | Later T6 assurance feature | Scope is clear; stable feature ID and future authorization owner remain proposed rather than decided | Draft 12 text review, then Judge decision |
| **Reject** | Draft 11 / `AUTH-DOC` | Current plan still contains the combined feature, wrong dependency and non-executable propagation defects | Supersede with Draft 12 |
| **Reject verification** | “B-072 onward is fully fixed” | Tracked B-072/B-077 descriptions remain partially stale despite green mechanical checks | Unit 0, then per-entry Lane B review under B-077 |
| **Defer** | R72 tooling implementation | Specified here, not authorized or built | Separate Lane A tooling unit before terminal Graphify evidence |
| **Defer** | Product implementation, `AUTH-F1`, `AUTH-F2`, route activation and lane transition | `D-171` remains binding | Only after `AUTH-DOC` is applied and independently Verified |

## Lane B feature breakdown — conditional T6 assurance backlog (proposal for Draft 12)

### Purpose and naming

The later T6 capability is one backlog feature, not the unfinished half of `AUTH-F1` and not a
factory-route operation under `AUTH-F2`.

| Concept | Proposed stable identifier | Meaning | Explicitly not |
|---|---|---|---|
| Backlog feature | **`FEAT-T6-ASSURANCE`** | Conditional Chief Editor assurance judgment and its evidence contract for the two GRC-accountable routes | T5 editorial approval; T5 Assurance Preparation; OD4; IIA Line 3; external GRC's own decision |
| Human judgment event | **`T6-ASSURANCE-JUDGMENT`** | The Chief Editor's internal assurance decision recorded by my-editorial-app | External acceptance; Delivery; publication; an agent review |
| Future authorization checkpoint | **`AUTH-T6-ASSURANCE`** | Judge authorization to implement exactly `FEAT-T6-ASSURANCE` after its documentation packet is approved | `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`, or permission to activate a route |

These identifiers are **proposed, not decided**. Lane A must place the accepted identity and scope in
the Decision Register before any derived tier treats them as current. Do not shorten the checkpoint
to `AUTH-F3`: `F3` already has historical handoff meaning, and a sequence number hides the feature's
business purpose.

### Ownership — four different meanings of “owner”

| Ownership question | Owner | Boundary |
|---|---|---|
| Who makes the business judgment? | Natural-person **Chief Editor** | Performs `T6-ASSURANCE-JUDGMENT`; no virtual agent may substitute |
| Who grants implementation authority? | **Judge** (the same natural person in governance context) | Grants or rejects `AUTH-T6-ASSURANCE` for one immutable packet |
| Who owns specification and propagation? | **Lane A**, while Active | Writes the Register decision and propagates the approved feature contract; does not implement it |
| Who implements the feature? | **Lane B**, only when selected Active for the bounded authorization | Builds the approved capability; does not define or widen its governance scope |
| Who owns external acceptance? | **External GRC institution** | Supplies a separately attributable institutional record; does not authorize project work or perform the internal T6 act |
| Who verifies Lane A's applied documentation? | A permitted independent reviewer, not Lane A | Verification is separate from Judge authorization and from application |

This separation prevents “future authorization owner” from being answered merely with “Lane B.”
Lane B can be the implementation executor; the Judge remains the authorization owner.

### Parent-first dependency model

1. **`AUTH-DOC` — documentation parent.** Draft 12 must first define the feature identity, route
   predicate, evidence boundary, state ownership, UI boundary, refusal rules and acceptance criteria.
   Independent verification of that applied packet is required before implementation authority.
2. **`AUTH-F1` — current editorial proof.** It owns T1–T5, both sealed T5 Assurance Preparation
   acts, the derived read-only T5 assurance display, human T5 editorial approval and the report.
   It owns the stable T6 placeholder location, but no functional T6 submission or result.
3. **`AUTH-T6-ASSURANCE` — later assurance capability.** It may be selected only as its own bounded
   unit. Its implementation consumes the verified `AUTH-F1` T5 evidence contract; it does not reopen
   or absorb `AUTH-F1`.
4. **`AUTH-F2` — factory-route capability.** It continues to own operation and route readiness. It
   neither supplies the human T6 decision nor authorizes the T6 feature.
5. **`AUTH-ROUTE` — route activation.** A non-GRC route requires the verified results of `AUTH-F1`
   and its applicable `AUTH-F2` packet. `ROUTE-FALLOUT-3` and `ROUTE-GRC` additionally require the
   verified `AUTH-T6-ASSURANCE` result and their external-evidence readiness contract. No feature
   authorization alone activates a route.

The capability packets may be specified independently after `AUTH-DOC`, but execution remains
serialized by the one-Active-lane rule. `AUTH-T6-ASSURANCE` does not authorize concurrent Lane B
work beside `AUTH-F1` or `AUTH-F2`.

### Feature boundary

**In scope for `FEAT-T6-ASSURANCE`:**

- activate the already reserved T6 region under Publication → Assurance without redesigning the
  stable publication-workspace shell;
- apply only when the selected route is `ROUTE-FALLOUT-3` or `ROUTE-GRC`;
- show the Chief Editor the sealed T5 editorial packet and both separately attributable Assurance
  Preparation results;
- show prior virtual-agent identity evidence without treating an attempt badge as a stable executor
  principal;
- allow only the natural-person Chief Editor to record `T6-ASSURANCE-JUDGMENT`;
- define the internal T6 result vocabulary, rationale/evidence references, append-only audit event,
  retry/idempotency behavior and refusal conditions;
- capture or reference external GRC evidence as a separate institutional record;
- expose a read-only audit view that distinguishes internal T6 judgment from external acceptance;
- provide the T6 and external-evidence predicates consumed later by the Delivery boundary.

**Out of scope:**

- T1–T5 editorial work, T5 reviewer selection, T5 Assurance Preparation or
  `T5-EDITORIAL-APPROVAL`;
- factory operation definitions and route-operation joins (`AUTH-F2`);
- making the external institution's accountable decision inside my-editorial-app;
- OD4 automation, IIA Three Lines classification, publication execution or route activation;
- treating the current T6 placeholder as completed capability or as evidence of assurance.

### State and evidence rules Draft 12 must settle

1. Current `Assurance status: reviewed` remains a derived read-only projection of the two sealed T5
   Assurance Preparation acts; `FEAT-T6-ASSURANCE` must not silently convert it into a stored field.
2. If the future feature persists a T6 result, it must use a separately owned state/event contract
   whose name, values, legal transitions and migration owner are specified before implementation.
3. Internal T6 may complete without external GRC acceptance. Missing external evidence blocks only
   the pre-Delivery/Delivery transition; it does not reject, erase or hold the internal T6 record.
4. Every T6 record identifies the article, selected route, natural-person principal, decision result,
   evidence references, rationale, time, contract version and idempotency key. Exact physical field
   names remain a later Product/data-spec decision, not a handoff invention.
5. External acceptance has its own source institution, record identifier, received/effective time and
   evidence reference. It must never be represented by the Chief Editor's T6 event.

### Guaranteed failures if this separation is not adopted

- Keeping T6 in `AUTH-F1` makes the current editorial proof depend on a deliberately deferred
  interface and storage contract.
- Putting T6 in `AUTH-F2` turns a human governance judgment into a factory operation and lets route
  readiness masquerade as assurance.
- Letting Lane B “own authorization” permits the implementing lane to widen and approve its own
  scope, defeating the lane boundary and independent-review model.
- Reusing `assurance_status` for both the T5 projection and T6 result produces two sources of truth.
- Merging internal T6 judgment with external GRC acceptance destroys attribution and can allow an
  internal actor to manufacture the external prerequisite.
- Treating the reserved T6 UI region as functional produces a dead or misleading control that may
  falsely satisfy Delivery or route-readiness checks.

### Draft 12 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `T6-BL-SC1` | The feature catalog is reviewed | T6 scope is traced | `FEAT-T6-ASSURANCE` has one definition and `AUTH-T6-ASSURANCE` is its only proposed implementation checkpoint |
| `T6-BL-SC2` | `AUTH-F1` is evaluated | Current editorial completion is checked | It completes without a functional T6 control; the reserved T6 region writes no state or evidence |
| `T6-BL-SC3` | A non-GRC route is selected | T6 eligibility is evaluated | T6 is `Not required`; no T6 event is created and editorial approval is not blocked |
| `T6-BL-SC4` | `ROUTE-FALLOUT-3` or `ROUTE-GRC` is selected | Delivery eligibility is evaluated | A valid human T6 record and separately attributable external evidence are both required |
| `T6-BL-SC5` | A virtual agent attempts T6 | Actor validation runs | The attempt is refused and audited; no T6 result is written |
| `T6-BL-SC6` | Internal T6 succeeds but external evidence is absent | The workflow reaches the Delivery boundary | The T6 record remains valid; Delivery progression alone is refused with the missing prerequisite named |
| `T6-BL-SC7` | T5 and T6 status are displayed | Their sources are traced | T5 review is derived from sealed preparation acts; the T6 result comes only from the future T6 contract |
| `T6-BL-SC8` | An `AUTH-ROUTE` packet is prepared | Its dependencies are checked | Non-GRC routes require `AUTH-F1` + applicable `AUTH-F2`; the two GRC-accountable routes also require `AUTH-T6-ASSURANCE` + external-evidence readiness |

### Smallest Draft 12 propagation plan

This section proposes content; it authorizes no propagation. If the Judge accepts the feature identity
and checkpoint, Lane A should add one clause-level row per affected anchor rather than one broad file
row:

1. Decision Register — feature identity, authority owner, route predicate, dependencies and exclusions.
2. Build Spec — sequence and Definition of Done for the deferred feature; preserve the current S2 hold.
3. Artifact Inventory — only if an approved later pass creates a new Fn_Spec, UX spec or migration.
4. `Modular_PRD.md` — Product requirement and acceptance-criteria ownership for conditional T6 and
   external-evidence separation.
5. `FN-GATES-01-05.md` — behavioral branching, refusal behavior, event consumption and negative tests.
6. Data/SPECS and UX/SPECS — persistence contract and activation of the reserved UI shell, each with
   the correct version overlay.
7. B-071 and the corrective plan — current lifecycle and cross-references; no second backlog file.
8. Graphify tracked fragment — upsert the existing B-071/plan nodes after source settles; rebuild and
   independently verify the same pushed revision last.

### Approve/reject gate for the T6 backlog proposal

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Feature decomposition | T6 is a separate conditional assurance feature, not part of `AUTH-F1` or `AUTH-F2` | Preserve in Draft 12 |
| **Approve-with-conditions** | `FEAT-T6-ASSURANCE` / `AUTH-T6-ASSURANCE` identifiers | Clear and collision-resistant, but proposed until the Judge accepts them into the Draft 12 decision text | Judge terminology decision, then Lane A propagation plan |
| **Approve** | Ownership model | Judge authorizes; Lane A specifies/propagates; Lane B implements only while Active; external GRC owns its external record | Draft 12 |
| **Reject** | `AUTH-F3` alias | Collides semantically with historical F3 language and hides the business purpose | Use the named checkpoint if approved |
| **Reject** | Placeholder-as-capability | A reserved T6 layout proves neither judgment nor evidence readiness | Negative acceptance criteria |
| **Defer** | Physical data fields, result enum and migration | They require an approved Product/data contract | `AUTH-T6-ASSURANCE` specification packet |
| **Defer** | Implementation and GRC-route activation | No authorization is granted here; `D-171` remains binding | After `AUTH-DOC` verification and separate bounded Judge authorization |

## Judge clarification review — separate the T6 business workflow, system feature and development authorization

### Correction to the preceding presentation

The preceding ownership table and `AUTH-*` diagram combined facts from different domains. Their
individual statements are usable, but the combined presentation is superseded by the three-layer
model below:

1. **Business/industry workflow:** the external assurance obligation exists with or without
   my-editorial-app.
2. **System feature:** `FEAT-T6-ASSURANCE` is the proposed global capability that helps the Chief
   Editor perform and evidence the internal T6 response to that obligation.
3. **Development governance:** `AUTH-DOC`, `AUTH-F1`, `AUTH-F2`, `AUTH-T6-ASSURANCE` and
   `AUTH-ROUTE` control project work. They are never article states, UI labels, editorial tasks or
   external-authority decisions.

The identifiers proposed in the preceding section remain proposals. This clarification changes
their explanation, not their approval state.

### Layer 1 — existing business and external-assurance workflow

`T6` originates in an established industry workflow outside the software. It is linked to an
applicable external government, court, regulator, licensing or other GRC institution represented by
the party type `EXT-GRC`. `EXT-GRC` is not one universal institution: the applicable institution,
jurisdiction, authority and record type vary by article and matter.

```text
Editorial work T1–T5
        │
        ▼
Does the article/matter require external GRC assurance?
        │
        ├── No ──► continue the editorial/publication process; T6 is not required
        │
        └── Yes ─► Chief Editor performs the internal T6 assurance response
                          │
                          ▼
                   EXT-GRC performs its own external act
                          │
                          ▼
                   Delivery/remedy evidence is checked
```

For the current route model, the GRC-required branch applies to `ROUTE-FALLOUT-3` and `ROUTE-GRC`.
The feature is **global** because the same capability is available across the product and can bind
to the applicable jurisdiction and external institution. “Global” does not mean that T6 runs for
every article, that one institution governs every jurisdiction, or that every external rule is
identical.

The business remedy may be a publication, printed notice, correction, amendment, retraction,
defamation/legal response or other required communication. The remedy remains editorial content and
retains its own publication evidence; T6 itself does not publish it.

### Layer 2 — system feature and manual continuity

`FEAT-T6-ASSURANCE` is the proposed digital support for the existing workflow. It does not create
the obligation and does not replace the external institution.

| Operating condition | Business action | What my-editorial-app may claim |
|---|---|---|
| Feature built and available | Chief Editor records internal T6; external evidence is captured or referenced separately | Only the acts for which valid records exist |
| Feature not yet built | Chief Editor uses the established manual tracking/service process outside the app | T6 feature `Deferred`/`Unavailable`; never `Completed` merely because the placeholder exists |
| Feature exists but internet/system is unavailable | Continue by the approved manual/offline process, including physical-print remedies where applicable | `Manual reconciliation pending` until independently attributable evidence is brought back into the system |
| Manual record later reconciled | Record the original actor, event/effective time, external authority and source evidence plus the later reconciliation time | A reconciled manual act, not a newly performed online act and not an automatic approval |

The manual path is a **business-continuity fallback**, not a control bypass. It preserves the ability
to act when software or connectivity is absent, while refusing to fabricate digital evidence. Until
a future approved contract defines reconciliation, manual records remain outside the app and the app
must display the T6 capability truthfully as unavailable/deferred.

The stable T6 UI region may therefore show three different facts without conflating them:

- whether T6 is required for this article;
- whether the digital T6 capability is available;
- whether internal T6 and external GRC evidence have actually been recorded.

### Layer 3 — development authorization only

```text
Documentation correction
AUTH-DOC
   │
   ├── AUTH-F1              build the current T1–T5 editorial proof
   ├── AUTH-F2              build factory-route capability
   └── AUTH-T6-ASSURANCE    build the later digital T6 capability

Route activation decision
AUTH-ROUTE
   ├── Non-GRC app route: verified AUTH-F1 + applicable AUTH-F2
   └── GRC app route:     verified AUTH-F1 + applicable AUTH-F2
                          + verified AUTH-T6-ASSURANCE
                          + external-evidence readiness
```

This diagram governs what the development lanes may implement in my-editorial-app. It does not
govern whether the real-world newsroom may perform a manual assurance or remedy. Until the digital
T6 capability exists, the business can continue manually, but the corresponding GRC app route is not
called digitally active unless a separately approved system contract can receive, validate and
reconcile the manual evidence.

Development ownership must be stated separately from system responsibility:

| Development act | Development authority/executor | System or business fact produced |
|---|---|---|
| Decide feature scope | Judge through the Decision Register | Approved requirements, not a T6 judgment |
| Propagate the approved specification | Active Lane A | Consistent documents, not assurance evidence |
| Implement the bounded feature | Active Lane B | Software capability, not external acceptance |
| Build CI workflow if separately specified | Active Lane C | Verification automation, not business authority |
| Perform T6 on an article | Human Chief Editor using the system or manual process | Internal assurance judgment |
| Issue/accept/mandate externally | Applicable `EXT-GRC` institution | External institutional record |

### What remains unclear

1. Which evidence minimum makes an offline/manual T6 act eligible for later system reconciliation.
2. Whether the first `FEAT-T6-ASSURANCE` increment includes reconciliation or only online capture.
3. The T6 internal outcome vocabulary and whether it is an event result, a derived projection or a
   separately persisted state.
4. How jurisdiction and applicable `EXT-GRC` institution are selected and versioned without implying
   that my-editorial-app determines legal applicability.
5. Whether a GRC app route must remain disabled until digital T6 exists, or may activate earlier under
   a separately approved manual-evidence bridge. The safe default is disabled; the real-world manual
   workflow remains available outside the app.

These are specification questions for Draft 12 and the later feature packet. They are not permission
for Lane B to invent fields, legal rules, route enablement or external-authority mappings.

### Guaranteed failures if the three layers remain conflated

- An `AUTH-*` development checkpoint appears in the product UI or audit trail as if it were an
  editorial or external decision.
- “Global feature” is implemented as universal T6 execution, blocking ordinary non-GRC articles.
- `EXT-GRC` becomes one hard-coded institution or an internal role, erasing jurisdiction and
  attribution.
- Missing software is treated as missing business process, leaving no lawful/operational response
  during outage or before the feature is built.
- Manual fallback is treated as automatic satisfaction, allowing Delivery without verifiable actor,
  time, authority and evidence.
- A later data backfill overwrites event time with reconciliation time, making the audit record look
  as though the action occurred inside the app.
- T6 is made responsible for publishing the amendment/retraction, duplicating the existing
  notice-as-article and publication transaction model.

### Parent-first Draft 12 corrective steps

1. **Business parent:** state that external assurance and manual continuity exist independently of
   the product; define when T6 is required and preserve `EXT-GRC` as an external party type.
2. **System child:** define `FEAT-T6-ASSURANCE` as global availability with conditional per-article
   invocation; preserve the current truthful placeholder and manual fallback boundary.
3. **Evidence child:** specify internal T6, external institutional evidence, and offline/manual
   reconciliation as distinct records and times. Do not pick physical fields yet.
4. **Development child:** keep the `AUTH-*` dependency model only in build/governance text; add an
   explicit rule that none of those labels enters business data or user-facing editorial status.
5. **Route child:** keep non-GRC app routes independent of T6; require the digital T6 dependency for
   GRC app-route activation unless the Judge separately approves a manual-evidence bridge.
6. **Propagation child:** allocate exact Product, Fn_Spec, data/SPECS, UX/SPECS and Build-Spec anchors
   only after the Judge accepts the parent model; preserve existing retraction/publication rules by
   reference rather than rewriting them.
7. **Evidence last:** synchronize the tracked graph and extracted graph after the source packet
   settles, then hand the same pushed revision to independent review.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `T6-LAYER-SC1` | Any T6 statement is read | Its vocabulary is classified | It belongs to exactly one of business workflow, system behavior or development governance |
| `T6-LAYER-SC2` | A non-GRC article is processed | T6 applicability is evaluated | T6 is not required and cannot block its editorial completion |
| `T6-LAYER-SC3` | A GRC-accountable article is processed without the digital feature | Continuity is evaluated | The business follows the manual process; the app claims neither digital completion nor active GRC-route support |
| `T6-LAYER-SC4` | The feature or internet is unavailable | A manual remedy is performed | Actor, original time, authority and evidence remain preservable for later reconciliation; absence of digital evidence is explicit |
| `T6-LAYER-SC5` | A manual act is later reconciled | Its audit record is inspected | Original event/effective time and later reconciliation time are distinct; no backdated online act is implied |
| `T6-LAYER-SC6` | “Global” is tested | Two jurisdictions or external institutions are considered | One reusable feature can reference the applicable external authority without treating one rule or institution as universal |
| `T6-LAYER-SC7` | A development authorization is inspected | Product data and UI labels are searched | No `AUTH-*` value appears as an article state, editorial task, assurance result or external record |
| `T6-LAYER-SC8` | A correction, amendment or retraction is required | T6 completes | The remedy still uses the existing editorial/publication evidence flow; T6 does not publish it directly |

### Approve/reject gate for this clarification

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Business continuity | The external assurance workflow survives software absence through a manual service/tracking path | Draft 12 business parent |
| **Approve** | Product direction | One global T6 capability, invoked conditionally for GRC-accountable articles | Draft 12 Product/Fn_Spec plan |
| **Approve-with-conditions** | Manual reconciliation | Required for truthful continuity, but evidence minimum and increment boundary remain undecided | Later `FEAT-T6-ASSURANCE` packet |
| **Reject** | Mixed ownership table | Business responsibility, system actors and development lanes cannot share one ownership answer | Replace with the three layer-specific tables above |
| **Reject** | `AUTH-*` as system vocabulary | Development authorization is not editorial workflow or product state | Negative propagation search |
| **Reject** | Manual fallback as automatic completion | It destroys evidence and permits a false assurance claim | Refusal and reconciliation criteria |
| **Defer** | Physical schema, jurisdiction rules and route activation | No approved Product/data contract exists | After Draft 12 and separate bounded authorization |
| **Defer** | Build and implementation | Planning only; `D-171` remains binding | After `AUTH-DOC` is applied and independently Verified |

## Judge scope-cut clarification — T6 remains an unrefined post-V1 backlog item

### Correction to the two preceding T6 proposals

“Manual” means that the real-world editorial and external-assurance work continues without
my-editorial-app. It does **not** mean that V1 must implement manual/offline capture,
reconciliation, jurisdiction selection, a T6 result model or a manual-evidence bridge.

The detailed `FEAT-T6-ASSURANCE` and `AUTH-T6-ASSURANCE` proposals above are therefore premature
refinement. Preserve them as analysis history, but do not carry them into Draft 12 as approved names,
requirements, acceptance criteria or dependencies.

Use **`BACKLOG-T6-ASSURANCE`** as the single proposed tracking key while the item is unrefined. It
identifies the business capability without claiming that a buildable feature packet or authorization
checkpoint already exists. A final Product feature ID and bounded `AUTH-*` checkpoint are assigned
only if the item later enters refinement.

### Current disposition

| Attribute | Current value |
|---|---|
| Business capability | Existing global external-assurance workflow linked to applicable `EXT-GRC`; continues manually without the app |
| Product backlog key | `BACKLOG-T6-ASSURANCE` — proposed stable tracking label only |
| Version scope | Beyond V1 |
| Backlog order | Bottom; outside the top-five refinement window |
| Refinement status | Not applicable for V1; no detailed review until further notice |
| Ready when | The Chief Editor explicitly promotes `BACKLOG-T6-ASSURANCE` into the top five and authorizes refinement |
| Current application behavior | No functional T6 capability; any reserved T6 UI location is inert and truthfully labelled backlog/not available |
| Current business fallback | Manual industry workflow outside my-editorial-app; no V1 reconciliation obligation is inferred |
| Build authorization | None; `D-171` remains binding |

This is backlog ordering, not deletion. The business capability remains important and global, but
importance does not make it ready. The absence of enough detail is the reason to rank it below
better-understood work, not a reason to keep expanding it during V1.

### V1 boundary

V1 reviews and delivers the current editorial proof. It may preserve only the minimum T6 boundary
needed to prevent accidental scope:

- T6 is beyond V1 and does not block completion of the T1–T5 editorial flow;
- no T6 event, stored state, result vocabulary, external-authority selector, reconciliation path,
  route-activation predicate or migration is a V1 requirement;
- the optional T6 layout position is a non-operative placeholder and cannot satisfy assurance,
  external acceptance, Delivery or route readiness;
- real-world manual work remains outside the system and is not represented as app-generated evidence;
- current retraction, amendment and publication rules remain governed by their existing specifications
  and are not rewritten as T6 behavior.

The five previously open T6 questions are now **deferred with the backlog item**, not unresolved V1
decisions:

1. manual reconciliation in a future increment;
2. minimum evidence for offline/manual reconciliation;
3. T6 result vocabulary and storage ownership;
4. jurisdiction and applicable-authority selection;
5. digital-route activation versus a future manual-evidence bridge.

Draft 12 should name the deferral and its `Ready when` condition once, then stop. It must not answer,
allocate or propagate these questions through current Product, Fn_Spec, data or UX requirements.

### Parent-first Lane A correction plan

1. **Parent — backlog disposition:** replace current Draft 12 T6 design work with one
   `BACKLOG-T6-ASSURANCE` deferral statement, bottom ranking and explicit `Ready when` condition.
2. **Current feature boundary:** remove functional T6, manual reconciliation and GRC-route activation
   from `AUTH-F1`; keep `AUTH-F1` limited to the V1 editorial proof already clarified.
3. **Retire premature identifiers:** mark `FEAT-T6-ASSURANCE` and `AUTH-T6-ASSURANCE` as historical
   proposals, not current plan vocabulary. Do not mint their replacements during V1.
4. **Remove premature detail:** move the five questions above out of Draft 12's current decision and
   acceptance gates. Preserve them only as deferred refinement prompts under the one backlog key.
5. **Negative V1 proof:** add only the searches/assertions needed to show that no functional T6,
   schema, event, route dependency or manual-reconciliation contract entered V1.
6. **No duplicate backlog:** keep the disposition in B-071 and the accepted owning Product backlog
   location when Lane A propagates it; do not create another handoff or backlog document.
7. **Evidence last:** after all B-071/Draft 12 source corrections settle, update the existing tracked
   graph node, rebuild once, re-merge the curated layer and hand the same pushed commit to Lane B.

### What remains unclear now

No T6 product-design clarification blocks V1. Only two tracking questions remain for Lane A to make
explicit in Draft 12:

1. which existing Product backlog table/anchor will own the single
   `BACKLOG-T6-ASSURANCE` pointer; and
2. whether the inert T6 UI location is already owned by the current UX plan or needs only a reference
   to the backlog item—never a new T6 UX artifact in V1.

Neither question authorizes feature refinement. If the owning anchor is already clear under `D-29`,
Lane A should use it without creating a second record.

### Guaranteed failures if this scope cut is not applied

- Continuing to answer the five deferred questions consumes V1 time on the lowest-ranked item and
  repeats the drafting loop the Judge stopped.
- Calling manual business work a V1 “manual fallback feature” silently pulls offline storage,
  reconciliation and evidence capture into the current build.
- Keeping `AUTH-T6-ASSURANCE` in the current dependency diagram makes an unrefined post-V1 item look
  like an approved prerequisite.
- Deleting T6 instead of deferring it loses a global business capability and guarantees the same
  explanation must be reconstructed later.
- Recording the same item in B-071, a new handoff and a separate backlog file creates three statuses
  that will drift.
- Treating “not applicable for V1” as “the external workflow does not apply” confuses product scope
  with real-world legal/regulatory responsibility.

### V1 success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `T6-DEFER-SC1` | Draft 12 is reviewed | T6 scope is traced | One `BACKLOG-T6-ASSURANCE` deferral is present; no final feature or authorization ID is asserted |
| `T6-DEFER-SC2` | The V1 editorial proof is evaluated | T1–T5 completion is checked | T6 capability, external evidence and manual reconciliation are not prerequisites |
| `T6-DEFER-SC3` | The five detailed T6 questions are searched | Their lifecycle is checked | Each is deferred under the one backlog item and absent from V1 acceptance gates |
| `T6-DEFER-SC4` | The T6 UI location is inspected | A user tries to act | It is inert and truthfully labelled; it writes no T6 state, event or evidence |
| `T6-DEFER-SC5` | The business operates without the app | Manual work occurs | The work can continue outside the product; V1 makes no claim that it captured or completed it |
| `T6-DEFER-SC6` | Backlog refinement is considered | T6 ranking is read | It remains below the top-five window until the Chief Editor explicitly promotes it |
| `T6-DEFER-SC7` | Repository scope is inspected | T6 terms are searched | No new T6 Fn_Spec, UX spec, schema, migration, route activation or duplicate backlog artifact exists |
| `T6-DEFER-SC8` | Future refinement begins | The item is promoted | Only then are feature identity, authorization checkpoint, dependencies, evidence and jurisdiction questions decided |

### Approve/reject gate for the scope cut

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Business continuity | Manual means work continues outside my-editorial-app; it is not a V1 system feature | Preserve as business context |
| **Approve** | Backlog disposition | `BACKLOG-T6-ASSURANCE` is beyond V1, bottom-ranked and outside the top-five refinement window | Product backlog pointer plus `Ready when` |
| **Reject** | Detailed T6 review in V1 | The five questions are deferred, not current blockers | Future backlog refinement only |
| **Reject** | Current `FEAT-T6-ASSURANCE` / `AUTH-T6-ASSURANCE` use | Prematurely presents an unrefined item as a buildable/authorizable packet | Historical proposal; assign later if promoted |
| **Reject** | Manual reconciliation in V1 | “Manual” describes business independence from software, not a requested app capability | No Product/Fn_Spec/data/UX requirement |
| **Defer** | T6 feature design and authorization owner | No details are required until the item enters the top-five refinement window | Chief Editor promotion and separate authorization |
| **Defer** | Build, route activation and implementation | Planning only; `D-171` remains binding | After future refinement and explicit authorization |

## Lane B guide — backlog handling, T6 commercial dimension and V1 closure

### Rewritten task

Give Lane A one repeatable, parent-first procedure for handling backlog items from their originating
handoff through ranking, refinement, authorization, execution and closure. Apply it to the global T6
assurance item without refining that bottom-ranked item. Record how its future commercial workflow
relates to the existing `NG-03` monetization exclusion, and state what freezes versus survives when
V1 closes. Do not reopen the completed B-072-and-later review packet, create a second backlog, design
T6, or build anything.

### Existing rules this guide joins rather than repeats

- `docs/README.md` §“How a request becomes execution” owns the request-to-evidence promotion map.
- `docs/handoff/` owns the originating feedback/defect record and its response lifecycle.
- `Modular_PRD.md` §2.5 and §2.5.1 own living post-V1 Product backlog state and `Ready when` rules.
- `V1-BUILD-SPEC.md` §6 owns the frozen snapshot of what V1 excluded and points to the living tier.
- `V1-PHASE-CLOSURE.md` owns the live lane state and requires terminal dispositions before phase
  closure; a healthy deferred backlog is not a failed sprint.
- `V1-DECISION-REGISTER.md` records a Judge decision when an item is actively decided or rechecked.

These records hold different facts. Linking them is required; copying one status or full rationale
into all of them is the drift mechanism.

### Identifier correction — do not create two T6 backlog items

An earlier B-071 section already uses `BACKLOG-ASSURANCE-01` as a Draft-11 success-criterion ID. The
later proposal `BACKLOG-T6-ASSURANCE` would look like a second backlog identity if propagated now.
Neither is yet a governed Product backlog row.

Lane A must first inspect the owning `Modular_PRD.md` §2.5 namespace and assign **one** row ID when it
records the deferral. Until that application, use the descriptive label **“T6 global assurance
backlog item”** in Draft 12. The historical criterion and later proposed key remain history; neither
is evidence that a living backlog row exists.

### T6 is one global offering with separate capability and commercial axes

“Global Feature” means one reusable assurance offering that may later serve different jurisdictions,
external institutions and customers. It has two axes that must stay separate:

| Axis | Future concern | V1 treatment |
|---|---|---|
| Assurance capability | Conditional T6 workflow, evidence, jurisdiction/institution binding, UI and audit behavior | Bottom-ranked post-V1 backlog; not refined |
| Commercial workflow | Offer/package, client engagement, price/contract, entitlement and payment confirmation | Business workflow may remain manual/external; no in-app monetization under `NG-03` |

Revenue is a business activity, not an article state or editorial gate. The T6 assurance outcome
must never depend on whether a client paid. Conversely, selling access to the future capability does
not prove assurance occurred for an article.

Do not create a T6-specific payment backlog. Link the T6 backlog row to the existing `NG-03` rule:

- capability refinement may be considered when the Chief Editor promotes T6 into the top five;
- any **in-app monetization** additionally requires the Charter's `NG-03` condition to be lifted;
- lifting `NG-03` removes a prohibition but still does not authorize a product or build—an approved
  feature/commercial packet is also required;
- external/manual contracting, invoicing or payment remains outside my-editorial-app unless that
  later packet explicitly brings a bounded part into the product.

### Lane A backlog procedure — one item, one fact owner at each step

| Step | Lane A action | Canonical record | Stop/done condition |
|---:|---|---|---|
| **1 — locate** | Start from the originating handoff or Register gap; search for existing aliases and successors before naming anything | Originating `B-*`/`C-*` or Register gap | One origin identified; no duplicate item created |
| **2 — classify** | Compare the request with the frozen Project PRD/Charter and apply `D-29` to find the owning derived tier | Origin response; Register if a frozen-source change is needed | In-baseline owner named, or named gap/change request recorded and work stops |
| **3 — scope by version** | Decide current-version work versus post-version backlog | Register decision when Judge action is required | The item is either in an authorized version or explicitly beyond it—never both |
| **4 — register living backlog** | For post-V1 Product work, add one minimal row to `Modular_PRD.md` §2.5: one ID, outcome, rationale, origin link, rank, `Ready when`, and governing dependencies | `Modular_PRD.md` §2.5 | One living row exists; handoff and V1 files point to it rather than restating it |
| **5 — order** | Place the item relative to the Chief Editor's top-five refinement window | Same living row/order | Top-five items may be refined; lower items keep only minimum durable context |
| **6 — respond** | In the origin, record what was decided, the owning living row and what is deliberately not refined | Originating handoff | `Acknowledged` is not used as closure; the actual disposition is visible |
| **7 — snapshot the version** | Record only that V1 excludes/defers the item and link to the living condition | `V1-BUILD-SPEC.md` §6; Register propagation if the Judge decision requires it | V1 snapshot is accurate without copying mutable rank/details |
| **8 — close the version** | Require every V1 handoff to have a terminal disposition; use `Deferred` with `Follow-up-Tier` for valid future work | Originating handoff and Phase Closure evidence | No V1 item remains merely Open/Answered/Applied when V1 claims closure |
| **9 — freeze** | Freeze the V1 tracking set; do not edit it when future priority changes | `docs/v1/V1-*.md` | Later changes occur in living `Modular_PRD`, a later version set, or a new decision |
| **10 — promote later** | Only when `Ready when` is met and the Chief Editor moves the item into the top five, refine outcome, slices, dependencies, risks and acceptance criteria | Living backlog row, then Register/feature group | Reviewable feature group exists; no build permission inferred |
| **11 — authorize and execute** | Apply the existing D-186 sequence: Judge act, bounded packet/DoD, Active lane, work, evidence, independent verification | Register → Build Spec/work order → work product → origin | Each transition has its own evidence; no approval inheritance |
| **12 — synchronize last** | Rebuild Graphify after the settled source commit, re-merge curated fragments and independently review the same pushed revision | Graph evidence; lifecycle remains in origin | Source, tracked semantics and analyzed commit agree |

### T6 application of the procedure

1. **Origin:** B-071 remains the source of the T5/T6 clarification and review history.
2. **V1 disposition:** T6 capability and its monetization dimension are beyond V1; neither blocks
   the current editorial proof.
3. **Living Product owner:** Lane A should add one minimal T6 global-assurance row to
   `Modular_PRD.md` §2.5, after choosing its non-colliding ID.
4. **Rank:** bottom of backlog, outside the top-five refinement window.
5. **Ready when for capability refinement:** Chief Editor explicitly promotes the item into the top
   five and authorizes refinement.
6. **Additional Ready when for in-app monetization:** `NG-03` is amended at Charter level **and** a
   separate bounded Product/commercial scope is authorized. Neither condition substitutes for the
   other.
7. **No present decomposition:** do not create assurance, jurisdiction, reconciliation, entitlement,
   billing or payment child items until promotion. Record the commercial dimension as a dependency,
   not a drafted workflow.
8. **B-071 closure:** once every current B-071/Draft-12 defect is applied and independently Verified,
   the handoff may close while the T6 Product item remains Deferred in the living backlog. Future
   work follows the living row; it does not reopen frozen V1 merely because priority changes.

### What happens at V1 closure

| Record | V1-close treatment | After V1 |
|---|---|---|
| B-071 | Close only when current corrections are independently Verified and the T6 deferral points to its living owner | Preserve as immutable origin/history; do not use it as the mutable rank |
| B-072 and later reviewed handoffs | Preserve their actual terminal outcomes; do not re-review or relabel them as a group | Reopen only through a new evidenced finding or explicit successor |
| `V1-DECISION-REGISTER.md` | Record the accepted V1 scope/deferral decision and propagation evidence | Freeze with V1; later decisions cite it without rewriting it |
| `V1-BUILD-SPEC.md` §6 | Snapshot: T6 global assurance and in-app monetization are outside V1; point to living backlog rules | Freeze; never update its rank |
| `V1-ARTIFACT-INVENTORY.md` | Unaffected unless an actual file is created or retired | Do not add a proposed feature ID as though it were a file |
| `V1-PHASE-CLOSURE.md` | Close only on terminal handoff dispositions and the other declared closure evidence | Does not become the Product backlog |
| `Modular_PRD.md` §2.5 | Own one T6 backlog row, ranking, `Ready when`, origin and `NG-03` dependency | Remains editable; this is where promotion/refinement occurs |
| Fn_Spec/data/UX specs | Unaffected by an unrefined bottom-ranked item | Created or extended only after later authorization |
| Graphify | Represent the settled V1 disposition and links, not a speculative future design | Update after future source changes, never ahead of them |

### What is unclear

1. The exact non-colliding row ID Lane A should assign in `Modular_PRD.md` §2.5 after checking its
   existing namespace.
2. Whether the T6 capability could later be built without in-app monetization. The safe planning
   default is **yes**: capability and commercial enablement are separate axes, and `NG-03` gates only
   the in-app monetization part.
3. Whether the inert T6 layout reference needs any V1 UX change. The safe default is a link/label
   only; no new T6 UX artifact.

Only the first and third affect the future documentation write set. None blocks V1 or authorizes
T6 refinement.

### Guaranteed failures

- Storing future backlog rank only in `V1-*` files loses the item when those files freeze.
- Keeping the handoff Open solely because the deferred Product feature is unfinished prevents V1
  closure forever; deferral with an owner is the terminal treatment.
- Closing B-071 before its current defects are independently Verified hides unfinished V1 work behind
  the T6 deferral.
- Refining every handoff regardless of rank turns the backlog into an infinite design queue and again
  delays the current editorial proof.
- Combining T6 assurance and monetization makes payment appear to authorize, complete or invalidate
  an editorial assurance judgment.
- Treating `NG-03` being lifted as build authorization repeats the exact two-condition defect already
  corrected by the Product backlog rules.
- Creating a T6 payment item duplicates the existing monetization exclusion and produces competing
  `Ready when` conditions.
- Rewriting frozen V1 records when T6 is later promoted destroys the historical V1 scope baseline.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `BACKLOG-GUIDE-SC1` | A new handoff arrives | Lane A processes it | One origin is found, one owning tier is selected and no second backlog artifact is created |
| `BACKLOG-GUIDE-SC2` | A post-V1 Product item is classified | V1 closes | Its origin is terminally dispositioned, V1 contains a frozen pointer/snapshot and living rank remains in `Modular_PRD.md` |
| `BACKLOG-GUIDE-SC3` | A lower-ranked item lacks detail | Refinement is considered | It stays outside the top five with a `Ready when`; missing detail does not trigger immediate design |
| `BACKLOG-GUIDE-SC4` | B-071 reaches closure review | Its current and deferred concerns are separated | Current Draft-12 corrections are independently Verified; T6 remains Deferred without keeping B-071 Open |
| `BACKLOG-GUIDE-SC5` | The global T6 offering is reviewed | Assurance and commerce are traced | Assurance outcome is independent of payment; commercial enablement links to `NG-03` without duplicating it |
| `BACKLOG-GUIDE-SC6` | In-app monetization is proposed later | Readiness is checked | Both the Charter prohibition is lifted and separate Product/commercial scope is authorized |
| `BACKLOG-GUIDE-SC7` | V1 is frozen and T6 is later promoted | Records are updated | Living/later-version records change; frozen V1 and historical handoffs do not |
| `BACKLOG-GUIDE-SC8` | Graphify is presented as closure evidence | Currency is checked | The analyzed and curated graph describe the same settled pushed source revision |

### Approve/reject gate for this guide

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Backlog lifecycle | Origin → living Product backlog → V1 snapshot → later promotion uses one fact owner per stage | Lane A Draft 12 and D-186 pointer refinement |
| **Approve** | V1 closure treatment | A properly owned T6 deferral does not keep B-071 or V1 open after current defects are Verified | Phase-closure evidence |
| **Approve** | T6 commercial relationship | One global assurance offering may have a future commercial workflow, but assurance and payment remain independent | Living Product backlog dependency |
| **Approve-with-conditions** | In-app monetization | Requires both `NG-03` amendment and separate Product/commercial authorization | Post-V1 refinement |
| **Reject** | Immediate T6 decomposition | Bottom-ranked work remains minimally recorded until promoted | No current child backlog items |
| **Reject** | New monetization backlog | Existing `NG-03` owns the in-app monetization constraint and return condition | Link, do not duplicate |
| **Reject** | Frozen V1 as living backlog | V1 tracking is a historical snapshot after closure | `Modular_PRD.md` §2.5 owns living state |
| **Defer** | T6 feature ID, commercial model, data/UX and implementation | Not in the top-five refinement window | Chief Editor promotion and later authorization |

## Judge correction — NG-03 is the V1 constraint; T6 assurance and in-app monetization are two post-V1 features

### Correction to the preceding commercial linkage

The preceding guide incorrectly made the future in-app monetization feature a dependency inside the
T6 backlog item and treated `NG-03` as though it owned that feature's living backlog state.

The corrected model has three separate objects:

| Object | Type | Lifecycle |
|---|---|---|
| `NG-03` | V1 Non-Goal/constraint: do not build monetization in V1 | Preserved in the V1 scope history; not a future feature identity |
| T6 global assurance | Post-V1 Product backlog feature | Separately identified, ranked and refined only after promotion |
| In-app monetization | Post-V1 Product backlog feature | Separately identified, ranked and refined; not a T6 child or assurance outcome |

`NG-03` explains why monetization was excluded from V1. It does not define what the future
monetization product does, give that product a backlog rank, or authorize it when V1 closes. The
general `D-148`/`D-150` lesson remains valid—a prohibition ending and scope being authorized are
different acts—but Lane A must not use the V1 prohibition as the future feature's identity.

### Normalized business/product semantics

- **Revenue** remains a business outcome/activity.
- **In-app monetization** is a possible software capability supporting the commercial workflow—for
  example packaging, entitlement, payment confirmation or billing integration—but its exact scope is
  not yet refined.
- **T6 global assurance** produces and evidences an assurance judgment. It remains valid regardless
  of price, entitlement or payment.
- **Commercial engagement** may sell access to T6 or another product capability. A sale does not
  satisfy T6, and T6 completion does not prove payment.

This distinction narrows the existing `D-04` phrase “revenue is a business activity, never a product
feature”: revenue itself is not a feature, while later software that enables an in-app commercial
workflow can be. Lane A must record that semantic clarification in the Decision Register before a
derived tier uses “In-app monetization” as a Product backlog feature.

### Two living backlog rows, not one parent/child bundle

Lane A must allocate two non-colliding Product backlog IDs in `Modular_PRD.md` §2.5 after checking
the existing namespace. This handoff does not mint them.

| Backlog row | Minimum durable content now | Rank/readiness now |
|---|---|---|
| T6 global assurance feature | Global capability; conditional GRC use; manual business workflow continues without the app; B-071 origin; beyond V1 | Bottom; outside top five; refine only after explicit Chief Editor promotion |
| In-app monetization feature | Separate software-enabled commercial capability; beyond V1; independent of assurance judgment; historical `NG-03` and `B-008` links | Post-V1 and not refinement-ready; exact rank requires a separate Chief Editor ordering decision |

The monetization row must cross-reference `B-008` before Lane A creates it. `B-008` records a
particular built POC commercial model—cart, provider config, drains, account claiming and portal—as
**not adopted**. It is historical design evidence, not the automatic definition of the new feature.
Lane A must state whether the future row supersedes, selectively reuses, or excludes that old shape;
silence will let the rejected design return by implication.

The two rows may later be related commercially, but neither is the other's parent:

```text
Post-V1 Product backlog
   ├── T6 global assurance capability
   │      outcome: assurance service and evidence
   └── In-app monetization capability
          outcome: software-supported commercial transaction/access

Possible future link: monetization may sell/entitle access to T6
Forbidden link: payment decides, authorizes or proves a T6 judgment
```

### Parent-first Lane A correction plan

1. **Decision parent:** record the Judge clarification that `NG-03` is a V1 constraint and the two
   post-V1 capabilities are separate. Narrow the over-broad `D-04` wording without rewriting its
   historical body: revenue is a business activity; an in-app monetization capability may be a
   future Product feature.
2. **Identity child:** inspect `Modular_PRD.md` §2.5 and allocate one non-colliding row ID to T6 and
   another to in-app monetization. Retire the B-071 provisional aliases from current plan text; keep
   them only as historical analysis.
3. **T6 row child:** record T6's bottom rank, outside-top-five status, B-071 origin and Chief Editor
   promotion condition. Do not add feature detail.
4. **Monetization row child:** record beyond-V1 status and a `Ready when` that requires its own Chief
   Editor promotion/refinement authorization. Do not infer its rank from T6 and do not use `NG-03`
   itself as the row.
5. **Historical crosswalk child:** cite `NG-03` only as V1 exclusion history and `B-008` only as a
   non-adopted prior shape. State the future row's treatment of `B-008`; do not resurrect its fields.
6. **V1 snapshot child:** keep `NG-03` in the frozen V1 record as “not built in V1.” Point to the two
   living post-V1 rows without copying their mutable rank or details.
7. **B-071 lifecycle child:** keep B-071 as the origin of T6 clarification. Its current defects still
   require independent verification; the separately owned future rows do not keep it Open afterward.
8. **Evidence last:** update the existing graph nodes only after the Register, living backlog and V1
   snapshot agree; rebuild once and hand the same pushed revision to independent review.

Because the parent decision changes the meaning previously assigned to `D-04`, `D-148` and `D-150`,
Lane A must apply the Register correction before editing `Modular_PRD.md` or the V1 snapshot. A child
row written first would contradict the current Register even if its product distinction is sensible.

### What is unclear

1. The two final Product backlog row IDs. Lane A should select them from the owning namespace; this
   is an administrative naming task, not feature refinement.
2. The in-app monetization feature's backlog rank. The Judge has placed it beyond V1 but has not
   placed it relative to the top-five window; the safe state is `Unranked — not refinement-ready`.
3. Whether the future in-app monetization feature will serve only T6, several global features, or the
   product generally. This is deliberately deferred until that row is promoted.
4. Which parts, if any, of `B-008` may be reconsidered. “Not adopted” remains binding until a later
   decision names an allowed subset.

None of these questions blocks V1. Lane A must not convert `Unranked` into “bottom” or turn a cross-
reference into a dependency without a Judge decision.

### Guaranteed failures if NG-03 remains conflated with the feature

- When V1 freezes, the future monetization feature loses its mutable rank and refinement state because
  its identity exists only as a historical exclusion.
- Ending V1 appears to authorize monetization automatically, although no future Product scope has
  been accepted.
- T6 and monetization inherit one rank and one `Ready when`, so promoting either silently promotes
  both.
- Payment becomes an assurance prerequisite or assurance becomes payment evidence, corrupting both
  business controls.
- `B-008`'s rejected cart/provider/drain/portal design returns as if it were approved future scope.
- Lane A writes one combined backlog row and later cannot close or split it without another
  supersession round—the same two-condition defect `D-150` already identified.
- Editing only `Modular_PRD.md` before the Register clarification creates a derived-tier conflict that
  `D-58` resolves against the edit.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `T6-MON-SC1` | V1 scope is inspected | `NG-03` is read | It says what V1 did not build; it is not presented as either future feature's ID or rank |
| `T6-MON-SC2` | The living Product backlog is inspected | T6 and monetization are traced | Two rows with different IDs, outcomes, ranks and `Ready when` conditions exist |
| `T6-MON-SC3` | T6 is promoted later | Dependencies are evaluated | Monetization is not automatically promoted, authorized or required |
| `T6-MON-SC4` | Monetization is promoted later | Product scope is evaluated | T6 scope and assurance results remain unchanged |
| `T6-MON-SC5` | Payment or entitlement evidence exists | An assurance decision is evaluated | It cannot satisfy, authorize or alter the T6 judgment |
| `T6-MON-SC6` | `B-008` is traced | Future monetization scope is drafted | Its non-adopted design stays excluded unless a later decision explicitly names a reused part |
| `T6-MON-SC7` | V1 closes | Later backlog state changes | The V1 `NG-03` snapshot stays frozen while both living rows may be reordered independently |
| `T6-MON-SC8` | Lane A propagates the ruling | Tier order is reviewed | Register correction precedes the two Product rows and the final graph sync describes the same source |

### Approve/reject gate for the NG-03 correction

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | V1 scope | `NG-03` remains the historical V1 “do not build” constraint | V1 snapshot/freeze |
| **Approve** | Post-V1 Product backlog | T6 global assurance and in-app monetization are two separately tracked features | Lane A Register parent, then two living rows |
| **Approve** | Semantic correction | Revenue is a business outcome; software-enabled in-app monetization may be a Product feature | Narrow `D-04` in the Register |
| **Approve-with-conditions** | Monetization backlog row | Beyond V1 is decided; rank and eventual market/product breadth are not | Record `Unranked — not refinement-ready` until Judge ordering |
| **Reject** | `NG-03` as future feature identity | A V1 constraint cannot carry a future feature's scope and mutable rank | Preserve as history only |
| **Reject** | Monetization as a T6 child | Commercial enablement and assurance capability have independent outcomes and promotion paths | Two sibling Product rows |
| **Reject** | `B-008` as adopted future design | Its built commercial model remains explicitly not adopted | Historical cross-reference only |
| **Defer** | Both feature designs and implementations | Neither is in an authorized refinement/build packet | Post-V1 promotion and separate authorization |

---

## Independent review of `D-187` — a V1 Non-Goal is not a post-V1 feature gate

### Rewritten task

Independently review pushed commit `013751b` and `D-187` against the frozen
`docs/PRD.md` **Non-goals (v1)** section, the frozen Charter's **Deliberately NOT in v1**
section, and every current `NG-01`–`NG-11` row. Preserve `D-187`'s valid separation of T6,
monetization software, revenue and `D-04`; identify where a version-scoped exclusion is still
being used as a living feature gate; classify every `NG-*` as a V1 boundary, a separately named
future capability, or a standing constraint; then give Lane A one parent-first correction plan.
This is independent review and a draft fix only. It authorizes no governed-tier edit, feature
refinement, build, lane transition or deployment.

### What happened

Lane A applied `D-187` at pushed commit `013751b`. Git and Graphify were checked independently:
local `HEAD`, `origin/docs/journal-2026-08-16`, and
`.graphify/branch.json.lastAnalyzedHead` all equal that revision; Graphify reports `stale: false`.
The application correctly created separate Product backlog identities for T6 global assurance
(`PBL-01`) and in-app monetization (`PBL-02`) and correctly retained `D-04` as an
editorial-independence rule.

The remaining defect is temporal. The highest-precedence frozen Project Requirements Document
places mobile, multi-team accounts, monetization, Facebook/RSS automation, multi-language,
bookmarklet, notifications and Proposer/Critics/Judge under **Non-goals (v1)**. The frozen Charter
likewise introduces the same items as **Deliberately NOT in v1**. Those headings define the scope
horizon: the exclusions are operative while V1 is being selected, built and closed; after V1 they
remain historical evidence of what V1 did not contain. They do not automatically become perpetual
prohibitions or the identities of future features.

### Primary goal

Keep three different records separate:

| Record | Question it answers | Lifecycle |
|---|---|---|
| **V1 Non-Goal** | What must not be built as part of V1? | Operative during V1; historical after V1 closes |
| **Named Product backlog capability** | What future outcome might the Product later provide? | Living, rankable and refinable outside the frozen V1 snapshot |
| **Standing guardrail** | What behavior remains forbidden regardless of version? | Continues until an authority explicitly changes the rule |

An exclusion does not “return.” A separately identified capability may later be promoted. Ending a
version does not authorize that capability; it only ends the version boundary. A fresh Product
decision and build authorization remain necessary.

### Findings

| ID | Finding | Why it fails | Smallest correction |
|---|---|---|---|
| `B071-R84` | `D-187` calls `NG-03` a “standing” and “live, not historical” exclusion and makes a direct Charter amendment its post-V1 prohibition-lift condition | This contradicts the scope horizon stated by both frozen sources: **(v1)** / **NOT in v1**. It lets a V1 snapshot govern later versions as though it were a permanent ban | Append a Register correction: `NG-03` is live **during V1** and historical after V1 closes. A Charter amendment is required only to introduce monetization into V1. A later-version `PBL-02` still needs fresh Product and build authorization, but does not “lift” a completed V1 boundary |
| `B071-R85` | `D-148`/`Modular_PRD` §2.5.1 says “how a Non-Goal returns” and attaches cross-version `Ready when` state to the exclusion | It treats a negative V1 scope record as the positive future capability. Rank, readiness and acceptance criteria then drift with a record that must remain an immutable account of V1 | Rename the mechanism semantically: a Non-Goal remains the version snapshot; a **linked capability**, if one exists, owns living rank and `Ready when`. Keep the two-condition rule as “scope eligibility plus separate authorization,” without implying the V1 exclusion itself survives forever |
| `B071-R86` | `NG-02` still combines the V1 exclusion with a scoped client-account backlog candidate; its authorities conflict (`D-03`: no Charter act required; `D-148`: OD1–OD3 or Charter edit; Build Spec: “standing per D-79”) | Reviewers cannot tell whether V1 expiry, OD resolution, a Charter change, or a Product authorization makes the future account feature eligible | Keep `NG-02` as V1 history. If the `D-145` client-account capability remains wanted, give it a separate non-colliding `PBL-*` identity and its own readiness/authorization. Correct the `D-03`/`D-79`/`D-148` current-value summaries to one temporal rule |
| `B071-R87` | `NG-07` and `NG-08` are V1 Non-Goals but their rationales say “Deferred to Week 2–3” and “Deferred to Week 4–6” without saying whether those windows are inside or after V1 | If the weeks are inside V1, the same item is both prohibited and scheduled. If they are after V1, a date is being used as a feature identity and authorization | Treat both as V1 exclusions now. Preserve the week text as historical planning only until the Judge states whether either future capability is still wanted; only then create separate backlog identities. A date never authorizes scope |
| `B071-R88` | `D-187` says `V1-BUILD-SPEC.md` is unaffected, but §6 still states “Revenue is a business activity, never a product feature (`D-04`)” and calls `NG-02` standing | The first sentence attributes wording to `D-04` that `D-187` itself proves false; the second carries the temporal conflation. `D-54` propagation was therefore incomplete even though every check passed | Correct the two current-value §6 rows as V1 snapshots: quote `D-04` accurately, point monetization to `PBL-02`, and point any retained future account capability to its own living row. Do not copy mutable rank into the frozen V1 file |

### `NG-01`–`NG-11` classification

| ID | Current correct class | Separate future backlog object now? | Required treatment |
|---|---|---|---|
| `NG-01` | V1 scope boundary | **No** accepted positive capability found | Keep “no mobile app in V1”; do not invent a mobile backlog item |
| `NG-02` | V1 scope boundary | **Candidate exists** (`D-145` client account), but is embedded in the exclusion | Separate it into a `PBL-*` row only if the Judge retains that candidate; do not use `NG-02` as its identity |
| `NG-03` | V1 scope boundary | **Yes — `PBL-02`** | Keep V1 history; remove the claim that post-V1 promotion must lift a still-operative `NG-03`; retain separate Product/build authorization |
| `NG-04` | V1 scope boundary | **No** accepted positive capability found | Keep manual Facebook cross-posting for V1; Meta verification alone is neither scope nor authorization |
| `NG-05` | V1 scope boundary | **No exact positive capability accepted** | Keep “no real-time algorithm in V1.” Do not conflate it with `FB-05`/`Q9`, which concerns Reporter-gate AI tagging/scoring and is not automatically the same feature |
| `NG-06` | V1 scope boundary | **No** accepted positive capability found | Keep “no multi-language in V1”; no backlog row until requested and authorized |
| `NG-07` | V1 scope boundary with ambiguous historical date | **Undecided** | Clarify whether bookmarklet remains wanted after V1 before creating a backlog row |
| `NG-08` | V1 scope boundary with ambiguous historical date | **Undecided** | Clarify whether email/Slack notifications remain wanted after V1 before creating a backlog row |
| `NG-09` | V1 scope boundary | **Already separate — `OD4`** | Keep `NG-09` as V1 history and `OD4` as the future architecture/remedy with its existing two-branch trigger; do not create a duplicate `PBL-*` row |
| `NG-10` | Standing workflow guardrail | **No** | Keep the no-auto-advance rule independent of version. The future intelligence feature is `FB-05`/`Q9`; it must obey this guardrail |
| `NG-11` | Standing legal/compliance guardrail | **No accepted capability** | Keep the prohibition. A later fundraising/solicitation capability requires independent legal/compliance and Product authorization before it can become backlog scope |

### What is unclear

Only three bounded Product choices remain; none blocks the current V1 editorial proof:

1. Whether the `D-145` future client-account candidate remains wanted and therefore receives a
   separate `PBL-*` identity.
2. Whether bookmarklet and email/Slack notifications remain desired after V1. Their historical week
   labels do not answer that question.
3. Whether `NG-11` is intended as a permanent project prohibition or a legal-review gate. Until a
   later Judge and legal/compliance act says otherwise, the safe current reading is a standing
   prohibition and no Product backlog item.

No clarification is needed to correct `NG-03`: the Judge has now clarified that the frozen source's
V1 label controls. Do not ask whether `PBL-02` is a child of T6; `D-187` correctly answered that it is
not.

### Parent-first Lane A correction packet

| Order | Owner / target | Draft action | Depends on |
|---:|---|---|---|
| **1 — decision parent** | `V1-DECISION-REGISTER.md`, next available decision ID | Append the V1-horizon rule; partially supersede `D-148` and `D-187` only where they make a V1 exclusion a post-V1 prohibition/feature gate. Preserve `D-187`'s T6/monetization separation and exact `D-04` reading | Judge approval of this plan |
| **2 — classification child** | `Modular_PRD.md` §2.5 | Give every `NG-*` an explicit lifecycle class and optional linked-capability field using the matrix above. Do not turn every exclusion into a backlog feature | 1 |
| **3 — backlog-mechanism child** | `Modular_PRD.md` §§2.5.1–2.5.2 | Replace “Non-Goal returns” with “linked capability promotion.” `PBL-01` and `PBL-02` remain siblings. For `PBL-02`, V1 expiry removes the V1 boundary; later Product/build authorization remains mandatory | 1–2 |
| **4 — selected future identities** | `Modular_PRD.md` §2.5.2 | Add no row automatically. Add a client-account row only if choice 1 is approved; add bookmarklet/notification rows only if choice 2 confirms future intent | 1–3 plus the relevant Judge choice |
| **5 — V1 snapshot repair** | `V1-BUILD-SPEC.md` §6 | Correct the `NG-02` and monetization rows. Quote `D-04` accurately; describe exclusions as V1 boundaries; link to living capability rows without copying rank/readiness | 1–3 |
| **6 — B-071 / Draft 12** | this handoff and `V1-B071-CORRECTIVE-PLAN.md` | Integrate these findings into the existing packet; do not create a second handoff or a second backlog mechanism. Mark earlier contradictory B-071 analysis historical/superseded by link, not deletion | 1–5 |
| **7 — unaffected tiers** | `V1-ARTIFACT-INVENTORY.md`, Fn Specs, data/UX specs, Phase Closure | State unaffected: no file, behavior, schema, UX or lane state is created by classification alone | 1 |
| **8 — evidence last** | Git + Graphify + checks | Commit source corrections, push the settled revision, rebuild/re-merge Graphify, run the full suite, and have Lane B independently review that same revision. Do not use green structural checks as proof that prose semantics are correct | 1–7 |

### Guaranteed failures

- **Perpetual-V1 failure:** treating “not in V1” as “forbidden after V1” makes later Product planning
  depend on amending a version that has already frozen.
- **Automatic-promotion failure:** treating V1 closure as feature approval makes excluded ideas enter
  a later build without Product scope, acceptance criteria or authorization.
- **Negative-as-positive failure:** storing a future capability's rank inside `NG-*` makes “what V1
  omitted” the identity of “what a later product should do.”
- **Everything-is-backlog failure:** minting a `PBL-*` for every `NG-*` invents demand and fills the
  backlog with features nobody requested.
- **Hidden-feature failure:** leaving the real `D-145` account candidate inside `NG-02` makes it
  impossible to rank independently or close V1 cleanly.
- **Schedule contradiction:** leaving `NG-07`/`NG-08` both prohibited in V1 and dated within an
  unexplained delivery window guarantees incompatible plans.
- **False propagation success:** leaving Build Spec §6 unchanged lets a false `D-04` paraphrase and
  “standing” language survive while `D-187` claims the tier is unaffected.
- **Duplicate-control failure:** creating a new `PBL-*` for `OD4`, `FB-05`, or a standing guardrail
  produces competing owners and readiness conditions.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `NG-LIFE-SC1` | A reader opens either frozen source | They inspect the Non-Goals heading | Every inherited `NG-01`–`NG-09` is understood as a V1 scope boundary |
| `NG-LIFE-SC2` | V1 closes | An inherited Non-Goal is read later | It remains evidence of V1 scope and is not presented as a live feature ID, rank or build gate |
| `NG-LIFE-SC3` | A later capability is considered | Readiness is checked | It has its own positive identity, outcome, rank/readiness and separate Judge/build authorization |
| `NG-LIFE-SC4` | `PBL-02` is promoted after V1 | Its prerequisites are evaluated | No one claims the completed V1 boundary itself must be lifted; fresh Product and build authorization are still required |
| `NG-LIFE-SC5` | Monetization is proposed inside V1 | Scope is evaluated | The frozen V1 constraint must first be amended through the proper authority; promotion alone cannot bypass it |
| `NG-LIFE-SC6` | Every `NG-*` is traced | Its lifecycle is classified | Exactly one of V1 boundary, linked future capability, or standing guardrail applies; mixed rows are split |
| `NG-LIFE-SC7` | `NG-02`, `NG-07`, or `NG-08` is reviewed | Future intent is absent or undecided | No new backlog capability is invented |
| `NG-LIFE-SC8` | V1 Build Spec §6 is reviewed | `D-187` is traced | It quotes `D-04` accurately, contains no “standing” V1-exclusion claim, and points to living rows without copying mutable state |
| `NG-LIFE-SC9` | Graphify is claimed current | Independent review occurs | source, pushed revision, curated graph and analyzed revision match; semantic findings are checked against the text, not inferred from a green tally |

### What Lane B did instead

Reviewed only the pushed documentation revision and appended this one corrective packet to the
existing `B-071` origin. No governed tier, frozen source, implementation file, backlog row, rank,
feature, authorization or lane state was changed. The unrelated untracked `package-lock.json`
remains untouched.

### Approve/reject gate for this independent review

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | `D-187` / Product backlog | T6 and in-app monetization are separate sibling capabilities; `D-04` remains unchanged | Preserve in the correcting decision |
| **Approve-with-conditions** | `D-187` / Register and Product scope | Valid separation, but its NG-03 time horizon and Build-Spec applicability are wrong | Lane A applies `B071-R84`–`R88`, then Lane B re-reviews |
| **Approve** | V1 scope | `NG-01`–`NG-09` inherited from the frozen Non-Goals sections are V1 boundaries | Register parent, then derived-tier classification |
| **Reject** | Backlog ontology | A V1 Non-Goal as a perpetual post-V1 feature gate or living feature identity | Replace with linked-capability promotion |
| **Reject** | Automatic backlog creation | Not every `NG-*` represents accepted future demand | Create a living row only for a positively retained capability |
| **Defer** | Client-account, bookmarklet and notification feature identities | Future intent is not uniformly decided | Separate Judge choice after the classification parent |
| **Defer** | `B-071` terminal verification and `AUTH-DOC` | This review opens corrective work; it does not verify Lane A's correction | After application, graph sync and independent review |
| **Defer** | Product implementation | No build is authorized | Later Active-lane packet only |

---

## Structural follow-up — separate `NG-*` V1 tracking from `PBL-*` feature tracking

### Clarification received

The prior review's `B071-R84`–`R88` findings and `NG-01`–`NG-11` classification remain the
evidence base and are not repeated here. This clarification supplies the missing structural rule:

> The `NG-*` series records V1 exclusions. Feature tracking is a different object and uses a
> positive capability identity such as `PBL-*`. A V1 exclusion may be cited by a future feature as
> history, but it cannot own that feature's rank, readiness or authorization.

`docs/PRD.md` is not the file to fix. Its heading **Non-goals (v1)** already states the right scope
and the file is frozen. The defect was introduced downstream when `Modular_PRD.md` shortened the
heading to **Non-Goals**, placed mutable candidate/`Ready when` language inside `NG-02`/`NG-03`,
named §2.5.1 **how a Non-Goal returns**, and made the `PBL-*` rows subordinate to that mechanism.

### Additional findings

| ID | Finding | Guaranteed consequence | Draft fix |
|---|---|---|---|
| `B071-R89` | `Modular_PRD.md` §2.5 drops the source's `(v1)` qualifier | A version-bounded exclusion reads like a permanent Product rule | Rename the derived section to **V1 Non-Goals — scope snapshot** and state that `NG-01`–`NG-09` record V1 scope only; leave the frozen source untouched |
| `B071-R90` | `NG-02`/`NG-03` contain mutable feature-tracking data such as candidate scope and `Ready when` | The V1 record changes whenever future priority changes, so neither the V1 baseline nor the future backlog has one stable owner | Remove mutable feature state from the current-value interpretation of the `NG-*` rows. Move retained positive capabilities to separate `PBL-*` rows; keep only a link from the feature back to the V1 exclusion |
| `B071-R91` | §2.5.1 says a Non-Goal “returns,” and §2.5.2 says the Product backlog is governed by that return path | A negative statement becomes the parent of a positive feature, recreating the same conflation even after the rows receive different IDs | Replace the parent mechanism with **future-capability intake and promotion**. It governs `PBL-*`; `NG-*` is an input citation only. Rename `PBL-02`'s “Prohibition lift” field to **V1 relationship / scope eligibility**, so a completed V1 boundary is not represented as a live prohibition |

### Normalized ownership model

```text
Frozen customer source
  PRD.md — Non-goals (v1)
            │
            ▼ derives the V1 scope snapshot
Living Product requirements
  NG-* — what V1 excludes; no rank and no feature readiness
            │ historical citation only
            ▼
  PBL-* — positive future capability; owns rank, readiness and promotion
            │
            ▼ after a separate Judge/build authorization
  FR/US/AC + Fn_Spec + later-version build tracking
```

The relation is deliberately one-way: `PBL-*` may cite an `NG-*` to explain why the capability was
not in V1. `NG-*` never points forward as the capability's lifecycle owner. V1 closing satisfies the
version-horizon question; it does not satisfy the separate authorization question.

### Smallest parent-first correction plan

| Order | Target | Required change | Completion evidence |
|---:|---|---|---|
| **1 — Register parent** | `V1-DECISION-REGISTER.md` | Append one correction defining `NG-*` as V1 tracking and `PBL-*` as feature tracking. Partially supersede `D-148`/`D-187` only where they make the negative record own post-V1 lifecycle. Preserve `D-150` as the rule that scope eligibility and build authorization are separate acts | One current decision states the ownership rule and names retained/superseded clauses |
| **2 — V1 snapshot** | `Modular_PRD.md` §2.5 | Restore the `(v1)` horizon in the heading/current interpretation. Keep the existing `NG-*` IDs and their exclusion facts; remove future rank, candidate scope and mutable `Ready when` from their lifecycle role | Every row answers only “what was excluded from V1?” |
| **3 — feature mechanism** | `Modular_PRD.md` §§2.5.1–2.5.2 | Rename the procedure to future-capability intake/promotion and make it govern `PBL-*`. Replace “prohibition lift” with scope-horizon/eligibility language. Preserve `PBL-01`/`PBL-02` as siblings | Every `PBL-*` answers outcome, rank/readiness, origin and separate authorization; no `NG-*` owns those fields |
| **4 — mixed-row extraction** | `Modular_PRD.md` §2.5.2 | Move the retained `D-145` account candidate to a separate `PBL-*` only if the Judge confirms it remains wanted. Apply the existing `R87` decision gate before minting bookmarklet or notification features | No positive capability remains buried inside an `NG-*`; no unrequested capability is invented |
| **5 — frozen V1 tracking** | `V1-BUILD-SPEC.md` §6 | Describe `NG-02`/`NG-03` only as V1 exclusions and cite living feature identities separately. Correct the false paraphrase of `D-04`. Do not copy future rank or mutable readiness | The frozen V1 record says what V1 omitted and where later Product work is owned |
| **6 — existing packet** | `B-071`; `V1-B071-CORRECTIVE-PLAN.md` | Fold `R84`–`R91` into Draft 12. Mark earlier “Non-Goal returns” and post-V1 “prohibition lift” instructions superseded by link; do not create another handoff or backlog | One corrective packet, no duplicate SOP or competing ledger |
| **7 — explicitly unaffected** | `docs/PRD.md`; frozen Charter; Artifact Inventory; Fn/Data/UX specs; Phase Closure | No edit: no source requirement, repository artifact, behavior, schema, UI, or lane state changes from this classification | Unaffected tiers are named rather than silently omitted |
| **8 — evidence last** | Git, Graphify, checks, independent review | Commit and push the settled source correction; rebuild/re-merge Graphify; run the full suite; give Lane B the same revision for semantic review | source `HEAD` = upstream = analyzed revision, with Lane B confirming the ownership semantics rather than relying on a green structural tally |

### What is unclear

The structural correction itself is clear and needs no further Product decision. Only the future
feature choices already isolated by `R86`/`R87` remain open: whether the account candidate,
bookmarklet, or notifications are still wanted. Those choices must not delay correcting the
ownership model and must not be inferred from historical week estimates.

### Guaranteed failures

- Editing frozen `docs/PRD.md` would destroy the customer baseline while failing to correct the
  downstream ownership error.
- Leaving `(v1)` off the derived `NG-*` table makes all exclusions appear permanent.
- Leaving rank or `Ready when` inside `NG-*` lets later prioritization rewrite V1 history.
- Treating V1 closure as a “prohibition lift” makes a calendar/version event look like Product or
  build authorization.
- Moving every `NG-*` into `PBL-*` invents demand; moving none hides the real `D-145` candidate.
- Keeping §2.5.2 governed by “how a Non-Goal returns” preserves the category error even if every row
  is reworded.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `NG-SPLIT-SC1` | The frozen Project requirements are inspected | `## Non-goals (v1)` is read | The file is unchanged and remains the authoritative V1 exclusion source |
| `NG-SPLIT-SC2` | `Modular_PRD.md` §2.5 is opened | An `NG-*` row is read | It identifies only a V1 exclusion and carries no living rank, promotion state or feature authorization |
| `NG-SPLIT-SC3` | A future capability is retained | Its backlog state is inspected | A distinct `PBL-*` identity owns the positive outcome, rank/readiness, origin and authorization condition |
| `NG-SPLIT-SC4` | V1 closes | A future feature remains unbuilt | The `NG-*` snapshot becomes historical; the `PBL-*` remains living; neither event grants build permission |
| `NG-SPLIT-SC5` | `PBL-02` is reviewed | Its relationship to `NG-03` is traced | `NG-03` explains V1 exclusion only; fresh Product/build authorization governs later monetization |
| `NG-SPLIT-SC6` | An unrequested V1 exclusion is reviewed | No positive future decision exists | No `PBL-*` row is created |
| `NG-SPLIT-SC7` | The V1 Build Spec is checked | `D-04`, `NG-02`, and `NG-03` are traced | `D-04` is quoted accurately and no mutable future backlog state is copied into V1 tracking |
| `NG-SPLIT-SC8` | Closure evidence is presented | Graphify and Git are checked | The same pushed source revision is analyzed, and independent review confirms the semantic split |

### Approve/reject gate for the structural split

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Frozen Project requirements | `docs/PRD.md` already states the correct V1 boundary and must remain unchanged | Preserve |
| **Approve** | Tracking ontology | `NG-*` owns V1 exclusion history; `PBL-*` owns future feature lifecycle | Register parent, then Product/V1 propagation |
| **Approve-with-conditions** | `D-187` | Preserve its sibling-feature and `D-04` corrections; replace its post-V1 “prohibition lift” model | `R84`–`R91` correction packet |
| **Reject** | `Modular_PRD` current structure | “How a Non-Goal returns” as the parent mechanism for `PBL-*` | Replace with future-capability intake/promotion |
| **Reject** | Frozen-source edit | No change belongs in `docs/PRD.md` or the Charter | Correct derived tiers only |
| **Defer** | New account/bookmarklet/notification IDs | Positive future intent is not fully decided | Separate Judge backlog choice |
| **Defer** | Graphify synchronization and `B-071` verification | Source corrections have not landed | Final Lane A step, then independent Lane B review |
| **Defer** | Product implementation | Planning only; no build authorization | Later Active-lane packet |

---

## Judge clarification — a versioned `NG-*` points to the feature it excludes

### Correction to the previous structural follow-up

The previous section got the separation right and the relationship direction wrong. It said the
future `PBL-*` could cite an `NG-*` while the `NG-*` should not point forward. The clarified model is:

> A Non-Goal belongs to one version and records that the version excludes a stable feature or other
> object. Therefore the versioned `NG-*` points to the excluded object. The stable feature record
> does not need to repeat why every version excluded it.

Few-shot form:

```text
V9 scope
  └── V9/NG-99 — excludes → PBL-999
                       PBL-999 = IP assurance for a rocket-to-the-moon capability
```

This is an **exclusion edge**, not a build edge. `PBL-999` existing proves only that the feature has
a stable identity. It does not prove that V9 or any later version includes, ranks, refines or
authorizes it.

### Precise supersession of the preceding findings

| Prior statement | Current treatment |
|---|---|
| `B071-R89`: restore the V1 horizon in the derived Non-Goals section | **Retained** |
| `B071-R90`: remove positive capability scope/rank from `NG-*` | **Retained**, but its instruction to keep only a feature-to-NG link is superseded. `NG-*` owns the version-to-excluded-object link |
| `B071-R91`: `NG-*` is an input citation only and `PBL-*` owns all readiness | **Partially superseded.** `PBL-*` owns feature readiness; `NG-*` owns version-specific exclusion/reconsideration readiness |
| Earlier claim that no `PBL-*` should exist until future demand is separately confirmed | **Narrowed.** A minimal stable feature identity may be created for a feature explicitly named by a frozen Non-Goal. Identity is not demand, priority, refinement or authorization |

### New findings

| ID | Finding | Guaranteed consequence | Draft fix |
|---|---|---|---|
| `B071-R92` | The earlier handoff made the link `PBL → NG`; the Judge's model is `V*/NG → excluded object` | The feature would have to carry an ever-growing reverse list of version decisions, and the version record would not identify what it excludes | Store the directed edge on the versioned Non-Goal: `(version_id, ng_id) EXCLUDES excluded_object_id`. Do not duplicate the rationale in `PBL-*` |
| `B071-R93` | “Ready when” still carries two meanings | A condition that permits reconsideration inside V1 can be mistaken for global feature readiness or build authority | Split the fields: `NG.version_reconsideration_condition` answers “what would permit reconsideration in this version?”; `PBL.feature_readiness` and a separate authorization record answer “when may the capability be refined/built?” |
| `B071-R94` | The existing V1 feature exclusions mostly name prose, not stable excluded-object IDs | Cross-version comparison depends on text matching; renamed features appear new and one feature can receive several accidental backlog identities | Give every feature-shaped V1 Non-Goal an `excluded_object_id`. Use existing `PBL-02` for monetization and `ARCH-OD4` for OD4; allocate non-colliding minimal `PBL-*` identities for the other explicitly named feature concepts only after the Register parent approves the crosswalk |
| `B071-R95` | `NG-01` alone is not unique once V2/V9 can each have a Non-Goal series | Graph and document searches can join the wrong version's exclusion to a feature | Treat the canonical identity as the composite `(version_id, ng_id)`—for example `V1/NG-03`—while preserving the short display ID inside its version section |
| `B071-R96` | `NG-10` and `NG-11` are standing controls, not ordinary members of the frozen source's feature-exclusion list | Forcing them into `NG → PBL` creates fake features for prohibited behavior or makes permanent controls expire with V1 | Preserve their historical IDs but give their current rules control/policy owners: `NG-10` points to the existing `TC9`/O-01 no-bypass control; `NG-11` points to a separately governed legal/compliance policy. Neither requires a `PBL-*` unless a positive capability is later proposed |

### Normalized record shapes

| Record | Owns | Must not own |
|---|---|---|
| `V*/NG-*` | version ID; local NG ID; excluded object ID; version-specific reason; reconsideration/exception condition; closure with that version | global feature definition; global backlog rank; implementation authorization |
| `PBL-*` | stable positive capability identity; intended outcome; backlog rank/state; refinement readiness; Product owner | copied V1/V2 exclusion rationales; an implication that absence from an NG list means authorization |
| Authorization record | approved scope; bounded work; DoD; Active lane; evidence | inferred permission from either an `NG-*` or `PBL-*` row |
| `CTRL-*` / existing control ID | standing prohibited behavior and enforcement rule | a fictional future feature created only to make the table uniform |

Two rules prevent the linkage from becoming a new false shortcut:

1. **Not excluded is not included.** If `PBL-999` is absent from V10's Non-Goals, it is merely not
   excluded by that list. It still needs positive scope and build authorization.
2. **Identity is not priority.** Creating a minimal `PBL-*` identity because V1 names the feature
   does not place it in the top five, make it refinement-ready, or express current demand.

### V1 crosswalk shape — identifiers to be allocated by Lane A

| Versioned Non-Goal | Excluded object kind | Existing target or required action |
|---|---|---|
| `V1/NG-01` mobile app | Product capability | Allocate a minimal non-colliding `PBL-*` identity; default `Unranked / not refinement-ready` |
| `V1/NG-02` multi-team accounts | Product capability | Allocate a `PBL-*` identity that can contain the already-raised `D-145` client-account variant without putting that variant back into `NG-02` |
| `V1/NG-03` monetization | Product capability | `PBL-02` already exists |
| `V1/NG-04` automated Facebook publishing | Product capability | Allocate minimal `PBL-*`; Meta verification is an exclusion/reconsideration fact, not build authorization |
| `V1/NG-05` real-time trend detection | Product capability | Allocate minimal `PBL-*`; do not silently merge it with `FB-05`/`Q9` unless a decision proves they are the same capability |
| `V1/NG-06` multi-language support | Product capability | Allocate minimal `PBL-*` |
| `V1/NG-07` bookmarklet | Product capability | Allocate minimal `PBL-*`; keep the historical week estimate in V1 context only |
| `V1/NG-08` email/Slack notifications | Product capability | Allocate minimal `PBL-*`; keep the historical week estimate in V1 context only |
| `V1/NG-09` Proposer/Critics/Judge | Architecture/governance object | Link to existing `ARCH-OD4`; do not duplicate it as `PBL-*` unless later Product scope explicitly turns it into a Product capability |
| historical `NG-10` no auto-advance | Standing control | Link to existing `TC9`/O-01 control, not a new Product feature |
| historical `NG-11` no fundraising/solicitation | Standing policy | Assign a legal/compliance policy owner; no `PBL-*` without a separately proposed positive capability |

### Corrected parent-first Lane A plan

| Order | Target | Draft action | Depends on |
|---:|---|---|---|
| **1 — decision parent** | `V1-DECISION-REGISTER.md`, next available ID | Record the `V*/NG → excluded object` direction, the two readiness meanings, the composite NG identity, and “not excluded ≠ authorized.” Partially supersede `B071-R90`/`R91` and the affected `D-148`/`D-187` clauses; preserve their valid separation and `D-150` authorization rule | Judge approval of this plan |
| **2 — V1 exclusion crosswalk** | `Modular_PRD.md` §2.5 | Restore the V1 context and add `Excluded object ID` plus version-reconsideration semantics. Do not copy the feature definition or rank into the NG row | 1 |
| **3 — stable feature catalog/backlog** | `Modular_PRD.md` §2.5.2 | Keep `PBL-01`/`PBL-02`; allocate minimal, non-colliding identities for feature-shaped V1 exclusions. Mark identity-only additions `Unranked / not refinement-ready`; do not invent requirements or acceptance criteria | 1–2 |
| **4 — mechanism wording** | `Modular_PRD.md` §2.5.1 | Replace “how a Non-Goal returns” with two linked procedures: version exclusion/reconsideration for `V*/NG-*`, and feature intake/promotion for `PBL-*` | 1–3 |
| **5 — standing-control split** | Register and `Modular_PRD` current interpretation | Keep `NG-10`/`NG-11` as historical labels but route current control to the existing no-bypass control and a legal/compliance policy owner; do not force them into `PBL-*` | 1 |
| **6 — V1 tracking propagation** | `V1-BUILD-SPEC.md` §6 | Record which stable object each V1 exclusion concerns, without restating global feature rank/readiness. Correct the existing `D-04` paraphrase | 1–5 |
| **7 — existing correction packet** | `B-071`; `V1-B071-CORRECTIVE-PLAN.md` | Add a narrow supersession notice for `R90`/`R91`; retain the earlier evidence and classification instead of duplicating them | 1–6 |
| **8 — explicitly unaffected** | Frozen `docs/PRD.md`, frozen Charter, Artifact Inventory, Fn/Data/UX specs, Phase Closure | No edit unless an actual artifact, requirement, behavior, schema, UI or lane state is later authorized | 1 |
| **9 — evidence last** | Git, Graphify, checks, independent Lane B review | Commit/push settled source; rebuild and re-merge Graphify; review the same revision with negative searches for reverse links, duplicated rationale, unqualified cross-version NG IDs, and authorization inferred from absence | 1–8 |

### What remains unclear

No clarification is required for the relationship direction. Administrative identifiers for the
new minimal `PBL-*` records must be selected from the live namespace by Lane A. One substantive
question remains for `NG-11`: which legal/compliance policy record owns the standing prohibition.
That owner can be decided separately and does not block correcting the feature-exclusion model.

### Guaranteed failures

- A bidirectional `NG ↔ PBL` narrative duplicates the same reason and guarantees textual drift.
- An unqualified `NG-03` collides when another version has its own `NG-03`.
- One `Ready when` field lets a V1 exception masquerade as feature or build readiness.
- Treating absence from V10 Non-Goals as inclusion authorizes scope by silence.
- Creating full requirements for every excluded feature turns stable identity assignment into
  unauthorized refinement.
- Forcing `NG-10`/`NG-11` into feature IDs converts standing controls into optional backlog work.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `NG-LINK-SC1` | A feature is excluded from one version | Its Non-Goal is inspected | The version-qualified NG row names exactly one stable excluded-object ID |
| `NG-LINK-SC2` | The same feature is considered in another version | Its feature record is opened | The feature identity and definition remain stable; the earlier version reason is not copied into it |
| `NG-LINK-SC3` | `PBL-02` is absent from a later version's Non-Goal list | Scope is evaluated | No inclusion, refinement or build permission is inferred |
| `NG-LINK-SC4` | A version exception is considered | Readiness is checked | The NG reconsideration condition is evaluated separately from PBL feature readiness and authorization |
| `NG-LINK-SC5` | A feature-shaped V1 Non-Goal exists | The crosswalk is reviewed | It resolves to a `PBL-*` identity marked identity-only/unranked unless separately promoted |
| `NG-LINK-SC6` | `NG-09`, `NG-10`, or `NG-11` is reviewed | The excluded object is classified | Existing architecture/control/policy identity is used; no duplicate Product feature is invented |
| `NG-LINK-SC7` | V1 closes | Tracking is frozen | `V1/NG-*` remains historical; `PBL-*` remains living; authorization remains a separate record |
| `NG-LINK-SC8` | Graphify is synchronized | The relation is queried | Direction is `V*/NG → excluded object`; no reverse rationale duplication or authorization edge exists |

### Approve/reject gate for the clarified linkage

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | V1 tracking ontology | `V*/NG-*` points to the stable object excluded from that version | Register parent and crosswalk |
| **Approve** | Product feature tracking | `PBL-*` owns stable feature identity and feature readiness, without repeating version exclusion reasons | Product backlog normalization |
| **Approve-with-conditions** | Minimal PBL identities | Feature-shaped frozen Non-Goals may receive identity-only rows; identity must not imply demand, rank, refinement or authorization | Lane A namespace allocation and independent review |
| **Reject** | Previous `PBL → NG` direction | It reverses the context root and duplicates version history | Superseded by `B071-R92` |
| **Reject** | One shared readiness field | Version reconsideration and feature/build readiness are different decisions | Apply `B071-R93` |
| **Reject** | Authorization by omission | Absence from a Non-Goal list never includes a feature | Positive scope and build authorization remain mandatory |
| **Defer** | `NG-11` current policy owner | Legal/compliance owner not yet named | Separate governance decision |
| **Defer** | Governed-tier edits, Graphify sync and implementation | This is a handoff plan only | Lane A application, then Lane B verification; implementation later |

## Lane A application of `B071-R92`–`R96` — `D-188` (2026-09-03)

**Applied under a bounded Judge authorization of the nine-step plan. Append-only; `R90`/`R91` are
narrowed, not rewritten.**

| Prior finding | Treatment |
|---|---|
| `B071-R90` — remove positive capability scope/rank from `NG-*` | **Retained.** Its instruction to keep only a feature-to-`NG` link is **superseded**: `NG-*` owns the version-to-excluded-object edge |
| `B071-R91` — `NG-*` is an input citation only; `PBL-*` owns all readiness | **Partially superseded.** `PBL-*` owns feature readiness; `NG-*` owns version-specific reconsideration |
| `D-187` / §2.5.2's `PBL → NG` "Prohibition lift" column | **Withdrawn** — the reverse link is gone; no `PBL-*` row cites a Non-Goal |

**What landed.** `D-188` (Register §5.14e13) records the `V*/NG → excluded object` direction, three
separate readiness meanings, composite `(version_id, ng_id)` identity, "not excluded ≠ authorized",
and the standing-control split. `Modular_PRD.md` §2.5 gains an **`Excludes`** column across all
eleven rows; §2.5.1 is split into version-exclusion and feature-intake procedures; §2.5.2 is rebuilt
as identity-only rows. `V1-BUILD-SPEC.md` §6's `D-04` paraphrase is corrected at source — **that
paraphrase, not `D-04`, was the original defect**, and `D-04` stands unchanged.

**Identity allocation** (`B071-R94`, Lane A's administrative act): `PBL-03` mobile, `PBL-04`
multi-team accounts, `PBL-05` Facebook publishing, `PBL-06` real-time trend detection, `PBL-07`
multi-language, `PBL-08` bookmarklet, `PBL-09` notifications. All **identity-only, unranked**.
`PBL-06` is **not** merged with `FB-05`/`Q9`. `NG-09` → `ARCH-OD4`; `NG-10` → `TC9`/`O-01`;
`NG-11` → a legal/compliance policy whose **owner remains unassigned** and is recorded as an open
question in `D-188`.

**`B-071` is NOT closed by this entry.** Its own defects remain open pending independent
verification, exactly as the plan's item 7 requires.

---

## Round 12 independent review — `D-188` application at `129efab` (2026-09-03)

### Rewritten task

Independently review whether `D-188` completed the approved `V*/NG → excluded object` correction,
starting with `V1-BUILD-SPEC.md` §6's combined *"Multi-team accounts, and S6"* row. Separate the
V1 exclusion record, future Product capability and security sprint; identify any remaining drift;
and give Lane A one parent-first corrective plan. Do not edit governed tiers or build Product code.

### What happened

The decision's parent model is sound: `V1/NG-*` owns a version-specific exclusion,
`PBL-*` owns a stable future capability, and a Register act separately authorizes work. The
application is incomplete. The old `NG-02`/S6 model remains in the Build Spec and Product document,
while `D-188` reports that propagation as complete.

The baseline itself is settled and structurally green: local `HEAD`, upstream and Graphify's
`lastAnalyzedHead` are `129efab`; the full local consistency suite passes. Those facts do not close
the semantic defects below.

### Findings — highest parent first

| ID | What is unclear or incorrect | Guaranteed failure if unchanged | Smallest draft fix |
|---|---|---|---|
| `B071-R97` | `V1-BUILD-SPEC.md` §6 has one valid `S6 — auth and scoped RLS` row, then a second row that says *"Multi-team accounts, and S6"* are one item. `S6`/`SEC-03` is a security sprint/requirement; `PBL-04` is the multi-team-account capability | One capability has two rows and two owners. Resolving `OD1`–`OD3` can be mistaken for making multi-team accounts ready, while reconsidering `V1/NG-02` can be mistaken for authorizing S6 | Keep exactly one S6/`SEC-03` row. Replace the combined row with a version-qualified statement: `V1/NG-02` excludes `PBL-04`. Do not mention S6 or define the `D-145` variant in that exclusion row |
| `B071-R98` | `Modular_PRD.md`'s `NG-02` row still contains the positive `D-145` client-account backlog candidate even though `PBL-04` now owns that capability and already contains the variant | The same future scope has two editable homes; they will diverge on readiness, rank or definition | Keep `NG-02` to the V1 exclusion, excluded-object link, rationale and V1 reconsideration condition. Keep the `D-145` variant only under `PBL-04` |
| `B071-R99` | §2.5.1 correctly names three readiness meanings, then calls an NG condition a cross-version living backlog state that *"lifts a prohibition"* and survives into v2/v3 | A V1 exception becomes global feature readiness; V1 closure or an NG condition can appear to promote or authorize `PBL-04` | Use the labels every time: **version reconsideration condition**, **feature readiness**, **build authorization**. A V1 condition answers only whether V1's exclusion may be reconsidered; V2 creates its own scope record. Remove *"prohibition lifted"*, *"exclusion stops applying"* and cross-version-mutable-NG wording |
| `B071-R100` | `D-188` declares canonical identity `(version_id, ng_id)`, but the visible heading remains `Non-Goals`, the rows expose only `NG-*`, and only the monetization Build-Spec row uses `V1/NG-*` | Searches and future crosswalks can join V1's `NG-02` to another version's `NG-02`; the composite identity exists only in explanatory prose | Make the section visibly V1-scoped and expose a canonical `V1/NG-*` identifier while preserving `NG-*` as the local display ID. Use the canonical identity in cross-document links |
| `B071-R101` | `D-188`'s tier-applicability row says Build Spec §6 received an excluded-object column. Commit `129efab` changed only the monetization row there; no such column exists and the `NG-02`/S6 row was untouched | The Register provides false completion evidence, so later review trusts a propagation that did not occur | Append a narrow correction to `D-188`: preserve its ontology, withdraw the false Build-Spec completion claim, and name `R97`–`R100` as the remaining propagation |
| `B071-R102` | Graphify is current by revision, but querying the `D-188` relationship returns no usable exclusion/readiness subgraph; there is no curated D-188 match in `docs/graph-fragments/` | A green `docs-drift`/`graph-coverage` result is mistaken for semantic discoverability, and `NG-LINK-SC8` cannot be demonstrated | After source correction, update the existing curated layer so a query resolves `V1/NG-02 → PBL-04` and shows `PBL-04` as distinct from S6/`SEC-03`; rebuild/re-merge and test the query at the same pushed revision |

### Normalized ownership model

| Record | One question it answers | Example | Must not imply |
|---|---|---|---|
| Version exclusion | What did this version exclude, and what could permit reconsideration **inside this version**? | `V1/NG-02 EXCLUDES PBL-04` | Feature priority, S6 completion or build permission |
| Product backlog | What stable capability might later be refined? | `PBL-04 = multi-team accounts`, containing the `D-145` client-account variant | That any version includes it or that it is authorized |
| Security sprint/requirement | What authentication and access-control work may a separately authorized sprint perform? | `S6` / `SEC-03` | Multi-team-account scope by itself |
| Authorization | What bounded unit may the Active lane execute, with which DoD? | Register Judge act | Permission inferred from an NG, PBL or sprint label |

### Parent-first corrective packet for Lane A

1. **Register parent:** append one correction to `D-188`. Retain its direction, composite identity,
   three-way readiness split and “not excluded is not included” rule. Withdraw only the inaccurate
   propagation claim and explicitly supersede the historical `D-147`/`D-148` clauses that called
   `NG-02` and S6 the same future item. Do not rewrite historical decision bodies.
2. **Product exclusion and backlog:** in `Modular_PRD.md` §2.5, expose the V1-qualified NG identity
   and remove the `D-145` capability definition from `NG-02`; in §2.5.2 retain it once under
   `PBL-04`.
3. **Procedure language:** in §2.5.1, apply the three exact readiness labels and remove wording that
   lets a V1 reconsideration condition mutate post-V1 Product state.
4. **V1 tracking:** in `V1-BUILD-SPEC.md` §6, retain one S6/`SEC-03` row and make the other row only
   `V1/NG-02 → PBL-04`. Rewrite §6.1 as a pointer to the Product backlog without saying an exclusion
   later “stops applying.”
5. **Existing packet only:** incorporate `B071-R97`–`R102` into Draft 12 and this B-071 lifecycle.
   Create no new handoff, SOP, backlog ledger or feature ID.
6. **Explicitly unaffected:** frozen `docs/PRD.md`, frozen Charter, Artifact Inventory, Fn/Data/UX
   specs and Phase Closure receive no edit; no source requirement, repository artifact, behavior,
   schema, UI or lane state changes.
7. **Evidence last:** commit and push settled source, update the existing curated Graphify layer,
   rebuild/re-merge once, run the full suite, then give Lane B that exact revision for independent
   semantic review. A green structural tally alone is insufficient.

### What remains unclear

No Judge decision is required to separate the three existing objects: S6/`SEC-03`, `PBL-04` and
`V1/NG-02` already have distinct identities and owners under `D-188`. `NG-11`'s policy owner remains
open but is unrelated and must not block this correction. This review does not decide whether or
when `PBL-04` is promoted.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `NG-S6-SC1` | Build Spec §6 is read | S6 is searched | Exactly one row owns S6/`SEC-03`; no row calls it the same item as multi-team accounts |
| `NG-S6-SC2` | The V1 exclusion crosswalk is read | `NG-02` is traced | Canonical `V1/NG-02` points to `PBL-04` and carries no positive `D-145` feature definition |
| `NG-S6-SC3` | The Product backlog is read | `PBL-04` is traced | It alone owns multi-team-account identity and the `D-145` variant; it cites no reverse NG rationale |
| `NG-S6-SC4` | Readiness language is searched | Each condition is classified | Every occurrence means exactly one of version reconsideration, feature readiness or build authorization |
| `NG-S6-SC5` | Another version introduces `NG-02` | Cross-version lookup runs | `V1/NG-02` and the later canonical ID cannot collide |
| `NG-S6-SC6` | D-188's tier evidence is reviewed | The named Build-Spec change is inspected | The Register describes the row/column that actually exists; no completion is inferred from intent |
| `NG-S6-SC7` | Graphify is queried at the final pushed revision | The relationship is requested | It returns `V1/NG-02 → PBL-04` and does not collapse `PBL-04` into S6/`SEC-03` |
| `NG-S6-SC8` | The correction is complete | Git, Graphify and checks are compared | Local HEAD, upstream and analyzed revision match; the suite passes; independent Lane B review finds no residual conflation |

### What Lane B did instead

Lane B changed no governed tier and built nothing. It appended this independent review to the
existing B-071 handoff, preserving `D-171` and the current lane state. Lane A owns the corrective
draft; Lane B owns the later independent verification.

### Approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Decision model | D-188's `V*/NG → excluded object` direction and three-way readiness separation are sound | Preserve in Register correction |
| **Approve-with-conditions** | Lane A application at `129efab` | Structural checks pass, but `R97`–`R102` leave propagation semantically incomplete | Lane A corrective packet, then independent Lane B review |
| **Reject** | V1 Build Spec | Combined *"Multi-team accounts, and S6"* row | Split per `R97` |
| **Reject** | Product ownership | Positive `D-145` scope duplicated in `NG-02` and `PBL-04` | Normalize per `R98` |
| **Reject verification** | B-071 / D-188 application | Green checks and current Graphify do not satisfy the semantic success criteria | Source correction, semantic graph sync, independent review |
| **Defer** | `NG-11` policy owner | Separate unresolved governance item | Separate Judge decision |
| **Defer** | Product implementation or lane transition | Planning only; no build authorization was requested or granted | Later bounded authorization |

---

## Consolidated handback to Lane A — `B071-R97`–`R102`

### What happened

Lane B's Round 12 review is pushed at `9d00f70`. It accepts `D-188`'s parent ontology and rejects
terminal verification of its application because the derived documents still collapse
`V1/NG-02`, `PBL-04` and S6/`SEC-03`. The detailed evidence, failure modes and acceptance criteria
remain canonical in the Round 12 section above; they are not repeated here.

Current transaction state at handback:

- source review: local `HEAD` = upstream = GitHub = `9d00f70`;
- Graphify: last analyzed source remains `129efab`, so `docs-drift` is expected after the handoff
  commit;
- authority: the Judge approved and completed the push of the review only. No governed-tier edit,
  Graphify source correction, Product implementation or lane transition is authorized by that act.

### What Lane A needs to do

Prepare one reviewable correction packet for `B071-R97`–`R102`, using the following dependency
order. Preparation is not application; present the exact proposed text/write set to the Judge
before changing governed tiers.

| Order | Bounded unit | Exact owner/files | Done when |
|---:|---|---|---|
| **1 — decision parent** | Draft the narrow `D-188` correction: preserve its ontology; withdraw the false Build-Spec completion evidence; supersede only the `D-147`/`D-148` clauses that equate S6 and multi-team accounts | `docs/v1/V1-DECISION-REGISTER.md` | One proposed Register clause gives every child edit authority and identifies retained versus superseded text |
| **2 — Product ownership** | Make the Non-Goal visibly V1-qualified; keep the `D-145` variant only under `PBL-04`; apply the three exact readiness labels | `docs/Modular_PRD.md` §§2.5–2.5.2 | `V1/NG-02` records exclusion/reconsideration only; `PBL-04` alone owns the future capability |
| **3 — V1 tracking** | Keep one S6/`SEC-03` row; replace the combined row with `V1/NG-02 EXCLUDES PBL-04`; remove post-V1 “exclusion stops applying” language | `docs/v1/V1-BUILD-SPEC.md` §§6–6.1 | No row or pointer calls S6 and multi-team accounts the same item |
| **4 — existing packet** | Fold the correction and lifecycle disposition into Draft 12 and this existing handoff; do not mint another handoff, decision summary or backlog ledger | `docs/v1/V1-B071-CORRECTIVE-PLAN.md`; `B-071` | One current plan cites `R97`–`R102`; historical evidence remains append-only |
| **5 — source transaction** | After bounded Judge authorization, apply Units 1–4 parent-first, verify the exact write set, run the suite, commit and push the settled source | Git/GitHub | Upstream contains the authorized source commit; no unrelated path is included |
| **6 — Graphify evidence** | At the pushed source revision, rebuild/re-merge the existing curated layer and make the D-188 relationship queryable | existing graph fragment mechanism and `.graphify/` | Query returns `V1/NG-02 → PBL-04` and keeps `PBL-04` distinct from S6/`SEC-03`; graph checks pass at the same revision |
| **7 — independent closure** | Hand the exact pushed/analyzed revision back to Lane B | `B-071` lifecycle only | Lane B independently confirms every `NG-S6-SC*` criterion before `Verified` is considered |

### Required write-set boundary

The correction packet may propose edits only to the Register, Product requirements, V1 Build Spec,
the existing B-071 corrective plan/handoff, and the existing Graphify fragment mechanism. The
frozen Project requirements, frozen Charter, Artifact Inventory, Fn/Data/UX specs, Phase Closure,
application code, schema and lane state are explicitly unaffected.

If Lane A finds that any excluded file must change, it must stop and return that new dependency to
the Judge instead of silently widening the packet.

### What Lane B did instead

Lane B stopped at specification and handoff. It did not correct Lane A's governed documents, rebuild
Graphify over unsettled source, authorize Draft 12, or begin Product implementation.

### Lane A response contract

Lane A's next response should state only:

1. whether each `R97`–`R102` finding is accepted or disputed, with file evidence for a dispute;
2. the exact proposed decision text and closed write set;
3. whether Judge authorization is still pending;
4. after authorization only, separate source-commit, push, graph and independent-review evidence.

### Approve/reject handback

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Handoff channel | B-071 remains the single canonical packet; Round 12 is pushed at `9d00f70` | Lane A acknowledgement and draft |
| **Approve-with-conditions** | Lane A correction plan | Units 1–7 are dependency ordered and bounded | Exact-text review, then Judge authorization |
| **Reject** | Duplicate tracking | No new B-number, SOP, backlog ledger or parallel corrective plan | Use B-071/Draft 12 |
| **Reject** | Implied authority | Approval to push `9d00f70` does not authorize governed edits, Graphify correction, implementation or lane transition | Obtain the bounded Judge act first |
| **Defer** | Graphify synchronization | Current drift is known; synchronizing before source correction would immediately re-drift | Unit 6 after pushed source |
| **Defer** | B-071 `Verified` | Lane A cannot verify its own application | Unit 7 independent Lane B review |
| **Defer** | Product implementation | Outside this documentation handback | Later build authorization while the selected lane is Active |

---

## Round 13 independent review — Lane A exact-text draft for `R97`–`R102` (2026-09-03)

### What happened

Lane A independently confirmed all six Round 12 findings and supplied proposed text for the
Register, Product requirements and V1 Build Spec. The draft preserves the important `D-150`/`G106`
distinction: renaming *"prohibition lifted"* must not erase the rule that scope eligibility and
build authorization are separate acts.

The draft is not yet safe to authorize. It contains new lifecycle/evidence defects and does not
fully remove the phrases that caused `R99`. Nothing in this review authorizes its application.

### New findings — parent first

| ID | What is unclear or incorrect | Guaranteed failure if unchanged | Smallest draft fix |
|---|---|---|---|
| `B071-R103` | Unit 1 says to *amend* `D-188`'s existing tier row and separately append a correction. The row is closed historical evidence | An in-place replacement erases the false claim that explains why the correction exists; a later reader cannot distinguish original evidence from repair | Leave `D-188`'s body and tier row unchanged. Append one labelled correction notice that withdraws only the false Build-Spec claim and points to the current corrective act |
| `B071-R104` | The proposed correction says *"Remaining propagation, authorized here"* before the Judge has authorized the exact packet | Draft wording becomes its own permission source, repeating the approval-provenance defect family | In the proposal say *"would authorize only upon the Judge's bounded acceptance."* After acceptance, record the Judge act and its exact write set; never infer authority from Lane A's approve table |
| `B071-R105` | The `R99` edit replaces only §2.5.1's closing paragraph and one sentence. The earlier paragraph still says the mechanism is cross-version backlog state that must survive v1; Build Spec §6.1 still says it must stay checkable across v2/v3 | The old parent rule survives above the corrected child wording, so `V1/NG-*` remains mutable cross-version in one reading and version-scoped in another | Replace both complete legacy paragraphs, not selected phrases. Run a negative search for *"survive the version"*, *"across v2, v3"*, *"exclusion stops applying"*, *"lifts a prohibition"* and unqualified *"Ready when"* in the affected current text |
| `B071-R106` | The proposed `NG-02` text retains *"describes v1 and lapses when the business has more people"* | Headcount silently changes scope without a V1 reconsideration decision, feature readiness or build authorization—the exact three-way collapse `D-188` rejects | Say the one-human rule describes V1 and remains part of V1's historical scope. More people may trigger reconsideration; they do not make the exclusion lapse |
| `B071-R107` | `R100` is answered with one explanatory sentence and a renamed heading, while table rows still expose only bare `NG-*` values and most cross-document links remain unqualified | The composite identity remains prose-only; automated/search joins can still collide with a later version's `NG-02` | Expose the canonical identity per row—prefer a `Canonical ID` column containing `V1/NG-*`, while retaining the local `NG-*` display ID—and use canonical IDs in every changed cross-document reference |
| `B071-R108` | The response calls Units 1–4 exact text, but supplies no exact Draft 12/B-071 lifecycle edit, no exact correction for the POC built-commercial row, and only a phrase substitution for Build Spec §6.1 | Lane A must improvise during application; the write set can expand and the final documents can retain contradictory wording while the plan claims completion | Add exact proposed text for every changed paragraph/row and for the existing packet's current lifecycle field. If a target needs no edit, remove it from the write set explicitly |
| `B071-R109` | Graphify absence is described as the graph *actively fusing* the concepts, although the query returned a historical `CR-16` fallback and no explicit fusion edge was shown. Unit 6 then says merge the fragment before rebuilding | Absence is overstated as a false edge, and rebuilding after the merge can erase the just-merged curated layer (`G51`) | Record the proven defect narrowly: D-188 semantics are not retrievable. Commit the approved source plus tracked fragment, rebuild the extracted layer, then merge/verify all curated fragments. Represent positive identities/relations; test that no alias/instance edge collapses `PBL-04` into S6/`SEC-03` |

### Corrected parent-first plan for Lane A Draft 2

1. **Evidence preflight:** correct the Git facts. At this review, local `HEAD` is `a41fa0a`, while
   upstream and GitHub remain `9d00f70`; the commits after `129efab` are `9d00f70` and `a41fa0a`.
   Commit `2ab048a` is an ancestor of `129efab`, not one of the two later handoff commits.
2. **Append-only Register parent:** preserve `D-188` verbatim and draft one correction notice. It
   must distinguish proposed authority from a Judge act and name retained/superseded clauses.
3. **Complete Product text:** show `V1/NG-*` canonically for every row, keep `D-145` only in
   `PBL-04`, remove the automatic lapse, and replace both complete cross-version-readiness
   paragraphs.
4. **Complete V1 tracking text:** keep one S6/`SEC-03` row, replace the combined row, and provide
   complete replacement text for §6.1 and the POC built-commercial row without erasing `D-150`.
5. **Complete existing-packet text:** state exactly how Draft 12 and B-071 will record `R97`–`R109`
   as proposed/applied. Do not create another handoff, plan or ledger.
6. **Exact-text review:** give the complete closed diff to the Judge. An approve/reject analysis by
   Lane A is advice, not application authority.
7. **Authorized source transaction:** only after bounded Judge acceptance, apply the Register
   parent followed by its children; verify paths; commit and push the source plus tracked curated
   fragment.
8. **Graphify transaction:** at that pushed source revision, rebuild the extracted layer first,
   merge all curated fragments with `merge7.js`, then run path/explain/portable and the full suite.
9. **Independent closure:** give Lane B the exact pushed and analyzed revision. Lane A records
   `Applied`; Lane B alone may decide whether `Verified` is earned.

### What is unclear

No Product decision is needed to distinguish `V1/NG-02`, `PBL-04` and S6/`SEC-03`. One process
choice must be made explicit in Lane A's next draft: whether the correction is recorded as a
labelled append-only notice within `D-188` or as a new Register decision pointing back to `D-188`.
Either is acceptable only if the original tier row remains visible and the Judge act is durable.

The separate B-077 lifecycle work is real but is a sibling, not a prerequisite for this packet.
Its `Applied` reconciliation, B-061/B-070 disposition and Phase 3 items must not be absorbed into
Draft 12.

### Success criteria added by Round 13

| ID | Given | When | Then |
|---|---|---|---|
| `NG-S6-SC9` | Closed `D-188` is inspected | Its correction is traced | The original body/tier row remains visible; the correction and approving act are append-only and citable |
| `NG-S6-SC10` | `NG-02`'s condition resolves or headcount changes | Scope is evaluated | Reconsideration may begin, but no lapse, PBL promotion, S6 completion or build authority occurs automatically |
| `NG-S6-SC11` | Current Product/Build text is searched | Legacy readiness phrases are checked | No affected current clause carries cross-version mutable-NG or unqualified readiness semantics |
| `NG-S6-SC12` | The V1 crosswalk is parsed | Every NG identity is joined | Each row exposes one canonical `V1/NG-*` identity and one excluded object without text inference |
| `NG-S6-SC13` | The application packet is approved | Its write set is compared with the diff | Every changed row/paragraph was present verbatim in the reviewed proposal; no child was improvised |
| `NG-S6-SC14` | Graphify is refreshed | Operation order and semantic query are checked | Rebuild precedes curated merge; D-188 is retrievable; no alias/instance relation equates `PBL-04` with S6/`SEC-03` |

### What Lane B did instead

Lane B reviewed the proposed text only. It did not alter governed tiers, synchronize Graphify,
absorb B-077, authorize Draft 12 or build Product code. The consolidated review is appended to the
existing B-071 entry so no duplicate handoff is created.

### Round 13 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | `R97`–`R102` factual validation | Lane A correctly confirmed the six source defects | Preserve evidence |
| **Approve** | `D-150`/`G106` preservation | Replace the overloaded label but retain the distinction between eligibility and authorization | Lane A Draft 2 exact text |
| **Approve-with-conditions** | Lane A corrective draft | Direction is sound; `R103`–`R109` must be resolved before authorization | Complete exact-text draft, then Judge review |
| **Reject** | Closed-decision rewrite | Do not amend `D-188`'s tier row in place | Append-only correction/linked decision |
| **Reject** | Automatic NG lapse | Business headcount cannot change governed scope by itself | `R106` correction |
| **Reject** | Graphify merge-before-rebuild | Risks losing the curated correction and claiming false parity | Rebuild, then merge and verify |
| **Reject verification** | B-071 / Draft 12 | Exact write set and semantic evidence are incomplete | Lane A Draft 2, authorization, application, Lane B re-review |
| **Defer** | B-077 lifecycle children | Valid sibling work, outside this packet | Separate bounded authorizations |
| **Defer** | Product implementation or lane transition | Planning only; `D-171` remains binding | Later build authorization |

---

## Round 14 independent review — Lane A Draft 2 for `R103`–`R109` (2026-09-03)

### What happened

Lane A corrected both evidence errors from Round 13, preserved `D-188`'s body and tier row, supplied
complete replacements for the main readiness paragraphs, removed the automatic `NG-02` lapse, and
corrected Graphify to rebuild before curated merge. GitHub, upstream and local `HEAD` were confirmed
at the Round 13 review commit `411f834` before this review.

Draft 2 is closer but not yet executable. It conflates a historical versioned Non-Goal with the
standing control it points to, keeps a V1 reconsideration condition operational after V1 freezes,
and contains placeholders/ellipsis that contradict its claim of exact application text.

### Findings — highest parent first

| ID | What is unclear or incorrect | Guaranteed failure if unchanged | Smallest Draft 3 fix |
|---|---|---|---|
| `B071-R110` | Draft 2 gives `NG-10`/`NG-11` no `V1/` canonical ID and writes *standing control* in the identifier column. `D-188` says their **historical IDs are preserved** and their current rules are routed to standing owners | The V1 historical assertion and the continuing control become one record again; the `Canonical ID` column contains a type label rather than a join key | Keep `V1/NG-10` and `V1/NG-11` as the historical V1 Non-Goal identities. Their `Excludes` targets are the existing standing control/policy objects; they take no `PBL-*` |
| `B071-R111` | Draft 2 says a V1 reconsideration condition *stays checkable after* V1 freezes and may then permit re-examining V1 | A frozen version can be reopened through living Product prose, contradicting `D-36`; the V1 record never becomes final | The repeatable procedure and `PBL-*` catalog survive. A `V1/NG-*` condition is actionable only while V1 remains open; at V1 closure the NG row and its condition become historical. Later scope uses its own version record and separate authorization |
| `B071-R112` | The proposed Register notice contains `<review-commit>`, `<date>`, `<exact paths>` and `<commit>` while being presented as exact text | The packet cannot be applied verbatim; placeholder SHAs can fail checks, and a commit cannot truthfully cite its own unknown SHA | First commit/push Draft 3 as an immutable review artifact. The Judge accepts that real revision. Applied Register text cites the review/approval evidence available before application; application SHA stays in subsequent handoff evidence, not a self-referential placeholder |
| `B071-R113` | Unit 2 says *"per row"* rather than providing the complete table, and its last two sample rows contain `…` | Application still requires improvising row text and delimiters, risking loss of rationale/source content and contradicting `G32`'s apply-in-full rule | Include the complete proposed eleven-row table or constrain the mechanical change to a fully specified new column/value map with no ellipsis |
| `B071-R114` | Draft 12's changelog calls `411f834` *"this revision"*. That commit contains Round 13 review, not Lane A's Draft 12 | Review evidence is mislabelled as the artifact revision, recreating false approval/provenance | Call `411f834` the **review-input baseline**. Record Draft 12's own commit only after it exists, and keep Judge acceptance separate |
| `B071-R115` | The proposed Graphify negative test counts every link whose endpoint labels mention the concepts, regardless of relation | A legitimate `excludes`, `references`, `distinct_from` or decision-to-object edge can fail as a “collapse”; conversely an invalid relation with different labels can pass | Assert the positive `V1/NG-02 --excludes--> PBL-04` edge and reject only semantically collapsing relation types between `PBL-04` and S6/`SEC-03` (for example alias/instance/equivalence), using node IDs and relation values |
| `B071-R116` | Unit 7 commits source plus fragment; Unit 8 starts Graphify without an explicit source push/re-fetch confirmation | Lane B can receive a locally analyzed revision that GitHub never received, repeating the local/remote evidence collapse | After the source+fragment commit: push, fetch, and prove upstream equals local. Only then rebuild, merge and verify that immutable revision |
| `B071-R117` | The Register notice says *"Remaining propagation — proposed, unapplied"* while Units 1–5 are intended to land in one source transaction | The decision calls its own same-commit children unapplied the instant it lands—the same stale-in-the-creating-commit defect previously recorded in this repository | Keep proposal state in Draft 3, not in final Register wording. Applied Register text states the authorized rule and write set without a transient completion claim; B-071 records `Applied` evidence after the commit |

### Normalized model that must survive Draft 3

| Layer | Durable identity | Lifecycle |
|---|---|---|
| V1 historical exclusion | `V1/NG-01` through `V1/NG-11` | Active only while V1 scope is open; historical/frozen when V1 closes |
| Standing rule referenced by an NG | Existing control/policy ID, such as `TC9`/`O-01` | Continues independently of V1; not a `PBL-*` and not the NG record itself |
| Future Product capability | `PBL-*` | Living identity/readiness; never authorized by NG absence or expiry |
| Security delivery scope | S6/`SEC-03` | Separately authorized sprint/requirement; not an instance of `PBL-04` |
| Build permission | Durable Judge act | Bounded write set and DoD; never inferred from any record above |

### Parent-first Draft 3 guide

1. **Draft artifact first:** resolve `R110`–`R117` in the existing Draft 12 plan and B-071 only.
   Provide either the complete eleven-row table or an exact column/value transformation. Use no
   placeholders, ellipses, self-SHAs or current-state claims that become false on application.
2. **Immutable review point:** commit and push that plan-only revision. Report local, upstream and
   GitHub separately; call `411f834` its input baseline, not Draft 12's revision.
3. **Judge decision:** request bounded acceptance of the exact pushed Draft 3 write set. Until then,
   the Register/Product/Build text remains unapplied and `AUTH-DOC` remains unapproved.
4. **Register parent:** after acceptance, append the correction notice without altering `D-188`.
   Preserve `V1/NG-10`/`V1/NG-11` as historical IDs; separate their standing target controls; omit
   transient *proposed/unapplied* and self-referential commit language.
5. **Derived children:** apply the accepted Product and Build replacements in full. Version
   reconsideration is actionable only before that version freezes; PBL readiness and build
   authorization remain separate.
6. **Existing packet/lifecycle:** update Draft 12/B-071 exactly as approved. Lane A may record
   `Applied`, never `Verified`.
7. **Source transaction:** verify exact paths, commit source plus the tracked curated fragment,
   push, re-fetch, and prove local equals upstream before relying on Graphify.
8. **Graphify transaction:** rebuild extracted data, merge all fragments, assert the positive
   exclusion edge, run relation-aware negative checks, then run the full suite at the same revision.
9. **Independent closure:** hand the pushed/analyzed revision to Lane B for `NG-S6-SC1`–`SC20`.

### What remains unclear

No Judge Product choice is needed. Draft 2's new `NG-10`/`NG-11` proposal should be rejected as a
category error: `D-188` already decides that their historical IDs remain while their continuing
rules use separate control/policy owners.

The only remaining choice is procedural and should be made by Lane A in Draft 3: provide a complete
eleven-row replacement or a deterministic column/value transformation. Either must be executable
without interpreting `…`.

### Success criteria added by Round 14

| ID | Given | When | Then |
|---|---|---|---|
| `NG-S6-SC15` | `NG-10`/`NG-11` are traced | Historical and current owners are compared | `V1/NG-10`/`V1/NG-11` remain versioned history; the referenced control/policy remains standing; no PBL is invented |
| `NG-S6-SC16` | V1 closes with a condition unresolved | The condition later becomes true | V1 history does not change or reopen; later Product/version scope and authorization decide future work |
| `NG-S6-SC17` | Draft 3 is reviewed | Proposed text is copied literally | No placeholder, ellipsis, unstated row reconstruction or self-referential SHA is required |
| `NG-S6-SC18` | Draft 12 provenance is read | Commit roles are compared | `411f834` is the Round 13 review baseline; Draft 12 and Judge acceptance have their own distinct evidence |
| `NG-S6-SC19` | Graph checks run | Valid and invalid relations are exercised | The required `excludes` edge passes; only alias/instance/equivalence collapse fails; unrelated links do not fail |
| `NG-S6-SC20` | Source is ready for Graphify | GitHub is queried | Source+fragment commit is already upstream; rebuild→merge→verification all use that exact revision |

### What Lane B did instead

Lane B reviewed Draft 2 and appended its findings to the existing B-071 packet. It changed no
Register, Product, Build, graph fragment or implementation file, and did not absorb B-077.

### Round 14 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Draft 2 corrections to `R103`–`R109` | Evidence corrections, append-only direction, full paragraph replacement and rebuild→merge ordering are sound | Preserve in Draft 3 |
| **Approve-with-conditions** | Draft 2 overall | Resolve `R110`–`R117`; publish one immutable exact-text review point | Lane A Draft 3, then Judge review |
| **Reject** | Unversioned NG-10/NG-11 | Confuses historical Non-Goals with their standing target controls | Preserve `V1/NG-*`; link to control/policy IDs |
| **Reject** | Post-freeze V1 reconsideration | A frozen V1 record cannot remain operational | Later version/PBL path |
| **Reject** | Placeholder/ellipsis application | Not exact text and cannot satisfy `G32` | Complete Draft 3 text |
| **Reject** | Relation-blind Graphify test | Produces false positives and weak negatives | Relation-aware positive/negative fixtures |
| **Reject verification** | B-071 / Draft 12 | The exact review artifact and Judge act do not exist | Draft 3, authorization, application, Lane B re-review |
| **Defer** | B-077 and `NG-11` policy-owner decision | Separate sibling governance | Separate bounded packets |
| **Defer** | Product implementation/lane transition | Documentation plan only; `D-171` remains binding | Later build authorization |
