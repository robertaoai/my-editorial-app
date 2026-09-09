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
