# B-NNN | C-NNN — <one-line title>

- **Raised:** YYYY-MM-DD by Lane B | Lane C
- **Kind:** dependency | spec-defect | blocked-on-decision | finding
- **Phase:** <1 | 2 | 3 — REQUIRED. Closure gating is phase-scoped, and an entry with no phase blocks nothing and is checked by nothing (`D-102`)>
- **Blocks:** <what you cannot do until this is answered — or `nothing, reporting only`>
- **Reopens-Phase:** <1 | 2 | 3, only if the work this needs belongs to a phase already closed — otherwise omit the line entirely>
- **Status:** Open
- **Lane A:** <empty until acknowledged>
- **Resolution:** <Applied | Verified | Deferred | Withdrawn | Superseded — omit while Open or merely Answered>
- **Verified-By:** <REQUIRED for Verified: the actor who confirmed it, and NOT the lane that answered. `Acknowledged` is a receipt, not a verifier (`D-102`, `B-013` item 4)>
- **Evidence:** <what proves it; a check name, a test, a file, a commit>
- **Verified-At-Commit:** <the commit the evidence was observed at — a hexadecimal SHA that EXISTS. `pending` is not a commit>
- **Follow-up-Tier:** <required if Resolution is Deferred: the sprint, phase or tier that owns it>
- **Superseded-By:** <required if Resolution is Superseded: the decision that overtook it>

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

Resolutions, and which of them close anything:

  Applied             The fix is in the tree at a named commit and NOBODY INDEPENDENT has
                      confirmed it. Deliberately NOT terminal — it does not satisfy a phase
                      closure condition (`D-102`).
  Verified            Confirmed by a named actor who is not the answering side, at a commit
                      that exists. Terminal.
  Deferred            Terminal, and requires `Follow-up-Tier` — a deferral with no owner is
                      a drop.
  Withdrawn           Terminal. The raiser or the register retracted it.
  Superseded          Terminal, and requires `Superseded-By` — the decision that overtook it.

Do not edit another entry's file. One file per item keeps status edits from colliding —
`docs/handoff/` is under `*.md merge=union`, which is right for append-only content and wrong
for shared status fields (`G63`).
-->

> **Sprint boundary, 2026-08-24 (`D-103`): Lane B is now `Active` and Lane A is `Eligible`.** Lane A can still **write in `docs/handoff/`** — that carve-out exists so acknowledgement is never blocked — but it **cannot commit anywhere else**, so anything here needing a change outside `docs/handoff/` waits for Lane A's next `Active` turn. **A blocking entry stops that item, not the lane** (`D-101`).
