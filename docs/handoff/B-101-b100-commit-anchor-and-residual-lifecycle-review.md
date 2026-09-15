# B-101 — B-100 application is durable, but its read anchor and three lifecycle statements remain wrong

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent verification of B-098, B-099 and B-100; final Graphify synchronization; no build, governed-source edit, publication, lane transition or release action
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-15, receipt only; this session's own read is not independently
  git-verified (`device_bash` re-checked this turn, still unreachable — same Windows-update mount
  issue).** Applied now, hash-independent: repair item 3 (B-098/B-099/B-100 Lane A fields reworded
  `Acknowledged` → `Answered` to match their `Status: Answered` header); repair items 4–5 (B-096's
  stale pre-corroboration evidence paragraph marked historical/superseded, and its final-verdict
  `S17` row corrected from "blocked on the `GA1` check" to "`GA1` Answered for planning, held for the
  accepted `A4` write set"). Held, not applied: repair items 1–2. This entry's own claimed commit
  range (`19f1b89`…`4e37c93`) and its proposed replacement anchor for B-100
  (`79a4450cc09c1dcb01d0d7acad8dd318008b6674`) are recorded in B-100 as Lane B's reported claim, not
  written into any audit field, because this session cannot adjudicate it against the different full
  SHA the prior turn's narrative supplied for the same fact. Item 6 (commit) is not performable by
  this session for the same shell-access reason. Items 7–8 (independent review, Graphify) stay
  sequenced after a commit this session cannot make. B-084/B-088 Chief Editor inputs are relayed to
  the Chief Editor in the consolidated report, not decided here.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Committed B-071/B-096–B-100 chain `19f1b89` through `4e37c93`; upstream and local HEAD both `4e37c93`; `git cat-file` failure proving B-100 is absent at its claimed `e0e1c85` read anchor; current lifecycle headers and B-096 body; `docs/handoff/README.md` D-204/D-205; `bun run check`; `.graphify/branch.json`.
- **Verified-At-Commit:** 4e37c93f48675486fa22088eee008ad5f050c863

## What happened

**Clarified task:** independently review Lane A's committed second-pass corrections, identify only
the remaining gaps, derive success criteria from reproducible failures, and provide the smallest
parent-first repair plus the Chief Editor's still-open B-084 and B-088 decisions. Preserve existing
artifact owners and plan only; do not build.

Lane A's second pass is committed and pushed. The working tree is clean, local HEAD equals upstream
at `4e37c93`, and the six intended handoff files were committed separately. B-071 now has one valid
Choice B return record and a syntactically valid audit field. B-096/B-097 correctly remain open with
child dispositions; B-098/B-099/B-100 correctly carry `Resolution: Applied` and do not claim
independent verification.

Three residuals prevent independent verification. They are narrow lifecycle/evidence corrections,
not a reopening of the accepted business direction.

## Parent-first decision table

| Order | Decision | Accept effect | Reject or stop condition | Result |
|---:|---|---|---|---|
| 1 | Treat the committed chain as durable application evidence | Removes the obsolete “uncommitted/on disk” limitation | Reject any current claim that the batch still lacks commits or remote durability | **Accept — Git and upstream agree** |
| 2 | Correct B-100's impossible read anchor | Restores D-214 audit meaning | Reject `e0e1c85`: B-100 does not exist in that tree | **Accept with exact fix below** |
| 3 | Align the Lane A disposition word with `Status: Answered` | Header and response express one lifecycle state | Reject `Acknowledged` as the leading disposition on B-098/B-099/B-100 | **Accept with exact fix below** |
| 4 | Reconcile B-096's older GA1 statements with its new child table | Leaves one current planning answer and one real S17 blocker | Reject “no second actor” and “blocked on GA1” as current claims | **Accept with exact fix below** |
| 5 | Independently verify only after 2–4 land | Allows B-098/B-099/B-100 to reach terminal evidence honestly | Stop if any audit value, current body statement or cross-reference still contradicts the applied result | **Required** |
| 6 | Synchronize Graphify after the verification/status commits | Avoids rebuilding against an intermediate state | Stop if further tracked edits remain | **Defer until last** |

## What is guaranteed to fail and how success is proven

| Deterministic failure | Reproduction | Success criterion |
|---|---|---|
| B-100 says it was written against `e0e1c85` | `git cat-file -e e0e1c85:docs/handoff/B-100-...md` fails because B-100 was introduced later at `79a4450` | B-100's Lane A read citation and `Verified-At-Commit` name `79a4450cc09c1dcb01d0d7acad8dd318008b6674`, or Lane A supplies a later actual read commit that contains B-100 |
| B-100's answer says commit/push was not performed | Git shows the six-file application chain and upstream equals `4e37c93` | Append a dated correction stating the old sentence described the pre-commit moment and that durability is now proven by Git; do not rewrite it as though it never existed |
| B-098/B-099/B-100 have `Status: Answered` while their Lane A fields begin `Acknowledged` | README defines these as different dispositions: acknowledged means queued; answered means resolved | Each Lane A field begins `Answered 2026-09-15...`; its later explanation may retain the earlier acknowledgement chronology |
| B-096 still says “No second actor has confirmed” | The B-100 correction and child table now record two-actor corroboration | Mark the older sentence historical/superseded or replace it with the bounded corroboration statement |
| B-096's final verdict says S17 is blocked on GA1 | The new child table says GA1 Answered and S17 Held on A4 authorization | Final verdict names the exact A4/write-set authorization as the remaining blocker |
| The full suite reports 15/17 | The remaining failures are current graph coverage and revision drift; a green receipt check cannot test the semantic defects above | Human review clears these residuals; then final Graphify rebuild/remerge clears coverage and revision drift; full suite reruns |

The severity language in the request does not provide evidence of bankruptcy or customer harm.
Success is derived from the reproducible refusal cases above so urgency cannot change the acceptance
standard.

## Exact Lane A repair

Apply one bounded response pass to the existing entries:

1. **B-100 audit anchor.** Replace both B-100 references claiming the Lane A answer read
   `e0e1c85…` with the actual read commit containing B-100. The first provable candidate is
   `79a4450cc09c1dcb01d0d7acad8dd318008b6674`; use a later SHA only if Lane A actually read that
   later tree. Keep the audit field to the SHA alone.
2. **B-100 durability addendum.** Append: “The no-commit statement above described the state before
   the response commits. The six-file application is now durable in commits `19f1b89` through
   `4e37c93`; local and upstream were equal at `4e37c93` when B-101 reviewed it.” This is dated
   evidence, not another live-status tracker.
3. **Disposition words.** Change the leading disposition inside B-098, B-099 and B-100's Lane A
   fields from `Acknowledged` to `Answered`. Preserve their `Status: Answered`,
   `Resolution: Applied`, dispositioning actor and read anchors.
4. **B-096 evidence paragraph.** Mark the old “No second actor has confirmed” sentence as the
   historical state at `76a0ea2`, superseded by the 2026-09-15 two-actor corroboration. Do not call
   that corroboration independent verification of an applied source correction.
5. **B-096 final verdict.** Replace “Blocked on the GA1 check against 0002” with “GA1 Answered for
   planning; S17 application held for the Chief Editor-accepted A4 exact write set.” Keep S15 and
   S16 open.
6. **Run the consistency suite and commit the correction.** No Product, Fn_Spec, storyboard,
   Encyclopedia, traceability, schema or application file belongs in this repair.
7. **Lane B independently reviews the committed correction.** If it holds, promote B-098, B-099 and
   B-100 to `Verified` in their own records. B-096/B-097/B-071 remain open for their named children.
8. **Graphify last.** After lifecycle promotion commits, Lane A · Code rebuilds and re-merges;
   Lane A · Cowork checks curated meaning; require document coverage and analyzed-HEAD equality.

## Chief Editor: remaining inputs only

### B-084 A4 capacity

The selected B-084 packet still needs four values; no product choice is reopened:

| Input | Chief Editor supplies | If absent |
|---|---|---|
| Operator drafting capacity | Person-hours and available dates for the A4 matrix, clauses and same-article acceptance example | Lane A may estimate and draft, but cannot promise completion |
| Chief Editor review capacity | Person-hours and review window | A4 cannot be accepted in the iteration |
| Independent review capacity | Person-hours and named eligible reviewer | The packet can reach `Applied`, not `Verified` |
| Contingency limit | Maximum extra hours if the first-intake trend case finds another contradiction | Stop and return the new finding rather than silently expanding scope |

The A4 success artifact remains one accepted exact write set across Product, applicable Fn_Spec,
current-use storyboard views, traceability and Encyclopedia Entries 03/06, with frozen sources
untouched. It includes the mandatory/optional field matrix, exactly one subject topic, first-intake
trend shape and one article's normal/revision path to LinkedIn `ManualReady`.

### B-088 P1 authorization

The Chief Editor chooses one:

| Choice | Consequence |
|---|---|
| **Approve P1** | Lane A · Code gets a bounded 1–3 hour unit for token termination and the three labelled negative probes; independent review is a separate 1–2 hour allocation |
| **Defer P1** | B-084 A4 stays first; C-39 remains incomplete and cannot support closure/C-35 claims |
| **Reject P1** | Requires a cited alternative token-boundary contract; the settled actor allowlist is not silently widened |

P1 succeeds only when `Lane B_fake`, `Codex_unknown` and `Judge_unknown` reach the rejecting branch,
settled actors and valid prose/Markdown delimiters retain their expected behavior, the intended
error is asserted, fixtures restore the tree, and the full checks run. P1 does not include P2 audit-
field coverage and authorizes no Product/application build.

## Cross-artifact and lane impact

| Surface | Current result |
|---|---|
| `Modular_PRD.md` / Fn_Specs | Unchanged; B-084 A4 and B-096 S15/S16 remain their existing owners |
| Storyboard/story panels/UML/data flow | One storyboard remains the owner; S17 is draftable and held from application by A4 authorization |
| Encyclopedia / cross-reference | Entries 03/06 and traceability remain inside B-095's A4 write set |
| Lane A · Cowork | Applies this lifecycle repair; prepares A4 after capacity is supplied |
| Lane A · Code | Executes B-088 P1 only if authorized; operates final Graphify sync |
| Lane B | Performs independent verification after the correction commit; no build is authorized |
| Lane C | No current action; later workflows consume already-specified checks only |

## Child dispositions — 2026-09-15, Lane A

Per `D-204`, header fields describe the whole entry; child state lives here. The whole entry stays
`Open` until the weakest child closes.

| Repair item | Disposition | Note |
|---|---|---|
| 1 — treat the batch as committed/durable | **Applied** | Recorded in B-100 as Lane B's reported claim, not independently git-verified |
| 2 — correct B-100's read anchor | **Held** | Two unverified commit claims for the same fact now conflict (`e0e1c85…` vs `79a4450…`); no tool-based adjudication available this session |
| 3 — disposition words `Acknowledged` → `Answered` | **Applied** | B-098/B-099/B-100 |
| 4 — B-096 evidence paragraph | **Applied** | Marked historical/superseded |
| 5 — B-096 final verdict wording | **Applied** | `GA1` no longer called a live blocker |
| 6 — commit the correction | **Held** | `device_bash` unreachable this session |
| 7 — independent review | **Open** | Lane B's next action, after a commit exists |
| 8 — Graphify sync | **Deferred** | After 6–7 land |

## What you did instead

Read the committed artifacts and their Git history, reproduced the impossible B-100 anchor, ran the
full consistency suite, and raised this one residual correction. Did not edit B-071/B-096–B-100,
governed sources, code, schema, Graphify or lane state, and did not build or publish.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Lane A's committed B-071 return mechanics | Phase 1 — remains open for its ontology children |
| Approve-with-conditions | B-096 two-actor GA1 planning answer | Phase 1 — reconcile its older evidence and final S17 blocker text |
| Approve-with-conditions | B-098/B-099/B-100 application | Phase 1 — repair disposition wording and B-100's impossible anchor, then independent review |
| Reject | B-100's `e0e1c85` read anchor | The file does not exist at that commit |
| Reject | Current claim that the applied batch is uncommitted | Git and upstream both contain the six response commits |
| Approve-with-conditions | B-084 A4 | Chief Editor supplies the four bounded capacity inputs |
| Approve-with-conditions | B-088 P1 | Chief Editor chooses Approve/Defer/Reject for the exact bounded unit |
| Defer | Product/source application, application build, publication and release | Existing authorization and dependency boundaries |
| Defer | Graphify synchronization | Final lifecycle correction and verification commits first |

## Lane B independent review — direct Git adjudication, 2026-09-15

### Scope and evidence correction

Lane A's latest handover correctly refused to replace one unverified narrative hash with another,
but its premise is no longer current. Lane B ran Git directly in this repository:

- local `HEAD` and upstream both resolve to
  `4429d40d834db5f7446facd09c44310908109892`;
- `git log -- docs/handoff/B-100-lane-a-applied-batch-lifecycle-review.md` shows B-100 was
  introduced by `79a4450cc09c1dcb01d0d7acad8dd318008b6674`;
- `git cat-file -e` confirms B-100 is absent at
  `e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6` and present at `79a4450…`;
- the Lane A response was applied later in `cb74f7e7fbe315e57bc0b2da78d6647293ce635a`;
- the B-101/B-102/B-103 acknowledgements and subsequent corrections are all in the branch history,
  and upstream equality proves they were pushed.

The original B-100 `Verified-At-Commit: e0e1c85…` was not intrinsically invalid when Lane B first
raised the entry. Under D-214, a new record cites the tree the raiser inspected, so its audit anchor
normally predates the file that records the finding. The actual defect was introduced when Lane A's
later response claimed it had read and answered **B-100 itself** at `e0e1c85…`. That is impossible
because B-100 is absent from that tree. Once the record was dispositioned, its whole-record audit
field also needed to reflect the response's real read baseline.

The first directly proven response-read candidate is `79a4450…`, which contains B-100 before Lane
A's response commit. The response commit `cb74f7e…` is not stored in `Verified-At-Commit`: D-214
says the disposition commit is derivable and the audit field stores the commit read.

### Parent-first result

| Order | Existing child | Direct result | Remaining action |
|---:|---|---|---|
| 1 | Durable commit/push | **Proven.** HEAD equals upstream and contains the complete response chain | Replace Lane A's current “no shell evidence” statement with this dated correction; do not rewrite its historical account |
| 2 | B-100 response-read anchor | **Proven wrong at `e0e1c85…`; proven present at `79a4450…`** | Lane A changes its response citation and the whole-record `Verified-At-Commit` to full `79a4450…` |
| 3 | B-098/B-099 disposition words | **Verified for this bounded correction.** Both are `Answered` / `Applied` and name Lane A as dispositioning side | Independent terminal promotion may occur only after their full entry evidence, not merely these header words, is reviewed |
| 4 | B-096 evidence and S17 wording | **Verified for B-101's requested text correction.** Historical single-reader wording is distinguished from later corroboration; GA1 is not the S17 blocker | Keep B-096 open for S15/S16 and A4-held S17 |
| 5 | B-101 independent review | **Performed in this section** | B-101 remains open because item 2 is not yet applied and Graphify remains stale |
| 6 | Graphify | **Not current.** `lastAnalyzedHead` remains `f63d6eb…` while Git HEAD is `4429d40…`; `stale: false` is contradicted by the revisions themselves | Lane A synchronizes only after the B-100 correction and accepted B-102/B-103 source packet land |

### Exact Lane A correction — existing files only

1. In B-100's Lane A response, append a dated correction stating that direct Git review supersedes
   the no-shell caveat: B-100 is present at `79a4450…`, the response landed at `cb74f7e…`, and the
   current branch is pushed through the then-current upstream tip.
2. Replace the Lane A response's `at read commit e0e1c85…` claim with
   `at read commit 79a4450cc09c1dcb01d0d7acad8dd318008b6674`.
3. Set B-100's `Verified-At-Commit` to that same full `79a4450…` value. Do not use `cb74f7e…`, which
   is the derivable response commit rather than its read baseline.
4. Update B-101's child table: durable application `Verified`; anchor correction `Applied` only
   after steps 1–3 commit; independent review `Performed`; Graphify still deferred.
5. Keep B-101 and B-100 non-terminal until Lane B or another eligible independent actor reads the
   committed correction. Do not promote B-098/B-099/B-100 as a bulk batch.

### One decision pass for the remaining Chief Editor inputs

The recurring decision requests should cite one Judge act, not receive separate paraphrased answers
in B-094/B-100/B-101/B-102/B-103. The act should record:

| Decision | Recommended selection | What remains supplied by the Chief Editor |
|---|---|---|
| B-102 consumer model | **Choice A — bounded packet plus executable controls** | Explicit acceptance and authorization for Lane A to draft the exact D-86 amendment/write set |
| B-103 promotion mechanism | **P0 A — bounded promotion packet** | Exact source sections, owner, dependencies, DoD and verifier before application |
| B-103 lane/interface model | **Accept P1 and P2** | Lane B editorial application; Lane C delivery assurance; Lane A evidence/data policy; minimum B→C allowlist and C→B deficiency schema |
| B-084 A4 | **Keep as the selected Product-readiness unit** | Operator drafting hours/dates, Chief Editor review hours/window, independent reviewer/hours and contingency limit |
| B-088 P1 | **Defer behind the accepted source packet and A4 unless remaining capacity fits it** | If approved, authorize only token termination, labelled negative probes and its independent review allocation |

The commercial fact already supplied is bounded: there is no current time-sensitive customer;
M-MVP is intended to support M-POC marketing for customers who may be time-sensitive. That supports
building a credible manual-ready journey and reusable S2 engine, but it supplies no operator hours,
quarterly goal, release date or customer deadline.

### Cross-artifact result

No Product or implementation artifact changes from this audit correction. B-102/B-103 already own
the later source-packet crosswalk. `Modular_PRD` retains NFR-08 for editorial audit reconstruction
and FR-14/AC-21 for the in-product continuity surface; the storyboard remains the owner of story
panels, UML and data-flow views; traceability and `ENCYCLOPEDIA-SYNC.md` retain their existing impact
roles. Graphify synchronization remains last and cannot substitute for applying those source edits.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Direct Git proof of current HEAD/upstream and B-100's introduction commit | Phase 1 — supersedes the latest no-shell evidence limitation |
| Approve-with-conditions | `79a4450…` as B-100's response-read anchor | Phase 1 — Lane A applies it, then an independent actor reviews the committed record |
| Reject | Claim that an initial handoff must exist at the commit it inspected | D-214 makes that commit the read baseline; the later response must exist at its own read baseline |
| Reject | Treating all hashes in the thread as narrative-only | Current Git history directly establishes the named commits and upstream equality |
| Approve-with-conditions | One Chief Editor decision pass for B-084/B-088/B-102/B-103 | Phase 1 — one Judge act referenced by the existing entries; no copied answers |
| Defer | Governed-source application and Lane B/C implementation | Exact authorized write set, capacity and active-lane work orders |
| Defer | Graphify synchronization | B-100 correction and accepted B-102/B-103 source application first |
