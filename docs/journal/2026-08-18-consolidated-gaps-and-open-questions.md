# Consolidated Gap Register and Open Questions

**Date:** 2026-08-18
**Status:** Planning only. No code, no migration. Index and gap register for the 2026-08-18 analysis set.
**Normalized against:** `graphify` queries on requirement scope, publication targets, monetization boundary, trigger/intake vocabulary, and account boundary; plus direct reads of the governing set, the four new governance documents, and the sprint plan.

## 1. Document index — 2026-08-18 analysis set

| Document | Job |
|---|---|
| `2026-08-18-sprint-readiness-consolidated.md` | Go/no-go for Sprint S0; reconciles the 9 newly-discovered commits and 5 new governance files |
| `2026-08-18-board-packet-checklist.md` | Plain-language approve/defer on all 42 pending Board decisions; addenda on `B-P0-17`, `B-P0-06`, `APD-09`, and the shared Topic Brief |
| `2026-08-18-first-engagement-lock-in.md` | The seven decisions needed to get one client, one topic, to publication |
| `2026-08-18-poc-charter-separation-and-revenue-model.md` | POC/MVP charter separation; consolidated revenue rule |
| `2026-08-18-transition-intent-vocabulary.md` | Proposed controlled vocabulary for `event_type` + intent codes, replacing free-text reasons |
| `2026-08-18-audit-model-and-remediation-plan.md` | CPA-style audit model; gaps `GA1`–`GA8` and the eight remediation steps that close them |
| `2026-08-18-consolidated-gaps-and-open-questions.md` | *(this file)* Gap register and questions requiring an answer |

## 2. What was adopted across the set

1. **Sprint S0 is clear to start.** Not blocked by the new governance material. S1 clear subject to `Q10`/`Q11`. S2 recommended to hold pending the OD1/OD2/OD4-boundary decisions.
2. **`CR-15` resolved by separation, not interpretation.** It governs AP-01/MVP unchanged; P0-EVR is separately chartered and was never in its scope.
3. **One editorial engine, two exposures.** Charters differ in intent, audience, and entitlement — never in how an article is judged. The pipeline must never be forked.
4. **One revenue rule.** *Revenue may attach to the business and to the service. Revenue must never attach to a specific editorial decision.*
5. **Exclusivity window as three data points** — client-confirmed length, delivery-triggered start, calculated end. Nothing auto-publishes.
6. **First engagement needs seven decisions**, and the publication-platform choice is not one of them.
7. **`QA` answered — a tenancy boundary belongs in the S1 schema.** Chief Editor decision, 2026-08-18. Rationale: nothing should structurally foreclose white-labelling or agency partnerships where another organization's Chief Editor uses the same platform; tenancy scopes data-protection obligations and inter-entity business separation; and the monetization and feature work can follow later. This matches `Q10`'s own stated cost asymmetry — *"it is a column now and a migration of an append-only table later"* — and `NFR-02` revokes UPDATE/DELETE on `workflow_transitions`, so retrofitting is materially harder than it looks. **No multi-tenant feature is authorized by this decision; only the boundary.**

## 3. Gap register

Severity: **S1** = must resolve before Sprint S1 (schema-irreversible) · **CHR** = must resolve before the P0-EVR charter is written · **DOC** = documentation correctness · **WATCH** = track, not urgent.

| # | Gap | Severity | Detail |
|---|---|---|---|
| **G1** | ~~`Q10` may now have a third answer~~ — **ANSWERED 2026-08-18** | **S1 — resolved, conditions open** | Resolved in favour of including a tenancy boundary in S1 (see §2 item 7). Residual work moves to `G13`, `G14`, and `G16` — the decision is made; its extent, its visibility against `NG-02`, and its co-design with `Q11` are not |
| **G2** | No engagement concept exists in the data requirements | **S1** | The PoC proposal requires both folders to "carry the same engagement identifier," but `TR-DM-01`…`06` define articles, topics, sources, trend signals, transitions, and publication targets — no engagement. If POC work runs the same pipeline, an engagement has nowhere to live. **Not resolved by the tenancy decision — see `G13`** |
| **G3** | Does the P0-EVR charter supersede the board-proposal's exclusions? | **CHR** | `board-proposal-…-poc.md` §8.2 and `B-P0-16` exclude "customer accounts or self-service onboarding." The adopted separation permits a client submit/receive surface under a new charter. A charter outranks a proposal, but this has not been stated. Until it is, two live documents disagree. *(This is what superseded the struck paragraph in the checklist's Addendum 1.)* |
| **G4** | `CR-15`'s "Covered" status needs a scope note | **DOC** | `requirements-traceability-map.md:142` records `CR-15` as Covered by `NG-01`, `NG-02`, `NG-08`, `SEC-03`. With a client surface existing under a separate charter, a future reader could read that coverage as violated. The row needs "coverage scoped to AP-01" |
| **G5** | `A7` covers `CLAUDE.md` but not `AGENTS.md` | **DOC** | Both files open by directing any agent to the plan pack as "a complete, correct plan," which the deviation register `D5` records as diverging from the governing set. Sprint plan `R0`'s `A7` names only `CLAUDE.md`; `AGENTS.md` was added later by Codex with the same defect and is unregistered |
| **G6** | The revenue rule has no governed home | **DOC** | The single revenue rule currently exists only in a journal file. Journals record decisions; they do not govern. It needs to land in `PSK-06` (editorial-commercial separation) or the sprint plan's §11 standing constraints to have force |
| **G7** | The P0-EVR charter and PRD do not exist yet | **CHR** | The entire separation model assumes them. Largest single open work item in the set |
| **G8** | Exclusivity window scope is not stated as P0-EVR-only | **DOC** | The window holds a client-commissioned article. AP-01 research-discovered articles have no client and no window. Unless stated, the concept leaks into the shared core, where it does not belong |
| **G9** | `FR-09` automates WordPress; the recommended first channel is LinkedIn | **WATCH** | `FR-09`/`S4` build WordPress publication. The first-engagement recommendation is LinkedIn (ManualReady, no automation). If Ghost/Substack follow, S4's WordPress branch may be built for a channel never used. Not urgent — S4 is distant — but worth a scope note before S4 is specified |
| **G10** | Domain assignment is inverted relative to project seniority | **WATCH** | Root `my-editorial-app` → POC (a subordinate, time-boxed evidence lane); subdomain `chief.` → AP-01 (the anchor project). Defensible if the public-facing service is the commercial front door, but it should be a conscious decision rather than a default |
| **G11** | No arbitration rule for concurrent agent edits | **WATCH** | At least two agents (Claude, Codex) are co-editing `docs/`. Nothing states which is authoritative on a conflicting concurrent edit, or how a conflict would be detected |
| **G12** | All 42 Board decisions remain `Pending` | **WATCH** | `APD-01–10`, `B-P0-01–22`, `MFB-01–10`. Everything above assumes eventual approval. Nothing in this analysis set closes any of them |
| **G13** | ~~Tenant and engagement are two nested boundaries~~ — **RESOLVED 2026-08-18** | **S1 — resolved** | Chief Editor decision: **each paying POC customer is its own tenant.** Customers are never grouped by shared company email domain — a shared domain does not establish a shared legal party. Rationale: platform indemnity and issue isolation, so a dispute, breach, or withdrawal affecting one customer cannot reach another's records. Consequence: there is **one** isolation boundary (tenant), not two nested ones. The PoC proposal's "same engagement identifier" becomes a **work-package identifier inside a tenant**, not a second isolation level. `G2` closes with it |
| **G14** | ~~A tenancy column will read as violating `NG-02`~~ — **RESOLVED 2026-08-18** | **DOC** | Chief Editor: `NG-02` is a **v1 simplicity lock, not a permanent exclusion**. Verified against the non-goals table's own framing — `NG-03` is *"Charter-level **v1** exclusion"*, `NG-07`/`NG-08` are *"Deferred to Week 2–3 / 4–6"*, `NG-09` is *"rejected **for v1**, with a two-branch reopening condition"*. `NG-02`'s stated rationale is *"Operating model is one human"*, a description of v1 that lapses when the business has more people. Nothing excludes later accounts for multiple natural persons with roles mapped to virtual agents, phase gates, or documented role intentions. **No Charter act required; no deviation occurs.** Annotation of `NG-02` still recommended so a future reader sees the v1 scoping without re-deriving it |
| **G15** | Data-protection regime named for neither lane | **CHR** | Chief Editor direction: **PDPA applies directionally to P0-EVR**, because the POC gathers customer data. Recorded as direction, not as a legal determination. Two **distinct** exposures now exist and neither is documented as such: **(a) P0-EVR** — the client's own data (identity, contact, payment, commissioned brief), data subjects who are paying customers; **(b) AP-01** — third-party PII *inside sourced articles*, per `Modular_PRD.md` §6.3: *"articles sourced from individuals on social platforms may carry personal data. GDPR handling is deferred to Phase 2."* `SEC-04` names **GDPR Art. 17 only**; `PDPA` appears nowhere in the document set. Compounding: `SEC-04`/`SEC-05` are explicitly **unowned** — *"no legal function… the Chief Editor is not qualified to discharge them"* — and `XF-09` records Legal as `Unowned`/`Blocked`. **Recorded as a documentation and ownership gap. The applicable obligations are `Q7` territory and require qualified external input; nothing here determines them** |
| **G17** | Versioned JSON audit payload — proposed direction, split decision needed | **S1** | Chief Editor direction: record the transaction log with a JSON field carrying a version, so a report can be reprinted later against the template in force at the time. **Already partly owed:** `FR-14` requires persisting "the evidence and rule-set version," `PSK-09` requires rule versioning with rollback, and the briefcase acceptance checklist requires the judgment-rule version be recorded. **Two cautions.** (a) *Control fields must not move into JSON.* `NFR-01` requires invalid transitions be rejected **by the database**, because `TC1` records that no privileged write path exists and the anon key is public — the sprint plan's own standing constraint states application-layer checks are advisory and "Charter-level invariants belong in Postgres." Inside JSON, Postgres cannot enforce NOT NULL (`NFR-03`), allowed values, or foreign keys, and the sequence-guard trigger cannot read it; `FR-08`'s filterable board also weakens. (b) *Two distinct versions are being conflated* — **template version** (how it was rendered) and **rule-set version** (by what standard it was judged). Audit depends more on the second, and faithful reprinting also requires the **data state** as it stood, not merely the layout. **Recommended shape:** typed columns for anything enforced or filtered; a versioned JSON payload alongside for evidence snapshot, rationale, rule-set version, and template version |
| **G16** | `Q10` and `Q11` now both alter `workflow_transitions` in the same S1 migration | **S1** | `TR-DM-02` already carries `[Q11]` and the explicit instruction *"do not write this field name."* Tenancy now touches the same append-only table. Two `[S1-IRREVERSIBLE]` decisions, one table, one migration — they must be designed as a single change, not sequentially. Which further tables carry the tenancy boundary (`TR-DM-01` and `TR-DM-02` are named in `Q10`; topics, sources, trend signals, and publication targets are not) is a Technical Requirements scoping question, deliberately not decided here |

## 4. Questions requiring an answer

Ordered by what blocks the most.

| # | Question | Blocks | Who answers |
|---|---|---|---|
| ~~**QA**~~ | ~~Does the shared pipeline need a tenancy boundary in the S1 schema?~~ **ANSWERED 2026-08-18 — yes, include it.** See §2 item 7 | — | Chief Editor ✅ |
| ~~**QA2**~~ | ~~Does the engagement boundary also go into S1 alongside tenancy?~~ **ANSWERED 2026-08-18 — one boundary only.** Each paying customer is its own tenant; engagement is a work-package identifier inside it. See `G13` | — | Chief Editor ✅ |
| **QA3** | Which fields stay typed columns and which move into the versioned JSON payload? The split matters because `NFR-01`'s database-level enforcement and `FR-08`'s filtering only work on typed columns — see `G17`. Same migration, so same decision window as `Q10`/`Q11` | S1 migration | Chief Editor |
| **QB** | Does the new P0-EVR charter supersede `board-proposal-…-poc.md` §8.2 and `B-P0-16`, which exclude customer self-service? | P0-EVR charter | Board |
| **QC** | Is the domain assignment intended — public root for POC, `chief.` subdomain for the anchor MVP? | Charter + exposure design | Chief Editor |
| **QD** | Where does the revenue rule land so it governs: `PSK-06`, or sprint plan §11 standing constraints? | Force of the rule | Chief Editor |
| **QE** | Should `A7` be extended to cover `AGENTS.md`, or should a separate register row be opened? | `R0` completion | Chief Editor |

None of these blocks Sprint S0. `QA` blocks S1.

## 5. Approvals still open for closure

Nothing in this analysis set closes any approval. This is the consolidated view of what remains.

### 5.1 Board — 42 pending, none approved

| Batch | Range | Count | Status |
|---|---|---|---|
| Portfolio decisions | `APD-01`…`APD-10` | 10 | All `Pending` |
| PoC resolutions, incl. briefcase and portfolio addenda | `B-P0-01`…`B-P0-22` | 22 | All `Pending` |
| Media-feedback dispositions | `MFB-01`…`MFB-10` | 10 | All `Pending` |
| **Total** | | **42** | **0 approved** |

Plus one **draft not yet in any packet**: `B-P0-23` — optional ghostwriting / alternate-angle drafting as a separate paid service. Raised in the `B-P0-17` addendum, deliberately not folded into that item.

Recommended dispositions are in `2026-08-18-board-packet-checklist.md`: approve most, **defer `B-P0-06`** until its ten boundaries carry real values, and treat every item marked *(cond.)* as provisional rather than settled.

### 5.2 Chief Editor — answerable now

**From the sprint plan's `R1` batch — 9 of 10 remain** (`Q10` answered this session):

| # | Decision | Note |
|---|---|---|
| `Q11` | `workflow_transitions` field rename | `[S1-IRREVERSIBLE]` — in the S1 window |
| `Q0` | Record `A2`'s ratification in Addendum §2.4 | "Highest value per minute on this list" |
| `Q8` | Route `FB-01`…`FB-08` via the sponsor | = `R5`; should precede S1 |
| `Q2` | Line 3 executor — external, or state v1 has none | **Not** the Chief Editor (`A23`) |
| `Q3` | Publish path — route handler recommended | |
| `Q4` | `G9` / OD2 trip-wire scope | Now sharper — see `INDEPENDENCE_INSUFFICIENT` |
| `Q5` | Retry scheduler | |
| `Q6` | Re-enable build gates once CI exists | |
| `Q12` | (a) Three Lines re-citation; (b) `SEC-01` re-derivation | Two parts, kept separate |

**From this session — 5 open:**

| # | Question |
|---|---|
| `QA3` | Which fields stay typed columns versus moving into the versioned JSON payload |
| `QB` | Does the P0-EVR charter supersede the board proposal's §8.2 / `B-P0-16` exclusions |
| `QC` | Is the domain assignment intended — public root for POC, `chief.` for the anchor |
| `QD` | Where the revenue rule lands so it governs — `PSK-06` or sprint plan §11 |
| `QE` | Extend `A7` to `AGENTS.md`, or open a separate register row |

### 5.3 The S1 migration window — 6 of 7 remain

These alter the same append-only table and must be settled as one design, not sequentially:
`Q11`, `QA3`, **Step 4** (report record shape), **Step 5** (insert/read-only table list), **Step 9** (retention floor and classification), **Step 11** (cascade behaviour and archival restatement). `Q10` is answered.

### 5.4 Not closable here — blocked or unowned

| # | Item | Why |
|---|---|---|
| `OD1`, `OD2`, `OD3` | Charter Open Decisions | Not closable at scaffolding; the evidence that answers them is what the build produces |
| `OD4` | Proposer → Critics → Judge | Retained and deferred; reopens only on its own trigger |
| `Q1` | Line 1 roster shape | Needs `OD3` |
| `Q7` | `SEC-04`/`SEC-05` ownership | **No owner.** No legal function exists; needs qualified external counsel |
| `G15` / `GA5` | Data-protection regime; retention versus erasure | Escalated. Statutory floor stated; the remainder needs counsel |

## 6. Gap-to-fix map

Two registers exist: **`G`-series** in this file (governance and structure) and **`GA`-series** in `2026-08-18-audit-model-and-remediation-plan.md` (audit and data lifecycle). They overlap at one point, noted below.

| Gap | Status | Fix | Owner |
|---|---|---|---|
| `G1`, `G2`, `G13` | **Resolved** | Tenancy in S1; each customer is its own tenant; engagement is a work-package identifier within it | Done |
| `G14` | **Resolved** | `NG-02` confirmed a v1 lock, not a permanent exclusion; annotation still recommended | Done |
| `G3` | Open | State explicitly that the P0-EVR charter outranks the board proposal's exclusions | Board (`QB`) |
| `G4` | Open | Add "coverage scoped to AP-01" to `CR-15`'s row in the traceability map | Documentation pass |
| `G5` | Open | Extend `A7` to cover `AGENTS.md`, which carries the same stale pointer | Chief Editor (`QE`) |
| `G6` | Open | Land the revenue rule in `PSK-06` or sprint plan §11 | Chief Editor (`QD`) |
| `G7a` | Open — **no build dependency** | Charter the **manual** P0-EVR lane. The PoC proposal designs it as paper templates, manual invoicing, Chief-Editor-only access, explicitly "no build" — so this needs nothing from S0/S1/S2. Unblocks `B-P0-06` and the commercial evidence the portfolio closure decision depends on | Board + Chief Editor |
| `G7b` | Open — **S2 and later** | The **systematized** POC exposure: client self-submission, separate surfaces, package delivery by access tier. Depends on S1 (tenancy, engagement, report records) and S2 (`actor_id`, `line_assignment`, role separation). Full enforcement is **S6**, not S2 — `SEC-03` replaces permissive RLS with scoped policies there, and is itself gated on OD1–OD3 | Board + Chief Editor |
| `G8` | Open | State that the exclusivity window is P0-EVR-only and does not enter the shared core | Documentation pass |
| `G9` | Watch | Note the WordPress-vs-LinkedIn scope question before S4 is specified | Deferred to S4 |
| `G10` | Watch | Confirm or invert the domain assignment | Chief Editor (`QC`) |
| `G11` | Watch | Decide an arbitration rule for concurrent Claude/Codex edits to `docs/` | Chief Editor |
| `G12` | Watch | The 42 pending approvals — §5.1 | Board |
| `G16` | Open | Design `Q10` + `Q11` as one migration | S1 window |
| `G17` | Open | Split typed columns from JSON payload; keep enforcement in typed columns | S1 window (`QA3`) |
| `G15` ↔ `GA5` | **Overlapping** | `G15` asks *which regime applies*; `GA5` asks *how retention and erasure coexist*. Related, distinct, both escalated to counsel — do not close one on the strength of the other | External counsel |
| `GA1`–`GA4`, `GA6`–`GA9` | Open | Steps 1–11 in the audit remediation plan | See that document's §4 sequencing |
| **`G18`** | **New** | **Two gap-numbering series now exist and could drift.** This map is the cross-reference; any new gap should be raised in one series only, and this table updated when a gap spans both | Documentation discipline |

**Fixes that need no decision and could be done today:** `G4`, `G8`, and audit Steps 1–3 are all documentation-only, close real gaps, and depend on nothing.

### 6.1 Sequencing note — why `G7` splits

An earlier entry in this set called `G7` "the largest single open work item" without distinguishing its two halves. Correcting that here, because the two have opposite dependency profiles:

| | `G7a` — manual lane | `G7b` — systematized exposure |
|---|---|---|
| What it authorizes | 5–10 manual engagements, paper templates, manual invoicing | Client self-submission and tiered package delivery |
| Build dependency | **None** — the PoC is designed as a no-build lane | S1 data model, S2 identity/roles, S6 scoped access |
| Blocks if delayed | `B-P0-06`, revenue evidence, the portfolio closure decision | Nothing immediate — it is a later capability |
| Risk if rushed | Governance: the manual lane running unchartered | Building access separation on unenforceable foundations (`TC1`) |

**Deferring both to S2 would stall the revenue lane for no technical reason.** The manual PoC exists precisely so commercial evidence can be gathered *before* the build justifies itself; making its charter wait on S0/S1 inverts that. Conversely, attempting `G7b` before S2 would build exposure separation on top of a public anon key and permissive RLS — `TC1`'s finding, where application-layer checks are advisory.

**Recommended:** charter `G7a` on the manual lane's own terms now; schedule `G7b` against S2, with the understanding that enforcement completes at S6 and inherits S6's OD gating. Note also that S2's own DoD records *"OD2 negative voids this sprint's model entirely"* — so `G7b` carries that risk, and `G7a` does not.

## 7. Commit readiness

The five documents in this set are internally consistent as of this entry. One contradiction was found and corrected: the checklist's Addendum 1 stated the client could not enter their own window value, reasoning inside a single-charter assumption that the later charter separation replaced. It is struck and annotated rather than deleted, per this project's amendment discipline, with the resulting dependency logged as `G3`.

All five are planning-only, contain no credentials or configuration values, and close no Open Decision.

## 8. What this does not do

Closes no Open Decision (OD1–OD3 remain open). Ratifies nothing. Amends no governing document. Authorizes no code, schema, migration, or deployment. All identifiers remain proposals until the Board records a decision.
