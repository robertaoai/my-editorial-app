import fs from 'node:fs'; import { createHash } from 'node:crypto'; import { join } from 'node:path'; import { pathToFileURL } from 'node:url'; import { execFileSync } from 'node:child_process';
const REPO = 'C:/robertaoai/my-editorial-app', W = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work/', ST = W + 'attempt-2/staging';
const G = await import(pathToFileURL(REPO + '/scripts/graphify/guarded-rebuild.mjs').href);
const S = JSON.parse(fs.readFileSync(W + 'STATE.json', 'utf8')); const bytes = fs.readFileSync(join(ST, 'graph.json')); const g = JSON.parse(bytes);
const td = JSON.parse(execFileSync('node', ['C:/CoWork/outputs/lane-a-sr5-publish-2026-10-23/treedigest.mjs', ST], { encoding: 'utf8' }));
const parity = G.fragmentParity(g, join(REPO, 'docs', 'graph-fragments')); const binding = G.nameBinding(g);
const L = JSON.parse(fs.readFileSync(join(ST, '.graphify_labels.json'), 'utf8')); const lv = Object.values(L);
const A = JSON.parse(fs.readFileSync('C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/answers-proposed.r1.json', 'utf8'));
const B = JSON.parse(fs.readFileSync(W + 'attempt-1/baseline/graph.json', 'utf8')); const baseNoDesc = new Set(B.nodes.filter(n => !n.description || !String(n.description).trim()).map(n => n.id));
const noDesc = g.nodes.filter(n => !n.description || !String(n.description).trim()).map(n => n.id);
const nodeName = {}; for (const n of g.nodes) if (n.community_name !== undefined) nodeName[n.community] = n.community_name; let mism = 0; for (const c of Object.keys(L)) if (nodeName[c] !== undefined && nodeName[c] !== L[c]) mism++;
const branch = JSON.parse(fs.readFileSync(join(ST, 'branch.json'), 'utf8'));
const out = { state: S.state, workId: S.workId, source: S.frozen.snapshot.head, baseline: S.frozen.baseline, readyManifest: S.ready.manifest, readyGraph: S.ready.graphSha256,
  graphSha256: createHash('sha256').update(bytes).digest('hex'), treeDigest: td, nodes: g.nodes.length, links: (g.links || g.edges || []).length, communities: new Set(g.nodes.map(n => n.community)).size,
  labels: lv.length, duplicateLabels: lv.filter((v, i) => lv.indexOf(v) !== i).length, answeredNamePresent: Object.values(A.communityNames).every(n => lv.includes(n)), nameBindingFindings: (binding.findings ?? binding).length, nodeLabelMismatches: mism,
  undescribed: noDesc.length, undescribedNotInBaseline: noDesc.filter(id => !baseNoDesc.has(id)), missingDescFile: fs.readFileSync(join(ST, 'missing-desc.json'), 'utf8').trim(),
  parity: parity.summary ?? parity, branch: { lastAnalyzedHead: branch.lastAnalyzedHead, stale: branch.stale } };
out.graphMatches = out.graphSha256 === out.readyGraph; out.manifestMatches = td.digest === out.readyManifest && td.files === 583;
fs.writeFileSync('C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence-2/candidate-verification.json', JSON.stringify(out, null, 1), { flag: 'wx' }); console.log(JSON.stringify(out, null, 1));
