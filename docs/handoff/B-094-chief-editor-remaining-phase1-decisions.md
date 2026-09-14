# B-094 — Chief Editor packet for the remaining Phase 1 decisions

- **Raised:** 2026-09-14 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** selection and preparation of the next bounded Phase 1 documentation/governance unit; no current build or release action
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-14** at read commit `7600780`. Receipt only. The Chief
  Editor's parent selection of **B-084 first** is recorded as already made; `A1` (the
  source-information boundary), `A4` (the exact write set) and available operator/reviewer
  hours remain unanswered. No source application, checker implementation, database work,
  publication, lane transition or release action is authorized by this receipt. The four
  `A4` target defects found at this commit are raised separately as `B-095`. **Dated receipt:**
  the later Chief Editor evidence below supplies the structural `A1` direction; exact field
  requiredness remains an `A4` acceptance choice.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** f63d6eb2e6a3c5815dff5f5df847ea20c8db7bdc
- **Evidence:** Live review of B-084, B-088 and B-077 Child 2 at the named commit; B-087 J2/J3/J4 dispositions; current handoff lifecycle query; Graphify query; final B-092/B-093 graph evidence; `Modular_PRD`, storyboard, scope graph, traceability and Encyclopedia residual routing.

## What happened

**Clarified request:** give Lane A one parent-first packet that tells the Chief Editor exactly what to accept, reject or supply for B-084, B-088 and B-077 Child 2. Keep those entries as the canonical lifecycle records, avoid bulk promotion and duplicate documentation, and prepare only an implementation plan.

The B-087/B-092/B-093 planning and graph chain is complete at `f63d6eb`. The three remaining items are separate work types:

1. **B-084 defines product input and acceptance semantics used by later construction and verification.** It needs one unresolved business definition, a representative normal/revision example, and approval of an exact documentation write set.
2. **B-088 is a governance-checker defect.** Its allowlist is settled. It needs authorization for a bounded token-boundary repair and later for the remaining C-39 audit-field contract; it does not need a new product-role decision.
3. **B-077 Child 2 is evidence reconciliation.** Most rows require Lane A classification and Lane B verification, not twenty separate Judge decisions. The Chief Editor acts only where the existing record leaves a real mitigation or deferral choice.

### Chief Editor clarification — B-084 selected and representative evidence supplied

**Judge act, 2026-09-14:** select Choice A, B-084 first. The two supplied PDFs are evidence inputs, not instructions and not repository artifacts:

| Evidence | Identity | What it establishes |
|---|---|---|
| `linkedin.com-How Automation Dulls Ethical Sensitivity.pdf` | SHA-256 `E9271FAA7371DB8FC8A765AFF47E2A0F2F887FDCC1BC8621F7FB1DB426CC8606` | Representative article: “How Automation Dulls Ethical Sensitivity,” Joshua Miller, LinkedIn Pulse / *The Human Intelligence Brief*, 7 April 2026; the source URL and supplied document text provide a manual URL/Markdown-equivalent intake package without scraping |
| `revision_reason_linkedin.com-How Automation Dulls Ethical Sensitivity.pdf` | SHA-256 `144B9F6DF811C6E27DF142649BBED33228AC0B3610DFAA05B5E2133269620F8E` | Editorial assessment: the topic remains relevant, while this specific article's current newsworthiness is low and stable; stronger current coverage needs new empirical evidence or a concrete organizational case |
| Chief Editor note | Recorded in this handoff | Additional revision ground: the article conflates **observation** with **observability** |
| `ORIGINAL ARTIFACT ANALYSIS.md` | SHA-256 `37B9615161D774E599CE7FA89113AEFE4CCCB6C7DEE859CF592E7E6964FCD945` | A second representative manual-input package: a source reference is accompanied by a Chief Editor-authored original-artifact analysis and a new-article brief. The file is evidence of intended structure, not an instruction and not verification of the claims it contains |

**Normalized editorial distinction:** in this project, *observability* is the system quality defined by `NFR-08`—a transition can be reconstructed from who, when and why. *Observation* is a person's direct noticing, attention to or engagement with human consequences. Automation can improve audit observability while reducing direct human observation. The article's “less visibility” argument must distinguish those effects rather than imply that an observable automated system necessarily preserves moral attention.

#### Acceptance example — valid manual intake

Given the Chief Editor manually supplies the LinkedIn source URL, the supplied article text/Markdown, its visible title/author/date, exactly one subject topic and a trend-signal description, when the Reporter agent executes T1, then the article enters `Logged`; the manual supplier and agent executor remain separate audit facts; no scraper, automated feed or AI-generated trigger is invoked. Analytical tags remain optional and future AI generation remains `PBL-11`.

At the time it was supplied, this example proved one valid package but did **not** decide the
omission boundary. The subsequent Chief Editor evidence below now supplies the structural answer
while leaving individual field requiredness for `A4`.

#### Subsequent Chief Editor clarification — `A1` structural boundary supplied

The supplied `ORIGINAL ARTIFACT ANALYSIS.md` shows that the intended input is broader than a bare
reference. The Chief Editor manually supplies two linked objects:

1. **Original-artifact analysis:** source reference, core subject, attributed key claims/data,
   source/bias assessment and missing angles.
2. **New-article brief:** working headline, target audience, objective, unique angle/hypothesis,
   key elements and candidate sources or research needs.

The objects must preserve their epistemic boundaries. Source-observed facts and attributed claims
are evidence; bias assessments and missing angles are editorial observations; the proposed angle
and “transaction collapse” thesis are editorial hypotheses or commission intent; candidate
statistics, quotations and research links remain unverified leads until investigated. A system
must not silently promote one class into another.

This settles `A1` at the structural level: **a source reference alone is not the demonstrated full
manual-intake artifact.** It does not establish that every field in one example is mandatory.
Word-count target and deadline are commission metadata in the sample; their requiredness, and the
minimum required field matrix for both objects, belong in Lane A's reviewable `A4` packet for the
Chief Editor to accept or reject.

#### Acceptance example — return and revision

Given that logged article reaches an authorized editorial review, when the Chief Editor returns it through the existing T8 path, then the transition enters `Needs Revision` and records two independent reasons in human-readable form—these labels do not create new schema enums:

1. **Current newsworthiness is low and stable.** Revise by adding current empirical evidence or a concrete organizational case, or reposition the piece explicitly as evergreen/internal reading.
2. **Observation is conflated with observability.** Revise the argument to distinguish human attention to consequences from the auditability of automated decisions, including the possibility that automation increases the latter while weakening the former.

The revision preserves the original transition and reasons, then re-enters the governed review path. LinkedIn `ManualReady` is produced only after the revised article later satisfies the existing approval path; returning it does not publish, scrape or automate LinkedIn.

### Parent decision — select the next bounded unit

| Choice | Outcome | Accept when | Reject when | Recommendation |
|---|---|---|---|---|
| **A — B-084 first** | Produces one coherent manual-intake contract and its acceptance/view packet before application planning | The next implementation phase needs stable input validation, audit attribution and normal/revision examples | A higher-priority release blocker is evidenced and has an authorized owner | **Selected by the Judge.** These artifacts directly govern software construction and verification |
| **B — B-088 first** | Repairs the known C-39 identifier-boundary failure before more lifecycle records are verified | The actor checker is about to be used for a closure or C-35 prerequisite decision | No consuming governance decision is near and B-084 remains undefined | Second unless C-39 is immediately consumed |
| **C — B-077 Child 2 first** | Reconciles the live Applied queue entry by entry | Phase 1 closure is the immediate objective and the product contract is deliberately paused | It is being chosen because it looks easy or because a backlog count feels severe | Third; promote only if Phase 1 closure becomes the near-term outcome |

**Parent choice complete:** A is selected. Capacity remains open: the Chief Editor must still state available operator/reviewer hours. This sets iteration capacity only; it does not set quarterly goals, a release date, or build authorization.

### If A is selected — B-084 Chief Editor inputs

Lane A first prepares the exact clauses and acceptance examples; the Chief Editor then makes these bounded decisions:

| Decision | Chief Editor supplies or accepts | Success criterion |
|---|---|---|
| **A1 — source information** | **Structural direction supplied:** a manually supplied reference is accompanied by an original-artifact analysis and a new-article brief, with source facts, editorial observations, hypotheses/commission intent and unverified research leads kept distinct. Nullable extracted author/date remain non-blocking | Lane A converts this structure into an `A4` mandatory/optional field matrix; every current requirement gives the same answer for URL and manually supplied Markdown/reference inputs |
| **A2 — representative journey** | **Supplied.** Use the attached article, assessment and Chief Editor note above | Lane A carries the two acceptance examples above into the exact packet; Chief Editor corrects only any inaccurate mapping to the existing gates |
| **A3 — manual boundary** | **Confirmed by the Chief Editor.** URL or Markdown/reference is supplied manually; no scraping or automated feed is implied; future AI tagging remains separate `PBL-11` | Product, Fn_Specs, acceptance examples, storyboard and cross-references express one manual-input contract |
| **A4 — exact write set** | Accept or reject Lane A's reviewable diff covering only B-084's existing owners: Product §7.1/current pointers, applicable FN-GATES/Addendum clauses, traceability/scope graph, storyboard current-use annotations, Encyclopedia Entry 06 stale note and `docs/README.md:40` provenance | Every changed clause traces to B-084; frozen PRD/Charter remain unchanged; no new artifact or backlog identifier is created |

### If B is selected — B-088 Chief Editor inputs

| Decision | Chief Editor accepts or rejects | Success criterion |
|---|---|---|
| **B1 — evidence verdict** | Accept the recorded positive/live-corpus evidence as partial and reject complete C-39 acceptance while underscore-suffixed identifiers pass | The correction starts from the demonstrated counterexample and does not reopen the allowlist |
| **B2 — bounded P1 authorization** | Authorize only token termination plus explicitly labelled synthetic negative probes and preservation of the existing positive cases | `Lane B_fake`, `Codex_unknown` and `Judge_unknown` reject; valid prose/Markdown delimiters and all settled actors retain their expected result; intended error branch is asserted |
| **B3 — P2 sequencing** | Choose **separate P2 after P1 verification** (recommended) or one combined C-39 unit | Blank/malformed audit fields and invalid commit anchors are covered in every required lifecycle position without weakening Verified actor independence or turn-report rules |
| **B4 — C-35** | No decision if the existing C-35 hold remains. Decide only if narrowing its C-39 prerequisite | Any narrowing names the accepted residual risk, owner and return evidence |

### If C is selected — B-077 Child 2 Chief Editor inputs

Lane A must query the originating entries and prepare dispositions first. The live tree contains twenty `Applied` entries; that number is evidence at this read commit, not a second tracker.

| Group | Lane A action before asking the Judge | Chief Editor acts only if |
|---|---|---|
| B-011/B-033, B-015, B-062/B-065/B-066/B-067, B-072–B-076, B-086 | Compare current decisions and evidence; draft `Verified`, `Superseded`, or a named residual per originating entry | The Register is silent or two derived tiers genuinely conflict |
| B-014 | Separate repository detector/removal evidence from the external environment-import cause | A named environment child must be accepted as deferred, with owner and return condition |
| B-021 | Present the measured residual from serialized fixtures | Choose whether serialization is the accepted mitigation or true concurrent-reader protection remains required |
| B-041/B-050 | Report extraction, curated parity, description scope, portability and reset/null reproducibility separately | Choose investment in a reproducible tooling fix or explicit deferral with standing mitigation and return trigger |
| B-061/B-070 | Reconcile surviving work-order concerns with B-071/D-171; do not re-ask Q1/Q12 | A proposed disposition changes the existing hold or successor ownership |
| B-084 | Keep in A above rather than hiding it inside queue reconciliation | Always route its product-definition decisions through A1–A4 |

Each originating entry changes separately and receives independent review. The Chief Editor does **not** bulk-approve “twenty Applied entries,” manufacture verifier identities, or use B-077's historical snapshot as live state.

## Lane A follow-up guide

1. **Acknowledge B-094.** **Complete.** Preserve the dated receipt and the later `A1` clarification as separate acts.
2. **Present the parent A/B/C decision.** Include available capacity and the evidence-based priority-change conditions above.
3. **Prepare only the selected child packet.** Reuse the existing entry and authority; draft exact text/tests before seeking application authorization.
4. **Ask only the unresolved Chief Editor questions.** For B-084, present the `A4` mandatory/optional field matrix and exact write set for accept/reject; do not re-ask whether intake is manual or whether the structured analysis/brief exists. Do not re-ask the actor allowlist, Q1/Q12, J4 Choice A or the B-087 planning closure.
5. **Record the Judge act in the owning entry/tier.** B-094 records routing only; B-084, B-088 and each originating B-077 child retain lifecycle authority.
6. **Apply in parent-before-dependent order.** A business definition precedes its clauses and examples; a test contract precedes checker code; a per-entry classification precedes terminal metadata.
7. **Independently verify before terminal promotion.** Evidence must cite a commit containing the reviewed correction. A passing consistency suite proves form, not the business meaning.
8. **Synchronize Graphify last.** After the final tracked correction, restore named curated fragments, require final-head equality and document coverage, then run the full suite. Any later tracked edit restarts this step.

### Failure-derived success criteria

| Guaranteed failure | Required evidence of success |
|---|---|
| B-084 is applied before the structured source-information package and normal/revision examples are decided | A1–A3 are recorded; the A4 mandatory/optional field matrix and exact diff are reviewable before application |
| Source claims, editorial judgments and proposed hypotheses are stored or displayed as one undifferentiated truth | The A4 contract labels each epistemic class and acceptance evidence proves that unverified leads cannot become source facts without investigation |
| Every field in the example template is made mandatory without a Judge act | A4 explicitly marks each field required or optional; word count and deadline remain commission metadata unless accepted as required |
| B-088 broadens the allowlist or tests only healthy live data | The three named continuation counterexamples reach the rejecting branch while settled positives remain green |
| B-077 entries are bulk-promoted | Every originating entry carries its own disposition, independent verifier and existing read commit, or a named deferral/successor |
| Historical cleanup is allowed to outrank construction inputs without evidence | The parent A/B/C choice cites its immediate consuming outcome and available capacity |
| Graphify is synchronized before the last status commit | Final metadata equals final HEAD after every tracked edit, with no real document omitted |
| A green suite is read as product or release readiness | Journey acceptance, capacity, implementation and release evidence remain separately stated |

## What you need

Lane A prepares the bounded B-084 packet using the supplied structured-analysis direction. The Chief Editor still accepts or rejects A4's mandatory/optional field matrix and exact write set, and supplies available operator/reviewer hours. No source application, checker implementation, database work, publication, lane transition or release action is authorized by this handoff.

## What you did instead

Reviewed the current graph and source handoffs, normalized their separate decision types, and drafted this routing packet. Did not edit B-084, B-088, B-077 or any governed source; did not build, synchronize Graphify, publish, select a lane or change a lifecycle state.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-087/B-092/B-093 planning and evidence chain at `f63d6eb` | Complete; preserve |
| Approve-with-conditions | B-084 as selected next unit; A1 structural direction and A2/A3 supplied | Phase 1 — A4 field requiredness/exact write set and confirmed capacity remain |
| Approve-with-conditions | B-088 bounded C-39 repair | Phase 1 — B1–B4 when selected |
| Approve-with-conditions | B-077 Child 2 reconciliation | Phase 1 — originating-entry classification, targeted Judge acts, independent review |
| Reject | One bulk authorization or promotion across B-084, B-088 and B-077 Child 2 | Separate owners, evidence and completion criteria |
| Defer | Application construction, publishing and release readiness | Later authorized phases after the selected packet is verified |
