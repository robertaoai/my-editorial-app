# B-071 — B-070 options and Desk Editor ontology require correction before S2 authorization

- **Raised:** 2026-09-02 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** terminal verification of `B-070`; any fresh S2 authorization; Lane B beginning
  `T5`/`T6`, route-readiness, judgment-packet, or publication-decision implementation
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-02. Implementation plan at `docs/v1/V1-B071-CORRECTIVE-PLAN.md`
  is now Draft 6, incorporating `B071-R8`–`R44` and the Chief Editor's `B071-R22` clarification in
  full. Draft 6 corrects the evidence-state inversion round 5 found — Draft 5 was already pushed
  (`5bd9b90` local = remote) while Graphify was stale at `d3cadda`, i.e. 16/17 checks (`R38`);
  scopes the "never abbreviate as Gate" rule to operative text only, leaving revision-history and
  review-history citations of the retired wording intact and explicitly non-operative (`R39`);
  separates drafting/proposing `AUTH-F1`/`AUTH-F2` (allowed now) from approving/exercising them
  (still gated on `AUTH-DOC` `Verified`) (`R40`); corrects `AUTH-ROUTE` to require one globally
  `Verified` Feature 1 result plus the named route's `Verified` Feature 2 contract, never
  route-specific Feature 1 approvals (`R41`); removes `B-070` from the opening's future-write list
  and fixes §7's B-071-closure reference from the nonexistent "§1–§9" to the actual "§1–§8" (`R42`);
  updates `docs/graph-fragments/frag119.json` to describe `B-071`/this plan at `R1`–`R44`/Draft 6
  with `AUTH-*` vocabulary, replacing the stale `R1`–`R22`/"Gate" description (`R43`); and fixes
  §8's ordering so source and curated fragment are committed together before any Graphify rebuild,
  never after (`R44`). This commit also updates `frag119.json` in the same pass per the corrected
  ordering, then runs `npx graphify hook-rebuild` and `bun run check` to confirm `docs-drift`
  clears. **Not yet pushed** — round 6/`AUTH-DOC` cannot be marked `Verified` until this commit (or
  its successor) is on `origin/docs/journal-2026-08-16` and confirmed identical; pushing requires
  the user's explicit go-ahead and has not been requested yet.
- **Independent-Review:** Round 1 (Lane B, `80c8f38`, findings `B071-R8`–`R14`), round 2 (Lane
  B, `c6afdd0`, findings `B071-R15`–`R21`, plus the Chief Editor's direct `B071-R22`
  clarification), round 3 (Lane B, `2147636`, findings `B071-R23`–`R29`), round 4 (Lane B,
  reviewing Draft 4 at shared HEAD `d3cadda`, findings `B071-R30`–`R37`), and round 5 (Lane B,
  reviewing Draft 5 at `5bd9b90`, findings `B071-R38`–`R44`) all consolidated below. No separate
  `B-072` item was ever minted.
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
