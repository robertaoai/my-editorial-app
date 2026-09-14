# B-088 — C-39 independent review: token boundary and bounded completion

- **Raised:** 2026-09-14 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** acceptance of the complete C-39 leading-actor contract; no unrelated authorized work
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-14** at read commit `495e4f8`. Receipt only, and a review
  result recorded separately from any correction, per `P0`. The demonstrated underscore-suffix
  defect is accepted as a failed verification; no actor-guard or `C-39` completion claim is
  accepted. `P1` is not authorised by this receipt. One correction to the entry's §28: at
  `495e4f8` `graph-coverage` lacks **both** `B-087` and `B-088`, not `B-087` alone.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** 395ab8301ec7ee4bf1cb430d3b5739c8d1b1c22e
- **Evidence:** Read-only independent invocation of the installed leadingActor export and closure-readiness.run at the named commit; live nine accepts, six rejects, 52 Verified records; suffix probes below; bun run check; source and tracking-file review. No mutation harness rerun or implementation claimed.

## What happened

**Clarified request:** independently review Lane A's C-39 guard report, identify demonstrated gaps, draft corrections and order their acceptance dependencies. Reconcile the report with existing product-view findings and graph evidence. Produce a plan only.

This is one new failed-verification finding against the guard at `8ead2d4`, retained unchanged at the examined HEAD. It does not create a replacement C-39 tracker. The Register owns C-39 and C-35; [B-087](B-087-bounded-setup-spike-proposal.md) owns the product alignment review; B-086's parent and child dispositions remain unchanged. Lane B raises this finding; Lane A answers it. No whole handoff is independently Verified by this review.

### Evidence and gaps

| Item | Independently observed | Conclusion / draft correction |
|---|---|---|
| Required actor examples | All nine named live values return allowed Lane B; all six report probes return excluded actor or unknown as appropriate; Acknowledged remains excluded | Preserve this completed learning. This pass reproduces actor classification, not the entire fixture harness or its message assertions. Lane A's 15-fixture run at `8ead2d4` remains attributed evidence |
| Closed token boundary | `leadingActor("Lane B_fake")` returns allowed `lane b`; `Codex_unknown` and `Judge_unknown` likewise return allowed tokens. `Lane Bx` is rejected | **Defect:** the suffix test excludes only `[a-z0-9]`, allowing underscore continuation. The comment promises a word boundary and C-39 requires a known token, not a prefix. Reject identifier continuations while preserving ordinary prose/Markdown delimiters. Do not enlarge the actor allowlist |
| Live regression | All 52 live Verified entries have accepted actors; `closure-readiness.run()` has no findings and proves their commits exist | Accept this bounded result. A healthy live corpus cannot prove rejection of an unknown actor |
| Whole C-39 | The checker still skips entries without Resolution, checks only anchor non-emptiness for Applied, and validates shape/existence in Verified | Fill/anchor coverage remains owed under D-214/D-215. Guard repair alone cannot close C-39 |
| Proof at a later HEAD | Only B-087 changed between `8ead2d4` and examined HEAD; the two implementation files are unchanged | Code preservation is proven. A fixture reading live documents also depends on its inputs/harness; file equality alone does not transfer a whole-suite result. Cite the original run's commit or rerun serially and record current inputs and restoration |
| Current consistency run | Two failures: graph-coverage lacks B-087; handoff-response finds its blank Lane A field. docs-drift passes at `395ab83` | Acknowledgement clears the receipt failure only. Graph coverage requires its own repair. The report's claim that acknowledgement clears both is rejected |
| Remaining fixture misses | Lane A reports seven misses at `8ead2d4`, six receipt-coupled and one B-017 phase-scope dependency | Not independently rerun here. Retain attribution; do not repeat the historical count as a current result or claim acknowledgement fixes the harness design |
| Graph completeness | Metadata matches examined HEAD; review-delta reports no changed files, yet graph-coverage reports an omission | Head alignment is not complete coverage or semantic parity. Reported fragment parity, four tool crashes and unfinished semantic fill were not independently reproduced here |

The suffix examples are diagnostic inputs, not invented live identities. The current instruction that fixtures use live values must be preserved for the nine positive regressions. Cowork should explicitly authorize labelled synthetic negative boundary probes before Code adds them; do not quietly describe them as live records.

## What you need

### Parent-first decision and execution plan

| Order / dependency | Owner and bounded action | Completion evidence / Judge Accept or Reject | Priority changes if |
|---|---|---|---|
| P0 — review before closure | Cowork acknowledges B-087 and this entry; records the narrow review result in the existing C-39 block | Accept receipt separately from correction. Reject any actor-guard or C-39 completion claim that omits the demonstrated suffix defect | A prior governing decision explicitly defines underscore suffixes as valid actor separators; cite it before changing this finding |
| P1 — depends on P0's exact test contract | Cowork confirms negative boundary probes; Code later repairs only token termination plus its fixtures under a bounded authorization | Unknown identifier continuations reject; nine live positives, six required negatives and Acknowledged retain expected outcomes; full checker exercises the rejecting branch with the intended message. Record commit, output and restored tree | A broader failure is demonstrated in the same matching rule; extend this unit only to that evidenced failure |
| P2 — depends on an explicit bounded unit, not product redesign | Code implements the already-owed C-39 fill/anchor contract after authorization | Every non-turn-report lifecycle position rejects blank audit fields and nonexistent/malformed commit anchors; valid Open disclaimer with real read-commit passes; turn-report without audit fields passes. Preserve actor-independence enforcement on Verified | Existing code or fixtures prove part is already satisfied; reuse evidence rather than repeat work |
| P3 — depends on P1/P2 evidence | Cowork records actual installed/remaining scope; independent reviewer verifies it; Judge accepts the named unit | Register, build spec and inventory agree in the same pass under D-54. No scope closes on an acknowledgement or a green healthy-corpus run | A Judge act explicitly changes C-39's contract; record the changed scope and remaining owner |
| P4 — depends on C-39 fixture prerequisite | Cowork assesses C-35 start against the complete existing prerequisite | Keep C-35 held while C-39 fixtures remain incomplete. The `8ead2d4` commit itself says the prerequisite means fixtures as a whole. A narrower start requires an explicit Judge amendment, not inference from the guard result | Judge expressly approves a narrower prerequisite and its rationale |
| Supporting work — after document changes stabilize | Code operates graph sync; Cowork owns curated meaning | Resolve missing handoff coverage, preserve/remerge curated fragments with the established B-087 runbook, verify coverage and metadata against final HEAD, report crashes/semantic gaps separately | Coverage obstructs review of the selected unit; otherwise do not block useful product learning on unrelated graph cleanup |

**Planning ranges only, not commitments:** P0 + propagation review 1–2 person-hours; P1 1–3; P2 2–5; independent verification 1–2; graph coverage/sync 1–3 assuming existing tooling works. Tool-crash investigation is a separate estimate if needed. Capacity and authorization remain unconfirmed; these ranges do not set quarterly goals or delivery dates. Proposed iteration outcome is verified governance behavior and a reviewable product-alignment packet, not application or release readiness.

### Exact draft for Cowork's C-39 correction note

> The leading-actor implementation and nine-live-positive/six-negative fixtures landed at `8ead2d4`. Lane B independently reproduced those actor classifications and no rejected live Verified actors at `395ab83`, but found that unknown underscore-suffixed identifiers are accepted as allowlisted prefixes (B-088). The actor guard is installed with this correction outstanding; it is not accepted as complete. Non-empty audit-field and real-commit validation across every required lifecycle position remain owed under D-214/D-215. C-39 remains open. C-35 retains its existing fixture prerequisite unless the Judge explicitly amends it.

Propagate this **fact**, not test tallies: Register C-39 status/evidence, Build Spec bounded correction/sequence/DoD, Inventory existing checker and fixture file dispositions. Do not create a new artifact merely to repeat this report. No sprint closes and no tier opens; Modular_PRD §8 is unaffected by this guard correction. Cowork records its answer here and its boundary report through the Register under D-203; no A-series entry.

### Chief Editor / Judge: required choices, separated from operator work

1. Accept the demonstrated nine/six/live-corpus behavior as partial evidence; reject completion of the full token contract pending P1. This is a review verdict, not build authorization.
2. If authorizing P1 later, approve the bounded correction and explicitly labelled negative boundary probes. No actor-membership choice is needed: the allowlist is settled.
3. No new C-35 choice is required to retain the existing hold. Only choose if proposing to narrow that prerequisite; name the remaining risk, owner and evidence in the amendment.
4. For the original product alignment, use B-087 §3's existing J1–J4 packet. Chief Editor supplies the representative article and revision reason for LinkedIn ManualReady; Lane A prepares examples before requesting behavioral acceptance. Capacity is still an input. Do not reopen settled manual input, optional AI, or the usable-and-reusable S2 intent.

### Cross-view review: unaffected by this fix does not mean already consistent

| Artifact / tier | Guard correction impact and outstanding owner |
|---|---|
| Modular_PRD / module tracking | No product behavior change from C-39. Original-baseline versus setup/sprint mapping remains B-087; frozen Project PRD and Charter untouched |
| Storyboard and story panels | No guard-induced edit. A2's explicit “NOT superseded” no-producer claim and summary still contradict the later manual-input mapping; B-087 already specifies correction. Keep historical evidence visibly historical |
| UML-style sequences and data flow | Embedded storyboard sequences are the reviewed views, not a newly discovered standalone UML deliverable. Product transition/audit order and manual input corrections remain B-087/B-071 dependencies |
| Authored scope graph and cross-reference map | Authored graph still says CR-14 has no FR at line 23 and Uncovered at line 98. B-087 already owns reconciliation with traceability's manual-input coverage. Runtime graph sync does not correct source prose |
| Encyclopedia | No identified guard dependency. Local ledger still anchors entry 06 to `f7b3aea`; hosted content was not available to independently verify. Do not call the entire Encyclopedia current. Product-view reconciliation remains B-087's source-to-ledger follow-up |
| Fn_Specs / SPECS / application / schema | Unaffected by this guard correction. No product implementation or new experiment authorized |

**Deterministic failures versus uncertainty:** the named suffix probes demonstrably fail the closed-token acceptance criterion; the current blank receipt and missing coverage demonstrably fail their checks. Customer harm, publication loss or business failure are not established by these results. Derive success from repeatable failing examples, not severity rhetoric. Manual POC learning remains separately assessable; C-39 is not automatically its prerequisite.

## What you did instead

Read and tested the installed checker without modifying it, the fixture harness, the live records or governing documents. Drafted this single review handoff; existing product-alignment findings remain linked rather than copied into new backlog items. Did not rebuild the graph, run the tracked-file mutation harness, build, publish, select a lane or close C-39/B-086/B-087. This handoff adds a source document that Lane A's subsequent coverage/sync pass must include.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Phase 1 C-39 named actor examples and current live-corpus result, bounded as above | Phase 1 — retain evidence |
| Reject | Phase 1 C-39 complete token-contract acceptance; underscore continuation accepted | Phase 1 — P1, Code repair and independent verification after authorization |
| Approve-with-conditions | Phase 1 C-39 consolidated correction plan | Phase 1 — Cowork test contract and D-54 propagation; no build authorization |
| Defer | Phase 1 C-35 start and whole-C-39 closure | Phase 1 — existing prerequisite and P2/P3 evidence |
| Reject | Phase 1 claim that acknowledgement clears graph coverage or metadata proves semantic completeness | Phase 1 — separate receipt, coverage and semantic evidence |
| Approve-with-conditions | Product / derived views alignment retained in B-087 | Phase 1 — its existing parent-first J1–J4 follow-up; guard does not close it |
