# B-113 — B-112 partial repair leaves B-097 unenforced and its evidence stale

- **Raised:** 2026-09-16 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent verification of B-112 and B-097; B-103 P3 and whole-entry closure
- **Status:** Answered
- **Lane A:** **Acknowledged and agreed, 2026-09-16.** All four residual gaps are real. Gap 4 (stale
  audit anchor) fixed directly in `B-112` — `<pending commit>` replaced, `Verified-At-Commit`
  advanced past the commit it was describing. Gaps 1–3 (enforcement narrowed to report-only, six
  unclassified candidates, multi-cycle history unmodeled) are not fixed here: they are exactly the
  Option A/B fork this entry itself frames, and it is not Lane A's to pick. **Presented to the Chief
  Editor as the same open question my own prior report already raised** — this entry's Judge
  clarification section states the choice more precisely than my own did, so I am pointing to it
  rather than restating a second version. No governed source, check behavior, or B-097/B-112
  disposition changes until that choice is made. Graphify not rebuilt: nothing governed changed in
  this answer.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** Chief Editor selected Option A (this entry's own "Judge clarification" section);
  Option A fully implemented at `27efc2d`/`0d2cc2b` — see B-097's "Chief Editor Option A applied in
  full, 2026-09-16"; `bun run check` 18/18, `terminal-return` 75/75 clean; `bun run fixtures`
  143/143; Graphify synced at `0d2cc2b`
- **Verified-At-Commit:** 0d2cc2bd5ea08097d055135337e08b82bda9f581
- **Verified-At-Commit:** 33687530f36a0bd3fdd1b06f625404cb9efdf827

## What happened

Lane A correctly accepted B-112's central finding, fixed the broken audit-only classifier and made
`terminal-return` report-only. The corrected fixtures pass. This safely removes the false blocking
gate, but it does not complete the contract B-097 required and it does not yet provide evidence
that can be independently verified as one complete packet.

Four residual gaps remain:

1. **B-097's prevention control is no longer enforced.** Its minimum packet requires channel checks
   to reject terminal files carrying unreturned live work. `terminal-return` now always returns an
   empty `findings` array. This is a safe interim state, but it is reporting, not prevention.
2. **Six candidates remain unclassified:** `B-004`, `B-008`, `B-017`, `B-046`, `B-103`, `C-001`.
   Their presence is not itself failure; leaving the semantic distinction undecided means B-097
   cannot claim the promised reject/pass boundary.
3. **Multi-cycle history is still unsupported.** An old Return record exempts a file forever, so a
   later close→edit cycle can pass without its own return. B-112 identified this and Lane A accepted
   it as real, but deferred it.
4. **The applied evidence is not pinned to the applied packet.** B-112's Lane A answer still says
   `<pending commit>`, while `Verified-At-Commit` remains `980d8d1`, the commit before Lane A's
   correction. The final correction spans `d80167b` and fixture repair `9afbb9b`. Graphify was
   analyzed at `d80167b`; the later change to `scripts/fixtures/suites.mjs` makes `docs-drift` fail.

No Product or editorial requirement changed. This is a lifecycle-control and evidence defect.

## Parent-first decision table

| Order | Decision | Accept path | Reject / stop condition | Completion evidence |
|---:|---|---|---|---|
| 1 | What is B-097's final prevention boundary? | Chief Editor selects Option A or B below | Leave the packet simultaneously described as enforced and report-only | One explicit Judge act, recorded in B-097/B-112 without a second owner |
| 2 | Is the application evidence exact? | Replace `<pending commit>` and pin the final applied commit | Cite `980d8d1`, which contains none of the correction | B-112 names `9afbb9b` or the later single completion commit actually reviewed |
| 3 | Is the history model complete enough for the selected option? | Option A: model terminal annotations and repeated cycles; Option B: remove the unearned enforcement claim | Treat a report-only candidate list as a reject-capable gate | Fixtures match the selected contract, including a second cycle |
| 4 | Is Graphify current? | Rebuild after the final scripts change and preserve curated fragments | Rely on `stale: false` while `lastAnalyzedHead != HEAD` | `lastAnalyzedHead == HEAD`, portable check passes, full consistency suite passes |
| 5 | Can Lane B verify? | Read the final artifacts and rerun both suites at one commit | Self-promote from `Applied`, or verify only the fixtures | B-112 then B-097 independently `Verified`; B-103 P3 may proceed afterward |

## Chief Editor choice required

### Option A — complete the enforceable contract (recommended)

Adopt a bounded terminal-annotation record and make the history check blocking again:

```markdown
## Terminal annotation record

- **Current-Resolution:** <existing terminal resolution, unchanged>
- **Annotation-Type:** audit-normalization | verification-evidence | cross-reference | correction
- **Annotation-Act:** <decision, finding or correction act; date and source locus>
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** <existing commit whose state was read>
```

The lifecycle algorithm then walks commits chronologically:

1. A terminal disposition starts one terminal episode.
2. Audit-only header normalization is allowed mechanically.
3. Other content added during that episode must introduce, in the same commit, either:
   - a valid Return record and `Status: Open`; or
   - a valid Terminal annotation record while preserving the terminal header.
4. A later terminal disposition starts a new episode. An older Return or annotation record cannot
   exempt later edits.
5. The check fails a B-071-shaped unreturned round and passes the B-103 correction/C-001
   cross-reference only after their non-return classification is recorded honestly.

Required fixtures: audit-only normalization; bounded correction; verification note; cross-reference;
genuine resumed scope; missing annotation act; false `No-Scope-Reopened`; and a second unreturned
cycle despite an older Return record.

### Option B — narrow B-097 to form validation and advisory detection

Keep `terminal-return` report-only, but explicitly amend B-097's claimed completion boundary:

- SOP and `handoff-response` enforce the form of a declared return.
- `terminal-return` produces candidates for human review and is not a prevention gate.
- Multi-cycle detection and terminal-annotation vocabulary become a named backlog item.
- B-097 cannot claim that the repository automatically rejects all terminal-plus-live-content
  cases.

This option is smaller, but it accepts that B-071 recurrence is detected only by human review.

## Lane A follow-up

1. Record the Chief Editor's Option A or B decision in this existing chain; do not create a second
   return-protocol owner.
2. Replace B-112's `<pending commit>` and advance its audit anchor to the exact final applied commit.
3. Align B-097's completion claims, fixtures and detector behavior with the selected option.
4. Resolve or explicitly classify the six report-only candidates without fabricating Return acts.
5. Rebuild Graphify after the final scripts edit and re-merge curated fragments if required.
6. Run `bun run check`, `bun run fixtures`, and the portable Graphify check.
7. Return the final packet to Lane B for independent verification. Only then may B-103 P3 resume.

## Cross-artifact disposition

| Artifact | Result |
|---|---|
| `docs/Modular_PRD.md` | Unaffected — no Product behavior or acceptance requirement changes |
| Storyboard and story panels | Unaffected — editorial user journeys do not model handoff-file lifecycle annotations |
| UML and data flow | Unaffected — no application state, event or stored-data shape changes |
| Requirements traceability | Unaffected — this remains Project-Scope verification control work |
| Encyclopedia | Unaffected — Entry 05's D-168 staleness remains separate |
| Graphify | **Sync required after the final correction** — current analyzed head is one governed-intent commit behind |

## Failure-derived success criteria

| Guaranteed failure if unchanged | Required evidence of success |
|---|---|
| B-097 says unreturned work is rejected while the check can never fail | Detector behavior and B-097 claim express the same selected boundary |
| A later terminal cycle inherits an old exemption | Multi-cycle fixture fails, or Option B openly defers this capability |
| Lane B verifies a commit that predates the applied fix | B-112 audit fields cite the exact final packet commit |
| Green fixtures are treated as a green repository | Full consistency suite passes, including `docs-drift` |
| Graph state claims current while its analyzed commit differs from HEAD | Graph branch record matches HEAD and portable check passes |

## What you did instead

Independently reviewed the two Lane A commits, ran the full consistency suite and all fixtures,
and kept B-112/B-097 at `Applied`. Did not invent Return records, modify Lane A's checks, change
Product artifacts, rebuild Graphify out of lane, or close B-103 P3.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Audit-only classifier correction and report-only safety fallback | Phase 1 — applied and fixture-verified |
| Approve-with-conditions | B-112 correction | Phase 1 — exact audit anchor, selected semantic boundary and Graphify sync |
| Reject | Independent verification of B-097 at `9afbb9b` | Its promised prevention boundary is not currently enforced |
| Defer | Six candidate classifications and multi-cycle enforcement | Chief Editor Option A/B decision |
| Defer | B-103 P3 and whole-entry closure | After B-112 and B-097 are independently Verified |

## Judge clarification — decision support for Option A or B, 2026-09-16

The Judge's `Judge Approved: decision-tree decision` instruction approves using the parent-first
decision tree and requires a concrete Accept/Reject choice. It does not, by itself, identify
Option A or Option B as the selected prevention boundary. Lane A must present and record the one
binary choice below; it must not infer the choice from the word “approved.”

### Highest-parent decision

> **Must a terminal handoff entry be automatically prevented from accepting later substantive
> work unless that same commit carries a valid Return record or a valid non-return annotation?**

| Judge choice | Accept means | Reject means | Resulting boundary |
|---|---|---|---|
| **Option A — enforceable lifecycle control (recommended)** | Yes. Silent post-terminal work is a control failure. A bounded terminal-annotation form is adopted for corrections that preserve the terminal state, and repeated terminal/return cycles are checked independently. | Reject the current report-only detector as the final B-097 control; it remains an interim safety fallback only. | B-097 keeps its original prevention claim and can close only after the blocking check, multi-cycle fixtures and six classifications pass. |
| **Option B — advisory lifecycle review** | Yes to the current SOP and Return-record form validation; accept that semantic reopening is identified by human review rather than rejected automatically. | Reject B-097's original claim that the channel prevents every terminal-plus-live-content case. | B-097 is narrowed to declaration/form enforcement plus advisory candidate reporting; annotation and multi-cycle enforcement move to a named backlog item. |

**Recommendation: Accept Option A; reject Option B as the terminal solution.** Option A preserves
the prevention outcome B-097 was opened to provide. Option B is acceptable only if the Judge
explicitly values immediate closure over automatic prevention and accepts the recurring human-review
dependency. Option A must remain bounded to this handoff lifecycle; it does not authorize wider
historical cleanup or application construction.

### Accept/Reject questions for the Chief Editor

The Chief Editor needs to answer only these business-control questions; Lane A translates the
answers into Register and implementation details:

1. **Accept or reject automatic prevention?** If accepted, choose Option A. If rejected, choose
   Option B and reduce B-097's stated guarantee.
2. **Accept or reject non-return annotations as valid terminal evidence?** Under Option A, accept
   them only when they name their act and state expressly that no scope reopened.
3. **Accept or reject independent treatment of each lifecycle cycle?** Under Option A, accept it;
   an old Return record cannot authorize a later cycle.
4. **Accept or reject retrospective fabrication?** Reject it under both options. The six candidates
   must be classified from their actual diffs and acts; no missing trigger or act may be invented.

### Child decisions after the parent

| Order | Child | Option A disposition | Option B disposition |
|---:|---|---|---|
| 1 | B-112 audit anchor | Replace `<pending commit>` and cite the final correction commit | Same |
| 2 | Graphify currency | Rebuild after the final scripts edit; preserve curated fragments | Same |
| 3 | Six candidates | Classify and record as metadata normalization, bounded terminal annotation, or genuine return | Human-classify in the report; no blocking disposition required |
| 4 | Multi-cycle behavior | Implement and negative-test each terminal episode separately | Record as a backlog limitation |
| 5 | `terminal-return` | Restore blocking findings after the annotation contract is executable | Keep `findings: []` and state that it is advisory |
| 6 | B-112 verification | Lane B verifies the complete enforcement packet | Lane B verifies only the narrowed advisory packet |
| 7 | B-097 verification | Verify against its original prevention outcome | Verify only after its completion claim is formally narrowed by the Judge act |
| 8 | B-103 P3 | Resume only after B-097 is Verified | Same; the verified claim is narrower and must be cited as such |

## Exact Lane A follow-up — Option A

1. **Acknowledge B-113.** Record receipt without changing B-112/B-097 to `Verified`.
2. **Record the Judge act.** Lane A assigns the Register identifier and states that Option A is the
   selected Project-Scope lifecycle-control boundary. Update all required tracking tiers in the
   same pass only if the act creates or sequences an artifact; state explicitly that Product tiers
   are unaffected.
3. **Repair B-112's audit evidence.** Replace `<pending commit>` and advance
   `Verified-At-Commit` to the final commit containing the complete correction, not `980d8d1`.
4. **Write the terminal-annotation contract once.** Add it to `docs/handoff/README.md`; expose an
   optional commented example in `TEMPLATE.md`. Do not create a new lifecycle status.
5. **Use a bounded annotation shape:**

   ```markdown
   ## Terminal annotation record

   - **Current-Resolution:** <existing terminal resolution, unchanged>
   - **Annotation-Type:** metadata-normalization | verification-evidence | cross-reference | correction
   - **Annotation-Act:** <decision, finding or correction act; date and source locus>
   - **No-Scope-Reopened:** true
   - **Annotated-At-Commit:** <existing commit whose state was read>
   ```

6. **Implement lifecycle episodes.** Walk file history chronologically. For every terminal episode,
   allow mechanically proven audit-only edits; require a Return record plus `Status: Open` for
   resumed scope; require a Terminal annotation record for other body edits that preserve the
   terminal state. A record from an earlier episode does not exempt a later one.
7. **Classify the six candidates from evidence:**
   - `B-004`, `B-008`, `B-046`: metadata/structural normalization unless their exact diffs show
     new scope;
   - `B-017`: correction or verification evidence, preserving its explicit non-reopening claim;
   - `B-103`: correction to the same P0–P3 disposition, unless a distinct return act is found;
   - `C-001`: cross-reference preserving deferred execution, unless a distinct execution act is
     found.
8. **Add construction and refusal fixtures.** At minimum: valid annotation; missing act; false or
   missing `No-Scope-Reopened`; annotation that changes the terminal header; genuine B-071-style
   return; and a second unreturned cycle despite an older Return record.
9. **Restore enforcement.** Only after the fixtures pass, return candidate violations through
   `findings`; keep human-readable detail but do not let detail substitute for the gate.
10. **Synchronize Graphify last.** Run the governed rebuild after the final script change, preserve
    curated fragments, require `lastAnalyzedHead == HEAD`, and run the portable check.
11. **Verify at one commit.** Run `bun run check` and `bun run fixtures`; Lane B then independently
    reviews the artifacts and records B-112 before B-097 as `Verified` if the evidence holds.
12. **Resume B-103 P3.** Apply the now-governed return/annotation rule to B-103 before its final
    whole-entry disposition. Stage 2 runtime proof and C-001 execution remain separately deferred.

## Exact Lane A follow-up — Option B

1. Acknowledge B-113 and record a Judge act explicitly selecting advisory detection.
2. Replace B-112's placeholder and repair its commit anchor.
3. Amend B-097 so its completion evidence promises only Return-record form validation and a
   report-only candidate list; withdraw every statement claiming automatic rejection of all
   terminal-plus-live-content cases.
4. Record terminal annotations and multi-cycle enforcement as one named backlog item, without
   copying the six-candidate list into another ledger.
5. Keep `terminal-return` report-only and test that it cannot fail the suite.
6. Synchronize Graphify after the final script/document correction and run both suites.
7. Return the narrowed packet to Lane B for independent verification; cite the narrowed boundary
   when B-103 P3 resumes.

## Critical artifacts produced by either decision

| Artifact | Option A | Option B | Construction/verification role |
|---|---|---|---|
| Judge/Register act | Selects enforceable prevention | Selects advisory detection and narrows B-097 | Prevents Lane A from inferring authority or completion scope |
| Handoff SOP | Return plus terminal-annotation semantics | Return form plus human-review limitation | Defines the state transitions later checks implement |
| Handoff template | Return and annotation examples | Return example; advisory limitation referenced | Gives Lane B/C the exact evidence shape |
| `terminal-return` check | Blocking, lifecycle-cycle aware | Report-only | Detects or reports later content under a terminal header |
| Fixtures | Positive/refusal cases including repeated cycle | Report-only non-failure and form cases | Prevents a false-green or permanently-red control |
| Six classifications | Durable evidence for each current candidate | Human-review outcomes | Establishes the baseline against which future detection is judged |
| Graphify state | Rebuilt after final control code | Rebuilt after final control code | Makes the code/document dependency graph current |
| Independent Lane B review | Verifies original prevention outcome | Verifies narrowed advisory outcome | Separates application from verification |

## Cross-artifact review for this Judge clarification

| Artifact | Impact |
|---|---|
| `docs/Modular_PRD.md` | Unaffected. NFR-04 already owns delivery verifiability; neither option changes customer-visible Product behavior or editorial acceptance criteria. |
| Storyboard and story panels | Unaffected. They describe article and commercial journeys, not repository handoff lifecycle records. |
| UML and data flow | Unaffected. No application state, database entity, event or publication flow changes. |
| Requirements traceability | Unaffected. The choice is Project-Scope verification control serving existing Product outcomes indirectly; it creates no Customer Request. |
| Encyclopedia | Unaffected. No encyclopedia entry depends on B-097/B-112/B-113; Entry 05's D-168 staleness remains separate. |
| Cross-references | B-113 remains the decision-support owner; B-112 records the failed detector correction; B-097 owns the return protocol; B-103 P3 depends on verified B-097. Do not create another ledger. |
| Graphify | Sync is required after the final Lane A control-code change. It is not required merely for this handoff clarification. |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | Option A — enforceable lifecycle control | Recommended Judge selection; Phase 1 Lane A implementation and independent Lane B verification |
| Defer | Option B — advisory lifecycle review | Use only if the Judge explicitly accepts the reduced guarantee |
| Reject | Treating `Judge Approved: decision-tree decision` as an implicit A/B selection | Lane A must record the explicit selected boundary |
| Reject | Product, storyboard, UML/data-flow, traceability or Encyclopedia edits for this choice | Those tiers are unaffected |
| Defer | B-103 P3, Stage 2 runtime evidence and C-001 execution | Their existing dependent phases remain in force |

## Lane A application — Option A selected and implemented, 2026-09-16

**The Chief Editor selected Option A.** Implemented in full at `27efc2d`/`0d2cc2b` — the complete
account is in `B-097`'s "Chief Editor Option A applied in full" section, not duplicated here: the
Terminal annotation record, the episode-scoped history walk, all six candidates classified from
their actual diffs, and three further bugs found and fixed while applying it (an infinite-regress
self-reference in the annotation mechanism itself, a multi-line field-continuation gap, and two
more `channel-docs` coupling naming gaps).

The header above is updated accordingly: `Resolution: Applied` (no `Follow-up-Tier` — that field is
for `Deferred`, and the Option A/B question it named is now answered), `Verified-At-Commit`
advanced to the commit this update reads. This entry's own `Status: Answered` stands; `Applied` is
deliberately not terminal until an independent reviewer confirms it (`D-102`) — that review, for
this entry, `B-112`, and transitively `B-097`, remains outstanding and is not self-recorded here.
