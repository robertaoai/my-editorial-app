# Consolidated Gap Register — Implementation Timeline

**Date:** 2026-08-18 *(restructured by timeline; content preserved)*
**Status:** Planning only. No code, no migration. Index and register for the 2026-08-18 analysis set.
**Normalized against:** `graphify` queries on requirement scope, publication targets, monetization boundary, trigger/intake vocabulary, and account boundary; plus direct reads of the governing set, the five governance documents, and the sprint plan.

## 1. How to use this document

Items are grouped by **when a decision is needed**, not by what kind of item they are. A gap, a question, a remediation step, and a Board resolution that all gate the same moment appear together, because they are approved together.

Work top to bottom. Each phase names what it gates and what it costs. §11 is the ID lookup for anyone arriving with a specific `G`, `GA`, `Q`, `Step`, or approval number.

**One authoritative statement per item.** Each item is described in exactly one phase; everywhere else it is referenced, not restated. This is deliberate — restating a fact in two places is how this project's recurring drift defect starts.

### Document set

| Document | Job |
|---|---|
| `2026-08-18-sprint-readiness-consolidated.md` | Go/no-go for Sprint S0; reconciles the 9 newly-discovered commits and 5 new governance files |
| `2026-08-18-board-packet-checklist.md` | Plain-language approve/defer on all 42 pending Board decisions; addenda on `B-P0-17`, `B-P0-06`, `APD-09`, and the shared Topic Brief |
| `2026-08-18-first-engagement-lock-in.md` | The seven decisions needed to get one client, one topic, to publication |
| `2026-08-18-poc-charter-separation-and-revenue-model.md` | POC/MVP charter separation; consolidated revenue rule |
| `2026-08-18-transition-intent-vocabulary.md` | Proposed controlled vocabulary for `event_type` + intent codes, replacing free-text reasons |
| `2026-08-18-audit-model-and-remediation-plan.md` | CPA-style audit model; gaps `GA1`–`GA9` and the eleven remediation steps that close them |
| `2026-08-18-t0-execution-runbook.md` | Step-by-step procedure for the six T0 items — exact text, version discipline, verification |
| `2026-08-18-storyboard-business-and-digital-twin.md` | Both lanes panel by panel with data flow; shows gaps as missing panels |
| `2026-08-18-raci-human-vs-digital-twin.md` | Human RACI (`A`) versus virtual agents (`R`); defines `G19`, `G20`, withdraws `G21` |
| `2026-08-18-retraction-as-publication.md` | A correction/retraction is a publication; defines `G22`, `G23` |
| `2026-08-18-publication-transaction-record.md` | `pub_target` vs `platform_type` as orthogonal axes; GRC completeness evidence; defines `G24` |
| `2026-08-18-board-decision-sheet.md` | **The 42-item verdict sheet** in house vocabulary |
| `2026-08-18-consolidated-gaps-and-open-questions.md` | *(this file)* Timeline register and ID lookup |

## 2. Timeline at a glance

| Phase | Gate | Open items | Character |
|---|---|---|---|
| **T0** | None — do now | 6 | Documentation only. No decision required, nothing depends on it |
| **T1** | Before Sprint S0 | 16 | Chief Editor decisions. The sprint plan estimates the `R1` subset at under an hour |
| **T2** | Before the S1 migration | 8 | **One design pass** — 6 migration decisions + `G19`, `G20`. Same append-only table |
| **T3** | Before POC launch | 5 + Board packet | **Runs parallel to T1/T2.** No build dependency |
| **T4** | Before Sprint S2 | 8 | Independence and OD-boundary decisions |
| **T5** | Before production / S6 | 3 | Enforcement completes; gated on `OD1`–`OD3` |
| **TX** | Not internally closable | 7 | Needs counsel, needs `OD3`, or needs the build to produce evidence |

### The timeline is not a single line

**T3 runs in parallel with T1 and T2.** The manual POC lane is designed as a no-build lane — paper templates, manual invoicing, Chief-Editor-only access. Making its charter wait on S0/S1 would stall commercial evidence for no technical reason, and that evidence is what the portfolio closure decision depends on.

```
T0 ──▶ T1 ──▶ T2 ──▶ T4 ──▶ T5
 └────▶ T3 (POC lane, independent) ────────▶ feeds evidence back into T4/T5
```

`TX` sits outside the sequence entirely: its items are unblocked by external counsel, by an `OD3` answer, or by evidence the build has not yet produced.

---

## 3. T0 — Do now *(no decision, no dependency)*

Every item here is documentation-only, closes a real gap, and is blocked by nothing.

| Item | Action | Closes |
|---|---|---|
| `G4` | Add "coverage scoped to AP-01" to `CR-15`'s row in `requirements-traceability-map.md:142`. Without it, a future reader sees `CR-15` marked Covered and a client surface existing, and reads a violation | `G4` |
| `G8` | State that the Client-First Exclusivity Window is P0-EVR-only. AP-01's research-discovered articles have no client and no window; unstated, the concept leaks into the shared core | `G8` |
| `G14` follow-up | Annotate `NG-02` with its v1 scoping. The decision is made — see §10 — but the annotation is outstanding, and it is what stops a future reviewer re-deriving it | `G14` |
| **Step 1** | Register `PSK-10` — immutable audit reporting and report reproducibility. No Customer Request asks for it; unregistered it is undisclosed funded scope, the defect `FB-04` named | `GA8` |
| **Step 2** | State the immutability rule once, in the governed spec: *an issued report is never edited and never deleted; a superseded report is answered by issuing a new report that cites the original* | `GA2` (stated half) |
| **Step 3** | Disclose that the Chief Editor's disposition is a **management assertion** and that no independent audit opinion exists. Disclosure only — the substantive fix is `Q2` in T1 | `GA6` (disclosure) |

**Standing discipline, not a task:** `G18` — two gap-numbering series exist (`G` here, `GA` in the audit plan). §11 is the cross-reference. Raise any new gap in one series only.

---

## 4. T1 — Before Sprint S0 *(Chief Editor decision batch)*

The sprint plan's `R1` framing applies: these are answerable in one sitting, and several gate later sprints rather than S0 itself. Answering them early is what makes the later sprints executable.

### 4.1 No dependency — can start immediately

| Item | Action | Gates |
|---|---|---|
| `R3` | Verification apparatus: test runner (`bun test`, matching `packageManager: bun@1.1.30`), one passing test, CI running typecheck/lint/tests. **Currently no runner, no `__tests__/`, no CI, and `next.config.ts` disables type and lint gates at build (`TC6`).** Until this exists, no sprint DoD citing an AT-id is verifiable | Every later DoD |
| `G5` / `QE` | Extend `A7` to cover **both** `CLAUDE.md` and `AGENTS.md`. Both open by directing agents to the plan pack as "a complete, correct plan" — which `D5` records as diverging from the governing set. `A7` names only `CLAUDE.md`; `AGENTS.md` was added later by Codex with the same defect | `R0` completion |
| `Q0` | Record `A2`'s ratification in Addendum §2.4 — `Ratified?`, date, approval artifact. The re-scoping text currently sits in `Resolved?`. Sprint plan calls this "highest value per minute on this list" | `R2`, and the register's honesty |
| `R2` | Close deviation register `D4` properly — depends on `Q0`, plus amending Blueprint §2.2/§7/D1 and Business Case §A2 off FastAPI | `D4` |

### 4.2 Decisions that gate later sprints

| Item | Question | Gates |
|---|---|---|
| `Q2` | Line 3 executor — **external** for v1, or state plainly that v1 has no independent assurance. **Not** the Chief Editor (`A23`: naming him collides Line 2 with Line 3). Also the substantive resolution of `GA6` / audit **Step 8** | S5; `GA6` |
| `Q3` | Publish path — Next.js route handler (recommended, `TC8`) or Edge Function | S4 |
| `Q4` | `G9` / OD2 trip-wire scope — post-launch monitoring, or in-product now. Sharper since `INDEPENDENCE_INSUFFICIENT` became a countable intent code | S5 DoD |
| `Q5` | Retry scheduler — `pg_cron`, Vercel Cron, or drain-on-demand and drop the 5-minute promise | S4 |
| `Q6` | Re-enable `ignoreBuildErrors` / `ignoreDuringBuilds` once CI exists | S0 DoD onward |
| `Q12` | (a) Re-anchor the Three Lines Model citation — superseded 2026-07-08; (b) **separately**, re-derive `SEC-01` against the new blended-role guidance. Two parts, deliberately not merged | S2's Line-exclusivity build |

### 4.3 Governance placement

| Item | Question | Gates |
|---|---|---|
| `QD` / `G6` | Where the revenue rule lands so it **governs** — `PSK-06` or sprint plan §11. It currently exists only in a journal file, and journals record decisions rather than creating them | Force of the rule |
| `QC` / `G10` | Is the domain assignment intended — public root for POC, `chief.` subdomain for the anchor MVP? Defensible if the public service is the commercial front door, but it inverts project seniority and should be conscious | Charter + exposure design |
| `Q8` / `R5` | Route `FB-01`…`FB-08` to the customer via the sponsor. Three are material before S1: **`FB-04`** (six undisclosed funded items), **`FB-05`** (`CR-14` has no FR), **`FB-02`** (half of "zero bypasses" is conditional on OD2 and the customer has not been told) | Which scope the customer has accepted |
| `R4` follow-on | Propagate `PSK-01`…`PSK-09` into `requirements-traceability-map.md` §5 and `Modular_PRD.md` §7.2. The scope reconciliation itself landed in `e3fa9b7`; the `PSK` labelling did not | `FB-04` closure |
| **`G23`** | Restate `US-13`/`FR-13`. It currently says a regulatory order *"bypasses T8 entirely"* — which would skip publishing the retraction notice. The order bypasses **deliberation**, not **publication mechanics**: the notice still must be drafted, mirrored to every target, and logged. `FR-13` is unanchored Project Scope, so this is a wording fix | Correct retraction shape |
| **`G24`** | State the mirror-the-spread boundary: **every channel the business published to**, evidenced by the publication transaction record, with third-party amplification explicitly outside it. Unstated, it reads as an unbounded duty that cannot be discharged or evidenced | Auditable remedy scope |

---

## 5. T2 — Before the S1 migration *(one design pass)*

**These six cannot be settled sequentially.** All alter `workflow_transitions`, which `NFR-02` makes append-only with UPDATE and DELETE revoked. A decision deferred past this migration is a decision that requires migrating an append-only table.

| Item | Decision | Related gaps |
|---|---|---|
| `Q11` | Field rename: `judgment_independence_status` → `line_boundary_crossed` (mechanism) + `identity_assurance` (`self_asserted` \| `authenticated`) + reserve `judgment_independence` null until an instrument exists. **Propagates into six documented locations** — `TR-DM-02`, `NFR-03`, `AC-07`, `AC-08`, `G-02`, and `FR-05`'s Outputs line. The old name asserts a cognitive fact the code can only prove structurally | `G16` |
| `QA3` | Which fields stay **typed columns** versus moving into the **versioned JSON payload**. Enforcement (`NFR-01`) and filtering (`FR-08`) only work on typed columns; inside JSON, Postgres cannot enforce NOT NULL, allowed values, or foreign keys, and the sequence guard cannot read it | `G17` |
| **Step 4** | Report record shape — identity, as-at timestamp, tenant, template version, rule-set version, frozen data snapshot | `GA1`, `GA3`, `GA4` |
| **Step 5** | Which tables become insert/read-only. Today the answer is one. Reports must join it; `articles` cannot, because it mutates by design — which is *why* reports need frozen snapshots rather than references | `GA2` |
| **Step 9** | Retention floor and table classification. Set `DATA_RETENTION_ARCHIVE_DAYS` at or above the statutory floor, redefine "archived" as retrievable rather than deleted, and confirm `trend_signals` immutability | — |
| **Step 11** | Cascade behaviour and archival restatement. `on delete restrict` would make `GA9` structurally impossible rather than merely discouraged. **Migration `0002` — `0001` is never edited** | `GA9` |

**`Q10` is answered** — tenancy is in. See §10.

### 5.1 Two further gaps that must be settled in the same pass

| Item | Decision | Why it cannot wait |
|---|---|---|
| **`G19`** | The **notice-as-article** model: a notice type, a notice→original reference, publication targets inherited from the original, and a *derived* superseded status on the original. **No new article states** — a correction or retraction is a publication that re-enters the same gates | The reference sits on records the migration creates. Retrofitting a relationship across append-only history is the cost this window exists to avoid |
| **`G20`** | A **risk-tier dimension** on articles. `FR-11` (Line 3 triggered audit), `SEC-05` (high-sensitivity review), and `B-P0-06` (low-liability cohort boundary) each depend on knowing the tier; nothing records it | A tier added later must be **inferred** retrospectively across an append-only transition history |

> **`GA9` is the live one.** `0001_init.sql` defines `workflow_transitions.article_id` as `references articles(id) on delete cascade`. Deleting or archiving an article fires the cascade and deletes every transition row `NFR-02` declares must never be deleted — silently, no error. This is a contradiction in **applied SQL**, not documentation drift, and it exists independently of archival.

---

## 6. T3 — Before POC launch *(parallel track — no build dependency)*

### 6.1 Workstream items

| Item | Action | Note |
|---|---|---|
| `G7a` | **Charter the manual P0-EVR lane.** The PoC proposal designs it as paper templates, manual invoicing, Chief-Editor-only access, explicitly "no build" — so it needs nothing from S0/S1/S2. Unblocks `B-P0-06` and the commercial evidence the portfolio closure decision depends on | Largest item in this phase |
| `QB` / `G3` | State explicitly that the P0-EVR charter **outranks** `board-proposal-…-poc.md` §8.2 and `B-P0-16`, which exclude "customer accounts or self-service onboarding." A charter outranks a proposal, but until it is stated, two live documents disagree | Board |
| **Step 7** | Auditor access model versus tenant isolation. Tenancy isolates customers for indemnity; an auditor must read across tenants. Both correct, reconciliation undesigned | Charter-relevant |
| **Step 10** | Disposal authority and the disposal record. Every disposal mechanism **bypasses** the protection it removes data from, so the real control is who may execute the bypass — and `§0.3` records one human. Requires a certificate-of-destruction-style record written *before* disposal, stored outside the disposed table | Not S1-blocking; nothing can be disposed until the floor elapses |
| **`G22`** | Add **Expression of Concern** to the remedy ladder — a temporary public warning while a serious claim is under active investigation and unresolved. It is the post-publication equivalent of `Hold`; without it the only honest options are premature retraction or silence. **New scope: creates a public-facing editorial act that did not previously exist**, so it needs Board approval, plus a fifth intent code | Board |

### 6.2 Board packet — 42 pending, none approved

| Batch | Range | Count | Recommended |
|---|---|---|---|
| Portfolio decisions | `APD-01`…`APD-05`, `APD-09`, `APD-10` | 7 | Approve — labels and guardrails, no activity authorized |
| PoC resolutions | `B-P0-01`…`B-P0-22` | 22 | Approve, **except `B-P0-06` → Defer** until its ten boundaries carry real values |
| Media-feedback dispositions | `MFB-01`, `MFB-02`, `MFB-03`, `MFB-07`, `MFB-08`, `MFB-09`, `MFB-10` | 7 | Approve — documentation and disclosure dispositions |
| *(deferred to T4)* | `APD-06`…`APD-08`, `MFB-04`…`MFB-06` | 6 | See §7 |

**Total across all batches: 42.** Full plain-language rationale per item is in `2026-08-18-board-packet-checklist.md`; every item marked *(cond.)* there is provisional, not settled.

**`B-P0-06`'s ten boundaries** are the gate for real client work: topic in/out list, spend cap, time stop-loss, payment mechanics, cohort/WIP limit, originality-search sign-off, exclusivity window default (`B-P0-17`, 30 days suggested), a named high-liability escalation contact, a `Q7` legal placeholder, and a fixed review date.

**Not yet in any packet:** `B-P0-23` — optional ghostwriting / alternate-angle drafting as a separate paid service. Raised in the `B-P0-17` addendum and deliberately kept out of that item rather than inheriting approval by proximity.

---

## 7. T4 — Before Sprint S2 *(independence and OD boundary)*

S2 builds the four-eyes evaluator, Line assignment, and the blind first pass at T5. Its own DoD records: *"OD2 negative voids this sprint's model entirely."*

| Item | Decision |
|---|---|
| `APD-06` | Stop using "OD4" for two different things — retain it as Proposer → Critics → Judge only |
| `APD-07` | If an OD4 trigger fires, it becomes its own separately chartered project |
| `APD-08` | Judgment-rule approval sits outside both the phase-gate system and any future OD4 system |
| `MFB-04` | Interim Chief Editor final-authority / virtual Chief Journalist advisory boundary. **Must stay labelled temporary** — it stands in for `OD1` |
| `MFB-05` | While OD2 is unknown: a provisional evidence/challenge ladder plus item isolation, **retaining the negative-OD2 hard stop**. The most consequential item in the packet — compensating controls must never silently convert a negative OD2 result into an affirmative one |
| `MFB-06` | Judgment-rule governance under `PSK-09`, outside the systems that apply the rules |
| `Q12(b)` confirm | `SEC-01`'s dual-role block is built in S2 against a stale citation. Build to the rule now; do not treat it as final until `Q12(b)` confirms it holds against the 2026-07-08 text |
| `G7b` design | Systematized POC exposure: client self-submission, separate surfaces, tiered delivery. Depends on S1 (tenancy, report records) and S2 (`actor_id`, `line_assignment`, role separation). **Design here; enforcement completes at T5** |

---

## 8. T5 — Before production / S6

| Item | Action |
|---|---|
| `G7b` enforcement | `SEC-03` replaces permissive RLS with owner- and role-scoped policies. This is where the POC/MVP exposure separation becomes *enforced* rather than *intended* — and `SEC-03` is itself gated on `OD1`–`OD3` |
| `G9` | Scope note before S4 is specified: `FR-09`/S4 build WordPress automation, but the recommended first channel is LinkedIn (ManualReady, no automation). If Ghost/Substack follow, the WordPress branch may be built for a channel never used |
| Production gate | Go-live requires `OD1`, `OD2`, `OD3` — see `TX`. Phase 0 is not gated; production is |

---

## 9. TX — Not internally closable

These sit outside the sequence. Nothing in this analysis set can close them, and no amount of documentation substitutes for what they actually need.

| Item | Why | What would unblock it |
|---|---|---|
| `OD1`, `OD2`, `OD3` | Not closable at scaffolding — the evidence that answers them is what the build produces | Operating data from S1–S5 |
| `OD4` | Retained and deferred, exactly as Proposer → Critics → Judge | Its own Charter trigger firing, plus a new Board authorization |
| `Q1` | Line 1 roster shape | An `OD3` answer |
| `Q7` | `SEC-04`/`SEC-05` ownership. **No owner** — no legal function exists, and `XF-09` records Legal as `Unowned`/`Blocked`. Blocks production, not Phase 0 | Qualified external counsel |
| `G15` ↔ `GA5` | **Overlapping but distinct.** `G15` asks *which data-protection regime applies*; `GA5` asks *how retention and erasure coexist*. **Do not close one on the strength of the other.** Statutory floor stated (5 years, IRAS/ACRA); three questions remain: whether editorial workflow records are *accounting records*, how retention interacts with erasure for third-party PII inside sourced articles, and whether PDPA requires a disposal point after year 5 | Qualified external counsel |
| `G11` | No arbitration rule for concurrent Claude/Codex edits to `docs/`. No forcing function; a conflict would surface as silent divergence | A Chief Editor rule on which agent is authoritative |
| **Step 6** | The retention/erasure escalation itself — partly applied via the statutory floor, remainder escalated | Same counsel as `G15`/`GA5` |

---

## 10. Already closed *(decisions recorded 2026-08-18)*

| Item | Resolution |
|---|---|
| `Q10` / `QA` / `G1` | **Tenancy belongs in the S1 schema.** Nothing should structurally foreclose white-labelling or agency partnerships. Matches `Q10`'s own cost asymmetry — *"a column now and a migration of an append-only table later."* **No multi-tenant feature is authorized; only the boundary** |
| `QA2` / `G2` / `G13` | **One isolation boundary, not two.** Each paying POC customer is its own tenant, never grouped by shared company email domain — a shared domain does not establish a shared legal party. Rationale: platform indemnity and issue isolation. "Engagement" becomes a work-package identifier *inside* a tenant |
| `G14` | **`NG-02` is a v1 lock, not a permanent exclusion.** Verified against the non-goals table's own framing: `NG-03` is *"Charter-level **v1** exclusion"*, `NG-07`/`NG-08` are dated deferrals, `NG-09` is *"rejected **for v1**, with a two-branch reopening condition"*. `NG-02`'s rationale — *"Operating model is one human"* — describes v1 and lapses when the business has more people. No Charter act required *(annotation still outstanding — T0)* |
| `CR-15` | **Resolved by separation, not interpretation.** It governs AP-01/MVP unchanged; P0-EVR is separately chartered and was never in its scope |
| Revenue rule | *Revenue may attach to the business and to the service. Revenue must never attach to a specific editorial decision.* Satisfies `NG-03` (payment outside the app), `NG-11` (no per-story solicitation), `CR-16` *(governed home still outstanding — `QD`, T1)* |
| Exclusivity window | Three data points: client-confirmed length, delivery-triggered start, calculated end. **Nothing auto-publishes** — `NG-10`/`TC9` forbid it |
| `G7` split | Split into `G7a` (manual lane, no build dependency, T3) and `G7b` (systematized exposure, T4/T5). An earlier entry called `G7` "the largest single open work item" without distinguishing halves with **opposite** dependency profiles |
| **`G21` withdrawn** | The CSV RACI and the gate table describe **different layers**, not competing models: CSV roles are **human** (`A` — Accountable), the five gates are **virtual agents** (`R` — Responsible). With one natural person, all human accountability collapses to the Chief Editor — so `raci-involvement-matrix.md`'s *"A is invariant"* is **correct for v1**. The "conflict" was an artifact of reading both as one layer |
| Enum reconciliation | **Withdrawn.** `pub_target` (what the business can automate) and `platform_type` (which channel) are **orthogonal axes**, not duplicates. Merging them would destroy the distinction that makes the manual publication path expressible |

---

## 11. ID lookup

| ID | Phase | ID | Phase |
|---|---|---|---|
| `G1`, `G2`, `G13`, `G14` | §10 closed | `GA1`, `GA3`, `GA4` | T2 (Step 4) |
| `G3` | T3 (`QB`) | `GA2` | T0 (Step 2) + T2 (Step 5) |
| `G4`, `G8`, `G18` | T0 | `GA5` | TX |
| `G5`, `G6`, `G10` | T1 | `GA6` | T0 disclose, T1 resolve (`Q2`) |
| `G7a` | T3 | `GA7` | T3 (Step 7) |
| `G7b` | T4 design, T5 enforce | `GA8` | T0 (Step 1) |
| `G9` | T5 | `GA9` | T2 (Step 11) |
| `G11`, `G15` | TX | `Q0`, `Q2`–`Q6`, `Q8`, `Q12` | T1 |
| `G12` | T3 (§6.2) | `Q1`, `Q7` | TX |
| `G16`, `G17`, `G19`, `G20` | T2 | `Q10`, `QA`, `QA2` | §10 closed |
| `G21` | **withdrawn** — §10 | `G22` | T3 |
| `G23`, `G24` | T1 | | |
| Steps 1–3 | T0 | `Q11`, `QA3` | T2 |
| Steps 4, 5, 9, 11 | T2 | `QB` | T3 |
| Step 6 | TX | `QC`, `QD`, `QE` | T1 |
| Steps 7, 10 | T3 | `APD-01`–`05`, `09`, `10` | T3 |
| Step 8 | T1 (`Q2`) | `APD-06`–`08` | T4 |
| `B-P0-01`–`22` | T3 (`06` deferred) | `MFB-04`–`06` | T4 |
| `B-P0-23` | T3, draft only | `MFB-01`–`03`, `07`–`10` | T3 |
| `OD1`–`OD4` | TX | | |

---

## 12. Scope limits

Closes no Open Decision (`OD1`–`OD3` remain open). Ratifies nothing. Amends no governing document. Authorizes no code, schema, migration, or deployment. All identifiers — `PSK-10`, `MFB-*`, `APD-*`, `B-P0-*`, phase labels `T0`–`TX` — remain proposals until the Board records a decision.

**Consistency note.** The seven documents in this set are internally consistent as of this entry. One contradiction was found and corrected: the checklist's Addendum 1 stated the client could not enter their own window value, reasoning inside a single-charter assumption that the charter separation replaced. It is struck and annotated rather than deleted, per this project's amendment discipline, with the resulting dependency logged as `G3`. All seven are planning-only and contain no credentials or configuration values.
