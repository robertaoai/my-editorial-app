## Judge issuance — D-479 rebound r7 rev2

Lane A, I issue rebound r7 rev2 for the bounded D-479 sequence `2a → 2b`. I authorize the two local source commits and their two isolated verification snapshot commits, subject to the controls below. Push remains held.

### Package and evidence

Adopt `RELEASE-2A-2B.r7-rebound.UNISSUED.md` from this exact package:

`C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev2`

I bind `manifest.json`, 1,662 bytes, SHA-256 `e1fd1937f05e084da2dcc2b5ec1e50f802051238b3c6c8392f61c2bb687be767`, and its ten members. Reverify the manifest and every member before use. This message supplies the separate issuance and execution bindings called for in the frozen draft. Preserve the package bytes. Apply the incorporated r4 controls only as specified in rev2 §3, with its stated overrides. r4 issuance and execution remain held.

Retain the separate Lane A verification evidence at `C:/CoWork/outputs/lane-a-r7-rev2-verification-30db8d51140c0e46700f96bb9f018e6e40b93cbc`. Its `SHA256SUMS` is 657 bytes, SHA-256 `7e2965874786b8bf73e41e862879919ec8f8ba5317e5f281d5ce9bf4d4959e69`. The sealed verifier materialized the lane-state inputs with `checkout-index`. Preserve the retained evidence as stored.

### Patch, tree and date bindings

| Unit | Package patch | Bytes | SHA-256 | Input tree → result tree | Bound Singapore-local commit date |
|---|---|---:|---|---|---|
| `2a` | `2a.patch` | 82,341 | `34fb8368c66b4e75599d5fcfec1bb68ba1810e16412b6005c772f919293b2e1d` | `0b558d2a51f17eff755dfd7fba51bed37548f9ae` → `cb70db9c54e835bcd6facdc6dd81d49bb811f57e` | `2026-11-13` |
| `2b` | `2b.patch` | 43,073 | `43530dad7c88079534e99972bacfb26b8ea84d35b781c6f1a92209f7bbf350fc` | `cb70db9c54e835bcd6facdc6dd81d49bb811f57e` → `1fcc621e265f2587a2dd2741db8476fe4f99afd8` | `2026-11-13` |

Check each bound date separately before its commit. Stop before committing if the actual Singapore-local date differs. Return the mismatch and affected evidence to me for a new binding. A changed `2a` date requires recomputing both patch pins and reverifying both tree pairs from D-486. A `2b`-only change requires recomputing its pin and result tree from the same verified `2a` result. Refresh the affected ledgers, replay evidence and manifest.

Preserve the ten `2a` and two `2b` date sites. Keep the four R5 citations to D-486, the separate SM07 pointer to D-486 and historical dates outside substitution.

### Preflight, execution and hand-back

Require source branch `features/feature-V1-SM05` at D-486 commit `30db8d51140c0e46700f96bb9f018e6e40b93cbc` and its bound input tree. D-486 is the sole parent of source and snapshot `2a`. Source `2b` follows verified source `2a`. Snapshot `2b` follows verified snapshot `2a`. Both `2a` trees must equal the bound `2b` input tree.

I bind execution evidence root `E` to `C:/CoWork/outputs/lane-a-d479-2a-2b-r7-30db8d51140c0e46700f96bb9f018e6e40b93cbc`. Use `E/snapshot/clone` and `E/snapshot/tmp` as specified. At preflight, verify that `E` is absent, Lane A is `Active`, and the source index and worktree are clean. Run fresh strict SSH and a separate fetch of `origin/features/feature-V1-SM05`. Both must identify `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96`. Require one ahead and zero behind, with D-486 as the sole local commit above that tip. Complete the incorporated ancestry, receipt, Register and manifest checks. Stop and return any mismatch.

Follow rev2 §3 for the snapshot tests, exact patch exports, source checks, hooks and evidence retention. Keep verifier scope at V-1 through V-4. Require byte-identical exports, matching tested, staged and committed bytes, and two complete sequential source checks per commit with zero skips. Keep hooks enabled and retain the issued hook trace. Preserve the live graph-store bytes.

Apply D-428 and D-480 per commit. While the applicable D-480 exception is in force, the only permitted `graph-coverage` findings are:

- `2a` and `2b` — `absent from the curated graph: docs/v1/work-packets/V1/V1-SM07.md`
- `2b` only — `absent from the curated graph: docs/v1/V1-INTENT-INDEX.md`

Report permitted failures as failures. Stop on any other failure except `docs-drift` within the issued D-428 limits. Stop on any skip, startup failure, unexpected path or binding mismatch.

Keep the exact D-479 Phase Closure slot note in `2b`. Preserve the §5 table, Lane B cell and every lane-state value. The selected D-478 item 14 note stays on the separate `T4` route.

Return both local source commit SHAs in order, the exact local review range `D486_SHA..C2B_SHA` with full endpoints, the snapshot routes and the sealed evidence under `E`. Lane B Level 1 and Lane C Level 2 reviews of the exact commits retain their separate releases.

### Separate routes and holds

- **Row `1b`.** Keep the November 9 delivery authority, exact `e7e3c60` review coverage, outgoing range, destination and any push on their separate Judge route. Include D-486 in the later outgoing-range assessment.
- **D-478 follow-up.** Keep `T3`, `T4`, conditional `T4a` and `T4b` held. Preserve the planned order `2a → 2b → T3 → T4`. Bind each later unit to its actual checkpoint under its own release.
- **Other holds.** Preserve all incorporated holds, including r4 issuance and execution, Gate 2 `V1-SM05-FV-001`, attributed filing, answer edits, receipt repair, held reviews, custody and portability, graph work, lane changes, U-C, J1/J2 transfers, FR-15 lift, selection, FN-EXCEPTIONS and construction. Keep `docs-drift` open on D-425. Preserve the D-483/`10024` stop, D-484 hold, full-manifest gate, open receiver access and Unit 5b deferral. B-136, B-158, B-162, B-163 and D-439 remain Open.

| Scope | Disposition | Follow-up phase |
|---|---|---|
| Bound `2a → 2b` and both isolated verification snapshots | Approve-with-conditions | Complete issued preflight, date checks, exact-byte execution and sealed hand-back. |
| Exact-commit independent reviews | Defer | Existing Lane B Level 1 and Lane C Level 2 release routes. |
| Row `1b`, any push and all other holds | Defer | Existing separate Judge routes. |
