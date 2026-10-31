// Read-only review probe: does the guard export every function entry.mjs calls, and does STATE / the candidate carry every
// field entry.mjs reads? Static text and JSON reads only; no guard function is called.
import fs from 'node:fs';
const guard = fs.readFileSync('C:/robertaoai/my-editorial-app/scripts/graphify/guarded-rebuild.mjs', 'utf8');
const entry = fs.readFileSync('C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/entry.mjs', 'utf8');
const used = [...new Set([...entry.matchAll(/\bG\.([A-Za-z_]\w*)/g)].map(m => m[1]))].sort();
const exported = name => new RegExp(`export (?:async )?(?:function|const|let) ${name}\\b`).test(guard);
console.log('guard functions used:', used.length, 'missing exports:', used.filter(n => !exported(n)));
const W = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work/';
const ST = JSON.parse(fs.readFileSync(W + 'STATE.json', 'utf8'));
const r = ST.ready, s = r.selection;
console.log('ready keys:', Object.keys(r).sort().join(','));
console.log('caller keys:', Object.keys(r.caller || {}).sort().join(','));
console.log('selection keys:', Object.keys(s || {}).sort().join(','), '| brackets:', Object.keys(s.brackets || {}).join(','), '| calls:', (s.calls || []).length, '| call[0] keys:', Object.keys((s.calls || [])[0] || {}).join(','));
console.log('frozen keys:', Object.keys(ST.frozen).sort().join(','), '| snapshot keys:', Object.keys(ST.frozen.snapshot).sort().join(','));
console.log('frozen.snapshot.refs is array:', Array.isArray(ST.frozen.snapshot.refs), 'config is string:', typeof ST.frozen.snapshot.config);
const g = JSON.parse(fs.readFileSync(W + 'attempt-2/staging/graph.json', 'utf8'));
console.log('graph top keys:', Object.keys(g).join(','), '| community_labels:', !!g.community_labels, '| graph.community_labels:', !!(g.graph && g.graph.community_labels), '| links:', Array.isArray(g.links));
const base = JSON.parse(fs.readFileSync(W + 'attempt-2/baseline/graph.json', 'utf8'));
console.log('baseline community_labels:', !!base.community_labels || !!(base.graph && base.graph.community_labels));
console.log('ANSWERS.json exists:', fs.existsSync(W + 'attempt-2/ANSWERS.json'), '| missing-desc raw/cand:', fs.existsSync(W + 'attempt-2/gen/checkout/.graphify/missing-desc.json'), fs.existsSync(W + 'attempt-2/staging/missing-desc.json'));
console.log('attempt-1 graph exists:', fs.existsSync(W + 'attempt-1/gen/checkout/.graphify/graph.json'));
