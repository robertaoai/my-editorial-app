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

**Chief Editor decisions still to make.** `Q0`, `Q1`, `Q3`, `Q4`, `Q5`, `Q6`, `Q7`, `Q8`, `Q11`, `Q12`, `QA3`, `QB`, `QD`, `QE`. **The list is the record; no tally is restated** (`G55`, `G56`, `G58`). *Corrected 2026-08-21 (`D-71`): `Q2` (`D-57`), `QC` (`D-59`), `G23` (`D-10`) and `G24` (`D-09`) were already decided and are removed. The remaining twelve were **not** individually re-verified in that pass.* *Corrected again 2026-08-21 (`D-72`): the list was wrong in **both** directions — `Q1`, `Q7` and `Q10` were **Open and Chief-Editor-owned but never listed**, `Q10` being the named blocker for Stage D. Found by `decision-status`, which now runs in CI.* *Updated 2026-08-21 (`D-73`): `Q10` is decided and unblocks Stage D.* See `V1-BUILD-SPEC.md` for which sprint each gates.

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
| `G16` | Open | S1 window — `Q10` + `Q11` as one migration |
| `G17` | Open | S1 window item 2 — `QA3` |
| **`G18`** | **Standing rule** | **Two gap series exist (`G`, `GA`). Raise any new gap in one series only, and record it in this table. This rule was itself lost in the first supersession — an instance of the drift it warns about** |
| `G19` | Open | `D-06`, S1 window item 7 |
| `G20` | Open | `D-11`, S1 window item 8 |
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
| `GA1`, `GA3`, `GA4` | Open | S1 window item 3 — report record shape |
| `GA2` | **Half closed 2026-08-19** | Stated half done — report immutability rule in `Modular_PRD` §6.3. Insert/read-only half remains S1 window item 4 |
| `GA5` | **TX — counsel** | Pairs with `G15` |
| `GA6` | **Closed 2026-08-20** | Disclosure stands — assurance **Absent**, unchanged. `Q2` answered by `D-57`: v1 has no independent assurance, conditional on `C-13`'s BCP surface. **The surface is a compensating control, never Line 3** |
| `GA7` | Open | T3, audit Step 7 — auditor access versus tenant isolation |
| `GA8` | **Closed on execution** | `D-13` — `PSK-10`, T0 Step 1 |
| `GA9` | Open | `D-07`, S1 window item 6 |
| `G40` | **Open** — DOC before S3 | `NFR-08` is unbounded: *"every transition reconstructable from the log alone"* carries no retention qualifier, so the product promises what lawful disposal removes. §5.14, detail section added 2026-08-20 |
| `G41` | **Open** — S3 | Nothing explains **absence**. An empty audit view cannot distinguish *"nothing happened"* from *"records disposed under policy"*. §5.14, §5.14a. Product canary is `AC-12a` |
| `G42` | **Open** — **S1** | Template-to-field-availability binding: a new report template may not be applied to a period that never recorded its fields. §5.14b, `D-41` |
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
| `X8` | **Open** — S0 | Stripe scaffolding versus the Charter-level *"no monetization features"*. `D5`. **Closes on S0** |
| `G61` | **Closed 2026-08-20** | `D-63` §5.14x — **all eight** `X`-rows backfilled above. *(Corrected: the gap statement said **five**; `X1`, `X2`, and `X6` exist too. Five was the `D5`-family **open** subset, not the series.)* |
| `G62` | **Closed 2026-08-21** | **Opened because the CI gates `R3` specifies did not pass** — `typecheck` exited 2 with 10 implicit-`any` errors in `lib/supabase/`, and `lint` exited 1 because `next lint` is deprecated, **interactive**, and no ESLint config exists. §5.14z. **Today: typecheck passes; lint still cannot run.** **b decided by `D-66`** — ESLint CLI, `next/core-web-vitals`, **0 findings**. **a closed by `D-67`** — `satisfies CookieMethodsServer` in two files, 4 lines; `tsc --noEmit` **exits 0**. The ten errors were **two overload-resolution causes**, not ten defects. **Both parts applied by `D-70`** — `eslint.config.mjs` created, `lint` repointed; **27 files, 0 findings**, and CI green on a real run |
| `G63` | **Closed 2026-08-21 — scoped, not removed** | `.gitattributes` set `*.md text eol=lf merge=union` repo-wide. **Union is CORRECT for append-only audit content** — tested on the Chief Editor's rollback lineage (`tag-01` fixed, `tag-02` deployed, `tag-01` merged into `tag-02`), both sides' records survived, and losing an audit record is worse than duplicating one. **It is destructive for current-value content** — tested: a status row merged to `Decided` **and** `Rejected`; a version header appeared twice; and a union-duplicated `CLAUDE.md` sliced identically to a clean one, so `shared-core-hash` **PASSED** on a file holding two full copies of the rules. **The file is the wrong unit** — `Modular_PRD.md` and the register each carry append-only *and* current-value content. **Closed by `D-84`:** union retained, with `docs/v1/**/*.md`, `docs/Modular_PRD.md`, `CLAUDE.md`, `AGENTS.md`, `.agents/**/*.md` scoped to `merge=text`. Verified by `git check-attr`. §5.14ar |
| `G64` | **Specified, not applied — `D-69`** | **`G-02` cannot be computed from its own declared Data Source.** Its Data Source names **one** column *(`judgment_independence_status`, "becomes `line_boundary_crossed`")*, but its definition excludes logged overrides, which needs `not_applicable` and `override_not_four_eyes` told apart — and a boolean maps both to `false`. **Arithmetic on the declared columns, no interpretation required.** *Restated by `D-69`: as opened (§5.14ad) this also claimed an `NFR-03` inference violation — **withdrawn**, "inferred at read" is undefined across the corpus and `NFR-03`'s measured target is "100% non-null", which a boolean meets.* Two shapes specified; the choice is `Q11`'s (`D-68`). Carries `C-16`. **Resolve before the `0002` draft** (`G27`, S0). §5.14ae |
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

**Opened by `D-92`. Phase: Lane C, Phase 3.** The CI job is named `Typecheck · Lint · Test` with **U+00B7 MIDDLE DOT** separators, and GitHub matches a required status check by that exact string — so if the protection rule was typed by hand with any other character, **protection is configured and never gates**, the `D-81` fail-open pattern.

**The rename and the branch-protection rule must change together.** Rename first and the required check never reports, so **every pull request blocks indefinitely** — failing *closed*, which is the safe direction, and still a stoppage.

**The protection rule is a repository-settings act, and no lane owns it.** `D-89` set the current one by hand. **Lane C raises a `blocked-on-decision` handoff entry naming both exact strings and waits for confirmation before pushing the rename.** Specified, not applied (`D-56`).

### `C-17` — `CONFIG_LOG.md` and `build-config.ts` are uncoupled

**Opened by `D-91`. Phase: S0.** Lane A owns every row of `docs/CONFIG_LOG.md`; Lane B owns `lib/config/build-config.ts`. **Nothing pairs them**, so a variable can be added to one and missed in the other with all checks green — and the split ownership `D-91` introduced is exactly what makes the drift silent rather than obvious to one author.

**Fix:** a `C-14` check comparing the two in **both directions** — a `CONFIG_LOG.md` row with no declaration, and a declaration with no row. The bidirectional shape is `decision-status`'s (`G65`, `G71`), and it matters for the same reason: a one-way check licenses the other direction.

**Deliberately not built by `D-91`.** `build-config.ts` does not exist, so the check would pass on every run without ever reading a variable — a `probe_that_cannot_fail`. **It must land in the same pass as `build-config.ts`**, never before.

### `C-16` — condition on the `Q11` decision

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
| `Q10` — tool versus product, tenancy column | **Open** |
| `Q11` — the field **shape** | **Decided 2026-08-22 (`D-97`)** — three-value status, not a boolean. `G64`'s surviving limb answered |
| `Q11` — the field **name** | **Open.** `D-97` decided the shape only; the rename is a separate half |
| `G64` — the field **shape** | **Specified, not applied** (`D-69`) — the choice is `Q11`'s |
| `G16`, `G17`, `G19`, `G20`, `G42`, `GA1`, `GA3`, `GA4`, `GA9` | **Open** |
| `GA2` | **Half closed** — the insert/read-only half is still a window item |
| `C-11`, `C-12` | **Open** — T2, S1 window |

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
| `G16` | `Q10` + `Q11` designed as one migration |
| `G17` | `QA3` — typed columns versus versioned JSON payload |
| `G19` | Notice-as-article: notice type, reference, inherited targets, derived superseded status |
| `G20` | Risk-tier dimension on articles |
| `G42` | **Newly surfaced here.** Template-to-field-availability binding — the binding lives on the report record, which S1 creates |
| `GA1`, `GA3`, `GA4` | Report record shape — identity, as-at, tenant, template and rule-set versions, frozen snapshot |
| `G57` | **Newly surfaced 2026-08-20.** The `X3` eight-row state backfill mapping, specified as data before `0002` is written |
| `GA9` | `on delete restrict` replaces `on delete cascade` |

> `G42` was absent from the prior revision of this section. It is **S1, not S3** — scoping S1 without it repeats `G41`'s mechanism one tier down.

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
