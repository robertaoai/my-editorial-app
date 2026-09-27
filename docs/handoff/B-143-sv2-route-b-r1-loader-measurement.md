# B-143 — SV2-U02-B-R1 Codex loader measurement receipt

- **Raised:** 2026-09-27 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a conclusive `SV2-U02-B` result, its dependent Route C run and `SV2-DOD-03`
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `SV-002` §3.1/§3.4; `D-276` item 4; `D-292`; Route B kit `answers-1.txt`, rollout `01a0e2f8-c427-7500-9756-87b19ff5dd05`, `score.mjs` and `score-probe1.txt`; read-only rescore and pin comparison at the commit below
- **Verified-At-Commit:** d4a2af8c7ec9e8938f8c45b3b37579ebb37b3def

## What happened — Route B R1, 2026-09-27

The Judge supplied the Route B answers, Codex rollout and saved score from the kit outside the repository. Lane B scored them in this separate session. The rollout reports `codex-cli 0.158.0-alpha.2.1`, model `gpt-6-sol`, checkout `C:\robertaoai\my-editorial-app` at `d4a2af8`, and `on-request` approval. A distinct user-role `# AGENTS.md instructions for ...` record precedes the probe. Its `<INSTRUCTIONS>` body matches the pinned `AGENTS.md` text after wrapper and terminal-newline removal. There is no separate `CLAUDE.md` injection in the rollout. The responder's Part A called the `AGENTS.md` text “pasted in your message”; that description does not distinguish the harness-supplied record from a human paste, so it is not used as loader attribution.

The read checkout matches all five `D-276` item-4 SHA-256 pins: `AGENTS.md` `f2bd6dae9f17a91eb6ab733c5a136769041aaf0cce6c19e90a6ed2e3b9557b0d`; `CLAUDE.md` `6a6a82d6754b0953688392e3e2305bc9f44ee568d084bfe19d8a6c39003d3977`; `.agents/rules/graphify.md` `3baf8c53889b5e9f321adfafdb3c4f46972e4da643a26dc9b773825dd1d659bc`; `.claude/skills/sync-docs/SKILL.md` `5568dac5f8e9d09d89f29b1e0e8410b5d1d913a1daa27e2558262f57a45e75ae`; and `docs/PRD.md` `294d8e891ce5e5898fa7fb54338f8e194822db84d688638278e2e622594fd2d2`. The five tracked files are clean at this read. The rollout's commit pin and exact `AGENTS.md` injection support the baseline; it contains no independent pre-probe hash read for the other four files.

| Control / cue | Independent result |
|---|---|
| Kit integrity | Probe, key, instructions and scorer hashes match the `D-292` kit table. The supplied answer file is SHA-256 `ac458de2b112c1471f0c008664ede97e31aa6e5df553a927e98f34ff17d83f3e`; rollout is `2baa0734c94a97d01194987a29c16c49d9a53047be2d6cdefd2f2d81b2ebb8f2` (163,546 bytes). |
| Positive controls | C1 and C2 (shared core) and C3 (`AGENTS.md` end) were quoted exactly. C8 (`AGENTS.md` tail start) was answered `NOT VISIBLE`, although its expected line is present in the exact injected body. That mismatch cannot establish truncation or complete behavioral quotation. |
| Tested file | C6 and C7 (`CLAUDE.md` tail) were `NOT VISIBLE`; no `CLAUDE.md` injection was recorded. This supports no observed automatic load of that file in R1. |
| Negative control | C4, C5 and C9 (`docs/PRD.md`) were `NOT VISIBLE`; no negative-control line was quoted. Control 4 held. |
| Tool and context control | No tool calls before or inside the probe window; no sentinel text in tool output. The rollout reports 39,022 input tokens in the window. |
| Saved score | Supplied `score-probe1.txt` (SHA-256 `6539c75bc7cce6e92355a0bff7904f54921ea09e3e8436c3455a608576563b84`) ends after two header lines and says no injected item. Re-running the pinned `score.mjs` against the supplied answers and rollout returns the complete table above and finds the injection. The saved score is incomplete and must not be used as the receipt. |

**Classification: `inconclusive` for the full Route B R1 loader result.** The harness record shows the pinned `AGENTS.md` body reached the session, including both tail regions. Three quotations succeed, but the responder misses C8 despite that record. This is consistent with an answer error, while the required behavioral quotation is absent; the evidence does not satisfy §3.4's complete-loading quotation test or justify a truncation diagnosis. `CLAUDE.md` and the negative control were not observed loading. No rule file, key, scorer, canonical source, graph artifact or kit file was edited by Lane B.

## What Lane A needs and what Lane B did instead

Lane A should independently rerun the pinned scorer on the supplied answer and rollout, note that the provided score file is incomplete, and record the R1 result under the §3.1 route schedule. The return is a fresh `SV2-U02-B-R2` probe with the same pinned file set and a freshly captured complete score; the Route C run is filed beneath that B run as §3.1 requires. Preserve the verifier key outside the probe session. This receipt does not check `SV2-DOD-03`, accept `SV-002`, or lift the `V1-SM05` block.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `SV2-U02-B-R1` evidence inventory and held tool/negative controls | Gate 1B — Lane A independently rescores the supplied artifacts |
| **Defer** | Route B complete-loading classification and dependent Route C run | Gate 1B — run `SV2-U02-B-R2`, then its Route C child |
| **Reject** | Treating the truncated saved score or the missed C8 answer as proof of a conclusive Route B pass or truncation | Gate 1B — use the complete rollout and fresh score |
| **Reject** | `SV2-DOD-03` closure, `SV-002` acceptance or `V1-SM05` unblock from this receipt | Gate 2 — require the remaining route receipts and Judge acceptance |
