# SPECS — Transition Enforcement

**Date:** 2026-08-20
**Tier:** `SPECS` — fourth tier of `D-29`. Implementation big picture.
**Status:** Draft. **Planning only — no migration authorized.**
**Authorized by:** `D-52` / `G33b` — the only `SPECS` document required before S1.
**Source behaviour:** `FN-GATES-01-05` §3, §9 · `FN-AUDIT-VISIBILITY-07-08` §4.1 · `FN-EXCEPTIONS-06-11-12` §4.1
**Sprint:** S1.

---

## 0. Section origin — `D-36`

Living document; no build-version prefix, does not freeze. **All sections `[V1]`.** An unmarked change to a `[V1]` section is a defect, not an update.

**No Technical Stack section.** `D-30`: added only when the build starts.

---

## 1. Executive summary `[V1]`

**Intent.** Make the editorial gate sequence unbypassable at the only layer that has authority over it — the database.

**Why it exists.** `D-52` filtered 18 `SPECS` candidates. Seventeen absorbed into the S1 window, deferred to a later sprint, or belong to infrastructure. **This one did not.** `FN-GATES-01-05` §9 says *"reject invalid transitions"* — that is a behaviour. It does not specify **when** enforcement fires, **how** the legal transition set is represented, or **what happens when two executors reach the same article at once.** Those three are implementation, and behaviour cannot settle them.

**Why the database and not the application.** `TC1`: the anon key is public, RLS is permissive, `lib/supabase/server.ts` also uses the anon key, and Phase 0 has no auth. **There is no layer above the database with more authority than a browser.** An enforcement check in `lib/pipeline/` is advisory — a `curl` bypasses it. This is forced, not preferred.

**Success criteria.**

| # | Criterion |
|---|---|
| SC-1 | An invalid state change is refused **when attempted with the anon key** |
| SC-2 | A state change with no matching transition row is refused |
| SC-3 | The transition row precedes the state change — never after, never concurrently (`FR-07`) |
| SC-4 | Exactly one transition row per state change — not zero, not two (`AC-11`) |
| SC-5 | Two concurrent executors on one article produce **one** transition, not two |
| SC-6 | A rejected attempt leaves **no** orphan row in the append-only table |

**Limitations.** Postgres via Supabase; no infrastructure beyond what `0001` established. Enforcement cannot cover what the database cannot see: it validates *sequence*, never *judgement quality*. `AC-12` — revoking UPDATE/DELETE — is **infrastructure-owned** (`D-39`) and is **not** this document's scope, though this design assumes it lands.

## 2. Scope `[V1]`

**In scope — the three components `D-52` named:**

1. Trigger timing
2. Allowed-transitions table shape
3. Lock behaviour

**Explicitly out of scope — and this boundary is load-bearing:**

| Excluded | Owner |
|---|---|
| Column sets, types, nullability | `G16`, S1 window |
| The ten-state enum migration path | `G16`, S1 window |
| Typed columns versus JSON payload | `G17` / `QA3`, S1 window |
| `on delete restrict` | `GA9`, S1 window |
| Revoking UPDATE/DELETE | Infrastructure ⚙ (`D-39`) |
| Field naming | `Q11` — **irreversible after S1** |

> **Why this list matters.** `D-52` closed `G33b` by finding that 7 of 18 candidates **absorb into the S1 window**. If this document specifies them anyway, it becomes the restatement layer `D-30` exists to prevent — one fact in two places, one updated and one not. **That is this project's recurring defect, and writing it into the first `SPECS` would institutionalise it.**

## 3. The transition set `[V1]`

Ten states (Addendum §4.1): `Discovered` · `Logged` · `Validated` · `Investigated` · `Drafted` · `Reviewed` · `Approved` · `Published` · `Needs Revision` · `Rejected`.

| Gate | From | To | Shape |
|---|---|---|---|
| T1 | Discovered | Logged | Fixed pair |
| T2 | Logged | Validated | Fixed pair |
| T3 | Validated | Investigated | Fixed pair |
| T4 | Investigated | Drafted | Fixed pair |
| T5 | Drafted | Reviewed | Fixed pair · **Line 2, human-primary** |
| T6 | Reviewed | Approved | Fixed pair · Line 1 |
| T7 | Approved | Published | Fixed pair · System |
| T8 | *any active* | Needs Revision | **Wildcard source** |
| T8a | Needs Revision | *(`revision_target_state`)* | **Dynamic target** |
| T9 | *any active* | Rejected | **Wildcard source** |
| T10 | Approved or Published | *(unchanged)* | **No state change** |
| T11 | *(any state with a ManualReady target)* | Published **if first live target**, else unchanged | **Conditional** |

### 3.1 Why a `(from_state, to_state)` pair table is insufficient `[V1]`

**This is the finding that makes this document necessary.** Four of the eleven gates do not fit a pair table:

1. **T8 and T9 have wildcard sources.** *"Any active state"* is not a value. Enumerating it as nine rows each is possible but wrong — *active* is a **property** that changes if a state is added, and the enumeration would silently go stale. **The same drift mechanism that produced `G55` and `G56`, one tier down.**
2. **T8a's target is read from the article's own row** — `revision_target_state`. The legal target is not knowable from the transition definition alone.
3. **T10 changes no state.** It is a publication-status event. Forcing it through a state-change guard means either inventing a self-transition or exempting it — and an exemption is a bypass route.
4. **T11 is conditional on external outcome** — whether this is the *first live target*. The database cannot evaluate that from the article row alone.

## 4. Allowed-transitions table shape `[V1]`

**A four-kind classification, not a pair list.**

| Column | Meaning |
|---|---|
| `gate_id` | `T1`…`T11`. The identity of the rule |
| `from_state` | The source state, or **NULL meaning "any active state"** |
| `to_state` | The target state, or **NULL meaning "resolved from the article row"** |
| `kind` | `fixed` · `wildcard_source` · `dynamic_target` · `non_transition` |
| `required_role` | The `gate_role` authorized |
| `required_line` | Line 1, Line 2, or N/A |
| `required_actor_type` | `agent`, `human`, or `system` |
| `human_only` | True for T5 — an agent attempting it is refused |

**`active` is defined once, as a property, not enumerated per rule:** every state except `Published`, `Rejected`, and `Needs Revision`. Adding a state changes one definition, not nine rows.

**Resolution order** when validating a proposed change:

1. Match `kind = fixed` on the exact `(from_state, to_state)` pair.
2. If none, match `kind = wildcard_source` on `to_state` where the current state is *active*.
3. If none, match `kind = dynamic_target` where `to_state` equals the article's `revision_target_state`.
4. If none — **refuse.** There is no default-allow branch.

**T10 and T11 do not enter this path at all.** They are publication events; when they cause no state change, the guard never fires. When T11 *does* promote to `Published`, it enters as a `fixed` rule and is validated normally.

> **The `non_transition` kind exists to make that explicit rather than implicit.** An undocumented exemption is indistinguishable from a bypass, and `O-01` forbids bypass routes. Naming the kind means the exemption is auditable.

## 5. Trigger timing `[V1]`

**Two guards, one transaction.**

| Guard | Fires | Refuses when |
|---|---|---|
| **G-A** — sequence validity | `BEFORE UPDATE OF workflow_state ON articles` | The proposed change matches no rule in §4 |
| **G-B** — record precedence | `BEFORE UPDATE OF workflow_state ON articles` | No matching `workflow_transitions` row exists for this change |

**Ordering within the caller's transaction:**

```
BEGIN;
  INSERT INTO workflow_transitions (...);   -- the record, written first (FR-07)
  UPDATE articles SET workflow_state = ...; -- fires G-A then G-B
COMMIT;
```

### 5.1 Append-only and rollback are not in conflict `[V1]`

**They sound contradictory. They are not, and the distinction is the whole reason SC-6 is satisfiable.**

- Revoking `DELETE` prevents a **statement** from removing a committed row.
- A transaction **abort** is not a statement. It unwinds uncommitted work.

So when G-A refuses, the `INSERT` that preceded it in the same transaction is rolled back with it. **No orphan row.** An implementation that commits the transition row separately — two transactions — produces exactly the orphan SC-6 forbids, in a table nothing can clean up.

> **Guaranteed to fail:** writing the transition row in its own transaction "so the attempt is recorded even if refused." The append-only table then accumulates rows for state changes that never happened, and the audit trail asserts activity that did not occur — the same class of harm as `G41`, where absence was rendered as *"nothing happened."*
>
> **How to avoid it:** one transaction, always. If refused attempts must be recorded, they belong in a **separate** table that is not the audit record.

## 6. Lock behaviour `[V1]`

**The race.** Two Line 1 agents reach the same article. Both read `workflow_state = 'Investigated'`. Both propose `Drafted`. Both pass G-A. Two transition rows are written for one state change — **SC-4 and SC-5 both fail**, and `AC-11`'s *"exactly one"* is broken permanently in an append-only table.

**The guard.** Take a row-level lock on the article **before** reading its current state:

```
SELECT workflow_state FROM articles WHERE id = :id FOR UPDATE;
```

The second transaction blocks until the first commits, then re-reads `Drafted`, finds no `Investigated → Drafted` rule applies from its now-stale premise, and is refused by G-A.

**Lock scope: the article row only.** Not the transitions table — locking an append-only insert path serialises the entire pipeline for no benefit.

**Deadlock:** not reachable by this design. Each transaction locks exactly one article row, in one order. A future feature touching two articles in one transaction reopens this and must state its ordering rule.

## 7. Verification `[V1]`

Every criterion tested **with the anon key**, because that is the threat model (`TC1`).

| # | Test | Passes when |
|---|---|---|
| V-1 | `UPDATE articles SET workflow_state='Published'` from `Logged` | Refused by G-A |
| V-2 | Valid state change, no transition row inserted | Refused by G-B |
| V-3 | Transition row inserted, then an invalid update | Whole transaction rolls back; **row count unchanged** |
| V-4 | Two concurrent valid updates on one article | One commits, one refused; **exactly one** new row |
| V-5 | An agent attempts T5 | Refused — `human_only` |
| V-6 | T8 from each active state | Accepted for all; refused from `Published`, `Rejected`, `Needs Revision` |
| V-7 | T8a to a target other than `revision_target_state` | Refused |
| V-8 | T10 publication event, no state change | Guard does not fire; no transition row required |

**V-3 and V-4 are the criteria that fail silently if unimplemented.** Both produce a working-looking pipeline with a corrupted audit record.

## 8. Dependencies `[V1]`

| Dependency | Nature | Status |
|---|---|---|
| Ten-state enum (`article_state_v2`) | **Blocking** — rules reference states `0001` lacks | `G16`, S1 window |
| `actor_id`, `line_assignment`, `event_type` | **Blocking** — G-B matches on executor identity | `TC4`/`X5`, S1 window |
| `articles.revision_target_state` | **Blocking** — T8a resolution | S1 window |
| `Q11` field naming | Names what G-B matches on | **Open** — irreversible after S1 |
| Revoke UPDATE/DELETE | Not blocking this design; assumed | Infrastructure ⚙ |
| `GA9` `on delete restrict` | Independent | S1 window |

**Every blocking dependency is an S1 window item.** This document is written to be *implementable in the same pass that resolves them* — it does not front-run them, and it does not restate them.

## 9. Risks `[V1]`

| Risk | Consequence | Mitigation |
|---|---|---|
| Enforcement placed in `lib/pipeline/` | A browser bypasses the gate sequence; `O-01` violated | Database-level, tested via anon key |
| Wildcard states enumerated per rule | Adding a state silently leaves T8/T9 stale | `active` defined once as a property |
| Transition row committed separately | Orphan rows assert state changes that never happened | One transaction (§5.1) |
| No row lock | Two rows for one change; `AC-11` broken permanently | `FOR UPDATE` on the article row |
| T10/T11 exempted informally | An undocumented exemption is a bypass route | `non_transition` kind, explicit and auditable |
| This document restates S1 window decisions | The `D-30` restatement layer, and the project's recurring drift defect | §2 exclusion list |

## 10. Scope limits `[V1]`

Closes no Open Decision. **Authorizes no code, schema, migration, or deployment.** Names no field — `Q11` is open and irreversible after S1. Specifies enforcement mechanism only; the column set that enforcement reads is `G16`'s, resolved in the same S1 pass.
