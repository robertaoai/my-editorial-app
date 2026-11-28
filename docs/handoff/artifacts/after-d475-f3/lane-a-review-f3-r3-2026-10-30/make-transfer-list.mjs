// Read-only on sources: list every file proposed for the transfer (source, bytes, SHA-256, destination, CR flag).
// Writes only TRANSFER-LIST.json in this packet (exclusive create). Nothing is copied.
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto';
const OUT = 'C:/CoWork/outputs/lane-a-review-f3-r3-2026-10-30/';
const SRC = 'C:/CoWork/outputs/';
const DEST = 'docs/handoff/artifacts/after-d475-f3/';
const LANE_A = ['lane-a-graph-sync-after-d475-2026-10-29', 'lane-a-git-binding-plan-2026-10-29', 'lane-a-review-f3-child-2026-10-29', 'lane-a-review-f3-r3-2026-10-30'];
const LANE_B = ['lane-b-after-d475-f3-2026-10-29', 'lane-b-after-d475-f3-r2-preparation-2026-10-29', 'lane-b-after-d475-f3-r2-2026-10-29', 'lane-b-f3-review-consolidation-2026-10-29', 'lane-b-f3-corrections-r3-2026-10-30'];
// The work folder holds 1.15 GB of regenerated checkouts and staging; only its two state records are evidence here.
const WORK_KEEP = new Set(['work/STATE.json', 'work/PENDING.json']);
const SELF = new Set(['lane-a-review-f3-r3-2026-10-30/TRANSFER-LIST.json', 'lane-a-review-f3-r3-2026-10-30/SHA256-MANIFEST.txt']);
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const rows = [];
for (const [lane, packets] of [['A', LANE_A], ['B', LANE_B]]) for (const p of packets) {
  (function walk(dir, rel) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : 1))) {
      const r = rel ? rel + '/' + e.name : e.name, full = path.join(dir, e.name);
      if (e.isDirectory()) { if (r === 'work') { for (const k of WORK_KEEP) { const f = path.join(SRC, p, k); const b = fs.readFileSync(f); rows.push({ lane, packet: p, rel: k, bytes: b.length, sha256: sha(b), cr: b.includes(0x0d), dest: DEST + p + '/' + k }); } continue; } walk(full, r); continue; }
      if (!e.isFile()) throw new Error('not a regular file: ' + full);
      if (SELF.has(p + '/' + r)) continue;
      const b = fs.readFileSync(full);
      rows.push({ lane, packet: p, rel: r, bytes: b.length, sha256: sha(b), cr: b.includes(0x0d), dest: DEST + p + '/' + r });
    }
  })(path.join(SRC, p), '');
}
const summary = { files: rows.length, bytes: rows.reduce((s, x) => s + x.bytes, 0), laneA: rows.filter(x => x.lane === 'A').length, laneB: rows.filter(x => x.lane === 'B').length, withCR: rows.filter(x => x.cr).map(x => x.dest), over1MB: rows.filter(x => x.bytes > 1048576).map(x => [x.dest, x.bytes]) };
fs.writeFileSync(OUT + 'TRANSFER-LIST.json', JSON.stringify({ destinationRoot: DEST, excluded: 'lane-a-graph-sync-after-d475-2026-10-29/work/** except STATE.json and PENDING.json; this list and its packet manifest (self)', summary, rows }, null, 1) + '\n', { flag: 'wx' });
console.log(JSON.stringify(summary, null, 1));
