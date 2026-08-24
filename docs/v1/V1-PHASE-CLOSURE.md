# `V1-PHASE-CLOSURE.md` — what closes a development phase, and who says so

**Created by `D-93`, 2026-08-21.** The `D-75` lane model runs three phases in a fixed order and
**never defined what ends one.** Sprints got an artifact Definition of Done (`D-19`); phases got
nothing, so a phase ended when Lane A said it ended — **the same shape `G32` exploited**, one
level up.

## 1. The four conditions

**A phase is closed when all four hold. Not three.**

| # | Condition | Checkable by |
|---|---|---|
| 1 | Its **artifact list exists** — every named file present | **§5A**, verified by `phase-manifest` (check 11) |
| 2 | Every handoff entry raised against it has reached a **terminal disposition** — `Answered` or `Withdrawn` | `bun run check` (check 10) plus **§6.3** |
| 3 | A **critic pass** has been performed **on a separate turn against the final artifact set**, and its weakness list is recorded | **§6.1** |
| 4 | **The Judge approves at the boundary** | the verdict row in **§6.6** |

**Section references corrected 2026-08-22 (`D-95`, raised as `B-006` item 4).** Conditions 2, 3
and 4 all pointed at **§3**, which is the critic-pass *discipline*, not the evidence. **A
condition that cites the wrong section cannot be checked by the person it is written for** — and
the Judge is exactly that person.

**Condition 3 now says "against the final artifact set" explicitly** (`B-006` item 1). The
previous resubmission carried a critic pass dated **before** the manifest, the new check and the
skill repair existed, so condition 3 was satisfied by a pass that had never seen most of what it
was certifying.

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

**Four states, and only the fourth is a reopening** — added 2026-08-22 (`D-95`, raised as
`B-004` and `B-010`). Conflating them is what produced the `D-94` contradiction:

| State | What it is | Opens a phase? |
|---|---|---|
| **Readiness feedback** | Read-only analysis; a handoff entry from the lane that must execute a proposal | **No** — it is evidence about what will deterministically fail |
| **Unauthorized lane activity** | A change to a lane's surface before its phase was validly opened | **No** — `43c51ce` is this |
| **Validly opened phase** | The first authorized change **after the preceding Judge boundary was accepted** | **Yes** |
| **Reopening** | A finding requiring work in a phase **that previously closed** | n/a — the phase reverts to open |

**`Reopens-Phase:` applies only to the fourth row.** A finding against a phase that is merely
*open* needs no mechanism; it is an ordinary entry.

**`C-19` enforcement installed 2026-08-22** (`D-95`, raised as `B-010`). It is **no longer
vacuous**: `B-004` and `B-005` carried `Reopens-Phase: 1` against a phase that never closed, and
the check reports exactly that. **`C-19` could not be both "install it in the closing pass" and
"a residual carried past closure"** — `B-010` was right that those are incompatible.

## 5. Phase register

| Phase | Lane | Status | Closed | Judge | Reopened by |
|---|---|---|:---:|---|---|
| **1 — Orchestration** | A | **Open — never closed.** `DEFER` returned 2026-08-22; resubmission in preparation | — | Robert Tan — **`DEFER`**, §6.6 | **n/a — see below** |
| **2 — Application** | B | **Not validly opened.** Unauthorized implementation activity occurred at `43c51ce`; further work deferred | — | — | — |
| **3 — CI/CD** | C | Not started | — | — | — |

**Phase 2 started while Phase 1 is open, and that is a finding, not a note.** `D-75` says the
lanes run *sequentially, one at a time*. See §6.

**Reconciled 2026-08-22 (`D-94`, raised as `B-004`). Four statements in this file described the
same state and could not all be true:** this row said *"closure pending"*, §6.4 said *"Pending"*
beneath a filled `DEFER` verdict, this row's Judge field was blank while a Judge had ruled, and
Phase 2 read *"Started"* with no record of what started it.

**Corrected again 2026-08-22 (`D-95`, raised as `B-006` items 5 and 6). The previous
reconciliation replaced four contradictory statements with a fifth contradiction.** It said a
phase starts *"after the preceding Judge boundary is accepted"* **and** that `43c51ce` — which
predates any acceptance — started Phase 2. **Both cannot hold: an act cannot open a phase by a
rule it violates.**

**The normalized state, and it is less flattering:** *unauthorized Lane B implementation activity
occurred at `43c51ce`; **Phase 2 was never validly opened.*** The commit stands as immutable
history and its **interpretation** is corrected prospectively — which is the only correction an
append-only record permits.

**Phase 1 is not "Reopened" either.** `D-94` recorded it as reopened by `B-004`/`B-005`, but
**reopening presupposes a closure that never happened.** The `Reopens-Phase:` field is for a
phase that closed; those two entries were **findings against an open phase**, which needs no
mechanism at all. The register's *Reopened by* cell now reads **n/a**, and §4's own wording is
tightened below.

**`DEFER` is not a failed close.** It is the Judge exercising the role `D-93` created, on the
first occasion it existed to be exercised.

## 5A. Phase 1 artifact manifest — `D-94`

**The Judge deferred Phase 1 because this did not exist.** §1 condition 1 says *"its artifact
list exists — checkable by `ls`"* and **no artifact list was ever written.** The condition was
asserted and never evidenced: `a_check_that_cannot_fail` inside the closure specification itself,
one pass after that specification was written to prevent exactly this.

**What this manifest is.** The governance artifacts **Phase 1 was chartered to produce** — not
every file on Lane A's surface. `V1-ARTIFACT-INVENTORY.md` remains the **living** record and this
is a **snapshot**; where they differ, the inventory is current and this is history.
**`phase-manifest` (`C-14` check 11) verifies every path below exists**, so the list is checked
rather than claimed.

### 5A.1 Governance tracking

| Path | Delivers |
|---|---|
| `docs/v1/V1-DECISION-REGISTER.md` | The arbitration authority (`D-58`) |
| `docs/v1/V1-BUILD-SPEC.md` | Scope, sequence, sprint DoD |
| `docs/v1/V1-ARTIFACT-INVENTORY.md` | What must exist |
| `docs/v1/V1-PHASE-CLOSURE.md` | This file — phase closure, critic pass, Judge record |
| `docs/v1/drafts/README.md` | The hold location for migrations that must not be applied (`G27`) |

### 5A.2 Lane A's authoritative surfaces

| Path | Delivers |
|---|---|
| `docs/CONFIG_LOG.md` | Every configurable value, its source, its `OD` |
| `docs/DECISION_LOG.md` | The ratification ledger |

### 5A.3 The handoff channel

| Path | Delivers |
|---|---|
| `docs/handoff/README.md` | How a build lane talks back (`D-90`, `D-92`) |
| `docs/handoff/TEMPLATE.md` | Entry template, including `Reopens-Phase:` |

### 5A.4 Rule files and lane environments

| Path | Delivers |
|---|---|
| `CLAUDE.md` | Lane A rule file + shared core + critic discipline |
| `AGENTS.md` | Lane B rule file + shared core + Lane B entry point |
| `.agents/rules/graphify.md` | Lane C rule file + shared core + Lane C entry point |
| `.github/WORKFLOWS-SPEC.md` | Lane C's work order |
| `.claude/skills/sync-docs/SKILL.md` | The `D-54` propagation procedure |
| `.claude/settings.json` | Session hooks (`D-81`) |
| `.codex/hooks.json` | Codex hook configuration |

### 5A.5 Detection apparatus — `C-14`

| Path | Delivers |
|---|---|
| `scripts/check-consistency.mjs` | The runner |
| `scripts/checks/shared-core-hash.mjs` | Rule-file core + preamble identity |
| `scripts/checks/tier-sweep.mjs` | `D-54` arrival, register → tiers |
| `scripts/checks/source-sweep.mjs` | The inverse — governing docs → tiers (`G70`) |
| `scripts/checks/duplicate-ids.mjs` | §5.1 ID collisions |
| `scripts/checks/decision-status.mjs` | Bidirectional decision/gap cross-reference |
| `scripts/checks/graph-coverage.mjs` | Every `docs/` file reachable in the graph |
| `scripts/checks/docs-drift.mjs` | Graph vs `HEAD` |
| `scripts/checks/settings-parse.mjs` | Settings cascade parses |
| `scripts/checks/lane-boundary.mjs` | `D-75` crossings made visible |
| `scripts/checks/handoff-response.mjs` | Lane feedback gets read |
| `scripts/checks/phase-manifest.mjs` | **This manifest is real** (`D-94`) |
| `scripts/lane-gate.mjs` | Commit-time lane classification (`D-88`) |
| `.githooks/commit-msg` | The declared-crossing gate |

### 5A.6 Deliberately NOT in the manifest

**Naming what is excluded is half of a manifest's value.**

| Path | Why excluded |
|---|---|
| `.agents/skills/sync-docs/SKILL.md` | **Removed** — a divergent duplicate of the tracked skill (`B-005`, §6.1 **`F8`**) |
| `.github/workflows/ci.yml` | **Lane C's surface.** Present and working, but Phase 3's artifact, not Phase 1's |
| `docs/graph-fragments/frag*.json` | Curated-graph inputs, appended continuously; not a fixed deliverable |
| `docs/journal/`, `docs/source/`, `docs/governance/` | Inputs Phase 1 consumed, not artifacts it produced |
| `lib/`, `app/`, `__tests__/` | Lane B's surface — see §5B on the Phase 2 overlap |

## 5B. Phase boundaries — when a phase starts — `D-94`, raised as `B-004`

**A phase starts at the first authorized change to that lane's owned surface after the preceding
Judge boundary is accepted.** Two consequences, and the second is the one that was wrong here:

1. **Readiness feedback does not start a phase.** Read-only analysis and handoff entries from the
   lane that must execute a proposal are **evidence about what will deterministically fail** —
   not permission to begin. `B-001`–`B-003` did not start Phase 2.
2. **Commit `43c51ce` did.** It added `lib/config/build-config.ts` and
   `__tests__/build-config.test.ts` and removed the Stripe handlers, library and environment
   keys. **Phase 2 started early, and part of non-feature S0 was completed.**

**The accurate state is not "Lane B never started."** It is: *readiness feedback came first,
partial S0 implementation followed, feature development did not start, and further Lane B work is
deferred pending the Phase 1 verdict.*

**`43c51ce` is preserved as historical evidence and is not rewritten.** Re-describing a landed
commit as something else would be the audit-trail defect this project's own product forbids.

### 5B.1 The proposal contract — what a Lane A proposal must state

Raised by `B-004` and adopted. Every Lane A proposal names: **intended outcome · deterministic
failure condition · cause · preventive control · observable success criterion · proving evidence
or negative test · owner · return path.**

Lane B implements **only accepted semantics** and raises missing authority rather than guessing.
Lane C automates the accepted evidence and **proves a deliberate failure stops the gate** — the
`SC-4` discipline, which is the test of the tester.

### 5B.2 Residual risk, and a limit no process can move

**The Judge accepts residual risk. An agent cannot.** No agent in this repository acquires human
*skin in the game*, and none can accept legal, financial, or editorial liability. **That is why
the Judge is a person and why the role could not have been given to a fourth agent** — the
rejected option in `D-93` would have failed on this ground even if it had failed on no other.

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
| **F7** | **The closure specification asserted a condition it never evidenced.** §1 condition 1 requires an artifact list *"checkable by `ls`"* and **no list was written** — so condition 1 could not fail, one pass after this document was created to stop exactly that. **Found by the Judge, on the first occasion the role existed.** Neither Lane B nor the critic pass caught it: the critic read the artifacts the phase produced and never asked whether the list of them existed | **Judge — `DEFER`, 2026-08-22** | Corrected — §5A, and `phase-manifest` (check 11) makes it falsifiable |
| **F8** | **A divergent duplicate of the propagation skill was untracked, and the tracked original was stale.** `.agents/skills/sync-docs/SKILL.md` was a Codex-adapted copy in which `CLAUDE.md` had been swapped to `AGENTS.md` mechanically, producing *"`AGENTS.md`, `AGENTS.md`, `.agents/rules/graphify.md`"* as the triple edit and *"Lane A — Codex"* as the lane map. **Following it found worse:** the tracked `.claude/skills/sync-docs/SKILL.md` **still carried `D-75`'s pre-`D-84` lane map** — `scripts/` and `.gitattributes` in Lane C — **and the obsolete `7/7` / `5/5` tallies.** *The procedure that teaches propagation was never propagated to* | **`B-005`, raised by Lane B** | Duplicate removed; original corrected to **cite** the lane map rather than restate it |
| **F6** | **`G75` was closed for check counts and the same class survives elsewhere.** The shared core states *"bun and its 413 pinned packages"*. Removing `stripe` this pass **happened not to change that number** — which is luck, not design: a routine dependency change can invalidate a literal in the file every agent reads first, and **nothing detects it.** `G75` removed one tally and did not sweep for others | Lane A critic pass | **Open** — `C-21` |

### 6.2 What the critic pass did not find

**Nothing about the checks themselves, the graph, or the lane map.** That is worth stating
plainly rather than presenting as a clean bill: those are the parts the existing controls already
cover, so a critic pass finding nothing there is **the controls working, not the critic looking**.

### 6.3 Measurements — `P4`

| Measure | Phase 1 |
|---|---|
| Handoff entries raised | `B-001`–`B-005`, all `Answered` |
| **Blocking waits** — a lane stopped and waited | `B-002`, `B-003`, `B-004` |
| Findings raised by **another lane** | `F1`, `F2`, `F3`, `F8` |
| Findings raised by the **critic pass** | `F4`, `F5`, `F6` |
| Findings raised by the **Judge** | `F7` |
| **Findings dismissed** | **0** — every one stands, see §6.1 |
| Defects in Lane A's own output | `F1`, `F2`, `F3`, `F7`, `F8` |
| **Phases reopened** | **1** — Phase 1, by `B-004` and `B-005` |
| Residuals carried past closure | `C-19`, `C-20`, `C-21`, `C-17`, `C-18`, `G73`, `G72` |

**Most entries were blocking waits.** `D-86` accepted that cost explicitly — a blocking wait over
a split commit — and **this is the first time it has been recorded rather than assumed.**

**The Judge found what neither the raising lane nor the critic found**, and the reason is
instructive: **the critic read the artifacts the phase produced and never asked whether the list
of them existed.** A critic reading artifacts checks the contents of a set; only someone asked to
*accept* the set asks whether the set is defined. **That is an argument for the Judge being a
separate role, made by the first exercise of it.**

**Most findings are defects in Lane A's own output, and another lane or the Judge found every one
of them.** *(This paragraph said "half … all three of them" after the finding set had grown past
three — `B-006` item 7. **A count restated beside a list that grows is `G55`'s mechanism in
prose**, and it appeared in the very section that reports the finding counts.)*

That is the strongest evidence for `D-93`: the critic role was not added because a process
document recommended it, but because **the phase about to be declared complete contained
contradictions its author could not see and readers found immediately.**

**Zero findings were dismissed — and that is reported, not celebrated.** A pass in which the
critic agrees with everything is the failure mode; a pass in which the author accepts everything
is a weaker version of the same thing. **The Judge should treat unanimity as a question.**

### 6.4 Verification snapshot — `D-94`

**The Judge's second deferral condition.** The previous submission reported *"10/10 checks pass"*
in a chat message and nowhere in this document. **A verdict cannot rest on evidence the record
does not hold.**

| Item | Value |
|---|---|
| Verified | 2026-08-22, on the tree committed as the resubmission |
| Branch | `docs/journal-2026-08-16` |
| Predecessor commit | `eb1549d` — the submission the Judge deferred |
| Consistency checks | **11/11 pass**, `bun run check` |
| Check added this pass | `phase-manifest` — **negative-tested four ways**, §6.5 |
| Manifest paths verified | 30, with 3 declared exclusions |
| Curated graph | rebuilt and re-merged; `docs-drift` reports synced at `HEAD` |
| Untracked files in the governed set | **none** — `.agents/skills/` removed (`F8`) |

**Reproduce it with two commands**, both of which fail loudly rather than silently:

```bash
bun run check
```

```bash
npx graphify hook-rebuild
```

**Three checks report SKIP in CI and run only here** — `graph-coverage` and `docs-drift` read
gitignored `.graphify/`, `source-sweep` needs full history. **A lower CI total is correct, not a
regression**, and no total is restated in this document beyond this snapshot's own dated row.

### 6.5 Negative tests for `phase-manifest`

**A check installed to satisfy a deferral is exactly the check most likely to be ceremonial.**
Four tests, all run, all probes removed:

| Test | Expected | Result |
|---|---|---|
| A manifest path that does not exist | FAIL | ✅ named the path |
| An exclusion recorded **Removed** but present and tracked | FAIL | ✅ named the contradiction |
| A **scope** exclusion present and tracked (`ci.yml`) | **PASS** | ✅ did not fire — presence says nothing about scope |
| A manifest section with no rows | FAIL | ✅ an empty list would satisfy *"every path exists"* trivially |

**The third test is the one that matters.** The first implementation flagged `ci.yml` — correctly
excluded as Lane C's artifact — because it conflated *"this was removed"* with *"this belongs to
another phase."* **A check that reports a disagreement true by design teaches people to ignore
it.**

### 6.6 Judge

**Resubmitted 2026-08-22.** Phase 1 does not close until a new row is added below. **`DEFER` is
recorded permanently; it is not overwritten by the resubmission** — an issued verdict is
superseded by a new one, never edited.

| Judged by | Date | Verdict | Conditions |
|---|---|---|---|
| Robert Tan | 2026-08-22 | **DEFER** | No exact Phase 1 artifact manifest and reviewed verification snapshot are identified. Reconcile the Phase 1/Phase 2 status, verify the corrected manifest, rerun Graphify and the consistency checks, and resubmit. |
| — | — | *awaiting the resubmission verdict* | — |

**Every deferral condition, and where it was answered:**

| Condition | Answered in |
|---|---|
| No exact Phase 1 artifact manifest | **§5A** — 30 paths, 3 declared exclusions, verified by check 11 |
| No reviewed verification snapshot | **§6.4** — dated, commit-pinned, reproducible in two commands |
| Reconcile the Phase 1 / Phase 2 status | **§5 and §5B** — four contradictory statements resolved by one phase-start rule |
| Verify the corrected manifest | **§6.5** — `phase-manifest` installed and negative-tested four ways |
| Rerun Graphify and the consistency checks | **§6.4** — 11/11, graph rebuilt and re-merged |
