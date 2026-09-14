# B-095 — B-084 `A4`: three governed-document contradictions and one unmarked stale ledger entry

- **Raised:** 2026-09-14 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** B-084 `A4` — Lane A cannot produce a reviewable exact write set while four of its named targets state contradictory or stale current behaviour; no build, checker, database, publication or lane transition
- **Status:** Open
- **Lane A:** — awaiting Lane A acknowledgement
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** 76007803987814b6cd1cabc8dab10cddcb905e59
- **Evidence:** Read at `7600780` of `docs/Modular_PRD.md` §7.1; `docs/fn-specs/FN-GATES-01-05.md` §2 requirement table and §3.1; `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panel A2, Panel B2 and §4; `docs/governance/requirements-traceability-map.md` §4, §7; `docs/ENCYCLOPEDIA-SYNC.md` per-entry citation map. Graph currency read from `.graphify/branch.json`.

## What happened

B-095 was first presented in Lane A's report as a proposed Lane B entry. Lane B independently read
the named owners at `7600780`, verified each finding below and adopts this file as its own handoff.
The Lane A draft was review input; this independent review is the act that raises the entry and
preserves the B-series attribution boundary.

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

**This is the B-084 `A1` contradiction surfaced in governed text.** The later Chief Editor sample
settles its structural direction: a bare source reference is not the demonstrated full intake;
manual intake combines the reference with an original-artifact analysis and a new-article brief.
The remaining `A4` choice is field requiredness. Lane A must present one mandatory/optional matrix
instead of assuming every example field is required or collapsing the package back to a URL.

The matrix must preserve these distinct classes:

| Class | Example from the supplied package | Required treatment |
|---|---|---|
| Source evidence | source reference; attributed key claims/data | Preserve attribution; do not turn extraction failure into invented metadata |
| Editorial observation | source-bias assessment; missing angles | Label as Chief Editor analysis, not a source fact |
| Editorial hypothesis / commission intent | “transaction collapse”; proposed angle and objective | Preserve as a proposition to investigate and draft, not a verified conclusion |
| Research lead | candidate statistics, interviews, papers and historical comparisons | Remain unverified until the investigation gate supplies evidence |
| Commission metadata | word-count target and deadline | Optional unless the Chief Editor explicitly makes either field mandatory in `A4` |

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

## What you need

Acknowledgement, then this order. It is parent-before-dependent and no step may be merged with the
one above it.

1. **Lane A drafts the `A4` mandatory/optional field matrix.** It uses the supplied two-object
   structure and the epistemic classes above; it does not treat the sample as self-authorizing
   every field.
2. **Lane A drafts the `A4` diff for `D1`, `D3` and `D4`**, which do not depend on field
   requiredness.
3. **Lane A drafts `D2` as one structural wording across both documents**—manual source reference
   plus structured analysis/brief—then presents the field matrix and clause text together for the
   Chief Editor's accept/reject decision. `FN-GATES` §2 and `Modular_PRD` §7.1 must not disagree.
4. **No new identifier and no new artifact.** Every changed clause traces to B-084; the frozen
   `PRD.md` and Charter remain unchanged.
5. **Graphify synchronization stays last**, per B-094's follow-up step 8. At this commit
   `.graphify/branch.json` records `lastAnalyzedHead: f63d6eb` against HEAD `7600780`, and neither
   B-094 nor this entry has a curated fragment, so `docs-drift` and `graph-coverage` are both
   expected red until that step runs after the final tracked correction.

## What you did instead

Read the four named owners at `7600780` and recorded what they currently state. Did not edit any
governed document, did not draft clause text, did not build, did not run or synchronize Graphify,
did not select a lane, and did not change any lifecycle state.

| Verdict | Item | Follow-up |
|---|---|---|
| Approve | `D1`, `D3`, `D4` as correctable now, independently of `A1` | Phase 1 — inside B-084's `A4` diff |
| Approve-with-conditions | `D2` structural direction | Phase 1 — Lane A drafts the mandatory/optional field matrix and exact clause for Chief Editor acceptance |
| Reject | Treating the sample as proof that every field is mandatory, or merging source facts, editorial observations, hypotheses and research leads | B-094/B-095 acceptance evidence must preserve field requiredness and epistemic class |
| Defer | Graphify synchronization and its curated fragments | After the final tracked correction, per B-094 step 8 |
