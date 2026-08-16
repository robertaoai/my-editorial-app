# Governing source documents

Verbatim copies of the project's governing documents, committed so that the line-number
citations used throughout `docs/journal/` are checkable in-repo rather than against files
that live only on one machine. Consistent with the project's standing rule: a citation with a
line number is a model of verification, not verification.

**These files are read-only references. Do not edit them here.** They are copies. Changes are
made in the source documents by their owner and re-copied; editing the copy would silently
fork the governing text from the text everyone else is citing.

## Precedence

Project Charter > V1 Build Readiness Addendum > Blueprint > Business Case.

Stated identically in all three documents present here: Addendum v1.4 line 13, Blueprint v1.3
line 5, Business Case v2.2 line 5.

## What is here

| File | Document | Version | Lines |
|---|---|---|---|
| — | **Project Charter** | v1 | **NOT SUPPLIED — see below** |
| `v1-build-readiness-addendum-v1.4.md` | V1 Build Readiness Addendum | v1.4 | 769 |
| `blueprint-v1.3.md` | Product Blueprint & Implementation Roadmap | v1.3 | 1289 |
| `business-case-v2.2.md` | Business Case | v2.2 | 324 |

Copied byte-identical from the supplied originals on 2026-08-16 and verified with `diff`.
Filenames were normalised to carry the document identity and version; contents were not
touched. Key citations confirmed to resolve at the same line numbers in these copies:
Blueprint line 719 (development may proceed as a provisional assumption), Addendum line 768
(Assumed defaults may proceed for prototype development), Addendum lines 435–436 (the §6.4
absence-handling rows that narrow S7's scope to the >48h case).

## Gap: the Project Charter is absent

The **Project Charter v1 is not in this folder** because it was not supplied. It is the
highest-precedence document in the hierarchy above, which means every Charter-derived claim in
`docs/journal/2026-08-16-sprint-plan.md` is second-hand — quoted through the Addendum,
Blueprint, and Business Case rather than read directly. This is logged as conflict **X0** in
that plan.

Partially mitigating: all three documents present here independently state that the Charter
holds OD1, OD2, and OD3 as Open, which corroborates the governing rule from three directions.
It does not replace reading the Charter.

Do not treat this folder as a complete governing set until the Charter is added.

Two further documents are referenced by the project but have never been supplied, logged as
gaps in Entry 006 §7 and carried forward in Entry 007 §3: a **Business Charter** (a separate
document from the Project Charter — do not conflate them) and an **exit strategy**. Neither
blocks Phase 0 scaffolding; both are required before a production go-live decision.

## Related

- `docs/journal/` — dated build-readiness journal entries, including the Entry 007 Phase 0
  approval and the sprint plan built from these documents.
- `docs/` (PRD, ARCHITECTURE, DATA_MODEL, AGENTIC_LAYER, INTELLIGENCE_LAYER, SECURITY, TASKS,
  TEST_PLAN) — the repo's own plan pack. **It is not a governing document and does not sit in
  the precedence hierarchy above.** Where it conflicts with the documents in this folder, these
  win. Eleven such conflicts are logged as X0–X10 in the sprint plan; six of them (X3–X8) are
  conflicts with that plan pack or with the committed schema.
