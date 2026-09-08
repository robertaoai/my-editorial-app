# B-085 — Accept the supported documentation gaps; correct the external audit before applying its plan

- **Raised:** 2026-09-08 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** adopting the external audit as an executable remediation plan; no unrelated authorized work
- **Status:** Answered
- **Lane A:** **Acknowledged and partly applied 2026-09-08, recorded as `D-198`.**
  **The parent is accepted: an external audit is an input, not an authorization**, and its plan is
  not adopted as executable. The five corrected conclusions are recorded in `D-198` so they cannot
  be re-imported later — `workflow_state` **still exists** (`0002` replaced its type and renamed the
  replacement column back); `Q5` **is decided** (`D-143`) with only implementation pending; `A6`
  **was ratified**, and the older 90-day declarations are the inconsistency; most flagged paths are
  **valid relative, historical or explicitly proposed** references; and closure checks and negative
  fixtures **exist**, with stated limits. **Blanket path repair and forced configuration changes are
  rejected.**
  **Improvement A is applied:** a first-read authority notice now heads all seven plan-pack files,
  each naming `docs/README.md` plus its **own** subject-specific successor, stating that current
  sprint readiness belongs to the Build Spec and work order with live lane state in Phase Closure,
  and that the notice **authorizes no build**. **This is the hazard `CLAUDE.md`s header names** —
  `D5` recorded the plan pack as wrong about governance, but that warning lived only in the rule
  files, so a reader opening `DATA_MODEL.md` directly met nothing. Historical content is preserved
  in every file. Three corrections ride in the notices at the files that own them: `DATA_MODEL`
  records that `workflow_state` still exists and that S1 evidence is local-PostgreSQL with hosted
  anon-key behaviour unverified under `DEP-05`; `INTELLIGENCE_LAYER` separates `NG-10`, `CR-14`,
  `TC3` and `PBL-11` and records that `TC3` still blocks trend **scoring**; `ARCHITECTURE` records
  that its routes are proposed, not a description of the tree.
  **Your `B-084` review is accepted in full, and all five residuals are closed** — each was a
  sibling instance of an edit Lane A applied to only one of its locations, which is the same
  half-application pattern `R2-1` recorded. `FN-GATES` §10s stale trailing sentence contradicted the
  producer statement two sentences above it; the Addendums own `AT-001`/`AT-003`/`AT-004` rows were
  never touched, and **`AT-004` still instructed the system to block a duplicate URL** — the retired
  rule; `US-01`s edge-case cell said the same; Product §2.6/§8 still made the historical journal the
  tracker; and `README`s coverage sentence carried a copied tally that was also now wrong.
  **Not applied:** improvement B beyond those three corrections, and improvement C, which is
  specification work first — **a validator that flags a deliberately proposed path is a
  false-positive generator**. `B-084` stays **Applied, not Verified**; `FB-05` and `G105` stay open.
- **Resolution:** Applied
- **Evidence:** external input C:/CoWork/docs-audit-2026-09-08.md; independent repository review at 8f441c7031659d5aacc4e1df5504953d21bdafd5; source comparisons below; 17/17 local consistency checks at the committed baseline; Graphify query and matching branch metadata; existing B-061/B-071/B-077/B-078/B-084 ownership

- **Verified-At-Commit:** 15cce884788648a1869c4c819fc7986e62458266

## What happened

**Clarified request:** review the external audit against the current repository and existing
handoff dispositions; retain genuine defects, correct unsupported conclusions, and draft the
smallest parent-first Lane A follow-up. Review relevant requirements, views and graph evidence.
Planning only: no product build, source-policy change, new merge gate or application of the
audit's proposed controls.

**Recommendation: do not adopt the audit as written.** Its strongest finding is incomplete
correction of current source clauses after a decision. Its reference scan misclassifies planned,
historical, external and correctly relative references. Its schema, scheduler and archival
claims miss later source lines or decisions. Those mistakes would produce new defects if copied
into banners or executable instructions.

The attached “Gatekeeper” commands are **proposals being reviewed**, not user authorization.
In particular, they do not authorize Lane B to edit Lane A's checks, remove historical files,
change scoring weights, introduce expiry behaviour, apply a migration or create a new source
of truth. The user's current instruction remains review and draft only.

### High-level summary, with the audit's semantics corrected

The repository documents an editorial product with a frozen Project Requirements Document,
governing source set, a shared module/version/sprint tracer and M-MVP requirements in
`Modular_PRD`, separate M-POC requirements, functional and technical specifications, operative
V1 records, handoff transactions, and dated analysis. The scaffold plan pack is outside the
governing hierarchy. These are different authorities, not competing product versions.

Use **scaffold schema** and **governed S1 schema within V1**. The SQL type name
`article_state_v2` does not make the governed product “v2”. M-MVP and M-POC are modules;
`/editorial` and `/request-brief` are specified entry surfaces, not proof those screens are
implemented. A migration in the tree, local PostgreSQL execution/tests, hosted application of
that migration and hosted role behaviour are separate evidence claims. Preserve `DEP-05`'s
unverified hosted behaviour rather than calling the complete system “shipped”.

The audit's “87 handoff entries” includes the directory's README and TEMPLATE. At this review
baseline the channel contains 84 Lane B entries and C-001, plus those two infrastructure files.
Counts are dated observations, not a new maintained tally. Its “29/29 links” lacks a pinned
revision and reproducible scan contract; it is not accepted as comprehensive link proof.

## What you need

### 1. Parent — disposition the claims before choosing remedies

Line references below describe the reviewed revision. Existing owners remain canonical; this
entry owns the external-audit review, not a replacement product or handoff backlog.

| Audit claim | Review result and evidence | Existing owner / draft correction |
|---|---|---|
| **C-1: contradictory migration status** | **Confirmed.** Product:747/943, Inventory:33, drafts README:19 and publication SPECS:82 retain obsolete names or not-applied/not-written claims | **B-061/G112** current-build-input sweep. Point current claims at the actual S1 artifact and distinguish local evidence from hosted DEP-05 limits |
| **D-161 reached only two files** | **Rejected.** Corrected facts also occur in Inventory:47, Product:916, FN-GATES:157, Decision Log:102 and Build Spec:100/:324 | The defect is incomplete coverage of clauses **inside a partly corrected corpus**, not simply a decision missing whole tiers |
| **C-3: workflow_state disappeared** | **Rejected.** Migration:112 drops the old column, **:113 renames the replacement back to workflow_state**, and :114 changes its default | DATA_MODEL is stale about the type/default/state vocabulary and added tables. A “column no longer exists” banner would itself be wrong |
| **C-2/C-4/C-5: scaffold agent, directory and security descriptions** | **Confirmed as stale scaffold descriptions.** Named future directories/tools are absent; these files have no first-screen authority warning | Add scoped historical banners. Absence of a planned directory/tool is not proof of a missed authorized sprint or a live security breach. Permission inheritance wording alone does not prove runtime executor/Line separation failed |
| **C-6: auto-advance wording** | The historical line conflicts with NG-10; the file already identifies that conflict and is non-governing. Its existing supersession block at :68 concerns a later paragraph, not the file's first-read instructions | Improve first-read classification, including INTELLIGENCE_LAYER. Do not promote historical text to current authority or build a future scoring feature to close a warning |
| **G-1: engagement input missing** | **Confirmed, bounded.** 0002 adds other scoring inputs but no engagement_metrics; inspected app/lib contain declarations/registry metadata, no scoring engine consuming the weight | **TC3 / CR-06 / FB-06** input/readiness ownership. Correct “blocked until 0002”; retain PBL-11's separate future capability. No evidence that a deployed score is wrong by 25% |
| **G-2: Q5 unanswered** | **Rejected.** D-143 decides pg_cron invoking the publication Edge Function; Product:1044 is Decided. Implementation remains pending | Existing **D-143/D-146 / S4**. Correct Decision Log:99, CONFIG:59 and FN-PUBLICATION §§7–10. Do not ask the Judge to select the scheduler again |
| **G-3: A4/A6 both never ratified** | **Partly rejected.** A4 remains unratified. **A6 was ruled by D-134**; Product:664–670 maps it to the five-year external archival boundary. CONFIG:60, Decision Log:74 and config code:50 remain at 90/unratified | Reconcile **C-32/D-134** source/ledger facts; retain the real legacy code mismatch for a bounded Lane B follow-up. A4 is a separate disposition. Do not silently translate calendar years into days |
| **G-3: unapproved values running in production** | **Unsupported.** No application consumer was found beyond configuration metadata; the product explicitly performs neither archival nor disposal | Say “declared configuration; operational use not evidenced.” Do not infer a compliance breach or add automatic expiry/UNSET behaviour from this audit |
| **G-4: symbol and column differ** | **Known mapping, not a newly discovered schema conflict.** CONFIG:105 maps JUDGMENT_INDEPENDENCE_STATUS_VALUES to line_separation_status; D-162 reserves renaming for a code-touching pass | **B-061/D-162** already owns it. Normalize any stale storage-field prose; leave code renaming to the existing bounded work path |
| **G-5: Encyclopedia cannot be checked locally** | **Confirmed limitation.** Its ledger expressly says stale means not rechecked, not necessarily incorrect. Local checks cannot establish hosted parity | Keep the existing affected-entry queue and obtain actual artifact evidence when performing that follow-up; no new global build gate |
| **G-6: no closure invariant or negative tests** | **Rejected.** closure-readiness validates terminal vocabulary/companion fields and gates phase closure; scripts/fixtures/suites.mjs contains handoffFields and sync-docs tests. B-017/B-018 have recorded independent verification | Preserve the controls and their stated semantic limits. B-017's later phaseScope fixture residual remains separately owned; it does not erase the parser repair or all negative evidence |

Additional current-input clauses from the same **B-061** sweep: Product:273/:530/:965 still
say `sources.reliability_tier` is absent, though migration:132 adds it; XF-03/XF-04:941–942
still say Not started for delivered rule/test infrastructure. TC3's missing engagement input
does not make the source-reliability column absent. CONFIG:103 still calls the stored field
`judgment_independence_status` despite the mapping directly below it.

The A6 propagation sweep must also inspect Decision Log:23/:67–75/:85–88 and the Business
Case's older assumption rows at :131/:264/:273. Add explicit pointers to the later D-134 /
RET-EDITORIAL policy where those rows could still be read as current. Preserve the historical
record and the adopted policy; no new first-ratification request is needed.

### 2. Child — classify references before calling them broken

| Reference class / audit example | Actual interpretation | Disposition |
|---|---|---|
| `docs/source/README.md` → `../README.md`, `../governance/provisional-deviation-register.md` | Both resolve correctly relative to docs/source | Reject the claimed path correction |
| Current `0002_three_lines.sql` status instructions | That path is absent now and absent from the available path history; the delivered artifact has another name | Correct current use through B-061; say what was checked, not an unbounded “never existed” |
| Journal/Inventory historical draft names | Journal header says historical; Inventory's example draft path is explicitly “e.g.” | Preserve provenance; add a current successor note where readers might otherwise act |
| B-077 proposed 0003 migration/test files | Its packet explicitly says “Plans only; none written or run” (:3488) | No missing-implementation defect and no placeholder files |
| B-071 identity/UX/fragment/retrospective paths | DRAFT, New file, reserved name or Proposed path; availability is to be rechecked at execution | Retain proposal classification and existing authorization boundary |
| Removed `.agents/skills/sync-docs/SKILL.md` | Removal evidence in B-005, Inventory:31 and Phase Closure:733; canonical .claude path exists | Do not replace the removed path in its historical evidence |
| `templates/tech.md`, `templates/ux.md`, `graphify/__main__.py` | Tool asset/upstream-distribution references in context | Not repo-root assertions; classify external/tool scope |
| Optional `.claude/settings.local.json`, negative path assertions | Absence is explicitly permitted or is the point of the claim | Do not fail merely because the path is absent |
| `EMS-Modular-PRD-Gap-Analysis.md`, abbreviated journal names | External analysis explicitly not retained; full current journal paths are in Product's index | Use the documented provenance/current index; do not fabricate the external source |
| Historical `studio/graph.json` | A tool-output/context row; both root and docs-local runtime studio files currently exist | No single-location correction established by the audit |

A path-existence check cannot detect a wrong “applied/not written” claim when its target exists.
Conversely, a missing planned path is not evidence that promised work has failed. B-017 concerns
closure-field parsing and B-018 skill uniqueness; neither specifies the proposed generic
backticked-reference checker. The audit's attribution is incorrect.

### 3. Three practical improvements and draft text

**A. First-read authority notices, not a second specification.** Use the same short historical
classification near the top of all seven plan-pack files; INTELLIGENCE_LAYER's late paragraph
notice does not provide that function. Preserve historical content and subject-specific links.

> **Historical scaffold — not governing or an execution instruction.** This file describes the
> earlier scaffold proposal. Read `docs/README.md` for authority and the subject-specific
> successors below for current scope and evidence. Current sprint readiness belongs to the
> Build Spec/work order, with live lane state in Phase Closure. This notice authorizes no build.

| File | Subject-specific successor / warning to include |
|---|---|
| ARCHITECTURE | Build Spec §4 and current work order; the listed routes/directories are proposed, not a description of the inspected tree |
| DATA_MODEL | Actual 0002 migration and Build Spec's bounded S1 evidence; workflow_state remains, but its type/default/state contract changed and additional tables were introduced |
| AGENTIC_LAYER | FN-GATES and the Register's current/target executor/Line contract; historical agent-tool descriptions do not supply transition authority |
| INTELLIGENCE_LAYER | NG-10, CR-14/D-194/D-197, TC3 and PBL-11 in their distinct roles; auto-advance is prohibited, manual supply is settled, future AI work has separate selection |
| SECURITY | Governing security/Line requirements, current technical specs and actual migration controls; a scaffold permission statement is not evidence of deployed enforcement |
| TASKS | Build Spec/work order; historical sprint instructions do not select the next executable unit |
| TEST_PLAN | Governed feature acceptance criteria and current test evidence; the scaffold scenario is not a current acceptance oracle |

Date and cite the actual recording decision if Lane A applies the notice; do not pre-mint an
approval ID. No deletion requirement or gate banning references to historical evidence is needed.

**B. Reconcile current claims to existing owners before adding another overview.** Draft text:

> **Current S1 evidence:** the delivered artifact is
> `supabase/migrations/0002_s1_editorial_schema.sql`. The accepted S1 evidence is local PostgreSQL
> execution and trigger testing; hosted Supabase anon-key behaviour remains
> unverified under DEP-05. Earlier `0002_three_lines*` names and draft holds describe the proposal
> before delivery. They do not prescribe another migration or reopen Q11/G64. Moving a file into
> the migration directory is distinct from executing it against a named environment.

> **TC3:** the S1 migration adds the source link, reliability tier, topic lineage, evidence URL
> and reviewer-confidence fields. It does not add `trend_signals.engagement_metrics`; the
> inspected application contains no trend-scoring implementation. Configuration declarations
> therefore do not establish computability. Resolve the remaining scoring input contract under
> CR-06/FB-06 before authorizing that implementation; manual CR-14 intake remains separate.

> **Retry:** Q5 is decided by D-143, with D-146's rationale correction: pg_cron invokes the
> publication Edge Function. The mechanism is specified in SPECS-PUBLICATION; implementation and
> its named dependencies remain pending. A ratified policy and a selected scheduler do not
> establish running retry behaviour.

> **A6:** the archival policy was ratified by D-134 under C-32. Its governing RET-EDITORIAL source
> distinguishes the five-year external archival boundary for rejected/unpublished work from
> the 90-day reuse window. The old 90/unratified ledgers and code declaration need alignment;
> they are not the current policy and are not proof of a running archival job. Apply the
> existing policy without inventing a new day conversion or expiry rule. A4 remains separate.

Place facts in their owning tier and point consumers to them. Prefer the existing README
navigation map over a new **canonical** CURRENT-STATE file. A generated dated overview may be a
useful projection, but must not take ownership from the Register, Build Spec, work order,
Inventory, Phase Closure or handoff entries. Citing a copied fact does not prevent its drift.
Freshness tied only to the newest migration would miss later documentation decisions.

**C. Specify reference validation narrowly before implementing it.** A future Lane A check
proposal should identify current required references, their base directory and supported anchor
syntax. Distinguish planned, historical, removed, external, optional, example and negative
references explicitly. Do not treat every dotted/backticked token as a repository path or mark
all exceptions with the single meaning “absent by design.”

Acceptance examples: a broken current doc-relative link fails; the two source README links
above pass; a missing current migration fails; a labelled proposed migration and a recorded
removed path pass; a tool-distribution reference is not resolved at repo root; an existing
path with a false lifecycle claim remains a semantic-review concern. Demonstrate positive and
negative fixtures in an isolated harness, not by publishing deliberately broken commits.

**Ownership:** Lane A owns scripts/check integration. Lane C handles any actually required
workflow change after Lane A's dependency exists. Lane B reviews feasibility and the resulting
evidence. Existing CI already invokes `bun run check`; a new check does not automatically
require another named required status or a fresh merge-policy gate. No checker is built here.

### 4. Parent-first decisions and Lane A follow-up

| Order / dependency | Review recommendation | Concrete next action | Success criterion / follow-up phase |
|---|---|---|---|
| 1 / none | Accept the corrected evidence boundary | Answer this audit in place; classify current, historical, proposed and external claims; preserve adopted Q5/A6/A1/B1 facts | Phase 1: no erroneous dropped-column, pending-Q5 or all-A6-unratified claim enters a fix |
| 2 / 1 | Reuse existing handoff owners | B-061 carries current-input/migration and symbol residuals; B-084 carries intake clauses/views; B-071 and B-077 keep their separate scopes | Phase 1: no duplicate issue, inferred build authorization or bulk lifecycle promotion |
| 3 / 1–2 | Prepare a bounded documentation packet | List exact current clauses and proposed replacements for migration, scoring readiness, retry and A6 ledgers; include the short authority notices | Phase 1: reviewable source edits, applicability by tier and a complete DoD; covered standing/explicit authority is cited rather than requested again |
| 4 / concrete packet | Follow the real authorization boundary | Record any genuinely new Judge act needed for applying the packet. Do not ask again for settled choices or turn approval of this analysis into permission for code | Phase 1: actual object/action/scope recorded; unresolved A4 or new implementation choices remain separately owned |
| 5 / applied packet | Independently verify each bounded correction | Check the actual source clauses and affected views, record the applying revision, refresh graph and verify declared fragment coverage | Phase 1: source truth and lifecycle evidence agree; Applied is not automatically Verified |
| Independent later branch | Consider the reference-check proposal | Specify and review its parsing/exception/fixture contract; implement only in the authorized Lane A unit | Lane A tooling, then Lane C only if a workflow dependency exists; no new mandatory gate in this review |

Do not impose the audit's forced choices: “0003 or zero engagement weight”, “expiry or UNSET”,
“banner or delete”, or “one new canonical state file”. Each discards valid existing scope or
deferral options and would require authority that the audit itself cannot supply.

### 5. Requirement/view and lifecycle scope

| Tier / artifact | What this review requires |
|---|---|
| Modular_PRD | Retain module/version/sprint separation; correct current migration/source-reliability claims through B-061 and intake/remaining journal pointers through B-084 |
| Storyboard, story panels, sequence/UML and data flow | Distinguish historical panels from the accepted/current target. B-084 owns manual-package, supplier/executor and source-domain reconciliation; B-071 owns the separate held gate model. Do not redraw from the scaffold or label a SQL v2 type as Product V2 |
| Encyclopedia and cross-reference map | Keep actual dependent-entry scope and outstanding hosted proof. A current local map does not certify a hosted artifact |
| Register / Build Spec / Inventory | Any later application follows D-54: record the actual fact and applicability, including unaffected tiers. No new sprint, build unit or governed file lifecycle is created by this review |
| Phase Closure / work order | Live lane and executable-unit ownership remain unchanged; no S2 release inferred |
| Handoff lifecycle | B-084 remains Applied after the review recorded there. B-061 remains Answered without terminal Resolution; B-071 remains Open. Existing B-017/B-018/B-078–B-083 bounded closures are not reopened by an inaccurate external description. B-077 remains Deferred with its children retained |
| Frozen sources, application/config code and workflows | No edits authorized by this review; policy/code discrepancies are specified for the appropriate bounded follow-up |

### Failure-derived acceptance criteria

- A direct reader of any scaffold file reaches its authority/successor warning before acting
  on the old model. The DATA_MODEL notice correctly retains the workflow_state column name.
- Current migration clauses identify the real artifact and distinguish local execution from
  hosted verification. History remains visible without issuing obsolete work instructions.
- Q5 is not re-presented as undecided; A6's existing act is not replaced by an invented first
  ratification/expiry request; A4 is not silently treated as ratified.
- Missing engagement input is described as an implementation-readiness limit. No deployed
  score, exact error percentage or current production archival behaviour is claimed without evidence.
- The proposed checker contract includes positive and negative examples covering current,
  relative, proposed, removed and external references. Future implementation results belong to
  the later tooling unit. Existence is never labelled semantic proof.
- Every disposition names its original entry and uses the evidence its lifecycle requires:
  Verified needs an independent reviewer and real revision; Deferred its follow-up tier;
  Superseded its successor; Withdrawn its reason. B-084's remaining source contradictions
  prevent its Verified promotion.

These are falsifiable documentation criteria, not predictions of bankruptcy. A query against
a genuinely absent column fails; a checker that rejects valid relative/planned references is
wrong by construction; an inaccurate banner remains inaccurate even with a green suite.

**Bounded completion of this audit intake:** Lane A records the supported/rejected findings and
the exact owned repair plan, retaining a named owner and follow-up for each accepted residual.
That can be independently reviewed as an audit disposition. It is not verification that all
proposed source fixes have landed, and does not depend on building the proposed checker or a
runtime feature. Source-fix closure stays with its actual entry and evidence.

## What you did instead

Read the attached audit as evidence, inspected current sources/code and existing handoff owners,
and drafted this disposition. Added the independent second-application review inside B-084,
without changing its Applied lifecycle. No governed source, script, graph, application or
workflow changed. Existing untracked bundle_docs.py and docs_context_for_claude.txt were left
untouched. No commit or push.

At the committed review baseline, all local consistency checks passed and graph metadata
matched 8f441c7 with stale=false. These observations do not cover the two new handoff edits.
Graph extraction currency is distinct from semantic agreement and hosted parity. Lane A owns
acknowledgement and curated coverage for this new entry, and graph refresh after transport.

**Final working-tree validation:** 15/17 local consistency checks pass. Only this new entry's
missing Lane A acknowledgement and curated graph coverage fail. B-084's Applied lifecycle
remains valid and unfinished. The local handoff links resolve and the tracked diff has no
whitespace errors. frag129 matches its current graph node and four edges exactly; that is
fragment/runtime agreement, not proof that B-084's source corrections are complete. No
self-acknowledgement, graph mutation or blanket semantic-completeness claim is made.

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Supported migration/current-input drift and first-read warning need | Phase 1: reuse B-061 and existing governed decisions |
| Approve-with-conditions | Corrected documentation packet and reference-validation proposal | Phase 1: exact source scope, authority and semantic/negative examples before application |
| Defer | B-084 / FB-05 / G105 closure | Phase 1: finish its existing contract/source/view criteria and independently verify |
| Reject | External audit as an executable plan; fabricated new gates, forced config/migration changes or blanket broken-path repairs | Preserve existing lane, requirement and authorization boundaries |
