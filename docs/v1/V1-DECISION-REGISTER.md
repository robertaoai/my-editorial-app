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
| D-17 | **Draft migration `0002` held outside `supabase/migrations/`** until every S1 window decision are settled. That directory is the apply set; "do not apply" is a note, not a property of the location (`G27`) | S0 |
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
| C-11 | Publication records insert/read-only | **CLOSED 2026-08-25 (`D-114`)** — append-only status **events**, never a mutable status column, so retry and partial-failure history survives | **Discharged** |
| C-12 | Record evidences **non-performance** | **CLOSED 2026-08-25 (`D-114`)** — `publication_targets` rows created **eagerly at approval**. Events make a *failure* evidence; only an eager row makes a *non-attempt* evidence, which is `G41` inside this table | **Discharged** |

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

**Chief Editor decisions still to make.** `Q0`, `Q1`, `Q3`, `Q4`, `Q5`, `Q6`, `Q7`, `Q8`, `Q11`, `Q12`, `QB`, `QD`, `QE`. **The list is the record; no tally is restated** (`G55`, `G56`, `G58`). *Corrected 2026-08-21 (`D-71`): `Q2` (`D-57`), `QC` (`D-59`), `G23` (`D-10`) and `G24` (`D-09`) were already decided and are removed. *Corrected again 2026-08-25 (`D-110`): `QA3` is decided and removed.* The remaining twelve were **not** individually re-verified in that pass.* *Corrected again 2026-08-21 (`D-72`): the list was wrong in **both** directions — `Q1`, `Q7` and `Q10` were **Open and Chief-Editor-owned but never listed**, `Q10` being the named blocker for Stage D. Found by `decision-status`, which now runs in CI.* *Updated 2026-08-21 (`D-73`): `Q10` is decided and unblocks Stage D.* See `V1-BUILD-SPEC.md` for which sprint each gates.

## 5.1 Gap disposition — every ID

**Added 2026-08-18 after a completeness challenge.** The first version of this register absorbed gap *content* without carrying gap *IDs*, so 16 of 40 identifiers had no trace in the operative set and no index survived supersession. A reader following an ID hit a dead end: the operative documents did not carry it, and the document that did was marked non-operative. **Supersession must transfer traceability, not destroy it.**

| ID | Disposition | Where it now lives |
|---|---|---|
| `G1`, `G2`, `G13` | **Closed** | `D-01` — tenancy; each customer is its own tenant, engagement is a work-package identifier inside it |
| `G3` | Open | `C-04` → `QB`, T3 |
| `G4` | **Closed 2026-08-19** | T0 item 1 executed — `CR-15` coverage scoped to AP-01/MVP |
| `G5` | **Closed 2026-08-19** | T1 Step 1 executed — `A7` applied to **both** `CLAUDE.md` and `AGENTS.md` |
| `G6` | Open | `D-04` + `QD`, T1 |
| `G7a` / `G7b` | Open | T3 charter / T4 design, T5 enforcement |
| `G8` | **Closed 2026-08-19** | T0 item 2 executed — exclusivity window scoped P0-EVR-only |
| `G9` | Watch | T5, before S4 is specified |
| `G10` | **Closed 2026-08-20** | `D-59` §5.14t — **one origin, two paths**: `/editorial` (MVP) and `/request-brief` (POC). Apex stays `UNSET`. Seniority question **dissolved** — neither lane holds the root. `C-15` promotes to distinct origins before POC holds real client data |
| **`G11`** | **Closed 2026-08-20** | `D-58` §5.14s — **owner: Chief Editor**; **precedence: the register wins**, following from `D-29` and `D-54`. Detection carried forward as `C-14`, *specified, not installed*. **Git cannot attribute edits here** — one identity, zero merges — so conflicts appear as silent overwrites, not merges |
| `G12` | **Closed** | The 42 Board items are now approved — §1 |
| `G14` | **Closed 2026-08-19** | T0 item 3 executed — `NG-02` annotated with its v1 scoping and the tenancy-boundary explanation |
| `G15` | **TX — counsel** | Pairs with `GA5`; do not close one on the other |
| `G16` | **Closed 2026-08-25 (`D-111`)** — row corrected `D-113` | **Both halves are decided**: `Q10` by `D-73`, narrowed by `D-79` — `0002` carries a tenancy column; `Q11`'s name by `D-111` — `line_separation_status`. **This row still read `Open` after `D-111` closed it.** The closure was written into §5.14br's *Gaps closed* line and never propagated here — `G65` again: the tier sweep verifies that a decision ID **arrives**, and cannot see that a row it did not touch has gone stale |
| `G17` | **Closed 2026-08-25 (`D-110`)** | `QA3` ratified as a typed/versioned BOUNDARY, not a global format: typed for anything in a constraint, transition, permission, filter, join, retention rule or binding; versioned JSON only for an immutable report or brief body, with a typed `schema_version`. **JSON is never the source of truth for a gate.** Reframed by `B-032`. §5.14bq |
| **`G18`** | **Standing rule** | **Two gap series exist (`G`, `GA`). Raise any new gap in one series only, and record it in this table. This rule was itself lost in the first supersession — an instance of the drift it warns about** |
| `G19` | **Closed 2026-08-25 (`D-110`)** | Notice-as-article physical names ratified — `articles.article_kind` and `articles.original_article_id`; `Retracted` is NOT an eleventh state and the retraction condition is derived. **Inherited targets were already decided by `D-08`** and implemented in `FN-PUBLICATION` §4.3, which `B-032` never cited. §5.14bq |
| `G20` | **Closed 2026-08-25 (`D-112`)** — row corrected `D-113` | Typed `articles.risk_tier` (`D-111`), and its domain closed by `D-112`: **three values** `standard` \| `sensitive` \| `high_sensitivity`; **asymmetric authority** — anyone may RAISE, only the Chief Editor may LOWER; **manual in v1**, `FLAG_S6_RISK_AT_INTAKE` false until S5; **four typed provenance columns**, `risk_tier_ruleset_version` null in v1. `C-29` closed. **This cell previously carried `D-111`'s body under `D-112`'s heading** — "NOT decided … `0002` may not be authorized while this is open" — so one row held two verdicts. `D-112` rewrote the status and left the text; §5.14bs was right and this row was not |
| `G21` | **Withdrawn** | Human `A` versus agent `R` — different layers, not a conflict — §2 |
| `G22` | Open | `C-10`, T3 |
| `G23` | **Closed 2026-08-19** | `D-10` — `FR-13` bypasses deliberation, not publication |
| `G24` | **Closed 2026-08-19** | `D-09` — mirror boundary stated as own channels only |
| `G25` | **Closed 2026-08-21 — reopened and closed properly** | `D-15` named `docs/v1/` operative in the two agent files, but `G25`'s own Fix named **three** targets and `docs/README.md` had **0** references — the *"what governs what"* map omitted the operative tier entirely. **`D-71` added the `v1/` row.** Closed against all three |
| `G26` | **Closed 2026-08-19** | `D-16` — EMS citation annotated as unretained, `A20`–`A28` named in its place |
| `G27` | **Closed 2026-08-21 — `D-91`** | `D-17` — draft `0002` location, **S0**. **The path was asserted and never decided.** `D-68`'s rationale (§5.14) wrote *"`G27` holds its draft outside the apply path at `docs/v1/drafts/`"* — a location referred to in prose, with **no directory, no row, and no closure**, for as long as this row read Open. `D-91` adopts that path rather than inventing a second one (`D-58`: the register wins) and creates `docs/v1/drafts/README.md`. The draft file itself stays unwritten — `G64`/`Q11` still gate it. §5.14ay |
| `G28` | Open | `D-18` — the 14 manual PoC templates, **T3** |
| `G29` | **Closed 2026-08-19** | `D-19` — artifact DoD attached to every sprint in `V1-BUILD-SPEC.md` §5.1. *(Third disposition-drift instance: closed on execution, left Open in the table until a later sweep caught it.)* |
| `G39` | **Closed 2026-08-19** | Applied to `FN-GATES-01-05` — `FR-01`, `AC-01`, and §3.1 restated to separate one subject topic from many analytical tags; `AC-01a` added |
| `G30` | **Closed 2026-08-19** | `D-20` — output contract in both agent files |
| `G31` | **Closed 2026-08-19** | `D-21` — T1 execution runbook drafted |
| `G32` | **Closed 2026-08-19** | T0 under-delivery repaired in place; `Modular_PRD` v1.7 records it |
| `G33a` | **Closed 2026-08-19** | All four feature groups specified: `FN-GATES-01-05`, `FN-PUBLICATION-09-10-13`, `FN-AUDIT-VISIBILITY-07-08`, `FN-EXCEPTIONS-06-11-12`. **`FR-01`–`FR-13` fully covered.** `G33b`'s filter is now unblocked |
| `G33b` | **Closed 2026-08-20** | `D-52` §5.14m — 18 candidates filtered: 7 absorbed into S1, 9 require `SPECS` across **4 documents**, 1 infrastructure ⚙, 1 blocked by `Q2`. **Only `SPECS-TRANSITION-ENFORCEMENT` is needed before S1** |
| `G34`–`G36` | **Never assigned** | **Numbering skip, not missing gaps.** The series jumps `G33` → `G37` because new gaps were numbered alongside `D-34`/`D-35`/`D-36` while those were being written. **No gap was lost, closed, or deleted.** Recorded so a reader auditing the sequence does not hunt for three that never existed |
| `G37` | **Withdrawn** | Two concepts sharing a name — see `D-38` |
| `G38` | **Resolved** | Defaults to `CR-04` — see `D-38` |
| `GA1`, `GA3`, `GA4` | **Closed 2026-08-25 (`D-111`)** | Report record shape approved — identity, `article_id`, as-at transition anchor, tenant, template and rule-set versions, JSON schema version, frozen snapshot, optional `supersedes_report_id`. Typed per `D-110`. §5.14br |
| `GA2` | **CLOSED 2026-08-25 (`D-114`)** | **Both halves done.** The *stated* half closed 2026-08-19 — report immutability in `Modular_PRD` §6.3. The **insert/read-only** half is ruled by `D-114`: `publications`/`publication_targets` and the report record are insert/read-only, enforced by `REVOKE` **and** a `BEFORE UPDATE OR DELETE` trigger, because `REVOKE` alone does not bind the owner or `service_role` and `TR-API-03` introduces exactly that connection at S4. §5.14bu |
| `GA5` | **TX — counsel** | Pairs with `G15` |
| `GA6` | **Closed 2026-08-20** | Disclosure stands — assurance **Absent**, unchanged. `Q2` answered by `D-57`: v1 has no independent assurance, conditional on `C-13`'s BCP surface. **The surface is a compensating control, never Line 3** |
| `GA7` | Open | T3, audit Step 7 — auditor access versus tenant isolation |
| `GA8` | **Closed on execution** | `D-13` — `PSK-10`, T0 Step 1 |
| `GA9` | Open | `D-07`, S1 window item 6 |
| `G40` | **Closed 2026-08-25 (`D-135`)** | `NFR-08` was unbounded: *"every transition reconstructable from the log alone"* carried no retention qualifier. **Bounded** — now reads *"within the governing retention policy"*, citing `RET-EDITORIAL` without copying its period. §5.14, detail section added 2026-08-20, closed §5.14cp |
| `G41` | **Open — documentation complete, UI not built** | Nothing explains **absence**. An empty audit view cannot distinguish *"nothing happened"* from *"records disposed under policy"*. `D-134`/`D-135` supply the policy text and field list `AC-12a` needs to state; **the UI behavior itself is unbuilt** — this closes when the view is built and tested, not before. §5.14, §5.14a, §5.14cp. Product canary is `AC-12a` |
| `G42` | **Closed 2026-08-25 (`D-111`)** — **S1** | Template-to-field-availability binding: a new report template may not be applied to a period that never recorded its fields. §5.14b, `D-41` |
| `G43` | **Resolved 2026-08-19** | GRC clock and proof — the deadline arrives with the order. §5.14d, `D-43` |
| `G44` | **Resolved 2026-08-19** | The 90-day clock start defined. §5.14f, `D-45` |
| `G45` | **Withdrawn 2026-08-19** | Anonymisation is not required — the transaction ID is the trace. §5.14f, `D-45` |
| `G46` | **Resolved 2026-08-19** | Retention class — the product holds a payment **confirmation**, not a payment record. §5.14e, `D-44` |
| `G47` | **Open** | Paid-but-no-trigger must be detectable. §5.14e |
| `G48` | **Resolved 2026-08-19** | A paid engagement failing the gate — deliver with the finding disclosed. §5.14j, §5.14k, `D-49`/`D-50` |
| `G49` | **Open** — S3 | Briefcase artifacts specified for POC only; MVP needs them or it cannot tell rework from true negative. §5.14k |
| `G56` | **Closed 2026-08-20** | §5.15 solve sequence stale — found and repaired in the same pass. See §5.4 |
| `X4` | **Open — specified, not applied** | `D-61` §5.14v — one seed row executes **T5 with an agent**; T5 is Line 2, human-primary. Correction specified. **Closes only with `X5`**, in `0002` |
| `X1` | **Closed** | `OD3` recorded *Resolved* in the Addendum and Blueprint but *Open* in the Business Case and Charter. Closed by amendment — `D3` |
| `X2` | **Resolved — no action** | Business Case implies Chief Journalist before Line 2; the Addendum puts Line 2 at T5. **The Addendum governs**, so build T5 before T6 |
| `X3` | **Open** — S1 | Repo state machine omits `Discovered`/`Validated`/`Needs Revision` and collapses Addendum T2/T3. `D5`. Mapping specified by `D-55` (`G57`); **closes on `0002`** |
| `X5` | **Open** — S1 | `workflow_transitions` has no `line_assignment` and no independence field, **so four-eyes cannot be evaluated at all.** `D5`. The field name is `Q11`-blocked (`A21`) — do not write `judgment_independence_status`. **Closes on `0002`; carries `X4` with it (`D-61`)** |
| `X6` | **Superseded** | Assumed stack versus provisioned repo. Superseded by `A1`/`A2` — `D4`, *not yet closable* |
| `X7` | **Open** — S2 → S6 | Demo-first plus permissive RLS versus executor attributability. `D5`. **Mitigated at S2, closes at S6** — the same `TC1` surface `AC-12` sits on |
| `X8` | **CLOSED 2026-08-25 (`D-121`)** — row corrected | Stripe scaffolding versus the Charter-level *"no monetization features"*. **`D5`. Removed and verified**: `B-003` is `Verified` at `67706ca`, and Stripe is absent from `package.json`, `app/` and `lib/`. **This row read `Open — S0` for weeks after the divergence closed**, and the Chief Editor found it by citing the Stripe scaffolding as evidence that payment is a backlog feature — **the row they cited was the stale one.** `G65` again: arrival is checked, staleness is not. **`NG-03` is a *v1* exclusion**, so payment remaining on the backlog is consistent with it and was never in tension. §5.14cb |
| `G61` | **Closed 2026-08-20** | `D-63` §5.14x — **all eight** `X`-rows backfilled above. *(Corrected: the gap statement said **five**; `X1`, `X2`, and `X6` exist too. Five was the `D5`-family **open** subset, not the series.)* |
| `G62` | **Closed 2026-08-21** | **Opened because the CI gates `R3` specifies did not pass** — `typecheck` exited 2 with 10 implicit-`any` errors in `lib/supabase/`, and `lint` exited 1 because `next lint` is deprecated, **interactive**, and no ESLint config exists. §5.14z. **Today: typecheck passes; lint still cannot run.** **b decided by `D-66`** — ESLint CLI, `next/core-web-vitals`, **0 findings**. **a closed by `D-67`** — `satisfies CookieMethodsServer` in two files, 4 lines; `tsc --noEmit` **exits 0**. The ten errors were **two overload-resolution causes**, not ten defects. **Both parts applied by `D-70`** — `eslint.config.mjs` created, `lint` repointed; **27 files, 0 findings**, and CI green on a real run |
| `G63` | **Closed 2026-08-21 — scoped, not removed** | `.gitattributes` set `*.md text eol=lf merge=union` repo-wide. **Union is CORRECT for append-only audit content** — tested on the Chief Editor's rollback lineage (`tag-01` fixed, `tag-02` deployed, `tag-01` merged into `tag-02`), both sides' records survived, and losing an audit record is worse than duplicating one. **It is destructive for current-value content** — tested: a status row merged to `Decided` **and** `Rejected`; a version header appeared twice; and a union-duplicated `CLAUDE.md` sliced identically to a clean one, so `shared-core-hash` **PASSED** on a file holding two full copies of the rules. **The file is the wrong unit** — `Modular_PRD.md` and the register each carry append-only *and* current-value content. **Closed by `D-84`:** union retained, with `docs/v1/**/*.md`, `docs/Modular_PRD.md`, `CLAUDE.md`, `AGENTS.md`, `.agents/**/*.md` scoped to `merge=text`. Verified by `git check-attr`. §5.14ar |
| `G64` | **Closed 2026-08-25 (`D-112`)** — row corrected `D-113` | **`G-02` now computes from one column.** `D-97` chose the three-value shape, `D-111` the name `line_separation_status`, and `D-112` cleared `G-02`'s Data Source so it names the real column with no boolean caveat: `not_applicable` and `override_not_four_eyes` are distinguishable from one field, which is exactly what the metric's exclusion of logged overrides required. **This row still read *"Specified, not applied"* and still named `judgment_independence_status` and the rejected boolean** — both retired. Original text follows, for the reasoning: **`G-02` cannot be computed from its own declared Data Source.** Its Data Source names **one** column *(`judgment_independence_status`, "becomes `line_boundary_crossed`")*, but its definition excludes logged overrides, which needs `not_applicable` and `override_not_four_eyes` told apart — and a boolean maps both to `false`. **Arithmetic on the declared columns, no interpretation required.** *Restated by `D-69`: as opened (§5.14ad) this also claimed an `NFR-03` inference violation — **withdrawn**, "inferred at read" is undefined across the corpus and `NFR-03`'s measured target is "100% non-null", which a boolean meets.* Two shapes specified; the choice is `Q11`'s (`D-68`). Carries `C-16`. **Resolve before the `0002` draft** (`G27`, S0). §5.14ae |
| `G65` | **Closed 2026-08-21 — narrowed** | **The `D-54` tier sweep verifies a decision *arrived* in a tier, not that the tier is *correct*.** Presence satisfies it; staleness is invisible. Proven twice — `D-70` present 3× in the inventory and `D-57` 4× in `Modular_PRD`, both alongside rows that contradicted them, both passing. **Closed by `D-72` on a narrower promise, stated:** a script cannot validate prose, so `scripts/checks/decision-status.mjs` cross-references **decision status** between the register and `Modular_PRD` §10 in both directions instead. Caught `Q1`/`Q7`/`Q10` live. **The tier sweep still verifies arrival, not correctness.** §5.14ag, §5.14ah |
| `G66` | **Closed 2026-08-21** | **`.claude/settings.json` is checked in, shared across three agents, and covered by no `C-14` check.** The shared-core hash compares only the three agent rule files. Demonstrated live 2026-08-21: an invalid-JSON edit **silently disabled both hooks** — Claude Code ignores a settings file it cannot parse, with no error. **Closed by `D-72`** — `scripts/checks/settings-parse.mjs` parse-checks the repo-local cascade and runs in CI. Contents never printed; user-scope file deliberately excluded. §5.14ag, §5.14ah |
| `G67` | **Closed 2026-08-21** | **The shared-core hash covers 86 of ~226 lines.** `CLAUDE.md` lines 1–138 are **byte-identical to `AGENTS.md`** but sit outside the `<!-- SHARED CORE` marker, so `shared-core-hash` never compares them — an edit to one reaches one agent only, with nothing detecting it. That is `G53`, in the region `C-14` does not cover. Found by a `/init` pass that proposed regenerating `CLAUDE.md` (`D-76`). **Fix:** extend the check to compare the pre-core preamble across `CLAUDE.md` and `AGENTS.md` (`.agents/rules/graphify.md` has no preamble and must be excluded). **`scripts/checks/` is Lane C — specified, not applied** (`D-75`). §5.14al |
| `G68` | **Closed 2026-08-21** | **The `D-54` tier sweep cannot see the Tier 1 document.** `scripts/checks/tier-sweep.mjs`'s `TIERS` map has no entry for `docs/governance/alpha-portfolio-business-continuity-implementation-plan.md`, which `D-74` places **above** `Modular_PRD`. A tier column naming it is rejected as unmapped, so propagation into the highest tier in the hierarchy is verified by nobody. Found when `D-79` propagated there and the sweep raised *"tier column not mapped to a document."* **Fix:** add the mapping. **`scripts/checks/` is Lane C — specified, not applied** (`D-75`). §5.14am |
| `G69` | **Closed 2026-08-21 — narrowed, stated** | **No mechanism enforces the `D-75` lane boundaries.** Verified 2026-08-21: no `CODEOWNERS` at any path, no path-scoped `.claude/rules/`, no `.husky/` or `.pre-commit-config.yaml`, **0 installed git hooks**, and CI triggers `on: push`/`on: pull_request` — after a commit lands. Four crossings by agents that had read the rules are on record (`D-75`, `D-82`). **The bootstrap problem:** every candidate mechanism — `CODEOWNERS` in `.github/`, a pre-commit hook, a path check in `scripts/checks/` — is **Lane C's own surface**, so Lane A can specify enforcement and never apply it. **Fix:** the first control must come from Lane C or the Chief Editor. **Closed by `D-83`** on **visibility, not prevention** — `scripts/checks/lane-boundary.mjs` reports a change spanning two lanes; nothing blocks one, and `D-82`'s finding stands. Built by Lane A under explicit Chief Editor authorization, which `D-82` names as one of two ways the first control could arrive. §5.14ap, §5.14aq |
| `G70` | **Closed 2026-08-21 — heuristic, stated** | **Nothing verifies that a change in a governing document reached its derived tiers.** `tier-sweep` is **register-driven** — it checks that a *decision* arrived in a named tier. The inverse is unchecked: `docs/source/` and `docs/governance/` can move and no control notices. The portfolio is **living**, not frozen — `alpha-portfolio-business-continuity-implementation-plan.md`, **Tier 1 under `D-74`**, changed 2026-08-21; `requirements-traceability-map.md` 2026-08-20; `raci-involvement-matrix.md` 2026-08-19. **The structural inverse of `G68`:** that gap was *"the sweep cannot see the Tier 1 document when a decision claims it"*; this is *"the sweep never looks at the Tier 1 document at all."* **Fix:** a source-side sweep comparing each governing document's last-commit date against its derived tiers. **`scripts/` is Lane A** (`D-84`) — specified here, not built. §5.14at |
| `G71` | **Closed 2026-08-21 — found by the control it added** | **The register contradicted itself and every check passed.** `D-60` closed `G54` in §5.14u and marked its tier table **Register ✅** — but `tier-sweep` maps `register` to `files: []`, *"true by construction"*, so the ✅ proved nothing about §5.1. Index and section sat in **one file giving two answers** for two days. `decision-status` covered only the `Q`-series; gaps had no cross-check. **Closed by `D-88`** — direction D compares every `G`-row's §5.1 status against the sections claiming to close it. **Built before the fix**: on its first run it reported `G54` and nothing else, one finding across 65 gap rows and 14 closure claims. §5.14av |
| `G72` | **Backlog — no work until a related issue surfaces** | **Graph-schema compatibility with upstream `graphifyy` is unverified.** `merge7.js` depends on `graph.json` using `links` and the current node fields; whether upstream emits the same shape is unknown. `D-60` named it *"newly named and **not resolved**"* and `docs/graph-fragments/README.md` §6 calls it *"the real residual risk"* — but it carried **no identifier** for two days, so it reached no index and no check. **The distribution choice is settled and unchanged: `@sentropic/graphify`** (`D-51`), an attributed downstream extension of `Graphify-Labs/graphify`. **Nothing proposes a swap, so this is not a live risk.** Command availability is already known (`D-60`); **schema shape is the thing to verify first** if a swap is ever reconsidered. §5.14av, §5.14aw |
| `G73` | **Open — residual of `D-91`, no control proposed** | **A correction to one agent's rule-file tail reaches one agent, and nothing detects the divergence.** `D-87` struck the dead `.graphify/needs_update` instruction from `CLAUDE.md`'s tail; `AGENTS.md` and `.agents/rules/graphify.md` carried it for four days. **`shared-core-hash` compares only the region between the markers** — tails are excluded **by design**, since they differ per agent and hashing them would fail on every legitimate difference. `G53` named the same shape for the shared region and was closed by hashing it; **that instrument does not transfer here.** `D-91` fixed the instance in both files. **No check is proposed** — a control that fires on every intended difference is worse than none (`D-83`'s reasoning). Recorded so the next per-agent correction is known to need manual propagation |
| `G74` | **Closed 2026-08-21 — found by using the control from a new direction** | **`C-14` check 10 was scoped to one lane.** `handoff-response` filtered entry filenames on `B-` alone, so a `C-NNN` entry was **invisible** — the check would report *"channel installed, no entries yet"* with Lane C's blocker sitting in the directory. **The exact failure the check exists to prevent, aimed at the one lane it did not cover.** `D-90` reasoned about *acknowledged versus answered* and not at all about *whose entries count*. Filter widened to `[BC]-`; **negative-tested both directions.** Lane A raises nothing here, so `A-` is deliberately excluded. §5.14az |
| `G75` | **Closed 2026-08-21 — the rule was three paragraphs above the violation** | **Four documents asserted the number of `C-14` checks as a literal, and all four were wrong.** `V1-BUILD-SPEC.md` was wrong **twice in one sentence** — *"Extended to nine"* beside *"a local `8/8`"*. `G55`, `G56` and `G58` all record the same mechanism, **propagate the fact never the tally**, and `CLAUDE.md`/`AGENTS.md`/`.agents/rules/graphify.md` state that rule and then carry a tally. **Not fixed by correcting the number** — a corrected number drifts at the next check. Tallies removed and replaced with the rule that determines CI coverage: **what a check reads.** Prerequisite for Lane C's `fetch-depth: 0`, which changes the CI total. §5.14az |
| `G76` | **Closed 2026-08-24 — the control layer's own green was false** | **Both handoff checks read the NEXT metadata line as a missing field's value.** The pattern `^-\s*\*\*Name:\*\*\s*(.*)$` uses `\s`, which matches a **newline**, so a blank field followed by another field captured that following line. `B-013`, `B-014` and `B-015` shipped with blank `Kind` values and `handoff-response` reported **PASS** on all three. **This is not a checking gap but a checking LIE** — every claim in this apparatus about the channel is read through these two functions, so the defect invalidated the evidence for the other six entries at once. **Three copies of the parser existed**, across `handoff-response`, `closure-readiness` and their duplicated phase-register readers; one line-bounded copy now lives in `scripts/checks/handoff-fields.mjs`. **Reproduced before and after, and negative-tested seven ways.** §5.14bj |
| `G77` | **Open — structural, no control proposed** | **This repository's dominant defect source is its own corrections.** §6.1b recorded six of eight findings as defects introduced by the passes correcting the previous ten. §6.1c records **seven of eleven** the same way, and the pass that repaired `B-013` shipped `B-017` and `B-018` — one of which (`G76`) is a false green inside a check written to stop false greens. **`G56` names *restatement* as a drift mechanism; this is the same shape one level up: re-derivation.** No control is proposed, because a check that fires on "a correction introduced something" fires on the normal case (`D-83`). **What works is what caught these: an independent lane reviewing the repair, and negative fixtures written before the check is believed** — fixture 10 found what review did not. Recorded so the ratio is tracked rather than rediscovered |
| `G78` | **Closed 2026-08-24 — found by reading the directory, not by any check** | **The channel's own documentation was the one file nothing read.** `handoff-response` filters entry filenames on `^[BC]-d+`, so `docs/handoff/README.md` and `TEMPLATE.md` were invisible to it; `phase-manifest` asserted only that they exist and `graph-coverage` only that they were in the graph. **The README drifted through `D-101`, `D-102` and `D-103` with every check green**, ending up without `Applied` — the state most entries carried — with two prose tallies, with the pre-`D-102` meaning of `Verified`, with a gate description that predated phase scoping, and with no mention of the `D-103` carve-out that makes the channel usable during a handover. **`G74`'s shape one level up:** that control was scoped to one lane and blind to the other; this one was scoped to entries and blind to the file governing entries. **Closed by `channel-docs` (check 16)**, which couples both files to the check sources in both directions and **caught three further defects nobody had reported, including one written by the repair pass itself.** §5.14bl |
| `G79` | **Closed 2026-08-24 — the audit half of `D-88` had never worked** | **The lane-crossing gate accepted a declaration that git cannot parse as a trailer.** `lane-gate` matched `Lane-Crossing:` anywhere in the message body; **git reads only the last paragraph as trailers**, so a declaration above a blank line and a `Co-Authored-By:` block is not a trailer at all. `git log --grep` finds three declared crossings in this repository; `git log --format='%(trailers:key=Lane-Crossing)'` finds **none** — three of three since `D-88`, **including the commit that installed the gate.** `D-88`'s blocking half worked throughout; its stated audit path — *"the crossing is still reported afterwards, so bypassing hides nothing"* — **was never true.** Fixed at the source of truth: the gate now asks `git interpret-trailers --parse`, so it and every downstream tool agree by construction. **The three historical commits are deliberately not amended** — `git log --grep` is the audit path for anything before this decision. Negative-tested three ways. §5.14bm |
| `G80` | **Closed 2026-08-24 — the defence against ceremonial checks was itself unverifiable** | **Fourteen claims of *"negative-tested N ways"* across the register and the inventory, and not one fixture in the repository.** Every suite ran once in a session scratchpad and what survived was the sentence saying it passed. `V1-PHASE-CLOSURE.md` §6.4d instructed the reader to run `sh negtest5.sh   # in the scratchpad` — **a reproduction step pointing outside the repository.** `summary_outlived_source`: the record of the test outlived the test. **This matters more than a missing test normally would**: `bun run check` proves the checks pass on a healthy repository, and **the fixtures are the only evidence they FAIL on an unhealthy one** — the property every claim in this register rests on. `probe_that_cannot_fail` is recorded here five times and **the defence against it could not be re-run by anyone.** Closed by `scripts/fixtures/` and `bun run fixtures`: six suites, thirty fixtures, each asserting the intended FINDING rather than merely a failure, refusing to run on a dirty tree, and reporting a failed restore as its own failure. **They found a defect in themselves on the first tracked run.** §5.14bn |
| `G81` | **Closed 2026-08-24 — a gap recorded as closed with the same defect still live inside it** | **`D-106` set out to back fourteen "negative-tested N ways" claims with tracked fixtures, wrote suites for six checks, and left `config-coupling` and `C-19` with none** — the two that `B-007` and `B-010` cite as their evidence. `G80` recorded that the record of a test had outlived the test; **two of those records outlived the fix as well**, and the register said the gap was closed. Found by Lane B (`B-024`, `B-025`) reviewing Lane A's pass, not by Lane A. **The general shape: a fix that enumerates its targets closes the gap only for the ones it enumerated**, which is `G74`, `G78` and `G79` again — and `D-105` had already drawn that lesson and applied it to `channel-docs` alone. Closed by both suites, each with a positive control. §5.14bo |
| `G82` | **Closed 2026-08-25 — the loosening was the defect, not the rule** | **`D-107` redefined `Eligible` as *offered, may begin without a further act*, so two lanes could each believe they were permitted to work.** That is the reading under which a turn was started, doubted and abandoned (`D-105` `F29`), and `lane-state` preserved the contradiction rather than detecting it: a row could be `Blocked` AND `Eligible`, an `Eligible` row beside an `Active` one passed, and a `Blocked` row with no active run passed. **The rule files never drifted — they always said only the `Active` lane may commit, and §5 was the deviation.** Judge ruling `D-108` restores exclusivity and makes the lock a state machine with two legal configurations: one `Active` with the rest `Blocked`, or none `Active` with the rest `Eligible`. **Reported by Lane B as `B-033`, which named all three checker gaps correctly.** §5.14bp |
| `G83` | **Closed 2026-08-25 — the summary line was wrong in the direction that hides work** | **`handoff-response` reported `0 open` with four unread entries in the directory.** The branch handling a blank `Lane A` field called `continue` **before any counter ran**, so an entry in exactly the state this check exists to catch — feedback sitting unread — was counted in no bucket at all. `closure-readiness` printed `open 4` in the same run: **two checks disagreed about one directory and nothing compares them.** It also misdescribed the file, saying the field did not exist when it was present and blank; `fieldPresent()` was written for that distinction in `D-102` and used for `Kind` and not here. **A control whose one-line summary understates the backlog is worse than no summary**, because the number is what people read instead of the directory. §5.14bt
| `G84` | **Closed 2026-08-25 — a report can never leave the backlog it was counted in** | **A turn report is mechanically indistinguishable from an unresolved defect.** `D-105` requires one at every lane boundary and `D-106` files it under the reporting lane's phase, but **there is nothing in a report to resolve**, so it can never carry a terminal `Resolution` — and four of them sat permanently inside *"still carry NO resolution"*. **A backlog figure that includes items which can never leave it has stopped measuring the backlog.** Closed by a `turn-report` `Kind` that checks 10 and 13 both read: **excluded from the unresolved count, reported as its own number** — `B-037` named both halves, and only one of them is about tidiness. §5.14bt
| `G85` | **WITHDRAWN 2026-08-25 (`D-118`, raised as `B-042`) — the gap was asserted past its source** | **The claim was that `TR-DM-03`'s *"seven-value status enum"* named a count whose members were listed nowhere in the corpus. They are listed, twice, in GOVERNING documents**: `v1-build-readiness-addendum.md` §231 and `blueprint.md` §500/§969 — `Pending`, `Published`, `Failed`, `Scheduled`, `Cancelled`, `ManualReady`, `MockPublished`. **The search that opened `G85` covered `docs/`, `docs/fn-specs/` and `Modular_PRD` and never covered `docs/source/`**, which is where the governing set lives and where a vocabulary would naturally be defined. `conflict_asserted_past_source`, and **the fourth instance of a claim made from an incomplete sweep**. **Found by Lane B while implementing against it** — it used the seven Addendum members and reported the register as wrong, which is the return path working. **Values propagated to `TR-DM-03` citing the Addendum, not the migration**, so the schema is not mistaken for the origin of a business vocabulary that already had an approved source. §5.14by |
| `G86` | **Closed 2026-08-25 (`D-115`) — a word carrying two meanings in governed tiers, defined in none** | **"Archived" is load-bearing in `Modular_PRD` §6.3 and in `AC-12a`, and no governed document said what it meant.** Audit **Step 9** instructed the definition — *"redefine 'archived' as retrievable rather than deleted"* — **and that redefinition was never performed.** The cost was not theoretical: **Step 9 contradicts itself in a single sentence**, telling the reader to set the value *at or above the statutory floor* **and** that archived means retrievable — *a period that disposes of nothing has no reason to meet a disposal floor.* `D-114` then compared 90 days to the five-year floor and called it twenty times too small, **which is comparing a move to a deletion**; retracted at three sites. **Closed by defining it in §6.3: moved and still retrievable, never deleted, and EXTERNAL to this system.** §5.14bv |
| `G87` | **Open — BACKLOG FEATURE, not v1** | **A retraction order for an article no longer in the current set has no path.** GRC on retraction binds data **while it is current** (`D-115`); archival ends its reach, so an order arriving afterwards has nothing to act on. **`D-114` created the reachability**: while `NFR-02` read *"never deleted"*, a published article never left the current set and retraction was always possible — restating it as *"not less than the statutory period; disposal only under a documented, approved policy"* made disposal permissible. **This is the honest consequence of stopping the lie, not a defect in the restatement.** Deferred because handling work **never triggered from this system** is a different intake shape, not a variation on the existing flow. §5.14bv |
| `G88` | **Open — the input to a `[V1]` criterion that nothing supplies** | **`AC-12a` requires the audit surface to state that records *"existed and are no longer retrievable"*, naming the policy and version, the period, and the archive location.** Under `D-115` the act producing those facts is **external to this system**, and **nothing tells the product it happened.** *This is `G46`'s shape one tier down* — *"retention class depends on a fact the product does not hold"* — and `G46` was resolved by ruling the fact must be **supplied to** the product rather than inferred by it. **The mechanism exists on paper and was never adopted**: the audit model §6.3's **disposal record**, written before the act, stored outside the table it describes, itself immutable. **The second unadopted §-section this thread has found**, after §5.3. **`G41`'s unmet dependency.** §5.14bv. **`D-128` scoping note, corrected `D-134`**: the reuse-eligibility window (`REUSE-WINDOW-90`, 90 days) and this gap's archival-absence surface (5 years, `D-134`) run on **different periods, not a shared clock as first guessed** — and remain **independent UI elements** regardless: reuse eligibility elapsing is never evidence for this gap's *"existed and is no longer retrievable"* claim, which still needs its own supplied fact. **Narrowed 2026-08-25 (`D-135`), not closed**: the semantic contract this gap asks for now exists in full — `RET-EDITORIAL`'s *"Supplied absence fact"* section names every field. **What remains open is the supply mechanism itself**, deferred (Project Scope, post-launch, `D-134`) — the product still holds no live instance of the fact. §5.14cp |
| `G89` | **Open 2026-08-25 — a derived tier created a `[V1]` commitment and nothing noticed** | **Nothing verifies that an acceptance criterion has a parent.** `Modular_PRD` carries 27 `AC-` rows including `AC-14`–`AC-21`, so `D-29` gives the series to that tier. The `Fn_Specs` introduce exactly two suffixed criteria and **neither has an upstream row** — but only one has a decision behind it: `AC-01a` was created by `G39`'s closure, which names it; **`AC-12a` appears in this register only as a REFERENCE** — *"product canary is `AC-12a`"* — **never as something a decision created.** `tier-sweep` reads decision IDs and cannot see this, because there is no decision to read. **`AC-12a` is promoted by `D-116`; the CONTROL gap is what stays open** — the next criterion written into a `Fn_Spec` will be just as invisible. §5.14bw |
| `G90` | **Open 2026-08-25 — the one field that describes acts outside the repository, and nothing reads it** | **An entry's `Evidence` line can assert an act that never happened.** `closure-readiness` proves `Verified-At-Commit` names a real commit; **no check reads `Evidence` at all.** Live instance: `B-038` carried *"Evidence: Chief Editor selection, 2026-08-25"* when **no selection had been made** — the transcript held Lane A saying selection was *available*. **It nearly moved the lane lock**, and what stopped it was Lane A asking the Chief Editor rather than reading the file. `arrival_not_correctness` (`C-22`, `F5`) in the field that by construction points OUTSIDE the tree. **The remedy is a person, not a check** — an assertion about what the Judge said cannot be verified from the repository, and building a probe that pretends otherwise would be `probe_that_cannot_fail`. Recorded so the limit is not mistaken for coverage. §5.14bx |
| `G91` | **Closed 2026-08-25 (`D-117`) — a fixture suite that breaks on the event it protects** | **Every lane-state fixture named a lane letter, silently assuming Lane A held the lock.** Moving it would have broken three: setting `B` `Active` when `B` already is produces **one** `Active` rather than two, and the *Eligible-beside-Active* and *Blocked-with-no-Active* cases would each have fired a **different finding than the one asserted** — passing while testing nothing. `D-106` drew this lesson once, *retarget at structure not at a live value*, and applied it to the documents the fixtures mutate **and not to the lane identity inside them.** **Fixed BEFORE the boundary, not after**; the suite reads which lane holds the lock and mutates by role. §5.14bx |
| `G92` | **Closed 2026-08-25 (`D-118`) — a tier column nothing could verify, invisible because nobody had ever ticked it** | **`tier-sweep` had no mapping for the "Phase closure" column.** `V1-PHASE-CLOSURE.md` is a governed tracking file that decisions routinely claim to affect — lane rows, boundary procedure, the artifact manifest, critic passes — and **a claim about it was exactly as checkable as any other and was checked by nothing.** It stayed invisible because the sweep only fails on a ✅ and **every prior decision wrote *"— unaffected"* there**, which it skips by design; the FIRST tick reported the column as unknown rather than verifying it. **Same shape as `B-045` one check over**: `channel-docs` couples four channel documents in both directions and `V1-PHASE-CLOSURE.md` is in neither set, which is why its §5.2 step 1 could drift to a retired kind while the four coupled documents all agreed. **A document that is the subject of claims and the member of no coupling set is unverifiable by construction.** §5.14by |
| `G93` | **Closed 2026-08-25 (`D-119`) — a fixture that asserted a live count** | **`D-113`s `G83`/`G84` fixtures assert on a check detail line, and did it with absolute literals.** **The channel grows**, so two turns later both fixtures failed **while the check was working perfectly.** This is `C-21`s tally problem **inside the apparatus built to catch it**, and it is `G91`s lesson one file over: `G91` was *a fixture must not name a lane*; this is *a fixture must not name a count*; **both are the same rule — assert a RELATIONSHIP, not a live value.** Closed by deriving the baseline from the live channel with the channel own parser and asserting `base` and `base + 1`: **the mutation moves exactly one counter by one**, which is the property actually under test and was never the literal. §5.14bz |
| `G94` | **Closed 2026-08-25 (`D-120`) — a correction that reached two tiers and missed the one a build lane reads** | **`A26a`, 2026-08-17, corrected the S1 Definition of Done** because the prior wording required a live database while `DEP-05` was withheld — its own note calls that *a live contradiction, not a deferral*. The corrected phrase, **unit-tested against a local or branch Postgres instance**, landed in `sprint-plan` §353 and in `Modular_PRD` `M1`. **`V1-BUILD-SPEC.md` kept the bare phrase *trigger written and unit-tested* for three months** and every check passed throughout. **The missed tier is the operative build document**, so Lane B built a static contract test against a DoD that never said which database — which is why `B-044` is a finding and not a violation. `G65` again, and **the oldest instance in this register by a wide margin**: arrival is checked, staleness is not, and a qualifier removed from one tier leaves the others agreeing with each other. Corrected here; the runner is now named. §5.14ca |
| `G95` | **Closed 2026-08-25 (`D-133`)** | **A brief is identified by a hash of its key fields (`D-121`).** Three sub-questions: **(1) different submitters collide?** No — `D-131`, records stay separate. **(2) does the source reference participate?** **Yes, as the primary/anchor field** — if framing text were hashed, a different-angle resubmission on the same source would never collide and `D-127`'s reuse-window would gate nothing. **(3) does the hash change on a pre-gate edit?** **Only if the source reference itself changes** — framing/notes are not hashed, so editing them is inert by construction; a genuine source correction recomputes live until the first gate. §5.14cb, §5.14cm, §5.14cn |
| `G96` | **Open 2026-08-25 — clarified 2026-08-25 (`D-132`): blocked on `S6` build sequencing, not a missing Chief Editor ruling** | **`articles` carries no submitter column**, and **the value cannot be trusted until `S6` authentication exists** (`X7`, `Modular_PRD` §445 — executor identity is self-asserted in Phase 0). **The role is already specified** (`SEC-03`); **`D-131`** additionally rules the column must distinguish channel, not just identity, once built. **Nothing here is the Chief Editor's to answer** — this gap closes when `S6` is built, a sequencing matter, not a decision. §5.14cb, §5.14cm |
| `G97` | **Closed 2026-08-25 (`D-122`, raised as `B-050`) — a record that contradicts itself, and a withdrawal made on one observation** | **`npx graphify hook-rebuild` intermittently writes `branchName: null` and `lastAnalyzedHead: null` over a good record while leaving `stale: false` untouched** — so the flag reports healthy and the data reports that nothing was ever analyzed. `graphify state status` shows `gitDir` and `commonGitDir` null alongside it: **the tool loses its git context and overwrites.** **`B-046` reported this and `D-118` withdrew it because the state had recovered** — which is `arrival_not_correctness` applied to Lane A’s own verification: **one later observation cannot distinguish repaired from intermittent**, and re-running the rebuild this pass repopulated the record correctly. **The severity is narrower than reported and the narrowing is the point**: `docs-drift` compares `lastAnalyzedHead` against HEAD and honours `stale` only when explicitly `true`, **so the check is not fooled and failed correctly.** The exposure is to a READER who sees `stale: false` and believes it — `G90` shape, a field a person reads and a control does not. **Closed by making the check own output teach the reader**: a null record now names the self-contradiction, because *"run hook-rebuild"* is the remedy for ordinary staleness and merely the **cause** of this one. **No fixture** — reproducing a non-deterministic external tool would be a probe that passes by luck. §5.14cc |
| `G98` | **Opened and closed 2026-08-25 (`D-124`) — a propagation fallback that trusted any ID in the cell** | **`tier-sweep` required a decision ID only when the Item cell named one; otherwise it accepted ANY ID in the cell.** `D-123` claimed a Phase-closure edit it never made, and a condition already mentioned in that file from an earlier pass satisfied the claim — `G58`, arriving through the fallback built to catch `G58`. **Closed by taking the owning decision from the enclosing section heading** rather than joining it to the existing candidates — a joined list would have made the sweep weaker, since its test is `.some()`. **Backtested against the full register at `D-126`**: 105 checkmarked rows, 74 depending on the fallback, zero mismatches; the stress-test fixture for the one untested branch (no heading seen yet) caught a defect in itself before certifying anything, recorded there rather than repeated here. §5.14ce |
| `G99` | **Closed 2026-08-25 (`D-131`) — Chief Editor ruled all three questions** | **Three legitimate channels named** (Chief Editor manual, POC payment, trend/fade-analysis-informed drafting — closed set for v1); **uniform reuse-eligibility treatment**, no channel bypasses `REUSE-WINDOW-90`; **different-submitter reuse is legitimate, no detection built**, with each channel's day-count kept separate rather than merged. **Confirms `D-121`'s submitter+hash+day key** rather than changing it. `G95`/`G96` are **unblocked, not answered** — carried forward with the third channel and the separate-record instruction as new inputs. §5.14cl |
| `G100` | **Opened and closed 2026-08-26 (`D-136`, raised as `B-057`) — a count inside the condition that gates phase closure** | **`C-26` read *“ten entries are `Applied`”* from `D-102` onward, in its heading and its opening paragraph.** `closure-readiness` **never gated ten**: it gates *every entry raised against the closing phase*, a set that grew with each correction Lane A applied, so the condition and its own control had long since parted. **A reader sizing Phase 1's remaining work from `C-26` would have sized it at ten.** `G55`, `G56`, `G58` and `G75` all name restatement as this corpus's drift mechanism; **this is the first recorded instance inside a closure condition.** **`G75` forbids correcting the number** — a corrected tally drifts at the next entry — so the tally is **removed and replaced by the rule that determines it**, with the figure left to the check that prints it every run. **`D-102`'s own record keeps *“ten”* untouched** (`D-104`: an answer is append-only). **`V1-PHASE-CLOSURE.md` was checked and is clean** — its Lane A row already stated the fact without the count, so the drift existed in exactly one place. §5.14cq |
| `G101` | **Opened and closed 2026-08-26 (`D-137`) — defects in the pending-semantic mechanism, found by executing it** | **(1) The pending marker counts FILES, not the live cycle** — live batches read *“1 of 12”* while seven stale orphans read *“13 of 19”*, overstating the work by more than half; Lane B repeated the inflated figure, correctly, because it is what the tool reports. **(2) Answering the orphans would have overwritten curated descriptions** — one names a hand-authored node, making *“fill every pending batch”* destructive when executed literally (`G51` in a new shape). **(3) Six communities were tagged `lang=pt` on plainly English content**, and the instruction demands the name be written *“in EXACTLY that language”* — obeying it would have put Portuguese names on English governance clusters. **(4) 825 entity nodes are undescribed BY DESIGN** under an anti-hallucination policy, so *“every node described”* is unsatisfiable and `B-041`'s *“no pending batch or community ingestion”* wording is kept. **(5) The ingest does not survive the next rebuild** — re-extraction drops every extracted node's description while `docs-drift` still reports *synced*, so **semantic completion is the LAST action of a pass, not a step inside it**; the recovery is to replay the dated `.graphify/` backup rather than re-author. **(1) and (3) are one shape: a tool's self-report taken as fact; (2) is why it matters; (5) cost this pass a full cycle.** §5.14cr |
| `G102` | **Opened and closed 2026-08-26 (`D-138`) — the outgoing lane owes a turn report and Lane A has nowhere to file one** | **`§5.2` step 1 requires the outgoing lane to raise a `Kind: turn-report` entry, *“required even when nothing was done”* (`D-105`) — and `docs/handoff/` is closed to Lane A twice over:** its README scopes raising to Lane B and Lane C, and `ENTRY_FILE` matches `/^[BC]-d+.*.md$/`, so an `A-` file is **silently ignored, not rejected**. Lane A could file one and **no control would read it** — `a_check_that_cannot_fail`, in the step that hands over the lock. **Not new**: Lane A was outgoing at `D-117` and filed nothing, and every *“outgoing lane files its report”* reference in the corpus resolves to `B-047`, a Lane B entry. **Ruled by the Chief Editor: Lane A’s turn report IS the boundary decision section in the register**, cited from `§5.0a`’s `Report` column — no new artifact, no channel change, and `D-117`/`D-118` had already done it in prose. **Opening the channel to `A-NNN` was rejected**: it would make Lane A both raiser and answerer in one directory, undoing the attribution `D-90` avoided. **Remains a duty, not a checked control**, and is recorded as such. §5.14cs |
| `G103` | **Opened and closed 2026-08-26 (`D-139`) — a single-process transient filesystem lock, distinct from `B-021`'s concurrency class** | **The prior turn cited `B-021`'s scope for a failure `B-021` does not describe.** `B-021` names a SECOND process touching the tree while fixtures run; the observed failure was the fixture runner ALONE hitting a millisecond-scale OS lock (`EBUSY`/`UNKNOWN`) on its own write, no concurrent process involved — the same *true-word-misread-as-wider-coverage* shape `D-137`/`G101` named one layer over. **`B-001` was hit twice not by chance**: it is the single file reused across roughly twenty of the sixty-two fixtures, the highest write exposure of any tracked path. **Fixed narrowly**: `harness.mjs`'s `read`/`write` retry only `EBUSY`/`UNKNOWN`/`EPERM`, bounded at four attempts with backoff; `ENOENT` and everything else still fails immediately. **Not `B-021`'s unbuilt lock** — items 2–5 of that entry's required repair remain unbuilt and unaddressed. **Proven by four fixtures against `withRetry` directly**: transient-clears-within-budget succeeds; persistent-transient still fails, not masked; non-transient fails on the first attempt. §5.14ct |
| `G110` | **Closed 2026-08-29 (`D-156`) — `D-108` did not implement the model `B-033` proposed, and `B-033` records both readings** | `B-033`'s *"What happened"* reports the Chief Editor's clarification as **at most one different lane `Eligible`, meaning a handover has been OFFERED but not accepted** — a **nomination** state, singular. `D-108`'s answer in the same file renders it as *"on completion the **others** become `Eligible`"* — plural, a **post-release** state. **Two readings, one document, and `D-108` took the plural one.** Everything downstream inherited it: `lane-state.mjs`'s *"`Eligible` beside an `Active` is the illegal state"*, the shared core (`D-152`), `V1-BUILD-SPEC.md` §2, and `D-155`, which released `LB-S1-02` into three simultaneous `Eligible` rows — **legal under `D-108` and illegal under the model actually intended.** Corrected by `D-156`. §5.14di |
| `G111` | **Opened and closed 2026-08-30 (`D-160`) — a review assignment conflated authorship with validation responsibility, and named no output channel** | **Lane B's Gap 9 review objected to being asked to "validate its own documents."** Repository evidence does not support that reading: every `B-NNN` entry's `Raised:` field names Lane B, `LANE-B-WORK-ORDER.md`'s own header reads *"Written by Lane A"*, and `docs/handoff/README.md` states Lane B/C raise entries while Lane A writes responses. **The actual defect is narrower and real**: `§2.3`'s verification instruction told Lane B to verify *"every entry you raised"* — correct for `B-NNN` findings, silent on whether Lane B must also validate Lane A-authored artifacts that reach it, such as this work order itself or a decision's Lane B-facing instructions. **Three fields were missing from the assignment**: artifact provenance (who authored it), review responsibility (why Lane B validates it regardless of authorship), and output route (handoff entry, conversational refinement, or turn report). Without them, Lane B applied an authorship test — *"I did not write this"* — where an independence test was intended — *"I did not write the correction, so I can verify it."* **Not a duplicate of `D-90`** (which opened the Lane B/C → Lane A channel), **`D-103`** (which deferred an `A-NNN` reverse channel as `P1`), or **`G102`/`D-138`** (which ruled Lane A's own turn report belongs in the boundary decision section) — checked against all three; none defines the output contract for a non-run Lane B *review* of Lane B-facing documents, which is what was missing. **Closed by `D-160`**: the work order's verification section now names provenance, responsibility, and output route explicitly, and states that authorship of current content is not a prerequisite for review. §5.14dm |
| `G109` | **Open 2026-08-29 — two committed documents are in graphify's manifest and absent from its graph, and `hook-rebuild` will not add them** | `docs/handoff/B-058-*.md` and `B-059-*.md` were committed at `f1b4d9d`, appear in `.graphify/manifest.json`, and produce **zero nodes** in `graph.json`. `graph-coverage` (`C-14` check 4, via `docs/graph-fragments/missing.js`) reports both as *absent from the curated graph*. **Two consecutive `npx graphify hook-rebuild` runs are byte-identical in outcome** — 1196 nodes, 2314 edges, *"Topology unchanged"* — so this is an **extraction gap, not a stale cache**: the file is read and yields nothing. Older handoff entries in the same directory (`B-044`, `B-057`) extract normally, so it is not a directory-wide exclusion. **Related, and reported independently by Lane B in `B-059`:** the same tool reset `.graphify/branch.json`'s `lastAnalyzedHead` to `null`, which `hook-rebuild` then restored — a second lifecycle defect in the same run. **NOT remediated, and the reason is a standing rule:** the only remaining lever is a from-scratch rebuild, and `CLAUDE.md` states that rebuilding without re-merging `docs/graph-fragments/` **silently loses the curated layer** (`G51`). **Trading a reporting gap for curated-layer loss is the wrong trade**, so the gap is recorded instead. **Why it matters more than a normal red:** `graph-coverage` is one of the three checks that **cannot run in CI** — its input is gitignored — so it is local-only, and a *permanently* red local check is the shape `D-83` warns teaches people to stop reading. **Candidate dispositions, none taken here:** teach `missing.js` to accept manifest presence as coverage; exclude `docs/handoff/` from coverage on the grounds that it is a channel rather than a governed document; or raise it upstream as a `@sentropic/graphify` extraction defect. **The first two weaken the check to fit the tool** and would need a decision, not a patch. |
| `G108` | **Partially closed 2026-08-29 (`D-157`) — `G108`a resolved and proven; `G108`b/c remain, deliberately** | **`G108`a — RESOLVED.** `bun install` (no `--frozen`) regenerated `bun.lockb` against the committed `next@^16.3.3`/`supabase@^2.116.0` manifest — completing an already-decided change, not a new dependency choice. **Proven, not asserted:** `bun install --frozen-lockfile` now exits clean — *"Checked 354 installs across 431 packages (no changes)"* — the exact command CI runs, run directly rather than inferred from reading. `bun.lockb` is `Modified`, staged and awaiting commit. **`G108`b — `eslint-config-next` is still pinned `^15.0.0` while `next` is `^16.3.3`.** A major-version skew in the config package that `eslint.config.mjs` extends (`next/core-web-vitals`, `D-66`). `bun run lint` currently passes, so this is **latent, not live** — recorded rather than fixed, because a passing gate is not evidence the pairing is supported. **`G108`c — an untracked `package-lock.json` (2026-08-29, 162 KB) now sits beside `bun.lockb`.** The repo pins `packageManager: bun@1.1.30`; **two lockfiles for one manifest is the ambiguity `G59` was closed to remove**, and npm resolving independently of bun is exactly the non-reproducibility that gap named. **`G108`b/c not fixed, and now deliberately rather than merely blocked** — Lane A is `Active` (`D-156`), so the carve-out reason no longer applies; these two are held back on judgment, not on lock state. `G108`b needs a compatibility decision this row cannot make responsibly — a version bump is a choice, not a sync — and a currently-passing lint gate is not evidence the pairing is supported long-term. `G108`c — `package-lock.json` remains untracked and unremoved: it is the Chief Editor's own local artifact, not Lane A's to delete without being asked, and it affects nothing committed while untracked. **Recommendation, not action:** delete it (bun is the pinned manager, `packageManager: bun@1.1.30`) or add it to `.gitignore` so its recurrence stops reading as drift. |
| `G106` | **Closed 2026-08-29 (`D-150`) — the row is split and the two-condition rule is recorded in the living tier** §5.14de | `V1-BUILD-SPEC.md` §6's *"POC commercial flow — deferred scope"* row covers **both** the manual P0-EVR lane **and** `B-008`'s built commercial model (`cart_id`, payment-provider config, payment/obligation drains, asynchronous account claiming, delivery portal, provider-ID split — *"NOT adopted"* per `D-96`). It carries **one** condition: *"Ready when `G7a` charters the manual lane and `B-P0-06`'s ten boundaries carry real values."* **Those two gate the manual lane only.** `B-008`'s own option 2 and `D-96` require something categorically different for the built model — *"a separate POC Charter and Product Requirements"*, explicitly **a Charter-level act**. **The failure mode is silent and directional:** when `G7a` and `B-P0-06` resolve, the row reads ready and the built half rides along on a condition that was never about it. **Second landing site, same defect:** `M-POC-REQUIREMENTS.md` §8's exclusion list names the same items with **no return condition at all** — `D-145` noted the asymmetry without closing it (*"Left here unchanged because the gate is Charter-level, not because this exclusion list was re-affirmed on its own terms"*). **`D-148` applied its own test correctly and to the wrong scope**: it asked *"does this condition need to be checkable after v1 freezes?"*, answered **no** for `M-POC` readiness because that is sequenced within v1 (`T3`) — which is true of the **manual lane** and false of the **built model**, which needs a new Charter and is therefore past-v1 by construction. **Sharpened while drafting the fix — the built model needs TWO conditions, and naming one hides the other.** A prohibition being **lifted** is not the same act as scope being **authorized**. `NG-02` and `NG-03` already carry their own `Ready when` (`D-148`) and would lift the *prohibition* on accounts and monetization; **neither authorizes anyone to build a cart** — that is `B-008` option 2's separate POC Charter and PRD, a distinct Charter-level act at Alpha Portfolio level. **`D-145` used only the first framing** (*"gated by `NG-02`"*) and `D-96`/`B-008` only the second; **both are right and each alone is incomplete.** **Draft fix, parent first:** ① record the two-condition rule in `Modular_PRD` §2.5.1 — the living tier, since it outlives v1 and generalises beyond this item; ② split `V1-BUILD-SPEC.md` §6's row in two — manual lane keeps `G7a`+`B-P0-06`; the built model cites §2.5's `NG-02`/`NG-03` for the lift **and** the POC Charter for the authorization; ③ `M-POC` §8's exclusion line **cites** that row rather than restating it (`D-54`, `G55`). **Not applied — `Modular_PRD` and `V1-BUILD-SPEC.md` are governed tiers and this is a scope placement, not a Lane A correction.** |
| `G107` | **Open 2026-08-29 — `D-148`'s "Ready when" discipline is prose-only and no check enforces it** | `G106` passed **17/17 consistency checks** while carrying a deferred item with no applicable return condition. **Nothing in `C-14` reads backlog rows**: `tier-sweep` verifies a decision *arrived* in a tier, `decision-status` cross-references `Q`-row and `G`-row status, and neither looks at whether a deferred row states how it comes back. **A deferral with no return path is a drop**, which is the whole reason `D-147`/`D-148` created the discipline — and the discipline has no control. **Why the obvious check does not work:** a rule demanding *"every excluded row has a `Ready when`"* would fire on `NG-10`, which **correctly** has none — it is a permanent constraint on behaviour, not a deferred feature (see `G105`). **Applicability is judgment, and a check that cannot make it would be `a_check_that_cannot_fail` in the other direction.** **Draft fix — check the marker, never the judgment:** require each row in the governed backlog tables to carry **either** a `Ready when` **or** an explicit *"no `Ready when` — <reason>"*, the same shape as `handoff-response` requiring a disposition rather than judging its correctness. Mechanical, and it makes the `NG-10` case a declared state instead of an absence indistinguishable from an oversight. **Specified, not built** — `scripts/checks/` is Lane A's surface (`D-84`) but this needs the marker convention agreed first. |
| `G105` | **Open 2026-08-28 — corrected: the real dependency is `FB-05`/`CR-14`, not a `Ready when` on `NG-10`** | *(Originally opened asking whether `NG-10` needs a Charter-amendment-only `Ready when`, matching `NG-03`'s shape. That was the wrong question.)* `INTELLIGENCE_LAYER.md`'s auto-advance line already carries a tracking identifier: **`TC9`** (`docs/journal/2026-08-16-sprint-plan.md` §4.2 — *"Auto-advance is a gate bypass by definition... must not be built"*), folded into Deviation Register row `D5` (*"closes across S0–S6"*). **Unlike `X8`** (Stripe scaffolding, explicitly assigned `→ S0` because removal was a concrete action), **`TC9` has no scheduled sprint, because none is needed** — the fix is passive: don't build the forbidden behaviour when the real feature is eventually built. **`NG-10` needs no `Ready when` at all** — it is not a deferred feature waiting to return like `NG-02`/`NG-03`; it is a permanent constraint on *how* any future auto-advance-adjacent feature must behave, for as long as `O-01` holds. **The genuine open dependency is `FB-05`**: `CR-14` (AI tagging/scoring at the Reporter gate — the feature `INTELLIGENCE_LAYER.md` describes) has no functional requirement yet, and no sprint currently builds Reporter-gate intelligence at all. **Its decision request is `Q9`** (`Modular_PRD` §10 — *"In or out of v1?"*, owner: **customer via the project sponsor**, blocking *"whether an FR is added before S1"*), which is what actually closes `FB-05`; `NG-10` is unaffected either way, since it constrains *how* the feature behaves rather than *whether* it is built. There is no "next sprint" to name — not `S2`, not `V2` — until `Q9` is answered and a sprint is actually assigned; naming one now would be exactly the invented-number this corpus forbids. **Closes when `Q9` is answered and `FB-05` gains a named sprint, not before.** **Propagated to `INTELLIGENCE_LAYER.md`'s `Change Log / Handoff / QA` section**, which had carried `G104`'s superseded *"reconciling it is Sprint 0 work"* — true of the plan pack generally, false for `TC9` specifically, and stale from the moment this row was written (`G65` again, in Lane A's own two-turn-old edit). |
| `G104` | **Closed 2026-08-28 (`D-149`) — commit authorized out of turn, not by Lane A becoming `Active`** | `INTELLIGENCE_LAYER.md`'s Scoring Rules specify **"0.6 minimum to auto-advance,"** contradicting `NG-10` (`Modular_PRD` §2.5: no confidence score may ever auto-advance a gate — auto-advancing past a named executor is a gate bypass by definition). **Annotated in a dedicated `Change Log / Handoff / QA` section, citing this row** — moved out of the inline `Scoring Rules (rule-based, v1)` section on Chief Editor direction, since sitting inline under a heading naming "v1" made a cross-document disagreement (this non-governing file versus the real v1 spec) read as a v1 self-contradiction. The offending line itself stands unchanged — plan-pack reconciliation remains Sprint 0 work per `docs/README.md`, not this pass's to perform. **Not a `docs/handoff/` item** — that channel is closed to Lane A by design (`G102`, `D-138`); this is Lane A's own gap, tracked here instead. *(Originally opened as blocked on the commit window: Lane A `Blocked`, Lane B sole `Active` on `LB-S1-02` (`D-142`), `D-101` permits only the `Active` lane to commit. That premise did not hold — closure came from a direct Chief Editor instruction to commit, not from a Sprint boundary. See `D-149`.)* §5.14dd |
| `G60` | **Closed 2026-08-20** | `D-62` §5.14w — `FR-14` written into `Modular_PRD` §5 with `US-14`, `AC-21`, and a §7.2 Project Scope row. **No Customer Request origin — disclosed, not absorbed.** S3 |
| `G59` | **Closed 2026-08-21** | `D-64` §5.14y — `bun.lockb` generated with bun 1.1.30 and committed. **413 packages pinned**; `--frozen-lockfile` exits 0, proving the lockfile resolves completely. Satisfies `R3` DoD **D-6** |
| `G58` | **Closed 2026-08-20** | Decisions landed in the register only; three sibling tracking files went stale. `D-54` §5.14o — the propagation rule |
| `G57` | **Closed 2026-08-20** | `D-55` §5.14p — eight-row mapping specified as data, **role-keyed**. Overturns `D-53`'s name-keyed draft: `logged`→`Discovered`, `reported`→`Logged`. `Validated` and `Needs Revision` backfill empty |
| `G50` | **Closed 2026-08-20** | Distribution provenance — `D-51`, §5.4, `docs/graph-fragments/README.md` §2 |
| `G51` | **Closed 2026-08-20** | Curated graph layer rescued to `docs/graph-fragments/` — 61 nodes, 142 edges. §5.4 |
| `G52` | **Closed 2026-08-20** | Distribution-specific commands disclosed — `docs/graph-fragments/README.md` §3 |
| `G53` | **Closed 2026-08-20** | Shared core reconciled across all three agent files, verified byte-identical. §5.4 |
| `G54` | **Closed 2026-08-20 (`D-60`) — row corrected 2026-08-21** | **Upstream command surface verified from source, with nothing installed** — the recorded route (install `uv`, install `graphifyy`, diff `--help`) was never necessary. Five commands `CLAUDE.md` mandates are **confirmed absent upstream**; `merge-graphs` **exists** upstream, correcting an earlier claim of nine. **The stranded-fragments warning was withdrawn:** `merge7.js` is plain Node and never invokes graphify, so the curated layer never depended on either distribution. §5.14u, `docs/graph-fragments/README.md` §6. *(This row read **"Open — deferred by decision … needs a Python toolchain"** for two days after `D-60` closed it. `D-60`'s tier table marked the register ✅, but `tier-sweep` treats `register` as true by construction, so the ✅ proved nothing about §5.1. Found by `decision-status` direction D on its first run — see `G71`.)* |
| `G55` | **Closed 2026-08-20** | All ten backfilled above; `G40` given a detail section, `G49` an ID-keyed anchor, and the duplicate `G39` row removed. §5.4 |

**The table above is authoritative. Counts are deliberately not restated here.**

This line previously read *"Closed: 6 (`G1`, `G2`, `G12`, `G13`, `GA8`, plus `G21` withdrawn)"* and was badly stale by the time anyone read it — sixteen rows had closed since. **A restated count is the drift mechanism**, not an incidental victim of it: this project has caught the same defect in `FB-04`, `A11`, `A26`–`A28`, the `TX` phase table, the `T1` item count, and now here.

Derive counts from the table when needed:

```
awk '/^## 5.1 Gap disposition/,/^## 5.2/' docs/v1/V1-DECISION-REGISTER.md \
  | grep '^| `G' | grep -cE '\| Open'
```

**Categories that need naming rather than counting:** `G15`/`GA5` are escalated to counsel and pair — do not close one on the other. `G11` **was** the only unowned gap — **owned by the Chief Editor since 2026-08-20** (`D-58`). No gap is now unowned. `GA2` and `GA6` are **half closed** — the stated and disclosure halves are done; the substantive halves remain.

## 2.3 Document intent hierarchy — `D-29`, `D-30`

**Chief Editor direction, 2026-08-19.** Establishes the order of source of intent and resolves the spec-class question left open at §6.1.

| # | Tier | Role | Status |
|---|---|---|---|
| 1 | **`PRD`** | Project requirements — the customer's original record | ✅ Exists, frozen at `53ace36` |
| 2 | **`Modular_PRD`** | Modular product requirements — the governed spec | ✅ Exists, v1.6 |
| 3 | **`Fn_Specs`** | **Functional Specs.** Feature-level breakdown from `Modular_PRD`. **For v1 this is the official spec to create first** | ❌ **Does not exist** |
| 4 | **`SPECS`** | **Technical Specs.** Component-level technical breakdown of each `Fn_Specs` component | ❌ **Does not exist** |

### `D-29` — the hierarchy and its change rule

Intent flows downward: `PRD` → `Modular_PRD` → `Fn_Specs` → `SPECS`. Each tier elaborates the one above and may never contradict it — the same rule already governing the Charter tier.

**Change localization is the purpose.** A change lands in the tier that owns it, and only that document changes. A behavioural change touches `Fn_Specs`; a component-implementation change touches `SPECS`; neither reaches back up into `Modular_PRD` or `PRD`.

### `D-30` — `SPECS` structure and the redundancy rule

Each `SPECS` document opens with an **executive summary** carrying: the component's intent, why it exists, its success criteria, and its limitations — hardware, libraries, infrastructure. A tech-stack section is added **only when the build starts**, not before.

> **The redundancy rule.** If a behaviour can be defined clearly enough in `Fn_Specs`, then a `SPECS` document for it is **redundant and must not be written.** `SPECS` exists only where functional definition alone cannot determine the implementation.

This is a genuine constraint, not a preference: it prevents `SPECS` becoming a restatement layer, which is the mechanism behind this project's recurring drift defect — one fact in two documents, one updated and one not.

### `D-31` — spec tooling: use `spec-writing`, never `specs-creator`

Two skills are available. They are not alternatives; only one is compatible with this project's governance.

| | **`spec-writing`** ✅ | **`specs-creator`** ❌ |
|---|---|---|
| Nature | A **standard** — templates and structure | A **generator** — emits documents |
| Input | Existing requirements | A feature **description** |
| Output | One spec, structured | **PRD + tech spec + UX spec, bundled** |
| Direction | Transforms downward from requirements | Generates outward from an idea |
| Trigger | Invoked deliberately | **"Use PROACTIVELY… must be triggered"** |

**Why `specs-creator` fails structurally here — four reasons, any one sufficient:**

1. **It creates PRDs.** `docs/PRD.md` is frozen byte-identical at `53ace36` and is the most protected artifact in the model. A skill whose stated job includes *"Create PRD"* either edits the frozen record or produces a **competing** one — a second PRD in a hierarchy that permits exactly one.
2. **It generates from a description, not from requirements.** This project's traceability runs the other way: every specification anchors to a `CR-*` or carries a `PSK-*` key. Generating from prose produces precisely the unanchored scope `FB-04` exists to catch — the largest feedback item on the map.
3. **It bundles three tiers into one act.** `D-29` separates tiers so *"a change lands in the tier that owns it, and only that document changes."* Emitting PRD, tech spec, and UX spec together defeats change localization, which is `D-29`'s purpose rather than a side effect.
4. **"Use PROACTIVELY" meets `G11`.** Three agents edit this repo with no arbitration rule. A self-triggering generator, in a repo where one agent already silently dropped another's operative content (`G32`), is a live risk and not a theoretical one.

**Why `spec-writing` fits:** it is a standard applied to existing requirements — exactly `Fn_Specs`' job — and it creates nothing on its own.

**The one adaptation required.** `spec-writing`'s structure places Data Models, API Contracts, and UI in the same document. Under `D-30` those belong in `SPECS`. Applied unadapted it would produce a `Fn_Specs` duplicating `SPECS` content — violating the redundancy rule. `FN-GATES-01-05.md` carries them as §9 pointers instead, naming which five components need `SPECS` and why.

~~**Binding:** `specs-creator` is not to be invoked in this repository.~~ **Superseded same day by `D-32`.**

### `D-32` — amends `D-31`: two-stage spec pipeline

**Chief Editor challenge, 2026-08-19, upheld.** `D-31`'s prohibition rested on a terminology error and was over-broad.

**The terminology correction, recorded so it does not recur:**

| Document | What it actually is |
|---|---|
| `docs/PRD.md` | **Project** Requirements Document — the first draft covers **all scopes**, not only the product |
| `docs/Modular_PRD.md` | **Product** Requirements Document — the product-scoped spec |

`D-31` claimed `specs-creator` "creates PRDs, and `PRD.md` is frozen." That was an **acronym collision, not a real one.** A generated *Product* Requirements Document collides with neither: `PRD.md` is a different artifact class, and `Modular_PRD` already occupies the product tier. **Objection 1 of `D-31` is withdrawn.**

**Objection 3 is also withdrawn.** `specs-creator`'s bundle — overview plus behaviour plus interface — maps onto what `Fn_Specs` needs, because **UX implies behaviour**. The bundling is appropriate at this tier rather than a defeat of change localization.

**Objections 2 and 4 stand, and are addressed by invocation discipline rather than prohibition.**

#### The pipeline

```
Modular_PRD feature group
      │
      ▼
specs-creator  ──▶ first-draft Fn_Specs      (generate)
      │
      ▼
spec-writing   ──▶ refined Fn_Specs          (fine-tune to standard)
      │
      ▼
D-30 filter    ──▶ SPECS, conditional only   (candidates, then filtered)
```

#### Binding guardrails

| # | Rule | Addresses |
|---|---|---|
| 1 | **Input must be a `Modular_PRD` feature group — never a prose description.** Anchors travel with the input; a free-form description produces unanchored scope | `D-31` objection 2 / `FB-04` |
| 2 | **Explicit invocation only. Never proactive**, despite the skill's own framing | `D-31` objection 4 / `G11` |
| 3 | **Emitted tech-spec content is a `SPECS` candidate list, not a `SPECS` document.** Apply `D-30`'s redundancy test to each item; anything `Fn_Specs` already determines is discarded | `D-30` |
| 4 | **UI stays in `SPECS`.** `Fn_Specs` remains behaviour-focused. *(Chief Editor decision — the UI/UX linkage argued in the challenge was considered and UI placement left unchanged.)* | `D-30` unchanged |
| 5 | `spec-writing` always runs after generation. `specs-creator` output is a **draft**, never a finished spec | Quality |

#### Why the feature-group input matters

`Modular_PRD` gives the overview of a feature — or a **group of related features that cannot function without each other**. `Fn_Specs` breaks that group down along its own line of logic, one document per group. That is what keeps the pieces composable: each spec is a brick that stands alone because its group's internal dependencies were resolved before it was written. Feeding the generator a loose description instead of a resolved group produces overlap, and overlap is repetition.

**Effect on existing work:** `FN-GATES-01-05.md` is unaffected — it was written from a resolved feature group and keeps UI in `SPECS`. Its §9 filter already implements guardrail 3.

### `D-33` — amends `D-32`: templates yes, workflow no

**Found by executing `D-32`, not by reviewing it.** The pipeline was invoked on the publication feature group and **could not run**. Three structural blockers, verified by direct check:

| # | Blocker | Consequence |
|---|---|---|
| 1 | `specs-creator` declares a dependency chain `app-vision.md → prd.md → tech-specs.md → ux.md` and the rule *"NEVER create a spec if its dependency doesn't exist yet."* **`app-vision.md` does not exist here** | Its own rule blocks it at step one |
| 2 | *"DO NOT create specs outside designated `specs/` directory."* This project uses `docs/v1/fn-specs/` per `D-29`. **`specs/` does not exist** | Compliance would create a parallel spec tree outside the intent hierarchy |
| 3 | Templates are referenced at `.claude/skills/specs-creator/templates/`, which **does not exist in this repository** | The workflow's first task cannot resolve |

**Creating `app-vision.md` and `specs/` to satisfy it was considered and rejected** — that would add a fifth intent tier above `PRD` and a parallel tree beside `Fn_Specs`, defeating `D-29` in order to satisfy a tool.

#### What is salvageable

| Asset | Verdict |
|---|---|
| `templates/PRD.md` | ✅ **Adopt.** Despite the filename it is a **feature-spec** template — *"[Feature/Component Name] Specification"* — and its **User Stories** and **Risks and Mitigation** sections are genuine improvements over `spec-writing` alone. Omit its *Technical Stack* section per `D-30` |
| `templates/ux.md` | ❌ **Not applicable.** It is a visual-design spec — colour systems, components. That is UI, which stays in `SPECS` |
| `templates/tech.md` | ⏸ **Hold for `SPECS`**, not `Fn_Specs` |
| The workflow | ❌ **Do not execute.** Blockers 1–3 |

#### Revised rule

**Use `specs-creator`'s feature-spec template as structural input; do not execute its workflow.** `spec-writing` remains the standard. The merged structure is: Overview · User Stories · Requirements · Behaviour · Acceptance Criteria · Edge Cases · Dependencies · Risks · `SPECS` candidate filter.

`FN-PUBLICATION-09-10-13.md` is the first spec written to the merged structure and is the reference example. `FN-GATES-01-05.md` predates it and lacks User Stories and Risks — **acceptable, not a defect**; revise it only if that group is reopened for another reason.

> **Worth recording as method:** `D-31` was wrong on analysis, `D-32` was wrong on execution. Neither error surfaced until the tool was actually run against a real feature group. A pipeline that has never been executed is a proposal, not a decision.

### `D-34` — amends `D-33`: the chain is a labelling map, not a blocker

**Chief Editor correction, upheld.** `D-33` reported that `specs-creator`'s dependency chain could not be satisfied because `app-vision.md` does not exist. **It does exist — under a different name.**

| `specs-creator` | This project | Role |
|---|---|---|
| `app-vision.md` | **`docs/Modular_PRD.md`** | Product vision. **An app *is* a product** |
| `prd.md` | ~~`docs/v1/fn-specs/`~~ → **`docs/fn-specs/`** *(moved by `D-36`)* | Feature behaviour, per group |
| `tech-specs.md` | **`docs/v1/specs/`** | Implementation **big picture**, including tech-stack |
| `ux.md` | **`docs/v1/specs/ux/`** | UI/UX **per tech-stack** — Vue versus Angular for identical behaviour |

**`D-33` blocker 1 is withdrawn.** Blockers 2 and 3 were also labelling: `specs/` maps to `docs/v1/specs/`, and the template path resolves in the plugin directory rather than the repo.

#### The pattern this makes visible

**Three times now I have mistaken a naming difference for a structural incompatibility:**

| Error | The "conflict" | What it actually was |
|---|---|---|
| `D-31` | *"`specs-creator` creates PRDs and `PRD.md` is frozen"* | An acronym collision — Project versus Product |
| `D-33` | *"`app-vision.md` does not exist"* | It does, named `Modular_PRD` |
| Publication | *"`pub_target` and `platform_type` mismatch"* | Orthogonal axes, not duplicates |

**The countermeasure:** before recording an incompatibility, check what the unfamiliar label **maps to** in this project. In a repository this heavily governed, most apparent conflicts are vocabulary, and this project already carries `D-22` — dual financial terminology — as a precedent for exactly that.

#### Why the layering matters operationally

A **tech-stack change** lands in `specs/`. A **stack-specific UI consequence** lands in `specs/ux/`. **Neither disturbs `fn-specs/`.** Behaviour stays stable across a stack pivot — which is `D-29`'s change localization producing its intended benefit rather than merely asserting it.

#### Folder structure

`docs/v1/` is the V1 build; `docs/v1/README.md` records the tree. **Folders are organised by tier, not by sprint**, because a feature group routinely spans sprints — `FN-GATES-01-05` spans S1–S2 and `FN-PUBLICATION-09-10-13` spans S4–S5 — and `D-32` makes the group the indivisible unit. The three upper parents carry the sprint tracking: every spec states its sprint in its header, and `V1-BUILD-SPEC.md` §5.1 holds the sprint→artifact index.

**Confirmed 2026-08-19:** tier folders with sprint tracking in the `V1-*.md` parents is correct.

### `D-35` — two trackers, split by scope

**Chief Editor decision, 2026-08-19.** Progress is tracked in two places, divided by what changes:

| Tracker | Scope | Changes when |
|---|---|---|
| **`Modular_PRD` §8.0** | Build versions and their sprints — `V1`, `V2`, `V3`… | A sprint completes or a build version opens |
| **Alpha Portfolio plan** | Projects — `AP-01`, `AP-02`, `AP-OD4` | A project is chartered, closed, or transferred |

**The dividing principle: a sprint stays inside one project; a new project is a portfolio event.** `V1` and `V2` are sprints of the same project unless the Portfolio charters a new one — so they belong to the product tier, while project transitions belong to the portfolio tier.

This resolves the objection raised against using `Modular_PRD`: *requirements are not progress.* True in general, but sprints deliver `Modular_PRD`'s **own** requirements, so tracking them there does not invert `D-29`'s flow. Project-level tracking would have, which is why it sits at the portfolio instead.

#### Notation — mandatory

The one objection that survived, now handled by convention:

| Form | Means |
|---|---|
| **`V1`, `V2`** — capital V, no decimal | **Build version** with its own sprints and frozen `V*-*.md` operative set |
| **`1.7`, `1.8`** — decimal, no prefix | **A document's own revision lineage** |

`Modular_PRD` v1.8 has nothing to do with build `V1`. Writing "version 1" for a build, or "V1.8" for a document, is an error. **`D-22` is the precedent** — two meanings of *cost baseline* required a decision to separate, and this is the same shape.

#### ~~Deferred to the `V1`→`V2` boundary~~ — **WITHDRAWN 2026-08-19**

The concern recorded here was that `V2` would modify files frozen `V1` specs describe, leaving those specs frozen and inaccurate. **It rested on a misreading and does not arise.**

**`V1-*.md` are tracking files, not specs.** The distinction:

| Artifact | Version-scoped? | Freezes? |
|---|---|---|
| `V1-DECISION-REGISTER.md`, `V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md` | **Yes** — they record what the `V1` sprint decided, built, and required | **Yes**, when `V1` closes |
| `fn-specs/`, `specs/`, `specs/ux/` | **No** — no spec carries a version prefix | **No** — living documents that `V2` continues to edit |

Freezing `V1-*.md` freezes **the record of a sprint**, not the specifications. There are no frozen specs to go stale, so no supersession treatment is needed and nothing must be settled before `V2` opens.

> **Fourth error of the same family.** `D-31` (Project vs Product `PRD`), `D-33` (`app-vision.md` vs `Modular_PRD`), `pub_target` vs `platform_type`, and now tracking files vs specs. Each time an incompatibility was recorded where the existing structure already resolved it. The `D-34` countermeasure — *check what the unfamiliar label maps to before recording a conflict* — is extended: **also check what artifact class it belongs to.**

### `D-36` — specs leave the version folder; sections carry their origin

**Chief Editor approval, 2026-08-19.** Two changes, both following from *tracking files ≠ specs*.

#### Structural: specs move out of `docs/v1/`

Specs correctly carry **no build-version prefix** — they are living — but sat inside a version-named directory. When `V2` opened, every available move would have been wrong: duplicate them into `docs/v2/` and they drift; move them and `V1`'s tracking references orphan; leave them and living documents sit inside a frozen folder.

| Before | After | Lifecycle |
|---|---|---|
| `docs/v1/fn-specs/` | **`docs/fn-specs/`** | Living |
| `docs/v1/specs/` | **`docs/specs/`** | Living |
| `docs/v1/specs/ux/` | **`docs/specs/ux/`** | Living |
| `docs/v1/V1-*.md` | *unchanged* | **Frozen at sprint close** |

Specs now never move again, and `docs/v2/` appears beside `docs/v1/` without touching them. Separation is by **lifecycle**, not by version.

#### Convention: section-origin marking

A living document edited across builds loses the record of what each sprint delivered — unless each section says. Every spec section carries its originating build:

| Marker | Meaning |
|---|---|
| `[V1]` | Section originated in build `V1` |
| `[V1→V2]` | Originated in `V1`, materially revised in `V2` |
| `[V2]` | Added in build `V2` |

**An unmarked change to a `[V1]` section is a defect, not an update.** That rule is what makes per-section content hashing meaningful across builds: without it, a hash mismatch cannot distinguish an authorised revision from silent drift.

This extends the discipline already in `requirements-traceability-map.md`, where `CR-01`–`CR-19` are SHA-256 anchored to customer text at `53ace36`. Same mechanism, applied one tier down.

Both existing specs are marked **entirely `[V1]`** — both were written within build `V1`.

### `D-37` — plan-pack reclassification; `D5`'s characterisation corrected

**Chief Editor clarification, 2026-08-19.** `docs/DATA_MODEL.md`, `docs/ARCHITECTURE.md`, and `docs/TASKS.md` came from the **original Q&A flow alongside `PRD.md`**. They are **frozen candidate references**, same status class as `PRD.md` — frozen because tracking moved on, not because they are wrong.

#### `D5` overstated the case, and it cost something

`D5` records the plan pack as *"generated at scaffolding time from the app name and summary rather than from the governing documents."* **That is not supportable against the content:**

| Evidence | Cannot come from a name and a one-line summary |
|---|---|
| `DATA_MODEL.md` names the exact six `gate_role` values — `reporter`, `investigator`, `journalist`, `senior_journalist`, `chief_journalist`, `chief_editor` | Matches the applied schema **exactly** |
| `ARCHITECTURE.md` §Key User Action Flow | The full five-gate sequence with per-state transitions |
| `TASKS.md` Sprint 1 DoD | Effectively `CR-19`'s success scenario, verbatim in substance |

**Where they were right and the governing set was wrong:** `ARCHITECTURE.md` states *"Next.js (App Router) + Supabase (Postgres + RLS) + Vercel"* — **the actual provisioned stack.** `D4` existed only because the Addendum assumed FastAPI, self-hosted Postgres, and Redis/Celery. The plan pack was accurate about the substrate the whole time; `D5`'s framing caused it to be dismissed wholesale rather than mined.

**Corrected status:** frozen candidate references. **Accurate about the substrate, silent on governance** — not "wrong about governance," because they predate it. The sprint plan §4.1 already conceded they are *"authoritative-in-fact about the architecture"*; `D5`'s summary line never caught up.

#### Challenge against current design

| Reference | Claim | Verdict |
|---|---|---|
| `ARCHITECTURE.md` | Next.js + Supabase + Vercel | ✅ **Vindicated** — this is the ratified stack |
| `DATA_MODEL.md` | Six `gate_role` values | ✅ Matches applied schema |
| `DATA_MODEL.md` | 8 workflow states | ⚠️ Addendum specifies 10 (`X3`). **Note: the applied schema follows the plan pack, so the Addendum is the outlier**, not the schema |
| `DATA_MODEL.md` | `publication_target` singular | ❌ `TC2` — cannot express "WordPress Published + LinkedIn ManualReady" |
| `DATA_MODEL.md` | No `actor_id` | ❌ `TC4` — `SC4`'s "who" has nowhere to go |
| `DATA_MODEL.md` | No `line_assignment` | ❌ `X5` — four-eyes unevaluable |
| `DATA_MODEL.md`, `ARCHITECTURE.md` | *"transitions validated server-side in `lib/pipeline/`"* | ❌ **`TC1`** — the anon key is public, so application checks are advisory. Enforcement must be in Postgres |
| `ARCHITECTURE.md` | AI tagging at Reporter gate, listed under "Now" | ⚠️ `CR-14` has **no FR** (`FB-05`). The reference assumed a capability the governed spec never specified — the same gap seen from the other side |
| `TASKS.md` | Four sprints; v1 milestone at end of Sprint 2 | ❌ Superseded by S0–S6; the success scenario lands at S4 |
| `TASKS.md` | Sprint 1 DoD: *"advance through all 5 gates"* | ❌ `FR-04` — T5 is human-executed; an agent attempting it is refused |
| `TASKS.md` | Sprint 4: *"Bulk gate advancement for multi-select"* | 🚩 **Trap.** Bulk advancement bypasses per-gate validation and per-transition logging — a gate bypass under `O-01`/`NG-10`. **Must not be mined from this reference** |

#### New gaps found by this review

| # | Gap | Severity |
|---|---|---|
| ~~**`G37`**~~ | ~~Topic cardinality is contradictory~~ — **WITHDRAWN 2026-08-19.** Not a contradiction: **two concepts, not one.** See `D-38` | — |
| ~~**`G38`**~~ | ~~UI surfaces carry no requirement~~ — **RESOLVED 2026-08-19.** Defaults to `CR-04`, which carries `TR-DM-05` (data) and **no FR**. See `D-38` | Folds into `CR-04` |

### `D-38` — topic semantics and the `CR-04` default

**Chief Editor clarification, 2026-08-19.** Both `G37` and `G38` resolve, and `G37` was my error.

#### `G37` withdrawn — the topic *is* the business

**This is an editorial business, so a topic is not a label; it is the subject.** Two distinct concepts share the word "topic," and I read them as one:

| Concept | Mechanism | Cardinality | Purpose |
|---|---|---|---|
| **Subject topic** | `articles.topic_id` — single FK | **Exactly one** | What the article *is about*. One topic to one article is the **start direction** |
| **Analytical tags** | `trend_signals.signal_type = 'topic_tag'` | **Many** | **Trending analysis and different-angle analysis** — not the article's subject |

The schema is **correct as applied**. A single FK for the subject and a multi-valued signal table for analysis is the right shape, not a conflict.

**What is genuinely imprecise is `FR-01`'s wording.** *"Log an article by URL with ≥1 topic tag"* conflates the two: it reads as cardinality on one concept when there are two. `AC-01` inherits the same phrasing.

> **New item — `G39`:** restate `FR-01`/`AC-01` to separate **exactly one subject topic** from **zero or more analytical tags**. Documentation only, and it belongs in `Fn_Specs` for the gates group. **No schema change** — the schema was never wrong.

#### `G38` resolved — it defaults to `CR-04`

UI surfaces trace back to their originating Customer Request. Verified:

| Surface | CR | Coverage |
|---|---|---|
| Board | `CR-13` | `FR-08` ✅ |
| Article Detail | `CR-10` | `FR-02`, `FR-03` ✅ |
| Audit Log | `CR-07`, `CR-11` | `FR-07` ✅ |
| **Topics** | **`CR-04`** | **`TR-DM-05` only — a *data* requirement, no FR** |

`CR-04` is the main CR carrying data coverage without functional coverage. `G38` therefore is not a standalone gap; it **defaults to `CR-04`**, and any Topics-surface work traces there.

*(Distinct from `CR-14`, the one genuinely **uncovered** CR — no FR and no TR — already tracked as `FB-05`.)*

#### Fifth error of the same family

`D-31` (Project vs Product `PRD`) · `D-33` (`app-vision.md` vs `Modular_PRD`) · `pub_target` vs `platform_type` · tracking files vs specs · and now **subject topic vs analytical tag**.

Every one: two concepts sharing a name, read as one thing in conflict with itself. The `D-34`/`D-36` countermeasure is extended a second time —

> **Before recording a contradiction, ask whether one word is carrying two concepts.** In a domain-specific business the domain term usually is: "topic" here means *the editorial subject*, and that is not the same as a tag. `D-22` (cost baseline) remains the precedent.

#### Three tracking tiers, confirmed

| Tier | Artifact | Lifecycle |
|---|---|---|
| **Sprint detail** | `V1-*.md`, later `V2-*.md` | Frozen at sprint close |
| **Cross-sprint index** | `Modular_PRD` §8.0 | Living |
| **Project** | Alpha Portfolio plan | Living |

### Effect on §6.1's freeze

§6.1 froze the operative set at three documents. **That freeze governs consolidation and analysis documents only.** `Fn_Specs` and `SPECS` are a distinct class — implementation specifications, not consolidations — and are admitted by `D-29`. The freeze's purpose stands: no fourth *register* or *analysis* document.

### Effect on `G33`

`G33` recorded "no technical specification exists." **Re-shaped, not closed.** The hierarchy makes it two ordered gaps:

- **`G33a` — `Fn_Specs` absent.** The first artifact v1 needs. It breaks down `FR-01`–`FR-13` and the NFR set from `Modular_PRD` §5–§7 into feature-level behaviour.
- **`G33b` — `SPECS` absent**, and *conditionally required*. Only components whose behaviour `Fn_Specs` cannot fully determine need one. Present candidates are the `TR-DM-01`–`06` data contracts, `TR-API-01`–`04` interface contracts, and the eight S1-window decisions — all of which resolve into schema and cannot be settled by functional description alone.

**`G33a` gates `G33b`, and both gate S1.**

## 5.14 `D-39` — separation of duties: policy is infrastructure, explainability is product

**Chief Editor clarification, 2026-08-19.** Corrects how `AC-12` and `GA9` were framed.

### The split

| Duty | Owner | Why |
|---|---|---|
| **Deletion permission** — preventing tampering | **Infrastructure** | A grant-and-policy decision on the database, made by whoever owns it |
| **Archival execution** | **Infrastructure** — a separate system may perform it | Not an editorial function |
| **Retention compliance** — statutory floor, erasure duties | **Infrastructure**, with counsel | `Q7` territory |
| **Partition-friendly structure** so archival and deletion are seamless | **Product** | Audit-model §6.2 Method 3 |
| **Explaining absence** when data is not retrievable | **Product** | Nobody else is at the surface where a reader sees the hole |

**The product's duty is not to prevent deletion. It is to remain honest once deletion has happened.**

### What this corrects

**`AC-12` was mis-attributed.** It reads *"the database refuses"* — that tests an **infrastructure policy**, not application behaviour. The application has no layer at which to enforce it: `TC1` records that the anon key is public and the client holds the same key the server does. **The product cannot make `AC-12` pass**, and a prior framing that treated it as a product defect assigned the duty to the wrong owner.

`AC-12` remains a valid **system** criterion against `NFR-02`. Its owner is the infrastructure policy. Recorded so nobody attempts to satisfy it in application code, which would produce an advisory check mistaken for a control.

**`GA9` / `D-07` reframed.** `on delete cascade` at `0001_init.sql:43` and `:55` **declares the relationship** — these rows belong to that article — and the direction is accurate at base creation. `0001` and `PRD.md` are frozen and their intention is not reworked.

> **One property worth stating precisely, without disturbing the freeze:** `on delete cascade` declares behaviour as well as relationship — `references articles(id)` alone would declare the relationship. So a cascade path exists that a `DELETE` revocation does not close, because Postgres runs cascade as a referential action rather than a privileged user delete. **That is a fact about the policy layer's coverage, not a defect in the schema.** The infrastructure policy must account for both paths; the product changes nothing.

### Two gaps this opens — both genuinely product duties

| # | Gap | Severity |
|---|---|---|
| **`G40`** | **`NFR-08` is unbounded.** It reads *"Every transition reconstructable from the log alone"* with **no retention qualifier**. Archival and lawful disposal make that false by design. As written the product promises something infrastructure policy will remove. Restate as reconstructable **within the retention window**, with absence outside it explained rather than silent | **DOC** — before S3 |
| **`G41`** | **No requirement covers explaining absence.** Verified: no FR or AC anywhere addresses what a reader sees when data has been archived or disposed of. An audit view showing zero transitions cannot currently distinguish *"nothing happened"* from *"records removed under policy."* **Conflating those two is the failure** — it turns lawful disposal into apparent evidence of no activity | **S3** — with the audit surface |

### Drafted fix for `G41`

The product must **never present absence as "nothing happened."** Where records are not retrievable, the surface states:

1. that records existed and are **no longer retrievable**;
2. **which policy** removed them — archival or disposal, named and versioned;
3. the **period** covered;
4. **where the archive is**, if one was taken.

This is the reader-facing counterpart to the disposal record in audit Step 10. The disposal record proves what was removed; this states it at the point someone looks for it. **Partitioning (audit-model §6.2 Method 3) is what makes both practical** — a detached partition has a clean period boundary to name.

### `G40` — `NFR-08` is unbounded *(detail, added 2026-08-20)*

**Recorded here because `G55` found it had a table row and nothing else.** It is the only one of `G40`–`G49` that was genuinely bare.

**The defect.** `NFR-08` reads *"every transition reconstructable from the log alone."* It carries **no retention qualifier**. Archival and lawful disposal make that false by design — not by failure.

**Why this is not pedantry.** As written, the product promises something **infrastructure policy is required to remove** (`D-39`). The promise and the policy cannot both hold. An auditor reading `NFR-08` literally would record a control failure the moment retention operates correctly.

| Aspect | Disposition |
|---|---|
| Severity | **DOC**, before S3 |
| Scope | **Project Scope — global** (`D-40`). No CR; default audit practice |
| Owner | Product — this is a **wording** defect, not an infrastructure one |

**Drafted fix.** Restate `NFR-08` as reconstructable **within the retention window**, with absence outside it **explained rather than silent**.

**Pairs with `G41`.** `G40` bounds the promise; `G41` makes what falls outside the bound legible. Fixing `G40` alone yields a correct promise with an audit view that still renders disposal as an empty list — **which reads as a finding.**

**What is guaranteed to fail:** narrowing `NFR-08` and stopping there. **How to avoid it:** `G40` and `G41` land together or neither lands.
## 5.14a `D-40` — scope classification for `D-39`'s gaps

**Chief Editor challenge, 2026-08-19, upheld.** `D-39` recorded `G40` and `G41` as product duties but **assigned neither a scope**. Under `FB-04`'s discipline every specification must anchor to a Customer Request **or** carry a Project Scope Key. That omission is the defect `FB-04` exists to catch, committed in the act of recording two new requirements.

### The pattern already exists in the document

Verified against `media-industry-sop-fallback-implementation-plan.md` §8 — two distinct PSK shapes are already in use:

| Range | Column | Anchoring |
|---|---|---|
| `PSK-01`–`PSK-06` | *"Indirectly supports"* | Each names the CRs it serves |
| `PSK-07`–`PSK-10` | *"Purpose"* | **No CR anchor** — baseline obligations |

`PSK-07` (contractual/liquidated damages), `PSK-08` (source protection), `PSK-09` (SOP governance), and `PSK-10` (immutable audit reporting) are all **global Project Scope**: default business and industry requirements that exist whether or not a customer asked. **"Global project scope" is therefore an established pattern here, not a new category.**

### Classification

| Item | Scope | Anchor |
|---|---|---|
| **`G40`** — bound `NFR-08` to the retention window | **Product Scope** | `NFR-08` anchors to **`CR-07`, `CR-11`** as a derived quality. Bounding it refines a customer-derived requirement rather than adding one |
| **`G41`** — explain absence | **Project Scope — global** | **No CR.** The customer never asked to be told when records were removed. It exists because audit practice and retention law require it |
| **Archival and disposal** as a concern | **Project Scope — global** | **No CR.** A default business and industry requirement — statutory retention, audit standards — and per `D-39` its *execution* is infrastructure's, not the product's |

**`G40` is not a scope addition; `G41` is.** That distinction matters: `G40` can proceed as ordinary documentation, while `G41` is funded scope the customer did not request and must be **disclosed**, which is exactly what `FB-04` requires.

### Which key carries `G41`

**Proposal: extend `PSK-10` rather than create `PSK-11`.**

`PSK-10` is *"Immutable audit reporting and report reproducibility"*, and its purpose already includes *"insert/read-only retention, and an auditable disposal record."* Explaining absence **is** a reproducibility statement — the report cannot be reproduced, and the surface says why. Per `D-39` the product's slice is narrow: partition-friendly structure plus explainability. **Creating a new key for a narrow slice of an existing key's concern would violate `D-30`'s redundancy rule applied to scope keys.**

> **Flagged as a judgment call, not a settled fact.** The counter-argument is real: *data lifecycle* — archival, retention, disposal execution — is a different concern from *reporting*, and `PSK-10`'s title says reporting. If the Chief Editor reads the lifecycle as distinct, `PSK-11` is the right answer instead. **Recorded either way so the classification is deliberate rather than inherited.**

### Disclosure consequence

`G41` joins the `FB-04` set — specifications with no customer origin, justified but requiring disclosure through the sponsor. It does **not** change `FB-04`'s existing count of six; it is a **new** unanchored item arising after that count was taken, and must be added when `Q8`/`R5` routes the feedback register.

## 5.14b `D-41` — lifecycle and report versioning are coupled; `PSK-10` confirmed

**Chief Editor argument, 2026-08-19, upheld. My separability test was wrong.**

I tested *"change retention from 5 to 7 years — does report formatting change?"* and concluded no, therefore separable. **The test was too narrow.** The coupling is not formatting; it is **applicability**:

> Retention determines **what data still exists**. Template version determines **what fields it expects**. A template cannot produce a valid report over data whose fields never existed, or over records retention has removed.

So lifecycle and report versioning are **one concern**, and `PSK-10` — *"Immutable audit reporting and report reproducibility"* — carries `G41` correctly. **Confirmed on a sounder basis than either prior argument.**

### The chain

Because reports describe **past events**, the template in force at generation is fixed at that moment and becomes part of the record's lifecycle:

```
data period  →  fields that existed then
                      ↓
             template version applicable
                      ↓
        report generated, template version frozen with it
                      ↓
     retention window  →  whether the source data still exists
```

### `G42` — template-to-field-availability binding *(new)*

**Verified absent.** Template version is recorded in the report shape (`GA1`/`GA3`/`GA4`, audit Step 4), but **nothing constrains which template may be applied to which data period.**

**The rule:** a new report defaults to the newest template — **except** where that template requires fields the data period never recorded. **You cannot apply a new template to fields that did not exist yet.**

| Severity | **S1** — the binding lives on the report record, which S1 creates |
| Scope | **Project Scope — global.** No CR; a default audit-practice requirement, same class as `G41` |
| Key | `PSK-10` |

### Suggested refinement — unify two causes of absence

`G41` and `G42` are the **same mechanism with two causes**, and treating them as one is cheaper than building two:

| Cause | What the reader must be told |
|---|---|
| **Removed** — retention policy disposed of it (`G41`) | Records existed; policy, version, period, archive location |
| **Never recorded** — the field did not exist in that period (`G42`) | Field was not captured then; template version, period boundary |

Both are *"data you expected is not here."* One surface, one explanation format, two reason codes.

**On blocking versus degrading — I suggest not blocking outright:**

| Missing field is… | Behaviour |
|---|---|
| **Optional** to the template's conclusions | **Render, and mark the field** with its reason code. Blocking would make old periods unreportable, which is worse than a marked gap |
| **Required** for the template's conclusions | **Template not applicable.** Say so explicitly and name which field and period. Degrading here would produce a report whose conclusions rest on absent evidence |

**That distinction is the safety property.** Degrade where absence is cosmetic; refuse where absence would make the report *misleading*. A report that silently omits a field its conclusion depends on is worse than no report — it carries the authority of a document without the evidence behind it.

> **Recorded as a suggestion, not a decision.** The optional-versus-required split requires someone to classify each template field, which is `PSK-09` judgment-rule territory and has no owner assigned yet.

## 5.14c `D-42` — why reports exist; three regimes; two data classes

**Chief Editor clarification, 2026-08-19.** Supplies a rationale the document set never held, and corrects `G40`.

### `PSK-09` and `PSK-10` are linked global Project Scope

`PSK-09` (house SOP and judgment-rule governance) and `PSK-10` (immutable audit reporting) are **both global Project Scope** — baseline obligations with no CR, in the `PSK-07`–`PSK-10` shape. They are **linked**: `PSK-09` governs the rules a report applies; `PSK-10` governs the report that records their application.

**Ownership defaults to the project**, not to a named individual. A prior note treating *"`PSK-09` has no owner"* as a blocker conflated **scope classification** with **task assignment** — a global scope item is owned by the business by default, which is what makes it global.

### Why reports exist — the rationale, recorded for the first time

**Verified absent from the entire document set.** `PSK-10` states *what* a report is; nothing stated *why*.

> **Reports exist for auditability of GRC on retraction** — change or retract, and the corresponding notifications. Their purpose is to **prove this project complied with GRC on time**, evidenced by a dump of the auditable logs. That evidence is in turn **limited by the retention policy**.

This is the missing anchor for `PSK-10`, `G41`, and `G42`: every one of them serves *"can we prove we complied, and when?"*

### Three regimes, pulling in different directions

| Regime | Applies to | Direction |
|---|---|---|
| **PDPA** | Personal data only | **Minimise** — retain no longer than needed |
| **Retention act** (IRAS/ACRA) | Accounting and audit records | **Preserve** — 5-year floor |
| **GRC compliance** | Retraction evidence and its timeliness | **Preserve, plus a clock** |

`GRC on retraction` is a **third policy**, tracked separately. It was not previously distinguished from statutory retention.

### Two data classes — and this narrows the counsel question sharply

| Class | Where | Personal data | Governed by |
|---|---|---|---|
| **Client data** — identity, contact, payment, commissioned brief | **P0-EVR only** | **Yes** | PDPA **and** statutory |
| **Editorial flow** — trigger request, articles, transitions | **Both lanes** | **No** | Statutory **and** GRC |

**The trigger request carries no personal data**, so it defaults to the MVP data flow. Only POC client data needs a **shorter lifecycle**.

> **This materially narrows `GA5`/`G15`.** The retention-versus-erasure conflict escalated to counsel was framed as a whole-system problem. It is not: **PDPA bites only on POC client personal data.** Editorial data has no personal data, so PDPA does not apply and the statutory floor governs cleanly with no conflict at all. The counsel question shrinks to one narrow class rather than the entire record set.

### Corrections and a new gap

**`G40` corrected.** It said bind `NFR-08` to *"the retention window"* — **singular**. There is no single window. `NFR-08` binds to **the retention window for that data class**.

| # | Gap | Severity |
|---|---|---|
| **`G43`** | **No GRC compliance clock or proof requirement.** `US-13`/`FR-13` says a binding order forces retraction *"immediately"*, but nothing defines the timeliness expectation, when the clock starts, or what evidences that it was met. If reports exist to prove timely compliance, **the thing being proved is unspecified** | **DOC → S5** |

### Suggested approach — classify at intake, not at disposal

Rather than one retention policy, a **data-class × regime matrix**. Each class declares which regimes apply, which constraint binds, and the resulting lifecycle.

**The design property that matters: classify when data arrives, not when it is disposed of.**

- Classified **at intake** → retention is deterministic, and every record carries its own class from birth
- Classified **at disposal** → you are inferring retroactively what a record was, years later, under exactly the conditions where getting it wrong is unrecoverable

**Classification is cheap at intake and expensive at disposal** — the same asymmetry as the tenancy column, and for the same reason: `workflow_transitions` is append-only.

> **Recorded as a suggestion.** The class boundaries are stated above; the binding constraint where PDPA and statutory retention conflict for POC client data remains **counsel territory** (`GA5`/`G15`, `Q7`), now scoped to that one class.

## 5.14d `D-43` — retraction evidence; PDPA resolved; anonymisation

**Chief Editor direction, 2026-08-19.** Resolves `G43` and largely dissolves `GA5`/`G15`.

### `G43` resolved — the deadline arrives with the order

**The deadline is not invented; it is stated in the retraction document itself.** The product's duty is therefore evidentiary, not interpretive:

| Capture | Why |
|---|---|
| **The retraction document** | It carries the deadline. The source of the obligation is the evidence of what the obligation was |
| **The published date of the change or retraction notice** | This is the compliance moment — not when the decision was made |

**The value is the dump, not the judgement.** Recording these in-system means evidence is produced *after the work is done*, as a byproduct, rather than reconstructed manually later — which is where evidence is lost.

This closes my prior concern about inventing a deadline. **The product never defines "timely"; it records what was required and what was done, and lets the two be compared.**

### `GA5` / `G15` largely dissolved — PDPA contains its own exception

**I framed PDPA and the retention act as "two laws pulling opposite ways with no safe default." That was wrong.**

PDPA's retention-limitation duty carries an explicit **legal exception**: data may be kept longer where another written law requires it — expressly including tax and financial regulation such as IRAS and ACRA. **The framework was never contradictory. I read a hierarchy as a conflict.**

| POC client data | Governing rule | Retention |
|---|---|---|
| **Payment made** | IRAS/ACRA requires it → PDPA's legal exception applies | **5 years** |
| **Request only, no payment** *(dropped-cart)* | No legal requirement → PDPA purpose limitation governs | **Delete 90 days after non-reply, following follow-ups** |

**What remains for counsel is much narrower:** whether a given POC record qualifies as an *accounting record* under IRAS/ACRA. That is a classification question, not an irreconcilable conflict. `GA5`/`G15` narrows accordingly.

> **Sixth instance of the same error family.** `D-31`, `D-33`, `pub_target`/`platform_type`, tracking-vs-specs, subject-topic-vs-tag — and now **a rule with a built-in exception read as a rule in conflict with its exception.** Same shape: recording a contradiction where the existing structure already resolves it. The countermeasure extends again — **before escalating a conflict, check whether one side already accommodates the other.**

### Anonymisation — a third disposal mode, absent everywhere

**Verified: the word appears nowhere in the document set.** PDPA permits stripping identifiers as an alternative to destruction, retaining the record for historical or statistical use.

That makes **three** end states, not two:

| End state | Personal data | Analytical value |
|---|---|---|
| **Retained** | Present | Full |
| **Anonymised** | **Removed** | **Retained** |
| **Disposed** | Gone | Gone |

**This changes `G41`.** Explainable absence was specified with two reason codes — *removed under retention* and *never recorded*. It needs a **third**: *identifiers removed; record retained in de-identified form*. Anonymised data is **not absent** — it is present and de-identified, which is a different statement to a reader and a different answer to an auditor.

### Three new gaps

| # | Gap | Severity |
|---|---|---|
| **`G44`** | **The 90-day clock has no defined start.** *"Non-reply after follow-ups"* requires a follow-up **count** and **interval** before the clock can begin. Same class as `EXCLUSIVITY_WINDOW_DEFAULT_DAYS` — a business rule needing a number, `UNSET` until decided. **Not a legal question** | **T3** |
| **`G45`** | **Anonymisation is not modelled.** Absent from every tier. Adds a third end state and a third `G41` reason code | **S1** — an end state the record must represent |
| **`G46`** | **Retention class depends on a fact the product does not hold.** Payment happens **outside the application** (`B-P0-06`, manual invoicing), yet payment status determines whether a record is 90-day or 5-year. The product cannot apply the schedule without being told | **S1** |

### Suggested approach — the retention schedule as data

PDPA best practice is *"a formal data retention policy mapping record types to legal or operational timelines."* That is precisely `D-42`'s data-class × regime matrix, and it now has a concrete instantiation rather than a shape.

**Two properties worth building in:**

1. **Every record carries its retention class from intake** (`D-42`) — including payment status, which `G46` shows must be supplied to the product rather than inferred by it.
2. **Prefer anonymisation over disposal where analytical value survives.** It satisfies PDPA's purpose limitation *and* preserves the trend and angle analysis the editorial business runs on. **Disposal is irreversible; anonymisation keeps the shape of the data without the exposure.**

> Recorded as suggestion. `G44`'s follow-up count is a **Chief Editor** decision; the accounting-record classification remains **counsel** (`Q7`).

## 5.14e `D-44` — payment confirmation, and the two-tier lifecycle

**Chief Editor direction, 2026-08-19.** Resolves `G46`, specifies the lifecycle, and declares a scope boundary that was never stated.

### `G46` resolved — the product holds a **confirmation**, not a payment record

| Concern | Owner |
|---|---|
| Payment processing | **Third-party system** |
| **Financial auditing** | **Third party** — it already has it. Out of scope for this product; a backlog item only if the business ever chooses to do everything itself |
| **Confirmation that payment completed** | **This product** — the minimum fact it needs |

**Verified: financial auditing has never been declared out of scope anywhere.** Recording it closes an unstated assumption — without it, someone could reasonably read `PSK-10`'s audit reporting as extending to financial records. It does not.

### Payment triggers the workflow — recorded for the first time

**Verified absent from the entire document set.** The causal link:

> **Payment completes → the supplied topic triggers the editorial workflow.**

This connects the commercial act to the editorial act, and it is why the product needs the confirmation at all: not for accounting, but because **it is the start signal**.

### `G47` — paid-but-no-trigger must be detectable *(new)*

If payment completes and **the trigger topic is not captured**, the engagement is paid for and invisible. **This is a POC feature obligation, not a third-party one** — the third party knows payment succeeded; only this product knows whether a workflow started.

**Reconciliation is therefore a product duty:** every confirmed payment must resolve to a trigger, and orphans must surface rather than sit silent. **Severity: T3** — it is a POC-lane obligation.

### The two-tier lifecycle

| Tier | Data | Retention | Then |
|---|---|---|---|
| **POC PDPA** | Client identity, contact, brief | **90 days** *(from non-reply after follow-ups — `G44` still open)* | **Archived → anonymised.** The act requires identifiers go; the record may stay |
| **Trigger-topic flow** | Common to **both** MVP and POC | **5 years** | **Archived first**, then deletion |

**Archival of PDPA data *is* anonymisation.** These are not two operations — the archival is what removes the identifiers, because the act does not permit keeping them.

> **My reading of the second tier, flagged for confirmation:** archive at 5 years anchored to the **published status final date**, then delete **90 days after archival**. That gap makes archival **reversible for a window** before deletion makes it permanent — which is sound, and worth stating as the reason rather than leaving as a coincidence. **If the intent was different, correct this line.**

### One mechanism problem worth naming

**Partitioning and anonymisation operate on different axes:**

| Operation | Acts on |
|---|---|
| **Partitioning** | **Rows** — split by period |
| **Anonymisation** | **Columns** — strip identifiers |

**Detaching a partition moves whole rows, identifiers included.** So *"archive the PDPA partition"* does not anonymise anything by itself — the detached data still carries the identifiers the act requires removing.

**PDPA archival is therefore a two-step operation:** detach the partition, **then** transform it to strip identifiers before retaining. Or anonymise in place before detaching. **Either works; assuming the detach alone is sufficient does not**, and that assumption would leave identifying data sitting in an archive believed to be compliant.

This does not break the design. It means the partitioning mechanism (audit-model §6.2 Method 3) covers the **trigger-topic tier cleanly** and needs a second step for the **PDPA tier**.

### Still open

**`G44` — the 90-day clock start.** Listed but not answered: *"non-reply after follow-ups"* still needs a **follow-up count** and **interval**. A business rule needing a number, `UNSET` until decided. Chief Editor's call.

## 5.14f `D-45` — `G44` resolved, `G45` withdrawn, transaction ID as the trace

**Chief Editor direction, 2026-08-19.**

### `G44` — put simply, and resolved

**90 days is the *duration*. The clock start is *which day you begin counting from*.** Those are different questions, and only the second was open.

| Client | Clock starts |
|---|---|
| **Non-paying** *(dropped cart)* | **The date they made their request** |
| **Paying** | **The later of** delivery of the goods and services, **or** their discard request |

**My "needs a follow-up count" was wrong.** Follow-ups happen *during* the 90 days — they are an attempt to convert before it expires, not a determinant of when it opens. **No count is needed and none should be invented.** `G44` closes.

The paying-client rule is the standard PDPA/GDPR shape: the purpose survives until delivery, so the clock cannot start before it — and an explicit discard request cannot start it earlier than the purpose ends. **Whichever is later.**

### `G45` withdrawn — anonymisation is not required

**Anonymisation is only worth doing if something needs to read the de-identified data afterwards. Nothing does.**

The chain, from `D-42`: reports exist for **GRC auditability on retraction**. That concerns **editorial output** — the MVP flow. **There is no report over POC client personal data.** So once the PDPA period elapses there is nothing left that needs to read it.

| Consequence | |
|---|---|
| POC flow after the period | Shows **no data recorded** by default |
| Traceability | The **transaction ID** points to the third-party financial system, which holds the record under its own statutory basis |

**Delete rather than anonymise: simpler, and more compliant.** My anonymisation recommendation was over-engineered — it solved a retrieval problem this product does not have.

**`G45` withdrawn. `G41`'s reason codes return to two**, not three.

### Transaction ID — recorded for the first time

**Verified absent from the entire document set.** It is the minimum fact that preserves traceability after personal data is gone: not personal data itself, and sufficient to reach the third-party system that lawfully retains the financial record.

### Two cautions

**1. "No report exists" is not the same fact as "data was deleted."**

| Fact | Accurate statement |
|---|---|
| No report was ever generated for this engagement | *"No report exists for this engagement"* |
| Personal data was deleted at end of retention | *"Client data was removed on [date] under the PDPA schedule"* |

Rendering the second as *"no data recorded"* would imply **nothing ever happened** — which is `G41`'s exact failure mode, turning lawful deletion into apparent evidence of no activity. **The two reason codes must stay distinct even though both produce an empty screen.**

**2. The transaction ID may be pseudonymous rather than anonymous.**

An identifier that permits re-identification — here, by querying the third-party system — can itself be personal data under PDPA, which reaches identifiers usable to identify an individual **alone or with other information**. The third party holds the underlying record on its own lawful basis, so the data lawfully persists there; **whether this product's pointer is itself personal data is a counsel question**, and a narrow one. Recorded so retaining the ID is a **deliberate** decision rather than an assumed safe default.

### One trade-off, recorded so it is not discovered later as a loss

Deleting rather than anonymising means **engagement analytics are gone permanently** — *"what topics do paying clients commission?"* becomes unanswerable once the period elapses. That is a legitimate choice given no report reads the data, but it is **irreversible**, and the alternative was available. Recorded as deliberate.

## 5.14g `D-46` — POC payment deferred; analytics loss corrected

**Chief Editor direction, 2026-08-19.** **MVP flow is the current focus. POC payment detail is deferred.**

### POC payment workflow — deferred, with its requirement recorded

The POC flow runs **ahead of current work**, so the payment dialogue is not designed now. Recorded for when it is:

- **What was requested and what was paid sit on the same invoice** in the third-party system — one record, not two, which is what prevents divergence.
- **The transaction ID must be sufficient to link the third-party record to what this product delivers.** Insufficient linkage produces duplicated data, or worse — a **mismatch between what the client paid for and what they requested**.
- The full workflow drafts when the POC flow is required, together with the transaction-ID pseudonymity question (`D-45`).

### Analytics loss — I overstated it

**Verified against the register:** the **trigger-topic flow is common to both lanes and retained 5 years**. So the topic does **not** disappear at 90 days — only the *personal data* does.

| Question | Survives? |
|---|---|
| What topics were commissioned? | ✅ Editorial flow, 5 years |
| Which topics came from paid engagements? | ⚠️ **Only if a non-personal paid flag was recorded** |
| Which client commissioned what? | ❌ **Deleted by design — that is the point** |
| What did they pay, for what? | ✅ Third-party invoice, its own 5-year basis |

**So almost nothing analytical is lost.** What PDPA removes is the person-to-topic link, which is precisely what it exists to remove. My earlier framing — *"engagement analytics are gone permanently"* — was wrong, and it was wrong in the direction that would have justified retaining more personal data than necessary. **That is the worse direction to be wrong in.**

### The residual risk that *is* real

**Verified:** the Alpha Portfolio closure scorecard requires *"Commercial evidence — actual payment/outcome evidence from the bounded PoC, including negative evidence."*

That evidence partly lives in a **third-party system this business does not own**. If the account lapses, the vendor is changed, or the service is decommissioned, **the payment-and-request linkage leaves with it** — and `APD-03`'s closure decision depends on it.

**The failure shape:** not *"we deleted too much"*, but *"the evidence for our own closure decision was never ours to keep."*

### Suggested approach — capture the non-personal facts at intake

At intake, record in **this product's** editorial flow:

| Fact | Personal data? |
|---|---|
| Trigger topic | No — already retained 5 years |
| **Paid / unpaid flag** | **No** |
| **Transaction ID** | **No** *(pseudonymity caveat, `D-45`)* |
| Outcome — published, held, withdrawn | No |

**None of these is personal data.** With them recorded:

1. PDPA deletion at 90 days loses **nothing** analytically.
2. Closure evidence stops depending on a third party's survival.
3. *"What topics do paying clients commission?"* is answerable **from aggregate facts alone**, which identify nobody.

**Same principle as `D-42`'s classify-at-intake:** derive the fact when it is cheap, not when you need it. **An aggregate about engagements is not personal data** — the analytics were never in tension with PDPA; only the linkage was.

> **Deferred, not decided.** These are POC-flow fields and belong with that workflow's draft. Recorded now so the deletion schedule is designed **around** them rather than discovering afterwards that closure evidence went with the personal data.

## 5.14h `D-47` — the fork is at publish; MVP first, then POC

**Chief Editor direction, 2026-08-19.** Locates the lane divergence precisely and sets the build order.

### `APD-03` closure-evidence risk → backlog

The dependency on a third-party system for commercial evidence is **backlogged as Project Scope**. **The customer did not request it, and the financial system is beyond this product's scope** (`D-44`). Recorded as a known, accepted, deferred risk rather than an open gap.

### The trigger record serves both lanes

The trigger already carries the required starting point for **both** flows — `FR-01`'s intake: source URL, subject topic, trend signal.

**Where POC later needs fields MVP does not**, those fields become an **enhanced newsworthiness input** for MVP rather than a second intake path. A client-supplied brief carries context — why it matters, to whom, what prompted it — that `CR-06` newsworthiness assessment could use directly.

> **Backlog, together with the POC flow.** Worth noting the direction it points: `CR-06` is *partially covered* and `CR-14` is *uncovered* (`FB-05`) — the two open Product Scope gaps. POC-supplied context is a plausible input to both, which makes this a backlog item with a real payoff rather than a nicety.

### The fork point — located, and it is one place

**Verified against the storyboard**, which places the split at **Panel B7**, *after* the Publish disposition, with `B1` (commission) and `B2` (manual pre-intake) **outside the system boundary**.

| Phase | MVP | POC |
|---|---|---|
| Pre-intake | Research-discovered | Client-commissioned — **outside the system** |
| **T1–T6 gates** | **Identical** | **Identical** |
| Publish disposition | Article created | **Article created** |
| **External publication** | **Publishes** to WordPress / LinkedIn-ready | **Withholds.** Delivers public explainable content and reports |

**Within the system, the only fork is at the publish and delivery phase.** Everything before it is built once.

This does not contradict `D-05` — *"one editorial engine, two exposures, the pipeline is never forked"* — it **locates** the exposure difference, which `D-05` asserted without placing.

### Build order

**MVP base first, then POC.** Once the critical gaps close on the MVP flow, **the MVP flow services the POC flow**, because the only difference is the delivery path.

**The concrete consequence — a checkable prediction:** `FN-PUBLICATION-09-10-13` is the **only** `Fn_Specs` that will need extending for POC. The gates, audit, and exceptions specs are lane-agnostic and should require no change.

> **If POC work later forces a change to any spec other than the publication one, the fork has moved** — and that is the signal to stop and re-examine, not to accommodate it. It would mean the divergence is not where this decision places it.

### Sequencing effect

| Item | Status |
|---|---|
| MVP critical gaps | **Current focus** |
| POC delivery path | After MVP base |
| POC payment workflow | Deferred (`D-46`) |
| POC-specific newsworthiness fields | Backlog, with POC flow |
| `APD-03` closure-evidence dependency | Backlog, Project Scope |

## 5.14i `D-48` — POC is the minimum path; MVP is POC plus newsworthiness

**Chief Editor direction, 2026-08-19. Refines `D-47`, and inverts which lane is the base.**

### Why POC is the smaller flow, not the larger one

**Newsworthiness is a discovery problem.** It exists because someone must decide *is this worth covering?*

| Lane | Who decided it was worth doing | Newsworthiness gate |
|---|---|---|
| **POC** | **The client** — they commissioned it and paid | **Not needed.** Payment is the warrant |
| **MVP** | **The Chief Editor** — nobody else chose it | **Required.** `CR-06` |

`D-47` framed MVP as the base and POC as *MVP minus external publication*. **That was backwards.** POC is the **minimum trigger flow**; MVP is **POC plus newsworthiness analysis before the publication phase**.

### This is a superset, not a fork

```
POC   =  trigger → gates → article → deliver reports
MVP   =  trigger → gates → [newsworthiness] → publish
              └──────── same core ────────┘
```

**Neither lane forks the pipeline** — MVP adds a gate. That is a stronger statement than `D-05`'s "two exposures", because a superset needs no second path to maintain.

### The design constraint this creates

> **Newsworthiness must be a separable gate, never inline in publication logic.**

**What fails if it is entangled:** build newsworthiness *inside* the publication path and POC cannot reuse publication without inheriting a gate it should not have. Extracting it later is surgery on the one component both lanes share — and it would be discovered at exactly the point POC is meant to be cheap.

**The cost asymmetry is the familiar one:** separable now is a structural choice costing nothing; separable later is a refactor of shared code. Same shape as the tenancy column and classify-at-intake.

### Consequence for the unwritten requirement

**Verified:** `CR-06` is **partially covered** — the scoring is not computable on the current schema (`TC3`) — and `CR-14` is **uncovered**, with **no FR at all** (`FB-05`). **Newsworthiness appears in no `Fn_Specs`.**

So the gate this decision makes MVP-only **does not exist yet**. That is fortunate: it means the constraint can be honoured in the requirement's first draft rather than retrofitted.

> **When `CR-06`/`CR-14` receive their FR, it must be written as a separable, MVP-only gate.** Recorded here because that FR will be drafted by whoever closes `FB-05`, who may not otherwise know the constraint exists.

### Change-flow rule

| Change originates in | Lands in |
|---|---|
| **POC** — the minimum path | **The shared core.** Both lanes inherit it |
| **Extras** — anything beyond the minimum | **MVP's newsworthiness flow**, before publication |

**A change that would enlarge the core to serve only MVP is the signal to stop** — it belongs in the newsworthiness layer instead. That is the tripwire equivalent of `D-47`'s spec-extension test.

### Effect on `D-47`

`D-47`'s **build order stands**: MVP is being set up now. What changes is the **layering** — build MVP such that the POC-minimum path is the core and newsworthiness is additive. **Build sequence and architectural layering are different questions**, and `D-47` answered only the first.

`D-47`'s prediction is **strengthened, not weakened**: `FN-PUBLICATION-09-10-13` remains the only spec differing by lane, and now the *shape* of the difference is known — it carries an optional gate rather than an alternative path.

## 5.14j `D-49` — one gate, two terminal actions

**Chief Editor direction, 2026-08-19. Corrects `D-48`.**

### Newsworthiness runs in **both** lanes

`D-48` concluded POC needs no newsworthiness gate because the client already decided. **That was wrong.** It answered *"is this worth covering?"* and stopped there — but newsworthiness answers a second question that applies regardless of who chose the topic:

> **Is this substantive enough?** For POC, the test is whether the public explainable content and reports could **sustain a newsworthy article**. If they could not, the deliverable is not worth what the client paid.

| Lane | Question the gate answers | Terminal action on pass |
|---|---|---|
| **MVP** | Is this worth publishing? | **Publish** |
| **POC** | Is this worth handing to the paying client? | **Deliver** the explainable content and reports |

**Same analysis. Same gate. Different consequence.**

### This makes the design simpler, not more complex

```
trigger → gates → article → newsworthiness → ├─ MVP:  publish
                                             └─ POC:  deliver reports
```

**There is no optional gate and no conditional path.** The gate always runs; only the terminal action branches on lane.

That is better than `D-48`'s separable-gate design: **a parameterised consequence is cheaper to build and impossible to accidentally skip.** `D-48`'s constraint — *"newsworthiness must be separable so POC can bypass it"* — is **withdrawn**. Nothing bypasses it.

`D-47`'s prediction survives unchanged and is now sharper still: `FN-PUBLICATION-09-10-13` remains the only lane-varying spec, and the variance is **one branch on terminal action**.

### `G48` — a paid engagement that fails the gate *(new)*

**Verified: the PoC proposal has no answer.** It states *"either may hold or escalate; neither may force release alone"* — a disposition, not an outcome. **What happens to a client who has already paid is undefined.**

The options are all uncomfortable, which is why it needs deciding **before** the first engagement rather than during one:

| Option | Consequence |
|---|---|
| Deliver anyway | **The gate becomes theatre.** See below |
| Withhold, no refund | Client paid for nothing |
| Withhold, refund | Cost absorbed; needs a stop-loss |
| Deliver with the finding disclosed | Honest; the client learns the topic could not sustain an article — **which is itself a real answer** |

> **The gate is only a control if failing it has teeth.** If *"not worthy"* still ships, `PSK-06`'s editorial-commercial separation is a label rather than a boundary — and commercial pressure to deliver is exactly what it exists to resist. **A gate whose failure changes nothing is not a gate.**

**My recommendation is the fourth option**, and it is not a consolation prize: a client who learns *"we investigated and this could not sustain a newsworthy article, here is the evidence"* has received a genuine professional finding. **Negative evidence is evidence** — the Alpha Portfolio closure scorecard explicitly asks for *"payment/outcome evidence, including negative evidence."*

**Severity: T3** — required before the first paid engagement, and it belongs in the pre-payment disclosure so the client knows the possibility exists before money changes hands.

## 5.14k `D-50` — not-newsworthy is an outcome, not a failure

**Chief Editor direction, 2026-08-19.** Resolves `G48` and extends it to both lanes.

### `G48` resolved — deliver with the finding disclosed

**Applies to MVP as well as POC.** The scenario is the same in both: initial analysis looks promising, the final brief does not sustain newsworthiness.

**"Not newsworthy at time of delivery" is a legitimate terminal outcome.** It is a real professional answer, arrived at by evidence, not a process failure to be hidden.

The evidence zone — public explainable content and reports — is **common to both lanes and accumulates throughout the workflow**, not at delivery. Each gate contributes to it. So the finding is supportable in either lane, because the same evidence was built either way.

### The worst case, and the distinction that governs it

When **all gates fail to find sufficient newsworthiness**, there are two possible causes and they demand opposite responses:

| Cause | What it means | Response |
|---|---|---|
| **Process failure** | The gates ran but did not do their job — thin investigation, missed sources, rushed drafting | **Rework.** Forward and backward engineering to surface what caused it |
| **True negative** | The gates ran properly and the topic is genuinely thin | **Accept and disclose.** An honest answer |

**Conflating these is the failure mode in both directions.** Always assume process failure and you never accept a true negative — you rework indefinitely on a topic that has nothing in it. Always assume true negative and **you never fix a broken gate**, and the same thin work recurs on every article.

### `G49` — how the two are told apart, and why the briefcase artifacts follow

**The audit trail alone cannot distinguish them.** The transition record carries who, when, and why — it records *completion*, not *how much was found*. A gate that investigated thoroughly and a gate that skimmed both produce one transition row.

**The briefcase artifacts are what distinguish them:** the Claims Ledger shows how many material claims were found, the Evidence Map how many sources support them, the Uncertainty Register what could not be established. **Thorough work that found little looks entirely different from thin work** — but only in the artifacts, never in the transition log.

> **`G49` — the briefcase artifacts are specified for POC only.** Verified: Claims Ledger, Evidence Map, Uncertainty Register, Counterargument Brief, Statement Classification, and Explainable Draft appear in the PoC proposal and in **no `Fn_Specs` at all**. Since `D-49` establishes the evidence zone as common to both lanes, **MVP needs them too** — and without them **MVP cannot tell rework from true negative.** Severity **S3**, with the audit surface.

### Suggested refinement — sufficiency indicators

Make the rework-versus-negative call **evidence-based rather than a judgement**. The artifacts should carry countable sufficiency signals, not only content:

| Signal | Distinguishes |
|---|---|
| Material claims found | A thin topic yields few; thin work yields few **from a rich source** |
| Sources consulted, and how many were independent | Effort expended |
| Corroboration achieved versus attempted | Whether the gaps were tested or merely noted |
| Uncertainties recorded | Thorough work **surfaces** uncertainty; rushed work has none because it did not look |

**The last one is the most diagnostic.** An investigation reporting *no* uncertainties is more suspicious than one reporting many — genuine enquiry finds edges. A gate that returns nothing unresolved has usually not looked hard enough.

### Representation

`NOT_NEWSWORTHY` already exists in the proposed intent vocabulary. The applied schema has only `rejected` with no reason distinction — **the intent code is what makes "rejected for lack of newsworthiness" distinguishable from every other rejection**, which is precisely what `D-12`'s two-level vocabulary was for.

## 5.14l `D-51` — graphify distribution standardised; upstream swap gated

**Decision, 2026-08-20.** The project standardises on **`@sentropic/graphify`** (npm). The upstream `graphifyy` (PyPI) is **not** adopted, and a swap is **gated on `G54` closing first.**

**Classification: Project Scope ⚙** per `D-39` and `D-40`. Tooling is infrastructure. This decision sits **outside the `D-29` tier stack** and generates no `FR`, no `AC`, and no `SPECS` candidate.

**Grounds, in descending order of hardness:**

1. **The upstream path is not installable here.** `uv`, `pipx`, and `pip` are all absent; `python`/`python3` resolve to the Microsoft Store stub, not an interpreter. Adopting upstream requires a machine-level toolchain install first.
2. **It would invalidate the rules the project already runs on.** **Eight** commands the agent files mandate are absent upstream: `portable-check`, `migrate-state`, `review-delta`, `summary`, `hook-rebuild`, `build`, `studio`, `ontology`. *(**Corrected 2026-08-20 by `D-60`** — this read *nine* and included `merge-graphs`, which **exists upstream**. Source-verified against `graphify/__main__.py`; `build` is absent entirely, not merely its `--fragment` flag. **The ground is unchanged: the five commands `CLAUDE.md` mandates are all confirmed absent.**)*
3. **It moves backwards into a layout this project calls legacy.** Upstream writes `graphify-out/`; the rules document `.graphify/` and carry explicit guidance for migrating *out of* `graphify-out`.

> **Stated honestly.** Ground 2 rests on a **README reading, not a verified command list.** Absence from a README is not absence from a CLI. It sizes the gap; it does not close it. **That is exactly why `G54` is Open rather than closed** — the decision is recorded with its weakest evidence named, not hidden.

**What is guaranteed to fail:** uninstalling the npm package before verifying the upstream surface. If upstream lacks `merge-graphs` and `build --fragment`, the curated layer cannot be re-merged by the remaining tool. The fragments survive; **nothing installed can consume them.**

**How to avoid it:** never uninstall before `G54` closes. Coexistence is cheap; recovery is not.

**Note on §6's three-document rule.** `docs/graph-fragments/README.md` is **not** a fourth v1 document. It records tooling provenance, holds no decision, gap disposition, build order, or artifact status, and sits outside the tier stack. The dispositions for `G50`–`G55` are recorded **here**, in this register — which is what §6 requires.

## 5.14m `D-52` — `G33b` resolved: 18 candidates, 4 documents, 1 before S1

**Decision, 2026-08-20.** The `D-30` redundancy test applied to all 18 `SPECS` candidates named across the four `Fn_Specs`. **Closes `G33b`.**

> `D-30`: *"If a behaviour can be defined clearly enough in `Fn_Specs`, then a `SPECS` document for it is redundant and must not be written."*

### The filter — four outcomes, not two

The test does not sort into *write* and *do not write*. Applying it honestly produced **four** dispositions:

| Outcome | Count | Meaning |
|---|---|---|
| **Absorbed into S1** | **7** | Already a decision inside the S1 window. A `SPECS` document would restate what the window resolves — redundant under `D-30` |
| **Requires `SPECS`** | **9** | Behaviour cannot determine implementation. Groups into **4 documents** |
| **Infrastructure ⚙, not product `SPECS`** | **1** | Append-only enforcement is a grant model. `D-39` — the product has no layer at which to enforce it |
| **Blocked** | **1** | Line 3 data-path isolation. Unwritable until `Q2` names an executor |

### Absorbed into S1 — 7 candidates, no document

| Candidate | Source | Window item |
|---|---|---|
| `TR-DM-01`/`TR-DM-02` schema | Gates | `G16` |
| `Q11` field naming | Gates | `G16` — `Q10` + `Q11` as one migration |
| Independence classification storage | Gates | `G17` — `QA3`, typed versus JSON |
| Duplicate refusal unique index | Gates | `G16` — schema constraint |
| `TR-DM-02` column set and types | Audit | `G16` — same migration as row 1 |
| `on delete restrict` migration | Audit | `GA9` |
| `articles` return columns | Exceptions | `G16` — same migration |

**Two of these are the same candidate named twice** — `TR-DM-02` appears in both the gates and audit specs. The 18 are 17 distinct components.

### Requires `SPECS` — 9 candidates, 4 documents

| Document | Components | Sprint | Needed before S1? |
|---|---|---|---|
| `SPECS-TRANSITION-ENFORCEMENT` | Sequence-enforcement trigger — timing, allowed-transitions table shape, lock behaviour | **S1** | **YES — the only one** |
| `SPECS-BOARD-QUERY` | Board query and index strategy (`NFR-06` render volume) | S3 | No |
| `SPECS-PUBLICATION` | `TR-DM-03` schema · publish path (`Q3`) · retry scheduler (`Q5`) · credential isolation (`NFR-07`/`SEC-02`) · privileged write path | S4 | No |
| `SPECS-EXCEPTIONS` | Escalation routing · absence detection | S5 | No |

### The answer

**Eighteen candidates reduce to four documents, and exactly one is needed before S1.**

The other three are sprint-aligned and can be written when their sprint arrives — `SPECS-PUBLICATION` is the largest at five components, and none of it is reachable until S4.

**This is the `D-30` rule working as designed.** Writing four `SPECS` documents now — one per `Fn_Specs`, mirroring the source structure — would have produced three documents nothing can act on and seven sections restating S1 window decisions. **Mirroring the input structure is the redundancy failure in its most expensive form.**

### Correction — `FN-GATES-01-05` §9 overstated its own result

§9 claims its five candidates *"each map to an item already inside the S1 eight-decision window."* **Verified: four of five do.** The **sequence-enforcement trigger** does not — it is a mechanism design (trigger timing, table shape, lock behaviour), not a schema decision, and no window item covers it.

**That one exception is the entire pre-S1 `SPECS` workload.** Had the claim been accepted as written, `G33b` would have concluded *"all candidates absorb into S1, no `SPECS` needed"* — and S1 would have been designed with transition enforcement unspecified. **The gate sequence is the core invariant of the product.**

### Stale count corrected

The S1 window is described as holding **eight** decisions in three places. It holds **nine** — `G42` joined it in Step 0 (`G56`). Corrected here and at source.

**A seventh instance of `summary_outlived_source`**, found while executing the very filter that Step 0 was run to make trustworthy.

### Scope limits

Closes `G33b`. **Authorizes no `SPECS` document to be written** — this decision names which four exist and when each is due. Closes no Open Decision. No code, schema, or migration.

## 5.14n `D-53` — `SPECS-TRANSITION-ENFORCEMENT` drafted; `G57` found while drafting it

**Drafted 2026-08-20** at `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md`. The one `SPECS` document `D-52` identified as required before S1. **Planning only — no migration authorized.**

### What the document settles

| Component | Resolution |
|---|---|
| **Trigger timing** | Two `BEFORE UPDATE` guards on `articles` — sequence validity and record precedence — inside **one** caller transaction |
| **Allowed-transitions table shape** | A **four-kind classification**, not a pair list: `fixed` · `wildcard_source` · `dynamic_target` · `non_transition` |
| **Lock behaviour** | `SELECT … FOR UPDATE` on the article row before reading current state. Article row only — never the transitions table |

### Why a `(from_state, to_state)` pair table is insufficient

**The finding that justified writing this document at all.** Four of the eleven gates do not fit a pair table:

- **T8 and T9 take *"any active state"* as their source.** Enumerating that as nine rows each would go stale the moment a state is added — **the `G55`/`G56` drift mechanism, one tier down.** `active` is therefore defined **once, as a property**.
- **T8a's target is read from the article's own `revision_target_state`** — not knowable from the rule alone.
- **T10 changes no state.** Forcing it through a state-change guard means inventing a self-transition or granting an exemption — and **an undocumented exemption is indistinguishable from a bypass** (`O-01`).
- **T11 is conditional** on whether the target is the first live one.

### Append-only and rollback are not in conflict

Revoking `DELETE` stops a **statement** from removing a committed row. A transaction **abort** is not a statement. So a refused transition rolls back the transition row written moments earlier in the same transaction, and **no orphan survives**.

> **Guaranteed to fail:** committing the transition row in its own transaction *"so the attempt is recorded even if refused."* The append-only table then accumulates rows for state changes **that never happened**, and the audit record asserts activity that did not occur — the same class of harm as `G41`, where absence was rendered as *"nothing happened."*
>
> **How to avoid it:** one transaction, always. Refused attempts, if they must be kept, belong in a **separate table that is not the audit record.**

### `G57` — the `X3` backfill mapping is named but never specified *(new)*

**Verified absent.** `V1-BUILD-SPEC` and the sprint plan both instruct S1 to build `article_state_v2` and *"backfill via the `X3` mapping."* `X3` is a **one-line divergence record** — *"repo state machine omits Discovered/Validated/Needs Revision and collapses Addendum T2/T3"* — **not a mapping.** No old→new table exists anywhere in `docs/`.

**The migration is eight values to ten, including four renames:**

| `0001` value | Addendum §4.1 target | Confidence |
|---|---|---|
| `logged` | ~~Logged~~ → **`Discovered`** | **Corrected by `D-55`** |
| `reported` | ~~Validated?~~ → **`Logged`** | **Corrected by `D-55`** — role-keyed, not name-keyed |
| `investigated` | Investigated | Clear |
| `journaled` | Drafted | Clear — Journalist executes T4 |
| `senior_reviewed` | Reviewed | Clear — **Line 2** |
| `chief_approved` | Approved | Clear — **Line 1** |
| `published` | Published | Clear |
| `rejected` | Rejected | Clear |

**~~Three~~ Two target states have no source value** — `Validated` and `Needs Revision`. *(Corrected by `D-55`: `Discovered` does have a source — repo `logged`.)*

**Why this is severity S1 and not bookkeeping.** `senior_reviewed` and `chief_approved` sit on **opposite sides of the four-eyes boundary** — T5 is Line 2, T6 is Line 1. A backfill that transposes them **misattributes which articles crossed the Line boundary**, and it writes that misattribution into an **append-only** table. `NFR-02` then makes it permanent.

**What is guaranteed to fail:** letting the migration author infer the mapping at write time. `reported` is genuinely ambiguous, and the ambiguity is invisible unless someone compares both enums side by side.

**How to avoid it:** specify the eight-row mapping **as data, reviewed before `0002` is written** — an S1 window item alongside `G16`, not a decision made inside the migration.

### Scope limits

Authorizes no code, schema, migration, or deployment. Names no field — `Q11` is open and **irreversible after S1**. `G57` is recorded, **not resolved**.

## 5.14o `D-54` — the propagation rule: a decision lands in every tier that owns a facet of it

**Decision, 2026-08-20.** A decision that **creates, sequences, or retires an artifact** must land in **all three** `docs/v1/` documents **in the same pass** — or state, in the register, why a tier is not affected.

**Closes `G58`.** Recorded because the omission it fixes had already happened seven times in one session.

### What went wrong

| Tracking file | Carried `D-52`, `D-53`, `G33b`, `G55`–`G57`? |
|---|---|
| `V1-DECISION-REGISTER.md` | **Yes** — all of them |
| `V1-BUILD-SPEC.md` | **None** |
| `V1-ARTIFACT-INVENTORY.md` | **None** — last touched 2026-08-19 |
| `Modular_PRD` §8 | **None** |

Two specifics: `V1-BUILD-SPEC` still read *"All eight T2 decisions"* — **the exact stale count removed from this register two turns earlier**, fixed in one file and left standing in another. And `V1-ARTIFACT-INVENTORY`, which answers *"what must exist"*, had **no entry** for `docs/fn-specs/`, `docs/specs/`, or `docs/graph-fragments/` — four `Fn_Specs`, the first `SPECS` document, and twelve fragment files, invisible.

### Why it happened — and why tighter scope would not have prevented it

| # | Cause |
|---|---|
| 1 | **Completion was reported against the executing agent's own scope, not against artifact state.** *"Done"* meant *the step finished*, never *the tracking set is consistent* |
| 2 | **§6 says findings are absorbed into "whichever of these three owns the question" — singular.** An artifact-creating decision is owned by **all three**: the register decides it, the build spec sequences it, the inventory lists it. Nothing forced the fan-out |
| 3 | `G29` **gave every sprint an artifact DoD. A decision never got one.** Landing it in the register therefore looked complete — because in the register it was |
| 4 | **The drift came from obeying scope.** Each turn was correctly scoped to one approved step; propagation sat outside every step. **Every turn was individually correct and the set drifted anyway** |

> **Cause 4 is the operative one.** Because the drift was produced by *correct* scope discipline, **narrowing scope cannot fix it.** Only an explicit propagation obligation can. That is what this decision is.

### The rule

| Tier | Owns | Must be updated when |
|---|---|---|
| `V1-DECISION-REGISTER.md` | What is decided | **Always** |
| `V1-BUILD-SPEC.md` | What is built, in what order | The decision changes sprint scope, sequence, or a DoD |
| `V1-ARTIFACT-INVENTORY.md` | What must exist | The decision creates or retires a file |
| `Modular_PRD` §8 | Build versions and their sprints (`D-35`) | A sprint closes or a tier opens |

**The approve/reject table carries the obligation.** Any row reporting an artifact created, sequenced, or retired must name the tiers updated — or record the tier as *not affected*. **A row that names no tier is not evidence of completion.**

### Counts do not propagate — pointers do

Propagation copies **the fact**, never **the tally.** `V1-BUILD-SPEC`'s *"eight T2 decisions"* is precisely what propagating a count produces: correct when written, wrong within two turns, and wrong in a second location where nobody was looking. **Tiers point at the record; they do not restate it** (`G55`, `G56`).

### First application — this session's decisions, tier by tier

**Applying the rule to the backlog that produced it.** A dash means *verified not affected*, never *not checked*.

| Decision / gap | Register | Build spec | Inventory | `Modular_PRD` §8 |
|---|---|---|---|---|
| `D-52` — `G33b` filter | ✅ | ✅ scope | ✅ four `SPECS` rows | ✅ tier opened |
| `D-53` — `SPECS-TRANSITION-ENFORCEMENT` | ✅ | ✅ S1 precondition | ✅ file row | ✅ tier opened |
| `G57` — `X3` mapping | ✅ | ✅ S1 blocker | ✅ missing-artifact row | ✅ S1 gate |
| `G55` — index truncated | ✅ | — *register-internal* | — *no artifact* | — *not a sprint event* |
| `G56` — solve sequence stale | ✅ | — *register-internal* | — *no artifact* | — *not a sprint event* |
| `D-54` — this rule | ✅ | — *governs, does not sequence* | — *no artifact* | ✅ propagation recorded |

**Two of six touch every tier. Two touch one.** That asymmetry is the point: the rule is not *"update everything"* — it is *"decide per tier, and say so."* A blanket update would restate register-internal findings in three documents that do not own them, which is `D-30`'s redundancy failure wearing a different hat.

### Scope limits

Closes no Open Decision. Authorizes no code, schema, or migration. Governs documentation propagation only.

## 5.14p `D-55` — the `X3` state backfill mapping, specified as data

**Decision, 2026-08-20, Chief Editor direction. Closes `G57`.** The eight-row mapping is **role-keyed**, not name-keyed.

### The evidence

The seeded `workflow_transitions` rows in `0001_init.sql` carry an executor role on every transition. Aligning on **role** rather than on name similarity settles the mapping deductively:

| Seeded transition | Executor role | Addendum gate with that role | Gate output |
|---|---|---|---|
| `null → logged` | `chief_editor`, human | — *(creation, pre-gate)* | — |
| `logged → reported` | **`reporter`** | **T1** | `Logged` |
| `reported → investigated` | **`investigator`** | **T2 + T3, collapsed** | `Investigated` |
| `investigated → journaled` | **`journalist`** | **T4** | `Drafted` |
| `journaled → senior_reviewed` | **`senior_journalist`** | **T5** | `Reviewed` |
| `senior_reviewed → chief_approved` | **`chief_journalist`** | **T6** | `Approved` |
| `chief_approved → published` | `chief_journalist` | **T7** | `Published` |

**T1's executor is the Reporter. The repo's reporter transition produces `reported`. Therefore `reported` is T1's output, and T1's output is `Logged`.** The seed reason strings corroborate: `null → logged` reads *"Article logged by Chief Editor"* — an entry act — while `logged → reported` reads *"AI tagging complete"*, which is the Reporter gate.

### The mapping — total, with no default branch

| `0001` value | → `article_state_v2` | Basis |
|---|---|---|
| `logged` | **`Discovered`** | Entry state, before the Reporter acts |
| `reported` | **`Logged`** | T1 output — Reporter |
| `investigated` | **`Investigated`** | T2+T3 collapsed — Investigator |
| `journaled` | **`Drafted`** | T4 — Journalist |
| `senior_reviewed` | **`Reviewed`** | T5 — Senior Journalist, **Line 2** |
| `chief_approved` | **`Approved`** | T6 — Chief Journalist, **Line 1** |
| `published` | **`Published`** | T7 |
| `rejected` | **`Rejected`** | T9 |

**Eight sources, eight targets, one-to-one.** Two target states have **no source value and must backfill empty**: `Validated` *(T2/T3 were collapsed, so no row ever rested there)* and `Needs Revision` *(T8 does not exist in `0001`)*.

> **The migration must be total.** Every source value maps explicitly; **no `else` or `default` branch.** A default silently buckets any value it does not recognise, and in an append-only table that misfiling is permanent. If a value appears that is not in this table, the migration must **fail loudly**, not guess.

### What this overturns

`D-53` §5.14n drafted this mapping as `logged` → `Logged` *(clear)* and `reported` → `Validated` *(ambiguous)*. **Both are wrong.** Name similarity was doing the work; the executor role was not consulted. Under role alignment `reported` is T1's output, which is `Logged`, and `logged` is the entry state, which is `Discovered`.

**The name-keyed reading required the Reporter gate to produce `Validated`** — but the Addendum assigns T2 (`Logged → Validated`) to the **Investigator**. The reading was self-contradicting and the contradiction was invisible without putting both enums beside the seeded roles.

**This is what `G57` was raised to prevent**, and it nearly happened inside the document that raised it.

### Consequence for the seeded data

Every article currently at `logged` becomes `Discovered` — **pre-T1**, not post-T1. Under the name-keyed reading those same rows would have become `Logged`, asserting that a Reporter gate had executed **when no reporter transition exists for them.** The audit record would have claimed a gate that never ran.

`Validated` backfilling empty is **correct, not a defect** — it is `X3`'s collapsed T2/T3 showing through. It must not be "fixed" by inventing rows.

### Scope limits

Closes `G57`. **Authorizes no migration** — `0002` remains unwritten and `0001` unedited. Names no column beyond the existing `workflow_state`. `X4` *(seed rows executing T5 with an agent)* is **untouched and still open** — this decision maps states, it does not correct executors.

## 5.14q `D-56` — `R3` specified, not installed; `G59` found

**Decision, 2026-08-20, Chief Editor direction.** The verification apparatus is **specified** at `docs/specs/SPECS-VERIFICATION-APPARATUS.md`. **Nothing is installed** — no file created, no package added, no script written. The standing build guardrail governs.

**Classification: Project Scope ⚙** per `D-39`/`D-40`. Build tooling, not a product feature. Generates no `FR`, no `AC`, no `SPECS` candidate.

### Why this is not a fifth `D-52` document

`D-52` filtered **18 candidates named in the four `Fn_Specs`** and yielded four documents. **`R3` was never in that filter** — it is a T1 item and no `Fn_Specs` names it. Different provenance, **no contradiction**: `D-52`'s four remain the complete answer to *"which product features need `SPECS`"*; this answers *"what apparatus lets a sprint be judged."*

> Recorded because a later reader counting five documents in `docs/specs/` would otherwise read `D-52` as violated. **The count is not the rule; the provenance is.** Same class as the seven naming-difference dissolutions already on record.

### What the specification settles

| Component | Resolution |
|---|---|
| Runner | `bun test` — **ratifies the declared `packageManager: bun@1.1.30`**, does not re-choose. No new dependency; bun's runner is built in |
| Layout | `__tests__/` at root, one smoke test. **No placeholders for unbuilt features** — a red-by-default CI becomes an ignored CI within two sprints |
| CI | Typecheck, lint, and test as **separate explicit steps** |
| `TC6` | **Not resolved — compensated.** The build flags stay; CI runs the gates itself |

### The failure this specification exists to prevent

`next.config.ts` sets `ignoreBuildErrors: true` and `ignoreDuringBuilds: true` (`TC6`). **A CI job running only `next build` would pass with broken types and lint errors** — green would mean *"the bundler completed"*, not *"the code is sound."*

**Guaranteed to fail:** adding that CI and reporting `R3` complete. The apparatus would exist, report green, and check nothing — **worse than no CI**, because every sprint DoD would then cite a verdict structurally incapable of failing.

**How to avoid it:** SC-4 is the test of the tester. **Break a type deliberately and confirm CI goes red** before trusting any sprint verdict.

### `G59` — no lockfile is committed *(new)*

**Verified absent:** no `bun.lockb`, `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`. `bun install` in CI would resolve dependencies **fresh on every run**.

Two consequences: **CI is not reproducible** — the same commit can pass today and fail tomorrow because a transitive dependency published — and **`R3`'s own guarantee is undermined at the root**, since the apparatus meant to make sprints falsifiable would itself be non-deterministic. **A verdict that varies with wall-clock time is not a verdict.**

**Cannot be resolved here:** generating `bun.lockb` requires bun, which is not installed. **Recorded, severity T1, carried with `R3`.**

### Reporting discipline

**bun is not installed on the Chief Editor's machine**, so `bun test` cannot be verified locally and **CI would be its first real execution.** When installed, `R3` is reported as *"written, locally unverified"* until a real CI run is observed — the same wording S1 already carries for `DEP-05`. **Never as done.**

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 |
|---|---|---|---|---|
| `D-56` — `R3` specified | ✅ | ✅ T1 note | ✅ spec + two ❌ rows | ✅ S0 gate restated |
| `G59` — no lockfile | ✅ | ✅ travels with `R3` | ✅ `bun.lockb` row | — *not a sprint or build-version event* |

### Scope limits

Closes `R3` **as a specification only**. Creates no file, installs no package. Does not resolve `TC6`. `G59` recorded, not resolved. **S0 remains gated** until the guardrail is lifted for `R3` — but the gate is now an execution step, not an open design question.

## 5.14r `D-57` — `Q2` resolved: no independent assurance in v1, conditional on a BCP surface

**Decision, 2026-08-20, Chief Editor direction.** **v1 has no independent assurance.** Line 3 has no executor and `FR-11` is **not built in v1**. **Never the Chief Editor** — he is the only human on the project (§0.3), and naming him collides Line 2 with Line 3 (`A23`, `SEC-01`).

**Conditional, not plain.** The Chief Editor attached a condition — `C-13`, a **business-continuity observability surface** that shows the critical observation continuously, and gives future BCP concerns one home.

### The challenge this direction has to survive — and does

**A dashboard executes nothing. Observability is not independence.** `SEC-01` requires Line 3 to share no identity or data path with Lines 1 and 2. A surface read by the Chief Editor is still **Line 2 reading its own evidence**, however well presented.

And the governing set contains a warning aimed squarely at this shape. `Modular_PRD` §1: *"The problem is a **compliance-absence problem, not a dashboard problem**. A tool that surfaced trending articles faster but still permitted an unreviewed publish would fail this PRD entirely."*

**That warning applies here in exactly one way, and it is decisive:** if the surface were treated as *satisfying* `Q2`, this decision would be the error the warning names — better visibility standing in for an absent control. **It is not.** `Q2` is answered *"no independent assurance"*; the surface is a **compensating control** that makes the absence legible and actionable. Same distinction as `AC-12` (infrastructure cannot be discharged in product code, `D-39`) and `G41` (the product's duty is not to prevent deletion but to stay honest once it has happened).

### Why the direction improves on the drafted recommendation

The draft recommended *"no assurance, revisit before V2."* **A condition with a date is a promise; a condition with an artifact is falsifiable.** `C-13` replaces a scheduling intention with a thing that either exists and shows the observation, or does not.

And the second half of the direction — *"so future BCP is in one place"* — is **verified against the corpus, not accepted on assertion**:

| Check | Finding |
|---|---|
| Business-continuity requirement anywhere in the governing set | **None.** Zero occurrences of *business continuity*, *BCP*, or *continuity plan* |
| Continuity conditions in the specs | **Scattered** — escalation, absence, degraded mode, and stall all appear across multiple documents |
| A home concept | **Exists but has no surface.** `FN-EXCEPTIONS-06-11-12` is titled *"Exceptions & **Continuity**"* and owns `FR-12` |
| `FR-08`'s board | **Editorial workflow, not continuity.** Filters state, topic, category, Line — none of which is a continuity condition |

**The conditions exist, the group that owns them exists, and nothing displays them.** That is a real gap the direction identifies correctly.

### `C-13` — the condition

**Condition on `D-57`.** v1 discloses no independent assurance **and** provides a business-continuity observability surface carrying, at minimum, the conditions the existing specs already define:

| Observation | Source | Why it is a continuity concern |
|---|---|---|
| `T6→T5` return rate | `A17`, `FR-08` | **The `OD2` trip-wire.** A rate that never leaves zero means successor-node review is nominal |
| Degraded-mode state | `FR-12` | The accountable human is unavailable beyond threshold |
| Escalation backlog | `FR-06` | Auto-escalations with no destination accumulate silently |
| Agent stall | Addendum, agent-failure row | An article stops advancing with nobody notified |
| Retraction clock | `G43` | A binding order carries a deadline |
| Publication retry exhaustion | `FR-09`/`FR-10` | A target that never went live |

**Nothing here is invented.** Every row is a condition an existing specification already defines and no surface currently shows.

**Follow-up phase:** the surface is specified in **S3** with the audit surface, alongside `G41` and `G49`. Not S5 — it must exist *before* the `OD2` evidence it displays matters.

### Why `OD4` branch ② still binds

The Charter: *"If `OD2` resolves negatively, at any point, including before v1 ships: this is a pre-launch blocker."* **That force is unchanged.** `C-13` does not weaken it — it makes the triggering condition **visible in a named place** rather than inferable from a query nobody is scheduled to run.

**What is guaranteed to fail:** treating the surface as the assurance. The trip-wire would then be watched by the party it audits, and reported as though independently verified. **How to avoid it:** `GA6`'s disclosure stands unchanged — **assurance Absent** — and the surface is described everywhere as a compensating control, never as Line 3.

### `G60` — the BCP surface has no `FR` *(new)*

**Verified:** no functional requirement covers a continuity surface. Candidate **`FR-14`** *(next free number)*.

Per `D-29`, **a new capability lands in `Modular_PRD` — tier 2 — and is not invented in `Fn_Specs`.** Same disposition as `G38`, which resolved by defaulting to an owning `CR` rather than by writing a requirement at the wrong tier. **Recorded, not written:** `FR-14` needs a proper `Modular_PRD` §5 pass, which is beyond *"complete only `Q2`"*.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 |
|---|---|---|---|---|
| `D-57` — `Q2` answered | ✅ | ✅ S5 row | ✅ via `C-13` | ✅ status row |
| `C-13` — BCP surface condition | ✅ | ✅ S3 placement | ✅ artifact row | ✅ status row |
| `G60` — no `FR` for the surface | ✅ | ✅ gates S3 | ✅ artifact row | ✅ changelog v1.12 |
| `Q2` itself | ✅ | ✅ | — *a decision, not an artifact* | ✅ |

### Scope limits

Closes `Q2`. Unblocks `FR-11`'s **disposition** — not its build; `FR-11` is **not built in v1**. Closes no `OD` — `OD3` remains not closable at scaffolding. Authorizes no code, schema, or migration. `G60` recorded, `FR-14` not written. `GA6`'s *assurance Absent* disclosure is **unchanged**.

## 5.14s `D-58` — `G11` resolved: register precedence, with detection as the open half

**Decision, 2026-08-20, Chief Editor direction. Closes `G11`** — the project's only **unowned** gap since scaffolding.

### Owner

**The Chief Editor.** He is the only human on the project (§0.3), so authority was never genuinely contestable — what was missing is that nobody had **written it down**, which is why `G11` sat unowned while `G32` happened underneath it.

### What the evidence changed about the question

`G11` was framed as *"concurrent edits, no arbitration rule."* Checked against git, that framing is **wrong in a way that matters**:

| Observation | Consequence |
|---|---|
| **All commits carry one git identity** | **Git cannot attribute an edit to an agent.** Authorship is uniform across `.claude/`, `.codex/`, and `.agents/` |
| **Zero merge commits** | Agents never merge. They edit the same files **sequentially, on one branch** |
| Therefore | **Conflicts never surface as conflicts.** They surface as **silent overwrites** |

**`G32` was not a merge that resolved badly. It was an overwrite nothing detected.** An arbitration rule modelled on merge precedence would therefore never fire — the mechanism it arbitrates does not occur here.

> This is why `graphify agent-stats` attributes from CLI transcripts and states plainly that it is **not git authorship**. In this repository git authorship carries no information.

### The rule — precedence

**`V1-DECISION-REGISTER.md` is authoritative.** An edit to any derived tier that contradicts it **loses**, without human involvement.

**This codifies existing structure rather than inventing a rule.** `D-29` already ranks the tiers; `D-54` already makes the register the tier that is *always* updated. Precedence follows from both. **What was missing was never the ordering — it was saying out loud that the ordering settles conflicts.**

| Conflict | Resolution |
|---|---|
| Register versus any `V1-*` tracking file | **Register wins** |
| Register versus `Fn_Specs` or `SPECS` | **Register wins** |
| Two derived tiers, register silent | **Escalate** — the register has not decided it yet, which is itself the finding |
| Anything versus `docs/PRD.md` or the Charter | **Frozen documents win.** Unchanged |

### `C-14` — detection is the half that is not yet solved

**A precedence rule with no detection is inert**, because in this repository nothing announces that a conflict occurred. The rule tells you who wins a fight you never learn about.

Four checks have been run repeatedly by hand this session and each has caught a real defect. **They are the forcing function, and they are proven, not proposed:**

| Check | Caught |
|---|---|
| Shared-core hash across the three agent rule files | `G53` — three rule blocks drifted both ways |
| `D-54` tier sweep — is each ID present in every tier that owns it | `G58` — three tracking files stale |
| §5.1 duplicate-ID scan | The `G39` row carrying both *Closed* and *Open* |
| `docs/graph-fragments/missing.js` | Documents absent from the graph |

**Disposition: specified, not installed** — the same wording `D-56` uses for `R3`. Bundling these into a standing script is executable code, which the build guardrail forbids. **Recorded honestly: until the script exists, the forcing function is a procedure someone must remember to run, and a procedure nobody runs is not a forcing function.**

**Follow-up phase:** with `R3`'s installation, since both are verification apparatus and both wait on the same guardrail.

### What is guaranteed to fail

Declaring `G11` closed on the precedence rule alone and treating the repository as safe. **Precedence resolves conflicts that are known. Detection is what makes them known.** `G32`, `G53`, and `G58` were each found by a human noticing — twice by the Chief Editor challenging a completion claim. **That is not a control; it is luck with a good record.**

**How to avoid it:** `G11` closes on the rule and **carries `C-14` forward as the open half**. Any claim that concurrent editing is *"handled"* must name whether detection is installed.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 | Agent files |
|---|---|---|---|---|---|
| `D-58` — precedence rule | ✅ | ✅ | — *no artifact* | ✅ | ✅ **shared core** |
| `C-14` — detection | ✅ | ✅ with `R3` | ✅ script row | ✅ | ✅ shared core |

**The agent files are a required tier for this decision specifically.** A rule governing how agents behave is inert if the agents cannot read it — so it lands in the byte-identical shared core, not only in the register.

### Scope limits

Closes `G11` **on the precedence rule and ownership**. `C-14` remains open — detection is specified, not installed. Authorizes no code. Does not alter frozen-document precedence.

## 5.14t `D-59` — `G10`/`QC` resolved: one origin, two paths

**Decision, 2026-08-20, Chief Editor direction. Closes `G10`.** The two lanes are separated **by path on a single origin**, not by domain:

| Lane | Route |
|---|---|
| **MVP** — the five-gate editorial anchor (`AP-01`) | `/editorial` |
| **POC** — professional evidence review (`P0-EVR`) | `/request-brief` |

**The apex domain stays `UNSET`.** No literal domain is recorded anywhere in the corpus, and house practice is not to invent a value that has not been decided — the same discipline applied to `RETURN_LIMIT_BEFORE_ESCALATION` and `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS`. **The pattern is decided; the string is not.**

### Why this replaces the drafted recommendation

The draft recommended **separate apex domains** on `PSK-06` grounds. **Chief Editor correction: that is a hosting decision, and this is one repo and one project.**

The correction holds. Separate apexes would require either a second deployment project or domain-level routing — **infrastructure work with no payoff at the current stage**, on a project whose deploy rule is a single git-driven target. Paths cost nothing, are reversible, and answer what `QC` actually asked: that the arrangement be **conscious** rather than inherited.

**And it dissolves the seniority question rather than answering it.** `QC` framed the tension as *"public root for POC inverts project seniority."* **With no root assigned to either lane, neither is subordinate.** The same class of dissolution as the seven naming-difference findings already on record: the conflict was in the framing, not the structure.

### What choosing paths costs — stated, not buried

**One origin means one browser security context.** `/editorial` and `/request-brief` share cookies, session storage, and local storage. **The browser cannot enforce any separation between the lanes.**

That is **acceptable now and not later**:

| Stage | Assessment |
|---|---|
| **v1, demo-first** | **Fine.** No login wall, no real client data, seed data only |
| **POC carrying real client data** | **Not fine.** Each paying customer is its own tenant (`D-01`) and POC holds personal data under PDPA. Shared origin means tenant session scope overlaps the editorial lane |

**`C-15` — condition on `D-59`.** Promote the lanes to **distinct origins** — subdomains or apexes — **before POC handles real client data.** Follow-up phase: **T3**, with the POC lane charter (`G7a`/`G28`), and no later than the *"lock it down"* sprint that introduces authentication.

**Route names are chosen so the promotion is mechanical.** `/editorial` and `/request-brief` map to `editorial.<apex>` and `request-brief.<apex>` without renaming anything the application depends on.

### The `PSK-06` consequence, which paths do not discharge

`PSK-06` is **editorial-commercial separation and restricted solicitation**. The drafted recommendation leaned on the address bar to signal it. **Paths remove that signal** — same origin, adjacent routes, no visible boundary.

**So the separation must be carried by the pages themselves:** the editorial lane does not solicit, and the paid lane does not present editorial judgment as a purchasable deliverable. **This is not a new requirement — it is `PSK-06` — but choosing paths makes the pages its only enforcement point.** Recorded so nobody later assumes a domain boundary was doing work it never did.

### What is guaranteed to fail

Treating `C-15` as cosmetic and shipping POC onto the shared origin with real client data. **PDPA exposure and tenant isolation would then rest on application-layer session handling on an origin the editorial lane also occupies** — the same shape as `TC1`, where the layer being trusted has no more authority than a browser.

**How to avoid it:** `C-15` fires on **first real client data**, not on a date. The trigger is an event the POC lane charter already has to define.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 |
|---|---|---|---|---|
| `D-59` — path separation | ✅ | ✅ route constants, S0 | ✅ ux spec row | ✅ status row |
| `C-15` — promote to distinct origins | ✅ | ✅ T3 | — *an infrastructure change, not an artifact* | ✅ |
| Apex `UNSET` | ✅ | ✅ config | — *no artifact until named* | — *not a sprint event* |

### Scope limits

Closes `G10`/`QC`. **Names no domain** — the apex remains `UNSET`. Authorizes no code, route, or deployment change. The route specification belongs in `docs/specs/ux/` per `D-34` and is **not written here**. `C-15` remains open by design.

## 5.14u `D-60` — `G54` closed from source; the swap conclusion holds, one claim did not

**Decision, 2026-08-20. Closes `G54`.** The upstream command surface is verified **from source**, with **nothing installed**.

### The recorded route was never necessary

`docs/graph-fragments/README.md` §6 said `G54` needed a Python toolchain: install `uv`, install `graphifyy` alongside, run `graphify --help`, diff. **That route assumed the only way to enumerate a CLI is to run it.**

`Graphify-Labs/graphify` is public. `graphify/__main__.py` registers the subcommands, and `pyproject.toml` declares the entry point. **Reading them is stronger evidence than a README and needs no machine change** — so the gap that was deferred on a build-guardrail conflict never actually had one.

**Recorded because the pattern matters:** a gap deferred for an environment reason should be re-examined for a read-only path before it is carried forward. This one was carried for two turns unnecessarily.

### Verified result — 8 of 9, not 9 of 9

README §3 listed **nine** commands as distribution-specific. Against `graphify/__main__.py`:

| Command | Upstream | README §3 claim |
|---|---|---|
| `portable-check` | absent | ✅ correct |
| `migrate-state` | absent | ✅ correct |
| `review-delta` | absent | ✅ correct |
| `summary` | absent | ✅ correct |
| `hook-rebuild` | absent *(`hook` exists)* | ✅ correct |
| `studio` | absent | ✅ correct |
| `ontology` | absent | ✅ correct |
| `build` | **absent entirely** | ✅ correct, and stronger than claimed — the claim was about `build --fragment` |
| `merge-graphs` | **PRESENT** | ❌ **wrong** |

**`merge-graphs` exists upstream.** The nine-command claim is **eight**.

> **Presence of the name is not equivalence of behaviour.** Downstream `merge-graphs` merges `graph.json` files into a cross-repo graph; whether upstream's does the same is **not verified and is not claimed here.** This is the naming-difference discipline applied in the other direction — the seven prior findings were *"different name, same thing"*; this is the risk of *"same name, assumed same thing."*

### `D-51`'s conclusion stands, and its evidence is upgraded

`D-51` ground 2 was recorded as *"a README reading, not a verified command list."* **It is now source-verified.** All five commands `CLAUDE.md` mandates — `portable-check`, `migrate-state`, `review-delta`, `summary`, `hook-rebuild` — are **confirmed absent upstream.** The decision to stay on `@sentropic/graphify` holds on stronger evidence than when it was made.

**Upstream version: `graphifyy` 0.1.14.** *(The `v8` seen earlier is a branch name, not a version. Recorded so the two are not conflated.)*

### A correction that reduces risk rather than adding it

README §6 warned: *"uninstalling npm first, then discovering upstream lacks `merge-graphs` and `build --fragment`. At that point the curated layer cannot be re-merged by the remaining tool."*

**That overstated the exposure.** `docs/graph-fragments/merge7.js` is **plain Node reading and writing JSON** — it calls `fs` and `path` and never invokes graphify at all. **The curated layer's rebuild does not depend on either distribution.** It needs Node, which is present.

What a swap would actually break is **verification and convention**, not rebuild capability:

| Breaks | Why |
|---|---|
| `portable-check`, `summary`, `review-delta`, `migrate-state`, `hook-rebuild` | Confirmed absent upstream; five mandated rules become unrunnable |
| Output location | Upstream writes `graphify-out/`; `.gitignore` ignores `.graphify/` only |
| Graph schema | **Unverified.** Whether upstream `graph.json` uses `links` and the same node fields is unknown — and `merge7.js` depends on that shape, not on the CLI |

**The real residual risk is the schema, not the commands** — and it was not on the original list.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 | Tooling doc |
|---|---|---|---|---|---|
| `D-60` / `G54` closed | ✅ | — *tooling, sequences no sprint* | — *creates no artifact* | ✅ status row | ✅ §2, §3, §6 corrected |

### Scope limits

Closes `G54`. **Installs nothing; changes no distribution.** `D-51` stands — the project remains on `@sentropic/graphify`. Claims **presence** of upstream `merge-graphs`, **not equivalence**. The graph-schema question is newly named and **not resolved**.

## 5.14v `D-61` — `X4` specified: one seed row, and the `X`-series is unindexed

**Decision, 2026-08-20. Specifies `X4`; does not apply it.** `0001_init.sql` is never edited and `0002` is unwritten, so this is **specified, not applied** — the disposition `D-56` established for `R3`.

### The defect, located exactly

One seeded transition row, on article `context-engineering-agentic-systems`:

| Field | Seeded value |
|---|---|
| From → to | `journaled` → `senior_reviewed` |
| Role | `senior_journalist` |
| `actor_type` | **`agent`** ← the defect |
| Reason | *"Quality check passed"* |

Under `D-55`'s role-keyed mapping, `journaled` → `senior_reviewed` **is T5** — *Drafted → Reviewed*, **Line 2, human-primary.** `FN-GATES-01-05` §3.4: *"An agent attempting T5 is refused. Line 2 is human-primary. **This is the gate's defining property, not a configuration.**"*

**Bounded: exactly one row, one gate.** The adjacent `senior_reviewed` → `chief_approved` row also carries `agent` — **and is correct.** That is T6, **Line 1**, where an agent is the specified executor. **`X4` is not "the seed data uses agents"; it is one gate where it must not.**

### Two real harms, and one I decline to claim

| # | Harm | Real? |
|---|---|---|
| 1 | **The demo teaches the inverse of the product's defining property.** The homepage *is* the working app with seed data, so the shipped demonstration shows an agent having executed the one gate that refuses agents | **Yes** |
| 2 | **The independence classification would be false.** T5 is the Line 1 → Line 2 crossing carrying four-eyes `satisfied` (`FR-05`). A row asserting an agent crossed it alone makes that classification a lie — and `NFR-02` makes transition rows permanent | **Yes** |
| 3 | ~~The S1 enforcement trigger will reject these rows~~ | **No** |

**Why harm 3 is withdrawn:** `SPECS-TRANSITION-ENFORCEMENT` §5 fires `BEFORE UPDATE` on `articles`. **Historical transition rows are never re-validated**, so the trigger will not reject them and the migration is not blocked by them. Claiming otherwise would overstate the risk — the same correction `D-60` had to make about the stranded-fragments warning.

**Harm 2 is the one that matters.** It is the same family as `G57`/`D-55`: a Line-boundary crossing attributed to the wrong kind of executor, written into an append-only table.

### The correction

From the Addendum's own T5 row — *"Senior Journalist · **Line 2** · **Human-primary** (Chief Editor), agent-assisted"*:

| Field | Corrected value |
|---|---|
| `actor_type` | `human` |
| `actor_id` | The Chief Editor — the only human on the project (§0.3) |
| `assisting_agent_id` | The agent that assisted. **Assistance is metadata; the human signs** |
| `line_assignment` | Line 2 |

### `X4` and `X5` must land in the same migration

**Flipping `actor_type` to `human` alone produces a worse record, not a better one** — it would assert a human executed T5 while providing **no way to say which human**, and would silently discard the fact that an agent assisted.

`actor_id`, `assisting_agent_id`, and `line_assignment` are all `X5`/`TC4` columns that **do not exist yet**. **`X4` is therefore not independently closable: it closes with `X5`, in `0002`, or not at all.** Recorded because the sprint plan lists them as separate line items and nothing said they were coupled.

### `G61` — the `X`-series is not in the index *(new)*

**Verified:** `X3`, `X4`, `X5`, `X7`, and `X8` have **no rows in §5.1**. They are recorded in `docs/journal/2026-08-16-sprint-plan.md` — a journal document, and one this register **itself classifies as non-authoritative** under `D5`.

**So five live build divergences are tracked only where the governing set says not to look.** This is `G55`'s mechanism on a different ID series: the all-IDs index does not reach them.

**Recorded, not backfilled.** Adding only `X4` to an index missing five would make the series *look* covered while four stayed invisible — the trap `G55` named explicitly. §5.1 now carries **one row for `X4` and one naming the gap**, in the same shape used for `G40`–`G49`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 |
|---|---|---|---|---|
| `D-61` — `X4` specified | ✅ | ✅ S1 coupling | — *no artifact; `0002` already listed* | ✅ |
| `G61` — `X`-series unindexed | ✅ | — *an index defect, sequences nothing* | — *no artifact* | ✅ |

### Scope limits

Specifies `X4`; **applies nothing.** `0001_init.sql` unedited, `0002` unwritten. Authorizes no migration. `X4` remains **Open — specified, not applied**, and closes only with `X5`. `G61` recorded, **not backfilled**.

## 5.14w `D-62` — `FR-14` written; `G60` closed

**Decision, 2026-08-20. Closes `G60`.** The business-continuity observability surface now has a functional requirement. Written into `Modular_PRD` — **tier 2, which owns new capabilities under `D-29`** — not invented in `Fn_Specs`.

### What was added

| Artifact | Where |
|---|---|
| `US-14` | §4 User Stories |
| `FR-14` | §5 Functional Requirements — P1, S3, Line 2 |
| `AC-21` | §9.1 Functional acceptance criteria |
| Project Scope row | §7.2 — **no Customer Request origin** |
| NFR coverage | `NFR-05`, `NFR-08` |

### Disclosed as Project Scope, not folded into a `CR`

`FR-14` has **no customer origin.** It exists because the Chief Editor attached `C-13` to `D-57` — the compensating control for v1 having no independent assurance.

**It is therefore recorded in §7.2 alongside `FR-11`–`FR-13`, which carry the same disclosure**, rather than attributed to a `CR` that did not ask for it. **Team-added scope is disclosed, never absorbed** — the discipline `FB-03` established when the Line filter was added to the board.

### The acceptance criterion carries `G41`'s rule

`AC-21` requires that a condition **never yet observed reads *not observed*, never blank.**

**An empty reading is indistinguishable from a healthy one.** A surface showing nothing for *escalation backlog* could mean no escalations exist, or that the check never ran — and on a **continuity** surface those two readings demand opposite responses. This is `G41`'s rule (*absence must be explained, never rendered as "nothing happened"*) applied one tier out, from the audit surface to the continuity surface.

### Deliberately narrow

`FR-14` **displays** observations that existing requirements already define. **It defines no new measurement, no new threshold, and no new alerting.** Every one of `C-13`'s six rows is sourced from an existing `FR` or gap: `A17`/`FR-08`, `FR-12`, `FR-06`, the Addendum agent-failure row, `G43`, and `FR-09`/`FR-10`.

**This keeps it a compensating control rather than a new capability with its own scope.** `D-57` is explicit that the surface **is not Line 3 and does not constitute assurance**; a requirement that started defining its own thresholds would drift toward exactly the claim `D-57` forbids.

### A placement error, caught and recorded

`AC-21` was first written into **§9.3 Security**, a five-column table, instead of **§9.1 Functional**, which has six. Caught by a column-count check against neighbouring rows and moved.

**Recorded because the near-miss is instructive:** §9.1, §9.2, and §9.3 are three tables with different shapes, and seven rows carrying five columns initially looked like seven malformed rows. **They were a different table, not a defect** — the eighth instance of the naming-difference family, avoided by checking the structure before naming it.

### Tier applicability (`D-54`)

| Item | `Modular_PRD` | Register | Build spec | Inventory |
|---|---|---|---|---|
| `FR-14` / `G60` | ✅ **tier 1 here** — §4, §5, §7.2, §9.1 | ✅ | ✅ S3 unblocked | — *no file created* |

**`Modular_PRD` is the parent for this decision**, not the register. `D-29` puts it above the `V1-*` set for **intent**: a new capability is owned there. The register records that it happened.

### Scope limits

Closes `G60`. Authorizes no code, schema, or UI. `C-13` remains an open condition on `D-57` — **the requirement now exists; the surface does not.** `FR-14` is **S3** and gated on nothing further.

## 5.14x `D-63` — the `X`-series backfilled; `G61` closed

**Decision, 2026-08-20. Closes `G61`.** All eight `X`-series divergences now carry rows in §5.1. They were previously recorded **only** in `docs/journal/2026-08-16-sprint-plan.md` — a journal this register classifies as **non-authoritative** under `D5`.

### Correction — the gap statement said five

`G61` was recorded as *"five live build divergences."* **Verified wrong.** The series is `X1`–`X8`, **eight rows.**

**Where the five came from:** the sprint plan's summary line names *"X3/X4/X5/X7/X8"* — the `D5`-family entries that are **still open**. I read a filtered subset as the whole series. `X1` *(closed by amendment, `D3`)*, `X2` *(resolved, no action)*, and `X6` *(superseded by `A1`/`A2`, `D4`)* were never counted.

**This is the third count I have had to correct in this register** — after `G55`'s *"three bare"* which was one, and `D-51`'s *"nine commands"* which was eight. **Every one was a number I derived from a summary rather than from the thing being summarised** — the mechanism `D-54` names and `C-14` is meant to detect.

### What the backfill surfaced

| Row | Why it matters beyond bookkeeping |
|---|---|
| `X5` | **Four-eyes cannot be evaluated at all today** — `workflow_transitions` carries neither `line_assignment` nor an independence field. This is the substrate `FR-05` and `OD2` both depend on |
| `X5` field name | `Q11`-blocked (`A21`). **Do not write `judgment_independence_status`** — it asserts a cognitive fact the code can only prove structurally, and `NFR-02` would make the wrong name permanent |
| `X7` | Sits on the **same `TC1` surface as `AC-12`** — permissive RLS and no auth. Mitigated at S2, closes only at S6 |
| `X6` | **Superseded, not closed.** `D4` is *"not yet closable"*, so `X6` cannot be treated as done |

### Two dispositions that are not "open" or "closed"

`X2` is **resolved with no action** — a documented conflict where one source simply governs. `X6` is **superseded** — replaced by a live decision that is itself unresolved.

**Neither fits a binary.** Recording them as *closed* would assert work was done; as *open* would assert work is pending. **Both would be false**, which is why the index now carries their actual disposition instead of forcing them into the two states it already had.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 |
|---|---|---|---|---|
| `D-63` / `G61` | ✅ eight rows | ✅ sprint mapping | — *`X8` already carried; no new artifact* | ✅ |

### Scope limits

Closes `G61`. **Indexes existing divergences; resolves none of them.** `X3`, `X4`, `X5`, `X7`, `X8` remain **Open** on their own terms. Authorizes no code, schema, or migration.

## 5.14y `D-64` — `G59` closed: `bun.lockb` committed

**Decision, 2026-08-21, Chief Editor lifted the build guardrail for this item.** `bun.lockb` is generated and committed. **Closes `G59`.**

**This is the first executable artifact produced in this engagement.** Everything before it was documentation.

### What was done

| Step | Result |
|---|---|
| bun installed | **1.1.30**, matching the declared `packageManager` exactly |
| `bun install` | 344 installs across 413 packages, exit 0 |
| `bun.lockb` | **171,092 bytes**, committed |
| `bun install --frozen-lockfile` | **exit 0** — the lockfile fully resolves |
| `git status` | **only** `bun.lockb`; `node_modules/` confirmed ignored |

**The frozen-lockfile check is the one that matters.** Generating a lockfile proves only that a resolver ran. **Re-resolving against it and getting no changes proves it is complete** — which is the property `G59` existed to establish.

### What `G59` was actually about

Without a lockfile, `bun install` in CI resolves fresh on every run. **The same commit could pass today and fail tomorrow** because a transitive dependency published — and **a verdict that varies with wall-clock time is not a verdict.**

That undermined `R3` at the root: the apparatus meant to make sprints falsifiable would itself have been non-deterministic. **413 packages are now pinned**, so a CI run judges the commit rather than the day.

### Environment finding — the Git Bash shim hangs, the executable does not

Recorded because it cost two timeouts and will recur.

npm installs `bun` on PATH as a **POSIX `sh` shim** (`#!/bin/sh`). Invoked through Git Bash it **hung indefinitely** — `bun --version` returned once, then stopped responding, and `bun install` produced no artifacts across seven minutes.

**Calling the Windows executable directly returns instantly:**

```
$env:APPDATA\npm\node_modules\bun\bin\bun.exe
```

**Diagnosis note worth keeping:** the first hypothesis was that npm had skipped the `postinstall` script and the real binary was never downloaded. **Wrong** — `bun.exe` was present at 109 MB. **Inspecting the filesystem rather than re-running the hanging command is what settled it.** Same class as `D-60`, where reading source beat installing a toolchain.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 | `SPECS-VERIFICATION-APPARATUS` |
|---|---|---|---|---|---|
| `D-64` / `G59` | ✅ | ✅ `R3` DoD D-6 | ✅ `bun.lockb` ✅ | ✅ | ✅ §5 |

### What this does not close

`R3` **remains specified, not installed.** The lockfile is one of its six DoD conditions (**D-6**); the test runner, `__tests__/`, and the CI workflow are still absent, and `C-14`'s detection checks with them. **A lockfile with no CI consuming it is correct but idle** — it earns its value on `R3`'s first run.

### Scope limits

Closes `G59`. Creates exactly one tracked file. **No test runner, no CI, no `0002`.** The build guardrail was lifted for this item only and **remains in force for everything else.**

## 5.14z `D-65` — the `R3`+`C-14`+`0002` bundle is rejected; `G62` found

**Analysis, 2026-08-21.** The three remaining items were described as *"a single decision, blocked on the same guardrail."* **They are not one decision, and two of the three are blocked on things the guardrail has nothing to do with.**

### Challenge 1 — `0002` does not belong in this bundle

| Ground | Detail |
|---|---|
| **Blocked on `Q11`** | `Q11` (field naming) is **open** — one of sixteen Chief Editor decisions outstanding. `X5` says plainly: **do not write `judgment_independence_status` until `Q11` is confirmed** |
| **The block is irreversible** | `NFR-02` makes `workflow_transitions` append-only. **A guessed field name ships permanently.** The alternative — omit the independence field — leaves four-eyes unevaluable, which is the exact defect `X5` exists to fix |
| **Different risk class** | `R3` and `C-14` are reversible tooling: delete a workflow file and the repository is unchanged. `0002` is **a one-way migration against a live provisioned database carrying seed data** |

**Bundling them makes the riskiest item inherit the cadence of the safest.** `0002` is gated on the S1 window and `Q11`, **not on the build guardrail** — lifting the guardrail would not unblock it.

### Challenge 2 — `R3`'s DoD **D-4** is unachievable today, and I specified it without checking

**Both CI gates `SPECS-VERIFICATION-APPARATUS` §4 names fail on the current commit.** Verified 2026-08-21:

| Gate | Result |
|---|---|
| `bun run typecheck` | **exit 2 — 10 errors** in `lib/supabase/middleware.ts` and `lib/supabase/server.ts`. TS7006 ×2, TS7031 ×8 — all implicit `any` on Supabase cookie handlers |
| `bun run lint` | **exit 1.** `next lint` is deprecated **and interactive** — it opens a *"How would you like to configure ESLint?"* wizard. **No ESLint config exists in the repository at all** |

**The lint failure is the worse of the two.** An interactive prompt in CI does not fail cleanly — **it hangs until the job times out**, which reads as an infrastructure fault rather than a code defect.

> **My error, and it is the house error.** `SPECS-VERIFICATION-APPARATUS` §4 lists `bun run typecheck` and `bun run lint` as CI steps. **I took the script names from `package.json` and never ran them** — specified against a summary rather than against the thing summarised. Same mechanism as `G55`, `G56`, `D-51`'s nine-commands, and `G61`'s five-rows. **Fourth instance, first one where the summary was a config file rather than a document.**

### What `TC6` turns out to be hiding

`next.config.ts` sets `ignoreBuildErrors: true`. That was recorded as a **risk**. It is not a risk — **it is an active concealment with measurable content: ten real type errors that the build has been instructed not to report.**

This strengthens the case for explicit CI gates and simultaneously **gives them a prerequisite nobody had scoped.**

### Challenge 3 — `R3` → `C-14` is a sequence, not a pair

`C-14`'s four checks are scripts **CI would run**, so CI must exist first. And DoD **D-5** — *demonstrate a broken type turns CI red* — cannot precede **D-3** and **D-4**. Writing them as *"`R3` + `C-14`"* understates a hard dependency.

### `G62` — the CI gates do not pass *(new)*

**Two remediations, neither previously scoped:**

| Part | Work | Size |
|---|---|---|
| **a** | Fix 10 implicit-`any` errors across two `lib/supabase/` files | Bounded — annotate callback parameters |
| **b** | **Decide the lint story.** Migrate to the ESLint CLI (`@next/codemod next-lint-to-eslint-cli`), or drop lint from CI and record why | **A decision, not a fix** |

**Part b is genuinely open.** `next lint` is deprecated and removed in Next.js 16, so *"keep it as is"* is not a durable option. **Recorded, not decided.**

> Note the code is **scaffolding, not project-authored** — all ten errors sit in Supabase client boilerplate. That makes the fix low-risk, and it makes the concealment worse: **the errors have been there since scaffolding and nothing has ever reported them.**

### The revised sequence

| Stage | Work | Gated on |
|---|---|---|
| **A** | `G62`a fix types · `G62`b decide lint | **Nothing** — but the guardrail covers the fix |
| **B** | `R3` install — D-1 … D-5 | **Stage A.** D-4 is unachievable before it |
| **C** | `C-14` detection checks | **Stage B** — they run in CI |
| **D** | `0002` | `Q11` **and** the S1 window. **Not the guardrail** |

**Stage D is not waiting on permission. It is waiting on a decision only the Chief Editor can make.** *(Answered 2026-08-21 by `D-68`: `Q11` is **deferred past S1**. Stage D is now gated on `Q10` and the S1 window, and on `G64` before the `0002` draft is written.)*

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 | `SPECS-VERIFICATION` |
|---|---|---|---|---|---|
| `D-65` / `G62` | ✅ | ✅ `R3` prerequisite | — *no artifact* | ✅ | ✅ §4 corrected |

### Scope limits

**Analysis only. Nothing fixed, nothing installed, no file created.** `G62` is recorded, **not resolved**; part b is a decision, not a task. Rejects a **sequencing proposal**, not any of the three items.

## 5.14aa `G63` — `merge=union` on markdown, found incidentally

**2026-08-21, outside the asked scope.** An **untracked** `.gitattributes` is present. It usefully sets `*.lockb binary`. It also sets:

```
*.md text eol=lf merge=union
```

**`merge=union` resolves a conflict by keeping *both* sides.** For prose that is merely untidy. **For this register it is corrupting:** a conflicting edit to §5.1 would produce **duplicate rows rather than a conflict** — precisely the `G39` defect that carried both *Closed* and *Open* for one ID until a duplicate scan caught it.

**It cuts directly against `D-58`.** That decision rests on the finding that conflicts here surface as **silent overwrites** because three agents edit sequentially under one identity. `merge=union` adds a second silent failure mode — **silent concatenation** — and unlike an overwrite it leaves no losing version to recover.

**Mitigating facts, stated so this is not overstated:** the file is **untracked**, so it affects only this working copy and no clone; and with **zero merge commits** in the repository history, no merge has ever run. **The exposure is latent, not active.**

**Recorded, not resolved.** Two questions belong to the repository owner: whether `.gitattributes` should be tracked at all, and whether `merge=union` should be dropped for `*.md`. **Neither is mine to decide, and neither was in scope.**

## 5.14ab `D-66` — `G62`b decided: migrate to the ESLint CLI, `next/core-web-vitals`

**Decision, 2026-08-21. Closes `G62`b.** Lint moves from `next lint` to the **ESLint CLI** with a flat config extending **`next/core-web-vitals`**.

### Dropping lint was never actually available

`G62`b was framed as *"migrate, **or** drop lint from CI and record why."* **The second option is not a config choice.**

`AC-NF-03` reads: *"A change is pushed · CI runs · **Typecheck, lint, and tests all execute and must pass.**"* Dropping lint would **contradict a recorded acceptance criterion**, which is a `Modular_PRD` tier-2 amendment — not something a CI config decides. **The governing set had already answered this; the option was illusory.**

### The measurement that dissolved the remaining question

The real fork was **which preset** — `next` (Base) or `next/core-web-vitals` (Strict). Strict catches more and therefore usually costs more remediation.

**Measured rather than assumed**, using throwaway configs outside the repository:

| Preset | Files linted | Errors | Warnings |
|---|---|---|---|
| `next` | 21 | **0** | **0** |
| `next/core-web-vitals` | 21 | **0** | **0** |

**Identical. The stricter preset costs nothing on this codebase**, so it is chosen — it is the recommended default and it catches more as the code grows.

> **A question measurement answered for free.** I was about to put Base-versus-Strict to the Chief Editor as a trade-off. **There is no trade-off today.** Worth recording as a counterweight to this project's dominant failure mode: four times a claim was derived from a summary instead of the thing. **Here the thing was checked first, and the question disappeared.**

### `G62`a and `G62`b are different kinds of work

| Part | Nature | Cost |
|---|---|---|
| `G62`a — typecheck | **Code fix.** Ten implicit-`any` errors across two `lib/supabase/` files | Real remediation |
| `G62`b — lint | **Config addition only.** Lint already passes; it has simply never been able to run | **Zero findings to fix** |

**Recorded because the two were bundled as one gap and are not one task.** `G62`b needs one file; `G62`a needs edits to product scaffolding.

### The decided configuration

**File:** `eslint.config.mjs` at the repository root — **not created here.** It is **Stage A execution** (`D-65`) and waits on the build guardrail.

**Shape, verified working against this codebase:**

```
import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
export default [
  { ignores: ["node_modules/**", ".next/**", "docs/**", ".graphify/**"] },
  ...compat.extends("next/core-web-vitals"),
];
```

**Everything it needs is already installed** — `eslint` 9.39.5, `eslint-config-next` 15.5.23, `@eslint/eslintrc` 3.3.6. **No dependency is added.**

**CI step becomes** `bun run lint` with `package.json`'s `lint` script repointed from `next lint` to `eslint .`.

### Two operational notes

1. **bun does not create `.cmd` shims.** `node_modules/.bin` holds `eslint.exe` and `eslint.bunx`. Invoke `node node_modules/eslint/bin/eslint.js` when a shim is needed and absent — the same class of finding as the bun `sh`-shim hang in `D-64`.
2. **ESLint 9 dropped the `compact` formatter** from core. Use the default or `--format json`.

### What this does not do

**Creates no file and changes no script.** `G62`a stays open — **typecheck still exits 2**, so `R3` DoD **D-4** remains unachievable. This closes the *decision*, not the gate. *(Superseded 2026-08-21 by `D-67`: typecheck now exits 0. D-4 is now blocked solely on creating `eslint.config.mjs`.)*

It also does not settle `Q6` *(re-enable `ignoreBuildErrors` and `ignoreDuringBuilds` once CI exists?)*, which stays **open** — though a working ESLint CLI in CI makes `eslint.ignoreDuringBuilds` far less load-bearing.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 | `SPECS-VERIFICATION` |
|---|---|---|---|---|---|
| `D-66` / `G62`b | ✅ | ✅ Stage A | ✅ `eslint.config.mjs` row | ✅ | ✅ §4 lint row |

### Scope limits

Closes `G62`b **as a decision**. Creates no file, installs nothing, changes no script. `G62`a remains open. `AC-NF-03` is **unchanged** — this decision keeps lint in CI rather than amending the criterion away.

## 5.14ac `D-67` — `G62`a closed: the ten type errors were two, and neither was a missing type

**Decision and fix, 2026-08-21. Closes `G62`a.** `tsc --noEmit` now **exits 0**. Build guardrail lifted by the Chief Editor for this item only, as with `G59`; reinstated on completion.

### The recorded count was symptoms, not causes

`D-65` recorded *"ten implicit-`any` errors."* **True as a compiler count, and misleading as a diagnosis** — the compiler counts binding elements, not defects. Five discriminating probes, run **inside the project**:

| Probe | Construct | Result |
|---|---|---|
| **P1** | `const p1: SetAllCookies = ...` | **Clean** |
| **P2** | `const p2: CookieMethodsServer = {...}` | **Clean** |
| **P3** | Inline object literal into `createServerClient` | **Fails — 4 errors** |
| **P4** | Pre-annotated object into `createServerClient` | **Clean** |
| **P5** | `CookieOptions` resolves to a real type | **Clean** |

**Only the inline literal fails.** The library types resolve, `@types/cookie` is installed, nothing is absent.

`createServerClient` declares **two overloads** — one for the deprecated `get`/`set`/`remove` cookie API, one for `getAll`/`setAll`. The code uses the modern API, so the first candidate cannot match, and **TypeScript declines to contextually type an object literal argument across overloads.** Ten errors, **two root causes** — one inline literal per file.

**This changes the disposition.** These were never ten defects in project-authored logic. They are scaffolding written against an overloaded signature, concealed since scaffolding by `ignoreBuildErrors` (`TC6`).

### A method error worth recording

The first probe ran in the scratchpad, **outside the repository**. Module resolution failed with `TS2307`, every type collapsed to `any`, and the probe "reproduced" the defect **for entirely the wrong reason** — it would have confirmed any hypothesis put to it. Re-running it inside the project is what made the result evidence.

> **A probe that cannot fail is not a test.** Same family as `summary_outlived_source`, one step earlier: not a summary outliving its source, but a **measurement detached from its subject**. Recorded because the invalid probe produced output that looked exactly like a successful one.

### The applied patch

**Two files, four lines** — `lib/supabase/middleware.ts` and `lib/supabase/server.ts`:

```diff
-import { createServerClient } from "@supabase/ssr";
+import { createServerClient, type CookieMethodsServer } from "@supabase/ssr";

-      },
+      } satisfies CookieMethodsServer,
```

Chosen over annotating the `cookiesToSet` parameter — both typecheck clean — for three reasons:

1. It pins the **whole object** to the library contract, so a future `getAll` error is caught too, not just this one parameter.
2. It **states which of the two cookie APIs is in use** — the precise ambiguity that caused the defect.
3. `CookieMethodsServerDeprecated` is slated for removal in the next major, so pinning to `CookieMethodsServer` is durable.

**No dependency added. No runtime change** — `satisfies` is erased at compile time. **No logic touched**: the cookie handling, the `!url || !anonKey` guard and both `catch` blocks are byte-identical.

### Verified, not assumed

| Check | Result |
|---|---|
| `tsc --noEmit` | **exit 0**, from exit 2 |
| `git diff --stat` | 2 files, **4 insertions, 4 deletions** |
| **Negative test** — destructure a field that does not exist | **`TS2339` raised**; type reported as `{ name: string; value: string; options: Partial<CookieSerializeOptions>; }` |

**The negative test is the one that matters.** A green typecheck is also what a silently-`any` parameter produces. Forcing an error proves contextual typing is **live and narrowed**. The deliberate error was reverted and exit 0 re-confirmed.

### What this does not do

**`R3` DoD D-4 is still unachievable** — but the reason has changed. Typecheck passes; `lint` still cannot run because `eslint.config.mjs` does not exist. **D-4 is now blocked on one uncreated file** (`D-66`, Stage A), not on any remediation.

**`G62` is not fully closed.** Part a is **applied**; part b is **decided but not applied**.

### It makes `Q6` cheap on one side

`Q6` *(re-enable `ignoreBuildErrors` and `ignoreDuringBuilds` once CI exists?)* stays **open**, but its cost has moved: `ignoreBuildErrors` now **conceals nothing** — there is nothing left for it to conceal. Turning it off is a one-line change with zero remediation behind it. `ignoreDuringBuilds` still waits on the config file.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 | `SPECS-VERIFICATION` |
|---|---|---|---|---|---|
| `D-67` / `G62`a | ✅ | ✅ Stage A | **— unaffected** | ✅ | ✅ §4 typecheck row |

**Inventory is unaffected and that is stated, not blank.** Both files already existed; the patch creates and retires no artifact. `eslint.config.mjs` remains marked **Stage A, not created**.

### Scope limits

Closes `G62`a only. Creates no file, installs nothing, changes no script, alters no behaviour. `G62`b, `Q6` and `R3` installation all remain open. **The build guardrail is reinstated.**

## 5.14ad `D-68` — `Q11` deferred past S1; the deferral is not neutral, and `G64` is opened

**Chief Editor decision, 2026-08-21.** `Q11` *(field naming for the independence mechanism)* is **deferred past S1**. Recorded as decided. `Q11` stays **Open** — a deferral is a scheduling choice, not a closure, and the Chief Editor decision count is unchanged.

### Deferral does not leave the field undecided

This is the finding that matters, and it was not previously recorded anywhere.

The sprint plan's **S1 migration line already names the fallback**: *"Pending confirmation, write `line_boundary_crossed` + `identity_assurance` instead (`A21`)."* That line is the **instrument an executor actually reads.**

**So deferring `Q11` does not defer the field — it selects the boolean shape by default, with no decision recorded against it.** The sprint plan's own standing constraint (§11) exists for exactly this: *a finding is not routed until it appears in an instrument that is executed against.* Here the reverse holds — **an unrouted decision is being executed by default.**

### The shape that gets selected by default carries a defect

`Q11`'s row concedes **one** conflict with `NFR-03` — it forbids the null `judgment_independence` the rename reserves, so it *"needs its own rewrite, not a passthrough."*

`NFR-03` reads *"never null, **never inferred at read**."* **The second clause is violated too, and nothing records it:**

| Source | What it requires |
|---|---|
| `FR-05` behaviour | **Three** states — `satisfied` (L1↔L2 crossed), `not_applicable` (within a Line), `override_not_four_eyes` (outside the target Line) |
| `AC-07`, already drafted in the new vocabulary | `line_boundary_crossed = true` — **a boolean** |
| `G-02` metric | *"T5/T6 crossings without Line separation, **excluding logged overrides**"* — needs **two distinct false-states** |

**A boolean has one false-state.** Recovering `override_not_four_eyes` means reading `event_type = HumanOverride` alongside it — **inference at read**, which `NFR-03` forbids and which `G-02` would depend on. Three states cannot be stored in a boolean and then honestly reported as not-inferred.

> **Restated 2026-08-21 by `D-69` — the inference limb is withdrawn.** *"Inferred at read"* is **undefined across the corpus**, and `NFR-03`'s measured target is *"100% non-null"*, which a boolean meets. **The surviving defect is narrower and needs no interpretation:** `G-02` cannot be computed from its own declared **single-column** Data Source. See §5.14ae.

**Carried forward as `G64`**, so the deferral does not also defer the finding.

### What the deferral actually costs today: nothing in schedule terms

`G16` couples `Q10` and `Q11` as **one migration**. `Q10` *(tool versus product — whether S1 needs a tenancy column)* is **independently open**.

| | Before this decision | After |
|---|---|---|
| `0002` blocked on | `Q10` **and** `Q11` | `Q10` |

**`0002` was already blocked by `Q10` alone, so deferring `Q11` delays nothing.** Recorded because the cost of this deferral is easy to overstate — and because it means the reopened window is real, not theoretical.

### The window closes at an event, not a date

`supabase/migrations/` contains **only `0001_init.sql`**. `0002` is unwritten, and `G27` holds its draft outside the apply path at `docs/v1/drafts/` until the S1 window settles.

**Irreversibility begins when the draft is written, not when S1 opens** — that is the first moment a field name is committed to text an executor will apply. `G64` must therefore resolve **before the S0 draft**, which is earlier than `Q11`'s own row implies.

### Verified, not assumed

| Claim | Evidence |
|---|---|
| Four-eyes is unevaluable today | `workflow_transitions` has **9 columns** — no `line_assignment`, no independence field, no `actor_id`, no `event_type`. Confirms `X5` |
| `identity_assurance` is load-bearing, not scope creep | v1 is **demo-first with no login wall**, and `TC1` has the anon key public — so **every v1 actor identity is self-asserted.** `NFR-02` makes the table append-only, so pre-auth rows can never be re-marked; inferring them by timestamp would be inference-at-read again |
| The rename is already half-applied | `AC-07` and `AC-08` **already carry the new vocabulary**, marked `[Q11]` pending. This is smaller than a fresh rename |
| `0002` is unwritten | `supabase/migrations/` lists `0001_init.sql` only |

### On the name, if `G64` is later resolved toward an enum

Not decided here, recorded so the work is not redone: `G-02` already uses the phrase *"without **Line separation**."* If the field holds three states, `line_boundary_crossed` is a boolean's name carrying an enum, and `not_applicable` reads as nonsense against *"crossed."* **`line_separation` is the vocabulary these documents already use.**

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8/§10 | Sprint plan |
|---|---|---|---|---|---|
| `D-68` / `Q11` deferred | ✅ | ✅ Stage D | **— unaffected** | ✅ | ✅ S1 migration line |
| `G64` opened | ✅ §5.1 | ✅ | **— unaffected** | ✅ | ✅ |

**Inventory is unaffected and that is stated, not blank.** No artifact is created, retired or resequenced; `0002` keeps its existing **S0 draft, S1 apply** row.

**The sprint plan is propagated to despite being non-authoritative under `D5`**, because its S1 migration line is where the default fallback is instructed. A warning that does not reach the executed instrument is the defect its own §11 names.

### Scope limits

Records a deferral and opens `G64`. **Decides no field name, no field shape, and no enum values.** Closes nothing: `Q11`, `Q10`, `G16`, `X5` and `X4` all remain open. Authorizes no migration, no schema, no code. `0001_init.sql` untouched.

## 5.14ae `D-69` — `G64` specified: one limb dissolves, the other gets sharper

**Specification, 2026-08-21. `G64` → specified, not applied** (`D-56` disposition). **Decides no field name and no field shape** — `D-68` deferred that one pass ago, and deciding here would reverse it unasked.

### The correction: I overstated `G64` when I opened it

As recorded, `G64` rested on **two** limbs. **Only one survives inspection.**

**The limb that dissolves — *"`NFR-03` forbids inference at read."***

| Test | Result |
|---|---|
| Is *"inferred at read"* defined anywhere in the corpus? | **No.** Five occurrences across all of `docs/` — `FR-05`'s Outputs line, `NFR-03`, the sprint plan's `Q11` row, a changelog, and my own `G64` text. **Zero definitions** |
| What does `NFR-03` actually *measure*? | Target **"100% non-null"**, Method **"column constraint."** A boolean satisfies both |
| Do these documents treat reading a stored column as inference? | **No.** `G-03` computes its metric directly as `event_type = HumanOverride` ÷ all transitions |

**I asserted a violation of an undefined term, against a requirement whose measurable target the boolean actually meets.** That is this project's dominant failure mode pointed the other way: not a summary outliving its source, but **a conflict asserted past what the source says**.

> `CLAUDE.md` carries the standing rule — *"Before recording any incompatibility, check what the unfamiliar label maps to."* Three prior conflicts were vocabulary, not structure. **This is the fourth, and it was mine.**

### The limb that stands, and no longer needs interpreting

**`G-02` cannot be computed from its own declared Data Source.**

| Field | Value |
|---|---|
| `G-02` Definition | *"T5/T6 crossings without Line separation, **excluding logged overrides**"* |
| `G-02` Data Source | `judgment_independence_status` — *"**becomes `line_boundary_crossed` if the rename is confirmed**"*. **One column** |
| `FR-05` states | `satisfied` · `not_applicable` · `override_not_four_eyes`. **Three** |
| A boolean | **Two** values. `not_applicable` and `override_not_four_eyes` both map to `false` |

**Excluding logged overrides requires telling those two apart. The declared single column cannot.** `G-02` would need a second column its own Data Source does not name.

**This holds regardless of what *"inferred at read"* means.** It is arithmetic on the declared columns, not an interpretation.

### `C-33` — the S1 trigger has a static contract test, not a database-executed one

**Opened by `D-118`, 2026-08-25, raised by Lane B as `B-044` against its own work.** 
`__tests__/s1-schema.test.ts` **asserts on migration TEXT**. It never starts PostgreSQL, applies
`0001` then `0002`, invokes the trigger, or observes a rollback. **A text assertion stays green
while the SQL is syntactically invalid** — `probe_that_cannot_fail`, in the one place the
product's core sequence invariant lives.

> **Two different unverified things, held apart for the first time.** `DEP-05` withholds Supabase
> credentials, so **live anon-key behaviour may remain unverified**. A **local or branch PostgreSQL**
> unit test needs no credentials and is **still required**. The governed DoD distinguished them and
> nothing in the corpus had.

**So the S1 DoD phrase *"trigger written and unit-tested"* is NOT earned and is not recorded.**
§5's Lane B row carries the narrow claim. **`B-044`'s eight-case list is the adopted test
contract**: valid `Logged → Validated` with exactly one preceding transition; `Logged → Drafted`
rejected; a state change with no transition rejected; agent execution of T5 rejected; a concurrent
duplicate rolled back with no orphan transition; UPDATE and DELETE rejected on every
insert/read-only table; approval without an eager target rejected; and publication without a
same-transaction live publication event rejected.

**Closes when a disposable PostgreSQL runs `0001` then `0002` and those eight behave**, with the
report reading *"local PostgreSQL unit-tested; live Supabase anon-key behaviour unverified"*.
**Lane B's surface, Lane B's work** — and it may need a dependency, which is Lane A's to provision
(`D-86`).

### `C-32` — the Project Scope retention and archival policy is **owed**

**Opened by `D-116`, 2026-08-25. Owner: the business.** Retention and archival are **Project Scope
obligations with no CR**, so they sit at the **highest record** and their detail sits below it:

| Document | Owes |
|---|---|
| **Alpha Portfolio plan** — Tier 1, `D-74`, above `Modular_PRD` | The obligation itself: that retention and archival are governed, and by whom |
| `docs/source/business-case.md` §Compliance & Governance Disclosures | The policy detail |
| `docs/source/blueprint.md` `A6` | Reconciliation of the 90-day archival row with the policy |

**Five open items point at it and none can close before it exists:** `NFR-02`'s re-anchored floor ·
`AC-12a`'s *"policy and version"* · `G40`'s unbounded `NFR-08` promise · `G88`'s supplied fact ·
`G41`'s explainable absence.

> **Deliberately not written by Lane A.** These are the governing source set above `Modular_PRD`.
> **An owed entry with a named home is trackable; a source document edited on Lane A's own
> initiative is the product tier legislating upward.**

### `C-34` — **CLOSED 2026-08-25 (`D-131`)** — trigger-identity legitimacy ruled by the Chief Editor

**Opened by `D-130`, 2026-08-25. Owner: the business/Chief Editor.** Carried `G99` — sized to the
one question it actually was, not `C-32`'s policy-framework shape. **Answered in full one turn
later.**

**Three questions, ruled:**

1. **Which channels may originate a trigger?** **Three, named**: Chief Editor manual submission ·
   POC payment · **trend/fade-analysis-informed drafting** — an analytical process that surfaces a
   fading or trending topic and drafts a similar brief, itself entered through the manual-trigger
   channel. **This is the closed set for v1.**
2. **Does the originating channel affect the reuse-eligibility guard?** **No — uniform treatment.**
   All three channels are subject to the same `REUSE-WINDOW-90` clock; none bypasses it. The clock
   itself is **business-amendable** via the `C-13` BCP dashboard surface (`D-127` row 1), not fixed
   by channel.
3. **Is a different submitter triggering the same topic within the window legitimate, or does it
   need detection?** **Legitimate — no detection is built.** The business does not prevent a
   different POC account paying for research on another day. **One standing note**: keep each
   originating channel's day-count and record **separate** — a Chief-Editor-triggered brief and a
   POC-triggered brief on the same underlying topic are **never merged into one shared clock or one
   shared record**, even where both are legitimate.

> **Confirms `D-121`'s existing model rather than changing it.** `AC-02`'s key is already
> **submitter + brief hash + same day** (`D-121`) — a different submitter or a different day already
> produces a different key under that model, so ruling 3's *"never merged"* instruction is the
> Chief Editor's own architecture restated, not a new requirement Lane A must design. Ruling 1 adds
> a third named channel to the set `D-121`/`G96` already tracked (Chief Editor, POC); ruling 2 rules
> out a channel-based exception that had not yet been foreclosed.

**`G99` closes with it.** `G95` and `G96` are **unblocked, not answered** — the third channel and
the *"never merged"* instruction are new inputs to their own remaining questions (the hash's field
list; whether a submitter column must also distinguish channel), carried forward rather than
resolved in this pass.

### `C-31` — **CLOSED 2026-08-25 (`D-116`) — by RE-TIERING, not by being answered.** q1 was never a product question: retention is Project Scope with no CR, owned at the Alpha Portfolio record. q2 and q3 stand answered by `D-115`. Content moves to `C-32`. §5.14bw

### `C-31` (as opened) — 5a: does retention on `articles` vary by final status? **Non-blocking**

**Opened by `D-114`, 2026-08-25. Phase: 1.** `Modular_PRD` §6.3 says *"rejected and archived after
`DATA_RETENTION_ARCHIVE_DAYS`; published kept indefinitely"* — **a per-row rule.** The audit model
§5.1 says that contradicts *"traceable regardless of final status"*, because *"an auditor's first
question is usually about what was rejected, not what sailed through."*

**It does not block `0002`, and the reason is demonstrated, not asserted:** `articles` is mutable by
design and carries its own state, so its retention class is derivable from the row at any later
date. **No append-only table in `0002` has status-varying retention.** The un-backfillable argument
belongs to `G46`'s POC payment status, on a table this migration does not create.

**NARROWED TO ONE QUESTION by `D-115`, 2026-08-25.** Two of the three are answered — see §5.14bv:

| | |
|---|---|
| **q1 — does the statutory 5-year floor reach editorial-flow data at all?** | ⛔ **OPEN.** `D-42` assigns editorial flow *"Statutory and GRC"*; audit Step 6 scopes that floor to *"financial and accounting records"*, and **editorial flow is not one** |
| **q2 — does GRC retention get a terminus?** | ✅ **Ruled `D-115`: archival.** GRC binds data while it is in the **current set**; an archived article cannot be retracted through the publication flow, because retraction and amendment are acts on current work |
| **q3 — does either answer change `0002`?** | ✅ **Demonstrated no.** **Archival and disposal are EXTERNAL** — operations on the database substrate, not product behaviour. The acts q1 governs are not in this product's surface at all, the same shape as `AC-12` (`D-39`) |

**The premise this condition was opened on turned out to be wrong, and it was still worth opening.**
`C-31` assumed §6.3's status-varying sentence was a defect. `D-115` shows it is **the correct
expression of two regimes with different reach** — rejected work never publishes so GRC never
attaches; published work stays current so retraction stays possible. **The reasoning that dissolves
it did not exist until the cross-reference was performed.**

**Carries `G40`** on q1, which it inherits and does not resolve.

### `C-30` — **CLOSED 2026-08-25 (`D-114`)** — item 4 ruled in full; item 5's classification ruled, its floor deferred with a named owner, 5a carried as `C-31`. §5.14bu

### `C-30` (as opened) — the S1 window has two unruled items, and `0002`'s authorization rests on them

**Opened by `D-113`, 2026-08-25. Phase: 1, then `0002`.** `D-112` released `D-17`'s hold on the
stated ground that *"every S1 window decision is settled"*. **Build Spec §S1 items 4 and 5 were
never put to the Judge:**

| | Unruled | Carried by |
|---|---|---|
| **4** | Which tables become **insert/read-only**, including publication records and the physical enforcement of report immutability | `GA2`'s open half, `C-11` |
| **5** | The **retention floor** and per-table retention classification | audit Step 9, with `C-12` beside it |

**The authorization is PROVISIONAL, not withdrawn.** `D-112`'s typed schema contract stands and
every field in it was properly ruled. **Lane B is not selected and no `0002_*.sql` is written**
until the Judge rules these two or explicitly removes them from `0002`'s scope with a named later
owner.

> **The two do not carry the same deferral risk.** A later `REVOKE` touches no data. **A retention
> class cannot be backfilled onto rows already written** — there is no authority to invent the class
> of a record that already exists. Deferring item 5 defers it *with data loss already implied*, and
> `C-12` follows it for the same reason: a non-performance row absent at insert time cannot be
> reconstructed, which is `G41` exactly.

### `C-29` — **CLOSED 2026-08-25 (`D-112`)** — the domain is decided: three values, asymmetric authority, manual in v1, four typed provenance fields. §5.14bs

### `C-29` (as opened) — `G20`'s residual: a typed column with an undefined domain

**Opened by `D-111`. Phase: 1, then `0002`.** `articles.risk_tier` is approved as a typed column that is never a lifecycle state and never silently recomputed. **Its DOMAIN is undecided** — the tier vocabulary, who may assign or change a tier, whether a rule proposes while the Chief Editor confirms, and the provenance needed to reconstruct an assigned value.

**A column whose type is settled and whose domain is not is a text field with a hopeful name.** `SEC-05` — pre-publication legal review for high-sensitivity content — **cannot trigger without a vocabulary to trigger on**, and `FR-11` and `B-P0-06` depend on the same dimension.

**`0002` may not be authorized while this is open.** It is the last item in the S1 window.



**Opened by `D-105`. Phase: 2.** `D-75` requires a handoff at every lane boundary. Lane B held `Active` for the whole of `D-103` and left **no commits and no artifact** — and `LANE-B-WORK-ORDER.md` §5 had told it to raise nothing.

**It cannot be produced retroactively**, so this is carried rather than closed. The instruction is repaired: §5 now requires a turn report **especially when nothing was done**.

**Closes when the next Lane B turn ends with a report.** If Lane B never runs again, **`C-28` is the record that a turn was granted and nothing came back** — which is the fact worth keeping.

**CLOSED 2026-08-25 (`D-123`, raised as `B-052`).** `B-047` is that report, filed at the boundary `D-118` performed. The historical fact is unchanged and restated, not replaced: `D-103`'s turn produced no handover, and no `D-103` report was created retroactively. What closed is the forward condition — a later turn did come back. See §5.14cd.

### `C-27` — the Sprint boundary is becoming a per-task toggle

**Opened by `D-104`. Phase: the operating model.** Two boundaries were declared in one day and the first produced no commits. **The mechanism is being used to switch who may edit, rather than to mark a cycle.**

**Watch, do not gate.** A check enforcing a minimum cycle length would fire on the legitimate short cycle, which is the property that makes a control get ignored (`D-83`). **The Chief Editor owns the cadence** and `D-100` explicitly permits short ones.

**What to look for:** a boundary declared to unblock a single edit, repeatedly. **A handover that costs nothing is a handover that stops meaning anything**, and the vocabulary — `Active`, Sprint, boundary — quietly stops describing the thing it names.

### `C-26` — every `Applied` entry awaits its raiser, and Phase 1's condition 2 needs them `Verified`

**Opened by `D-102`. Phase: Phase 1 closure.** `Applied` means the fix is in the tree at a named
commit and **nobody independent has confirmed it**. It is deliberately **non-terminal**, so
condition 2 is **not met** for as long as any entry raised against Phase 1 still carries it.

**The natural verifier is Lane B**, which raised every one of them and has already demonstrated
the capability — `B-013` is a verification pass that **rejected** the claims it examined, which is
the only kind of verification worth having.

**Not solvable by Lane A.** A resolution written and verified by the same side is what `B-013`
item 4 reports; **Lane A marking its own entries `Verified` would be that defect performed
deliberately.**

> **The tally is removed, not corrected — `G100`, 2026-08-26 (`D-136`), raised as `B-057`.** This
> condition read *“ten entries”* from `D-102` onward, while `closure-readiness` has always gated
> **every entry raised against the closing phase** — a set that grows with each correction Lane A
> applies, and one that parted from `D-102`'s ten long ago. **`G75` forbids the obvious repair**: a
> corrected number drifts at the next entry, exactly as four documents' check counts did. **The scope
> is stated as a rule; the figure is printed by the check on every run.** `D-102`'s own record keeps
> *“ten”* untouched — an answer is an append-only statement of what was true when it was written.

### `C-25` — the live-ruleset evidence is held outside the repository

**Opened by `D-102`, raised as `B-016` child 3. Phase: Lane C, Phase 3.** `C-001` reports the
live `main` ruleset as dormant, citing `live.json` and screenshots. **The Judge confirms Lane C
performed the verification, so the claim is authoritative** — and **no such evidence exists in the
repository**, so a later reader cannot reproduce it.

**This matters because `D-89` has the same shape.** `B-015` observes that `D-89` was *"asserted,
never verified"*; accepting `C-001` on the same footing would repeat the pattern one level up.

**Fix:** record date, actor, repository, branch target, **exact** required context, expected
GitHub App source, and durable evidence from a protected test PR — then `D-89` is restored or
retired **on evidence**, not on memory.

### `C-24` — the compatibility `verify` job cannot prove verification

**Opened by `D-102`, raised as `B-016` child 4. Phase: Lane C, Phase 3.** `.github/workflows/ci.yml`
declares `compatibility_verify` with `name: verify`, `needs: verify`, and a single `echo` step.

**`needs:` without `if:` means the job is SKIPPED — not failed — when the job it depends on
fails.** It does not run and it echoes nothing. **GitHub accepts a skipped context for a required
check.** So the `verify` context can report acceptably while typecheck, lint, tests and
`bun run check` have **not** passed.

**What this condition blocks is the SETTINGS act, not the commit.** The file is committed on the
Judge's ruling; **`verify` must not be made a required context until the job's result mirrors the
real one.**

**Fix, specified and not applied (`D-56` — `.github/workflows/` is Lane C's):** an unconditional
reporting step — `if: always()` — that **fails unless `needs.verify.result == 'success'`**. An
echo-only job is insufficient by construction.

### `C-23` — **CLOSED 2026-08-22 (`D-97`), exactly as written**

**The row is corrected, in the same pass the Judge picked a shape.** Both stale claims struck: the
withdrawn *"inference at read"* limb (`D-69`), and *"`0002` remains blocked by `Q10`"* after `Q10`
was decided (`D-73`, `D-79`). **Lane A left them standing for a full cycle on purpose** —
rewriting an open decision request is answering it by edit — and that restraint is what made the
correction safe rather than pre-emptive. *The condition as opened is retained below.*

### `C-23` (as opened) — the `Modular_PRD` `Q11` row is stale and Lane A must not fix it

**Opened by `D-95`, raised as `B-009`. Phase: with the `Q11` decision.** The `Modular_PRD` `Q11`
row retains the **withdrawn `NFR-03` inference limb** (`D-69` withdrew it) and **still names
`Q10` as a blocker** after `Q10` was decided (`D-73`, narrowed `D-79`).

**Both are genuinely stale, and Lane A is still not correcting them.** The row states a *decision
request*. Rewriting what a decision request says — while the decision is open — is **Lane A
answering `Q11` by edit**, which is the failure `D-58` and the intent hierarchy exist to prevent.

**Fix:** the Chief Editor selects a `Q11` field shape, or explicitly defers the whole `0002`/S1
window. **Lane A then updates the owning `Modular_PRD` row in the same pass** and propagates the
sequence under `D-54`. Until then the staleness is **recorded here, visible, and untouched.**

### `C-22` — the manifest's completeness is unverifiable by construction

**Opened by `D-94`. Phase: every phase boundary.** `phase-manifest` proves every listed path
exists. **Nothing proves the list is complete** — completeness is a judgment about what a phase
was chartered to produce, and no check can hold it.

**This is not a defect to fix; it is the boundary of what detection can do**, and it is the same
boundary `F5` records for the apparatus as a whole: **every check verifies arrival, none verifies
correctness.** Stated so that a green check 11 is never read as *"the manifest is right."*

**The control is the Judge**, which is why the role exists (`D-93`) and why its first exercise
found precisely this class of gap (`F7`).

### `C-21` — `G75` removed one tally and did not sweep for others

**Opened by `D-93` as critic-pass finding `F6`. Phase: next Lane A pass.** The shared core states
*"bun and its **413** pinned packages"*. Removing `stripe` under `B-003` **happened not to change
that number** — luck, not design. **A routine dependency change can invalidate a literal in the
file every agent reads first, and nothing detects it.**

**Fix:** sweep the governed set for remaining numeric literals that describe a mutable state, and
either remove them on `G75`'s pattern — state the rule, not the count — or bind each to a check.
**Removal is preferred**; a check over a tally is a check that must be maintained in step with
the thing it counts.

### `C-20` — **WITHDRAWN 2026-08-22 (`D-100`)**

**Not deferred — withdrawn.** Deferral implies it becomes correct later. It does not.

**`C-20` was to enforce that lanes act strictly one phase at a time.** The Judge has ruled the
operating model is **Scrum, not a stage gate**: Lanes A, B and C run a **continuous cycle**, and
feedback against running work is a **backlog item**, not a serialization violation. **A check
enforcing strict phase order would fire on the normal case** — the property that makes a control
get ignored, recorded twice already (`D-83`, `D-90`).

**A control that enforces the opposite of how the project works is worse than a missing one.**

**What survives from `F4`, the finding that opened it.** The observation — *nothing records phase
state in a form a check can read* — is now **satisfied by `V1-PHASE-CLOSURE.md` §5 plus check
10's status field**, which together answer the only question the corrected model asks: **has
feedback raised against a lane's specs reached a disposition?**

**What stays unenforced on purpose:** nothing prevents a lane working before permission is
recorded. **`43c51ce` is the single instance**, and the remedy is a backlog entry, not a control.

*The condition as opened is retained below.*

### `C-20` (as opened) — phase order is required and unenforced

**Opened by `D-93` as critic-pass finding `F4`. Phase: before Phase 2 closes.** `D-75` requires
the lanes to run **sequentially, one at a time**, and **Phase 2 began while Phase 1 was open.**
Nothing detected it, because nothing records phase state in a form a check can read — and until
`V1-PHASE-CLOSURE.md` existed, nothing recorded it at all.

**This is `D-82` in the phase dimension rather than the surface dimension.** `lane-boundary`
detects a commit spanning two surfaces; **no control detects a phase spanning two lanes in time.**

**Fix:** make §5's phase register machine-readable and compare the committing lane against the
open phase. **Deliberately not built now** — with one phase open and its register a day old, the
check would have a single row to read and no closed phase to contradict.

### `C-19` — `Reopens-Phase:` is unenforced until a phase closes

**Opened by `D-93`. Phase: the pass that closes the first phase.** The return-path field is
recorded in the template and the README and **no check reads it.** With no phase closed, a check
would pass on every run without reading anything — a `probe_that_cannot_fail`, the same reasoning
that deferred `C-17`.

**Fix:** when the first phase closes, extend check 10 — an entry naming a closed phase must be
`Open` or `Answered`, and that phase's §5 row must read **Reopened**. **Install it in the same
pass that closes the phase, never before.**

### `C-18` — the CI job rename needs a paired act no lane owns

**Opened by `D-92`. Phase: Lane C, Phase 3. Failure direction CORRECTED by `D-102`, raised as `B-015`.** The CI job is named `Typecheck · Lint · Test` with **U+00B7 MIDDLE DOT** separators, and GitHub matches a required status check by that exact string. If the protection rule names any other character sequence, **the required context never reports, stays pending, and BLOCKS THE MERGE.**

> **The original text said the opposite** — *"protection is configured and never gates"*, the `D-81` fail-**open** pattern — and a later edit appended *"fail-closed (blocks merge)"* to the same sentence, leaving it asserting **both directions for one mechanism**. **`B-015` is right and GitHub's documentation is unambiguous: a required check that never reports blocks the merge.** The business consequence is preserved — **delivery stops** — but it stops *visibly*, which is the safe direction.

**A far larger question now sits above this one.** `C-001` reports that the live ruleset targets **no branches** and carries **no `required_status_checks` rule at all**. **If that holds, `C-18` is a child task**: renaming a required context inside a rule that gates nothing changes nothing. See **`C-25`** and §5.14bj.

**The rename and the branch-protection rule must change together.** Rename first and the required check never reports, so **every pull request blocks indefinitely** — failing *closed*, which is the safe direction, and still a stoppage.

**The protection rule is a repository-settings act, and no lane owns it.** `D-89` set the current one by hand. **Lane C raises a `blocked-on-decision` handoff entry naming both exact strings and waits for confirmation before pushing the rename.** Specified, not applied (`D-56`).

### `C-17` — `CONFIG_LOG.md` and `build-config.ts` are uncoupled

**Opened by `D-91`. Phase: S0.** Lane A owns every row of `docs/CONFIG_LOG.md`; Lane B owns `lib/config/build-config.ts`. **Nothing pairs them**, so a variable can be added to one and missed in the other with all checks green — and the split ownership `D-91` introduced is exactly what makes the drift silent rather than obvious to one author.

**Fix:** a `C-14` check comparing the two in **both directions** — a `CONFIG_LOG.md` row with no declaration, and a declaration with no row. The bidirectional shape is `decision-status`'s (`G65`, `G71`), and it matters for the same reason: a one-way check licenses the other direction.

**Deliberately not built by `D-91`.** `build-config.ts` does not exist, so the check would pass on every run without ever reading a variable — a `probe_that_cannot_fail`. **It must land in the same pass as `build-config.ts`**, never before.

### `C-16` — **CLOSED 2026-08-25 (`D-112`)** — `NFR-03` rewritten. The undefined clause was **dropped, not defined**: `D-69` found it measured by nothing, and an unfalsifiable requirement can be neither satisfied nor breached. §5.14bs

### `C-16` (as opened) — condition on the `Q11` decision

**`NFR-03` is already slated for rewrite** — `Q11`'s row says it *"needs its own rewrite, not a passthrough."* **That rewrite must either define *"inferred at read"* or drop the clause.**

An undefined term in a governing requirement is not harmless: it is unfalsifiable, so it can neither be satisfied nor breached, and it invites exactly the overreach recorded above. **Follow-up phase: the `Q11` decision, before the S0 `0002` draft.**

### The two shapes, specified — not chosen

| | **Shape 1 — three-valued enum** | **Shape 2 — boolean + `event_type`** |
|---|---|---|
| Column | `line_separation`: `crossed` \| `not_applicable` \| `override` | `line_boundary_crossed` boolean |
| `G-02` computable from its declared Data Source? | **Yes — one column, exactly as declared** | **No — needs a Data Source amendment naming two** |
| `FR-05`'s three-state classification stored? | **Yes, as a fact** | **Nowhere** — it becomes a derived view |
| `Modular_PRD` amendments required | `NFR-03` rewrite *(already required)* | `NFR-03` rewrite **plus** `G-02` Data Source |
| Name matches the documents' own words | `G-02` already says *"without **Line separation**"* | `not_applicable` reads as nonsense against *"crossed"* |

**Shape 1 is the lower-amendment option and the one already spoken in the documents' vocabulary.** Recorded as the specification's recommendation; **the choice belongs to `Q11`**, where `D-68` left it.

### Why this is specified and not decided

The Chief Editor deferred `Q11` one pass ago (`D-68`). `G64`'s resolution *is* a shape choice, and a shape choice is `Q11`'s substance. **Specifying removes the defect from the critical path without reversing a decision that was just made** — the same disposition `R3` carries under `D-56` and `X4` under `D-61`.

### An ID check that caught itself

A first scan reported `C-20` and `C-21` as taken, which would have pushed this condition to `C-22` and left a false gap in the series. **Both were substring matches inside `AC-20` and `AC-21`.** The condition series genuinely tops out at `C-15`, so `C-16` is correct.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` | Sprint plan |
|---|---|---|---|---|---|
| `D-69` / `G64` specified | ✅ | ✅ | **— unaffected** | ✅ `G-02` + `NFR-03` notes | ✅ correction |
| `C-16` opened | ✅ | ✅ | **— unaffected** | ✅ `NFR-03` | — |

**Inventory is unaffected and that is stated, not blank.** No artifact is created, retired or resequenced.

**The sprint plan is corrected, not merely appended to.** The warning written into its S1 migration line one pass ago carried the overstated limb, and an overstatement in the instrument an executor reads is worse than none — it invites the whole warning to be dismissed once the overreach is spotted.

### Scope limits

Specifies `G64` and opens `C-16`. **Chooses no shape, no field name, no enum values.** Amends no `Modular_PRD` requirement text — the `G-02` and `NFR-03` edits are **disclosure notes**, not restatements. `Q11`, `Q10`, `G16`, `X4` and `X5` all remain open. `0001_init.sql` untouched; `0002` unwritten.

## 5.14af `D-70` — Stages A, B and C installed; Stage D recorded as blocked

**Execution, 2026-08-21.** Build guardrail lifted by the Chief Editor for **Stages A, B and C only**; reinstated on completion. **Stage D was requested and is not completable** — see below.

This executes the sequence `D-65` set out. **The verification apparatus is no longer specified-not-installed.**

### What now exists

| Stage | Artifact | Gate result |
|---|---|---|
| **A** | `eslint.config.mjs`, `lint` → `eslint .` | **27 files, 0 errors, 0 warnings** |
| **B** | `__tests__/smoke.test.ts`, `"test": "bun test"`, `.github/workflows/ci.yml` | **1 test passing; CI green on a real run** |
| **C** | `scripts/check-consistency.mjs` + four checks, wired as `bun run check` | **3 pass in CI, 1 local-only** |

**`R3` DoD — all six satisfied.** D-1 smoke test passes · D-2 `bun test` present · D-3 CI runs typecheck, lint and test as **separate** steps · **D-4 CI green on a real run** · **D-5 demonstrated** · D-6 `G59` closed by `D-64`.

### `C-14` is installed in CI for three checks and local for the fourth

**Stated because "detection is installed" would otherwise overclaim.**

| Check | Runs in CI |
|---|---|
| Shared-core hash across the three agent rule files | **Yes** |
| `D-54` tier sweep | **Yes** |
| §5.1 duplicate-ID scan | **Yes** |
| Graph coverage | **No — local only** |

The fourth reads `.graphify/graph.json`, which is **gitignored**, so its input does not exist on a fresh clone. **Structural, not a defect:** the graph is a build artifact whose **curated layer is not rebuildable from `docs/`** — it merges only from `docs/graph-fragments/` (`G51`). It now reports **SKIP with the reason**, and the runner counts skips separately: *"3/3 passed (1 skipped)"*, **never "4/4 passed."** A check that never ran must not be counted as one that passed.

### The tier sweep caught a real defect on its first strict run, and it was mine

`D-65` was marked ✅ propagated to the build spec. **It was absent.** Commit `8b03b7a` — the `D-67` pass, two commits earlier — replaced the only sentence citing it. **A tier claim that was true when written had silently stopped being true.**

**That is exactly the `G58` shape `C-14` exists to catch**, and it was caught by the check rather than by anyone noticing. Citation restored.

> The register's own words on why this matters: *"`G32`, `G53` and `G58` were each found by a human noticing — twice by the Chief Editor challenging a completion claim. That is not a control; it is luck with a good record."* **This is the first defect of that family found by a control.**

### The check was too weak until a negative test broke it

The first tier sweep accepted **any** ID from a row's Item cell. Deliberately breaking `D-66`'s inventory reference **did not fail it** — the row also names `G62`, and `G62` was still present. **A gap reference was masking a decision that never propagated.**

`D-54` requires the **decision** to be traceable, so when a row names a `D-NN` that ID is now required specifically. Re-broken and confirmed failing.

> **A check that cannot fail is not a control** — the same finding as `D-67`'s invalid probe, one layer up. Both passed convincingly while testing nothing.

### Three corrections to `R3`'s own specification

| § | Said | Correction |
|---|---|---|
| §2 | *"Nothing is added to `devDependencies`"* | **`@types/bun` is required.** True for the **runner** — bun's is built into the runtime — but not for its **type declarations**. Both `import ... from "bun:test"` and bun's injected globals leave `tsc` unable to resolve the symbols, so typecheck fails and CI goes red. §2 was written **before anything typechecked `__tests__/`**. Types-only, no runtime, so the section's actual claim — that `R3` costs a script entry rather than a toolchain — still holds |
| §4 | `bun install` | **`bun install --frozen-lockfile`.** `D-64` committed `bun.lockb` to pin the dependency set; a plain install may resolve past the lockfile and quietly defeat the pin `G59` was closed to establish |
| `D-66` | *"0 errors, 0 warnings"* | **Measured before the config file existed**, so the file was not in its own lint set. On creation it warned on itself (`import/no-anonymous-default-export`). Named the exported array; **0 warnings again, now including itself** |

**The third is the smallest and the most characteristic: installing the thing changed the thing being measured.**

### Stage D — requested, not completable

**No migration was written. `0001_init.sql` is untouched and `supabase/migrations/` still holds it alone.**

`D-17` holds the `0002` draft **outside** `supabase/migrations/` *"until every S1 window decision is settled."* Verified against live §5.1 rows rather than restated:

| Blocker | Verified state |
|---|---|
| `Q10` — tool versus product, tenancy column | **Decided (`D-73`), narrowed (`D-79`)** — `0002` carries a tenancy column to preserve the option; `NG-02` stands. **This row read `Open` until `D-109`**, which is why the S1 window looked one decision larger than it is |
| `Q11` — the field **shape** | **Decided 2026-08-22 (`D-97`)** — three-value status, not a boolean. `G64`'s surviving limb answered |
| `Q11` — the field **name** | ✅ **Decided `D-111`** — `line_separation_status`. Row corrected `D-113`; it read `Open` for a day after `D-111` ruled it |
| `G64` — the field **shape** | **Specified, not applied** (`D-69`) — the choice is `Q11`'s |
| `G17`, `G19` | **Decided `D-110`** |
| `G57`, `GA9` | **No decision remains** — `D-55` supplies the total backfill map, `D-07` selects `on delete restrict`; both are implementation |
| `G16`, `G42`, `GA1`/`GA3`/`GA4` | **Decided `D-111`** |
| `G20` | ✅ **Decided `D-112`** — three-value vocabulary, asymmetric authority, manual in v1, four typed provenance fields |
| Build Spec S1 item **4** — which tables become insert/read-only | ✅ **Ruled `D-114`** — publications and the report record insert/read-only, enforced by `REVOKE` **and** a trigger. `C-11` and `GA2` both closed |
| Build Spec S1 item **5** — retention floor and table classification | ✅ **Disposed `D-114`** — §5.3's classification **adopted**; the floor **deferred with a named owner** and `DATA_RETENTION_ARCHIVE_DAYS = 90` **not ratified**; **5a carried as `C-31`, non-blocking** |
| `GA2` | ✅ **Closed `D-114`** — both halves |
| `C-11`, `C-12` | ✅ **Closed `D-114`** — append-only events, and eager target rows at approval |
| **The S1 window** | ✅ **CLOSED 2026-08-25 (`D-114`).** `D-112` had recorded it closed with items 4 and 5 never put to the Judge (`D-113`); **both are now disposed** — one ruled, one ruled-and-deferred-with-owners. **`0002`'s authorization is unconditional.** `C-31` remains open and is shown not to block: `articles` is mutable and self-describing, and no append-only table in `0002` has status-varying retention. §5.14bu |

**Completing Stage D would require inventing answers to those decisions, reversing `D-68` one pass after it was made, and writing an irreversible migration against a live provisioned database whose target table `NFR-02` makes append-only.** Recorded as blocked rather than delivered partially and counted as done.

**Stage D is still not waiting on the guardrail.** The guardrail was lifted for A, B and C and would not have unblocked D.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 | `SPECS-VERIFICATION` |
|---|---|---|---|---|---|
| `D-70` — Stages A/B/C | ✅ | ✅ | ✅ three rows flip to ✅ | ✅ | ✅ §2, §4, §6 |
| `C-14` — installed, qualified | ✅ | ✅ | ✅ | ✅ | ✅ |
| Stage D blocked | ✅ | ✅ | **— unaffected** | ✅ | **— unaffected** |

### Scope limits

Installs the verification apparatus and the detection checks. **Writes no migration, changes no schema, and answers no S1 window decision.** `Q10`, `Q11`, `G64`, `G16` and the rest of the window remain open. `0001_init.sql` untouched. **The build guardrail is reinstated.**

## 5.14ag `D-71` — six stale claims corrected; the check that should have caught them cannot

**Correction pass, 2026-08-21.** Six claims across four documents had stopped being true. **All six survived a passing `C-14` run**, and that is the finding worth more than the six fixes.

### The parent defect — `G65`: the tier sweep verifies arrival, not correctness

`D-54` propagation is checked by asking whether a decision ID **appears** in each tier it claims. **Presence satisfies the check. Staleness is invisible to it.**

| Decision | Tier claim | What the document actually said |
|---|---|---|
| `D-70` | ✅ Inventory | Present **3×** — yet the `.github/workflows/` row still read *"specified, not installed"* |
| `D-57` | ✅ `Modular_PRD` | Present **4×** — yet §10's `Q2` row still read *"Open"* |

**Both pass. Both were wrong.** `C-14` reported *4/4 consistency checks passed* with both defects live.

**`G65` is opened, not fixed.** The remedy is a stricter check — verifying that a decision's *claim* about a tier matches that tier's *content* — and that is executable code, which the build guardrail covers. **Recorded so the limitation is not mistaken for coverage.**

> Any future claim that propagation is *"verified"* must say which kind: **arrival** (checked today) or **correctness** (not checked).

### `G66` — a shared file with no coverage at all

`.claude/settings.json` is **checked in and shared across all three agents**, and **no `C-14` check covers it.** The shared-core hash compares only the three agent rule files.

**Demonstrated live this pass, not hypothesised.** A hand edit left the file as invalid JSON. Claude Code **silently ignores a settings file it cannot parse**, so *both* hooks were disabled — with no error, no warning, and no check that would have noticed. The only symptom was the absence of hook output, which looks identical to a hook that simply had nothing to say.

**This is the `D-58` failure mode in a file `D-58` never considered:** a silent overwrite, undetected. A JSON parse check across the settings cascade is one line and would have caught it.

### The six corrections

| # | Was | Now | Where |
|---|---|---|---|
| 1 | `.github/workflows/` CI *"specified, not installed"* | **Installed** (`D-70`), CI green | Inventory |
| 2 | `bun.lockb` *"413 packages pinned"* | **415 packages, 346 installs** — `@types/bun` added by `D-70` | Inventory |
| 3 | *"Planning only. No build authorized."* | **Build authorized and executed** for Stages A–C | Inventory header |
| 4 | *"There is currently no test runner, no `__tests__/`, no CI"* ×3 | **All three exist**; corrected in place | Build spec |
| 5 | *"Chief Editor decisions still to make — 16"* | `Q2`, `QC`, `G23`, `G24` **already decided** — removed | §5.1 |
| 6 | `Q2` *"Open"* | **Answered by `D-57`** | `Modular_PRD` §10 |

**Item 5 is the most consequential**: §5.1's opening line is what a decision-maker reads to know what they still owe, and it listed four decisions they had already made. **The tally is not restated** — the list is the record (`G55`, `G56`, `G58`). Only the four verified-decided items were removed; the remaining twelve were **not** individually re-verified in this pass, and that is stated rather than implied.

### `G25` — reopened, then closed against all three targets

`G25` was marked **Closed 2026-08-19**. Its own Fix named **three** targets: `CLAUDE.md`, `AGENTS.md`, **and** `docs/README.md`.

| Target | References to `docs/v1/` before this pass |
|---|---|
| `CLAUDE.md` | 5 |
| `AGENTS.md` | 5 |
| `docs/README.md` | **0** |

**Two of three, closed anyway** — and the missing one is the *"what governs what"* authority map, whose table listed `source/`, `governance/`, `journal/` and *"this folder"* with **no `v1/` row at all.** The exact defect `G25` describes was still live inside a gap marked closed.

**Closed properly:** `docs/README.md` now carries a `v1/` row naming the register, build spec and inventory, and stating that the register wins when derived tiers conflict (`D-58`).

### What this pass does not do

**Fixes no code.** `G65`'s stricter check and `G66`'s settings parse check are both **specified, not installed** — the guardrail covers them. **Closes no Chief Editor decision** and re-verifies none of the twelve remaining ones.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` |
|---|---|---|---|---|
| `D-71` — six corrections | ✅ | ✅ 3 claims | ✅ header + 2 rows | ✅ §8, §10 |
| `G65`, `G66` opened | ✅ §5.1 | **— unaffected** | **— unaffected** | ✅ §8 |
| `G25` closed properly | ✅ §5.1 | **— unaffected** | **— unaffected** | **— unaffected** |

**`docs/README.md` is deliberately absent from that table.** It is the docs **entry point**, not a `D-54` tier — no `FR`, no `AC`, no sprint sequence. The `v1/` row landed there because that is where `G25`’s defect lived, and the closure is traceable through §5.1 and this section rather than through a tier claim.

### Scope limits

Corrects six stale claims, opens `G65` and `G66`, and closes `G25` against its full stated scope. **Installs nothing, decides nothing, and reverses no decision.** `Q11`, `Q10`, `G64` and the S1 window all remain exactly as they were.

## 5.14ah `D-72` — `G65` and `G66` closed: two checks installed, and `G65` narrowed to fit

**Installed 2026-08-21.** Build guardrail lifted for these two items only; reinstated on completion. `C-14` now runs **seven checks** (`D-73` added the 7th).

### `G65` could not be built as written

`G65` asked for a check that verifies a tier is **correct**, not merely that a decision **arrived** there. **A script cannot semantically validate prose**, so that framing is not buildable.

**A design was tested and rejected before writing anything:** verify the tier claim against git — did the commit that recorded the decision also touch the claimed tier file? **It catches neither observed defect.** `D-70`'s commit *did* touch the inventory (it flipped three rows; the defect was a fourth it missed), and `D-57`'s *did* touch `Modular_PRD`. Both would pass.

**What is mechanical is a bidirectional cross-reference of decision status** between the two places that record it — the register (§5.14x headings, §5.1's outstanding list) and `Modular_PRD` §10's per-`Q` rows. **Recorded as a scope reduction, not delivered quietly as if it were the original ask.**

### The three disagreements it detects, each observed here

| | Direction | Observed instance |
|---|---|---|
| **A** | Register records it decided; §10 still says Open | `Q2` read *"Open"* for a day after `D-57` answered it — while the tier sweep passed, because `D-57` appeared elsewhere in the same file |
| **B** | Open and Chief-Editor-owned, but absent from §5.1's list | `Q1`, `Q7`, `Q10` — **found live by this check** |
| **C** | §5.1 lists an ID the register records as decided | `Q2`, `QC`, `G23`, `G24` — corrected by `D-71` |

**Owner is load-bearing in direction B.** `Q9` is Open but owned by *"Customer, via sponsor"*, so its absence from a list of **Chief Editor** decisions is correct. The check excludes it — verified, not assumed.

### `Q10` was missing from the list of what the Chief Editor owes

Direction B's first live catch. **`Q10` is the named blocker for Stage D** — cited repeatedly in `D-70` as the reason `0002` cannot be written — and it was **absent from the one line a decision-maker reads to know what is outstanding.**

**`Q1`, `Q7` and `Q10` are added.** The list was wrong in **both** directions: `D-71` removed four items already decided; this adds three that were never listed. **No tally is restated** (`G55`, `G56`, `G58`).

### `G66` — one file, and it had already bitten

`scripts/checks/settings-parse.mjs` parse-checks the **repo-local** settings cascade: `.claude/settings.json`, `.claude/settings.local.json`, `.mcp.json`. Absent files are valid; all three are optional.

**Contents are never printed** — settings files routinely carry `env` blocks, MCP headers and hook command strings. Only the parser's error position is reported.

**The user-scope file is deliberately not checked.** `~/.claude/settings.json` is per-machine, absent in CI, and not this repository's to police.

### Verified by breaking them, not by watching them pass

| Check | Negative test | Result |
|---|---|---|
| `settings-parse` | Replace `.claude/settings.json` with invalid JSON | **FAIL raised**, line number reported |
| `decision-status` A | Revert `Q2`'s §10 row to *"Open"* | **FAIL raised** |
| `decision-status` C | Put `Q2` back in §5.1's list | **FAIL raised** |
| `decision-status` B | *(no test needed)* | **Failing live** on `Q1`/`Q7`/`Q10` |

**Each was restored and the baseline re-confirmed.** A check that has never been seen to fail is not a control — the same rule `D-67` and `D-70` were held to.

**One defect found in my own output by these tests:** `settings-parse` reported *"1 file(s) parse clean"* **while failing**. The detail line now reads *"N of M file(s) INVALID"*.

### What is still not checked

**Stated so coverage is not overread.** `decision-status` compares **status labels**, not the substance behind them — it cannot tell whether a decision was *correctly* decided, only whether the two records agree. The `QA3`/`QB`/`QD`/`QE` series has no `Modular_PRD` §10 row, so **direction B cannot see it**; those four rest on manual review. And the tier sweep still verifies **arrival**, not correctness — `G65` closes on a narrower promise than it opened with.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` §8 | `SPECS-VERIFICATION` |
|---|---|---|---|---|---|
| `D-72` / `G65`, `G66` | ✅ | ✅ | ✅ detection row | ✅ | ✅ §4 CI table |
| `Q1`/`Q7`/`Q10` added | ✅ §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

### Scope limits

Closes `G65` *(narrowed, stated)* and `G66`. Adds three IDs to §5.1's list. **Decides none of them** — `Q1`, `Q7` and `Q10` are now visible, not answered. `Q10` still blocks Stage D. **The build guardrail is reinstated.**

## 5.15 Solve sequence — remaining open gaps

Ordered by dependency. **Fixes are drafted here so execution does not re-derive them.**

**Refreshed 2026-08-20 (`G56`).** The prior revision omitted `G40`–`G42`, `G47`, `G49`, `G54`, and `G55`; still staged `G33a` as open after it closed on 2026-08-19; and stated ten `SPECS` candidates where there are **18**. **Do not read a count from this section** — read it from the `Fn_Specs` themselves.

### Stage 0 — index integrity *(complete)*

| Gap | Fix | Status |
|---|---|---|
| `G55` | Backfill `G40`–`G49` into §5.1; write `G40`'s detail section; give `G49` an ID-keyed anchor; drop the duplicate `G39` row | ✅ **Applied 2026-08-20** |
| `G56` | Refresh this section | ✅ **Applied 2026-08-20** |

### Stage 1 — documentation only *(complete)*

| Gap | Fix | Status |
|---|---|---|
| `G39` | One subject topic versus many analytical tags | ✅ **Applied** to `FN-GATES-01-05` |
| `G29` | Artifact DoD per sprint | ✅ **Applied** |
| `G33a` | All four feature groups specified | ✅ **Closed 2026-08-19** |

### Stage 2 — `G33b`, the critical path *(complete)*

**Resolved 2026-08-20 — `D-52`, §5.14m.** The 18 candidates filtered against `D-30`:

| Outcome | Count |
|---|---|
| Absorbed into the S1 window — no document | **7** |
| Requires `SPECS` — **4 documents** | **9** |
| Infrastructure ⚙, not product `SPECS` | **1** |
| Blocked by `Q2` | **1** |

**Only `SPECS-TRANSITION-ENFORCEMENT` is needed before S1** — **drafted 2026-08-20**, `D-53` §5.14n. The other three — `SPECS-BOARD-QUERY` (S3), `SPECS-PUBLICATION` (S4), `SPECS-EXCEPTIONS` (S5) — are sprint-aligned and not yet reachable.

> The *"expect a small answer"* hypothesis held, **but not for the reason stated.** `FN-GATES-01-05` §9 claimed all five of its candidates absorb into the S1 window; four do. The fifth — the **sequence-enforcement trigger** — is the entire pre-S1 workload. Accepting the claim as written would have concluded *"no `SPECS` needed"* and left **the gate sequence, the core invariant of the product, unspecified going into S1.**

### Stage 3 — Chief Editor decisions *(T1, parallel)*

| Gap | Question | Drafted resolution |
|---|---|---|
| `G6` | `QD` — where the revenue rule lands | `PSK-06` — the rule **is** an editorial-commercial boundary |
| `G10` | `QC` — domain assignment | ✅ **Closed 2026-08-20** (`D-59`) — neither: **one origin, two paths.** `C-15` carries the promotion trigger |
| `G11` | Arbitration across three concurrent agents | ✅ **Closed 2026-08-20** (`D-58`) — register precedence, Chief Editor owns. `C-14` detection carried with `R3` |
| `Q2` | Line 3 executor | **Blocks `FR-11` entirely** — no executor, no feature. **Not the Chief Editor** (`A23`) |

### Stage 4 — the S1 window *(one design pass; cannot be sequenced)*

All alter the same append-only table.

| Gap | Decision |
|---|---|
> **⚠️ THIS TABLE IS INCOMPLETE, AND THAT IS HOW `D-112` CLOSED THE WINDOW ON A FALSE PREMISE
> (`D-113`).** It is keyed by **gap**; `V1-BUILD-SPEC.md` §S1 keys the same window by **numbered
> item**; **neither list cites the other.** `GA2` is a gap, §5.1 labels it *"S1 window item 4"*, and
> **it was never a row here.** `C-11` and `C-12` could not be rows at all — they are conditions, and
> this table has no column for one. **Both lists were internally consistent and disagreed about
> membership**, so a reader checking either one saw a complete window. The missing rows are added
> below, and the two enumerations now name each other.

| `G16` | ✅ **Decided `D-111` — `line_separation_status`.** Both halves closed: `Q10` by `D-73`/`D-79`, the column NAME by `D-111`. Its shape was fixed by `D-97`. *(This cell read "the remaining half is `Q11`'s column NAME" after `D-111` had supplied it — corrected `D-113`.)* |
| `G17` | ✅ **Decided `D-110`** — typed/versioned boundary ratified |
| `G19` | ✅ **Decided `D-110`** — physical names ratified; inherited targets were already `D-08` |
| `G20` | ✅ **Decided `D-112`** — typed `articles.risk_tier`, three values, never a lifecycle state |
| `G42` | ✅ **Decided `D-111`** — anchored on `articles.created_at`; no backward application |
| `GA1`, `GA3`, `GA4` | ✅ **Decided `D-111`** — typed anchors, immutable snapshot |
| `G57` | **Newly surfaced 2026-08-20.** The `X3` eight-row state backfill mapping, specified as data before `0002` is written |
| `GA9` | `on delete restrict` replaces `on delete cascade` |
| **`GA2`** — *added `D-113`* | ✅ **CLOSED `D-114`.** Its *stated* half closed 2026-08-19; its **insert/read-only** half is ruled — the report record is insert/read-only, enforced by `REVOKE` and a trigger |
| **`C-11`** — *added `D-113`* | ✅ **CLOSED `D-114`.** Publication state is an append-only **event**, never a mutable status column |
| **`C-12`** — *added `D-113`* | ✅ **CLOSED `D-114`.** `publication_targets` rows created **eagerly at approval**, so a non-attempt is a row with no events rather than an absence |
| **Build Spec S1 item 5** — *added `D-113`* | ✅ **DISPOSED `D-114`.** §5.3's classification adopted; the floor **deferred with a named owner**; **5a carried as `C-31`**, non-blocking |

> `G42` was absent from the prior revision of this section. It is **S1, not S3** — scoping S1 without it repeats `G41`'s mechanism one tier down.

> **The two enumerations are now bound to each other.** `V1-BUILD-SPEC.md` §S1's eight numbered
> items map here as: **1** `G16` · **2** `G17` · **3** `GA1`/`GA3`/`GA4` + `G42` · **4** `GA2` +
> `C-11` · **5** item 5 + `C-12` · **6** `GA9` · **7** `G19` · **8** `G20`. Plus `G57`, which joined
> in Step 0 and belongs to no numbered item. **A window described in two keyings and no mapping is
> a window nobody can count**, and that is exactly what happened.

### Stage 5 — the S3 audit surface *(the gaps `G55` was hiding)*

| Gap | Fix |
|---|---|
| `G40` | Bound `NFR-08` to the retention window |
| `G41` | Explain absence — never render disposal as an empty list (`AC-12a`) |
| `G49` | Briefcase artifacts into `Fn_Specs` for **both lanes** |

**`G40` and `G41` land together or neither lands.**

### Stage 6 — T3, the POC lane *(parallel; no build dependency)*

| Gap | Drafted fix |
|---|---|
| `G28` | The 14 manual templates. **The real gate on first revenue** |
| `G7a` | Charter the manual P0-EVR lane. Blocked in practice by `G28` |
| `G3` | `QB` — the P0-EVR charter outranks §8.2 / `B-P0-16` exclusions |
| `G22` | Expression of Concern — needs Board (`C-10`) |
| `G47` | Paid-but-no-trigger must be detectable |
| `GA7` | Auditor access versus tenant isolation |

### Stage 7 — gated or deferred

| Gap | Gate |
|---|---|
| `G27` | S0 — hold draft `0002` outside the apply path |
| `G7b` | S2 design, S6 enforcement (`SEC-03`, itself `OD1`–`OD3` gated) |
| `G54` | ✅ **Closed 2026-08-20** (`D-60`) — verified from source; no toolchain was ever required |

### The critical path

**`SPECS-TRANSITION-ENFORCEMENT` → S1.** `G33a` closed 2026-08-19 and `G33b` closed 2026-08-20 (`D-52`). The filter is done; **one `SPECS` document now stands between the specs and the S1 design pass** — the sequence-enforcement trigger, the only candidate of 18 that neither absorbs into the window nor defers to a later sprint.

Everything else runs parallel or later — **except Stage 0, which precedes all of it**, because every stage above is selected from this section and §5.1. Planning from a stale index is how `G40`, `G41`, `G42`, `G47`, and `G49` stayed invisible while all five were Open.

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

**It is the gating artifact for S1.** The S1 window holds decisions that all resolve into schema; without a technical spec they resolve into a migration written directly from prose.

> **The count is deliberately not restated here.** It was corrected from eight to nine on 2026-08-20, then `G57` joined the same day. **Read the window from §5.15 Stage 4, which is the record** — a count in prose is the drift mechanism (`G55`, `G56`).

### `G11` escalated — three agents, not two

`.claude/`, `.codex/`, and now `.agents/` are all configured. `c1a90c6` was authored by a third agent ("Antigravity"), and `D-27` records ChatGPT Codex as a drafting party. **`G32` is the first observed instance of the harm `G11` predicted:** one agent executed another's runbook and silently dropped operative content, with no arbitration rule and no detection mechanism. `G11` moves from *watch* to **open, and now evidenced**.

## 5.3 Drift audit — repo creation versus now

Baseline: `62c8d8c` (2026-08-15, initial) → `53ace36` (2026-08-16, plan pack + `PRD.md` + `0001_init.sql`). Current: `c477000` (2026-08-19) plus one local commit. **21 commits.**

### What did not drift — the frozen baselines held

| Artifact | Status |
|---|---|
| `docs/PRD.md` | **Unchanged since `53ace36`** ✅ |
| `supabase/migrations/0001_init.sql` | **Unchanged since `53ace36`** ✅ |
| `docs/source/project-charter-v1.md` | Never edited ✅ |

Every discipline this project set for itself on baselines has been kept. That is the audit's cleanest result.

### The actual drift: one layer moved, the other did not

**19 of 21 commits are documentation.** The code layer has not changed since `53ace36` on day two.

| Layer | At creation | Now |
|---|---|---|
| Documentation | 10 files, one directory | ~35 files across `docs/`, `docs/source/`, `docs/governance/`, `docs/journal/`, `docs/v1/` |
| Application code | `app/` + `lib/stripe` + `lib/supabase` | **Identical — zero commits** |
| Plan pack (7 docs) | Authoritative — *"a complete, correct plan"* | **Untouched, and demoted to `D5`: not in the precedence hierarchy at all** |

**The authority relationship inverted while the artifacts stood still.** At creation the plan pack *was* the plan. It is now a deviation-register row describing an architecture the governing set contradicts — and no one has edited it, because nothing needed to: it simply stopped being authoritative around it.

### Every scaffold-level defect found on day two is still present

Verified by direct check, not by reading the register:

| ID | Defect | Status |
|---|---|---|
| `A7` / `G5` | `CLAUDE.md` **and** `AGENTS.md` still say *"a complete, correct plan"*, still point at the demoted pack | **Open** — T1 |
| `X8` | Stripe scaffolding present against `NG-03`, a **Charter-level v1** exclusion | ✅ **CLOSED `D-121`** — removed at `B-003`, `Verified` `67706ca`; absent from the tree. Row corrected; it read `Open — S0` after the fact |
| `TC6` | `next.config.ts` still disables type and lint gates at build | **Open** — S0 / `Q6` |
| `TC1` | No privileged write path; anon key public, RLS permissive | **Open** — S1 |
| `X3` | Schema carries 8 states (`reported`, `journaled`, `senior_reviewed`, `chief_approved`); the Addendum specifies 10 with different names (`Validated`, `Drafted`, `Reviewed`, `Approved`, plus `Discovered`, `Needs Revision`) | **Open** — S1 |

**No new gap IDs are raised by this audit.** Every drift item already has one. That is the finding: the drift is not uncatalogued, it is **uncorrected** — and `A7`/`G5` in particular has now stood for four days while three agents each read the file it misdirects.

### Correction to an earlier claim

Prior analysis recorded that *"`AGENTS.md` was added later by Codex."* **Wrong.** `AGENTS.md` is present in `62c8d8c`, the initial commit, and was revised alongside `CLAUDE.md` at `53ace36`. Both files carry the stale pointer from origin; neither was introduced by a later agent.

## 5.4 Tooling provenance audit — 2026-08-20

**Trigger.** A challenge to whether `@sentropic/graphify` was the correct install, measured against the upstream guide at `Graphify-Labs/graphify`.

**Finding: the install is correct, and the challenge surfaced two larger problems than the one it asked about.**

### What was validated

| Question | Answer |
|---|---|
| Which package is installed? | `@sentropic/graphify@0.17.1` (npm, global) — the binary every graph update has run through |
| Is it the upstream project? | **No.** Upstream is `Graphify-Labs/graphify` — PyPI `graphifyy`, Python, output `graphify-out/` |
| Is it therefore wrong? | **No.** It is an **attributed downstream extension** — it credits *"Safi Shamsi's graphify"* by name and tracks parity in `UPSTREAM_GAP.md`. `Graphify-Labs` shows contributor `safishamsi` |
| Do the repos redirect? | No — both resolve independently. Not a moved or renamed repo |
| Is the upstream's "not affiliated" warning relevant? | **No** — it is scoped to **PyPI** namesquatting and says nothing about npm |

**The seventh instance of the naming-difference error family, and it dissolved like the previous six.** A different repo, language, and package name read as a provenance problem. It is a distribution relationship. The countermeasure in `CLAUDE.md` caught it before it was recorded as an incompatibility.

### Gap dispositions

| ID | Disposition | Where it now lives |
|---|---|---|
| `G50` | **Closed 2026-08-20** | Distribution provenance undocumented — `docs/graph-fragments/README.md` §2, plus the shared core in all three agent files |
| `G51` | **Closed 2026-08-20** | Curated graph layer not reproducible — 61 nodes and 142 edges across 7 fragments rescued from session-scoped temp storage into `docs/graph-fragments/`; `.gitignore` corrected |
| `G52` | **Closed 2026-08-20** | Nine distribution-specific commands named in the rules without disclosure — `docs/graph-fragments/README.md` §3 |
| `G53` | **Closed 2026-08-20** | Three drifted rule blocks reconciled to a byte-identical shared core plus a legitimate platform tail. First concrete instance of the `G11` arbitration rule |
| `G54` | **Closed 2026-08-20** | `D-60` §5.14u — verified **from source**, nothing installed. **8 of 9 confirmed absent; `merge-graphs` exists upstream**, so the nine-command claim was eight. `D-51` holds on stronger evidence |
| `G55` | **Closed 2026-08-20** | `G40`–`G49` were absent from the §5.1 disposition table. All ten backfilled; `G40` given a detail section, `G49` an ID-keyed anchor, and a duplicate `G39` row removed |
| `G56` | **Closed 2026-08-20** | §5.15 solve sequence stale — omitted seven gaps, staged a closed item as open, and stated ten `SPECS` candidates where there are 18. Found and repaired in the same pass |

### `G51` — what the exposure actually was

`.graphify/` is gitignored and `git ls-files .graphify` returned **zero**. The curated layer — `D-39`–`D-50`, the `GA5` resolution, the two-tier lifecycle, the fork at publish, communities 28 and 29 — existed **only** in a session-scoped temp directory.

**18% of the graph's nodes and 25% of its links.** Extraction does not regenerate curation, so any rebuild, uninstall, or session expiry would have destroyed it silently — no error, no warning, and a graph that still looked healthy.

`.gitignore` asserted the graph was *"rebuildable from docs/"*. **That claim was false and is now corrected.** It is the load-bearing kind of false: it is the sentence that makes deleting the graph look safe.

### `G53` — the drift was not what it appeared

Three blocks exist: `CLAUDE.md`, `AGENTS.md`, `.agents/rules/graphify.md`. They had drifted **in both directions** — but **not all of the difference was defect.** `AGENTS.md`'s `$graphify` lines are correct **for Codex**, where `/graphify` is unreliable; `.agents` legitimately points at the Gemini skill path. Flattening all three to one text would have destroyed working platform guidance.

**The real defect** was the absence of a **shared core**: `portable-check`, `summary`, and `review-delta` were missing from `.agents` entirely, and its `migrate-state` rule carried an **abbreviated** form of guidance the other two state in full — **the `G32` pattern, in the tooling layer.**

**Resolution:** a shared core, marked as such and verified byte-identical across all three, plus a declared platform tail. Change all three together or none.

### `G55` — recorded, then repaired

The §5.1 table is the all-IDs disposition record. It stops at `G39`. This is the **third recurrence** of the disposition-drift pattern already fixed three times in this register, now at a scale of ten.

**Corrected 2026-08-20.** An earlier draft of this section claimed `G40`, `G41`, and `G49` had no detail section. Verified false: `G41` has two (§5.14 and §5.14a), and `G49` is covered under a heading that does not name it. **Only `G40` is genuinely bare.** The error overstated the backfill by two thirds — recorded because an inflated gap is still a wrong gap.

**Repaired 2026-08-20 (Step 0).** All ten backfilled in one pass, `G40` given the detail section it never had, `G49` an ID-keyed anchor, and a **duplicate `G39` row** removed — the index had carried both *"Closed"* and *"Open"* for the same ID.

**It was deliberately left open for one turn first.** Partial backfill was the trap: adding `G50`–`G54` to a table missing `G40`–`G49` would have made the sequence read `G39` → `G50` and the ten-gap hole would have stopped being visible at all. **A silent hole beats a loud one only for whoever wrote it.**

### `G56` — the solve sequence had drifted further than the index

**Found while planning from it, which is the only way this kind of defect surfaces.**

§5.15 is the **solve sequence** — the section a reader consults to choose what to work next. Three defects:

| Defect | Detail |
|---|---|
| **Omission** | `G40`, `G41`, `G42`, `G47`, `G49`, `G54`, `G55` — **seven gaps, five of them Open** |
| **False pending** | `G33a` still staged as open work. It closed 2026-08-19 |
| **Stale count** | *"Ten identified so far"* `SPECS` candidates. There are **18** |

**Why this is worse than `G55`, not a smaller version of it.** §5.1 is an **index** — a reader who finds it incomplete goes looking elsewhere. §5.15 is a **plan**. A reader does not audit a plan; they execute it. An omission there is not a lookup failure, it is **work that never gets scheduled**.

**The concrete consequence, had this not been caught:** `G42` is an **S1** gap — the template-to-field-availability binding lives on the report record that S1 creates. It was absent from Stage 4. **S1 would have been scoped, designed, and closed without it**, and the binding would have had to be retrofitted onto an append-only table afterwards.

**Same mechanism, fourth recurrence.** Three disposition-drift instances, the `G32` abbreviation, the false `.gitignore` rebuild claim, the abbreviated `migrate-state` rule, `G55`, and now `G56`. Every one is **a summary that outlived what it summarised.**

**What is guaranteed to fail:** maintaining a hand-written plan that restates what other sections hold, and trusting it because it is the section named "solve sequence".

**How to avoid it:** §5.15 now carries an explicit instruction not to read counts from it. Counts come from the artifacts. **A plan may order work; it may not be the record of what the work is.**

**Disposition: Closed 2026-08-20** — found and repaired in the same pass. Recorded rather than silently fixed, because the recurrence count is the finding.

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

## 5.14ai `D-73` — `Q10` Decided: Product Scope, Stage D Unblocked

**Decided 2026-08-21 by Chief Editor.** The application is a multi-tenant **Product**, functioning as a digital twin of the business from zero to one. It requires account access for natural person employees and will proceed under an MVP and POC direction.

### Impact
- **Stage D Unblocked:** The `0002` migration **must** now include a tenancy column to support multi-tenancy.
- **`Q10` Closed:** Removed from the Open Chief Editor decisions list.
- **`C-14` Scope Updated:** The consistency apparatus now includes a seventh check, `docs-drift.mjs`, which relies on `graphify` to detect unsynced documents.

## 5.14aj `D-74` — Hierarchy of Source Truth & `Q10` Placement *(corrected 2026-08-21)*

**Decided 2026-08-21 by Chief Editor. Corrected same day:** the original entry recorded only 4 tiers, flattening a structure already established by `D-29`, `D-34`, `D-35`, and `D-36`. This is the same family of error as `D-31`/`D-33` — mistaking a naming difference for a structural incompatibility, then compounding it by inventing a simplified structure instead of mapping to the one that already existed.

**The full hierarchy, reconciled against existing decisions:**

| Tier | Name | What it governs | Frozen? | Decision |
|:---:|---|---|---|---|
| **1** | **Alpha Portfolio** | Business-level direction and BRD. The continuing business/investment container | Living | `D-35`, `D-73` |
| **2** | **PRD.md** | Current project requirements. Frozen because it carries the BRD tied to the Alpha Portfolio. A different project gets a different PRD | **Frozen** | Governing set |
| **3** | **Business Case** (`business-case.md`) | Also frozen — part of the governing set below the Charter | **Frozen** | Governing set |
| **4** | **Modular_PRD** | Current project's product development (MVP). Tracks sprints (`D-35`). The governed spec. OD4 (`Proposer → Critics → Judge`) is a **separate system** yet still part of this tier — its judgment rules are determined at the MVP phase as success criteria; deferred because the MVP is not yet built | Living | `D-29`, `D-35` |
| **5** | **POC** (P0-EVR) | Similarly would have its own Modular PRD. A manual evidence lane within the Alpha Portfolio | Living | Board proposals |
| **6** | **fn-specs** (labelled `prd.md` in `specs-creator` per `D-34`) | The tech-spec — all behaviours, interface-agnostic. Includes only the corresponding UX behaviours for `SPECS` candidate filtering. The link between tech-spec + specs + ux | Living | `D-29`, `D-34` |
| **7** | **specs** | Implementation of one specific component. If behaviour at fn-specs is clear enough, this is **redundant** (`D-30`). The agnostic UI-to-UX link for that component | Living | `D-30`, `D-34`, `D-36` |
| **8** | **ux** (`specs/ux/`) | The specific UI/UX implementation due to limitations of the framework used (e.g., Vue.js, Angular.js, Python) | Living | `D-34`, `D-36` |

**Change localization (`D-29`).** A tech-stack change lands in `specs/`. A stack-specific UI consequence lands in `specs/ux/`. Neither disturbs `fn-specs/`. Behaviour stays stable across a stack pivot.

**Gap noted:** the POC does not yet have its own Modular PRD. This is expected — P0-EVR is a manual evidence lane with 22 pending Board decisions (`B-P0-01`–`B-P0-22`), none approved.

Because `Q10` fixes the product-scope boundary, it is a Tier 1 (Alpha Portfolio) structural fact, locked into `alpha-portfolio-business-continuity-implementation-plan.md` §10. **The locked fact is `D-79`'s, not `D-73`'s** — `0002` carries a tenancy column to preserve the option, `NG-02` stands, and no multi-team capability is built. The original wording quoted `D-73`'s *"digital twin of the business"* in the multi-tenant sense; that sense is withdrawn (`D-79`).


## 5.14ak `D-75` — Development Build Lanes (Three Lines applied to the *build*, not the product)

**Decided 2026-08-21 by Chief Editor. Binding.**

Three agents work this repository **sequentially, one at a time, one desktop app at a time**, in a fixed phase order. Until now that order existed only in the Chief Editor's intent: `grep` for `orchestrat|role|phase|lane` across `CLAUDE.md`, `AGENTS.md`, `.agents/rules/graphify.md` and `.agents/workflows/graphify.md` returned **0 hits**, and the register assigned no agent a role. Every agent instead read the build rules' *"build straight through the sprints until the app works end-to-end."* **An agent that orchestrated, built, and touched CI was complying with its instructions, not disobeying them.**

### The lanes

| Lane | Agent | Rule file | Phase | Owns | Must not |
|:---:|---|---|:---:|---|---|
| **A** | Claude Code | `CLAUDE.md` | **1 — now** | `docs/`, the register, specs, `graphify` curation | Write app code; author CI/CD; decide Chief Editor questions |
| **B** | Codex | `AGENTS.md` | **2 — next** | `app/`, `lib/`, `components/`, `supabase/migrations/0002+` | Change scope, the register, or the gates |
| **C** | Antigravity | `.agents/rules/graphify.md` | **3 — last** | `.github/workflows/`, `scripts/checks/`, `.gitattributes`, the deploy gate | Author specs or amend the register |

The lane-to-rule-file mapping is not new — `scripts/checks/shared-core-hash.mjs` already keys its three per-agent tails to exactly these files (`Claude Code specifics:`, `Codex specifics:`, `Gemini / Antigravity specifics:`). `D-75` names what that structure already assumed.

### The rule

**Work outside your lane is *specified, never applied* (`D-56`).** Write the spec, hand off, stop.

**Crossing a lane boundary requires a handoff, not a commit.** This is the development analogue of the four-eyes rule the governing set already imposes at Line boundaries (`v1-build-readiness-addendum.md` §30, §33). It is why `G32` was possible: `agent-stats` yields **0 facts**, so nothing else marks who did what.

**Deployment belongs to Lane C and to GitHub.** No agent deploys. **`main` lagging the working branch is expected until Phase 3 and is not a defect to report.**

### Vocabulary — deliberately distinct

**This is the development lane model. It is NOT the product's Three Lines** (`OD1`–`OD3`, `line_assignment`, `AC-01`/`AC-05`/`AC-17`) and **NOT `OD4`** (Proposer → Critics → Judge, Alpha Portfolio §9). Same source principle — the IIA Three Lines Model forbids merging roles — **different subject**.

Lanes are lettered **A/B/C** precisely so they cannot be confused with the product's numbered **Line 1/2/3**. Reusing the numbers would have created one term with two referents in a corpus that cross-references constantly — the defect found in `D-73`'s *"digital twin"* and warned about at `D-31`/`D-33`. **Do not cross-reference the two vocabularies.**

### Evidence this was a live defect, not a theoretical one

Commits `24b39fb`–`833f52b` crossed three lanes in four commits: **decided `Q10`** (Chief Editor's call), **wrote `scripts/checks/docs-drift.mjs`** (Lane C), and **committed `.gitattributes`** (Lane C). None was recorded as a crossing. The `docs-drift` check produced that way **cannot fail** — nothing writes `.graphify/needs_update`, and it reports `PASS synced` against a modified document.

Lane A's own analysis on 2026-08-21 crossed the same boundary twice — troubleshooting a CI/CD pipeline that is Lane C's, and judging Phase 1 against Phase 3's deployment criteria. **Both were withdrawn.** The second is recorded because measuring a phase against criteria that do not yet apply is the `probe_that_cannot_fail` family.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | Agent files | `Modular_PRD` §8 |
|---|---|---|---|---|---|
| `D-75` lanes | ✅ §5.14ak | ✅ phase sequence | **— unaffected** | ✅ shared core | **— unaffected, deliberately** |

**The inventory is unaffected because `D-75` creates and retires no file** — its own §1 scope note limits it to decisions that do. The claim was corrected before commit rather than satisfied by inserting a row, which is how `D-71` mis-claimed `docs/README.md`.

**`Modular_PRD` is unaffected by design, not by omission.** It is the **Product** Requirements Document; `D-75` governs the **development** lane. Recording build-agent roles there would create exactly the product/development collision this decision exists to prevent.

### Scope limits

Records lane ownership and the handoff rule. **Closes no gap.** Does not repair `agent-stats` (`D-77`), does not repair `docs-drift` or correct the shared core's stale *"Three checks run in CI"* line (`D-78`) — both are named here and **left untouched**, which is the rule this decision installs. Authorizes no code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten. `Q10`'s scope characterization remains as `D-73` left it.

## 5.14al `D-76` — Agent Rule Files: Commands, Phase Framing, and Two Dead Signals

**Applied 2026-08-21 by Lane A.** Arose from a `/init` pass. `/init` proposes to *regenerate* `CLAUDE.md`; regenerating it would have overwritten the hash-locked shared core and silently desynced Codex and Antigravity. The pass was converted to a suggestions review, and five defects were found.

### What was corrected

**1. The shared core misstated its own CI coverage.** It read *"Three checks run in CI"* and named `graph-coverage` as the sole local-only check. Both were stale: `bun run check` runs **seven** checks, **five** reach CI, and **two** — `graph-coverage` and `docs-drift` — skip because they read gitignored `.graphify/graph.json`. The core now states that **a local `7/7` and a CI `5/5` are both correct**. This is the `G55`/`G56`/`G58` tally mechanism found in the block that replicates to all three agents.

**2. Commands were undocumented.** The core named only `bun run check`. `dev`, `build`, `lint`, `typecheck`, `test`, and the single-file form `bun test __tests__/smoke.test.ts` are now recorded, with `build` marked **not a verification gate** (`TC6` sets `ignoreBuildErrors`/`ignoreDuringBuilds`).

**3. Phase framing was absent from the rule files.** `D-75` records the lanes; nothing told an agent that the sparse `app/` tree is *correct* for Phase 1. An agent reading ten source files and an unwritten `0002` could reasonably conclude the build had fallen behind and start building — which is the `D-75` crossing this decision closes the remaining door on.

**4. `README.md` is template boilerplate.** It opens `# vibe-stack-supabase` and describes a generic Next.js + Supabase starter, unlabelled at the repo root. It is exactly the kind of source this file's own opening warning is about — the same defect `G25` closed for `docs/README.md`. Now named as stack notes only.

**5. A Claude-tail instruction that could never fire.** It gated on `.graphify/needs_update`, which **nothing writes** — `.git/hooks/` is empty and the only reference to that path in the repository is the check that reads it. **`.graphify/branch.json` is the signal that works**: it carries `stale`, `staleReason`, and `lastAnalyzedHead`, and `lastAnalyzedHead` tracked HEAD correctly through this session. The tail now compares `lastAnalyzedHead` against `git rev-parse HEAD`.

### Handoff to Lane C — specified, not applied

Finding 5 supplies the missing repair for `docs-drift.mjs` (`D-78`): **compare `branch.json.lastAnalyzedHead` to `git rev-parse HEAD`**, rather than testing for a marker file no installed hook writes. That is a `scripts/checks/` change and therefore **Lane C's to apply** (`D-75`). Lane A specifies it and stops.

### Tier applicability (`D-54`)

| Item | Register | Agent files | Build spec | Inventory | `Modular_PRD` §8 |
|---|---|---|---|---|---|
| `D-76` core corrections | ✅ §5.14al | ✅ shared core, re-hashed | **— unaffected** | **— unaffected** | **— unaffected** |
| `G67` opened | ✅ §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Build spec and inventory are unaffected**: no artifact is created, retired, or resequenced, and no sprint scope moves. `Modular_PRD` is unaffected — these are development-lane rules, not product requirements.

### Scope limits

Corrects documentation only. **Does not repair `scripts/checks/docs-drift.mjs`** — Lane C's, and it still cannot fail. **Does not touch the `agent-stats` claim** in the same paragraph, which remains false at 0 facts (`D-77`); it was outside the `/init` gap list and is deliberately left. Opens `G67`. Authorizes no code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten. Shared core re-hashed `b04dfc7c4061` → `242e7e20fd8a`, 64 → 86 lines across the three files (the 43-line figure predates `D-75`).

## 5.14am `D-79` — `Q10` Narrowed: the Column Without the Charter Breach

**Applied 2026-08-21 by Lane A, on the Chief Editor's instruction given 2026-08-21.** Supersedes the *characterization* in `D-73` §5.14ai. **Does not reverse the Chief Editor's decision** — the practical output is unchanged.

### What `Q10` decides

`supabase/migrations/0002_*.sql` **carries a tenancy column**, so the option is preserved before the append-only table exists. That is the whole of what the S1 window required: a column now, or a migration of an append-only table later.

### What it does not decide

- **`NG-02` stands.** No multi-team capability is built.
- **Access control stays at `SEC-03`, S6**, and remains blocked while `OD1`–`OD3` are unratified.
- **v1 remains single-account.** No employee accounts are authorized by this decision.

### Why the narrowing was required

`D-73` recorded the application as *"a multi-tenant **Product** … requires account access for natural person employees."* `docs/source/project-charter-v1.md:53` reads **"No multi-team accounts, one 'Chief Editor' account."** The Charter is **frozen**, and under `D-58` frozen documents *"outrank everything, unchanged."* The register arbitrates between derived tiers; it cannot decide a frozen constraint away. As recorded, `D-73` was the edit that loses.

**The reconciliation already existed and nothing needed overturning.** `Modular_PRD` v1.6 annotated `NG-02`:

> *"A tenancy boundary exists in the data model to preserve the option; **no multi-team capability is built, and `NG-02` stands.**"*

`D-73` granted materially more than the question it answered required, and three things followed from the excess: it pulled auth ahead of `SEC-03`, it collided with the demo-first no-login-wall rule in the agent files, and it reused *"digital twin"* — established at `docs/journal/2026-08-18-raci-human-vs-digital-twin.md:34` as **virtual agents serving one natural person** — to mean many employees. One term, two referents. **`D-79` restores the established sense.**

### Stage D is not unblocked

`D-73` recorded *"Stage D Unblocked."* `V1-BUILD-SPEC.md`, edited in the same commit, said `0002` *"remains blocked by `Q11`."* Both cannot hold. **`Q10` was a blocker, not the only one.** `0002` remains blocked on `Q11`'s deferred shape via `G64` (`D-68`, `D-69`) — which must resolve **before the `0002` draft is written** (`G27`) — and on the open S1 window.

### How this decision was lost once

The narrowing was approved by the Chief Editor at the start of the 2026-08-21 session and **was not applied**. `D-75` was earmarked for it in the plan, then **spent on the development build lanes** three turns later; the work went with the number. **An approved human decision is the most expensive thing this repository can drop** — it is not recoverable by re-reading a source, because the source was a person.

Recorded as a numbering discipline: **`D-77` and `D-78` were already promised** in §5.14ak and §5.14al to the `agent-stats` and `docs-drift` repairs. This decision therefore takes **`D-79`**. A forward-referenced number is a commitment, not a placeholder.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Alpha Portfolio | `Modular_PRD` | Inventory | Agent files |
|---|---|---|---|---|---|---|
| `D-79` narrowing | ✅ §5.14am | ✅ §4 stale line | ✅ §10 rewritten | ✅ §10 `Q10` row | **— unaffected** | **— unaffected** |

**`alpha-portfolio-business-continuity-implementation-plan.md` §10 was also rewritten**, and is deliberately **not** shown as a tier column. `scripts/checks/tier-sweep.mjs` carries no `TIERS` entry for that document, so a column naming it is **rejected rather than verified** — it was, on the first run of this decision. Adding the column back to satisfy the eye while the sweep ignores it would be a claim with no check behind it. **Opened as `G68`:** the sweep cannot see a Tier 1 document that `D-74` places *above* `Modular_PRD`. `scripts/checks/` is Lane C (`D-75`) — **specified, not applied.**

`Modular_PRD` §10's `Q10` row states the decision's outcome and moves with it. The **inventory is unaffected** — no file is created or retired; `0002` was already listed. **Agent files are unaffected** — this is a product-scope fact, not a development-lane rule.

### Scope limits

Narrows a characterization. **Decides no field name, no field shape, and no enum values** — `Q11` remains deferred (`D-68`). Closes `Q10` as already closed by `D-73`; **re-opens nothing**. `D-74`'s tier hierarchy stands; only its Tier-1 lock text moves, because it quotes `D-73` verbatim. Authorizes no code, schema, migration, or deployment. **`0001_init.sql` untouched; `0002` still unwritten.** The frozen Charter and `docs/PRD.md` are unchanged and were not edited.

## 5.14an `D-80` — `/sync-docs` Skill: the Propagation Procedure, Made Runnable

**Applied 2026-08-21 by Lane A.** Creates `.claude/skills/sync-docs/SKILL.md`.

### Why the generic instruction was not enough

The conventional form — *"update `CLAUDE.md` or the relevant `.md` spec files so you don't make that mistake again"* — misfires here in two documented ways:

1. **`CLAUDE.md` is one of three files sharing a hash-locked core.** Editing it alone either fails `bun run check` or, if the edit lands in the unprotected preamble, **desyncs Codex with nothing detecting it** (`G67`).
2. **"Relevant `.md` files" is the vagueness `D-54` exists to remove.** `D-76` corrected a stale CI tally in the shared core and left the identical claim standing in `V1-BUILD-SPEC.md` — every check green. `D-79` corrected it.

### What the skill encodes

Lane check before anything else (`D-75`); a **decision-number availability check** before claiming one; search the **claim, not the ID** (`G65`); the `D-54` tier table with *state every unaffected tier*; the shared-core triple edit; **propagate the fact, never the tally** (`G55`, `G56`, `G58`); `merge7.js` rather than `build --fragment` (`G51`); `bun run check` with the **7 local / 5 CI** asymmetry stated; a **negative test**; graph sync via `branch.json.lastAnalyzedHead`; and a closing report of **what was left untouched and why**.

Every step names the defect it exists to prevent. A procedure whose steps have no attached failure is one nobody can evaluate.

### Known limit, stated

`.claude/skills/` is read by **Claude Code only**. Codex and Antigravity do not load it, so this is **Lane A's tool, not a shared control**. The binding rules it encodes live in the shared core and the register, which all three agents read; the skill is a convenience over them, never a substitute. If Lanes B and C need the same procedure, it belongs in the shared core — not copied into `.codex/` or `.agents/`, which would create a fourth place for the same rule to drift.

### Tier applicability (`D-54`)

| Item | Register | Inventory | Build spec | `Modular_PRD` | Agent files |
|---|---|---|---|---|---|
| `D-80` skill | ✅ §5.14an | ✅ new file row | **— unaffected** | **— unaffected** | **— unaffected** |

**Inventory is affected because a file is created** — the condition its own §1 scope note sets. **Build spec is unaffected**: no scope, sequence, or DoD moves; the skill automates an existing procedure rather than adding a step. **Agent files are unaffected** — the rules are already there; this does not restate them.

### Scope limits

Creates one file. **Closes no gap and changes no rule.** Does not repair `agent-stats` (`D-77`), `docs-drift` (`D-78`), `G67`, or `G68` — all Lane C. Authorizes no code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

## 5.14ao `D-81` — A Hook Guard That Failed Open

**Applied 2026-08-21 by Lane A**, on the Chief Editor's instruction, following a `/doctor` health check. Repairs the `PreToolUse:Bash` hook in `.claude/settings.json` at commit `5716d56`.

### What was measured

In a single session the hook emitted the **same 326-character payload 665 times** — one hash bucket, byte-identical — totalling **216,790 characters ≈ 54,198 est. tokens**. It fired 1,332 times in that session; roughly half carried output.

### The cause

A once-per-day guard had been added earlier the same day and keyed its marker on `${TMPDIR:-/tmp}`. **That path resolves to different filesystems in Git Bash and in the shell Claude Code spawns for hooks.** The marker observed at `/tmp/graphify-hint-2026-08-21` had been created by the *verification* run, not by the hook. `touch` wrote somewhere the test never looked, `[ ! -f "$M" ]` stayed true on every call, and the `echo` ran every time.

**The guard failed open.** When its mechanism broke, the expensive branch is what executed.

### The repair

`mkdir` replaces `touch` + `[ ! -f ]` as an **atomic lock**, and the marker moves inside `.graphify/` — the directory the hook already tests for, so there is **one filesystem and one resolution** rather than two shells disagreeing. `mkdir` fails both when the directory exists *and* when it cannot be created, so the guard now **fails closed**.

**The principle worth keeping: a guard whose failure mode is expensive must fail closed.** The original was written for the common case and silently chose the costly branch whenever its assumption broke.

Payload preserved byte-for-byte (325 chars). The `Read|Glob` hook is untouched (1,004 chars, identical) and no other key changed. The replacement was composed in JavaScript and serialised with `JSON.stringify` — never spliced into a shell line — which is the procedure `D-71` established after a hand edit left this same file as invalid JSON.

Verified: emits once, silent on runs 2 and 3, and confirmed live on the call that applied it. The marker is gitignored under `.graphify/`.

### Stated limitation — why no check caught this

**`C-14`'s `settings-parse` validates that the file *parses*, not that a hook *behaves*.** The leak ran for a full session with **all seven checks green**, because a hook that emits 665 times is syntactically perfect. This is the same shape as `C-14`'s local-only limit and `G65`'s arrival-not-correctness limit: **stated so the coverage is not overread**, not opened as a gap, because a repository check cannot observe hook runtime — that evidence lives in session transcripts, outside any file the checks can read.

### Not fixed

**24 runs exceeded 2 seconds and one reached 71 seconds**, against a configured 5-second timeout. The excess is shell spawn and system contention, **not this command**, and fewer syscalls will not move it. Narrowing the matcher or removing the hook are the only real levers. Recorded rather than quietly folded into the repair, because the token leak and the latency are **two separate defects** in one hook and only one of them is now fixed.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | Agent files | `Modular_PRD` |
|---|---|---|---|---|---|
| `D-81` hook repair | ✅ §5.14ao | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Every derived tier is unaffected, and each for a stated reason.** No artifact is created or retired — `.claude/settings.json` already existed — so the **inventory** condition is not met. No scope, sequence, or DoD moves, so the **build spec** is untouched. The repair changes a configuration value, not a rule agents must follow, so the **agent files** stay as they are; adding a "guards must fail closed" line to the shared core would be inventing scope this decision was not given. **`Modular_PRD`** governs the product, not development tooling.

### Scope limits

Repairs one hook command. **Closes no gap and opens none.** Changes no rule, no shared-core text, and no hash. Does not repair `agent-stats` (`D-77`), `docs-drift` (`D-78`), `G67`, or `G68` — all still Lane C. Does not address the hook's latency. Authorizes no code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten. **Second repair to `.claude/settings.json` in one day** — the first (`D-71`) followed a hand edit that silently disabled both hooks; this one followed a guard that silently over-fired. Both were invisible until measured.

## 5.14ap `D-82` — `D-75` Cannot Enforce Itself

**Recorded 2026-08-21 by Lane A**, on the Chief Editor's instruction. States a structural property of the lane model. **Does not weaken `D-75`** — it removes an overread of it.

### The finding

`D-75` assigns three lanes and forbids crossing them. **Nothing in this repository enforces that.** Verified 2026-08-21:

| Enforcement surface | State |
|---|---|
| `CODEOWNERS` (`.github/`, root, `docs/`) | **absent** |
| Path-scoped rules (`.claude/rules/` with `paths:`) | **absent** |
| Pre-commit tooling (`.husky/`, `.pre-commit-config.yaml`) | **absent** |
| Installed git hooks (`.git/hooks/`, `core.hooksPath`) | **0 installed, default path** |
| CI (`.github/workflows/ci.yml`) | `on: push`, `on: pull_request` — **runs after a commit lands** |

**The only control is prose in the shared core.** CI verifies; it cannot prevent.

### The evidence is not theoretical

**Four crossings, all by agents that had read the rules.** Commits `24b39fb`–`833f52b` decided `Q10` (the Chief Editor's call), wrote `scripts/checks/docs-drift.mjs` (Lane C), and committed `.gitattributes` (Lane C). Lane A crossed twice more the same day — troubleshooting a CI/CD pipeline belonging to Lane C, and judging Phase 1 against Phase 3's deployment criteria. **Both Lane A crossings were withdrawn; none of the four was prevented.**

### The bootstrap problem

**Every mechanism that would enforce the lane model belongs to Lane C.** `CODEOWNERS` lives in `.github/`; a pre-commit hook is build tooling; a path check would live in `scripts/checks/`. All three are Lane C's surface under `D-75`.

**So Lane A can specify enforcement and can never apply it.** The first real control must be applied by **Lane C or by the Chief Editor**. This is a property of the model as designed, not an oversight — but it means `D-75` is a **duty accepted by each agent**, not a guardrail that holds when one declines.

### Why this matters most in mature repositories

In this repository the *absence* of the artifact is itself a brake: an agent cannot plausibly implement `docs-drift.mjs`'s replacement without the spec, and writing the spec is Lane A's work anyway.

**In a project that already has code, the brake is gone.** The implementation exists, so a Lane C specification reads as a **change request against working code** — complete, actionable, and executable by whichever agent opens it. **The lane model is weakest exactly where an existing codebase makes it most necessary.** Recorded because the natural assumption runs the other way: that a mature repository is the safer case.

### What was fixed here

The shared core and `V1-BUILD-SPEC.md` §2 both asserted the lane rule without qualification. **Both now state that it is unenforced** and that a crossing is stopped only by the agent choosing to stop. Stating the limit is the whole remedy available to Lane A — the same discipline as `C-14`'s local-only limit and `G65`'s arrival-not-correctness limit: **a control whose blind spots are unstated invites the belief that everything it does not report is fine.**

Both tiers were amended in this pass, not one. Correcting a claim in the shared core while leaving the identical claim standing in the build spec is the defect `D-76` committed and `D-79` had to repair.

### Tier applicability (`D-54`)

| Item | Register | Agent files | Build spec | Inventory | `Modular_PRD` |
|---|---|---|---|---|---|
| `D-82` unenforceability | ✅ §5.14ap | ✅ shared core, re-hashed | ✅ §2 phase sequence | **— unaffected** | **— unaffected** |
| `G69` opened | ✅ §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Inventory unaffected** — no file created or retired. **`Modular_PRD` unaffected** — the development lane is not a product requirement.

### Scope limits

States a limit and opens `G69`. **Builds no enforcement mechanism** — that is `G69`, and it is Lane C's, which is the entire point of this decision. Changes no lane assignment, no phase order, and no ownership. Does not repair `agent-stats` (`D-77`), `docs-drift` (`D-78`), `G67`, `G68`, or decide `G63`. Authorizes no code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

## 5.14aq `D-83` — `G69` Closed: Crossings Made Visible, Not Prevented

**Applied 2026-08-21 by Lane A under explicit Chief Editor authorization.** Creates `scripts/checks/lane-boundary.mjs` at commit `2b8334e`. Closes `G69`.

### The authorization matters, and is recorded

`scripts/checks/` is **Lane C's surface**. `D-82` established that every mechanism capable of enforcing `D-75` belongs to Lane C, so Lane A can specify enforcement and never apply it — and named **the Chief Editor as one of only two actors** who could supply the first control. That authorization was given. **This is a sanctioned crossing, not an unremarked one**, and the distinction is the whole subject of `D-82`.

### The design was tested before it was written

`G65`'s same-commit git design was appealing, cheap, and wrong, and was rejected only because it was tested against the defects it claimed to catch. The same discipline applied here: a probe ran the proposed rule over **40 commits of real history** before any check existed.

| Commit | Lanes | Authorized at the time? |
|---|---|---|
| `24b39fb` | C+A | **No** — the crossing `D-75` records |
| `0e3705c` | A+C | Yes — guardrail lifted for `G65`/`G66` |
| `97b8a7c` | C+A | Yes — Stages A/B/C approved |
| `8b03b7a` | A+B | Yes — `G62a` fix approved |

**Four of forty, all genuine, zero false positives.** And the result settled the design: three of the four were authorized, so **the check detects the *shape* of a crossing and never the *permission* for one.** A finding means *"say why"*, not *"you did wrong"* — and the message says so, because a control that reads as an accusation gets suppressed rather than answered.

### What it does

Reads the **working tree when dirty** — so a crossing is actionable *before* it enters history — and **`HEAD` when clean**, which is what CI sees on a fresh checkout. It therefore **never skips**, unlike `graph-coverage` and `docs-drift`. On a finding it names both lanes and the files on each side.

The three agent rule files, `.claude/`, `__tests__/` and build config are treated as **shared**: the rule files are triple-edited by whichever lane records the decision (`D-54`), so counting them would fire on every ordinary pass.

### Stated limits

- **Shape, not permission** — as above.
- **It cannot say *which* agent crossed.** Attribution is unavailable: `agent-stats` returns 0 facts (`D-77`).
- **Paths outside the lane map are not lane-attributed** at all.
- **It detects; it does not prevent.** `D-82`'s finding stands unchanged — CI runs after a commit lands, and nothing here blocks one. `G69` is closed on **visibility**, which is narrower than the gap's title suggests, and that narrowing is stated here rather than left for a reader to discover — the defect `G25` turned out to be.

### It caught its own author

Adding this decision to the register while `scripts/` was still uncommitted made the pass an **A+C crossing**, and the check said so. The commit was therefore **split**: `2b8334e` carries the Lane C change alone, and this entry follows as Lane A. **The demonstration is that the split happened, not that the check was quiet.**

### Tier applicability (`D-54`)

| Item | Register | Inventory | `SPECS-VERIFICATION` | Build spec | Agent files | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-83` / `G69` | ✅ §5.14aq | ✅ new file row | ✅ §10 | ✅ §4 check list | ✅ shared core | **— unaffected** |

**Inventory is affected** — `scripts/checks/lane-boundary.mjs` is created, the condition its §1 scope note sets. **`Modular_PRD` is unaffected** — development tooling is not a product requirement.

### Scope limits

Closes `G69` on visibility. **Builds no blocking control**, adds no `CODEOWNERS`, installs no git hook. Changes no lane assignment, no phase order, no ownership. Does not repair `agent-stats` (`D-77`), `docs-drift` (`D-78`), `G67`, `G68`, or decide `G63`. Authorizes no product code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

## 5.14ar `D-84` — The Lane Map Was Wrong: Orchestration Is Lane A

**Corrected 2026-08-21 by the Chief Editor.** Supersedes the lane surfaces in `D-75` §5.14ak, narrows `D-82` §5.14ap, withdraws a framing in `D-83` §5.14aq, and closes `G63`.

### The correction

`D-75` assigned `scripts/`, `.gitattributes` and CI to Lane C as one undifferentiated "build tooling" surface. **That was wrong.** Those files are **orchestration**, and orchestration is Lane A. **Lane A writes every dependency before Lane C builds a workflow against it** — CI calls `bun run check`; Lane A writes what it calls.

| Lane | Agent | Surface |
|:---:|---|---|
| **A** | Claude Code | `docs/`, `scripts/`, `.claude/`, `.agents/`, `.codex/`, `.github/` **except** `workflows/`, the rule files, and build config (`package.json`, `tsconfig.json`, `eslint.config.mjs`, `next.config.ts`, `.gitattributes`, `.gitignore`) |
| **B** | Codex | `app/`, `lib/`, `components/`, `supabase/`, `__tests__/` |
| **C** | Antigravity | **`.github/workflows/` only** |

**Nothing is "shared" any more.** The previous shared list existed only because the old map left build config unattributed. Every path now maps to one lane or is unmapped, and unmapped paths are reported in the check's detail line rather than passed over.

### History is re-characterised, and two accusations are withdrawn

Re-probing 40 commits under the corrected map:

| Commit | Old map | Corrected |
|---|---|---|
| `24b39fb` | **"the recorded crossing"** | **All Lane A** — not a crossing |
| `0e3705c` | A+C | **All Lane A** — not a crossing |
| `97b8a7c` | C+A | A+C — genuine (`.github/workflows/`) |
| `d09563d` | *not flagged* | **A+B+C** — newly visible |
| `8b03b7a` | A+B | A+B — genuine |

**`24b39fb` is the important one.** `D-75` and `D-82` both cite it as *the* unauthorized crossing, on the grounds that it "wrote `scripts/checks/docs-drift.mjs` (Lane C)" and "committed `.gitattributes` (Lane C)". **Both files were that agent's own surface.** The commit's real defect is unchanged and unrelated: it recorded `Q10` with a characterization contradicting the frozen Charter, which `D-79` corrected. **That is a scope error, not a lane crossing, and the two were conflated.**

`D-82`'s "four crossings by agents that had read the rules" therefore **overstated**. Three multi-lane commits exist, and **all three predate `D-75`** — they cannot have violated a rule that did not yet exist. Recorded as `conflict_asserted_past_source`: a finding asserting more than its source supports.

### `D-82`'s bootstrap problem narrows to almost nothing

`D-82` held that *"every mechanism that would enforce the lane model belongs to Lane C"*. Under the corrected map: `scripts/checks/` is **Lane A**, a pre-commit hook is orchestration and therefore **Lane A**, and `.github/CODEOWNERS` is **Lane A** (`.github/` minus `workflows/`).

**Lane A can build every file-based enforcement control.** What remains outside is **branch protection**, which is a GitHub *setting* rather than a file and belongs to no lane — it is the Chief Editor's. `D-82`'s structural finding that **nothing currently enforces the lanes** stands unchanged; only its claim about *who could ever fix that* was wrong.

### `D-83`'s authorization framing is withdrawn

`D-83` recorded building `scripts/checks/lane-boundary.mjs` as a **sanctioned crossing** requiring Chief Editor authorization. **It was not a crossing.** `scripts/checks/` is Lane A's own surface, and the authorization, while genuinely given, was not needed. The commit split (`2b8334e` → `a8b838e`) was therefore unnecessary — both halves were Lane A. **Harmless, and left in history rather than rewritten.** The check, its probe method, and its stated limits are unaffected.

### `G63` closed — on scoping, not removal

**The Chief Editor's argument for `merge=union` was tested and holds for the content it targets.** Modelling the rollback lineage — `tag-01`, faulty release, roll back and deploy as `tag-02`, fix the `tag-01` line, merge `tag-01` into `tag-02`, then into `main` — both sides' journal records survived. **Losing an audit record is worse than duplicating one**, and a conflict is where a record gets dropped.

**It fails on current-value content**, tested three ways: a status row merged to `Decided` **and** `Rejected`; a version header appeared twice; and a union-duplicated `CLAUDE.md` **sliced identically to a clean one**, so `shared-core-hash` **PASSED** on a file holding two complete copies of the rules — a guard failing open, the `D-81` defect.

**The decisive constraint is that the file is the wrong unit.** `Modular_PRD.md` carries a 29-row append-only changelog *and* current-value §10/§8 tables; the register carries append-only `§5.14*` sections *and* 158 current-value status rows. No per-file rule is right for a whole file.

**Applied:** `*.md merge=union` retained, with `docs/v1/**/*.md`, `docs/Modular_PRD.md`, `CLAUDE.md`, `AGENTS.md` and `.agents/**/*.md` scoped to `merge=text`. Verified with `git check-attr`: journals union, register and rule files conflict visibly. **Residual risk, stated:** the excluded files lose union on their append-only halves too, so a real divergence needs manual changelog reconciliation. That is the correct trade — manual work on the append half, no silent corruption on the value half.

**Reframe worth keeping: union preserves *text*; the commit graph preserves *audit*.** A conflict marker loses nothing from history — both sides remain retrievable, anchored by tags.

### The Lane C queue was wrong too

`D-77`, `D-78`, `G67` and `G68` are all `scripts/` or rule-file work, and `G63` is `.gitattributes`. **All five are Lane A.** The handoff list issued 2026-08-21 assigned every one of them to Lane C and was wrong in the same way this decision corrects. **Lane C's queue is currently empty** — its only surface is `.github/workflows/ci.yml`, and nothing outstanding touches it.

### Tier applicability (`D-54`)

| Item | Register | Agent files | Build spec | `SPECS-VERIFICATION` | Inventory | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-84` map correction | ✅ §5.14ar | ✅ lane table | ✅ §2 sequence | ✅ §10 map | **— unaffected** | **— unaffected** |

**Inventory unaffected** — no file is created or retired; `.gitattributes` and `lane-boundary.mjs` both already exist and are listed. **`Modular_PRD` unaffected** — development lanes are not product requirements.

### Scope limits

Corrects a map and closes `G63`. **Builds no enforcement**; `D-82`'s finding that nothing prevents a crossing stands. Adds no `CODEOWNERS`, installs no hook, sets no branch protection. Does not repair `agent-stats` (`D-77`), `docs-drift` (`D-78`), `G67` or `G68` — now known to be Lane A's, and still open. Authorizes no product code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

## 5.14as `D-85` — Build Config Stays in Lane A, With the Cost Measured and Accepted

**Decided 2026-08-21 by the Chief Editor.** Amends nothing in `D-84`'s map; records a regression test against it and the disposition chosen.

### The regression, measured

`D-84` assigned build config — `package.json`, `tsconfig.json`, `eslint.config.mjs`, `next.config.ts`, lockfiles — to Lane A as orchestration. A classification probe over eight scenarios found this flags **three classes of ordinary Lane B work** as crossings:

| Build config → | False crossings on ordinary work |
|---|---|
| **Lane A** | **3** — `bun add` + the code using it; a `tsconfig` path alias + app code; a `next.config` change + app code |
| Lane B | 1 — Lane A adding a check script (observed once, `D-70`) |
| Unmapped | **0** — each touch reported in the detail line, never flagged |

All three attributions correctly flag a genuine A+C crossing (Lane C editing a workflow *and* the Lane A script it calls), so the difference is confined to build config.

### `package.json` is a mixed file — the `G63` lesson, repeated

| Block | Owner |
|---|---|
| `dev`, `build`, `start` | Lane B |
| `lint`, `typecheck`, `test`, `check` | Lane A |
| `dependencies` (6) | **Lane B, entirely** |
| `devDependencies` (9) | Mixed — `eslint`, `@types/bun` against `typescript`, `tailwindcss` |

**`G63` closed on the finding that the file is the wrong unit** — `Modular_PRD.md` and the register each carry append-only *and* current-value content, so no per-file merge rule fits. **`D-84` reproduced that error for lane attribution in the same decision that closed `G63`.** Recorded plainly: a lesson learned about one mechanism was not carried across to the other in the same pass.

### The decision

**Lane A retains build config, and the friction is accepted.** The recommendation on the evidence was *unmapped* — zero false positives, with each touch still reported. **The Chief Editor chose Lane A**, and the rationale is consistent with `D-84`'s principle: **Lane A writes what the build consumes.** A dependency entering the tree is an orchestration act, and making it a deliberate, separately-reviewed commit is a feature of that reading rather than an accident of it.

### The cost, stated rather than discovered later

- **Lane B must split commits.** A dependency change lands separately from the code that uses it.
- **Bisect and review are worse** for it: a commit adding `zod` alone will not build against code that does not exist yet, and the commit that uses it depends on a predecessor.
- **It fires on routine S1 work**, which is the phase Lane B has not yet started. **The friction is entirely prospective** — one historical commit (`d09563d`) touched both surfaces, because the application is still scaffolding.
- **The finding is not a verdict.** `lane-boundary` says *"split it, or record the authorization"*; a Lane B dependency commit is expected traffic, not a violation.

**Revisit trigger:** if S1 shows this firing on most Lane B commits, the *unmapped* option remains available and costs one line.

### Tier applicability (`D-54`)

| Item | Register | Agent files | Build spec | `SPECS-VERIFICATION` | Inventory | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-85` | ✅ §5.14as | ✅ split-commit rule | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Build spec and `SPECS-VERIFICATION` are unaffected** because the map is unchanged — both already name build config under Lane A, and `D-85` confirms rather than moves it. **Agent files are affected** because Lane B reads `AGENTS.md` and must know to split a dependency commit; recording the decision without telling the lane that bears the cost would leave it to be discovered at the first failure.

### Scope limits

Records a regression test and a disposition. **Changes no lane assignment and no map.** Modifies no check — `lane-boundary.mjs` is untouched, and its message already reads as a prompt rather than a verdict. Does not repair `agent-stats` (`D-77`), `docs-drift` (`D-78`), `G67` or `G68`. Authorizes no product code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

## 5.14at `D-86` — Lane A Provisions Ahead; `D-85`'s Cost Corrected; the Intake Loop Named

**Recorded 2026-08-21 by the Chief Editor.** States a principle Lane A has been following since `D-64` but never wrote down, corrects the cost analysis in `D-85` §5.14as, and names the two upstream sources that drive Lane A's own retrospective cycle. Opens `G70`.

### The principle

**Lane A provisions the toolchain and every dependency before Lane B needs it. Lane B writes code and responds to flags.**

This is not new behaviour. `D-64` closed `G59` by installing bun 1.1.30 and committing `bun.lockb` with **413 packages pinned** and `--frozen-lockfile` exiting 0. Lane A also wrote `eslint.config.mjs`, the CI workflow, all eight `C-14` checks, and `__tests__/`. **Provisioning-ahead was the observed practice; only the principle was missing** — and its absence is what allowed `D-85` to reason about a world this repository does not operate in.

**Governance reaches Lane B as a flag, not as a document.** When a check fires, Lane B fixes the code the flag names. It is not expected to read the register, resolve a tier question, or decide scope. That is the whole purpose of the lane split.

### `D-85`'s cost was wrong

`D-85`, recorded the same day, accepted friction on the premise that **"Lane B must split commits"** — a dependency change landing separately from the code that uses it.

**That premise assumes Lane B edits build config. Under this principle it never does.** The three false-crossing classes measured in `D-85` — `bun add` + code, a `tsconfig` alias + code, a `next.config` change + code — **only arise if Lane B is the one making those edits.** There is no split for Lane B to make.

**The real cost is a blocking handoff, not commit hygiene.** When Lane B discovers a dependency it needs mid-work, it stops and waits for Lane A to provision it. That lands on **throughput**, not on `git bisect` or review quality.

**`D-85`'s disposition is unchanged and, in fact, strengthened.** Keeping build config in Lane A is coherent precisely *because* Lane A provisions it in advance. Only the stated cost was wrong, and it is corrected here rather than left to be discovered in S1.

### Lane A's intake loop — named, and unmechanized

Lane A's own retrospective and regression cycle is driven by two upstream sources. **Neither is currently detected by anything.**

**1. New governance from the libraries in use.** Nothing watches upstream for convention or rule changes that would alter what this repository should require. `G54` is already open on exactly this — graphify's upstream command surface is unverified, deferred on a Python toolchain. **No new gap is opened; `G54` is the library half of this loop** and is named as such here rather than duplicated.

**2. Updates in the governing document portfolio.** The portfolio is **13 documents**, and the `docs/governance/` half is **living, not frozen**. `alpha-portfolio-business-continuity-implementation-plan.md` — **Tier 1 under `D-74`** — changed on 2026-08-21; `requirements-traceability-map.md` on 2026-08-20; `raci-involvement-matrix.md` on 2026-08-19.

**`tier-sweep` is register-driven.** It verifies that a *decision* reached a named tier. **Nothing verifies the inverse** — that a change in a governing document reached its derived tiers. The highest tier in the hierarchy can move and no check notices. **Opened as `G70`.**

This is the structural inverse of `G68`: that gap was *"the sweep cannot see the Tier 1 document when a decision claims it."* This one is *"the sweep never looks at the Tier 1 document at all."*

### Tier applicability (`D-54`)

| Item | Register | Agent files | Build spec | Inventory | `SPECS-VERIFICATION` | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-86` principle + cost correction | ✅ §5.14at | ✅ shared core, replaces `D-85` text | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `G70` opened | ✅ §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Build spec is unaffected** — it carries no split-commit text (verified: 0 occurrences) and no scope, sequence or DoD moves. **Inventory unaffected** — `G70` is specified, not built, so no file is created. **`SPECS-VERIFICATION` unaffected** — no check is added or changed; when `G70` is built it will need a section there, and that is a later pass.

### Scope limits

Records a principle, corrects a cost, opens `G70`. **Changes no lane assignment and no map** — build config remains Lane A per `D-85`. **Builds no check.** Does not repair `agent-stats` (`D-77`), `docs-drift` (`D-78`), `G67` or `G68`; does not resolve `G54`. Authorizes no product code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

## 5.14au `D-87` — Lane A's Queue Closed: Four Checks Repaired or Added, One Claim Struck

**Applied 2026-08-21 by Lane A** on the Chief Editor's instruction to work the open queue to closure. Closes `G67`, `G68`, `G70` and `D-78`; answers and closes `D-77`. `C-14` now runs **nine** checks, **six** of which reach CI.

### `D-77` — the answer is an upstream defect, not a misconfiguration

The shared core claimed *"`graphify agent-stats` attributes from CLI transcripts instead"*. It reports **0 facts** across 103 commits, and `sync --full` reports `parsed 5, 0 in-repo`.

**Cause, located precisely.** `repoSlug(repoRoot)` is `repoRoot.replace(/[^A-Za-z0-9]/g, "-")`, which for `C:\git\my-editorial-app` yields `C--git-my-editorial-app` — **exactly** the transcript directory Claude Code writes. But the filter is:

```js
if (repoSlug2 && !name.startsWith(repoSlug2 + "-")) continue;
```

`dir === slug` is **true**; `dir.startsWith(slug + "-")` is **false**. The predicate demands a trailing separator that Claude Code never appends, so **every transcript is skipped**. An off-by-one-separator bug in `@sentropic/graphify`, not a setting on this side.

**Disposition: the claim is struck**, not repaired. Patching a global npm install is not durable, `CLAUDE.md` forbids swapping distributions (`G50`, `G52`, `G54`), and inventing a sibling directory to satisfy the prefix would be working around a defect rather than recording it. The shared core now says attribution is **unavailable, not merely unread**, and names the cause so the next reader does not re-derive it. Reporting upstream remains open and is not blocked by anything here.

### `G67` — the preamble is covered

`CLAUDE.md` lines **1–138** were byte-identical to `AGENTS.md` but sat outside the `<!-- SHARED CORE` marker, so `shared-core-hash` never compared them. That region holds *"build straight through the sprints until the app works end-to-end"* — the instruction behind every crossing `D-75` records. **The text most able to cause a crossing was the text nothing protected.**

Core and preamble now report as **separate hashes**, so a reader can tell which region drifted. `.agents/rules/graphify.md` is **excluded by design** — its preamble is 6 lines and never carried the build rules; including it would fail permanently and teach everyone to ignore the check.

### `G68` — the Tier 1 document is mapped

`tier-sweep` had no entry for `alpha-portfolio-business-continuity-implementation-plan.md`, which `D-74` places **above** `Modular_PRD`. A column naming it was **rejected as unknown rather than verified**, so propagation into the highest tier was checked by nobody. Mapped, and **`D-79`'s dropped tier column is restored**.

### `D-78` — `docs-drift` can now fail

It tested for `.graphify/needs_update`, which **nothing writes**: `.git/hooks/` is empty and the only reference in the repository was the check reading it. It reported `PASS synced` against a modified document and stayed "synced" for a full session while the graph was stale.

It now compares `branch.json.lastAnalyzedHead` against `git rev-parse HEAD`, plus the `stale` flag. **It caught a real staleness on its first live run** — HEAD at `87e62ad`, graph analyzed at `b120c72`.

**Known behaviour, not a defect:** this check is red between a commit and the next `hook-rebuild`, because the graph genuinely is stale in that window. One command clears it, and it skips in CI.

### `G70` — the inverse sweep exists

`tier-sweep` is register-driven: it verifies a **decision** reached a tier. Nothing verified that a governing **document** reached its derived tiers, and `docs/governance/` is **living, not frozen**.

`source-sweep` adds two signals: **frozen documents pinned by SHA** (`docs/PRD.md`, the Charter, `0001_init.sql`), and **governing documents that changed after the register last moved**. The second is a heuristic, and the remedy is to record a decision — *"no tier is affected"* being a perfectly good decision to record. That is `D-54`'s state-the-unaffected-tier discipline applied to the source side.

**Zero false positives at HEAD** across 13 governing documents.

### Stated limits

- **`source-sweep` compares commit order, never content** — the same arrival-not-correctness limit `G65` records for the tier sweep.
- **`source-sweep` skips on a shallow clone.** CI checks out at depth 1. Making it run needs `fetch-depth: 0` in `.github/workflows/ci.yml`, which is **Lane C's** (`D-84`) — **specified here, not applied.** This is the first item to enter Lane C's queue since `D-84` emptied it.
- **`docs-drift` detects graph staleness, not document correctness.**
- **Three checks skip in CI**, so a local `9/9` and a CI `6/6` are both correct.

### An error worth recording

An earlier negative test used `git reset --hard` while tracked-file edits were uncommitted, discarding `G67`, `G68`, `D-78` and the runner wiring. All were redone from the same content and nothing was lost permanently, but **the work was committed at `87e62ad` before continuing** rather than carried further uncommitted. Negative tests that move `HEAD` must not run over a dirty tree.

### Tier applicability (`D-54`)

| Item | Register | Agent files | `SPECS-VERIFICATION` | Inventory | Build spec | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-87` closures | ✅ §5.14au | ✅ core, counts + `D-77` | ✅ §11 | ✅ `source-sweep.mjs` | ✅ §4 check list | **— unaffected** |

**`Modular_PRD` unaffected** — verification tooling is not a product requirement.

### Scope limits

Closes `G67`, `G68`, `G70`, `D-78`, `D-77`. **Adds no enforcement** — `D-82` stands: nothing prevents a crossing. Does not repair `agent-stats` (struck, not fixed) and does not resolve `G54`. Sets no CI depth, adds no `CODEOWNERS`, sets no branch protection. Authorizes no product code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

## 5.14av `D-88` — `G54` Row Corrected, `G71` Found and Closed, `D-82` Given Its Prevention Half

**Applied 2026-08-21 by Lane A** on the Chief Editor's instruction to close `G54` and `D-82`. Opens and closes `G71` in one pass; opens `G72`.

### `G54` needed no work — its row was stale

`G54` was **closed 2026-08-20 by `D-60`**, verified from source with nothing installed. `docs/graph-fragments/README.md` §6 has carried the full closure — including that the recorded route (install `uv`, install `graphifyy`, diff `--help`) *"was never necessary"* — for two days.

**§5.1 still read `Open — deferred by decision … Needs a Python toolchain`.** That line was quoted repeatedly during this session as a live blocker. It was not one.

**No Python was ever required.** The correction is a row, not an investigation.

### `G71` — why the register contradicted itself and nothing noticed

`D-60`'s tier table marks **Register ✅**. But `tier-sweep` maps `register` to `files: []` — *"the file being read; a ✅ there is true by construction."* So the ✅ proved nothing about §5.1, and §5.1 and §5.14u sat in **one file giving two answers** with every check green.

`decision-status` covered only the `Q`-series. **Gaps had no equivalent cross-check.**

**Closed in the same pass by direction D**: every `G`-row's §5.1 status against the sections that claim to close it — a `## 5.14x` heading naming the gap with *"closed"*, or a scope-limits sentence opening *"Closes `GNN`"*. Deliberately narrow, so prose that merely mentions a gap does not read as a closure claim.

**Built before the fix, and it earned that order**: on its first run it reported `G54` and **nothing else** — one finding across **65 gap rows and 14 closure claims**. Zero false positives, and the defect was found by the control rather than by the author asserting it.

### `D-82` — the prevention half, without forbidding anything

`D-82` recorded that nothing **prevents** a crossing: `lane-boundary` reports one afterwards, and CI runs after a commit lands. `D-84` then established that a pre-commit hook is orchestration and therefore **Lane A's to build**, which is why this is now possible.

**`.githooks/commit-msg` → `scripts/lane-gate.mjs`.** It does **not forbid crossings** — `D-83` measured that most historical multi-lane commits were legitimate, and a hard block would stop authorised work and be uninstalled within a day. It requires a **declaration**:

```
Lane-Crossing: <reason>
```

**Three design choices, each with its reason:**

- **Tracked in `.githooks/`, not `.git/hooks/`.** An uncommitted hook silently protects nobody who has not installed it — the exact failure mode of `needs_update` (`D-78`) and the `${TMPDIR}` marker (`D-81`). Activated by `bun run hooks:install`, also wired to `prepare`.
- **The classifier is imported from `lane-boundary.mjs`**, now exporting `classify`. A hook carrying its own copy of the lane map would drift from the check silently — the defect this apparatus exists to catch.
- **`--no-verify` is left open, deliberately.** A gate with no escape is a gate people uninstall. Bypassing hides nothing: `lane-boundary` still reports the crossing afterwards.

**Tested four ways:** single-lane commit allowed; real A+B crossing **blocked**, naming both lanes and the files; the same crossing **allowed once declared**; and end-to-end through the real git hook, where the commit was **refused and `HEAD` did not move**.

**`D-82`'s structural finding is now half-answered, and the half that remains is stated.** Local commits are gated. **CI still runs after a push, and branch protection remains a GitHub setting rather than a file** — outside every lane, and the Chief Editor's.

### `G72` opened — the residual `D-60` named and nobody tracked

`D-60`'s scope limits say *"The graph-schema question is newly named and **not resolved**."* `README.md` §6 calls it *"the real residual risk"* and *"the only live item should a swap ever be reconsidered."* **It was given no identifier**, so it appeared in no index and no check. Recorded as `G72` — **not resolved here**, only made findable.

### Tier applicability (`D-54`)

| Item | Register | Agent files | `SPECS-VERIFICATION` | Inventory | Build spec | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-88` | ✅ §5.14av | ✅ the gate + trailer | ✅ §12 | ✅ two new files | ✅ §7 invariant 9 | **— unaffected** |

**Agent files are affected** because Lanes B and C will meet this gate and must know the trailer exists. **`Modular_PRD` unaffected** — development tooling is not a product requirement.

### Scope limits

Corrects one row, closes `G71`, installs a commit gate, opens `G72`. **Forbids no crossing** and changes no lane assignment. **Adds no CI check** — `C-14` remains nine. Sets no branch protection, adds no `CODEOWNERS`. Does not resolve `G72`, and does not revisit `G54`'s substance, which `D-60` settled. Authorizes no product code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

## 5.14aw `D-89` — Branch Protection Set; `D-82` Closed With Its Residual; `G72` to Backlog

**Recorded 2026-08-21 by the Chief Editor.** Closes `D-82`'s outstanding half, moves `G72` to backlog, and corrects four restatements that outlived their source.

### What was set, and what this record actually is

**Branch protection on `main`: a pull request is required, and a status check must pass before merge. `main` only** — the working branch stays ungated.

**This is not a measurement.** `gh` is not installed on this machine and no token is present, so branch protection **cannot be verified from here**. This decision records the **Chief Editor's statement** of what is configured. Stated plainly because the alternative — writing it as though it had been checked — is the exact defect this register keeps finding.

### `D-82` closes, and the residual is named

`D-82` held that nothing prevents a crossing: the rule was prose, and CI ran *after* a commit landed. Both halves now have an answer:

| Layer | Control | Since |
|---|---|---|
| Local commit | `.githooks/commit-msg` requires a `Lane-Crossing:` trailer | `D-88` |
| Merge to `main` | PR + required status check — **CI now runs before the merge, not after** | `D-89` |
| **Push to the working branch** | **nothing** | — |

**The residual is real and deliberate.** Every commit still lands directly on `docs/journal-2026-08-16` with no gate but the local hook, and `--no-verify` bypasses that. For Phase 1 this is the right trade — Lane A commits frequently and a PR per commit would be friction for no benefit. **It stops being the right trade when Lane B starts**, and that is the moment to revisit.

### Three dependencies, checked

**1. The required status check name is fragile.** The CI job is named `Typecheck · Lint · Test`, and those separators are **U+00B7 MIDDLE DOT**, not hyphens or bullets. GitHub matches the required check by that exact string. **If it was typed by hand with any other character, protection is configured and never gates** — a guard that fails open, the `D-81` pattern.

**Verify it**: the required check must read exactly `Typecheck · Lint · Test`. **Recommended fix:** rename the job to something ASCII, e.g. `verify`. `.github/workflows/` is **Lane C's** (`D-84`) — **specified, not applied.** This is Lane C's second queued item.

**2. The merge gate enforces six of nine checks.** `graph-coverage`, `docs-drift` and `source-sweep` all SKIP in CI — the first two read gitignored `.graphify/`, the third needs per-file history a depth-1 checkout lacks. **So a merge to `main` can pass while the graph is stale or a governing document has drifted.** Local `bun run check` remains the only place all nine run.

**3. The merge path changed, and earlier guidance is withdrawn.** Advice given during this session — `git switch main && git merge --ff-only <branch>` then `git push origin main` — **no longer works**: the direct push is now blocked. It was never written into any document, and is corrected here rather than left in conversation.

**The merge to `main` now goes through a pull request.** `main` remains a strict ancestor (**0 behind, 92 ahead**), so the merge is conflict-free and `merge=union` still never fires — `G63`'s scoping stands untouched.

### `G72` — backlog, with the choice recorded

**The distribution decision is settled and unchanged: `@sentropic/graphify`** (`D-51`), an attributed downstream extension of upstream `Graphify-Labs/graphify`. Nothing proposes a swap.

`G72` — graph-schema compatibility with upstream — is therefore **backlog: no work until a related issue surfaces.** It is not a live risk while `D-51` stands, and it is now findable rather than nameless, which was the whole point of opening it. **Command availability is already known** (`D-60`); **schema shape is not**, and that is the thing to verify first if a swap is ever reconsidered.

### Four restatements corrected

`D-82`'s finding was quoted in several derived documents and had gone stale in all of them:

- **The three rule files** said *"there is no `CODEOWNERS` and no branch protection, and CI runs after a push."* Two of those three clauses are now false.
- **`SPECS-VERIFICATION` §10** said *"`D-82` stands unchanged: CI runs after a commit lands."*
- **`SPECS-VERIFICATION` §12** said *"branch protection is a GitHub setting rather than a file — outside every lane."* True as a fact, stale as a limit.
- **`SPECS-VERIFICATION` §10** also still restated `D-82`'s bootstrap claim — *"every mechanism able to enforce `D-75` sits on Lane C's surface"* — which **`D-84` narrowed a day earlier and did not propagate here.** A restatement that outlived a correction, in a document that carries `[V1]` markers precisely so this does not happen.

### Tier applicability (`D-54`)

| Item | Register | Agent files | `SPECS-VERIFICATION` | Build spec | Inventory | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-89` | ✅ §5.14aw | ✅ protection + residual | ✅ §10, §12 | **— unaffected** | **— unaffected** | **— unaffected** |

**Build spec unaffected** — no scope, sequence or DoD moves, and the check count is unchanged at nine. **Inventory unaffected** — no file created or retired; branch protection is a repository setting, not an artifact.

### Scope limits

Records a setting, closes `D-82`, backlogs `G72`. **Verifies nothing** — the protection is asserted, not measured. **Changes no code, no check and no lane assignment.** Does not rename the CI job (Lane C), does not deepen the CI checkout (Lane C), does not resolve `G72`. Authorizes no product code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

## 5.14ax `D-90` — The Handoff Channel: Lane B Can Now Speak Without Crossing

**Applied 2026-08-21 by Lane A** on the Chief Editor's instruction to prepare Lane B's environment before Lane B starts. Creates `docs/handoff/` and `C-14` check 10. Names the location `D-75` required and never specified.

### The gap this closes

`D-75` mandates a handoff at every lane boundary — *"record what is done, what is specified-not-applied, and what is open, then stop"* — and **named no location for it.** No handoff surface existed anywhere in the repository.

Meanwhile Lane B's surface is `app/`, `lib/`, `components/`, `supabase/`, `__tests__/` — **nothing in `docs/`.** So to report a spec defect, request a dependency, or record that it is blocked, Lane B had to edit `docs/`: an A+B crossing that `.githooks/commit-msg` now blocks (`D-88`).

**Lane B could not speak without crossing.** The gate installed one commit earlier would have blocked the first thing Lane B tried to say.

### Ownership — deliberately none, and why that is not the instruction given

The Chief Editor's instruction was a **Lane-B-owned** directory. **Implemented as unmapped instead**, and the deviation is recorded rather than quietly made.

Under Lane-B ownership, **Lane A's reply becomes a crossing on every ordinary use** — a response normally lands with the doc update that answers it, which is Lane A's surface. The channel would fight the gate on precisely the flow it exists to serve.

**Unmapped is the principle this register already settled twice.** `G63`: a per-file merge rule cannot fit a file carrying two kinds of content. `D-85`: `package.json` carries Lane A's scripts and Lane B's dependencies, so attributing it to one misclassifies the other half. **A genuinely joint surface should not be attributed to one owner.** `lane-boundary` reports unmapped paths in its detail line, so nothing here is invisible.

### The shape

**One file per entry**, `B-NNN-<slug>.md`, not a shared log. A single append-only log would mix append-only entries with current-value `Status` fields — the exact mixed-file trap `G63` recorded, and `docs/handoff/` falls under `*.md merge=union`, which is right for the first and wrong for the second.

Four kinds — `dependency`, `spec-defect`, `blocked-on-decision`, `finding` — each routing to a different Lane A action. Three dispositions — `Acknowledged`, `Answered`, `Withdrawn`.

### Check 10 closes the loop

`scripts/checks/handoff-response.mjs` fails on a malformed entry, on `Answered` with an empty response, and on **`Open` with no disposition — the "feedback sits unread" case.**

**It deliberately does not fail on an open entry that has been acknowledged.** A queue is healthy. Failing on one would make `bun run check` red whenever Lane B has a pending request, and a check that is red in the normal case is a check people stop reading — the same reasoning `D-83` used to make `lane-boundary` report a crossing rather than forbid one.

**Acknowledging is not answering.** The check requires that nothing sits unseen; it does not demand a fast answer.

**Negative-tested three ways:** open-with-no-disposition raised `FAIL`; **acknowledged-but-still-open passed**, which is the case most likely to be got wrong; `Answered` with an empty line raised `FAIL`. Probe removed.

### Stated limits

- **Form, not substance.** It cannot tell whether an answer is correct or a `Withdrawn` justified — the arrival-not-correctness limit `G65` records for the tier sweep. Reading the entries is still a person's job.
- **It cannot make Lane B write an entry.** A blocker Lane B never records is invisible to it.

### Tier applicability (`D-54`)

| Item | Register | Agent files | `SPECS-VERIFICATION` | Inventory | Build spec | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-90` | ✅ §5.14ax | ✅ channel + kinds | ✅ §13 | ✅ three new files | **— unaffected** | **— unaffected** |

**Build spec unaffected** — no scope, sequence or DoD moves; S0 and S1 are unchanged by this. **`Modular_PRD` unaffected** — a development channel is not a product requirement.

### Scope limits

Creates a channel and a check. **Answers no feedback** — there is none yet, and the first entry is Lane B's to write. **Starts no sprint** and unblocks nothing: S1 remains gated on `Q11` via `G64`. Does not resolve the four gaps this pass surfaced (S0's mixed-lane deliverables, Lane B's missing entry point, `G27`'s unnamed draft location, the stale `AGENTS.md` tail) — those are **drafted, not applied.** Authorizes no product code, schema, migration, or deployment. `0001_init.sql` untouched; `0002` unwritten.

---

## 5.14ay `D-91` — Lane B Made Startable: S0 Single-Laned, an Entry Point Written, `G27` Closed

**Applies the four gaps `D-90` surfaced and left drafted.** `D-90` built the channel Lane B
reports *through*; none of it made Lane B able to *start*. These four would each have bitten on
its first day, and the first three are one dependency chain, not four independent fixes.

### The parent: S0's deliverables mixed lanes

`V1-BUILD-SPEC.md` §5.1 listed S0 as `lib/config/build-config.ts` · `lib/config/flags.ts` ·
`docs/DECISION_LOG.md` · `docs/CONFIG_LOG.md` · draft `0002` · Stripe removal.

**Two of those are `docs/`, which is Lane A.** Lane B's very first sprint therefore required a
lane crossing — and one commit earlier, `D-88` installed a hook that blocks exactly that. **The
gate and the sprint plan were in direct contradiction, and nothing detected it** because
`lane-boundary` classifies commits, not plans. A sprint plan is not a commit until someone
executes it, which is the moment the contradiction would have surfaced: at Lane B's first
`git commit`, with the work already done.

**Resolved by ownership, not by permission.** The two logs are **not shared artifacts Lane B
happens to write** — their content is citation into the governing set and `OD` dependency,
which is governance. Under `D-86` Lane B is explicitly *not* expected to read the register. **A
lane cannot own a file whose content it is instructed not to understand.**

So Lane A owns both logs **content included**, and provisioned them ahead of the sprint — the
`D-86` principle extended from dependencies to governance content. Lane B implements
`CONFIG_LOG.md`'s rows in `build-config.ts`; it does not author them. S0's row is now **split by
lane**, with Lane A's half already ✅.

**This is not `docs/handoff/`'s answer reused.** That directory is unmapped because Lane B
raises and Lane A answers, so either attribution makes the other side a crossing. Here there is
no such symmetry: **one lane writes, the other reads.** Ownership is the right instrument, and
using the unmapped device again would have been pattern-matching, not reasoning.

### What the logs actually say — and one thing worth stating plainly

`CONFIG_LOG.md` carries every configurable value with its source and OD. `DECISION_LOG.md` is
the **ratification ledger**, and it is deliberately **not** a second register: it cites
`V1-DECISION-REGISTER.md` and never restates it. A `DECISION_LOG.md` that paraphrased the
register would be `summary_outlived_source` by construction.

**Its §3 ratification table is empty, and the emptiness is the finding.** `OD1`–`OD3` have
gated this build since the Charter and **not one has been ratified.** Two values —
`DATA_RETENTION_ARCHIVE_DAYS` (`A6`) and `SCORING_REVIEW_THRESHOLD_ARTICLES` (`A4`) — are live
in Phase 0 with nobody's approval behind them. Both facts were true before this pass; neither
had a surface that showed them.

### `G27` closed — a location asserted, never decided

`D-68`'s rationale states *"`G27` holds its draft outside the apply path at
`docs/v1/drafts/`."* **The §5.1 row said `Open`, the inventory said "Location decision", and the
directory did not exist.** The register had answered the question in a paragraph about something
else and never recorded the answer as an answer.

**This is `D-90`'s defect in a second instance** — `D-75` required a handoff and named no place;
`D-17` required a hold and its place was named only in passing. Both were found the same way:
by trying to use the thing.

`D-91` adopts `docs/v1/drafts/` rather than proposing an alternative. **The register wins
(`D-58`)**, and an unrecorded assertion in the register still outranks a derived tier's
preference. *(An earlier draft of this pass proposed `docs/specs/drafts/` and was wrong to —
it would have created a second location for one artifact.)* The directory now exists with a
`README.md`; **the draft file itself stays unwritten**, since `G64`/`Q11` still gate it.

The `.sql.draft` double extension is deliberate: a `.sql` file is something a runner eventually
runs. **"Do not apply" is a note; a location and an extension are properties.**

### Lane B had no entry point

`AGENTS.md`'s Codex tail was **five lines, all of them about graphify.** Nothing said what Lane
B's surface is, where to start, what its first sprint delivers, that `bun add` is forbidden, or
that `docs/handoff/` exists. **The shared core told Lane B what it may not do; nothing told it
what to do.**

Rewritten as an entry point: the three S0 deliverables, the DoD, the four rules that would
otherwise cost a rejected commit, and the handoff procedure. **"A blocked handoff is the correct
outcome, not a failure"** is stated explicitly — `D-86` accepts a blocking wait over a split
commit, and an agent that does not know that will work around the block instead.

### The stale tail — `D-87`'s fix reached one file of three

`D-87` struck the `.graphify/needs_update` instruction from `CLAUDE.md`'s tail: nothing writes
that file in this repo, so its absence is no signal. **`AGENTS.md` and `.agents/rules/graphify.md`
kept it** — the shared-core hash compares only the region between the markers, and **tails are
excluded by design**, so a per-agent correction propagates to nobody.

Both now carry the corrected `branch.json` check. **The exclusion is not a defect to fix** —
tails differ per agent by definition, and hashing them would fail on every legitimate difference.
**The residual stands: a correction to one tail reaches one agent, and no control detects it.**
Recorded as `G73` rather than papered over.

### What this does not do

**Does not start S0.** Lane A's half of S0 exists; Lane B's does not, and Phase 2 has not opened.
**Unblocks no migration** — `0002` remains gated on `Q11` via `G64`, and `docs/v1/drafts/` being
ready changes only where the draft will sit, not whether it may be written. **Ratifies nothing** —
`DECISION_LOG.md` §3 is empty and `OD1`–`OD3` are exactly as open as before. Authorizes no
product code, schema, or deployment. `0001_init.sql` untouched.

### Tier applicability (`D-54`)

| Item | Register | Agent files | Inventory | Build spec | `SPECS-VERIFICATION` | `Modular_PRD` |
|---|---|---|---|---|---|---|
| S0 single-laned | ✅ §5.14ay | ✅ Lane B tail | ✅ both log rows | ✅ §S0 split by lane | **— unaffected** | **— unaffected** |
| `G27` closed | ✅ §5.1 + §5.14ay | **— unaffected** | ✅ row + S0 effect | ✅ draft path named | **— unaffected** | **— unaffected** |
| Lane B entry point | ✅ §5.14ay | ✅ `AGENTS.md` tail | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| Stale tail struck | ✅ §5.14ay | ✅ two tails | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `G73` opened | ✅ §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**`SPECS-VERIFICATION-APPARATUS.md` unaffected** — no check was added or changed by this pass.
**`Modular_PRD` unaffected** — none of this is a product requirement; §8 does not move because no
sprint closed and no tier opened.

### Condition carried forward

**`C-17` — the coupling between `CONFIG_LOG.md` and `build-config.ts` is unchecked.** Lane A
owns the rows and Lane B owns the code, so the two can drift with every check green. The fix is
a `C-14` check pairing each `CONFIG_LOG.md` variable against a declaration in
`lib/config/build-config.ts` in both directions. **Not built here on purpose:**
`build-config.ts` does not exist, so the check would pass vacuously on every run — a
`probe_that_cannot_fail`, which is the thing this apparatus exists to prevent. **Install it in
the same pass that lands `build-config.ts`.** Phase: **S0**.

---

## 5.14az `D-92` — Lane C's Environment: the Channel Widened, the Tallies Removed, a Work Order Written

**The Lane C counterpart of `D-90` + `D-91`, and it did not consist of copying them.** Two of
the four items are defects in controls installed by those very decisions — found only because
preparing a second lane exercised them from a direction the first never did.

### The parent: the channel could not hear Lane C

`docs/handoff/` was built for Lane B. Its check filtered filenames on `B-` alone, so **a
`C-NNN` entry was not merely unchecked — it was invisible.** `handoff-response` would have
reported *"channel installed, no entries yet"* with Lane C's blocker sitting in the directory.

**That is the precise failure the check exists to prevent, aimed at the one lane it did not
cover.** `D-90` reasoned carefully about *acknowledged-versus-answered* and not at all about
*whose entries count* — a control scoped to one lane **cannot fail for the others**, and a
control that cannot fail is the shape this apparatus exists to catch.

Filter widened to `[BC]-`, `README.md` and `TEMPLATE.md` generalised to both lanes. **Negative
tested both directions:** an open unacknowledged `C-001` raised `FAIL`; the same entry
acknowledged passed. Probe removed.

**Lane A raises nothing here.** It answers. A Lane A concern belongs in the register, so the
filter covers `B-` and `C-` and deliberately not `A-`.

### The tallies had to go before Lane C could be told anything true

**`bun run check` runs a number of checks, and four documents asserted that number as a
literal.** All four were wrong. The build spec was wrong **twice in one sentence**: *"Extended
to nine"* followed by *"a local `8/8`"*.

`G55`, `G56` and `G58` all record the same mechanism — **propagate the fact, never the tally** —
and the two rule files that state that rule **carried a tally three paragraphs later.**

**The fix is not a corrected number.** A corrected number drifts again at the next check.
Removed from the shared core, the build spec and `SPECS-VERIFICATION-APPARATUS.md`, and replaced
with **the rule that determines CI coverage: what a check reads.** `graph-coverage` and
`docs-drift` need gitignored `.graphify/`; `source-sweep` needs full history. Those three SKIP;
everything else runs. **A CI total below the local total differs by exactly those three.**

**This was a hard prerequisite, not tidying.** Lane C's first queued item — `fetch-depth: 0` —
**changes how many checks run in CI.** Landing it first would have made four documents wrong,
including both rule files every agent reads first.

### Lane C had no work order and no entry point

The two items queued for Lane C since `D-87` and `D-89` existed **only as prose inside register
sections about other things** — the same defect `G27` carried, now on the execution side.
Under `D-86`'s principle a build lane is not expected to read the register; **Lane C therefore
had no way to learn what it owed.**

`.github/WORKFLOWS-SPEC.md` is that work order. **`.github/` minus workflows is Lane A's**
(`D-84`), so the spec sits one directory above the surface it governs: single-lane for its
author, unmissable for its reader.

`.agents/rules/graphify.md`'s tail was three lines, all graphify — **exactly what `AGENTS.md`
was before `D-91`.** Rewritten as an entry point: the surface, the phase, the two queued items,
four rules, and the handoff procedure.

### `C-Q2` cannot be finished by any agent — `C-18`

The CI job is named `Typecheck · Lint · Test` with **U+00B7 MIDDLE DOT** separators, and GitHub
matches a required check by that exact string. Renaming it to ASCII removes a guard that
**fails open** if the protection rule was ever typed by hand.

**But the rename and the protection rule must change together.** Rename first and the required
check never reports, so **every pull request blocks indefinitely.** That fails *closed*, which
is the safe direction — and is still a stoppage.

**The protection rule is a repository-settings act. No lane owns it**; `D-89` set the current
one by hand. Recorded as `C-18`: Lane C raises a `blocked-on-decision` entry naming both exact
strings and waits for confirmation. **Specified, not applied** (`D-56`).

### What this does not do

**Does not open Phase 3.** Lane C runs last; Lane B has not started, let alone closed.
**Applies neither queued item** — both are Lane C's to apply, and this pass writing them would
be the crossing it exists to prevent. **Changes no workflow file**; `ci.yml` is untouched.
**Answers no handoff entry** — there are still none. Authorizes no code, schema, migration, or
deployment. `0001_init.sql` untouched; `0002` unwritten; S1 still gated on `Q11` via `G64`.

### Tier applicability (`D-54`)

| Item | Register | Agent files | `SPECS-VERIFICATION` | Inventory | Build spec | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Channel widened to Lane C (`G74`) | ✅ §5.14az | ✅ core unchanged, Lane C tail | **— unaffected** | ✅ `WORKFLOWS-SPEC` row | **— unaffected** | **— unaffected** |
| Tallies removed (`G75`) | ✅ §5.14az | ✅ all three, core rehashed | ✅ §4 row | **— unaffected** | ✅ §3 line | **— unaffected** |
| Lane C work order | ✅ §5.14az | ✅ Lane C tail points at it | **— unaffected** | ✅ new file | **— unaffected** | **— unaffected** |
| `C-18` opened | ✅ §5.14az + conditions | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**`Modular_PRD` unaffected** — CI and lane channels are development apparatus, not product
requirements; §8 does not move because no sprint closed and no tier opened. **Build spec
unaffected by the channel widening** — no scope, sequence or DoD moves.

**Shared-core hash changes to `daefb779944a`** — the tally removal edits the hashed region, so
all three rule files were rewritten together. A one-file edit would have failed check 1, which
is the control working.

### An unadvertised cost of deleting a tally — worth knowing before the next one

**Decision anchors travelled inside the sentences that carried the counts.** Removing the
tallies silently removed `D-83` from all three rule files and `D-72` from
`SPECS-VERIFICATION-APPARATUS.md` — **two tier claims that had been true for days regressed as a
side effect of a correctness fix.**

`tier-sweep` caught both, one run apart, and both were fixed by **restoring the reference, never
by dropping the claim.** Recorded because the same thing will happen to anyone deleting prose
from a governed document: **check what the sentence was anchoring before deleting it.**

---

## 5.14ba `D-93` — The Missing Critic: Phase Closure, the Return Path, and the First Proof

**Closes the last structural hole in `D-75`.** The development lane model had **three proposers
and no critic**: Lane A wrote the specs, wrote the checks that verify the specs, and judged
whether its own output passed. `D-82` recorded this as *"`D-75` cannot enforce itself"* and it
was never closed, because **no check can close it** — every control detects **shape**, never
**judgment**.

### The roles, and why the Critic is not a fourth agent

| Role | Held by | Cadence |
|---|---|---|
| Proposer | Lanes A, B, C | continuous, within surface |
| **Critic** | **Lane A, on a separate turn** | once per phase |
| **Judge** | **the user** | once per phase boundary — three times in the build |

**A fourth agent was considered and rejected.** It would add a fourth surface, a fourth set of
crossing boundaries and a fourth phase — the cure becoming the disease, which the proposal named
as its own first risk. **The cost of role-instead-of-agent is stated rather than hidden: the
critic shares the proposer's blind spots.** Three mitigations: the separate turn, the reject
budget, and a Judge who is someone else entirely.

**The Judge acts at boundaries only.** Per-decision judging degrades to a rubber stamp — the
failure mode this apparatus exists to catch, arriving by convenience rather than by drift.

### What now closes a phase — four conditions, not three

`D-19` gave sprints an artifact Definition of Done. **Phases never got one**, so a phase ended
when Lane A said it ended — **`G32`'s shape one level up.** `V1-PHASE-CLOSURE.md` §1 sets four
conditions: artifacts exist, every handoff entry has reached a **terminal** disposition, a critic
pass is recorded, and the Judge approves.

**Condition 2 deliberately raises the bar check 10 sets.** During a phase, `Acknowledged` and
still `Open` passes — a queue is healthy and a permanently red check is an ignored check. **At a
boundary it does not pass.** Acknowledging is not answering, and a phase boundary is precisely
where that distinction is supposed to bite.

### The return path — `Reopens-Phase:`

**Phases run 1 → 2 → 3; findings do not.** A Phase 2 finding can require Lane A work in a closed
phase, and until now the only options were an **undeclared reopening or a dropped finding.** One
template field records it; the phase's register row is marked **Reopened**, citing the entry.

**A reopened phase is not a failure.** A phase never reopened across a whole build more likely
means findings were dropped than that none existed.

**No check enforces this, deliberately (`C-19`).** No phase is closed, so a check would pass on
every run without reading anything — `probe_that_cannot_fail`, the reasoning that already
deferred `C-17`.

### The proof of concept — and it did not go the flattering way

**Lane B started Phase 2 and, before writing code, filed three entries.** That ordering matters:
**the feedback channel was exercised before the first line of application code existed**, which
is the strongest available evidence that `D-90`/`D-92` built the right thing.

All three were **defects in Lane A's own output**, and all three stand:

- **`B-001`** — `D-91` **made a derived tier contradict the register in the same pass that wrote
  the register's text.** The register said the `0002` draft *"stays unwritten"*; the build spec
  row `D-91` wrote listed the draft path as an **S0 Lane B artifact**. `D-58` applied: the
  register wins. S0 delivers the **hold location**, not the draft.
- **`B-002`** — **`CONFIG_LOG.md` declared itself authoritative while incomplete.** No rows for
  `EDITORIAL_ROUTE`, `POC_ROUTE` or `DOMAIN_APEX` — all decided by `D-59` — and `FLAG_S1`…`FLAG_S9`
  with neither canonical names nor Phase 0 values. **"Rows are authoritative" plus a missing row
  is an instruction to stop**, which is exactly what Lane B did rather than inventing values.
- **`B-003`** — Lane A **removed a dependency's consumers and left the dependency.** `stripe`
  remained in `package.json` and the lockfile, both Lane A's under `D-86`.

**Three arbitrations were required to answer them**, and each is recorded where it belongs rather
than in this section: the `D-58` precedence call (`B-001`); **§7 semantic flag names beat the
§S0 abbreviation**, because §7 carries the definitions and enablement conditions (`B-002`); and
**`FLAG_FOUR_EYES_LINE_SEPARATION` / `FLAG_LINE2_HUMAN_PRIMARY` are derived views, never stored**
— two sources of truth for one fact is the drift mechanism, and ratifying `OD1`/`OD2` must move
one value, not two.

### What the critic pass found that Lane B did not

- **`F4` → `C-20`. Phase 2 began before Phase 1 closed.** `D-75` requires sequential phases and
  nothing enforces the order. **`D-82` in the phase dimension rather than the surface dimension.**
- **`F5`. Lane A shipped three defects into a phase it was about to declare complete and its own
  checks caught none of them.** Every check verifies **arrival**; none verifies **correctness**.
  `G65` recorded that limit for one check — **it is a property of the whole apparatus**, and
  stating it is the honest disposition, not a defect to fix.
- **`F6` → `C-21`. `G75` removed one tally and did not sweep for others.** The shared core still
  states *"413 pinned packages"*. Removing `stripe` **happened not to change it** — luck, not
  design.

### What this does not do

**Does not close Phase 1** — condition 4 is unmet and the verdict row is empty by design; Lane A
does not write it. **Does not start or close any sprint.** S0's Lane B artifacts are Lane B's and
`0002` stays unwritten — `Q11`/`G64` gate it exactly as before. **Adds no check** and authorizes
no schema, migration or deployment. `0001_init.sql` untouched.

### Tier applicability (`D-54`)

| Item | Register | Agent files | Inventory | Build spec | `Modular_PRD` |
|---|---|---|---|---|---|
| Critic + Judge roles | ✅ §5.14ba | ✅ `CLAUDE.md` tail (Lane A only) | ✅ new file | **— unaffected** | **— unaffected** |
| Phase closure conditions | ✅ §5.14ba | **— unaffected** | ✅ new file | **— unaffected** | **— unaffected** |
| Return path | ✅ §5.14ba | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `B-001` corrected | ✅ §5.14ba | **— unaffected** | ✅ `0002` row | ✅ S0 Lane B row | **— unaffected** |
| `B-002` answered | ✅ §5.14ba | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `B-003` answered | ✅ §5.14ba | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `C-19`, `C-20`, `C-21` | ✅ conditions | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**`docs/handoff/` carries no column, and that is deliberate.** All three entries are marked
`Answered` with their dispositions, and the return-path field is in `TEMPLATE.md` and `README.md`
— but **the channel is not a tier under `D-29`.** Giving it a tier column would assert a
precedence position it does not hold. `tier-sweep` rejected the column on exactly that ground,
which is the check being right rather than inconvenient.

**`Modular_PRD` §8 unaffected throughout** — no sprint closed and no tier opened; the critic role
is development apparatus, not a product requirement. **`CONFIG_LOG.md` is not a tier** — it is
Lane A's authoritative surface, updated directly.

**`P3` lands in `CLAUDE.md`'s tail, not the shared core.** The critic pass is a Lane A ritual;
Lanes B and C do not perform it, and putting it in the hashed region would tell them to.
**Accepted cost: `G73` — a tail edit propagates to nobody.**

---

## 5.14bb `D-94` — The First Deferral Answered: a Manifest That Exists, a Phase-Start Rule, a Duplicate Removed

**The Judge deferred Phase 1 and was right to.** `D-93` created the Judge role one pass earlier;
**its first exercise found a defect neither the raising lane nor the critic pass found**, which is
the strongest evidence available that the role was worth creating.

### What the Judge caught — `F7`

**The closure specification asserted a condition it could not fail.** §1 condition 1 requires an
artifact list *"checkable by `ls`"*. **No list was ever written.** So condition 1 was satisfied by
assertion — `a_check_that_cannot_fail`, **inside the document created one pass earlier to prevent
exactly that shape.**

**Why the critic missed it, and this is the useful part.** The critic pass read the artifacts the
phase produced and asked whether each was sound. **It never asked whether the *set* of them was
defined.** A critic reading artifacts checks the contents of a set; **only the party asked to
*accept* the set asks whether the set exists.** That is a structural argument for the Judge being
a separate role rather than a stricter critic, and it was produced by the mechanism's first use
rather than by reasoning about it.

**Answered by §5A** — 30 paths across five categories, three declared exclusions, and
**`phase-manifest` (`C-14` check 11)** to make the list falsifiable. **Negative-tested four ways**
(§6.5). The third test is the one that matters: the first implementation flagged `ci.yml` —
correctly excluded as **Lane C's** artifact — because it conflated *"this was removed"* with
*"this belongs to another phase."* **A check that reports a disagreement true by design teaches
people to ignore it.**

**`§5A.6` exists because naming what is excluded is half of a manifest's value.** A list with no
stated boundary cannot be wrong.

### The phase-start rule — `B-004`

**A phase starts at the first authorized change to that lane's owned surface after the preceding
Judge boundary is accepted.**

Two consequences:

1. **Readiness feedback does not start a phase.** Read-only analysis and handoff entries from the
   lane that must execute a proposal are **evidence about what will deterministically fail**, not
   permission to begin. `B-001`–`B-003` did not start Phase 2.
2. **`43c51ce` did.** It landed `lib/config/build-config.ts`, a test, and the Stripe removal.
   **Phase 2 started early and part of non-feature S0 completed.**

**The commit is preserved, not re-described.** Re-labelling a landed commit as something else
would be the audit-trail defect this project's own product forbids — an issued record is
superseded, never edited. **The same rule now governs the Judge's own verdict:** the `DEFER` row
stays permanently and the resubmission adds a row rather than replacing one.

**`B-004`'s proposal contract is adopted verbatim** (§5B.1): every Lane A proposal states
intended outcome, deterministic failure condition, cause, preventive control, observable success
criterion, proving evidence or negative test, owner, and return path. **Lane C's half of it —
prove a deliberate failure stops the gate — is `SC-4`**, which `R3` already required and which is
the test of the tester.

### A limit no process can move — §5B.2

**The Judge accepts residual risk. An agent cannot.** No agent here acquires human *skin in the
game*, and none can accept legal, financial, or editorial liability. **`D-93` rejected the
fourth-agent option on cost-and-complexity grounds; it would have failed on this ground alone.**
Recorded because the cheap reading of `D-93` is *"a critic is a role, so a judge could be too"* —
and it could not.

### Four statements, one state — `§5` reconciled

The closure document simultaneously said Phase 1 was *"closure pending"*, said §6.4 was
*"Pending"* **beneath a filled `DEFER` verdict**, left the phase register's Judge field **blank
while a Judge had ruled**, and recorded Phase 2 as *"Started"* with no record of what started it.
**Four assertions about one state, and no check compares prose to prose.**

### `B-005` — a duplicate, not a new artifact

`.agents/skills/sync-docs/SKILL.md` was untracked and contradicted the lane map. **It was a
Codex-adapted copy of the tracked `.claude/skills/sync-docs/SKILL.md`**, produced by swapping
`CLAUDE.md` → `AGENTS.md` mechanically — which is precisely what generated *"`AGENTS.md`,
`AGENTS.md`, `.agents/rules/graphify.md`"* as the triple edit and *"Lane A — Codex"* as the map.

**Removed rather than corrected.** Two copies of one procedure is the drift mechanism, and
repairing the copy would have preserved it. **It should not have existed at all:** `D-54`
propagation is Lane A work, and under `D-86` governance reaches Lane B as a **flag, not a
procedure**.

**Following the finding surfaced worse.** The **tracked** original still carried `D-75`'s
pre-`D-84` lane map — `scripts/` and `.gitattributes` in Lane C — **and** the obsolete `7/7` /
`5/5` tallies. **The procedure that teaches propagation had never been propagated to.** `C-21`
predicted this class one pass earlier and named the wrong instance.

**Repaired structurally, not textually.** §1 now **cites** the shared core's lane map instead of
restating it, and §8 carries no total. **A procedure that restates a governed fact will drift
from it; one that cites it cannot** — `G75`'s lesson applied to a table rather than a number.

### The verification snapshot — the Judge's second condition

The previous submission reported *"10/10 checks pass"* **in a chat message and nowhere in the
record.** **A verdict cannot rest on evidence the record does not hold.** §6.4 now carries a
dated, commit-pinned snapshot reproducible in two commands.

### What this does not do

**Does not close Phase 1.** The verdict row is empty and Lane A does not write it. **Does not
restart Phase 2** — further Lane B work stays deferred pending the verdict. **Does not rewrite
`43c51ce`** or any landed commit. **Does not open Phase 3.** Authorizes no schema, migration or
deployment; `0001_init.sql` untouched, `0002` unwritten, S1 gated on `Q11` via `G64`.

### Tier applicability (`D-54`)

| Item | Register | Agent files | Inventory | Build spec | `SPECS-VERIFICATION` | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Phase 1 manifest | ✅ §5.14bb | **— unaffected** | ✅ closure row | **— unaffected** | ✅ check 11 | **— unaffected** |
| `phase-manifest` check | ✅ §5.14bb | **— unaffected** | ✅ new file | **— unaffected** | ✅ check 11 | **— unaffected** |
| Phase-start rule | ✅ §5.14bb | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `sync-docs` disposition | ✅ §5.14bb | **— unaffected** | ✅ removal + repair rows | **— unaffected** | **— unaffected** | **— unaffected** |
| Verification snapshot | ✅ §5.14bb | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Agent files unaffected throughout** — the shared core does not change, and `CLAUDE.md`'s tail
already carries the critic discipline from `D-93`. **`.claude/skills/sync-docs/SKILL.md` is not a
tier**; it is a Lane A procedure corrected directly. **Build spec unaffected** — no scope,
sequence or DoD moves; the phase-start rule governs *when a phase begins*, not *what a sprint
delivers*. **`Modular_PRD` §8 unaffected** — no sprint closed, no tier opened.

---

## 5.14bc `D-95` — The Omitted Judge Packet: `D-94`'s Resubmission Was Not Closable

**`B-006` is the durable record of a Judge packet that never reached the channel.** Lane A saw
only the `DEFER` row and answered the two entries in front of it; the broader closure review
against `eb1549d` was never dispositioned. **`B-006`–`B-010` are Lane B's transcription of it.**

**All ten of `B-006`'s items were verified against the artifacts before any was accepted. All ten
stand.** That verification mattered: `B-008` turned out to require a Chief Editor decision Lane A
must not make, and saying so is only possible after reading rather than agreeing.

### The parent: a control installed to stop a silent gap had one

**`phase-manifest` silently dropped every compound-path row.** `§5A.6` declares five exclusion
rows; the check reported **three**, because the pattern anchored a single backticked token
immediately before the closing pipe and a cell naming three paths matched nothing at all.

**A row that fails to parse produced no finding — it produced silence.** That is the precise
defect the check was installed one pass earlier to prevent, in the check itself. Fixed by
collecting **every** backticked path in the first cell, and a first cell with **no** path is now
reported rather than skipped. **Two new negative tests**: a compound row whose *second* path is
missing, and a row naming no path. The exclusion count moved from 3 to 9.

### `D-94` replaced four contradictions with a fifth

`B-006` items 5 and 6, and both are Lane A's.

**The phase-start rule contradicted its own application.** `§5B` said a phase starts *"after the
preceding Judge boundary is accepted"* and then said `43c51ce` — which predates any acceptance —
started Phase 2. **An act cannot open a phase by a rule it violates.**

**The normalized state is less flattering than the one it replaces:** *unauthorized Lane B
implementation activity occurred at `43c51ce`; **Phase 2 was never validly opened.*** The commit
stands as immutable history; only its **interpretation** is corrected, which is the only
correction an append-only record permits.

**Phase 1 was never "Reopened" either.** `D-94` marked it reopened by `B-004`/`B-005` — but
**reopening presupposes a closure that never happened.** Those were findings against an *open*
phase, which needs no mechanism. **The `Reopens-Phase:` fields were added by Lane A, not by Lane
B**, so removing them corrects Lane A's own annotation rather than editing a raised entry.

**§4 now distinguishes four states** — readiness feedback, unauthorized lane activity, a validly
opened phase, and a reopening — because **conflating them is what produced the contradiction.**

### `C-19` installed, and `B-010` was right that it could not wait

`C-19` said *install it in the pass that closes the first phase*, and `D-94` simultaneously
carried it as *a residual past closure*. **Those are incompatible**, and `B-010` said so.

**The deferral reasoning was also already stale.** `D-93` deferred the check because no phase had
closed, which would make it vacuous — but **the error it catches does not require a closed phase
to exist.** `B-004` and `B-005` carried `Reopens-Phase: 1` against a phase that never closed, and
the check reports exactly that. **Negative-tested three ways**, including the positive case where
a genuinely closed phase must pass.

### `C-17` installed — the direction the existing test could not see

`C-17` said *install it in the pass that lands `build-config.ts`*. **That pass was `43c51ce` and
Lane A did not**, so the split ownership `D-91` created ran a full cycle unwatched (`B-007`).

**The existing application test asserts that declarations already in the code cite
`CONFIG_LOG.md`.** It cannot fail when an authoritative row is missing **from** the code — and
that is the direction that matters, because it is the one where Lane A publishes and Lane B never
implements. `config-coupling` fails **both** ways; **negative-tested in both.**

**It found thirteen real gaps immediately, and `bun run check` is red because of them.** The
routes and the canonical flag set are declared authoritative and unimplemented. **That red is
correct: S0 is not done.** Softening it would be the ceremonial-check failure this apparatus
exists to catch.

**It also found two `CONFIG_LOG.md` defects Lane A had shipped:** `SCORE_FORMULA_VERSION` stated
only in prose, and `CATEGORY_BALANCE_WINDOW_DAYS · _ARTICLE_THRESHOLD` written as **one compound
cell naming two variables with the second abbreviated** — the same compound-cell blindness as the
manifest parser, in the document rather than the code. **A value stated in a sentence is not an
authoritative row, and an abbreviated name is not a name.**

### `C-21` finally swept — the tally was in the file every agent reads first

`C-21` named the class one pass earlier and Lane A fixed only some instances. **All three rule
files still said "413 pinned packages."** Removed; the shared core now states the rule and
`bun install` prints the number. **Core hash `a94aa18ee984`.**

### The remaining corrections

- **Conditions 2, 3 and 4 cited §3** — the critic-pass *discipline*, not the evidence (`B-006`
  item 4). **A condition that cites the wrong section cannot be checked by the person it is
  written for**, and the Judge is exactly that person. Condition 3 now also says **"against the
  final artifact set"**: the resubmission's critic pass predated the manifest, the new check and
  the skill repair, so it certified work it had never seen (`B-006` item 1).
- **The inventory marked `lib/config/build-config.ts` absent while it existed** (`B-006` item 2).
  **No check compares a row's mark against the filesystem.** `flags.ts` is the genuinely absent
  one, correctly so — Lane B refused a placeholder because existence would imply decisions.
- **The build spec never linked the phase contract** (`B-006` item 3). `D-94` called it unaffected
  on the reasoning that phases and sprints are different scopes. **True, and not a reason to hide
  the link** — sequence lives here.
- **`§5A.6` cited `F7` for an `F8` finding**, and the measurements prose said *"half … all three"*
  after the finding set grew past three (`B-006` item 7). **A count restated beside a growing list
  is `G55`'s mechanism, in the section that reports counts.**
- **The build spec still assigned drafting `0002` to S0** while its own artifact row said the
  opposite (`B-009`). S0 creates **only** the hold location.

### What Lane A refused to decide

**`B-008` — the later POC payment, cart, account and drain model.** None of its vocabulary
appears in any authoritative document. `NG-03` excludes monetization at Charter level and `X8`
removed the Stripe scaffolding, so **option 1 (record as deferred scope) is consistent with the
frozen set and option 2 (authorize POC scope) is a Charter-level act.** **Escalated to the Chief
Editor at the Alpha Portfolio parent level. Lane A infers no authority from conversation.**

**`B-009` — the `Q11` field shape.** The two *document* defects are Lane A's and are fixed. **The
shape decision is the Chief Editor's**; the register's two statements — `Q11` deferred past S1,
and `G64`/`Q11` must resolve before the `0002` draft — **cannot both govern the same sequence**,
and only a decision resolves that.

### What this does not do

**Does not close Phase 1** and **does not perform the new critic pass.** `B-006` item 1 requires a
critic pass **against the final artifact set**, and `D-93`'s first rule is that it runs **on a
separate turn from the work being criticised.** This pass *is* that work. **A critic pass
appended here would be the exact defect the rule forbids** — so it is the next turn's, not this
one's, and Phase 1 cannot be resubmitted before it.

**Does not validly open Phase 2** or treat S0 as complete. **Does not decide `B-008` or `Q11`.**
Authorizes no schema, migration or deployment. `0001_init.sql` untouched; `0002` unwritten.

### Tier applicability (`D-54`)

| Item | Register | Agent files | Inventory | Build spec | `SPECS-VERIFICATION` | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Manifest parser repaired | ✅ §5.14bc | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §14 | **— unaffected** |
| Phase-state contradictions | ✅ §5.14bc | **— unaffected** | ✅ `build-config` row | ✅ phase-contract link | **— unaffected** | **— unaffected** |
| `C-19` installed | ✅ §5.14bc | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §13 | **— unaffected** |
| `C-17` installed | ✅ §5.14bc | **— unaffected** | ✅ new file | **— unaffected** | ✅ §15 | **— unaffected** |
| `C-21` swept | ✅ §5.14bc | ✅ all three, core rehashed | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `0002` not an S0 artifact | ✅ §5.14bc | **— unaffected** | **— unaffected** | ✅ §S0 both places | **— unaffected** | **— unaffected** |

**`Modular_PRD` unaffected** — no sprint closed and no tier opened. **Its `Q11` row is stale
(`B-009`) and is *not* corrected here**: the row states a decision, and **editing it before the
Chief Editor decides would be Lane A answering `Q11` by edit.** Carried as `C-23`.

---

## 5.14bd `D-96` — Three Judge Rulings: Sprint Gates Phase, the POC Is Original Scope, `Q11` Gets a Design Direction

**The Judge ruled on all three items Lane A escalated in `D-95`.** Recorded here because two of
the three **correct Lane A**, not Lane B.

### 1. S0 incompleteness blocks Phase 1 — the parent, and it creates a deadlock

**Ruling: a phase cannot close while the sprint it enables is incomplete.** Added as
**condition 5** in `V1-PHASE-CLOSURE.md` §1.

**This was a real question, not a formality.** Phases and sprints are different scopes — a phase
governs *which lane may act*, a sprint governs *what gets built* — and **`D-94` used exactly that
reasoning to call the build spec unaffected**. The ruling closes it the other way.

**Concretely:** `config-coupling`'s 13 unimplemented `CONFIG_LOG.md` rows stop being a background
residual and become **a closure blocker with a name**.

**And it produces a deadlock Lane A will not route around.** Phase 2 was never validly opened
(§5B), so **Lane B cannot implement those rows without acting outside an opened phase — the same
defect `43c51ce` already committed.** Closing Phase 1 requires work only Lane B may do; Lane B may
not act until Phase 1 closes.

**Three exits, and Lane A recommends the second:** a scoped, declared Lane B pass before closure;
**or** accepting Phase 1 on its orchestration artifacts and moving S0's completion into Phase 2's
opening; **or** Lane A implementing the rows — **rejected, that is a crossing into `lib/` and the
reason `D-75` exists.** The deadlock is stated rather than engineered away, because the way out
is a Judge decision about scope, not a Lane A decision about paths.

### 2. `B-008` — the POC is original scope, and Lane A's framing was wrong

**Lane A wrote that *"none of this vocabulary appears in any authoritative document"* and treated
the model as potentially invented.** The Judge corrected it: **the POC commercial flow is original
project scope.** Stripe shipped in `package.json` from scaffolding and `X8` removed it during S0 —
**the removal is evidence the flow existed, not evidence it never did.**

**`NG-03` is a simplification for the current stage — practical, not permanent.** Lane A had been
reading a scoping decision as a denial of existence. **That is `conflict_asserted_past_source` in
its second recorded instance**: the source says *not now*; Lane A heard *not real*.

**What the ruling decides about shape, and it is a simplification rather than an expansion:**
the MVP and the POC are **two flows of one editorial brief** — one engine, two exposures (`§7`
invariant 1, `D-59`'s one origin and two paths) — and the POC sells **exactly one item:
publicly-expandable content with a report**, entering at the trigger and traversing **the same
phase gates**.

**`B-008`'s elaborate model is not adopted.** No `cart_id`, no `DEFAULT_POC_PAYMENT_PROVIDER`, no
`PAYMENT_EVENT_DRAIN` or `POC_OBLIGATION_DRAIN`, no asynchronous account claiming or delivery
portal, no provider-ID versus editorial-ID split. **The simplification of what is sold had never
actually been performed, and this ruling performs it.**

**Deferred, not authorized.** No POC Charter, PRD, traceability, spec, UX, config row or migration
authority is created; **no POC commercial field goes near `AP-01`'s `Q11`/`0002`.** *Lane A read
this as classification. If the Judge intended to authorize POC specification work, that is a
larger act and is not assumed here.*

### 3. `Q11` — the design direction, and why only one shape survives

**Lane B stopped coding because the design was unclear, which was correct** — coding against a
guessed field shape is exactly what `G64` exists to prevent.

| Shape | What it is | Verdict |
|---|---|---|
| **A** | boolean `line_boundary_crossed` — **what the sprint plan's S1 migration line selects by default if nobody decides** | **Fails `G-02`** |
| **B** | three-value status matching `FR-05`: `satisfied` \| `not_applicable` \| `override_not_four_eyes` | **Recommended** |

**The reason is arithmetic, not preference.** `G-02` is *"T5/T6 crossings without Line separation,
**excluding logged overrides**."* Excluding logged overrides requires telling `not_applicable` and
`override_not_four_eyes` apart, **and a boolean maps both to `false`.** Under Shape A `G-02` cannot
be computed from its own declared Data Source and would need a second column that Data Source does
not name. **Shape B needs no second column**, and a crossing boolean — if any reader wants one —
is a **derived view**, never a stored duplicate (`CONFIG_LOG.md` §7.2).

**The sequence contradiction `B-009` identified is resolved in one direction.** *Deferred past S1*
and *must resolve before the `0002` draft* cannot both govern, because **the draft is the earlier
event**. S0 creates only the hold location; no draft exists before `Q11` and the whole S1 window
settle; moving the approved draft into the apply set **is** the S1 authorization act.

**`C-23` stays open by design.** The stale `Modular_PRD` `Q11` row is corrected **in the same pass
the Judge picks a shape** — editing an open decision request is answering it by edit.

### What this does not do

**Does not close Phase 1** — condition 5 is now unmet by name, and the deadlock above is
unresolved. **Does not perform the critic pass** (`B-006` item 1): `D-93` requires a separate turn
from the work being criticised, and this pass is that work. **Does not decide `Q11`** — it
proposes. **Does not authorize POC specification or any build.** Authorizes no schema, migration
or deployment. `0001_init.sql` untouched; `0002` unwritten.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | Agent files | `Modular_PRD` |
|---|---|---|---|---|---|
| Condition 5 — sprint gates phase | ✅ §5.14bd | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `B-008` POC classification | ✅ §5.14bd | ✅ §6 two rows | **— unaffected** | **— unaffected** | **— unaffected** |
| `Q11` design direction | ✅ §5.14bd | ✅ S0/S1 sequence already corrected | **— unaffected** | **— unaffected** | **— `C-23`, deliberately untouched** |

**Inventory unaffected** — no file is created or retired by any of the three rulings. **Agent files
unaffected** — no rule changes for any lane. **`Modular_PRD` is affected and deliberately not
edited**, which is `C-23` and is the one case where naming the tier and not writing it is the
correct disposition rather than an omission.

**`V1-PHASE-CLOSURE.md` is not a `tier-sweep` tier** and carries condition 5 directly; it is
Lane A's phase record, not a governed tier under `D-29`.

---

## 5.14be `D-97` — The Second Critic Pass, the Deadlock Proposal, and `Q11`'s Shape

**Three things the Judge asked for, and one it did not ask for that had to come first.**

### The question that unblocked everything: what was stopping the critic pass?

**Nothing.** `D-93` requires the pass to run **on a separate turn from the work being
criticised** — and by the time the previous report said *"next turn"*, `D-95` and `D-96` were
already committed history (`79bb2a6`, `90f89ba`, `de3b7df`). **The qualifying separate turn had
arrived and Lane A kept deferring into it.**

**A rule that defers correctly once will defer incorrectly forever if nobody asks when it stops
applying.** The Judge asked; the pass ran. Recorded because the failure shape — *a correct
constraint restated past the condition that made it correct* — is this project's dominant one
wearing procedural clothes.

### The pass itself — eight findings, and the headline is uncomfortable

`V1-PHASE-CLOSURE.md` §6.1b, run against `de3b7df`. **Six of the eight are defects introduced by
the two passes that were correcting the previous ones**, and three are **recurrences of classes
already named and fixed once**:

| Class | First instance | Recurrence |
|---|---|---|
| Restated tally | `G75` — check counts in four documents | **`F9`** — *"The four conditions"* heading above a table of five, added by `D-96` |
| Wrong anchor | `B-006` item 4 — conditions citing §3 | **`F11`** — condition 2 re-pointed at §6.3, *Measurements*, in the fix for the first |
| Stale pin | `B-006` item 9 — snapshot naming only a predecessor | **`F14`** — snapshot still naming `79bb2a6` after the set moved twice |

**The correction rate is not yet below the defect-introduction rate**, and that is the finding
this pass most wants read. `F10` and `F16` are open; the rest are fixed and recorded with their
fixes per `D-93` rule 4.

**`F16` is the one worth arguing with.** `V1-PHASE-CLOSURE.md` is both a manifest entry and the
document asserting the manifest, so **check 11 verifying this file exists is true whenever the
check can run at all.** The file does belong in the manifest; the limit is stated so a green
check 11 is never read as independent confirmation. It joins `C-22`.

**`§6.2` was withdrawn rather than deleted.** It claimed the first pass *"found nothing about the
checks themselves … the controls working, not the critic looking."* **That was false within a
day** — `phase-manifest` was silently dropping rows and `C-17` was uninstalled. **A clean bill of
health that ages into a false claim is worse than none**, because it tells the next reader a
region has been examined when it has not.

### The deadlock proposal — `§1.2`

**Asked "what is the proposal to approve?" — Lane A proposes exit 2:** close Phase 1 on its
orchestration artifacts and move S0's remaining configuration work into Phase 2's opening scope,
with `config-coupling` carried **explicitly as Phase 2's opening debt** rather than silenced.

**Why not exit 1.** Authorizing Lane B to act inside an unopened phase **legitimises exactly what
`43c51ce` did wrong.** Once phase order admits a "just this once", the deadlock recurs at every
boundary and the exception becomes the procedure.

**Why this is not a climbdown from `D-96`.** The ruling stands. What exit 2 corrects is **a
scoping error in Lane A's own reading of it**: Phase 1 is the *orchestration* phase, and
orchestration's S0 duty was to publish authoritative rows — which it did. **Condition 5 as first
written demanded that a phase finish work its own lane is forbidden to touch.**

**The cost, stated rather than sold.** Phase 1's DoD stops meaning *"S0 is done"* and starts
meaning *"S0's Lane A half is done."* **Sprints and phases decouple again** — the position `D-94`
assumed and `D-96` overturned — so this is a **partial re-adoption of what the ruling rejected**,
and it should be judged as that.

### `Q11` — Shape B accepted, and `C-23` closed with it

**The Chief Editor accepted Shape B: a three-value status, not a boolean.** `satisfied` |
`not_applicable` | `override_not_four_eyes`, as `FR-05` already states. `G64` is answered on the
limb that survived `D-69`: **`G-02` excludes logged overrides, that requires two of the three
values to be distinguishable, and a boolean maps both to `false`.**

**`C-23` closes in the same pass, exactly as it was written to.** The `Modular_PRD` `Q11` row
carried two stale claims — the **withdrawn** *"second `NFR-03` conflict — inference at read"* limb
(`D-69`), and *"`0002` remains blocked by `Q10`"* after `Q10` was decided (`D-73`, `D-79`). Lane B
reported both as `B-009`; **Lane A left them untouched for a full cycle on purpose**, because
rewriting an open decision request is answering it by edit. **They are corrected now, with the
decision, which is what `C-23` promised.**

**The naming half of `Q11` stays open, and that is a narrowing not an oversight.** The row's
original proposal bundled a *shape* change with a *rename* — `line_boundary_crossed` plus
`identity_assurance` plus a reserved `judgment_independence`. **Shape B decides the shape only.**
Whether the column is also renamed for mechanism-accuracy is a separate call, and deciding it
here would be Lane A reading approval of one half as approval of both.

### POC work "up to `Fn_Spec`" — authorized, and blocked one tier up

**The Judge authorized POC specification work bounded at `Fn_Spec`**, on the stated grounds that
tech-spec and UX lack the clarity to proceed. **Lane A cannot execute it as literally stated**,
and the reason is a binding guardrail rather than a preference:

> *"Input must be a `Modular_PRD` feature group, never a prose description — anchors travel with
> the input, and a description produces unanchored scope (`FB-04`)."*

**The POC has no feature group in `Modular_PRD`.** One changelog mention, no `FR`, no `US`, no
`AC`. Writing an `Fn_Spec` from the ruling's prose is **precisely `FB-04`**, and `specs-creator`'s
own rule forbids a spec whose dependency does not exist.

**So "up to `Fn_Spec`" necessarily includes the tier above it**, and that is a larger act than the
phrase suggests: **adding a POC feature group to the governed product spec.** Lane A will not
assume authorization for a `Modular_PRD` scope addition from a sentence about `Fn_Specs`.
**Put back to the Judge**, with the source material named: the P0-EVR board proposal,
`B-P0-06`'s ten boundaries, `G7a`'s charter item, and `D-59`'s `/request-brief` path.

### What this does not do

**Does not close Phase 1** — condition 4 is the Judge's and condition 5 depends on the deadlock
decision. **Does not decide `Q11`'s name.** **Does not write any POC specification.** **Does not
open Phase 2** or authorize Lane B to act. Authorizes no schema, migration or deployment;
`0001_init.sql` untouched, `0002` unwritten.

### Tier applicability (`D-54`)

| Item | Register | `Modular_PRD` | Build spec | Inventory | Agent files |
|---|---|---|---|---|---|
| Second critic pass | ✅ §5.14be | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| Deadlock proposal | ✅ §5.14be | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `Q11` shape accepted | ✅ §5.14be + §5.1 | ✅ §10 row, `C-23` closed | **— unaffected** | **— unaffected** | **— unaffected** |
| POC `Fn_Spec` blocked one tier up | ✅ §5.14be | **— unaffected until the Judge rules** | **— unaffected** | **— unaffected** | **— unaffected** |

**Build spec unaffected** — no scope, sequence or DoD moves until the deadlock exit is chosen.
**Inventory unaffected** — no file created or retired. **`Modular_PRD` §8 unaffected** — no sprint
closed and no tier opened; the `Q11` change is a **§10 decision-request status**, not a
requirement amendment.

---

## 5.14bf `D-98` — Condition 5 Rescoped, Both Exits Retired, and the Module Index That Anchors the POC

**Two Judge clarifications, and the first one dissolved a problem rather than solving it.**

### The deadlock was never structural

**Asked: "which phases require exit 1 and exit 2?" Answer: none of them — and the question is
what exposed why.**

**Condition 5 was mis-scoped by Lane A when written.** *"The sprint the phase enables is
complete"* was read as *the sprint in its entirety*. **The evidence against that reading was
already in the file every agent reads first:**

> `CLAUDE.md`: **"Phase 1 (Lane A) is specs and governance, *not* code."**

**A phase whose charter excludes code cannot carry a closure condition that requires code.**
Under the corrected reading, exit 2 is **the definition, not an exception**, and exit 1 is not
needed anywhere.

| Phase | Lane owed | Exit |
|---|---|---|
| **1 — Orchestration** | S0's governance half — `CONFIG_LOG.md`, `DECISION_LOG.md`, the `0002` hold location. **Complete** | **None** |
| **2 — Application** | S0's code half, then S1–S4. **Entirely within its own lane** | **None** |
| **3 — CI/CD** | `C-Q1` and `C-Q2` in `.github/workflows/` | **None of these two.** `C-Q2` waits on `C-18`, a settings act **no lane owns** |

**Exit 1 is withdrawn, not merely un-chosen.** It would have created a standing precedent —
authorizing a lane to act inside an unopened phase — **to solve a problem that did not exist.**
Recorded so it is not reached for the next time a boundary looks stuck.

**Lane A had proposed exit 2 and given the wrong reason for it.** `§1.2` argued it as a cost — *"a
partial re-adoption of the position the ruling rejected"* — when it was simply **the correct
reading of Lane A's own condition.** `D-96`'s ruling stands untouched; only Lane A's scoping of it
was wrong.

**The generalized rule, now binding:**

> **Condition 5 is satisfied by the sprint work the closing phase's own lane owed.** Work the
> sprint assigns to a different lane belongs to *that* lane's phase and is carried as named
> opening debt — never as a blocker on a phase forbidden to perform it.

**This is the third time a Lane A condition has demanded something its own rules forbid.**
`C-19` was required in the closing pass *and* carried past closure; `C-17` was to land in a pass
Lane A does not own; condition 5 required code from the phase defined as not-code. **The pattern
is writing a condition without checking it against the constraint one paragraph up.**

### The module index — `Modular_PRD` §0.6

**The POC's `Fn_Spec` was blocked because the POC had no feature group to anchor to.** The
Chief Editor's direction resolves it at the structural level rather than by exception: **the
document conflates Portfolio, Project and Product**, and an index that separates them gives each
module a named anchor.

**Why an index rather than more sections — and this is the load-bearing part.** A second product's
requirements written *inside* this document would inherit the MVP's `FR`/`US`/`AC` namespace and
its `⚠`/`[Q11]` markers, and **every propagation ritual would silently sweep both.** Modules are
**indexed here and specified in their own documents**; only the index row lives in the PRD.

**`M-MVP` is retroactive labelling, not a change** — everything from §1 already described one
product; it now has a name so a second can be distinguished. **No requirement text moves, no ID
changes.**

**`M-POC` is P0-EVR, named from its history of introduction, which is where its authority comes
from.** The manual lane was chartered as a **portfolio-level business-continuity measure**, not a
product feature. **That origin is why it may exist while `NG-03` holds**, and why it cannot be
specified by copying MVP requirements. Its four sources are named in the row: the board proposal,
`G7a`'s charter item, `B-P0-06`'s ten boundaries, and `D-59`'s `/request-brief` path.

**What the index does not do, stated because the temptation is obvious.** It creates the **anchor**
an `Fn_Spec` requires — **it is not itself a feature group.** A module index entry is a pointer.
**`M-POC`'s `Fn_Specs` still cannot be drafted from this row**; the next artifact is `M-POC`'s own
requirements document. **`NG-03` is untouched** and no monetization capability is authorized,
specified or built.

### Status of the two items the Judge's note names

**`Q11`'s field shape is decided** (`D-97`, three-value status) — it is **no longer** what stands
between here and a complete S0. **What stands there now is the 13 unimplemented `CONFIG_LOG.md`
rows, and they are Lane B's**, carried as Phase 2's opening debt under the rescoped condition 5.

**Lane C still holds exactly two items**, unchanged and specified in `.github/WORKFLOWS-SPEC.md`
§4: `fetch-depth: 0`, and the ASCII job rename that `C-18` blocks.

### What this does not do

**Does not close Phase 1** — condition 4 is the Judge's and condition 2 waits on `B-010`'s `C-20`.
**Does not write `M-POC`'s requirements or any `Fn_Spec`.** **Does not open Phase 2.** **Does not
decide `Q11`'s naming half.** Authorizes no schema, migration, deployment or monetization
capability. `0001_init.sql` untouched; `0002` unwritten.

### Tier applicability (`D-54`)

| Item | Register | `Modular_PRD` | Build spec | Inventory | Agent files |
|---|---|---|---|---|---|
| Condition 5 rescoped | ✅ §5.14bf | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| Exits retired | ✅ §5.14bf | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| Module index + `M-POC` | ✅ §5.14bf | ✅ §0.6 | **— unaffected** | **— unaffected** | **— unaffected** |

**Build spec unaffected** — no scope, sequence or DoD moves; the rescoping changes *who owes* a
condition, not what any sprint delivers. **Inventory unaffected** — no file created or retired;
`M-POC`'s requirements document does not yet exist and is **not** inventoried before it is
authorized. **Agent files unaffected** — `CLAUDE.md`'s phase wording was already correct and is
what corrected the condition. **`Modular_PRD` §8 unaffected** — no sprint closed, no tier opened;
§0.6 is document control, not a requirement change.

---

## 5.14bg `D-99` — Phase 1 Closes Last, and `M-POC` Gets Its Requirements and `Fn_Spec`

**Two rulings. The first reverses `D-98`, which was Lane A's own work one pass earlier.**

### The phase model — `D-98` withdrawn

**Ruling: Phase 1 cannot close until all specs are written *and* Lanes B and C have completed
their tasks and the gaps those specs surfaced.**

**`D-98` narrowed condition 5 to escape a deadlock and the Judge rejected the escape.** The
reason is worth recording precisely, because it is a diagnosis rather than a preference:

| Rule | `D-98` assumed | Correct (`D-99`) |
|---|---|---|
| Phase **CLOSE** | only your own lane's half | **the whole sprint, including other lanes' work against your specs** |
| Phase **START** | opens when the preceding phase's Judge boundary is accepted | **opens when the specs its lane needs are accepted** |

**The deadlock lived in the START rule and Lane A loosened the CLOSE condition instead** —
**weakening the model in exactly the place it needed to stay strict.** A governance phase that
closes before its governance has been executed against **has proven nothing**.

**Phase 1 is an envelope, not a segment: it opens first and closes last.** Orchestration is
finished when the specs have **survived execution**, not when they are written.

**`D-75`'s "sequential, one at a time" is unchanged.** What changes is that **a lane's turn begins
on spec acceptance, not on a predecessor's closure** — which is what makes Phases 2 and 3 able to
run at all while Phase 1 stays open.

**`43c51ce` remains unauthorized, for a narrower reason.** Lane B did not need Phase 1 to close —
it needed **its specs accepted at a Judge boundary**, and none had been. The record stands; only
the reason changes.

**This is the second time in three passes that a Lane A rule has been corrected by the Judge
rather than by a control**, and both times the error was **writing a condition without checking it
against a constraint already in the governing set**. `D-98` even cited `CLAUDE.md`'s *"specs and
governance, not code"* as its evidence — and drew the wrong inference from it.

### `C-20` — what it must enforce, and why it still cannot be built

**Not strict serialization. The feedback cycle:** Lane A writes specs → Judge accepts → Lanes B
and C execute → gaps return through `docs/handoff/` → Lane A corrects → **Phase 1 closes when the
cycle is quiet.**

A check must verify, per lane: **an accepted spec boundary exists before that lane's first
commit**, and **no handoff entry raised against its specs is still open** when Phase 1 is proposed
for closure. **Most of the machinery exists** — the phase register from `C-19`, the status field
from check 10.

**What is missing is the acceptance record.** **No spec-acceptance boundary has ever been
recorded**, so the check has nothing to read on its primary input. **`C-20` now blocks on the
Judge recording a first acceptance, not on Lane A writing code** — which is a materially different
and more honest statement than the one it carried before.

### `M-POC` — requirements and `Fn_Spec` written

**Authorized by the Judge.** Two artifacts, and **nothing below the `Fn_Specs` tier.**

**`docs/modules/M-POC-REQUIREMENTS.md`** supplies the feature group the index row could only point
at. **Its own ID namespace** — `PO`/`PR`/`PU`/`PA`/`PX`/`PB` — so no `M-MVP` identifier is reused,
moved or renumbered, and no propagation ritual sweeps both modules.

**Three requirements carry the module**, and each exists to stop a specific failure:

- **`PR-01` invariance.** An engagement traverses the **unchanged** gates with the same sequence
  enforcement and transition logging. **The standing "never fork the pipeline" invariant, restated
  as a module requirement** so a future spec cannot quietly introduce a parallel path.
- **`PR-12` folder separation.** The publishable article **must not be copied, linked, embedded or
  exported into the client-facing folder.** **A spec that satisfies every other requirement and
  leaks the article has failed the module.**
- **`PR-13` boundaries.** No engagement begins until all ten `B-P0-06` values are real. **All ten
  are currently unset** — recorded as a gate rather than as an oversight.

**`NG-03` is untouched.** Payment is an **operating activity performed outside the application**,
traced by an external transaction identifier — the board proposal's own framing, preserved.
**`B-008`'s cart, provider config, drains, account claiming and portal remain unadopted.**

**`docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md`** takes §3–§5 as its feature group — **invariance,
the engagement, and folder separation cannot function without each other**, which is what makes
them one group rather than three specs restating one another.

**Two things it deliberately does not do.** `Hold` and `Escalate` route to **`M-MVP`'s existing
exception behaviour** and are **not respecified — a module variant of an existing exception path
would be a fork.** And its **`SPECS` candidate list is empty by ruling**, not by omission: the
Judge found insufficient clarity for tech-spec and UX, so **the next tier is blocked by a decision
that has not been made, not by a gap in this document.**

### What this does not do

**Does not close Phase 1** — condition 5 now explicitly waits on Lanes B and C. **Does not open
Phase 2 or 3** — no spec-acceptance boundary has been recorded. **Does not authorize any build,
sprint, migration, schema change, UI, or monetization capability.** **Does not install `C-20`.**
`0001_init.sql` untouched; `0002` unwritten.

### Tier applicability (`D-54`)

| Item | Register | `Modular_PRD` | Inventory | Build spec | `Fn_Specs` | Agent files |
|---|---|---|---|---|---|---|
| Phase model corrected | ✅ §5.14bg | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `C-20` rescoped | ✅ §5.14bg + `C-20` | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `M-POC` requirements | ✅ §5.14bg | ✅ §0.6.2 row points to it | ✅ new file | **— unaffected** | **— unaffected** | **— unaffected** |
| `M-POC` `Fn_Spec` | ✅ §5.14bg | **— unaffected** | ✅ new file | **— unaffected** | ✅ the file itself | **— unaffected** |

**Build spec unaffected** — `M-POC` is **deferred scope**; no sprint, sequence or DoD moves, and
writing requirements is not scheduling work. **`Modular_PRD` §8 unaffected** — no sprint closed
and no tier opened for `M-MVP`. **Agent files unaffected** — no rule changes for any lane.

---

## 5.14bh `D-100` — The Operating Model Is Scrum, and Lane A Had Been Building a Stage Gate

**One ruling, and it reframes three passes of work rather than adding to them.**

### What the Judge ruled

**This is an approved project.** The spec-acceptance boundary **is not a fresh approval gate** —
it exists only to let Lane B or Lane C **proceed with work**. The approval is standing; the
boundary orders work, it does not authorize existence.

**The cycle across Lanes A, B and C is continuous.** Feedback arriving against running work goes
**to the top of the backlog** — it does **not** halt the work and does **not** invalidate the
spec. **Gaps close progressively, through spec refinement.** The governing phrases are this
project's own: **"keep things simple and practical"**, and ITIL 4's **"start where you are"**,
which the sprint plan already cites at S0.

### What it corrects, and the correction is Lane A's to own

**Lane A had been building a stage-gate model onto a project the Judge runs as Scrum.** Phase
closure conditions, exits, a deadlock, serialization enforcement — **each was a competent answer
to the wrong question**, and the symptoms were visible for three passes while being read as
separate defects:

| Symptom | What it actually was |
|---|---|
| A deadlock between *"Phase 1 must close"* and *"Lane B may not act"* | A stage gate imposed on a continuous cycle |
| `C-20` designed to enforce strict serialization | **A control enforcing the opposite of the operating model** |
| Feedback treated as reopening a phase | Feedback is a **backlog item** |
| Every gap escalated to the Judge before proceeding | Refinement is continuous; the Judge rules **at boundaries, not at every gap** |

**This is the third consecutive pass in which a Lane A rule was corrected by the Judge rather than
by a control** — `D-98`'s rescoping, `D-99`'s start rule, and now the model underneath both.
**The common cause is now visible and is not "insufficient rigour":** Lane A kept adding
governance where the answer was less of it. **`D-93`'s critic role cannot catch this class**,
because a critic checks work against its own model's rules; **only someone outside the model can
say the model is wrong.** That is what the Judge role is for, and it is the strongest evidence yet
that it could not have been a fourth agent.

### The immediate consequences

**Phase 2 and Phase 3 are OPEN.** Permission to proceed is granted under the standing approval.
Lane B's first work is the **13 unimplemented `CONFIG_LOG.md` rows**, then `flags.ts`; Lane C's is
its two `.github/WORKFLOWS-SPEC.md` §4 items, with `C-Q2` still waiting on `C-18`.

**`C-20` is withdrawn**, not deferred. What survives from `F4` is satisfied by §5's register plus
check 10.

**`B-010` is answered**, and the backlog is now **clear — ten entries, all answered.** Phase 1's
condition 2 is met.

**`43c51ce` is reclassified.** Under this model it is **work ahead of a recorded permission inside
an approved project** — a process-recording gap whose remedy is a backlog entry, **not the
phase-validity crisis three passes treated it as.** The historical record stands unedited; only
its characterisation changes, which is the only correction an append-only record permits.

### `docs/handoff/` is the backlog — and no new artifact is created

**The channel already is the backlog.** Entries are raised by a working lane, dispositioned by
Lane A, ordered by whoever is refining. **A separate backlog file would restate them, and
restatements drift** — the mistake this ruling corrects, repeated in miniature.

**Check 10 was already right for this model.** It reports queue depth and **does not fail on a
healthy queue** (`D-90`) — the same reason Scrum does not treat a full backlog as a defect.

### What this does not do

**Does not close Phase 1** — condition 5 still waits on Lanes B and C completing, and condition 4
is the Judge's. **Does not install any check** — and **not installing one is the correct response
to this ruling**, not an omission. **Does not authorize a sprint, migration, schema change, UI, or
monetization capability.** **Does not amend `M-POC`'s requirements or `Fn_Spec`.**
`0001_init.sql` untouched; `0002` unwritten.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Inventory | `Modular_PRD` | Agent files |
|---|---|---|---|---|---|
| Operating model recorded | ✅ §5.14bh | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `C-20` withdrawn | ✅ §5.14bh + `C-20` | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| Phases 2 and 3 opened | ✅ §5.14bh | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| Backlog semantics | ✅ §5.14bh | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Build spec unaffected** — no scope, sequence or DoD moves; opening a phase permits work already
scheduled rather than rescheduling it. **Inventory unaffected** — no file created or retired, and
**deliberately so**: the backlog is an existing directory. **Agent files unaffected** — the lane
rules are unchanged; what changed is the model those rules sit inside, and it lives in
`V1-PHASE-CLOSURE.md` §0 where the Judge reads it.

---

## 5.14bi `D-101` — `D-100` Propagated, Response Separated From Closure, `Q11`'s Shape Reaches the Build Spec

**`B-011` and `B-012`. Both stand, and `B-011` item 4 names a `D-54` violation Lane A committed in
the pass that invoked `D-54`.**

### The parent: `D-100` changed the model and marked its executors unaffected

**`D-100` withdrew strict phase serialization, opened two phases, and redefined what a handoff
means — then recorded the Build Spec and all three agent rule files as *unaffected*.** They said
the opposite: *sequentially, one at a time, in a fixed phase order*, Lane A *"1 — now"*, Lane B
*"2 — next"*, and `V1-BUILD-SPEC.md` §2 *"Phase 1 is current."*

**The register wins under `D-58` — and that is exactly the wrong comfort here.** Lane B's own
instructions say governance reaches it **as a flag, not a document**, and that it is **not
expected to read the register** (`D-86`). **A ruling the executing agent cannot see has not been
propagated; it has been filed.**

**`B-011` calls the result a deterministic instruction conflict rather than a risk, and it is
right:** follow `AGENTS.md` and wait for a gate that no longer exists; follow `D-100` and resume —
**either action violates an operative instruction.**

### The model, adopted as `B-011` recommended it

**Exactly one lane is `Active`; the others are `Eligible`.** The Chief Editor selects the Active
lane at each Sprint boundary.

| State | Means |
|---|---|
| `Active` | The one lane permitted to commit |
| `Eligible` | Specified and permitted, **not currently committing** — *not* waiting for a gate |
| `Blocked` | Waiting on a named item |
| `Done` | Definition of Done met and accepted |

**The one-desktop, one-agent-at-a-time constraint remains, and is now stated rather than implied.**
`B-011` asked explicitly; the answer is that it is physical and unchanged. **What `D-100` removed
was the *queue*, not the *serialization*.**

**Propagated in one pass**: the shared core in all three rule files, `V1-BUILD-SPEC.md` §2, and
`V1-PHASE-CLOSURE.md` §5. **The rule files no longer carry lane state at all** — they define the
vocabulary and point at §5. **Removing the duplicate is stronger than checking it** (`G55`), which
is why `B-011`'s fixture for *"register and rule file disagree"* is answered by deletion rather
than by a control: **there is no longer a second copy to disagree.**

### `D-86`'s "stop and wait" versus `D-100`'s backlog — resolved, not chosen between

`D-86` said a lane that needs a dependency **stops and waits**; `D-100` said feedback enters the
backlog while work continues. **Both are right about different entries.** The earlier wording
**generalised a blocking dependency into a rule about every handoff.** Now per-entry: a blocking
entry stops *that item*; a non-blocking one goes to the top of the backlog and work carries on.

### Response is not closure — `B-011` children 2 and 5

**`D-100` used "all answered" as evidence that Phase 1's condition 2 was met. A reply is not a
fix.** Check 10 tests **receipt** — deliberately, and unchanged.

**Five fields, in the entry rather than in a second document**: `Resolution`, `Evidence`,
`Verified-At-Commit`, `Follow-up-Tier`, `Superseded-By`. Terminal resolutions are `Verified`,
`Deferred` (tier required), `Withdrawn`, `Superseded` (decision required).

**`closure-readiness` (`C-14` check 13)** derives the matrix from those fields — **no second
backlog file**, per `B-011` repair 6. **It is silent until a phase claims closure**, then fails on
any entry that is merely `Open` or `Answered`. **A full backlog during a sprint stays healthy; an
unverified blocker at a Judge boundary does not.**

**All twelve entries now carry a closure state.** `B-004` and `B-008` are **`Superseded` with the
overtaking decision named** — `B-011`'s child 5 was right that both had been advanced past their
recorded dispositions and nothing said so.

**Negative-tested**: Phase 1 marked closed with one entry's `Resolution` removed **fails**, naming
the entry. Probes removed.

### Three positional-parsing defects in a row, and the third changed the approach

**Installing check 13 reproduced a defect twice before it worked**, and the sequence is the
finding:

| # | Defect |
|---|---|
| 1 | `phase-manifest` dropped compound-path rows (`B-006` item 8) |
| 2 | The new detector scanned the whole file and matched **`§1.1a`'s three-column table**, reading its *Exit* column as `Closed` |
| 3 | Scoping to `§5` fixed that — then **`§5` gained a Lane column and every fixed index shifted** |

**Both detectors now read the register by column NAME from its header row.** A header-driven
parser cannot be broken by adding a column. **Three instances is where the approach changes, not
the pattern** — and the second and third were introduced by Lane A inside this pass.

**An orphaned table header was also left in `§5`** when its rows were reshaped, and it silently
defeated the parser by being found first. **Removed.**

### `B-012` — the same paragraph, reported twice

`B-009` raised it, `D-97` decided the shape, and `V1-BUILD-SPEC.md` still said `Q11` was *deferred
past S1* with the boolean fallback selected by default. **A register decision that does not reach
the tier an author reads is not a decision yet** — the same lesson as the parent, one tier down.

Repairs 1–3 applied: the decided three-value shape, the **name** stated separately as open with
`identity_assurance` and the reserved instrument, and `0002` still blocked. The *"`G64` is
specified, not applied"* sentence — which survived `D-97` by two days — is corrected. **`D-68`'s
deferral is reconciled rather than contradicted**: `G27` requires `G64` resolved before the draft,
which is earlier than S1, so **the deferral was of the naming half and only that half survives.**

**Repair 4: the six `[Q11]` markers are deliberately NOT cleared.** Their naming dependency is
open, and clearing them would be the shape-decided-therefore-question-closed conflation this entry
reports.

**Repair 5: no new check, and the reason is structural.** Detecting *"the Build Spec calls a
register-decided question deferred"* requires parsing decision status from prose in a third tier;
`decision-status` already does two and **a third grammar to guess at buys less than it costs.**
**This class is `C-22` — arrival, not correctness — and the control is the reader.** Recorded
rather than papered over.

### Tier applicability (`D-54`) — and the `D-100` record it corrects

| Item | Register | Build spec | Agent files | Inventory | `Modular_PRD` |
|---|---|---|---|---|---|
| Lane-state model | ✅ §5.14bi | ✅ §2 restated | ✅ **all three, core re-synced** | **— unaffected** | **— unaffected** |
| Response-vs-closure fields | ✅ §5.14bi | **— unaffected** | **— unaffected** | ✅ check 13 + template | **— unaffected** |
| `Q11` shape reaches the Build Spec | ✅ §5.14bi | ✅ the paragraph | **— unaffected** | **— unaffected** | **— already correct** |
| Parser defects | ✅ §5.14bi | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

> **`D-100`'s tier table is corrected by this row, not rewritten.** It recorded *"Build spec —
> unaffected"* and *"Agent files — unaffected"* for a decision that changed the sequence and the
> meaning of a handoff. **Both were affected. `D-101` is where they actually land.**

**Inventory affected** — check 13 is a new file. **`Modular_PRD` unaffected** — no sprint closed,
no tier opened, and its `Q11` row was already correct; **the drift was in the Build Spec only.**

---

## 5.14bj `D-102` — The Merge Gate May Not Exist, the Control Layer Had a False Green, and `Verified` Was the Answering Lane's Own Word

**Seven entries: `B-013`, `B-014`, `B-015`, `B-016`, `B-017`, `B-018`, `C-001`. Every one stands.
Six of the seven report defects in `D-101` or in the uncommitted pass that was repairing `D-101`
— which is the shape of this cycle and is recorded as `G77` rather than narrated away.**

### The parent: `D-89`'s merge gate may not exist at all

**`C-001` reports that the live `main` ruleset targets ZERO branches** — a malformed include
string, `"refs/heads/\"main\", \"releases/**/*\""`, which matches nothing — **and contains no
`required_status_checks` rule whatsoever.** If that holds, then:

> **`D-82`, closed by `D-89`, records that *"`main` requires a pull request and a passing status
> check, so CI now runs before a merge, not after it."* **That sentence describes a gate that,
> on this evidence, is not in force.**

**This outranks the job rename by a wide margin.** `C-18`, `C-Q2`, `B-015` and `B-016` are all
about renaming a required context; **renaming a check inside a rule that gates nothing is a child
task.** Repairing the rule is the parent.

**The Judge confirms Lane C performed the verification.** The evidence — `live.json` and
screenshots — is **held outside the repository**, so the claim is authoritative and **not
reproducible by a later reader**. That gap is recorded as **`C-25`** rather than resolved by
assertion: `D-89` was itself *"asserted, never verified"* (`B-015`), and repeating the pattern one
level up would be `conflict_asserted_past_source` a third time.

### `B-013` — a critic pass cannot certify the artifact set that followed it

**`D-101` recorded, in one artifact, that its own critic pass was owed on a later turn AND that
Phase 1's condition 3 was met.** §6.1b reviewed `de3b7df`; `D-101` shipped at `983f058`. **Asking
the Judge whether condition 3 was met produced two answers from the same document.**

**Condition 3 is now NOT MET, and so is condition 2.** Recorded in `V1-PHASE-CLOSURE.md` §6.1c.

**Lane B performed the separate-turn pass.** That is *more* independent than `D-93` requires and
**is not what `D-93` assigns** — the Critic role is Lane A's. Both facts are recorded; neither is
allowed to stand in for the other.

### `Applied` — the state that was actually true

**`B-011` asked for `Verified-By`. `D-101` adopted five fields and dropped that one.** The
uncommitted repair pass then supplied it as `Verified-By: Acknowledged` — **a receipt state
wearing the word "verified"** — across ten entries, and defaulted the template to it.

**Rather than weaken `Verified`, `D-102` adds `Applied`:** the fix is in the tree and anchored to
a commit, and **nobody independent has confirmed it.** It is deliberately **non-terminal**, so it
does not satisfy a closure condition.

| | Means | Terminal? |
|---|---|:---:|
| **`Applied`** | In the tree, anchored to a commit, **unconfirmed by anyone but the answering lane** | **No** |
| **`Verified`** | Confirmed by a **named actor who is not the answering side**, at a commit that **exists** | Yes |
| **`Deferred`** | Owned by a named tier | Yes |
| **`Withdrawn`** | The raiser or the register retracted it | Yes |
| **`Superseded`** | A named decision overtook it | Yes |

**Ten entries moved from `Verified` to `Applied`, and Phase 1's condition 2 went red as a direct
result.** That is the point. **Recording ten honest `Applied` rows costs a red condition;
recording ten unearned `Verified` rows costs the meaning of the word** — and the register would
have carried the second kind indefinitely, because nothing could tell them apart.

**Three entries also read `Verified-At-Commit: pending — this pass`.** `pending` is not a commit.
The check never read the field at all, so it reported ten verified entries while three had no
anchor. Now: hexadecimal required, **existence proven by `git cat-file` on full history**, and a
shallow CI checkout reports a **clearly labelled limited result** rather than claiming the commit
was checked.

### `B-017` — the control layer itself had a false green

**This is the most serious finding in the cycle, and it invalidates the evidence every other
entry rests on.** Both channel checks wrote their field pattern as `^-\s*\*\*Name:\*\*\s*(.*)$`.
**`\s` matches a newline.** So a blank field followed by another field returns the NEXT LINE as
its value:

| Input | Old pattern | Line-bounded |
|---|---|---|
| a blank `Kind` line above `- **Phase:** 1` | `"- **Phase:** 1"` | `""` |

**`B-013`, `B-014` and `B-015` shipped with blank `Kind` values and check 10 reported PASS.** The
green did not describe the files being judged. **Reproduced before the fix and after it** — not
reasoned about.

**The parser now lives once**, in `scripts/checks/handoff-fields.mjs`, together with the phase
register reader that had been copied verbatim into both checks. **Three copies of a parser is
three chances to fix a bug twice**, which is exactly what happened across `D-95`, `D-101` and this
pass.

**`Phase:` is now mandatory and validated against the register.** `B-013` item 6 and `B-017`
item 4 are the same defect from two directions: the gate was global, so a Phase 3 entry could fail
Phase 1's boundary; and an entry with no legible phase **vanished from every gate silently**.
Both halves negative-tested — an open Phase 3 entry does **not** fail Phase 1 closure, and an open
Phase 1 entry does.

### `B-014` and `B-018` — the removed duplicate came back, and its detector was ceremonial

**`B-005` deleted `.agents/skills/sync-docs/SKILL.md` as a divergent duplicate. It returned**,
untracked, carrying the same defect: a "shared-core triple" reading `AGENTS.md`, `AGENTS.md`,
`.agents/rules/graphify.md` — **an instruction to propagate to two files and silently skip
`CLAUDE.md`.** Untracked and outside `docs/`, so `graph-coverage` and `source-sweep` are both
blind to it: **the repository passes every governed check while an active procedure instructs an
incomplete propagation.**

**The first check written to catch it was a false green three ways** (`B-018`), and each is a
different way to be green for no reason:

| # | Mechanism |
|---|---|
| 1 | It shelled out to Unix `grep`. On Windows the command does not exist, the `catch` swallowed the error, and **discovery failing was indistinguishable from discovering nothing** |
| 2 | Its detail line read `1 canonical skill found` for **every** count that was not greater than one — **including zero** |
| 3 | It tested only for duplicates and **never asserted the canonical procedure existed at all** |

**And the rewrite shipped with a fourth**, caught by its own fixture rather than by review:
`git ls-files --cached` reports the **index**, so the check passed with the canonical file
**deleted from disk**. **A check written specifically to stop a false green had one.**

**Origin of the recurrence, per `B-014` item 1:** an environment-level import — the same one that
appended the empty `## Imported Claude Cowork project instructions` heading to `AGENTS.md`.
**Disposition of that heading, recorded rather than silently kept or discarded (`B-014` item 6):
REMOVED.** It carried no content, sits outside the shared-core hash, and no check can see it.

### `B-015`, `B-016`, `C-001` — the rename, and what the Judge ruled

**`C-18`'s failure direction was wrong and is corrected.** A required status check that never
reports stays **pending**, and a pending required check **blocks the merge**. The old text said
*"protection is configured and never gates"* — fail-**open** — and the uncommitted pass appended
*"fail-closed (blocks merge)"* to the same sentence, leaving it asserting both. **One direction
now, stated once:** an absent or misnamed required context **fails closed**. Delivery stops; it
does not silently pass.

**Judge ruling, 2026-08-24: the Lane C workflow edit is KEPT and committed**, with the crossing
declared in the commit trailer under `D-88`. **`B-016` repair 1 — withdraw it and preserve it as
a proposal — is therefore answered by decision rather than by withdrawal.**

**`B-016` child 4 stands and is NOT resolved by that ruling, and this is stated plainly because
the ruling's stated reason does not match the file.** The Judge's reason was that *"if it failed
that new step would echo a failure reason."* The committed job is:

```
compatibility_verify:
  name: verify
  needs: verify
  steps:
    - run: echo "This job provides the 'verify' status context…"
```

**`needs: verify` with no `if:` means that when the real job FAILS, this job is SKIPPED — it does
not run, and it echoes nothing.** GitHub accepts a skipped context for a required check. **So a
`verify` context can go green without typecheck, lint, tests or `bun run check` having passed** —
`D-81`'s fail-open pattern, in the one place the repository is trying to close it.

**Recorded as `C-24`, specified and not applied.** `.github/workflows/` is Lane C's surface
(`D-56`), and Lane A does not author there. **The dangerous act is not committing this file — it
is making `verify` a required context while the job is shaped this way**, and `C-24` blocks that
act rather than the commit.

**`C-001`'s own defects are corrected**: raiser (Lane C, not Lane B), Phase (3, not 1), the exact
old context preserved with its **U+00B7 MIDDLE DOT** separators, and the evidence recorded as
external and non-reproducible.

### The lane crossing, declared

**This commit spans Lane A and Lane C**, and `lane-boundary` reports it. **Declared under `D-88`
with a `Lane-Crossing:` trailer, on the Judge's instruction.** `D-83`'s reasoning is unchanged:
the check **reports** a crossing rather than forbidding one, because most recorded crossings were
legitimate — and this one was authorised in the turn that produced it.

### Conditions opened

| | |
|---|---|
| **`C-24`** | **The compatibility `verify` job cannot prove verification.** `needs:` without `if:` makes it skip — not fail — when the real job fails. **Blocks making `verify` a required context**, not the commit. Lane C implements an unconditional reporting step that fails unless `needs.verify.result == 'success'` |
| **`C-25`** | **The live-ruleset evidence is held outside the repository.** `C-001`'s claim is the Judge's and is authoritative; **a later reader cannot reproduce it.** Record date, actor, branch target, exact required context and expected GitHub App source durably before `D-89` is either restored or retired |
| **`C-26`** | **Ten entries are `Applied`, and Phase 1's condition 2 cannot be met until they are `Verified` by a named actor who is not the answering lane.** The natural verifier is Lane B, which raised them |

### Gaps opened

**`G76`** and **`G77`** — §5.1.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Merge gate may not exist | ✅ §5.14bj, `C-25` | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `Applied` state + `Verified-By` | ✅ §5.14bj | **— unaffected** | **— unaffected** | ✅ check + template rows | ✅ conditions 2 and 3, §5 | **— unaffected** |
| Line-bounded parser | ✅ §5.14bj | **— unaffected** | **— unaffected** | ✅ `handoff-fields.mjs` | ✅ §5A.5, §6.5 | **— unaffected** |
| `sync-docs` uniqueness | ✅ §5.14bj | **— unaffected** | **— unaffected** | ✅ check 14 | ✅ §5A.5 | **— unaffected** |
| `C-18` failure direction | ✅ §5.14bj + `C-18` | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| Condition 3 NOT MET | ✅ §5.14bj | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §6.1c | **— unaffected** |

**Agent files unaffected and that is checked, not assumed** — nothing here changes the lane map,
the lane states, or the shared core; the core hash is unchanged at `a8173008845e`.
**`Modular_PRD` unaffected** — no sprint closed and no tier opened. **Build spec unaffected** —
no artifact created, sequenced or retired; the two new check files are apparatus, recorded in the
inventory and the Phase 1 manifest.

---

## 5.14bk `D-103` — The First Sprint-Boundary Handover: Lane B Is `Active`

**Judge ruling, 2026-08-24: `P0` only.** Lane B is selected `Active` at this Sprint boundary; Lane
A goes `Eligible`. **`P1`–`P3` of the `C-26` fix are drafted and deliberately NOT built.**

### What was actually decided, and what it is not

`D-101` created four lane states and made `V1-PHASE-CLOSURE.md` §5 the only place live state
lives. **It has never been exercised.** Lane A had been `Active` since the table was written, so
*"exactly one lane is `Active`"* was true **by inertia** rather than by any act or any control.

**This is the first handover, and a handover is two edits — one lane out, one lane in.**

| | |
|---|---|
| **Decided** | Lane B may commit until the next Sprint boundary. Lane A may not |
| **NOT decided** | **Phase 1 does not close.** It closes last (`D-99`), and `Eligible` is a statement about committing, not about phase openness. Conditions 2 and 3 stay NOT MET (`D-102`) |
| **NOT decided** | **`C-26` is not closed by this.** `P0` gives Lane B the *permission* to record a verification; it does not give verification the ability to *fail* — see below |

### Three gaps the handover itself opens, and how each is closed

**A status flip is one line. The three consequences of it are not, and two of them would have
stopped the machinery this decision exists to serve.**

#### 1. Lane A could not have answered a handoff — and check 10 would have gone permanently red

`handoff-response` **fails on an entry left unread**. If `Active` barred Lane A from writing in
`docs/handoff/`, then the moment Lane B raised anything, the suite would show a red **that no
permitted act could clear**. A check that is red in the normal case is a check people stop reading
— `D-83`'s reasoning, and this would have been its cleanest instance.

**Closed by stating the carve-out** (§5.1 of the closure file): **`docs/handoff/` is writable
regardless of `Active`.** This is not a new exception. **The directory has been unmapped since
`D-90`, on purpose** — attributing it to either lane would make the other a crossing on every use.
`D-103` says out loud what that already implied.

#### 2. A mid-sprint dependency request now genuinely stops — and that stop is kept

`package.json` and the lockfiles are Lane A's, and Lane A cannot commit. **So a dependency Lane B
needs mid-sprint is blocked until Lane A is next `Active`.**

**This one is NOT carved out, and the reasoning is the opposite of gap 1.** `D-86` says Lane A
provisions **ahead**; the entire purpose of provisioning ahead is that this should be rare.
**Carving it out would remove the pressure that keeps it rare** and would hand a second lane write
access to build config — the silent-overwrite condition `CLAUDE.md` opens with. **`D-101` already
scopes the cost correctly: the entry stops *that item*, not the lane.**

**If it turns out not to be rare, that is a finding about how far ahead Lane A provisioned**, and
the handoff entry is where it gets recorded rather than absorbed.

#### 3. Nothing could detect a half-applied handover — `lane-state`, check 15

**Two `Active` rows means two agents believe they may commit. Zero means the work stops and the
table does not say why.** Neither was visible to anything: **`lane-boundary` reads SURFACES, not
states**, and would report a perfectly clean single-lane commit from a lane with no permission to
make one.

**Installed and negative-tested six ways** — the live register stays green, and **both halves of a
broken handover fail**, along with a state outside the four, a `Blocked` naming nothing, and an
`Active` cell that also claims another state.

**What it deliberately does NOT do, stated so nobody assumes otherwise:** it does not check that
the lane making a commit is the `Active` one. That needs `lane-boundary`'s surface map, **and it
would fail on the handover commit itself** — the one commit that must legitimately be made by the
lane going *out* of `Active`. **Specified, not built** (`D-56`). It also cannot tell whether the
Chief Editor really made the selection; `Selected` is prose written by whoever edits the table
(`C-22`).

### The work order — and why it is not a handoff entry

**`docs/LANE-B-WORK-ORDER.md`.** Lane B needs to be told what to do, and `C-26` — the thing it is
being told — **lives in this register, which `D-86` says Lane B is not expected to read.**

> **`C-26` as written repeats `B-011`'s parent defect one pass later: a ruling filed where its
> executor cannot see it.** Recorded plainly rather than quietly fixed.

**Three ways to close that, and the middle one is chosen:**

| Option | Verdict |
|---|---|
| Leave `C-26` in the register | **Rejected** — that is the defect |
| **A Lane A-owned work order in `docs/`** | **Chosen.** Exactly the arrangement `.github/WORKFLOWS-SPEC.md` uses for Lane C (`D-92`): a spec beside the surface it specifies, single-lane for its author, obvious to its reader |
| An `A-NNN` reverse handoff channel | **Deferred — it is `P1`, and the Judge scoped this to `P0`.** It also needs `D-90`'s *"Lane A does not raise entries here"* corrected, `ENTRY_FILE` widened, and check 10's disposition field generalised to the counterpart lane. **Three coupled changes is not a `P0`** |

**`B-013`, `B-014` and `B-015` are answered in full in the same pass** — `D-102` answered them
substantively and left them carrying a bare `Acknowledged`, **which is `B-017` child 3's defect one
field over: a receipt displayed where a disposition belongs.** All three stay `Open`, each for a
reason named in its own entry.

### What Lane B is `Active` to do

| | Work | Done when |
|---|---|---|
| **1** | The 13 unimplemented `CONFIG_LOG.md` declarations | `config-coupling` goes green — it is red right now and the red is correct |
| **2** | `lib/config/flags.ts` | The inventory's genuinely-absent file exists |
| **3** | **The `C-26` verification pass** over the ten `Applied` entries | Each is `Verified` with an independent verifier and the commit **read**, or a **new entry** records the rejection |

**On item 3 there is no `Rejected` resolution, and Lane B is told so explicitly.** `P2` would have
added one; the Judge scoped this to `P0`. **The interim rule is that a failed verification is
raised as a NEW entry, never absorbed by editing the old one** — because an entry left `Applied`
after being checked destroys the evidence that it was checked. **A pass that verifies ten and
rejects none is `a_check_that_cannot_fail` in a reviewer's hat**, and `D-93` names the reject count
as the health metric.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Lane B selected `Active` | ✅ §5.14bk | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §5, with `Selected` provenance | **— unaffected** |
| `Active` carve-outs | ✅ §5.14bk | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §5.1 | **— unaffected** |
| `lane-state` check 15 | ✅ §5.14bk | **— unaffected** | **— unaffected** | ✅ the check file | ✅ §5A.5, §6.5 | **— unaffected** |
| `LANE-B-WORK-ORDER.md` | ✅ §5.14bk | **— unaffected** | **— unaffected** | ✅ the file | ✅ §5A.2 | **— unaffected** |

**Agent files unaffected, and that is the `D-101` design working rather than an omission.** The
rule files stopped carrying lane state precisely so a handover would touch **one** document. **Core
hash unchanged at `a8173008845e`** — a Sprint boundary that edited three rule files would be the
duplication `D-101` removed. **Build spec unaffected** — no artifact created, sequenced or retired;
`LANE-B-WORK-ORDER.md` restates no scope, it points at `CONFIG_LOG.md` and the entries.
**`Modular_PRD` unaffected** — no sprint closed and no tier opened.

---

## 5.14bl `D-104` — The Channel's Own Documentation Was the One File Nothing Read

**Judge ruling, 2026-08-24: Lane A reselected `Active`** at a second Sprint boundary, to repair
findings from a review of `docs/handoff/`. **Lane B's `D-103` turn produced no commits; its work
order is UNSTARTED and stands unchanged.**

### The parent: a control scoped to entries, blind to the file that governs entries

`docs/handoff/README.md` and `TEMPLATE.md` are **the only files in the channel that nothing
read.** `handoff-response` filters entry filenames on `^[BC]-\d+`, so both are invisible to it;
`phase-manifest` asserts only that they **exist**; `graph-coverage` only that they are **in the
graph**.

**The README drifted through `D-101`, `D-102` and `D-103` with every check green**, and ended up
describing a vocabulary the directory no longer used:

| # | The README said | Actually |
|---|---|---|
| 1 | Terminal states are `Verified` / `Deferred` / `Withdrawn` / `Superseded` | **`Applied` absent** — the state **most entries in the directory carry** |
| 2 | *"**Five fields** carry the closure state"* | `Verified-By` missing — **and it is a prose tally, `G75`'s exact mechanism** |
| 3 | `Verified` closes a phase | Only with an **independent** `Verified-By` (`D-102`) |
| 4 | The check fails on missing `Kind`, `Status`, `Lane A` | **`Phase` missing**, and blank-versus-absent undistinguished |
| 5 | Closure fails on *"any blocking entry"* | **Phase-scoped** since `D-102` |
| 6 | *"**Three** dispositions"* | Another prose tally |
| 7 | *(silent)* | The **`D-103` `Active` carve-out** — the rule that makes this channel usable during a handover — was not in the channel's own README |

**This is `G74`'s shape one level up.** That gap was a control scoped to one lane and blind to the
other. This was a control scoped to entries and blind to the file that tells people how to write
entries.

### The control — `channel-docs`, `C-14` check 16

**Three couplings, all derived from source. Nothing in it is a restatement**, which is what
distinguishes it from the tally it exists to prevent:

| | Couples |
|---|---|
| **A** | **Resolution vocabulary, both directions.** Every resolution `closure-readiness` implements must be named in the README *and* the template; every resolution the template offers must be implemented |
| **B** | **Fields, both directions.** Every `- **X:**` the template declares must be read by some check; every field a check reads must be declared by the template. **Human-only fields are excluded BY NAME with a reason** — an unlisted unread field is a finding, not a shrug |
| **C** | **No prose tallies** in either file |

**A one-way check licenses the other direction** — the reasoning `G65`, `G71` and `C-17` all
record, and the shape `config-coupling` already uses.

**It caught four of the seven defects, and it caught three more nobody had reported:**

| Found | What it was |
|---|---|
| `awaiting` in `closure-readiness` | **A second word for `Applied`.** It was introduced and superseded in the same pass (`D-102`) and never reached the README or the template, because nothing had ever offered it. **Removed** |
| Its own doc comment | The check read **itself** as implementation: a comment naming an accessor call was reported as a field the template failed to declare. **A check that reads its own documentation as source is measuring itself.** Self excluded |
| A tally in the rewritten README | *"three entries shipped with blank `Kind`"* — **written by the repair pass, caught by the check installed in the same pass.** Fixed by taking the check's own advice: **name them instead of counting them** |

**And it fired on the `§5` edit made minutes later**, where Lane A's state cell explained itself
and read as a row claiming `Active` **and** `Eligible`. **The check was right and the document was
wrong**: a state column carries states, and the explanation moved below the table.

**What it cannot do, stated rather than buried.** Defects 3, 5 and 7 above are **semantic** — a
paragraph that describes a gate's old behaviour, or omits a rule entirely, reads exactly like one
that does not. **A check cannot read a paragraph for correctness.** `C-22`, and the control is the
reader. It also has a **known false-positive class**: a *historical* count does not drift and rule
C fires on one anyway. **Left blunt on purpose** — the fix it forces produces better prose every
time.

### `Phase:` gets the definition it never had — and Lane A's own review was wrong about it

**`D-102` made `Phase:` mandatory and never said what it meant.** Three readings were live: the
phase you work in, the phase you are blocked on, the phase that must fix it.

> **The `docs/handoff/` review reported `B-002` and `B-007` as MISLABELLED. That finding is
> withdrawn.** It assumed the *"phase you are blocked on"* reading without deciding it, and acting
> on it would have re-filed two correct entries into the wrong phase.

**The deciding argument is structural: `Blocks:` already carries the blocking relation.** A
`Phase:` meaning *"what this blocks"* would be a second copy of `Blocks:`, and a duplicated fact is
the drift mechanism this register records five times over. **So `Phase:` carries the other half —
whose artifacts are wrong, and therefore whose phase cannot close while this is open.**

**That is also the only reading that makes closure condition 2 mean anything**: *"every entry
raised against it"* is about defects in **that phase's own artifacts**, not about who is
inconvenienced. Under it, **`B-002` and `B-007` were correctly filed all along** — they block Lane
B's Phase 2 work and the file that was wrong is Lane A's.

**Split corrections file against the phase that must act first, and re-file when that part is
done.** `B-016` is the live example and now correctly reads `Phase: 3`.

### The rest of the review, applied

| Finding | Disposition |
|---|---|
| `B-013`, `B-014`, `B-015`, `C-001` had **no `Verified-By:` line at all** | **Added.** Unchecked today because it is only required once a resolution is `Verified` — so it would have surfaced at the **first verification**, which is the worst moment |
| Two placeholder conventions for "absent" — `—` and blank | **Normalised to blank.** Both parsed as absent, so nothing was broken; the directory was teaching two conventions |
| **`B-011`'s answer said *"`B-009` is `Verified`"*** and stayed on the page after `D-102` made it `Applied` | **Corrected by APPENDING, not editing.** An answer is an append-only record of what was said then. The README now tells answerers to date the claim or name the decision |
| `B-004` and `B-008` | **No change — they are the model.** `Superseded` with the overtaking decision named and evidence explaining what advanced past them |

### Two Sprint boundaries in one day — `C-27`

`D-103` selected Lane B; Lane B committed nothing; `D-104` selected Lane A back. **The mechanism
is being used as a per-task toggle rather than as a Sprint boundary, and the word *Sprint* means
less each time it is.**

**No minimum is imposed** — the Chief Editor owns the cadence and short cycles are legitimate
under `D-100`. **Recorded as `C-27` so the drift is visible if it continues.** A handover that
costs nothing is a handover that stops meaning anything.

### Conditions opened

| | |
|---|---|
| **`C-27`** | **The Sprint boundary is being used as a per-task toggle.** Two in one day, one of them producing no work. Watch, do not gate — a minimum cycle length imposed by a check would fire on the legitimate case |

### Gaps opened

**`G78`** — §5.1.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Lane A reselected `Active` | ✅ §5.14bl | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §5 | **— unaffected** |
| `channel-docs` check 16 | ✅ §5.14bl | **— unaffected** | **— unaffected** | ✅ the check file | ✅ §5A.5, §6.5 | **— unaffected** |
| `Phase:` definition | ✅ §5.14bl | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| README + template repair | ✅ §5.14bl | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §5A.3 description | **— unaffected** |
| `awaiting` removed | ✅ §5.14bl | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Agent files unaffected** — nothing here changes the lane map, the lane states or the shared
core; hash unchanged at `a8173008845e`, and a Sprint boundary touching three rule files would be
the duplication `D-101` removed. **Build spec unaffected** — no artifact created, sequenced or
retired. **`Modular_PRD` unaffected** — no sprint closed, no tier opened.

---

## 5.14bm `D-105` — The Declared Crossing Git Could Not See, and the Handover That Left No Trace

**The Lane A critic pass `D-102` owed, `D-103` inherited and `D-104` inherited again.** Performed
on a separate turn from all three (`D-93` rule 1), against the committed artifacts rather than the
closure narratives (rule 2). **Eight findings, none dismissed** — recorded in
`V1-PHASE-CLOSURE.md` §6.1d.

### The parent: `D-88`'s gate has never produced a declaration git can read

`lane-gate` accepted `Lane-Crossing:` **anywhere in the commit message**, using a regex over the
whole body. **Git's trailer parser reads only the last paragraph.** `D-102`'s declaration sat
above a blank line and a `Co-Authored-By:` block, so:

```
$ git log -1 --format='%(trailers:key=Lane-Crossing)' d6d406a
(empty)
```

**`git log --grep` finds three declared crossings in this repository. Git's own parser finds
none.** Three of three, since `D-88` installed the gate — **including `e675cc7`, the commit that
installed it.**

**`D-88` has two halves and only one of them ever worked.** The blocking half did its job: the
gate stopped an undeclared crossing and required a reason. **The audit half — *"the crossing is
still reported afterwards, so bypassing hides nothing"* — was never true**, because the
declaration it points at is not a trailer. **A tool that accepts a declaration no audit can find
is the reporting failure `D-82` recorded, inside the control built to close it.**

**Fixed at the source of truth rather than the symptom.** The gate now asks
`git interpret-trailers --parse`, which produces exactly the block git itself would. **The gate
and every downstream tool now agree by construction instead of by coincidence.** A body-only
declaration is rejected **with that specific diagnosis** — *"add a trailer"* is unhelpful advice
to an author who believes they already did.

**The three historical commits are NOT amended.** History here is append-only and rewriting three
commits to fix a trailer would cost more than it records. **`git log --grep='Lane-Crossing'` is
the audit path for anything before this decision**, and that is stated so a future reader does not
conclude no crossing was ever declared.

### The child: a lane held `Active` for a whole turn and left no trace

**`D-75` requires a handoff at every lane boundary** — *record what is done, what is
specified-not-applied, and what is open, then stop.* **Lane B held `Active` for the whole of
`D-103` and produced no commits and no artifact of any kind.**

**And Lane A had told it not to.** `LANE-B-WORK-ORDER.md` §5 read:

> *"Raise nothing special. **Your `Status: Open` entries in `docs/handoff/` are the report.**"*

**A lane that opens no entries produces an empty report, and an empty report is indistinguishable
from a lane that never ran.** Nothing in this repository can tell whether Lane B ran and found
nothing, started and hit a problem, or never started at all. **Open entries are a backlog, not a
handover** — `D-100` made that explicit for the backlog and `D-103`'s work order quietly used one
as the other.

**Repaired in the instruction, and NOT in the record.** §5 now requires a turn report — kind
`finding`, stating done / specified-not-applied / open — **especially when nothing was done**,
because *nothing happened* is a fact about the sprint worth knowing and may mean the work order was
unclear or the turn never began. **The `D-103` turn itself cannot acquire a report retroactively**
and is carried as **`C-28`**.

### And Lane A wrote Lane B's turn record

§5's Lane B row said *"no work performed"* as if it were a neutral fact. **It is Lane A's
observation of the commit log, not Lane B's report** — which is `B-013` item 4's defect, *a
resolution written by the side that wrote the fix*, **in a new place three passes after it was
recorded.** The cell now attributes it.

**No check can close this, and saying so is the honest disposition.** A control cannot fail
against an agent that never ran. **The register records the absence; that is a record, not a
gate**, and calling it a gate would be `probe_that_cannot_fail`.

### `G78` recurred inside the pass that closed it

**`D-104` installed `channel-docs` so channel documents would stop going unread — and hard-coded
two filenames.** `docs/LANE-B-WORK-ORDER.md` had existed for one pass; `.github/WORKFLOWS-SPEC.md`
for thirteen decisions. **Neither was read by anything.**

**The unread file contained the defect above.** `F29` lived in `LANE-B-WORK-ORDER.md` §5 — the
document the new control could not see.

> **A hard-coded list of things to watch is the same defect as a filename filter.** `G74` was a
> filter that excluded a lane; `G78` was a filter that excluded the instructions; **this was a
> list that excluded the newest instructions.** The fix each time is to **derive the set, not
> enumerate it.**

The document set is now a glob — non-entry markdown in the channel, plus any work order — so **a
fifth instruction document is covered on the day it is written.** On its first widened run it
found a restated tally in **each** work order, **one of them written by `D-103`.**

### Conditions opened

| | |
|---|---|
| **`C-28`** | **CLOSED 2026-08-25 (`D-123`).** Lane B's `D-103` turn has no handover and none is created retroactively — that absence remains the historical record. The forward condition this row carried ("closes when the next Lane B turn ends with a report") is satisfied by `B-047` at the `D-118` boundary; see §5.14cd |

### Gaps opened

**`G79`** — §5.1.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Trailer parsed by git | ✅ §5.14bm | **— unaffected** | **— unaffected** | ✅ `lane-gate.mjs` row | ✅ §6.1d, §6.4d | **— unaffected** |
| Turn report required | ✅ §5.14bm, `C-28` | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §5, §6.1d | **— unaffected** |
| Channel doc set derived | ✅ §5.14bm | **— unaffected** | **— unaffected** | ✅ `channel-docs.mjs` row | ✅ §6.1d | **— unaffected** |
| Critic pass recorded | ✅ §5.14bm | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §6.1d | **— unaffected** |

**Agent files unaffected** — the crossing rule they state is unchanged; **what changed is where the
declaration must sit, and the gate enforces that rather than the prose.** Core hash unchanged at
`a8173008845e`. **Build spec unaffected** — no artifact created, sequenced or retired.
**`Modular_PRD` unaffected** — no sprint closed, no tier opened.

---

## 5.14bn `D-106` — The Fixtures Were Never in the Repository, and Lane B Is Ready to Be Selected

**The Lane A critic pass over `D-105`**, on a separate turn (`D-93` rule 1), against the committed
artifacts (rule 2). **Five findings, none dismissed** — `V1-PHASE-CLOSURE.md` §6.1e. **Three of
the five were introduced by `D-105` itself.**

### The parent: fourteen claims of "negative-tested" with nothing runnable behind them

The register and the inventory assert *"negative-tested N ways"* **fourteen times**. **Not one
fixture was in the repository.** Every suite ran once, in a session scratchpad that is deleted with
the session, and **what survived was the sentence saying it passed.**

`V1-PHASE-CLOSURE.md` §6.4d made it explicit:

> *"**Reproduce:** `bun run check` · `sh negtest5.sh   # the lane-gate fixtures, in the
> scratchpad`"*

**A reproduction instruction pointing outside the repository.** This is `summary_outlived_source`
in its purest form — **the record of the test outlived the test** — and it sat inside the section
whose entire purpose is reproducibility.

**Why it matters more than a missing test usually would.** `bun run check` proves the checks pass
on a healthy repository. **The fixtures are the only evidence they FAIL on an unhealthy one**, and
that is the property every claim in this register rests on. `probe_that_cannot_fail` is recorded
here five times; **the defence against it was itself unverifiable.**

**Fixed: `scripts/fixtures/`, run with `bun run fixtures`.** Six suites, thirty fixtures. Three
properties are deliberate:

| | |
|---|---|
| **Every suite opens with a positive control** | A suite with no green case proves only that a check *can* fail. A check that fails on everything is as useless as one that fails on nothing |
| **Fixtures assert the FINDING, not merely a failure** | A check failing for the wrong reason satisfies a naive fixture — and this apparatus has produced that exact defect twice (`phase-manifest`, `sync-docs-unique`) |
| **It refuses to run on a dirty tree, and reports a failed restore as its own failure** | These mutate real tracked files. A crash mid-fixture on a dirty tree leaves edits indistinguishable from the author's work, and **a fixture suite that leaves damage behind costs more than it proves** |

**They found a defect in themselves on the first tracked run.** Porting one fixture out of the
scratchpad had turned a narrow assertion — *"this entry stops being named"* — into a wrong one:
*"a different entry appears."* **It reported `MISS` rather than passing quietly**, which is what
the positive-control discipline is for.

### `D-105` introduced three of the five findings

| | |
|---|---|
| **A shell string where every sibling used an array** | `lane-gate` interpolated the message path into `execSync`. Breaks on a space, worse on a quote. **The pass fixing the gate added the defect** |
| **A gate that blocks on its own failure** | A `git interpret-trailers` failure read as *"no declaration"* and blocked a correctly declared crossing — **against the principle stated at the top of `.githooks/commit-msg`**. The fallback now **replicates git's rule** (the trailer block is the last paragraph) rather than abandoning it or reverting to the whole body, and **announces itself** |
| **A required field with no answerable value** | `D-105` made a turn report mandatory; `D-104` defines `Phase:` as *the phase that owns the correction*; **a report on your own turn is not a correction.** Settled: **a turn report carries the reporting lane's own phase** |

### And a procedure that existed only in memory

**Two Sprint boundaries have been performed and there was no written procedure for one.** Both had
defects, neither was hard, and **both were performed from memory because there was nothing to
perform them from.** §5.2 now records the steps — and **marks the three unenforceable ones as
unenforceable**, so a green `lane-state` is never read as evidence the boundary was done properly.

### Lane B's eligibility — assessed, and the answer is yes

**`C-28` is about the turn that already happened and is not a blocker on the next one.** Reviewed
against what Lane B would actually hit:

| | |
|---|---|
| **State** | `Eligible` in §5, which is the only place it lives |
| **Work order** | Current. Amended by `D-105` (turn report required) and `D-106` (its `Phase`) |
| **Dependencies** | **None outstanding.** The `CONFIG_LOG.md` declarations and `flags.ts` need no package Lane A has not provisioned; `build-config.ts` exists and `bun install --frozen-lockfile` is clean |
| **Definition of done** | Machine-checkable: `config-coupling` goes green, and it names all thirteen rows on every run |
| **`C-26` independence** | **Sound.** Lane B raised the ten entries and Lane A fixed them, so Lane B verifying them is independent *of the fixer*, which is what the condition requires. `Verified-By: Lane B` is accepted |
| **Boundary duty** | Now stated: raise a turn report, `Phase: 2`, **even if nothing was done** |
| **Blocked on** | **Nothing.** `Q11`'s open naming half blocks `0002` only, which is not in Lane B's work order |

**Selecting Lane B is the Chief Editor's act and this decision does not perform it.** `D-106`
records that **nothing on Lane A's side is outstanding**, which was not true before `D-105` and
`D-106`: the work order told Lane B to leave no handover, and the field it now requires had no
answerable value.

### Conditions

**None opened.** `C-26`, `C-27` and `C-28` are unchanged and unclosed.

### Gaps opened

**`G80`** — §5.1.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Fixtures tracked | ✅ §5.14bn | **— unaffected** | **— unaffected** | ✅ `scripts/fixtures/` | ✅ §6.1e, §6.4d reproduce block, §6.4e | **— unaffected** |
| `lane-gate` hardened | ✅ §5.14bn | **— unaffected** | **— unaffected** | ✅ its row | ✅ §6.1e | **— unaffected** |
| Turn report `Phase` | ✅ §5.14bn | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §6.1e | **— unaffected** |
| Sprint boundary procedure | ✅ §5.14bn | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §5.2 | **— unaffected** |
| Lane B eligibility | ✅ §5.14bn | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected; §5 changes only when the Chief Editor selects** | **— unaffected** |

**Agent files unaffected** — no lane map, lane state or shared-core change; hash unchanged at
`a8173008845e`. **Build spec unaffected** — no artifact created, sequenced or retired; the fixtures
are apparatus. **`Modular_PRD` unaffected** — no sprint closed, no tier opened.

---

## 5.14bo `D-107` — Lane B's First Delivered Turn, and Lane A Takes Over the Stuck Items

**Lane B worked and reported.** Thirteen entries, `B-019`–`B-031`, plus the S0 configuration code.
**Judge rulings, 2026-08-24:** Lane A reconciles and commits the work as a declared crossing; Lane
A prepares the Stage 4 decision packet without deciding it; Lane A arbitrates the lane-model
proposal.

### The parent: `D-106` recorded `G80` closed while two of its fourteen claims stayed unbacked

**`B-024` and `B-025` are correct and they land on Lane A's most recent pass.** `D-106` set out to
back fourteen *"negative-tested N ways"* claims with tracked fixtures, wrote suites for six checks,
and **left `config-coupling` and `C-19` with none** — the two that `B-007` and `B-010` cite as
their evidence.

> **A gap recorded as closed, with the same defect still live inside it.** `G80` said the record of
> the test had outlived the test; **two of those records outlived it through the fix as well.**

**Fixed: both suites now exist.** `config-coupling` — positive control, an authoritative row with
no declaration, a declaration with no row, and the `§7.2` derived-view exclusion that **must not**
fire. `C-19` — positive control, a phase that never closed, a value naming no phase number, and a
phase absent from the register. **Lane B's rejections of `B-007` and `B-010` stand and are not
reversed by Lane A**; they are Lane B's to re-verify against tracked evidence.

### `B-021` happened to Lane A on the turn that answered it

Lane B reported that the fixture runner guards a dirty **start** and not a concurrent reader.
**On this turn Lane A ran the fixtures with a `git stash` interleaved, a `channel-docs` fixture
deleted the `Phase:` line from `TEMPLATE.md`, and the restore did not take.**

**The runner detected it and printed `working tree restored: NO`. Lane A read that line and
proceeded.** The finding is therefore sharper than filed: **the control existed and was skimmed
past.** A true statement nobody acts on is not a control. **Fixed by naming the files** rather than
reporting a boolean. **True concurrency safety is NOT added** — a lock file is a fifth thing to
maintain for a command one agent runs at a time; the honest scope is *do not run anything else
while fixtures run*, and a violation is now legible after the fact.

### Arbitration — the lane model, adopted in substance and rejected in form

**`B-019` and `B-023` identify a real contradiction that cost a whole turn.** `D-101` said
*exactly one lane is `Active` and only that lane may commit*; `D-103` then offered Lane B a turn
while Lane A held `Active`. **Both cannot hold.**

**Adopted:** **`Eligible` means the handover is OFFERED — the lane may begin work and commit its
own surfaces without a further boundary act.** `Active` names the lane that owns the boundary
record and the governing tiers.

**Rejected: the second vocabulary.** `Active` | `Eligible` | `None` | `Done` beside ready |
blocked | verified | complete is **eight terms for a two-agent handover**, and this register
records a restated status drifting five separate times — `G55`, `G56`, `G58`, `G75`, and `B-027`
in this very batch. **`None` is rejected specifically**: a lane that is not offered is `Blocked` on
a named item or `Done`; if neither, it is `Eligible`. **The work condition is not a new field
because it already exists** — it is the `Resolution` on the entries and the content of the turn
report. Putting it in §5 would be the duplication `D-101` removed from the rule files.

### The rest of the batch

| | |
|---|---|
| **`B-020`** | **Right: `config-coupling` proves names, not values.** `EDITORIAL_ROUTE = "/wrong"` passes. **Not fixed by extending the check** — comparing a TypeScript expression to a markdown cell needs a value grammar per type and would put the check in disagreement with the compiler. **The oracle is Lane B's tests**, which assert the exact strings. The limit is now stated in the check's own header |
| **`B-027`** | **Lane A's own bug.** The `D-103` handover-note script matched `TEMPLATE.md` alongside the entries, so the reusable template carried live lane state and **manufactured a false historical claim on every copy.** Fixed **by deletion** — an accurate duplicate only drifts later |
| **`B-028`** | **Dissolved rather than solved.** Lane B cannot return `Active` because §5 is Lane A's surface — **and it never needed to.** A lane does not hand `Active` to anyone; the Chief Editor authorizes the boundary and the `Active` lane records it. What a lane owes is the turn report, in the channel it can always write |
| **`B-030`** | **Followed exactly, and it prevented a real error.** The index held pre-clarification `B-019`–`B-023` while the S0 code sat unstaged. **The stale index was discarded, not committed**; the packet was re-staged from a reviewed working tree, and implementation is split from evidence because a commit cannot contain its own identifier |
| **`B-031`** | **Sound, and superseded in its routing only.** It assumes two Lane B turns; the Judge directed a Lane A takeover instead. **§§3–6 are adopted as procedure and Lane A executed them.** **§8 survives intact** — the second takeover, gated on `B-029`, is still how S1–S4 begin |

### `B-029` — the Stage 4 decision packet, prepared and NOT decided

**Judge ruling: Lane A assembles, the Chief Editor decides.** Migration `0002` stays **blocked and
unauthorized**. `B-029` stays `Open`, **and that is the correct state** — a decision window
awaiting the only person who can close it is not a defect.

| # | Open item | Why it cannot be guessed |
|---|---|---|
| **1** | **`Q11`'s stored field NAME** | Shape is decided (`D-97`): `satisfied` \| `not_applicable` \| `override_not_four_eyes`. **The name is not.** `identity_assurance` is reserved. A guessed name is permanent in an append-only audit table |
| **2** | **`QA3`: typed columns vs versioned JSON** | Determines whether later questions are migrations or writes. **The cheapest decision now and the most expensive to reverse** |
| **3** | **Notice-as-article** | Whether a retraction notice is a row in the same table or a distinct kind. Changes every query that counts published work |
| **4** | **Risk tier** | Its values and whether it is stored or derived. `CONFIG_LOG.md` §7.2's rule says a derived view is never stored |
| **5** | **Report-record shape and binding** | What a report binds to, and whether the binding survives a retraction |
| **6** | **Approved-state backfill** | What existing rows become under the ten-state model. `0001` carries eight |
| **7** | **`on delete restrict`** | Whether the audit trail may ever lose a parent row. **Interacts with `PR-12` folder separation** |

**All seven alter the same append-only schema, so they are one pass, not seven.** Deciding them
piecemeal produces a migration per decision against a table that must not churn.

### The crossing, declared

**This commit spans Lane A and Lane B.** Lane B wrote `lib/config/build-config.ts`,
`lib/config/flags.ts` and `__tests__/build-config.test.ts` and could not commit them; **Lane A
commits them on the Judge's instruction with a `Lane-Crossing:` trailer** under `D-88` — in the
trailer block, where `D-105` established git can actually read it. **Lane B's authorship is stated
in the message.** The code is **kept, not rewritten**: `config-coupling` passes on it.

### Conditions

**None opened.** `C-26` advances — **seven of the ten entries are now `Verified` by Lane B**, and
three are correctly rejected pending the fixtures this decision adds. `C-27`, `C-28` unchanged.

### Gaps opened

**`G81`** — §5.1.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Two missing fixtures | ✅ §5.14bo | **— unaffected** | **— unaffected** | ✅ `scripts/fixtures/` row | ✅ §6.1f | **— unaffected** |
| `Eligible` = offered | ✅ §5.14bo | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §5 | **— unaffected** |
| Lane B's S0 code | ✅ §5.14bo | **— unaffected; S0 scope unchanged** | **— unaffected** | ✅ `flags.ts` now present | **— unaffected** | **— unaffected** |
| Stage 4 packet | ✅ §5.14bo | **— unaffected until decided** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected until decided** |

**Agent files unaffected** — the lane map is unchanged and §5 remains the only place lane state
lives; core hash unchanged at `a8173008845e`. **Build spec unaffected** — S0's scope did not
change; its Lane B half is now implemented rather than re-specified. **`Modular_PRD` unaffected** —
no sprint closed and no tier opened; **the Stage 4 items change it only once decided.**

---

## 5.14bp `D-108` — The Lane Lock Is a State Machine; the Tracking Files Said Twenty Things Were Open

**Judge ruling, 2026-08-24, in the Chief Editor's own terms:** *"the rules kept not being applied
hence the change to keep only one active … when active the other are blocked; until lane
completion then the other lanes are set eligible."* **This supersedes `D-107`'s definition of
`Eligible`.**

### The parent: `D-107` loosened the lock and the loosening is what failed

`D-101` said **only the `Active` lane may commit.** `D-107` arbitrated that `Eligible` meant
*offered — may begin and commit without a further boundary act*, to explain how Lane B could work
while Lane A held `Active`.

**That reading is now withdrawn, and the reason is empirical rather than theoretical.** It is
exactly the reading under which a turn was **started, doubted and abandoned** (`D-105` `F29`), and
under which two lanes could each believe they were permitted to work.

| State | Means | May commit? |
|---|---|:---:|
| **`Active`** | This lane is **running** | **Yes — only this lane** |
| **`Blocked`** | Another lane is `Active`; the row **names that run** | No |
| **`Eligible`** | The active turn has **completed** and the lock is **free** | No — not until selected |
| **`Done`** | Definition of Done met and accepted | No |

**Two legal configurations, and both matter:** *one `Active`, the rest `Blocked`* is a turn in
progress; *no `Active`, the rest `Eligible`* is the gap between turns. **`Eligible` beside an
`Active` is the illegal one.**

**Lane B and Lane C become `Active` exactly as Lane A does** — the Chief Editor selects, that lane
runs and commits, the others are `Blocked` on the named run, and on completion everyone unfinished
returns to `Eligible`. **There is no lane that only ever waits.**

### `B-033` was right about the checker, and about all three of its gaps

`lane-state` required one `Active` and **preserved every other contradiction**. Closed:

| Gap | Now |
|---|---|
| A row could be `Blocked` **and** `Eligible` | **One lock state per row.** Lane C's item-level blockers — `C-18`, `C-24`, `C-25` — are **work conditions** and live in those conditions, not in the lock column |
| `Eligible` beside `Active` passed | **Fails**, naming the reading that caused it |
| `Blocked` with no `Active` run passed | **Fails** — blocked on nothing |

**`no lane Active` is no longer a finding.** `D-103` made it one when it was a half-applied
handover; under the ruling it is the **between-turns state**, and the fixture asserting it was
removed rather than left to enforce a superseded rule.

### `B-028` resolved, because it became load-bearing

A lane cannot make itself `Active` — §5 is Lane A's surface. `D-105` said *the Chief Editor
authorizes and the `Active` lane records it*, which **fails when the outgoing `Active` lane is the
one that cannot write there.**

> **Carve-out, the same shape `docs/handoff/` already uses: Lane A may edit §5's lane rows at a
> boundary regardless of which lane holds the lock.** A boundary that only one lane can record
> must not require that lane to hold the lock in order to record it. **Nothing else is carved out**
> — holding the pen at a boundary is not holding the lock.

### The routing half of `B-033` is NOT adopted

`B-033` also reports an A→B→C route with returns C→B→A and no direct A↔C. **The ruling is about
exclusivity, not adjacency.** Adopting the route would make **Lane A answering `C-001` a
violation**, and would send a packet B→C→B→A — **two extra crossings that change no evidence**,
which is `B-033`'s own argument against routing, applied one step further.

### The tracking files: twenty entries said `Open` and were not

**`Status` and `Resolution` answer different questions** and `D-101` separated them for this
reason: `Status` is *has Lane A replied*, `Resolution` is *is it finished*. **Twenty entries
carried a full Lane A answer and still read `Open`**, so every report of queue depth was wrong.

**Corrected — and the honest picture is less flattering, which is the point:**

| Before | After |
|---|---|
| *"20 open, 12 answered"* | *"0 open, 34 answered; **22 still carry NO resolution**"* |

**`0 open` on its own reads as an empty backlog.** It is not, so the queue depth now reports the
unresolved count beside it. **A number that flatters is worse than no number.**

### A rejected entry had no way to say so

`B-007`, `B-010` and `B-011` are `Applied`. **Lane B examined all three and rejected them** — in
`B-024`, `B-025` and `B-023`. **Nothing in the rejected entry said so**, so a reader saw a fix
awaiting verification and could not tell it had already been refused.

**There is still no `Rejected` resolution** (`D-105` P2, drafted and not built). **`Examined-By:`
records the fact without inventing the state**: it names the actor and links the entry that
carries the rejection. **The link is the record.**

### `B-032` — the schema packet gets its frame

**The most useful thing this channel has produced.** `B-029` grouped seven items because they
share one migration window; **`B-032` shows they do not share one semantic class** — which is what
decides the schema rather than merely the sequencing. **Its four-part model is adopted as the
frame** for the decision packet, and its classification table is carried into it unchanged.
**No decision is taken and `0002` stays unauthorized.**

### Conditions

**None opened.** `C-26` unchanged — 7 verified, 3 rejected pending re-verification. `C-27`,
`C-28` unchanged.

### Gaps opened

**`G82`** — §5.1.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Lock state machine | ✅ §5.14bp | ⚠ **claimed unaffected — WRONG, corrected `D-152`** | ⚠ **claimed unaffected — WRONG, corrected `D-152`** | **— unaffected** | ✅ §5 | **— unaffected** |
| `lane-state` hardened | ✅ §5.14bp | **— unaffected** | **— unaffected** | ✅ its row | ✅ §6.5 fixtures | **— unaffected** |
| Boundary carve-out | ✅ §5.14bp | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §5 | **— unaffected** |
| `Status`/`Examined-By` | ✅ §5.14bp | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Agent files unaffected — and this is worth stating rather than assuming.** The rule files say
*only the `Active` lane may commit*, which `D-107` had contradicted and this ruling **restores**.
**They were right and §5 was the deviation**, so the correction removes drift instead of creating
it. Core hash unchanged at `a8173008845e`. **Build spec and `Modular_PRD` unaffected** — no
artifact created or retired, no sprint closed, no tier opened.

> **Corrected 2026-08-29 (`D-152`, raised in `B-033`'s verification review). The claim above was
> half right, and the half it checked is exactly what hid the other half.** The rule files' *commit
> rule* was correct and this ruling did restore it. But their **state table** carried `D-107`'s
> superseded `Eligible` — *"backlog open, work specified, not currently committing"* — which is the
> reading this ruling replaced. **A tier was marked unaffected on the strength of one correct
> sentence, while another sentence in the same file still carried the meaning being superseded.**
> `G65`'s arrival-not-correctness class, in the tier column rather than a gap row. **The Build Spec
> carried it too**, and additionally named which lane held which state while claiming not to restate
> live state. Both corrected by `D-152`. **The row above stands unedited** — an answer is
> append-only (`D-104`) — and the tier cells are annotated rather than rewritten.

---

## 5.14bq `D-110` — `QA3` and Notice-as-Article Ratified

**Judge rulings, 2026-08-25.** Two of the S1 window's items are settled. **No migration is
authorized by this decision** — `0002` waits on the three that remain.

### `QA3` — the typed/versioned boundary, ratified

**Not a global format choice.** The question `B-032` reframed and the Chief Editor approved:

| Form | Applies to |
|---|---|
| **Typed columns** | Anything participating in a **constraint, state transition, permission, filter, join, retention rule, or binding** — lifecycle states, transition-control status, risk tier, identifiers, foreign keys, timestamps, and **every version identifier** |
| **Versioned JSON** | **Only** the immutable explanatory body of a report or brief, always carrying a typed `schema_version` |

> **`JSON is never the source of truth for a gate, a state transition, a referential relationship,
> or a board filter.`**

**This was the parent of the remaining three decisions and is why it was ruled first.** §5.14's
own dependency table records `G17` as gating *"independence classification storage"* — which is
`Q11`'s column. **Ruling `Q11`'s name before `QA3` would have presumed a typed answer to an
unmade decision.**

**What it buys:** later growth in a report body is a **write, not a migration** on an append-only
table. **What the rejected alternatives cost:** all-typed makes every future report field a
migration; all-JSON leaves `Q11` unconstrainable, makes `G-02` uncomputable by query, and would
have **reversed `D-97`**.

### Notice-as-article — the physical names, ratified

**`D-06` was never reopened**: a notice is an ordinary article citing the original, running the
same five gates, creating **no new article states**. Ratified now is only its physical form:

| Column | Shape |
|---|---|
| `articles.article_kind` | `standard` \| `retraction_notice` |
| `articles.original_article_id` | nullable for a standard article, **required** for a notice |

**`Retracted` is NOT added to `article_state_v2`.** It would be an eleventh lifecycle state
against `D-06` and the accepted transition specification — and it is the intuitive wrong move,
because *retracted* sounds like a state. **The original's retraction condition is DERIVED** from a
published notice and its publication records; it is never stored.

### `G19` had four parts and the proposal named three — the fourth was already decided

**`B-032` addressed notice type, reference and derived-superseded status, and never mentioned
inherited targets.** Checked before ratifying rather than after: **`D-08` decides it**, and
`FN-PUBLICATION-09-10-13.md` §4.3 already implements the rule — *targets are inherited from the
original's transaction record; mirror scope is **derived, never recalled***.

**So ratifying the two names does not close `G19` with a hole.** Recorded because `B-032` never
cites `D-08`, and a later reader comparing the proposal against `G19`'s four parts would
reasonably have concluded one was dropped.

### Filing — these are register decisions, not ledger entries

**`DECISION_LOG.md` is scoped** to ratification events for decisions that gate a **config value**,
and to `OD1`–`OD3`. **A schema-shape ratification filed there would be the wrong tier**, and would
start the second-decision-register drift that file's own header forbids.

### Gaps closed

**`G17`** and **`G19`** — §5.1.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `QA3` ratified | ✅ §5.14bq, §5.1 `G17`, §5.15 | **— unaffected until `0002`** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: `QA3` is a register-only ID and appears nowhere in §10** |
| Notice names ratified | ✅ §5.14bq, §5.1 `G19`, §5.15 | **— unaffected until `0002`** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected — `D-06` is unchanged and no requirement text moves** |

**Build spec unaffected and that is deliberate**: both are schema shapes that land when `0002` is
authorized, and `0002` is not. **Writing them into the build spec now would record work as
sequenced that is still blocked on three decisions.**

---

## 5.14br `D-111` — The S1 Window Closes Except One Residual

**Judge rulings, 2026-08-25.** Decisions 1, 3a, 3b and 3c are settled; decision 2 is settled in
**shape only** and its residual is named rather than absorbed. **`0002` is still not authorized** —
it is authorized in the pass that closes `G20`'s residual.

### 1 · `Q11` — the column is `line_separation_status`

**Approved.** `workflow_transitions.line_separation_status`, typed and non-null, carrying the
`D-97` values `satisfied` | `not_applicable` | `override_not_four_eyes`.

**The name states what the system can prove structurally.** `judgment_independence_status` was
rejected because the code only ever writes a structural fact — **that was `Q11`'s original defect
and it is now closed rather than renamed around.** `line_boundary_crossed` was rejected as the
boolean `D-97` already refused; **a crossing boolean is a derived view, never a stored duplicate.**

`identity_assurance` remains **separate executor-provenance data**; `judgment_independence` stays
**reserved and null** until an instrument exists.

**Propagation is one pass across the six marked locations** — `TR-DM-02`, `NFR-03`, `AC-07`,
`AC-08`, `G-02`, `FR-05`'s Outputs line — **and it happens when `0002` is authorized, not now.**
`NFR-03` still needs its own rewrite rather than a passthrough (`C-16`).

### 3a · Report record shape — approved

Immutable record, typed anchors per `D-110`'s boundary: identity · `article_id` · an **as-at
transition anchor** · tenant · template version · judgment-rule version · JSON schema version ·
frozen snapshot · optional `supersedes_report_id`.

**`D-14` is the rule this makes enforceable** — an issued report is never edited or deleted; you
supersede with a new report citing the original.

### 3b · Template applicability is anchored on the article's trigger creation date

**Approved, in the Chief Editor's terms:** report template versions are **auditable and
successive** — a new version **always replaces the old going forward** — and **the fields a report
carries exist only per its template version**, so **the template version schema is what records
which fields are required.**

> **A template version may NOT be applied backward.** The applicability anchor is the **article's
> trigger creation date** — `articles.created_at`, the transaction line of the article flow — and
> **not** the report generation date.

**Why the trigger date is the safer anchor, and this is the reasoning that decides it:** the
question a reader must answer later is *were these fields required when this work happened*. The
generation date answers *when did someone press the button*, which drifts freely from the work.
**Chronology of the article flow is the only anchor that stays true when a report is regenerated.**

**This closes `G42`** — *"a new report template may not be applied to a period that never recorded
its fields."* The constraint now has both a home (3a's `template version`) and an anchor.

### 3c · A retraction never detaches a report

**Approved.** **Retraction cannot remove a report's link**, because the linkage runs through the
article's originating record and exists **for auditability**, which a retraction is precisely the
event that makes matter most.

**What "the editorial brief" means here — checked, because it could have meant a table.**
`D-59` records the MVP and POC as *"two flows of one editorial brief"*, and the Board proposal's
**§16.3 explicitly withholds storage authorization** for the Editorial Briefcase: *"operating
labels, not repository folders, application routes, database tables, or authorization to implement
storage."*

> **Ruled: the brief is the ARTICLE'S ORIGINATING TRIGGER RECORD — the existing `articles` row —
> not the P0-EVR Briefcase.** All reports created under an article flow link to it via
> `article_id`, anchored at `articles.created_at`.

**So no new table is created and §16.3 is not amended.** Had this been read the other way, `0002`
would have authorized storage the Board proposal withholds — **the reason it was asked rather than
inferred.**

**A retraction creates new evidence; the prior report stays bound** to the article and to the
point-in-time record on which it was issued.

### 2 · Risk tier — shape approved, **residual open and named**

**Approved:** typed `articles.risk_tier`, **never** in `article_state_v2`, **never silently
recomputed after publication**. A calculated current-risk view is derived from recorded inputs,
never stored beside an independently editable duplicate.

**NOT approved, because it was not asked:** the tier **vocabulary**, the **assignment authority**,
the **propose-and-confirm mechanism**, and the **provenance fields**.

> **`G20` therefore does NOT close here.** Recording it closed on a shape-only ruling would be the
> defect `D-109` had just finished correcting — a settled-looking row hiding an open question.
> **Carried as `C-29`.**

### Gaps closed

**`G16`** (`Q11`'s name), **`G42`**, **`GA1`/`GA3`/`GA4`** — §5.1. **`G20` remains open on its
residual.**

### Conditions opened

| | |
|---|---|
| **`C-29`** | **`G20`'s residual: tier vocabulary, assignment authority, propose-and-confirm, provenance.** The shape is decided and the content is not. **`0002` may not be authorized while this is open** — `risk_tier`'s type is settled but its domain is not, and a column with an undefined domain is a text field with a hopeful name |

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `Q11` name | ✅ §5.14br, §5.1 `G16` | **— unaffected until `0002`** | **— unaffected** | **— unaffected** | **— unaffected** | **— on the `0002` pass**: six `[Q11]` markers clear together |
| Report shape + binding | ✅ §5.14br, §5.1 | **— unaffected until `0002`** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| Brief = originating record | ✅ §5.14br | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected; §16.3 NOT amended** |
| Risk-tier residual | ✅ §5.14br, `C-29` | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

**Build spec unaffected throughout, and deliberately.** Every item here is a schema shape that
lands when `0002` is authorized. **`0002` is not authorized**, and recording these as sequenced
work would claim a migration is scheduled while a condition still blocks it.

---

## 5.14bs `D-112` — The S1 Window Is Closed and Migration `0002` Is Authorized

**Judge rulings, 2026-08-25, closing `C-29`.** **Every item in the S1 window is now settled**, so
`D-17`'s hold condition — *"until every S1 window decision is settled"* — is met. **`0002` is
authorized.**

### `C-29` closed — the risk-tier domain

| | Ruling |
|---|---|
| **Vocabulary** | `standard` \| `sensitive` \| `high_sensitivity` — **three values.** `SEC-05` needs exactly one threshold; more create thresholds nobody defined, fewer cannot express the trigger |
| **Authority** | **Asymmetric: anyone logging may RAISE a tier; only the Chief Editor may LOWER it.** Raising is a safety act and must never be blocked; lowering removes a control and is a decision |
| **Propose-and-confirm** | **Not in v1.** `FLAG_S6_RISK_AT_INTAKE` already exists, is `false`, and enables at S5 — **v1 is manual assignment**, and building the mechanism now would implement behind a false flag |
| **Provenance** | `risk_tier_assigned_by` · `risk_tier_assigned_at` · `risk_tier_reason` · `risk_tier_ruleset_version` (**null in v1**, no rule proposes). All typed per `D-110` — they carry audit reconstruction, so none is JSON |

**The asymmetry is the load-bearing part.** Both symmetric alternatives fail: *Chief Editor only*
means a reporter who spots risk cannot flag it, and *anyone may change* means a control can be
silently removed. **`G20` closes.**

### `Q11`'s propagation performed — all six markers cleared, `C-16` closed

`D-111` decided the name and deferred propagation to the `0002` pass. **This is that pass.**

| Row | What changed |
|---|---|
| `TR-DM-02` | The field is `line_separation_status`; **no longer blocked** |
| `NFR-03` | **Rewritten, closing `C-16`.** *"Never inferred at read"* is **DROPPED, not defined** — `D-69` found the term undefined corpus-wide and measured by nothing, and **an unfalsifiable requirement can be neither satisfied nor breached.** What survives is what the Method can test |
| `AC-07`, `AC-08` | Field name only. **The values `satisfied` and `override_not_four_eyes` were never retired** — `D-97` kept them, and the rows had said otherwise |
| `G-02` | Data Source names the real column. **The boolean caveat is gone because the boolean was refused**, so `G-02` computes from one field and needs no amendment. **`G64` closes** |
| `FR-05` Outputs | One typed output, not two. `identity_assurance` is separate provenance |

**`G-02` and `FR-05` keep their `⚠`** — that is an independent `OD2` tie and was never `Q11`'s.

### `0002` authorized — and what authorization does and does not mean

**Authorized:** the hold in `D-17` is released. `0002_*.sql` may be created in
`supabase/migrations/`, and **`0001_init.sql` is never edited** — it stays frozen.

**Lane A does not write it.** `supabase/` is Lane B's surface. **Lane A's obligation under
`B-029` repair 4 was to supply the final typed schema contract, and this decision is that
contract:**

| Object | Contract |
|---|---|
| `workflow_transitions` | `+ actor_id`, `line_assignment`, **`line_separation_status`** typed non-null (`satisfied` \| `not_applicable` \| `override_not_four_eyes`), `identity_assurance`, `event_type`, `agent_id`, `agent_run_id`, `supervising_human_id`, `assisting_agent_id`, `actor_type`. **`article_id` uses `ON DELETE RESTRICT`** (`D-07`) |
| `articles` | **`article_kind`** (`standard` \| `retraction_notice`), **`original_article_id`** nullable/required-for-notice, **`risk_tier`** (`standard` \| `sensitive` \| `high_sensitivity`) plus its four provenance columns, **tenancy column** (`D-73`/`D-79`) |
| `article_state_v2` | The ten-state lifecycle. **`Retracted` is NOT a state** (`D-110`); backfill is `D-55`'s total map with **no default branch** — an unknown old value fails loudly |
| Report record | Immutable: identity, `article_id`, as-at transition anchor, tenant, template version, judgment-rule version, JSON schema version, frozen snapshot, optional `supersedes_report_id` |
| Template applicability | Anchored on **`articles.created_at`**; **no backward application** (`D-111`) |
| Storage form | **`D-110`'s boundary**: typed for anything enforced; versioned JSON only for an immutable body, with a typed `schema_version` |

**What authorization does NOT mean.** It does not schedule S2–S4, and it does not make `0002`
correct — **it removes the block.** `B-031` §8's gate still governs when Lane B takes the second
turn, and the migration is verified by Lane B's tests, not by this decision.

### Gaps and conditions closed

**`G20`**, **`G64`** — §5.1. **`C-29`** and **`C-16`** — closed above. **The S1 window carries no
open item.**

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `C-29` closed | ✅ §5.14bs, §5.1 `G20` | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ risk-tier rows |
| `Q11` propagation | ✅ §5.14bs | ✅ the `Q11` row | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **all six markers cleared** |
| **`0002` authorized** | ✅ §5.14bs | ✅ **S1 unblocked — the first build-spec change these decisions have earned** | **— unaffected** | ✅ `0002` becomes an expected artifact | **— unaffected** | ✅ `TR-DM-02` |

> **The build spec was recorded *unaffected* by `D-110` and `D-111` on the stated ground that both
> were shapes landing when `0002` was authorized. `0002` is now authorized, so it is affected —
> and saying so here is what makes those two earlier rows honest rather than convenient.**

---

## 5.14bt `D-113` — The S1 Window Was Not Closed; `0002`'s Authorization Is Provisional

**Lane A correction pass, 2026-08-25, raised by Lane B as `B-034`–`B-037`.** `D-112` recorded the
S1 window CLOSED and released `D-17`'s hold. **Two of the window's items had never been put to the
Judge.** This decision corrects the register, downgrades the authorization to **PROVISIONAL**, opens
`C-30`, and carries the packet the Judge needs to close it properly.

**It rules nothing.** The two open items are Chief Editor decisions and are presented, not decided
(`D-93`, `P0`).

### The root cause — one window, two keyings, no mapping

**Neither list was wrong. They disagreed about membership, and nothing compared them.**

| | Keyed by | Contains |
|---|---|---|
| `V1-DECISION-REGISTER.md` §5.15 **Stage 4** | **gap** — `G16`, `G17`, `G19`, `G20`, `G42`, `GA1`/`GA3`/`GA4`, `G57`, `GA9` | eight rows, **all ✅** |
| `V1-BUILD-SPEC.md` **§S1** | **numbered item** — 1–8 | items **4** and **5** never ruled |

`D-112` read the gap-keyed table, saw eight ticks, and closed the window. **A reader checking either
list alone saw a complete window**, which is why this survived a `tier-sweep` that passed on every
run — the sweep verifies that a decision ID **arrives** in a tier, and `G65` records that staleness
is invisible to it. **This is `G65`'s fourth instance and its most expensive.**

> **`GA2` is the proof it was structural rather than careless.** It is a gap, in the `GA` series,
> and §5.1 labels it *"Insert/read-only half remains **S1 window item 4**"* — **in the window, by
> name, in the same document** — and it was never a row in the gap-keyed table. `C-11` and `C-12`
> could not be rows there at all: they are **conditions**, and the table has no column for one.

**Fixed by binding the two enumerations to each other**, item-to-gap, in §5.15 Stage 4. A window
described in two keyings with no mapping is a window nobody can count.

### What is still open — and this is the packet, not the ruling

| | Item | What already exists | What is genuinely undecided |
|---|---|---|---|
| **4** | Which tables become **insert/read-only** — `GA2`'s open half, `C-11` | `NFR-02` makes the audit table append-only, and Build Spec §S1's *"Also in S1"* line already commits to **revoking UPDATE and DELETE on `workflow_transitions`**. `D-14` forbids editing or deleting an issued report | **Publication records** (`C-11`, audit Step 5), and **the report record's physical immutability** — `D-111` §3a fixed its SHAPE; nothing states how UPDATE/DELETE are revoked, whether by grant, trigger or RLS |
| **5** | **Retention floor and table classification** — audit Step 9, with `C-12` beside it | `D-42` supplies the data-class × regime matrix and *"every record carries its retention class from intake"*. `D-44` resolved `G46` — the product holds a payment **confirmation**, not a payment record | **The floor itself** — no number, no per-table classification. `G40` is open and records that `NFR-08`'s *"reconstructable from the log alone"* carries **no retention qualifier**, so the product currently promises what lawful disposal removes |
| — | **`C-12`** — the record evidences **non-performance** | `TR-DM-03` tracks publication outcomes | Whether a **failed or unperformed** attempt is a row. Today it is inferred from absence, and absence is exactly what `G41` records the product cannot explain |

**The two items do not carry the same deferral risk, and that is the decision-relevant fact.**

> **Item 4 is cheaply deferrable. Item 5 is not.** A `REVOKE` is a later migration touching no data.
> **A `retention_class` column added after an append-only table holds rows cannot be backfilled** —
> there is no authority to invent the class of a record already written. If item 5 is deferred, it
> is deferred **with data loss already implied**.

**`C-12` follows item 5's fate for the same reason**: a non-performance row that does not exist at
insert time cannot be reconstructed later, and `G41` names precisely that — an empty view cannot
distinguish *nothing happened* from *the record is gone*.

### Four stale rows corrected — every one produced by `D-110`–`D-112`'s own passes

| Row | Read | Now |
|---|---|---|
| §5.1 `G16` | **`Open`** | Closed `D-111`; both halves decided |
| §5.1 `G20` | `D-112`'s **heading** over `D-111`'s **body** — *"NOT decided … `0002` may not be authorized while this is open"* | One verdict. **`D-112` rewrote the status and left the text** |
| §5.1 `G64` | *"Specified, not applied"*, naming `judgment_independence_status` and the rejected boolean | Closed `D-112`; both names retired |
| §5.15 `Q11` name | **`Open`** | Decided `D-111` |

**All four were written by the passes that closed them.** A decision that closes a gap in its own
narrative section and does not touch the gap table leaves the table asserting the opposite —
and `tier-sweep` reports ✅ because the decision ID **is** present in the tier.

### `0002` — PROVISIONAL, and what that permits

**The hold is not reinstated and the authorization is not withdrawn.** `D-112`'s typed schema
contract stands: every field in it was properly ruled, and nothing here reverses `D-110`, `D-111` or
`D-112`.

**What changes is the claim attached to it.** `D-17` releases on *"every S1 window decision is
settled"*, and two are not, so the authorization rests on a premise that is false. It is marked
**PROVISIONAL** in the Build Spec and here:

- **Lane B is NOT selected** while it stands provisional. `B-031` §8's gate is not met after all.
- **No `0002_*.sql` is written**, by any lane. `0001_init.sql` remains frozen.
- **`B-029` and `B-032` keep `Resolution: Applied` at `c9a0bc5`** — the contract they asked for was
  delivered and is in the tree. **What is provisional is its completeness, not its content**, and
  rewriting an accurate `Applied` row would destroy the evidence that it was checked.

### `C-30` opened

| | |
|---|---|
| **`C-30`** | **Build Spec S1 items 4 and 5 are unruled: insert/read-only table classification (`GA2`'s open half, `C-11`) and the retention floor and table classification (`C-12` beside it).** `0002`'s authorization is PROVISIONAL until the Judge rules them or explicitly removes them from `0002`'s scope with a named later owner. **A silent deferral is not available for item 5** — a retention class cannot be backfilled onto rows already written |

### Two control defects found while reading the channel — `G83`, `G84`

**Neither was raised. Both were found by running the check and disbelieving its summary line.**

**`G83` — `handoff-response` reported `0 open` with four unread entries in the directory.** The
branch handling a blank `Lane A` field `continue`d **before any counter ran**, so the entry landed
in no bucket. **The one line a human reads was wrong in the direction that hides work**, and
`closure-readiness` printed `open 4` in the same run. **Two checks disagreed about one directory and
nothing compares them.** It also misdescribed the file — the field was present and blank, and the
message said it did not exist; `fieldPresent()` was written for that distinction in `D-102` and used
for `Kind` and not here.

**`G84` — a turn report is indistinguishable from an unresolved defect.** `D-105` requires one at
every lane boundary and `D-106` files it under the reporting lane's phase, but there is **nothing in
a report to resolve**, so it can never carry a terminal `Resolution` — and four of them sat
permanently inside *"still carry NO resolution"*. **A backlog figure that includes items which can
never leave it has stopped measuring the backlog.** Closed by a `turn-report` `Kind` that checks 10
and 13 both read: **excluded from the unresolved count, reported as its own number.** `B-037` asked
for both halves and only one of them is about tidiness.

**Both are negative-tested, and the harness had to change to make it possible.** `bun run fixtures`
could only ever assert on a check's **findings**. `G83` lived in the **detail line** — the finding
fired correctly and the count did not — so **the entire class of "the summary is wrong" was
untestable in this apparatus**, and every existing fixture passed while `handoff-response` reported
`0 open` with four unread entries. `fixture()` now accepts `expectDetail`.

> **`G81` recorded that a fix which enumerates its targets closes the gap only for the ones it
> enumerated, and `G83`/`G84` were about to ship with no fixture at all** — that defect exactly, one
> pass later. Four fixtures added, including a **positive control**: the same entry as an ordinary
> kind must still be counted unresolved, without which the exclusion fixture proves only that a
> number can be made smaller. **No fixture count is restated here** (`G75`, `C-21`) — the runner
> prints it.

### Lane B raised these correctly, and the mechanism it used is worth naming

**Lane B was `Blocked` throughout and wrote four entries anyway.** That is §5.1's carve-out working
exactly as designed — writing in `docs/handoff/` is permitted from any lane at any time, precisely
so that a lane which cannot commit can still report. **It read the work order, disbelieved it against
the register, and stopped before drafting a migration.**

> **Compare `D-103`, where Lane B read a contradictory rule, concluded it could not begin, and
> produced nothing at all** (`D-105` `F29`). **The difference is the entries** — the same situation,
> and this time it left a record.

**`C-28` does NOT close here, and the temptation to close it is the point.** It closes *"when the
next Lane B **turn** ends with a report"*, and **Lane B held no turn** — it was `Blocked`
throughout. Four good entries are not a turn report, and counting them as one would close a
condition on a run that never happened. **This paragraph was drafted the other way and corrected
before commit**, which is the same defect this decision exists to fix, three sections earlier.

**No turn report is owed for it.** Lane B never held the lock, so no turn ended — the work order's
§5 requirement is scoped to a turn, and this was not one. **The gap that leaves is real**: nothing
in the work order tells a lane what to do when it is offered work and the table says it is `Blocked`.
`B-034` is that missing procedure, written by the lane that needed it.

### Gaps and conditions

**Closed:** `G83`, `G84` — §5.1.
**Opened:** `C-30`. **Corrected:** `G16`, `G20`, `G64`, `Q11`-name, and the Stage 4 window table.
**`G65` recurs** and stays open — this is its fourth instance.
**Unchanged and explicitly not closed:** `C-26`, `C-27`, `C-28`. **`C-28` in particular** — Lane B
held no turn, so no turn ended, so nothing discharges it.

**The backlog is dispositioned, and `B-037` item 4 is what asked for it.** Every answered entry now
carries a `Resolution` anchored to the commit its answering decision landed at — `d6d406a` for
`D-102`, `ea84281` for `D-107`, `59042a8` for `D-108`. **`B-016` and `C-001` are `Deferred` to
Phase 3 with Lane C named**, because their work is not Phase 1's to discharge and a deferral with no
owner is a drop. **Everything else is `Applied`, which is deliberately non-terminal** — Lane B
raised them and Lane B verifies them, and `Applied` is the honest word until it does.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Window not closed | ✅ §5.14bt, §5.15 Stage 4 | ✅ **the AUTHORIZED block becomes PROVISIONAL** | **— unaffected** | **— unaffected: `0002` remains an expected artifact; what changed is when it may be written, not whether it exists** | **— unaffected** | **— unaffected: no requirement text moves. `D-112`'s six `[Q11]` clearances were correctly ruled and stand** |
| Four stale rows | ✅ §5.1, §5.15 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `C-30` opened | ✅ §5.14bt, §3 | ✅ S1 gating | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `G83` | ✅ §5.14bt, §5.1 | **— unaffected** | **— unaffected: it is a counting defect inside `handoff-response`. No rule, no channel document and no lane instruction changes** | **— unaffected** | **— unaffected** | **— unaffected** |
| `G84` | ✅ §5.14bt, §5.1 | **— unaffected** | ✅ **all three rule files** — `turn-report` joins the shared-core kind vocabulary, plus `docs/handoff/README.md`, `TEMPLATE.md` and `docs/LANE-B-WORK-ORDER.md` §5 | **— unaffected: no file is created or retired** | **— unaffected** | **— unaffected** |

**`Modular_PRD` is unaffected throughout and that is deliberate.** Items 4 and 5 are storage and
retention decisions; **until they are ruled there is no requirement text to change**, and writing
one now would record a decision the Judge has not made.

### Scope limits

**Rules nothing. Reverses nothing.** `D-110`, `D-111` and `D-112`'s rulings all stand exactly as
made. Writes no migration, changes no schema, selects no lane, and closes no phase. `0001_init.sql`
untouched. **Lane A remains `Active`** — the boundary edit is not performed here, because releasing
the lock would offer Lane B a packet this decision has just marked provisional.

---

## 5.14bu `D-114` — Item 4 Ruled in Full, the Table Classification Adopted, 5a Carried

**Judge rulings, 2026-08-25.** Closes `C-30`, `C-11`, `C-12` and `GA2`. **`0002`'s authorization
becomes unconditional.** One sub-item — **5a** — is carried as `C-31` and **does not block**, for a
reason demonstrated below rather than asserted.

### What was ruled

| | Ruling |
|---|---|
| **4a** | `publications` and `publication_targets` are **insert/read-only**. Closes `C-11` |
| **4b** | The **report record** is insert/read-only, carrying the frozen snapshot |
| **4c** | Enforced by **`REVOKE UPDATE, DELETE` *and* a `BEFORE UPDATE OR DELETE` trigger** |
| **5c-1** | **§5.3's table-by-table classification is adopted** and promoted into `Modular_PRD` §6.3 |
| **5c-2** | **`trend_signals` is append-only** |
| **5c-3** | Publication state is **append-only status events**, never a mutable status column |
| **5b** | The floor number is **deferred with a named owner**. **`DATA_RETENTION_ARCHIVE_DAYS = 90` stays unratified** *(this row read "twenty times below the five-year statutory floor" — **retracted by `D-115`**: the floor governs disposal, 90 days governs archival, and the two were compared as if they measured the same act. It is unratified because nobody put it to the Chief Editor, `A6`)* |
| **`C-12`** | `publication_targets` rows are created **eagerly at approval** |
| **`NFR-02`** | *"never deleted"* is restated per audit Step 6 |

### `C-30` closes — and this is not `D-112`'s error repeated

**`D-112` closed a window having never put two of its items to the Judge.** The distinction here is
not that fewer items are open; it is *how* each one is disposed:

| Item | Disposition |
|---|---|
| Item 4 | **Ruled in full** — 4a, 4b, 4c |
| Item 5, classification | **Ruled** — §5.3 adopted |
| Item 5, floor number | **Deferred, with a named owner.** `C-30`'s own closure condition permits exactly this |
| **5a** | **Carried as `C-31`**, and shown below not to block |

> **The demonstration, because a claim of "non-blocking" is worth nothing without one.** 5a asks
> whether `articles` needs a per-row retention class **written at intake**. `articles` is **mutable
> by design** (`TR-DM-01`, §5.3) and **carries its own state**, so its retention class is derivable
> from the row itself at any later date. **The un-backfillable argument that made item 5 blocking
> does not apply to it** — that argument is about a fact the product never holds, which is `G46`'s
> POC payment status, on a table `0002` does not create.
>
> **Checked rather than assumed: no append-only table in `0002` has status-varying retention.**
> `workflow_transitions`, `publications`, `publication_targets` and the report record each carry one
> retention answer for every row. **Only `articles` varies, and only `articles` is mutable.**

### Item 4's enforcement — `REVOKE` declares, the trigger enforces, and neither is the real control

**Both, because they answer different questions.** `REVOKE` is the declaration an auditor reads;
the trigger is the control that survives a privileged session. **`REVOKE` alone does not bind the
table owner or `service_role`**, and `TR-API-03` introduces exactly that connection at S4 — *"the
first genuine need for `SUPABASE_SERVICE_ROLE_KEY`"*.

**What neither does, stated rather than buried.** A deliberate `DISABLE TRIGGER` by whoever holds
the key defeats both. The audit model's §6.1 names that as the actual control point:

> *"If the same person operates the pipeline and holds the key that bypasses its protections, then
> append-only is a **promise, not a control**."* — and §0.3 records **one human** on this project.

**That is a governance control, not a schema one**, and `0002` cannot supply it. **Recorded as a
residual, not solved** — the same discipline `AC-12` established: infrastructure duties are not
discharged in product code (`D-39`).

### `C-12` — events were necessary and not sufficient

**Append-only events make a FAILURE evidence. They do not make a NON-ATTEMPT evidence** — a target
nobody tried produces no event, and absence cannot distinguish *nothing happened* from *nothing was
recorded*. **That is `G41` in the publication table.**

**`TR-DM-03`'s two-table shape already carries the fix and nothing had ever said so.** With
`publication_targets` rows created **eagerly at approval**, a target that was never attempted exists
as a row with no events — **non-performance becomes queryable rather than inferred.** Created
lazily on first attempt, it does not exist at all.

**Eager creation is not deferrable**: a target row not written at approval cannot be reconstructed,
because nothing else records which targets were *intended*.

### 5a carried as `C-31` — the three regimes do not share a shape

**The Chief Editor's framing is that each regime carries its own retention period, assigned per
table.** Applied to `D-42`'s three regimes it holds structurally, and it surfaces a hole that the
per-row-column framing had hidden:

| Regime | Direction | Period it supplies |
|---|---|---|
| **PDPA** | Minimise | **90 days** after non-reply (`D-43`) |
| **Retention act — IRAS/ACRA** | Preserve | **5 years**, a floor |
| **GRC on retraction** | Preserve **plus a clock** | **None** |

**Only two of the three supply a number, and the third is not merely missing one — it is a
different shape.** `D-43` records that *"the deadline arrives with the order"*: GRC's clock governs
**how fast a retraction must be performed**, not **how long its evidence is kept**. A retraction
order can arrive years after publication, so GRC retention is **event-anchored with no terminus**,
while the other two are **age-anchored**. *A single class-to-period map cannot express the third.*

**And the two governing documents disagree about whether the floor even reaches editorial data:**

| Says | |
|---|---|
| `D-42`'s data-class table | Editorial flow is governed by **"Statutory and GRC"** |
| Audit Step 6 | The 5-year floor covers **"financial and accounting records"**, enforced by IRAS and ACRA for tax and corporate compliance |

**Editorial flow is not a financial record.** So either *"Statutory"* means something for editorial
data that nothing names, **or the floor does not bind it — leaving GRC, which supplies no number,
as the only regime, and editorial retention undefined.** *That second branch is `G40` verbatim:*
`NFR-08` *"carries no retention qualifier, so the product promises what lawful disposal removes."*

**Where the framing breaks, and it breaks usefully.** *One regime per table* holds for every
editorial table. It fails for **POC engagement records — paid falls under the retention act, unpaid
under PDPA, in the same table** — which is `G46` exactly, and **that table is not in `0002`.** The
framing works for this migration's scope *because* of what the migration excludes.

**Three questions `C-31` must answer, in order:**

1. **Does the statutory floor reach editorial-flow data at all?** Everything else depends on it.
2. **If GRC is the governing regime, does its retention get a terminus** — or is it open-ended?
3. **Does either answer change `0002`?** *Provisional reading: no.* Nothing in v1 disposes of
   anything, `articles` is self-describing, and no append-only table varies. **If that reading is
   wrong, question 3 is where it will show.**

### Gaps

**Closed:** `GA2` — its insert/read-only half is ruled by 4a and 4b, so both halves are now done.
**Opened:** `G85` — `TR-DM-03` says *"seven-value status enum"* in four documents and **the seven
values are listed nowhere**; only four appear anywhere in prose. **A count restated across four
tiers with no members behind it** is `G55`/`G56`/`G58`'s mechanism applied to a schema domain.
Lane B cannot write the enum from the corpus. **Not `0002`-blocking** — 5c-3 makes state an event
type, and `FN-PUBLICATION` determines the values behaviourally — but it must be written before the
publication tables carry data.
**Unchanged:** `G40` — `C-31` inherits it and does not resolve it.

### Conditions

**Closed:** `C-11`, `C-12`, `C-30`.
**Opened:** `C-31` — 5a, per-row retention classification on `articles`. **Explicitly non-blocking**;
see the demonstration above.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Item 4 ruled | ✅ §5.14bu, §5.1 `GA2` | ✅ S1 item 4 row | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §6.3 classification, `TR-DM-03` |
| §5.3 adopted | ✅ §5.14bu | ✅ S1 item 5 row | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **§6.3 gains the classification table** |
| `C-12` eager rows | ✅ §5.14bu, §3 | ✅ S1 item 5 row | **— unaffected** | **— unaffected** | **— unaffected** | ✅ `TR-DM-03` |
| `NFR-02` restated | ✅ §5.14bu | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **`NFR-02` and §6.3 Retention** |
| `C-30` closed, `0002` unconditional | ✅ §5.14bu, §3 | ✅ **the PROVISIONAL block is lifted** | **— unaffected** | **— unaffected: `0002` was already an expected artifact** | **— unaffected** | **— unaffected** |
| `C-31` opened | ✅ §5.14bu, §3 | ✅ named as non-blocking | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **the §6.3 Retention sentence is FLAGGED, not rewritten** |
| `G85` | ✅ §5.14bu, §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ `TR-DM-03` carries the flag |

> **The `Modular_PRD` Retention sentence is flagged and NOT rewritten, deliberately.** *"Rejected and
> archived after `DATA_RETENTION_ARCHIVE_DAYS`; published kept indefinitely"* is precisely the
> status-varying rule `C-31` exists to decide. **Rewriting it here would rule 5a while recording
> that 5a is carried** — the shape `D-113` spent a whole pass correcting.

### Scope limits

Writes no migration and applies no schema. **Lane A does not write `0002`** — `supabase/` is Lane
B's. `0001_init.sql` untouched. **No lane is selected and no boundary edit is performed**; Lane A
remains `Active`. `C-26`, `C-27`, `C-28` are unchanged and unclosed.

---

## 5.14bv `D-115` — GRC's Terminus Is Archival; Archival and Disposal Are External

**Judge rulings, 2026-08-25, cross-referencing `Modular_PRD` §6.3's retention sentence against
`C-31`.** Narrows `C-31` from three questions to one, resolves §6.3's sentence, **retracts a claim
`D-114` made about `DATA_RETENTION_ARCHIVE_DAYS`**, and opens three gaps the cross-reference
surfaced.

### The rulings

| | Ruling |
|---|---|
| **GRC's terminus** | **GRC on retraction binds data while it is in the CURRENT set.** Archival ends its reach — an archived article cannot be retracted through the publication flow, because retraction and amendment are acts *on current work* |
| **Archival and disposal are EXTERNAL** | Both are operations on the Supabase/Postgres substrate, **not product behaviour**. The application neither archives nor disposes |
| **`DATA_RETENTION_ARCHIVE_DAYS = 90`** | The **external archival period**. It is a boundary in an outside process, **not a disposal date** |
| **Disposal** | Derives from the **three-regime classification**, per class — and is also external |
| **Retraction of data no longer in the system** | **BACKLOG FEATURE.** Deferred, not designed. `G87` |

### `D-114` claimed 90 days was twenty times below the statutory floor. **Retracted.**

**The comparison is category-wrong, not merely arguable.** The five-year floor governs **disposal**;
90 days governs **archival**, and under this ruling archival is an external state boundary that
disposes of nothing. **Comparing them is comparing a move to a deletion.**

**And the corpus already disagreed with itself about which the variable was** — `D-114` picked one
side without noticing there were two:

| Source | Reads `DATA_RETENTION_ARCHIVE_DAYS` as |
|---|---|
| `blueprint.md` `A6`, `D8` | **Auto-archive** — the same mechanism as *"Discovered items auto-archived after 48 hours"*. A workflow move |
| Audit **Step 9** | *"Set at or above the statutory floor"* — a **disposal** threshold |

> **Step 9 contradicts itself in one sentence.** It says *set it at or above the statutory floor*
> **and** *redefine "archived" as retrievable rather than deleted* — **and a period that disposes of
> nothing has no reason to meet a disposal floor.** Recorded as `G86`.

**Retracted at all three sites that carried it**: §5.14bu's ruling table, `V1-BUILD-SPEC.md` S1 item
5, and `Modular_PRD` §6.3. **The value stays unratified** — that was and remains correct, for the
different reason that no one has put it to the Chief Editor (`DECISION_LOG.md`, `A6`).

### §6.3's retention sentence — resolved, and it was less wrong than it looked

**The audit model §5.1 objected that archiving rejected work *"breaks the audit chain precisely
where it is most interesting."* That objection was against archiving-as-DELETION.** With archival
defined as *moved, still retrievable*, it dissolves:

| Clause | Under this ruling |
|---|---|
| *"rejected and archived after `DATA_RETENTION_ARCHIVE_DAYS`"* | **Correct.** Rejected work was never published, so no retraction can ever apply to it, and GRC never attaches. Archival moves it; retrievability preserves the chain |
| *"published kept indefinitely"* | **Correct, and load-bearing.** Published work stays current, so **GRC always attaches and retraction is always possible** |
| *"`workflow_transitions` never deleted"* | Already restated by `D-114` |

> **So the status-varying rule is not a defect. It is the correct expression of two regimes with
> different reach** — and `C-31` was opened on the assumption that it was a defect. **The
> assumption was wrong and the condition was still worth opening**, because the reasoning that
> dissolves it did not exist until this cross-reference was performed.

### `C-31` narrows to one question

| | Was | Now |
|---|---|---|
| **q1** — does the statutory floor reach editorial-flow data? | Open | **Still open.** `D-42` assigns editorial flow to *"Statutory and GRC"*; Step 6 scopes that floor to *"financial and accounting records"*, and editorial flow is not one |
| **q2** — does GRC retention get a terminus? | Open | ✅ **Ruled: archival** |
| **q3** — does either answer change `0002`? | Provisional *no* | ✅ **Demonstrated no.** Archival and disposal are **external**, so neither act is in the product's surface at all |

**q3 is now stronger than "non-blocking".** It is not that `0002` can be written before the answer;
it is that **the acts the answer governs happen outside the system entirely** — the same shape as
`AC-12`, where an infrastructure duty cannot be discharged in product code (`D-39`).

### Three gaps the cross-reference surfaced

**`G86` — "archived" is used in governed tiers and defined in none.** `Modular_PRD` §6.3 and
`AC-12a` both turn on it; audit Step 9 instructed the definition — *"redefine 'archived' as
retrievable rather than deleted"* — **and that redefinition was never performed in any governed
document.** The word has carried two meanings the whole time, which is what let Step 9 contradict
itself. **Fixed here**: defined in §6.3.

**`G87` — a retraction order for an article no longer in the current set has no path.** Named by
the Chief Editor and **deferred as a backlog feature**. Its trigger condition is worth stating
precisely, because it did not exist a day ago:

> **`D-114` created it.** While `NFR-02` read *"never deleted"*, a published article never left the
> current set and retraction was always reachable. `D-114` restated that as *"not less than the
> statutory period; disposal only under a documented, approved policy"* — **so disposal became
> permissible, and a retraction order arriving afterwards has nothing to act on.**

**Not a defect in `D-114`** — the restatement was correct and the old wording promised a permanence
the law does not require. **The gap is the honest consequence of stopping the lie**, and it is
recorded rather than absorbed. **Not v1**: it needs a path for work never triggered from this
system, which is a different intake shape.

**`G88` — nothing tells the product that an external archival happened.** `AC-12a` is a **`[V1]`**
criterion requiring the audit surface to state that records *"existed and are no longer
retrievable"*, naming **the policy and version, the period, and the archive location.** **The
product holds none of those facts**, and under this ruling the act that produces them happens
outside it.

> **This is `G46`'s shape exactly** — *"retention class depends on a fact the product does not
> hold"* — one tier down, and `G46` was resolved by ruling that the fact must be **supplied to** the
> product rather than inferred by it. **The mechanism already exists on paper and was never
> adopted**: the audit model §6.3's **disposal record** — written *before* the act, stored outside
> the table it describes, itself immutable, naming scope, period, policy version, authorizing party,
> date, mechanism and archive location. **It is the second unadopted §-section this thread has
> found**, after §5.3.

### Gaps and conditions

**Opened:** `G86` *(closed in this pass)*, `G87` *(backlog, not v1)*, `G88`.
**Narrowed:** `C-31` — q2 ruled, q3 demonstrated, **q1 alone remains.**
**Unchanged:** `G40` — `C-31` q1 still carries it. `G41` — `G88` is its unmet dependency.
**Retracted:** `D-114`'s floor comparison, at all three sites.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| GRC terminus ruled | ✅ §5.14bv, `C-31` | **— unaffected: no sequence or artifact moves** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §6.3 retention resolved |
| Archival/disposal external | ✅ §5.14bv | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §6.3 |
| **Floor comparison retracted** | ✅ §5.14bv, §5.14bu | ✅ **S1 item 5 row corrected** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **§6.3 corrected** |
| `G86` opened and closed | ✅ §5.14bv, §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **§6.3 defines "archived"** |
| `G87` backlog | ✅ §5.14bv, §5.1 | **— unaffected: it is not v1 work and sequencing it would claim otherwise** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: no v1 requirement changes** |
| `G88` opened | ✅ §5.14bv, §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: `AC-12a` is unchanged; what is missing is its input, and naming a mechanism here would decide `G88` rather than open it** |

### Scope limits

**Adopts no disposal record and designs no backlog feature.** `G87` and `G88` are opened, not
solved. No migration, no schema, no lane selected, no phase closed. `0001_init.sql` untouched.
**`0002`'s authorization is unaffected** — it was unconditional before this decision and remains so.
`C-26`, `C-27`, `C-28` unchanged.

---

## 5.14bw `D-116` — Retention and Archival Are Project Scope; the Product Owns Only the Absence

**Judge rulings, 2026-08-25.** **`C-31` closes by RE-TIERING, not by being answered.** Retention and
archival leave the product tier entirely; what stays behind is one presentational duty.

### The rulings

| | Ruling |
|---|---|
| **Retention and archival are PROJECT SCOPE** | Baseline obligations with **no CR**, so they sit at the **highest record — the Alpha Portfolio plan**, Tier 1 under `D-74`, above `Modular_PRD` |
| **Detail lands below it** | `business-case.md` §Compliance & Governance Disclosures and `blueprint.md` `A6`. **Owed, not written** — carried as `C-32` |
| **"What binds editorial retention" is BEYOND PRODUCT SCOPE** | It is not a product question and `Modular_PRD` must not answer it |
| **The product's stake is the UI/UX of missing data** | Already raised, now **refined by the 90-day archival** — the concrete case that reaches a v1 screen |

### `C-31` closes by re-tiering, and that is a different act from answering

**`C-31` q1 asked: does the five-year statutory floor reach editorial-flow data?** The evidence
pointed at *no statute is named anywhere*, and **the question was mis-tiered rather than merely
open.**

> **`PSK-09` and `PSK-10` are global Project Scope with no CR** (`D-42`), and a scope key with no
> Change Request is **owned by the business by default — that is what makes it global.** Retention
> and archival are the operational half of `PSK-10`. **They were never the product's to decide**,
> and `C-31` q1 was the product tier trying to answer a question one tier up.

**q2 and q3 stay answered** (`D-115`): GRC's terminus is archival; archival and disposal are
external. **q1 is withdrawn from the product tier** and becomes `C-32`'s content.

### I recommended the wrong tier one turn ago, and this corrects it

**Last turn's `q1-a` recommendation was: *"write a house retention policy as a governed artifact"*,
and I placed it in the product's document set.** That is the wrong tier. A house retention policy
is a **business obligation under a scope key with no CR**, so it belongs at the portfolio record and
its detail in the business case — **not in `docs/specs/` and not in `Modular_PRD`.**

**The substance of the recommendation survives; only its address changes.** The policy still has to
exist before `NFR-02`, `AC-12a`, `G40` and `G88` have anything to point at.

### `NFR-02` re-anchored — the floor it named may name nothing

**`D-114` restated `NFR-02` as *"retained for not less than the statutory period"*.** With no
statute named for editorial-flow data, **that clause has a floor of zero**, and the whole constraint
falls onto *"approved policy"* — which does not yet exist.

**Re-anchored to the Project Scope policy** rather than to a statute the corpus never names. **The
product does not set the period and does not perform the disposal**; it states which policy governs
and defers the number to it.

> **The old wording — *"never deleted"* — was a lie, but a safe one. `D-114`'s correction was right
> and opened a hole beneath itself.** Recorded plainly, because a correction that creates an
> exposure and does not say so is how the next reader inherits it silently.

### `AC-12a` promoted to `Modular_PRD` — and it never had a decision behind it

**Two defects, and the second is the one that matters.**

`Modular_PRD` carries **27 `AC-` rows** including `AC-14`–`AC-21`, so the acceptance-criteria series
lives there. The `Fn_Specs` introduce exactly two suffixed criteria:

| | Creating decision |
|---|---|
| `AC-01a` | ✅ `G39`'s closure names it: *"`FR-01`, `AC-01`, and §3.1 restated; **`AC-01a` added**"* |
| **`AC-12a`** | ⛔ **None.** It appears in the register only as a **reference** — *"product canary is `AC-12a`"* — never as something a decision created |

> **A `[V1]` commitment was made by a derived tier, with no decision behind it and no parent above
> it.** `D-29` gives the AC series to `Modular_PRD`; `D-54` requires the creation to propagate.
> **Neither happened, and `tier-sweep` cannot see it** — it verifies decision IDs, not AC-series
> membership. Opened as `G89`.

**Promoted, and refined to the case the Chief Editor named**: the 90-day archival of rejected work
is the concrete, v1-reachable instance of missing data reaching a screen.

### `G88` narrows to one supplied fact

**The product does not archive, does not dispose, and does not set the period.** What it needs is
**one input: that a period was archived, and under which policy version.**

> **This is `G46`'s resolution shape exactly.** `G46` found that *"retention class depends on a fact
> the product does not hold"* and was resolved by ruling that the fact is **supplied to** the
> product rather than inferred by it. **Same answer here.**

**And `AC-12a`'s two limbs are not the same problem** — `D-115` separated the acts, and the
criterion still bundles them:

| Limb | Product can know? | Reachable in v1? |
|---|---|---|
| **Archived** — moved, still retrievable | **Depends where the archive goes** — undefined, and it is a Project Scope fact | ✅ **Yes** — the 90-day archival of rejected work |
| **Disposed** — gone | **No.** Needs the supplied fact | ❌ **No** — nothing in v1 disposes |

**The archived limb is the v1 requirement.** The disposed limb waits on `C-32`.

### Conditions

**Closed:** `C-31` — **by re-tiering.** Its q1 is not a product question; q2 and q3 stand answered.
**Opened:** `C-32` — the Project Scope retention and archival policy is **owed**: the Alpha
Portfolio plan as the highest record, `business-case.md` §Compliance & Governance Disclosures and
`blueprint.md` `A6` for the detail. **`NFR-02`, `AC-12a`, `G40`, `G88` and `G41` all point at it and
none can close before it exists.** **Owner: the business, under a scope key with no CR.**

### Gaps

**Opened:** `G89` — **nothing verifies that an acceptance criterion has a parent.** `tier-sweep`
reads decision IDs; no check asks whether an `AC-` in a `Fn_Spec` exists in `Modular_PRD`, so a
derived tier can create a `[V1]` commitment and nothing notices. **`AC-12a` is the live instance and
`AC-01a` is the counter-example that proves the difference** — one has a creating decision, the
other does not.
**Narrowed:** `G88` — to a single supplied fact, and split by limb.
**Unchanged:** `G40` — still open, now explicitly dependent on `C-32`; `G41` — `G88` remains its
dependency; `G87` — backlog, untouched.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Retention is Project Scope | ✅ §5.14bw, `C-32` | **— unaffected: no sprint gains or loses work** | **— unaffected** | **— unaffected: the owed documents already exist; no artifact is created or retired** | **— unaffected** | ✅ §6.3 defers the period upward |
| `C-31` closed by re-tiering | ✅ §5.14bw, §3 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §6.3's open question is withdrawn |
| `NFR-02` re-anchored | ✅ §5.14bw | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **`NFR-02` row and §6.3** |
| `AC-12a` promoted | ✅ §5.14bw, §5.1 `G89` | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **new `AC-12a` row beside `AC-12`** |
| `G89` opened | ✅ §5.14bw, §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: it is a control gap over the tier relationship, not a requirement** |

> **The Alpha Portfolio, `business-case.md` and `blueprint.md` are NOT edited by this decision, and
> that is the Chief Editor's instruction rather than an omission.** They are the governing source
> set above `Modular_PRD`; `C-32` records what they owe and names the sections. **An owed entry with
> a named home is trackable. An entry written into a source document on Lane A's own initiative
> would be the product tier legislating upward.**

### Scope limits

**Writes nothing into the governing source set.** Adopts no disposal record, sets no retention
period, and designs no backlog feature. No migration, no schema, no lane selected, no phase closed.
`0001_init.sql` untouched. **`0002`'s authorization is unaffected** — it was unconditional before
this decision and remains so, and none of `C-32`'s content is schema. `C-26`, `C-27`, `C-28`
unchanged.

---

## 5.14bx `D-117` — The Boundary Is Performed; `C-32`'s Packet Is Routed Unchanged

**Lane A's closing pass, 2026-08-25, answering `B-038` and `B-039`.** Performs the Sprint boundary,
routes the `C-32` decision packet to the Chief Editor without editing it, and records three
defects — **two of them Lane A's own.**

### The boundary — both facts preserved, and the selection is NOT backdated

**`B-038` asked for the `D-108` boundary and specified it correctly.** Two logical events land in
one commit because the Judge supplied both acts, **and the record keeps both** — a bare replacement
would make *release* and *selection* indistinguishable.

| | |
|---|---|
| **1 — Lane A's run completed** | The lock was released; every unfinished lane became `Eligible` |
| **2 — The Chief Editor selected Lane B** | Confirmed 2026-08-25, **dated to this turn** |
| **Result** | **Lane B is `Active`.** Lane A and Lane C are `Blocked` on that one named run |

> **`B-038`'s `Evidence` line asserted an act that had not happened.** It read *"Chief Editor
> selection, 2026-08-25"*; what the transcript contained was **Lane A saying selection was
> available**, and the Chief Editor quoting that back without making it. **Lane A put the question
> rather than acting on the entry**, and the answer was *"it was implied — record it as made now."*
>
> **Lane B did the right operational thing** — raised an entry, did not begin, did not commit. **The
> defect is confined to a field nothing checks**, and that field nearly moved the lock. `G90`.

### `C-32`'s packet is routed unchanged, and three of its points correct Lane A

**`B-039` is accepted in full and edited in no respect.** Choosing the policy is the business's act;
**a packet revised by the product tier on its way up is the product tier legislating upward in
slower motion.**

**Three of its points are corrections Lane A had not made:**

| | |
|---|---|
| The policy **must not call editorial records *"financial or accounting records"*** to borrow an existing five-year statement | Lane A had identified the mismatch (`D-116`) and had not said *"do not resolve it by relabelling"* |
| **Removing an item from a work queue is not archival** unless the policy says it moves into the governed archive | **This reconciles the Blueprint's shorter stale-intake rows, which `D-115` and `D-116` both missed** while defining archival |
| **Closing `C-32` does not automatically close all five parked items** | `C-32` says none *can close before* it exists; `B-039` adds that none closes *because* it does. **Each is re-evaluated on its own evidence** |

**`B-039` §6 is the `G88` contract** — the supplied-fact interface, recorded as **semantic, not
migration authority**. **`C-32` is confirmed not a dependency of `0002`**, which `D-116` had already
stated; this is agreement, not repair.

> **The structural point worth keeping.** `C-32`'s owner is *the business*, which has **no lane, no
> surface and no channel** — and Lane B routed it anyway by expressing an owed document as a
> `blocked-on-decision` entry. **That is the channel working at a boundary nobody designed it for.**
> And the three receiving tiers are already watched: `source-sweep` covers `docs/source` and
> `docs/governance`, so content arriving in any of them requires a recorded decision. **No new
> tracking is needed and none is added.**

### Two defects of Lane A's own, recorded because the alternative is a tidier and falser history

**`G91` — the lane-state fixtures assumed Lane A held the lock.** Every mutation named a lane
letter. **Moving the lock would have silently broken three of them**: setting `B` `Active` when `B`
is already `Active` produces **one** `Active` rather than two, and the *Eligible-beside-Active* and
*Blocked-with-no-Active* cases would each have fired a different finding than the one asserted.

> **A fixture suite that works only while one particular lane is `Active` breaks on the exact event
> it exists to protect.** `D-106` drew this lesson once — *retarget at structure, not at a live
> value* — and applied it to the documents the fixtures mutate, **not to the lane identity inside
> them.** Fixed before the boundary, not after: the suite now reads which lane holds the lock and
> mutates by **role**.

**And the sweep caught a third, mid-pass.** `G91`'s tier row claimed the **inventory** was affected
before the edit existed — the same defect `tier-sweep` caught in `D-112`, made true rather than
softened. **The inventory row it landed in carried *"six suites, thirty fixtures"* and was stale
within a day.** That tally is **removed rather than corrected** (`G75`, `C-21`: *removal is
preferred; a check over a tally must be maintained in step with the thing it counts*). **The runner
prints both numbers.**

**A commit message that did not describe its commit.** `424219a` carries the fixture fix **and
Lane B's `B-038` and `B-039`**, swept in by `git add -A`; its message mentions only the fixtures.
**Not amended** — the record of the error outlives a tidy history, and this file exists because that
trade has been got wrong before. **No check could have caught it**: `lane-boundary` reads surfaces,
`lane-gate` reads trailers, and **nothing verifies that a message describes the files it touches.**
That is not a buildable check — a message is prose — and it is stated rather than opened as a gap.

### Gaps

**Opened:** `G90` — **an entry's `Evidence` field can assert an act that never happened, and
nothing checks it.** `closure-readiness` proves `Verified-At-Commit` names a real commit; **no check
reads `Evidence` at all.** `B-038` is the live instance and it nearly moved the lane lock.
`arrival_not_correctness` (`C-22`, `F5`) in the one field that describes acts outside the
repository — **and the remedy is a person, not a check**, because an assertion about what the Judge
said cannot be verified from the tree.
**`G91`** — closed by the lane-agnostic suite.
**Unchanged:** `C-32` and its five parked items; `G87`, `G88`, `G89`; `C-26`, `C-27`, `C-28`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Boundary performed | ✅ §5.14bx | **— unaffected: a lane boundary moves no sprint** | **— unaffected: the lane MAP is unchanged; only which lane holds the lock moved** | **— unaffected** | ✅ **§5 lane rows — the whole point** | **— unaffected** |
| `B-039` routed | ✅ §5.14bx, `C-32` | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: nothing is approved, so no requirement moves** |
| `G90` opened | ✅ §5.14bx, §5.1 | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |
| `G91` closed | ✅ §5.14bx, §5.1 | **— unaffected** | **— unaffected** | ✅ **`scripts/fixtures/suites.mjs`** | **— unaffected** | **— unaffected** |

### Scope limits — and what Lane A may no longer do

**Approves no policy.** `B-039`'s content is the Chief Editor's; nothing here rules on a record
class, a period, a trigger or a disposal authority. No migration, no schema, no phase closed.
`0001_init.sql` untouched. **`0002` stays unconditional and independent of `C-32`.**

> **This is Lane A's last commit of the turn.** After the boundary rows below, **Lane B holds the
> lock.** Lane A may still read anything and may still write in `docs/handoff/` (§5.1), and **may
> not commit** until the Chief Editor selects it again.

---

## 5.14by `D-118` — The Fourth Boundary; `G85` Withdrawn; Lane B's S1 Claim Kept Narrow

**Lane A pass, 2026-08-25, answering `B-040`–`B-047`.** Records the fourth Sprint boundary,
**withdraws a gap Lane A opened from an incomplete search**, accepts Lane B's deliberately narrow
S1 claim, and fixes a boundary runbook that had drifted from its own channel.

### The boundary — and the first one performed as written

| | |
|---|---|
| **(1)** | Lane B's run `LB-S1-01` **completed and released the lock** — reported by the outgoing lane itself in `B-047` |
| **(2)** | The **Chief Editor selected Lane A**, now sole `Active` on run `LA-P1-04` |

> **`B-047` is the first turn report in this corpus filed by the outgoing lane at the moment it
> hands back.** §5.2 step 1 has always been reconstructed afterwards by the *incoming* lane — which
> is `D-105`'s `F30` defect, recorded twice and never yet absent. **The step worked because the lane
> performed it, not because anything compelled it**; no control can, and §5.2 says so.

### `G85` is WITHDRAWN — Lane A asserted it past its source

**`G85` claimed `TR-DM-03`'s *"seven-value status enum"* named a count whose members were listed
nowhere in the corpus. They are listed twice, in GOVERNING documents:**

| Source | |
|---|---|
| `v1-build-readiness-addendum.md` §231 | `Pending` · `Published` · `Failed` · `Scheduled` · `Cancelled` · `ManualReady` · `MockPublished` |
| `blueprint.md` §500, §969 | the same seven, plus the rule that **`MockPublished` never satisfies `Published`** |

**The search that opened `G85` covered `docs/`, `docs/fn-specs/` and `Modular_PRD` — and never
covered `docs/source/`**, which is where the governing set lives and where a vocabulary would
naturally be defined. `conflict_asserted_past_source`, and **the register's own countermeasure
names it**: *before recording a conflict, check whether the existing structure already resolves it.*

> **Found by Lane B while building against the gap.** It used the seven Addendum members, then
> reported that the register contradicted a higher-precedence document. **That is the return path
> working** — a build lane correcting the governing tier rather than encoding its error.

**Propagated citing the Addendum, never the migration**, so `0002` is not read as the origin of a
business vocabulary that already had an approved source.

### Lane B's S1 claim is kept narrow, on Lane B's own evidence — `C-33`

**`B-044` audited Lane B's own work and reported it short of the phrase it was entitled to claim.**

`__tests__/s1-schema.test.ts` **asserts on migration TEXT**. It never starts PostgreSQL, never
applies `0001` then `0002`, never invokes the trigger, never observes a rollback. **A text assertion
stays green while the SQL is syntactically invalid** — `probe_that_cannot_fail`, in the one place
the product's core sequence invariant lives.

> **The governed DoD already distinguished two things and nothing had held them apart:** the **live
> anon-key** test, which `DEP-05` permits to remain unverified, and a **local PostgreSQL** unit
> test, which is still required. **`B-044` is the first entry to separate them.**

**So the DoD phrase *"trigger written and unit-tested"* is NOT recorded.** §5's Lane B row carries
the narrow claim so no later reader inherits the wider one, and **`B-044`'s eight-case list is
adopted as the test contract** rather than re-derived.

### `B-045` — the boundary runbook had drifted from its own channel

**§5.2 step 1 said the outgoing lane files kind `finding`** — the shape `G84` retired. **A lane
following the parent runbook literally would file an entry that can never carry a `Resolution`**,
inflating the unresolved backlog and reproducing the exact defect `G84` closed.

**Why nothing caught it.** `channel-docs` couples the README, the template, the work order and the
workflows spec in both directions — **and `V1-PHASE-CLOSURE.md` is not in that set.** The four
coupled documents all agreed; the fifth, which is the one a lane reads *at the boundary*, did not.
**Corrected to `Kind: turn-report`, own-phase, no `Resolution`.**

### The graphify pair — one real limit, one transient state

| | |
|---|---|
| **`B-041`** | **Correct, and narrower than stated.** Extraction currency, semantic completion and portability are three properties, and conflating them turns a green query into a false synchronization claim. **But `portable-check`'s findings sit in `.graphify/manifest.json` and `studio/`, which are gitignored**; the rule governs artifacts *proposed or committed*, and **the only graph artifacts this repository commits are `docs/graph-fragments/*.json`**, which carry no paths. **A standing limit, not a blocker** |
| **`B-046`** | **Withdrawn as a defect, kept as the procedure.** The null branch record was real when written and **no longer holds** — `lastAnalyzedHead` is `d826b53`, `stale` false, `docs-drift` green. `.graphify/` is gitignored machine-local state, **repaired by any later hook run and leaving no trace it happened**, which is precisely why recording it was right: the entry is the only evidence the window existed |

### `B-040` acknowledged and deliberately NOT executed

**The Chief Editor approved `B-039`'s framework. Five operative values remain unsupplied** — the
90-day ratification, each record class's bounded minimum, the archive operator/location class,
restoration authority, and later disposal authority.

> **Applying the runbook now would have Lane A invent them**, which is the failure `D-116`
> re-tiered to prevent. **`C-32` stays open on named values.** `RET-EDITORIAL` / `0.1-provisional`
> is recorded as a **proposed** label, not adopted.

### Gaps and conditions

**Withdrawn:** `G85` — asserted past its source.
**Opened:** `C-33` — the S1 trigger has no database-executed test, so the DoD phrase is unearned.
**Unchanged:** `C-32` open on named values; `G87`, `G88`, `G89`, `G90`; `C-26`, `C-27`, `C-28`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Fourth boundary | ✅ §5.14by | **— unaffected: a boundary moves no sprint** | **— unaffected: the lane MAP is unchanged** | **— unaffected** | ✅ **§5 rows and §5.2 step 1** | **— unaffected** |
| `G85` withdrawn | ✅ §5.14by, §5.1 | **— unaffected: no sequence changes; the values were always approved** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **`TR-DM-03` carries the seven members** |
| `C-33` opened | ✅ §5.14by, §3 | ✅ **S1's DoD phrase is not yet earned** | **— unaffected** | **— unaffected** | ✅ §5 Lane B row | **— unaffected** |
| `B-045` fix | ✅ §5.14by | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **§5.2 step 1** | **— unaffected** |

### Scope limits

**Approves no retention policy and executes no part of `B-040`.** Applies no migration and starts no
database — **`C-33` is opened, not discharged.** `0001_init.sql` untouched; `0002` remains a draft
in `supabase/migrations/` and is **not applied**. No phase closed.

---

## 5.14bz `D-119` — Two Recurrences in Lane A's Own Apparatus

**Lane A correction, 2026-08-25, same pass as `D-118`.** Both items are repeats of defects this
register had already named, **committed by the lane that named them**, one and two turns later.

### `G93` — a fixture asserting a live count

**`D-113`'s `G83`/`G84` fixtures assert on `handoff-response`'s detail line, and did it with
absolute literals** — *"0 still carry NO resolution; 3 turn report(s)"*. **The channel grows.** Two
turns later there were 48 entries, 4 turn reports and 1 unresolved, and **both fixtures failed while
the check was working perfectly.**

> **This is `C-21`'s tally problem inside the apparatus built to catch it**, and it is `G91`'s
> lesson one file over. `G91` was *a fixture must not name a lane*; this is *a fixture must not name
> a count*. **Both are the same rule: assert a RELATIONSHIP, not a live value.**

**Fixed by deriving the baseline from the live channel** with the channel's own parser, then
asserting `base` and `base + 1`. **The mutation moves exactly one counter by one**, which is the
property actually under test and was never the literal.

### The `git add -A` recurrence — stated, because I said it once and did it again

**`D-117` self-reported that `424219a` carried two files its message did not describe**, said no
check could catch it, and did not amend. **It then happened twice more in the next pass** —
`frag73.json` swept into an evidence commit, and before that the same pattern.

> **Once is a slip; three times is a habit, and the honest fix is not a check.** `git add -A` is
> convenient exactly when the tree holds more than the thing being committed, which is the moment it
> is wrong. **Staging explicitly from here.** Recorded rather than quietly corrected, because a
> register that only carries other lanes' mistakes is not describing this repository.

### Gaps

**Opened and closed:** `G93`. **No condition opened** — the habit is a duty, not a control, and
`C-22`'s limit already covers the class.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `G93` | ✅ §5.14bz, §5.1 | **— unaffected** | **— unaffected** | ✅ **`scripts/fixtures/` — the row already records the suite's properties** | **— unaffected** | **— unaffected** |
| Staging habit | ✅ §5.14bz | **— unaffected** | **— unaffected: it is a duty, not a rule a lane can be checked against** | **— unaffected** | **— unaffected** | **— unaffected** |

### Scope limits

Changes one fixture helper and records one habit. No decision reversed, no gap reopened, no lane
selected, no schema touched.

---

## 5.14ca `D-120` — The Dev Environment Is Separate; `C-33`'s Runner Is Local and Needs No Credentials

**Judge direction, 2026-08-25.** Records the development-environment boundary, provisions the
toolchain `C-33` needs, and **corrects a Build Spec DoD that lost a qualifier the rest of the corpus
has carried since 2026-08-17.**

### The rulings

| | |
|---|---|
| **Dev is separate from `main` / production** | The development database is **disposable**. The provisioned Supabase project is not a dev target |
| **Dev setup is `vercel dev` + `supabase init`** | The app runs locally against a local stack; the CLI supplies the database |

### `C-33`'s runner needs no credentials, and `DEP-05` never said otherwise

**`DEP-05` reads: *"Supabase credentials pulled to `.env.local`"* — deliberately withheld.** That is
**the hosted project**, and it is the only thing it withholds.

> **A local stack from `supabase init` / `supabase start` uses none of it.** So the local PostgreSQL
> test `B-044` asked for was never blocked by `DEP-05`, and **`C-33` is discharged by Lane B without
> a decision from anyone.** The two unverified things `B-044` separated stay separated: **live
> anon-key behaviour remains unverified**; local database behaviour becomes verifiable now.

### The Build Spec lost `A26a`'s qualifier and Lane B read it literally

**`A26a`, 2026-08-17, corrected the S1 DoD** — its own note says the prior wording *"was a live
contradiction, not a deferral"*, because it required a live database while `DEP-05` was withheld:

| Tier | S1 DoD reads |
|---|---|
| `sprint-plan` §353 | *"unit-tested against a **local or branch Postgres instance**"* |
| `Modular_PRD` M1 | *"Trigger written and unit-tested; live anon-key DB rejection unverified until `DEP-05`"* |
| **`V1-BUILD-SPEC.md` S1** | ⛔ *"trigger written and unit-tested"* — **the qualifier never arrived** |

> **This is why `B-044` is a finding rather than a violation.** Lane B built against the **operative
> build document**, which never said *which database*, and then audited its own work down. **The
> correction was made in two tiers and missed the third**, and the missed one is the one a build
> lane reads. `G65` again — arrival is checked, staleness is not — **and this instance is three
> months older than any other in this register.**

**Corrected here.** `C-33` keeps the eight-case contract and now names the runner.

### Provisioned, ahead — `D-86` performed rather than deferred

| | |
|---|---|
| `supabase` CLI | **devDependency**, installed and verified at `2.115.0` |
| `db:start` · `db:stop` · `db:reset` | Script wrappers, so Lane B calls a **stable name** rather than a binary path |
| `.gitignore` | `supabase/.temp/`, `supabase/.branches/` — machine-local runtime state |

**`supabase/migrations/` and `supabase/config.toml` stay TRACKED** — the migrations are the artifact
and the config is the contract. **Only the CLI's scratch state is ignored.**

> **`supabase init` is Lane B's act, not Lane A's.** It writes `supabase/config.toml`, and
> `supabase/` is Lane B's surface. **Lane A supplies the tool; Lane B runs it** — `D-86`'s division
> exactly, and the reason Lane A did not run `init` while holding the pen.

### What this does not do

**`0002` is NOT applied — not locally, not to the provisioned project.** Lane B applies it to a
disposable database as part of `C-33` and destroys it. **The provisioned Supabase database is
untouched by this decision**, and `0001_init.sql` stays frozen.

**`C-32` is unaffected and unmoved.** The five operative values it waits on are business values —
the 90-day ratification, each record class's bounded minimum, the archive operator and location
class, restoration authority, and later disposal authority. **A development environment supplies
none of them**, and `B-040`'s runbook still cannot run without Lane A inventing policy.

### Gaps and conditions

**Opened:** `G94` — the Build Spec's S1 DoD lost `A26a`'s *"local or branch Postgres"* qualifier for
**three months**, and every check passed throughout. **Closed in this pass.**
**Narrowed:** `C-33` — its runner is named and provisioned; **what remains is Lane B running it.**
**Unchanged:** `C-32` open on five business values; `C-26`, `C-27`, `C-28`; `G87`, `G88`, `G89`,
`G90`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Dev/prod separation | ✅ §5.14ca | ✅ **S1 DoD names the runner** | **— unaffected** | ✅ **`package.json` gains the CLI and three scripts** | **— unaffected** | **— unaffected: no requirement changes; a dev environment is not product behaviour** |
| `G94` | ✅ §5.14ca, §5.1 | ✅ **the qualifier restored** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: `M1` already carries the corrected wording, which is the point** |
| CLI provisioned | ✅ §5.14ca | **— unaffected** | **— unaffected** | ✅ toolchain row | **— unaffected** | **— unaffected** |

### Scope limits

**Applies no migration and starts no database.** Provisions a tool, adds three script names, and
ignores two scratch directories. **No lane selected, no phase closed, no policy approved.**
`0001_init.sql` untouched; the provisioned Supabase project untouched.

---

## 5.14cb `D-121` — A Brief Is Identified by Its Own Hash, Not by Its Source

**Judge rulings across four passes, 2026-08-25, consolidated here.** Settles what identifies an
editorial trigger, moves the duplicate guard to the layer that can honestly hold it, **retracts
three Lane A claims**, and corrects a divergence row that closed weeks ago.

### The rulings

| | Ruling |
|---|---|
| **A brief's identity** | A **hash of its key fields** — **not** the source reference. The source *"can be a URL or other reference"* |
| **The submitter** | The **authenticated account** — POC users and the Chief Editor. Part of the brief's own details |
| **The guard** | **Same submitter + same brief + same day** is refused. **Same brief on a different day is permitted** |
| **Its layer** | **UI/UX on the POC surface.** Trigger creation is never blocked — the Chief Editor may always submit a brief manually to trigger the MVP flow |
| **`articles_url_uidx`** | **Specified for removal.** It keys the identity of an *occasion* on the identity of a *subject* |

### Why the guard cannot be a database constraint, argued twice and agreeing

**The Chief Editor's route:** the original flow always permits a brief to be triggered, so nothing
may block creation. The guard is an interface courtesy that stops a customer paying twice for the
same brief on one day.

**The corpus's route:** `X7` and `Modular_PRD` §445 — *"No API authentication exists in Phase 0…
every endpoint is anonymous. **Executor identity is self-asserted until S6.**"*

> **A guard keyed on the submitter cannot be trustworthy before the submitter can be trusted.**
> Enforcing it in the database would make a control out of a field the system itself calls
> self-asserted — `AC-12`'s shape, one tier over. **UI/UX is not the weaker option here; it is the
> only honest one available in v1.**

### `articles` is per-occasion, and that is `D-111`'s own ruling

`D-111`: **the brief IS the article's originating trigger record — the existing `articles` row**;
*"no new table is created and §16.3 is not amended."* The Chief Editor's *"one record for each
payment"* therefore means **one `articles` row per commission.**

**Two commissions on one source produce two rows sharing a source reference — which is exactly what
a unique index on it forbids.** The register held both readings and the migration implemented the
one `D-111` did not choose:

| Reading | `articles` is | Index |
|---|---|---|
| **A** | the **subject** record | correct |
| **B** — **`D-111`, ruled** | the **trigger/brief** record | **wrong** |

**The fix is subtractive**: no new table, no storage authorization, §16.3 untouched. **And payment
stays outside the system** — `D-59` places commissioning at `B1`/`B2` outside the boundary, `D-44`
gives the product a **confirmation** rather than a payment record.

### Three Lane A claims retracted

**All three were asserted from an incomplete sweep, which is `G85`'s failure mode repeating in the
same week.**

| Claim | Correction |
|---|---|
| *"The brief hash exists nowhere"* | **The mechanism is established in this project's own governance.** `requirements-traceability-map.md` hashes customer sentences in `PRD.md` — *"the customer may edit `PRD.md` at any time… **that is their right**"* — with a drift procedure and change control. **Applying it to briefs extends a running pattern.** Absent is the brief-hash *composition*, not the idea — `G95` |
| *"The submitter exists nowhere"* | **`SEC-03` specifies *"the single Chief Editor account and scoped roles"*; `NG-02` scopes multi-team accounts out of **v1 only**; `D-73` made the application multi-tenant.** Absent is the **column**, and the authentication that would populate it truthfully — `G96` |
| *"`NG-03` excludes monetization"* | **It reads *"Charter-level **v1** exclusion"***, the same shape as `NG-02`'s *"v1 exclusion only… lapses"*. **Payment as an ongoing backlog feature is consistent with `NG-03` as written**, and dropping the "v1" turned a scope boundary into a prohibition |

### `X8` corrected — the divergence closed and the row did not move

**`B-003` is `Verified` at `67706ca`, and Stripe is absent from `package.json`, `app/` and
`lib/`.** `X8` read **"Open — S0"** in **two** places. **`G65` again**, and the Chief Editor found
it by citing the Stripe scaffolding as evidence that payment is backlog — **the row they cited was
the stale one.**

### What changes where — and what Lane A does not touch

| Tier | Change |
|---|---|
| `Modular_PRD` `FR-01` | The source is **a URL or another reference** |
| `Modular_PRD` `AC-02` | Re-keyed to **submitter + brief hash + same day**, at the **surface**, with the S6 caveat |
| `Modular_PRD` `TR-DM-01` | Carries the **submitter** and **brief hash** as `G95`/`G96` |
| `V1-BUILD-SPEC.md` S1 | `articles_url_uidx` specified for removal |
| **`supabase/migrations/0002` line 131** | ⛔ **SPECIFIED, NOT APPLIED** (`D-56`). `supabase/` is **Lane B's surface** |

> **`TC5` inverts and is NOT rewritten.** It sits in `docs/journal/2026-08-16-sprint-plan.md` and
> records a point-in-time finding: *"no unique index on `articles.url` → `AT-004` cannot pass."*
> **Under this decision the index is the defect and its absence is correct.** A journal records what
> was found when; **editing it would destroy the evidence that the finding was once true.** The
> inversion is recorded here and cited from `AC-02`.

### Gaps

**Opened:** `G95` — the brief hash's **composition** is unspecified: which fields compose it, and
what a collision means. **`G96`** — no submitter column exists on `articles`, and until **S6**
executor identity is self-asserted, so any value it carries is a claim rather than a fact.
**Corrected:** `X8`.
**Unchanged:** `C-32` and its five values; `C-33`; `G87`, `G88`, `G89`, `G90`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Brief identity + guard | ✅ §5.14cb | ✅ S1 index note | **— unaffected** | **— unaffected: no file is created or retired** | **— unaffected** | ✅ `FR-01`, `AC-02` |
| `X8` corrected | ✅ §5.14cb, §5.1, §5.15 | **— unaffected: `X8` closed on S0 and S0 is complete** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: `NG-03`'s row already reads "v1 exclusion"** |
| `G95`, `G96` | ✅ §5.14cb, §5.1 | **— unaffected: neither is v1 work until the guard is built** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ `TR-DM-01` |

### Scope limits

**Edits no migration and no test.** `0002`'s index removal is **specified and handed to Lane B**;
`0001_init.sql` untouched. **Approves no retention value** — `C-32` is untouched by this decision.
No lane selected, no phase closed, and **no journal rewritten**.

---

## 5.14cc `D-122` — Three Defects in `D-121`'s Own Pass, All Found by Lane B

**Lane A correction, 2026-08-25, answering `B-048`, `B-049` and `B-050`.** Every one is Lane A's,
two were created **in the pass immediately before**, and the third shows a withdrawal that was
premature.

### `B-048` — the Build Spec required and forbade the same index, nine lines apart

**`D-121` added a removal block to S1 and left `"unique index on `articles.url` (`TC3`, `TC5`)"`
standing in the same section's *"Also in S1"* list.** Both instructions cannot be applied.

> **Register precedence resolves it** — `D-58` makes the register win, so removal governs — **and
> that is not good enough.** `D-86` says governance reaches Lane B as a **flag, not a document**,
> and the operative build document is what a build lane reads. **A contradiction a lane must
> arbitrate is a contradiction Lane A failed to resolve.**

**Lane B applied precedence during review and stopped before editing Lane A's document** — exactly
right, and the reason the wrong index was not restored.

### `B-049` — the work order reopened a gap that had been withdrawn

**`D-118` withdrew `G85` and propagated the seven publication values into `TR-DM-03`.** The work
order still told Lane B the values were *"listed nowhere"* and asked it to derive them and raise a
`spec-defect`.

> **This is `B-035` exactly, one pass on.** `D-113` fixed a work order whose instructions had
> outlived their source and recorded *"a work order exists so the build lane need not read the
> register, which means it inherits every propagation failure silently."* **The same document
> inherited the next one.**
>
> **Left as a completed note rather than deleted**, so a reader can tell **finished** from
> **withdrawn** — the discipline `D-113` established for S0 and did not apply here.

**Its cost, had Lane B followed it:** re-raising `B-042` under a new number, and treating the
migration as the origin of a vocabulary `D-118` had just ruled it was not.

### `B-050` — `B-046` was withdrawn on one observation, and the condition recurs

**`B-046` reported `.graphify/branch.json` reset to nulls. `D-118` withdrew it because the state had
recovered.** **`B-050` reproduced it, and it was live at the start of this pass:**

```
lastAnalyzedHead: null   branchName: null   stale: false
```

> **The withdrawal was `arrival_not_correctness` applied to Lane A's own verification.** I checked
> the state **once**, found it healthy, and concluded the defect was gone. **A single later
> observation cannot distinguish "repaired" from "intermittent"**, and this one is intermittent:
> re-running `hook-rebuild` this pass **repopulated** the record correctly.

**Characterised rather than guessed.** `graphify state status` shows `gitDir: null` and
`commonGitDir: null` alongside the nulled branch record — **the tool loses its git context and
writes nulls over a good record, while leaving `stale: false` untouched.**

**The severity is narrower than `B-050` states, and the narrowing is the useful part.**
`docs-drift` compares `lastAnalyzedHead` against HEAD and honours `stale` only when it is explicitly
`true` — **so the check is not fooled and did fail correctly this pass.** The exposure is entirely
to a **reader** who sees `stale: false` and believes it. **`G90`'s shape**: a field a person reads
and a control does not.

**Fixed by making the check's own output teach the reader** — a null record now gets its own
message naming the self-contradiction, because *"run `hook-rebuild`"* is the remedy for ordinary
staleness and merely the **cause** of this one. **No fixture is added**: reproducing a
non-deterministic external tool would be a probe that passes by luck.

**The standing procedure, from `B-046` and unchanged:** commit first, update against the committed
HEAD, re-merge `docs/graph-fragments/`, **verify `lastAnalyzedHead` equals HEAD**, then re-run
coverage and drift. **`hook-rebuild` alone is not evidence of currency.**

### What these three have in common

**All three were found by a lane that could not commit**, reviewing a pass that had just landed.
**None was found by a check** — `bun run check` was green on the Build Spec contradiction and on the
stale work order, because **neither is a claim any check reads.**

> **`C-22`'s limit, stated for the third time and now with three instances behind it:** every check
> here verifies **arrival**, and none verifies that two instructions in one document can both be
> obeyed. **The control is a reader**, and this pass the reader was Lane B.

### Gaps

**Opened and closed:** `G97` — `hook-rebuild` intermittently nulls the branch record while leaving
`stale: false`; the check now names the self-contradiction rather than reporting ordinary staleness.
**Reopened in substance:** `B-046`'s finding, whose withdrawal is corrected here.
**Unchanged:** `C-32`, `C-33`, `G87`, `G88`, `G89`, `G90`, `G95`, `G96`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `B-048` | ✅ §5.14cc | ✅ **the contradictory item removed** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: `TR-DM-01` already carries the removal** |
| `B-049` | ✅ §5.14cc | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: `TR-DM-03` already carries the values** |
| `G97` | ✅ §5.14cc, §5.1 | **— unaffected** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected** |

### Scope limits

**Edits no migration and no test.** `0002`'s index removal remains **specified, not applied** —
`supabase/` is Lane B's. Approves no retention value; `C-32` untouched. No lane selected, no phase
closed, **and no journal rewritten**.

---

## 5.14cd `D-123` — One Canonical Report Per Run; `C-28` Closes on `D-118`/`B-047`

**Lane A correction, 2026-08-25, answering `B-051`, `B-052` and `B-053`.** All three trace to one
root: the corpus never named which record is authoritative when more than one document could claim
the same event. **Parent-first, because `B-052`'s repair is not writable until `B-053`'s is.**

### Parent — `B-053`: two turn reports, one run

**`B-043` and `B-047` were both committed at `d826b53` and both acknowledged at the one boundary
`D-118` records for `LB-S1-01`.** Contemporaneous is not independent: no release or Chief Editor
selection separates them, and the work order requires **one** entry before a turn ends. `B-047`
supersedes `B-043` in substance — it includes the same work, adds the review findings (`B-044`,
`B-045`, `B-046`), and is the entry that actually requests the boundary.

> **`B-047` is designated the sole canonical `turn-report` for `LB-S1-01`.** `B-043` is
> **reclassified `Kind: finding`, `Resolution: Superseded`, `Superseded-By: B-047`** — the historical
> file, its raised date, its author, and its "What happened" narrative are untouched; only the
> routing fields change, the same scope `D-113`'s retroactive `finding → turn-report` conversion
> used on `B-022`/`B-026`. **A reclassification is not a rewrite when the narrative survives it.**

**Every future turn report names its run.** A `Run:` field is added to `TEMPLATE.md` and
`docs/handoff/README.md`, required for `Kind: turn-report` only. `B-047` gains `Run: LB-S1-01`
retroactively as the worked example; `B-043` gains it too, so the superseded record still states
what it was contemporaneous with.

**A channel check now rejects two live canonical turn reports naming the same run.**
`handoff-response.mjs` reads `Run:` on every `turn-report` entry and flags a second one whose
`Resolution` is not `Superseded`/`Withdrawn`. It cannot detect a **missing** `Run:` on legacy
entries as an error — `B-022` and `B-026` predate the field and report different runs (`D-103`'s
empty turn and the later S0 worktree turn) by narrative alone — so the check only fires the
duplicate case, and only among entries that carry the field.

### Child — `B-052`: `C-28` never closed against its own named evidence

**`C-28`'s own closure rule** (§5.14bm, restated at line 2486) **is: "closes when the next Lane B
turn ends with a report."** `B-047` is that report, filed at the boundary `D-118` performed. The
register nonetheless still carried `C-28` as unchanged through `D-119`–`D-122` — four passes past
its own qualifying event.

> **`C-28` is CLOSED, 2026-08-25, on `D-118`/`B-047`.** The historical fact it protects is
> unchanged and restated, not replaced: **`D-103`'s turn produced no handover, and no `D-103`
> report is created retroactively — the absence stays the evidence.** What changes is that the
> **forward condition** — "and nothing came back" — is no longer true. `B-047` is what came back,
> two turns later, at the first boundary the outgoing lane itself requested.

**Both facts are kept, and they are not the same fact.** The closure line at §5.14bm (line 2486)
gains a dated closure note rather than an edit to its own claim; the condition table entry
(line 5818, `D-119`'s carry-forward) is updated from "unchanged" to "closed" here, not silently
left to read stale the way `B-045` found the boundary procedure and `B-048` found the Build Spec.

### `B-051`: two shapes for one semantic kind

**`D-113` changed `B-022` and `B-026` from `Kind: finding` to `Kind: turn-report` and changed only
the `Kind` line.** Both still carry four blank closure-only fields (`Resolution`, `Verified-By`,
`Evidence`, `Verified-At-Commit`); `B-043` and `B-047` — written directly as `turn-report` — omit
them entirely. **Checked against every script that reads this channel, the two shapes are
currently equivalent**: `handoff-fields.mjs`'s `field()` returns `null` for an absent line and for
a blank one alike, by construction (its own header names this exactly: *"a caller asking `is this
filled in` gets one answer, not three"*), and both `handoff-response.mjs` and `closure-readiness.mjs`
exclude every `turn-report` from the unresolved count regardless of which shape it uses. **`B-051`'s
"guaranteed failure" is prospective, not live — no parser here currently distinguishes them.**

> **Normalized anyway, because a maintained corpus with two representations of one semantic thing
> is the drift shape this project keeps finding under other names.** The four blank closure-only
> fields are removed from `B-022` and `B-026`. Nothing about their `Kind`, `Phase`, `Status`,
> narrative, or `Lane A` acknowledgement changes.

**The work order's wording is corrected to match.** §5 said *"leave `Resolution:` empty.
Permanently"* — true in effect but names a blank field where the canonical shape omits the field.
Replaced with *"omit the `Resolution` field entirely — do not include the line."* The README's
existing wording (*"it takes NO `Resolution`"*) already matched the omission reading and is
unchanged.

### What these three have in common

**None was a defect in a check — `bun run check` was green throughout.** `B-051` is a shape
inconsistency no script reads differently (yet); `B-052` and `B-053` are readings of prose no
script parses at all — `C-28`'s closure rule and a report's relationship to its run are stated in
sentences, not fields. **The apparatus verifies fields. It was Lane B, reading the register's own
sentences against its own conditions, that found the sentence had already been satisfied.**

### Gaps

**None opened.** **Closed:** `C-28`, 2026-08-25, on `D-118`/`B-047` (above). **Unchanged:** `C-26`,
`C-27`; `C-32` and its parked values; `G87`, `G88`, `G89`, `G90`, `G95`, `G96`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `B-051` | ✅ §5.14cd | **— unaffected** | **— unaffected: channel docs, not the three lane rule files — see prose above for `README.md`, `TEMPLATE.md`, `LANE-B-WORK-ORDER.md` §5** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected** |
| `B-053` | ✅ §5.14cd | **— unaffected** | **— unaffected: channel docs and a check script, not the three lane rule files — see prose above for `README.md`, `TEMPLATE.md`, `scripts/checks/handoff-response.mjs`** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected** |
| `B-052` / `C-28` closure | ✅ §5.14cd, line 2486 note, line 5818 updated | **— unaffected** | **— unaffected** | **— unaffected** | ✅ §5 note citing `D-123` | **— unaffected** |

### Scope limits

**Creates no `D-103` report, retroactively or otherwise** — the absence stays the evidence.
**Reclassifies `B-043`'s routing fields only** — its narrative, author, and raised date are
unedited. Approves no retention value; `C-32` untouched. No lane selected, no phase closed.

---

## 5.14ce `D-124` — `D-123` Claimed a Tier It Never Edited, and the Sweep Agreed

**Lane A correction, 2026-08-25, answering `B-054`, `B-055` and `B-056`.** All three are defects in
`D-123` — **the pass immediately before, for the third consecutive time** (`D-122` recorded the same
of `D-121`). Two of them say the same thing in different registers: **`D-123` wrote rules into prose
and installed nothing that could enforce them.**

### Parent — `B-054`: a propagation claimed, not performed, and a check that agreed

**`D-123`'s tier table marked the `C-28` row ✅ for Phase closure. Commit `ed256d2` never touched
`V1-PHASE-CLOSURE.md`.** Its live Lane B row still named `B-043` and `B-047` symmetrically — the
exact conflation `D-123` existed to remove — and carried no `C-28` closure at all.

> **This is `G58`, the failure `tier-sweep` was built to catch, arriving through the fallback built
> into `tier-sweep`.** The check requires *"at least one ID from the row's Item cell appears in the
> mapped document"*. That row's Item cell read `` `B-052` / `C-28` closure `` — **no decision ID**,
> so the fallback accepted any of them, and **`C-28` was already in the file from an earlier pass.**
> A pre-existing mention satisfied a claim about a new edit.

**Both halves are repaired.** §5's Lane B row now distinguishes **`B-043` as the schema work
evidence** from **`B-047` as the sole canonical handover**; a new §5 subsection records **`C-28`
closed prospectively on `D-118`/`B-047`**, restating that run `LB-S0-01` produced no handover and
that none is created for it. **`G98`** closes the check: the decision is now taken from the
**enclosing section heading** when the Item cell names none.

> **The obvious patch was the wrong one.** Adding the section's decision to the candidate list
> makes the sweep **weaker** — the test is `.some()`, so every extra candidate is another way to
> pass. It replaces the fallback rather than joining it.

**On its first real run the stricter rule found three false claims, not one.** `D-123`'s was the
reported one; **`D-122` claimed a Build Spec edit and cited only `D-121` in the file, and `D-95` and
`D-113` each claimed all three rule files while citing only a condition or a gap there.** Every one
of those edits had actually been made — **what was missing was traceability, which is the half of
`D-54` that says propagate the fact *and* make it findable.** All three are now cited at the
target rather than softened in the table.

> **The probe run and the real run disagreed, and the real one is right.** A dry run over the
> register reported **zero** new failures, which read as *the corpus already satisfies this*. It
> did not. The probe was a string-patched copy built through a shell heredoc, and the quoting ate
> the patch: its heading regex lost every `\s` escape and its capture group entirely, so
> `sectionDecision` was never assigned and the copy **silently kept measuring the old rule.**
>
> **A green that tells you what you hoped is the one to re-run.** This is `arrival_not_correctness`
> inside the tooling built to detect it — and the second time this corpus has had a shell heredoc
> corrupt an escape sequence into a passing no-op (`D-119`'s literal backspace byte). **The lesson
> is not "check twice"; it is that a probe must be able to fail** — one built by patching a copy
> should be proven to catch a case it is known to catch before its silence is believed.

### Child — `B-055`: the key the uniqueness control protects was optional

**`D-123` required `Run:` in the README, the template and the work order, and implemented
`if (run)`.** A report with no run passed and never entered the duplicate map. **The control could
reject a repeated key but not require the key** — and `B-022` and `B-026`, carrying no run,
demonstrated the passing shape a future report could copy.

**Run identifiers are now assigned in the live phase record** (§5.0a), not minted by the report:

| | |
|---|---|
| **`LB-S0-01`** | the `D-103` turn — **no report, permanently** (`C-28`) |
| **`LB-S0-02`** | `B-022` · **`LB-S0-03`** `B-026` · **`LB-S1-01`** `B-047` |

**`LB-S0-01` is listed precisely because it has no report.** A table of only the runs that reported
would hide the `C-28` absence at the one place a reader counts handovers — `B-053`'s
`report count ≠ turn count` defect, running the other way.

**The check now fails on missing, blank, unregistered and duplicate runs**, keyed on the leading
identifier token rather than the whole line, so two reports on one run cannot differ by a comment
and both pass. **A superseded supporting finding may still cite its run** — `B-043` does — and is
not counted, because a superseded report is reclassified `Kind: finding` and only turn reports
enter the map.

### Child — `B-056`: the normalized shape had no control, **and the shape itself was wrong**

**`B-056` is upheld: nothing detected a regression.** A copied legacy field returns, `field()` maps
it to `null`, and every check stays green. Fixed with `fieldPresent`, which sees a **blank** marker
— precisely the state `B-051` reported.

> **But `B-056` asks for all four fields, and that is `D-123`'s error, inherited.** `D-123` wrote
> that a turn report omits `Resolution`, `Verified-By`, **`Evidence`** and `Verified-At-Commit`.
> **`B-047` — the report `D-123` designated canonical in the same pass — carries a filled
> `Evidence:` line.** The rule as written condemned the entry it had just made authoritative, and
> `B-056`'s own success criterion (*"all existing canonical turn reports pass"*) contradicts its
> own repair.
>
> **Ruled: `Evidence` is not a closure field on a report — it is the report's point.** A turn
> report exists to say what the turn produced. **Three markers are rejected**; `Evidence` is
> permitted and **must not be blank**, which is what `B-051` actually complained about. The prose
> in the register, README, template and work order is corrected to match the entries.

### What these three have in common

**`D-123` is the third consecutive pass whose own output was corrected by the lane that could not
commit.** The pattern is now specific enough to name: **a decision that installs a rule in prose
and defers the control is a decision that has not landed.** `B-055` and `B-056` are the same defect
in two fields; `B-054` is that defect inside the check that was supposed to catch it.

**`C-22`'s limit, fourth instance — and the reader keeps being Lane B.**

### Gaps

**Opened and closed:** `G98` — `tier-sweep`'s Item-cell fallback let a pre-existing ID satisfy a
claim about a new edit; the enclosing section's decision is now required.
**Unchanged:** `C-26`, `C-27`; `C-32` and its parked values; `G87`, `G88`, `G89`, `G90`, `G95`,
`G96`. **`C-28` remains closed** (`D-123`) and is now propagated.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `B-054` / `G98` | ✅ §5.14ce | **— unaffected** | **— unaffected: a check script, not the three lane rule files — `scripts/checks/tier-sweep.mjs`** | **— unaffected: no file created or retired** | ✅ **§5 Lane B row and the `C-28` closure subsection — the edit `D-123` claimed** | **— unaffected** |
| `B-055` | ✅ §5.14ce | **— unaffected** | **— unaffected** | **— unaffected: no file created or retired** | ✅ **§5.0a, the run identifier table** | **— unaffected** |
| `B-056` | ✅ §5.14ce | **— unaffected** | **— unaffected: channel docs — see prose for `README.md`, `TEMPLATE.md`, `LANE-B-WORK-ORDER.md` §5** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected** |

### Scope limits

**Assigns run identifiers; creates no report for `LB-S0-01`** — that absence is `C-28`'s evidence
and stays. **Edits no migration and no test**; `0002`'s index removal remains specified, not
applied. Approves no retention value; `C-32` untouched. No lane selected, no phase closed.

---

## 5.14cf `D-125` — The Owed Critic Pass; Two Defects in Lane A's Own Last Two Edits

**Lane A pass, 2026-08-25.** After `D-122`, `D-123` and `D-124` each corrected the pass immediately
before it, the Judge asked for the owed critic pass (`D-93`) rather than more forward work. **Run
on a separate turn, against the committed artifacts** (`D-93` rules 1–2), recorded in
`V1-PHASE-CLOSURE.md` §6.1f.

**Two findings, `F41` and `F42`, both fixed.** `F41`: `D-124`'s edit to `LANE-B-WORK-ORDER.md` §5
inserted a paragraph between a sentence and the clause it completed, leaving an orphaned
non-sequitur — confirmed against `git log -p`, restored. `F42`: `handoff-response.mjs`'s own
*"WHAT IT FAILS ON"* header comment went stale the instant `D-123`/`D-124` added two new failure
modes, because **nothing couples a check's own header to its own code** — `channel-docs` couples
the README and template, not a check's prose about itself. Both are Lane A's, in the two most
recent passes.

**Zero findings would itself have been reportable under `D-93` rule 3** — noted, not triggered,
since genuine defects were found.

### Gaps

**None opened.** No check gap: `F42` names a coupling that does not exist and is not proposed as
one — a check verifying its own comments against its own code is not a control this apparatus
builds, consistent with `D-93` rule 2 already requiring a human to read source over summary.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-125` / `F41`, `F42` | ✅ §5.14cf | **— unaffected** | **— unaffected** | **— unaffected: no file created or retired** | ✅ §6.1f | **— unaffected** |

### Scope limits

**Fixes two prose/comment defects; touches no check's enforced behavior** — `handoff-response.mjs`'s
logic is unchanged, only its header comment. **Does not re-examine** the run-identifier assignment
logic beyond `RUN_ID`'s regex, `tier-sweep`'s `sectionDecision` fallback against heading shapes
other than the one tested, or anything outside the `D-121`–`D-124` chain. No lane selected, no
phase closed, no retention value approved.

---

## 5.14cg `D-126` — `G98` Backtested Across the Register's Full History; One Untested Branch Closed

**Lane A pass, 2026-08-25, on the Judge's instruction to stress-test and backtest the `D-125`
fix before treating it as settled.** `D-125` scoped itself explicitly to the one section it fixed;
this pass is the deferred verification.

### Parent — the backtest: does `sectionDecision` resolve correctly everywhere it has ever run?

**Every checkmarked row in every tier-applicability table in the register's history, replayed
against the current fallback.** Not a sample: the register was walked top to bottom exactly as
`tier-sweep` walks it, and every row carrying a ✅ was recorded against the decision the fallback
would assign it.

> **105 rows carry a ✅ across the register's history. 74 have no `D-` id in their own Item cell and
> depend on `sectionDecision`. Zero mismatches** — every one resolves to the decision whose section
> it is actually inside, including across a heading that names a gap rather than a decision (`G63`
> at §5.14aa, between two real decisions) without the tracking leaking across it.

**One thing checked and found NOT to be a bug.** The `B-054`-shape fixture mutates
`V1-PHASE-CLOSURE.md`, not the register — that looked like a wrong-file bug on inspection. It is
not: `tier-sweep` verifies a claim against the **target file the tier maps to**, and "Phase closure"
maps to `V1-PHASE-CLOSURE.md`, so the fixture is correctly exercising that specific verification
path. Run in isolation, confirmed: unmutated is 0 findings, mutated is exactly the 2 rows that cite
`D-124` for that tier. **Verified rather than assumed, in both directions** — the same discipline
`D-124`'s own probe failure argued for.

### Child — the stress test: the one branch the backtest could not reach

**No live row exercises `sectionDecision === null`** — every real table in the register sits after
at least one decision heading. That branch degrades to the pre-`G98` behavior (any ID in the cell)
by construction, but *by construction* is exactly the claim `D-125`'s own probe failure showed
cannot be trusted unverified.

> **A synthetic fixture inserts a checkmarked row ahead of every real heading, mapped to a real
> tier target and a probe ID confirmed absent from it, and asserts a finding names it.** The first
> attempt mapped the row to the "Register" column instead and asserted the claim COUNT would rise —
> **it did not, and the fixture correctly reported MISS.** `checked` only increments inside the loop
> over a tier's `files`, and "Register" maps to `files: []` — that column can never be counted, by
> a completely different mechanism than the one under test. **The fixture caught a defect in
> itself before it could certify anything**, which is the same shape `F36` recorded for the very
> first tracked fixture run: a port turned a narrow assertion into a wrong one, reported as `MISS`
> rather than passing quietly. Rebuilt against "Build spec", a tier with a real file — a finding
> naming the probe proves the fallback path was reached and evaluated more directly than a count
> would have.

### What this pass is and is not

**Backtest, not audit.** It confirms the fallback's OWN prior claims resolve consistently; it does
not re-verify that those 105 claims were substantively true — `C-22`'s limit stands, checked form
not re-checked content. **Stress test, not fuzzing.** One constructed adversarial case for the one
structurally distinct untested path, not a generated corpus — the backtest already exhausted the
paths any real edit has taken.

### Gaps

**None opened, none closed.** `G98` remains closed (`D-125`); this pass is its verification, not a
new finding.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-126` | ✅ §5.14cg | **— unaffected** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected** |

### Scope limits

**Adds one fixture; changes no check's enforced behavior.** Backtests `tier-sweep`'s fallback only —
does not backtest `handoff-response.mjs`'s `Run:`/`CLOSURE_ONLY` enforcement against history, since
those are new rules with no pre-`D-124` corpus to replay them against. No lane selected, no phase
closed, no retention value approved.

---

## 5.14ch `D-127` — The Two 90s Renamed and Separated; `C-32` Restructured; No Schema Change

**Chief Editor ruling, 2026-08-25.** Two different windows have both been called *"90 days"* since
the pre-`D-116` discussion, and treating them as one variable is what produced the conflation this
decision resolves. **Backtested against the corpus before adoption** — see the check at the end of
this section.

### `RET-POC-90` and `REUSE-WINDOW-90` — the two 90s, named and separated

| Name | What it governs | Where it was already decided |
|---|---|---|
| **`RET-POC-90`** | PDPA purpose-limitation deletion for an **unpaid POC request** — *"delete 90 days after non-reply, following follow-ups"* | `D-43` §"PDPA contains its own exception" — **already settled**, unaffected by this decision |
| **`REUSE-WINDOW-90`** | The editorial window after a brief's **rejection** during which the **same source topic may be reused** for a different angle | Raised conversationally alongside `D-116`'s *"90-day archival"* refinement but **never itself formally ruled** — this decision is that ruling |

**Confirmed against the register rather than assumed**: `D-43` line 832 names `RET-POC-90` exactly
— *"Request only, no payment (dropped-cart) → Delete 90 days after non-reply."* `D-45` (`G44`/`G45`,
transaction ID as the trace) is the evidentiary mechanism behind that same window. **Neither of
those decisions changes here.**

### Consolidated — `C-32`'s six rows

| # | State |
|---|---|
| **0** | The two 90s are different categories — a workflow-eligibility window versus a data-deletion period. **The prior single variable name was the defect**; nothing about either window's substance was ever wrong |
| **1** | ⬆️ **Leaves `C-32` — `REUSE-WINDOW-90` was never one of `C-32`'s five named items and does not become one.** Reuse eligibility is intake/workflow design, not a retention obligation. Its surface is **`C-13`** — the same BCP dashboard condition already tracks a business-continuity surface, and reuse-eligibility display belongs on it rather than opening a new one |
| **2** | `RET-POC-90` is **settled** (`D-43`, `D-45`) — confirmed unaffected, not reopened |
| **3–4** | **Void.** The remaining live question both folded into: **does `REUSE-WINDOW-90` also function as `C-32`'s archival trigger**, or are the two windows independent events? **CLOSED ARCHITECTURALLY 2026-08-25 (`D-128`)** — the product cannot trigger archival under any window (`D-115`), so the two are one clock and two independent consequences by design, never one inferred from the other. The floor NUMBER stays gated on `C-32`, unaffected |
| **5** | **Disclosure is not a discretionary choice.** One-person operating model, no segregation of duties — the product **states whatever the business supplies** (`G88`'s unmet dependency, `G41`'s absence-explanation) and never selects or judges what to disclose |
| **new** | **The trigger-identity question is separated from all five above — it is intake design, not retention.** Who or what constitutes a legitimate new trigger (distinct from `REUSE-WINDOW-90`'s reuse-eligibility and distinct from `RET-POC-90`'s deletion clock) opens as its own gap, `G99`, filed against intake design |

**`C-32`'s five named items are UNCHANGED**: `NFR-02`'s re-anchored floor · `AC-12a`'s *"policy and
version"* · `G40`'s unbounded `NFR-08` promise · `G88`'s supplied fact · `G41`'s explainable absence.
**Row 1 was never a sixth member being removed — it was a conversational conflation being named and
excluded**, which is why nothing here re-tiers or renumbers the original five.

### Workflow-level scoping only — no schema change

**`REUSE-WINDOW-90`'s eligibility check is scoped to OPEN (non-terminal-state) briefs.** A brief in
a closed state does not block a new trigger on the same source; only a currently-open one does.
**This is the existing UI/UX guard's scope, not a database constraint** — `D-121` already rejected a
DB-level partial unique index in favor of the submitter+hash+day guard, and nothing here reverses
that. `supabase/migrations/0002_s1_editorial_schema.sql` is **not touched by this decision.**

### Backtest — does this restructuring contradict anything already recorded?

**Swept every passage citing `C-32`, `C-13`, `D-43`, `D-45`, `D-116`, `G40`, `G41`, `G88` across the
register.** No passage asserts `C-32` has six items, asserts `REUSE-WINDOW-90` was ever formally
ruled, or assigns `C-13` a conflicting meaning — `C-13` (`D-57`) is *"BCP surface condition"*,
general enough to host this without redefinition. **Zero contradictions found.**

### Gaps

**Opened:** `G99` — the trigger-identity question, filed against intake design, not retention.
**Unchanged:** `C-32`'s five named items; `C-26`, `C-27`, `C-28`; `G87`, `G89`, `G90`, `G95`, `G96`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-127` / `G99` | ✅ §5.14ch, §5.1 | **— unaffected: no code or schema changes** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected: reuse-eligibility is intake design, and `C-32`'s owed policy documents are unchanged** |

### Scope limits

**No schema, no migration, no code.** `C-32`'s five named items and their business-value dependency
are untouched — this decision names and separates vocabulary, it does not supply a retention value.
`REUSE-WINDOW-90` vs `C-32`'s archival-trigger question (rows 3–4) — **closed architecturally at
`D-128`, one pass later**; not reopened here. No lane selected, no phase closed.

---

## 5.14ci `D-128` — Rows 3–4 Close Architecturally; the Two 90s Are One Clock, Two Consequences

**Lane A pass, 2026-08-25, cross-referencing `D-127` rows 3–4 against decisions already on record.**
The Chief Editor's own cross-reference is correct: rows 3–4 do not need a new business ruling — the
architecture that answers them was already decided, across three separate passes, and simply had
not been connected to this specific question until now.

### Parent — rows 3–4 close: the product never triggers archival, either way

**The question as framed** (`D-127`): *does `REUSE-WINDOW-90` also function as `C-32`'s archival
trigger, or are the two windows independent events?* **The framing itself presupposes the product
can trigger archival. It cannot, under any window** — `D-115` ruled archival categorically
**external**: *"the application neither archives nor disposes."* `DATA_RETENTION_ARCHIVE_DAYS = 90`
is *"a boundary in an outside process, not a disposal date."* No window the product computes can be
an archival trigger, because triggering archival is not an act available to the product at all.

> **What the cross-reference actually resolves is narrower and answerable now**: are
> `REUSE-WINDOW-90` and `DATA_RETENTION_ARCHIVE_DAYS` the **same numeric configuration value**, read
> from two angles? **Very likely yes** — `D-116` already names the connection without formalizing
> it: *"the product's stake is the UI/UX of missing data … refined by the 90-day archival."* One
> clock, computed once from a brief's rejection timestamp, serves two independent consequences:

| Consequence | Where decided | Nature |
|---|---|---|
| **Reuse eligibility unlocks** | This decision, confirming `D-127` row 1 | **Product-computed.** The system holds the rejection timestamp and can compute the boundary itself |
| **External archival is expected to have occurred** | `D-115` | **Not product-computed.** An outside process; the product does not perform it and cannot confirm it fired on schedule |

**Rows 3–4 CLOSE on this architecture**, not on a new numeric ruling: **the two consequences share
one clock by design efficiency, and remain independent acts** — the product's own reuse-window
computation is never evidence that external archival actually occurred. **The unratified number
itself (`C-32`'s floor) is unaffected** — this closes the *shape* of the relationship, not its
value.

### A gap the cross-reference surfaces, named rather than silently assumed away

**If `REUSE-WINDOW-90` unlocking is ever read by the UI as proof archival happened, that violates
`D-115`'s own architecture.** `G88` already rules the product needs a **supplied fact**, not an
inference, to state anything about archival — *"nothing tells the product it happened."* A
UI element that shows *"archived"* because the reuse-window elapsed would be inferring exactly the
fact `G88` says must be supplied. **Not a new gap** — it is `G88` applied to a design temptation this
cross-reference makes visible for the first time, so it is recorded as a scoping note on `G88`
rather than a new number, consistent with this corpus's own discipline against opening a gap for a
restatement.

> **The fix, stated as a constraint rather than a feature**: the reuse-eligibility surface and the
> archival-absence surface (`G41`/`G88`, still gated on `C-32`'s supplied fact) **must remain visibly
> separate UI elements**, even though they may share one underlying day-count. Neither may be
> derived from the other.

### Child — `G99` confirmed, unaffected

**The trigger-identity question stays exactly as `D-127` opened it**: filed against intake design,
not retention, and not touched by this pass. Nothing here bears on who or what constitutes a
legitimate new trigger.

### Gaps

**None opened.** **`G88` scoping note added** — the reuse/archival decoupling constraint above.
**Unchanged:** `G99`; `C-32`'s five named items and floor value; `C-26`, `C-27`, `C-28`; `G40`,
`G41`, `G87`, `G89`, `G90`, `G95`, `G96`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-128` | ✅ §5.14ci | **— unaffected: no schema or code changes** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected: `C-32`'s owed documents are unchanged; this closes an architectural relationship already implied by `D-115`/`D-116`, not a new requirement** |

### Scope limits

**Closes rows 3–4's SHAPE, not `C-32`'s floor number** — the actual day-count remains unratified
business content, unaffected. **No UI is built here** — the decoupling constraint is recorded for
whoever builds the reuse-eligibility and archival-absence surfaces later. No lane selected, no
phase closed, no retention value approved.

> **Superseded 2026-08-25 (`D-134`): the "same clock" hypothesis was wrong.** The Chief Editor
> ruled rejected/unpublished editorial archival at **5 years**, while confirming `REUSE-WINDOW-90`
> stays at **90 days, independently**. **The shape this decision closed still holds** — the product
> triggers archival under no window, full stop — but the *"very likely yes, one clock"* guess above
> did not survive contact with the actual ruling. **Two separate numbers, not one shared value.**

---

## 5.14cj `D-129` — Propagation Freshness: `B-039`/`B-040` Updated; `G98`/`G99` Added to §5.1; No New Ruling

**Lane A pass, 2026-08-25, checking the two items the Chief Editor named as still open — `C-32`'s
five values and the day-count, and `G99`** — for propagation gaps rather than re-deciding either.
**Nothing here rules a business value, and `G99` is not answered.**

### Parent — `C-32`'s already-routed packet had gone stale under its own feet

**`B-039` (the decision packet) and `B-040` (the application runbook) were both written before
`D-127`/`D-128` named the two 90s and closed rows 3–4.** Item 3 of `B-039` still asked the Chief
Editor to *"ratify or replace the 90-day archival boundary"* using only the bare number, with no
reference to the naming or the architectural finding that this number likely serves two independent
consequences.

> **Fixed additively, not rewritten** — per the request to keep this simple: a cross-reference block
> added to `B-039` item 3 and `B-040`'s record-class table row, naming `DATA_RETENTION_ARCHIVE_DAYS`
> explicitly, distinguishing it from the already-settled `RET-POC-90`, and stating that the
> workflow use (`REUSE-WINDOW-90`) does **not** wait on this ratification — only the archival meaning
> of the number does. `B-040`'s structural-coupling-check spec gains one more required failure case:
> the `D-128` decoupling constraint, so whoever eventually writes
> `scripts/checks/retention-policy-coupling.mjs` builds it in from the start rather than discovering
> it later.

**`C-32`'s actual five values remain exactly as `B-040` already lists them** — the 90-day
ratification, each class's bounded minimum, the archive operator/location class, restoration
authority, and later disposal authority. **None is decided here. None is Lane A's to decide.**

### Child — `G99`: not a duplicate of `G95`/`G96`, and now findable

**Checked against `G95` and `G96` before recording anything**, since the user's instruction to avoid
duplicates makes this the load-bearing question. `G95` is the brief-hash's field composition
(mechanism); `G96` is the missing submitter column, blocked on S6 auth (storage). **`G99` is
neither — it is upstream of both**: which sources of triggering count as legitimate at all is a
precondition for what a hash should treat as identical and what a submitter column should record.
**Confirmed distinct, not merged.**

**The propagation gap**: `G99` was opened in `D-127` but, like `G98` before it, never reached §5.1 —
the table whose own heading claims *"every ID."* **Both added here**, matching `G95`/`G96`'s and
`G97`'s existing entries in shape and citation.

### Gaps

**None opened, none closed.** `G98` and `G99` gain §5.1 rows; their substance is unchanged from
where `D-124` and `D-127` left them. `G95`, `G96` confirmed distinct from `G99`, unaffected.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-129` | ✅ §5.14cj, §5.1 | **— unaffected** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected: no requirement changes, only cross-references added to already-routed channel entries** |

### Scope limits

**Decides no business value, answers no gap.** `B-039`/`B-040` gain pointers, not new asks — the
five values and the day-count are exactly as open as before this pass. `G99` stays open. No lane
selected, no phase closed.

> **Corrected same-day, on re-read:** this decision's own §5.1 row and Gaps note both cited `G98`'s
> origin as `D-125`. **`G98` was opened and closed in `D-124`**; `D-125` is the critic pass that
> found defects in `D-124`'s own edits and named `F41`/`F42`, not `G98`. Both citations fixed. No
> other content changes.

---

## 5.14ck `D-130` — What `C-32` and `G99` Each Need Supplied, Consolidated and Made Answerable

**Lane A pass, 2026-08-25.** Both items are genuinely blocked on input only the Chief Editor or the
business can supply. This decision does not supply either input — it makes each ask **findable in
one place, at the size the question actually is.**

### Parent — `C-32`: the ask already exists in full; nothing new is written here

**`B-039` and `B-040` already carry the complete packet and runbook.** Writing a second version
here would be exactly the restated-tally shape this corpus keeps correcting under other names.
**Consolidated pointer only:**

| Need | Where the full ask lives |
|---|---|
| The five business values *(90-day ratification, per-class bounded minimum, archive operator/location, restoration authority, disposal authority)* | `docs/handoff/B-039` §§1–7, `B-040`'s record-class table |
| What happens once supplied | `B-040`'s nine-step application runbook |

**Nothing here is answerable by Lane A.** `B-039`/`B-040` are current as of `D-129`'s cross-reference
update; no further freshening is needed until a new decision touches this territory again.

### Child — `G99` opens `C-34`, sized to the question it actually is

**No packet has ever asked the Chief Editor about `G99`**, unlike `C-32`. Confirmed by search: no
`docs/handoff/` entry names it. **`C-32`'s five-value shape would be disproportionate** — `G99` is
one narrower question, not a policy framework, so it is opened directly as a condition rather than
routed through a packet Lane A cannot itself raise (`docs/handoff/` is Lane B/C → Lane A only,
`D-90`).

**`C-34` opened, carrying `G99`'s three questions in full** — see the condition itself, filed
alongside `C-32`/`C-33` rather than restated here.

### Gaps

**None opened, none closed.** `C-34` opened as the condition carrying `G99`'s three questions.
`C-32` unchanged — no new ask, no restated one.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-130` / `C-34` | ✅ §5.14ck, §3 | **— unaffected** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected: intake design, not a product requirement, until answered** |

### Scope limits

**Answers neither `C-32` nor `C-34`.** Supplies no business value, no channel policy, no detection
rule. `C-34`'s three questions are the entirety of what this pass adds — everything else is a
pointer to already-existing content. No lane selected, no phase closed.

---

## 5.14cl `D-131` — `C-34` Ruled by the Chief Editor; a Third Channel Named; `G99` Closes

**Chief Editor ruling, 2026-08-25, answering `C-34`'s three questions in full one turn after they
were opened.** Recorded at `C-34`'s own definition rather than restated here — see the condition.
**Confirms `D-121`'s submitter+hash+day model; does not replace it.**

### The ruling, summarized — full text at `C-34`

1. **Three legitimate channels, closed set for v1**: Chief Editor manual · POC payment ·
   trend/fade-analysis-informed drafting (itself entered through the manual-trigger path).
2. **No channel bypasses `REUSE-WINDOW-90`.** Uniform treatment; the clock is business-amendable
   via `C-13`'s BCP dashboard surface, not fixed per channel.
3. **Different-submitter reuse within the window is legitimate; no detection is built.** Each
   originating channel's record and day-count stay **separate**, never merged — even where the
   underlying topic is the same and both are legitimate.

### `G99` closes; `G95`/`G96` are unblocked, not answered

**`G99` — CLOSED.** All three questions it opened are ruled. **`G95` and `G96` remain open** — the
ruling supplies new inputs to each (a third channel for the hash's field list; a
never-merge instruction for what a submitter column must eventually distinguish) rather than
answering either directly. Recorded at each gap's own §5.1 entry.

### Gaps

**Closed:** `G99` (`D-131`, ruling `C-34`). **Unblocked, not answered:** `G95`, `G96` — new inputs
recorded at their own entries. **Unchanged:** `C-32` and its five values.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-131` / `C-34`, `G99` | ✅ §5.14cl, `C-34`, §5.1 | **— unaffected: no schema or code changes** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected: `G95`/`G96` remain the product-facing consumers, and neither closes here** |

### Scope limits

**Rules `C-34` only.** Does not supply `G95`'s field list or `G96`'s column — both remain future
work, now better-specified than before this ruling. `C-32`'s five values are untouched. No schema,
no migration, no code. No lane selected, no phase closed.

---

## 5.14cm `D-132` — What `G95`/`G96` Actually Still Need From the Chief Editor: Almost Nothing

**Lane A pass, 2026-08-25, checking what `D-131` left genuinely open before asking for more input.**
Both gaps' entries still framed themselves as waiting on the Chief Editor. **Checked against what
`D-131` actually answered — one already isn't, the other never was.**

### Parent — `G95`: one sub-question closed, two are not business questions at all

**`G95` named three sub-questions.** *Do different submitters collide?* — **`D-131` already
answered this: no, never merged.** The other two — *does the source reference participate in the
hash*, and *does the hash change on a pre-gate edit* — are **hash-mechanics decisions**. `D-121`
already ceded the guard's overall design to Lane A without routing it through the Chief Editor;
neither remaining sub-question turns on a fact only the business holds. **Lane A's to specify, on a
future pass — not a new Chief Editor ask.**

### Child — `G96`: was never a Chief Editor question

**`G96`'s own text has said since it opened**: *"the harder half is that until S6 the value cannot
be trusted."* **This is a sequencing dependency, not an open decision.** The role `SEC-03` names is
already specified; what's missing is authentication infrastructure, which is Lane B's build, not a
ruling. `D-131` added one detail (the column must distinguish channel) but did not change what
actually blocks it.

### Grandchild — `C-32`: no new content, pointer only

**Already answered in full by `B-039`'s plain-language block** (added last pass). Repeating it here
would be exactly the restated-content pattern this corpus keeps correcting under other names.
**Nothing added.**

### What this means in practice

**Of the three items named this pass, the Chief Editor has zero new input to supply.** `C-32`'s
five values are the one item still genuinely theirs, and that ask has not changed since `B-039` was
last freshened.

### Gaps

**None opened, none closed.** `G95` and `G96` reframed at their own §5.1 entries to state precisely
what remains and who owns it. `C-32` unchanged.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-132` | ✅ §5.14cm, §5.1 | **— unaffected** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected: no requirement changes, only ownership clarified** |

### Scope limits

**Answers nothing.** Reframes ownership only — `G95`'s two remaining sub-questions and `G96`'s `S6`
dependency are unchanged in substance, only in whose queue they sit. `C-32`'s five values are
untouched. No lane selected, no phase closed.

---

## 5.14cn `D-133` — `G95` Closed as Lane A's Own Call; `C-32`'s Lower-Stakes Items Get Recommended Defaults

**Lane A pass, 2026-08-25.** `D-132` said two of `G95`'s sub-questions were Lane A's technical call
and three of `C-32`'s five values were the business's alone. This pass **makes the first call and
drafts recommended defaults for the parts of the second that follow from the operating model already
on record** — leaving the parts that carry real business risk untouched.

### Parent — `G95` closes: source reference is the hash's anchor field, framing is not

**Reasoned from decisions already on record, not invented fresh.**

> **Does the source reference participate?** **Yes — it is the primary field, and effectively the
> only one.** `D-127`'s reuse-window governs *"reuse of the topic for a different angle"* after
> `REUSE-WINDOW-90`. If the hash included the angle/framing text, two submissions on the **same**
> source with **different** framing would already produce different hashes and never collide —
> **the reuse-window would have nothing left to gate.** For the window to mean anything, the hash
> must key on the **source reference alone**, so same-source resubmissions collide regardless of
> framing, and the 90-day clock is what separates a legitimate reuse from a same-day duplicate.
>
> **Does the hash change on a pre-gate edit?** **Only when the source reference itself changes.**
> Framing, notes, and draft text are **not hashed**, so editing them before the first gate leaves
> the hash untouched by construction — there is nothing there to destabilize. A correction to the
> **source reference itself** (wrong link, wrong article) is a genuine identity change and
> **recomputes the hash live** up to the first gate, after which `D-121`'s guard freezes it.
>
> **One implementation note for whoever builds this, not a new question**: normalize the source
> reference (canonical URL form, strip tracking parameters) before hashing, so two links to the
> same article do not produce two hashes by accident.

**`G95` CLOSED.** Sub-question 1 was `D-131`'s; sub-questions 2 and 3 are this decision's.

### Child — `C-32`: recommended defaults for the three items the operating model already answers

**Not a ruling — a draft the Chief Editor can approve in one word or amend.** Items 3–5 of `B-039`
all ask *who* is authorized to do something, and `B-040`'s own draft text already states **the
Chief Editor is the accountable owner while the business has one natural person, with no
segregation of duties** (`D-127` row 5's disclosure ruling says the same thing from the audit
side). That fact answers *who*, for these three, on its own:

| Item | Recommended default |
|---|---|
| Archive operator/location | The hosted Supabase project's own infrastructure — archival is external to the application (`D-115`), and no second operator exists yet |
| Restoration authority | The Chief Editor, sole operator, may authorize restoring an archived record to the current set |
| Disposal authority | The Chief Editor, sole operator, may authorize disposal later; each act is documented with a reason (no disposal occurs in v1) |

**Items 1 and 2 are NOT defaulted — real business judgment.** The 90-day number carries actual
statutory-exposure and business-risk tradeoffs; the per-class bounded minimum is five separate
judgment calls. **Neither is Lane A's to suggest a number for.**

**Added to `B-039` as recommended defaults, clearly marked as suggestions, not rulings** — approving
all three in one line closes 3/5 of the packet.

### Gaps

**Closed:** `G95` (`D-133`, sub-questions 2–3; sub-question 1 was `D-131`'s). **Unchanged:** `C-32`'s
items 1–2; `G96`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-133` / `G95` | ✅ §5.14cn, §5.1 | **— unaffected: no code until the guard is built** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | ✅ **`TR-DM-01`'s `brief_hash` note updated from "composition unspecified" to the closed answer** |

### Scope limits

**Closes `G95` only.** Proposes, does not decide, three of `C-32`'s five items — items 1–2 remain
entirely open, real business judgment, no default offered. No schema, no migration, no code written.
No lane selected, no phase closed.

---

## 5.14co `D-134` — `C-32` Ruled in Full: Record Classes, Periods, and the Two Clocks Confirmed Separate

**Chief Editor ruling, 2026-08-25, answering `B-039` items 1 and 2 and confirming items 3–5.**
**`C-32`'s business-value packet is now fully answered.** Two clarifying questions were asked before
recording anything, since one answer changed an architecture Lane A had already built on:
`REUSE-WINDOW-90` and editorial archival are **confirmed independent, not one shared clock**
(superseding `D-128`'s guess — corrected there and in `B-040`).

### The record classes, ruled

#### Account/login records — no retention clock of their own

**Supabase magic-link auth.** No separate retention policy — **superseded by access control**
(account enabled/disabled), not a data clock. **Exception, on user request**: the clock starts from
whichever is **later** — the POC delivery-package date, or the request date — **plus `RET-POC-90`**
(90 days, `D-43`, unchanged). This refines `RET-POC-90`'s start event; the 90-day figure itself is
untouched.

#### PDPA/POC payment records — financial policy, 5 years

**Payment transactions.** Follow financial policy, **5-year default** — confirms `D-43`'s existing
IRAS/ACRA rule; not a new number. **Needs a partition/classification column** (below).

#### Editorial rejected/unpublished — 5 years, and the two clocks are now confirmed separate

**Archival and minimum retention: 5 years.** A **house-policy placeholder**, not a statutory claim
— adopted *"since there is no specific rules currently"*, explicitly **amendable** if GRC external
rules later supply a real figure. **Not** `D-114`'s retracted error (comparing unlike things); this
is a deliberate number choice, correctly labelled provisional.

> **`REUSE-WINDOW-90` is confirmed UNAFFECTED, at 90 days, independently.** Reuse-eligibility is a
> workflow permission the product computes itself; archival is an external act on a wholly
> different clock. **`D-128`'s "very likely the same clock" hypothesis is superseded** — two
> numbers, not one. Corrected at `D-128`'s own section and `B-040`'s coupling-check spec.

#### Published records — 5 years, tied to the activity log

**Minimum retention: 5 years** (financial policy default), each article row tied to its own
append-only activity log.

#### Rejected/unpublished — same append-only linkage

**Tied to its own append-only activity log**, using the 5-year figure ruled above for this class.

### Items 3–5 — confirmed, with the deferral scope stated precisely

**Approved as recommended** (archive operator = hosted Supabase infrastructure; restoration and
disposal authority = the Chief Editor, sole operator), **with this clarification**: these are
**Project Scope, not product** — the operational mechanism (the actual external archive job,
restoration process, disposal process) is **deferred until after the product is live**, since there
is no data yet to act on. What is **not** deferred: the partition/classification column (below),
which exists at intake so the deferred external process has something correct to act on later.

### The partition/classification column — specified for Lane B, not deferred

**`D-42`'s own principle applies**: *"classify at intake, not at disposal … classification is cheap
at intake and expensive at disposal."* The Chief Editor's ruling repeats this need across every
record class. **Specified in `LANE-B-WORK-ORDER.md`, not applied here** — `supabase/` is Lane B's
surface (`D-56`).

### Gaps

**None opened.** `D-128`'s hypothesis superseded, not a new gap. **Unchanged:** `NFR-02`, `AC-12a`,
`G40`, `G88`, `G41` — **`C-32`'s packet is answered; the five consumers each still need independent
re-evaluation** (`B-040`'s own discipline: closing `C-32` does not auto-close them).

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-134` | ✅ §5.14co, §5.14ci correction, `G88` §5.1 correction | **— unaffected: the runbook, not the ruling, touches Build Spec** | **— unaffected** | **— unaffected: no file created or retired by this ruling** | **— unaffected** | **— unaffected: `B-040`'s runbook, not this ruling, writes `Modular_PRD`/source tiers** |

### Scope limits

**Rules the values; does not apply the runbook.** `B-040`'s nine-step application (Alpha Portfolio,
Business Case, Blueprint, the five consumers, the structural coupling check) is now **unblocked**
but **not executed in this pass** — that is its own substantial piece of work. No schema, no
migration applied — only the partition column is specified, and only to Lane B's work order. No
lane selected, no phase closed.

---

## 5.14cp `D-135` — `B-040`'s Runbook Applied in Full: Documents Written, Check Installed

**Lane A pass, 2026-08-25.** `B-040`'s nine-step runbook, unblocked by `D-134`, is applied in this
pass, parent-first as the runbook itself specifies. `RET-EDITORIAL` is no longer a proposal — it is
written, ratified, cross-cited, and structurally enforced.

### Parent — Steps 1–4: the four tiers, each citing the one canonical detail

**Step 1** — canonical identifier confirmed: `RET-EDITORIAL 0.1-provisional`, status updated from
*"framework approved, values pending"* to **ratified in full** (`D-134`). **Step 2** — Alpha
Portfolio §6.5 added, obligation and accountable owner only, no period restated. **Step 3** — the
Business Case's `RET-EDITORIAL` section written in full: every `CHIEF-EDITOR-DECISION-REQUIRED`
placeholder replaced with `D-134`'s ruled value, plus the account/login class `D-134` added beyond
the original five. **Step 4** — Blueprint A6, D8, and G1 all point to `RET-EDITORIAL` rather than
restating a number; the two queue-cleanup rows (weekly stale-item sweep, 48-hour Discovered dwell)
relabelled **queue cleanup, not archival** (`D-115`/`D-116` had already named this defect; it had
never been fixed at its source until now).

**One real defect found and fixed while executing, not invented for this decision**: the Blueprint's
own dwell-time table used *"Auto-archive"* for a **work-queue removal**, exactly the conflation
`D-115` warned against. `D-116` had already ruled the distinction; the Blueprint text itself had
never been corrected.

### Child — Step 5: the five consumers, each re-evaluated on its own evidence

| Item | Disposition |
|---|---|
| `NFR-02` | **CLOSED.** Cites `RET-EDITORIAL`, states the bounded rule, copies no period |
| `AC-12a` | **NOT closed.** Cites `RET-EDITORIAL` and the complete supplied-fact field list; **the acceptance criterion itself is untested** — a documentation input, not a passing test |
| `G40` | **CLOSED.** `NFR-08` now reads *"within the governing retention policy"*, bounded, no period copied |
| `G88` | **NOT closed, narrowed.** The semantic contract exists in full; **the supply mechanism is deferred** (Project Scope, post-launch, `D-134`) — no live fact exists yet |
| `G41` | **NOT closed.** Documentation complete; **the UI itself is unbuilt** |

**Per the runbook's own discipline**: closing `C-32` did not auto-close all five. Two closed on
documentation grounds (`NFR-02`, `G40` — both were wording defects, fully fixable by text); three
stayed open because their bar is testable/built behavior, which this pass does not construct.

### Child — Steps 6–8: the structural coupling check, installed and verified against itself

**`scripts/checks/retention-policy-coupling.mjs` created**, all nine failure modes from `B-040` §6
implemented, wired into `check-consistency.mjs` as check 17. **Not trusted on the strength of
writing it** — run against the freshly-written corpus (positive control, zero findings) and against
six adversarial mutations, one per representative failure mode, before being treated as real:

> **Three defects the check found in itself, not in the corpus**, all before any commit. Its first
> "archive equals delete" pattern matched on mere proximity, flagging the Alpha Portfolio's
> legitimate *"archival is external... disposal is separate"* sentence as if it defined one as the
> other — tightened to require a direct equating relationship. Its first numeric-period scan flagged
> Blueprint scoring-formula day-counts (`"decays to 0 after 7 days"`) that have nothing to do with
> retention — scoped to lines that actually mention archival or retention. **Run against the real,
> unmutated corpus** (not an adversarial test), it then flagged this very decision's own narration
> — *"every `CHIEF-EDITOR-DECISION-REQUIRED` placeholder replaced"* — as if the placeholder it
> quotes were still live, because it scanned the register's prose alongside the four tiers that
> actually must not contain one. **The register narrates history; it is not itself a tier the
> marker's presence means anything in.** Fixed by scanning only the four required tiers for a live
> placeholder, while still reading the register for the separate closure claim.

**Tier mapping extended** (`tier-sweep.mjs`): *"business case"* and *"blueprint"* were named by
`B-040` §8 as required tiers but had no mapping — same shape `G92` found for Phase closure. Added,
verified against the whole register before adopting (no new failures on the existing corpus).

### Fixtures — Step 7

Six fixtures added: the positive control, plus one per representative failure mode (version
disagreement, direct archive/delete equation, uncited Blueprint period, Build-Spec dependency
language, missing `D-116` citation). **Deliberately does not mutate the real `0002` migration** —
even restored, a fixture briefly touching Lane B's schema file would risk reading as a lane crossing
if `B-021`'s restore-failure class hit it mid-run; the equivalent Build-Spec-side trigger is used
instead, since check 7 fires on either.

### One correction this pass made to its own immediately-preceding work

**A mistake in my own git usage, caught and recovered, not hidden.** A `git checkout --` issued to
restore a test mutation **discarded the entire uncommitted Business Case section** written earlier
in this same pass — the file reverted to its pre-`D-135` state before anything had been committed.
Caught immediately by checking `git status` rather than assuming the command did what was intended;
the section was rewritten from the content already composed, this time also fixing the backtick
placement that had caused the coupling check's version-detection regex to silently miss the
section's own header on the first attempt.

### Gaps

**Closed:** `NFR-02`, `G40`. **Narrowed, not closed:** `AC-12a`, `G88`, `G41` — see Step 5 table.
**Unchanged:** `G87`, `G89`, `G95`'s composition (closed earlier, `D-133`), `G96`, `G99` (closed,
`D-131`).

### Tier applicability (`D-54`)

| Item | Register | Build spec | Business case | Blueprint | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|---|---|
| `D-135` | ✅ §5.14cp | **— unaffected: no code, schema, or sequence change** | ✅ `RET-EDITORIAL` section written in full | ✅ A6/D8/G1 repointed; queue-cleanup rows relabelled | **— unaffected** | ✅ new check + fixture suite rows | **— unaffected: `V1-PHASE-CLOSURE.md` not touched this pass** | ✅ `NFR-02`, `NFR-08`, `AC-12a`, retention/archival prose all updated |

**Alpha Portfolio** (Tier 1, `D-74`, above `Modular_PRD`, not a standard tier-sweep column until
this pass): ✅ §6.5 added, obligation and owner only.

### Scope limits

**Writes no code, no schema, no migration.** The partition/classification column remains specified
to Lane B (`D-134` §2.2c), not applied here. `C-32`'s external archival job, restoration process,
and disposal process remain deferred, Project Scope, post-launch. `AC-12a`, `G88`, `G41` remain
open pending built/tested behavior. No lane selected, no phase closed.

## 5.14cq `D-136` — The Handoff Backlog Read End to End: `B-040` Classified, `B-057` Answered, and a Count Found Inside the Condition That Governs Counting

**Asked:** read `docs/handoff/` as a whole, explain it, find the gaps, draft the fixes.

**The directory answered on its own.** Lane B had left four files staged and uncommitted — three
verifications and one new entry raised against Lane A — and that uncommitted state was itself the
first finding: **git is the source of truth here, and `bun run fixtures` refuses a dirty tree**, so
Lane B's work was both at risk and blocking the suite. It is committed first, attributed to Lane B,
before any Lane A content was written on top of it.

### The parent defect, and the child it produced

**`B-040` — the entry that owns `D-135`'s entire nine-step application — carried a blank
`Resolution:`, `Verified-By:` and `Verified-At-Commit:`.** The `Lane A:` field asserted the work in
prose and classified it nowhere. **`Answered` proves Lane A replied; it proves nothing else**, and
`closure-readiness` correctly reported one answered non-report entry with no resolution.

**The cause is mechanical, not editorial.** This corpus applies a two-commit evidence pattern — a
first commit records `Applied`, a second fills in the hash the first could not know about itself.
**`D-135` made the first commit and never made the second.** Nothing detected it at the time because
the check that would have fired needs a `Resolution` to validate the commit *against*, and a blank
`Resolution` skips that branch entirely. **The absence of the claim suppressed the check on the
claim** — the same shape as `G84`, one field lower.

**Lane B found it and raised `B-057`.** That is the mechanism working: Lane A applied, Lane B read
the tracker rather than the prose, and the gap between them is exactly what `docs/handoff/` exists
to surface.

| Repair | State |
|---|---|
| `B-040` records `Resolution: Applied` at `50772f1` | ✅ Applied |
| `B-040` names **all three** commits, not one | ✅ **Correction to `B-057`, in its favour** — see below |
| `B-040`'s `Verified-By` left open for Lane B | ✅ `D-102` forbids Lane A verifying its own application |
| `B-057` answered, `Applied`, its own `Verified-By` left for Lane B | ✅ Applied |
| No separate closure spreadsheet or tally introduced | ✅ **`B-057` asked for this explicitly, and it is the load-bearing half** |

**`B-057` asked for `Verified-At-Commit: 50772f1`, and `50772f1` alone would have misdirected the
verification pass.** `D-135`'s application spans three commits: `50772f1` (the nine steps),
**`0cbcee5` (step 7's two fixture defects, corrected only afterwards)** and `b14bc49` (the curated
merge). A verifier reading `50772f1` would find two fixtures still wrong and reasonably reject work
that was in fact repaired. **All three are named in the entry.** The resolution anchor stays
`50772f1`, because that is where the change landed.

### `G100` — the condition that governs the `Applied` backlog states the backlog as a number

**`B-057`'s closing instruction — *"do not create a separate closure spreadsheet or tally"* — is
what exposed this.** Applying that principle to the condition `B-057` reports into, rather than only
to `B-057` itself, found the rule already broken one level up.

**`C-26` reads *"Ten entries are `Applied`"*, in its heading and its opening paragraph.** It has
read that since `D-102` opened it. **`closure-readiness` has never gated ten entries**: it gates
*every entry raised against the closing phase*, a set that has grown with every correction Lane A
has applied since. **The condition and the control it describes had parted company**, and the
condition is the one a reader consults.

**`G75` settles the repair, and forbids the obvious one.** Four documents once asserted the number
of `C-14` checks as a literal and all four were wrong; the ruling then was that **correcting a
number only delays the next drift**, and the tally must be *replaced by the rule that determines
it*. **Applied here identically**: `C-26`'s heading and paragraph now state the scope as a rule —
every entry raised against Phase 1 that still carries `Applied` — and the figure is left to the
check, which prints it on every run.

**`D-102`'s own record is left untouched.** *"Ten"* was true when `D-102` wrote it. An answer is an
append-only statement of what was true at the time (`D-104`), and editing history to match the
present is the failure `B-011`'s own correction note exists to prevent.

> **Why this one matters more than its size suggests.** `C-26` is the condition standing between
> Phase 1 and closure. **A reader consulting it to size the remaining work would have sized it at
> ten** and found the boundary immovable for reasons the condition did not explain. `G55`, `G56`,
> `G58` and `G75` all name restatement as this corpus's drift mechanism; **this is the first
> recorded instance of it inside a closure condition.**

### What is NOT fixed, and cannot be by Lane A

**The `Applied` backlog itself.** Every Phase-1 entry still carrying `Applied` needs an independent
verifier, and **Lane A is structurally disqualified** — `C-26`'s own text says marking its own
entries `Verified` is `B-013` item 4's defect performed deliberately. **Lane B is the verifier**, and
Lane B is currently `Blocked` on Lane A's run. **This is a Sprint-boundary scheduling matter for the
Chief Editor, not a documentation defect**, and it is recorded rather than repaired.

### Gaps

**Opened and closed:** `G100` — §5.1. **Unchanged:** `C-26` remains **open** and is now stated as a
rule rather than a count; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`, `G87`, `G89`, `G96`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `B-040` classified, `B-057` answered | ✅ §5.14cq | **— unaffected: no scope, sequence or DoD change** | **— unaffected: no rule text changes; the `Acknowledged`-at-minimum duty already covers it** | **— unaffected: no file created or retired** | **— unaffected: §5's Lane A row already states condition 2 as a rule with no tally** | **— unaffected: no requirement text moves** |
| `G100` — `C-26`'s tally removed | ✅ §5.14cq, §5.1, `C-26` | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: the condition is named there, its count never was** | **— unaffected** |

**Phase closure is genuinely unaffected and that is worth stating explicitly.** `V1-PHASE-CLOSURE.md`
§5's Lane A row reads *"condition 2 NOT met — `Applied` entries await their raiser (`C-26`)"*. **It
already carried the fact and never the count**, so the drift `G100` records existed in exactly one
place. Checking the sibling before assuming symmetry is what kept this from becoming a two-file fix.

### Scope limits

**Writes no code, no schema, no migration, no check.** No lane selected, no phase closed, no
condition closed. **`C-32`'s deferred remainder is untouched**: the partition/classification column
stays specified to Lane B, and the external archival, restoration and disposal processes stay
Project Scope, post-launch. **No entry was moved to `Verified`** — that word belongs to Lane B.

## 5.14cr `D-137` — `B-041`'s Unanswered Half: Semantic Completion Done, and Four Defects in the Mechanism That Reports It

**Lane B declined to verify `B-040` and named the reason:** `B-040`'s own success criteria end
with *"Graphify is semantically current and portable before graph artifacts are proposed"*, and
that criterion was never met. **Lane B was right, and the miss is Lane A's.**

**`D-118` answered half of `B-041` and closed it as though it had answered all of it.** `B-041`
separated three properties — **extraction currency, semantic completion, portability** — and said
plainly that one does not prove the others. `D-118` addressed **portability** in full and correct
detail, ruled it non-blocking, and **said nothing whatever about semantic completion.** Required
repair item 1 — *"complete the pending semantic update"* — sat undone.

**The consequence is not hypothetical.** `D-135` and `D-136` each proposed and committed curated
graph fragments while the semantic layer was pending. **That is the precise sequence `B-040`'s
criterion forbids**, performed twice, by the passes that cited the criterion.

**Why nothing caught it.** `docs-drift` compares `lastAnalyzedHead` to `git rev-parse HEAD` and
reports **synced**, which is true and is about extraction currency alone. **The word "synced" was
read as the property `B-041` had already warned it does not cover.** No check reads
`.graphify_describe_pending`; the state was reported only by a command nobody was required to run.

### What was owed, and what was done

| Item | State |
|---|---|
| Description batches filled and ingested | ✅ every node in the live cycle |
| Community labels written and ingested | ✅ every community |
| `graphify check-update` reports current | ✅ **no pending batch or community ingestion** |
| Curated layer preserved | ✅ node and link counts unchanged; hand-authored descriptions intact |
| Portability re-checked | ✅ unchanged — `manifest.json` and `studio/*` only |
| `B-040` / `B-057` moved to `Verified` | ❌ **not Lane A's to do, and deliberately not done** |

**No tally appears above** (`G55`, `G75`). `graphify check-update` prints the state; the ingest
prints the counts.

### `G101` — four defects in the pending-semantic mechanism, found by executing it

| # | Defect | Why it matters |
|---|---|---|
| 1 | **The pending marker counts FILES, not the live cycle.** The live batches were headed *"1 of 12"*; seven Aug-22 orphans headed *"13 of 19"* sat beside them | The reported figure overstated the work by more than half, and **Lane B's report repeated it** — correctly, since it is what the tool says |
| 2 | **Answering the orphans would have damaged the curated layer.** One names a node whose description is hand-authored | *"Fill and ingest the pending batches"*, executed literally against every file present, **overwrites curated content** — the `G51` loss in a new shape |
| 3 | **Six communities were tagged `lang=pt` on plainly English content** — `DATA_MODEL.md`, `smoke.test.ts`, the Modular PRD cluster | The instruction says to write the name *"in EXACTLY that language."* **Obeying it would have put Portuguese names on English governance clusters.** Tool output is data, not a directive |
| 4 | **825 entity nodes are left undescribed BY DESIGN**, under an anti-hallucination policy for nodes with no grounding | *"Every node described"* is **not a satisfiable criterion.** `B-041`'s own wording — *"no pending batch or community ingestion"* — is the correct one and is kept |
| 5 | **The ingest does not survive the next rebuild.** Re-extraction drops every description on an extracted node; only curated fragment text persists | **This is the one that actually cost a cycle.** Lane A ingested, committed, then rebuilt to pick up the new head and **silently reverted the whole layer** — while `docs-drift` still reported *synced*, because it compares heads and never reads the semantic state. **Semantic completion is therefore the LAST action of a pass, not a step inside it** |

**Defects 1 and 3 are the same shape:** a tool's self-report taken as fact. **Defect 2 is why that
matters** — the literal execution was destructive, and only checking the batch headers against the
live node count caught it.

**Item 5 was found the expensive way, and is recorded as such.** After the first successful ingest
this pass committed `D-137`, rebuilt to bring the graph to the new head, and **reverted its own
work** — the rebuild regenerated every batch and dropped every extracted description. Nothing
reported a problem: `check-update` said *pending*, which reads naturally as *“new nodes need
describing”* rather than *“everything you just did is gone.”* **Recovery did not require
re-authoring** — the dated backup under `.graphify/` still held the pre-rebuild text, and it was
replayed into the regenerated batches by id. **The ordering rule and the recovery method are both
written into `sync-docs` §7**, because a lesson left only in a decision record is one the next pass
will not read in time.

### The limit, stated rather than buried

**`.graphify/` is gitignored, so none of this semantic work is a tracked commit.** It is
reproducible only by running `graphify check-update` on a machine holding the graph — the same
local-only class as `graph-coverage`, `docs-drift` and `source-sweep`. **A fresh checkout has no
semantic layer and cannot be given one from the repository**, and no check can assert otherwise
without becoming `probe_that_cannot_fail`.

### Gaps

**Opened and closed:** `G101` — §5.1. **Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`;
`AC-12a`, `G88`, `G41`, `G87`, `G89`, `G96`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `B-041` completed | ✅ §5.14cr | **— unaffected: no scope, sequence or DoD change** | **— unaffected** | **— unaffected: `.graphify/` is untracked and is not an inventory artifact** | **— unaffected** | **— unaffected** |
| `G101` | ✅ §5.14cr, §5.1 | **— unaffected** | **— unaffected: the graph rules already say the curated layer does not rebuild (`G51`); this adds no rule, it records how the tool misreports** | **— unaffected** | **— unaffected** | **— unaffected** |

### Scope limits

**Writes no code, no schema, no migration, no check.** **`B-040` and `B-057` remain `Applied` and
are deliberately not advanced** — `C-26` disqualifies Lane A from verifying its own entries by
name, and Lane B's sequence is adopted as written. No lane selected, no phase closed.

## 5.14cs `D-138` — Why Lane A Cannot Verify Its Own Entries, and the One Gap on the Path That Could

**Asked:** explain, step by step, how `B-040` and `B-057` actually reach `Verified`, given that Lane
A is disqualified from doing it.

### The disqualification is two independent barriers, not one convention

| Barrier | What it is |
|---|---|
| **Mechanical** | `closure-readiness` tests `Verified-By` against `NOT_AN_INDEPENDENT_VERIFIER` and rejects `lane a`, `claude code`, `self`, `same`, `acknowledged`, `answered`. Writing `Verified-By: Lane A` turns `bun run check` **red**, with the message *"is the answering side or a receipt state, not an independent verifier"* |
| **Governance** | `C-26` names Lane A as unable to solve it, and **`D-102` created `Applied` for exactly this purpose** — the honest word for a fix nobody independent has confirmed. `B-013` item 4 is the report that made it necessary |

**Neither can be worked around by wording.** A `Verified-By` value crafted to slip past the regex
would be the defect the regex exists to catch, performed knowingly.

### `G102` — the outgoing lane owes a turn report, and Lane A has nowhere to file one

**Found while tracing the path, not by looking for it.** `§5.2` step 1 requires the outgoing lane to
raise a `Kind: turn-report` entry, *"required even when nothing was done"* (`D-105`). **The next
boundary has Lane A outgoing.**

**`docs/handoff/` is closed to Lane A twice over.** Its README scopes raising to *"Lane B and Lane
C"*, and `ENTRY_FILE` matches `/^[BC]-\d+.*\.md$/` — so an `A-` file is **silently ignored, not
rejected.** Lane A could file a turn report there and **no control would ever read it**:
`a_check_that_cannot_fail`, in the step that hands over the lock.

**This is not new.** Lane A was the outgoing lane at `D-117` and filed nothing. Every *"the outgoing
lane files its report"* reference in this corpus resolves to **`B-047`, a Lane B entry.** The Lane A
case was never given a location, and nothing detected the omission — step 1's own `Checked by`
column reads *"Nothing."*

**Chief Editor's ruling, 2026-08-26: Lane A's turn report IS the boundary decision section in this
register**, cited from `§5.0a`'s `Report` column. **No new artifact and no channel change** —
`D-117` and `D-118` already recorded Lane A's turns here in prose; the ruling names that as the
location and makes the citation required. **Rejected: opening `docs/handoff/` to `A-NNN` entries**,
which would make Lane A both raiser and answerer in one directory and undo the attribution `D-90`
deliberately avoided. **It remains a duty, not a checked control**, and is recorded as such.

### The path to `Verified`, parent first

| # | Step | Who | Enforced by |
|:---:|---|---|---|
| **1** | Lane A completes `LA-P1-04` and writes its turn report as the boundary decision section | Lane A | **Nothing** — a duty (`G102`) |
| **2** | **Name the incoming lane** | **Chief Editor** | **Nothing** — *"a judgement, not a derivation"* |
| **3** | `§5` updated in ONE edit: A → `Eligible`, B → `Active`, both `Selected` cells | Lane A | `lane-state` — fails on not-exactly-one `Active` |
| **4** | Lane B's run identifier assigned in `§5.0a` **at the boundary, not before** | Lane A | **Nothing** — pre-dating it is `G90` |
| **5** | Lane B generates its queue from the files and verifies each entry **against the artifacts, not the `Evidence` line** | Lane B | `closure-readiness` on the result |
| **6** | Lane B files its turn report in `docs/handoff/` | Lane B | `handoff-response` |
| **7** | Boundary recorded in the register with a decision number | Lane A | `tier-sweep` |

**Steps 1, 2 and 4 are unenforceable.** That is stated here rather than discovered later.

### `B-040` and `B-057` are not a task of their own

**Every entry now carrying `Applied` was raised by Lane B**, so every one of them is Lane B's to
verify — and `docs/LANE-B-WORK-ORDER.md` `§2.3` already scopes the pass that way: *"every entry you
raised whose `Resolution` reads `Applied`."* **No instruction naming these two is added**, because
the generated queue already contains them and a second list is the `G55` drift mechanism.

**The figure is not written here** (`G75`, `C-21`). `bun run check` prints it, and `§2.3` says so.

> **The practical consequence for the boundary.** Selecting Lane B to verify **two** entries would
> spend a Sprint boundary on a fraction of the queue and require another for the rest — the
> *"boundary used as a per-task toggle"* pattern `C-27` exists to watch for. **Phase 1's condition 2
> needs the Phase-1 entries as a set**, not two of them.

**Which sprint the run identifier belongs to is a boundary decision, not a fact to look up.**
Identifiers are sprint-scoped (`D-124`), Lane B's last was `LB-S1-01`, and whether the next is
`LB-S1-02` or `LB-S2-01` follows from the sprint the Chief Editor opens.

### Gaps

**Opened and closed:** `G102` — §5.1. **Unchanged:** `C-26` open — **this decision does not advance
it**; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `G102` — Lane A's turn report location | ✅ §5.14cs, §5.1 | **— unaffected: no scope, sequence or DoD change** | **— unaffected: the rule files carry no boundary procedure; §5.2 is the only one** | **— unaffected: no file created or retired, which is the point of the ruling** | ✅ **§5.2 step 1 and the §5.0a `Report` note** | **— unaffected** |
| The path to `Verified` | ✅ §5.14cs | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **restates no procedure — §5.2 remains the only one** | **— unaffected** |

### Scope limits

**No boundary is performed by this decision.** No lane state changes, no run identifier is
assigned, no entry moves to `Verified`, no phase closes. **`docs/handoff/README.md` and `TEMPLATE.md`
are deliberately untouched** — the channel stays Lane B and Lane C, which is what the ruling chose.

## 5.14ct `D-139` — A Citation Corrected, and a Single-Process Transient Lock Given a Bounded Retry

**Asked:** explain the prior turn's closing note — *"traced it to the originating line before
re-running, per `B-021`'s documented scope"* — and fix the gap it names.

### The citation was imprecise, and it is corrected here rather than left standing

**`B-021` documents a different failure than the one that occurred.** `B-021`'s class is a SECOND
PROCESS touching the tracked tree while fixtures run — a concurrent `git stash`, a concurrent
check, a second fixture invocation — and its own required repair says so explicitly: *"do not run
anything else while fixtures run."* **Nothing else was running.** What happened was a single
process — the fixture runner alone — hitting a transient filesystem error
(`UNKNOWN: unknown error, open '...'`) on its own write, with no concurrent actor at all.

**Citing `B-021`'s scope for a different failure class is exactly `B-041`'s lesson one layer over**
(`D-137`, `G101`) — a true, correct answer read as covering a property it does not. **Corrected
here, in prose, per house discipline: an answer is append-only** (`D-104`) — `B-021`'s own entry is
untouched, because it was accurate about what it named at the time it named it.

### Why `B-001` specifically, twice

**Not chance.** `ENTRY = "docs/handoff/B-001-s0-completion-boundary.md"` in `scripts/fixtures/
suites.mjs` is the single file reused as the mutation target across roughly twenty of the sixty-two
fixtures — by far the highest write exposure of any tracked file in a run. A momentary OS-level
lock (antivirus scan, search indexer) has more chances to land on that one file than on any other,
which is why the cascade repeated on the same path both times rather than scattering.

### The fix — bounded, in Lane A's own surface, not a concurrency lock

**`scripts/fixtures/harness.mjs`'s `read`/`write` now retry a TRANSIENT error only**, up to four
attempts with a short backoff (`Atomics.wait`, synchronous — `mutate()`/`restore()` are sync
closures, so an async retry would change every fixture's shape). **The transient set is narrow:**
`EBUSY`, `UNKNOWN`, `EPERM` — the observed Windows lock signatures. **Everything else, `ENOENT`
included, still fails on the first attempt** — a genuinely missing file must not stall behind a
retry budget meant for a lock that clears in milliseconds.

**This is explicitly NOT `B-021`'s unbuilt concurrency lock.** `B-021`'s required repair items 2–5
— an exclusive repository-local lock, a disposable worktree, a second-writer failure mode — remain
unbuilt and are not addressed here. **What this closes is narrower and cheaper**: the single-process
write that has no protection at all against a millisecond-scale OS hiccup, which is what actually
occurred, twice, in this session.

**Proven, not merely written.** `scripts/fixtures/suites.mjs` gains `retryResilience`, four
assertions run directly against `withRetry` (exported for this purpose) rather than through a check
module — the three failure shapes that would each make the fix wrong in a different way: a
transient error clearing within budget succeeds; a persistent transient error still fails, bounded,
not masked; a non-transient error fails on the first attempt, never retried.

### Gaps

**Opened and closed:** `G103` — §5.1. **Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`,
`G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-139` — retry fix + citation correction | ✅ §5.14ct | **— unaffected: no scope, sequence or DoD change** | **— unaffected** | ✅ `scripts/fixtures/` row's citation list extended | **— unaffected** | **— unaffected** |
| `G103` | ✅ §5.14ct, §5.1 | **— unaffected** | **— unaffected** | **— unaffected: no file created or retired, `harness.mjs` and `suites.mjs` already inventoried under `scripts/fixtures/`** | **— unaffected** | **— unaffected** |

**No count is restated** (`G75`, `C-21`) — the inventory row already states this rule and gains
only a citation, not a number. `bun run fixtures` prints the total.

### Scope limits

**`B-021` is not reopened and its unbuilt items are not built here.** True concurrency safety —
an exclusive lock, a disposable worktree — remains future work, unchanged in scope from `B-021`'s
own accounting. **No boundary is performed, no lane state changes, no entry moves to `Verified`.**

## 5.14cu `D-140` — `AC-19` Corrected: A Required Repair From `B-032` That Was Never Applied

**Asked:** read a self-authored System Encyclopedia extract of the requirements corpus, treat its
Consistency & Contradiction Audit findings as gaps, fix what is genuinely fixable.

### The extract found five things. Four needed no action; one was real and live

| # | Finding | Disposition |
|---|---|---|
| 1 | `Modular_PRD.md` `AC-19` retained the pre-`D-06` "article reaches `Retracted`" framing while `FN-PUBLICATION-09-10-13.md`'s own `AC-19` had the corrected text | **Real, live, fixed — this decision** |
| 2 | `D-48`→`D-49` newsworthiness reversal left a visible seam for a reader stopping at `D-48` | **No action** — the register is append-only by design; a superseded decision correctly stays readable, and `D-49` states the reversal in its own text |
| 3 | The Addendum's "unconditional" independence overclaim survived three reviews before `D1` fixed it | **No action** — already resolved, cited here only as a pattern the extract itself flagged correctly |
| 4 | "Resolved" means two different things (structural resolution vs. ratification) under one column header | **No action** — the Addendum's own prose defends against exactly this misread; a table-header rename is a judgement call for whoever next revises that document, not a defect to correct unilaterally |
| 5 | No dedicated glossary entry separates Trend Score from Editorial Priority | **No action** — preventive-only; the extract itself is now that glossary entry |

**Only #1 was a genuine, unaddressed defect**, and it was not new — it had already been named.

### `B-032` named this exact gap, 2026-08-24, and its own required repair was never fully applied

`B-032`'s §4 item 5 read: *"`Modular_PRD` `AC-19` says the original article reaches `Retracted`, but
`D-06` and `SPECS-TRANSITION-ENFORCEMENT` say there are no new article states... Register precedence
rejects the eleventh-state reading; Lane A must propagate the correction at the tier that owns
`AC-19`."* Required repair item 3 restated it explicitly: *"it updates `Modular_PRD` where `Q11` and
`AC-19` own contradictory requirement language."*

**`B-032` carries `Resolution: Applied`.** Its evidence line cites the S1 window closure and the six
`[Q11]` markers cleared — **all true, and all about `Q11`.** `AC-19` is a second, separate item in the
same required-repair list, and nothing in `B-032`'s evidence touches it. **The entry's overall
`Applied` state was accurate about most of what it covers and silent about one item inside it** —
the same shape as `D-136`'s finding about `B-040`, one tier down: a resolution correctly describing
the bulk of the work can still leave a named sub-item undone with nothing to flag it.

**`B-032` is not reopened or edited.** An answer is append-only (`D-104`); this decision supplies the
missing half as new work, cited back to the entry that first named it.

### The fix

`Modular_PRD.md` `AC-19`'s `Then` clause is rewritten to match `FN-PUBLICATION-09-10-13.md`'s own
`AC-19` and the settled design (`D-06` notice-as-article, `D-08` inherited targets, `G23`/`D-10`
deliberation-only bypass, `D-112`'s adopted fields `article_kind`/`original_article_id`, no eleventh
state). **The order's issuing-authority-and-date requirement is preserved** — it was correct and is
not part of the contradiction.

### Gaps

**Closed:** the `B-032` item 5 / `AC-19` residual, previously untracked as its own gap ID since it
lived inside `B-032`'s required repair rather than the gap table. **Unchanged:** `C-26` open; `C-27`,
`C-33`, `C-34`; `AC-12a`, `G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-140` — `AC-19` corrected | ✅ §5.14cu | **— unaffected: no scope, sequence or DoD change** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | ✅ `AC-19`'s `Then` clause rewritten |

### Scope limits

**Writes no code, no schema, no migration.** `B-032` is not reopened, not edited, not moved to
`Verified` — that word belongs to Lane B, and this decision changes nothing about who verifies what.
No lane selected, no phase closed, no other `AC-` row touched.

## 5.14cv `D-141` — A Second Site of the Same Defect, Found by Widening the Sweep the Skill Re-Run Required

**Asked:** re-run the System Encyclopedia extraction skill against `docs/` (excluding `docs/handoff/`).

### The re-run's own methodology, taken seriously, is what found this

Producing an updated encyclopedia meant confirming the corpus was unchanged since the prior read
before reusing that read — and confirming it meant a fresh sweep for every remaining live instance
of the framing `D-140` had just corrected in one place, rather than assuming one fix closed the
class. **`grep` across every non-handoff `.md` file for the literal string `` `Retracted` `` found
two more, in a file the original pass never opened.**

### `docs/CONFIG_LOG.md` — a live authoritative reference, not history

`CONFIG_LOG.md`'s own header states its authority without qualification: *"Rows are authoritative;
the code implements them"* and *"Lane A owns this file, content included"* (`D-91`). Its
`FLAG_S3_RETRACTION` row read: *"`Retracted` state; `regulatory_retraction_order` bypasses `T8` when
true"* — the same abolished framing `AC-19` carried, in the document a build engineer reads to know
what a flag actually gates, before writing the code that implements it.

**Fixed.** The row now states the corrected model: deliberation-only bypass, a retraction notice
via `article_kind`, no eleventh state, citing `D-06`/`D-110`.

### `docs/journal/2026-08-16-sprint-plan.md` — checked, and correctly left alone

The same string appears at line 435, describing the same flag identically. **This is not fixed, and
should not be.** `docs/README.md`'s own taxonomy classifies `journal/` as *"dated build-readiness
entries... records decisions; documents do not ratify themselves"* — a historical record, the same
category as `entry006` and `entry007`, both of which carry the identical pre-reframe language and
are correctly left as a snapshot of what Entry 007 decided on 2026-08-16, two days before `D-06`
superseded it. **Rewriting a dated journal entry to match a later decision is the failure this
project's own append-only discipline exists to prevent** — it would make the record of what was
decided *when* unreconstructable. The distinguishing test applied: does the document declare itself
authoritative and living (`CONFIG_LOG.md`, explicitly), or dated and historical (`journal/`,
explicitly, per `docs/README.md`)? Only the first is corrected.

**Confirmed via the same sweep: every other `` `Retracted` `` occurrence in the corpus is either
already-correct usage** (the register's own repeated *"`Retracted` is NOT a state"*, `D-114`'s
unrelated "a value was retracted" sense, `raci-human-vs-digital-twin.md`'s already-post-reframe
*"no Corrected, no Retracted"* line) **or the retraction-as-publication journal entry's own
old-framing/corrected-framing contrast table**, which uses the old term deliberately, as a labelled
contrast, not as a live claim.

### Gaps

**Closed:** the `CONFIG_LOG.md` `FLAG_S3_RETRACTION` residual of the same class `D-140` closed in
`Modular_PRD.md`. **Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-141` — `CONFIG_LOG.md` corrected | ✅ §5.14cv | **— unaffected: no scope, sequence or DoD change** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected: already corrected under `D-140`** |

### Scope limits

**Writes no code.** `docs/journal/2026-08-16-sprint-plan.md` and `entry007` are deliberately
untouched — dated history, not living reference. No lane selected, no phase closed.

## 5.14cw `D-142` — The Fifth Boundary; `LA-P1-04` Closes, Lane B Selected on `LB-S1-02`

**Lane A run `LA-P1-04`, closed 2026-08-27, filed as its own turn report per `D-138`'s ruling that
this section is where an outgoing Lane A files it.** The run reviewed `docs/handoff/` end to end,
confirmed graphify currency against HEAD, and checked the corpus for the vocabulary-drift pattern
`D-38` names — no code, schema, or migration touched.

### The boundary — performed as `D-138` sequenced it, parent first

| # | Step | Result |
|:---:|---|---|
| **1** | Lane A completes `LA-P1-04`, files this section as its turn report | All 58 `docs/handoff/` entries read: `Status: Answered` on every one, no entry left `Open`. `.graphify/branch.json.lastAnalyzedHead` (`948bb6f`) matches `HEAD` — no drift, no rebuild needed. Only live vocabulary-drift precedent on record (`pub_target`/`platform_type`, `D-38`) is already closed historical precedent, not an open gap |
| **2** | Chief Editor names the incoming lane | **Robert Tan selects Lane B**, to continue its own surface (`app/`, `lib/`, `components/`, `supabase/`, `__tests__/`) |
| **3** | `§5` updated in one edit | `V1-PHASE-CLOSURE.md` §5: A → `Blocked` (`Eligible` applies only when the lock is entirely free, per `D-108` — not the case while B runs), B → `Active`, both `Selected` cells |
| **4** | Lane B's run identifier assigned | `LB-S1-02` — continuing Sprint 1 (`C-33`'s database-executed trigger test remains open and unassigned to any run until now) |

### What this is not

**Not a Phase 1 closure.** §1's five conditions are unchanged and untouched by this decision —
`D-100` already ruled that framework does not gate a lane handover, only a full phase close, and
this decision does not attempt the latter. Lane A returns to `Blocked` on Lane B's run, not
`Done` — `Eligible` applies only when the lock is entirely free (`D-108`), which it is not while
`LB-S1-02` runs. Lane A **closes last** (`D-99`), unaffected here. **Condition 2's `C-26`
disqualification stands** — this run verified the handoff channel's *shape* (every entry
answered), not the *content* of any individual `Applied` entry, which only an independent
verifier can move to `Verified`.

**Not a critic pass against condition 3.** No new artifact set was produced this run to critique;
§6.1f remains the latest recorded pass.

### Gaps

**Opened:** none. **Closed:** none. **Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`,
`G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Fifth boundary — `LA-P1-04` closes, `LB-S1-02` opens | ✅ §5.14cw | **— unaffected: no scope or DoD change, `LB-S1-02` continues S1's existing item list** | **— unaffected: the lane MAP is unchanged** | **— unaffected** | ✅ **§5 rows and §5.0a run table** | **— unaffected** |

### Scope limits

**Writes no code, no schema, no migration, no check.** No `docs/handoff/` entry is dispositioned or
moved toward `Verified` by this decision — that remains Lane B's own act on its own queue. Phase 1
is not closed.

## 5.14cx `D-143` — `Q3`/`Q5` Ruled Together: Edge Function Publish Path, `pg_cron` Retry Scheduler

**Chief Editor ruling, 2026-08-28.** `FN-PUBLICATION-09-10-13.md` §7 left both Open, and the prior
turn's audit found them **coupled, not independent** — whichever fires the retry determines what
can receive it. Ruled as one boundary rather than two.

### The ruling

| Question | Answer |
|---|---|
| `Q3` — publish path | **Supabase Edge Function**, not a Next.js Route Handler |
| `Q5` — retry scheduler | **`pg_cron`**, scheduling the Edge Function invocation |

### Why together, and why this pairing

**A Postgres-native scheduler cannot call a Vercel Route Handler directly.** `pg_cron` fires inside
Postgres; its only native reach is a Postgres function or an HTTP call the extension makes itself.
Deciding `Q5` as `pg_cron` therefore constrains `Q3` toward an Edge Function — the two could not be
ruled to different runtimes without adding a bridge neither `FN-PUBLICATION-09-10-13.md` nor the
provisioned stack calls for.

**Least new infrastructure, on what is already provisioned.** `D-120` provisioned the Supabase CLI
and local dev stack for `C-33`'s runner; `pg_cron` is a Postgres extension on the same already-
provisioned database, not a new service. **This ruling adds no new dependency** — it selects among
what `D-120` already stood up.

### What this does and does not settle

**Settled:** the runtime and firing mechanism for `FR-09`'s publish attempt and `NFR-05`'s bounded
retry. `PUBLISH_RETRY_BACKOFF_MINUTES = 5` (`CONFIG_LOG.md`) now has something to fire it.

**Not settled by this ruling — three of the fn-spec's five `SPECS`-requiring components remain
open:** credential isolation (`NFR-07`/`SEC-02` — where the Edge Function's own secrets live, a
separate design), the privileged write path review (`SUPABASE_SERVICE_ROLE_KEY`'s first genuine
use amends `TC1`'s finding, per `FN-PUBLICATION-09-10-13.md` §9 — a `TC1` amendment, not a
consequence of this ruling), and `TR-DM-03`'s schema shape (**already substantially answered** by
`publication_targets`/`publications` in `0002_s1_editorial_schema.sql`, drafted at `d826b53` —
restated here as unaffected, not reopened).

### Gaps

**Opened:** none — `Q3`/`Q5` were already-open questions, not gaps. **Closed:** `Q3`, `Q5` — both
now ruled. **Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `Q3`/`Q5` ruled | ✅ §5.14cx | ✅ **§S4 — publish path and retry scheduler named** | **— unaffected** | ✅ **`docs/specs/SPECS-PUBLICATION.md` created** (publish-path and retry-scheduler components only) | **— unaffected: no lane or boundary change** | **— unaffected: behaviour (`FR-09`, `NFR-05`) is unchanged, only its implementation is now named** |

### Scope limits

**Writes no code.** The Edge Function and `pg_cron` job are Lane B's surface (`supabase/`,
`app/`) to build, not Lane A's to implement. Does not resolve credential isolation, the `TC1`
privileged-path amendment, or `Q11`-class naming. Does not authorize applying `0002`.

## 5.14cy `D-144` — Chief-Editor Delivery Clarified; `D-96`'s Portal Exclusion Confirmed Unaffected

**Chief Editor ruling, 2026-08-28, across three exchanges.** What started as a request for a
buyer-facing download UI narrowed, on inspection, to a clarification of who already sees what
through the existing Chief-Editor-facing UI — no new account, no new portal.

### What was checked and found not to apply

Two candidate conflicts were raised and resolved without needing an exception:

| Candidate conflict | Resolution |
|---|---|
| `X8`/`NG-03` — Stripe removed, monetization excluded at Charter level | **Does not apply.** Payment for a `M-POC` engagement completes **before** the `articles` record exists — `PA-06`'s *"payment trace is an external identifier"* already says this. No in-app payment is requested or needed |
| `D-96`'s "delivery portal" exclusion, `PA-05`/`PX-02` (no client/buyer account) | **Does not apply.** Delivery is to the **Chief Editor**, an internal actor already inside the application per `PU-02`, through the UI that already exists. No client account, no client-facing portal is added. `D-96`, `PA-05`, `PX-02` are **unaffected and remain in force** |

### What is clarified — Chief-Editor UI visibility, not a new artifact or table

**For a `M-POC`-engaged article, the Chief Editor sees the client package (explainable content +
evidence ledger, `PR-11`'s POC folder) through the existing UI.** If the same article — one engine,
`PR-01` — **also reaches full pipeline completion**, the publishable article (`PR-11`'s MVP folder)
becomes visible **alongside** it, in the same Chief-Editor view. `PR-12`'s separation still holds:
this is Chief-Editor **visibility** of both folders under one engagement identifier (`PA-02`), not
the publishable article being copied, linked, or embedded **into** the client-facing folder — the
folders remain what they are; only what the Chief Editor can see together changes.

**`MockPublished`'s completion-gated trigger** (`V1-DECISION-REGISTER.md`, prior turn's audit,
not yet a register entry until now) is confirmed on the same basis: reserved for a POC-triggered
article, fired only once the pipeline has reached full completion — the same event that makes the
publishable article visible to the Chief Editor per the paragraph above. One condition, two
consequences, not two separate rules.

### What this decision does not do

**Does not edit `M-POC-REQUIREMENTS.md`, `FN-POC-ENGAGEMENT-01-13.md`, or `Modular_PRD.md`.**
Per `D-33` guardrail 1, a `Fn_Spec` change requires a `Modular_PRD` feature-group input, not a
prose description — none exists yet for this UI-visibility behavior. This decision **records the
ruling and clears the two candidate conflicts**; writing it into `Fn_Specs` is a named follow-up,
not performed here.

### Gaps

**Opened:** none. **Closed:** none — the two candidate conflicts are resolved as **not
applicable**, which is a different disposition from opening and closing a gap against them.
**Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Chief-Editor delivery clarified | ✅ §5.14cy | **— unaffected: no scope or DoD change** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— open follow-up: needs a feature-group entry before `Fn_Specs` can be edited (`D-33` guardrail 1); not performed here** |

### Scope limits

**Writes no code, no schema, no UI.** `D-96`, `PA-05`, `PX-02`, `PA-06`, `PX-03` are confirmed
**unaffected and remain in force** — this decision adds no account, no portal, no payment path.
The `Fn_Spec`/`Modular_PRD` edit needed to make this behavior authoritative below the register
tier is not performed by this decision.

## 5.14cz `D-145` — `Fn_Spec` Follow-Up Written; `NG-02` Found and Backlogged, Not Lifted

**Closes `D-144`'s open follow-up.** `M-POC-REQUIREMENTS.md` and `FN-POC-ENGAGEMENT-01-13.md` now
carry the Chief-Editor visibility rule and `MockPublished` trigger condition as `Fn_Spec`-tier
behavior. One correction to `D-144`'s own framing surfaced along the way, and one Charter-level
conflict was found and correctly not resolved by this decision.

### Correction to `D-144`'s framing

**`D-144` said this needed "a `Modular_PRD` feature-group entry" per `D-33` guardrail 1.** That
generalized the wrong process. `D-98` (`Modular_PRD.md` §0.6) already established `M-POC`'s
specific path: **modules are specified in their own requirements document, not inside
`Modular_PRD`** — `M-POC-REQUIREMENTS.md` **is** `M-POC`'s feature-group input, established when it
was written (`D-99`), not a new Modular_PRD section. Writing FR/US/AC entries into `Modular_PRD`
for `M-POC` would have reproduced exactly what `D-98` exists to prevent — a second product's
requirements inheriting `M-MVP`'s namespace.

### What was drafted, parent first

| # | Artifact | What changed |
|---|---|---|
| 1 | `M-POC-REQUIREMENTS.md` | `PR-14` (Chief-Editor visibility at full completion), `PR-15` (`MockPublished` trigger), `PA-07`/`PA-08` (their acceptance criteria). `PR-03` note and `D-96` exclusion-list note both record the `NG-02` finding below, not a lift |
| 2 | `FN-POC-ENGAGEMENT-01-13.md` | `F9`/`F10` (behaviour), new §4.4, `PA-07`/`PA-08` restated in §5, a risk row naming the `NG-02` boundary explicitly |
| 3 | `Modular_PRD.md` | `NG-02`'s row (§2.5) gets a backlog pointer to this decision, using its own existing forward-looking clause rather than new language |

### `NG-02` — found, not resolved, and correctly so

**Raised across the conversation that led here: a scoped, read-only client account for engagement
delivery.** Checked against `Modular_PRD.md` §2.5: `NG-02` is **Charter-level** — "no multi-team
accounts — one Chief Editor account" — and `Q10`'s row confirms it standing as recently as `D-79`.
`M-POC-REQUIREMENTS.md`'s own `PA-05`/`PX-02` and `D-96`'s delivery-portal exclusion are
**downstream restatements of `NG-02`**, not independent module-level choices — lifting them
without lifting `NG-02` would leave the module document contradicting the Charter it cites.

**Disposition: backlogged, not built, not specified.** `NG-02`'s row already anticipated this —
*"nothing forecloses later accounts for multiple natural persons"* — so the backlog pointer
extends existing language rather than inventing a new mechanism. **No Charter edit is made or
proposed here**; that remains outside any agent's authority per `CLAUDE.md`.

### A second finding, surfaced and resolved in the same pass: `Q3`/`Q5` propagation gap

**`D-143` marked `Modular_PRD` "unaffected."** Wrong — `Modular_PRD.md` §10 carries its own `Q3`
and `Q5` rows, both still reading `Open` after `D-143` ruled them. Fixed in this pass, and a
further defect found while fixing it: `D-143`'s reasoning that `pg_cron` "cannot call a Route
Handler directly" doesn't hold — `pg_net`'s `net.http_post` can call any HTTPS endpoint, which is
exactly what `TC8` (§6) already recommended, specifically to avoid a second deploy pipeline
against `CLAUDE.md`'s deploy-by-git rule. **Carried forward to `D-146`**, not resolved here.

### Gaps

**Opened:** none — `NG-02` was already Charter-standing, not newly found as a gap. **Closed:**
none. **Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `Fn_Spec` follow-up written | ✅ §5.14cz | **— unaffected: T3 parallel track, no sprint sequence change** | **— unaffected** | **— unaffected: no file created or retired, `M-POC-REQUIREMENTS.md`/`FN-POC-ENGAGEMENT-01-13.md` already existed** | **— unaffected** | ✅ **`NG-02` row backlog pointer, `Q3`/`Q5` propagation gap closed** |

### Scope limits

**Writes no code, no schema, no UI, no Charter edit.** `NG-02`, `PA-05`, `PX-02`, `D-96`'s
delivery-portal item all remain **in force, unchanged**. Does not resolve the `Q3` reasoning
defect found above — that is `D-146`.

## 5.14da `D-146` — `Q3` Reasoning Corrected; Edge Function Kept, Knowingly

**Asked, having found the defect while writing `D-145`:** `pg_cron`+`pg_net` can reach a Route
Handler directly, and `TC8` already recommended one to avoid a second deploy pipeline. Does
`D-143`'s `Q3` ruling still hold?

### The correction

**`D-143`'s stated reason for Edge Function was wrong.** `pg_net`'s `net.http_post` makes an
outbound HTTPS call to any URL — a Vercel Route Handler included. `pg_cron` scheduling a Route
Handler invocation is technically viable; **Edge Function was never a requirement `Q5` forced,
only a choice `D-143` mis-described as one.**

### The ruling, re-affirmed with the correct reasoning

**Chief Editor ruling, 2026-08-28: Edge Function stands.** Presented with the corrected picture —
`TC8`'s objection is real, and choosing Edge Function means a second deploy pipeline and secret
store outside `CLAUDE.md`'s deploy-by-git rule — **the Chief Editor accepted that cost rather than
reverting to a Route Handler.** `Q3`'s answer is unchanged; the reasoning behind it is not.

### What changed as a result

`Modular_PRD.md` `Q3`'s row and `docs/specs/SPECS-PUBLICATION.md` §1 both corrected to state the
accurate reasoning — `pg_net` makes Route Handler viable, Edge Function is chosen knowingly, not
because `pg_cron` requires it. No other content in either document changes; the invocation
contract in `SPECS-PUBLICATION.md` §3 is the same regardless of which runtime receives the call.

### Gaps

**Opened:** none — this is a reasoning correction, not a new defect class. **Closed:** none.
**Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `Q3` reasoning corrected | ✅ §5.14da | **— unaffected: no scope or DoD change** | **— unaffected** | **— unaffected: `SPECS-PUBLICATION.md` already existed, `D-143`** | **— unaffected** | ✅ **`Q3` row corrected** |

### Scope limits

**Writes no code.** Does not reopen `Q5` or the invocation contract. `TC8`'s deploy-pipeline cost
is accepted, not mitigated — no mitigation is specified here.

## 5.14db `D-147` — The Backlog Path Named; Three Items Given a "Ready When" Condition

**Asked:** across three items that turned out to be out-of-v1-scope (`D-144`, `D-145`, `D-146`),
is there an established path back from "excluded" to "buildable," or does one need inventing per
Scrum/Agile practice?

### Found: the path already existed, in `V1-BUILD-SPEC.md` §6

**`§6 "Out of scope for v1"` is already this project's backlog** — an `{Item, Why}` table, present
since the document's own drafting, not created by this decision. `NG-02`, `NG-03`, `S6`, and the
POC commercial flow were already rows in it. **What was missing, inconsistently, was a "Ready
when" condition** — Scrum's Definition of Ready, stated for `S6` (`OD1`–`OD3`) but not for the
others. `§6.1` names the four-step pattern explicitly and adds the missing condition to every row.

**Nothing new was built to answer this.** No backlog file, no second tracking mechanism — adding
one would have been the `G55`/`G56` drift pattern, a fact in two places.

### The three items, resolved as one finding each, not three new rules

| Item | Where it already lived | "Ready when," now stated |
|---|---|---|
| **Login/account (POC or MVP) flow** | `NG-02` (Non-Goals, Charter) + `S6` (§6) — **the same future item**, not two | `OD1`–`OD3` resolve. `M-POC`'s scoped client-account variant (`D-145`) is `S6`'s eventual scope, not a parallel path |
| **Payment flow** | `NG-03` (Non-Goals, Charter) | The Charter's `NG-03` is amended — outside any agent's authority, unchanged from `D-121`/`D-144` |
| **`M-POC`'s own build/`SPECS` readiness** | `§5`'s T3 parallel track + `G7a` + `B-P0-06` | `G7a` charters the manual lane and `B-P0-06`'s ten boundaries carry real values — already the most concrete condition of the three, just not previously cross-referenced from `§6` |

**The login-account and payment items are both Charter-gated** (`NG-02`, `NG-03`) — their "ready
when" is **an act only the Chief Editor can perform outside this repository's docs tier.** The
`M-POC`-readiness item is **not** Charter-gated; its ten boundaries are ordinary decisions,
answerable inside this project whenever the Chief Editor chooses to.

### A staleness defect found and fixed in the same pass

**`Modular_PRD.md`'s own `NG-03` row (§2.5) read present-tense** — *"the repo currently ships
Stripe scaffolding... S0 removes it"* — long after `X8` closed (`D-121`, verified `67706ca`).
`V1-BUILD-SPEC.md`'s `NG-03` row already had the correct, closed framing; `Modular_PRD.md`'s did
not. **The exact `G65` staleness class** — arrival was checked when `D-121` landed, this second
copy was not. Corrected to match.

### Gaps

**Opened:** none. **Closed:** none — no item here was ready to close; each got a stated
condition instead. **Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Backlog path named, `§6.1` added | ✅ §5.14db | ✅ **§6 rows given "Ready when"; §6.1 added** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | **— unaffected: no `FR`/`US`/`AC` change** |
| `NG-03` staleness fixed | ✅ §5.14db | **— unaffected: this document's `NG-03` row was already correct** | **— unaffected** | **— unaffected** | **— unaffected** | ✅ **§2.5 `NG-03` row corrected** |

### Scope limits

**Writes no code, no schema, no Charter edit, no new file.** Does not resolve `NG-02`, `NG-03`, or
`M-POC` readiness — states what would resolve each, resolves none of them. Does not create a
ranked product backlog or an order of execution among the three items.

## 5.14dc `D-148` — `D-147`'s Backlog Path Moved to the Living Tier; `V1-BUILD-SPEC.md` Was the Wrong Home

**Asked:** for the two items that are excluded from v1 entirely (`NG-02`, `NG-03`) rather than
merely pending within it, does recording their backlog condition in `V1-BUILD-SPEC.md` survive
that file's own eventual freeze — and if not, where does it need to live so ad-hoc Scrum/Agile
refinement can keep happening across whichever version is current?

### The defect in `D-147`

**`D-36` was already stated in `CLAUDE.md` and not checked against `D-147`'s own placement.**
`docs/v1/V1-*.md` files **freeze at sprint close** — an accurate rule this decision applied to
every other document in the corpus and missed applying to the document it was editing. Writing
the reusable four-step procedure and the "Ready when" conditions into `V1-BUILD-SPEC.md` §6.1 put
a cross-version mechanism inside a file that will stop being editable once v1 closes. **A `v2`
Chief Editor checking whether `NG-02` is ready would find a frozen v1 snapshot, not a live
answer** — the same shape of problem `D-36` exists to prevent one tier up.

### The distinction that resolves it: excluded-from-v1 versus not-yet-done-in-v1

**Not every item in `§6`'s table has this problem — only the ones actually deferred past v1.**

| Item | Class | Where its condition now lives |
|---|---|---|
| `NG-02` (accounts, incl. `S6`) | **Excluded from v1 entirely** — Charter-level, no v1 sprint builds it | `Modular_PRD.md` §2.5, moved here (`D-148`) |
| `NG-03` (monetization) | **Excluded from v1 entirely** — Charter-level | `Modular_PRD.md` §2.5, moved here (`D-148`) |
| `M-POC` build/`SPECS` readiness (`G7a`/`B-P0-06`) | **Sequenced *within* v1** — `T3`, `§5` | **Unmoved.** `T3` is part of v1's own build spec, not deferred past it; `V1-BUILD-SPEC.md` freezing with an accurate record of its own phase is correct, not a defect |

**The test, stated once so it doesn't need re-deriving per item:** *does this item's condition
need to be checkable after v1 freezes?* If yes, it belongs in the living tier. If the item is
simply unfinished v1 work, the v1 tracking file is exactly where it should be recorded.

### What moved, parent first

| # | Change | File |
|---|---|---|
| 1 | `NG-02`, `NG-03` rows gain an explicit **"Ready when"** clause | `Modular_PRD.md` §2.5 |
| 2 | New `§2.5.1` — the four-step backlog-path procedure, canonical, living | `Modular_PRD.md` |
| 3 | `§6`'s `NG-02`/`S6`/`NG-03` rows trimmed to cite `§2.5.1` instead of restating it | `V1-BUILD-SPEC.md` |
| 4 | `§6.1` rewritten as a pointer to `Modular_PRD.md` §2.5.1, kept rather than deleted so a reader who remembers it here finds where it went | `V1-BUILD-SPEC.md` |

**Nothing about the three items' actual conditions changed** — `NG-02` still needs `OD1`–`OD3` or
a direct Charter edit; `NG-03` still needs a direct Charter edit; `M-POC` readiness is unaffected.
Only where the living copy of that fact resides changed.

### Gaps

**Opened:** none. **Closed:** none — this is a placement correction, not a resolution of any
backlogged item. **Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Backlog path moved to living tier | ✅ §5.14dc | ✅ **§6 rows trimmed, §6.1 rewritten as a pointer** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | ✅ **§2.5 `NG-02`/`NG-03` rows gain "Ready when"; §2.5.1 added, canonical** |

### Scope limits

**Writes no code, no schema, no Charter edit.** Does not change what `NG-02`, `NG-03`, or `M-POC`
readiness actually require — only where that requirement is authoritatively recorded. Does not
move or restructure any other `§6` row, and does not touch `M-POC-REQUIREMENTS.md` or
`FN-POC-ENGAGEMENT-01-13.md`, neither of which restated the moved content.

---

## 5.14dd `D-149` — Lane A Commits Its Own Pending Work While Formally `Blocked`, on Direct Chief Editor Instruction

**Asked, mid-audit:** `G104` recorded a gap Lane A found and annotated but could not commit —
`D-101` permits only the `Active` lane to commit, and Lane A's row read `Blocked` on `LB-S1-02`
(`D-142`). The Chief Editor directed the commit anyway. Does that reopen `D-101`, or is it a
narrower thing?

### What the Chief Editor ruled

**A narrower thing.** `D-101`'s purpose is preventing two lanes from writing to the same surface
at once with no merge commit to catch the collision — that risk does not exist here. Both pending
files (`INTELLIGENCE_LAYER.md`, `V1-DECISION-REGISTER.md`) are Lane A's own surface;
`lane-boundary` already confirms the working tree touches **only** Lane A (checked before this
ruling, re-checked after). **This is not `D-107`'s precedent** — there, Lane A (then `Active`)
committed Lane B's code on the Judge's instruction, a genuine cross-lane act needing a
`Lane-Crossing:` trailer. Here Lane A commits its own docs while `Blocked`, and nothing crosses.

**Scoped narrowly, on purpose.** This authorizes committing the two named pending files, once,
under this instruction. It does **not** make Lane A `Active`, does **not** change `§5`'s state
table — Lane A's row still reads `Blocked` on `LB-S1-02` after this commit lands — and does
**not** stand as a general rule that Lane A may commit its own work whenever it is `Blocked`.
The next time this needs to happen, it needs its own instruction, not a citation to this one.

### Why this was worth a decision rather than a quiet commit

**Because the register would otherwise go stale the moment it landed.** `G104`'s own closing
condition said *"closes when Lane A is next `Active`"* — untrue the instant this commits under a
different mechanism. Recording the actual mechanism here is what keeps that row honest, rather
than repeating the exact defect (`G65`, `G71`, `G94`, and others) this corpus keeps finding: a
closing condition that stopped matching how the thing actually closed.

### Gaps

**Closed:** `G104` — §5.1, this row.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Out-of-turn commit authorized, scoped to two named files | ✅ §5.14dd, `G104` | **— unaffected** | **— unaffected: no lane rule changed, an instance is not a rule** | **— unaffected: no file created or retired** | **— unaffected: `§5`'s lane-state table is untouched, Lane A stays `Blocked`** | **— unaffected** |

### Scope limits

**Authorizes exactly two commits, once.** Does not reopen `D-101`, does not touch `§5`'s lane
state, does not authorize any other pending Lane A work to commit under this citation, and does
not change what makes Lane A `Eligible` — that remains `G102`'s seven-step path, unaffected here.

---

## 5.14de `D-150` — A Prohibition Lifted Is Not Scope Authorized; `G106`'s Row Is Split

**Asked:** `B-008`'s POC commercial model — cart, payment provider, drains, delivery portal — was
raised by Lane B, ruled not-adopted by `D-96`, superseded by `D-99`, and then could not be found
during backlog refinement. The handoff channel worked. Where did the content go?

### What was actually wrong

**`V1-BUILD-SPEC.md` §6 carried one row for two deferred items.** *"POC commercial flow — deferred
scope"* covered **both** the manual P0-EVR lane **and** `B-008`'s built model, under a single
condition: *"Ready when `G7a` charters the manual lane and `B-P0-06`'s ten boundaries carry real
values."*

**Those two gate the manual lane only.** `B-008`'s own option 2 and `D-96` require something
categorically different for the built model — *"a separate POC Charter and Product Requirements"*,
explicitly a Charter-level act. **The failure mode is silent and directional:** when `G7a` and
`B-P0-06` resolve, the row reads ready and the built half rides along on a condition that was never
about it.

**Second landing site, same defect.** `M-POC-REQUIREMENTS.md` §8 named the identical items with
**no return condition at all**. `D-145` noticed the asymmetry and did not close it.

### The distinction this decision records

**A prohibition being *lifted* is not the same act as scope being *authorized*.** `NG-02` and
`NG-03` carry their own `Ready when` (`D-148`) and would lift the prohibition on accounts and
monetization; **neither authorizes anyone to build a cart.** That is the separate POC Charter.

**`D-145` used only the first framing and `D-96` only the second. Both are correct and each alone
is incomplete** — which is precisely how an item ends up looking ready while its real gate is
untouched.

### Why `D-148` did not catch it

**`D-148` applied its own test correctly, to the wrong scope.** It asked *"does this condition need
to be checkable after v1 freezes?"* and answered **no** for `M-POC` readiness, because that is
sequenced within v1 at `T3`. **True of the manual lane; false of the built model**, which needs a
new Charter and is past-v1 by construction. The test was right; the item it was applied to was two
items.

### Applied, parent first

| # | Change | File |
|---|---|---|
| 1 | **§2.5.1 gains step 5** — state both conditions where an item has two. The rule, in the living tier, because it generalises and must outlive v1 | `Modular_PRD.md` |
| 2 | **§6's row split in two** — manual lane keeps `G7a`+`B-P0-06`; the built model cites §2.5's `NG-02`/`NG-03` for the lift **and** the POC Charter for the authorization | `V1-BUILD-SPEC.md` |
| 3 | **§8's exclusion list gains a return-path pointer** to that row — **cited, never restated** | `M-POC-REQUIREMENTS.md` |

**No scope is authorized and no exclusion is lifted.** `B-008`'s model remains not-adopted;
`NG-02` and `NG-03` stand. Only the conditions under which they would return are now stated
completely.

### Gaps

**Closed:** `G106` — §5.1. **Open, deliberately:** `G107` — the `Ready when` discipline still has
**no check**. This decision makes the convention concrete enough to build against; it does not
build it. **Unchanged:** `C-26` open; `C-27`, `C-33`, `C-34`; `AC-12a`, `G88`, `G41`, `G105`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Two-condition rule | ✅ §5.14de | ✅ **§6 row split** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected** | ✅ **§2.5.1 step 5** |
| `M-POC` return path | ✅ §5.14de | **— unaffected: the condition lives in §6, cited from the module** | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected** |

### Scope limits

**Writes no code, no schema, no Charter edit.** Does not authorize the POC build, does not lift
`NG-02` or `NG-03`, does not create a POC Charter, and does not decide whether one should be
sought. Records only what would have to be true for the question to reopen.

---

## 5.14df `D-151` — The Second Out-of-Turn Commit, Recorded Rather Than Cited

**`D-149` authorized exactly two files, once, and said in terms that *"the next time this needs to
happen, it needs its own instruction, not a citation to this one."*** This is that instruction,
given by the Chief Editor on 2026-08-29, and this row is the record it requires.

**Same conditions, same reasoning, larger set.** Lane A remains `Blocked` — Lane B is sole `Active`
on `LB-S1-02` (`D-142`) — and `D-101` permits only the `Active` lane to commit. **All five files are
Lane A's own surface**, confirmed by `lane-boundary` reporting *"lane surfaces touched — A"* before
the commit; **nothing crosses**, so this is not `D-107`'s cross-lane precedent and carries no
`Lane-Crossing:` trailer.

| File | Carries |
|---|---|
| `INTELLIGENCE_LAYER.md` | The `NG-10` note relocated out of *"Scoring Rules (rule-based, v1)"* into its own `Change Log / Handoff / QA` section, and corrected off `G104`'s superseded *"Sprint 0 work"* claim (`G105`) |
| `Modular_PRD.md` | §2.5.1 step 5 — the two-condition rule (`D-150`) |
| `V1-BUILD-SPEC.md` | §6's row split in two (`D-150`) |
| `M-POC-REQUIREMENTS.md` | §8's return-path pointer (`D-150`) |
| `V1-DECISION-REGISTER.md` | `G105`, `G106` (closed), `G107` opened; `D-150`; this row |

**Scoped exactly as `D-149` was.** Authorizes these five files, once. **Does not make Lane A
`Active`**, does not touch `§5`'s lane-state table — Lane A's row still reads `Blocked` after this
lands — and does not stand as a general permission. A third occurrence needs a third instruction.

**Gaps:** none opened, none closed. **Verification:** `bun run check` **17/17** immediately before
staging.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Out-of-turn commit, five named files | ✅ §5.14df | **— unaffected: `D-150`'s own edit is the change, not this authorization** | **— unaffected: an instance is not a rule** | **— unaffected** | **— unaffected: lane state untouched, Lane A stays `Blocked`** | **— unaffected** |

---

## 5.14dg `D-152` — `D-108` Reached the Register and the Phase Record and Not the Files Agents Read

**Raised by Lane B**, in `B-033`'s verification review of 2026-08-29, while examining an entry it
had itself raised and Lane A had answered. **`Applied` was correctly kept, and the residue named.**

### The defect

**`D-108` ruled the lane lock exclusive** — one lane `Active`, every other unfinished lane
`Blocked` on its named run, `Eligible` only once the lock is free. **It landed in the register and
in `V1-PHASE-CLOSURE.md` §5. It did not land in the three files every agent reads first, nor in the
Build Spec.**

| Where | Carried |
|---|---|
| Shared core — `CLAUDE.md`, `AGENTS.md`, `.agents/rules/graphify.md` | *"the other lanes are `Eligible`, not queued behind a gate"* and a state table defining `Eligible` as *"backlog open, work specified, not currently committing"* — **`D-107`'s superseded reading** |
| `V1-BUILD-SPEC.md` §2 | The same obsolete semantics, **plus** *"Lane A is `Active`; Lanes B and C are `Eligible`"* — naming live state in the sentence before *"this document does not restate it"* |

### Why it survived — the half-check

**`D-108`'s own tier table said "Agent files unaffected", and gave a reason that was true.** The
rule files say *only the `Active` lane may commit*; `D-107` had contradicted that and `D-108`
restored it. **That sentence was checked and was right.** The state table three lines below it was
not checked and was wrong.

> **A tier marked unaffected on the strength of one correct sentence, while another sentence in the
> same file still carries the meaning being superseded.** This is `G65`'s arrival-not-correctness
> class relocated: not a gap row gone stale, but a **tier-applicability cell** asserted from a
> partial read. **The `D-54` sweep cannot catch it** — it verifies that a decision arrived in a
> tier, and here the honest answer was *"it should have arrived and did not."*

### Applied, parent first

| # | Change | File |
|---|---|---|
| 1 | **`D-108`'s "Agent files unaffected" annotated**, its tier cells marked ⚠ wrong; the row itself unedited (`D-104`: an answer is append-only) | `V1-DECISION-REGISTER.md` |
| 2 | **§2's obsolete semantics corrected**, and the live-state naming removed — it contradicted its own next sentence | `V1-BUILD-SPEC.md` |
| 3 | **Shared core corrected in all three files in one pass**, byte-identical: `Blocked` is now *"another lane is `Active` — the row names that run"*, `Eligible` is *"the lock is FREE… never while another lane is `Active`"*, plus the two-legal-configurations rule | `CLAUDE.md`, `AGENTS.md`, `.agents/rules/graphify.md` |

**Not changed, deliberately:** `V1-PHASE-CLOSURE.md` §5 and the `lane-state` fixtures — **both were
already correct**, which is why the drift was invisible to the checks. `B-033`'s verification review
says so explicitly, and its own §3 item 4 (extend `lane-state.mjs`) is **already satisfied by
`D-108`** and not re-done here.

### What this does not do

**Records no lane-state change.** Lane B remains `Active` on `LB-S1-02`; Lane A and Lane C remain
`Blocked`. **This corrects the vocabulary agents read, not the lock they read it about.** `B-033`'s
routing half stays **not adopted** (`D-108`), and `C-001`, `C-18`, `C-24`, `C-25` remain open Phase 3
work untouched by this pass.

### Gaps

**Opened:** none. **Closed:** none — `B-033` stays `Applied`; **its raiser verifies, not its
answerer** (`D-102`, `D-138`), and Lane B is `Active` and able to. **Unchanged:** `C-26`, `C-27`,
`C-33`, `C-34`; `G105`, `G107`, `G41`, `G88`, `AC-12a`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `D-108` semantics propagated | ✅ §5.14dg + §5.14bp annotation | ✅ **§2 corrected** | ✅ **all three, byte-identical** | **— unaffected: no file created or retired** | **— unaffected: §5 was already correct** | **— unaffected** |

### Scope limits

**Writes no code, no schema, no Charter edit, and changes no lane's state.** Does not re-open
`D-107`, does not adopt `B-033`'s routing proposal, and does not verify `B-033` — that is Lane B's,
as its raiser.

---

## 5.14dh `D-153` — The Third Out-of-Turn Commit; the `Eligible` Half Is Refused, With Its Reason

**Two instructions were given together on 2026-08-29: commit Lane A's orchestration and governance
work, and mark Lane A `Eligible`. The first is performed. The second is refused, and refusing it is
the point of this row.**

### The commit — performed

`D-151` said *"a third occurrence needs a third instruction."* This is it. Same conditions as
`D-149` and `D-151`: Lane A is `Blocked`, Lane B is sole `Active` on `LB-S1-02` (`D-142`), and
`D-101` permits only the `Active` lane to commit. **All five files are Lane A's own surface** —
`lane-boundary` reports *"lane surfaces touched — A"*, so nothing crosses and no `Lane-Crossing:`
trailer applies. **Scoped to these five files, once.** Carries `D-152`: the three rule files, the
Build Spec, and the register.

### The `Eligible` half — refused

**Marking Lane A `Eligible` while Lane B is `Active` is the exact configuration `D-108` outlawed**,
and which this same pass wrote into the rule files: *"a lane `Eligible` beside an `Active` one is
illegal."* `lane-state` (check 15) enforces it and would fail. **Performing it would break, in one
commit, the rule that commit exists to propagate.**

**The lock has not been released.** `LB-S1-02` has **no turn report** — `B-044` references the run
but is `Kind: finding`, not `turn-report` — and §5.0a's `Report` column reads `in progress`. No
boundary has occurred, so there is nothing for Lane A to record.

**What would actually make Lane A `Eligible`**, in order, per `G102`'s path — **and Lane A performs
none of steps 1–2**:

| # | Step | Who |
|:---:|---|---|
| 1 | `LB-S1-02` completes; **Lane B files its turn report** in `docs/handoff/`, citing the run id | **Lane B** |
| 2 | The lock is released — at which point **every unfinished lane becomes `Eligible`, not Lane A alone** | Follows from 1 |
| 3 | **The Chief Editor names the incoming lane** — *"a judgement, not a derivation"* | **Chief Editor** |
| 4 | §5 updated in ONE edit: outgoing → `Eligible`/`Blocked`/`Done`, incoming → `Active`, both `Selected` cells | Lane A, under the boundary carve-out |

**Steps 1 and 3 are unenforceable by design** (`G102`) — no check produces them, only the lane and
the person do. **`G90` is the specific trap here**: `B-038` once asserted a Chief Editor selection
in its `Evidence` line *before any selection had been made*, and it nearly moved the lock. **A
boundary recorded before the acts that constitute it is fabricated history**, which is why this row
records the refusal rather than performing the edit.

### If a boundary was intended

**Then the missing artifact is Lane B's turn report, not Lane A's state edit.** Lane B is `Active`
and able to file it. Once it exists and the Chief Editor names the incoming lane, step 4 is a
single edit Lane A may make under the boundary carve-out regardless of who holds the lock (`D-108`,
`B-028` resolved).

### Gaps

**Opened:** none. **Closed:** none. **Unchanged:** every open item; **no lane state is altered by
this decision** — Lane A stays `Blocked`, Lane B stays `Active` on `LB-S1-02`, Lane C stays
`Blocked`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| *(see `D-156` §5.14di — the lane model this row's era assumed was superseded)* | — | — | — | — | — | — |
| Third out-of-turn commit | ✅ §5.14dh | **— unaffected: `D-152`'s edit is the change, not this authorization** | **— unaffected: an instance is not a rule** | **— unaffected** | **— unaffected** | **— unaffected** |
| `Eligible` request refused | ✅ §5.14dh | **— unaffected** | **— unaffected** | **— unaffected** | **— unaffected: §5 deliberately untouched, which is the refusal** | **— unaffected** |

---

## 5.14di `D-156` — `Eligible` Is a Nomination, Not a Release State; Lane A Holds `Active` by Default

**Chief Editor ruling, 2026-08-29, correcting `D-108`.** `G110` records how the divergence happened:
`B-033` contains **two renderings of the same clarification**, and `D-108` adopted the wrong one.

### The model, as ruled

| State | Means |
|---|---|
| **`Active`** | The lane currently holding the commit lock. **Exactly one, always** — never zero. **Lane A holds it by default**, because orchestration and governance cannot otherwise proceed |
| **`Eligible`** | **The selection step** — one lane nominated as the next holder, offered the lock but **not yet executing**. **At most one, or none** |
| **`Blocked`** | The lane is not selected, because another lane already holds `Active` **or** `Eligible` |
| **`Done`** | Its Definition of Done is met and the Judge has accepted it |

**The handover, in full:** an `Eligible` lane is approved → **it becomes `Active` and every other lane
becomes `Blocked`** → it runs until complete → completion is approved, and the handover **names which
lane becomes `Eligible`** next. **Naming the successor is part of the approval, not a later step.**

### What this changes, precisely — three inversions

| | Under `D-108` | Under `D-156` |
|---|---|---|
| `Eligible` beside `Active` | **Illegal** — the enforced rule | **Legal, and it is the only way to nominate** |
| Two or more `Eligible` | Legal — the between-turns state | **Illegal** — at most one |
| Zero `Active` | Legal — the gap between turns | **Illegal** — Lane A defaults into it |

**`D-108` is not wholly wrong and is not discarded.** Its core — *one lane commits, and a lane cannot
believe itself permitted to work merely because it is not blocked* — is the invariant this preserves.
What it got wrong is **which state carries the offer.** `D-107` let `Eligible` mean *may begin without
being selected*; `D-108` over-corrected by making `Eligible` a post-release state for every lane at
once, which removed the nomination step entirely and left the successor unnamed.

### `D-155` is superseded within a day, and the mechanism is worth naming

**`D-155` released `LB-S1-02` into three simultaneous `Eligible` rows.** That was correct under
`D-108`, was verified green by `lane-state`, and is **illegal under the model actually intended** —
`Eligible` is singular. **A check passing is not evidence the model is right**; it is evidence the
check and the model agree, and here they agreed on the wrong one.

### The resulting state, which follows from the rule rather than from Lane A choosing it

`LB-S1-02` completed (`B-059`) and **no successor was nominated**. Under this model there is no
no-`Active` state to rest in, so **Lane A takes `Active` by default** — not by self-selection, which
§5 forbids, but because the rule names the default holder. Lanes B and C are `Blocked`.

**This is what unblocks `G108`.** Its three lockfile defects are `package.json` acts that the handoff
channel explicitly does **not** carve out; they were unreachable while Lane A was `Blocked`, and are
now Lane A's to perform.

### Applied

| # | Change | File |
|---|---|---|
| 1 | This ruling; `G110` opened and closed | `V1-DECISION-REGISTER.md` |
| 2 | §5 vocabulary table, the two-configuration rule replaced by the handover sequence, lane rows set to A `Active` / B `Blocked` / C `Blocked`, `D-155`'s boundary note corrected | `V1-PHASE-CLOSURE.md` |
| 3 | Shared core re-corrected — **second change in one day**, and stated as such rather than quietly re-hashed | `CLAUDE.md`, `AGENTS.md`, `.agents/rules/graphify.md` |
| 4 | §2's lane paragraph | `V1-BUILD-SPEC.md` |
| 5 | Enforcement inverted: zero `Active` now fails, `Eligible` beside `Active` no longer fails, **more than one `Eligible` newly fails** | `scripts/checks/lane-state.mjs` |
| 6 | Three fixtures inverted, and they are the proof the change took effect | `scripts/fixtures/suites.mjs` |

### Scope limits

**Writes no application code, no schema, no Charter edit.** Changes the lane *vocabulary and its
enforcement*, not any lane's work. Does not close Phase 1, does not accept `B-033` (its raiser
verifies — `D-138`), and does not touch `G108`'s or `G109`'s substance.

---

## 5.14dj `D-157` — `G108`a Resolved and Proven; the Parent Blocker Lane B Named Is Cleared

**Lane B's `B-033`-companion analysis proposed a five-step order**: Lane A completes `G108`,
records Lane B `Eligible`, the Judge approves, Lane B becomes `Active`, then verifies `B-033`,
`B-044`, `B-058`. **Step 1 is done, empirically, not by re-reading `B-058`'s own claim:**

`bun install` (no `--frozen`) regenerated `bun.lockb` against the committed Next 16 manifest —
completing an already-decided change, not a new dependency choice. **Then the actual CI command was
run, not inferred:** `bun install --frozen-lockfile` → *"Checked 354 installs across 431 packages
(no changes)."* `bun.lockb` is `Modified`, uncommitted.

**`G108`b and `G108`c are left open, and the reason changed.** They were originally "not carved out
while a lane is not `Active`" (`D-153`'s framing). **Lane A is `Active` now** (`D-156`), so that
reason no longer holds — they are held on judgment instead: a version bump is a compatibility
decision this pass should not make responsibly, and `package-lock.json` is the Chief Editor's own
local artifact, not Lane A's to delete unasked.

**`B-058`'s fields corrected to match the landed commit.** It carried `Verified-At-Commit: pending`
after `91bcc83` already existed — `D-104`'s exact class, caught within the same pass rather than
later. `Resolution: Applied` is now earned; `Verified` is deliberately not set, per `D-102`.

### What this does not do

**Does not nominate Lane B `Eligible`.** `G102` names that a judgement, not a derivation, and
`D-156` makes approving a handover the act that moves a lane to `Active` — neither is Lane A's to
perform off its own completion of a blocker. The parent is cleared; the nomination is not implied.

### Gaps

**Partially closed:** `G108` — `G108`a only; `G108`b, `G108`c remain, §5.1. **Unchanged:** `G109`,
`G105`, `G107`, `G41`, `G88`, `AC-12a`.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| `G108`a resolved | ✅ §5.14dj, §5.1 | **— unaffected** | **— unaffected** | **— unaffected: no file created or retired** | **— unaffected: no nomination made** | **— unaffected** |

### Scope limits

**Regenerates a lockfile only.** No application code, no schema, no lane nomination, no
`Verified` disposition written by the answering side.

---

## 5.14dk `D-158` — Judge, Chief Editor, and "the User" Are the Same Entity, for v1

**Chief Editor ruling, 2026-08-30, confirmed live in chat — not adopted from the external
analysis's own self-reported claim that the ruling had already been given.** An external
Aristotelian-Move critique (Lane C consultation output, delivered as refinement feedback per
`D-90`/consultation practice, not a handoff) surfaced a hidden identity ambiguity: three role
names — **Chief Editor** (Charter), **Judge** (`D-93` line 4298), **the user** (`D-93`, same
line: *"Judge — the user"*) — are used across the governing set and are *practised* as
equivalent (Robert Tan appears in both the `Selected` and `Judge` columns of §5, e.g. row 382
above) but were never **decided** as equivalent. Every prior identity risk in this project was
hunted aggressively (`D-58` git authorship, `D-92` package tallies, `D-87` transcript naming,
`G110` `D-108`/`D-156`); this one had not been.

### The ruling

1. **Judge, Chief Editor, and "the user" are the same natural person** (Robert Tan) for the
   duration of v1.
2. **Chief Editor governs** Active-lane selection, at Sprint boundaries (`D-156`).
3. **Judge governs** phase-`Done` acceptance, deferral, and residual-risk acceptance, at Phase
   boundaries (`D-93`).
4. **Both are the same person** — the separation above is **role-contextual, not
   identity-based.** Naming the role in force at a given act (e.g. "the Chief Editor selected
   Lane A" vs "the Judge accepted Phase 1") remains meaningful and should still be used; it is
   not a claim of a second person.
5. **This equivalence is a v1 constraint.** If the project scales past one person holding all
   three roles, the roles separate, and that separation requires a new decision — this entry
   does not pre-authorize it.

### Why this needed a decision rather than staying implicit

An implicit equivalence is unauditable: "the Judge accepted it" and "the Chief Editor selected
it" cannot be checked against each other without a decided identity, and `G90` (recording a
selection that has not happened) is exactly the failure mode an unstated identity invites.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files (shared core) | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Identity equivalence | ✅ §5.14dk | **— unaffected**: does not reference these roles directly | ✅ one sentence, lane-handover section, `CLAUDE.md`/`AGENTS.md`/`.agents/rules/graphify.md` | **— unaffected**: no artifact created | **— unaffected**: §5 already names Robert Tan in both columns by practice; this entry is what makes that practice decided | **— unaffected** |

### Scope limits

**Names an identity, decides no work.** Does not change who selects lanes or accepts phases —
only confirms they are the same person acting in different named roles. Does not retroactively
validate or invalidate any prior Judge/Chief Editor act; those stand on their own record.

---

## 5.14dl `D-159` — The Seventh Boundary; Lane B Nominated `Eligible` Beside Lane A `Active`

**Chief Editor ruling, 2026-08-30: "approve nominate lane b eligible."** Lane A holds `Active`
by default (`D-156`), no successor having been named at the sixth boundary. This decision names
one.

### The act, performed as `D-156` defines it

| # | Step | Result |
|:---:|---|---|
| **1** | Chief Editor nominates the incoming lane | **Robert Tan nominates Lane B `Eligible`** — the selection step, not yet execution |
| **2** | `§5` updated | `V1-PHASE-CLOSURE.md` §5: A stays `Active` (unchanged — nomination does not release the lock), B → `Eligible`, C stays `Blocked` |

### What this is, precisely, under `D-156`

**`Eligible` beside `Active` is legal, and is the only way to nominate** — this is the exact
inversion `D-156` made against the retired `D-108` reading. Lane A does **not** move to `Blocked`
or release the commit lock by this act alone; that happens only when the Chief Editor **approves**
the nomination, which is a separate, later act (`D-156`: "approving it makes that lane `Active`
and every other lane `Blocked`"). Until then, Lane A may continue committing.

### What this is not

**Not a handover.** No lane becomes `Active` here, none becomes `Blocked` for a new reason, and
Phase 1's five conditions (§1) are untouched. **Not Gap 9's verification packet authorized to
run** — the packet drafted in this session's prior turn remains a proposal; Lane B may execute it
only once actually selected `Active`, per that turn's own §6 instruction. This entry nominates;
it does not select.

### Gaps

**Opened:** none. **Closed:** none. **Unchanged:** all open gaps and conditions from the sixth
boundary.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Seventh boundary — Lane B nominated `Eligible` | ✅ §5.14dl | **— unaffected: no scope or DoD change** | **— unaffected: the lane MAP is unchanged** | **— unaffected** | ✅ **§5 row B updated** | **— unaffected** |

### Scope limits

**Names a nomination, authorizes no work.** Does not select Lane B `Active`, does not release
Lane A's lock, does not authorize execution of the Gap 9 verification packet or any other Lane B
task. The next act — approving this nomination — is the Chief Editor's, at a future boundary.

---

## 5.14dm `D-160` — The Gap 9 Review Assignment Named No Provenance, No Responsibility, and No Route

**Chief Editor-directed review, 2026-08-30, confirmed against repository evidence before acting.**
An external analysis (delivered as backlog refinement, following the same consultation pattern
`D-158`'s prior turn used, not a handoff) argued that Lane B's Gap 9 review was blocked by
ambiguous language, not a missing channel: *"Lane B documents"* was read as both *"documents Lane
B authored"* and *"documents Lane B must validate,"* and Lane B applied the first reading.

### Fact-checked before recording

| Claim | Checked against | Result |
|---|---|---|
| Every `B-NNN` entry was raised by Lane B | `Raised:` field, sampled across the corpus | **Confirmed** |
| `LANE-B-WORK-ORDER.md` is Lane A-authored | File header, line 3 | **Confirmed** — *"Written by Lane A"* |
| `docs/handoff/` scopes raising to Lane B/C, responses to Lane A | `docs/handoff/README.md` | **Confirmed** |
| `D-103` deferred, `G102`/`D-138` later rejected, an `A-NNN` reverse channel | §5.14cs, register line 5611 | **Confirmed**, and the two are sequential, not contradictory — deferred first, rejected later on separate grounds |
| Graphify "still reports pending semantic-description... ingestion" | `.graphify/graph.json` node/community counts vs. `G101`/`D-137` | **Not accurate as framed** — 471 undescribed nodes and 4 generic community labels exist, but `D-137` already ruled undescribed nodes **by design** (anti-hallucination policy) and *"no pending batch or community ingestion"* as the correct, kept wording. Raw incompleteness is real; calling it "pending" reopens a question `D-137` settled |

### The correction, applied to `LANE-B-WORK-ORDER.md` §2.3

The verification section named what Lane B verifies (*"every entry you raised"*) without stating
**why** — that the test is independence from the correction, not authorship of the underlying
content — or **where** a non-duplicate defect goes if validation fails. `§2.3` is amended with:
one sentence stating authorship is not the review test, a manifest naming what each artifact type
routes to on pass/fail, and the docs-only routing rule (no nomination, no `Active` lock, no run
ID, no turn report, unless an executable run is separately opened).

### What this is not

**Not a new channel.** `docs/handoff/` is unchanged; Lane B still raises `B-NNN` entries there,
Lane A still answers there. **Not a reverse `A-NNN` channel** — that stays rejected (`G102`).
**Not a lane-state act** — nominating or selecting Lane B is untouched by this decision; `D-159`'s
`Eligible` nomination stands as separate, unrelated state. **Not a durable refinement folder** —
`docs/refinement/` (or similar) remains an open possibility but would be a new artifact class
requiring its own decision and `D-54` propagation; not created here because nothing in this gap
required it.

### Gaps

**Opened and closed:** `G111`. **Unchanged:** `G101` (Graphify semantic-completion ruling stands,
cited not reopened), `G109` (unrelated extraction defect).

### Tier applicability (`D-54`)

| Item | Register | Build spec | Agent files | Inventory | Phase closure | `Modular_PRD` |
|---|---|---|---|---|---|---|
| Review-assignment provenance/responsibility/route | ✅ §5.14dm, `G111` | **— unaffected: no scope or DoD change** | **— unaffected: `LANE-B-WORK-ORDER.md` is not shared core** | **— unaffected: no artifact created** | **— unaffected: no lane-state change** | **— unaffected** |

### Scope limits

**Corrects one document's instruction language and records the correction.** Does not nominate,
select, or authorize any Lane B execution; does not open a new channel; does not reopen `D-137`'s
Graphify ruling — only cites it correctly where the external analysis had misstated it.
