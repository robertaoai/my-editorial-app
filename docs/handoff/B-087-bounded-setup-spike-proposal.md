# B-087 — Bounded backlog review for the next setup iteration

- **Raised:** 2026-09-11 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, advisory proposal; existing execution holds remain independently binding
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** a55161f0832c6c01bbaeafbb35d98926acee0867
- **Evidence:** Chief Editor's current Approve-with-conditions instruction; source review cited below. No new runtime test, user walkthrough, build authorization or release claim.

## What happened

The Chief Editor requested an agile project-setup spike using the existing sprint/version sequence as its baseline. This is one proposed iteration within that baseline, not a replacement roadmap or an S2 build packet. Recommendations remain advisory. The Chief Editor selected **LinkedIn manual-ready delivery** and clarified: "no time-sensitive customer; this M-MVP is to help M-POC for marketing of a time-sensitive customer;". Working interpretation: no current urgent customer deadline has been established; M-MVP should support M-POC marketing for time-sensitive customer work. Test the usefulness and turnaround of that support rather than assume a direct standalone MVP sale. Quarterly goals, capacity, a representative article and effort estimates remain unconfirmed.

## Baseline and preserved learning

- [Build Spec](../v1/V1-BUILD-SPEC.md) §2/§4/§8 keeps S0 and S1 frozen, S2 current but held, and the existing S3/S4 sequence. No successor version is opened here. [Phase Closure](../v1/V1-PHASE-CLOSURE.md) §5 remains the sole lane-state authority; at the reviewed commit A is Active and B Eligible.
- [B-059](B-059-lb-s1-02-database-verification-turn-report.md) records actual local PostgreSQL execution, the savepoint/subtransaction defect found and fixed, rollback and append-only checks, and acceptance of multiple commissions using one source. The database test is present at `supabase/tests/database/s1_transition_enforcement.test.sql`. Preserve this learning; do not repeat the entire experiment without a changed contract or a specific missing case. These are historical run results, not tests rerun today.
- Q1/Q12 are decided under D-163; Q11/schema naming and C-33 are settled. Q9 is decided as manual intake under D-194/D-197. FB-05 verification and G105 reconciliation are distinct remaining work. [B-082](B-082-v1-sprint-priority-and-intake-routing.md) preserves that separation.
- Hosted anon-key/privileged-role behaviour remains unverified under DEP-05. A local test cannot establish hosted enforcement or release readiness; credentials remain deliberately withheld in Product §7.2's dependency table.

### Actual S2 hold, not the retired Q1/Q12 explanation

The [Register](../v1/V1-DECISION-REGISTER.md) D-171 and Build Spec §4 hold both historical and target T5/T6-sensitive routes, RPCs, UI, migrations and tests. Required next steps are contract reconciliation through F6/F7 and a fresh, bounded authorization selecting the contract and exclusions. Lane B execution also needs the Active lane and an executable work order.

[B-071](B-071-b070-options-and-desk-editor-ontology-require-correction.md) is Deferred, with an explicit Phase 1/Cowork return condition: S2 hold release or separate authorization of the ontology correction. Its historical drafts include later Model A/T5-FINAL naming and authority proposals; those must not silently replace the still-held D-175–D-181 target. Its deferred lifecycle status does not prove its correction was implemented. Return only the portion necessary to choose the next unit, through its existing authorization route.

Route enablement additionally needs resolved executor, accountability and atomic-completion contracts for the operations it requires (D-177). A narrow control investigation need not enable every route. OD1/OD2 production conditions are separate from setup completion.

## One proposed iteration

**Outcome:** make an evidence-based choice about the next executable unit and the independent manual POC opportunity. Setup learning means accepted journey examples and a narrower uncertainty. Implementation readiness means an agreed contract, owners, access, dependencies, DoD and authorization packet. Release readiness means a usable and operationally supported journey with the relevant live-channel evidence; this spike does not deliver that.

**Capacity envelope proposed, not committed:** 12–20 total person-hours, approximately 2–3 person-days of effort, with elapsed duration set only after availability is confirmed. The Chief Editor's allocation is included, not extra. Item estimates below are rough planning ranges, not measured forecasts. If the envelope is unavailable, reduce depth and retain the outcome/capacity discussion, both journey paths and the commercial triage; do not silently substitute a smaller implementation.

| Selected item / order | Intended outcome and completion evidence | Proposed owner and remaining dependencies | Effort | What changes its priority |
|---|---|---|---|---|
| 1. Agree outcome, capacity and opportunity | Chief Editor records available hours, decision date and intended learning; LinkedIn ManualReady selected; release claims explicitly excluded | Chief Editor; operator availability unconfirmed; no current urgent customer established | 1–2 h | A newly confirmed customer deadline moves POC triage immediately after this item; inadequate capacity reduces the iteration scope |
| 2. Walk one article through normal and revision paths | Chief Editor accepts or corrects the examples below; record missing inputs, handoffs, repeated entry, elapsed effort and recovery ownership | Chief Editor with Lane B facilitating; one representative source and intended channel; proposed governance corrections remain visibly proposed | 2–3 h | Observed inability to complete intake or decide a revision outranks speculative technical work |
| 3. Reconcile only contracts encountered in that journey | Clause-level remaining-delta list for intake and final review, linked to existing decisions; owner, dependency and acceptance evidence for each; no settled question reopened | Lane A/Cowork; D-222 proposed intake wording, FB-05/G105 verification, B-071/F6/F7 bounded return/authorization | 3–5 h | A conflict that changes the next unit's behaviour moves first; wording that cannot affect that unit stays outside this iteration |
| 4. Define one transition/audit investigation | Existing S1 evidence mapped to the selected question; smallest missing case and executable preconditions identified; justified run-or-defer result | Lane B for eventual test; Lane A/Code for environment provisioning; contract selection, fresh test authority and lane activation before execution | 3–5 h | Drop the new experiment if prior evidence already answers it; replace it with publication-recovery investigation only if automated publishing is selected and access is ready |
| 5. Assess manual POC independently | One opportunity/readiness sheet: how LinkedIn delivery supports POC marketing, likely customer, desired commercial learning, operator hours, missing boundaries/templates, next decision and stop condition | Chief Editor as decision owner; named POC operator still needed; T3 conditions below | 2–3 h | An available customer plus operable boundaries raises priority above software readiness; absent demand or operating capacity reduces it |
| 6. Close the spike with a bounded next-step recommendation | Compare journey observations, technical uncertainty and commercial opportunity; recommend one next unit with DoD or an explicit dependency disposition | Chief Editor decides; Lane A records any subsequent authorization and required propagation | 1–2 h | New evidence changes the choice; easy tasks or recent documentation findings alone do not |

These are proposed responsibilities, not assignments accepted by the named people/tools. No concurrent lane execution is implied.

## Walkthrough examples to validate with the Chief Editor

Use one representative article, with a source reference, exactly one subject topic, source information and a trend-signal description. Until the user supplies an article, these remain acceptance drafts rather than a completed walkthrough.

**Normal path:** Given a complete manually supplied package, when the Reporter executes intake, record the human supplier separately from the executor. Validate and investigate the source, draft without changing its meaning, and assign the intended publication target. Required reviewers record attributable evidence. The selected final-review contract must state exactly which act changes state, who makes the final human decision and what remains hidden until an independent judgment is sealed. After approval, a LinkedIn delivery produces formatted ManualReady content. It becomes Published only after a real manual publication and recorded live URL; neither ManualReady nor MockPublished proves publication.

**Revision path:** Given that the same draft overstates a source claim, when a reviewer returns it, retain the earlier judgment and reason; the operator can identify the requested correction and the stage to resume. After correction, rerun the affected review under the selected contract. For the D-178/D-181 target, distinguish a single-reviewer defect from shared evidence invalidating a bundle. Final names, state transitions and retained/replaced evidence must be confirmed through the unresolved B-071 contract; do not label this path implemented. A returned or incompletely reviewed article must not acquire a live publication event.

**Boundary examples:** missing required intake component gives a named failure and no completed-intake transition; a separate commission may cite the same source; optional analytical tags are not required subject topics. D-222 proposes a supplied Markdown alternative when content cannot be reached by URL, and source-reference validation is distinct from trend-evidence quality. Verify source application before accepting that alternative as implementation-ready; do not reopen the unchanged evidence scoring policy.

For each path, record where the Chief Editor hesitates, must re-enter information, cannot tell who acts next, or cannot recover a mistaken action. Actual observations, not assumed severity, determine the next backlog priority.

## Selected technical question and access gate

**Question:** under the selected final-review contract, can duplicate completion submissions or an interrupted completion transaction produce more than one state advance, incomplete review evidence, or an orphan audit record?

This directly affects the next S2 unit and builds on S1's discovered transaction defect. First inspect the existing savepoint/rollback/duplicate cases for coverage; the new review-bundle contract may introduce a gap, but this review does not claim a demonstrated defect. If a gap remains, propose one disposable-local-database experiment: a valid completion control, duplicate submissions and a failure between audit insertion and state update. Expected evidence is one permitted state advance with complete required review/audit records, or a rollback preserving the prior state with no orphan completion record. Record actual outcomes and any unresolved uncertainty.

Before execution, confirm the local database runner is available, its disposable target is identified, the contract is authorized, Lane B owns the new test/migration surface, and Lane A has provisioned dependencies. Do not pull hosted credentials or execute T5/T6-sensitive tests under the current hold. No S1 migration edit is proposed. A new experiment is a later authorized unit; this spike selects and specifies it.

## Publication and commercial branches

Publication requirements come from [FN-PUBLICATION](../fn-specs/FN-PUBLICATION-09-10-13.md) and Build Spec §4/S4. **LinkedIn ManualReady** requires a usable handoff, human operator, confirmation URL and audit trail; it does not require a LinkedIn publishing integration. **Automated WordPress** additionally requires credential isolation (NFR-07/SEC-02), the TC1 privileged-write amendment, access ownership and recovery evidence. D-143 already selects Edge Function publishing and pg_cron retries; do not reopen that runtime choice. Before enabling external actions, establish credential provisioning/revocation ownership and recovery for ambiguous success, bounded retries, duplicate-publication avoidance and ManualReady fallback. No external action is enabled by this proposal.

Manual POC assessment follows [M-POC](../modules/M-POC-REQUIREMENTS.md) §9/§10 and Build Spec §5, independently of S2 completion. Validate G7a charter, QB, B-P0-06's actual boundary values, auditor access/disposal authority and the applicability of C-15 before real client data. Inspect and demonstrate the EB-1 manual templates and folder separation; inventory G28 records them missing, and the current filename scan found no operational template set. That scan is not proof no operator has templates elsewhere. Ask the operator for existing artifacts before commissioning replacements. Keep payment outside the app and client packages separate from publishable articles. Assess a real opportunity, ability to deliver and a review/stop date; no outreach or engagement begins in this spike.

AI tagging, notifications, extra channels, audience expansion and tooling remain candidates for evidence, not declarations of low value. Promote a candidate when observed delay, error, missed demand or operator cost shows a benefit sufficient to displace a selected item, with dependencies and version restrictions addressed. Being outside V1 alone is not a value ranking.

## What was done, and what remains proposed

Completed here: scoped source/evidence review and this iteration proposal. Not completed: Chief Editor walkthrough, capacity agreement, technical experiment, POC operational validation or iteration acceptance. No code, governed source, build configuration, lane state, sprint status or external service changed. Graph metadata was behind the reviewed HEAD; no semantic graph result was used as evidence. Broad graph/documentation automation and historical cleanup are excluded unless a specific consuming decision requires current evidence.

Only this advisory handoff is authored. Project PRD/Charter, Product/Modular_PRD, Fn_Specs, SPECS and all three V1 trackers are unaffected by application in this pass. If a later Judge decision creates or sequences an artifact, Lane A must propagate that fact under D-54; this proposal does not pre-apply it or close a sprint/tier.

Validation: `bun run check` executed with subprocess access after the sandboxed attempt could not run its Git subprocesses. It reported failures only for `handoff-response` (this new entry needs Lane A acknowledgement), `graph-coverage` (this entry needs graph coverage), and `docs-drift` (graph analyzed `4005d58`, reviewed HEAD `a55161f`). Other checks passed. Lane A owns those follow-ups; this entry neither acknowledges itself nor claims graph consistency. The sole path bound for the D-184 handoff commit is `docs/handoff/B-087-bounded-setup-spike-proposal.md`.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | V1 tracking — existing sprint/version baseline and this advisory setup iteration | Phase 1 backlog review: confirm capacity, journey outcomes and owners |
| Approve-with-conditions | M-POC — independent commercial readiness assessment | T3: validate opportunity, operational boundaries and capacity |
| Defer | S2 / SPECS / application execution | Phase 1 contract reconciliation and fresh bounded authorization, then Phase 2 lane activation |
| Defer | S4 / release and external publication | Channel-specific credential, recovery and release evidence |
