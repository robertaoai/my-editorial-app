# B-095 — B-084 `A4`: three governed-document contradictions and one unmarked stale ledger entry

- **Raised:** 2026-09-14 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** B-084 `A4` — Lane A cannot produce a reviewable exact write set while four of its named targets state contradictory or stale current behaviour; no build, checker, database, publication or lane transition
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-14** in the review supplied after commit `b612c2c`. Lane A
  challenged the evidence status, split `D2`, and identified the sample defects `S1`–`S5` below.
  Receipt and analysis only; no governed correction is applied by this acknowledgement.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** 76007803987814b6cd1cabc8dab10cddcb905e59
- **Evidence:** Read at `7600780` of `docs/Modular_PRD.md` §7.1; `docs/fn-specs/FN-GATES-01-05.md` §2 requirement table and §3.1; `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panel A2, Panel B2 and §4; `docs/governance/requirements-traceability-map.md` §4, §7; `docs/ENCYCLOPEDIA-SYNC.md` per-entry citation map. Updated Chief Editor template and completed sample supplied 2026-09-14, SHA-256 `18E9A66C4388061F9A10DB266FBC63B1A8299347F17A4C0C3119F5FE05B2DBB7`. Graph currency read from `.graphify/branch.json`.

## What happened

B-094 `A4` asks the Chief Editor to accept or reject an exact write set over B-084's existing
owners. Four of those owners currently state something that is not true at this commit, so a diff
drafted against them would carry the contradiction forward rather than close it. Each item below
quotes the two things that disagree.

### `D1` — `Modular_PRD` §7.1 records `CR-14` as both covered and missing

- §7.1 Product Scope Matrix, `FR-01` row: *"Full — `CR-14` covered as the **ratified manual
  contract**; future AI tagging/scoring is `PBL-11`"*.
- §7.1 Product-scope gaps table, `CR-14` row: *"No FR requires AI topic, source, and trend-signal
  tagging at the Reporter gate | **Missing functional requirement — FB-05**"*.

The gaps row is false as written since `D-194`/`D-197`. `requirements-traceability-map.md` §7 already
states the correct residual — *"`FB-05` closes on independent verification of this specification"* —
and §4 records `Uncovered = 0`. The gaps table names the wrong outstanding thing, not a smaller one.

### `D2` — "URL" and "source reference" are used as one term across two governed documents

- `FN-GATES-01-05.md` §2 requirement table, `FR-01` row: *"Log an article from **a URL** with exactly
  one subject topic and a trend signal"*.
- `Modular_PRD.md` §7.1, `FR-01` row: *"Log an article from **a source reference** … **supplied
  manually by the Chief Editor**"*.

`FN-GATES` §3.1's own prose already carries the ratified manual contract, so the §2 table row
contradicts the section it indexes. The storyboard repeats the narrow form at Panel B2: *"resolved
**manually** to a reviewable public source **URL**"*.

The structural direction recorded in B-094 is enough to split this defect:

- **`D2a` — reference wording:** correctable now. Under every remaining field choice, T1 receives
  a manually supplied package whose reference may be a URL or another reference; it is never a
  bare-URL-only intake.
- **`D2b` — field requiredness:** still an `A4` decision. The sample cannot determine the matrix
  because it omits one currently required input and contains the ambiguities `S2`–`S4` below.

### `D3` — the storyboard's supersession reached the panel and not the roll-up

- Panel A2 note: *"Gap made visible — `FB-05` / `CR-14`. A `trend_signal` is required at T1, but no
  functional requirement defines where its value comes from"*, followed by *"**SUPERSEDED FOR
  CURRENT USE — 2026-09-07 (`B-080`)**"*.
- §4 *What the storyboard reveals*, carrying no supersession: *"Required `trend_signal` at T1 has no
  defined producer | `FB-05`/`CR-14` | A2"*.

The same statement appears twice. One copy carries its correction and the other does not, which is
the duplicated-fact drift mechanism this corpus keeps recording.

### `D4` — Encyclopedia Entry 06 is stale by the ledger's own convention and is not marked

- `ENCYCLOPEDIA-SYNC.md` Entry 05 shows the convention: *"`556a9d5` — **stale: `D-168` affects this
  entry, not yet republished**"*.
- Entry 06 (`CR-14`, Reporter-gate tagging) reads *"Last verified at `f7b3aea`"* with no stale note,
  while its own declared dependencies — `FN-GATES` §3.1/§6/§7, `requirements-traceability-map` §4/§7
  and `Modular_PRD` §2.5.1 — all changed under `D-194`/`D-197` after `f7b3aea`.

B-084 `A4` already lists *"Encyclopedia Entry 06 stale note"* as a write-set item, which is
consistent with the note not yet existing. Recorded here so the omission has an entry of its own
rather than living only inside a decision packet.

## Lane A review correction and sample findings

### `E1` — B-095 records findings; it is not independent confirmation

B-095 and B-094 are records of the source comparison. Their existence does not prove that a
second eligible actor re-read the governed sections. `Verified-By` therefore remains empty and
`D1`–`D4` may reach `Applied` at most until an actor who did not produce or apply the correction
reviews the resulting commit. The phrase *"independently confirms"* is rejected for this evidence.

### `S1` — original omission resolved by the updated trend-signal section

`Modular_PRD` §7.1 `FR-01`, `FN-GATES` §3.1 and Addendum §3.1 all require a Chief Editor-supplied
trend-signal description. `FN-GATES` §6 says an absent or empty value prevents T1 completion.
`ORIGINAL ARTIFACT ANALYSIS.md` contains no field with that name or an unambiguous equivalent.
`Core Subject` describes what the source is about; `Unique Angle` states the commissioned thesis.
Neither should be silently reclassified as evidence of why the subject is currently moving.

**Chief Editor act, 2026-09-14 — resolved.** The updated template is selected for use and adds a
dedicated `TREND-SIGNAL UPDATE` section with baseline/current periods, what held, what changed, what
weakened, a current newsworthiness assessment with rationale, and fresh source leads. This section
is the manually supplied trend-signal description object for T1. `Core Subject` and `Unique Angle`
remain separate and are not substitutes.

The updated sample fills that section, so the original S1 omission is closed for the sample. Its
claims are still Chief Editor-supplied intake assertions until the Investigator checks source and
trend evidence at T2/T3; filling the section does not pre-complete those gates.

### `S2`–`S5` — disposition after the updated template

| ID | Finding | Proposed correction for Chief Editor accept/reject | Failure if left unresolved |
|---|---|---|---|
| `S2` | `Target Audience` appears in both the source analysis and new brief | **Resolved by structure:** preserve the section namespaces as distinct fields, such as `original_artifact_analysis.target_audience` and `new_article_brief.target_audience`; a flat shared key is rejected | Flattening the template merges source-audience observation with commission intent |
| `S3` | `Original Source/URL` names LinkedIn Pulse and Forbes but contains no URL and does not distinguish host, publisher or reference | **Correction remains:** label the field `Original Source/Reference`; store the supplied locator separately from optional publication/host attribution; allow a non-URL reference under `D-121` | A non-URL reference fails a field called URL, or two publications are silently treated as one identity |
| `S4` | The updated sample still carries an unfilled deadline placeholder | **Non-gate residual:** retain `Deadline` in the selected template, but mark this sample operationally incomplete until a date is supplied; deadline does not substitute for or block the decided T1 fields unless A4 explicitly makes it gate-required | A placeholder is accepted as a real deadline or silently becomes a T1 constraint |
| `S5` | Intake structure and revision evidence concern different articles | **Accept:** use them as two bounded evidence sources, then draft one same-article normal-and-revision acceptance example before A4 approval | Neither sample demonstrates the required end-to-end journey for one article |

The claims and statistics inside the sample remain unverified research inputs. This handoff checks
the package structure only; it does not validate article attribution, quoted figures or the
“transaction collapse” thesis.

### `S6` — the selected template still lacks the exactly-one subject-topic field

`Core Subject` is a one-sentence analysis. The governed T1 contract requires exactly one subject
topic, distinct from the many analytical tags (`G39`/`D-38`). Add a separate template field:

> **Subject Topic:** [Select exactly one governed topic]

This is a direct consequence of the existing contract, not a new product choice. Without it, Lane
A cannot derive a T1 validation rule or map the template to `articles.topic_id` without guessing.

### `S7` — the template must not collapse T1 supply into T2/T3 verification

The Chief Editor supplies the `TREND-SIGNAL UPDATE` at intake. Its facts, projections, links and
score are assertions and research leads at that point. T2 still confirms source identity and
characteristics; T3 still checks trend evidence, records reviewer confidence and identifies the
editorial angle. Acceptance evidence must show that an intake value is attributable to the Chief
Editor and cannot be displayed as Investigator-verified merely because the template is complete.

### `S8` — manual newsworthiness assessment is not the computed trend score

The template's `Current newsworthiness score (1–10) + ... justification` is a manual editorial
assessment. It is not the separate computed `trend_score`, does not establish factual truth, and
cannot advance a gate. Preserve the numeric value, rationale, supplier and assessment date under
the newsworthiness profile; keep any later automated score and its ruleset/version separate.

## What you need

Use this parent-before-dependent order:

1. **Correct the evidence status.** Treat B-095 as the finding record and retain an empty
   `Verified-By` until an eligible second actor reviews the applied correction.
2. **Preserve the resolved `S1` template.** Use the dedicated `TREND-SIGNAL UPDATE` as the manual
   T1 description object; do not infer it from subject or angle.
3. **Lane A drafts `D2a`.** Replace URL-only wording with the already decided URL-or-other-reference
   package boundary in `FN-GATES` §2 and storyboard Panel B2, including `S3`'s Source/Reference label.
4. **Lane A drafts `D2b` with `S2`, `S4`, `S6`, `S7` and `S8`.** Present one required/optional field
   matrix, preserve section namespaces, add exactly one subject topic, distinguish intake assertions
   from verified evidence, and separate manual newsworthiness from computed trend score.
5. **Lane A drafts the `S5` acceptance example.** One article traverses manual intake, normal review,
   return with both supplied revision reasons, resubmission and LinkedIn `ManualReady` delivery.
6. **Lane A includes `D1`, `D3` and `D4` in the same bounded A4 review packet.** These corrections
   are decision-free but are not applied ahead of the parent contract.
7. **Chief Editor accepts or rejects the exact A4 write set.** No new identifier or artifact;
   frozen `PRD.md` and Charter remain unchanged.
8. **After application, obtain independent verification.** The reviewer cites the commit containing
   the correction and checks the governed clauses plus the acceptance example.
9. **Synchronize Graphify last.** `.graphify/branch.json` still records `lastAnalyzedHead: f63d6eb`
   while the tracked branch has advanced; B-094 and B-095 remain absent from the curated graph.
   Lane A restores curated fragments, proves final-head equality and reruns the full consistency
   suite after the last tracked edit.

## What you did instead

Compared the four named owners at `7600780`, the supplied sample and Lane A's review, then recorded
the supported gaps and decision branches. This is not lifecycle verification. Did not edit any
governed document, build, synchronize Graphify, select a lane or change a lifecycle state.

| Verdict | Item | Follow-up |
|---|---|---|
| Approve | B-095 as the finding record; `D1`, `D3`, `D4` supported | Phase 1 — include in B-084 A4, then obtain independent verification after application |
| Approve | `D2a` URL/reference correction | Phase 1 — Lane A may draft now from the decided structural boundary |
| Approve | Updated template and `S1`; scoped resolution of `S2` | Phase 1 — preserve as A4 input |
| Approve-with-conditions | `D2b`, `S3`, `S4`, `S6`, `S7`, `S8` | Phase 1 — Lane A drafts the exact field/gate semantics for Chief Editor acceptance |
| Approve-with-conditions | `S5` paired evidence | Phase 1 — Lane A drafts one same-article normal/revision acceptance example |
| Reject | Calling B-095 independent confirmation; treating intake assertions as T3 verification; merging newsworthiness with trend score; omitting the exactly-one subject topic | Preserve evidence status, gate separation and the T1 contract |
| Defer | Graphify synchronization and its curated fragments | After the final tracked correction, per B-094 step 8 |

---

## Appended 2026-09-14 after Lane A review of the updated template

This append preserves the accepted S1–S8 analysis above and records only three additional findings
supported by Lane A's review. It does not constitute independent lifecycle verification.

### `S9` — two evidence samples remain live and their research-lead identities conflict

B-094 currently lists both the earlier `ORIGINAL ARTIFACT ANALYSIS.md` (`37B96151…FCD945`) and the
updated template/sample (`18E9A66C…B2DBB7`) without marking which governs current use. Both byte
identities were recomputed by Lane B and match the supplied files, but matching a file does not
verify its claims.

The earlier and updated samples disagree on three properties that define a research lead:

| Property | Earlier sample | Updated sample |
|---|---|---|
| Denominator for the `14%` training claim | workers | firms in the trend update; unstated in the new-article brief |
| Magnitude unit for the `8–15` effect | percent | percentage points |
| Outcome measure | hiring uplift | interview-invitation rate in the trend update; hiring uplift in the new-article brief |

The updated sample therefore also contradicts itself on outcome measure. Before A4 cites a sample,
Lane A marks the earlier sample **superseded for current template use** while retaining it as dated
evidence, then restates each newer lead with one denominator, magnitude unit and outcome measure.
External fact verification remains T2/T3 work and is not performed by this handoff.

### `S10` — Encyclopedia Entries 03 and 06 share the same propagation event

Entry 06 is already in A4 because the manual Reporter-gate contract changed its dependencies.
Entry 03 is *Newsworthiness vs. trend score vs. editorial priority*. The selected template now
introduces a manual 1–10 newsworthiness assessment, while S8 requires it to remain distinct from
computed `trend_score` and gate authority. A4 therefore marks **Entries 03 and 06 stale in one
propagation act**. Updating Entry 06 alone would leave the newly affected ontology unqueued.

### `S11` — a baseline-to-current update is not fillable at first intake

The selected heading `TREND-SIGNAL UPDATE (Baseline [Month Year] → Current [Month Year])` and the
fields *What held*, *What accelerated or mutated* and *What weakened or was overstated* assume a
prior assessment. A new artifact entering T1 may have no project baseline, so the current template
cannot provide its required description without inventing history.

Use one conditional section rather than a second artifact:

| Assessment mode | Required common fields | Mode-specific fields |
|---|---|---|
| **First intake** | as-of date; current signal and why it matters now; manual newsworthiness assessment plus rationale; fresh research leads | baseline = `Not applicable — first intake`; no held/accelerated/weakened comparison |
| **Reassessment** | as-of date; current signal; manual newsworthiness assessment plus rationale; fresh research leads | baseline date; what held; what accelerated or mutated; what weakened or was overstated |

S5's same-article acceptance example starts in **First intake** mode and later uses **Reassessment**
mode. Beginning the example at reassessment proves only the second pass and leaves the normal path
untested.

### Revised parent-before-dependent sequence

1. **Resolve `S11` first.** Lane A drafts the conditional first-intake/reassessment form inside the
   selected template.
2. **Resolve `S9`.** Mark the earlier sample superseded for current use and normalize the updated
   research leads without asserting that they are true.
3. **Draft `D2a` and `S3`.** Use Source/Reference rather than URL-only wording.
4. **Draft `D2b` with `S2`, `S4`, `S6`, `S7` and `S8`.** Produce one field matrix with section
   namespaces, exactly one subject topic, gate attribution and separate newsworthiness semantics.
5. **Draft `S5`.** One article demonstrates first intake, T2/T3 verification, normal review,
   return, reassessment, revision, resubmission and LinkedIn `ManualReady` delivery.
6. **Draft `D1`, `D3`, `D4` and `S10`.** Include both Encyclopedia Entries 03 and 06 in the same
   propagation act.
7. **Chief Editor accepts or rejects the exact A4 packet.** No source document changes before the
   complete reviewable diff and acceptance evidence exist.
8. **Apply, then obtain independent verification** from an actor who did not produce or apply the
   correction.
9. **Synchronize Graphify last** after the final tracked edit, restore curated coverage for B-094
   and B-095, prove analyzed-head equality and run the full consistency suite.

| Verdict | Item | Follow-up |
|---|---|---|
| Approve-with-conditions | `S11` conditional trend-signal section | Phase 1 — first item in A4; prove both modes with one article |
| Approve-with-conditions | `S9` evidence reconciliation | Phase 1 — supersede the earlier template for current use and normalize each research lead |
| Approve-with-conditions | `S10` Encyclopedia propagation | Phase 1 — Entries 03 and 06 in one act |
| Reject | Treating S1 alone as proof that the trend section works at first intake | S11 must define the no-baseline path |
| Reject | Citing either sample as verified fact, or carrying conflicting denominator/unit/outcome values into A4 | T2/T3 verification and one normalized research-lead identity required |
| Defer | Graphify synchronization | After the final A4 application and status edit |

---

## `A1` decision packet — define “source information” before Step 3

`FN-GATES` §3.1 currently says the Chief Editor supplies `source_url`, one subject topic, **source
information** and the trend-signal description. `D-121` already makes the first item a source
reference that may be a URL or another reference. Step 1 defines the trend-signal description.
`A1` decides only the minimum meaning and requiredness of the third item.

### Boundaries common to every acceptable choice

- **Source reference is separate.** It identifies the artifact or proposition: a manually entered
  URL or another reviewable reference. The application does not scrape or generate it.
- **Subject topic is separate.** Exactly one governed topic is required; `Core Subject` is prose
  analysis and multiple analytical tags do not substitute for it.
- **Source information is supplied analysis, not verification.** Its values are attributable to the
  Chief Editor at T1. T2/T3 still validate the source and investigate claims and trend evidence.
- **Nullable metadata stays non-blocking.** Author and publication date may be extracted or entered
  later and remain flagged for the Investigator when unavailable.
- **Supporting material is manual.** Article text, Markdown, a document or an exact statement may be
  attached or pasted. For a non-URL reference it must be sufficient for the Investigator to locate
  or inspect what was supplied; no automated collection is implied.

### Chief Editor accept/reject choices

| Choice | T1 meaning of `source information` | Operational effect | Recommendation |
|---|---|---|---|
| **A — structured original-artifact analysis with explicit unknowns** | The selected `ORIGINAL ARTIFACT ANALYSIS` section is present. `Core Subject` is non-empty; `Key Claims & Data` contains at least one attributed proposition. `Original Source Bias`, source `Target Audience`, and `Missing Angles` each contain an assessment or an explicit `Not assessed` / `Unknown` / `None identified yet` value | Makes the selected template testable without forcing the Chief Editor to invent a judgment. Preserves unknowns for T2/T3 and distinguishes source analysis from commission intent | **Accept — recommended** |
| B — core analysis only | Require only `Core Subject` and at least one attributed `Key Claims & Data` item; bias, source audience and missing angles are optional | Faster intake, but the selected template no longer defines one consistent completeness rule and downstream editorial context may be absent | Accept only if intake speed outweighs the missing context |
| C — reference or source body alone | Treat a URL, document or pasted text as sufficient source information | Recreates the bare-reference boundary B-094 rejected and leaves the selected source-analysis section outside the contract | **Reject** |

### Exact sentence Lane A drafts if Choice A is accepted

> **Supply:** the Chief Editor supplies through the UI (1) a **source reference** — a URL or another
> reviewable reference; (2) **exactly one subject topic**; (3) **source information** as a structured
> `ORIGINAL ARTIFACT ANALYSIS`, containing a non-empty Core Subject, at least one attributed Key
> Claim or Data item, and an explicit value — including `Unknown`, `Not assessed` or `None identified
> yet` where honest — for Original Source Bias, source Target Audience and Missing Angles; and (4)
> the trend-signal description in the accepted `first_intake` or `reassessment` form. All are
> Chief Editor-supplied assertions at T1. The application neither scrapes nor generates them, and
> T2/T3 remain responsible for source and trend verification.

The same act replaces `source_url` with `source reference` in all four Step 3 locations:
`FN-GATES` §2, §3.1 Required on entry, §3.1 Supply, and storyboard Panel B2. One edit pass prevents
the supply sentence from being rewritten twice.

### Acceptance evidence for Choice A

| Case | Expected result |
|---|---|
| URL or other reviewable reference, exactly one topic, complete structured source analysis, complete first-intake trend section | T1 may complete; supplier and Reporter executor remain separate audit facts |
| Bias, source audience or missing angles genuinely unknown but explicitly recorded as unknown/not assessed | T1 may complete; no false judgment is invented; T2/T3 work remains visible |
| Core Subject missing, no attributed proposition, no subject topic or no common trend field | Named validation failure; T1 does not complete |
| Complete template whose claims have not been investigated | May enter `Logged`; must not display T2/T3 verification or factual assurance |
| URL absent but a reviewable document, claim or statement is supplied | Accepted under `D-121`; no URL-only validation error |

### Priority after the Judge act

1. **Judge accepts A, B or C.** No Step 3 source clause is drafted before this decision.
2. **Lane A performs Step 3 once** across the four named locations, using the accepted definition.
3. **Lane A incorporates the accepted A1 fields into Step 4's complete A4 field matrix.**
4. The existing S5 journey, D1/D3/D4/S10 propagation, independent verification and final Graphify
   synchronization retain their recorded order.

| Verdict | Item | Follow-up |
|---|---|---|
| Approve-with-conditions | `A1` Choice A | Phase 1 — Chief Editor accepts; Lane A drafts one four-location Step 3 edit |
| Defer | `A1` Choice B | Chief Editor chooses only if reduced intake effort is worth missing structured context |
| Reject | `A1` Choice C | Contradicts B-094's structured manual-intake direction |
| Reject | External fact-checking inside A1 or treating explicit unknowns as verified facts | Preserve the T1 versus T2/T3 boundary |

---

## Judge direction on `A1` and `M1`–`M3`; verified substrate consequence

**Judge direction, 2026-09-14:** carry `A1` Choice A and answer `M1`–`M3` as recommended below.
This records the decision for Lane A propagation; it does not itself amend the Register, governed
specifications or schema.

| ID | Accepted answer | Completion evidence |
|---|---|---|
| `A1` | Structured original-artifact analysis with explicit unknowns | The one Step 3 supply sentence uses the accepted definition and all four URL/reference locations agree |
| `M1` | `new_article_brief` is **P — package-required, non-gating** | An absent brief marks the package incomplete but does not refuse T1 |
| `M2` | `.deadline` is **P — package-required, non-gating** | A placeholder or absence marks package incompleteness, never a T1 validation failure |
| `M3` | Attribution is recorded **per `.key_claims` item** | Every item has its own proposition and attribution target; aggregate free text cannot satisfy the rule |

The accepted requiredness vocabulary is:

| Class | Meaning |
|---|---|
| `G` | Missing or empty causes a named T1 validation failure; T1 does not complete |
| `P` | Required for commission-package completeness but does not block T1 |
| `O` | Optional; absence has no gate or package-completeness effect |

### `S12` — the storage gap is confirmed against the applied schema migration

Lane B read both frozen `0001_init.sql` and additive `0002_s1_editorial_schema.sql`. The gap is hard,
not indicative:

- `articles` has `url text not null`, `summary`, `topic_id`, `editorial_angle` and related workflow
  fields, but no structured original-artifact analysis or new-article brief.
- `sources` gains only `reliability_tier` and `ingestion_method` in `0002`; it has no per-article
  bias, audience, missing-angle or claim record.
- `trend_signals` has generic `signal_type`, `signal_value`, `source`, `confidence`, plus
  `evidence_url` and `reviewer_confidence`. It has no assessment mode, baseline/as-of fields,
  newsworthiness rationale or distinct supplier provenance for the selected object.
- `0002` does not relax `articles.url text not null`, although `D-121` permits another reviewable
  reference.

Reusing `articles.summary`, `articles.editorial_angle` or a generic `trend_signals.signal_value`
would make the new contract physically storable only by discarding its meaning. A4 therefore names
a **Lane B data-requirement follow-on** that must represent the five namespaces, G/P/O semantics,
supplier and executor as separate facts, reassessment history, and URL-or-other-reference input.
That consequence authorizes no migration, schema design or build.

### `S13` — Step 1 and Step 4 disagree on two trend-section classes

Lane A's Step 1 draft labels all common trend fields required, including `research_leads`, then its
validation table says empty research leads are permitted. Step 4 correctly classifies
`.research_leads` as `O`. The same matrix makes `.newsworthiness_assessment` `G`, although FR-01
requires a trend-signal description and does not state that a numeric newsworthiness rating blocks
T1.

Apply one consistent rule before Step 5:

| Field | Class | Reason |
|---|---|---|
| `.current_signal_and_why_it_matters_now` | `G` | This is the governed trend-signal description |
| `.assessment_mode`, `.as_of_date` | `G` | Required to interpret and audit the accepted conditional description |
| reassessment-only delta fields | `G` in reassessment; absent in first intake | Define the accepted second-pass form without invented history |
| `.research_leads` | `O` | A lead may not yet exist and is not the T1 description |
| `.newsworthiness_assessment` | `P` | Valuable package context, but no current requirement makes its rating a T1 gate |

Making `.newsworthiness_assessment` `G` requires a separate Register act that explicitly changes
the gate; it cannot enter through the field matrix. This correction preserves the selected template
while preventing an unapproved gate condition.

### Naming rule and Step 5 readiness

`new_article_brief.unique_angle` remains namespaced commission intent supplied at T1.
`articles.editorial_angle` remains the Investigator's T3 result. A T1-supplied field and a
T3-derived field never share a storage name or verification status.

Lane A may draft Step 5 after it incorporates `M1`–`M3` and the decision-free `S13` correction. The
same-article journey must prove separately that:

1. a P-class missing brief/deadline does not block T1 but leaves the package incomplete;
2. every G field is present and the Reporter executes T1;
3. T2/T3 verification changes evidence status without rewriting the Chief Editor's intake record;
4. the returned article enters reassessment, preserves the first assessment, and reaches LinkedIn
   `ManualReady` only after the governed review path; and
5. no field is claimed implemented until the later Lane B data requirement is authorized and
   verified against real persistence.

| Verdict | Item | Follow-up |
|---|---|---|
| Approve | `A1` Choice A and `M1`–`M3` as recorded | Phase 1 — Lane A incorporates them into Steps 3–5 |
| Approve-with-conditions | Step 4 field matrix | Phase 1 — correct `S13` and carry the verified `S12` data requirement |
| Approve-with-conditions | Step 5 same-article journey | Phase 1 — prove G/P/O behavior and T1 versus T2/T3 provenance separately |
| Reject | Reusing generic summary, angle, confidence or signal text as proof the structured contract is supported | A named, reviewable data requirement must precede later schema authorization |
| Reject | Making newsworthiness rating T1-gating through A4 | Requires a separate Register act |
| Defer | Schema design, migration and code | Lane B implementation phase after explicit authorization |

---

## Judge direction — separate state management, editorial metadata and explainable reports

**Judge direction, 2026-09-14:** state-machine facts are individual fields and append-only events;
descriptive editorial and explainable-content metadata is stored as a versioned JSON object
(`jsonb` in the current PostgreSQL stack, or the equivalent structured type in another approved
database). Lane B records this as the raiser. Lane A answers it through the governed specification
set. This direction authorizes documentation alignment only; it does not authorize a schema,
migration, application or publication action.

### `S14` — parent decision: one authoritative location per kind of fact

The prior artifacts already contain three different concepts. They must remain different:

| Kind of fact | Authoritative shape | Existing evidence | Rule for the A4 write set |
|---|---|---|---|
| **Current workflow state** | One typed scalar field on the article | `articles.workflow_state`; transition trigger and `SPECS-TRANSITION-ENFORCEMENT` | A state command may change this field only through the governed transition transaction |
| **State history and publication recovery** | Append-only typed events with individual actor, gate, line, reason, target, status and time fields | `workflow_transitions`, `publication_targets`, `publications` | Do not place an authoritative workflow or publication state inside JSON metadata |
| **Working editorial metadata** | A separately identified, versioned and append-only package whose payload is structured JSONB | **Absent from `0001` and `0002`**; this is the data requirement identified by `S12` | Preserve intake and reassessment as separate versions; never overwrite the earlier package |
| **Frozen explainable report** | Insert-only report record with a schema/template version, transition anchor and JSONB snapshot | `editorial_reports` already has `template_version`, `judgment_rule_version`, `schema_version`, `snapshot jsonb`, `supersedes_report_id` and append-only enforcement | Treat the snapshot as evidence/output, not as the editable working metadata store |

This boundary follows the Chief Editor's reason for individual state fields: a state transition must
not require a generic metadata rewrite and must not risk changing unrelated editorial content. The
reverse is equally binding: editing descriptive metadata must not change lifecycle state.

PostgreSQL JSONB is the v1 physical direction because Supabase/PostgreSQL is the provisioned stack.
The reference to equivalent JSON/document fields in other databases is portability guidance only;
it does not reopen the v1 stack.

### Parent accept/reject decision

| Choice | Design | Consequence | Judge disposition |
|---|---|---|---|
| **A — separated state, versioned metadata, frozen report** | Typed current state plus append-only transition/publication facts; a separate versioned JSONB editorial package; an immutable, allowlisted report projection | Preserves transactional enforcement, intake history and reproducible public explanation | **Accept — Judge direction** |
| B — one mutable JSONB object on `articles` | Store workflow, editorial fields and report material together | A generic update can change unrelated facts; reassessment overwrites intake; database transition constraints become ambiguous | **Reject** |
| C — use `editorial_reports.snapshot` as the working record | Edit by creating successive reports throughout drafting | Conflates an editable commission with frozen evidence and gives ordinary metadata edits report semantics | **Reject** |
| D — duplicate authoritative state in scalar columns and JSONB | Keep a scalar for enforcement and a JSON copy for display | Creates two answers to the same question and an unavoidable drift condition | **Reject** |

Children `S15` and `S16` depend on Choice A. Lane A does not draft either child around a different
parent model.

### `S15` — child data contract for versioned editorial metadata

Lane A specifies a logical editorial-package record before asking Lane B for a physical schema.
Names remain specification choices, but the contract must contain these facts:

| Record part | Minimum contract |
|---|---|
| Identity and ownership | package id, article id, package version, schema/template version |
| Provenance | supplied-by identity, supplied-at/as-of time, and a distinct executor/transition reference where applicable |
| History | predecessor/supersedes reference, creation time and integrity checksum or equivalent tamper evidence |
| Structured payload | the namespaced `original_artifact_analysis`, `trend_signal_update` and `new_article_brief` objects accepted in A4 |
| Validation | G/P/O classification applied against the named schema version; explicit unknown values preserved; per-claim attribution validated per item |
| Separation | no authoritative workflow state, publication status, transition actor or transition reason inside the payload |

The first-intake package and later reassessment package are two retrievable versions. Verification
at T2/T3 may add attributed evidence or produce a later version, but it does not rewrite what the
Chief Editor supplied at T1. High-value values needed for constraints, joins, access control or
routine indexing may remain typed columns even when related to the package; JSONB is not authority
to hide operational keys from the database.

### `S16` — child explainability and report boundary

The public explainable output is an allowlisted projection, never a raw dump of the working JSONB
payload. Lane A defines which schema fields are `internal` and which may appear in
`public_explainable` output, and the report template reads only the latter plus accepted evidence.
Each frozen report must identify:

- the exact editorial-package version and integrity value from which it was produced;
- its existing `as_at_transition_id`, template, judgment-rule and schema versions;
- the source/evidence attribution needed to distinguish supplied assertions from T2/T3-verified
  findings; and
- the applicable manual-ready delivery target without treating delivery state as report metadata.

A later metadata version or state transition must not mutate an earlier report. Correction produces
a new report linked by `supersedes_report_id`, preserving the earlier record.

### Cross-artifact write-set review for Lane A

Apply the parent meaning first, then propagate its children without duplicating authority:

| Order | Artifact owner | Required alignment | Completion evidence |
|---:|---|---|---|
| 1 | `Modular_PRD.md` | Define the product-level distinction among state, editorial package and frozen report; place the package in the applicable feature group and preserve T1 versus T2/T3 attribution | Requirements and acceptance criteria name one authority for each fact and carry `[V1]` marking correctly |
| 2 | Functional specs | Define package behaviour, G/P/O validation, version creation, reassessment and report generation; keep UI and physical schema out | Normal and revision paths state what is inserted, what is unchanged and what blocks a gate |
| 3 | `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` story panels | Show the Chief Editor entering a manual URL/Markdown or other reviewable reference, completing first intake, receiving a return, creating reassessment and reaching LinkedIn `ManualReady` | One article demonstrates both paths with no scrape, hidden state change or overwritten intake |
| 4 | The storyboard's Mermaid sequence/UML views | Keep state-machine nodes and transition events typed; model the editorial package and report as associated, versioned records rather than states | Cardinality and immutability distinguish article 1→many packages, transitions and reports |
| 5 | The storyboard's Mermaid data-flow views | Separate `update editorial package`, `execute transition`, `generate report` and `record publication event` into distinct commands/transactions | Every arrow names its store, authority, provenance and failure outcome |
| 6 | Encyclopedia | Update Entry 06 for manual intake and Entry 03 for newsworthiness; add or update the state-versus-metadata term where its canonical entry belongs | No entry equates descriptive metadata with gate authority or public visibility |
| 7 | Cross-reference and traceability map | Link the accepted requirement, behaviour, data candidate and tests without copying status or decision text | Each link resolves in both directions; no orphan requirement or duplicated state authority |
| 8 | `docs/v1/` tracking trio | Register the Judge act; add scope/sequence/DoD and affected artifact facts in the same pass under `D-54` | Register, build spec and inventory agree; `Modular_PRD` §8 changes only if the applicable tier closes or opens |

### `S17` — UML, data flow and story panels currently share one artifact

The repository inventory exposes no standalone UML, data-flow or story-panel document. The current
owner is the single storyboard above: Panels A2/A5 are Mermaid sequence diagrams; Panels B7 and §3
are Mermaid flowcharts. Lane A therefore updates or annotates those views in the same bounded
storyboard write set unless the Register deliberately creates a separate artifact and propagates
that fact under `D-54`.

Two current storyboard claims also require correction in this same owner:

- Panel B7 says no report entity exists and §4 repeats that absence. `0002` now creates
  `editorial_reports` with a versioned JSONB snapshot and append-only enforcement; both claims are
  historical, not current build input.
- Panel A2's sequence still depicts state-bearing article creation before its transition evidence
  while its own supersession note says the transition must precede the state change. The revised
  view must show a single transaction and must keep editorial-package creation distinct from the
  transition command.

Creating three new documents for three requested view names would duplicate one current owner and
increase drift. Lane A may recommend that split only with a specific reuse or verification benefit,
an inventory decision and cross-reference changes.

### Lane A follow-up — parent before children

1. **Record the parent Judge act (`S14`).** State the three authorities and the rejected
   alternatives in the Register; identify the affected tier before editing a derived artifact.
2. **Produce the exact governed write set.** Diff the current `Modular_PRD`, functional specs, the
   storyboard's panels and Mermaid UML/data-flow views, Encyclopedia and cross-reference owners.
   Apply `S17`; do not create duplicate view files without a Register and inventory decision.
3. **Specify the working package (`S15`).** Carry A1, M1–M3 and S13 into one versioned logical
   contract. Mark physical table/index/RLS choices as later `SPECS` candidates for Lane B.
4. **Specify the report boundary (`S16`).** Define the public allowlist, exact package-version
   anchor and correction/supersession behaviour. Preserve the existing report transition anchor.
5. **Walk one article with the Chief Editor.** Use the supplied LinkedIn example: manual URL and
   Markdown intake; first-intake package; T2/T3 evidence; return for the observability-versus-
   observation conflation; reassessment; revision; resubmission; LinkedIn `ManualReady` output.
6. **Run construction-readiness checks.** Trace every required write to a logical owner and every
   acceptance example to a future executable test. Flag any unanswered access, ownership,
   visibility or retention choice rather than embedding a default.
7. **Present one reviewable packet to the Judge.** The Judge accepts or rejects the exact write set
   and acceptance examples. The present direction does not authorize applying that packet.
8. **After authorization, apply in dependency order and obtain independent verification.** Apply
   the tracking trio in the same pass required by `D-54`; record explicitly which tiers are
   unaffected.
9. **Synchronize Graphify last.** Rebuild after the final tracked edit, restore curated B-094/B-095
   coverage, prove analyzed-head equality and run the complete local consistency suite.

### Construction and verification evidence required before Lane B implementation

| Evidence | Pass condition |
|---|---|
| Metadata-only update | A new package version is created; `articles.workflow_state`, transition count and publication status are unchanged |
| State transition | One legal transition event and the typed current-state update commit atomically; package version and checksum are unchanged |
| Concurrent/stale transition | The existing row-lock and transition guards refuse a second transition from the stale state |
| First intake then reassessment | Both package versions remain retrievable and attributable; the reassessment delta does not invent a baseline for first intake |
| G/P/O validation | Missing G refuses T1; missing P marks package incomplete without refusing T1; absent O has no gate or completeness effect |
| Non-URL source | A manually supplied Markdown/document/other reviewable reference persists without scraping and without a URL-only error |
| Frozen report | It resolves to the exact package version and transition anchor; later package/state changes leave its snapshot unchanged |
| Public projection | Only allowlisted explainable fields appear; internal notes, operational state and credentials are absent |
| Report correction | A new immutable report supersedes the prior record; no update or delete of the prior snapshot succeeds |
| Recovery | A failed manual-ready/publication action records an append-only outcome and can be retried without changing editorial metadata or fabricating delivery success |

Effort and capacity remain unconfirmed. Lane A should estimate the exact write set after resolving
the current artifact owners; Lane B estimates schema and application work only after the accepted
spec names the logical record, transaction boundaries, access rules and tests. This keeps a
documentation estimate from being mistaken for implementation or release readiness.

| Verdict | Item | Follow-up |
|---|---|---|
| Approve | `S14` state/metadata/report separation | Phase 1 — Lane A records the parent Judge act before dependent drafting |
| Approve-with-conditions | `S15` versioned editorial-package contract | Phase 1 — exact field matrix, provenance, G/P/O validation and history semantics required |
| Approve-with-conditions | `S16` public explainable report projection | Phase 1 — allowlist plus package-version and transition anchors required |
| Approve-with-conditions | `S17` shared storyboard/UML/data-flow owner | Phase 1 — correct both stale report-absence claims and the A2 transaction view in the existing artifact |
| Approve-with-conditions | Same-article Chief Editor walkthrough | Phase 1 — prove normal and observability-versus-observation revision paths through LinkedIn `ManualReady` |
| Reject | Authoritative state inside JSONB, duplicated state, mutable intake history or raw JSON exposure | Phase 1 — these violate the accepted parent boundary |
| Defer | Physical schema, migration, application code and external publication action | Lane B implementation phase after exact specification and build authorization |
