# Control-file custody r3 — manifests and generators (adds manifest r4 and generator r4; r2, r1 kept)

**Status:** plan; **no file transferred**. **Reviewer:** Lane B. **Trigger:** with the main transfer, after `D-438`'s health
record. **Destination folder:** `docs/handoff/artifacts/B-136/bcp1/`. Manifest r4: 93 rows — 91 new copies,
2 retained matches, 0 conflicts. Counts are recomputed by the generator, not copied.

| Source (`C:/CoWork/outputs/lane-a-bcp1-filemap-2026-10-15/`) | SHA-256 | Destination | Role |
|---|---|---|---|
| `TRANSFER-MANIFEST-r1.md` | `47a10ab014308b3bc6dba3c4e42f2ab1735b3e4708218f0e0cbeca02df1449b5` | `…/bcp1/TRANSFER-MANIFEST-r1.md` | history |
| `TRANSFER-MANIFEST-r2.md` | `334cb0d5a64fe8a9a8d0c551deebf65cfd733ac34ed592e3853b87038361a3a0` | `…/bcp1/TRANSFER-MANIFEST-r2.md` | history |
| `TRANSFER-MANIFEST-r3.md` | `2908eb98cae41d650030e5b58ec03f12aaabeaf25b5e347a695afdc577be2ce1` | `…/bcp1/TRANSFER-MANIFEST-r3.md` | history |
| `TRANSFER-MANIFEST-r4.md` | `fce5046da4206b21ba2f61d1da3132f5b639135a7046faee56929dcb3a55ed50` | `…/bcp1/TRANSFER-MANIFEST-r4.md` | current list (adds EV r9) |
| `make-transfer-manifest.mjs` | `586b0ddbf3d423a27b5a4a7a71128634cd50cc8315f97fb51c17728201de6fa9` | `…/bcp1/make-transfer-manifest.mjs` | generator r1 (history; its "read-only" header was inaccurate) |
| `make-transfer-manifest-r2.mjs` | `5481ddf6a4e1c7740b56906befa9045a1a086d84a8e8a35d2ab717c1975637d0` | `…/bcp1/make-transfer-manifest-r2.mjs` | generator r2 (history) |
| `make-transfer-manifest-r3.mjs` | `6bd6a9c06b77fe58e813d66118db71da71580684dc6319136a36a90d679c8d66` | `…/bcp1/make-transfer-manifest-r3.mjs` | generator r3 (history) |
| `make-transfer-manifest-r4.mjs` | `27f1af18d34603ee16535b35362fad933ca7352a40ed1766c600aa7f2ca1a0e3` | `…/bcp1/make-transfer-manifest-r4.mjs` | generator r4: reads source and destination files, then writes the draft manifest; writes nothing in the repository |
| `CONTROL-FILE-CUSTODY-r1.md` | `622d61083390ee4e57aff9424fdc15cd975ff16c856c655a4d6f8390aacba13f` | `…/bcp1/CONTROL-FILE-CUSTODY-r1.md` | history |
| `CONTROL-FILE-CUSTODY-r2.md` | `72bbd03fe6f78d35ffb69216f5d7498d3990c192f89bec2e9b7a4b9a5fbf55ff` | `…/bcp1/CONTROL-FILE-CUSTODY-r2.md` | history |
| `CONTROL-FILE-CUSTODY-r3.md` (this file) | bound in B-136 | `…/bcp1/CONTROL-FILE-CUSTODY-r3.md` | this record |

**Rules:** an identical existing file is kept; a different existing file stops the row; destination hash and custody
commit are recorded after the copy; "custody complete" only after Lane B verifies the repository bytes.
