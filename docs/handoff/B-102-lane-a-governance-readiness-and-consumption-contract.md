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
