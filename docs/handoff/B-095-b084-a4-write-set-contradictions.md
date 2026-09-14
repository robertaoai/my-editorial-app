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
- **Evidence:** Read at `7600780` of `docs/Modular_PRD.md` §7.1; `docs/fn-specs/FN-GATES-01-05.md` §2 requirement table and §3.1; `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panel A2, Panel B2 and §4; `docs/governance/requirements-traceability-map.md` §4, §7; `docs/ENCYCLOPEDIA-SYNC.md` per-entry citation map. Graph currency read from `.graphify/branch.json`.

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

### `S1` — the sample omits the T1-required trend-signal description

`Modular_PRD` §7.1 `FR-01`, `FN-GATES` §3.1 and Addendum §3.1 all require a Chief Editor-supplied
trend-signal description. `FN-GATES` §6 says an absent or empty value prevents T1 completion.
`ORIGINAL ARTIFACT ANALYSIS.md` contains no field with that name or an unambiguous equivalent.
`Core Subject` describes what the source is about; `Unique Angle` states the commissioned thesis.
Neither should be silently reclassified as evidence of why the subject is currently moving.

| Judge choice | Result | Recommendation |
|---|---|---|
| **Accept — add an explicit `Trend-signal description` field to the demonstrated intake structure** | Preserves the decided T1 contract and makes the supplied package gate-complete when filled | **Recommended** |
| Reject — infer the value from `Core Subject`, `Unique Angle` or another prose field | Conflates subject, commission intent and trend evidence; produces no stable validation rule | Reject |
| Reject — relax the T1 requirement from this sample | Reopens a decided contract through an example rather than a Register act | Reject |

Until the Chief Editor accepts the first choice or names another explicit mapping, the sample is a
**partial demonstrated package** and cannot be the source of the final `A4` field matrix.

### `S2`–`S5` — remaining sample ambiguities

| ID | Finding | Proposed correction for Chief Editor accept/reject | Failure if left unresolved |
|---|---|---|---|
| `S2` | `Target Audience` labels both an assessment of the source article and the commissioned article's intended audience | **Accept:** rename them `Source audience assessment` and `Commission target audience` | One label stores two epistemic classes and cannot be tested consistently |
| `S3` | `Original Source/URL` names LinkedIn Pulse and Forbes but contains no URL and does not distinguish host, publisher or reference | **Accept:** use `Source reference` for the manually supplied locator and separate optional publication/attribution text; do not require a URL when another reference is valid | A non-URL reference fails a field called URL, or two publications are silently treated as one identity |
| `S4` | `Deadline` is an unfilled template placeholder | **Accept:** classify the sample as partial and keep deadline optional commission metadata unless the Chief Editor explicitly requires it | A placeholder is accepted as real data or is mistaken for proof of requiredness |
| `S5` | Intake structure and revision evidence concern different articles | **Accept:** use them as two bounded evidence sources, then draft one same-article normal-and-revision acceptance example before A4 approval | Neither sample demonstrates the required end-to-end journey for one article |

The claims and statistics inside the sample remain unverified research inputs. This handoff checks
the package structure only; it does not validate article attribution, quoted figures or the
“transaction collapse” thesis.

## What you need

Use this parent-before-dependent order:

1. **Correct the evidence status.** Treat B-095 as the finding record and retain an empty
   `Verified-By` until an eligible second actor reviews the applied correction.
2. **Chief Editor decides `S1`.** Accept the explicit trend-signal field (recommended), or name a
   different explicit field and meaning. Do not infer it from subject or angle.
3. **Lane A drafts `D2a`.** Replace URL-only wording with the already decided URL-or-other-reference
   package boundary in `FN-GATES` §2 and storyboard Panel B2.
4. **Lane A drafts `D2b` with `S2`–`S4`.** Present one required/optional field matrix, with distinct
   names for source evidence, source assessment, commission intent and commission metadata.
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
| Approve-with-conditions | `D2b` field matrix and `S2`–`S4` corrections | Phase 1 — after the Chief Editor resolves `S1` |
| Approve-with-conditions | `S5` paired evidence | Phase 1 — Lane A drafts one same-article normal/revision acceptance example |
| Reject | Calling B-095 independent confirmation, calling the sample complete, or inferring the trend signal from subject/angle | Preserve evidence status and the T1 contract |
| Defer | Graphify synchronization and its curated fragments | After the final tracked correction, per B-094 step 8 |
