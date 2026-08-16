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
| `project-charter-v1.md` | **Project Charter** (source of truth) | v1, baseline | 60 |
| `v1-build-readiness-addendum-v1.4.md` | V1 Build Readiness Addendum | v1.4 | 769 |
| `blueprint-v1.3.md` | Product Blueprint & Implementation Roadmap | v1.3 | 1289 |
| `business-case-v2.2.md` | Business Case | v2.2 | 324 |

Copied byte-identical from the supplied originals on 2026-08-16 and verified with `diff`.
Filenames were normalised to carry the document identity and version; contents were not
touched. Key citations confirmed to resolve at the same line numbers in these copies:
Blueprint line 719 (development may proceed as a provisional assumption), Addendum line 768
(Assumed defaults may proceed for prototype development), Addendum lines 435–436 (the §6.4
absence-handling rows that narrow S7's scope to the >48h case).

## The Charter is now present — conflict X0 is closed

The Project Charter v1 was supplied on 2026-08-16, after the sprint plan was first written.
Conflict **X0** (highest-precedence document unavailable, all Charter claims second-hand) is
**closed**. Reading it directly confirmed the governing rule verbatim — OD1, OD2, and OD3 are
Open and blocking sign-off, and OD4's branch ② names an OD2 negative resolution as a
pre-launch blocker "at any point, including before v1 ships."

It also surfaced two conflicts that could not be seen while the Charter was only being quoted
by the documents below it, both logged in the sprint plan as **X11** and **X12**: the lower
documents converted a Charter-level *open* independence question into an *unconditional*
success criterion, and the Charter's workflow description says each review gate is executed by
a distinct agent, where the Addendum permits one agent to hold several Line 1 gates. On both,
the Charter governs.

That is the direct argument for vendoring these files rather than citing them by version: two
material conflicts existed for as long as the top document was being read through the ones
beneath it.

## Gaps that remain

Two documents referenced by the project have still never been supplied, logged in Entry 006 §7
and carried forward in Entry 007 §3: a **Business Charter** (a separate document from the
Project Charter above — do not conflate them) and an **exit strategy**. Neither blocks Phase 0
scaffolding; both are required before a production go-live decision.

## Related

- `docs/journal/` — dated build-readiness journal entries, including the Entry 007 Phase 0
  approval and the sprint plan built from these documents.
- `docs/` (PRD, ARCHITECTURE, DATA_MODEL, AGENTIC_LAYER, INTELLIGENCE_LAYER, SECURITY, TASKS,
  TEST_PLAN) — the repo's own plan pack. **It is not a governing document and does not sit in
  the precedence hierarchy above.** Where it conflicts with the documents in this folder, these
  win. Eleven such conflicts are logged as X0–X10 in the sprint plan; six of them (X3–X8) are
  conflicts with that plan pack or with the committed schema.
