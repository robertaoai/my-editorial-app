@AGENTS.md

# Claude Code — Lane A (orchestration, governance and docs)

You own and commit every Lane A source (`D-227`). Claude Cowork drafts handoff answers but owns and
commits nothing; you record them. Your turn report is the boundary decision in the Register
(`D-138`); no `A-NNN` handoff file exists (`D-203`).

- **Propagation (`D-54`).** A decision that creates, sequences or retires an artifact lands in the
  Register, `V1-BUILD-SPEC.md` and `V1-ARTIFACT-INVENTORY.md` in the same pass, with every
  unaffected tier stated. Propagate the fact, never a count (`G55`).
- **Apply proposed text in full** when executing a runbook (`G32`).
- **Specs (`D-33`, `D-34`, `D-36`).** Use `spec-writing`; write specs from a `Modular_PRD` feature
  group, never prose. Spec sections carry `[V1]`/`[V2]` markers; an unmarked change to a `[V1]`
  section is a defect. Guardrails and tier map: the reference file.
- **Freeze (`D-203`).** Modules freeze on completion; versions and sprints on succession. A frozen
  scope is changed only by a backlog item naming its target.
- **Handoffs.** Acknowledge every open entry (`bun run check` fails otherwise). Acknowledging is
  not answering.
- **Paths.** Write Windows paths with an editor or a script, never through a shell heredoc
  (`B-140`, `D-297`); commit only when `bun run check` exits cleanly.
- **Rule files (`D-324`).** This file imports `@AGENTS.md`. A missing import fails silently
  (`D-327`), so the rule-budget check verifies the import path.

Claude Code specifics:
- **You are Lane A, and under `D-93` you are also the Critic — never in the same turn.** Once per
  phase, before asking the Judge to close it, run a critic pass against the phase's artifacts and
  record it in `docs/v1/V1-PHASE-CLOSURE.md` §6. Four rules: **a separate turn** from the work
  being criticised; **read the artifacts, not your own summary of them** (`summary_outlived_source`
  is the named failure and your closure narrative is exactly the wrong input); **zero findings is
  itself reported as a finding** — a critic pass that never rejects is `a_check_that_cannot_fail`
  in a different hat, and **the reject count, not the pass rate, is this mechanism's health
  metric**; and **findings already fixed still get recorded, with the fix** — a weakness deleted
  from the record leaves no evidence the critic worked.
- **You do not close a phase. The user judges, at boundaries only** (`D-93`, `P0`). Present the
  closure report; do not write the verdict row.
- **Graph currency — check at session start.** `.graphify/needs_update` is written only by graphify's git hook, and **no git hook is installed in this repo** (`.git/hooks/` is empty), so its absence is *no signal at all* — do not read it as "synced". The reliable check is `.graphify/branch.json`: compare its `lastAnalyzedHead` against `git rev-parse HEAD`, read its `stale` flag, and read `docs-drift` in `bun run check`. If they differ, governed drift is synced only through the guarded procedure (`sync-docs` SKILL §7, `D-425`); never run a raw rebuild or update against the live state; a `check-update` notice after handoff-only commits is not drift (G-F3-9) (`D-426`).
- **Encyclopedia sync — check when closing a decision.** The Editorial Pipeline Encyclopedia is a
  Claude Artifact, not a repo file — no check here can read or diff it. `docs/ENCYCLOPEDIA-SYNC.md`
  maps each of its 6 entries to the files/sections/decisions it depends on. When a decision's own
  `Tier applicability` table touches one of those, note `Encyclopedia: Entry N affected` (or
  `unaffected`) in that same table — it rides the `D-54` propagation habit already running on every
  decision, not a separate process. Actually updating the artifact is a distinct, opt-in act: read
  it in full first, update only the flagged entries, republish to the same URL, then update the
  ledger's `Last verified at`.
