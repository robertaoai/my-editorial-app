// `B-050` guarded Graphify procedure — STAGES F1 (`D-418`–`D-421`), F2
// (`D-423`, corrected by `D-424`) AND F3 (`D-425`), under contract v4 at `d733513` with the two conditions adopted at
// `b97f93f`. F1 sections follow first; the F2 sections come after them.
//
// WHY THIS EXISTS. The pinned Graphify CLI (0.17.1) writes `branch.json` and
// `worktree.json` unconditionally. When its Git context cannot be resolved, it
// records null `branchName`/`lastSeenHead`/`lastAnalyzedHead` beside
// `stale: false` and still exits 0 (`B-050` diagnostic `d91e748`). The raw tool
// stays defective; the guard protects only cooperating guarded invocations.
//
// WHAT F1 IS. Pure parsing and validation, plus an explicit refusal entry point:
//   * canonical path validation — `file:` URIs parsed first, percent-decoding
//     and dot-segment canonicalization, network authorities and malformed
//     forms refused, component boundaries, disposable roots refused;
//   * containment of runtime paths against the live target, both directions;
//   * schema-specific lifecycle validation with raw-null refusal;
//   * transaction-journal detection, which `docs-drift.mjs` runs BEFORE its
//     absent-state and git-unavailable skips.
//
// WHAT F2 ADDS (`D-423`). Forward steps 1–5 in isolation — source snapshot,
// baseline under an exclusive lock, generation in a disposable checkout that
// carries the caller's `origin` and ref map, raw-metadata and no-op refusal,
// docs-layer restore, stale-symbol prune, ordered fragment merge and fill,
// validation, composition and a reviewable candidate manifest — plus the
// step 6–7 publication and owned-recovery state machine. Semantic work that
// needs the assistant cycle (new community names, new descriptions) is
// RETURNED AS PENDING, never invented.
//
// THE F2 CORRECTIONS (`D-424`). One fixture boundary (`fixtureBoundary`) runs
// before any write in `publish`, `recover` and `composeCandidate`; supplied
// community names bind by member-set hash only; fragment parity compares every
// declared edge field, by complete order-independent assignment; composition
// protects the bound source repository before any write; `publish` re-checks
// the source snapshot under its lock;
// a prior description is replayed only for a symbol whose source file is
// unchanged since the baseline's analyzed commit.
//
// WHAT F3 ADDS (`D-425`). Guarded live publication through the same
// transaction core: `prepare` → Lane B's acceptance record, introduced by
// its own handoff-only review commit → `publish --review <commit>` → owned
// `recover`. Fixture mode still refuses the real live target, its ancestors
// and descendants; only the live entry checks admit it. The manual
// D-409/D-410 route is retired with no fallback: no fallback means no bypass
// of this guard, not guaranteed restoration. The lock excludes cooperating
// guarded runs only, never a raw `graphify` writer.

import { execFileSync, spawnSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import {
  closeSync, cpSync, existsSync, fsyncSync, lstatSync, mkdirSync, openSync, readdirSync, readFileSync, statSync,
  readlinkSync, realpathSync, renameSync, rmSync, unlinkSync, writeFileSync, writeSync,
} from "node:fs";
import { hostname } from "node:os";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

export const STAGE = "F2";
export const TRANSACTION_JOURNAL = ".graphify-txn.json";
export const JOURNAL_STAGES = ["prepared", "old-moved", "new-in-place", "verified"];
export const LIFECYCLE_SCHEMA = 1;

const CALLER_ROOT = "c:/robertaoai/my-editorial-app";
const DISPOSABLE_ROOTS = ["c:/cowork/outputs"];

// ---------------------------------------------------------------------------
// Canonical path validation (v4 condition 1).
// ---------------------------------------------------------------------------

/**
 * Canonicalizes one absolute-path candidate. Returns `{ path }` (lower-case,
 * forward slashes, dot segments resolved), `{ network: true }` for a UNC path
 * or a `file:` URI with a host authority, or `{ malformed: true }` for anything
 * that cannot be parsed unambiguously. An unknown form is never "no path".
 */
export function canonicalizePath(raw) {
  let p = String(raw);
  // UNC before any separator folding: raw `\\host\share` or JSON-escaped `\\\\host\\share` (F1-R1).
  if (/^(?:\\\\|\\\\\\\\)[^\\/]/.test(p)) return { network: true };
  // Decode first, so an encoded drive colon or separator becomes visible. The
  // limit is three rounds; encoding still present after it is refused (F1-R2).
  for (let i = 0; i < DECODE_LIMIT && /%[0-9A-Fa-f]{2}/.test(p); i++) {
    try {
      p = decodeURIComponent(p);
    } catch {
      return { malformed: true };
    }
  }
  if (/%[0-9A-Fa-f]{2}/.test(p)) return { malformed: true };
  if (/^\\\\[^\\/]/.test(p)) return { network: true }; // a UNC that was encoded
  const uri = /^file:\/\/([^/]*)(\/.*)?$/i.exec(p.replace(/\\/g, "/"));
  if (uri) {
    const host = uri[1].toLowerCase();
    if (host && host !== "localhost") return { network: true };
    p = (uri[2] || "").replace(/^\/(?=[A-Za-z]:)/, "");
  } else if (/^file:/i.test(p)) {
    return { malformed: true };
  }
  p = p.replace(/\\\\/g, "\\").replace(/\\/g, "/");
  if (p.startsWith("//")) return { network: true };
  const drive = /^([A-Za-z]):(\/.*)?$/.exec(p);
  if (!drive) return { malformed: true };
  const parts = [];
  for (const seg of (drive[2] || "/").split("/")) {
    if (seg === "" || seg === ".") continue;
    if (seg === "..") {
      if (parts.length === 0) return { malformed: true }; // escape above the drive
      parts.pop();
    } else {
      parts.push(seg);
    }
  }
  return { path: `${drive[1]}:/${parts.join("/")}`.toLowerCase().replace(/\/$/, "") };
}

/** Same root, or under it at a component boundary — never a sibling prefix. */
export function isWithin(path, root) {
  return path === root || path.startsWith(`${root}/`);
}

// SUPPORTED REPRESENTATION GRAMMAR (F1-R1 `e843edf`, F1-R2 `658aab2`, `D-419`).
//
// 1. Quoted JSON string values are read WHOLE, escapes decoded. A value that
//    BEGINS with a path or URI prefix is canonicalized as its complete value,
//    spaces included — so `"C:/root/a b/../../x"` is judged where it lands.
// 2. Everywhere else, path candidates are whitespace-delimited lexical tokens,
//    each taken whole so an allowed path inside a bad URI cannot hide it:
//    * `file:` tokens of any shape (malformed ones such as `file:/C:/…` or a
//      bare `file:word` are refused);
//    * drive-letter paths with raw or JSON-escaped separators;
//    * UNC paths, raw `\\host\share` or JSON-escaped `\\\\host\\share`;
//    * forward-slash network roots `//host/share` not preceded by a URL scheme;
//    * ANY token containing percent-encoding (rule 4 decides whether it is a path).
//    A raw UNQUOTED value containing spaces is NOT read whole; only its first
//    whitespace-delimited token is. Quote it to have it judged in full.
// 3. Lexical exclusions: a `file:` right after `{` or `,` followed by a plain
//    identifier is an object key (minified `{file:o,…}`); `file:` followed by
//    nothing is prose; a web URL (any scheme but `file:`) at any decoding depth
//    is not a path.
// 4. ONE BOUNDED DECODING POLICY (F1-R3, `D-420`), shared by recognition and
//    validation: a token or quoted value is examined at decoding depths 0–3. If
//    it is path-like at ANY depth (drive + separator or `%`, `file:`, UNC, or
//    `//host`), its complete value is canonicalized, which decodes up to the same
//    three rounds; path-like encoding still present after that is refused,
//    never read as "no path". Recognition may look deeper (DETECTION_CAP)
//    only to notice that a value is path-like, so a value encoded beyond the
//    limit is REFUSED rather than skipped.
export const DECODE_LIMIT = 3;
const FILE_TOKEN = String.raw`(?<![A-Za-z0-9_$.-])file:[^\s"'<>|\x60]+`;
const DRIVE_TOKEN = String.raw`(?<![A-Za-z0-9+.-])[A-Za-z]:(?:\\\\|\\|\/)[^"'\s<>|\x60]*`;
const UNC_TOKEN = String.raw`(?<![\\\w])(?:\\\\\\\\|\\\\)[A-Za-z0-9._$-]+(?:\\\\|\\)[^"'\s<>|\x60]+`;
const NETWORK_TOKEN = String.raw`(?<![:\w/\\])\/\/[A-Za-z0-9][A-Za-z0-9._-]*\/[^"'\s<>|\x60]+`;
const ENCODED_ANY = String.raw`(?<![^\s"'<>|\x60({\[,=])[^\s"'<>|\x60]*%[0-9A-Fa-f]{2}[^\s"'<>|\x60]*`;
// Encoded tokens first, so an encoded token is always taken whole.
const CANDIDATE = new RegExp([ENCODED_ANY, FILE_TOKEN, DRIVE_TOKEN, UNC_TOKEN, NETWORK_TOKEN].join("|"), "g");
const QUOTED = /"((?:[^"\\\n]|\\.)*)"/g;
const PATH_LIKE = /^(?:[A-Za-z]:(?:[\\/]|%)|file:|\\\\|\/\/[A-Za-z0-9])/i;
const WEB_URL = /^(?!file:)[A-Za-z][A-Za-z0-9+.-]*:\/\//i;

/**
 * The decoding depths 0..DECODE_LIMIT of one value, stopping early when no
 * encoding remains or a round cannot decode. Recognition (here) and
 * validation (`canonicalizePath`) use the same limit.
 */
export function decodingDepths(value, cap = DECODE_LIMIT) {
  const depths = [value];
  let p = value;
  for (let i = 0; i < cap && /%[0-9A-Fa-f]{2}/.test(p); i++) {
    try {
      p = decodeURIComponent(p);
    } catch {
      break;
    }
    depths.push(p);
  }
  return depths;
}

// Recognition looks deeper than validation accepts, ONLY to decide that a value
// is path-like: anything path-like that needs more than DECODE_LIMIT rounds is
// then refused by `canonicalizePath` (beyond the limit). Encoded path punctuation
// still present after DETECTION_CAP rounds is refused outright.
export const DETECTION_CAP = 8;
const ENCODED_PATH_PUNCTUATION = /%(?:25)*(?:3[aA]|2[fF]|5[cC])/;

/** `"path"` when the value is path-like at some depth (up to DETECTION_CAP)
 * before any depth reads as a web URL, or still carries encoded path
 * punctuation past the cap; `"web"` for a web URL; otherwise `null`. */
export function classifyRepresentation(value) {
  const depths = decodingDepths(value, DETECTION_CAP);
  for (const d of depths) {
    if (WEB_URL.test(d)) return "web";
    if (PATH_LIKE.test(d)) return "path";
  }
  const last = depths[depths.length - 1];
  if (/%[0-9A-Fa-f]{2}/.test(last) && ENCODED_PATH_PUNCTUATION.test(last)) return "path";
  return null;
}

/** A `file:` token that is really a minified/JSON object key, e.g. `{file:o,…}`. */
function isObjectKey(text, index, token) {
  const before = text.slice(Math.max(0, index - 8), index).replace(/\s+$/, "");
  return /[{,]$/.test(before) && /^file:[A-Za-z_$][\w$]*(?:[,}].*)?$/.test(token);
}

/**
 * Returns the first absolute-path candidate in `text` that is not the caller
 * root or under it, or `null`. Disposable roots, network paths and malformed
 * candidates are always foreign.
 */
export function findForeignPath(text, { allowedRoot = CALLER_ROOT, disposableRoots = DISPOSABLE_ROOTS } = {}) {
  const opts = { root: allowedRoot.toLowerCase(), disposable: disposableRoots.map((d) => d.toLowerCase()) };
  const src = String(text);
  // Rule 1: every quoted JSON string value, whole.
  for (const q of src.matchAll(QUOTED)) {
    let value;
    try {
      value = JSON.parse(`"${q[1]}"`);
    } catch {
      continue; // not a JSON string literal; rule 2 still scans the raw text
    }
    const hit = foreignInValue(value, opts);
    if (hit) return hit;
  }
  // Rule 2: lexical tokens across the raw text.
  return foreignInTokens(src, opts);
}

/** Judges one decoded value: in full when it starts like a path (rule 1), then
 * by its embedded tokens (rule 2). */
function foreignInValue(value, opts) {
  const v = value.trim();
  if (classifyRepresentation(v) === "path" && judge(v, opts)) return v;
  return foreignInTokens(value, opts);
}

function foreignInTokens(src, opts) {
  for (const m of src.matchAll(CANDIDATE)) {
    if (/^file:/i.test(m[0]) && isObjectKey(src, m.index, m[0])) continue;
    // An encoded token is a path only if some decoding depth says so (rule 4).
    if (/%[0-9A-Fa-f]{2}/.test(m[0]) && classifyRepresentation(m[0]) !== "path") continue;
    if (judge(m[0], opts)) return m[0];
  }
  return null;
}

/** True when a candidate is foreign: network, malformed, disposable, or outside the root. */
function judge(candidate, { root, disposable }) {
  const c = canonicalizePath(candidate);
  if (c.network || c.malformed) return true;
  if (disposable.some((d) => isWithin(c.path, d))) return true;
  return !isWithin(c.path, root);
}

// ---------------------------------------------------------------------------
// Containment of runtime paths against the live target.
// ---------------------------------------------------------------------------

/** Resolves links through the nearest existing ancestor, so a path that does
 * not exist yet is still compared at its real location. */
export function canonicalFsPath(p) {
  let head = resolve(p);
  const tail = [];
  while (!existsSync(head)) {
    const parent = dirname(head);
    if (parent === head) break;
    tail.unshift(head.slice(parent.length).replace(/^[\\/]/, ""));
    head = parent;
  }
  let real = head;
  try {
    real = realpathSync.native(head);
  } catch {
    // keep the resolved form
  }
  const c = canonicalizePath(join(real, ...tail));
  return c.path ?? null;
}

/**
 * Refuses any runtime path (candidate, backup, old, staging, evidence) that
 * aliases the live target, contains it, or sits inside it. Returns findings.
 */
export function containmentFindings(liveTarget, runtimePaths) {
  const live = canonicalFsPath(liveTarget);
  if (!live) return [`live target ${liveTarget} cannot be canonicalized`];
  const findings = [];
  for (const [role, p] of Object.entries(runtimePaths)) {
    const c = canonicalFsPath(p);
    if (!c) findings.push(`${role} path ${p} cannot be canonicalized`);
    else if (c === live) findings.push(`${role} path ${p} aliases the live target`);
    else if (isWithin(live, c)) findings.push(`${role} path ${p} contains the live target`);
    else if (isWithin(c, live)) findings.push(`${role} path ${p} sits inside the live target`);
  }
  return findings;
}

// ---------------------------------------------------------------------------
// Lifecycle records, schema 1 (raw-null refusal before any rebinding).
// ---------------------------------------------------------------------------

const HEAD = /^[0-9a-f]{40}$/;

/**
 * Validates RAW `branch.json`/`worktree.json` against the expected analyzed
 * commit and caller identity. Raw null metadata is refused here, before any
 * identity field is rebound, so a bad write can never be repaired into a pass.
 * `stale` belongs to `branch.json` only; schema 1 `worktree.json` has none.
 */
export function lifecycleFindings({ branch, worktree }, expected) {
  const findings = [];
  for (const [name, rec] of [["branch.json", branch], ["worktree.json", worktree]]) {
    if (!rec || typeof rec !== "object") {
      findings.push(`${name} is absent or not an object`);
      continue;
    }
    if (rec.schemaVersion !== LIFECYCLE_SCHEMA) findings.push(`${name} schemaVersion ${rec.schemaVersion} is not ${LIFECYCLE_SCHEMA}`);
    for (const field of ["lastSeenHead", "lastAnalyzedHead"]) {
      const v = rec[field];
      if (v === null || v === undefined || v === "") findings.push(`${name} ${field} is null — the raw-null write (B-050)`);
      else if (!HEAD.test(v)) findings.push(`${name} ${field} "${v}" is not a full commit id`);
      else if (expected?.head && v !== expected.head) findings.push(`${name} ${field} ${v.slice(0, 7)} is not the analyzed commit ${expected.head.slice(0, 7)}`);
    }
  }
  if (branch && typeof branch === "object") {
    if (branch.branchName === null || branch.branchName === undefined) findings.push("branch.json branchName is null");
    else if (expected?.branchName && branch.branchName !== expected.branchName) findings.push(`branch.json branchName "${branch.branchName}" is not "${expected.branchName}"`);
    if (branch.stale !== false) findings.push(`branch.json stale is ${JSON.stringify(branch.stale)}, not false`);
  }
  if (worktree && typeof worktree === "object") {
    if (!worktree.gitDir) findings.push("worktree.json gitDir is null");
    for (const [field, want] of [["worktreePath", expected?.root], ["gitDir", expected?.gitDir], ["commonGitDir", expected?.commonGitDir]]) {
      if (!want) continue;
      const got = worktree[field] ? canonicalizePath(worktree[field]).path : null;
      if (got !== canonicalizePath(want).path) findings.push(`worktree.json ${field} is not the expected ${want}`);
    }
  }
  return findings;
}

// ---------------------------------------------------------------------------
// Transaction journal (read by docs-drift BEFORE its skips).
// ---------------------------------------------------------------------------

/**
 * Where the journal lives for a `.graphify` path: the parent of the link's
 * TARGET, resolved even when the target is missing (the state between the two
 * publication renames). A real directory or an absent path uses its own parent.
 */
export function transactionJournalPath(statePath = ".graphify") {
  return join(dirname(liveTargetPath(statePath)), TRANSACTION_JOURNAL);
}

/** The `.graphify` link's target (or the path itself), resolved without
 * following it — Windows can report a dangling junction as existing, so
 * callers test the TARGET, never the link. */
export function liveTargetPath(statePath = ".graphify") {
  const abs = resolve(statePath);
  try {
    if (lstatSync(abs).isSymbolicLink()) return resolve(dirname(abs), readlinkSync(abs));
  } catch {
    // absent: the path itself
  }
  return abs;
}

/** `{ state: "none" }`, `{ state: "present", stage, journal }` or
 * `{ state: "malformed", error }`. A journal that cannot be read is malformed,
 * never treated as absent. */
export function readTransaction(journalPath) {
  if (!existsSync(journalPath)) return { state: "none" };
  let journal;
  try {
    journal = JSON.parse(readFileSync(journalPath, "utf8"));
  } catch (e) {
    return { state: "malformed", error: `unreadable or invalid JSON (${e.code ?? e.name})` };
  }
  if (!journal || typeof journal !== "object") return { state: "malformed", error: "not an object" };
  if (!JOURNAL_STAGES.includes(journal.stage)) return { state: "malformed", error: `unknown stage ${JSON.stringify(journal.stage)}` };
  for (const field of ["target", "runToken", "sourceCommit"]) {
    if (!journal[field]) return { state: "malformed", error: `missing ${field}` };
  }
  return { state: "present", stage: journal.stage, journal };
}

/** Findings for `docs-drift`. Any journal — at every stage, including
 * `verified` — means graph health is not reportable until the release receipt
 * removes it. */
export function transactionFindings(statePath = ".graphify") {
  const path = transactionJournalPath(statePath);
  const tx = readTransaction(path);
  if (tx.state === "none") return [];
  const live = existsSync(liveTargetPath(statePath)) ? "" : "; the live state path is MISSING";
  if (tx.state === "malformed") {
    return [`guarded-rebuild transaction journal ${path} is ${tx.error}${live} — graph health is not reportable; recover through the owned recovery route (B-050), never by deleting the journal`];
  }
  return [`guarded-rebuild transaction journal ${path} is present at stage "${tx.stage}"${live} — graph health is not reportable until the transaction completes or is recovered (B-050)`];
}

// ---------------------------------------------------------------------------
// F2 (`D-423`): state inventory and hashing (R1/R2).
// ---------------------------------------------------------------------------

/** The R1 classification of a state file, by path relative to the state root.
 * `promote` comes from the candidate; `rebind` is rewritten under the R2 field
 * policy; `retain` keeps the caller's bytes. Anything else is unknown. */
export const STATE_RULES = [
  ["rebind", /^(branch|worktree)\.json$/],
  ["promote", /^(graph\.json|GRAPH_REPORT\.md|\.graphify_analysis\.json|\.graphify_detect\.json|\.graphify_labels\.json|scope\.json)$/],
  ["promote", /^(studio|ontology)\//],
  ["promote-empty", /^(description|label)-instructions\//],
  ["retain", /^manifest\.json$/],
  ["retain", /^cache\//],
  ["retain", /^(agents\/|cost\.json$|d22-d28-fragment\.json$|missing-desc\.json$|\.graphify_runtime\.json$)/],
  ["retain", /^(20\d\d-\d\d-\d\d|\.hint-\d{4}-\d\d-\d\d|backup-[\d-]+)\//],
];

export function listFiles(root) {
  const out = [];
  (function walk(d) {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.isFile()) out.push(p.slice(root.length + 1).split(/[\\/]/).join("/"));
    }
  })(root);
  return out.sort();
}

/** Every file of a state root with its policy; unknown and multiply-matched paths are listed, not guessed. */
export function classifyState(root) {
  const entries = [], unknown = [], multi = [];
  for (const rel of listFiles(root)) {
    const hits = STATE_RULES.filter(([, re]) => re.test(rel));
    if (hits.length === 0) unknown.push(rel);
    else if (hits.length > 1 && new Set(hits.map(([p]) => p)).size > 1) multi.push(rel);
    entries.push({ path: rel, policy: hits[0]?.[0] ?? null });
  }
  return { entries, unknown, multi };
}

export function hashTree(root) {
  const map = {};
  for (const rel of listFiles(root)) map[rel] = createHash("sha256").update(readFileSync(join(root, rel))).digest("hex");
  return map;
}

/** One digest over a sorted path→hash map: the full-state manifest identity. */
export function treeDigest(map) {
  return createHash("sha256").update(JSON.stringify(Object.entries(map).sort())).digest("hex");
}

const digestOf = (root) => (existsSync(root) ? treeDigest(hashTree(root)) : null);

// ---------------------------------------------------------------------------
// F2: ownership — process identity, exclusive create, durable writes (R3).
// ---------------------------------------------------------------------------

/** Start time of a running process, or null when it cannot be read. */
export function processStart(pid) {
  try {
    if (process.platform === "win32") {
      return execFileSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command",
        `(Get-Process -Id ${Number(pid)} -ErrorAction Stop).StartTime.ToUniversalTime().ToString('o')`],
        { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 20000 }).trim() || null;
    }
    return execFileSync("ps", ["-o", "lstart=", "-p", String(Number(pid))], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() || null;
  } catch {
    return null;
  }
}

let selfStart;
/** An owner record binds host, process id, process start time and run token — never the PID alone. */
export function ownerRecord(runToken) {
  if (selfStart === undefined) selfStart = processStart(process.pid);
  return { runToken, pid: process.pid, host: hostname(), start: selfStart };
}

/** `alive` (same process), `dead` (gone, or the PID was reused), or `unknown` (cannot be proved). */
export function ownerState(rec) {
  if (!rec || !Number.isInteger(rec.pid) || !rec.start) return "unknown";
  if (rec.host !== hostname()) return "unknown";
  try {
    process.kill(rec.pid, 0);
  } catch (e) {
    // Node reports `code: "ESRCH"`; Bun on Windows reports only libuv's errno
    // (UV_ESRCH: -4040 on Windows, -3 elsewhere). Any other error is unknown.
    if (e.code === "ESRCH" || e.errno === -4040 || e.errno === -3) return "dead";
    if (e.code !== "EPERM") return "unknown";
  }
  const start = processStart(rec.pid);
  if (!start) return "unknown";
  return start === rec.start ? "alive" : "dead";
}

/**
 * Exclusive create: true when this call created the file, false when it already existed. Never overwrites.
 *
 * MEASURED (`D-423`): under Bun 1.1.30 on Windows, `openSync(path, "wx")` and `O_CREAT|O_EXCL` do NOT
 * fail on an existing file — they open and overwrite it — while Node refuses. `writeFileSync` with
 * `flag: "wx"` refuses on both, so the create goes through it; the bytes are then flushed.
 */
export function createExclusive(path, record) {
  try {
    writeFileSync(path, JSON.stringify(record), { flag: "wx" });
  } catch (e) {
    if (e.code === "EEXIST") return false;
    throw e;
  }
  const fd = openSync(path, "r+");
  try {
    fsyncSync(fd);
  } finally {
    closeSync(fd);
  }
  return true;
}

/** Durable replace: write a temporary file, flush it, then rename it into place. */
export function writeDurable(path, record) {
  const tmp = `${path}.${process.pid}.${Date.now()}.tmp`;
  const fd = openSync(tmp, "w");
  try {
    writeSync(fd, JSON.stringify(record, null, 1));
    fsyncSync(fd);
  } finally {
    closeSync(fd);
  }
  renameSync(tmp, path);
}

const readJsonOr = (p) => {
  try {
    return JSON.parse(readFileSync(p, "utf8"));
  } catch {
    return undefined;
  }
};

/** Releases a lock only when it carries this run token. */
function releaseOwned(path, runToken) {
  const rec = readJsonOr(path);
  if (rec && rec.runToken === runToken) unlinkSync(path);
}

// ---------------------------------------------------------------------------
// F2: publication and owned recovery — DISPOSABLE FIXTURE TARGETS ONLY.
// ---------------------------------------------------------------------------

export const REAL_LIVE_TARGET = "C:/CoWork/myeditorialapp/.graphify";

/** True when a path resolves, through any link, to the real live state, an ancestor of it, or a path inside it. */
export function isRealLiveTarget(target) {
  const live = canonicalFsPath(REAL_LIVE_TARGET);
  const c = target == null ? null : canonicalFsPath(target);
  return Boolean(live && c) && (c === live || isWithin(live, c) || isWithin(c, live));
}

/** True when neither canonical path aliases, contains or sits inside the other. */
function disjoint(a, b) {
  const x = canonicalFsPath(a), y = canonicalFsPath(b);
  return Boolean(x && y) && x !== y && !isWithin(x, y) && !isWithin(y, x);
}

/**
 * The one mutating preflight (`D-424` R1), run by `publish`, `recover` and
 * `composeCandidate` before any create, delete or rename. `root` is the
 * declared disposable fixture or work root. Every runtime path, in every role,
 * must sit strictly inside it, and neither the root nor any path may alias,
 * contain or sit inside the real live target. Canonical through links.
 */
export function fixtureBoundary(root, roles) {
  if (typeof root !== "string" || !root) return ["a declared fixture or work root is required: publication outside one is F3, which is not authorized"];
  const r = canonicalFsPath(root);
  if (!r || !canonicalFsPath(REAL_LIVE_TARGET)) return ["the fixture root or the real live target cannot be canonicalized"];
  if (isRealLiveTarget(root)) return [`the fixture root ${root} aliases, contains or sits inside the real live target`];
  const findings = [];
  for (const [role, p] of Object.entries(roles)) {
    const c = typeof p === "string" && p ? canonicalFsPath(p) : null;
    if (!c) findings.push(`${role} path ${p} cannot be canonicalized`);
    else if (isRealLiveTarget(p)) findings.push(`${role} path ${p} aliases, contains or sits inside the real live target`);
    else if (c === r || !isWithin(c, r)) findings.push(`${role} path ${p} is outside the declared fixture root`);
  }
  return findings;
}

/** Runtime artifact locations beside a target, all outside it. */
export function transactionPaths(target) {
  const t = liveTargetPath(target);
  const parent = dirname(t);
  return {
    target: t,
    parent,
    journal: join(parent, TRANSACTION_JOURNAL),
    lock: join(parent, ".graphify.lock"),
    recovery: join(parent, ".graphify.recovery"),
    receipts: join(parent, ".graphify-receipts"),
  };
}

const refused = (reason) => ({ ok: false, outcome: "refused", reason });
/** Blocks this process for `ms` (a test hook that keeps a live owner mid-transaction). */
function holdFor(ms) {
  if (ms > 0) Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
const recoveryRequired = (reason) => ({ ok: false, outcome: "recovery-required", reason });

function writeReceipt(P, receipt, writer = writeDurable) {
  mkdirSync(P.receipts, { recursive: true });
  writer(join(P.receipts, `${receipt.kind}-${receipt.runToken}.json`), { ...receipt, at: new Date().toISOString() });
}

/**
 * Step 6–7 on a FIXTURE target: publish exactly the reviewed staging bytes.
 * `fixture` is the declared disposable root every runtime path must sit in;
 * `source` is `{ repo, snapshot }`, re-checked under the lock (`D-424` R4).
 * `crashAt` names a point at which the process exits (synthetic termination,
 * for tests run in a child process); `inject` replaces a step to force a failure.
 */
export function publish(opts) {
  const { target, staging, reviewedManifest, baselineManifest, source, acceptance, fixture, live, predecessor, crashAt, pauseAt, pauseMs = 0, inject = {} } = opts;
  const runToken = opts.runToken || randomUUID();
  const P = transactionPaths(target);
  const old = join(P.parent, `.graphify-old-${runToken}`);
  const backup = join(P.parent, `.graphify-bak-${runToken}`);
  if (live) {
    // F3 (`D-425`): the configured live target is admitted only through its entry checks.
    const entry = liveEntryFindings({ target, liveTarget: live.liveTarget, staging, workRoot: live.workRoot, source });
    if (entry.length) return refused(entry.join("; "));
  } else {
    if (isRealLiveTarget(target)) return refused("the real live target, its ancestors and descendants are refused in fixture mode: live publication is the D-425 guarded route");
    const outside = fixtureBoundary(fixture, { target: P.target, staging, backup, old, journal: P.journal, lock: P.lock, recovery: P.recovery, receipts: P.receipts });
    if (outside.length) return refused(outside.join("; "));
  }
  if (!source?.repo || !source?.snapshot?.head) return refused("a source repository and snapshot are required: the journal must bind the transaction to its source");
  const sourceCommit = source.snapshot.head;
  if (!disjoint(P.target, source.repo) || !disjoint(staging, source.repo)) return refused("the target and staging must be disjoint from the source repository");
  const contained = containmentFindings(P.target, { staging, backup, old });
  if (contained.length) return refused(contained.join("; "));
  if (existsSync(P.journal)) return refused("a transaction journal already exists: recover first");
  if (!createExclusive(P.lock, ownerRecord(runToken))) return refused("the publication lock is held by another run");
  const crash = (point) => {
    if (pauseAt === point) holdFor(pauseMs);
    if (crashAt === point) process.exit(137);
  };
  let journal = null;
  try {
    // Under the lock, before the journal: the exact source (fixture) or the handoff-only
    // fast-forward rule plus the acceptance record (live, `validate`).
    let reviewed = { acceptance: acceptance ?? null, publicationHead: null };
    if (live) reviewed = live.validate();
    else {
      const still = snapshotMatches(source.repo, source.snapshot);
      if (!still.ok) throw new Error(`the source is invalidated before publication: ${still.reason}`);
    }
    if (digestOf(staging) !== reviewedManifest) throw new Error("staging bytes differ from the reviewed manifest");
    const liveDigest = digestOf(P.target);
    if (baselineManifest && liveDigest !== baselineManifest) throw new Error("the released state changed since the baseline");
    cpSync(P.target, backup, { recursive: true });
    const backupManifest = digestOf(backup);
    if (backupManifest !== liveDigest) throw new Error("the backup copy does not equal the live state");
    journal = { stage: "prepared", target: P.target, runToken, sourceCommit, publicationHead: reviewed.publicationHead, reviewedManifest, manifestAlgorithm: MANIFEST_ALGORITHM, backupManifest, backup, staging, old, acceptance: reviewed.acceptance, predecessor: predecessor ?? null };
    writeDurable(P.journal, journal);
    crash("after-prepared");
    (inject.renameOld || renameSync)(P.target, old);
    crash("after-rename-old");
    writeDurable(P.journal, { ...journal, stage: "old-moved" });
    crash("after-old-moved");
    (inject.renameNew || renameSync)(staging, P.target);
    crash("after-rename-new");
    writeDurable(P.journal, { ...journal, stage: "new-in-place" });
    crash("after-new-in-place");
    if (digestOf(P.target) !== reviewedManifest) throw new Error("the live bytes after publication differ from the reviewed manifest");
    writeDurable(P.journal, { ...journal, stage: "verified" });
    crash("after-verified");
  } catch (e) {
    if (!journal) {
      releaseOwned(P.lock, runToken);
      return refused(e.message);
    }
    // Owner rollback: this process still owns the publication lock (condition 2).
    const r = recover({ target, fixture, live: live && { liveTarget: live.liveTarget }, asOwner: runToken, inject: inject.recovery });
    return { ok: false, outcome: r.outcome === "rolled-back" || r.outcome === "restored" || r.outcome === "aborted-live-unchanged" ? "rolled-back" : r.outcome, reason: e.message, recovery: r };
  }
  try {
    writeReceipt(P, releaseReceipt(journal), inject.writeReceipt);
    crash("after-receipt");
    unlinkSync(P.journal);
  } catch (e) {
    return recoveryRequired(`receipt or cleanup failed at stage verified (${e.message}); the journal stays until recovery completes it`);
  }
  releaseOwned(P.lock, runToken);
  return { ok: true, outcome: "released", runToken, backup, old };
}

/**
 * Owned recovery (v4 exclusive-recovery text, condition 2). A peer entrant
 * needs the recovery token AND a proved-dead owner; the live owner rolls back
 * its own transaction with `asOwner`. Manifests are reconciled before any
 * journal stage is believed. Every unresolved case preserves all evidence.
 */
export function recover(opts) {
  const { target, asOwner, fixture, live, inject = {} } = opts;
  const P = transactionPaths(target);
  if (live) {
    if (canonicalFsPath(P.target) !== canonicalFsPath(liveTargetPath(live.liveTarget))) return refused("the target does not resolve to the configured live target");
  } else {
    if (isRealLiveTarget(target)) return refused("recovery of the real live target is refused in fixture mode: use the D-425 live recover");
    const outside = fixtureBoundary(fixture, { target: P.target, journal: P.journal, lock: P.lock, recovery: P.recovery, receipts: P.receipts });
    if (outside.length) return refused(outside.join("; "));
  }
  if (!existsSync(P.journal) && !existsSync(P.lock)) return { ok: true, outcome: "nothing-to-recover" };
  const entrant = ownerRecord(opts.runToken || randomUUID());
  if (!createExclusive(P.recovery, entrant)) {
    return refused("the recovery token is held: another recoverer is active, or an abandoned token needs evidenced manual recovery");
  }
  if (opts.pauseAt === "after-token") holdFor(opts.pauseMs || 0);
  const done = (res) => {
    releaseOwned(P.recovery, entrant.runToken);
    return res;
  };
  try {
    const tx = readTransaction(P.journal);
    const lock = readJsonOr(P.lock);
    if (tx.state === "malformed") return done(recoveryRequired(`the journal is ${tx.error}`));
    if (tx.state === "none") {
      if (!lock) return done({ ok: true, outcome: "nothing-to-recover" });
      return done(recoveryRequired("a publication lock exists without a journal: never stolen; its owner releases it or a person recovers it with evidence"));
    }
    const j = tx.journal;
    if (asOwner) {
      const owns = lock && lock.runToken === asOwner && j.runToken === asOwner && lock.pid === process.pid && lock.host === hostname();
      if (!owns) return done(refused("owner rollback requires this process to own the journal's publication lock"));
    } else {
      if (!lock || lock.runToken !== j.runToken) return done(recoveryRequired("the publication lock does not bind the journal's run token"));
      const state = ownerState(lock);
      if (state === "alive") return done(refused("the publishing owner is alive; a peer may not recover its transaction"));
      if (state === "unknown") return done(recoveryRequired("the owner's liveness cannot be proved; recovery needs evidence"));
    }
    const aside = join(P.parent, `.graphify-rejected-${j.runToken}`);
    const journalPaths = live ? liveJournalFindings(P, j) : fixtureBoundary(fixture, { old: j.old, backup: j.backup, staging: j.staging, rejected: aside });
    if (canonicalFsPath(j.target || "") !== canonicalFsPath(P.target)) journalPaths.push("the journal names a different target");
    if (journalPaths.length) return done(recoveryRequired(`the journal's paths fail the fixture boundary: ${journalPaths.join("; ")}`));
    const liveD = digestOf(P.target);
    const oldD = digestOf(j.old);
    let outcome;
    if (liveD !== null && liveD === j.backupManifest) {
      outcome = "aborted-live-unchanged"; // nothing to undo; staging, if any, is preserved
    } else if (liveD === null && oldD === j.backupManifest) {
      (inject.restore || renameSync)(j.old, P.target);
      if (digestOf(P.target) !== j.backupManifest) return done(recoveryRequired("the restored state does not equal the backup"));
      outcome = "restored";
    } else if (liveD !== null && liveD === j.reviewedManifest && j.stage === "verified" && !asOwner) {
      // The approval is the journal's own: recovery takes no acceptance input (`D-425`, F3-R1).
      writeReceipt(P, { ...releaseReceipt(j), completedByRecovery: true }, inject.writeReceipt);
      outcome = "completed-release";
    } else if (liveD !== null && liveD === j.reviewedManifest && oldD === j.backupManifest) {
      renameSync(P.target, aside);
      (inject.restore || renameSync)(j.old, P.target);
      if (digestOf(P.target) !== j.backupManifest) return done(recoveryRequired("the restored state does not equal the backup"));
      outcome = "rolled-back";
    } else {
      return done(recoveryRequired(liveD === null ? "unexplained target loss: no verified old copy" : "manifest ambiguity: the live state equals neither the backup nor the reviewed bytes"));
    }
    writeReceipt(P, { kind: "recovery", runToken: j.runToken, recoveredBy: entrant.runToken, asOwner: Boolean(asOwner), stage: j.stage, outcome });
    unlinkSync(P.journal);
    if (lock && lock.runToken === j.runToken) unlinkSync(P.lock);
    return done({ ok: true, outcome });
  } catch (e) {
    return done(recoveryRequired(`recovery failed (${e.message}); all evidence preserved`));
  }
}

// ---------------------------------------------------------------------------
// F2: source snapshot and isolated generation (steps 1–3, R4/PC6).
// ---------------------------------------------------------------------------

export const TOOL_PINS = {
  "cli.js": "9b119afe688f5fcc61962760d1f5702536bca4bc8017215cd653852a7de84f07",
  "index.js": "e232377a07088f3b76bb494c39a0383ccef601444c8fb0cbff12fe38ecee43e9",
  "skill-runtime.js": "50e2946ef7a66516184d68a0a5d41b05ecc3116f8510e24e65b7af0144550e78",
};
const GIT_REDIRECTS = ["GIT_DIR", "GIT_WORK_TREE", "GIT_INDEX_FILE", "GIT_COMMON_DIR", "GIT_OBJECT_DIRECTORY", "GIT_ALTERNATE_OBJECT_DIRECTORIES", "GIT_CEILING_DIRECTORIES"];

/** The child environment: no `GRAPHIFY_CHANGED`, no Git redirection, no `GIT_CONFIG*`. */
export function sanitizedEnv(base = process.env) {
  const env = { ...base };
  delete env.GRAPHIFY_CHANGED;
  for (const k of Object.keys(env)) if (GIT_REDIRECTS.includes(k) || /^GIT_CONFIG/.test(k)) delete env[k];
  return env;
}

const git = (cwd, args) => execFileSync("git", ["-C", cwd, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();

/** Step 1: pin the source. Refuses a detached HEAD, a dirty tree or a missing origin. */
export function snapshotSource(repo) {
  const head = git(repo, ["rev-parse", "HEAD"]);
  let branch;
  try {
    branch = git(repo, ["symbolic-ref", "--short", "-q", "HEAD"]);
  } catch {
    branch = "";
  }
  if (!branch) return { ok: false, reason: "detached HEAD is refused by mode" };
  if (git(repo, ["status", "--porcelain"])) return { ok: false, reason: "the source tree is not clean" };
  let origin;
  try {
    origin = git(repo, ["remote", "get-url", "origin"]);
  } catch {
    return { ok: false, reason: "no origin remote: repository identity cannot be bound" };
  }
  const refs = git(repo, ["for-each-ref", "--format=%(refname)%09%(objectname)%09%(symref)", "refs/heads", "refs/remotes", "refs/tags"])
    .split("\n").filter(Boolean).map((l) => {
      const [name, object, symref] = l.split("\t");
      return { name, object, symref: symref || null };
    });
  let upstream = null;
  try {
    upstream = git(repo, ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"]);
  } catch {
    // a missing upstream is valid
  }
  return { ok: true, root: canonicalFsPath(repo), head, branch, origin, refs, upstream, config: git(repo, ["config", "--list", "--show-origin"]) };
}

/** Re-snapshots the source and compares every bound input: HEAD, branch, origin, ref map and Git config. */
export function snapshotMatches(repo, snapshot) {
  let now;
  try {
    now = snapshotSource(repo);
  } catch (e) {
    return { ok: false, reason: `the source is unavailable (${String(e.message).trim().split("\n")[0]})` };
  }
  if (!now.ok) return { ok: false, reason: now.reason };
  for (const k of ["head", "branch", "origin", "upstream", "config"]) if (now[k] !== snapshot[k]) return { ok: false, reason: `source ${k} changed since the snapshot` };
  if (JSON.stringify(now.refs) !== JSON.stringify(snapshot.refs)) return { ok: false, reason: "source ref map changed since the snapshot" };
  return { ok: true };
}

/** Builds a disposable checkout carrying exactly the snapshot's origin and ref map (PC6, R4). */
export function prepareCheckout(repo, snapshot, dir) {
  execFileSync("git", ["clone", "--no-hardlinks", "--quiet", repo, dir], { stdio: "ignore" });
  git(dir, ["remote", "set-url", "origin", snapshot.origin]);
  git(dir, ["checkout", "--quiet", "--detach", snapshot.head]);
  const wanted = new Map(snapshot.refs.map((r) => [r.name, r]));
  const present = git(dir, ["for-each-ref", "--format=%(refname)", "refs/heads", "refs/remotes", "refs/tags"]).split("\n").filter(Boolean);
  for (const name of present) if (!wanted.has(name)) git(dir, ["update-ref", "-d", name]);
  for (const r of snapshot.refs) if (!r.symref) git(dir, ["update-ref", r.name, r.object]);
  for (const r of snapshot.refs) if (r.symref) git(dir, ["symbolic-ref", r.name, r.symref]);
  git(dir, ["checkout", "--quiet", snapshot.branch]);
  const got = snapshotSource(dir);
  const same = got.ok && got.head === snapshot.head && got.branch === snapshot.branch && got.origin === snapshot.origin &&
    JSON.stringify(got.refs) === JSON.stringify(snapshot.refs);
  return same ? { ok: true } : { ok: false, reason: "the disposable checkout's ref map, origin or branch differs from the snapshot" };
}

/** The pinned CLI, verified by hash before any run. */
export function pinnedCli(cliPath = join(process.env.APPDATA || "", "npm", "node_modules", "@sentropic", "graphify", "dist", "cli.js")) {
  for (const [file, want] of Object.entries(TOOL_PINS)) {
    const p = join(dirname(cliPath), file);
    if (!existsSync(p) || createHash("sha256").update(readFileSync(p)).digest("hex") !== want) return { ok: false, reason: `tool pin mismatch: ${file}` };
  }
  return { ok: true, cli: cliPath };
}

/** Runs the pinned CLI in `cwd` with the sanitized environment. Injectable in tests. */
export function runGraphify(cwd, args, { cli } = {}) {
  const r = spawnSync(process.execPath, [cli, ...args], { cwd, env: sanitizedEnv(), encoding: "utf8", timeout: 600000 });
  return { code: r.status, out: `${r.stdout || ""}\n${r.stderr || ""}` };
}

const readState = (stateDir) => ({ branch: readJsonOr(join(stateDir, "branch.json")), worktree: readJsonOr(join(stateDir, "worktree.json")) });

/**
 * Steps 2–3 in isolation. `baseline` is a verified copy of the released state;
 * `work` a fresh empty directory; `answers` the operator's reviewed names and
 * descriptions for anything returned as pending. Nothing outside `work` is written.
 */
export function generateCandidate({ repo, snapshot, baseline, work, answers = {}, tool = runGraphify, cli, fragmentsOrder }) {
  const evidence = [];
  const checkout = join(work, "checkout");
  const state = join(checkout, ".graphify");
  const prep = prepareCheckout(repo, snapshot, checkout);
  if (!prep.ok) return { status: "refused", reason: prep.reason, evidence };
  cpSync(baseline, state, { recursive: true });
  const expected = { head: snapshot.head, branchName: snapshot.branch, root: checkout, gitDir: join(checkout, ".git") };
  const stage = (name, args) => {
    const before = digestOf(state);
    const r = tool(checkout, args, { cli });
    evidence.push({ stage: name, code: r.code, out: r.out.slice(-2000) });
    if (r.code !== 0) return `tool failure at ${name} (exit ${r.code})`;
    const raw = lifecycleFindings(readState(state), expected);
    if (raw.length) return `raw metadata refused after ${name}: ${raw.join("; ")}`;
    if (name === "hook-rebuild" && !/Rebuilt:/.test(r.out) && digestOf(state) === before) return "no-op: the rebuild wrote nothing";
    return null;
  };
  const bad = stage("hook-rebuild", ["hook-rebuild"]);
  if (bad) return { status: "refused", reason: bad, evidence };
  const run = (script, args) => spawnSync(process.execPath, [join(checkout, "docs", "graph-fragments", script), ...args], { cwd: checkout, encoding: "utf8" });
  const restored = run("restore-docs-layer.js", [join(baseline, "graph.json")]);
  evidence.push({ stage: "restore-docs-layer", code: restored.status, out: restored.stdout.slice(-500) });
  if (restored.status !== 0) return { status: "refused", reason: "docs-layer restore failed", evidence };
  const fresh = join(work, "fresh");
  const freshPrep = prepareCheckout(repo, snapshot, fresh);
  if (!freshPrep.ok) return { status: "refused", reason: `fresh extraction: ${freshPrep.reason}`, evidence };
  const fr = tool(fresh, ["hook-rebuild"], { cli });
  evidence.push({ stage: "fresh-extraction", code: fr.code });
  if (fr.code !== 0) return { status: "refused", reason: "the fresh extraction failed", evidence };
  const pruned = run("prune-stale-symbols.js", [join(fresh, ".graphify")]);
  evidence.push({ stage: "prune", code: pruned.status, out: `${pruned.stdout}${pruned.stderr}`.slice(-3000) });
  if (pruned.status !== 0) return { status: "refused", reason: "the prune step did not verify", evidence };
  for (const f of fragmentsOrder || fragmentOrder(checkout)) {
    const m = run("merge7.js", [join("docs", "graph-fragments", f)]);
    if (m.status !== 0) return { status: "refused", reason: `fragment merge failed: ${f}`, evidence };
  }
  evidence.push({ stage: "merge", fragments: (fragmentsOrder || fragmentOrder(checkout)).length });
  const fill = stage("fill-missing", ["update", "--fill-missing"]);
  if (fill) return { status: "refused", reason: fill, evidence };
  const pending = replayDescriptions(state, join(baseline, "graph.json"), answers.descriptions || {}, checkout);
  const names = proposeNames(state, join(baseline, "graph.json"), answers.communityNames || {});
  if (pending.length || names.pending.length) {
    return { status: "pending-semantic", pending: { descriptions: pending, communities: names.pending }, checkout, state, evidence };
  }
  for (const [name, args] of [["ingest", ["update"]], ["label-emit", ["label", "--label-mode", "assistant"]]]) {
    const b = stage(name, args);
    if (b) return { status: "refused", reason: b, evidence };
  }
  mkdirSync(join(state, "label-instructions"), { recursive: true });
  writeFileSync(join(state, "label-instructions", "communities.json"), JSON.stringify(names.names, null, 1));
  const li = stage("label-ingest", ["label", "--label-mode", "assistant"]);
  if (li) return { status: "refused", reason: li, evidence };
  for (const f of fragmentsOrder || fragmentOrder(checkout)) {
    const m = run("merge7.js", [join("docs", "graph-fragments", f)]);
    if (m.status !== 0) return { status: "refused", reason: `final fragment merge failed: ${f}`, evidence };
  }
  return { status: "generated", checkout, state, evidence };
}

/** Ordered fragment list: the two named layers, then frag*.json numerically (README §4). */
export function fragmentOrder(checkout) {
  const dir = join(checkout, "docs", "graph-fragments");
  const frags = readdirSync(dir).filter((f) => /^frag\d+\.json$/.test(f)).sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
  return ["docs-2026-08-18-fragment.json", "v1-fragment.json", ...frags].filter((f) => existsSync(join(dir, f)));
}

/** The source files changed between the baseline's analyzed commit and the checkout HEAD; null when unprovable. */
function changedSince(checkout, baselineGraph) {
  const head = readJsonOr(join(dirname(baselineGraph), "branch.json"))?.lastAnalyzedHead;
  if (!HEAD.test(head || "")) return null;
  try {
    return new Set(git(checkout, ["diff", "--name-only", head, "HEAD"]).split("\n").filter(Boolean));
  } catch {
    return null;
  }
}

/** Fills description batches by id from operator answers, then the baseline graph, then commit subjects from git.
 * A baseline description is replayed only when its symbol's source file is unchanged since the baseline's
 * analyzed commit (`D-424`); a changed or unprovable one is pending. Returns the ids still missing: never invented. */
export function replayDescriptions(state, baselineGraph, answers, checkout) {
  const dir = join(state, "description-instructions");
  if (!existsSync(dir)) return [];
  const prior = new Map();
  for (const n of (readJsonOr(baselineGraph) || { nodes: [] }).nodes) if (n.description) prior.set(n.id, n.description);
  const sourceOf = new Map((readJsonOr(join(state, "graph.json")) || { nodes: [] }).nodes.map((n) => [n.id, n.source_file]));
  const changed = changedSince(checkout, baselineGraph);
  const replayable = (id) => !sourceOf.get(id) || (changed !== null && !changed.has(sourceOf.get(id)));
  const subjects = new Map(git(checkout, ["log", "--all", "--format=%H%x09%s"]).split("\n").filter(Boolean).map((l) => l.split("\t")));
  const missing = [];
  for (const f of readdirSync(dir).filter((x) => /^batch-\d+\.md$/.test(x))) {
    const out = {};
    for (const m of readFileSync(join(dir, f), "utf8").matchAll(/^- "([^"]+)": "([^"]*)" \| kind=([^ |\r\n]+)/gm)) {
      const [, id, , kind] = m;
      let d = answers[id] || (replayable(id) ? prior.get(id) : undefined);
      if (!d && /commit/i.test(kind)) {
        const sha = (id.match(/@([0-9a-f]{40})$/) || [])[1];
        if (sha && subjects.has(sha)) d = `Git commit ${sha.slice(0, 7)} in this repository, with the subject "${subjects.get(sha)}".`;
      }
      if (d) out[id] = d;
      else missing.push(id);
    }
    writeFileSync(join(dir, f.replace(".md", ".json")), JSON.stringify(out, null, 2));
  }
  return missing;
}

/** Member-set identity per community: reuse the baseline name only for an identical member set. */
export function proposeNames(state, baselineGraph, answers) {
  const groups = (g) => {
    const m = new Map();
    for (const n of g.nodes) {
      const k = String(n.community);
      if (!m.has(k)) m.set(k, { ids: [], name: n.community_name });
      m.get(k).ids.push(n.id);
    }
    return new Map([...m].map(([k, v]) => [k, { hash: createHash("sha256").update(JSON.stringify([...new Set(v.ids)].sort())).digest("hex"), name: v.name }]));
  };
  const base = groups(readJsonOr(baselineGraph) || { nodes: [] });
  const byHash = new Map([...base.values()].filter((v) => v.name).map((v) => [v.hash, v.name]));
  const cur = groups(readJsonOr(join(state, "graph.json")) || { nodes: [] });
  const names = {}, pending = [];
  for (const [k, v] of cur) {
    // Operator answers bind by member-set hash only (`D-424` R2): a community id is renumbered between
    // revisions, so an integer key is never identity and leaves the community pending.
    const name = byHash.get(v.hash) || answers[v.hash];
    if (name) names[k] = name;
    else pending.push({ community: Number(k), memberSetSha256: v.hash });
  }
  // A name must identify one community: a duplicate (reused or supplied) is pending, never bound.
  const counts = {};
  for (const n of Object.values(names)) counts[n] = (counts[n] || 0) + 1;
  for (const [k, n] of Object.entries(names)) {
    if (counts[n] > 1) {
      pending.push({ community: Number(k), memberSetSha256: cur.get(k).hash, duplicateName: n });
      delete names[k];
    }
  }
  return { names, pending };
}

// ---------------------------------------------------------------------------
// F2: validation and composition (step 4, R1/R2/PC4).
// ---------------------------------------------------------------------------

/** Key-order-independent JSON, so nested metadata compares by content. */
const stable = (v) => JSON.stringify(v, (_, x) => (x && typeof x === "object" && !Array.isArray(x) ? Object.fromEntries(Object.entries(x).sort(([a], [b]) => (a < b ? -1 : 1))) : x));

/** Indexes of demands left unassigned by a maximum one-to-one assignment to compatible supplies
 * (augmenting paths). The matched count, and whether a complete assignment exists, do not depend on
 * list order; which demands stay unmatched in a partial assignment can (G-D424b-2). */
export function unassigned(demands, supplies, compatible) {
  const owner = new Array(supplies.length).fill(-1);
  const place = (i, seen) => {
    for (let j = 0; j < supplies.length; j++) {
      if (seen[j] || !compatible(demands[i], supplies[j])) continue;
      seen[j] = true;
      if (owner[j] < 0 || place(owner[j], seen)) {
        owner[j] = i;
        return true;
      }
    }
    return false;
  };
  return demands.map((_, i) => i).filter((i) => !place(i, new Array(supplies.length).fill(false)));
}

/** Every fragment-declared node field and every declared edge field (`D-424` R3), compared with a saved graph.
 * Parallel relations need a complete distinct assignment of declared edges to compatible saved edges per
 * fragment and key (D424-R3a): order-independent, each saved edge used once. */
export function fragmentParity(graph, fragmentsDir) {
  const byId = new Map(graph.nodes.map((n) => [n.id, n]));
  const end = (x) => (x && typeof x === "object" ? x.id : x);
  const key = (l) => `${end(l.source)}|${end(l.target)}|${l.relation ?? l.type ?? ""}`;
  const links = new Map();
  for (const l of graph.links || graph.edges || []) {
    if (!links.has(key(l))) links.set(key(l), []);
    links.get(key(l)).push(l);
  }
  const field = (l, k) => (k === "source" || k === "target" ? end(l[k]) : l[k]);
  const declaredIn = (e, l) => Object.keys(e).every((k) => stable(field(l, k)) === stable(field(e, k)));
  const res = { fragments: 0, exact: 0, diffs: [] };
  for (const f of readdirSync(fragmentsDir).filter((x) => x.endsWith(".json")).sort()) {
    const frag = JSON.parse(readFileSync(join(fragmentsDir, f), "utf8"));
    if (!Array.isArray(frag.nodes)) continue;
    res.fragments++;
    let ok = true;
    for (const n of frag.nodes) {
      const s = byId.get(n.id);
      if (!s) { res.diffs.push(`${f}: missing node ${n.id}`); ok = false; continue; }
      for (const [k, v] of Object.entries(n)) if (JSON.stringify(s[k]) !== JSON.stringify(v)) { res.diffs.push(`${f}: ${n.id}.${k}`); ok = false; }
    }
    const demands = new Map();
    for (const e of frag.edges || []) {
      if (!demands.has(key(e))) demands.set(key(e), []);
      demands.get(key(e)).push(e);
    }
    for (const [k, want] of demands) {
      const same = links.get(k) || [];
      for (const _ of unassigned(want, same, declaredIn)) {
        res.diffs.push(`${f}: ${same.length ? "edge fields differ on" : "missing edge"} ${k}`);
        ok = false;
      }
    }
    if (ok) res.exact++;
  }
  return res;
}

/** Member/name binding: each node carries its community's label; no community id has two names. */
export function nameBinding(graph) {
  const labels = graph.community_labels || graph.graph?.community_labels || {};
  const findings = [];
  const names = new Map();
  for (const n of graph.nodes) {
    const l = labels[String(n.community)];
    if (l == null || l !== n.community_name) findings.push(`${n.id}: community_name does not equal its community label`);
    const k = String(n.community);
    if (!names.has(k)) names.set(k, new Set());
    names.get(k).add(n.community_name);
  }
  for (const [k, s] of names) if (s.size > 1) findings.push(`community ${k} carries ${s.size} names`);
  return findings;
}

/**
 * D424-R1a: the bound source repository, its Git directory and its common Git directory are protected
 * before any deletion or write. Staging must be disjoint from each, and the source must be readable. A
 * supplied caller root must be that source; the caller head is compared with the source snapshot's HEAD only
 * when both are supplied. The repository's actual HEAD is not read here (G-D424b-1). Returns findings.
 */
export function sourceProtection(source, staging, caller = {}) {
  if (!source?.repo) return ["a bound source repository is required: composition protects it before any write"];
  let roots;
  try {
    roots = {
      "source repository": git(source.repo, ["rev-parse", "--show-toplevel"]),
      "source Git directory": resolve(source.repo, git(source.repo, ["rev-parse", "--git-dir"])),
      "source common Git directory": resolve(source.repo, git(source.repo, ["rev-parse", "--git-common-dir"])),
    };
  } catch {
    return [`the source repository ${source.repo} is unavailable: its identity cannot be proved`];
  }
  const findings = [];
  for (const [role, p] of Object.entries(roots)) if (!disjoint(staging, p)) findings.push(`staging must be disjoint from the ${role}`);
  if (caller.rootNative && canonicalFsPath(caller.rootNative) !== canonicalFsPath(roots["source repository"])) findings.push("the caller root is not the bound source repository");
  if (source.snapshot?.head && caller.head && source.snapshot.head !== caller.head) findings.push("the caller head is not the bound source snapshot's HEAD");
  return findings;
}

/**
 * Composes the staging state: retained bytes from the baseline, promoted bytes
 * from the candidate, and branch/worktree rebound under R2 to the caller. Every
 * check refuses rather than repairs. Returns the reviewed-manifest identity.
 */
export function composeCandidate({ candidateState, baseline, staging, workRoot, source, caller, frozenAt, fragmentsDir }) {
  const outside = fixtureBoundary(workRoot, { staging });
  if (!disjoint(staging, candidateState)) outside.push("staging must be disjoint from the candidate state");
  if (!disjoint(staging, baseline)) outside.push("staging must be disjoint from the baseline");
  outside.push(...sourceProtection(source, staging, caller));
  if (outside.length) return { ok: false, findings: outside };
  const findings = [];
  const { entries, unknown, multi } = classifyState(candidateState);
  if (unknown.length) findings.push(`unclassified candidate files: ${unknown.slice(0, 10).join(", ")}`);
  if (multi.length) findings.push(`multiply classified files: ${multi.slice(0, 10).join(", ")}`);
  for (const e of entries) if (e.policy === "promote-empty") findings.push(`pending semantic file present: ${e.path}`);
  const graph = readJsonOr(join(candidateState, "graph.json"));
  if (!graph) findings.push("the candidate has no readable graph.json");
  const raw = lifecycleFindings(readState(candidateState), { head: caller.head, branchName: caller.branch });
  if (raw.length) findings.push(...raw.map((f) => `raw ${f}`));
  if (graph) {
    const parity = fragmentParity(graph, fragmentsDir);
    if (parity.exact !== parity.fragments) findings.push(`fragment parity ${parity.exact}/${parity.fragments}: ${parity.diffs.slice(0, 5).join("; ")}`);
    findings.push(...nameBinding(graph).slice(0, 10));
  }
  if (findings.length) return { ok: false, findings };
  rmSync(staging, { recursive: true, force: true });
  mkdirSync(staging, { recursive: true });
  for (const e of classifyState(baseline).entries) {
    if (e.policy === "retain") cpSync(join(baseline, e.path), join(staging, e.path), { recursive: true });
  }
  for (const e of entries) {
    if (e.policy === "promote") cpSync(join(candidateState, e.path), join(staging, e.path), { recursive: true });
  }
  const prior = readState(baseline);
  const branch = {
    ...readState(candidateState).branch,
    branchName: caller.branch, worktreePath: caller.rootNative, upstream: caller.upstream ?? null, mergeBase: caller.mergeBase ?? null,
    lastSeenHead: caller.head, lastAnalyzedHead: caller.head,
    firstSeenHead: prior.branch?.firstSeenHead ?? caller.head, createdAt: prior.branch?.createdAt ?? frozenAt,
    stale: false, staleReason: null, staleSince: null, lifecycleEvent: null, updatedAt: frozenAt,
  };
  const worktree = {
    ...readState(candidateState).worktree,
    worktreePath: caller.rootNative, gitDir: caller.gitDirNative, commonGitDir: caller.gitDirNative,
    lastSeenHead: caller.head, lastAnalyzedHead: caller.head,
    firstSeenHead: prior.worktree?.firstSeenHead ?? caller.head, createdAt: prior.worktree?.createdAt ?? frozenAt, updatedAt: frozenAt,
  };
  writeFileSync(join(staging, "branch.json"), JSON.stringify(branch, null, 2) + "\n");
  writeFileSync(join(staging, "worktree.json"), JSON.stringify(worktree, null, 2) + "\n");
  const post = lifecycleFindings(readState(staging), { head: caller.head, branchName: caller.branch, root: caller.rootNative, gitDir: caller.gitDirNative });
  if (post.length) return { ok: false, findings: post.map((f) => `rebound ${f}`) };
  for (const e of entries.filter((x) => x.policy === "promote").concat([{ path: "branch.json" }, { path: "worktree.json" }])) {
    const hit = findForeignPath(readFileSync(join(staging, e.path), "utf8"));
    if (hit) return { ok: false, findings: [`foreign path in ${e.path}: ${hit.slice(0, 80)}`] };
  }
  const map = hashTree(staging);
  return { ok: true, manifest: treeDigest(map), files: Object.keys(map).length, graphSha256: map["graph.json"], frozenAt };
}

// ---------------------------------------------------------------------------
// F3 (`D-425`): guarded live publication. Plan: B-050 revision 2 (`1708752`)
// with revision 3 (`10c32ce`) and 3b (`7f27384`), accepted by Lane B (`3578fe9`).
// ---------------------------------------------------------------------------

export const MANIFEST_ALGORITHM = "guard-treeDigest-v1";

/** The first guarded baseline: the release recorded at `6a74c8e` (B-050), D-424c sync. */
export const BOOTSTRAP = Object.freeze({
  releaseLocus: "6a74c8e7125b82604d902c5857a9957001712970",
  algorithm: MANIFEST_ALGORITHM,
  digest: "1add761f98aa5aa9917f56280d7bf91939913631540fc65d922693b0ddaf2f9a",
  files: 583,
  graphSha256: "35541b337b25d2a16ee237219ee4f3417e668e352c3d8da044a21208cc5b1edb",
  analyzedSource: "40429f8a60aaa9554fda6ba126d24de670fda1ea",
});

/** CLI exit codes: one per outcome class (revision 3b's table). */
export const EXIT = Object.freeze({ ok: 0, refused: 2, pending: 3, failed: 4, recoveryRequired: 5, restored: 6, abortedUnchanged: 7 });

/** Maps a transaction or recovery outcome to its exit code; every F2 outcome keeps its own class. */
export function exitFor(outcome) {
  return {
    released: EXIT.ok, "completed-release": EXIT.ok, "nothing-to-recover": EXIT.ok, ready: EXIT.ok, published: EXIT.ok,
    pending: EXIT.pending, failed: EXIT.failed, "recovery-required": EXIT.recoveryRequired,
    restored: EXIT.restored, "rolled-back": EXIT.restored, "aborted-live-unchanged": EXIT.abortedUnchanged,
  }[outcome] ?? EXIT.refused;
}

/** The release receipt, built only from the journal, so a recovered release carries the original approval. */
function releaseReceipt(j) {
  return {
    kind: "release", runToken: j.runToken, target: j.target, sourceCommit: j.sourceCommit, publicationHead: j.publicationHead ?? null,
    manifestAlgorithm: j.manifestAlgorithm ?? null, reviewedManifest: j.reviewedManifest, acceptance: j.acceptance ?? null, predecessor: j.predecessor ?? null,
  };
}

/** The volume a path lives on (its nearest existing ancestor's device). */
function volumeOf(p) {
  let h = resolve(p);
  while (!existsSync(h)) {
    const d = dirname(h);
    if (d === h) break;
    h = d;
  }
  try {
    return statSync(h).dev;
  } catch {
    return null;
  }
}

/**
 * Live entry checks, before any write: the target resolves to the configured live target;
 * staging sits inside the declared work root, outside the live and source trees, on the
 * live target's volume; the live target is disjoint from the source repository.
 */
export function liveEntryFindings({ target, liveTarget = REAL_LIVE_TARGET, staging, workRoot, source }) {
  const live = canonicalFsPath(liveTargetPath(liveTarget));
  const t = canonicalFsPath(liveTargetPath(target));
  if (!live || !t || t !== live) return ["the target does not resolve to the configured live target"];
  const findings = [...fixtureBoundary(workRoot, { staging })];
  if (!disjoint(staging, live)) findings.push("staging must be disjoint from the live target");
  if (!source?.repo || !source?.snapshot?.head) findings.push("a source repository and snapshot are required");
  else {
    findings.push(...sourceProtection({ repo: source.repo }, staging, {}));
    if (!disjoint(live, source.repo)) findings.push("the live target must be disjoint from the source repository");
  }
  if (volumeOf(staging) === null || volumeOf(staging) !== volumeOf(live)) findings.push("staging is not on the live target's volume");
  return findings;
}

/** Live recovery: the journal's old and backup copies are exactly this run's siblings, and staging is outside the target. */
function liveJournalFindings(P, j) {
  const f = [];
  const same = (a, b) => canonicalFsPath(a || "") === canonicalFsPath(b);
  if (!same(j.target, P.target)) f.push("the journal names a different target");
  if (!same(j.old, join(P.parent, `.graphify-old-${j.runToken}`))) f.push("the journal's old copy is not this run's sibling");
  if (!same(j.backup, join(P.parent, `.graphify-bak-${j.runToken}`))) f.push("the journal's backup is not this run's sibling");
  if (!j.staging || !disjoint(j.staging, P.target)) f.push("the journal's staging is not disjoint from the target");
  return f;
}

// --- F3-R2: the publication source rule ("Handoff-only fast-forward") ---

const isAncestor = (repo, a, b) => {
  try {
    execFileSync("git", ["-C", repo, "merge-base", "--is-ancestor", a, b], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};

/**
 * Publication HEAD may fast-forward from the analyzed HEAD only through commits that touch
 * docs/handoff/ alone; the outside tree, branch, origin, upstream, config, every other ref and a
 * clean tree are unchanged. Amends D-424 R4 at publication only (D-425 item 3).
 */
export function publicationSourceFindings(repo, snapshot) {
  let now;
  try {
    now = snapshotSource(repo);
  } catch (e) {
    return { ok: false, findings: [`the source is unavailable (${String(e.message).trim().split("\n")[0]})`] };
  }
  if (!now.ok) return { ok: false, findings: [now.reason] };
  const findings = [];
  for (const k of ["branch", "origin", "upstream", "config"]) if (now[k] !== snapshot[k]) findings.push(`source ${k} changed since prepare`);
  const branchRef = `refs/heads/${snapshot.branch}`;
  const others = (refs) => JSON.stringify(refs.filter((r) => r.name !== branchRef));
  if (others(now.refs) !== others(snapshot.refs)) findings.push("a ref other than the source branch changed since prepare");
  if (now.head !== snapshot.head) {
    if (!isAncestor(repo, snapshot.head, now.head)) findings.push("the publication HEAD is not a fast-forward of the analyzed HEAD");
    else {
      for (const line of git(repo, ["rev-list", "--parents", `${snapshot.head}..${now.head}`]).split("\n").filter(Boolean)) {
        const [commit, ...parents] = line.split(" ");
        if (parents.length !== 1) { findings.push(`commit ${commit.slice(0, 7)} is a merge`); continue; }
        const paths = git(repo, ["diff-tree", "--no-commit-id", "--name-only", "-r", commit]).split("\n").filter(Boolean);
        const bad = paths.filter((p) => !p.startsWith("docs/handoff/"));
        if (bad.length) findings.push(`commit ${commit.slice(0, 7)} touches outside docs/handoff/: ${bad.slice(0, 3).join(", ")}`);
      }
      const outside = git(repo, ["diff", "--name-only", snapshot.head, now.head]).split("\n").filter((p) => p && !p.startsWith("docs/handoff/"));
      if (outside.length) findings.push("the tree outside docs/handoff/ changed since prepare");
    }
  }
  return { ok: findings.length === 0, findings, publicationHead: now.head };
}

// --- F3-R1/R1a: the acceptance record ---

const TOP_KEYS = ["kind", "version", "disposition", "scope", "reviewer", "workId", "graphSha256", "manifest", "analyzedSource", "baseline", "pendingSemantics"];
const MANIFEST_KEYS = ["algorithm", "digest", "files"];
const BASELINE_KEYS = ["releaseLocus", "algorithm", "digest"];
const HEX64 = /^[0-9a-f]{64}$/;
const HEX40 = /^[0-9a-f]{40}$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const isPlainObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
const sameKeys = (o, keys) => isPlainObject(o) && JSON.stringify(Object.keys(o)) === JSON.stringify(keys);

/**
 * Validates one acceptance record's text: exact ordered keys (top level, manifest, baseline),
 * types and literals, then canonical text (which also refuses duplicate keys). Values are
 * compared with the work folder's frozen identity separately.
 */
export function parseAcceptance(text) {
  let r;
  try {
    r = JSON.parse(text);
  } catch {
    return { ok: false, findings: ["the record is not valid JSON"] };
  }
  const f = [];
  if (!sameKeys(r, TOP_KEYS)) return { ok: false, findings: ["the record's top-level keys are not exactly the required keys in order"] };
  if (!sameKeys(r.manifest, MANIFEST_KEYS)) f.push("manifest keys are not exactly algorithm, digest, files");
  if (!sameKeys(r.baseline, BASELINE_KEYS)) f.push("baseline keys are not exactly releaseLocus, algorithm, digest");
  if (r.kind !== "graphify-f3-acceptance") f.push("kind");
  if (r.version !== 1) f.push("version");
  if (r.disposition !== "Accept") f.push("disposition is not Accept");
  if (r.scope !== "F3 publication") f.push("scope");
  if (r.reviewer !== "Lane B") f.push("reviewer");
  if (typeof r.workId !== "string" || !UUID.test(r.workId)) f.push("workId");
  if (typeof r.graphSha256 !== "string" || !HEX64.test(r.graphSha256)) f.push("graphSha256");
  if (typeof r.analyzedSource !== "string" || !HEX40.test(r.analyzedSource)) f.push("analyzedSource");
  if (r.pendingSemantics !== 0) f.push("pendingSemantics");
  if (isPlainObject(r.manifest)) {
    if (r.manifest.algorithm !== MANIFEST_ALGORITHM) f.push("manifest.algorithm");
    if (typeof r.manifest.digest !== "string" || !HEX64.test(r.manifest.digest)) f.push("manifest.digest");
    if (!Number.isInteger(r.manifest.files) || r.manifest.files < 1) f.push("manifest.files");
  }
  if (isPlainObject(r.baseline)) {
    if (typeof r.baseline.releaseLocus !== "string" || !HEX40.test(r.baseline.releaseLocus)) f.push("baseline.releaseLocus");
    if (r.baseline.algorithm !== MANIFEST_ALGORITHM) f.push("baseline.algorithm");
    if (typeof r.baseline.digest !== "string" || !HEX64.test(r.baseline.digest)) f.push("baseline.digest");
  }
  if (!f.length && text !== JSON.stringify(r, null, 2)) f.push("the record is not in canonical form (duplicate keys or formatting)");
  return f.length ? { ok: false, findings: f } : { ok: true, record: r };
}

/** Added line numbers (1-based, new side) of one file in one commit. */
function addedLines(repo, commit, path) {
  const out = git(repo, ["diff", "--unified=0", "--no-color", `${commit}^`, commit, "--", path]);
  const lines = new Set();
  for (const m of out.matchAll(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/gm)) {
    const start = Number(m[1]);
    const count = m[2] === undefined ? 1 : Number(m[2]);
    for (let i = 0; i < count; i++) lines.add(start + i);
  }
  return lines;
}

/**
 * The one acceptance record that `commit` itself introduces into B-050: a heading line
 * "### F3 acceptance record" and its fenced json block, every line added by that commit.
 * The commit must be a single-parent commit inside analyzed..publication. Inherited, quoted,
 * duplicated or prose-only records refuse.
 */
export function acceptanceAt(repo, commit, { analyzedHead, publicationHead }) {
  let full;
  try {
    full = git(repo, ["rev-parse", "--verify", `${commit}^{commit}`]);
  } catch {
    return { ok: false, findings: ["the review commit does not exist"] };
  }
  if (full === analyzedHead || !isAncestor(repo, analyzedHead, full) || !isAncestor(repo, full, publicationHead)) {
    return { ok: false, findings: ["the review commit is outside the allowed analyzed..publication history"] };
  }
  const parents = git(repo, ["rev-list", "--parents", "-n", "1", full]).split(" ").slice(1);
  if (parents.length !== 1) return { ok: false, findings: ["the review commit must have exactly one parent"] };
  const path = git(repo, ["ls-tree", "--name-only", full, "docs/handoff/"]).split("\n").find((p) => /^docs\/handoff\/B-050-/.test(p));
  if (!path) return { ok: false, findings: ["B-050 is absent at the review commit"] };
  const added = addedLines(repo, full, path);
  const lines = git(repo, ["show", `${full}:${path}`]).split("\n").map((l) => l.replace(/\r$/, ""));
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "### F3 acceptance record" || lines[i + 1] !== "```json") continue;
    const end = lines.indexOf("```", i + 2);
    if (end < 0) continue;
    let all = true;
    for (let k = i; k <= end; k++) if (!added.has(k + 1)) all = false;
    if (all) blocks.push({ start: i + 1, end: end + 1, text: lines.slice(i + 2, end).join("\n") });
  }
  if (blocks.length !== 1) return { ok: false, findings: [blocks.length ? "the review commit adds more than one acceptance record" : "the review commit adds no complete acceptance record"] };
  const parsed = parseAcceptance(blocks[0].text);
  if (!parsed.ok) return parsed;
  const blob = git(repo, ["rev-parse", `${full}:${path}`]);
  return { ok: true, record: parsed.record, locus: { commit: full, path, blob, lines: [blocks[0].start, blocks[0].end] } };
}

// --- F3-R6: baseline selection through the release chain ---

/**
 * The live state's baseline: the bootstrap, or exactly one guarded release receipt for this
 * target whose manifest equals the live state and whose predecessor chain reaches the bootstrap.
 * Missing, ambiguous, rejected or broken-chain baselines refuse; never "the newest file".
 */
export function selectBaseline({ liveTarget = REAL_LIVE_TARGET, bootstrap = BOOTSTRAP } = {}) {
  const target = liveTargetPath(liveTarget);
  if (!existsSync(target)) return { ok: false, reason: "the live target is missing" };
  const map = hashTree(target);
  const digest = treeDigest(map);
  const files = Object.keys(map).length;
  const P = transactionPaths(liveTarget);
  const canonTarget = canonicalFsPath(target);
  const receipts = (existsSync(P.receipts) ? readdirSync(P.receipts) : [])
    .filter((f) => /^release-.+\.json$/.test(f))
    .map((f) => readJsonOr(join(P.receipts, f)))
    .filter((r) => r && r.kind === "release" && r.manifestAlgorithm === MANIFEST_ALGORITHM && r.acceptance?.record?.disposition === "Accept" &&
      r.acceptance?.locus?.commit && r.predecessor && canonicalFsPath(r.target || "") === canonTarget);
  const matching = receipts.filter((r) => r.reviewedManifest === digest);
  if (matching.length > 1) return { ok: false, reason: "more than one release receipt matches the live state: ambiguous baseline" };
  if (matching.length === 1) {
    let cur = matching[0];
    for (let hops = 0; hops <= receipts.length; hops++) {
      const p = cur.predecessor;
      if (p.digest === bootstrap.digest && p.releaseLocus === bootstrap.releaseLocus) {
        return { ok: true, baseline: { releaseLocus: matching[0].acceptance.locus.commit, algorithm: MANIFEST_ALGORITHM, digest, files } };
      }
      const next = receipts.filter((r) => r.reviewedManifest === p.digest && r.acceptance.locus.commit === p.releaseLocus);
      if (next.length !== 1) return { ok: false, reason: "the release chain is broken or ambiguous" };
      cur = next[0];
    }
    return { ok: false, reason: "the release chain does not reach the bootstrap" };
  }
  if (digest === bootstrap.digest && files === bootstrap.files) {
    return { ok: true, baseline: { releaseLocus: bootstrap.releaseLocus, algorithm: MANIFEST_ALGORITHM, digest, files } };
  }
  return { ok: false, reason: "the live state matches no released baseline (bootstrap or chain)" };
}

// --- F3-R3/R3a/R3b: work states, the exclusive work claim and the commands ---

const STATE_FILE = "STATE.json";
const CLAIM_FILE = ".claim";
const readWork = (work) => readJsonOr(join(work, STATE_FILE));
const writeWork = (work, state) => writeDurable(join(work, STATE_FILE), state);
const result = (outcome, extra = {}) => ({ outcome, exit: exitFor(outcome), ...extra });
const refusedWork = (reason, extra = {}) => ({ outcome: "refused", exit: EXIT.refused, reason, message: "this run did not publish or create a transaction journal", ...extra });

/** Runs `fn` holding the exclusive work claim; a held or abandoned claim refuses and is never replaced. */
function withClaim(work, fn) {
  const token = randomUUID();
  const path = join(work, CLAIM_FILE);
  if (!createExclusive(path, ownerRecord(token))) return refusedWork("the work claim is held: another entrant is active, or an abandoned claim needs evidenced manual recovery");
  try {
    return fn();
  } finally {
    releaseOwned(path, token);
  }
}

/**
 * The `preparing` gate (F3-R3b), run under the claim: an alive or unknown owner refuses with the
 * work unchanged; only a proved-dead owner, re-checked by the same run token, makes it `failed`.
 */
function preparingGate(work) {
  if (existsSync(join(work, STATE_FILE)) && readWork(work) === undefined) return refusedWork("preparation ownership cannot be established (unreadable work state)");
  const s = readWork(work);
  if (s?.state !== "preparing") return null;
  const first = s.owner ? ownerState(s.owner) : "unknown";
  if (first === "alive") return refusedWork("the preparation owner is alive");
  if (first !== "dead") return refusedWork("preparation ownership cannot be established");
  const again = readWork(work);
  if (again?.state !== "preparing" || again.owner?.runToken !== s.owner.runToken || ownerState(again.owner) !== "dead") return refusedWork("the preparation state changed during the check");
  writeWork(work, { ...again, state: "failed", reason: "the preparing owner was proved dead; its partial candidate is never resumed" });
  return result("failed", { reason: "the preparing owner was proved dead" });
}

const callerOf = (repo, snapshot) => {
  let mergeBase = null;
  try {
    if (snapshot.upstream) mergeBase = git(repo, ["merge-base", "HEAD", snapshot.upstream]);
  } catch {
    // no merge base: recorded as null
  }
  const root = resolve(repo);
  return { head: snapshot.head, branch: snapshot.branch, upstream: snapshot.upstream, mergeBase, rootNative: root, gitDirNative: join(root, ".git") };
};

/** One generation attempt from frozen inputs; writes only inside its own attempt folder. */
function attempt(work, s, answers, deps) {
  const n = (s.attempts ?? 0) + 1;
  const dir = join(work, `attempt-${n}`);
  mkdirSync(dir, { recursive: true });
  const baseline = join(dir, "baseline");
  cpSync(liveTargetPath(s.liveTarget), baseline, { recursive: true });
  if (digestOf(baseline) !== s.frozen.baseline.digest) return { attempts: n, outcome: "failed", reason: "the baseline copy does not equal the frozen baseline" };
  const gen = deps.generate({ repo: s.repo, snapshot: s.frozen.snapshot, baseline, work: join(dir, "gen"), answers, tool: deps.tool, cli: deps.cli, fragmentsOrder: deps.fragmentsOrder });
  if (gen.status === "pending-semantic") return { attempts: n, outcome: "pending", pending: gen.pending };
  if (gen.status !== "generated") return { attempts: n, outcome: "failed", reason: gen.reason || "generation failed" };
  const staging = join(dir, "staging");
  const composed = deps.compose({ candidateState: gen.state, baseline, staging, workRoot: work, source: { repo: s.repo, snapshot: s.frozen.snapshot }, caller: callerOf(s.repo, s.frozen.snapshot), frozenAt: deps.now(), fragmentsDir: join(gen.checkout, "docs", "graph-fragments") });
  if (!composed.ok) return { attempts: n, outcome: "failed", reason: (composed.findings || []).slice(0, 5).join("; ") };
  return { attempts: n, outcome: "ready", ready: { staging, manifest: composed.manifest, graphSha256: composed.graphSha256, files: composed.files, frozenAt: composed.frozenAt } };
}

const defaults = (deps = {}) => ({ generate: generateCandidate, compose: composeCandidate, now: () => new Date().toISOString(), ...deps });

/** Writes `preparing` under the claim, runs one attempt outside it, then settles the state under the claim. */
function runAttempt(work, s, answers, deps) {
  const owner = ownerRecord(randomUUID());
  const started = withClaim(work, () => {
    const gate = preparingGate(work);
    if (gate) return gate;
    writeWork(work, { ...s, state: "preparing", owner });
    return null;
  });
  if (started) return started;
  let r;
  try {
    r = attempt(work, s, answers, deps);
  } catch (e) {
    r = { attempts: (s.attempts ?? 0) + 1, outcome: "failed", reason: String(e.message) };
  }
  return withClaim(work, () => {
    const cur = readWork(work);
    if (cur?.state !== "preparing" || cur.owner?.runToken !== owner.runToken) return refusedWork("the work state changed during preparation");
    const next = { ...s, attempts: r.attempts, state: r.outcome, owner: undefined, ready: r.ready, pending: r.pending, reason: r.reason };
    if (r.outcome === "pending") writeDurable(join(work, "PENDING.json"), r.pending);
    writeWork(work, next);
    return result(r.outcome, { workId: s.workId, reason: r.reason, ready: r.ready, pending: r.pending });
  });
}

/** `prepare --work <new dir>`: freezes the source, pins and baseline, then runs the first attempt. */
export function prepareWork({ repo, work, answers = {}, answersHash = null, liveTarget = REAL_LIVE_TARGET, bootstrap = BOOTSTRAP, deps } = {}) {
  if (existsSync(work) && readdirSync(work).length) return refusedWork("the work folder is not empty: use a new folder, or prepare --resume");
  mkdirSync(work, { recursive: true });
  const d = defaults(deps);
  const pins = d.tool ? { ok: true, cli: d.cli } : pinnedCli(d.cli);
  if (!pins.ok) return refusedWork(pins.reason);
  const snapshot = snapshotSource(repo);
  if (!snapshot.ok) return refusedWork(snapshot.reason);
  const base = selectBaseline({ liveTarget, bootstrap });
  if (!base.ok) return refusedWork(base.reason);
  const s = { workId: randomUUID(), repo: resolve(repo), liveTarget: resolve(liveTarget), attempts: 0, answersHash,
    frozen: { snapshot, pins: TOOL_PINS, baseline: base.baseline } };
  return runAttempt(work, s, answers, { ...d, cli: pins.cli });
}

/** `prepare --resume <dir> --answers <file>`: only from `pending`, only on unchanged frozen inputs. */
export function resumeWork({ work, answers = {}, answersHash = null, bootstrap = BOOTSTRAP, deps } = {}) {
  const d = defaults(deps);
  const checked = withClaim(work, () => {
    const gate = preparingGate(work);
    if (gate) return gate;
    const s = readWork(work);
    if (s?.state === "ready") return s.answersHash === answersHash ? result("ready", { workId: s.workId }) : (writeWork(work, { ...s, state: "failed", reason: "the answers changed after ready" }), result("failed", { reason: "the answers changed after ready" }));
    if (s?.state !== "pending") return refusedWork(`resume needs a pending work folder (state: ${s?.state ?? "none"})`);
    const fail = (reason) => (writeWork(work, { ...s, state: "failed", reason }), result("failed", { reason }));
    const same = snapshotMatches(s.repo, s.frozen.snapshot);
    if (!same.ok) return fail(`the frozen source changed: ${same.reason}`);
    if (JSON.stringify(TOOL_PINS) !== JSON.stringify(s.frozen.pins)) return fail("the tool pins changed");
    const base = selectBaseline({ liveTarget: s.liveTarget, bootstrap });
    if (!base.ok || base.baseline.digest !== s.frozen.baseline.digest) return fail("the live baseline changed");
    return { proceed: s };
  });
  if (!checked.proceed) return checked;
  return runAttempt(work, { ...checked.proceed, answersHash }, answers, d);
}

/**
 * `publish --work <dir> --review <commit>`: from `ready` (or a `reviewed` re-entry with the same
 * commit and no journal). Under the publication lock it re-validates the source rule, the
 * acceptance record and the frozen identity, writes `reviewed`, then runs the transaction.
 */
export function publishWork({ work, review, bootstrap = BOOTSTRAP, transaction = {} } = {}) {
  return withClaim(work, () => {
    const gate = preparingGate(work);
    if (gate) return gate;
    const s = readWork(work);
    if (s?.state === "reviewed") {
      if (s.acceptance?.locus?.commit !== review && !(review && s.acceptance?.locus?.commit?.startsWith(review))) return refusedWork("a reviewed work folder re-enters only with its own review commit");
      if (existsSync(transactionPaths(s.liveTarget).journal)) return refusedWork("a transaction journal exists: run recover");
    } else if (s?.state !== "ready") return refusedWork(`publish needs a ready work folder (state: ${s?.state ?? "none"})`);
    const validate = () => {
      const src = publicationSourceFindings(s.repo, s.frozen.snapshot);
      if (!src.ok) throw new Error(`source rule: ${src.findings.join("; ")}`);
      const acc = acceptanceAt(s.repo, review, { analyzedHead: s.frozen.snapshot.head, publicationHead: src.publicationHead });
      if (!acc.ok) throw new Error(`acceptance record: ${acc.findings.join("; ")}`);
      const r = acc.record;
      const want = { workId: s.workId, graphSha256: s.ready.graphSha256, "manifest.digest": s.ready.manifest, "manifest.files": s.ready.files, analyzedSource: s.frozen.snapshot.head, "baseline.releaseLocus": s.frozen.baseline.releaseLocus, "baseline.digest": s.frozen.baseline.digest };
      const got = { workId: r.workId, graphSha256: r.graphSha256, "manifest.digest": r.manifest.digest, "manifest.files": r.manifest.files, analyzedSource: r.analyzedSource, "baseline.releaseLocus": r.baseline.releaseLocus, "baseline.digest": r.baseline.digest };
      const diff = Object.keys(want).filter((k) => want[k] !== got[k]);
      if (diff.length) throw new Error(`the acceptance record does not match the work folder: ${diff.join(", ")}`);
      const base = selectBaseline({ liveTarget: s.liveTarget, bootstrap });
      if (!base.ok || base.baseline.digest !== s.frozen.baseline.digest) throw new Error("the live baseline changed since prepare");
      const acceptance = { record: r, locus: acc.locus };
      writeWork(work, { ...s, state: "reviewed", acceptance, publicationHead: src.publicationHead });
      return { acceptance, publicationHead: src.publicationHead };
    };
    const r = publish({ ...transaction, target: s.liveTarget, staging: s.ready.staging, reviewedManifest: s.ready.manifest, baselineManifest: s.frozen.baseline.digest,
      source: { repo: s.repo, snapshot: s.frozen.snapshot }, predecessor: { releaseLocus: s.frozen.baseline.releaseLocus, digest: s.frozen.baseline.digest },
      live: { liveTarget: s.liveTarget, workRoot: work, validate } });
    const cur = readWork(work);
    if (r.ok) {
      writeWork(work, { ...cur, state: "published", runToken: r.runToken });
      return result("released", { message: "published: live equals the reviewed manifest", runToken: r.runToken });
    }
    const outcome = r.recovery ? r.recovery.outcome : r.outcome;
    if (cur?.state === "reviewed") writeWork(work, { ...cur, lastOutcome: outcome, lastReason: r.reason });
    return outcome === "refused" ? refusedWork(r.reason) : result(outcome, { reason: r.reason, message: OUTCOME_MESSAGE[outcome] });
  });
}

/** Messages state only verified facts (revision 3b's table). */
export const OUTCOME_MESSAGE = Object.freeze({
  "aborted-live-unchanged": "not published: live still equals the prior release",
  restored: "restored: live equals the prior release",
  "rolled-back": "restored: live equals the prior release",
  "completed-release": "published (completed by recovery)",
  "recovery-required": "recovery required; the live state is not verified",
});

/** `recover`: owned recovery of the live target; never takes over a peer or unknown owner. */
export function recoverLive({ liveTarget = REAL_LIVE_TARGET, inject } = {}) {
  const r = recover({ target: liveTarget, live: { liveTarget }, inject });
  return r.outcome === "refused" ? refusedWork(r.reason) : result(r.outcome, { reason: r.reason, message: OUTCOME_MESSAGE[r.outcome] });
}

/** Parses `--flag value` pairs. */
function flags(argv) {
  const o = {};
  for (let i = 0; i < argv.length; i++) if (argv[i].startsWith("--")) o[argv[i].slice(2)] = argv[i + 1], i++;
  return o;
}

/** The CLI: prepare, publish or recover against the real live target only. Returns { exit, ...result }. */
export function cli(argv, { repo = process.cwd() } = {}) {
  const [verb, ...rest] = argv;
  const o = flags(rest);
  const live = liveTargetPath(join(repo, ".graphify"));
  if (!["prepare", "publish", "recover"].includes(verb)) return { exit: EXIT.refused, outcome: "refused", reason: refusal() };
  if (canonicalFsPath(live) !== canonicalFsPath(REAL_LIVE_TARGET)) return refusedWork("this repository's .graphify does not resolve to the real live target");
  const answersOf = (p) => (p ? { answers: JSON.parse(readFileSync(p, "utf8").replace(/^\uFEFF/, "")), answersHash: createHash("sha256").update(readFileSync(p)).digest("hex") } : {});
  if (verb === "recover") return recoverLive({ liveTarget: REAL_LIVE_TARGET });
  if (verb === "publish") return o.work && o.review ? publishWork({ work: resolve(o.work), review: o.review }) : refusedWork("publish needs --work <dir> --review <commit>");
  if (o.resume) return resumeWork({ work: resolve(o.resume), ...answersOf(o.answers) });
  return o.work ? prepareWork({ repo, work: resolve(o.work), liveTarget: REAL_LIVE_TARGET, ...answersOf(o.answers) }) : refusedWork("prepare needs --work <new dir> or --resume <dir>");
}

// ---------------------------------------------------------------------------
// Entry point: prepare, publish and recover only (`D-425`); anything else refuses.
// ---------------------------------------------------------------------------

export function refusal() {
  return "guarded-rebuild: stage F3 (D-425). Use: prepare --work <new dir> [--answers <file>] | prepare --resume <dir> --answers <file> | publish --work <dir> --review <commit> | recover. Lane B's acceptance record must be introduced by the review commit (handoff-only fast-forward). No raw rebuild of the live state; no fallback.";
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const r = cli(process.argv.slice(2));
  (r.exit === EXIT.ok || r.exit === EXIT.pending ? console.log : console.error)(r.outcome === "refused" && r.reason === refusal() ? refusal() : JSON.stringify(r, null, 1));
  process.exit(r.exit);
}
