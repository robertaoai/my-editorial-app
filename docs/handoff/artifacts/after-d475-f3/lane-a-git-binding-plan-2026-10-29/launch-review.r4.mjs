// PROPOSED — NOT EXECUTED. Revision r4 of launch-review.mjs (r4 changes only the completion record; r1-r3 kept) (plan packet lane-a-git-binding-plan-2026-10-29, Lane A,
// 2026-10-29). Runs only after Lane B reviews this file and the fresh child script by SHA-256 and the Judge releases a
// fresh F3 review attempt.
//
// Launches ONE review child (Lane B's fresh F3 entry script) in ONE controlled environment: the parent environment with
// exactly one PATH key, the Git directory frozen at prepare first, the other entries in their existing order, then the
// guard's own sanitizedEnv. That same object is used for resolution, version and configuration queries, bindingFindings,
// snapshots and the child (whose subprocesses inherit it). Nothing else changes: no guard rule, binding, STATE, candidate
// byte, parent environment, user/machine PATH, profile or Git configuration; no alias, shim, wrapper, replacement or link.
//
// Exit codes: 0 = every gate passed, the child started and exited 0 with no signal or spawn error, the after-snapshot equals
// the before-snapshot and the parent PATH is unchanged; 2 = stopped before the child (no child ran); 3 = the child failed
// (nonzero or null exit, signal or spawn error); 4 = preservation failed or the after-snapshot could not be taken;
// 5 = an internal error; 6 = a finalization write failed (preliminary or completion record). When several apply, the
// highest code wins; every one is recorded. The authoritative record is launcher-completion.json (or its stderr fallback).
//
// PowerShell (reviewed form):
//   & 'C:\Program Files\nodejs\node.exe' 'C:\CoWork\outputs\lane-a-git-binding-plan-2026-10-29\launch-review.r4.mjs' --child 'C:\CoWork\outputs\lane-b-after-d475-f3-r2-2026-10-29\entry.mjs' --child-sha256 '<64 hex, fixed at review>' --out 'C:\CoWork\outputs\lane-b-after-d475-f3-r2-2026-10-29\launcher-run-1'
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto'; import { spawnSync, execFileSync } from 'node:child_process'; import { pathToFileURL } from 'node:url';

const REPO = 'C:\\robertaoai\\my-editorial-app';
const WORK = 'C:\\CoWork\\outputs\\lane-a-graph-sync-after-d475-2026-10-29\\work';
const ANSWERS = 'C:\\CoWork\\outputs\\lane-a-graph-sync-after-d475-2026-10-29\\evidence\\answers-proposed.r1.json';
const FRESH = 'C:\\CoWork\\outputs\\lane-b-after-d475-f3-r2-2026-10-29';   // the fresh external review packet (fixed at review)
const OUTPUTS = 'C:\\CoWork\\outputs';
const PROTECTED = [REPO, WORK, 'C:\\CoWork\\myeditorialapp', 'C:\\CoWork\\outputs\\sync-20261028'];
const B050 = 'docs/handoff/B-050-hook-rebuild-resets-graphify-branch-metadata.md';
const EXPECT = {
  head: '71dfbbe7a09f194a9986c1f29d42ad507aec1af7', source: '22b0a8ce2fb06c16152fa9490d21aae829a45974', workId: '7bd2af2f-82a0-40fc-872c-31009278ff1c',
  state: '1fd1a8885ac5903e4707057cce53e28b9dd8a044131e55dc6bfa8f12341db53e', graph: 'df076c7c23af91db3b67b9eaea576c0976bec7bd0f2b844254b687be9a01f557',
  manifest: '34a4edeb9516f11cb36d6d2dcfe1ddac99913dbe0427647f919354c4a9990b13', files: 583, answers: '89965adfdaaaddb8d463c2b2644f137f547c85f3cfe2610e068c07c355f97e70',
};

const R = { revision: 'r4', at: new Date().toISOString(), phase: 'start', findings: [], error: null, secondaryErrors: [], child: { started: false }, proof: {} };
let OUT = null, G = null, CAND = null, snap = null, keep = null, PATHKEY = null;
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const shaText = s => crypto.createHash('sha256').update(s).digest('hex');
const canon = p => path.resolve(p).replace(/\//g, '\\').replace(/\\+$/, '').toLowerCase();
const inside = (p, root) => { const a = canon(p), b = canon(root); return a === b || a.startsWith(b + '\\'); };
const ck = (ok, m) => { if (!ok) R.findings.push(`${R.phase}: ${m}`); return ok; };
const noReparse = p => { const real = fs.realpathSync.native(p); return canon(real) === canon(p); };

function exitCode() {
  if (R.error) return 5;
  if (R.proof.preservation && R.proof.preservation.ok !== true) return 4;
  if (R.child.started && !(R.child.status === 0 && R.child.signal === null && R.child.error === null)) return 3;
  if (R.findings.length || !R.child.started) return R.child.started ? 4 : 2;
  return 0;
}
// r3 finalization. Two records, written once each (exclusive create), never overwritten:
//   1. launcher-result.json — PRELIMINARY, marked non-authoritative, written before the post-write candidate check;
//   2. launcher-completion.json — AUTHORITATIVE, written last; it carries the final exit, the preliminary record's hash and
//      its final disposition ("confirmed" or "superseded"), and every finalization result.
// If the completion record cannot be written (or no validated output folder exists), the authoritative record is one JSON
// line on stderr with the same content. The process exit always equals the authoritative record's "exit".
function finish() {
  R.end = new Date().toISOString();
  const prelim = exitCode(); R.exitPreliminary = prelim;
  const fin = R.finalization = { resultWrite: null, postWrite: null };   // r4: the completion write is reported in the completion record itself
  let finalExit = prelim; const raise = c => { finalExit = Math.max(finalExit, c); };
  // 1. Preliminary record, inside the validated output folder only.
  let prelimSha = null;
  if (OUT) {
    const text = JSON.stringify({ record: 'preliminary', authoritative: false, authoritativeRecord: 'launcher-completion.json, or the stderr fallback if that file is absent', ...R }, null, 1) + '\n';
    try { fs.writeFileSync(path.join(OUT, 'launcher-result.json'), text, { flag: 'wx' }); prelimSha = shaText(text); fin.resultWrite = { ok: true, sha256: prelimSha }; }
    catch (e) { fin.resultWrite = { ok: false, error: String(e.message) }; R.secondaryErrors.push(`result write: ${e.message}`); raise(6); }
  } else fin.resultWrite = { ok: false, reason: 'no validated output folder; nothing written' };
  // 2. Post-write candidate check, kept after the result write. A mismatch or an unavailable check is a failure.
  if (CAND && G) {
    try { const m = G.hashTree(CAND), d = G.treeDigest(m), n = Object.keys(m).length;
      fin.postWrite = d === EXPECT.manifest && n === EXPECT.files && m['graph.json'] === EXPECT.graph ? { ok: true, manifest: d, files: n } : { ok: false, reason: 'candidate changed after the result write', manifest: d, files: n }; }
    catch (e) { fin.postWrite = { ok: false, unavailable: true, error: String(e.message) }; }
    if (!fin.postWrite.ok) { R.secondaryErrors.push(`post-write: ${fin.postWrite.reason || 'check unavailable'}`); raise(4); }
  } else {
    fin.postWrite = { ok: false, unavailable: true, reason: 'the candidate was never located (stopped before phase "import"); no post-write proof' };
    if (finalExit === 0) raise(5);   // cannot happen on a correct run; missing proof is never success
  }
  // 3. Authoritative record (r4). The disposition is always computed from the FINAL exit, so it is recomputed whenever a
  //    completion-write failure raises that exit. A file cannot prove its own write, so the completion record carries an
  //    explicit contract instead of a null: the write is proved by the file existing with exactly the serialized bytes,
  //    which the launcher checks by reading it back; any write or read-back failure goes to the stderr fallback.
  const dispositionOf = final => !fin.resultWrite.ok ? 'no preliminary record was written'
    : final === prelim ? 'confirmed' : `superseded: preliminary exit ${prelim}, final exit ${final}`;
  const build = (final, record, completionWrite) => {
    R.exit = final;
    return { record, exit: final, preliminary: { file: OUT ? 'launcher-result.json' : null, written: fin.resultWrite.ok === true, sha256: prelimSha, exit: prelim, disposition: dispositionOf(final) },
      completionWrite, finalization: { resultWrite: fin.resultWrite, postWrite: fin.postWrite }, result: R };
  };
  const fallback = (final, record, completionWrite) => {
    const c = build(final, record, completionWrite);
    process.stderr.write(JSON.stringify(c) + '\n');
    process.exit(final);
  };
  if (!OUT) fallback(finalExit, 'authoritative (stderr: no validated output folder)', { status: 'not attempted', reason: 'no validated output folder' });
  const file = path.join(OUT, 'launcher-completion.json');
  const text = JSON.stringify(build(finalExit, 'authoritative', {
    status: 'proved by existence and read-back',
    contract: 'This file is the authoritative record if it exists with exactly the bytes the launcher serialized; the launcher reads it back after writing. A failed write or read-back yields exit 6 and the stderr fallback, which then supersedes any partial file.',
  }), null, 1) + '\n';
  try { fs.writeFileSync(file, text, { flag: 'wx' }); }
  catch (e) {
    R.secondaryErrors.push(`completion write: ${e.message}`);
    fallback(Math.max(finalExit, 6), 'authoritative (stderr fallback: completion write failed)', { status: 'failed', error: String(e.message) });
  }
  let back = null;
  try { back = fs.readFileSync(file, 'utf8'); } catch (e) { R.secondaryErrors.push(`completion read-back: ${e.message}`); }
  if (back !== text) {
    if (back !== null) R.secondaryErrors.push('completion read-back: the file differs from the serialized record');
    fallback(Math.max(finalExit, 6), 'authoritative (stderr fallback: completion read-back failed)', { status: 'failed', error: back === null ? 'read-back unavailable' : 'read-back mismatch', partialFile: 'launcher-completion.json' });
  }
  process.exit(finalExit);
}

try {
  // Phase "args": every path absolute and Windows-drive form.
  R.phase = 'args';
  const argv = process.argv.slice(2), arg = k => { const i = argv.indexOf(k); return i < 0 ? null : argv[i + 1] ?? null; };
  const child = arg('--child'), childSha = arg('--child-sha256'), out = arg('--out');
  const childArgs = argv.includes('--') ? argv.slice(argv.indexOf('--') + 1) : [];
  R.args = { child, childSha, out, childArgs };
  const abs = p => typeof p === 'string' && /^[A-Za-z]:[\\/]/.test(p) && path.isAbsolute(p);
  ck(abs(child) && abs(out) && /^[0-9a-f]{64}$/.test(childSha || ''), 'require absolute --child and --out and a 64-hex --child-sha256');
  if (R.findings.length) finish();

  // Phase "output": validate the destination BEFORE any write.
  R.phase = 'output';
  ck(fs.existsSync(FRESH) && fs.statSync(FRESH).isDirectory() && noReparse(FRESH), 'the fresh review packet folder is absent or reached through a link');
  ck(canon(path.dirname(FRESH)) === canon(OUTPUTS), 'the fresh review packet is not directly under C:\\CoWork\\outputs');
  ck(!fs.readdirSync(FRESH).some(f => /^SHA256-MANIFEST/i.test(f)), 'the fresh review packet is already sealed');
  ck(inside(out, FRESH) && canon(out) !== canon(FRESH), '--out is not a new folder inside the fresh review packet');
  for (const p of PROTECTED) ck(!inside(out, p) && !inside(FRESH, p), `--out or the packet lies inside protected ${p}`);
  ck(!fs.existsSync(out), '--out already exists');
  ck(fs.existsSync(path.dirname(out)) && noReparse(path.dirname(out)), "--out's parent is absent or reached through a link");
  if (R.findings.length) finish();
  fs.mkdirSync(out); ck(noReparse(out), '--out resolves elsewhere after creation');
  OUT = out; if (R.findings.length) finish();

  // Phase "child-file": the reviewed child script, by bytes.
  R.phase = 'child-file';
  ck(inside(child, FRESH) && fs.existsSync(child) && fs.lstatSync(child).isFile() && !fs.lstatSync(child).isSymbolicLink() && noReparse(child), 'the child script is absent, outside the packet or reached through a link');
  if (!R.findings.length) { R.child.scriptSha256 = sha(child); ck(R.child.scriptSha256 === childSha, 'the child script bytes differ from the reviewed SHA-256'); }
  if (R.findings.length) finish();

  // Phase "state": bindings come from the unchanged ready STATE.
  R.phase = 'state';
  const stateBytes = fs.readFileSync(path.join(WORK, 'STATE.json')); const ST = JSON.parse(stateBytes); const b = ST.frozen.bindings;
  R.state = { sha256: crypto.createHash('sha256').update(stateBytes).digest('hex'), state: ST.state, attempts: ST.attempts, workId: ST.workId, source: ST.frozen.snapshot.head };
  ck(R.state.sha256 === EXPECT.state && ST.state === 'ready' && ST.attempts === 2 && ST.workId === EXPECT.workId && R.state.source === EXPECT.source, 'STATE is not the reviewed ready STATE');
  if (R.findings.length) finish();

  // Phase "import": the operative guard, read only.
  R.phase = 'import';
  G = await import(pathToFileURL(path.join(REPO, 'scripts', 'graphify', 'guarded-rebuild.mjs')).href);
  CAND = path.join(WORK, 'attempt-2', 'staging');

  // Phase "node": the launcher runs under the frozen Node.
  R.phase = 'node';
  R.node = { execPath: process.execPath, frozen: b.node.path };
  ck(canon(process.execPath) === canon(b.node.path) && sha(process.execPath) === b.node.sha256 && process.version === b.node.version, 'not running under the frozen Node (path, bytes or version)');
  if (R.findings.length) finish();

  // Phase "env": ONE controlled environment, built once and never rebuilt.
  R.phase = 'env';
  const gitDir = path.dirname(b.git.path);
  const pathKeys = Object.keys(process.env).filter(k => k.toUpperCase() === 'PATH');
  ck(pathKeys.length === 1, `expected exactly one PATH key in the parent environment, found ${pathKeys.length}`);
  if (R.findings.length) finish();
  PATHKEY = pathKeys[0]; const parentPath = process.env[PATHKEY]; R.proof.parentPathSha256Before = shaText(parentPath);
  const norm = d => d.replace(/^"|"$/g, '').replace(/[\\/]+$/, '').replace(/\//g, '\\').toLowerCase();
  const rest = parentPath.split(';').filter(Boolean).filter(d => norm(d) !== norm(gitDir));
  const base = {}; for (const [k, v] of Object.entries(process.env)) if (k.toUpperCase() !== 'PATH') base[k] = v;
  base.PATH = [gitDir, ...rest].join(';');
  const ENV = Object.freeze(G.sanitizedEnv(base));
  const envDigest = () => shaText(JSON.stringify(Object.entries(ENV).sort(([a], [c]) => (a < c ? -1 : a > c ? 1 : 0))));
  R.env = { names: Object.keys(ENV).sort(), pathKeys: Object.keys(ENV).filter(k => k.toUpperCase() === 'PATH'), first: ENV.PATH.split(';')[0], entries: ENV.PATH.split(';').length, digestAtBuild: envDigest() };
  ck(R.env.pathKeys.length === 1 && R.env.pathKeys[0] === 'PATH' && norm(R.env.first) === norm(gitDir), 'the controlled environment is not exactly one PATH key with the frozen Git directory first');
  if (R.findings.length) finish();

  // Phase "git": the frozen file, then resolution as libuv does it (working folder first, then PATH, .com before .exe).
  R.phase = 'git';
  ck(fs.existsSync(b.git.path) && sha(b.git.path) === b.git.sha256 && !fs.existsSync(path.join(gitDir, 'git.com')), 'the frozen Git file is absent, changed, or shadowed by a git.com beside it');
  for (const s of ['git.com', 'git.exe', 'git']) ck(!fs.existsSync(path.join(REPO, s)), `a ${s} in the working folder would shadow the bound git`);
  let resolved = null;
  for (const d of ENV.PATH.split(';').filter(Boolean)) { for (const e of ['.com', '.exe']) { const p = path.join(d.replace(/^"|"$/g, ''), 'git' + e); try { if (fs.statSync(p).isFile()) { resolved = p; break; } } catch {} } if (resolved) break; }
  R.git = { frozen: b.git, resolved };
  if (!R.findings.length && resolved) { R.git.resolvedSha256 = sha(resolved); R.git.resolvedVersion = execFileSync(resolved, ['--version'], { encoding: 'utf8', env: ENV }).trim(); }
  ck(resolved && canon(resolved) === canon(b.git.path) && R.git.resolvedSha256 === b.git.sha256 && R.git.resolvedVersion === b.git.version, 'the controlled environment resolves a different Git (path, bytes or version)');
  if (R.findings.length) finish();

  // Phase "bindings": the guard's own check, same environment, both generated checkouts.
  R.phase = 'bindings';
  R.bindingFindings = {
    checkout: G.bindingFindings(b, { checkout: path.join(WORK, 'attempt-2', 'gen', 'checkout'), env: ENV }),
    fresh: G.bindingFindings(b, { checkout: path.join(WORK, 'attempt-2', 'gen', 'fresh'), env: ENV }),
  };
  ck(R.bindingFindings.checkout.length === 0 && R.bindingFindings.fresh.length === 0, 'guard bindingFindings are not zero for both generated checkouts');
  if (R.findings.length) finish();

  // Phase "before": protected bindings, read with the same environment.
  R.phase = 'before';
  const g = (...a) => execFileSync(b.git.path, ['-C', REPO, ...a], { encoding: 'utf8', env: ENV }).replace(/\r/g, '').trimEnd();
  keep = s => JSON.stringify((({ head, status, staged, b050, state, answers, candidate, config, refsOutsideTurnDiffs, live }) => ({ head, status, staged, b050, state, answers, candidate, config, refsOutsideTurnDiffs, live }))(s));
  snap = () => { const m = G.hashTree(CAND); return {
    head: g('rev-parse', 'HEAD'), status: g('status', '--porcelain=v1', '--untracked-files=all'), staged: g('diff', '--cached', '--name-only'),
    b050: sha(path.join(REPO, B050)), state: sha(path.join(WORK, 'STATE.json')), answers: sha(ANSWERS),
    candidate: { files: Object.keys(m).length, manifest: G.treeDigest(m), graph: m['graph.json'], map: shaText(JSON.stringify(Object.entries(m).sort())) },
    config: shaText(g('config', '--list', '--show-origin')),
    refsOutsideTurnDiffs: shaText(g('for-each-ref', '--format=%(objectname) %(refname)').split('\n').filter(l => !l.includes(' refs/codex/turn-diffs/')).join('\n')),
    live: { graph: sha('C:\\CoWork\\myeditorialapp\\.graphify\\graph.json'), receipts: fs.readdirSync('C:\\CoWork\\myeditorialapp\\.graphify-receipts').filter(f => /^release-.+\.json$/.test(f)).length, lock: fs.existsSync('C:\\CoWork\\myeditorialapp\\.graphify.lock'), journal: fs.existsSync('C:\\CoWork\\myeditorialapp\\.graphify-txn.json') },
  }; };
  R.proof.before = snap();
  const bf = R.proof.before;
  ck(bf.head === EXPECT.head && bf.status === '' && bf.staged === '' && bf.state === EXPECT.state && bf.answers === EXPECT.answers && bf.candidate.files === EXPECT.files && bf.candidate.manifest === EXPECT.manifest && bf.candidate.graph === EXPECT.graph, 'protected bindings differ from the reviewed values before the child');
  if (R.findings.length) finish();

  // Phase "child": the frozen Node, no shell, cwd = the repository, the SAME environment object.
  R.phase = 'child';
  R.env.digestAtSpawn = envDigest(); ck(R.env.digestAtSpawn === R.env.digestAtBuild, 'the controlled environment changed before the spawn');
  if (R.findings.length) finish();
  R.child.started = true; R.child.start = new Date().toISOString();
  const res = spawnSync(b.node.path, [child, ...childArgs], { cwd: REPO, env: ENV, stdio: 'inherit', shell: false, windowsHide: true });
  R.child.end = new Date().toISOString(); R.child.status = res.status; R.child.signal = res.signal ?? null; R.child.error = res.error ? String(res.error.message) : null;
  R.child.processCreated = !!res.pid;   // a spawn error without a pid means no child process existed; still a child failure (exit 3)

  // Phase "after": attempted whenever the before-snapshot exists, whatever the child did.
  R.phase = 'after';
  afterState();
  finish();
} catch (e) {
  R.error = { phase: R.phase, message: String(e && e.message || e), stack: String(e && e.stack || '').split('\n').slice(0, 4) };
  // Attempt the after-state whenever a before-snapshot exists; record why it is unavailable otherwise. The original
  // error stays in R.error; secondary errors are appended, never substituted.
  if (R.proof.before && !R.proof.after) { try { afterState(); } catch (e2) { R.secondaryErrors.push(`after-state: ${e2.message}`); } }
  else if (!R.proof.before) R.proof.after = { unavailable: true, reason: 'no before-snapshot was taken; nothing to compare' };
  try { finish(); } catch (e3) {
    // finish() itself failed: the authoritative record is this stderr line; it keeps the original error, phase, child status
    // and every secondary error, and the exit is never lower than 5.
    const code = Math.max(5, R.exit ?? 0);
    process.stderr.write(JSON.stringify({ record: 'authoritative (stderr fallback: finalization threw)', exit: code, original: R.error, phase: R.phase, child: R.child, secondaryErrors: R.secondaryErrors, finalizationError: String(e3 && e3.message || e3), finalization: R.finalization ?? null }) + '\n');
    process.exit(code);
  }
}

function afterState() {
  try { R.proof.after = snap(); }
  catch (e) { R.proof.after = { unavailable: true, error: e.message }; }
  R.proof.parentPathSha256After = PATHKEY ? shaText(process.env[PATHKEY] ?? '') : null;
  R.proof.preservation = R.proof.after.unavailable
    ? { ok: false, reason: 'after-snapshot unavailable; preservation not proved' }
    : { ok: keep(R.proof.before) === keep(R.proof.after) && R.proof.parentPathSha256Before === R.proof.parentPathSha256After };
  if (!R.proof.preservation.ok) R.findings.push('after: preservation not proved');
}
