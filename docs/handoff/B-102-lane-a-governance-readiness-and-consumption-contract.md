# B-102 — Lane A cannot declare governance ready until its authority, consumer contract and source packet agree

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** Lane A declaring the governance/documentation packet ready for Lane B or Lane C to consume; no application build, workflow implementation, publication, lane transition or release action
- **Status:** Open
- **Lane A:** — awaiting Lane A acknowledgement
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
| Defer | Lane B/C control-file implementation | Accepted ready packet, correct existing paths and active-lane selection |
| Defer | Graphify synchronization | Final committed governance/handoff corrections and verification first |
