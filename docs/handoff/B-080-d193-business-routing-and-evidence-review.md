# B-080 — D-193: establish the current decision-maker before adding feedback controls

- **Raised:** 2026-09-07 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** acceptance of D-193's proposed routing, failure claims and execution sequence; no application build
- **Status:** Answered
- **Lane A:** **Acknowledged and applied 2026-09-07. All six findings accepted; none declined.**
  Each was independently checked against the sources before acceptance, not taken on assertion.
  **`R2` is confirmed and the error was Lane A's:** Panel A2 is headed *(Reporter, Line 1, Agent)*
  with participant `Reporter (agent, L1)`, so `D-193`'s claim of a human Reporter — and the "two
  rival resolutions" built on it — is **false and withdrawn**. **`R1`** is applied: `M-MVP`'s current
  recipient is the Chief Editor, there is no present external customer for this packet, and client
  validation is queued to **`M-POC` or a later authorized build, per the Judge's ruling of
  2026-09-07**. **`R3`** is applied: `GF-1` blocks *readiness* rather than guaranteeing a runtime
  failure, and `GF-2` is a tracking gap — §8's answer-and-date remains followable in prose, so
  closure is unstructured, not unrecordable. **`R4`** is applied: `FB-01`…`FB-08` stay traceability
  identities referencing a canonical answer, rather than absorbing a copied lifecycle; unknown
  transmission is an evidence condition, not a state. **`R5`** is applied and was Lane A's own
  inconsistency — this session had already established that `tier-sweep` reads only `Item`-headed
  tables, then proposed a `TIERS` entry as though it would validate a `Tier`/`Applicability` table;
  checker coverage confers no document authority. **`R6`** is applied: no rule requires per-lane
  verification, so Lane C's count is not a defect and no lane-state sentence is written.
  Two further corrections are taken from this entry's prose: the comparison table **overstated the
  existing controls** (`Applied` anchors carry presence validation only), and *"rows 1–3 cannot
  touch the Encyclopedia"* was **too categorical**, since Entry 06 declares a dependency on map
  §4/§7. The constraint that removing the `T1` requirement is **not automatically a permissible
  resolution of frozen `CR-14`** is recorded; no agent edits frozen sources.
  **Two drift findings were verified before acting, and both hold.** `Modular_PRD` §0.6.1's `M-POC`
  row read *"Indexed, unspecified / not yet written / none"* while both named files exist, were
  created 2026-08-22 under `D-99` and are inventoried — corrected as navigation only, with the
  no-`SPECS`/no-UX ruling and the §0.6.2 readiness conditions preserved and no build authority
  conferred. Storyboard Panel A2 is **superseded for current use, not rewritten**: its *"≥1
  `topic_tag`"* contradicts `FN-GATES` §3.1/`AC-01`'s **exactly one subject topic** (`G39`), and its
  Mermaid arrows write `state=Logged` before `INSERT workflow_transitions` while **its own note**
  states the transition row precedes the state change — the note is right and the arrows are wrong.
  The `FB-05` annotation is explicitly **not** superseded.
  **Separately, `B-077` received a bounded `Deferred` disposition** on the Judge's clarification
  that it remained unresolved; its body is untouched and no child is promoted.
  **Not done here, deliberately:** the `CR-14`/`Q9` decision packet (Judge's, per this entry's
  step 2), the propagation patch (step 4), and the checker extension (step 5, already deferred).
  **Round 2 answered 2026-09-08. All four corrections to `D-194` accepted; none declined.**
  `E3` is withdrawn as automatically conforming — completing `T1` without a required value changes
  `T1`'s completion condition, and the AI remaining nominal producer does not rescue it; a missing
  required input now **prevents** `T1` completion, and no draft state is invented here. *"Actor
  already satisfied"* is relabelled **represented in existing specifications** — not implemented,
  not accepted, and not settleable by citing a derived diagram. **The four-word test is recorded as
  incomplete**: `requiredness`, gate ordering, authority and provenance must also be preserved or
  explicitly amended, and calling the test *mechanical* concealed exactly those choices.
  **`S3` drags `S1` is withdrawn** — an approved manual source preserves the required field, so
  removing requiredness is a separate choice, not an inevitable dependency; that claim was Lane A's
  and it was asserted as a necessity it never had.
  **The Judge's 2026-09-08 manual trigger-package direction is recorded in `D-194` as evidence of
  intent**, with the earlier `[No preference]` superseded and **no further `E`/`S` branch letter
  requested** — re-asking would be asking the Judge to repeat a direction already given.
  Recorded with it: the direction **does not** show the frozen sentence already meant "manual",
  **does not** authorize a build, and **does not** update the Ratification Log; and excluding
  automated feed detection does not by itself exclude AI assistance after a human pastes a URL.
  **The §2.4 row content is prepared and explicitly UNSIGNED** — the log reserves the date and
  approval artifact to the Chief Editor, and Lane A does not write it.
  **The remaining index drift is corrected:** §0.6.2's *"The next artifact is `M-POC`'s own
  requirements document"* now points at the documents that exist, while preserving the surrounding
  rule that the index alone is insufficient input for a functional spec and authorizes no `SPECS`,
  UX or build. **`B-080`'s acceptance criteria, partition table and step guide are deliberately NOT
  copied into `D-194`** — this entry remains their canonical home.
  **Still not done, and named:** `B-080` step 2 onward — drafting `FR-01`'s manual inputs,
  requiredness, provenance and execution identity; the source author/date auto-extraction
  disposition, which stays **explicitly undecided**; propagation; and the checker extension.
  `FB-05` and `Q9` remain `Open`.
- **Resolution:** Applied
- **Evidence:** source review at f054967a953216083190f3508d68c3a1976d113d; D-193 and D-192 in V1-DECISION-REGISTER; requirements-traceability-map §7–§8; Modular_PRD §0.6, CR-14/Q9; FN-GATES §3.1/§6/§7; storyboard Panel A2; M-POC-REQUIREMENTS and FN-POC-ENGAGEMENT headers; tier-sweep source; ENCYCLOPEDIA-SYNC entry dependencies; the user's current M-MVP/M-POC clarification
- **Verified-At-Commit:** a054a68867c113708fbc02c4aec192e359e8e395

## What happened

**Clarified brief:** independently review D-193 as a proposal, correct unsupported claims, and
draft a parent-first Lane A plan for translating the Chief Editor's intent into requirements.
Queue future client validation for M-POC or a later authorized build. Keep B-077 separate and
complete B-079's independent review on its own evidence. No implementation or external sending.

The documentation provides an intent chain (frozen Project Requirements and Charter, governed
Product Requirements, functional behaviour, technical specifications), a traceability map,
storyboard and diagrams, an Encyclopedia sync ledger, and a separate development handoff channel.
The problem is keeping authority, lifecycle and evidence consistent across those views.

### Findings, highest parent first

| ID | Finding and source | Consequence |
|---|---|---|
| R1 | D-193 C-2 and rows 3–4 assume a current customer/sponsor exchange. The user specifies Chief Editor at M-MVP, with future client validation at M-POC or later | A nonexistent present customer must not become the prerequisite for a current requirements decision |
| R2 | D-193 U-2 calls the storyboard Reporter human. Panel A2 is headed Reporter, Line 1, Agent, and its Mermaid participant is Reporter (agent, L1) | The asserted two rival producer resolutions are not supported. An INSERT arrow also does not define generation/provenance behaviour |
| R3 | GF-1 correctly identifies FB-05's undefined producer but overstates runtime inevitability. GF-2 equates absent columns with inability to record an answer, despite §8 allowing an answer and date | These support a readiness gap and weak tracking structure, not proof that every implementation fails or that answers are impossible |
| R4 | D-193 proposes copying a handoff lifecycle into map §7, then adds only Status/Answer/Answered-On and initializes status unknown | This neither implements Status versus Resolution nor preserves the promised vocabulary. Unknown transmission is an evidence condition, not a new handoff state |
| R5 | D-193 C-1 treats a TIERS entry as what makes a document a declarable governance tier. The checker reads Item-column tables, not D-193's Tier/Applicability table | Adding the mapping alone cannot validate that table, and checker coverage does not confer document authority |
| R6 | D-193's zero Lane C verifications is treated as a governance question without a rule requiring each lane to verify | Reviewer independence is the criterion; lane participation counts are not a defect or a reason to edit live lane state |

The D-193 comparison also overstates the existing controls: Applied anchors currently have only
presence validation; Verified anchors get the full-history existence proof. Reviewer fields do
not mechanically prove that independent reading occurred. D-192 already records these limits.
An unchanged document date alone is not semantic drift.

## What you need

### Parent correction — exact proposed replacement for D-193's routing premise

> M-MVP is currently for the Chief Editor. For this packet there is no established external
> customer base to contact. Historical customer/sponsor wording describes the provenance of
> requirements; it does not establish a present recipient or a transmission. Current scope and
> readiness questions go to the Chief Editor/Judge through the existing decision process.
> Client and marketing validation is queued for M-POC or a later explicitly authorized build,
> with an owner, entry conditions and a review trigger. A prepared packet is not sent feedback,
> and neither is evidence of customer validation. Preserve frozen source text.

### Correct the failure and producer claims — exact proposed text

> CR-14/FB-05 is an unresolved specification dependency: T1 requires a trend-signal description
> but its producer and failure behaviour are not defined. Do not declare the affected intake
> unit ready or complete until the governed specification resolves this dependency. This is
> not a demonstrated runtime failure. Panel A2 depicts an agent Reporter, consistent with the
> actor label in FN-GATES; it does not supply the missing provenance contract. Present possible
> producer/fallback designs as proposals, not as rival decisions already in the corpus.
>
> Map §7 lacks a consistent location for response evidence and its routing state. Section 8's
> answer-and-date instruction remains possible to follow in prose, but completeness cannot be
> assessed reliably without a canonical response reference. This is a tracking gap, not proof
> that closure is unrecordable. Unknown external transmission must remain explicitly unknown.

Removing the T1 requirement or replacing AI tagging is not automatically a permissible resolution
of frozen CR-14. The decision packet must distinguish a conforming elaboration from a scope change
requiring the existing governing amendment/ratification process. No agent edits frozen sources.

### Keep one record per fact — proposed tracking correction

> Keep FB-01…FB-08 as traceability identities. Add a reference to the canonical answer/decision
> and evidence, rather than copying the handoff lifecycle into the map. Use existing Q9/FB-05
> links for the producer question; do not raise it again as a new requirement. Lane transactions
> retain Status, Resolution and verification fields in their own handoff entries. Judge decisions
> remain in the Register. For future client validation, use the existing backlog/refinement route
> with the source FB links, proposed owner, readiness trigger, evidence sought and next review.
> Do not claim sent, answered or validated without the corresponding evidence.

This is a proposal for Lane A to reconcile with the canonical six-stage map, not a new FB ledger.
The Chief Editor can decide the current CR-14 scope without waiting for a new tracking schema,
a checker extension, or future client outreach.

### Step-by-step decision guide for Lane A and the Judge

| Order / dependency | Bounded action | Success criterion and failure example | Decision / owner |
|---|---|---|---|
| 1 / none | Correct D-193 R1–R3: audience, actor and failure claims | Chief Editor is the current recipient; agent Reporter is correctly cited; no unsupported guaranteed-runtime claim | Approve correction planning; Lane A drafts |
| 2 / 1 | Prepare current CR-14/Q9 decision with source constraints, proposed producer/provenance, unavailable-input behaviour and acceptance examples | A required input has an identified source and an explicit failure path. A design that merely renames Missing fails review | Judge decides; Lane A prepares; Lane B reviews behavioural feasibility |
| 3 / 1 | Correct tracking R4 and queue future client validation through existing refinement | One answer has one canonical record; a draft without delivery evidence cannot count as sent or validated; trigger names authorized M-POC/later readiness | Approve-with-conditions; Lane A proposes record placement and owner for Judge acceptance |
| 4 / 2 decision | Prepare the propagation patch for the affected feature group and views | Trace CR-14 → FR-01 behaviour → acceptance examples → panel/data flow → Encyclopedia impact; absent signal cannot silently pass as complete | Lane A prepares under D-29/D-54; execute only with bounded authorization |
| 5 / 3 | Scope the optional checker follow-up alongside B-079's existing parser hardening | Both supported table shapes are exercised; false propagation fails; mere mention never proves semantic correctness | Defer to the existing Phase 1 tooling refinement; no duplicate implementation task |
| 6 / corrected committed packet | Independently review evidence and refresh graph from the settled revision | Named corrections verified at a real revision; named affected fragments match; no phase or unrelated item promoted | Eligible independent reviewer; Lane A owns graph refresh |

Steps 2 and 3 share the audience decision, but neither depends on completion of the other's tooling
or record layout. Lane C remains responsible for workflows when an actual workflow dependency
arises. No participation quota or new lane-state sentence is required (R6).

### Cross-reference and drift findings within this review

* **Real stale pointer:** Modular_PRD §0.6.1 says M-POC requirements are not yet written and no
  functional spec exists. Both `docs/modules/M-POC-REQUIREMENTS.md` and
  `docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md` exist, are dated 2026-08-22 under D-99, and are inventoried.
  Draft fix: link those files and say requirements/behaviour written; no SPECS/UX or build authority.
  Preserve the existing M-POC readiness/exclusion conditions. This is navigation drift, not permission
  to build or to claim a customer base exists.
* **Story-panel semantics:** Panel A2 still says at least one topic_tag, whereas FN-GATES §3.1
  distinguishes exactly one subject topic from many analytical tags. Draft fix: update the panel's
  requirement and diagram labels to that existing distinction; retain the unresolved FB-05 annotation.
* **Sequence/data flow:** the Panel A2 diagram inserts Logged before the transition record while its
  note and FN-GATES require transition evidence first. Draft fix: make the diagram distinguish
  record creation from the Logged transition and show the existing audit-before-state rule; leave
  technical transaction design to its owning specification. Do not use this old diagram as build input.
* **Encyclopedia:** Entry 06 declares dependencies on both map §4/§7 and FN-GATES. A map §7 change
  therefore requires an impact review even when CR-14's scope is unchanged; update only affected
  content. D-193's assertion that rows 1–3 cannot touch it is too categorical. Hosted parity is not
  assessed here; the ledger separately flags Entry 05 as stale, which remains its existing follow-up.

The storyboard is a dated journal view: correct or clearly supersede misleading current-use
passages without erasing its historical findings. These named issues are not a full link audit or
an assertion that every UML view has been inspected. Missing SPECS/UX is not an overdue deliverable
where the existing ruling deliberately stops at requirements and behaviour.

### Tier scope for Lane A's proposed corrections

D-193 is the parent correction. The map and Modular_PRD index are derived documentation targets;
the storyboard is a derived view. FN-GATES behaviour changes only after the CR-14 decision.
Encyclopedia impact follows its declared dependencies. If the eventual decision creates, sequences
or retires an artifact, apply D-54 to Register, Build Spec and Inventory together; assess Modular_PRD
§8 at its stated sprint/tier trigger. This draft itself makes no such decision. Application code,
schema, workflows, lane state and frozen records are unaffected. B-077 remains separate.

## What you did instead

Read and compared the named sources; queried the installed Graphify CLI for scoped navigation
(the graphify SKILL.md was not found in the searched local skill locations). At clean intake HEAD
`f054967`, graph metadata matched HEAD with stale false, the local suite passed 17/17, and frag124
passed exact parity. These results do not detect the semantic drift above. No fresh remote read
was performed; the pasted push report is attributed evidence, not my remote verification.

Drafted only this handoff and recorded B-079's separate independent verification of the correction
at `521b9b4`. No governed source, checker, graph fragment, code or workflow was changed. This new
Open entry requires Lane A acknowledgement and graph coverage after its eventual commit; no
self-acknowledgement or graph-synced claim for these working-tree edits is made. No commit or push.

**Final draft validation:** 15/17 checks pass. The two failures are this new entry's missing
Lane A acknowledgement and graph coverage. Closure-readiness passes with B-079's independent
verification fields. The docs-drift PASS still refers to committed `f054967`, not these edits.
Lane A owns the outstanding acknowledgement and graph follow-up; they are not waived.

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | D-193 planning packet | Phase 1: correct audience, source interpretation, tracking and dependencies before execution |
| Reject | Present-customer routing, human Reporter claim, impossible-recording claim | Phase 1: replace with the proposed evidence-bounded wording |
| Approve-with-conditions | CR-14 decision preparation and derived view corrections | Phase 1: preserve frozen intent; Judge decides scope; Lane A prepares patches |
| Defer | Client/marketing validation | Authorized M-POC or later build, with named owner and readiness trigger through existing backlog |
| Defer | Checker extension | Existing Phase 1 tooling refinement; no implementation this turn |
| Approve | B-079 bounded correction independently verified | Record retained in B-079; no B-077 or phase promotion |

## Round 2 — review at eb7088e, 2026-09-08; manual-intake clarification

**Clarified brief:** review Lane A's corrections and D-194 against the Judge's latest direction:
plan manual entry of topics, sources and trend signals at T1, using an existing published article
as the source. Draft the governing correction and dependent behaviour, not an application build.
Do not ask the Judge to repeat the already stated manual direction as an E/S choice.

### Accepted corrections and remaining drift

D-193's precedence banner addresses R1–R6, the checker limitations and Encyclopedia dependency.
The M-POC index row now links its existing requirements and functional spec. Panel A2 has an
explicit current-use supersession for topic cardinality and audit order. Those corrections are
accepted; the old journal diagram need not be erased. B-079's independent Verified record is
present at its named revision. B-077 has a separate Deferred disposition and follow-up tiers;
this is not evidence that its children were completed. Neither entry is changed in this review.

**One remaining instance of the index drift:** Modular_PRD §0.6.2 still says “The next artifact
is M-POC's own requirements document” immediately after the corrected row says it exists.
Replace that sentence with:

> The feature-group requirements are written in `docs/modules/M-POC-REQUIREMENTS.md`, with
> behaviour in `docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md` (D-99). The index alone remains insufficient
> input for a functional spec. Consult those existing documents and the current work authorization
> for the next step; their existence does not authorize SPECS, UX or a build.

**B-080 stays Applied pending this bounded navigation correction and independent verification.**
Its closure need not wait for implementation of manual intake or checker hardening. The following
D-194 review continues this entry's step-2 decision-packet work, not a duplicate FB-05 backlog.

### Parent — distinguish the Judge's intent from the old text

The current clarification is positive direction toward manual input, not the earlier “No
preference.” However, the quoted non-goal excludes automated Facebook/RSS detection; it does not
logically exclude AI assistance after someone pastes a URL. D-194's literal reading of the old
“AI tags” wording and the Judge's current explanation differ. Preserve both as dated evidence;
do not represent either inference as a mechanical proof of original intent.

**Proposed D-194 correction, for Lane A to record with the current clarification as evidence:**

> The Judge's 2026-09-08 clarification directs planning toward manual T1 input of topics, sources
> and trend signals drawn from existing published articles. Treat AI provenance in an upstream
> article separately from generation performed by this application. For this intake plan, the
> application does not discover feeds or generate these input values. This direction replaces the
> earlier unanswered E/S choice for planning purposes. It is not build authorization and does not
> establish that the old frozen sentence already said “manual.” Prepare the explicit reconciliation
> of CR-14, the Addendum's Reporter-actor rule and the dependent specifications for the Judge's
> governing approval record. Do not edit frozen PRD or Charter text. Preserve later-gate scope
> unless a separate clarification changes it.

The parent task is to record this business intent and its governed effect, not demand a branch
letter. If the local ratification process requires a discrete dated sign-off, prepare the concrete
row and identify that remaining record requirement. The latest direction is evidence of intent;
it is not evidence that the Ratification Log has already been updated.

**Draft row content for review, not a sign-off:** Item: CR-14/FB-05/Q9 manual T1 input; Category:
reconciliation of clarified intake intent with the frozen wording and current Reporter actor;
Resolved?: planning direction manual, remaining actor/authority impact to be recorded;
Ratified?: not claimed by this draft; Ratified Date: unset until the recorded act; Approval
Artifact: the Judge clarification dated 2026-09-08, with a stable repository reference supplied by
Lane A when recording it; Build Implication: no automated discovery or in-app generation of the
three intake inputs, required-value and audit rules retained, no build authorized by this packet.

### Child — correct D-194's proposed success tests

* **E3 is not automatically conforming.** Creating a Logged article without a required trend
  signal and flagging it for later review changes the T1 completion condition. It cannot be
  approved merely because AI remains the nominal producer. Draft replacement: missing required
  input prevents T1 completion; any incomplete draft must be explicitly distinguished from Logged,
  with its own authorized semantics. Do not invent that draft state in this review.
* **“Actor already satisfied” means specified, not implemented or accepted.** D-194 should label
  that column “represented in existing specifications,” and mark the actor subject to the current
  manual-intake reconciliation. It cannot settle the Judge's meaning by citing a derived diagram.
* **The four-word test is incomplete.** Actor/location/objects/verb are useful dimensions, but a
  candidate must also preserve or explicitly amend requiredness, gate ordering, authority and
  provenance. Calling the test mechanical conceals those choices.
* **S3 does not uniquely require S1.** Deferring generation still needs a T1 disposition: an
  approved manual source can preserve the required field. Removing requiredness is another choice,
  not an inevitable dependency. TC3's scoring limitation is distinct from tagging; that distinction
  neither proves a producer is feasible nor requires one to be built.

### Proposed manual behaviour and failure-derived acceptance criteria

These are reviewable candidates for the existing FR-01 feature group, not operative requirements.
Keep exactly one subject topic separate from optional multiple analytical/source-publication tags
under G39. A source's tags may have been AI-generated upstream; manual entry does not prove that
provenance, and the application must not claim it generated them.

| Failure to prevent | Proposed behaviour | Observable acceptance example |
|---|---|---|
| A required trend description still has no producer | The human submitter supplies the description and identifies the supporting source; identify submitter, source URL and entry time in the audit design | Complete manual input can satisfy the intake data requirement with AI unavailable |
| Empty input is silently treated as Logged | Reject T1 completion when a required value is absent; retain the existing requiredness pending a separate authorized change | Missing description produces a named validation failure and no completed T1 transition |
| Subject topic and social-media tags collapse into one field | One subject topic; multiple analytical/source tags remain separately identified | Adding two source tags does not create two subject topics |
| The application claims upstream AI output as its own | Record manual entry and supplied provenance accurately; unknown upstream authorship stays unknown | Pasted article tags do not create an invented AI generation event |
| Manual entry silently changes the execution identity or four-eyes model | Specify separately who supplies data, who executes T1 and who signs later gates; assess Addendum §3.1 and existing override rules | The recorded T1 actor matches actual execution; a human is never logged as an agent |
| Audit order is violated | Retain the existing audit-before-state rule and atomic success/failure intent | A failed transition leaves no claim that T1 completed without its required evidence |

Manual collection does not remove ordinary required-field validation, persistence or audit
recording. “No deterministic or heuristic detection” is scoped here to discovery/derivation of
the intake values, not interpreted as a prohibition on all software validation. Whether source
author/date auto-extraction remains is a named follow-up detail: the present FN-GATES sentence
still allows it. Lane A should put its proposed disposition in the same manual-intake packet,
not silently preserve it as if the new clarification had settled it.

### Parent-first Lane A follow-up

| Order | Action | Completion evidence / tier |
|---|---|---|
| 1 | Record the latest manual direction and reconcile the existing “AI tags”/Reporter-actor wording | D-194 correction and concrete governing approval record; no repeated E/S question |
| 2 | Draft FR-01 manual inputs, requiredness, provenance, execution identity and failure examples | Modular_PRD feature-group anchors and FN-GATES proposal; source author/date disposition explicit |
| 3 | Prepare propagation and repair the remaining M-POC index sentence independently | Map CR-14/Q9/FB-05, storyboard/panel and sequence/data-flow view, Encyclopedia Entry 06 impact; frozen sources unchanged |
| 4 | Apply D-54 when the decision changes scope, sequence or artifacts | Register, Build Spec and Inventory together as applicable; Modular_PRD §8 at its trigger; no new UI/technical stack work |
| 5 | Independently verify the committed documentation correction and refresh graph | Real revision, named fragment parity and local checks; B-080 closure scoped to its correction |

Lane A owns governance and specifications; Lane B reviews input, persistence and audit feasibility
without writing code; Lane C acts only if a workflow dependency is actually authorized. This does
not equate development lanes with product Lines or reassign the live lane lock. Existing checker
hardening remains independent of the CR-14 product choice, in its already named tooling follow-up.

### Evidence and decision

At clean `eb7088e191bd629d093b4cbd9825aa2ac9e5620f`, the local suite passed 17/17, graph metadata
matched HEAD with stale false, and frag125 passed exact named-fragment parity. Graphify query was
used for scoped navigation; source reads establish the findings above. No fresh remote equality
claim is made. Graph currency does not resolve the remaining semantic drift. This appended draft
postdates the extracted revision and needs Lane A's graph refresh after its eventual commit.
No governed document, lifecycle field, B-077, B-079, checker, code or workflow was edited; no push.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-193 R1–R6 corrections and bounded Panel A2 supersession | Phase 1: retain; do not repeat completed work |
| Approve-with-conditions | B-080 navigation correction | Phase 1: repair §0.6.2's remaining next-artifact sentence, then independent closure review |
| Approve | Manual intake as the Judge's current planning direction | Phase 1: record it in the D-194 packet with governing reconciliation |
| Reject | Requiring another E/S choice, or inferring no AI solely from no feed detection | Phase 1: use the explicit clarification and separate concepts |
| Approve-with-conditions | Manual FR-01 and related views | Phase 1: concrete actor/requiredness/provenance contract and governing approval before application |
| Defer | Code, checker implementation, client validation and hosted Encyclopedia parity | Existing respective phases/readiness gates; no implementation this turn |

## Trigger-package clarification — 2026-09-08, supersedes URL-only planning shorthand

**Judge direction:** the Chief Editor manually enters one editorial trigger package through the
application UI. The manual URL is one component alongside topics, sources and trend signals.
For M-MVP the Chief Editor prepares and enters it directly. For M-POC a package is captured
externally (the Judge's “Instacart” example), then the Chief Editor manually extracts and enters
the relevant data. M-MVP and M-POC data must be partitioned. This is a planning instruction;
no application build or external integration is authorized.

### Parent requirement — proposed text for Lane A's D-194 reconciliation

> The unit submitted at Reporter intake is one manually assembled editorial trigger package,
> not a URL followed by application-generated topic/source/trend values. It contains a reviewable
> source URL, exactly one editorial subject topic under G39, source information, and a trend-signal
> description. Additional source or analytical tags remain distinct from the subject topic.
> The Chief Editor supplies and checks this package through the UI. T1 validates the required
> package and records intake using the agreed execution/audit contract. A URL remains required;
> it is not the complete data contract. No automated feed discovery, external package import or
> in-app generation of these input values is implied.

This refines the previous manual-input proposal: the editorial trigger flow supplies the values
before T1; “Reporter produces the missing value” must not remain the parent assumption. Human
data entry and the recorded gate executor still require explicit alignment with the Addendum;
do not silently label the Chief Editor as an agent or change subsequent Line controls.

### Data partition — behaviour first, storage and UI design later

| Concern | M-MVP | M-POC | Boundary to preserve |
|---|---|---|---|
| Package origin | Chief Editor's editorial research/preparation | External client/engagement capture, manually reviewed and transferred by Chief Editor | External capture is not an application submission or an integration |
| Shared editorial input | URL, one subject topic, sources, trend description and distinct optional analytical tags | The same editorial input, prepared from the external package | One FR-01 contract and one editorial engine |
| Module-specific context | Internal editorial purpose/provenance | Client/engagement reference, trigger provenance and relevant commission context under PR-04/PR-06 | Engagement context belongs to M-POC; do not put client, payment or cart fields into the shared article contract |
| Relationship | Existing editorial article | Engagement linked to an existing or new article under PR-02 | Partition by context and association; do not create duplicate articles to distinguish modules |
| Output visibility | Internal publishable article | Existing client package and internal article remain separated under PR-12/PA-02 | Input partition does not authorize publishing private client context or exposing the internal article |

“Instacart” is retained only as the user-provided external-capture example; its product identity,
API and field schema have not been specified or researched. No integration design depends on it.
The logical partition above does not choose tables, tenancy changes, forms, tabs or new accounts.
Those decisions belong to a later authorized technical/UX tier. Existing PR-08/D-96 exclusions
of in-app payment/cart capability remain intact.

### Gaps and success criteria

| Gap or failure case | Required outcome for the plan |
|---|---|
| Current flow says “enter URL” and leaves other required values unexplained | Show the complete manually entered package at the input boundary; each required value has a human-supplied source |
| External capture is mistaken for successful app intake | Capturing an M-POC package externally creates no app article; manual entry and successful T1 validation are separately observable |
| Only URL is entered, with no required topic or trend description | T1 does not complete; validation identifies missing package components |
| M-POC uses an already tracked URL | Preserve the existing PR-02 engagement-to-article association rule; reconcile it explicitly with FR-01 duplicate-intake refusal rather than duplicate the article |
| Client context is copied into shared/public content | Keep engagement context separate and traceable; no automatic export into the publishable article or the wrong client's output |
| Source tags are treated as multiple subject topics | Preserve G39: exactly one subject topic, separately represented analytical/source tags |

These are acceptance examples for specification review and later implementation tests, not claims
that any UI or persistence behaviour has been built. Exact source-information fields should reuse
the existing FN-GATES definitions; Lane A must explicitly settle optional author/date handling in
the same packet rather than introduce a new mandatory metadata set here.

### Parent-first Accept/Reject table and Lane A guide

| Order / dependency | Decision for review | Lane A next action | Evidence of completion |
|---|---|---|---|
| 1 / none | Accept the manual trigger package as the input unit | Record the Judge's direction and reconcile D-194's producer/actor premise; prepare the governing approval record | Package definition, human supplier and T1 execution identity are unambiguous |
| 2 / 1 | Accept distinct M-MVP/M-POC context with shared editorial fields | Draft the field/responsibility mapping against FR-01 and PR-02/PR-04/PR-06; preserve PR-08 exclusions | Every proposed datum has an owner/context; no duplicate article or in-app cart |
| 3 / 2 | Accept the two manual entry routes into one engine | Update the proposed business storyboard and sequence/data-flow views: direct entry versus external capture → manual preparation → entry | Both routes arrive with the same required editorial package; external capture never bypasses T1 |
| 4 / 3 | Accept the complete-package and separation criteria | Draft positive, missing-input, existing-URL and wrong-context examples in the existing functional specs | Tests can distinguish complete intake, incomplete input and engagement association |
| 5 / 1–4 | Approve propagation only after the bounded governing act | Apply D-29/D-54 to the affected documents and record unaffected tiers | Register/Build Spec/Inventory reflect the decision as required; no frozen-source edit or build |
| 6 / committed corrections | Accept independent review before closure | Check named cross-references, graph currency and affected fragment parity | B-080's own correction is verified at a named revision; no unrelated child is promoted |

**Cross-reference targets:** Modular_PRD FR-01/CR-14/Q9 and module index; FN-GATES §3.1/§6/§7;
M-POC requirements PR-02/PR-04/PR-06 and functional-spec F1/flow/edge cases; storyboard A1–A2 and
B1–B3; their sequence/data-flow diagrams; traceability-map CR-14/FB-05; Encyclopedia Entry 06
and any other entry whose declared dependencies change. Preserve the single engine and output
separation. Do not create a new standalone UML or UX artifact merely to repeat these views.
Actual UI layout stays in the authorized UX tier; this packet describes user actions and data.

**Review boundary:** current HEAD remains eb7088e; the graph metadata covers that committed
revision, not this and the preceding working-tree additions. The prior baseline was 17/17;
no new implementation check is warranted for this prose-only extension. Lane A refreshes graph
coverage after the eventual commit. Only B-080 is edited; B-077/B-079 and their lifecycle records
are unchanged. This review sends nothing externally and makes no commit or push.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Manual trigger package and distinct module origins | Phase 1: record the Judge direction in the parent decision packet |
| Approve-with-conditions | Shared intake plus separate M-POC engagement context | Phase 1: map fields, existing-article association and disclosure boundaries |
| Approve-with-conditions | Storyboard, functional specs and cross-reference propagation | Phase 1: apply only under the bounded governing act; independently verify |
| Reject | URL-only completeness, automatic external import, duplicated editorial engines | Phase 1: use the complete package and existing shared-engine rules |
| Defer | UI implementation, storage design and external integration | Later explicitly authorized technical/UX/build scope |
