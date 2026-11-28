// Bind source HEAD, index listing, status and every regular file of the live graph store.
// Usage: node bind.cjs <repo> <graphStore> <out.json>
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process"), crypto = require("crypto");
const [REPO, GS, OUT] = process.argv.slice(2);
const git = (a) => cp.execFileSync("git", ["-C", REPO, ...a], { encoding: "utf8", maxBuffer: 1 << 28 });
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isSymbolicLink()) { files.push({ path: path.relative(GS, p).replace(/\\/g, "/"), symlink: true }); continue; }
    if (e.isDirectory()) walk(p);
    else if (e.isFile()) { const b = fs.readFileSync(p); files.push({ path: path.relative(GS, p).replace(/\\/g, "/"), bytes: b.length, sha256: crypto.createHash("sha256").update(b).digest("hex") }); }
  }
})(GS);
files.sort((a, b) => a.path.localeCompare(b.path));
const lsFiles = git(["ls-files", "-s"]);
const rec = {
  observedAtUtc: new Date().toISOString(),
  head: git(["rev-parse", "HEAD"]).trim(),
  headTree: git(["rev-parse", "HEAD^{tree}"]).trim(),
  status: git(["status", "--porcelain=v1", "--untracked-files=all"]),
  lsFiles: { entries: lsFiles.split("\n").filter(Boolean).length, sha256: crypto.createHash("sha256").update(lsFiles).digest("hex") },
  graphStore: { root: GS, files: files.length, totalBytes: files.reduce((n, f) => n + (f.bytes || 0), 0), list: files },
};
fs.writeFileSync(OUT, JSON.stringify(rec, null, 2) + "\n");
console.log(JSON.stringify({ head: rec.head, status: rec.status, lsFiles: rec.lsFiles, graphFiles: files.length, bytes: rec.graphStore.totalBytes }));
