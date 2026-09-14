# B-087 — Baseline alignment and parent-first artifact follow-up

- **Raised:** 2026-09-11 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** acceptance of this consolidated alignment packet as complete; no unrelated authorized work; existing execution holds remain independently binding
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-14** at read commit `495e4f8`. Receipt and consolidated
  answer, not a disposition: `Status` stays `Open`, no `Resolution` is claimed, and the raiser's
  `Verified-By`/`Verified-At-Commit` anchors are left untouched because this entry is still in the
  raised-not-dispositioned position. The answer is §9 below. It applies no source correction and
  closes nothing. `B-088` is acknowledged in its own file.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** b594f97a2d9c9cd06a36ff927e2cc2f00c7bffb0
- **Evidence:** 2026-09-14 clarification of section 3 against b594f97; named Product, storyboard/embedded sequence/data-flow, source-graph and Encyclopedia-ledger clauses rechecked; no docs changed since the prior review. Prior broader review and limitations remain below. Separate working-tree checker/fixture edits are not this handoff's work. No application test, product walkthrough, source application, graph synchronization or closure claimed.

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

**Clarified 2026-09-14.** The earlier phrase “Phase 1: Judge resolves named choices” mixed settled direction, evidence gathering and future application authority. This section replaces that mixed ask. Approval of the decision tree is recorded as the user's current instruction; no product option below is inferred from it. The Chief Editor/Judge is the user making project decisions here, not a resolution of B-071's in-app executor name. The storyboard's business paths A/B are not development Lanes A/B/C.

**Highest parent already settled:** prepare the alignment proposal around manual URL/Markdown input, LinkedIn ManualReady and a usable editorial engine shared by M-MVP and M-POC. The second-product-iteration objective is a desired outcome, not an estimated delivery commitment. **Do not ask the Judge to approve those statements again.** Historical commit contents and current implementation evidence are facts for Lane A/B to check, not preferences for the Judge to vote on.

#### 3.1 The remaining choices, one object per answer

These are decision aids, not new backlog IDs or handoff Resolution values. “Reject” means identify the clause/alternative to change; “Defer” keeps the existing owner and names when to return. None of the choices below authorizes a build.

| Choice / when needed | Exact proposed decision | Accept means | Reject or Defer means | Dependent artifact / owner |
|---|---|---|---|---|
| **J1 — presentation of setup evidence; ready to consider now** | Use **“setup/scaffold evidence”** as a descriptive classification; keep existing `docs/v1` paths, identifiers and lifecycle states. Do not create a V0 product release through this label | Lane A uses this classification in the proposed reconciliation matrix | If a formal V0 version is intended, Lane A first supplies the alternative version/sprint/artifact mapping and effects. While deferred, use factual evidence descriptions without assigning a new version | Lane A/Cowork: proposed Product §8 and tracking presentation. **Does not block B-084 contract corrections** |
| **J2 — acceptance of the user journey; after Lane A drafts the examples** | Does the normal/revision example in §5 represent the Chief Editor's work, and does its M-POC variant preserve the intended client/internal output boundary? | The specific reviewed example becomes accepted behaviour input for the proposed specification | Identify the wrong step/output; Lane A revises only the affected example. A placeholder cannot be accepted as a completed walkthrough | Product/functional acceptance examples, then storyboard panels and sequence/data-flow views. Final-gate details retain B-071's dependency |
| **J3 — roadmap allocation; after outcome/evidence mapping is prepared** | Accept Lane A's **explicit proposed mapping** of remaining behaviour to future iterations/releases, preserving historical sprint identity and completed setup evidence | Selects that proposed allocation; does not prove capacity or give execution authority | Return the particular allocation to refinement; existing operative sequence/holds continue until changed by an authorized act | Product §8; Register, Build Spec and Inventory as applicable. The Judge must see the actual mapping before this decision is requested |
| **J4 — application of the exact source packet; after relevant choices and full text exist** | May Lane A apply the **named files/sections and complete replacement text at the identified revision**, with the listed exclusions? | Authorizes only those documentation changes if not already covered by an existing act; existing sufficient authority is reused | Proposal remains unapplied; authorized independent drafting continues | Lane A applies; Lane B independently verifies each claimed correction. J1/J3 are prerequisites only for edits that actually change classification/allocation, not every B-084 edit |
| **Separate later choice — commercial/access scope** | Select which capability and audience to refine: external manual POC operation, in-app payment, staff accounts, client read-only access or multiple teams; then propose its version placement | Refines the selected capability through its existing scope/authority path | Retains the candidate without automatic next-version inclusion | Existing Product backlog/module owner; no dependency on this choice for manual-input alignment |

**No Judge action is required for a factual independent verification already in scope.** The Judge decides business meaning, scope and reserved acceptance; Lane B supplies the correction evidence. Readiness, capacity and a later bounded build authorization are separate from J1–J4.

#### 3.2 Information the Chief Editor supplies, rather than “approves”

For J2, provide one representative URL or Markdown reference, a reason its draft should be returned (for example, an overstated source claim), and the expected M-POC marketing output. Lane A must show the existing client-package/internal-article separation from the module requirements rather than ask the user to invent it again. The Judge identifies any desired change to that boundary. If no real example is available, Lane A may draft a clearly labelled illustrative case, but cannot report a real-user walkthrough completed.

Before any sprint commitment, provide available operator/reviewer hours and a review date. The earlier 12–20 hours is only an unconfirmed proposal. Missing capacity does **not** prevent document correction. Hosted Encyclopedia content/access is an evidence dependency for its owner, not a product-policy decision for the Judge.

#### 3.3 Lane A's immediate sequence and the construction/verification artifacts

1. **Acknowledge B-087 in this file.** Lane B remains the raiser; Lane A is the answerer. Do not copy this table into a new tracker or treat the user's tree approval as Lane A's answer.
2. **Carry forward the settled parent direction.** Prepare the §2 reconciliation matrix. Offer J1 as the only currently concrete label choice; if it is unanswered, describe evidence without a V0 release label and continue.
3. **Continue B-084's known contract/view fixes independently.** Reuse D-194/D-197 and the complete D-219–D-222 packet. Prepare J2's examples and J3's allocation proposal; request only the information each actually needs.
4. **Trace each accepted behaviour through its artifacts:** Product requirement → Fn_Spec → acceptance example → storyboard panel/sequence/data flow → technical design where implementation choices remain → later test evidence. One citation must lead to the same behaviour, not just to an existing file.
5. **Present J4 only when the source patch is concrete.** Identify each applicable existing act, required new choice, exact text and file/section. Apply authorized source changes before dependent views; preserve historical diagrams and mark their current-use successors.
6. **Verify and answer precisely.** Record application evidence; have Lane B independently verify the named correction; refresh graph/Encyclopedia evidence through their existing owners before claiming that coverage. Retain B-084/FB-05/G105 and B-071's distinct completion conditions. Lane C's later CI/release work is not a new parent of this documentation task.

**Artifact recheck at b594f97:** the Product and traceability map retain the manual-input decision; the storyboard A2 retains its obsolete “no producer” annotation; the authored requirements-scope graph retains its no-FR claim; and the Encyclopedia ledger still requires the scoped recheck described in §4/§7. The inspected UML-style views are the storyboard's embedded sequences/flows, not a newly discovered standalone UML document. No governed docs changed since the prior review. Thus the §4 draft fixes remain relevant; this clarification does not re-certify all historical closures or hosted content.

**Ready-to-use Lane A request to the Judge, when presenting J1:**

> Your manual-input, LinkedIn ManualReady and shared-engine direction is already recorded. The remaining label choice is: accept “setup/scaffold evidence” as a descriptive classification while retaining current paths and version states, or request a separate proposal for a formal V0 release mapping. Either way, I will continue the existing intake corrections. I will bring you the concrete journey examples, proposed iteration allocation and exact documentation patch when each is ready for its own decision; no build is included.

**Validation of this clarification:** the shared checkout advanced independently to 8ead2d4 while checks ran. The full local suite reported only B-087's missing acknowledgement, its absent graph coverage and graph currency (analyzed b594f97 versus HEAD 8ead2d4) as failures. Separate checker/fixture work and the working B-001 annotation are not authored or staged by this turn. This is working-tree validation, not independent acceptance of those changes or a new graph-currency claim. The sole bound commit path remains `docs/handoff/B-087-bounded-setup-spike-proposal.md`.

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

## Lane A answer, 2026-09-14

### 9. Consolidated completion ledger, confirmed gaps and parent-first order

#### 9.0 Read anchor and the tooling limitation, stated first

Read commit: **`495e4f8b377622a44458fc02fdf06a4125a1a003`** (`refs/heads/docs/journal-2026-08-16`).
Graph record at the same moment: `.graphify/branch.json` `lastAnalyzedHead = 395ab83`, `stale: false`.

**No check was executed.** The workspace shell on the reviewing host could not mount the repository
(`sandbox-helper: no Plan9 drive shares mounted`), so `bun run check`, `git` and Graphify were
unavailable. Every result below is one of two kinds, and each is labelled:

- **Reproduced**: the check's own logic re-run against the same inputs it reads
  (`scripts/checks/docs-drift.mjs`, `scripts/checks/graph-coverage.mjs` via
  `docs/graph-fragments/missing.js`), using the file contents at the read commit.
- **Read**: a literal quotation of file content at the read commit.

Nothing here is a green-suite claim, and the working tree was not confirmed clean. Lane B must
re-run `bun run check` on a working host before any of this is treated as check evidence.

#### 9.1 Handoff completion ledger, all 89 entries, header fields at `495e4f8`

> **Historical snapshot only.** The values below were observed at `495e4f8`; they are not a second status authority and must not be refreshed or cited as current without a new check at a named revision.

Parsed line-bounded, the way `handoff-fields.mjs` parses, not with the `\s*` pattern that produced
`B-017`'s false green. **Result: the handoff metadata is healthy.** Zero entries violate `D-204`
(`Answered` and not `turn-report` and no `Resolution`); zero non-turn-report entries carry a blank
`Verified-By` or `Verified-At-Commit`; zero turn reports carry a forbidden closure field.

| Record state | Count | Terminal under `D-102`? | What it means for closure |
|---|---|---|---|
| `Verified` | 52 | Yes | Satisfies a closure condition at its own named evidence revision, and nothing wider |
| `Superseded` | 7 | Yes | Each names its `Superseded-By` decision |
| `Deferred` | 4 | Yes | `B-016`, `B-071`, `B-077`, `C-001`; each names a `Follow-up-Tier` |
| `Applied` | 20 | **No** | Landed in the tree, **nobody independent has confirmed any of them** |
| `Open` | 2 | No | `B-087`, `B-088` |

**Completed, in the only sense the SOP recognises: 63 of 89.** The remaining 26 split into 20
unverified applications and 2 open findings, plus the 4 turn reports which take no `Resolution` and
are counted separately by checks 10 and 13 rather than dropped.

#### 9.2 The largest single gap, and it is already owned

The 20 `Applied` entries are the whole of the unreconciled population:

`B-011` `B-014` `B-015` `B-021` `B-033` `B-041` `B-050` `B-061` `B-062` `B-065` `B-066` `B-067`
`B-070` `B-072` `B-073` `B-074` `B-075` `B-076` `B-084` `B-086`

**No new tracker is opened for them.** `B-077` already owns this as its Child 2, "the legacy
`Applied` reconciliation", `Deferred` with `Follow-up-Tier: Phase 1`, each entry needing its own
review question answered rather than a bulk promotion.

**One quantified change since that deferral, and it is the finding worth recording.** `B-077`'s own
Lane A acknowledgement, dated 2026-09-03, sizes the population at **16 entries**. At `495e4f8` it is
**20**. The deferred backlog grew by four while deferred. A deferral with a named owner is terminal
for the record and is not terminal for the work; on the present trend the reconciliation cost rises
faster than it is being paid down. Commit-level attribution of which four were added is not
available in this pass because `git` could not be run.

**Consequence, stated plainly:** Phase 1 cannot close on the current record regardless of any
product decision, because 20 of its corrections rest on `Applied`, which `D-102` deliberately made
non-terminal. That is independent of `J1` through `J4` and of `B-088`.

#### 9.3 Docs drift and Graphify sync, reproduced

**`docs-drift`: FAIL (reproduced).** `docs-drift.mjs` compares `branch.json.lastAnalyzedHead`
against `git rev-parse HEAD` and ignores the `stale` flag unless it is explicitly `true`. Its exact
failing condition holds:

> graph is STALE, last analyzed `395ab83`, HEAD is `495e4f8`.

`stale: false` sits beside unequal commits. §7 above already stated the rule at `fa30c2b`: the
unequal commits prove the graph is behind and the boolean cannot override that. It is now true again
at a different pair of commits.

**`graph-coverage`: FAIL (reproduced).** Running `missing.js`'s membership test against
`.graphify/graph.json` over all 91 files in `docs/handoff/`, exactly two are absent:

- `docs/handoff/B-087-bounded-setup-spike-proposal.md`
- `docs/handoff/B-088-c39-independent-review.md`

`Modular_PRD.md`, `ENCYCLOPEDIA-SYNC.md`, `docs/README.md`, both governance maps, the storyboard,
`V1-PHASE-CLOSURE.md` and both module requirement files are present. **This corrects `B-088`'s
report of a single omission:** at `395ab83` the graph lacked `B-087`; at `495e4f8` it lacks `B-087`
and `B-088`. `B-088`'s own remediation entry is now itself an uncovered document.

**Semantic completion: absent (read).** `.graphify/.graphify_describe_pending` exists and reads:

> Graph rebuilt by the fast git hook without descriptions/labels. Run `graphify update --fill-missing` to fill them.

So the current graph is a structural rebuild with no descriptions or labels. Per §7 above,
`--fill-missing` alone is not semantic completion and bare `merge7.js` covers only `frag7`. **Head
alignment, coverage and semantic parity are three separate claims and none of them currently holds.**

**This is a recurrence, not a new class.** `B-041` ("Graphify matches HEAD but is not semantically
complete or portable") and `B-050` ("Hook rebuild again resets Graphify branch metadata") both
describe exactly this shape, and **both are `Applied` and neither is independently `Verified`**. The
condition they describe is live at the read commit. That is the 9.2 gap producing a concrete,
observable cost rather than a bookkeeping complaint.

#### 9.4 Cross-artifact reconciliation at `495e4f8`, read not inferred

The §4 draft fixes were rechecked against current file content. **All remain unapplied, and one is
sharper than §4 recorded it.**

**`CR-14` carries two incompatible statuses across six governed files.** Each anchor is named below
rather than tallied; a restated count is the drift mechanism `G55`, `G56` and `G58` record.
**Corrected 2026-09-14 (`B-089`): the first two rows were omitted from this table's first writing.**
They are listed first because `D-29` puts the Product tier above the storyboard and the source graph:

| File | Line | Literal text | Says |
|---|---|---|---|
| `Modular_PRD.md` §7.1 | 761 | "`CR-14` covered as the **ratified manual contract**; future AI tagging/scoring is `PBL-11`" | Covered |
| `Modular_PRD.md` §7.1 | 788 | "No FR requires AI topic, source, and trend-signal tagging at the Reporter gate \| **Missing functional requirement — FB-05**" | **Uncovered** |
| `governance/requirements-traceability-map.md` | 141 | "**Covered as the ratified manual contract** (`D-194`, Addendum §2.4; choices in `D-197`)" | Covered |
| `governance/requirements-traceability-map.md` | 159 | "⚠ **Uncovered** \| **0** \| *(was `CR-14`)*" | Covered |
| `docs/README.md` | 30 | "*now wrong: `CR-14` was covered by `D-194`/`D-197`*" | Covered |
| `governance/requirements-scope-knowledge-graph.md` | 23 | "`PS -->|has no functional requirement| GAP14[\"CR-14: AI tagging gap\"]`" | **Uncovered** |
| `governance/requirements-scope-knowledge-graph.md` | 98 | "CR-14 AI tagging at Reporter gate \| Uncovered" | **Uncovered** |
| `journal/…-storyboard-…md` | 71 | "`CR-14` (AI tagging at the Reporter gate) has **no FR**" | **Uncovered** |
| `journal/…-storyboard-…md` | 91 | "**The `FB-05` annotation above is NOT superseded**" | **Uncovered** |
| `journal/…-storyboard-…md` | 281 | "Required `trend_signal` at T1 has no defined producer" | **Uncovered** |

**`Modular_PRD.md` §7.1 contradicts itself inside one section (read).** Line 761 and line 788 sit in
the same Product Scope Matrix, 27 lines apart. One records `CR-14` as Full and covered by FR-01's
ratified manual contract; the other records it as a missing functional requirement. This is worse
than the cross-file disagreement below, because it is intra-document and at the governed Product
tier, which under `D-29` outranks every derived view listed here. **`B-089` raised this omission and
Lane A accepts it:** the first writing of this table reviewed §0.6 and §8 and did not read §7.1.

**Owner: `B-084`'s existing source packet.** No new product tracker is created and `B-084`'s own
`Applied` disposition and evidence scope are left exactly as recorded. `B-089`'s exact packet text is
reproduced in 9.9 for `B-084`'s owner to bind under `J4`.

§4 named two locations in the storyboard. **There are three**, and line 281 in §4 of the storyboard
("What the storyboard reveals") is a summary row that the proposed A2 replacement text does not
reach. The complete A2 replacement paragraph in §4 above is still the right text for lines 73 to 92;
line 71's panel annotation and line 281's summary row each need their own bounded edit or they will
survive the patch and reproduce the contradiction.

**`ENCYCLOPEDIA-SYNC.md` Entry 06 is stale by the ledger's own rule and is not marked stale (read).**
Entry 06 declares its dependencies as `docs/governance/requirements-traceability-map.md` §4 and §7,
and carries `Last verified at: f7b3aea`. That named dependency changed on 2026-09-08 when `CR-14`
joined the Covered set under `D-194`/`D-197`. Entry 05 carries an explicit
"**stale: `D-168` affects this entry**" note; Entry 06 carries no such note despite meeting the same
condition. **The correct fix is the stale marking, not the verification SHA.** §4 above already says
not to advance the anchor, and that instruction is correct: hosted content is still unreadable
(`DEP-05`-class access limitation), so parity cannot be verified and must not be claimed.

**`D-37` provenance contradiction persists (read).** `docs/README.md` line 40 still reads "It was
generated at scaffolding time from the project name and summary". `D-37` records the plan pack as
coming from the project's Q&A flow alongside `docs/PRD.md`. The complete provenance paragraph in §4
above is the replacement. `AGENTS.md` and `CLAUDE.md` lines 22 and 89 reference the plan pack
without restating the origin claim, so **the shared-core triple edit is narrower than §4 assumed**:
the origin sentence needing correction is in `docs/README.md`, and the rule files need only the
shared-core paragraph if the correction is routed through `shared-core-hash`. Confirm against the
third rule file under `.codex/` before binding the patch.

**`Modular_PRD.md` §8 has no setup mapping (read).** §8 "Execution Mapping" begins at line 890. Its
`V1` row is a single narrative cell of accumulated dated corrections with no setup-versus-product
classification and no `V0` mapping anywhere in the file. §2's matrix remains the proposal input, and
`J1` remains the only concrete label choice available.

**Lane state (read).** `V1-PHASE-CLOSURE.md` §5: **A `Active`, B `Eligible`, C `Blocked` on `C-18` /
`Eligible` for `C-Q1`.** Unchanged. Lane A holds the lock, so this acknowledgement is in position.

#### 9.5 Parent-first order, highest parent first

Root parent is this entry's §2 baseline alignment. **`B-088` is a sibling, not a child.** Its own
§53 states that no sprint closes and `Modular_PRD` §8 is unaffected by the guard correction, so the
actor-guard track does not gate product alignment in either direction.

| # | Depends on | Bounded unit | Owner | Done when | Cost if skipped |
|---|---|---|---|---|---|
| **0** | nothing | Acknowledge `B-087`, `B-088` and `B-089`. **Done for all three** as of 2026-09-14; `handoff-response` passes, confirmed independently by `B-089` | Lane A | `handoff-response` reports no finding for any of the three | Entries fail check 10 as "feedback sits unread" |
| **1** | 0 | Answer `J1`: accept "setup/scaffold evidence" as a descriptive classification, or request a formal `V0` mapping proposal | Chief Editor | One recorded choice | §2's matrix cannot be presented; §8 stays unmapped |
| **2** | 0, **not** 1 | `B-084` source packet: reconcile `CR-14` across every anchor named in 9.4 using `D-219`–`D-222`. **`Modular_PRD.md` §7.1 line 788 is the highest-tier anchor and leads the packet.** Three storyboard locations, not two | Lane A / Cowork under `J4` | Every anchor named in 9.4 states one `CR-14` status, and §7.1 no longer contradicts itself; `FB-05` independently verified | The Product spec keeps contradicting itself and its own FR-01; `G105` stays open |
| **3** | 2 | `ENCYCLOPEDIA-SYNC.md` Entry 06: add the stale marking and its reason. Do **not** advance `f7b3aea` | Ledger owner | Entry 06 carries a stale note in Entry 05's form | Ledger under-reports staleness on the entry the `CR-14` fix touches |
| **4** | 2 | `docs/README.md` line 40 provenance sentence, plus the shared core if `shared-core-hash` requires it | Lane A / Cowork under `J4` | `shared-core-hash` passes; origin claim matches `D-37` | `B-085`'s accepted notices sit beside a contradicting origin sentence |
| **5** | 2, 3, 4 | Graphify sync: `hook-rebuild`, confirm `lastAnalyzedHead` **equals the final committed HEAD** (a lower bound is not a criterion), re-merge `docs/graph-fragments/` in dependency order with explicit file arguments, `--fill-missing`, then confirm node and edge meaning survived | Claude Code operates; Cowork supplies curated meaning | `docs-drift` and `graph-coverage` both report no finding, and `.graphify_describe_pending` is gone | Every later review reads a graph that is behind, uncovered and unlabelled |
| **6** | 1 | `J2` examples and `J3` allocation, once the Chief Editor supplies one article, one revision reason and available hours | Lane A drafts, Chief Editor accepts | Examples accepted or corrected by step | Product acceptance has no concrete input |
| **7** | its own accepted output, **not** step 2's completion | Close the planning spike. See the `B-090` replacement text below this table | Lane B verifies; Judge closes | `J1`–`J4` decided or explicitly deferred, and every branch has an owner, dependency and completion evidence | `B-087` closes on an answer rather than on evidence, **or** stalls behind work it does not own |
| **S** | independent | `B-088` `P1` token-boundary repair and its labelled negative probes | Cowork authorises, Code repairs | Unknown identifier continuations reject; nine positives and six negatives unchanged | `Lane B_fake` stays accepted as `Lane B` |
| **X** | Phase 1 policy | `B-077` Child 2: legacy `Applied` reconciliation, now 20 entries | Lane A classifies, Lane B reviews | Each entry has one bounded disposition | Phase 1 cannot close; population keeps growing |

**`B-090`'s replacement for step 7, applied in full 2026-09-14:**

> **Close the planning spike on its accepted output.** Lane B independently verifies B-087's bounded answer and routing. B-087 may close when J1–J4 are decided or explicitly deferred and every branch has an owner, dependency and completion evidence. B-084 closes separately after its actual governed-source correction and independent verification. If J4 expressly includes B-084 application in this iteration, record that dependency and wait for its evidence.

This restores §7 of this entry's own closure rule, which requires a truthful **disposition** of every
requested part, including named deferrals, not the **completion** of every branch. The earlier step 7
made `B-087` wait on `B-084`; that coupling was Lane A's and is withdrawn.

**Steps 2 and 1 are independent.** §3.3 above already says `J1` does not block `B-084` contract
corrections. Holding step 2 for a label decision would be the appeasement shape this backlog is
meant to prevent.

#### 9.6 Drafted and not applied: `B-088`'s acknowledgement

Authority to edit `B-088` was not requested in this pass, so the following is specified and not
applied. It is exactly one field. Replace `B-088`'s blank `- **Lane A:**` line with:

> - **Lane A:** **Acknowledged 2026-09-14** at read commit `495e4f8`. Receipt only, and a review
>   result recorded separately from any correction, per `P0`. The demonstrated underscore-suffix
>   defect is accepted as a failed verification; no actor-guard or `C-39` completion claim is
>   accepted. `P1` is not authorised by this receipt. One correction to the entry's §28: at
>   `495e4f8` `graph-coverage` lacks **both** `B-087` and `B-088`, not `B-087` alone.

#### 9.7 Lexicon, so the terms below carry one meaning each

Recorded because this answer mixes three vocabularies that have collided before in this corpus.

| Term | Means here | Does **not** mean |
|---|---|---|
| **Completed** | Terminal `Resolution`: `Verified`, `Superseded` or `Deferred`-with-tier | `Applied`; an answered question; a green check |
| **Applied** | A correction is in the tree at a named commit, unconfirmed by anyone independent | Done, closed, or countable toward phase closure (`D-102`) |
| **Verified** | Confirmed by a named actor who is not the answering side, at a commit that exists | Acknowledged, reviewed by the author, or observed green |
| **Acknowledged** | Receipt. Clears check 10's unread condition | An answer, a disposition, or an authorisation |
| **Gap** | A reproducible disagreement between two governed statements, or a required evidence item that does not exist | A missing feature, a risk, or an unranked backlog candidate |
| **Drift** | `lastAnalyzedHead` differs from `HEAD` | Documents disagreeing with each other, which `docs-drift` cannot see |
| **Coverage** | A document's basename appears in `.graphify/graph.json` | Its meaning is represented, labelled, or semantically current |
| **Lane A / B / C** | Development lanes in `V1-PHASE-CLOSURE.md` §5 | The storyboard's business paths A and B |
| **Judge / Chief Editor** | The user making project decisions | Any in-app executor name, which is `B-071`'s unresolved question |
| **Accept / Reject** | Decision choices in §3.1 and in the verdict tables | `Resolution` values; there is no `Rejected` resolution (`D-108`) |

#### 9.8 What this answer did and did not do

**Did:** acknowledged `B-087`; parsed all 89 handoff entries line-bounded and reported the record
state of each class; reproduced `docs-drift` and `graph-coverage` from their own inputs; rechecked
every §4 artifact claim against file content at `495e4f8` and found one under-count in the
storyboard and one unmarked staleness in the Encyclopedia ledger; ordered the work parent-first;
routed the `Applied` population to its existing owner instead of minting a duplicate.

**Did not:** execute any check, run `git`, run or mutate Graphify, apply any source correction,
answer `J1` through `J4`, edit `B-088`, select a lane, authorise a build, or close anything. No
`Resolution` is claimed on this entry and its raiser anchors are unchanged.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `B-087` acknowledgement and the 89-entry completion ledger as an accurate header-field record at `495e4f8` | Phase 1, Lane B re-runs `bun run check` on a working host and confirms |
| Approve | Reproduced `docs-drift` and `graph-coverage` failures, including the correction that **two** documents are uncovered | Phase 1, step 5 of the 9.5 order |
| Approve-with-conditions | The 9.5 parent-first order | Phase 1, conditional on `J4` for steps 2 and 4, and on Chief Editor input for step 6 |
| Reject | Any claim that the handoff backlog is reconciled, or that Phase 1 can close on the current record | Phase 1, 20 `Applied` entries carry no independent verification (`D-102`) |
| Reject | Treating `stale: false` or a structural rebuild as graph currency | Phase 1, head alignment, coverage and semantic parity are three separate claims |
| Reject | `B-088`'s §28 statement that graph coverage lacks only `B-087` | Phase 1, corrected in 9.3 and in the drafted `B-088` receipt |
| Defer | `B-077` Child 2, the legacy `Applied` reconciliation, now 20 entries and growing | Phase 1, its existing `Follow-up-Tier` and its own bounded authorisation |
| Defer | `J1` through `J4`, `V0` allocation, commercial and access scope | Chief Editor decision, unchanged by this answer |

#### 9.9 Post-act corrections, 2026-09-14, raised by `B-089`

`B-089` independently reviewed the answer above and returned two `Reject` verdicts. **Lane A accepts
both.** `B-089`'s drafted text is applied in full below, unaltered.

> **Post-act receipt note, 2026-09-14.** After the answer above was written, §9.6's exact B-088 acknowledgement was applied. The current `handoff-response` check passes for both B-087 and B-088. They remain Open, with no Resolution. References above to B-088 as "drafted and not applied" describe the earlier read and are superseded by this note; they are not current status.

**Cross-reference to B-084's existing Product §7.1 residual.** B-084 already names this contradiction and remains its canonical correction/evidence record. B-089 found that B-087's cross-artifact inventory omitted the anchor. The text below repairs B-087's inventory and routing only; it creates no new B-084 scope and does not alter B-084's Applied evidence boundary.

*(Replacement text supplied by `B-090` and applied 2026-09-14. The paragraph it replaces framed this
as an addition to `B-084`; `B-084` §247, §427, §559 and §781 already name Product §7.1 line 788.)*

> `Modular_PRD.md` §7.1 currently lists CR-14 as a missing functional requirement. Reconcile that row with the already-decided FR-01 manual-input contract (`D-194`/`D-197`) and PBL-11's separate future AI capability. Preserve the historical customer sentence; do not reinterpret it as automated scraping or as build authorization.

| `B-089` verdict | Lane A response | Where it landed |
|---|---|---|
| **Reject** the answer as a complete current-source correction set | **Accepted.** `Modular_PRD.md` §7.1 was not read in the first pass | 9.4 lead sentence, two new table rows, the intra-document paragraph, and 9.5 step 2 |
| **Reject** the post-act receipt wording | **Accepted.** §9.6 and §9.8 are preserved as dated history and superseded by the note above; the live plan step was corrected | 9.5 step 0, and this section |
| §9.1 may become a second live tracker | **Accepted**, and it was already self-reported by Lane A in the same turn | 9.1 prefix |
| **Approve** both receipts as receipt evidence | Recorded. All three entries stay `Open` with no `Resolution` | Unchanged |

**Graph state at `a0229af`, reproduced.** `docs-drift` fails: analyzed `395ab83`, HEAD `a0229af`,
`stale` still `false`. `graph-coverage` fails on `B-087`, `B-088` and `B-089`; at `395ab83` it
failed on `B-087` alone, so `B-088`'s §28 single-document statement no longer described the tree. `.graphify_describe_pending` is still present. Step 5 of the 9.5 order is unchanged and
stays sequenced after the source corrections commit.

**Tier applicability (`D-54`).** This correction creates, sequences and retires no artifact. Register,
Build Spec, Artifact Inventory and `Modular_PRD` §8: **unaffected**. The `Modular_PRD` §7.1 row is
**specified-not-applied** and waits on `J4`. Frozen `docs/PRD.md`, the Charter and `0001_init.sql`:
untouched.

#### 9.10 Ownership correction, 2026-09-14, raised by `B-090`

`B-090` returned three `Reject` verdicts against the routing and closure language above. **Lane A
accepts all three**, and reconfirmed the first independently: `B-084` names Product §7.1 line 788 at
its §247, §427, §559 and §781, and lists `docs/Modular_PRD.md` in its source/view write-set. The
anchor was therefore **already in `B-084`**. `B-089` found an omission in **`B-087`'s review
inventory**, not missing scope in `B-084`.

| `B-090` verdict | Lane A response | Where it landed |
|---|---|---|
| **Reject** treating §7.1 as new `B-084` scope | **Accepted.** The "exact addition" framing was Lane A's, propagated from `B-089`'s wording, which Lane B has itself corrected in `B-090` | 9.9 introduction, replaced with `B-090`'s text |
| **Reject** making `B-087` depend unconditionally on `B-084` completion | **Accepted.** Contradicted this entry's own §7 closure rule | 9.5 step 7 row and the `B-090` text below that table |
| `B-089` acknowledgement overstates "applied in full" | **Accepted.** The third text was not applied to its named target, correctly | `B-089`'s `Lane A` field, replaced with `B-090`'s text |
| **Approve** the acknowledgement and the §7.1 finding | Recorded as `B-087` review evidence | Unchanged |
| **Reject** current Graphify completion | Already Lane A's own position; unchanged | 9.3, 9.5 step 5 |

**The boundary, as `B-090` states it and Lane A adopts it.** `B-084` owns the specification
correction and closes on new governed-source commit evidence plus independent verification. `B-087`
owns the planning spike and closes on accepted decisions plus a truthful disposition of every routed
branch. Closing `B-087` cannot close `B-084`. The two are related by **routing, not shared
lifecycle**. If `J4` expressly places `B-084`'s application inside the accepted iteration, that
dependency is recorded explicitly rather than left implicit.

**Graph state at `5bc28fd`, reproduced.** `docs-drift` fails: analyzed `395ab83`, HEAD `5bc28fd`,
`stale` still reads `false`. `graph-coverage` fails on `B-087`, `B-088`, `B-089` and `B-090`.
`.graphify_describe_pending` still present.

*(Corrected 2026-09-14 by `B-091`: this paragraph carried a "four commits behind" distance that Lane
A never computed and could not compute without `git`. The distance is removed rather than fixed.
Narrative status carries no tallies; the checks print them.)*

**Tier applicability (`D-54`).** Routing and closure language only. No artifact is created, sequenced
or retired. Register, Build Spec, Artifact Inventory and `Modular_PRD` §8: **unaffected**. `B-084`:
**not edited**; its `Applied` disposition and evidence boundary stand. Frozen `docs/PRD.md`, the
Charter and `0001_init.sql`: untouched.

#### 9.11 Judge decisions J1 to J4, recorded 2026-09-14

Raised as a decision packet by `B-091`. The Chief Editor and Judge are the same person under `D-158`;
the entries below are that person's recorded acts. **Recorded here and nowhere else**, by explicit
instruction: none of the four creates, sequences or retires an artifact, so `D-54` does not fire and
no `docs/v1` document is edited. A future arbitration reading only the Register will not see them;
that consequence was stated and accepted when the location was chosen.

| Decision | Act | What it means | What it does **not** mean |
|---|---|---|---|
| **J1 — baseline presentation** | **Accept** "setup/scaffold evidence" | A descriptive classification for delivered setup work. Existing `docs/v1` paths, identifiers, version states and frozen history are all retained | No `V0` release is opened, nothing is renamed, and no unfinished product scope moves into a completed-setup bucket |
| **J2 — user journey** | **Defer**, owner **Chief Editor**, trigger **a representative article and a return-for-revision reason exist** | The normal and revision examples are not accepted, because no real article or revision reason has been supplied | Not a judgement that the journey is unimportant. A placeholder is still not a completed walkthrough (§3.2) |
| **J3 — iteration capacity** | **Defer allocation**, owner **Chief Editor**, trigger **operator and reviewer hours are confirmed** | Hours and dates are unconfirmed and no iteration is scheduled. The 12–20 person-hour envelope stays an unaccepted proposal | No date is inferred, and missing capacity does not block document correction (§3.2) |
| **J4 — application boundary** | **Choice A**, per `B-091`'s packet | This iteration stays **planning-only**. `B-084`'s governed-source application is deferred to its own Phase 1 unit, owner Lane A / Cowork, priority-change trigger **a Judge act approving `B-084`'s exact write set** | Not a reduction of `B-084`'s priority or value, and not a claim that `B-084` is complete. `B-084` keeps its `Applied` resolution and its residual packet |

**Silence is not a deferral (`B-091`).** Each row above is an act, including the two deferrals, each
with a named owner and a named trigger.

**Consequence of Choice A for the 9.5 order, stated because it changes the sequence.** Steps 2, 3 and
4 are governed-source corrections. Choice A moves them out of this iteration into `B-084`'s own unit.
Nothing in this iteration edits a governed source. **Step 5's dependency therefore changes**: the
graph sync no longer waits on source corrections that are not going to happen here. It waits on the
handoff entries stabilising, which is reachable once `B-091`'s acknowledgement is committed. The
criterion is unchanged and is now stated correctly: `lastAnalyzedHead` **equals the final committed
HEAD**, plus separate evidence for coverage, descriptions and curated parity.

**`B-087` closure readiness.** This entry's §7 rule requires Lane A's answer plus an independent
reviewer confirming the stated disposition of every requested part, **including named deferrals**.

*(Sentence replaced 2026-09-14 by `B-092`, applied in full. The version it replaces listed `B-088`
among the routed branches while §9.5 of this same entry called it a sibling. Both could not hold.)*

> The first half is met: J1–J4 are each decided or explicitly deferred with owner and trigger. B-084, B-071, B-077 Child 2, commercial scope and access scope each have a truthful disposition for this planning packet. B-088 is an acknowledged sibling on the independent C-39 track; it is not a B-087 branch and does not gate this planning closure.

**The second half is not met.** `B-087` stays `Open` with no `Resolution` until Lane B verifies at a
committed revision, and Lane A cannot record that commit because it cannot run `git`.

**Correction accepted from `B-091`.** Lane A's previous summary said only `J1` and `J4` blocked
closure. `J2` and `J3` also required disposition. The entry text at §9.5 step 7 was already correct
("`J1`–`J4` decided or explicitly deferred"); the inaccurate claim was in Lane A's narration and in
`B-089`'s `Lane A` field, which is corrected in that file.

**Tier applicability (`D-54`).** Four decisions, none creating, sequencing or retiring an artifact.
Register, Build Spec, Artifact Inventory and `Modular_PRD` §8: **unaffected**. `B-084`: **not
edited**. Frozen `docs/PRD.md`, the Charter and `0001_init.sql`: untouched. No governed source was
edited anywhere in this iteration, which is what Choice A means.

#### 9.12 Closure conclusion, corrected 2026-09-14 by `B-092`

`B-092`'s replacement for Lane A's final conclusion, applied in full:

> No B-087 business decision remains open. Independent verification still requires the answer and review corrections to be committed at named revisions. Graphify synchronization follows the final tracked handoff-state commits. B-088 remains a separate C-39 item and B-084 remains a separately deferred source-application unit.

**The operative closure sequence is `B-092`'s seven steps**, not a copy of them here. `B-092` owns
that procedure; duplicating it into this entry would create a second place for it to drift.
`B-087` §9.5 remains the parent-first work order and is unaffected except for the `B-088` routing
correction above.

**What actually blocks `B-087` now, in order.** Neither item is a decision, and neither is Lane A's
to perform:

| Blocker | Owner | Why Lane A cannot clear it |
|---|---|---|
| The answer and the four acknowledgements exist only as working-tree changes | The Judge, at a terminal | `Verified` requires evidence at an existing revision. Parser conformance proves the fields parse; it does not make an uncommitted answer into evidence (`B-092`) |
| Independent verification of the committed answer | Lane B | `D-102`: the answering side cannot verify its own answer |

**Graphify sequencing, restated because `B-092` sharpens it.** Every tracked handoff-state commit
lands **first**; the untracked Graphify synchronization runs **once, last**, against the resulting
HEAD; and **no tracked status edit follows that sync**. That ordering is what stops the stale cycle
this entry has recorded at `4005d58`, `395ab83` and every commit since. The criterion is unchanged:
`lastAnalyzedHead` equals the final committed HEAD, plus separate evidence for coverage, descriptions
and curated parity.

**Tier applicability (`D-54`).** Routing and conclusion language only. Nothing created, sequenced or
retired. Register, Build Spec, Artifact Inventory and `Modular_PRD` §8: **unaffected**. `B-084` and
`B-088`: **not edited**; each keeps its own lifecycle. Frozen `docs/PRD.md`, the Charter and
`0001_init.sql`: untouched.

---

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
