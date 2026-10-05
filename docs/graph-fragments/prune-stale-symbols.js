// Retire stale GENERATED code symbols after a rebuild (`D-421`, raised as `G-D420-1` in `B-050`).
//
//   node docs/graph-fragments/prune-stale-symbols.js <fresh-state-dir> [--dry-run]
//
// Run from the repo root, AFTER `npx graphify hook-rebuild` and BEFORE the docs-layer restore.
// <fresh-state-dir> is the `.graphify` directory of a FROM-EMPTY extraction of the SAME commit,
// made in a disposable clone whose `origin` is the caller's (README section 4 shows how).
//
// Why this exists: `hook-rebuild` carries the existing graph.json forward, so a generated code node
// the current extraction no longer produces survives every later rebuild. Measured in `D-421`:
// neither `graphify update --force` nor clearing `cache/` removes it, and a from-empty rebuild in
// place drops ~1,500 accumulated nodes (historical commits, handoff and docs layers) with it. So
// the stale nodes are identified against a fresh extraction and retired BY ID, nothing else.
//
// A node is retired only when ALL hold:
//   1. its `file_type` is `code` (a generated symbol, never a curated concept);
//   2. the fresh extraction of the same analyzed commit does not contain its id;
//   3. no curated fragment declares it.
// Its incident links go with it. Every retired id is listed. A `code` node that a fragment declares
// and the fresh extraction lacks is REFUSED (exit 1), never pruned: a curated node has drifted and
// needs a person. It writes .graphify/graph.json in place, so back that file up first (section 5).
const fs = require('fs');
const path = require('path');

const GPATH = '.graphify/graph.json';
const BRANCH = '.graphify/branch.json';
const FRAGMENTS_DIR = 'docs/graph-fragments';

/** Ids declared by curated fragments. */
function fragmentIds(dir = FRAGMENTS_DIR) {
  const ids = new Set();
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json'))) {
    const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    for (const n of j.nodes || []) ids.add(n.id);
  }
  return ids;
}

/**
 * Pure: which nodes of `current` are stale against `fresh`. Returns `{ retire, refuse }`, each a
 * list of `{ id, source_file, source_location }`.
 */
function findStale(current, fresh, fragments) {
  const freshIds = new Set(fresh.nodes.map((n) => n.id));
  const retire = [];
  const refuse = [];
  for (const n of current.nodes) {
    if (n.file_type !== 'code' || freshIds.has(n.id)) continue;
    const entry = { id: n.id, source_file: n.source_file, source_location: n.source_location };
    (fragments.has(n.id) ? refuse : retire).push(entry);
  }
  return { retire, refuse };
}

/** Pure: `graph` without the given ids and every link touching them. */
function pruneGraph(graph, ids) {
  const drop = new Set(ids);
  const key = graph.links ? 'links' : 'edges';
  const kept = (graph[key] || []).filter((l) => !drop.has(l.source) && !drop.has(l.target));
  return {
    graph: { ...graph, nodes: graph.nodes.filter((n) => !drop.has(n.id)), [key]: kept },
    linksRemoved: (graph[key] || []).length - kept.length,
  };
}

module.exports = { findStale, pruneGraph, fragmentIds };

if (require.main === module) {
  const freshDir = process.argv[2];
  const dryRun = process.argv.includes('--dry-run');
  if (!freshDir) {
    console.error('usage: node docs/graph-fragments/prune-stale-symbols.js <fresh-state-dir> [--dry-run]');
    process.exit(2);
  }
  const head = (p) => JSON.parse(fs.readFileSync(p, 'utf8')).lastAnalyzedHead;
  const curHead = head(BRANCH);
  const freshHead = head(path.join(freshDir, 'branch.json'));
  if (!curHead || curHead !== freshHead) {
    console.error(`refused: the fresh extraction analyzed ${freshHead || '(none)'} but this graph analyzed ${curHead || '(none)'}; they must be the same commit`);
    process.exit(1);
  }
  const current = JSON.parse(fs.readFileSync(GPATH, 'utf8'));
  const fresh = JSON.parse(fs.readFileSync(path.join(freshDir, 'graph.json'), 'utf8'));
  const { retire, refuse } = findStale(current, fresh, fragmentIds());
  if (refuse.length > 0) {
    console.error(`refused: ${refuse.length} curated fragment node(s) typed as code are absent from the fresh extraction:`);
    for (const r of refuse) console.error(`  ${r.id} | ${r.source_file}`);
    process.exit(1);
  }
  const { graph, linksRemoved } = pruneGraph(current, retire.map((r) => r.id));
  console.log(`${dryRun ? 'would retire' : 'retired'} ${retire.length} stale generated code node(s) and ${linksRemoved} link(s) at ${curHead.slice(0, 7)}:`);
  for (const r of retire) console.log(`  ${r.id} | ${r.source_file} ${r.source_location || ''} | absent from the fresh extraction`);
  if (!dryRun) fs.writeFileSync(GPATH, JSON.stringify(graph, null, 2));
}
