# Graph fragments — the curated layer of the knowledge graph

**Date:** 2026-08-20
**Tier:** Outside the `D-29` tier stack. This is **tooling**, not a product artifact — it generates no `FR`, no `AC`, and no `SPECS` candidate.
**Classification:** Project Scope ⚙ — infrastructure-owned, per `D-39` and `D-40`.
**Status:** Living document. No build-version prefix; does not freeze (`D-36`). All sections `[V1]`.
**Closes:** `G50`, `G51`, `G52`, and — since 2026-08-20 (`D-60`) — `G54`.

---

## 1. Why this directory exists `[V1]`

The knowledge graph at `.graphify/` has **two layers**, and only one of them is rebuildable.

| Layer | Produced by | Rebuildable? |
|---|---|---|
| **Extracted** | `graphify` reading `docs/` | **Yes** — re-run extraction |
| **Curated** | Hand-authored fragments merged in by script | **No** — extraction cannot infer them |

The curated layer carries the concepts that exist **because a human decided something**, not because a document happened to say it: `D-39`–`D-50`, the `GA5` retention/erasure resolution, the two-tier lifecycle and the fork at publish. They are held by stable node ids (`separation_of_duties_d39` … `not_newsworthy_outcome_d50` in `frag6.json`, `two_tier_lifecycle_d44`, `fork_at_publish_d47`, `ga5_retention_erasure_conflict`), never by a community number. *History, until `D-408`: this sentence ended "and communities 28 and 29". Community ids and names are graphify-derived and re-assigned on every re-cluster, so fragments no longer store them (`D-213`, `D-407`, `D-408`).*

**`.graphify/` is gitignored.** Before this directory existed, the curated layer lived **only** in a session-scoped temp directory. It was one session expiry — or one `npm uninstall` — from being gone, with no error and no warning. That is `G51`.

**Do not restate the curated total here.** A hard-coded count is the drift mechanism, not a convenience — it is wrong the next time anything merges. Compute it:

```bash
node -e "const fs=require('fs');let n=0,e=0;for(const f of fs.readdirSync('docs/graph-fragments').filter(x=>x.endsWith('.json'))){const j=JSON.parse(fs.readFileSync('docs/graph-fragments/'+f));n+=(j.nodes||[]).length;e+=(j.edges||[]).length}console.log(n+' nodes, '+e+' edges')"
```

At the 2026-08-20 rescue it was **61 nodes and 142 edges across 7 fragments** — 18% of the graph's nodes and 25% of its links. That figure is a dated historical fact, not a running total.

## 2. Which graphify is installed, and why `[V1]`

**Installed: `@sentropic/graphify@0.17.1`** (npm, global). Verified 2026-08-20.

**This is not the upstream project, and that is deliberate.** Two distributions exist:

| | **Upstream** | **Installed** |
|---|---|---|
| Repo | `Graphify-Labs/graphify` | `rhanka/graphify` |
| Package | PyPI `graphifyy` **0.1.14** | npm `@sentropic/graphify` **0.17.1** |
| Language | Python | TypeScript |
| Output dir | `graphify-out/` | `.graphify/` |
| Install | `uv tool install` / `pipx` | `npm install -g` |

**They are related, not rival.** `rhanka/graphify` credits the upstream by name — it builds on *"Safi Shamsi's graphify"* — and tracks parity in its own `UPSTREAM_GAP.md`. `Graphify-Labs` shows contributor `safishamsi`. Neither repo redirects to the other; both resolve independently.

So the relation is **upstream → attributed downstream extension**. The upstream's warning that *"other `graphify*` packages are not affiliated"* is scoped to **PyPI** and says nothing about npm.

> **The trap this note exists to prevent (`G50`).** An agent that compares the install against the official guide sees a different repo, a different language, and a different package name, and concludes the install is wrong. It is not wrong. **Do not "correct" it** — see §3 for what that would cost.

### Why not the upstream

1. **Not installable on this machine.** `uv`, `pipx`, and `pip` are all absent; `python`/`python3` resolve to the Microsoft Store stub, not an interpreter. The upstream path requires installing a Python toolchain first.
2. **It would break the rules this project already runs on.** See §3.
3. **It moves backwards into a layout our own rules call legacy.** Upstream writes `graphify-out/`; our rules document `.graphify/` and carry an explicit rule for migrating *out of* `graphify-out`.

## 3. Commands that are distribution-specific `[V1]` — `G52`

The graphify rules in `CLAUDE.md`, `AGENTS.md`, and `.agents/rules/graphify.md` name these commands. They read as tool-generic. **Eight of them are not** — verified absent from `graphify/__main__.py` upstream on 2026-08-20 (`D-60`):

`portable-check` · `migrate-state` · `review-delta` · `summary` · `hook-rebuild` · `build` · `studio` · `ontology`

**Corrected:** an earlier revision listed **nine**, including `merge-graphs`. **`merge-graphs` exists upstream.** Presence of the name is **not** equivalence of behaviour — whether upstream's merges the same shapes is unverified and not claimed. And `build` is absent **entirely** upstream, not merely its `--fragment` flag.

Swapping distributions without first re-verifying these **silently invalidates the rule blocks in all three agent files.**

> **Source-verified 2026-08-20 (`D-60`).** This was previously a README reading, carried as `G54` and deferred on the assumption that enumerating a CLI required installing it. **It did not** — `Graphify-Labs/graphify` is public, and `graphify/__main__.py` registers the subcommands. **A gap deferred for an environment reason is worth re-examining for a read-only path before carrying it forward.**

## 4. Rebuilding the curated layer `[V1]`

Merge **in this order** — later fragments reference nodes earlier ones introduce:

| # | Fragment | Carries |
|---|---|---|
| 1 | `docs-fragment.json` | **Detect manifest — not mergeable.** Historical input for initial docs concepts; skip |
| 2 | `docs-fragment2.json` | **Detect manifest — not mergeable.** Historical input for governance and precedence; skip |
| 3 | `docs-2026-08-18-fragment.json` | Gate model, Lines, roles |
| 4 | `docs-fragment4.json` | **Detect manifest — not mergeable.** Historical input for decision register concepts; skip |
| 5 | `v1-fragment.json` | V1 tracking, sprints, artifacts |
| 6 | `frag5.json` | `Fn_Specs` tier, gates and publication |
| 7 | `frag6.json` | `D-39`–`D-50`, lifecycle and compliance |
| 8 | `frag7.json` | Tooling provenance, graph durability, `D-51` *(history: "community 30" removed by `D-408`; communities are graphify-derived)* |
| 9 | `frag8.json` | Step 0 index integrity — `G55`, `G56`, `G40` detail |
| 10 | `frag9.json` | Step 1 — `D-52`, `G33b` resolved, the four `SPECS` documents |
| 11 | `frag10.json` | `D-53` — `SPECS-TRANSITION-ENFORCEMENT`, `G57` |
| 12 | `frag11.json` | `D-54` propagation rule, `G58` |
| 13 | `frag12.json` | `D-55` — `X3` mapping role-keyed, `G57` closed |
| 14 | `frag13.json` | `D-56` — `R3` specified, `G59` |
| 15 | `frag14.json` | `D-57` — `Q2` resolved, `C-13` BCP surface, `G60` |
| 16 | `frag15.json` | `D-58` — `G11` closed, register precedence, `C-14` |
| 17 | `frag16.json` | `D-59` — `G10` closed, one origin two paths, `C-15` |
| 18 | `frag17.json` | `D-60` — `G54` closed from source |
| 19 | `frag18.json` | `D-61` — `X4` specified, `G61` X-series unindexed |
| 20 | `frag19.json` | `D-62` — `FR-14` written, `G60` closed |
| 21 | `frag20.json` | `D-63` — X-series backfilled, `G61` closed |
| 22 | `frag21.json` | `D-64` — `G59` closed, `bun.lockb` committed |
| 23 | `frag22.json` | `D-65` — bundle rejected, `G62` CI gates fail, `G63` |
| 24 | `frag23.json` | `D-66` — `G62`b decided, ESLint CLI |

**Three rows are detect manifests, not fragments (B-093 P2, 2026-09-14).** `docs-fragment.json`,
`docs-fragment2.json` and `docs-fragment4.json` hold file-scan output (`files`, `total_files`, …)
and no `nodes` array, so `merge7.js` crashes on them, with or without `--verify-only`. They are kept as
historical inputs. Skip them when merging and when claiming parity: curated parity means every
**mergeable** fragment passes `--verify-only`. Also under P2, two edges in
`docs-2026-08-18-fragment.json` pointed at IDs that exist in no graph and were retargeted to the
existing document nodes: `modular_prd_doc` became `modular_prd`, and `requirements_traceability_map`
became `traceability_map_doc`. `merge7.js` stops at the first dangling edge, so the second was
hidden behind the first; list every dangling endpoint before declaring a fragment repaired.

`merge7.js` is the reference merge script (repo-relative; `merge6.js` is retained for history but hard-codes an absolute path). `missing.js` reports which docs are absent from the graph.

**Format note, and it is the one that bites:** `graph.json` stores relationships under **`links`**; fragments declare them under **`edges`**. A merge that copies `edges` straight into `graph.json` produces a graph whose new nodes have **degree zero** — present, findable by `explain`, and reachable by nothing. It fails silently. `merge7.js` handles the translation; anything hand-rolled must too.

**`graphify build --fragment` cannot do this.** It builds; it does not merge. Every curated update in this project has gone through a merge script for that reason.

**A rebuild can also drop the DOCS layer, not only curated nodes — measured 2026-09-20 (`D-246`).**
The graph fell from roughly 1800 nodes to roughly 480 at the 2026-09-17 rebuild and stayed that way
unnoticed for days: `graph-coverage` reported a backlog and no check said why. The fast rebuild keeps
code and handoff nodes; the docs nodes are gone, and **every curated fragment then fails `merge7.js`
on a dangling edge** because its endpoints were those docs nodes. Do not re-author them. Replay them by
id from the verified baseline copy. **`guarded-rebuild.mjs prepare` (`D-425`) performs this inside its disposable
checkout:** a rebuild, then `restore-docs-layer.js` against its baseline copy's `graph.json`, then every mergeable
fragment in dependency order (this section), each named. Never run these steps against the live state: the manual
route is retired, with no fallback.

**Retire stale generated code symbols AFTER the restore, before merging (`D-421`, order fixed by `D-422`).**
`restore-docs-layer.js` restores every node whose source file is under `docs/` — including generated code in
`docs/graph-fragments/*.js` — so a prune run before it is partly undone (`D-422` saw 11 stale `merge7.js`
nodes return). Run the restore shown above first, then this step, then the fragment merges. `hook-rebuild` carries the existing
`graph.json` forward, so a generated code node the current extraction no longer produces survives
indefinitely: neither `graphify update --force` nor clearing `cache/` removes it, and a from-empty rebuild in
place would drop the accumulated commit, handoff and docs layers with it. Make a from-empty extraction of the
SAME commit in a disposable clone whose `origin` is the caller's, then retire by id.

`prepare` does this in a second disposable clone. The clone carries the snapshot's `origin` and exact ref map,
has no `.graphify` copied in, and runs with a sanitized environment. `prepare` then runs
`prune-stale-symbols.js` against it, after the restore and before the merges, and refuses unless the persisted
graph verifies.

It retires only `file_type: code` nodes absent from the fresh extraction and not declared by any fragment,
with their links, lists each one, refuses a fragment-declared code node, and refuses a fresh extraction of a
different commit.

`restore-docs-layer.js` copies only docs-source nodes, fragment endpoints and the links between them,
overwrites nothing, and reports any endpoint found in neither place. The restored descriptions are the
backup's, so they may be older than the documents; coverage passing is path representation, not
semantic currency.

**Rebuild first, then merge — the destructive step goes first (`D-206`).** A rebuild regenerates the
extracted layer and does not carry curated nodes; a merge writes them. **Merging before a rebuild
puts the curated write on the wrong side of the destructive operation**, which is `G51`'s named
shape and fails silently — the nodes are simply gone, and no check says why.

**The risk is bounded, and that is not a reason to reverse the order.** `frag130` survived repeated
rebuilds reporting `would-add: 0`, so merge-then-rebuild would usually work. **It costs nothing to
be on the safe side of a destructive operation, and the failure mode is silent** — which is exactly
when ordering discipline is worth keeping.

**Merge named fragments explicitly.** `merge7.js` with no argument restores its default fragment
only; `--all` audits conflicts rather than merging. Name each fragment, in dependency order, then
verify parity per fragment with `--verify-only`.

**A rebuild does not drop curated nodes once the fragment is merged — measured, not assumed
(`D-207`).** Repeated rebuilds have reported `would-add: 0` on every merged fragment, so **merging
is a one-time authoring cost, not a per-rebuild one.** Earlier passes carried the reverse
assumption and paid it repeatedly.

**Keep verifying anyway.** Run `--verify-only` per named fragment after **every** rebuild and record
`would-add`. The claim above is a measurement, not a guarantee, and `G51`'s failure is silent — a
verification that costs one command is the cheapest possible evidence.

## 5. Verifying a merge `[V1]`

Run all four. A merge is not done until each passes:

1. `bun run check`'s `graph-coverage` — every doc that requires a node has one whose `source_file` equals its path (`D-246`). `node docs/graph-fragments/missing.js` remains as a reference report, but it only tests whether a **basename appears anywhere** in the graph and is not evidence that a document has a node of its own — the older wording of this step relied on it. One exclusion is expected and correct: `docs/.graphify/GRAPH_REPORT.md` is a graphify artifact, not a source doc.
2. `graphify path "<new node>" "<existing node>"` — the new nodes are **connected**, not orphaned. This is the check that catches the `edges`/`links` trap.
3. `graphify explain "<new concept>"` — resolves by its label, with a non-zero degree. Its community is graphify-derived and is not checked against the fragment (`D-408`; until then this step read "with the right community"). `explain` matches labels, not ids: an id lookup returning "no match" is a CLI limit, not a missing node (`D-406`).
4. `graphify portable-check .graphify` — commit-safe artifacts carry repo-relative paths.

**Never merge into the live state directly (`D-425`).** Every merge happens inside `prepare`'s disposable
checkout. The guarded `publish` keeps a verified backup beside the live state, and its outcome table (exit 0, 2,
5, 6 or 7) says only what was verified.

**Community names: prove them applied (`D-410`).** After description/community update, compare the final saved
graph's global community labels and every node's community_name against the intended names bound to complete
current member sets. Answer JSON or a current tool state is not applied-name evidence. In the graphify 0.17.1
cached-label case observed in D-409, update retained older names; the existing graphify label assistant
emit/answer/ingest cycle applied the member-derived names. When needed, use that supported cycle, then
independently compare complete member sets before/after, all intended global/node names, zero map
contradictions/multi-name IDs, every fragment-owned node/edge field, completed semantic work and exact
branch/analyzed revision. `prepare` re-merges after its destructive steps, and composition refuses fragment-field, name-binding and
raw lifecycle mismatches; complete before/after member-set comparison stays part of Lane B's exact-hash review. On failure, keep the
evidence and use `recover` or a new work folder. Publication requires Lane B's acceptance record for the exact bytes
(`D-425`).

## 6. `G54` — closed, and what a swap would actually cost `[V1]`

**Closed 2026-08-20 (`D-60`), verified from source with nothing installed.** The route previously recorded here — install `uv`, install `graphifyy` alongside, diff `graphify --help` — **was never necessary.**

### The earlier warning here overstated the risk

This section used to say: *"uninstalling npm first, then discovering upstream lacks `merge-graphs` and `build --fragment`… the curated layer cannot be re-merged by the remaining tool. The fragments survive — but nothing installed can consume them."*

**That is wrong.** `merge7.js` is **plain Node** — it requires `fs` and `path`, reads and writes JSON, and **never invokes graphify.** The curated layer's rebuild depends on Node, not on either distribution. **The fragments were never stranded.**

### What a swap would actually break

| Breaks | Severity |
|---|---|
| `portable-check`, `migrate-state`, `review-delta`, `summary`, `hook-rebuild` | **Confirmed absent upstream.** Five mandated rules become unrunnable |
| Output location — upstream writes `graphify-out/` | `.gitignore` ignores `.graphify/` only, so generated files would start appearing in `git status` |
| **Graph schema** — does upstream `graph.json` use `links` and the same node fields? | **Unverified, and the real residual risk.** `merge7.js` depends on that shape, not on the CLI |

**The schema is the exposure, not the command list** — and it was not on the original nine-item list at all. **A risk register that names the wrong risk is worse than a short one**, because it spends attention where nothing is at stake.

### If a swap is ever reconsidered

**Verify the schema first, from source, before anything else.** Command availability is now known; shape compatibility is not. And there is still no reason to uninstall anything — the two distributions can coexist, and `D-51` stands.

## 7. Scope limits `[V1]`

Closes no Open Decision in the product tier stack. Authorizes no code, schema, or migration. Records tooling provenance only. `G54` **closed 2026-08-20** (`D-60`). The graph-schema compatibility question is **newly named and open**, and is the only live item should a swap ever be reconsidered.
