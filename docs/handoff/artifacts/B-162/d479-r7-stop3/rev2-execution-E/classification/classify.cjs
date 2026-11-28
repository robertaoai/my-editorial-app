// Layer 4 classification draft (read-only): every `V1-SM0[56]` hit at HEAD, bucketed.
"use strict";
const cp = require("child_process"), fs = require("fs"), path = require("path");
const [REPO, WORK, OUTJSON] = process.argv.slice(2);
const env = { ...process.env, GIT_OBJECT_DIRECTORY: path.join(WORK, "objects"), GIT_ALTERNATE_OBJECT_DIRECTORIES: path.join(REPO, ".git", "objects") };
delete env.GIT_INDEX_FILE;
const git = (a) => cp.execFileSync("git", ["-C", REPO, ...a], { env, encoding: "utf8", maxBuffer: 1 << 28 });
const BASE = "0b558d2a51f17eff755dfd7fba51bed37548f9ae", FINAL = "1fcc621e265f2587a2dd2741db8476fe4f99afd8";
const hits = git(["grep", "-n", "-E", "V1-SM0[56]", BASE, "--", "docs", "scripts", ".github", ":!docs/handoff", ":!docs/journal"]).trim().split("\n")
  .map((s) => { const m = s.match(/^[0-9a-f]+:([^:]+):(\d+):(.*)$/); return { file: m[1], line: +m[2], text: m[3] }; });
// Old-side line numbers removed or rewritten by 2a+2b.
const changed = {};
for (const f of [...new Set(hits.map((h) => h.file))]) {
  const d = git(["diff", "-U0", "--no-renames", BASE, FINAL, "--", f]);
  const set = new Set();
  for (const m of d.matchAll(/^@@ -(\d+)(?:,(\d+))? /gm)) { const s = +m[1], n = m[2] === undefined ? 1 : +m[2]; for (let i = 0; i < n; i++) set.add(s + i); }
  changed[f] = set;
}
const DATED_CLASS = [/^docs\/v1\/work-packets\/SETUP-SPIKE-000\//, /^docs\/v1\/work-packets\/V1\/receipts\//, /^docs\/v1\/evidence\//, /^docs\/templates\/dor-dod-validation\/v1\.md$/];
const READING_RULE_FILES = { "docs/v1/V1-BUILD-SPEC.md": "Build Spec reading rule (2a)", "docs/v1/work-packets/V1/V1-SM06.md": "SM06 re-scope reading rule (2a)", "docs/v1/work-packets/V1/V1-SM05.md": "moved to V1-SM07.md; move-note reading rule (2a)" };
const out = [];
for (const h of hits) {
  let cls, why;
  if (changed[h.file] && changed[h.file].has(h.line)) { cls = "L"; why = "line rewritten by 2a/2b"; }
  else if (DATED_CLASS.some((r) => r.test(h.file))) { cls = "D"; why = "item 6 not-edited record class"; }
  else if (h.file.startsWith("docs/graph-fragments/")) { cls = "H"; why = "graph fragment; Layer 2 forbids edits; D-479 Follow row under D-425"; }
  else if (h.file === "docs/v1/V1-DECISION-REGISTER.md") { cls = "D"; why = "Register decision record (dated entry)"; }
  else if (READING_RULE_FILES[h.file]) { cls = "D"; why = READING_RULE_FILES[h.file]; }
  else { cls = "?"; why = "manual"; }
  out.push({ ...h, cls, why });
}
fs.writeFileSync(OUTJSON, JSON.stringify(out, null, 1));
const tally = {}; for (const o of out) tally[o.cls] = (tally[o.cls] || 0) + 1;
console.log("hits", out.length, JSON.stringify(tally));
for (const o of out.filter((x) => x.cls === "?")) console.log(`${o.file}:${o.line}: ${o.text.slice(0, 230)}`);
