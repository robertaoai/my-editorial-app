import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
const R = "C:/robertaoai/my-editorial-app";
for (const f of ["docs/Modular_PRD.md","docs/source/README.md","docs/governance/requirements-traceability-map.md"]) {
  const s = readFileSync(`${R}/${f}`, "utf8");
  console.log(f, "crlf", (s.match(/\r\n/g)||[]).length, "lf", (s.match(/\n/g)||[]).length);
}
let g = ""; try { g = execFileSync("git", ["-C", R, "grep", "-n", "D-439", "--", "."], { encoding: "utf8" }); } catch {}
console.log("D-439 lines:\n" + g.split("\n").map(l => l.slice(0, 170)).join("\n"));
const files = execFileSync("git", ["-C", R, "ls-files", "docs"], { encoding: "utf8" }).split("\n").filter(p => p.endsWith(".md") && !p.startsWith("docs/handoff/") && !p.startsWith("docs/graph-fragments/"));
const S = ["legal/compliance policy — owner TBD", "**No obligation implied; this blocks nothing.**", "## 8. Maintenance", "| Sprint DoD written |", "That limitation is recorded and accepted. It blocks nothing. Logged as **FB-07**, reclassified from Gap to **Recommendation**.", "- [ ] **Business Charter supplied** (Entry 006 §7, Entry 007 §3)", "| `DEP-09` | **Business Charter and exit strategy** |", "| **Last Updated** | 2026-09-27 (`D-271`) |", "Neither blocks Phase 0; both are required", "(PRD, ARCHITECTURE, DATA_MODEL, …) — the repo's own plan pack. **Not a governing"];
for (const s of S) { const hits = files.map(f => [f, readFileSync(`${R}/${f}`, "utf8").split(s).length - 1]).filter(x => x[1]); console.log(JSON.stringify(s.slice(0,50)), JSON.stringify(hits)); }
