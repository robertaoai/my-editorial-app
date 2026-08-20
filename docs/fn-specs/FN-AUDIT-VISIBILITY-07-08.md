# Fn_Specs — Audit & Visibility `FR-07`, `FR-08`

**Date:** 2026-08-19
**Tier:** `Fn_Specs` — third tier of `D-29`.
**Status:** Draft. Planning only — no build authorized.
**Source:** `Modular_PRD` §5 (`FR-07`, `FR-08`), §6 (`AC-11`–`AC-13`), `US-07`, `US-08`.
**Sprints:** `FR-07` → S1 · `FR-08` → S3.

---

## 0. Section origin — `D-36`

Living document; carries no build-version prefix and does not freeze. **All sections are `[V1]`.** Later builds mark additions and revisions; an unmarked change to a `[V1]` section is a defect, not an update.

---

## 1. Overview `[V1]`

The record and the window onto it. `FR-07` writes what happened; `FR-08` is how a human sees it without opening the database.

**User value:** *"trust is demonstrable rather than asserted"* — `US-07`'s own phrase. Every transition answers who, when, and why, and the answer cannot be edited afterwards.

> **Grouping note — a one-way dependency, recorded rather than smoothed over.** `FR-08` cannot function without `FR-07`: the board displays state, Line, and history that only the transition record holds. But `FR-07` stands alone — the record is complete whether or not anything renders it. This is **weaker than the gates and publication groups**, where the dependency ran both ways. They are grouped because the board is the record's only surface, not because neither can exist without the other.

## 2. User stories `[V1]`

| ID | As a | I want | So that |
|---|---|---|---|
| `US-07` | Chief Editor | an append-only log answering who, when, and why for every transition | **trust is demonstrable rather than asserted** |
| `US-08` | Chief Editor | to filter the board by state, topic, category, and Line | **I can steer without opening the database** |

`US-08`'s clause is a requirement, not a convenience: if steering requires database access, the board has failed regardless of what it displays.

## 3. Requirements `[V1]`

### 3.1 Functional

| ID | Requirement | Sprint |
|---|---|---|
| `FR-07` | Write an **append-only** transition record **before every state change**, carrying executor identity, Line, timestamp, and reason | S1 |
| `FR-08` | Present a board grouped by state and filterable on **every** `BOARD_FILTER_DIMENSIONS` value | S3 |

### 3.2 Non-functional

| ID | Requirement |
|---|---|
| `NFR-02` | Append-only in fact, not in prose — UPDATE and DELETE **revoked at the database** |
| `NFR-08` | Every transition reconstructable **from the log alone** |
| `NFR-06` | The board renders and filters at the success-scenario volume |

### 3.3 Constraints `[V1]`

1. **The transition row precedes the state change.** Ordering is behavioural: a state change with no preceding row is a defect regardless of storage.
2. **Refusal must hold against the anon key.** `AC-12` fails today — `0001` grants `for all using (true)` while `SECURITY.md` promises append-only (`TC1`).
3. **Filter dimensions are config-driven**, not hardcoded — `BOARD_FILTER_DIMENSIONS`.
4. **`on delete restrict`, not cascade** (`D-07`/`GA9`). Deleting an article must not silently delete its record.

## 4. Behaviour `[V1]`

### 4.1 `FR-07` — the record

Every transition writes **exactly one** row before the state changes, carrying: article · executor identity · executor type · Line assignment · event type · timestamp · reason.

**Three properties, each independently testable:**

| Property | Meaning |
|---|---|
| **Precedence** | The row exists before the state change. Never after, never concurrently |
| **Exactly one** | Not zero, not two. One state change, one row |
| **Immutable** | UPDATE and DELETE refused **at the database**, including via the anon key |

> **Why database-level refusal is the requirement, not an implementation choice.** `TC1`: the anon key is public and RLS is permissive, so an application-layer guard is advisory — a browser can write directly. `FR-07` is only satisfied when the refusal survives a direct anon-key attempt.

### 4.2 `FR-08` — the board

Grouped by state, filterable on every configured dimension. Four are known: **state · topic · category · Line**.

**Line is the team-added fourth** — the customer named three (`CR-13`). It is disclosed as `FB-03` and classified Project Scope, retained as an operational and assurance view rather than promoted to a customer-facing promise.

**What the board must surface** beyond filtering: current state per article · the `T6→T5` return rate, queryable (`A17`) · Line assignment per transition.

> The `T6→T5` return rate is not a metric for its own sake. **A rate that never leaves zero means successor-node review is nominal at that boundary** — the falsifiable form of `RACI-03`. The board is where that becomes visible.

## 5. Acceptance criteria `[V1]`

| ID | Given | When | Then |
|---|---|---|---|
| `AC-11` | Any transition occurs | It completes | **Exactly one** row precedes the state change, carrying article, executor, type, Line, timestamp, reason |
| `AC-12` | A transition row exists | UPDATE or DELETE is attempted, **including with the anon key** | The **database** refuses. **Fails today** — `0001` grants `for all using (true)` |
| `AC-13` | `SUCCESS_ARTICLES_LOGGED_MIN` articles span states, topics, categories and Lines | The Chief Editor filters on each dimension | Each filter returns the correct subset |

**`AC-12` is the canary.** If a browser can delete a transition row, `FR-07` has failed regardless of what the application enforces.

## 6. Edge cases `[V1]`

| Case | Required behaviour |
|---|---|
| State change attempted with no transition row | **Refused.** Precedence is enforced, not conventional |
| Two rows written for one change | Defect — `AC-11` says exactly one |
| Article deleted | Transition rows **must survive** (`D-07`). Cascade would destroy the record `NFR-02` protects |
| Filter dimension added later | Config-driven; no board change required |
| Board at zero articles | Renders empty state, not an error |
| Reason empty on a return | Refused — see `FR-06` in the Exceptions group |

## 7. Dependencies `[V1]`

| Dependency | Nature | Status |
|---|---|---|
| `TR-DM-02` `workflow_transitions` extensions | **Blocking** — `actor_id`, `line_assignment`, `event_type` absent (`TC4`, `X5`) | S1 |
| `Q11` field naming | Names the independence field this record carries | **Open**, S1 window |
| Revoke UPDATE/DELETE | `AC-12` cannot pass without it | S1 |
| `D-07` `on delete restrict` | Protects the record from cascade | S1 window |
| `BOARD_FILTER_DIMENSIONS` | Config value | S0 |

## 8. Risks `[V1]`

| Risk | Consequence | Mitigation |
|---|---|---|
| Append-only enforced in application only | A browser edits the audit trail; `NFR-02` is prose | Database-level revocation, tested via anon key (`AC-12`) |
| Cascade delete left in place | Deleting an article silently destroys its record | `D-07` — `on delete restrict` |
| `T6→T5` return rate never surfaced | The `OD2` trip-wire has no reading | Make it queryable in S3 |
| Line filter read as a customer promise | Undisclosed scope | Already disclosed as `FB-03`, Project Scope |

## 9. `SPECS` candidate filter — `D-30` `[V1]`

**Fully determined here; no `SPECS` required:**
row precedence · exactly-one-row · which fields the record carries · the four filter dimensions · grouping by state · what survives article deletion

**Requires `SPECS`:**

| Component | Why behaviour cannot settle it |
|---|---|
| `TR-DM-02` column set and types | "Carries executor identity and Line" does not specify types, nullability, or the enum shape |
| Append-only enforcement | Revoking UPDATE/DELETE is a grant model, not a behaviour |
| `on delete restrict` migration | Referential action change on a live FK |
| Board query and index strategy | `NFR-06`'s render volume depends on indexes behaviour cannot name |

**Four need `SPECS`.** Fewer than the gates and publication groups — as expected, since this group is mostly about *what is recorded*, which functional description can fully determine.

## 10. Scope limits `[V1]`

Closes no Open Decision. Authorizes no code, schema, or migration. `AC-12` is recorded as **failing today** and is not resolved here. Field names remain proposals pending `Q11`.
