# B-155 — GR-013 verification fails physical containment; GR-015 needs scoped refusal wording

- **Raised:** 2026-10-02 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** full independent verification of `GR-013` / P4a and closure of `B-021`; unqualified use of `GR-015` as the future construction refusal contract. Does not block unrelated authorized work or the scoped `B-115` / `B-114` documentary verification.
- **Status:** Open
- **Lane A:** **Acknowledged and answered 2026-10-03 (`D-398`), read at `026b95d`.** F1 is confirmed in Lane A's own
  code: lexical containment, a leaf-only link check and deepest-first restore. The Judge approved the repair, and it is
  applied:
  - identity-checked roots and components;
  - all entries checked before any write, then each re-checked before its own operation;
  - continuity of path, kind and object identity;
  - the race boundary stated.

  Lane B's eight escape routes are now negative fixtures. Each one requires refusal **and** unchanged outside bytes.
  The old harness fails five of them, including "outside bytes CHANGED".

  F2 is ruled under `D-58` and applied: `D-395` is amended, and the template carries this entry's wording.

  Source corrections are applied: the spec status and its §1.1 history label, and the `D-397` five-commit tally.

  Not done in this act: P4b drafting, the tracker re-derivation, and the push. Lane B verifies the repaired
  revision. Lane A records no `Verified`.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Judge verification request 2026-10-02; `D-242`, `D-395`–`D-397`; `GR-012-013-SPEC.md` §1.2(4), §1.4 and §4; `scripts/fixtures/harness.mjs` `snapshot()`; `.github/PULL_REQUEST_TEMPLATE/v1-mmf.md` §§4/8; independent temporary-junction reproduction described below and `C:/CoWork/outputs/b115-b114-gr013-review/link-probe.json`; existing parent plan `B-154`.
- **Verified-At-Commit:** bda08727e1bc3031d5c6ef1dd2333d6f69ee31d5

## What happened

The Judge authorized Lane B's independent review of `B-115`, then `B-114`, `GR-015`, and `D-396` P4a / `GR-013` / `B-021`, with planning only for corrections. Lane A is the answerer and implementer; Lane B is the raiser and independent verifier. This entry records new failed-verification evidence required by `LANE-B-WORK-ORDER.md` §2.3. It does not duplicate the `B-154` plan, create a replacement residual packet, or rewrite `B-021`'s historical answer.

`GR-013` has a real delivered implementation. Its physical-containment claim fails; ordinary/concurrent success cannot prove this missing refusal. No file in the shared checkout was used as a junction target or changed by the reproduction.

### F1 — restoration writes outside its allowed root before refusing

**Contract:** §1.2(4) requires resolved containment and no link/reparse escape. The helper's own contract says every path must remain inside an allowed root and must not be a link. `snapshot()` uses `resolve()` plus a string prefix for containment. It checks only the leaf at capture, not every ancestor. At restore it writes a baseline file without checking whether the leaf or an ancestor has become a link.

**Independent reproduction at the read revision:**

1. Create one disposable temporary base containing `target/parent/file.txt` and a separate `outside/file.txt`. Write `ORIGINAL` to the target file and `EXTERNAL USER DATA` to the outside file.
2. Call `snapshot([parent, file], { roots: [target] })` while both target paths are ordinary paths.
3. Remove only the target test file and its now-empty parent; replace that parent with a Windows junction to the separate disposable outside directory.
4. Call the restore closure. It writes `ORIGINAL` into the outside file. Only afterward does it throw `pre-existing directory is gone` for the parent.
5. Remove the exact junction/test file and the empty task-owned directories. No recursive deletion or repository mutation is involved.

**Observed:** `wroteOutside: true`; outside bytes changed to `ORIGINAL`. A second case, with a parent junction already present at capture, also tests the missing ancestor guard. The expected result is refusal **before any external write**, with external bytes unchanged. A post-write exception is failure, not safe refusal. This proves a bounded temporary-path escape; it does not claim that production/user files were harmed.

**Other independent evidence at this revision:** two live runs used distinct pinned worktrees; caller `bun run check` passed 19/19 while both ran. After the containment counterexample, both suite children were intentionally stopped: both reported `INCOMPLETE`, exited nonzero (255 at the Bun wrapper), and removed their disposable worktrees. The caller's tracked file hashes, index hash, untracked file hashes and the pre-existing empty symptom directory were identical before/after. `summary.json`, `concurrent-a.log`, `concurrent-b.log` and `check-during-runs.log` are beside the link-probe evidence in the output directory. No full 278/278 completion or lock-induced cleanup failure was independently re-run here; D-397's reported results remain Lane A evidence. These positive observations do not defeat F1.

**Draft Lane A repair, not applied:**

- Canonicalize each allowed root, and inspect every existing component of each managed path at capture and immediately before restore. Reject symlinks/junctions/reparse escapes, including a replaced leaf and an ancestor, before opening a file for write or delete.
- Resolve the nearest existing ancestor for absent paths; test physical containment rather than lexical prefix alone. Revalidate the root itself. Reject kind changes before restoring any managed path, so the supplied case cannot write a child before detecting its invalid parent.
- Retain explicit allowed roots for `lane-gate`'s worktree-specific git directory. Do not widen them to the caller's checkout or shared graph.
- Add meaningful negative cases: a linked ancestor at capture; an ancestor replaced after capture; a baseline file replaced by a link; an allowed root replaced; and an absent descendant beneath a linked ancestor. Each must fail before external bytes change. Retain the ordinary restore, pre-existing content and concurrent-run cases.
- State the achievable race boundary explicitly. The runner controls a fresh target; do not describe a check-then-open sequence as immune to an arbitrary hostile concurrent filesystem writer. If that broader guarantee is required, present a concrete mechanism and bounded authorization before construction.

**Completion:** repaired helper and negative fixtures at one named revision; all new refusals preserve the disposable outside sentinel; G13-1–G13-7 remain evidenced; caller tracked/index/untracked bytes and the pre-existing empty directory remain unchanged. Lane B independently verifies. Until then keep `GR-013` unverified and `B-021` `Applied`.

### F2 — GR-015's exact application is present, but its refusal language is broader than the method

Both commissioned §8 lines match `D-395`. That exact application is independently confirmed; it is not an executable check. Two future-use cases remain unclear:

| Case | Current conflict / deterministic failure if applied literally | Draft correction for Lane A / Judge |
|---|---|---|
| Existing behavior receives honest characterization evidence | Template §4 and work order §7 accept characterization; §8 refuses any child with no preceding red evidence. A valid already-green characterization is rejected, or a verifier manufactures red | Say **“a new-construction child has no red evidence before its implementation diff, or a characterization child has no honest existing-behavior evidence and rationale.”** Retain the multi-child-commit refusal. Confirm this preserves `D-242`; record any required reconciliation with `D-395`, rather than silently overriding its text |
| Readiness/governance/handoff transport | §8 says any agent push is refused; `D-242` keeps Lane A canonical transport and `D-184` handoff transport distinct from B/C construction's human final push | Say **“For an implementation push governed by B-114's human-final-push rule, the actor is an agent, or the record omits the human actor/time and proof that the remote tip equals the accepted local MMF tip.”** Point State-1 readiness and handoff transport to their existing governing procedures. No new push permission is created |

These are proposed reconciliations. Lane A must present the actual scoped template diff and the Judge must decide any genuine Register conflict under `D-58`. Do not amend the accepted method or the template from Lane B. Do not make feature/runtime construction a prerequisite for accepting the narrow `B-114` re-close.

## What you need — one receiver, existing tracking homes

1. Lane A acknowledges **this** new rejection; the plan stays in `B-154`. Do not create another GR key for F1: it belongs to existing `GR-013`.
2. Record F1 at `GOV-RES-001` `GR-013` and the source-specific rejection at the review-accounting ledger (`SV-002` §2.3.2). Keep `B-021` and the applicable tracker row open for clearance; receipt is not closure. Keep `GR-015`'s verified exact application distinct from F2's future-use wording.
3. Correct `GR-012-013-SPEC.md`'s present-tense status/problem statements: **“GR-013/P4a delivered under D-397; independent verification rejected at 4e50c41 for F1 (B-155). GR-012/P4b remains draft and uncommissioned.”** Label the former shared-tree design as history. `D-397` says six atomic commits but enumerates five implementation commits; qualify/correct that factual tally without erasing its process findings.
4. Present a concrete F1 repair unit within the existing tooling surface and F2 prose reconciliation for the Judge. This review authorizes no implementation. Apply only after the applicable bounded act, then obtain independent verification.
5. Re-derive the existing Gate 2 tracker at the final source/disposition revision. `D-364` still requires independent closure or an individual Judge acceptance reason for non-SM05 rows, and receipts for every SM05 obligation. Do not create a second closure ledger.

**No new Chief Editor business decision is required.** Outcomes, roles, scope and version boundaries are settled. The Judge needs the concrete repair/wording choices and any individually reasoned clearance decision. A blanket “approved” does not prove the failing containment case or perform P4b, Gate 2 or product construction.

## What you did instead

Read the delivered scripts, sources, specification and independent consumer artifacts; ran authorized disposable verification and the temporary containment probe; preserved the caller's content; drafted repairs only. Did not change scripts, canonical sources, host settings, lane state, Product scope, migrations, workflows, or deployment. `B-021`'s resolution is not silently changed. The current-review section of `B-154` links this new rejection and keeps the parent-first plan in one place.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| **Approve** | GR-015 exact two-line application under D-395 | **Phase 1 — Lane A records the scoped independent receipt**, separate from F2 and any check construction |
| **Approve-with-conditions** | F1 repair and F2 wording plan | **Phase 1 — Judge records the concrete bounded repair/reconciliation act; Lane A applies; independent verification follows** |
| **Reject** | Full GR-013/P4a verification and B-021 closure at this revision | **Phase 1 — physical containment refuses before external writes and the existing G13 evidence remains valid** |
| **Defer** | P4b, full source/readiness clearance and application construction | Separate **Phase 1** evidence/acts; later authorized **Phase 2/SM05**, then **Phase 3/SM06** |

## Independent D-398 verification — Lane B, 2026-10-03

**What happened.** Judge approval received in the current conversation for verification of F1/F2 and drafting
the GR-012/P4b proposal, pending durable registration (`D-183`). Read clean revision
`bda08727e1bc3031d5c6ef1dd2333d6f69ee31d5`. Earlier Lane A answers and the original `4e50c41` rejection remain
history. This is the raiser's follow-up, not a Lane A answer or permission to repair.

The supplied October 3 analysis's hard-link result is independently reproduced at this revision. New evidence:
`C:/CoWork/outputs/lane-b-followup-2026-10-03/results.json` and `verify.mjs`. All mutations used disposable
paths in that output directory; cleanup removed exact created names, without recursive deletion.

| Child | Actual observation | Disposition / success criterion |
|---|---|---|
| F1 named repair | All ten physical-containment cases and all five baseline-restore cases pass | Supported within those cases; not full GR-013 acceptance |
| F1 hard link at capture | A multiply linked regular file is accepted (`nlink=2`) | Missing capture refusal; outside bytes stayed unchanged in this capture-only probe |
| F1 hard link substituted after capture | Restore does not refuse; disposable outside bytes change from `EXTERNAL USER DATA` to `ORIGINAL` | Reject containment. Refuse before any outside write; this is stable substitution, not a race |
| F1 regular-file identity | Preserve the original file under another name and create a new ordinary file at its old name. Distinct file IDs are measured; restore accepts and overwrites the replacement | D-398 promises object identity but enforces it for directories only. Specify the regular-file rule explicitly before correction; this case establishes a contract mismatch, not an outside write |
| F1 missing-file control | A deleted baseline file is recreated through its unchanged parent | Supported restoration behavior must remain possible, or an explicit changed contract and fixture audit are required |
| F2 wording | Template §§4/8 agrees with D-398: new construction needs red evidence; characterization needs honest evidence/rationale; human final push is scoped to B-114 implementation transport; multi-child refusal remains | Independently verified wording only. No executable gate or push authority is established |

**What you need.** Lane A appends its own response; records F2's scoped independent receipt at GR-015;
records this failed F1 verification at GR-013 and SV-002 §2.3.2; keeps B-021 Applied and this entry Open.
F1 remains one child of this entry, with no new handoff or GR identifier. Whole-entry closure follows the weakest
unresolved child, not F2 alone.

**Draft fix, specified not applied.** Reject multiply linked regular files at capture and during the all-entry
restore preflight, then re-check before each write. For an existing regular file, enforce recorded identity;
for a missing baseline file, permit recreation only through validated unchanged parents. Lane A must audit
fixtures that deliberately replace ordinary files and present any intentional exception to the Judge rather
than silently narrowing D-398. Preserve root/component/kind checks and the stated non-atomic race boundary.
Acceptance requires both hard-link refusals, an ordinary replacement refusal, single-link and missing-file
positive controls, the ten containment and five restoration cases, and applicable G13-1–G13-7 proof at the
repaired revision. Disclose inherited versus freshly rerun evidence; independent verification follows delivery.

**What you did instead.** Verified the bounded repair and wording, reproduced remaining failures and drafted
the correction. Full fixture completion, concurrent runs, interruption and failed-cleanup recovery were not
rerun in this turn; their earlier evidence retains its provenance. No production/user file was harmed.
The parent proposal and follow-up sequence are in B-154's latest section.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | F2 amended wording | Phase 1: Lane A records the scoped independent receipt at GR-015 |
| Approve-with-conditions | F1 correction draft | Phase 1: concrete Lane A diff/fixture audit, bounded Judge act, delivery and independent proof |
| Reject | Full F1/GR-013 verification, B-021 and B-155 closure | Phase 1: outside-write and regular-file continuity failures must be resolved |
| Defer | Tool correction execution and construction | Separate Phase 1 application authority/evidence; Phase 2/SM05 remains held |
