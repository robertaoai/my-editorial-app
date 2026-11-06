# Git binding fix plan for the fresh after-D-475 F3 review (plan only; nothing executed)

Baseline: HEAD R `71dfbbe7a09f194a9986c1f29d42ad507aec1af7`, source S `22b0a8ce2fb06c16152fa9490d21aae829a45974`, tree
`7e28fd350438bb6e4b1cb871d75ad9185d44703b`; work `7bd2af2f-82a0-40fc-872c-31009278ff1c`, ready STATE `1fd1a888…`; candidate graph
`df076c7c…`, manifest `34a4edeb…` (583 files); approved answers `89965adf…`. Lane B's failed packet
`C:/CoWork/outputs/lane-b-after-d475-f3-2026-10-29/` (35/35 entries verified read-only, manifest `597cbc03…`) stays unchanged.

## 1. Diagnosis

- The guard freezes Git at prepare as "the git the child resolves on its sanitized PATH" (`executableBindings`,
  `guarded-rebuild.mjs` 1036–1066) and re-checks it on use by path, bytes and version (`bindingFindings`, 1070 onward). Both
  resolve with `resolveOnPath("git", env)` (953–966): the first PATH entry, `.com` before `.exe`, where `env` defaults to
  `sanitizedEnv(process.env)`, the environment of the process that runs the guard.
- Lane A ran `prepare` and the resume from the Git Bash tool. In that environment PATH entry 2 is
  `…\Git\mingw64\bin`, before `…\Git\cmd` (entry 32); the frozen environment names include `HOME` and `MSYSTEM`. So the guard
  froze `…\Git\mingw64\bin\git.exe` (`cab4c4ee…`).
- Lane B's review ran from a Windows shell whose PATH reaches `…\Git\cmd` first. `…\Git\cmd\git.exe` (`81ef35ae…`) is Git
  for Windows' launcher; it reports the same version text but is a different file. `bindingFindings` therefore returned "the
  git path changed" for both checkouts, and Lane B's entry stopped. **The guard behaved correctly.** The candidate, STATE and
  bindings are not at fault; the review process's PATH order is.
- One more resolution fact: on Windows, Node's process launcher (libuv) searches the child's working folder **before** PATH.
  The guard checks only the checkouts for a shadowing `git`; the launcher below also checks the working folder.

## 2. Proposal: one child-only launcher

`launch-review.mjs` in this packet (**proposed, not executed**). It wraps exactly one fresh Lane B F3 review script and
nothing else; K and N stay a separate later unit.

**Exact invocation (planned).** From any shell, working folder irrelevant to the parent:

```
"C:\Program Files\nodejs\node.exe" C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.mjs --child <Lane B's fresh F3 entry script> --out <new absent folder inside Lane B's fresh attempt packet>
```

The child runs as `spawnSync(<frozen node>, [<child script>, …], { cwd: "C:/robertaoai/my-editorial-app", env: <child env>, stdio: "inherit", shell: false })`.

**Environment construction (child only).** Copy the parent environment; require exactly one key that matches `PATH`
case-insensitively (stop otherwise); drop every PATH-variant key; set one key `PATH` = the frozen Git directory
`C:\Users\rober_24syk4j\AppData\Local\Programs\Git\mingw64\bin`, then every existing PATH entry in its existing order, minus
duplicates of that one directory. All other variables pass unchanged; the guard's own `sanitizedEnv` still removes the Git
redirect variables inside the child. The parent's environment, the user and machine PATH, profiles and Git configuration are
not touched; the parent PATH hash is recorded before and after. No alias, shim, wrapper, replacement binary or link.

**One environment for everything.** The child inherits this environment, so the guard (default `sanitizedEnv(process.env)`)
and every bare `git` the review script spawns resolve the same file.

**Gates before the child starts** (any failure writes `launcher-result.json` and exits 2; no child runs):

| # | Gate |
|---|---|
| L1 | STATE SHA-256 = `1fd1a888…`, state `ready`, attempt 2, work ID `7bd2af2f…`; bindings read from STATE, not from constants |
| L2 | The launcher runs under the frozen Node: path `C:\Program Files\nodejs\node.exe`, SHA-256 `9a4eb5f1…`, `v24.18.0` |
| L3 | The frozen `git.exe` exists with SHA-256 `cab4c4ee…` and version `git version 2.54.0.windows.1`; no `git.com` beside it |
| L4 | Exactly one PATH key in the parent; the child has exactly one, with the frozen Git directory first |
| L5 | No `git.com`, `git.exe` or `git` in the working folder; the first PATH hit (`.com` before `.exe`) is the frozen file: path, bytes and version equal |
| L6 | The guard's own `bindingFindings(STATE bindings, { checkout, env })` returns **zero** for `attempt-2/gen/checkout` and `attempt-2/gen/fresh`. This includes node, git path, bytes and version, the Git configuration outside the checkout, each checkout's effective configuration, tool pins and the shipped studio files |
| L7 | Before-snapshot equals the reviewed values: HEAD R, clean, nothing staged, STATE, answers, candidate 583 files, manifest and graph |

**After the child** (exit 3 if any differs; the child's exit code is recorded separately): HEAD, status, staging, B-050,
STATE, answers, the candidate file map, manifest and graph, configuration, refs outside `refs/codex/turn-diffs/`, live graph,
receipt count, lock and journal all equal the before-snapshot, and the parent PATH hash is unchanged.

**Residual risk (stated, not fixed).** The frozen configuration digests were taken in the Git Bash environment. If a variable
that Git reads (for example `HOME`) differs in Lane B's shell so that `config --list --show-origin` reports another file,
L6 fails and the launcher stops. That is a binding finding to report, not a reason to relax a rule.

## 3. Failure route

Any stop: keep `launcher-result.json` and every log, change nothing, and return the packet to Lane A with the failing gate.
Do not retry by changing guard rules, STATE, candidate bytes or bindings, and do not count a stopped attempt as a pass. A
change to the bound producer, source or candidate needs separate authority and a fresh review.

## 4. DoR → planned validation → DoD evidence

| # | DoR | Planned validation | DoD evidence | Owner |
|---|---|---|---|---|
| 1 | Diagnosis accepted | Lane B reviews §1 against the guard source and its failed packet | Lane B's review naming this packet's manifest | Lane B |
| 2 | Launcher reviewed by exact bytes | Lane B reads `launch-review.mjs` in full | Review naming its SHA-256 | Lane B |
| 3 | Release for a fresh F3 attempt | — | Judge act naming the launcher SHA-256 and Lane B's fresh attempt folder | Judge |
| 4 | Fresh attempt folder and script | Lane B writes a fresh folder; earlier packet untouched | Lane B's manifest; old packet still 35/35 | Lane B |
| 5 | Executable binding | Gates L1–L6 | `launcher-result.json`: zero findings, resolved path, bytes and version equal the frozen values | Lane B (runs the launcher) |
| 6 | Protected bindings unchanged | Gate L7 plus the after-snapshot | Before = after for every listed binding; parent PATH hash unchanged | Lane B |
| 7 | Remaining boundary | The review script's own entry and final gates: configuration, permitted refs, linked inventory `3e32d008…`, live Q6 state, frozen `cac590ad` | The review packet's gate files | Lane B |
| 8 | Full F3 review | All required producer projections and remaining F3 checks | Lane B's complete positive F3 review. **A corrected binding alone is not F3 acceptance** | Lane B |
| 9 | K, then separate N | Only after row 8 | Commits with their checks and commit proof | Lane B |
| 10 | Independent K/N verification | After row 9 | Lane A's verification packet with fresh inventory | Lane A |

All rows are **planned**; none is executed.
