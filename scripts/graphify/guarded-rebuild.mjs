// `B-050` guarded Graphify procedure — STAGE F1 ONLY (`D-418`, contract v4 at
// `d733513` with the two conditions adopted at `b97f93f`).
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
// WHAT F1 IS NOT. No generation, swap, publication or recovery runs here. F2
// (isolated generation, composition, owned recovery) and F3 (reviewed
// publication, runbook adoption) are not authorized. Running this file directly
// refuses. Until F3 is accepted, graph syncs use the `D-409`/`D-410` procedure.

import { existsSync, lstatSync, readFileSync, readlinkSync, realpathSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

export const STAGE = "F1";
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
  // Decode first, so an encoded drive colon or separator becomes visible.
  for (let i = 0; i < 3 && /%[0-9A-Fa-f]{2}/.test(p); i++) {
    try {
      p = decodeURIComponent(p);
    } catch {
      return { malformed: true };
    }
  }
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

// Absolute-path candidates, each taken as a WHOLE token so an allowed path
// embedded in a bad URI cannot hide it (F1-R1, Lane B `e843edf`). Supported
// representations, raw or inside JSON strings:
//   * `file:` tokens of any shape — `file://host/…`, `file:///C:/…`, and
//     malformed ones such as `file:/C:/…` or `file:garbage`;
//   * drive-letter paths with raw, JSON-escaped or percent-encoded `:`/separators;
//   * UNC paths, raw `\\host\share` or JSON-escaped `\\\\host\\share`;
//   * forward-slash network roots `//host/share` not preceded by a URL scheme.
// Lexical exclusions: a `file:` directly after `{` or `,` followed by a plain
// identifier is an object key (minified `{file:o,…}`), and `file:` followed by
// nothing is prose. `https://…` is never a path.
const FILE_TOKEN = String.raw`(?<![A-Za-z0-9_$.-])file:[^\s"'<>|\x60]+`;
const DRIVE_TOKEN = String.raw`(?<![A-Za-z0-9+.-])[A-Za-z](?::|%3[aA])(?:\\\\|\\|\/|%5[cC]|%2[fF])[^"'\s<>|\x60]*`;
const UNC_TOKEN = String.raw`(?<![\\\w])(?:\\\\\\\\|\\\\)[A-Za-z0-9._$-]+(?:\\\\|\\)[^"'\s<>|\x60]+`;
const NETWORK_TOKEN = String.raw`(?<![:\w/\\])\/\/[A-Za-z0-9][A-Za-z0-9._-]*\/[^"'\s<>|\x60]+`;
const CANDIDATE = new RegExp([FILE_TOKEN, DRIVE_TOKEN, UNC_TOKEN, NETWORK_TOKEN].join("|"), "g");

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
  const root = allowedRoot.toLowerCase();
  const src = String(text);
  for (const m of src.matchAll(CANDIDATE)) {
    if (/^file:/i.test(m[0]) && isObjectKey(src, m.index, m[0])) continue;
    const c = canonicalizePath(m[0]);
    if (c.network || c.malformed) return m[0];
    if (disposableRoots.some((d) => isWithin(c.path, d.toLowerCase()))) return m[0];
    if (isWithin(c.path, root)) continue;
    return m[0];
  }
  return null;
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
// Entry point: F1 refuses to generate or publish.
// ---------------------------------------------------------------------------

export function refusal() {
  return "guarded-rebuild: stage F1 (D-418) provides validators only. Generation, publication and recovery (F2/F3) are not authorized. Sync the graph with the D-409/D-410 procedure.";
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  console.error(refusal());
  process.exit(2);
}
