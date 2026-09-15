# B-103 — The recurring Lane A promotion gap leaves the B/C interface undefined and handoffs unclosed

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** a truthful Lane A declaration that governance and documentation are ready for Lane B and Lane C; safe definition of the Lane B-to-Lane C evidence boundary and Lane C-to-Lane B monitoring feedback; no application build, workflow implementation, publication, lane transition or release action
- **Status:** Open
- **Lane A:** — awaiting Lane A acknowledgement
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Chief Editor/Judge clarifications of 2026-09-15; B-077, B-101 and B-102; `AGENTS.md` D-56/D-75/D-84/D-86/D-100/D-183/D-186; `docs/handoff/README.md`; `.github/WORKFLOWS-SPEC.md`; `docs/LANE-B-WORK-ORDER.md`; `docs/Modular_PRD.md` FR-14/NFR-08/Q4; `docs/fn-specs/FN-GATES-01-05.md`; `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md`; `docs/specs/SPECS-VERIFICATION-APPARATUS.md`; `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md`; `docs/governance/requirements-traceability-map.md`; `docs/ENCYCLOPEDIA-SYNC.md`; Graphify query and `.graphify/branch.json`; `bun run check` at the named commit.
- **Verified-At-Commit:** cf7c9c16007834dcf4cce924a29b1172d720f07a

## What happened

**Clarified task:** treat Lane A · Cowork's failure to apply accepted governance/documentation
corrections as a recurring defect, not a new request. Extend B-102 only where the Chief Editor added
new information: Lane B and Lane C have a two-way operational dependency, Lane A must consolidate
that contract into governed meaning, and the handoff backlog is growing without enough terminal
closure. Produce a parent-first decision tree and an exact Lane A follow-up plan. Plan only; do not
build or apply governed-source changes.

This entry does not replace B-102. B-102 owns the bounded-packet-versus-flag-only decision. B-077
owns the established lifecycle and failure-pattern history. B-103 owns the missing cross-lane
operational contract and the recurring failure to promote accepted answers out of the handoff
channel into their canonical sources.

## Recurrence finding — why Lane A is still not editing its sources

The problem is not Cowork's file access, Lane A ownership, Graphify, or lack of another analysis.
Lane A is Active and Cowork owns the affected governed documents. The same three causes recur:

| Rank | Parent blocker | Evidence of the recurring pattern | Smallest correction |
|---:|---|---|---|
| 1 | **Decision-to-application gap.** Judge-approved analysis is repeatedly recorded in handoffs without the separate Register act and bounded write packet required by D-183/D-186 | B-077 accumulated extensive design and review rounds; B-101/B-102 remain handoff work while their source corrections are unapplied | Lane A converts accepted choices into one exact source-edit packet, obtains the Judge act, then Cowork applies that packet |
| 2 | **The B/C interface is undefined.** D-84 defines provisioning for Lane C and D-86 defines flags for Lane B, but no governed contract says what evidence B exposes to C or what monitoring deficiency C returns to B | `.github/WORKFLOWS-SPEC.md` covers CI commands and workflow ownership; Product sources cover editorial audit/BCP observations; neither joins the two without conflating them | Accept the role and data-boundary contract below, then place each clause in its existing owner |
| 3 | **Lifecycle work is received faster than it is promoted and independently verified.** Acknowledgement keeps the queue readable and `Applied` records honest progress, but neither is terminal | The consistency suite derives unread and provisional lifecycle conditions from the entries themselves; B-077 already warns against a duplicate roll-up | At every Lane A turn, disposition the oldest controlling parent, apply ready corrections, name the verifier, and create a child only for genuinely different scope |

## Parent decision tree

### P0 — fix the promotion mechanism first

| Choice | Consequence | Recommendation |
|---|---|---|
| **A — bounded promotion packet** | Lane A names the accepted decisions, exact source sections, owners, dependency order, DoD and verification actor; the Judge authorizes that unit; Cowork edits it | **Accept** |
| B — keep answering only in handoffs | Analysis grows while canonical sources remain unchanged; B/C cannot rely on the answer | **Reject** |
| C — treat this clarification as direct source authority | Skips D-183/D-186 and makes an analysis verdict perform two different lifecycle acts | **Reject** |

P1–P3 below are children. They are useful only if P0 is accepted and applied.

### P1 — decide what each workflow means

| Workflow | Owner | Meaning | Decision |
|---|---|---|---|
| **Editorial workflow** | Lane B application/schema/test surface | Manual source intake, agent and human phase gates, state transitions, audit events, revision and publication/manual-ready behavior | **Accept as Lane B** |
| **CI/CD, DevOps and DevSecOps workflow** | Lane C `.github/workflows/` surface | Runs Lane A-provisioned checks, produces delivery-assurance evidence and reports operational contract gaps | **Accept as Lane C** |
| **Governance and documentation workflow** | Lane A Cowork/Code split | Defines intent, allowed evidence, data handling, dependencies, acceptance cases and control implementations before B/C consume them | **Accept as Lane A** |
| Lane C builds the editorial state machine because its workflow deploys the app | Crosses ownership and creates a second authority for product state | **Reject** |

Lane C builds workflows **for delivery and assurance of the app**. Lane B builds the app's
editorial workflow. Lane A connects them through a governed contract; it does not merge them into
one implementation surface.

### P2 — accept the two-way B/C evidence contract

#### Lane B → Lane C: minimum allowlisted evidence

Lane B exposes only what an authorized workflow needs to verify the build:

- named commands and their exit status;
- machine-readable test, type, lint, migration and security-check results;
- build artifact identity, schema/migration version and deployment-health result;
- sanitized operational events needed by an accepted monitoring contract, with stable event type,
  time, environment, correlation identifier and outcome code.

The contract excludes source credentials, environment-file contents, service-role keys, publication
credentials, tokens, raw client/article content and unrestricted database or application logs.
Production content is not necessary to prove a workflow runs. Secrets remain in the platform's
secret store and are never printed.

#### Lane C → Lane B: bounded deficiency feedback

When Lane C cannot verify or monitor an accepted outcome because the application emits no stable
signal, Lane C raises one C-series entry naming:

1. the acceptance case or control that cannot be observed;
2. the exact missing signal, such as a health/readiness result, structured event, metric, trace or
   stable failure code;
3. why existing output is insufficient;
4. the minimum shape and sensitivity class needed;
5. a positive and negative proof that would make the workflow capable of failing correctly.

Lane C does not invent an application endpoint, event schema or Product requirement in YAML. Lane
A decides and documents the requirement; Lane B later implements the application signal under an
authorized work order; Lane C consumes it under its own authorized workflow unit.

### P3 — close the feedback loop without creating another ledger

| Step | Lane A action | Completion evidence |
|---:|---|---|
| 1 | Acknowledge every new B/C entry and attach it to its controlling parent | No unread entry in `handoff-response` |
| 2 | Classify it as duplicate/link-only, ready to apply, blocked on one named decision, deferred to a named tier, withdrawn, or genuinely distinct child scope | The entry itself carries the disposition; no roll-up file or copied tally |
| 3 | Work the highest parent before its dependent children, unless a child is the stated blocker | Parent table names each child's dependency and current disposition |
| 4 | For a ready item, prepare and obtain authorization for the exact source write set, then apply it in the owning tier | Commit contains only the authorized source sections and D-54 propagation where applicable |
| 5 | Record `Applied` honestly and assign an independent actor to review the committed result | Reviewer, review question and real read commit are named |
| 6 | Promote to `Verified`, or record `Deferred`/`Withdrawn`/`Superseded` with its required owner/reason | Terminal state exists in the original entry; `closure-readiness` can derive it |
| 7 | Raise a new handoff only when scope or ownership genuinely differs | Review corrections append to the existing entry; no review-of-review chain for the same issue |

Directory size is not the success measure. A large active backlog may be healthy under D-100.
Failure is an entry that cannot say who will promote, verify, defer or withdraw it, or a canonical
source that remains wrong after its controlling choice has been accepted.

## Lane A follow-up, parent first

1. **Acknowledge B-101, B-102 and B-103.** This proves receipt only.
2. **Resolve B-101's lifecycle corrections.** They are bounded handoff repairs and remove false
   audit evidence before it is reused.
3. **Record the B-102 parent choice.** Recommended: Choice A, bounded packet plus executable
   controls. Amend D-86's flag-only wording in the same authorized pass so both models do not stay
   live.
4. **Record the B-103 P1/P2 contract.** State expressly that Lane B owns editorial behavior, Lane
   C owns CI/CD/DevOps/DevSecOps workflows, and Lane A owns their evidence and data-handling policy.
5. **Prepare one source write set.** Use existing artifacts; do not create generic sprint/lane
   control folders. Name exact sections, dependencies and DoD before requesting the Judge act.
6. **Write the B and C consumption packets.** The Lane B work order names Product/Fn_Spec/SPECS
   clauses and acceptance cases. `WORKFLOWS-SPEC.md` names Lane A-provisioned commands, allowable
   inputs/outputs, secret handling, negative probes and observed-run evidence.
7. **Route monitoring gaps correctly.** Keep editorial audit reconstruction under NFR-08. Keep
   the in-product business-continuity surface under FR-14/AC-21 and Q4. Put delivery telemetry and
   workflow evidence in the technical/verification tier. Do not call all three “observability.”
8. **Ask B and C for bounded readiness review.** Each lane answers whether its packet is executable,
   cites a missing dependency, or cites a contradiction. Neither lane re-decides Product scope.
9. **Apply returned corrections to their source owner and finish their original lifecycle.** Link
   corroborating B/C entries; do not merge them or close them in bulk.
10. **Synchronize Graphify last.** Lane A Code rebuilds/re-merges after the final tracked edit;
    Cowork checks curated meaning and cross-reference parity at the final HEAD.

## Failure-derived success criteria

| Guaranteed failure if left as written | Success criterion |
|---|---|
| Lane A continues answering handoffs without editing governing sources | An authorized source packet is applied, independently reviewed and linked from each controlling entry |
| “Lane C workflow” is read as ownership of the editorial state machine | Product transitions and their tests remain Lane B outputs; Lane C workflows only invoke and assess published contracts |
| Lane B exposes broad logs or environment state because no allowlist exists | The accepted interface names allowed evidence and sensitivity; negative inspection proves secrets and raw content are absent |
| Lane C invents missing telemetry inside workflow YAML | A C-series gap names the missing observable result; Lane A governs it; Lane B implements it later; Lane C then consumes it |
| A green job is treated as proof even though its failure path was never exercised | Every new workflow control has a deliberate negative probe that turns the job red for the intended reason |
| Handoffs are called closed at `Acknowledged` or `Applied` | The original entry reaches a terminal disposition with the required evidence, owner and independent read commit |
| Every correction creates another handoff about the same scope | Same-scope corrections append to the original entry; a new file cites a distinct owner or correction boundary |
| Graphify is synchronized before accepted source edits land | Final `lastAnalyzedHead` equals Git HEAD, coverage succeeds, curated meaning is checked and the consistency suite reruns |

## Cross-artifact disposition

| Artifact | Required treatment if P0–P3 are accepted |
|---|---|
| `docs/Modular_PRD.md` | Do not add general DevOps dashboards. Preserve NFR-08 as editorial audit reconstruction and FR-14/AC-21 as the existing in-product continuity surface. Q4 still decides its monitoring scope. |
| Functional specs | Name application-visible events only when a Product behavior or acceptance case requires them; Lane B implements later. |
| Storyboard, story panels, UML and data flow | Preserve the current editorial actor/gate flow. Add an operational view only if needed to show B output → C evidence and C deficiency → handoff → A decision → B correction; do not present CI as an editorial node. |
| Verification/technical specs | Own CI inputs/outputs, health evidence, negative probes, sensitivity/secret constraints and failure interpretation. |
| Requirements traceability | Link each new contract clause to the accepted control or Product requirement; never create a free-standing “monitoring” requirement with no origin. |
| Encyclopedia | Review affected entries after source application. `ENCYCLOPEDIA-SYNC.md` records impact; hosted parity remains a separate verification fact. |
| `docs/handoff/` | Remains the transaction backlog and each entry remains canonical for its lifecycle. No central closure ledger or copied count. |

## Chief Editor decisions needed

1. **B-102:** accept bounded packet plus executable controls, and authorize Lane A to prepare its
   exact D-86 amendment/write set.
2. **B-103 P1:** accept the three-way division above: Lane B editorial application, Lane C delivery
   assurance workflows, Lane A governed interface.
3. **B-103 P2:** accept the minimum evidence allowlist and C-to-B deficiency schema as planning
   inputs; source application remains a separate bounded act.
4. **Closure order:** direct Lane A to complete B-101, then apply the B-102/B-103 control-plane
   packet before opening another review of the same issue. This does not reorder unrelated Product
   value work or authorize a build.

## What you did instead

Queried the project graph, reviewed the live handoff lifecycle contract, B-077/B-101/B-102,
Lane B/C work orders, Product observability and continuity requirements, functional/verification
specs, storyboard/traceability/Encyclopedia owners, and the current consistency result. Raised this
single systemic refinement and linked it to the existing parents. Did not edit governed sources,
application code, schema, workflows, Graphify, lane state, or external systems, and did not build.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Recurring Lane A promotion failure as the controlling problem | Phase 1 — resolve through B-102/B-103 bounded source packet |
| Approve-with-conditions | B-102 Choice A and B-103 P0 bounded promotion mechanism | Phase 1 — Register act, exact write set, DoD and independent reviewer required |
| Approve | Lane B editorial workflow / Lane C delivery-assurance workflow / Lane A interface division | Phase 1 — record in the existing work orders and governing sources |
| Approve-with-conditions | Minimum B→C evidence allowlist and C→B deficiency feedback | Phase 1 — classify data, name exact fields and negative proofs before source application |
| Reject | Lane C ownership of product editorial state or business decisions | Lane C remains `.github/workflows/` only |
| Reject | Handoff file count as the closure metric | Lifecycle evidence remains in each entry and is derived by checks |
| Approve-with-conditions | Closure of the current chain | Phase 1 — B-101 first, then B-102/B-103 promotion; terminal review remains independent |
| Defer | Lane B/C implementation, workflow changes, publication and release | Accepted source packets, dependencies, active-lane selection and separate build authorization |
| Defer | Graphify synchronization | Final committed source and handoff lifecycle corrections first |
