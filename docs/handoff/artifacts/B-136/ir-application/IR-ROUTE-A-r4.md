# IR route addendum A r4 — keep the `D-437` timing: register the setup decisions in the same governed batch, 2026-10-15

**r4 delta:** cross-references by role; versions bound by the package manifest (application act §K); slots
`{ACT_FILE}`, `{ACT_SHA}` added. r3 kept.

**Status:** conditional draft; applies only if the Judge **explicitly selects Route A** (D1). Attaches to
the application act. r1 (`b67d13be…`) kept. **r2 delta:** slot values and successive states frozen (supplied
Lane B audit, G2); no fallback from Route B.
**Basis:** Judge clarification 2 (2026-10-14): "With next governed batch (Recommended)" — "`D-437` is recorded with the
next governed batch" (B-136 L7555–7556; r10 L34–35). r10 Part 7 L514–522 lists `D-437`'s content; its batch examples
(C2–C5, SM05 entry) are examples, not exclusive destinations.

## 1. Batch shape

One governed batch, two acts, each its own commit, in this order: **`D-437`** (setup registration) → **`D-438`** (IR act)
→ IR applying commit. The two obligations stay separate: `D-437` changes Register and Build Spec only; `D-438` changes
the Register only; the applying commit changes the five IR files only. Stage S1 of the application act applies to each act commit
with its own authorized insertion set.

## 2. `D-437` Register entry (complete body; appended at end of file; section `5.14e262`; IR act becomes `5.14e263`; only slot: `{DATE}` = recording date `YYYY-MM-DD`)

> ## 5.14e262 `D-437` — TR-1 Setup Unit Registration (Durable Record of the 2026-10-14 Authority)
>
> **Authority already received (verbatim, in chat):** TR-1 — "Require ECC, Ponytail and REA specifically before SM05."
> (B-136 L6997; Lane B `46c7417`). REA route — "Judge Approved: REA route D; authorize the setup unit" (2026-10-14).
> Clarifications 1–5 (2026-10-14), verbatim as recorded in `SM05-SELECTION-DRAFT-r10.md` L30–44. This entry records them
> durably (`D-183` rule 2, "pending durable registration"). It grants no new authority.
>
> 1. **Credit rule** (r10 Part 3.1): before SM05 entry the requirement is credited for load, planning output and the
>    named controls only. ECC coding workflow, Ponytail with a mode on, and REA runtime/browser/process/native analysis
>    stay `unproven`; they are not passed and not an entry condition.
> 2. **Accepted setup object** (Lane B `05ac2ba`): `SM05-SELECTION-DRAFT-r10.md` `b6e523f04142c1bc062ae7cff220ab19f9d97b95bc14c8c4645a5bd72b0e116c`;
>    `EXEC-MANIFEST-r10.json` `91ca62bb6b4b29b3e121236f9a00769119a27629d1ac2bfd115b77d5b2e9fe35`;
>    `verify-exec-manifest-r9.mjs` `bd4c8ea60c8cf4390c1b362f66810e60389c77acb33aceca715a7210801bfa37`.
> 3. **Stage B binding:** none accepted. No Lane A "accepted for Stage B" record exists. Stage B has not run.
> 4. **Readiness record:** `partial`. Stage A ran A-S0–A-S4; the pre-S-T run stopped (B-136 `ee411c6`); S-T has not run;
>    hook routing is Open. No final readiness record and no Judge readiness decision exist.
> 5. **Not given:** readiness, setup execution beyond the received authority, SM05 entry, Gate 2, a work order, push.
>
> | Tier | Disposition |
> |---|---|
> | **Register** | ✅ this entry |
> | **Build Spec** | ✅ `D-437` paragraph (SM05 entry prerequisite recorded; no scope, sequence or DoD change) |
> | **Inventory** | — unaffected (no row added or retired) |
> | FN, SPECS, rule files, fragments, frozen sources, code | — unaffected |
> | **Encyclopedia** | unaffected (tooling and process only; r10 Part 7) |
> | **Graphify** | governed drift, cleared by this batch's guarded cycle |

## 3. Build Spec insertion (draft; immediately before the "**`D-436` (2026-10-13)" paragraph, L150)

> **`D-437` ({DATE}) — TR-1 setup unit registered.** The 2026-10-14 requirement "Require ECC, Ponytail and REA
> specifically before SM05" is an SM05 entry prerequisite, credited for load, planning output and named controls only
> (`D-437` item 1). The readiness record is `partial`. No V1 scope, sequence or DoD change. `V1-SM05` stays `BLOCKED`.

## 4. Evidence status (must be stated, not assumed)

| `D-437` content item (r10 Part 7) | Status at `6cc8350` |
|---|---|
| (1) TR-1 verbatim | present (B-136 L6997) |
| (2) REA route D verbatim | present (r10 L29) |
| (3) clarifications 1–5 verbatim | present (r10 L30–44) |
| (4) credit rule | present (r10 Part 3.1) |
| (5a) packet, manifest, verifier + Lane B acceptance | present (hashes above; `05ac2ba`) — r11 contract design is not accepted and is not registered |
| (5b) Stage B binding + Lane A acceptance | **missing** — recorded as "none accepted" |
| (6) readiness records and Judge decision | **incomplete** — recorded as `partial`; "if complete by then" (r10 Part 7) |

## 5. Effect on the IR act

IR replacement text and the the application act contract do not change. The batch's tier set grows by the Build Spec (through
`D-437`). The batch's guarded cycle covers both acts. Lane B reviews the expanded diff. Risk: the IR unit waits for
Lane B's review of the `D-437` text and its evidence status.

## 6. Composition of the `D-438` body under Route A

Body = the `D-438` body with: `{SEC}` = `5.14e263`; `{DATE}` = recording date; `{AUTH_QUOTE}`,
`{D1_QUOTE}`, `{J1_QUOTE}`, `{J2_QUOTE}` = the Judge's chat words, verbatim; `{ACT_FILE}`, `{ACT_SHA}` = from the package manifest; `{ROUTE_B_ITEM_0}` = removed together with
its line and the blank line after it; `{SETUP_CLAUSE}` = `the D-437 registration recorded in the preceding commit of
this batch`. No other change.

## 7. Successive states (Route A)

| After | Register | Build Spec | Five IR files |
|---|---|---|---|
| S0 (bound) | blob `b8fe07ff…` | blob `d8f09bac…` | the application act §C blobs |
| Commit 1 (`D-437`) | S0 bytes + "\n" + §2 body, appended at end of file | S0 bytes + §3 paragraph + blank line, inserted immediately before the line starting "**`D-436` (2026-10-13)" | unchanged |
| Commit 2 (`D-438`) | commit-1 bytes + "\n" + §6 body, appended at end of file | unchanged from commit 1 | unchanged |
| Applying commit | unchanged from commit 2 | unchanged | the application act §E expected blobs |

All expected Register and Build Spec blobs are computed at S0 from the bound bytes and the frozen text. Each commit's
blobs must equal them (the application act §E rule E5). Each commit touches only the paths in its row.

## 8. If not selected

**If the Judge does not explicitly select Route A: stop. Neither route is selected. The existing `D-437` commitment stays
as recorded.**
