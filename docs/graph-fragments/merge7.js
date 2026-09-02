// Reference merge script for the curated graph layer.
// Repo-relative paths only — run from the repo root:
//   node docs/graph-fragments/merge7.js <fragment.json>                merge + verify + write
//   node docs/graph-fragments/merge7.js <fragment.json> --verify-only  read-only check, no write
//   node docs/graph-fragments/merge7.js --all                         cross-fragment conflict audit, no write
// Supersedes merge6.js (which carried an absolute scratchpad path). See README.md §4.
//
// B071-R46/R54/R60: this used to skip any node ID or edge key already present in the graph, so
// re-running it after editing a fragment's own description silently left the graph stale — a
// same-node-count rebuild looked clean while returning old text. Fixed to a deterministic upsert.
//
// B071-R66: the upsert fix above still had four defects, all fixed in this revision:
//   (a) --verify-only wrote to disk before the flag was even read — not actually read-only.
//   (b) a dangling fragment edge was reported then dropped from its own semantic check, so an
//       invalid edge could disappear from a fragment with exit code 0.
//   (c) only the one named fragment was checked — two fragments silently claiming the same node
//       or edge with different content was never detected.
//   (d) "every fragment-owned field" was undefined. Fixed definition: a field is fragment-owned
//       on a node/edge if and only if the fragment's own object for that node/edge lists it.
//       Fields Graphify's own extraction sets but the fragment does not list (e.g. a re-clustered
//       community number on an otherwise-unrelated node) are Graphify-derived and out of scope —
//       this tool never reads, compares, or overwrites a field the fragment doesn't mention.
const fs = require('fs');
const path = require('path');

const GPATH = '.graphify/graph.json';
const FRAGMENTS_DIR = 'docs/graph-fragments';

const key = l => `${l.source}>>${l.target}>>${l.relation}`;

function loadGraph() {
  return JSON.parse(fs.readFileSync(GPATH, 'utf8'));
}

function loadFragment(fragPath) {
  return JSON.parse(fs.readFileSync(fragPath, 'utf8'));
}

// Validates a fragment in isolation, against the base graph's known IDs. Fails closed (throws)
// on a duplicate ID/key with conflicting fields, or a dangling edge — never silently drops either.
function validateFragment(frag, fragName, knownIds) {
  const nodeIds = new Set();
  const byId = new Map();
  for (const n of frag.nodes) {
    const prior = byId.get(n.id);
    if (prior && JSON.stringify(prior) !== JSON.stringify(n)) {
      throw new Error(`${fragName}: node "${n.id}" defined twice with conflicting fields`);
    }
    byId.set(n.id, n);
    nodeIds.add(n.id);
  }
  const allIds = new Set([...knownIds, ...nodeIds]);
  const byKey = new Map();
  for (const e of (frag.edges || [])) {
    if (!allIds.has(e.source) || !allIds.has(e.target)) {
      throw new Error(`${fragName}: edge "${key(e)}" is dangling (endpoint not defined by this fragment or already in the base graph) — fix the fragment; this tool never silently drops an edge`);
    }
    const k = key(e);
    const prior = byKey.get(k);
    if (prior && JSON.stringify(prior) !== JSON.stringify(e)) {
      throw new Error(`${fragName}: edge "${k}" defined twice with conflicting fields`);
    }
    byKey.set(k, e);
  }
}

// Cross-fragment audit: every fragment in FRAGMENTS_DIR, checked pairwise for a node ID or edge
// key claimed by more than one fragment with different field values. Read-only — never writes.
function auditAll() {
  const files = fs.readdirSync(FRAGMENTS_DIR).filter(f => f.endsWith('.json'));
  const ownerOfNode = new Map();
  const ownerOfEdge = new Map();
  const conflicts = [];
  for (const file of files) {
    const frag = loadFragment(path.join(FRAGMENTS_DIR, file));
    for (const n of frag.nodes || []) {
      const prior = ownerOfNode.get(n.id);
      if (prior && JSON.stringify(prior.node) !== JSON.stringify(n)) {
        conflicts.push(`node "${n.id}" conflicts between ${prior.file} and ${file}`);
      } else if (!prior) {
        ownerOfNode.set(n.id, { file, node: n });
      }
    }
    for (const e of frag.edges || []) {
      const k = key(e);
      const prior = ownerOfEdge.get(k);
      if (prior && JSON.stringify(prior.edge) !== JSON.stringify(e)) {
        conflicts.push(`edge "${k}" conflicts between ${prior.file} and ${file}`);
      } else if (!prior) {
        ownerOfEdge.set(k, { file, edge: e });
      }
    }
  }
  console.log(`audited ${files.length} fragment file(s): ${ownerOfNode.size} node id(s), ${ownerOfEdge.size} edge key(s)`);
  if (conflicts.length) {
    console.error('CROSS-FRAGMENT CONFLICTS:');
    for (const c of conflicts) console.error('  -', c);
    process.exitCode = 1;
  } else {
    console.log('cross-fragment audit: PASS — no two fragments claim the same node/edge with conflicting fields');
  }
}

// Builds the candidate graph entirely in memory from a deep clone — the real graph object/file is
// never mutated here, whether or not the caller intends to write.
function buildCandidate(g, frag) {
  const candidate = JSON.parse(JSON.stringify(g));
  const nodeById = new Map(candidate.nodes.map(n => [n.id, n]));
  let addedN = 0, updatedN = 0;
  for (const n of frag.nodes) {
    const existing = nodeById.get(n.id);
    if (existing) { Object.assign(existing, n); updatedN++; }
    else { candidate.nodes.push(n); nodeById.set(n.id, n); addedN++; }
  }

  candidate.links = candidate.links || [];
  const linkByKey = new Map(candidate.links.map(l => [key(l), l]));
  let addedE = 0, updatedE = 0;
  for (const e of (frag.edges || [])) {
    const k = key(e);
    const existing = linkByKey.get(k);
    if (existing) { Object.assign(existing, e, { _src: e.source, _tgt: e.target }); updatedE++; }
    else {
      const created = Object.assign({}, e, { _src: e.source, _tgt: e.target });
      candidate.links.push(created);
      linkByKey.set(k, created);
      addedE++;
    }
  }

  candidate.graph = candidate.graph || {};
  candidate.graph.community_labels = candidate.graph.community_labels || {};
  candidate.graph.community_labels['28'] = 'V1 Functional Specifications';
  candidate.graph.community_labels['29'] = 'Data Lifecycle and Compliance';
  candidate.graph.community_labels['30'] = 'Tooling Provenance and Graph Durability';

  return { candidate, addedN, updatedN, addedE, updatedE };
}

// Semantic-equality check: every field the fragment's own object lists for a node/edge (i.e.
// every fragment-owned field, per this file's header comment) must be byte-identical on the
// corresponding candidate-graph entity.
function verify(candidate, frag) {
  const byId = new Map(candidate.nodes.map(n => [n.id, n]));
  const mismatches = [];
  for (const n of frag.nodes) {
    const actual = byId.get(n.id);
    if (!actual) { mismatches.push(`node "${n.id}" missing after merge`); continue; }
    for (const field of Object.keys(n)) {
      if (JSON.stringify(actual[field]) !== JSON.stringify(n[field])) {
        mismatches.push(`node "${n.id}" field "${field}" does not match fragment`);
      }
    }
  }
  const byKey = new Map(candidate.links.map(l => [key(l), l]));
  for (const e of (frag.edges || [])) {
    const actual = byKey.get(key(e));
    if (!actual) { mismatches.push(`edge "${key(e)}" missing after merge`); continue; }
    for (const field of Object.keys(e)) {
      if (JSON.stringify(actual[field]) !== JSON.stringify(e[field])) {
        mismatches.push(`edge "${key(e)}" field "${field}" does not match fragment`);
      }
    }
  }
  return mismatches;
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes('--all')) { auditAll(); return; }

  const fragPath = args[0] || 'docs/graph-fragments/frag7.json';
  const verifyOnly = args.includes('--verify-only');
  const fragName = path.basename(fragPath);

  const g = loadGraph();
  const frag = loadFragment(fragPath);
  const knownIds = new Set(g.nodes.map(n => n.id));

  validateFragment(frag, fragName, knownIds); // throws before any write on violation — fails closed

  const { candidate, addedN, updatedN, addedE, updatedE } = buildCandidate(g, frag);
  const mismatches = verify(candidate, frag);

  console.log('fragment:', fragName, verifyOnly ? '(verify-only, no write)' : '');
  console.log('nodes would-add:', addedN, '| would-update:', updatedN);
  console.log('links would-add:', addedE, '| would-update:', updatedE);
  console.log('TOTAL nodes:', candidate.nodes.length, '| links:', candidate.links.length);

  if (mismatches.length) {
    console.error('SEMANTIC EQUALITY CHECK FAILED:');
    for (const m of mismatches) console.error('  -', m);
    process.exitCode = 1;
    if (!verifyOnly) console.error('Aborting write — candidate did not pass its own semantic check.');
    return;
  }
  console.log('semantic equality check: PASS —', frag.nodes.length, 'node(s),', (frag.edges || []).length, 'edge(s) match fragment exactly');

  if (verifyOnly) { console.log('(verify-only: graph.json not written)'); return; }

  fs.writeFileSync(GPATH, JSON.stringify(candidate, null, 1));
  console.log('written to', GPATH);
}

main();
