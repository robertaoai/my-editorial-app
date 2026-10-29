# Transfer-and-push plan — "manual fallback to push lane a and lane b — this task work" (plan only; nothing done)

Judge act: "Judge Approve: Manual fallback to push lane a and lane b - this task work", clarified by the selection "Commit
packets, then push" (Lane A session, 2026-10-30). The selection's own text says that a transfer needs the files, destination
folders and commit plan named first. **This plan names them. Nothing is copied, committed or pushed until the Judge approves
this plan by its SHA-256.**

## 1. What is transferred

`TRANSFER-LIST.json` (this packet) lists every file, with its source, bytes, SHA-256 and destination: **171 files, 6,774,997
bytes**. Add this packet's `TRANSFER-PUSH-PLAN.md`, `TRANSFER-LIST.json` and `SHA256-MANIFEST.txt`, which cannot list
themselves.

| Lane | External packet (under `C:/CoWork/outputs/`) | Content |
|---|---|---|
| A | `lane-a-graph-sync-after-d475-2026-10-29` | Cycle-after-D-475 evidence, reviews 1–2, evidence-2; from `work/` only `STATE.json` and `PENDING.json` |
| A | `lane-a-git-binding-plan-2026-10-29` | Git binding plans r1–r4b, launcher r1–r4, diffs, instructions, manifests |
| A | `lane-a-review-f3-child-2026-10-29` | Review of the first child, probes |
| A | `lane-a-review-f3-r3-2026-10-30` | This r3 review and this plan |
| B | `lane-b-after-d475-f3-2026-10-29` | The failed first F3 attempt (Git-path finding) |
| B | `lane-b-after-d475-f3-r2-preparation-2026-10-29` | Preparation of child r2 (two 2.5 MB snapshots) |
| B | `lane-b-after-d475-f3-r2-2026-10-29` | Execution packet: `entry.mjs`, `entry.r3.mjs` (copied only; the source stays unsealed and untouched) |
| B | `lane-b-f3-review-consolidation-2026-10-29` | Consolidated handoff draft |
| B | `lane-b-f3-corrections-r3-2026-10-30` | r3 corrections: capture, wrapper, fragments, manifest |

**Excluded:** `lane-a-graph-sync-after-d475-2026-10-29/work/**` other than the two state records. That is 1.15 GB of
regenerated checkouts, the staged candidate and attempts; their identities are already bound by hashes in the transferred
evidence. **Not included unless the Judge adds them:** the earlier D-473–D-475 packets
(`lane-a-q6-record-2026-10-28`, `lane-a-d473-correction-2026-10-28`, `lane-a-q6-recording-2026-10-28`,
`lane-a-graph-sync-q6-2026-10-28`, `lane-a-publish-q6-2026-10-29`, `lane-a-push-q6-2026-10-29`,
`lane-a-q6-registration-2026-10-29`, `lane-a-d475-recording-2026-10-29`).

## 2. Where it goes, and why there

Destination: `docs/handoff/artifacts/after-d475-f3/<packet>/<same relative path>`. `docs/handoff/artifacts/` already holds
682 handoff artifact files. `docs/handoff/` is Lane A's surface, outside the graph-coverage requirement and counted as
excluded-only by `docs-drift`, so the transfer adds no new governed drift.

**Byte exactness.** The root `.gitattributes` sets `* text=auto`, and the checkout has `core.autocrlf=input`. Five files
contain CR bytes, two of them sealed manifests, and Git would normalize them. So the first commit adds
`docs/handoff/artifacts/after-d475-f3/.gitattributes` containing exactly `* -text`, scoped to that folder only; the root file
is not touched. Every copied file must then have committed blob = `git hash-object` of its source, and committed SHA-256 =
the source SHA-256 in `TRANSFER-LIST.json`. Any difference stops the unit before the push.

## 3. Commits (Lane A records both; the files stay byte-exact copies)

| # | Commit | Paths | Sole parent |
|---|---|---|---|
| T1 | `handoff(artifacts): after-D-475 F3 Lane A evidence — byte-exact custody copies (manual fallback)` | `.gitattributes` above; the 4 Lane A packets; an `INDEX.md` listing both commits' packets | R `71dfbbe` |
| T2 | `handoff(artifacts): after-D-475 F3 Lane B evidence — byte-exact custody copies made by Lane A (manual fallback)` | the 5 Lane B packets | T1 |

Both are `docs/handoff/**` only, Lane A's surface, so no `Lane-Crossing` trailer is needed. The Lane B files are custody
copies; Lane B stays their author.

For each commit: copy by script (exclusive create, read-back); `git add` exactly the listed paths; verify that the staged path
set equals the list; run two complete `bun run check`; commit with
`git -c core.hooksPath=.githooks -c user.email=241258103+robertaoai@users.noreply.github.com commit -F <message>` under
`GIT_TRACE`; then prove the staged and committed blobs per file, the sole parent, the path scope, the hook trace, the identity
and a clean after-state.

**Expected check result, which needs the Judge's explicit acceptance.** The governed drift from D-475 is still open, because
its guarded cycle has not published. So `docs-drift` will fail on T1, T2 and before the push. Earlier pushes required 19/19.
**This manual fallback requires the Judge to permit `docs-drift` as the sole failure for T1, T2 and the push.** Any other
failure, skip or startup failure stops the unit.

## 4. Push (last)

Range from the server tip H6 `b4604bc8a8ee69081b46d235166442a0ae7acb7b`, excluded: **D-475 `22b0a8c` → R `71dfbbe` → T1 → T2**,
four commits, linear, no merges.

1. Fresh pre-push gates: HEAD T2, clean; the manifest of the four commits equals Git; refs and configuration as at entry,
   except the feature head; linked inventory `3e32d008…`; the live graph still the Q6 release (unchanged by this unit).
2. Two complete checks; `docs-drift` the sole permitted failure (§3).
3. Snapshot refs and configuration → `git ls-remote --exit-code origin refs/heads/features/feature-V1-SM05` must equal exactly
   `b4604bc…` → one non-force `git push origin <T2 full ID>:refs/heads/features/feature-V1-SM05` → `ls-remote` must equal T2.
   A rejection or a different base stops: no fetch, rebase, reset or retry.
4. Completion proof: all four commits and the earlier 61 reachable; local HEAD equals the tip. Coverage then **65 delivered**.

## 5. Consequences to accept

- The remote branch will carry D-475 and request R while the after-D-475 graph cycle is unfinished. The live graph stays at
  the Q6 release, and governed drift stays open until that cycle publishes. The guarded cycle, F3, K/N, publication and its
  health record continue later, as before.
- The guarded cycle's planned range changes: its health record will follow T2, not R. Its later push will start from T2.
- This is a fallback outside the D-425 cycle sequence. It needs registration in a later, separately authorized Register
  entry, with this plan and its approval.
- No installation, no change to the live graph, work, candidate, STATE, answers or execution packet, and no K or N.

## 6. What the Judge approves (one act)

1. This plan by SHA-256 (in `SHA256-MANIFEST.txt`), with the file set in `TRANSFER-LIST.json`, or a changed file set.
2. `docs-drift` as the sole permitted check failure for T1, T2 and the push.
3. The push of the four commits from base `b4604bc`, after T2's proof.
