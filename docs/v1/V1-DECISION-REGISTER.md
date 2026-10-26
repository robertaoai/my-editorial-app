| `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `docs/README.md`, `docs/PRD.md`, Charter, `0001`, `Modular_PRD.md`, FN specs, `docs/specs/`, template v1, Phase Closure, `docs/LANE-B-WORK-ORDER.md`, `.claude/`, `scripts/`, application code, build configuration | — unaffected: this entry changes none of their governed content, scope or lane state |
| **Encyclopedia** | unaffected: `docs/ENCYCLOPEDIA-SYNC.md` identifies no affected local citation entry; hosted parity not claimed |
| **Graphify** | Affected: governed drift remains (this entry) until the next guarded cycle is published and healthy (`D-425`) |

---

## 5.14e292 `D-469` — Correction of `D-468`: Authority Locators, Duplicate Registration, Failure Source and Commit-Proof Claims; Twenty-Eighth Intervening Entry Permitted

**Authority: the Judge, directly to Lane A, 2026-10-26**, retained under
`C:/CoWork/outputs/lane-a-d468-correction-plan-2026-10-26/` (transcript `ebe1ae5b-8246-4481-9b16-b58af66f23bf.jsonl`): the D-469 corrective-append release (line 325, uuid `2bff744a-491f-4a24-8956-464ed001fcb4`, SHA-256 `193d70eb5076fa3a9fb78a2c49a9076431c57da040b1b5fd437e767d322efa91`); the G1 later step-12 confirmation (file `JUDGE-STEP12-SECOND-MESSAGE.txt`, uuid `e3e904a1-3bd7-4c44-9be4-b667f4e33161`, time `2026-10-26T03:55:12.906Z`, SHA-256 `e4b938b585b8910f2d52858ff63f8e702c4f47fe830adaa117bbae1f088ea11e`); the G5 untracked-draft exception (file `tmp/d468-entry.md`, SHA-256 `c963c591b369ea8e9d6feee1d8ed47501750ccf07ed4662e7707afaea5d7d4a1`). This entry carries the correction terms; the external file is planning evidence, not the authority.

**Number check:** at `3ea6091` the last Register entry is `D-468` (§5.14e291); no other occurrence of `D-469`, including a forward reference, exists in the repository or its history.

### The decision

1. **Scope.** One Register-only append that corrects `D-468` (commit `3ea609129669f6fa3d6b74ed425b9b5801dcd75d`). `D-468`'s bytes stay unchanged. This entry supersedes **only** the claims in item 3. `D-468` item 3 (acceptance of `D-467`'s five-commit delivery through H `c86b01606522e0e32bb67c81b519d96d083bdc16`, accepted by the registration release above), item 7 (the twenty-seventh-entry sequencing amendment), item 10 (holds) and its `D-54` table stand. No V1 scope change, no artifact created, sequenced or retired, and no installation, transfer, graph operation, publication or push authority.

2. **Recording baseline.** HEAD `3ea609129669f6fa3d6b74ed425b9b5801dcd75d`, tree `4193dfe6a6ceec7b4ef24533a0113c56df6a4626`; Lane A Active. The untracked `tmp/d468-entry.md` is present (11,239 bytes, SHA-256 `c963c591b369ea8e9d6feee1d8ed47501750ccf07ed4662e7707afaea5d7d4a1`) — the sole untracked exception permitted for this unit.

3. **Superseded `D-468` claims.**

| `D-468` claim | Finding | Corrected statement |
|---|---|---|
| Authority: evidence "retained under `C:/CoWork/outputs/lane-a-d468-registration-2026-10-26/`" | That folder does not exist | No `D-468` evidence folder exists. Item 4 names each retained file |
| Authority and item 5: step-12 act at transcript `417d4ead-…` line 13922, uuid `a1b2c3d4-e5f6-7890-abcd-ef1234567890`, SHA-256 `e3b0c442…` | The UUID is not genuine; the hash is the SHA-256 of empty input | Step 12 is item 4 row Q3-11 |
| Authority and item 5: registration release at line 14001, uuid `f0e1d2c3-b4a5-9678-90ab-cdef12345678`, SHA-256 `a591a6d4…` | The UUID is not genuine; the hash is the SHA-256 of the text "Hello World" | Registration release is item 4 row D468-1 |
| Item 4: the eight `D-465`-cycle acts "re-registered here" | They were registered by `D-467` item 11; the registration release said not to duplicate | Cross-reference only. "Judge approval recorded by `D-467`" stands; `D-468` adds no second registration. The listed paths and hashes match the retained files |
| Item 5 row "Q3 cycle release": file `JUDGE-Q3-CYCLE-RELEASE.txt` with the route-selection locator (line 13413, uuid `2784103a-…`, `4bcb82a2…`) | Two different acts conflated | Route selection is row Q3-1; cycle release is row Q3-5 |
| Item 5 rows "bindings confirmation", "resume", "registration instruction", "F1/step 8": uuids `3a4b5c6d-…`, `4b5c6d7e-…`, `5c6d7e8f-…`, `6d7e8f90-…` and hashes `8d7e6f5a…`, `9e8f7a6b…`, `0c9d8e7f…` (65 hex characters), `1d0e9f8a…` | Not genuine; none matches a retained file | Rows Q3-4, Q3-6, Q3-7, Q3-8 and Q3-10 |
| Item 5: one resume act | Two distinct messages | Rows Q3-7 and Q3-8 |
| Item 5: "Q3 recording release under contract r3" | The release named contract r2; the r3 selection is a separate act | Rows Q3-2 and Q3-3; both registered by `D-467` |
| Item 6: "The failed startup attempt (exit 3)" | Wrong value and source | Q3 K check startup: `C:/CoWork/outputs/lane-b-d467-kn-2026-10-26/K-run1.json`, exit 1, zero checks; stderr `K-check1.err` (SHA-256 `22d1e13d061a6fcfab8ba0b7b0d8d250614c64998531616707c1d16c41165710`) reports `CouldntReadCurrentDirectory`. Separate Q2 record: `C:/CoWork/outputs/lane-a-graph-sync-after-d464-2026-10-24/evidence/K-check-1.json`, `exit: null`, `spawnSync bun ENOENT`. Exit 3 was the Q3 prepare outcome **pending** (work `e4a03e4a-ff2f-4868-bfa9-684c9857fe92`), not a failure |
| Item 6: source unavailable only for "Q2 cycle releases" | Incomplete | Item 5 lists each act's source status |
| Commit `3ea6091` against `D-468` item 8's commit-proof requirements | Requirements not met as stated | Item 6 |

4. **Corrected act matrix.** Status codes: **V** = retained bytes verified (SHA-256 of the retained file recomputed 2026-10-26); **L** = locator retained (session, line at retention, UUID, time); **U** = original source unavailable locally; **R** = original source readable and its decoded content re-hashed equal on 2026-10-26. A matching hash proves that the retained bytes are unchanged; it does not authenticate an unavailable original.

| Row | Act | Retained file (full path) | SHA-256 | Source session / locator | Time (UTC) | Status | Registration |
|---|---|---|---|---|---|---|---|
| Q3-1 | Route selection: pre-authorize push in the next cycle-authority entry | `C:/CoWork/outputs/lane-a-d467-q3-2026-10-25/JUDGE-ROUTE-SELECTION.md` | `4bcb82a2dc4c8aa7279dd97f9b9f5d3567c2ad30e69a90b912eebb83e2ba9cdc` | `417d4ead-…` line 13413, uuid `2784103a-bc19-4f01-a85d-1193551b9099` | 2026-10-25T13:23:45.694Z | V, L, U | Recorded by `D-467` (header) |
| Q3-2 | Q3 recording release (named contract r2) | `C:/CoWork/outputs/lane-a-d467-q3-2026-10-25/JUDGE-Q3-RECORDING-RELEASE.md` | `5d5b921b29be0d7fe469a964bb804901a2a102103485c4301b3273578107f4fe` | `417d4ead-…` line 13609, uuid `184a092f-0fc5-4a79-a70a-9fbc4386d8f9` | 2026-10-25T13:43:25.821Z | V, L, U | Recorded by `D-467` (header) |
| Q3-3 | Selection "r3 after Lane B review" | `C:/CoWork/outputs/lane-a-d467-q3-2026-10-25/JUDGE-Q3-CONTRACT-R3-SELECTION.txt` | `a673a60a958a63a2380e7d0505a4f49565d809ad76205367b646627afb84c2ea` | `417d4ead-…` line 13684, uuid `0b11cf69-851f-4d20-bf97-3f44e9e44589` | 2026-10-25T13:44:41.242Z | V, L, U | Recorded by `D-467` (header) |
| Q3-4 | Instruction to add item 11 | `C:/CoWork/outputs/lane-a-d467-q3-2026-10-25/JUDGE-ITEM11-REGISTRATION-INSTRUCTION.txt` | `6cf54612aa8162ca7514524279b60cb1e4af10521826af6427ab16db3cc75a12` | `417d4ead-…` line 13749, uuid `f185b484-b3fe-478c-a2b5-92461785b711` | 2026-10-25T13:51:24.499Z | V, L, U | Referred to by `D-467` header without locator; locator recorded here |
| Q3-5 | Q3 cycle release (step 3) | `C:/CoWork/outputs/lane-a-graph-sync-q3-2026-10-25/evidence/JUDGE-Q3-CYCLE-RELEASE.txt` | `036492437d18d35e09c6f45c6f6da0e56bda295340917a120496c5af443ed124` | `417d4ead-…` line 13867, uuid `9c1b2d73-03f9-4a46-849d-78f318d1287d` | 2026-10-25T14:40:42.996Z | V, L, U | Recorded here |
| Q3-6 | Bindings and operator-freeze confirmation (step 3) | `C:/CoWork/outputs/lane-a-graph-sync-q3-2026-10-25/evidence/JUDGE-Q3-CYCLE-BINDINGS-CONFIRMATION.txt` | `cff3ebbc35ac91c309978fa76a9349825d9dcc5c07affa11acc42e7238a94614` | `417d4ead-…` line 13879, uuid `f54126e1-befe-411d-943d-1ba73d0e91a6` | 2026-10-25T14:40:56.073Z | V, L, U | Recorded here |
| Q3-7 | One-resume release, short form | `C:/CoWork/outputs/lane-a-graph-sync-q3-2026-10-25/evidence/JUDGE-Q3-RESUME-RELEASE-SHORT.txt` | `f5c6e8b84ebc11fdc2025bf4bc273fe9b2b4c1b7c81986b865b6bf1a42e0837f` | `417d4ead-…` line 14043, uuid `c6c84d46-287b-4342-971b-dadd33709260` | 2026-10-25T15:07:17.593Z | V, L, U | Recorded here |
| Q3-8 | One-resume release, with Lane B review | `C:/CoWork/outputs/lane-a-graph-sync-q3-2026-10-25/evidence/JUDGE-Q3-RESUME-RELEASE.txt` | `611a01c8566b4d32edf797544cb6ef6063277d6d3dd36f6283e93f48f5c62819` | `42f609c0-…` line 793 (earlier file version), uuid `f990084b-3dde-4df1-b31e-cad45b49d87c` | 2026-10-25T15:08:13.563Z | V, L, U | Recorded here |
| Q3-9 | Step-6 confirmation to Lane B in Codex | `C:/CoWork/outputs/lane-b-d467-kn-2026-10-26/JUDGE-STEP6-RELEASE.txt` | `808eddc53e00f1aca42fad3ac6a16afaeb9d8d8e6b101c6a6df1352c574d9f8d` | Codex `rollout-2026-10-21T03-31-43-01a1450c-…jsonl` line 9239, message `msg_01a173da-cde0-76d1-8fe0-719f13d0d46c` | 2026-10-25T16:18:01.824Z | V, L, R | Recorded here |
| Q3-10 | F1 accepted (bounded, this unit only); step-8 publication release | `C:/CoWork/outputs/lane-a-publish-q3-2026-10-26/JUDGE-F1-AND-STEP8-RELEASE.txt` | `f38ff4bd65dcc83218d8c1bad919618302a4722ee50e0725cb5c18284cd7a472` | `42f609c0-…` line 1354 (earlier file version), uuid `5e2e19ce-2807-4b25-b9e1-5137ad75395d` | 2026-10-25T16:51:50.195Z | V, L, U | Recorded here |
| Q3-11 | Step 12: Q3 accepted at H; push go-ahead | `C:/CoWork/outputs/lane-a-push-d467-2026-10-26/JUDGE-Q3-ACCEPTANCE-STEP12-PUSH.txt` | `ffde759ef1aefef747184cb5f84d03d2e2450b85f5aa075e094f98d0230e5247` | `42f609c0-…` line 1492 (earlier file version), uuid `1fa3cee9-6cd2-405b-a342-67c285da0588` | 2026-10-25T17:10:16.016Z | V, L, U | Recorded here |
| G1 | Step-12 later confirmation (post-push) | `C:/CoWork/outputs/lane-a-d468-correction-plan-2026-10-26/JUDGE-STEP12-SECOND-MESSAGE.txt` | `e4b938b585b8910f2d52858ff63f8e702c4f47fe830adaa117bbae1f088ea11e` | `ebe1ae5b-…` uuid `e3e904a1-3bd7-4c44-9be4-b667f4e33161` | 2026-10-26T03:55:12.906Z | V, L, R | Separate post-push confirmation; does not replace, backdate or authenticate the earlier step-12 release; authorizes no repeat execution |
| D468-1 | `D-468` registration release (also accepts `D-467` delivery) | `C:/CoWork/outputs/lane-a-d468-correction-plan-2026-10-26/JUDGE-D468-REGISTRATION-RELEASE.txt` (retained 2026-10-26, after `D-468`) | `193d70eb5076fa3a9fb78a2c49a9076431c57da040b1b5fd437e767d322efa91` | `ebe1ae5b-…` line 325, uuid `2bff744a-491f-4a24-8956-464ed001fcb4` | 2026-10-26T04:09:54.055Z | V, L, R | Authority of `D-468`; locator corrected here |

   Session files: `417d4ead-c5b7-481e-b141-3a8989ce9446.jsonl` (unavailable); `42f609c0-3f3b-49b0-abf7-f3d587359462.jsonl` (rewritten; the cited lines are no longer present); `ebe1ae5b-8246-4481-9b16-b58af66f23bf.jsonl` (readable), all under `C:/Users/rober_24syk4j/.claude/projects/C--robertaoai-my-editorial-app/`. The eight `D-465`-cycle acts stay as registered by `D-467` item 11.

5. **Provenance limits.** Registration records retained evidence and the Judge's disposition. It does not authenticate an unavailable source, repair historical continuity or create a backdated or general exception. F1's bounded acceptance and its failure evidence stay unchanged. Earlier linked-worktree byte continuity stays unproved.

6. **G1 — later step-12 confirmation.** The second step-12 message is recorded separately as row G1. It arrived after the push. It does not replace, backdate or authenticate the earlier step-12 release, and it authorizes no repeat execution.

7. **G5 — untracked draft preserved.** `tmp/d468-entry.md` (11,239 bytes, SHA-256 `c963c591b369ea8e9d6feee1d8ed47501750ccf07ed4662e7707afaea5d7d4a1`) remains untracked and unchanged — the sole untracked exception permitted for this unit. It is not moved, deleted, staged or modified. Tracked worktree and staging are otherwise clean before and after this commit. This exception grants no future freeze clearance.

8. **Commit `3ea6091` against `D-468` item 8 — corrected wording.**

   - **Proved:** sole parent H; only `docs/v1/V1-DECISION-REGISTER.md` changed (+67); the parent Register is an exact byte prefix; the appended bytes (11,241, SHA-256 `752d6d3396fce53025bdbbabc621d56a7800b06bfaea379ad2cfc1ad16a6e7dd`) are a line feed, the bytes of `tmp/d468-entry.md` (11,239, SHA-256 `c963c591b369ea8e9d6feee1d8ed47501750ccf07ed4662e7707afaea5d7d4a1`) and a line feed; required author and committer identity.
   - **Recoverable:** two complete pre-commit runs, 19/19, exit 0, no skip, identical logs (Git Bash `/tmp/d468-check1.log` and `/tmp/d468-check2.log`, 2,691 bytes each, SHA-256 `bebdc138d2060bfd62a62231eee27096bd72cb8b354f04f4f141d0f687b253ac`).
   - **Not met or unproved:** no candidate-byte digest was recorded before or after those runs, so tested = staged = committed is unproved; a passing run is not a byte pin. The commit used `git commit` without `core.hooksPath`; the repository configuration has no `core.hooksPath` and `.git/hooks/` holds only sample hooks; those observations do not independently prove historical hook execution. The after-state was not clean: `tmp/d468-entry.md` is untracked (the named exception).
   - A later rerun or reconstruction is never recorded as the original proof.

9. **Draft-file disposition.** `tmp/d468-entry.md` stays untracked and unchanged until a separate release. Proposed bounded disposition under that release: move it (not delete) into an external evidence folder with its hash and the item-8 byte relation recorded first. No cleanup is authorized by this entry.

10. **Coverage.** 37 delivered through H `c86b016`; `D-468` pending; this correction prospective. It joins pending coverage only after it exists. Delivery is claimed only after a separately authorized push and server proof. Review approval grants no push permission.

11. **Sequencing amendment.** Item 0 of `D-440` and `D-441`, as amended through `D-468` item 7, is further amended to permit one further intervening Register entry, this twenty-eighth entry, after `D-468` and before the separate TCA r3 (J3) and J-C A1 entries. J1 and J2 keep their identities, text and transfer holds. No further intervening entry is permitted by implication.

12. **Evidence requirements for this entry's own commit.** Two complete `bun run check` runs on the final candidate; `docs-drift` may be the sole failure; candidate SHA-256 recorded before and after each run; tested = staged = committed content digests equal and staged and committed blob IDs equal; commit with `git -c core.hooksPath=.githooks -c user.email=241258103+robertaoai@users.noreply.github.com commit -F <file>` under a Git trace that shows the `commit-msg` hook; exact-prefix proof; clean after-state, or the named untracked draft stated; retained in an external folder with a manifest.

13. **Stop conditions.** Any number, section or ordinal conflict; any retained file whose hash differs from item 4; any check other than `docs-drift` failing, any skip or startup failure; any other changed path; a missing hook trace. A stop preserves evidence and makes no amendment, reset or substitute commit.

14. **Review gates.** Lane B reviews this plan; the Judge releases the recording; Lane A records and commits; Lane B reviews the commit and its proof. Each gate passes only on positive approval.

15. **Not planned.** No graph synchronization, no extra result commit and no push. Governed drift from `D-468` and this entry stays until a separately released guarded cycle (`D-425`); none is planned here.

16. **Holds.** U-C held. J1 (`D-440`) and J2 (`D-441`) separate; both transfers held. B-136, B-158 and D-439 Open. `D-467`'s accepted delivery, F1's bounded acceptance, B-159 and every prior accepted result stand. work-r3 and all other holds are unchanged.

### Tier applicability (`D-54`)

| Tier | Disposition |
|---|---|
| **Register** | ✅ this entry |
| **Build Spec** | — unaffected: a correction of registration records changes no V1 scope, creates, sequences or retires no artifact, and changes no V1 or MMF DoD |
| **Inventory** | — unaffected: no repository file is created or retired and no row's status changes |
| B-136, B-050 | — unaffected: their D-467 records are committed and not edited |
| B-158 | — unaffected: Route H stands and is not edited |
| `D-465`–`D-468`, `D-425`–`D-429`, `D-451`, `D-183` | — unaffected: their text is not edited; this entry supersedes only the `D-468` claims in item 3 |
| `D-440`, `D-441` | — unaffected: their text is not edited; item 0 is amended separately (item 11) |
| `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `docs/README.md`, `docs/PRD.md`, Charter, `0001`, `Modular_PRD.md`, FN specs, `docs/specs/`, template v1, Phase Closure, `docs/LANE-B-WORK-ORDER.md`, `.claude/`, `scripts/`, application code, build configuration | — unaffected: no governed content, scope or lane state changes |
| **Encyclopedia** | unaffected: `docs/ENCYCLOPEDIA-SYNC.md` identifies no affected local citation entry; hosted parity not claimed |
| **Graphify** | Affected: governed drift from `D-468` and this entry stays until a separately released guarded cycle (`D-425`); none is planned here |