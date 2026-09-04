# Business Case: AI-Driven Trending Article Tracker

> **Document version:** 2.3 — Charter reconciliation (2026-08-16), amends v2.2
> **Amendment note (v2.3):** one surgical change, no rewrite. The independence success criterion no longer claims to be unconditional, because the Charter marks it pending OD2. OD3 needed no change here — v2.2 already had it correct as Open, and the Addendum and Blueprint have now been brought into line with this document rather than the reverse. **No open decision is closed. The Charter is unchanged.** Deviations tracked in `docs/governance/provisional-deviation-register.md`.
> **Date:** 2026-08-16
> **Precedence hierarchy:** Project Charter > V1 Build Readiness Addendum (v1.4) > Blueprint (v1.3) > Business Case. Where the Charter and Addendum conflict on operating model, the Charter governs; where they conflict on build mechanics, the Addendum governs.
> **Operating model:** Agent-directed. One human Chief Editor (Line 2 — Risk & Compliance) directs virtual agents across Line 1 (Operations) pipeline roles, with Line 3 (Independent Assurance) triggered conditionally by risk signal. This replaces the prior 5–7 person human editorial team assumption from Business Case v1.x.
> **GRC framework:** The pipeline's independence model maps onto the Three Lines Model (IIA, updated 2020). This is an existing, standardized GRC framework — not a novel construction. Adopted per ITIL 4 guiding principles "start where you are" (investigate and measure before discarding) and "keep it simple and practical" (retire invented vocabulary, use the real one).
> **Decision status:** OD1 and OD2 are resolved (via Three Lines Model mapping) but unratified. OD3 is partially resolved — framework accepted, exact agent headcount deferred. Resolution is not ratification; OD1–OD3 remain unratified until the Chief Editor signs off in a discrete, dated event.
> **Confidence note:** This document is a business-case summary, not an independently audited artifact. Factual claims about the Addendum and Blueprint are checked against source text; citations increase checkability, not correctness. The Three Lines Model mapping is an inference built from this conversation's analysis, not from the organization's actual GRC documentation. Since no prior GRC function exists for this project, the analysis defaults to the mapping below.

---

## What do you want to build? (the painful, repetitive thing it handles)

A system that repeatedly finds and curates trending articles across professional certifications (SAFe, Scrum, DevOps, ITIL4) and AI topics (Generative AI, Agentic AI, Harnesses, Guardrails, Digital Twins, Context Engineering, Loop Engineering, Long-Running Workflows). The team loses 3–5 hours per week manually hunting across LinkedIn, Facebook, blogs, and guest platforms, with nothing stopping an unchecked article from going live.

This is not a "need a dashboard" problem — it is a compliance-absence problem. The real deliverable is a five-gate review pipeline (Reporter → Investigator → Journalist → Senior Journalist → Chief Journalist) that every article must pass before publishing to WordPress, LinkedIn, or a guest platform. The pipeline maps onto the Three Lines Model: Line 1 (Operations) covers origination, verification, and standards fit; Line 2 (Risk & Compliance) covers accountability; Line 3 (Independent Assurance) runs a risk-based audit when triggered.

**What is enforced unconditionally:** Gate sequence — no article can skip a state. Every transition follows the state-transition matrix (T1–T11, Addendum §3.1). Four-eyes independence is satisfied by Line separation — agents in different Lines provide distinct judgment by structural design, not by hopeful configuration. This is the industry-standard GRC definition of independence.

---

## Who uses it day-to-day?

**One human Chief Editor** (Line 2 — Risk & Compliance) directing **virtual agents** (Line 1 — Operations) across the pipeline, with **Line 3** (Independent Assurance) triggered conditionally:

- **Chief Editor** (human, Line 2) — the sole human operator. Sits in Line 2 (Risk & Compliance). Performs or directly supervises the Senior Journalist role (Accountability function). Does not float across gates — Three Lines Model forbids the same person holding both Line 1 and Line 2 roles, because self-review across Lines is a known Three Lines Model violation.
- **Line 1 agents** — execute operational roles: Reporter (Origination), Investigator (Verification), Journalist (Standards fit), and Chief Journalist (operational final approval). Agent-primary, human spot-check optional. Same agent may hold multiple Line 1 roles.
- **Line 3** (Independent Assurance) — risk-based audit, triggered only when Line 2's risk signal crosses a threshold or the topic is flagged novel/controversial. Must report independently, with unrestricted read access to relevant evidence and an independent reporting/authority path — Lines 1 and 2 cannot control its scope or conclusions, or it stops being Line 3 and becomes a rubber stamp (`D-166`).

**Secondary audience:** Agile/DevOps/ITIL professionals seeking certification insights, and AI practitioners tracking public discourse on agentic systems, guardrails, and context engineering.

---

## What "things" do you need to track?

- **Articles** — source URL (immutable once logged), author, publication date, editorial adaptation, current workflow state, category (Professional or AI), topic tags, assigned executor, emergency publish flag, revision target state, return count
- **Trend signals** — engagement metrics, share velocity, evidence URLs, reviewer confidence (High/Medium/Low), signal type, source tier
- **Sources** — where articles originate (LinkedIn, Facebook, blogs, RSS feeds, guest platforms), each with a reliability tier (Tier1-Official, Tier2-Established, Tier3-Social) and ingestion method (RSS, API, Manual, Bookmarklet)
- **Topics** — 12 initial topics across two categories, with an evolution lineage (e.g., Generative AI → Agentic AI → Context Engineering → Loop Engineering → Long-Running Workflows). Each topic tracks `evolves_from` and `evolution_notes`.
- **Workflow states** — Discovered → Logged → Validated → Investigated → Drafted → Reviewed → Approved → Published (plus Needs Revision and Rejected side states). State-transition matrix T1–T11 with executor type, required fields, audit event, notification, and four-eyes status per transition.
- **Publication targets** — WordPress/blog, LinkedIn, Facebook, guest platforms — each with API config, auth method, formatting rules, mock mode, and a full publication status state machine (Pending → Published/Failed/Scheduled/Cancelled/ManualReady/MockPublished)
- **Audit log** — every state transition with executor identity (human/agent/system), `line_assignment` (Line 1 / Line 2 / Line 3), agent_id, agent_run_id, supervising_human_id, from-state, to-state, decision, reason, timestamp, and `judgment_independence_status` (satisfied / not_applicable / override_not_four_eyes)
- **Users** — team members with role assignments, `actor_type` (Human/Agent), `line_assignment`, `agent_id`, `agent_role`, `agent_run_id`, `supervising_human_id`, and active status

---

## If only ONE thing worked end-to-end in a week, what is it?

A Line 1 agent (Reporter) logs a trending article (URL + topic tag + trend signal) → it enters the approval workflow → moves through Line 1 gates (Investigator, Journalist, Chief Journalist) → the Line 2 accountability check (Senior Journalist, supervised by Chief Editor) reviews → if risk signal is high or topic is novel/controversial, Line 3 risk-based audit triggers → article auto-publishes to WordPress, or is marked ready for manual LinkedIn publish. Every step is logged with executor identity, Line assignment, timestamp, and reason.

> **Four-eyes at Line boundaries:** Independence is enforced at transitions that cross Lines. The standard pipeline crosses Line 1 → Line 2 at T5 (Drafted → Reviewed) and returns Line 2 → Line 1 at T6 (Reviewed → Approved). This Line 1 → Line 2 → Line 1 flow is intentional — Line 2 reviews between drafting and operational approval, and the return crossing at T6 is its own four-eyes checkpoint, not a silent bypass (Blueprint v1.3). Within Line 1, the same agent may execute adjacent operational gates (e.g., Reporter → Investigator) — the T3 exemption (Validated → Investigated by same investigator) reflects this: both are Line 1 operational functions, and four-eyes is not required within the same Line. Line 3 (Independent Assurance), when triggered, reports separately and is not part of the standing pipeline flow.

---

## What does success look like in a week?

- 5+ articles logged and moving through the pipeline
- 2+ published to WordPress, or marked ready for manual LinkedIn publish
- Chief Editor can see and filter the board by state, topic, category, and Line assignment
- Every transition logged with executor identity, Line assignment, timestamp, and reason
- Zero articles bypass a review **sequence** (gate-skipping prevention: unconditional)
- Zero articles bypass review **independence** (four-eyes at Line boundaries, enforced unconditionally in code — but reported as **provisionally satisfied, pending OD2**, per Charter, which states this criterion as "independence of judgment, OD2, still open" and does not list it as unconditional. Corrected in v2.3; see Provisional Deviation Register D1.)

---

## What you're deliberately NOT building in v1

- No mobile app — web dashboard only
- No advanced AI summarization of article content — agent-executed tagging at Reporter stage (Line 1); the Chief Editor is the sole human reviewer (Line 2), not the sole tagger
- No multi-team accounts — single Chief Editor account
- No monetization features — focus on workflow efficiency first
- No automated Facebook publishing — manual cross-posting only (API review required)
- No real-time trend detection algorithms — semi-automated RSS intake only
- No multi-language support
- No bookmarklet — copy-paste URL form only for Week 1
- No email or Slack notifications — in-app only for Week 1
- No Proposer/Critics/Judge governance model (OD4, Resolved — rejected for v1 with reopening condition)

---

## Who will actually use this?

- One Chief Editor (Line 2) directing Line 1 agents across the pipeline, with Line 3 triggered conditionally
- Agile/DevOps/ITIL professionals reading the certification content it surfaces
- AI practitioners tracking discourse on agentic systems, guardrails, context engineering, and long-running workflows

---

## What does it replace or earn?

- Replaces 3–5 hours/week of manual article hunting across LinkedIn, Facebook, blogs, and guest platforms
- Removes the possibility of a publish happening without a review **sequence** and without **Line separation** (four-eyes)
- Builds a searchable, provenance-tracked archive as a durable asset
- Potential monetization (post-V1): subscription tier for curated feeds (e.g., $49/mo for professionals)

---

## Three Lines Model Mapping

The pipeline maps onto the Three Lines Model (IIA, updated 2020). This is a real, standardized GRC framework — the structural conclusions reached through the project's analysis land exactly here. The mapping is an inference from the conversation's analysis, not from the organization's actual GRC documentation (no prior GRC function exists for this project).

| Three Lines Line | Pipeline Function | Roles | Executor | Four-Eyes |
|---|---|---|---|---|
| **Line 1 — Operations** | Origination, Verification, Standards fit, operational approval | Reporter, Investigator, Journalist, Chief Journalist | Agent-primary, human spot-check optional | Not required within same Line (T3 exemption: same agent may validate + investigate) |
| **Line 2 — Risk & Compliance** | Accountability (regulation, compliance, governance as one continuous check) | Senior Journalist | Human-primary (Chief Editor), agent-assisted | Required at Line 1 → Line 2 crossing (T5) and Line 2 → Line 1 return (T6) |
| **Line 3 — Independent Assurance** | Risk-based audit (triggered conditionally) | — (triggered function, not a standing role) | Independent — unrestricted read access to relevant evidence and an independent reporting/authority path; Lines 1/2 cannot control its scope or conclusions (`D-166`) | Reports separately; not part of the standing pipeline |

**Target-order disclosure (`B-071` `R147`, 2026-09-04).** A proposed, not build-authorized target order would retire editorial use of `T6` and complete the human's final judgment inside `T5` as `T5-FINAL` instead. See `raci-involvement-matrix.md` §3.1. This row is unmodified.

**Line 3 trigger conditions:** Activated when Line 2's risk signal crosses a threshold, or the topic is flagged novel/controversial. Does not run on every article — runs only where risk warrants it. This is standard risk-based audit planning, not a novel mechanism.

**Why Line separation is the project's four-eyes mechanism:** Line 1 (doing the work) and Line 2 (overseeing the work) are structurally separated — the same person can never hold both. This is the project's own RACI-sourced rule (`SEC-01`, `D-163`), not a Three Lines Model requirement. **Whether structural separation makes agents in different Lines produce genuinely distinct judgment is `OD2` — open, and not resolved by the separation itself** (`AS-02`); reporting lines and oversight structures being separated by design is a necessary condition for distinct judgment, not proof of it.

---

## Decision Framework (Charter-Aligned, OD1–OD2 Resolved, OD3 Open)

### Assumed (conservative defaults, override if you disagree)

These are defaults applied so the document has something to build against. They stand unless the Chief Editor objects. They are not ratified until formally signed off per the Addendum's Ratification Log (§2.4).

| # | Item | Default Applied |
|---|------|----------------|
| A1 | Architecture for v1 | Five-gate linear pipeline (T1–T8a), not Proposer/Critics/Judge — ships the already-specified model rather than an unproven redesign |
| A2 | Prototype stack | React/Next.js + FastAPI + PostgreSQL + Supabase Auth (auth only) |
| A3 | Week 1 publication target | WordPress auto-publish + LinkedIn manual fallback |
| A4 | Trend scoring formula | Simple weighted sum (trend_score v0 + editorial_priority v0) |
| A5 | Notification mechanism | In-app only for Week 1 |
| A6 | Data retention | Auto-archive rejected/archived after 90 days; published articles kept indefinitely |
| A7 | Bookmarklet | Copy-paste URL form only for Week 1 |

### Resolved via Three Lines Model (this revision)

| # | Decision | Resolution | Basis |
|---|----------|-----------|-------|
| OD1 | Does Chief Editor = Chief Journalist, or does the human float across gates? | **Chief Editor sits in Line 2. Chief Journalist sits in Line 1. The human does not float.** Three Lines Model forbids merging Line 1 and Line 2 roles — self-review across Lines is a known compliance-standard violation. | Three Lines Model (IIA, updated 2020) — structural separation requirement |
| OD2 | Does a distinct agent provide distinct judgment sufficient to satisfy four-eyes? | **Yes — four-eyes is satisfied by Line separation itself.** Agents in different Lines provide distinct judgment by structural design. This is the industry-standard GRC definition of independence. Within the same Line (e.g., Line 1), distinct agent instances do not automatically satisfy four-eyes — independence comes from Line membership, not from agent-instance distinctness. | Three Lines Model — Line separation as independence criterion |

### Open — framework accepted, exact count deferred

| # | Decision | Status | Why Still Open |
|---|----------|--------|----------------|
| OD3 | What does the agent headcount figure count, and how does it distribute across the 4 agent-holdable roles? | **Partially resolved.** Framework accepted: four agent-holdable roles map to Three Lines (Line 1: Origination + Verification, combinable; Line 2: Accountability, human-primary; Line 3: Independent Assurance, triggered conditionally). Exact agent headcount and per-role distribution are **not specified** in any of the three source documents (Charter, Addendum v1.4, Blueprint v1.3). | Naming a framework is not naming a number. Closing OD3 now would repeat the overclaim pattern already caught twice on this exact item (v1.1 D1–D4 "Ratified," v2.0 OD3 "Resolved"). The framework is sound; the count question is real and unanswered. Recommend either providing a number before sign-off, or explicitly re-scoping OD3 to "framework accepted, exact count deferred to build phase." |

### Resolved (Charter)

| # | Decision | Resolution | Trigger to Revisit |
|---|----------|-----------|-------------------|
| OD4 | Adopt Proposer → Critics → Judge, replacing the linear pipeline | Rejected for v1 (consistent with A1). Deferred to v2, conditional. | Two branches: (1) OD2 resolved affirmatively (Line separation satisfies four-eyes) and the pipeline ships — revisit only if logged data shows Line separation failing to catch errors in practice. (2) If Line separation fails to hold in production (e.g., agents in different Lines produce identical judgments due to shared training data), this is a **pre-launch blocker** — re-evaluate before shipping. If neither branch fires, OD4 stays backlogged. **Note:** OD4 remains a separately authorized system distinct from Line 3, `SEC-06`, and `FR-11` (`D-168`) — a branch firing reopens the remedy decision, it does not select OD4 or authorize Line 3. If Proposer/Critics/Judge is ever adopted, its Judge component does not thereby become Line 3 assurance; each would require its own separate authorization. |

---

## Compliance & Governance Disclosures

### Four-Eyes Enforcement (Three Lines Model)

The four-eyes principle is enforced at Line boundaries. Independence comes from Line separation — agents in different Lines provide distinct judgment by structural design.

**What is unconditional:**
- Gate sequence enforcement — no article can skip a state
- Line separation — the same person/agent cannot hold both Line 1 and Line 2 roles (the project's own RACI-sourced rule, `SEC-01`/`D-163`, not a Three Lines Model requirement)
- Four-eyes at Line boundaries — transitions crossing from Line 1 to Line 2 (T5: Drafted → Reviewed) and returning Line 2 to Line 1 (T6: Reviewed → Approved) require executors from different Lines

**What is not required:**
- Four-eyes within the same Line — the T3 exemption (Validated → Investigated by same investigator) reflects this: both are Line 1 operational functions. The prior versions treated this as a special-case exception; under the Three Lines Model, it is the standard rule — four-eyes applies at Line boundaries, not within Lines.

**`judgment_independence_status` field values (updated):**
- `satisfied` — transition crosses a Line boundary (e.g., Line 1 → Line 2)
- `not_applicable` — transition within the same Line (e.g., Line 1 internal: Reporter → Investigator)
- `override_not_four_eyes` — Chief Editor executes a Line 1 gate via explicit override (see HumanOverride below)

> **Retired value:** `contingent_on_OD2` is retired. OD2 is resolved — four-eyes is satisfied by Line separation, not contingent on a future decision.

**Emergency bypass:** The Chief Editor can bypass the four-eyes check only (the Line-separation enforcement) by setting `emergency_publish = true` with mandatory reason. This bypass does not skip phase gates, required fields, audit logging, or publication confirmation, and does not grant role permissions. The audit log records this as: `event_type = EmergencyBypass` (Addendum §4.1 enum, PascalCase) with the reason string containing the flag `emergency_bypass` (lowercase, descriptive label in reason text, not an enum value). These are distinct fields — sourced from Addendum v1.3 §3.4.

**HumanOverride:** Since OD1 resolves to "Chief Editor sits in Line 2, does not float," the HumanOverride scenario applies only to explicit override policies — if the Chief Editor executes a Line 1 gate (e.g., stepping in to approve when no Line 1 agent is available), the audit log records `event_type = HumanOverride` with `judgment_independence_status = override_not_four_eyes`. The transition is allowed; four-eyes is not satisfied. The system never silently treats an override as compliant.

### Team-Size Exception (Superseded — Closed)

The prior D5 exception ("Chief Journalist may cover two adjacent roles for teams with fewer than 5 active role holders") was designed for small human teams. Under the Charter's agent-directed model, this is **superseded and closed** — the Three Lines Model replaces the team-size threshold entirely. Line separation is the independence criterion, not headcount. The prior D5-vs-§3.3 contradiction ("teams < 5" vs "exactly 5") is moot — it no longer applies.

### Blueprint Versioning (Governance G3 — Executed)

G3 ("Add semantic versioning to blueprint; version increments on any invariant change") was self-declared "Immediate" and is now **executed** — the Blueprint is versioned as v1.2 with a changelog documenting all changes. The stale "2+ published to LinkedIn" metric from Blueprint §7 has been corrected to reflect the Addendum's WordPress/manual-ready scope. This was the outstanding action item from Business Case v1.3; it is now closed.

### Guest-Platform Publication Auditability

Guest platforms are tracked as publication targets with manual submission status. The "zero gate bypass" invariant applies identically to guest-platform targets: an article cannot reach a guest platform without passing all phase gates (T1–T6) and T6 executor approval. The audit trail captures the manual publication confirmation (T11) — Chief Editor enters `published_url`; `PUBLICATION.status` updated to Published — with the same executor identity, timestamp, and published_url fields as automated targets.

**Source verification:** Transition T11 is confirmed in Addendum v1.3 §3.1: "T11 | *(any state with ManualReady target)* | Published if first live target; otherwise unchanged | Chief Editor (manual confirm) | Human."

**Acceptance test gap:** The acceptance test suite includes AT-040 (audit trail verification for state transitions) and AT-042 (emergency bypass audit verification). T11's manual-confirm path is covered by AT-022 (Chief Editor enters published_url for ManualReady target). The guest-platform-specific audit path is functionally identical to the LinkedIn ManualReady path tested by AT-022.

### RET-EDITORIAL 0.1-provisional — Retention, Archival, and Explainable Absence (`C-32`)

**Status:** All operative values ruled by the Chief Editor, 2026-08-25 (`D-134`), written here in
full by `D-135`.

**Accountable owner:** Chief Editor. A future Board assumes approval authority when constituted.
The policy is reviewed at least annually and immediately on first external-counsel engagement,
jurisdiction change, regulator order, new customer contract, POC payment activation, or material
platform-rule change.

**Definitions**

- Current set: records available to the live editorial correction/retraction workflow.
- Archived: moved out of the current set by an external process, still retrievable with its audit
  relationships intact. Archival is not deletion.
- Disposed: irreversibly removed by an authorized external process with evidence retained according
  to the governing policy. V1 performs no disposal.
- Queue cleanup: removal from an active work queue. It is not archival unless a governed archive
  move is also recorded.
- `RET-POC-90` / `REUSE-WINDOW-90`: two distinct 90-day windows (`D-127`, confirmed independent by
  `D-134`) — `RET-POC-90` is a PDPA data-deletion period (`D-43`); `REUSE-WINDOW-90` is an editorial
  workflow permission, not a retention period. Neither is this policy's 5-year archival figure.

| Record class | Current-set rule | Archive trigger | Minimum retained period | Disposal authority |
|---|---|---|---|---|
| Published editorial records and correction/retraction evidence | Remain current while correction or retraction must remain possible; GRC always attaches | Not archived while current — no rejection event applies | RET-EDITORIAL: **5 years** (`D-134`, financial-policy default) | Chief Editor, sole operator; each act documented with a reason |
| Rejected, abandoned, and unpublished editorial work | Moves out of current view once archived | RET-EDITORIAL: **5 years** — house-policy placeholder pending specific GRC rules, explicitly amendable (`D-134`). **Not** the reuse-eligibility window: `REUSE-WINDOW-90` (90 days) is confirmed independent, unaffected by this figure | RET-EDITORIAL: **5 years** (`D-134`) | Chief Editor, sole operator; each act documented with a reason |
| Append-only transitions, reports, publication targets, and publication events | Remain linked to their originating editorial record | Follow the originating record without breaking the chain | RET-EDITORIAL: matches the originating record's class — 5 years either way (`D-134`) | Chief Editor, sole operator |
| Sources and personal data supporting editorial work | Limited to the approved editorial and evidential purpose | Not a separate class — editorial-flow data carries no personal data (`D-42`); source references follow their article's own row above | RET-EDITORIAL: follows the originating article's class | Chief Editor, sole operator |
| POC payment-confirmation/commercial records | Outside the v1 editorial migration; governed before commercial activation | Deferred to the commercial policy | RET-EDITORIAL: **5 years** (`D-134`, confirms `D-43`'s existing IRAS/ACRA rule — not a new number) | Deferred to commercial-activation policy |
| **Account/login records** (added `D-134`, not one of the original five) | Governed by **access control** (enabled/disabled), not a retention clock | **On user request only**: the clock starts from whichever is **later** — the POC delivery-package date or the request date — **plus `RET-POC-90`** (90 days, `D-43`, unchanged) | RET-EDITORIAL: `RET-POC-90` from the later start event, on request; otherwise indefinite while the account is active | Chief Editor, sole operator |

The policy does not characterize editorial records as financial or accounting records merely to
borrow a statutory period. **The 5-year figures above are house-policy risk controls, not statutory
conclusions** — adopted because no specific GRC rule exists yet, and reviewed when counsel becomes
available or GRC rules are supplied.

**Partition/classification column.** Every record above carries a class value set once, at intake
(`D-42`, `D-134`) — specified to Lane B in `LANE-B-WORK-ORDER.md` §2.2c. This is the input the
external archival process reads; it is not itself the archival mechanism.

**External archive control**

- Operator/location class: the hosted Supabase project's own infrastructure — archival is external
  to the application, and no second operator exists (`D-134`).
- Retrieval authority: Chief Editor, sole operator.
- Restoration authority: Chief Editor, sole operator (`D-134`).
- Integrity requirement: preserve article, transition, report, source, and publication links.
- **Deferred**: the actual external archive job, restoration process, and disposal process are
  **Project Scope, deferred until the product is live** (`D-134`) — there is no data yet to act on.
  Only the intake-time partition column above is not deferred.

**Supplied absence fact**

An external archival or disposal act supplies: affected record or period identifier; archived or
disposed classification; effective timestamp; actor and authority; reason; policy ID and version;
archive reference and retrievability when archived; and disposal-evidence reference when disposed.
This is a semantic interface (`G88`'s contract), not authorization for a new migration.

**Precedence and holds**

Law, regulator orders, contracts, platform duties, active disputes, legal or regulatory holds,
whistleblower protection, warranty obligations, and correction/retraction duties override the
ordinary schedule. An override is recorded with authority, reason, affected scope, start time, and
review/expiry event.

### Ratification Log

Assumed defaults (A1–A7) remain unratified. OD1 and OD2 are **resolved** (via Three Lines Model mapping) but **unratified**. OD3 is **partially resolved** — framework accepted, exact headcount deferred — and remains **open**. A resolution is not a ratification; an open decision is not a resolution. The Chief Editor must sign off in a discrete, dated event for each to move from resolved/open to ratified. A recommendation, assumed default, or structural resolution does not become a ratified decision by being labeled one. The full ratification log is maintained in Addendum v1.4 §2.4.

| # | Item | Category | Resolved? | Ratified? |
|---|------|----------|-----------|-----------|
| A1 | Five-gate linear pipeline | Assumed | N/A | No |
| A2 | Prototype stack | Assumed | N/A | No |
| A3 | WordPress auto + LinkedIn manual | Assumed | N/A | No |
| A4 | Simple weighted sum scoring | Assumed | N/A | No |
| A5 | In-app notifications only | Assumed | N/A | No |
| A6 | 90-day auto-archive | Assumed | N/A | No |
| A7 | Copy-paste URL form only | Assumed | N/A | No |
| OD1 | Chief Editor = Chief Journalist? | Resolved (Three Lines Model) | **Yes** — Chief Editor = Line 2, Chief Journalist = Line 1, no float | No |
| OD2 | Agent judgment independence? | Resolved (Three Lines Model) | **Yes** — satisfied by Line separation | No |
| OD3 | Agent headcount and distribution | **Open** (framework accepted, count deferred) | **No** — framework maps to Three Lines; exact count unspecified in any source document | No |
| OD4 | Proposer/Critics/Judge model | Resolved (Charter) | N/A (rejected for v1) | N/A |

---

## Lexicon Audit

### Retired this revision (invented terms replaced by GRC standard vocabulary)

| Invented term | Replaced by | Why |
|---|---|---|
| Confidence ranking | Risk-based audit trigger | Standard internal audit practice — audit engagements prioritized by risk score, not run uniformly on everything |
| Directional distinctness | Three Lines Model separation | Already a hard requirement of the Three Lines Model — Line 3 has unrestricted read access to relevant evidence and an independent reporting/authority path; Lines 1/2 cannot control its scope or conclusions (`D-166`) |
| Conditional distinctness | Three Lines Model separation | Same — no separate concept needed |
| Gate collapse | Line consolidation | Same Line, same function, fewer agents |
| `contingent_on_OD2` (field value) | `satisfied` or `not_applicable` | OD2 resolved — independence is satisfied by Line separation, not contingent on a future decision |

### Retained (describe real dynamics without duplicating GRC vocabulary)

- **Origination** — the Line 1 function of finding and logging articles
- **Accountability** — the Line 2 function of compliance/governance review
- **Novelty** — topic flag that can trigger Line 3 audit
- **Stakes** — risk level that influences whether Line 3 triggers
- **Tacit judgment gap** — describes real dynamics of editorial judgment without duplicating GRC vocabulary

### Adopted from GRC standard

- **Three Lines Model** (IIA, updated 2020) — the structural framework for independence
- **Line 1 / Line 2 / Line 3** — the three Lines and their functions
- **Risk-based audit** — Line 3's triggered assurance function
- **Line separation** — the independence criterion (replaces "distinct agent instances")

---

## Methodology Note: First-Principles vs. Start Where You Are

The project's original instruction set uses Aristotelian first-principles deconstruction — strip every assumption, discard convention, rebuild from zero. ITIL 4's "start where you are" principle says the opposite: investigate and measure the current state honestly before deciding whether to discard it.

These are compatible only if first-principles is used for **diagnosis**, not **construction**. Use first-principles to verify that an existing structure (the Three Lines Model) actually holds up under scrutiny — which it did. Do not use it to justify building a parallel structure from zero when a mature, named, audited standard already occupies that space.

The structural conclusions reached through the project's first-principles analysis land exactly on the Three Lines Model. That validates the reasoning was sound. The invented vocabulary that surrounded the discovery ("confidence ranking," "directional distinctness," "conditional distinctness," "gate collapse") is retired in favor of the standard terms — anyone reviewing this model against an actual GRC function will recognize it immediately instead of needing a project-specific glossary.

---

## Changelog

### v2.2 — Citation Fix + OD3 Scope Correction (2026-08-16)

Two gaps from external review: (1) standing T4/T5 citation error corrected at source, (2) OD3 overclaim reverted to Open. Addendum/Blueprint version references updated to v1.4/v1.3.

| Area | Change | Source |
|------|--------|--------|
| T4/T5 citation error | **Fixed at source.** Four-Eyes Enforcement section previously read "T4: Drafted → Reviewed, T5: Reviewed → Approved" — off by one. Corrected to T5: Drafted → Reviewed (Line 1→Line 2) and T6: Reviewed → Approved (Line 2→Line 1). Also fixed Three Lines Model Mapping table from "T4/T5" to "T5 and T6." | Addendum v1.4 §3.1; Blueprint v1.3 transition matrix |
| OD3 overclaim | **Reverted to Open.** v2.1 claimed OD3 "Resolved" but did not answer the headcount question — it named a framework, not a number. Moved to new "Open — framework accepted, exact count deferred" section. This is the third time the overclaim pattern has been caught on this item (v1.1 D1–D4 "Ratified," v2.0 OD3 "Resolved," v2.1 OD3 "Resolved"). | External review; ratification principle |
| Header | Added "Decision status" line to header block — OD1/OD2 resolved, OD3 open, all unratified. Placed near top per "don't bury the hedge" principle. | External review Finding 1 |
| Line 1→Line 2→Line 1 flow | Added explicit note that the pipeline crosses Line 1 → Line 2 → Line 1 intentionally — Line 2 reviews between drafting and operational approval, T6 return crossing is its own four-eyes checkpoint, not a silent bypass. | Blueprint v1.3 |
| Precedence hierarchy | Updated Addendum v1.3 → v1.4, Blueprint v1.2 → v1.3 throughout | Addendum v1.4; Blueprint v1.3 |
| Ratification log | OD3 moved from "Resolved, unratified" to "Open, unratified" — framework accepted, count deferred | Ratification principle |

### v2.1 — Three Lines Model Resolution (2026-08-16)

OD1–OD3 resolved by mapping the pipeline onto the Three Lines Model (IIA, updated 2020). Invented lexicon retired. ITIL 4 guiding principles "start where you are" and "keep it simple and practical" applied.

| Area | Change | Source |
|------|--------|--------|
| OD1 | **Resolved.** Chief Editor = Line 2, Chief Journalist = Line 1, human does not float. Three Lines Model forbids merging. | Three Lines Model (IIA, updated 2020) structural separation requirement |
| OD2 | **Resolved — affirmative.** Four-eyes satisfied by Line separation. Industry-standard GRC definition of independence. | Three Lines Model — Line separation as independence criterion |
| OD3 | **Resolved.** Four agent-holdable roles map to Three Lines: Line 1 (Origination + Verification, combinable), Line 2 (Accountability, human-primary), Line 3 (Independent Assurance, triggered conditionally). Headcount debate closes. *(Corrected in v2.2: reverted to Open — framework accepted, exact count deferred.)* | Three Lines Model — standard role allocation |
| OD4 | Updated reopening condition: branch (1) fires (OD2 affirmative) — revisit only if Line separation fails in practice. New note: if Proposer/Critics/Judge adopted in v2, map directly onto Three Lines. | Three Lines Model mapping |
| Four-eyes enforcement | Changed from OD2-conditional to unconditional (satisfied by Line separation). `contingent_on_OD2` field value retired. | Three Lines Model resolution of OD2 |
| Success criteria | "Zero independence bypass" changed from conditional to unconditional | OD2 resolution |
| Lexicon | Retired: confidence ranking, directional distinctness, conditional distinctness, gate collapse, contingent_on_OD2. Adopted: Three Lines Model, Line 1/2/3, risk-based audit, Line separation | ITIL 4 "keep it simple and practical"; GRC standard vocabulary |
| T3 exemption | Reclassified from special-case exception to standard rule — four-eyes applies at Line boundaries, not within Lines | Three Lines Model |
| Team-size exception | Closed entirely — D5 superseded and no longer applicable. Line separation replaces headcount as independence criterion | Three Lines Model; supersedes Addendum D5 |
| HumanOverride | Simplified — OD1 resolves to "no float," so override applies only to explicit override policies, not the "floats" branch | OD1 resolution |
| Methodology note | Added: first-principles compatible with "start where you are" only for diagnosis, not construction | ITIL 4 guiding principles |
| `judgment_independence_status` | Updated values: `satisfied` (Line boundary crossing), `not_applicable` (within same Line), `override_not_four_eyes` (explicit override). `contingent_on_OD2` retired. | Three Lines Model resolution of OD2 |
| Audit log | Added `line_assignment` field (Line 1 / Line 2 / Line 3) to track Line membership per executor | Three Lines Model |
| Ratification log | OD1–OD3 moved from "Open, blocking" to "Resolved, unratified" — resolution is not ratification *(Corrected in v2.2: OD3 reverted to Open)* | Ratification principle |

### v2.0 — Charter-Aligned Rewrite (2026-08-16)

Complete rewrite to align with Project Charter v1 and the charter-aligned Blueprint v1.2 and Addendum v1.3.

| Area | Change | Source |
|------|--------|--------|
| Operating model | Replaced 5–7 person human editorial team with one human Chief Editor directing virtual agents across five roles | Charter operating model; Blueprint v1.2 §2.1; Addendum v1.3 §0 |
| Four-eyes enforcement | Made conditional on OD2 — sequence compliance unconditional, judgment independence contingent | Charter OD2; Addendum v1.3 §3.4, §6.2 |
| Success criteria | "Zero bypass" split into "zero sequence bypass" (unconditional) and "zero independence bypass" (conditional on OD2) | Charter success criteria; Addendum v1.3 §1 |
| Decision framework | Replaced D1–D8 recommendation table with Charter's Open/Assumed/Resolved categories (A1–A7, OD1–OD3, OD4) | Charter decision framework; Addendum v1.3 §2 |
| Team-size exception | Marked as superseded by agent model; D5-vs-§3.3 contradiction resolved at source level in Addendum v1.3 | Addendum v1.3 §0, §3.4 |
| Data model | Added agent fields: actor_type, agent_id, agent_role, agent_run_id, supervising_human_id, judgment_independence_status, HumanOverride audit event | Blueprint v1.2 §5.1; Addendum v1.3 §4.1 |
| Tagging model | Tagging is now agent-executed at Reporter stage; Chief Editor is sole human reviewer, not sole tagger | Charter; Blueprint v1.2 §2.3 |
| Absence handling | Rewritten for agent model — agents don't "go absent"; Chief Editor availability is the only human-absence scenario | Addendum v1.3 §6.3 |
| Emergency bypass | EmergencyBypass (enum) vs emergency_bypass (reason string) distinction preserved and correctly cited from Addendum v1.3 §3.4 | Addendum v1.3 §3.4 (carried forward from Business Case v1.3 fix) |
| G3 blueprint versioning | Marked as executed — Blueprint is now versioned v1.2 with changelog | Blueprint v1.2 header; Addendum v1.3 §9 G3 |
| Precedence hierarchy | Updated to: Charter > Addendum > Blueprint > Business Case | Charter header; Addendum v1.3 §0 |
| Proposer/Critics/Judge | Explicitly rejected for v1 (OD4 Resolved) with two-branch reopening condition documented | Charter OD4; Addendum v1.3 §2.3 |
| Ratification log | Restructured to use Charter categories (Assumed/Open/Resolved) with reference to Addendum v1.3 §2.4 | Addendum v1.3 §2.4 |
| Headcount | Withheld pending OD3 — no fixed agent count assumed | Charter; Blueprint v1.2 §2.1 |

### v1.3 — Citation Correction (2026-08-15)

Two citation errors found in v1.2 by independent re-verification. Both in the four-eyes exception disclosure. Fixed: emergency_bypass (§3.3 prose) vs EmergencyBypass (§4.1 enum) field conflation resolved; D5-vs-§3.3 team-size threshold contradiction ("teams < 5" vs "exactly 5") explicitly flagged as source-level defect. Both corrections verified against Addendum source lines 54, 100, 102, 127.

### v1.2 — EMS Re-Audit Fix (2026-08-15)

D1–D4 "Ratified" overclaim reverted to "Recommended — Not Yet Ratified" with separate ratification log instrument. Three EMS false flags (T11, emergency bypass scope, adjacent roles example) resolved by source verification against full Addendum text.

### v1.1 — Gap-Fix Revision (2026-08-15)

Six gaps from initial EMS audit: four-eyes exception unsurfaced, guest-platform auditability under-specified, D1–D4 unratified, G3 versioning outstanding, problem framing too UI-centric, precedence unstated.

### v1.0 — Initial (2026-08-15)

Synthesized from Blueprint + V1 Build Readiness Addendum into business-case template.
