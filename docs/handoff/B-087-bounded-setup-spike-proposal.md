# B-087 — Baseline alignment and parent-first artifact follow-up

- **Raised:** 2026-09-11 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** acceptance of this consolidated alignment packet as complete; no unrelated authorized work; existing execution holds remain independently binding
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** fa30c2bdd2ce10e75f0b45a90c672a3062665ccc
- **Evidence:** 2026-09-11 follow-up reviewed against fa30c2b: existing handoff headers and cited answers; Product/functional/technical sources, storyboard panels and embedded sequence/data-flow diagrams, requirements cross-reference and Encyclopedia ledger; local consistency checks. Hosted Encyclopedia retrieval failed. No application test, product walkthrough, source application, graph synchronization or closure claimed.

## What happened

### Current follow-up — 2026-09-11; read before the earlier proposal

**Clarified request:** review Lane A's existing handoff answers and the preceding baseline analysis; identify remaining gaps, draft their fixes, and give Lane A and the Judge a parent-first decision and completion guide. Review Product requirements, storyboard/story panels, UML-style sequence and data-flow views, Encyclopedia dependencies and cross-references. Check graph drift. Complete the review and implementation plan only: no application build, governed-source application, lane transition, renamed version, external publication or fabricated acceptance.

This is the continuation of **B-087**, not a new intake or closure tracker. **Lane B raises; Lane A answers; the independent reviewer verifies the bounded correction.** The user's approval of the decision-tree direction is sufficient to prepare this packet now under the existing B-083 rule; it does not select every proposed product option or authorize its application. No repeated permission to draft is needed.

**This follow-up supersedes the earlier proposal's recommendation to preserve the current sprint sequence without first reconciling it to the original delivery outcome.** Its 12–20 person-hour envelope, priority order and experiments remain uncommitted proposals, not accepted estimates or dependencies. The original text below is retained as dated proposal history.

Already clarified by the user: manual URL/Markdown input and supplied editorial context; LinkedIn ManualReady first; M-MVP supports M-POC marketing; the desired second product iteration is both fully usable and reusable across the modules. No current urgent customer deadline was established. Capacity, a representative article and a revision example remain unconfirmed. These missing inputs do not block this documentation review.

### 1. Preserve existing dispositions; do not close the wrong object

The following is a **review snapshot at fa30c2b**, not a second live status table. Each linked entry remains its own lifecycle record. Header inspection and this scoped source review do not independently re-certify every earlier verification.

| Existing entry | Recorded disposition / preserved scope | Remaining work stays where |
|---|---|---|
| [B-080](B-080-d193-business-routing-and-evidence-review.md), [B-081](B-081-reporter-ai-capability-backlog-intake.md), [B-082](B-082-v1-sprint-priority-and-intake-routing.md) | Verified for their bounded business-routing, module/backlog and sprint-readiness corrections | New baseline-alignment choices are here; their verification does not implement the app or close intake verification |
| [B-083](B-083-decision-tree-and-judge-authorization-routing.md) | Verified decision-tree/action-authority correction | Reuse its rule; do not create another approval process or reopen Q9 choices already decided by D-197 |
| [B-084](B-084-d197-manual-intake-specification-reconciliation.md) | Applied, not independently Verified | Existing intake/acceptance/view packet, FB-05 verification and G105 evidence; use its F1/F2/F3 follow-ups rather than mint duplicates |
| [B-085](B-085-external-docs-audit-disposition.md) | Verified audit disposition and first-read notices; historical sprint bodies preserved | Its limited acceptance is not an all-documents-consistent claim. The newly observed D-37 provenance discrepancy below is a narrow correction, not withdrawal of the historical notices |
| [B-070](B-070-lane-b-work-order-stale-s2-instruction.md), [B-071](B-071-b070-options-and-desk-editor-ontology-require-correction.md) | B-070 Applied; B-071 Deferred with a named return condition | Final-gate/role reconciliation and any future S2 authorization remain in that chain. Do not revive a held T5/T6 implementation through a roadmap label |
| [B-086](B-086-d200-tool-split-and-handoff-bootstrap-review.md) | Applied. Its A-entry-series child is Superseded; tool-control work is separately Deferred to C-35 | Verify its remaining ownership/runbook children there. No A-NNN entry and no new tool-control prerequisite is introduced here |
| [B-077](B-077-consolidated-handoff-closure-and-failure-pattern.md), [C-001](C-001-rename-required-check.md) | Deferred in their existing scopes | Broader closure automation and CI/repository-setting work do not become prerequisites for this product alignment without a demonstrated dependency |
| B-087 | Open; Lane A field is blank at the reviewed revision | Lane A acknowledges and answers this consolidated packet here; Lane B does not impersonate that acknowledgement |

`Answered` means a response exists. `Applied` means a correction landed, not independently verified. `Verified` covers its named correction at its evidence revision, not all neighbouring artifacts. `Deferred` retains the follow-up scope and return condition. None of those words establishes a working product. Reuse the handoff SOP's states; **Accept/Reject below are decision choices, not new Resolution values**.

## What you need

### 2. Highest parent — reconcile outcome, scope and evidence before choosing an iteration

Historical evidence was checked against git: `62c8d8c` is the generic starter; `53ace36` first introduces the project PRD/plan/schema. `docs/PRD.md` remains identical to that project baseline. Original `docs/TASKS.md` names four sprints, with the functional V1 milestone at the end of Sprint 2. Its Sprint 3 is access control and Sprint 4 refinement/insights, not monetization. The current build sequence uses different sprint meanings. No historical identifier changes here.

| Baseline or clarified outcome | Current evidence | Gap / proposed destination | Parent dependency and owner |
|---|---|---|---|
| Original S1: article CRUD, board/detail and gate progression usable against the database | Config and migration work; B-059's local PostgreSQL evidence; current `app/page.tsx` is starter content | Preserve setup evidence; retain unbuilt user actions as product work. Do not equate current S1 completion with original S1's whole outcome | Lane A/Cowork maps original outcome to current requirements; Lane B later constructs the authorized unit |
| Original S2: usable editorial delivery; user adds reusable engine for M-MVP/M-POC | Fn_Specs and module separation exist; current S3/S4 remain not started | Proposed V1 outcome: manual intake, normal/revision paths, audit visibility, LinkedIn ManualReady, shared behaviour with separated outputs | Accepted behavioural contract, including B-084 and B-071 as applicable; fresh implementation scope required |
| Original S3: authentication/access control | Single-account boundary and deferred access scope remain; a tenancy column is not account functionality | Retain access as explicit capability; distinguish operator login, multiple staff accounts, client access and multiple teams | Judge selects required audience and version; existing NG-02/frozen-source change path governs expansion |
| Original S4: refinement/insights | Historical proposal, not completed capability evidence | Keep relevant candidates; no automatic inclusion in V1 or the next version | Benefit, cost and capacity evaluation in existing Product backlog |
| Monetization and broader account access now raised by user | Frozen PRD/Charter exclude V1 monetization and multi-team accounts; M-POC allows external manual payment | Proposed scope decision, not recovered original sprint content. Manual POC learning can proceed on its own readiness conditions | Judge decides any governing successor/exception and bounded scope before software construction |
| Suggested V0 label | Some delivered work is setup; `docs/v1` also contains held/unfinished product scope and enduring decisions | Recommend descriptive **setup/scaffold evidence** classification first. A V0 product version or folder rename remains a separate choice | Judge accepts the mapping before any version allocation or lifecycle change |

**Draft baseline framing for Lane A's response:**

> We will distinguish the original usable-by-Sprint-2 milestone from today's setup completion. Completed configuration and local database learning are retained. The intended product outcome is a complete manual-input editorial journey to LinkedIn ManualReady, with the same editorial behaviour supporting M-MVP and M-POC and their outputs kept separate. “V0/setup” is proposed as an evidence classification, not an enacted release or a rename of docs/v1. Monetization and additional accounts are scope proposals requiring their own governing decision. Current holds remain until a separately bounded authorization changes them.

This is complete proposed response text; it creates no source-tier decision. **Do not substitute “everything in docs/v1 is V0”**: that would move unfinished product scope and lasting decisions into an apparently completed setup bucket.

### 3. Decision table — what the Chief Editor/Judge actually needs to decide

The Chief Editor/Judge is the user making project decisions here. This does not determine the in-app executor role whose naming remains in B-071. The storyboard's historical “Lane A — MVP / Lane B — POC” denotes business paths, not development Lanes A/B/C.

| Order / depends on | Concrete question or action | Accept means / Reject or Defer means | Owner and next artifact/evidence |
|---|---|---|---|
| P0 / none | Follow the already approved decision tree and prepare this packet | Already authorized; no new choice required | Lane B delivers this review; Lane A acknowledges it. B-083 remains Verified |
| P1 / P0 | Is §2's outcome/evidence mapping the intended basis for the next roadmap proposal? | Accept permits refinement on that basis; Reject identifies the outcome or scope row to correct. Neither answer relabels releases or lifts S2 | Judge; Lane A/Cowork prepares the exact affected tracking/requirement patch after the mapping is accepted |
| P2a / no dependency on P1's naming choice | Finish B-084's already-owned intake contract and acceptance/view packet | Reuse D-194/D-197 decisions and D-219–D-222's proposed text. Ask only about a remaining choice or application scope not already covered | Lane A/Cowork; complete source crosswalk and acceptance examples. No need to re-decide manual supply, A1/B1 or AI backlog identity |
| P2b / P1 for new outcome allocation | Refine the shared usable outcome and normal/revision paths | Accept requires a concrete example showing both module uses; Reject identifies missing behaviour or exposure boundary. Final-gate-specific details remain subject to B-071 | Chief Editor supplies one article and revision reason; Lane A drafts requirements/examples, Lane B reviews implementability |
| P3 / accepted P1 and completed dependent packet | Apply an exact documentation write set? | Accept must identify the files/sections and any choices covered; Reject/Defer keeps proposed text unapplied. Existing authority covering that exact write set is reused | Judge where a new act is needed; Lane A applies within its surfaces and records tier impact under D-54 |
| P4 / applied relevant sources | Verify the source corrections and dependent views | Acceptance is based on source/evidence comparison at a named revision; incomplete or contradictory results return to their existing entry | Independent Lane B review; per-entry lifecycle evidence, not a bulk “all handoffs closed” declaration |
| P5 / accepted outcome, readiness and capacity | Select and authorize one implementation unit | Accept names scope, DoD, exclusions, dependencies and executing lane; Defer keeps the prepared packet available | Future Judge act and work order. **Not requested for execution in this turn** |
| Independent commercial branch | Decide whether monetization/additional-account refinement is wanted, and for which audience/version | Accept refines the candidate; it does not lift frozen exclusions or activate paid/customer access. Defer retains existing capability identity and return criteria | Judge and Product backlog owner; manual M-POC opportunity/readiness stays separate |

The unresolved human inputs are practical: a representative article; what should cause revision; the expected M-POC marketing deliverable and what must remain internal; operator capacity; and whether V0 is only a descriptive label or a proposed product version. These are **not reasons to stop drafting the known corrections**. No numerical ranking or sprint commitment is earned without the relevant inputs.

### 4. Artifact review and draft fixes — source first, views second

This is a bounded content review, not an assertion that every file in docs is semantically verified. Story panels are sections of the storyboard, not separate artifacts. Its Mermaid sequences and flowcharts are the inspected UML-style interaction/data-flow views; no new standalone UML or UX artifact is required merely to duplicate them.

| Artifact / observed gap | Draft fix / boundary | Existing owner and completion evidence |
|---|---|---|
| Product `Modular_PRD` §0.6/§8 separates modules and sprints, but has no adopted mapping of this latest clarified usable/reusable outcome to delivered scaffold | Use §2's matrix as the proposal input. Keep module identity/status in §0.6.1, capability rank/readiness in §2.5.2, execution mapping in §8; no second status ledger in this handoff | Lane A/Cowork; Judge accepts mapping before allocation; D-54 propagation if artifact sequence or scope changes |
| `FN-GATES`/Addendum input-domain and acceptance reconciliation remains owned by B-084. Product's wider source-reference language and older URL-only clauses cannot jointly define one executable contract | Reuse the complete D-219–D-222 packet, including D-222's canonical URL/Markdown wording; align acceptance clauses as well as FR wording. Preserve source information separately from nullable extracted author/date, one subject separately from analytical tags, and supplier separately from executor. Evidence scoring remains unchanged | B-084, Lane A/Cowork; exact applied clauses and cases in §5, then independent verification for FB-05/G105 |
| Storyboard A1/A2/B2 remains URL-oriented; A2's dated warning still says its “no producer” annotation is NOT superseded although D-197 specifies the producer | Replace only that current-status annotation with the complete text below; preserve historical arrows under their existing supersession warning. Derive a current sequence from the accepted contract before using it for construction | B-084's existing view follow-up; current annotation and selected sequence agree with source contract |
| Storyboard A5/A6 and their review sequence show historical T5-human/T6-agent order; B3–B6 inherit it | In any current-use reference, label this as historical and held under D-171; point to B-071 for the selected successor contract. Do not draw a new “current” final-gate sequence by picking one of its drafts | B-071; final gate/role/state contract accepted and propagated before those views become build input |
| Storyboard A7 says publication tables do not exist; B7 describes the report-home gap in historical terms | Treat these as dated scaffold observations; add current-use pointers to B-059/0002 for local data evidence and the publication/POC specs for remaining behaviour. Table existence is not a working delivery flow | Lane A/Cowork, within the existing storyboard follow-up; dated claim distinguished from current evidence |
| `requirements-scope-knowledge-graph.md` still says CR-14 has no FR; traceability map §4/§7 already points to FR-01 and pending verification | Replace both its CR-14 Mermaid edge/node and its open-gap row with the complete text below. Rebuilding runtime Graphify cannot fix this authored source diagram | B-084 F2; both diagram and prose match the actual map, without inventing new scope counts |
| D-37 says the original plan pack came from Q&A and is “silent on governance”; shared rule headers and `docs/README.md` still describe name-only generation / wrong governance | Use the complete provenance paragraph below; preserve historical/non-executable notices. Correct the shared core in all three rule files together if authorized, and the README's matching origin claim. D-58 resolves precedence; no new product decision is needed to rediscover D-37 | Lane A/Cowork; exact bounded source correction and `shared-core-hash` check, not reopening B-085's finite accepted notice work |
| Encyclopedia Entry 06 ledger remains at f7b3aea; Entry 01/05 also depend on gate/role decisions relevant to a later selected contract | Add impact/re-check reasons without advancing verification SHAs. Update the hosted entries only after their source is accepted and the hosted contents can be read. Entry 04 is relevant to ManualReady/publication interpretation; Entries 02/03 were not substantively re-reviewed here | Existing Encyclopedia ledger and B-084 F1; local dependency review and hosted parity reported separately |

**Complete proposed replacement for A2's live “NOT superseded” annotation:**

> The historical no-producer finding above is superseded for current use by D-194/D-197: the Chief Editor supplies the editorial package and the Reporter agent records intake, with supplier and executor recorded separately. Q9's A1/B1 choices are decided. The remaining work is the input-domain, acceptance and dependent-view reconciliation tracked in B-084, followed by independent verification under FB-05 and the corresponding G105 evidence. The earlier arrows remain historical and are not build input. They neither authorize AI-generated intake values nor establish an implemented manual-input interface.

**Complete proposed CR-14 source-diagram replacements, reusing the existing GAP14 node ID:**

```mermaid
    PS -->|manual contract traced to FR-01| GAP14["CR-14: manual intake specified<br/>FB-05 reconciliation and verification pending<br/>Future AI generation: PBL-11, unranked"]
```

Replace its corresponding gap row with:

> CR-14 Reporter intake | Covered as the ratified manual contract by FR-01; reconciliation and independent verification remain | Complete the existing B-084 source/acceptance/view packet and verify FB-05. PBL-11 is separate future AI generation; it is not a condition for manual intake completion.

**Complete proposed provenance paragraph for the shared rule header and matching README explanation:**

> The original plan pack came from the project's Q&A flow alongside docs/PRD.md (D-37). It is a set of frozen candidate references: accurate about the provisioned substrate and silent on later governance. Its original sprint plan and success milestone are historical evidence, not current execution instructions. Consult the operative Register, Build Spec and Lane B work order for current scope and authority. Preserve the original content and reconcile any proposed reuse against the accepted requirements.

These are draft fixes, not applied replacements. Lane A must bind them to the exact existing paragraphs and relevant authority; no broad find-and-replace is proposed. The source-owned D-222 replacement packet is referenced rather than copied into another competing specification here.

### 5. Failure cases become measurable acceptance evidence

The following failures are predictable violations of the stated contract, not a prediction of bankruptcy or a guarantee of commercial success. They identify what evidence must prevent wasted construction and unusable delivery. No tests or user walkthroughs below were executed in this review.

| Failure to prevent | Acceptance / learning evidence required | Claim level and owner |
|---|---|---|
| “Applied” or a green checker is treated as all artifacts done | For each requested correction, show its exact source clause, applying revision, independent comparison and remaining follow-up. A missing diagram correction keeps that correction pending even if the file exists | Documentation verification; Lane B independently reviews Lane A's answer |
| Manual input waits for AI generation or optional tags | An otherwise complete package with one subject succeeds with zero analytical tags and with several tags; supplier/executor remain separate. AI generation is not an entry prerequisite | Behaviour acceptance in B-084; later runtime evidence in the authorized code unit |
| URL and Markdown are nominally accepted but a later clause rejects every non-URL input | Cases: valid URL passes; authorized supplied Markdown passes when content cannot be reached by URL; no source reference fails; missing subject or required trend description fails by named component. Confirm source-information requiredness. Preserve author/date extraction failure handling and the distinct evidence-quality rule | Source/acceptance review first; runtime only after authorization |
| A state appears completed before its audit evidence, or retry adds a duplicate completion | Preserve B-059's local transition/rollback learning. Define the missing case for the chosen new contract before proposing any experiment; a successful state advance has the required preceding audit evidence, and a rejected transaction leaves no orphan completion | Technical design and later local test; hosted roles remain unverified under DEP-05 |
| The app works only for M-MVP while M-POC needs a second pipeline | Walk the same representative material through direct intake and manual POC pre-intake; same editorial gates/validation, explicit differing origin and outputs, no publishable article leaking into the client package | Chief Editor accepts examples; Lane A traces existing M-POC PR-01/PR-11/PR-12 and PA-02; Lane B later verifies implementation |
| Revision cannot be completed or silently retains invalid review evidence | Use one overstated source claim: record return reason, correction, affected re-review and final decision. The chosen contract determines which evidence must be re-sealed; do not invent a resolution to B-071 in a storyboard | Behaviour acceptance before final-gate design; Chief Editor and Lane A |
| ManualReady or MockPublished is counted as a live publication | LinkedIn ManualReady supplies usable formatted output; only actual publication plus recorded live URL establishes Published. No external publication is required to approve this planning example | Publication acceptance; later authorized operational evidence |
| Setup completion is presented as product or business success | Demonstrate the actual article journey before “usable”; demonstrate both module uses before “reusable”; measure operator time, repeated entry and rework before claiming workflow benefit. No revenue forecast follows from a schema test | Product acceptance and separate M-POC learning; Chief Editor sets capacity and evaluation criteria |

### 6. Lane A follow-up — execute only the appropriate layer

1. **Acknowledge this entry.** Answer within B-087; reuse B-083's decision-tree rule and the existing handoff template. Do not create an A-series entry or another intake system.
2. **Review §2 with the Judge.** Present the outcome/evidence mapping and the concrete V0 classification choice. Preserve original and current sprint identities. Do not ask again whether intake is manual or whether LinkedIn ManualReady was selected.
3. **Prepare independent children in their existing homes.** Complete B-084's bounded intake/source/view packet without waiting for a version-label choice; refine reusable normal/revision examples against the accepted outcome; return B-071 only through its own applicable condition/authority. These branches are not a single artificial chain.
4. **Bind the application packet.** Name exact clauses, accepted decisions, exclusions and evidence. If a new act is needed, ask the Judge once about the concrete write set. No general “Approve” row authorizes all descendants. Apply full approved wording, not a summary of it.
5. **Propagate facts at their owners.** Register always; Build Spec for scope/sequence/DoD; Inventory for created/sequenced/retired files, in the same pass when D-54 applies. Product §8 changes for accepted execution mapping and at its required sprint/tier boundary. Requirements and functional specs own behaviour; technical specs own transaction design; storyboard and source diagrams derive from those. Frozen PRD/Charter remain untouched; any contrary future scope follows the governing-successor decision path.
6. **Synchronize the consuming graph revision, then verify.** Claude Code operates Graphify; Cowork supplies any changed curated meaning. Follow §7 and the installed skill. Independent Lane B checks actual source/view content and the applicable evidence; a green graph check alone is insufficient.
7. **Record bounded closure.** Keep already-Verified handoffs unchanged. Record Applied only for actual applied fixes; record Verified only after independent evidence at an existing revision. B-084/FB-05/G105 keep their own closure conditions, and B-071's Deferred state is not proof that its fix exists. B-087 may close only when Lane A answers its requested consolidation and the independent reviewer confirms the stated disposition of every requested part, including named deferrals. A deferred execution does not mean an unfinished proposal is complete.
8. **Hand back one next-unit recommendation.** Name the selected product outcome, remaining dependencies, owner, provisional effort/capacity and completion evidence. Keep build selection and release acceptance separate from completion of this planning packet. Lane C reviews only the relevant CI/release dependencies when such a unit is selected; it does not define product behaviour or hold this proposal behind unrelated settings work.

### 7. Graph and hosted-view evidence — required synchronization, not claimed here

At review input fa30c2b, `.graphify/branch.json` names `lastAnalyzedHead = 4005d58` and `stale = false`. The unequal commits prove the graph is behind; the boolean cannot override that. The installed distribution is the repository's TypeScript `@sentropic/graphify`; its skill was read from the installed package. Read-only summary/query calls were used for historical navigation, **not as current semantic proof**. No wiki index was present in the root graph directory.

`bun run check` completed with Git subprocess access and reported failures for:

- `graph-coverage`: B-087 is absent from the graph;
- `handoff-response`: B-087's Lane A acknowledgement is blank;
- `docs-drift`: analyzed 4005d58 differs from fa30c2b.

The other checks passed for that review input. This is not a claim that every source assertion is correct: the CR-14 authored-diagram mismatch above remains visible despite the structural passes.

**Required Lane A synchronization plan:** use the installed Graphify skill's documentation-update workflow against the final consuming docs revision; retain the extracted and curated layers; obtain Cowork's source-grounded curated changes for this handoff and any changed decisions; have Claude Code complete and ingest the required semantic work. Merge existing fragments in dependency order with explicit file arguments and verify preserved node/edge meaning after the last rebuild. Bare `merge7.js` covers only frag7; its `--all` audits conflicts, not a full merge; `--fill-missing` alone is not semantic completion. Do not delete pending markers to simulate completion. Keep runtime metadata untracked. Run portability checks before proposing tracked graph artifacts, confirm `lastAnalyzedHead` equals the final consuming HEAD, inspect semantic completion and curated parity, then rerun the full local consistency suite. Refresh evidence after subsequent commits before a consuming approval; never pin metadata manually to make a check green.

The request limits this turn to review and implementation planning; Graphify mutation remains specified for the Lane A operator under D-200/D-201 and the handoff SOP. **No graph sync was executed.** Existing Code tooling follow-ups do not automatically block an otherwise valid runtime update; identify any actual failure rather than reopening the whole tooling backlog.

The [Encyclopedia ledger](../ENCYCLOPEDIA-SYNC.md) was read. An attempt to open its hosted artifact returned a non-retryable access error, so the hosted body and parity are **not verified**. The owner must supply readable/exported content or access before that part can be verified. Keep its existing verification anchors; do not replace them with this review's HEAD. This limitation does not prevent drafting the source corrections or the impact queue.

## What you did instead

### 8. Proposed Lane A reply and this packet's completion boundary

> I acknowledge B-087's consolidated follow-up. B-083's decision-tree correction remains Verified. I will prepare the baseline/outcome mapping and complete the already-owned B-084 intake and view packet, using the existing decisions instead of reopening them. I will ask the Judge only for the remaining outcome/version choices and any exact application scope not already authorized. B-071's final-gate hold and the commercial/access candidates retain their separate owners and conditions. After accepted source changes, Claude Code will synchronize the consuming graph revision and Lane B will independently verify the named corrections. I will report hosted Encyclopedia verification separately and will not equate setup artifacts, applied documents or handoff closure with a built product.

**Delivered by this Lane B turn:** consolidated review, existing-entry routing, baseline/evidence matrix, concrete draft fixes, Judge choices, failure-derived acceptance examples and source/graph verification plan. **Not delivered or claimed:** Lane A acknowledgement, applied source corrections, hosted parity, graph sync, Judge acceptance, product walkthrough, runtime implementation or release. The entry stays Open; no other handoff lifecycle is changed.

**Tier applicability:** only this existing handoff is edited. The Register, Build Spec, Inventory, Product PRD, functional/technical specifications, source diagrams, Encyclopedia ledger, shared rules and code are **specified-not-applied** where named above; no tier, sprint or version opens/closes. Frozen documents and migration 0001 are unaffected. No new artifact or governance automation is created by this proposal.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-083 and other bounded Verified handoff dispositions retained | Existing lifecycle owners; no reopening from this consolidation |
| Approve-with-conditions | B-087 baseline/outcome and parent-first follow-up proposal | Phase 1 — Lane A answer, remaining Judge choices and independent review |
| Approve-with-conditions | B-084 intake/acceptance/storyboard/source-graph reconciliation | Phase 1 — exact source packet, dependent views, FB-05/G105 evidence |
| Defer | Whole-folder V0 rename, release reallocation and commercial/access scope | Product/roadmap decision — explicit mapping and governing authority |
| Defer | Graph currency and hosted Encyclopedia parity claims | Phase 1 — Lane A synchronization and separately readable hosted evidence |
| Reject | Blanket handoff closure or application/release completion from setup evidence | Phase 1 correction of claim; Phase 2/3 retain their own acceptance evidence |

## Earlier iteration proposal — retained as dated history

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
