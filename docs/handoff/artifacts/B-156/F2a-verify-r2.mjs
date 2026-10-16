// B-156 F2a revision 2 — re-checks every citation at the frozen revision (answers F2a-R1).
// Revision 1 (F2a-verify.mjs) is retained unchanged as history.
//
//   node F2a-verify-r2.mjs <repo> <citations.json> <out dir> [--negative-control]
//
// Changes from revision 1 (F2a-R1):
//   * Every Git call must succeed before its output is used: revision, HEAD, blob, file and tree reads.
//     A failed read is an ERROR, never an observation.
//   * "noFile" passes only when `git ls-tree <rev> -- <path>` SUCCEEDS with empty output. A nonzero exit
//     is an error, not absence.
//   * "absent" passes only on `git grep` exit 1 with empty stderr (unchanged); any other result is an error.
//   * HEAD identity per path comes from a successful `git ls-tree HEAD -- <path>`; a path absent at HEAD is
//     reported as such, and a failed lookup is an error.
//   * New kind "sameBlob": the path has one blob at two revisions (retained evidence on unchanged bytes).
// Any failure or error stops with exit 2 BEFORE the output file is written. Reads Git objects only; no shell.
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const OUT_NAME = "F2a-result-1640ff7-r2.json";
const sha256 = (s) => createHash("sha256").update(s).digest("hex");

export function realGit(repo) {
  return (args) => spawnSync("git", ["-C", repo, ...args], { encoding: "utf8", maxBuffer: 1 << 28 });
}

// One ls-tree entry: "<mode> <type> <oid>\t<path>". Returns {ok, oid|null, err}.
function treeEntry(git, rev, path) {
  const r = git(["ls-tree", rev, "--", path]);
  if (r.status !== 0 || r.error) return { ok: false, err: `ls-tree ${rev} -- ${path}: exit ${r.status} ${String(r.stderr ?? "").trim()}` };
  const line = String(r.stdout).split("\n").find((l) => l.endsWith(`\t${path}`));
  return { ok: true, oid: line ? line.split(/\s+/)[2] : null };
}

export function verify(spec, git) {
  const failures = [];
  const rev = spec.frozenRevision;
  const revCheck = git(["rev-parse", "--verify", `${rev}^{commit}`]);
  if (revCheck.status !== 0 || revCheck.error) return { failures: [`frozen revision unreadable: ${rev}`] };
  const headRes = git(["rev-parse", "--verify", "HEAD^{commit}"]);
  if (headRes.status !== 0 || headRes.error || !/^[0-9a-f]{40}$/.test(String(headRes.stdout).trim()))
    return { failures: [`HEAD unreadable: exit ${headRes.status} ${String(headRes.stderr ?? "").trim()}`] };
  const head = String(headRes.stdout).trim();

  const fileCache = new Map();
  const show = (file) => {
    if (!fileCache.has(file)) {
      const r = git(["show", `${rev}:${file}`]);
      fileCache.set(file, r.status === 0 && !r.error ? { ok: true, lines: String(r.stdout).split("\n") } : { ok: false, err: `exit ${r.status} ${String(r.stderr ?? "").trim()}` });
    }
    return fileCache.get(file);
  };

  const rows = spec.rows.map((row) => {
    const frozen = treeEntry(git, rev, row.path);
    const atHead = treeEntry(git, "HEAD", row.path);
    if (!frozen.ok) failures.push(`${row.path}: ${frozen.err}`);
    else if (!frozen.oid) failures.push(`${row.path}: no blob at frozen revision`);
    if (!atHead.ok) failures.push(`${row.path}: ${atHead.err}`);
    const checks = row.citations.map((c) => {
      if (c.kind === "line") {
        const f = show(c.file);
        if (!f.ok) { failures.push(`${row.path}: cannot read ${c.file}: ${f.err}`); return { ...c, outcome: "error" }; }
        const ok = (f.lines[c.line - 1] ?? "").includes(c.needle);
        if (!ok) failures.push(`${row.path}: ${c.file}:${c.line} lacks "${c.needle}"`);
        return { ...c, outcome: ok ? "pass" : "fail" };
      }
      if (c.kind === "absent") {
        const r = git(["grep", "-n", "-I", "-E", c.pattern, rev, "--", ...c.pathspecs]);
        if (!r.error && r.status === 1 && String(r.stderr ?? "").trim() === "") return { ...c, outcome: "pass (no match)" };
        if (!r.error && r.status === 0) { failures.push(`${row.path}: expected no match for /${c.pattern}/, found ${String(r.stdout).split("\n").filter(Boolean).length}`); return { ...c, outcome: "fail" }; }
        failures.push(`${row.path}: git grep error (exit ${r.status}): ${String(r.stderr ?? "").trim()}`);
        return { ...c, outcome: "error" };
      }
      if (c.kind === "noFile") {
        const e = treeEntry(git, rev, c.path);
        if (!e.ok) { failures.push(`${row.path}: ${e.err}`); return { ...c, outcome: "error" }; }
        if (e.oid) failures.push(`${row.path}: ${c.path} exists at frozen revision`);
        return { ...c, outcome: e.oid ? "fail" : "pass (absent; successful tree lookup)" };
      }
      if (c.kind === "sameBlob") {
        const a = treeEntry(git, c.from, c.path), b = treeEntry(git, c.to, c.path);
        if (!a.ok || !b.ok) { failures.push(`${row.path}: ${(a.err ?? b.err)}`); return { ...c, outcome: "error" }; }
        const ok = !!a.oid && a.oid === b.oid;
        if (!ok) failures.push(`${row.path}: ${c.path} differs or is missing between ${c.from} and ${c.to}`);
        return { ...c, blob: a.oid, outcome: ok ? "pass" : "fail" };
      }
      failures.push(`${row.path}: unknown citation kind ${c.kind}`);
      return { ...c, outcome: "error" };
    });
    return {
      path: row.path, slice: row.slice, group: row.group, order: row.order,
      result: row.result, ownership: row.ownership,
      frozenBlob: frozen.oid ?? null, headBlob: atHead.oid ?? null,
      unchangedAtHead: !!frozen.oid && frozen.oid === atHead.oid,
      checks,
    };
  });
  return { failures, head, rev, rows };
}

// Returns the exit code. Writes the result file only when every read and citation succeeded.
export function main(argv, git, log = console) {
  const [repo, citationsPath, outDir, flag] = argv;
  if (!repo || !citationsPath || !outDir) { log.error("usage: node F2a-verify-r2.mjs <repo> <citations.json> <out dir> [--negative-control]"); return 2; }
  const raw = readFileSync(citationsPath, "utf8");
  const spec = JSON.parse(raw);
  const negative = flag === "--negative-control";
  if (negative) spec.rows[0].citations.unshift({ kind: "line", file: "AGENTS.md", line: 21, needle: "NEGATIVE-CONTROL-NEEDLE" });
  const { failures, head, rev, rows } = verify(spec, git ?? realGit(repo));
  if (failures.length) {
    log.error(`F2a verification STOPPED: ${failures.length} failure(s); nothing written.`);
    for (const f of failures) log.error(`  - ${f}`);
    return 2;
  }
  if (negative) { log.error("negative control did NOT fail: verifier is broken"); return 3; }
  const summary = {
    schema: "B-156 F2a verification v2",
    frozenRevision: rev, head,
    citationsSha256: sha256(raw),
    scriptSha256: sha256(readFileSync(fileURLToPath(import.meta.url))),
    paths: rows.length,
    citations: rows.reduce((n, r) => n + r.checks.length, 0),
    unchangedAtHead: rows.filter((r) => r.unchangedAtHead).length,
    failures: 0,
    rows,
  };
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  const out = join(outDir, OUT_NAME);
  writeFileSync(out, JSON.stringify(summary, null, 2) + "\n", { flag: "wx" });
  log.log(`F2a verification ok: ${summary.paths} paths, ${summary.citations} citations, ${summary.unchangedAtHead} unchanged at HEAD ${head.slice(0, 7)}; wrote ${out}`);
  return 0;
}

if (process.argv[1] && resolve(fileURLToPath(import.meta.url)).toLowerCase() === resolve(process.argv[1]).toLowerCase()) process.exit(main(process.argv.slice(2)));
