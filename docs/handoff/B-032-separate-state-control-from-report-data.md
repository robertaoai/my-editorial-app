# B-032 — Separate state control from report, analytics, and brief data

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** final S1 schema contract, migration `0002`, and therefore S1–S4
- **Status:** Answered
- **Lane A:** **Answered `D-112` — your classification decided the schema, and it is worth saying how much.** `B-029` grouped seven items because they share one migration window; **you showed they do not share one semantic class**, and every subsequent ruling used your table as its frame. **Your §2 was the most valuable part**: the packet overstated the open business decisions, and checking each against the register found `D-55`, `D-07` and `D-06` already settled — plus a fourth Lane A found by following your method, `Q10`, which had read `Open` since `D-73` decided it (`D-109`). **Your §4 drift list was correct on all counts.** **Every recommendation in §3 was adopted**: `line_separation_status` over `judgment_independence_status` for the reason you gave — the system cannot prove cognitive independence; the typed-control/versioned-artifact split; `article_kind` and `original_article_id` with no eleventh state; risk tier as a classification and never a state; the immutable report record with typed anchors; `D-55`'s map with **no default branch**; and `D-07`'s restrict. **One thing you did not cite and Lane A checked before ratifying: `G19`'s fourth part, inherited targets, was already decided by `D-08`** and implemented in `FN-PUBLICATION` §4.3 — so ratifying your two names closed `G19` without a hole.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Evidence:** S1 window closed by `D-110`/`D-111`/`D-112`; `0002` authorized in `V1-BUILD-SPEC.md`; all six `[Q11]` markers cleared in `Modular_PRD.md`
- **Verified-At-Commit:** 6283999

## What happened

Lane B reviewed the seven items assembled under `B-029` before attempting migration `0002`:
`Q11`'s field name, `QA3`, notice-as-article, risk tier, report binding, approved-state backfill,
and `on delete restrict`.

They share one migration window, but they do **not** share one semantic class. Treating every
status-like value as part of the article state machine would create competing lifecycle truths.
Treating every non-state item as analytics or a report would hide two infrastructure decisions:
storage shape and referential integrity.

The correct parent model is:

1. one article lifecycle state machine;
2. separate per-transition control evidence;
3. separate editorial-content, analytics, report, and brief data; and
4. typed storage and referential-integrity rules supporting all three.

No code or migration is authorized by this review.

## 1. Canonical classification

| Item | Primary class | Part of the article state machine? | Correct placement |
|---|---|:---:|---|
| Approved-state backfill | **State management** | **Yes** | Migration from the eight-state `article_state` values into `article_state_v2` |
| `Q11` three-value status | **Transition-control evidence** | **No** | Typed, non-null column on `workflow_transitions`; it classifies one transition |
| Notice-as-article | **Editorial content / publication brief** | **No new state** | Article-kind discriminator plus notice→original relationship; the notice uses the existing ten-state lifecycle |
| Risk tier | **Analytics and control input** | **No** | Typed article dimension with provenance; never an article lifecycle state |
| Report record and binding | **Report / audit artifact** | **No** | Separate immutable report record with typed anchors and a versioned snapshot |
| `QA3` typed columns vs versioned JSON | **Storage architecture** | **No** | Typed control/query fields plus versioned JSON only for the immutable artifact body |
| `on delete restrict` | **Referential integrity / retention control** | **No** | Foreign-key behavior in migration `0002`; not a report field and not a state |

### The two status vocabularies must remain separate

The article lifecycle is the accepted ten-state `article_state_v2`:

`Discovered` → `Logged` → `Validated` → `Investigated` → `Drafted` → `Reviewed` → `Approved`
→ `Published`, with `Needs Revision` and `Rejected` as the defined side states.

The `Q11` values — `satisfied`, `not_applicable`, and `override_not_four_eyes` — do not describe
where an article is. They describe whether structural Line separation was satisfied for one
transition. No transition graph exists between those values, so they are not a second state
machine.

## 2. Decision residue — what is actually still open

| Item | Existing decision | Remaining decision only |
|---|---|---|
| Approved-state backfill | `D-55` already fixes the total mapping, including `chief_approved` → `Approved`; `Validated` and `Needs Revision` backfill empty | **No business decision remains.** Lane B needs only migration verification |
| `on delete restrict` | `D-07` already requires `workflow_transitions.article_id` to replace cascade with restrict | **No direction decision remains.** `GA9` is implementation/verification work |
| Notice-as-article | `D-06` already says the notice is an ordinary article citing the original, uses the same gates, and creates no new article states | Decide the physical discriminator and self-reference names only |
| Risk tier | `D-11` already requires a risk-tier dimension on articles | Decide the allowed values, assignment authority, and provenance fields |
| `Q11` | `D-97` already fixes the three-value typed shape | Decide the mechanism-accurate column name only |
| `QA3` | Enforcement and filtering require typed fields | Ratify the typed-plus-versioned-snapshot boundary rather than select one global format |
| Report binding | `D-14` already fixes report immutability and supersession by a new report | Decide the typed anchor fields and the retraction-survival relationship |

The current Stage 4 packet therefore overstates the open business decisions. Re-deciding `D-55`,
`D-07`, or `D-06` would reopen approved intent without naming an amendment.

## 3. Recommended Chief Editor decisions

### 3.1 `Q11` — accept `line_separation_status`

Use one typed, non-null `workflow_transitions.line_separation_status` column with the already
approved values:

- `satisfied`
- `not_applicable`
- `override_not_four_eyes`

This name states what the system can prove structurally. Do not use
`judgment_independence_status`, because the system cannot prove cognitive independence. Do not
store `line_boundary_crossed` as a second truth; expose it as a derived view when needed.
`identity_assurance` remains separate executor-provenance data and does not replace the approved
three-value classification.

### 3.2 `QA3` — accept a typed-control/versioned-artifact split

Use typed columns for values that participate in constraints, state transitions, permissions,
filters, joins, retention, or binding. This includes lifecycle states, transition-control status,
risk tier, record identifiers, foreign keys, timestamps, and every version identifier.

Use versioned JSON only for the immutable explanatory body of a report or brief, where the shape
may grow without changing enforcement. Every JSON body must have a typed `schema_version`; JSON
must never be the source of truth for a gate, state transition, referential relationship, or board
filter.

This is not a compromise between two global choices. It places each data class in the form its
behavior requires.

### 3.3 Notice-as-article — keep one lifecycle

Retain `D-06`: represent the notice as an article using the existing ten-state lifecycle. Add a
typed article-kind discriminator and an original-article reference. Suggested physical names for
Lane A to ratify are:

- `articles.article_kind`: `standard` | `retraction_notice`
- `articles.original_article_id`: nullable for a standard article and required for a retraction
  notice

The original article's retraction/supersession condition is derived from a published notice and
its publication records. Do not add `Retracted` to `article_state_v2`; that would create an
eleventh lifecycle state contrary to `D-06` and the accepted transition specification.

### 3.4 Risk tier — store a classification, not a state

Retain the `D-11` dimension as a typed `articles.risk_tier` control input. It must not be added to
`article_state_v2`, and it must not be silently recomputed from changing rules after publication.

The Chief Editor still needs to approve:

- the tier vocabulary;
- who assigns or changes a tier;
- whether a rule proposes the value while the Chief Editor confirms it; and
- the provenance needed to reconstruct the assigned value, including rule-set version, actor,
  reason, and time.

If the business later wants a calculated current-risk view, derive that view from recorded inputs.
Do not store both a calculated result and an independently editable duplicate.

### 3.5 Report binding — typed anchor, immutable snapshot

Create a separate immutable report record. Its binding should be typed and should survive later
article state changes, publication, correction, and retraction. The minimum contract for Lane A to
ratify is:

- report identity;
- `article_id`;
- an as-at transition or revision anchor;
- tenant identity;
- template version;
- judgment-rule version;
- JSON schema version;
- frozen report/brief snapshot; and
- optional `supersedes_report_id` linking a replacement report to the earlier report.

A retraction does not rewrite or detach an issued report. It creates new evidence while the prior
report remains bound to the article and the point-in-time record on which it was issued.

### 3.6 Approved-state backfill — accept the existing total map

Do not ask the Chief Editor to decide this again. Implement the `D-55` map exactly:

| Existing value | `article_state_v2` value |
|---|---|
| `logged` | `Discovered` |
| `reported` | `Logged` |
| `investigated` | `Investigated` |
| `journaled` | `Drafted` |
| `senior_reviewed` | `Reviewed` |
| `chief_approved` | `Approved` |
| `published` | `Published` |
| `rejected` | `Rejected` |

`Validated` and `Needs Revision` intentionally receive no backfilled rows. The migration must have
no default or catch-all branch; an unknown old value fails loudly.

### 3.7 Delete behavior — implement the existing restriction

Do not ask whether cascade or restrict is preferred. `D-07` already decided that
`workflow_transitions.article_id` uses `ON DELETE RESTRICT` in migration `0002`. This is
referential-integrity work owned by the schema, not an editorial lifecycle status.

Any broader disposal, archival, report-parent, or notice-parent relationship must be decided by
its own retention rule. It must not silently weaken the specific `D-07` guarantee.

## 4. Document drift found

1. `V1-BUILD-SPEC.md` lists `Q11` as `line_boundary_crossed` plus `identity_assurance`, while the
   same file later records `D-97`'s binding three-value status and rejects the boolean fallback.
   The first row is stale.
2. The latest `B-029` decision packet describes approved-state backfill as open even though
   `D-55` and the Build Spec already provide the complete map.
3. The packet describes `on delete restrict` as undecided even though `D-07` already selects it.
4. The packet asks whether a notice is an article even though `D-06` already answers yes. Only the
   physical discriminator and reference remain open.
5. `Modular_PRD` `AC-19` says the original article reaches `Retracted`, but `D-06` and
   `SPECS-TRANSITION-ENFORCEMENT` say there are no new article states and the accepted ten-state
   enum contains no `Retracted`. Register precedence rejects the eleventh-state reading; Lane A
   must propagate the correction at the tier that owns `AC-19`.

## 5. What is guaranteed to fail

- **One generic status field:** risk, report condition, publication status, and article lifecycle
  overwrite each other's meaning and no valid transition graph can be enforced.
- **A second retraction state machine:** article counts disagree depending on whether a query reads
  the original or the notice, and `D-06` is breached.
- **JSON as the control source:** database constraints and board filters depend on application-side
  interpretation, so direct database writes bypass the business rule.
- **Typed columns for an evolving report body:** every explanatory-field change forces an
  irreversible migration even when no control or query depends on it.
- **A report bound only to the article's current row:** later correction or retraction changes the
  apparent evidence on which the old report was issued.
- **Re-deciding the backfill with a default branch:** unknown legacy values are silently converted
  into a valid but false state.
- **Leaving cascade in place:** deleting an article silently deletes the transition evidence that
  `NFR-02` says must survive.
- **Storing a derived risk value beside editable source fields:** the two representations drift and
  neither remains authoritative.

## 6. Required repair, parent first

1. Lane A corrects the Stage 4 packet to distinguish decided direction from remaining physical
   design.
2. The Chief Editor decides only the genuine residue: the `Q11` name, the typed/JSON boundary,
   notice field names, risk vocabulary and provenance, and report anchors.
3. Lane A arbitrates the identified contradictions through the decision register and propagates
   the decision fact to the Build Spec and Artifact Inventory in the same pass; it updates
   `Modular_PRD` where `Q11` and `AC-19` own contradictory requirement language.
4. Lane A supplies Lane B one typed schema contract that separately labels lifecycle,
   transition-control, editorial-content, analytics, report, and integrity fields.
5. Lane A rebuilds Graphify with the curated layer preserved and verifies repository-relative
   portability against the committed decision set.
6. Only then may Lane B draft and test a new `0002_*.sql`; `0001_init.sql` remains unchanged.

## 7. Success criteria

- exactly one article lifecycle enum exists and it contains the accepted ten states;
- the Q11 column is typed, non-null, mechanism-accurate, and not duplicated by a stored boolean;
- retraction notices reuse the article lifecycle and cannot create an eleventh state;
- risk tier is queryable but remains distinct from workflow state;
- reports bind to a point-in-time article record and remain immutable after retraction;
- control and relationship fields are typed, while only artifact bodies use versioned JSON;
- the `D-55` backfill is total and contains no default branch;
- `workflow_transitions.article_id` uses `ON DELETE RESTRICT`;
- the governing tiers agree and Graphify represents their committed state; and
- Lane B can write migration `0002` without inventing business meaning.

## What Lane B did instead

Stopped before writing migration `0002`, preserved the frozen `0001_init.sql`, and supplied this
classification and repair packet for Lane A and the Chief Editor.

---
