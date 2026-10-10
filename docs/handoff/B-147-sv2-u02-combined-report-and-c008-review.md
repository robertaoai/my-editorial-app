# B-147 — Lane B review of the `SV2-U02` combined report and `C-008`

- **Raised:** 2026-09-28 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a fully supported Judge acceptance of `SV-002` §3.5 and a bounded remediation choice; does not check `SV2-DOD-03` or release `V1-SM05`
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-28, read at `ebbe012` (`D-315`). **Your parent item is applied.** `SV-002` §3.5 now has:
  - the scoped file-selection sentence;
  - separate skill measures;
  - the date as an earliest-record bound;
  - `G53` named in the comment run;
  - `C-004` marked document-only and `B-143`'s re-examination named;
  - the frontmatter, discovery and crowd-out causes kept as hypotheses;
  - the conservative sizing input kept, with the documented per-file/aggregate rule listed as an explicit alternative.

  Your item 3 tests are the per-route acceptance tests. `C-008` is answered proposal by proposal along your lines, and the `C-009`/`C-010` replacement and graph-path entry are not adopted. Items 2 and 4 are the Judge's and later acts. Graph currency is kept distinct as you describe: `docs-drift` checks extraction currency, semantic enrichment is a separate step, and the graph is rebuilt after this governed-doc commit.
  **Supplement answered 2026-09-28, read at `8a5e84e` (`D-316`). All three residual corrections are applied to `SV-002` §3.5:**
  - **Installed documentation:** the frontmatter hypothesis now cites the installed `SKILL.md` (line 49 `.agents/rules/*.md`; lines 88–89 "Only `always_on` rules are loaded unconditionally"). The discovery hypothesis is weakened accordingly. `D-315` item 2's "the installed documentation is silent" was false, and `D-316` corrects it.
  - **Receipt column:** now "Raiser checked Lane A's recording (not a review level)". Route A's cell says there is no raiser check because Lane A wrote the receipt, and names Level 1 plus Level 2 as the substantive review.
  - **Cost note:** strict "under 24,000" needs at least 7,921 bytes cut from `AGENTS.md`, or 29,671 if `graphify.md` shares the total. The per-file alternative needs 7,921 from `AGENTS.md` only. `C-008`'s figures are one byte short.
  **Second supplement answered 2026-09-28, read at `72ccf32` (`D-317`). All three edits are applied to `SV-002` §3.5:**
  - **Consequence 3** cites `AGENTS.md` lines 139–140 inside the delivered lines 1–329, and R2's comment cue `VISIBLE (exact)`.
  - **Token bases:** both are stated, at an assumed 4 bytes per token with global rules excluded. The cut `AGENTS.md` plus `graphify.md` is about 11,400 tokens, labelled **a hypothetical pair, since `graphify.md` was not delivered** (your correction of `C-008`'s "delivered pair"). The two full pinned files are about 13,400 tokens. The per-file cost line refers to both.
  - **List:** the candidate designs are their own top-level bullet, and the rendered list was read back.
  On `C-008`'s lifecycle: its F20/F21 requests are now applied, so its `Answered`/`Applied` header is accurate again. Its "delivered pair" term is superseded by §3.5's wording.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent of Lane A's answer/application; scoped verification below
- **Evidence:** Independent verification of Lane A recording/application, scoped below; inherited evidence: `D-266`, `D-294`, `D-303`–`D-316`; `SV-002` §3.1/§3.3/§3.5/§7; `B-143`, `B-145`, `B-146`, `C-004`, `C-005`, `C-007`, revised `C-008` F15/F20/F21; installed Antigravity `agy-customizations/docs/rules.md` and `SKILL.md`; [Google Antigravity Rules](https://antigravity.google/docs/rules/); read-only local consistency and Graphify checks below
- **Verified-At-Commit:** 1a242890bc79a8d22a400c612d298afd0103ba0f

## What happened

The user requested a Lane B independent review of Lane A's submitted `SV2-U02` combined loader report (`D-314`, `SV-002` §3.5) and Lane C's `C-008`, using the external EMS analysis as a prompt for questions, not as evidence or another review level. Unlike that outside analysis, Lane B could resolve the internal decision, receipt and review IDs in this repository. The report measures development-agent instruction delivery. It does not test the product's Three Lines or establish business-requirement parity; `SV-002` §3.3 and the originating requirements own that mapping, with `SV2-DOD-05` already checked for Gate 1B.

### What holds, and what the outside analysis could not check

The route outcomes in §3.5 follow the scoped records: Route A's `attachment:instructions` and `B-146`/`C-007`; Route B's rollout, Lane A Level 1 and Lane C's **document-only** Level 2 (`C-004`); Route C R2's conversation-store block, Lane A Level 1 and `B-145` Level 2. `D-313` names these reviewers and their order. This supports the claim that the route schedules were independently reviewed **to their declared scopes**. It does not turn `C-004` into a raw-evidence re-score or make the separate raiser-side receipt verifications another review level. `D-314` is a submission, not the Judge's acceptance.

The external analysis correctly catches §3.5's sentence saying the three tools never read the same file: Codex and Antigravity both received `AGENTS.md`. It also correctly distinguishes the 12,000-character skill target from the observed 800-line first read. The 187-byte comment span plus one terminal newline was already corrected by `D-312`, so `C-008` should not reopen that settled measurement. The earliest retained 2026-09-15 conversation bounds the observation; it does not date the onset of truncation.

### Gaps in `C-008` and the failure-derived proof

| Parent question | Unclear or guaranteed failure | Small correction and observable success |
|---|---|---|
| **1. What is the measured outcome?** | §3.5 item 1 is logically false as written. `C-008`'s phrase "No tool automatically reads `.agents/rules/graphify.md`" should be scoped to the measured runs, not every possible configuration. | Say: **In these runs**, Claude Code received `CLAUDE.md`; Codex and Antigravity received `AGENTS.md`; none delivered `graphify.md`. Keep the harness records as the acceptance evidence. |
| **2. What is the skill target?** | `C-008` correction 2 still asserts that fewer than 12,000 characters **guarantees** fewer than 800 lines. It does not: short lines can exceed 800. The 12,000-character target is binding in `D-266` item 3; 800 lines is the R2 one-read window, not that same unit. | State the two quantities separately. Before claiming one-read delivery, measure both character count and line count, then run the skill probe and require its tail cue. A size or line count alone is insufficient. |
| **3. Why was `graphify.md` absent?** | `C-008` correction 5 upgrades a plausible cause into a conclusion. The checked file begins with `description` frontmatter and **no `trigger`**. Current [Google Rules documentation](https://antigravity.google/docs/rules/) says `.agents/rules/*.md` files require a valid trigger and otherwise may be silently discarded; the local installed `rules.md` documents `AGENTS.md`, 24,000 bytes per file and a 20,000-token aggregate budget, but does not document modular-rule activation. Neither source proves the exact installed IDE's handling in the measured conversation. A four-bytes-per-token estimate and unknown global rules cannot eliminate aggregate crowd-out. | Preserve **observed non-delivery** as the result and frontmatter rejection, discovery and budget effects as version-qualified hypotheses. After authorization, test the installed IDE with a valid-trigger rule and an independently checked conversation-store block. Only then name a cause. |
| **4. Which size policy may the Judge select?** | `C-008` correction 6 silently replaces §3.5's conservative **total under 24,000 bytes** design input with separate per-file and aggregate limits. Official documentation supports those limits for documented versions; the R1/R2 runs delivered only one rule block and did not test a two-file design in this installed build. | Keep the conservative input until the Judge chooses a bounded alternative. If changing it, pin the installed version, document the new per-file and aggregate rule, and make a two-file delivery run with no truncation/demotion the acceptance test. No rule edit follows from this review. |
| **5. What is one canonical handoff?** | `C-008` asks for a repository-wide replacement of `C-009`/`C-010` references. That would rewrite `B-135`'s older **historical external C-009** provenance, a different object. Its retired 2026-09-28 numbers are already explained inside `C-008`. | Keep `C-008` as the sole current review entry. Correct only a reference proven to denote its withdrawn 2026-09-28 drafts; preserve unrelated historical citations. No new graph-path entry is needed for ignored runtime files. |
| **6. What counts as graph currency?** | `.graphify/branch.json` has `lastAnalyzedHead=45a7021` while this review reads `fa536a1`, but `docs-drift` passes because intervening commits changed excluded handoff paths only. `graphify check-update` still reports pending semantic descriptions/labels. Calling either state simply "synced" would conflate scopes. | Report governed-intent extraction currency, semantic enrichment and portability separately. After any accepted **governed-doc** correction, Active Lane A runs the Graphify workflow with curated fragments preserved, then checks `docs-drift` and the affected graph claims. Ignored local absolute paths are not, by themselves, a tracked portability defect. |

`graphify hook-rebuild --help` exists in the installed CLI, contrary to `C-008` F12's uncertainty, but availability is not proof that running it alone merges the curated docs layer. The project's fragment merge procedure remains the source for that step. `C-008`'s local graph-path observation is not a reason to rewrite ignored runtime artifacts or open another handoff entry. The precommit `bun run check` passed 18/19 checks: only `handoff-response` failed, because Lane A has not yet acknowledged `C-008` or this new B entry. `docs-drift` passed for governed intent at `45a7021`; later commits are handoff-only. Lane B cannot truthfully write Lane A's acknowledgement.

## What you need — parent before children

1. **Parent, Lane A: correct and submit the existing report (Gate 1B, P1).** Acknowledge `C-008` and this entry. In `SV-002` §3.5 correct item 1 and the skill-target wording. Keep `D-312`'s byte finding, qualify the earliest retained truncation date, and distinguish each Level 2 review's actual evidence scope. In the same pass, answer `C-008`'s six proposals individually: retain the measured facts; do not promote the frontmatter/budget inference or relax the conservative sizing input without a Judge decision. Record `D-54` tier applicability. The Product Requirements Document, Fn Specs, SPECS, Build Spec and Inventory are unaffected by these report-wording corrections unless a bounded scope or artifact change is separately decided.
2. **Child, Judge: choose the remediation boundary (Gate 1B, P4).** Accept the corrected combined report or return exact unmet criteria. Record either no remediation or one bounded, owner-assigned fix. Keep the installed-version rule-discovery, budget scope and skill feasibility questions as testable conditions; do not adopt single-source generation merely because it is one candidate in `C-008`.
3. **Child, authorized owner: falsify the failure mechanisms (Gate 1B, P4).** For Route C, preflight the installed IDE and rule location, vary one mechanism at a time, and inspect the conversation store for a `graphify.md` block and complete `AGENTS.md` tail. For Route A, require visible `G53` instruction text in its harness record. For Route B, require its unique tail and measured margin. For the external skill, require the end cue after a controlled load. Compare against pinned baselines and retain negative controls. These are proposed acceptance tests, not permission to alter files now.
4. **Child, Lane A and Judge: close only earned states (Gate 1B → Gate 2).** Independent review of the applied fix and re-measurement precede `SV2-DOD-03`; `SV2-DOD-06` and a separate Judge act govern any `V1-SM05` release. Route-loader acceptance must not be substituted for the already separate business-contract mapping or later real-database proof.

## What you did instead

Reviewed the current repository records, the attached EMS analysis, `C-008`, the local installed Antigravity rules note and Google's published rules documentation. Ran the local consistency and Graphify currency checks. Drafted this Lane B finding only. No rule, skill, product spec, application code, graph artifact or combined report was changed.

| Item | Verdict | Condition and follow-up phase |
|---|:---:|---|
| Route outcomes and completed scoped review schedule | **Approve** | Keep `C-004`'s document-only scope explicit (Gate 1B, P1) |
| Combined report as written | **Approve-with-conditions** | Correct the false file-selection sentence, separate skill measures and qualify the date before Judge acceptance (Gate 1B, P1) |
| `C-008` frontmatter/crowd-out conclusion and relaxed sizing rewrite | **Reject** | Treat as hypotheses or a separately decided design until an installed-version two-file run proves them (Gate 1B, P4) |
| Repository-wide `C-009`/`C-010` replacement and separate graph-path handoff | **Reject** | Preserve historical provenance; assess only exact current references and tracked graph artifacts (Gate 1B, P1) |
| `SV2-DOD-03` or `V1-SM05` release from this review | **Reject** | Requires the remediation decision, re-measurement, independent evidence and later Judge acts (Gate 1B → Gate 2) |

## Dated supplement — review of the applied `D-315` answer (2026-09-28)

The answer above is a historical record: Lane A applied the original corrections under `D-315`. This supplement keeps the same bounded parent question — whether the combined report is ready for the Judge — open for three residual corrections. It does not undo those corrections, reopen the measured route results, or authorize a rule-file edit. The outside EMS review is a source of questions, not an instruction or an additional review level; its downloaded copy of §3.5 predates `D-315`. The revised `C-008` at the commit pinned above resolves several of its own earlier questions.

| Residual gap | Evidence and smallest Lane A correction | Completion proof |
|---|---|---|
| **Installed-doc wording conflicts across tiers.** | `SV-002` §3.5 narrowly says installed `agy-customizations/docs/rules.md` does not document modular activation; that is true. `D-315` item 2 broadly says *the installed documentation is silent*; that is false. The installed root `SKILL.md` line 49 lists `.agents/rules/*.md`, and lines 88–89 document `always_on` activation. Correct the Register's broad sentence and, for the Judge's reading, distinguish documented activation from the still-unverified cause of this run's non-delivery. | Register and §3.5 agree: limits are documented in `docs/rules.md`; modular activation is documented in `SKILL.md`; installed-IDE behaviour remains a hypothesis until a controlled run. |
| **Receipt column invites a false self-review reading.** | `C-008` F17 establishes that Lane B/C checked Lane A's *recording* of their receipts; Level 1/2 are the separate substantive reviews. In `SV-002` §3.5, rename `Receipt verified` to say what was checked, and make Route A's cell explicit because Lane A wrote its own receipt. | A reader can distinguish raiser-side recording checks from cross-lane Level 1/2 reviews without consulting `C-008`; no extra review level is implied. |
| **The conservative design cost is missing from the Judge-facing report.** | §3.5 offers total rule text **under** 24,000 bytes versus a per-file/aggregate alternative, but omits the cost. Revised `C-008` F19 gives cuts to exactly 24,000, one byte too few for strict *under*: from 31,920 bytes, `AGENTS.md` needs at least **7,921** bytes cut; if its 21,750-byte companion must share that total, at least **29,671** bytes must be cut in aggregate. The alternative still needs a two-file run; its ~11,400-token figure is an estimate that excludes unknown global rules. Put the corrected cost next to both choices. | The Judge sees the measured file sizes, strict-threshold arithmetic and the alternative's verification condition before choosing; the estimate is not presented as a guarantee. |

**Already settled, no new fix requested:** `AGENTS.md`'s `SHARED CORE` comment is at lines 139–140, inside Antigravity's delivered lines 1–329, and `C-005` line 70 scored its cue `VISIBLE (exact)` (`C-008` F15). The appended "Independent References review" and empty heading existed in scratch material, not committed §3.5 (`C-008` F18). The 2026-09-15 retained cut predates the 2026-09-25 spike, while onset remains unknown; restoring that clause is optional. A later disposition-commit pin is not required: the handoff SOP (`D-214`) pins the commit read and derives the disposition commit from history.

### What Lane A needs now — parent before children

1. **Parent: correct and resubmit the existing report (Gate 1B, P4).** Apply only the three residual corrections above in Lane A's canonical sources. Record `D-54` applicability in the Register: `SV-002` and the Register change; Build Spec, Inventory, Product Requirements Document, Fn Specs and SPECS remain unaffected unless a later bounded decision changes scope or an artifact. After the governed-doc commit, run the Graphify workflow with curated fragments preserved, then check drift and the affected graph claims.
2. **Child: Judge acceptance and remediation choice (Gate 1B, P4).** The Judge accepts the corrected report or returns a specific unmet criterion, then records either no remediation or one bounded owner-assigned fix. The existing route-specific harness/store checks, end cue and negative controls are the proposed re-measurement criteria, not permission to implement a fix now.
3. **Child: only earned closure (Gate 1B → Gate 2).** If a fix is chosen, the authorized owner applies it, the routes are re-measured, and an independent reviewer checks the evidence before `SV2-DOD-03`. `SV2-DOD-06` and a separate Judge act govern any `V1-SM05` release. This loader report does not substitute for the separate business-to-system requirements mapping in `SV-002` §3.3.

**Check at the pinned commit:** the full local `bun run check` passed 19/19. `docs-drift` reports governed intent synced at `73ce1ff`; HEAD `214aa3b` changed only an excluded handoff entry. `graph-coverage` found no missing governed docs. This is extraction/coverage evidence, not proof of every semantic description. No Graphify rebuild is needed for this handoff-only edit; a later governed-doc correction requires Lane A's sync.

| Item | Verdict | Condition and follow-up phase |
|---|:---:|---|
| Reviewed route outcomes and settled outside-review claims | **Approve** | Keep the declared evidence scopes; no duplicate handoff or new route classification (Gate 1B, P4) |
| Judge submission of `SV-002` §3.5 | **Approve-with-conditions** | Lane A corrects the Register wording, receipt label and cost note, records tier applicability and checks graph currency (Gate 1B, P4) |
| Report acceptance, remediation, `SV2-DOD-03` or `V1-SM05` release from this supplement | **Defer** | Judge decision first, then any authorized fix, re-measurement and separate closure acts (Gate 1B → Gate 2) |

## Dated supplement — review of `D-316` and revised `C-008` (2026-09-28)

Lane A's `D-316` answer above remains the record of the prior three corrections. This supplement keeps the same parent question, Judge readiness of `SV-002` §3.5, open for the token-basis and formatting edits already identified as `C-008` F20/F21. The external review is input, not an instruction or review level. No route is reclassified.

| Current question | Lane B finding | Small correction and proof |
|---|---|---|
| **Does Antigravity see `SHARED CORE`?** | Yes. `AGENTS.md` lines 139–140 fall within delivered lines 1–329; `C-005` line 70 scores the comment cue `VISIBLE (exact)`. The outside request to reword this as unverified is stale. | No classification change. Lane A may add these anchors to consequence 3 for a self-contained Judge report (`C-008` F15). |
| **What do the token figures describe?** | `C-008` F20 correctly identifies two arithmetic bases, but its term **“delivered pair” is false as a delivery claim**: only cut `AGENTS.md` was delivered; `graphify.md` was absent. A *hypothetical* pairing of cut `AGENTS.md` (23,962 bytes) and `graphify.md` (21,750) totals 45,712 bytes, about 11,428 tokens at an assumed 4 bytes/token. The pinned full-file pair totals 53,670 bytes, about 13,418 by the same estimate. Neither is a tokenizer measurement or an observed two-file injection; both omit global rules. | In §3.5's crowd-out and per-file-alternative sentences, name the hypothetical cut-size and pinned-full-size scenarios, the 4-byte assumption, and the unmeasured global rules. Keep crowd-out *unlikely but unexcluded*, pending the controlled installed-IDE two-file run. Do not call either scenario “delivered”. |
| **Is the cost list parseable?** | `SV-002` §3.5 joins the `C-008` candidate-design sentence to the third cost sub-bullet. Its parenthesis is closed, contrary to the outside review's “unbalanced” claim, but the stand-alone parenthetical after a full stop is awkward (`C-008` F21). | Separate the designs into their own top-level bullet and tidy the punctuation; read the rendered list before resubmission. |

**Tracking:** revised `C-008` already carries F20/F21 and asks for these edits, so no second entry is requested. Its header still says `Answered` / `Applied` even though those new requests are not applied; Lane C should align that entry's lifecycle before a closure claim. This B-147 header is `Open` for this supplement; the earlier `D-315` and `D-316` answers remain dated above. The downloaded review's appended AI framework and its unsupplied-file citation remain non-evidence.

**Order:** Lane A corrects the existing §3.5 wording/list and records `D-54` tier applicability (Gate 1B, P4); then the Judge may accept the report and choose no remediation or a separately bounded fix. Any chosen fix and re-measurement precede `SV2-DOD-03`; `SV2-DOD-06` and a separate Judge act precede `V1-SM05` release. Build Spec, Inventory, Product Requirements Document, Fn Specs and SPECS are unaffected by these report-wording corrections unless a later decision changes scope or an artifact.

**Graph check at the pinned commit:** `.graphify/branch.json` analyzed `b5bf0b8`; HEAD `d0daaf6` changed only the excluded `C-008` handoff file. Governed-doc extraction needs no rebuild for that commit. Lane A must sync Graphify after correcting the governed report and check the affected graph claims. No implementation or canonical source was changed by this review.

| Item | Verdict | Condition and follow-up phase |
|---|:---:|---|
| Comment delivery and `D-316` receipt, documentation and strict-under corrections | **Approve** | Preserve the measured scopes; optional line anchors in §3.5 (Gate 1B, P4) |
| Judge-ready §3.5 | **Approve-with-conditions** | State both token-estimate bases without implying two-file delivery, and repair the list; Lane A records tier applicability and graph currency (Gate 1B, P4) |
| Cause, remediation, `SV2-DOD-03` or `V1-SM05` release | **Defer** | Controlled run and separate Judge acts remain required (Gate 1B → Gate 2) |

## Lane B independent source verification — 2026-10-03

**Read revision:** 1a242890bc79a8d22a400c612d298afd0103ba0f. **Actor:** Lane B (Codex), independent of the Lane A receiver/application. The Judge's request to resolve Lane A's incident selects this source annotation through B-154's committed delivery correction. This is source-lifecycle verification, distinct from any historical Level 1/Level 2 experiment.

**Observed comparison:** Compared all three Lane A applications (D-315/D-316/D-317) with SV-002 §3.5. The report scopes file selection to 'in these runs', measures characters and lines separately, bounds the earliest retained record without claiming onset, names G53, distinguishes C-004's document-only review from B-143's re-examination, and keeps causes as version-qualified hypotheses. Installed-documentation references, the raiser-recording column, strict-under costs, hypothetical token pair and separate candidate-design bullet are corrected. C-008's proposals have explicit adopted/partial/not-adopted dispositions.

**Scope and surviving obligations:** Verified for applied report corrections and proposal dispositions. D-318 report acceptance and D-362 loader acceptance are inherited decisions; no new delivery experiment, causal explanation or activation/adherence proof is supplied. D-356 retains the separate Phase 1 behavioural follow-up.

Lane A's answer is preserved. The source header moves from Applied to Verified for this bounded disposition; earlier Applied/unverified wording remains dated history. Lane A must receive this result in the existing SV-002 review/clearance and applicable residual homes. No tracker cell, canonical requirement, lane state or work order changes in this commit. Verified source headers are inputs to reconciliation, not whole Gate 2 clearance.

| Verdict | Item | Follow-up phase |
|---|---|---|
| Approve | B-147 scoped source verification of Lane A's recording/application | Phase 1: Lane A receives the actual actor, revision, scope and source commit in the existing tracking homes |
| Defer | Surviving obligations and wider parent closure | Follow-up phase and owner stated above; Gate 2 and construction retain their separate prerequisites |

## Terminal annotation record

- **Current-Resolution:** Verified
- **Annotation-Type:** verification-evidence
- **Annotation-Act:** Judge's 2026-10-03 Lane A incident-remediation request; B-154 delivery correction at 1a242890bc79a8d22a400c612d298afd0103ba0f; Lane B independent verification under D-364 item 4
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 1a242890bc79a8d22a400c612d298afd0103ba0f
