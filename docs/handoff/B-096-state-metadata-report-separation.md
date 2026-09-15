# B-096 — state, editorial metadata and explainable report are three authorities, and the governed set represents one

- **Raised:** 2026-09-14 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** Lane A's specification of the versioned editorial-metadata package and the report projection; no schema, migration, application code, publication or lane transition is authorized
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-15 at read commit `e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6`.**
  Receipt and bounded `GA1` disposition only. Direct read of
  `supabase/migrations/0002_s1_editorial_schema.sql:459-522` confirms `editorial_reports` is
  append-only, one row per article/transition pair (`as_at_transition_id`), holding
  `template_version`, `judgment_rule_version`, `schema_version` and a `snapshot jsonb`, with no
  column naming an artifact kind, type or client delivery target. For planning, `GA1` is answered:
  the table models transition-anchored explainability snapshots and does not model the
  client-facing artifact set as governed deliverables. `S17` wording may be drafted; application to
  Panel B7 and §4 remains held pending the exact authorized write set. `S15` then `S16` may be
  drafted as logical contracts; physical schema stays Lane B's surface. The parent act (Choice A:
  separated state, versioned metadata, frozen report) is recorded as Chief Editor direction,
  2026-09-14, in conversation, with B, C and D rejected as B-096 states. No migration, application
  or publication act is authorized by this acknowledgement.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6

  **Correction, 2026-09-15 (B-100).** The disposition above previously read "two independent reads."
  Two actors (this session and Lane B, in B-099) corroborated the same schema reading, which is
  **two-actor corroboration, not independent verification** under `D-102`/`D-205` — neither actor is
  outside the raising/answering pair. The GA1 planning question is `Answered` on that corroborated
  basis; no applied specification is `Verified`. The audit anchor above is also advanced from
  `76a0ea2` to the commit read for this correction, per `D-214`.
- **Evidence:** B-095 `S12` and `S14`–`S17` at `76a0ea2`; `Modular_PRD` `TR-DM-01`…`TR-DM-06`; `docs/DATA_MODEL.md`; `FN-GATES-01-05.md` §3.1 and §3.2; `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panels A2, B7 and §4; Chief Editor direction given in conversation, 2026-09-14.

## What happened

**Split from B-095, by Chief Editor direction of 2026-09-14.** B-095 is an `A4` write-set defect:
`D1`–`D4` name four governed documents that contradict themselves on manual intake. `S14`–`S17`
are a different parent — how three kinds of fact are separated in the data model and its consuming
documents. Two parents in one entry meant B-095 could not close until the architecture work closed,
and the channel's own rule is one bounded concern per entry, split when scope or ownership differs.

**B-095 keeps `D1`–`D4`, `E1`, `S1`–`S13` and the `A1`/`M1`–`M3` packets. This entry takes
`S14`–`S17`.** Nothing is restated in both.

### Provenance of the parent direction, corrected rather than backdated

B-095 recorded a *"Judge direction, 2026-09-14"* for the separation model **before that direction
had a stated locus**. The Chief Editor has now given it directly, in conversation on 2026-09-14,
and it is recorded here with that locus.

**It stands from 2026-09-14 forward and is not retroactive.** Drafts produced before it are not
retrospectively conformant or non-conformant; they are simply earlier. The record says where the
act happened rather than asserting one that had not yet occurred, which is the difference between
an answer that ages and an answer that goes silently false.

## The parent decision — one authoritative location per kind of fact

| Kind of fact | Authoritative shape | Existing evidence | Rule for the write set |
|---|---|---|---|
| **Current workflow state** | One typed scalar field on the article | `articles.workflow_state`; the transition trigger; `SPECS-TRANSITION-ENFORCEMENT` | Changed only through the governed transition transaction |
| **State history and publication recovery** | Append-only typed events with individual actor, gate, line, reason, target, status and time fields | `workflow_transitions`, `publication_targets`, `publications` | No authoritative workflow or publication state inside JSON metadata |
| **Working editorial metadata** | A separately identified, versioned, append-only package with a structured payload | **Absent.** This is the data requirement `S12` identified | Intake and reassessment are separate versions; an earlier package is never overwritten |
| **Frozen explainable report** | Insert-only record with schema and template version, transition anchor and a snapshot | `editorial_reports` **as reported by Lane B's read of `0002`** — see the blocking check below | Evidence and output, never the editable working store |

**The reason both directions bind.** A state transition must not require a generic metadata rewrite
and must not risk changing unrelated editorial content. Equally: editing descriptive metadata must
not change lifecycle state.

**Physical direction.** PostgreSQL JSONB, because Supabase and PostgreSQL are the provisioned
stack. Equivalent structured types in other databases are portability guidance and do not reopen
the v1 stack choice.

| Choice | Disposition |
|---|---|
| **A — separated state, versioned metadata, frozen report** | **Accepted**, Chief Editor, 2026-09-14 |
| B — one mutable JSON object on `articles` | Rejected. A generic update can change unrelated facts; reassessment overwrites intake |
| C — the report snapshot as the working record | Rejected. Conflates an editable commission with frozen evidence |
| D — authoritative state duplicated in a scalar and in JSON | Rejected. Two answers to one question, and an unavoidable drift condition |

`S15` and `S16` depend on Choice A and are not drafted against a different parent model.

## Blocking check before `S17` corrects the storyboard

B-095 `S17` proposes correcting two storyboard claims: *"Panel B7 says no report entity exists and
§4 repeats that absence"*, on the grounds that `0002` creates `editorial_reports`.

**That correction is held until one question is answered, because the two may not be the same
entity.** `GA1` is about the **fifteen client-facing artifacts** — *"every box above is a manual
folder convention … no report entity exists"* — and an `editorial_reports` table built to hold an
**explainability snapshot anchored to a transition** is a different thing with a different purpose.

| If | Then |
|---|---|
| `editorial_reports` stores the client-facing report artifacts `GA1` names | `GA1` is genuinely obsolete and `S17`'s correction stands |
| `editorial_reports` stores explainability snapshots only | **`GA1` still holds.** Correcting Panel B7 and §4 would close a true gap on the strength of a differently-purposed table |

**Marking a true statement obsolete is worse than leaving it stale**, because nothing downstream
re-opens it. Lane A reads `0002`'s `editorial_reports` definition and answers this before touching
either claim.

**Evidence status, historical at `76a0ea2`.** `S12` and the `editorial_reports` column list were
**Lane B's read of `0001` and `0002`** alone; no second actor had confirmed them at that commit. By
`E1`'s own rule that was a record, not independent confirmation, enough to plan against and not to
close on. **Superseded 2026-09-15:** this session's own direct read of `0002:459-522` (see the Lane
A field above) corroborates the same column list. Per the correction above, that is two-actor
corroboration, not independent verification under `D-102`/`D-205`; `GA1` stays `Answered` for
planning only, and no applied specification is `Verified`.

## Children

| ID | Child | Open condition |
|---|---|---|
| `S15` | Versioned editorial-metadata package | The exact logical contract: identity, version ordering, what a reassessment appends, what is never mutated |
| `S16` | Explainable report projection | The visibility allowlist and the transition anchor. No descriptive metadata field is publicly visible by default |
| `S17` | UML, data flow and story panels share one storyboard artifact | Repair the existing views in place. **No new artifact** unless the Register creates one and propagates under `D-54` |

**`S17`'s inventory finding is confirmed and is not a defect.** The repository has no standalone
UML, data-flow or story-panel document; Panels A2 and A5 are Mermaid sequence views and Panel B7
and §3 are Mermaid flowcharts. Creating three documents for three requested view names would
duplicate one owner and manufacture drift. Panel A2's ordering defect — state-bearing creation
drawn before its transition evidence, contradicting the panel's own note — is repaired in that
same owner.

## Child dispositions — 2026-09-15, Lane A

Per `D-204`, header fields describe the whole entry; child state lives here. The whole entry stays
`Open` until the weakest child closes.

| Child | Disposition | Evidence |
|---|---|---|
| `GA1` blocking check | **Answered** (planning level, two-actor corroborated, not `Verified`) | `supabase/migrations/0002_s1_editorial_schema.sql:459-522`; B-099 |
| `S15` — versioned editorial-metadata package | **Open** — logical contract not yet drafted | — |
| `S16` — explainable report projection | **Open** — logical contract not yet drafted | — |
| `S17` — storyboard correction (Panel B7, §4) | **Held** — wording may be drafted; application needs the exact authorized write set | Blocked on Chief Editor accepting the A4/write-set packet |

## What you need

1. **Lane A acknowledges this entry** and records the parent act in the Register with its locus and
   date, naming the three rejected alternatives.
2. **Lane A answers the `GA1` blocking check** from `0002` before `S17` touches Panel B7 or §4.
3. **Lane A specifies `S15`, then `S16`**, parent before children, as logical contracts. Physical
   schema is Lane B's surface (`D-56`) and is specified-not-applied.
4. **The data requirement is carried as a named Lane B follow-on** against `TR-DM-01` and
   `TR-DM-04`. It authorizes no migration.
5. **Graphify last**, after the final tracked correction, together with B-094 and B-095.

## What you did instead

Recorded the split and the parent act with its locus. Did not edit a governed document, draft
schema, run or synchronize Graphify, change a lifecycle state, or correct the storyboard's `GA1`
claims while the blocking check is open.

| Verdict | Item | Follow-up |
|---|---|---|
| Approve | Choice A: separated state, versioned metadata, frozen report | Phase 1 — Register act with locus and date |
| Approve | `S17`'s inventory finding: one artifact owns all three view kinds | Phase 1 — repair in place, no new artifact |
| Approve-with-conditions | `S15`, `S16` | Phase 1 — logical contract only; physical schema stays Lane B's |
| **Hold** | `S17`'s correction of Panel B7 and §4 | `GA1` Answered for planning; application held for the Chief Editor-accepted `A4` exact write set |
| Reject | Treating `S12`'s schema read as independently confirmed | `E1` applies; a record is not a confirmation |
| Reject | Any migration, application or publication act from this entry | Later authorization remains required |
| Defer | Graphify synchronization | After the final tracked correction |
