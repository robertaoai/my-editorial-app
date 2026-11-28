# Stop 1: route 2a, hook-trace control (2026-11-13T13:36:28Z)

**Status:** stopped before any source-repository edit. Source HEAD is still `30db8d51140c0e46700f96bb9f018e6e40b93cbc`, and the source tree is clean.

**What happened.** In CL, snapshot commit S2A = `b77629c511dea60ba8f0e403821f38f5c9754009` was created:
- tree `cb70db9c54e835bcd6facdc6dd81d49bb811f57e`, which equals the bound result tree;
- sole parent D-486;
- message "SNAPSHOT — test artifact; not for the source branch";
- commit exit 0.

Lane A's route script then stopped. Its hook-trace pattern was `/run_command: \.githooks\/commit-msg/`. The trace (`snapshot/2a/snapshot-commit-trace.txt`) shows the hook ran, but with an environment prefix:
- line 18: `trace: run_command: GIT_EDITOR=: GIT_INDEX_FILE=.git/index .githooks/commit-msg .git/COMMIT_EDITMSG`
- line 20: `child_exit[0] pid:5740 code:0 elapsed:0.502890`

So the control (hook ran, and its exit was recorded) is met in the trace, but the script's matcher was too narrow. Fixtures, jev:selftest, the prediction check, the negative test and the export have not run for 2a.

**Disclosure: execution-side scripts.** rev2 §3 says: "No execution-side verifier script is proposed. Any script Lane A would add is listed with its exact scope for authority before the attempt."

Lane A wrote and used these scripts. None was listed with its exact scope for authority before the attempt:

| Script | Scope |
|---|---|
| `preflight/bind.cjs` | Records HEAD, index listing, status and graph-store file hashes. Read-only. |
| `classification/classify.cjs` and `classify-final.cjs` | Builds the Layer 4 table. Read-only on the repo. |
| scratch `lib-run.cjs`, `route.cjs`, `source.cjs` | Orchestrates the r4/rev2 steps (apply, ledger, commit, tests, checks, export, stage, commit) and writes evidence. |

They will be copied into E. The Judge's decision is required before any further step.
