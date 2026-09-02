// Reference merge script for the curated graph layer.
// Repo-relative paths only — run from the repo root: node docs/graph-fragments/merge7.js [fragment]
// Supersedes merge6.js (which carried an absolute scratchpad path). See README.md §4.
//
// B071-R46/R54/R60: this used to skip any node ID or edge key already present in the graph,
// so re-running it after editing a fragment's own description silently left the graph stale —
// a same-node-count rebuild looked clean while returning old text. It now performs a
// deterministic upsert: an existing ID/key has its fragment-owned fields updated in place,
// never skipped. A fragment that defines the same ID/key twice against conflicting field
// values is a fragment-authoring error and fails the run rather than silently picking one.
const fs = require('fs');
const path = require('path');

const fragPath = process.argv[2] || 'docs/graph-fragments/frag7.json';
const gPath = '.graphify/graph.json';

const g = JSON.parse(fs.readFileSync(gPath, 'utf8'));
const frag = JSON.parse(fs.readFileSync(fragPath, 'utf8'));

// Fields a fragment owns on a node/edge it defines. `_src`/`_tgt` are graph-internal and never
// fragment-owned; anything else present on the fragment object is authoritative from the fragment.
const nodeById = new Map(g.nodes.map(n => [n.id, n]));
let addedN = 0, updatedN = 0;
const seenFragNodeIds = new Map();
for (const n of frag.nodes) {
  const prior = seenFragNodeIds.get(n.id);
  if (prior && JSON.stringify(prior) !== JSON.stringify(n)) {
    throw new Error(`merge7: fragment ${path.basename(fragPath)} defines node "${n.id}" twice with conflicting fields`);
  }
  seenFragNodeIds.set(n.id, n);

  const existing = nodeById.get(n.id);
  if (existing) {
    Object.assign(existing, n);
    updatedN++;
  } else {
    g.nodes.push(n);
    nodeById.set(n.id, n);
    addedN++;
  }
}
const ids = new Set(g.nodes.map(nd => nd.id));

// graph.json stores relationships under `links`; fragments declare them under `edges`.
// Copying `edges` across unchanged produces degree-zero orphans that fail silently.
const key = l => l.source + '>>' + l.target + '>>' + l.relation;
g.links = g.links || [];
const linkByKey = new Map(g.links.map(l => [key(l), l]));
let addedE = 0, updatedE = 0;
const dangling = [];
const seenFragEdgeKeys = new Map();
for (const e of (frag.edges || [])) {
  if (!ids.has(e.source) || !ids.has(e.target)) { dangling.push(e.source + ' -> ' + e.target); continue; }
  const k = key(e);
  const priorE = seenFragEdgeKeys.get(k);
  if (priorE && JSON.stringify(priorE) !== JSON.stringify(e)) {
    throw new Error(`merge7: fragment ${path.basename(fragPath)} defines edge "${k}" twice with conflicting fields`);
  }
  seenFragEdgeKeys.set(k, e);

  const existingE = linkByKey.get(k);
  if (existingE) {
    Object.assign(existingE, e, { _src: e.source, _tgt: e.target });
    updatedE++;
  } else {
    const created = Object.assign({}, e, { _src: e.source, _tgt: e.target });
    g.links.push(created);
    linkByKey.set(k, created);
    addedE++;
  }
}

g.graph = g.graph || {};
g.graph.community_labels = g.graph.community_labels || {};
g.graph.community_labels['28'] = 'V1 Functional Specifications';
g.graph.community_labels['29'] = 'Data Lifecycle and Compliance';
g.graph.community_labels['30'] = 'Tooling Provenance and Graph Durability';

fs.writeFileSync(gPath, JSON.stringify(g, null, 1));
console.log('fragment:', path.basename(fragPath));
console.log('nodes added:', addedN, '| updated:', updatedN);
console.log('links added:', addedE, '| updated:', updatedE);
console.log('dangling dropped:', dangling.length, dangling.length ? dangling : '');
console.log('TOTAL nodes:', g.nodes.length, '| links:', g.links.length);

// Semantic-equality check (B071-R46/R54/R60): every fragment-owned node/edge field must be
// byte-identical in the just-written graph — not merely present by ID/count. Run standalone as
// `node docs/graph-fragments/merge7.js <fragment> --verify-only` to check without writing, or it
// runs automatically as the last step of every merge above.
function verify(freshGraph, fragment) {
  const freshById = new Map(freshGraph.nodes.map(n => [n.id, n]));
  const mismatches = [];
  for (const n of fragment.nodes) {
    const actual = freshById.get(n.id);
    if (!actual) { mismatches.push(`node "${n.id}" missing after merge`); continue; }
    for (const field of Object.keys(n)) {
      if (JSON.stringify(actual[field]) !== JSON.stringify(n[field])) {
        mismatches.push(`node "${n.id}" field "${field}" does not match fragment after merge`);
      }
    }
  }
  const freshByKey = new Map(freshGraph.links.map(l => [key(l), l]));
  for (const e of (fragment.edges || [])) {
    if (!ids.has(e.source) || !ids.has(e.target)) continue; // already reported as dangling
    const actual = freshByKey.get(key(e));
    if (!actual) { mismatches.push(`edge "${key(e)}" missing after merge`); continue; }
    for (const field of Object.keys(e)) {
      if (JSON.stringify(actual[field]) !== JSON.stringify(e[field])) {
        mismatches.push(`edge "${key(e)}" field "${field}" does not match fragment after merge`);
      }
    }
  }
  return mismatches;
}

const verifyOnly = process.argv.includes('--verify-only');
const graphForVerify = verifyOnly ? JSON.parse(fs.readFileSync(gPath, 'utf8')) : g;
const mismatches = verify(graphForVerify, frag);
if (mismatches.length) {
  console.error('SEMANTIC EQUALITY CHECK FAILED:');
  for (const m of mismatches) console.error('  -', m);
  process.exitCode = 1;
} else {
  console.log('semantic equality check: PASS —', frag.nodes.length, 'node(s),', (frag.edges || []).length, 'edge(s) match fragment exactly');
}
