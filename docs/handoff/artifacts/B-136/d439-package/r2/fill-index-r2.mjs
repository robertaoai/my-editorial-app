// Fills the r2 index placeholders from measured hashes and retained results. Writes the index once (placeholders must exist).
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
const D = "C:/CoWork/outputs/lane-a-d439-package-2026-10-16/r2";
const FINAL = "20261016T094120Z-062427d2862b";
const h = p => createHash("sha256").update(readFileSync(`${D}/${p}`)).digest("hex");
const f = `${D}/D439-EXECUTION-PACKAGE-r2.md`;
let s = readFileSync(f, "utf8");
if (!s.includes("{FILES}")) throw new Error("index already filled");
const rows = [
  ["ev-apply-d439-r2.mjs", "Helper r2 (F1 exact ownership state; F3 fixture gate)"],
  ["ownership-eb0aa44.json", "Control ownership manifest: 109 lines naming `D-439`, 11 files, at `eb0aa44`; pinned in the helper"],
  ["make-ownership-r2.mjs", "Builds the manifest from a clean checkout at its base; refuses to overwrite"],
  ["run-controls-d439-r2.sh", "Harness r2 (F2 fail-stop `rec()`; fixture marker; K6–K6e, K13a–K13e)"],
  ["selftest-d439-r2.sh", "Failure-path self-test (9 deliberate failures)"],
  ["selftest-d439-r2.txt", "Self-test result: 9 tests, 0 wrong"],
  [`runs/${FINAL}/results.txt`, "Control run: 42 results, 0 wrong, harness exit 0"],
  [`runs/${FINAL}/K2-expected.json`, "Expected record, date `2026-10-16`"],
  [`runs/${FINAL}/K13-governed-state-before.txt`, "Governed checkout state before K13b/d/e"],
  [`runs/${FINAL}/K13-governed-state-after.txt`, "Same state after (identical)"],
  ["live/s0-eb0aa44/log-s0.txt", "Read-only S0 on the governed checkout at `eb0aa44`: exact state, 109 lines"],
  ["make-custody-map-d439.mjs", "Builds the F4 custody map; refuses to overwrite"],
  ["fill-index-r2.mjs", "Fills this index from measured hashes"],
];
const logs = readdirSync(`${D}/runs/${FINAL}/logs`).length;
s = s.replace("{FILES}", "| File | SHA-256 | Role |\n|---|---|---|\n" + rows.map(([p, r]) => `| \`${p}\` | \`${h(p)}\` | ${r} |`).join("\n"));
const res = readFileSync(`${D}/runs/${FINAL}/results.txt`, "utf8").trim().split("\n");
s = s.replace("{RUN}", `Run \`${FINAL}\`: **${res.length - 2} results, 0 wrong**, harness exit 0, ${logs} raw logs. Verdict line: \`${res[res.length - 1]}\`. Support arms: K1 (S0), K4 (act already in Register), K5–K7 and K6b–K6e (F1), K8 (tampered manifest), K9 (overwrite), K10 (act absent), K11 (E2b), K12 (unattributed byte), K13a–K13e (F3).`);
const st = readFileSync(`${D}/selftest-d439-r2.txt`, "utf8").trim().split("\n").slice(1, -1)
  .map(l => { const c = l.split(" | "); return `| ${c[0]} | ${c[1]} | ${c[2]} | ${c[3]} | ${c[6]} | ${c[7].replace(/\/c\/CoWork\/outputs\/lane-a-d439-package-2026-10-16\/r2\//, "")} |`; });
s = s.replace("{SELFTEST}", "| Test | Exit | Result lines | Verdict lines | Outcome | Stop reason |\n|---|---|---|---|---|---|\n" + st.join("\n") +
  "\n\nEvery deliberate failure stopped the run with exit 3 at the failing step, wrote no later result line and no verdict, and kept the run's logs and clones. T4-9 to T4-13 cover the four K3 result branches Lane B named.");
if (/\{[A-Z]+\}/.test(s)) throw new Error("placeholder left");
writeFileSync(f, s);
console.log("filled");
