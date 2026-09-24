# B-132 — Setup closure, guided SM05 readiness, and DoR/DoD alignment

- **Raised:** 2026-09-24 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** the governed `SETUP-SPIKE-000` closure act and the `V1-SM05` Issue/branch/State-1 PR sequence; `B-131` separately owns the remaining `DOR-R5`/`DOR-R6` evidence decision
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-24, receipt only. The parent-first order (setup closure, then the behaviour-to-proof map, then the Issue template, then native branch/PR) is queued for the Judge decision table; no setup closure, template or checkbox change is made by this acknowledgement.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Judge clarification supplied 2026-09-24; `D-156`, `D-242`, `D-244`, `D-248`, `D-252`–`D-256`; `V1-BUILD-SPEC.md` §1; `V1-PHASE-CLOSURE.md` §5; `docs/v1/work-packets/SETUP-SPIKE-000/S2.md`–`S4.md`; `docs/v1/work-packets/V1/V1-SM05.md`; `docs/LANE-B-WORK-ORDER.md` §7; `.github/PULL_REQUEST_TEMPLATE/v1-mmf.md`; `.github/workflows/ci.yml`; `docs/handoff/B-131-sm05-r5-r6-independent-review.md`; Graphify query at the commit below
- **Verified-At-Commit:** 17523ceb70c742b13b05e7b05c366af0fd0b30be

## What happened

The Judge clarified two intended outcomes:

1. close `SETUP-SPIKE-000` after moving every residual to one parent backlog owner outside the V1 delivery packets, so setup lifecycle no longer blocks `V1-SM05`; and
2. provide a guided, templated route from completed SM05 readiness into a GitHub Issue, branch and pull request, with behavior-derived xDD rules prepared before construction.

Both outcomes are achievable, but the proposed sequence needs two corrections. The repository has **no GitHub Issue template and no automated branch-creation workflow**: `.github/` currently contains the one-MMF pull-request template and `workflows/ci.yml` only. Also, Lane B cannot create executable tests while `Eligible`; `D-156` permits commits only by the `Active` lane, and `__tests__/` is Lane B's surface. State 1 may carry the accepted behavior-rule and evidence plan, while executable failing-first tests begin as Lane B's first State-2 construction unit after selection and activation.

## Current handoff accounting — facts only

| Handoff set | Current state | Completed fact | Remaining work |
|---|---|---|---|
| `B-120`, `B-125` | `Open`, Lane A acknowledged | Two-state readiness docket and post-DoR sequence are recorded | Issue, branch, State-1 PR, selection and work order do not yet exist |
| `B-121`, `B-122`, `B-126` | `Answered / Applied` | Their corrections were applied | Independent verification is not represented by `Applied` |
| `B-123`, `B-129` | `Answered / Verified` | R2–R4 feasibility and A01 setup-only classification are terminally verified | None in those entries |
| `B-124` | `Answered / Superseded` | The SM05 identity-compatibility gate was removed by `D-255` | None in that entry |
| `B-127`, `B-128`, `B-130` | `Answered`, no Resolution | Lane A answered and applied their governed decisions | They are not `Open`, but they also lack a terminal Resolution |
| `B-131` | `Open`, uncommitted | Lane B accepted R5 feasibility and recorded Judge acceptance of `W1`–`W3` | Lane A acknowledgement, explicit `W2` rule, and R6 evidence-standard disposition |
| `B-132` | `Open`, uncommitted | This parent-first closure/readiness reconciliation is drafted | Lane A acknowledgement and application of the accepted Judge choices below |

## Parent 1 — close the setup root through terminal transfer

### What is already complete

- `S0` and `S1` are completed setup evidence.
- `D-244` maps every `S2`–`S4` behavior to exactly one destination.
- The V1-bound behavior is already owned by `V1-SM05` or `V1-SM06`.
- The non-V1 residuals already have named destinations: the `D-171` held scope or the future V2-target backlog. No V2 version is opened by those targets.

### What is not complete

`D-248` superseded the earlier implication that transfer alone closed setup. `S2` remains `HELD`; `S3` and `S4` remain open. The root therefore remains open today.

### Closure package Lane A should apply if the Judge accepts Parent 1

1. Confirm that each `D-244` residual has one canonical parent owner and that no residual is duplicated in a V1 packet.
2. Record separate terminal dispositions for `S2`, `S3` and `S4`: transferred behavior receives **no setup DoD credit**; remaining behavior is terminally deferred or retired from the setup programme while retaining its parent backlog owner.
3. Record the Register act that closes the setup root under `D-248`'s stated condition.
4. Propagate the closure fact in the same pass to `V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, the three setup packet files and `Modular_PRD.md` §8.1. Preserve S0/S1 evidence and do not relabel the historical S2–S4 rows as V1 delivery.
5. State that the closure opens no V2 scope, earns no V1 DoD, selects no MMF and authorizes no construction.

This implements the new clarification without rewriting history: `D-244` remains the transfer record; `D-248` remains the rule that makes terminal disposition plus a Register act necessary.

## Parent 2 — complete the SM05 behavior-to-proof contract

At DoR completion, each accepted behavior must have a named DoD proof obligation and intended evidence class. The exact child-level xDD method remains Lane B's later build-governance choice under `D-242`.

| DoR input | Existing DoD proof obligation | Evidence class fixed before the Issue |
|---|---|---|
| `DOR-R1` pre-`T1` record/event contract | Behaviour by namespace; acceptance cases; persistence | Database integration and contract evidence |
| `DOR-R2` `OP-PITCH` atomic contract | Behaviour by namespace; refusal and replay | Atomicity, replay and idempotency evidence |
| `DOR-R3` `EW` refusal/retry contract | Refusal and replay; exclusions | Negative/refusal and legitimate-retry evidence |
| `DOR-R4` bounded Route-1 operations | Behaviour; refusal and replay; exclusions | Contract/integration evidence for admitted operations; absence evidence for deferred execution |
| `DOR-R5` accepted UI/visual contract | Display; accepted-contract traceability; persistence | UI walkthrough and record-to-visible-fact traceability |
| `DOR-R6` accepted Encyclopedia disposition | Accepted-contract traceability | Final vocabulary and artifact-currency review |

This table should be recorded once in the SM05 packet or its single canonical readiness owner. It should not generate duplicate DoD rows. A checked DoR proves that the input contract and verification route are ready; it does not claim that code or tests already exist.

`B-131` remains the owner of the final R5/R6 act: record `W1`–`W3`, make the `W2` downstream-evidence rule explicit, and choose its R6 Option 1 or Option 2. This entry does not duplicate that decision.

## Parent 3 — add the missing guided Issue template

The requested guided workflow should first be implemented as a **Lane A owned Issue template or Issue form under `.github/ISSUE_TEMPLATE/`**, not as a Lane C workflow. It should require:

- the selected packet ID and bounded business outcome;
- links to all checked or Judge-deferred DoR rows;
- the DoR→DoD table above and the planned evidence class for every behavior;
- explicit inclusions, exclusions, dependency status and local-only data boundary;
- approved branch name and base from `D-253`;
- the documentation-only State-1 PR boundary;
- planned Lane B construction children, with exact xDD method left for the later work order;
- the independent-verification and Judge-acceptance requirements; and
- a stop condition stating that the Issue creates no selection, work order, lane transfer or construction authority.

The completed template is readiness infrastructure. **Creating the actual Issue remains after every DoR row is complete**, as `D-254` requires. The Issue then records the completed evidence; it cannot be the evidence that made an incomplete DoR complete.

No automated branch-creation workflow currently exists. `D-253` selects native Git branching from the verified remote tip. If the Judge wants automation rather than that governed manual act, Lane A must first specify its inputs, permissions, refusal behavior and audit evidence; Lane C may then implement one separately authorized `.github/workflows/` unit. Do not infer that unit from `ci.yml`.

## Parent 4 — corrected Issue, branch, PR and xDD sequence

1. Complete Parent 1's terminal-transfer package and setup-root closure if accepted.
2. Resolve `B-131`; record the Judge's `W1`–`W3` answers and the selected R6 evidence standard.
3. Record Parent 2's compact behavior-to-proof table and create Parent 3's guided Issue template.
4. Check or Judge-defer every `DOR-R1`–`DOR-R6` row. At this point DoR is complete; no executable SM05 test or implementation file exists.
5. Create the single SM05 GitHub Issue from the guided template.
6. Create `features/feature-V1-SM05` by native Git branching from the verified remote tip and open the documentation-only State-1 PR attached to the Issue.
7. The Judge selects `V1-SM05`, approves the bounded work order and Lane A records Lane B `Active`; Lane A and Lane C become `Blocked`.
8. Move the PR to State 2. Lane B's first construction child creates the behavior-derived executable tests or other justified failing-first xDD evidence, then implements the behavior and completes the DoD evidence.
9. An independent non-builder verifies the result; the Judge accepts the business outcome. PR merge alone is not DoD.

Executable test scripts cannot be evidence used to make Lane B Active: only Lane B owns `__tests__/`, and Lane B cannot commit while merely `Eligible`. The **pre-activation evidence** is the accepted behavior-rule specification, DoR→DoD coverage and planned evidence class. The **post-activation evidence** is the executable xDD artifact and its result.

## Parent 5 — generic QA checklist disposition

| Supplied item | Repository disposition |
|---|---|
| Clear value, bounded scope, testability and feasibility | **Accept**; represented by SM05 anchors, exclusions, DoR and the behavior-to-proof map |
| Sized to one sprint/PR | **Accept with repository wording**; one MMF per PR, split and re-authorize if necessary |
| Clean code, input/secret safety, error paths and regressions | **Accept as QA envelope**; record in work order and PR evidence |
| Unit tests for every item | **Reject as universal**; Lane B chooses the fitting xDD method per child |
| “At least one or two” reviewers | **Reject as ambiguous**; retain one independent non-builder verifier plus Judge outcome acceptance |
| Shared staging requirement | **Reject for SM05 construction**; `D-252` makes construction local-only |
| PR context and resolved material feedback | **Approve**; the existing PR template already requires scope, test instructions and evidence |

## Judge decision table — parent first

| Order | Judge decision | Accept means | Reject means / consequence |
|---:|---|---|---|
| 1 | **Terminal-transfer closure of `SETUP-SPIKE-000`** | Lane A terminally dispositions S2–S4 without DoD credit, retains one parent owner per residual and records the root closure act | Setup remains open under `D-248`; SM05 may still proceed because namespaces are separate |
| 2 | **Behavior-to-proof coverage map** | Lane A records the compact R1–R6 map without duplicate DoD rows; Lane B retains exact xDD selection | The Judge must state the missing alignment rule before DoR can be called complete |
| 3 | **Guided Issue template** | Lane A creates a repository Issue template/form and propagates the new artifact under `D-54` | The Issue is created manually from the packet; no automation may be claimed |
| 4 | **Native branch creation** | Preserve `D-253`; branch manually by native Git after the completed Issue | Automated creation requires a separate Lane A specification and Lane C workflow authorization |
| 5 | **Tests after activation** | Planned behavior rules are State-1 readiness evidence; executable xDD begins as Lane B's first State-2 child | Creating tests before activation requires an explicit amendment to `D-156`, `D-252` and the lane surfaces; the current proposal has no legal executing lane |
| 6 | **`B-131` R6 evidence standard** | Choose its Option 1 or Option 2; Lane A then dispositions `DOR-R6` on that basis | R6 stays unchecked; Issue creation remains blocked |

## Step-by-step guide for Lane A

1. Acknowledge `B-131` and `B-132`; do not file the external C-003 draft as an unregistered turn report.
2. Record the Judge's decisions from the table above, starting with setup terminal transfer and closure.
3. Apply the closure package across the Register, Build Spec, Artifact Inventory, setup packets and `Modular_PRD` §8.1 in one pass.
4. Resolve `B-131`, including the explicit `W2` downstream-evidence rule and the selected R6 standard.
5. Add the behavior-to-proof table once and create the guided Issue template/form. Record the new artifact in all `D-54` tiers; frozen sources, application code, migrations and workflows remain unaffected.
6. Rebuild Graphify, confirm `lastAnalyzedHead` equals `HEAD` with `stale: false`, run `portable-check` and report the existing `B-041` ignored-runtime findings separately, then run the full local consistency suite.
7. Only after every DoR box is checked or Judge-deferred, create the Issue, native branch and documentation-only State-1 PR.
8. Stop for the Judge's selection and work-order act. Record Lane B `Active` before any executable test or application edit.

## What Lane B did instead

Lane B verified the current handoff headers, Register sequence, lane lock and `.github/` contents; reconciled the Judge clarification; revised this existing handoff instead of opening a duplicate; and stopped at the lane boundary. No canonical Lane A document, application file, test, Issue, branch, PR, workflow or lane state was changed.

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve-with-conditions** | Setup-root closure | Phase 1 / terminally disposition S2–S4, retain parent residual owners, then record the `D-248` closure act |
| **Approve** | R1–R6 behavior-to-proof map | Phase 1 / record once without duplicate DoD criteria |
| **Approve** | Guided GitHub Issue template/form | Phase 1 / Lane A creates it before the actual post-DoR Issue |
| **Approve** | Native branch and two-state PR sequence | Phase 1→2 / preserve `D-253` and `D-252` |
| **Approve-with-conditions** | Behavior-rule tests as first construction work | Phase 2 / only after Judge selection, work order and Lane B activation |
| **Defer** | Automated branch-creation workflow | Separate Lane A specification and Lane C authorization if the Judge still wants automation |
| **Reject** | Actual Issue as proof that DoR became complete; executable tests before Lane B is Active; claim that CI creates branches | They contradict `D-254`, `D-156`/`D-252`, and the repository's actual workflow set |
