// `D-88` — the commit-msg gate behind `.githooks/commit-msg`.
//
// `D-82` recorded that nothing PREVENTS a lane crossing: `lane-boundary`
// reports one after the fact, and CI runs after a commit lands. This is the
// prevention half.
//
// It does NOT forbid crossings. `D-83` measured that most historical
// multi-lane commits were legitimate, so a hard block would stop authorised
// work and get disabled within a day. It requires a DECLARATION instead:
//
//     Lane-Crossing: <reason>
//
// The classification comes from `lane-boundary.mjs`'s exported `classify`, so
// the gate and the check can never disagree about what a lane is.
//
// Escape hatch, deliberately left open: `git commit --no-verify`. A gate with
// no escape is a gate people uninstall. The crossing is still reported by
// `lane-boundary` afterwards, so bypassing hides nothing.

import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { classify } from "./checks/lane-boundary.mjs";

const msgPath = process.argv[2];
if (!msgPath) {
  console.error("lane-gate: no commit message path given");
  process.exit(0); // never block on our own misuse
}

let staged = [];
try {
  staged = execSync("git diff --cached --name-only", {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  })
    .trim()
    .split("\n")
    .filter(Boolean);
} catch {
  process.exit(0); // not a git context we understand — do not block
}

if (staged.length === 0) process.exit(0);

const { byLane, label } = classify(staged);
if (byLane.size <= 1) process.exit(0);

let message = "";
try {
  message = readFileSync(msgPath, "utf8");
} catch {
  process.exit(0);
}

// Ignore comment lines git appends to the template.
const body = message
  .split("\n")
  .filter((l) => !l.startsWith("#"))
  .join("\n");

if (/^\s*Lane-Crossing:\s*\S+/m.test(body)) {
  const lanes = [...byLane.keys()].sort().join("+");
  console.error(`lane-gate: crossing ${lanes} declared — allowed.`);
  process.exit(0);
}

const named = [...byLane.keys()].sort().map((l) => `${l} (${label(l)})`).join(" + ");
console.error("");
console.error(`  lane-gate: this commit spans lanes ${named} — a crossing under \`D-75\`.`);
for (const [lane, files] of [...byLane.entries()].sort()) {
  console.error(`      Lane ${lane}: ${files.slice(0, 4).join(", ")}${files.length > 4 ? ` …and ${files.length - 4} more` : ""}`);
}
console.error("");
console.error("  Crossings are not forbidden — most recorded ones were legitimate.");
console.error("  Do ONE of:");
console.error("    * split the commit so each touches one lane, or");
console.error("    * add a trailer saying why:   Lane-Crossing: <reason>");
console.error("");
console.error("  `git commit --no-verify` bypasses this. `lane-boundary` still reports");
console.error("  the crossing afterwards, so bypassing hides nothing.");
console.error("");
process.exit(1);
