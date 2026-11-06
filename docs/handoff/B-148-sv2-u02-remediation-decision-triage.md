# B-148 — SV2-U02 remediation decision needs a rule inventory before design selection

- **Raised:** 2026-09-28 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** the separate `D-318` choice of no remediation or one bounded remediation, and any claim that `SV2-DOD-03` is met; read-only analysis may continue
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-28, read at `ead012a` (`D-319`). *(The "Acknowledged" previously on this line was written by the raiser, not by Lane A. Only the receiver writes this field.)* **Every figure is verified by Lane A's own byte count:** the 8,915/18,460/4,545/2,334/68/3,222 map, the 45,835 redundant bytes, the cut of 3,412 shared-core bytes plus 4,545 tail bytes plus one newline equalling 7,958, and `AGENTS.md` at 31,649 characters and `CLAUDE.md` at 402 lines. **Your central point is accepted:** `D-266` item 3's binding targets (`AGENTS.md` under 6,000 characters; `CLAUDE.md` under 300 lines inheriting `@AGENTS.md`) govern any fix. The accepted report's under-24,000-byte discussion did not address them. The Judge has chosen **option B, one bounded fix** (`D-319`), with its scope still to be defined. Your parent item, the read-only rule-unit triage, becomes the scope proposal Lane A prepares for the Judge's scope act. The freeze holds until that act.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent of Lane A's answer/application; scoped verification below
- **Evidence:** Independent verification of Lane A recording/application, scoped below; inherited evidence: `D-266`, `D-267`, `D-318`; `SV-002` §3.5 and §7; `AGENTS.md`, `CLAUDE.md`, `.agents/rules/graphify.md`; `C-005` and `B-147`; read-only byte inventory, `shared-core-hash.mjs`, and `bun run check`; [Codex AGENTS.md loading guide](https://learn.chatgpt.com/docs/agent-configuration/agents-md); external reviews as advisory input only
- **Verified-At-Commit:** 1a242890bc79a8d22a400c612d298afd0103ba0f

## What happened

`D-318` accepted the three-route loader report. It did **not** choose no remediation or a fix, explain `graphify.md` non-delivery, unfreeze the rule files, or check `SV2-DOD-03`. Two external analyses propose a small, generated shared core and a section-by-section triage first. Their recommendations are questions for the Judge, not execution authority. The accepted report measures delivery; it does not prove that an agent obeys delivered text.

**Read-only byte map at the pinned commit:**

| File | Repeated preamble | Identical shared block | Unique header/tail | Total |
|---|---:|---:|---:|---:|
| `AGENTS.md` | lines 1–138: 8,915 bytes | lines 139–381: 18,460 bytes | lines 382–451: 4,545 bytes | 31,920 |
| `CLAUDE.md` | lines 1–138: 8,915 bytes | lines 139–381: 18,460 bytes | lines 382–402: 2,334 bytes | 29,709 |
| `.agents/rules/graphify.md` | lines 1–6: 68 bytes | lines 7–249: 18,460 bytes | lines 250–296: 3,222 bytes | 21,750 |

The three files total 83,379 bytes. Two surplus copies of the 18,460-byte shared block use 36,920 bytes; the `AGENTS.md`/`CLAUDE.md` preambles are also byte-identical, adding 8,915 surplus bytes. Thus **45,835 bytes (55%) are redundant source copies**, not measured loader tokens. Generation or composition could prevent source drift but cannot itself cure truncation, comment stripping or non-activation.

**Cut location resolved, with a one-byte boundary:** Antigravity's measured 23,962-byte `AGENTS.md` block ends immediately before the newline after line 329. Source lines 330–381 contain 3,412 bytes of shared-core text; counting that undelivered newline gives 3,413 bytes within the shared-core span. The Codex-specific tail (lines 382–451) is another 4,545 bytes. Together these account for the measured 7,958-byte cut. Thus some shared-core instructions, not only the Codex tail, failed to reach Lane C. This location proof does not identify why `graphify.md` was absent.

`D-266` binds `AGENTS.md` below 6,000 **characters**, `CLAUDE.md` below 300 **lines** with `@AGENTS.md` inheritance, and skills below 12,000 **characters**. At this read, `AGENTS.md` has 31,649 characters and `CLAUDE.md` 402 lines: at least about 25,650 characters (81%) and 103 lines respectively must leave those files. The shared block alone spans 243 lines; three unique lane tails total 10,101 bytes. A 23,999-byte cut or deduplication alone cannot meet the targets. Lane A must identify where Lane B's essential automatic rules remain. The older ecosystem review's heuristic-cap, full-root-load, `GEMINI.md` reviewer and native Claude fallback claims are superseded by the Register and measured runs. `D-312` retires native Claude double-loading concern; explicit `@AGENTS.md` inheritance still consumes Claude context.

Codex's measured 848-byte margin is **repo-file arithmetic**, not proven aggregate headroom. Current Codex guidance applies a shared 32 KiB project budget across root-to-cwd instruction files, taking one file per directory; a same-directory `AGENTS.override.md` replaces `AGENTS.md`, while a nested one adds to the budget. No global Codex instruction file exists on this machine at this read, but the measured run's global and nested inventory was not pinned. Confirm the actual loaded-file set before using 848 bytes as a growth allowance. The existing consistency suite checks parity but has no explicit `D-266` size gate; its pass is not size compliance.

## What you need

1. **Parent — Lane A's read-only decision packet, before the Judge chooses a design (Gate 1B, P4).** Triage each rule unit across all three files: governing decision, consumer/owner, current delivery, consequence if absent, proposed **loading class** (shared automatic, lane-specific automatic, on-demand), projected bytes/characters/lines per loader, and observable test. Rank an **automatic floor** by consequence; identify where Lane B's essential automatic rules will live. For each demoted unit, specify how its activation will be triggered and proved; variable skill-read depth means delivery alone is insufficient. Keep loading class distinct from PRD/Fn Specs/SPECS tiers. Classify silence as dead, discovery failure, wrong owner, wrong loading class or unresolved before removal. Compare costs without selecting a design or creating another status tracker.
2. **Judge option A — no remediation (Gate 1B, P4).** Record the residual exposure explicitly: Claude Code lacks the comment-carried `G53`; Antigravity lacks 3,412 bytes of shared-core text plus the lane tail; `graphify.md` was not delivered; Codex has only 848 bytes of default margin. Explain how a no-fix choice reconciles or expressly amends `D-266`'s still-binding refactor and size targets, and what evidence could satisfy `SV2-DOD-03` despite those gaps. Do not call report acceptance itself that evidence.
3. **Judge option B — one bounded remediation (Gate 1B, P4).** Name exact files, owner, implementation boundary, size targets, diagnostic conditions and stop criteria. Compare generation, folding/activation and **composition**: `D-266` already specifies Claude's `@AGENTS.md` inheritance; a compact `AGENTS.md` plus Claude tail and graphify-only unique content could avoid copies, but feasibility depends on triage, preamble disposition, Lane B placement and Route C activation. The proposed 11,624-byte total assumes a 6,000-**byte** core, whereas `D-266` sets 6,000 **characters**, so it is an illustration, not a verified budget. `D-266` requires rule refactor, parity check and fixtures **atomically**; add an enforced character/line and delivered-byte budget check to `bun run check` in that unit. A `graphify.md` frontmatter edit alone could add another 18,460-byte copy to Route C. A copied-fixture diagnostic needs explicit Judge scope under the freeze and isolated IDE state. One physical `Active` lane and desktop run remain sequential.
4. **Child — proof after an authorized choice (Gate 1B, P4 → `SV2-DOD-03`).** Re-measure Routes A/B/C against pinned baselines, with record-level delivery tests and negative controls from `SV-002` §3.5. Test source parity deterministically; test **activation for every demoted rule unit** and adherence separately with harmless task probes. Do not edit a live core file merely to see if an agent notices. Independent review of any applied fix precedes `SV2-DOD-03`; `SV2-DOD-06` and a separate Judge act govern `V1-SM05` release.

## What you did instead

Read the accepted report, Register and two external analyses; verified file sizes and the exact cut boundary without changing the rule files. The attached reviewer’s offer to issue a v2 ecosystem file was not a user instruction and was not acted on. The full local `bun run check` passed 19/19 at `bcbcad4`, including `docs-drift` synced and `graph-coverage` complete. The graph is current for the existing governed docs. No rule file, skill, parity check, canonical document or product code was edited. This entry is the handoff for Lane A's decision preparation, not the remediation act.

| Item | Verdict | Condition and follow-up phase |
|---|:---:|---|
| Read-only rule inventory and byte-offset map | **Approve** | Lane A prepares the Judge's decision evidence without changing frozen rules (Gate 1B, P4) |
| No remediation | **Defer** | Judge must disposition the known delivery gaps and reconcile `D-266` targets before `SV2-DOD-03` (Gate 1B, P4) |
| One bounded remediation | **Approve-with-conditions** | Judge selects exact scope, owner and tests; Lane A applies atomically, then re-measures and obtains independent review (Gate 1B, P4) |
| Immediate live `always_on` edit, generator build or `SV2-DOD-03` checkoff | **Reject** | Freeze and separate Judge act still govern; later closure needs measured proof (Gate 1B → Gate 2) |

## Lane B independent source verification — 2026-10-03

**Read revision:** 1a242890bc79a8d22a400c612d298afd0103ba0f. **Actor:** Lane B (Codex), independent of the Lane A receiver/application. The Judge's request to resolve Lane A's incident selects this source annotation through B-154's committed delivery correction. This is source-lifecycle verification, distinct from any historical Level 1/Level 2 experiment.

**Observed comparison:** Compared Lane A's D-319 answer with its Register act and SV-002 §§3.6/3.6.6. The historical inventory and scope proposal are recorded, option B selects one bounded fix, and D-324 supplies the later composition scope. D-337 records the atomic rule-file/refactoring/check application: one AGENTS core, resolving CLAUDE import, GEMINI tail and rule-budget replacement. D-362 records later delivery-plus-review acceptance on the amended D-356 basis. These successive acts do not make the earlier proposal execution authority.

**Scope and surviving obligations:** Verified for accurate triage, scope-selection recording and named successor disposition. The historical raw byte inventory and loader probes are inherited, not freshly reproduced. Current rule-budget is checked separately with the final consistency suite. Activation/adherence follow-up and any new scope remain Phase 1 Judge-owned decisions under D-356.

Lane A's answer is preserved. The source header moves from Applied to Verified for this bounded disposition; earlier Applied/unverified wording remains dated history. Lane A must receive this result in the existing SV-002 review/clearance and applicable residual homes. No tracker cell, canonical requirement, lane state or work order changes in this commit. Verified source headers are inputs to reconciliation, not whole Gate 2 clearance.

| Verdict | Item | Follow-up phase |
|---|---|---|
| Approve | B-148 scoped source verification of Lane A's recording/application | Phase 1: Lane A receives the actual actor, revision, scope and source commit in the existing tracking homes |
| Defer | Surviving obligations and wider parent closure | Follow-up phase and owner stated above; Gate 2 and construction retain their separate prerequisites |

## Terminal annotation record

- **Current-Resolution:** Verified
- **Annotation-Type:** verification-evidence
- **Annotation-Act:** Judge's 2026-10-03 Lane A incident-remediation request; B-154 delivery correction at 1a242890bc79a8d22a400c612d298afd0103ba0f; Lane B independent verification under D-364 item 4
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 1a242890bc79a8d22a400c612d298afd0103ba0f
