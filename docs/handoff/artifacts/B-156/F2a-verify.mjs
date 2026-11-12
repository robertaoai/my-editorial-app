// B-156 F2a — re-checks every citation in F2a-citations-1640ff7.json at the frozen revision.
// Reads Git objects only (git show, git grep, git rev-parse, git cat-file); spawns no shell.
//
//   node docs/handoff/artifacts/B-156/F2a-verify.mjs <repo> <citations.json> <out dir> [--negative-control]
//
// Each row also binds its path: the blob at the frozen revision, and whether the blob at the
// repository HEAD is the same. Outcomes: a "line" citation passes only when the stated line holds
// the needle; an "absent" citation passes only on git grep's no-match result (exit 1, empty
// stderr); any other Git result is an error. Any failure or error stops with exit 2 BEFORE the
// output file is written. --negative-control alters one needle in memory and requires exit 2.
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const [repo, citationsPath, outDir, flag] = process.argv.slice(2);
if (!repo || !citationsPath || !outDir) {
  console.error("usage: node F2a-verify.mjs <repo> <citations.json> <out dir> [--negative-control]");
  process.exit(2);
}
const negative = flag === "--negative-control";
const git = (args) => spawnSync("git", ["-C", repo, ...args], { encoding: "utf8", maxBuffer: 1 << 28 });
const sha256 = (s) => createHash("sha256").update(s).digest("hex");

const raw = readFileSync(citationsPath, "utf8");
const spec = JSON.parse(raw);
if (negative) spec.rows[0].citations.unshift({ kind: "line", file: "AGENTS.md", line: 21, needle: "NEGATIVE-CONTROL-NEEDLE" });

const rev = spec.frozenRevision;
const revCheck = git(["rev-parse", "--verify", `${rev}^{commit}`]);
if (revCheck.status !== 0) { console.error(`frozen revision not found: ${rev}`); process.exit(2); }
const head = git(["rev-parse", "HEAD"]).stdout.trim();

const fileCache = new Map();
const show = (file) => {
  if (!fileCache.has(file)) {
    const r = git(["show", `${rev}:${file}`]);
    fileCache.set(file, r.status === 0 ? { ok: true, lines: r.stdout.split("\n") } : { ok: false, err: r.stderr.trim() });
  }
  return fileCache.get(file);
};

const failures = [];
const rows = spec.rows.map((row) => {
  const blob = git(["rev-parse", `${rev}:${row.path}`]);
  const headBlob = git(["rev-parse", `HEAD:${row.path}`]);
  if (blob.status !== 0) failures.push(`${row.path}: no blob at frozen revision`);
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
      if (r.status === 1 && r.stderr.trim() === "") return { ...c, outcome: "pass (no match)" };
      if (r.status === 0) { failures.push(`${row.path}: expected no match for /${c.pattern}/, found ${r.stdout.split("\n").filter(Boolean).length}`); return { ...c, outcome: "fail" }; }
      failures.push(`${row.path}: git grep error (exit ${r.status}): ${r.stderr.trim()}`);
      return { ...c, outcome: "error" };
    }
    if (c.kind === "noFile") {
      const r = git(["cat-file", "-e", `${rev}:${c.path}`]);
      if (r.status === 0) failures.push(`${row.path}: ${c.path} exists at frozen revision`);
      return { ...c, outcome: r.status === 0 ? "fail" : "pass (absent)" };
    }
    failures.push(`${row.path}: unknown citation kind ${c.kind}`);
    return { ...c, outcome: "error" };
  });
  return {
    path: row.path, slice: row.slice, group: row.group, order: row.order,
    result: row.result, ownership: row.ownership,
    frozenBlob: blob.stdout.trim(), headBlob: headBlob.stdout.trim(),
    unchangedAtHead: blob.stdout.trim() === headBlob.stdout.trim(),
    checks,
  };
});

if (failures.length) {
  console.error(`F2a verification STOPPED: ${failures.length} failure(s); nothing written.`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(2);
}
if (negative) { console.error("negative control did NOT fail: verifier is broken"); process.exit(3); }

const summary = {
  schema: "B-156 F2a verification v1",
  frozenRevision: rev,
  head,
  citationsSha256: sha256(raw),
  scriptSha256: sha256(readFileSync(new URL(import.meta.url))),
  paths: rows.length,
  citations: rows.reduce((n, r) => n + r.checks.length, 0),
  unchangedAtHead: rows.filter((r) => r.unchangedAtHead).length,
  failures: 0,
  rows,
};
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const out = join(outDir, "F2a-result-1640ff7.json");
writeFileSync(out, JSON.stringify(summary, null, 2) + "\n", { flag: "wx" });
console.log(`F2a verification ok: ${summary.paths} paths, ${summary.citations} citations, ${summary.unchangedAtHead} unchanged at HEAD ${head.slice(0, 7)}; wrote ${out}`);
