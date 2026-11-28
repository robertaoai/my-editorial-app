// Retire stale GENERATED code symbols after a rebuild (`D-421`, raised as `G-D420-1` in `B-050`).
//
//   node docs/graph-fragments/prune-stale-symbols.js <fresh-state-dir> [--dry-run]
//
// Run from the repo root, AFTER `npx graphify hook-rebuild` AND the docs-layer restore, BEFORE the
// fragment merge (`D-422`: the restore re-adds generated code hosted under docs/, so pruning first is
// partly undone).
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
//
// COMPLETION IS PROVEN, NOT PRINTED (`D-423`). The list is printed first as a PLAN. "retired" is
// printed only after the write succeeded AND the persisted graph, re-read from disk, no longer holds
// any planned id or incident link. A write or verification failure exits nonzero with no success
// line: a process stopped mid-run (the `D-422` operator error) can never look complete.
// `--dry-run` prints the plan and never writes.
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

/** Pure check of a persisted graph: ids still present and links still touching them. */
function residue(graph, ids) {
  const drop = new Set(ids);
  const links = graph.links || graph.edges || [];
  return {
    nodes: graph.nodes.filter((n) => drop.has(n.id)).map((n) => n.id),
    links: links.filter((l) => drop.has(l.source) || drop.has(l.target)).length,
  };
}

/**
 * Runs the step. Returns `{ code, lines }`: exit code and the exact output lines. `io` is injectable
 * so a test can make the write fail or the persisted bytes come back wrong.
 */
function runPrune({ freshDir, dryRun = false, gpath = GPATH, branchPath = BRANCH, fragmentsDir = FRAGMENTS_DIR, io = fs }) {
  const out = [];
  const head = (p) => JSON.parse(io.readFileSync(p, 'utf8')).lastAnalyzedHead;
  const curHead = head(branchPath);
  const freshHead = head(path.join(freshDir, 'branch.json'));
  if (!curHead || curHead !== freshHead) {
    out.push(`refused: the fresh extraction analyzed ${freshHead || '(none)'} but this graph analyzed ${curHead || '(none)'}; they must be the same commit`);
    return { code: 1, lines: out };
  }
  const current = JSON.parse(io.readFileSync(gpath, 'utf8'));
  const fresh = JSON.parse(io.readFileSync(path.join(freshDir, 'graph.json'), 'utf8'));
  const { retire, refuse } = findStale(current, fresh, fragmentIds(fragmentsDir));
  if (refuse.length > 0) {
    out.push(`refused: ${refuse.length} curated fragment node(s) typed as code are absent from the fresh extraction:`);
    for (const r of refuse) out.push(`  ${r.id} | ${r.source_file}`);
    return { code: 1, lines: out };
  }
  const ids = retire.map((r) => r.id);
  const { graph, linksRemoved } = pruneGraph(current, ids);
  out.push(`plan: retire ${retire.length} stale generated code node(s) and ${linksRemoved} link(s) at ${curHead.slice(0, 7)}:`);
  for (const r of retire) out.push(`  ${r.id} | ${r.source_file} ${r.source_location || ''} | absent from the fresh extraction`);
  if (dryRun) {
    out.push('dry run: nothing written');
    return { code: 0, lines: out };
  }
  try {
    io.writeFileSync(gpath, JSON.stringify(graph, null, 2));
  } catch (e) {
    out.push(`FAILED: the write did not complete (${e.code || e.message}); nothing is retired`);
    return { code: 1, lines: out };
  }
  let persisted;
  try {
    persisted = JSON.parse(io.readFileSync(gpath, 'utf8'));
  } catch (e) {
    out.push(`FAILED: the persisted graph could not be re-read (${e.code || e.message}); retirement is unverified`);
    return { code: 1, lines: out };
  }
  const left = residue(persisted, ids);
  if (left.nodes.length > 0 || left.links > 0) {
    out.push(`FAILED: the persisted graph still holds ${left.nodes.length} planned id(s) and ${left.links} incident link(s); retirement is unverified`);
    return { code: 1, lines: out };
  }
  out.push(`retired ${ids.length} node(s) and ${linksRemoved} link(s): verified absent in the persisted graph`);
  return { code: 0, lines: out };
}

module.exports = { findStale, pruneGraph, fragmentIds, residue, runPrune };

if (require.main === module) {
  const freshDir = process.argv[2];
  if (!freshDir) {
    console.error('usage: node docs/graph-fragments/prune-stale-symbols.js <fresh-state-dir> [--dry-run]');
    process.exit(2);
  }
  const { code, lines } = runPrune({ freshDir, dryRun: process.argv.includes('--dry-run') });
  for (const l of lines) (code === 0 ? console.log : console.error)(l);
  process.exit(code);
}
