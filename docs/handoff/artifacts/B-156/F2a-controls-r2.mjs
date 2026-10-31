// B-156 F2a revision 2 — positive and negative controls for F2a-verify-r2.mjs (F2a-R1 acceptance test).
//
//   node F2a-controls-r2.mjs <repo> <citations.json> <scratch dir> <summary out file>
//
// Each arm calls the verifier's main() with the real Git runner or with one injected Git failure, writing
// into its own new subdirectory of <scratch dir>. Expected: the valid arm exits 0 and writes one file;
// every negative arm exits nonzero and writes NO file. The summary records every arm's exit code, file
// count and captured messages. This harness exits 0 only when every arm meets its expectation.
import { mkdirSync, readdirSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { main, realGit } from "./F2a-verify-r2.mjs";

const [repo, citations, scratch, summaryOut] = process.argv.slice(2);
if (!repo || !citations || !scratch || !summaryOut) {
  console.error("usage: node F2a-controls-r2.mjs <repo> <citations.json> <scratch dir> <summary out file>");
  process.exit(2);
}
if (existsSync(scratch) && readdirSync(scratch).length) { console.error(`scratch dir not empty: ${scratch}`); process.exit(2); }

const real = realGit(repo);
const fail = (stderr) => ({ status: 128, stdout: "", stderr });
// Injects one failure into the first Git call that `match` selects; all other calls are real.
const inject = (match, result) => (args) => (match(args) ? result : real(args));

const arms = [
  { name: "valid", expect: 0, git: real },
  { name: "false-citation", expect: 2, git: real, flag: "--negative-control" },
  { name: "object-read-error (noFile tree lookup; R1 counterexample)", expect: 2,
    git: inject((a) => a[0] === "ls-tree" && a.includes("scripts/checks/shared-core-hash.mjs"), fail("fatal: unable to read tree (injected)")) },
  { name: "head-read-error", expect: 2,
    git: inject((a) => a[0] === "rev-parse" && a.includes("HEAD^{commit}"), fail("fatal: bad object HEAD (injected)")) },
  { name: "head-blob-read-error", expect: 2,
    git: inject((a) => a[0] === "ls-tree" && a[1] === "HEAD" && a.includes("middleware.ts"), fail("fatal: unable to read tree (injected)")) },
  { name: "frozen-blob-read-error", expect: 2,
    git: inject((a) => a[0] === "ls-tree" && a[1] !== "HEAD" && a.includes(".env.example"), fail("fatal: unable to read tree (injected)")) },
  { name: "file-read-error", expect: 2,
    git: inject((a) => a[0] === "show" && String(a[1]).endsWith(":docs/Modular_PRD.md"), fail("fatal: unable to read blob (injected)")) },
  { name: "grep-error", expect: 2,
    git: inject((a) => a[0] === "grep" && a.includes("OnlyAIApp|\\.onlyaiapp"), { status: 2, stdout: "", stderr: "fatal: grep failed (injected)" }) },
  { name: "spawn-error", expect: 2,
    git: inject((a) => a[0] === "grep" && a.includes("api/health"), { status: null, stdout: "", stderr: "", error: new Error("spawn failed (injected)") }) },
];

const results = arms.map((arm, i) => {
  const out = join(scratch, `arm-${i}`);
  mkdirSync(out, { recursive: true });
  const msgs = [];
  const log = { log: (m) => msgs.push(m), error: (m) => msgs.push(m) };
  const code = main([repo, citations, out, arm.flag].filter(Boolean), arm.git, log);
  const files = readdirSync(out);
  const ok = arm.expect === 0 ? code === 0 && files.length === 1 : code !== 0 && files.length === 0;
  return { arm: arm.name, expectedExit: arm.expect, exit: code, filesWritten: files.length, ok, messages: msgs };
});

const summary = { schema: "B-156 F2a controls v2", arms: results.length, passed: results.filter((r) => r.ok).length, results };
writeFileSync(summaryOut, JSON.stringify(summary, null, 2) + "\n", { flag: "wx" });
for (const r of results) console.log(`${r.ok ? "ok  " : "FAIL"} ${r.arm}: exit ${r.exit}, files ${r.filesWritten}`);
process.exit(summary.passed === summary.arms ? 0 : 1);
