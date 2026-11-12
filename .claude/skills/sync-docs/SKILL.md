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

**Sync the live graph only through the guarded procedure (`D-425`).** The manual D-409/D-410 route is
retired, with **no fallback**:

```bash
node scripts/graphify/guarded-rebuild.mjs prepare --work <new folder under C:/CoWork/outputs>
# exit 3 = pending: answer from source (descriptions by id, names by member-set hash), then
node scripts/graphify/guarded-rebuild.mjs prepare --resume <folder> --answers <answers.json>
# exit 0 = ready: Lane B reviews STATE.json's identity and commits one "### F3 acceptance record" to B-050
node scripts/graphify/guarded-rebuild.mjs publish --work <folder> --review <Lane B's review commit>
node scripts/graphify/guarded-rebuild.mjs recover   # only when a transaction journal exists
```

**What `prepare` does, in a disposable checkout of the final commit** (baseline captured under the publication
lock; Node, Git, their configuration and the CLI bound at prepare and re-verified before every tool call, `D-426`):
1. rebuild (`hook-rebuild --scope committed`);
2. a from-empty extraction in a second clone. Both extractions are bracketed by the clock and checked against the
   branch-selection oracle; the rebuild must equal the producer's merge of its baseline and that extraction (`D-426`);
3. docs-layer restore from its verified baseline copy;
4. stale-symbol prune against the from-empty extraction, after the restore (`D-421`, order `D-422`);
5. named fragment merges in dependency order;
6. fill;
7. description replay. A symbol whose source file changed is held for review (`D-424`);
8. names reused only for identical member sets;
9. ingest, the label cycle, a final merge, the candidate's studio export checked file by file against the pinned
   producer's projections (`D-426`), then composition with its reviewed manifest.

Semantic completion stays last. Anything not answerable from source is returned as pending, never invented.

**What `publish` accepts:** only the bytes Lane B accepted in a record that its own review commit introduces, on
a handoff-only fast-forward of the analyzed source.

**Review provenance (G-F3-8, `D-426`).** The guard validates the review record's history, schema and candidate
identity; it does not authenticate the reviewer. The publisher must use the exact review commit delivered
independently by Lane B, never a commit containing the publisher's own draft acceptance. A Git author or message
marker is not proof of independence. If provenance is absent or disputed, stop and raise the handoff. Governed
edits after prepare require a fresh candidate and a fresh exact-byte review.

**Exit codes:**

| Exit | Meaning |
|---|---|
| 0 | Ready, published, or published (completed by recovery) |
| 2 | Refused: this run did not publish or create a transaction journal |
| 3 | Pending |
| 4 | Preparation failed |
| 5 | Recovery required: the live state is not verified |
| 6 | Restored: live equals the prior release, verified |
| 7 | Not published: live still equals the prior release |

**No fallback means no bypass of the guard. It does not mean guaranteed restoration.** If the guard cannot
publish, report the drift and keep the evidence; never run `graphify` against the live state directly. The lock
excludes cooperating guarded runs only, never a raw `graphify` writer.

**Node totals and the `--all` conflict audit do not prove parity**; only the per-fragment semantic
equality check does (`merge7.js <fragment> --verify-only`, read-only).

**Why semantic completion is last:** every rebuild re-extracts and **drops the ingested descriptions for
extracted nodes**. `prepare` therefore rebuilds once at the final commit and fills last. A description is never
re-authored when it can be replayed from the verified baseline. It is filled from the sources themselves, never
invented.

**Community names must be proven applied, not assumed (`D-410`, observed in `D-409`).** After
description/community update, compare the final saved graph's global community labels and every node's
community_name against the intended names bound to complete current member sets. Answer JSON or a current tool
state is not applied-name evidence. In the graphify 0.17.1 cached-label case observed in D-409, update retained
older names; the existing graphify label assistant emit/answer/ingest cycle applied the member-derived names.
When needed, use that supported cycle, then independently compare complete member sets before/after, all
intended global/node names, zero map contradictions/multi-name IDs, every fragment-owned node/edge field,
completed semantic work and exact branch/analyzed revision. composition refuses fragment-field, name-binding and
raw lifecycle mismatches; complete before/after member-set comparison stays part of Lane B's exact-hash review. On failure, keep the evidence and use `recover` or a new work folder. Publication requires
Lane B's acceptance record for the exact bytes (`D-425`).

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
node scripts/graphify/guarded-rebuild.mjs prepare --work <new folder under C:/CoWork/outputs>
```

Then follow §7's guarded procedure to `publish` (`D-425`); never rebuild the live state directly.
`.graphify/needs_update` is written only by graphify's git hook, and **no git hook is installed here**, so its
absence is no signal. Compare `.graphify/branch.json`'s `lastAnalyzedHead` against `git rev-parse HEAD`.

**After publication (G-F3-9, `D-426`).** After publication, verify each claimed fragment, run check-update and bun
run check, and retain their actual messages. A check-update HEAD-mismatch notice alone does not establish
governed drift when all intervening changes are excluded handoffs under D-231/D-425. Confirm that classification
with docs-drift and the source rule; do not follow a suggested update outside the guarded procedure. Other pending
semantic work, included source changes, transaction or validation findings must still be resolved. Node totals
and a generic pending notice are not semantic-parity evidence. Claim full health only after publication and the
independent post-state checks.

Each fragment is verified with `merge7.js <fragment> --verify-only` (§7); a node count that holds steady proves
nothing (`G51`). Between the source commit and its publication, docs-drift reports the expected stale graph:
report it as stale, and **claim 19/19 only after publication**.

Close by stating explicitly what was **left untouched and why** — the deferred items,
the other lanes' work, the claims you noticed but did not fix. A completion report that
names only what was done is how `G25` closed against two of three targets.
