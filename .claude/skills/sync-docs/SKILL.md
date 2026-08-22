---
name: sync-docs
description: Propagate a bug fix, architecture-pattern change, or decision across this repository's governed document tiers under D-54 — including the shared-core triple edit, the curated-graph merge, and a negative test. Use after fixing a defect, changing a pattern, or recording a decision, and whenever asked to sync or update the docs.
---

# sync-docs

Propagate a change through the governed tiers so no derived document keeps asserting
what its source no longer supports.

**Why this exists.** The generic instruction — *"update CLAUDE.md or the relevant .md
files"* — misfires here in two specific ways. `CLAUDE.md` is one of **three** rule files
sharing a hash-locked core, so editing it alone either fails `bun run check` or, if the
edit lands in the unprotected preamble (`G67`), desyncs Codex silently. And *"relevant
.md files"* is precisely the vagueness `D-54` exists to remove: `D-76` corrected a stale
CI tally in the shared core and left the identical claim standing in
`V1-BUILD-SPEC.md`, with every check green.

## 1. Classify, and check the lane first

Name what changed — bug fix, architecture pattern, or decision — and identify the
**lane** that owns the surface (`D-75`):

**Read the lane map from the shared core in `CLAUDE.md`, never from here.** This section used to
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

## 5. Shared-core edits are a triple edit

`CLAUDE.md`, `AGENTS.md`, `.agents/rules/graphify.md` — byte-identical between the
`<!-- SHARED CORE` marker and each file's own tail. Edit all three programmatically in
one pass, never by hand, then confirm the re-hash.

Per-agent tails (`Claude Code specifics:` / `Codex specifics:` /
`Gemini / Antigravity specifics:`) are deliberately **not** compared and may be edited
alone.

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
Confirm node count rises and **dangling stays 0**.

## 8. Verify — and negative-test

```bash
bun run check
```

**No total appears here, and none should be added** (`G75`, `D-92`). This block carried
`7 checks locally, 5 in CI` long after both were wrong — **the propagation procedure violating
its own §6 two sections later.** The runner prints the total.

**What determines CI coverage is what a check reads, not its number.** `graph-coverage` and
`docs-drift` read gitignored `.graphify/`; `source-sweep` needs full history that a depth-1
checkout lacks. Those three SKIP in CI and the rest run, so **a lower CI total is correct, not a
regression.**

Then **break the new claim and confirm the check fails**, and restore. A green check is
also what a check that cannot fail produces — `docs-drift` has reported `PASS synced`
against a modified document since the day it was written.

## 9. Sync the graph, then report what you did NOT do

```bash
npx graphify hook-rebuild
```

`.graphify/needs_update` is written only by graphify's git hook, and **no git hook is
installed here** — its absence is no signal. Compare `.graphify/branch.json`'s
`lastAnalyzedHead` against `git rev-parse HEAD`. After rebuilding, confirm the curated
nodes survived; re-merge fragments if the count drops (`G51`).

Close by stating explicitly what was **left untouched and why** — the deferred items,
the other lanes' work, the claims you noticed but did not fix. A completion report that
names only what was done is how `G25` closed against two of three targets.
