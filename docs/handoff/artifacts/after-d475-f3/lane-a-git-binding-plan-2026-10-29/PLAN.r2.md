# Git binding fix plan r2 for the fresh after-D-475 F3 review (plan only; nothing executed)

Revision r2 of `PLAN.md` (unchanged). Instruction: `INSTRUCTION-R2.jsonl` (Lane A line 6135, `ccfa76f8…`). Baseline: HEAD R
`71dfbbe7a09f194a9986c1f29d42ad507aec1af7`; source S `22b0a8ce2fb06c16152fa9490d21aae829a45974`; work
`7bd2af2f-82a0-40fc-872c-31009278ff1c`, ready STATE `1fd1a888…`; candidate graph `df076c7c…`, manifest `34a4edeb…`
(583 files); approved answers `89965adf…`. The diagnosis in `PLAN.md` §1 stands unchanged.

## 1. What r2 changes

| Finding | r1 | r2 (`launch-review.r2.mjs`) |
|---|---|---|
| **R1** child failure | Exit 0 whenever bindings were preserved, even if the child failed | Exit 0 only if every gate passed **and** the child exited 0, with no signal and no spawn error, **and** preservation is proved. Child failure → 3 (a spawn error with no process is still 3); preservation failure or unavailable after-snapshot → 4; internal error → 5; stop before the child → 2. Highest code wins; the child result is recorded separately |
| **R2** one environment | Validated with sanitized `genv`, launched the child with unsanitized `env` | One frozen object `ENV` = parent env with exactly one `PATH` key, frozen Git directory first, the rest in order, then the guard's `sanitizedEnv`. The same object is used for resolution, `--version`, configuration queries, `bindingFindings`, both snapshots and the child spawn; its digest is taken at build and again at spawn and must be equal |
| **R3** output and failures | Created `--out` without checks; no structured error handling | Before any write: absolute `--out`, new, inside the fixed fresh packet, parent without links, not inside the repository, work/candidate tree, live graph, frozen stray work or a sealed packet. Phases are recorded; the original error, phase, child status and secondary errors are kept; the after-snapshot is attempted whenever a before-snapshot exists, and missing proof is recorded as not proved. The result goes only to the validated folder (or stderr when none exists); the candidate is re-hashed after the result is written |
| Child bytes | Any script | `--child` must be inside the fresh packet, a regular file with no link, and its SHA-256 must equal `--child-sha256` |

## 2. Exact invocation (planned)

**PowerShell (reviewed form).** The call operator runs the quoted executable; single quotes keep every path literal.

```
& 'C:\Program Files\nodejs\node.exe' 'C:\CoWork\outputs\lane-a-git-binding-plan-2026-10-29\launch-review.r2.mjs' --child 'C:\CoWork\outputs\lane-b-after-d475-f3-r2-2026-10-29\entry.mjs' --child-sha256 '<64 hex>' --out 'C:\CoWork\outputs\lane-b-after-d475-f3-r2-2026-10-29\launcher-run-1'
```

**Git Bash (separately labelled; not the reviewed form).** The launcher builds the same child environment from either parent,
but only the PowerShell form above is proposed for release.

```
'/c/Program Files/nodejs/node.exe' 'C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.r2.mjs' --child 'C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/entry.mjs' --child-sha256 '<64 hex>' --out 'C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/launcher-run-1'
```

**Fixed, still to be produced before an execution release (execution DoR incomplete):**

| Item | Value | State |
|---|---|---|
| Fresh review packet | `C:\CoWork\outputs\lane-b-after-d475-f3-r2-2026-10-29` (constant `FRESH` in the launcher), directly under `C:\CoWork\outputs`, unsealed at launch | **Does not exist yet**; Lane B creates it |
| Child script | `…\lane-b-after-d475-f3-r2-2026-10-29\entry.mjs` | **Not written yet**; Lane B writes it with the full F3 review |
| Child SHA-256 | `<64 hex>` | **Placeholder**; fixed when Lane B's script is reviewed |
| Output folder | `…\lane-b-after-d475-f3-r2-2026-10-29\launcher-run-1` | Must not exist at launch |

The launcher passes the child no arguments by default; any `-- <args>` form must also be fixed at review.

## 3. Stop and failure route

Any nonzero exit: keep `launcher-result.json` (or its stderr copy) and every log, change nothing, return to Lane A with the
recorded phase and findings. Do not retry by changing guard rules, STATE, candidate bytes or bindings; a stopped or failed
attempt is never a pass. Residual risk from `PLAN.md` §2 stands: if Lane B's shell makes Git report a different
configuration file, `bindingFindings` stops the launcher, and that is a finding, not a reason to relax a rule.

## 4. DoR → planned validation → DoD evidence (all planned; syntax check confirms parsing only)

| # | Condition | Planned validation | DoD evidence | Owner |
|---|---|---|---|---|
| 1 | Revised launcher reviewed by exact bytes | Lane B reads `launch-review.r2.mjs` and both diffs | Review naming its SHA-256 | Lane B |
| 2 | Child script and packet fixed | Lane B creates the packet and `entry.mjs` | Script SHA-256 bound in the release; packet unsealed | Lane B |
| 3 | Execution release | — | Judge act naming launcher SHA-256, child SHA-256 and output folder | Judge |
| 4 | Invalid output destination | Phase `output`: relative, existing, outside the packet, inside a protected root, sealed packet, link in the parent | Exit 2 with the finding; nothing written outside the packet | Lane B (runs) |
| 5 | Unreadable or wrong inputs | Phases `args`, `child-file`, `state`, `import`, `node`: missing or unreadable files, bad JSON, wrong STATE, wrong child bytes, guard import failure | Exit 2 (gate) or 5 (exception) with phase, original error and secondary errors | Lane B |
| 6 | Environment equality | Phase `env`: one `PATH` key, frozen Git first; digest at build = digest at spawn; the same object for every query and the spawn | `launcher-result.json` `env` block | Lane B |
| 7 | Executable binding | Phases `git`, `bindings`: no shadow in the working folder; resolved path, bytes, version = frozen; guard `bindingFindings` zero for both checkouts | Zero findings recorded | Lane B |
| 8 | Before-snapshot | Phase `before` equals the reviewed values | `proof.before` | Lane B |
| 9 | Child failure | Nonzero or null exit | Exit 3; `child.status` recorded | Lane B |
| 10 | Child signal | Termination signal | Exit 3; `child.signal` recorded | Lane B |
| 11 | Spawn failure | `spawnSync` error, with or without a process | Exit 3; `child.error`, `processCreated` recorded | Lane B |
| 12 | After-snapshot failure | Snapshot throws, or an internal error after the before-snapshot | `proof.after.unavailable`; preservation "not proved"; exit 4 (or 5) | Lane B |
| 13 | Preservation | After = before for HEAD, status, staging, B-050, STATE, answers, candidate map/manifest/graph, configuration, refs outside turn-diffs, live graph/receipts/lock/journal; parent PATH unchanged; candidate re-hashed after the result write | `proof.preservation.ok` true | Lane B |
| 14 | Remaining boundary | The child's own gates: linked inventory `3e32d008…`, frozen `cac590ad` | The child packet's gate files | Lane B |
| 15 | Full F3 review | All producer projections and remaining F3 checks | Lane B's complete positive review. **A corrected binding is not F3 acceptance** | Lane B |
| 16 | K, then separate N | Only after row 15 | Commits with checks and commit proof | Lane B |
