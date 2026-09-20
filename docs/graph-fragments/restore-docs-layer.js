// Restore the docs layer of the graph from a DATED BACKUP after a rebuild dropped it (`D-246`, `G51`).
//
//   node docs/graph-fragments/restore-docs-layer.js .graphify/2026-09-16/graph.json
//
// Run from the repo root, AFTER `npx graphify hook-rebuild` and BEFORE merging fragments.
//
// Why this exists: a fast rebuild regenerates code and handoff nodes but does not carry the docs
// (non-handoff) nodes, and curated fragment edges dangle onto them. The 2026-09-17 rebuild took the
// graph from ~1800 nodes to ~480 with no error; `merge7.js` then fails on the first dangling edge.
// The dated backup still holds those nodes, so they are replayed BY ID, never re-authored.
//
// What it copies, and nothing else:
//   1. every node whose `source_file` is under docs/ but not docs/handoff/;
//   2. every node a fragment edge names as an endpoint that the graph still lacks;
//   3. links from the backup that touch a copied node and whose both ends now exist.
// Existing nodes and links are never overwritten. It writes .graphify/graph.json in place, so back
// that file up first (README section 5 already requires it).
//
// It restores the backup's descriptions as they were: they can be older than the source documents.
// Coverage passing afterwards is path representation, not semantic currency.
const fs = require('fs');
const path = require('path');

const GPATH = '.graphify/graph.json';
const FRAGMENTS_DIR = 'docs/graph-fragments';
const backupPath = process.argv[2];
if (!backupPath) {
  console.error('usage: node docs/graph-fragments/restore-docs-layer.js <dated-backup-graph.json>');
  process.exit(2);
}

const cur = JSON.parse(fs.readFileSync(GPATH, 'utf8'));
const old = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
const ids = new Set(cur.nodes.map((n) => n.id));
const oldById = new Map(old.nodes.map((n) => [n.id, n]));
const isDoc = (n) => /^docs\//.test(n.source_file || '') && !/^docs\/handoff/.test(n.source_file || '');

const added = new Set();
function take(n) {
  if (!n || ids.has(n.id)) return;
  cur.nodes.push(n);
  ids.add(n.id);
  added.add(n.id);
}

for (const n of old.nodes) if (isDoc(n)) take(n);

const fragNodes = new Set();
const endpoints = new Set();
for (const f of fs.readdirSync(FRAGMENTS_DIR).filter((x) => x.endsWith('.json'))) {
  const j = JSON.parse(fs.readFileSync(path.join(FRAGMENTS_DIR, f), 'utf8'));
  if (!j.nodes) continue; // detect manifests carry no nodes
  j.nodes.forEach((n) => fragNodes.add(n.id));
  for (const e of j.edges || []) {
    endpoints.add(e.source);
    endpoints.add(e.target);
  }
}
const stillMissing = [];
for (const id of endpoints) {
  if (fragNodes.has(id) || ids.has(id)) continue;
  if (oldById.has(id)) take(oldById.get(id));
  else stillMissing.push(id);
}

const key = (l) => `${l.source}>>${l.target}>>${l.relation}`;
const have = new Set(cur.links.map(key));
let links = 0;
for (const l of old.links) {
  if (!(added.has(l.source) || added.has(l.target))) continue;
  if (!ids.has(l.source) || !ids.has(l.target) || have.has(key(l))) continue;
  cur.links.push(l);
  have.add(key(l));
  links++;
}

fs.writeFileSync(GPATH, JSON.stringify(cur));
console.log(`restored ${added.size} node(s) and ${links} link(s) from ${backupPath}`);
if (stillMissing.length) {
  console.log(`fragment endpoints in NEITHER graph nor backup (${stillMissing.length}):`);
  stillMissing.forEach((id) => console.log('   ', id));
  process.exit(1);
}
