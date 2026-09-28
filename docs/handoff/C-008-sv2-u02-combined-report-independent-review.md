# C-008 — Lane C independent review of SV2-U02 combined loader report (§3.5 / D-314)

- **Raised:** 2026-09-28 by Lane C
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, reporting only; input to the Judge's acceptance of SV-002 §3.5 and subsequent remediation planning
- **Receiver:** Lane A
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-28, read at `ebbe012` (`D-315`). `SV-002` §3.5 is corrected and resubmitted for the Judge's acceptance. Your six corrections, taken one by one, with `B-147`'s review applied:
  - **(1) File selection: adopted, scoped to "in these runs"** (F1 was right).
  - **(2) Skill target: adopted in part.** The 12,000-character target stands. "Which also keeps it inside the 800-line window" is **not** adopted, because the two limits are different units (your F2 and `B-147`). Both counts are measured, plus a probe for the end cue.
  - **(3) `G53` in the comment run: adopted.**
  - **(4) Date: adopted as "earliest retained record; onset unknown".** The "predates SETUP-SPIKE-000" clause is dropped.
  - **(5) Causes: recorded as version-qualified hypotheses, not a conclusion.** They are frontmatter without a `trigger` (measured by file read), discovery path, and crowd-out. The observed result stays non-delivery.
  - **(6) Sizing: not replaced.** The conservative total under 24,000 bytes stays. Your per-file/aggregate rule is listed as an alternative the Judge must choose explicitly, with a two-file run as its test.

  Your §2 options are listed as candidates, none adopted. Your §4 checklist is folded into §3.5's per-route acceptance tests.

  **Not adopted:**
  - The repository-wide `C-009`/`C-010` replacement: `B-135`'s `C-009` is an earlier, different Lane C proposal, and the number had been used before.
  - A separate graph-path entry (F12): the paths are in ignored runtime files, and `graphify hook-rebuild` exists.

  One minor point: this entry's `Blocks:` says "nothing, reporting only" while its body asks for corrections before acceptance.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** `SV-002` §3.5 (`D-314`, `D-315`); `~/.gemini/antigravity/builtin/skills/agy-customizations/docs/rules.md` and `SKILL.md`; external EMS framework review (input, not a review level), kept in full in Appendices A to E of this file
- **Verified-At-Commit:** 73ce1ff63cb478631bc2a514d79d63897ca8e617
- **Absorbs:** C-009 and C-010 (withdrawn before acceptance)

## What happened

This entry absorbs the content of two entries raised on 2026-09-28 and withdrawn before acceptance (C-009, C-010). Their numbers are retired. Originally raised at `570fc1a`; revised at `45a7021`; answered by Lane A at `73ce1ff` (`D-315`). All evidence from the review is kept in this file, so Lane A needs no other document.

Lane C conducted an independent technical review of the `SV2-U02` combined loader report submitted by Lane A in `SV-002` §3.5 under `D-314` and revised under `D-315`. The review consolidates the submitted report, an external EMS framework review (input, not a review level), Lane B's `B-147` review, and Lane C's reading of the Antigravity customization documentation, and grades every claim.

**Evidence grades:**
- **Measured:** Shown by a run, transcript or conversation store.
- **Documented:** Stated by tool documentation, not yet run.
- **Inferred:** Concluded from other facts.
- **Unverified:** Cannot be checked from the supplied material.

**Provenance (Unverified):** The internal identifiers (`D-266` to `D-315`, `B-*`, `C-*`) and raw records could not be resolved by the EMS review, so every measured claim is "as reported". Both versions of the submitted text carried an appended AI analysis in review scratchpads; neither is evidence. The first cited expired signed links and called §3.5 "internally coherent" despite F1 and F2. The second ("Independent References review") cited an unsupplied file (`V1-Build-Readiness-Addendum.md`) and carried an empty heading (F18). Both are detached.

**Limits (Unverified):** §3.5 asserts independent review. Routes A and B have one run each; Route C has R1 (inconclusive) and R2. Run-to-run variation is untested for A and B. Substantive independent review of all three routes is completed across lanes (Level 1 and Level 2 columns). For Routes B and C the "Receipt verified" column names the same lane that wrote the receipt, which denotes raiser verification of Lane A's recording (`D-278`/§2.3), not self-verification of the route's findings (F17).

## What you need

**1. Status of the Seven Corrections against revised §3.5 (`D-315`)**

Lane A applied most corrections in the revised §3.5 (`D-315`). Numbering is kept because `D-315` cites it.

| # | Topic | Status in revised §3.5 | Remaining action & definitive adjudication |
|---|---|---|---|
| 1 | Item 1 wording | Applied | "Delivered" replaces "reads", scoped to "in these runs" (F1 resolved). None remaining. |
| 2 | Skill target against 800 lines | Superseded / Applied | §3.5 separates the 12,000-character target from the 800-line tool window. Lane C withdraws its earlier wording (F2 resolved). |
| 3 | Claude Code completeness | Applied | 187-byte run (lines 139 to 141) carries `G53`, plus the final newline (`D-312`). None remaining. |
| 4 | Truncation date | Applied in part | Earliest record 2026-09-15; onset unknown. Confirmed: `SETUP-SPIKE-000` opened 2026-09-25 (`D-264`, `SV-002.md` line 3), so 2026-09-15 predates the spike by at least 10 days. |
| 5 | Open causes | Applied | Frontmatter, discovery, and crowd-out kept as version-qualified hypotheses. **F16 resolved:** Reconciled via `agy-customizations`: caps documented in `docs/rules.md`; `always_on` modular activation documented in `SKILL.md` (Documented). |
| 6 | Remediation inputs | Applied | Conservative default (< 24 KB total) listed alongside documented alternative (< 24 KB/file, < 20k tokens aggregate). Cost note added (F19). |
| 7 | Consequence 3: Antigravity `SHARED CORE` delivery (F15) | Resolved by Lane C | **Line check attached:** In `AGENTS.md`, `SHARED CORE` is at lines 139–140. Antigravity delivered lines 1–329 (23,962 bytes). Lines 139–140 lie 189 lines before line 329. In Route C R2 (`C-005` line 70), Probe 1 cue C9 (`core3#html-comment`) scored `VISIBLE (exact)`. Antigravity demonstrably sees it. |

**2. Definitive reconciliation on `agy-customizations` (resolving F16)**
The apparent conflict between C-008 and §3.5 is reconciled by distinguishing the files within `C:\Users\rober_24syk4j\.gemini\antigravity\builtin\skills\agy-customizations\`:
- `docs/rules.md` (lines 31–38) documents the **24,000-byte per-file limit** (whole-line truncation) and the **20,000-token aggregate rules budget** (`defaultRulesBudget`). It does *not* document modular-rule triggers.
- Root manifest `SKILL.md` (lines 88–89) documents **modular-rule activation**: under "Progressive Disclosure (Skills and Rules)", *"Rules with `trigger: model_decision` behave similarly. Only `always_on` rules are loaded unconditionally."* Line 49 lists `.agents/rules/*.md` under project rule discovery paths.
- Thus, modular-rule activation via `always_on` is **Documented** in the installed package (`SKILL.md`), resolving F16 from `Unverified` to `Documented`.

**3. Clarification on "Receipt verified" (resolving F17)**
- In repository SOP (`D-278` / `SV-002` §2.3), "Receipt verified" denotes **raiser verification of Lane A's recording**: Lane B confirmed Lane A recorded `B-143` accurately (`D-309`); Lane C confirmed Lane A recorded `C-005`/`C-006` accurately (`D-308`).
- Substantive reviews are **Level 1** and **Level 2**, which are 100% cross-lane and independent:
  - Route A: L1 Lane B (`B-146`), L2 Lane C (`C-007`).
  - Route B: L1 Lane A (`D-293`), L2 Lane C (`C-004`).
  - Route C: L1 Lane A (`D-303`), L2 Lane B (`B-145`).
- Lane A should clarify the header to `"Raiser verified Lane A recording"` to prevent misinterpretation.

**4. Detachment of AI scratch reviews (resolving F18)**
- The appended "Independent References review" and the empty `# Indepedent EMS review` heading existed only in external review interchange scratchpads and were never committed to `SV-002.md`. They remain detached from governed documentation.

**5. Sizing cost note for the Judge (F19)**
- **Conservative single-total budget (< 24,000 bytes):** Requires cutting 7,920 bytes from `AGENTS.md` (31,920 down to 24,000), or 29,670 bytes if `graphify.md` (21,750 bytes) must also fit within that single total envelope (~55% cut).
- **Documented alternative (< 24,000 bytes per file, < 20,000 tokens aggregate):** Requires cutting 7,920 bytes from `AGENTS.md`; `graphify.md` already satisfies the 24 KB per-file cap; combined text (~45.7 KB / ~11,400 tokens) easily fits within the 20,000-token aggregate rules budget.

**6. Remediation options for the Judge**
None of these are applied yet (`D-266` item 2 prevents rule mutation during this phase). They are options for the Judge:

| §3.5 consequence | Option A: `always_on` | Option B: fold into `AGENTS.md` | Option C: generate from one source |
|---|---|---|---|
| 1. `graphify.md` never delivered | Addresses, if injection works | Only if placed before line 329 and other content is removed | Addresses |
| 2. Antigravity `AGENTS.md` tail cut | Not addressed | Worsens: adds bytes to a file already 7,958 over | Addresses if sized per tool |
| 3. `G53` hidden from Claude Code | Not addressed | Not addressed | Addresses if the rule is emitted outside a comment |
| 4. Codex 848-byte margin | Not addressed | Worsens | Addresses if sized per tool |
| 5. Skill paging | Not addressed | Not addressed | Not addressed |

Option C removes the root cause of `G53`: three hand-synced rule copies with no delivery test.

**7. Scoring checklist for re-measurement runs**
Success is a re-measurement, not a byte count:
- **Route C (`SV2-U02-C-R3`):** Preflight installed IDE and rule location; conversation store shows `graphify.md` block (if that design is chosen) and `AGENTS.md` block with no truncation marker; aggregate under budget; skill end cue appears after controlled load.
- **Route A:** `G53` text visible in Claude Code harness record.
- **Route B:** Unique tail delivered, with margin recorded.

**8. Housekeeping for Lane A**
- Submit §3.5 to the Judge under `D-314`, noting that the line check for consequence 3 and the documentation reconciliation for open causes are completed.
- Maintain the boundary: accepting `D-314` does not check `SV2-DOD-03`.

## What you did instead

Read-only review. No rule files, skills, application code, migrations or workflow files were modified (`D-266` item 2). Consolidated the submitted report, the EMS review, Lane B's `B-147`, and local documentation into this entry.

| Item | Verdict | Condition and follow-up phase |
|---|:---:|---|
| §3.5 Evidence Base & Triangulation | **Approve** | Routes A, B, and C receipts and two-level reviews verified (Gate 1B, P1) |
| Revised §3.5 (`D-315`) | **Approve** | Corrections 1, 2, 3, 5, 6 applied; consequence 3 line check attached; ready for Judge acceptance (Gate 1B, P1) |
| Appended "Independent References review" | **Not evidence** | Detached as scratch text (F18) |
| Open-cause resolution | **Documented** | Resolved via `agy-customizations`: 24 KB cap in `docs/rules.md`; `always_on` in `SKILL.md` (Gate 1B, P4 input) |
| Single-source rule generation | **Candidate** | Candidate for P4, not adopted; Judge decides (`D-266` item 2 freezes rules) |
| Checking `SV2-DOD-03` | **Not checked** | Not checked until remediation is selected, applied, and verified by fresh route runs (Gate 1B → Gate 2) |

---

## Appendix A: Recomputed figures

Inputs are as reported in §3.5. Arithmetic was recomputed independently.

| Check | Result |
|---|---|
| Delivered plus cut equals pin | 23,962 + 7,958 = 31,920 bytes (matches `AGENTS.md` pin) |
| Lines | 329 delivered + 122 cut (330 to 451) = 451 |
| Codex headroom | 32,768 − 31,920 = 848 bytes; 847 if harness newline is counted |
| Antigravity slack | 24,000 − 23,962 = 38 bytes, consistent with whole-line cutting if line 330 exceeds 38 bytes (Inferred) |
| Combined Antigravity rule text | 23,962 + 21,750 = 45,712 bytes, about 11,400 tokens at 4 bytes per token (Inferred), before global rules |
| Skill density | 70,373 / 1,353 = about 52 bytes per line (Inferred) |
| 12,000 characters in lines | about 230 lines |
| 800 lines in bytes | about 41,600 bytes |
| Trim to 12,000 characters | about 83% cut (characters against bytes) |
| Guarantee of 12,000 characters under 800 lines | 12,000 / 800 = 15 characters per line minimum average |
| Default "total under 24,000 bytes": cut needed | 31,920 − 24,000 = 7,920 bytes from `AGENTS.md` alone; 31,920 + 21,750 − 24,000 = 29,670 bytes if `graphify.md` must fit too |

## Appendix B: External source check on Antigravity

Third-party sources, checked 2026-09-28. Grade: Documented, low authority, corroboration only. The authoritative source remains the local `agy-customizations` docs.

- Extension changelog (`github.com/BoyGR/antigravity-customization-manager/releases`, entry 2026-09-19): describes a 24,000-byte per-file cap with line truncation warnings, a 20,000-token aggregate rules budget, and discovery of `.agents/rules/*.md`.
- Guide (`agentpedia.codes/blog/antigravity-agents-md-not-working-fix`): CLI parses `AGENTS.md` or `GEMINI.md` from active directory; Antigravity 2.0 directs workspace rules to `.agents/rules` and has activation modes.
- Conflict: other pages on same site (`/es/blog/antigravity-rules-examples`, `/pt/blog/user-rules`) name the directory `.agent/rules` (singular). If installed version uses singular name, `graphify.md` would be undiscovered (F10).

## Appendix C: Findings register

| ID | Finding | Grade | Disposition |
|---|---|---|---|
| F1 | "Each tool reads one rule file, and never the same one as both others" is false: Codex and Antigravity both read `AGENTS.md` | Measured (text read) | Applied (correction 1) |
| F2 | "12,000 characters (so under 800 lines)" treats two different limits as equal | Inferred (arithmetic) | Superseded by §3.5 wording (correction 2 withdrawn) |
| F3 | "Complete in substance" hides that the stripped comment carries `G53` | Measured (as reported, `D-312`) | Applied (correction 3) |
| F4 | "From 2026-09-15" is the earliest retained record, not the onset | Inferred | Applied in part (correction 4); spike date 2026-09-25 confirmed |
| F5 | Antigravity cap scope and `graphify.md` absence: cap is per file, crowd-out unlikely, `always_on` missing, discovery unmeasured | Documented / Inferred | Applied (correction 5); F16 resolved |
| F6 | "Total under 24,000 bytes" was stricter than needed and not scoped to Antigravity | Inferred | Applied as alternative (correction 6); see F19 |
| F7 | Codex margin is 848 bytes, or 847 with the harness newline | Recomputed | No change required |
| F8 | Independence of reviewers not shown; one run per route for A and B | Unverified | Limits (updated) |
| F9 | Appended AI analysis is not evidence and missed F1 and F2 | Measured (text read) | Withdrawn as input |
| F10 | Rules directory name conflicts across sources (`.agents/rules` against `.agent/rules`) | Unverified | Adopted in revised §3.5; R3 pre-check |
| F11 | Skill trim of about 83% has no feasibility check | Unverified | Sizing risk |
| F12 | Graphify path drift: absolute paths in `.graphify/manifest.json` and `.graphify/studio/graph.json` | Unverified | Runtime/ignored paths; no handoff entry |
| F13 | Receipts and two-level reviews reported verified in `D-314`, not re-verified | Unverified | Verdict table wording |
| F14 | Single-source generation is sound in design but rules are frozen by `D-266` item 2 | Inferred | Option C, P4 |
| F15 | Consequence 3 says Antigravity sees `SHARED CORE`, line check requested | Measured | Resolved: `AGENTS.md` lines 139–140 delivered before line 329; Probe 1 cue C9 scored `VISIBLE (exact)` |
| F16 | Disagreement on what installed `agy-customizations` says | Documented | Resolved: `docs/rules.md` (caps) vs `SKILL.md` (activation); both documented in package |
| F17 | "Receipt verified" names receipt's own lane for B and C | Inferred | Clarified: denotes raiser verification of Lane A recording; Level 1/2 are cross-lane |
| F18 | Second appended AI review: not evidence, cites unsupplied file, empty heading | Measured (text read) | Detached as scratch text |
| F19 | Cost of conservative total < 24 KB (7,920B vs 29,670B cut) | Recomputed | Documented in cost note for Judge |

## Appendix D: Unverified register

Not confirmed from the material available to this review:
- Tool versions: Claude Code 2.1.281, `codex-cli 0.158.0-alpha.2.1`, Antigravity IDE 2.5.5 / `Antigravity.exe` 2.17.0.
- Codex setting name `project_doc_max_bytes` and its 32 KiB default.
- Upstream update survival of external Graphify skill after 83% trim.

## Appendix E: Lexicon

| Term | Meaning here |
|---|---|
| Deliver | Text appears in the agent's context, proven by a transcript, rollout or conversation store |
| Load | The tool reads a file from disk. Loading does not prove delivery |
| Cut | Text removed by a size limit, marked by a truncation notice |
| Strip | Text removed by parsing (HTML comments in Claude Code) |
| Per-file cap | A limit applied to each rule file separately |
| Aggregate budget | One limit across all rule files combined |
| Crowd-out | A file dropped because other files used the budget |
| Paging | An agent reading a long file in chunks on demand |
| `always_on` | Frontmatter setting that makes a rule inject automatically |
| R3 | `SV2-U02-C-R3`, the next Route C run after remediation |
| Absorb | Take an entry's content into this one, with the original removed |
| Retired number | An entry number that will not be reused |
| Input, not a review level | Material used, but not an independent check |
