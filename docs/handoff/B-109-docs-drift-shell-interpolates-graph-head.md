# B-109 — `docs-drift` interpolates Graphify metadata into a shell command

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** claiming D-231's `docs-drift` implementation is safe and independently verified; does not block the confirmed path-classification semantics or Product planning
- **Status:** Answered
- **Lane A:** **Acknowledged and answered, 2026-09-15.** Confirmed by direct read: line 98 of the
  committed file built `` execSync(`git diff --name-only ${analyzed} ${head}`) `` — a shell string
  with `analyzed` spliced in unvalidated. Repaired per this entry's exact guide: a new
  `getChangedPaths(analyzed, head, exec = execFileSync)` calls `execFileSync("git", ["diff",
  "--name-only", analyzed, head], …)` — an argument array, never shell text — and `run()` now calls
  it instead of building a string. Three fixture cases (`docsDriftArgumentSafety` in
  `scripts/fixtures/suites.mjs`) prove the shape with an injected mock executor: a normal pair of
  SHAs is passed as four separate array elements; a value containing `$(rm -rf /); echo pwned` is
  passed as one inert array element, never interpreted; a thrown "unknown revision" still propagates
  to the existing fail-closed `catch`. D-231's five matcher cases are unaffected and still pass; the
  live `docs-drift` check still correctly names the real governed-intent changes since `9b13e16`.
  Terminal verification pending Lane B's independent read and the clean complete-suite run.
- **Resolution:** Verified
- **Verified-By:** Lane B
- **Evidence:** independent source review of argument-array execution; `docs-drift argument safety` 3/3; clean-tree `bun run check` 17/17 and `bun run fixtures` 95/95
- **Verified-At-Commit:** 2a6554284ccedd03b63ece89da38247f53bb129b

## What happened

D-231 correctly introduces a shared governed-intent exclusion matcher, but its Git range lookup is
constructed as executable shell text:

```js
execSync(`git diff --name-only ${analyzed} ${head}`, ...)
```

`head` comes from Git, while `analyzed` comes from the gitignored, machine-local
`.graphify/branch.json`. The code parses that file as JSON but does not validate that
`lastAnalyzedHead` is a commit identifier before inserting it into the command. Shell metacharacters
in that field can therefore be interpreted by the shell instead of being passed to Git as one
argument. The intended fallback for an invalid or unreachable commit is “report stale”; command
interpretation occurs before that safe fallback can govern the value.

The new matcher itself passes all five synthetic cases. Independently running the committed checks
also confirms `graph-coverage` reports zero included documents absent and `docs-drift` correctly
names the four governed script paths since `9b13e16`. This entry is narrower: it concerns how the
Git arguments are transported, not the exclusion decision.

## What you need

Lane A Code should make the range lookup argument-safe without changing D-231's scope:

1. Replace shell-string execution with `execFileSync("git", ["diff", "--name-only", analyzed,
   head], options)` or an equivalent no-shell process call.
2. Keep the present fail-closed behavior: an invalid, missing or unreachable analyzed commit returns
   no path classification and produces the existing stale finding.
3. Add a bounded test around the range helper using a captured/mock executor. Prove the analyzed and
   HEAD values are supplied as separate arguments and no shell is invoked.
4. Include an invalid analyzed value containing spaces or shell metacharacters as a negative input;
   it must be rejected or passed as one inert Git argument and must result only in the stale finding.
5. Re-run D-231's five matcher cases and the live `docs-drift` check. Then run the complete fixture
   suite from a clean tree after Lane A finishes and commits its current Register edit.

Do not weaken the changed-path comparison, broaden the excluded path set, or rebuild Graphify as a
substitute for this repair.

### Failure-derived completion evidence

- no repository-controlled or runtime-derived value is concatenated into shell command text;
- valid reachable SHAs still return the same governed/excluded path classification;
- invalid or unreachable analyzed values report stale without executing additional commands;
- the D-231 matcher group remains 5/5; and
- the full fixture suite passes from a clean tree and restores it byte-for-byte.

## What you did instead

Stopped at the handoff boundary. Lane A's uncommitted D-231 Register text was not edited, staged, or
committed. No checker, fixture, governed Product source, application code, workflow, or Graphify
artifact was changed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-231 shared exclusion semantics | Phase 1 — five matcher cases and live classification pass |
| Approve-with-conditions | D-231 `docs-drift` implementation | Phase 1 — replace shell interpolation and add argument-boundary proof |
| Reject | Treating machine-local Graphify metadata as trusted command text | Use a no-shell argument array |
| Defer | D-231 independent completion and Graphify rebuild | After B-109 repair and Lane A's Register commit |
| Defer | Product, application, workflow, deployment and publication work | Separate authorized units |

## Lane A · Claude Code — clean-tree confirmation, 2026-09-15

Committed at `b5fbdfe`. Clean-tree `bun run check`: **17/17 pass** (`docs-drift` reports `synced`;
`graph-coverage` reports 0 absent). Clean-tree `bun run fixtures`: **95/95**, tree restored
byte-for-byte. `docsDriftArgumentSafety`'s 3 cases are part of that total.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Argument-safe `getChangedPaths`, confirmed 95/95 full suite, 17/17 checks | Applied `b5fbdfe` — independent Lane B read still owed |

## Lane B independent verification — 2026-09-15

Lane B independently inspected `getChangedPaths()` and ran the complete suites at
`2a6554284ccedd03b63ece89da38247f53bb129b`. Git is invoked through `execFileSync` with the range
values in separate array positions. The metacharacter input remains one inert argument, and an
unreachable revision still fails closed. The dedicated group passed 3/3, the full fixtures passed
95/95 with restoration, and all 17 consistency checks passed.
