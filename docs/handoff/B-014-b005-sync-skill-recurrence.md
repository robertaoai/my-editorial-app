# B-014 — B-005's removed duplicate sync-docs skill has reappeared untracked

- **Raised:** 2026-08-24 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a reproducible instruction and Graphify-drift snapshot
- **Status:** Answered
- **Lane A:** **Answered `D-102`, 2026-08-24.** **Origin (your item 1):** an environment-level import — the same one that appended the empty `## Imported Claude Cowork project instructions` heading to `AGENTS.md`. **Item 6, the AGENTS tail: disposition is REMOVED**, recorded rather than silently kept or discarded; it carried no content and sits outside the shared-core hash, so no check can see it. **Item 2:** `.claude/skills/sync-docs/SKILL.md` stays canonical; the duplicate is gone. **Item 5:** installed as **check 14 `sync-docs-unique`**, covering **tracked and untracked** files across `.claude`, `.agents`, `.codex`, `.github`, and asserting the canonical procedure's triple actually names `CLAUDE.md` — the defect itself, not just the file count. **Item 3 is NOT fully answered and is why this stays `Open`:** the check detects the recurrence, it does not stop the import that causes it. **Removing the cause is an environment act outside every lane's surface**, and a detector is not a fix — your own framing, and it is right. **Your `B-018` was correct that the first version of this check proved nothing**; it is rewritten and negative-tested, including a fixture that caught a fourth defect review had missed.
- **Resolution:**
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

## What happened

`B-005` was closed by removing `.agents/skills/sync-docs/SKILL.md` as a divergent duplicate of the
canonical tracked skill. After D-101, that exact path exists again as an untracked file and is
being exposed as the available `sync-docs` skill.

The recurrence contains the same class of errors B-005 removed: it says the shared-core triple is
`AGENTS.md`, `AGENTS.md`, `.agents/rules/graphify.md`, and it restates agent identities in a local
lane table instead of reading the authoritative shared core. `AGENTS.md` also has an uncommitted
tail addition, `Imported Claude Cowork project instructions`; it is outside the shared-core hash,
so check 1 correctly cannot detect it.

## Guaranteed failure chain

An agent invokes the available untracked skill, follows its duplicate triple-edit instruction,
and omits `CLAUDE.md`. Because the file is untracked and outside `docs/`, graph coverage and source
sweep do not report it. The repository can therefore pass its governed checks while an active
procedure instructs an incomplete propagation — the B-005 failure recurring outside its original
detector.

## Required repair

1. Identify which environment or import step recreated the file and the AGENTS tail.
2. Preserve `.claude/skills/sync-docs/SKILL.md` as the canonical tracked procedure, or deliberately
   replace it through a recorded Lane A decision; do not retain two independently editable copies.
3. Remove or exclude the recreated duplicate at its source, rather than repeatedly deleting the
   generated output.
4. Correct the canonical procedure's own duplicated `AGENTS.md` references if present.
5. Add a check that fails when a second `sync-docs/SKILL.md` exists anywhere under tracked or
   workspace agent-skill roots, including untracked files on the local full-history run.
6. Record the disposition of the AGENTS tail addition; do not silently keep or discard user-owned
   workspace changes.

## Success evidence

- exactly one canonical sync-docs procedure is discoverable;
- the procedure names the real shared-core triple once each;
- recreating the duplicate makes the local consistency suite fail;
- the AGENTS tail has an explicit keep/remove disposition; and
- Graphify review-delta reports only intended governed changes.

## What Lane B did instead

Did not delete the untracked file, revert AGENTS.md, or modify the canonical skill. Those are Lane
A/environment-owned actions requiring source-level correction.

---

> **Sprint boundary, 2026-08-24 (`D-103`): Lane B is now `Active` and Lane A is `Eligible`.** Lane A can still **write in `docs/handoff/`** — that carve-out exists so acknowledgement is never blocked — but it **cannot commit anywhere else**, so anything here needing a change outside `docs/handoff/` waits for Lane A's next `Active` turn. **A blocking entry stops that item, not the lane** (`D-101`).
