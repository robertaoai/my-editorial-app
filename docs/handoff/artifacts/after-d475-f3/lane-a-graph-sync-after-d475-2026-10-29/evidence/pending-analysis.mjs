// Read-only: for each pending community, its complete member list at the candidate and the closest baseline community
// (Jaccard) with its name and member differences. Hashing follows the guard's proposeNames. Writes one output (wx).
import fs from 'fs'; import crypto from 'crypto';
const W = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work/';
const P = JSON.parse(fs.readFileSync(W + 'PENDING.json', 'utf8'));
const cand = JSON.parse(fs.readFileSync(W + 'attempt-1/gen/checkout/.graphify/graph.json', 'utf8'));
const base = JSON.parse(fs.readFileSync(W + 'attempt-1/baseline/graph.json', 'utf8'));
const groups = g => { const m = new Map(); for (const n of g.nodes) { const k = String(n.community); if (!m.has(k)) m.set(k, { ids: [], name: n.community_name }); m.get(k).ids.push(n.id); } for (const v of m.values()) { v.ids = [...new Set(v.ids)].sort(); v.hash = crypto.createHash('sha256').update(JSON.stringify(v.ids)).digest('hex'); } return m; };
const C = groups(cand), B = groups(base), node = new Map(cand.nodes.map(n => [n.id, n])), bnode = new Map(base.nodes.map(n => [n.id, n]));
const show = (id, m) => { const n = m.get(id) || {}; return `${n.label || id} [${(n.source_file || '').replace(/^.*docs\//, 'docs/')}]`; };
const out = [];
for (const p of P.communities) {
  const c = C.get(String(p.community)); if (!c || c.hash !== p.memberSetSha256) throw new Error('hash mismatch ' + p.community);
  let best = null; for (const [k, b] of B) { const s = new Set(b.ids); const inter = c.ids.filter(x => s.has(x)).length; const j = inter / (c.ids.length + b.ids.length - inter); if (!best || j > best.j) best = { k, j, name: b.name, inter, size: b.ids.length, ids: b.ids }; }
  const bs = new Set(best.ids), cs = new Set(c.ids);
  out.push({ community: p.community, hash: p.memberSetSha256, size: c.ids.length, closest: { baselineCommunity: best.k, name: best.name, jaccard: +best.j.toFixed(3), shared: best.inter, baselineSize: best.size },
    added: c.ids.filter(x => !bs.has(x)).map(x => show(x, node)), removed: best.ids.filter(x => !cs.has(x)).map(x => show(x, bnode)), members: c.ids.map(x => show(x, node)) });
}
fs.writeFileSync('C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/pending-analysis.json', JSON.stringify(out, null, 1) + '\n', { flag: 'wx' });
for (const o of out) console.log(`#${o.community} size ${o.size} | closest ${o.closest.baselineCommunity} "${o.closest.name}" J=${o.closest.jaccard} (${o.closest.shared}/${o.closest.baselineSize}) | +${o.added.length} -${o.removed.length}\n  + ${o.added.slice(0, 8).join(' ; ')}\n  - ${o.removed.slice(0, 8).join(' ; ')}`);
