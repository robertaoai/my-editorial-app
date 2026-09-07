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
  **The corrections are in the tree as of this commit, and no `Resolution` is claimed here yet:**
  `Applied` requires a `Verified-At-Commit` that **exists**, and an entry cannot name the commit that
  creates it. It is recorded in the commit immediately following — the sequencing `B-078` hit and
  `closure-readiness` caught again here, which is the control working rather than an obstacle.
- **Evidence:** independent source review of `e61bf3e9fe6a7bd586379f39e3b72f5207ba74a6`; `docs/v1/V1-DECISION-REGISTER.md` D-192; `docs/handoff/README.md` Feedback checklists; canonical TEMPLATE and D-58 arbitration rule; the external drafts already reviewed in this conversation.
  **Lane A applying evidence, 2026-09-07:** the corrections above in `D-192` (normalization table,
  independence row, new correction section) and in `docs/handoff/README.md` (sender items,
  independence paragraph, conflicting-evidence scenario, graph-evidence row); curated coverage added
  as `docs/graph-fragments/frag124.json`, whose node and relationships are proven equal to the graph
  by a named single-fragment `merge7.js … --verify-only` run — **not** by `--all`, and not by a node
  count. `Applied` is deliberately non-terminal: Lane A wrote these corrections and cannot verify
  them. Independent review at the resulting revision remains outstanding.

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
