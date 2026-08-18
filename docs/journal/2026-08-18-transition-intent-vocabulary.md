# Transition Intent Vocabulary — Brainstorm

**Date:** 2026-08-18
**Status:** Brainstorm and proposed direction. Planning only — no code, no migration, no schema decided.
**Purpose:** Replace free-text transition reasons with a controlled vocabulary held in its own table, so state changes become countable, filterable, and auditable.
**Normalized against:** `graphify` queries on intake, publication, and account-boundary vocabulary; direct reads of `Modular_PRD.md` §6, `media-industry-sop-fallback-implementation-plan.md` §9, `board-proposal-…-poc.md` §9.2/§16.4, `entry006.md` §13, and the sprint plan's S1 migration note.

## 1. Naming — reuse, do not mint

`event_type` is **already** the planned field name: the sprint plan's S1 migration note lists it among the columns to add, and the config block already writes `event_type=HumanOverride` for `LINE2_MAY_EXECUTE_LINE1_GATES`.

**Recommendation: keep `event_type`.** Introducing `transition_intent` as a second name for the same concept would recreate this project's most frequently caught defect — one fact carrying two names across two documents, drifting apart silently. The valuable part of the proposal is not a new word; it is **moving the values out of free text and into a governed table.**

`disposition` is already in use across the media-SOP and PoC documents, but it means specifically *the Chief Editor's `Publish`/`Hold`/`Escalate` decision*. It is narrower than every state change, so it should not be repurposed as the general term.

## 2. Two levels, not one

A single list cannot answer both questions an audit asks. Splitting them costs one extra column and makes the log genuinely analysable.

| Level | Question it answers | Example |
|---|---|---|
| **`event_type`** | What *kind* of state change was this? | `Return` |
| **Intent code** | On what *ground*? | `SOURCE_NOT_POSITIONED` |

Without the split you can count returns but never learn *why* work comes back. With it, "38% of returns are `SOURCE_NOT_POSITIONED`" becomes a finding about the Reporter gate rather than an anecdote.

**Keep the existing free-text `reason` as well.** `FR-06` requires a mandatory reason, and the narrative detail is not replaceable. The code answers *which category*; the text answers *what specifically happened*. Both, not either.

## 3. Proposed `event_type` values (9)

| Value | Meaning | Grounded in |
|---|---|---|
| `Advance` | Normal forward progression through a gate | `CR-10` five-gate sequence |
| `Return` | Sent back for revision or missing evidence | `FR-06` |
| `Hold` | Paused at article level; unrelated work continues | media-SOP §9 article isolation |
| `Escalate` | Routed for specialist, legal, or independence review | media-SOP §9 |
| `Override` | Authority exception, e.g. Line 2 executing a Line 1 gate | `LINE2_MAY_EXECUTE_LINE1_GATES` |
| `Publish` | Publication act, including ManualReady and its confirmation | `FR-09`, `FR-10` |
| `Remedy` | Post-publication correction ladder | media-SOP §9, `FR-13` |
| `System` | Executed by the system itself, neither person nor agent | T7/T10 System executors |
| `Archive` | Retention disposal of rejected work | `DATA_RETENTION_ARCHIVE_DAYS` |

## 4. Proposed intent codes (22)

Every code below is drawn from an existing document rather than invented.

**Evidence quality (4)** — from the PoC proposal §9.2 hold/escalate triggers

| Code | Ground |
|---|---|
| `UNSUPPORTED_CLAIM` | Material claim unsupported or circularly sourced |
| `SOURCE_NOT_POSITIONED` | Source not positioned to know |
| `CONTRADICTION_UNRESOLVED` | Material contradiction unresolved |
| `CORROBORATION_MISSING` | Isolated signal without independent confirmation |

**Legal and rights (5)**

| Code | Ground |
|---|---|
| `ALLEGATION_IDENTIFIABLE_PARTY` | Wrongdoing alleged against an identifiable person or organization |
| `RIGHTS_UNCLEAR` | Copyright, licence, contract, or platform rights unresolved |
| `REGULATED_ADVICE` | Regulated-advice interpretation risk |
| `CONFIDENTIAL_MATERIAL` | Confidential, private, personal, embargoed, or proprietary information |
| `COURT_OR_REGULATOR_ORDER` | Binding external order |

**Independence and governance (3)**

| Code | Ground |
|---|---|
| `AI_HUMAN_DISAGREEMENT` | Unresolved material disagreement between AI output and human review |
| `INDEPENDENCE_INSUFFICIENT` | Independence mechanism produced no meaningful challenge — **the OD2 trip-wire** |
| `EXTERNAL_REVIEW_ABSENT` | High-liability matter lacking Board or external review |

**Editorial fit (3)**

| Code | Ground |
|---|---|
| `AUDIENCE_MISMATCH` | Fails readership fit — the "apple versus pear" case |
| `NOT_NEWSWORTHY` | Fails the newsworthiness threshold |
| `PRIOR_PUBLICATION` | Originality or similarity concern |

**Operational (3)**

| Code | Ground |
|---|---|
| `CHIEF_EDITOR_ABSENT` | Degraded mode after prolonged absence |
| `AGENT_FAILURE` | Executor failed; reassignment required |
| `EMERGENCY_PUBLISH` | Bypass path with pre-publication legal review |

**Post-publication remedies (4)** — the media-SOP ladder, deliberately graduated

| Code | Ground |
|---|---|
| `CLARIFY` | Update or clarify with an audit note |
| `CORRECTION` | Prompt, prominent correction |
| `RETRACTION` | Integrity cannot be restored |
| `COMPLY_WITH_ORDER` | Compliance with a binding order |

## 5. What the relationship table buys

1. **Enforceability.** A typed foreign key cannot be misspelled or invented at write time. Free text can.
2. **Countability.** `FR-08`'s filterable board can filter and group on it; free text cannot be aggregated reliably.
3. **Calibration evidence.** `PSK-09` requires rule-version monitoring, calibration, and rollback. Coded intents are the raw material — patterns in *why* work is returned or held are what calibration acts on.
4. **The OD2 trip-wire becomes measurable.** `Q4` asks whether the OD2 detector should exist in-product. `INDEPENDENCE_INSUFFICIENT` as a countable code is what would make that detector possible at all, rather than a prose aspiration.
5. **Retirement without rewriting history.** A code can be deprecated going forward while every historical row keeps its original meaning — which matters because `NFR-02` makes the log append-only.
6. **Glossary support.** `FB-01` needs a controlled state-to-phase vocabulary; this is the same discipline applied to reasons.

## 6. The S1 boundary — what must be decided now versus later

| Now, in the S1 migration | Later, freely |
|---|---|
| The **column** on `workflow_transitions` that points at the vocabulary table | The **contents** of the vocabulary |
| Whether `event_type` and intent code are one column or two | Adding, deprecating, or regrouping codes |

**This is the reassuring part.** `NFR-02` makes `workflow_transitions` append-only, so a column added later is expensive. But a *lookup table* is an ordinary table — new rows any time, no migration of historical data. Get the hook right in S1; the vocabulary can evolve for years.

Corollary: the 22 codes above do **not** need to be correct or complete before S1. They need to be plausible enough to prove two columns are warranted rather than one.

## 7. Open questions

| # | Question |
|---|---|
| 1 | One column or two — is intent a sub-type of `event_type`, or an independent dimension? §2 argues two; the migration needs the decision |
| 2 | Should each code carry metadata (which Line may use it, whether it forces escalation, whether it is reversible), or stay a flat list? |
| 3 | Do POC and MVP share one vocabulary? Recommended yes — the workflow must not fork, and shared codes are what make the two lanes comparable as evidence |
| 4 | Does an intent code become mandatory for every transition, or only for non-`Advance` events? |

## 8. What this does not do

Closes no Open Decision. Ratifies nothing. Amends no governing document. Decides no schema. Every code and value above is a proposal for the Technical Requirements pass, not an approved vocabulary.
