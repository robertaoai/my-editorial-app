# Fn_Specs — Exceptions & Continuity `FR-06`, `FR-11`, `FR-12`

**Date:** 2026-08-19
**Tier:** `Fn_Specs` — third tier of `D-29`.
**Status:** Draft. Planning only — no build authorized.
**Source:** `Modular_PRD` §5 (`FR-06`, `FR-11`, `FR-12`), §6 (`AC-09`, `AC-10`, `AC-17`, `AC-18`), `US-06`, `US-11`, `US-12`.
**Sprints:** `FR-06` → S1 · `FR-11` → S5 · `FR-12` → S5.

---

## 0. Section origin — `D-36`

Living document; no build-version prefix, does not freeze. **All sections `[V1]`.** An unmarked change to a `[V1]` section is a defect, not an update.

---

## 1. Overview `[V1]`

**What happens when the normal path does not work.** Three answers: send work back, escalate to independent assurance, and keep moving when the accountable human is unavailable.

**Grouping rationale:** all three are departures from the forward path, and each is triggered by a *condition* rather than by completing a gate. They share the property that none of them advances an article.

> **`FR-06`'s placement, resolved not assumed.** `FR-06` is **T8** — *any active state → Needs Revision* — available at every gate but **not a gate itself**. The gates group (`FR-01`–`FR-05`) covers T1–T6, the forward path. T8 is the backward path. It belongs here. *(Flagged during sequencing; resolved on the reasoning that T8's executor is "any authorized role for the current state," which makes it a property of every gate rather than a member of the sequence.)*

**`FR-12` depends on a threshold `OD1` informs and cannot complete in v1.** `FR-11` is no longer `OD`-blocked in the open sense — `D-57` decided it directly: **not built in v1**, v1 discloses no independent assurance, `C-13`'s BCP surface is a compensating control, never Line 3. That decision is governed directly by `D-57`, not by `OD3` (agent headcount/roster shape) or `OD4` (the Charter's deferred Proposer→Critics→Judge remedy, triggerable but never self-authorizing) — neither OD is `FR-11`'s dependency (`D-167`, corrected `D-168`).

## 2. User stories `[V1]`

| ID | As a | I want | So that |
|---|---|---|---|
| `US-06` | Chief Editor | to return an article with a **mandatory** reason | the author knows what to fix and **the reason is permanent** |
| `US-11` | Line 3 assurance | to audit on a risk trigger and report **without a data path back to Line 1 or Line 2** | assurance is independent |
| `US-12` | Chief Editor | Line 1 to keep working while I am unavailable | **my absence delays review rather than halting the pipeline** |

`US-11`'s "no data path back" is structural, not procedural. `US-12`'s distinction — *delay, not halt* — is the whole requirement.

## 3. Requirements `[V1]`

### 3.1 Functional

| ID | Requirement | Line | Sprint | OD |
|---|---|---|---|---|
| `FR-06` | Return an article to a prior state with a **mandatory reason**; auto-escalate at the return limit | 1/2 | S1 | — |
| `FR-11` ⚠ | Trigger a **Line 3** audit on defined risk conditions; Line 3 reports **independently** | 3 | S5 | **Not built in v1 (`D-57`); governed directly by `D-57`, not `OD3` or `OD4`** (`D-168`) |
| `FR-12` | Operate in **degraded mode** when the Chief Editor is absent beyond the configured threshold | 1 | S5 | — |

### 3.2 Constraints `[V1]`

1. **A return is not an advancement.** Four-eyes is `not_applicable` on T8; independence classification records the return as such, never as a boundary crossing.
2. **Thresholds are config-driven and `UNSET` where OD-derived** — `RETURN_LIMIT_BEFORE_ESCALATION`, `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS`. No number is invented.
3. **Line 3 shares no identity or data path with Line 1 or Line 2** (`SEC-01`). `Q2` records that naming the Chief Editor collides Line 2 with Line 3 (`A23`) — that option is **not available**.
4. **Degraded mode delays; it never bypasses.** No gate is skipped because a human is absent.

## 4. Behaviour `[V1]`

### 4.1 `FR-06` — return with a permanent reason *(T8)*

Available from **any active state**, executed by any role authorized for that state.

1. **Reason is mandatory.** An empty reason is refused at write — not warned, not defaulted.
2. The article returns to `revision_target_state`, defaulting to the immediately prior state.
3. `return_count` increments **per target state**.
4. On reaching `RETURN_LIMIT_BEFORE_ESCALATION` for the same state, a further return **auto-escalates** rather than looping.

> **Why the limit exists:** without it, an article can cycle between two states indefinitely with each return individually justified. The limit converts an invisible loop into a visible escalation. **The threshold is `UNSET`** — it is a config value, not a guess.

**The reason is permanent.** Revision reasons are undeletable — `US-06`'s "permanent" is a durability requirement carried by `NFR-02`, not a UI note.

### 4.2 `FR-11` — risk-triggered independent audit ⚠ *(not built in v1, `D-57`)*

Line 3 audits on **defined risk conditions**, not on a standing schedule, and reports **independently**.

| Property | Requirement |
|---|---|
| Trigger | A defined risk condition fires — not a timetable |
| Executor | Line 3, sharing **no identity and no data path** with Line 1 or Line 2 |
| Reporting | Independent. Findings do not route back through the audited Lines |
| Record | `event_type = Line3Audit`, `line_assignment = Line 3` |

> **Decided, and named as decided.** `Q2` asked whether Line 3 is **external** for v1 or whether v1 states plainly it has **no independent assurance**. `D-57` answered: v1 has **no independent assurance**, conditional on `C-13`'s BCP surface (a compensating control, never Line 3). **Not the Chief Editor** — `A23`. `FR-11` has no executor and is **not built in v1**; `GA6` already discloses that no independent opinion exists anywhere in the model. The Three Lines Model's `OD4` branch ② still binds if `OD2` resolves negatively — this is unrelated to `OD3` (headcount/roster).

### 4.3 `FR-12` — degraded mode *(absence)*

When the Chief Editor is unavailable beyond `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS`:

- **Line 1 gates continue.** T1–T4 do not require the Chief Editor.
- **T5 does not proceed.** It is Line 2, human-primary; absence delays it.
- Work **accumulates at the boundary** rather than halting upstream.

**The distinction that defines this feature:** absence **delays review**; it does not **halt the pipeline**, and it never **bypasses** a gate. An implementation that lets Line 1 advance past T5 during absence has inverted the requirement.

## 5. Acceptance criteria `[V1]`

| ID | Given | When | Then |
|---|---|---|---|
| `AC-09` | An article in any active state | A return is attempted with an **empty reason** | The write is **rejected** — reason is mandatory |
| `AC-10` | An article returned to the same state `RETURN_LIMIT_BEFORE_ESCALATION` times | A further return is attempted | It **auto-escalates** instead of returning |
| `AC-17` ⚠ | A Line 3 trigger condition fires | Line 3 completes its audit | `event_type = Line3Audit`, `line_assignment = Line 3` |
| `AC-18` | The Chief Editor is unavailable beyond the threshold | Line 1 continues working | **Line 1 gates still advance; T5 waits** |

**`AC-09` is the canary for this group.** A return accepted without a reason means the permanent record has a hole precisely where a human made a judgement.

## 6. Edge cases `[V1]`

| Case | Required behaviour |
|---|---|
| Return from the entry state | No prior state exists — reject or route to rejection (`T9`), never a silent no-op |
| Return limit reached on a *different* state | Counts are **per target state**, so the limit does not fire |
| Chief Editor returns mid-degraded-mode | Normal operation resumes; accumulated T5 work is not auto-approved |
| Line 3 trigger fires with **no Line 3 executor** | **Cannot complete.** Record the trigger; do not silently skip (`Q2` unresolved) |
| Escalation with no escalation target | Same shape — record, do not discard |
| Degraded mode with no threshold set | `UNSET` means the feature does not activate. **Do not default to a number** |

## 7. Dependencies `[V1]`

| Dependency | Nature | Status |
|---|---|---|
| `RETURN_LIMIT_BEFORE_ESCALATION` | Config, `FR-06` | `UNSET` — S0 |
| `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS` | Config, `FR-12` | `UNSET` — S0 |
| `articles.revision_reason`, `revision_target_state`, `return_count` | Schema, `FR-06` | S1 |
| `Q2` Line 3 executor | Decided `FR-11` not built in v1 | **Answered (`D-57`)** |
| `OD3` | Roster/headcount — no longer gates `FR-11`'s status | **Open, unrelated to `FR-11`** |
| `event_type` vocabulary | `Line3Audit` value | S1 (`D-12`) |

## 8. Risks `[V1]`

| Risk | Consequence | Mitigation |
|---|---|---|
| Reason defaulted rather than refused | The permanent record carries a placeholder where a judgement belongs | Reject at write (`AC-09`) |
| Return limit invented rather than configured | A guessed number governs escalation | `UNSET` until decided |
| Degraded mode permits bypass | Absence becomes a gate-skip route — the exact failure `O-01` forbids | Line 1 advances, **T5 waits** |
| `FR-11` claimed built or satisfied in v1 | Contradicts `D-57`'s decision that it is not built; independence asserted, not delivered | Keep status **not built in v1**, `GA6`'s disclosure standing |
| Escalation with nowhere to escalate | Silent discard | Record the trigger regardless |

## 9. `SPECS` candidate filter — `D-30` `[V1]`

**Fully determined here; no `SPECS` required:**
mandatory-reason refusal · per-target-state counting · auto-escalate at limit · Line 3 trigger-not-schedule · no data path back · Line 1 continues while T5 waits · `UNSET` means inactive

**Requires `SPECS`:**

| Component | Why behaviour cannot settle it |
|---|---|
| `articles` return columns | `revision_reason`, `revision_target_state`, `return_count` need types and constraints |
| Escalation routing | "Auto-escalate" does not name a destination or mechanism |
| Line 3 data-path isolation | *"Shares no data path"* is an access-control design, not a behaviour |
| Absence detection | "Unavailable beyond a threshold" requires a definition of *unavailable* |

**Four need `SPECS`.**

## 10. Scope limits `[V1]`

Closes no Open Decision here — `Q2` was already closed by `D-57`, applied to this document by `D-167`/`D-168`. `FR-11` has no executor and is **not built in v1**, governed directly by `D-57`, not `OD3` or `OD4`. Authorizes no code, schema, or migration. Every threshold stays `UNSET`; **no number is invented here**.
