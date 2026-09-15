# B-102 — Lane A cannot declare governance ready until its authority, consumer contract and source packet agree

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** Lane A declaring the governance/documentation packet ready for Lane B or Lane C to consume; no application build, workflow implementation, publication, lane transition or release action
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-15, receipt only.** The three-reason diagnosis and the mapped
  artifact-ownership table are not disputed; they name no new file paths and change no existing
  owner. Choice A (bounded packet plus executable flags) is coherent with the existing `D-84`/`D-56`
  split and is Lane A's preferred reading, but adopting it amends `D-86`'s operative wording — that is
  a governed-rule change, not handoff hygiene, so Lane A does not self-authorize it here even though
  this entry's own "Lane A preparation sequence" step 1 phrases the choice as Lane A's to record; this
  entry's separate "Chief Editor inputs still required" section correctly routes it to the Chief
  Editor instead, and Lane A follows that section. Relayed to the Chief Editor, not decided by this
  acknowledgement: the Choice A/B/C consumer model, B-084 capacity and A4 acceptance, and B-088 P1.
  No governed source, Product, Fn_Spec, storyboard, schema, workflow or Graphify action is taken.

  **Acknowledged, continued, 2026-09-15 (at read commit `efab1a4`, then `7256d89`, per Lane B's
  report; not independently git-verified from this session).** Two later sections accepted as
  stated: the intent-promotion/Graphify-activation rule (worklog is not the governed-intent graph;
  Graphify runs only after promoted intent is committed and independently verified; codebase/KB
  Graphify and Swagger/OpenAPI generation wait for successful deployment evidence), and the
  control-drift finding. **The control-drift finding is independently confirmed by this session**,
  not merely relayed: this session read `docs/graph-fragments/missing.js` directly and it walks all
  of `docs` recursively with no `docs/handoff` exclusion, and read `scripts/checks/docs-drift.mjs`
  directly and it compares `lastAnalyzedHead` to Git `HEAD` with no distinction for a handoff-only
  change. `.graphify/manifest.json` and the sync-docs `SKILL.md` were not independently re-read this
  pass; treated as consistent with the two confirmed files. This session performs no code change
  here; `missing.js`, `docs-drift.mjs` and the sync-docs procedure are Lane A · Code's surface, and
  this acknowledgement proposes the fix rather than applying it.

  **Acknowledged, continued, 2026-09-15 (at read commit `50feb1a`, per Lane B's report; not
  independently git-verified from this session).** The Lane B clarification splitting exact Cowork
  and Claude Code actions is accepted as stated: Cowork classifies each issue and drafts the exact
  semantic packet (literal edits, anchors, exclusions, dependencies, negative examples, DoD,
  independent reviewer); Claude Code reviews only for mechanical applicability, applies the accepted
  packet verbatim, and commits with dual provenance; Cowork remains semantic author and answers any
  returned conflict. The bounded Lane B/C evidence interface requirement (producing/consuming lane,
  record identity, permitted fields, sensitivity, result and failure vocabulary, freshness, return
  owner) is accepted as the shape Cowork's B-102/B-103 packet must supply; that packet is not yet
  drafted. No governed source is edited by this acknowledgement.

  **Acknowledged, continued, 2026-09-15 (at read commit `41b4115`, per Lane B's report; not
  independently git-verified from this session).** The post-acknowledgement consistency rerun is
  accepted as stated: `handoff-response`, `lane-boundary`, `source-sweep` and `sync-docs-unique` now
  pass; `graph-coverage` and `docs-drift` fail for the exact exclusion-boundary defect this entry
  already owns, not a new one. The exact Lane A · Claude Code control packet (one shared exclusion
  matcher covering `docs/handoff/**`, `graph-coverage` enumerating only included governed-intent
  Markdown, `docs-drift` failing only on a governed or mixed change, four named negative fixtures) is
  accepted as the correct fix and is Code's surface to apply; this session proposes it, does not
  implement it. Rebuilding Graphify to satisfy these two failures is rejected, as stated: it would
  ingest the excluded transaction log and ratify the wrong checker contract instead of fixing it.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Chief Editor/Judge clarification of 2026-09-15; `AGENTS.md` D-84/D-86/D-183/D-186 and lane surfaces; `docs/README.md` request-to-execution flow; `docs/LANE-B-WORK-ORDER.md`; `.github/WORKFLOWS-SPEC.md`; live B-071/B-084/B-088/B-094–B-101 lifecycle records; `docs/Modular_PRD.md`; storyboard, embedded UML/data-flow views, traceability and `docs/ENCYCLOPEDIA-SYNC.md`; Graphify query and `.graphify/branch.json` at the named commit.
- **Verified-At-Commit:** 865d1f6f5e35443a411674a47121e61e5196b708

## What happened

**Clarified task:** explain the three highest reasons Lane A · Cowork has not edited the governance
and documentation sources into a Lane B/Lane C-ready packet. Reconcile the Chief Editor's intended
flow with the existing lane rules, define the smallest parent-first correction and readiness
evidence, and preserve existing artifact owners. Plan only; do not build or apply governed-source
changes.

The Chief Editor's intended operating loop is:

```text
Lane A · Cowork prepares governed meaning and bounded work packets
              ↓
Lane B / Lane C read the packet for their own surface and test readiness
              ↓
Lane B / Lane C raise defects through existing B-/C-series handoffs
              ↓
Lane A answers, corrects the owning sources and cross-references them
              ↓
Judge accepts the bounded readiness result; the selected lane runs
```

This is compatible with the project's continuous Scrum loop if “ready” means permission to begin a
bounded run, not that every future question is closed. It conflicts with one current instruction:
D-86 says governance reaches Lane B as a flag and Lane B is not expected to read the Register or
decide scope. The new flow must amend that interface before it can be treated as operative.

## Top three reasons Lane A is not editing toward readiness

| Rank | Actual blocker | What it is not | Smallest correction |
|---:|---|---|---|
| 1 | **No bounded governed-source execution packet.** The present Judge approval authorizes this decision-tree and handoff consolidation; D-183/D-186 still require a recorded act naming exact files/sections, owner, dependencies and DoD before source application | No Cowork limitation and no Lane A ownership problem: Lane A is Active and Cowork owns the relevant `docs/` surfaces | Lane A prepares one reviewable execution packet; Judge accepts or rejects it; then Cowork edits exactly that set |
| 2 | **The consumer contract contradicts itself.** Current D-86 is flag-only, while the clarified flow requires Lane B/C to read governance/docs and confirm readiness. “Control files under sprint/lane task folders” also names no mapped paths | Not a reason for B/C to read all governance history or create new undocumented directories | Amend the rule to a bounded packet-plus-flags model and map each output to existing lane-owned paths |
| 3 | **The selected source packet is incomplete.** B-084 A4 field/write-set acceptance and capacity, B-096 S15/S16, B-071 ontology children and B-101 lifecycle corrections remain open; Graphify is stale | Graphify staleness does not block drafting, and unconfirmed capacity does not prevent Lane A from preparing a draft | Finish the parent definitions and exact write set, apply them, obtain B/C review, then synchronize Graphify and claim readiness |

Only reasons 1 and 2 prevent Lane A from knowing what it is authorized to edit and what B/C must
consume. Reason 3 prevents a readiness declaration. Operator hours affect iteration commitment and
completion date; they do not justify leaving the reviewable A4 draft unwritten.

## Parent decision — how governance reaches Lane B and Lane C

| Choice | Judge accepts | Result | Accept/Reject recommendation |
|---|---|---|---|
| **A — bounded packet plus executable flags** | B/C read only the named governing clauses, work order and acceptance evidence for their unit; machine flags/checks enforce what can be automated | Preserves human comprehension without asking build lanes to reinterpret the full Register | **Accept** |
| B — retain flag-only D-86 | B/C react only to flags and do not confirm source readiness | Conflicts with the Chief Editor's clarified flow and cannot produce the requested cross-lane comprehension | **Reject** |
| C — require B/C to read all governance documents | Every run begins with full-corpus interpretation | Recreates scope decisions in build lanes, increases drift and makes readiness unbounded | **Reject** |

### Exact rule meaning for Choice A

> Governance reaches Lane B and Lane C through a **bounded execution packet plus executable
> controls**. Lane A names the minimum governing clauses, functional/spec sections, work order,
> dependencies, acceptance cases and stop conditions for one unit. The consuming lane reads that
> named set, confirms that it can execute within its owned surface, and raises contradictions or
> missing dependencies through `docs/handoff/`. It does not reinterpret the whole Register, decide
> Product scope or silently repair Lane A-owned sources. Flags and checks remain the machine-readable
> enforcement of the accepted packet.

This changes D-86's consumption interface without changing lane ownership. D-84 still requires Lane
A to provision every dependency before Lane C consumes it. D-56 still makes out-of-lane work
specified, never applied.

## Where each readiness artifact belongs

No generic “sprint/lane task folder” currently owns control files. Creating one would introduce a
new artifact family and require D-54 propagation. Use the existing mapped surfaces:

| Purpose | Canonical owner/path | Who writes | Consumer evidence |
|---|---|---|---|
| Product behavior and module status | `docs/Modular_PRD.md`, relevant `docs/fn-specs/` | Lane A · Cowork | B/C cite only named clauses |
| Sprint scope, order, DoD and artifact inventory | `docs/v1/V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, Register | Lane A · Cowork | One authorized unit and its dependencies |
| Lane B executable packet | `docs/LANE-B-WORK-ORDER.md` plus named Product/Fn_Spec/SPECS clauses | Lane A · Cowork | Lane B confirms database/application/test feasibility |
| Lane C executable packet | `.github/WORKFLOWS-SPEC.md` plus Lane A-provisioned commands/checks | Lane A · Cowork/Code within their split surfaces | Lane C confirms workflow feasibility |
| Application controls and tests | `app/`, `lib/`, `components/`, `supabase/`, `__tests__/` | Lane B, after authorization | Persisted behavior and tests |
| Workflow controls | `.github/workflows/` | Lane C, after authorization | Workflow run and required-check evidence |
| Governance check implementations | `scripts/`, build/repo config | Lane A · Code | Local/CI checks and negative fixtures |
| Feedback and lifecycle | Existing `docs/handoff/B-NNN-*` / `C-NNN-*` | B/C raise; Lane A answers | Each entry's own status and evidence |

## Lane A preparation sequence

1. **Acknowledge B-102 and decide Choice A/B/C.** Record the result in the Register; if Choice A is
   accepted, explicitly amend D-86 rather than leaving two live consumption models.
2. **Correct the current handoff lifecycle first.** Apply B-101's bounded B-096/B-098–B-100
   corrections. This is handoff hygiene and does not authorize Product changes.
3. **Prepare B-084 A4 even while capacity is unknown.** Produce the mandatory/optional field matrix,
   first-intake trend form, exactly-one subject topic, same-article normal/revision example and exact
   source write set. Mark estimates as ranges and dates uncommitted.
4. **Obtain the remaining Chief Editor inputs.** Capacity determines what fits; A4 acceptance
   authorizes its source packet. Separately decide B-088 P1; it is governance tooling, not part of
   the Product packet.
5. **Complete the parent logical contracts.** Draft B-096 S15 before S16; keep state scalars,
   append-only events, versioned editorial metadata and frozen explainability reports distinct.
   Continue B-071's returned ontology children without releasing the S2 hold.
6. **Build the bounded Lane B and Lane C read sets.** Name exact documents, sections, dependencies,
   acceptance cases, owned output paths and stop conditions. Do not tell either lane to read “all
   governance.”
7. **Cross-reference once.** Align Product/Fn_Spec, current-use storyboard panels and embedded
   UML/data flow, traceability and Encyclopedia Entries 03/06 through their existing owners. No
   duplicate diagram or readiness ledger.
8. **Ask B/C for readiness review.** Each lane answers only: executable as written; blocked by a
   named dependency; or contradicted by a cited source. Defects return through existing handoffs.
9. **Apply feedback in the owning tier.** A decision that creates, sequences or retires an artifact
   reaches the Register, Build Spec and Inventory in one D-54 pass; Modular_PRD §8 changes only when
   a sprint closes or a tier opens.
10. **Verify and synchronize last.** Independent review checks the committed packet and handoff
    dispositions. Lane A · Code rebuilds/re-merges Graphify only after the final tracked edit;
    Cowork verifies curated meaning and cross-references.

## Failure-derived readiness criteria

| Guaranteed failure | Readiness evidence that prevents it |
|---|---|
| Lane A edits from an approved analysis without an execution packet | Register act names the exact unit, files/sections, owner, dependencies and DoD |
| B/C are told both “read no governance” and “confirm governance files” | One accepted Choice A consumption rule replaces the contradictory D-86 wording everywhere it is executed |
| B/C read the full corpus and make scope decisions | Each work order contains a minimum read set and tells the lane to raise, not arbitrate, contradictions |
| “Control files” land in invented sprint/lane folders | Every output maps to the existing lane-owned paths above; any new artifact family is separately decided and propagated |
| Lane A declares readiness while A4/S15/S16/ontology semantics are open | Packet names each open dependency and either resolves it or excludes the dependent work |
| B/C confirm files exist but cannot execute the acceptance journey | Readiness review walks one article's manual intake, normal/revision path and LinkedIn `ManualReady` outcome against exact clauses and owned outputs |
| A state change rewrites metadata or a report becomes working storage | Data contract and later tests keep state, events, metadata versions and explainability snapshots separate |
| Storyboard/UML/data flow diverge | One storyboard owns the views; every arrow names actor, event, state effect and authority |
| Encyclopedia or traceability repeats stale semantics | Entries 03/06 and requirement links cite the accepted source packet and show their current/stale state |
| Graphify is called ready because `stale: false` | `lastAnalyzedHead` equals final Git HEAD, document coverage is complete, curated fragments verify and the full suite reruns |

## Chief Editor inputs still required

1. **Consumer model:** Accept Choice A, or explicitly choose B/C with the stated cost.
2. **B-084 capacity:** operator drafting hours/dates, Chief Editor review hours/window, independent
   reviewer/hours and contingency limit. Absence blocks scheduling and `Verified`, not drafting.
3. **B-084 A4 acceptance:** accept/reject the completed exact field matrix and write set after Lane A
   prepares them.
4. **B-088 P1:** Approve/Defer/Reject the separate 1–3 hour token-termination repair plus 1–2 hour
   independent review. Approval does not include P2 or Product/application work.

## Cross-artifact impact

| Artifact | Impact of this decision tree |
|---|---|
| `Modular_PRD.md` | No edit from this handoff alone; later A4/S15/S16 changes land only under their accepted write set |
| Storyboard/story panels/UML/data flow | One existing storyboard remains the owner; current-use changes follow B-071/B-084/B-096 |
| Encyclopedia/cross-reference | Existing B-095 owners remain; no second readiness ledger |
| Register/Build Spec/Inventory | Choice A and any created/sequenced artifact must propagate here under D-54 |
| Lane B/C work orders | Carry the bounded read set and executable acceptance contract; do not duplicate business authority |

## What you did instead

Compared the clarified flow with the live lane, execution and handoff rules; reviewed the existing
open dependencies and cross-artifact owners; queried the stale graph with that qualification; and
raised this one planning defect. Did not edit governed sources, application code, schema, workflows,
Graphify or lane state, and did not build or publish.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Lane A → B/C readiness review → handoff feedback → Lane A correction loop | Phase 1 — continuous bounded execution model |
| Approve-with-conditions | Choice A bounded packet plus executable flags | Phase 1 — record the D-86 amendment and minimum read-set contract |
| Reject | Lane A ownership or Cowork capability as the blocker | Lane A is Active and owns the affected governance surfaces |
| Reject | Flag-only consumption under the clarified flow | It cannot produce the requested B/C comprehension review |
| Reject | Full-corpus governance interpretation by B/C | Scope decisions remain Lane A/Judge responsibilities |
| Approve-with-conditions | B-084 A4 preparation | Lane A drafts now; Chief Editor later supplies capacity and accepts the exact write set |
| Approve-with-conditions | B-088 P1 | Separate explicit Chief Editor authorization and evidence |

## Judge clarification — intent promotion and Graphify activation, 2026-09-15

The Chief Editor has now explained why Lane A · Cowork used `Claude outputs/`: it is scratch work
created while the accepted intent was not being promoted into Lane A's governed documentation
surface. The folder is therefore evidence of the existing **decision-to-application gap**, not a new
governance tier and not an acceptable destination for completed intent.

### Parent-first lifecycle

| Order | Layer | Owner and permitted content | Completion evidence | Graphify consequence |
|---:|---|---|---|---|
| 1 | Intent worklog | Existing `docs/handoff/` entry plus temporary drafting material | Lane B/C concern, Lane A response, Judge choices and unresolved conditions are visible in the owning entry | **No Graphify operation.** Handoff is the transaction worklog and is excluded from the intended governed-intent graph |
| 2 | Verified intent promotion | Lane A applies the accepted intent to its canonical governance/docs owners, including the applicable change record, takeover/handoff instructions and quality-assurance contract | Exact Judge act, bounded write set and DoD; committed application; independent review at the commit read | **Run the governance/docs Graphify update only here**, after the intent is complete and verified |
| 3 | Lane B/C execution | B/C consume the bounded packet, write only their owned application/workflow controls and return gaps through handoff | Tests and evidence named by the packet; no out-of-lane repair | Handoff feedback alone does not trigger a governance graph rebuild |
| 4 | Successful deployment evidence | Code and workflows have completed their authorized delivery path successfully | Deployment identifier/result and the accepted runtime verification evidence | Update the codebase/knowledge-base graph after successful deployment; generate or refresh Swagger/OpenAPI material from that deployed codebase afterward |

This supersedes the prior recommendation to synchronize Graphify merely because B-series handoff
files or ignored scratch drafts changed. No governed intent source changed in the present Lane B
handoff sequence, so **no Graphify update is required now**. The old `.graphify` head mismatch may
remain observable, but it is not a readiness failure for the worklog layer under this clarified
activation rule.

### Exact Lane A source-packet addition

Lane A should include the following rule in the B-102/B-103 proposal, then obtain the existing
D-183/D-186 source-application act before editing its governed owners:

> `docs/handoff/` records refinement and disposition work but is not the governed-intent graph
> source. Graphify for governance/docs runs only after an accepted intent is applied to its canonical
> sources, committed and independently verified. Graphify for the application/code knowledge base
> runs after successful deployment evidence exists. Swagger/OpenAPI documentation is generated or
> refreshed from the successfully deployed codebase, never used as an advance design substitute.

The application packet must identify the existing owners that execute this rule. At minimum, Lane A
must assess the Register, Build Spec, Artifact Inventory, `docs/README.md` request-to-execution map,
Phase Closure evidence rules, Encyclopedia sync policy and the shared Graphify instructions. If it
creates or sequences Swagger/OpenAPI artifacts, D-54 requires the fact in all three V1 tracking files
in the same pass. `Modular_PRD` changes only if Product behavior or a sprint/module lifecycle changes.

### Failure-derived success criteria

| Guaranteed failure | Evidence of success |
|---|---|
| Cowork leaves accepted intent in `Claude outputs/` | The canonical governance/docs owners contain the accepted clauses and link to the originating handoff |
| Every handoff commit triggers a graph rebuild | The worklog remains usable without graph churn; the promotion boundary records the one required governance graph update |
| Graphify runs before independent intent verification | The graph update cites the verified governed-source commit, not an evolving draft |
| Swagger/OpenAPI text is written before deployed behavior exists | Generation input identifies the successful deployed revision and its observable API surface |
| Deployment success is inferred from a commit or generated document | A separate deployment result and runtime verification evidence exist |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `docs/handoff/` as the non-Graphified intent worklog | Phase 1 — continue using existing entries |
| Approve | Governance/docs Graphify only after verified intent promotion | Phase 1 — final step of the bounded source packet |
| Approve-with-conditions | Codebase/KB Graphify and Swagger/OpenAPI generation | Post-deployment — successful deployment and runtime evidence required |
| Reject | `Claude outputs/` as a completed governance destination | Phase 1 — promote accepted content into canonical owners |
| Reject | Current handoff-only commits as a Graphify trigger | No governed intent changed |
| Defer | Applying this rule to governed sources | Phase 1 — exact write set, D-54 impact, Judge act and independent review |

## Control-drift confirmation — current Graphify checks still include handoff, 2026-09-15

Direct source inspection confirms that the Chief Editor's intended early exclusion is **not the
current executable rule**:

- `docs/graph-fragments/missing.js` recursively collects every Markdown file below `docs/` with no
  `docs/handoff/` exclusion.
- `.graphify/manifest.json` contains the handoff README/template and B-series entries through its
  last build.
- `.claude/skills/sync-docs/SKILL.md` explicitly requires one hand-authored graph concept per
  `docs/handoff/B-NNN-*.md`.
- `scripts/checks/docs-drift.mjs` compares Graphify's analyzed commit with every Git `HEAD`, so a
  handoff-only commit makes the graph appear stale even when no governed intent changed.

This is a real policy/control drift. It does **not** justify rebuilding Graphify now; that would
preserve the wrong inclusion rule. Add the following exact control work to Lane A's B-102 packet:

1. Lane A · Cowork records the worklog-versus-governed-intent boundary in the Register and the
   governing documentation, with D-54 propagation where artifact sequence changes.
2. Lane A · Code changes `missing.js`, `docs-drift.mjs` and the sync-docs procedure so handoff-only
   changes neither require graph coverage nor mark the governed-intent graph stale.
3. Negative fixtures prove that a handoff-only change is ignored, while a governed documentation
   change still fails until the verified-intent Graphify step completes.
4. The first graph rebuild under the corrected rule occurs only after an accepted intent has been
   promoted, committed and independently verified.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Chief Editor's worklog exclusion as target policy | Phase 1 — B-102 exact source/control packet |
| Reject | Claim that the current executable checks already exclude handoff | Source and manifest evidence contradict it |
| Reject | Rebuilding Graphify before correcting the inclusion rule | It would reproduce the wrong coverage boundary |
| Defer | Control implementation and graph rebuild | Exact Judge act, Lane A application and independent review |

## Judge clarification — Cowork authors meaning; Claude Code applies and commits, 2026-09-15

The Chief Editor confirms the practical constraint: Lane A · Cowork cannot perform the required Git
commit. Lane B/C must first create and commit their own handoff evidence; Cowork then reads that
durable entry and prepares the governance/documentation response; Lane A · Claude Code applies and
commits the exact accepted response because it has repository commit access.

This is one Lane A workflow with two tool responsibilities:

| Order | Actor | Bounded act | Completion evidence |
|---:|---|---|---|
| 1 | Lane B or Lane C | Analyze the current bounded governance packet, create the B-/C-series entry and commit that one handoff file | Exact handoff path and commit; Evidence names the sources and current Register anchor checked |
| 2 | Lane A · Cowork | Read the committed handoff and authoritative sources; decide semantic treatment; prepare an immutable exact patch plus owner/dependency/DoD/verification map | Patch identifies every path/section, literal replacement, exclusions and unresolved decision; no scratch file is called applied |
| 3 | Chief Editor/Judge | Accept, reject or return the exact packet | Durable Register act names the packet revision and permitted application |
| 4 | Lane A · Claude Code | Apply the accepted Cowork patch verbatim and commit the named governance/docs files | Changed-path set equals the authorization; commit message/provenance identifies Cowork as semantic author and Code as applicator |
| 5 | Lane B/C | Independently compare the committed result with the accepted packet and construction/verification needs | Original entry records the read commit and each child disposition |
| 6 | Lane A | Correct canonical owners for accepted returned gaps; repeat only the affected child | No duplicate handoff or parallel status ledger |
| 7 | Lane A · Claude Code | Run governance/docs Graphify after the promoted intent is complete and independently verified | Graph covers governed intent only; handoff worklog remains excluded |

### Current rule conflict

D-200/D-201 currently assign governed `docs/` content to Cowork and implementation/config paths to
Claude Code; D-56 says out-of-surface work is specified, never applied. Under that text, Claude Code
cannot apply Cowork's governed-document patch even when Cowork cannot commit it. Treating tool access
as implicit permission would create an undeclared crossing.

Lane A's exact source packet must add a narrow **semantic-author / commit-applicator exception**:

> Lane A · Cowork owns the meaning and produces the exact accepted governance/documentation patch.
> Lane A · Claude Code may apply and commit that immutable packet as a transport act when Cowork lacks
> Git commit access. Code may resolve no semantic conflict, add no path and alter no accepted wording.
> If the packet does not apply exactly, Code stops and returns the conflict to Cowork and the Judge.
> The commit records both semantic author and applicator provenance. This does not make Claude Code
> the owner of Cowork's documentation surface and creates no A-series handoff.

The application packet must reconcile this exception across the Register, Build Spec, Phase Closure
run/provenance contract, all three agent-rule files and `docs/README.md`. The Artifact Inventory is
unaffected unless a new control file is created; if an executable tool-crossing check is added or
sequenced, it receives its existing C-35 disposition rather than a duplicate identifier.

### Cross-artifact effect

`Modular_PRD`, functional specs, storyboard/story panels, UML/data flow, Product traceability and the
Encyclopedia are unaffected by the transport rule: it changes who applies an already accepted patch,
not Product behavior. They remain review targets whenever the Cowork packet itself changes their
owned meaning.

### Guaranteed failures and success criteria

| Guaranteed failure | Evidence of success |
|---|---|
| Cowork draft remains in scratch because it cannot commit | Code applies the exact accepted packet and the canonical sources contain it at a named commit |
| Code becomes an unreviewed co-author while acting as committer | Byte/content comparison matches the accepted packet; any conflict returns without improvisation |
| B/C analyze an uncommitted Cowork draft | The originating handoff cites the committed governance baseline it reviewed |
| Handoff acknowledgement is mistaken for source application | Canonical source diff and its independent read commit exist separately from the receipt |
| Tool transport silently changes lane ownership | Register and rule files retain Lane A as owner and identify Code only as applicator |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B/C commit their own handoff before Lane A response analysis | Phase 1 — existing D-184 one-file procedure |
| Approve | Cowork semantic author / Code commit-applicator model | Phase 1 — narrow D-200/D-201/D-56 exception |
| Approve-with-conditions | Code applies Cowork-owned governance/docs files | Phase 1 — immutable accepted packet, exact paths, no semantic improvisation, provenance and independent review |
| Reject | File access or Git capability as implicit source authority | Explicit Judge act and bounded packet remain required |
| Reject | New A-series handoff or ownership transfer to Code | Existing Register return path and Lane A ownership remain |
| Defer | Governed-source and control application | Exact propagated packet and later Judge application act |
| Defer | Lane B/C control-file implementation | Accepted ready packet, correct existing paths and active-lane selection |
| Defer | Graphify synchronization | Final committed governance/handoff corrections and verification first |

## Lane B clarification — exact Cowork and Claude Code actions, 2026-09-15

The Judge has accepted the Cowork-author/Claude Code-applicator direction and asks which tool acts
at each point. Lane A remains one lane and one owner. The split below is by act, not by authority.

| Order | Lane A · Cowork action | Lane A · Claude Code action | Accept evidence |
|---:|---|---|---|
| 1 | Read the committed B-/C-series handoff and its cited baseline. Classify each issue as governance meaning, Product behavior, implementation dependency or verification evidence | No source edit; confirm that the cited paths and proposed control locations exist | One bounded issue map with existing owners; no duplicate decision or artifact |
| 2 | Draft the **exact semantic packet**: literal additions/replacements, file and section anchors, exclusions, dependencies, negative examples, DoD and independent reviewer | Review the packet only for mechanical applicability. Report a path, context or tooling conflict; do not repair its meaning | Immutable packet can be applied without interpretation |
| 3 | Present only unresolved business choices to the Judge and incorporate the recorded Accept/Reject result into the packet | No application before the bounded Judge act exists | Register act identifies the exact packet revision and permitted paths |
| 4 | Remain the semantic author and answer any returned conflict | Apply the accepted packet verbatim, run the named documentation/control checks and commit only the authorized paths. Record Cowork as author of meaning and Code as applicator | Committed diff matches the accepted packet; no extra path or wording |
| 5 | Reconcile any business-meaning defect returned by Lane B/C | Supply commit/check evidence and stop; do not self-verify | Lane B/C independently records the commit read and child dispositions in the original handoff |
| 6 | Declare the promoted intent complete only after independent verification | Run governance/docs Graphify after that declaration; preserve handoff exclusion and curated fragments | Analyzed head equals the verified governed-source commit and the intended concepts are queryable |

### Bounded Lane B/C evidence interface Cowork must specify

Cowork owns the interface meaning. Its packet must name: the producing lane and consuming lane;
record identity and revision; permitted fields; sensitivity/classification; event and state anchor;
result vocabulary; failure/absence vocabulary; immutable evidence reference; freshness/version;
negative cases; and the handoff owner when the consumer cannot proceed. Lane B exposes editorial
application results. Lane C consumes only the allowlisted delivery/monitoring fields and returns
missing observability, workflow or recovery needs through its C-series handoff. Neither lane invents
the other's fields or reads unrestricted application data.

The parent succeeds when Lane B and Lane C can each answer, from one committed packet: **what may I
read, what must I produce, what proves failure, and where do I return a missing dependency?** It
fails if either lane must infer those answers from the entire documentation corpus, from an
uncommitted Cowork draft or from an unexplained checker flag.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Cowork performs semantic classification, exact drafting and Judge incorporation | Phase 1 — B-102/B-103 packet preparation |
| Approve-with-conditions | Claude Code applies and commits Cowork-owned sources | Phase 1 — exact accepted packet, mechanical application only, provenance and checks |
| Approve-with-conditions | Bounded Lane B/C evidence interface | Phase 1 — exact allowlist, classification, failure vocabulary and return owner |
| Reject | Code resolving meaning, Cowork calling scratch applied, or B/C inferring unrestricted access | Return the defect through the existing owner |
| Defer | Control implementation and Graphify | After canonical packet application and independent verification |

## Lane B post-acknowledgement check — exclusion defect proven, 2026-09-15

After the five Lane A receipt edits were committed, Lane B reran the full consistency suite in an
environment where Git and Node subprocesses could start. `handoff-response`, `lane-boundary`,
`source-sweep` and `sync-docs-unique` pass. Two of seventeen checks fail for the exact boundary this
entry already identified:

- `graph-coverage` requires twelve files under `docs/handoff/`, although the Judge has excluded the
  handoff worklog from governed-intent Graphify.
- `docs-drift` compares Graphify's analyzed commit `f63d6eb` directly with repository HEAD
  `7cd1ff7`; it therefore calls handoff-only commits stale even when no governed source changed.

Do not rebuild Graphify to satisfy these failures. That would ingest or continually chase the
excluded transaction log and would preserve the wrong checker contract.

### Exact Lane A · Claude Code control packet — specified, not applied

1. Put the existing governed-intent exclusions in one executable matcher used by both checks;
   include `docs/handoff/**` and the already declared Graphify scratch exclusions.
2. Make `graph-coverage` enumerate only included governed-intent Markdown. Its report must state
   the excluded class, without copying a changing file count into governance prose.
3. Make `docs-drift` inspect paths changed between `lastAnalyzedHead` and `HEAD`. Pass when every
   changed path is excluded; fail when at least one governed-intent input changed without a later
   analysis. A mixed governed/handoff commit must fail.
4. Add negative fixtures: handoff-only advance passes; governed-doc advance fails; mixed advance
   fails; governed-doc advance followed by matching analysis passes.
5. Run the full suite in the subprocess-capable environment. Preserve the graph at `f63d6eb` until
   a real governed-source promotion occurs; then rebuild/remerge curated fragments and prove the
   analyzed head or governed-input equivalence required by the corrected check.

| Guaranteed failure | Evidence of success |
|---|---|
| Rebuild after every receipt makes the transaction log part of product knowledge | Handoff-only commits pass both checks without a graph rebuild and remain absent from coverage requirements |
| Global HEAD equality hides the governed input boundary | A fixture distinguishes excluded-only, governed-only and mixed changes |
| Two checks acquire different exclusion lists | One tested matcher supplies both enumerations |
| Restricted `EPERM` remains the stated blocker | Subprocess-capable rerun reaches every check and reports only the semantic exclusion defects |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-102 as the existing owner of both checker defects | Phase 1 — no duplicate handoff |
| Approve-with-conditions | Exact exclusion/control packet above | Phase 1 Lane A · Code — Judge-authorized implementation plus fixtures |
| Reject | Graphify rebuild as the repair for handoff-only drift | It preserves the wrong inclusion rule |
| Defer | Checker implementation and next governed graph sync | Exact act; code application; governed-source promotion respectively |

## Lane A exact source packet — commit-transport exception and B/C evidence contract, ready for Judge accept, 2026-09-15

**Drafted 2026-09-15 by Lane A · Cowork.** This is the immutable packet the transport exception and
the bounded Lane B/C evidence interface require, named file by file and section by section per
`D-183`/`D-186`. **Specified here, applied nowhere by this entry.** No file listed below is edited by
this acknowledgement; each is Lane A · Claude Code's to apply only after an explicit Judge accept
names this packet's revision. New Register decision numbers are left for the Judge/Register to
assign at acceptance; this session does not invent one.

### Part 1 — Cowork semantic-author / Claude Code commit-applicator transport exception

**Anchor (identical in all three rule files, confirmed by direct read):** the sentence "…except
`D-184`'s one-entry handoff commit." immediately followed by each file's own tool-specific-section
label (`Codex specifics:` in `AGENTS.md`; `Claude Code specifics:` in `CLAUDE.md`; `Gemini /
Antigravity specifics:` in `.agents/rules/graphify.md`).

**Insert this paragraph immediately after that sentence, identically, in `AGENTS.md`, `CLAUDE.md`
and `.agents/rules/graphify.md`:**

> **Cowork-authored governance/docs packets: Claude Code as commit-applicator, not owner** (new
> D-number, Judge assigns). Lane A · Cowork owns governance/documentation meaning under the Lane A
> tool split above but has no Git commit access in the current execution path. Lane A · Claude Code
> may apply and commit Cowork's immutable, Judge-accepted governance/documentation packet as a
> transport act: it resolves no semantic conflict, adds no path beyond the accepted packet, and
> rewrites no accepted wording. If the packet does not apply exactly as specified, Code stops and
> returns the conflict to Cowork and the Judge rather than repairing it. The commit records both
> Cowork as semantic author and Claude Code as applicator. This creates no new `A-`series handoff,
> transfers no ownership of Cowork's documentation surface to Code, and does not enlarge `D-184`'s
> narrower one-entry handoff-commit exception, which remains separate and unchanged.

**`docs/README.md`, "How a request becomes execution" table, `Execution` row** (confirmed current
text by direct read): append to the existing cell, after "…under the canonical SOP in
`handoff/README.md`":

> **Second exception:** Lane A · Claude Code may apply and commit an immutable, Judge-accepted Lane
> A · Cowork governance/documentation packet as a transport act only — no semantic authority, no
> added path, dual author/applicator provenance recorded in the commit (new D-number, Judge
> assigns).

**`docs/v1/V1-BUILD-SPEC.md` §2, the "Lane A is two tools with split surfaces" paragraph** (confirmed
current text by direct read, line 59): append one sentence at its end:

> **Cowork-authored governance/docs packets may be committed by Claude Code as transport only** (new
> D-number, Judge assigns): Code applies the Judge-accepted immutable packet verbatim, resolves no
> meaning, and the commit records both semantic author (Cowork) and applicator (Code).

**`docs/v1/V1-PHASE-CLOSURE.md` §5.0a, after the existing "How the `Report` cell is filled differs by
lane" callout** (confirmed current text by direct read): append a new callout:

> **When Claude Code applies a Cowork-authored governance/docs packet** (new D-number, Judge
> assigns), the commit records both Cowork as semantic author and Claude Code as applicator. Lane
> A's `Report` cell still cites the Register section of the boundary decision, per the rule above —
> the transport commit is evidence, not a second canonical record.

**`docs/v1/V1-DECISION-REGISTER.md` — proposed Register act, specified only, this session has not
read this file and does not edit it:**

> **Lane A · Cowork semantic-author / Claude Code commit-applicator transport exception — [date at
> acceptance], Judge ruling (new D-number).** Lane A · Cowork owns governance/documentation meaning
> under the existing Lane A tool split (`D-200`/`D-201`/`D-202`). Where Cowork lacks Git commit
> access, Lane A · Claude Code may apply and commit Cowork's immutable, Judge-accepted
> governance/documentation packet as a transport act: no semantic conflict resolution, no added
> path, no rewritten wording. An inexact-application conflict returns to Cowork and the Judge
> without repair. The commit records both semantic author and applicator. This creates no
> `A-`series handoff, transfers no documentation ownership to Code, and narrows nothing in
> `D-184`'s existing one-entry handoff-commit exception, which remains separate and unchanged.

### Part 2 — Bounded Lane B/C evidence interface

**Content already drafted and accepted-on-substance:** B-103's own "P2 — accept the two-way B/C
evidence contract" section (Lane B→Lane C allowlist; Lane C→Lane B deficiency schema) is not
redrafted here. This entry's Lane A field already found it coherent with the existing lane split.
What was missing is the exact destination and the Judge accept; both are supplied now.

**`docs/LANE-B-WORK-ORDER.md`** (headers confirmed by direct read: §1–§5, §5 is currently the last
section): append a new terminal section, verbatim from B-103:

> **## 6. Evidence contract with Lane C**
>
> [B-103's "Lane B → Lane C: minimum allowlisted evidence" list and exclusions, quoted verbatim from
> that entry's P2 section]

**`.github/WORKFLOWS-SPEC.md`** (headers confirmed by direct read: §1–§6, §6 "How to raise anything"
is currently the last section): append a new terminal section, verbatim from B-103:

> **## 7. Evidence contract with Lane B**
>
> [B-103's "Lane C → Lane B: bounded deficiency feedback" five-item list, quoted verbatim from that
> entry's P2 section]

**`docs/v1/V1-DECISION-REGISTER.md` — proposed Register act, specified only:**

> **B-103 P2 two-way Lane B/C evidence contract — [date at acceptance], Judge ruling (new
> D-number).** The Lane B→Lane C allowlist and Lane C→Lane B deficiency schema in `B-103`'s P2
> section are ratified as the bounded evidence interface. Lane B exposes only the allowlisted class;
> Lane C consumes only that class and returns a named deficiency, never an invented endpoint, event
> schema or Product requirement. Neither lane infers the other's fields from unrestricted
> application data.

### What is not in this packet

P0/P1 (the three-way workflow division) and P3 (closure-loop mechanics) from B-103 are not included:
this packet covers only P2, the evidence contract, because that is what the transport exception and
this entry's own citation named. P0/P1/P3 remain under B-103's own "Chief Editor decisions needed"
section, undecided by this packet.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Part 1 — commit-transport exception, all five locations | Phase 1 — Judge accept, then Code applies verbatim |
| Approve | Part 2 — B/C evidence contract, both locations | Phase 1 — Judge accept (also closes B-103's P2 item), then Code applies verbatim |
| Reject | Any application of this packet before an explicit Judge accept naming this revision | `D-183`/`D-186` require the recorded act first |
| Defer | B-103 P0/P1/P3 | Separate Chief Editor decisions, not included here |

## Lane B application-readiness review — what still blocks Lane A · Claude Code, 2026-09-15

The source anchors for the three rule files, `docs/README.md`, Build Spec, Phase Closure, Lane B
work order and Lane C work order exist. Lane A is already `Active`; repository access, Graphify and
Product artifacts are not blockers to applying this governance-only packet. The packet is still not
mechanically applicable for the following reasons.

| Order | Blocking condition | Reference | Required correction / success evidence |
|---:|---|---|---|
| 1 | No bounded application act names this packet's committed revision | `D-183`, `D-186`; `docs/README.md` Decision and authorization row | Judge act names B-102, exact revision, Parts 1–2, paths, exclusions and checkpoint |
| 2 | The packet itself is not yet committed and immutable | B-102 heading says immutable; current text arrived as a working-tree edit | Commit this one handoff entry first; the Judge and Code cite that commit |
| 3 | Part 2 contains bracketed placeholders rather than the promised verbatim clauses | B-102 Part 2; B-103 P2 lines 73–103 | Use the complete destination text below; no bracket token or paraphrase remains |
| 4 | Proposed Register acts were drafted without reading the Register and have no accepted IDs | B-102 Part 1/2 Register blocks; Register `D-200`–`D-203`, `D-209`, `D-214` conventions | Cowork reads the current Register, adjusts only phrasing/anchors, and the Judge/Register assigns IDs at acceptance |
| 5 | P2 depends on the P1 ownership split, while the packet says P1 remains undecided | B-103 states P1–P3 are children of P0; B-094 records P0-A/P1/P2 as standing planning directions | Carry P0/P1's already selected facts as dependencies in the same Register/build-readiness treatment; do not ask the business choice again |
| 6 | D-54 applicability is incomplete | `AGENTS.md` D-54 | Build Spec records sequence/DoD for both parts; Inventory explicitly records no file creation/retirement; Phase Closure records no lane-state change; Product §8 is unaffected because no sprint closes or tier opens |
| 7 | File and insertion-point counts are wrong | Part 1 verdict says five locations; narrative says nine file locations | Record **eight distinct files and ten insertion points**: seven Part-1 insertions, three Part-2 insertions, with two Register acts in the same file |

### Corrected Part 2 destination text — no placeholders

This subsection supersedes the earlier bracketed Part 2 template and its location counts. Lane A ·
Code must ignore that earlier template and apply only an accepted revision containing the complete
text below.

Append to `docs/LANE-B-WORK-ORDER.md` as `## 6. Evidence contract with Lane C`:

> Lane B exposes only what an authorized Lane C workflow needs to verify the build:
>
> - named commands and their exit status;
> - machine-readable test, type, lint, migration and security-check results;
> - build artifact identity, schema/migration version and deployment-health result;
> - sanitized operational events required by an accepted monitoring contract, with stable event
>   type, time, environment, correlation identifier and outcome code.
>
> This interface excludes source credentials, environment-file contents, service-role keys,
> publication credentials, tokens, raw client/article content and unrestricted database or
> application logs. Production content is not required to prove that a workflow runs. Secrets stay
> in the platform secret store and are never printed. When a required signal is missing, Lane C
> raises a C-series deficiency under its work order; Lane B does not broaden the allowlist by
> inference.

Append to `.github/WORKFLOWS-SPEC.md` as `## 7. Evidence contract with Lane B`:

> Lane C consumes only the Lane B evidence allowlist recorded in `docs/LANE-B-WORK-ORDER.md` §6.
> When Lane C cannot verify or monitor an accepted outcome because the application emits no stable
> signal, it raises one C-series entry naming:
>
> 1. the acceptance case or control that cannot be observed;
> 2. the exact missing signal, such as a health/readiness result, structured event, metric, trace or
>    stable failure code;
> 3. why existing output is insufficient;
> 4. the minimum shape and sensitivity class needed;
> 5. a positive and negative proof that would make the workflow capable of failing correctly.
>
> Lane C does not invent an application endpoint, event schema or Product requirement in workflow
> YAML. Lane A decides and documents the requirement; Lane B later implements the signal under an
> authorized work order; Lane C consumes it under its own authorized workflow unit.

### Corrected propagation boundary

- **Part 1:** seven insertion points in seven files — the three rule files, `docs/README.md`, Build
  Spec, Phase Closure and the Register.
- **Part 2:** three insertion points in three files — Lane B work order, Lane C work order and a
  second act in the same Register already counted in Part 1.
- **Combined:** eight distinct files, ten insertion points. No file is created or retired.
- **Product views:** `Modular_PRD`, functional specs, storyboard/story panels, UML/data flow,
  traceability and Encyclopedia are unaffected because this packet governs development-lane
  transport and evidence, not editorial behavior.
- **Controls:** B-102's `graph-coverage`/`docs-drift` repair is a separate Code implementation unit;
  this source packet does not authorize it.

### Lane A · Code execution checklist after the blockers clear

1. Confirm the accepted B-102 commit and Register decision identifiers.
2. Confirm all ten insertion anchors still match; stop on any mismatch.
3. Apply the accepted text exactly to the eight files, including byte-identical shared-core text in
   all three rule files.
4. Inspect the staged path set and literal clauses against the accepted packet.
5. Run shared-core, tier, lane, channel and full consistency checks. Do not rebuild Graphify for
   this worklog; canonical governed-source application makes the later graph step due only after
   independent verification.
6. Commit with Cowork semantic-author and Claude Code applicator provenance.
7. Lane B/C independently review their destination section and the shared decision evidence.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | Part 1 transport exception | Phase 1 — committed packet, Register read/act, correct seven-file propagation |
| Approve-with-conditions | Part 2 P1/P2 evidence contract | Phase 1 — full clauses above, dependency recorded, three insertion points |
| Reject | Current packet as immediately Code-applicable | Placeholder, authority, dependency and propagation defects remain |
| Reject | Reopening P0/P1 business choices | Standing planning decisions already exist; application authority is the missing act |
| Defer | Checker implementation and Graphify | Separate authorization; governed intent applied and independently verified respectively |

## Judge clarification — placeholders are anti-duplication references, 2026-09-15

The earlier application-readiness review incorrectly treated every placeholder as missing content.
The Judge has clarified that Lane A used placeholders to avoid copying the same normative clause
into several planning records. That intent is valid. The remaining defect is narrower: a
placeholder must resolve to one canonical file, one exact heading and one committed revision before
Claude Code can apply it without interpretation.

The **Corrected Part 2 destination text** above remains useful as review evidence, but it is not a
second semantic owner. Until promotion, B-103 `### P2 — accept the two-way B/C evidence contract`
and its two child headings are the canonical source. After an authorized application, each
destination work order owns its executable half; B-103 remains the transaction and decision
evidence. No third copy is created here.

### Canonical record map — one fact, one owner

| Record | Canonical location | What Lane A records there | What must not be copied there |
|---|---|---|---|
| Evidence | Original `docs/handoff/B-NNN-*.md` or `C-NNN-*.md`: `Evidence`, `Verified-By`, `Verified-At-Commit`, and the dated response body | Observed fact, source commit, applied commit, independent read and child disposition | A second closure ledger or a copied backlog tally |
| Decision / authorization | `docs/v1/V1-DECISION-REGISTER.md` | Judge act, conditions, authority and named source revision | Full handoff narrative or duplicated implementation instructions |
| Product changelog | `docs/Modular_PRD.md` §0.1, only when Product requirements change | Product revision and owning decision | Governance-only transport changes; those remain in the Register and Git history |
| Historical rationale | `docs/journal/` | Dated context after the canonical decision exists | Live status, authorization or the only copy of a requirement |
| Takeover / lane selection | `docs/v1/V1-PHASE-CLOSURE.md` §5 and §5.0a `Report` column | Active/Eligible/Blocked state and the Lane A boundary-report reference | A duplicate lane-state table in a handoff or rule file |
| Handoff transaction | Original entry under `docs/handoff/`, governed by `docs/handoff/README.md` | Raiser, answer, dependencies, lifecycle and terminal disposition | A new review-of-review entry for the same owner and scope |
| QA and verification | Acceptance in Product/Fn Specs; technical proof in `docs/specs/SPECS-VERIFICATION-APPARATUS.md`; Phase 1 critic evidence in `V1-PHASE-CLOSURE.md` §6; result linked from the original handoff | Expected behavior, deliberate failure proof, observed result and independent reviewer | A claim that `Acknowledged` or `Applied` equals `Verified` |
| Scope / sequence / file tracking | `V1-DECISION-REGISTER.md`, `V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, plus `Modular_PRD.md` §8 when its trigger applies | Decision, order/DoD, artifact lifecycle, sprint/tier effect | Restated counts or a parallel status register |

### Resolvable-reference format for Lane A placeholders

Every anti-duplication placeholder must carry these five fields:

1. **Source file:** repository-relative canonical path.
2. **Source heading:** exact Markdown heading, not a line number that moves.
3. **Source revision:** full committed SHA accepted by the Judge.
4. **Destination file and heading:** exact insertion point and destination owner.
5. **Application rule:** `copy verbatim`, `link only`, or `derive named fields`; no implied
   paraphrase.

For this packet the two references are:

| Destination | Normative source before promotion | Application rule |
|---|---|---|
| `docs/LANE-B-WORK-ORDER.md` new `## 6. Evidence contract with Lane C` | B-103 `### P2` → `#### Lane B → Lane C: minimum allowlisted evidence`, at the Judge-accepted commit | Copy the complete child section verbatim, then treat the work-order section as the executable owner |
| `.github/WORKFLOWS-SPEC.md` new `## 7. Evidence contract with Lane B` | B-103 `### P2` → `#### Lane C → Lane B: bounded deficiency feedback`, at the same commit | Copy the complete child section verbatim, then treat the workflow-spec section as the executable owner |

### Lane A follow-up — parent first

1. Commit the B-103 source and record its full SHA; do not authorize a moving working-tree block.
2. Cowork validates the two P2 child headings and replaces each bracket placeholder in the
   application packet with the five-field reference above. B-102 does not repeat the clauses.
3. The Judge/Register act names B-102, B-103, their commits, Parts 1–2, the ten insertion points,
   exclusions and Definition of Done.
4. In the same governed pass, update Build Spec sequence/DoD. Record Inventory as unaffected
   because no file is created or retired. Record Phase Closure as no lane-state change. Do not
   touch Modular PRD §0.1 or §8 because no Product revision, sprint closure or tier opening occurs.
5. Claude Code verifies the source SHA and headings, applies Part 1 literally and promotes each P2
   child to its named destination. A source or anchor mismatch stops the unit.
6. Record the application commit and check results in B-102/B-103. Lane B reviews its work-order
   half; Lane C reviews its workflow-spec half; each records the exact independent read commit.
7. Promote each original handoff child to `Verified`, `Deferred`, `Withdrawn` or `Superseded` only
   when its own completion rule is met. The lane takeover record remains in Phase Closure §5.
8. Graphify remains unchanged for this handoff worklog. Rebuild/re-merge only after verified
   governed-source promotion, then prove `lastAnalyzedHead` equals the final Git HEAD.

### Cross-artifact review

`Modular_PRD`, storyboard, story panels, UML, data flow, requirements traceability, Encyclopedia
and their cross-references are unaffected by this transport-and-evidence clarification. Their
editorial actors, gates, data meanings and acceptance behavior do not change. If a later packet
changes Product behavior, it must start from the owning Modular PRD feature group and follow the
normal Product/Fn Spec/SPECS propagation; this packet is not that change.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Placeholders as anti-duplication references | Phase 1 — convert each to the five-field resolvable form |
| Approve-with-conditions | B-103 P2 as the pre-promotion normative source | Phase 1 — pin the accepted commit and exact child headings |
| Approve-with-conditions | Lane A Part 1/P2 application packet | Phase 1 — Register act, exact propagation, checks and independent B/C reads |
| Reject | Treating bracket prose alone as executable or maintaining B-102 as a second semantic owner | Phase 1 — source reference must resolve without interpretation |
| Defer | Product artifacts, implementation, deployment and Graphify synchronization | Separate authorized units after governed-source verification |

## Lane A — Register read and corrected packet, 2026-09-15

**Judge approved-with-conditions, 2026-09-15: Part 1 conditioned on "committed packet, Register
read/act, correct seven-file propagation"; Part 2 conditioned on "full clauses above, dependency
recorded, three insertion points."** This section clears the Register-read condition and folds in
the remaining corrections. Still specified only; still not applied to any governed file.

**Targeted Register read, not the full 1.26MB file:** `D-200`, `D-201`, `D-202`, `D-203`, `D-209`
and `D-214`, grepped and read directly. This session has still not read `V1-DECISION-REGISTER.md`
in full and does not claim to.

**What that read changes about the proposed wording:**

1. **Entry format.** Every act uses the heading `## 5.14eNN \`D-NNN\` — <Title>`, opens with a bold
   **"Judge ruling, [date]"** line naming what was decided and on what question, and closes with an
   explicit **"### Applied in this act, and NOT applied — stated separately"** split (`D-56`) — never
   a single undifferentiated paragraph. My earlier proposed wording was a single paragraph. Corrected
   shape below.
2. **A `### Tier applicability (\`D-54\`)` table is mandatory**, not optional — this is blocker 6 from
   the application-readiness review, now sourced to the actual convention (`D-200`'s own §5.14e25 has
   one). Columns, exactly as used at `D-200`/`D-201`/`D-202`: `Item | Register | Agent files |
   SPECS-VERIFICATION | Inventory | Build spec | Modular_PRD`, each cell either the section anchor
   that applies it or **"— unaffected"** with the one-clause reason.
3. **No new commit-referent machinery.** `D-214` is a direct, on-point precedent against exactly the
   kind of addition my original "dual author/applicator provenance" phrasing risked: it withdrew
   `D-213`'s pin/sentinel/lifecycle-state machinery and ruled `Verified-At-Commit` means only "the
   commit whose content the record was written against — the commit the writer READ," with **no
   second field, no new state**. Author/applicator provenance therefore belongs in the **commit
   message prose**, not a new Register field — `Verified-At-Commit` keeps exactly `D-214`'s meaning,
   unchanged, everywhere this packet touches it.

### Corrected Part 1 Register act — specified, not applied

> **`D-2NN` — Cowork Semantic-Author / Claude Code Commit-Applicator Transport Exception**
>
> **Judge ruling, [date at acceptance].** Lane A · Cowork owns governance/documentation meaning under
> the existing tool split (`D-200`–`D-202`). Where Cowork lacks Git commit access, Lane A · Claude
> Code may apply and commit Cowork's immutable, Judge-accepted governance/documentation packet as a
> transport act: no semantic conflict resolution, no added path, no rewritten wording. An
> inexact-application conflict returns to Cowork and the Judge without repair. **The commit message**
> states Cowork as semantic author and Claude Code as applicator; `Verified-At-Commit` keeps `D-214`'s
> meaning unchanged — the commit whose content was read, no second field. This creates no `A-`series
> handoff, transfers no documentation ownership to Code, and narrows nothing in `D-184`'s existing
> one-entry handoff-commit exception, which remains separate and unchanged.
>
> ### Applied in this act, and NOT applied — stated separately
>
> **Applied (Cowork surfaces):** this section; the shared-core paragraph in `AGENTS.md`, `CLAUDE.md`
> and `.agents/rules/graphify.md`; `docs/README.md`'s Execution row; `V1-BUILD-SPEC.md` §2;
> `V1-PHASE-CLOSURE.md` §5.0a.
>
> **Specified, NOT applied (`D-56`):** none — this act is entirely Cowork's surface; no Claude Code
> implementation item is owed by this ruling.
>
> ### Tier applicability (`D-54`)
>
> | Item | Register | Agent files | SPECS-VERIFICATION | Inventory | Build spec | Modular_PRD |
> |---|---|---|---|---|---|---|
> | Transport exception | ✅ this section | ✅ shared core, all three | — unaffected: no verification-apparatus change | — unaffected: no file created or retired | ✅ §2 | — unaffected: a development-lane fact, never a product one |
>
> ### What this act does NOT do
>
> Opens no phase, closes none. Authorizes no build, sprint, migration, deployment or Graphify run.
> Changes no product tier, no lane state, no `Modular_PRD` §0.1 or §8 entry.

### Corrected Part 2 Register act — specified, not applied

> **`D-2NN` — B-103 P2 Two-Way Lane B/C Evidence Contract**
>
> **Judge ruling, [date at acceptance].** B-103's `### P2 — accept the two-way B/C evidence contract`
> and its two child headings, at the Judge-accepted commit, are ratified as the bounded evidence
> interface. Lane B exposes only the allowlisted class; Lane C consumes only that class and returns a
> named deficiency, never an invented endpoint, event schema or Product requirement. This carries
> forward B-094's already-standing P0-A/P1/P2 planning directions as dependencies, not as a business
> choice reopened here (B-103's "Lane B packet cross-reference" section, B-094 line 815 area).
>
> ### Applied in this act, and NOT applied — stated separately
>
> **Applied (Cowork surfaces):** this section, citing B-103 `### P2` verbatim by reference, not by
> copy.
>
> **Specified, NOT applied (`D-56`) — Claude Code's surface:** promote the cited P2 children into
> `docs/LANE-B-WORK-ORDER.md` new `## 6. Evidence contract with Lane C` and `.github/WORKFLOWS-SPEC.md`
> new `## 7. Evidence contract with Lane B`, exactly per B-102's "Resolvable-reference format" table
> above — copy verbatim, no paraphrase.
>
> ### Tier applicability (`D-54`)
>
> | Item | Register | Agent files | SPECS-VERIFICATION | Inventory | Build spec | Modular_PRD |
> |---|---|---|---|---|---|---|
> | B/C evidence contract | ✅ this section | — unaffected: not a lane/tool-split fact | — unaffected: no verification-apparatus change | — unaffected: no file created or retired | — unaffected: no sequence or DoD moves | — unaffected: a development-lane fact, never a product one |
>
> ### What this act does NOT do
>
> Opens no phase, closes none. Reopens no P0/P1 business choice. Authorizes no application code,
> workflow YAML content beyond the cited allowlist, or Graphify run.

### Still not cleared, stated plainly

- **Blocker 2 (commit this handoff entry as immutable) is Lane A · Claude Code's to clear** — this
  session has no Git commit access; it can only keep the working-tree text stable.
- **The two `D-2NN` numbers above are placeholders for the Judge/Register to assign at acceptance**,
  not a claim that this session read ahead to the next free number.
- **B-106's own Lane A validation is separately being restored this pass** (see B-106) after this
  session found its own prior addition missing from the current file; noted here because B-094
  correctly flagged it as not yet established.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Register-convention correction (entry format, `D-54` table, no new commit-referent field) | Phase 1 — matches `D-200`/`D-201`/`D-202`/`D-214` as read |
| Approve | Both corrected Register acts above | Phase 1 — Judge assigns `D`-numbers at acceptance |
| Approve | P0/P1 carried as dependency, not reopened | Phase 1 — per B-103's cross-reference and B-094's standing record |
| Defer | Commit of this handoff entry, and both Register acts' actual filing | Lane A · Claude Code and Judge/Register respectively |

## Lane B independent review — Register precedent exists; application authority does not, 2026-09-15

Lane B verified the Git and source claims directly. The three preceding Lane B handoff commits exist:
`73b4ce28e2dafeb3137ecb78eecb6f35619bdf27`,
`c55dfee90cbdc72a1ebc353798ee5d5f88e7d952` and
`14b608622f33c8fa23d2f128a845e93e574b0056`. Lane A's four later additions were present only as
working-tree edits at this review; the phrase “four files committed this pass via the file bridge”
therefore meant written to disk, not committed to Git. This review commits each original entry under
the existing one-entry exception so the packet can be cited immutably.

The existing Register provides the **format and precedent** for a new act. It does not yet contain
either proposed `D-2NN` act. “The Register is in place” is therefore true only of the governing
machinery; the application authorization remains absent until the Judge accepts exact text and Lane A
records real decision identifiers.

### Parent-first decision table

| Order | Parent / child | Verified state | Judge choice and recommended disposition | Completion evidence |
|---:|---|---|---|---|
| 1 | P0 — immutable source packet | The B-103 P2 source already exists at `73b4ce2`; Lane A's response additions were uncommitted at review | **Accept** committing the four original entries separately | Full Git hashes exist and working tree is clean |
| 2 | P1 — semantic ownership | Both `docs/LANE-B-WORK-ORDER.md` and `.github/WORKFLOWS-SPEC.md` are Cowork-owned documentation surfaces under `D-200`/`D-201` | **Reject** “Claude Code's surface”; **accept** Cowork semantic owner with Code as bounded commit-applicator | Proposed act states the owner and transport role separately |
| 3 | P2 — Judge/Register act | Two structurally corrected drafts exist; no assigned decision IDs exist in the Register | **Accept-with-conditions** only after final literal diff and real IDs are presented | Register commit contains the accepted acts and no placeholder ID |
| 4 | P3 — propagation | B-102 earlier requires Build Spec sequence/DoD for both parts; Lane A's later Part 2 draft says Build Spec unaffected | **Accept** one consistent rule: Part 2 updates Build Spec readiness/DoD because its outputs govern both construction and verification | Register tier table, Build Spec and both work orders cite the same contract; Inventory and Product tier are explicitly unaffected |
| 5 | P4 — application | No governed source has been edited by this handoff work | **Defer** until P0–P3 complete | Accepted source SHA and headings match; Cowork-owned destinations receive verbatim text through the authorized applicator path |
| 6 | P5 — verification and graph | No independent destination review or governed-source Graphify update exists | **Defer** until application commit | Lane B and Lane C record independent reads; checks pass; Graphify runs only when the verified governed-intent trigger is met |

### Exact fixes Lane A must make before Code applies the packet

1. In the proposed Part 2 act replace **“Claude Code's surface”** with **“Cowork-owned semantic
   destinations; Claude Code is the bounded commit-applicator under the accepted transport
   exception.”** The applicator does not acquire documentation ownership.
2. Replace the floating B-103 source reference with the full source commit
   `73b4ce28e2dafeb3137ecb78eecb6f35619bdf27` and the exact two P2 child headings. A later
   acknowledgement commit does not change the P2 text and need not become its source anchor.
3. Reconcile the Part 2 D-54 table with B-102's earlier propagation boundary. Recommended: Build
   Spec records the evidence contract as a readiness prerequisite and DoD because the contract
   controls construction inputs and verification outputs. Inventory stays unaffected; Modular PRD
   §0.1/§8 stays unaffected; Phase Closure records no lane-state change.
4. Keep `SPECS-VERIFICATION` unchanged in this act only if the work-order contract merely selects
   evidence already governed there. If the act adds a new negative probe, signal type or proof rule,
   name the exact verification-spec section in the same packet. Do not label a new verification
   obligation “unaffected.”
5. Present the literal Register and governed-file diff to the Judge. After acceptance, assign real
   decision IDs, apply the Cowork-owned edits, run the checks, and record the exact application
   commit in B-102 and B-103.

### Remaining blockers after the handoff commits

| Blocker | Owner | Exit condition |
|---|---|---|
| Part 2 ownership sentence is wrong | Lane A · Cowork | Corrected proposed act names Cowork as semantic owner and Code only as applicator |
| Part 2 propagation contradicts the earlier packet | Lane A · Cowork, then Judge | One accepted tier table and matching Build Spec treatment |
| Proposed acts still use `D-2NN` | Judge / Register owner | Real IDs assigned in the accepted Register commit |
| No exact governed-source application authorization | Judge | Accepted literal write set, source hashes, destinations, exclusions and DoD |
| No application or independent destination review | Lane A applicator, then Lanes B/C | Governed-source commit followed by two bounded read records |

### Graphify and cross-artifact disposition

`.graphify/branch.json` still reports `lastAnalyzedHead = f63d6eb`, while Git HEAD is later. The
flag `stale: false` is not reliable because the project has no Graphify Git hook. The committed diff
since that anchor contains handoff worklog files plus `.gitignore`'s exclusion of `Claude outputs/`;
it contains no governed Product, storyboard, story panel, UML, data-flow, traceability or
Encyclopedia change. Under the Judge's recorded trigger, no semantic Graphify synchronization is due
yet. It becomes due after the accepted governed-source packet is applied and independently verified.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Register conventions and the two reviewable act drafts as planning inputs | Phase 1 — correct ownership, propagation and IDs before acceptance |
| Approve | Commit of Lane A's four handoff responses as immutable transaction evidence | Current handoff phase — one entry per commit |
| Reject | Claim that the new Register acts already exist or authorize Code | They remain unfiled drafts |
| Reject | Part 2 destinations described as Claude Code-owned | Cowork owns their meaning; Code may only apply/commit an accepted packet |
| Approve-with-conditions | Part 2 construction/verification evidence contract | Phase 1 — consistent Build Spec DoD and verification-spec applicability |
| Defer | Governed-source edits, software/workflow construction, deployment and Graphify | Exact Judge act, application and independent verification first |

## Judge ruling — Lane A Code reclaims canonical governance and documentation, 2026-09-15

This ruling supersedes this entry's earlier Cowork-semantic-author / Code-commit-applicator proposal.
The Judge is the business-intent authority and is not required to understand repository mechanics,
choose Register identifiers, inspect hashes or translate intent into file operations. The governance
system must make that translation transparent and testable.

The normalized operating model is:

> **Lane A · Claude Code owns, updates, validates and commits every canonical governance and
> documentation source assigned to Lane A. Claude Cowork supports Lane A by receiving and analysing
> Lane B/C handoff entries and drafting clear responses in the unmapped `docs/handoff/` transaction
> channel. Lane B and Lane C remain the raisers. Code converts the accepted Judge intent into the
> governed sources, assigns valid Register identifiers, records the commit evidence and runs the
> governed-docs Graphify workflow after the source commit.**

`docs/handoff/` remains **unmapped** under `D-90`; “tasked to Cowork” describes the Lane A answering
role, not directory ownership. Lane B/C may still create their own entries, Cowork may answer them,
and Code may make the one-entry Git commit needed to preserve Cowork's response. No `A-NNN` series is
reopened.

### Parent decision tree — highest dependency first

| Order | Decision | Accept result | Reject result | Recommendation |
|---:|---|---|---|---|
| 1 | Who owns canonical Lane A governance/docs? | Claude Code owns meaning, application, validation and Git; Cowork is the B/C handoff analyst/answerer | Retain the split that has repeatedly left accepted intent in handoff/scratch | **Accept** the Code-owned model |
| 2 | What must the Judge review? | Plain-language outcome, scope boundary, exclusions and consequences | Raw paths, hashes, D-number selection and patch mechanics become prerequisites for a business decision | **Accept** outcome-level review; **reject** requiring repository expertise |
| 3 | Who assigns Register IDs and builds the literal write set? | Lane A Code derives both from the accepted intent, validates uniqueness/precedence and records them transparently | Judge manually administers repository identifiers | **Accept** system assignment with mechanical checks |
| 4 | How does Cowork participate? | Cowork consolidates Lane B/C concerns in the original handoff and identifies ambiguity for the Judge | Cowork edits or becomes owner of canonical governance sources | **Accept** handoff-only assistance |
| 5 | How do B/C consume the result? | They read committed work orders/specifications and return bounded evidence through their original handoffs | They infer requirements from Cowork scratch or uncommitted prose | **Accept** committed-source consumption only |
| 6 | When does Graphify run? | After Code commits the accepted governed-source change; final graph metadata names that commit | Before canonical intent lands, or merely because handoff prose changed | **Accept** commit-then-Graphify |

### What the Chief Editor supplies — and what the system supplies

| Chief Editor / Judge supplies | Lane A Code must supply without asking the Judge |
|---|---|
| Intended business outcome | Next valid, non-colliding Register decision ID |
| Accepted/rejected boundary and non-goals | Exact governed-file and section write set |
| Priority and any capacity constraint | D-29/D-54 precedence and propagation analysis |
| Acceptance example in business language | Literal source edits, cross-references and changelog placement |
| Final Accept / Reject / Defer disposition | Git commits, hashes, consistency evidence and Graphify synchronization |

The Judge-facing decision card therefore names **what changes for the project and what remains
outside it**. A technical appendix may expose paths and evidence for audit, but Judge approval does
not depend on reading that appendix.

### Exact Lane A Code follow-up

1. **Record the parent act first.** Append one new Register decision that supersedes only the
   Cowork/Code surface split in `D-200`/`D-201` and the transport exception proposed in B-102.
   Preserve: one Active Lane A, `D-90`'s unmapped handoff channel, `D-203`'s withdrawn `A-NNN`
   series, `D-184`'s one-entry handoff commit and `D-214`'s observed-at anchor meaning.
2. **Assign the ID mechanically.** Read the complete Register identifier set, select the next valid
   ID, fail on duplication, and let the Register/checks expose the result. Do not ask the Judge to
   calculate or validate it.
3. **Propagate the operating rule in one pass.** Update the identical shared-core block in
   `AGENTS.md`, `CLAUDE.md` and `.agents/rules/graphify.md`; update `V1-BUILD-SPEC.md` §2; update
   `V1-PHASE-CLOSURE.md` §5/§5.0a; update `docs/handoff/README.md` to name Cowork as Lane A's
   responder while preserving the unmapped channel.
4. **Correct current execution owners.** `docs/LANE-B-WORK-ORDER.md`,
   `.github/WORKFLOWS-SPEC.md`, Product/Fn/SPECS documentation, curated graph meaning and all other
   Lane A governance/docs become Claude Code's canonical-source responsibility. Lane B continues to
   own application/schema/tests; Lane C continues to own `.github/workflows/`.
5. **Retire obsolete tool-split controls.** Review `C-35`, `scripts/checks/lane-boundary.mjs`,
   `scripts/lane-gate.mjs`, fixtures and `.githooks/commit-msg`. Remove or narrow Cowork/Code
   sub-surface crossing logic that contradicts the new single-owner model. Preserve lane-crossing
   controls and the one-entry handoff exception. Record the resulting artifact disposition in
   `V1-ARTIFACT-INVENTORY.md`; do not silently leave a live checker enforcing the superseded rule.
6. **Apply the already-approved child packets in dependency order.** First the B/C evidence
   interface and its Build Spec readiness/DoD, then the A4/manual-intake Product packet, then the
   A4/A6 configuration/retention packet. Code derives and commits the bounded source changes;
   Cowork does not act as a second source owner.
7. **Verify construction and verification inputs.** Lane B checks that its work order identifies
   executable Product/Fn/SPECS clauses and acceptance cases. Lane C checks that its workflow spec
   identifies allowed evidence, negative probes and failure outcomes. Each answers in its original
   handoff at the exact read commit.
8. **Run Graphify last for the governed-docs commit.** Rebuild/re-merge the curated layer, run the
   portable check and consistency suite, and prove `lastAnalyzedHead` equals the final governed-docs
   HEAD. Handoff-only commits remain outside semantic extraction.

### Critical artifact write set and disposition

| Artifact | Required treatment | Why it matters later |
|---|---|---|
| V1 Decision Register | New superseding act with system-assigned ID and D-54 table | Canonical authority and precedence |
| Three shared rule files | Byte-identical new Lane A Code/Cowork operating contract | Prevents each agent from following a different owner model |
| V1 Build Spec | Replace the old tool split; name evidence-contract readiness/DoD | Drives construction order and completion |
| V1 Phase Closure | Preserve Lane A state; correct tool/report mechanics | Prevents ownership changes from being mistaken for a lane handover |
| Handoff README | Cowork answers B/C; channel remains unmapped; Code preserves responses in Git | Keeps raiser/answerer attribution without a new ledger |
| Lane B work order / Lane C workflow spec | Code-owned canonical packets, independently reviewed by their consumer | Direct construction and verification inputs |
| Lane/tool controls and fixtures | Remove or narrow obsolete Cowork/Code crossing assumptions | Prevents a checker from rejecting the newly governed workflow |
| Artifact Inventory | Record changed/retired control behavior; no invented file count | Makes the control lifecycle reviewable |
| Modular PRD, storyboard, story panels, UML, data flow, traceability, Encyclopedia | **Content unaffected by this ownership ruling.** Their future edits are Code-owned, but the editorial journey and data meaning do not change here | Avoids converting a governance operating decision into Product scope |

### Failure-derived success criteria

| Guaranteed failure if left unresolved | Evidence of success |
|---|---|
| Judge must administer D-numbers and hashes before expressing business intent | Judge approves a plain-language decision card; Code generates collision-free IDs and audit evidence |
| Cowork owns meaning but cannot persist it, so handoffs accumulate without source promotion | Code owns and commits canonical governance/docs; Cowork responses point to the resulting source commit |
| Shared rules still say Cowork owns `docs/` | All three shared-core hashes match the new ruling and Build Spec/Phase Closure agree |
| Old tool-crossing checks reject or misreport Code editing docs | Negative and positive fixtures prove the revised ownership map while lane-crossing controls still work |
| B/C consume scratch prose | Both lanes cite committed work-order/spec clauses and return bounded verification evidence |
| Graphify claims currency before the new intent exists in canonical sources | Governed sources commit first; Graphify's `lastAnalyzedHead` then equals that commit |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Lane A Code ownership of canonical governance/docs and Git | Phase 1 — parent Register act and same-pass propagation |
| Approve | Cowork as Lane A analyst/answerer for Lane B/C handoffs | Phase 1 — preserve `D-90` unmapped channel and raiser attribution |
| Reject | Requiring the Judge to select IDs, inspect hashes or administer literal patches | Governance system performs and exposes those mechanics |
| Reject | Earlier Cowork-owner / Code-transport-exception model | Superseded by this Judge ruling |
| Approve-with-conditions | Existing B/C evidence and Product/config child packets | Apply after the parent ownership rule and control map agree |
| Defer | Application/schema/workflow construction and deployment | Governed-docs promotion, consumer review and separate build authorization |
| Defer | Graphify synchronization | Immediately after the governed-source commit, not after this handoff-only record |
