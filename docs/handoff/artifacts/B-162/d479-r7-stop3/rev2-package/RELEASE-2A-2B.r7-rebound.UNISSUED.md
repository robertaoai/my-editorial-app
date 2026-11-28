# DRAFT — NOT ISSUED

**Rev2 review package.** The two date literals describe the patch bytes under review. Each Singapore-local commit day awaits a separate Judge decision. The drafter assembled this package and generated its manifest. Lane A checks the retained bytes and evidence. Independent reviews retain their existing routes.
## Judge release r7 — D-479 propagation commits `2a` and `2b` (rebound review draft)

**Assigned actor:** Lane A, Claude Code.
**Scope upon separate issuance:** two local source commits, `2a` immediately followed by `2b`, and two isolated test snapshot commits for their verification. No push.

### 1. Bindings

| Binding | Value |
|---|---|
| Review base and tree | `c5e51cb8ee46ecae071a70448135d71d31c96d1d`, tree `9837d390d5e126cdfa222b05293393865038f452` |
| Source branch and upstream | `features/feature-V1-SM05` and `origin/features/feature-V1-SM05` |
| Proposed execution HEAD and sole parent of source and snapshot `2a` | `30db8d51140c0e46700f96bb9f018e6e40b93cbc` |
| Proposed execution tree | `0b558d2a51f17eff755dfd7fba51bed37548f9ae` |
| Proposed `2b` parents | Source `2b` follows verified source `2a`. Snapshot `2b` follows verified snapshot `2a`. Both `2a` result trees must equal `cb70db9c54e835bcd6facdc6dd81d49bb811f57e`. |
| `2b` result tree | `1fcc621e265f2587a2dd2741db8476fe4f99afd8` for source and snapshot. |
| Proposed `2a` patch | `2a.patch`, 82,341 bytes, SHA-256 `34fb8368c66b4e75599d5fcfec1bb68ba1810e16412b6005c772f919293b2e1d`. Input tree `0b558d2a51f17eff755dfd7fba51bed37548f9ae` and result tree `cb70db9c54e835bcd6facdc6dd81d49bb811f57e`. |
| Proposed `2b` patch | `2b.patch`, 43,073 bytes, SHA-256 `43530dad7c88079534e99972bacfb26b8ea84d35b781c6f1a92209f7bbf350fc`. Input tree `cb70db9c54e835bcd6facdc6dd81d49bb811f57e` and result tree `1fcc621e265f2587a2dd2741db8476fe4f99afd8`. |
| Proposed Intent Index bytes (`2b`) | `docs/v1/V1-INTENT-INDEX.md`, 6,924 bytes, SHA-256 `ab3edcef833ac9d119b3d9e85986a8160e110a42f076d566ccbfdae6230921b9` |
| New `V1-SM05.md` bytes (`2a`) | 2,757 bytes, SHA-256 `128c1a153726709280aceae4e7b1312d92612e3193fa398a8cb143e509c27676` |
| Proposed Singapore-local date literals | `2a` = `2026-11-13`. `2b` = `2026-11-13`. Bind each separately. Confirm or replace each proposal before issuance. The historical D-479 decision date is `2026-11-07`. |
| Proposed patch location | `C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev2`. Review the patch pins and bind the paths under separate issuance. |
| Proposed execution evidence root E | `C:/CoWork/outputs/lane-a-d479-2a-2b-r7-30db8d51140c0e46700f96bb9f018e6e40b93cbc` (must be absent before execution). CL = `E/snapshot/clone`. TMPD = `E/snapshot/tmp`. |

The reviewed input package ended at `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96`. D-486 adds one local Register-only commit on that base. The reviewed input patches reproduce their original trees from `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96`. The rebound patches reproduce the trees above from `30db8d51140c0e46700f96bb9f018e6e40b93cbc`. If the source base moves before execution, return the observed commit, tree and affected paths to the Judge.

Local HEAD is `30db8d51140c0e46700f96bb9f018e6e40b93cbc`. Its sole parent and local upstream are `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96`. The local branch is one ahead and zero behind its upstream. A separate GitHub API lookup of the named branch returned the same upstream commit during this review. Direct strict SSH could not resolve GitHub in this environment. The retained D-486 strict SSH observation at `2026-11-13T07:07:55Z` also reported `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96`. The later execution preflight still requires a fresh strict SSH observation and fresh fetch. [GitHub API observation](remote-observation.json) · [D-486 SSH receipt](C:/CoWork/outputs/lane-a-d486-recording-d8db2da/revised-d86d0c4f/checks/post-recording-ssh.json)

### 2. Proposed content

**Planned order.** `2a → 2b`, then `T3`, then `T4`. Each later unit retains its own release and binds to its observed HEAD, tree and exact pre-image blobs. T4 uses the 2a Workflow Spec and the 2b AGENTS and Phase Closure files. Recheck the 5,400-character AGENTS.md working ceiling on T4’s diff. T4a and T4b retain their existing routes.

- **`2a` — packet and manifest identity, slot and receipt allocation, live references:**
  - `V1-SM05.md` → `V1-SM07.md`, with the heading changed and a move note added. The move note points to `D-486` for the current entry prerequisite. The dated `D-383` paragraph retains its original text. The new `V1-SM05.md` is created.
  - The manifest moves `V1-SM05.json` → `V1-SM07.json` (`packet`, `packetPath`).
  - `closure-readiness.mjs` lines 174 and 255.
  - The three `jev.mjs` manifest examples.
  - Inventory rows, the planned rows (`V1-SM08` labelled a planned enabler work packet) and the D-479 paragraph.
  - `V1-SM06` re-scope. The earlier DoR and DoD lists are kept in place under "earlier, superseded" headings. The six Phase 3 receipt rows are unchanged, under a custody note naming `V1-SM08`.
  - Build Spec §1 slot table and reading rule.
  - Traceability §6.1 heading, rows 1–10 and the re-slot note.
  - WORKFLOWS-SPEC §4 custody and timing.
- **`2b` — named scope notes, local Encyclopedia pointers, the Index, its Inventory row and one `AGENTS.md` line:**
  - Build Spec dated notes on the D-232, D-247, D-381, D-243 and D-260 paragraphs, plus the S2 hold release note.
  - Modular_PRD notes on `FR-04a`, `FR-05a` and `FR-10` (the deferral is superseded for the LinkedIn target only).
  - Modular_PRD notes inside the Then cell of `AC-05a`, `AC-06a` (route-scoped), `AC-07a` and `AC-16`; plus the §8.1 note.
  - FN-GATES §11 lifecycle note.
  - FN-PUBLICATION §12 current-scope note.
  - The SPECS-PUBLICATION sentence.
  - The ENCYCLOPEDIA-SYNC D-479 flags table (Entries 01, 03, 04, 05 and 06; Entry 02 unaffected).
  - `V1-INTENT-INDEX.md` (the proposed bytes), its Inventory row, and the `AGENTS.md` read-order line after the "Authority:" bullet.
  - Phase Closure §5 gains the exact D-479 slot note immediately below the table and before the Lane C history note. Preserve the Lane B cell and all lane-state values. The separate T4 release places the selected D-478 item 14 note immediately after the slot note.

> **Slot note, `D-479`.** The Lane B row's "`V1-SM05` `BLOCKED`" records the slot binding in force at its 2026-09-28 nomination: the `FR-15` evidence slice, now `V1-SM07`, which keeps the `BLOCKED` status (`D-479` item 6). The new `V1-SM05` (`MMF-V1-PIPELINE`) is not selected. Construction stays unauthorized. No lane-state value changes.

- **Rulings carried into this review draft:**
  - **R5:** The separately accepted baseline-promotion PR is the `V1-SM08` entry prerequisite after accepted local DoD of the promoted slot. The PR stays immediately before hosted work. The Workflow Spec §4, SM06 custody note, Build Spec D-381 note and Intent Index §5 cite `D-486`. These citations are outside the date substitution and stop rule.
  - The Index is the read-first navigation entry point, and the Build Spec and Register remain required by `AGENTS.md`.
  - The AC notes go inside the Then cell.
  - The Encyclopedia flags are included.
  - **Gate 2 — `V1-SM05-FV-001`.** Retain the existing run ID. **Defer** creation and execution to the separate Judge route. D-479 moved the FR-15 evidence slice and its `BLOCKED` packet status to `V1-SM07`. The new `V1-SM05` remains unselected. Return any ruling on run allocation or activation to the Judge. Apply the applicable block lift, selection, D-242 work order and lane authorization before starting the run. [D-269 item 5](C:/robertaoai/my-editorial-app/docs/v1/V1-DECISION-REGISTER.md:19820) · [D-479 item 6](C:/robertaoai/my-editorial-app/docs/v1/V1-DECISION-REGISTER.md:31514)
- **No change:**
  - `lib.mjs`, `selftest.mjs`, `tier-sweep.mjs`, `graphify-guard.test.mjs`, `suites.mjs` (its `SM05_PATH` import follows the re-pointed constant).
  - `SPECS-VERIFICATION-APPARATUS.md`, `SPECS-TRANSITION-ENFORCEMENT.md`, `FN-MULTI-LANE-AI-GOVERNANCE.md`, `factory-route-operation-crosswalk.md`.
- **Retained, or on a separate route:**
  - Traceability lines 136, 146 and 213.
  - Build Spec §2 and §4, except the S2 note.
  - Product PRD §8.0.
  - The G4/G7 refusal audit-record decision.

> Classified, not edited (D-479 tier rows): `lib.mjs`, `selftest.mjs` and `factory-route-operation-crosswalk.md` have no qualified `V1-SM05`/`V1-SM06` reference at `30db8d5`. `tier-sweep.mjs:105` is a path-resolution comment example. `graphify-guard.test.mjs:170,610` is the branch name, kept by name. `suites.mjs` follows `SM05_PATH`. `SPECS-VERIFICATION-APPARATUS.md:546` is dated ("Met 2026-09-24"). `SPECS-TRANSITION-ENFORCEMENT.md:239` sits inside the dated 2026-10-15 `D-438` correction note. `FN-MULTI-LANE-AI-GOVERNANCE.md:281` is a §10 `[V1]` negative limit. `ENCYCLOPEDIA-SYNC.md` lines 34–63 are dated flag history, and `2b` adds the D-479 flags table.

### 3. Controls upon issuance

Use draft r4 (`C:/CoWork/outputs/lane-a-release-2a-2b-r4-2026-11-07/RELEASE-2A-2B.r4.md`, SHA-256 `c7865e8f822a02520d59fdc835cdf51b666337bda82b9941f1da19f951696543`). Adopt Layer 1 item 6, Layer 2, Layer 3 steps 2 and 5–8, Layers 4 and 4a, **only steps 5.4 and 6.4** of Layers 5–6, and Layers 7–9. Use A1 for method under D-479. r4 remains unissued.

#### r4 overrides for this draft

Apply the following overrides if the Judge separately issues r7. Use the retained r4 controls within the scope listed above.

| r4 location | Rebound instruction |
|---|---|
| Historical bindings and Layer 3 step 5 | Keep `D479_SHA` = `e7e3c6006a7dd9effbcf1f9b9f118fd64e7c910a`, `RECEIPT_SHA` = `93c351a9df44fd45f8240b0a997dfe4b18e99d0c` and `D480_SHA` = `0f698eef0716005b419c1b0df42ec670273b6974`. Use these for the receipt, Register and historical ancestry checks. Use `D486_SHA` = `30db8d51140c0e46700f96bb9f018e6e40b93cbc` as the execution base. Verify the separate upstream and divergence bindings in the preflight below. |
| Layer 4a paths and 2a step 1 | Use `E`, `CL` and `TMPD` from §1. Create `CL` as the isolated clone, check out `D486_SHA` detached there and remove its `origin` as r4 requires. Run clone Git commands against `CL` and set the test process temporary paths to `TMPD`. |
| Layer 4a-2a steps 3–4 | Apply the bound `2a.patch` from §1 after `git apply --check`. Record the ledger against `D486_SHA`. Require the sole parent of `S2A_SHA` to be `D486_SHA` and its tree to match §1. |
| Layer 4a-2b steps 0–4 | Keep the source `2a` and snapshot tree equality gate. Start the snapshot from `S2A_SHA`. Apply the bound `2b.patch` from §1 after `git apply --check`. Record the ledger against `S2A_SHA`. Require the sole parent of `S2B_SHA` to be `S2A_SHA` and its tree to match §1. |
| Both Layer 4a export steps | Export from `CL` with `git diff --binary --full-index --find-renames`. Use `D486_SHA S2A_SHA` for `2a` and `S2A_SHA S2B_SHA` for `2b`. Retain the exports under `E/snapshot/2a.patch` and `E/snapshot/2b.patch`. Match each export to the bound §1 patch by bytes and SHA-256. |
| Steps 5.4 and 6.4 | Apply the corresponding verified export under `E/snapshot/` to the source after `git apply --check`. Check its pin against §1 before applying it. Follow the inherited source checks and date stop. |
| Layer 7 step 6 | Require `C2A_SHA` to have sole parent `D486_SHA`. Require `C2B_SHA` to have sole parent `C2A_SHA`. Match each source tree to its verified snapshot tree. |
| Layer 9 route and final report | Report snapshot routes `D486_SHA → S2A_SHA` and `S2A_SHA → S2B_SHA`. Seal the evidence under `E`. If both source commits exist, report their full SHAs in order and give the local review range `D486_SHA..C2B_SHA` with full endpoints. Keep the row `1b` outgoing-range assessment on its separate Judge route and include D-486 in that later assessment. |

#### Execution controls

- **Preflight:**
  - Lane A `Active`, a clean working tree and index, and E absent.
  - Fresh strict SSH query and separate fetch of the named upstream. Require both to report `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96`. Require source HEAD `30db8d51140c0e46700f96bb9f018e6e40b93cbc` and divergence of one ahead and zero behind. Confirm that D-486 is the sole local commit above that tip.
  - Ancestry `e7e3c60 → 93c351a → 0f698ee` and `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96 → 30db8d51140c0e46700f96bb9f018e6e40b93cbc`, with r4's receipt and Register path checks.
  - Reverify the r7 (26), r8 (14) and r4 (2) manifest members. Verify the rebound manifest and its patch pins against §1.
- **Candidate content:**
  - In CL, apply each approved patch with `git apply --check`, then `git apply`. Make no other edit.
  - The r4 Layer 4a export becomes `git -C CL diff --binary --full-index --find-renames <base> <snapshot>`. Require its bytes and SHA-256 to equal the approved patch.
  - Clone CL with `-c core.longpaths=true`.
- **Line endings:**
  - Source working-tree files are CRLF over LF blobs (`core.autocrlf=input`).
  - Verified on a simulated CRLF tree: `git apply` writes the patched paths back as LF, equal to the candidate blobs, and the staged trees must match §1. The current review used isolated checkouts with LF working copies.
  - Layer 7 step 1 compares the patched paths byte for byte.
- **Commits:**
  - The snapshot message and identities as r4 prescribes.
  - The four `GIT_AUTHOR`/`GIT_COMMITTER` values `robertaoai` / `241258103+robertaoai@users.noreply.github.com`.
  - Explicit `-c core.hooksPath=.githooks` and source `GIT_TRACE`. The trace must show `run_command: .githooks/commit-msg` and its exit for each commit.
  - Never `--no-verify`. No amend, reset, rebase or retry.
- **Evidence:**
  - Startup proofs.
  - Fixture and `jev:selftest` results.
  - Prediction runs.
  - Negative-test and restoration evidence.
  - Two complete sequential source checks per commit with zero skips.
  - Tested, staged and committed byte equality.
  - Sole parents.
  - Live graph-store bytes unchanged.
  - r4's stop and seal rules.
- **Date stop:** Before each separately released commit, compare its actual Singapore-local date with the literal bound for that commit. If it differs, stop before committing and return the mismatch. Apply the `2a` date at the ten named sites and the `2b` date at the two named sites. The four D-486 citations and the historical dates, including 2026-09-28 in the slot note and 2026-11-07 in D-479, stay outside substitution. A changed 2a date requires both patch pins and tree pairs to be recomputed or reverified from D-486. A 2b-only date change requires a new 2b patch pin and result tree. Refresh the affected ledger, replay and manifest. [Date site evidence](replay-verification.json)
- **D-428:** a separate exception for each commit. Allow `docs-drift` and only these D-480 findings while each named-path exception is in force:
  - `2a` and `2b`: `absent from the curated graph: docs/v1/work-packets/V1/V1-SM07.md`
  - `2b` only: `absent from the curated graph: docs/v1/V1-INTENT-INDEX.md`

  Report allowed failures as failures. Stop on any other finding, skip, startup failure, unexpected path or binding mismatch.
- **Verifier scope under D-481 item 2:** exactly V-1 to V-4.
  - V-1: `closure-readiness.mjs:174` packet path.
  - V-2: `closure-readiness.mjs:255` blocked-slot diagnostic.
  - V-3: `jev.mjs` lines 3–5 manifest examples.
  - V-4: the moved manifest's `packet` and `packetPath`.

  No execution-side verifier script is proposed. Any script Lane A would add is listed with its exact scope for authority before the attempt.
- **Hand-back:** the two local source SHAs and the exact local range `30db8d51140c0e46700f96bb9f018e6e40b93cbc..<2b>`, with the sealed evidence. Lane B Level 1 and Lane C Level 2 exact-commit reviews keep separate releases.

### 4. Row 1b and holds

**Row 1b stays separate.** The November 9 delivery authority, exact review coverage of `e7e3c60`, and any future push range, destination or release remain Judge decisions. The `d8db2da` tracking push has its own completed delivery record. Include `30db8d51140c0e46700f96bb9f018e6e40b93cbc` in the later outgoing range assessment.

Keep B-136, B-158, B-162 and D-439 Open. Until explicit issuance, `2a`, `2b` and both snapshots stay held. Shared-file work from `T3`, `T4` and conditional `T4a` follows under its own release against the resulting base. `T4b` keeps its own route, and the D-478 item 14 note awaits `T4`. A filing pause during the window needs explicit coordination; unexpected source movement triggers the stop rule. Preserve all other D-481/D-482 holds: filing, answer edits, receipt repair, further push, held reviews, graph work, custody and evidence portability, U-C, J1/J2 transfers, lane changes, the FR-15 lift, selection, FN-EXCEPTIONS, and construction.

Preserve the D-483/`10024` stop, D-484, r4 issuance and execution, the full-manifest gate and attributed B-162 filing on their existing routes. Receiver access stays open. Unit 5b stays deferred. The D-428 allowance for D-486 leaves `docs-drift` open on D-425.

| Verdict | Follow-up phase |
|---|---|
| **Approve-with-conditions** | Judge review of the rebound package, patch paths, proposed dates and any outstanding ruling. A separate Judge release governs local propagation and independent reviews. |
| **Defer — Gate 2** | Retain `V1-SM05-FV-001` as the run ID. Return allocation or activation to the Judge on the existing Gate 2 route. |
| **Defer** | Keep `2a`, `2b`, both execution snapshots, r7 issuance, row 1b, push, graph work and all other holds on their existing separate routes. |
