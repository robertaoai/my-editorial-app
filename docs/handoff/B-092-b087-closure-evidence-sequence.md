# B-092 — B-087 closure evidence sequence

- **Raised:** 2026-09-14 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** independent verification and closure of B-087; no build or governed-source application
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** f56729bb8e1c7c7be1f390a6fe13b50c0a7d2e7a
- **Evidence:** B-087 §§6–9.11; B-088 through B-091 lifecycle fields; Lane A's uncommitted answers; real consistency run at f56729b; Graphify metadata/pending marker. Planning closure procedure only.

## What happened

**Normalised request:** independently verify Lane A's final B-087 planning answer, identify any remaining closure gap and specify a finite commit, graph-sync and verification sequence. Preserve J4 Choice A and do not build.

The planning decisions are complete and internally coherent:

- J1 accepts “setup/scaffold evidence” without creating V0 or rewriting frozen history.
- J2 defers the normal/revision walkthrough to a representative article and revision reason.
- J3 defers allocation until operator and reviewer hours exist.
- J4 Choice A keeps this iteration planning-only and leaves B-084's source application in its own Phase 1 unit.

Lane A's B-091 corrections are also accurate: the Graphify criterion now requires equality with the final committed HEAD, and the unsupported distance tally was removed. The latest real run reports `handoff-response` PASS; `docs-drift` and `graph-coverage` remain red as expected before synchronization.

B-087 is not yet independently verifiable because its answer and the related acknowledgements exist only as uncommitted working-tree changes. `Verified` requires evidence at an existing revision. Parser conformance proves that the fields can be read; it does not turn an uncommitted answer into verification evidence.

One routing sentence also needs correction. B-087 §9.5 explicitly calls B-088 a **sibling**, because its C-39 actor-guard work does not gate product alignment. B-087 §9.11 later lists B-088 among “every routed branch.” Those statements conflict. B-088 is separate and may remain Open until its own bounded C-39 authorization; it is not a B-087 closure dependency.

## What you need

### Finite closure sequence

1. **Correct B-087's branch list.** Remove B-088 from the list of B-087 routed branches and state that it is an acknowledged sibling with its own owner and authorization condition.
2. **Commit the existing handoff answers separately.** Bind and commit one exact path at a time for B-087, B-088, B-089, B-090 and B-091. Do not combine them under D-184. Each commit must contain only that entry.
3. **Verify the committed planning answer.** Lane B compares B-087's committed answer with B-089 through B-091: all four J decisions, B-084/B-087 ownership, planning-only J4 boundary, final-HEAD graph criterion and named deferrals.
4. **Disposition the review chain truthfully.** B-089, B-090 and B-091 may become `Verified` only after their applied corrections exist at committed revisions and Lane B confirms them. B-088 stays on its separate C-39 lifecycle; no B-087 closure claim changes it.
5. **Record B-087's verified planning result at a named revision.** Its evidence is the accepted decision/routing packet, not B-084 source completion, the deferred user walkthrough, capacity, application code or release readiness.
6. **Synchronize Graphify after the final handoff-state commits.** Claude Code operates the established pipeline; Cowork supplies curated meaning. Require `lastAnalyzedHead == final HEAD`, coverage for the new handoffs, descriptions present and curated nodes/edges preserved.
7. **Run the full local consistency suite.** `handoff-response`, `docs-drift` and `graph-coverage` must pass together. Record remaining unrelated failures outside B-087 rather than reopening its planning decision.

This order prevents an endless stale cycle: all tracked handoff answer and resolution commits land before the final untracked Graphify synchronization. No tracked status edit follows that sync. Independent content verification cites the committed answer revision; the final suite proves the consuming graph matches the final repository HEAD.

### Exact draft corrections

Replace B-087 §9.11's routed-branch sentence with:

> The first half is met: J1–J4 are each decided or explicitly deferred with owner and trigger. B-084, B-071, B-077 Child 2, commercial scope and access scope each have a truthful disposition for this planning packet. B-088 is an acknowledged sibling on the independent C-39 track; it is not a B-087 branch and does not gate this planning closure.

Replace Lane A's final conclusion with:

> No B-087 business decision remains open. Independent verification still requires the answer and review corrections to be committed at named revisions. Graphify synchronization follows the final tracked handoff-state commits. B-088 remains a separate C-39 item and B-084 remains a separately deferred source-application unit.

### Failure-derived success criteria

| Failure | Success criterion |
|---|---|
| Lane B verifies working-tree text with no commit anchor | Every verified claim cites an existing committed revision containing the reviewed answer |
| B-088 is treated as both sibling and branch | B-087 names it only as a separate C-39 sibling; its Open state does not block B-087 |
| Acknowledged review entries are treated as resolved | B-089 through B-091 receive resolutions only after their corrections are committed and independently checked |
| Graphify is synchronized before the last status commit | All tracked handoff-state changes land first; final sync and suite target the resulting HEAD |
| B-087 closure is read as product readiness | Evidence states that J2, J3, B-084 application and Phases 2/3 remain deferred |

## What you did instead

Verified the decision content and current checks, inspected every related lifecycle header and drafted this closure procedure. Preserved Lane A's working-tree edits. Did not commit those edits, alter any existing handoff status, synchronize Graphify, edit governed sources, build, publish or change lane state.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | J1–J4 decision content and J4 Choice A boundary | Phase 1 — preserve in committed B-087 answer |
| Approve | Lane A's final-HEAD Graphify criterion and removal of the unsupported tally | Phase 1 — preserve |
| Reject | B-087 ready for `Verified` while its answer is uncommitted | Phase 1 — commit first, then independent review |
| Reject | Treating B-088 as a B-087 routed branch | Phase 1 — separate C-39 sibling lifecycle |
| Approve-with-conditions | B-087 planning-spike closure | Phase 1 — exact-path commits, independent verification, final Graphify sync and passing checks |
| Defer | B-084 source application, J2 walkthrough and J3 allocation | Phase 1 — their recorded owners and triggers |
| Defer | Application and release readiness | Phases 2 and 3 — separate authorization and evidence |
