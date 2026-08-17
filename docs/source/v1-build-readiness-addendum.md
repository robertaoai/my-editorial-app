# V1 Build Readiness Addendum
## AI-Driven Trending Article Tracker

> **Document type:** Build Readiness Addendum to the Product Blueprint (v1.3), aligned to Project Charter v1 and Business Case v2.2
> **Document version:** v1.5 — Charter reconciliation (amends v1.4; see §16)
> **Amendment note (v1.5, 2026-08-16):** surgical amendments only, no rewrite. Three changes, all restoring accuracy about this document's own status relative to the Charter: (1) §1 — the independence success criterion no longer claims to be unconditional, because the Charter marks it pending OD2; (2) §2.2 and §2.4 — OD3 reverted from Resolved to Open, framework accepted and count deferred, matching Business Case v2.2 and the Charter's "withheld pending OD3"; (3) §2.2 — new row OD3-a records this document's same-agent-across-Line-1-gates reading as a dated provisional deviation from Charter text, permitted for Phase 0 only. **No open decision is closed by this amendment. The Charter is unchanged.** Deviations tracked in `docs/governance/provisional-deviation-register.md`.
> **Superseded version header (v1.4):** Build Readiness Addendum to the Product Blueprint (v1.2), aligned to Project Charter v1 and Business Case v2.1 — Three Lines Model alignment
> **Date:** 2026-08-16
> **Charter version:** v1, baseline (variant charter, agent-directed operating model)
> **Business Case version:** v2.1 — Three Lines Model resolution
> **Blueprint version:** v1.2 — Charter alignment (sync gap: still treats OD1–OD3 as Open; see §15)
> **Purpose:** Resolve build blockers, define machine-readable specifications, and establish acceptance criteria before prototyping begins. This version incorporates the Three Lines Model resolution of OD1–OD3 from Business Case v2.1.
> **Relationship to blueprint:** This addendum supersedes conflicting statements in the blueprint. Where this document and the blueprint disagree, this document governs for V1 build decisions. The blueprint remains the invariant core for product meaning and long-term vision.
> **Relationship to charter:** This addendum implements the charter's decision framework. Business Case v2.1 introduces a Three Lines Model resolution for OD1–OD3; Addendum v1.4 incorporates that resolution as the current build specification. Resolution is not ratification — OD1–OD3 remain unratified until the Chief Editor signs off in a discrete, dated event per the Ratification Log (§2.4).
> **Precedence hierarchy:** Charter > Addendum > Blueprint > Business Case. Where any downstream document conflicts with this addendum, this addendum governs for build specifications.
> **Three Lines Model verification:** The Three Lines Model is published by The Institute of Internal Auditors (IIA), released July 2020 as an update to the Three Lines of Defense model, and updated September 2024 to reflect the new Global Internal Audit Standards glossary ([IIA Position Paper](https://www.theiia.org/en/content/position-papers/2020/the-iias-three-lines-model-an-update-of-the-three-lines-of-defense/)). The role-to-Line mapping in this document is an inference from this project's analysis, not from the organization's actual GRC documentation (no prior GRC function exists for this project).
> **Confidence and provenance note:** This document is a self-authored specification, not an independently audited artifact. Claims marked "Confirmed" are verified against the blueprint source text. Claims marked "Assumed" are conservative defaults applied so the document has something to build against — they stand unless overridden. Claims marked "Resolved" have a structural resolution (via Three Lines Model) but remain unratified. A self-audit that grades its own fixes is not a substitute for independent verification. Citations increase checkability, not correctness.

---

## 0. Three Lines Model Sync Delta

This section documents what changed from v1.3 (charter-aligned, OD1–OD3 open) to v1.4 (Three Lines Model aligned, OD1–OD3 resolved).

### What Changed

| Area | v1.3 (charter-aligned) | v1.4 (Three Lines Model aligned) |
|------|------------------------|----------------------------------|
| OD1–OD3 status | Open, blocking | **Resolved via Three Lines Model** — unratified but structurally settled |
| OD1 (Chief Editor = Chief Journalist?) | Open — T6 executor ambiguous | **Resolved.** Chief Editor sits in Line 2 (Risk & Compliance). Chief Journalist sits in Line 1 (Operations). The human does not float — Three Lines Model forbids merging Line 1 and Line 2 roles. |
| OD2 (Agent judgment independence?) | Open — four-eyes conditional on OD2 | **Resolved — affirmative.** Four-eyes is satisfied by Line separation itself. Agents in different Lines provide distinct judgment by structural design. Within the same Line, four-eyes is not required. |
| OD3 (Agent headcount/distribution) | Open — permission matrix ambiguous | **Resolved.** Four agent-holdable roles map to Three Lines: Line 1 (Reporter, Investigator, Journalist, Chief Journalist — combinable), Line 2 (Senior Journalist, human-primary), Line 3 (Independent Assurance, triggered conditionally). |
| Four-eyes enforcement | OD2-conditional with prototype/compliance mode | **Unconditional at Line boundaries.** Four-eyes applies at Line 1 → Line 2 and Line 2 → Line 1 transitions. Within the same Line, four-eyes is not required. `contingent_on_OD2` field value retired. |
| T3 exemption (same investigator) | Special-case exception | **Standard rule.** Four-eyes applies at Line boundaries, not within Lines. T3 is within Line 1 — no exemption needed. |
| `judgment_independence_status` values | `satisfied`, `contingent_on_OD2`, `blocked`, `override_not_four_eyes` | `satisfied` (Line boundary crossing), `not_applicable` (within same Line), `override_not_four_eyes` (explicit override). `contingent_on_OD2` and `blocked` retired. |
| Audit log | No Line tracking | **Added `line_assignment` field** (Line 1 / Line 2 / Line 3) to track Line membership per executor |
| Team-size exception (D5) | Superseded but not closed | **Closed entirely.** Line separation replaces headcount as independence criterion. |
| HumanOverride | Conditional on OD1 resolving to "floats" | **Simplified.** OD1 resolves to "no float." Override applies only to explicit override policies — if the Chief Editor executes a Line 1 gate. |
| Line 3 (Independent Assurance) | Not present | **Added.** Risk-based audit, triggered conditionally by risk signal or novel/controversial topic. Not a standing role. |
| Success criteria | "Zero independence bypass" conditional on OD2 | "Zero independence bypass" **unconditional** — satisfied by Line separation |
| Lexicon | Invented terms (prototype mode, compliance mode) | **Retired** in favor of GRC standard vocabulary (Line separation, risk-based audit) |

### What Remains Unchanged

- Meaning Invariance Lock (blueprint invariants)
- Data model entities (Article, Source, TrendSignal, Topic, User, Review, PublicationTarget, Publication, AuditLog)
- Topic taxonomy and genealogy
- Trend score v0 and editorial priority score v0 formulas
- Publication state rules (ManualReady, MockPublished, etc.)
- Publication fallback plan and failure handling
- Seed data (topics, sources, publication targets)
- EMS audit structural principles (ratification log, citation rigor, contradiction disclosure)
- Emergency bypass mechanics (EmergencyBypass enum vs emergency_bypass reason string)

### Sync Gaps Between Documents

| Document | Status | Gap |
|----------|--------|-----|
| Business Case v2.1 | Current — Three Lines Model resolution | Source of the resolution adopted in this addendum |
| Addendum v1.4 (this document) | Current — aligned to Business Case v2.1 | Incorporates Three Lines Model resolution |
| Blueprint v1.2 | **Stale** — still treats OD1–OD3 as Open | Needs update to reflect Three Lines Model resolution; see §15 |
| Charter v1 | Baseline — OD1–OD3 as Open | Charter is the baseline; the resolution is an evolution, not a contradiction. The charter's Open decisions are resolved by subsequent analysis, which is the charter's intended process. |

---

## 1. Corrected Week 1 Scope

### The One End-to-End Path (Must Work in Week 1)

```
Article is logged by Reporter agent (Line 1)
  → Article enters approval workflow with topic tags
    → Investigator agent (Line 1) validates source and relevance
      → Investigator agent (Line 1) investigates (same agent allowed — within Line 1)
        → Journalist agent (Line 1) drafts the editorial adaptation
          → Senior Journalist / Chief Editor (Line 2) reviews editorial quality
            → Chief Journalist agent (Line 1) approves for publication
              → Approved article is published or scheduled to WordPress/blog
                (LinkedIn marked ready for manual publish if OAuth pending)
```

> **Line boundaries (four-eyes):** Four-eyes is enforced at Line boundary crossings: T5 (Line 1 → Line 2) and T6 (Line 2 → Line 1). Within Line 1, the same agent may execute adjacent operational gates — this is the standard rule, not an exception.
>
> **Line 3 (conditional):** If the Line 2 risk signal crosses a threshold or the topic is flagged novel/controversial, Line 3 (Independent Assurance) triggers a risk-based audit before publication. See §13.

### Corrected Week 1 Success Criteria

- 5+ articles logged and moving through the pipeline
- 2+ articles published to WordPress, or marked ready for manual LinkedIn publish
- Chief Editor can see and filter the board by state, topic, category, and Line assignment
- Every transition logged with executor identity (human/agent/system), Line assignment, timestamp, and reason
- Zero articles bypass a review **sequence** (gate-skipping prevention: unconditional)
- Zero articles bypass review **independence** (four-eyes at Line boundaries, enforced unconditionally in code — but reported as **provisionally satisfied, pending OD2**, per Charter. The Charter states this criterion as "independence of judgment, OD2, still open" and does not list it as unconditional. Corrected in v1.5; see Provisional Deviation Register D1.)

---

## 2. Decision Framework (Charter-Aligned, Three Lines Model Resolved)

### 2.1 Assumed (Conservative Defaults, Override If You Disagree)

| # | Item | Default Applied | Why This Default |
|---|------|----------------|------------------|
| A1 | Architecture for v1 | Five-gate linear pipeline (T1–T8a, §3.1), not Proposer/Critics/Judge | Ships the already-specified model rather than an unproven redesign. |
| A2 | Provisioned stack | React/Next.js frontend on Vercel (handling SSR and UI logic), Supabase PostgreSQL backend, Supabase Edge Functions for middleware. | Matches the actually provisioned scaffolding. |
| A3 | Publication target for Week 1 | WordPress auto-publish + LinkedIn manual fallback | WordPress REST API is straightforward; LinkedIn depends on OAuth review. |
| A4 | Trend scoring formula | Simple weighted sum (§5) | Starting assumption, not validated. Review after 50+ scored articles. |
| A5 | Notification mechanism | In-app only for Week 1 | Email and Slack in Week 4–6. |
| A6 | Data retention | Auto-archive rejected/archived after 90 days; published articles kept indefinitely | Conservative default. |
| A7 | Bookmarklet | Copy-paste URL form only for Week 1 | Bookmarklet in Week 2–3. |

### 2.2 Resolved via Three Lines Model

Business Case v2.1 introduces a Three Lines Model resolution for OD1–OD3. The Three Lines Model is published by The IIA (July 2020, updated September 2024). The role-to-Line mapping below is an inference from this project's analysis, not from the organization's actual GRC documentation.

| # | Decision | Resolution | Basis |
|---|----------|-----------|-------|
| OD1 | Does Chief Editor = Chief Journalist, or does the human float across gates? | **Chief Editor sits in Line 2 (Risk & Compliance). Chief Journalist sits in Line 1 (Operations). The human does not float.** Three Lines Model forbids merging Line 1 and Line 2 roles — self-review across Lines is a known compliance-standard violation. | Three Lines Model structural separation requirement |
| OD2 | Does a distinct agent provide distinct judgment sufficient to satisfy four-eyes? | **Yes — four-eyes is satisfied by Line separation itself.** Agents in different Lines provide distinct judgment by structural design. Within the same Line, distinct agent instances do not automatically satisfy four-eyes — independence comes from Line membership, not from agent-instance distinctness. | Three Lines Model — Line separation as independence criterion |
| OD3 | What does the agent headcount figure count, and how does it distribute across the 4 agent-holdable roles? | **Partially resolved — framework accepted, exact count deferred.** Four agent-holdable roles map to Three Lines. Line 1: Reporter (Origination), Investigator (Verification), Journalist (Standards fit), Chief Journalist (operational approval). Line 2: Senior Journalist (Accountability, human-primary). Line 3: Independent Assurance (triggered, not standing). **Naming a framework is not naming a number.** The exact headcount and per-role distribution are not specified in any source document; the Charter states the figure is "withheld pending OD3." OD3 remains **Open**. *Corrected in v1.5 — v1.4 recorded this as fully Resolved, matching Business Case v2.1; Business Case v2.2 reverted it and this document now follows. See Provisional Deviation Register D3.* | Three Lines Model — standard role allocation, count deferred |
| OD3-a | May one agent execute several Line 1 gates? | **Provisional for Phase 0 only.** This document's "combinable into fewer agents" reading departs from Charter text, which states review gates are "each executed by a distinct agent or the Chief Editor." Charter governs on operating model. The deviation is permitted for scaffolding because requiring distinct agents per gate before OD3 supplies a headcount would deadlock the build on evidence only the build can produce. Logged, dated, and reversible — see Provisional Deviation Register D2. **Not a resolution of OD3.** | Charter workflow description vs Addendum §3.4/§6.3 |

> **Resolution is not ratification.** These decisions are structurally resolved but remain unratified. The Chief Editor must sign off in a discrete, dated event for each to move from "resolved" to "ratified" per the Ratification Log (§2.4). A structural resolution does not become a ratified decision by being labeled one.

### 2.3 Resolved (Charter)

| # | Decision | Resolution | Trigger to Revisit |
|---|----------|-----------|-------------------|
| OD4 | Adopt Proposer → Critics → Judge, replacing the linear pipeline | Rejected for v1 (consistent with A1). Deferred to v2, conditional. | **Two branches:** (1) If Line separation satisfies four-eyes and the pipeline ships — revisit only if logged data shows Line separation failing to catch errors it should catch. (2) If Line separation fails to hold in production (e.g., agents in different Lines produce identical judgments due to shared training data), this is a **pre-launch blocker** — re-evaluate before shipping. If neither branch fires, OD4 stays backlogged. **Note:** If Proposer/Critics/Judge is ever adopted in v2, map it directly onto Three Lines (Proposer = Line 1, Critics = Line 2, Judge = Line 3) rather than treating it as a separate novel architecture. |

### 2.4 Ratification Log

| # | Item | Category | Resolved? | Ratified? | Ratified Date | Approval Artifact | Build Implication |
|---|------|----------|-----------|-----------|-------------|-------------------|-------------------|
| A1 | Five-gate linear pipeline | Assumed | N/A | No | — | — | Prototype may proceed as provisional assumption |
| A2 | Prototype stack | Assumed | **Yes** - Chief Editor: Re-scoped A2 to the provisioned Vercel/Supabase stack to close deviation D4. | No | — | — | Prototype may proceed as provisional assumption |
| A3 | WordPress auto + LinkedIn manual | Assumed | N/A | No | — | — | Prototype may proceed as provisional assumption |
| A4 | Simple weighted sum scoring | Assumed | N/A | No | — | — | Prototype may proceed; review after 50+ articles |
| A5 | In-app notifications only | Assumed | N/A | No | — | — | Prototype may proceed with in-app only |
| A6 | 90-day auto-archive | Assumed | N/A | No | — | — | Prototype may proceed as provisional assumption |
| A7 | Copy-paste URL form only | Assumed | N/A | No | — | — | Prototype may proceed with copy-paste form |
| OD1 | Chief Editor = Chief Journalist? | Resolved (Three Lines Model) | **Yes** — Chief Editor = Line 2, Chief Journalist = Line 1, no float | **No — Provisional-for-PoC (Entry 007, 2026-08-16)** | — | `docs/journal/2026-08-16-entry007-decision-sheet.md` | T6 executor is Line 1 Chief Journalist (agent). T5 executor is Line 2 Senior Journalist (human-primary). Open at Charter level. |
| OD2 | Agent judgment independence? | Resolved (Three Lines Model) | **Yes** — satisfied by Line separation | **No — Provisional-for-PoC (Entry 007, 2026-08-16)** | — | `docs/journal/2026-08-16-entry007-decision-sheet.md` | Four-eyes enforced at Line boundaries in code; reported as provisionally satisfied, pending OD2, per Charter. Open at Charter level. **If OD2 resolves negatively, Charter OD4 branch ② applies: pre-launch blocker.** |
| OD3 | Agent headcount and distribution | **Open** — framework accepted, exact count deferred | **No** — framework maps to Three Lines; exact count unspecified in every source document, and the Charter withholds the figure pending OD3 | No | — | — | Permission matrix and four-eyes logic use Line assignment, not agent-instance count. `LINE1_AGENT_ROSTER` and `AGENT_HEADCOUNT` stay UNSET — no number invented, none back-derived. *Corrected in v1.5; see Register D3.* |
| OD4 | Proposer/Critics/Judge model | Resolved (Charter) | N/A (rejected for v1) | N/A | — | — | Backlogged to v2 with two-branch reopening condition |

> **Ratification process:** The Chief Editor reviews each decision, confirms or modifies the default, and records sign-off by entering date and approval artifact reference. The `Ratified?` field changes from "No" to "Yes" only at this point. Ratification is a discrete event, not a gradual consensus.

### 2.5 Stack Clarification

The ratified stack (A2) is: A React/Next.js frontend hosted on Vercel (utilizing server-side rendering and route handlers for UI support), and a Supabase-hosted backend providing the PostgreSQL database and Edge Functions for complex middleware logic. Supabase Auth handles authentication. A **mock publish mode** is available for testing without external dependencies.

---

## 3. State-Transition Matrix

### 3.1 Transition Rules

| # | From State | To State | Allowed Role | Line | Executor Type | Required Fields | Audit Event | Notification | Four-Eyes Status |
|---|-----------|---------|-------------|------|--------------|-----------------|------------|-------------|------------------|
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
>
> **Sequencing note (sync gap):** Business Case v2.1 contains language implying a different sequencing ("Line 1 gates including Chief Journalist → Line 2 accountability → publish"). Addendum v1.4 preserves the prior T1–T6 transition order (Line 1 → Line 2 → Line 1) unless ratified otherwise. This is flagged as a sync gap in §15.

### 3.2 Publication State Rules

`ManualReady` is a `PUBLICATION.status` value (per-target), not an `ARTICLE.current_state`.

| Condition | `ARTICLE.current_state` | `PUBLICATION.status` (per target) |
|-----------|-------------------------|-----------------------------------|
| Article approved, no publication job started yet | Approved | (no records yet) |
| Publication job running | Approved | Pending |
| At least one target Published with live URL | **Published** | Published (succeeded); others may be Pending/Failed/ManualReady |
| All targets only ManualReady (none Published yet) | **Approved** (stays) | ManualReady |
| One target Published, another ManualReady | **Published** (with manual follow-up open) | Published + ManualReady |
| All targets Published | **Published** | Published (all) |

### 3.3 Return Rules

| Rule | Definition |
|------|-----------|
| Return target | Articles enter `Needs Revision` as a side state with `revision_target_state` specifying which workflow state to return to. The role holder for that target state is notified. Article re-enters the workflow via T8a. |
| Return count limit | After 3 returns to the same state, the article auto-escalates to the Chief Editor for a reject-or-keep decision. |
| Revision reason visibility | The revision reason is visible to the Chief Editor and all agents on the article board. It becomes part of the permanent audit trail and cannot be deleted. |

### 3.4 Permission Edge Cases

| Scenario | Rule |
|----------|------|
| Four-eyes at Line boundaries | Enforced unconditionally at T5 (Line 1 → Line 2) and T6 (Line 2 → Line 1). The executor at T5 must be in Line 2; the executor at T6 must be in Line 1. Independence comes from Line separation, not from agent-instance distinctness. |
| Within-Line 1 transitions | Four-eyes is `not_applicable` for T1→T2, T2→T3, T3→T4 — all are within Line 1. The same agent may execute multiple Line 1 gates. This is the standard rule under the Three Lines Model, not an exception. |
| Chief Editor executing a Line 1 gate | The Chief Editor sits in Line 2. If the Chief Editor executes a Line 1 gate (e.g., stepping in when no Line 1 agent is available), the audit log records `event_type = HumanOverride` with `judgment_independence_status = override_not_four_eyes`. The transition is allowed; four-eyes is not satisfied. The system never silently treats an override as compliant. |
| Emergency publish | Chief Editor can bypass the four-eyes check (Line-separation enforcement) only by setting `emergency_publish = true` with mandatory reason. This bypass does **not** skip phase gates, required fields, audit logging, or publication confirmation, and does **not** grant role permissions. Audit log records `event_type = EmergencyBypass` (§4.1 enum, PascalCase) with reason string containing `emergency_bypass` (lowercase, descriptive label, not enum value). These are distinct fields. |
| Line 2 executor also in Line 1 | **Forbidden.** The Three Lines Model requires structural separation — the same person/agent cannot hold both Line 1 and Line 2 roles. The Chief Editor (Line 2) cannot also be the Chief Journalist (Line 1). This is a hard requirement of the standard. |
| Agent failure or unavailability | If a Line 1 agent fails, the article stalls and the Chief Editor is notified. The Chief Editor may execute the stalled Line 1 gate via explicit override (logged as HumanOverride, `override_not_four_eyes`). Alternatively, if OD3 permits multiple agent instances, the article can be reassigned to another Line 1 agent. |
| Chief Editor rejection after all gates | **Normal T9 rejection:** Chief Journalist (Line 1) rejects at T6 (Reviewed → Approved). **Chief Editor veto:** Chief Editor (Line 2) may veto an approval by returning the article via T8 with Line 2 finding as reason — this is a Line 2 override, logged with `event_type = HumanOverride`. Rejection routes to Needs Revision; article returns to Journalist for re-drafting. Prior approvals are noted as superseded. |

---

## 4. Minimal Schema with Seed Data

### 4.1 Enumerations (Seed Values)

```json
{
  "article_states": [
    "Discovered", "Logged", "Validated", "Investigated",
    "Drafted", "Reviewed", "Approved", "Published",
    "Needs Revision", "Rejected"
  ],
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

> **Changes from v1.3:** Added `line_assignments` enum. Added `Line3Audit` audit event type. Updated `judgment_independence_status` — retired `contingent_on_OD2` and `blocked`; added `not_applicable`. Removed `human_or_agent_pending_OD1` from `executor_types` (OD1 resolved — executor type is determined by Line assignment). `HumanOverride` event type preserved from v1.3.
>
> **Schema field requirements:** The following fields must be added to the data model entities to support the Three Lines Model:
>
> - **USER entity:** Add `line_assignment` (enum: Line1, Line2, Line3) — the Line this user/agent belongs to. Line 2 is the Chief Editor (human). Line 1 is all agent roles. Line 3 is the triggered assurance function.
> - **REVIEW entity:** Add `line_assignment` (enum) — the Line of the reviewer. Add `assisting_agent_id` (string, nullable) — if Line 2 review is agent-assisted, the assisting agent's identifier. The human Chief Editor remains the executor/signing actor; the assisting agent is metadata, not the Line 2 executor.
> - **AUDIT_LOG entity:** Add `line_assignment` (enum) — the Line of the executor for this event. Add `assisting_agent_id` (string, nullable) — if applicable. The `actor_id` and `actor_type` fields remain, but the four-eyes enforcement is based on `line_assignment`, not on `actor_id` comparison.
>
> **Line 2 "agent-assisted" semantics:** When Line 2 review (T5) is performed with agent assistance, the Chief Editor (human) is the signing executor. The assisting agent provides analysis, draft findings, or recommendations, but the accountability decision rests with the human. The audit log records `executor_type = human`, `line_assignment = Line2`, and `assisting_agent_id` as metadata.

### 4.2 Topic Seed Data

```json
[
  {"name": "SAFe Agilist v6", "category": "Professional", "scope_boundary": "Scaled Agile Framework v6 certification, practices, updates", "trend_signal_source": "LinkedIn posts, Scaled Agile community", "evolves_from": null, "evolution_notes": null},
  {"name": "Scrum Alliance CSM I / Scrum.org PSM I", "category": "Professional", "scope_boundary": "Entry-level Scrum master certification content", "trend_signal_source": "Scrum Alliance blog, Scrum.org forums, LinkedIn", "evolves_from": null, "evolution_notes": null},
  {"name": "PeopleCert DevOps Leader", "category": "Professional", "scope_boundary": "DevOps leadership certification, practices", "trend_signal_source": "PeopleCert announcements, DevOps Institute", "evolves_from": null, "evolution_notes": null},
  {"name": "PeopleCert ITIL 4", "category": "Professional", "scope_boundary": "ITIL 4 certification, service management practices", "trend_signal_source": "PeopleCert, Axelos, ITIL community blogs", "evolves_from": null, "evolution_notes": null},
  {"name": "Generative AI", "category": "AI", "scope_boundary": "LLMs, image/video generation, multimodal models", "trend_signal_source": "arXiv, Hugging Face, AI company blogs", "evolves_from": null, "evolution_notes": "Root AI topic — general-purpose model capabilities"},
  {"name": "Agentic AI", "category": "AI", "scope_boundary": "AI agent systems, multi-agent orchestration, autonomous task execution", "trend_signal_source": "Research papers, LangChain/LangGraph, AI startup blogs", "evolves_from": "Generative AI", "evolution_notes": "Shift from generation to autonomous task execution using generative models as the reasoning engine"},
  {"name": "AI Harness", "category": "AI", "scope_boundary": "Frameworks for controlling and directing AI models", "trend_signal_source": "Vendor docs, engineering blogs", "evolves_from": "Agentic AI", "evolution_notes": "Control layer emerged as agents needed managed execution environments"},
  {"name": "AI Guardrails", "category": "AI", "scope_boundary": "Safety mechanisms, policy enforcement, output filtering", "trend_signal_source": "AI safety research, vendor announcements", "evolves_from": "Agentic AI", "evolution_notes": "Safety layer emerged alongside harness as agents needed constrained behavior"},
  {"name": "AI Digital Twin", "category": "AI", "scope_boundary": "Virtual replicas of physical/logical systems using AI", "trend_signal_source": "Industrial AI publications, IoT + AI blogs", "evolves_from": "Generative AI", "evolution_notes": "Applied generative models to create simulated replicas of physical systems"},
  {"name": "Context Engineering", "category": "AI", "scope_boundary": "Design and management of context windows, RAG, memory systems", "trend_signal_source": "AI engineering blogs, research papers", "evolves_from": "Agentic AI", "evolution_notes": "Managing agent cognition required structured context management beyond prompt engineering"},
  {"name": "Loop Engineering", "category": "AI", "scope_boundary": "Iterative AI improvement loops, feedback-driven refinement", "trend_signal_source": "Research papers, MLOps communities", "evolves_from": "Context Engineering", "evolution_notes": "Iterative refinement emerged from context management — feedback loops to improve agent outputs"},
  {"name": "Long-Running Workflows", "category": "AI", "scope_boundary": "Extended AI task execution, human-in-the-loop checkpoints, async pipelines", "trend_signal_source": "Workflow orchestration tools, AI engineering blogs", "evolves_from": "Loop Engineering", "evolution_notes": "Sustained execution beyond single-turn interactions, with human checkpoints for peer review of artifacts"}
]
```

### 4.3 Source Seed Data

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
  {"name": "OpenAI Blog", "platform": "Blog", "url": "https://openai.com/blog", "reliability_tier": "Tier1-Official", "ingestion_method": "RSS", "topic_coverage": ["Generative AI", "Agentic AI", "AI Guardrails"]},
  {"name": "Anthropic News", "platform": "Blog", "url": "https://anthropic.com/news", "reliability_tier": "Tier1-Official", "ingestion_method": "RSS", "topic_coverage": ["Generative AI", "Agentic AI", "AI Guardrails"]},
  {"name": "Google DeepMind Blog", "platform": "Blog", "url": "https://deepmind.google/discover/blog", "reliability_tier": "Tier1-Official", "ingestion_method": "RSS", "topic_coverage": ["Generative AI", "Agentic AI"]},
  {"name": "LinkedIn Trending Posts", "platform": "LinkedIn", "url": "https://linkedin.com", "reliability_tier": "Tier3-Social", "ingestion_method": "Manual", "topic_coverage": ["all professional + AI topics"]}
]
```

### 4.4 Publication Target Seed Data

> **Schema extension:** The blueprint's `PUBLICATION_TARGET` entity defines `name`, `api_config`, and `active`. This addendum extends with `status_note` (string, nullable) and `mock_mode` (string, nullable). Seed rows omit `active` for brevity — importers should default `active = true`.
>
> **MockPublished and article state:** `MockPublished` is a test-only `PUBLICATION.status` value. It does **not** satisfy the "at least one Published target with live URL" rule.

```json
[
  {"name": "WordPress Blog", "api_config": {"endpoint": "{base_url}/wp-json/wp/v2/posts", "auth_method": "application_password", "formatting_rules": "HTML body, title as post_title, tags as WP categories"}, "mock_mode": "When WordPress credentials are not configured, publication job writes formatted post to local file and marks target as MockPublished for testing"},
  {"name": "LinkedIn (personal profile)", "api_config": {"endpoint": "https://api.linkedin.com/v2/ugcPosts", "auth_method": "oauth2", "formatting_rules": "Plain text with hashtags, max 3000 chars, no HTML"}, "status_note": "Requires OAuth review — verify current endpoint and scope at https://learn.microsoft.com/en-us/linkedin/ — use manual fallback until approved", "mock_mode": "When OAuth not approved, formatted post content is generated and stored for manual use"},
  {"name": "Facebook Page", "api_config": {"endpoint": "https://graph.facebook.com/v18.0/{page_id}/feed", "auth_method": "page_access_token", "formatting_rules": "Plain text, max 63206 chars"}, "status_note": "Requires Meta Business verification — verify current API version at https://developers.facebook.com/ — manual cross-posting in V1"}
]
```

---

## 5. Trend Score v0 and Editorial Priority Score v0

### 5.1 Trend Score v0 (How Viral Is This?)

Separate from editorial fit. Measures how much momentum an article has in its domain.

| Input Variable | Source | Weight | Normalization |
|---------------|--------|--------|---------------|
| Recency | `source_published_date` → hours since publish | 0.35 | `max(0, 1 - (hours_since_publish / 168))` — decays to 0 after 7 days |
| Source Tier | `source.reliability_tier` | 0.25 | Tier1-Official = 1.0, Tier2-Established = 0.7, Tier3-Social = 0.4 |
| Engagement | `trend_signal.engagement_metrics` (likes + shares + comments) | 0.25 | `min(1.0, engagement / 500)` — normalizes against 500 total engagements as saturation point |
| Share Velocity | `trend_signal.signal_type = ShareVelocity` → engagements per hour since publish | 0.15 | `min(1.0, velocity / 10)` — 10 engagements/hour = saturation |

**Formula:**

```
trend_score = (recency_norm × 0.35) + (source_tier_norm × 0.25) + (engagement_norm × 0.25) + (velocity_norm × 0.15)
```

**Output:** Float 0.0–1.0. Display as percentage (e.g., 0.73 = "73% trend strength").

**Missing data handling:**
- If `engagement_metrics` is null: engagement_norm = 0.5 (neutral), velocity_norm = 0.0
- If `source_published_date` is null: recency_norm = 0.5 (neutral), article flagged for investigator review

### 5.2 Editorial Priority Score v0 (How Important Is This to Us?)

Separate from virality. Measures strategic fit and editorial value.

| Input Variable | Source | Weight | Normalization |
|---------------|--------|--------|---------------|
| Topic Lineage Depth | `topic.evolves_from` chain depth (root = 0, Long-Running Workflows = 4) | 0.30 | `depth / max_depth` — deeper lineage = more emerging = higher priority |
| Reviewer Confidence | `trend_signal.reviewer_confidence` | 0.25 | High = 1.0, Medium = 0.6, Low = 0.3 |
| Source Authority Match | Does the source's topic_coverage include this article's topic? | 0.20 | Exact match = 1.0, partial = 0.5, no match = 0.2 |
| Category Balance | Is this topic underrepresented in current pipeline? | 0.15 | If < 3 articles in pipeline for this category in last 7 days = 1.0, else 0.3 |
| Evidence Quality | `trend_signal.evidence_url` present and accessible | 0.10 | Present + accessible = 1.0, present but unreachable = 0.5, absent = 0.0 |

**Formula:**

```
editorial_priority = (lineage_depth_norm × 0.30) + (confidence_norm × 0.25) + (authority_match_norm × 0.20) + (balance_norm × 0.15) + (evidence_quality_norm × 0.10)
```

**Output:** Float 0.0–1.0. Display as "Strategic Priority: Low / Medium / High" (thresholds: < 0.4 = Low, 0.4–0.7 = Medium, > 0.7 = High).

### 5.3 Combined Dashboard Sorting

```
display_priority = (trend_score × 0.5) + (editorial_priority × 0.5)
```

### 5.4 Score Versioning

| Field | Value |
|-------|-------|
| Formula version | `v0` |
| Created | 2026-08-15 |
| Last modified | 2026-08-15 |
| Change log | Initial formula — weights are starting assumptions, not validated. Review after 50+ scored articles. |

---

## 6. Role and Permission Rules

### 6.1 Three Lines Role Mapping

| Pipeline Role | Line | Function | Executor | Four-Eyes at Boundary |
|---------------|------|----------|----------|----------------------|
| Reporter | Line 1 — Operations | Origination (find and log articles) | Agent-primary | N/A within Line 1 |
| Investigator | Line 1 — Operations | Verification (validate source, confirm trend) | Agent-primary | N/A within Line 1 |
| Journalist | Line 1 — Operations | Standards fit (draft editorial adaptation) | Agent-primary | N/A within Line 1 |
| Chief Journalist | Line 1 — Operations | Operational final approval | Agent-primary | T6 (Line 2 → Line 1) = `satisfied` |
| Senior Journalist | **Line 2 — Risk & Compliance** | Accountability (quality, compliance, governance review) | **Human-primary** (Chief Editor), agent-assisted | T5 (Line 1 → Line 2) = `satisfied` |
| Line 3 — Independent Assurance | **Line 3** | Risk-based audit (triggered conditionally) | Independent — must not share data/reporting lines with Line 1 or Line 2 | Reports separately; not part of standing pipeline |

> **Key constraint:** The same person/agent cannot hold both Line 1 and Line 2 roles. This is a hard requirement of the Three Lines Model. The Chief Editor (Line 2) cannot also be the Chief Journalist (Line 1).

### 6.2 Permission Matrix

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

### 6.3 Four-Eyes Enforcement

The four-eyes principle is enforced at Line boundaries. Independence comes from Line separation — agents in different Lines provide distinct judgment by structural design.

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

> **Line boundary crossings in the pipeline:**
> - T5 (Drafted → Reviewed): Line 1 → Line 2 — `satisfied`
> - T6 (Reviewed → Approved): Line 2 → Line 1 — `satisfied`
>
> **Within-Line transitions (no four-eyes required):**
> - T1→T2, T2→T3, T3→T4: all within Line 1 — `not_applicable`
>
> **Retired from v1.3:** Same-agent-instance block (`actor_id != previous_transition.actor_id`) is no longer the core enforcement mechanism. Under the Three Lines Model, the same agent may execute multiple Line 1 gates — independence comes from Line membership, not from agent-instance distinctness. The actor_id check is retained for audit logging but is not a four-eyes enforcement rule.
>
> **Line 2 is human-primary:** The Senior Journalist role (Line 2) is executed by the Chief Editor (human), with agent assistance. This means T5 (Line 1 → Line 2) always crosses from agent to human — four-eyes is satisfied by both Line separation and human/agent distinction.
>
> **Line 3 is independent:** Line 3 (Independent Assurance) does not share data or reporting lines with Line 1 or Line 2. If it did, it would stop being Line 3 and become a rubber stamp. Line 3 reports separately and is not part of the standing pipeline. See §13 for trigger rules.

### 6.4 Availability and Absence Handling

| Scenario | Rule |
|----------|------|
| Line 1 agent fails or becomes unavailable | Article stalls in current state; Chief Editor notified. Chief Editor may execute the stalled Line 1 gate via explicit override (HumanOverride, `override_not_four_eyes`). Alternatively, if OD3 permits multiple agent instances, reassign to another Line 1 agent. |
| Chief Editor (Line 2) temporarily unavailable | Articles stall at T5 (Drafted → Reviewed) — Line 2 review cannot proceed. Line 1 agents continue executing their assigned gates. Publication jobs already Approved proceed automatically to WordPress. |
| Chief Editor unavailable > 48h | All articles requiring Line 2 review stall. No T5 review, no T11 manual publish confirmation, no emergency bypass. This is a known operational risk of the single-human model. Line 3 audits may proceed independently. |
| Line 3 audit in progress | **Pre-publication (blocking):** If Line 3 is triggered before T7, the article remains in Approved state; publication job is held; `Line3Audit` runs; T7 proceeds only after Line 3 clearance. **Post-publication (non-blocking):** If Line 3 is triggered after publication, it does not block the pipeline. If Line 3 finds a critical issue, it flags the article for Chief Editor review — the article may be recalled from Published state via T8 (Return) with Line 3 finding as reason. |

---

## 7. Publishing Fallback Plan

### 7.1 Publication Status State Machine

```
                    ┌──────────┐
         ┌──────────│ Pending  │ (publication job queued)
         │          └────┬─────┘
         │               │
         │      ┌────────┼────────┐
         │      ▼        ▼        ▼
         │ ┌────────┐ ┌────────┐ ┌──────────┐
         │ │Published│ │ Failed │ │Scheduled │
         │ └────────┘ └───┬────┘ └────┬─────┘
         │               │           │
         │               │ retry ≤3  │ at scheduled time
         │               ▼           ▼
         │          ┌────────┐  ┌──────────┐
         │          │ Retry  │  │ Pending  │
         │          └───┬────┘  └──────────┘
         │     retry >3 │
         │              ▼
         │         ┌──────────┐
         └────────>│ ManualReady│ (human takes over)
                   └────┬─────┘
                        │ human confirms
                        ▼
                   ┌──────────┐
                   │ Published│
                   └──────────┘

Side state:
  ┌──────────┐
  │ Cancelled│ (Chief Editor cancels before publish)
  └──────────┘
```

### 7.2 Failure Handling Rules

| Publication Status | Trigger | System Action | Notification |
|-------------------|---------|---------------|-------------|
| Pending → Failed | API returns error (4xx/5xx) | Log error; auto-retry up to 3 times with 5-min backoff | Notify Chief Editor: "Publication job failed for [article] on [platform]" |
| Failed → Retry | Retry count < 3 | Re-queue publication job | None (silent retry) |
| Failed → ManualReady | Retry count = 3 | `PUBLICATION.status` set to ManualReady; generate formatted post content | Notify Chief Editor: "Auto-publish exhausted, manual publish required" |
| ManualReady → Published | Chief Editor enters published_url and confirms | Update publication record with URL and timestamp | Notify all: "Article manually published" |
| Pending → Cancelled | Chief Editor cancels before job executes | Mark publication as cancelled; article returns to "Approved" for re-scheduling | Notify article originator: "Publication cancelled by Chief Editor" |
| Scheduled → Pending | Scheduled time arrives | Move to Pending and execute publication job | None (automated) |

### 7.3 Multi-Platform Partial Failure

| Scenario | Rule |
|----------|------|
| WordPress succeeds, LinkedIn fails | WordPress publication proceeds; LinkedIn moves to retry/manual path; article status = Published (partial); LinkedIn failure tracked independently |
| All targets fail | Article status = Approved (reverted); all publication targets in Failed/ManualReady state; Chief Editor notified |
| One target scheduled, one auto | Scheduled target waits; auto target executes immediately; article status = Published only when at least one target has Published with a live URL |

### 7.4 Publication Target Priority

1. WordPress/blog (highest success rate, no API review needed)
2. LinkedIn (if OAuth approved; otherwise ManualReady)
3. Facebook (manual in V1)
4. Guest platforms (manual, tracked only)

---

## 8. MVP Acceptance Tests

### 8.1 Article Logging (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-001 | Reporter agent (Line 1) is active | Reporter agent logs a valid URL with ≥1 topic tag | Article created in "Logged" state; audit log records `executor_type = agent`, `line_assignment = Line1`, agent_id, timestamp |
| AT-002 | Reporter agent is active | Agent submits form without a URL | Form rejects: "Source URL is required" |
| AT-003 | Reporter agent is active | Agent submits form with URL but no topic tag | Form rejects: "At least one topic tag is required" |
| AT-004 | Reporter agent is active | Agent submits form with a URL that already exists | System blocks: "Duplicate: this URL is already tracked as article [ID]" |
| AT-005 | Reporter agent is active | Agent logs an article and source metadata cannot be auto-extracted | Article created with null fields; flagged for investigator review |
| AT-006 | Chief Editor (Line 2) manually logs an article | Chief Editor enters URL with topic tag | Article created in "Logged" state; audit log records `executor_type = human`, `line_assignment = Line2`, `event_type = HumanOverride` (manual fallback, Line 2 executing Line 1 gate) |

### 8.2 Workflow State Transitions (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-010 | Article in "Logged" state, Investigator agent (Line 1) assigned | Investigator agent executes "Validate" | Article moves to "Validated"; audit log records `line_assignment = Line1`, `judgment_independence_status = not_applicable` |
| AT-011 | Article in "Validated", same investigator agent | Same agent executes "Investigate" | Article moves to "Investigated" (within Line 1 — same agent allowed) |
| AT-012 | Article in "Investigated", Journalist agent (Line 1) assigned | Journalist agent (different Line 1 agent) executes "Draft" | Article moves to "Drafted"; `judgment_independence_status = not_applicable` (within Line 1) |
| AT-012a | Article in "Investigated", same agent that executed T3 | Same agent executes T4 (Draft) | Article moves to "Drafted" (within Line 1 — same agent allowed; four-eyes not required within same Line) |
| AT-013 | Article in any state | Authorized executor clicks "Return to Revision" without reason | System blocks: "Revision reason is required" |
| AT-014 | Article returned to same state 3 times | Fourth return attempt | Auto-escalate to Chief Editor |
| AT-015 | Article in "Approved" | System auto-triggers publication to WordPress | Publication status: Pending → Published; article moves to "Published" |
| AT-016 | Article in "Drafted" | Chief Editor (Line 2) executes T5 (Review) | Article moves to "Reviewed"; audit log records `line_assignment = Line2`, `judgment_independence_status = satisfied` (Line 1 → Line 2 boundary) |
| AT-017 | Article in "Reviewed" | Chief Journalist agent (Line 1) executes T6 (Approve) | Article moves to "Approved"; audit log records `line_assignment = Line1`, `judgment_independence_status = satisfied` (Line 2 → Line 1 boundary) |
| AT-018 | Article in "Reviewed" | Chief Editor (Line 2) executes T6 (Approve) — a Line 1 gate | Audit log records `event_type = HumanOverride`, `judgment_independence_status = override_not_four_eyes`; transition allowed, four-eyes not satisfied |

### 8.3 Publishing (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-020 | Article is "Approved" with WordPress target | Publication job executes | WordPress post created via REST API; published_url returned and stored; article status = Published |
| AT-021 | Article is "Approved" with a publication target requiring manual intervention | Publication job attempts target API; API returns auth error or target has no API | System retries 3 times (for API targets); after 3 failures or for non-API targets, `PUBLICATION.status` set to ManualReady; formatted post content generated; Chief Editor notified per T10 |
| AT-022 | Article has a publication target with `PUBLICATION.status` = ManualReady | Chief Editor enters published_url and confirms | Publication record updated per T11; `PUBLICATION.status` = Published for that target; if first target with live URL, `ARTICLE.current_state` transitions to Published; all notified |
| AT-023 | Article has both WordPress and LinkedIn targets | WordPress succeeds, LinkedIn fails | WordPress publication proceeds; article status = Published (partial); LinkedIn tracked as Failed/ManualReady |

### 8.4 Trend Scoring (P1)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-030 | Article has trend_signal with engagement_metrics = 450, source_tier = Tier1, published 12 hours ago | Score is calculated | trend_score computed per v0 formula; score displayed on article card |
| AT-031 | Article has no engagement_metrics | Score is calculated | engagement_norm = 0.5 (neutral); velocity_norm = 0.0; score still computed with remaining inputs |
| AT-032 | Two articles in the same pipeline state | Dashboard loads | Articles sorted by display_priority (trend_score × 0.5 + editorial_priority × 0.5) |

### 8.5 Audit Trail (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-040 | Any state transition occurs | Transition completes | Audit log entry created with: article_id, executor_id, executor_type, **line_assignment**, from_state, to_state, decision, reason, timestamp, judgment_independence_status |
| AT-041 | Article returned with revision reason | Return completes | Revision reason visible on board; permanent in audit trail |
| AT-042 | Chief Editor uses emergency publish bypass | Bypass executes | Audit log: `event_type = EmergencyBypass`, `line_assignment = Line2`, reason string with `emergency_bypass` flag; all notified |
| AT-043 | Chief Editor (Line 2) executes a Line 1 gate | Human override executes | Audit log: `event_type = HumanOverride`, `judgment_independence_status = override_not_four_eyes`, gate executed, reason, timestamp |
| AT-044 | Line 3 audit is triggered | Line 3 completes audit | Audit log: `event_type = Line3Audit`, `line_assignment = Line3`, finding, recommendation, timestamp; Line 3 reports independently — no shared data path to Line 1 or Line 2 |

### 8.6 Board and Filtering (P1)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-050 | Multiple articles across different states | Chief Editor opens dashboard | Kanban board displays all articles grouped by current_state; each card shows title, topic_tags, trend_score, editorial_priority, executor_type, **line_assignment** |
| AT-051 | Board has articles in multiple categories | Chief Editor filters by category = "AI" | Only AI articles displayed |
| AT-052 | Board has articles with multiple topic tags | Chief Editor filters by topic = "Agentic AI" | Only articles with that tag displayed |
| AT-053 | Board has articles at different Line boundaries | Chief Editor filters by Line assignment | Articles filtered by Line 1 / Line 2 / Line 3 executor |

### 8.7 Role-Based Access (P0)

| Test ID | Given | When | Then |
|---------|-------|------|------|
| AT-060 | Reporter agent (Line 1) views article in "Validated" state | Agent sees available actions | Only "View" is available — Reporter cannot validate (that's Investigator's role) |
| AT-061 | Journalist agent (Line 1) views article in "Investigated" state | Agent sees available actions | "Draft" visible; "Validate" and "Approve" not visible |
| AT-062 | Chief Editor (Line 2) views any article | Chief Editor sees available actions | "Review" (Line 2 gate) visible; "Approve" visible only as override; "Emergency Publish" visible; "Trigger Line 3 Audit" visible if risk signal crosses threshold |

---

## 9. Governance Addendum (Non-Blocking, Post-MVP)

| # | Item | Description | Target Phase |
|---|------|-------------|-------------|
| G1 | Data retention policy | Auto-archive rejected/archived after 90 days; published kept indefinitely | Week 4-6 |
| G2 | GDPR/privacy considerations | Articles from social platforms need consent tracking | Phase 2 |
| G3 | Blueprint versioning | Semantic versioning on blueprint; increment on invariant change | **Executed** — Blueprint is v1.2 with changelog |
| G4 | Taxonomy change workflow | Chief Editor proposes new topic → review → approval; `evolves_from` and `evolution_notes` required | Week 4-6 |
| G5 | Integration testing plan | Automated tests for publishing pipeline: mock WordPress, LinkedIn APIs | Week 2-3 |
| G6 | Notification design | In-app only for Week 1; email + Slack in Week 4-6 | Week 4-6 |
| G7 | Bookmarklet specification | JavaScript bookmarklet extracting page metadata | Week 2-3 |
| G8 | Line 3 trigger criteria | Define and document specific risk thresholds and novelty/controversy flags that trigger Line 3 audit | Week 4-6 |
| G9 | Line assignment verification | Verify that Line assignments hold in production — agents in different Lines produce genuinely distinct judgments, not identical outputs due to shared training data | Post-launch monitoring |
| G10 | Three Lines Model ratification | Chief Editor formally signs off on the Three Lines Model mapping as the project's independence framework | Before production sign-off |

---

## 10. Summary: What Changed from Prior Versions

| Area | Change | Reason |
|------|--------|--------|
| v1.0–v1.2 | EMS audit chain: 6 blockers → 6 EMS fixes → 2 re-audit fixes → PASS | EMS v1.2 audit |
| v1.3 | Charter-aligned rewrite: OD1-OD3 as Open/blocking, prototype/compliance mode, HumanOverride separation | Project Charter adoption |
| v1.4 | Three Lines Model alignment: OD1-OD3 resolved via Three Lines Model, `contingent_on_OD2` retired, Line-boundary four-eyes, `line_assignment` field, Line 3 added, lexicon retired | Business Case v2.1 resolution |
| §0 | Three Lines Model Sync Delta replaces Charter Alignment Delta | v1.4 resolution |
| §1 | Success criteria: "zero independence bypass" unconditional | OD2 resolved |
| §2 | OD1-OD3 moved from Open to Resolved (Three Lines Model); ratification log updated | Three Lines Model resolution |
| §3.1 | Transition matrix: added Line column; four-eyes status uses `satisfied` / `not_applicable` / `override_not_four_eyes` | Line-based enforcement |
| §3.4 | Permission edge cases rewritten for Line model; same-agent block retired; D5 team-size exception closed | Three Lines Model |
| §4.1 | Enums: added `line_assignments`; retired `contingent_on_OD2`, `blocked`; added `not_applicable`, `Line3Audit` | Schema alignment |
| §6 | Role/permission rules fully rewritten with Three Lines mapping; four-eyes at Line boundaries; HumanOverride simplified | Three Lines Model |
| §8 | Acceptance tests updated: OD2-dependent tests replaced with Line-boundary tests; AT-016/017 now test Line crossings; AT-018 tests HumanOverride; AT-044 tests Line 3 | Test alignment |
| §9 | Added G8 (Line 3 triggers), G9 (Line verification), G10 (ratification) | Governance |
| New §12 | Three Lines Model Mapping (detailed) | Transparency |
| New §13 | Line 3 Trigger Rules | Line 3 specification |
| New §14 | Lexicon Audit | Vocabulary discipline |
| New §15 | Sync Gap Register | Cross-document tracking |

---

## 11. EMS Audit Response (Preserved from v1.1–v1.2, Extended in v1.4)

### Findings Addressed (v1.1–v1.2)

| EMS Finding | Action Taken | Status |
|-------------|-------------|--------|
| D1-D4 overclaim: recommendation relabeled as "Ratified" without sign-off | Reverted to "Recommended — not ratified"; added Ratification Log (§2.4) with discrete sign-off fields | **Fixed** |
| T11 unverified | T9-T11 documented in §3.1 transition matrix; T10/T11 generalized to all manual publication targets | **Fixed** |
| Emergency bypass scope ambiguity | Clarified in §3.4: bypasses four-eyes check only; does not skip phase gates, required fields, audit logging, or publication confirmation | **Fixed** |
| Adjacent-roles example presented as fact | Marked as "illustrative example, not ratified policy" in §3.4 | **Fixed** |
| D5 inconsistency (source-level defect) | Resolved in v1.1 by aligning both sections; documented as source-level defect in v1.2; **closed entirely in v1.4** (Line separation replaces headcount) | **Fixed** |
| Self-audit caveat | Confidence/provenance note in document header | **Fixed** |
| Publication state inconsistency | §3.2 Publication State Rules; ManualReady is PUBLICATION.status not ARTICLE.current_state | **Fixed** |
| Publication target schema mismatch | Schema extension note in §4.4; MockPublished defined as test-only | **Fixed** |
| Emergency bypass field conflation (v1.2) | §3.4 explicitly distinguishes `EmergencyBypass` (§4.1 enum) from `emergency_bypass` (reason string) | **Fixed** |
| D5/§3.4 threshold contradiction (v1.2) | Documented as source-level defect; **closed in v1.4** — D5 superseded by Line separation | **Fixed** |

### Citation Rigor Note

> A citation with a section number is a model of verification, not verification. Each citation should be independently checked against the cited source text. Citations increase checkability, not correctness.

### Structural Principles Applied

> **Ratification principle:** A document that says a decision is ratified is a model of ratification, not ratification. The corrective is a ratification log distinct from the recommendation table.
>
> **Citation principle:** A citation with a line number is a model of verification, not verification. The corrective is to read each citation against its source every time.
>
> **Contradiction-disclosure principle:** When two parts of a source document disagree, the honest move is to name both, state which governs and why, and route the contradiction back to the source owner.
>
> **Resolution-is-not-ratification principle (v1.4 addition):** A structural resolution (e.g., "OD1 is resolved by Three Lines Model mapping") is a model of a decision, not the decision itself. The Three Lines Model provides a sound structural answer to OD1–OD3, but the Chief Editor must still sign off. The resolution reduces the decision space; it does not close it. Conflating resolution with ratification would repeat the v1.0 error (labeling recommendations as "ratified") in a new form.
>
> **Framework-adoption principle (v1.4 addition):** When an existing, named, standardized framework (the Three Lines Model) occupies the same space as the project's invented vocabulary, the standard framework governs and the invented vocabulary is retired. This follows ITIL 4's "keep it simple and practical" — anyone reviewing this model against an actual GRC function will recognize the standard terms instead of needing a project-specific glossary.

---

## 12. Three Lines Model Mapping

The pipeline maps onto the Three Lines Model (IIA, July 2020, updated September 2024). This is a real, standardized GRC framework. The mapping is an inference from this project's analysis, not from the organization's actual GRC documentation.

| Three Lines Line | Pipeline Function | Roles | Executor | Four-Eyes |
|---|---|---|---|---|
| **Line 1 — Operations** | Origination, Verification, Standards fit, operational approval | Reporter, Investigator, Journalist, Chief Journalist | Agent-primary, human spot-check optional | Not required within same Line (T1–T4 all within Line 1) |
| **Line 2 — Risk & Compliance** | Accountability (regulation, compliance, governance as one continuous check) | Senior Journalist | Human-primary (Chief Editor), agent-assisted | Required at Line 1 → Line 2 boundary (T5) and Line 2 → Line 1 boundary (T6) |
| **Line 3 — Independent Assurance** | Risk-based audit (triggered conditionally) | — (triggered function, not a standing role) | Independent — must not share data/reporting lines with Line 1 or Line 2 | Reports separately; not part of standing pipeline |

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

**Why T3 is not an exemption:** Under v1.3, T3 (same investigator validates + investigates) was treated as a special-case exception. Under the Three Lines Model, it is the standard rule — four-eyes applies at Line boundaries, not within Lines. Both validation and investigation are Line 1 operational functions.

---

## 13. Line 3 Trigger Rules

Line 3 (Independent Assurance) is a risk-based audit function, triggered conditionally. It does not run on every article — it runs only where risk warrants it. This is standard risk-based audit planning.

### Trigger Conditions

| Trigger | Description | Who Triggers |
|---------|-------------|-------------|
| Risk signal crosses threshold | Line 2's risk assessment indicates elevated risk (e.g., topic is controversial, source is unverified, engagement metrics are anomalous) | Senior Journalist (Line 2) |
| Novel/controversial topic | Article's topic is flagged as novel (no prior coverage in pipeline) or controversial (multiple conflicting perspectives in source material) | Senior Journalist or Chief Journalist |
| Emergency bypass used | Chief Editor used EmergencyBypass on this article or a related article | System (automatic) |
| Repeated returns | Article has been returned to the same state 3+ times | System (automatic) |
| HumanOverride used | Chief Editor executed a Line 1 gate via HumanOverride on this article | System (automatic) |

### Line 3 Independence Requirements

- Line 3 must **not** share data or reporting lines with Line 1 or Line 2 — if it does, it stops being Line 3 and becomes a rubber stamp
- Line 3 reports independently to the Chief Editor (not through Line 1 or Line 2)
- Line 3 findings are logged as `event_type = Line3Audit` with `line_assignment = Line3`
- Line 3 can recommend article recall (T8 Return) if a critical issue is found post-publication
- Line 3 does not block the pipeline unless it finds a critical issue pre-publication

---

## 14. Lexicon Audit

### Retired in v1.4 (invented terms replaced by GRC standard vocabulary)

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

## 15. Sync Gap Register

This section tracks alignment gaps between the four project documents.

| Document | Version | Status | Gap | Action |
|----------|---------|--------|-----|--------|
| Project Charter | v1, baseline | Current | OD1–OD3 listed as Open — this is the charter's intended starting state. The resolution is an evolution via subsequent analysis, not a contradiction. | No action — charter is the baseline |
| Business Case | v2.1 | Current | Source of Three Lines Model resolution | No action — this is the source |
| Addendum | v1.4 (this document) | Current | Aligned to Business Case v2.1 | No action — this is the current build spec |
| Blueprint | v1.2 | **Stale** | Still treats OD1–OD3 as Open; §2.2 Charter Decision Register has them as Open; §4.7 four-eyes enforcement still OD2-conditional; §4.9 D5 team-size exception still provisional; no `line_assignment` field; no Line 3 | **Needs update to v1.3** (Three Lines Model aligned) to match Addendum v1.4 and Business Case v2.1 |

### Blueprint Update Requirements (when updated to v1.3)

1. §2.2: Move OD1–OD3 from Open to Resolved (Three Lines Model)
2. §4.4: Add `Line` column to state-transition matrix; update four-eyes status values
3. §4.7: Rewrite four-eyes enforcement from actor_id check to Line-boundary check
4. §4.8: Update permission matrix with Line assignments
5. §4.9: Close D5 team-size exception; add Line 2 cannot execute Line 1 gate rule
6. §4.10: Update absence handling for Line model
7. §5.1: Add `line_assignment` to USER, REVIEW, and AUDIT_LOG entities
8. §6: Update success criteria (independence unconditional)
9. §8: Update success metrics
10. §10: Update risk register (remove D5, add Line separation risk)
11. §13.1: Add `line_assignments` and `Line3Audit` to enums; update `judgment_independence_status`
12. §14: Update acceptance tests for Line boundaries
13. Add Three Lines Model Mapping section
14. Add Line 3 Trigger Rules section
15. Add Lexicon Audit section

---

## 16. Amendment log

### v1.5 — Charter reconciliation (2026-08-16)

Surgical amendments, no rewrite. Occasioned by the Project Charter v1 becoming available for direct reading after v1.4 was written. Every change below restores accuracy about this document's status relative to the Charter. **No open decision is closed. No Charter text is changed.**

| § | Change | Reason | Register row |
|---|---|---|---|
| Header | Version to v1.5; corrected stale references to Blueprint v1.2 and Business Case v2.1 (current: v1.4 and v2.3) | v1.4's header cited versions that have since been superseded | — |
| §1 | Independence success criterion no longer claims "unconditional." Enforcement unchanged; the criterion is reported as provisionally satisfied, pending OD2 | Charter lists one zero-bypass criterion and hedges it: "independence of judgment, OD2, still open." This document added a second and called it unconditional. Charter governs | **D1** |
| §2.2 | OD3 reverted from Resolved to **Open** — framework accepted, exact count deferred | Naming a framework is not naming a number. Charter: headcount "withheld pending OD3." Aligns with Business Case v2.2, which caught this first | **D3** |
| §2.2 | New row **OD3-a** recording the same-agent-across-Line-1-gates reading as a dated provisional deviation, Phase 0 only | Charter says gates are "each executed by a distinct agent." This document says combinable. Charter governs on operating model; the deviation is permitted for scaffolding and logged rather than laundered | **D2** |
| §2.4 | OD1 and OD2 marked `No — Provisional-for-PoC (Entry 007, 2026-08-16)` with approval artifact; OD3 row reverted to Open | Entry 007 recorded Phase 0 provisional acceptance. Provisional-for-PoC is a distinct state from both blank-unratified and ratified | D1, D3 |
| §15 | Sync Gap Register refreshed — Blueprint is v1.4 (was recorded stale at v1.2), Business Case is v2.3 | v1.4's register was describing document versions that no longer exist | — |

**Why these were worth amending rather than leaving.** Three of the four are wording or status errors with no build impact, which is exactly why they persisted: nothing broke, so nothing forced a correction. The independence-criterion error (D1) had survived three review passes because it sat in a success criterion rather than a status table, which is where this project's reviews look. Correcting them costs nothing and removes two standing inconsistencies from the governing set.

**What did not change:** the state-transition matrix, the data model, the scoring formulas, the acceptance tests, the four-eyes enforcement logic in §6.3, the publication fallback plan, and every Assumed default A1–A7. This amendment touches how the document describes its own certainty, not what it specifies.

### v1.4 — Three Lines Model alignment (2026-08-16)

See §0 Sync Delta and §10.

---

*This addendum (v1.5) is the build specification layer above the blueprint's invariant core, aligned to the Project Charter v1. OD1 and OD2 are structurally resolved but remain unratified and Open at Charter level; OD3 is Open, with its framework accepted and its count deferred. All Assumed defaults may proceed as provisional assumptions for prototype development. This document is a self-authored specification, not an independently audited artifact — claims should be verified against source material before being cited as confirmed. Citations increase checkability, not correctness.*

> **Citation note:** the clause "All Assumed defaults may proceed as provisional assumptions for prototype development" is load-bearing and is cited across the journal entries. It is preserved verbatim through this amendment. Its line number has moved; cite it by clause, not by line, from v1.5 onward.
