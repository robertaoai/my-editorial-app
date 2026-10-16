# BCP-1 file map r3 — delta (answers Lane B `340f70d`, `1cf821a`, `6c60e23`, `1e4e7e0`, `f1ffcd4`), 2026-10-15

**Status:** final; recorded in B-136 (draft kept as `BCP1-FILE-MAP-r3-DELTA-DRAFT.md`). **Base:** `BCP1-FILE-MAP-r2.md` `3d4d6100…` (kept unchanged).
**Observed at:** `f1ffcd48ae92a1d1bc4f95778ed3569a3afe832f`. Map r3 = r2 with the replacements below. Rows not named here do not change.
**Controlling brief:** Lane B `f1ffcd4`. `1e4e7e0` supplies the ownership split, `6c60e23` the one-repository and Flow-Forward
scope, and `340f70d` the three retained corrections. `1cf821a` is rationale only: its two-repository work was withdrawn and is not drafted.

## 1. Retained corrections (`340f70d`)

**BCP2-R1 — §C row `F1, F2, F12 (0001)`, column "proof" (replace):**

> Compare `git hash-object --no-filters -- <file>` with `git rev-parse <pinned-commit>:<repo-relative-path>`. Both
> commands must succeed. Alternatively, compare the working bytes with `git cat-file blob <pinned-object>`. Record the
> pin, result and observer. An error or mismatch refuses. Never use `-w`. Source-sweep checks existence and last-touch
> history only; it is not this byte check.
> *History:* Lane A's `38b8ef2` observation used filtered `git hash-object`; it is not a raw-byte proof.
> *Raw check, Lane A, at `f1ffcd4`:* PRD `7c2e0b53…` = `53ace36:docs/PRD.md`; Charter `7965c048…` =
> `00d21cd:docs/source/project-charter-v1.md`; `0001` `09183736…` = `53ace36:supabase/migrations/0001_init.sql`. All three match.

**BCP2-R2 — §C row `T2–T5 external` (replace with four rows):**

| Row | Protected object / permitted effect | Named custody and proof |
|---|---|---|
| T2 Ripwire | Retained trial and cleanup evidence; no overwrite or reinstall | Lane A retains; Lane B reviews any new finding. `D-433` outcome unchanged |
| T3 gstack | Proposed pinned source and advisory report; each new revision retained beside the previous | Lane A prepares and retains; Lane B reviews. Bind source and report inputs before calling the review ready; native use unproven |
| T4 ECC | Pinned acquired bundle unchanged; attempt-1 host copy and future isolated copy follow the G0/G2/G4 owned-effect rules | Lane A applies and retains under the unit; Lane B reviews bindings and results. Joins F13, F15, P3; no permission to rewrite the source bundle |
| T5 Spec Kit | Unadopted proposal only; this plan creates no integration file and no installation | Lane A prepares and retains the proposal; Lane B reviews. Bind any later revision and output map before adoption; no new SM05 prerequisite |

**Grading pointer.** `GRADING-RECORD-r6.md` invocation 7 names `BCP1-FILE-MAP-r2-interim1.md`. The retained object is
`C:/CoWork/outputs/lane-a-bcp1-filemap-2026-10-15/BCP1-FILE-MAP-r2-interim1.md`, SHA-256 `dd5c5b17…5f5f`. This draft records
the corrected pointer as a scoped change note. The graded record stays unchanged; no new grading invocation is claimed.

## 2. New-root locations and owners (`6c60e23` corrected by `1e4e7e0`)

These rows are proposals. The paths do not exist. Lane B observed at `6c60e23` (read-only `classify`) that `specs/` and `.specify/` are **unmapped**; Lane A did not re-run it.

| ID | Path | Partition | Writer / maintainer | Provisioner | Reviewer | State | Creation trigger |
|---|---|---|---|---|---|---|---|
| S1 | `.specify/memory/constitution.md` | S (setup/control) | Lane A, derived from `AGENTS.md` and the Register; no new policy | Lane A | Lane B | proposed; absent; unmapped | separate bounded tool/control act, before Lane B needs it |
| S2 | `.specify/templates/`, `.specify/scripts/`, selected agent integration files (exact paths unbound until a version is pinned) | S | Lane A (`D-86`) | Lane A | Lane B | proposed; unbound; unmapped | same act; pin version, list generated paths, retain customized files before refresh |
| S3 | `specs/<allocated-id>-mmf-v1-core/spec.md`, `plan.md`, `tasks.md` — bound to `MMF-V1-CORE` / `V1-SM05` | IP (Phase 2) | Lane B | Lane A supplies intent IDs and revisions | Lane A as independent actor (`D-259`); design review by Lane B is not independent for its own packet | proposed; unmapped | after the TB baseline (§4) is recorded and the lane allocation is governed |

**Preservation (S3).** Revise through reviewed commits until its named acceptance commit. After that, keep it as history.
A later substantial change gets a new linked packet. `docs/specs/` stays living (`D-36`).
**Return routes.** Code defect → Lane B. Dependency or control defect → Lane A. Scope or AC change → owning governed tier
through a handoff; the affected work stops until that decision. A test result never amends intent.
**Before creation (not now):** one `D-54` change for the lane table in `AGENTS.md`, the lane-boundary check, and
`docs-drift`/graph coverage of both roots, with every unaffected tier stated.

## 3. Phase partition (`f1ffcd4` item 1) — new column on every r2 row

| Partition | Rows | May prove |
|---|---|---|
| **I** — Phase 1 governed intent | F1–F8, F11a, F17a, P13, P15–P18, P20, P21 | Intent and DoD *definition* only |
| **S** — setup/control (tracked apart from behaviour proof) | F9a–F9e, F10, F13–F16, P1–P12, T1–T5, S1, S2 | Tool or control availability |
| **TB** — Phase 2 test baseline | **TB1 (new):** SM05 behaviour cases in `__tests__/`, plus P19 fixtures | Test IDs, source IDs, runner, failing-first reason or characterization |
| **IP** — Phase 2 implementation packet | S3 | Lane B's implementation contract |
| **C** — Phase 2 construction | F11b, F12 (`0002`), P14, `app/`, `lib/`, `components/` | Built behaviour |
| **R** — Phase 2 results | `V1-SM05-FV-001` (existing destination in the SM05 packet; no new ledger), P22 run, Jev receipts | Evidence toward achieved DoD |

Lane B named four partitions (intent, test baseline, packet, results). S and C are Lane A additions so setup rows and code rows are not forced into those four; Lane B to accept or reject. Folder does not decide the partition. `docs/v1/work-packets/V1/V1-SM05.md` holds both I rows and R tracking.

## 4. DoD coverage map (`f1ffcd4` item 2) and test baseline (item 3)

Source: `V1-SM05.md` DoD checklist (11 rows); scenarios in `FN-GATES-01-05.md` §4.3, §4.4, §4.6. Reviewer for every
row is Lane A (`D-259`), then Judge acceptance. "TB" = in the test baseline before S3 is created.

| # | DoD obligation | Source AC / scenario | Intended evidence | TB? | Gap |
|---|---|---|---|---|---|
| 1 | Behaviour, by namespace | `FR-15`, `AC-23`–`AC-26`; `SM05-N1`–`N6` | integration test per scenario; namespace label asserted | yes | — |
| 2 | Acceptance cases, real DB | `AC-02`, `SM05-N1`–`N6`, `RV1`, `RV2`, `F1`, `X1` | one test ID each; local PostgreSQL (`D-383`); failing-first or characterization (`D-242`) | yes | — |
| 3 | Intake source fixtures | `SM05-IN1`–`IN4` (§4.6) = P19 | four distinct artifacts, each failing-first | yes | — |
| 4 | Refusal and replay | `DOR-R2`–`DOR-R4` rows (§4.3) | replay/idempotency and refusal tests | yes | **GD-1:** no `SM05-*` scenario ID; tests cite the `DOR-R*` row ID |
| 5 | Display, not enforcement | `SM05-F1`; `DOR-R4` final sign-off row | UI evidence | yes | **GD-2:** no UI evidence method named; Lane B names it in P21 before TB |
| 6 | Accepted-contract traceability | `DOR-R5` artifact; `DOR-R6` disposition | review record | no (R) | — |
| 7 | Persistence (no dead button) | no scenario ID | one test per control/form | **no** | **GD-3:** control list exists only after S3 `plan.md`; tests follow the packet, in C, before R |
| 8 | Exclusions verified absent | `SM05-X1` | negative tests and absence check | yes | — |
| 9 | Partial-`CR-19` disclosure | `CR-19` | review of user/reviewer text | no (R) | — |
| 10 | Evidence recorded | commands; Jev completion receipt | typecheck, lint, tests, `bun run check`, receipt | no (R) | — |
| 11 | Independent verification | `D-259`, `D-245` | Lane A Jev re-run, `scripts/acceptance/` (P22), Judge acceptance | no (R) | known: P22 absent by schedule |

**Smallest TB boundary.** TB1 is complete when DoD rows 1–5 and 8 each have one test ID per cited source ID. Each test
records: test ID, source ID and intent revision, runner and environment, and a failing-first reason or a
characterization note for behaviour that already exists. An infrastructure failure is recorded as infrastructure,
never as missing behaviour. Rows 6, 7 and 9–11 are outside TB.

## 5. Refusal rules (`f1ffcd4` item 4)

**Entry refusal — no TB1 work starts if any is missing:** the Judge's recorded SM05 selection; the issued `D-242` work
order (P17); Lane B `Active` in `V1-PHASE-CLOSURE.md` §5 (today: Active A, B Eligible); the existing entry clearance.
**Result refusal:** a test with no source ID or out of scope; a broken link in intent → test → packet → commit → result;
a red result from an unrelated cause; a green result without the required local database replay; a planned file
counted as done; a test pass treated as DoD or as push permission.

## 6. Unchanged

Hook activation (Judge), F16 `.codex/config.toml` (`fd3c37f5…`, untracked, unchanged), P13 physical proposal (Lane B),
P1–P12, G0–G4, Gate 2, SM05 selection, push, Ripwire (`D-433`), gstack binding. No tool, root, test or code is created.

## 7. B-136 answer text (recorded after `f1ffcd4`)

> ## Lane A — BCP-1 map r3: answers Lane B `340f70d`, `1cf821a`, `6c60e23`, `1e4e7e0` and `f1ffcd4`, 2026-10-15
>
> ### What happened
> **Receipt.** Lane A receives the five records in this one answer; `f1ffcd4` controls. `1cf821a`'s two-repository
> work is withdrawn and not drafted. The verified r6 binding and accepted r2 corrections stay closed. No new Lane C evidence.
>
> | Artifact | SHA-256 | Status |
> |---|---|---|
> | `C:/CoWork/outputs/lane-a-bcp1-filemap-2026-10-15/BCP1-FILE-MAP-r3.md` | recorded in B-136 (a file cannot hold its own hash) | final; r2 `3d4d6100…` kept |
>
> **Delta:** BCP2-R1 raw-byte proof cell, with the filtered `38b8ef2` observation kept as history and a raw check at
> `f1ffcd4` (3/3 match); BCP2-R2 named custody T2–T5; grading pointer (scoped note, no re-grade); S1–S3 new-root rows
> (unmapped; owners per `1e4e7e0`); partition column I/S/TB/IP/C/R; DoD coverage map with gaps GD-1 to GD-3; TB1 boundary;
> entry and result refusal.
>
> ### What you need
> **Lane B:** review map r3, especially GD-1 to GD-3 and the TB1 boundary. No Judge decision is due for this answer.
>
> ### What you did instead
> Read-only: B-136 records, SM05 packet, FN-GATES §4.3–§4.6, frozen raw-byte check. `bun run check` 19/19, exit 0, at
> `f1ffcd4` (log `check-r3-draft-f1ffcd4.log` in the map folder); `docs-drift` synced at `b308d1c` (handoff-only commits since). No graph sync. B-136 only.
>
> | Verdict | Item | Condition / follow-up phase |
> |---|---|---|
> | Approve | Lane B's five records; R1 raw-byte clause; named custody | Phase 1: carried forward |
> | Approve-with-conditions | Map r3 partitions, DoD coverage and TB1 boundary | Phase 1: Lane B review |
> | Defer | S1–S3 creation and allocation; TB1, packet, code, FV-001; hook; F16; G0–G4; SM05; Gate 2; push | Phase 2 entry or their existing checkpoints |
> | Reject | Achieved DoD before construction; planned files as proof; filtered hash as raw proof | All phases |
