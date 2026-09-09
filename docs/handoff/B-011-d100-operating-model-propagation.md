# B-011 — D-100 changes the operating model without changing the instructions that execute it

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** reliable Lane A/B/C coordination and V1 phase closure
- **Status:** Answered
- **Lane A:** **Answered `D-101`, 2026-08-24 — every child defect stands, and item 4 is a `D-54` violation Lane A committed.** `D-100` changed the sequence and the meaning of a handoff and then marked the Build Spec and agent files *unaffected*. That is the propagation rule broken by the pass that invoked it. **Your recommended model is adopted as written**: exactly one lane is `Active` at a time — **the one-desktop, one-agent constraint remains and is now stated explicitly** — the others are `Eligible` rather than queued behind a gate, and the Chief Editor selects the Active lane at each Sprint boundary. States are `Active` | `Eligible` | `Blocked` | `Done`. **Propagated in one pass**: the shared core in all three rule files, `V1-BUILD-SPEC.md` §2, and `V1-PHASE-CLOSURE.md` §5. **Child 1 — "Open" was ambiguous.** Fixed by the four states; §5 is the only place live state lives, and the rule files now say so rather than carrying `1 — now` / `2 — next`. **Child 2 and 5 — response versus closure.** Adopted. Five fields (`Resolution`, `Evidence`, `Verified-At-Commit`, `Follow-up-Tier`, `Superseded-By`) and check 13 `closure-readiness`, which **derives the matrix from the entries — no second backlog file**, per your repair item 6. **All twelve entries now carry a closure state**; `B-004` and `B-008` are `Superseded` with the decision named, `B-009` is `Verified` with the naming half recorded as still open. **Child 3 — Scrum needs a measurable boundary.** Condition 5 is `V1-PHASE-CLOSURE.md` §1; a closure now requires every blocking entry to be terminal, and **the backlog need not be empty**. **Child 4 — the propagation record is corrected**, and `D-101`'s own tier table names build spec and agent files as affected. **Your "stop and wait" contradiction is resolved rather than chosen between**: `D-86` generalised a *blocking dependency* into a rule about every handoff. It is now per-entry — a blocking entry stops that item, a non-blocking one goes to the backlog and work continues. **One thing I did not do and will not**: install a check that fails when the register and a rule file disagree about lane state. **The rule files no longer carry lane state**, so there is nothing to disagree with — removing the duplicate is stronger than checking it (`G55`). Your fixture 5's second half **is** installed: an unverified blocking handoff now fails phase closure. **— Corrected 2026-08-24 (`D-104`).** Two claims above were true when written and are not now, and they are left standing rather than edited because an answer is an append-only record of what was said then. **`B-009` is `Applied`, not `Verified`** — `D-102` found that `Verified` was being written by the side that wrote the fix, and moved ten entries including that one. **The closure fields named above are not the whole set**: `Verified-By` was added by `D-102`, which is the same omission this entry originally reported. **Both are the class `D-104` records: a present-tense claim about another entry ages without notice.**
- **Resolution:** Applied
- **Examined-By:** Lane B — **REJECTED**; `B-023` was superseded by `D-108`, and the 2026-08-29 review in `B-033` identifies the surviving propagation defect
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** Core hash re-synced across three rule files; `V1-BUILD-SPEC.md` §2 restated; `V1-PHASE-CLOSURE.md` §5 is the single source of lane state; check 13 installed and negative-tested
- **Verified-At-Commit:** 983f058

## Parent defect

`D-100` rules that the project operates as a continuous Scrum cycle, withdraws strict phase
serialization, and opens Phases 2 and 3. The documents and agent instructions that execute the
work still state the opposite:

- `AGENTS.md`, `CLAUDE.md`, and `.agents/rules/graphify.md` say the three agents work
  **sequentially, one at a time, in a fixed phase order**, with Lane A "1 — now" and Lane B
  "2 — next";
- `V1-BUILD-SPEC.md` §2 presents a strict A → B → C sequence and says **Phase 1 is current**;
- the same shared core says an out-of-lane dependency makes Lane B stop and wait, while
  `docs/handoff/README.md` now says feedback normally enters the backlog and work carries on; and
- `D-100` declares all of those tiers unaffected even though it changes the sequence and the
  meaning of a handoff.

The register wins under `D-58`, but Lane B's own instructions say governance reaches Lane B as a
flag and that Lane B is not expected to read the register. No updated instruction or flag carries
`D-100` to the executing agent. A human Judge can approve the operating model; that approval does
not alter the institutional mechanism until the mechanism's instructions change.

## Child defects produced by the parent

1. **"Open" is ambiguous.** It could mean eligible to take work, actively executing, or permitted
   to execute concurrently. Those meanings are operationally different when the same corpus still
   requires one desktop app and one lane at a time.
2. **Backlog disposition is treated as completion.** Check 10 proves that Lane A looked at an
   entry; it does not prove the defect was corrected or verified. `D-100` nevertheless uses "all
   answered" as evidence that the backlog is clear and Phase 1 condition 2 is met.
3. **Phase 1 has no stable Scrum exit.** `D-99` says it closes when the feedback cycle is quiet;
   `D-100` says a full backlog is healthy and work is continuous. Without a timeboxed boundary and
   severity rule, "quiet" is neither observable nor compatible with Scrum.
4. **The propagation record defeats `D-54`.** A decision that changes sequence or retires a
   control must propagate through the register, Build Spec, inventory when artifacts change, and
   the executing rules. Marking the Build Spec and agent files "unaffected" leaves two operative
   models in force.
5. **There is no closure state for the handoff set.** The channel records `Open`, `Answered`, or
   `Withdrawn`, and check 10 deliberately tests only whether Lane A has seen an entry. It cannot
   distinguish an answer from an applied correction, a verified correction, a later superseding
   decision, or a reopened defect. The current twelve-file set demonstrates the gap: `B-008`'s
   `D-96` disposition was advanced by `D-99`, `B-009` still describes a proposal awaiting the
   Judge after `D-97` decided the shape, and `B-010` depends on `D-100`, which this entry disputes.

## Guaranteed failure chain

If Lane B follows `AGENTS.md`, it waits for the fixed Phase 1 → Phase 2 boundary. If it follows
`D-100`, it resumes S0. Either action violates an operative instruction. Lane C faces the same
choice. Because check 10 accepts an acknowledged or answered entry without verifying correction,
the repository can then report a clear backlog and approach phase closure while this contradiction
remains live. This is deterministic instruction conflict, not a probabilistic risk.

## Required repair, parent first

1. **Define one executable operating model.** Recommended minimal form: all three lane backlogs
   may be open, but only one lane is **Active** at a time; the Chief Editor selects the active lane
   at each Sprint boundary. Replace overloaded phase status with `Eligible`, `Active`, `Blocked`,
   and `Done`, or define equally precise alternatives.
2. **Propagate that model in one Lane A pass.** Update the shared core in all three rule files,
   `V1-BUILD-SPEC.md` §2, `V1-PHASE-CLOSURE.md`, and the `D-100` tier-applicability record. State
   explicitly whether the one-desktop/one-agent-at-a-time constraint remains.
3. **Separate feedback receipt from defect closure.** Handoff status must distinguish at least
   `Acknowledged`, `Answered`, and `Verified` (or an explicit `Deferred` with owner and follow-up
   sprint). Check 10 may continue to test receipt, but phase closure must test the closure state of
   every blocking item.
4. **Give Scrum a measurable V1 boundary.** At Sprint Review, Phase 1 may close only when the V1
   Definition of Done is met, no closure-blocking handoff remains unverified, every deferred item
   names its later sprint/tier, and the Judge records Accept / Reject / Defer. The backlog need not
   be empty.
5. **Negative-test the conflict.** A fixture where the register opens Lane B while an agent rule
   says Lane A is current must fail. A fixture where a blocking handoff is merely acknowledged or
   answered but not verified must also fail phase closure.
6. **Generate a closure view from the handoff files.** Do not create a second hand-maintained
   backlog. Extend the handoff schema with `Resolution`, `Evidence`, `Verified-By`,
   `Verified-At-Commit`, `Follow-up-Tier`, and `Superseded-By` as applicable, then make the check
   derive a current matrix from those fields. At a Judge boundary, pin the generated matrix and
   reviewed commit in `V1-PHASE-CLOSURE.md`; the individual handoff files remain the source of
   truth.

## Success evidence

- one operating model appears identically in the register, Build Spec, phase record, and three
  agent rule files;
- exactly one lane can be identified as Active without reading prose from multiple tiers;
- `bun run check` fails on contradictory lane state and on an unverified blocking handoff;
- the derived closure view classifies every handoff as `Verified`, `Deferred` with a named return
  path, `Withdrawn` with rationale, `Superseded`, or still `Open` — never merely `Answered`;
- the checks pass after the fixtures are repaired; and
- Graphify is rebuilt and reports the corrected model without both "strict fixed order" and
  "continuous concurrent phases" as current instructions.

## What Lane B did instead

Performed no implementation and changed no governing or build artifact. Recorded the conflict and
stopped at the implementation-plan boundary.

---

## Verification review — 2026-08-29

**Keep `Applied`.** The closure controls and single-active rule are present, but `D-108` did
not reach every derived instruction. The shared-core triple and `V1-BUILD-SPEC.md` §2 still say
non-active lanes are `Eligible` while another lane is `Active`; the register and phase record
say they are `Blocked` until the lock is free.

**Draft owner fix — Lane A, parent first:** amend `D-108`'s tier-applicability record, then update
`V1-BUILD-SPEC.md` §2 and the shared-core triple together. `V1-PHASE-CLOSURE.md` is already
correct. The Artifact Inventory and `Modular_PRD` are unaffected.

## Consolidated C-26 review handback — 2026-09-09

### What happened — scope, source and completion boundary

**Task restated:** review Lane A's D-212 handover, identify which Applied handoffs can be
independently reviewed and which still need correction or evidence, and draft one parent-first
follow-up using the existing channel. **Plan only; no bulk verification or implementation.**

**Reviewed source:** `fa50acf39920e1554a06a1c7b21a98ae4c545a7a`. All the Applied entries listed
below were read, with their successor decisions and relevant source/checker references. The
supplied report is a claim to test, not authority to promote its examples. This appendix is a
dated review packet in B-011's existing response-versus-closure scope; it is **not another live
dashboard, condition or SOP**. Each entry remains its own lifecycle authority. B-071 remains
Answered/Deferred under D-212; its product work is not reopened by this review.

**What is confirmed:** the baseline tree was clean; local HEAD and a fresh remote query both
named the reviewed commit; the local suite passed **17/17**. The generated queue contained
**20 Applied entries, all Phase 1 and raised by Lane B**, and no Open or missing-Resolution
entries. These are dated observations, not fixed targets to copy into another policy file.

**The handover already exists.** `docs/LANE-B-WORK-ORDER.md` §2.3 (`:248–300`) explicitly directs
Lane B to review its Applied entries and explains how. B-071 Round 52 (`:7700–7701`, `:7730`) also
routes B-086 and B-061 separately to Lane B. The report's claim that no Lane B item exists is
therefore false. The useful correction is **selecting and completing bounded reviews from that
existing queue**, not inventing a second queue or another C-26 condition.

**Closure predicate:** Phase Closure §1 condition 2 requires every applicable, phase-scoped
handoff to have a valid terminal disposition; Applied is not terminal and turn-reports are
exempt by kind. `applied 0` alone is insufficient if an Open/missing/invalid disposition remains;
global `applied 0` is not a rule for unrelated phases. Valid deferral, withdrawal or supersession
also remains possible with its required owner/reason, never merely to reduce a count. Meeting
condition 2 does not establish the manifest, separate-turn critic pass, Judge acceptance or
sprint-completeness conditions. No S2 or lane-transition authority follows from queue cleanup.

### What Lane A needs — decision table, parent before child

| Order / dependency | Bounded action | Accept / Reject test |
|---|---|---|
| **Parent: existing C-26 / work order §2.3** | Select an immutable review revision and the applicable entries; map each original criterion to the current successor decision before reviewing | Accept criterion-by-criterion evidence. Reject treating Applied as either proof of completion or proof that only a signature remains |
| **Independent review branch: Lane B** | Start with reviewable source corrections below; record unmet criteria, required evidence and the next owner. Use the existing failure-routing rule; do not re-file an already recorded gap | Accept only the scope actually inspected. A recognized verifier name and an existing SHA are necessary metadata, not proof that the correction works |
| **Source-correction branch: Cowork** | Repair the surviving Build Spec directive; reconcile stale audit criteria and the B-071 disposition anchor; complete the C-42(b) discovery contract and the relevant product-source packets | Accept literal consumer corrections and actual application evidence. Reject another Register-only completion claim |
| **Tooling branch: Code** | C-42 **part (b)** remains the first newly implemented governance-control unit per D-212, after its source contract is complete. Preserve D-204/C-39's independent prerequisites and C-35's explicit C-39-fixture dependency | Accept scoped implementation/fixtures under a covering act. Part (a) stays open; parts are not new IDs. This ordering does not suspend independent Lane B document reviews |
| **At the selected review boundary** | Reconcile source/view impacts, synchronize the relevant settled source, and perform the required independent evidence passes | Accept claims tied to the consumed revision. C-38 fixes its range when its Lane A critic pass starts; later acts get another pass, not a moving DoD |

### Batch scope — a review checklist, not twenty promised closures

The labels below describe **review readiness only**, not replacement lifecycle values. None
of these entries is promoted by this appendix. Read each originating file for its complete
criteria and existing failure record; the table gives the next discriminating question.

| Entry | Review readiness / next required evidence |
|---|---|
| **B-011** | **Source repair remains.** Review the accepted D-156 nomination model, not the superseded D-108 rejection above. Build Spec §2 still contains the withdrawn A-channel activation tail identified below |
| **B-014** | **Environment evidence remains.** Canonical skill presence and duplicate detection are inspectable; the import cause is expressly unremoved (`B-014:66–72`). The environment owner must demonstrate prevention or obtain a truthful residual disposition |
| **B-015** | **Bounded Phase 1 review available.** Check the failure semantics and exact-string handoff. Reconcile its old whole-parent verdict with B-016/C-001's existing Phase 3 deferrals; do not make live protected-branch work a new Phase 1 requirement |
| **B-021** | **Implementation/residual disposition remains.** Diagnostics and serialized-use instructions do not satisfy its original concurrency-safety criteria (`:62–67`; D-139). Isolation/locking and interruption evidence cannot be replaced by a signature; do not run concurrent fixtures in this shared tree |
| **B-033** | **Current-model review available.** D-156, not the old rejection text, governs one Active and at most one nominated Eligible. Verify actual transition cases and graph scope; source inspection is not execution of those fixtures |
| **B-041** | **Local graph evidence remains.** Review D-118/D-137's actual portability scope, curated content and pending ingestion. Gitignored runtime absolute paths alone are not a defect; a current branch record alone does not prove semantics/portability |
| **B-050** | **Accepted-scope reconciliation needed.** D-122 accepted diagnostic/procedure containment and expressly declined a nondeterministic fixture. Reconcile that with the original prevent-reset criterion; today's healthy graph does not prove the intermittent lifecycle bug eliminated |
| **B-061** | **Successor packet remains.** Its D-204 residual (`:25`) names the actual next unit and S2 UX scoping. Q12/Q1 Phase 0 are closed; the historical held packet is not an executable next unit. Preserve D-171 |
| **B-062** | **Source normalization remains, with B-065.** Product corrections do not remove the absolute Three Lines attribution in Business Case:28, Addendum:117 and RACI §4:182. Compare those occurrences to the accepted project-control/source distinction |
| **B-065** | **Source/acceptance evidence remains.** Product SEC-06 is corrected, but Business Case:20 and Addendum:118 still claim distinct judgment from structural separation; its criteria (`:209–210`) explicitly require that normalization. Do not build assurance as the remedy |
| **B-066** | **Dependent-view completion remains.** D-57/FR-11 versus OD4 is corrected in the cited Fn_Spec, but its Encyclopedia criterion (`:188`) and B-067 dependency are not satisfied by the stale Entry 05 ledger |
| **B-067** | **Source normalization and publication/residual disposition remain.** Some control-owner repairs are present, but the same B-062/B-065 source claims still fail its F2/criterion 5 (`:105,122–123`). Finish that existing normalization before its Entry 05 publication/signoff gate (`:108,128`). G113's separate automation is not this review's prerequisite |
| **B-070** | **Narrow work-order correction review available.** Its Applied scope (`:103–107`) retires the unsafe old S2 instruction; the replacement model remains B-071's deferred/held work. Review the narrow correction without claiming that the replacement was implemented |
| **B-072** | **Substantive packet review available after criterion reconciliation.** R66/R67/R68 and B-076's corrections have application commits. The header's 'Verified-By absent' narrative conflicts with the actual D-205 disclaimer; enforcement and B-061/B-071 remain separately owned |
| **B-073** | **Source review available.** Compare `bfb77f4` and current `docs/README.md:102` to frozen-source intake criteria and the corrected independence rule. Apply D-205, not its historical absent-field wording |
| **B-074** | **Source review available.** Verify R21's historical Closed event at `56759ff`, its correction at `a2fbb21`, and B-076-R4. Historical completion is distinct from current graph currency; use current audit-field semantics |
| **B-075** | **Corrected-criteria review available.** Read `b537d66` and `a1ad545`; preserve the evidence anchor and the rejection of the impossible no-anchor/no-drafter criteria. Do not remove D-205's disclaimer to satisfy stale wording at `:138–148` |
| **B-076** | **Correction/criterion review available first within the R66–R68 packet.** R1–R5 are applied at `a1ad545`, but SC1 (`:92`) still requires no Verified-By. Identify its D-205 supersession explicitly; do not assert the literal old test passed |
| **B-084** | **Contract and view repairs remain.** FN-GATES §8 still assigns missing-subject refusal to AT-001; Addendum:520,530 assigns AT-003 and calls the correction unapplied. Required source information/non-URL handling remains open. The source knowledge graph and Encyclopedia Entry 06 also need the existing D-197 reconciliation |
| **B-086** | **Bounded source repair before Parent 1 signoff.** The Build Spec tail still prepares the withdrawn channel. Child 2 stays Superseded by D-203 and Child 3 Deferred to C-35; do not build either as a prerequisite to checking Parent 1/Child 4 |

### Concrete draft fixes — existing findings, exact distinctions

**1. Finish D-209's consumer correction; do not redo the corrected shared core.** All three
rule files now use the Register return route. `docs/v1/V1-BUILD-SPEC.md:59` does too, but then
continues: *"No A- entry is filed until readers, channel documentation, run registration and
fixtures agree"*, and calls channel widening still specified. Remove that obsolete activation
tail; retain the separate C-35 tool-crossing work. Cite D-203/D-209 and record the actual
correction. This is the existing B-011/B-086 propagation defect, not a new policy request.

**2. Preserve B-071's deferral; correct what its evidence anchor proves.** `70a685a` contains
the review text with **Status Open**. `fa50acf` is where Answered/Deferred and the Follow-up-Tier
first appear. Under D-205's observable-disposition definition, the current header anchor proves
the predecessor review, not the deferral. Proposed correction: anchor the disposition to
`fa50acf39920e1554a06a1c7b21a98ae4c545a7a`, retaining `70a685a` as earlier review provenance in
the body. Do not call it independently Verified. Normalize the two axes as **Status Answered /
Resolution Deferred**, not 'Deferred instead of Answered'. Its named return trigger and D-171
hold stand. A terminal deferral is not evidence that its previously blocking product work exists.

**3. Complete C-39's actual remaining contract, not the already decided membership.** D-209
now supplies a truthful initial raising actor. Propagate that exception into the SOP/template,
which still require the disposition disclaimer for every non-Verified record. Specify how the
raising commit exists before its mandatory anchor is validated; naming a self-referential SHA
is not an executable creation protocol. Keep required fields and commit-object validation; do
not invent an anchor or silently relax the check. Preserve Round 53's labelled-mutation coverage
and D-204 fixture repair: its existing positive case must be explicitly Open rather than the
Answered B-001 with Resolution removed. No need to re-ask actor membership or force that positive
case red. These are completion criteria for their existing owner packets, not new conditions.

**4. C-42(b): uniqueness is measured; discovery is still incomplete.** The declared heading
command and a separate unsorted occurrence check reproduce the no-duplicates observation.
However, Register §3 (`:89–100`) defines C-01–C-12 in table rows, and C-01–C-11 have no canonical
heading in the index. C-12 appears through a later decision heading. Cowork must extend the
adopted one-canonical-section rule to these existing definitions, using link-only pointers as
with C-15, and identify C-12's one canonical location. Preserve original substance and historical
closures; do not create new conditions or reopen the old ones.

For Code's proposed part (b), require **definition coverage and occurrence uniqueness**, not
only a list deduplicated with `sort -u`. Planned cases: duplicate within either file fails;
duplicate across files fails; removing the sole canonical heading while retaining its definition
fails; historical `####` references pass; a new definition without its required canonical pointer
fails without changing an expected tally. Run against the final text. Keep (a)/(b) as parts of
C-42 and the weakest-part closure rule; an enumeration test does not prove that withdrawn
instructions or missing Inventory rows were detected. No implementation is performed here.

### Critical artifacts and their construction/verification role

| Existing artifact owner | What must be complete before its consumer relies on it |
|---|---|
| Register, Build Spec and shared rules | The decided return/ownership/control contract, actual propagation and bounded authority; none substitutes for an executable product packet |
| Lane B work order / B-061 and B-070 | A current, scoped next unit with prerequisites and exclusions. A held historical example does not tell a builder what to implement |
| Product / Fn_Specs / source test rows — B-062/B-065/B-084 | Coherent behavior, source attribution and test-to-requirement mapping. B-084's AT-001/AT-003 mismatch would otherwise test the wrong obligation |
| Storyboard, story panels, UML/data flow, knowledge graph and Encyclopedia | Derived views use the actual owning behavior. The historical storyboard is not a replacement spec; B-084's source graph still says CR-14 has no FR (`:23`) although the traceability map maps FR-01 (`:141`). Entry 06's D-197 impact is not recorded in its ledger row. Correct through those existing owners, not a new diagram backlog |
| Each handoff / C-26 | Current criteria plus independent evidence of the actual correction. A populated field proves neither implementation nor the actor's review. C-38 remains the separate Lane A critic obligation |

Use D-30's redundancy test before proposing additional SPECS/UX files; UI belongs in its existing
SPECS tier and behavior in Fn_Specs. This review creates none. Module/version/sprint freeze rules
and Product §0.6.1 status ownership are unchanged. Deferred PBL work remains in its canonical
backlog; closing a V1 tracking scope does not authorize that work or require an empty backlog.

### One request to Lane B — reuse the existing work order

> Use `LANE-B-WORK-ORDER.md` §2.3 and C-26 to review the applicable Applied entries identified
> above, against a declared immutable source revision. Begin with the bounded reviewable
> corrections; within the R66–R68 packet reconcile B-076's criteria before consuming them in
> B-073/B-074/B-075/B-072. For each entry, inspect its actual correction and every applicable
> criterion after successor decisions. Record precisely what passed, failed or remains unproven
> and its next owner. Only a correction that meets its applicable whole-entry criteria may earn
> Verified; use the existing failure route and reference an existing gap instead of filing it
> again. Do not build, change lane state, release D-171, or substitute metadata for evidence.

This is a selected review request, not automatic execution of all verification tests or a
promise to close the whole batch. Runtime/external evidence and corrections remain with their
owners. A review unit may finish with a substantive rejection. The next unit need not wait for
unrelated apparatus, while mutating fixtures still require safe isolation/serialization.

### What was done instead — evidence limits and handback

- Read all named Applied entries and the relevant current consumers; no header or disposition
  was changed. The initial metadata-summary probe had a PowerShell pipeline syntax error; its
  corrected read-only form supplied the observed queue. No failed probe is counted as evidence.
- Baseline suite: **17/17 at fa50acf**; graph extraction names that same SHA and coverage reports
  no absent docs. Fresh remote confirmation succeeded after the sandbox network attempt failed.
- **Not 'graph complete':** `graphify check-update` reports pending semantic descriptions/labels.
  Both named fragment verify-only calls pass their **post-upsert candidates**, not the loaded
  graph (`merge7.js:182–183`). Direct comparison found `community`/`community_name` differences
  on `b085_external_audit_disposition_and_scaffold_notices`, `b086_d200_tool_split_bootstrap_review`
  and `m_mvp_requirements_tracking`. No other node-field differences were found for these two
  fragments. This is not a complete edge-parity claim. Cowork determines whether the changed
  community fields are intended derived overrides; Code tests the declared policy, rather than
  blindly overwriting them or claiming exact loaded parity from candidate PASS.
- Encyclopedia hosted content was not read or republished. Its ledger cannot prove publication;
  an explicit entry-specific criterion such as B-067's must be met or properly dispositioned.
  Do not convert every stale Encyclopedia row into a general build blocker.
- This review changes only this handoff appendix. No governed source, fixture, code, schema,
  graph, archive, phase or lane state changes. A handoff commit would advance HEAD beyond the
  baseline analysis; Active Lane A must resynchronize before the next consuming approval.

### Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Existing C-26 / Lane B work-order review route and D-212's bounded lifecycle progress | Phase 1: select and perform substantive per-entry reviews; preserve held/deferred product scope |
| Approve-with-conditions | Applied-entry review packet | Phase 1: use successor-corrected criteria; resolve the identified source/environment/evidence prerequisites |
| Approve-with-conditions | C-42 part (b) as the first tooling implementation unit | Phase 1 Cowork discovery contract, then authorized Code coverage/uniqueness fixtures; part (a) remains open |
| Reject | 'No Lane B queue', blanket verification-only readiness, metadata as proof, and graph-complete claim | Correct the handover's scope and evidence claims; do not repeat completed work or inflate a passing check |
| Defer | Whole-entry promotions, C-38/C-42 closure, phase closure, archive and product implementation | Existing owners, independent evidence, settled-source synchronization and separate authorizations |

## D-213 follow-up review — 2026-09-09

### What happened — scope and corrected handback

**Task restated:** independently review D-213 at
`2292f00dff9fd83254c53c7e718eebcd7ecc6cce`, withdraw any completed request, and give Lane A
the smallest executable drafting sequence for the remaining evidence-record gaps. Use the
handoff gap-analysis template as structure, not as authority to build or promote an entry.
This is a follow-up to the preceding consolidation, not a new condition, SOP or live dashboard.
No whole-entry verification, application, lane transition or product authorization is made here.

**C-12: no further act is owed.** Its sole canonical section is
`docs/v1/V1-DECISION-REGISTER.md:7078`; its §3 row (`:100`) records closure. D-213 identifies
both explicitly. **Withdraw the preceding request to identify C-12's location as further work.**
Do not add a pointer, reopen the condition or ask the Judge to decide its location again.

The following D-213 changes are confirmed by the committed diff and current source:

- Build Spec §2 no longer contains the withdrawn A-channel activation instruction; C-35 survives.
- C-01–C-11 now have canonical pointer sections without duplicating their §3 substance.
- C-42(b) specifies coverage and uniqueness with the named cases; this is a completed
  **specification change**, not an implemented check or a closed condition.
- B-071's anchor now names `fa50acf`; review provenance remains in its body. Answered/Deferred,
  the return trigger and D-171 remain unchanged. No further B-071 pin correction is requested.
- frag131 removes the derived community fields. No corpus-wide fragment rewrite is requested.

**Terms kept separate:** a *reviewed commit* identifies the evidence inspected; a *disposition
commit* records the lifecycle decision; a *pin commit* records a reference to an already-existing
commit. Committed, pushed, graph-current and independently Verified are different facts.
The C-12 disagreement is resolved; the remaining concerns below are not arguments for redoing it.

### What is still missing — existing owners, not new finding IDs

| Existing owner | Evidence and failure if followed literally | Smallest draft correction |
|---|---|---|
| **C-43 — pin referent** | `docs/handoff/README.md:364` and `TEMPLATE.md:77` tell the follow-up pin act to use **its own SHA**. That commit cannot contain its own not-yet-created identifier; the self-reference has moved to the second step | Replace with: **“The follow-up pin act records the SHA of the already-existing commit containing the disposition, never the pin act's own SHA.”** Keep earlier inspection provenance in the body |
| **C-43 — history and cut** | Register `:2482` says D-205 declared neither referent, but D-205 `:14850–14852` explicitly says “where that disposition is observable.” Separately, C-43 `:2491` classifies by disposition date, while README `:369–373` classifies by anchor-writing date. B-071 was dispositioned **before** the cut and deliberately migrated **at** the cut; those rules do not classify it consistently | Append a factual correction: D-205 stated the meaning; older practice was mixed. Describe D-213's legacy treatment as a prospective compatibility rule, not proof that no rule existed. Define migration at the cut explicitly; do not rewrite legacy entries |
| **C-39/C-43 — complete pin transaction** | README instructs the disposition act to write `— pending pin`; C-39 rejects that value at any terminal state. Current `closure-readiness.mjs:223–230` already rejects it for Verified. Applied is nonterminal, so the new terminal-only prohibition also does not establish when an Applied record must finish pinning | State the permitted intermediate, its validation result, the pin deadline and the point at which the record becomes consumable. Do not call both commits green or treat an unpinned Applied record as completed evidence |
| **C-39/C-43 — consumer propagation** | C-39 `:2648–2649` still requires every anchor to pass commit-object validation; its initial record at `:2659` requires a sentinel. TEMPLATE's copyable fields `:13–15` still describe the old actor/SHA shape. README `:382–383` and TEMPLATE `:72–73` still require Lane A's disposition disclaimer on every non-Verified entry. Work order §2.3 step 3 (`:296–297`) still directs a verifier to pin the commit **read**, which differs from the new disposition-observable rule | Amend those existing instructions together, distinguishing initial undispositioned records, dispositioned/pinned records, the intermediate pin transaction and turn reports. Adding another explanatory paragraph without fixing the copying/executing instructions repeats B-011 |

These are confirmed **text and execution-contract defects**, not claims that D-213 falsely
implemented a checker. D-213 and the Inventory correctly say the tooling remains specified.
The current checker accepts a nonempty Applied anchor without proving its existence, validates
SHA shape/existence for Verified, and does not yet implement the new buckets or sentinel policy.
A green result cannot establish the behavior of those future mechanisms.

### Draft fixes and success criteria — parent before child

**1. Cowork: settle the C-43 meaning and migration boundary.** Proposed literal meaning:

> A pin references an already-existing disposition commit. Preserve pre-cut anchors without
> rewriting them. Anchors explicitly introduced or migrated under the new protocol at or after
> `2292f00dff9fd83254c53c7e718eebcd7ecc6cce` use disposition-observable semantics; unmigrated
> legacy anchors remain labelled measured-at. B-071 is the explicit migration in the cut commit.
> Classify from the anchor's introduction/migration evidence, not the numeric/date value of its
> target SHA, the latest whole-file edit, or the original disposition date alone. Where history
> cannot establish the distinction, report that limitation rather than guessing.

Acceptance examples: unchanged B-006 remains legacy; B-071 is migrated; a later body-only
append to a legacy entry does not migrate its anchor; a later disposition/migration uses the new
meaning. Include the cut commit itself, not just “before” and “after.” This is a **proposed
clarification for approval**, not an authorized metadata sweep or a new field.

**2. Cowork: finish the C-39/C-43 transaction before Code implements it.** The pending-pin
concept can be retained, but its consumption boundary must be explicit. Recommended decision:
the intermediate is visibly unpinned and cannot satisfy completion, consuming approval or phase
closure; its immediately following pin cites the disposition commit; the completed bounded unit
is then checked. This recommendation does **not** authorize an intermediate to bypass a hook,
claim a passing suite, or remain pending indefinitely.

Write the expected result for each case before implementation:

| Case | Required clarity / success evidence |
|---|---|
| Initial undispositioned Open entry | The declared raising actor and sentinel are the valid audit shape; receipt/acknowledgement rules remain separate |
| Actual SHA anchor | Validate the referenced commit, subject to the declared legacy/prospective classification; an invented or nonexistent SHA is never accepted |
| Disposition committed but not pinned | Name whether ordinary validation fails or reports a bounded intermediate; no consuming approval treats it as complete |
| Applied still pending at handback | Refuse completed evidence; do not rely solely on the terminal-state prohibition |
| Terminal disposition still pending | Refuse terminal consumption; the pin transaction must finish before closure is earned |
| Pin finished | Its SHA resolves to the disposition evidence, not to the pin commit itself; unchanged source retains its truthful lifecycle |
| Turn report | Audit closure fields remain omitted, not populated with the sentinel |

**Transaction authority is part of this parent contract.** D-184's one-entry exception also
requires a one-commit outgoing range. A two-commit disposition/pin unit cannot silently broaden
that permission. Specify its authorized publishing route through the existing SOP or seek a
bounded range decision; do not invent a second SOP or remove a Git lock to proceed.

**3. Cowork: propagate the approved contract to its consumers, once.** Exact drafting targets:
Register C-39/C-43 and an append-only D-213 correction; handoff README's existing field and
transaction instructions; TEMPLATE's copyable fields and explanatory rules; Lane B work order
§2.3's verification instruction. Reconcile the already-existing Inventory rows and Build Spec
sequence where their facts change, explicitly marking unaffected tiers. Do not change historical
handoff anchors as a substitute for this propagation. Success: copying the template and following
the work order produces the same valid sequence the Register specifies.

**4. Code: implement independently bounded controls under their existing authorization route.**
C-42(b) retains D-212's **first implementation priority** and its named coverage/uniqueness cases;
the C-39/C-43 drafting gaps do not invalidate that independent contract. C-43 explicitly has no
technical start dependency on C-39 or C-42; C-39 and D-204's response-check correction are also
independent. Priority and serialized tool use do not create extra correctness prerequisites.

The pasted queue must not assign all of C-35–C-38/C-40 to Code or make their planning wait for
C-42(a)'s unresolved mechanism. Follow each canonical condition's owner/start/stop clauses:
C-35 retains its actual C-39 prerequisite; mixed-tool and Cowork-owned work retain their owners;
C-38 fixes its reviewed range when the pass starts. Keep C-42's weakest-part closure rule.
No condition is split or newly created by this handback.

For C-42(b), coverage is bounded to the declared definition sites. Its missing-heading fixture
must retain an independently discoverable definition, such as the §3 row; passing that fixture
does not prove discovery of arbitrary prose after its only identifying heading is deleted.
Use failure cases before repair and preserve legitimate passing controls. None is executed here.

**5. Final evidence and independent handback.** Apply authorized source/tool changes first.
Code synchronizes extraction at the final consuming revision, verifies curated content under
the derived-field policy, then completes semantic enrichment and the suite. If further commits
land after an intermediate rebuild, recheck currency; semantic fill alone is not evidence that
extraction reflects the new HEAD. Independent review follows the completed bounded packet.
The existing per-entry C-26 queue remains separate; neither C-12 nor the new tooling grants
bulk Verified, phase closure or a release of D-171.

### Artifact cross-reference and drift evidence

**Product impact is unchanged.** D-213 changes governance/audit mechanics, not editorial
behavior. Product, Fn_Specs, storyboard/story panels, UML/data-flow views and UI require no new
T5/T6 design from this review. B-071 remains deferred. Existing B-084 discrepancies remain
with that owner: FN-GATES `:215` versus Addendum's AT-003 mapping; source knowledge graph
`:23,98` versus traceability map `:141`; Encyclopedia Entry 06's D-197 ledger reconciliation.
The historical storyboard remains a dated planning artifact, not the current behavior contract.
No duplicate SPECS/UX document, diagram backlog or hosted Encyclopedia update is created here.

| Observation at review | Evidence / limit |
|---|---|
| Source committed; D-213 not yet remote | Local HEAD `2292f00`; fresh remote query returned `47f47c1`. Commit and push are not the same fact |
| Local checks | **16/17** at `2292f00`; only docs-drift failed. No mutating fixture or build was run |
| Extracted graph stale | `lastAnalyzedHead = fa50acf`, not `2292f00`; `stale: false` does not override that mismatch |
| Semantic enrichment pending | Installed Graphify `check-update` reports pending descriptions/labels. Read-only query results were not used as current D-213 authority |
| frag131's supplied node fields | Direct loaded-node comparison found no mismatch for its supplied fields after derived fields were removed. This is not complete edge parity, extraction currency or corpus-wide parity |
| Encyclopedia | Local ledger inspected; hosted content not read or republished. No new publication/verification claim |
| Git transaction blocked | `.git/index.lock` exists. Its owner was not established; no lock removed. Drafting this appendix does not authorize lock cleanup or push of Lane A's ancestor commit |

**What Lane B did instead:** drafted only this follow-up in the existing B-011 entry. No header,
resolution, governed specification, checker, graph, archive, account, phase or lane state changed.
The preceding Applied-entry table remains a dated review at its own source revision, not a live
matrix silently overwritten by this follow-up.

### Approve / reject — D-213 follow-up only

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Register C-12; completed consumer/index/B-071 pin corrections | Preserve; C-12 has no further act and no new decision owed |
| Approve-with-conditions | C-42(b) implementation plan | Phase 1 Code: existing first priority, declared-site fixtures and coverage limits; no C-42 closure from part (b) alone |
| Approve-with-conditions | C-39/C-43 corrective draft | Phase 1 Cowork: settle referent/cut and pin transaction, then propagate to actual consumers before implementation |
| Reject | Pin act's own SHA, claim D-205 declared no referent, inconsistent cutoff/field instructions | Correct in the existing owner records; preserve legacy evidence rather than sweeping entries |
| Defer | Whole-entry Verified, graph-complete claims, C-38/phase closure and product work | Authorized owner actions, final-source synchronization and independent evidence; D-171 unchanged |

## D-214 follow-up review — 2026-09-09

### What happened — successor ruling, scope and completed work

**Task restated:** review D-214 and its handover against committed source
`a5b0f94744143ccb9d69daf60507f9a4cfbb16a7`; retire superseded drafting requests and give Lane A
a short parent-first correction guide. Plan only, using the handoff template's scope, evidence,
gap, fix and acceptance structure. This existing B-011 appendix remains Lane B's feedback;
it creates neither a new handoff series nor a live status dashboard.

**Accept D-214's observed-at ruling.** The audit anchor names the commit whose content the
writer read. It does not claim that the later disposition or this review was already present in
that commit. A real anchor establishes neither independent verification nor completed application.

**The preceding pin/cut/intermediate-state recommendations are retired, not still owed.**
C-43 is explicitly closed as superseded by D-214; its former mechanism and the Inventory's
two-bucket row are withdrawn. Do not implement a sentinel, pin act, deadline, migration cut or
legacy bucket. TEMPLATE's observed-at field and work order §2.3 step 3 now agree with the
Register and need no correction. B-071's return to `70a685a` and both prior moves are recorded;
its deferral and D-171 remain intact. No further anchor move or legacy sweep is requested.
C-12 also remains settled, with no additional act.

The former “D-205 declared neither” claim is now expressly corrected in C-43's historical
notice. The notice precedes the **preserved historical body**, not every paragraph below its
heading; the current status and correction properly precede it. Correct the handover's description
if repeated; **no notice move is needed**. C-42(b)'s coverage/uniqueness specification is preserved,
and neither part's implementation or verification is inferred from D-214.

### Remaining gaps — one source correction and bounded handover corrections

| Existing scope | Confirmed gap and consequence | Draft fix / success criterion |
|---|---|---|
| **C-39 / channel consumers** | README `:386–389` still requires Lane A's disclaimer on **every non-Verified record**; TEMPLATE `:72–73` repeats it. The new SOP table `:394–399` instead gives an initial record the actual raising actor. An initial undispositioned record cannot satisfy both exact-form instructions | Remove the superseded blanket instructions, keeping the SOP table as the definition. Initial, dispositioned-but-unverified and Verified examples each resolve to their own position; turn reports remain excluded |
| **C-42(a) / evidence claim** | The attachment calls consumer-vocabulary grep **the stop condition** and requires it before every withdrawal commit. Canonical C-42(a) still specifies the broader contradiction check and negative fixture (`Register:2533–2536`); D-214 `:15586–15589` records a manual technique, not that new mandatory procedure | Describe the technique as demonstrated and the mandatory procedure as **proposed**. If adopted, put it in existing C-42(a), preserving its broader control and open status. Search results locate candidates; inspection must distinguish live instructions from history |
| **B-011 / owner and dependency handover** | The attachment's all-Code arrow chain again puts Cowork/mixed-owner work behind C-42(a). Canonical owners and prerequisites have not changed: C-39 and D-204 are independent; C-35 names C-39 fixtures, not C-42(a) | Cite the canonical condition sections for each unit. Preserve C-42(b)'s first implementation priority and serialize tool use, without inventing technical dependencies or making Code own Cowork's work |
| **B-011 / channel boundary** | D-214's handover paragraph (`Register:15606–15608`) treats using the template as necessarily filing a Lane A entry; the attachment broadens this to “any Lane A file under handoff.” README `:23–24` still correctly permits Lane A responses in B/C entries | Distinguish **format** from **channel**: no new A-NNN entry; Lane A's own turn report is its Register boundary section; Lane A may still acknowledge/answer existing B/C entries. The template can guide either permitted artifact without creating a channel |

The disclaimer conflict is a deterministic instruction conflict, **not** a claim that today's
checker already detects it. C-39's implementation is still owed: current code skips anchor
validation without Resolution, checks only nonemptiness for Applied, and checks commit shape/
existence for Verified. D-214 did not claim to install that code. Its simpler anchor rule also
does not retire C-39's existing actor-independence and nonempty-field obligations.

### Lane A guide — parent first, no new approval loop for settled policy

1. **Preserve the chosen model.** Use D-214, retain C-43's supersession/history and the current
   B-071 anchor. Do not ask the Judge to choose observed-at again. No C-12 or withdrawn pin work.
2. **Cowork: finish the existing consumer correction.** In README remove the paragraph beginning
   “On a record that is not Verified” through “worth having at all”; the table immediately below
   already supplies the rule. In TEMPLATE remove the universal “On a non-Verified record…” sentence
   and its fixed Lane A value, leaving “No explanation in either field” and the existing SOP-table
   pointer. **These are proposed literal deletions for the owner, not edits performed by Lane B.**
   Test the instruction against an initial Lane B/Lane C record, an Applied record and a Verified
   record; an initial entry must not falsely claim Lane A has dispositioned it.
3. **Cowork: correct the handover's claims and routing.** Record that the new actor table is now
   unopposed only after step 2. Narrow the channel sentence as above. If the Judge adopts a mandatory
   manual withdrawal review, specify it under C-42(a): take vocabulary from the changed consumer
   instructions, inspect all affected consumers and every match in context, record final-text
   evidence, and preserve the broader negative-fixture requirement. Do not equate a clean grep with
   semantic correctness or declare C-42 closed. A new enforcement promise needs its owner text;
   a claim that the existing owner text already contains it needs correction instead.
4. **Select existing units, rather than a new serial backlog.** C-42(b) remains Code's first
   implementation priority, subject to existing authority. C-39's complete tests follow its
   clarified field contract; D-204's status-conditioned check remains separately executable.
   C-35 waits for its named C-39 fixtures. C-36/C-40 stay Cowork's; C-37 keeps its policy/tool
   split and integrity-before-move rule; C-38 uses a separate turn and a range fixed at its start.
   These are references to the canonical owners, not a second status table. No independent unit
   is blocked merely because C-42(a)'s mechanical form remains unresolved.
5. **Verify the completed bounded work, then synchronize for its consumer.** Code proves commit
   existence at every applicable lifecycle position, preserves turn-report exclusion and the
   existing actor tests, and runs the declared negative and legitimate-positive cases. Source
   inspection here is not execution of those fixtures. After the final source/tool commits, Code
   verifies extraction currency, curated parity under the derived-field policy and semantic
   enrichment, then runs the suite. An intermediate rebuild followed by more commits is not
   final currency. Apply the existing commit/push SOP; a shared handback needs confirmed remote
   availability, while a local graph is not intrinsically unreproducible merely because a push
   has not happened. No new push permission or graph-operation authority is granted here.

**Minimal owning write set for the source correction:** handoff README and TEMPLATE, plus the
Register's accurate correction/handback under D-54. A proposed C-42(a) procedure belongs in that
same existing condition, not a new condition. Reconcile Build Spec or Inventory only if a scope,
sequence or artifact fact changes; otherwise mark them unaffected. Leave the already-correct
work order observed-at instruction and B-071 metadata alone. This packet does not perform those
owner edits or promote any handoff to Verified.

### Artifact impact, drift and actual evidence

D-214's changed-file set contains no Product, Fn_Spec, UI, storyboard/story-panel, UML/data-flow
or Encyclopedia artifact. The reported exact-field scan was reproduced: no `Verified-At-Commit`
hit outside handoffs, V1 tracking and the work order under `docs/`. This supports the narrow
audit-field scope; **it does not establish that every product or derived view is otherwise
current**. The prior B-084 and other per-entry residuals retain their own owners; this review
neither duplicates them nor conducts their whole-entry verification. Hosted Encyclopedia
content was not read or republished. No product build or new diagram/spec is needed for this fix.

| Dated observation at `a5b0f94` | What it establishes / what remains |
|---|---|
| Baseline tree clean; prior handback committed separately at `8f3b312` | Prior drafting was made durable; that alone does not verify it |
| Fresh remote query returned `47f47c1` | `2292f00`, `8f3b312`, `a5b0f94` were local-only at that observation. Do not reuse this as a live remote value after another push |
| Suite **16/17** | Only docs-drift failed; no fixture, schema, product or checker build performed |
| Graph analyzed `fa50acf`, source HEAD `a5b0f94` | Extraction is stale despite `stale: false`; read-only Graphify queries are navigation, not current-source authority |
| Graphify reports pending descriptions/labels | Semantic enrichment remains separate from extraction and coverage |
| Git lock absent when checked | The earlier lock blocker was no longer observed. This review removed no lock and does not infer who cleared it |

**What Lane B did instead:** append this review to B-011 only, preserving its header/lifecycle
and the prior reviews as dated evidence. No governed owner document, runtime graph or fixture
is changed. A new handoff commit will itself advance HEAD; final synchronization belongs to the
existing Lane A process, not a claim this document can make for it.

### Approve / reject — D-214 follow-up only

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Register — observed-at, C-43 supersession, C-12 preservation; B-071's corrected anchor | Preserve; remove withdrawn machinery from the work queue |
| Approve-with-conditions | C-39 / channel consumer correction | Phase 1 Cowork: remove the two blanket actor instructions; Code retains its existing implementation/test obligations |
| Approve-with-conditions | C-42(a) manual-review proposal and owner-aware handover | Phase 1: distinguish proposed procedure from adopted control; preserve actual owners, prerequisites and C-42(b) priority |
| Reject | Complete-propagation claim, all-Code dependency chain, blanket ban on Lane A answering B/C entries | Correct the cited instructions/handback; no new field, state, channel or condition |
| Defer | C-26 whole-entry verification, C-38/phase closure, graph-complete and product claims | Bounded owner work, independent evidence and final-source synchronization; D-171 unchanged |

## C-44 / D-216 independent review — 2026-09-09

**Restated task:** review C-44's source-repair scope and D-216's readiness claims; give Lane A
a parent-first corrective draft, without applying governed text or verifying whole entries.
Reviewed source: `9997441530c524ebe76f227709514b4e837d9fb4`. This appendix uses the handoff
gap-analysis template's structure; it extends B-011 rather than creating another queue.
Canonical work remains C-44, C-26 and the existing B entries. Downstream consumers are Lane B's
verification/build inputs and Lane C's governed checks; no implementation is authorized.

### Preserve settled corrections; normalize the remaining claims

D-215 at `a9592fe` addresses the preceding review: the blanket actor instructions are removed,
the format/channel distinction is explicit, and the C-42 consumer grep is demonstrated rather
than falsely adopted. Do not refile these, reopen C-43, or revive the withdrawn C-12 request.

| Expression | Correct meaning for this handback |
|---|---|
| Lane B raises; Lane A answers | The existing B-062/065/066/067/084 findings and B-011 review are Lane B inputs. Code's queue-omission analysis and Cowork's C-44 registration/repair are subsequent acts, not substitute origins |
| Sources repaired | Owning text and required derived views satisfy the particular entry's criteria; not a whole-entry `Verified` decision |
| Review can start | Lane B can inspect and report missing evidence; not a promise that the entry can close without another owner's work |
| Local graph currency | Analyzed revision matches the local source revision. Push status and semantic enrichment are separate facts |
| Phase condition 2 met | Every applicable closing-phase handoff has a valid disposition under the phase contract; not merely a zero in one global bucket |

### Remaining gaps and smallest fix drafts

All source observations below are evidenced at the reviewed revision. Hosted Encyclopedia
content/publication is **UNVERIFIED**; a local ledger cannot establish its live contents.
These are refinements of existing work, not new finding IDs or another status dashboard.

| Existing owner/item | Gap and evidence | Draft correction / success criterion |
|---|---|---|
| C-44 provenance | Register C-44 says raised by Lane A Code and extended by Cowork; that does not distinguish the Lane B source findings from the later queue analysis | Append the distinction: Lane B raised the linked source defects; Code identified missing routing; Cowork registered and answers C-44. Preserve the factual Code contribution rather than rewriting its history |
| C-44 → B-062/B-065/B-067 | The repair list omits Blueprint although B-062's propagation criterion names it. `docs/source/blueprint.md:49,80–81` still contains the absolute Line/structural-distinctness claims | Include Blueprint in the existing shared source repair. Compare each affected clause with its decided successor; do not weaken a retained project control merely because it is not an IIA-wide rule |
| C-44 → B-084 | The selected media-plan row is not the whole existing follow-up. D-199 F1–F3 name Entry 06, `requirements-scope-knowledge-graph.md`, `poc-feedback-approval-crosswalk.md` and the media plan's FR-14 attribution. Addendum §5.1.2 also leaves required source information/non-URL handling unresolved | Map each existing criterion/follow-up to its owner and successor. Repair the AT-001/AT-003 mapping; retain FR-01 ownership of manual intake. Mark outdated FR-14 analyses superseded by reference, not as a new requirement. Route unresolved input requiredness explicitly; do not silently decide it or declare the entry ready while it needs a Cowork decision |
| C-44 → B-066/B-067, B-084 F1 | Entry 05's D-168 correction is flagged but not republished; Entry 06's ledger lacks the D-197 follow-up. B-066's criteria require republication, not just a flag. C-44's v14 description risks stopping at D-167 instead of its D-168 correction | Use D-168 as the current Entry 05 correction anchor. After source repair, identify the publisher/access and inspect/update the existing hosted entries where required. Record actual publication evidence; if unavailable, keep that criterion open or explicitly routed. Editing the ledger alone does not complete publication |
| C-26 / D-216 readiness wording | “The other fifteen need nothing from Cowork” is not established by excluding C-44's five. B-061's header still names D-204 residual next-unit/S2-UX work | Replace the blanket claim with “not dependent on C-44; assess each entry against its own criteria.” Preserve the work-order routing; do not reopen settled Q1/Q12 or invent a fresh business decision |
| Phase closure interpretation | The handback calls `applied 0` the sole criterion. `V1-PHASE-CLOSURE.md` §1 condition 2 requires valid dispositions for the closing phase; unresolved no-Resolution entries are a different bucket | Use the existing phase criterion and per-entry evidence. An applicable unresolved entry with no `Resolution` prevents closure even if `applied` is zero; unrelated-phase Applied entries do not define this phase's result |
| D-216 graph/mitigation wording | No remote dependency in `docs-drift` proves local rebuild need not wait for push. It does not remove `docs/handoff/README.md` transaction step 6 or the graph criteria in B-065/066/067 | Retire only remote-before-local synchronization. Preserve final-source currency before consuming approval/closure. Cite either the governing obligation or implemented enforcement accurately; an unenforced manual obligation is not automatically void |

**Freeze evidence limit:** `source-sweep`'s three hard-pinned files do not exhaust D-203's
module/version/sprint freeze rules. For each proposed edit, check its scope and lifecycle as
well as the checker's coverage. “The checker does not pin it” is neither edit authorization nor
proof that every section is mutable. No frozen source is proposed for editing here.

### Lane A guide — parent first, release each child independently

1. **Cowork: correct C-44's scope and origin.** Link the original entry criteria and D-199's
   surviving follow-ups, with current successor decisions. State the exact source write set,
   publication dependency and unresolved input question. Keep existing lifecycle owners;
   C-44 source readiness is not Lane B's verification. Acceptance: no criterion disappears
   merely because it was absent from C-44's first table.
2. **Cowork: repair the shared Line/OD4 sources.** Include Addendum, Blueprint, Business Case
   and RACI where their current clauses conflict. Preserve D-57's direct FR-11 ownership and
   D-168's separation from OD4. Acceptance: each affected clause points to the applicable
   decision and retains any separately governed project-specific control.
3. **Cowork: repair B-084's intake branch.** This depends on step 1, not completion of step 2.
   Reconcile functional acceptance-test references, Product FR-01/manual-intake mapping and
   the existing knowledge-map/analysis follow-ups. A business detail not decided remains a
   named unresolved criterion, not an inferred requirement. Do not introduce a new UI/UML spec
   where the functional contract already determines behavior.
4. **Cowork/publisher: reconcile derived views after their own source branch.** Entry 05 follows
   step 2; Entry 06 follows the relevant B-084 correction. Inspect current views, preserve dated
   storyboard/analysis provenance, and record supersession or republication evidence. Do not
   copy mutable lifecycle state into journals or claim a hosted view from its local ledger.
5. **Lane B: independently review each ready entry under C-26/work-order §2.3.** A ready shared
   source family need not wait for an unrelated publication branch. Conversely, an entry does
   not become ready merely because it is outside C-44. Record missing evidence against the
   existing item; promote only when its full criteria are met. Keep the phase's other conditions.
6. **Code: supply graph/check evidence for the consuming revision.** Local synchronization may
   precede push. Before a graph-dependent verdict, compare analyzed HEAD with the reviewed HEAD,
   verify curated parity/coverage and separately report semantic enrichment. A later source
   commit requires a fresh currency check. Use the existing transaction SOP, not a new sequence
   that makes remote advancement a technical prerequisite for local rebuild.

Steps 2–4 specify owner work only. No source clause, external page, graph runtime, schema,
fixture, role permission or application behavior is applied by this review. Build Spec and
Inventory are unaffected by this handoff-only appendix; Lane A must assess propagation for its
actual corrective write set rather than assume that this review authorizes it.

### Failure boundaries and observed evidence

The deterministic failures are narrow: correcting only the listed C-44 rows leaves the cited
Blueprint/B-084 criteria unaddressed; ledger editing cannot prove republication; and checking
only the Applied bucket misses applicable unresolved entries in other buckets. These are
falsifiable acceptance failures, not predictions that every attempt or the business will fail.

| Observation at review | Evidence / limit |
|---|---|
| Consistency suite: 16/17 | Only `docs-drift` failed: analyzed `a9592fe`, HEAD `9997441`. The earlier green run must retain its earlier revision |
| Graph metadata `stale: false` | Does not override the revision mismatch. Read-only query was navigation only; semantic descriptions/labels also remain pending |
| Remote queried as `a9592fe` | D-216 was local-only at that observation. This is dated evidence, not a live tip field or permission to push its ancestor range |
| Lane A Active, Lane B Eligible | Handoff review only; no lane transition, governed application or build authorization |

### Approve / reject — C-44 handback

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-215 settled repairs; D-216 local-versus-remote graph distinction; existing derived queue | Preserve; no repeated repair or additional tracker |
| Approve-with-conditions | Register C-44 source-repair plan | Cowork: complete provenance, target/criterion coverage and external-view routing before claiming source readiness |
| Reject | Whole-entry readiness by subtraction, `applied 0` as sole phase criterion, stale graph “not a blocker for anything” | Correct the handback interpretation; retain C-26, phase contract and consuming-approval evidence requirements |
| Defer | B-062/065/066/067/084 verification, C-44 closure, B-061 residuals and phase closure | Existing owners complete their bounded work; independent per-entry review; graph evidence at the consuming revision |
| Defer | Product implementation, new UI/spec artifacts and lane transition | Separate governed authorization; none granted by this review |

## D-217 / C-44 repair guide — 2026-09-09

**Task restated:** assess whether D-217 gives Lane A enough direction to perform the existing
C-44 repairs, and specify the remaining completion checks. Reviewed `c5e18f68030e0affc6558ffc582be58300f0467b`.
This is an addition to the same Lane B handoff, using the gap-analysis template's scope,
evidence, dependency and verdict structure. No new queue, finding number or source application.

### Answer: sufficient to prepare the decided repairs, not to declare them complete

The corrected C-44 now records the raiser/answerer distinction, Blueprint, D-199 follow-ups,
D-168, per-entry readiness, the freeze-model limit and the retained graph obligation. Preserve
these corrections. Do not spend another general scoping round restating them. Lane B raised the
defects; Cowork answers the source-repair work; independent verification remains separate.

**Dependency correction:** there are two source branches that can proceed independently after
the parent scope, followed by their dependent views. Calling all three children independent is
inaccurate: Entry 05 follows the Line/OD4 branch; Entry 06 follows its intake-source branch.
This dependency does not require one branch to wait for the other. Actual source application
still follows the existing bounded authorization procedure, not this review's Approve verdict.

### Remaining gaps — refine C-44, do not duplicate it

| Existing concern | Evidence at the reviewed revision | Smallest correction |
|---|---|---|
| Clause-level verification | The pasted mitigation requires the same successor everywhere and a minimum file-touch count. The clauses concern different facts: Line attribution, distinct judgment, direct FR-11 ownership and deferred OD4 | Replace the count/identical-citation test with a check of every named operative clause against its applicable decision. Search is discovery, not semantic proof. A correctly scoped historical quote need not disappear; a no-op edit is not evidence |
| Publication owner | C-44 says “open criterion with a named owner” but its publication instruction ends with “whoever holds it,” without identifying the publisher/access route | Cowork records the responsible publisher or explicitly records access/assignment as unresolved in the existing criterion. This blocks publication completion, not the source branches. Do not ask Lane B to certify an inaccessible artifact |
| Unresolved business detail | C-44 requires every question to have a successor decision although Addendum's source-requiredness/non-URL question remains undecided | For decided corrections cite the actual successor; for the undecided question name the existing open record, decision owner and requested choice. Do not manufacture a successor or treat routing as resolution |
| Completion boundary | C-44 scopes republication outside its own close while retaining “each entry's criteria re-checkable without a Cowork edit” | Distinguish source-repair readiness from external publication evidence and whole-entry verification. When reporting readiness, list the routed residual rather than claim the entry meets all criteria. B-066/B-067 remain Applied as governed |

### Cowork steps — one bounded source branch at a time

1. **Bind the repair to its existing approval and owning clauses.** Use C-44 and the original
   B-entry criteria, not the latest narrative's file count. Record the permitted files and
   exclusions in the existing decision/answer. Resolve applicable scope/freeze status before
   editing; a checker omission grants no authority. No new general scoping document is needed.
2. **Shared Line/OD4 branch:** inspect Business Case §“What is enforced”/“Who uses it,” Blueprint
   §2.1/§2.2, Addendum's independence clauses and RACI §4. Draft or apply only as authorized:
   remove the unsupported universal attribution; retain the separately governed project
   separation control; do not equate different Lines with proven distinct judgment. Preserve
   D-57's direct FR-11 decision and D-168's distinction from deferred OD4. Check neighboring
   current clauses, not only the original line numbers. Acceptance: each operative statement
   has the right source and does not silently change a permission, role, gate or build hold.
3. **Intake branch, independent of step 2:** in `FN-GATES-01-05.md` §8, the proposed AT-001 row
   covers acceptance of one subject alongside analytical tags; add AT-003's missing-subject
   refusal mapping and remove that refusal from AT-001. Preserve optional analytical tags.
   D-199 already specifies this split. Do not infer source-requiredness from a positive fixture.
   Keep the unresolved source/non-URL decision in its existing record with an owner.
4. **Intake references:** carry out D-199 F2/F3 by linking the current FR-01 manual-intake
   contract and marking the old CR-14-Uncovered/FR-14 proposals as superseded analyses.
   `requirements-scope-knowledge-graph.md`, `poc-feedback-approval-crosswalk.md` and the media
   plan must agree on the current reference. Preserve FR-14's actual business-continuity
   requirement. Do not rewrite historical analysis as though it originally said FR-01.
5. **Views after their own sources:** update Entry 05's dependency/affected marker against
   D-168 and Entry 06's D-197 marker (D-199 F1). Preserve the recorded verification revision.
   The assigned publisher later reads, corrects and republishes the hosted artifact through
   the existing ledger procedure. Until then publication remains unverified; a local marker
   does not prove either the live artifact's correctness or its incorrectness.
6. **Hand back per entry:** cite the actual correction revision, which criteria it satisfies,
   and any unresolved decision/publication item. Lane B reviews under C-26; no batch promotion.
   Code supplies current graph/check evidence before the consuming approval, without requiring
   the push to happen first. Use the existing SOP for commits, not a new transaction procedure.

### Construction and verification impact

The owning behavior and reference corrections above precede consuming tests. A test mapped to
AT-001 cannot establish the separately defined AT-003 refusal obligation merely because the
table calls it covered. The required outcome is correct requirement-to-test mapping, not a new
test run or application implementation in this review. Product FR-01 remains the intake anchor.
Storyboard, story-panel, UML and data-flow views should be reconciled only where these specific
source corrections affect them; no new diagram or technical/UX specification is justified by
this packet alone. Dated historical views retain their provenance and current-source pointers.

### Evidence and verdict

Graph metadata still names `a9592fe` as the analyzed revision, not `c5e18f6`; `stale: false`
does not establish currency. The read-only graph query was navigation only. No hosted artifact
was inspected or republished. No governed file, graph runtime, application or lifecycle field
was changed by this handback. The remaining failures above are acceptance failures under the
stated conditions, not predictions of inevitable business failure.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-217's adopted scope corrections and Lane B → Lane A attribution | Preserve; move from general scoping to the bounded source repairs |
| Approve-with-conditions | C-44 repair guide | Cowork: use clause-level checks, distinguish unresolved decisions/publication, and identify the publication owner |
| Reject | Identical-successor/file-count proof; all children called independent | Use applicable-decision evidence and source-before-view dependencies |
| Defer | Source application, publication, entry/phase verification | Existing bounded authority, owner evidence, independent review and graph currency; no build or lane transition |

## D-218 — V1 separation and Chief Editor decision guide — 2026-09-09

**Restated request:** separate C-44's current documentation repairs from future OD4/assurance
capabilities, order the existing work, and identify the remaining business choices for intake
and publication. Reviewed `b3fea26323681c71ed84c5dcd74b6d1d9c20cf83`. Lane B raises this review;
Lane A answers in the existing records. Template-guided consolidation only, no new tracker.

**D-218 accepted as a scope correction:** C-44 now distinguishes source-repair readiness,
Chief Editor publication and independent Lane B verification. Its clause-level acceptance and
source-before-view dependencies are explicit. These corrections do not need another scoping
round. Source repair, republication and whole-entry verification remain unperformed by that act.

### Parent: what belongs to V1, and what does not

| Object | Current scope / dependency | Lane A action |
|---|---|---|
| C-44 Branch A | Current Phase 1 source accuracy: Line attribution, evidence of distinct judgment, D-57 FR-11 ownership and D-168 OD4 separation | Correct existing business/governance clauses under bounded authority. This is not an OD4 implementation feature or a new sprint |
| C-44 Branch B | Current manual-intake behavior and test-reference accuracy | Preserve AT-001 positive coverage; map AT-003 refusal separately; correct D-199 F2/F3 references. Do not require future AI tagging to complete manual intake |
| `ARCH-OD4` / `V1/NG-09` | Deferred Proposer → Critics → Judge architecture, not a Product `PBL-*` capability (`Modular_PRD` §2.5.2) | Retain its existing identity and conditional reconsideration. Do not allocate a duplicate feature ID, default-adopt it in V2, or merge it with T6 |
| Line 3 / FR-11 | Not built in V1 under D-57, independently of OD4 (D-168); S5 is beyond V1 in Build Spec §1/§6 | Preserve the exclusion and its own authority. An S5 label is not authorization or a confirmed V2 allocation |
| `PBL-01` T6 global assurance; `PBL-02` monetization | Separate future capabilities: bottom/not refinement-ready and unranked/not refinement-ready respectively, Product §2.5.2 | Preserve existing ranks and independent promotion paths. Neither becomes an immediate C-44 task |
| `PBL-11` Reporter AI tagging/scoring | Identity-only future generation capability; current FR-01 is manual input | Leave unranked; the manual test-reference repair neither implements nor promotes it |

**Retain the Charter's exception, not just “OD4 is beyond V1.”** Frozen Charter OD4 row at line 31
has two branches. After an affirmative OD2 resolution and shipping, logged failure can trigger
reconsideration. A negative OD2 resolution before shipping is a pre-launch blocker requiring
OD4 **or another remedy** to be resolved before launch. It does not automatically authorize OD4.
Deferring the architecture must not delete that blocker or existing V1 separation controls.

**Version/sprint ordering:** retain the authorized V1 S0–S4 structure in the Build Spec; read
current execution/holds from its §4 and the Lane B work order, not the historical journal.
C-44 is preparation for consuming work, not permission to resume held S2. A later item proceeds
through existing request → refinement → decision/authorization → bounded execution packet →
execution → evidence/lifecycle. At refinement, select its actual target module/version/sprint
and dependencies; do not invent a V2 sprint now. Preserve D-203's scope-specific freeze rules
and historical exclusions. The portfolio's AP-OD4 planning reference is not a substitute for
the actual Register authorization or a reason to create another current tracker.

### Correction to this review chain's own citation

**The unresolved source-information/non-URL note is Addendum §8.1, the AT-001 scope note
at lines 526–533 at this revision, not “§5.1.2.”** No §5.1.2 heading was found in that file.
My earlier B-011 appendices repeated the incorrect pointer; this note corrects those citations
without rewriting their history. Cowork should fix C-44's current pointer and append the factual
correction to the decision history as needed. The question itself is real and remains open;
this is not a new business finding or a reason to reopen the already-decided AT split.

### Chief Editor choices — only what is still missing

| Existing open subject | Decision needed | What does not require another decision |
|---|---|---|
| Source-information minimum, Addendum §8.1 AT-001 note | Name which source-information fields are mandatory at manual intake, which may be absent, and whether missing required information refuses intake or is explicitly allowed for later review | Exactly one subject is required; analytical tags are optional. A positive example does not establish source-field requiredness |
| Non-URL source reference, same note / D-121 constraint | Decide whether current intake accepts non-URL references. If yes, define the minimum identifying reference and the missing/invalid-reference outcome; if no, state the V1 boundary explicitly | Do not infer either answer from “manual,” or quietly erase an existing URL requirement. Route any baseline conflict through the Register, never edit a frozen source |
| Encyclopedia | Chief Editor is already the publisher under D-218. If access is unavailable, report that operational blocker; otherwise review the prepared corrections and republish through the existing procedure | No new publisher-selection question is needed. Publication is execution/evidence, not another general feature-scoping decision |
| Future OD4/T6/monetization | No new priority or delivery-date decision is required for C-44. Reconsider only through their existing trigger/refinement path | Do not demand speculative future detail as a condition of the current text repairs |

These questions are a decision packet, **not answers**. Lane A can finish the decided corrections
while retaining the intake questions as explicit residuals; an unresolved requiredness rule must
not be used to claim behavior-complete intake or an executable test for that rule.

### Smallest next steps and acceptance

1. **Cowork binds the already-decided repair unit** to its actual authorization and exact paths;
   correct the source pointer above in the same existing record. No new general scoping artifact.
2. **Branch A:** compare each current clause in Business Case, Blueprint, Addendum and RACI with
   its applicable decision. Record repaired or unchanged-with-reason; retain V1 controls and
   the Charter's conditional stop. Success is correct meaning, not identical citations or file counts.
3. **Branch B, independent of A:** keep AT-001 acceptance of one subject plus analytical tags;
   map AT-003 missing-subject refusal. Preserve the optional-tag rule. Correct F2/F3 with current
   FR-01 references and historical supersession notices, preserving FR-14's actual requirement.
4. **Views follow their source branch:** Cowork prepares Entry 05/06 content and dependency
   markers. Chief Editor reads and republishes the hosted artifact. Only then update its
   verification evidence through the ledger procedure. Do not claim an unseen artifact correct.
5. **Lane B reviews per entry; Code supplies final-source graph evidence.** Source readiness,
   publication evidence and whole-entry verification remain distinct. No batch closure or build.

For Product, storyboard, story-panel, UML and data-flow consumers, follow the corrected owning
behavior/reference; do not generate new diagrams or technical/UX features to represent a
documentation repair. Historical views keep dated provenance and successor pointers. Product
capability identities remain where they already live. Build/Inventory are unchanged by this
handoff; Lane A assesses D-54 against its actual authorized source write set.

**Observed graph:** analyzed `a9592fe`, reviewed HEAD `b3fea26`; the graph is stale despite its
false-valued `stale` field. Read-only query used as navigation, not current-source verification.
No source, runtime graph, hosted artifact, application or lifecycle state changed in this review.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-218 completion split and existing C-44 repair direction | Preserve; perform the bounded decided source repairs |
| Approve-with-conditions | Branch A V1/future separation | Retain Charter trigger, existing ARCH/PBL identities and build holds; no invented future sprint |
| Approve-with-conditions | Branch B behavior/test mapping | Apply decided split; Chief Editor resolves source-information/non-URL residual before related completeness claims |
| Reject | OD4 automatically scheduled in V2, merged with T6, or removal of V1 controls; repeated §5.1.2 pointer | Correct current references and scope interpretation in existing records |
| Defer | Publication, whole-entry/phase verification and product implementation | Owner evidence, independent review, graph currency and separate execution authority |

## Editorial Brief / report inputs and URL-only clarification — 2026-09-09

**Request:** list documented inputs, preserve the Judge's URL-only scope clarification, and
hand Lane A a parent-first propagation plan. Reviewed HEAD `51a3bed`; source files and history
remain unchanged. Lane B raises; Lane A records the decision and answers in the owning tiers.
This template-guided appendix is the consolidation, not a new capability tracker or build act.

### 1. Clarification received, awaiting owning-record propagation

The Judge states that non-URL references are excluded across versions and requests that the
physical/non-URL reference workflow be retained at the bottom of the backlog for traceability.
**Draft interpretation:** URL-only remains the standing admission boundary unless a later
explicit Judge decision changes it. The retained request has the lowest priority and is not
eligible for implementation under that boundary. Backlog retention is neither inclusion in a
future version nor authorization. Do not promise delivery or assign a sprint to reconcile the
two statements. Preserve both exclusion and traceable retained demand.

**This changes an existing contract:** `Modular_PRD.md` FR-01 explicitly permits “a URL or another
reference” under D-121, including a document, claim or statement without a URL. The new direction
must be recorded as a narrow supersession, not described as what D-121 always said. Preserve
D-121's separate duplicate-handling rule. No migration is requested: nullable historical storage
does not by itself require a schema change when admission requirements change.

**Reference type is not source medium.** A local digital document can lack a URL. The new rule
excludes non-URL references regardless of medium; it does not decide that a physical work already
available at a URL is automatically acceptable, nor authorize scanning/OCR/upload workflows.
URL availability also does not establish evidence quality or accessibility.

### 2. Editorial Brief — documented input inventory, not a proposed larger form

The article row is the brief and trigger (Product FR-01, D-111), not a second core record.
`FN-GATES-01-05.md` §3.1 and Addendum §8.1 are the detailed source anchors.

| Field / fact | Supplied or produced by | Documented treatment |
|---|---|---|
| Source URL / reference | Chief Editor through UI | Required intake component; Product FR-01 currently allows another reference, while Fn_Spec says `source_url`. Apply the new URL-only ruling through the parent decision, not silently |
| One subject topic (`articles.topic_id`) | Chief Editor | Exactly one required; missing subject refuses completion (AT-003) |
| Trend-signal description | Chief Editor | Required entry component; not an application-generated score |
| Source information | Chief Editor | Named supplied component, but its precise subfields and minimum requiredness remain unresolved in Addendum §8.1's AT-001 note |
| Analytical tags | Chief Editor | Optional, many; separate from the one subject. AT-001 demonstrates acceptance alongside multiple tags, not mandatory tags |
| Source author; publication date | Extracted where possible, then Investigator confirms | Nullable at intake under D-197 B1; failed extraction is flagged. Do not turn them into new mandatory form inputs by inference |
| Supplier identity; source reference; entry time | Recorded provenance | Supplier and Reporter-agent executor are separate facts. Not evidence that the human is an agent; not necessarily editable fields |
| Platform; source reliability tier | T2 validation | Downstream enrichment/validation, not established as mandatory T1 manual inputs |
| Evidence URL; reviewer confidence; editorial angle; duplicate-check result | T3 investigation | Downstream work, not additional initial-form requirements |

No reviewed T1 contract establishes an independently mandatory title, intended-audience field,
payment field or assurance approval as an Editorial Brief intake requirement. Do not promote
database columns, historical storyboard labels or M-POC package contents into such requirements.
The current missing-required-value rule refuses T1 completion with the component named and
does not fabricate a completed transition or a new incomplete-draft state (§3.1).

### 3. Public Explainable Content with report — generated output versus form input

The M-MVP artifact is not documented as a second intake form. Its provenance contract is in
`FN-AUDIT-VISIBILITY-07-08.md` §4.1 (D-191); the downloadable M-MVP label/UI is in the B-071
corrective plan §6/§6a and related held proposals. A label or a draft UI is not a built form.

| Content / control | Documented role and source |
|---|---|
| Article, selected assessment and revision | Report context; explicit binding, not the latest assessment by default (audit Fn_Spec §4.1) |
| Explicit judgment; recorded result, reasons and evidence | Generated report resolves the selected judgment; result is not inferred from state or its transition anchor |
| As-at transition anchor | State-history context, separate from judgment identity; not live state |
| Evidence, reasons, template/rule-set/schema versions | Frozen report provenance applicable to that assessment; immutable record with validated replay handling |
| Human judgment action and supporting reasons/evidence | Upstream editorial approval input, not a second approval performed by report generation. Exact UI/control mapping remains under the existing B-071/R160 chain |
| Download URL; pending/failure indication | Held M-MVP UI/report proposal: show URL only after successful generation, with article/decision provenance; no fabricated working download |
| Assurance display | Keep separate from future T6 capability; a placeholder or preparation display does not certify external assurance |

**Missing:** the reviewed documents do not provide one fully reconciled, applied M-MVP report
form/section schema. Existing R160 owns report reconciliation; do not close it by copying this
inventory or by adopting older negative-result/UI wording from historical B-071 rounds.

**Separate M-POC contents, not extra M-MVP form fields.** `M-POC-REQUIREMENTS.md` §5 enumerates
topic, intended audience, trigger provenance, trend/relevance assessment, material claims,
claim-to-evidence ledger, source-quality/relevance review, counterarguments, uncertainty/missing
evidence, originality search, exclusivity record, explainable content, publishing template and
Chief Editor Publish/Hold/Escalate record. The internal folder separately holds the publishable
article, package-validation/separation record and exclusivity hold/release status. These are
package contents, not proof of individual editable form fields. Engagement ID and external
payment trace belong to that later governed module, not the M-MVP report generation record.

### 4. Lane A sequence and remaining choice

1. **Record the new boundary in the Register.** Quote the Judge input, its all-version exclusion
   and bottom-ranked retained request; name the FR-01/D-121 clause superseded and unaffected
   duplicate/provenance controls. Do not infer that “decision-tree approved” authorizes a build.
2. **Retain the request through the existing backlog process.** Check registered and pending
   identities before assigning any ID. Do not reuse PBL-01, PBL-11 or reserved PBL-10. The new
   physical/non-URL workflow request stays lowest-ranked, excluded and not refinement-ready;
   implementation would first require an explicit change to the standing scope boundary.
3. **Propagate the decided behavior only as authorized.** Product FR-01 first; Fn_Spec intake
   and Addendum §8.1/AT-001 note next. Preserve the AT-001 positive / AT-003 refusal split, optional
   tags, nullable author/date and manual supply versus agent execution. Do not rewrite frozen
   records or delete historical non-URL briefs to make the new rule appear universal in history.
4. **Keep the source-information minimum open.** Chief Editor still needs to name the mandatory
   source-information subfields beyond the URL, or explicitly decide there are none at T1.
   The URL-only answer does not resolve that separate question. Existing author/date treatment
   remains unchanged unless separately amended; no fresh question about non-URL admission is needed.
5. **Reconcile views and tests against that contract.** Historical storyboard panel A2 uses
   “≥1 topic_tag”; current behavior is one subject plus optional analytical tags. Preserve its
   history and successor notice. Story-panel/UML/data-flow consumers must show URL intake,
   subsequent enrichment and report generation as separate operations, not merge them into one
   form. Use existing R159/R160 owners; no new UX document merely for this inventory.
6. **Acceptance and evidence:** a no-URL reference is refused under the new contract; a URL
   submission still must satisfy every other required input; optional tags and unknown intake
   author/date behave as already governed. Report resolution uses the specified assessment and
   judgment, not latest-by-default or state-derived result. These are planned checks, not executed
   tests. Graph synchronization follows final source changes before consuming approval; Lane B
   independently reviews the entry, Chief Editor republishes affected Encyclopedia content.

**Drift:** analyzed graph revision remains `a9592fe`, reviewed HEAD `51a3bed`. Graph query was
read-only navigation. No hosted Encyclopedia content was inspected. Governed source edits,
backlog registration, schema/application changes, publication and lifecycle promotions are not
performed by this handoff. Build/Inventory are unaffected here; Lane A assesses its actual write
set under D-54. This appendix corrects scope by reference rather than duplicating a canonical form.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | URL-only clarification as decision input; bottom-ranked trace retention | Lane A records narrow supersession and standing scope boundary |
| Approve-with-conditions | Editorial Brief inventory | Decide only the unresolved source-information minimum; propagate authorized contract |
| Approve-with-conditions | M-MVP report inventory | Existing R160 reconciliation; keep generated evidence separate from editable inputs and M-POC package |
| Reject | Non-URL means non-digital; backlog means future authorization; report equals a second intake form | Correct semantics in existing owning records and derived views |
| Defer | Implementation, report completeness, publication and handoff verification | Bounded authorization, owner work, graph evidence and independent review |

## Digital source URL or manual Markdown — superseding clarification, 2026-09-09

**Scope:** consolidate the Judge's latest clarification into a Lane A drafting packet, reviewed
at `aae729c27cede21d06e08ac6f73712c500d44612`. Lane B raises; Lane A answers and propagates under
the existing authority process. No new handoff or tracker. This is a plan, not source application.

### Parent decision input — do not execute the previous URL-only draft

The Judge clarifies that “URL or another reference” concerns **digital content**. Where that
content cannot be accessed by URL, conversion to a **`.md` file** is required. V1 input preparation
and entry remain manual, performed by the user. The documented fields are accepted as the
starting proof-of-concept minimum, rather than requiring another speculative field-design round.

**This supersedes the preceding appendix's blanket refusal of every no-URL input.** Its proposed
all-version URL-only boundary must not be applied to the newly allowed digital-Markdown path.
The prior interpretation of “all non-URL workflows” as deferred was too broad under this latest
clarification. The physical-copy acquisition/conversion workflow remains the separately retained
bottom-priority request; it is not a blocker or authorization for this digital-input path.
Neither a new version nor a new PBL identity is needed merely to clarify current FR-01 intake.

**Source versus conversion:** a Markdown representation does not prove the original source was
available online, authentic or reliable. No fake URL, successful network check, generated metadata
or original-author claim may be fabricated to satisfy an existing field. Manual preparation is
not permission to bypass access controls, nor an instruction to build a converter/OCR/upload service.

### Starting fields — preserve their existing stage and cardinality

| Stage | Starting field set / treatment |
|---|---|
| Editorial Brief input | Digital source URL **or supplied Markdown representation**; one subject topic; trend-signal description; source information from the documented starting set |
| Optional intake values | Analytical tags remain optional and many. Known source author/date may be carried; existing nullable-at-intake and investigation follow-up rules remain unless separately amended |
| Recorded provenance | Human supplier, source reference and entry time; Reporter-agent execution recorded separately. The Markdown representation must remain attributable to the source used, not mistaken for the original publisher |
| Later enrichment | Platform, reliability tier, evidence reference, confidence and editorial angle stay in their documented investigation stages; accepting a starter field inventory does not move them all to mandatory T1 input |
| Generated report | Selected article/assessment revision, explicit judgment/result, reasons/evidence, history anchor and applicable versions; generated download reference. Not another initial-entry form or an assurance judgment |

**Close the repeated business question at the stated level:** the Judge has accepted the existing
documented starting fields. Do not keep asking for a larger source-information taxonomy before
drafting. Preserve existing optional/nullable rules, record supplied source information without
inventing mandatory subfields, and identify only a concrete missing behavior if it prevents the
new path from being specified. The report's R160 mapping work remains separate and is not closed
by acceptance of the intake minimum. “Proof of concept” here does not activate the M-POC module,
its commercial fields, or any monetization capability.

### Actual propagation gaps and fix drafts

| Existing item | Source evidence | Smallest required correction |
|---|---|---|
| FR-01 intake representation | Product already says URL or another reference; Fn_Spec §2.3/§3.1 says URL-only and commissioned work resolves to URL first | Refine Product's alternative as the accepted digital Markdown path, then align Fn_Spec. Do not rewrite D-121's history or duplicate rule |
| Missing-source validation | Addendum §8.1 AT-002 rejects any form without a URL | Replace the blanket premise with source-alternative-aware validation: no URL is not itself failure when the authorized Markdown source is supplied. Retain refusal for genuinely missing required source input |
| T2 source validation | Addendum T2 row and Fn_Spec §3.2 require `source_url` confirmed live | Draft a separate Markdown validation outcome: the supplied representation is available/readable and its source information can be examined, with quality/unknowns handled honestly. It cannot be labeled “URL confirmed live.” Exact evidence/reference binding must be specified before build |
| File/reference handling | The clarification requires `.md` but names no storage location, upload interface or revision-binding mechanism | Lane A drafts how the manually supplied file is referenced and retained for the selected assessment using existing records where sufficient; hand any justified implementation gap to the proper tier. Do not choose a new table, file service or feature silently |
| Views and report evidence | Historical storyboard A2 and its sequence use URL-only intake; report Fn_Spec §4.1 requires explicit assessment/evidence provenance | Show URL/Markdown alternatives converging on the same intake, then investigation and report generation. Bind report evidence to the actual supplied representation; no recency substitution or manufactured URL |

These are child specification tasks, not reasons to reopen the accepted digital-source decision.
The existing AT-001 acceptance / AT-003 missing-subject split still applies to both alternatives.
The existing duplicate rule still applies at its own surface; a source-format change does not
authorize a global source-uniqueness rule or another editorial engine.

### Lane A next steps — parent first

1. **Register:** capture this clarification and identify the preceding URL-only handoff text as
   superseded. Record starter-field acceptance and preserve physical-workflow backlog separation.
2. **Product:** draft the narrow FR-01 refinement and its acceptance criteria. Keep current build
   holds and module boundaries. No fresh business taxonomy or unrelated feature is needed.
3. **Functional behavior:** draft both intake paths, missing-source behavior and T2 validation;
   keep positive AT-001 and refusal AT-003 coverage, and correct AT-002's no-URL premise. Resolve
   evidence/reference handling explicitly rather than leaving a filename as an uncheckable claim.
4. **Derived views:** reconcile the storyboard/story panels, UML and data-flow references with
   the single-engine alternatives. Preserve historical diagrams with successor pointers rather
   than rewriting their past. Use existing R159/R160 owners for report reconciliation. Update
   Encyclopedia dependency markers only; Chief Editor publication remains its separate evidence act.
5. **Verification plan:** demonstrate URL input; digital Markdown input without URL; neither
   source supplied; empty/unavailable Markdown; missing subject; optional tags; unknown author/date;
   and report retrieval of the selected source/assessment rather than a later replacement.
   Every expected outcome must cite the completed behavior, not infer it from an old URL-only test.
6. **Authorized application then independent review:** Lane A records the bounded write set and
   applicable D-54 propagation; Code synchronizes the graph at the consuming source revision;
   Lane B checks the actual entry criteria. No build, file conversion, schema change or promotion
   occurs in this review. Build/Inventory are unchanged here, not presumed unaffected by a later
   implementation design that creates an artifact.

**Observed drift:** graph analyzed `a9592fe`, source HEAD `aae729c`; the `stale: false` flag does
not override the mismatch. Read-only query was navigation only. No hosted Encyclopedia view
was read. Only this handoff appendix changes; prior records are retained as dated history.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Latest digital URL/Markdown and starter-field clarification as decision input | Lane A records and propagates narrow current-intake contract |
| Reject | Previous blanket no-URL refusal and all-non-URL backlog interpretation | Supersede for digital Markdown; retain separate physical-workflow request |
| Approve-with-conditions | Branch B intake/test plan | Complete alternative-aware T1/T2 validation and source-evidence binding |
| Defer | Report reconciliation, publication, application and verification | Existing owners, bounded authorization, graph currency and independent review |

## D-219 — what the Chief Editor must authorize next — 2026-09-09

**Restated request:** turn D-219's children into an actionable decision table, separating settled
business choices from drafting and execution authority. Reviewed `d10f0142259de3a3449c0eef175922668152b949`.
Lane B raises this appendix; Lane A answers in the existing C-44/D-219 chain. No new tracking file.

### Settled parent versus remaining authority

**Already decided in D-219:** digital URL or manually prepared Markdown; the documented starter
fields with optional/nullable treatment preserved; human preparation rather than an automated
conversion service; physical-source workflow separately backlogged. Do not ask these again.

**Still required:** an exact source-repair packet and its bounded application authorization under
the existing SOP. D-219 says “proceed plan,” enumerates work and edits only the Register; “four
separately authorized children” is not evidence that four execution grants already exist. Name
the actual grant before application. This review supplies drafting guidance, not such a grant.

| Order / child | Cowork prepares | Chief Editor accepts or rejects | Completion evidence |
|---|---|---|---|
| Parent — bounded packet | Exact owning sections, exclusions and expected outcomes below, using the existing decision chain | Approve source-text application only when those are reviewable; otherwise return the specific missing text, not the already-settled business question | Existing Register act names the bounded unit and DoD; no build or lane transition implied |
| Product AC-01 | Keep URL success; add Markdown success consistent with FR-01, one subject and manual supplier/agent executor separation | Whether the draft accurately implements the decided alternatives; no new source-type choice | Both paths covered without losing nullable metadata or optional tags |
| Functional intake/T2 | Review every enumerated occurrence by meaning; draft Markdown validation and reference/evidence handling | A faithful behavior contract; escalate only a genuinely new business/storage obligation, not routine wording | No mandatory-URL constraint blocks Markdown; no file is reported as a live URL; absence/unreadability outcomes are explicit |
| Addendum acceptance/control rows | One bounded Addendum pass: AT-001 positive case, AT-002 absent-source refusal, AT-003 missing-subject refusal, plus T1/T2 rows and AT-001 scope note | Source repair only; retaining independent positive/negative coverage | Gate table, tests and current scope note agree on both alternatives and starter-field acceptance |
| Derived views | Storyboard/panels/UML/data-flow successor references and Encyclopedia content after their owning source | Review changed meaning; Chief Editor separately performs hosted republication | Sources agree, historical examples remain scoped, publication evidence recorded only after the artifact is read and republished |

The source children are not four new product features. They are tier-specific parts of the same
intake correction. Product requirements precede dependent functional/test wording; views follow
their own source. Do not introduce an extra all-branches-complete gate for unrelated C-44 work.

### Corrections to the proposed repair plan

1. **The enumeration is discovery, not a closure predicate.** Fn_Spec line 35 quotes the URL
   success scenario: a valid URL example is not itself a universal prohibition. Likewise a
   URL-only positive AC does not logically forbid Markdown; it lacks coverage for that alternative.
   Preserve legitimate URL examples and historical quotations, label their scope and add the
   missing path. Reject “the count is the pass.” Check each operative clause's meaning and the
   actual positive/negative outcomes, not the number of edits or absence of the word URL.
2. **Include the omitted Addendum gate rows.** §3.1 T1 at line 161 requires `source_url`; T2 at
   line 162 requires URL confirmed live. Correcting only AT-002 and the Fn_Spec leaves those
   governed controls contradictory. Draft both alternatives there in the same Addendum unit.
   The §8.1 AT-001 scope note at lines 526–533 still calls the newly decided question open;
   update that current note while preserving the separate independent-verification requirement.
3. **Provenance precision:** D-121's own heading dates its consolidated rulings **2026-08-25**,
   not 2026-08-30. It establishes URL-or-other-reference and brief identity; it does not name
   Markdown. Cite D-121 for that parent permission and D-219 for the specific digital/Markdown
   clarification. Do not attribute the new representation detail retroactively to D-121.
4. **Use the real question anchor.** “§5.1.2” remains in C-44/D-219 despite the prior handback's
   correction. The Addendum question is §8.1's AT-001 scope note. Repair the current pointer;
   preserve the business decision as settled. Do not reopen it merely because its citation is wrong.
5. **Reference/retention is unresolved design, not completed evidence.** Cowork must draft how
   the supplied content remains retrievable and bound to the assessment/revision. Prefer existing
   records if demonstrably sufficient; otherwise route a precise gap to the proper tier. A
   routed residual permits an honest partial handback, not a claim that report integrity or the
   Markdown path is implementation-ready. Do not invent a new retention period, service or schema.

### Minimal acceptance walkthrough for the draft

- Valid URL plus all other required inputs: accepted as the URL path.
- No URL, valid authorized Markdown representation plus all other required inputs: accepted as
  the Markdown path; this does not mean an arbitrary filename or empty file passes.
- Neither source supplied: named refusal; no completed T1 transition.
- Missing subject: AT-003 refusal for either source path; AT-001 retains positive tag coverage.
- Markdown unreadable/unavailable or not bound to the selected source: the draft states the
  failure/hold behavior; no successful source-validation or readiness claim is fabricated.
- A later file replacement: the report still resolves the content used for its selected
  assessment/revision, not the latest file with the same name. The exact mechanism must be named
  or left explicitly incomplete, not declared proven by this walkthrough.

**What requires a new Chief Editor choice?** Only an implementation proposal that introduces a
new obligation (for example a new storage service or changed retention scope) or a genuinely
undecided business outcome. Lane A first presents the concrete option and consequence. There is
no present need for another general form-design decision, another publisher-selection decision,
or another URL/Markdown decision. Existing R159/R160 and C-26 ownership remain intact.

**Drift/limits:** analyzed graph `a9592fe` versus reviewed HEAD `d10f014`; read-only graph query
used for navigation, not currency. No hosted artifact read or republished, no runtime test of
Markdown performed. Only this handoff changes. Actual source application, Build/Inventory
applicability for that write set, Graphify synchronization and independent verification remain
with their existing owners. No test count or touched-file count proves semantic completeness.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-219 digital-source/starter-field ruling and Product AC coverage work | Preserve the ruling; draft the missing alternative coverage |
| Approve-with-conditions | Cowork source-repair packet | Include Addendum T1/T2/current scope note; correct citations and use semantic acceptance checks |
| Reject | Counts as proof, URL examples as automatic contradictions, execution grants inferred from “proceed plan” | Correct the handback and bind actual application authority |
| Defer | Markdown storage/readiness, source application, publication and entry verification | Concrete design/owner evidence, bounded authorization, current graph and independent review |

## D-220 — bounded child approval, not another enumeration round — 2026-09-09

**Review scope:** `40297956bed6a0eee39eff83ec591b1b8e5d38ec`; Lane B raises, Lane A answers.
This appendix follows the existing handoff template's evidence/dependency/verdict structure.
No new finding series or tracker. The digital URL/Markdown choice and starter-field minimum
remain decided; this review does not reopen them or authorize source application.

### What is accepted; what the Chief Editor actually needs next

D-220 corrected the live §8.1 pointer, D-121/D-219 attribution and proposed-versus-authorized
wording. Preserve those. Its added persona and AT-006 locations are useful affected surfaces.
The Chief Editor needs **literal replacement/addition text and the bounded write set**, not a
new vote on URL/Markdown or a fresh count of matches. Cowork can draft that text now.

| Parent-first unit | Cowork's draft must show | Chief Editor decision | Accept only if |
|---|---|---|---|
| Product — Reporter persona / AC-01 | Persona says the human supplies the starter package; Reporter executes. AC-01 covers both authorized sources, one subject, optional tags and unchanged metadata rules | Accept/reject faithful propagation of existing D-197/D-219 behavior | “Without human handoff” and implied automatic input generation do not survive in the current manual-intake persona; valid URL coverage is preserved |
| Functional — intake through source validation | URL and Markdown paths, no-source refusal, invalid/unavailable-file handling and explicit source/assessment binding | Accept/reject complete proposed behavior; no schema/service choice inferred | T2 does not claim a file's URL is live. T3 evidence requirements are checked for compatibility, not ignored because they are later than intake |
| Addendum — gate rows plus acceptance table | T1/T2 alternatives; AT-001 acceptance; AT-002 neither-source refusal; AT-003 missing-subject refusal; AT-006 actor scope; current §8.1 note cites the decided ruling | Accept/reject the single coherent source-text packet | Actor attribution agrees with the Product/Fn_Spec, and the newly decided question is no longer called open in current behavior prose |
| Derived views | Source-dependent storyboard/panel/UML/data-flow changes and Encyclopedia content/marker updates | Accept corrected meaning; separate Chief Editor republication action | Historical examples remain historical; sources are corrected before their consuming views claim alignment |

No new business decision is needed to correct wording already settled by a cited decision.
If an exception's authority is genuinely missing, isolate that exact exception and requested
choice; do not reopen the entire intake model. Application still needs its own bounded grant.

### Remaining gaps to address within those drafts

**1. Search completeness is scoped, not semantic completeness.** D-220 records no exact search
expression/options to reproduce its 35-hit claim. A read-only, untruncated case-insensitive
`url|source reference` search over the same three files also finds Addendum T3 `:163` and evidence
quality `:340`, Fn_Spec provenance `:100`, and Product traceability `:761`, absent from the listed
classification. Many extra matches (for example source catalogue URLs) are legitimately unchanged.
This does **not** mean all matches need edits or that a new total establishes truth. Record the
search scope/method and classify implications by meaning. Arithmetic checks classification of
the returned set; it cannot prove that the chosen terms find every affected behavior.

**2. T3 must not become the next hidden URL gate.** Addendum `:163` requires
`trend_signal.evidence_url` set; `:340` scores that URL's presence/accessibility. A Markdown source
is not necessarily the same thing as trend evidence. Cowork must explicitly say whether the
existing independent evidence-URL requirement remains, or propose a governed alternative with
its authority. Do not silently rename it, waive scoring or fabricate a URL. Until this is mapped,
successful T1/T2 fixtures alone do not prove the full Markdown workflow can proceed.

**3. AT-006 is an actor question, not only a format replacement.** Its current expected result
records the human as executor at Line 2 with `HumanOverride`. D-197/US-01 and Fn_Spec §3.1 define
the human supplier and Reporter-agent executor separately. If AT-006 tests ordinary manual
supply, align its result to those decisions. If it tests a distinct human-executor fallback,
name the existing exception authority and preconditions. Do not keep or delete an exception
based solely on its URL wording, and do not infer human execution from manual preparation.

**4. Resolved question versus current stale note.** D-220 calls Addendum `:528` out of scope
because the question is resolved. That is not enough for the current note, which still says
source-requiredness/non-URL behavior remains open. Include its narrow successor notice in the
Addendum unit, as already requested in the preceding review. Keep independent verification and
any genuinely unresolved representation mechanism separate from the closed business choice.

**5. Routed is not implementation-ready.** A named retention/validation residual is sufficient
to report partial drafting honestly. It is not sufficient to claim that the Markdown path,
immutable report evidence or implementation packet is ready. Name which readiness is being
claimed. Do not grant whole-entry verification merely because an owner has been assigned.

### Small steps for Lane A

1. Draft the literal Product text using settled behavior; carry the persona's manual-supply
   correction, not merely the words “URL or Markdown.”
2. Draft Fn_Spec behavior and its T2/T3 evidence crosswalk, preserving source versus evidence
   distinctions. Explicitly retain any unresolved representation binding as incomplete design.
3. Draft the Addendum unit with the gate rows, acceptance rows and §8.1 successor note together.
   Map AT-006 to ordinary supply or its actually authorized exception before asserting outcomes.
4. Submit the exact text, paths, exclusions and DoD through the existing authorization record.
   Do not replace this deliverable with another enumeration-only decision. No repeated broad
   clarification is needed; surface only a concrete missing authority or business outcome.
5. After authorized source application, reconcile each derived view, obtain publication evidence
   where required, synchronize Graphify and hand back per entry for independent review.

**Draft acceptance:** URL success, Markdown success with all applicable evidence, no-source
refusal, missing-subject refusal, honest unreadable/missing-file outcome, correct supplier/executor
attribution and retrieval of the selected evidence revision. These are planned walkthroughs,
not executed tests. An example that passes intake but cannot meet the next gate is not end-to-end
proof. No new UI artifact, storage service, migration or physical-source feature is authorized.

**Observed:** graph analyzed `a9592fe`, reviewed source `4029795`; query was read-only navigation.
No hosted Encyclopedia was inspected or republished. Only this handoff changes; no lifecycle
promotion or governed-source application. Build/Inventory applicability for the actual repair
belongs in Lane A's eventual write-set review, not inferred from this appendix.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-220 corrected pointer, authority split and additional affected locations | Preserve; proceed to literal repair drafting |
| Approve-with-conditions | Product/Fn_Spec/Addendum child packet | Resolve actor scope, T3 evidence compatibility and stale current note; present exact text |
| Reject | Arithmetic as semantic completeness; routing as implementation readiness | Scope the measurement and name the actual readiness claim |
| Defer | Source application, publication, implementation and whole-entry verification | Bounded authorization, complete behavior/evidence, graph currency and independent review |

## D-221 — separate intake, evidence and scoring before approving text — 2026-09-09

**Reviewed:** `85144bb8c02e79659ea929d18cf93025d5735925`. Lane B raises this review; Lane A
answers through the existing C-44/D-219–D-221 chain. Handoff-template structure, no new queue.
No source, application, graph runtime, hosted view or lifecycle state is changed by this review.

### Accepted progress; remaining substantive correction

D-221 now states its search domain, rejects routed-as-ready, distinguishes the human supplier
from executor, and offers replacement text. Preserve that progress. Do not reopen the accepted
manual URL/Markdown input or starter-field decision, and do not spend another act recounting URLs.

**Admission does not guarantee evidence quality.** A Markdown source may have a reachable
supporting-evidence URL; a URL source may lack one. Accepting the brief at T1 and later observing
weak/missing evidence is not inherently contradictory. Addendum §5.2's cited formula is
**Editorial Priority Score**, not Trend Score (§5.1), and the Evidence Quality component is
separate from source format. Changing its weight or missing-evidence treatment is a business
policy change, not automatic propagation of D-219. `NG-10`/`TC9` still forbids score auto-advance.

| Existing supporting-evidence condition, either source format | §5.2 component value | What this does not establish |
|---|---|---|
| Evidence URL present and accessible | 1.0 | That the source format caused the value, or a gate is approved |
| Evidence URL present but unreachable | 0.5 | That the evidence is absent or should score 0.0 |
| Evidence URL absent | 0.0 | That Markdown caused its absence or that the article was wrongly admitted |

The component's existing weight is 0.10. These values are read from the current source, not new
proposals. **D-221's “no reachable evidence URL scores 0.0” conflates absent and unreachable.**
T3 separately requires `evidence_url` set; therefore an absent URL also has a gate-completion
consequence under the existing rule. Scoring and gate eligibility must be specified separately.

### Gaps in the proposed text and smallest corrective draft

| Existing item | Gap | Required draft correction |
|---|---|---|
| Product AC-01 | “Where no URL exists” is narrower than D-219's “content cannot be reached by URL” | Use the decided phrase consistently: a URL may exist but not provide access. Preserve manual preparation and access-control restrictions |
| Reporter persona | Proposed text still says “with topic tags,” reviving the subject/tag ambiguity | State **exactly one subject topic**, a trend-signal description and the documented supplied source information; analytical tags remain optional and many; human supplies, Reporter executes |
| Fn_Spec grouped rows | One phrase for six different locations is not each location's full replacement; §2.3 still has the commissioned-work URL sentence unless explicitly replaced | Supply complete replacement paragraphs/rows for constraints, required fields, supply, diagram and AC. Preserve no-bare-topic and missing-input refusal; eliminate only the universal URL requirement. Do not claim literal insertion readiness from shorthand |
| §8.1 note | “RESOLVED for the non-URL limb” does not itself replace the starter-source-information question that D-219 also decided | Replace both decided question clauses with D-219's scope. Retain the independent-verification duty and AT-003 mapping residual until actually applied; do not leave accepted starter fields labeled undecided |
| Markdown validation/retention | Availability/readability text does not define reference retention, revision binding or failure behavior | Complete the existing routed design before implementation-readiness claims. Name missing/unreadable/mismatched representation outcomes and evidence binding without inventing a storage service or retention period |

**AT-006 scope:** D-221 expressly retains it as a human-executor `HumanOverride` example,
distinct from AT-001's human-supplier/agent-executor path. Any added Markdown case must preserve
that explicit exception scope and its governing authority; it must not relabel normal manual
preparation as an override. Do not create duplicate AC/test IDs when adding scenario coverage.

**Evidence correction:** D-221's statement that Addendum `:340` was “named by nobody until now”
is incorrect. The preceding B-011 review at `591b1df`, now lines 1192 and 1198–1204, explicitly
names both `:163` and `:340`, their distinction from the source and the scoring question. The
same review names the persona's manual-handoff conflict. Preserve the original Lane B attribution;
Lane A's further inspection is confirmation, not a newly raised finding. No new tracking item.

### Chief Editor decision table — parent first

| Order | Recommended disposition | What the Chief Editor must decide / what Lane A owes |
|---|---|---|
| 1 — meaning | Preserve source-format versus supporting-evidence versus score separation | No repeat URL/Markdown decision. Reject the assertion that a lower score automatically contradicts admission |
| 2 — existing controls | Draft with existing T3 evidence requirement and §5.2 scoring unchanged unless a change is explicitly requested | No new scoring decision is necessary merely to implement D-219. If a proposed alternative is wanted, present its gate and scoring effects separately for approval; do not manufacture a Markdown exemption |
| 3 — literal source packet | Approve only after complete owner-specific replacements and validation/reference behavior are reviewable | Cowork supplies exact text, write set, exclusions and DoD, including the corrections above. “Proceed plan” is not application permission |
| 4 — views and verification | Follow the approved source behavior | Storyboard/panels/UML/data flow show intake, investigation, scoring and judgment as different operations; reports cite selected evidence. Chief Editor separately republishes affected Encyclopedia content; Lane B verifies per entry |

**Minimal walkthroughs:** both URL and Markdown inputs, each paired with accessible,
unreachable and absent supporting evidence; missing source; missing subject; unreadable or
mismatched Markdown; and retrieval of the original assessment evidence after a later file change.
Hold other inputs constant when comparing score outcomes. A positive intake fixture passes
**T1 only**, not all later gates; no fixture says every admitted article must be publishable.
These are planned cases, not executed tests or proof that the file mechanism exists.

**Lane A sequence:** correct meaning in the current proposed packet → produce complete source
replacements and the reference/validation contract → seek bounded application approval → apply
and check the owning tiers → reconcile dependent views → synchronize graph at the consuming
revision → independent handoff review. Use existing R159/R160 and C-26 owners; no extra channel,
no automatic scoring change and no unrelated build. Build/Inventory remain unchanged by this
handoff; their applicability must be assessed for the eventual authorized write set.

**Drift:** graph analyzed `a9592fe`, reviewed HEAD `85144bb`; graph query is navigation only.
No hosted Encyclopedia inspected, no source application, no child authorization or verification.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-221 stated search domain, defined-before-ready rule and explicit actor distinction | Preserve |
| Reject | Intake acceptance implies high evidence score; absent equals unreachable; latest discovery attribution | Correct proposal semantics and dated provenance |
| Approve-with-conditions | Product/Fn_Spec/Addendum repair packet | Complete literal text, preserve cardinality and approved fallback wording, define evidence handling |
| Defer | Scoring-policy change, application, publication and whole-entry verification | Separate policy choice if requested; bounded execution, graph currency and independent evidence |

## Independent review — Lane A tooling at `4005d58` (2026-09-09)

**Task restated:** independently review the implemented Cowork/Code classifier, distinguish
reporting from enforcement, and give Lane A a parent-first corrective guide. This is a review
and proposed correction, not application authority. Existing B-011 lifecycle fields are unchanged.

### What happened — evidence and remaining gaps

The reviewed baseline is `4005d58e6ef94318ecdd1cc4f82221fd57d5e280`. Sharing `classify()`
between `run()` and the commit-message gate removes the duplicated classification loop.
`byLane` still distinguishes A/B/C; `bySub` adds tool surfaces without creating a new lane.
The handoff exception and `.agents/rules/graphify.md` exception pass direct read-only probes.
Preserve these changes; do not redo the whole implementation.

**Direct lookup still misclassifies Lane C.** At this baseline,
`subOf('.github/workflows/ci.yml')` returns `A-cowork`, although `classify()` places that
same path in C. The exported function promises null for non-A paths. Its broad `.github/`
match reproduces the class of bug already fixed for `docs/handoff/`. The main classifier is
protected by calling it only for A paths; this is a direct-caller defect, not evidence that
the current commit gate classified this workflow as A.

**“Reports, never gates” is too broad.** `scripts/lane-gate.mjs` still checks only `byLane`,
so the commit-message trailer gate is unchanged. However, a sub-crossing returns findings;
`scripts/check-consistency.mjs` increments failures and exits 1, and `.github/workflows/ci.yml`
runs that suite without a continue-on-error exception. The negative example is therefore a
consistency/CI failure, not merely an informational report. A trailer cannot clear these
findings: this check does not inspect the trailer. Item 3 must distinguish these consumers
before describing enforcement as a one-line change.

**Queue wording is not lifecycle evidence.** “Every incomplete item is Applied” hides deferred
future work. B-016, B-071, B-077 and C-001 have Deferred headers at the reviewed revision.
Deferred is terminal for the handoff, not proof the future work was implemented. Keep existing
follow-up owners and verify Applied entries individually; do not create another status tally.

### What is needed — Chief Editor decisions and Lane A steps

| Order / dependency | Owner and action | Accept / reject criterion |
|---|---|---|
| 1 — parent policy | Cowork presents item 3 to the Judge: separately name the consistency/CI result, commit-message trailer requirement, and treatment of an authorized crossing | Accept only an explicit outcome for each consumer. Reject “report-only” as a description of the present failing check. A trailer declares a crossing; it does not itself grant authority |
| 2 — independent bounded bug fix | Code specifies and, when authorized, fixes `subOf` using the canonical A-membership rule before assigning an A tool | Direct workflow/B/unmapped/handoff inputs return null; valid A inputs retain their tool and exact-file exceptions. Avoid a second independently maintained lane map |
| 3 — depends on policy, not on a guessed choice | Code prepares persistent regression cases for pure Cowork, pure Code, mixed A tools, declared/undeclared crossings and unchanged A/B/C behavior | Name expected check exit and hook exit separately. Preserve the direct-call case above. Report actual red-before-green evidence, not just a count of manual probes |
| 4 — evidence handback | Code supplies the changed paths, application commit, test results, limits and pending Judge choice; Cowork records the boundary report in the existing Register mechanism | Phase Closure references that report under D-203/D-209. No A-NNN entry or second journal ledger. Record the approval source separately from the application commit |
| 5 — existing C-42 unit | Code follows C-42's canonical mechanisms and fixtures; retain its weakest-part status | A path-map fixture alone cannot close C-42. Part (b) must prove condition definition coverage AND uniqueness across both governed files, including Register-internal failure; part (a) remains separately evidenced |
| 6 — consuming evidence | Code synchronizes extraction and checks curated parity, then performs any separately scoped semantic fill; independent reviewer checks the corrected packet | Currency, coverage, parity and semantic enrichment are separate observations. No bulk lifecycle promotion and no product build authority |

For item 3, the decision is not whether crossings exist. Choose the intended consequence:
retain a failing consistency check and describe it honestly, or authorize a reporting-only
mode; independently decide whether the commit-message hook requires a declaration for an
internal A crossing. If authorized crossings are to pass either consumer, specify what
evidence that consumer recognizes. **No option is selected by this review.**

### Ownership and journal — reuse the existing path

**Cowork** owns the business/behavior meaning, governed source text, decisions and curated
fragment meaning. **Code** owns governance tooling, fixtures and graph operations. Code's
verification artifacts support planning controls; they are not product assurance/T6 behavior.
The Register being Cowork's surface does not require a new return channel: Code supplies its
report, Cowork records it on the serialized Lane A turn. If direct Code editing of the Register
is desired, request a bounded exception rather than assume it. D-215 also expressly allows
Lane A to answer existing B/C handoffs; reject the blanket “any docs edit is forbidden” claim.

The journal preserves historical planning and rationale with links. It neither replaces the
Register's boundary report nor moves authorization, backlog ownership, handoff disposition or
live lane state out of their canonical records. Lane B raises this review; Lane A answers here
and corrects its own surface after authorization. This adds no SOP or new channel.

The Product document, storyboard, story panels, UML/data-flow and Encyclopedia reconciliation
remain with their existing product owners. This tooling change supplies no evidence that
their behavior is complete or republished. No Product/Fn_Spec/UI change follows merely from
adding development-tool labels. Build Spec and Inventory are unaffected by this review;
the eventual authorized packet must assess them if it creates/sequences an artifact.

### What was done instead / verification limits

Read-only source review and direct import probes; no tooling, governed specification, schema,
CI or product edit. Graph query used for navigation. At the reviewed baseline, branch metadata
has `lastAnalyzedHead = 4005d58` and `stale = false`. The installed `describe --help` confirms
assistant mode and fill-missing support. This does not prove that every rebuild erases every
description; retain that as an unverified generalization until before/after evidence exists.
No semantic fill or hosted Encyclopedia inspection performed. A later handoff commit advances
HEAD and requires a fresh currency check before consuming approval.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Shared classifier and A/B/C preservation | Preserve in Code correction |
| Approve-with-conditions | Governance tooling application at `4005d58` | Fix direct non-A lookup and make consumer outcomes explicit; independent review |
| Reject | Universal report-only claim, all-unfinished-work-is-Applied claim, blanket handoff-write prohibition | Correct Lane A report and policy packet, without duplicating canonical SOP |
| Defer | Sub-crossing enforcement choice, C-42 closure, semantic fill and product verification | Judge policy; separately bounded Code units; owning-tier and independent review |

### Judge decision guide — CI failure versus trailer requirement (2026-09-09)

**Reviewed at `d1fadbc`.** This extends the preceding review, not a new finding or SOP.
The Judge approved decision-tree work; the policy options below remain recommendations,
not a recorded selection or implementation authorization.

**What happened:** two controls answer different questions. The local commit-message hook
asks whether a cross-lane commit declares its crossing. The consistency check asks whether
the inspected paths span surfaces; its findings fail the suite used by CI. Neither proves
Judge authorization. A successful local commit does not imply a passing CI run, and a
passing CI run does not authorize work. CI is after a push here; it does not prevent the
working-branch push itself. Merge consequences depend on required status checks.

Current behavior for a mixed Cowork/Code path set, when that set is inspected:

| Evidence supplied | Commit-message hook | Consistency check / CI |
|---|---|---|
| No trailer | No sub-crossing block: both are Lane A | FAIL |
| Valid `Lane-Crossing:` trailer | Same result: no sub-crossing requirement | FAIL; trailer is not read |

This describes the lane controls only, not every possible hook failure. Local checks inspect
pending tracked changes; on a clean checkout this checker inspects HEAD's changed paths,
not an audited full push/PR range. Do not claim that a green run proves the whole range clean.

**What is needed — decide parent first:**

| Order | Question for the Judge | Recommended Accept | If rejected / alternative |
|---|---|---|---|
| 1 — normal work rule | Should normal Cowork and Code work remain separate, serialized units? | Yes: preserve D-200/D-201. Separate their changes into correctly scoped units; a trailer does not transfer surface ownership | Any combined-work exception needs a bounded policy decision; do not silently widen ownership |
| 2 — CI consequence | Should mixed A-tool changes continue to fail the consistency check? | Yes: retain the existing failure and describe it as enforcement through the suite, not informational-only | Warning-only is a separate proposed behavior change. Specify how warnings remain visible without disabling unrelated checks |
| 3 — local declaration | Should the commit-message hook ALSO require a trailer for a mixed A-tool commit? | Yes, as an early declaration check, not permission. This is a new hook requirement, pending authorization | Leave the hook unchanged and explicitly accept that a mixed commit can be created locally but fail the suite |
| 4 — exceptional combined work | Does a trailer alone make an exception pass CI? | No. Under the recommended minimal policy, split normal work; defer any machine-recognized exception mechanism | If a combined commit must pass, separately specify bounded authorization evidence, validation and failure behavior before changing the check |

Accepting rows 2 and 3 together deliberately means: a trailer can satisfy the local
declaration requirement while CI still fails. **It is not an exception pass.** If this is
not the desired outcome, reject that combination and request a defined authorized-exception
path; do not tell Code merely to “flip the gate.” No new exception subsystem is proposed here.

**Lane A follow-up, one bounded step at a time:**

1. Cowork records the Judge's exact selections and exclusions through the existing Register
   process. Clarify whether approval covers policy only or also a named execution packet.
2. Code corrects the independent `subOf` defect from the preceding review under its own
   bounded authorization; do not wait for or invent the policy choice to fix classification.
3. Code drafts expected hook and suite outcomes separately: single-tool pass; mixed/no
   trailer; mixed/valid trailer; malformed trailer; unchanged A/B/C crossings; unmapped
   handoffs; direct Lane C lookup. Only chosen-policy cases become implementation criteria.
4. Cowork and Code close the write set and DoD. Cowork owns policy/instruction changes;
   Code owns scripts and regression fixtures. CI workflow edits, if needed, require Lane C;
   running the existing suite through CI does not itself require a workflow edit.
5. After bounded authorization, Code implements and demonstrates the named red-before-green
   cases. Cowork records Code's evidence in the existing boundary report. Lane A answers
   this handoff; Lane B independently reviews it. No new channel or duplicate journal ledger.
6. Synchronize graph and verify the consuming revision. This guide changes no product
   behavior: Modular_PRD, storyboard/panels, UML/data flow and Encyclopedia product content
   are unaffected, not newly verified. Build Spec/Inventory applicability belongs to the
   eventual artifact write set; journal remains historical context with canonical links.

**Failure to avoid:** treating a declaration as approval, expecting a trailer to clear a
check that never reads it, or calling the hook and CI the same gate. Success means each
test names its inspected path set, policy selection, hook exit, suite exit and evidence;
no success claim extends to an uninspected commit range.

**Drift:** `lastAnalyzedHead` remains `4005d58`, behind reviewed `d1fadbc`; source files
were checked directly. No graph rebuild, product/spec edit, policy selection or lifecycle
promotion in this review.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Separation of declaration, consistency failure and authorization | Use in Judge selection |
| Approve-with-conditions | Recommended governance policy above | Judge explicitly selects rows; Cowork records bounded packet |
| Reject | Trailer automatically permits crossing or clears CI | Preserve distinction in instructions and tests |
| Defer | Hook change, exception mechanism, closure and product work | Separate execution authority, implementation evidence and independent review |

### D-223 independent review — test the changed behavior, not a preserved outcome (2026-09-10)

**What happened / scope:** review at `98b35d3`, using D-223 and canonical C-35 against the
unchanged classifier, hook delegate and consistency runner. D-223 records the selected policy;
this review does not ask the Judge to select it again or claim implementation has happened.
Only this existing Lane B handoff is amended; Lane A answers and owns source corrections.

**Citation corrections confirmed:** `lane-boundary.mjs:193` is the comment, `:194` the
condition, `:195` the finding insertion. `check-consistency.mjs:63` increments failures and
`:64` prints FAIL; its final exit converts failures into a nonzero result. These are factual
source-location repairs, not new business decisions. Prefer a function/condition anchor
alongside the line number; line numbers alone move after edits.

**Preserve:** declaration is not permission; CI still fails for the inspected mixed-tool path
set; the main classifier routes workflow files to C; the direct exported lookup is defective;
C-35 waits for C-39's fixtures; C-42 is not closed by classifier tests. The earlier B-011 review
already distinguished the direct-call defect from the protected main classifier, so no
withdrawal of an alleged live-check misclassification is needed.

**New drafting defect:** D-223 requires its added trailer-present fixture to be “red before
the hook lands, green after.” That outcome already holds before the change: mixed A tools
produce one `byLane` entry, so `lane-gate.mjs` exits 0 before reading ANY trailer; the
consistency check independently reports the mixed tools and fails. The added fixture is a
valuable preservation test, but cannot distinguish the old hook from the proposed hook.
This conclusion follows from the current control flow; no temporary mixed commit was created.

### What Lane A needs — parent-first corrective packet

| Order | Owner / action | Acceptance evidence |
|---|---|---|
| 1 — policy retained | Cowork preserves C-35's `Tool-Crossing:` spelling for internal A crossings and `Lane-Crossing:` for A/B/C crossings | These are separate declarations, neither an authorization token. This clarifies B-011's earlier generic trailer wording using the existing canonical control |
| 2 — fix the test contract | Cowork appends a narrow correction to D-223: the new blocking behavior must fail its expected assertion before implementation; existing correct behavior must remain passing | No demand to make a valid existing preservation test fail artificially; no policy reversal |
| 3 — prerequisite | Code supplies C-39 fixture completion evidence before starting the C-35 execution unit | Recording policy or this correction does not satisfy the start condition or grant execution permission |
| 4 — bounded implementation packet | Code specifies guard, comment, `scripts/lane-gate.mjs` behavior and fixtures; Cowork closes the write set and DoD | `.githooks/commit-msg` currently delegates to that script. Name the actual implementation file, not only the wrapper. No workflow edit is implied |
| 5 — verify / hand back | Code runs cases below; Cowork records the existing Register handback; Lane A answers B-011 | Independent review uses the application evidence; no lifecycle promotion from a plan or a test count |

### Minimal fixture outcomes — scope each expectation

The hook values below mean the lane/tool declaration checks, assuming the harness can run
Git normally; they do not promise every unrelated hook or test passes.

| Inspected path set / trailer | Before implementation | Required target | Purpose |
|---|---|---|---|
| Mixed A tools, no `Tool-Crossing:` | Hook passes; suite fails | Hook blocks; suite fails | Red-before-green test of NEW blocking behavior |
| Mixed A tools, valid `Tool-Crossing:` | Hook passes; suite fails | Same | Preservation: declaration must not clear CI |
| Mixed A tools, malformed/body-only tool declaration | Hook passes; suite fails | Hook blocks; suite fails | New parser behavior, Git trailer definition |
| Single A tool | Hook passes; lane-boundary has no crossing finding | Same | Preserve ordinary work |
| Simultaneous A/B/C lane crossing and A-tool crossing | Only lane declaration is currently checked | Require each applicable declaration independently; neither substitutes for the other | Both present, each missing separately, and neither present; suite still reports crossings |
| Direct workflow path lookup | `subOf` returns `A-cowork` | Returns null; `classify` still assigns C | Red-before-green assertion against the correct target, not an assertion that enshrines the bug |

For the direct lookup, record the old returned value as reproduction evidence, but make the
regression assertion expect null. Preserve the unmapped handoff and exact-file exception
cases. Specify the paths used in every test; a green HEAD-only check is not proof of a
clean accumulated push or PR range.

**What was done instead:** source review and this corrective draft; no hook, script, CI,
schema or product implementation. Product/Modular_PRD, storyboard/panels, UML/data flow and
Encyclopedia remain unaffected by this development-control correction, not independently
re-verified. The journal remains historical context; existing Register/C-35/B-011 records
carry policy, condition and response respectively. No new tracking channel is needed.

**Graph:** analyzed revision remains `4005d58`, behind reviewed `98b35d3`. No semantic
currency claim or rebuild; Lane A synchronizes before the next consuming approval.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-223 citation corrections and retained declaration/CI distinction | Preserve; no repeat Judge choice |
| Approve-with-conditions | C-35 execution plan | Correct test contract, name script target, satisfy C-39 and bounded authorization |
| Reject | Added trailer-present fixture must be red before the hook change | Replace with preservation test; trailer-absent case proves new blocking |
| Defer | Tooling application, graph synchronization and whole-entry closure | Owning Lane A unit, then independent review |

### D-224 independent review — distinguish fixture families and test verdicts (2026-09-10)

**Reviewed at `195c2ca`. Task:** verify the corrected C-35 plan, retain settled policy and
give Lane A only the remaining drafting corrections. No policy selection, implementation,
or lifecycle promotion is made here. Lane B raises; Lane A answers this existing entry.

**Accepted:** D-224 correctly distinguishes the trailer-absent behavior change from the
trailer-present preservation case, names `scripts/lane-gate.mjs` as the implementation
target, keeps the delegating hook unchanged, and retains the C-39 prerequisite. Do not
repeat these fixes or ask for another Judge decision on the same policy.

**Remaining source defect — fixture families conflated.** C-35 now calls its planned
single-tool, mixed-tool, simultaneous lane-and-tool and rule-file-exception cases “original
fixtures” which “pass unchanged,” and includes the `d6d406a` case in that description.
But `scripts/fixtures/suites.mjs`'s `laneGate()` currently stages CI plus CONFIG_LOG (C+A)
and tests valid lane trailer, separated/body-only lane trailer, and absent lane trailer.
Those are existing **lane-declaration** fixtures, not the planned **tool-crossing** cases.
The existing harness does not establish the claimed tool-case coverage.

**Proposed replacement meaning for Cowork:** preserve the existing named D-88/D-105
lane-declaration cases unchanged; ADD the canonical C-35 tool and combined-crossing cases.
For combined crossings, test each applicable declaration absent separately and both present.
The table of new cases is a plan until implemented and run. Refer to case names, not a
restated fixture tally. Correct C-35's current instruction and append the narrow correction
to D-224's historical claim; do not rewrite decision history.

**Evidence wording:** “pre-fix PASS” describes the hook's exit, not a passing regression
test. The expected target stays fixed across both runs:

| Observation | Pre-fix | Post-fix |
|---|---|---|
| Mixed A tools, no tool trailer: hook exit | 0, does not block | 1, blocks for missing tool declaration |
| Regression assertion: expect blocking for that reason | FAIL (red) | PASS (green) |
| Mixed A tools, valid tool trailer: hook exit | 0 | 0 |
| Preservation assertion: commit declaration check passes, crossing still produces suite failure | PASS | PASS |

Record expected versus actual result, diagnostic, inspected paths and tested revision for
each run. A source trace may predict the old result but is not an executed fixture log.
The missing-trailer case is the primary new blocking proof, not the ONLY possible new
behavior proof: malformed tool trailers, combined declaration handling and the direct
`subOf` correction also need their own target assertions. Reject any inference that naming
one red-before-green case retires the other requirements.

**Lane A's small steps, parent first:**

1. Cowork corrects the canonical fixture-family and evidence wording above; policy stays.
2. Code establishes C-39 prerequisite evidence and obtains the bounded C-35 execution
   authorization. A correct draft alone does not start implementation.
3. Code extends the named fixture suite with appropriate A-tool paths, retaining the old
   lane cases. The existing C+A setup alone cannot exercise an internal Cowork/Code crossing.
   Preserve/restore files and index state; do not run mutating fixtures in a shared dirty tree.
4. Run target assertions against the old implementation, then the authorized corrected one;
   distinguish new-behavior failures from preservation passes. Record evidence, not a count.
5. Cowork records the existing Register handback and answers B-011. Code synchronizes graph
   at the consuming revision; Lane B independently reviews. No journal ledger or new channel.

**Scope / what was done instead:** read source and drafted this handoff only. Product,
Modular_PRD, storyboard/panels, UML/data flow and Encyclopedia behavior are unaffected, not
newly verified. No build, hook, fixture, workflow, schema or governed-document edit. No new
artifact is proposed; Build/Inventory changes are not warranted by this review alone.
Graph remains behind the reviewed source (`4005d58` analyzed versus `195c2ca` reviewed);
source inspection, not stale semantic results, supports these findings.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-224 behavior distinction, script write set and prerequisite | Preserve |
| Approve-with-conditions | C-35 fixture contract | Correct family mapping and assertion evidence; then bounded Code execution |
| Reject | Planned tool cases already pass unchanged; hook exit 0 itself is a red test | Correct canonical wording, retain named coverage |
| Defer | Implementation, synchronization and whole-entry closure | C-39 evidence, authorization, execution and independent review |
