# Fn_Specs — Editorial Gate Features `FR-01` … `FR-05`

**Date:** 2026-08-19
**Tier:** `Fn_Specs` — functional specification. Third tier of `D-29`: `PRD` → `Modular_PRD` → **`Fn_Specs`** → `SPECS`.
**Status:** Draft. Planning only — no build authorized.
**Source:** `docs/Modular_PRD.md` §5 (`FR-01`–`FR-05`), §6 (`AC-01`–`AC-08`), Addendum §3.1 (T1–T6).
**Scope:** the five gate features. Board, publication, and exception features follow in separate documents.

> **`D-30` redundancy rule applies.** Behaviour is stated here to be **sufficient**. A `SPECS` document is written only where functional definition alone cannot determine implementation — §9 names exactly which parts qualify and why.

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

The five gates are the product. Everything else in the system exists to record, display, or publish what they decide.

**User value:** the Chief Editor gets a pipeline where an article cannot skip a step, every transition answers *who, when, and why*, and the review that matters is performed by a human rather than asserted by an agent.

**Strategic alignment:** this is `CR-19`'s success scenario end to end — *paste a URL → five gates with logged transitions → approve → publish, with zero bypasses.* `FR-01`–`FR-05` cover intake through independent review; `FR-06`–`FR-13` handle the rest.

**Boundary:** these features define **behaviour at each gate**. They do not define storage, field names, or interfaces — see §9.

## 2. Requirements

### 2.1 Functional

| ID | Requirement | Gate | Line | Executor |
|---|---|---|---|---|
| `FR-01` `[V1]` | Log an article from a URL with **exactly one subject topic** and a trend signal; the article enters at the pipeline entry state. *(`G39` — restated from "≥1 topic tag", which conflated two concepts; see §3.1)* | T1 | 1 | Agent |
| `FR-02` | Validate source and confirm trend evidence as **two distinct transitions** (T2, T3), never one | T2, T3 | 1 | Agent |
| `FR-03` | Draft the editorial adaptation with a completed meaning-invariance checklist and ≥1 publication target | T4 | 1 | Agent |
| `FR-04` ⚠ | T5 review is executed by a **Line 2 human**; agent contribution is metadata, never the executor | T5 | **2** | **Human** |
| `FR-05` ⚠ | Classify every transition's independence; **never silently treat an override as compliant** | all | — | — |

`⚠` marks `OD`-dependent provisionality per `Modular_PRD` §0.4. `FR-04` depends on `OD1`; `FR-05` on `OD2`.

### 2.2 Non-functional

| ID | Requirement | Why it lands here |
|---|---|---|
| `NFR-01` | Invalid transitions are rejected **by the database**, not by application code | `TC1`: the anon key is public and RLS is permissive, so application checks are advisory only |
| `NFR-02` | The transition record is append-only; the transition row is written **before** the state changes | Ordering is behavioural, not implementational — a state change with no preceding row is a defect regardless of storage |
| `NFR-08` | Every transition is reconstructable from the log alone | Defines what the log must *answer*, not how it stores it |

### 2.3 Constraints and assumptions

1. **The entry boundary is a URL.** Nothing enters as a bare topic. Commissioned POC work resolves to a URL *before* intake (`B2` in the storyboard).
2. **Same-agent adjacency is permitted within Line 1.** T1→T2→T3→T4 may share an executor. This is the standard rule under the Three Lines Model, not an exception.
3. **Four-eyes is satisfied at Line boundaries only** — T5 (1→2) and T6 (2→1).
4. **No auto-advance.** `NG-10`/`TC9`: no confidence score advances a gate, ever. Not configurable.
5. **`OD2` negative voids `FR-04`/`FR-05`'s model entirely** — a pre-launch hard stop, not a backlog item.

## 3. Gate behaviour

### 3.1 `FR-01` — T1 Intake *(Reporter, Line 1, Agent)*

`Discovered → Logged`

**Required on entry:** `source_url`; **exactly one subject topic**; a trend-signal description.

> **`G39` — two concepts, one word.** In an editorial business the **topic is the subject**: what the article *is about*. Exactly one, held as `articles.topic_id`. **Analytical tags are separate and many** — `trend_signals` with `signal_type = 'topic_tag'` — and serve trending and different-angle analysis, not subject identity. The original wording *"≥1 topic tag"* read as cardinality on one concept when there are two. **The schema is correct as applied; only the wording was imprecise** (`D-38`). Author and publication date are auto-extracted where possible and flagged for Investigator review when extraction fails.

**Behaviour:**
1. Reject the URL if an article already exists for it — duplicate intake is refused, not merged.
2. Create the article at the entry state.
3. Write the transition record **before** the state exists.

> **Open dependency — `FB-05`.** A trend signal is *required* at T1, but `CR-14` (AI tagging at the Reporter gate) has **no functional requirement**. This field has no defined producer. Either define its provenance or drop it from the required set — do not ship a required field with no source.

### 3.2 `FR-02` — T2/T3 Validation and investigation *(Investigator, Line 1, Agent)*

`Logged → Validated → Investigated`

**Two transitions, never collapsed into one.** That separation is the requirement, not an implementation detail: T2 establishes *the source is real and characterised*; T3 establishes *the story is worth pursuing and not duplicated*. Merging them loses the distinction between a bad source and a weak angle.

- **T2 requires:** URL confirmed live; platform identified; source reliability tier set; author and publication date confirmed or entered.
- **T3 requires:** duplicate check passed; trend-signal evidence and reviewer confidence recorded; topic confirmed against the scope boundary; editorial angle identified.

**Four-eyes:** `not_applicable` for both — within Line 1.

### 3.3 `FR-03` — T4 Drafting *(Journalist, Line 1, Agent)*

`Investigated → Drafted`

**Requires:** a non-empty editorial adaptation; ≥1 publication target assigned; the meaning-invariance checklist completed.

**Meaning invariance is the load-bearing check** — the adaptation must not change what the source claims. A draft that is well-written but alters the source's meaning fails this gate.

### 3.4 `FR-04` — T5 Independent review *(Line 2, human-executed)* ⚠

`Drafted → Reviewed` · **four-eyes `satisfied`** — Line 1 → Line 2 boundary

**Requires:** fact check passed; taxonomy compliance passed; meaning invariance confirmed; editorial quality meets standard.

**Behaviour:**
1. **An agent attempting T5 is refused.** Line 2 is human-primary. This is the gate's defining property, not a configuration.
2. Agent contribution is recorded as **assisting metadata**. The human signs.
3. **Blind first pass:** Line 2 records its own disposition **before** the Line 1 recommendation and confidence are revealed.

> **Why the blind pass is functional, not cosmetic.** An agreement rate measured *after* exposure to the Line 1 recommendation cannot distinguish genuine agreement from anchoring. Without it `G-05` — this project's pre-launch `OD2` detector — cannot produce a meaningful signal. The reveal order **is** the requirement.

### 3.5 `FR-05` — Independence classification ⚠

Every transition carries an independence classification. Three outcomes, and **no fourth silent state**:

| Outcome | When |
|---|---|
| `satisfied` | A Line boundary was crossed — T5, T6 |
| `not_applicable` | Within a Line, or system-executed |
| `override_not_four_eyes` | A Line 2 actor executed a Line 1 gate, or vice versa |

**The requirement is the third value.** An override is *permitted* and must be *visible as an override*. Silently recording it as compliant is the failure this feature exists to prevent.

> **`[Q11]` decided (`D-97`, `D-111`) — corrected 2026-08-30 (`D-161`, closing `B-061`).** `judgment_independence_status` claimed a cognitive fact the system can only prove structurally, which is why it was renamed. **The decided column is `line_separation_status`**, typed `satisfied` | `not_applicable` | `override_not_four_eyes` (`D-97`'s shape, `D-111`'s name) — asserting the mechanism (which Line executed the gate), not a claim of cognitive independence. `identity_assurance` remains reserved and unbuilt; no `judgment_independence` field exists. **Applied in `0002_s1_editorial_schema.sql`**, written after S1's window closed (`D-114`) — no longer reversibility-pending.

## 4. User flow

```
Chief Editor pastes URL
  → T1 Reporter        logged, tagged, trend-signalled
  → T2 Investigator    source validated
  → T3 Investigator    evidence confirmed, angle identified
  → T4 Journalist      drafted, meaning-invariance checked
  → T5 CHIEF EDITOR    human review, blind first pass    ← Line 1→2
  → T6 Chief Journalist approval                          ← Line 2→1
```

Returns (T8) and rejections (T9) may occur at any active state and are specified in the exception features.

## 5. Acceptance criteria

| ID | Given | When | Then |
|---|---|---|---|
| `AC-01` `[V1]` | A Reporter agent is active | It logs a valid URL with **exactly one subject topic** and a trend signal | The article is created at the entry state |
| `AC-01a` `[V1]` | An article exists with a subject topic | Analytical tags are added via `trend_signals` | **Many** are permitted; the subject topic is unchanged. *(`G39` — the two are distinct)* |
| `AC-02` | An article with URL X exists | A second log of URL X is attempted | **Corrected 2026-08-30 (`D-121`, closing `B-061`'s finding) — the original criterion is retired, not merely unmet.** The article row **is** the editorial commission (`D-111`); two commissions on one source are two rows, so **the second log is ACCEPTED**, not rejected. The duplicate guard moved to same submitter + same brief hash + same day, refused at the surface (`G95`, `D-121`, `D-133`) — a different key than this row originally named |
| `AC-03` | An article is at `Logged` | The Investigator validates, then investigates | **Two distinct transitions** are recorded |
| `AC-04` | An article is at `Investigated` | A Journalist agent drafts | State becomes `Drafted` with non-empty adaptation, ≥1 target, checklist complete |
| `AC-05` ⚠ | An article is at `Drafted` | The Chief Editor executes T5 | State becomes `Reviewed`; executor recorded as human |
| `AC-06` ⚠ | An article is at `Drafted` | **An agent attempts T5** | **The transition is refused** |
| `AC-07` | An article is at `Reviewed` | A Chief Journalist agent executes T6 | State becomes `Approved`; boundary crossing recorded |
| `AC-08` | An article is at `Reviewed` | The Chief Editor executes T6, a Line 1 gate | Allowed, but recorded as an **override** |

**`AC-06` is the canary.** If an agent can execute T5, `FR-04` has failed regardless of what any other test reports.

## 6. Edge cases

| Case | Required behaviour |
|---|---|
| Author/date extraction fails at T1 | Flag for Investigator review; do not block intake |
| Same agent executes T1–T4 | Permitted. Log the shared executor so it is visible in data |
| Chief Editor executes a Line 1 gate | Permitted as **override**; recorded as `override_not_four_eyes`, never `satisfied` |
| Trend signal unavailable at T1 | **Undefined — `FB-05`.** Must resolve before S1 |
| Duplicate URL | Refused (`AC-02`) |

## 7. Integration points

| Dependency | Nature |
|---|---|
| Trend-signal producer | **Missing** — `CR-14` has no FR (`FB-05`) |
| Publication targets | Assigned at T4, consumed by `FR-09`/`FR-10` |
| Audit log | Consumes every transition (`FR-07`) |
| Board | Displays state and Line (`FR-08`) |

## 8. Verification

Sequence integrity is verified **at the database**, not through the UI — per `NFR-01` and `TC1`, an application-layer test proves nothing a browser could not bypass.

| Test | Asserts |
|---|---|
| `AT-001` | `AC-01` intake |
| `AT-004` | `AC-02` duplicate refusal |
| `AT-010`, `AT-011` | `AC-03` two distinct transitions |
| `AT-012` | `AC-04` draft requirements |
| `AT-016` | `AC-05`, `AC-06` — **including agent refusal at T5** |
| `AT-017`, `AT-018`, `AT-043` | `AC-07`, `AC-08` classification and override |

**Success metric:** `SEQUENCE_BYPASS_TOLERANCE` holds at 0 against a direct anon-key write, not merely against the application.

## 9. What requires a `SPECS` document — and what does not

Applying `D-30`: a `SPECS` document is written **only** where behaviour above cannot determine implementation.

**No `SPECS` needed** — fully determined here:

- Gate ordering and the two-transition rule (`FR-02`)
- Which gate requires which fields
- Human-only execution at T5 and agent refusal
- The three independence outcomes and override visibility
- Blind-first-pass reveal ordering
- Duplicate refusal at intake

**`SPECS` required** — behaviour alone cannot settle these:

| Component | Why functional definition is insufficient |
|---|---|
| `TR-DM-01`/`TR-DM-02` schema | Column types, the ten-state enum migration path, and the tenancy boundary are not derivable from behaviour |
| `[Q11]` field naming | **Decided** (`D-97`, `D-111`) — `line_separation_status`, applied in `0002`. Historical: named a claim the system can prove only structurally |
| Sequence-enforcement trigger | "Reject invalid transitions" does not specify trigger timing, the allowed-transitions table shape, or lock behaviour |
| Independence classification storage | Typed columns versus JSON payload changes what is enforceable (`QA3`) |
| Duplicate refusal | **Corrected 2026-08-30 (`D-121`, closing `B-061`)** — retired, not a unique index: `AC-02` above records the actual key (submitter + brief hash + day) |

**Five components need `SPECS`; the rest do not.**

> **Corrected 2026-08-20 `[V1]` — `D-52`/`G33b`.** This section previously claimed each of the five *"maps to an item already inside the S1 eight-decision window."* **Verified: four of five do.** The **sequence-enforcement trigger** does not — it is a mechanism design, not a schema decision, and no window item covers it. It is therefore the **only `SPECS` document required before S1** (`SPECS-TRANSITION-ENFORCEMENT`). The window holds **nine** decisions, not eight.

The other four absorb into the S1 window — the expected result if `Fn_Specs` was written to be sufficient.

## 10. Scope limits

Closes no Open Decision. `FR-04` and `FR-05` remain `OD`-provisional. Authorizes no code, schema, or migration. Field names shown are decided (`Q11` closed by `D-97`/`D-111`) and applied in `0002`. `FB-05`'s missing trend-signal provenance is **recorded, not resolved** — it must be settled before S1.

## 11. Editorial node catalog `[V1]` — `F3` draft, `D-171`/`D-172`/`D-175`

**Added 2026-08-31, `docs/handoff/B-068-*.md` `F3`.** Sections 1–10 above describe the currently
governed `T1`–`T6` gates and remain unedited — under `D-171`'s explicit S2 hold, they are the *record
of what is currently specified*, not a claim about what is safe to build against without a fresh
authorization. This section adds the separate **logical node catalog** `B-068`'s terminology map
requires (§2: an Editorial Virtual Node Agent is a logical workcell, not a persona or an executor
identity) and marks each node's lifecycle explicitly so a reader cannot mistake a decided target for
current behaviour.

| Node | Transition mapping | Target executor role (`ROLE-*`, see `raci-involvement-matrix.md` §8) | Lifecycle |
|---|---|---|---|
| `EG1` | `T1` | `ROLE-REPORTER` | `decided_target_held` |
| `EG2` | `T2`+`T3` | `ROLE-INVESTIGATOR` | `decided_target_held` |
| `EG3` | `T4` | `ROLE-JOURNALIST` | `decided_target_held` |
| `EG4` | `T5` | Route-dependent: `ROLE-CHIEF-EDITORIAL-DESK` and/or `ROLE-CHIEF-JOURNALIST`, singly or in parallel — never aliases (`D-175`; cardinality table `raci-involvement-matrix.md` §8) | `decided_target_held` |
| `EG5` | `T6` | `ROLE-CHIEF-EDITOR` | `decided_target_held`; human executor required, refused otherwise |
| Delivery | `T7`/publication actions | `ROLE-SYSTEM-DELIVERY` | no editorial authority; `not_applicable` Line |

**Lifecycle values, used exactly as named — no bare `current` or `active` while `D-171`'s hold stands:**
`current_documented_held` (Sections 1–10's `T1`–`T6` gates, still the only documented-and-once-authorized
order, currently held), `decided_target_held` (this table — decided, not build-authorized), `external`,
`not_built_v1`, `deferred`.

An Editorial Virtual Node Agent (this table) is never a persona and never a system user — see
`Modular_PRD.md` §2.3.1's catalog split and `raci-involvement-matrix.md` §8's role catalog for those.
`EG4`'s and `EG5`'s target Line/executor-type/blind-review/return-metric/override content is
`D-172`/`D-175` (`V1-DECISION-REGISTER.md` §5.14dy, §5.14e1), not restated here to avoid a second copy
drifting from the first.

**Not in this table:** gate entry/exit evidence, checklist versions, negative tests, and delivery's
mutation-refusal rule — `B-068` `F6` items 7–8, blocked on `F4`'s route/operation crosswalk for real
evidence anchors rather than invented placeholders.
