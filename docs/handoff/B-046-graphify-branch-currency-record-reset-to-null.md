# B-046 — Graphify branch currency record reset to null after rebuild

- **Raised:** 2026-08-25 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a green `docs-drift` result and a commit-pinned Graphify synchronization claim
- **Status:** Open
- **Lane A:**
- **Evidence:** `.graphify/branch.json`; `graphify check-update`; `bun run check`; `B-041`

## What happened

`npx graphify hook-rebuild` extracts the new migration and Graphify queries return its nodes, but
the branch record now contains `lastAnalyzedHead: null`, `branchName: null`, and `stale: false`.
`docs-drift` therefore reports analyzed `(none)` versus Git HEAD. `graphify check-update` also
reports pending semantic descriptions and labels.

This supersedes only B-041's observation that the branch record matched HEAD; B-041's distinction
between extraction currency, semantic completion, and portability remains correct.

## Required repair

After Lane B's files are committed:

1. run the full Graphify update against that committed HEAD rather than treating the fast hook as
   semantic completion;
2. preserve and re-merge `docs/graph-fragments/` with `merge7.js` semantics;
3. verify `branch.json.lastAnalyzedHead` equals the new Git HEAD and `stale` is false;
4. finish or explicitly disposition the pending description/community batches;
5. rerun graph coverage, `docs-drift`, and portability; and
6. keep runtime/session paths untracked and do not propose graph artifacts while portability fails.

## Guaranteed failure

The graph can answer questions about the working tree while the repository control says no commit
was analyzed. Reporting “synchronized” from the successful query alone would merge two different
properties and leave `docs-drift` correctly red.

## Success criteria

- the committed migration and all handoff documents have graph coverage;
- the branch record names the exact committed HEAD;
- no semantic update remains pending; and
- any proposed graph artifact passes the approved portability boundary.

## What Lane B did instead

Rebuilt extraction, confirmed the migration is queryable, recorded the null currency state, and
did not edit or commit gitignored Graphify runtime artifacts.
