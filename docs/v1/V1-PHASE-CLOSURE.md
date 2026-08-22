# `V1-PHASE-CLOSURE.md` — what closes a development phase, and who says so

**Created by `D-93`, 2026-08-21.** The `D-75` lane model runs three phases in a fixed order and
**never defined what ends one.** Sprints got an artifact Definition of Done (`D-19`); phases got
nothing, so a phase ended when Lane A said it ended — **the same shape `G32` exploited**, one
level up.

## 1. The four conditions

**A phase is closed when all four hold. Not three.**

| # | Condition | Checkable by |
|---|---|---|
| 1 | Its **artifact list exists** — every named file present | `ls`, per `D-19` |
| 2 | Every handoff entry raised against it has reached a **terminal disposition** — `Answered` or `Withdrawn` | `bun run check` (check 10) plus §3's table |
| 3 | A **critic pass** has been performed **on a separate turn**, and its weakness list is recorded in §3 | the recorded list |
| 4 | **The Judge approves at the boundary** | the signed row in §3 |

**Condition 2 raises the bar that check 10 sets.** During a phase, `Acknowledged` and still
`Open` passes — a queue is healthy, and a check red in the normal case is one people stop
reading. **At closure it does not pass.** Acknowledging is not answering, and the difference is
exactly what a phase boundary is for.

## 2. The roles — `D-93`, resolving `P0`

**The development lane model had three proposers and no critic.** Lane A wrote the specs, wrote
the checks that verify the specs, and judged whether its own output passed. `D-82` recorded this
as *"`D-75` cannot enforce itself"*; every control added since detects **shape**, never
**judgment**.

| Role | Held by | Acts |
|---|---|---|
| **Proposer** | Lane A, B, C | continuously, within its own surface |
| **Critic** | **Lane A, on a separate turn** | once per phase, against the phase's artifacts |
| **Judge** | **the user** | once per phase boundary — three times in the whole build |

**The critic is a role, not a fourth agent.** A fourth agent means a fourth surface, a fourth set
of crossing boundaries, and a fourth phase — the cure becoming the disease. **The cost of the
role instead of the agent is stated, not hidden: the critic shares the proposer's blind spots.**
The mitigations are the separate turn, the reject budget below, and the Judge being someone else
entirely.

**The Judge acts at boundaries only.** A judge invoked per decision becomes a rubber stamp,
which is the failure this apparatus exists to catch arriving by convenience.

> **This is the development lane model. It is NOT the product's Three Lines** (`OD1`–`OD3`) and
> **NOT `OD4`** — which remains **rejected for v1**. `OD4`'s Proposer → Critics → Judge shape is
> the same *source principle* applied to a different *subject*, exactly as `D-75` is for the
> Three Lines. **Do not cross-reference the two vocabularies**, and do not read this file as
> evidence that `OD4` returned.

## 3. Critic pass — the discipline

1. **Separate turn from the work being criticised.** A critic pass appended to the pass that
   produced the work is the author checking their own summary.
2. **Read the artifacts, not the summary of them.** `summary_outlived_source` is the named
   failure; the phase's own closure narrative is exactly the wrong input.
3. **Zero findings is itself reported as a finding.** A critic pass that never rejects is
   `a_check_that_cannot_fail` wearing a different hat. **The reject count is the health metric
   of this mechanism** — not the pass rate.
4. **Findings that are already fixed still get recorded**, with the fix. A weakness deleted
   from the record leaves no evidence the critic worked.

## 4. Reopening a closed phase — `Reopens-Phase:`

**Phases run 1 → 2 → 3, and findings do not.** A Lane B finding in Phase 2 can require Lane A
work in a phase already closed. Before `D-93` there was **no way to record that**, so the choice
was an undeclared reopening or a dropped finding.

A handoff entry that needs work in a closed phase carries:

```
- **Reopens-Phase:** 1
```

The named phase's §5 row is then marked **Reopened**, with the entry cited. **A reopened phase is
not a failure** — it is the return path working. A phase that is never reopened across a whole
build is more likely to mean findings were dropped than that none existed.

**No check enforces this yet, deliberately.** No phase is closed, so a check would pass on every
run without reading anything — a `probe_that_cannot_fail`, the same reasoning that deferred
`C-17`. **Install it in the pass that closes the first phase**, carried as `C-19`.

## 5. Phase register

| Phase | Lane | Status | Closed | Judge | Reopened by |
|---|---|---|:---:|---|---|
| **1 — Orchestration** | A | **Open — closure pending** | — | — | — |
| **2 — Application** | B | **Started 2026-08-21** | — | — | — |
| **3 — CI/CD** | C | Not started | — | — | — |

**Phase 2 started while Phase 1 is open, and that is a finding, not a note.** `D-75` says the
lanes run *sequentially, one at a time*. See §6.

## 6. Phase 1 — critic pass

**Performed 2026-08-21 by Lane A, against the Phase 1 artifacts.** Recorded in full; nothing
below was deleted for being fixed in the same pass.

### 6.1 Findings

| # | Finding | Source | Disposition |
|---|---|---|---|
| **F1** | **`D-91` contradicted itself across two tiers.** The register said the `0002` draft *"stays unwritten"*; the build spec row `D-91` wrote in the same pass listed the draft path as an S0 **Lane B artifact**. A derived tier was made to disagree with the register **by the decision that set the register's text** | **`B-001`, raised by Lane B** | Corrected — see `D-93` |
| **F2** | **`CONFIG_LOG.md` was declared authoritative while incomplete.** It shipped with no rows for `EDITORIAL_ROUTE`, `POC_ROUTE` or `DOMAIN_APEX` — values already decided by `D-59` — and with `FLAG_S1`…`FLAG_S9` carrying neither canonical names nor Phase 0 values. **"Rows are authoritative" plus a missing row is an instruction to stop**, which is what Lane B correctly did | **`B-002`, raised by Lane B** | Corrected — see `D-93` |
| **F3** | **Lane A removed a dependency's consumers and left the dependency.** S0 required Stripe scaffolding removed; `package.json` and the lockfile still carried `stripe`, and those are Lane A's under `D-86`. Lane B could complete only its own half and had to stop | **`B-003`, raised by Lane B** | Corrected — see `D-93` |
| **F4** | **Phase 2 began before Phase 1 closed.** `D-75` requires sequential phases; nothing enforces the order, and no artifact said Phase 1 was still open. **`D-82` recorded that the lane model cannot enforce itself; this is that gap in the phase dimension rather than the surface dimension** | Lane A critic pass | **Open** — `C-20` |
| **F5** | **Lane A shipped three defects into a phase it was about to declare complete, and its own checks caught none of them.** Every check verifies *arrival* — that a claim reached a tier, that a file exists, that a hash matches. **None verifies that what arrived is correct.** The `G65` arrival-not-correctness limit was recorded for one check and is in fact a property of the whole apparatus | Lane A critic pass | **Open — stated limit**, not a defect to fix |
| **F6** | **`G75` was closed for check counts and the same class survives elsewhere.** The shared core states *"bun and its 413 pinned packages"*. Removing `stripe` this pass **happened not to change that number** — which is luck, not design: a routine dependency change can invalidate a literal in the file every agent reads first, and **nothing detects it.** `G75` removed one tally and did not sweep for others | Lane A critic pass | **Open** — `C-21` |

### 6.2 What the critic pass did not find

**Nothing about the checks themselves, the graph, or the lane map.** That is worth stating
plainly rather than presenting as a clean bill: those are the parts the existing controls already
cover, so a critic pass finding nothing there is **the controls working, not the critic looking**.

### 6.3 Measurements — `P4`

| Measure | Phase 1 |
|---|---|
| Handoff entries raised | 3 — all three `Answered` in the same pass |
| **Blocking waits** — a lane stopped and waited | **2** (`B-002`, `B-003`) |
| Findings raised by **another lane** | 3 |
| Findings raised by the **critic pass** | 3 |
| **Findings dismissed** | **0** — every one stands, see §6.1 |
| Defects in Lane A's own output | **3 of 6** (`F1`, `F2`, `F3`) |
| Residuals carried past closure | `C-19`, `C-20`, `C-21`, `C-17`, `C-18`, `G73`, `G72` |

**Two of three entries were blocking waits.** `D-86` accepted that cost explicitly — a blocking
wait over a split commit — and **this is the first time it has been counted rather than assumed.**

**Half the findings are defects in Lane A's own output, and Lane B found all three of them.**
That is the single strongest piece of evidence for `D-93`: the critic role was not added because
a process document recommended it, but because **the phase about to be declared complete
contained three contradictions its author could not see and a reader found immediately.**

**Zero findings were dismissed — and that is reported, not celebrated.** A pass in which the
critic agrees with everything is the failure mode; a pass in which the author accepts everything
is a weaker version of the same thing. **The Judge should treat unanimity as a question.**

### 6.4 Judge

**Pending.** Phase 1 does not close until the row below is filled.

| Judged by | Date | Verdict | Conditions |
|---|---|---|---|
| — | — | — | — |
