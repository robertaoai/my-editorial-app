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

## Appended 2026-09-14, read at `f30c07b` — three further findings

Appended by the raiser after `7600780..f30c07b` was authorized by the Judge and pushed; upstream
and `HEAD` both confirmed at `f30c07b`. Everything above stands as written. `S9`–`S11` are new and
do not restate `S1`–`S8`.

### `S9` — the two evidence samples are both live and they disagree on three claims

B-094's evidence table carries `37B96151…FCD945` as a representative manual-input package and
`18E9A66C…B2DBB7` as the selected replacement template. **Neither row is marked superseded**, so the
corpus currently records two live versions of the same package. Three claims differ between them,
and one differs *inside* the newer sample:

| Claim | Earlier sample | Updated sample |
|---|---|---|
| Training-gap denominator | *"only 14% of **workers** receive formal AI training"* | *"Focaldata April 2026 benchmark of 14% of **firms**"* |
| Effect magnitude | *"the 8-15**%** hiring uplift"* | *"lift interview invitation rates 8–15 **percentage points**"* |
| Outcome measured | *"hiring uplift"* | *"interview invitation rates"* in the trend section, while the same document's brief still reads *"8–15 pp **hiring uplift**"* |

Workers and firms are different denominators. Percent and percentage points are different
magnitudes. Hiring and interview invitation are different outcomes. **Every one of these is the
silent reclassification the epistemic-class matrix in `D2` exists to prevent, occurring inside the
evidence that defines the matrix.** Whether any figure is true is not the point and is not
assessed here; both remain unverified research leads under `S7`.

**Correction sought, for Chief Editor accept or reject:**

1. Mark the earlier sample **superseded for current use** by the updated template in B-094's
   evidence table, keeping it as dated history rather than a second live package.
2. Reconcile the updated sample's internal hiring-versus-invitation split before it is cited in
   `A4`. One document may not state both.
3. `A4` records that a research lead carries its **denominator, magnitude unit and outcome
   measure**, so a later restatement that changes any of them is a new lead and not the same one.

**Anchor status.** `37B96151…FCD945` was recomputed against the supplied file and matched exactly.
`18E9A66C…B2DBB7` is **asserted and unverified**: the file is not in the repository working tree
and its exact bytes were not available to the reviewer. Recorded as a distinction, not assumed away.

### `S10` — Encyclopedia propagation stops at Entry 06 and Entry 03 is now affected

`ENCYCLOPEDIA-SYNC.md` Entry 03 is *"Newsworthiness vs. trend score vs. editorial priority"*,
depending on `blueprint` §11.3, `media-industry-sop-fallback-implementation-plan` §6.1,
`Modular_PRD` (`NG-10`, the `CR-06`/`FB-06` disposition, §2.5.1) and `D-148`, last verified at
`f7b3aea`.

`S8` introduces a manual newsworthiness assessment into the intake template and requires it be kept
separate from the computed `trend_score`. **That is Entry 03's subject matter exactly.** B-084 `A4`'s
write set currently names only *"Encyclopedia Entry 06 stale note"*.

`D4` already established that an unmarked stale entry is the defect and that Entry 05 carries the
ledger's own convention for marking one. **Entry 03 joins Entry 06 in the `A4` write set**, or the
`A4` packet repeats `D4` one entry over.

### `S11` — the section that resolves `S1` has no defined first-intake content

The `TREND-SIGNAL UPDATE` section is headed *"Baseline April 2026 → Current September 2026"* and its
sub-fields are *What held*, *What accelerated or mutated* and *What weakened or was overstated*.
Each is a **delta from a prior analysis**. The supplied sample fills them only because it is a
second pass over an artifact already analysed once.

**An article entering `T1` for the first time has no baseline**, so on the normal case the field
that closes `S1` has no defined content. `S1` is therefore **addressed and not yet resolved**, and
this note corrects `S1`'s heading above rather than replacing it.

**Correction sought, for Chief Editor accept or reject. Either is sufficient; neither may be
skipped:**

- `A4` names the **single sub-field that carries the `T1` trend-signal description** on a first
  intake, with the delta sub-fields marked first-intake-optional; **or**
- `A4` defines a **first-intake form** of the section whose sub-fields do not presuppose a baseline.

**`S5`'s acceptance example is the proof.** The one same-article journey it already requires must
show this section filled **at first intake**, not only at re-assessment. An example that starts
from an already-analysed artifact demonstrates the second pass and leaves the first unproven.

### Revised sequence, replacing nothing above

`S9`, `S10` and `S11` enter the same bounded B-084 `A4` review packet already described. Their
ordering inside it:

1. `S11` first. It governs whether the `T1` field is fillable, and `A4`'s field matrix depends on
   the answer.
2. `S9` before any `A4` clause cites either sample, so the packet cites one live package.
3. `S10` alongside `D4`, as one Encyclopedia propagation act covering Entries 03 and 06.
4. Graphify last, unchanged. `.graphify/branch.json` still records `lastAnalyzedHead: f63d6eb`
   while the tracked branch is at `f30c07b`, and neither B-094 nor B-095 has a curated fragment.

| Verdict | Item | Follow-up |
|---|---|---|
| Approve | `S9` correction: supersede the earlier sample, reconcile the newer one's internal split | Phase 1 — before `A4` cites either |
| Approve | `S10`: Entry 03 joins Entry 06 in the `A4` write set | Phase 1 — one propagation act with `D4` |
| Approve-with-conditions | `S11`: `S1` reclassified from resolved to addressed | Phase 1 — `A4` names the first-intake form or the carrying sub-field |
| Reject | Citing either sample in `A4` while both rows are live and unmarked | Two live versions of one package is the `G55` restatement shape |
| Reject | An `S5` example that demonstrates only the re-assessment pass | First intake is the normal case and is the one unproven |
