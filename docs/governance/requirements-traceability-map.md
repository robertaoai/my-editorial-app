# Requirements Traceability Map
**Version:** v1.3
**Date:** 2026-08-19
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
| `CR-14` | FR-01, AC-01; `FN-GATES` §3.1 | **Covered as the ratified manual contract** (`D-194`, Addendum §2.4; choices in `D-197`). The customer wrote *"AI tags"*; the Chief Editor ratified **manual supply** and that reconciliation is recorded, **not** read back into the frozen sentence. **Future AI tagging/scoring is `PBL-11`**, unranked. `FB-05` closes on independent verification of this specification |
| `CR-15` | NG-01, NG-02, NG-08; SEC-03 defers auth to S6 | Covered (AP-01/MVP only; does not constrain P0-EVR) |
| `CR-16` | NG-01, NG-02, NG-03 | Covered. NG-03 is reinforced at Charter level |
| `CR-17` | NG-04, NG-05, NG-06, NG-07 | Covered |
| `CR-18` | NG-08, NG-09 | Covered |
| `CR-19` | O-01, K-01, K-02, `SC1`–`SC6`, AC-13 | Covered, **split**: the customer's single phrase "zero bypasses" becomes two criteria — sequence (unconditional) and independence (**provisional pending OD2**). The customer has not been told the second is conditional. → **FB-02** |

### Forward coverage

> **Dated snapshot, computed 2026-09-08 — not a live tally.** The counts below are a reading of
> §4 at that date, and `§8`'s maintenance rule re-derives them when a `CR` mapping changes.
> **Read §4's rows, not this summary**, if the two ever disagree: a hand-carried count is the drift
> mechanism `G55`/`G75` name, and incrementing one by hand is how it starts (`B-084`).

| Status | Count | CRs |
|---|---|---|
| Covered | 18 | CR-01…CR-05, CR-07…CR-19 — **`CR-14` joined 2026-09-08** as the ratified manual contract (`D-194`/`D-197`) |
| ⚠ Partially covered | 1 | CR-06 — schema cannot compute it (TC3) |
| ⚠ **Uncovered** | **0** | — *(was `CR-14`; see its row above. Coverage is specification coverage, **not** verification: `FB-05` still needs independent review)* |

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
| FR-06 | ⚠ **Project Scope — PSK-01 — Editorial correction, return, and revision control** | **Addendum §3.3.** The customer's PRD has no return or revision path at all |
| FR-07 | CR-07, CR-11 | — |
| FR-08 | CR-13 | Fourth filter added |
| FR-09 | CR-12 | — |
| FR-10 | ⚠ partial — CR-12 | Manual confirmation (T11) is implied by "mark LinkedIn-ready" but never stated |
| FR-11 | ⚠ **Project Scope — PSK-02 — Independent assurance and high-risk escalation** | **Addendum §13, Line 3 assurance.** Not requested |
| FR-12 | ⚠ **Project Scope — PSK-03 — Editorial continuity, delegation, and absence handling** | **Entry 007 S7, degraded mode.** Not requested |
| FR-13 | ⚠ **Project Scope — PSK-04 — Post-publication remedies and regulatory/court-order response** | **Entry 007 S3, regulatory retraction.** Not requested |
| NG-10 | ⚠ **Project Scope — PSK-05 — Human editorial accountability; no score-driven auto-bypass** | **TC9.** A team-added non-goal preventing a plan-pack behaviour from being built |
| NG-11 | ⚠ **Project Scope — PSK-06 — Editorial-commercial separation and restricted solicitation** | **Entry 006 §13, Entry 007.** Fundraising removed from workflow |

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

> **`S0`–`S6` above is the historical/derived scaffold sequence.** `SETUP-SPIKE-000` and `V1` are
> separate namespaces (`D-232`, from `docs/handoff/B-117`); `V1`'s qualified functional increments
> are `V1-SM05` (`MMF-V1-CORE`) and `V1-SM06` (`MMF-V1-USABLE`), both `Not started`. The qualified
> destinations are also recorded in `V1-BUILD-SPEC.md` §1 and `Modular_PRD.md` §8.1.

### 6.1 `V1-SM05`/`V1-SM06` row-level journey — DoR draft, not construction authorization `[V1]` (`D-232`, `B-117`)

**Source of record for the route/accountability facts below:** `docs/governance/factory-route-operation-crosswalk.md`
Sheet 1 — `ROUTE-PROD-1`: `ROLE-REPORTER` = R, `ROLE-DESK-EDITOR` = A, verified. **`ROLE-DESK-EDITOR`
is distinct from `ROLE-CHIEF-EDITORIAL-DESK`** (`D-175`, `raci-involvement-matrix.md`) — this table
does not alias them. Gate executors (T1–T6) are this project's existing target model, not redrawn
here.

| Step | Business route/accountability | Gate executor (target) | CR/FR/AC anchor | Slot | Evidence contract |
|---:|---|---|---|---|---|
| 1 | Chief Editor prepares the source package outside the system | No transition | `CR-09`, `FR-01`, `AC-01`/`AC-02` | `V1-SM05` | Manual record accepted by the UI — precondition for step 2 |
| 2a | `ROUTE-PROD-1` fixed for `V1-SM05` (no route chooser); Sheet 1 records Reporter `R`, Desk Editor `A` | Senior Journalist emits `EW`-start; no gate advances (`B-071` Round 56) | `CR-10` (route context, not itself an FR) | `V1-SM05` | **`UJ1` resolved** — order is: accepted manual record → Senior Journalist `EW` → `OP-PITCH` route classification → T1. Chief Editor does not execute `EW`/T1; Senior Journalist trigger does not complete T1 |
| 2b | `OP-PITCH` records and completes the Route-1 classification | `OP-PITCH`'s own completion evidence; `EW` is its **entry trigger**, not the other way round (`factory-route-operation-crosswalk.md` §3.2 stage table) | `CR-10` | `V1-SM05` | Logged pitch: topic, trend signal, route classification — precedes T1. **`OP-PITCH`'s executor is resolved for Route-1**: Reporter, per the business judgment stage that selects it (`factory-route-operation-crosswalk.md` §4.1, `D-233`) — Sheet 2's source multi-`R` row is preserved, not overwritten |
| 3 | Reporter performs the responsible intake work | Reporter executes T1 | `FR-01`, `AC-01`/`AC-02` | `V1-SM05` | — |
| 4 | Desk Editor remains route-accountable; not a gate executor | Investigator executes T2/T3 | `FR-02` | `V1-SM05` | — |
| 5 | Route accountability unchanged | Journalist executes T4 | `FR-03` | `V1-SM05` | — |
| 6 | Desk Editor `A` remains distinct from the T5 reviewer | Chief Editorial Desk executes T5 | `FR-04`/`FR-04a`, `AC-05a`/`AC-06a` | `V1-SM05` | **`UJ2` resolved** — observable evidence is the work-order/route record's audit projection (`route_id`, `raci_scope=factory_route`, route `R`, route `A`), append-only; not a gate, button, or T5-style sign-off. `OP-FINAL-SIGNOFF`'s accepted A-only contract (`D-233`, `factory-route-operation-crosswalk.md` §4.1) is separate from this route-accountability evidence and does not backfill it |
| 7 | Human Chief Editor is the final judgment owner, not Sheet 1's Desk Editor | Chief Editor executes T6 | `FR-04`, `CR-12` | `V1-SM05` | — |
| 8 | Same route/accountability record persists through correction | Revision returns only the affected scope | `CR-11`, `FR-07`, `AC-11`/`AC-12` | `V1-SM05` | — |
| 9 | Route completion visible on the board | Board reads state/topic/category/audit | `CR-13`, `FR-08`, `AC-13` | `V1-SM06` | — |
| 10 | Publication delivery does not redefine editorial accountability | Approved content becomes `ManualReady` | `CR-12`, `FR-09`/`FR-10`, `AC-14`–`AC-16` | `V1-SM06` | — |

**Publication boundary and display anchors — added 2026-09-20 (`D-243`, `D-244`).**

| Row | Current-scope note |
|---|---|
| Step 6 (`FR-04`/`FR-04a`) and the display of Line/RACI context in `V1-SM05` | The display is **non-enforcing** and is anchored to `FR-04` (accountable review) and `FR-05` (independence classification), with `SEC-01` and the applicable RACI source. `D-239` still excludes enforcement |
| Step 10 (`FR-09`/`FR-10`, `AC-14`–`AC-16`) in `V1-SM06` | V1 delivers only the LinkedIn target-level `ManualReady` event after the `business:T5` record. **`FR-10`/`AC-16` runtime confirmation and `Published` promotion are a V2-target item**; both keep their `[V1]` origin and no `[V1→V2]` marker is used. `AC-14`/`AC-15` are unchanged and the automated-WordPress part of `FR-09` is a V2 target |
| Namespaces | `business:T5` (newsroom judgment) is not technical `transition:T5`; `ManualReady` is a publication event, not an article state |

Behaviour lives in `FN-PUBLICATION-09-10-13.md` §12; the decisions are in the Register, not restated here.

**Slot outcomes and the requester — added 2026-09-21 (`D-247`–`D-251`).**

| Slot | Outcome (`D-249`) | `CR-19` |
|---|---|---|
| `V1-SM05` | A **limited Route-1 evidence slice**: records and displays accepted business-stage, role, task and evidence facts; **no `transition:T*` execution claim** | Partial |
| `V1-SM06` | Board/audit visibility plus the bounded LinkedIn `ManualReady` event; no `Published`, WordPress delivery or live-URL confirmation | Partial |

V1 therefore satisfies `CR-19` **partially**; the five-gate execution and Chief Journalist approval it names
are neither admitted nor assigned a destination (`D-247`). The sole authorized `ManualReady` requester is
`ROLE-SENIOR-JOURNALIST` by explicit grant (`D-250`); step 9's "Approved content becomes `ManualReady`" above
is read through that contract. Failure and replay behaviour for the core slice is `FN-GATES-01-05.md` §4.3, and
the single visual owner of the `ManualReady` normal, refusal and replay sequence is storyboard Panel A10.

**What this table does not do:** authorize construction or satisfy DoR. The consolidated DoR
checklist (`docs/v1/V1-BUILD-SPEC.md`'s `DOR-R1`–`DOR-R6`, `D-232` follow-on) supersedes an earlier,
incomplete four-item list here. **`B071-R204`'s three required-operation questions, resolved
2026-09-17 under `D-233`** (not `D-232`, whose own identity is the `V1-SM05`/`V1-SM06` slot
assignment): `OP-PITCH`/`OP-DRAFT` have a decided, Route-1-scoped application-selection rule
(`factory-route-operation-crosswalk.md` §4.1) — Reporter, not Journalist, for Route-1. `OP-FINAL-
SIGNOFF` has an **accepted** A-only execution contract (same §4.1). `OP-COPY-EDIT` is the one Sheet 2
operation already `VERIFIED` and unaffected.

**Forward engineering:** a customer want becomes an objective, a story, a requirement, a sprint, a test.
**Backward engineering:** a failing test resolves to a requirement, to a story, to a customer sentence with a verifiable hash — even years later, and even if nobody involved is still on the project.

That second direction is the reason this map exists. It is what makes the body of knowledge transferable.

### 6.2 Business / technical / planning `T`-namespace map — independently confirmed, not a new business decision `[V1]` (`D-233`, corrected 2026-09-17)

**Three unrelated things share the label `T` plus a digit. None is renamed here** — stored/API
identifiers are unaffected; this is a display/documentation qualification only. **The technical
namespace is split below into gate and non-gate rows — an earlier pass here grouped them as one
"gate/state-transition" label, which re-created the exact `Gate`-header conflation
`SPECS-TRANSITION-ENFORCEMENT.md`'s own qualifying note exists to remove; corrected.**

| Namespace | Meaning | Source | Example |
|---|---|---|---|
| `business:T1`–`T5` | The Chief Editor's newsroom judgment stages — each selects a contextual role, which then executes that stage's applicable Sheet 2 operations (§6.1 above; `factory-route-operation-crosswalk.md` §4.1) | Chief Editor's own business narrative | `business:T1` = Reporter stage |
| `transition:T1`–`T6`, `EG1`–`EG5` | Judgment gates — editorial state-changing transitions and their virtual-node executors | `FN-GATES-01-05.md`, `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` §3 | `transition:T5` = Independent review |
| `transition:T7`–`T11` | Non-gate transition mechanics — wildcard sources (`T8`/`T9`), a dynamic target (`T8a`), a **non-state-changing** publication event (`T10`), and a conditional rule (`T11`); not all are judgment gates | `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` §3.1 | `transition:T10` = publication-status event, no state change |
| `planning:T1` | An Alpha-Portfolio sprint-readiness item, unrelated to editorial gates | `docs/specs/SPECS-VERIFICATION-APPARATUS.md` | `planning:T1` = precondition for `S0` |

**Correction — `business:T3`'s route reference.** The Chief Editor's business narrative names
`business:T3` as evaluating candidate `ROUTE-PROD-3`, while also attributing that stage to the
Journalist role and comparing against baseline `ROUTE-PROD-1`. Sheet 1
(`factory-route-operation-crosswalk.md` §1) independently maps **Journalist `R` to `ROUTE-PROD-2`**,
not `ROUTE-PROD-3` (whose `R` is Investigator). The Journalist/route mapping is the more specific,
independently sourced fact, so: **`business:T3` evaluates candidate `ROUTE-PROD-2` against baseline
`ROUTE-PROD-1`, through the Journalist role.** `business:T2` (Investigator) retains the
`ROUTE-PROD-3`-vs-`ROUTE-PROD-1` comparison. Candidate evaluation does not itself change the
effective route — only an authorized route-selection/reclassification event does, per `D-176`.

### 6.3 `T1`–`T5` role-selection/task-workflow matrix and phase-lifecycle events — accepted intent,
propagated `[V1]` (`D-234`, `B117-R44`/`R45`/`R46`)

**Two-part phase-gate lifecycle, not a single close.** Judgment/selection happens as its own step
*inside* the phase-gate lifecycle, not as the whole gate closing before its tasks run: enter the `T`
phase-gate node → perform route/rank judgment → record the selected role as an append-only selection
event → dispatch the selected role's `EG`/task-workflow bundle → collect task and RACI evidence → mark
the phase gate complete only once its required bundle is satisfied → advance, or return only the
affected scope on revision. Candidate event names (not yet chosen as canonical vocabulary —
`B117-R45` stays open on naming only): `phase_entered`, `judgment_recorded`, `role_selected`, task
dispatch/completion, `phase_completed`.

| `business:T` node | Judgment/route comparison | Selected role | Task-workflow bundle after selection | Completion boundary |
|---|---|---|---|---|
| Pre-`T1` | UI request supplied; Senior Journalist processes and emits the entry output | `ROLE-SENIOR-JOURNALIST` (pre-gate processor, not `T1`'s selected role) | Intake/entry evidence only | `T1` may open; no phase gate has completed |
| `T1` | Establish `ROUTE-PROD-1` baseline/default | `ROLE-REPORTER` | `OP-PITCH` **is** `T1`'s own judgment/classification step, corrected 2026-09-17 (`B-117`/`B-118` Fix 1) — it is not a separate dispatched task. Only `OP-DRAFT` is dispatched, for the selected Reporter application context | Reporter task evidence complete; Final Sign-Off is not a Reporter task |
| `T2` | Compare `ROUTE-PROD-3` against baseline `ROUTE-PROD-1`, **split into branches `T2a`/`T2b`** (Judge-supplied decision tree, `docs/handoff/B-117`, `878da3a`) | `ROLE-INVESTIGATOR` | `T2a` (`C1` Research branch): `OP-RESEARCH`, Desk Editor `A`. `T2b` (`C4` Complex-Series branch): `OP-COMPLEX-SERIES`, Investigator selected as application `R`, `EDITORIAL-ROLE-EDITOR-IN-CHIEF` source `A` (`D-238`). Both branches are independently evaluated and recorded — a false branch is an explicit not-applicable result, never a silent absence. Full branch/join protocol: `factory-route-operation-crosswalk.md` §4.2 | Every applicable branch execution completes; the join records disposition and may retain `ROUTE-PROD-1` or select `ROUTE-PROD-3` only through the existing authorized append-only route-selection event — never silently |
| `T3` | Compare `ROUTE-PROD-2` against baseline `ROUTE-PROD-1` | `ROLE-JOURNALIST` | `OP-PITCH` is `T3`'s judgment step in the Journalist context (same Fix 1 correction as `T1`); `OP-DRAFT` is the dispatched task. Capture the approved newsworthiness fields (§6.4 below) as part of this judgment | New scoped task instances complete; prior `T1` evidence remains history |
| `T4` | Compare `ROUTE-FALLOUT-1` against baseline `ROUTE-PROD-1` | `ROLE-SENIOR-JOURNALIST` | `OP-RESEARCH`, `OP-COMPLEX-SERIES`, `OP-LEGAL-RISK` as applicable | Required/triggered task instances and evidence complete |
| `T5` | **Second-lens newsworthiness ranking**, corrected 2026-09-17 (`D-239`, `docs/handoff/B-118`) — supersedes the first-lens "accountability/readiness judgment" framing below | `ROLE-CHIEF-EDITORIAL-DESK` (phase/ranking layer — an application judgment router, never a source-RACI column) | Review `T1`–`T4` evidence; record the newsworthiness ranking (§6.4 below); route the ranking context to the route-ranked recipient (§6.4's routing matrix); display `OP-DRAFT`'s decided application `A` as readiness context only; display the `OP-FINAL-SIGNOFF` external-tracking reminder — **V1 does not itself validate, refuse, or execute Final Sign-Off** | Ranking/routing record complete; opens the UI publication-review flow; there is no `T6` in this namespace, and this record is never a task completion or publication approval |

**Retained versus superseded, relative to `D-234`/`D-235` (`D-239` disposition).** `T5`'s selected
role (Chief Editorial Desk, phase/ranking layer only), the seven-step phase-gate lifecycle (§6.3
above this table), the scoped-execution model, and the assurance-absence boundary below are
**retained unchanged**. **Superseded:** `T5` "performing source `OP-COPY-EDIT` responsibility" and
"`OP-FINAL-SIGNOFF` checks complete `A`-coverage" as actions `T5` itself executes — in V1, `T5`
**displays** `OP-COPY-EDIT`'s source provenance and an external-tracking reminder only; it does not
execute or check either. `D-233`/`D-237`'s `OP-FINAL-SIGNOFF` **contract** (who attests, five
conditions) remains the accepted specification — a future target, not something V1 builds. **New in
V1:** the newsworthiness-ranking output and its routing matrix (§6.4), which `D-234` did not have.

This matrix is the **application workflow overlay** — it does not rewrite Sheet 1/Sheet 2
(`factory-route-operation-crosswalk.md` §4.2) and does not rename any `transition:T`/`EG` identifier
(§6.2 above). The `T5` RACI normalization table and the `OP-FINAL-SIGNOFF` `A`-coverage extension are
recorded once, at `factory-route-operation-crosswalk.md` §4.2, and referenced here rather than
restated (`B117-R46`).

**Assurance boundary — reaffirmed, not newly created (`B117-R51`).** No independent assurance
workflow (Line 3 / independent review) exists anywhere in this matrix or in V1 — `T5`'s Chief
Editorial Desk ranking is a management/readiness judgment, opening the UI publication-review flow,
not an independent audit opinion. This is the same absence already recorded at Panel A5's `GA6`
gap (`docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` §1) and is not a new V1 node or
task.

### 6.4 `T5` newsworthiness-routing matrix and `T3` newsworthiness fields — V1 ranking/UI-assistance
boundary `[V1]` (`D-239`, `docs/handoff/B-118`, 2026-09-17)

**V1 boundary.** V1 provides UI/UX assistance for recording and reviewing the first- and second-lens
newsworthiness assessment — ranking, provenance display, and routing context. **Explicitly outside
V1:** workflow execution inferred from multiple source `R` values; Draft readiness-signature
validation/revision/return rules; Final Sign-Off evidence validation, refusal reasons, or
publication-state mutation; external-GRC outbound package/returned-report evidence; `T6` crisis
assurance; any independent Line 3 workflow or audit.

**`T5` newsworthiness-routing matrix** — the ranking recipient is route-dependent:

| Route family | Second-lens ranking recipient | Meaning in V1 |
|---|---|---|
| `ROUTE-PROD-1` | Desk Editor | Second-lens role record for low-impact daily news; not a natural-person workflow in V1 |
| `ROUTE-PROD-2` / `ROUTE-PROD-3` | Chief Journalist | Second-lens trending-versus-fade ranking record |
| `ROUTE-FALLOUT-1` / `ROUTE-FALLOUT-2` | `EDITORIAL-ROLE-EDITOR-IN-CHIEF` | Second-lens fallout-ranking record — the human editorial identity (`D-238`), distinct from access-control `ACCESS-ROLE-CHIEF-EDITOR` (renamed `D-251`) |
| `ROUTE-FALLOUT-3` / `ROUTE-GRC` | `EXT-GRC` | External judicial/GRC institutional-record context; no external workflow is built in V1 |

**Approved `T3` newsworthiness fields**, captured as part of `T3`'s judgment above:

| Field | Required V1 meaning |
|---|---|
| Baseline period and current period | Shows the comparison window |
| What held | Facts or projections that remain robust |
| What accelerated or mutated | New data, velocity changes, or emerging concepts |
| What weakened or was overstated | Claims later evidence undercut |
| Newsworthiness score | Integer score from 1 to 10 with one-sentence justification |
| Fresh sources | Three to five high-signal links or reports that changed the signal |
| Scoped `T3` purpose | Identifies the Journalist's comparison/angle context, so it cannot duplicate `T1` Reporter classification |
| Route and revision reference | Keeps `T3` evidence attributable to its route and current content revision |

**A ranking or routing record is never a signature, publication approval, or Line 3 assurance** — the
UI must distinguish `required externally`, `recorded locally as reminder`, and `verified complete`;
V1 only owns the first two.

**Status:** accepted Judge intent (`D-234`), propagated into this map, the crosswalk (§4.2) and
`FN-GATES-01-05.md` (§3.0a) in this pass. Not yet propagated: canonical lifecycle-event naming
(`B117-R45`, candidates only), the storyboard full redraw beyond the overlay panel (`B117-R50`), and
any persisted/API/code change (explicitly deferred, `D-234`/`D-235`).

---

## 7. Customer feedback register

Items to route **to the customer via the project sponsor**. None is a defect in `PRD.md`; each is a recommendation, a clarification, or a scope disclosure the customer is entitled to.

| ID | Item | Type | Priority |
|---|---|---|---|
| `FB-01` | **State vocabulary.** The customer's five gate names (Reported → Investigated → Journaled → Senior Reviewed → Chief Approved) differ from the governing set's ten states. Recommend adopting one vocabulary in both documents — either is workable, but two invites mistranslation at every handoff | Recommendation | High |
| `FB-02` | **"Zero bypasses" is two things.** The governing set splits it into sequence compliance (unconditional) and review independence (**provisional pending OD2**). The customer should know one half is conditional and that a negative OD2 resolution is a pre-launch stop | **Disclosure** | **High** |
| `FB-03` | **Fourth board filter.** The customer named state, topic, category. The team adds Line assignment. Confirm it is wanted | Change request | Medium |
| `FB-04` | **Six items with no customer origin** — four functional requirements (FR-06 return with reason, FR-11 Line 3 audit, FR-12 degraded mode, FR-13 regulatory retraction) and two non-goals (NG-10, NG-11). All justified by the Addendum or Entry 007. Customer acceptance needed, since this is funded scope they did not request. *(Corrected from "five" 2026-08-17 — see v1.1 changelog)* | **Change request** | **High** |
| `FB-05` | **Answered 2026-09-08 — producer specified; reconciliation and verification outstanding.** `CR-14` is **in v1 as a manual contract**: `D-194` ratified the Chief Editor's manually entered trigger package and `D-197` selected the `T1` executor (`A1` — Reporter agent executes, Chief Editor recorded as supplier) and author/date handling (`B1` — auto-extraction retained). `FN-GATES` §3.1 carries the behaviour. **Future AI tagging/scoring is `PBL-11`**, unranked. **Closes on independent verification, not on this entry** | **Gap — answered** | **High** |
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
- **2026-08-19 v1.3:** Scoped `CR-15`'s coverage note to AP-01/MVP, so a future reader does not mistake the separately chartered P0-EVR client surface for a breach of the single-account requirement. Also corrected this document's own header, which still declared v1.1 while the changelog already carried a v1.2 entry — the header was not bumped when the Graphify scope normalization landed. Same defect class this file's §1 names as the project's recurring failure mode, this time in the version field itself. No customer statement changed, no content hash affected.
