// Read-only inventory of the evidence sets proposed for the manual evidence backup.
// Usage: node backup-inventory.cjs <D3>
"use strict";
const fs = require("fs"), path = require("path"), c = require("crypto");
const D3 = process.argv[2];
const sets = [
  ["rev2-execution-E", "C:/CoWork/outputs/lane-a-d479-2a-2b-r7-30db8d51140c0e46700f96bb9f018e6e40b93cbc"],
  ["rev2-package", "C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev2"],
  ["rev2-verification", "C:/CoWork/outputs/lane-a-r7-rev2-verification-30db8d51140c0e46700f96bb9f018e6e40b93cbc"],
  ["rev3-stopped-build", "C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev3"],
  ["prereq-drafts-19", "C:/CoWork/outputs/D-479-r7-prereq-drafts-30db8d51140c0e46700f96bb9f018e6e40b93cbc"],
  ["prereq-drafts-21", "C:/CoWork/outputs/D-479-r7-prereq-drafts-21-30db8d51140c0e46700f96bb9f018e6e40b93cbc"],
  ["r1-append", D3],
];
// Excluded: the isolated clone, any graph-store copy, scratch tmp, and this folder's own proposal and seal.
const skip = (set, rel) =>
  /(^|\/)snapshot\/clone(\/|$)/.test(rel) || /(^|\/)tmp(\/|$)/.test(rel) || /(^|\/)\.graphify(\/|$)/.test(rel) ||
  (set === "r1-append" && ["BACKUP-PROPOSAL.md", "backup-inventory.json", "SHA256SUMS"].includes(rel));
const out = []; let tot = 0, n = 0;
for (const [name, root] of sets) {
  const files = [];
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name); const rel = path.relative(root, p).split(path.sep).join("/");
      if (skip(name, rel)) continue;
      if (e.isDirectory()) walk(p);
      else { const b = fs.readFileSync(p); files.push({ path: rel, bytes: b.length, sha256: c.createHash("sha256").update(b).digest("hex") }); }
    }
  })(root);
  files.sort((a, b) => a.path.localeCompare(b.path));
  const bytes = files.reduce((s, f) => s + f.bytes, 0); tot += bytes; n += files.length;
  out.push({ set: name, source: root, proposedCustody: `docs/handoff/artifacts/B-162/d479-r7-stop3/${name}/`, files: files.length, bytes, list: files });
}
const transcriptCopies = out.flatMap((s) => s.list.filter((f) => f.path.endsWith(".jsonl")).map((f) => `${s.set}/${f.path}`));
fs.writeFileSync(`${D3}/backup-inventory.json`, JSON.stringify({ totalFiles: n, totalBytes: tot, transcriptCopies, sets: out }, null, 1) + "\n");
console.log(JSON.stringify({ totalFiles: n, totalBytes: tot, sets: out.map((s) => [s.set, s.files, s.bytes]), transcriptCopies }, null, 1));
