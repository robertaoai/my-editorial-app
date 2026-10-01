# B-116 — Option A passes behavior checks while its audit record remains ambiguous

- **Raised:** 2026-09-16 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent verification of B-113, B-112 and B-097; B-103 P3 closure
- **Status:** Answered
- **Lane A:** **Answered 2026-10-01 (`D-375`, applied at `e1e3b29`), read at `87aa3f5`.** Items 2–6 were applied as one
  bounded Lane A unit, after the `B-150` ledger found the unit had never been applied:
  - **(2)** `B-113` keeps one `Verified-At-Commit`, `284b4ae`: the commit that records the complete Option A
    packet (`27efc2d`, `0d2cc2b`). `0d2cc2b` and `3368753` are kept as prose history.
  - **(3)** `B-112`'s placeholder is filled with `d80167b` and the fixture-mock follow-up `9afbb9b`, taken from its own
    correction note. Its anchor moves from `3368753`, an unrelated `B-115` commit, to `284b4ae`.
  - **(4)** `B-097`'s anchor moves from `389d22a`, which predated Option A, to `284b4ae`, so its header and body name
    one review point.
  - **(5)** `handoff-response` now fails when `Kind`, `Phase`, `Receiver`, `Status`, `Resolution`, `Verified-By`,
    `Verified-At-Commit`, `Follow-up-Tier` or `Superseded-By` repeats before the first `## ` heading (fences
    stripped). The SOP states the rule. It found a third live instance, `B-071`'s pre-return audit pair, which is
    now prose.
  - **(6)** `bun run check` passes 19/19. `bun run fixtures` on a clean tree at `e1e3b29` exits 0, with every
    fixture behaving as intended, including the cardinality cases, and the tree restored.
  `B-113`, `B-112` and `B-097` stay `Applied`. **Item 7:** Lane B verifies in order: `B-113`, then `B-112`, then `B-097`,
  then `B-103` P3. Disposition: `Applied`.
  *Earlier receipt:* **Acknowledged 2026-09-16, receipt only.** The parent-first table and items 1–6 under
  "What Lane A needs to do" are accepted as the next Lane A unit. `B-113`, `B-112` and `B-097` stay
  `Applied` until that correction lands and Lane B independently verifies in the stated order
  (`B-113` → `B-112` → `B-097` → `B-103` P3). No header field is edited by this acknowledgement.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** direct read of B-112/B-113/B-097 at `284b4ae`; `bun run check` 18/18; `bun run fixtures` 143/143 with the working tree restored; Graphify governed-intent baseline `0d2cc2b` and excluded-only handoff advance to `284b4ae`
- **Verified-At-Commit:** e1e3b2925e0a22ab202479f7e32fb7db05959521

## What happened

Lane B independently reviewed the Chief Editor's Option A application after Lane A recorded it as
complete. The implementation evidence is strong: the consistency suite passes 18/18, the
history-aware terminal-return walk reports 74 clean files, and all 143 negative fixtures behave as
intended. The six historical candidates now carry bounded Terminal annotation records.

The handoff audit record still cannot be independently verified as one coherent packet:

1. `B-113` carries two header-level `Verified-At-Commit` fields, one naming `0d2cc2b` and the other
   `3368753`. A singleton audit fact therefore has two answers. The shared `field()` reader accepts
   the first and silently ignores the second, so both consistency and fixture suites stay green.
2. `B-112` still contains the live Lane A placeholder ``<pending commit>`` and later says that the
   placeholder remained unfilled. `B-113` simultaneously claims it was replaced. The current
   header points to `3368753`, which is the later B-115 handoff commit rather than the Option A
   implementation packet.
3. `B-097` correctly remains `Applied`, pending independent review, but its header audit anchor is
   still `389d22a`, predating the Option A implementation. Its appended application section names
   the new commits, so the body and header no longer present one review point.

This is an evidence-integrity and check-coverage defect. It does not invalidate the Option A
behavior, reopen its Judge choice, or change Product scope.

## Parent-first decision table

| Order | Decision | Accept path | Reject / stop condition | Completion evidence |
|---:|---|---|---|---|
| 1 | **Parent — is there one authoritative review commit per handoff entry?** | Keep exactly one header `Verified-At-Commit`, naming the commit whose complete record was read | Preserve two singleton fields or let the parser choose one silently | B-113 has one audit anchor and a negative fixture rejects a duplicate |
| 2 | **Child — is B-112's correction claim true?** | Remove or explicitly supersede the live placeholder and cite the exact correction packet | Claim replacement while the placeholder remains operative | Direct read shows no active placeholder and one coherent audit anchor |
| 3 | **Child — is B-097 ready for independent verification?** | Align its header evidence with the complete Option A packet, then re-run the behavioral proof | Verify from the pre-Option-A `389d22a` anchor | One review commit, 18/18 checks and 143/143 fixtures |
| 4 | **Child — can the same false green recur?** | Validate singleton header cardinality and add refusal fixtures | Rely on first-match parsing | Duplicate `Status`, `Resolution`, `Verified-By`, `Verified-At-Commit`, `Follow-up-Tier` or `Superseded-By` fails for the applicable entry shape |
| 5 | **Boundary — may dependent work close?** | Lane B independently verifies B-113, then B-112, then B-097; B-103 P3 follows | Self-verify from Lane A or close B-103 P3 first | Independent actor, named commit and ordered dispositions |

## What Lane A needs to do

1. Acknowledge this entry. Keep B-113, B-112 and B-097 at `Applied` until independent review.
2. Correct B-113 to one `Verified-At-Commit`. The selected SHA must be the one complete record Lane A
   intends Lane B to review; put explanatory history in prose, not in a second audit field.
3. Correct B-112 so its Lane A answer and later account agree about the placeholder. Use the existing
   entry rather than creating another owner, and leave a Terminal annotation record if the edit
   touches an already-terminal state.
4. Align B-097's header evidence with the complete Option A application packet while preserving its
   `Applied` state and independent-verification requirement.
5. Add a singleton-cardinality rule to the shared handoff metadata parser or the consuming checks.
   Terminal annotation records remain repeatable by design; top-level lifecycle and audit fields do
   not. Add negative fixtures proving a duplicate cannot stay green.
6. Run `bun run check` and `bun run fixtures`. Because this changes a Lane A control script, run the
   governed Graphify update last and preserve curated fragments. Apply `B-041`'s portability
   boundary: require portable paths in any proposed tracked graph artifacts; do not require the
   gitignored machine-local `.graphify` runtime to produce zero findings.
7. Return the single final commit to Lane B. Lane B re-performs the suites and verifies in dependency
   order: B-113, B-112, B-097, then B-103 P3.

## Failure-derived success criteria

| Guaranteed failure if unchanged | Required evidence of success |
|---|---|
| Two audit anchors let different readers review different states | One top-level anchor per entry, enforced mechanically |
| A prose claim says a placeholder was replaced while the placeholder remains | The current record has no operative placeholder and names the exact reviewed commit |
| A green suite is treated as proof of metadata uniqueness | A duplicate-singleton fixture fails for the intended reason |
| B-097 is verified from evidence predating Option A | Its final header and body identify the same complete packet |
| B-103 P3 closes before its return-protocol dependency is independently verified | Ordered verification evidence exists for B-113 → B-112 → B-097 → B-103 P3 |

## Cross-artifact review

| Artifact | Disposition |
|---|---|
| `docs/Modular_PRD.md` | Unaffected — no Product behavior, editorial acceptance or sprint tier changes |
| Storyboard and story panels | Unaffected — normal and revision article journeys do not model repository audit headers |
| UML and data flow | Unaffected — no application state, database entity, event or exposure changes |
| Requirements traceability | Unaffected — this is Project-Scope evidence integrity for an existing control |
| Encyclopedia | Unaffected — Entry 05's D-168 staleness remains separate |
| B-114 / B-115 | Still Open and acknowledged only; their Intent/Build/DevOps clarification is a separate parent chain and does not replace this correction |
| Graphify | No rebuild for this handoff-only finding; rebuild after Lane A changes the governed check/parser source. `docs-drift` confirms governed intent is current at `0d2cc2b`; full-runtime portability findings remain the existing B-041 standing limit because no `.graphify` artifact is tracked or proposed. |

## What you did instead

Independently re-ran the complete consistency and fixture suites, read the six Terminal annotation
records, separated behavioral success from audit-record integrity, and raised one bounded parent
entry. Did not alter B-097/B-112/B-113, canonical governance, Product artifacts, application code,
Graphify state or deployment state.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Option A behavior and six bounded Terminal annotation records | Phase 1 — behavior proven at `0d2cc2b`; retain pending evidence repair |
| Approve-with-conditions | B-113/B-112/B-097 application packet | Phase 1 — one audit anchor, no live placeholder, duplicate-field refusal fixture, independent Lane B review |
| Reject | Independent verification at `284b4ae` | Audit record is internally contradictory despite green suites |
| Defer | B-103 P3 and whole-entry closure | After B-113, B-112 and B-097 are independently Verified in order |
| Defer | B-114/B-115 governed propagation | Separate Lane A Intent/Build/DevOps chain; do not combine it with this evidence repair |

## Independent O0 review — D-375 is applied but not complete — Lane B — 2026-10-01

**Read:** `62bc0cfa327e8d168708d44f6b224603a1715805`; executable probe baseline `20b4e0bb0d9bbfd75afb86e39e8e6d81e87612de`.
Judge authorization: "Lane B verifies O0. Phase 1". No receiver answer or owned checker is edited here.

**Completed:** the four concrete record repairs reproduce correctly: B-113 has one header anchor;
B-112 has no live placeholder; B-097 uses the Option A read point; B-071's obsolete audit pair is prose.
The five new exact-case/fenced/body cardinality fixtures pass. Those accomplishments are retained.

**Blocking gap — item 5 still produces a false green.** `handoff-fields.mjs` reads names with `mi`
(case-insensitive), while `handoff-response.mjs` counts singleton names with `gm` (case-sensitive).
The independent probe against B-001's real header confirms: unchanged baseline is green; adding
a second exact-case Status fails; adding a second lowercase `status` is green; adding a second
lowercase `verified-at-commit` is green. In each case the reader still accepts the field vocabulary.
Files were restored. This is a parser-equivalence defect, not an assertion that any existing live
handoff actually contains these mixed-case duplicates.

**Evidence:** external `C:/CoWork/outputs/handoff-review-2026-10-01/o0-case-probe.json`
and `o0-case-probe.mjs`; real checker lines 681–683 and shared field reader lines 43–54.
The full existing fixture run in an isolated linked worktree restored its tree and passed 258/259;
the one suite exception was ENOTDIR for `.git/lane-gate-fixture`, before its lane-gate cases ran.
That portability limitation is separate from the deterministic false-green probe; it is not evidence
that lane-crossing refusal semantics fail. No whole-suite pass is claimed from that run.

### Draft repair for Lane A — existing correction owner, no duplicate handoff

1. Count the nine header singleton names with the same case-insensitive semantics as `field()`;
   the smallest change is `gm` → `gmi` in the cardinality matcher. Preserve horizontal whitespace,
   fence exclusion, first-heading boundary and repeatable body records.
2. Add refusal cases for mixed-case duplicates of all nine names, including reversed order and
   differing values. Keep exact-case refusal and fenced/body positive controls. Success means
   every reader-recognized duplicate is refused, regardless of order or casing.
3. Apply as a bounded Phase 1 Lane A unit after the Judge's Register act; run the corrected fixtures
   and consistency suite on a suitable clean checkout. If using linked worktrees, resolve Git's
   administrative directory for the fixture scratch area rather than assuming `.git` is a directory.
4. Return evidence here. Lane B verifies B-116's repair, then B-113 → B-112 → B-097 → B-103 P3.
   Do not set those downstream entries Verified from the unchanged green suite.

| Decision | Verdict | Follow-up phase / condition |
|---|---|---|
| D-375 concrete record corrections and existing five cardinality fixtures | Approve | Phase 1 — retain proof and chronology |
| B-116 item 5 / whole correction-unit independent closure | Reject | Phase 1 — matcher/reader equivalence and mixed-case refusal proof required |
| Downstream B-113 → B-112 → B-097 → B-103 P3 verification | Defer | Phase 1 — after the bounded B-116 repair is independently verified |
| Software construction | Defer | Authorized Phase 2 — Gate 2, work order and Lane B Active |
