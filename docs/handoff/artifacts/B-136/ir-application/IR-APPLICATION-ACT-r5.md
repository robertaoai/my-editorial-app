# IR application act r5 — common contract (answers Lane B's chat review of `310af2f`: two stale references), 2026-10-15

**Status:** design draft for Lane B delta review, then the Judge's checkpoint. Not recorded in the Register. No source
edited. **Observed at:** `310af2f`. **Kept unchanged:** act r4 `a9d80e6a…4717`; act r3 `c4955784…ff4a`; act r2 `a4e122c5…1450`; act r1 `ac4ee98a…fc19`; IR packet r2 `bc29c616…b71c` (design
Verified, Lane B `26ac629`). **Package:** this act, the `D-438` body, Route A addendum (keep the `D-437` timing) and Route B addendum (propose a
timing amendment); the Judge selects one route (D1). **Versions and hashes are bound only by the package manifest**
in the B-136 answer that records this act (§K).

## Changes from r4 (Lane B chat review of `310af2f`, not a Lane B commit)

| Finding | r4 | r5 |
|---|---|---|
| Stale reference, E1 | "the selected route addendum r2" | role reference; version from the manifest (§K) |
| Stale reference, Route A header | `IR-APPLICATION-ACT-r3.md` | role reference in Route A r4 |
| Cause | package files cite each other's versions, so each revision leaves stale citations | §K: role references inside files; one manifest binds versions |

## Changes from r3 (supplied Lane B audit of `1c0635b`, not a Lane B commit)

| Finding | r3 | r4 |
|---|---|---|
| N1 number guard | stopped if `D-438` was "taken or promised" — rejects its own commitment | checks commitment **ownership** (§A) |
| N2 clean-status scope | clean status before every write — the first authorized write makes the next write stop | E2a once per commit; E2b before each later write (§E) |
| Controls | none named | §J controls C1–C4 |

## Changes from r2 (supplied Lane B audit of `983eb30`, not a Lane B commit)

| Finding | r2 | r3 |
|---|---|---|
| G1 route fallback | Route B r1 fell back to Route A | each route needs explicit selection; otherwise stop, neither selected (route addenda r2 §"If not selected") |
| G2 exact registration | `D-438` body not presented; Route A states implicit | complete `D-438` body with named slots; per-route slot values and successive-state tables |
| G3 write and commit boundaries | post-write check only | §E rules E2 (pre-write) and E5 (committed blobs); substitutions only inside replacement text |
| G4 historical push | late fetch reported as push evidence | qualified in the B-136 answer as late confirmation; historical checkpoint compliance UNVERIFIED |

## Changes from r1 (kept)

| Finding | r1 | r2 |
|---|---|---|
| IR-ACT-R1 | `D-437` treated as free | IR number is a candidate **`D-438`** in both routes; `D-437` keeps its setup identity and transaction chain; timing handled by Route A or B (§A) |
| IR-ACT-R2 | conflicting pass/stop/rebind rules | one stage table (§D); a mismatch stops the unit; a new binding needs reassessment and independent review before use |
| IR-ACT-R3 | path and text checks only | deterministic expected-byte contract and applying-diff check (§E) |
| IR-ACT-R4 | push timing as authority | timing only; exact range is a later Judge checkpoint; full SOP proof (§G) |
| Fragment wording | six hits, presented as complete | seven historical hits within a named search scope; not exhaustive (§F) |

## A. Numbering

- `D-437` is a commitment for the setup registration (B-136 L7555–7556; r10 Part 7; sync-docs §2: "A forward-referenced
  number is a commitment, not a placeholder."). Neither route reuses or moves it.
- The IR act takes candidate **`D-438`**. At the recording commit, Lane A re-runs the Register and forward-reference
  search; a candidate number is not proof of availability. **Pass** when `D-438` has no Register entry and every
  forward reference to it commits it to **this IR act** (today: Lane A's B-136 answers `983eb30`, `1c0635b` and the r4
  answer). **Stop** on a Register entry for `D-438`, or on any reference that commits `D-438` to another act.
- Under Route B, `D-438` is recorded before `D-437`. No check requires ascending record order (searched `scripts/`).

## B. Scope (both routes)

Ten replacements A1–A10 in five files, verbatim from IR packet r2: `docs/Modular_PRD.md` (A1–A4),
`docs/v1/work-packets/V1/V1-SM05.md` (A5–A6), `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` (A7–A8),
`docs/specs/SPECS-PUBLICATION.md` (A9), `docs/v1/V1-ARTIFACT-INVENTORY.md` (A10). The historical Register question
paragraph (L175–183) is not touched. **Preservation:** pinned original revisions plus accurate dated correction notes;
not every replaced sentence is repeated inline (IR-1b/c are not); no history is deleted.

## C. Source bindings (re-observed at `1c0635b`; unchanged since `5d00503`)

| File | Git blob (`--no-filters`) | SHA-256 |
|---|---|---|
| `docs/Modular_PRD.md` | `9d71c4ef7645913c8fe47300774eded780e957ce` | `213f823e71388baeb09ebd5e4a1b53c46e170bdea3152421a1936f28ac09e1cf` |
| `docs/v1/work-packets/V1/V1-SM05.md` | `2fd6ce6926600931399c532470c1bec537267611` | `cfb07bab9def6eb51e7f6f13ec23230cc8deb26c246d4ca51239036accbcf21e` |
| `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` | `65c2afa7bee6852f783e567a5b2c40d76ab78c8e` | `d25e6d54f13622fb60eef30e7383f7462c1b0635bda41424b1459e54c9f8caaf` |
| `docs/specs/SPECS-PUBLICATION.md` | `dbd82d0b7c8d174bd3dad5f4698eeed73a74d57f` | `3bd33a82a04dc125256df8d34004a5bc364dd27d04b60f22e84cd9a8f0135284` |
| `docs/v1/V1-ARTIFACT-INVENTORY.md` | `7dce2f131f253f31b938902780e5099f327fdfe7` | `3774eac46c114c64738187c0c4753d44c2d3dc1fc17a2ef1a775c80c2c77d802` |
| `docs/v1/V1-DECISION-REGISTER.md` | `b8fe07ff42bd57a6f2673998ca6d32ca26c56092` | `1dd53719b5cb220f5c60d83b872d51a12f59f56f7b47dfa099f5bc86af9f71d1` |
| `docs/v1/V1-BUILD-SPEC.md` (Route A only) | `d8f09bacb4412fa25a69f2bf05c0d1dc3c012a9e` | `2b0a69af128dd86091a774e529bfb2fc6c764852cc837efe36ca9ce896fedd89` |

## D. Stage table (the only pass/stop rule; replaces r1 §B.3–§B.5, §D re-binding, §G and §I)

| # | Stage | Bindings checked | Permitted check failures | Stop on |
|---|---|---|---|---|
| S0 | Before the act commit | §C old blobs; A1–A10 each exactly once, only in its target, across governed `docs/**/*.md` outside `docs/handoff/`, `docs/graph-fragments/` and the Register; candidate number free | **none** — full pass | any mismatch, count ≠ 1, number not free |
| S1 | Act commit(s) (Route A: two; Route B: one) | each commit's blobs = the route's successive-state row (E5); additions only; no other path | `docs-drift` only (`D-428`) | any other path, deletion or failure |
| S2 | Applying commit | §E: five files only; each file's SHA-256 = its expected value | `docs-drift` only | any extra path, byte mismatch, omitted repair |
| S3 | Push checkpoint (§G) | exact range approved by the Judge; fresh fetch | `docs-drift` only | fetch failure; upstream moved; range differs from approval |
| S4 | Prepare → answers | candidate built from the S2 tip; held descriptions answered from source (behaviour, never comments) | `docs-drift` only | pending item not answerable from source |
| S5 | Lane B receipt in B-050 → its Terminal annotation | candidate bytes and meaning | `terminal-return`, `docs-drift` — **only if** the route's §F receipt exception is authorized | receipt finding; exception not authorized |
| S6 | After annotation → publish | candidate and receipt bindings unchanged | `docs-drift` only | changed bindings |
| S7 | Health record (separate, in B-136) | full check; live graph and manifest equal accepted bytes; fragment and name checks; branch/source classification; no journal or lock | **none** | any finding |

**Rule for every stop:** keep all evidence; stop the current unit; never retry as if it passed. A new binding is drafted,
reassessed and independently reviewed by Lane B before any use. No fetch and no push from S4 to S7.

## E. Expected-byte contract (closes IR-ACT-R3 and audit G3)

- **E1 Inputs.** Bound blobs (§C); IR packet r2 (`bc29c616…b71c`); the `D-438` body; the selected route
  addendum; slot values (route table; Judge words verbatim; date `YYYY-MM-DD`). Each input file is bound by SHA-256 in
  the unit folder before use.
- **E2 Pre-write.** Per commit, with its path set P (from the route's successive-state row):
  - **E2a — before the commit's first write:** `git status --porcelain -- <P>` is empty, and each file in P has the
    bytes of its expected prior state.
  - **E2b — before each later write in the same commit:** the target file has its expected prior bytes; each file of P
    already written in this commit has exactly its expected output bytes; each file of P not yet written is unchanged.
  - Any other difference refuses before writing and keeps the partial state as evidence. E5 still checks the committed
    objects.
- **E3 Composition rules.** A body quoted with `> ` in an addendum is inserted with `> ` (or a lone `>`) removed from the
  start of each line. Slots are replaced only by their table values. After composition no `{…}` slot token remains.
  The IR substitutions (`D-NNN` → `D-438`, `2026-10-NN` → date) apply **only inside the r2 new-text strings**, never
  elsewhere in a file.
- **E4 Expected output, before writing.** For each commit, compute each file's expected bytes from its prior state:
  appends and insertions as the route's state table says; A1–A10 in order, each old text exactly once in the
  then-current buffer. Line endings follow the input bytes. Record each expected blob (`git hash-object --no-filters`
  of the expected bytes) and SHA-256.
- **E5 Committed check.** After each commit: `git diff-tree --no-commit-id --name-only -r <commit>` = exactly that
  commit's paths; `git rev-parse <commit>:<path>` = the expected blob for each path. For the applying commit, the inverse
  check (new texts back to old texts, substitutions reversed) equals the bound input blob. An extra edit, a missing
  repair, an extra path or a blob mismatch refuses.
- **E6 Retained.** Inputs and their hashes, expected and actual blobs, full `git diff` per commit, the script and
  logs. The script is Node, no shell, written at application; it is not built by this draft.

## F. Graph cycle and fragments

- **Fragments:** no edit and no new fragment. A search of every node in `docs/graph-fragments/*.json` for the five
  defect claims returned **seven historical hits**: `frag22` `d65_bundle_rejected`, `frag25` `d68_q11_deferred`, `frag27`
  `stage_d_recorded_as_blocked`, `frag33` `d79_q10_narrowed`, `frag49` `c23_cannot_fix_a_stale_decision_request`
  (found by Lane B), `frag100` pre-S1 Lane B inputs, `frag123` `b078_documentation_audit_follow_through`. The list is the
  output of a named search, **not an exhaustive semantic audit**. A graph query that does not return a node does not
  prove the node is absent.
- **Route:** prepare (`D-425`, sync-docs §7) re-merges all fragments in dependency order (`G51`); description replay holds
  symbols whose source changed (`D-424`).
- **Receipt exception (J2, proposed text):** for this act's guarded cycle only, Lane B commits the independent
  candidate acceptance in **B-050**, then its covering Terminal annotation in a separate one-file commit. Between the
  two commits only `terminal-return` and `docs-drift` may fail; logs retained; hooks never skipped. After the annotation
  `terminal-return` must pass. The route covers a reviewed replacement after a finding and expires at the health record.
  No earlier unit's exception (`D-432`–`D-436`) is reused.
- **Publication (J1):** only after Lane B's receipt with unchanged bindings.

## G. Push checkpoint (closes IR-ACT-R4)

J3 sets **timing only** (after S2, before S4). It is not range authority. When the S2 tip exists, Lane A presents the
exact range: base = current upstream, tip, and every commit with its lane and path. The range holds both lanes' commits,
so the Judge names it (handoff SOP, `D-385`). Then, per the SOP: resolve `'@{upstream}'`; `git fetch` (failure stops);
upstream must equal the approved base; push; **fetch again** and require `'@{upstream}'` = `HEAD`. `git ls-remote` may be
added as extra evidence; it does not replace the post-push fetch.

## H. Judge choices (after Lane B review)

| ID | Choice | Lane A recommendation |
|---|---|---|
| D1 | Route A or Route B (explicit; no fallback) | **Route B** — keeps the IR unit narrow; the setup registration stays with a setup/SM05 batch, where its missing evidence (Route A §4) can be complete |
| J1 | Publication | after Lane B's receipt with unchanged bindings |
| J2 | Receipt exception §F | authorize with the act |
| J3 | Push timing | after S2, before S4; exact range at its own checkpoint |

J4 (Build Spec unaffected) is already accepted for the IR act. It holds under Route B. Route A adds a Build Spec effect
through `D-437`, not through the IR act.

## I. Not given

Any Inventory row (a row records an obligation; it creates no file); the `FR-10` UI spec; a `Q8` outcome; SM06 or
publication design (B-078 Child 4); a reference checker; BCP-1 r4 disposition; setup execution or readiness credit;
`V1-SM05` selection, Gate 2, work order, lane change or construction.

## J. Acceptance controls (run at application in a disposable copy; not built by this draft)

| Control | Setup | Required result |
|---|---|---|
| C1 valid IR promise | `D-438` referenced only by this IR act's records; no Register entry | §A passes |
| C2 conflicting promise | a reference that commits `D-438` to another act, or a Register entry for `D-438` | §A stops |
| C3 multiple authorized writes | the five-file applying commit written file by file; Route A commit 1 (Register, then Build Spec) | E2a passes once; each E2b passes; E5 passes |
| C4 unexpected edit | one extra byte outside A1–A10 inside an allowed file, made between two writes | E2b refuses before the next write; if made after the last write, E5 refuses |

## K. Package manifest (closes the stale-reference class)

- Inside package files, cross-references name **roles** ("the application act", "the `D-438` body", "the selected route
  addendum"), never revision numbers or file names. Change tables are history and may name earlier revisions.
- The B-136 answer that records the package lists each file and its SHA-256. **That list is the only version binding.**
  E1 binds those exact files before use; a file whose SHA-256 differs from the manifest refuses.
- The `D-438` body slots `{ACT_FILE}` and `{ACT_SHA}` take this act's file name and SHA-256 from the manifest at
  recording, so the Register entry names the exact act.

