# D-439 execution package r1 — bound to EV correction packet r9

**Authority:** Judge, 2026-10-16: "Judge Approved: Lane A prepare the D-439 execution package bound to EV r9. Run
complete-case and omitted-E12 controls in disposable copies, then return to Lane B for review."
**Status:** package prepared; controls passed in disposable clones at `317404b`. **Not recorded, not applied.** The
`D-439` Register act and the application act still need the Judge. The `D-438` helper r4 and harness r5 are unchanged.

## 1. Bound inputs

| Input | Value |
|---|---|
| EV packet r9 (repository custody copy `docs/handoff/artifacts/B-136/ev-corrections/EV-CORRECTION-PACKET-r9.md`) | SHA-256 `dfd5c7771e9b1980c95b3ecaf26c01630e8a4d128d135b7647d8e7edb88f5c65` |
| `docs/Modular_PRD.md` pin | blob `8dcaedc82729a6968a23f340103ce3ce9f70d108` |
| `docs/source/README.md` pin | blob `ba7b0db3bd14fe95cf9ab288c4cefd1b89ba3d0c` |
| `docs/governance/requirements-traceability-map.md` pin | blob `53fcb80e2f4d17807f8061bcc93d29c0f6401dde` |
| Active edit set (§7a) | E1, E2, E6, E12 (Modular_PRD); E3, E4 (source/README); E8, E9, E10, E11 (map) |

## 2. Package files (this folder)

| File | SHA-256 | Role |
|---|---|---|
| `ev-apply-d439-r1.mjs` | `2cd00be18957f4121dc4f5aba64fe7351cf049efd96665c56af61e9a86a3fa09` | Helper. Modes `s0`, `expected`, `apply`, `verify`, `verify-commit <c>` |
| `ownership-317404b.json` | `1ac93488579048d74408825849ab8f0cca166e54203cbb31cb0372f98fe4965f` | Ownership manifest: 103 lines naming `D-439` in 11 files (all under `docs/handoff/`), pinned in the helper |
| `make-ownership.mjs` | `b0b421f51b23847ed3a2109ca9729617550d52fa14e0a7172f84fb708b4d582f` | Builds the manifest from a clean checkout at its base; refuses to overwrite |
| `run-controls-d439-r1.sh` | `c244c91fd98ad4dd0b098191cda33c4a7059ad873136957799c960955cf2dfaa` | Harness: one disposable clone per case; exit 3 on any setup or evidence failure |
| `runs/20261016T091659Z-2cd00be18957/results.txt` | `8826f9b43cb26532e5eb950cd5ccb2d8ce0a7244832db4631e028a2607d69972` | 27 results, 0 wrong; raw logs in `logs/` (23 files) |
| `runs/…/K2-expected.json` | `08240c5870f64a161307e2ce4ea6ce385ee0d9527ef4eb2c74a957e07e4746b9` | Expected record for date `2026-10-16` |
| `live-s0-317404b-r2/log-s0.txt` | `df7c0c54cff43a1dbed7fdbc6979f5ab52598f4daa6c8bd3f09a2df1594985dc` | Read-only S0 against the live checkout: 103/103 lines listed |
| `ownership-317404b-r0-SUPERSEDED-crlf.json`, `live-s0-317404b-r0-SUPERSEDED/` | `4b05350a…`, log `46540c6a…` | Superseded; kept as evidence of finding SG-1 |
| `probe.mjs` | `9da4a447…` | Read-only measurement of targets and line endings (not part of the procedure) |

## 3. How the helper decides

- **Expected bytes** come from the pinned blobs read from the object store (`git cat-file`), not the working tree, and from
  the packet texts. Every edit text must occur literally in packet r9, and the edit set must be the §7a set. `{DATE}` and
  `D-NNN` are substituted only inside the new texts. An **inverse check** undoes the 10 edits and must give the pins.
  The record is written with exclusive create **before** any write.
- **S0:** `D-439` absent from the Register; three pins equal; each target occurs exactly once, only in its own file
  (77 governed files); ownership by exact line; target paths clean.
- **apply:** E2a (paths clean and at pins); E2b before each write (written files = intended, unwritten = pins); writes
  by editing the working-tree bytes; post-write bytes = intended. Refuses without the `D-439` act in the Register.
- **verify / verify-commit:** recompute the expected bytes and compare them with the stored record (a stored hash is
  never trusted alone); then per edit: new text exactly once, old text as often as in the expected bytes; then
  whole-file comparison. A failure names each failing edit ID; a difference no edit explains is reported as unattributed.

## 4. Control results (run `20261016T091659Z-2cd00be18957`, base `317404b`, date `2026-10-16`)

| Case | Required | Result |
|---|---|---|
| **K2 complete** | expected → apply → verify → commit → verify-commit all pass | **passed**; commit blobs `93eb1e82…` (Modular_PRD), `0b250457…` (README), `510fedf1…` (map) = expected |
| **K3 omitted E12** | every other edit applied; `NG-11` keeps "owner TBD"; verify fails and names E12 | **failed as required**, exit 2: "E12 (docs/Modular_PRD.md: new 0/1, old 1/0)", in working tree and in commit; no other edit named; expected record identical to K2's |
| K1 | S0 at base passes | passed |
| K4 | `D-439` already in Register → refuse | refused |
| K5 | `D-439` line outside `docs/handoff/` → refuse | refused |
| K6 | new handoff record line, handoff-only commit → allowed | allowed (see SG-2) |
| K7 | new handoff line plus a non-handoff commit → refuse | refused |
| K8 | tampered manifest → refuse | refused |
| K9 | second `expected` run → refuse overwrite | refused |
| K10 | apply without the act → refuse | refused |
| K11 | byte injected after first write → E2b refuses | refused |
| K12 | extra byte outside every edit → unattributed difference | refused |

## 5. Self-grade (Lane A, labelled self-grade; not independent review)

| ID | Finding | Disposition |
|---|---|---|
| SG-1 | **Fixed before the controls.** Manifest r0 hashed committed blob lines (LF); the checkout has B-136 in CRLF, so 52 lines did not match. With 0 commits since base, the "handoff-only" test was true vacuously and let them through. Fix: drop one trailing CR on both sides; unlisted lines need at least one commit since base. r0 kept as superseded | Fixed |
| SG-2 | **Relaxation against `D-438` r4.** r4 refused any unlisted `D-439` line, also in handoffs (its C2b/C2d). r1 allows unlisted lines under `docs/handoff/` when every commit since base is a non-merge, handoff-only commit, so that later records (this one, Lane B's review) do not need a new manifest. It does not read what those lines say | **Lane B decides:** accept, or require strict mode (manifest rebuilt at the pre-act commit and re-reviewed, helper r2) |
| SG-3 | Edit texts are transcribed into the helper. The literal check binds each text to packet r9, but not each old–new pairing; the 10 entries need reading against packet §1–§3b | Review item |
| SG-4 | E10 lands after the `---` line that ends §7 (packet: "immediately before the line `## 8. Maintenance`") | As specified; observation only, no text change |
| SG-5 | Expected bytes depend on the act date. At application, `expected` runs again with the act date and is recorded before writing | Procedure |
| SG-6 | The harness's own failure paths (exit 3) are not self-tested in r1; r5's T4/T5 tests are not repeated | Limit |
