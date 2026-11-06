// R: append APPEND-B136-AFTER-D475-REQUEST.md to B-136 at S byte-safely and prove the write (base exact prefix, appended bytes).
import fs from 'fs'; import crypto from 'crypto'; import { execFileSync } from 'child_process';
const REPO = 'C:/robertaoai/my-editorial-app/', E = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence-2/';
const P = 'docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const g = (...a) => execFileSync('git', ['-C', REPO, ...a], { encoding: 'utf8' }).replace(/\n$/, '');
if (g('rev-parse', 'HEAD') !== '22b0a8ce2fb06c16152fa9490d21aae829a45974' || g('status', '--porcelain=v1', '--untracked-files=all') !== '') throw new Error('baseline');
const base = execFileSync('git', ['-C', REPO, 'cat-file', 'blob', 'HEAD:' + P], { maxBuffer: 64 * 1024 * 1024 });
const app = fs.readFileSync(E + 'APPEND-B136-AFTER-D475-REQUEST.md');
if (app.includes(Buffer.from('\r'))) throw new Error('CR in append');
const cand = Buffer.concat([base, app]); fs.writeFileSync(REPO + P, cand); const back = fs.readFileSync(REPO + P);
const r = { base: { bytes: base.length, sha256: sha(base) }, append: { bytes: app.length, sha256: sha(app) }, candidate: { bytes: back.length, sha256: sha(back) }, exactPrefix: back.subarray(0, base.length).equals(base), byteEqual: back.equals(cand) };
fs.writeFileSync(E + 'r-append-proof.json', JSON.stringify(r, null, 1) + '\n', { flag: 'wx' }); console.log(JSON.stringify(r, null, 1));
if (!r.exactPrefix || !r.byteEqual) process.exit(1);
