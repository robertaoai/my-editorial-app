# Control-file custody r4 — manifests and generators (adds manifest r5 and generator r5; r3–r1 kept)

**Status:** plan; **no file transferred**. **Reviewer:** Lane B. **Trigger:** with the main transfer, after `D-438`'s health
record. **Destination folder:** `docs/handoff/artifacts/B-136/bcp1/`. Manifest r5: 97 rows — 95 new copies,
2 retained matches, 0 conflicts (recomputed by generator r5).

| Source (`C:/CoWork/outputs/lane-a-bcp1-filemap-2026-10-15/`) | SHA-256 | Destination | Role |
|---|---|---|---|
| `TRANSFER-MANIFEST-r1.md` | `47a10ab014308b3bc6dba3c4e42f2ab1735b3e4708218f0e0cbeca02df1449b5` | `…/bcp1/TRANSFER-MANIFEST-r1.md` | history |
| `TRANSFER-MANIFEST-r2.md` | `334cb0d5a64fe8a9a8d0c551deebf65cfd733ac34ed592e3853b87038361a3a0` | `…/bcp1/TRANSFER-MANIFEST-r2.md` | history |
| `TRANSFER-MANIFEST-r3.md` | `2908eb98cae41d650030e5b58ec03f12aaabeaf25b5e347a695afdc577be2ce1` | `…/bcp1/TRANSFER-MANIFEST-r3.md` | history |
| `TRANSFER-MANIFEST-r4.md` | `fce5046da4206b21ba2f61d1da3132f5b639135a7046faee56929dcb3a55ed50` | `…/bcp1/TRANSFER-MANIFEST-r4.md` | history |
| `TRANSFER-MANIFEST-r5.md` | `ce26fd73adcba7de4d893ceca0bc6a92f3550c4d7298cfc37c92a896c41138ad` | `…/bcp1/TRANSFER-MANIFEST-r5.md` | current list |
| `make-transfer-manifest.mjs` | `586b0ddbf3d423a27b5a4a7a71128634cd50cc8315f97fb51c17728201de6fa9` | `…/bcp1/make-transfer-manifest.mjs` | history |
| `make-transfer-manifest-r2.mjs` | `5481ddf6a4e1c7740b56906befa9045a1a086d84a8e8a35d2ab717c1975637d0` | `…/bcp1/make-transfer-manifest-r2.mjs` | history |
| `make-transfer-manifest-r3.mjs` | `6bd6a9c06b77fe58e813d66118db71da71580684dc6319136a36a90d679c8d66` | `…/bcp1/make-transfer-manifest-r3.mjs` | history |
| `make-transfer-manifest-r4.mjs` | `27f1af18d34603ee16535b35362fad933ca7352a40ed1766c600aa7f2ca1a0e3` | `…/bcp1/make-transfer-manifest-r4.mjs` | generator r4 (history; writes unconditionally — never rerun) |
| `make-transfer-manifest-r5.mjs` | `89e98127e23560e827ae081f8fc7e99f9b3904d647e4b4a5e017a6a1574587b4` | `…/bcp1/make-transfer-manifest-r5.mjs` | generator r5: refuses to write if its output exists (proved: a second run refused) |
| `CONTROL-FILE-CUSTODY-r1.md` | `622d61083390ee4e57aff9424fdc15cd975ff16c856c655a4d6f8390aacba13f` | `…/bcp1/CONTROL-FILE-CUSTODY-r1.md` | history |
| `CONTROL-FILE-CUSTODY-r2.md` | `72bbd03fe6f78d35ffb69216f5d7498d3990c192f89bec2e9b7a4b9a5fbf55ff` | `…/bcp1/CONTROL-FILE-CUSTODY-r2.md` | history |
| `CONTROL-FILE-CUSTODY-r3.md` | `d058eb05e3f6a27a7aa4e46c42c2508e4825ad52504a5e189a36af1d1ff1d62e` | `…/bcp1/CONTROL-FILE-CUSTODY-r3.md` | history |
| `CONTROL-FILE-CUSTODY-r4.md` (this file) | bound in B-136 | `…/bcp1/CONTROL-FILE-CUSTODY-r4.md` | this record |

**Rules:** an identical existing file is kept; a different existing file stops the row; destination hash and custody
commit are recorded after the copy; "custody complete" only after Lane B verifies the repository bytes.
