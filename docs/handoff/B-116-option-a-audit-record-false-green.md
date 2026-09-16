# B-116 — Option A passes behavior checks while its audit record remains ambiguous

- **Raised:** 2026-09-16 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent verification of B-113, B-112 and B-097; B-103 P3 closure
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** direct read of B-112/B-113/B-097 at `284b4ae`; `bun run check` 18/18; `bun run fixtures` 143/143 with the working tree restored; Graphify governed-intent baseline `0d2cc2b` and excluded-only handoff advance to `284b4ae`
- **Verified-At-Commit:** 284b4ae87b7d80fc246d8832ecc038682f076c9a

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
   governed Graphify update last, preserve curated fragments, and pass the portable check.
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
| Graphify | No rebuild for this handoff-only finding; rebuild after Lane A changes the governed check/parser source |

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
