# B-114 — MMF test-first units, atomic commits and human final push need one executable contract

- **Raised:** 2026-09-16 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** defining the next Lane B/C construction packet; claiming strict TDD or unit-by-unit validation; deciding when an authorized implementation commit may be pushed
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Chief Editor/Judge clarification of 2026-09-16; `docs/v1/V1-B071-CORRECTIVE-PLAN.md` `R76` and related no-operative-MMF criteria; `docs/v1/V1-BUILD-SPEC.md` bounded-unit and DoD rules; `docs/LANE-B-WORK-ORDER.md` §§1, 2 and 4; `.github/WORKFLOWS-SPEC.md`; `docs/specs/SPECS-VERIFICATION-APPARATUS.md`; `docs/Modular_PRD.md` NFR-04/AC-NF-03; shared-core commit/push and lane rules
- **Verified-At-Commit:** 70b60c3210bdb2fc14dca1155cd9074fff75810d

## Judge clarification received

The Chief Editor/Judge supplied this testing method:

1. Testing is based on the smallest Minimum Marketable Feature (MMF), handled one child unit at a
   time.
2. Each new construction unit starts with a failing test because its production code does not yet
   exist.
3. A unit may be committed only after its test passes.
4. The local clone reserves push as the final human step because no automated unit-by-unit remote
   validation currently exists.
5. Once Lane B or Lane C receives clear build intent, each unit is tested and validated before
   integration under strict TDD.

The direction is coherent, but three existing rules must be reconciled before a lane can execute it:

- `V1-B071-CORRECTIVE-PLAN.md` withdrew operative use of “MMF” because the earlier substitution was
  not authorized. The Judge has now supplied authority, but Lane A must record the new definition
  and the supersession rather than silently reuse the withdrawn term.
- Existing shared rules say to commit and push every change/sprint. Human-final-push changes that
  rule for authorized Lane B/C construction. Without an explicit scope, one reader pushes every
  green child commit and another accumulates local commits.
- “Smallest MMF” and “one child unit at a time” are different boundaries. A marketable feature is
  the business acceptance/integration boundary; a child unit is the red-green-commit boundary.
  Treating every child as independently marketable would misstate business value and fragment the
  implementation packet.

## Normalized terminology

| Term | One meaning | Must not mean |
|---|---|---|
| **MMF** | The smallest Judge-approved feature slice that produces a usable, demonstrable business outcome and has one acceptance/DoD packet | Every test case, helper, migration fragment, UI component or commit |
| **Child unit** | The smallest dependency-ordered implementation behavior inside one MMF that can be driven by one failing test or negative executable case and completed atomically | A separate marketable promise or unapproved scope extension |
| **Fail-first proof** | Before new production code for a child exists, the new test/negative fixture fails for the intended missing behavior | Breaking unrelated code, weakening a test, or manufacturing failure after behavior already exists |
| **Atomic child commit** | One child unit's test, production change and necessary local evidence committed together only after the child and relevant regression gates pass | One commit containing several queued children, or a red commit pushed for CI to diagnose |
| **MMF integration proof** | All completed child commits work together and satisfy the MMF acceptance examples, full relevant regression suite and lane evidence contract | The last child test alone |
| **Human final push** | After local MMF integration proof and the required handoff evidence are complete, the human performs or explicitly authorizes the single push for that accepted lane packet | An agent pushing each child, or a push being treated as acceptance/deployment evidence by itself |

## Parent-first decision table

| Order | Parent/child decision | Accept path | Reject / stop condition | Completion evidence |
|---:|---|---|---|---|
| 1 | **Parent — adopt MMF as the construction acceptance boundary** | Judge definition above supersedes only the prior prohibition on operative MMF terminology | Use MMF without recording the supersession, or rename every technical child an MMF | Register act defines MMF and cites the prior withdrawn substitution |
| 2 | **Child — bind one exact MMF before construction** | Name business outcome, included/excluded behavior, dependencies, owner, effort range, acceptance examples and DoD | Begin from a sprint title, prose request or whole application | One authorized MMF packet tied to an existing Product feature group |
| 3 | **Child — order implementation children** | Each child has one failing proof, production change, regression scope and completion evidence | Several children begin in parallel or depend on unbuilt behavior | Dependency-ordered child manifest |
| 4 | **Child — enforce red→green locally** | Capture the expected red result before production code; commit only after green plus relevant regressions | Test starts green for supposedly absent behavior, or production code precedes its test without recorded exception | Red evidence, green evidence and atomic child commit |
| 5 | **Child — integrate at the MMF boundary** | Run the MMF acceptance examples and complete relevant suites across all child commits | Treat individually green children as integrated | MMF integration report and Lane B→C allowlisted evidence packet |
| 6 | **Child — human performs the final push** | One human push follows accepted local MMF evidence | Agent pushes each child, or local commits are treated as remotely verified | Remote tip equals the accepted local MMF commit; push actor/time recorded |
| 7 | **Child — Lane C consumes an immutable Lane B packet** | Lane C begins only from the named accepted Lane B commit and builds workflow children test-first | Lane C consumes an uncommitted or changing Lane B tree | B→C artifact identity and sanitized outcomes per D-229/D-230 |

## What is unclear and the proposed resolution

| Unclear point | Guaranteed failure if left vague | Proposed resolution |
|---|---|---|
| Is each child itself an MMF? | Business scope fragments into technical tasks with no marketable outcome | MMF is the parent acceptance boundary; child unit is the TDD/commit boundary |
| What happens when behavior already exists? | A verifier may deliberately break working code merely to produce a red test | Fail-first applies to new construction. Existing behavior uses a characterization/verification test and records that it started green; do not manufacture failure |
| Do documentation and governance edits require code TDD? | Lane A cannot create a meaningful failing product test for prose | Strict red→green applies to Lane B/C construction. Lane A control code uses negative fixtures; pure documentation uses review and consistency evidence |
| Does one child test permit commit? | A passing narrow test can hide regression in earlier children | Require the child test plus the MMF-defined relevant regression set before commit |
| When exactly does push occur? | Agents and the human may both push, or nobody pushes | Default: one human push after each lane's accepted MMF packet. A combined B+C push requires a separate explicit Judge act because lanes execute sequentially |
| Does push mean release/deployment ready? | Git success can be mistaken for business or release acceptance | Push is transport only; deployment and release evidence remain separate Lane C/lifecycle gates |
| Can failing tests be committed? | A red commit becomes the shared baseline and blocks unrelated work | Red state stays local and uncommitted; the atomic commit contains the test and completed behavior after green evidence exists |

## Step-by-step Lane A follow-up

1. **Acknowledge B-114.** Keep construction held; this clarification is method authorization, not a
   named application MMF or lane transition.
2. **Record the Judge decision.** Assign a Register ID defining MMF, child unit, fail-first proof,
   atomic child commit, MMF integration proof and human final push. State that it supersedes the
   earlier no-operative-MMF ruling only for this exact normalized meaning.
3. **Resolve the push-rule conflict in the shared core.** For an authorized Lane B/C construction
   run, replace agent push-per-change with local atomic child commits and one human final push after
   accepted MMF integration evidence. Keep D-184's one-entry handoff push exception and Lane A's
   own governance commit flow distinct.
4. **Add the MMF packet schema to the build method.** Each packet names:
   - Product feature-group anchor and business outcome;
   - included/excluded behavior;
   - dependency-ordered children;
   - child failing proof and regression set;
   - MMF acceptance examples and DoD;
   - Lane B/C owner and dependency boundary;
   - effort range and capacity assumption;
   - evidence artifact names; and
   - stop/change conditions.
5. **Update the three V1 tracking files together if this decision creates or sequences artifacts:**
   Register always; Build Spec for the red→green→commit→integrate→human-push sequence and DoD;
   Artifact Inventory for the MMF packet, child test evidence and integration report. State
   `Modular_PRD` §8 is unaffected unless a sprint closes or a tier opens.
6. **Update lane instructions without duplication.** `LANE-B-WORK-ORDER.md` owns Lane B execution;
   `.github/WORKFLOWS-SPEC.md` owns Lane C workflow execution; `SPECS-VERIFICATION-APPARATUS.md`
   owns reusable positive/negative evidence. Each points to the one canonical MMF method rather
   than restating it.
7. **Define the local evidence shape.** For each child: test identifier, expected initial failure,
   observed red output, implementation files, observed green output, regression commands and
   atomic commit. Do not commit secrets, raw client content or unrestricted logs.
8. **Define the human push gate.** The local MMF tip, full local checks, handoff/turn report and
   independent review required before the human push; after push, record remote tip equality.
9. **Add verification fixtures/checks only where they can fail meaningfully.** At minimum detect an
   MMF packet with no Product anchor, a child with no failing proof/exception, a commit containing
   multiple child IDs, missing MMF integration evidence, and agent push evidence where human-final
   push was required.
10. **Synchronize Graphify after the final governed-source/control change**, preserve curated
    fragments, run the portable check and the full consistency suite.
11. **Return the packet for Lane B and Lane C independent reads.** Construction starts only after a
    fresh Judge act names the first MMF, its children, DoD and Active lane.

## Critical construction and verification artifacts

| Artifact | Owner | Purpose | Completion evidence |
|---|---|---|---|
| MMF authorization packet | Lane A / Judge act | Converts business intent into one bounded implementation outcome | Product anchor, scope, exclusions, children, DoD and stop conditions complete |
| Child dependency manifest | Lane A specification; executing lane consumes | Prevents parallel or out-of-order child construction | Every child has predecessors and one owner |
| Failing-proof record | Lane B or C | Proves the test detects the missing behavior before code | Expected and observed red outcome match |
| Atomic child commit | Lane B or C | Couples test and implementation at one reviewable boundary | Child and regression tests pass; one child ID |
| MMF integration report | Executing lane | Proves individually green children form the promised outcome | Acceptance examples and full relevant suites pass |
| B→C evidence packet | Lane B | Gives Lane C immutable allowlisted build identity and outcomes | D-229/D-230 fields complete, no secrets/content exposure |
| Lane C workflow proof | Lane C | Proves positive and deliberate failure paths around the accepted Lane B artifact | Workflow success/failure evidence tied to exact commit |
| Human push record | Chief Editor/human | Makes remote transport explicit and final | Actor/time, local tip and remote tip equality |
| Graphify/consistency evidence | Lane A | Keeps governed sources and controls synchronized | Graph head equals final commit; portable and consistency checks pass |

## Cross-artifact review

| Artifact | Impact |
|---|---|
| `docs/Modular_PRD.md` | Product requirements unchanged. NFR-04 already requires executable verification. Do not add MMF workflow mechanics to the Product PRD; §8 changes only if a sprint closes or tier opens. |
| Storyboard and story panels | Product/article journeys unchanged. A future first-MMF packet may cite one normal/revision acceptance example, but this method decision does not alter the panels. |
| UML and data flow | Application state/data flows unchanged. Test evidence and commit metadata are project controls, not new product entities. |
| Requirements traceability | No new Customer Request. Record this as Project-Scope verification supporting NFR-04 and the existing feature-group anchors. |
| Encyclopedia | No current entry depends on this method. Entry 05's D-168 staleness remains separate. |
| Cross-references | B-114 owns this testing-method clarification; B-113 continues to own terminal-return enforcement; D-229/D-230 continue to own the B/C evidence boundary. Do not merge the three owners. |
| Graphify | Current graph is already stale from the earlier fixture-code change. Rebuild only after Lane A applies the final governed method packet; this handoff-only entry adds no new rebuild requirement. |

## Failure-derived success criteria

| Failure | Success criterion derived from it |
|---|---|
| MMF is used as a synonym for every technical task | One MMF parent has several dependency-ordered child units and one marketable outcome |
| Production code appears before its detection proof | Every new-construction child records red evidence before its implementation diff |
| Narrow green hides regression | Atomic commit requires child green plus named relevant regression set |
| Several children are bundled into one opaque commit | Commit evidence names exactly one child unit |
| Local children pass but do not integrate | MMF acceptance examples run against the integrated local tip |
| Agent and human both push or push timing is uncertain | One human final-push record names accepted local and remote tips |
| Lane C validates a moving target | Lane C consumes the exact pushed Lane B artifact identity |
| Passing push is called release readiness | Release/deployment gates remain separately evidenced |

## What you did instead

Normalized the Judge's method against the existing hierarchy, identified the prior MMF and push-rule
conflicts, and drafted the complete Lane A propagation/execution packet. Did not authorize an MMF,
start construction, change Product artifacts, modify lane rules, commit production code, or perform
a deployment push.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | MMF as the business acceptance boundary | Phase 1 — Lane A records the normalized definition and prior-term supersession |
| Approve | Child unit as fail-first/atomic-commit boundary | Phase 1 — propagate into the build method and lane work orders |
| Approve-with-conditions | Human final push | Phase 1 — resolve shared-core push conflict and define evidence/actor boundary |
| Reject | Treating every child unit as independently marketable | MMF remains the parent business outcome |
| Reject | Committing or pushing the red state | Red evidence remains local; commit follows green plus regressions |
| Defer | First executable MMF and Lane B/C construction | Fresh bounded authorization naming Product anchor, children, DoD and Active lane |
| Defer | Graphify synchronization | After Lane A applies the final governed method packet |
