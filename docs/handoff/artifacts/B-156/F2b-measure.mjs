// B-156 F2b — measures the governing-source links of the 62 F2b paths at the frozen revision.
// Reads Git objects only; spawns no shell. Every Git read must succeed (the F2a-R1 rule); any failed
// read stops with exit 2 before a file is written.
//
//   node F2b-measure.mjs <repo> <inventory tsv> <out dir>
//
// The F2b paths are derived, not listed: every G1 row with applicability "included" in the accepted
// F1 revision-2 inventory, minus the 10 G1 paths assigned to F2a. The script refuses unless that gives 62.
//
// Measured per path (these are literal observations, not semantic findings):
//   inventoryRow    line numbers in V1-ARTIFACT-INVENTORY.md whose first cell is exactly the path
//   inventoryDs     decision IDs named in those rows
//   registerHits    count of V1-DECISION-REGISTER.md lines holding the full path, and the first line number
//   buildSpecHits   count of V1-BUILD-SPEC.md lines holding the full path
//   invokedBy       which runners name the path or its file name: package.json scripts, check-consistency.mjs,
//                   ci.yml, .githooks/commit-msg, guarded-rebuild.mjs, scripts/fixtures/suites.mjs
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const REV = "1640ff7bc1b7d1e70ab6a421ced8a054dafda993";
const F2A_G1 = [".onlyaiapp", "app/api/health/route.ts", "app/globals.css", "app/layout.tsx", "lib/supabase/client.ts",
  "supabase/.gitignore", "scripts/checks/terminal-return.mjs", "supabase/tests/database/s1_transition_enforcement.test.sql",
  "middleware.ts", ".env.example"];
const RUNNERS = ["package.json", "scripts/check-consistency.mjs", ".github/workflows/ci.yml", ".githooks/commit-msg",
  "scripts/graphify/guarded-rebuild.mjs", "scripts/fixtures/suites.mjs"];

const [repo, tsvPath, outDir] = process.argv.slice(2);
if (!repo || !tsvPath || !outDir) { console.error("usage: node F2b-measure.mjs <repo> <inventory tsv> <out dir>"); process.exit(2); }
const failures = [];
const git = (args) => spawnSync("git", ["-C", repo, ...args], { encoding: "utf8", maxBuffer: 1 << 28 });
const must = (args, what) => {
  const r = git(args);
  if (r.error || r.status !== 0) { failures.push(`${what}: exit ${r.status} ${String(r.stderr ?? "").trim()}`); return null; }
  return String(r.stdout);
};
const sha256 = (s) => createHash("sha256").update(s).digest("hex");

const head = (must(["rev-parse", "--verify", "HEAD^{commit}"], "HEAD") ?? "").trim();
must(["rev-parse", "--verify", `${REV}^{commit}`], "frozen revision");
const treeOid = (rev, p) => {
  const out = must(["ls-tree", rev, "--", p], `ls-tree ${rev} ${p}`);
  if (out === null) return undefined;
  const line = out.split("\n").find((l) => l.endsWith(`\t${p}`));
  return line ? line.split(/\s+/)[2] : null;
};
const fileLines = (p) => (must(["show", `${REV}:${p}`], `show ${p}`) ?? "").split("\n");

const tsvRaw = readFileSync(tsvPath, "utf8");
const [hdr, ...body] = tsvRaw.trimEnd().split("\n");
const cols = hdr.split("\t");
const col = (row, name) => row[cols.indexOf(name)];
const paths = body.map((l) => l.split("\t"))
  .filter((r) => col(r, "group") === "G1" && col(r, "applicability") === "included" && !F2A_G1.includes(col(r, "path")))
  .map((r) => ({ path: col(r, "path"), lane: col(r, "lane"), proposedRole: col(r, "proposedRole"), phaseManifestRow: col(r, "phaseManifestRow") }));
if (paths.length !== 62) { console.error(`expected 62 F2b paths, derived ${paths.length}; nothing written`); process.exit(2); }

const inv = fileLines("docs/v1/V1-ARTIFACT-INVENTORY.md");
const reg = fileLines("docs/v1/V1-DECISION-REGISTER.md");
const spec = fileLines("docs/v1/V1-BUILD-SPEC.md");
const runners = Object.fromEntries(RUNNERS.map((r) => [r, fileLines(r).join("\n")]));

const rows = paths.map((p) => {
  const frozenBlob = treeOid(REV, p.path), headBlob = treeOid("HEAD", p.path);
  if (frozenBlob === null) failures.push(`${p.path}: no blob at frozen revision`);
  const invRows = inv.map((l, i) => [l, i + 1]).filter(([l]) => l.startsWith(`| \`${p.path}\``));
  const regHits = reg.map((l, i) => [l, i + 1]).filter(([l]) => l.includes(p.path));
  const name = basename(p.path);
  const invokedBy = RUNNERS.filter((r) => r !== p.path && (runners[r].includes(p.path) || runners[r].includes(name)));
  return {
    ...p,
    frozenBlob, headBlob, unchangedAtHead: !!frozenBlob && frozenBlob === headBlob,
    inventoryRow: invRows.map(([, n]) => n),
    inventoryDs: [...new Set(invRows.flatMap(([l]) => l.match(/D-\d+/g) ?? []))],
    registerHits: regHits.length, registerFirst: regHits[0]?.[1] ?? null,
    buildSpecHits: spec.filter((l) => l.includes(p.path)).length,
    invokedBy,
  };
});

if (failures.length) { console.error(`F2b measurement STOPPED: ${failures.length} failure(s); nothing written.`); failures.forEach((f) => console.error(`  - ${f}`)); process.exit(2); }

const summary = {
  schema: "B-156 F2b measurement v1", frozenRevision: REV, head,
  inventorySha256: sha256(tsvRaw), scriptSha256: sha256(readFileSync(fileURLToPath(import.meta.url))),
  paths: rows.length, unchangedAtHead: rows.filter((r) => r.unchangedAtHead).length,
  withInventoryRow: rows.filter((r) => r.inventoryRow.length).length,
  invokedByRunner: rows.filter((r) => r.invokedBy.length).length,
  rows,
};
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const out = join(outDir, "F2b-measure-1640ff7.json");
writeFileSync(out, JSON.stringify(summary, null, 2) + "\n", { flag: "wx" });
console.log(`F2b measurement ok: ${summary.paths} paths, ${summary.unchangedAtHead} unchanged at HEAD ${head.slice(0, 7)}, ${summary.withInventoryRow} with an inventory row, ${summary.invokedByRunner} named by a runner; wrote ${out}`);
