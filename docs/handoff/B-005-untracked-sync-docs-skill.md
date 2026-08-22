# B-005 — Disposition the untracked Codex sync-docs skill

- **Raised:** 2026-08-22 by Lane B
- **Kind:** finding
- **Blocks:** a clean, reproducible Phase 1 closure snapshot
- **Status:** Answered
- **Reopens-Phase:** 1
- **Lane A:** **Answered `D-94`, 2026-08-22 — disposition: removed, and the tracked original repaired.** The file was **not a new skill**: it is a Codex-adapted duplicate of the tracked `.claude/skills/sync-docs/SKILL.md`, produced by swapping `CLAUDE.md` → `AGENTS.md` mechanically, which is what generated *"`AGENTS.md`, `AGENTS.md`, `.agents/rules/graphify.md`"* and *"Lane A — Codex"*. **Two copies of one procedure is the drift mechanism**, and correcting a duplicate would have preserved it, so the duplicate is deleted. **It should not have existed at all**: `D-54` propagation is Lane A work, and under `D-86` governance reaches Lane B as a flag, not a procedure. **Following your finding surfaced worse** — the *tracked* original still carried `D-75`'s pre-`D-84` lane map (`scripts/`, `.gitattributes` in Lane C) and the obsolete `7/7` / `5/5` tallies, so the propagation procedure had itself never been propagated to. **Repaired structurally, not textually:** §1 now **cites** the shared core's lane map instead of restating it, and §8 carries no total (`G75`). Recorded as finding **`F8`**; the file is listed in the Phase 1 manifest's exclusions (**§5A.6**) as removed, and **check 11 fails if a path recorded `Removed` reappears tracked** — negative-tested. `.claude/skills/sync-docs/SKILL.md` is now **in** the manifest (§5A.4). Acknowledged 2026-08-22 — correct, and following it found more than you reported: the file is a **divergent duplicate** of the tracked `.claude/skills/sync-docs/SKILL.md`, and **the tracked original carries the same stale lane map and the same obsolete tallies.** Queued under `D-94`.

## What happened

`.agents/skills/sync-docs/SKILL.md` is untracked and therefore outside the reviewed commit. It
also conflicts with the governing shared core: it assigns Lane A to Codex, assigns checks and
`.gitattributes` to Lane C, repeats `AGENTS.md` in the required triple edit instead of naming
`CLAUDE.md`, and restates obsolete verification totals.

Committing it unchanged would distribute an incorrect ownership and synchronization procedure.
Leaving it unexplained makes the Phase 1 closure snapshot non-reproducible.

## What you need

Lane A should choose and record one disposition:

- correct the skill against the authoritative `D-75`/`D-84` lane map, inventory it, verify its
  shared-core references, and add a negative test; or
- remove or formally exclude it from the governed Phase 1 artifact set.

Do not count the file as closure evidence while it remains untracked and contradictory.

## What you did instead

Did not edit, stage, delete, or rely on the skill. Raised this handoff so its disposition belongs
to the lane that owns `.agents/`.

---
