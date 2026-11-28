// B-156 F2b — re-checks every F2b citation at the frozen revision with the ACCEPTED F2a revision-2 rules.
// It imports verify() from F2a-verify-r2.mjs unchanged (Verified by Lane B at b87a2d0), so every Git read
// must succeed and absence needs a successful tree lookup. Any failure stops with exit 2 before a write.
//
//   node F2b-verify.mjs <repo> <citations.json> <out dir> [--negative-control]
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { verify, realGit } from "./F2a-verify-r2.mjs";

const sha256 = (s) => createHash("sha256").update(s).digest("hex");
const [repo, citationsPath, outDir, flag] = process.argv.slice(2);
if (!repo || !citationsPath || !outDir) { console.error("usage: node F2b-verify.mjs <repo> <citations.json> <out dir> [--negative-control]"); process.exit(2); }
const raw = readFileSync(citationsPath, "utf8");
const spec = JSON.parse(raw);
if (flag === "--negative-control") spec.rows[0].citations.unshift({ kind: "line", file: "AGENTS.md", line: 21, needle: "NEGATIVE-CONTROL-NEEDLE" });
const { failures, head, rev, rows } = verify(spec, realGit(repo));
if (failures.length) {
  console.error(`F2b verification STOPPED: ${failures.length} failure(s); nothing written.`);
  failures.forEach((f) => console.error(`  - ${f}`));
  process.exit(2);
}
if (flag === "--negative-control") { console.error("negative control did NOT fail: verifier is broken"); process.exit(3); }
const byResult = {};
for (const r of spec.rows) byResult[r.result] = (byResult[r.result] ?? 0) + 1;
const summary = {
  schema: "B-156 F2b verification v1", frozenRevision: rev, head,
  citationsSha256: sha256(raw),
  scriptSha256: sha256(readFileSync(fileURLToPath(import.meta.url))),
  verifierSha256: sha256(readFileSync(fileURLToPath(new URL("./F2a-verify-r2.mjs", import.meta.url)))),
  paths: rows.length, citations: rows.reduce((n, r) => n + r.checks.length, 0),
  unchangedAtHead: rows.filter((r) => r.unchangedAtHead).length, failures: 0, byResult, rows,
};
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const out = join(outDir, "F2b-result-1640ff7.json");
writeFileSync(out, JSON.stringify(summary, null, 2) + "\n", { flag: "wx" });
console.log(`F2b verification ok: ${summary.paths} paths, ${summary.citations} citations, ${summary.unchangedAtHead} unchanged at HEAD ${head.slice(0, 7)}; wrote ${out}`);
