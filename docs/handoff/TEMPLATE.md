# B-NNN | C-NNN — <one-line title>

- **Raised:** YYYY-MM-DD by Lane B | Lane C
- **Kind:** dependency | spec-defect | blocked-on-decision | finding
- **Blocks:** <what you cannot do until this is answered — or `nothing, reporting only`>
- **Status:** Open
- **Lane A:** <empty until acknowledged>

## What happened

<What you were doing, and what you hit. Name the file, spec section, or requirement ID.>

## What you need

<For a dependency: the package and why. For a spec defect: the two things that contradict,
quoted. For blocked-on-decision: which decision, and what you would do under each outcome.>

## What you did instead

<Carried on elsewhere, stubbed it, stopped. If you stopped, say so — a blocking handoff is a
recorded cost (`D-86`), not a failure.>

**Lane C: do not work around a missing dependency inside the workflow.** Inlining what should
be a script produces a CI job that passes while calling something no one else can run — the
`probe_that_cannot_fail` shape, in the one place nothing downstream re-checks.

---

<!--
Kinds, and what Lane A does with each:

  dependency          Lane A provisions it. Lane B never runs `bun add` (`D-86`); Lane C
                      never adds a script, config file or tool a workflow calls (`D-84`).
  spec-defect         Two governed documents disagree. Lane A arbitrates via the register
                      (`D-58`) and propagates per `D-54`.
  blocked-on-decision A Chief Editor decision is missing. Lane A surfaces it in §5.1.
  finding             Something true and useful that is nobody's blocker yet.

Do not edit another entry's file. One file per item keeps status edits from colliding —
`docs/handoff/` is under `*.md merge=union`, which is right for append-only content and wrong
for shared status fields (`G63`).
-->
