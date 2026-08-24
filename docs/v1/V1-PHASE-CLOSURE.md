# `V1-PHASE-CLOSURE.md` — what closes a development phase, and who says so

**Created by `D-93`, 2026-08-21.** The `D-75` lane model runs three phases in a fixed order and
**never defined what ends one.** Sprints got an artifact Definition of Done (`D-19`); phases got
nothing, so a phase ended when Lane A said it ended — **the same shape `G32` exploited**, one
level up.

## 0. The operating model — Judge ruling, `D-100`. **Read this before §1**

**This is an approved project.** The spec-acceptance boundary **is not a fresh approval gate** —
it exists only to let Lane B or Lane C **proceed with work**. The approval is standing; the
boundary is permission to start, not permission to exist.

**The cycle across Lanes A, B and C is continuous.** It does not stop at a phase edge:

```
Lane A writes / refines specs
        │
        ▼
   permission to proceed  ──►  Lane B / Lane C work
        ▲                              │
        │                              ▼
   backlog refinement  ◄──  feedback, gaps, defects
```

**Feedback arriving against running work goes to the top of the backlog.** It **does not halt the
work and does not invalidate the spec.** This is Scrum, not a stage gate — and the backlog is
where a gap is held while it waits its turn.

**Gaps close progressively, through spec refinement.** The governing phrases are already in this
project's own vocabulary: **"keep things simple and practical"**, and ITIL 4's **"start where you
are"**, which the sprint plan cites at S0.

### What this corrects — stated plainly, because it is Lane A's error

**Lane A had been building a stage-gate model onto a project the Judge runs as Scrum.** Phase
closure conditions, exits, deadlocks, serialization enforcement — **each was a reasonable answer
to the wrong question.** The symptoms were visible for three passes and read as individual
defects rather than as one mismatch:

| Symptom | What it actually was |
|---|---|
| A deadlock between "Phase 1 must close" and "Lane B may not act" | A stage gate imposed on a continuous cycle |
| `C-20` designed to enforce strict serialization | **Enforcing the opposite of the operating model** |
| Feedback treated as reopening a phase | Feedback is a **backlog item** |
| Escalating every gap to the Judge before proceeding | Refinement is continuous; **the Judge rules at boundaries, not at every gap** |

**`C-20` is withdrawn, not deferred** — see `§1.3`. **A control that enforces something the
operating model does not want is worse than a missing one.**

### The backlog

**`docs/handoff/` already is the backlog.** Entries are raised by a working lane, dispositioned by
Lane A, and ordered by whoever is refining. **No new artifact is created for this** — adding one
would repeat the mistake this ruling corrects.

**`bun run check` reports the queue depth; it does not fail on a healthy one.** That was already
right (`D-90`), and it is right for the same reason Scrum does not treat a full backlog as a
defect.

## 1. The closure conditions

**A phase is closed when all five hold.** *(Four until the Judge added the fifth on 2026-08-22 —
`D-96`, §1.1. The number is stated here because this table **is** the list, not a restatement of
one held elsewhere.)*

| # | Condition | Checkable by |
|---|---|---|
| 1 | Its **artifact list exists** — every named file present | **§5A**, verified by `phase-manifest` (check 11) |
| 2 | Every handoff entry **raised against it** has reached a **terminal disposition** — `Verified`, `Deferred` (with an owner), `Withdrawn`, or `Superseded` (with the overtaking decision). **`Applied` is deliberately NOT terminal** (`D-102`): it means the fix is in the tree and nobody independent has confirmed it | `closure-readiness` (check 13), **phase-scoped** since `D-102`; the entries themselves in `docs/handoff/` |
| 3 | A **critic pass** has been performed **on a separate turn against the final artifact set**, and its weakness list is recorded. **NOT MET (`D-102`, raised as `B-013`)** — §6.1b reviewed `de3b7df`, which is not the final set; the pass against `983f058` was performed by **Lane B**, and `D-93` assigns the Critic role to Lane A | **§6.1c** — Lane B's independent review of `983f058`. **§6.1b** reviewed `de3b7df`; **§6.1** is earlier still, superseded not deleted |
| 4 | **The Judge approves at the boundary** | the verdict row in **§6.6** |
| 5 | **The sprint work is complete — including other lanes' work against this phase's specs.** For Phase 1: all specs written, **and** Lanes B and C complete with no outstanding gaps (`D-96`, rescoped by `D-98`, **restored and widened by `D-99`**) | **§1.1b** |

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

## 1.1 Sprint completeness gates the phase — Judge ruling, 2026-08-22 (`D-96`)

**The Judge ruled: S0 incompleteness blocks Phase 1.**

This was a real open question, not a formality. **Phases and sprints are different scopes** — the
argument for letting them float free is that a phase governs *which lane may act* while a sprint
governs *what gets built*, and `D-94` used exactly that reasoning to call the build spec
unaffected. **The ruling closes it in the other direction:** Phase 1 cannot close while the sprint
it was supposed to enable is incomplete.

**What this makes concrete.** `config-coupling` (check 12) reports **13 authoritative
`CONFIG_LOG.md` rows with no implementation** — the two routes, `DOMAIN_APEX`,
`FLAG_LINE3_ENABLED` and the nine sprint flags. Under this ruling that red check is not a
background residual: **it is a closure blocker with a name.**

**Condition 5, added to §1:**

> **5. The sprint the phase enables is complete** — for Phase 1, S0. `bun run check` must be
> green on `config-coupling`, because a red one *is* the statement that S0 is unfinished.

**The uncomfortable consequence, stated rather than buried.** Phase 2 was never validly opened
(§5B), so **Lane B cannot implement the 13 rows without acting outside an opened phase** — the
same defect `43c51ce` already committed. **Closing Phase 1 requires work only Lane B may do, and
Lane B may not act until Phase 1 closes.**

**Superseded by `D-98` — see §1.1a.** The deadlock was not structural: **condition 5 was
mis-scoped by Lane A**, and a phase whose charter excludes code cannot carry a closure condition
that requires code. **Exit 1 is withdrawn; exit 2 turned out to be the correct reading rather than
an exception.** The three exits are retained below as the record of how it was analysed while the
error stood.

**This was recorded as a genuine deadlock for the Judge to break**, not Lane A's to route around.
Three exits were offered, and Lane A recommended the second:

| Exit | What it costs |
|---|---|
| Judge authorizes a **scoped Lane B pass** for S0's remaining config work, explicitly bounded, before Phase 1 closes | One declared, recorded exception to phase order |
| Judge **accepts Phase 1 on the orchestration artifacts** and moves S0's completion into Phase 2's opening | Phase 1's DoD stops meaning "S0 done"; sprints and phases decouple again |
| Lane A implements the 13 rows | **Rejected — a lane crossing into `lib/`, and the reason `D-75` exists** |

## 1.1a What condition 5 actually means — `D-98`. **SUPERSEDED by `D-99`, §1.1b**

> **Retained as the record of a wrong turn, per `D-93` rule 4.** Lane A narrowed condition 5 to
> escape a deadlock; the Judge rejected the escape. **The deadlock was in the phase-START rule,
> and this section loosened the phase-CLOSE condition instead** — weakening the model exactly
> where it needed to stay strict. Read §1.1b for the governing text; everything below is history.

**Asked: "which phases require exit 1 and exit 2?" The answer is neither, and the question is what
exposed why.**

**Condition 5 was mis-scoped when written.** It said *"the sprint the phase enables is complete"*
and was read as *the sprint in its entirety*. **The correct reading is the sprint work this
phase's own lane owed** — and the evidence was already in the file every agent reads first:

> `CLAUDE.md`: **"Phase 1 (Lane A) is specs and governance, *not* code."**

**A phase whose charter excludes code cannot have a closure condition that requires code.**
Under the corrected reading, exit 2 is **not an exception — it is the definition**, and exit 1 is
not needed at all.

| Phase | Lane | What its lane owed the sprint | Exit needed |
|---|---|---|---|
| **1 — Orchestration** | A | S0's governance half: `CONFIG_LOG.md`, `DECISION_LOG.md`, the `0002` hold location. **Complete** | **None** — condition 5 is met once read correctly |
| **2 — Application** | B | S0's code half — `build-config.ts`, `flags.ts`, the routes and canonical flags — then S1–S4 | **None** — entirely within its own lane, so condition 5 is directly satisfiable |
| **3 — CI/CD** | C | `.github/workflows/` only: `C-Q1` `fetch-depth: 0`, `C-Q2` the ASCII job rename | **None of these two.** `C-Q2` is blocked by `C-18` — a branch-protection act **no lane owns** |

**So the deadlock was never structural.** It was a scoping error in Lane A's own condition, and
`§1.2`'s exit 2 was the right answer for the wrong reason: **not a concession, a correction.**

**Exit 1 is withdrawn, not merely un-chosen.** Authorizing a lane to act inside an unopened phase
would have created a standing precedent to solve a problem that did not exist. **Recorded so it
is not reached for the next time a boundary looks stuck.**

**`C-18` is a different species and stays open.** It needs a repository-settings act, which is
neither a lane's work nor a phase exception — it is the Judge's, and `D-96` §5B.2 already records
why an agent cannot hold it.

**The generalized rule, now binding:**

> **Condition 5 is satisfied by the sprint work the closing phase's own lane owed.** Work the
> sprint assigns to a *different* lane belongs to *that* lane's phase and is carried forward as
> named opening debt — never as a blocker on a phase that may not perform it.

## 1.1b The phase model corrected — Judge ruling, `D-99`. **This supersedes `D-98`.**

**Ruling: Phase 1 cannot close until all specs are written *and* Lane B and Lane C have completed
their tasks and the gaps those specs surfaced.**

**`D-98`'s rescoping is withdrawn.** Lane A narrowed condition 5 to *"the sprint work this
phase's own lane owed"* in order to escape a deadlock. **The Judge rejected the escape and the
reason is instructive: Lane A fixed the wrong rule.**

### Where the deadlock actually came from

| Rule | `D-98` assumed | Correct |
|---|---|---|
| **Phase CLOSE** — condition 5 | Only your own lane's half | **The whole sprint, including other lanes' work against your specs** |
| **Phase START** — §5B | A phase opens after the preceding phase's Judge boundary is accepted | **A phase opens when the specs its lane needs are accepted** |

**The deadlock lived in the START rule, not the CLOSE condition**, and `D-98` loosened the close
condition to compensate. **Loosening the wrong rule made the model weaker in exactly the place it
needed to stay strict** — a governance phase that closes before its governance has been executed
against has proven nothing.

### Phase 1 opens first and closes last

**Phase 1 is an envelope, not a segment.** Orchestration is not finished when the specs are
written; **it is finished when the specs have survived execution.**

| Phase | Opens when | Closes when |
|---|---|---|
| **1 — Orchestration** | **First.** At project start | **Last.** All specs written, **and** Lanes B and C complete against them with no outstanding gaps |
| **2 — Application** | The specs Lane B needs are accepted by the Judge — **not** when Phase 1 closes | Its own tasks and its gaps are complete |
| **3 — CI/CD** | The specs and dependencies Lane C needs are accepted — **not** when Phase 2 closes | Its own tasks and its gaps are complete |

**`D-75`'s "sequential, one at a time" is unchanged.** Lanes still act one at a time; what changes
is that **a lane's turn begins on spec acceptance rather than on a predecessor's closure.**

### What this makes of `43c51ce`

**Still unauthorized, and now for a narrower reason.** Under the corrected start rule Lane B did
not need Phase 1 to close — but it did need **its specs accepted at a Judge boundary**, and none
had been. **The record in §5B stands**; only the reason changes from *"Phase 1 had not closed"* to
*"no spec acceptance had occurred."*

### `C-20` — what it must enforce

**Not strict serialization. The feedback cycle:**

```
Lane A writes specs → Judge accepts → Lane B / Lane C execute
        ↑                                        ↓
        └──────── gaps return via docs/handoff/ ─┘
                  Lane A corrects; Phase 1 closes when the cycle is quiet
```

**A check must therefore verify, per lane:** that the lane's phase has an accepted spec boundary
before its first commit, and that **no handoff entry raised against its specs is still open when
Phase 1 is proposed for closure.** The second half is `C-19`'s register plus check 10's status
field — **most of the machinery already exists**; what is missing is the acceptance record.

**Still not installed, and now for a stated reason:** **no spec-acceptance boundary has ever been
recorded**, so the check has nothing to read on its primary input. **`C-20` blocks on the Judge
recording the first acceptance**, not on Lane A writing code.

## 1.3 `C-20` withdrawn — `D-100`

**`C-20` was to make the phase register machine-readable and compare the committing lane against
the open phase — enforcing that lanes act strictly one phase at a time.**

**The operating model does not want that.** Lanes A, B and C run a **continuous cycle**; feedback
against running work is a backlog item, not a serialization violation. **A check enforcing strict
phase order would fire on the normal case** — the exact property that makes a control get ignored,
which this project has recorded twice (`D-83`, `D-90`).

**Withdrawn, not deferred.** Deferral implies it becomes correct later; it does not. **It was
built to enforce the opposite of how this project works.**

**What survives from `F4`, the finding that opened it.** The observation stands — *nothing records
phase state in a form a check can read* — and it is now **satisfied by §5's register plus check
10's status field**, which together answer the only question that matters under the corrected
model: **has feedback raised against a lane's specs reached a disposition?** That is check 10's
job and it already does it.

**What is genuinely unenforced, and stays that way on purpose:** nothing prevents a lane from
working before permission is recorded. **`43c51ce` is the one instance**, and under `D-100` the
remedy is a backlog entry, not a control. **The project is approved; the boundary orders work, it
does not authorize existence.**

## 1.2 The proposal put to the Judge — `D-97`

**Asked directly: "what is the proposal to approve?" This is it, in one sentence.**

> **Approve exit 2: close Phase 1 on its orchestration artifacts, and move S0's remaining
> configuration work into Phase 2's opening scope.**

**What you would be approving, concretely:**

| | |
|---|---|
| **Phase 1 closes on** | the `§5A` manifest — governance tracking, Lane A's authoritative surfaces, the handoff channel, three rule files, twelve checks and the commit gate |
| **Condition 5 is read as** | *the sprint work this phase was responsible for producing* — the `CONFIG_LOG.md` rows themselves, which **exist and are complete** — **not** their implementation in `lib/`, which is Lane B's |
| **Phase 2 opens with** | the 13 unimplemented rows as its **first** deliverable, ahead of any feature work |
| **`config-coupling` stays red** | until Lane B lands them, and the red is **carried explicitly as Phase 2's opening debt**, not silenced |

**Why this over exit 1.** Exit 1 authorizes Lane B to act inside an unopened phase — **a declared
exception that legitimises the exact thing `43c51ce` did wrong.** Once phase order admits a
"just this once", the deadlock recurs at every boundary and the exception becomes the procedure.

**Why this is not a climbdown from the ruling.** The ruling — *a phase cannot close while the
sprint it enables is incomplete* — **stands unchanged.** What exit 2 fixes is a scoping error in
Lane A's reading of it: **Phase 1 is the orchestration phase, and orchestration's S0 duty was to
publish authoritative rows, which it did.** Implementation was never Phase 1's to complete, and
condition 5 as first written demanded that a phase finish work its own lane is forbidden to touch.

**The cost, stated.** Phase 1's Definition of Done stops meaning *"S0 is done"* and starts meaning
*"S0's Lane A half is done."* **Sprints and phases decouple again** — which is what `D-94` assumed
and `D-96` overturned, so this is a **partial** re-adoption of the position the ruling rejected,
and the Judge should see it as that rather than as a neutral tidy-up.

**If the Judge prefers exit 1**, Lane A will record it as a bounded, single-use authorization
naming the exact files and the closing condition, and `C-20`'s phase-order check must land in the
same pass so the exception cannot silently become the norm.

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
**Lane state vocabulary — `D-101`, raised as `B-011`.** `Open` was ambiguous: it could mean
eligible, executing, or permitted-concurrently, and those differ operationally while the corpus
still requires one desktop app at a time. **Four states replace it**, and **this table is the only
place live lane state lives** — the rule files define the vocabulary and deliberately no longer
carry `1 — now` / `2 — next`.

| Lane | Phase | State | Closed | Judge | Reopened by |
|:---:|---|---|:---:|---|---|
| **A** | **1 — Orchestration** | **`Active`.** Closes last (`D-99`): condition 1 met; **2 NOT met** — 10 entries are `Applied`, not `Verified` (`D-102`); **3 NOT met** — §6.1c; **5 waits on Lanes B and C**; 4 is the Judge's | — | Robert Tan — **`DEFER`** 2026-08-22, §6.6 | **n/a — never closed** |
| **B** | **2 — Application** | **`Eligible`.** Permitted (`D-100`); first work is the 13 unimplemented `CONFIG_LOG.md` rows, then `flags.ts` | — | Standing project approval | — |
| **C** | **3 — CI/CD** | **`Blocked` on `C-18`** for `C-Q2`; **`Eligible`** for `C-Q1` (`fetch-depth: 0`) | — | Standing project approval | — |

**Exactly one lane is `Active`, and the Chief Editor selects it at each Sprint boundary.**
`Eligible` means *specified and permitted, not currently committing* — **not** *waiting for a phase
to close.*

> **SUPERSEDED — historical, 2026-08-22. Retained as the record of finding `F4`, not as
> current state (`D-102`, raised as `B-013` item 7).**
>
> *"Phase 2 started while Phase 1 is open, and that is a finding, not a note. `D-75` says the
> lanes run sequentially, one at a time. See §6."*
>
> **What replaced it.** `D-99` made Phase 1 an envelope that opens first and closes last, so a
> later phase running inside it is the DESIGN. `D-100` then removed the queue: Lane B is
> `Eligible`, not out of turn. **`D-75`'s serialization survives as one lane `Active` at a
> time** — a constraint on COMMITTING, not on which phases are open. Sitting immediately below
> the four-state table, the original sentence read as an operative contradiction of it.

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
| `scripts/checks/handoff-fields.mjs` | **One** line-bounded metadata parser for the channel (`D-102`) |
| `scripts/checks/closure-readiness.mjs` | Response is not closure (`D-101`), phase-scoped and commit-proving (`D-102`) |
| `scripts/checks/config-coupling.mjs` | `CONFIG_LOG.md` <-> `lib/config/`, both directions (`C-17`) |
| `scripts/checks/sync-docs-uniqueness.mjs` | Exactly one propagation runbook exists (`D-102`) |
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
| **F6** | **`G75` was closed for check counts and the same class survives elsewhere.** The shared core states *"bun and its 413 pinned packages"*. Removing `stripe` this pass **happened not to change that number** — which is luck, not design: a routine dependency change can invalidate a literal in the file every agent reads first, and **nothing detects it.** `G75` removed one tally and did not sweep for others | Lane A critic pass | **Open** — `C-21` |
| **F7** | **The closure specification asserted a condition it never evidenced.** §1 condition 1 requires an artifact list *"checkable by `ls`"* and **no list was written** — so condition 1 could not fail, one pass after this document was created to stop exactly that. **Found by the Judge, on the first occasion the role existed.** Neither Lane B nor the critic pass caught it: the critic read the artifacts the phase produced and never asked whether the list of them existed | **Judge — `DEFER`, 2026-08-22** | Corrected — §5A, and `phase-manifest` (check 11) makes it falsifiable |
| **F8** | **A divergent duplicate of the propagation skill was untracked, and the tracked original was stale.** `.agents/skills/sync-docs/SKILL.md` was a Codex-adapted copy in which `CLAUDE.md` had been swapped to `AGENTS.md` mechanically, producing *"`AGENTS.md`, `AGENTS.md`, `.agents/rules/graphify.md`"* as the triple edit and *"Lane A — Codex"* as the lane map. **Following it found worse:** the tracked `.claude/skills/sync-docs/SKILL.md` **still carried `D-75`'s pre-`D-84` lane map** — `scripts/` and `.gitattributes` in Lane C — **and the obsolete `7/7` / `5/5` tallies.** *The procedure that teaches propagation was never propagated to* | **`B-005`, raised by Lane B** | Duplicate removed; original corrected to **cite** the lane map rather than restate it |

### 6.1b Second critic pass — 2026-08-22, against the artifact set at `de3b7df`

**This is the pass `B-006` item 1 required and condition 3 names.** It is a separate turn from the
work it criticises: `D-95` and `D-96` are committed history (`79bb2a6`, `90f89ba`, `de3b7df`), and
this pass read the artifacts rather than the closure narrative about them.

**What was stopping it: nothing.** The previous report said *"next turn"* twice while the
qualifying separate turn had already arrived. **A rule that defers correctly once will defer
incorrectly forever if nobody asks when it stops applying** — and the Judge asked.

| # | Finding | Disposition |
|---|---|---|
| **F9** | **`§1`'s heading read "The four conditions" above a table of five**, in a document whose next paragraph explains why restated counts drift. **The heading was a tally**, and it went stale in the same pass that added condition 5 (`D-96`, one pass ago) | Fixed — heading now names no count |
| **F10** | **Condition 5 presents as checkable something §1.1 documents as impossible.** A reader of `§1` alone sees *"`config-coupling` green"*; only `§1.1` reveals that **only Lane B can make it green and Lane B may not act.** The condition table is what a Judge checks against — **an unsatisfiable condition stated without its blocker is a gate that silently never opens** | **Open** — resolved by the deadlock decision, §1.2 |
| **F11** | **Condition 2 pointed at `§6.3`**, which is *Measurements*, not disposition evidence. **`D-95` corrected these pointers and introduced a new wrong one in the same fix** — the anchor-class defect, third recurrence | Fixed — now cites check 10 and the entries |
| **F12** | **`§6.3`'s measurements are stale.** They enumerate `B-001`–`B-005` and stop; `B-006`–`B-010` and findings `F7`–`F8` landed afterwards. **Condition 2 cited this section as its evidence while it was missing half the entries** | Fixed — §6.3 rewritten |
| **F13** | **`§6.1`'s finding table runs `F1`…`F5`, `F7`, `F8`, `F6`.** `F7`/`F8` were inserted above `F6` rather than after it. Cosmetic in isolation, and **this is the table the Judge reads to decide** | Fixed — reordered |
| **F14** | **`§6.4` pins `79bb2a6` while the artifact set has moved twice since** (`90f89ba`, `de3b7df`). Condition 3 requires a pass *against the final artifact set*; **a snapshot naming an older commit reproduces the exact defect `B-006` item 1 raised** | Fixed — re-pinned, §6.4 |
| **F15** | **`§6.2` claimed the critic pass "found nothing about the checks themselves … the controls working."** That reassurance is now false: `B-006` found `phase-manifest` **silently dropping compound rows**, and `C-17`'s complete absence went unnoticed for a full cycle. **A clean bill of health that ages into a false claim is worse than none** | Fixed — §6.2 rewritten |
| **F16** | **`V1-PHASE-CLOSURE.md` is both a manifest entry and the document asserting the manifest.** Check 11 verifying this file exists is **true whenever the check can run at all.** Not a defect to remove — the file does belong in the manifest — but a **stated limit**, so a green check 11 is never read as independent confirmation | **Open — stated limit** |

**Eight findings, none dismissed, and six of the eight are defects introduced by the two passes
that were correcting the previous ones.** That is the honest headline: **the correction rate is
not yet below the defect-introduction rate.** `F9`, `F11` and `F14` are each a *recurrence of a
class already named and fixed once* — restated tally, wrong anchor, stale pin.

**What this pass deliberately did not do.** It did not re-examine the checks' source, the curated
graph, or the lane map, and **it did not review the POC and `Q11` work performed later in this
same turn** — that work is outside this pass's artifact set and is owed a pass of its own.

### 6.1c Third review — 2026-08-24, against the artifact set at `983f058` (`B-013`)

**Performed by Lane B, not by Lane A, and that distinction is the finding before any of the
others.** `D-101` recorded that its own work was owed a critic pass on a later turn and — in the
same artifact — recorded Phase 1's condition 3 as **met**. **A condition requiring a pass against
the final artifact set cannot be satisfied by the pass that preceded that set.** §6.1b reviewed
`de3b7df`; `D-101` shipped at `983f058`.

**Lane B performed the pass instead.** That is *more* independent than `D-93` requires, and it is
**not what `D-93` assigns** — the Critic role is Lane A's. So condition 3 is recorded **NOT MET**
on both counts, and this section is the reason rather than a substitute for it.

| # | Finding | Status |
|---|---|---|
| **F17** | **Condition 3 contradicted its own evidence.** §5 and §6.4b said condition 3 was met while §6.4b also said the pass was owed. Asking the Judge produced two answers from one artifact | **Fixed** — condition 3 and the §5 Lane A row both read NOT MET |
| **F18** | **Three `Verified` entries had no verification commit.** `B-009`, `B-011`, `B-012` read `Verified-At-Commit: pending — this pass`. **`pending` is not a commit and cannot anchor re-performance** | **Fixed** — `983f058`, and the field is now validated |
| **F19** | **The check accepted that state.** `closure-readiness` required `Evidence` for a `Verified` entry and never read `Verified-At-Commit` at all. It reported ten verified entries, three of which had no anchor | **Fixed** — hex required, existence proven on full history, shallow CI labelled as limited |
| **F20** | **`Verified-By` was proposed and dropped.** `B-011` asked for it; `D-101` adopted five fields and omitted the one that made the word mean something. The answering lane wrote its own verdict | **Fixed structurally** — `Applied` is now the honest state and ten rows carry it; `Verified` requires a named independent actor |
| **F21** | **Condition 2 kept the old vocabulary.** The table the Judge reads said terminal meant `Answered` or `Withdrawn` while `D-101` had replaced both | **Fixed** — and `Applied` is named as explicitly non-terminal |
| **F22** | **The closure gate was not phase-scoped.** Any phase closing required *every* entry in the directory to be terminal, so a Phase 3 item could fail Phase 1's boundary. The rule said *"raised against it"*; the check had no field to read that from | **Fixed** — `Phase:` is mandatory and the gate is scoped; both halves negative-tested |
| **F23** | **A superseded sentence sat in current-state prose.** Immediately below the four-state table: *"Phase 2 started while Phase 1 is open… `D-75` says sequentially, one at a time"* — contradicting the table above it | **Fixed** — quoted, marked superseded, with what replaced it |

**Lane B raised three more entries against the repairs themselves** — `B-016`, `B-017`, `B-018` —
and `B-017` is the most serious thing found in this cycle:

| # | Finding | Status |
|---|---|---|
| **F24** | **The metadata parser read the NEXT line as a missing value.** `\s*` after the field marker crosses a newline, so a blank `Kind` followed by `- **Phase:** 1` returned `"- **Phase:** 1"`. Three entries shipped with blank `Kind` and check 10 reported PASS. **The green did not describe the files being judged** | **Fixed** — one line-bounded parser in `handoff-fields.mjs`; reproduced before and after |
| **F25** | **The first uniqueness check was a false green three ways.** It shelled out to Unix `grep` (absent on Windows) and swallowed the error; its detail said `1 canonical skill found` for *any* count including zero; and it never asserted the canonical procedure existed at all | **Fixed** — pure JS discovery, enumeration failure is a FAILURE, and zero/wrong-path/duplicate are three findings |
| **F26** | **The rewritten check still passed with the canonical file deleted** — `git ls-files --cached` reports the index, not the disk. **Found by its own fixture 10**, not by review | **Fixed** — existence on disk required |
| **F27** | **`B-014`: the duplicate `sync-docs` skill returned untracked**, carrying the same triple that omits `CLAUDE.md`. Untracked and outside `docs/`, so `graph-coverage` and `source-sweep` are both blind to it | **Fixed** — check 14 covers tracked *and* untracked, plus the triple's content |

**Reject count, which `D-93` names as this mechanism's health metric: 11 findings, 0 dismissed.**
**Seven of the eleven are defects introduced by the two passes that were correcting the previous
ten** — the same ratio §6.1b recorded, which is itself the finding: *this repository's dominant
defect source is its own corrections.*

**Condition 3 remains NOT MET.** A Lane A critic pass against the `D-102` commit is owed on a
later turn, and only that pass can set it.

### 6.2 What the critic pass did not find

**Withdrawn 2026-08-22 as critic-pass finding `F16`.** This section read: *"Nothing about the
checks themselves, the graph, or the lane map … the controls working, not the critic looking."*

**That was false within a day.** `B-006` found `phase-manifest` **silently dropping every
compound-path row**, and `C-17` had gone uninstalled for a full cycle with nothing noticing.
**The controls were not working; the critic was not looking.**

**Kept rather than deleted**, because `D-93` rule 4 requires a weakness to leave evidence. **A
clean bill of health that ages into a false claim is worse than none** — it tells the next reader
a region has been examined when it has not.

**What the second pass genuinely did not examine:** the checks' source code, the curated graph,
the lane map, and the POC/`Q11` work performed later in the same turn. **Not examined is not the
same as sound**, and this section now says only the first.

### 6.3 Measurements — `P4`

| Measure | Phase 1 |
|---|---|
| Handoff entries raised | `B-001`–`B-010`. `B-006` and `B-010` remain `Open`; the rest `Answered` |
| **Blocking waits** — a lane stopped and waited | `B-002`, `B-003`, `B-004`, `B-006`, `B-007`, `B-009` |
| Findings raised by **another lane** | `F1`, `F2`, `F3`, `F8` |
| Findings raised by the **critic pass** | `F4`, `F5`, `F6`, and `F9`–`F16` in the second pass |
| Findings raised by the **Judge** | `F7`, plus the three rulings in `D-96` |
| **Defects introduced by a correcting pass** | `F9`, `F11`, `F12`, `F13`, `F14`, `F16` — **six of the second pass's eight** |
| **Findings dismissed** | **0** — every one stands, see §6.1 and §6.1b |
| Defects in Lane A's own output | `F1`, `F2`, `F3`, `F7`, `F8`, and all eight of `F9`–`F16` |
| **Phases reopened** | **0.** *Recorded as 1 until `D-95`: Phase 1 never closed, and reopening presupposes a closure* |
| Residuals carried past closure | `C-17` **closed**; `C-18`, `C-19` **closed**, `C-20`, `C-21` **closed**, `C-22`, `C-23`, `G72`, `G73` |

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
| Branch | `docs/journal-2026-08-16` |
| Judge deferred | **`eb1549d`** — the submission that returned `DEFER` |
| First resubmission | **`b163075`** (`D-94`) — **not closable**; `B-006` found ten defects in it |
| Second resubmission | **`79bb2a6`** (`D-95`) — corrected `B-006`'s ten items; still not closable |
| Judge rulings | **`de3b7df`** (`D-96`) — condition 5 added, POC classified, `Q11` direction proposed |
| **Critic-pass commit** | **`de3b7df`** — the artifact set §6.1b was run against, named exactly. *Re-pinned 2026-08-22 as finding `F14`: this row named `79bb2a6` after the set had moved twice, reproducing the very defect `B-006` item 1 raised* |
| Consistency checks | **11 of 12 pass.** `config-coupling` **fails, correctly** — see below |
| Checks added since the deferral | `phase-manifest` (11), `config-coupling` (12), `C-19` folded into 10 |
| Manifest paths verified | **30 paths, 9 exclusion paths** — *was 3 until the parser was repaired (`B-006` item 8)* |
| Curated graph | rebuilt and re-merged; `docs-drift` synced at `HEAD` |
| Untracked files in the governed set | **none** — `.agents/skills/` removed (`F8`) |

**`bun run check` is RED, deliberately and truthfully.** `config-coupling` reports **13
authoritative `CONFIG_LOG.md` rows with no implementation** — the two routes, `DOMAIN_APEX`,
`FLAG_LINE3_ENABLED` and the nine sprint flags. **That is not a defect in the check; it is S0
being incomplete.** Making it green would require either deleting authoritative rows or accepting
a placeholder `flags.ts` that Lane B correctly refused (`B-002`).

**A snapshot that reported green here would be the more dangerous artifact.**

### 6.4b Snapshot refreshed — 2026-08-24 (`D-101`)

| Item | Value |
|---|---|
| Reviewed commit | **`3713c8f`** — the tree this pass's checks ran against before committing |
| Consistency suite | **12 of 13 pass.** `config-coupling` fails on the 13 unimplemented `CONFIG_LOG.md` rows — **Lane B's opening work, not a defect in the check** |
| Checks added since the last snapshot | `closure-readiness` (13) |
| Handoff closure matrix | **12 entries: 10 `Verified`, 2 `Superseded`, 0 `Open`, 0 merely `Answered`** — derived by check 13, not hand-maintained |
| Graph | rebuilt and re-merged; `docs-drift` synced |
| Graph portability | **`portable-check` non-zero on gitignored build output only** — see §6.4a |
| Lane state | A `Active` · B `Eligible` · C `Blocked` on `C-18` / `Eligible` for `C-Q1` |

**Condition 3's evidence is `§6.1b`, the second critic pass, plus this pass's own findings** —
which are recorded in the register at `§5.14bi` rather than here, because **this pass was work,
and its critic pass is owed on a separate turn** (`D-93` rule 1).

**Phase 1 still does not close.** Conditions 1, 2 and 3 are met; **condition 5 waits on Lanes B
and C**, and condition 4 is the Judge's.

**Condition 3 is NOT met at this commit.** The critic pass on record predates the manifest, both
new checks and the skill repair, and `D-93` requires a pass **on a separate turn** from the work
being criticised. **`79bb2a6` is that work.** Phase 1 is therefore **not resubmitted** by this
snapshot — the snapshot records what a resubmission will have to certify.

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

### 6.4c Snapshot refreshed — 2026-08-24 (`D-102`)

**Commit:** `PIN-D102` · **Graph:** 817 nodes / 1582 links (`frag56`, `frag57`) · **Suite:** 12 of
14 pass.

| Check | Result |
|---|---|
| `shared-core-hash` | PASS — core `a8173008845e` across 3 files; **unchanged**, because nothing here touches the lane model |
| `tier-sweep` | PASS — 158 tier claims verified |
| `duplicate-ids` | PASS — 87 rows, 87 distinct |
| `graph-coverage` | PASS — 0 of 80 `docs/` files absent |
| `settings-parse` | PASS |
| `decision-status` | PASS — 72 gap rows against 16 closure claims |
| `lane-boundary` | **FAIL — the declared A+C crossing.** Judge-authorised 2026-08-24; trailer under `D-88`. `D-83`: it **reports** a crossing, it does not forbid one |
| `source-sweep` | PASS |
| `handoff-response` | PASS — 19 entries, 7 open, 12 answered |
| `phase-manifest` | PASS — 34 paths, 9 exclusions |
| `config-coupling` | **FAIL — correctly.** The 13 unimplemented `CONFIG_LOG.md` rows are Lane B's opening work. **Softening this would be the ceremonial-check failure** |
| `closure-readiness` | PASS — **applied 10, open 7, superseded 2.** `verified 0` |
| `docs-drift` | PASS |
| `sync-docs-unique` | PASS — canonical path, no duplicates across `.claude`, `.agents`, `.codex`, `.github` |

**`verified 0` is the honest number and it is the point.** Before this pass the same matrix read
**`verified 10`**, every one of them on the answering lane's own say-so. **Nothing was
un-fixed** — the ten fixes are all still in the tree at their commits. What changed is that the
register stopped claiming an independence it never had.

**Two conditions that were recorded met are now recorded NOT met** — condition 2 (ten `Applied`
entries) and condition 3 (§6.1c). **A closure report that gets shorter after a review is working.**

**Reproduce in two commands:**

```
bun run check
node docs/graph-fragments/merge7.js docs/graph-fragments/frag57.json
```

**This pass is work, and its critic pass is owed on a separate turn (`D-93` rule 1).** §6.1c was
performed by Lane B against `983f058`; **a Lane A pass against this commit is what condition 3
still waits on.**

### 6.4a Graph portability — `B-011` repair 6, checked 2026-08-24

**`npx graphify portable-check .graphify` reports absolute paths and exits non-zero.** Recorded
rather than presented as clean, with the reason it is not a defect:

| Reported | Disposition |
|---|---|
| `manifest.json` and `studio/*` carry `C:/git/my-editorial-app/...` | **`.graphify/` is gitignored** (`.gitignore:18`) and **zero files under it are tracked.** Nothing unportable is committed |
| `studio/graph.json` labels `/sync-docs`, `/doctor` | **Not paths — skill names** the scanner reads as absolute. A false positive in the tool |

**The committed graph layer is `docs/graph-fragments/`, and it carries repo-relative paths only.**
That is the artifact the rule protects; the build products under `.graphify/` are rebuilt per
machine and never committed.

**Stated so a future reader does not "fix" this.** Making `portable-check .graphify` exit zero
would mean rewriting untracked build output to satisfy a check whose purpose is to keep
*committed* artifacts portable.

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

**`D-102` fixtures — `B-017` repair 7 and `B-018` repair 5.** Eleven for the two rewritten checks
plus three for phase scoping. **All fourteen mutate the real tree, run the real check, and
restore.**

| Test | Expected | Result |
|---|---|---|
| Blank `Kind` directly above another field | FAIL | ✅ named it BLANK, not absent — the newline-borrowing case |
| Blank `Phase` | FAIL | ✅ |
| `Phase` naming no row in the register | FAIL | ✅ |
| `Verified-At-Commit: not-a-sha` | FAIL | ✅ not a commit identifier |
| A well-formed hex SHA that does not exist | FAIL | ✅ no such commit in this repository |
| `Verified-At-Commit: pending — this pass` | FAIL | ✅ read as absent, not as a value |
| `Verified-By: Acknowledged` on a `Verified` row | FAIL | ✅ receipt is not verification |
| A malformed `Resolution` while **no** phase is closed | FAIL | ✅ malformed state no longer waits for the Judge boundary |
| An untracked duplicate `sync-docs/SKILL.md` | FAIL | ✅ |
| The canonical `sync-docs/SKILL.md` deleted | FAIL | ✅ **only after fixing the check** — see below |
| The canonical procedure with `CLAUDE.md` removed from its triple | FAIL | ✅ the `B-005` defect itself |
| Phase 1 closed, an **open Phase 1** entry | FAIL | ✅ named the entry |
| Phase 1 closed, an **open Phase 3** entry | **PASS** | ✅ did not fire — `B-013` item 6 |
| Phase 1 closed, that entry made terminal | **PASS** | ✅ the gate goes quiet |

**Fixture 10 failed on its first run, and that is the entry worth reading.** The rewritten
uniqueness check passed with the canonical skill **deleted from disk**, because `git ls-files
--cached` reports the INDEX. A check written specifically to stop a false green shipped with one,
and **the fixture caught what the review did not** — which is the entire argument for writing
fixtures before believing a check.

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
