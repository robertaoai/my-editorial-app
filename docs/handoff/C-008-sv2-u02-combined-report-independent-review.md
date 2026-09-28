# C-008 — Lane C independent review of SV2-U02 combined loader report (§3.5 / D-314)

- **Raised:** 2026-09-28 by Lane C
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, reporting only; input to the Judge's acceptance of SV-002 §3.5 and subsequent remediation planning
- **Receiver:** Lane A
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane C
- **Evidence:** `SV-002` §3.5 (`D-314`); external EMS framework review (input, not a review level); `~/.gemini/antigravity/builtin/skills/agy-customizations/docs/rules.md`
- **Verified-At-Commit:** 45a702154d3b8691ad034bcc9a7c11de22fec159
- **Absorbs:** C-009 and C-010 (withdrawn before acceptance)

## What happened

This entry absorbs the content of two entries raised on 2026-09-28 and withdrawn before acceptance (C-009, C-010). Their numbers are retired. Originally raised at `570fc1a`; revised at `45a7021`. One finding from the withdrawn C-009, local graphify path drift, is out of scope for the loader decision and is tracked separately.

Lane C conducted an independent technical review of the `SV2-U02` combined loader report submitted by Lane A in `SV-002` §3.5 under `D-314`. This review consolidates the submitted report, an external EMS framework review (input, not a review level), and Lane C's reading of the Antigravity customization documentation, grading evidence strictly to resolve contradictions.

**Evidence Grades:**
- **Measured:** Shown by a run, transcript or conversation store.
- **Documented:** Stated by tool documentation, not yet run.
- **Inferred:** Concluded from other facts.
- **Unverified:** Cannot be checked from the supplied material.

**Limits (Unverified):** §3.5 asserts independent review, but independence between lanes is not shown. Routes A and B have one run each; Route C has R1 (inconclusive) and R2. Run-to-run variation is untested for A and B.

## What you need

**1. Corrections to §3.5 before acceptance**
Lane A must apply six corrections to §3.5 before it can be accepted by the Judge:
1. **Item 1:** Rewrite to: *"No single rule file is read by all three tools. Claude Code automatically reads `CLAUDE.md`; Codex and Antigravity automatically read `AGENTS.md`. No tool automatically reads `.agents/rules/graphify.md`, the file the lane table names as Lane C's rule file. Its Lane C tail ('You are Lane C…') reaches no agent."*
2. **Skill target:** Rewrite to: *"Trim the external Graphify skill below 12,000 characters (`D-266` item 3), which also keeps it inside the 800-line window (Documented via agy-customizations), as §3.1 already plans after measurement."*
3. **Claude Code completeness:** Rewrite to: *"Complete except one 187-byte HTML comment run (lines 139 to 141) that carries the `G53` rule, and the final newline."* (Measured: as reported in `D-312`; line check not attached).
4. **Truncation date:** Rewrite to: *"Every retained session (earliest 2026-09-15) shows the cut, so it predates SETUP-SPIKE-000 (2026-09-25). Onset date is unknown."* (Measured).
5. **Open causes:** Restate as: *"Antigravity limits are Documented: 24,000 bytes per file and 20,000 tokens aggregate. The cut at line 329 is Measured. `AGENTS.md` (23,962 delivered) plus `graphify.md` (21,750) is 45,712 bytes, about 11,400 tokens at an assumed 4 bytes per token (Inferred), before any global rules. Crowd-out looks unlikely (Inferred). `graphify.md` has frontmatter without `always_on` (Measured by file read), so it is not injected (Documented). Discovery is unmeasured; test at R3."*
6. **Remediation inputs:** Replace "total under 24,000 bytes" with *"each file Antigravity loads under 24,000 bytes, aggregate under 20,000 tokens"*. Keep consequences 3 to 5 as their own input bullets.

**2. Remediation options for the Judge**
None of these are applied yet (`D-266` item 2 prevents rule mutation during this phase). They are options for the Judge:

| §3.5 consequence | Option A: `always_on` | Option B: fold into `AGENTS.md` | Option C: generate from one source |
|---|---|---|---|
| 1. `graphify.md` never delivered | Addresses, if injection works | Only if placed before line 329 and other content is removed | Addresses |
| 2. Antigravity `AGENTS.md` tail cut | Not addressed | Worsens: adds bytes to a file already 7,958 over | Addresses if sized per tool |
| 3. `G53` hidden from Claude Code | Not addressed | Not addressed | Addresses if the rule is emitted outside a comment |
| 4. Codex 848-byte margin | Not addressed | Worsens | Addresses if sized per tool |
| 5. Skill paging | Not addressed | Not addressed | Not addressed |

**3. Sizing risk**
Trimming the external skill from 70,373 bytes to 12,000 characters is an approximate 83% cut. Feasibility and upstream update survival are unchecked. (Unverified).

**4. Scoring Checklist for Re-measurement Runs**
Success is a re-measurement. The rechecks must be split by route:
- **Route C (`SV2-U02-C-R3`):**
  - `graphify.md` block present in the conversation store.
  - No truncation marker in the `AGENTS.md` block.
  - Aggregate under budget.
  - External Graphify skill read completely, or under 800 lines.
- **Route A:**
  - `G53` text visible in the Claude Code transcript.
- **Route B:**
  - Codex tail present, with its margin recorded.

## What you did instead

Read-only review. No rule files, skills, application code, migrations or workflow files were modified (`D-266` item 2). Consolidated the submitted report, the EMS review as an input, and graded evidence into this entry.

| Item | Verdict | Condition and follow-up phase |
|---|:---:|---|
| §3.5 Evidence Base & Triangulation | **Approve** | Reported as verified in `D-314`; not re-verified here (Gate 1B, P1) |
| Report Acceptance under `D-314` | **Approve-with-conditions** | Condition: Lane A applies all six corrections to §3.5 listed above before Judge acceptance (Gate 1B, P1) |
| Open-cause resolution | **Partially resolved** | Approved as Documented/Inferred; discovery remains unmeasured (Gate 1B, P4 input) |
| Single-source rule generation | **Candidate** | Candidate for P4, not adopted; Judge decides (`D-266` item 2 freezes rules) |
| Checking `SV2-DOD-03` | **Not checked** | Not checked until remediation is selected, applied, and verified by fresh route runs |
