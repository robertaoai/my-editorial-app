# Fn_Specs — Publication Feature Group `FR-09`, `FR-10`, `FR-13`

**Date:** 2026-08-19
**Tier:** `Fn_Specs` — third tier of `D-29`: `PRD` → `Modular_PRD` → **`Fn_Specs`** → `SPECS`.
**Status:** Draft. Planning only — no build authorized.
**Source:** `Modular_PRD` §5 (`FR-09`, `FR-10`, `FR-13`), §6 (`AC-14`–`AC-16`, `AC-19`), `US-09`, `US-10`, `US-13`; Addendum T7, T10, T11.
**Structure:** merged per `D-33` — `spec-writing` standard plus the User Stories and Risks sections from `specs-creator`'s feature template. Technical Stack omitted (`D-30`: added only when the build starts). UI omitted (stays in `SPECS`).

> **Why these three are one group.** Under `D-06` a retraction **is** a publication, and under `D-08` a retraction notice **inherits its publication targets from the original**. `FR-13` therefore cannot function without `FR-09`'s target model. `FR-10` cannot function without `FR-09` marking a target `ManualReady` in the first place. Mutual dependency — a resolved group, not a convenient bundle.

---

## 0. Section origin — `D-36`

This is a **living** document: it carries no build-version prefix and does not freeze. Each section
records the build version that introduced it, so the record of what a sprint delivered survives later
edits. A section revised by a later build keeps its origin and gains a revision note.

| Marker | Meaning |
|---|---|
| `[V1]` | Section originated in build `V1` |
| `[V1→V2]` | Originated in `V1`, materially revised in `V2` |
| `[V2]` | Section added in build `V2` |

**All sections below are `[V1]`** — this document was written entirely within build `V1`. Later builds
must mark their additions and revisions rather than editing silently, which is what makes per-section
content hashing meaningful: an unmarked change to a `[V1]` section is a defect, not an update.

## 1. Overview

Publication is where the pipeline's work becomes public, and where its record becomes evidence. The group covers three acts: **publishing** an approved article, **confirming** a publication a human performed by hand, and **retracting** one when a binding order arrives.

**User value:** approved work ships without manual re-entry; manual channels are audited identically to automated ones; and a court order is never queued behind internal review.

**Strategic alignment:** this is the second half of `CR-19`'s success scenario — *"publishes to WordPress (or marked LinkedIn-ready)… 2+ published."*

**The property that makes the group coherent:** every act here writes a publication transaction record at equal fidelity, whether a machine or a human performed it. That record is what makes mirror-scope a query rather than a recollection (`D-08`, `D-09`).

## 2. User stories

| ID | As a | I want | So that |
|---|---|---|---|
| `US-09` | Chief Journalist agent | approval to trigger publication to WordPress or mark LinkedIn ready | approved work ships without manual re-entry. **V1 current scope (`D-243`/`D-250`):** V1 has no approval trigger; the LinkedIn `ManualReady` event is requested by `ROLE-SENIOR-JOURNALIST` after the final `business:T5` record, and no article `Published` outcome exists. `[V1]` origin retained |
| `US-10` | Chief Editor | to confirm a manual publish by entering the live URL | **manual targets are audited identically to automated ones** |
| `US-13` | Chief Editor | a binding order to force retraction immediately | it is not queued behind internal review |

`US-10`'s clause is the group's design constraint, not a preference: an audit trail with a lower-fidelity branch for human action has a hole exactly where humans acted.

## 3. Requirements

### 3.1 Functional

| ID | Requirement | Gate | Executor |
|---|---|---|---|
| `FR-09` | On approval, publish to WordPress **or** mark a target `ManualReady` with formatted content; status is **per-target** | T7, T10 | System |
| `FR-10` | Confirm a manual publish by entering a live URL; the article becomes `Published` on the **first** live target | T11 | Chief Editor, Line 2 |
| `FR-13` | A binding regulatory or court order forces retraction, bypassing normal revision | — | Chief Editor, Line 2 |

### 3.2 Non-functional

| ID | Requirement |
|---|---|
| `NFR-05` | Publication fails **safely to `ManualReady`** after bounded retries — degradation, never loss |
| `NFR-07` | Publication credentials are server-side only; zero secrets in the client bundle |
| `SEC-02` | Credential isolation at the publication boundary |

### 3.3 Constraints and assumptions

1. **Per-target status is mandatory.** A single article-level status cannot represent *"WordPress Published + LinkedIn ManualReady"* — which is the success scenario itself (`TC2`).
2. **`MockPublished` never satisfies `Published`.** Fixed, not configurable — it is what stops demo data becoming false evidence.
3. **`pub_target` and `platform_type` are orthogonal.** One states whether the business can automate the channel; the other names the channel. They are not merged.
4. **A retraction notice is an ordinary article** running the same five gates (`D-06`). No new article states.
5. **Third-party amplification is outside mirror scope** (`D-09`).

## 4. Behaviour

### 4.1 `FR-09` — Publish or fall back *(T7 / T10, System)*

> **Current-scope note (`D-243`, 2026-09-20; origin stays `[V1]`):** V1 delivers only the LinkedIn
> target-level `ManualReady` event; automated WordPress publication and retry are a V2-target item. See §12.
>
> **The "On approval" trigger below is not a V1 trigger (`D-250`, 2026-09-21):** V1 has no approval step. The
> `ManualReady` event is requested by `ROLE-SENIOR-JOURNALIST` after the final `business:T5` record; `Published`
> is not produced. The text below is preserved as the `[V1]`-origin intent.

**On approval, for each assigned target:**

1. Attempt publication where the target is automatable.
2. On success, record the live URL and set that target `Published`.
3. Where the target is **not** automatable, or automation fails after bounded retries, set it `ManualReady` and generate the formatted post content.
4. **The article becomes `Published` when at least one target holds a live URL** — not when all do.

**Partial success is a normal outcome, not an error.** WordPress succeeding while LinkedIn does not is the expected shape, and each target carries its own status independently.

### 4.2 `FR-10` — Confirm a manual publish *(T11, Chief Editor, Line 2, human)*

> **Current-scope note (`D-243`, 2026-09-20; origin stays `[V1]`):** runtime confirmation and `Published`
> promotion are a V2-target item, outside V1's selected slice. §4.1's manual fallback and this section are
> otherwise unchanged. See §12.

The Chief Editor enters the live URL for a `ManualReady` target; that target becomes `Published`. If it is the first target with a live URL, the article transitions to `Published`.

**The record is identical in shape to the automated path** — target, channel, status, URL, actor, timestamp. This is `US-10`'s requirement and the reason mirror-scope works later: a correction cannot reach every channel the original reached if manual channels were recorded more thinly than automated ones.

> **T11 has no successor node.** Its exposure is **clerical** — a mis-entered URL — not judgmental: the approval it records already passed T5 and T6. The audit log captures that by construction through executor, timestamp, and the URL itself.

### 4.3 `FR-13` — Order-driven retraction *(Chief Editor, Line 2)*

A binding regulatory or court order forces retraction **immediately**, bypassing normal revision.

**What is bypassed and what is not** — `D-10`, corrected from *"bypasses T8 entirely"*:

| Bypassed | **Not** bypassed |
|---|---|
| Deliberation — *whether* to retract is not open once a court has ordered it | Drafting the retraction notice |
| Queuing behind internal review | Publishing it to every target the original reached |
| | Logging the transition and the order |

**The notice is a publication.** It runs the same gates, and its targets are **inherited from the original's transaction record** (`D-08`) — mirror scope is derived, never recalled.

## 5. Acceptance criteria

| ID | Given | When | Then |
|---|---|---|---|
| `AC-14` | An `Approved` article with a WordPress target | The publication job runs | The post is created and the live URL is stored |
| `AC-15` | WordPress and LinkedIn targets; WordPress succeeds, LinkedIn does not | The job completes | **Per-target status differs**; the article is `Published` on the strength of the live target |
| `AC-16` | A target is `ManualReady` | The Chief Editor enters a live URL and confirms | That target becomes `Published`; the article follows if it is the first live one |
| `AC-19` | A published article receives a binding order | `regulatory_retraction_order` is set true | Retraction proceeds without waiting on internal revision; the notice is still drafted, mirrored, and logged |

**`AC-15` is the canary.** If per-target status cannot differ, `TC2` is unresolved and the success scenario is unreachable regardless of what else passes.

## 6. Edge cases

| Case | Required behaviour |
|---|---|
| All targets fail | Article stays unpublished; every target `ManualReady` or `Failed`. **No silent success** |
| Manual URL entered but not live | Out of scope for automated checking; the entry is recorded and attributable |
| Order arrives for a never-published article | No mirror scope exists; retraction is a no-op on targets, but the order is still logged |
| Retry exhausts before any target succeeds | `NFR-05`: fall back to `ManualReady`, never drop |
| Target added after publication | Treated as a new publication act with its own record |

## 7. Dependencies and assumptions

| Dependency | Nature | Status |
|---|---|---|
| `TR-DM-03` `publication_targets` / `publications` | **Blocking** — per-target status is impossible without it | ~~Create in S1.~~ `[V1]` **Corrected 2026-09-25 (`D-265`):** both tables exist in `0002_s1_editorial_schema.sql`, replayed on disposable local PostgreSQL only; **not applied to hosted Supabase** (`D-252`; live behaviour unverified under `DEP-05`) |
| `Q3` publish path | Route handler vs Edge Function | ~~**Open** — T1~~ `[V1]` **Corrected 2026-09-25 (`D-265`):** **decided** — Supabase Edge Function (`D-143`/`D-146`); not built |
| `Q5` retry scheduler | `NFR-05`'s bounded retry has nothing to fire it (`TC7`) | ~~**Open** — T1~~ `[V1]` **Corrected 2026-09-25 (`D-265`):** **decided** — `pg_cron` invoking the publication Edge Function (`D-143`/`D-146`); **no scheduler runs and no retry executes** |
| `SUPABASE_SERVICE_ROLE_KEY` | S4 is the architecture's **first** privileged path (`TC1`) | Declared, unused |
| Notice-as-article model | `FR-13` depends on it | `D-06`, S1 design |

## 8. Risks and mitigation

| Risk | Consequence | Mitigation |
|---|---|---|
| Manual path recorded more thinly than automated | Mirror scope has a hole exactly where humans acted; GRC evidence fails | `US-10`'s equal-fidelity requirement, tested by `AC-16` |
| `MockPublished` treated as `Published` | Demo data becomes false publication evidence | Fixed non-configurable rule |
| Per-target status deferred | Success scenario unreachable; `AC-15` cannot pass | `TC2` raised to S1 blocking |
| Retry with no scheduler | `NFR-05`'s bounded retry is prose, not behaviour | ~~`Q5`, T1.~~ `[V1]` **Corrected 2026-09-25 (`D-265`):** `Q5` is decided (`D-143`/`D-146`); the risk stays until the scheduler is built |
| First privileged path introduced without review | `TC1`'s authority model changes silently | Record as a `TC1` amendment, not drift |

## 9. `SPECS` candidate filter — `D-30`

**Fully determined here; no `SPECS` required:**
per-target independence · first-live-target promotion rule · partial success as normal · fallback to `ManualReady` · equal-fidelity manual recording · what a binding order does and does not bypass · target inheritance for notices

**Requires `SPECS`** — behaviour alone cannot settle these:

| Component | Why |
|---|---|
| `TR-DM-03` schema | The seven-value status enum, retry counter, and per-target row shape are not derivable from behaviour |
| Publish path (`Q3`) | Route handler vs Edge Function changes the deployment surface, not the behaviour |
| Retry scheduler (`Q5`) | "Bounded retry" does not specify the firing mechanism |
| Credential isolation | `NFR-07`/`SEC-02` require a storage and access design |
| Privileged write path | S4's first use of the service role amends `TC1`'s finding |

**Five need `SPECS`; the rest do not** — the same ratio as `FN-GATES-01-05`, which suggests the redundancy rule is discriminating rather than rubber-stamping.

## 10. Scope limits

Closes no Open Decision. Authorizes no code, schema, migration, or credential configuration. ~~`Q3` and `Q5` remain open and both gate S4.~~ `[V1]` **Corrected 2026-09-25 (`D-265`):** `Q3` and `Q5` are decided (`D-143`/`D-146`) and not yet built. `S4` is terminally deferred (`D-258`); automated WordPress publication and retry are a V2-target backlog (`D-243`/`D-244`), and V1 delivers only the LinkedIn `ManualReady` event (`V1-SM06`). `FR-13` is Project Scope, unanchored, and carries `PSK-04`.

## 11. Delivery target behavior — mutation refusal and external-acceptance prerequisite, `[decided_target_held]` (`D-179`)

**Added 2026-09-02, `docs/handoff/B-068-*.md` §20, `B068-R47`.** Not build-authorized while `D-171`'s
hold stands. Elaborates `Modular_PRD.md`'s Delivery requirements (`FR-09`/`FR-10`); does not duplicate
them.

| Rule | Refusal condition |
|---|---|
| Delivery consumes the approved, immutable `T6` disposition and executes the target outcome only | Any attempt to alter editorial judgment, reason, route evidence, or authority record during Delivery |
| Delivery records target outcome/failure linked to the disposition it consumed | A disposition change after Delivery starts, without a governed return |
| A route requiring external acceptance blocks Delivery until `external_acceptance_or_mandate_record` exists (`FN-EXCEPTIONS-06-11-12.md` §11.2 owns the trigger/acceptance record shapes) | Delivery proceeds while a required external acceptance record is absent |

Any editorial change discovered after Delivery starts is routed into a new governed return/workflow —
never a direct Delivery-stage edit.

## 12. V1 publication boundary — LinkedIn `ManualReady` and the `FR-10` deferral `[V1]` (`D-243`)

**Added 2026-09-20 (`D-243`, from `docs/handoff/B-119`); revised 2026-09-21 (`D-250`) — trigger, acting authority and content binding decided.** Behaviour only: no endpoint, table, key,
component or framework choice belongs here (`SPECS` and an authorized Lane B refinement own those).
This section is a **current-scope note** for §4.1 and §4.2, whose `[V1]` origin is unchanged.

**What V1 delivers.** After the `business:T5` Chief Editorial Desk ranking/routing record completes,
the system may record that the article's **LinkedIn** target is ready for a human to post manually, as a
target-level **`ManualReady`** event. It is a publication event, not an article state: it never marks
the article `Published`, never claims WordPress delivery, and does not itself change the article's
workflow state.

**What V1 does not deliver.** Confirming a live URL (`FR-10`/`T11`) and promoting a target or the
article to `Published`; automated WordPress publication, retry and credentials. Both are a **V2-target
backlog item** — a target only, opening no version.

| Behaviour | Rule | Status |
|---|---|---|
| Ordering | The LinkedIn publication target exists first; the `ManualReady` event is appended after it. Readiness is never a mutable status value | Specified |
| Replay | Repeating the same request for the same article, LinkedIn target and revision produces no second effective readiness outcome, and the repeat stays visible in the audit trail | Specified |
| Refusal | Missing `business:T5` completion evidence, a wrong route or target, missing formatted content, a stale snapshot or an unauthorized requester is refused with a named reason. **No readiness, article or publication record is changed**; append-only refusal evidence may be recorded | Specified (`D-250`) |
| Observable result | The board and detail view show the current effective LinkedIn readiness and its evidence, and never call the article `Published` | Specified |
| Trigger and precondition | The article has an accepted **final** `business:T5` ranking/routing record, a LinkedIn publication target and valid formatted content. No article-state transition and no publication approval is inferred | **Decided** (`D-250`) |
| Acting authority | **`ROLE-SENIOR-JOURNALIST` is the sole authorized virtual-agent requester, by explicit Judge grant.** The grant is for the request only: no `T5` impersonation, human Final Sign-Off, Route-1 accountability, WordPress publication, `Published` or live-URL assertion. Any other role, and an unauthenticated client, is refused | **Decided** (`D-250`) |
| Content binding and revision | Readiness binds to the **exact accepted formatted-content snapshot**; changed content cannot inherit an earlier snapshot's readiness, and prior events stay visible. Intake deduplication is a **separate rule**: a different-day intake is a distinct brief, not a readiness replay | **Decided** at behaviour level (`D-250`); the physical revision or scope identity, idempotency key and effective-current query are **Lane B's, in a later bounded work order** |

**Namespaces stay separate.** `business:T5` is the newsroom judgment stage; the technical `transition:T5`
is a different thing and is neither triggered nor implied. `ManualReady` alone does not satisfy `CR-19`,
which also requires the five-gate path and Chief Journalist approval.

**`SPECS` candidate filter (`D-30`).** Discarded as already determined here: nothing. Candidates for an
authorized Lane B refinement, not decided: the physical replay key, the query shape and the actor
authorization mechanism.
