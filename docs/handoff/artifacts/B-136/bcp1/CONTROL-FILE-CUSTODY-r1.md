# Control-file custody r1 — the manifests and their generators (answers Lane B's audit of `c60f41f`, G2 follow-up)

**Status:** plan; no file transferred. A manifest does not list its own hash; this record and B-136 bind them.
**Reviewer:** Lane B. **Trigger:** with the main transfer, after `D-438`'s health record. **Destination folder:**
`docs/handoff/artifacts/B-136/bcp1/` — beside the transferred traces, so trace r4 §3's reference resolves.

| Source (`C:/CoWork/outputs/lane-a-bcp1-filemap-2026-10-15/`) | SHA-256 | Destination | Role |
|---|---|---|---|
| `TRANSFER-MANIFEST-r1.md` | `47a10ab014308b3bc6dba3c4e42f2ab1735b3e4708218f0e0cbeca02df1449b5` | `…/bcp1/TRANSFER-MANIFEST-r1.md` | history (89 rows) |
| `TRANSFER-MANIFEST-r2.md` | `334cb0d5a64fe8a9a8d0c551deebf65cfd733ac34ed592e3853b87038361a3a0` | `…/bcp1/TRANSFER-MANIFEST-r2.md` | current list (91 rows: 89 new copies, 2 retained matches, 0 conflicts) |
| `make-transfer-manifest.mjs` | `586b0ddbf3d423a27b5a4a7a71128634cd50cc8315f97fb51c17728201de6fa9` | `…/bcp1/make-transfer-manifest.mjs` | generator r1 (history). Its own header said "read-only"; that was inaccurate — it writes the draft manifest |
| `make-transfer-manifest-r2.mjs` | `5481ddf6a4e1c7740b56906befa9045a1a086d84a8e8a35d2ab717c1975637d0` | `…/bcp1/make-transfer-manifest-r2.mjs` | generator r2: reads source and destination files, then writes the draft manifest; writes nothing in the repository |
| `CONTROL-FILE-CUSTODY-r1.md` (this file) | bound in B-136 | `…/bcp1/CONTROL-FILE-CUSTODY-r1.md` | this record |

**Rules:** the same as the manifest — an identical existing file is kept; a different existing file stops the row;
destination hash and custody commit are recorded after the copy. The two `.mjs` generators add code nodes; the guarded
cycle after the transfer describes them from what they do.
