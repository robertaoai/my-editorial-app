# B-099 — Lane A analysis is not yet lifecycle disposition or governed-source authority

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** accepting Lane A's B-098 consolidation report as applied or complete; no build, governed-source edit, publication, lane transition or release action
- **Status:** Answered
- **Lane A:** **Answered 2026-09-15 at read commit `e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6`.**
  The correction is accepted in full: the prior consolidation report was analysis and
  drafts only, never applied to the canonical lifecycle, and B-099 is right to separate ownership
  (Cowork owns `docs/`; `docs/handoff/` stays writable regardless of lane state) from authorization
  (governed-source/Product/schema application still needs a recorded Judge act, bounded unit and
  DoD, which this acknowledgement does not supply). Acting on B-099's own drafts and follow-up
  guide: B-096, B-097 and B-098 are acknowledged in this same pass, and B-097's Choice B return is
  applied to B-071. No governed Product, Fn_Spec, storyboard, schema, build, publication, lane-state
  or Graphify action is taken. Graphify synchronization stays deferred until this batch of handoff
  corrections is the final tracked edit; the next actor to touch `docs/handoff/`, `docs/`, or
  governed sources should treat that as the trigger to run it, not this acknowledgement alone.
  **Correction, 2026-09-15 (B-100):** this disposition is complete and is recorded below as
  `Resolution: Applied`, not left as `Status: Open` beside an accepted-in-full answer.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** Lane A's 2026-09-15 consolidation report; lifecycle headers of B-071, B-088 and B-094–B-098; `docs/handoff/README.md`; `docs/v1/V1-PHASE-CLOSURE.md` §5; `docs/Modular_PRD.md`; `docs/fn-specs/FN-GATES-01-05.md`; storyboard Panels A2/B7 and §4; `docs/governance/requirements-traceability-map.md`; `docs/ENCYCLOPEDIA-SYNC.md`; `supabase/migrations/0002_s1_editorial_schema.sql:459-522`; `.graphify/branch.json`; `bun run check` at the named commit.
- **Verified-At-Commit:** e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6

## What happened

**Clarified task:** review Lane A's B-098 consolidation against the repository, distinguish work
analysed from work applied and independently verified, identify deterministic failure paths, derive
measurable success criteria, and give Lane A a parent-first correction plan. Preserve existing
handoff owners and the sprint/version baseline. Prepare documentation and implementation planning
only; do not build or edit governed sources.

Lane A's report contains useful analysis but calls the report *done and saved* while the canonical
lifecycle records do not show Lane A's receipt or application. It also describes an obstacle that
prevented Cowork from changing governance documents without separating two different boundaries:

1. **There is no lane-ownership obstacle.** Lane A is `Active`; Cowork owns the governed `docs/`
   surfaces; `docs/handoff/` is deliberately unmapped and remains writable for replies.
2. **There is an authorization boundary.** The current request is planning-only, and D-183/D-186
   require a recorded Judge act, a bounded unit and Definition of Done before governed-source
   application. An analysis verdict or acknowledgement is not that execution packet.

Therefore leaving Product, governance and storyboard sources unchanged was correct. Leaving
B-096, B-097 and B-098 unacknowledged was not caused by that boundary: acknowledgement is an
allowed handoff act and records receipt only.

## Parent-first completion model

Each handoff header is the lifecycle authority. The list below is a review snapshot at
`5caa2c2`, not a second status ledger.

| Order | Parent or child | Evidence at review | Completion meaning |
|---:|---|---|---|
| 1 | `SETUP-SPIKE-000` and existing sprint/version baseline | D-185 and B-098 | **Settled context.** No new roadmap decision and no build authority |
| 2 | B-087/B-090/B-092/B-093 | Their headers are `Verified` | **Complete only for their bounded planning/review outcomes** |
| 3 | B-088, B-094, B-095 | `Open`, with Lane A acknowledgement | **Received, not corrected or closed** |
| 4 | B-096, B-097, B-098 | `Open`, Lane A field still blank | **Not yet received in the canonical lifecycle**, regardless of the later narrative report |
| 5 | B-071 | `Answered / Deferred`, while B-097 records the Choice B return act | **Terminal header conflicts with returned live work until Lane A applies the return record** |
| 6 | Governed Product and supporting views | No execution packet authorizes the proposed write set | **Planning inputs only** |
| 7 | Graphify | `lastAnalyzedHead: f63d6eb`; Git HEAD `5caa2c2` | **Stale and unsuitable as current semantic evidence** |

Acknowledgement, answer, application and verification are distinct:

| State | What it proves | What it cannot prove |
|---|---|---|
| Analysis written | A proposal exists | Receipt, application or correctness |
| `Lane A: Acknowledged` | Lane A saw the entry | Acceptance or correction |
| `Resolution: Applied` | The correction is in the named tree | Independent correctness |
| `Resolution: Verified` | A separate eligible actor checked the applied result | Broader application or release readiness |

No separate closure ledger should be created. A maintained count will drift as soon as one entry
changes; the checks must generate the queue from the entry headers.

## What is unclear, what is guaranteed to fail, and the success evidence

The word **guaranteed** below refers to deterministic document, lifecycle or test failures. The
evidence does not establish bankruptcy, customer loss or safety harm, so urgency must not replace
the acceptance oracle.

| Unclear or failed boundary | Deterministic failure if retained | Failure-derived success criterion |
|---|---|---|
| Lane A says the consolidation was saved, but B-096/B-097/B-098 have blank Lane A fields | `handoff-response` continues to fail and a reader of each file sees no receipt | Each existing entry carries a dated Lane A acknowledgement at the commit actually read; no new A-series file |
| B-097 records Choice B while B-071 remains `Answered / Deferred` | Any consumer treating B-071's later rounds as active relies on a terminal record and cannot prove the return trigger | B-071 is `Open`, terminal header fields are removed, and the exact Choice B return record from B-097 is appended before further live work |
| “Cowork could not edit governance documents” does not identify whether ownership or authority blocked it | The next actor either invents an ownership problem or applies an advisory plan without execution authority | Lane A records: ownership permits Cowork; current planning-only scope withholds governed-source application; the next write packet names exact files, clauses, DoD and Judge act |
| The migration read is treated as the full answer to B-096 `GA1` | The storyboard can be changed using a physical table as proof of a business meaning the table does not enforce | Lane A records the semantic distinction: `editorial_reports` is a transition-anchored explainability snapshot; the client-facing artifact set still has no typed artifact-management entity |
| `editorial_reports.snapshot` is JSONB | Arbitrary payload capacity can be mistaken for authority over every possible report artifact | The Product/Fn_Spec contract defines purpose, allowed visibility and anchor semantics; schema follows later in Lane B under separate authorization |
| Panel B7's absolute “no report entity exists” is retained unchanged | It contradicts the real `editorial_reports` table | Current-use annotation says an explainability report entity exists, while a client-facing artifact-management entity does not; historical panel remains visibly historical |
| B-094 is summarized as though `A1` is still wholly unanswered | Lane A reopens settled structural learning and delays the exact field matrix | Preserve A1's supplied three-section structure; decide only A4 field requiredness, first-intake trend shape, exact write set and capacity |
| A static “six open entries” is used as tracking authority | It becomes false on the first acknowledgement/disposition while still appearing authoritative | Lifecycle truth stays in each entry; `bun run check` generates current queue depth |
| Graphify is used before final tracked corrections | The rebuild becomes stale immediately and semantic queries omit the newest handoffs | After the last handoff/source edit, rebuild and re-merge curated fragments; require analyzed HEAD = Git HEAD, full coverage, portable artifacts and the consistency suite rerun |

## B-096: the GA1 answer that the migration can support

The direct schema read confirms that `editorial_reports` is append-only and contains an article,
an as-at transition, template/judgment/schema versions, a JSONB snapshot and an optional superseded
report. It has no typed artifact kind, delivery target, client artifact identity, production status
or artifact-specific lifecycle.

That evidence supports this bounded semantic answer:

> `editorial_reports` represents immutable, transition-anchored explainability snapshots. It does
> not model the fifteen client-facing artifacts as individually governed deliverables. Therefore
> GA1 still holds for client-facing artifact management. The storyboard must distinguish “an
> explainability report entity now exists” from “no client-facing artifact-management entity
> exists.” JSONB capacity alone does not assign business authority.

This is enough for Lane A to answer the blocking question and draft the logical S15/S16 contract.
It is not independent verification of an applied correction and authorizes no schema change.

## Exact Lane A response drafts

Lane A should apply these inside the existing entries, not copy them into a new response file.
The read commit must be replaced with the actual commit Lane A reads at application time.

### B-096 acknowledgement and bounded answer

> **Acknowledged 2026-09-15 at read commit `<actual-read-commit>`.** Receipt and bounded GA1
> disposition only. `0002` models append-only, transition-anchored explainability snapshots; it
> does not model the client-facing artifact set as typed deliverables. GA1 therefore remains true
> for client-facing artifact management. Lane A may draft S15 then S16 and the precise historical/
> current-use storyboard annotation. No governed-source application, schema or build is authorized.

### B-097 acknowledgement and B-071 return

> **Acknowledged 2026-09-15 at read commit `<actual-read-commit>`.** Choice B is accepted for the
> recorded return only: the Chief Editor/Judge's 2026-09-14 decision-tree act separately authorized
> B-071 planning and handoff correction. The S2 hold and all governed-source/build holds remain.

Lane A then applies B-097's existing exact return block to B-071, changes B-071 to `Open`, removes
the terminal `Resolution` and `Follow-up-Tier`, and uses the raised/not-yet-dispositioned audit form.
It must not change the B-097 return trigger or broaden its scope.

### B-098 acknowledgement and disposition

> **Acknowledged 2026-09-15 at read commit `<actual-read-commit>`.** The corrected interpretation is
> accepted: the existing sprint/version sequence remains the planning baseline; D-185 already owns
> `SETUP-SPIKE-000` provenance; B-098's earlier reset/remap proposal is withdrawn in full. This
> acknowledgement changes no sprint status and authorizes no governed-source or build action.

Lane A chooses the lifecycle resolution supported by its actual act. If only the handoff response
lands, record `Applied` and await independent verification; do not self-promote it to `Verified`.

## Lane A follow-up guide

1. **Record receipt first.** Acknowledge B-096, B-097 and B-098 in place. This clears unread work
   without claiming it is solved.
2. **Repair the lifecycle parent.** Apply B-097's exact Choice B return to B-071. Preserve the S2
   hold and B-071's existing ownership.
3. **Close the B-098 interpretation only.** Withdraw the earlier reset/remap proposal and preserve
   the established sprint/version sequence. Do not maintain a second open-count ledger.
4. **Finish the selected business packet.** B-084 remains first under B-094. Preserve the settled
   manual three-section input structure and manual URL/Markdown boundary; Lane A drafts B-095's
   first-intake trend shape, exact field matrix, same-article normal/revision example and A4 diff.
   The Chief Editor supplies capacity and accepts or rejects the remaining field/write-set choices.
5. **Resolve the data-authority child.** Record the bounded GA1 answer above, then specify S15
   before S16. Keep state scalars, append-only transition/publication events, versioned working
   metadata and frozen explainability reports as separate authorities.
6. **Preserve existing artifact owners.** Update Product requirements, Fn_Specs, traceability,
   current-use storyboard annotations and Encyclopedia Entries 03/06 only through an authorized
   exact write set. The storyboard remains the owner of story panels, embedded UML and data-flow
   views; create no duplicate diagram documents.
7. **Schedule the checker repair by evidence.** B-088 remains received and open. Promote it only
   when C-39 is about to be consumed or after the selected B-084 packet; its negative examples and
   DoD already exist there.
8. **Apply under an execution packet.** Before governed-source edits, record one bounded Judge act,
   exact file/section set, owner, effort range, dependencies and completion evidence. D-54 applies
   only where the act creates, sequences or retires artifacts; state unaffected tiers explicitly.
9. **Verify separately.** Lane B reviews application-facing and migration claims; Lane C validates
   only workflow/check consequences assigned to its surface; the Judge accepts at the named
   boundary.
10. **Synchronize Graphify last.** Lane A · Code operates rebuild/merge; Lane A · Cowork owns curated
    meaning. Prove final-head equality and coverage before semantic queries support closure.

## Cross-artifact and lane impact

| Surface | Required planning result | Construction/verification consequence |
|---|---|---|
| `Modular_PRD.md` | One manual-input contract and four distinct data authorities; no roadmap reset | Later application validation and persistence tests trace to stable Product behavior |
| Fn_Specs | Gate behavior, required/optional intake fields and report visibility without UI/schema detail | Lane B can test behavior independently of the physical design |
| Storyboard, story panels, embedded UML/data flow | One current-use annotation set: manual intake, route/gate order, state/event writes, metadata versions, explainability report and revision return | UI journey and end-to-end acceptance use the same normal/revision example |
| Traceability/cross-reference | One owner per requirement and one link to each existing artifact; no duplicated status facts | Tests identify the requirement they prove and cannot close siblings accidentally |
| Encyclopedia | Entries 03 and 06 marked current, stale or pending against the accepted packet | Public explanatory language cannot silently contradict the Product contract |
| Lane A · Cowork | Business meaning, governed write set, Judge packet and curated meaning | Produces reviewable source changes only after authorization |
| Lane A · Code | Handoff/check tooling and final Graphify operation | Makes lifecycle and drift failures executable without deciding business meaning |
| Lane B | Physical schema/application plan and independent verification | Builds only after a fresh work order; no migration follows from this entry |
| Lane C | Workflow enforcement for already-written checks | No current action; it does not invent scripts or governance rules |

## What you did instead

Read the actual lifecycle headers, governing channel rules, Product and supporting views, migration
and Graphify metadata. Reproduced the current consistency failures. Raised this one bounded finding
without editing B-071, B-088, B-094–B-098, governed sources, application code, schema, lane state or
Graphify artifacts. No build was started.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Existing sprint/version baseline and `SETUP-SPIKE-000` provenance | Phase 1 — preserve; no new roadmap act |
| Approve | Lane A's analysis as a planning input | Phase 1 — use the response drafts, but do not call them applied |
| Approve-with-conditions | B-096 GA1 answer | Phase 1 — record the explainability/client-artifact distinction before storyboard changes |
| Approve-with-conditions | B-097 Choice B return | Phase 1 — apply the exact return record to B-071; S2 remains held |
| Approve-with-conditions | B-098 correction | Phase 1 — acknowledge and disposition the withdrawn reset/remap interpretation |
| Reject | “Cowork lacked permission to edit its owned docs” as the obstacle | The current limitation is planning-only execution authority; acknowledgement remains allowed |
| Reject | Static handoff count as lifecycle authority | Generate status from each canonical entry |
| Reject | Treating a JSONB snapshot table as proof that client-facing artifact management exists | Product purpose and typed lifecycle are absent |
| Defer | Governed-source application, implementation, publication and release | Fresh bounded authorization, owner, DoD and dependencies |
| Defer | Graphify synchronization | Final tracked correction, then rebuild/merge/coverage/full checks |
