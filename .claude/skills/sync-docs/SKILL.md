---
name: sync-docs
description: Propagate a bug fix, architecture-pattern change, or decision across this repository's governed document tiers under D-54 — including the single shared core in AGENTS.md imported by CLAUDE.md (D-337), the curated-graph merge, and a negative test. Use after fixing a defect, changing a pattern, or recording a decision, and whenever asked to sync or update the docs.
---

# sync-docs

Propagate a change through the governed tiers so no derived document keeps asserting
what its source no longer supports.

**Why this exists.** The generic instruction — *"update CLAUDE.md or the relevant .md
files"* — misfires here in two specific ways. The shared rules live **once**, in `AGENTS.md`;
`CLAUDE.md` imports them with `@AGENTS.md` (`D-337`), and a missing import fails **silently**
(`D-327`), so editing `CLAUDE.md` as if it held the core puts the rule where other agents never read
it. *(History: before `D-337` there were three rule files sharing a hash-locked core; that model and
its triple edit are retired — `docs/governance/agent-rules-reference.md`; this text corrected under
`D-400`.)* And *"relevant
.md files"* is precisely the vagueness `D-54` exists to remove: `D-76` corrected a stale
CI tally in the shared core and left the identical claim standing in
`V1-BUILD-SPEC.md`, with every check green.

## 1. Classify, and check the lane first

Name what changed — bug fix, architecture pattern, or decision — and identify the
**lane** that owns the surface (`D-75`):

**Read the lane map from `AGENTS.md`, never from here.** This section used to
restate it, and the restatement went stale: it kept `D-75`'s original map — which put
`scripts/` and `.gitattributes` in Lane C — for four days after **`D-84` moved them to Lane A**,
while every check stayed green. **A procedure that restates the map will drift from it; one that
cites the map cannot.** Same rule as §6 below, applied to a table instead of a number.

| Lane | Agent | Shape of the surface |
|:---:|---|---|
| **A** | Claude Code | **Orchestration** — governance, tooling, build config |
| **B** | Codex | **Application code** |
| **C** | Antigravity | **GitHub Actions, and nothing else** |

**If the fix is not in your lane: write the specification, hand off, and stop.** Record
it as *specified, not applied* (`D-56`). Do not apply it because it is small.

## 2. Check the decision number is free

Grep the register for forward references before claiming a number:

```bash
grep -n '(`D-7[0-9]`)' docs/v1/V1-DECISION-REGISTER.md
```

**A forward-referenced number is a commitment, not a placeholder.** `D-77` and `D-78`
were promised in scope-limit paragraphs before they existed. The `Q10` narrowing was
lost exactly this way: its number was reused for other work and the work went with it.

## 3. Find every location asserting the OLD fact

Search the **claim**, not the ID. An ID is present in stale rows too — that is why the
tier sweep verifies *arrival*, not *correctness* (`G65`).

```bash
npx graphify query "<the concept that changed>"
grep -rn "<the old claim's distinctive phrase>" docs/
```

## 4. Apply D-54

| Tier | Reaches it when |
|---|---|
| `V1-DECISION-REGISTER.md` | **Always** |
| `V1-BUILD-SPEC.md` | Scope, sequence, or DoD moves |
| `V1-ARTIFACT-INVENTORY.md` | **Only when a file is created or retired** |
| `docs/Modular_PRD.md` | A product requirement or §10 decision row changes |
| Agent rule files | It is a rule agents must follow |
| `Modular_PRD` §8 | A sprint closes or a tier opens |

**State every unaffected tier explicitly.** A blank cell is not a disposition. And check
`tier-sweep.mjs`'s `TIERS` map before naming a tier column — an unmapped name is
rejected, not verified (`G68`).

## 5. Rule files: one shared core, imported (`D-324`, applied `D-337`)

The shared core lives **once**, in `AGENTS.md` (under 5,400 characters). `CLAUDE.md` imports it
with `@AGENTS.md` and adds only Claude Code's rules; `GEMINI.md` carries only Lane C's rules. There
is no triple edit and no HTML-comment marker: a rule that every agent needs is edited in
`AGENTS.md` alone. The full pre-refactor text, and anything demoted, lives verbatim in
`docs/governance/agent-rules-reference.md` (on demand).

`bun run check`'s `rule-budget` check fails on an over-budget file, a missing or unresolved
`@AGENTS.md` import (a missing import fails **silently** in Claude Code, `D-327`), a second copy of
the core, an HTML comment, or a lane-state row in a rule file. Delivery is proved by
re-measurement, never by the file existing (`D-318`).

## 6. Propagate the fact, never the tally

Write *what is true*, not *how many*. A restated count is the drift mechanism itself
(`G55`, `G56`, `G58`) — every stale-count defect in this register began as an accurate
number copied into a second location.

## 7. Curated graph: merge, never build

```bash
node docs/graph-fragments/merge7.js docs/graph-fragments/fragNN.json
```

Fragments declare relationships under `edges`; `graph.json` stores them under `links`.
`graphify build --fragment` cannot merge and will produce silent degree-zero orphans.
Confirm **dangling stays 0** and the fragment's semantic equality check passes.

**Decide coverage with the shared exclusion rules (`D-231`, `D-246`).** `docs/handoff/` and graphify
scratch are excluded: a handoff-only change needs neither a curated node nor a governed-intent rebuild.
An **included** new document under `docs/` needs source-path coverage — a curated node whose
`source_file` points at it — because `graph-coverage` reads the curated layer and `hook-rebuild` alone
never clears it. Curated concepts otherwise serve their actual semantic purpose, not a per-file quota.

**Order of a pass:** final source commit → `hook-rebuild` (or `graphify update`) → restore any required
inputs → merge each applicable named fragment in dependency order → **verify each claimed fragment with
`node docs/graph-fragments/merge7.js <fragment> --verify-only`** → descriptions last → full checks.
**Node totals and the `--all` conflict audit do not prove parity**; only the per-fragment semantic
equality check does.

**Semantic completion is the LAST action of a pass, because every rebuild undoes it.** `hook-rebuild`
and `graphify update` both re-extract, and re-extraction **drops the ingested descriptions for
extracted nodes** — curated fragment descriptions survive, extracted ones do not — after which
`check-update` reports pending again. So: **commit everything, rebuild once at the final HEAD, merge
fragments, then fill and ingest, then stop.** A rebuild after the ingest silently reverses it, and
`docs-drift` will still say *synced*, because it compares heads and never reads the semantic state.

**If a rebuild has already dropped them, do not re-author.** A dated backup —
`.graphify/<date>/graph.json` — may still hold the pre-rebuild descriptions, replayable into the
regenerated `batch-*.json` files by id. Check that it does: a backup taken after a fast rebuild holds
none, and then descriptions are filled from the sources themselves (commit subjects, a symbol's own
comment), never invented.

## 8. Verify — and negative-test

```bash
bun run check
```

**No total appears here, and none should be added** (`G75`, `D-92`). This block carried
`7 checks locally, 5 in CI` long after both were wrong — **the propagation procedure violating
its own §6 two sections later.** The runner prints the total.

**What determines CI coverage is what a check reads, not its number.** `graph-coverage` and
`docs-drift` need the local graph (gitignored `.graphify/`); `source-sweep` and `terminal-return`
need full history that a depth-1 checkout lacks. Those SKIP in CI, so **read the actual SKIP lines and
run the skipped checks locally** before a closure claim relies on them.

Then **break the new claim and confirm the check fails**, and restore. A green check is
also what a check that cannot fail produces — `docs-drift` has reported `PASS synced`
against a modified document since the day it was written.

## 9. Sync the graph, then report what you did NOT do

```bash
npx graphify hook-rebuild
```

`.graphify/needs_update` is written only by graphify's git hook, and **no git hook is
installed here** — its absence is no signal. Compare `.graphify/branch.json`'s
`lastAnalyzedHead` against `git rev-parse HEAD`. After rebuilding, follow §7's order and verify each
claimed fragment with `--verify-only`; a node count that holds steady proves nothing (`G51`).

Close by stating explicitly what was **left untouched and why** — the deferred items,
the other lanes' work, the claims you noticed but did not fix. A completion report that
names only what was done is how `G25` closed against two of three targets.
