# AI-Driven Trending Article Tracker
## Product Blueprint & Implementation Roadmap

> **Document version:** v1.4 — Charter reconciliation (2026-08-16), amends v1.3
> **Amendment note (v1.4):** surgical amendments only, no rewrite. Two changes: (1) §6 and §8 — the independence success criterion no longer claims to be unconditional, because the Charter marks it pending OD2; (2) §2.2 and §2.4 — OD3 reverted from Resolved to Open, framework accepted and count deferred, matching Addendum v1.5, Business Case v2.3, and the Charter's "withheld pending OD3." **No open decision is closed. The Charter is unchanged.** Deviations tracked in `docs/governance/provisional-deviation-register.md`.
> **Precedence hierarchy:** Project Charter > V1 Build Readiness Addendum (v1.4) > Blueprint (v1.3) > Business Case (v2.1). Where the Charter and Addendum conflict on operating model, the Charter governs; where they conflict on build mechanics, the Addendum governs.
> **Built using the Meaning-First Content System methodology:** understand → extract & lock meaning → summarize → translate. This document locks meaning (the invariant core) before any repurposing across audiences or formats.
> **Relationship to Addendum:** This blueprint incorporates build-readiness specifications from the V1 Build Readiness Addendum (v1.4). The Addendum supersedes conflicting statements in this blueprint for V1 build decisions. This blueprint remains the invariant core for product meaning and long-term vision.
> **Relationship to Charter:** This blueprint incorporates the Project Charter (v1, baseline) operating model. Charter Open decisions (OD1–OD3) have been **resolved** via the Three Lines Model (IIA, updated 2020) mapping — see §2.2. Resolution is not ratification; OD1–OD3 remain unratified until the Chief Editor signs off in a discrete, dated event per the Addendum's Ratification Log (§2.4).
> **Three Lines Model:** The pipeline's independence model maps onto the Three Lines Model (IIA, July 2020, updated September 2024). This is an existing, standardized GRC framework — not a novel construction. The role-to-Line mapping is an inference from this project's analysis, not from the organization's actual GRC documentation. Adopted per ITIL 4 guiding principles "start where you are" and "keep it simple and practical."

---

## 1. Meaning Invariance Lock

This is the critical gate. No repurposing, summarization, or format translation happens before this is locked.

### What Must Never Change (Invariant Core)

| Invariant | Definition | Why It Matters |
|-----------|-----------|---------------|
| **Trending Relevance** | Every tracked article must be currently trending or emerging in its topic domain, not evergreen or stale. | The system's value proposition is timeliness. Without this, it becomes just another RSS reader. |
| **Source Traceability** | Every article must link back to its original publication URL, author, date, and platform. | Editorial credibility and journalistic integrity require verifiable provenance. |
| **Editorial Phase-Gate Compliance** | No article reaches publication without passing through every defined approval gate in sequence. | This is the system's differentiation from manual curation — enforced compliance, not optional review. |
| **Publishing Readiness** | An article is only marked "publishable" when it has passed all gates, has assigned tags, and has at least one designated publication target. | Prevents half-finished articles from leaking to public channels. |
| **Topic Taxonomy Integrity** | Every article must map to at least one defined topic in the professional or AI taxonomy. | Without taxonomy discipline, the system degrades into an unstructured bookmark list. |

### What May Change Safely (Controlled Variation)

| Variable | What Can Change | Guardrail |
|----------|---------------|----------|
| **Topic Taxonomy** | New topics can be added (e.g., new AI concepts, new certification versions). | Each new topic must define its scope boundary and trend signal source. |
| **Source Channels** | New discovery sources can be added (e.g., Reddit, X/Twitter, newsletters). | Each source must have a defined reliability tier and freshness SLA. |
| **Publishing Destinations** | New platforms can be added as publication targets. | Each destination must have defined API constraints and formatting rules. |
| **Scoring / Ranking Method** | The trend-scoring algorithm can evolve. | The scoring inputs and weights must be documented and versioned. |
| **Degree of Automation** | Manual steps can be automated over time. | Each automation must preserve the phase-gate sequence — automation changes execution, not governance. |
| **Team Size** | The operating model can scale beyond one Chief Editor + agent set. | Role definitions and approval rules remain unchanged. Agent headcount distributes across Three Lines per OD3 resolution. |

---

## 2. V1 Operating Model (Three Lines Model)

> Sourced from Project Charter v1 (baseline) and Business Case v2.1 (Three Lines Model resolution). This section defines the agent-directed operating model that governs all role assignments, permission checks, and four-eyes enforcement in V1. OD1–OD3 are resolved via the Three Lines Model (IIA, updated 2020) — see §2.2.

### 2.1 Operating Model

The V1 system operates with **one human Chief Editor** (Line 2 — Risk & Compliance) directing **virtual agents** (Line 1 — Operations) across the pipeline, with **Line 3** (Independent Assurance) triggered conditionally by risk signal:

- **Chief Editor** (human, Line 2) — the sole human operator. Sits in Line 2 (Risk & Compliance). Performs or directly supervises the Senior Journalist role (Accountability function). Does not float across gates — the Three Lines Model forbids the same person holding both Line 1 and Line 2 roles, because self-review across Lines is a known Three Lines Model violation.
- **Line 1 agents** — execute operational roles: Reporter (Origination), Investigator (Verification), Journalist (Standards fit), and Chief Journalist (operational final approval). Agent-primary, human spot-check optional. Same agent may hold multiple Line 1 roles.
- **Line 3** (Independent Assurance) — risk-based audit, triggered only when Line 2's risk signal crosses a threshold or the topic is flagged novel/controversial. Must report independently, with unrestricted read access to relevant evidence and an independent reporting/authority path — Lines 1 and 2 cannot control its scope or conclusions, or it stops being Line 3 and becomes a rubber stamp (`D-166`).
- **Five fixed roles** — Reporter, Investigator, Journalist, Senior Journalist, Chief Journalist. These are logical pipeline roles, not human job titles. The same agent may hold multiple Line 1 roles. The Chief Editor (Line 2) cannot hold any Line 1 role.

> **Key distinction:** The blueprint previously assumed a human editorial team of 5–7 journalists. Under the Charter and Three Lines Model, this is replaced by the agent-directed model above. All references to "team members," "role holders," and "users" in the Addendum-derived sections below should be read as agents or the Chief Editor under this model, unless explicitly noted.

### 2.2 Decision Register (Three Lines Model Resolved)

The Charter introduced three decision categories: **Open** (blocking, user must decide before sign-off), **Assumed** (conservative default applied, stands unless objected), and **Resolved** (decided with stated revisit trigger). In this revision, OD1–OD3 have been **resolved** via the Three Lines Model mapping (Business Case v2.1). Resolution is not ratification — see §2.4.

#### Assumed (Conservative Defaults, Override If You Disagree)

These are defaults applied so the document has something to build against. They stand unless the Chief Editor objects. They are not ratified until formally signed off per the Ratification Log (§2.4).

| # | Item | Default Applied | Why This Default |
|---|------|----------------|-----------------|
| A1 | Architecture for v1 | Five-gate linear pipeline (T1–T8a, §4.4), not Proposer/Critics/Judge | Ships the already-specified model rather than an unproven redesign. |
| A2 | Prototype stack | React/Next.js frontend, FastAPI (Python) backend, PostgreSQL, Supabase Auth (auth only) | Conservative, well-documented stack. |
| A3 | Publication target for Week 1 | WordPress auto-publish + LinkedIn manual fallback | WordPress REST API is straightforward; LinkedIn depends on OAuth review. |
| A4 | Trend scoring formula | Simple weighted sum (§11) | Starting assumption, not validated. Review after 50+ scored articles. |
| A5 | Notification mechanism | In-app only for Week 1 | Email and Slack in Week 4–6. |
| A6 | Data retention | Governed by `RET-EDITORIAL 0.1-provisional` (`docs/source/business-case.md` §Compliance & Governance Disclosures). Archival is an external, retrievable move; disposal is separate and absent from v1. Rejected/unpublished archival is 5 years, a house-policy placeholder; published records are kept 5 years minimum, current while correction/retraction remains possible. **Not** the workflow's `REUSE-WINDOW-90` (90 days) — confirmed independent, `D-134` | Ratified `D-134`, applied to this tier by `D-135`, 2026-08-25. |
| A7 | Bookmarklet | Copy-paste URL form only for Week 1 | Bookmarklet in Week 2–3. |

#### Resolved via Three Lines Model (This Revision)

Business Case v2.1 introduces a Three Lines Model resolution for OD1–OD3. The Three Lines Model is published by The IIA (July 2020, updated September 2024). The role-to-Line mapping below is an inference from this project's analysis, not from the organization's actual GRC documentation.

| # | Decision | Resolution | Basis |
|---|----------|-----------|-------|
| OD1 | Does Chief Editor = Chief Journalist, or does the human float across gates? | **Chief Editor sits in Line 2 (Risk & Compliance). Chief Journalist sits in Line 1 (Operations). The human does not float.** Three Lines Model forbids merging Line 1 and Line 2 roles — self-review across Lines is a known compliance-standard violation. | Three Lines Model structural separation requirement |
| OD2 | Does a distinct agent provide distinct judgment sufficient to satisfy four-eyes? | **Yes — four-eyes is satisfied by Line separation itself.** Agents in different Lines provide distinct judgment by structural design. Within the same Line, distinct agent instances do not automatically satisfy four-eyes — independence comes from Line membership, not from agent-instance distinctness. | Three Lines Model — Line separation as independence criterion |
| OD3 | What does the agent headcount figure count, and how does it distribute across the 4 agent-holdable roles? | **Four agent-holdable roles map to Three Lines.** Line 1: Reporter (Origination), Investigator (Verification), Journalist (Standards fit), Chief Journalist (operational approval) — combinable into fewer agents. Line 2: Senior Journalist (Accountability, human-primary). Line 3: Independent Assurance (triggered, not standing). Headcount debate closes because the allocation is a known pattern, not a novel one. | Three Lines Model — standard role allocation |

> **Impact on four-eyes enforcement:** Four-eyes is now **unconditional at Line boundaries** — satisfied by Line separation per the Three Lines Model. The prior `actor_id != previous_transition.actor_id` check is retired as the core enforcement mechanism. Four-eyes applies at Line 1 → Line 2 (T5) and Line 2 → Line 1 (T6) boundary crossings. Within the same Line, four-eyes is `not_applicable`. See §4.7 for the updated enforcement logic.

#### Resolved (Charter)

| # | Decision | Resolution | Trigger to Revisit |
|---|----------|-----------|-------------------|
| OD4 | Adopt Proposer → Critics → Judge, replacing the linear pipeline | **Rejected for v1** (consistent with A1). Deferred to v2, conditional. | **Two branches:** (1) If Line separation satisfies four-eyes and the pipeline ships — revisit only if logged data shows Line separation failing to catch errors it should catch. (2) If Line separation fails to hold in production (e.g., agents in different Lines produce identical judgments due to shared training data), this is a **pre-launch blocker** — re-evaluate before shipping. If neither branch fires, OD4 stays backlogged. **Note:** If Proposer/Critics/Judge is ever adopted in v2, map it directly onto Three Lines (Proposer = Line 1, Critics = Line 2, Judge = Line 3) rather than treating it as a separate novel architecture. |

### 2.3 Three Lines Role Model

Under the Three Lines Model, the five pipeline roles map to Lines and executors as follows:

| Pipeline Role | Line | Function | Executor | Four-Eyes at Boundary |
|---------------|------|----------|----------|----------------------|
| Reporter | Line 1 — Operations | Origination (find and log articles) | Agent-primary | N/A within Line 1 |
| Investigator | Line 1 — Operations | Verification (validate source, confirm trend) | Agent-primary | N/A within Line 1 |
| Journalist | Line 1 — Operations | Standards fit (draft editorial adaptation) | Agent-primary | N/A within Line 1 |
| Chief Journalist | Line 1 — Operations | Operational final approval | Agent-primary | T6 (Line 2 → Line 1) = `satisfied` |
| Senior Journalist | **Line 2 — Risk & Compliance** | Accountability (quality, compliance, governance review) | **Human-primary** (Chief Editor), agent-assisted | T5 (Line 1 → Line 2) = `satisfied` |
| Line 3 — Independent Assurance | **Line 3** | Risk-based audit (triggered conditionally) | Independent — unrestricted read access to relevant evidence and an independent reporting/authority path; Lines 1/2 cannot control its scope or conclusions (`D-166`) | Reports separately; not part of standing pipeline |

> **Key constraint:** The same person/agent cannot hold both Line 1 and Line 2 roles. This is a hard requirement of the Three Lines Model. The Chief Editor (Line 2) cannot also be the Chief Journalist (Line 1).

> **Tagging model:** Tagging is agent-executed at the Reporter stage (Line 1). The Chief Editor is the sole human reviewer (Line 2), not the sole tagger.

> **Line 2 "agent-assisted" semantics:** When Line 2 review (T5) is performed with agent assistance, the Chief Editor (human) is the signing executor. The assisting agent provides analysis, draft findings, or recommendations, but the accountability decision rests with the human. The audit log records `executor_type = human`, `line_assignment = Line2`, and `assisting_agent_id` as metadata.

### 2.4 Ratification Log

Resolution is not ratification. OD1–OD3 are structurally resolved but remain unratified. The Chief Editor must sign off in a discrete, dated event for each to move from "resolved" to "ratified." A structural resolution does not become a ratified decision by being labeled one.

| # | Item | Category | Resolved? | Ratified? | Build Implication |
|---|------|----------|-----------|-----------|-------------------|
| A1 | Five-gate linear pipeline | Assumed | N/A | No | Prototype may proceed as provisional assumption |
| A2 | Prototype stack | Assumed | N/A | No | Prototype may proceed as provisional assumption |
| A3 | WordPress auto + LinkedIn manual | Assumed | N/A | No | Prototype may proceed as provisional assumption |
| A4 | Simple weighted sum scoring | Assumed | N/A | No | Prototype may proceed; review after 50+ articles |
| A5 | In-app notifications only | Assumed | N/A | No | Prototype may proceed with in-app only |
| A6 | Data retention (`RET-EDITORIAL 0.1-provisional`) | Assumed → Resolved | **Yes** — Chief Editor ruling, `D-134` | **Yes** — 2026-08-25 | Governed by the Business Case's `RET-EDITORIAL` section; not a 90-day figure — see A6 above |
| A7 | Copy-paste URL form only | Assumed | N/A | No | Prototype may proceed with copy-paste form |
| OD1 | Chief Editor = Chief Journalist? | Resolved (Three Lines Model) | **Yes** — Chief Editor = Line 2, Chief Journalist = Line 1, no float | No | T6 executor is Line 1 Chief Journalist (agent). T5 executor is Line 2 Senior Journalist (human-primary). |
| OD2 | Agent judgment independence? | Resolved (Three Lines Model) | **Yes** — satisfied by Line separation | No | Four-eyes enforced at Line boundaries, unconditional. |
| OD3 | Agent headcount and distribution | **Open** — framework accepted, exact count deferred | **No** — exact count unspecified in every source document; Charter withholds the figure pending OD3 | No | Permission matrix and four-eyes logic use Line assignment, not agent-instance count. `LINE1_AGENT_ROSTER` and `AGENT_HEADCOUNT` stay UNSET. *Corrected in v1.4; see Register D3.* |
| OD4 | Proposer/Critics/Judge model | Resolved (Charter) | N/A (rejected for v1) | N/A | Backlogged to v2 with two-branch reopening condition |

---

## 3. V1 Product Scope

### The One End-to-End Path (Must Work in Week 1)

```
Journalist logs a trending article
  → Article enters approval workflow with topic tags
    → Investigator validates source and relevance
      → Journalist drafts the editorial adaptation
        → Senior journalist reviews editorial quality
          → Chief journalist approves for publication
            → Approved article is published or scheduled to LinkedIn/blog with Professional or AI category tags
```

> **Publishing note:** WordPress/blog is the safest automated target in Week 1 (REST API with application passwords). LinkedIn publishing depends on OAuth 2.0 app review — if the review is pending, Week 1 falls back to scheduling the LinkedIn post for manual confirmation. Facebook is manual cross-posting in V1 (API review required).

### In Scope (V1)

- Web dashboard (no mobile app)
- Manual article logging via copy-paste URL form (bookmarklet deferred to Week 2-3 per Addendum D6)
- Topic tagging (Professional: SAFe, Scrum, DevOps, ITIL4; AI: Generative AI, Agentic AI, Harnesses, Guardrails, Digital Twins, Context Engineering, Loop Engineering, Long-Running Workflows)
- Approval workflow board with phase gates
- Editorial role assignments and handoffs
- Publication to WordPress/blog via REST API (automated); LinkedIn marked "Ready for Manual Publish" with formatted post content generated (OAuth review submitted but non-blocking, per Addendum §1)
- Audit trail of all state transitions
- Basic trend intake from RSS feeds and manual links
- In-app notifications only (email and Slack deferred to Week 4-6 per Addendum D7)

### Deliberately Out of Scope (V1)

- No mobile app (web dashboard only)
- No advanced AI summarization (agent-executed tagging at Reporter stage; AI summarization of article content deferred to post-V1)
- No multi-team accounts (single Chief Editor account, not single editorial team)
- No monetization features (focus on workflow efficiency first)
- No automated Facebook publishing (API restrictions — manual cross-posting in V1)
- No real-time trend detection algorithms (semi-automated intake only)
- No multi-language support

### Week 1 Deferrals (Not Core MVP, Scheduled for Later Phases)

These items are not out of V1 entirely, but are deferred from Week 1 to later phases per the Addendum:

| Item | Deferred To | Source |
|------|------------|--------|
| Bookmarklet (browser bookmarklet for article logging) | Week 2-3 | Addendum D6 |
| Email and Slack notifications | Week 4-6 | Addendum D7 |
| External archive integration | **Deferred, not v1 product behavior** — Project Scope, deferred until the product is live (`D-134`); no Week 4-6 build item | Addendum D8, `RET-EDITORIAL 0.1-provisional` |

---

## 4. Workflow Model

### 4.1 Roles

| Role | Responsibility | Authority |
|------|---------------|----------|
| **Reporter** | Discovers and logs trending articles; provides initial URL, source, and brief context. | Can create articles in "Logged" state. Cannot approve. |
| **Investigator** | Validates source authenticity, checks for duplicate coverage, verifies trend signal, confirms topic relevance. | Can advance to "Investigated" or return to "Needs Revision." |
| **Journalist** | Drafts the editorial angle, writes the adaptation for target audience, assigns publication targets. This role sits between Investigator and Senior Journalist — the user's simplified flow (reporter → investigator → senior journalist → chief journalist) maps to this full pipeline with Journalist as the drafting step. | Can advance to "Drafted." |
| **Senior Journalist** | Reviews editorial quality, fact-checks claims, ensures taxonomy compliance, verifies meaning invariance. | Can advance to "Reviewed" or return to "Drafted." |
| **Chief Journalist** | Final approval gate. Confirms publishing readiness, approves publication timing. | Can advance to "Approved/Scheduled" or reject. |

### 4.2 Article States

```
┌─────────────┐
│  Discovered  │  Article URL identified by reporter or intake feed
└──────┬──────┘
       │ Reporter logs it
       ▼
┌─────────────┐
│   Logged     │  URL, source, brief context captured; topic tags assigned
└──────┬──────┘
       │ Investigator picks up
       ▼
┌─────────────┐
│  Validated   │  Source verified, duplicate check, trend signal confirmed
└──────┬──────┘
       │ Investigator advances
       ▼
┌─────────────┐
│ Investigated │  Relevance confirmed, editorial angle identified, assigned to journalist
└──────┬──────┘
       │ Journalist drafts
       ▼
┌─────────────┐
│   Drafted    │  Editorial adaptation written, publication targets assigned
└──────┬──────┘
       │ Senior journalist reviews
       ▼
┌─────────────┐
│   Reviewed   │  Quality checked, facts verified, taxonomy compliant
└──────┬──────┘
       │ Chief journalist approves
       ▼
┌─────────────┐
│   Approved   │  Publishing readiness confirmed, publication scheduled
└──────┬──────┘
       │ Published to targets
       ▼
┌─────────────┐
│  Published   │  Live on LinkedIn/blog with category tags
└─────────────┘

Side states:
  ┌──────────────────┐
  │  Needs Revision   │  Returned to any prior state with feedback
  └──────────────────┘
  ┌──────────────────┐
  │    Rejected       │  Terminal state — article not viable
  └──────────────────┘
```

### 4.3 Phase-Gate Checklists

Each gate has concrete criteria that must be confirmed before advancing. These are the journalistic compliance standards — not optional quality checks.

| Gate | Checklist Criteria | Confirmed By |
|------|-------------------|------------|
| **Logged → Validated** | Source URL is live and accessible; source platform identified; source author identified; source publication date captured; at least one topic tag assigned; trend signal briefly described | Investigator |
| **Validated → Investigated** | Source authenticity verified (not parody/plagiarism); duplicate check completed (no existing article covers same URL or near-identical title); trend evidence captured (engagement metrics, share count, recency); topic relevance confirmed against taxonomy scope boundary; editorial angle identified | Investigator |
| **Investigated → Drafted** | Editorial adaptation written for target audience; publication target(s) assigned; meaning invariance checklist completed (core meaning of source article preserved); formatting rules for each target platform noted | Journalist |
| **Drafted → Reviewed** | Facts in adaptation verified against source; no claims added beyond what source supports; taxonomy tag(s) correct; editorial quality meets team standard; meaning invariance confirmed (adaptation does not distort original article's core message) | Senior Journalist |
| **Reviewed → Approved** | All prior gate criteria still satisfied; publication target(s) confirmed; publishing time confirmed; final read-through complete; no outstanding revision notes | Chief Journalist |
| **Approved → Published** | Publication job submitted to target platform(s); published URL captured; publication confirmed live (or scheduled with confirmation) | System (automated) |

### 4.4 State-Transition Matrix

The machine-readable specification for the workflow engine. Every transition defines the allowed role, Line assignment, executor type, required fields, audit event, notification, and four-eyes status. Sourced from Addendum v1.4 §3.1.

| # | From State | To State | Allowed Role | Line | Executor Type | Required Fields | Audit Event | Notification | Four-Eyes Status |
|---|-----------|---------|-------------|------|--------------|----------------|------------|-------------|------------------|
| T1 | Discovered | Logged | Reporter | Line 1 | Agent | `source_url` (required), ≥1 `topic_tag` (required), `trend_signal` brief description (required); `source_author` and `source_published_date` nullable — auto-extracted where possible, flagged for investigator review if extraction fails | Created | Notify Investigator: "New article logged" | `not_applicable` (entry point) |
| T2 | Logged | Validated | Investigator | Line 1 | Agent | `source_url` confirmed live; `source.platform` identified; `source.reliability_tier` set; `source_author` confirmed or manually entered; `source_published_date` confirmed or manually entered | StateChange | Notify Investigator: "Article validated, ready for investigation" | `not_applicable` (within Line 1) |
| T3 | Validated | Investigated | Investigator | Line 1 | Agent | `duplicate_check` = passed; `trend_signal.evidence_url` set; `trend_signal.reviewer_confidence` set; `topic_tag` confirmed against scope boundary; `editorial_angle` identified | StateChange | Notify Journalist: "Article investigated, ready for drafting" | `not_applicable` (within Line 1 — same agent allowed) |
| T4 | Investigated | Drafted | Journalist | Line 1 | Agent | `editorial_adaptation` non-empty; `publication_targets` assigned (≥1); `meaning_invariance_checklist` completed | StateChange | Notify Senior Journalist: "Draft ready for review" | `not_applicable` (within Line 1) |
| T5 | Drafted | Reviewed | Senior Journalist | **Line 2** | **Human-primary** (Chief Editor), agent-assisted | `fact_check` = passed; `taxonomy_compliance` = passed; `meaning_invariance` = confirmed; `editorial_quality` = meets standard | StateChange | Notify Chief Journalist: "Article reviewed, ready for approval" | **`satisfied`** (Line 1 → Line 2 boundary) |
| T6 | Reviewed | Approved | Chief Journalist | **Line 1** | Agent | All prior gate criteria confirmed; `publication_targets` confirmed; `publication_time` set; `final_readthrough` = complete | StateChange | Notify all: "Article approved for publication" + trigger publication job | **`satisfied`** (Line 2 → Line 1 boundary) |
| T7 | Approved | Published | System (automated) | N/A | System | Publication job submitted to all targets; `ARTICLE.current_state` = Published only when at least one target has `PUBLICATION.status = Published` with a live `published_url` | Published | Notify Chief Editor + agents: "Article published" with per-target URLs | `not_applicable` (automated) |
| T8 | *any active state* | Needs Revision | Any authorized role for current state | Same as current state | Agent or human (Line 2) | `revision_reason` (required, non-empty); `revision_target_state` (defaults to immediately prior state) | Returned | Notify role holder: "Article returned for revision" with reason | `not_applicable` (return, not advancement) |
| T8a | Needs Revision | *(revision_target_state)* | Original role for that state | Same as target state | Agent or human | `revision_reason` reviewed and addressed; article placed back at `revision_target_state` | StateChange | Notify role holder: "Article returned to [state] after revision" | `not_applicable` (returning from side state) |
| T9 | *any active state* | Rejected | Chief Journalist | Line 1 | Agent | `rejection_reason` (required, non-empty) | Rejected | Notify article originator + Chief Editor: "Article rejected" with reason | `not_applicable` (terminal) |
| T10 | Approved or Published | *(unchanged)* | System (auto-fallback) | N/A | System | Any publication target requiring manual intervention. `PUBLICATION.status` set to ManualReady; formatted post content generated; `ARTICLE.current_state` unchanged | StateChange | Notify Chief Editor: "Article ready for manual publish to [target name]" | `not_applicable` (publication-target status) |
| T11 | *(any state with ManualReady target)* | Published if first live target; otherwise unchanged | Chief Editor (manual confirm) | Line 2 | Human | Chief Editor enters `published_url` for manual target; `PUBLICATION.status` updated to Published; if first target with live URL, `ARTICLE.current_state` transitions to Published | Published | Notify all: "Article manually published to [target name]" | `not_applicable` |

> **Structural observation — pipeline Line flow:** The pipeline enters Line 2 at T5 (Drafted → Reviewed) and returns to Line 1 at T6 (Reviewed → Approved). This means the accountability check (Line 2) sits between the drafting step (Line 1) and the operational approval step (Line 1). This is intentional: Line 2 provides independent review before Line 1 grants operational approval. The Line 2 → Line 1 transition at T6 is a boundary crossing — four-eyes is satisfied by Line separation.

### 4.5 Publication State Rules

`ManualReady` is a `PUBLICATION.status` value (per-target), not an `ARTICLE.current_state`. The article-state and publication-status are distinct:

| Condition | `ARTICLE.current_state` | `PUBLICATION.status` (per target) |
|-----------|-------------------------|-----------------------------------|
| Article approved, no publication job started yet | Approved | (no records yet) |
| Publication job running | Approved | Pending |
| At least one target Published with live URL | **Published** | Published (succeeded); others may be Pending/Failed/ManualReady |
| All targets only ManualReady (none Published yet) | **Approved** (stays) | ManualReady |
| One target Published, another ManualReady | **Published** (with manual follow-up open) | Published + ManualReady |
| All targets Published | **Published** | Published (all) |

### 4.6 Return Rules

| Rule | Definition |
|------|-----------|
| Return target | Articles enter `Needs Revision` as a side state with a `revision_target_state` field specifying which workflow state to return to (defaults to immediately prior state). The role holder for that target state is notified. Article re-enters the workflow at `revision_target_state` via transition T8a. |
| Return count limit | After 3 returns to the same state, the article auto-escalates to the Chief Journalist for a reject-or-keep decision. |
| Revision reason visibility | The revision reason is visible to all roles on the article board. It becomes part of the permanent audit trail and cannot be deleted. |

### 4.7 Four-Eyes Enforcement

The four-eyes principle is enforced at **Line boundaries**. Independence comes from Line separation — agents in different Lines provide distinct judgment by structural design. This is the industry-standard GRC definition of independence per the Three Lines Model (IIA, updated 2020).

```
IF transition crosses a Line boundary (from_line != to_line)
  AND from_line AND to_line are both in [Line1, Line2]
THEN
  four_eyes_status = "satisfied"  // Line separation provides independence

IF transition is within the same Line (from_line == to_line)
THEN
  four_eyes_status = "not_applicable"  // Four-eyes not required within same Line

IF transition is executed by an executor outside the target Line's assignment
  (e.g., Line 2 executor performing a Line 1 gate)
THEN
  four_eyes_status = "override_not_four_eyes"  // Override — allowed but non-compliant
  event_type = "HumanOverride"
```

**Line boundary crossings in the pipeline:**
- T5 (Drafted → Reviewed): Line 1 → Line 2 — `satisfied`
- T6 (Reviewed → Approved): Line 2 → Line 1 — `satisfied`

**Within-Line transitions (no four-eyes required):**
- T1→T2, T2→T3, T3→T4: all within Line 1 — `not_applicable`

> **Retired from v1.2:** The `actor_id != previous_transition.actor_id` check is no longer the core enforcement mechanism. Under the Three Lines Model, the same agent may execute multiple Line 1 gates — independence comes from Line membership, not from agent-instance distinctness. The actor_id check is retained for audit logging but is not a four-eyes enforcement rule.
>
> **Line 2 is human-primary:** The Senior Journalist role (Line 2) is executed by the Chief Editor (human), with agent assistance. This means T5 (Line 1 → Line 2) always crosses from agent to human — four-eyes is satisfied by both Line separation and human/agent distinction.
>
> **Line 3 is independent:** Line 3 (Independent Assurance) has unrestricted read access to relevant evidence and an independent reporting/authority path — Lines 1 and 2 cannot control its scope or conclusions (`D-166`). If they could, it would stop being Line 3 and become a rubber stamp. Line 3 reports separately and is not part of the standing pipeline. See §16 for trigger rules.

### 4.8 Permission Matrix

| Action | Reporter (Line 1, agent) | Investigator (Line 1, agent) | Journalist (Line 1, agent) | Senior Journalist (Line 2, human-primary) | Chief Journalist (Line 1, agent) | Chief Editor (Line 2, human) |
|--------|--------------------------|-------------------------------|---------------------------|--------------------------------------------|----------------------------------|-------------------------------|
| Log article (create) | Yes | Yes | Yes | Yes | Yes | Yes (manual fallback, logged as HumanOverride) |
| Validate source | No | Yes | No | No | No | Only via explicit override (HumanOverride, `override_not_four_eyes`) |
| Investigate | No | Yes | No | No | No | Only via explicit override |
| Draft editorial adaptation | No | No | Yes | No | No | Only via explicit override |
| Review draft (quality, facts, taxonomy) | No | No | No | **Yes** | No | Yes (T5 is Line 2 — this is the Chief Editor's primary gate) |
| Approve for publication | No | No | No | No | **Yes** | Only via explicit override (Chief Editor is Line 2, approval is Line 1) |
| Reject article (terminal) | No | No | No | No | Yes | Yes (via Line 2 override) |
| Return to prior state | No | Yes (to Logged) | Yes (to Investigated) | Yes (to Drafted) | Yes (to any prior) | Yes (to any prior) |
| Emergency publish bypass | No | No | No | No | Yes (with mandatory reason + alert) | Yes |
| Trigger Line 3 audit | No | No | No | **Yes** (if risk signal crosses threshold) | Yes (if topic flagged novel/controversial) | Yes |
| Add new topic to taxonomy | No | No | No | No | Yes (with evolves_from + evolution_notes) | Yes |
| View audit trail | Yes (own articles) | Yes (assigned) | Yes (assigned) | Yes (all) | Yes (all) | Yes (all) |
| View all articles on board | Yes | Yes | Yes | Yes | Yes | Yes |

> **HumanOverride:** If the Chief Editor (Line 2) executes a Line 1 gate, the audit log records `event_type = HumanOverride` with `judgment_independence_status = override_not_four_eyes`. The transition is allowed; four-eyes is not satisfied. The system never silently treats an override as compliant.

### 4.9 Permission Edge Cases

| Scenario | Rule |
|----------|------|
| Four-eyes at Line boundaries | Enforced unconditionally at T5 (Line 1 → Line 2) and T6 (Line 2 → Line 1). The executor at T5 must be in Line 2; the executor at T6 must be in Line 1. Independence comes from Line separation, not from agent-instance distinctness. |
| Within-Line 1 transitions | Four-eyes is `not_applicable` for T1→T2, T2→T3, T3→T4 — all are within Line 1. The same agent may execute multiple Line 1 gates. This is the standard rule under the Three Lines Model, not an exception. |
| Chief Editor executing a Line 1 gate | The Chief Editor sits in Line 2. If the Chief Editor executes a Line 1 gate (e.g., stepping in when no Line 1 agent is available), the audit log records `event_type = HumanOverride` with `judgment_independence_status = override_not_four_eyes`. The transition is allowed; four-eyes is not satisfied. The system never silently treats an override as compliant. |
| Emergency publish | Chief Editor can bypass the four-eyes check (Line-separation enforcement) only by setting `emergency_publish = true` with mandatory reason. This bypass does **not** skip phase gates, required fields, audit logging, or publication confirmation, and does **not** grant role permissions. Audit log records `event_type = EmergencyBypass` (§13.1 enum, PascalCase) with reason string containing `emergency_bypass` (lowercase, descriptive label, not enum value). These are distinct fields. |
| Line 2 executor also in Line 1 | **Forbidden.** The Three Lines Model requires structural separation — the same person/agent cannot hold both Line 1 and Line 2 roles. The Chief Editor (Line 2) cannot also be the Chief Journalist (Line 1). This is a hard requirement of the standard. |
| Agent failure or unavailability | If a Line 1 agent fails, the article stalls and the Chief Editor is notified. The Chief Editor may execute the stalled Line 1 gate via explicit override (logged as HumanOverride, `override_not_four_eyes`). Alternatively, if OD3 permits multiple agent instances, the article can be reassigned to another Line 1 agent. |
| Chief Editor rejection after all gates | **Normal T9 rejection:** Chief Journalist (Line 1) rejects at T6 (Reviewed → Approved). **Chief Editor veto:** Chief Editor (Line 2) may veto an approval by returning the article via T8 with Line 2 finding as reason — this is a Line 2 override, logged with `event_type = HumanOverride`. Rejection routes to Needs Revision; article returns to Journalist for re-drafting. Prior approvals are noted as superseded. |

### 4.10 Absence Handling

| Scenario | Rule |
|----------|------|
| Line 1 agent fails or becomes unavailable | Article stalls in current state; Chief Editor notified. Chief Editor may execute the stalled Line 1 gate via explicit override (HumanOverride, `override_not_four_eyes`). Alternatively, if OD3 permits multiple agent instances, reassign to another Line 1 agent. |
| Chief Editor (Line 2) temporarily unavailable | Articles stall at T5 (Drafted → Reviewed) — Line 2 review cannot proceed. Line 1 agents continue executing their assigned gates. Publication jobs already Approved proceed automatically to WordPress. |
| Chief Editor unavailable > 48h | All articles requiring Line 2 review stall. No T5 review, no T11 manual publish confirmation, no emergency bypass. This is a known operational risk of the single-human model. Line 3 audits may proceed independently. |
| Line 3 audit in progress | **Pre-publication (blocking):** If Line 3 is triggered before T7, the article remains in Approved state; publication job is held; `Line3Audit` runs; T7 proceeds only after Line 3 clearance. **Post-publication (non-blocking):** If Line 3 is triggered after publication, it does not block the pipeline. If Line 3 finds a critical issue, it flags the article for Chief Editor review — the article may be recalled from Published state via T8 (Return) with Line 3 finding as reason. |

### 4.11 Approval Rules (Summary)

1. **Sequential gates only** — an article cannot skip a state. Each transition requires the assigned role per the transition matrix (§4.4).
2. **Four-eyes at Line boundaries** — four-eyes is enforced at Line 1 → Line 2 (T5) and Line 2 → Line 1 (T6) boundary crossings, satisfied by Line separation per the Three Lines Model. Within the same Line, four-eyes is `not_applicable`. See §4.7 for enforcement logic.
3. **Return with reason** — any return to a prior state must include a written reason and a `revision_target_state`. After 3 returns to the same state, auto-escalate to Chief Editor. See §4.6.
4. **No parallel paths** — an article is in exactly one state at any time. Publication to multiple platforms happens only after "Approved" state. See §4.5 for publication state rules.
5. **Timeout escalation** — if an article sits in a state beyond its SLA (see §6 Review SLA table), it escalates per the absence handling rules in §4.10.

---

## 5. Data Model

### 5.1 Core Entities

```
ARTICLE
├── id (UUID)
├── title (string)
├── source_url (URL, immutable once logged)
├── source_id (FK → Source — links to the tracked source entity)
├── source_author (string, nullable — auto-extracted, flagged for investigator review if extraction fails)
├── source_published_date (datetime, nullable — auto-extracted, flagged for investigator review if extraction fails)
├── logged_date (datetime)
├── logged_by (FK → User)
├── assigned_to (FK → User, nullable — current agent or Chief Editor responsible for the article)
├── current_state (enum: Discovered, Logged, Validated, Investigated, Drafted, Reviewed, Approved, Published, Needs Revision, Rejected)
├── topic_tags (M2M → Topic)
├── category (enum: Professional, AI)
├── trend_signal_id (FK → TrendSignal — links to the captured trend evidence)
├── editorial_adaptation (text — the team's written version)
├── editorial_angle (text, nullable — identified during investigation)
├── publication_targets (M2M → PublicationTarget)
├── publication_time (datetime, nullable — scheduled publication time)
├── formatted_post_content (JSON, nullable — per-target formatted content for manual publish)
├── duplicate_check (enum: Pending, Passed, Failed — status of duplicate URL/title check)
├── meaning_invariance_checklist (JSON, nullable — checklist completed during drafting)
├── fact_check (enum: Pending, Passed, Failed — verified during review)
├── taxonomy_compliance (enum: Pending, Passed, Failed — verified during review)
├── final_readthrough (boolean, default false — confirmed by Chief Journalist)
├── revision_target_state (enum, nullable — set when article is in Needs Revision)
├── return_count (int, default 0 — number of returns to current state; auto-escalate at 3)
├── emergency_publish (boolean, default false — set by Chief Journalist for four-eyes bypass)
├── created_at, updated_at (timestamps)

SOURCE
├── id (UUID)
├── name (string — e.g., "Scrum Alliance Blog", "Hugging Face Daily")
├── platform (enum: LinkedIn, Facebook, Blog, Guest Platform, RSS Feed, Other)
├── url (URL — the source's homepage or feed URL)
├── domain (string — extracted from URL for grouping)
├── reliability_tier (enum: Tier1-Official, Tier2-Established, Tier3-Social)
├── ingestion_method (enum: RSS, API, Manual, Bookmarklet)
├── feed_url (URL, nullable — RSS/Atom feed if available)
├── api_available (boolean — whether programmatic intake is possible)
├── topic_coverage (M2M → Topic — which topics this source covers)
├── last_checked (datetime — last time this source was polled)
├── freshness_sla (string — e.g., "daily", "weekly", "real-time")
├── active (boolean)
├── created_at, updated_at (timestamps)

TREND_SIGNAL
├── id (UUID)
├── article_id (FK → Article)
├── signal_type (enum: Engagement, ShareVelocity, Recency, AuthorityMention, TopicSpike)
├── freshness (datetime — when the trend was first observed)
├── engagement_metrics (JSON — likes, shares, comments, views as available)
├── source_tier (enum: Tier1, Tier2, Tier3 — from the source's reliability tier)
├── evidence_url (URL — link to the evidence of trending, e.g., a trending page or high-engagement post)
├── score (float — computed trend score: recency × source tier × engagement)
├── captured_at (datetime — when this signal was recorded)
├── captured_by (FK → User — who logged or confirmed the signal)
├── reviewer_confidence (enum: High, Medium, Low — investigator's confidence this is genuinely trending)
├── notes (text — free-form context on why this is trending)

TOPIC
├── id (UUID)
├── name (string)
├── category (enum: Professional, AI)
├── scope_boundary (text — what falls inside vs. outside this topic)
├── trend_signal_source (string — where to look for trends in this topic)
├── parent_topic (FK → Topic, nullable — for sub-topics like "Agentic AI" under "AI")
├── evolves_from (FK → Topic, nullable — the prior topic this concept evolved from, e.g., Agentic AI evolves_from Generative AI)
├── evolution_notes (text — context on how this topic emerged from its predecessor)

USER
├── id (UUID)
├── name (string)
├── email (string)
├── role (enum: Reporter, Investigator, Journalist, SeniorJournalist, ChiefJournalist)
├── actor_type (enum: Human, Agent — distinguishes the Chief Editor from virtual agents)
├── line_assignment (enum: Line1, Line2, Line3 — the Line this user/agent belongs to. Line 2 is the Chief Editor (human). Line 1 is all agent roles. Line 3 is the triggered assurance function.)
├── agent_id (string, nullable — unique identifier for virtual agents; null for the Chief Editor)
├── agent_role (string, nullable — the role this agent is currently assigned to; null for humans)
├── agent_run_id (string, nullable — execution run identifier for agents; null for humans)
├── supervising_human_id (FK → User, nullable — for agents, the Chief Editor supervising this agent; null for the Chief Editor)
├── active (boolean)

REVIEW
├── id (UUID)
├── article_id (FK → Article)
├── reviewer_id (FK → User)
├── actor_type (enum: Human, Agent — was this review performed by the Chief Editor or a virtual agent?)
├── line_assignment (enum: Line1, Line2, Line3 — the Line of the reviewer)
├── agent_run_id (string, nullable — execution run identifier if performed by an agent)
├── assisting_agent_id (string, nullable — if Line 2 review is agent-assisted, the assisting agent's identifier. The human Chief Editor remains the executor; the assisting agent is metadata, not the Line 2 executor.)
├── supervising_human_id (FK → User, nullable — Chief Editor supervising the agent that performed this review)
├── from_state (enum)
├── to_state (enum)
├── decision (enum: Advance, Return, Reject)
├── reason (text — required for Return/Reject)
├── timestamp (datetime)

PUBLICATION_TARGET
├── id (UUID)
├── name (string — e.g., "WordPress Blog", "LinkedIn (personal profile)", "Facebook Page")
├── api_config (JSON — endpoint, auth method, formatting rules)
├── status_note (string, nullable — human-readable constraint or dependency note)
├── mock_mode (string, nullable — describes behavior when real credentials are unavailable)
├── active (boolean)

PUBLICATION
├── id (UUID)
├── article_id (FK → Article)
├── target_id (FK → PublicationTarget)
├── published_url (URL — filled after publication)
├── published_at (datetime)
├── status (enum: Pending, Published, Failed, Scheduled, Cancelled, ManualReady, MockPublished)
├── retry_count (int, default 0 — auto-retry up to 3 times with 5-min backoff)
├── error_message (text, nullable — last error from API if Failed)
├── created_at, updated_at (timestamps)

> **MockPublished rule:** `MockPublished` is a test-only status. When a target is `MockPublished`, it does **not** satisfy the "at least one Published target with live URL" rule — `ARTICLE.current_state` does not transition to Published based on mock targets alone. To test the Published state transition in mock mode, manually set one target to `Published` with a test URL.

AUDIT_LOG
├── id (UUID)
├── article_id (FK → Article)
├── event_type (enum: Created, StateChange, TagAssigned, Published, Returned, Rejected, EmergencyBypass, HumanOverride, Line3Audit)
├── actor_id (FK → User)
├── actor_type (enum: Human, Agent — distinguishes Chief Editor actions from agent actions)
├── line_assignment (enum: Line1, Line2, Line3 — the Line of the executor for this event)
├── agent_id (string, nullable — agent identifier if actor_type = Agent)
├── agent_run_id (string, nullable — execution run identifier if actor_type = Agent)
├── assisting_agent_id (string, nullable — if applicable, the assisting agent for a Line 2 review)
├── supervising_human_id (FK → User, nullable — Chief Editor supervising the agent)
├── from_state (enum, nullable — set on StateChange/Returned/Rejected events)
├── to_state (enum, nullable — set on StateChange/Returned/Rejected events)
├── decision (enum: Advance, Return, Reject, nullable — set on state transitions)
├── judgment_independence_status (enum: satisfied, not_applicable, override_not_four_eyes — tracks whether this transition satisfied four-eyes via Line separation)
├── reason (text, nullable — required for Return/Reject/EmergencyBypass/HumanOverride)
├── metadata (JSON)
├── timestamp (datetime)
```

### 5.2 Topic Taxonomy (Initial)

**Professional Topics**

| Topic | Scope Boundary | Trend Signal Source |
|-------|----------------|-------------------|
| SAFe Agilist v6 | Scaled Agile Framework v6 certification, practices, updates | LinkedIn posts, Scrum.org, Scaled Agile community |
| Scrum Alliance CSM I / Scrum.org PSM I | Entry-level Scrum master certification content | Scrum Alliance blog, Scrum.org forums, LinkedIn |
| PeopleCert DevOps Leader | DevOps leadership certification, practices | PeopleCert announcements, DevOps Institute |
| PeopleCert ITIL 4 | ITIL 4 certification, service management practices | PeopleCert, Axelos, ITIL community blogs |

**AI Topics**

| Topic | Scope Boundary | Trend Signal Source | Evolves From |
|-------|----------------|-------------------|-------------|
| Generative AI | LLMs, image/video generation, multimodal models | arXiv, Hugging Face, AI company blogs | — (root) |
| Agentic AI | AI agent systems, multi-agent orchestration, autonomous task execution | Research papers, LangChain/LangGraph, AI startup blogs | Generative AI |
| AI Harness | Frameworks for controlling and directing AI models | Vendor docs, engineering blogs | Agentic AI |
| AI Guardrails | Safety mechanisms, policy enforcement, output filtering | AI safety research, vendor announcements | Agentic AI |
| AI Digital Twin | Virtual replicas of physical/logical systems using AI | Industrial AI publications, IoT + AI blogs | Generative AI |
| Context Engineering | Design and management of context windows, RAG, memory systems | AI engineering blogs, research papers | Agentic AI |
| Loop Engineering | Iterative AI improvement loops, feedback-driven refinement | Research papers, MLOps communities | Context Engineering |
| Long-Running Workflows | Extended AI task execution, human-in-the-loop checkpoints, async pipelines | Workflow orchestration tools, AI engineering blogs | Loop Engineering |

### 5.3 Topic Evolution / Lineage

The system tracks how AI concepts emerge from and build on prior concepts. This is not just a taxonomy — it is a genealogy of emerging topics. The user's own observation illustrates the pattern:

```
Competitive Gaming (AI fills player slots)
  → Bots built to play against AI
    → Gaming platforms ban bots
      → Players use bots for e-Sports practice
        → Generative AI (general-purpose model capabilities)
          → Agentic AI (autonomous task-executing agents)
            → AI Harness + Guardrails (control and safety for agents)
              → Context Engineering + Loop Engineering (managing agent cognition)
                → Long-Running Workflows (sustained autonomous execution with human checkpoints)
```

**How the system uses lineage:**
- When a new topic is added to the taxonomy, the chief journalist must specify its `evolves_from` parent and write `evolution_notes` explaining the emergence.
- The topic dashboard can display the lineage graph, showing which topics are foundational and which are emerging.
- Trend scoring can weight emerging topics (those with recent `evolves_from` lineage) higher, since they represent the leading edge of discourse.
- This prevents the taxonomy from becoming a flat list and ensures the system captures the direction of AI evolution, not just a snapshot of current topics.

---

## 6. MVP Roadmap

### Week 1: Core Workflow (The One End-to-End Path)

**Goal:** A journalist can log an article, it flows through approval gates, and approved articles are published.

| Deliverable | Description |
|------------|-------------|
| Article logging form | URL input, source auto-detect, topic tag selector, trend signal field |
| Workflow board | Kanban-style board showing all articles by current state |
| Role assignment | Each user has a role; only their authorized transitions appear |
| Approval gates | Sequential state transitions with four-eyes enforcement |
| Tag system | Professional vs AI category; topic tags from taxonomy |
| Publication to WordPress/blog | Full REST API publish (automatic) — application password configured |
| Publication to LinkedIn | Mark as "Ready for Manual Publish" — system generates formatted post and schedules it; user manually confirms posting until OAuth review completes (Addendum §1) |
| LinkedIn OAuth submission | Create LinkedIn Developer app, request `w_member_social` scope, submit for review (non-blocking, start Day 1) |
| Audit trail | Every state change logged with executor identity (human/agent/system), Line assignment, timestamp, and reason |

**Success criteria (corrected per Addendum v1.4 §1):**
- At least 5 articles logged by Reporter agents (Line 1) and moving through the pipeline
- At least 2 articles published to WordPress/blog with correct tags **or** marked "Ready for Manual Publish" to LinkedIn with formatted post content generated
- Chief Editor can see the full board and filter by state, topic, category, and Line assignment
- Zero articles bypass a review **sequence** (gate-skipping prevention: unconditional)
- Zero articles bypass review **independence** (four-eyes at Line boundaries, enforced unconditionally in code — but reported as **provisionally satisfied, pending OD2**, per Charter, which states this criterion as "independence of judgment, OD2, still open" and does not list it as unconditional. Corrected in v1.4; see Provisional Deviation Register D1.)
- Audit trail captures every state transition with executor identity (human/agent/system), Line assignment, timestamp, and reason

### Week 2–3: Trend Intake & Source Management

**Article Intake Cadence** — the system operates on a defined rhythm:

| Cadence | Activity | Owner |
|---------|----------|-------|
| Daily (morning) | RSS feed polling for all active sources; new items appear as "Discovered" | System (automated) |
| Daily (afternoon) | Reporters scan LinkedIn, Facebook, and blogs for trending posts not caught by RSS | Reporters |
| Weekly (Monday) | Watchlist review — each topic's top sources are checked for new publications | Investigators |
| Weekly (Wednesday) | Trend signal review — investigator confirms which "Discovered" items have genuine trend evidence | Investigators |
| Weekly (Friday) | Stale item **queue cleanup** — "Discovered" items older than 7 days with no trend signal are removed from the work queue. **This is queue cleanup, not governed archival** (`D-115`/`D-116`/`D-134`) unless it also produces the governed external archive fact | System (automated) |
| As-needed | Manual article logging via bookmarklet from any browser | Any team member |

**Review SLA** — items in each state have a maximum dwell time before escalation:

| State | Max Dwell Time | Escalation Action |
|-------|---------------|------------------|
| Discovered | 48 hours | Remove from queue if no trend signal confirmed (**queue cleanup, not archival** — `D-115`/`D-134`) |
| Logged | 24 hours | Notify investigator team |
| Validated | 48 hours | Notify senior journalist |
| Investigated | 72 hours | Notify journalist team |
| Drafted | 72 hours | Notify senior journalist |
| Reviewed | 48 hours | Notify chief journalist |
| Approved | 24 hours | Auto-trigger publication job |

| Deliverable | Description |
|------------|-------------|
| RSS feed intake | Subscribe to key RSS feeds per topic; new items appear as "Discovered" |
| Manual bookmarklet | Browser bookmarklet to log an article from any page |
| Source reliability tiers | Tier 1 (official vendor blogs), Tier 2 (established publications), Tier 3 (social posts) |
| Duplicate detection | URL and title similarity check before creating a new article |
| Trend signal scoring | Trend Score v0 + Editorial Priority Score v0 (see §10 Scoring Formulas) |
| Topic dashboard | Per-topic view showing trending articles, sorted by score |

### Week 4–6: Editorial Enhancements

| Deliverable | Description |
|------------|-------------|
| Editorial adaptation editor | Rich text editor for the journalist's written version |
| Meaning invariance checklist | Pre-publication checklist confirming the adaptation preserves the original article's core meaning |
| Publication scheduling | Date/time scheduling for publication targets |
| Multi-platform formatting | Auto-format adaptation for LinkedIn (short), blog (long), guest platform (per platform rules) |
| Notification system | In-app + email notifications for state assignments and SLA timeouts |
| Analytics dashboard | Articles per week, average time-in-pipeline, approval rate, publication rate by topic |

### Later Phases (Post-V1)

| Phase | Deliverable |
|-------|-----------|
| AI-assisted tagging | Suggest topic tags based on article content (human confirms) |
| AI summarization | Generate draft editorial adaptation (human edits and approves) |
| Automated trend detection | Real-time monitoring of defined sources with alert scoring |
| Facebook publishing | Via Facebook Graph API (requires app review) |
| Multi-team accounts | Multiple Chief Editor accounts, each with their own agent set and shared taxonomy |
| Subscription feeds | Paid curated feeds for professionals ($49/mo tier) |
| API access | Public API for programmatic access to approved articles |
| Mobile app | iOS/Android companion for reporters on the go |

---

## 7. Platform Options

### Option A: No-Code / Low-Code Stack (Fastest to V1)

| Layer | Tool | Why |
|-------|------|-----|
| Database & workflow board | **Airtable** or **Notion** | Relational data, views per state, role-based access, forms for logging |
| Automation engine | **Make (Integromat)** or **Zapier** | RSS intake, state transitions, notifications, API calls |
| Publishing | **Buffer** or **Make + LinkedIn API** | Scheduled multi-platform publishing |
| Notifications | **Slack** or email via Make | State assignments, SLA alerts |

**Pros:** Days to V1, no engineering team needed, easy iteration.
**Cons:** Limited custom workflow enforcement, four-eyes principle requires workarounds, audit trail is manual, scaling requires migration.

### Option B: Custom Web Application (Most Control)

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | React/Next.js | Dashboard, workflow board, forms |
| Backend | Node.js or Python (FastAPI) | API, workflow engine, role enforcement |
| Database | PostgreSQL | Relational integrity, audit trail, full-text search |
| Queue | Redis + BullMQ or Celery | Publication jobs, RSS polling, notifications |
| Publishing | WordPress REST API + LinkedIn API/manual fallback | Direct API integration with manual-ready fallback |
| Auth | OAuth 2.0 + role-based access control | Four-eyes enforcement, audit trail |

**Pros:** Full workflow enforcement, audit trail, four-eyes principle, custom scoring, scales to subscription tier.
**Cons:** 3–6 weeks to V1, requires developer, ongoing maintenance.

### Option C: Hybrid

| Layer | Tool | Why |
|-------|------|-----|
| Core workflow + data | **Airtable** with structured tables and views | Fast setup, role-based views, forms for logging |
| Workflow enforcement | **Airtable Automations + Make** | State transitions, notifications, four-eyes check via Make filter |
| Publishing | **Make + LinkedIn API + WordPress API** | Direct API calls triggered on "Approved" state |
| Trend intake | **Make + RSS + manual links** | RSS feeds pipe into "Discovered" table |
| Audit trail | **Airtable linked records** | Each state change creates a linked record in an Audit table |

**Pros:** V1 in under 2 weeks, enforces sequential gates, audit trail via linked records, upgradeable to custom app later.
**Cons:** Four-eyes principle requires a Make filter checking prior actor, not native.

### Recommended Stack (Addendum D1 — Recommended, Not Ratified)

Per the V1 Build Readiness Addendum, the recommended stack for the prototype is **Option B: Custom Web Application** with Supabase Auth. This recommendation is **not ratified** — it remains a provisional assumption for development until formally signed off per the Addendum's Ratification Log (§2.1).

| Layer | Technology | Rationale |
|-------|-----------|----------|
| Frontend | React/Next.js | Dashboard, workflow board, forms |
| Backend | FastAPI (Python) | API, workflow engine, role enforcement |
| Database | PostgreSQL (self-hosted or separately provisioned) | Relational integrity, audit trail, full-text search |
| Auth | Supabase Auth (auth only — OAuth, session management, role assignment) | Integrated with PostgreSQL; database is not Supabase-hosted by default |
| Queue | Redis + Celery | Publication jobs, RSS polling, notifications |

**Mock publish mode:** When real credentials or API access are not configured for any publication target, the publication job writes formatted output to a local file and marks the target status as `MockPublished`. This allows full workflow testing without external dependencies. `MockPublished` does not satisfy the Published transition rule (see §4.1 MockPublished rule).

### Build Decisions Table (Legacy D1–D8, Addendum v1.0 — Superseded by §2 Decision Register)

> **Note:** The D1–D8 table below was the original decision framework from the initial Addendum. In v1.3, the decision framework has been replaced by the §2 Decision Register (OD1–OD3 Resolved, A1–A7 Assumed). D1–D8 are retained here for traceability and because most remain as build-level recommendations that have not been re-litigated. D5 is closed — superseded by the Three Lines Model.

All decisions below are **Recommended (not ratified)** until formally signed off by the assigned owner. A recommendation with "Blocking: Yes" means the prototype cannot proceed to production without resolution, but it may proceed as a **provisional assumption** for development.

| # | Decision | Recommended Choice | Blocking? | Owner | Ratification Status |
|---|----------|-------------------|-----------|-------|---------------------|
| D1 | Prototype stack | Custom web app: React/Next.js + FastAPI + PostgreSQL | Yes | Developer + PM | Recommended — not ratified |
| D2 | Auth provider | Supabase Auth (auth only; PostgreSQL self-hosted or separately provisioned) | Yes | Developer | Recommended — not ratified |
| D3 | Week 1 publication target | WordPress auto-publish + LinkedIn manual-ready | Yes | PM | Recommended — not ratified |
| D4 | Trend scoring formula v0 | Simple weighted sum (see §11.1) | Yes | PM | Recommended — not ratified |
| D5 | Four-eyes exception policy | **Closed.** Superseded by Three Lines Model — Line separation replaces headcount as independence criterion. The prior "fewer than 5 active role holders" exception no longer applies. | No | Chief Journalist | Closed (v1.3) |
| D6 | Bookmarklet capture method | Copy-paste URL form only for Week 1 (bookmarklet in Week 2-3) | No | Developer | Recommended — not ratified |
| D7 | Notification mechanism | In-app only for Week 1 (email/Slack in Week 4-6) | No | Developer | Recommended — not ratified |
| D8 | Data retention policy | **Superseded.** Points to A6 / `RET-EDITORIAL 0.1-provisional`, ratified `D-134` — not a separate policy source | No | PM | Superseded, see A6 |

### API Constraints to Note

> The following are implementation assumptions based on general knowledge of these platforms' APIs. They must be verified against current official documentation before development begins, as API policies change frequently.

| Platform | Constraint (to verify) | Impact on V1 |
|----------|----------------------|--------------|
| LinkedIn | Requires OAuth 2.0, app review for publishing API; personal profile posting is simpler than company page posting. Verify current permissions at [LinkedIn Developer Documentation](https://learn.microsoft.com/en-us/linkedin/). | V1: ManualReady fallback until OAuth/app review is approved; automatic posting only after permissions are verified |
| Facebook | Requires app review, Meta Business verification; automated publishing heavily restricted. Verify current policy at [Meta for Developers](https://developers.facebook.com/). | V1: manual cross-posting; API in later phase |
| WordPress | REST API with application passwords; straightforward. Verify at [WordPress REST API docs](https://developer.wordpress.org/rest-api/). | V1: full API publishing |
| Guest platforms | Each has its own submission process; most are manual. | V1: manual; track as publication target with manual status |

---

## 8. Success Metrics

### Week 1 Success (Operational — corrected per Addendum §1 and Charter)

- 5+ articles logged and moving through the pipeline
- 2+ articles published to WordPress/blog with correct tags **or** marked "Ready for Manual Publish" to LinkedIn with formatted post content generated
- Chief Editor can see and filter the board by state, topic, category, and Line assignment
- Zero articles bypass a review **sequence** (gate-skipping prevention: unconditional)
- Zero articles bypass review **independence** (four-eyes at Line boundaries, enforced unconditionally in code — but reported as **provisionally satisfied, pending OD2**, per Charter, which states this criterion as "independence of judgment, OD2, still open" and does not list it as unconditional. Corrected in v1.4; see Provisional Deviation Register D1.)
- Every transition logged with executor identity (human/agent/system), Line assignment, timestamp, and reason

### Month 1 Success (Adoption)

- 20+ articles logged per week
- 10+ articles published across platforms
- Average time-in-pipeline under 5 days
- Approval rate above 60% (quality intake)
- Topic coverage across at least 6 of 12 defined topics

### Month 3 Success (Value)

- 3–5 hours/week saved vs manual article hunting
- 100% phase-gate sequence compliance (no bypassed approvals; four-eyes at Line boundaries unconditional per Three Lines Model)
- Editorial team reports the system as "indispensable" in feedback (under agent model: Chief Editor reports the system as indispensable)
- Foundation ready for subscription tier or AI-assisted features

---

## 9. Communication Annex (Controlled Adaptation Rules)

Per the Meaning-First Content System, the meaning is now locked. Below are rules for translating this blueprint to different audiences.

### For the CEO / Funder
- Lead with value: "3–5 hours/week saved, 100% compliance, compounding editorial asset"
- Emphasize the meaning lock: "We pay once for understanding, extract value repeatedly"
- Skip the data model and state diagrams; show the one end-to-end path
- Frame platform choice as a cost/speed tradeoff, not a technical decision

### For the Editorial Team
- Lead with the workflow board and their role in it
- Show the state diagram and approval rules in detail
- Emphasize the four-eyes principle and return-with-reason rule
- Walk through a sample article's journey from "Logged" to "Published"

### For the Developer (if Option B/C)
- Lead with the data model and API constraints
- Show the state machine and transition rules
- Provide the topic taxonomy as a seed data file
- Flag LinkedIn/Facebook API review timelines as early-start items

### For the AI Practitioner Audience
- Frame the system as a "context engineering" problem: the topic taxonomy is a context window, the approval gates are guardrails, and the publication targets are output channels
- The trend signal scoring is a lightweight ranking model
- The meaning invariance lock is the system's alignment mechanism

---

## 10. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|-------|-----------|
| LinkedIn API review delays V1 publishing | Medium | High | Start API review immediately; use Ready for Manual Publish/manual confirmation fallback |
| Editorial team doesn't adopt the workflow | Medium | Critical | Week 1 co-design session with Chief Editor; make the board the single source of truth; ensure agent role assignments match OD3 |
| Topic taxonomy becomes stale | High | Medium | Quarterly taxonomy review; allow topic addition via chief journalist approval |
| Trend signal scoring produces noise | High | Medium | Start with manual scoring; add algorithmic scoring only after 100+ articles logged |
| Four-eyes principle fails at Line boundaries | Low | High | Line separation is a hard requirement of the Three Lines Model. Monitor post-launch: if agents in different Lines produce identical judgments due to shared training data, revisit OD4 (pre-launch blocker). See §18 Lexicon Audit and §16 Line 3 Trigger Rules. |
| Facebook automated publishing blocked | High | Medium | V1 uses manual cross-posting; track Facebook as manual publication target |

---

## 11. Scoring Formulas (v0)

Sourced from Addendum §5. All formulas are version v0 — weights are starting assumptions, not validated. Review after 50+ scored articles.

### 11.1 Trend Score v0 (How Viral Is This?)

Separate from editorial fit. Measures how much momentum an article has in its domain.

| Input Variable | Source | Weight | Normalization |
|---------------|--------|--------|---------------|
| Recency | `source_published_date` -> hours since publish | 0.35 | `max(0, 1 - (hours_since_publish / 168))` -- decays to 0 after 7 days |
| Source Tier | `source.reliability_tier` | 0.25 | Tier1-Official = 1.0, Tier2-Established = 0.7, Tier3-Social = 0.4 |
| Engagement | `trend_signal.engagement_metrics` (likes + shares + comments) | 0.25 | `min(1.0, engagement / 500)` -- normalizes against 500 total engagements as saturation point |
| Share Velocity | `trend_signal.signal_type = ShareVelocity` -> engagements per hour since publish | 0.15 | `min(1.0, velocity / 10)` -- 10 engagements/hour = saturation |

**Formula:**

```
trend_score = (recency_norm * 0.35) + (source_tier_norm * 0.25) + (engagement_norm * 0.25) + (velocity_norm * 0.15)
```

**Output:** Float 0.0-1.0. Display as percentage (e.g., 0.73 = "73% trend strength").

**Missing data handling:**
- If `engagement_metrics` is null (source doesn't expose metrics): engagement_norm = 0.5 (neutral), velocity_norm = 0.0
- If `source_published_date` is null: recency_norm = 0.5 (neutral), article flagged for investigator review

### 11.2 Editorial Priority Score v0 (How Important Is This to Us?)

Separate from virality. Measures strategic fit and editorial value.

| Input Variable | Source | Weight | Normalization |
|---------------|--------|--------|---------------|
| Topic Lineage Depth | `topic.evolves_from` chain depth (root = 0, Long-Running Workflows = 4) | 0.30 | `depth / max_depth` -- deeper lineage = more emerging = higher priority |
| Reviewer Confidence | `trend_signal.reviewer_confidence` | 0.25 | High = 1.0, Medium = 0.6, Low = 0.3 |
| Source Authority Match | Does the source's topic_coverage include this article's topic? | 0.20 | Exact match = 1.0, partial = 0.5, no match = 0.2 |
| Category Balance | Is this topic underrepresented in current pipeline? | 0.15 | If < 3 articles in pipeline for this category in last 7 days = 1.0, else 0.3 |
| Evidence Quality | `trend_signal.evidence_url` present and accessible | 0.10 | Present + accessible = 1.0, present but unreachable = 0.5, absent = 0.0 |

**Formula:**

```
editorial_priority = (lineage_depth_norm * 0.30) + (confidence_norm * 0.25) + (authority_match_norm * 0.20) + (balance_norm * 0.15) + (evidence_quality_norm * 0.10)
```

**Output:** Float 0.0-1.0. Display as "Strategic Priority: Low / Medium / High" (thresholds: < 0.4 = Low, 0.4-0.7 = Medium, > 0.7 = High).

### 11.3 Combined Dashboard Sorting

Articles on the workflow board are sorted by:

```
display_priority = (trend_score * 0.5) + (editorial_priority * 0.5)
```

Both scores remain visible independently on each article card. The weights can be tuned in later versions.

### 11.4 Score Versioning

| Field | Value |
|-------|-------|
| Formula version | v0 |
| Created | 2026-08-15 |
| Change log | Initial formula -- weights are starting assumptions, not validated. Review after 50+ scored articles. |

---

## 12. Publishing Fallback Plan

Sourced from Addendum §7.

### 12.1 Publication Status State Machine

```
                    +----------+
         +----------| Pending  | (publication job queued)
         |          +----+-----+
         |               |
         |      +--------+--------+
         |      v        v        v
         | +--------+ +------+ +----------+
         | |Published| |Failed| |Scheduled |
         | +--------+ +--+---+ +----+-----+
         |               |           |
         |               | retry <=3  | at scheduled time
         |               v           v
         |          +------+    +----------+
         |          |Retry |    | Pending  |
         |          +--+---+    +----------+
         |     retry >3 |
         |              v
         |         +----------+
         +--------->|ManualReady| (human takes over)
                   +----+-----+
                        | human confirms
                        v
                   +----------+
                   |Published |
                   +----------+

Side state:
  +----------+
  |Cancelled | (Chief Journalist cancels before publish)
  +----------+
```

### 12.2 Failure Handling Rules

| Publication Status | Trigger | System Action | Notification |
|-------------------|---------|---------------|-------------|
| Pending -> Failed | API returns error (4xx/5xx) | Log error; auto-retry up to 3 times with 5-min backoff | Notify Developer: "Publication job failed for [article] on [platform]" |
| Failed -> Retry | Retry count < 3 | Re-queue publication job | None (silent retry) |
| Failed -> ManualReady | Retry count = 3 | Move article to "Ready for Manual Publish"; generate formatted post content for manual use | Notify Chief Journalist: "Auto-publish exhausted, manual publish required" |
| ManualReady -> Published | Chief Journalist manually confirms publish URL captured | Update publication record with URL and timestamp | Notify all: "Article manually published" |
| Pending -> Cancelled | Chief Journalist cancels before job executes | Mark publication as cancelled; article returns to "Approved" state for re-scheduling | Notify article owner: "Publication cancelled by Chief Journalist" |
| Scheduled -> Pending | Scheduled time arrives | Move to Pending and execute publication job | None (automated) |

### 12.3 Multi-Platform Partial Failure

| Scenario | Rule |
|----------|------|
| WordPress succeeds, LinkedIn fails | WordPress publication proceeds; LinkedIn moves to retry/manual path; article status = Published (partial); LinkedIn failure tracked independently |
| All targets fail | Article status = Approved (reverted); all publication targets in Failed/ManualReady state; Chief Journalist notified |
| One target scheduled, one auto | Scheduled target waits; auto target executes immediately; article status = Published only when at least one target has Published with a live URL |

### 12.4 Publication Target Priority

For multi-target articles, publication executes in this order:

1. WordPress/blog (highest success rate, no API review needed)
2. LinkedIn (if OAuth approved; otherwise ManualReady)
3. Facebook (manual in V1)
4. Guest platforms (manual, tracked only)

---

## 13. Seed Data

Machine-readable seed data for prototype initialization. Sourced from Addendum v1.4 §4.2-4.4.

### 13.1 Enumerations

```json
{
  "article_states": ["Discovered", "Logged", "Validated", "Investigated", "Drafted", "Reviewed", "Approved", "Published", "Needs Revision", "Rejected"],
  "categories": ["Professional", "AI"],
  "roles": ["Reporter", "Investigator", "Journalist", "SeniorJournalist", "ChiefJournalist"],
  "line_assignments": ["Line1", "Line2", "Line3"],
  "executor_types": ["human", "agent", "system"],
  "reliability_tiers": ["Tier1-Official", "Tier2-Established", "Tier3-Social"],
  "ingestion_methods": ["RSS", "API", "Manual", "Bookmarklet"],
  "signal_types": ["Engagement", "ShareVelocity", "Recency", "AuthorityMention", "TopicSpike"],
  "reviewer_confidence": ["High", "Medium", "Low"],
  "publication_status": ["Pending", "Published", "Failed", "Scheduled", "Cancelled", "ManualReady", "MockPublished"],
  "transition_decisions": ["Advance", "Return", "Reject"],
  "audit_event_types": ["Created", "StateChange", "TagAssigned", "Published", "Returned", "Rejected", "EmergencyBypass", "HumanOverride", "Line3Audit"],
  "judgment_independence_status": ["satisfied", "not_applicable", "override_not_four_eyes"]
}
```

> **Changes from v1.2:** Added `line_assignments` enum. Added `Line3Audit` and `HumanOverride` audit event types. Added `judgment_independence_status` enum — retired `contingent_on_OD2` and `blocked` (v1.2 values). Added `executor_types` enum. Removed `human_or_agent_pending_OD1` (OD1 resolved — executor type is determined by Line assignment).

### 13.2 Topic Seed Data

```json
[
  {"name": "SAFe Agilist v6", "category": "Professional", "scope_boundary": "Scaled Agile Framework v6 certification, practices, updates", "trend_signal_source": "LinkedIn posts, Scaled Agile community", "evolves_from": null, "evolution_notes": null},
  {"name": "Scrum Alliance CSM I / Scrum.org PSM I", "category": "Professional", "scope_boundary": "Entry-level Scrum master certification content", "trend_signal_source": "Scrum Alliance blog, Scrum.org forums, LinkedIn", "evolves_from": null, "evolution_notes": null},
  {"name": "PeopleCert DevOps Leader", "category": "Professional", "scope_boundary": "DevOps leadership certification, practices", "trend_signal_source": "PeopleCert announcements, DevOps Institute", "evolves_from": null, "evolution_notes": null},
  {"name": "PeopleCert ITIL 4", "category": "Professional", "scope_boundary": "ITIL 4 certification, service management practices", "trend_signal_source": "PeopleCert, Axelos, ITIL community blogs", "evolves_from": null, "evolution_notes": null},
  {"name": "Generative AI", "category": "AI", "scope_boundary": "LLMs, image/video generation, multimodal models", "trend_signal_source": "arXiv, Hugging Face, AI company blogs", "evolves_from": null, "evolution_notes": "Root AI topic -- general-purpose model capabilities"},
  {"name": "Agentic AI", "category": "AI", "scope_boundary": "AI agent systems, multi-agent orchestration, autonomous task execution", "trend_signal_source": "Research papers, LangChain/LangGraph, AI startup blogs", "evolves_from": "Generative AI", "evolution_notes": "Shift from generation to autonomous task execution using generative models as the reasoning engine"},
  {"name": "AI Harness", "category": "AI", "scope_boundary": "Frameworks for controlling and directing AI models", "trend_signal_source": "Vendor docs, engineering blogs", "evolves_from": "Agentic AI", "evolution_notes": "Control layer emerged as agents needed managed execution environments"},
  {"name": "AI Guardrails", "category": "AI", "scope_boundary": "Safety mechanisms, policy enforcement, output filtering", "trend_signal_source": "AI safety research, vendor announcements", "evolves_from": "Agentic AI", "evolution_notes": "Safety layer emerged alongside harness as agents needed constrained behavior"},
  {"name": "AI Digital Twin", "category": "AI", "scope_boundary": "Virtual replicas of physical/logical systems using AI", "trend_signal_source": "Industrial AI publications, IoT + AI blogs", "evolves_from": "Generative AI", "evolution_notes": "Applied generative models to create simulated replicas of physical systems"},
  {"name": "Context Engineering", "category": "AI", "scope_boundary": "Design and management of context windows, RAG, memory systems", "trend_signal_source": "AI engineering blogs, research papers", "evolves_from": "Agentic AI", "evolution_notes": "Managing agent cognition required structured context management beyond prompt engineering"},
  {"name": "Loop Engineering", "category": "AI", "scope_boundary": "Iterative AI improvement loops, feedback-driven refinement", "trend_signal_source": "Research papers, MLOps communities", "evolves_from": "Context Engineering", "evolution_notes": "Iterative refinement emerged from context management -- feedback loops to improve agent outputs"},
  {"name": "Long-Running Workflows", "category": "AI", "scope_boundary": "Extended AI task execution, human-in-the-loop checkpoints, async pipelines", "trend_signal_source": "Workflow orchestration tools, AI engineering blogs", "evolves_from": "Loop Engineering", "evolution_notes": "Sustained execution beyond single-turn interactions, with human checkpoints for peer review of artifacts"}
]
```

### 13.3 Source Seed Data

```json
[
  {"name": "Scaled Agile Inc. Blog", "platform": "Blog", "url": "https://scaledagile.com/blog", "reliability_tier": "Tier1-Official", "ingestion_method": "RSS", "topic_coverage": ["SAFe Agilist v6"]},
  {"name": "Scrum Alliance Blog", "platform": "Blog", "url": "https://scrumalliance.org/blog", "reliability_tier": "Tier1-Official", "ingestion_method": "RSS", "topic_coverage": ["Scrum Alliance CSM I / Scrum.org PSM I"]},
  {"name": "Scrum.org Forums", "platform": "Blog", "url": "https://scrum.org/Forums", "reliability_tier": "Tier1-Official", "ingestion_method": "Manual", "topic_coverage": ["Scrum Alliance CSM I / Scrum.org PSM I"]},
  {"name": "PeopleCert News", "platform": "Blog", "url": "https://peoplecert.org/news", "reliability_tier": "Tier1-Official", "ingestion_method": "RSS", "topic_coverage": ["PeopleCert DevOps Leader", "PeopleCert ITIL 4"]},
  {"name": "Axelos Blog", "platform": "Blog", "url": "https://axelos.com/corporate/blog", "reliability_tier": "Tier1-Official", "ingestion_method": "RSS", "topic_coverage": ["PeopleCert ITIL 4"]},
  {"name": "Hugging Face Daily Papers", "platform": "RSS Feed", "url": "https://huggingface.co/papers", "reliability_tier": "Tier2-Established", "ingestion_method": "RSS", "topic_coverage": ["Generative AI", "Agentic AI"]},
  {"name": "arXiv cs.AI", "platform": "RSS Feed", "url": "https://arxiv.org/list/cs.AI/recent", "reliability_tier": "Tier2-Established", "ingestion_method": "RSS", "topic_coverage": ["Generative AI", "Agentic AI", "Context Engineering", "Loop Engineering"]},
  {"name": "LangChain Blog", "platform": "Blog", "url": "https://blog.langchain.dev", "reliability_tier": "Tier2-Established", "ingestion_method": "RSS", "topic_coverage": ["Agentic AI", "Context Engineering", "Loop Engineering"]},
  {"name": "AI Company Blogs (aggregated)", "platform": "Blog", "url": "https://openai.com/blog, https://anthropic.com/news, https://deepmind.google/discover/blog", "reliability_tier": "Tier1-Official", "ingestion_method": "RSS", "topic_coverage": ["Generative AI", "Agentic AI", "AI Guardrails"]},
  {"name": "LinkedIn Trending Posts", "platform": "LinkedIn", "url": "https://linkedin.com", "reliability_tier": "Tier3-Social", "ingestion_method": "Manual", "topic_coverage": ["all professional + AI topics"]}
]
```

### 13.4 Publication Target Seed Data

> Seed rows below omit the `active` field for brevity. Importers should default `active = true` for all seed publication targets.

```json
[
  {"name": "WordPress Blog", "api_config": {"endpoint": "{base_url}/wp-json/wp/v2/posts", "auth_method": "application_password", "formatting_rules": "HTML body, title as post_title, tags as WP categories"}, "mock_mode": "When WordPress credentials are not configured, publication job writes formatted post to local file and marks target as MockPublished for testing"},
  {"name": "LinkedIn (personal profile)", "api_config": {"endpoint": "https://api.linkedin.com/v2/ugcPosts", "auth_method": "oauth2", "formatting_rules": "Plain text with hashtags, max 3000 chars, no HTML"}, "status_note": "Requires OAuth review -- verify current endpoint and scope at https://learn.microsoft.com/en-us/linkedin/ -- use manual fallback until approved", "mock_mode": "When OAuth not approved, formatted post content is generated and stored for manual use"},
  {"name": "Facebook Page", "api_config": {"endpoint": "https://graph.facebook.com/v18.0/{page_id}/feed", "auth_method": "page_access_token", "formatting_rules": "Plain text, max 63206 chars"}, "status_note": "Requires Meta Business verification -- verify current API version at https://developers.facebook.com/ -- manual cross-posting in V1"}
]
```

---

## 14. Acceptance Tests

Sourced from Addendum v1.4 §8. 40 acceptance tests across 8 categories, in Given/When/Then format.

### 14.1 Article Logging (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-001 | Reporter agent (Line 1) is active | Reporter agent logs a valid URL with ≥1 topic tag | Article created in "Logged" state; audit log records `executor_type = agent`, `line_assignment = Line1`, agent_id, timestamp |
| AT-002 | Reporter agent is active | Reporter agent submits form without a URL | Form rejects submission with error "Source URL is required" |
| AT-003 | Reporter agent is active | Reporter agent submits form with URL but no topic tag | Form rejects submission with error "At least one topic tag is required" |
| AT-004 | Reporter agent is active | Reporter agent submits form with a URL that already exists as another article's source_url | System blocks creation with error "Duplicate: this URL is already tracked as article [ID]" |
| AT-005 | Reporter agent is active | Agent logs an article and source metadata cannot be auto-extracted | Article created with null fields; flagged for investigator review |
| AT-006 | Chief Editor (Line 2) manually logs an article | Chief Editor enters URL with topic tag | Article created in "Logged" state; audit log records `executor_type = human`, `line_assignment = Line2`, `event_type = HumanOverride` (manual fallback, Line 2 executing Line 1 gate) |

### 14.2 Workflow State Transitions (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-010 | Article in "Logged" state, Investigator agent (Line 1) assigned | Investigator agent executes "Validate" | Article moves to "Validated"; audit log records `line_assignment = Line1`, `judgment_independence_status = not_applicable` |
| AT-011 | Article in "Validated", same investigator agent | Same agent executes "Investigate" | Article moves to "Investigated" (within Line 1 — same agent allowed) |
| AT-012 | Article in "Investigated", Journalist agent (Line 1) assigned | Journalist agent (different Line 1 agent) executes "Draft" | Article moves to "Drafted"; `judgment_independence_status = not_applicable` (within Line 1) |
| AT-012a | Article in "Investigated", same agent that executed T3 | Same agent executes T4 (Draft) | Article moves to "Drafted" (within Line 1 — same agent allowed; four-eyes not required within same Line) |
| AT-013 | Article is in any state | Authorized role clicks "Return to Revision" without entering a reason | System blocks with error "Revision reason is required" |
| AT-014 | Article returned to same state 3 times | Fourth return attempt | Auto-escalate to Chief Editor |
| AT-015 | Article in "Approved" | System auto-triggers publication to WordPress | Publication status: Pending → Published; article moves to "Published" |
| AT-016 | Article in "Drafted" | Chief Editor (Line 2) executes T5 (Review) | Article moves to "Reviewed"; audit log records `line_assignment = Line2`, `judgment_independence_status = satisfied` (Line 1 → Line 2 boundary) |
| AT-017 | Article in "Reviewed" | Chief Journalist agent (Line 1) executes T6 (Approve) | Article moves to "Approved"; audit log records `line_assignment = Line1`, `judgment_independence_status = satisfied` (Line 2 → Line 1 boundary) |
| AT-018 | Article in "Reviewed" | Chief Editor (Line 2) executes T6 (Approve) — a Line 1 gate | Audit log records `event_type = HumanOverride`, `judgment_independence_status = override_not_four_eyes`; transition allowed, four-eyes not satisfied |

### 14.3 Publishing (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-020 | Article is "Approved" with WordPress target | Publication job executes | WordPress post created via REST API; published_url returned and stored; article status = Published |
| AT-021 | Article is "Approved" with a publication target requiring manual intervention | Publication job attempts target API; API returns auth error or target has no API | System retries 3 times (for API targets); after 3 failures or for non-API targets, `PUBLICATION.status` set to ManualReady; formatted post content generated; Chief Editor notified per T10 |
| AT-022 | Article has a publication target with `PUBLICATION.status` = ManualReady | Chief Editor enters published_url and confirms | Publication record updated per T11; `PUBLICATION.status` = Published for that target; if first target with live URL, `ARTICLE.current_state` transitions to Published; all notified |
| AT-023 | Article has both WordPress and LinkedIn targets | WordPress succeeds, LinkedIn fails | WordPress publication proceeds; article status = Published (partial); LinkedIn tracked as Failed/ManualReady |

### 14.4 Trend Scoring (P1)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-030 | Article has trend_signal with engagement_metrics = 450, source_tier = Tier1, published 12 hours ago | Score is calculated | trend_score is computed per v0 formula; score displayed on article card |
| AT-031 | Article has no engagement_metrics | Score is calculated | engagement_norm = 0.5 (neutral); velocity_norm = 0.0; score still computed with remaining inputs |
| AT-032 | Two articles in the same pipeline state | Dashboard loads | Articles sorted by display_priority (trend_score * 0.5 + editorial_priority * 0.5) |

### 14.5 Audit Trail (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-040 | Any state transition occurs | Transition completes | Audit log entry created with: article_id, executor_id, executor_type, **line_assignment**, from_state, to_state, decision, reason, timestamp, **judgment_independence_status** |
| AT-041 | Article is returned with revision reason | Return completes | Revision reason is visible to all roles on the board; reason is permanent in audit trail |
| AT-042 | Chief Editor uses emergency publish bypass | Bypass executes | Audit log: `event_type = EmergencyBypass`, `line_assignment = Line2`, reason string with `emergency_bypass` flag; all notified |
| AT-043 | Chief Editor (Line 2) executes a Line 1 gate | Human override executes | Audit log: `event_type = HumanOverride`, `judgment_independence_status = override_not_four_eyes`, gate executed, reason, timestamp |
| AT-044 | Line 3 audit is triggered on an article | Line 3 completes audit | Audit log: `event_type = Line3Audit`, `line_assignment = Line3`, finding, recommendation, timestamp; Line 3 reports independently, with unrestricted read access to relevant evidence and an independent reporting/authority path — Lines 1/2 cannot control its scope or conclusions (`D-166`) |

### 14.6 Board and Filtering (P1)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-050 | Multiple articles across different states | Chief Editor opens dashboard | Kanban board displays all articles grouped by current_state; each card shows title, topic_tags, trend_score, editorial_priority, executor_type, **line_assignment** |
| AT-051 | Board has articles in multiple categories | Chief Editor filters by category = "AI" | Only articles with category = AI are displayed |
| AT-052 | Board has articles with multiple topic tags | Chief Editor filters by topic = "Agentic AI" | Only articles with that tag displayed |
| AT-053 | Board has articles at different Line boundaries | Chief Editor filters by Line assignment | Articles filtered by Line 1 / Line 2 / Line 3 executor |

### 14.7 Role-Based Access (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-060 | Reporter agent (Line 1) views article in "Validated" state | Agent sees available actions | Only "View" is available — Reporter cannot validate (that's Investigator's role) |
| AT-061 | Journalist agent (Line 1) views article in "Investigated" state | Agent sees available actions | "Draft" visible; "Validate" and "Approve" not visible |
| AT-062 | Chief Editor (Line 2) views any article | Chief Editor sees available actions | "Review" (Line 2 gate) visible; "Approve" visible only as override; "Emergency Publish" visible; "Trigger Line 3 Audit" visible if risk signal crosses threshold |

### 14.8 Three Lines Model Alignment (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-070 | Chief Editor dispatches a Reporter agent (Line 1) to log an article | Agent completes logging | Audit log records `actor_type = Agent`, `line_assignment = Line1`, agent_id, agent_run_id, supervising_human_id = Chief Editor |
| AT-071 | Any Line 1 agent performs a state transition | Transition completes | Audit log entry includes `actor_type = Agent`, `line_assignment = Line1`, agent_id, agent_run_id; supervising_human_id is set to the Chief Editor |
| AT-072 | Chief Editor (Line 2) performs a state transition directly | Transition completes | Audit log entry includes `actor_type = Human`, `line_assignment = Line2`; agent_id and agent_run_id are null |
| AT-073 | Article moves through all gates T1-T6 in sequence | Each transition is attempted in order | No transition is blocked by sequence enforcement; all gates are passed in order; T5 and T6 record `judgment_independence_status = satisfied` (Line boundary crossings) |
| AT-074 | Line 3 audit is triggered | Line 3 completes audit | Audit log: `event_type = Line3Audit`, `line_assignment = Line3`, finding, recommendation, timestamp; Line 3 reports independently, with unrestricted read access to relevant evidence and an independent reporting/authority path — Lines 1/2 cannot control its scope or conclusions (`D-166`) |
| AT-075 | Tagging is performed at the Reporter stage | Reporter agent (Line 1) processes an article | Tags are assigned by the agent, not by the Chief Editor; Chief Editor's role is review (Line 2), not tagging |

---

## 15. Governance Items (Non-Blocking, Post-MVP)

Sourced from Addendum v1.4 §9. These items are documented for traceability but do not block V1 prototype.

| # | Item | Description | Target Phase |
|---|------|-------------|-------------|
| G1 | Data retention policy | **Superseded.** Points to A6 / `RET-EDITORIAL 0.1-provisional`, ratified `D-134` — not a separate policy source | Ratified, see A6 |
| G2 | GDPR/privacy considerations | Articles sourced from individuals on social platforms need consent tracking for publication | Phase 2 |
| G3 | Blueprint versioning | Add semantic versioning to blueprint; version increments on any invariant change | **Executed** — Blueprint is v1.3 with changelog |
| G4 | Taxonomy change workflow | Chief Editor proposes new topic → review → approval; `evolves_from` and `evolution_notes` required | Week 4-6 |
| G5 | Integration testing plan | Automated tests for publishing pipeline: mock WordPress, LinkedIn APIs | Week 2-3 |
| G6 | Notification design | In-app only for Week 1; email + Slack in Week 4-6 | Week 4-6 |
| G7 | Bookmarklet specification | JavaScript bookmarklet extracting page metadata | Week 2-3 |
| G8 | Line 3 trigger criteria | Define and document specific risk thresholds and novelty/controversy flags that trigger Line 3 audit | Week 4-6 |
| G9 | Line assignment verification | Verify that Line assignments hold in production — agents in different Lines produce genuinely distinct judgments, not identical outputs due to shared training data | Post-launch monitoring |
| G10 | Three Lines Model ratification | Chief Editor formally signs off on the Three Lines Model mapping as the project's independence framework | Before production sign-off |

---

## 16. Line 3 Trigger Rules

Line 3 (Independent Assurance) is a risk-based audit function, triggered conditionally. It does not run on every article — it runs only where risk warrants it. This is standard risk-based audit planning. Sourced from Addendum v1.4 §13.

### Trigger Conditions

| Trigger | Description | Who Triggers |
|---------|-------------|-------------|
| Risk signal crosses threshold | Line 2's risk assessment indicates elevated risk (e.g., topic is controversial, source is unverified, engagement metrics are anomalous) | Senior Journalist (Line 2) |
| Novel/controversial topic | Article's topic is flagged as novel (no prior coverage in pipeline) or controversial (multiple conflicting perspectives in source material) | Senior Journalist or Chief Journalist |
| Emergency bypass used | Chief Editor used EmergencyBypass on this article or a related article | System (automatic) |
| Repeated returns | Article has been returned to the same state 3+ times | System (automatic) |
| HumanOverride used | Chief Editor executed a Line 1 gate via HumanOverride on this article | System (automatic) |

### Line 3 Independence Requirements

- Line 3 has unrestricted read access to relevant evidence and an independent reporting/authority path — if Lines 1 or 2 could control its scope or conclusions, it would stop being Line 3 and become a rubber stamp (`D-166`)
- Line 3 reports independently to the Chief Editor (not through Line 1 or Line 2)
- Line 3 findings are logged as `event_type = Line3Audit` with `line_assignment = Line3`
- Line 3 can recommend article recall (T8 Return) if a critical issue is found post-publication
- Line 3 does not block the pipeline unless it finds a critical issue pre-publication

---

## 17. Three Lines Model Mapping

The pipeline maps onto the Three Lines Model (IIA, July 2020, updated September 2024). This is a real, standardized GRC framework. The mapping is an inference from this project's analysis, not from the organization's actual GRC documentation. Sourced from Business Case v2.1 and Addendum v1.4 §12.

| Three Lines Line | Pipeline Function | Roles | Executor | Four-Eyes |
|---|---|---|---|---|
| **Line 1 — Operations** | Origination, Verification, Standards fit, operational approval | Reporter, Investigator, Journalist, Chief Journalist | Agent-primary, human spot-check optional | Not required within same Line (T1–T4 all within Line 1) |
| **Line 2 — Risk & Compliance** | Accountability (regulation, compliance, governance as one continuous check) | Senior Journalist | Human-primary (Chief Editor), agent-assisted | Required at Line 1 → Line 2 boundary (T5) and Line 2 → Line 1 boundary (T6) |
| **Line 3 — Independent Assurance** | Risk-based audit (triggered conditionally) | — (triggered function, not a standing role) | Independent — unrestricted read access to relevant evidence and an independent reporting/authority path; Lines 1/2 cannot control its scope or conclusions (`D-166`) | Reports separately; not part of standing pipeline |

**Pipeline Line flow:**
```
Line 1: T1 (Reporter) → T2 (Investigator) → T3 (Investigator) → T4 (Journalist)
    ↓ Line boundary crossing — four-eyes satisfied
Line 2: T5 (Senior Journalist / Chief Editor)
    ↓ Line boundary crossing — four-eyes satisfied
Line 1: T6 (Chief Journalist)
    ↓
System: T7 (automated publication)
```

**Why Line separation satisfies four-eyes:** The Three Lines Model requires structural separation between Line 1 (doing the work) and Line 2 (overseeing the work). The same person can never hold both — this is a hard requirement of the standard. Agents in different Lines provide genuinely distinct judgment because their reporting lines, objectives, and oversight structures are separated by design.

**Why T3 is not an exemption:** Under v1.2, T3 (same investigator validates + investigates) was treated as a special-case exception. Under the Three Lines Model, it is the standard rule — four-eyes applies at Line boundaries, not within Lines. Both validation and investigation are Line 1 operational functions.

**Methodology note:** The project's original instruction set uses Aristotelian first-principles deconstruction. ITIL 4's "start where you are" principle says the opposite: investigate and measure the current state honestly before deciding whether to discard it. These are compatible only if first-principles is used for **diagnosis**, not **construction**. The structural conclusions reached through the project's first-principles analysis land exactly on the Three Lines Model — that validates the reasoning was sound.

---

## 18. Lexicon Audit

### Retired in v1.3 (invented terms replaced by GRC standard vocabulary)

| Invented term | Replaced by | Why |
|---|---|---|
| Prototype mode | (Not needed) | OD2 resolved — no distinction between prototype and compliance mode |
| Compliance mode | (Not needed) | Same — four-eyes is unconditional at Line boundaries |
| `contingent_on_OD2` (field value) | `satisfied` or `not_applicable` | OD2 resolved — independence is satisfied by Line separation |
| `blocked` (field value) | `not_applicable` | Within-Line transitions are `not_applicable`, not `blocked` |
| Same-agent-instance block | Line-boundary enforcement | Independence comes from Line membership, not agent-instance distinctness |
| D5 team-size exception | (Closed) | Line separation replaces headcount as independence criterion |
| `human_or_agent_pending_OD1` (executor type) | Determined by Line assignment | OD1 resolved — Line 2 = human, Line 1 = agent |

### Retained (describe real dynamics without duplicating GRC vocabulary)

- **Origination** — the Line 1 function of finding and logging articles
- **Accountability** — the Line 2 function of compliance/governance review
- **Novelty** — topic flag that can trigger Line 3 audit
- **Stakes** — risk level that influences whether Line 3 triggers
- **Tacit judgment gap** — describes real dynamics of editorial judgment without duplicating GRC vocabulary

### Adopted from GRC standard

- **Three Lines Model** (IIA, July 2020, updated September 2024) — the structural framework for independence
- **Line 1 / Line 2 / Line 3** — the three Lines and their functions
- **Risk-based audit** — Line 3's triggered assurance function
- **Line separation** — the independence criterion (replaces "distinct agent instances")

---

## Changelog

### v1.3 -- Three Lines Model Alignment (2026-08-16)

Applied the Three Lines Model (IIA, updated 2020) resolution from Business Case v2.1 and Addendum v1.4. OD1–OD3 are resolved via Line separation. Four-eyes enforcement rewritten from actor_id check to Line-boundary check. D5 team-size exception closed. Line 3 (Independent Assurance) added. Invented lexicon retired in favor of GRC standard vocabulary.

| Area | Change | Source |
|------|-------|--------|
| Document header | Updated to v1.3; updated precedence hierarchy (Charter > Addendum v1.4 > Blueprint v1.3 > Business Case v2.1); added Three Lines Model note | Business Case v2.1; Addendum v1.4 |
| §1 Meaning Invariance Lock | Updated Team Size variable to reflect Three Lines distribution | OD3 resolution |
| §2 Operating Model | Rewritten from "Charter-Directed" to "Three Lines Model"; OD1–OD3 moved from Open to Resolved; added A1–A7 Assumed defaults; added §2.4 Ratification Log; added Line 1/2/3 operating model with Line 3 | Business Case v2.1; Addendum v1.4 §0, §2 |
| §4.4 Transition matrix | Added Line column and Executor Type column; updated four-eyes status to `satisfied`/`not_applicable`/`override_not_four_eyes`; T11 executor changed to Chief Editor (Line 2) | Addendum v1.4 §3.1 |
| §4.7 Four-eyes enforcement | Rewritten from `actor_id != previous_transition.actor_id` check to Line-boundary check; retired actor_id-based enforcement | Three Lines Model; Addendum v1.4 §6.3 |
| §4.8 Permission matrix | Rewritten with Line assignments; added Chief Editor column; added Trigger Line 3 Audit action; added HumanOverride note | Addendum v1.4 §6.2 |
| §4.9 Permission edge cases | Closed D5 team-size exception; added Line 2 cannot execute Line 1 gate rule; added agent failure handling; added Chief Editor veto | Addendum v1.4 §3.4 |
| §4.10 Absence handling | Rewritten for Line model: Line 1 agent failure, Chief Editor unavailability, Line 3 audit in progress | Addendum v1.4 §6.4 |
| §4.11 Approval rules | Updated four-eyes rule to Line boundaries; removed OD2 conditional language | Three Lines Model |
| §5.1 Data model | Added `line_assignment` to USER, REVIEW, AUDIT_LOG; added `assisting_agent_id` to REVIEW and AUDIT_LOG; added `judgment_independence_status` to AUDIT_LOG; added `HumanOverride` and `Line3Audit` to AUDIT_LOG event types | Addendum v1.4 §4.1 |
| §6 MVP Roadmap | Updated success criteria: independence now unconditional | OD2 resolution |
| §8 Success Metrics | Updated Week 1 and Month 3 success criteria: independence unconditional via Line separation | OD2 resolution |
| §10 Risk Register | Replaced "Four-eyes slows small team" with "Four-eyes fails at Line boundaries"; removed D5 reference | Three Lines Model |
| §13.1 Enumerations | Added `line_assignments`, `executor_types`, `judgment_independence_status` enums; added `HumanOverride`, `Line3Audit` audit event types; retired `contingent_on_OD2`, `blocked` | Addendum v1.4 §4.1 |
| §14 Acceptance Tests | Updated AT-001–006 for Line logging; added AT-006 (Chief Editor manual log); added AT-012a (same agent T4); added AT-016/017/018 (Line boundary tests); updated AT-040/042/043 (audit trail with Line fields); added AT-053 (Line filtering); updated AT-060–062 (Line-based access); updated AT-070–075 (Three Lines alignment) | Addendum v1.4 §8 |
| §15 Governance Items | Updated G3 to executed; added G8 (Line 3 triggers), G9 (Line verification), G10 (Three Lines ratification) | Addendum v1.4 §9 |
| New §16 | Added Line 3 Trigger Rules | Addendum v1.4 §13 |
| New §17 | Added Three Lines Model Mapping with pipeline flow diagram and methodology note | Business Case v2.1; Addendum v1.4 §12 |
| New §18 | Added Lexicon Audit (retired, retained, adopted terms) | Business Case v2.1; Addendum v1.4 §14 |
| D5 | Closed entirely — superseded by Line separation | Three Lines Model |

### v1.2 -- Charter Alignment (2026-08-16)

Applied the Project Charter (v1, baseline) operating model to the blueprint. The blueprint now reflects the agent-directed model (one human Chief Editor + virtual agents) instead of the prior 5-7 person human editorial team assumption.

| Area | Change | Source |
|------|-------|--------|
| Document header | Updated to v1.2; added Charter precedence and relationship notes | Charter header |
| §1 Meaning Invariance Lock | Updated Team Size variable to reflect agent-directed model | Charter operating model |
| New §2 | Added V1 Operating Model section: agent-directed model, charter decision register (A1 Assumed, OD1-OD3 Open, OD4 Resolved), agent-directed role model | Charter (all sections) |
| §4 Workflow Model | Updated four-eyes enforcement to flag OD2 conditional; updated permission edge cases for agent model; updated absence handling with agent-model revalidation note; updated logging-role note for agents; updated approval rules cross-references | Charter OD1-OD3 |
| §5 Data Model | Added agent fields to USER (actor_type, agent_id, agent_role, agent_run_id, supervising_human_id); added agent fields to REVIEW and AUDIT_LOG; updated assigned_to description | Charter operating model |
| §6 MVP Roadmap | Updated Week 1 success criteria to reflect agent model and OD2 conditional | Charter success criteria |
| §8 Success Metrics | Updated Week 1, Month 3 success criteria for agent model and OD2 conditional | Charter success criteria |
| §10 Risk Register | Updated adoption risk for agent model; four-eyes exception marked provisional pending OD3 | Charter OD3 |
| §14 Acceptance Tests | Updated AT-001 through AT-005 for agent-executed logging; updated AT-042 for agent/human distinction; updated AT-060 through AT-062 for agent/user access; added new §14.8 Charter Alignment tests (AT-070 through AT-075) | Charter operating model |
| All sections | Renumbered from v1.1 section structure to accommodate new §2 | — |

### v1.1 -- Build Readiness Alignment (2026-08-15)

Applied 28 gap fixes from the V1 Build Readiness Addendum (v1.2) and Business Case (v1.3). The blueprint is now consistent with the Addendum's build specifications.

| Area | Change | Source |
|------|-------|--------|
| Document header | Added version metadata, precedence hierarchy, Addendum relationship note | Addendum G3, Business Case header |
| §2 V1 Scope | Corrected Week 1 publishing: WordPress auto + LinkedIn manual-ready (not OAuth-based); moved bookmarklet to Week 2-3; added missing out-of-scope items | Addendum §1, D6, D7, D8 |
| §3 Workflow Model | Added state-transition matrix (T1-T11), publication state rules, return rules, four-eyes enforcement, permission matrix, permission edge cases, absence handling | Addendum §3.1-3.4, §6.1-6.3 |
| §4 Data Model | Extended PUBLICATION.status enum (added Scheduled, Cancelled, ManualReady, MockPublished); extended audit_event_types (added EmergencyBypass); updated PUBLICATION_TARGET (added status_note, mock_mode); added transition-required fields to ARTICLE; added MockPublished rule; fixed ARTICLE.current_state enum | Addendum §4.1, §4.4, §3.1 |
| §5 Roadmap | Corrected Week 1 deliverables and success criteria; updated trend scoring reference | Addendum §1, §5 |
| §6 Platform Options | Added recommended stack (Custom, Addendum D1); added open decisions table (D1-D8); added mock publish mode | Addendum §2 |
| §7 Success Metrics | Corrected Week 1 success criteria (LinkedIn -> WordPress/manual-ready) | Addendum §1 |
| §9 Risk Register | Aligned four-eyes exception wording to "fewer than 5 active role holders" | Addendum D5 |
| New §10 | Added scoring formulas (Trend Score v0, Editorial Priority v0, display_priority, versioning) | Addendum §5 |
| New §11 | Added publishing fallback plan (status state machine, failure handling, partial failure, target priority) | Addendum §7 |
| New §12 | Added seed data (enumerations, full topic/source/publication-target JSON blocks) | Addendum §4.2-4.4 |
| New §13 | Added 27 acceptance tests (AT-001 through AT-062) in Given/When/Then format | Addendum §8 |
| New §14 | Added governance items (G1-G7) with target phases | Addendum §9 |

### v1.0 -- Initial (2026-08-15)

Initial blueprint created using the Meaning-First Content System methodology.

---

*This blueprint is the invariant core. All future summaries, presentations, and implementations must preserve the meaning locked in Section 1. Any proposed change to the invariants requires explicit re-locking and version increment. Build decisions are governed by the V1 Build Readiness Addendum, which takes precedence over this blueprint for V1 build scope.*
