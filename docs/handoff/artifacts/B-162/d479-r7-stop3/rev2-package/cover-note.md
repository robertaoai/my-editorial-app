# D-479 rebound r7 — rev2 unissued review

Review the draft and its evidence for D-486 commit `30db8d51140c0e46700f96bb9f018e6e40b93cbc`. The two review patches replayed in order in a fresh isolated checkout. Git reproduced both result trees and the before and after blob IDs in both ledgers.

| Unit | Input tree | Result tree | Patch | Bytes | SHA-256 |
|---|---|---|---|---:|---|
| `2a` | `0b558d2a51f17eff755dfd7fba51bed37548f9ae` | `cb70db9c54e835bcd6facdc6dd81d49bb811f57e` | [2a.patch](2a.patch) | 82341 | `34fb8368c66b4e75599d5fcfec1bb68ba1810e16412b6005c772f919293b2e1d` |
| `2b` | `cb70db9c54e835bcd6facdc6dd81d49bb811f57e` | `1fcc621e265f2587a2dd2741db8476fe4f99afd8` | [2b.patch](2b.patch) | 43073 | `43530dad7c88079534e99972bacfb26b8ea84d35b781c6f1a92209f7bbf350fc` |

The [release draft](RELEASE-2A-2B.r7-rebound.UNISSUED.md) is 17751 bytes with SHA-256 `bd480a24b3836cd3afe9bcb269ad4d34a06277dcea85afc952a49328313530db`. The exact [Intent Index](V1-INTENT-INDEX.md) is 6924 bytes with SHA-256 `ab3edcef833ac9d119b3d9e85986a8160e110a42f076d566ccbfdae6230921b9`. The [diff against draft r5](index-vs-draft-r5.diff) shows the proposed Index text. The [2a ledger](ledger-2a.json) and [2b ledger](ledger-2b.json) bind each changed path and blob.

The proposed Singapore-local dates are `2026-11-13` for `2a` and `2026-11-13` for `2b`. The Judge confirms or replaces each date separately before issuance. A 2a date change requires both patch pins and tree pairs to be refreshed. A 2b-only date change affects its patch pin and result tree. Keep the date mismatch stop rule. The four R5 citations and the SM07 move note reference `D-486`. The historical D-383 paragraph and D-479 decision date retain their text.

The drafter assembles rev2 and generates the manifest after the package files are final. Lane A rehashes every member and checks the retained replay and lane-state evidence. Independent reviews retain their existing routes. The isolated review reproduced both trees and the checker returned zero findings on both Phase Closure blobs.

Local HEAD is `30db8d51140c0e46700f96bb9f018e6e40b93cbc`. Its sole parent and local upstream are `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96`. The local branch is one ahead and zero behind its upstream. A separate GitHub API lookup of the named branch returned the same upstream commit during this review. Direct strict SSH could not resolve GitHub in this environment. The retained D-486 strict SSH observation at `2026-11-13T07:07:55Z` also reported `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96`. The later execution preflight still requires a fresh strict SSH observation and fresh fetch. [GitHub API observation](remote-observation.json) · [D-486 SSH receipt](C:/CoWork/outputs/lane-a-d486-recording-d8db2da/revised-d86d0c4f/checks/post-recording-ssh.json)

Lane C passed the exact D-486 recording at transcript line 27 at `2026-11-13T10:57:48Z`. The stored record and decoded response match their separate pins. [Lane C pins](C:/CoWork/outputs/lane-a-d486-recording-d8db2da/revised-d86d0c4f/lane-c/level2-pass-30db8d5-27.pins.json) · [Replay evidence](replay-verification.json) · [Package manifest](manifest.json)

**Gate 2 — `V1-SM05-FV-001`.** Retain the existing run ID. **Defer** creation and execution to the separate Judge route. D-479 moved the FR-15 evidence slice and its `BLOCKED` packet status to `V1-SM07`. The new `V1-SM05` remains unselected. Return any ruling on run allocation or activation to the Judge. Apply the applicable block lift, selection, D-242 work order and lane authorization before starting the run. [D-269 item 5](C:/robertaoai/my-editorial-app/docs/v1/V1-DECISION-REGISTER.md:19820) · [D-479 item 6](C:/robertaoai/my-editorial-app/docs/v1/V1-DECISION-REGISTER.md:31514)

The release draft specifies the r4 overrides for the D-486 parents, scratch paths, patch exports and local hand-back range. Review the proposed patch locations, evidence root and date bindings before any separate release. All incorporated holds apply, including both source commits and execution snapshots, r7 issuance, row 1b, push, attributed B-162 filing and graph work.

| Scope | Disposition | Follow-up phase |
|---|---|---|
| Rebound review package | **Approve-with-conditions** | Judge review of the exact package and proposed bindings. |
| Execution and existing holds | **Defer** | Existing separate Judge routes. |
