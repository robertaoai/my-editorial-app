# B-071 — B-070 options and Desk Editor ontology require correction before S2 authorization

- **Raised:** 2026-09-02 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** terminal verification of `B-070`; any fresh S2 authorization; Lane B beginning
  `T5`/`T6`, route-readiness, judgment-packet, or publication-decision implementation
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-02. Commits `cd08c5b` (Round 8 review + `B-072`) and `838baff`
  (Draft 9 + the Judge-authorized Graphify tooling/status precondition) and `6fb32ea` (Round 9
  review) are all **pushed** — local `HEAD` equals `origin/docs/journal-2026-08-16`. Implementation
  plan at `docs/v1/V1-B071-CORRECTIVE-PLAN.md` is now **Draft 10**; its evidence is the commit
  containing this paragraph, following pushed Draft 9 (`838baff`). Draft 9 incorporated round-8
  review `B071-R56`–`R60` in full, and the Graphify tooling/status precondition it authorized is
  completed (deterministic-upsert `merge7.js`, `frag119.json` refreshed to status-only text, no
  `D-182`). Draft 10 incorporates round-9 review `B071-R61`–`R66`: adds a forward-notice write-set
  row for every editable governing/derived file the propagation set had omitted — `blueprint.md`,
  `business-case.md`, `v1-build-readiness-addendum.md`, `docs/README.md`,
  `SPECS-TRANSITION-ENFORCEMENT.md`, the media-industry fallback plan (`R61`); **decides** the `T6`
  pre-authentication trust boundary — every pre-authentication `T6` event is `self_asserted`/demo,
  visibly labeled, and cannot satisfy publication or `AUTH-ROUTE`; only `authenticated` `T6` can,
  consistent with this project's binding demo-first v1 rule deferring login to a later sprint
  (`R62`); resolves the identity-spec `D-30` redundancy test as decided, not conditional —
  `SPECS-TRANSITION-ENFORCEMENT.md` excludes column/type ownership by its own stated scope — and
  fixes `docs/specs/README.md`'s documented naming convention to match the plural `SPECS-*` files
  that already exist (`R63`); replaces the last operative prose node reference with
  `NODE-CHIEF-JOURNALIST-REVIEW` (`R64`); corrects §7/§8 to describe the Graphify precondition as
  completed at `838baff`, not future/conditional work (`R65`); and records `merge7.js`'s remaining
  verifier defects — mutates the graph before a `--verify-only` check reads it, drops dangling edges
  from its own check instead of failing on them, no cross-fragment conflict check, undefined
  fragment-owned-field scope — as ordinary Lane A tooling work with four named negative tests,
  independent of the completed precondition (`R66`). **The Judge approved Draft 10 with these
  corrections as proposed.** `AUTH-DOC` itself remains unapproved; `D-171` remains fully binding.
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
