# B-130 — Review of proposed C-002 agent-instruction handoff

- **Raised:** 2026-09-24 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, reporting only; Lane A should review this before treating the external C-002 draft as a repository handoff
- **Status:** Answered
- **Lane A:** Acknowledged 2026-09-24. Rule-file sizes re-read at `c82eb5e` and match item 1
  (`AGENTS.md` 31,920 B, `CLAUDE.md` 29,709 B, `.agents/rules/graphify.md` 21,750 B). B-130 is
  accepted as the canonical repository record of the external C-002 draft, which stays advisory
  and unfiled; Lane C's concurrence is noted as evidence, not as acknowledgement. Whether to
  commission a bounded instruction-loader correction is a Judge decision and is not yet taken —
  no loader, rule-file, check or skill change is authorized by this acknowledgement (`D-183`).
  *(Superseded the same day: the entry was answered by `D-257` below; normalized 2026-09-24, `D-259`.)*

  **Answered 2026-09-24 (`D-257`).** At the Judge's delegation, Lane A determined that the finding **warrants** a bounded loader-characterization spike: measurement only (loaded file set, per-file or total limits and their source, visible rule text); Antigravity first; no rule-file, check, skill or workflow change. It is **recorded, not commissioned**: it does not block `V1-SM05`, and the Judge selects it at a Sprint boundary, when its packet is created. Instruction-architecture redesign stays deferred until that report exists.

  **Resolution recorded 2026-09-24 (`D-259`).** `D-257` found the loader-characterization spike warranted and
  did not commission it; the finding is therefore deferred, not applied.
- **Resolution:** Deferred
- **Follow-up-Tier:** Judge commission of `D-257`'s bounded loader-characterization spike — its work packet is created on selection
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** read `docs/handoff/TEMPLATE.md` and `README.md`; `V1-PHASE-CLOSURE.md` §5; `V1-BUILD-SPEC.md` §1; `shared-core-hash.mjs`; `sync-docs-uniqueness.mjs`; the three current rule files; `Modular_PRD.md` §8; storyboard Panels A9/A10; `FN-GATES-01-05.md` §4.1; `requirements-traceability-map.md` §1; `ENCYCLOPEDIA-SYNC.md` against the commit below. External C-002 draft and Lane C's subsequent reconciliation read from the user-supplied Antigravity brain path; neither is in this repository.
- **Verified-At-Commit:** c82eb5e9154ef722a8ec333c38b1e110f99a8555

## What happened

The user supplied an external draft titled `C-002 — Consolidated Architectural Review: Multi-Lane Framework, Transclusion, and Antigravity Native Limits` and asked for consolidation and cross-artifact review before Lane A handoff. The draft correctly identifies the repository's Lane A/B/C ownership map (`D-75`, `D-227`) and the risk of changing one agent's instructions without the others (`G53`). It has not been filed as `docs/handoff/C-002-*.md`; Lane B cannot file or amend a Lane C entry.

The draft blends observations, unverified tool-loader claims and proposed decisions. These need to be separated before Lane A acts:

1. **Observed repository facts.** `AGENTS.md` is 31,920 bytes, `CLAUDE.md` is 29,709 bytes, and `.agents/rules/graphify.md` is 21,750 bytes at the read commit. The shared-core region in `graphify.md` alone is about 18,320 characters (18,460 UTF-8 bytes). `shared-core-hash.mjs` requires matching shared-core text across all three current files and separately compares the `CLAUDE.md`/`AGENTS.md` preambles. It has no import expansion. A bare `@AGENTS.md` replacement would therefore fail the current check. The draft's earlier 31,649-byte `AGENTS.md` count is a historical observation, not the present file size.
2. **Reported external observation, not independently reproduced here.** The pasted Antigravity session reportedly displayed `[truncated 7920 bytes]` after loading `AGENTS.md`. That supports a truncation concern for that session; it does not establish a universal 12,000-character limit, identify which loader imposed it, or prove that every `.agents/rules/` file has the same limit. The exact Antigravity transcript and a before/after loader test are not available in this repository. Google's Antigravity getting-started codelab documents workspace rules in `.agents/rules/`, a *global* `~/.gemini/GEMINI.md`, and workspace skills in `.agents/skills/`; it does not establish the draft's proposed root-workspace `GEMINI.md` behavior or the asserted cap: https://codelabs.developers.google.com/getting-started-agy-ide .
3. **A proposed split is not executable as stated.** Splitting `graphify.md` into two files under 12,000 characters while preserving its current 18,320-character shared core in one file is impossible. Merely moving its tail to another file would leave the shared core above the asserted cap. Removing or distributing that core changes the parity contract and requires Lane A to design and update Check 1, its fixtures, and the three rule entrypoints together before claiming equal governance reach. A directory-wide loader may also load both new rules, so splitting does not by itself reduce total instructions presented to Antigravity.
4. **The skill check was overstated.** `scripts/checks/sync-docs-uniqueness.mjs` checks only `sync-docs/SKILL.md`: it requires the canonical `.claude/skills/sync-docs/SKILL.md` and rejects duplicate files with that exact skill name. It does not prohibit all distinct `.agents/skills/` packages. Any new skill still belongs to Lane A's `.agents/` surface and needs an ordinary ownership and duplication review.
5. **The script verdict was overstated.** A Lane C script that overwrites Lane A files would cross the lane boundary. A script written and run by authorized Lane A is not inherently prohibited by `D-84`; the control question is whether its output preserves the governed text, propagation and checks. Reject the proposed blind overwrite behavior, not scripts as a class.
6. **The proposed C-002 header is incomplete.** For an open `finding`, the current handoff SOP requires `Verified-By` in the raised-not-dispositioned form and `Verified-At-Commit` naming an existing commit. The external draft omits both. Its `Verdict` table is analysis, not a Register Judge act or construction authority (`D-183`, `D-186`).

## Cross-artifact review

| Artifact | Review result for this agent-instruction issue |
|---|---|
| `docs/Modular_PRD.md` | Product requirements and §8 sprint tracking are unaffected. No sprint completes, tier opens, FR/AC changes or Product-scope fact follows from the reported loader issue. State this explicitly in any later `D-54` applicability table. |
| Storyboard and story panels | Panels A9/A10 describe business-stage ranking and LinkedIn `ManualReady` flows. They do not describe development-agent instruction loading. Unaffected; no panel or user journey should be redrawn for C-002. |
| UML-style and data-flow views | `FN-GATES-01-05.md` §4.1 names the storyboard Mermaid sequences/flowcharts as the views and rejects duplicate standalone UML/data-flow artifacts. Those views are unaffected. |
| Encyclopedia | `ENCYCLOPEDIA-SYNC.md` says the hosted Encyclopedia is outside the repository and cannot be diffed here. Its ledger maps entries to product/governance facts, not the three agent-loader files. No content edit is indicated by this finding; hosted text has not been reviewed, so do not claim it was verified. |
| Requirements cross-reference | `requirements-traceability-map.md` relates customer demand to Product requirements. This is a development-instruction delivery concern, with no new customer requirement. No CR/FR/AC mapping changes. |
| V1 register, build spec, inventory | A Lane A decision that creates or retires rule/check/skill artifacts must be recorded and propagated per `D-54` into all three tracking files. This finding itself creates no governed artifact or authorized work unit. |

## What you need

Lane A should acknowledge the finding, then decide whether to commission a bounded instruction-loader correction. If so, first reproduce the reported truncation with the actual Antigravity loader and record the exact source, per-file limit (if any), loaded-file set and resulting instruction text. Then choose an instruction architecture that demonstrably preserves Lane A/B/C governance reach, update its checker and fixtures in the same pass, and apply `D-54` to any created, sequenced or retired artifact. `GEMINI.md`, `@AGENTS.md` transclusion and task-specific skill migration are separate options, not prerequisites established by this review. The product artifacts above are unaffected unless a later decision changes product behavior.

## Lane C reconciliation received

Lane C subsequently accepted the size constraint, the corrected scope of `sync-docs-unique`, the refined script-policy finding and B-130 as the repository handoff for Lane A. Lane C also retained the external C-002 analysis as advisory rather than executable authority and agreed that loader changes require reproduction before implementation.

This concurrence strengthens the evidence but does not acknowledge, answer, independently verify or disposition B-130: those lifecycle acts remain with Lane A and the handoff SOP. It also does not turn the hosted Encyclopedia into reviewed evidence. The repository ledger indicates no affected entry from this instruction-delivery finding, while the hosted artifact itself remains unread in this pass.

## What you did instead

Lane B reviewed the supplied C-002 text and current repository evidence, recorded corrections in its own handoff channel, and made no changes to Lane A's rule files, scripts or governed documents, or to Lane C's workflows. Lane B did not represent the external C-002 draft as a filed or accepted repository entry.
