// Reference merge script for the curated graph layer.
// Repo-relative paths only — run from the repo root: node docs/graph-fragments/merge7.js [fragment]
// Supersedes merge6.js (which carried an absolute scratchpad path). See README.md §4.
const fs = require('fs');
const path = require('path');

const fragPath = process.argv[2] || 'docs/graph-fragments/frag7.json';
const gPath = '.graphify/graph.json';

const g = JSON.parse(fs.readFileSync(gPath, 'utf8'));
const frag = JSON.parse(fs.readFileSync(fragPath, 'utf8'));

const ids = new Set(g.nodes.map(n => n.id));
let addedN = 0, dupeN = 0;
for (const n of frag.nodes) {
  if (ids.has(n.id)) { dupeN++; continue; }
  g.nodes.push(n); ids.add(n.id); addedN++;
}

// graph.json stores relationships under `links`; fragments declare them under `edges`.
// Copying `edges` across unchanged produces degree-zero orphans that fail silently.
const key = l => l.source + '>>' + l.target + '>>' + l.relation;
const have = new Set((g.links || []).map(key));
let addedE = 0, dupeE = 0;
const dangling = [];
for (const e of (frag.edges || [])) {
  if (!ids.has(e.source) || !ids.has(e.target)) { dangling.push(e.source + ' -> ' + e.target); continue; }
  if (have.has(key(e))) { dupeE++; continue; }
  g.links.push(Object.assign({}, e, { _src: e.source, _tgt: e.target }));
  have.add(key(e)); addedE++;
}

g.graph = g.graph || {};
g.graph.community_labels = g.graph.community_labels || {};
g.graph.community_labels['28'] = 'V1 Functional Specifications';
g.graph.community_labels['29'] = 'Data Lifecycle and Compliance';
g.graph.community_labels['30'] = 'Tooling Provenance and Graph Durability';

fs.writeFileSync(gPath, JSON.stringify(g, null, 1));
console.log('fragment:', path.basename(fragPath));
console.log('nodes added:', addedN, '| dupes skipped:', dupeN);
console.log('links added:', addedE, '| dupes skipped:', dupeE);
console.log('dangling dropped:', dangling.length, dangling.length ? dangling : '');
console.log('TOTAL nodes:', g.nodes.length, '| links:', g.links.length);
