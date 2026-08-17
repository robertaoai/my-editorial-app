# Governing documents

The project's governing set, canonical here. Amendments are made in these files; git holds
every prior state, so nothing is lost by editing in place.

## Precedence

**Project Charter > V1 Build Readiness Addendum > Blueprint > Business Case.**

Where the Charter and Addendum conflict on *operating model*, the Charter governs; where they
conflict on *build mechanics*, the Addendum governs (Business Case header).

## Contents

| File | Document | Version | Editable? |
|---|---|---|---|
| `project-charter-v1.md` | **Project Charter** — source of truth | v1, baseline | **No.** Frozen. Charter changes are a Chief Editor act producing a new Charter version, never an edit here. |
| `v1-build-readiness-addendum.md` | V1 Build Readiness Addendum | v1.5 | Yes, by amendment |
| `blueprint.md` | Product Blueprint & Implementation Roadmap | v1.4 | Yes, by amendment |
| `business-case.md` | Business Case | v2.3 | Yes, by amendment |

Filenames carry no version. Versions live in each document's header and amendment log, so a
new version does not break every path that cites it.

## How these are amended

1. Surgical edits to the affected sections. **No document rewrites.**
2. Version bump in the header, plus an amendment note saying what changed and why.
3. An entry in the document's own amendment or changelog section.
4. If the change is a departure from a higher document, a row in
   `../governance/provisional-deviation-register.md`. Departures are logged, dated, and given a
   closing trigger — never absorbed silently into prose.

The Charter is exempt from step 1: it is not amended here at all.

## As-supplied baseline

These files were vendored byte-identical from the supplied originals on 2026-08-16 and
verified with `diff`. That untouched state is preserved in git at commits `45c50dc` (Addendum,
Blueprint, Business Case, Entry 006) and `b494d4f` (Charter). To read a document exactly as it
was supplied:

```bash
git show 45c50dc:docs/source/blueprint-v1.3.md
```

Note the paths in those commits carry the old version suffixes.

## Line-number citations

Earlier journal entries cite these documents by line number — Blueprint 719, Addendum 768,
Addendum 435–436. Those line numbers were correct against the as-supplied text and remain
resolvable at the commits above. **Amendments shift line numbers**, so from v1.5 / v1.4 / v2.3
onward, cite by section and quoted clause rather than by line. The one clause the journal leans
on most, "All Assumed defaults may proceed as provisional assumptions for prototype
development," is preserved verbatim through the amendments.

## Open decisions are still open

OD1, OD2, and OD3 remain **Open** at Charter level and are not closable at scaffolding stage —
the evidence that would answer them is what the build produces. Nothing in this folder closes
them, and no amendment has tried to. See the deviation register for what is running ahead of
the Charter provisionally, and what would close each one.

The one hard stop is unchanged: if OD2 resolves negatively at any point, Charter OD4 branch ②
applies — pre-launch blocker, "must be resolved before shipping, not after."

## Gaps still outstanding

Two referenced documents have never been supplied, logged in Entry 006 §7 and carried forward
in Entry 007 §3: a **Business Charter** (a separate document from the Project Charter above —
do not conflate them) and an **exit strategy**. Neither blocks Phase 0; both are required
before a production go-live decision.

## Related

- `../governance/provisional-deviation-register.md` — every departure from a higher document,
  with what closes it
- `../journal/` — dated build-readiness entries, including the Entry 007 Phase 0 approval and
  the sprint plan
- `../` (PRD, ARCHITECTURE, DATA_MODEL, …) — the repo's own plan pack. **Not a governing
  document**; see `../README.md`.
