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
| `G4` | **Closed 2026-08-19** | T0 item 1 executed — `CR-15` coverage scoped to AP-01/MVP |
| `G5` | **Closed 2026-08-19** | T1 Step 1 executed — `A7` applied to **both** `CLAUDE.md` and `AGENTS.md` |
| `G6` | Open | `D-04` + `QD`, T1 |
| `G7a` / `G7b` | Open | T3 charter / T4 design, T5 enforcement |
| `G8` | **Closed 2026-08-19** | T0 item 2 executed — exclusivity window scoped P0-EVR-only |
| `G9` | Watch | T5, before S4 is specified |
| `G10` | Open | `QC`, T1 |
| **`G11`** | **Open — no owner** | **Concurrent Claude/Codex edits to `docs/`. No arbitration rule, no forcing function. Partially mitigated by `D-20`, which puts the output contract where both agents read it — but authority on a conflicting edit remains undecided** |
| `G12` | **Closed** | The 42 Board items are now approved — §1 |
| `G14` | **Closed 2026-08-19** | T0 item 3 executed — `NG-02` annotated with its v1 scoping and the tenancy-boundary explanation |
| `G15` | **TX — counsel** | Pairs with `GA5`; do not close one on the other |
| `G16` | Open | S1 window — `Q10` + `Q11` as one migration |
| `G17` | Open | S1 window item 2 — `QA3` |
| **`G18`** | **Standing rule** | **Two gap series exist (`G`, `GA`). Raise any new gap in one series only, and record it in this table. This rule was itself lost in the first supersession — an instance of the drift it warns about** |
| `G19` | Open | `D-06`, S1 window item 7 |
| `G20` | Open | `D-11`, S1 window item 8 |
| `G21` | **Withdrawn** | Human `A` versus agent `R` — different layers, not a conflict — §2 |
| `G22` | Open | `C-10`, T3 |
| `G23` | **Closed 2026-08-19** | `D-10` — `FR-13` bypasses deliberation, not publication |
| `G24` | **Closed 2026-08-19** | `D-09` — mirror boundary stated as own channels only |
| `G25` | **Closed 2026-08-19** | `D-15` — `docs/v1/` named operative in both agent files |
| `G26` | **Closed 2026-08-19** | `D-16` — EMS citation annotated as unretained, `A20`–`A28` named in its place |
| `G27` | Open | `D-17` — draft `0002` location, **S0** |
| `G28` | Open | `D-18` — the 14 manual PoC templates, **T3** |
| `G29` | **Closed 2026-08-19** | `D-19` — artifact DoD attached to every sprint in `V1-BUILD-SPEC.md` §5.1. *(Third disposition-drift instance: closed on execution, left Open in the table until a later sweep caught it.)* |
| `G39` | **Closed 2026-08-19** | Applied to `FN-GATES-01-05` — `FR-01`, `AC-01`, and §3.1 restated to separate one subject topic from many analytical tags; `AC-01a` added |
| `G30` | **Closed 2026-08-19** | `D-20` — output contract in both agent files |
| `G31` | **Closed 2026-08-19** | `D-21` — T1 execution runbook drafted |
| `G32` | **Closed 2026-08-19** | T0 under-delivery repaired in place; `Modular_PRD` v1.7 records it |
| `G33a` | **Closed 2026-08-19** | All four feature groups specified: `FN-GATES-01-05`, `FN-PUBLICATION-09-10-13`, `FN-AUDIT-VISIBILITY-07-08`, `FN-EXCEPTIONS-06-11-12`. **`FR-01`–`FR-13` fully covered.** `G33b`'s filter is now unblocked |
| `G33b` | Open — conditional | `SPECS` only where `Fn_Specs` cannot determine implementation (`D-30`) |
| `G34`–`G36` | **Never assigned** | **Numbering skip, not missing gaps.** The series jumps `G33` → `G37` because new gaps were numbered alongside `D-34`/`D-35`/`D-36` while those were being written. **No gap was lost, closed, or deleted.** Recorded so a reader auditing the sequence does not hunt for three that never existed |
| `G37` | **Withdrawn** | Two concepts sharing a name — see `D-38` |
| `G38` | **Resolved** | Defaults to `CR-04` — see `D-38` |
| `G39` | Open | Restate `FR-01`/`AC-01` to separate **one subject topic** from **many analytical tags**. Documentation only, no schema change — gates `Fn_Specs` |
| `GA1`, `GA3`, `GA4` | Open | S1 window item 3 — report record shape |
| `GA2` | **Half closed 2026-08-19** | Stated half done — report immutability rule in `Modular_PRD` §6.3. Insert/read-only half remains S1 window item 4 |
| `GA5` | **TX — counsel** | Pairs with `G15` |
| `GA6` | **Half closed 2026-08-19** | Disclosure done — assurance recorded as Absent, with `Q2` remedy and `A23` warning. Substantive remedy remains `Q2`, T1 |
| `GA7` | Open | T3, audit Step 7 — auditor access versus tenant isolation |
| `GA8` | **Closed on execution** | `D-13` — `PSK-10`, T0 Step 1 |
| `GA9` | Open | `D-07`, S1 window item 6 |
| `G40`–`G49` | **Recorded elsewhere — not backfilled here** | **This table is incomplete and says so.** These ten are recorded in detail sections (`G42`–`G48`) or inline prose (`G40`, `G41`, `G49`) only. Backfill is `G55`, Open |
| `G50` | **Closed 2026-08-20** | Distribution provenance — `D-51`, §5.4, `docs/graph-fragments/README.md` §2 |
| `G51` | **Closed 2026-08-20** | Curated graph layer rescued to `docs/graph-fragments/` — 61 nodes, 142 edges. §5.4 |
| `G52` | **Closed 2026-08-20** | Distribution-specific commands disclosed — `docs/graph-fragments/README.md` §3 |
| `G53` | **Closed 2026-08-20** | Shared core reconciled across all three agent files, verified byte-identical. §5.4 |
| `G54` | **Open — deferred by decision** | Upstream command surface unverified; route in `docs/graph-fragments/README.md` §6. Needs a Python toolchain |
| `G55` | **Open — new** | Backfill `G40`–`G49` into this table; three of them need a detail section written first |

**The table above is authoritative. Counts are deliberately not restated here.**

This line previously read *"Closed: 6 (`G1`, `G2`, `G12`, `G13`, `GA8`, plus `G21` withdrawn)"* and was badly stale by the time anyone read it — sixteen rows had closed since. **A restated count is the drift mechanism**, not an incidental victim of it: this project has caught the same defect in `FB-04`, `A11`, `A26`–`A28`, the `TX` phase table, the `T1` item count, and now here.

Derive counts from the table when needed:

```
awk '/^## 5.1 Gap disposition/,/^## 5.2/' docs/v1/V1-DECISION-REGISTER.md \
  | grep '^| `G' | grep -cE '\| Open'
```

**Categories that need naming rather than counting:** `G15`/`GA5` are escalated to counsel and pair — do not close one on the other. `G11` is the only **unowned** gap. `GA2` and `GA6` are **half closed** — the stated and disclosure halves are done; the substantive halves remain.

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

### How the two are told apart — and why `G49` follows

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
2. **It would invalidate the rules the project already runs on.** Nine commands the agent files mandate are undocumented upstream: `portable-check`, `migrate-state`, `review-delta`, `summary`, `hook-rebuild`, `merge-graphs`, `build --fragment`, `studio`, `ontology`.
3. **It moves backwards into a layout this project calls legacy.** Upstream writes `graphify-out/`; the rules document `.graphify/` and carry explicit guidance for migrating *out of* `graphify-out`.

> **Stated honestly.** Ground 2 rests on a **README reading, not a verified command list.** Absence from a README is not absence from a CLI. It sizes the gap; it does not close it. **That is exactly why `G54` is Open rather than closed** — the decision is recorded with its weakest evidence named, not hidden.

**What is guaranteed to fail:** uninstalling the npm package before verifying the upstream surface. If upstream lacks `merge-graphs` and `build --fragment`, the curated layer cannot be re-merged by the remaining tool. The fragments survive; **nothing installed can consume them.**

**How to avoid it:** never uninstall before `G54` closes. Coexistence is cheap; recovery is not.

**Note on §6's three-document rule.** `docs/graph-fragments/README.md` is **not** a fourth v1 document. It records tooling provenance, holds no decision, gap disposition, build order, or artifact status, and sits outside the tier stack. The dispositions for `G50`–`G55` are recorded **here**, in this register — which is what §6 requires.

## 5.15 Solve sequence — remaining open gaps

Ordered by dependency. **Fixes are drafted here so execution does not re-derive them.**

### Stage 1 — no dependency, documentation only *(executable now)*

| Gap | Drafted fix | Status |
|---|---|---|
| `G39` | Restate `FR-01`/`AC-01`/§3.1 for one subject topic versus many analytical tags | ✅ **Applied** |
| `G29` | Artifact DoD per sprint | ✅ **Applied**, disposition corrected |

### Stage 2 — `G33a`, the two remaining feature groups *(executable now; gates `G33b`)*

`D-32` requires features that **cannot function without each other**. Two groups remain:

| Group | Features | Why they group |
|---|---|---|
| **Audit & Visibility** | `FR-07`, `FR-08` | `FR-08`'s board cannot function without `FR-07`'s transition record — it displays state, Line, and history. The dependency is **one-way**, which is weaker than the gates and publication groups; recorded rather than hidden |
| **Exceptions & Continuity** | `FR-06`, `FR-11`, `FR-12` | All answer *"what happens when the normal path does not work"* — return with mandatory reason, risk-triggered Line 3 audit, and degraded mode on prolonged absence |

**Note on `FR-06`:** it is T8, a return *within* the pipeline, so it could sit with the gates. It was not included there, so it belongs here. **Flagged rather than assumed** — if it should join the gates group, that group reopens.

**Drafted structure for both:** the merged `D-33` shape — Overview · User Stories · Requirements · Behaviour · Acceptance Criteria · Edge Cases · Dependencies · Risks · `SPECS` candidate filter. All sections marked `[V1]` per `D-36`.

### Stage 3 — Chief Editor decisions *(two, T1)*

| Gap | Question | Drafted resolution |
|---|---|---|
| `G6` | `QD` — where the revenue rule lands so it governs | **`PSK-06`** (editorial-commercial separation) is the closer fit than sprint-plan §11: the rule *is* an editorial-commercial boundary, and `PSK-06` already owns that concern |
| `G10` | `QC` — domain assignment | Confirm public root for POC and `chief.` for the anchor, **or** invert. The current arrangement gives the root to the subordinate evidence lane; defensible if the public service is the commercial front door, but it should be deliberate |

### Stage 4 — the S1 window *(six gaps, one design pass, T2)*

**These cannot be sequenced** — all alter the same append-only table.

| Gap | Decision |
|---|---|
| `G16` | `Q10` + `Q11` designed as one migration |
| `G17` | `QA3` — typed columns versus versioned JSON payload |
| `G19` | Notice-as-article: notice type, notice→original reference, inherited targets, derived superseded status |
| `G20` | Risk-tier dimension on articles |
| `GA1`, `GA3`, `GA4` | Report record shape — identity, as-at, tenant, template and rule-set versions, frozen snapshot |
| `GA9` | `on delete restrict` replaces `on delete cascade` |

### Stage 5 — T3, the POC lane *(parallel; no build dependency)*

| Gap | Drafted fix |
|---|---|
| `G7a` | Charter the manual P0-EVR lane. **Blocked in practice by `G28`** — chartering authorizes; templates make it operable |
| `G28` | The 14 manual templates. **The real gate on first revenue** |
| `G3` | `QB` — state that the P0-EVR charter outranks the board proposal's §8.2 / `B-P0-16` exclusions |
| `G22` | Expression of Concern — new public-facing editorial act, needs Board (`C-10`) |
| `GA7` | Auditor access versus tenant isolation — options are a separate audit role, per-tenant scoped reports plus an aggregate view, or per-engagement grant |

### Stage 6 — later, gated

| Gap | Gate |
|---|---|
| `G27` | S0 — hold draft `0002` outside the apply path |
| `G33b` | After `G33a` completes — filter the `SPECS` candidates. **Ten identified so far**, five per existing spec |
| `G7b` | S2 design, S6 enforcement (`SEC-03`, itself `OD1`–`OD3` gated) |

### The critical path

**`G33a` → `G33b` → S1.** Everything else runs parallel or later. The two remaining `Fn_Specs` are the only work blocking the `SPECS` filter, and the filter is what tells you which of the ten candidates actually need writing before S1.

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
| `X8` | Stripe scaffolding present against `NG-03`, a **Charter-level** exclusion | **Open** — S0 |
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
| `G54` | **Open — deferred by decision** | Upstream command surface unverified. Route recorded in `docs/graph-fragments/README.md` §6. Needs a Python toolchain — owner's call, not an oversight |
| `G55` | **Open — new** | `G40`–`G49` are absent from the §5.1 disposition table. Ten gaps recorded only in detail sections or inline prose; `G40`, `G41`, and `G49` have no detail section at all |

### `G51` — what the exposure actually was

`.graphify/` is gitignored and `git ls-files .graphify` returned **zero**. The curated layer — `D-39`–`D-50`, the `GA5` resolution, the two-tier lifecycle, the fork at publish, communities 28 and 29 — existed **only** in a session-scoped temp directory.

**18% of the graph's nodes and 25% of its links.** Extraction does not regenerate curation, so any rebuild, uninstall, or session expiry would have destroyed it silently — no error, no warning, and a graph that still looked healthy.

`.gitignore` asserted the graph was *"rebuildable from docs/"*. **That claim was false and is now corrected.** It is the load-bearing kind of false: it is the sentence that makes deleting the graph look safe.

### `G53` — the drift was not what it appeared

Three blocks exist: `CLAUDE.md`, `AGENTS.md`, `.agents/rules/graphify.md`. They had drifted **in both directions** — but **not all of the difference was defect.** `AGENTS.md`'s `$graphify` lines are correct **for Codex**, where `/graphify` is unreliable; `.agents` legitimately points at the Gemini skill path. Flattening all three to one text would have destroyed working platform guidance.

**The real defect** was the absence of a **shared core**: `portable-check`, `summary`, and `review-delta` were missing from `.agents` entirely, and its `migrate-state` rule carried an **abbreviated** form of guidance the other two state in full — **the `G32` pattern, in the tooling layer.**

**Resolution:** a shared core, marked as such and verified byte-identical across all three, plus a declared platform tail. Change all three together or none.

### `G55` — recorded, not repaired

The §5.1 table is the all-IDs disposition record. It stops at `G39`. This is the **third recurrence** of the disposition-drift pattern already fixed three times in this register, now at a scale of ten.

**Not repaired here, deliberately** — the backfill was not in the approved scope, and silently adding `G50`–`G54` rows to a table missing `G40`–`G49` would make it *look* complete while it is not. The table now carries an explicit row naming its own incompleteness. **An artifact that is honest about its gap is safe; one that hides it is not.**

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
