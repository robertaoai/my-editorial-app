# B-097 — a deferred handoff accepted live work without a recorded return

- **Raised:** 2026-09-14 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating B-071 Rounds 54–56 as an active implementation-readiness packet; changing B-071's terminal header; any consuming authorization that relies on those rounds
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-15 at read commit `e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6`.**
  Choice B is accepted for the recorded return only: the Chief Editor/Judge's 2026-09-14
  `Judge Approved: decision-tree decision` act separately authorized B-071 planning and handoff
  correction; the `S2` hold and every governed-source/build/schema/publication/lane-transition
  boundary remain fully in force. B-071's header and the exact Return record below are applied in
  this same pass; see B-071's new `## Return record` section. The prior Lane A header draft on
  B-071 (lacking trigger and act) stays withdrawn, superseded by this application. The whole entry
  stays `Open`: its return-protocol prevention controls (the SOP/template/check additions this
  entry itself drafted) are not yet applied. See *Child dispositions* below.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6
- **Evidence:** B-071 header and Rounds 54–56; Chief Editor/Judge's 2026-09-14 `Judge Approved: decision-tree decision` instruction and present direction to name the return condition and act; `docs/handoff/README.md` sections *Response is not closure* and *Worked scenarios*; `docs/handoff/TEMPLATE.md`; `handoff-response`, `closure-readiness` and `channel-docs`; storyboard Paths A/B; Route-1 crosswalk and B-071 `B071-R197`, `R204`–`R208`; Graphify query read with the stale-revision qualification below.

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

**Historical recommendation at `0bde41c`: C unless the Judge supplies the missing act. Superseded by
the named Judge resolution below.**

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
2. Apply the named Choice B return condition and act below; do not release the separate S2 hold.
3. Correct B-071's lifecycle header and append its return record before adding another round to it.
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
| Approve-with-conditions | Returning B-071 to `Open` | Lane A applies the exact Choice B return record named below |
| Reject | Claiming the B-071 header correction already landed | Repository evidence at `0bde41c` contradicts the claim |
| Reject | A Lane B-raised `C-NNN` entry, a new `Returned` status, or duplicate Product owners | Use B-097, existing status vocabulary and B-071's established ownership |
| Defer | SOP/check application, governed-source propagation, implementation and Graphify sync | Judge choice, Lane A patch, independent review, then final graph synchronization |

## Judge resolution — return condition and act named (2026-09-14)

The Chief Editor has now directed that the return condition and its act be named. Of B-071's two
recorded alternatives, only the second is compatible with the evidence:

| Return field | Named value |
|---|---|
| **Previous resolution** | `Deferred` |
| **Return condition** | The ontology correction is separately authorized |
| **Act satisfying it** | Chief Editor/Judge, 2026-09-14: `Judge Approved: decision-tree decision`, directing Lane B to consolidate B-071's ontology, route, actor/gate and artifact-impact analysis for Lane A review |
| **Scope opened** | B-071 planning, decision-tree consolidation and handoff correction only |
| **Explicitly unaffected** | `D-171` S2 hold; governed-source application; Product/Fn_Spec/SPECS changes; schema or code; sprint/lane transition; publication and release |

This is **Choice B**, not Choice A. The S2 hold remains active. The act authorizes the ontology
correction to return for planning and handoff disposition; it does not authorize implementing that
correction in governed sources or software.

### Exact B-071 return record for Lane A

```markdown
## Return record

- **Previous-Resolution:** Deferred
- **Return-Trigger:** Ontology correction separately authorized
- **Return-Act:** Chief Editor/Judge, 2026-09-14 — `Judge Approved: decision-tree decision`; B-071 planning and handoff correction only
- **Returned-At-Commit:** 9e03bb349147971f622080b8fae57eb47c88d36b
```

Lane A now has a complete, bounded act to apply: change B-071's whole-entry status to `Open`, omit
its terminal `Resolution` and `Follow-up-Tier`, use the current raised/not-yet-dispositioned audit
form required by the channel rule, and append the return record. The prior Lane A header draft stays
withdrawn because it lacked this trigger and act; B-097 supplies the replacement.

| Verdict | Item | Follow-up phase |
|---|---|---|
| Approve | Choice B — separate ontology-correction authorization | Phase 1 — Lane A applies the exact B-071 return record |
| Approve | S2 hold remains fully active | Phase 1 — no build or governed-source application follows from the return |
| Reject | Choice A — S2 hold release | No Register/Judge act supports it |
| Reject | Treating the decision-tree approval as implementation authority | The act opens planning and handoff correction only |
| Defer | B-071 source propagation and implementation | Separate exact authorization after the returned entry is dispositioned |

## Child dispositions — 2026-09-15, Lane A

Per `D-204`, header fields describe the whole entry; child state lives here. The whole entry stays
`Open` until the weakest child closes.

| Child | Disposition | Evidence |
|---|---|---|
| Choice B return decision | **Answered** — Chief Editor/Judge named the act, 2026-09-14 | This entry's *Judge resolution* section |
| B-071 return record | **Applied** — header changed to `Open`, terminal fields removed, exact block appended | B-071's `## Return record` section, applied 2026-09-15 |
| SOP/Template/check return-protocol contract (proposed `Draft fix` above) | **Open** — not yet applied to `README.md`, `TEMPLATE.md`, or the checks | — |

## Independent duplicate check — proposed B-105 belongs here, 2026-09-15

Lane A proposed filing a new B-105 because `README.md` and `TEMPLATE.md` still lack a defined
transition from a terminal resolution back to `Open`. That is the same defect this entry owns. A
new entry would split one lifecycle condition across two owners and make closure ambiguous.

**Disposition:** do not file B-105. Append any new evidence or corrected SOP wording to B-097 and
complete the existing open child above. The repository state at `deb30484d72b179bb86e02f8d31e09ba639d59ce`
still has the gap: B-071 needed a one-off return record, while the channel SOP/template/check
contract remains unapplied.

### Minimum complete correction packet

1. `docs/handoff/README.md` defines the allowed terminal-to-`Open` return transition, required
   trigger, authorizing act, append-only return record and fields removed from the whole-entry header.
2. `docs/handoff/TEMPLATE.md` includes the return-record shape as optional guidance without creating
   a new lifecycle status.
3. The owning checks accept a valid returned entry and reject: missing prior resolution, missing
   return trigger, missing authorizing act, invented status, retained terminal-only header fields and
   a return that silently opens governed-source or implementation scope.
4. B-071 remains the positive repository example, with one current lifecycle state and its historical
   terminal disposition preserved in the body.
5. Independent review cites the commit containing all three control changes and the positive/negative
   fixtures. Graphify synchronization follows the last tracked edit.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Reject | Filing B-105 as a second return-protocol defect | Phase 1 — B-097 already owns it |
| Approve-with-conditions | Complete B-097's existing SOP/template/check child | Phase 1 — exact Lane A packet, Judge act, application and independent review |
| Approve | B-071 as the positive returned-entry example | Phase 1 — preserve its return history and current `Open` state |
| Defer | Graphify synchronization | After the final tracked protocol correction |

## Lane B cross-reference — B-103 P3, 2026-09-15

`B-103` P3 (close the feedback loop without creating another ledger) is deferred to this entry's
still-open SOP/template/check return-protocol child. This cross-reference records ownership only: it
does not authorize the control changes, change this entry's `Open` state, or close either entry.
