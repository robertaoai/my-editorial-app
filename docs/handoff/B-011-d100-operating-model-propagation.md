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
