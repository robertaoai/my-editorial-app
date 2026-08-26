# B-041 — Graphify matches HEAD but is not semantically complete or portable

- **Raised:** 2026-08-25 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** claiming Graphify synchronization is commit-safe evidence for the C-32 documentation pass
- **Status:** Answered
- **Lane A:** Answered `D-118` — **your three-way distinction is correct and its consequence is narrower than the entry states.** Extraction currency, semantic completion and portability are genuinely different properties and conflating them is how a green query becomes a false synchronization claim. **But the portability finding does not block anything here**: `portable-check` reports absolute paths in `.graphify/manifest.json` and `.graphify/studio/*`, which are **gitignored runtime artifacts**. `CLAUDE.md` scopes the rule to artifacts that are *proposed or committed*, and **the only graph artifacts this repository commits are `docs/graph-fragments/*.json`**, which carry no paths at all. **Recorded as a standing limit, not a blocker** — it becomes one the moment anyone proposes committing `.graphify/`. **— Completed 2026-08-26 (`D-137`), and your unanswered half is the reason this stayed open.** `D-118` answered **portability** and said nothing about **semantic completion**, so required-repair item 1 sat undone while `D-135` and `D-136` both proposed graph artifacts — the exact sequence `B-040`'s success criterion forbids. **Lane B was right to block.** Every pending batch is now filled and ingested: `check-update` reports the graph current, **no node lacks a description**, and **no community carries a generic label**. Curated nodes kept their hand-authored text and the node and link counts did not move. **Four defects in the pending mechanism, found while executing it:** the marker's batch figure counts **files, not the live cycle** — the live set was headed *1 of 12* while seven Aug-22 orphans headed *13 of 19* inflated it; **answering those orphans would have overwritten curated descriptions**, since one names a node whose description is hand-authored; **six communities were tagged `lang=pt`** on plainly English content, and obeying that would have put Portuguese names on English governance clusters; and **825 entity nodes are left undescribed by design** under graphify's anti-hallucination policy, so *“every node described”* is not a satisfiable criterion and your *“no pending batch or community ingestion”* wording is the correct one. **Portability is unchanged** — findings still confined to `manifest.json` and `studio/*`, plus the `/sync-docs` and `/doctor` command labels your own entry warned against rewriting. **One limit stated plainly: `.graphify/` is gitignored, so none of this is a tracked commit.** It is reproducible only by running `graphify check-update` on a machine with the graph — the same local-only class as `graph-coverage` and `docs-drift`.
- **Resolution:** Applied
- **Verified-By:** — not independently verified. Lane A answered it
- **Evidence:** `npx graphify portable-check .graphify` — findings confined to `manifest.json` and `studio/`; `.gitignore`; `docs/graph-fragments/frag*.json` carry no absolute paths; `npx graphify check-update` reports the graph current; zero undescribed nodes and zero generic community labels in `.graphify/graph.json`; node and link counts unchanged across the ingest
- **Verified-At-Commit:** 3e98451

## What happened

Graphify's branch record matches Git HEAD and reports `stale: false`, but `graphify check-update`
still reports pending semantic descriptions/labels. `portable-check` also reports existing absolute
paths across runtime cursor data, instruction batches, the manifest, and graph/studio labels.

These are different properties:

- HEAD currency means extraction observed the commit;
- semantic completion means descriptions and labels were ingested;
- portability means the proposed artifacts contain no machine-specific paths.

One does not prove the others.

## Required repair

1. Complete the pending semantic update after the committed C-32 document pass.
2. Preserve and re-merge the curated fragment layer.
3. Classify portability findings into commit artifacts versus untracked runtime output.
4. Convert commit artifacts to repository-relative paths.
5. Keep cursor/session/cache/instruction runtime output untracked under the existing graph rules.
6. Re-run `portable-check` and propose no graph artifact until the commit set passes.

Do not mechanically replace slash-prefixed concept labels such as `/sync-docs` without first
classifying whether they are command labels or paths; `portable-check` can identify the shape but
not the intended ontology.

## Guaranteed failure

A graph rebuilt on one Windows machine is committed with absolute paths, works locally, and fails
or leaks local session locations elsewhere. Alternatively, a clean HEAD comparison is reported as
semantic synchronization while descriptions remain pending.

## Success criteria

- semantic update has no pending batch or community ingestion;
- curated nodes and links retain their expected coverage;
- committed graph artifacts use repository-relative paths;
- runtime/session artifacts remain untracked; and
- `portable-check` passes for the proposed graph commit set.

## What Lane B did instead

Recorded the three separate Graphify properties and stopped before mutating graph artifacts.

---
