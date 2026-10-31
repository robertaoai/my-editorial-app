// Source-derived community-name proposals r1 for the cycle after D-475 (work 7bd2af2f). Each name is written from the complete
// member list in pending-analysis.json. Checks: exact pending hash set, uniqueness against baseline and candidate labels and
// within the set, no backslash, no guard foreign-path token. Writes the proposal and its provenance (exclusive create).
import fs from 'fs'; import crypto from 'crypto';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const W = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work/', E = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/';
const P = JSON.parse(fs.readFileSync(W + 'PENDING.json')); const A = JSON.parse(fs.readFileSync(E + 'pending-analysis.json'));
const NAMES = {
  43: 'D-468–D-475 Register Entries, Q3–Q6 Cycle Records, R1 Restoration and B-161 Commits',
  96: 'D-435 B-156 Option A Repairs, M1 Helper Answers, Publication and Review Commits',
  35: 'D-436 Receipt Route, M1 Helper Verification, Publication and SM05 Transition Packet Commits',
};
const pend = P.communities.map(c => c.community).sort((a, b) => a - b), keys = Object.keys(NAMES).map(Number).sort((a, b) => a - b);
if (P.descriptions.length !== 0 || JSON.stringify(pend) !== JSON.stringify(keys)) throw new Error('pending shape');
const live = Object.values(JSON.parse(fs.readFileSync(W + 'attempt-1/baseline/.graphify_labels.json')));
const genL = W + 'attempt-1/gen/checkout/.graphify/.graphify_labels.json'; const gen = fs.existsSync(genL) ? Object.values(JSON.parse(fs.readFileSync(genL))) : [];
const vals = Object.values(NAMES); if (new Set(vals).size !== vals.length) throw new Error('duplicate within set');
for (const n of vals) { if (live.includes(n) || gen.includes(n)) throw new Error('name clash: ' + n); if (n.includes(String.fromCharCode(92))) throw new Error('backslash'); }
const g = fs.readFileSync('C:/robertaoai/my-editorial-app/scripts/graphify/guarded-rebuild.mjs', 'utf8').split('\n');
const tok = n => { const l = g.find(x => x.startsWith(`const ${n} = String.raw\``)); return l.slice(l.indexOf('`') + 1, l.lastIndexOf('`')); };
const CAND = new RegExp(['ENCODED_ANY', 'FILE_TOKEN', 'DRIVE_TOKEN', 'UNC_TOKEN', 'NETWORK_TOKEN'].map(tok).join('|'), 'g');
const hits = vals.flatMap(n => [JSON.stringify(n), n].map(f => f.match(CAND)).filter(Boolean));
const byHash = {}; for (const c of P.communities) byHash[c.memberSetSha256] = NAMES[c.community];
const out = JSON.stringify({ descriptions: {}, communityNames: byHash }, null, 1) + '\n';
fs.writeFileSync(E + 'answers-proposed.r1.json', out, { flag: 'wx' });
const items = A.map(o => ({ community: o.community, memberSetSha256: o.hash, size: o.size, name: NAMES[o.community], closestBaseline: o.closest, added: o.added.length, removed: o.removed.length }));
fs.writeFileSync(E + 'answers-provenance.r1.json', JSON.stringify({ pendingSha256: sha(fs.readFileSync(W + 'PENDING.json')), stateSha256: sha(fs.readFileSync(W + 'STATE.json')), analysisSha256: sha(fs.readFileSync(E + 'pending-analysis.json')), workId: '7bd2af2f-82a0-40fc-872c-31009278ff1c', items, checks: { exactPendingSet: true, distinctFromBaselineLabels: true, distinctFromCandidateLabels: gen.length ? true : 'candidate labels file absent', distinctWithinSet: true, backslash: false, tokenPatternHits: hits.length, limits: 'not guard validation' } }, null, 1) + '\n', { flag: 'wx' });
console.log('answers', sha(Buffer.from(out)), Buffer.byteLength(out), 'names', vals.length, 'hits', hits.length, 'live labels', live.length, 'gen labels', gen.length);
