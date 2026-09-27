# B-145 — Lane B Level 2 review of Route C R2 (`SV2-U02-C-R2`)

- **Raised:** 2026-09-28 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** Lane A recording of the Route C Level 2 result and its use in the combined `SV2-U02` report; does not by itself check `SV2-DOD-03` or unblock `V1-SM05`
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `SV-002` §3.1/§3.2/§3.4; `D-294`, `D-301`–`D-305`, `D-308`; `C-005`, `C-006`; the pinned Route C R2 kit, fresh scorer outputs, and read-only conversation-database comparison detailed below; read at the commit below
- **Verified-At-Commit:** 8613ec7f261915c9c6f88dd0d4b9f432c8f644f5

## What happened

Lane B independently reviewed Lane C's `C-005` receipt after Lane A's Level 1 re-score and the Judge's `D-294` diagnostic rule. Route C R2 remains filed under the now independently verified Route B R1 parent (`B-143`, `8613ec7`). Lane C has separately verified its own `C-005` and `C-006` receipts as raiser (`D-308`); that lifecycle act does not substitute for this §3.1 Level 2 review.

### Evidence and controls

The external R2 kit at `C:\Users\rober_24syk4j\sv2-route-c-r2-kit\` remains outside the repository. Lane B read it **after** the probe. Its pinned `score.mjs` is SHA-256 `47e32c79ca8fdf6a9d3b92508fa9437b48f3bdc70fadf359ffd495b0edf2f05f`; `selftest.mjs` is `2f5d6daed58f2732747a0fee3fe71cebd17740865e594a5b4fc153a2f41457a8`. The scorer's nine synthetic self-tests passed when child-process execution was permitted. An initial sandboxed invocation reported 0/9 because its child scorer processes could not run; the same pinned script and kit were unchanged for the successful run.

`answers-1.txt` hashes to `1ef8185730b52fcd45dd3092d9e3826d92d47a96aabe2cf7d7a9592f39de239b`; `answers-2.txt` to `1dc220d13f900b4498a095cdba201397fffaba9641c3124203130e5b4393dec8`; and the 58,025-byte `transcript_full.jsonl` to `c9470a1b800e23d8a9cdb31538ec75a9102aec57fc6db3b6c5da9c4290da9135`. Lane B reran the pinned scorer on both answer files and that transcript outside the probe conversation. Its Probe 1 output is **byte identical** to the saved 4,108-byte score (SHA-256 `378c85238ea47895b6d27523af09b21dcdba48a23302557a0e759ef70c785ce2`); Probe 2 is **byte identical** to the saved 2,261-byte score (`3cacba4a834d79fa0494494a826c7f900819d0cbe948ea9c9e67848ee10fc474`). Both outputs end with the §3.4 classification instruction.

The current `AGENTS.md`, `CLAUDE.md`, `.agents/rules/graphify.md`, `docs/PRD.md` and external Graphify `SKILL.md` still match the `D-276`/`D-301` SHA-256 pins. The transcript shows no tool call before or within Probe 1; the `docs/PRD.md` negative-control cues are not quoted. Probe 2's load and quote steps are separate messages; exactly one permitted `view_file` call occurs during loading, and none in the quote window.

### Probe 1 — harness record decides

The transcript-only scorer reports no injected rule block **in the transcript**. Lane B therefore read the R2 host database `~/.gemini/antigravity/conversations/26930b3a-4ee2-42dc-92c1-abbcf03d2870.db` in SQLite read-only mode, following `D-304`. Its rule wrappers name **`AGENTS.md` only**; there is no `graphify.md` or `CLAUDE.md` rule wrapper. The database stores two full copies of the `AGENTS.md` injection. In each, Lane B matched the first **23,962 file bytes** to the pinned 31,920-byte `AGENTS.md`, skipping the six four-byte SQLite page pointers at page boundaries. Each matched copy ends immediately before `<truncated 7958 bytes>`. This independently confirms delivery through line 329 and the cut after it under `D-294`.

The fresh score corroborates the diagnostic: `cut#321` and `cut#327` are exact, `cut#330` and `cut#337` are absent, giving the bracket `[23862, 23963)` around the 23,962-byte cut. The quoted marker is consistent with every applicable quote. The HTML-comment cue is exact. No negative-control line was quoted, and no tool call contaminated the automatic-loading window.

**Level 2 classification:** `AGENTS.md` was delivered through line 329 and truncated after it; `graphify.md` and `CLAUDE.md` were **not delivered** as rule blocks. This is a conclusive statement of the observed R2 delivery. It does **not** distinguish a per-file budget from a shared budget, or discovery failure from budget exhaustion for `graphify.md`; those causal questions require the P4 remediation decision and re-measurement.

### Probe 2 — partial on-demand skill load

The fresh score finds C1 and C2 exact in the delivered skill text; C3, at the skill's end, is absent. The single permitted `view_file` call supplied lines 1–800 (46,893 characters) and reported `Total Bytes: 70373`, matching the pinned 70,373-byte external skill. The agent did not page. The separate quote window has no tool call. This independently confirms **partial on-demand loading in R2**; R1's full pagination is a distinct historical observation, not proof that R2 read its tail.

## What you need

1. **Lane A:** acknowledge and review this Level 2 receipt, then record its bounded classification against `SV2-U02-C-R2` in `SV-002` §3.2 and the combined-report inputs. Cite this entry for the independent Route C review rather than treating Lane C's raiser-side verification of `C-005`/`C-006` as its substitute.
2. **Judge with Lane A, later:** retain the per-file/shared-budget and `graphify.md` discovery/budget alternatives for P4. Re-measure after any authorized rule or skill change. Do not infer a fixed 23 KB guardrail or success from file size alone.
3. **Remaining schedule:** Route A's reviews, the combined report and Judge acceptance still govern `SV2-DOD-03`; this receipt neither changes lane state nor releases `V1-SM05`.

## What you did instead

Re-scored the pinned R2 evidence, inspected the deciding host database read-only, checked the documented controls and pins, and filed one Lane B Level 2 receipt. No rule, skill, kit, application code, governed spec or Lane C entry was changed.

| Item | Verdict | Condition and follow-up phase |
|---|---|---|
| R2 kit, fresh scores and controls | **Approve** | Hashes and byte-identical outputs support both probe readings (Gate 1B, P1) |
| Probe 1 observed delivery | **Approve** | Harness database decides: `AGENTS.md` cut after byte 23,962; other rule blocks not delivered (Gate 1B, P1) |
| Probe 2 on-demand skill load | **Approve** | Lines 1–800 delivered; no pagination or quote-window tool call (Gate 1B, P1) |
| Per-file/shared budget and `graphify.md` cause | **Defer** | P4 decision and re-measurement must separate the alternatives (Gate 1B, P4) |
| `SV2-DOD-03` checkoff or `V1-SM05` release from this review | **Reject** | Remaining route reviews, combined report and Judge acts are required (Gate 1B → Gate 2) |
