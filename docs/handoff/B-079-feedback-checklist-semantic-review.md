# B-079 — D-192 feedback checklists: preserve meaning before adopting mappings

- **Raised:** 2026-09-07 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent acceptance of D-192's normalization and sender/receiver checklists; no application build
- **Status:** Answered
- **Lane A:** **Acknowledged and applied 2026-09-07. Every finding is accepted; none is declined.**
  **Parent** — `D-192`'s normalization table now states that these are mappings into the channel and
  not automatic synonyms, and the conflated rows are corrected: `TRACK` names a subject while `Kind`
  names a transaction type, chosen independently; `DUE / TARGET` stays in the bounded action text,
  because `Follow-up-Tier` names an owner and never a date; `LINKED VERIFIER` becomes a nomination in
  the body, with `Verified-By`/`Verified-At-Commit` reserved for an earned verification; and
  `LANE A RESPONSE TYPE` is explained in the answer with `Status`/`Resolution` set separately. The
  independence sentence is replaced in **both** `D-192` and the SOP — excluding the raiser may leave
  no available independent reviewer and never makes the answerer or implementer eligible, and
  eligibility alone is not evidence that verification was performed.
  **Child** — the sender item no longer demands a known remedy before a gap may be reported; the
  class-splitting item is replaced by one bounded concern per entry, explicitly permitting a systemic
  defect to cite several examples while closing none of them; the conflicting-evidence scenario now
  applies `D-58`, escalating on a silent Register rather than only when an act is blocked; and the
  graph row is scoped to a named fragment.
  **Two of Lane A's own evidence claims are withdrawn as overstated**, and recorded in `D-192`'s
  correction section rather than deleted: a rising total node count is not curated survival, and
  `merge7.js --all` is a conflict audit and not graph parity. `D-192`'s tier declarations are now
  labelled **manually checked, not suite-verified**; parser hardening is deferred to its own Phase 1
  tooling unit, as this entry proposes. **`B-077` is untouched**, and no product tier, application
  code, workflow or lane state changed.
  **The corrections landed at `66217df`, and `Resolution` is recorded separately below.** `Applied`
  requires a `Verified-At-Commit` that **exists**, and an entry cannot name the commit that creates
  it — so the answer was committed first and the resolution second. `closure-readiness` caught the
  attempt to claim `Applied` without a commit, which is the control working, not an obstacle; it is
  the same sequencing `B-078` recorded.
  **Correction appended 2026-09-07, after Round 2 (`R2-1`).** The wording above, reserving
  `Verified-By`/`Verified-At-Commit` jointly for "an earned verification", is **wrong and is
  superseded** — the original is preserved rather than rewritten. The two fields have different
  triggers: `Verified-By` names the actor who completed independent verification, while
  `Verified-At-Commit` anchors evidence for **both** `Applied` and `Verified`. **This entry is its
  own counterexample** — `Applied`, with a real anchor, and no `Verified-By`; the superseded wording
  forbade the shape `closure-readiness` simultaneously required. The grouping originated in this
  entry's own first proposal and was adopted by Lane A; `R2-1` supersedes it rather than assigning
  its origin to either side. **`R2-2` and `R2-3` are applied in `D-192`'s correction section:** anchor
  validation is shared between `Applied` and `Verified` alone and is never imposed on `Deferred`,
  `Withdrawn` or `Superseded`; and the deferral now rests on this being a documentation packet, **not**
  on any bar against an author testing their own work. The manual anchor sweep is narrowed to what it
  proves — every `Applied` anchor resolves, which is not evidence that a commit's content supports the
  correction attached to it. **Tier applicability is unchanged**: documentation only, no product,
  spec, code, workflow or lane-state effect, and no artifact created or retired.
- **Resolution:** Applied
- **Evidence:** independent source review of `e61bf3e9fe6a7bd586379f39e3b72f5207ba74a6`; `docs/v1/V1-DECISION-REGISTER.md` D-192; `docs/handoff/README.md` Feedback checklists; canonical TEMPLATE and D-58 arbitration rule; the external drafts already reviewed in this conversation.
  **Lane A applying evidence, 2026-09-07:** the corrections above in `D-192` (normalization table,
  independence row, new correction section) and in `docs/handoff/README.md` (sender items,
  independence paragraph, conflicting-evidence scenario, graph-evidence row); curated coverage added
  as `docs/graph-fragments/frag124.json`, whose node and relationships are proven equal to the graph
  by a named single-fragment `merge7.js … --verify-only` run — **not** by `--all`, and not by a node
  count. `Applied` is deliberately non-terminal: Lane A wrote these corrections and cannot verify
  them. Independent review at the resulting revision remains outstanding.
- **Verified-At-Commit:** 66217df3bc88d4282fe953f91007564071e576c1

## What happened

The user requested review and correction drafting for docs/governance/orchestration after Lane A
adopted parts of the external feedback guides. B-077 is evidence only and stays separate and
unchanged. This is one bounded finding against D-192 and its derived SOP section, not another
intake ledger or a reopening of B-077/B-078. No product or application changes are proposed.

**Retain:** one canonical channel, attributed evidence, raiser eligibility when independent of
the correction, legitimate non-Verified terminal dispositions, and separately scoped graph claims.
The correction is incomplete where different dimensions are mapped as equivalent, or the new
checklist contradicts its own worked scenarios.

## What you need

### Parent — correct D-192's normalization table

Replace the introduction claiming all other rows are merely labelling with:

> These are mappings into the existing channel, not automatic synonyms. Preserve each source
> concept's meaning and lifecycle stage. If no existing field carries it, retain useful context
> in the entry body rather than invent a field or discard the information.

Replace the affected rows with this proposed content:

| External concept | Existing-channel treatment | Why |
|---|---|---|
| TRACK: content versus governance | Describe subject/surface in the body; choose Kind independently | Either subject can produce a finding, spec-defect, dependency or blocked-on-decision. A subject is not a transaction kind |
| DUE / TARGET | Retain an applicable date or milestone in the bounded action text; Deferred also requires Follow-up-Tier | A deadline and the phase/tier owning deferred work answer different questions |
| Proposed LINKED VERIFIER | Name the proposed reviewer in the body; record Verified-By and Verified-At-Commit only when the claimed verification has evidence | Assignment is not completed verification; the review revision need not be known at assignment |
| ACCEPT / CLARIFY / DEFER / REJECT response | Explain the response in Lane A's answer; set Status/Resolution separately under the canonical SOP | ACCEPT does not imply Applied; CLARIFY does not automatically mean Withdrawn; DEFER requires a named follow-up; rejection needs reasons and the existing disposition route |

No new template fields are needed. Keep the accepted `Status: Applied` → `Resolution: Applied`
correction and rejection of the parallel FB ledger. This refines vocabulary, not ownership.

### Child — correct the derived checklist and scenarios

**1. Submission without a known fix.** The sender says “If you cannot name the act that would
close the entry, narrow the item until you can.” Its investigation scenario correctly permits an
unanswered question. Replace that sender item with:

> Name the bounded question or correction sought. If the answer requires investigation, identify
> the missing evidence, responsible owner and next review/stop condition. A submitter need not
> know the final remedy before reporting a legitimate gap. Keep the same entry while scope is
> unchanged; create a child only for genuinely distinct scope.

**2. Patterns versus bulk closure.** “If the entry names a class ... split it” conflates a systemic
finding with promotion of individual entries. Replace it with:

> One bounded concern per entry. A systemic process defect may cite several examples and ask for
> one shared correction. This never verifies or closes those examples as a batch. Split only when
> correction scope or ownership differs. Preserve existing independently raised entries and links.

This preserves B-077 as a use case without copying or changing its backlog.

**3. Conflicting evidence.** Replace the worked scenario's “Escalate ... only if ... blocks an act”
with:

> Preserve both sources and first test whether their scope or revision differs. For a genuine
> derived-tier conflict, apply D-58: the Register decides; if it is silent, escalate the unresolved
> conflict. Separate-surface observations may both hold. Operational non-blocking status does not
> resolve a contradiction; independent in-scope work may continue.

**4. Independence explanation.** Keep the correct eligibility rule. Replace “leaves the answering
side as the only party still eligible” in D-192 and the checklist with:

> Excluding the raiser unnecessarily removes an otherwise eligible reviewer and may leave no
> available independent reviewer. It never makes the answerer or implementer eligible to verify
> their own correction. Eligibility alone does not prove that verification was performed.

The external draft excludes both submitter and executor; the current explanation inaccurately
turns that exclusion into permission for the executor.

### Evidence wording — qualify the graph and test claims

An increased total node count cannot prove curated survival: a rebuild could add two extracted
nodes and lose one curated node. `merge7 --all` audits conflicts among fragments; it does not prove
every fragment matches the graph. A `--verify-only` run proves parity for the specified fragment,
not all fragments unless all are checked. Use named fragment coverage and equality checks for the
claimed scope. Correct the SOP graph row to say “Named fragment's curated content matches the
graph”; list the fragment and check scope in Evidence. Do not make B-079 depend on global graph
enrichment or description completion.

The reported negative test injected a prohibited tally. It tests that prohibition only, not the
mapping semantics or investigation/escalation rules. Retain its narrow result; validate the prose
with the examples below. Matching HEAD metadata establishes committed extraction currency, not
truth of these new rules or parity of subsequent edits.

### Parent-first acceptance examples

| Given | Required result |
|---|---|
| Governance feedback raises a missing dependency due at a milestone | Kind remains dependency; subject and milestone survive as context; neither is replaced by Follow-up-Tier |
| A reviewer is nominated before a correction exists | Nomination does not populate an earned verification claim |
| A reproducible problem has no known remedy yet | It is accepted as a bounded finding/question with an owner and evidence goal, not rejected at intake |
| A systemic rule defect has several historical examples | One process correction can be reviewed; no example's lifecycle is promoted |
| Two derived tiers conflict and the Register is silent | D-58 escalation occurs even if another work item can proceed |
| A graph gains extracted nodes while losing a curated node | Count growth is insufficient; the named curated-content check detects the missing record |

### Separate tooling observation — not a new implementation demand

Lane A reports that `tier-sweep` does not inspect `| Tier | Applicability |` tables. Treat that
as a bounded enforcement limitation, not proof that every propagation claim is wrong. This review
does not amend the checker or revisit D-191/B-077. For D-192 acceptance, manually review its actual
tier declarations and label them manually checked, not suite-verified. A parser-hardening proposal
may follow separately in Phase 1; it must test the new table shape and a deliberately false claim.

## What you did instead

Lane B drafted this separate process-review entry. It did not edit B-077, the SOP, Register,
template, graph fragments, code or workflows. Product PRD, storyboard/story panels, UML/data flow
and Encyclopedia have no new requirement change in this packet; their earlier review is context,
not authorization to reopen their existing work. No external Encyclopedia parity is claimed.

The reviewed commit was locally present and clean at intake. Graph branch metadata names e61bf3e
with stale false. Any new handoff draft needs subsequent acknowledgement and graph coverage;
these are Lane A follow-ups, not permission for Lane B to acknowledge itself or alter graph-owned
sources. No remote equality is claimed: the pasted report explicitly says the parent commit is
not pushed. Do not transport that ancestor under Lane B's single-entry exception.

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Existing-channel, independence and terminal-disposition principles | Phase 1: retain accepted content |
| Approve-with-conditions | D-192 parent semantics and derived checklists | Phase 1: apply the bounded text corrections, then review the named scenarios |
| Reject | Mapping subject/deadline/nomination directly to Kind/Follow-up-Tier/verification evidence | Phase 1: preserve dimensions and lifecycle stage |
| Defer | Parser hardening and unrelated graph enrichment | Separate Phase 1 tooling scope; manual D-192 tier review meanwhile |
| Defer | Independent completion claim for D-192 | Corrected settled revision and evidence required; no product build |
| Approve | B-077 and product tiers remain separate | Unaffected; no lifecycle promotion |

## Round 2 — independent review at 3ff81c6, 2026-09-07

**Review request, clarified:** Review D-192 and its derived handoff guidance against B-079;
accept corrections supported by the files, draft remaining corrections in this entry, and give
Lane A a parent-first completion sequence. Keep B-077 separate. No application build or checker
implementation is authorized by this review.

**Accepted:** subject versus Kind, deadline versus Follow-up-Tier, response versus disposition,
investigation without a known remedy, systemic concern without bulk closure, D-58 escalation,
reviewer independence, and named-fragment evidence are corrected. Retain them; no fresh review
of unrelated product artifacts is required.

### Parent — correct the evidence-field distinction

**R2-1, blocking this entry's verification.** D-192's LINKED VERIFIER row and Lane A's answer above
reserve both `Verified-By` and `Verified-At-Commit` for earned verification. The existing SOP and
checker require an anchor on `Applied` too; this entry itself correctly uses one while still
Applied. **My original proposal grouped the fields incorrectly. Lane A adopted that error;
this correction supersedes my proposal rather than assigning its origin to Lane A.**

Replace the D-192 mapping's field explanation with this full text, and append the corresponding
correction to Lane A's answer here:

> Name a proposed reviewer in the body. `Verified-By` names the actor who completed independent
> verification. `Verified-At-Commit` anchors evidence for both `Applied` and `Verified`: for
> `Applied`, identify an existing commit containing the asserted correction; for `Verified`,
> identify the existing revision independently reviewed. A nomination is not verification,
> and an anchor alone does not make an entry terminal. `Verified` also requires independent
> verification and supporting evidence under the canonical SOP.

Success example: a committed correction may be `Applied` with its real SHA and no `Verified-By`.
A nominated reviewer remains in the body until the review occurs. Independent verification then
records the reviewed revision, reviewer and evidence. No field or lifecycle state is added.

### Child — bound the checker proposal and evidence claims

**R2-2.** D-192's proposed unconditional hoist above the provisional/terminal split is underspecified.
If applied to every resolution, it would wrongly demand implementation commits for valid
Deferred, Withdrawn and Superseded dispositions. Replace that drafted fix with:

> Share anchor validation only between `Applied` and `Verified`. Require a nonblank hexadecimal
> commit identifier and, when sufficient history is available, prove that it resolves to a commit.
> Preserve the existing shallow-history limitation explicitly. Keep `Applied` nonterminal and
> retain the independent-review requirements for `Verified`. Preserve the existing requirements
> for Deferred, Withdrawn, Superseded and turn reports without adding an anchor requirement to
> those routes. Report Applied and Verified anchor results separately. Existence proves that an
> anchor resolves; a reviewer must still establish that its content supports the correction.

The pasted report's conclusion that resolvable Applied anchors mean the data is clean is too broad.
It establishes anchor existence only. I inspected the checker branch and confirm its presence-only
gap; I did not repeat Lane A's mutation experiment against live records.

**R2-3.** Replace the rationale that implementing and testing the checker in the applying pass is
itself prohibited self-verification with:

> Checker hardening remains deferred to a bounded Phase 1 tooling unit because this packet is a
> documentation review. Its implementer may run tests and record `Applied` with evidence.
> An independent eligible reviewer must perform the subsequent verification. Author testing
> does not itself confer `Verified` status.

This avoids turning independence into a prohibition on ordinary author validation. It does not
authorize tooling work in this packet.

### Lane A completion sequence

1. Correct the parent D-192 field mapping and append the answer correction in this entry (R2-1).
2. Amend the existing tooling proposal and its rationale in D-192 (R2-2/R2-3); keep one follow-up,
   not another backlog. State any affected tracking-tier propagation under D-54; product spec
   tiers remain unaffected by these semantic corrections.
3. Manually exercise the Applied/nomination/Verified example above and the already accepted
   original examples. Commit the bounded documentation correction, then record its existing
   anchor as Applied. Independent review decides whether B-079 can become Verified.
4. After the documentation commit, Lane A refreshes extracted graph coverage and re-merges
   curated fragments as required. Verify the named affected fragments against the graph.
5. In the separate authorized tooling unit, test: missing Applied anchor; malformed anchor;
   valid-format nonexistent commit; real Applied anchor that remains nonterminal; Verified
   without independent reviewer; and valid non-implementation dispositions without anchors.
   Exercise full and shallow history explicitly. Independent review follows implementation.

### Evidence and limits

At clean `3ff81c6531769cab75236af783f3c8c4519096ca`, the local consistency suite passed 17/17.
That is a dated run result, not proof of the semantics the checker does not inspect. Graph metadata
matched that HEAD with `stale: false`; `frag124.json --verify-only` proved exact parity for its
one node and four edges. Neither establishes parity for every curated fragment. This appended
working-tree review is newer than that extraction; it needs refresh after its eventual commit.
No graph rebuild, governed-doc edit, checker edit, commit or push was performed in this review.
B-077 is unchanged. B-079 remains Applied; this review does not confer Verified or phase closure.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-192 and SOP corrections listed as accepted above | Phase 1: retain; no repeat work |
| Approve-with-conditions | Register D-192 and B-079 evidence-field language | Phase 1 documentation: R2-1, then independent review at a named commit |
| Approve-with-conditions | D-192 checker proposal and rationale | Phase 1 planning: R2-2/R2-3 before tooling execution |
| Defer | Closure-readiness implementation and tier-sweep hardening | Separate bounded Phase 1 tooling unit; independent verification afterward |
| Reject | Verified/closed claim for B-079 at this revision | Phase 1: resolve R2-1 and review the corrected evidence |
| Approve | B-077, product specifications, application code and workflows unaffected | No work or lifecycle promotion in this packet |
