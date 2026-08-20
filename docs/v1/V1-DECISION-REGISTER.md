# V1 Decision Register

**Date:** 2026-08-18
**Last approval update:** 2026-08-19
**Status:** **Operative.** This is the authoritative record of what is approved for v1.
**Authority:** Chief Editor approval recorded 2026-08-18 against the recommendations in `docs/journal/2026-08-18-board-decision-sheet.md`.
**Supplemental authority:** Chief Editor approval recorded 2026-08-19 for `D-22`–`D-28`.
**Scope of supersession:** the thirteen `docs/journal/2026-08-18-*.md` analysis files only — see §6. **The governing set is not superseded** and cannot be by this document.

---

## 1. Approval summary

| Verdict | Count | Effect |
|---|---:|---|
| **Approved — Board items** | 32 | Effective now, no follow-up |
| **Approved — design decisions** `D-01`…`D-14` | 14 | Effective now; three carry conditions `C-10`–`C-12` |
| **Approved — artifact decisions** `D-15`…`D-21` | 7 | Effective now, no follow-up |
| **Approved — governance and financial decisions** `D-22`…`D-28` | 7 | Effective now; constraints are part of each decision |
| **Approved with conditions** | 12 | Effective now, **each carries a follow-up — §3** |
| **Deferred** | 2 | Not approved; preconditions stated |
| **Rejected** | 0 | — |

**60 decisions approved in total; 12 of them conditional.** Board items are `APD-*`, `B-P0-*`, `MFB-*`; design, artifact, governance, and financial decisions are `D-*`.

**Approved unconditionally:** `APD-01`–`08`, `APD-10`; `B-P0-01`, `02`, `04`, `05`, `07`, `09`–`15`, `18`–`22`; `MFB-01`, `02`, `06`, `08`, `09`, `10`; plus the `D-*` decisions in §2. Their stated boundaries are part of the approval, not unresolved follow-ups.

## 2. Design decisions approved

| # | Decision | Effect on v1 |
|---|---|---|
| D-01 | **Tenancy boundary in the S1 schema.** Each paying customer is its own tenant; never grouped by shared email domain. Boundary only — no multi-tenant feature | S1 migration |
| D-02 | **`CR-15` scoped to AP-01/MVP.** The separately chartered POC surface was never in its scope | T0 documentation |
| D-03 | **`NG-02` is a v1 lock, not a permanent exclusion.** No Charter act required | T0 documentation |
| D-04 | **Single revenue rule.** Revenue may attach to the business and the service, never to a specific editorial decision | T1 placement |
| D-05 | **One editorial engine, two exposures.** The pipeline is never forked | Architecture invariant |
| D-06 | **Retraction is a publication.** A notice is an ordinary article citing the original, running the same gates. No new article states | S1 design |
| D-07 | **`on delete restrict`** replaces `on delete cascade` on `workflow_transitions.article_id` | Migration `0002` |
| D-08 | **Publication transaction record** covers automated and manual acts at equal fidelity; retraction targets inherit from the original | S1 design |
| D-09 | **Mirror-the-spread boundary:** channels the business published to, per the transaction record. Third-party amplification explicitly outside | T1 documentation |
| D-10 | **`FR-13` bypasses deliberation, not publication.** A binding order skips *whether to retract*, never the notice or its logging | T1 wording |
| D-11 | **Risk-tier dimension** on articles — `FR-11`, `SEC-05`, `B-P0-06` all depend on it | S1 migration |
| D-12 | **`event_type` + intent code**, two levels, free-text `reason` retained | S1 design |
| D-13 | **`PSK-10`** registers immutable audit reporting as Project Scope | T0 documentation |
| D-14 | **Report immutability:** an issued report is never edited or deleted; supersede with a new report citing the original | T0 documentation |
| D-15 | **`docs/v1/` named as operative** in `CLAUDE.md`, `AGENTS.md`, and `docs/README.md` — nothing currently points to it (`G25`) | T1 |
| D-16 | **EMS audit citation resolved** — retain the report under `docs/governance/`, or annotate both citations to record it as unretained and name what stands in its place. **Never delete the citation** (`G26`) | T1 |
| D-17 | **Draft migration `0002` held outside `supabase/migrations/`** until all eight T2 decisions are settled. That directory is the apply set; "do not apply" is a note, not a property of the location (`G27`) | S0 |
| D-18 | **The 14 manual PoC templates become an owned work item**, sequenced after the charter and before the first engagement. Chartering authorizes the lane; templates make it operable (`G28`) | T3 |
| D-19 | **Artifact inventory attached to each sprint's Definition of Done** — a sprint is done when its named files exist, not when its prose is satisfied (`G29`) | T1 |
| D-20 | **Output contract added to `CLAUDE.md` and `AGENTS.md`** — every analysis response ends with an Approve / Approve-with-conditions / Defer / Reject table in house vocabulary; conditions name their follow-up phase (`G30`) | T1 |
| D-21 | **A T1 execution runbook is produced first**, on the T0 pattern. T1 carries 20 items and no procedure; T0 carries 6 and has a full one (`G31`) | T1 |
| D-22 | **Dual financial terminology.** `Provider Cost Baseline` keeps the project-management meaning: base delivery cost plus contingency for identified risks. An older project that used “Cost Baseline” for the customer-payable amount must label it **`Legacy Commercial Cost Baseline`** and map it to `Contract Price/Payment Baseline`; new projects may not use the unqualified legacy meaning | Downstream Charter interpretation; future Charter template |
| D-23 | **Price, cost, cash, revenue, and value remain separate.** `Contract Price/Payment Baseline` is the agreed customer-payable amount. Provider baseline, actual cost, invoiced amount, cash received, recognized project revenue, other-channel revenue, contribution margin, and evidenced business value are separately reported and never treated as synonyms | Provider financial plan and portfolio reporting |
| D-24 | **Reserve boundary.** The provider's identified-risk contingency sits inside the Provider Cost Baseline. A consumer-held management reserve for unforeseen circumstances remains outside the provider baseline and contract price unless an authorized contractual change brings it into scope | Provider plan; change control |
| D-25 | **Two Charter role-signature blocks.** The Project Sponsor signs Charter authorization. The Project Manager signs preparation completion and acceptance of day-to-day project-management accountability. One Project Manager signature covers both preparation and operational role acceptance; no third Project Manager signature is required | Downstream Charter interpretation; future Charter template |
| D-26 | **Zero-to-one role concentration is disclosed.** Robert Tan may occupy and sign in the Project Sponsor and Project Manager capacities for the present one-person business, but the record makes no separation-of-duties claim. If distinct human occupants later become mandatory, one role remains unfilled until a second authorized human is appointed | Charter role disclosure |
| D-27 | **Assistant readiness attestation is non-signatory evidence.** ChatGPT Codex may draft, reconcile, review, route, and attest document readiness under Project Manager direction. The machine record is not scope or funding approval, a human signature, liability acceptance, or independent assurance | Charter evidence metadata |
| D-28 | **Frozen-Charter placement.** `D-22`–`D-27` interpret AP-01 downstream and do not edit `docs/source/project-charter-v1.md`. Future project charters may include the approved clauses directly | Baseline protection |

### 2.1 One edit, four payloads

`A7`, `G5`, `D-15`, and `D-20` all modify `CLAUDE.md` and `AGENTS.md`. They are **one edit with four payloads**, not four edits:

1. Repoint from the stale plan pack to the governing set *(`A7`)*
2. Cover `AGENTS.md`, not only `CLAUDE.md` *(`G5`)*
3. Name `docs/v1/` as operative *(`D-15`)*
4. State the output contract *(`D-20`)*

Opening those two files four separate times is four chances to leave them inconsistent — the same reasoning that makes the S1 migration a single design pass.

### 2.2 Charter and financial interpretation boundary

`D-22`–`D-28` add no product feature, payment integration, project scope, or build authority. They separate commercial, accounting, project-control, human-accountability, and machine-evidence concepts that were previously using overlapping labels. Their operative detail is recorded in `docs/governance/alpha-portfolio-business-continuity-implementation-plan.md` §6.4.

### Withdrawn during analysis — recorded so they are not re-raised

| Item | Reason |
|---|---|
| `G21` — "the two RACI models conflict" | They describe **different layers**: CSV roles are human (`A`), the five gates are virtual agents (`R`). With one natural person all human accountability collapses to the Chief Editor, so *"A is invariant"* is correct for v1 |
| Enum reconciliation of `pub_target` / `platform_type` | **Orthogonal axes** — automation capability versus channel identity. Merging them would destroy the distinction that makes the manual publication path expressible |

## 3. Conditions register — the 12 follow-ups

Every conditionally approved item, its follow-up, and where it lands.

| # | Item | Condition | Follow-up lands in |
|---|---|---|---|
| C-01 | `APD-09` | Limits approved in principle; the **numbers** are `B-P0-06`'s ten boundaries | **T3** |
| C-02 | `B-P0-03` | Manual collection only. No scraper, crawler, or platform automation | **T3** — standing constraint |
| C-03 | `B-P0-08` | Interim authority boundary; stands in for `OD1`. **Must stay labelled temporary** | **TX** — closes with `OD1` |
| C-04 | `B-P0-16` | Its "no customer self-service" exclusion is superseded by the P0-EVR charter. Settle `QB` first | **T3** |
| C-05 | `B-P0-17` | Window duration is `UNSET`. 30 days suggested, 14/60 brackets | **T3** |
| C-06 | `MFB-03` | Direction only. Final `FR-14` wording awaits PoC evidence | **T3 → T4** |
| C-07 | `MFB-04` | Interim Chief Editor authority. **Must stay labelled temporary** | **TX** — closes with `OD1` |
| C-08 | `MFB-05` | Compensating controls must **never** convert a negative `OD2` into an affirmative one. Charter hard stop survives | **TX** — closes with `OD2` |
| C-09 | `MFB-07` | A working default, **not legal advice**. Subject to contract and jurisdiction review | **TX** — needs `Q7` counsel |
| C-10 | `G22` Expression of Concern | **New public-facing editorial act.** Needs separate Board approval plus a fifth intent code | **T3** |
| C-11 | Publication records insert/read-only | Decide alongside audit **Step 5** | **T2** — S1 window |
| C-12 | Record evidences **non-performance** | Raises `TR-DM-03`'s bar from tracking to completeness evidence. Size in the S1 pass | **T2** — S1 window |

**Four conditions close only when an Open Decision closes** — `C-03`, `C-07`, `C-08`, `C-09`. None is dischargeable inside v1.

## 4. Deferred — not approved

| # | Item | Precondition |
|---|---|---|
| `B-P0-06` | 5–10 paid engagements | Its ten boundaries need real values: topic in/out list · spend cap · time stop-loss · payment mechanics · cohort and WIP limit · originality-search sign-off · exclusivity window default · named escalation contact · `Q7` legal placeholder · fixed review date. **All are decisions or numbers; none requires a build** |
| `B-P0-23` | Ghostwriting as a separate paid service | Needs its own scope, price, byline and rights terms before entering a packet |

## 5. Open — not closable by approval

| Item | Why | Blocks |
|---|---|---|
| `OD1`, `OD2`, `OD3` | Not closable at scaffolding; the build produces the evidence | Production only |
| `OD4` | Retained and deferred as Proposer → Critics → Judge | Nothing in v1 |
| `Q1` | Line 1 roster shape | Needs `OD3` |
| `Q7` | `SEC-04`/`SEC-05` ownership — **no owner exists** | Production |
| `G15` / `GA5` | Data-protection regime; retention versus erasure | Needs external counsel |

**Chief Editor decisions still to make — 16.** `Q0`, `Q2`, `Q3`, `Q4`, `Q5`, `Q6`, `Q8`, `Q11`, `Q12`, `QA3`, `QB`, `QC`, `QD`, `QE`, `G23`, `G24`. See `V1-BUILD-SPEC.md` for which sprint each gates.

## 5.1 Gap disposition — all 40 IDs

**Added 2026-08-18 after a completeness challenge.** The first version of this register absorbed gap *content* without carrying gap *IDs*, so 16 of 40 identifiers had no trace in the operative set and no index survived supersession. A reader following an ID hit a dead end: the operative documents did not carry it, and the document that did was marked non-operative. **Supersession must transfer traceability, not destroy it.**

| ID | Disposition | Where it now lives |
|---|---|---|
| `G1`, `G2`, `G13` | **Closed** | `D-01` — tenancy; each customer is its own tenant, engagement is a work-package identifier inside it |
| `G3` | Open | `C-04` → `QB`, T3 |
| `G4` | Open | T0 item 1 |
| `G5` | Open | T1, four-payload edit |
| `G6` | Open | `D-04` + `QD`, T1 |
| `G7a` / `G7b` | Open | T3 charter / T4 design, T5 enforcement |
| `G8` | Open | T0 item 2 |
| `G9` | Watch | T5, before S4 is specified |
| `G10` | Open | `QC`, T1 |
| **`G11`** | **Open — no owner** | **Concurrent Claude/Codex edits to `docs/`. No arbitration rule, no forcing function. Partially mitigated by `D-20`, which puts the output contract where both agents read it — but authority on a conflicting edit remains undecided** |
| `G12` | **Closed** | The 42 Board items are now approved — §1 |
| `G14` | Open | T0 item 3 |
| `G15` | **TX — counsel** | Pairs with `GA5`; do not close one on the other |
| `G16` | Open | S1 window — `Q10` + `Q11` as one migration |
| `G17` | Open | S1 window item 2 — `QA3` |
| **`G18`** | **Standing rule** | **Two gap series exist (`G`, `GA`). Raise any new gap in one series only, and record it in this table. This rule was itself lost in the first supersession — an instance of the drift it warns about** |
| `G19` | Open | `D-06`, S1 window item 7 |
| `G20` | Open | `D-11`, S1 window item 8 |
| `G21` | **Withdrawn** | Human `A` versus agent `R` — different layers, not a conflict — §2 |
| `G22` | Open | `C-10`, T3 |
| `G23`…`G31` | Open | `D-10`, `D-09`, `D-15`…`D-21` respectively |
| `GA1`, `GA3`, `GA4` | Open | S1 window item 3 — report record shape |
| `GA2` | Open | T0 Step 2 *(stated half)* + S1 window item 4 *(insert/read-only)* |
| `GA5` | **TX — counsel** | Pairs with `G15` |
| `GA6` | Open | T0 Step 3 *(disclose)* + `Q2`, T1 *(resolve)* |
| `GA7` | Open | T3, audit Step 7 — auditor access versus tenant isolation |
| `GA8` | **Closed on execution** | `D-13` — `PSK-10`, T0 Step 1 |
| `GA9` | Open | `D-07`, S1 window item 6 |

**Closed: 6** *(`G1`, `G2`, `G12`, `G13`, `GA8`, plus `G21` withdrawn)*. **Escalated to counsel: 2** *(`G15`/`GA5`)*. **Unowned: 1** *(`G11`)*. **Remainder open against a named phase.**

## 5.2 Consistency audit — 2026-08-19

Three findings from auditing the executed T0 against its runbook.

### `G32` — T0 executed but under-delivered; repaired 2026-08-19

`c1a90c6` marked T0 executed and bumped `Modular_PRD.md` to **v1.6** and the traceability map to **v1.3**. Both bumps stand. But four of six edits were applied in abbreviated form that dropped their **operative** content — not merely their phrasing:

| Step | What was lost | Why it mattered |
|---|---|---|
| 1 `PSK-10` | Purpose column filled with the immutability **rule** instead of the key's **scope**; dated provenance note absent | The key no longer defined what it covers, and the `FB-04` rationale was undisclosed |
| 2 Report immutability | Correction-ladder link and the S1/`GA1` scoping note | The rule floated free of the mechanism that implements it |
| 3 Assurance disclosure | The `Q2` remedy pointer, the `A23` warning, and "discloses but does not close" | **Most serious.** Stated a problem with no route to its remedy — and without `A23`, a future reader could "fix" it by naming the Chief Editor as Line 3, the exact collision `A23` exists to prevent |
| 4 `NG-02` | The entire tenancy-boundary explanation, reduced to "(v1 exclusion only)" | That explanation *was* the purpose. A reviewer finding a tenancy column against "no multi-team accounts" still reads a breach |

Steps 5 and 6 landed correctly; Step 5's wording is more concise than proposed and is kept.

**The compounding defect:** `Modular_PRD.md` v1.6's changelog describes three disclosures in full, while the applied text delivered two of them abbreviated. **A governed document's version history claimed content the document did not contain** — this project's signature defect, reaching its own version record.

**Repaired 2026-08-19** by restoring the dropped operative content in place. The version numbers were not re-bumped: v1.6 now contains what its changelog always claimed.

### `G33` — no technical specification exists

The functional layer is substantially covered: `Modular_PRD.md` §5–§7 carries `FR-01`–`FR-13`, the NFR set, `AC-01`–`AC-20`, and `TR-DM-01`–`06`.

**There is no technical specification.** Field names, types, constraints, indexes, trigger logic, and API contracts have been deferred to a "Technical Requirements pass" at every point they arose — across the tenancy boundary, the notice-as-article model, the risk tier, the intent vocabulary, the report record, and the publication transaction record. That pass has never been scheduled or owned.

**It is the gating artifact for S1.** The S1 window holds eight decisions that all resolve into schema; without a technical spec they resolve into a migration written directly from prose.

### `G11` escalated — three agents, not two

`.claude/`, `.codex/`, and now `.agents/` are all configured. `c1a90c6` was authored by a third agent ("Antigravity"), and `D-27` records ChatGPT Codex as a drafting party. **`G32` is the first observed instance of the harm `G11` predicted:** one agent executed another's runbook and silently dropped operative content, with no arbitration rule and no detection mechanism. `G11` moves from *watch* to **open, and now evidenced**.

## 6. Supersession map

The thirteen files below **remain in place as the dated analysis record**. They are the audit trail for how these decisions were reached and must not be deleted. What changes is that they are **no longer operative** — where any of them differs from this register or `V1-BUILD-SPEC.md`, these two documents control.

| Superseded file *(`docs/journal/2026-08-18-…`)* | What it contributed | Why superseded |
|---|---|---|
| `sprint-readiness-consolidated` | S0 go/no-go; reconciled 9 commits and 5 governance files | Conclusions absorbed into the build spec |
| `board-packet-checklist` | Plain-language verdicts on 42 items | Verdicts now recorded in §1–§3 |
| `board-decision-sheet` | House-vocabulary verdict sheet | Its verdicts are now **approved**, not recommended |
| `first-engagement-lock-in` | Seven decisions for one client to publication | Folded into the POC lane, `B-P0-06` preconditions |
| `poc-charter-separation-and-revenue-model` | Charter separation; revenue rule | `D-04`, `D-05` |
| `transition-intent-vocabulary` | `event_type` + 22 intent codes | `D-12`; vocabulary retained by reference |
| `audit-model-and-remediation-plan` | CPA audit model, `GA1`–`GA9`, Steps 1–11 | `D-13`, `D-14`; steps mapped to phases |
| `consolidated-gaps-and-open-questions` | Timeline register, `G1`–`G24` | Phase structure carried into the build spec. **Retained as the gap-detail record** — §5.1 carries the IDs and dispositions; this file holds each gap's full description and evidence. Same treatment as the T0 runbook: superseded as *operative*, retained as *reference* |
| `t0-execution-runbook` | Exact T0 edit procedure | **Still executable** — retained as the T0 working procedure |
| `storyboard-business-and-digital-twin` | Both lanes panel by panel | Confirmed gaps; no decisions of its own |
| `raci-human-vs-digital-twin` | Human `A` versus agent `R`; `G19`, `G20` | `D-11`; `G21` withdrawn |
| `retraction-as-publication` | Notice-as-article model | `D-06`, `G22` → `C-10`, `G23` → `D-10` |
| `publication-transaction-record` | Orthogonal enums; GRC completeness | `D-08`, `D-09` |

**Not superseded, and not supersedable by this document:** `docs/PRD.md`, `docs/source/*` (Charter, Addendum, Blueprint, Business Case), `docs/Modular_PRD.md`, and all of `docs/governance/*`. Those sit above this register in the precedence hierarchy.

### 6.1 The operative set is three documents — frozen

| Document | Answers |
|---|---|
| `V1-DECISION-REGISTER.md` | **What is decided** — approvals, conditions, deferrals, what remains open |
| `V1-BUILD-SPEC.md` | **What gets built, in what order** — T0/T1, S0–S4, out of scope, invariants |
| `V1-ARTIFACT-INVENTORY.md` | **What must exist** — every planned file, its phase, whether it exists today |

**No fourth v1 document will be created.** New findings are absorbed into whichever of these three owns the question. This rule exists because the failure it prevents already happened: the consolidated register fell six gaps behind while six new analysis documents were written around it, and the artifact inventory omitted `G30` one turn after `G30` was proposed. **Adding a document is not consolidation.**

## 7. Scope limits

Closes no Open Decision. Amends no governing document. Authorizes no code, schema, migration, or deployment — approval of a *decision* is not authorization to *build* it. `OD1`–`OD3` remain open; the `OD2` negative-resolution hard stop stands exactly as the Charter writes it.
