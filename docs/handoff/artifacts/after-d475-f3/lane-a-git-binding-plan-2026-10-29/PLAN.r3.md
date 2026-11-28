# Git binding fix plan r3 for the fresh after-D-475 F3 review (plan only; nothing executed)

Revision r3 of `PLAN.r2.md` (unchanged; `PLAN.md` also unchanged). Instructions: `INSTRUCTION-R2.jsonl` (Lane A line 6135) and `INSTRUCTION-R3.jsonl` (this revision). r3 changes only finalization (§1a); the R1 exit rules, the R2 environment and the PowerShell call operator and quoting are unchanged. Baseline: HEAD R
`71dfbbe7a09f194a9986c1f29d42ad507aec1af7`; source S `22b0a8ce2fb06c16152fa9490d21aae829a45974`; work
`7bd2af2f-82a0-40fc-872c-31009278ff1c`, ready STATE `1fd1a888…`; candidate graph `df076c7c…`, manifest `34a4edeb…`
(583 files); approved answers `89965adf…`. The diagnosis in `PLAN.md` §1 stands unchanged.

## 1a. What r3 changes (R3 finalization)

In r2, `finish()` serialized the result and computed the exit before finalization ended. A failed result write printed the
earlier text without the write error and could exit 0; a failed or unavailable post-write candidate check exited nonzero
while the saved JSON could still say exit 0 with preservation proved.

| Path | r3 behaviour |
|---|---|
| Records | `launcher-result.json` is **preliminary** (`record: "preliminary"`, `authoritative: false`), written once before the post-write check. `launcher-completion.json` is **authoritative**, written once, last. Neither is ever overwritten (`wx`) |
| Result-write failure | `finalization.resultWrite = { ok: false, error }`, the error joins `secondaryErrors`, exit raised to **6**; the completion record states "no preliminary record was written" |
| Post-write mismatch | `finalization.postWrite = { ok: false, reason, manifest, files }`, exit raised to **4**; the candidate check stays after the result write |
| Post-write unavailable | `finalization.postWrite = { ok: false, unavailable: true, error }`, exit raised to **4**; never success |
| Candidate never located | `postWrite` unavailable with its reason; the run had already stopped nonzero; a 0 here is raised to 5 |
| Completion-write failure | exit raised to **6**; the full completion record, with the write error, goes to stderr as one JSON line and is then authoritative |
| No validated output folder | nothing is written to disk; the completion record goes to stderr |
| `finish()` throws | a stderr record keeps the original error, phase, child status, secondary errors and the finalization error; exit at least 5 |
| Agreement | `process.exit` uses the same `finalExit` that the authoritative record carries; the completion record names the preliminary record's SHA-256, its exit and its disposition (`confirmed` or `superseded: preliminary exit X, final exit Y`) |

All writes stay inside the validated `--out` folder, or go to stderr. Exit codes: 0, 2, 3, 4 and 5 as in r2, plus **6 = a
finalization write failed**; the highest wins.

## 1. What r2 changed (kept)

| Finding | r1 | r2 (`launch-review.r2.mjs`) |
|---|---|---|
| **R1** child failure | Exit 0 whenever bindings were preserved, even if the child failed | Exit 0 only if every gate passed **and** the child exited 0, with no signal and no spawn error, **and** preservation is proved. Child failure → 3 (a spawn error with no process is still 3); preservation failure or unavailable after-snapshot → 4; internal error → 5; stop before the child → 2. Highest code wins; the child result is recorded separately |
| **R2** one environment | Validated with sanitized `genv`, launched the child with unsanitized `env` | One frozen object `ENV` = parent env with exactly one `PATH` key, frozen Git directory first, the rest in order, then the guard's `sanitizedEnv`. The same object is used for resolution, `--version`, configuration queries, `bindingFindings`, both snapshots and the child spawn; its digest is taken at build and again at spawn and must be equal |
| **R3** output and failures | Created `--out` without checks; no structured error handling | Before any write: absolute `--out`, new, inside the fixed fresh packet, parent without links, not inside the repository, work/candidate tree, live graph, frozen stray work or a sealed packet. Phases are recorded; the original error, phase, child status and secondary errors are kept; the after-snapshot is attempted whenever a before-snapshot exists, and missing proof is recorded as not proved. The result goes only to the validated folder (or stderr when none exists); the candidate is re-hashed after the result is written |
| Child bytes | Any script | `--child` must be inside the fresh packet, a regular file with no link, and its SHA-256 must equal `--child-sha256` |

## 2. Exact invocation (planned)

**PowerShell (reviewed form).** The call operator runs the quoted executable; single quotes keep every path literal.

```
& 'C:\Program Files\nodejs\node.exe' 'C:\CoWork\outputs\lane-a-git-binding-plan-2026-10-29\launch-review.r3.mjs' --child 'C:\CoWork\outputs\lane-b-after-d475-f3-r2-2026-10-29\entry.mjs' --child-sha256 '<64 hex>' --out 'C:\CoWork\outputs\lane-b-after-d475-f3-r2-2026-10-29\launcher-run-1'
```

**Git Bash (separately labelled; not the reviewed form).** The launcher builds the same child environment from either parent,
but only the PowerShell form above is proposed for release.

```
'/c/Program Files/nodejs/node.exe' 'C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.r3.mjs' --child 'C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/entry.mjs' --child-sha256 '<64 hex>' --out 'C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/launcher-run-1'
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

The authoritative evidence for every row from 4 onward is `launcher-completion.json`, or its stderr fallback;
`launcher-result.json` is preliminary.

| # | Condition | Planned validation | DoD evidence | Owner |
|---|---|---|---|---|
| 1 | Revised launcher reviewed by exact bytes | Lane B reads `launch-review.r3.mjs` and the r2-to-r3 diffs | Review naming its SHA-256 | Lane B |
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
| 17 | Result-write failure after an otherwise successful child | The preliminary write fails | Exit 6; `finalization.resultWrite.ok` false with the error; completion says no preliminary record | Lane B |
| 18 | Post-write candidate mismatch | Digest, file count or graph differs after the result write | Exit 4; `finalization.postWrite.ok` false with the observed values; preliminary disposition `superseded` | Lane B |
| 19 | Post-write check unavailable | Candidate hashing throws after the result write | Exit 4; `postWrite.unavailable` true with the error; never success | Lane B |
| 20 | Original error, then a finalization error | A child or internal error, then a failed completion write or a throwing `finish()` | Stderr record keeps `original`, `phase`, `child` and every secondary error plus the finalization error; exit at least 5 (or 6) | Lane B |
| 21 | Record and exit agree | Compare the process exit with `exit` in the authoritative record in each case above | Equal in every case; preliminary hash and disposition present whenever it was written | Lane B |
