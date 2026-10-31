# Lane A exact-byte review — Lane B's r3 corrections (F-1, F-2, F-4), at R `71dfbbe`

2026-10-30. Static inspection plus read-only measurements (file hashes, a manifest check and Git reads with
`--no-optional-locks`). No target child, launcher, capture script, wrapper, worker, stand-in or fault case was run. This is
not F3 acceptance and not execution permission.

## 1. Identities, recomputed

| Artifact | Bytes | SHA-256 | Result |
|---|---|---|---|
| `lane-b-after-d475-f3-r2-2026-10-29/entry.r3.mjs` | 53,630 | `52ff2b33ab9d743a4345f45172de2028639200c6d3fc601c1a980cd51cd340c6` | equal |
| `lane-b-after-d475-f3-r2-2026-10-29/entry.mjs` (kept) | 52,288 | `6f07293ae714cf702365c545a1a9f2e720c008ccb8d8b8f96909467bb7db6cd3` | unchanged |
| `lane-b-f3-corrections-r3-2026-10-30/SHA256-MANIFEST.json` | 3,214 | `8cde0d4e6090a8cebefd76bf7dbdf6d5e802e067fa35ac798390d6a4d6d0a4df` | equal; **14/14 entries verify** |
| `capture.r3.mjs` | 4,086 | `bbb00be10f46b95e809ab994673ce94e3f1d71ffdb83086f7a54bb0d96715952` | equal to the value the wrapper pins |
| `invoke.r3.ps1` = `INVOCATION.ps1.txt` | 1,764 | identical bytes | — |
| Pinned `pwsh.exe` (`…/codex-runtimes/…/powershell/pwsh.exe`) | 301,368 | `362a356ce7f0940ec74f73a8fc2c990a2cc24a38a11c90bbd8eca947110ad139` | equal to the wrapper's pin (hashed only; not run) |
| Node `C:/Program Files/nodejs/node.exe` | — | `9a4eb5f1c29c6a2e93852ead46b999e284a6a5ca8bab4d4e241d587d025a52de` | equal |
| Launcher r4 | 21,015 | `1906c92a…` | unchanged |

The execution packet holds `entry.mjs` and `entry.r3.mjs` only; it is unsealed; `capture-run-2`, `launcher-run-2` and
`f3-run-2` are absent.

`entry.mjs` → `entry.r3.mjs`: +44/−22. The changes are the output names (`f3-run-2`, `launcher-run-2`), the revision tag, the
self-path check (`entry.r3.mjs`), `semanticSummary()`, the shared finalization state (`FIN`, `observedFile`, `terminal`,
`fallback`) and the final handler. The input bindings, worker and every substantive check are byte-identical.

## 2. Findings against F-1, F-2 and F-4

| Finding | r3 implementation | Verdict |
|---|---|---|
| **F-1** capture | `capture.r3.mjs` 29–30: `spawnSync(node, args, { shell:false, stdio:['ignore', stdoutFd, stderrFd] })`. The launcher gets exact argv (array, no shell, no join), so `-- --out …/f3-run-2` arrives as written. Raw file descriptors mean no text decoding or ErrorRecord wrapping; the launcher's and child's stdio inherit them. 31–33: actual status, signal, pid and spawn error are recorded; a missing pid, null status or signal is an error. 35: fsync and close. 37–39: both logs observed; `completeCapture` only with both present, an integer exit and no error; otherwise exit 6. 41–42: `host-result.json` written once with read-back; on failure, a partial-file observation and a stdout fallback line. Wrapper `invoke.r3.ps1` 5–21: pins host path, edition, version and bytes; Node and capture bytes; runs `& $node $capture` with no redirection, `ErrorActionPreference='Continue'` and `$PSNativeCommandUseErrorActionPreference=$false`; exits with the capture exit (6 if null) | **Closed in design.** Capture behaviour remains **untested** |
| **F-2** terminal records | `entry.r3.mjs`: one `FIN` object holds the preliminary path, bytes, hash, exit and status; `terminal(exit, …)` sets `R.exit` and `R.runtimeStatus` from the final exit and builds every authoritative record; `fallback` (normal completion-write failure, missing output and the outer `finalize` handler) uses `terminal`, writes synchronously to fd 2 and falls back to fd 1; `observedFile` separates an absent, a present (possibly partial) and an unreadable file. Disposition: `confirmed`, `superseded: preliminary exit P, final exit F`, or `unverified or absent; never authoritative` | **Closed in design** |
| **F-4** semantic summary | `semanticSummary()`: `pendingSemantics: 0` and `complete-zero-unresolved` only when all ten named prerequisite checks have status `pass`; otherwise `null` and `unknown-or-incomplete`, with each check's status and evidence path | **Closed in design** |

## 3. Residual observations (not blocking)

| ID | Severity | Note |
|---|---|---|
| O-1 | Info | Inside `lifecycle-composition`, `semanticSummary()` always reports `unknown-or-incomplete`: that check is still running and `producer-projections` has not run. This is accurate at that point and conservative; only `final-state` can report zero |
| O-2 | Low | The host pin covers the `pwsh.exe` launcher stub (301 KB), its reported edition and version, not the whole runtime it loads. The shell only launches the capture script, which owns the streams and the exit, so the effect is small. The pinned shell sits in the Codex app's private runtime folder and may be replaced by an app update; a hash mismatch then stops the wrapper (safe) |
| O-3 | Low | The host identity is enforced by the wrapper but not recorded by the capture script, which accepts no arguments. Recording it would need a reviewed change; otherwise keep the terminal transcript, as the wrapper's comment says |
| O-4 | Info | The F-5 limit stands and is stated: no timeout in the capture, launcher or child spawn; a hang or interruption leaves incomplete evidence and is never accepted |
| O-5 | Info | `launch-review.r4.mjs`'s header comment and `PLAN.r4b.md` §2 still show the `entry.mjs` / `launcher-run-1` example. The release must bind the r3 paths (`entry.r3.mjs`, `capture-run-2`, `launcher-run-2`, `f3-run-2`), as Lane B proposes |

## 4. Capture-validation scope (for a separate Judge release)

Agree with Lane B's scope. Each stand-in case must keep: the host identity (path, bytes, edition, version), the exact argv,
both complete raw stream files, the actual exit, signal and spawn error, `host-result.json` or its fallback line, and every
partial file. Cases: stdout and stderr both written; several JSON lines; nonzero exit; spawn failure; a missing or locked
output; and a host-result write failure. Use stand-ins only, never the target child or launcher, and keep them separate from
F3 execution.

## 5. Recommendation

r3 resolves F-1, F-2 and F-4 at the design level. **Suitable to proceed to a separately released capture validation**,
then a renewed review of its evidence, then a Judge execution release that binds launcher r4 `1906c92a…`, child
`52ff2b33…`, capture `bbb00be1…`, wrapper `invoke.r3.ps1`, the pinned shell, the exact arguments and the three `*-run-2`
output paths. K and a separate N remain later gates.
