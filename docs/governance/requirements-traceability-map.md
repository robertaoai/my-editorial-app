# Requirements Traceability Map
**Version:** v1.1
**Date:** 2026-08-16
**Owner:** Project sponsor (routes between customer and project team)
**Purpose:** anchor every project-team specification to a customer statement, in both directions.

---

## 1. Why this exists

Requirements flow from the customer to the project team through the sponsor (PMI/PMBOK). The two documents in `docs/` sit on opposite sides of that boundary:

| Document | Side | Author | Authoritative on |
|---|---|---|---|
| `PRD.md` | **Demand** | Customer, derived from the Business Charter | **What the customer wants.** Approval of it authorised scaffolding |
| `Modular_PRD.md` | **Supply** | Project team | **How those wants are specified and built** |

**The customer is the subject-matter expert on their own business, not on SDLC.** `PRD.md` is not expected to carry Lines, state machines, dependency maps, or traceable ids — those are the project team's work product. Judging it by those standards is a category error, and an earlier revision of the sprint plan made exactly that error before this map corrected it.

What the project team *can* do is recommend conventions and route feedback upward. It cannot require the customer to adopt them. This map exists so the traceability survives either way: **if the customer never adopts a single recommendation, the anchors below still hold the chain together.**

### The precedence question, answered correctly

An earlier draft proposed that `Modular_PRD.md` "governs where the two differ." That is incoherent under this flow — the project team's document cannot outrank the customer's statement of wants. A difference is one of exactly two things:

| Kind | Meaning | Route |
|---|---|---|
| **Elaboration** | The team specifying *how* a customer want is met. Expected and normal | Record the CR anchor; no customer action |
| **Change request** | The team's specification departs from, exceeds, or omits what the customer asked | **Route to the customer via the sponsor.** §7 |

Neither is settled by precedence. Silently resolving a difference by document rank would mean the project team changing the customer's scope without telling them.

### Where the customer documents come from

`PRD.md` originates from the customer-facing intake template — eight questions, in this order:

1. What do you want to build? (the painful, repetitive thing it handles)
2. Who uses it day-to-day?
3. What "things" do you need to track?
4. If only ONE thing worked end-to-end in a week, what is it?
5. What does success look like in a week?
6. What are you deliberately NOT building in v1? *(optional)*
7. Who will actually use this? *(optional)*
8. What does it replace or earn? *(optional)*

**That template's structure appears in the governing documents too.** The Charter's body carries all eight as `**Problem:**`, `**For:**`, `**Core things to track:**`, `**The one workflow (must work v1):**`, `**Success in a week:**`, `**Deliberately NOT in v1:**`, `**Who will actually use this:**`, `**What it replaces or earns:**`. The Business Case v2.3 carries all eight as verbatim section headers.

Two consequences follow:

- **The Charter and Business Case each have two halves.** A *customer half* — the eight template answers — and a *project-side overlay*: the Charter's Assumed / Open / Resolved tables (A1, OD1–OD4) and the Business Case's Decision Framework and Compliance Disclosures. **OD1–OD4 are the project team's questions posed back to the customer**, recorded in the Charter because that is where the team logged what it needed decided. They are not customer statements.
- **The plan pack's lack of governance content is expected, not defective.** `PRD.md` and its sibling files were generated from these eight answers. The template asks nothing about compliance, independence, audit, or Lines — so nothing downstream of it could contain them. Earlier revisions of the sprint plan described the plan pack as "wrong about governance." More precisely: **it is silent on governance because its source was silent on governance.** Its substrate content remains accurate.

### On the Business Charter — a recommendation, not a requirement

`PRD.md` is stated to derive from a **Business Charter**, which has never been supplied (Entry 006 §7; Entry 007 §3).

**The project team may recommend it. The project team may not require it.** This is the same boundary as `PRD.md` itself: the customer is the subject-matter expert on their own business, and demanding they produce supply-side artifacts inverts the flow. An earlier draft of this map called the missing Business Charter a "structural gap" and put it on the production readiness checklist as required. **That was an overreach and is withdrawn.**

What the project team may legitimately state is narrower, and it is a limit on our own verification rather than a demand on the customer:

> `PRD.md`'s derivation cannot be checked against its stated source, because we do not hold that source. Every `CR-xx` anchor below is therefore verified against `PRD.md` as supplied, and no further.

That limitation is recorded and accepted. It blocks nothing. Logged as **FB-07**, reclassified from Gap to **Recommendation**.

Separately, and as fact rather than challenge: in this repository `PRD.md` was committed in `53ace36` in the same commit as the generated plan pack. Its provenance as a customer artifact is taken from the project record rather than independently verifiable from git history.

---

## 2. Anchor scheme

Each discrete statement in `PRD.md` gets a `CR-xx` id and a content anchor — the first 8 hex characters of the SHA-256 of that line's exact text.

| Property | Value |
|---|---|
| Source file | `docs/PRD.md` |
| Whole-file anchor | `294d8e891ce5` (SHA-256, first 12) |
| Git blob id | `7c2e0b53275c3741f144f4b1cc9605f0ba5602b9` |
| Anchored at commit | `53ace36` |
| Statements anchored | 19 |

**Why hashes rather than line numbers.** The customer may edit `PRD.md` at any time, in any order, without telling the project team — that is their prerogative. Line numbers silently shift; a hash silently *breaks*, which is what we want. A changed anchor is a signal, not an error.

**Drift procedure.** Re-run the anchor check. For any `CR-xx` whose hash no longer matches:

1. The customer requirement text has changed. Treat everything mapped to it in §4 as **stale pending re-review**.
2. Re-read the new text and re-map. Record what changed in §8.
3. If the change removes a want the team already built, that is scope to retire, not scope to keep silently.
4. If the change adds a want, it enters as a new `CR-xx` with its own anchor.

A CR that gains or loses a mapping is a scope event and belongs in the feedback register (§7).

---

## 3. Customer Requirements Register

Extracted verbatim from `PRD.md`. **The text column is the customer's wording, not the team's paraphrase.**

| CR | Line | Anchor | Customer statement | Section |
|---|---|---|---|---|
| `CR-01` | 4 | `eb645a47` | Manual article hunting across LinkedIn, Facebook, blogs, and guest platforms costs the Chief Editor 3–5 hours/week. No guardrail prevents live publishing without full review | Problem |
| `CR-02` | 7 | `364051aa` | One Chief Editor directing virtual agents through a five-gate editorial pipeline. Audience: Agile/DevOps/ITIL professionals and AI practitioners | Target User |
| `CR-03` | 10 | `d8db8599` | **Articles** — URL, title, summary, topic, category, workflow_state, publication_target | Core Objects |
| `CR-04` | 11 | `18bdf0d1` | **Topics** — tag taxonomy for filtering | Core Objects |
| `CR-05` | 12 | `6eea7fc4` | **Sources** — platform/origin of articles | Core Objects |
| `CR-06` | 13 | `e0943db9` | **Trend Signals** — AI-detected signals per article (tags, source, relevance) | Core Objects |
| `CR-07` | 14 | `83087bd7` | **Workflow Transitions** — who/when/why for every gate change | Core Objects |
| `CR-08` | 15 | `0c46e25c` | **Publication Targets** — WordPress or LinkedIn-ready | Core Objects |
| `CR-09` | 18 | `f9a362fe` | Log article by URL (paste, no bookmarklet) | MVP |
| `CR-10` | 19 | `f6e04073` | Five-gate sequential pipeline: Reported → Investigated → Journaled → Senior Reviewed → Chief Approved | MVP |
| `CR-11` | 20 | `494ec49b` | Every transition logged (gate, timestamp, agent/role, reason) | MVP |
| `CR-12` | 21 | `171acaab` | Chief Journalist approve → auto-publish to WordPress OR mark LinkedIn-ready | MVP |
| `CR-13` | 22 | `a99462d8` | Board: all articles, filter by state / topic / category | MVP |
| `CR-14` | 23 | `baa5c3c1` | AI tags topics, sources, trend signals at Reporter gate | MVP |
| `CR-15` | 24 | `0b8cff04` | Web only, single Chief Editor account, no notifications | MVP |
| `CR-16` | 27 | `a551b302` | Mobile app, multi-team accounts, monetization | Non-goals |
| `CR-17` | 28 | `140f4c20` | Automated Facebook/RSS detection, multi-language, bookmarklet | Non-goals |
| `CR-18` | 29 | `8fbcc84e` | Email/Slack notifications, Proposer/Critics/Judge governance | Non-goals |
| `CR-19` | 32 | `b557312d` | Chief Editor pastes a URL → article enters pipeline → passes all five gates with logged transitions → Chief Journalist approves → article publishes to WordPress (or marked LinkedIn-ready). Board shows 5+ articles/week, 2+ published, every transition visible, zero bypasses | Success Criteria |

---

## 4. Forward trace — customer want to specification

Read this direction to answer: *"the customer asked for X — where did it go?"*

| CR | Specified as | Status |
|---|---|---|
| `CR-01` | O-01 (gate compliance), O-04 (time saving), K-07 | Covered as outcomes. No single FR delivers a time saving directly — correct |
| `CR-02` | Personas §2.3, O-05 | Covered |
| `CR-03` | TR-DM-01 | Covered, **extended**: team adds `source_id`, revision fields, `emergency_publish`, and a ten-state enum. Elaboration → **FB-04** |
| `CR-04` | TR-DM-05 | Covered, extended with `evolves_from`, `evolution_notes` |
| `CR-05` | TR-DM-04 | Covered, extended with `reliability_tier`, `ingestion_method` |
| `CR-06` | TR-DM-01 (fields) | ⚠ **Partially covered.** The scoring the customer implied by "AI-detected signals" is **not computable on the current schema** (TC3), and Modular_PRD defers AT-030…032. → **FB-06** |
| `CR-07` | FR-07, TR-DM-02, AC-11 | Covered. Customer's "who/when/why" is the exact phrase the team adopted |
| `CR-08` | TR-DM-03 | Covered, **materially extended**: customer implies one target per article; the team specifies a per-target record with seven statuses, because "WordPress **OR** LinkedIn-ready" (CR-12) plus partial failure requires it (TC2). Elaboration → **FB-04** |
| `CR-09` | FR-01, AC-01, AC-02 | Covered |
| `CR-10` | FR-02, FR-03, FR-04, FR-06 | Covered, **renamed**. Customer's five state names differ from the governing set's ten states. → **FB-01** |
| `CR-11` | FR-07, AC-11, AC-12 | Covered, extended with Line assignment and independence status |
| `CR-12` | FR-09, FR-10, AC-14…AC-16 | Covered |
| `CR-13` | FR-08, AC-13 | Covered, **extended**: customer names three filters; the team adds a fourth, Line assignment. → **FB-03** |
| `CR-14` | **— none —** | ⚠ **UNCOVERED.** A customer MVP checkbox with no functional requirement in `Modular_PRD.md`. → **FB-05** |
| `CR-15` | NG-01, NG-02, NG-08; SEC-03 defers auth to S6 | Covered |
| `CR-16` | NG-01, NG-02, NG-03 | Covered. NG-03 is reinforced at Charter level |
| `CR-17` | NG-04, NG-05, NG-06, NG-07 | Covered |
| `CR-18` | NG-08, NG-09 | Covered |
| `CR-19` | O-01, K-01, K-02, `SC1`–`SC6`, AC-13 | Covered, **split**: the customer's single phrase "zero bypasses" becomes two criteria — sequence (unconditional) and independence (**provisional pending OD2**). The customer has not been told the second is conditional. → **FB-02** |

### Forward coverage

| Status | Count | CRs |
|---|---|---|
| Covered | 17 | CR-01…CR-05, CR-07…CR-13, CR-15…CR-19 |
| ⚠ Partially covered | 1 | CR-06 — schema cannot compute it (TC3) |
| ⚠ **Uncovered** | 1 | **CR-14 — AI tagging at the Reporter gate has no FR** |

---

## 5. Backward trace — specification to customer want

Read this direction to answer: *"the team is building Y — who asked for it?"*

This is the direction that catches scope the customer is paying for and never requested.

| Spec | Anchored to | Origin if unanchored |
|---|---|---|
| FR-01 | CR-09 | — |
| FR-02 | CR-10 | Split into two gates per Addendum T2/T3 |
| FR-03 | CR-10 | — |
| FR-04 | ⚠ **partial — CR-10** | Customer said "Senior Reviewed"; **human-only execution is the team's, from Charter OD1 and the Three Lines Model** |
| FR-05 | ⚠ **partial — CR-19 "zero bypasses"** | **Four-eyes at Line boundaries is entirely the governing set's.** The customer asked for no bypasses, not for this mechanism |
| FR-06 | ⚠ **— none —** | **Addendum §3.3.** The customer's PRD has no return or revision path at all |
| FR-07 | CR-07, CR-11 | — |
| FR-08 | CR-13 | Fourth filter added |
| FR-09 | CR-12 | — |
| FR-10 | ⚠ partial — CR-12 | Manual confirmation (T11) is implied by "mark LinkedIn-ready" but never stated |
| FR-11 | ⚠ **— none —** | **Addendum §13, Line 3 assurance.** Not requested |
| FR-12 | ⚠ **— none —** | **Entry 007 S7, degraded mode.** Not requested |
| FR-13 | ⚠ **— none —** | **Entry 007 S3, regulatory retraction.** Not requested |
| NG-10 | ⚠ **— none —** | **TC9.** A team-added non-goal preventing a plan-pack behaviour from being built |
| NG-11 | ⚠ **— none —** | **Entry 006 §13, Entry 007.** Fundraising removed from workflow |

### Backward coverage

| Status | Count | Items |
|---|---|---|
| Anchored to a customer want | 6 | FR-01, FR-02, FR-03, FR-07, FR-08, FR-09 |
| ⚠ Partially anchored | 3 | FR-04, FR-05, FR-10 |
| ⚠ **Unanchored** | 6 | **FR-06, FR-11, FR-12, FR-13, NG-10, NG-11** |

> **None of the unanchored items is gold-plating.** Each traces to the Addendum or to Entry 007's Phase 0 approval, and each has a defensible reason. But the customer never asked for them, will use the product, and is funding it. Under the PRD template's own anti-pattern list an unanchored requirement must be *either* connected *or* justified in writing — here it is justified, and the justification has to reach the customer through the sponsor. That is **FB-04**, and it is the single largest feedback item on this map.

---

## 6. The chain, both directions

```
Business Charter  ── NOT SUPPLIED (FB-07) ──▶ PRD.md  (customer, anchored CR-01…CR-19)
                                                 │  forward ▼        ▲ backward
                                              Modular_PRD.md  (O / US / FR / NFR / AC)
                                                 │  forward ▼        ▲ backward
                                          Sprint plan S0–S6, TC1–TC9
                                                 │  forward ▼        ▲ backward
                                          Acceptance tests AT-xxx
```

**Forward engineering:** a customer want becomes an objective, a story, a requirement, a sprint, a test.
**Backward engineering:** a failing test resolves to a requirement, to a story, to a customer sentence with a verifiable hash — even years later, and even if nobody involved is still on the project.

That second direction is the reason this map exists. It is what makes the body of knowledge transferable.

---

## 7. Customer feedback register

Items to route **to the customer via the project sponsor**. None is a defect in `PRD.md`; each is a recommendation, a clarification, or a scope disclosure the customer is entitled to.

| ID | Item | Type | Priority |
|---|---|---|---|
| `FB-01` | **State vocabulary.** The customer's five gate names (Reported → Investigated → Journaled → Senior Reviewed → Chief Approved) differ from the governing set's ten states. Recommend adopting one vocabulary in both documents — either is workable, but two invites mistranslation at every handoff | Recommendation | High |
| `FB-02` | **"Zero bypasses" is two things.** The governing set splits it into sequence compliance (unconditional) and review independence (**provisional pending OD2**). The customer should know one half is conditional and that a negative OD2 resolution is a pre-launch stop | **Disclosure** | **High** |
| `FB-03` | **Fourth board filter.** The customer named state, topic, category. The team adds Line assignment. Confirm it is wanted | Change request | Medium |
| `FB-04` | **Six items with no customer origin** — four functional requirements (FR-06 return with reason, FR-11 Line 3 audit, FR-12 degraded mode, FR-13 regulatory retraction) and two non-goals (NG-10, NG-11). All justified by the Addendum or Entry 007. Customer acceptance needed, since this is funded scope they did not request. *(Corrected from "five" 2026-08-17 — see v1.1 changelog)* | **Change request** | **High** |
| `FB-05` | **CR-14 has no requirement.** "AI tags topics, sources, trend signals at Reporter gate" is a customer MVP checkbox with no FR. In or out of v1? | **Gap** | **High** |
| `FB-06` | **CR-06 not deliverable in v1.** Trend-signal scoring is not computable on the current schema (TC3), and the acceptance tests for it are deferred. Confirm this v1 limitation is acceptable | Disclosure | Medium |
| `FB-07` | **Business Charter — offered, not required.** It is `PRD.md`'s stated upstream. The project team records that it cannot verify `PRD.md` against a source it does not hold, and offers to work from one if the customer has it. **No obligation implied; this blocks nothing.** *(Reclassified from Gap on 2026-08-16 — an earlier draft made it a production-readiness requirement, which inverted the customer/project boundary)* | **Recommendation** | Low |
| `FB-08` | **Granularity convention, for future revisions only.** `CR-01` contains two distinct claims in one line (cost, and absence of a guardrail), so one anchor covers two requirements. Recommend one requirement per line going forward. **Applies to future edits — no rework of the current document is being asked for** | Recommendation | Low |

> **FB-08 is the "naming conventions" recommendation and nothing more.** If the customer declines every recommendation here, this map still functions: the anchors are computed from whatever text exists, and the chain holds. That is the design intent.

---

## 8. Maintenance

| Trigger | Action |
|---|---|
| `PRD.md` edited by the customer | Re-run anchors. Any changed hash marks its CR and everything downstream stale pending re-review (§2) |
| `Modular_PRD.md` gains an FR | Anchor it to a CR, or record it as unanchored in §5 with its origin. **An FR with neither is scope creep** |
| A CR loses its last mapping | Scope retired. Confirm with the customer before removing built functionality |
| A feedback item is answered | Record the answer and its date. Move any resulting change into the Ratification Log if it touches a governing document |
| Sprint DoD written | Cite CR alongside FR, so the sprint states which customer want it satisfies |

---

## 9. Changelog

- **2026-08-16 v1.0:** Created after the Chief Editor corrected the project team's framing of the two requirement documents. The earlier framing judged `PRD.md` by supply-side standards and proposed that `Modular_PRD.md` "governs where they differ" — incoherent under PMI requirements flow, since the project team's document cannot outrank the customer's statement of wants. Replaced with the elaboration-versus-change-request distinction (§1). Anchored all 19 customer statements to SHA-256 content hashes at `53ace36`, built the forward and backward traces, and found: one uncovered customer requirement (CR-14, AI tagging), one partially covered (CR-06, blocked by TC3), and **five specifications with no customer origin** (FR-06, FR-11, FR-12, FR-13, NG-10, NG-11) — all justified, none disclosed. Raised the missing Business Charter from a go-live checklist item to a structural gap, since it is `PRD.md`'s unverifiable upstream. Eight feedback items opened for routing via the sponsor. *(The bolded count above was itself wrong — see v1.1.)*
- **2026-08-17 v1.1:** An external EMS gap-analysis audit of `Modular_PRD.md` caught a genuine miscount: v1.0 said "five specifications" while listing six (FR-06, FR-11, FR-12, FR-13, NG-10, NG-11). Verified against the register itself — the count is **six items: four functional requirements and two non-goals.** Corrected in §4 (backward-trace table header remains accurate — it never stated a total) and §7's `FB-04` row. This is the same defect class §1 already named as the project's recurring failure mode: a number restated without re-derivation. It reached its own audit trail. See `docs/journal/2026-08-16-sprint-plan.md` for the audit's other findings (Three Lines Model citation currency, the `judgment_independence_status` naming/identity-provenance gap, tool-vs-product scope, blind-first-pass at T5) — none of which are decided in this file.
- **2026-08-17 v1.2:** Corrected the backward-coverage summary after Graphify-assisted scope normalization. The previous `7 / 3 / 5` counts double-counted FR-04 (once as anchored and again through its execution constraint) and still reported five unanchored items while naming six. Requirements are now counted once at requirement-ID level: **6 fully anchored, 3 partially anchored, 6 unanchored = 15 specifications** (FR-01…FR-13 plus NG-10 and NG-11). FR-04 is correctly marked partially anchored because the customer requested the review gate but not the team's human-only execution constraint.
