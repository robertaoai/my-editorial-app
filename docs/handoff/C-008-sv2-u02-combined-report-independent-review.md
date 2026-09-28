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
- **Evidence:** `SV-002` §3.5 (`D-314`); `~/.gemini/antigravity/builtin/skills/agy-customizations/docs/rules.md`; external EMS framework review (input, not a review level), kept in full in Appendices A to D of this file
- **Verified-At-Commit:** ebbe012c623e9de557b2a22286fc649b15fd9354
- **Absorbs:** C-009 and C-010 (withdrawn before acceptance)

## What happened

This entry absorbs the content of two entries raised on 2026-09-28 and withdrawn before acceptance (C-009, C-010). Their numbers are retired. Originally raised at `570fc1a`; revised at `45a7021`. All evidence from the review is kept in this file, so Lane A needs no other document.

Lane C conducted an independent technical review of the `SV2-U02` combined loader report submitted by Lane A in `SV-002` §3.5 under `D-314`. The review consolidates the submitted report, an external EMS framework review (input, not a review level), and Lane C's reading of the Antigravity customization documentation, and grades every claim.

**Evidence grades:**
- **Measured:** Shown by a run, transcript or conversation store.
- **Documented:** Stated by tool documentation, not yet run.
- **Inferred:** Concluded from other facts.
- **Unverified:** Cannot be checked from the supplied material.

**Provenance (Unverified):** the internal identifiers (`D-266` to `D-314`, `B-*`, `C-*`) and raw records could not be resolved by the EMS review, so every measured claim is "as reported". The text submitted for review also contained an appended AI analysis with expired signed links. It is not evidence, and its verdict of "internally coherent" is withdrawn because it missed findings F1 and F2 (Appendix C).

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

Option C also removes the root cause of `G53`: three hand-synced rule copies with no delivery test. Option A alone leaves consequences 2 to 5 open.

**3. Sizing risk**
The external skill is 70,373 bytes over 1,353 lines (about 52 bytes per line, Inferred). At that density 12,000 characters is about 230 lines and 800 lines is about 41,600 bytes, so the two limits are compatible, not equivalent (Appendix A). Trimming to 12,000 characters is an approximate 83% cut (characters against bytes, so approximate). Feasibility and upstream update survival are unchecked. (Unverified).

**4. Scoring checklist for re-measurement runs**
Success is a re-measurement, not a byte count. The rechecks must be split by route.
- **Before R3 (Unverified, see F10):** confirm the rules directory name for the installed Antigravity version, and record which surface ran (IDE or CLI).
- **Route C (`SV2-U02-C-R3`):**
  - `graphify.md` block present in the conversation store.
  - No truncation marker in the `AGENTS.md` block.
  - Aggregate under budget.
  - External Graphify skill read completely, or under 800 lines.
- **Route A:**
  - `G53` text visible in the Claude Code transcript.
- **Route B:**
  - Codex tail present, with its margin recorded.

**5. Housekeeping for Lane A**
- Acknowledge this entry and submit the corrected §3.5 to the Judge under `D-314`.
- Confirm no other file references C-009 or C-010 (search the repository and rewrite any hit to C-008).
- Raise the graphify path-drift finding (F12) as a separate entry. It is not yet filed.
- Keep the boundary: accepting `D-314` does not check `SV2-DOD-03`.

## What you did instead

Read-only review. No rule files, skills, application code, migrations or workflow files were modified (`D-266` item 2). Consolidated the submitted report, the EMS review as an input, and graded evidence into this entry.

| Item | Verdict | Condition and follow-up phase |
|---|:---:|---|
| §3.5 Evidence Base & Triangulation | **Approve** | Reported as verified in `D-314`; not re-verified here (Gate 1B, P1) |
| Report Acceptance under `D-314` | **Approve-with-conditions** | Condition: Lane A applies all six corrections to §3.5 listed above before Judge acceptance (Gate 1B, P1) |
| Open-cause resolution | **Partially resolved** | Approved as Documented/Inferred; discovery remains unmeasured (Gate 1B, P4 input) |
| Single-source rule generation | **Candidate** | Candidate for P4, not adopted; Judge decides (`D-266` item 2 freezes rules) |
| Checking `SV2-DOD-03` | **Not checked** | Not checked until remediation is selected, applied, and verified by fresh route runs |

---

## Appendix A: Recomputed figures

Inputs are as reported in §3.5. The arithmetic was recomputed independently.

| Check | Result |
|---|---|
| Delivered plus cut equals the pin | 23,962 + 7,958 = 31,920 bytes (matches `AGENTS.md` pin) |
| Lines | 329 delivered + 122 cut (330 to 451) = 451 |
| Codex headroom | 32,768 − 31,920 = 848 bytes; 847 if the harness newline is counted |
| Antigravity slack | 24,000 − 23,962 = 38 bytes, consistent with whole-line cutting if line 330 exceeds 38 bytes (Inferred) |
| Combined Antigravity rule text | 23,962 + 21,750 = 45,712 bytes, about 11,400 tokens at 4 bytes per token (Inferred), before global rules |
| Skill density | 70,373 / 1,353 = about 52 bytes per line (Inferred) |
| 12,000 characters in lines | about 230 lines |
| 800 lines in bytes | about 41,600 bytes |
| Trim to 12,000 characters | about 83% cut (characters against bytes) |

## Appendix B: External source check on Antigravity

Third-party sources, checked 2026-09-28. Grade: Documented, low authority, corroboration only. The authoritative source remains the local `agy-customizations` docs.

- Extension changelog (`github.com/BoyGR/antigravity-customization-manager/releases`, entry 2026-09-19): describes a 24,000-byte per-file cap with line truncation warnings, a 20,000-token aggregate rules budget, and discovery of `.agents/rules/*.md`.
- Guide (`agentpedia.codes/blog/antigravity-agents-md-not-working-fix`): the CLI parses `AGENTS.md` or `GEMINI.md` from the active directory; Antigravity 2.0 directs workspace rules to `.agents/rules` and has activation modes.
- Conflict: other pages on the same site (`/es/blog/antigravity-rules-examples`, `/pt/blog/user-rules`) name the directory `.agent/rules` (singular). If the installed version uses the singular name, `graphify.md` would be undiscovered (F10). This is the one open path to "never discovered".
- Not accepted: claims on those pages that other tools also read `AGENTS.md`. Irrelevant here and unverified.

## Appendix C: Findings register

| ID | Finding | Grade | Disposition |
|---|---|---|---|
| F1 | "Each tool reads one rule file, and never the same one as both others" is false: Codex and Antigravity both read `AGENTS.md` | Measured (text read) | Correction 1 |
| F2 | "12,000 characters (so under 800 lines)" treats two different limits as equal | Inferred (arithmetic) | Correction 2 |
| F3 | "Complete in substance" hides that the stripped comment carries `G53` | Measured (as reported, `D-312`) | Correction 3 |
| F4 | "From 2026-09-15" is the earliest retained record, not the onset | Inferred | Correction 4 |
| F5 | Antigravity cap scope and `graphify.md` absence: cap is per file, crowd-out unlikely, `always_on` missing, discovery unmeasured | Documented / Inferred | Correction 5 |
| F6 | "Total under 24,000 bytes" was stricter than needed and not scoped to Antigravity (`CLAUDE.md` is 29,709 bytes and Codex allows 32 KiB) | Inferred | Correction 6 |
| F7 | Codex margin is 848 bytes, or 847 with the harness newline | Recomputed | No change required |
| F8 | Independence of reviewers not shown; one run per route for A and B | Unverified | Limits |
| F9 | Appended AI analysis is not evidence and missed F1 and F2 | Measured (text read) | Withdrawn as input |
| F10 | Rules directory name conflicts across sources (`.agents/rules` against `.agent/rules`) | Unverified | R3 pre-check |
| F11 | Skill trim of about 83% has no feasibility check | Unverified | Sizing risk |
| F12 | Graphify path drift: absolute paths in `.graphify/manifest.json` and `.graphify/studio/graph.json`; the directory is gitignored, so it is local drift; the proposed fix `graphify hook-rebuild` is not confirmed to exist | Unverified | Separate entry, not yet filed |
| F13 | Receipts and two-level reviews reported verified in `D-314`, not re-verified | Unverified | Verdict table wording |
| F14 | Single-source generation is sound in design but rules are frozen by `D-266` item 2 | Inferred | Option C, P4 |

## Appendix D: Unverified register

Not confirmed from the material available to this review:
- Tool versions: Claude Code 2.1.281, `codex-cli 0.158.0-alpha.2.1`, Antigravity IDE 2.5.5 / `Antigravity.exe` 2.17.0.
- Claude Code stripping HTML block comments and not reading `AGENTS.md` natively.
- Codex setting name `project_doc_max_bytes` and its 32 KiB default; Codex delivering `AGENTS.md` as a user-role message.
- Lines 139 to 141 being the `SHARED CORE` comment (`D-312`, line check not attached).
- `D-266` item 3 wording, and the 12,000-character skill limit.
- The `agy-customizations` documentation contents, and `graphify.md` frontmatter lacking `always_on`.
- The existence of `graphify hook-rebuild`.

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
