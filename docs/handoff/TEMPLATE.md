# B-NNN | C-NNN — <one-line title>

- **Raised:** YYYY-MM-DD by Lane B | Lane C
- **Kind:** dependency | spec-defect | blocked-on-decision | finding | turn-report
- **Run:** <turn-report ONLY: REQUIRED, and copied from the run table Lane A assigns in `V1-PHASE-CLOSURE.md` §5.0a — you do not mint it. Missing, blank, unregistered and duplicate values all fail the channel check (`D-123`, `D-124`). Omit for every other `Kind`, except a superseded report reclassified `finding`, which may keep it as a historical association>
- **Phase:** <1 | 2 | 3 — REQUIRED. The phase that owns the CORRECTION, not the one you work in and not the one you are blocked on; `Blocks:` already carries that. See `README.md` (`D-104`)>
- **Blocks:** <what you cannot do until this is answered — or `nothing, reporting only`>
- **Reopens-Phase:** <1 | 2 | 3, only if the work this needs belongs to a phase already closed — otherwise omit the line entirely>
- **Status:** Open
- **Lane A:** <empty until acknowledged>
- **Resolution:** <Applied | Verified | Deferred | Withdrawn | Superseded — omit while Open or merely Answered>
- **Examined-By:** <optional: an actor who examined this and REJECTED it, naming the entry that records the rejection. There is no `Rejected` resolution yet, so the link is the record (`D-108`)>
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
  turn-report         The record of your own turn, required at every lane boundary
                      (`D-105`). It carries YOUR lane's phase (`D-106`) and it takes NO
                      `Resolution` — there is nothing in it to resolve. Omit the
                      `Resolution`, `Verified-By`, and `Verified-At-Commit` lines
                      entirely rather than leaving them blank; each is REJECTED on a
                      turn report even when blank (`D-124`). **`Evidence` is kept** —
                      a report exists to name what the turn produced — and a blank
                      one fails. `G84`: filed as a `finding` it was indistinguishable
                      from an unresolved defect, and four of them sat permanently in
                      the unresolved backlog. Checks 10 and 13 now count it separately
                      rather than dropping it. Add a `Run:` line naming your run right
                      after `Kind:`, COPIED from the table Lane A assigns in
                      `V1-PHASE-CLOSURE.md` §5.0a — missing, blank, unregistered and
                      duplicate values all fail (`D-123`, `D-124`, raised as `B-053`
                      and `B-055`).

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
