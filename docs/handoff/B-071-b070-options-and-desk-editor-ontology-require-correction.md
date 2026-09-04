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
  **Rounds 12–14 (2026-09-03).** `B071-R97`–`R117` accepted in full; none disputed. Two Lane A
  evidence errors were corrected by Round 13 and stand corrected: the commits after `129efab` are
  `9d00f70`, `a41fa0a`, `411f834` and `13da259` — `2ab048a` is an **ancestor** of `129efab`; and the
  Graphify defect is **non-retrievability**, not a false-equivalence edge (a full link scan returns
  0 collapse relations and `PBL-04` has 0 nodes). **Draft 3 of the `D-188` correction packet is
  written to `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §9** as literal application text — no placeholder,
  ellipsis or self-referential SHA. **`411f834` is the Round 13 review-input baseline and `13da259`
  the Round 14 review; neither is Draft 12's revision** (`B071-R114`). **Nothing is applied:** the
  Register, `Modular_PRD.md` and `V1-BUILD-SPEC.md` are unchanged, `AUTH-DOC` remains unapproved,
  and `D-171` remains binding. The next act is the Judge's bounded acceptance of §9's write set at
  the pushed revision; Lane A may then record `Applied` and only Lane B may record `Verified`.
  **Rounds 16–17 (2026-09-03).** `B071-R124`–`R134` accepted in full; none disputed — verified
  directly: `docs/PRD.md` names no `T6`/assurance capability and no `CR-12`/`CR-15`/`CR-19` IDs
  (those live in `docs/governance/requirements-traceability-map.md`); `D-189` is free (last decision
  is `D-188`, §5.14e13); `D-187`'s `PBL-01` row still reads *"Prohibition lift: none applies"*, the
  exact clause `R128` names. **Two further structural findings surfaced during verification, not
  present in Round 16/17's own text — recorded as `B071-R135`/`R136`:** the target order `D-175`–
  `D-181` already decided (`raci-involvement-matrix.md` §3.1, `FN-GATES-01-05.md` `EG5`,
  `V1-BUILD-SPEC.md` §S2's Target DoD/S2 Unit 2) is a **human-only, agent-refused final gate** —
  exactly Round 17's guarantee — already specified under the label `T6`, distinct from the future
  digital-assurance capability `V1/NG-12` excludes; and that guarantee is a property of the *target*
  order, held under `D-171`, not of the order presently authorized to build, where `AC-07` has a
  Chief Journalist **agent** executing the approval. **Draft 1 of proposed `D-189` is written to
  `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §10** as literal text, independent of §9, correcting both.
  **Nothing is applied:** no governed tier changed; `D-189` does not exist in the Register; `D-171`
  remains binding, unnarrowed; `AUTH-DOC` remains unapproved. One item is left open for the Judge,
  not decided here: whether to request a bounded authorization narrowing `D-171` for the target
  order's human-only gate specifically, separate from the full S2 target build (`B071-R136`).
  **Round 18 (2026-09-03).** `B071-R137`–`R144` accepted in full; none disputed — `R138` is a
  correction to this field's own prior text: `V1-BUILD-SPEC.md` §S2 states directly that
  `D-164`/`D-165`'s authorization is held for **both** gate orders, which Rounds 16–17's response
  above had already quoted and then contradicted by calling the historical order "build-authorized."
  **Judge instruction received this round, live:** `B071-R137` approved — **Model A** selected over
  Model B (V1's editorial gate sequence ends at `T5`; the human final act stays inside `T5`, under a
  new label; `T6` becomes the future `PBL-01` assurance capability's sole name) — with a direct
  clarification that "Chief Editor" must not name the in-app executor, since it conflates this
  software's own accountable role with the real person's manual-workflow persona. **Draft 2 of
  proposed `D-189` is written to `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §11**, superseding §10 (kept
  unedited as history): a clause-level partial-supersession table for `D-175`/`D-177`/`D-181`
  (`D-176` unaffected; `D-180`'s existing forward-notice to `D-181` reused, not duplicated); the
  human final act relabelled `T5-FINAL` — Lane A's own drafting choice for the exact string, offered
  for the next review to confirm or correct, not itself a Judge instruction; `Acting Chief Editor`
  adopted from `raci-involvement-matrix.md` §2's own existing definition, not invented; literal text
  supplied for `FN-PUBLICATION-09-10-13.md`; `CR-12`/`CR-19` marked pending sponsor disposition, not
  `Covered`; every touched item stated `Draft-addressed`, never `Closed`. **Nothing is applied:** no
  governed tier changed; `D-189` does not exist in the Register; `D-171` remains binding over both
  orders, unnarrowed; `AUTH-DOC` remains unapproved.
  **Rounds 19–24 (2026-09-03/04) — read in full before this response.** Round 19 rejected Draft 2
  as executable text and raised `B071-R145`–`R153`; Round 20 added `R154`–`R162` (account
  accountability, T5 stage/state axes); Round 21 corrected Rounds 19–20's `executor_principal_key`
  regression (`R163`–`R168`); Round 22 raised the V1 no-auth-boundary conflict (`R169`–`R174`);
  Round 23 recorded the Judge's Model A selection — a **narrow** authentication exception scoped to
  the Chief Editor account and `T5-FINAL` only; Round 24 added the business-owner recovery flow
  (`R175`–`R180`). **This response resolves only the self-contained authentication/recovery thread,
  as Draft 3 Part 1** (`docs/v1/V1-B071-CORRECTIVE-PLAN.md` §12, resolving `B071-R169`–`R180` plus
  new finding `B071-R181`): `S5` (`docs/journal/2026-08-16-entry007-decision-sheet.md`) is an
  already-accepted **temporary, auto-reverting** LOA delegation for Chief Editor absence, distinct
  in kind from Round 24's **permanent** succession model — both use "Acting Chief Editor," and
  neither round reconciles them; flagged for the Judge, not resolved. **Round 19's T5-stage/
  occurrence-ledger thread (`B071-R145`–`R168`) is explicitly Part 2, not drafted this pass** —
  named so it is not mistaken for closed. Nothing applied to any governed tier; `AUTH-DOC` remains
  unapproved; `D-171` remains binding.
  **Rounds 25–27 (2026-09-04) — read in full before this response.** Round 25 independently
  reviewed §12 and found `B071-R182`–`R186`, two of which correct this response's own prior text:
  `R182` — §12.1 invented `Entry007/S5`'s account/email mechanism, which the source specifies
  neither of; `R186` — §12.9 cited `SC55`–`SC62` as continuing to apply, though Round 23 had
  already superseded `SC62` as a positive criterion. Round 26 clarified email management is
  external to the app. **Round 27 then removed multi-account succession as a V1 prerequisite
  entirely**, and separately rejected `T5-FINAL` as a completion event — Round 27's own words:
  *"the earlier proposal that a human `T5-FINAL` act completes T5 conflicts with this new
  clarification."* **Draft 4 of proposed `D-189` is written to
  `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §13**, superseding §11's gate-completion model and §12's
  succession machinery (both kept unedited as history): `T5` completes via its own already-decided
  target mechanism; the human's subsequent act is proposed as a workflow step named
  `EDITORIAL_DISPOSITION` — Lane A's drafting choice, not a Judge instruction, offered for
  confirmation — carrying no gate-count increment. Succession/replacement machinery moves to a
  future `PBL-04` candidate, dependency-ordered, not ranked or authorized. **§11.4's and §12.7's
  blanket "Encyclopedia: unaffected" claim is withdrawn** — verified directly against
  `docs/ENCYCLOPEDIA-SYNC.md`: Entries 01, 04 and 05 depend on files this correction touches and
  are marked impact-review candidates, not edited. Nothing applied to any governed tier; `AUTH-DOC`
  remains unapproved; `D-171` remains binding.
  **Rounds 28–29 (2026-09-04) — read in full before this response.** Round 28 independently
  reviewed Draft 4 and found **three errors in it, all mine, all confirmed against source**:
  (1) §13.2 claimed the bundle join *fully completes* `T5`; (2) §13.2 treated `satisfied` as a
  "`T6`-labelled state" and declared `G-02a` superseded "because there is no gate six" — but
  `satisfied` is a value of `workflow_transitions.line_separation_status`, a four-eyes independence
  metric on a transition, so that framing would have **silently deleted a control**; (3) §13.7
  retired `SC71`–`SC75` as succession tests when `SC71`/`SC72`/`SC75` test source accuracy,
  application completeness and truthful status — and conversely called `SC55`–`SC62` applicable when
  `SC55`/`SC56`/`SC59` are genuinely succession-specific. Round 28 also found §13's heading
  overclaims: it *addresses* rather than *resolves* `R182`–`R186`, since `R183` remains open.
  Round 29 then carried the Judge's clarification that **`T5` editorial judgment is mandatory** —
  it always runs, because the assessment is what detects a gap — and reconciled the labels:
  `T5-FINAL` is that judgment, `EDITORIAL_DISPOSITION` is its **recorded outcome**, not a second
  approval. **Draft 5 is written to `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §14** as a **scoped**
  correction to §13 — Round 29 explicitly forbids restoring §§11–12 wholesale, and §13's
  single-account scope, `PBL-04` candidate and `R182`/Encyclopedia corrections all survive unedited.
  `G-02a` is **amended in subject, retained in substance** (`T5-FINAL` becomes the one transition
  that may be `satisfied`), every criterion is reclassified **by subject rather than numeric range**,
  the non-positive `T5-FINAL` path §13 never specified is drafted with blocked-versus-negative-close
  named as a bounded open question, and §13.8's inherited execution steps are replaced by an explicit
  condition: **this packet is not application-ready.** Per-finding status is stated distinctly rather
  than as a blanket label — `R183` and `R185` remain partially open. Nothing applied to any governed
  tier; `AUTH-DOC` remains unapproved; `D-171` remains binding.
  **Rounds 30–32 (2026-09-04) — read in full before this response.** Round 30 found **four errors in
  Draft 5, all mine, all confirmed against source**: §14.3 inferred a live missing-approval incident
  from `OP-FINAL-SIGNOFF`'s blank source `R` — a blank `R` proves nothing about any article, and an
  A-only sign-off may legitimately approve prior `R`-work; §14.2 said agent acts supply "evidence,
  not judgment" while `FN-GATES-01-05.md` §11.1 states *"Each sealed act records its judgment"*;
  §14.4 said an incomplete package "remains `Reviewed`" while the same clause keeps it `Drafted`
  pre-join; and `SC79`'s one-judgment-per-article rule would have blocked the very remedy §14.1
  permits. **Two scope narrowings then landed.** Round 31 carries the Judge's *"since there is only
  one account there is no requirement to scope in V1"* — **`R185` leaves V1 entirely**, while the
  `G-02a`/`SEC-01a` Line controls are explicitly retained, being a different subject. Round 32
  answers §14.4's open blocked-versus-negative-close question: a negative judgment records its
  result and reasons, authorizes no publication, and triggers **no** automatic return, repair,
  resume or reschedule — the user may **manually re-trigger the whole article's analysis**, which
  carries its own evidence and inherits no approval. **Draft 6 is written to
  `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §15.** It also supplies the explicit scope disposition
  Round 32 requires for existing return/amendment clauses: **`FR-06` (P0/S1), `AC-09`/`AC-10`,
  `AC-08a` and `T8`/`T8a`/`T9` are unaffected** — a blanket "defer negative-path handling" would
  have silently suspended a `P0` requirement, which is the failure this disposition prevents. The
  deferred capability was deduplicated against all nine existing `PBL-*` rows; none fits, so
  **`PBL-10` — automated negative-result handling** is proposed, identity only, unranked, with the
  `V1/NG-*` symmetry question left open for the Judge. Nothing applied to any governed tier;
  `AUTH-DOC` remains unapproved; `D-171` remains binding.
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

---

## Round 15 independent review — Lane A Draft 3 at `3211f21` (2026-09-03)

### Review task, normalized

Review the pushed Draft 3 at `3211f21` without treating the push as approval. Separate the
unresolved T5/T6 plan from the independent `D-188` correction packet; verify which Round 14
findings are actually closed; identify any failure that would make the authorized write set,
future-feature lifecycle, or Graphify evidence ambiguous; and return the smallest parent-first
Draft 4 guide. Do not edit a governed tier, rebuild Graphify over unsettled source, create another
handoff, authorize `AUTH-DOC`, or begin implementation.

### What is completed

Git proves that local `HEAD` and the configured upstream both name `3211f21`. Draft 3 exists at
that immutable revision and touches only this handoff and `V1-B071-CORRECTIVE-PLAN.md`; no governed
tier was changed. The following Round 14 corrections are present and may be preserved:

- `B071-R110`: `V1/NG-10` and `V1/NG-11` remain versioned historical identities and point to
  standing control/policy owners rather than invented `PBL-*` records.
- `B071-R111`: a V1 reconsideration condition becomes historical when V1 freezes.
- `B071-R112`/`R113`: the Product transformation contains no placeholder, ellipsis, or
  self-referential SHA and gives a deterministic canonical-ID map.
- `B071-R114`: `411f834`, `13da259`, and Draft 3's own revision have distinct evidence roles.
- `B071-R116`: the proposed Graphify sequence now requires source push and re-fetch proof first.
- `B071-R117`: transient “proposed/unapplied” state is absent from the proposed Register notice.

`B071-R115` is only **partially** closed. The proposed check inspects relation values, but it does
not address nodes by stable IDs as claimed and does not execute the three named fixtures.

### New findings — highest parent first

| ID | What is unclear or incorrect | Guaranteed failure if unchanged | Smallest Draft 4 fix |
|---|---|---|---|
| `B071-R118` — two independent packets are presented as one Draft 12 | The plan header says Draft 11 is superseded by Rounds 12–14, while §9 says it is **independent of §1–§8**. The same file still calls Round 11 outstanding and leaves `B071-R77`–`R83` unresolved. B-071's current field simultaneously says Draft 12 is not produced and calls §9 Draft 12 | A Judge accepting the narrow `D-188` correction can be read as accepting the unresolved T5/T6 packet or granting `AUTH-DOC`. Conversely, a later reviewer can reject the valid D-188 correction because unrelated T5/T6 defects remain | Keep two explicit lifecycles: **T5/T6 plan = Draft 11, unapproved, `R77`–`R83` open**; **D-188 correction = §9 Draft 4, separately reviewable**. Do not call the whole file Draft 12 unless §1–§8 also resolve Round 11. Replace range/tally summaries with pointers to the appended review sections |
| `B071-R119` — the future POC commercial model is gated by conditions that expire with V1 | §9.4B requires `V1/NG-02` and `V1/NG-03` to resolve **while V1 is open**, while §9.0/§9.3 correctly make those conditions historical at V1 freeze. `PBL-02` and `PBL-04` are living future capabilities and the built POC model is post-V1/deferred | If V1 freezes first, the built commercial model can never become ready; if the old V1 conditions are reused later, frozen history becomes an operational gate again | Make the target version's positive scope and `PBL-02`/applicable `PBL-04` feature readiness the first future condition, after resolving that target version's exclusions. Keep the separate POC Charter/Product Requirements and bounded Judge build act as the authorization condition. Cite `V1/NG-02`/`03` only as V1 history after freeze |
| `B071-R120` — the authority sequence requires durability before the durable record can be written | §9.6 step 3 requires a **durable** Judge act before step 4 appends the Register record. `D-183` instead makes the direct, bounded real-time instruction valid authority and requires Lane A to durably register it in the next Register entry | Execution either waits forever for a record the execution itself must create, or a handoff/plan is incorrectly treated as the canonical approval record | Step 3 receives a direct Judge instruction naming immutable revision `3211f21` (or its corrected successor), exact action, paths, exclusions, and checkpoint under `D-183` points 1–2. Step 4 transcribes/cites that act in the append-only Register correction. Only after that commit may later text say the approval is durably recorded |
| `B071-R121` — §9.1's declared write set is smaller than §9.6's transaction | The declared set names the Register, Product requirements, and Build Spec only. Steps 6–7 also edit B-071, this plan, and a tracked graph fragment | The Judge approves one set and Lane A applies a wider one; the diff fails its own exact-write-set criterion even when every content edit is correct | List every tracked path in the bounded act: `V1-DECISION-REGISTER.md`, `Modular_PRD.md`, `V1-BUILD-SPEC.md`, `V1-B071-CORRECTIVE-PLAN.md`, this B-071 file, and one exact fragment path. Keep Artifact Inventory, frozen sources, Fn/Data/UX specs, Phase Closure, code, schema, and lane state explicitly unaffected |
| `B071-R122` — the Graphify check is label-selected, not ID-addressed | §9.5 says “by node ID,” but `ids(re)` discovers candidate IDs from labels and accepts any number of matches. It can select a duplicate/mislabelled node, and it never proves exactly one canonical node exists | A correctly labelled wrong node can pass; duplicate identities can pass; renaming a label can fail a correct graph | Give the fragment stable exact IDs and use those constants directly. Require exactly one node for each ID, the exact `excludes` relation, and no collapse relation between the exact `PBL-04` and S6/`SEC-03` IDs |
| `B071-R123` — the packet promises literal graph application and three fixtures without supplying either | §9 says every block is literal application text, but §9.5 supplies no fragment filename or JSON and its command checks only the live graph. The three fixture outcomes are prose, not executed inputs | Lane A must invent the fragment during application and can report `NG-S6-SC19` green without ever running a failing collapse fixture or the allowed unrelated-link fixture | Reserve and prove absent one exact path (currently `docs/graph-fragments/frag122.json`), include its complete JSON in Draft 4, and provide one self-contained test that runs the required positive, prohibited-collapse, and permitted-unrelated-link fixtures plus the live graph. Otherwise narrow the success claim; do not call unexecuted fixtures verified |

### Parent-first Draft 4 guide for Lane A

1. **Separate the parent lifecycles.** Correct the plan and B-071 current fields so the original
   T5/T6 Draft 11 remains unapproved with `R77`–`R83` open, while §9 is a separately reviewable
   `D-188` correction packet. A bounded §9 authorization does not grant `AUTH-DOC`.
2. **Correct the future-feature condition.** Replace §9.4B so a later target version's positive
   scope and living `PBL-*` readiness govern future eligibility; V1 conditions are not live after
   V1 freezes. Preserve the separate POC Charter/Product requirements and build authorization.
3. **Close authority and write-set semantics.** State the `D-183` real-time-approval interval
   accurately, name every tracked application path, and keep all unaffected tiers explicit.
4. **Make the graph proposal executable.** Include complete `frag122.json` content after proving
   the path unused; assign stable IDs; replace label discovery with direct ID assertions; execute
   all named fixtures without creating a second tracking artifact.
5. **Publish one corrected review point.** Change only this handoff and the plan, commit and push,
   then prove local/upstream/GitHub identity separately. This creates Draft 4; it applies nothing.
6. **Request one bounded Judge act.** Name the corrected immutable revision and the exact §9 paths,
   action, exclusions, and no `AUTH-DOC`/implementation/lane-transition effect.
7. **Only after that act:** apply the Register parent, then Product/Build children and lifecycle
   evidence; commit and push the exact set. Rebuild the extracted graph, merge all curated
   fragments, run the exact relation/fixture checks and full suite at that same revision.
8. **Independent closure last.** Lane B verifies the pushed/analyzed application revision. Lane A
   may record `Applied`; it may not record `Verified` for its own work.

### Success criteria derived from the failures

| ID | Given | When | Then |
|---|---|---|---|
| `NG-S6-SC21` | The plan header, Round 11, and §9 are read together | Packet lifecycle is evaluated | T5/T6 Draft 11 remains independently open; accepting §9 cannot imply Draft 12 or `AUTH-DOC` approval |
| `NG-S6-SC22` | V1 freezes before its NG conditions resolve | The future POC model is later refined | V1 history is unchanged; the target version's positive scope, living PBL readiness, separate POC requirements, and bounded authorization decide eligibility |
| `NG-S6-SC23` | The Judge gives a direct bounded instruction | The application transaction begins | The instruction is described as received/pending registration, then durably recorded in the Register; no circular prior-durability requirement exists |
| `NG-S6-SC24` | The authorized write set is compared with the commit | Every changed path is listed | No plan, handoff, or fragment path appears outside the Judge-named set; every excluded tier is byte-identical |
| `NG-S6-SC25` | The curated graph and synthetic fixtures are checked | Stable IDs and relation values are evaluated | One canonical node exists per ID; the required exclusion passes; each collapsing relation fails; an unrelated reference remains allowed |

### Drift and what Lane B did instead

The full local suite at `3211f21` reports one failure: `docs-drift`, because
`.graphify/branch.json.lastAnalyzedHead` is `129efab`. The stored `stale: false` flag is not relied
on; revision inequality is decisive. A semantic query against that stale graph did not retrieve the
new §9 model, so its output is not evidence for accepting Draft 3. Graphify must remain unsynchronised
until the corrected source transaction is pushed; rebuilding now would only analyze a rejected
review point and would drift again on Draft 4/application.

Lane B appended this review to the existing B-071 handoff only. It did not edit the plan, Register,
Product requirements, Build Spec, fragments, graph state, implementation, lane state, or the
unrelated untracked `package-lock.json`.

### Round 15 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Git review point | Draft 3 is present at `3211f21`; local `HEAD` and the configured upstream reference agree, and governed tiers were not part of that commit | Preserve as Round 15 input evidence |
| **Approve** | `B071-R110`–`R114`, `R116`, `R117` | The stated narrow corrections are present | Preserve in Draft 4 |
| **Approve-with-conditions** | D-188 correction direction | Product/Build replacements are largely sound, but `R118`–`R123` prevent bounded application | Lane A Draft 4, then independent review |
| **Reject** | Whole-file “Draft 12” / §9 acceptance now | It conflates an independent D-188 packet with unresolved T5/T6 Draft 11 and `AUTH-DOC` | Apply `R118`; request §9-only authority later |
| **Reject** | V1 conditions as permanent future-feature gates | They expire at freeze and cannot govern later PBL readiness | Apply `R119` |
| **Reject** | Current Graphify proof claim | Label-selected live-graph check does not execute the named fixtures or provide literal fragment content | Apply `R122`–`R123` |
| **Defer** | Graphify synchronization | Source is unsettled; current graph is stale by revision comparison | After authorized source commit is pushed |
| **Defer** | `AUTH-DOC`, Product implementation, lane transition | Outside this independent D-188 packet; `D-171` remains binding | Separate governed authorization |

---

## Round 16 — Judge scope clarification: V1 ends at T5; T6 remains `PBL-01` (2026-09-03)

### Clarification classified correctly

**Judge clarification received:** V1 is the editorial `T1`–`T5` proof. Digital T6 assurance and
`EXT-GRC` integration are beyond V1. The clarification supplies the scope meaning needed for the
next draft; it does **not** by itself authorize governed edits, `AUTH-DOC`, implementation, route
activation, or a lane transition (`D-183`). The preceding “push; just done” describes the existing
`3211f21` transaction and does not authorize this new packet.

The frozen `docs/PRD.md` supports the boundary but does not state it expressly: it requires one
five-gate editorial pipeline, logged transitions, Chief approval and publication, and names no T6
assurance or `EXT-GRC` capability. **Silence is not a Non-Goal.** The new Judge clarification—not
an invented PRD link—is the source for the proposed derived V1 exclusion below. The frozen PRD and
Charter remain untouched.

### Parent model — the V1 editorial flow only

```text
T1 Reporter preparation
  → T2 Investigator preparation
  → T3 Journalist preparation
  → T4 senior/peer editorial preparation
  → T5 editorial judgment packet
       ├─ one route-selected editorial-review act
       ├─ Desk Editor + Chief Journalist evidence briefs in parallel
       ├─ deterministic packet seal (no judgment of its own)
       └─ natural-person Chief Editor final editorial judgment
              Reviewed → Approved
  → existing publication/fallback transactions (T7/T10/T11)
```

The two parallel T5 briefs remain because the prior Judge dialogue requires both perspectives before
the Chief Editor decides. For the V1 plan they are **editorial evidence preparation**, not a T6
assurance result, IIA Line 3 work, OD4, external acceptance, or publication. Draft 12 should use one
editorial name—recommended `T5-EDITORIAL-EVIDENCE-PREPARATION`—instead of carrying
`T5-ASSURANCE-PREPARATION` into V1 and recreating the very scope collision being removed.

V1 contains no functional T6 event, T6 result/status vocabulary, `assurance_status` storage,
external-authority selector, external-evidence capture, manual reconciliation, GRC route-activation
predicate, or assurance UI acceptance criterion. A previously discussed reserved layout position is
not a V1 capability and cannot satisfy any acceptance criterion; defer it with `PBL-01` unless an
editorial-only layout requirement independently needs it.

### `R77`–`R83`, reduced to the current editorial proof

| Finding | Editorial-only disposition | What Lane A must draft |
|---|---|---|
| `B071-R77` — `AUTH-F1` combined current editorial proof and deferred assurance | **Resolved in direction, not applied.** `AUTH-F1` owns only T1–T5 editorial behavior and its report. T6 remains living backlog item `PBL-01`, not an `AUTH-F1` child or route prerequisite | Remove functional T6 and `EXT-GRC` behavior from `AUTH-F1`, its diagram, DoD and acceptance gates. Do not mint a future T6 `AUTH-*` checkpoint during V1 |
| `B071-R78` — contradictory human-only rule | **Rewrite for V1.** The natural-person-only act is the Chief Editor's final editorial judgment inside T5. T1–T5 virtual-node preparation and Final Sign-Off keep their separately governed executor/accountable-principal rules | Replace “two human judgments” with one V1 invariant: an agent cannot record the final T5 editorial approval. Do not specify a T6 actor rule in current V1 behavior |
| `B071-R79` — external evidence attached to the wrong transition | **Move entirely to `PBL-01`.** V1 has no internal T6/external-GRC dependency to attach to Delivery | Remove external-GRC evidence from V1 T1–T5 and publication prerequisites. Preserve the real-world manual workflow as business context only; the app claims no assurance completion |
| `B071-R80` — `assurance_status` has no owning contract | **Not a V1 field or projection.** The T5 packet has ordinary editorial evidence/completion facts; `PBL-01` later owns any assurance result and storage model after promotion | Delete current-V1 `assurance_status` requirements and tests rather than choosing an enum or database owner. No schema/migration is authorized |
| `B071-R81` — write set not executable | **Still open, now narrower.** Exact anchors are required for the editorial T1–T5 correction and the new V1 exclusion | Give every affected current clause one path, anchor, treatment and negative search. Remove T6 Product/Fn/Data/UX deliverables from the V1 set; include traceability and existing publication consumers that currently require T6 |
| `B071-R82` — undefined “Minimum Markable Feature” used as completion | **Still open.** The phrase remains non-normative history | Use observable V1 evidence only: URL intake; T1–T5 completion; separately attributable T5 briefs; sealed packet; human Chief Editor decision; persisted `Approved` state; downloadable provenance report; existing publication boundary |
| `B071-R83` — structural regressions | **Still open housekeeping.** It now also covers removing T6 from current diagrams/checklists rather than merely renaming it | Correct section references and duplicate text; state `R72` specified/open; ensure current V1 checklists contain no functional T6, `EXT-GRC`, assurance-status or future-authorization predicate |

### New findings — parent first

| ID | What is unclear or incorrect | Guaranteed failure if unchanged | Smallest fix |
|---|---|---|---|
| `B071-R124` — “implied Non-Goal” would have false provenance | Neither frozen source states “no T6 assurance in V1.” Absence proves only that the customer did not request it | A derived exclusion can be presented as customer scope, while the frozen source cannot substantiate it | Record the Judge clarification in a new Register decision, proposed `D-189` if that ID remains free. Create `V1/NG-12` as an **unanchored derived V1 scope clarification**, source `D-189`; do not cite the frozen PRD as its origin |
| `B071-R125` — current target text still makes T6 part of V1 | The plan, Product rows, Build Spec S2/S3/milestones, RACI target, gate/publication Fn_Specs and transition spec still make T6 the final V1 approval or an audit/report dependency | Lane B can implement a T6-shaped S2 while the backlog says T6 is post-V1; publication can remain blocked on a capability deliberately excluded from V1 | Replace the current V1 target with the T1–T5 model above. Preserve historical clauses as labelled history/target overlays; do not silently rewrite closed evidence |
| `B071-R126` — T5 completion has two competing endpoints | Earlier text makes `T5_review_bundle_sealed` complete T5 and moves approval to T6; the clarification places the human Chief Editor's final editorial judgment in T5 | The system can mark T5 complete before the accountable human decides, or require a nonexistent T6 to reach `Approved` | Treat packet seal as an internal T5 prerequisite only. T5 completes when the human Chief Editor records the final editorial judgment and the article moves `Reviewed → Approved` |
| `B071-R127` — the new actor model is not fully customer-anchored | Frozen `CR-12`/`CR-19` say “Chief Journalist approves”; the clarified target makes the Chief Journalist a virtual evidence/review actor and the human Chief Editor the final approver | A project decision silently changes the actor named by the customer; traceability can say “covered” while implementing a different accountability model | Keep frozen wording unchanged. Record the role remap as a disclosed change/elaboration against `CR-12`/`CR-19` in the requirements traceability map and route the existing customer-feedback mechanism; do not claim exact customer anchoring until accepted |
| `B071-R128` — `PBL-01` currently says no Non-Goal excludes T6 | `D-187` says “Prohibition lift: none applies—T6 is not excluded by a Non-Goal.” The new clarification proposes the opposite V1 fact | The Register and Product backlog can simultaneously say T6 is and is not excluded from V1 | Append a narrow `D-189` supersession of that `D-187` clause only. Preserve `D-187`'s T6/monetization separation and `D-188`'s edge direction: `V1/NG-12 --excludes--> PBL-01`. The living `PBL-01` row keeps its bottom rank and is not authorized |
| `B071-R129` — this clarification does not close Round 15 | The new T6 boundary does not repair the independent D-188 Draft 3 defects `R118`–`R123` | Folding both packets together recreates the Draft-12 lifecycle collision and leaves authorization/Graphify defects hidden | Keep the D-188 Draft 4 correction first and separate. The editorial/T6 scope packet consumes its canonical `V1/NG-* → PBL-*` model only after that parent is corrected |

### Proposed derived Non-Goal — draft text, not yet authorized

After the D-188 table correction is applied, add one Product row with this meaning:

| Canonical ID | ID | Non-Goal | Excludes | Rationale/source boundary |
|---|---|---|---|---|
| `V1/NG-12` | `NG-12` | No digital T6 assurance capability or `EXT-GRC` integration in V1 | `PBL-01` | Derived from the Judge's 2026-09-03 scope clarification, to be durably recorded by `D-189`; **not stated by or linked as a claim of `docs/PRD.md`**. V1 ends with the T1–T5 editorial proof. Manual external work continues outside the app and supplies no app evidence. No V1 reconsideration condition: later scope is decided through `PBL-01`, the target version's positive scope, and a separate bounded authorization |

This row is a versioned historical exclusion, not the future feature record. `PBL-01` remains the
single living T6 capability identity, bottom-ranked and not refinement-ready. No duplicate
`BACKLOG-T6-ASSURANCE`, `FEAT-T6-ASSURANCE`, or current `AUTH-T6-ASSURANCE` record is created.

### Parent-first Lane A drafting plan

1. **Finish the ontology parent first** Correct `R118`–`R123` in the independent D-188 Draft 4
   packet first; do not make this T5 scope clarification approve that packet or `AUTH-DOC`.
2. **Draft the scope decision.** Propose `D-189` with the V1 T1–T5 boundary, `V1/NG-12 → PBL-01`,
   retained/superseded clauses, exact paths and explicit exclusions. It builds nothing.
3. **Draft the Product/traceability children.** Add `V1/NG-12` to `Modular_PRD.md` §2.5 after the
   canonical-column correction; keep `PBL-01` in §2.5.2. Add the unanchored origin and
   `CR-12`/`CR-19` actor-remap disclosure to `requirements-traceability-map.md`. Replace mutable
   numeric summaries with named/pointer-based coverage so another added item cannot stale them.
4. **Draft the editorial contract.** Make `AUTH-F1` T1–T5 only. Packet sealing is an internal T5
   prerequisite; human Chief Editor editorial approval completes T5 and moves `Reviewed → Approved`.
   Publication remains T7/T10/T11-owned.
5. **Close `R81` by inventory, not catch-all.** Enumerate current T6-sensitive clauses in the Build
   Spec S2/S3/milestones/§6, Modular Product rows/ACs, gate/exception/publication Fn_Specs, RACI,
   transition enforcement, editable governing summaries, work order, plan and B-071. For each,
   choose replace, target overlay, historical notice, or unaffected. Frozen PRD/Charter and `0001`
   remain byte-identical; Artifact Inventory is unaffected unless a file is actually created/retired.
6. **Draft failure-derived acceptance criteria.** Use the criteria below; keep T6/EXT-GRC future
   questions under `PBL-01`, outside V1 acceptance and current route activation.
7. **Publish one exact review point.** Change only B-071 and the plan while drafting, then commit,
   push and prove local/upstream/GitHub identity. Request a bounded Judge act only after independent
   review of that exact revision.
8. **Apply only after authorization.** Register parent first, then Product/traceability, V1 tracking,
   derived behavior/spec readers and lifecycle evidence. Commit/push the exact set; rebuild Graphify,
   re-merge curated fragments and run the full suite at the settled revision; Lane B verifies last.

### Success criteria derived from failure

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC1` | Any V1 article | The editorial workflow runs | It can complete T1–T5 and reach editorial `Approved` without T6, `EXT-GRC`, assurance status or manual reconciliation |
| `T5-V1-SC2` | The T5 packet is ready | Completion is evaluated | The seal alone does not complete T5; only the natural-person Chief Editor's final editorial judgment does, and an agent attempt is refused |
| `T5-V1-SC3` | The two parallel evidence acts run | Their purpose and attribution are inspected | Desk Editor and Chief Journalist results are distinct, sealed and visible as editorial evidence; neither is presented as T6, external acceptance, IIA Line 3 or OD4 |
| `T5-V1-SC4` | `V1/NG-12` is traced | Its source and target are read | Its source is the registered Judge clarification, not the frozen PRD; it points to exactly `PBL-01` |
| `T5-V1-SC5` | V1 later freezes | T6 is promoted in a later version | V1/NG-12 remains historical; only living `PBL-01`, later positive scope and a new authorization change future work |
| `T5-V1-SC6` | Publication executes | Its prerequisite is inspected | It consumes the immutable T5 editorial approval; no current clause requires a T6 disposition or external-GRC evidence |
| `T5-V1-SC7` | Requirements traceability is inspected | The final-approver actor is compared | Frozen `CR-12`/`CR-19` remain intact and the Chief Journalist→Chief Editor remap is visibly disclosed, not silently called customer-authored |
| `T5-V1-SC8` | Current V1 requirements/specs are searched | T6-sensitive terms are classified | Every occurrence is labelled historical, future `PBL-01`, or explicit V1 exclusion; no functional T6 requirement remains operative in V1 |

### Drift and review boundary

Graphify remains stale at `129efab` versus source `3211f21`; the prior Round 15 handoff addition and
this Round 16 addition are also uncommitted working-tree content. A graph query therefore returned
the older V1/T6 model and is not evidence for this clarification. Do not rebuild yet: the D-188
Draft 4 and editorial-only plan must settle first, after which one final source commit/push precedes
rebuild and curated merge.

Lane B changed this existing B-071 handoff only. No plan, governed tier, graph fragment, graph state,
application code, schema, lane state, or unrelated `package-lock.json` was changed.

### Round 16 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | V1 scope direction | Current product proof is editorial T1–T5; T6/EXT-GRC capability remains beyond V1 under living `PBL-01` | Lane A exact-text draft |
| **Approve-with-conditions** | `V1/NG-12` | Correct derived record if sourced to the new Register decision and disclosed as unanchored; never attributed to PRD silence | D-189 proposal, traceability review |
| **Approve-with-conditions** | `R77`–`R83` editorial reduction | Dispositions above remove deferred assurance from the current unit but still require exact clause-level drafting and independent review | Lane A editorial-only Draft 12 |
| **Reject** | “Implied by PRD” provenance | Omission is not a customer-authored exclusion | Use Judge decision as source; frozen PRD unchanged |
| **Reject** | T6 as V1 approval/publication dependency | Contradicts the clarified scope and traps V1 behind a bottom-ranked feature | Replace with T5 human editorial approval |
| **Reject** | `V1/NG-12` as living T6 backlog | A versioned negative record cannot own future rank/refinement | `PBL-01` remains sole living owner |
| **Defer** | Customer acceptance of Chief Journalist→Chief Editor final-approver remap | The difference is real and not resolved by document precedence | Existing sponsor/customer feedback route |
| **Defer** | D-188 `R118`–`R123`, Graphify sync, implementation and lane transition | Separate parent packet/source unsettled; `D-171` remains binding | D-188 Draft 4, then bounded authorizations |

---

## Round 17 — Judge clarification: V1 Chief Editor is the sole human approval fallback (2026-09-03)

### What happened

**Judge clarification received:** the frozen PRD's sentence *“Chief Journalist approve →
auto-publish to WordPress OR mark LinkedIn-ready”* does not require a separate Chief Journalist
user account in V1. V1 has one interactive human user/principal, the Chief Editor, who performs the
final editorial approval as the fallback authority. A separate human Chief Journalist access role
belongs to post-V1 multi-user/backlog work.

This resolves the meaning raised by `B071-R127`; it does not edit the frozen PRD and is not an
authorization to apply the derived changes. Under `D-183`, Lane A should fold it into the same
proposed `D-189` V1 editorial-boundary decision from Round 16 rather than create another handoff or
decision packet.

### Terms that must no longer be collapsed

| Object | V1 meaning | Explicitly not |
|---|---|---|
| `USR-CHIEF-EDITOR` | The sole interactive human persona/principal; records final T5 editorial approval | A virtual node; external GRC; a claim that authentication already exists |
| `ROLE-CHIEF-JOURNALIST` | A current virtual editorial role producing its separately attributable T5 brief | A second V1 human account; the final V1 approver; a T6 assurance principal |
| Chief Editor fallback | The V1 mapping used because no separate human Chief Journalist access role exists | Impersonation or a false audit claim that the Chief Journalist account acted |
| Future Chief Journalist access role | A post-V1 multi-user/access capability governed under `PBL-04` | `PBL-01` T6 assurance; S6 authentication itself; present V1 scope |
| S6/`SEC-03` | Authentication and access enforcement when separately authorized | Ownership of multi-user role creation or proof that a Chief Journalist account exists |
| T7/T10/T11 | Existing publication/fallback transactions consuming final editorial approval | A direct side effect of a virtual Chief Journalist brief |

“User account” is therefore a business shorthand in V1, not proof of authenticated identity. Before
S6, the sole Chief Editor interaction retains the already-governed `self_asserted` identity boundary;
the scope clarification must not silently create login, account provisioning or role-based access.

### Effect on the Round 16 editorial model

The T1–T5 sequence stands, with one clarified final actor:

```text
T1–T4 virtual editorial preparation
  → T5 route-selected review + parallel Desk Editor/Chief Journalist evidence briefs
  → deterministic T5 packet seal
  → sole human Chief Editor records final T5 editorial approval
  → Reviewed becomes Approved
  → T7/T10/T11 handles publication or LinkedIn-ready fallback
```

The virtual Chief Journalist brief informs the Chief Editor; it does not approve, publish, or
pretend to be a human account. A future human Chief Journalist access role may later be permitted to
perform a separately specified action, but its existence, permissions, substitution rules and audit
identity are not V1 requirements and are not inferred here.

### New findings — parent first

| ID | What is unclear or incorrect | Guaranteed failure if unchanged | Smallest fix |
|---|---|---|---|
| `B071-R130` — account, principal, persona and workflow role are still used as aliases | Existing text can call the Chief Journalist both an agent and the approving user, while “one Chief Editor account” can be read as authenticated access even though S6 is post-V1 | The audit event can name an actor that did not act; tests can pass by comparing labels instead of principals; login scope can enter V1 accidentally | Add the distinction table above to proposed `D-189` and propagate the fact, not the table count. Use Chief Editor for the human principal, `ROLE-CHIEF-JOURNALIST` for the virtual role, and describe pre-S6 identity honestly |
| `B071-R131` — fallback execution lacks an explicit audit truth rule | Saying the Chief Editor is the fallback does not yet say what the transition record may claim | An implementation can log “Chief Journalist approved” merely to match the PRD sentence even though only the Chief Editor interacted | Require the event to identify the actual Chief Editor principal and Chief Editor approval role/reason. The PRD phrase is satisfied through a documented V1 fallback mapping, never through actor impersonation or rewritten history |
| `B071-R132` — the future Chief Journalist access role can be assigned to the wrong backlog object | “Role creation access” could be placed under T6 `PBL-01` or authentication S6 because both discuss actors and identity | T6 refinement acquires unrelated account administration, or S6 completion is mistaken for multi-user capability | Put future human Chief Journalist access under `PBL-04` multi-team accounts. Keep S6/`SEC-03` as a separate security dependency and `PBL-01` as separate assurance capability; promotion of one authorizes none of the others |
| `B071-R133` — publication language can still make the virtual brief an automatic publish trigger | Frozen PRD wording and several derived clauses say T6/Chief Journalist approval feeds publication, while the clarified V1 target ends with human Chief Editor T5 approval | A virtual recommendation can publish without the sole human's decision, or publication remains blocked on excluded T6 | Define the V1 publication prerequisite as an immutable successful human Chief Editor T5 editorial approval. T7/T10/T11 alone perform target outcomes; no T5 reviewer act publishes |
| `B071-R134` — `R127` is semantically answered but not yet durably applied | The Judge has supplied the fallback interpretation, but the current Product personas, RACI, gate/publication specs, Build Spec and traceability map still carry conflicting actors | A later reviewer will reopen the same question because the answer exists only in this handoff dialogue | Mark `R127` “clarified, propagation pending.” Record the interpretation in proposed `D-189`, then apply one exact clause-level propagation pass and independent review |

### Parent-first Lane A draft update

1. **One decision parent, not another packet.** Extend proposed `D-189` with the fallback mapping:
   V1 has one interactive human Chief Editor principal; the current virtual Chief Journalist provides
   evidence but does not perform final approval; a future human Chief Journalist access role is
   post-V1 `PBL-04` scope. Preserve Round 16's `V1/NG-12 → PBL-01` clause separately inside the same
   decision.
2. **Resolve the frozen-source interpretation without editing it.** Cite `CR-12` together with
   `CR-15` (one Chief Editor account) and this Judge clarification. In the traceability map, replace
   `R127`'s pending remap concern with a named V1 fallback mapping. The frozen PRD/Charter stay
   byte-identical.
3. **Correct the Product role catalog and stories.** `USR-CHIEF-EDITOR` is the only V1 human user;
   `ROLE-CHIEF-JOURNALIST` remains a virtual T5 evidence role; the final T5 approval story and AC name
   the Chief Editor. Link future human role/access capability to existing `PBL-04`; create no new
   backlog ID.
4. **Correct the behavior readers.** The T5 gate, RACI, Build Spec and transition rules must record
   packet seal as a prerequisite and Chief Editor approval as T5 completion. Publication Fn_Specs
   consume that approval through T7/T10/T11. Remove operative V1 text in which an agent/T6 directly
   supplies final approval or publication eligibility.
5. **Keep security and multi-user scope separate.** No V1 login wall or role provisioning is added.
   Future Chief Journalist human access needs independently authorized `PBL-04` capability and
   applicable S6 security; neither is considered complete or authorized by this clarification.
6. **Close with negative evidence.** Draft exact anchors/treatments/searches under `R81`; use the
   success criteria below; publish a plan-only immutable revision for independent review. Apply
   nothing until the bounded Judge act exists.
7. **Graphify last.** After the complete D-188/editorial source packet is authorized, applied,
   committed and pushed, rebuild then merge the curated layer and verify the same revision. Do not
   encode this still-unapplied mapping now.

### Success criteria derived from failure

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC9` | A V1 final approval is recorded | Audit evidence is inspected | The actual executor is the Chief Editor principal; no record claims a Chief Journalist human account acted |
| `T5-V1-SC10` | The virtual Chief Journalist completes its T5 work | State and publication records are checked | Its separately attributable brief is sealed, but the article does not become Approved or publish until the human Chief Editor decides |
| `T5-V1-SC11` | The sole-user V1 flow runs before S6 | Identity evidence is inspected | The flow remains operational and honestly marked under the governed pre-authentication identity level; no authenticated account is fabricated |
| `T5-V1-SC12` | A future Chief Journalist human-access request is raised | Backlog ownership is traced | It resolves to `PBL-04`, with S6 security as a separate dependency; it does not modify `PBL-01` or V1 |
| `T5-V1-SC13` | Publication or LinkedIn-ready handling begins | Its prerequisite chain is traced | It consumes the immutable Chief Editor T5 approval and executes only through T7/T10/T11 |
| `T5-V1-SC14` | Frozen `CR-12` and `CR-15` are compared with derived requirements | Traceability is reviewed | Both frozen statements remain intact and the Judge-approved V1 fallback interpretation is explicitly citable; no silent actor substitution remains |

### What Lane B did instead and drift state

Lane B appended this clarification review to B-071 only. It did not edit the frozen PRD/Charter,
proposed plan, Register, Product requirements, traceability map, RACI, Fn/SPECS, Build Spec, backlog,
graph, application, schema or lane state.

Graphify remains stale at `129efab` versus committed source `3211f21`, and Rounds 15–17 remain
uncommitted in this working tree. The existing graph therefore cannot verify this clarification.
Synchronizing now would encode an unapplied interpretation and immediately drift when Lane A drafts
the corrections. The unrelated untracked `package-lock.json` remains untouched.

### Round 17 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | V1 actor interpretation | Sole human Chief Editor performs final T5 approval as the V1 fallback; current Chief Journalist remains a virtual evidence role | Proposed `D-189` and exact-text draft |
| **Approve** | `B071-R127` meaning | Judge clarification resolves the actor question; propagation is not yet applied | `R134` clause-level pass |
| **Approve-with-conditions** | Frozen PRD trace | `CR-12` is interpreted together with `CR-15`; frozen wording is preserved | Traceability update and independent review |
| **Reject** | False Chief Journalist actor record | Matching the PRD label cannot justify logging a human account/principal that did not act | Actual-principal acceptance test |
| **Reject** | Future Chief Journalist access under T6 or S6 alone | Account-role capability, assurance and security are separate objects | `PBL-04` plus separate security authorization |
| **Reject** | Virtual brief as publish trigger | It bypasses the sole human final decision | T5 approval, then T7/T10/T11 |
| **Defer** | Future Chief Journalist permissions and provisioning | Beyond V1 and not refinement-ready | `PBL-04` promotion |
| **Defer** | Commit, Graphify, implementation and lane transition | Current handoff additions are uncommitted; source packet remains unsettled; `D-171` binds | Lane A draft, bounded Judge act, independent review |

---

## Round 18 — Independent review of proposed `D-189` Draft 1 at `aeec988` (2026-09-03)

### What happened

Lane A converted Rounds 16–17 into proposed `D-189` Draft 1 in
`docs/v1/V1-B071-CORRECTIVE-PLAN.md` §10 and pushed the plan-only revision `aeec988`. Lane B
reviewed the literal draft against the frozen PRD/Charter, `D-171`, the current and target Product
rows, the gate and publication Fn-Specs, the RACI matrix, the traceability map, and the backlog
identities. The Judge's actor clarification is sound, but Draft 1 is not yet internally executable.

This is an independent review of a proposed decision, not approval provenance, application evidence,
or authority to edit a governed tier. `D-189` does not yet exist in the Decision Register.

### What Lane A needs — highest parent first

#### Parent choice: one identifier may not name two stages

Draft 1 currently combines two mutually exclusive models:

| Model | Editorial final judgment | Future assurance | Consequence |
|---|---|---|---|
| **A — latest Judge clarification** | Final human Chief Editor act completes editorial `T5`; V1's editorial gate sequence is `T1`–`T5` | `T6`, owned by future `PBL-01` and outside V1 | Requires `D-189` to partially supersede the target-order `T6` clauses of `D-175`–`D-181` and redraft their derived target rows |
| **B — preserve `D-175`–`D-181`** | Final human Chief Editor act remains editorial `T6` | Future capability is called only `PBL-01 Digital Assurance`/`EXT-GRC`, never bare `T6` | Preserves the decided target mechanics but withdraws every “V1 T1–T5 only” claim |

Draft 1 chooses neither: its title and scope say V1 ends at `T5`, while its actor model, Non-Goal,
RACI, Fn-Spec and Build-Spec edits preserve a human editorial `T6`. Adjectives do not create separate
identifiers. **Lane B recommends Model A because it follows the latest Judge clarification, but only
the Judge can authorize the resulting partial supersession.** No child wording should be finalized
until that parent choice is recorded.

### New findings — parent first

| ID | What is unclear or incorrect | Guaranteed failure if unchanged | Smallest draft fix |
|---|---|---|---|
| `B071-R137` — Draft 1 uses the hybrid `T5`/`T6` model above | “V1 ends at T5” and “the final editorial gate is T6” are both normative inside one proposed decision | State-machine, RACI, UI and audit readers will implement different terminal gates; `V1/NG-12` can still exclude an editorial gate by accident | Obtain the parent choice above. For Model A, add a clause-level partial-supersession table for `D-175`–`D-181`; for Model B, reserve `T6` for the editorial gate and remove `T6` from the future capability's name |
| `B071-R138` — `B071-R136` reverses `D-171` | Draft 1 repeatedly calls the historical current order “currently/live/build-authorized”; `D-171`, Build Spec S2, Product M2 and RACI's current header all say **both orders are held** | A Lane B executor can treat `AC-07` as permission to build the agent-approved order, precisely the path `D-171` stopped | Replace every such phrase with `historical_current_documented_held`; say `AC-07` documents the pre-target behavior but is not authorized. The target is also decided-and-held. No live-order comparison is available yet |
| `B071-R139` — “V1 ends at final approval” truncates the product success flow | Frozen `CR-12`/`CR-19`, Product M4 and the publication Fn-Spec require WordPress publication or LinkedIn-ready handling after approval | A reviewer can mark V1 complete at editorial approval while S4/T7/T10/T11 remains absent | Say **the V1 editorial gate sequence** ends at the chosen final-judgment act; the V1 product flow continues through publication/fallback. `NG-12` excludes assurance, not Delivery |
| `B071-R140` — the proposed traceability row calls a material actor substitution `Covered` | The traceability map defines departure from a customer-named actor as a change request routed through the sponsor; the proposed row itself says that route has not happened | The project can present Chief Journalist→Chief Editor as customer-accepted while its own evidence says acceptance is pending | Mark `CR-12` and the affected part of `CR-19` **change request pending sponsor/customer disposition** (or partially covered), preserve their hashes/text, and keep the Judge clarification as project-side rationale rather than customer approval |
| `B071-R141` — the declared write set has no literal publication Fn-Spec edit | §10.1 names `FN-PUBLICATION-09-10-13.md`, but §§10.2–10.5 provide no exact replacement for its `US-09`, its “already passed T5 and T6” sentence, or §11's immutable-`T6` prerequisite | Step 6's “every changed paragraph was present verbatim” condition cannot pass; Lane A must improvise and the publication tier can retain the rejected agent trigger | Add exact current→target text for every affected publication clause, or remove the file from the write set. Align Product `US-09` and `AC-14a` with the same chosen gate identifier and held-state label |
| `B071-R142` — Draft 1 closes findings that only the future application can close | Proposed `D-189` says `R134` propagation and several draft defects are “Closed” while no governed tier changed | The plan becomes its own false completion evidence; later review cannot distinguish designed, applied and independently verified | Use `Draft-addressed; application pending` for `R124`–`R141`. Close only after the exact source pass lands and Lane B independently verifies it |
| `B071-R143` — D-54 applicability is not explicit for every tracking tier | Draft 1's tier table omits `V1-ARTIFACT-INVENTORY.md` and does not state whether `Modular_PRD.md` §8 is affected | A later application can be challenged as incomplete or add unnecessary tracking edits during execution | State `Inventory — unaffected: no file artifact created/retired`; `Modular_PRD §8 — unaffected unless the act changes sprint status or opens a tier`; Phase Closure and Encyclopedia remain explicitly unaffected |
| `B071-R144` — “fallback” is ambiguous between requirements mapping and runtime behavior | The Chief Editor is V1's canonical sole human actor, but the label can sound like failover from an unavailable Chief Journalist account | Implementers may add an account-selection/failover branch, or audit text may imply a Chief Journalist account normally exists | Define it as a **requirements-interpretation mapping only**. Runtime V1 has one canonical Chief Editor approver and no alternate human account |

### Corrective packet for Draft 2

1. **Judge choice first:** select Model A or Model B and name the clauses it preserves or
   supersedes. Do not treat approval of this review as that decision.
2. **Repair the authority baseline:** withdraw `R136`'s “currently authorized/live” premise in the
   plan and B-071. Both current and target gate orders remain held by `D-171` until a separate build
   authorization selects one.
3. **Repair the scope boundary:** distinguish the editorial-gate boundary from the full V1 outcome;
   publication/fallback remains in V1, digital assurance/`EXT-GRC` does not.
4. **Repair customer traceability:** classify the actor change under the traceability map's own
   elaboration/change-request rule. Do not mark customer acceptance before the sponsor route returns.
5. **Close the literal write set:** provide exact text for Product stories/ACs, gate Fn-Spec,
   publication Fn-Spec, RACI and Build Spec; include the parent decision's partial-supersession table
   if Model A is selected. Remove targets that receive no edit.
6. **Separate lifecycle states:** draft-addressed → Judge-authorized → applied → independently
   verified. No proposed decision may call its future propagation closed.
7. **Apply parent-first only after bounded authorization:** Register first, then derived tiers. Keep
   frozen PRD/Charter unchanged. State Inventory, Phase Closure, Product §8 and Encyclopedia effects
   explicitly even when unaffected.
8. **Synchronize last:** commit and push the complete source packet, fetch-prove that revision, then
   rebuild Graphify, merge curated fragments and run the full suite at the same revision. Lane B—not
   Lane A—decides terminal verification.

### Success criteria derived from the failures

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC19` | Draft 2 is read without prior conversation | Every normative `T5`/`T6` occurrence is classified | Exactly one stage owns final editorial judgment and exactly one stable identity owns future assurance; no identifier denotes both |
| `T5-V1-SC20` | Current and target gate rows are inspected | Their authority labels are compared with `D-171` | Both are visibly held; no row or plan sentence says either is currently build-authorized |
| `T5-V1-SC21` | The V1 scope boundary is evaluated | Editorial approval completes | Publication/LinkedIn-ready work remains required through its governed Delivery transitions; assurance remains excluded |
| `T5-V1-SC22` | `CR-12`/`CR-19` are reviewed | Chief Journalist→Chief Editor is compared | Frozen wording and hashes remain intact; the actor difference is visibly pending customer disposition and is not labelled fully covered |
| `T5-V1-SC23` | The execution write set is used without chat context | Each named target is opened | Every edit is supplied literally, including the publication Fn-Spec, or the unchanged target is explicitly removed/unaffected |
| `T5-V1-SC24` | Proposed, applied and verified states are queried | Evidence is inspected | A draft proves only drafting, an application commit proves only application, and an independent review alone can supply `Verified` |
| `T5-V1-SC25` | The sole-user V1 flow is executed | Actor selection and audit records are inspected | Chief Editor is the canonical runtime approver; no fallback branch or nonexistent Chief Journalist account is created or logged |

### What Lane B did instead

Lane B appended this independent review to the existing `B-071` entry only. It did not create a
duplicate handoff, edit the proposed plan, alter a governed tier, decide the parent model, narrow
`D-171`, build code, change lane state, rebuild Graphify, commit, or push. The unrelated untracked
`package-lock.json` remains untouched.

At review time local `HEAD` and upstream both resolve to `aeec988`. Graphify is still based on
`129efab`; its query did not retrieve proposed `D-189` and instead returned unrelated schema nodes,
so it is not evidence for this review. Synchronization remains the final post-application step.

### Round 18 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Judge actor clarification | One V1 human Chief Editor; virtual Chief Journalist supplies evidence, not final approval | Preserve in Draft 2 |
| **Approve-with-conditions** | Proposed `D-189` direction | Assurance, editorial judgment, publication and future accounts are correctly separate in intent | Resolve `R137`–`R144`, then independent re-review |
| **Reject** | `D-189` Draft 1 as executable text | Hybrid `T5`/`T6` model, false `D-171` authority premise, incomplete publication write set and premature closure | Lane A Draft 2 |
| **Reject** | `B071-R136` current-build premise | Both orders are held; `AC-07` is historical documentation, not build permission | Correct plan and B-071 provenance text |
| **Reject** | `CR-12`/`CR-19` as fully Covered now | Actor substitution is not yet customer-accepted under the map's own rule | Sponsor/customer route |
| **Defer** | Parent Model A/B choice | Required before child drafting can become internally consistent | Bounded Judge decision |
| **Defer** | Application, Graphify and build authorization | Plan remains unapplied; graph is stale; `D-171` binds | Accepted Draft 2, application, independent verification |

---

## Round 19 — Independent review of proposed `D-189` Draft 2 and the T6-retrospective clarification (2026-09-03)

### What happened

Lane A converted Model A into proposed `D-189` Draft 2 at pushed revision `702fccc`. The Judge then
clarified that V1 editorial work ends at T5, T6 is the future assurance flow owned by `PBL-01`, and
the superseded T6-assurance analysis should be preserved in a Lane A journal outside V1's operative
scope. Lane B reviewed Draft 2 and that proposed archival move against the actual governing sources,
Decision Register, Build Spec, Product requirements, Fn-Specs, RACI, configuration log, work order,
technical transition spec, journal rules and Graphify state.

Model A is now the decided direction. Draft 2 is still not executable: its exact T5 mechanics, source
propagation, lifecycle separation, audit identity fields and retrospective boundary remain incomplete.
This review appends to B-071 only; it creates no second handoff.

### What Lane A needs — parent first

#### Parent 1 — keep the three lifecycles separate

| Lifecycle | Sole subject | Must not absorb |
|---|---|---|
| `D-188` Draft 4 | Canonical `V*/NG-* --excludes--> PBL-*` relation and its literal/Graphify proof | T5/T6 gate mechanics, `AUTH-DOC`, or the assurance retrospective |
| Proposed `D-189` Draft 3 | V1 T5 editorial completion, T6 future-assurance boundary, actor/identity terminology, and `V1/NG-12 → PBL-01` | `D-188`'s open proof defects or §1–§8's `D-182` authorization |
| Original §1–§8 / proposed `D-182` | `AUTH-DOC`, `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE` documentation and later feature authorization model | `PBL-01` refinement or authority to build future T6 assurance |

`B071-R118`–`R123` and `NG-S6-SC21`–`SC25` remain evidence for the independent D-188 Draft 4
packet. They are not “T6-related” merely because D-189's Non-Goal row consumes D-188's table shape.
Likewise, `AUTH-DOC` authorizes the original D-182 documentation packet only; it is not a future-T6
feature authorization. A reference edge is not ownership.

#### Parent 2 — define one T5 stage with one completion

Draft 2 preserves `D-181`'s statement that `T5_review_bundle_sealed` is the **stage-completing** act,
then adds `T5-FINAL` as a second act that also “completes T5.” The corrected five-stage model needs
one nested-stage contract:

```text
T5 editorial stage
  ├─ T5-REVIEW act(s): route-selected virtual reviewer evidence
  ├─ T5-REVIEW-BUNDLE-READY: deterministic join; packet ready, no final judgment
  └─ T5-FINAL: Acting Chief Editor judgment; the only T5 stage completion
                 Reviewed → Approved

T6 assurance stage
  └─ future PBL-01 only; absent and not applicable in V1
```

`T5-FINAL` is acceptable as a sub-act identifier if the Judge confirms it. It is not a sixth
editorial gate. The join may still perform the intermediate `Drafted → Reviewed` state transition,
but it must say **review workstream complete / final judgment pending**, never “T5 complete.” Only
the human final judgment makes the article editorially Approved and eligible for Delivery.

### New findings — highest parent first

| ID | What is unclear or incorrect | Guaranteed failure if unchanged | Smallest Draft 3 fix |
|---|---|---|---|
| `B071-R145` — D-188, D-189 and `AUTH-DOC` are re-conflated by dependency language | The clarification calls `R118`–`R121`, `NG-S6-SC21`–`SC25` and `AUTH-DOC` T6-related; their actual owners are the independent D-188 packet and original D-182 packet | Accepting D-189 can be read as accepting D-188 Draft 4 or granting `AUTH-DOC`; later T6 refinement can inherit a V1 documentation checkpoint that never governed it | Use the three-lifecycle table above. D-189 may depend on D-188's table shape without owning D-188's findings. Future T6 authorization is created only when `PBL-01` is promoted in a later version |
| `B071-R146` — T5 still has two completion points | Draft 2 keeps the bundle join as the sole “stage-completing transition” while `T5-FINAL` also completes T5 | The UI can show T5 complete before the human decides, or execute the human act as an unnumbered sixth gate; acceptance tests can disagree while each follows the plan | Make review-bundle readiness an internal T5 prerequisite and `T5-FINAL` the only editorial-stage completion. Partially supersede `D-181`'s `R56` wording; preserve its one-write/race-prevention mechanic |
| `B071-R147` — the write set skips higher-precedence governing sources | Addendum, Blueprint and Business Case still normatively define editorial `T6` as Chief Journalist approval and a Line 2→1 crossing; Draft 2 proposes only lower-tier edits | The higher-precedence source model defeats the derived D-189 model on every future arbitration; Lane B can correctly reject the changed lower tiers as contradictory | Add exact, annotation-preserving current/target corrections for `v1-build-readiness-addendum.md`, `blueprint.md` and `business-case.md`, or explicitly explain the governing mechanism that supersedes each clause. Frozen PRD/Charter remain unchanged |
| `B071-R148` — the operative T6 impact surface is incomplete | Actual search finds editorial-T6 semantics in `CONFIG_LOG.md`, audit/exception/publication/gate Fn-Specs, the work order, transition SPECS, Addendum/Blueprint/Business Case, Build Spec, Product requirements and RACI. Draft 2 edits only a subset | Gate counts remain six, the board still measures `T6→T5`, returns append T6 dispositions, S2 Unit 2 still owns T6, and transition enforcement still permits editorial T6 | Classify every nonhistorical occurrence as `editorial T5 sub-act`, `future PBL-01 assurance`, or unaffected publication/return history. Supply exact edits for every operative occurrence and explicit historical-retention notices for records that must not be rewritten |
| `B071-R149` — the “literal” D-189 block contains an application-time placeholder | §11.4 says the §11.3 table will be reproduced later instead of containing it | `G32` applies: Lane A must improvise while applying supposedly exact text, and the Register entry is not self-contained | Put the complete clause-level supersession table inside the literal decision block. A duplication concern does not justify a placeholder in the authoritative artifact |
| `B071-R150` — the predecessor supersession table is materially incomplete | `D-175`, `D-177`, `D-178`, `D-179`, `D-180` and `D-181` all carry target editorial-T6 or `T6→T5` semantics. Draft 2 treats D-178/D-179 as absent and D-180/R56 as unaffected | Old decisions remain current citations for a label and stage boundary D-189 has superseded; later reviewers can legitimately restore the old model | Add clause-level dispositions for every operative occurrence. In particular, re-derive D-178's event sequence/Target DoD, D-179's target AC/proof text, D-180's target metrics/security rows, and D-181 R56's “T5 complete” wording |
| `B071-R151` — the proposed journal “move” can erase rather than preserve governance | Repository rules make journals historical memory only and prohibit rewriting them to stay current. Existing handoffs and decisions are append-only provenance | Deleting open findings or future backlog ownership from B-071/operative tiers and putting them only in a journal silently drops requirements and authority | Create a new dated retrospective, never rewrite an old journal and never delete source history. The journal summarizes superseded reasoning and links back; `PBL-01`, D-189, unresolved findings and authorization remain in their canonical operative homes |
| `B071-R152` — Graphify has no semantic migration contract | Draft 2 says rebuild/merge but reserves no fragment and gives no query proving T5 editorial and T6 assurance are distinct | `docs-drift` can pass while semantic queries still return the old editorial-T6 graph or no D-189 result, repeating the current query failure | Reserve an exact fragment path, provide literal nodes/edges or state that extraction alone owns them, and test exact stable IDs: T5-FINAL is part of V1 editorial T5; PBL-01 owns future T6; neither is an alias or successor of the other |
| `B071-R153` — `Acting Chief Editor` is still called a principal | RACI defines `Acting Chief Editor` as an accountable role/holder label. Draft 2 also calls it the principal the audit record names, collapsing role with identity | Audit records can store a role label where an executor identity is required; two attempts by different principals become indistinguishable, especially before S6 | Keep four fields distinct: persona/display = Chief Editor; accountable role = `ROLE-CHIEF-EDITOR` / Acting Chief Editor; executor identity = `executor_principal_key` with governed pre-S6 `self_asserted` assurance; virtual attempt disclosure = `agent_attempt_badge_id` where applicable |

### Draft fix — one parent-first packet

1. **Finish D-188 Draft 4 independently.** Apply `R118`–`R123` and prove `NG-S6-SC21`–`SC25`.
   This supplies the canonical Non-Goal/PBL table shape only; it grants no D-189 or `AUTH-DOC`
   authority.
2. **Issue D-189 Draft 3 with the T5 nested-stage contract.** Confirm the exact `T5-FINAL`
   sub-act identifier. Make it the only editorial completion; reserve `T6` for future `PBL-01`.
3. **Complete the supersession table and literal decision.** Include every affected D-175–D-181
   clause and place the full table inside the literal Register text—no application-time placeholder.
4. **Draft the governing-source corrections before lower tiers.** Addendum first, then Blueprint,
   Business Case, Decision Register, Build Spec, Product requirements, Fn-Specs/RACI/SPECS and
   operational tracking. Preserve historical passages with dated notices rather than silent rewrites.
5. **Separate identity fields.** Use Chief Editor only for the business persona; Acting Chief Editor
   / `ROLE-CHIEF-EDITOR` for accountability; `executor_principal_key` for the actual human executor;
   `agent_attempt_badge_id` only for an AI attempt. Do not claim authentication before S6.
6. **Create the retrospective as a child artifact, not a substitute owner.** Proposed path:
   `docs/journal/2026-09-03-t6-assurance-out-of-v1-retrospective.md`. It records the retired analysis,
   why Model A displaced it, and pointers to D-188/D-189/B-071/PBL-01. It states prominently:
   historical memory only; no authority, readiness, rank, acceptance or current status lives here.
   Because this creates a file, include it in `V1-ARTIFACT-INVENTORY.md` and state its sequence/DoD
   in Build Spec and its creation in the Register in the same authorized pass (`D-54`).
7. **Do not move canonical facts.** B-071 retains append-only review history; D-188 retains
   `R118`–`R123`; `PBL-01` remains the sole living future-assurance identity; the target version's
   future authorization is minted only on promotion. `R77`–`R83` are reclassified clause by clause:
   editorial-T5 obligations stay operative under D-189; assurance-only discussion is retrospective;
   no blanket “moved/closed” label is allowed.
8. **Close the complete T6 reference surface.** Produce an occurrence ledger containing path,
   anchor, classification, exact treatment and owner. Historical decisions/journals are retained;
   every operative source/spec/config/test reference is changed or explicitly unaffected.
9. **Graphify last.** After one authorized source transaction is committed, pushed and fetch-proven,
   rebuild, merge the reserved fragment, then verify the same revision. An exact-ID query must return
   both concepts separately. Lane B performs independent verification; implementation remains held.

### Retrospective journal — minimum contents

The journal must remain short and non-operative:

1. Date, source revision and reason for the retrospective.
2. Prior conflation: editorial final judgment and external assurance both called `T6`.
3. Current interpretation: T5 owns V1 editorial completion; T6 is future `PBL-01` assurance.
4. What remains authoritative: D-188 relation model, proposed/applied D-189, B-071 lifecycle,
   `PBL-01` backlog row and future target-version authorization.
5. What the journal does not do: authorize, rank, refine, close, supersede by itself, or replace any
   canonical record.
6. Links to the exact decisions/handoff sections; no copied live status, counts or mutable checklist.

### Success criteria derived from failure

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC30` | D-188, D-189 and §1–§8 are reviewed | Their subjects and approvals are traced | Each has one independent lifecycle; accepting one cannot authorize either of the others |
| `T5-V1-SC31` | All T5 review acts and the human judgment occur | Stage completion is inspected | Review-bundle readiness occurs once; only `T5-FINAL` completes editorial T5 and permits Approved |
| `T5-V1-SC32` | A governing-source and derived-tier conflict is tested | T5/T6 semantics are compared | Addendum, Blueprint, Business Case and every lower tier agree on T5 editorial/T6 assurance separation |
| `T5-V1-SC33` | Every repository occurrence of `T6`, `T6→T5` and the old gate count is classified | The occurrence ledger is checked | Every operative occurrence has one meaning and exact treatment; retained history is visibly historical |
| `T5-V1-SC34` | D-189's literal Register block is applied without chat or plan context | The resulting entry is compared | It is self-contained and includes the exact supersession table; no placeholder or improvised clause exists |
| `T5-V1-SC35` | The new retrospective is opened | Authority and ownership are checked | It identifies itself as historical memory; `PBL-01`, authorization and live status resolve elsewhere |
| `T5-V1-SC36` | A human final action is audited | Persona, role and identity fields are compared | Chief Editor, `ROLE-CHIEF-EDITOR`, `executor_principal_key` and assurance level are distinct; no role label substitutes for identity |
| `T5-V1-SC37` | Graphify is queried at the final pushed revision | Exact nodes and relations are inspected | T5-FINAL resolves only to V1 editorial T5; future T6 resolves only to `PBL-01`; no conflating edge exists |
| `T5-V1-SC38` | V1 publication eligibility is evaluated | The T5 and T6 outcomes are checked | Human T5 editorial approval permits Delivery; absent future T6 assurance cannot block a non-GRC V1 article |

### What Lane B did instead

Lane B appended this review to the existing B-071 handoff only. It did not edit Draft 2, create the
retrospective, change any governed source/tier, classify the full occurrence ledger as applied,
commit, push, rebuild Graphify, implement code or alter lane state. The untracked `package-lock.json`
remains untouched.

At review time local `HEAD` and upstream both resolve to `702fccc`. Graphify remains based on
`129efab`; its stale semantic output cannot verify Draft 2. Synchronization remains last, after the
complete authorized source packet—not after this review.

### Round 19 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Model A business direction | V1 editorial completion is T5; future T6 assurance is `PBL-01` and outside V1 | Preserve in D-189 Draft 3 |
| **Approve** | D-188/D-189/`AUTH-DOC` separation | Corrects the new lifecycle conflation | D-188 Draft 4, then D-189 Draft 3 independently |
| **Approve-with-conditions** | T6 assurance retrospective | Useful historical consolidation if it owns no operative fact and D-54 records the new artifact | After D-189 authorization/application |
| **Approve-with-conditions** | `T5-FINAL` | Suitable as a T5 sub-act, not a sixth gate; must be the sole stage completion | Judge confirms exact identifier; Draft 3 propagates it fully |
| **Reject** | D-189 Draft 2 as executable text | Two T5 completion points, incomplete source/write surface, incomplete supersession and a nonliteral Register placeholder | Lane A Draft 3 |
| **Reject** | Moving D-188 findings or `AUTH-DOC` into T6 history | They govern separate packets and would be dropped/mis-authorized | Preserve canonical ownership |
| **Reject** | Journal as backlog or authorization owner | Journals are historical memory only | `PBL-01` plus future target-version authorization |
| **Defer** | Application, Graphify, implementation and lane transition | Source packet is unsettled; `D-171` remains binding | Accepted Draft 3, bounded Judge act, application, independent verification |

---

## Round 20 — Account accountability and T5 completion clarification (2026-09-04)

### What happened

The Judge clarified that **Acting Chief Editor is an accountability involvement, not a role**.
During a Publication Flow, the one account holding the Chief Editor access right supplies the human
decision; a later takeover changes the holder, not the business persona or the gate. The same
clarification confirms the intended T5 presentation: virtual review evidence is sealed first, the
human Chief Editor then makes the final editorial judgment, and Delivery consumes that decision.

Lane B compared that clarification with proposed `D-189` Draft 2, proposed `D-182`, `D-177`, the
Product role catalog, RACI matrix, gate/publication Fn-Specs, Build Spec and B-072. Round 19 remains
the parent review. This round adds only the corrections needed for account accountability and the
T5 UI/state contract; it does not repeat Round 19's complete occurrence-ledger or propagation work.

### What Lane A needs — highest parent first

#### Parent 1 — separate the five objects before naming an actor

| Object | Normalized meaning | Minimum record/evidence | Must not be used as |
|---|---|---|---|
| **Chief Editor** | Business persona and UI label from the frozen PRD | Display label only | Account ID, permission, or audit identity |
| **Chief Editor access right** | Permission to use the human T5-final controls | One effective assignment at a time in V1 | RACI role or proof of who acted |
| **Acting Chief Editor** | The current holder's accountability involvement during an effective interval | Assignment reference, `effective_from`, optional `effective_to` and reason | Role ID or principal ID |
| **RACI `A`** | Accountability relation for the applicable task/stage | Resolved to the Acting Chief Editor assignment at decision time | Executor identity or permission grant |
| **`executor_principal_key`** | Stable identifier of the natural person/account that actually acted | Stored on the immutable decision event with `identity_assurance` | Persona, role, access right, or AI attempt badge |

For V1, the existing RACI rule supplies the scope: **one active Chief Editor assignment for the
whole business**. A takeover closes the old interval and opens the new one; it never rewrites old
events. Each event keeps the principal and assignment that were effective when it occurred.
Because S6 authentication is not present, V1 may prove only a configured/self-asserted principal,
not an authenticated user. The UI and audit record must say so.

“Other users default to the next role” is not executable. No canonical ordered role ladder, default
permission set or reassignment trigger exists. The safe rule is: **no automatic privilege fallback**.
A non-holder retains only separately assigned rights, or is unassigned/read-only. A future automatic
fallback requires its own positive feature contract, ordered roles and negative authorization tests.

#### Parent 2 — one T5 stage, one final judgment, two different state axes

```text
T1–T4 editorial preparation
  -> T5-REVIEW act(s)
       production route: one route-required virtual review
       fallout/GRC route: two separately attributable virtual reviews
  -> T5-REVIEW-BUNDLE-READY
       deterministic readiness/join event; no R, no A, no judgment
       article workflow_state: Drafted -> Reviewed
  -> T5-FINAL
       human Acting Chief Editor decision; the only T5 stage completion
       approve: workflow_state Reviewed -> Approved
       reject: workflow_state Reviewed -> Rejected (or governed return, if selected)
  -> Delivery T7/T10/T11 consumes the immutable T5-FINAL disposition

Future T6 assurance
  -> PBL-01 only; outside V1 and not required for non-GRC V1 Delivery
```

`T5-REVIEW-BUNDLE-READY` is therefore **not a judgment gate**. Calling it one contradicts the
existing no-`R`/no-`A`/no-judgment join and recreates the two-completion defect `B071-R146` found.
Likewise, `None`/`WIP`/`Drafted`/`Reviewed` cannot be one canonical state enum: the first two are UI
progress labels while the latter two are article workflow states. If the UI needs all four, use a
derived `t5_review_status` (`not_started`/`in_progress`/`bundle_ready`/`finalized`) and leave
`workflow_state` governed by the transition model above.

#### Parent 3 — bind the nodes to evidence acts, not accounts or accountability

Proposed `D-182` may retain `NODE-EDITORIAL-DESK-REVIEW` and
`NODE-CHIEF-JOURNALIST-REVIEW` as virtual workcells. It must state separately which nodes are
route-required for `T5-REVIEW`, and may not infer an account, Chief Editor access right, RACI `A`,
or human executor from a node name. The current plan contains both “both Assurance Preparation
nodes on every route” and “one production/two fallout-GRC reviews”; Draft 3 must either:

1. make those two different evidence sets with different IDs and cardinality, or
2. retire the universal two-node Assurance Preparation set and use the route-dependent
   `T5-REVIEW` set above.

They cannot share an event ID while carrying different cardinality. The Judge's latest wording
supports option 2 for the V1 editorial flow; any assurance-only evidence remains future `PBL-01`.

#### Child 1 — publication UI and explainable-output contract

The T5 publication workspace should display the sealed review bundle read-only, the current
accountability holder, actual executor identity/assurance, and the human final control. Its actions
must map to governed outcomes, not new prose states:

- **Approve editorial MVP:** append `T5-FINAL` with
  `newsworthiness_finding = sufficient_evidence`, reason and evidence references; move
  `Reviewed -> Approved`; enable the governed Delivery path.
- **Do not approve:** append `T5-FINAL` with
  `newsworthiness_finding = insufficient_evidence`, reason and evidence references; move to the
  governed `Rejected` or return path. Do not delete or use an undefined `discarded` state.
- **Public Explainable Content with report:** generated from the immutable T5-final decision and
  its cited review evidence. Store a versioned artifact/provenance reference; show a download URL
  only after generation succeeds and show explicit pending/failure states otherwise.
- **Assurance section:** stable read-only placeholder in V1. It must not imply T6, external GRC
  acceptance, or an assurance approval occurred.

`D-177` can own behavioral storyboard references, but the actual UI layout belongs in a
stack-specific `docs/specs/ux/` artifact under `D-34`. No such directory exists today. If the
authorized packet creates that file, `D-54` requires the Register, Build Spec and Artifact Inventory
to record its creation in the same pass. The frozen PRD remains untouched.

#### Child 2 — B-072 and journal boundary

B-072 solves the **handoff transaction**: a permitted actor can durably commit and push its own
handoff evidence without obtaining the work-product lock. It does not change canonical ownership.
PBL-01 stays in the backlog, open findings stay in their handoff, authority stays in the Decision
Register, live lane state stays in Phase Closure, and immutable execution evidence stays at its
own owner. A journal may link to those facts as history; it cannot move or replace them.

### New findings — only this clarification's delta

| ID | Gap | Guaranteed failure if unchanged | Smallest Draft 3 fix |
|---|---|---|---|
| `B071-R154` | Draft 2 calls Acting Chief Editor an in-app role and the principal | Audit and authorization records can store a role label instead of the person/account that acted | Replace §11.2/§11.4 actor rows with the five-object table above; correct `ROLE-CHIEF-EDITOR` wherever it denotes the accountability involvement rather than an executor role |
| `B071-R155` | Singleton assignment and takeover have no scope, interval or immutable-event rule | Two holders can appear simultaneously, or reassignment can rewrite who made an earlier decision | V1 scope = whole business; require non-overlapping effective assignments and snapshot the assignment/principal on each final event |
| `B071-R156` | “Default to next role” has no defined order or permission boundary | A user can gain or lose privileges silently, producing an unreviewable authorization path | Reject automatic fallback in V1; future capability requires a named backlog feature and explicit role-order tests |
| `B071-R157` | The clarification speaks of account access while S6/login remains absent | The POC can be presented as authenticated even though identity is only self-asserted | Keep the operational flow, but label `identity_assurance = self_asserted`; authenticated assignment enforcement is separately authorized later |
| `B071-R158` | Bundle readiness is called both a judgment gate and a no-judgment join | T5 can complete twice and the UI can enable approval before the human decision | Make bundle readiness deterministic and `T5-FINAL` the sole stage completion; partially supersede D-181's “stage-completing” wording while preserving its one-write race control |
| `B071-R159` | UI progress labels are mixed with article workflow states | Implementations will persist `None`/`WIP` into a governed enum or show `Reviewed` as final approval | Define a separate derived T5-progress axis and exact mappings to `Drafted`/`Reviewed`/`Approved`/`Rejected` |
| `B071-R160` | Publish/discard and explainable-report outcomes lack exact governed mappings | A direct publish can bypass Delivery, a discard can erase evidence, or reports can contradict the decision | Map approve/reject to immutable T5-final dispositions; Delivery alone publishes; report derives from the same decision/evidence IDs |
| `B071-R161` | Proposed D-182's universal assurance nodes conflict with the new route-dependent T5-review cardinality | Production routes can emit both one and three review acts depending on which paragraph is read | Select one V1 evidence set or give editorial and assurance evidence distinct IDs; recommended V1 choice is route-dependent editorial T5 only |
| `B071-R162` | B-072 is described as solving canonical backlog/history ownership | A pushed journal or handoff can be mistaken for moving a PBL, decision, lane state or lifecycle fact | State B-072 is transport/lifecycle evidence only; preserve one canonical owner per fact under D-186 |

### Draft fix — one parent-first Lane A packet

1. Amend proposed `D-189` Draft 3 first: five-object actor model, singleton effective assignment,
   no automatic fallback, self-asserted V1 limit, and the nested T5 contract.
2. Reconcile proposed `D-182` with D-189: node IDs describe virtual workcells only; editorial and
   assurance evidence do not share an event identity or cardinality. `AUTH-DOC` remains separate.
3. Complete Round 19's clause-level supersession and occurrence ledger, adding R154–R162. The
   Register parent must explicitly supersede D-181's “join completes T5” phrase while preserving
   the join's atomic `Drafted -> Reviewed` write.
4. Propagate behavior to the higher-precedence sources and derived Product/Fn-Spec/RACI/Build-Spec
   rows already listed in Round 19. State Inventory and Product §8 effects explicitly.
5. Draft the publication-workspace UX artifact only after the behavior is authorized; if a new file
   is created, record its lifecycle across all D-54 tracking tiers. No application code is built.
6. Keep B-072 and any retrospective link-only. Do not copy live backlog, authority, lane state or
   lifecycle values into a journal.
7. Commit and push the complete authorized source packet, fetch-prove it, then rebuild Graphify,
   merge the curated fragment and run the full suite at that same revision. Independent Lane B
   review—not Lane A—may record `Verified`.

### Success criteria derived from failure

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC39` | A Chief Editor takeover is recorded | Old and new assignment intervals are inspected | Exactly one is active for the whole business; old final events retain the old `executor_principal_key` and assignment reference |
| `T5-V1-SC40` | A non-holder opens the T5-final control | Authorization is evaluated | The action is refused/read-only; no automatic “next role” is inferred |
| `T5-V1-SC41` | V1 operates before S6 | A T5-final event and UI identity are inspected | The configured principal is visible and recorded with `identity_assurance = self_asserted`; nothing claims authentication |
| `T5-V1-SC42` | All route-required T5 reviews are sealed | Bundle readiness fires | Exactly one deterministic `Drafted -> Reviewed` write occurs; no judgment, RACI `R`/`A`, or T5-complete claim is attached to the join |
| `T5-V1-SC43` | The bundle is ready | The Acting Chief Editor approves | One human `T5-FINAL` event records principal, assignment, reason, evidence and sufficient-evidence finding; `Reviewed -> Approved` occurs once |
| `T5-V1-SC44` | The bundle is ready | The Acting Chief Editor does not approve | Evidence is retained; the governed reject/return transition occurs; no undefined discard/delete path exists |
| `T5-V1-SC45` | A production and a fallout/GRC route are compared | T5 review evidence is counted by stable IDs | Production requires one editorial review; fallout/GRC requires two; no universal assurance-preparation set is silently added to V1 |
| `T5-V1-SC46` | An approved V1 article reaches the publication workspace | Delivery and report outputs are inspected | Only T7/T10/T11 publishes; the report matches the immutable T5-final disposition and exposes a valid URL or an explicit pending/failure state |
| `T5-V1-SC47` | B-072 or a journal is read | Canonical facts are resolved | Handoff transport is durable, but PBL, decision, lane state and lifecycle values resolve only to their canonical owners |

### What Lane B did instead

Lane B appended this draft-only review to the existing B-071 handoff. It did not modify the
proposed plan, any governed tier, the frozen PRD/Charter, the RACI matrix, application code, schema,
lane state or Graphify; and it did not commit or push. The unrelated untracked `package-lock.json`
remains untouched.

At review time local `HEAD` and upstream both resolve to `702fccc`. Graphify's
`lastAnalyzedHead` remains `129efab`, so its semantic query is stale and is not evidence for this
round. Synchronization remains the final post-application step.

### Round 20 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Business/accountability interpretation | Acting Chief Editor is a time-bounded accountability involvement held by one account principal, not a role or identity | D-189 Draft 3 |
| **Approve-with-conditions** | Singleton Chief Editor access | Whole-business singleton is consistent with current RACI; takeover must be append-only and V1 identity visibly self-asserted | Product/Fn-Spec/UX drafting, then independent review |
| **Approve-with-conditions** | T5 nested stage | Route-required reviews and atomic join are sound; only human `T5-FINAL` may complete the stage | D-189 Draft 3 and D-181 partial supersession |
| **Reject** | Automatic “next role” fallback | No role order, trigger or permission boundary exists | Future separately authorized backlog feature |
| **Reject** | Bundle-ready as a judgment gate or final approval | Contradicts its no-actor join and creates two T5 completions | Derived readiness only |
| **Reject** | B-072/journal as canonical owner | It solves durable handoff transport, not requirement/authority/lane-state ownership | Keep canonical records linked, not moved |
| **Defer** | Exact future authenticated takeover/admin UX | S6 and multi-user access are outside current V1 authority | Future access feature authorization |
| **Defer** | Application, commit, Graphify, build and lane transition | Draft 3 is not written or accepted; `D-171` remains binding | Lane A draft, bounded Judge act, application, independent verification |

---

## Round 21 — Judge correction: human account succession versus agent executor identity (2026-09-04)

### What happened

The Judge corrected Round 19/20's identity model:

1. V1 has no concurrent multi-account operating model. The Acting Chief Editor feature requires an
   account linked to the Chief Editor role. To replace the holder, create the replacement account
   first and then switch the single active assignment.
2. Acting Chief Editor remains the **time-bounded RACI accountability involvement**. The UI shows
   the assigned natural person's name and job title.
3. `executor_principal_key` identifies the **virtual-agent executor at the time of an agent task**.
   It is not the natural person or the Chief Editor account identifier. This restores the identifier
   meaning already recorded earlier in B-071's four-identifier ruling and corrects the drift in
   Rounds 19–20.

This round is a correction to the existing B-071 handoff, not a new handoff or a rewrite of prior
history. Round 20's T5 stage/state and B-072 ownership analysis remains applicable except where this
round explicitly replaces its human-identity wording.

### What Lane A needs — parent first

#### Parent 1 — adopt the corrected identity and accountability model

| Object | Meaning | Used by | Must not substitute for |
|---|---|---|---|
| **Natural person** | Human currently performing the Chief Editor business function | UI display through name and job title | Account ID, authorization, or agent executor identity |
| **Chief Editor account** | V1 interactive account linked to `ROLE-CHIEF-EDITOR` | Human access and human-event attribution | Acting assignment, RACI `A`, or `executor_principal_key` |
| **`ROLE-CHIEF-EDITOR`** | Chief Editor access/business-role definition assigned to an account | Permission policy and role catalog | The current holder, the natural person's name, or an agent role |
| **Acting Chief Editor assignment** | Time-bounded assignment stating which Chief Editor account currently carries the RACI-accountable involvement | Resolves RACI `A` and enables the human T5-final control | A second role, a permanent person label, or an agent principal |
| **RACI `A`** | Accountability relation for the task/stage | Resolves through the active Acting Chief Editor assignment | Proof that the accountable human executed an agent task |
| **`executor_principal_key`** | Stable, system-attested identity of the virtual agent that executed an agent task | T1–T5 virtual-node evidence and agent separation tests | Human account ID, natural-person ID, RACI `A`, or display name |
| **`agent_attempt_badge_id`** | Identifier for one attempt/run, linked to one `executor_principal_key` | Attempt-level audit and authorized diagnostic view | Stable agent identity or human account identity |

The human `T5-FINAL` audit record therefore needs a human identity reference separate from
`executor_principal_key`. Draft 3 should propose stable names, for example:

- `chief_editor_account_id` — the account that acted;
- `acting_chief_editor_assignment_id` — the effective accountability assignment;
- `identity_assurance` — `self_asserted` before the separately authorized S6 control, and
  `authenticated` only after that control exists;
- display snapshot/reference for the person's `display_name` and `job_title`.

Names and job titles are mutable, non-unique display attributes. They may be shown in the UI but
cannot be the event's identity key or authorization check.

#### Parent 2 — define “no multi-account in V1” so replacement remains possible

The phrase cannot mean “only one account row may ever exist”: the Judge-required sequence creates
the replacement account before switching, so two records briefly exist. The coherent V1 rule is:

> At most one Chief Editor account is enabled and assigned as Acting Chief Editor for the whole
> business at any instant. A replacement account may exist in a staged/non-holder state before an
> atomic switch. Staged, former and historical accounts have no T5-final authority.

Required succession sequence:

```text
1. Create replacement account in staged/non-holder state.
2. Record its person display name and job title.
3. Validate that exactly one current Acting Chief Editor assignment exists.
4. Atomically end the old assignment and activate the new assignment.
5. Disable or demote the former account according to an explicit selected disposition.
6. Preserve all prior decisions with their original account/assignment references.
```

Step 5 still needs one bounded policy choice: **disable the former account** or **retain it as an
unassigned/read-only account**. It must not “default to the next role” unless that next role and its
permissions are positively specified. Until then, Lane B recommends `disabled` as the fail-closed
default because V1 has no multi-account operating feature.

#### Parent 3 — retain the corrected T5 event ownership

The T5 contract from Round 20 remains, with identity fields corrected:

```text
Virtual T5-REVIEW act
  actor evidence: executor_principal_key + agent_attempt_badge_id + role/node

T5-REVIEW-BUNDLE-READY
  deterministic join: no human account, no executor principal, no RACI R/A judgment
  workflow_state Drafted -> Reviewed

Human T5-FINAL
  actor evidence: chief_editor_account_id + acting_chief_editor_assignment_id
                  + identity_assurance + reason/evidence references
  workflow_state Reviewed -> Approved, Rejected, or governed return
```

The Chief Editor-facing UI may show both identity classes, but in separate fields: agent/node and
`executor_principal_key` for each virtual review; natural-person name, job title and Chief Editor
account/assignment for the human final act. It must never render the agent key as the person's ID.

### Corrected findings — no duplicate issue family

| ID | Gap | Guaranteed failure if unchanged | Smallest Draft 3 fix |
|---|---|---|---|
| `B071-R163` — Rounds 19/20 regressed the governed agent-key meaning | R19 step 5, `SC36`, R20's identity table and `SC39`/`SC41`/`SC43` use `executor_principal_key` for a human | Agent and human audit records become indistinguishable; an agent key can appear to authorize T5-final | Append a correction notice to Draft 3/B-071: the key is agent-only; replace human usages with account and assignment references |
| `B071-R164` — account, role and Acting assignment remain conflated | Draft 2 calls Acting Chief Editor both a role and a principal; the new clarification instead links an account to the Chief Editor role and separately time-bounds accountability | Changing the person can mutate a role definition or leave two holders authorized | Use the seven-object table above; retain `ROLE-CHIEF-EDITOR` as the role definition and Acting Chief Editor as the effective assignment/involvement |
| `B071-R165` — “no multi-account” is underspecified against create-before-switch | A literal one-row rule forbids the replacement sequence; an unrestricted interpretation permits concurrent Chief Editors | Replacement either cannot occur or creates two simultaneous final approvers | Define one enabled/assigned holder, not one historical row; stage the replacement and switch atomically |
| `B071-R166` — former-account disposition is absent | After the switch, the old account may retain permission or be silently assigned another role | Two accounts can approve, or an unauthorized implicit role change occurs | Judge selects `disabled` or explicit `unassigned/read_only`; reject automatic role fallback |
| `B071-R167` — name/job title risk becoming identity evidence | UI requirements mention person name and job title without defining their evidentiary status | Duplicate or changed names can reattribute immutable decisions | Treat them as display attributes/snapshots only; authorization and audit use stable account and assignment IDs |
| `B071-R168` — one event contract is being asked to identify both human and agent actors | Existing `TR-DM-02` has no governed executor-identity column; Draft 2 supplies no human-account/assignment pair | The implementation will overload `actor_id`, `user_id` or `executor_principal_key` inconsistently | Draft logical actor-union rules: agent tasks require agent key/attempt; human final requires account/assignment; mutually reject the wrong identity type |

### Corrections to prior B-071 text

The following earlier statements are retained as historical findings but **superseded for current
drafting** by this round:

- Round 19 step 5: “`executor_principal_key` for the actual human executor.”
- `T5-V1-SC36`: the human-final identity comparison that included `executor_principal_key`.
- Round 20's five-object table row defining `executor_principal_key` as a natural-person/account ID.
- Round 20 `T5-V1-SC39`, `SC41` and `SC43` wherever they assign that key to the Chief Editor.
- Round 20 `B071-R154`, `R155` and `R157` only to the extent that their fixes use a generic
  “account principal” or agent key instead of the account/assignment pair above. Their underlying
  separation, singleton and assurance findings remain valid.

### Draft fix — Lane A handback sequence

1. Update proposed `D-189` Draft 3's parent ontology first with the seven-object table and the
   one-enabled-holder succession rule.
2. Replace every current-draft human use of `executor_principal_key` with the proposed human
   account/assignment fields; preserve the agent-key contract and attempt-badge relationship.
3. Add the former-account disposition as one explicit Judge choice. Do not invent a next-role
   fallback.
4. Reconcile the Product persona/account catalog, RACI role catalog, T5 Fn-Spec, audit/security
   requirements, Build Spec and proposed UX contract. The frozen PRD, Charter and `0001` remain
   untouched; any physical schema proposal is a later migration candidate, not part of this plan.
5. Fold R163–R168 into Round 19's complete occurrence ledger and supersession packet rather than
   opening another plan or handoff.
6. After bounded Judge acceptance, apply parent-first, commit/push/fetch-prove once, then rebuild
   and merge Graphify and run the full suite at the same revision. Lane B independently verifies.

### Success criteria derived from failure

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC48` | An agent performs a T5 review | Its audit record is inspected | It contains `executor_principal_key`, attempt badge and role/node; no Chief Editor account ID is substituted |
| `T5-V1-SC49` | The human Chief Editor performs T5-final | Its audit record is inspected | It contains the acting account and effective assignment references; no `executor_principal_key` is used as the human identity |
| `T5-V1-SC50` | A replacement account is created before takeover | Authority is checked before the switch | The new account is staged and cannot perform T5-final; exactly the old assignment remains active |
| `T5-V1-SC51` | The takeover transaction commits | Assignment intervals and access are checked | The old assignment ends and the new assignment begins atomically; exactly one enabled holder can perform T5-final |
| `T5-V1-SC52` | Historical T5-final events are read after takeover | Actor attribution is displayed | Each retains its original account, assignment, name/job-title snapshot or reference, and assurance value |
| `T5-V1-SC53` | The former account is evaluated after takeover | It attempts T5-final | It is refused; no implicit next-role assignment exists |
| `T5-V1-SC54` | Chief Editor UI displays virtual and human decisions | Identity labels are compared | Agent keys appear only with virtual-agent evidence; person name/title and account/assignment appear only with the human act |

### What Lane B did instead

Lane B appended this correction to B-071 only. It did not change the proposed D-189 plan, Product
requirements, RACI, Fn-Specs, schema, UX, lane state or Graphify; it did not commit or push. The
unrelated `package-lock.json` remains untouched.

At review time local `HEAD` and upstream still both resolve to `702fccc`; the user's “push; just
done” introduces no newer revision in this worktree. Graphify remains based on `129efab` and is not
current evidence.

### Round 21 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Identity ontology | Agent executor key and human Chief Editor account/assignment are separate identity classes | D-189 Draft 3 |
| **Approve** | V1 account boundary | One enabled/assigned Chief Editor account at a time; staged replacement is allowed solely for succession | Product/Fn-Spec/UX plan |
| **Approve-with-conditions** | Acting Chief Editor feature | Time-bounded RACI accountability assignment; UI shows person name/job title as display data | Define stable account/assignment IDs and immutable event references |
| **Reject** | `executor_principal_key` as natural-person or account identity | Contradicts the established four-identifier agent contract | Correct R19/R20 and Draft 2 descendants |
| **Reject** | Automatic next-role fallback | No role order or permission contract exists | Select disabled or explicit unassigned/read-only former-account disposition |
| **Defer** | Former-account disposition | Judge must select the exact fail-closed outcome | D-189 Draft 3 bounded choice |
| **Defer** | Application, schema, authentication, Graphify and build | Plan-only; D-171 remains binding | Accepted draft, authorized application, independent verification |

---

## Round 22 — Former Chief Editor account disposition and V1 authentication boundary (2026-09-04)

### What happened

The Judge selected Round 21's former-account disposition: after a Chief Editor takeover, the former
account keeps the base **Chief Editor** role for historical interpretation, loses the time-bounded
**Acting Chief Editor** assignment/access, and is **permanently disabled**, so it cannot log in.
Only one account may hold the Acting Chief Editor assignment at a time.

This closes `B071-R166`'s business choice. It also exposes a higher parent dependency: current V1 is
demo-first with no login wall, `Modular_PRD.md` says no API authentication exists before S6, and
`SEC-03`/S6 owns enforced account access. A specification cannot truthfully guarantee that a former
account “cannot log in” while authentication and login enforcement remain outside V1. Lane A must
surface that boundary rather than silently treating a database status label as an access control.

### What Lane A needs — highest parent first

#### Parent 0 — decide whether “cannot log in” is operative in V1

| Model | Meaning | Consequence |
|---|---|---|
| **A — enforced succession** (recommended because it matches the Judge's wording) | V1 includes the narrow minimum needed to authenticate the single current Chief Editor, reject staged/disabled credentials and authorize the Acting-Chief-Editor-only T5-final action | Requires a bounded decision that narrows the current demo/no-login and S6 deferral rules. It does **not** authorize multi-team accounts, client accounts, general role administration or the full S6/RLS scope |
| **B — modeled only** | V1 stores/display account and assignment statuses, but identity remains `self_asserted` and no real login is enforced | Cannot claim a former account is unable to log in or that only the current holder can perform T5-final. This is a UI demonstration, not the Judge-requested access control |

The words “permanently disabled” and “cannot login” select Model A in business intent, but they do
not by themselves supply the required clause-level authorization. Proposed `D-189` Draft 3 must
name the exact rule it narrows, scope the exception to the one current Chief Editor and T5-final,
and preserve every excluded account class. Otherwise Model B is the only honest V1 claim.

#### Parent 1 — normalize the two access labels

| Layer | Canonical concept | Rule |
|---|---|---|
| Base account role | `ROLE-CHIEF-EDITOR` / display “Chief Editor” | Retained by current and historical Chief Editor accounts; by itself grants no current Acting authority |
| Singleton access/accountability assignment | proposed `ASSIGNMENT-ACTING-CHIEF-EDITOR` / display “Acting Chief Editor” | Time-bounded, attached to exactly one enabled Chief Editor account; resolves RACI `A` and permits the human T5-final action |
| Account lifecycle | `pending_activation` → `active` → `permanently_disabled` | Only `active` plus a current Acting assignment is operative; terminal disabled accounts cannot be re-enabled |
| Historical decision identity | Chief Editor account ID plus Acting assignment ID effective at the event | Immutable; never resolved by asking who is Acting Chief Editor today |

This implements the Judge's “different role access” without turning Acting Chief Editor into a
second permanent business role. If Lane A instead creates `ROLE-ACTING-CHIEF-EDITOR`, it will
re-conflate the role definition with the time-bounded assignment that the Judge explicitly defined.
The display may say “Acting Chief Editor”; the canonical kind remains an assignment/access grant.

#### Parent 2 — one fail-closed succession transaction

```text
create replacement Chief Editor account
  -> status = pending_activation
  -> base role = ROLE-CHIEF-EDITOR
  -> no login/T5-final authority

atomic switch
  -> close old Acting-Chief-Editor assignment
  -> old account status = permanently_disabled
  -> create/open new Acting-Chief-Editor assignment
  -> new account status = active

postcondition
  -> exactly one active Chief Editor account
  -> exactly one current Acting-Chief-Editor assignment
  -> both identify the same account
```

If any step fails, the transaction rolls back. It must never leave two active holders or zero active
holders. A terminally disabled account is never reactivated; a future return requires a newly
created account and a new assignment. No automatic “next role” exists.

#### Parent 3 — preserve historical attribution

Past T5-final events continue to reference the former account and the assignment interval that was
current when each decision occurred. The former account's disabled status must not erase its name,
job title, base Chief Editor role, assignment history or decisions. UI history uses the event's
stored/snapshotted identity facts, not the account's current authorization state.

`executor_principal_key` remains agent-only exactly as Round 21 states. Neither the new account
status nor either Chief Editor label changes the agent identifier model.

### New findings — this clarification only

| ID | Gap | Guaranteed failure if unchanged | Smallest Draft 3 fix |
|---|---|---|---|
| `B071-R169` — login refusal conflicts with V1's no-auth boundary | The Judge requires disabled accounts to be unable to log in; current V1 explicitly has no API authentication and defers access enforcement to S6 | A disabled flag can be displayed while the same anonymous caller still performs T5-final; every UI test passes while the security claim is false | Select Model A through a bounded narrow authorization, or downgrade the requirement to Model B and remove “cannot log in” |
| `B071-R170` — “Acting Chief Editor role access” can recreate the role/assignment conflation | Acting Chief Editor was just defined as time-bounded RACI involvement; making it a durable role produces two competing owners of authority | Ending an assignment can leave the role active, or removing the role can corrupt historical meaning | Keep Chief Editor as base role and Acting Chief Editor as singleton assignment/access grant; use distinct IDs and kinds |
| `B071-R171` — frozen “one Chief Editor account” has no lifecycle interpretation | Replacement creates a pending account before the old one is disabled, so more than one account record briefly exists | A literal row-count control blocks every takeover; a loose control accidentally enables multiple users | State that the frozen limit governs enabled/operative accounts, not retained historical or pending records; route that interpretation through the frozen-source traceability process rather than editing the PRD/Charter |
| `B071-R172` — switch atomicity and zero-holder failure are not specified | Separate disable/assign operations can strand the business or authorize two people | Publication stops with no holder, or two accounts can approve the same packet | One transaction with uniqueness checks and rollback; old disabled and new active/assigned commit together |
| `B071-R173` — permanent disable can erase audit display or be bypassed by reactivation | Current-account joins can relabel old decisions; generic enable controls can restore the old credential | History shows the new person as old actor, or a retired account regains authority | Preserve immutable event/account/assignment references; terminal state rejects reactivation and requires a new account for return |
| `B071-R174` — base Chief Editor role may be mistaken for current authority | Former account retains that role after disable | Code checking role alone permits the former account to log in or execute T5-final | Authorization requires all three: account `active`, current Acting assignment, and assignment→account equality |

### Draft fix — Lane A handback sequence

1. **Resolve R169 first.** Draft the narrow V1 authentication exception required by Model A, or
   state Model B honestly. Do not propagate “cannot log in” until its enforcement owner is decided.
2. Update proposed `D-189` Draft 3 with the base-role/Acting-assignment/account-state model and the
   atomic succession contract. Record `B071-R166` as draft-addressed by the Judge's permanent-disable
   selection, not Applied or Verified.
3. Add the frozen-source interpretation to the customer traceability route: “one account” means one
   enabled/operative Chief Editor account; pending and permanently disabled history do not constitute
   multi-team capability. Frozen PRD and Charter remain unchanged.
4. Propagate the logical contract to Product account/security requirements, RACI, T5 Fn-Spec,
   Build Spec and the proposed UX artifact. Physical tables, auth provider configuration and code
   remain future implementation work under a separately authorized migration/build packet.
5. Extend Round 19's occurrence ledger and supersession table with R169–R174. Do not create another
   handoff, plan, backlog item or journal owner.
6. After bounded acceptance and application, commit/push/fetch-prove the complete source packet,
   then rebuild and merge Graphify and run the suite at that revision. Lane B independently verifies.

### Success criteria derived from failure

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC55` | A replacement account exists in `pending_activation` | It attempts login or T5-final | Both are refused; the current holder remains the only operative account |
| `T5-V1-SC56` | A valid replacement is ready | The succession transaction commits | The old account becomes permanently disabled as the old assignment closes; the new account and assignment become active together |
| `T5-V1-SC57` | Any post-switch state is inspected | Active accounts and current Acting assignments are counted | Exactly one of each exists and both reference the same account |
| `T5-V1-SC58` | The former account retains `ROLE-CHIEF-EDITOR` | It attempts login or T5-final | Refused because base role alone never grants operative authority |
| `T5-V1-SC59` | A permanently disabled account is targeted by an enable/update operation | The operation executes | Refused; return requires a new account and new Acting assignment |
| `T5-V1-SC60` | A historical T5-final decision is displayed after succession | Actor information is resolved | The original person's name, job title, account and assignment remain attributable; the new holder is not substituted |
| `T5-V1-SC61` | V1 is tested under Model A | An anonymous or self-asserted caller attempts T5-final | Refused by the narrow authenticated-account control; no claim depends only on a UI label or account-status field |
| `T5-V1-SC62` | V1 remains under Model B | Documentation and UI are inspected | They say modeled/self-asserted only and make no “cannot log in” or enforced sole-holder claim |

### What Lane B did instead

Lane B appended this plan-only review to the existing B-071 handoff. It did not amend D-189,
resolve the Model A/B authorization, alter frozen sources, define a migration, implement login,
change any product/governance tier, rebuild Graphify, commit or push. The unrelated untracked
`package-lock.json` remains untouched.

At review time local `HEAD` and upstream still both resolve to `702fccc`; Graphify remains based on
`129efab`. The existing uncommitted B-071 review accumulation is the only tracked-file change.

### Round 22 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Former-account disposition | Retain base Chief Editor role/history; remove Acting assignment; permanently disable account | D-189 Draft 3 |
| **Approve** | Singleton succession model | Pending replacement followed by one atomic switch; exactly one operative holder | Product/Fn-Spec/UX plan |
| **Approve-with-conditions** | Acting Chief Editor access | Model as time-bounded assignment/access grant, not a second durable role | Stable IDs and authorization predicate in Draft 3 |
| **Approve-with-conditions** | “One Chief Editor account” interpretation | One enabled/operative account; pending and disabled records retained solely for succession/history | Frozen-source traceability disposition |
| **Reject** | Role-only authorization | Former accounts retain the base role and would remain privileged | Require active account + current assignment + matching account |
| **Reject** | V1 “cannot log in” claim under the present no-auth model | No enforcement mechanism exists before S6 | Choose/authorize Model A, or use honest Model B wording |
| **Defer** | Model A narrow authentication authorization | Required to make permanent-disable/login refusal operative in V1 | Bounded Judge decision before child propagation |
| **Defer** | Application, schema, Graphify and build | Planning only; D-171 remains binding | Accepted draft, authorized application, independent verification |

---

## Round 23 — Model A selected: narrow V1 Chief Editor authentication plan (2026-09-04)

### What happened

The Judge selected Round 22 **Model A — enforced succession**: “permanently disabled accounts
cannot log in” means a narrow V1 authentication authorization covering the sole Chief Editor account
and the human `T5-FINAL` act. This is a business ruling and input to proposed `D-189` Draft 3. It is
not yet an applied documentation change, an implementation authorization, or evidence that the
control exists.

This round converts `B071-R169`–`R174` and `T5-V1-SC55`–`SC62` into a concise Judge-review packet.
It does not restate the broader T5/T6 propagation work in Rounds 19–22 and creates no new handoff.

### Parent decision — exact bounded scope for Draft 3

Proposed `D-189` Draft 3 should contain the following decision substance:

> **V1 narrow Chief Editor authentication exception.** V1 shall authenticate the one currently
> enabled Chief Editor account for the Acting-Chief-Editor assignment and shall require that
> authenticated account for the human `T5-FINAL` action. A replacement Chief Editor account may be
> created only as `pending_activation`; it cannot log in or execute `T5-FINAL` until one atomic
> succession transaction permanently disables the former account, ends the former Acting assignment,
> activates the replacement account and starts the replacement Acting assignment. Exactly one
> account and one matching Acting assignment are operative at all times. Historical records retain
> the original account and assignment references. This narrow exception does not authorize
> multi-team accounts, client accounts, general role administration, full S6/scoped-RLS completion,
> authentication for virtual agents, or any T6 assurance feature.

The decision must also say which existing clauses it narrows:

- the demo-first/no-login rule is retained for the public/read-only product surface but narrowed for
  the Chief Editor sign-in, account-succession controls and the state-changing `T5-FINAL` action;
- `SEC-03`/S6 remains the owner of general authentication and scoped access control, but its smallest
  Chief-Editor/T5-final slice moves into the V1 editorial proof;
- `NG-02` still excludes multi-team operation. Pending and permanently disabled succession records
  do not become simultaneously operative accounts;
- the frozen PRD and Charter remain unchanged; the “one Chief Editor account” interpretation must
  be recorded through the existing customer/frozen-source traceability route.

### Authorization ownership — do not invent a fifth checkpoint

| Checkpoint | Owns | Does not own |
|---|---|---|
| Proposed `D-189` | The decided scope and partial-supersession contract above | Source application or product code |
| `AUTH-DOC` | Applying the accepted D-189 documentation packet parent-first | Any authentication implementation or lifting `D-171` |
| `AUTH-F1` | The later current T1–T5 editorial proof, including this narrow identity prerequisite for human T5-final | Full S6, multi-team accounts, client access, T6 assurance or route-factory scope |
| `AUTH-F2` | Factory-route capability only | Chief Editor authentication or T6 assurance |

The narrow identity control is a prerequisite of `AUTH-F1`; it does not need a new `AUTH-*` family.
`D-171` continues to hold all implementation until the relevant execution packet is separately
authorized.

### Breakdown of `B071-R169`–`R174`

| Finding | Judge-plan disposition | Exact draft obligation | Closure evidence |
|---|---|---|---|
| `R169` — login refusal versus no-auth V1 | **Decision supplied: Model A selected. Draft-addressed, not Applied** | Add the bounded exception and clause-level treatment above; prohibit an anonymous/self-asserted T5-final | Accepted D-189 text, applied tiers, then negative authentication test under `AUTH-F1` |
| `R170` — role versus assignment | **Clarified** | `ROLE-CHIEF-EDITOR` remains the base role; Acting Chief Editor is a singleton time-bounded assignment/access grant, never a second permanent role | Catalogs and authorization predicate use different stable IDs/kinds |
| `R171` — frozen single-account interpretation | **Clarified, customer traceability still required** | Define “one account” as one enabled/operative Chief Editor account; pending and disabled records exist only for succession/history | Frozen sources unchanged; traceability record carries the interpretation/disposition |
| `R172` — non-atomic switch | **Contract supplied** | One transaction changes old assignment/account and new assignment/account together; rollback on any failure; never zero or two operative holders | Concurrency/rollback tests and a database-level uniqueness invariant in the later authorized design |
| `R173` — history loss/reactivation | **Contract supplied** | Permanent disable is terminal; old events retain account and assignment IDs plus display snapshot/reference; a returning person needs a new account | Reactivation refusal and post-takeover historical-attribution tests |
| `R174` — base role mistaken for authority | **Contract supplied** | T5-final requires authenticated session account = active account = account named by the sole current Acting assignment; base role alone is insufficient | Role-only, pending-account, disabled-account and mismatched-assignment negative tests |

None of these findings becomes `Closed` merely because the Judge supplied the missing policy. They
move through `Draft-addressed` → Judge-authorized text → Applied documentation → independently
Verified; behavior tests occur only under the later `AUTH-F1` execution.

### Minimum behavior and UI plan

1. **Public surface:** remains reachable without a global login wall. An unauthenticated viewer may
   inspect the demo/read-only workflow but cannot execute `T5-FINAL` or account succession.
2. **Initial bootstrap:** one Chief Editor account and one matching Acting assignment must exist
   before an operative T5-final can occur. The bootstrap mechanism is a later implementation-design
   detail, but its output must satisfy the same singleton invariant.
3. **Current-holder view:** show the natural person's name and job title, account status and Acting
   assignment interval. Name/title remain display attributes, never authorization keys.
4. **Replacement preparation:** only the authenticated current Acting Chief Editor, or a separately
   governed recovery authority, may create a pending replacement. Pending means no login and no
   T5-final authority.
5. **Atomic switch:** display the exact old and new account/assignment, require an explicit reason,
   then commit all lifecycle changes together.
6. **Historical view:** show the actor facts effective at the decision time; never substitute the
   current holder when displaying a former holder's decision.
7. **Agent boundary:** agent reviews continue to use `executor_principal_key` and
   `agent_attempt_badge_id`; the human Chief Editor never uses either as account identity.

The recovery authority in step 4 remains intentionally unspecified. It is not needed for the normal
takeover flow, but Lane A must list it as a resilience gap rather than silently making an agent,
developer or disabled former account an administrator. Existing board-approved LOA/degraded-mode
rules may be cited only after their exact authority and identity mechanism are verified.

### Success criteria `T5-V1-SC55`–`SC62`, normalized for selected Model A

| ID | Failure negated | Operative success criterion |
|---|---|---|
| `SC55` | Pending replacement gains authority early | A `pending_activation` account cannot authenticate or execute T5-final; the current holder remains sole authority |
| `SC56` | Partial switch | Old disable/assignment close and new activation/assignment open commit atomically or all roll back |
| `SC57` | Zero or two holders | Every committed operative state has exactly one active Chief Editor account and one matching current Acting assignment |
| `SC58` | Base role grants authority | A former account retaining `ROLE-CHIEF-EDITOR` is refused because it is permanently disabled and has no current Acting assignment |
| `SC59` | Former account reactivated | Every re-enable attempt for `permanently_disabled` is refused; return requires a new account and assignment |
| `SC60` | Current holder overwrites history | Historical decisions display their original account, assignment, name/job-title snapshot/reference and identity assurance |
| `SC61` | Anonymous label spoofing | Anonymous, self-asserted, agent-key, role-label-only and mismatched-assignment attempts at T5-final are refused |
| `SC62` | Non-selected Model B remains operative | **Superseded as a positive criterion.** Retain it as historical fork evidence only; current D-189 text must not describe the control as modeled/self-asserted-only |

For completeness, the bounded-scope test must also prove that public/read-only demo access remains
available and that no client, multi-team, generalized RBAC or T6-assurance account path was created.
This is the negative boundary that prevents the narrow exception from silently becoming full S6.

### Parent-first Lane A drafting sequence

1. Add the selected Model A text and clause-level scope treatment to proposed D-189 Draft 3.
2. Add the R169–R174 disposition table and normalized SC55–SC62 without claiming application or
   verification.
3. Complete Round 19's literal supersession table and occurrence ledger, including every demo/auth,
   `SEC-03`, `NG-02`, account, RACI and T5-final occurrence affected by the exception.
4. Draft exact parent-first propagation: governing-source annotations/traceability, Decision
   Register, Build Spec, Product requirements, Fn-Spec/RACI/security behavior, then proposed UX.
   State Artifact Inventory and Product §8 effects even when unaffected.
5. Keep `AUTH-DOC` documentation-only and `AUTH-F1` as the later implementation owner. No code,
   schema, dependency, login configuration or lane-state change occurs in this drafting pass.
6. After Judge acceptance, apply and push the complete source packet, fetch-prove it, then rebuild
   and merge Graphify and run the suite at the same revision. Independent Lane B review decides
   `Verified`.

### What is guaranteed to fail if omitted

- A UI-only disabled flag cannot prevent login or T5-final execution.
- Role-only checks re-authorize permanently disabled former accounts.
- A two-step switch can leave zero or two Acting Chief Editors.
- Resolving historical events through the current account rewrites who made past judgments.
- Calling the narrow exception “S6 complete” imports unapproved multi-team and generalized access
  scope; leaving it at S6 makes the V1 T5-final guarantee impossible.
- Treating the Judge clarification as build authorization bypasses `AUTH-DOC`, `AUTH-F1` and
  `D-171`.

### What Lane B did instead

Lane B appended this Judge-review plan to the existing B-071 handoff only. It did not edit proposed
D-189, any governed tier, frozen source, schema, authentication configuration, application code,
lane state or Graphify; it did not commit or push. The unrelated `package-lock.json` remains
untouched.

At review time local `HEAD` and upstream both remain `702fccc`; Graphify remains based on
`129efab`. The accumulated B-071 review is the only tracked-file change.

### Round 23 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | `R169` policy choice | Model A selected: narrow authenticated Chief Editor/T5-final control in V1 | D-189 Draft 3 |
| **Approve** | `R170`–`R174` contract | Role/assignment split, atomic succession, terminal disable, historical identity and three-part authorization predicate | Exact source drafting and independent review |
| **Approve-with-conditions** | Demo/no-login narrowing | Public/read-only demo stays open; only Chief Editor administration and T5-final require authentication | Clause-level D-189 supersession |
| **Approve-with-conditions** | `NG-02` interpretation | Exactly one operative account; pending/disabled succession records are not multi-team access | Frozen-source/customer traceability disposition |
| **Reject** | Model B | Contradicts the selected enforced-login-refusal requirement | Preserve only as historical alternative |
| **Reject** | New standalone authorization family | Narrow identity belongs to D-189 documentation and later `AUTH-F1` execution | Use existing checkpoints |
| **Defer** | Recovery authority/bootstrap mechanism | Normal flow is specified; exceptional recovery owner remains undefined | Later security/design decision before build |
| **Defer** | Application, Graphify and implementation | Planning only; `D-171` remains binding | Accepted Draft 3, `AUTH-DOC`, independent review, later `AUTH-F1` |

---

## Round 24 — Business-owner recovery authority and email-account replacement (2026-09-04)

### What happened

The Judge closed Round 23's normal recovery-authority question: the **Chief Editor as business
owner** controls the account-control system and may replace the application's Chief Editor login.
If the operational email/login is unavailable, the business owner uses a different email account,
creates the replacement access, and switches the system to it.

This is the same natural person acting in two institutional capacities, not two application users:

1. **Business-owner control authority** — maintains the account binding and performs recovery.
2. **Acting Chief Editor application account** — performs the human `T5-FINAL` act while its
   assignment is current.

Those capacities need different credentials and audit events. If recovery depends on the disabled
operational account, it is circular and cannot work when needed.

### What Lane A needs — highest parent first

#### Parent 1 — define the independent control authority

| Object | Meaning | Authority | Explicitly cannot do |
|---|---|---|---|
| **Chief Editor business owner** | Natural person who owns the business and recovery decision | May operate the account-control system | Does not gain application authority merely from a display name or email |
| **Business-owner control principal** | Stable authenticated identity used in the control plane; proposed logical field `owner_control_principal_id` | Create a pending replacement, bind a verified different email, and initiate the atomic switch | Execute `T5-FINAL` directly, edit editorial evidence, impersonate an agent, or rewrite history |
| **Control email** | Login/recovery locator for the control principal | Authenticates access to the control plane under its provider's verified process | Stable identity key or historical application-actor key |
| **Chief Editor application account** | Operational account used inside my-editorial-app | May execute `T5-FINAL` only while active and holding the current Acting assignment | Account recovery/control-plane administration merely because it has `ROLE-CHIEF-EDITOR` |
| **Application login email** | Verified locator bound to one application account | Signs in that account | Account identity; it may change format and must never replace the account UUID in evidence |

The business-owner control principal and operational account may belong to the same natural person,
but they must not depend on the same credential/email. The control principal survives permanent
disablement of an application account.

#### Parent 2 — replacement-by-new-email contract

```text
business owner authenticates to the independent account-control plane
  -> supplies a new, different email address
  -> provider verifies the new address
  -> system creates a new Chief Editor account as pending_activation
  -> new account has no application login or T5-final authority yet
  -> business owner reviews old/new identities and records a reason
  -> atomic succession permanently disables the old application account
     and activates the new account + Acting assignment
  -> append recovery/succession evidence
```

The old account and email binding remain historical and non-reusable in V1. “Change email access”
means bind the new verified email to the **new account**; it does not mutate the disabled account's
email or move old decisions to the new account.

#### Parent 3 — authorization predicates stay separate

- **Control-plane action:** authenticated `owner_control_principal_id` plus the narrowly allowed
  recovery operation.
- **Human `T5-FINAL`:** authenticated application account that is `active`, holds the one current
  Acting-Chief-Editor assignment, and matches the assignment's account ID.
- **Virtual-agent task:** `executor_principal_key` plus `agent_attempt_badge_id` and role/node.

No one identifier or session may satisfy another predicate. The business owner cannot bypass the
application-account switch and execute `T5-FINAL` from the control plane.

### New findings — recovery delta only

| ID | Gap | Guaranteed failure if unchanged | Smallest Draft 3 fix |
|---|---|---|---|
| `B071-R175` — recovery is circular if it uses the operational account | A lost/disabled Chief Editor login is required to create its own replacement | Recovery is impossible in exactly the failure case it is meant to handle | Define an independently authenticated business-owner control principal and credential |
| `B071-R176` — email is at risk of becoming identity | The clarification describes changing email access; prior audit rules require stable account/assignment attribution | Email changes or reuse can make a new account appear to be the old actor | Treat email as a verified login locator only; immutable evidence uses stable control/account/assignment IDs |
| `B071-R177` — “change email” can be implemented as mutation | Updating the old account's email in place is simpler than creating the Judge-required new account | Past decisions display the new email/person and the old credential may remain recoverable | Create a new account; retain and permanently disable the old account/email binding; never transfer its event identity |
| `B071-R178` — control authority has no negative boundary | “Access to the control system” can be read as unrestricted application administration | The recovery credential can edit articles, approve T5-final, alter evidence or mint agents | Permit only account creation, verified-email binding and atomic succession; explicitly refuse product/evidence actions |
| `B071-R179` — recovery events have no evidence contract | The account switch can occur without who/when/why/old/new linkage | Ownership disputes and account compromise cannot be reconstructed | Append a control event naming control principal, old/new account IDs, old/new assignment IDs, verified-email references, timestamp, reason and outcome |
| `B071-R180` — control-principal loss/ownership transfer is outside the stated flow | The same business owner is assumed always able to access the control plane | Loss of both credentials can permanently strand the product, or a developer can become an undeclared owner | State the normal recovery flow is complete; defer exceptional control-principal recovery/business ownership transfer to a separate business-continuity decision |

### Draft fix — Lane A handback sequence

1. Add this business-owner/control-principal distinction to proposed `D-189` Draft 3 immediately
   after Round 23's selected Model A clause.
2. Define replacement as new-account/new-email creation followed by the already-decided atomic
   switch; prohibit email mutation, reuse and historical reattribution.
3. Add separate authorization/refusal predicates for control-plane, human T5-final and virtual-agent
   actions. Preserve `executor_principal_key` as agent-only.
4. Extend `R169`–`R174` rather than reopening them: `R169`'s narrow authentication now includes the
   independently authenticated recovery control; `R172`'s transaction includes control evidence;
   `R173`'s permanence includes old-email non-reuse; `R174` remains application-account-only.
5. Add `R175`–`R180` and their tests to Round 19's one occurrence ledger and propagation packet.
   Do not create another decision family, handoff, journal owner or backlog duplicate.
6. Keep documentation under `AUTH-DOC` and later implementation under `AUTH-F1`. No account/auth
   build, provider configuration, schema, code or lane-state change occurs in this plan.
7. After accepted application is committed and pushed, fetch-prove it, then rebuild/merge Graphify
   and run the suite at that same revision. Independent Lane B review decides `Verified`.

### Success criteria derived from failure

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC63` | The operational Chief Editor account cannot authenticate | The business owner starts recovery | Control-plane authentication succeeds independently of that application account; no disabled-account session is required |
| `T5-V1-SC64` | A replacement email equals the old application email | Replacement is requested | Refused; V1 requires a different verified email and preserves the old binding |
| `T5-V1-SC65` | A different email has not been verified | Account activation or switch is attempted | Refused; no pending account becomes operative |
| `T5-V1-SC66` | A verified replacement account is pending | Before the atomic switch | It cannot log in to the application or execute T5-final |
| `T5-V1-SC67` | The owner control principal attempts editorial or agent work | Authorization is evaluated | Refused; its authority is limited to account recovery and succession |
| `T5-V1-SC68` | A completed switch is reviewed | Control and editorial evidence are traced | One append-only control event links the authenticated control principal, old/new accounts and assignments, reason, time and result; old editorial events remain unchanged |
| `T5-V1-SC69` | The new holder executes T5-final after the switch | Actor evidence is inspected | The new application account/Acting assignment is recorded; neither control-principal ID nor agent executor key substitutes for it |

### What remains unclear

The normal lost-email/login recovery flow is now decided. Only the exceptional case remains outside
scope: loss of the separate business-owner control credential, or transfer of business ownership to
a different natural person. That is a business-continuity/ownership-transfer decision, not a reason
to leave ordinary V1 recovery vague and not authority for a developer or agent to intervene.

### What Lane B did instead

Lane B appended this draft-only recovery clarification to the existing B-071 handoff. It changed no
governed tier, frozen source, proposed D-189 plan, schema, provider, application code, lane state or
Graphify; it did not commit or push. The unrelated `package-lock.json` remains untouched.

At review time local `HEAD` and upstream both remain `702fccc`; Graphify remains based on
`129efab`. The accumulated B-071 review remains the only tracked-file change.

### Round 24 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Normal recovery authority | Chief Editor business owner controls replacement through an independent authenticated control principal | D-189 Draft 3 |
| **Approve** | Replacement identity | New account uses a different verified email; former account/email remain disabled historical records | Product/security/UX drafting |
| **Approve-with-conditions** | Control-system scope | Account recovery and atomic succession only; cannot perform editorial, evidence or agent actions | Exact refusal criteria and audit contract |
| **Reject** | Same operational credential for recovery | Creates circular recovery | Independent control credential/email |
| **Reject** | Email as account identity or in-place history rewrite | Email is mutable and reusable; it cannot own attribution | Stable account/assignment IDs |
| **Reject** | Developer, agent or disabled account as recovery owner | No such authority was granted | Business-owner control principal only |
| **Defer** | Loss of control credential/business ownership transfer | Separate exceptional continuity case | Future bounded business-continuity decision |
| **Defer** | Application, Graphify and implementation | Planning only; `D-171` remains binding | Accepted Draft 3, `AUTH-DOC`, independent review, later `AUTH-F1` |

---

## Round 25 — Independent review of proposed D-189 Draft 3 Part 1 (2026-09-04)

### Scope and evidence

**Rewritten task:** Review `V1-B071-CORRECTIVE-PLAN.md` §12 at `5223a1e`, distinguish temporary
LOA delegation from permanent account replacement, and return one parent-first corrective packet.
Drafting only: no governed-tier application, authentication build, commit, push or lane transition.
The pasted Lane A narrative is review input, not permission to act as Lane A.

This is the existing B-071 item, not a new handoff or duplicate SOP. Structure follows the user's
`handoff-gap-analysis-template.md` and the channel template. Lane A owns correction in Phase 1;
Lane B independently reviews it; Lane C has no new workflow implementation in this packet.
Completion means a source-traceable, internally consistent, fully specified documentation packet
has passed independent review. It does not mean `AUTH-DOC`, `AUTH-F1` or implementation is approved.

**Source evidence:** plan §12.0–§12.10; this handoff Rounds 19–24; Entry 007 §§1–4;
`Modular_PRD.md` `RK-02`/`SEC-03`; `raci-involvement-matrix.md` §2;
`FN-EXCEPTIONS-06-11-12.md` absence handling; `V1-BUILD-SPEC.md` V1 boundary and §6.
Findings below are verified document defects, not evidence that an implemented exploit exists.

### What happened — terminology and the actual boundary

| Term | Normalized meaning | Source/limitation |
|---|---|---|
| `Entry007/S5` | Historical accepted proposal for temporary, board-approved LOA with auto-reversion | Entry 007 §2; its row ID is not evidence of a sprint ID or an implemented account mechanism |
| Permanent account succession | Replacement account becomes current; former account remains permanently disabled | Judge clarification, Rounds 23–24; temporary auto-reversion is not part of this path |
| Acting Chief Editor | Time-bounded accountability assignment, distinct from account, role and natural person | Round 21 and plan §12.2; historical attribution survives reassignment |
| Business-owner control principal | Proposed authenticated recovery identity, bound to the business owner's authority | Round 24; an ID label alone does not prove that binding or identify an implemented control system |
| `executor_principal_key` | Agent executor identity, never the human approver or recovery owner | Round 21 `R163`, incorporated by §12.2 |
| Draft-addressed / Applied / Verified | Proposed correction / committed application / independent confirmation | Channel template; committing a draft is not applying its contract |

**Preserve:** splitting the writing into parts is sensible; independent recovery, stable historical
account/assignment attribution and separation from agent identity are useful requirements.
**Do not infer:** that the writing split makes either part independently executable, or that
Entry 007 specifies a shared account, shared email, shared credentials or current V1 LOA execution.
Entry 007 explicitly limits its acceptance to Phase 0 and says it ratifies nothing. Later operative
decisions determine present delivery scope; the journal alone does not reopen it.

### Gap list — deduplicated, parent first

All findings originate in this Lane B document review. Each correction retains its finding ID;
the existing `R181` is narrowed rather than re-created as another LOA finding.

| Finding | Verified evidence / failure condition | Severity | Parent |
|---|---|---|---|
| `B071-R182` — `R181` rests partly on unsupported LOA assumptions | §12.1 says “None created; same account, same email”; Entry007/S5 specifies no account/email mechanism. §12.9 `SC70` forces a choice between two implementations before establishing that temporary LOA is in this V1 packet. Reusing the original account without separately attributable delegate identity would defeat the intended historical attribution | Blocks accepting the proposed LOA ruling, not drafting permanent recovery | Existing scope/authority decisions |
| `B071-R183` — drafting independence is mistaken for application readiness | §12.7 postpones the Product/security rows to Part 2, yet §12.10 offers acceptance followed by §11.11 application. §12.2 also depends on Part 2's `R163` identity correction. Applying this packet as-is would require inventing missing text or leaving conflicting operative rules | Blocks application handoff | R182 scope boundary; existing R145–R168 interface/occurrence ledger |
| `B071-R184` — successful succession and its audit event are separate writes | §12.4 step 6 commits the switch; step 7 appends its evidence afterward. If step 7 fails, the holder changes without the required event. Provider email verification/account access and the application database also have no stated common transaction boundary | Blocks acceptance of the behavioral transaction contract | R183 complete behavior/write set |
| `B071-R185` — authorization predicates lack explicit trust and revocation tests | §12.5 names an authenticated control ID and current application holder, but does not explicitly test the control ID's authorized business-owner binding or retained sessions after succession. The agent predicate lists identifiers without establishing their trusted binding. Labels or possession of IDs must not become proof of authority | Blocks security acceptance; not a claim that bypass already exists | R183 interfaces and existing R174/R175/R178; R184 switch boundary |
| `B071-R186` — lifecycle and criterion references contradict their own exceptions | §12.6 calls every R169–R181 item Draft-addressed; §12.8 leaves R180/R181 unresolved. §12.9 says SC55–SC62 continue to apply although Round 23 explicitly supersedes SC62 as a positive criterion. “No commit exists” also fails to distinguish draft commit from application commit | Blocks accurate handoff status | Dispositions from R182–R185; retain unresolved Part 2 separately |

### What Lane A needs — smallest corrective sequence

1. **R182: repair the source boundary first.** Replace the unsupported account/email cell with
   “Not specified by Entry007/S5.” Cite it as historical acceptance, not a delivered mechanism.
   Recommended bounded disposition for Judge review: this V1 packet specifies permanent account
   recovery only; temporary LOA execution is not added by it. Preserve the historical LOA record and
   link its existing deferred absence/delegation owner. Do not create another backlog identity or
   silently equate Entry007/S5 with sprint S5. If temporary LOA is explicitly brought into V1,
   obtain that scope decision first, then specify actual delegate identity and automatic reversion.
   Do not present shared-account action as safe merely because the assignment stays singular.

   **Replacement boundary text, proposed:** “Permanent recovery does not implement, supersede or
   auto-revert under the historical Entry007/S5 temporary LOA proposal. That proposal specifies no
   account or email mechanism. Its runtime design is outside this narrow V1 recovery packet;
   existing absence handling is unchanged.” Amend `SC70` to test this boundary unless the Judge
   explicitly selects a wider packet. This recommendation is not a recorded Judge approval.

2. **R183: retain separate drafts, assemble one complete application contract.** Part 1 may be
   reviewed on its own, but its approval must say “draft review only” until the identity/assignment
   and human-final-action interfaces are fixed and every changed owning-tier row has literal text.
   Link the existing R145–R168 occurrence ledger rather than recreating it. Reconcile the Register,
   Build Spec, Product/security behavior and shared no-login rules within the approved write set;
   name Inventory impact explicitly, without inventing an artifact. Do not reuse rejected §11
   execution text unchanged or claim that unfinished T5 semantics are already settled.

3. **R184: put authoritative succession and its successful audit event in one atomic outcome.**
   Failure to preserve the event must prevent the authoritative switch. Define preconditions,
   concurrency/retry behavior and the authority-check boundary in behavior terms. In the later
   technical design, identify which provider steps are preparatory and how incomplete provider
   work is reconciled; do not promise a database rollback can undo an external provider action.
   Neither a pending provider identity nor a delayed revocation may confer application authority.
   “Exactly one holder” means one authorized account/assignment after initialization, not proof
   that a person can still authenticate using a lost credential.

4. **R185: state and test the authority binding, not just the identifier.** Recovery requires the
   authenticated principal to be registered/authorized for this business's account-control action.
   Re-check the current account/assignment at the authoritative T5-final write; possession of a
   former session, base role or client-supplied principal is insufficient. Preserve existing
   agent-identity assurance rules by reference; the new predicate is not permission to replace
   them with supplied IDs. Full S6 stays deferred, but the narrow control must cover every path
   that can perform the protected write, not only the UI button.

   **Correction to earlier Lane B wording:** Round 24's “normal flow is decided” establishes the
   business recovery owner, not an implemented control plane or approved provider design. An
   independently recoverable credential is the required outcome; a new custom control application
   is not mandated. Any provider/system selection remains an explicit later technical choice.

5. **R186: correct only current claims.** Name drafted content, unresolved R181 scope disposition,
   R180's proposed future continuity disposition and unfinished Part 2 separately. Cite Round 23's
   normalized criteria; SC62 remains historical/non-selected, not an operative positive test.
   Say “no application commit” rather than “no commit.” Preserve old review history and do not
   close findings solely because a draft contains their IDs. Then perform the existing final-source
   Graphify/check/independent-review sequence; do not duplicate the transaction SOP here.

### Success criteria — failure must be observable

These tests extend, rather than replace, the existing SC55–SC69 contract with its Round 23 caveat.
They are proposed acceptance tests, not tests executed against an authentication implementation.

| ID | Given / when | Required result |
|---|---|---|
| `T5-V1-SC71` | A reviewer follows the Entry007/S5 citation | Only temporary/board-approved/auto-reverting behavior is attributed to it; account/email mechanism is explicitly unspecified; no new V1 LOA runtime is inferred |
| `T5-V1-SC72` | Part 1 is offered for application while owning-tier rows or the human-final-action interface remain undrafted | Application is refused; independent draft review remains possible; missing text is named, not improvised during execution |
| `T5-V1-SC73` | Audit persistence fails, a competing switch occurs, or a successful switch request is retried | No unaudited authority change, no two current holders, and no duplicate successful succession; external preparatory work cannot bypass the authoritative outcome |
| `T5-V1-SC74` | An authenticated but unbound control identity, forged principal, or former holder's retained session attempts a protected action | Refused at the authoritative write path; the properly authorized owner/current holder succeeds in the corresponding positive case |
| `T5-V1-SC75` | The revised plan and B-071 current claims are compared | R180/R181 dispositions are explicit, SC62 is historical, draft and application commits are distinguished, and Part 2 remains open wherever its contract is unfinished |

### Drift and cross-lane handback

| Surface | Observed state | Consequence |
|---|---|---|
| Reviewed source | Local `HEAD` and cached upstream are `5223a1e`; source read directly | This is the reviewed draft revision. Remote GitHub status was not independently refreshed in this review |
| Graphify | `lastAnalyzedHead = 129efab` differs from `5223a1e`, despite `stale: false` | **DRIFTED.** Do not rely on its semantics for current D-189 approval; Lane A must synchronize settled source before consuming approval/closure |
| Application/authorization | No governed D-189 application or product build performed by this review | A document defect is not an implemented security exploit, and a review verdict is not execution permission |

Lane A's separation of writing work is accepted; its claim of a fully independent execution seam
is not. Lane B also narrows its own prior recovery wording above. No new Lane C work is inferred.
If event append fails after the proposed switch, missing audit evidence is a deterministic failure
of that sequence. Other risks above are conditional failure paths, not guarantees of compromise.

### What Lane B did instead

Appended this draft-only review to B-071, leaving Lane A's header and plan unchanged. No frozen
source, other governed tier, provider, application code, Graphify state or lane state was changed.
No commit or push was performed; `package-lock.json` was left untouched. This review is not a
terminal `Verified` disposition for B-071 or any implementation authorization.

**Checks observed during this review:** `bun run check` reported 16/17 passing; only `docs-drift`
failed (`129efab` versus `5223a1e`). `git diff --check` passed. These are documentation consistency
results, not executed authentication/succession acceptance tests or fresh remote-push proof.

### Round 25 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve-with-conditions** | Proposed D-189 drafting structure | Review auth/recovery separately; application requires the complete shared interface and literal write set | Revised Part 1 plus required Part 2 dependencies, R183 |
| **Approve-with-conditions** | Permanent recovery versus LOA boundary | Preserve historical LOA; do not infer its account mechanism or force its implementation into V1 | Judge review of R181's narrowed disposition, R182 |
| **Reject** | Draft 3 transaction/security acceptance | Audit atomicity and authority/refusal evidence are incomplete | Product/behavior/security corrective draft, R184–R185 |
| **Reject** | B-071/plan closure claims | Outstanding dispositions and superseded criterion are not consistently represented | Lane A current-claim correction, R186, then independent review |
| **Defer** | Graphify terminal currency | Stale; source review can proceed, synchronized approval cannot be claimed | Settled-source synchronization and full local checks |
| **Defer** | AUTH-DOC, AUTH-F1 and implementation | No new authorization; D-171 remains binding | Separate bounded Judge authorization after required review |

---

## Round 26 — External email management versus V1 editorial authority (2026-09-04)

### Scope / what happened

**Rewritten request:** Cross-reference the Product requirements and existing story panels/diagrams
against R182–R186; keep email management outside my-editorial-app and simplify V1 around one
current Chief Editor. Draft the smallest Lane A correction, without building or changing governed
tiers. Use the existing handoff; do not open another finding series or repeat the transaction SOP.

The Judge clarified that email management is external. The phrase “beyond scope to keep track” is
not precise enough to withdraw historical editorial attribution or determine whether in-app
succession itself is being removed. That portion remains a bounded question, not an inferred ruling.
The quoted “push; just done” is not evidence that the new working-tree reviews were committed.

**Closure for this packet:** the clarified boundary is reflected in literal owning-tier draft text,
all relevant panels point to that same contract, and independent review confirms the affected
R182–R186 dispositions. No application, auth build or lane promotion follows from this review.
Lane A owns the Phase 1 correction; Lane B reviews; no new Lane C work is required.

### Cross-reference — what actually exists

| Requested surface | Located source / verified observation | Treatment in the existing packet |
|---|---|---|
| Product persona and scope | `Modular_PRD.md` §§2.3.1, 2.5: human `USR-CHIEF-EDITOR` separated from agents; NG-02 describes one Chief Editor account | One current human user is not an agent identity, a mailbox-management feature or proof that past decisions need no actor |
| Storyboard / story panels | `journal/2026-08-18-storyboard-business-and-digital-twin.md`: A1 discovery outside the app; A2 intake; A5 human T5; A6 agent T6; A7 publication; B3–B6 reuse A2–A6 | Historical review artifact, not the current target. Build Spec's opening supersession notice covers the 2026-08-18 journal analysis set. Preserve history; add these occurrences to R183's existing ledger, not a second storyboard contract |
| UML-style sequence / data-flow diagrams | The same storyboard contains Mermaid sequences at A2/A5 and flowcharts at B7/§3; `journal/2026-08-18-raci-human-vs-digital-twin.md` §8 contains a sequence and panel/RACI crosswalk | These diagrams still describe the historical T5/T6 arrangement. No storyboard/UML section was found in `Modular_PRD.md` itself. Do not claim the old diagrams verify proposed D-189 |
| App boundary and data | `Modular_PRD.md` §§6.2–6.3: transition endpoint and transition actor fields; FR-07, NFR-02/NFR-08: durable who/when/why evidence | Keep an app identity/authority reference and editorial evidence. Do not import mailbox creation, inbox contents, mailbox credentials or provider recovery history |
| Authentication | `Modular_PRD.md` §6.2 Phase 0 anonymity note and §6.5 SEC-03/SEC-03a defer broad auth to S6; plan §12 proposes a narrow exception | R183 still needs exact exception text before application. External authentication does not by itself define permission to approve in this app |
| UI layout | `specs/README.md` assigns UI to `docs/specs/ux/`; the enumerated existing spec files contain no corresponding Chief Editor UX file | Use the already proposed UX scope, not an invented completed screen. Product owns behavior; a future approved UX artifact owns layout, with D-54 inventory impact if created |

### Normalize the boundary before changing children

| Layer | V1 boundary for drafting |
|---|---|
| External email service | Creates/manages mailboxes and their credentials/recovery. Not a my-editorial-app feature |
| External identity/control service, if selected | May authenticate the owner/account or provision access. This is not automatically the email service, and no provider/control system has been selected by this clarification |
| my-editorial-app | Recognizes the sole current authorized Chief Editor, permits the protected editorial decision, records its actor/result/time/reason and displays the corresponding report |
| Historical editorial evidence | Identifies the actor effective at the decision time. It is not a multi-account administration dashboard or mailbox-history service |
| “Active Chief Editor” | Treat as a proposed description of the current holder, not a new role/ID or a development-lane `Active` state. Existing draft term is “Acting Chief Editor assignment”; confirm any intended rename before propagation |

**Proposed replacement boundary text:** “Email-account management is external to my-editorial-app.
V1 exposes one currently authorized Chief Editor for editorial judgment. It does not build mailbox
administration, a general user directory or a delegation-management system. External identity
proof is consumed only as needed to establish this app's current authority. Editorial evidence
retains who performed the decision; external email-management history is not copied into the app.”
The final sentence is the recommended preservation of existing FR-07/NFR-08, pending the question
below; it is not a claim that the Judge has just re-approved a complete identity design.

### Parent-first fix guide — reuse R182–R186

| Order / existing owner | Lane A draft correction | Success criterion / refusal condition |
|---|---|---|
| Parent — R182 | Record external email ownership; remove any implied in-app mailbox creation/recovery UI. Keep Entry007/S5's unspecified account mechanism unspecified. This clarification does not decide temporary LOA implementation | Every email-management operation is outside the app boundary; no new LOA feature is introduced by analogy |
| Parent clarification — R184/R185 scope | Ask whether “beyond scope to keep track” excludes multi-account administration only, while preserving attribution on past editorial decisions. Also state whether replacement remains externally administered or is still an in-app succession feature; do not build either by assumption | The chosen scope names what the app stores/authorizes, without silently deleting the earlier historical-attribution requirement |
| Child — R183 | Add the located A5/A6/B3–B6 and RACI §8 occurrences to the existing ledger. Draft one current target flow, with links to owning Product/behavior/UX text; historical panels remain historical | No implementer must choose between journal T6-agent approval and the proposed human T5-final action; no separate duplicate UML/spec is required merely to repeat the flow |
| Child — R184 | Narrow the requirement to the app's own authorized change and evidence. Do not require app transactions to undo external mailbox operations. If in-app succession is removed from V1, its detailed transaction is outside V1; FR-07's editorial decision/evidence invariant remains | A successful editorial state change cannot lack its required actor/evidence. Apply SC73's succession-specific cases only if that succession capability remains in scope |
| Child — R185 | Keep the minimum check for the one current Chief Editor. External email control, a role label or an agent key is not independently sufficient. No bespoke control-plane UI is mandated | Unauthorized requests cannot approve, including an obsolete identity/session if replacement is supported; the current authorized holder can approve. No general multi-user system is required |
| Last — R186 | Record each narrowed disposition accurately; preserve SC62 as historical. Then use the existing settled-source synchronization and independent-review procedure | No “all resolved” claim while the tracking question, literal write set or target flow remains undecided; no closure based on a draft commit |

**Minimal proposed story flow:** external sign-in/access administration -> app recognizes current
Chief Editor -> T1–T5 evidence/report presented -> human editorial decision -> decision/evidence
recorded -> existing publication/report path. This is a review sketch, not a new state machine:
exact T5-final event/state semantics remain with R183/Part 2; T6 assurance and monetization stay
outside this packet. Account-access administration is not another editorial gate.

### Failure boundary and clarification

- If email administration is implemented as an app feature, the stated external boundary is breached.
- If a mutable current-holder name replaces attribution on older decisions, a later replacement
  makes those decisions appear to belong to the wrong person. One concurrent user does not prevent this.
- If only a UI label authorizes approval, the narrow authentication requirement is not satisfied.
- Reusing historical A5/A6 literally would reinstate the old T5/T6 contract. This is already R183's
  propagation problem, not a new independent backlog item.

**Question for the Judge:** Does “beyond scope to keep track” exclude only multi-account
administration, while retaining who approved each past editorial decision? Until answered, Lane A
can draft the external-email boundary and cross-references, but must not remove attribution or
declare the succession/authorization findings closed.

### Drift / what Lane B did instead

Reviewed source at local `5223a1e`; Graphify remains at `129efab` despite its false `stale` flag.
Thus graph currency is **DRIFTED**, not evidence of current semantic alignment. No callable
Graphify skill was available in the session catalog or searched local skill locations; currency
was checked directly, and stale graph semantics were not used to validate the new model.
The journal diagrams are historical, not defective merely because they are old; consuming them as
the new target without the existing supersession path would be the defect.

Lane B appended only this handoff clarification, preserving the uncommitted Round 25 review and
Lane A's header. No governed file, frozen source, provider, graph, application or lane state changed;
no commit/push was performed. Existing transaction SOP and finding IDs were reused.

### Round 26 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Product boundary clarification | Email management is external; no bespoke mailbox-management feature | Lane A literal scope draft under R182/R183 |
| **Approve-with-conditions** | V1 current-holder model | One current Chief Editor; not a general multi-user feature | Judge clarification on historical attribution and succession boundary |
| **Reject** | Removing audit/authority solely because V1 has one user | Does not follow from the scope clarification | Preserve minimal FR-07/NFR-08 and narrow authorization contract |
| **Defer** | R182–R186 terminal closure / Graphify | Scope question and literal propagation remain open; graph stale | Completed draft, settled-source sync, independent review |
| **Defer** | AUTH-DOC / implementation | No execution approval from this review | Separate bounded Judge authorization |

---

## Round 27 — Single-account V1 and judgment-gate/publication-workflow separation (2026-09-04)

### Scope / clarification captured before children

**Rewritten task:** Consolidate the Judge's single-account scope and gate/workflow distinction;
review source ownership, story panels and the Encyclopedia dependency map; narrow R182–R186 and
give Lane A one parent-first documentation plan. No implementation or governed-tier application.
This continues the same Phase 1 handoff with Lane A drafting and Lane B independently reviewing.

**Judge clarification received in this turn, normalized for drafting:**

- V1 links one email account to the sole Chief Editor/current authorized holder. Email management
  is external. Multi-account tracking and its progressive build belong in the future backlog.
- T1–T5 are editorial judgment gates. Virtual-node agents perform work within that flow; their
  task execution is not a separate definition of the gate or evidence of a human approval.
- The editorial flow completes at T5 and presents its output through the UI. The user's subsequent
  publication approval is a workflow action, not an additional judgment gate. Historical use of
  “T6 approval” must not turn this into either a sixth judgment gate or the deferred T6 assurance feature.

This answers Round 26's scope concern sufficiently to stop treating multi-account succession as
a V1 prerequisite. It does not instruct deletion of FR-07's existing editorial event evidence.
**Correction to Lane B's earlier guidance:** the staged replacement-account/assignment-history
design in Rounds 23–26 must not remain a mandatory V1 dependency after this narrowing. Likewise,
the earlier proposal that a human `T5-FINAL` act completes T5 conflicts with this new clarification;
Lane A must disposition that clause explicitly, not carry it forward under a different label.
These are inputs for the Register's bounded scope/supersession record, not claims of applied D-189.

### What belongs where — canonical records versus source material

| Material | Function | What it cannot do |
|---|---|---|
| Frozen Project PRD/Charter | Customer/source baseline, cited under the existing traceability process | Be rewritten during this correction |
| Journal storyboard and RACI analysis | Dated source reasoning, panels and diagrams that can be cited as historical evidence | Act as the current behavior contract or become a mutable backlog/authority ledger |
| Register / Build Spec / Inventory / originating handoff | Decisions; sprint scope/DoD; file lifecycle; finding evidence and disposition, respectively | Replace one another or copy live status into the journal |
| Modular_PRD / Fn_Specs / SPECS-UX | Product requirements; behavior; stack-specific UI, respectively | Treat an old illustrative panel as a new authorization |
| External Encyclopedia | Derived explanation of cited sources; its local sync ledger tracks dependencies and verification | Govern the source requirements or prove its own currency from local checks |
| Graphify | Derived navigation/evidence over the source corpus | Supply missing approval, scope or lifecycle authority |

**Verified references:** `docs/README.md` “How a request becomes execution” and “Journals preserve
analysis, not authority”; Build Spec's opening supersession notice; `Modular_PRD.md` §§2.3.1,
2.5.2, 4–6, 9; `FN-GATES-01-05.md` §11.1; plan §§11–12; `ENCYCLOPEDIA-SYNC.md` citation map.
Keep historical journals intact. A new current storyboard view belongs with the owning behavior/UX
contract and links back to the historical panel; it does not require a second governing document.

### Cross-reference findings — continue the existing IDs

| Existing ID | Evidence and narrowed correction | V1 applicability |
|---|---|---|
| R182 | Plan §12.1 invents Entry007/S5's account/email mechanism; §§12.2–12.4 go beyond one linked account into replacement identities/control-plane machinery | Remove the invented source claim. External mailbox administration, temporary delegation and multi-account succession are not V1 blockers |
| R183 | Product US-04a/US-05a/US-09, FR-04a/FR-05a, SEC-03a and historical storyboard A5/A6/B3–B6 carry differing human/agent T5/T6 meanings; plan §11 still makes `T5-FINAL` complete T5 | One owning contract must separate gate completion, agent evidence, human UI approval and publication result before literal propagation |
| R183 — Encyclopedia impact extension | Plan §§11.4/12.7 declare the Encyclopedia unaffected. Its actual local ledger maps Entry 01 to FR-05/SEC-01/FN-GATES, Entry 04 to publication state/specs, and Entry 05 to successor review/assurance | Blanket “unaffected” is unsupported. Mark these as impact-review candidates in the existing propagation packet; actual content changes depend on reading the external artifact |
| R184 | The previously proposed succession transaction is outside narrowed V1; Product FR-07/NFR-02 still require attributable editorial transitions | Move succession-specific failure tests out of the V1 checklist. Preserve atomic editorial decision/state evidence; do not demand a transaction spanning an email provider |
| R185 | One account removes the need for role switching, not the distinction between the authorized human, an agent and a supplied label | Keep only the chosen narrow single-account approval authorization; no bespoke account-control system or multi-user administration required |
| R186 | “All draft-addressed” and SC62's revived positive status remain inconsistent; several former succession criteria now have a different scope | Record scope dispositions explicitly. Removed V1 work is not “implemented,” and backlog planning is not readiness or authorization |

### Smallest target storyboard / data-flow draft

This table is the proposed shared input to the next sequence diagram, not a second state machine.
Use these semantics for the story panels and UML-style sequence view; do not mint another `T6` ID.

| Stage | Performer | Output / boundary |
|---|---|---|
| T1–T4 judgment gates | Assigned virtual-node agents | Gate-specific work and evidence; neither a human approval nor automatic publication |
| T5 judgment gate and required evidence completion | Assigned reviewer agent(s), with the defined non-judgment completion mechanism | Completed editorial review packet. Gate criterion, agent task, and bundle-join operation remain distinct |
| UI presentation | System | Displays the completed packet and publication controls to the sole Chief Editor; rendering the screen approves nothing |
| Publication approval workflow | Human Chief Editor using the linked account | Records the human disposition and its evidence. This occurs after T5 and does not complete T5 again |
| Publication/report outcome | Existing publication workflow | Approved is not Published or proof of delivery; retain the owning publication/report contract |

Under the held D-181 target, the non-judgment bundle join owns `Drafted -> Reviewed`. Preserve or
explicitly amend that state mapping in the new decision; never silently move it to the human UI
action. The exact name of the post-T5 approval event and its mapping to article/publication states
remain Lane A drafting work for review, not a reason to add a sixth judgment gate. PBL-01's future
T6 assurance remains separate and is not activated by this publication workflow.

### Lane A follow-up — parent first, one source per fact

1. **Capture the scope and partial supersession parent.** Draft the bounded D-189 amendment for
   one linked account and post-T5 human publication approval. Identify the now-out-of-V1 succession
   clauses and the incompatible `T5-FINAL`-completes-T5 clause. Preserve frozen sources; do not treat
   this clarification or the handoff review as authorization to apply the packet.
2. **Draft the minimal V1 child contract.** Link the account to the authorized Chief Editor; retain
   the existing narrow authentication requirement without expanding it into account administration.
   Map T1–T5 evidence completion, UI presentation, human disposition and publication outcome once.
   Correct literal Product/behavior/UX references and higher-precedence overlays through R183's
   existing occurrence ledger. No parallel event or second completion point may be invented.
3. **Refine the future multi-account candidate in dependency order.** Use existing `PBL-04` as the
   candidate parent; its current canonical label is “Multi-team accounts,” so explicitly draft the
   inclusion of multi-account succession rather than silently broadening or renaming it. Proposed
   increments: (a) user/account and permission boundaries; (b) controlled current-holder switching
   with assignment history and session revocation; (c) temporary delegation/recovery edge cases.
   Preserve R184/R185's relevant tests with those future increments. This is dependency order, not
   an approved sprint schedule, numerical priority or promotion above other backlog items. V1
   completion neither deletes nor authorizes the backlog candidate; do not merge it with PBL-01,
   PBL-02 or PBL-09 (Email/Slack notifications is not mailbox management).
4. **Correct lifecycle and derived views last.** R186 records which tests remain V1 and which
   become future-feature candidates. Keep SC62 historical; succession-specific SC55–SC69/SC73
   need applicability review, not a blanket “continue to apply.” Assess Encyclopedia entries through
   the existing sync ledger. Synchronize Graphify only after the source packet settles, then run
   checks and obtain independent review. Use the existing commit/push SOP; do not duplicate it.

### Success criteria and failure tests

- **Scope:** no V1 screen, requirement or prerequisite demands multiple accounts, old/new assignment
  history, mailbox management or a custom recovery control plane. The sole linked account can
  perform its authorized editorial approval; an agent or arbitrary identity cannot substitute.
- **Sequence:** a completed T5 packet without a human UI disposition remains unapproved for
  publication. A human disposition cannot manufacture missing T1–T5 evidence or complete T5 again.
- **State/evidence:** UI rendering changes no approval state; a persisted approval retains the
  required who/when/why evidence and does not falsely claim successful publication/delivery.
- **Traceability:** current story/diagram references lead to one accepted target; historical journal
  labels remain explainable but are not executable instructions. Open findings, PBL ownership and
  authority remain in their canonical records, not solely in a journal or Encyclopedia.
- **Backlog:** multi-account increments have an explicit candidate parent and dependencies; neither
  their existence nor V1 closure is treated as build permission or an approved priority rank.

The deterministic failures are boundary errors: making account succession a V1 dependency contradicts
the narrowed scope; labeling post-T5 approval as another judgment gate adds a gate the Judge excluded;
using a current display label to replace recorded actors loses attribution. These are separate from
claims about security exploits or legal compliance, neither of which this review establishes.

### Evidence limits / what Lane B did instead

Local reviewed `HEAD` remains `5223a1e`; Graphify's `lastAnalyzedHead` remains `129efab` (**DRIFTED**).
The external Encyclopedia could not be retrieved; its content/currency is **UNVERIFIED**, while
the local citation map was read in full. The failed retrieval does not block local source drafting
and does not establish the Encyclopedia is wrong. Lane A should read it in full before any update;
no external artifact was edited or republished here.

Only this B-071 review was appended. Earlier uncommitted review sections and Lane A's header were
preserved. No new finding IDs, governed-doc edits, source rewrites, graph rebuild, code, provider
configuration, commit, push, or lane-state transition occurred. Independent closure remains pending.

### Round 27 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | V1 scope clarification | One linked account; multi-account progression is future work | Lane A bounded scope/partial-supersession draft |
| **Approve** | Editorial/publication separation | T1–T5 judgment flow precedes human UI publication approval | R183 literal state/event and panel crosswalk |
| **Reject** | Mandatory V1 succession and human action completing T5 again | Earlier proposed dependencies conflict with the clarified scope | Correct plan and test applicability under R182–R186 |
| **Approve-with-conditions** | PBL-04 refinement proposal | Dependency order proposed; scope membership/rank not yet recorded | Future Product backlog refinement, no automatic V1 carry-in |
| **Defer** | Encyclopedia / Graphify verification | Dependency impact identified; external contents unavailable; graph stale | Read external artifact, settle sources, synchronize and review |
| **Defer** | B-071 closure / AUTH-DOC / implementation | Clarification and review only; no new execution authority | Complete literal packet, independent review, bounded Judge authorization |

---

## Round 28 — Draft 4 review: judgment-rule contracts versus workflow tracking (2026-09-04)

### Scope / what happened

**Rewritten task:** Independently review proposed D-189 Draft 4 (§13) at `32f48ef`; capture the
Judge's clarification that T1–T5 validate editorial judgment rules while workflows are separately
described; retain future T6 assurance judgment as distinct. Return a parent-first correction in
this handoff only, using the existing template. No code, source application or new tracker.

**New clarification, captured as input:** the original T1–T5 judgment-gate purpose was to validate
business editorial judgment rules for possible later OD4 use. Workflow mechanics grew into that
description and need separate tracking. T6 was added later for assurance judgment. This purpose
does not authorize OD4, make V1 dependent on building OD4, or turn the post-T5 human publication
action into the future T6 assurance judgment.

Local Git confirms `32f48ef` contains the plan and B-071 review updates. The final commit message
describes Draft 4. The pasted account of intermediate message amendments and the fresh GitHub tip
were not independently verified; neither is needed to review the local source. Lane A remains
the Phase 1 correction owner; Lane B reviews; no new Lane C workflow work follows from this packet.

### Preserve the corrections that are actually present

- §13 removes multi-account succession from V1 and proposes it under existing PBL-04 without
  inventing a rank or granting build authority.
- §13 separates T5 completion from UI presentation and human publication disposition.
- The candidate name `EDITORIAL_DISPOSITION` is clearly attributed to Lane A, not the Judge.
- The unsupported Entry007/S5 account/email inference is withdrawn in §13.3.
- Encyclopedia Entries 01/04/05 are correctly treated as impact-review candidates, not verified
  external edits. No need to repeat those fixes or reopen their underlying explanation.

### Parent contract — separate subjects, not separate sources of truth

| Subject | What it defines | Minimum traceability | Not equivalent to |
|---|---|---|---|
| Editorial judgment gate T1–T5 | The editorial question/rule and the evidence sufficient to resolve it | Owning feature-group requirement, applicable rule reference, evidence, recorded result and refusal condition | A screen, an agent run finishing, or every state transition |
| Virtual-node task | Work performed by an assigned agent to supply/evaluate gate evidence | Node/role, agent executor and attempt references, consumed/produced evidence, gate served | Human publication authority; OD4 virtual agents |
| Workflow step | How work starts, is routed, waits, joins, returns, is presented or is approved | Step name, performer, prerequisite/result references, incoming/outgoing state and owning requirement | An extra judgment gate or independent assurance claim |
| Human publication disposition | The user's post-T5 choice through the UI | Sole linked account, completed packet, disposition and recorded publication effect | Completion of T5 again; T6 assurance judgment |
| Future T6 assurance judgment | Later assurance-specific rules/results | Existing PBL-01 scope and later separate authorization | V1 publication approval; IIA Line 3 or OD4 merely by sharing a number/name |

**Proposed workflow tracking approach:** use a workflow-step crosswalk alongside the owning
behavior contract, linked to a separate gate/rule table. Reuse current node, operation and event
references where their meanings match. Do not renumber gates, invent a parallel backlog ledger,
or copy live lane status into the crosswalk. Product owns requirements; Fn_Specs own behavior;
SPECS/UX owns layout. A UML sequence or story panel is a view of that same contract, not another
place that independently decides it. This is a drafting structure, not a new file authorization.

### Verified residual gaps — keep R183/R185/R186, do not duplicate IDs

| Existing finding | Evidence in Draft 4 | Smallest corrective draft |
|---|---|---|
| R183 — gate/workflow label versus Line classification | §13.2 calls `satisfied` a T6-labelled state and declares G-02a superseded because there is no gate six, while leaving the disposition's Line and RACI mapping undecided | `satisfied` is a value of `line_separation_status`, not gate completion or article state (`Modular_PRD` FR-05/G-02a). Separate event identity, Line mapping, and metric applicability. Do not infer either `satisfied` or `not_applicable` merely from an event name. Draft the retained/amended/retired control explicitly before claiming it resolved |
| R183 — application contract remains incomplete | §13.2 leaves event shape/RACI/control mapping to Part 2; §13.6 claims to supersede prior write sets but omits explicit FN-GATES/FN-PUBLICATION targets; §13.8 still inherits application steps from §§11–12 | Review the concept now, but block application until the workflow/rule crosswalk, exact owning-tier text and complete write set exist. Include the remaining narrow authentication behavior under R185; removing succession does not remove its independent purpose. Replace inherited execution references with a precise application readiness condition |
| R186 — non-succession criteria wrongly retired | §13.7 says SC71–SC75 all test succession. SC71 tests source accuracy, SC72 incomplete application, and SC75 truthful status. Conversely SC55–SC62 are called applicable even though SC55/56/59 explicitly concern replacement/rollback/reactivation | Classify the individual criteria by subject, not a numerical range. Preserve source/readiness/lifecycle checks in V1; move genuine succession cases to the PBL-04 candidate. Keep SC62 historical |
| R186 — closure overclaim repeats | §13 heading says resolves R182–R186; §13.3 still leaves R183 unresolved and calls every item Draft-addressed while §13.5 lists undecided items | Say “addresses” at the heading; record draft-corrected, unresolved and future-scope dispositions distinctly. Do not report R186 corrected until its own status and applicability errors are removed |

**No implicit security ruling:** the new clarification concerns how judgment gates and workflows
are described. It does not authorize removal of the existing human-only approval boundary,
blind-review/evidence requirements or Line-separation controls. Their applicability to the newly
named workflow must be resolved in the existing source/occurrence ledger, not silently carried
over or silently discarded. No new interpretation of IIA conformance is made here.

### Lane A next steps, parent first

1. **Scope and vocabulary parent:** capture the judgment-rule purpose and separate workflow
   concept in the proposed decision. Retain one account, future PBL-01/PBL-04 and OD4 boundaries.
   Use `EDITORIAL_DISPOSITION` as a candidate name only; approving its name is not approval of
   unfinished behavior or a change to source controls.
2. **One complete crosswalk:** link each workflow step to the gate/rules/evidence it consumes,
   actor and allowed effect. Reconcile the Line/RACI and existing review-control subjects here.
   A join may signal that required gate evidence is complete; it neither supplies judgment nor
   chooses a reviewer result. The human approval consumes the completed packet without completing T5.
3. **Source propagation packet:** provide literal Product, Fn_Spec and applicable higher-tier
   corrections under R183/R147. Include the actual owning security rows required by the narrow
   single-account approval. Account for Build Spec/Inventory effects under D-54. Historical
   storyboard A5/A6/B3–B6 and RACI journal §8 remain historical; current panels/sequence diagrams
   link to the new accepted contract rather than overwriting dated analysis.
4. **Test/status correction:** apply the mapping below and fix R186's current claims. Only then
   offer the bounded application packet for authorization; no Part 2-dependent application now.
5. **Derived views and independent closure:** review Encyclopedia impacts via its existing ledger,
   synchronize Graphify after settled source, run checks, and hand back to Lane B. Follow the
   canonical transaction SOP; do not introduce another commit/push procedure here.

### Criterion applicability and success proof

| Existing criterion | Draft disposition to review |
|---|---|
| SC55, SC56, SC59; SC63–SC69 | Succession/recovery-specific cases: future PBL-04 candidate, not V1 prerequisites |
| SC57, SC58, SC60, SC61 | Preserve the single-account authorization and editorial attribution substance; remove replacement/assignment-history predicates that are now outside V1. Link revised tests to the surviving owning requirement |
| SC62 | Historical non-selected model only |
| SC71, SC72, SC75 | Still relevant: accurate source citation, complete application packet and truthful lifecycle claims |
| SC73 | Split by subject: future succession atomicity versus existing V1 editorial decision/evidence atomicity |
| SC74 | Split by subject: future control-principal/former-session checks versus V1 forged identity/unauthorized human approval refusal |
| SC76 | Keep the no-extra-gate test, but it is not a substitute for event/state, authority and evidence tests |

**Additional proof required within R183's existing test plan:** a workflow can wait, retry, join
or display a screen without adding a judgment gate; completing an agent task does not satisfy a
gate with missing required evidence; UI rendering does not approve; only the authorized human
disposition can cause its specified approval effect; approval does not assert successful delivery.
Removing the literal name T6 must not silently change the Line-classification result. Current story
panels, sequence diagrams and Product/Fn_Spec rows must give the same answer to each case.

Failure is deterministic if application is attempted with missing literal targets: the implementer
must either improvise or leave contradictions. Likewise, treating a run's completion as proof of
the judgment rule permits missing evidence, and retiring tests by ID range loses still-required
checks. These are documented specification failure paths, not claims of a deployed exploit.

### Evidence limits / what Lane B did instead

Reviewed plan/source at `32f48ef`. Graphify remains based on `129efab` (**DRIFTED**); no semantic
currency claim is made from its `stale: false` value. The external Encyclopedia was not re-read or
republished; only its local dependency ledger is evidence here. Its content remains unverified.
No remote synchronization claim is made from the pasted push report.

Appended this review only to B-071. Lane A's plan/header, governed/frozen sources, graph, code,
provider configuration, lane state and unrelated `package-lock.json` were not changed. No new
finding IDs, commit or push. B-071 remains open; this is not AUTH-DOC or build authorization.

### Round 28 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Scope and ontology direction | Judgment rules, agent tasks, workflow steps and future T6 assurance remain separate | Lane A parent contract and workflow crosswalk |
| **Approve-with-conditions** | EDITORIAL_DISPOSITION proposal | Suitable workflow name; event/control mapping still incomplete | R183/R185 literal behavior and authorization review |
| **Reject** | Draft 4 application readiness | Missing source targets and unsettled Line/control mapping | Complete Part 2-dependent packet before application |
| **Reject** | R186 completion / blanket test retirement | Source/readiness/lifecycle tests were wrongly grouped as succession | Per-subject criterion mapping and accurate current claims |
| **Defer** | B-071 verification / derived-view currency | Source changes not applied; graph stale; Encyclopedia content unverified | Settled-source checks and independent review |
| **Defer** | AUTH-DOC / implementation | No execution permission issued here | Separate bounded Judge authorization |

---

## Round 29 — T5 always assesses; workflow remedies depend on its findings (2026-09-04)

### Scope / what happened

**Rewritten task:** Capture the Judge's clarification that T5 editorial judgment always happens,
separate it from conditional sign-off work, and give Lane A the missing owning-tier contract pieces
for the shortest V1 route. Draft-only review at `32f48ef`; append to this handoff, with no duplicate
finding series, governing-source edit, build or authorization.

**Clarification received:** “T5 editorial stage ... is part of the judgement-gate hence is always
happening else can't judge what goes missing.” This resolves the assessment-versus-remedy question:
the assessment must not be conditional on first knowing that something is missing. It does not mean
every assessment approves, or every remedial workflow action must run on every article.

**Correction to Lane B's previous question:** asking whether Chief Editor sign-off always runs
combined the judgment act with the work that a judgment might require. Separate those subjects.
The user's preceding proposed T5-FINAL diagram names a human judgment; this round confirms that
T5 assessment is mandatory, not that a missing-A remedy is a universal duplicate sign-off.
Draft 4 §13.2's assertion that the bundle join fully completes T5 cannot simply be carried forward
against that diagram. Lane A must record a scoped correction rather than restore all old §§11–12.
V1 remains single-account; multi-account succession and PBL-01's T6 assurance remain future work.

### The distinctions the contract must retain

| Term | Meaning | Not proof of |
|---|---|---|
| RACI `A` | Accountable party for the named task, milestone or route scope | Work finished or approval recorded |
| Approval/sign-off evidence | That the authorized approver actually accepted the relevant completed work | Satisfaction of unrelated tasks or judgment rules |
| T5 assessment | Required examination of the applicable evidence, accountability and missing items | A positive result merely because assessment ran |
| Workflow remedy | Work required by a finding, such as obtaining a missing sign-off | A new judgment gate, automatic approval or rewriting the original RACI |
| Bundle-ready join | Deterministic indication that its defined review inputs are sealed | Final editorial judgment or a second approver |

**Shortest route confirmed:** `factory-route-operation-crosswalk.md` §1 records ROUTE-PROD-1,
Reporter `R` and Desk Editor `A`; its adjacent note expressly separates route accountability from
gate-review function. This does not skip T1–T5, make Desk Editor a second V1 login, or establish
who executed a particular agent task. Apply accountability checks at each item's actual scope;
do not invent a local `A` on every record if the accepted contract uses explicit parent inheritance.

### Proposed decision text — for Lane A to refine, not applied

> T5 editorial judgment is mandatory for every article reaching that stage. It evaluates the
> required evidence and records what is sufficient or missing, even when the package cannot pass.
> The existence of an accountable party is checked separately from evidence of that party's
> approval. Missing accountability invokes the Chief Editor fallback described by the Judge;
> missing approval from an already assigned accountable party is recorded as a different finding.
> No missing assignment or approval is silently fabricated. A failed or incomplete assessment
> cannot produce the successful approval transition. Any remedy follows the governed workflow and
> is evidenced before a subsequent positive assessment can authorize progression.

**Recommended reconciliation of the candidate labels:** retain T5-REVIEW for agent evidence,
the bundle-ready join for readiness, and T5-FINAL for the user's proposed final editorial judgment.
Treat EDITORIAL_DISPOSITION as the recorded outcome of that judgment, not a second independent
approval or state-changing action. This mapping is a proposal to remove duplication, not a claim
that the Judge has approved a storage/event name. Workflow actions remedy findings or act on the
disposition; they do not replace the mandatory assessment.

### Case table — what runs versus what it finds

| Case | T5 judgment | Finding / next workflow action | Successful approval permitted? |
|---|---|---|---|
| Applicable accountable parties and required approval evidence are present | Runs | Assess remaining editorial rules; do not demand a duplicate missing-A sign-off | Only with a positive final judgment and all required evidence |
| A required `A` cannot be resolved for its scope | Runs and identifies the gap | Record the gap and Chief Editor fallback action; preserve why that fallback was needed | Not from the missing assignment alone |
| `A` is known but required approval evidence is missing | Runs and distinguishes missing evidence from missing authority | Obtain the required approval through its authorized workflow; do not automatically replace `A` | No, while required evidence remains missing |
| Required review evidence is missing or editorial judgment is negative | Runs/records the incompleteness or negative result without bypassing prerequisites | Governed return/hold/rejection path, to be mapped explicitly | No |

“Runs” is not “passes.” An incomplete packet may produce an assessment of missing inputs; it
must not be marked bundle-ready or positively completed by doing so. No new persisted status enum
is introduced by this case table.

### Parent-first owning-tier packet — missing pieces, not another SOP

| Order / existing finding | Owning target | Literal content Lane A still needs to draft | Verification |
|---|---|---|---|
| Parent — R183/R186 | Proposed D-189 Register text and corrective plan | Mandatory assessment versus conditional remedies; partial supersession of §13.2's join-completes-T5 claim; proposed T5-FINAL/EDITORIAL_DISPOSITION relationship; retain single-account scope | One current contract; no wholesale resurrection of succession or contradictory completion points |
| Child — R183 | Modular_PRD §§4–5, FR-04a/FR-05a/FR-07/FR-09 and their ACs | Separate assigned A, actual approval evidence, judgment verdict and authorized effect; positive and incomplete cases above | Assigned A alone cannot satisfy an approval AC; assessment cannot be skipped just because no gap is already known |
| Child — R183/R185 | RACI matrix §3.1 and route-operation crosswalk §§2–4 | Distinguish OP-FINAL-SIGNOFF work from T5's judgment about it; exact scope of parent A/inheritance and Chief Editor fallback; current actor/Line mapping | Exactly one accountable party per governed scope; no agent/human identity substitution or silent authority inheritance |
| Child — R183/R184 | FN-GATES §11.1 and FN-PUBLICATION §§4–5 | Readiness versus judgment versus publication; retained Drafted→Reviewed join and proposed successful Reviewed→Approved owner; failure/return/reassessment and evidence ordering | At most one owner per successful transition; missing evidence cannot cause approval; Approved is not Published |
| Child — R183 | Existing UX scope and current story/sequence view | UI shows evidence, A-coverage and approval gaps distinctly; records judgment separately from invoking a remedy. Link historical storyboard A5/A6/B3–B6 and RACI journal §8 without rewriting them | One diagram/crosswalk consumed by UI and behavior; screen rendering, task completion and approval are not synonyms |
| Child — R185/R186 | Product control rows including G-02a/SEC-01a/SEC-03a; existing criterion mapping | Name the actual Line/security classification and retain non-succession tests SC71/SC72/SC75; state current draft/open/future dispositions | No independence result inferred from a T-label; no test dropped merely by number range |
| Last — R183/R186 | Build Spec / Inventory applicability; Encyclopedia sync ledger / Graphify | Scope/DoD and file-lifecycle effects, followed by derived-view impact assessment and independent evidence | Complete literal packet before application; source and graph currency demonstrated separately |

**Preserve existing state semantics unless explicitly amended:** D-181's held target assigns
Drafted→Reviewed to the non-judgment join. The new proposed final judgment may own the positive
Reviewed→Approved effect, but completing an assessment with a negative result must not take that
transition. Lane A must specify that non-positive path, and whether the stage remains blocked or
closes negatively, without treating “assessment performed” and “approval achieved” as one flag.
This is bounded behavior drafting, not a new business authority or a request to build.

### Failure and success criteria

The circular failure is: “only run T5 when missing A is already detected,” when T5 is the step
meant to detect it. The false-positive failure is: “A exists, therefore the work was approved.”
The duplicate-state failure is: both T5-FINAL and EDITORIAL_DISPOSITION independently approve the
same package. Negate these in the existing R183 test plan:

- Both complete and incomplete input packages reach assessment; only a positive, fully evidenced
  result can authorize the successful transition.
- Missing A and missing approval produce distinguishable findings and authorized next actions.
- No remedy, button render or sealed agent task automatically fabricates the final judgment.
- The proposed human judgment and its disposition are traced as one decision, not two approvals.
- Publication evidence and historical actor attribution remain intact; no multi-account feature
  becomes a V1 prerequisite.

### Evidence / what Lane B did instead

Read the current plan, Product anchors, route/crosswalk and Fn_Spec rules. Historical panels were
cross-referenced, not promoted to operative authority. Encyclopedia Entries 01/04/05 remain impact
candidates from the local ledger; the external artifact was not re-read and remains unverified.
Graphify remains stale (`129efab` versus reviewed `32f48ef`); no rebuild or semantic-currency claim.

Only this handoff clarification was appended, preserving Round 28's uncommitted review and Lane A's
header. No governed/frozen source, plan, application, graph or provider changed; no commit or push.
R182–R186 retain their existing identities and remain subject to literal correction and independent
review. Lane A owns the Phase 1 follow-up; no new Lane C implementation is implied.

### Round 29 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Judgment/workflow clarification | T5 assessment always happens; findings determine conditional work | Lane A parent decision draft |
| **Approve-with-conditions** | T5-FINAL / EDITORIAL_DISPOSITION mapping | One judgment and recorded disposition proposed, not duplicate approvals | Exact state/outcome/actor contract under R183 |
| **Reject** | Assigned A as approval, or incomplete assessment as approval | Both conflate distinct evidence facts | Product/behavior negative tests |
| **Defer** | Handoff closure / Graphify / Encyclopedia verification | Literal propagation and derived-view verification remain incomplete | Settled-source synchronization and independent review |
| **Defer** | AUTH-DOC / implementation | No application or build permission issued | Separate bounded Judge authorization |

---

## Round 30 — R183/R185 completion breakdown against Draft 5 (2026-09-04)

### Scope / what happened

**Rewritten task:** At proposed D-189 Draft 5 (`3d50699`, plan §14), separate completed drafting
from missing contract text and unapplied work for R183/R185. Consolidate corrections into this
handoff with a parent-first Lane A checklist. No build, governed-tier edit, new tracking channel or
duplicate finding IDs. Lane A owns Phase 1 correction; Lane B independently reviews it.

**Meaning of completed below:** text is present in the committed draft, not applied to governing
requirements, implemented, or terminally Verified. §14.8 correctly refuses application. This
review must not turn that useful honesty into an assertion that the whole packet is finished.

### Completed drafting versus still open

| Finding / component | What is present in Draft 5 | What remains before application readiness |
|---|---|---|
| R183 — judgment versus remedy | §14.1: T5 assessment is mandatory; a remedy is conditional; runs does not mean passes | Carry this distinction into the owning Product/behavior rows and the incomplete-input path |
| R183 — one judgment/outcome | §14.2: T5-FINAL is the human judgment; EDITORIAL_DISPOSITION is its recorded outcome | Specify per-assessment identity and retry/reassessment semantics; remove “structurally impossible” as a substitute for verification |
| R183 — positive state ownership | §14.4: join owns Drafted→Reviewed; positive T5-FINAL owns Reviewed→Approved | Literal target overlays, preconditions and negative/return cases, including assessment before the bundle is ready |
| R183 — Line control | §14.5 correctly retains `line_separation_status` instead of deleting it with a label | Reconcile the actual RACI/Line row and classify every relevant assessment/transition kind. The proposed forward-path mapping is not yet propagated or tested |
| R183 — source accuracy | Source/readiness/lifecycle criteria restored in §14.6 | Correct the “no R proves missing approval” example and reviewer-judgment wording identified below |
| R183 — occurrence ledger | Owners and several file targets named in §§14.7–14.10 | Complete the existing R145–R168 ledger: exact old clause, retained/amended subject, proposed replacement, decision anchor and acceptance check |
| R183 — literal documents/views | FN-GATES/FN-PUBLICATION/RACI/crosswalk targets now explicitly named | Write the actual Product, behavior, higher-precedence overlays and current story/sequence/UI cross-references. A list of files is not their replacement text |
| R185 — scope boundary | Single linked account; no V1 succession or custom control plane | Preserve this boundary in actual SEC-01a/SEC-03a and affected API/no-login exception text |
| R185 — authorization principle | Only the authenticated linked Chief Editor can perform human approval; role label/agent identity is insufficient | Literal trusted identity-to-account check, action boundary, permitted/refused cases and attributable decision evidence. Do not infer authentication is built |
| R185 — test disposition | §14.6 retains single-account refusal tests and defers succession tests | Rewritten, owning-requirement-linked positive/negative tests; remove obsolete assignment/succession predicates, not the authorization requirement |
| Both — application / independent closure | No application claimed; readiness preconditions explicit | Bounded Judge authorization, approved source application, independent same-revision review and required derived-view verification remain later steps |

### Residual corrections inside these same findings

1. **R183 — source RACI is not execution evidence (§14.3).** The operation master says
   OP-FINAL-SIGNOFF has Desk Editor `A` and no source `R`. That does not establish whether an
   approval actually occurred on any article. It is not “exactly case 3.” Earlier Judge explanation
   also treated an A-only final sign-off as intentional after prior R work. Correct the example
   to: “A is specified; source R/operation shape needs its accepted interpretation; actual approval
   evidence must be checked separately.” Do not invent an R or a live missing-approval incident.
2. **R183 — reviewer judgment versus final judgment (§14.2).** “Agent evidence ... not judgment”
   conflicts with FN-GATES §11.1's “Each sealed act records its judgment.” Draft “records the
   reviewer's judgment/evidence, not final human approval.” Only the deterministic join makes no
   judgment. Preserve the Judge's distinction between agent work, gate assessment and workflow.
3. **R183 — incomplete input before Reviewed (§14.4).** With a missing required review act, the
   join has not run and the article may still be Drafted. The offered “remains Reviewed” path
   cannot cover that case. Specify pre-join incompleteness separately from post-join negative
   judgment; otherwise the mandatory assessment is either unreachable or advances state without
   its prerequisites. Preserve applicable blind-review controls while specifying what missing-input
   information can be shown; do not imply the incomplete-input path waives them.
4. **R183/R184 — reassessment versus duplicate approval (§14.2, SC79).** §14.1 allows a subsequent
   assessment after remedy, but SC79 says exactly one judgment/outcome for an article. Scope the
   pairing to an assessment of an identified evidence revision. A retry of that same decision must
   not duplicate its effect; a new assessment after changed evidence preserves the former finding
   and records the new outcome. These are required semantics, not a new schema or multi-account
   feature. A drawing alone does not make duplicate writes structurally impossible.

### Lane A completion checklist — one bounded draft unit at a time

| Order | Draft unit / owner | Depends on | Observable finish |
|---|---|---|---|
| 1 | **Outcome contract — R183**, proposed decision and Product/behavior owner | Existing mandatory-assessment clarification | Distinguish pre-join incomplete, post-join missing approval, substantive negative judgment, positive approval and reassessment; no blanket “all failures remain Reviewed” |
| 2 | **Role/control mapping — R183/R185**, RACI §3.1 and crosswalk §§2–4 | 1 | Name actual human/agent act, scoped A, required approval evidence, Line result and allowed action; no RACI cell is treated as proof of an executed act |
| 3 | **Literal behavior text — R183**, Modular_PRD §§4–5/9, FN-GATES §11.1, FN-PUBLICATION §§4–5, relevant source overlays | 1–2 | Full replacement/overlay text and acceptance criteria, not “update/re-cite this file”; retain frozen Project PRD/Charter unchanged |
| 4 | **Literal security text — R185**, SEC-01a/SEC-03a, affected API/auth scope and shared rule references | 2–3 | Sole trusted linked account allowed; anonymous, spoofed human label, agent key and unauthorized action refused; complete narrow exception without general multi-account administration |
| 5 | **Occurrence/view reconciliation — R183**, existing ledger, proposed current panels/sequence/UI and Encyclopedia impact map | 3–4 | Every occurrence points to the same target. Preserve historical journal A5/A6/B3–B6 and RACI §8 as history, not operative replacements; no duplicate SOP or live status in a journal |
| 6 | **Readiness evidence — both**, Build Spec/Inventory applicability and handoff | 1–5 | Plan lists no undrafted target; immutable review revision identified. Only then request application authorization; after accepted source application, synchronize Graphify and independently verify |

**Proposed outcome policy for review, not a Judge decision:** incomplete input does not advance
the current article state and requests the identified remedy; substantive negative judgment takes
an explicitly selected governed rejection/return path; only positive, fully evidenced judgment can
approve. Distinguish the stage being assessed from the article being approved. Lane A should draft
this case-based recommendation for the Judge rather than offer one blocked-versus-closed choice
for every kind of failure. No new status enum or removal of an existing control is implied.

### Success criteria / why failure would occur

- A required review is missing: assessment records the gap without a fake join or automatic
  Drafted→Reviewed change. Remedy/reassessment can subsequently proceed through the valid path.
- A final sign-off has no R in the source matrix: the system does not conclude approval is absent
  or invent a responsible party solely from that cell; accepted scope and actual evidence decide.
- Agent review findings remain attributable as reviewer judgments; the human alone owns the final
  approval act, and the join is not presented as either reviewer.
- One assessment produces one linked disposition/effect; retry is non-duplicating; a genuine new
  assessment retains earlier findings rather than overwriting them or violating an article-wide
  “only one judgment ever” restriction.
- The authenticated linked account passes the positive authorization test; supplied labels/agent
  keys cannot bypass it through another write path. This tests the narrow V1 control, not full S6.
- Application is refused while any literal owning-tier target remains unwritten; a conceptual
  approval or a draft commit cannot satisfy that missing work.

### Drift and handback evidence

Reviewed local HEAD `3d50699`; the commit changes only the corrective plan and B-071. No fresh
remote-tip claim is made. Graphify remains based on `129efab` (**DRIFTED**), so stale semantics
cannot verify this target. Encyclopedia impact is still Entries 01/04/05 according to the local
ledger; its external contents were not read this turn and remain unverified. Source drafting can
continue without claiming that artifact was synchronized.

Only this existing handoff was appended. Lane A's plan/header, governing/frozen files, graph,
provider configuration, code and lane state were untouched; no commit/push. The unrelated
`package-lock.json` remains untouched. No additional finding IDs or parallel completion tracker.

### Round 30 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Draft 5 conceptual progress | Mandatory assessment, recorded disposition and explicit readiness refusal are present | Preserve while completing the bounded draft units |
| **Approve-with-conditions** | R183 behavior model | Positive path drafted; incomplete/negative/reassessment and source-evidence distinctions need correction | Units 1–3 and occurrence reconciliation |
| **Defer** | R185 security completion | Principle drafted; literal owning rows and test mapping absent | Units 2 and 4 |
| **Reject** | R183/R185 Applied or Verified claim | No governing application or terminal verification exists | Complete packet, authorize, apply, independently review |
| **Defer** | Graphify / Encyclopedia currency and implementation | Stale/unverified derived views; D-171 hold unchanged | Settled-source verification and separate build authorization |

## Round 31 — R183 drafting guide; R185 removed from the proposed V1 prerequisite list

### Scope, input and status

**Restated request:** consolidate the latest Judge clarification into a simple, parent-first
Lane A drafting guide for R183; remove R185's proposed authentication work from V1 scope;
reconcile the literal owning text and its views before requesting application. Plan only.

Judge clarification received in this review: **“since there is only one account there is no
requirement to scope in V1”** (R185). This is the scope input to record, not a claim that
authentication exists or that a single account proves identity. It replaces Round 30's proposed
security-drafting prerequisite (unit 4) and its R185 security-completion recommendation.
Lane A must carry this narrowing into the proposed decision and Draft 5 §14.7–§14.10; this
handoff does not itself apply a Register amendment or mark R185 Applied/Verified.

Source packet: this handoff R183/R185/R186 and Round 30; `V1-B071-CORRECTIVE-PLAN.md` §14;
`Modular_PRD.md` feature, security and acceptance rows; `FN-GATES-01-05.md` §11.1;
`FN-PUBLICATION-09-10-13.md` §§4–5; `raci-involvement-matrix.md` §3.1;
`factory-route-operation-crosswalk.md` §§2–4; Build Spec, historical storyboard/RACI journals
and `ENCYCLOPEDIA-SYNC.md`. Reuse these records, not a new handoff or completion tracker.
Lane A owns drafting and later authorized propagation; Lane B independently reviews;
Lane C has no workflow/build change in this packet. Closure needs applied owning text and
independent evidence, not a finished draft or a green check alone.

### Normalized terms and verified gaps

| Existing item | Distinction to preserve | Evidence and failure if conflated |
|---|---|---|
| R183: RACI | Assigned `A`, assigned `R`, and recorded approval are separate facts | Draft 5 §14.3 infers missing execution from OP-FINAL-SIGNOFF's blank `R`. An A-only sign-off can approve preceding R-work; a blank R cannot prove absent approval evidence |
| R183: readiness | Assessment may report missing inputs; a complete review bundle is a different condition | §14.4's blanket `Reviewed` result misstates a pre-join incomplete article; FN-GATES §11.1 keeps it `Drafted` |
| R183: judgment | Reviewer judgment supplies evidence; the human final judgment authorizes the final disposition; the join judges neither | §14.2 says agent acts supply evidence “not judgment”; FN-GATES §11.1 explicitly records each act's judgment |
| R183: reassessment | One effective result per assessment, not one assessment for the article's lifetime | An article-wide one-judgment rule prevents remedy; unrestricted replay can duplicate approval effects |
| R185/R186: scope | No new V1 authentication/succession prerequisite; no implied authenticated-identity claim | §14.7–§14.10 still require narrow authentication rows. Remove this proposed scope without deleting unrelated source-accuracy, lifecycle or Line-control criteria |

These are refinements of existing findings, not new IDs. Source-text defects above are checked
against the files; proposed behavior below is not yet an applied contract.

### Lane A guide — complete each parent before its dependent drafting unit

**1. Capture scope first (R185/R186).** Draft the decision's scope correction and replace the
plan's R185 prerequisite: “V1 does not add authentication, account succession or multi-account
management through this packet. Existing identity-assurance limitations remain disclosed.”
Keep later access-control work with its existing SEC-03/S6 owner and multi-account work with
PBL-04; do not invent another feature or call those controls delivered. Retain R183's separate
G-02a/SEC-01a Line-control mapping. Pass condition: the next draft neither demands new V1
authentication nor asserts that a name, role label or sole account is authenticated proof.

**2. Draft the outcome contract (R183; depends on 1).** Use this minimal proposed behavior:

| Situation assessed | Proposed behavior | Success check |
|---|---|---|
| Required reviewer/operation evidence is missing before bundle readiness | Record missing items; keep `Drafted`; no ready event, final approval or publication effect | A missing required act cannot fabricate a complete bundle or `Reviewed` state |
| Bundle is sealed but evidence needed for final approval is incomplete | Record deficiencies; retain `Reviewed`; request remedy | Ready does not mean approved; no `Reviewed → Approved` transition |
| Ready evidence produces a negative human editorial judgment | Record the negative judgment and reasons; prohibit approval/publication; map any return/rejection transition explicitly to the owning behavior | Negative judgment is not treated as missing evidence or silently converted into approval |
| Ready evidence supports positive human editorial judgment | `T5-FINAL` records the human result and performs `Reviewed → Approved`; `EDITORIAL_DISPOSITION` records that same act's outcome | One human approval, one effective transition; no second approval hidden behind the disposition name |

Mandatory assessment must be able to report incompleteness; it does not make the ready join or
successful T5 completion unconditional. Preserve T1–T5 evidence requirements on the shortest
Reporter → Desk Editor route. No future T6 assurance requirement enters this V1 path.
**Still a bounded proposal:** the negative branch's exact return/rejection destination must be
selected in the draft for Judge review; do not manufacture a new status or mark it decided.

**3. Map actors and approval evidence (R183; depends on 2).** Replace the blank-R inference:
“Check the applicable accountable actor and the actual approval evidence separately. An A-only
Final Sign-Off may approve previously completed R-work; it does not require an invented R on
the sign-off itself.” Cite each source RACI row and its in-app mapping. Reviewer acts retain
their judgments and agent attempt attribution; the join only establishes readiness; the final
human judgment remains distinct. Pass checks: an A-only sign-off with valid prior-work evidence
is not rejected merely for blank R; an assigned A with no approval record is not treated as
approved. Agent `executor_principal_key` is not the human account identifier.

**4. Define remedy and replay (R183; depends on 2–3).** Replace lifetime “one judgment” with:
“Each assessment refers to the evidence it assessed and has one recorded outcome. A retry of
the same completed act creates no additional approval or publication effect. Remedy can create
a new assessment linked to the earlier assessment and changed evidence; prior judgments remain
append-only.” Use existing logical evidence/attempt references, not a new schema in this plan.
Pass checks: incomplete → remedy → reassessment can succeed; replay cannot approve twice;
an old approval cannot authorize a changed evidence set. Reopening an already approved article
must reference the existing return/amendment contract, not silently reset the workflow.

**5. Supply literal owning text and occurrence reconciliation (R183/R186; depends on 1–4).**
Complete the existing occurrence ledger, with one row per affected clause: source location →
current/retained/superseded disposition → exact proposed replacement → owning tier → criterion.
Start with Product FR-04a/FR-05a and affected FR-06/FR-07/FR-09 criteria; then behavior owners
FN-GATES §11.1 and FN-PUBLICATION §§4–5, RACI §3.1 and the route crosswalk. Resolve actual
anchors rather than creating duplicate requirements. Include Line-control and blind-review
mapping explicitly; withdrawing R185 does not erase these controls. Correct R186's criterion
mapping without retiring source-accuracy/readiness/lifecycle tests as “succession.”

Reconcile storyboard, story panel, UML and data-flow views to those clauses. Historical journal
diagrams remain dated history with current-source pointers, not mutable requirement owners.
UI display must distinguish reviewer judgments, bundle readiness and human final disposition.
Use the existing UX ownership mapping; do not create an unapproved UX artifact. Register owns
the scope/decision record; declare Build Spec, Inventory and other tier impacts individually
(including unaffected where true). Frozen PRD/Charter remain untouched. Encyclopedia entries
01/04/05 are review candidates, not presumed corrected or published. This is the write-set draft,
not authorization to edit those files.

**6. Hand back for approval, then verify after authorized application.** Submit the complete
literal packet and the bounded negative-path proposal. After authorized source changes settle,
Lane A synchronizes Graphify, preserving its curated layer; Lane B rechecks the applied revision,
criteria and occurrence ledger. No draft-level Approve grants AUTH-DOC, build or lane transition.

### Drift and evidence boundary

At this review HEAD is `3d50699ec5cf441dde995caf6bcfdcb5e804e35c`; Graphify's
`lastAnalyzedHead` is `129efab595932705d7d0176b2e36be41509d6232`: **DRIFTED**, despite
`stale:false`. The working handoff also contains uncommitted review text. No semantic currency
claim is made from this graph. External Encyclopedia currency is **UNVERIFIED**; the local sync
map is not proof of external publication. Rebuild and external verification remain later steps.
Only this handoff receives the review draft; governing specs, graph, code and lane state remain
unchanged. No commit or push is authorized by this review; unrelated package-lock is untouched.

### Round 31 approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R185 scope clarification / proposed decision | Remove the newly proposed authentication requirement from the V1 drafting prerequisite list; do not claim authentication exists | Lane A scope-record and plan correction |
| **Approve-with-conditions** | R183 Product/behavior/RACI packet | Step-by-step draft provided; negative destination and literal owning text remain to be completed | Units 2–5, then Judge review |
| **Reject** | RACI/readiness/judgment/replay conflations | Blank R, complete bundle, final approval and repeated assessment cannot substitute for one another | Apply the distinct acceptance checks in units 2–4 |
| **Defer** | Applied/Verified closure, Graphify/Encyclopedia and implementation | This is a handoff draft, not governing application or build permission | Authorized propagation, synchronization and independent review |

## Round 32 — R183 negative-path scope: manual whole-article re-trigger in V1

### Judge clarification received; correction to Round 31

The user clarified that the simplest V1 fallback after a negative judgment is for the user to
manually trigger analysis of the entire article again, potentially on another day when the
analysis may differ. Automated return/rejection routing is beyond V1 and is to enter the
existing feature-backlog workflow. This records the clarification as input for Lane A's durable
scope decision; it does not apply governing text, create a feature ID or authorize a build.

**The precise automated return/rejection destination is no longer a V1 decision blocker.**
This supersedes Round 31 unit 2's request to select that destination, unit 4's proposed
in-place remedy/reassessment feature as a V1 prerequisite, and unit 6's corresponding approval
dependency. It does not remove the need to record the negative result or prevent publication
without positive approval. R185 remains outside the proposed V1 authentication scope as recorded
in Round 31. No additional finding ID is needed: continue R183/R186.

### Parent-first Lane A follow-up

| Order | Owner / existing record | Draft action | Success criterion |
|---|---|---|---|
| 1 | Lane A — proposed decision and corrective plan | Record the V1 manual fallback and withdraw the automatic negative-route selection prerequisite | V1 readiness no longer waits for an automated return/rejection destination |
| 2 | Lane A — R183 Product/behavior draft | Use the proposed text below; distinguish a fresh user-triggered whole-article analysis from resuming the earlier failed run | Negative result is recorded; no approval/publication effect; a later manual trigger starts the full applicable editorial analysis |
| 3 | Lane A — existing feature intake, Modular_PRD §2.5.2 | Deduplicate the future capability for automated negative-result return/remedy/reassessment. Reuse an existing capability identity if it fits; otherwise allocate one through the normal owning-tier process. Link this R183 source request, record beyond-V1 scope and refinement status; do not invent rank, readiness or authorization | Future work has one canonical feature identity and a named follow-up tier; it is not lost at V1 close or treated as a V1 blocker |
| 4 | Lane A — R186/occurrence ledger and downstream views | Replace automatic-resume/negative-destination prerequisites in the draft and criteria; preserve current evidence, Line controls and duplicate-effect protection. Reconcile UI/storyboard/data-flow references and declare tier impacts | No view promises an automatic recovery feature in V1; historical journal remains provenance; source claims are not overwritten |
| 5 | Lane A application; Lane B independent review | After the bounded documentation packet is authorized and applied, synchronize Graphify and verify the changed criteria and feature-intake link | Applied/Verified is supported by source and independent evidence, not this clarification alone |

### Proposed literal behavior for the owning tier

“For V1, a negative editorial judgment records its result and reasons and does not authorize
publication. The application does not automatically return, repair, resume or schedule a new
analysis as a consequence of that result. The user may manually trigger the entire article's
editorial analysis again. That later analysis uses its own evidence and may reach a different
judgment; it does not overwrite the earlier result or inherit approval from it.”

The fresh analysis still follows applicable T1–T5 requirements. No new rejection state, scheduler,
partial-resume engine or assurance/T6 feature is implied. “Manual” means the user initiates the
existing editorial flow, not that every analysis task becomes manual. Preserve protection against
duplicate approval/publication effects within each attempt; that safety rule is not the deferred
automated reassessment feature. Existing return/amendment requirements are not silently deleted:
Lane A must identify affected clauses and propose their explicit scope disposition.

### Evidence and closure boundary

Checked against the existing handoff procedure (`docs/handoff/README.md`, D-100/D-101) and
Product capability-intake separation (`Modular_PRD.md` §2.5.1–§2.5.2): handoff receipt/lifecycle,
feature identity, version exclusion and build authorization are different records. No parallel
backlog or journal-based authority is proposed. This pass changes this handoff only; no governed
source, graph, code, commit, push or lane-state change. Graph currency remains unverified for
the new working-tree text and the previously observed HEAD mismatch remains outstanding.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R183 V1 scope clarification | Manual whole-article re-trigger replaces the automated negative-route prerequisite | Lane A durable scope and behavior drafting |
| **Approve-with-conditions** | Future feature intake | Beyond V1; identity/rank not invented here | Lane A deduplication and canonical backlog capture |
| **Reject** | V1 blocker requiring automatic return/rejection destination | Superseded by this clarification | Remove from corrective-plan readiness criteria |
| **Defer** | Governing application, verification and implementation | Handoff draft only | Authorized propagation, synchronization and independent review |

## Round 33 — Draft 6 review: what R183 has drafted, and what Lane A must finish

### Scope and evidence

**Restated request:** independently review proposed D-189 Draft 6 against the source documents,
explain R183's partial status, and give Lane A a deduplicated parent-first completion guide.
Planning only; the pasted push statement is historical, not permission for another push.

Reviewed local HEAD `94c9dff8c532ef42c9d59d433cd7c3bfa8d53a00`: that commit changes only this
handoff and `V1-B071-CORRECTIVE-PLAN.md`. Its §15 is proposed text, not an applied D-189
Register decision. No remote verification is claimed in this review. Existing R183/R186 own
the behavior/criterion corrections below; no new defect or parallel tracker is created.

### What “partially open” means now

| Item | Done at draft level | Still missing |
|---|---|---|
| R183 judgment and RACI semantics | §15.0–§15.3 withdraw the blank-R inference, retain reviewer judgments, distinguish the non-judgment join and human final act, and keep pre-join incompleteness Drafted | Literal T5-FINAL RACI row and gate/Line mapping; exact replacements in owning requirements and behavior |
| R183 negative outcome | §15.5 records negative judgment/reasons, no publication, and manual whole-article re-trigger; automatic recovery is beyond V1 | Propagation text and tests, not another choice of automatic rejection destination |
| R183 replay | §15.4 replaces lifetime one-judgment semantics with per-assessment outcome and non-duplicating replay | Correct SC84's outcome/publication assumptions; explicitly scope new V1 assessment to the manual whole-article trigger |
| R185 | §15.1 incorporates withdrawal of the proposed V1 authentication prerequisite, without claiming authentication exists | Carry that scope into the authorized owning records; preserve the unrelated SEC-01a Line-control mapping |
| Future capability | §15.6 proposes PBL-10, unranked/identity-only; existing Product capability rows do not cover it | Actual allocation in Modular_PRD §2.5.2 through Lane A's owning-tier process; no PBL-10 row exists there yet |
| R183 propagation and closure | Required target documents are named; application is expressly refused | Occurrence ledger, literal text, view reconciliation, authorized application, synchronization and independent verification |

**Drafted is not Applied; committed draft is not applied requirement; Applied is not Verified.**
R185 and the automatic negative-path decision must not be reinstated as V1 prerequisites.

### Corrections needed before extending the draft

| Existing finding | Verified defect / failure condition | Smallest corrective draft |
|---|---|---|
| R183: retained control | §15.1 retains G-02a/SEC-01a, but §15.10's write-set subtracts SEC-01a with SEC-03a. Executing that list omits a retained Line boundary still naming target T6 in Modular_PRD | Keep SEC-01a's editorial Line/gate remapping in the write-set; exclude only the newly proposed V1 authentication work. Name the unaffected later SEC-03/S6 scope separately |
| R186: SC84 | The test's Given permits any completed T5-FINAL, but Then requires one approval and one publication effect. Negative outcomes require neither; approval alone does not prove publication (Product AC-14–AC-16; FN-PUBLICATION §§4–5) | Test replay of positive and negative results separately. Positive: no second approval transition; negative: zero approval/publication effects. In either case replay adds no publication effect; do not require that publication has already occurred |
| R183: assessment boundary | §15.4's “remedy may create a new assessment” is broader than §15.5's manual whole-article fallback | Qualify the V1 new-assessment path as a user-triggered full analysis, not automated or partial resume. Keep existing explicitly human-initiated FR-06 behavior and target-held AC-08a separately referenced |
| R183: capability lifecycle | §15.6 says an identity “is allocated” although §15.9 requires confirmation and the Product table contains no PBL-10 | Say “proposed identity, not yet allocated in the owning tier.” Add its literal proposed row to the same packet; do not imply rank, refinement or build authorization |

Also correct §15.2's “three distinct judgment-bearing facts”: these are three **steps**, of which
reviewer acts and the human final act carry judgments; the join explicitly does not. This is a
wording correction under R183, not another requirement. These are conditional, testable failure
paths, not a claim that every implementation will inevitably fail.

### Lane A completion guide — parent first, one existing packet

1. **Stabilize the parent contract.** Apply the draft corrections above to §15. Keep the Judge's
   R185 and manual-retrigger scope narrowings. Do not reopen the already answered fallback.
   Success: no retained control is excluded from the proposed write-set; replay tests respect
   both positive and negative outcomes and distinguish Approved from Published.
2. **Complete the existing occurrence ledger (R145–R168), not another backlog.** Each affected
   clause needs its source anchor, retained/replaced/historical disposition, exact proposed text,
   owning document, dependent criterion and application evidence slot. The range and “ledger”
   are the same work, not two tasks. Include the T5-FINAL RACI row, agent/human attribution,
   blind-review ordering and Line values; removing their separate checklist row never completes
   them. Success: every applicable occurrence has an explicit disposition, no unresolved owner.
3. **Write literal owning-tier replacements.** Product stories/FRs/ACs and G-02a/SEC-01a first;
   FN-GATES §11.1 and FN-PUBLICATION §§4–5 (and their affected target-held clauses) follow;
   reconcile RACI §3.1 and crosswalk §§2–4. Link the proposed PBL-10 row to its intake request.
   Existing human return/escalation and target-held scoped reruns retain their distinct triggers;
   preserving behavior does not mean retaining an obsolete editorial T6 label. No broad deletion
   of FR-06, AC-08a, AC-09/10 or T8/T8a/T9. Success: the packet contains text to apply, not only
   section names or instructions to invent text during execution.
4. **Reconcile representations against that text.** Build Spec still describes the old join as
   T5 completion followed by T6; the proposed human-final completion must be mapped explicitly.
   The historical storyboard's A5 human review/A6 agent approval and its Mermaid panels are
   historical, not evidence of the new contract. Use current-source pointers rather than rewriting
   history. Cross-reference current Product story panels, state/data-flow and UX ownership;
   show reviewer judgment → readiness → human disposition → separate publication execution.
   Declare Register/Build Spec/Inventory and other tier impacts, including unaffected where true.
   Frozen PRD/Charter/migration remain untouched. External Encyclopedia Entries 01/04/05 require
   impact review; the local sync map does not prove their content or publication is current.
5. **Offer the complete packet for bounded authorization.** PBL-10's identity confirmation is
   documentation intake, not a demand that the future feature become refinement-ready. D-188
   permits absence from a version exclusion list without implying inclusion: propose any NG
   link disposition under that rule, but do not elevate “symmetry” into another V1 behavior
   blocker. A finished draft still grants no AUTH-DOC, implementation or lane transition.
6. **After authorized application, synchronize and independently verify.** Lane A applies only
   the approved write-set, settles the source revision, rebuilds Graphify and preserves/reconciles
   curated fragments. Lane B checks that revision, ledger and criteria; Lane C has no CI change
   in this packet. The handoff alone cannot close the source defects.

### Drift and review limits

Graphify records analyzed HEAD `129efab595932705d7d0176b2e36be41509d6232`, not current
`94c9dff8c532ef42c9d59d433cd7c3bfa8d53a00`: **DRIFTED**, despite `stale:false`.
No current semantic claim is taken from the stale graph. External Encyclopedia is **UNVERIFIED**;
its local mapping and the historical storyboard were inspected, not represented as current UX.
Only this handoff is amended in this pass. No governed-spec edit, graph rebuild, code, commit,
push or lane transition; unrelated package-lock is untouched.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Draft 6 R183/R185 scope corrections | Earlier category errors corrected at draft level; manual fallback retained | Preserve in the completed literal packet |
| **Approve-with-conditions** | R183/R186 behavior and criteria | SEC-01a write-set, replay expectations and assessment-boundary wording need correction | Guide steps 1–3 |
| **Defer** | Product PBL-10 allocation | Proposed, not allocated; no future readiness implied | Owning-tier intake in the documentation packet |
| **Reject** | R183 application/verification readiness | Ledger and literal replacements are missing | Complete packet, bounded authorization, independent verification |
| **Defer** | Graphify/Encyclopedia and implementation | Drifted/unverified; build holds unchanged | Settled-source synchronization and separate authorization |

## Round 34 — R183: the additional details Lane A must supply

**Restated request:** unpack Round 33's “still missing” into concrete deliverables, distinguish
drafting work from missing Judge input, and use this existing handoff rather than raise another
item. Scope remains R183/R186, with R185's V1 withdrawal and Round 32's manual fallback retained.
This is a detail guide for Round 33, not a new decision or a second completion ledger.

### Missing details, in dependency order

| Parent-first unit | Exactly what is missing | Where Lane A drafts it | What proves the draft is complete | More Judge detail needed now? |
|---|---|---|---|---|
| 1. Final-act and control mapping | A literal row naming task, human executor, R, A, Line, input evidence, result and state effect; plus the successor-identity comparisons and blind-review sequence after the editorial T6 rename | Proposed decision/plan, then RACI §3.1, Product G-02a/SEC-01a and FN-GATES §11.1 replacement blocks | Every event has a named purpose and effect; the join is not final judgment; retained controls point to the proposed human act rather than an absent V1 T6 | No new business choice is shown by the current sources; draft the existing human R=A mapping below for review |
| 2. Outcome and replay checks | Exact positive, negative, pre-join incomplete, post-join incomplete and manual-retrigger expectations; SC84 must distinguish approval effects from publication effects | Existing R183/R186 criteria mapping and proposed Product/Fn_Spec acceptance text | Positive replay adds no approval; negative replay produces no approval/publication; neither replay fabricates publication; manual new analysis preserves prior results without inheriting approval | No; these follow the clarified outcomes and existing publication contract |
| 3. Occurrence ledger | For each applicable R145–R168 occurrence: exact source clause, its disposition, replacement text or replacement-block link, owner and test; retained/historical clauses need explicit reasons | The existing Part 2 ledger in the corrective packet | A reviewer can trace each occurrence to one replacement or a justified retained/historical disposition; no “update references” placeholder | No; this is source reconciliation, not another scope decision |
| 4. Literal owning text | Complete replacement paragraphs/rows, not a list of filenames, covering Product stories/FRs/ACs, behavior, RACI/crosswalk and Build Spec stage completion | The corresponding proposed edit blocks in the same plan; authoritative files stay untouched until application is authorized | An authorized editor could apply the text without inventing behavior; each clause has an existing owner and a test | No additional input to start; cite and escalate only a specific contradiction not settled by the governing record |
| 5. View reconciliation | A source-to-panel map identifying which story panel, sequence/UML message, state arrow, data-flow output or UI label changes, and which historical panels remain history | Existing occurrence ledger and affected view proposals; UX details keep their existing SPECS/UX owner | Every view traces to the same outcome contract; readiness, human disposition and publication are separate; no editorial approval mislabeled future T6 assurance | No new UI feature is requested; do not require new design decisions to perform this mapping |
| 6. Future capability intake | Literal proposed PBL-10 row, source-request link, beyond-V1 disposition and the fact it is not yet allocated; preserve unranked/identity-only status | Product §2.5.2 proposed block, through Lane A's existing intake process | One canonical identity after authorized allocation; no duplicate tracker, future refinement requirement or automatic promotion at V1 closure | No need to choose future behavior/rank now; any optional NG link is a documentation disposition, not a V1 behavior blocker |

### Concrete draft input for unit 1 — not a new approval

The current RACI §3.1 already assigns the human target T6 act **R = Acting Chief Editor,
A = Acting Chief Editor, Line 2**. Draft 5 §14.5 already proposes moving the Line-classified act
to T5-FINAL. Lane A can therefore offer this mapped row, rather than ask the Judge to invent R/A:

| Proposed task | R | A | Line | Result / state effect |
|---|---|---|---|---|
| T5-FINAL — final human editorial assessment | The sole Chief Editor human user | Same human in the accountable context; no additional account/role-management feature | 2 | Positive: Reviewed → Approved; negative: record reasons without approval, retain Reviewed per Draft 6; disposition records this same human act |

Use the catalog's canonical human label when producing the literal target row. Do not turn the
accountability label into a new V1 authentication or succession feature. Map the retained
successor comparisons to `R(T4) != R(each required T5-REVIEW act)` and
`R(each required T5-REVIEW act) != R(T5-FINAL)` in the proposed contract. The deterministic join
has no R/A or judgment; it owns Drafted → Reviewed, not the human final disposition. Name the
existing preliminary-assessment, reveal and final-decision order explicitly under their proposed
labels. Record pre-join missing-evidence assessment separately from ready final approval;
mandatory assessment must not fabricate readiness. These are mapping proposals, not claims that
identity authentication or the controls have been implemented.

### Concrete occurrence example — unit 3

Product `AC-14a` currently says Delivery consumes an immutable **T6 disposition**. Its ledger row
must say whether that is the editorial disposition being renamed, cite the proposed T5-FINAL /
EDITORIAL_DISPOSITION contract, and supply the exact replacement while preserving Delivery's
refusal to mutate judgment/reasons/evidence. The matching behavior owner is FN-PUBLICATION's
target Delivery rule (§11), not merely its general §§4–5. The test proves Delivery consumes the
approved disposition without changing it. This example belongs in the existing ledger; it does
not allocate a new AC or duplicate the rule into the journal.

### Representation and evidence boundary

Checked Product §§4–6/9 and the historical storyboard's A5/A6 panels against the current plan.
The Product document's stories and requirements are not interchangeable with the journal's
storyboard/UML history. Lane A must supply current-source links and proposed view changes, not
rewrite historical journal text as today's authority. Data-flow mapping must identify the article/
assessment, reviewer evidence, readiness result, human disposition and publication result at the
logical level; this request does not authorize new database fields or implementation design.

Encyclopedia Entries 01/04/05 remain external impact-review candidates. A readable copy or access
is needed **for their actual verification**, not for Lane A to finish this source draft. The local
sync ledger expressly treats stale entries as a review queue, not proof of error or an automatic
build blocker. Graphify remains drifted: analyzed `129efab` versus HEAD `94c9dff`; no fresh semantic
claim is made from it. Authorized application, graph synchronization and independent verification
are later evidence steps, not “additional business details” the Judge must supply now.

**What the Judge needs next:** the completed literal packet for approval/rejection, not another
open-ended question about already clarified scope. If drafting exposes a genuine undecided
conflict, Lane A should show the exact competing clauses, the affected behavior and one bounded
question. No such new business decision is established by this drill-down.

This pass appends only this detail guide. Round 33 remains the findings record; governing sources,
graph, code and lane state are unchanged. No commit/push; unrelated package-lock is untouched.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R183 drafting sequence | Missing deliverables and their source inputs are explicit | Lane A completes units 1–6 in the existing packet |
| **Approve-with-conditions** | Proposed T5-FINAL mapping | Existing human R=A / Line 2 mapping supplies the draft basis | Literal control/behavior reconciliation, then Judge review |
| **Reject** | Claim that more general Judge detail is required before drafting | Current gaps are predominantly missing source text and traceability | Escalate only a specific unresolved contradiction |
| **Defer** | Application, external-view verification and implementation | Not delivered or authorized by this guide | Bounded approval, application and independent evidence |

## Round 35 — Lane A: the literal packet Round 34 asked for (`docs/v1/V1-B071-CORRECTIVE-PLAN.md` §16)

**Restated request:** complete Round 34's units 1–6 as literal draft text, organized parent-first,
with a docs/graph drift check, terminology normalized against the existing corpus, and a concise
approve/reject close. Scope stays `R183`/`R186`; `R185`'s V1 withdrawal and Round 32's manual
fallback are unchanged. Planning only — no commit is implied by this review round itself.

### What was drafted, and where

`V1-B071-CORRECTIVE-PLAN.md` §16, appended after §15 (Draft 6), all six units:

| Unit | Result | Location |
|---|---|---|
| 1. Final-act/control mapping | **Drafted in full.** The target order's human final act is written as `T6` in eight live clauses across `raci-involvement-matrix.md`, `Modular_PRD.md`, `FN-GATES-01-05.md` and `FN-PUBLICATION-09-10-13.md` — all predate this session and all still say `T6`. Literal current-text→proposed-text blocks for all eight, renaming the transition label to `T5-FINAL` (completes `T5`; not a sixth gate). `EG5_*` event identifiers deliberately left unrenamed and flagged for the Judge, not decided unilaterally | §16.1 |
| 2. Outcome/replay checks | **Drafted.** §15.7's `T5-V1-SC81`–`SC85` ported into `Modular_PRD.md` §6 as new, additive `AC-08b`–`AC-08f` — the "existing criteria, no owning-tier home" gap Round 34 named | §16.2 |
| 3. Occurrence ledger | **Drafted — all 24 of `B071-R145`–`R168`, individually dispositioned**, not summarized: 6 resolved outright, 8 resolved by business decision with literal text not yet re-verified, 1 resolved out-of-packet, 1 superseded, 2 closed as drafting discipline, 1 withdrawn, and 5 carrying a genuine open residual (`R147`, part of `R148`, `R152`, `R159`, `R160`) — named, not improvised | §16.3 |
| 4. Literal owning text | **Drafted where grounded, honestly incomplete where not.** Crosswalk checked in full — no `T6` occurrence exists there, no edit proposed. Build Spec's S2 target DoD gets the same rename as unit 1. The eight business-decision findings are **not** re-drafted here — re-deriving Rounds 20–24 risks the exact duplication `D-54` warns against, and none of them blocks units 1/2/6 | §16.4 |
| 5. View reconciliation | **Drafted as a pointer table, no journal rewrite.** Storyboard Panels A5/A6 depict the *pre-target-order* build (human at T5, agent at T6) — historical twice over relative to `T5-FINAL`. Data-flow stated at the logical level Round 34 permitted: article → reviewer evidence → readiness join → human disposition → publication result | §16.5 |
| 6. Future capability | **Placement drafted**; the row itself was already complete at §15.6. The `NG-*` symmetry question stays flagged for the Judge, not decided | §16.6 |

### Corrections applied to my own draft before this was recorded

While assembling §16.3 I mis-summed the ledger on the first pass — wrote "6 `Resolved (business
decision)`" in prose while the table itself listed eight, and claimed "4 genuinely `Open`" against
a table that actually carries five open residuals once `R148`'s partial disposition is counted.
Caught and corrected before this round was written, not after — `docs/v1/V1-B071-CORRECTIVE-PLAN.md`
§16.3's summary now states 6+8+1+1+2+1+1+2+2 = 24 explicitly, matching the row-by-row table rather
than restating a remembered count. Recorded here rather than silently fixed, per this corpus's own
rule that a caught instance of the count-drift defect is evidence the check works, not something to
delete from the record.

### Docs/graph drift — checked this round, not carried forward from Round 33

`bun run check`: **16 of 17 PASS**, one `FAIL` — `docs-drift`: analyzed `129efab595932705d7d0176b2e36be41509d6232`
versus HEAD `94c9dff8c532ef42c9d59d433cd7c3bfa8d53a00`. Independently confirmed against
`.graphify/branch.json` (`lastAnalyzedHead` vs. `git rev-parse HEAD`) before running the check, not
taken from the check alone. **11 commits touched `docs/` since the graph was last analyzed** — the
entire D-189 draft-1-through-6 series. **Graphify requires a resync**: `npx graphify hook-rebuild`,
then re-merge `docs/graph-fragments/` if the curated node count drops (`G51`). Not run in this pass —
rebuilding now would still go stale the moment this round's own commit lands, and `docs/handoff/README.md`
§"Committing and pushing your own entry" step 6 places the resync with **the current `Active` Lane A,
before the next consuming approval or phase-closure claim** — i.e., after this packet is authorized
and applied, not before a draft is offered. No `docs-drift` claim in this round is taken from a stale
query; §16.8 states this same finding independently.

### Terminology normalized against graphify's existing extraction, not re-invented

`T5-FINAL` is the label Draft 6 (§15.2) already introduced and Round 34 already used; §16 does not
coin a new term, it propagates that one to the four owning-tier documents that had not yet received
it. `Line 2`, `R`/`A`, `EG5`, `T5_review_bundle_sealed` and the other identifiers in §16.1–§16.2 are
copied verbatim from the current text of `raci-involvement-matrix.md`, `FN-GATES-01-05.md` and
`Modular_PRD.md` — none renamed, abbreviated, or re-cased in transit. No collision with the graph's
extracted layer is claimed, since the graph is stale (above) and cannot be queried to confirm that;
this is a same-corpus vocabulary check, not a graph query.

### What this round does not do

No commit, push, code, migration, or lane transition. No governed-tier file is edited — `raci-involvement-matrix.md`,
`Modular_PRD.md`, `FN-GATES-01-05.md`, `FN-PUBLICATION-09-10-13.md` and `V1-BUILD-SPEC.md` are all
**quoted**, none **edited**; §16's blocks are proposed text living in the corrective plan, same
posture as §14/§15. `R147`'s higher-precedence sweep (Addendum/Blueprint/Business Case) and `R152`'s
Graphify fragment reservation are named as genuinely open, not drafted here. External Encyclopedia
Entries 01 and 04 are named as plausibly touched by the `T5-FINAL` rename — not verified; that
remains a distinct, later act per Round 34 and `docs/ENCYCLOPEDIA-SYNC.md`'s own process.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Units 1, 2, 6 (`T5-FINAL` rename, its acceptance criteria, `PBL-10` placement) | Literal blocks complete, internally consistent, independent of the open items below | Judge review, then bounded authorization to apply |
| **Approve-with-conditions** | Unit 3's occurrence ledger | All 24 findings dispositioned; 8 rest on business decisions this pass did not re-verify at the literal-text level | Verify/draft the eight before treating them as application-ready |
| **Defer** | `R147` (higher-precedence sources), `R152` (Graphify fragment), `R159`/`R160` (UI progress axis, report mapping) | Genuinely open, named rather than improvised | Separate drafting pass; `R152` specifically sequences after application, per `docs/handoff/README.md` |
| **Reject** | Treating §16 as already applied | Nothing above is committed to a governed tier; `docs/v1/V1-B071-CORRECTIVE-PLAN.md` line 2606's disclaimer applies equally to §16 | Judge authorizes application as a separate, bounded act (`D-183`) |

## Round 36 — Lane A: corrections applied from independent review of Round 35

**Restated request:** treat Round 35 as useful but not application-ready; close the seven confirmed
gaps and two tracking points, parent-first; resync Graphify now rather than deferring it; normalize
ledger vocabulary against the existing corpus; ask before proceeding if anything is genuinely
unclear; end with a concise approve/reject close. Scope stays `R145`–`R168`/`R183`/`R186`; nothing
here reopens `R169`–`R181` or `R180`/`R181`'s `PBL-04` attachment.

### Verified against the actual files before accepting or rejecting anything

Same discipline as Round 35 itself applied to the pasted review: every claim below was checked
against current file content, not accepted on the reviewer's word. Two were found to be more nuanced
than either the review or my own Round 35 stated; the rest were confirmed exactly as raised.

| # | Claim | Verified | Disposition |
|---|---|---|---|
| 1 | `R147` gates units 1/2's application | **Partially — a genuine two-reading disagreement**, not a factual error either way | §16.7 states both readings; Judge decides, not drafted over |
| 2 | `US-05a`, `G-05a`, `SEC-03a` still say `T6`, missed by unit 1 | **Confirmed**, read at `Modular_PRD.md` lines 480, 501, 699 | Added to §16.1 |
| 3 | §16.1 has ellipses; §16.2 gives summaries; ACs live in §9 not §6 | **Confirmed on all three** — `## 9. Acceptance Criteria` vs `## 6. Technical Requirements`, verified by reading the file's own section headers | §16.1's rows now quote full current text; §16.2 rewritten with complete Given/When/Then rows at the corrected location |
| 4 | `SC84` overpromises a publication effect on replay | **Confirmed** — `FN-PUBLICATION-09-10-13.md` `AC-15` already documents per-target partial success/failure independent of approval, so `SC84`'s "exactly one... publication effect" cannot be an honest `T5-FINAL` claim | Corrected wording drafted at `AC-08e`; `§15.7` not silently rewritten |
| 5 | `Resolved` isn't `docs/handoff/README.md`'s vocabulary; `R150` cites a block list, not clauses; §16.4's range wrongly includes `R157` | **Confirmed on all three** — README's table is `Open`/`Answered`/`Applied`/`Verified`/`Deferred`/`Withdrawn`/`Superseded`; my own §16.3 summary already excluded `R157` from the eight while §16.4's prose range included it | Ledger vocabulary remapped; `R150`'s four-row clause table added; range corrected |
| 6 | `R152` conflates planning with execution | **Confirmed**, and actionable | Semantic contract (fragment path, node/edge assertions) drafted at §16.4; only the write+rebuild stays deferred |
| 7 | Pointer table isn't complete UML/report reconciliation | **Already flagged** (`R159`/`R160` were `Retained — Open` in Round 35's own ledger) but stated too implicitly | §16.5 now says so explicitly, with Follow-up-Tier named |
| — | `B-071` remains `Open`; ledger status doesn't override it | **Confirmed and was already true** — this handoff's header (line 8) has read `Status: Open` since before this session; Round 35 never touched it | §16.3's intro now states this explicitly rather than leaving it implicit |
| — | Resync before the next consuming approval, not after application | **Accepted** — `docs/handoff/README.md`'s own wording places the resync "before the next consuming approval," and a Judge review of Round 35 is one | Run this round; §16.8 |

### What was fixed

All ten items in the table above are corrected in `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §16.1–§16.9,
listed with before/after in **§16.9's own transparency table** — not restated a third time here.
Two corrections are worth flagging as judgment calls rather than pure fixes: **`R147`'s gating
question is left as two named readings for the Judge** (§16.7), not resolved unilaterally in either
direction, since both readings are internally consistent and the disagreement is about policy, not
fact. **`R162`'s classification was corrected from "Resolved, out-of-packet" to "Open, tracked
elsewhere"** — `B-072` itself carries `Status: Open`, so calling `R162` resolved overstated a
different open item's status.

### Graphify — resynced this round

`npx graphify hook-rebuild` run against `0c984a4` (Round 35's commit). `.graphify/branch.json`:
`lastAnalyzedHead = 0c984a4`, matching `HEAD` at rebuild time. 1419 nodes, 2766 edges, 97
communities; curated layer backed up automatically (6 files) and spot-checked via `graphify summary`
— named concept nodes survived. `graphify query "T5-FINAL"` confirmed **no matching node exists yet**
in the synced graph, grounding §16.4's `R152` contract in an actual query result rather than an
assumption. `bun run check`: **17/17 — first fully green run in this thread.** Expected to show a
one-commit lag again once this round's own commit lands; that is normal, not a regression.

### Terminology

No new vocabulary introduced. The one real terminology defect this round found — the ledger's
`Resolved`/`Retained` words not matching `docs/handoff/README.md`'s controlled set — is corrected in
§16.3, mapped onto `Applied`/`Deferred`/`Superseded`/`Open` where those words' exact meanings apply,
with two explicitly-labeled non-colliding terms (`Drafted, pending application`;
`Business-decided; text not drafted`) for the two states that vocabulary has no word for.

### What this round does not do

No commit, push, code, or lane transition beyond the Graphify rebuild (which writes only to
gitignored `.graphify/`, not tracked content). No governed-tier file is edited — `raci-involvement-matrix.md`,
`Modular_PRD.md`, `FN-GATES-01-05.md`, `FN-PUBLICATION-09-10-13.md`, `V1-BUILD-SPEC.md` remain
quoted, not edited. `R147`'s Addendum/Blueprint/Business Case texts are still not literally
corrected — only the governing-mechanism explanation is drafted (§16.4); if the Judge selects
Reading B (§16.7), that literal correction remains separate, undrafted work.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | The ten corrections (§16.9) | Verified against source, applied to the draft, transparently logged | Judge review of the corrected draft |
| **Approve-with-conditions** | Units 1/2's application readiness | Two named readings exist (§16.7); both internally consistent | Judge selects Reading A or B before any application offer |
| **Approve-with-conditions** | `R152`'s semantic contract | Drafted (fragment path, node/edge assertions); execution correctly still waits | Write `frag122.json` and rebuild at the application boundary |
| **Defer** | `R147`'s literal Addendum/Blueprint/Business Case text (if Reading B governs), `R148`'s uncovered docs, `R159`, `R160` | Named, not drafted | Separate passes, tiers as stated in §16.3 |
| **Reject** | Treating this round as closing `B-071` | Header `Status: Open` is unaffected by this or any prior round's internal ledger | Terminal closure needs independent verification per `docs/handoff/README.md`, not a Lane A self-assessment |

## Round 37 — Lane A: `R147` drafted per the Judge's Reading B ruling

**Restated request:** the Judge answered Round 36's clarifying question directly — `R147` gates
units 1/2's application (Reading B), not the packet's own original Reading A. Draft the literal
correction, don't just leave it as a stated policy choice.

### What was drafted

Read the actual `T6` definitions in all three higher-precedence documents (`v1-build-readiness-addendum.md`
line 165, `blueprint.md` line 268, `business-case.md` line 107) before drafting anything — all three
consistently describe the **current** order (human at `T5`, Chief Journalist agent at `T6`), which
this packet does not change and which is itself not build-authorized (`D-171`). Rewriting their text
would have misdescribed the current order, so the correction is an **annotation**, not a rewrite —
current rows untouched, one dated disclosure block added per document, pointing to the target order
and where its full text lives. Recorded as **Unit 7** in `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §16.5a,
inserted as a new parent of Unit 1 in the task tree (§16.0).

**Downstream updates, so nothing reads stale against the ruling:** `R147`'s ledger row (§16.3) moved
from `Open` to `Drafted, pending application`; the ledger summary tally updated (24 rows, five open
residuals now instead of six); §16.7 records the ruling as decided rather than as two live readings,
and states precisely what "drafted" does and doesn't satisfy — **`R147` is drafted, not applied**;
under Reading B, Unit 1/2's application still waits on Unit 7 actually landing in the three source
files, not merely existing alongside them.

### Graphify — resynced again before this hand-back

Same discipline as Round 36: `npx graphify hook-rebuild` run against `3d82e6b` (Round 36's commit)
before presenting this round, not after. `bun run check`: **17/17.**

### What this round does not do

Still no edit to the three governed source files themselves, no commit beyond this handoff pair, no
push, no lane transition, no code. Unit 7's text is drafted and ready for the Judge's own read;
applying it is a separate, later act, same as every other unit in this packet.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | `R147`'s annotation text (§16.5a) | Verified against the actual current text of all three documents before drafting; preserves rather than rewrites | Judge review, then application ordered before units 1/2 per Reading B |
| **Approve-with-conditions** | Units 1/2 | Application sequenced strictly after Unit 7 lands, not merely drafted alongside it | Apply Unit 7 first, then 1/2 |
| **Defer** | `R148`'s uncovered docs, `R152`'s execution, `R159`, `R160`, `R162` | Unchanged from Round 36 — still open, still named | Separate passes |
| **Reject** | Treating Unit 7's draft as itself the applied correction | Nothing is committed to `v1-build-readiness-addendum.md`, `blueprint.md`, or `business-case.md` yet | Judge authorizes application as a bounded act (`D-183`) |
## Round 38 — Lane B: independent review of Rounds 36–37, before application

**Review evidence:** `0a48f27d6b956a59df47ba75d57fc58041492120` (includes `3d82e6b`).
**Kind / Phase / Blocks:** this is continuing evidence in the existing Phase-1 `spec-defect`,
not a new handoff or a turn-report. It blocks claiming the Unit 7 → Units 1/2 application packet
complete. The entry's canonical header remains authoritative; this round sets no `Resolution`
or `Verified-By` and does not accept phase closure.

### What happened

The Judge separately authorized pushing the existing drafts. Lane B fetched the upstream,
confirmed the outgoing range was exactly `3d82e6b` and `0a48f27`, affecting only this entry and
`V1-B071-CORRECTIVE-PLAN.md`, and pushed it. Post-push upstream and live remote-ref inspection
both matched `0a48f27`. This records publication of drafts, not application authorization.
The unrelated untracked `package-lock.json` was excluded and left untouched.

Rounds 36–37 improve the packet: acceptance placement is now Product §9; the replay criterion no
longer promises successful Delivery; the ledger explicitly separates its internal classifications
from formal handoff closure; Unit 7 is drafted as a parent under Reading B; and the storyboard
pointer is no longer claimed to complete the UML/report work. Those improvements are retained.

### What you need — parent-first, continuing the existing findings

| Order / existing finding | Evidence and remaining gap | Draft fix and success criterion |
|---|---|---|
| 1 — R147 / Unit 7 | §16.5a correctly says the documented current order is itself held under D-171, but §16.4 still calls it the **current, build-authorized order** and asserts that reasoning remains true. The annotations disclose a proposal; they do not themselves authorize or supersede the operative model | Correct the live explanatory assertion to **historical/current-documented order, held under D-171**; preserve its earlier wording only as explicitly superseded history. In the eventual Register act, identify exactly which source clauses the disclosure qualifies and what remains held. Unit 7 is a disclosure prerequisite, not evidence of complete target-model adoption |
| 2 — R148 / rename coverage | Unit 1b and the final write set still omit Product `FR-04a`: its Requirement cell says agent contribution is never `T6`'s executor and its Line cell says `T6`: Line 2. R148's other uncovered documents are still deferred while §16.7 offers Units 1/2 immediately after Unit 7 | Add exact FR-04a cell edits; classify all remaining operative occurrences before offering the rename. For each, name its exact target edit or justify historical/future/unaffected retention. Deferring an occurrence cannot silently authorize a contradictory partial rename. Success: no unexplained target editorial-T6 dependency remains in the proposed application set or its operative consumers |
| 3 — R149 / literal text | §16.1 still uses ellipses for SEC-01a, FR-05a and SEC-03a and `...same Definition...` for G-05a. Earlier source text may be abbreviated for explanation, but it is not an exact replacement operand | Supply full replacement cells, or exact uniquely matching substring replacements with the rest explicitly unchanged. Preserve existing citations and hold markers. No executor should have to reconstruct missing words from the prose |
| 4 — R146/R158 / nested T5 scope | Proposed G-02a says only T5-FINAL may be satisfied but also says T1–T5 are not_applicable. Proposed G-05a says **At T5-FINAL ... never at T5**. T5-FINAL is now defined to complete and belong to T5 | Replace broad T5 exclusions with explicit sub-act lists. Draft G-02a scope: **Only T5-FINAL is eligible for satisfied; T1–T4, each T5-REVIEW act (T5/T5a/T5b), the deterministic T5_review_bundle_sealed join, and Delivery are not_applicable. Logged overrides remain override_not_four_eyes.** Draft G-05a timing: **At T5-FINAL, after T5_review_bundle_revealed_to_EG5; not during a reviewer act or the deterministic join.** Preserve Q4 and D-171 holds. Success: the containing gate cannot exclude its own final sub-act |
| 5 — R186 / acceptance ownership | New AC-08f is anchored to FR-06 (return/rerun behavior), but tests authentication scope withdrawal and retention of G-02a/SEC-01a. A syntactically filled FR cell is not a semantic anchor | Route authentication-scope exclusion to its existing scope/security owner and Line-control behavior to FR-04a/FR-05a/SEC-01a as appropriate. Split the governance scope check from behavioral acceptance if needed; do not invent a return requirement to carry either. Review AC-08b's missing-review readiness ownership against FR-04a as well. Success: each criterion tests the behavior of its cited parent |
| 6 — R152 / graph contract | §16.4 supplies two proposed nodes and distinct_from, but not the requested T5-FINAL part-of-T5 and PBL-01-owns-future-T6 relations. The editorial node describes only Reviewed→Approved although §15.3 also permits a negative final judgment that stays Reviewed. Its description says not yet applied even though instructions say to create it after application | Reuse existing canonical identities after a duplicate-ID check; specify parent/ownership edges plus distinct_from. Describe the assessment separately from its positive transition effect. Supply application-time lifecycle wording so the merged node accurately describes the committed decision and retained build hold. Test stable IDs, relationships, negative outcome semantics and curated coverage—not just two query labels. Recheck frag122 availability at execution; prose reservation is not an exclusive lock |
| 7 — D-54 / application packet | §16.8's final write set includes Build Spec but does not name the Register or Artifact Inventory, despite introducing acceptance rows and proposing frag122 | Before authorization, include the Register Judge act, bounded per-unit DoD, all-three tracking propagation, and explicit unchanged-tier statements. Identify the graph artifact in the inventory if created. Do not use the analysis Approve table as execution permission |

**Smallest safe sequence:** correct the packet's meaning and exact edits → Judge considers Unit 7
disclosure and the complete Units 1/2 packet separately → authorized Lane A applies Unit 7 first,
then the complete renamed contract with its affected consumers → commit/push proof → Graphify
synchronization against the settled commit and curated verification → independent application
verification. Unit 6 remains an independent, identity-only proposal requiring its own bounded
authorization; no change to that approved distinction is requested here.

### Views, Encyclopedia and tracking

Keep historical storyboard panels unchanged and explicitly historical. §16.5 is a useful pointer,
not completion of R159's progress-axis/UML work or R160's report binding. Those remain with their
already named SPECS/UX and FN-AUDIT-VISIBILITY owners. The corrected flow must distinguish sealed
review judgments, a non-judging readiness join, the human final assessment (including negative
outcomes), and Delivery's independently evidenced result. A linear success-path arrow is not the
four-case outcome contract by itself.

The external Encyclopedia was not inspected in this review. Its local sync map remains the
dependency index, not proof the hosted artifact matches. At application, record affected entries
in the decision tier map; later verification must read the external artifact before asserting sync.

B-071 remains Open. Draft coverage, a business ruling, Applied, and independent Verified are
different facts. The canonical header and derived closure-readiness view continue to track them;
no second closure tracker or summary tally is created here.

### What you did instead

Reviewed and recorded corrections only; no source, Product, Fn_Spec, SPECS, application, schema,
lane-state or build-authorization changes. The current Graphify branch record analyzed `3d82e6b`
while review HEAD was `0a48f27`: this is drift even though the stale flag is false. This review
uses direct source evidence and claims no current semantic query. Lane A owns synchronization
before the next consuming approval; committing this handoff will move HEAD again. A green check
before a commit is evidence for its input revision, not the resulting commit.

| Decision | Tier / scope | Follow-up phase |
|---|---|---|
| Approve | Separate push of existing draft commits through 0a48f27; remote equality verified | Completed transport only; no application permission |
| Approve-with-conditions | Unit 7 source-disclosure draft and governing Register interpretation | Phase 1: correct the held/authorized contradiction and clause scope before application |
| Defer | Units 1/2 Product/Fn_Spec/RACI application packet | Phase 1: complete R148/R149 coverage, sub-act semantics, criterion anchors and D-54 packet first |
| Approve-with-conditions | Unit 6 Product backlog identity only | Phase 1: confirm identity allocation and separate bounded authorization |
| Defer | R152 graph execution; R159/R160 views/report; Encyclopedia verification | Phase 1 application/sync and the existing named follow-up tiers; no verified-sync claim yet |
| Reject | B-071 terminal closure or S2/build authorization inferred from this review | Handoff tracking and build tiers remain unchanged; independent evidence and Judge acts required |

## Round 39 — Lane A: corrections applied from independent review of Rounds 36–37 (Round 38)

**Restated request:** Round 38 is genuine, pushed, committed content (verified at `b51f095`, not a
paste) — treat its seven numbered findings and the Views-section note as the correction list,
parent-first, verify each against the live files before acting, fix what's real, resync Graphify,
and close with an approve/reject table.

### Verified against the actual files before accepting anything

All seven numbered findings, plus the Views-section "linear arrow" note, checked out exactly as
raised. One finding (`FR-04a`/`R148`) traces to a row I had quoted in my own research early in this
thread and then never carried into the unit-1 sweep — the miss was mine, not a misreading by the
reviewer.

| # | Finding | Verified | Fix |
|---|---|---|---|
| 1 | §16.4 called the current order **"build-authorized"**, contradicting `D-171`'s hold | **Confirmed — and worse than a fresh typo.** This exact phrase is `B071-R138`, a defect already diagnosed and corrected earlier in this same document (lines ~1399, ~1737, ~1858, ~1930) — I regressed a known, named failure mode rather than introducing a new one | Corrected to *"current, historical/documented order — itself held under `D-171`"*, matching the document's own established correct wording |
| 2 | `FR-04a` still says `T6` (*"agent contribution is never `T6`'s executor"*, Line cell *"`T6`: Line 2"*), missing from unit 1b | **Confirmed** at `Modular_PRD.md` line 525 | Added to §16.1's table |
| 3 | `SEC-01a`, `FR-05a` still ellipsized; `G-05a`'s own fix from Round 36 introduced a fresh `"...same Definition..."` shorthand | **Confirmed** — the second pass repeated the first pass's own defect in a new row | All four rows now quote complete current and proposed text |
| 4 | `G-02a`/`G-05a` exclude "`T5`" while also saying `T5-FINAL` (part of `T5`) is the one thing eligible — self-referential | **Confirmed**, a real logical ambiguity, not a wording nit | Both reworded to enumerate `T5`'s sub-acts explicitly, excluding the join and review acts by name rather than the bare label `T5` |
| 5 | `AC-08f` anchored to `FR-06` but tests authentication scope + Line-control retention; `AC-08b` anchored to `FR-05a` but tests `T5` review-act completeness | **Confirmed on both** | `AC-08f` re-anchored to `SEC-01a` and rescoped to test only the Line-control claim; `R185`'s "no auth prerequisite" half noted as a scope disclosure, not a duplicate criterion. `AC-08b` re-anchored to `FR-04a` |
| 6 | Graph contract had only `distinct_from`, no `part_of`/`owns`; node description covered only the positive outcome; description text asserted "not yet applied" as permanent; `frag122` treated as reserved rather than checked at execution | **Confirmed on all four** | `part_of`/`owns` edges added (target IDs deferred to a duplicate-ID check at execution, not invented); description now covers both outcomes; "not yet applied" removed from the description itself; reservation caveat stated explicitly |
| 7 | Write set names Build Spec but not the Register or Artifact Inventory, despite `D-54` | **Confirmed** | New table naming what each `docs/v1/` tracking tier needs when this is authorized — not executed here, only named |
| — | (Views section) the data-flow list is a single success-path arrow, not `§15.3`'s four-case branch | **Confirmed, and already partly true** — the branching was always in `§15.3`; the arrow just didn't say so | One sentence added, pointing back to `§15.3` as the branching's actual authority |

### What this round does not do

No governed source or application changes. No push — this stays local until asked, same as every
prior round. Graphify resynced to `b51f095` before this hand-back (`bun run check`: 17/17), matching
the discipline Round 38 itself asked for: sync before the next consuming approval, not after.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | All seven corrections plus the Views-section fix | Verified against source, applied, logged with before/after in this round | Judge review |
| **Approve-with-conditions** | The `D-54` application-packet table (§16.8) | Named what's needed (Register act, Artifact Inventory row, `Modular_PRD.md` §8 statement); none of it executed | Complete at authorized application, not before |
| **Defer** | `R148`'s remaining uncovered docs, `R152`'s execution (duplicate-ID check, fragment write), `R159`/`R160`, `R162` | Unchanged, still named, still open | Separate passes as already scoped |
| **Reject** | Treating this round, or Round 38's push, as any form of application or build authorization | Transport (the push) and drafting (this round) are both distinct from application (`D-183`) | Judge authorizes application as its own bounded act |
## Round 40 — Lane B: Round 39 draft corrections are partial, not an application clearance

**Evidence revision:** `166bfb0`. Continuing the existing Phase-1 spec-defect; no new finding
series, duplicate tracker, formal Resolution, or independent application-verification claim.
Readiness and remedies below use existing R148/R149/R150/R152/R158/R186 anchors.

### What happened

Independently compared Round 39, corrective-plan §16 and its commit diff with the Product and
FN-GATES contracts. Retain the actual improvements: held-order wording, FR-04a inclusion,
explicit G-02a/G-05a sub-act exclusions, complete SEC-01a/FR-05a/G-05a/SEC-03a replacement text,
AC-08b's FR-04a anchor, AC-08f's narrowed Line-control subject, and the newly named D-54 tiers.
These are corrections **applied to a draft**, not changes applied to the owning governed tiers.

### What you need — residuals, parent first

| Existing anchor / priority | What still fails | Draft correction and success criterion |
|---|---|---|
| R148 / parent readiness | §16.7 still offers Units 1/2 immediately after Unit 7 while deferring the unswept operative consumers. Round 38 required classification of those consumers before the rename offer, not only the missing FR-04a row | Replace that readiness clause with: **Units 1/2 may be offered only after Unit 7's required source disclosure is applied AND every affected operative consumer in R148 has an exact proposed edit or an evidence-backed unaffected/historical/future classification. A remaining contradictory consumer blocks that application unit; independent future work does not.** Keep build authorization separate and D-171 unchanged |
| R150/R149 / packet consistency | §16.3's D-179 disposition still says FR-04a contains no T6 occurrence, although §16.1 now adds its two occurrences. The new FR-04a proposed Requirement cell starts with an ellipsis while the surrounding text claims all replacements are complete | Correct the D-179 row to cite FR-04a's Requirement and Line-cell edits. For the Requirement cell specify the exact substring **agent contribution is never `T6`'s executor** → **agent contribution is never `T5-FINAL`'s executor**, with all remaining text unchanged; no ellipsis is an edit operand. Classify the Line cell's T5 as reviewer acts, consistent with the nested-scope rule. Success: the occurrence ledger and executable edit instructions agree without re-inference |
| R152 / graph ontology | §16.4's owns edge may target the existing **T6/EG5** node. FN-GATES §11 explicitly assigns EG5 to the human editorial act, and this packet retains EG5 event IDs for T5-FINAL. Assigning that identity to future PBL-01 would merge the subjects the graph is meant to distinguish. Edge endpoints also remain prose placeholders, and the new descriptions omit the retained build hold | Do not assign PBL-01 ownership of EG5 or retype a historical editorial-T6 identity as assurance. Resolve existing IDs by subject, not label; use a distinct future-assurance concept if none exists, with its creation explicitly drafted. Give all edge endpoints concrete IDs in the reviewable packet, then recheck collisions at execution. Preserve target-held/not-build-authorized status and historical editorial provenance. Success: T5-FINAL belongs to editorial T5; EG5 remains editorial; PBL-01 owns only future assurance; no alias/ownership/successor edge conflates them |
| R158 / outcome explanation | §16.5 now says **post-join incomplete (stays Reviewed, no readiness)**. §15.3 and FN-GATES §11.1 say the join already sealed the bundle and performed Drafted→Reviewed. Missing final-approval evidence is not absence of bundle readiness | Replace with **post-join final-approval evidence incomplete: the sealed readiness fact is retained, the article stays Reviewed, deficiencies are recorded, and no approval or Delivery authorization is produced**. Keep the pre-join missing-review case at Drafted. Success: neither text nor a later view erases a readiness event that already occurred |
| D-54 / authorization packet | Naming the tracking tiers is progress, but the Register decision text and bounded DoD remain requirements-to-write, and the Inventory entry is conditional only on later fragment creation. This is not yet a complete packet | Draft the per-unit Register act, DoD and applicability matrix before offering application. For every affected tracking tier provide its edit or explicit unaffected rationale, including the no-fragment-yet case. Recording actual authorization remains the Judge's separate act; the draft must not claim it occurred |

**Do not reopen corrected business choices.** Reading B remains selected. Unit 7 is its source
disclosure prerequisite, not automatic clearance of R148. Unit 6 remains independently reviewable
as a backlog identity only. No new business decision is necessary to correct the contradictions
above; the future application still needs its own bounded authorization.

### Tracking, views and graph evidence

B-071's canonical Status remains Open. The occurrence ledger records draft coverage and is not
a terminal handoff resolution. Storyboard pointers remain historical; R159's SPECS/UX work and
R160's audit-report mapping are still deferred to their named owners. The hosted Encyclopedia was
not read; its local citation map cannot establish external synchronization. No full UML/report
reconciliation or Encyclopedia verification is claimed.

At revision `166bfb0`, `bun run check` passed every check except docs-drift: analyzed `b51f095`
versus HEAD `166bfb0`. Round 39's pre-commit green result is not a green result for its commit.
Lane A remains Active and Lane B Eligible. Lane A must synchronize the settled committed graph
before the next consuming approval, preserving curated identities and checking semantics as well
as commit currency. This review relied on current file evidence, not stale graph query results.

### What you did instead

Recorded review and proposed text only in this existing handoff. No governing source, corrective
plan, application, migration, lane state or authorization was edited. The untracked package-lock
file was left untouched. Any transport of this feedback follows the one-entry handoff procedure;
it does not authorize pushing an accumulated Lane A range or applying the draft.

| Decision | Tier / item | Follow-up phase |
|---|---|---|
| Approve | The specific corrected draft clauses acknowledged above | Phase 1 draft review only; not a formal Applied/Verified promotion of B-071 |
| Approve-with-conditions | Unit 7 source disclosure | Phase 1: complete the bounded Register/DoD packet; retain D-171 |
| Defer | Units 1/2 Product/Fn_Spec/RACI application offer | Phase 1: complete R148 classifications and reconcile ledger/edit instructions first |
| Defer | R152 graph contract and synchronization | Phase 1: concrete subject-correct IDs and retained lifecycle status before execution and semantic verification |
| Reject | Blanket closure of Round 38 findings or B-071 from Round 39's summary | Handoff tier: retain residuals and require independent evidence after authorized application |

## Round 41 — Lane A: all five Round 40 residuals resolved

**Restated request:** Round 40 (committed, `5a7ac0b`; verified before acting — not pushed, matching
its own stated push-permission constraint) named five residuals against Round 39's draft. Verify
each, complete `R148`'s sweep for real rather than naming it as remaining work, correct the ledger/
ontology/wording defects, and draft the actual Register text and DoD, not only name that they're
needed.

### Verified, then resolved — not just acknowledged

| # | Finding | Verified | Resolution |
|---|---|---|---|
| 1 | `R148`'s four uncovered files still block a complete rename offer | **Confirmed**, and completed this round rather than deferred again | Checked `CONFIG_LOG.md`, `FN-EXCEPTIONS-06-11-12.md`, `LANE-B-WORK-ORDER.md`, `SPECS-TRANSITION-ENFORCEMENT.md` directly. Three are `Unaffected` (current-order-accurate, no `[decided_target_held]` marker). One — `FN-EXCEPTIONS-06-11-12.md` §11 — is itself target-order content (`D-179`) predating the `T5-FINAL` correction, so its two `T6` occurrences needed the same rename `FR-04a` did. Added to §16.1/§16.8; §16.7's readiness clause restated with `R148` now satisfied |
| 2 | Ledger's `D-179` row still said `FR-04a` has no `T6` occurrence, contradicting its own fix; `FR-04a`'s replacement text itself started with an ellipsis | **Confirmed — the ellipsis defect's third occurrence** in this section alone | `D-179`'s row corrected; `FR-04a`'s full requirement-cell text written out, no ellipsis |
| 3 | Graph `owns` edge risked assigning `PBL-01` ownership of `EG5`, the editorial node | **Confirmed**, a genuine ontology error, not a wording nit — `EG5` is `T5-FINAL`'s own node identity, never PBL-01's | Replaced the `owns`-to-`EG5` edge with `part_of` (`T5-FINAL`→`T5`) and `performed_by` (`T5-FINAL`→`EG5`); explicit note that no edge from `pbl_01_t6_assurance` may ever target `EG5` |
| 4 | "Post-join incomplete... no readiness" had it backwards — the join already sealed readiness; what's missing is `T5-FINAL`'s own evidence | **Confirmed** | Reworded: readiness is retained and never erased; the gap is `T5-FINAL` evidence, not the join's own effect |
| 5 | Named tracking tiers still needed actual decision text and a bounded DoD | **Confirmed — this was naming, not drafting** | Drafted the full proposed `D-189` Register entry in `V1-DECISION-REGISTER.md`'s own format (matching `D-188`'s shape), with a per-unit DoD table, gaps, tier applicability, and scope limits — still not written into the live Register; the draft is in §16.8 |

### What this round does not do

No governed source or application changes; no edit to `V1-DECISION-REGISTER.md` itself (the drafted
entry stays in the corrective plan until authorized). No push — stays local, same one-entry
constraint Round 40 named still applies to any Lane B/C actor; I remain free to push my own range
once authorized, but that authorization hasn't been given. Graphify resynced to `5a7ac0b` before
this hand-back (`bun run check`: 17/17).

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | All five Round 40 residuals | Verified, resolved (not merely acknowledged), logged with before/after | Your review |
| **Approve-with-conditions** | The drafted `D-189` Register entry | Complete per-unit DoD and tier table; still draft, not in `V1-DECISION-REGISTER.md` | Your Judge act moves it there |
| **Defer** | `R152`'s execution (duplicate-ID check, fragment write), `R159`, `R160`, `R162` | Unchanged, still named, still open | Separate passes, as already scoped |
| **Reject** | Treating this round as the Judge act itself | A drafted Register entry is not a recorded decision; `D-183` still requires your separate act | Your authorization, then application |
## Round 42 — Lane B: Round 41 needs a consistent acceptance contract before application

**Evidence:** review of `0cf89f7`, corrective-plan §16.4/§16.7/§16.8, the four named R148
consumers, and the existing FN-GATES/Modular_PRD outcome contracts. Continuing this existing
Phase-1 spec-defect; the canonical header remains Open. No new Resolution or duplicate tracker.

### What happened

Retain Round 41's genuine draft improvements: the additional four-file sweep, the two target-held
FN-EXCEPTIONS edits, FR-04a's complete replacement, corrected predecessor citation, EG5 remaining
editorial, and post-join readiness being retained. A proposed Register entry and DoD now exist.
However, existence is not consistency: the DoD and execution instructions still contradict parts
of the packet they must verify. The blanket claim that every residual is resolved is not accepted.

### What you need — Judge decision tree, parent before child

| Order / existing anchor | Failure if accepted unchanged | Draft fix / acceptance rule | Judge disposition |
|---|---|---|---|
| 1 — R147/R148 readiness | §16.7 first says Unit 7 is not applied, then says both conditions are satisfied because it is drafted and next in sequence. That lets sequence stand in for evidence | Replace the latter clause with: **Units 1/2 remain gated. After Unit 7 is applied and its exact source insertions verified, recheck the R148 classification set; only then may the authorized Units 1/2 application start.** Review of their draft may occur earlier. Never record the gate as cleared from drafting alone | Accept this gate correction; defer gate clearance until evidence exists |
| 2 — R148 / rename DoD | Unit 7 requires historical T6 rows byte-unchanged, while Units 1/2 require no editorial-T6 string outside future assurance or four Unaffected files. Those obligations cannot both pass. The sweep actually marks FN-EXCEPTIONS as requiring edits, not Unaffected | Scope the absence test to **classified target-order clauses**, not whole files. Explicitly allow classified historical/current-documented text and provenance, including Unit 7's retained rows. Require each target occurrence to match its proposed replacement and each retained occurrence to match its documented classification. Cite rows rather than a restated count. Current-order absence of a target marker alone is not evidence of historical status; cite the governing hold/contract for each retained consumer | Defer the current DoD; accept an occurrence-scoped test draft |
| 3 — R152 / graph contract | The edge table uses performed_by, but the execution paragraph still commands part_of/owns/distinct_from and searches T6's IDs. Concrete endpoints remain placeholders. A faithful executor could rebuild the rejected relation or invent identity bindings | Make the execution paragraph consume the one canonical edge table; remove the superseded owns instruction. Resolve concrete T5 and EG5 graph IDs by source/subject in the draft, then recheck at execution. If absent, explicitly draft the missing node instead of inferring an ID. Preserve target-held/not-build-authorized lifecycle wording. Test edges and absence of the forbidden PBL-01→EG5 binding, not only query labels | Defer graph-contract completion; retain the approved editorial/assurance distinction |
| 4 — D-54 / proposed Register entry | The entry says it resolves R145–R168 while its own Unchanged section retains unfinished literal text and deferred work. The new DoD is not a reason to close the whole occurrence range. Unit 6 may be independent, but the draft bundles its allocation with other units | Replace the blanket range-closure claim with **records the item-by-item dispositions in the occurrence ledger; only independently evidenced items reach terminal closure**. Make the selected unit set explicit in the Judge act; unselected units remain unapproved. Include literal tracking edits or explicit unaffected rationale per selected unit, retaining D-171. Do not let copying a draft Judge-entry imply authorization for every unit it mentions | Defer entry application; accept scoped authorization drafting |

**Independent branch:** Unit 6 is still an identity-only Product backlog proposal; no feature
implementation, rank, or build permission follows. **Following branch:** R159/R160 retain their
SPECS/UX and audit-report owners. Historical storyboard pointers remain unchanged; the local
Encyclopedia map flags impact but cannot verify the unread hosted artifact. No new UML or report
completion is asserted by this review.

### What you did instead

Recorded review and fixes only here. No governing source, corrective plan, Register, application,
migration, or lane-state edits. B-071 remains the single closure record; the analysis verdict is
not formal application verification. The graph branch record names `5a7ac0b`, while review HEAD
is `0cf89f7`: the pre-commit green check is not current-HEAD currency. Lane A must synchronize the
settled revision before the next consuming approval; no stale semantic-query claim is used here.
The unrelated untracked package-lock file remains untouched. Transport of the accumulated range
is separate from this review and from the one-entry handoff exception; it does not authorize build.

| Decision | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Specific Round 41 draft corrections retained above | Phase 1 draft review only |
| Approve-with-conditions | Unit 7 source-disclosure application proposal | Phase 1: bounded Judge act and verified insertion before child execution |
| Defer | Units 1/2 and proposed D-189 application | Phase 1: consistent occurrence-scoped DoD, readiness evidence and selected-unit authority |
| Defer | R152 graph contract/execution | Phase 1: concrete endpoints and one consistent edge contract, then synchronization |
| Reject | Blanket residual closure or B-071 terminal status from Round 41 | Handoff tier stays Open; application and independent verification remain separate |

## Round 43 — Lane A: independent review of Round 42's decision tree and its cited sections

**Evidence:** direct read of `V1-B071-CORRECTIVE-PLAN.md` §§16.4, 16.5, 16.7, 16.8 (not only Round
42's citation of them); `V1-DECISION-REGISTER.md` grepped for `D-189` (zero matches);
`V1-PHASE-CLOSURE.md` §5; `bun run check` re-run at `240e5e2` (17/17); `npx graphify hook-rebuild`
and `npx graphify check-update` both run this round; `git fetch` plus local/remote tip comparison;
`git status --short`; `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` and
`docs/ENCYCLOPEDIA-SYNC.md` read in full; every existing `B071-R\d+` in this file enumerated to find
the true maximum before minting new IDs. Independent of Round 42 — Lane A did not draft it and is
not the answering/applying side (`D-101`, `B076-R2`'s independence rule). Continuing this existing
Phase-1 spec-defect; the canonical header remains Open. No new Resolution, no duplicate tracker,
and this round applies nothing to a governed tier.

### What happened

Round 42's claims were checked against the live repository rather than accepted on citation. Every
factual claim in Round 42 is confirmed accurate, and its four-row correction table is confirmed
internally consistent — endorsed as drafted, not reopened.

**Corrected before commit.** This round's first draft was itself independently reviewed, in the
same boundary/handover shape Round 42 uses, before anything was committed. That review found four
real defects: this draft's findings were numbered `B071-R84`–`R88`, colliding with existing
unrelated findings already at those numbers (`B071-R84`–`R88`, lines 3188–3298, about `D-187`/
`NG-03` scope-horizon corrections); its task list let accepting the parent's four text corrections
stand in for authorizing Unit 7's and Units 1/2's actual application, contradicting this round's
own exclusion; it claimed no storyboard diagrams or Encyclopedia access existed when both do,
just unread by this round's first pass; and it claimed Graphify was "synced" without separating
extraction currency from semantic-description currency. All four are corrected below, in place,
since nothing from the first draft was ever committed — there is no published history to preserve
around them. The renumbered findings keep their substance; only `B071-R189`'s content changed.

### Verification of Round 42's claims

| Claim | Checked how | Result |
|---|---|---|
| "Checks: 16/17 passed before commit" | Re-ran `bun run check` at current HEAD: **17/17**. The only HEAD-relative check among the 17 is `docs-drift`, which fails exactly when Graphify trails HEAD — true at commit time (graph was 1–2 commits behind), false now that this round resynced it | Consistent with 16/17 at commit time; not independently re-derivable at the historical commit, but no other check in the suite is HEAD-relative |
| "committed and pushed as `240e5e2`; remote equality verified" | `git fetch origin docs/journal-2026-08-16`; compared `git rev-parse HEAD` to `git rev-parse origin/docs/journal-2026-08-16` | **Confirmed** — both equal `240e5e2e73f2e658083ee39908e4bc4b5153af22` |
| "Graphify drift remains for Lane A" | `.graphify/branch.json` showed `lastAnalyzedHead: 5a7ac0b` against `HEAD: 240e5e2` — two commits behind | **Confirmed as of this review's start; resolved this round** — `npx graphify hook-rebuild` run, `lastAnalyzedHead` now `240e5e2` (1426 nodes, 2780 edges, 97 communities; curated layer backed up automatically, 6 files) |
| "No governed source or application changes were applied" / "`package-lock.json` remains untouched" | `bun run check`'s `lane-boundary` line: HEAD commit touches only the unmapped `docs/handoff/B-071-...md`; `git status --short` shows only `?? package-lock.json`, untracked | **Confirmed**, both |
| The four gating issues (as paraphrased outside this file) | Compared against Round 42's actual four-row table, `B-071.md:6874-6879` | **Faithful in substance, with one material omission** — see `B071-R187` below |

### Verification of the follow-up review's claims

The follow-up review of this round's first draft is checked the same way, not accepted on
authority — the same "Judge Approved: follow decision-tree decision" framing applies to it as to
Round 42, and does not meet `D-183`'s bar either (`B071-R191`). Its substance is verified directly:

| Claim | Checked how | Result |
|---|---|---|
| "Reused finding IDs: `B071-R84`–`R88` already identify unrelated findings earlier in B-071" | Enumerated every `B071-R\d+` in the file (`grep -oE`); lines 3188–3192 carry the original `B071-R84`–`R88` (the `D-187`/`NG-03` scope-horizon findings), still live and cited at lines 3284 and 3298 | **Confirmed.** True collision. Highest existing number is `B071-R186` (matches the Round 39 commit message). This round's findings renumbered to `B071-R187`–`R191`, starting clear of it |
| "Authorization comes too late... contradicts R88's exclusion of Unit 7 application" | Re-read this round's own task list against its own `B071-R88` (now `R191`) exclusion | **Confirmed.** The task list treated "parent [text-correction] accepted" as sufficient to "apply" Unit 7, which is exactly what the exclusion said could not happen. Task list corrected below with explicit separate authorization steps |
| "The storyboard journal contains sequence diagrams and flowcharts. The Encyclopedia URL is already recorded locally" | Read `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` and `docs/ENCYCLOPEDIA-SYNC.md` in full — neither had been opened before this round's first draft, only located by `Glob` | **Confirmed, with correction to the follow-up review's own framing.** Four Mermaid diagrams exist (two `sequenceDiagram`, two `flowchart`); Panels A5/A6 (lines 87–118) document exactly the T5/T6 mechanics this thread's readiness gate concerns, not a tangential reference. `docs/ENCYCLOPEDIA-SYNC.md:6` records the Encyclopedia's URL directly. Neither is "missing" — both were simply unread by this round's first pass. UML itself remains genuinely absent/deferred (`R159`/`R160`, corrective-plan §16.3) — the follow-up review did not claim otherwise |
| "'Fully synced' overstates the evidence... remove the claim that only `docs-drift` depends on HEAD" | Ran `npx graphify check-update` (not run in the first draft) | **Confirmed.** Output: `"Pending semantic updates... graph was rebuilt by the fast git hook without descriptions/labels (.graphify_describe_pending)."` Extraction currency (`lastAnalyzedHead` = `240e5e2` = HEAD) is current; semantic description currency is not, and per `B-077`'s own established finding this is a per-machine, gitignored condition with no durable fix available here — reported, not "solved." Separately: `lane-boundary`'s output line does read and report the HEAD commit, so "the only HEAD-relative check" was imprecise wording; its pass/fail outcome for this file's commits does not depend on graph staleness the way `docs-drift`'s does, which is the narrower, accurate claim |

### Findings — parent first

| ID | Gap | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R187` — "proposed `D-189`" loses its qualifier outside this file | Round 42 itself correctly writes "proposed `D-189`" (`B-071.md:6901`). A paraphrase circulating outside this file dropped "proposed," and `V1-DECISION-REGISTER.md` has no `D-189` entry — grepped, zero matches | A reader who only sees the paraphrase treats `D-189` as an existing, decided Register entry — the exact restatement-drift shape `G55`/`G56`/`G58` name, now occurring one layer above the document designed to prevent it | No text in `B-071.md` needs to change — it already says "proposed." The fix is procedural: any future citation of `D-189` outside this file must carry "proposed" until `V1-DECISION-REGISTER.md` actually has that entry |
| `B071-R188` — Round 42's Row 1 citation is accurate but not pinpointed | Round 42 says "§16.7 first says Unit 7 is not applied, then says both conditions are satisfied because it is drafted and next in sequence" without quoting the clause | A future reader re-locates the contradiction by re-reading all of §16.7 instead of going straight to it | The exact clause is `V1-B071-CORRECTIVE-PLAN.md:3249-3251`, item (3) of the "Application may be offered per unit" list: *"Units 1/2 apply together, immediately after unit 7, now that both halves of the readiness clause above are satisfied (`R148` complete; unit 7 drafted and next in sequence)"* — contradicting the same section's own line 3233, *"Drafted is not Applied."* Round 42's proposed replacement text (`B-071.md:6876`) should land at this exact clause when applied, not elsewhere in §16.7 |
| `B071-R189` — the outer cross-reference request (storyboard/story panel/UML/data flow/encyclopedia) has real evidence this thread had not yet read | `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` contains four Mermaid diagrams, not zero. Panel A5 (T5 independent review, lines 87–105) and Panel A6 (T6 approval, lines 112–118) are sequence diagrams of exactly the human/agent, Line 2/Line 1 T5→T6 handoff this thread's readiness gate governs — dated 2026-08-18, "verified against" the applied schema and the Addendum's gate table. "Storyboard Panel A5/A6" (`V1-B071-CORRECTIVE-PLAN.md:3126-3127`) are named references *into this journal*, not into a missing artifact. `docs/ENCYCLOPEDIA-SYNC.md:5-6` records the hosted Encyclopedia's URL directly, and its own table already flags Entries 01/04/05 as unverified-impact candidates for this rename (matching corrective-plan §16.8's framing). UML remains genuinely absent by design — `Deferred` per `R159`/`R160`, corrective-plan §16.3 — that part of the original claim stands | Treating the diagrams and the URL as unavailable means real, relevant historical evidence (the T5/T6 blind-first-pass sequencing in Panel A5, the `line_boundary_crossed`/`identity_assurance` fields) sits unused while this thread re-derives the same shape from prose | Cite `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panels A5/A6 as historical design evidence for Row 1/2's T5→T6 sequencing when Unit 7/Units 1-2 are actually applied. State plainly: storyboard diagrams exist (historical, read); the hosted Encyclopedia exists at a known URL (unread by this review, not missing); UML stays Deferred (by design, not by gap). A full line-by-line cross-check of the diagrams against Round 42's four fixes is more than this pass's scope — flagged for whoever applies Row 1/2, not performed here |
| `B071-R190` — a real, narrower Judge ruling already exists and should anchor Row 1's fix, not a new decision | §16.7's own heading says "updated after the Judge's ruling," and its body names **Reading B** (Round 36's question) as already decided: *"`R147`'s correction gates units 1/2's application. Not a two-way split any longer"* (`V1-B071-CORRECTIVE-PLAN.md:3226-3229`) | Treating Row 1's fix as needing a new Judge decision, when an applicable one (Reading B) already exists, either asks the Judge to re-decide a settled question or leaves Round 42's fix looking unauthorized when it is actually just correcting §16.7's text to match what Reading B already decided | State explicitly, when Row 1's fix is presented for a bounded act, that it operationalizes Reading B rather than opening a new question |
| `B071-R191` — neither "Judge Approved: follow decision-tree decision" nor the follow-up review's own identical framing meets this repository's own bar for a bounded act | `D-183` requires an authorization to name object, revision, action, scope and exclusions (established across `B-072`/`B-073`/`B-074`/`B-075`/`D-183`/`D-186`). Both instances of the phrase carry none of those | Treated as authorization, either occurrence would repeat the exact "approval inheritance" pattern `B-077`'s failure-pattern table names as this repository's most recurring defect | No fix applied under either instance — this round treats both as not bounded acts, drafts only, and applies nothing to `V1-DECISION-REGISTER.md` or `V1-B071-CORRECTIVE-PLAN.md`. A real bounded act would need to name: object (§16.7 clause (3), §16.4's `R152` execution paragraph, the proposed Register entry template), revision (`240e5e2`), action (accept the four corrections), scope (text-only, no build/route/lane authority), exclusions (Unit 7's and Units 1/2's application each stay separately gated — see `B071-R193`) |
| `B071-R192` — this round's first draft reused `B071-R84`–`R88`, already the IDs of the unrelated `D-187`/`NG-03` findings at lines 3188–3298 | Two unrelated finding sets sharing one ID breaks the citation this whole file relies on — `duplicate-ids` (part of `bun run check`) did not catch it because it scans registered tables, not every inline `R`-reference in prose | A future reader following "`B071-R86`" cannot tell which finding is meant; a cross-reference written today silently points at the wrong content after either finding set is edited | Renumber this round's findings to `B071-R187`–`R191`, continuing past the true maximum (`B071-R186`, enumerated this round) rather than guessing the next free number |
| `B071-R193` — the task list let "parent [text-correction] accepted" stand in for "Unit 7/Units 1-2 application authorized," contradicting this round's own `B071-R191` (formerly `R88`) exclusion | The first draft's task-list step 1a read "Once accepted: apply §16.5a's three annotation blocks," with no separate authorization step between accepting the four corrected *wordings* and actually *applying* Unit 7 — exactly the conflation `B071-R191` warns against, in the same document | A reader follows the task list, treats the parent Judge act as covering application too, and applies Unit 7 or Units 1/2 without the separate bounded act Round 42's own table requires (Approve-with-conditions for Unit 7; Defer, not even conditional, for Units 1/2) | Task list corrected below: the parent act authorizes only the four corrected wordings; Unit 7's application and Units 1/2's application each get their own explicitly named, separately authorized step, with independent verification between them |

### Parent-first task list — what actually moves B-071 forward from here

Round 42 already drafted the fix text for all four rows; nothing here re-derives it. Corrected per
`B071-R193`: accepting the parent's corrected *wording* is not authorization to *apply* anything —
each application step now names its own separate bounded act, not inherited from the parent's.

1. **Parent — Judge disposition on Round 42's four-row TEXT-correction table.** One bounded act
   (per `D-183`, see `B071-R191`) naming `240e5e2` as the reviewed revision, accepting or amending
   each of the four draft-fix *wordings* (the readiness-gate clause, the occurrence-scoped DoD, the
   graph-contract wording, the Register-entry template approach — citing Reading B, `B071-R190`,
   for Row 1's framing). **This act authorizes corrected text only — no application of anything.**
   Nothing below can start without it.
   - **1a. Child — a separate bounded act authorizing Unit 7's application.** Required by Round
     42's own Approve-with-conditions row and by `B071-R191`'s exclusion; not satisfied by item 1.
     Names §16.5a's three annotation blocks and the three target files
     (`v1-build-readiness-addendum.md`, `blueprint.md`, `business-case.md`) as the object, plus the
     verified-insertion requirement.
     - **1a-i.** Apply the three blocks to the three named files.
     - **1a-ii.** An independent, non-applying actor verifies the exact insertions.
     - **1a-iii.** Recheck `R148`'s classification set under item 1's corrected occurrence-scoped
       DoD. Only once 1a-i through 1a-iii are all done does Row 1's readiness gate actually clear —
       drafting or accepting item 1 does not, by itself, clear it (`B071-R193`).
   - **1b. Child, parallel to 1a — graph contract (Row 3).** Correct §16.4's `R152` execution
     paragraph: drop the retired `owns` instruction, resolve concrete `T5`/`EG5` graph IDs by
     source/subject. Independent of 1a's sequencing; can proceed once item 1 exists.
   - **1c. Child, depends on 1a-iii — a separate bounded act authorizing Units 1/2's application.**
     Round 42 **Deferred** this, not merely conditioned it: it needs 1a-iii's readiness evidence
     *and* an explicit selected-unit authority naming exactly which units apply — more than Unit
     7's Approve-with-conditions needed. Only after this act may Units 1/2 actually apply.
   - **1d. Child, depends on 1a/1b/1c's actual evidence — the Register entry (Row 4).** Rewrite the
     proposed entry as item-by-item dispositions over the occurrence ledger, naming the explicit
     selected-unit set, citing 1a/1b/1c's actual evidence rather than a blanket range-closure claim.
     Recording it is itself a further bounded act, not automatic once the evidence exists. This is
     the step that would turn "proposed `D-189`" into a real Register entry (`B071-R187`).
2. **Not blocking, already current as of this round:** Graphify extraction sync (`240e5e2`),
   `bun run check` (17/17), remote equality — all reconfirmed above. Graphify semantic-description
   currency is separately **not** current (`.graphify_describe_pending`) and, per `B-077`'s own
   finding, has no durable fix available in this environment — reported, not an outstanding task.
3. **Explicitly out of scope for this review**, by request: the parallel `B-072`→`B-077`
   process-governance thread. `B-077`'s own audit lists its Children 2–5 (legacy `Applied`
   reconciliation, `B-061`/`B-070` successor disposition, the Phase 3 deferral boundary, final
   independent review) as still open and unauthorized — a separate governed chain, not folded into
   this list.

### What you did instead

Lane A independently verified Round 42's claims against the live repository, resynced Graphify
extraction currency (`240e5e2`, 1426 nodes/2780 edges/97 communities — semantic-description
currency separately confirmed pending, not claimed synced), and recorded seven findings
(`B071-R187`–`R193`) and a parent-first task list. A follow-up review of this round's own first
draft, in the same boundary/handover shape, caught four real defects — an ID collision, a task-list
authorization gap, an unread-artifact overclaim, and a graph-currency overclaim — all independently
re-verified and corrected in place above, since nothing from the first draft had been committed. It
did not edit `V1-DECISION-REGISTER.md`, `V1-B071-CORRECTIVE-PLAN.md`, `Modular_PRD.md`, or any
governed tier; did not apply Unit 7, Units 1/2, or the `R152` graph correction; did not draft or
record a Register entry; and did not move lane state or claim `AUTH-DOC`. This round itself remains
an uncommitted local addition to this file, pending review and a commit decision.

### Approve / reject

| Decision | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Round 42's four-row correction table, in full | Phase 1: present to the Judge as one bounded act per `B071-R191`, citing Reading B (`B071-R190`) for Row 1 |
| Approve | Round 42's factual claims (checks, push, drift, package-lock) | Reconfirmed independently this round; no further action |
| Approve | The follow-up review's four corrections to this round's first draft (`B071-R189`, `R192`, `R193`, plus the graph-currency split) | Applied in place above; no further action |
| Approve-with-conditions | This round's seven findings (`B071-R187`–`R193`) | Phase 1: fold `B071-R188`'s exact citation, `B071-R189`'s storyboard/Encyclopedia pointers and `B071-R190`'s Reading-B framing into whatever text is presented for the Judge act in item 1 above |
| Defer | Task-list items 1a/1b/1c/1d (Unit 7's own authorization and application, `R152` execution, Units 1/2's own authorization and application, the real Register entry) | Phase 1: each waits on its own named bounded act; sequencing is fixed, none is authorized by this round |
| Reject | Treating "Judge Approved: follow decision-tree decision" — in either its original or its follow-up-review occurrence — as a bounded act | Does not name object/revision/action/scope/exclusions per `D-183`; would repeat the approval-inheritance pattern `B-077` names as this repository's most recurring defect |
| Defer | The `B-072`→`B-077` governance thread's open Children 2–5 | Separate governed chain, out of this session's scope by request |
## Round 44 — Lane B: independent review of corrected Round 43

**Evidence:** corrected, unstaged Round 43; `240e5e2` base; corrective-plan §16.4/§16.7/§16.8;
Decision Register arbitration/authorization rules; storyboard journal; Encyclopedia sync ledger;
Graphify branch and `check-update`. Continuing the existing Phase-1 spec-defect. No Resolution,
application, build authority, or second tracker is created.

### What happened

The staging question is resolved safely: the B-071 file is wholly **unstaged**, while the corrected
working-tree content is preserved. `package-lock.json` remains unrelated and untouched.

Round 43 is materially improved and its following corrections are accepted: unique IDs
`B071-R187`–`R193`; separate text acceptance from application authority; historical storyboard
diagrams acknowledged; the Encyclopedia URL acknowledged but its hosted content still unread;
Graphify extraction and semantic currency separated; Reading B retained as ordering, not inherited
application permission. Two parent-level defects and two precision gaps remain.

### What you need — parent-first decision table

| Order / anchor | Gap and guaranteed failure | Draft fix / success criterion | Judge choice |
|---|---|---|---|
| 1 — proposed D-189 / authorization | Task 1d records the “real Register entry” only after Unit 7 and Units 1/2 have been applied. If D-189 is the authorization decision, this reverses governance: work happens before its authorizing record. If it is only a closure entry, calling that act D-189 conflates authorization with evidence closure | Split the records by function. **Before application:** the Judge records the bounded D-189 authorization in the Register, naming revision, selected units, files, DoD, exclusions, D-171 status and tier applicability. **After application:** the same entry receives evidence/status according to the Register's append-only convention, or a separately named verification record if that is the established format. Success: every write traces to a pre-existing authorization; later evidence cannot retroactively authorize it | Accept this sequence correction before any application |
| 2 — application tree | Round 43 adds a text-acceptance act, then separate Unit 7 and Units 1/2 acts, but leaves the authorizing Register entry until the end. The resulting tree is procedurally elaborate yet still lacks the one parent that matters | Replace task 1 with: **Judge decides the complete wording → Lane A drafts the exact bounded D-189 record → Judge records D-189 selecting Unit 7 only → apply and independently verify Unit 7 → Judge amends/records authorization selecting Units 1/2 only after the readiness evidence → apply and independently verify Units 1/2 → execute separately selected graph work → record terminal dispositions item by item.** Combine acts only if one recorded authorization explicitly names both scopes and preserves their dependency condition | Accept parent-first tree; reject inherited or retroactive authority |
| 3 — Graphify semantic state | “No durable fix available in this environment” is unsupported. `graphify check-update` explicitly says to fill the pending description/community JSON and rerun update. Machine-local output is not commit evidence, but it is still actionable local completion | Say: **semantic completion is pending and not durable repository evidence; complete it when a consuming semantic claim requires it, then record only reproducible source/fragment assertions as durable evidence.** Do not equate extraction currency, local semantic enrichment, committed curated fragments, or portability | Amend R189/step 2; do not declare semantic completion impossible |
| 4 — artifacts and evidence | Round 43 says the Encyclopedia ledger already flags Entries 01/04/05; the local table currently shows dependency rows and an explicit stale marker for Entry 05, while the corrective plan calls 01/04/05 impact candidates. It also says 17/17 is not historically re-derivable, then infers the earlier result | Attribute each fact to its source: corrective plan = proposed impact candidates; sync ledger = citation map/current recorded verification state; hosted artifact = unread. Treat 16/17 as contemporaneously recorded evidence, not independently reproduced history. Success: no source is credited with a claim it does not itself record | Accept with wording correction |

### Views and cross-reference disposition

- **Storyboard/story panels:** existing historical Mermaid sequence/flow diagrams are valid evidence
  of the documented T5→T6 model, not target-order authority. Keep them unchanged and cite them in
  the application impact review.
- **UML and target progress/report views:** remain deferred under R159/R160; absence is deliberate,
  not completion.
- **Data flow:** preserve the four outcomes—pre-join incomplete, post-join evidence incomplete,
  negative final judgment, positive judgment then separately evidenced Delivery.
- **Encyclopedia:** the URL exists; verification requires reading the hosted artifact. The local
  ledger alone cannot assert hosted synchronization.

### What you did instead

Reviewed and recorded draft corrections only. No corrective-plan, Register, source, Product,
Fn_Spec, SPECS, graph fragment, application, migration, or lane-state change. No commit or push.
B-071 remains Open and is its own closure record. Graph extraction is current at `240e5e2` for the
base of this uncommitted draft; semantic enrichment remains pending. A commit would move HEAD and
requires a fresh currency assessment by Lane A before consuming approval.

| Decision | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Corrected Round 43 IDs, artifact acknowledgements, Reading-B framing and separated application checkpoints | Phase 1 drafting evidence |
| Approve-with-conditions | Round 43 findings R187–R193 | Phase 1: apply the authorization-sequence, Graphify and source-attribution corrections above |
| Defer | Unit 7, Units 1/2 and graph application | Phase 1: recorded bounded authorization before each selected dependent unit |
| Reject | Task 1d's post-application “real Register entry” sequence | Register/authorization tier: authorization cannot be supplied retroactively |
| Reject | B-071 closure or build authorization inferred from this review | Handoff and build tiers remain unchanged pending application and independent verification |

## Round 45 — Lane A: applying Round 44's corrections and drafting the D-189 text it calls for

**Evidence:** direct read of Round 44 (`B-071.md:7040-7094`); `docs/README.md` §"How a request
becomes execution" (`docs/README.md:82-98` — the six-stage map: decision/authorization is its own
stage, preceding execution); `docs/ENCYCLOPEDIA-SYNC.md` and corrective-plan §16.8 re-read for
attribution; `graphify check-update` output already on record this session; re-ran `bun run check`
(17/17); re-enumerated `B071-R\d+` (max still `R193` — Round 44 used its own row numbers, not this
file's ID series). Independent of Round 44 — Lane A did not draft it. Continuing this existing
Phase-1 spec-defect; the canonical header remains Open. No Resolution, no application, no Register
edit; this round applies nothing to a governed tier.

### What happened

Round 44's four points are verified and accepted; its two parent-level findings identify a genuine
structural error in Round 43's task list: task 1d filed the "real Register entry" *after* Unit 7
and Units 1/2 were applied, when `docs/README.md`'s own execution map requires the decision/
authorization stage to precede execution, not follow it. That is fixed below by adopting Round 44's
full sequence directly, and by drafting — not recording — the exact bounded D-189 text its model
calls for ("Lane A drafts the exact bounded D-189 record").

One further gap: the paraphrase of Round 44 presented outside this file compresses "Judge
amends/records authorization selecting Units 1/2 only after the readiness evidence" — an explicit
Judge act, separate or combined per Round 44's own text — into "Units 1/2 when their recorded
conditions are satisfied," which reads as automatic once conditions are met, naming no act at all.
That is the same shape as the earlier "proposed `D-189`" → "`D-189`" drop (`B071-R187`). Recorded
as `B071-R194` below.

### Verification of Round 44's claims

| Claim | Checked how | Result |
|---|---|---|
| Point 1 — D-189/authorization sequencing is backwards in task 1d | Re-read Round 43's task list (this file) against `docs/README.md:92-98`'s "Decision and authorization" stage, which precedes "Execution" | **Confirmed.** Task 1d placed the Register entry last. Corrected below |
| Point 2 — the application tree needs the full parent-first sequence, explicit authorization per selected unit | Compared against `D-183`'s bounded-act requirement and `B071-R191`/`R193` | **Confirmed and adopted directly.** Each selected unit requires explicit authorization; one act may cover multiple named units while preserving their dependency conditions — refined by `B071-R194`, not a strict one-act-per-unit rule |
| Point 3 — "no durable fix available in this environment" (Graphify) is unsupported | Re-checked the `graphify check-update` output already on record: *"Fill the batch-*.json / communities.json files and re-run `graphify update` to ingest"* | **Confirmed.** That is an actionable local step, not "no fix." What remains true is narrower: it is not durable/committable evidence (`.graphify/` is gitignored, per `B-077`). Wording corrected below |
| Point 4 — attribution precision (corrective plan vs. sync ledger vs. hosted artifact; "16/17" as contemporaneous, not re-derived) | Re-read `docs/ENCYCLOPEDIA-SYNC.md` (Entry 05 carries an explicit `stale: D-168 affects this entry` marker) and corrective-plan §16.8 (frames Entries 01/04/05 as "unverified impact-review candidates") | **Confirmed.** These are three distinct facts from three distinct sources; this round's prior wording blurred them. Corrected below |
| The outside paraphrase's "Units 1/2 when their recorded conditions are satisfied" | Compared against Round 44's actual text, `B-071.md:7063` | **Drift confirmed** — drops the required authorization act, separate or combined. See `B071-R194` |

### Finding

| ID | Gap | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B071-R194` — a paraphrase of Round 44 drops the requirement for *any* explicit Units-1/2 authorization act | Round 44 (`B-071.md:7063`) requires the Judge to record authorization "selecting Units 1/2" — by its own act, **or** by one combined act that "explicitly names both scopes and preserves their dependency condition." Either way, an explicit naming act is required. A summary circulating outside this file compressed this to "when their recorded conditions are satisfied," naming no act at all | A reader treats satisfied conditions alone as sufficient, with no Judge act at all — readiness never supplies missing authority, combined or separate | **Narrowed from this finding's first draft, which required separateness Round 44 does not** (Round 46). Any future citation must keep an explicit authorization act — separate or combined — not conditions alone |

### Corrected parent-first task list — supersedes the prior task list in full

1. **Parent — Judge decides the complete corrected wording.** The four Round 42 corrections
   (readiness-gate clause replacing §16.7 item (3); occurrence-scoped `R148` DoD; §16.4's `R152`
   graph-contract wording; the item-by-item Register-entry-template approach), citing Reading B
   (`B071-R190`) for Row 1. **Text only — authorizes no application.**
2. **Child — Lane A drafts the exact bounded D-189 record.** Done this round; see the proposed text
   below. Not recorded — drafting is not authorization.
3. **Child, depends on 2 — the Judge authorizes; Lane A records D-189**, selecting Unit 7 only.
4. **Child, depends on 3 — apply Unit 7** (§16.5a's three blocks into
   `v1-build-readiness-addendum.md`, `blueprint.md`, `business-case.md`) **and independently verify
   the exact insertions** (a non-applying actor).
5. **Child, depends on 4's evidence — after Unit 7's verified evidence exists, the Judge may
   authorize Units 1/2; Lane A records that further authorization before application.** Step 3's
   act is fixed as Unit-7-only (the Proposed D-189 text below, "Excludes Units 1/2... entirely") and
   grants no downstream authority — so this is necessarily its own further act, not "combined with
   step 3." (Round 44's combined-act allowance remains available in principle for a *different,
   not-yet-drafted* packet that named both scopes from the start; it does not apply retroactively to
   step 3 once step 3 is drafted this narrowly.) Readiness alone is never itself the authorization
   (`B071-R194`, narrowed).
6. **Child, depends on 5 — apply Units 1/2 and independently verify.**
7. **Parallel to 3–6, once item 1 exists — the `R152` graph contract, split per the corrective
   plan's own distinction (§16.4):**
   - **7a. Plan-text correction.** Drop the retired `owns` instruction from the execution paragraph;
     resolve concrete `T5`/`EG5` graph IDs by source/subject on paper. Drafting only — no fragment
     file, no rebuild.
   - **7b. Execution.** Write the fragment file and run the rebuild. Explicitly **excluded** from
     the Unit-7-only D-189 draft below; needs its own named authorization, not inherited from 7a or
     from Unit 7's.
8. **Evidence, per item, not bundled — record each disposition as soon as its own evidence exists,
   not gated on the others:** Unit 7's disposition right after step 4; Units 1/2's right after step
   6, whenever that authorization exists; the graph contract's right after 7b, whenever that
   authorization exists. **B-071's overall closure is a separate, later item** requiring every
   relevant item dispositioned, not just Unit 7's — this act covers Unit 7 alone.

### Proposed D-189 text — drafted, not recorded (Round 44's step 2)

The Judge authorizes; Lane A records the act once given. This is the draft Lane A owes under
Round 44's model, covering steps 1–3 above — kept strictly Unit-7-only; the combined-act
alternative is explained after it, not inside the quoted text itself:

> **Judge Approved (draft — not yet recorded):** Accepts the four corrections in Round 42's decision
> tree (`B-071.md:6876-6879` — the readiness-gate clause, the occurrence-scoped `R148` rename DoD,
> the `R152` graph-contract wording, and the Register-entry-template approach), as refined by the
> later review findings `B071-R187`–`R193`. **Revision: pending** — this draft cannot name the
> immutable commit until Rounds 43–47 are actually committed; recording this act requires that
> commit to exist first, not `240e5e2`, which predates them. Authorizes application of **Unit 7
> only**: §16.5a's three annotation blocks into `v1-build-readiness-addendum.md`, `blueprint.md`,
> `business-case.md`, exactly as drafted, pending independent verification of the exact insertions.
> **Excludes** Units 1/2 and `R152` graph-fragment execution (step 7b) entirely — neither is
> authorized by this act. **`D-171` remains unchanged** — this act authorizes only the three named
> documentation edits; Unit 7 is textual disclosure, not build or gate-order execution, so nothing
> about `D-171`'s S2 hold is touched. Tier applicability: the three named source files and this
> Register entry; `Modular_PRD.md`, `V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, Phase Closure —
> unaffected by this act alone.

*Not part of the act above, stated separately:* Units 1/2's and the graph contract's later
authorizations may each be their own act, or, per Round 44, combined with a future act if that act
explicitly names both scopes and preserves the dependency on this act's evidence. This act itself
stays Unit-7-only regardless of which path is later chosen.

### Cross-reference disposition — adds data flow to Round 44's set

- **Storyboard/story panels, UML, Encyclopedia:** unchanged from Round 44.
- **Data flow:** preserve the four outcomes Round 44 names — pre-join incomplete, post-join evidence
  incomplete, negative final judgment, positive judgment then separately evidenced Delivery. Not
  re-derived here; carried forward as Round 44 stated it.

### What you did instead

Lane A verified Round 44's four points, adopted its sequence and precision corrections, recorded
one further finding (`B071-R194`) about a paraphrase drift, and drafted (not recorded) the D-189
text Round 44's model calls for. It did not edit `V1-DECISION-REGISTER.md`, `V1-B071-CORRECTIVE-PLAN.md`,
or any governed tier; did not apply Unit 7, Units 1/2, or the `R152` graph correction; did not move
lane state; and did not commit or push.

## Round 46 — Lane A: narrowing R194 and fixing the D-189 draft against Round 44's actual text

**Evidence:** re-read of `B-071.md:7063` (Round 44's exact "combine acts only if..." clause);
`V1-DECISION-REGISTER.md` §5.14dx/§5.14dy (`D-171`'s actual scope — an S2 *build* hold, unaffected
by documentation-only edits); Round 42's decision tree re-located at `B-071.md:6876-6879`. Continuing
this Phase-1 spec-defect; no Resolution, no application, no governed-tier edit.

Four corrections were checked and applied in place, all confirmed against source rather than taken
on assertion: (1) `B071-R194` overclaimed that Units 1/2 need a *separate* authorization act —
Round 44 explicitly allows one combined act if it names both scopes and preserves the dependency;
narrowed to its valid core (some explicit act is required, not conditions alone). (2) The drafted
D-189 text wrongly said `D-171` was "narrowed" by Unit 7 — `D-171` is an S2 build hold; Unit 7 is
documentation-only and never touches it, so `D-171` is correctly **unchanged**, not narrowed. (3)
The draft conflated Round 42's four actual corrections (its own table, `B-071.md:6876-6879`) with
`B071-R187`–`R193` (this file's later review findings *about* them) — now cited separately. (4)
Task-list step 7 mixed the corrective plan's own drafted/execution split for `R152` — now 7a
(plan-text, drafting only) and 7b (fragment file + rebuild, excluded from the Unit-7-only draft).
One clarification adopted as stated: the Judge authorizes; Lane A records the act into the Register
once it exists — nobody needs to hand-edit `V1-DECISION-REGISTER.md` themselves.

### What you did instead

Corrected `B071-R194`, the task list, and the D-189 draft in place — all still uncommitted, so
in-place correction rather than an appended notice. No governed tier touched; no commit or push.
This round remains an uncommitted local addition, pending review and a commit decision.

### Approve / reject

| Decision | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Round 44's sequencing correction (D-189 before application) and full parent-first tree | Adopted in the corrected task list |
| Approve | This turn's four corrections (`R194` narrowed; `D-171` language; correction-set citation; `R152` drafted/execution split) | Applied in place above |
| Approve-with-conditions | The corrected drafted D-189 text | Phase 1: Judge reviews and records at the actual post-commit revision, not `240e5e2` |
| Defer | Task-list steps 3–8 (all recording, application, execution and verification acts) | Phase 1: each waits on its own named predecessor, separate or combined per Round 44; none authorized by this round |
| Reject | Treating "Judge Approved: follow decision-tree decision" as the bounded act itself | Still names no object/revision/scope/exclusions per `D-183`; the drafted D-189 text above is what such an act would need to say |
| Defer | The `B-072`→`B-077` governance thread's open Children 2–5 | Unchanged, out of this session's scope by request |

## Round 47 — Lane A: reconciling Round 45's stale wording against Round 46's own corrections

**Evidence:** exact re-read of Round 45 (`B-071.md:7095-7200` before this pass) against Round 44's
literal text (`B-071.md:7063`) and `V1-DECISION-REGISTER.md` §5.14dx/dy for `D-171`. Six confirmed
inconsistencies, all wording-only, fixed in place across two passes on the same reconciliation
(not restarted as a second review round — a follow-up check swept for any remaining instances of
the same phrase class and found exactly two, both fixed here): (1) Round 45's "What happened" and
verification table still called Units 1/2's authorization "a **separate**" act after `B071-R194`
had already been narrowed to allow combination — corrected to "an explicit act, separate or
combined." (2) The D-189 draft mixed its Unit-7-only scope with the combined-act alternative
*inside* the quoted "Judge Approved" text — moved the alternative outside the quote; the quoted act
itself is now unconditionally Unit-7-only. (3) Steps 3 and 5, and the draft's own intro line, still
said "the Judge records" after Round 46 established "the Judge authorizes; Lane A records" — all
three corrected. (4) Step 8 gated Unit 7's own evidence recording on Units 1/2 and graph work also
completing, contradicting the item-by-item disposition principle Round 42's own Row 4 fix
established — split into per-item recording, with B-071's overall closure named as a separate,
later, unreached item. (5) The verification table's Point 2 row still said "one authorization act
per selected unit" / "each needing their own act" — corrected to match `B071-R194`'s actual, already
-narrowed rule. (6) Step 5 said the future Units-1/2 authorization "may be... combined with step 3"
— self-contradictory once (2) fixed step 3 to be strictly, narrowly Unit-7-only; corrected to state
Units 1/2's authorization is necessarily its own further act given step 3's actual drafted scope,
with Round 44's combined-act allowance noted as available only to a differently-scoped, not-yet-
drafted packet, not retroactively to step 3.

### The parent-first path to authorize Unit 7, isolated from downstream work

1. **Judge decides the four corrected wordings** (task-list step 1) — text only.
2. **Lane A drafts D-189** (step 2) — done; see the corrected proposed text above.
3. **Judge authorizes; Lane A records D-189, Unit 7 only** (step 3).
4. **Apply Unit 7's three blocks; independently verify** (step 4).
5. **Record Unit 7's disposition** (step 8, Unit-7 portion) — immediately, not gated on Units 1/2
   or graph work.

Steps 5–7 (Units 1/2's own authorization and application, the graph contract) and B-071's overall
closure are none of them reached by this path — each stays its own later item, separate or combined
per Round 44, but never inherited from Unit 7's authorization.

### What you did instead

Reconciled Round 45's stale wording against Round 46's own already-correct conclusions — no new
substantive finding, the consistency fixes documented above, all in place since nothing is
committed. No governed tier touched; no commit or push.

### Approve / reject

| Decision | Tier / item | Follow-up phase |
|---|---|---|
| Approve | The wording corrections documented above (R194 phrasing, clean D-189 quote, Judge-authorizes/Lane-A-records terminology, per-item evidence, Point-2 phrasing, step 5's further-act framing, this citation fix) | Applied in place |
| Approve-with-conditions | The isolated Unit-7-only path (steps 1–4, then Unit 7's own disposition) | Phase 1: Judge review of the exact drafted D-189 text |
| Defer | Units 1/2, graph-contract execution, B-071 overall closure | Each its own later item, not reached by this path |
| Reject | Treating this reconciliation pass as execution permission | Still no bounded `D-183` act exists; nothing applied or committed |

## Round 48 — Lane A: Unit 7 authorized, recorded and applied

**Judge authorization received directly, 2026-09-04** — naming "the Unit-7-only packet" (the
drafted D-189 text above) as approved and instructing Lane A to update the corresponding source of
truth. Unlike every prior "Judge Approved: follow the direction/decision-tree" occurrence in this
file (all correctly treated as insufficient under `D-183`), this instance named a specific,
already-fully-bounded object directly, not through a third-party analysis block.

**What actually happened, in order** — corrected after independent review found this round's first
draft mis-stated the sequence:

The Judge's direct authorization ("the Unit-7-only packet... update the corresponding source of
truth") was received before any of the following edits were made — that is what makes this a
bounded act under `D-183`, not the order of the edits themselves. Within that authorized pass, the
actual edit order was:

1. **Unit 7's annotations applied first** — the exact §16.5a text inserted verbatim after the
   existing `T6` row/summary row in `docs/source/v1-build-readiness-addendum.md` (after line 165),
   `docs/source/blueprint.md` (after line 268), and `docs/source/business-case.md` (after line 107).
   Each existing row read and confirmed byte-unchanged before insertion; no other line in any of the
   three files was touched.
2. **`D-189` recorded second**, in `V1-DECISION-REGISTER.md` §5.14e14 — Unit 7 only; Units 1/2 and
   `R152` graph execution explicitly excluded; `D-171` explicitly unaffected.

This round's first draft described the opposite order (D-189 first, application second) —
inaccurate narration of Lane A's own tool sequence, corrected here. Nothing was committed at either
point, so no durable or shared state ever reflected application without authorization; this is a
correction to this record's accuracy, not to what was authorized.

**What was not touched:** `V1-B071-CORRECTIVE-PLAN.md` itself (the "Unit-7-only packet" approved is
the D-189 authorization text, not a rewrite of the corrective plan's own §16.7/§16.4 wording — that
remains a separate, not-yet-authorized item, and §16.7's self-contradictory clause `B071-R188`
pinpointed is still present, unfixed); Units 1/2; the `R152` graph fragment; `Modular_PRD.md`;
`V1-BUILD-SPEC.md`; lane state.

**Current status — working-tree application, not yet `Applied`.** Per this repository's own
template, `Applied` means corrected in the tree **at a named commit**. Nothing here is committed
yet, so that status does not formally attach until it is; `4e1d7bb` is the reviewed source revision
this authorization is grounded on, not evidence of this application, since it does not contain
these annotations. Once committed, Lane A may record `Applied` against that commit; independent
`Verified` status is a separate, later act only a non-applying actor may record (`D-101`, `D-102`).
Evidence for this working-tree state: `V1-DECISION-REGISTER.md` §5.14e14; the three annotated
files; corrective-plan §16.5a (source text, verbatim); `B-071.md:7166-7192`.

**B-071 remains `Open`.** Unit 7's disposition is described here in prose, not as a reserved
whole-entry `Resolution:` field, so it is not miscounted as a second Applied handoff separate from
B-071's own canonical `Status: Open` header. Units 1/2, `R152` execution, and overall closure are
unaffected and unreached.

### Approve / reject

| Decision | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `D-189` recorded; Unit 7's annotations present in the working tree, exactly as drafted | Commit, then independent verification of that commit |
| Reject | Treating working-tree presence as `Applied`, `Verified`, or B-071 closure; treating `4e1d7bb` as application evidence | Formal `Applied` needs a named commit; `Verified` needs a non-applying actor and that commit |
| Defer | Units 1/2, `R152` graph execution, corrective-plan §16.7 text correction, overall B-071 closure | Each its own separate, not-yet-authorized item |
