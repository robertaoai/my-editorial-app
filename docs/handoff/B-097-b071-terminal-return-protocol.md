# B-097 — a deferred handoff accepted live work without a recorded return

- **Raised:** 2026-09-14 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating B-071 Rounds 54–56 as an active implementation-readiness packet; changing B-071's terminal header; any consuming authorization that relies on those rounds
- **Status:** Open
- **Lane A:** — awaiting Lane A acknowledgement
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** 0bde41ca27fc66f8491f0b87bba1af9d78a2bfe1
- **Evidence:** B-071 header and Rounds 54–56 at `0bde41c`; `docs/handoff/README.md` sections *Response is not closure* and *Worked scenarios*; `docs/handoff/TEMPLATE.md`; `handoff-response`, `closure-readiness` and `channel-docs`; storyboard Paths A/B; Route-1 crosswalk and B-071 `B071-R197`, `R204`–`R208`; Graphify query read with the stale-revision qualification below.

## What happened

Lane A correctly identified a channel defect after reviewing B-071 Round 56: the entry's header is
terminal — `Status: Answered`, `Resolution: Deferred` — while Rounds 54–56 add live Judge directions
and current follow-up work after the recorded disposition.

One part of Lane A's report is not present in the repository. It says the B-071 header correction
was delivered, but at `0bde41c` the header still reads `Answered / Deferred`, retains its
`Follow-up-Tier`, and carries the dispositioned audit form. This review treats the statement as a
proposed correction, not evidence that the correction landed.

The existing SOP defines how an entry becomes `Deferred` and says that a deferred concern may
return. It does not define the fields, evidence or check behavior for that return. The checks can
validate a terminal header and still miss later substantive work in the same file. That is the
control gap; B-071 is its first demonstrated case.

This entry records the channel defect only. B-071 remains the owner of the route, T5/EG4/EG5 and
article-classification questions. No content is copied from B-071 into a second product backlog.

## Parent-first decision tree

| Order | Question | Accept path | Reject path / stop condition | Evidence required |
|---:|---|---|---|---|
| 1 | Did a recorded B-071 return condition actually occur? | Name exactly one condition and the act that satisfied it | If neither condition occurred, B-071 remains `Deferred`; no header change is permitted | Register/Judge act, date, scope and source locus |
| 2 | If returned, should the existing entry become active again? | Change the whole-entry header to `Open` before any further live work and append the return record below | Do not mix terminal header state with active children | Header and body agree at one commit |
| 3 | If not returned, where do later directions go? | Preserve B-071 as terminal provenance and raise a new B-series item for genuinely new scope | Do not append more active work to B-071 or duplicate its settled body | One owner for each live concern; links point back without restating it |
| 4 | How is recurrence prevented? | Add the return rule to the SOP/template and make its accepted and refused shapes executable fixtures | Prose alone leaves the same false-green path | Channel checks reject missing trigger/act and terminal files carrying unreturned live work |

### The Judge choice that cannot be inferred

B-071 records two alternative return conditions:

1. the S2 hold is released; or
2. the ontology correction is separately authorized.

The inspected Register and current handoff provide no evidence that the S2 hold was released. The
Judge's approval of a decision-tree analysis and the directions in Rounds 54–56 expressly deferred
governed-source application and implementation. That may establish product direction, but it does
not by itself prove that the second return condition — authorization of the correction — occurred.

Lane A must therefore present these exact choices:

| Choice | Judge accepts | Result |
|---|---|---|
| **A — S2 hold release** | Name the Register act that released the hold | Return B-071 and record that act; reassess the Lane B work order separately |
| **B — separate ontology-correction authorization** | Name the Judge act, exact correction scope and date | Return B-071 for that correction only; S2 remains held unless separately released |
| **C — neither condition occurred** | Confirm Rounds 54–56 are advisory direction, not a return act | Keep B-071 terminal; open a new bounded item before further active analysis |

**Recommendation from current evidence: C unless the Judge supplies the missing act.** This is an
evidence recommendation, not a substitute for the Judge's answer.

## Draft fix — handoff return contract

Lane A owns the SOP, template and checks. The following is the minimum complete contract to apply
there after the Judge decides the parent above.

### Proposed SOP text for *Response is not closure*

> **Returning a terminal entry.** A `Deferred` entry remains terminal until one exact condition in
> its `Follow-up-Tier` is satisfied by a named act. Before substantive work resumes in that file,
> change `Status` to `Open`; omit `Resolution` and `Follow-up-Tier`; use the raised-not-yet-
> dispositioned `Verified-By` form; pin `Verified-At-Commit` to the commit read; and append one
> `Return record` naming the previous resolution, triggering condition, governing act and date.
> If no recorded condition was satisfied, leave the terminal entry unchanged and raise a new entry
> only for genuinely new scope. A clarification, analysis approval or appended round is not a
> return act unless it explicitly satisfies a recorded return condition.

### Required body shape on return

```markdown
## Return record

- **Previous-Resolution:** Deferred
- **Return-Trigger:** <one exact condition previously named by Follow-up-Tier>
- **Return-Act:** <decision/Judge act, date and source locus>
- **Returned-At-Commit:** <existing commit whose state was read>
```

These facts belong in one body record rather than explanatory prose inside `Verified-By` or
`Verified-At-Commit`. The old terminal disposition remains visible in Git history and the explicit
return record; the active header describes the current whole-entry state.

### Template and executable-check consequences

| Surface | Draft change | Refusal case |
|---|---|---|
| `TEMPLATE.md` | Add the optional `Return record` block with the instruction that it is mandatory only when reopening a terminal entry | Do not add a new `Returned` status or a blank permanent header field |
| `handoff-response` | Accept the returned shape only when all four return values are present and the current header has no terminal `Resolution`/owner field | Reject an `Open` returned entry with a missing trigger/act, or one still carrying `Resolution: Deferred` |
| local history-aware check | Detect substantive commits after a terminal disposition; require a valid return record and `Open` header before treating them as active | A terminal file that keeps accumulating rounds must fail locally rather than remain a false green |
| `channel-docs` fixtures | Couple the SOP and template to one accepted return and the missing-act, blank-act, wrong-trigger and terminal-plus-live-content failures | Text and checks cannot define different lifecycles |
| `closure-readiness` | Count the returned entry by its current provisional state; retain the previous terminal disposition only as history | A historical `Deferred` value must not continue closing an entry that is active again |

Because the history-aware control needs Git history, Lane A must state whether it joins the existing
local-only history checks or has a reliable shallow-checkout design. It must never claim CI coverage
that the runner cannot provide.

## Product clarifications found while testing the return

These clarifications stay with B-071. They are recorded here only as review outcomes showing why
the terminal/live mismatch matters; Lane A must not create another Product requirement owner.

### Storyboard Paths A/B and route slices are orthogonal

The storyboard's Path A is the Chief Editor's own newsroom flow; Path B is client-commissioned M-POC
work with different origin, entitlement and delivery. Both explicitly use the same editorial
pipeline. `ROUTE-PROD-1/2/3` classify editorial impact and select required/conditional operations
and the applicable review set.

Therefore a storyboard path selects a route; it is not itself a route:

```text
commercial context:  internal M-MVP | commissioned M-POC
                               ×
editorial route:      PROD-1 | PROD-2 | PROD-3 | fallout | GRC
                               ↓
one shared gate engine, with route-selected evidence and reviewers
```

The first M-MVP construction slice may use Path A + `ROUTE-PROD-1`. The existing ethics feature may
use Path A or Path B according to its commercial origin while remaining `ROUTE-PROD-2` by editorial
classification. A future M-POC article is not automatically Route 2 merely because it is commissioned.

The historical storyboard labels **Path A / Path B** must not be shortened to **Lane A / Lane B** in
current text because those labels already denote development lanes. The existing storyboard title
and headings are historical evidence; target pointers should use `Internal newsroom path` and
`Client-commissioned path` when Lane A updates the current-use view.

### “One T5 reviewer” does not collapse the two T5 nodes

For `ROUTE-PROD-1`, the singular reviewer in B-071 `R197`/Round 56 means one route-selected virtual
`T5-REVIEW / EG4` reviewer: `ROLE-CHIEF-EDITORIAL-DESK`. `T5-FINAL / EG5` is a separate mandatory
human Chief Editor control under the Model A direction. The deterministic bundle join is neither.

The acceptance phrase should read:

> Route 1 requires one virtual T5-REVIEW act, then one human T5-FINAL judgment after the review
> bundle is ready; both are inside the five-gate editorial model and neither substitutes for the
> other.

This removes the apparent contradiction without reducing the gate chain or inventing two alternative
journeys.

## What is unclear, what is certain to fail, and the success criterion

| Unclear or failing condition | Why failure is certain | Success criterion derived from the failure |
|---|---|---|
| Which B-071 return condition occurred | A return note without a trigger cannot prove authority or scope | One Judge choice A/B/C; if A/B, one cited act satisfies one previously recorded condition |
| “Header correction delivered” while the tree still says `Answered / Deferred` | Downstream readers will trust the file and repeat a nonexistent application claim | Changed header and return record exist in one named commit, or the delivery claim is withdrawn |
| Terminal files may accept new rounds | The present checks validate fields, not post-disposition work | A local executable case fails terminal-plus-live-content and passes the complete returned shape |
| Route 2 can mean a commercial path or editorial route | The same label would select two unrelated dimensions | Current text uses `Client-commissioned path` and `ROUTE-PROD-2`; each has one definition |
| “One T5 reviewer” beside two T5 nodes | Readers can collapse EG4 and EG5 or count two virtual reviewers | Acceptance names one virtual review act and one separate human final judgment |
| Graph branch state says `stale: false` while its analyzed head is old | The flag and commit evidence disagree; semantic query may omit current handoffs | `lastAnalyzedHead == git HEAD`, `stale == false`, coverage includes B-094–B-097, curated fragments verify, then full local suite runs |

## Lane A follow-up

1. Acknowledge B-096 and this entry so the feedback queue is visibly read.
2. Present the B-071 return choices A/B/C to the Judge; do not infer the missing act.
3. Apply the selected B-071 lifecycle treatment before adding another round to it.
4. Draft and review the SOP/template/check fixture packet above; preserve one current state and one
   historical return record.
5. Carry the orthogonal-partition and singular-reviewer wording into B-071's existing correction
   packet only. Do not create a second Product owner.
6. Re-run the artifact impact review only after the B-071 state is honest: Product, Fn_Spec,
   storyboard/story panels, embedded UML/data flow, Encyclopedia and traceability.
7. Keep implementation, schema, publishing, lane transition and release claims held.
8. Synchronize Graphify last. The current `.graphify/branch.json` says
   `lastAnalyzedHead = f63d6eb` while Git HEAD at review was `0bde41c`; the boolean `stale: false` is
   therefore not currency evidence.

## What you did instead

Raised the missing return protocol as its own channel defect and supplied the parent-first decision,
literal SOP text, executable acceptance/refusal cases and the two semantic clarifications. Did not
change B-071's lifecycle without its trigger, edit governed Product/specification sources, edit Lane
A's SOP/template/checks, run Graphify synchronization, build code, change schema or publish.

| Verdict | Item | Follow-up phase |
|---|---|---|
| Approve | B-097 as the owner of the deferred-entry return defect | Phase 1 — Lane A acknowledgement and Judge choice A/B/C |
| Approve | Storyboard commercial paths and `ROUTE-*` editorial slices as orthogonal dimensions | Phase 1 — wording returns to B-071's existing packet |
| Approve | Route 1 has one virtual T5 review act plus one separate human T5 final judgment | Phase 1 — B-071 propagation packet, still held from source application |
| Approve-with-conditions | Returning B-071 to `Open` | Name the exact return condition and governing act first |
| Reject | Claiming the B-071 header correction already landed | Repository evidence at `0bde41c` contradicts the claim |
| Reject | A Lane B-raised `C-NNN` entry, a new `Returned` status, or duplicate Product owners | Use B-097, existing status vocabulary and B-071's established ownership |
| Defer | SOP/check application, governed-source propagation, implementation and Graphify sync | Judge choice, Lane A patch, independent review, then final graph synchronization |
