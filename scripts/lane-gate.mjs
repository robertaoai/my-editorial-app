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
//
// `D-105` — WHAT COUNTS AS A TRAILER IS GIT'S DEFINITION, NOT A REGEX.
//
// As first written this gate accepted `Lane-Crossing:` ANYWHERE in the message
// body, using `/^\s*Lane-Crossing:\s*\S+/m`. **Git's own trailer parser reads
// only the LAST paragraph**, so a declaration followed by a blank line and a
// `Co-Authored-By:` block is not a trailer at all:
//
//     $ git log -1 --format='%(trailers:key=Lane-Crossing)' d6d406a
//     (empty)
//
// **Every crossing declared since `D-88` installed this gate had that shape** —
// including the commit that installed it. `git log --grep` found three; git's
// trailer parser found none. **The gate accepted a declaration that no audit
// tool can find**, which is the reporting half of `D-88` failing silently while
// the blocking half worked.
//
// So the check is now git's: `git interpret-trailers --parse` produces exactly
// the trailer block git itself would, and the gate reads that. **The gate and
// every downstream tool now agree by construction rather than by coincidence.**

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

// Ask GIT what the trailers are. Falling back to the whole body would restore
// the defect this replaced, so a parse failure declines to confirm instead.
let trailers = "";
try {
  trailers = execSync(`git interpret-trailers --parse "${msgPath}"`, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
} catch {
  trailers = "";
}

const declared = /^Lane-Crossing:\s*\S+/m.test(trailers);

// Declared somewhere in the body but NOT in the trailer block — the `d6d406a`
// shape. Named specifically, because "add a trailer" is unhelpful advice to
// someone who believes they already did.
const bodyOnly =
  !declared &&
  /^\s*Lane-Crossing:\s*\S+/m.test(
    message.split("\n").filter((l) => !l.startsWith("#")).join("\n"),
  );

if (declared) {
  const lanes = [...byLane.keys()].sort().join("+");
  console.error(`lane-gate: crossing ${lanes} declared — allowed.`);
  process.exit(0);
}

const named = [...byLane.keys()].sort().map((l) => `${l} (${label(l)})`).join(" + ");
console.error("");
if (bodyOnly) {
  console.error("  lane-gate: a `Lane-Crossing:` line is present but it is NOT in the trailer block.");
  console.error("  Git reads only the LAST paragraph as trailers, so this declaration is invisible to");
  console.error("  `git log --format='%(trailers)'` and to every audit built on it (`D-105`).");
  console.error("");
  console.error("  Fix: move it next to `Co-Authored-By:` with NO blank line between them.");
  console.error("");
}
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
