# SPECS — Publication: Publish Path and Retry Scheduler

**Date:** 2026-08-28
**Tier:** `SPECS` — fourth tier of `D-29`. Implementation big picture.
**Status:** Draft. **Planning only — no code, migration, or deployment authorized.**
**Authorized by:** `D-143` — rules `Q3` (publish path) and `Q5` (retry scheduler)
**Source behaviour:** `FN-PUBLICATION-09-10-13.md` §4 (`FR-09`, `NFR-05`)
**Sprint:** S4.

---

## 0. Section origin — `D-36`

Living document; no build-version prefix, does not freeze. **All sections `[V1]`.** An unmarked change to a `[V1]` section is a defect, not an update.

**No Technical Stack section beyond what `D-143` already named.** `D-30`: added only when the build starts.

---

## 1. Executive summary `[V1]`

**Intent.** Name the runtime and firing mechanism for `FR-09`'s publish attempt and `NFR-05`'s bounded retry — behaviour that `FN-PUBLICATION-09-10-13.md` left as `Q3`/`Q5`, both Open, because *"bounded retry" does not specify the firing mechanism* and *route handler vs Edge Function changes the deployment surface, not the behaviour* (fn-spec §9).

**Two of five.** The fn-spec named five components needing `SPECS`. This document covers exactly two — publish path and retry scheduler — because `D-143` ruled only those two. Credential isolation, the `TC1` privileged-write-path amendment, and `TR-DM-03`'s schema shape are **out of scope here**, per §2.

**Why `pg_cron` and an Edge Function, not a Route Handler.** `D-143`'s reasoning, not restated in full: a Postgres-native scheduler cannot call a Vercel Route Handler directly, so ruling `Q5` as `pg_cron` constrained `Q3` toward an Edge Function — and both sit on infrastructure `D-120` already provisioned, adding no new dependency.

## 2. Scope `[V1]`

**In scope — the two components `D-143` named:**

1. The Edge Function's invocation contract (what triggers it, what it reads, what it writes)
2. The `pg_cron` job definition (schedule, what it calls)

**Explicitly out of scope — and this boundary is load-bearing:**

| Excluded | Owner |
|---|---|
| `publication_targets`/`publications` column shape | `TR-DM-03`, already in `supabase/migrations/0002_s1_editorial_schema.sql` |
| Credential storage and access design | `NFR-07`/`SEC-02` — separate `SPECS` document, not yet written |
| `SUPABASE_SERVICE_ROLE_KEY`'s first genuine use | `TC1` amendment — a governance finding, not an implementation detail this document settles |
| WordPress/LinkedIn API request shapes | Provider integration detail, not architecture |
| `FR-10`'s manual-confirm UI | `docs/specs/ux/` — separate, currently empty (`V1-ARTIFACT-INVENTORY.md` row 51) |

> **Why this list matters.** Writing these anyway would restate decisions this document does not own — the same `D-30` restatement layer `SPECS-TRANSITION-ENFORCEMENT.md` §2 already warns against, one feature group over.

## 3. Invocation contract `[V1]`

**One Edge Function, `publish-article`, invoked only by `pg_cron`.** No client-facing route calls it directly — `FR-09`'s trigger is "on approval," which lands a row, not a request; the function's job is to act on rows that are due, not to be called synchronously from the approval path.

| Step | What happens |
|---|---|
| 1 | `pg_cron` fires `publish-article` on a fixed schedule (§4) |
| 2 | The function selects `publication_targets` rows whose latest `publications` event is `Pending`, or is `Failed`/no live URL with `retry_count` under the bound and `PUBLISH_RETRY_BACKOFF_MINUTES` elapsed since the last attempt |
| 3 | For each due target, attempt the provider call; on success, insert a `publications` row with `event_type = 'Published'`, `published_url` set; on failure, insert `event_type = 'Failed'`, `retry_count` incremented |
| 4 | Where the target is not automatable, or the retry bound is reached, insert `event_type = 'ManualReady'` and generate `formatted_content` — `NFR-05`'s fallback, not an error path |

**Idempotency.** `provider_event_id` (`0002_s1_editorial_schema.sql` line 434's unique index) is the guard against a provider's own retry storms double-recording a success — the function must pass through whatever event identifier the provider returns, not synthesize one.

**What this function does not decide.** Which target reached `Published` first, and therefore whether the article-level status changes, is derived by reading `publications` — `FR-09` step 4's *"the article becomes Published when at least one target holds a live URL"* is a read-time derivation, not a write the function performs directly on an article-status column.

## 4. `pg_cron` job definition `[V1]`

**Schedule matches the configured backoff, not an independent value.** `PUBLISH_RETRY_BACKOFF_MINUTES = 5` (`CONFIG_LOG.md`) is the interval between retry *attempts* on one target; the `pg_cron` job runs at that same cadence so a due retry is never delayed by the scheduler itself.

```
select cron.schedule(
  'publish-article-run',
  '*/5 * * * *',
  $$ select net.http_post(...) $$  -- invokes the publish-article Edge Function
);
```

**Extension enablement is a migration concern, not this document's.** `pg_cron` (and, if used for the HTTP call, `pg_net`) must be enabled via `supabase/migrations/`, which is Lane B's surface (`D-56`) — this document specifies what the job does, not the migration that installs the extension.

**One job, one function.** No per-target or per-channel `pg_cron` jobs — fan-out across due targets happens inside `publish-article` (§3 step 2), not by scheduling multiplicity. A future channel with a genuinely different cadence would be a new, explicitly-named job, not a default.

## 5. Dependencies `[V1]`

| Dependency | Nature | Status |
|---|---|---|
| `publication_targets`/`publications` (`TR-DM-03`) | **Blocking** — the function reads and writes these | Drafted, `0002_s1_editorial_schema.sql`, not yet applied (`DEP-05`) |
| `pg_cron`, `pg_net` extensions | **Blocking** — nothing fires the function without them | Not yet enabled — Lane B migration item |
| Credential isolation design | **Blocking** — the function needs provider credentials to call WordPress/LinkedIn | **Open**, separate `SPECS` document not yet written |
| `SUPABASE_SERVICE_ROLE_KEY` first use | **Blocking** — the function's own database access needs it, `TC1` amendment first | **Open** — governance finding, not this document's to resolve |
| `PUBLISH_RETRY_BACKOFF_MINUTES` | Non-blocking, already configured | `CONFIG_LOG.md`, value `5` |

**Every blocking dependency here is either Lane B's migration work or a still-open governance item** — this document is implementable once those land, and does not front-run them.

## 6. Verification `[V1]`

| # | Test | Passes when |
|---|---|---|
| V-1 | `pg_cron` job fires on schedule | `cron.job_run_details` shows an invocation at the configured interval |
| V-2 | A due `Pending` target is attempted | A `publications` row is inserted with `event_type` reflecting the provider outcome |
| V-3 | A target under the retry bound, backoff not yet elapsed | No attempt made; `retry_count` unchanged |
| V-4 | A target at the retry bound | `event_type = 'ManualReady'`, `formatted_content` populated — never silently dropped |
| V-5 | Duplicate provider webhook / retry storm for one `provider_event_id` | Exactly one `publications` row survives — `publications_provider_event_uidx` |
| V-6 | WordPress succeeds, LinkedIn does not, in the same run | Each target's own event history reflects its own outcome — no shared status |

**This is a Behavior Test list, not a Setup & Specification Audit** — per the vocabulary this session settled (`V1-DECISION-REGISTER.md` §5.14cw's companion discussion), none of V-1 through V-6 are satisfied by asserting on migration text; each requires the function and job actually running against Postgres.

## 7. Risks `[V1]`

| Risk | Consequence | Mitigation |
|---|---|---|
| Function invoked synchronously from the approval path instead of `pg_cron` | Publish becomes a blocking step in the approval request; a slow provider call stalls the editor | §3 — invocation is scheduler-only |
| `pg_cron` schedule drifts from `PUBLISH_RETRY_BACKOFF_MINUTES` | Two sources of truth for the same interval, the `D-38` drift pattern one tier down | §4 — schedule is derived from the configured value, not independently set |
| Function double-processes a due target across overlapping runs | Duplicate provider calls, possible duplicate publish | `provider_event_id` uniqueness (§3); a future revision may add a `FOR UPDATE SKIP LOCKED` claim step if overlap is observed |
| Credential isolation deferred past S4 build start | The function has nowhere safe to read provider credentials from | Flagged blocking in §5 — not this document's to resolve, but named so it isn't missed |

## 8. Scope limits `[V1]`

Closes no Open Decision beyond `Q3`/`Q5`, both closed by `D-143`. **Authorizes no code, migration, or deployment.** Does not specify credential storage, the `TC1` amendment, or `TR-DM-03`'s column shape — those remain open, named in §2 and §5 so they are not lost, not answered here.
