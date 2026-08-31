# `CONFIG_LOG.md` — every configurable value, its source, and the decision it depends on

**Status:** provisioned by Lane A, 2026-08-21 (`D-91`). **Rows are authoritative; the code
implements them.**

## What this file is

`docs/journal/2026-08-16-sprint-plan.md` §10 draws the line this file records: *config-driven
does not mean uncommitted, and provisional does not mean unratified forever.* Every
config-driven value carries a row here naming its source and its Open Decision, **so ratifying
a decision is a config edit plus a `DECISION_LOG.md` line — never a code change.**

## Who writes it — `D-91`

**Lane A owns this file, content included.** A row's substance is a citation into the governing
set and an `OD` dependency — that is governance, and under `D-86` Lane B is explicitly *not*
expected to read the register. Lane B implements these rows in `lib/config/build-config.ts`;
it does not author them and does not edit this file.

**If Lane B needs a value that has no row, it raises a `docs/handoff/` entry** of kind
`dependency` (`D-90`) and waits. It does not invent the value, and it does not add the row.

## Standing rules

1. **No number in this file may appear as a literal in business logic.** The variable name is
   the only thing code may carry.
2. **`UNSET` is a value.** It is not a gap to be filled with a plausible default. Any code path
   dereferencing an `UNSET` value must fail loudly and route to the Chief Editor.
3. **Cite, never restate.** A row points at its source; it does not summarise it. A restated
   value is the drift mechanism (`G55`, `G56`, `G58`).
4. **This file carries no counts.** Not "ten provisional values" — the rows are the count.

---

## 1. Success-scenario targets — sprint plan §5/4.1

| Variable | Value | Source | OD | Provisional |
|---|---|---|---|---|
| `SUCCESS_ARTICLES_LOGGED_MIN` | 5 | Charter; Addendum §1; Blueprint §8; Business Case | — | No |
| `SUCCESS_ARTICLES_PUBLISHED_MIN` | 2 | Same four | — | No |
| `REVIEW_GATE_ROLE_COUNT` | 4 | Charter — "four review gates", review *roles* after the Reporter (`A4`) | — | No |
| `PIPELINE_GATE_COUNT` | 6 | Addendum §3.1 `T1`–`T6` — executor *transitions* | — | No |
| `PIPELINE_TRANSITION_COUNT_TO_PUBLISHED` | 7 | `T1`–`T7`, including the system publish step | — | No |
| `PIPELINE_ACTIVE_STATES` | ordered list of 8 | Addendum §4.1, minus the two side states | — | No |
| `PIPELINE_SIDE_STATES` | `["Needs Revision", "Rejected"]` | Addendum §4.1 | — | No |
| `BOARD_FILTER_DIMENSIONS` | `["state","topic","category","line_assignment"]` | Charter names the first three; Addendum, Blueprint and Business Case add Line | — | No |
| `SEQUENCE_BYPASS_TOLERANCE` | 0 | Charter — unconditional | — | No |
| `INDEPENDENCE_BYPASS_TOLERANCE` | 0 | `D1` — enforced at 0, **reported as provisionally satisfied pending `OD2`** | `OD2` | **Reporting only** |

**`REVIEW_GATE_ROLE_COUNT` = 4 and `PIPELINE_GATE_COUNT` = 6 are not in conflict** — different
granularity, roles versus transitions. This has been mistaken for a contradiction before.

## 2. Workflow and operational thresholds — §4.2

| Variable | Value | Source | Ratified |
|---|---|---|---|
| `RETURN_LIMIT_BEFORE_ESCALATION` | 3 | Addendum §3.3 | Yes |
| `PUBLISH_RETRY_MAX` | 3 | Addendum §7.2 | Yes |
| `PUBLISH_RETRY_BACKOFF_MINUTES` | 5 | Addendum §7.2 | Yes — **but nothing fires it** (`TC7`: no scheduler; `Q5`) |
| `DATA_RETENTION_ARCHIVE_DAYS` | 90 | `A6` | **No — unratified** |
| `SCORING_REVIEW_THRESHOLD_ARTICLES` | 50 | `A4` | **No — unratified** |
| `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS` | 48 | Addendum §6.4 — the boundary `S7` was corrected to | Yes |
| `SLA_DWELL_HOURS` | Discovered 48 · Logged 24 · Validated 48 · Investigated 72 · Drafted 72 · Reviewed 48 · Approved 24 | Blueprint §6 | Yes |

## 3. Scoring — Addendum §5, formula version pinned

The formula is pinned by version so a scoring change is a version bump with a `DECISION_LOG.md`
line, not a silent recalculation of history.

*Two rows below were added 2026-08-22 (`D-95`, raised as `B-007`): `SCORE_FORMULA_VERSION` stated
only in prose, and `CATEGORY_BALANCE_WINDOW_DAYS · _ARTICLE_THRESHOLD` written as one compound
cell naming two variables with the second abbreviated. **`config-coupling` found both** — a value
stated in a sentence is not an authoritative row, and an abbreviated name is not a name.*

| Variable | Value | Source |
|---|---|---|
| `TREND_WEIGHTS` | recency .35 · tier .25 · engagement .25 · velocity .15 | Addendum §5 |
| `TREND_RECENCY_DECAY_HOURS` | 168 | Addendum §5 |
| `TREND_ENGAGEMENT_SATURATION` | 500 | Addendum §5 |
| `TREND_VELOCITY_SATURATION_PER_HOUR` | 10 | Addendum §5 |
| `SOURCE_TIER_WEIGHTS` | 1.0 / 0.7 / 0.4 | Addendum §5 |
| `EDITORIAL_PRIORITY_WEIGHTS` | .30 / .25 / .20 / .15 / .10 | Addendum §5 |
| `REVIEWER_CONFIDENCE_WEIGHTS` | 1.0 / 0.6 / 0.3 | Addendum §5 |
| `PRIORITY_BANDS` | <0.4 / 0.4–0.7 / >0.7 | Addendum §5 |
| `DISPLAY_PRIORITY_MIX` | .5 / .5 | Addendum §5 |
| `CATEGORY_BALANCE_WINDOW_DAYS` | 7 | Addendum §5 |
| `CATEGORY_BALANCE_ARTICLE_THRESHOLD` | 3 | Addendum §5 |
| `SCORE_FORMULA_VERSION` | `"v0"` | Addendum §5 — pinned so a scoring change is a version bump with a `DECISION_LOG.md` line, never a silent recalculation of history |

**`TC3` blocks this section.** The scoring inputs do not exist in `0001_init.sql` —
`sources.reliability_tier`, `articles.source_id`, `trend_signals.engagement_metrics`,
`evidence_url`, `reviewer_confidence`, `topics.evolves_from` are all absent. These variables are
**declarable now and not computable until `0002`.** Declaring them is not a claim that they work.

## 4. OD-derived values — flagged, never literals — §4.4

**Every row here is provisional by construction.** The value is what Phase 0 runs on; the OD is
what could change it. Ratification lands in `DECISION_LOG.md`, not here.

| Variable | Phase 0 value | OD | Rule |
|---|---|---|---|
| `LINE2_EXECUTOR_TYPE` | `"human_primary"` | `OD1` | Provisional per Entry 007 |
| `LINE2_MAY_EXECUTE_LINE1_GATES` | `true` — via `HumanOverride` only | `OD1` | Every use writes `event_type=HumanOverride` and `judgment_independence_status=override_not_four_eyes` |
| `FOUR_EYES_MODE` | `"line_separation"` | `OD2` | Provisional per Entry 007. **No valid replacement exists if `OD2` resolves negatively** — sprint plan §8 |
| `JUDGMENT_INDEPENDENCE_STATUS_VALUES` | `["satisfied","not_applicable","override_not_four_eyes"]` | `OD2` | Addendum §4.1. `contingent_on_OD2` and `blocked` stay **retired**. **`G64`/`Q11` decided the shape and name** (`D-97`, `D-111` — stored column `line_separation_status`); `0002` is written and applied, no longer blocked *(corrected 2026-08-30, `D-161`/`B-061`)*. This config constant's own name is unchanged pending a separate symbol-rename pass |
| `AGENT_HEADCOUNT` | **UNSET** | `OD3` | No number exists at any level. **Not defaulted, not rounded, not back-derived from "four review gates"** |
| `LINE1_AGENT_ROSTER` | **UNSET** | `OD3` | Register `D2`. Phase 0 may run a single Line 1 identity for demo purposes; every transition logs `line_assignment` and `agent_id`, so shared executors are visible in data. Roster *shape* is a Chief Editor answer — `Q1` |
| `LINE3_EXECUTOR_IDENTITY` | **UNSET** | `D-57` | Must not equal any Line 1 or Line 2 identity (Addendum §13). `Q2` — **answered `D-57`: v1 has no independent assurance, so `FR-11` is not built.** Governed directly by `D-57`, not `OD3` or `OD4` (`D-168`). The variable stays `UNSET` and stays declared, pending a fresh future authorization if Line 3 is ever built |
| `FLAG_AGENT_ROSTER_MULTI` | `false` | `OD3` | Cannot be enabled without a headcount |

**Deliberately not set — do not add it.** There is **no Line 3 sampling percentage.** Entry
004's "random 5–10% weekly" did not carry forward; Entry 007 accepted `S9` as *automated 100%
pass plus risk-triggered human review*. A percentage would re-introduce rejected scope.

## 5. Fixed — not config, not a flag — sprint plan §10

**These are absent from this file's tables because they are not configurable.** Listed so that
nobody adds a variable for one: gate-sequence enforcement · `source_url` immutable once logged ·
every transition logged with who/when/why · audit log append-only, revision reasons undeletable ·
the same actor never holds both a Line 1 and a Line 2 role · at least one topic per article ·
publishing readiness requires all gates, tags and ≥1 target · `MockPublished` never satisfies
Published · `OD4` stays rejected for v1 · fundraising stays out of the editorial workflow.

**Adjusting any of these is a Charter-level act, not a config edit.**

## 6. Routes — `D-59`, added 2026-08-21 (`D-93`, raised as `B-002`)

**One origin, two paths.** `D-59` resolved `G10`/`QC`: the MVP and the POC share an origin and
are separated by path, so neither lane holds the root and the seniority question dissolves.

| Variable | Value | Source | Provisional |
|---|---|---|---|
| `EDITORIAL_ROUTE` | `/editorial` | `D-59` — the MVP lane | No |
| `POC_ROUTE` | `/request-brief` | `D-59` — the POC lane | No |
| `DOMAIN_APEX` | **UNSET** | `D-59` — **neither lane holds the root**, deliberately | n/a — `UNSET` is the decision |

**`DOMAIN_APEX` is `UNSET` by decision, not by omission.** Rule 2 applies without exception: do
not default it to either route.

**`C-15` carries the follow-up** — promote the two lanes to **distinct origins** (subdomains or
apexes) **before the POC handles real client data**. Phase: `T3`, with the POC lane charter, and
no later than the *"lock it down"* sprint. **Path separation is a v1 arrangement, not the end
state.**

## 7. Feature flags — `lib/config/flags.ts`

**Canonical names arbitrated 2026-08-21 (`D-93`, raised as `B-002`).** The sprint plan named
these flags twice — as `FLAG_S1`…`FLAG_S9` in the S0 deliverable list (§S0) and as semantic names
in §7. **§7 wins**: it carries each flag's definition and enablement condition, while §S0's list
is an abbreviation of it. **The abbreviated form is not a second naming scheme and must not be
implemented.**

### 7.1 Stored flags

| Flag | Phase 0 | Source | Enablement condition |
|---|---|---|---|
| `FLAG_AGENT_ROSTER_MULTI` | `false` | `OD3`, §4 above | Cannot be enabled without an `AGENT_HEADCOUNT` |
| `FLAG_LINE3_ENABLED` | `false` | `Q2`, `D-57` | **Stays false in v1** — `S5` is out of scope; v1 has no independent assurance |

### 7.2 Derived flags — **not stored**

**`FLAG_FOUR_EYES_LINE_SEPARATION` and `FLAG_LINE2_HUMAN_PRIMARY` are derived views, never
independent values.** Lane B asked which they were, and the answer matters: storing them beside
`FOUR_EYES_MODE` and `LINE2_EXECUTOR_TYPE` would create **two sources of truth for one fact**,
which is the drift mechanism this project has recorded repeatedly.

| Flag | Derivation |
|---|---|
| `FLAG_FOUR_EYES_LINE_SEPARATION` | `FOUR_EYES_MODE === "line_separation"` |
| `FLAG_LINE2_HUMAN_PRIMARY` | `LINE2_EXECUTOR_TYPE === "human_primary"` |

**Ratifying `OD1` or `OD2` therefore moves one value, not two.** That is the whole point of §4's
rule — a ratification is a config edit plus a `DECISION_LOG.md` line.

### 7.3 Sprint flags — semantic names, all `false` in Phase 0

**Every one is `false`, and every one enables at `S5`, which is out of scope for v1.** They are
declared so the behaviour they gate has a named switch rather than an inline condition.

| Flag | What it gates |
|---|---|
| `FLAG_S1_CONFIDENCE_FLOOR` | Low `reviewer_confidence` forces a Line 2 flag at `T5` |
| `FLAG_S2_PLAN_DEVIATION` | `plan_deviation` on angle drift, visible to Line 2 |
| `FLAG_S3_RETRACTION` | `regulatory_retraction_order` bypasses **deliberation only**, not `T8`'s publication mechanics; forces a retraction notice (`article_kind`), never an eleventh `Retracted` state (`D-06`, `D-110`) *(corrected `D-141` — this row still described Entry 007's pre-`D-06` design)* |
| `FLAG_S4_PREPUB_LEGAL` | Pre-publication legal review ahead of emergency bypass |
| `FLAG_S5_ACTING_EDITOR` | `chief_editor_acting_status`, `loa_start`, `loa_end`, `board_approval_ref`, auto-revert |
| `FLAG_S6_RISK_AT_INTAKE` | `risk_stratification` computed at `T1`, not `T5` |
| `FLAG_S7_DEGRADED_MODE` | Degraded mode **>48h only** — Addendum §6.4 covers under-48h |
| `FLAG_S8_ATTESTATION` | `publication_readiness_attestation` required at `T5`/`T6` |
| `FLAG_S9_AUTO_PASS` | Automated 100% pass to a knowledge base; human Line 3 stays risk-triggered |

**Declaring a flag is not building what it gates.** None of the behaviour above exists, and a
flag flipped to `true` today would gate nothing.
