# B-148 — SV2-U02 remediation decision needs a rule inventory before design selection

- **Raised:** 2026-09-28 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** the separate `D-318` choice of no remediation or one bounded remediation, and any claim that `SV2-DOD-03` is met; read-only analysis may continue
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `D-266`, `D-267`, `D-318`; `SV-002` §3.5 and §7; `AGENTS.md`, `CLAUDE.md`, `.agents/rules/graphify.md`; `C-005` and `B-147`; read-only byte inventory and `bun run check` at the pinned commit; external ecosystem and governance reviews as advisory input only
- **Verified-At-Commit:** bcbcad44b7a9a2bdd7e8661f107142d89810fe31

## What happened

`D-318` accepted the three-route loader report. It did **not** choose no remediation or a fix, explain `graphify.md` non-delivery, unfreeze the rule files, or check `SV2-DOD-03`. Two external analyses propose a small, generated shared core and a section-by-section triage first. Their recommendations are questions for the Judge, not execution authority. The accepted report measures delivery; it does not prove that an agent obeys delivered text.

**Read-only byte map at the pinned commit:**

| File | Repeated preamble | Identical shared block | Unique header/tail | Total |
|---|---:|---:|---:|---:|
| `AGENTS.md` | lines 1–138: 8,915 bytes | lines 139–381: 18,460 bytes | lines 382–451: 4,545 bytes | 31,920 |
| `CLAUDE.md` | lines 1–138: 8,915 bytes | lines 139–381: 18,460 bytes | lines 382–402: 2,334 bytes | 29,709 |
| `.agents/rules/graphify.md` | lines 1–6: 68 bytes | lines 7–249: 18,460 bytes | lines 250–296: 3,222 bytes | 21,750 |

The three files total 83,379 bytes; the identical shared block occupies 55,380 bytes across them. Two copies beyond one are 36,920 repository bytes. These are **source-file** duplication figures, not measured loader tokens or automatically delivered bytes. Generating files from one source could prevent source drift, but cannot by itself stop a loader truncating, stripping comments or failing to activate a file.

**Cut location resolved, with a one-byte boundary:** Antigravity's measured 23,962-byte `AGENTS.md` block ends immediately before the newline after line 329. Source lines 330–381 contain 3,412 bytes of shared-core text; counting that undelivered newline gives 3,413 bytes within the shared-core span. The Codex-specific tail (lines 382–451) is another 4,545 bytes. Together these account for the measured 7,958-byte cut. Thus some shared-core instructions, not only the Codex tail, failed to reach Lane C. This location proof does not identify why `graphify.md` was absent.

`D-266` makes `AGENTS.md` below 6,000 **characters**, `CLAUDE.md` below 300 **lines**, and skills below 12,000 **characters** binding design targets. Current `AGENTS.md` is about 31,600 characters and `CLAUDE.md` has 402 lines; they are not current compliance claims. Cutting `AGENTS.md` only to 23,999 bytes, or deduplicating without reclassifying content, cannot establish those targets. The attached ecosystem review labels the caps heuristic and says root files load in full; those claims describe an earlier proposal and conflict with the later Register and observed Antigravity cut. Its `GEMINI.md` reviewer role and Claude Code native `AGENTS.md` fallback are not current measured roles. `D-312` retires double-loading concern for the pinned Claude Code run; any future explicit `@AGENTS.md` import needs its own budget check.

## What you need

1. **Parent — Lane A's read-only decision packet, before the Judge chooses a design (Gate 1B, P4).** Triage each instruction section or smaller rule unit across all three files. For each, record: governing source/decision; intended consumer and owner; current automatic delivery evidence; consequence if absent; candidate **loading class** (shared automatic, lane-specific automatic, on-demand procedure); source bytes plus projected per-loader bytes, characters and lines; and an observable test. Keep *loading class* distinct from the project's PRD/Fn Specs/SPECS authority tiers. Classify silence as dead, discovery failure, wrong owner, wrong loading class or unresolved before any removal. The packet should compare viable designs and costs without selecting one, and should not become a second status tracker.
2. **Judge option A — no remediation (Gate 1B, P4).** Record the residual exposure explicitly: Claude Code lacks the comment-carried `G53`; Antigravity lacks 3,412 bytes of shared-core text plus the lane tail; `graphify.md` was not delivered; Codex has only 848 bytes of default margin. Explain how a no-fix choice reconciles or expressly amends `D-266`'s still-binding refactor and size targets, and what evidence could satisfy `SV2-DOD-03` despite those gaps. Do not call report acceptance itself that evidence.
3. **Judge option B — one bounded remediation (Gate 1B, P4).** Name the exact files, owner, implementation boundary, size targets, diagnostic conditions and stop criteria. `D-266` requires the in-repo rule-file refactor together with the parity check and fixtures **atomically**. A single-source generator is a distribution design candidate, not a new source of governance authority; the Register and frozen governing documents keep their precedence. Avoid treating a `graphify.md` frontmatter change alone as a complete fix: if it loads, it may add another 18,460-byte shared block to Route C before any budget interaction is measured. A copied-fixture Route C probe may be proposed as a separately bounded diagnostic, but whether it falls outside the freeze and how its installed-IDE state is isolated need the Judge's explicit scope. One physical `Active` lane and desktop run remain sequential.
4. **Child — proof after an authorized choice (Gate 1B, P4 → `SV2-DOD-03`).** Re-measure Routes A/B/C against pinned baselines, with record-level delivery tests and negative controls from `SV-002` §3.5. Test deterministic source synchronization in a parity-check fixture; test agent adherence separately with a harmless task probe. Do not edit a live core file merely to see if an agent notices. Independent review of any applied fix precedes the `SV2-DOD-03` assessment; `SV2-DOD-06` and a separate Judge act govern `V1-SM05` release.

## What you did instead

Read the accepted report, Register and two external analyses; verified file sizes and the exact cut boundary without changing the rule files. The attached reviewer’s offer to issue a v2 ecosystem file was not a user instruction and was not acted on. The full local `bun run check` passed 19/19 at `bcbcad4`, including `docs-drift` synced and `graph-coverage` complete. The graph is current for the existing governed docs. No rule file, skill, parity check, canonical document or product code was edited. This entry is the handoff for Lane A's decision preparation, not the remediation act.

| Item | Verdict | Condition and follow-up phase |
|---|:---:|---|
| Read-only rule inventory and byte-offset map | **Approve** | Lane A prepares the Judge's decision evidence without changing frozen rules (Gate 1B, P4) |
| No remediation | **Defer** | Judge must disposition the known delivery gaps and reconcile `D-266` targets before `SV2-DOD-03` (Gate 1B, P4) |
| One bounded remediation | **Approve-with-conditions** | Judge selects exact scope, owner and tests; Lane A applies atomically, then re-measures and obtains independent review (Gate 1B, P4) |
| Immediate live `always_on` edit, generator build or `SV2-DOD-03` checkoff | **Reject** | Freeze and separate Judge act still govern; later closure needs measured proof (Gate 1B → Gate 2) |
