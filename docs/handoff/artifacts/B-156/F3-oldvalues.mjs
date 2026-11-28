// B-156 F3 revision 2 — binds every F3 repair to its FULL old value at a named revision (answers PKT-R1).
// The revision is a parameter, so the same targets can be re-bound at the final source before any application
// (PKT-R3). Reads Git objects only; spawns no shell; every Git read must succeed; any failure stops with exit 2
// before a file is written.
//
//   node F3-oldvalues.mjs <repo> <revision> <targets.json> <out dir>
//
// Target kinds:
//   lines  {id, path, from, to}           the full text of lines from..to (1-based, inclusive) and its SHA-256
//   field  {id, path, node, field}        the full value of one node field in a curated fragment and its SHA-256
//   attr   {id, path, attribute}          `git check-attr` is NOT used (it reads the work tree); instead the file
//                                         itself is bound with kind "lines" — kept here only to refuse misuse
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const [repo, rev, targetsPath, outDir] = process.argv.slice(2);
if (!repo || !rev || !targetsPath || !outDir) { console.error("usage: node F3-oldvalues.mjs <repo> <revision> <targets.json> <out dir>"); process.exit(2); }
const sha = (s) => createHash("sha256").update(s).digest("hex");
const failures = [];
const git = (args) => spawnSync("git", ["-C", repo, ...args], { encoding: "utf8", maxBuffer: 1 << 28 });
const commit = git(["rev-parse", "--verify", `${rev}^{commit}`]);
if (commit.error || commit.status !== 0) { console.error(`revision unreadable: ${rev}; nothing written`); process.exit(2); }
const full = String(commit.stdout).trim();
const cache = new Map();
const show = (p) => {
  if (!cache.has(p)) {
    const r = git(["show", `${full}:${p}`]);
    cache.set(p, r.error || r.status !== 0 ? null : String(r.stdout));
    if (cache.get(p) === null) failures.push(`${p}: unreadable at ${full.slice(0, 7)} (exit ${r.status})`);
  }
  return cache.get(p);
};

const targetsRaw = readFileSync(targetsPath, "utf8");
const targets = JSON.parse(targetsRaw).targets;
const out = targets.map((t) => {
  const text = show(t.path);
  if (text === null) return { ...t, outcome: "error" };
  if (t.kind === "lines") {
    const lines = text.split("\n");
    if (t.from < 1 || t.to > lines.length || t.from > t.to) { failures.push(`${t.id}: line range ${t.from}-${t.to} outside ${t.path}`); return { ...t, outcome: "error" }; }
    const value = lines.slice(t.from - 1, t.to).join("\n");
    return { ...t, value, sha256: sha(value), outcome: "bound" };
  }
  if (t.kind === "field") {
    let j; try { j = JSON.parse(text); } catch { failures.push(`${t.id}: ${t.path} is not JSON`); return { ...t, outcome: "error" }; }
    const nodes = (j.nodes ?? []).filter((n) => n.id === t.node);
    if (nodes.length !== 1) { failures.push(`${t.id}: node ${t.node} found ${nodes.length} times in ${t.path}`); return { ...t, outcome: "error" }; }
    const value = nodes[0][t.field];
    if (typeof value !== "string") { failures.push(`${t.id}: ${t.node}.${t.field} is not a string`); return { ...t, outcome: "error" }; }
    return { ...t, value, sha256: sha(value), outcome: "bound" };
  }
  failures.push(`${t.id}: unknown kind ${t.kind}`);
  return { ...t, outcome: "error" };
});
if (failures.length) { console.error(`F3 old-value binding STOPPED: ${failures.length} failure(s); nothing written.`); failures.forEach((f) => console.error(`  - ${f}`)); process.exit(2); }

const summary = { schema: "B-156 F3 old values v1", revision: full, targetsSha256: sha(targetsRaw),
  scriptSha256: sha(readFileSync(fileURLToPath(import.meta.url))), targets: out.length, values: out };
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const file = join(outDir, `F3-oldvalues-${full.slice(0, 7)}.json`);
writeFileSync(file, JSON.stringify(summary, null, 2) + "\n", { flag: "wx" });
console.log(`F3 old values bound: ${out.length} targets at ${full.slice(0, 7)}; wrote ${file}`);
