# Manual evidence backup — proposal for the first authorized checkpoint (not released)

This proposal is for the Judge's separate delivery release. It does not authorize a commit or a push.

## Evidence to commit

There are 128 files and 2,456,639 bytes in seven sets. Every file is listed with its bytes and SHA-256 in `backup-inventory.json`.

Excluded:
- the isolated clone `snapshot/clone`, which is a full repository copy holding the test-only S2A;
- every `.graphify` store copy;
- scratch `tmp` folders.

| Set | Source folder | Files | Bytes | Proposed custody path |
|---|---|---:|---:|---|
| rev2 execution evidence (sealed Stop 1–3) | `C:/CoWork/outputs/lane-a-d479-2a-2b-r7-30db8d51140c0e46700f96bb9f018e6e40b93cbc` | 38 | 1,134,757 | `docs/handoff/artifacts/B-162/d479-r7-stop3/rev2-execution-E/` |
| rev2 review package | `C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev2` | 11 | 185,389 | `…/rev2-package/` |
| rev2 Lane A verification | `C:/CoWork/outputs/lane-a-r7-rev2-verification-30db8d51140c0e46700f96bb9f018e6e40b93cbc` | 9 | 24,529 | `…/rev2-verification/` |
| rev3 stopped build | `C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev3` | 9 | 116,669 | `…/rev3-stopped-build/` |
| 19-claim prerequisite drafts | `C:/CoWork/outputs/D-479-r7-prereq-drafts-30db8d51140c0e46700f96bb9f018e6e40b93cbc` | 17 | 330,049 | `…/prereq-drafts-19/` |
| 21-claim prerequisite drafts and validation | `C:/CoWork/outputs/D-479-r7-prereq-drafts-21-30db8d51140c0e46700f96bb9f018e6e40b93cbc` | 37 | 637,681 | `…/prereq-drafts-21/` |
| R1 append and pins | `C:/CoWork/outputs/D-479-R1-append-30db8d51140c0e46700f96bb9f018e6e40b93cbc` | 7 | 27,565 | `…/r1-append/` |

**Why this path.** It follows the B-136/C06 precedent: 15 B-162 artifacts were delivered under `docs/handoff/artifacts/B-162/`. Under `docs/handoff/`, the files fall outside `graph-coverage` and governed-intent drift. `text-integrity` still applies its control-character rule to the `.md` files there.

## Destination and range

- **Destination ref:** `origin/features/feature-V1-SM05`.
- **Observed remote tip:** `d8db2da71ceb79cc9ade330b524b6ffc6c3edd96`. This is a fresh strict-SSH `ls-remote`, exit 0, recorded in `validation/remote-tip-ls-remote.txt`. It is a preparation observation only. A fresh strict SSH and a separate fetch stay due at the checkpoint.
- **Outgoing range now:** `d8db2da..30db8d5` = D-486 `30db8d51140c0e46700f96bb9f018e6e40b93cbc`, one commit.
- **At the first authorized checkpoint:** the range adds each commit recorded by then, in order. That may include R1 (`D-487`), the prerequisite, and the one evidence commit. The release must name every commit in it, including D-486.

## For the Judge

1. **Transcript copies.** Three files are byte copies of user records from Claude session transcripts:
   - `rev2-execution-E/authority/issuance-658.jsonl`
   - `rev2-execution-E/authority/gate-answers-783.jsonl`
   - `r1-append/authority/disposition-1925.jsonl`

   Committing and pushing publishes their full content to the remote. Choose whether to commit them as they are, replace them with pins (line, UUID, bytes, SHA-256), or exclude them.
2. **Custody.** Adoption, destination, access and any later deletion stay Judge decisions (B-162 C06).
3. **Delivery controls under the release:**
   - one evidence commit, with hooks enabled;
   - a fresh range check;
   - a non-force push;
   - the push result and fresh remote-tip proof retained;
   - a stop before the push if the range differs from the release.
