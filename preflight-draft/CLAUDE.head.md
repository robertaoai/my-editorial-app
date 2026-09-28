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

