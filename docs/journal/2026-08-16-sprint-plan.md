# Build Readiness Journal — Sprint Plan
**Date:** 2026-08-16
**Revision:** 14 — a fourth external review found A27's own fix hadn't reached two places stating the same fact: `Modular_PRD.md`'s own Q11 row, and this plan's four bare `⚠` instances, which directly contradicted §0.4's freshly-written rule. Both fixed (A28a/A28b); see §12.
**Author:** Chief Editor (robertaoai), drafted with Claude
**Status:** Planning only. No application code, no migration applied, no env pulled, no push authorized by this entry.
**Precedence:** Project Charter v1 > V1 Build Readiness Addendum v1.5 > Blueprint v1.4 > Business Case v2.3.
**Repo:** `robertaoai/my-editorial-app`, branch `docs/journal-2026-08-16` off `main` @ `53ace36`. Local git identity `robertanct@yahoo.com.sg` / `robertaoai` — see **A6** before any push.
**Sits below:** Entry 007 (Phase 0 approval) and `docs/governance/provisional-deviation-register.md`.

**Why revision 8 exists.** Three things, all extending revision 7's correction rather than reversing it. **First,** the customer intake template was supplied, and its eight questions appear in order in *both* the Charter body and the Business Case headers — so each governing document has a customer half and a project-side overlay, and **OD1–OD4 are the project team's questions posed back to the customer**, not customer statements (A14). This also corrects D5's characterisation: the plan pack is not *wrong* about governance, it is *silent* on it, because the template it was generated from asks no governance questions (A15). **Second,** revision 7 made the missing Business Charter a "structural gap" on the production checklist. That repeated the same overreach in a new place — the team may recommend a Business Charter, never require one — so it is withdrawn, and the honest statement is narrower: we cannot verify `PRD.md` against a source we do not hold, which blocks nothing (A13, withdrawn). **Third,** the Chief Editor reframed OD2 as a RACI involvement question and OD4 as the autonomy extension; recorded in `docs/governance/raci-involvement-matrix.md` (A16). **Nothing ratified, no headcount derived.**

**Why revision 7 existed.** The Chief Editor corrected a category error running through revisions 1–6: `PRD.md` was being judged by supply-side standards and ranked below `Modular_PRD.md`. That inverts the PMI requirements flow. `PRD.md` is the **customer's** document, derived from the Business Charter; `Modular_PRD.md` is what the **project team** drafts from it, with feedback returning through the sponsor. The customer is the subject-matter expert on their own business, not on SDLC — expecting their document to carry traceable dependency mapping is the same chicken-and-egg trap as demanding OD1–OD3 close before scaffolding. Revision 7 replaces precedence-between-PRDs with the elaboration-versus-change-request distinction, adds `docs/governance/requirements-traceability-map.md` anchoring all 19 customer statements by content hash, and adds **R5** to route the feedback register. **Gap A9 is retired as wrongly framed; A10 grows from two traceability layers to three.**

**Why revision 6 existed.** The document set reached eighteen files across four layers, and two contradictions appeared inside it: a second requirement document with undefined precedence, and two parallel traceability systems that can drift. Revision 6 states the layer model and its one coherence rule, then adds **§6 R — a pre-sprint remediation sequence**. R is not build work: it is contradictions between documents, decisions only the Chief Editor can make, and the verification apparatus without which no sprint can be judged done. **R completes before S0 begins.** Nothing else in the plan changed.

**Why revision 5 existed.** Revisions 1–4 planned against the governing documents and treated the repo's `docs/` plan pack as an artifact that loses on precedence. That was half right. The plan pack is wrong about governance — it has no concept of Lines — but it is the **only accurate description of the substrate**, and the governing documents are not: the Addendum still assumes FastAPI, self-hosted Postgres, and Redis/Celery, none of which exist. Reading the plan pack against the actual code found seven requirements this architecture cannot satisfy as designed, and reversed one of this plan's own recommendations. New §4 carries that analysis; the sprints now reflect it. **No new product scope is introduced — the corrections are structural.**

---

## 1. Fact-check log

Verified against the governing set and the cloned repo. Citations are by section and quoted clause, **not by line number** — the v1.5 / v1.4 / v2.3 amendments shifted line numbers, and the as-supplied text with its original numbering is preserved in git at `45c50dc` and `b494d4f`.

| Claim tested | Verdict | Evidence |
|---|---|---|
| Development may proceed under provisional assumptions | **True, verbatim** | Blueprint §7, Build Decisions Table preamble: "the prototype cannot proceed to production without resolution, but it may proceed as a **provisional assumption** for development." |
| Assumed defaults may proceed for prototype development | **True, verbatim, preserved through amendment** | Addendum closing paragraph: "All Assumed defaults may proceed as provisional assumptions for prototype development." |
| Charter holds OD1, OD2, OD3 Open and blocking | **True, verbatim** | Charter, "Open — v1 (blocking, ordered)": all three `Status = Open`. Category definition: "*Open* = yours to decide, blocks sign-off until answered." |
| An OD2 negative resolution is a pre-launch blocker | **True, verbatim** | Charter OD4 branch ②: "at any point, including before v1 ships… must be resolved before shipping, not after." |
| No agent headcount exists at any level | **True** | Charter, "For:": "Headcount figure withheld pending OD3." Addendum §2.2 names roles, not a number. Business Case: "not specified in any of the three source documents." **None invented, none back-derived.** |
| Entry 007's S7 EMS correction is accurate | **True, verified against the Addendum directly** | Addendum §6.4 rows: the under-48h row already specifies Line 1 continues and Approved jobs still publish; the >48h row is where the true gap sits. Not accepted on the EMS file's own citation. |
| Charter states independence as an unconditional criterion | **False — lower documents added it** | Charter lists one zero-bypass criterion, hedged: "Zero articles bypass a review *sequence* (independence of judgment, OD2, still open)." Corrected in all three downstream documents; register **D1**, closed. |
| Charter permits one agent across several Line 1 gates | **False — the Addendum added it** | Charter: gates are "each executed by a distinct agent or the Chief Editor." Legitimate provisional deviation, not a defect; register **D2**, open. |
| A2 is a Charter-level assumption | **False — Addendum-level** | The Charter's Assumed table has exactly one row, A1. A2–A7 originate in Addendum §2.1. |
| **A2's re-scoping is recorded as a ratification** | **FALSE — see A1. Highest-priority finding this revision.** | Register v1.1 says D4 "Closed by ratification in Addendum §2.4." Addendum §2.4 A2 row has the re-scoping text in the **Resolved?** column; `Ratified? = No`, `Ratified Date = —`, `Approval Artifact = —`, Build Implication still "may proceed as provisional assumption." |
| **A2's re-scoping is reflected across the governing set** | **FALSE — Addendum only. See A2.** | Blueprint §2.2 A2, Blueprint §7 Recommended Stack, and Blueprint D1 all still specify FastAPI; Blueprint §7 still states "database is **not** Supabase-hosted by default," contradicting the new Addendum A2. Business Case §A2 still specifies FastAPI. |
| Repo plan pack aligns with the governing set | **False** | Five divergences, X3/X4/X5/X7/X8 below, consolidated as register **D5**. |
| Committed seed data satisfies "zero independence bypass" | **False** | `supabase/migrations/0001_init.sql:131` seeds `journaled → senior_reviewed` as `senior_journalist / agent`. T5 is the Line 2 human gate in every governing document. |
| Committed seed data satisfies "zero sequence bypass" | **False** | The repo state machine has no `Validated` state; every seeded article skipped Addendum T2/T3 as distinct gates. |
| Reverse-engineering safeguard applies anywhere | **No — one watch item** | WordPress REST and LinkedIn are consumed through published APIs and documented scopes. Watch item at §3, W1. |

**Uncertainty flag (cupcake):** the reverse-engineering safeguard remains an unsourced general engineering caveat, not a requirement of any governing document, exactly as Entry 006 §1 recorded it. Applied as build hygiene, cited as nothing more.

---

## 2. Plan confirmation (3 lines)

1. **What gets built:** the Addendum §3.1 five-gate editorial pipeline (T1–T11) on the ratified Vercel + Supabase stack — article intake, a server-enforced sequence guard, Line-assigned executor identity with four-eyes at the T5/T6 Line boundaries, a board filterable by state/topic/category/Line, an append-only who-when-why audit log, and WordPress publish with LinkedIn ManualReady fallback.
2. **In what order:** S0 reconciliation and config spine → S1 data model and sequence guard → S2 Line assignment and four-eyes → S3 board, filters, audit log → S4 publication and fallback → S5 Line 3, degraded mode, Entry 007 rows → S6 auth and RLS lock-down (pre-production only).
3. **Which OD blocks which sprint:** no OD blocks S0, S1, or S3 for Phase 0; OD1 and OD2 gate S2 and S6 from being called done *for production*; OD3 blocks three items (S1/S2 Line 1 roster shape, S4 agent-failure reassignment, S5 Line 3 executor independence), each of which stops and asks rather than assumes; S6 cannot be called done at all until OD1–OD3 are ratified at Charter level.

---

## 3. Consolidated gap register

Everything the full `docs/` read surfaced, in one table. **A-rows are actions arising from this revision. X-rows are conflicts carried forward from earlier revisions. W-rows are watch items.** Rows that the deviation register now owns are marked in the D column and are not restated here at length.

| # | Gap | Owner | D-row | Status |
|---|---|---|---|---|
| **A1** | **D4 claimed closed by ratification, but Addendum §2.4 records `Ratified? = No` with no date and no approval artifact.** The re-scoping text sits in the `Resolved?` column. Fifth instance of resolution-labelled-as-ratification, and the first inside the instrument built to catch it. | **Chief Editor** | D4 | **Open — blocks D4's closure** |
| **A2** | **A2 re-scoped in the Addendum only.** Blueprint §2.2, Blueprint §7 Recommended Stack, Blueprint D1, and Business Case §A2 all still specify FastAPI; Blueprint §7 still says "database is not Supabase-hosted by default," now contradicting the Addendum. | Chief Editor / amendment | D4 | **Open — blocks D4's closure** |
| **A3** | **Ratified A2 names "Supabase Edge Functions for middleware."** `SECURITY.md` independently places WordPress credentials in Edge Function env vars. The repo's `middleware.ts` is Next.js middleware, a different mechanism. S4's publish path must name which one it uses. | Build (S4) | — | **Open — decision request Q3** |
| **A4** | **`PIPELINE_GATE_COUNT = 6` reads as contradicting the Charter's "four review gates."** Both are correct at different granularity: the Charter counts review *roles* after the Reporter (4); the Addendum counts *transitions* (T1–T6). Resolved by naming both variables rather than picking one. | Build (S0) | — | **Closed this revision** |
| **A5** | **Stale cross-references throughout revisions 1–3:** version numbers, line-number citations, X-numbers superseded by D-rows, and a Q3 the Chief Editor has already answered. | This plan | — | **Closed this revision** |
| **A6** | **Git identity.** `CLAUDE.md` pins `241258103+robertaoai@users.noreply.github.com` and warns Vercel blocks deploys when a commit author's email is unverified on the GitHub account. This repo is set to `robertanct@yahoo.com.sg`. Local commits are unaffected; the first push is not. | Chief Editor | — | **Open — no risk until push** |
| **A7** | **`CLAUDE.md` still directs any agent to the plan pack as "a complete, correct plan"** and still carries the old git identity. It is the first file an agent reads, and it currently points away from the governing set. | Build (S0) | D5 | **Open** |
| **A8** | **G9 (Line-separation verification) has no decided scope.** Addendum §9 defers it to "post-launch monitoring," but it is the detector for the one condition that is an explicit pre-launch stop. S5's DoD is undefined until its scope is set. | Chief Editor | — | **Open — decision request Q4** |
| ~~A9~~ | ~~Two requirement documents; precedence proposed but unratified.~~ **Retired as wrongly framed.** The two sit on opposite sides of the customer/project boundary and neither governs the other. A difference is an elaboration or a change request, never a precedence question | — | — | **Closed — superseded by A11** |
| **A10** | **Three parallel traceability layers.** `requirements-traceability-map.md` maps `CR-xx` ↔ specification; `Modular_PRD.md` §8.1 maps sprint → `FR`/`US`/`AC`/`NFR`; this plan's §7 maps sprint → `AT-xxx` → `SC1–SC6` → OD gate. Internally consistent, mutually unaware, free to drift | This plan | — | **Open — R4** |
| **A11** | **Six items have no customer origin** — four functional requirements (FR-06, FR-11, FR-12, FR-13) and two non-goals (NG-10, NG-11). Each traces to the Addendum or Entry 007 and is justified, but the customer never requested them, will use the product, and is funding it. **Undisclosed funded scope.** *(Corrected from "five" 2026-08-17 — this row itself carried the miscount A20/§12 claimed was fixed; caught by the EMS delta review, not by re-reading this file)* | Project sponsor | — | **Open — FB-04, R5** |
| **A12** | **One customer requirement has no specification.** `CR-14` — "AI tags topics, sources, trend signals at Reporter gate" — is an MVP checkbox in `PRD.md` with no FR in `Modular_PRD.md`. A second, `CR-06` (trend signals), is not computable on the current schema (TC3) | Project sponsor | — | **Open — FB-05, FB-06** |
| ~~A13~~ | ~~The missing Business Charter is structural.~~ **Withdrawn as an overreach.** The project team may *recommend* a Business Charter; it may not *require* one. What we may legitimately state is narrower and is about our own limits: `PRD.md` cannot be verified against a source we do not hold. That is recorded and accepted, and **blocks nothing** | — | — | **Closed — FB-07 reclassified to Recommendation** |
| **A14** | **The customer intake template is the origin of `PRD.md` — and of the Charter and Business Case bodies.** All eight template questions appear in both governing documents, in order. Each therefore has a *customer half* (the eight answers) and a *project-side overlay* (Charter A1/OD1–OD4; Business Case Decision Framework and Compliance Disclosures). **OD1–OD4 are the project team's questions posed back to the customer**, not customer statements | This plan | — | **Recorded — reframes D5** |
| **A15** | **D5's framing corrected.** The plan pack is not "wrong about governance" — it is **silent** on governance because the template it was generated from asks no governance questions. Its substrate content is accurate and its governance silence is expected. The reconciliation work is unchanged; only the characterisation is | This plan | **D5** | **Recorded** |
| **A17** | **Successor-node review is the four-eyes mechanism, and it is already specified.** One agent per node; the next node is the default reviewer. Addendum §3.1 required fields already encode it — T2 confirms T1's logging, and **T6's field is "All prior gate criteria confirmed," so T6 reviews T5**. Two consequences: Line 3 is *additional* assurance rather than the sole cover where R = A, and the residual risk is the **authority gradient** — will a Responsible agent return work to the Accountable human? **Falsifiable: measure the T6→T5 return rate.** Add it as a guardrail alongside `G-05` | This plan / build | — | **Recorded — new metric for S2/S3** |
| **A18** | **OD4 is intra-node; the phase gates are inter-node.** OD4 as a separate system produces a node's output once judgment rules are codified as SOPs, then hands to a successor that reviews it as normal. Dissolves the "OD4 replaces the linear pipeline" tension — different layers, not competing architectures | Chief Editor | — | **Recorded — RACI §6.1** |
| **A19** | **Recurring bias in this plan's own analysis: over-escalating to higher-level acts.** Three instances now — requiring a Business Charter, requiring a Charter amendment for OD4's trigger, and calling Line 3 the sole control at R = A. Addendum §15 states that resolving the Charter's Open decisions by subsequent analysis **is** the Charter's intended process. Default to documenting downstream with traceability, and escalate only where a document's own text requires it | This plan | — | **Recorded — check applied to future revisions** |
| **A16** | **RACI reframing of OD2 and OD4 recorded** in `docs/governance/raci-involvement-matrix.md`. Accountable = Acting Chief Editor (one natural person, business-wide); Responsible = the agent, one role per task. Bears on **D2** (points at its closing condition (a)) and gives OD2 an answer that does not depend on a claim about agent cognition. **Nothing ratified; supplies no headcount** | Chief Editor | D2 | **Open — proposed, RACI-01…06** |
| **A20** | **External EMS gap-analysis audit of `Modular_PRD.md` run 2026-08-17** (`EMS-Modular-PRD-Gap-Analysis.md`, 10-phase). Verified against the repo: every load-bearing factual claim checked out — the Three Lines Model citation, the `judgment_independence_status` field name, `G-05`/`AS-02`/`RK-01`'s Line-3 ownership, `SEC-01`'s L1/L2-only scope, `DEP-05`, `TR-DM-06`. The Three Lines Model citation staleness was independently web-verified (IIA published a replacement Statement of Position 2026-07-08, superseding "2020, updated 2024"). One arithmetic error found and fixed at source: `FB-04` said "five requirements," meant six. See A21–A26 for the routed findings | Chief Editor | — | **Verification complete — see routed rows** |
| **A21** `[S1-IRREVERSIBLE]` | **Irreversibility warning, highest-priority routed finding.** `judgment_independence_status` writes a structural fact (Line label crossed) under a name that asserts a cognitive fact (independence of judgment). `NFR-02` makes `workflow_transitions` append-only before this can be caught — ship it in S1 and every row carries an unsubstantiated, unretractable claim forever. Proposed fix: split into `line_boundary_crossed` (mechanism) + `identity_assurance` (`self_asserted`\|`authenticated`, so Phase-0 rows stay distinguishable from post-S6 rows) + reserve `judgment_independence` null until an instrument exists. **Free before S1, impossible after** | Chief Editor | TR-DM-02 | **Open — Modular_PRD Q11, blocks S1 schema** |
| **A22** `[S1-IRREVERSIBLE]` | **Tool vs. product scope conflict.** The brief that commissioned the EMS audit described "a product that helps build editorial related business"; the Charter and every non-goal (`NG-01`–`NG-03`) specify a single-tenant internal tool. Several non-goals are architecture, not scope — no tenancy column exists anywhere in `TR-DM-01`…`06`. Cheap before S1 (a column), expensive after (migrating an append-only table) | Chief Editor | TR-DM-01/02 | **Open — Modular_PRD Q10, blocks S1 schema if "product"** |
| **A23** | **Line 3's detector has no owner, and its cheapest fix breaks its own principle.** `G-05`, `AS-02`, `RK-01` — everything covering the project's one Charter-named pre-launch blocker (OD4 branch ②) — are all owned by Line 3, which has no executor (OD3, Q2). Q2's "one sentence" unblock offers "state Line 3 is human for v1" as an option; since the Chief Editor is the only human on this project (§0.3), choosing that option collides Line 2 and Line 3 — the exact violation `SEC-01` exists to prevent, except `SEC-01` only names the L1/L2 boundary and is silent on L2/L3. **Correction to Q2, not a new question:** the "human" option must mean an external human, or be answered "absent — v1 has no independent assurance," stated plainly. Never the Chief Editor | Chief Editor | Q2, SEC-01 | **Open — Q2 answer constrained, not merely cheap** |
| **A24** | **The north star and its own falsifier live in different sections and only one is instrumented.** §3.1's north star (gate-sequence compliance) and §3.3's `G-05` (an agreement rate *approaching 100% is the OD2 failure signal*) are logically paired but structurally separate — a system optimises what it measures, and only the maximand is built. Proposed: replace the unpaired north star with a go/no-go read jointly against both. Also: `K-03` "audit completeness" should read "audit completeness (unauthenticated)" until S6 — non-null is not authentic under self-asserted identity | Line 2 | §3.1/§3.3 | **Explicitly deferred — target S3's DoD (audit view is where K-03 is displayed); pointer added there** |
| **A25** | **Highest-leverage buildable item found: blind first pass at T5.** Line 2 records its own disposition *before* seeing the Line 1 draft's recommendation and confidence. Without it, `G-05` cannot distinguish agreement from anchoring — the agreement rate it reads is contaminated by exposure to the prior judgment it's supposed to check independently. Low cost (a UI reveal-order change plus one column), and without it **the project's one pre-launch blocker is undetectable in principle**, not merely unmeasured | Build (S2) | FR-05, G-05 | **Open — recommend building in S2** |
| **A26** | **Lower-priority items from the same audit.** (a) **Fixed, not deferred** — `M1`'s exit criterion needed a live DB while `DEP-05` is deliberately withheld; this was a live contradiction, corrected directly in S1's DoD and Modular_PRD's M1 row, 2026-08-17. (b) `trend_signal` is a required FR-01 field with no producing FR (`CR-14`/`Q9`) — **deferred, target S1** (schema-gaps note; pointer added). (c) Rename `G-03`/`G-04`/one more guardrail to *observed metrics*; attach a review trigger (not an invented threshold) to `G-03` — **deferred, target S5** (pointer added). (d) Add reviewer fatigue to `RK-02` and `G-05`'s causal model — **deferred, target S2** (pointer added, alongside blind first pass). (e) No throughput model exists — at what article volume does T5 become the bottleneck the vision statement forbids — **deferred, no target sprint; this is research, not a build item, and forcing it into a sprint reference would invent a false readiness. Tracked here as open, unsequenced, by design** | Line 2 / Build | Various | **(a) fixed. (b)(c)(d) explicitly deferred with pointers. (e) open, unsequenced — legitimately so** |
| **A27** | **The Q11 fix (A21/this register's own downstream propagation work) introduced an undefined marker and then miscounted its own scope.** Six `Modular_PRD.md` rows were given a doubled `⚠⚠`, which §0.4 defines nowhere — it defines exactly one marker, single `⚠`, tied to an OD. §12's ritual ("has its OD moved?") and countermeasure list had no answer for four of the six rows (`TR-DM-02`, `NFR-03`, `AC-07`, `AC-08`), which have no OD behind them, only `Q11`. Both changelog entries describing the fix said "five": this sentence's own antecedent (below) named all six and miscounted anyway; `Modular_PRD.md`'s v1.2 entry named only five, silently dropping `TR-DM-02`. **Third live instance of the project's own named count-drift defect**, this time inside the fix for a related process gap — caught by a third external review, not by this file's own §11 verification-by-search, which checked that content existed but not that a summary sentence counted its own list correctly | Chief Editor | — | **Closed 2026-08-17 in `Modular_PRD.md` v1.3 — `⚠⚠` replaced with `⚠` (OD-only) and new `[Q11]` (Q11-only), §0.4/§12 updated, both miscounted changelog entries annotated in place** |
| **A28** | **A27 fixed six lines' markers and missed two places describing the same fact.** (a) `Modular_PRD.md` §10's own `Q11` row (the section a decision-maker reads to decide whether to answer Q11 at all) still said "propagates into five places," still omitted `TR-DM-02` from the enumeration despite naming it in the same row's "Unblocks" column, and still said every affected row was "marked ⚠ pending Q11" when two of the four it named (`AC-07`, `AC-08`) had just been correctly changed to `[Q11]`-only, no `⚠`, by A27 itself. Fourth live instance of the count-drift defect, and it sat in the exact document A27 had just amended. (b) The sprint plan's own `A21`, `A22`, `Q10`, `Q11` rows (this file, §6 R1) carried a bare `⚠` that §0.4 nowhere defines and that directly contradicted §0.4's freshly-written "never interchangeable" rule — the same glyph, describing the same `Q10`/`Q11` decisions, meaning something different in each file, cross-referenced constantly between both | Chief Editor | — | **Closed 2026-08-17. (a) `Modular_PRD.md` Q11 row corrected to six places, marker split stated explicitly, dated as A28a. (b) Sprint plan's four `⚠` instances replaced with a newly-defined `[S1-IRREVERSIBLE]`, distinct from `⚠`, defined at R1's intro and cross-referenced from `Modular_PRD.md` §0.4** |
| **TC1–TC9** | **Technical constraints of the ratified stack** — see §4 in full. Seven requirements this architecture cannot satisfy as designed, one reversal of this plan's own revision-4 recommendation (TC8), and one plan-pack specification that must not be built (T9). | Build (S0, S1, S4) | D5 *(substrate half)* | **Open — folded into the sprints below** |
| X1 | OD3 recorded Resolved in Addendum and Blueprint, Open in Business Case and Charter | — | **D3** | **Closed** by amendment |
| X2 | Business Case implies Chief Journalist before Line 2; Addendum puts Line 2 at T5. Addendum governs; build T5 before T6 | — | — | Resolved, no action |
| X3 | Repo state machine omits `Discovered`/`Validated`/`Needs Revision` and collapses Addendum T2/T3 | Build (S1) | D5 | Open — closes on `0002` |
| X4 | Committed seed data executes T5 with an agent | Build (S1) | D5 | Open — closes on `0002` |
| X5 | `workflow_transitions` has no `line_assignment` or `judgment_independence_status`, so four-eyes cannot be evaluated | Build (S1) | D5 | Open — closes on `0002` |
| X6 | Assumed stack vs provisioned repo | — | **D4** | Superseded by A1/A2 |
| X7 | Demo-first + permissive RLS vs executor attributability | Build (S2/S6) | D5 | Open — mitigated S2, closes S6 |
| X8 | Stripe scaffolding vs the Charter-level "No monetization features" | Build (S0) | D5 | Open — closes on S0 |
| X10 | Addendum §15 Sync Gap Register described stale document versions | — | — | **Closed** in Addendum v1.5 |
| X11 | Independence criterion stated unconditional | — | **D1** | **Closed** by amendment |
| X12 | Charter says distinct agent per gate; Addendum permits combining | — | **D2** | Open — provisional, Phase 0 |
| **W1** | LinkedIn "formatted post content" must be built from documented API constraints (plain text, hashtags, 3000 chars — already in Addendum §4.4), never by inspecting LinkedIn's editor UI or proprietary rendering. Forward-engineered alternative if fidelity looks short: build to the published contract and accept its limits. | Build (S4) | — | Watch |

### X→D crosswalk

The deviation register now owns any finding that is a departure from a higher document. The sprint plan retains findings that are ordinary build defects. Nothing is tracked in both places.

| Register row | Absorbs | Nature |
|---|---|---|
| D1 | X11 | Closed — wording corrected in three documents |
| D2 | X12 | Open — legitimate provisional deviation, Phase 0 |
| D3 | X1 | Closed — status corrected in two documents |
| D4 | X6, and now **A1 + A2** | **Not yet closable** — see A1, A2 |
| D5 | X3, X4, X5, X7, X8, A7 | Open — ordinary build work, closes across S0–S6. **Should be split (§4.1):** the plan pack's *substrate* claims are the best available description of reality and do not lose to anything; only its *governance* claims lose to the governing set |
| *(none)* | X2, X10 | Resolved, no ongoing tracking needed |

---

## 4. Technical constraints of the ratified stack

Derived by reading the repo plan pack **as a description of the substrate** and checking it against the code, rather than as a document that loses on precedence. The governing documents specify against a stack that does not exist here; the plan pack describes the one that does.

### 4.1 The reframing

The plan pack is **authoritative-in-fact about the architecture and wrong about governance.** Its governance errors are one pattern, not many: having no concept of Lines, it allocates human involvement by *risk*, which under the Three Lines Model produces exactly the inverted result — `AGENTIC_LAYER.md` puts an agent on the Line 2 review gate (forbidden) and a human confirming a Line 1 investigation gate (should be a HumanOverride). Same root cause, opposite directions.

Register **D5** should therefore be split: the plan pack's *substrate* claims are the best available description of reality, and only its *governance* claims lose to the governing set.

### 4.2 Constraints that break the plan as written

| # | Constraint | Evidence | Consequence |
|---|---|---|---|
| **TC1** | **No privileged write path exists.** `lib/supabase/server.ts` uses `NEXT_PUBLIC_SUPABASE_ANON_KEY`, the same key the browser holds. `SUPABASE_SERVICE_ROLE_KEY` is declared in `.env.example` and used nowhere. RLS is `for all using (true)` on every table. | `lib/supabase/{client,server}.ts`; `0001_init.sql` policies | **A sequence guard in `lib/pipeline/` is unenforceable.** Any browser can write `articles.workflow_state` directly and skip it. `SEQUENCE_BYPASS_TOLERANCE = 0` is not achievable in application code. The invariant must move into Postgres. |
| **TC2** | **No publication entity.** Publication is modelled as `articles.publication_target` (one enum) plus `articles.published_url` (one text). | `0001_init.sql`, `DATA_MODEL.md` | **S4 is not implementable as specified.** The Addendum needs a record per target with seven statuses and partial-failure rules (§7.3). "WordPress Published + LinkedIn ManualReady" — SC2's two branches occurring together — cannot be represented. New tables required. |
| **TC3** | **Scoring inputs absent.** `sources` has no `reliability_tier`; `articles` has no `source_id`; `trend_signals` has no `engagement_metrics`, `evidence_url`, or `reviewer_confidence`; `topics` has no `evolves_from`. Repo `signal_type` values are disjoint from the Addendum's. | `0001_init.sql` vs Addendum §4.1, §5 | Addendum §5 trend and editorial-priority scores are **not computable**. Also **T2's required field "source.reliability_tier set" cannot be satisfied**, and source traceability — a Charter invariant — is partial, since articles have no relationship to sources at all. |
| **TC4** | **No executor identity column.** `workflow_transitions` has `gate_role`, `actor_type`, and `user_id` (owner-scoping; null in every seed row). There is no `actor_id`. | `0001_init.sql` | **SC4's "who" has nowhere to go.** Earlier revisions understated this as missing Line fields; the base identity field is absent too. |
| **TC5** | **No unique index on `articles.url`.** | `0001_init.sql` | **AT-004 cannot pass.** Also makes `on conflict do nothing` a no-op for `articles` and `sources` (no unique constraint on `sources.name` either) — the migration reads as idempotent and is not. |
| **TC6** | **No verification apparatus.** No test runner in `package.json`, no `__tests__/`, no `.github/`, and `next.config.ts` sets `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` to true. | repo root | **Every DoD citing AT-xxx ids is unverifiable** — those ids are prose in a document, not executable tests. There is no automated gate of any kind between a broken change and production. For a project whose premise is enforced compliance gates, the delivery pipeline has none. |
| **TC7** | **No scheduler.** The ratified A2 dropped Redis/Celery; there is no `vercel.json` and no pg_cron. | repo root; Addendum §2.1 A2 | `PUBLISH_RETRY_BACKOFF_MINUTES = 5` has nothing to fire it. Vercel Cron on Hobby runs once daily. Needs a decision — Q5. |
| **TC8** | **No Supabase Edge Functions.** `supabase/` contains `migrations/` only. Edge Functions are Deno, deployed by `supabase functions deploy`, with secrets in `supabase secrets set`. | `ls supabase/`; `CLAUDE.md` "Deploy by git, never by CLI" | **Reverses this plan's own revision-4 recommendation.** Routing publish through an Edge Function would add a second deploy pipeline and a second secret store, against a binding repo rule. See Q3. |
| **TC9** | **`INTELLIGENCE_LAYER.md` specifies auto-advance** — "Gate confidence threshold: 0.6 minimum to auto-advance; below = flag for human review." | `INTELLIGENCE_LAYER.md` | Auto-advance is a **gate bypass by definition**; no gate in the Addendum lacks a named executor. Must not be built. Its below-threshold half accidentally anticipates Entry 007's S1 — right instinct, inverted mechanism. |

### 4.3 What follows

**The demo-first constraint makes database enforcement the only option, not merely the better one.** With no auth in Phase 0 (`CLAUDE.md` rule 6), authority cannot come from a session. With the anon key public and RLS permissive, it cannot come from application code either. Postgres triggers are the only layer that holds regardless of who writes — so TC1's fix is forced, not chosen.

**Consequence for sequencing:** S1 grows to include the trigger work and the schema gaps TC2–TC5, and S0 grows to include verification apparatus (TC6), because without it no later sprint can be judged done. Neither adds product scope.

---

## 5. Config block

Location: `lib/config/build-config.ts`, env-readable where an operator needs to change a value without a redeploy. Every entry cites its source. **No success-scenario number appears as a literal in business logic.**

### 4.1 Success-scenario targets

| Variable | Value | Source |
|---|---|---|
| `SUCCESS_ARTICLES_LOGGED_MIN` | 5 | Charter, Addendum §1, Blueprint §8, Business Case |
| `SUCCESS_ARTICLES_PUBLISHED_MIN` | 2 | Same four |
| `REVIEW_GATE_ROLE_COUNT` | 4 | Charter: "four review gates" — review *roles* after the Reporter (A4) |
| `PIPELINE_GATE_COUNT` | 6 | Addendum §3.1 T1–T6 — executor *transitions*. Not in conflict with the above; different granularity |
| `PIPELINE_TRANSITION_COUNT_TO_PUBLISHED` | 7 | T1–T7, including the system publish step |
| `PIPELINE_ACTIVE_STATES` | ordered list of 8 | Addendum §4.1, minus the two side states |
| `PIPELINE_SIDE_STATES` | `["Needs Revision", "Rejected"]` | Addendum §4.1 |
| `BOARD_FILTER_DIMENSIONS` | `["state","topic","category","line_assignment"]` | Charter names the first three; the Addendum, Blueprint, and Business Case add Line |
| `SEQUENCE_BYPASS_TOLERANCE` | 0 | Unconditional at Charter level |
| `INDEPENDENCE_BYPASS_TOLERANCE` | 0 | Enforced at 0, **reported as provisionally satisfied pending OD2** — the Charter does not list this as unconditional (D1) |

### 4.2 Workflow and operational thresholds

| Variable | Value | Source |
|---|---|---|
| `RETURN_LIMIT_BEFORE_ESCALATION` | 3 | Addendum §3.3 |
| `PUBLISH_RETRY_MAX` | 3 | Addendum §7.2 |
| `PUBLISH_RETRY_BACKOFF_MINUTES` | 5 | Addendum §7.2 |
| `DATA_RETENTION_ARCHIVE_DAYS` | 90 | A6, unratified |
| `SCORING_REVIEW_THRESHOLD_ARTICLES` | 50 | A4, unratified |
| `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS` | 48 | Addendum §6.4; the boundary S7 was corrected to |
| `SLA_DWELL_HOURS` | Discovered 48, Logged 24, Validated 48, Investigated 72, Drafted 72, Reviewed 48, Approved 24 | Blueprint §6 |

### 4.3 Scoring — Addendum §5, formula version pinned

`SCORE_FORMULA_VERSION = "v0"` · `TREND_WEIGHTS` recency .35 / tier .25 / engagement .25 / velocity .15 · `TREND_RECENCY_DECAY_HOURS` 168 · `TREND_ENGAGEMENT_SATURATION` 500 · `TREND_VELOCITY_SATURATION_PER_HOUR` 10 · `SOURCE_TIER_WEIGHTS` 1.0 / 0.7 / 0.4 · `EDITORIAL_PRIORITY_WEIGHTS` .30 / .25 / .20 / .15 / .10 · `REVIEWER_CONFIDENCE_WEIGHTS` 1.0 / 0.6 / 0.3 · `PRIORITY_BANDS` <0.4 / 0.4–0.7 / >0.7 · `DISPLAY_PRIORITY_MIX` .5 / .5 · `CATEGORY_BALANCE_WINDOW_DAYS` 7, `_ARTICLE_THRESHOLD` 3.

### 4.4 OD-derived values — flagged, never literals

| Variable | Phase 0 value | OD | Rule |
|---|---|---|---|
| `LINE2_EXECUTOR_TYPE` | `"human_primary"` | OD1 | Provisional per Entry 007 |
| `LINE2_MAY_EXECUTE_LINE1_GATES` | `true`, via HumanOverride only | OD1 | Every use writes `event_type=HumanOverride`, `judgment_independence_status=override_not_four_eyes` |
| `FOUR_EYES_MODE` | `"line_separation"` | OD2 | Provisional per Entry 007. **No valid replacement exists if OD2 resolves negatively** — see §8 |
| `JUDGMENT_INDEPENDENCE_STATUS_VALUES` | `["satisfied","not_applicable","override_not_four_eyes"]` | OD2 | Addendum §4.1; `contingent_on_OD2` and `blocked` stay retired |
| `AGENT_HEADCOUNT` | **UNSET** | OD3 | No number exists at any level. Not defaulted, not rounded. Any code path dereferencing it must fail loudly and route to the Chief Editor |
| `LINE1_AGENT_ROSTER` | **UNSET** | OD3 | Register **D2**. Phase 0 may run a single Line 1 identity for demo purposes; every transition logs `line_assignment` and `agent_id`, so shared executors are visible in data. Roster *shape* is a Chief Editor answer — Q1 |
| `LINE3_EXECUTOR_IDENTITY` | **UNSET** | OD3 | Must not equal any Line 1 or Line 2 identity (Addendum §13). Q2 |
| `FLAG_AGENT_ROSTER_MULTI` | `false` | OD3 | Cannot be enabled without a headcount |

**Deliberately not set:** no Line 3 sampling percentage. Entry 004's "random 5 to 10 percent weekly" did not carry forward — Entry 007 accepted S9 as *automated 100% pass plus risk-triggered human review*. A percentage would re-introduce rejected scope.

---

## 6. Sprint plan

### The document set, as it now stands

Before the sprints, the consolidated picture. Eighteen files across four layers, each with a defined job:

| Layer | Files | Authority | Can it close an OD? |
|---|---|---|---|
| **Governing** | `source/project-charter-v1.md` *(frozen)*, `source/v1-build-readiness-addendum.md` v1.5, `source/blueprint.md` v1.4, `source/business-case.md` v2.3 | Binding, in that order | Charter only |
| **Governance instruments** | `governance/provisional-deviation-register.md` (D1–D5), Addendum §2.4 Ratification Log | Record departures and ratifications; create no authority | No — but §2.4 is the only place ratification is recorded |
| **Journal** | `journal/2026-08-16-entry006.md`, `entry007-decision-sheet.md`, `2026-08-16-sprint-plan.md` *(this file)* | Dated decisions and plans | No |
| **Requirements** | `Modular_PRD.md` *(governed spec)*, `PRD.md` *(original record, retained)* | Requirements layer | No |
| **Plan pack** | `ARCHITECTURE.md`, `DATA_MODEL.md`, `AGENTIC_LAYER.md`, `INTELLIGENCE_LAYER.md`, `SECURITY.md`, `TASKS.md`, `TEST_PLAN.md` | **Not governing.** Accurate about the substrate (§4.1), wrong about governance | No |

**Coherence rule:** authority flows downward only. A lower layer may restate, detail, or flag — never contradict, close, or ratify. Every known departure sits in the deviation register with a closing trigger.

---

### R — Pre-sprint remediation *(complete before S0 begins)*

The gaps below are not build work. They are contradictions between documents, decisions only the Chief Editor can make, and missing apparatus without which no sprint can be judged done. Fixing them first is cheaper than fixing them later and prevents building on a contradiction.

**Dependency order:**

```
R0 document coherence  ──┐
                         ├──▶ R2 close D4 properly ──┐
R1 decision batch  ──────┘                           ├──▶ S0 begins
                         └──▶ R3 verification ───────┤
                         └──▶ R4 one traceability ───┘
```

#### R0 — Document coherence *(no dependencies; mostly done)*

| Item | Action | Status |
|---|---|---|
| `PRD.md` overwritten in error | Restore byte-identical from `53ace36`; retain as the original requirement record | **Done** |
| `Modular_PRD.md` claimed to supersede it | Header corrected to state the two are complementary; version reset to its own 1.0 lineage | **Done** |
| `docs/README.md` unaware of the second PRD | Both PRDs documented with proposed precedence | **Done** |
| **A7 — `CLAUDE.md`** | Still directs any agent to the plan pack as "a complete, correct plan" and carries a superseded git identity. **It is the first file an agent reads and currently points away from the governing set** | **Open — do this before S0** |

#### R1 — Chief Editor decision batch *(one sitting; unblocks the most per minute)*

Ten decisions, none of which need OD3 or external counsel. Estimated together: under an hour. **`Q10` and `Q11` are the only two items in this entire plan marked irreversible after S1 — answer them first, not last.**

> **`[S1-IRREVERSIBLE]` — defined here, this plan's own marker, distinct from `Modular_PRD.md`'s `⚠`.** Marks a decision or finding that becomes structurally impossible or far more expensive to change after S1 ships (a schema shape, a field name, a migration boundary) — a **scheduling** property, evaluated against this sprint plan's own timeline. It is unrelated to `⚠`, which `Modular_PRD.md` §0.4 defines as **OD-dependent** — a Charter-level governance property. The two glyphs looked interchangeable once (A27's original defect) and are not: `A21`, `A22`, `Q10`, `Q11` all carry `[S1-IRREVERSIBLE]` here and none of the four depend on an Open Decision — `Q10`/`Q11` are Chief Editor naming and scope confirmations, resolvable in R1, the same category `Modular_PRD.md` §0.4 now calls out as carrying `[Q11]`, never `⚠`.

| # | Decision | Unblocks | Effort |
|---|---|---|---|
| **Q11** `[S1-IRREVERSIBLE]` | **Irreversible after S1. Re-costed — see note.** Confirm the `workflow_transitions` field rename: `judgment_independence_status` → `line_boundary_crossed` (mechanism) + `identity_assurance` (`self_asserted`\|`authenticated`) + reserve `judgment_independence` null until an instrument exists. S1's migration (line ~338) is **blocked on this answer** — see that line's note. **Confirming "yes" does not just rename a column — it retires a value five other places assert.** `NFR-03` ("never null, never inferred at read") directly forbids what the rename requires for `judgment_independence`; it needs rewriting to apply to the two new fields, not the retired one. `AC-07`/`AC-08` assert `satisfied`/`override_not_four_eyes`, both values of the old field — they need the same rename applied to their own text. `G-02`'s Data Source column names `judgment_independence_status` literally. `FR-05`'s own Outputs line says "a `judgment_independence_status`… never null." This plan's own `LINE2_MAY_EXECUTE_LINE1_GATES` config row writes `judgment_independence_status=override_not_four_eyes`. None of these five auto-update from a naming decision | S1 schema, TR-DM-02, FR-05, NFR-03, G-02, AC-07/AC-08, `LINE2_MAY_EXECUTE_LINE1_GATES` | **Decision: minutes. Propagation: one full pass across both documents — do not treat this as done once the decision is made** |
| **Q10** `[S1-IRREVERSIBLE]` | **Irreversible after S1.** Tool for one Chief Editor, or product for editorial businesses generally? Read the Charter, answer. If product, a tenancy column belongs in `TR-DM-01`/`TR-DM-02` in the same S1 migration | S1 schema | One Charter read |
| **Q0** | Record A2's ratification in Addendum §2.4 — `Ratified?`, date, artifact. The re-scoping currently sits in `Resolved?` | R2, and the accuracy of every stack statement | Minutes |
| **Q8** | **Restated (see `Modular_PRD.md` Q8 and A9's retirement):** not "which document governs" — neither does. Route `Modular_PRD.md`'s eight feedback items (`FB-01`…`FB-08`) to the customer via the sponsor; `FB-04` (six undisclosed items) is the material one | Which specified scope the customer has actually accepted | Minutes to route, longer to hear back |
| **Q2** | State that Line 3 is **external** for v1 — **or** state plainly that v1 has no independent assurance. **Never the Chief Editor** — he is the only human on the project (§0.3), and naming him collides Line 2 with Line 3, the exact violation `SEC-01` exists to prevent (A23). *(This narrows the option previously offered here; "human" alone is no longer a valid answer.)* | FR-11, S5 | Minutes — but the cheap-looking third option (name the Chief Editor) is not available |
| **Q3** | Publish path: Next.js route handler (recommended, TC8) or Supabase Edge Function | S4 | One config-log line |
| **Q4** | `G-05` / G9 scope: post-launch monitoring, or in-product now as the OD2 detector | S5 DoD, and whether the OD2 trip-wire exists before launch | One decision |
| **Q5** | Retry scheduler: pg_cron, Vercel Cron, or drain-on-demand and drop the 5-minute promise | NFR-05 fidelity | One decision |
| **Q6** | Re-enable `ignoreBuildErrors` / `ignoreDuringBuilds` once CI exists | How strong NFR-04 is | One decision |
| **Q12** | Two-part: (a) re-anchor the Three Lines Model citation across the governing set to the 2026-07-08 Statement of Position — mechanical, queued as its own pass, not done here; (b) **separately**, re-derive `SEC-01`'s actual rule against that document's new blended-role guidance — a judgment call, needs someone to read the source text first | S2's Line-exclusivity build | (a) one disclosed multi-file pass; (b) unscoped until (a)'s source is read |

> **Deliberately excluded from this batch:** **Q1** (Line 1 roster shape) genuinely needs OD3 and cannot be batched. **Q7** (SEC-04/SEC-05 ownership) needs qualified external counsel and blocks production only, not Phase 0.
>
> **Q2's correction is a live example of why this batch exists.** The version of this row present through revision 10 offered "human or external" and called "human" the cheapest option — which, since the Chief Editor is the only human on the project, was recommending the collision A23 was written to prevent. The register caught it (A23); this row is what carries it to where the question actually gets answered.

#### R2 — Close deviation register D4 honestly *(depends on Q0)*

D4 currently reads `Closed 2026-08-16 by ratification in Addendum §2.4`, but three things contradict that:

1. Addendum §2.4's A2 row has `Ratified? = No`, no date, no approval artifact — the re-scoping text is in the `Resolved?` column (**A1**).
2. Blueprint §2.2, Blueprint §7 Recommended Stack, and Blueprint D1 still specify FastAPI; Blueprint §7 still states "database is **not** Supabase-hosted by default," contradicting the amended Addendum. Business Case §A2 still specifies FastAPI (**A2**).
3. The D4 row still carries `Why it may stand` and `What closes it` fields, which belong to an open row.

**Action:** record the ratification properly, amend the two lagging documents, then rewrite the D4 row as closed with its open-row fields removed. Until all three are done, D4 is open regardless of what its Status field says.

> This is the fifth instance of resolution-labelled-as-ratification in this project, and the first inside the instrument built to catch it. Worth fixing carefully rather than quickly.

#### R3 — Verification apparatus *(promoted out of S0)*

There is no test runner, no `__tests__/`, no CI, and `next.config.ts` disables type and lint gates at build (**TC6**). Every sprint DoD in §6 cites AT-ids as though they were executable; they are prose in a document.

**Promoted ahead of S0 because it is not a sprint deliverable — it is the precondition for any sprint having a verdict.** Add a runner (`bun test`, matching `packageManager: bun@1.1.30`), one passing test, and a CI workflow running typecheck, lint, and tests.

> A project whose entire premise is enforced compliance gates currently has no gate of any kind in its own delivery pipeline. That is worth fixing before adding the gates it does specify.

#### R4 — Reconcile the traceability systems *(gap A10, now three layers not two)*

Three independent mappings exist and can drift:

| Where | Maps | Ids used |
|---|---|---|
| `governance/requirements-traceability-map.md` | **Customer want ↔ specification**, with content-hash anchors | `CR-01…CR-19`, `FB-01…FB-08` |
| `Modular_PRD.md` §8.1 | Sprint → FR → US → TR/NFR → AC | `FR-xx`, `US-xx`, `AC-xx`, `NFR-xx` |
| Sprint plan §7 *(this file)* | Sprint → acceptance tests → success criteria → OD gate | `AT-xxx`, `SC1–SC6`, `TC1–TC9` |

**Action:** one chain, each layer owning one link. `CR` anchors the customer boundary; `Modular_PRD.md` §8.1 owns requirement-level traceability; this plan keeps only what is unique to it — OD gating and technical constraints — and references the other two rather than restating them. **Sprint DoDs cite `CR` alongside `FR`**, so every sprint states which customer want it satisfies.

#### R5 — Route the customer feedback register *(new, sponsor-owned)*

The traceability map opened eight feedback items (§7 there). They go to the customer **via the project sponsor**, not directly. Three are material enough to affect scope before S1:

| Item | Why it can't wait |
|---|---|
| **FB-04** | Six items have no customer origin — four FRs (FR-06, FR-11, FR-12, FR-13) and two non-goals (NG-10, NG-11). All justified by the Addendum or Entry 007; none disclosed. This is funded scope the customer did not request. *(Corrected from "five" 2026-08-17)* |
| **FB-05** | `CR-14` — AI tagging at the Reporter gate — is a customer MVP checkbox with **no FR**. In or out of v1 changes S1's shape |
| **FB-02** | "Zero bypasses" was one phrase to the customer; the governing set split it, and the independence half is provisional pending OD2. The customer has not been told half their success criterion is conditional on an open decision |

The remaining five — FB-01 vocabulary, FB-03 fourth filter, FB-06 v1 scoring limitation, FB-07 missing Business Charter, FB-08 granularity convention — are recommendations and disclosures that do not block S0.

#### What stays open by design after R completes

Not gaps to be fixed — constraints to be respected:

| Item | Why it stays open | Blocks |
|---|---|---|
| **OD1, OD2, OD3** | Not closable at scaffolding stage; the evidence that answers them is what the build produces | Production only. Phase 0 proceeds |
| **Q1** — roster shape | Needs OD3 | S2 executor model, S4 reassignment |
| **Q7** — SEC-04/SEC-05 | No legal function exists; needs external counsel | Production only |
| **D2** — one agent across Line 1 gates | Legitimate provisional deviation, Phase 0 scope | Nothing in Phase 0 |
| **Business Charter, exit strategy** | Never supplied; Entry 007 §3 defers both to go-live | Production only |

---

### S0 — Reconciliation and config spine *(no feature code)*

Make the governing set, the repo, and the open decisions visible in one place before any behaviour is written. ITIL 4 "start where you are."

- `lib/config/build-config.ts` — §4 in full, plus a `PROVISIONAL` registry marking every OD-derived value.
- `lib/config/flags.ts` — `FLAG_FOUR_EYES_LINE_SEPARATION`, `FLAG_LINE2_HUMAN_PRIMARY`, `FLAG_AGENT_ROSTER_MULTI`, `FLAG_LINE3_ENABLED`, `FLAG_S1`…`FLAG_S9`.
- `docs/DECISION_LOG.md` and `docs/CONFIG_LOG.md` — each variable with its source citation and the OD it depends on.
- **Amend `CLAUDE.md` (A7):** it currently sends every agent to the plan pack as authoritative and carries the superseded git identity. Point it at `docs/README.md` and the governing set.
- Remove Stripe scaffolding — `app/api/stripe/*`, `lib/stripe/`, Stripe keys in `.env.example` (X8; Charter-level exclusion).
- **Verification apparatus (TC6) — new, and everything downstream depends on it.** There is no test runner, no `__tests__/`, no CI, and `next.config.ts` disables type and lint gates at build. Until this exists, no sprint DoD citing an AT-id is verifiable and no invariant can be defended against regression. Add: a test runner (`bun test`, matching `packageManager: bun@1.1.30`), a first test file, and a GitHub Actions workflow running typecheck, lint, and tests. Re-enabling `ignoreBuildErrors` / `ignoreDuringBuilds` is a separate call — Q6.
- Draft `supabase/migrations/0002_three_lines.sql`. **Write it, do not apply it.**

**DoD:** every §5 number exists as a named variable with a citation; `grep` finds no success-scenario literal in business logic; `0001_init.sql` unmodified; `CLAUDE.md` no longer contradicts the governing set; **`bun test` and CI run and pass on an empty suite**; no migration applied.
**OD gating:** none. This is the sprint that makes the ODs config-visible and the later DoDs checkable.

### S1 — Data model and sequence guard *(T1–T6, T8/T8a, T9)*

- **Migration `0002`** (additive; `0001` never edited):
  - `article_state_v2` enum = the Addendum §4.1 ten states. New column, backfill via the X3 mapping, cut reads/writes over, drop the old column in a later migration.
  - `workflow_transitions`: add `line_assignment`, ~~`judgment_independence_status`~~ **— BLOCKED ON Q11 (R1). Do not write this field name until Q11 is confirmed.** Pending confirmation, write `line_boundary_crossed` + `identity_assurance` instead (A21) — **but see `G64` first: `Q11` was deferred past S1 on 2026-08-21 (`D-68`), which selects this fallback by default, and a boolean `line_boundary_crossed` leaves `G-02` uncomputable from its own declared Data Source — that metric excludes logged overrides, which needs `not_applicable` and `override_not_four_eyes` told apart, and a boolean maps both to `false`. Do not write this shape until `G64` resolves. **(Corrected 2026-08-21, `D-69`: this warning first also claimed an `NFR-03` inference violation — withdrawn as unfounded.)** — the old name asserts a cognitive fact the code can only ever prove structurally, and `NFR-02` makes this table append-only, so the wrong name ships permanently. Also add `event_type`, `agent_id`, `agent_run_id`, `supervising_human_id`, `assisting_agent_id`. Extend `actor_type` with `system` — T7 and T10 are System executors and the current enum cannot represent them. **If Q10 answers "product," add a tenancy column in this same migration** (A22) — after S1 it means migrating an append-only table.
  - `articles`: add `revision_reason`, `revision_target_state`, `return_count`, `emergency_publish`, `source_author`, `source_published_date`, `editorial_angle`, `editorial_adaptation`.
  - Append-only in fact, not just in prose: revoke UPDATE and DELETE on `workflow_transitions`. `SECURITY.md` promises this; `0001` grants `for all using (true)` and breaks it.
  - Correct the seed rows that execute T5 with an agent (X4).
  - **`actor_id` (TC4)** — there is currently no executor identity column at all, only `gate_role`, `actor_type`, and an owner-scoping `user_id` that is null in every seed row. SC4's "who" has nowhere to go without it.
  - **Schema gaps that block specified gates (TC3, TC5):** `sources.reliability_tier` (T2's required field cannot be satisfied without it, and Addendum §5.1's tier weight has no input); `articles.source_id` (there is no article↔source relationship at all, leaving source traceability — a Charter invariant — partial); `topics.evolves_from` and `evolution_notes`; `trend_signals.engagement_metrics`, `evidence_url`, `reviewer_confidence`; a unique index on `articles.url` (**AT-004 cannot pass without it**, and its absence silently makes `0001`'s `on conflict do nothing` a no-op).
  - **`trend_signal` provenance (A26b, deferred here).** FR-01/AC-01 make a trend signal a required field on article intake, but the capability that would produce it (`CR-14`, AI tagging at the Reporter gate) has no FR — nothing defines where this required field's value comes from. Either define its provenance as part of this sprint's schema/API work, or drop it from the required set until `Q9`/`CR-14` is resolved. Do not ship a required field with no defined source.
  - **Publication tables (TC2):** `publication_targets` and `publications`, one row per article per target, carrying the seven-value status enum. The current single `publication_target` enum plus single `published_url` cannot represent "WordPress Published + LinkedIn ManualReady" — which is SC2's two branches occurring together, i.e. the success scenario itself.
- **Sequence enforcement lives in Postgres, not in `lib/pipeline/` (TC1).** This is forced, not preferred: the anon key is public, RLS is permissive, `lib/supabase/server.ts` also uses the anon key, and Phase 0 has no auth — so there is no layer above the database with more authority than a browser. Implement as a `BEFORE UPDATE` trigger on `articles` validating the new state against an allowed-transitions table, plus a trigger requiring a matching `workflow_transitions` row. `lib/pipeline/` remains the ergonomic API and the place errors are shaped for the UI; it is no longer the thing being trusted.
- Transition row written **before** the state changes, enforced by the trigger rather than by convention.

**DoD (A26a — corrected 2026-08-17; the prior wording was a live contradiction, not a deferral):** the trigger is written and unit-tested against a local or branch Postgres instance. `Logged → Drafted` rejected **at the database**, including via a direct anon-key write through the Supabase JS client, **is the target test — but `DEP-05` (Supabase credentials) is deliberately withheld under the current plan, so this specific assertion is unverified against the actual provisioned database until DEP-05 is answered.** Do not claim S1 complete on the strength of the trigger existing; claim it complete on "trigger written and unit-tested; live-DB anon-key behaviour unverified," and re-run the anon-key test the moment DEP-05 is answered — before S1 is called done for real, not just done-as-written. Every state change has exactly one preceding transition row. `SEQUENCE_BYPASS_TOLERANCE` holds at 0 against the corrected seed. AT-004 passes.
**OD gating:** none. Sequence enforcement is a Charter-level invariant, independent of all three ODs.

### S2 — Line assignment and four-eyes *(T5/T6)*

- Actor context on every action: `{actor_id, actor_type, line_assignment, agent_id?, agent_run_id?, supervising_human_id?, assisting_agent_id?}`.
- Four-eyes evaluator implementing Addendum §6.3's pseudocode as written, behind `FOUR_EYES_MODE`.
- **T5 is Line 2 and human-executed.** Agent assistance is `assisting_agent_id` metadata; the human signs. Corrects X4.
- **Blind first pass at T5 (A25).** Line 2 records its own disposition *before* the Line 1 draft's recommendation and confidence are revealed — a UI reveal-order change plus one column. **Without this, `G-05` cannot distinguish agreement from anchoring**, because an agreement rate measured after exposure to the Line 1 recommendation isn't independent of it. This is the one buildable mechanism the project's pre-launch-blocker detector depends on; build it in this sprint, not as a later refinement.
- T6 is Line 1. Chief Editor executing T6 is an override, not a normal path. **T6's required-fields check ("all prior gate criteria confirmed") is what makes T6 the reviewer of T5's judgment (A17, successor-node review) — implement it as a real validation against T5's recorded fields, not a rubber-stamped boolean.**
- **T6→T5 return rate, tracked as a metric (A17).** The residual risk in successor-node review is the authority gradient — will a Responsible agent actually return work to the Accountable human? A rate that never leaves zero means review is nominal at that boundary regardless of what the schema allows. Log every T6→T5 return distinctly so this is queryable from S3's audit view.
- **Reviewer fatigue in the causal model (A26d, deferred here).** A sole reviewer facing every article is the human-side mechanism of the same failure `G-05` watches for from the data side — sustained load converges toward rubber-stamping. Not a build item this sprint, but note it in `RK-02`'s and `G-05`'s design rationale so it isn't lost: a T6→T5 return rate near zero could mean successor-node review is working, or it could mean the human reviewer is fatigued and no longer engaging. The two are indistinguishable from the count alone.
- EmergencyBypass: `event_type=EmergencyBypass` (PascalCase enum) with the reason string carrying the lowercase `emergency_bypass` label — distinct fields, the exact conflation two documents have each had to fix once.
- Hard block: no actor identity holds both a Line 1 and a Line 2 role. **This is the SEC-01 rule Q12(b) flags for re-derivation** — the Three Lines Model citation it's sourced from is stale ("2020, updated 2024"), superseded 2026-07-08 by a Statement of Position with new blended-role guidance. Build to this rule now; do not treat it as final until Q12(b) confirms it still holds against the current text.

**DoD:** `INDEPENDENCE_BYPASS_TOLERANCE` holds at 0. No transition is ever silently marked compliant. Every override is visible as an override. Blind first pass is live at T5 — Line 2's disposition is recorded before the Line 1 draft is shown. T6→T5 return events are distinctly queryable.
**OD gating:** OD1 and OD2 gate **production** done, not Phase 0 done. OD3 gates the roster shape (Q1). **OD2 negative voids this sprint's model entirely.**

### S3 — Board, filters, audit log

- Board grouped by state; filters on all four `BOARD_FILTER_DIMENSIONS`. The Line filter is named in three governing documents and absent from the repo plan.
- Card shows title, topic tags, trend_score, editorial_priority, executor_type, line_assignment.
- Audit log view: who (identity + Line), when, why — append-only, immutable, exportable. Revision reasons visible and undeletable.
- **T6→T5 return rate visible in the audit view (A17).** Surface it as a plain count or rate, not buried in raw transitions — it's the falsifiable signal for whether successor-node review is doing anything at the T5/T6 boundary, and it should be checkable without a database query.
- **North-star/`G-05` paired read, and `K-03` relabeled (A24, deferred here).** Don't surface gate-sequence compliance as a standalone green/red number — pair it with `G-05`'s reading in the same view, since 100% compliance with ~100% agreement is the failure state, not two independent metrics. Label `K-03` "audit completeness (unauthenticated)" until S6, not bare "audit completeness" — non-null isn't authentic under self-asserted identity.

**DoD:** `SUCCESS_ARTICLES_LOGGED_MIN` articles visible and filterable on every dimension; every log row answers who/when/why with no blanks. T6→T5 return rate is visible in the audit view. Gate-sequence compliance and `G-05` are read together, not as separate unpaired numbers.
**OD gating:** none blocks implementation. OD2 determines what the Line filter *means*, not whether it ships.

### S4 — Publication and fallback *(T7, T10, T11)*

- **Publish path — revision 4's recommendation reversed (TC8, Q3).** Revision 4 specified a Supabase Edge Function, citing the ratified A2 and `SECURITY.md`. On this stack that is the worse choice: `supabase/` contains `migrations/` only, Edge Functions are Deno deployed by `supabase functions deploy` with secrets in `supabase secrets set`, and that adds a second deploy pipeline and a second secret store against `CLAUDE.md`'s binding "Deploy by git, never by CLI." **Recommend a Next.js route handler**, which already runs server-side on Vercel with Vercel env. Both the A2 phrasing and `SECURITY.md`'s "Edge Function env vars" are plan-pack-era wording that predates the actual provisioning; flagged as an amendment candidate, not silently overridden.
- **This is also the first genuine need for `SUPABASE_SERVICE_ROLE_KEY`**, which `.env.example` declares and nothing uses. The publish route must write with elevated privilege while the browser cannot — the first place the architecture gets a privileged path at all (TC1).
- Mock mode when credentials are absent → `MockPublished`, which does **not** satisfy the Published rule.
- LinkedIn → `ManualReady` with formatted content per **W1** (documented constraints only). T11: Chief Editor enters `published_url` and confirms.
- Publication state machine on the T2 tables added in S1. Retry to `PUBLISH_RETRY_MAX` at `PUBLISH_RETRY_BACKOFF_MINUTES` — **but nothing currently fires it (TC7, Q5):** the ratified A2 dropped Redis/Celery, there is no `vercel.json`, no pg_cron, and Vercel Cron on Hobby runs once daily. Until Q5 is answered, implement retry as a database-backed job table drained on demand, and record that 5-minute backoff is aspirational rather than scheduled.
- `ARTICLE.current_state = Published` only when ≥1 target is Published with a live URL.

**DoD:** `SUCCESS_ARTICLES_PUBLISHED_MIN` reached by either route. **No env vars pulled or applied under this plan.**
**OD gating:** OD3 blocks the agent-failure reassignment path (Addendum §3.4). Sprint 4 is **done-with-exception**; that criterion defers to Q1.

### S5 — Line 3, degraded mode, Entry 007 rows

- Line 3 triggers (Addendum §13): risk threshold, novel/controversial topic, EmergencyBypass used, 3+ returns, HumanOverride used. Logged as `Line3Audit` / `Line3`. Pre-publication triggers hold T7; post-publication do not block.
- Line 3 shares no data path or reporting line with Line 1 or Line 2 — enforced structurally, not by policy text.
- Entry 007 rows, each behind its own flag — see the S-row traceability in §6.
- **G9 as a live trip-wire (A8, pending Q4).** Addendum §9 defers Line-separation verification to post-launch. It is the detector for the one condition that is an explicit pre-launch stop, so post-launch is too late: by the time it fires, it is a production incident. Proposed scope: compare Line 1 and Line 2 judgments on the same article and surface the agreement rate in-product.
- **Guardrail relabeling and `G-03`'s review trigger (A26c, deferred here).** `G-03`/`G-04` are metrics with no threshold and no invented one — that's deliberate, not a gap, so relabel them *observed metrics* rather than *guardrails* to stop implying a trigger that doesn't exist. Give `G-03` a review trigger instead of a threshold: Line 2 records a written disposition on the HumanOverride rate at every milestone exit. A trigger to look, not a number to alarm on.

**DoD:** every Entry 007 row maps to a named flag or config variable; none hard-coded. S7 reads its threshold from `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS`. `G-03`/`G-04` are labeled observed metrics; `G-03`'s milestone-exit review disposition is a recorded step, not optional.
**OD gating:** OD3 blocks Line 3 executor independence (Q2). **OD2 negative = full stop.**

### S6 — Lock it down *(pre-production only)*

- Supabase Auth; permissive RLS replaced with owner- and role-scoped policies; only the Line 2 identity executes T5 and T11; append-only enforced at the database.

**DoD:** anonymous users cannot execute any gate; every executor is authenticated and Line-attributable.
**OD gating:** **cannot be called done at all** while OD1–OD3 are unratified. Additionally gated on G10 and on the two Entry 007 §3 gaps — the missing Business Charter and exit strategy, both deferred to production go-live and neither blocking Phase 0.

---

## 7. Traceability matrix

Success criteria: **SC1** 5+ logged · **SC2** 2+ published or ManualReady · **SC3** board filterable by state/topic/category/Line · **SC4** every transition logged who/when/why · **SC5** zero sequence bypass · **SC6** zero independence bypass *(provisional, pending OD2)*.

| Sprint | Acceptance tests | Serves | OD gate on "done" | Register |
|---|---|---|---|---|
| S0 | *(none — but **stands up the runner that makes every row below verifiable**, TC6)* | Enables all | None | D5 (partial: X8, A7) |
| S1 | AT-001…006, AT-010…014, AT-012a | SC1, SC5 | None | D5 (X3, X4, X5), TC1–TC5 |
| S2 | AT-016, AT-017, AT-018, AT-043, AT-060…062, AT-070…073 | SC4, SC6 | OD1, OD2 *(production only)*; OD3 roster shape | **D2** |
| S3 | AT-040, AT-041, AT-050…053 | SC1, SC3, SC4 | None | — |
| S4 | AT-015, AT-020…023 | SC2 | OD3 *(reassignment only)* | TC2, TC7, TC8 |
| S5 | AT-044, AT-074 | SC6 assurance | OD3 *(Line 3 identity)*; **OD2 negative = stop** | — |
| S6 | AT-060…062 re-run under auth | SC4, SC6 | **OD1, OD2, OD3 — all three** | D5 (X7) |
| Deferred | AT-030…032 (scoring), AT-075 (tagging) | — | None | **TC3 — deferred because the schema has none of the scoring inputs**, not merely by priority. Earlier revisions deferred these correctly but for the wrong reason |

### Entry 007 S-rows → build handles

| Row | Flag | Field or behaviour | Sprint |
|---|---|---|---|
| S1 | `FLAG_S1_CONFIDENCE_FLOOR` | Low `reviewer_confidence` forces a Line 2 flag at T5 | S5 |
| S2 | `FLAG_S2_PLAN_DEVIATION` | `plan_deviation` on angle drift, visible to Line 2 | S5 |
| S3 | `FLAG_S3_RETRACTION` | `Retracted` state; `regulatory_retraction_order` bypasses T8 when true | S5 |
| S4 | `FLAG_S4_PREPUB_LEGAL` | Pre-publication legal review ahead of emergency bypass | S5 |
| S5 | `FLAG_S5_ACTING_EDITOR` | `chief_editor_acting_status`, `loa_start`, `loa_end`, `board_approval_ref`, auto-revert | S5 |
| S6 | `FLAG_S6_RISK_AT_INTAKE` | `risk_stratification` computed at T1, not T5 | S5 |
| S7 | `FLAG_S7_DEGRADED_MODE` | Degraded mode **>48h only** — Addendum §6.4 already covers under-48h | S5 |
| S8 | `FLAG_S8_ATTESTATION` | `publication_readiness_attestation` required at T5/T6 | S5 |
| S9 | `FLAG_S9_AUTO_PASS` | Automated 100% pass to a knowledge base; human Line 3 stays risk-triggered | S5 |

---

## 8. Decision requests

In the order they bite. This table is the canonical stop-work list **for Phase 0** — a decision request not listed here does not stop Phase 0 work, regardless of how it's flagged in §3's gap register. **It does not follow that an item absent from this table never stops anything.** `Q7` (SEC-04/SEC-05 ownership, §6 R1's exclusion note and §6's "what stays open by design" table) is deliberately not here because it doesn't block Phase 0 — but it does stop production go-live, since no legal function exists to discharge it. Absence from this table means "not a Phase 0 blocker," not "not a blocker."

| # | Question | Blocks | Cost to answer |
|---|---|---|---|
| **Q11** `[S1-IRREVERSIBLE]` | **Irreversible after S1. See R1's row for the full propagation list — `NFR-03` as written directly forbids what this rename requires.** Confirm the `workflow_transitions` rename: `judgment_independence_status` → `line_boundary_crossed` + `identity_assurance` + reserve `judgment_independence` (null until an instrument exists). S1's migration is blocked on this | S1 schema, TR-DM-02, FR-05, NFR-03, G-02, AC-07/AC-08 | Decision: minutes. Propagation: one pass, not included in the decision cost |
| **Q10** `[S1-IRREVERSIBLE]` | **Irreversible after S1.** Internal tool for one Chief Editor, or product for editorial businesses generally? The Charter and every non-goal specify a tool; the brief that commissioned the EMS audit said "product." If product, S1's migration needs a tenancy column | S1 schema | One Charter read |
| **Q0** | **Record A2's ratification where ratifications live.** Addendum §2.4's A2 row needs `Ratified? = Yes`, a `Ratified Date`, and an `Approval Artifact`; the re-scoping text currently sits in `Resolved?`. Then amend Blueprint §2.2 / §7 / D1 and Business Case §A2 off FastAPI, including Blueprint §7's "database is not Supabase-hosted by default." | D4's closure; the honesty of the register | Minutes. Highest value per minute on this list |
| **Q1** | **Line 1 roster shape.** Does each review gate need its own agent (Charter), or may one agent hold several (Addendum, register D2)? Note that "one per gate" implies at least four — that inference is deliberately not drawn here, because it is the headcount question OD3 asks and the Charter withholds | S2 executor model; S4 reassignment | Needs OD3 |
| **Q2** | **Line 3 executor.** It must share no identity or data path with Line 1 or Line 2. State that Line 3 is **external** for v1, or that v1 has no independent assurance. **Not** "human" — the Chief Editor is the only human on the project, and naming him collides Line 2 with Line 3 (A23) | S5 | Needs OD3, or a one-sentence disclosure |
| **Q3** | **Publish path — recommendation reversed since revision 4.** The ratified A2 says "Edge Functions for middleware" and `SECURITY.md` says credentials live in Edge Function env vars, but no Edge Functions exist and using them adds a second deploy pipeline against a binding repo rule (TC8). **Recommend a Next.js route handler** and amending A2's phrasing to match. Confirm or override | S4 | One config-log line, plus an A2 amendment |
| **Q4** | **G9 scope.** Keep Line-separation verification at post-launch monitoring per Addendum §9, or move it in-product now as the OD2 trip-wire? | S5's DoD | One decision |
| **Q5** | **Retry scheduler (TC7).** `PUBLISH_RETRY_BACKOFF_MINUTES = 5` has nothing to fire it. Options: Supabase `pg_cron` + `pg_net`; Vercel Cron at coarser granularity, once daily on Hobby; or drain the retry queue on demand and drop the 5-minute promise. Each changes what the Addendum §7.2 retry rule actually means in practice | S4's retry behaviour | One decision; affects hosting tier |
| **Q6** | **Build gates (TC6).** `next.config.ts` sets `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` to true, so nothing blocks a broken deploy. Re-enable them once CI exists? For a project whose premise is enforced compliance gates, the delivery pipeline currently has none | S0's DoD; every later DoD | One decision |
| **Q12** | **Citation currency vs. rule re-derivation, kept separate.** (a) Re-anchor the Three Lines Model citation across the governing set — currently "2020, updated 2024," superseded 2026-07-08. Mechanical, queued as its own disclosed pass. (b) Re-derive `SEC-01`'s actual rule against the new Statement of Position's blended-role guidance — a judgment call requiring the source text be read first, not done by re-anchoring alone | S2's Line-exclusivity build | (a) one multi-file pass; (b) unscoped until (a) |

**Answered since revision 3:** the stack question. A2 is re-scoped to the provisioned Vercel/Supabase stack — subject to Q0 recording it correctly.

**Q8 is resolved as a question, open as a routing task.** It is not "which document governs" — neither does (A9 retired that framing). It is: route `Modular_PRD.md`'s eight feedback items to the customer via the sponsor. Not listed as a numbered blocker above because nothing in S0–S1 is gated on the reply landing by a specific date — but `FB-04` (six items, corrected below) is undisclosed funded scope shipping in S1, so the routing itself should happen before S1, not merely be logged as intended.

---

## 9. OD gating

| # | Sprint | Item | OD | Effect on "done" |
|---|---|---|---|---|
| 1 | S1 | Sequence guard, return path, audit ordering | — | Not gated. Charter-level invariant |
| 2 | S2 | T5 executor is human-primary | OD1 | Phase 0 done under Entry 007's provisional value; **not production done** |
| 3 | S2 | HumanOverride path, Line 2 → Line 1 permission matrix | OD1 | Same |
| 4 | S2 | Four-eyes evaluator | OD2 | Phase 0 done; **not production done** |
| 5 | S2/S3 | SC6 as an acceptance criterion | OD2 | Provisionally satisfied only. **Never reported unconditional** (D1) |
| 6 | S1/S2 | Line 1 roster shape | **OD3** | Phase 0 may run one identity for demo; S2 cannot fix the executor model without Q1 |
| 7 | S3 | Line filter | OD1, OD2 | Implementation not gated; its governance meaning is |
| 8 | S4 | Agent-failure reassignment | **OD3** | **Blocked.** S4 is done-with-exception |
| 9 | S5 | Line 3 executor identity | **OD3** | **Blocked.** Q2 |
| 10 | S5 | `FLAG_AGENT_ROSTER_MULTI` | **OD3** | Cannot be enabled |
| 11 | S5 | G9 verification | OD2 | The trip-wire. If it fires, row 12 applies |
| 12 | S6 | Entire sprint | OD1, OD2, OD3 | **Cannot be called done at all.** Plus G10 and the Entry 007 §3 gaps |
| 13 | All | Production go-live | OD1, OD2, OD3 | Gated. Phase 0 is not |

### The OD2 stop condition

If OD2 resolves **negatively** — Line separation fails to hold, e.g. agents in different Lines produce identical judgments from shared training data — Charter OD4 branch ② applies: *"at any point, including before v1 ships… must be resolved before shipping, not after."*

- **Production halts.** A stop, not a backlog item.
- **Downstream planning halts** for the four-eyes evaluator (S2), SC6, `judgment_independence_status` as an independence claim, the Line filter's governance meaning (S3), and Line 3's independence model (S5). None has a fallback: the Addendum retired the `contingent_on_OD2` and `blocked` field values on the strength of OD2 resolving affirmatively.
- **OD4 reopens.**
- **What does not halt:** the sequence guard, data model, audit log, board, and publication — gate-sequence and traceability invariants, independent of the independence question.

As of Entry 007, OD2 has not resolved negatively. Planning proceeds. The trip-wire is row 11.

**A sharpening worth carrying forward.** The Charter's OD2 asks whether *a distinct agent* provides distinct judgment. The Addendum answered whether *Line separation* does, then retired agent-instance distinctness as an enforcement mechanism (§6.3). That may be the better answer, but it substitutes the question one level below where the question was asked. Flagged for the Chief Editor; not resolved here.

---

## 10. Config-driven versus fixed

**Fixed — not config, not a flag, not adjustable without a Charter-level act:** gate-sequence enforcement (no article skips a state); source traceability, `source_url` immutable once logged; every transition logged with who, when, why; audit log append-only and revision reasons undeletable; the same actor never holds both a Line 1 and a Line 2 role; at least one topic per article; publishing readiness requires all gates, tags, and ≥1 target; `MockPublished` never satisfies Published; OD4 stays rejected for v1; fundraising stays out of the editorial workflow.

**Config-driven — adjustable without a redeploy:** every number in §4; OD1-derived executor and override settings; OD2-derived `FOUR_EYES_MODE` and status values; OD3-derived roster, Line 3 identity, and headcount (all UNSET); A1–A7 defaults; seed data; every Entry 007 S-row flag.

**The distinction that matters.** Config-driven does not mean uncommitted, and provisional does not mean unratified forever. Every value in the second list carries a `docs/CONFIG_LOG.md` entry naming its source and its OD, so ratifying a decision is a config edit plus a Ratification Log line — never a code change. That is the whole reason nothing tied to OD1, OD2, or OD3 is written as a literal.

---

## 11. Standing constraints

- **Open decisions stay open.** OD1–OD3 are not closable at scaffolding stage; the evidence that answers them is what the build produces. Do not close them in a lower document, and do not read "resolved" as "ratified" — that pattern has now been caught five times, most recently in **A1**.
- **No invented numbers.** `AGENT_HEADCOUNT` and `LINE1_AGENT_ROSTER` stay UNSET. Do not default, round, or back-derive from the Charter's "four review gates."
- **One hard stop.** OD2 negative → pre-launch blocker.
- **Forward engineering only.** W1 is the single watch item; nothing in this plan requires inspecting a third party's proprietary UI, code, or workflow.
- **No auto-advance (TC9).** `INTELLIGENCE_LAYER.md` specifies "0.6 minimum to auto-advance." Every gate in the Addendum has a named executor; auto-advancing past one is a gate bypass by definition and must not be built, whatever the confidence score. The below-threshold half of that rule is worth keeping — it anticipates Entry 007's S1.
- **Enforce invariants where they cannot be bypassed.** With a public anon key, permissive RLS, and no auth in Phase 0, application-layer checks are advisory. Charter-level invariants belong in Postgres.
- **A finding in §3's gap register is not routed until it appears in R, §8, or a sprint spec.** The register records that something was noticed; only R, §8, and the sprint specs are executed against. A warning that lives only in the register is settled by whoever executes the sprint as written — in one sprint, not the five restatements it took to catch prior instances of "resolved" read as "ratified." This is that same failure mode in a different shape: not a decision restated without its qualifier, but a decision *diagnosed* without the diagnosis reaching the instruction it diagnoses. Caught by the EMS delta review against revision 10, where A21–A26 and Q10–Q12 sat in §3 and §12 while S1's migration line still read the field name A21 warned against. **Before closing any register row as "routed," confirm it by search: does the row's subject appear, verbatim or by clear reference, in R, §8, or a sprint spec's own text — not just in a changelog entry describing that it does.**
  - **This rule was itself applied inconsistently on first write — corrected 2026-08-17.** A21, A23, and A25 were propagated; A24 and A26 were fixed at the source of the audit that raised them but never checked against this same rule, so they sat unrouted while the rule that would have caught it existed one section below them. Caught by a second external review, not by re-applying the rule to my own output.
  - **Three states, not two.** A finding is **routed** (appears in R, §8, or a sprint spec's own text), **explicitly deferred** (a one-line pointer exists at its target location — sprint, decision request, or this register — naming why it waits and what it waits for), or **unrouted** (neither). Only the third is a defect. Forcing every finding into a full sprint-spec rewrite to count as "routed" would recreate the failure it exists to catch, in the opposite direction — a design decision made in a hurry to satisfy a process rule. A24 and A26(b)–(e) are marked explicitly deferred below, each with its target; A26(a) was a live contradiction, not a deferrable finding, and is fixed at S1/M1 directly.

---

## 12. Changelog

- **2026-08-17, revision 14 (this revision):** A fourth external review found A27's fix hadn't reached two places describing the same fact it corrected elsewhere — not new instances of the defect, but the same instance left standing in text A27 didn't check. **(a)** `Modular_PRD.md`'s own §10 `Q11` row — the section a decision-maker actually reads before deciding whether to answer Q11 — still said "propagates into five places," still omitted `TR-DM-02` from its enumeration despite naming it in the same row's "Unblocks" column, and still described the affected rows as "marked ⚠ pending Q11" when two of the four it named (`AC-07`, `AC-08`) had just been correctly changed by A27 to `[Q11]`-only. Fourth live instance of the count-drift defect, sitting six sections below the fix that was supposed to prevent it. **(b)** This plan's own `A21`, `A22`, `Q10`, `Q11` rows carried a bare `⚠`, defined nowhere in this file, that directly contradicted `Modular_PRD.md` §0.4's freshly-written "never interchangeable" rule — the same glyph, describing the same `Q10`/`Q11` decisions, meaning something different in each governing file. **Both fixed, not just documented, following A27's own resolution direction rather than a lighter one:** `Modular_PRD.md`'s Q11 row corrected to name all six locations and state the marker split explicitly (v1.4). This plan's four bare `⚠` instances replaced with a new, distinct marker, `[S1-IRREVERSIBLE]` — a scheduling property, unrelated to OD-dependence — defined at R1's intro and cross-referenced from `Modular_PRD.md` §0.4, rather than adding a disclaimer to a glyph two files were already sharing with different meanings; that reuse is what produced A27 in the first place, and a note wouldn't have removed the collision, only excused it. Added register row **A28** (a)/(b), closed same-turn. Verified every number in this entry against the actual files before writing it, including the new marker's six occurrences and both cross-references. No open decision closed, no Charter text touched, no number invented, no application code written.
- **2026-08-17, revision 13:** A third external review found revision 12's own Q11 fix had left a defect of the exact class it was correcting. Six `Modular_PRD.md` rows carried a doubled `⚠⚠`, which §0.4 never defines — it defines exactly one marker, single `⚠`, tied to an OD. §12's ritual ("has its OD moved?") and countermeasure list had no answer for four of the six rows (`TR-DM-02`, `NFR-03`, `AC-07`, `AC-08`), which depend on `Q11` alone, no OD. Both changelog entries describing the fix said "five downstream locations": revision 12's own sentence, directly above, named all six in its parenthetical and miscounted anyway; `Modular_PRD.md`'s v1.2 entry named only five, silently dropping `TR-DM-02`. **Third live instance of this project's own named count-drift defect, inside the fix for a related instance of it** — caught by review, not by re-reading this file, and not caught by revision 12's own closing claim to have "verified every fix by search," because that search checked content existed, not that a summary sentence counted its own list correctly. **Resolved, not just documented:** before replacing the marker, checked whether the doubling meant anything — confirmed via `Modular_PRD.md`'s pre-existing "Three FRs are provisional… FR-05 (OD2)" note that `G-02` and FR-05's Outputs line do carry a genuine second proviso (OD2-provisional independent of Q11), while `TR-DM-02`, `NFR-03`, `AC-07`, `AC-08` have no OD relationship anywhere in their own text. `Modular_PRD.md` bumped to v1.3: `⚠⚠` replaced everywhere with `⚠` (OD-only, unchanged meaning) and new `[Q11]` (Q11-only, newly defined in §0.4); `G-02` and FR-05's Outputs line carry both, the other four carry `[Q11]` alone; §12's ritual gained a `[Q11]`-specific line; §12's countermeasure list now names `TR-DM-02`/`NFR-03` explicitly instead of relying on a catch-all that didn't cover them. Both miscounted changelog entries — this file's revision 12 and `Modular_PRD.md`'s v1.2 — annotated in place, not rewritten, consistent with how every prior count-drift correction in this project has been handled. Added register row **A27**. No open decision closed, no Charter text touched, no number invented, no application code written.
- **2026-08-17, revision 12:** A second external review found revision 11's own routing rule had been applied inconsistently — the exact pattern it was written to catch, now caught in the instrument meant to catch it. **A24 and A26 were unrouted under the rule's own terms**: neither appeared outside §3, confirmed by search. Refined §11's rule from a binary (routed / not) to three states — routed, **explicitly deferred** (a one-line pointer at the target location, not a full mechanism design), or unrouted, since forcing every finding into a complete sprint-spec rewrite to count as "routed" would recreate the same failure in the opposite direction. A26(a) was not a deferrable finding — it was a **live contradiction**: S1's own DoD and `Modular_PRD.md`'s M1 milestone both required a live database rejection test while `DEP-05` is deliberately withheld. Fixed directly in both files: DoD is now "trigger written and unit-tested; live anon-key behaviour unverified until DEP-05 is answered," not a claim the plan can't support. A24 (north-star/`G-05` pairing, `K-03` relabeling) and A26(b)/(c)/(d) (trend_signal provenance, guardrail relabeling, reviewer fatigue) given real one-line pointers in S3, S1, S5, and S2 respectively. A26(e) (throughput model) left explicitly unsequenced — legitimately, since it's research with no natural sprint target, and forcing a fake one would be dishonest in the other direction. **`Q11`'s cost was wrong, not just its propagation list:** both rows in R1 and §8 said "minutes — a naming confirmation, not a design task," but `NFR-03` ("never null, never inferred") directly forbids the null value the rename requires for `judgment_independence`, and `AC-07`/`AC-08`/`G-02`/`FR-05`'s own Outputs line all still assert the retired field name. Re-costed to "minutes to decide, one full pass to propagate" in both sprint-plan rows and in `Modular_PRD.md`'s own Q11 row; six downstream PRD locations (`NFR-03`, `AC-07`, `AC-08`, `G-02`, `TR-DM-02`, `FR-05`'s Outputs line) marked pending Q11 rather than left silently unqualified. *(This sentence originally said "five" while naming all six above — see A27. The marker applied was also an undefined `⚠⚠`, corrected to `⚠`/`[Q11]` in `Modular_PRD.md` v1.3.)* **`Q12`'s block reached §8 and R1 but not S2** — S2's own "Hard block: no actor identity holds both a Line 1 and a Line 2 role" line is the exact `SEC-01` rule Q12(b) flags for re-derivation, and it carried no note; one line added. **§8's stop-work framing implicitly claimed universal scope** ("a decision request not listed here does not stop work") when it only ever meant Phase 0 — `Q7` (SEC-04/SEC-05) is deliberately absent from §8 because it doesn't block Phase 0, but it does stop production go-live, and the old wording didn't say so. Scoped the claim to Phase 0 explicitly and named Q7 as the exception that proves it. Verified every fix by search before writing this entry, per §11's own rule. No open decision closed, no Charter text touched, no number invented, no application code written.
- **2026-08-17, revision 11:** An external EMS delta review of revision 10 found that verification and routing had both happened correctly — A20's claim-by-claim check, A23's improvement on the audit's Q2 flag, Q12's separation of citation currency from rule re-derivation, A17's successor-node-review answer to independence, all confirmed accurate — but **propagation had not**: every finding reached a gap-register row or a decision-request table, and none reached an instrument that actually executes. Verified against the file before acting, same as every prior turn: **all four of the review's claims checked out exactly.** S1's migration line still wrote `judgment_independence_status` bare, with no block note, four sections after A21 called that field name a permanent, unretractable claim once `NFR-02` ships. R1 and §8 both still offered "human or external" for Q2 and **R1 actively recommended "human" as the cheapest option** — which, since the Chief Editor is the only human on the project, was recommending the exact collision A23 exists to prevent. And `A11`/`FB-04` **still read "five specifications," listing six** — the same file whose revision-10 changelog entry claimed the miscount was "corrected at source." Three live, self-contradicting errors, caught by an external reviewer rather than by re-reading this file. **Fixed all of it:** `Q10` and `Q11` added to R1 as the batch's first two rows, marked irreversible after S1; S1's migration line now blocks on Q11 by name and states the fallback field names to write instead; §8 (the canonical stop-work list) gained Q10, Q11, and Q12, its stale "Five" header replaced since it under-counted even before this revision; Q2's phrasing corrected in both R1 and §8 to exclude "the Chief Editor" as a valid reading of "human"; `A11` and `FB-04` corrected to six items with a note that this is the second correction of the same number; A25 (blind first pass at T5) and A17's T6→T5 return-rate metric written directly into S2 and S3's own specs and DoDs, not just referenced. **Added a standing constraint (§11):** a gap-register finding is not routed until it appears in R, §8, or a sprint spec by search — not by a changelog entry asserting that it does. Applied that constraint to this revision before writing this entry: re-grepped all four fixes to confirm the old text is actually gone, not just believed gone. No open decision closed, no Charter text touched, no number invented, no application code written.
- **2026-08-17, revision 10:** An external EMS 10-phase gap-analysis audit of `Modular_PRD.md` was supplied. Verified every load-bearing factual claim against the actual repo before acting on any of it — same discipline this project applies everywhere else, extended to a third-party audit: citation wording, field names, ownership rows, `DEP-05`, `TR-DM-06` all checked out exactly. The Three Lines Model staleness claim was independently web-verified (IIA replacement Statement of Position, 2026-07-08). **One genuine defect found and fixed at source, not just relayed:** `FB-04` said "five requirements," listed six — the exact defect class §12 already predicted (a number restated without re-derivation), landing in its own audit trail. Corrected in `Modular_PRD.md` and `requirements-traceability-map.md`, both version-bumped, both changelogged. Added three decision requests to `Modular_PRD.md` (Q10 tool-vs-product, Q11 the `judgment_independence_status` rename, Q12 the citation/SEC-01 re-derivation) and seven gap-register rows (A20–A26) routing the audit's remaining findings — most consequentially A21 (an irreversibility warning: the field name asserts a cognitive fact the code can only ever prove structurally, and `NFR-02` makes the table it lives in append-only before S1 ends), A23 (Q2's cheap unblock, read literally, collides Line 2 and Line 3 — corrected the answer space, not just flagged it), and A25 (blind first pass at T5, the one buildable mechanism without which `G-05` cannot distinguish agreement from anchoring). **Deliberately did not do the full governing-set citation re-anchor** — ~15 occurrences across four files, several inside historical changelog entries that must not be rewritten — logging it as A20's citation-currency item rather than a half-finished multi-file edit in the middle of routing everything else. **Deliberately did not rename `judgment_independence_status` or design the blind-first-pass mechanism** — both are S1/S2 build decisions requiring Chief Editor confirmation (Q11) or implementation, not something to do unasked mid-audit-response. No open decision closed, no Charter text touched, no number invented, no application code written.
- **2026-08-16, revision 8:** **The customer intake template was supplied and identified as the origin of more than `PRD.md`.** Its eight questions appear in order in both the Charter body (`**Problem:**` … `**What it replaces or earns:**`) and the Business Case headers, so each governing document has a *customer half* — the eight answers — and a *project-side overlay*: the Charter's A1/OD1–OD4 tables and the Business Case's Decision Framework. **OD1–OD4 are therefore the project team's questions posed back to the customer**, recorded in the Charter because that is where the team logged what it needed decided (A14). This corrects D5's characterisation: the plan pack is **silent** on governance rather than wrong about it, because the template it was generated from asks no governance questions; its substrate content stands and the reconciliation work is unchanged (A15). **Withdrew revision 7's own overreach:** making the missing Business Charter a "structural gap" on the production checklist repeated the boundary error in a new place. The team may recommend a Business Charter and may not require one; the honest statement is about our limits, not the customer's obligations — we cannot verify `PRD.md` against a source we do not hold, and that blocks nothing (A13 withdrawn; FB-07 reclassified from Gap to Recommendation, priority High to Low). **Recorded the Chief Editor's RACI reframing** in `docs/governance/raci-involvement-matrix.md`: Accountable is the Acting Chief Editor — one natural person, business-wide, delegable only through the board-approved LOA window — and Responsible is the agent, one role per task. This gives OD2 an answer that does not depend on a claim about agent cognition, which is what made every prior answer feel like a substitution. Surfaced that **R = A at T5 and T11**, which does not break four-eyes (that control operates across tasks, not within one) but identifies the two tasks where Line 3 is the only assurance over the accountable party. Recorded OD4 as the autonomy extension reached once judgment rules are codified as SOPs — a **positive** reopening trigger alongside the Charter's two negative ones, requiring a Charter amendment not made here. **Nothing ratified, no headcount derived, no Charter text changed, `PRD.md` unmodified.**
- **2026-08-16, revision 7:** **corrected a category error running through revisions 1–6.** `PRD.md` had been judged by supply-side standards — no Lines, no return path, no dependency mapping — and ranked below `Modular_PRD.md`. That inverts the PMI requirements flow: `PRD.md` is the customer's document, derived from the Business Charter, and its approval authorised scaffolding; `Modular_PRD.md` is the project team's specification drawn from it, with feedback returning through the sponsor. A customer is the subject-matter expert on their own business, not on SDLC, so demanding traceable dependency mapping from their document is the same chicken-and-egg trap as demanding OD1–OD3 close before scaffolding. **Replaced precedence-between-PRDs with the elaboration-versus-change-request distinction** — a difference is either the team specifying how a want is met, or a change routed back to the customer; never settled by document rank. Created `docs/governance/requirements-traceability-map.md`, anchoring all 19 customer statements to SHA-256 content hashes at `53ace36` so customer edits break visibly rather than drifting silently, with forward and backward traces. **Findings: one uncovered customer requirement (CR-14, AI tagging — no FR at all), one partially covered (CR-06, blocked by TC3), and five specifications with no customer origin (FR-06, FR-11, FR-12, FR-13, NG-10, NG-11) — all justified, none disclosed.** Raised the missing Business Charter from a go-live checklist item to a structural gap, since it is the unverifiable upstream of the customer requirements document. Retired A9 as wrongly framed; added A11, A12, A13; grew A10 from two traceability layers to three; added R5 to route the eight-item feedback register via the sponsor. No new product scope, no open decision closed, no Charter text touched, no number invented, `PRD.md` unmodified.
- **2026-08-16, revision 6:** consolidated the document set into a four-layer model with one coherence rule — authority flows downward only; a lower layer may restate, detail, or flag, never contradict, close, or ratify. **Corrected an error from the previous turn:** `docs/PRD.md` was overwritten when the instruction was to write a *new* modular document alongside it. `PRD.md` is restored byte-identical from `53ace36` and retained as the original requirement record; the new document is `Modular_PRD.md`, with its header corrected from "supersedes" to complementary and its version reset to its own 1.0 lineage. **Two new gaps arise from that:** **A9**, precedence between the two requirement documents is proposed but unratified (Q8); and **A10**, two parallel traceability systems now exist — this plan's `AT`/`SC` mapping and the PRD's `FR`/`US`/`AC` mapping — which are internally consistent, mutually unaware, and free to drift. Added **§6 R, a pre-sprint remediation sequence** running R0 document coherence → R1 a seven-decision Chief Editor batch → R2 closing deviation D4 honestly → R3 verification apparatus → R4 one traceability system, all before S0. Promoted the test runner and CI out of S0 into R3, because they are not a sprint deliverable but the precondition for any sprint having a verdict. Recorded what stays open by design after R — OD1–OD3, Q1, Q7, D2, and the two missing business documents — so the remediation list cannot be mistaken for a path to closing them. No new product scope, no open decision closed, no Charter text touched, no number invented.
- **2026-08-16, revision 5:** challenged revisions 1–4 against the repo plan pack read **as a description of the substrate** rather than as a document that loses on precedence, and against the code it describes. **Reframing (§4.1):** the plan pack is authoritative-in-fact about the architecture and wrong only about governance; the governing documents still specify against FastAPI, self-hosted Postgres, and Redis/Celery, none of which exist. Its governance errors are one pattern, not many — with no concept of Lines it allocates human involvement by risk, producing an agent on the Line 2 gate and a human on a Line 1 gate simultaneously. **Reversed this plan's own revision-4 recommendation (TC8):** the Supabase Edge Function publish path is worse here — no `supabase/functions/` exists, Edge Functions are Deno deployed by CLI with a separate secret store, and that adds a second pipeline against `CLAUDE.md`'s binding deploy-by-git rule. Recommends a Next.js route handler, with the A2 phrasing flagged for amendment rather than silently overridden. **Found TC1, the load-bearing one:** the sequence guard as specified was unenforceable, because the anon key is public, RLS is permissive, `lib/supabase/server.ts` also uses the anon key, and Phase 0 has no auth — so no layer above the database holds more authority than a browser. Enforcement moves into Postgres triggers, which the demo-first constraint makes forced rather than preferred. **Found TC2:** S4 was not implementable at all — a single `publication_target` enum cannot represent "WordPress Published + LinkedIn ManualReady," which is the success scenario itself. **Found TC3–TC5:** missing `actor_id`, `sources.reliability_tier`, `articles.source_id`, `topics.evolves_from`, trend-signal fields, and a unique index on `articles.url` without which AT-004 cannot pass and `0001` is not idempotent despite reading as such. **Found TC6:** no test runner, no CI, and build gates disabled in `next.config.ts` — so every DoD citing an AT-id was unverifiable, and a project premised on enforced gates has none in its own delivery pipeline. **Found TC7:** the retry backoff has no scheduler. **Found TC9:** `INTELLIGENCE_LAYER.md`'s auto-advance is a gate bypass and must not be built. S0 grows to include verification apparatus; S1 grows to include triggers and the schema gaps; S4 is corrected. Added Q5 and Q6. No new product scope, no open decision closed, no Charter text touched, no number invented.
- **2026-08-16, revision 4:** consolidated the full `docs/` read — governing set, deviation register, three journal entries, repo plan pack — into one internally consistent plan, superseding revisions 1–3 rather than patching them further. **Found A1:** the register claims D4 closed by ratification, but Addendum §2.4's A2 row carries the re-scoping in the `Resolved?` column with `Ratified? = No` and no date or artifact — the fifth instance of resolution-labelled-as-ratification, and the first inside the instrument built to catch it. **Found A2:** A2 was re-scoped in the Addendum only; the Blueprint and Business Case still specify FastAPI, and Blueprint §7 still states the database is not Supabase-hosted, now contradicting the Addendum. Both block D4's honest closure. **Found A3:** the ratified A2 names Supabase Edge Functions, which S4 did not reflect. **Found A7:** `CLAUDE.md` still directs agents to the plan pack as authoritative and carries the superseded git identity. Added the consolidated gap register (§3) with an X→D crosswalk so no finding is tracked in two places, and a traceability matrix (§6) mapping every sprint to its acceptance tests, success criteria, and OD gates — previously the main thing making "is this sprint done?" unanswerable. Resolved A4 by naming `REVIEW_GATE_ROLE_COUNT` (4, Charter review roles) alongside `PIPELINE_GATE_COUNT` (6, Addendum transitions) rather than picking one reading. Converted all line-number citations to section-and-clause, since the v1.5/v1.4/v2.3 amendments moved them; the as-supplied numbering remains in git at `45c50dc` and `b494d4f`. Retired the stack question as answered, subject to Q0. No new build scope, no open decision closed, no Charter text touched, no number invented.
- **2026-08-16, revision 3:** accepted the Chief Editor's correction that downstream documents moving ahead of the Charter is the Charter's intended process, not a defect — X12 re-dispositioned from conflict to legitimate provisional deviation (register D2), X11 unchanged since it concerned a dropped qualifier rather than whether resolution may proceed. Opened the deviation register. Amended the three downstream documents surgically to Addendum v1.5, Blueprint v1.4, Business Case v2.3. Charter untouched and marked frozen.
- **2026-08-16, revision 2:** Project Charter supplied and committed; X0 closed. Reading it first-hand opened X11 and X12 and withdrew revision 1's `LINE1_AGENT_ROSTER` default.
- **2026-08-16, revision 1:** initial plan from the three available documents plus the cloned repo. Logged X1–X10, extracted every numeric target into named config, left `AGENT_HEADCOUNT` UNSET.
