const fs = require('fs');
const SCRATCH = 'C:/Users/rober_24syk4j/AppData/Local/Temp/claude/C--git-my-editorial-app/94ea59d5-58c8-4c2e-afe1-bb5f1a73d159/scratchpad';

const gPath = './.graphify/graph.json';
const g = JSON.parse(fs.readFileSync(gPath, 'utf8'));
const frag = JSON.parse(fs.readFileSync(SCRATCH + '/frag6.json', 'utf8'));

const ids = new Set(g.nodes.map(n => n.id));
let addedN = 0, dupeN = 0;
for (const n of frag.nodes) {
  if (ids.has(n.id)) { dupeN++; continue; }
  g.nodes.push(n); ids.add(n.id); addedN++;
}

const key = l => l.source + '>>' + l.target + '>>' + l.relation;
const have = new Set((g.links || []).map(key));
let addedE = 0, dupeE = 0;
const dangling = [];
for (const e of frag.edges) {
  if (!ids.has(e.source) || !ids.has(e.target)) { dangling.push(e.source + '->' + e.target); continue; }
  if (have.has(key(e))) { dupeE++; continue; }
  g.links.push(Object.assign({}, e, { _src: e.source, _tgt: e.target }));
  have.add(key(e)); addedE++;
}

g.graph = g.graph || {};
g.graph.community_labels = g.graph.community_labels || {};
g.graph.community_labels['28']='V1 Functional Specifications'; g.graph.community_labels['29']='Data Lifecycle and Compliance';

fs.writeFileSync(gPath, JSON.stringify(g, null, 1));
console.log('nodes added:', addedN, '| dupes skipped:', dupeN);
console.log('links added:', addedE, '| dupes skipped:', dupeE);
console.log('dangling dropped:', dangling.length, dangling.length ? dangling : '');
console.log('TOTAL nodes:', g.nodes.length, '| links:', g.links.length);
