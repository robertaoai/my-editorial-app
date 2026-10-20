// `D-446` U-V — DoR-completion validator for a preparation contract (V2, a separate validator).
//
// Reads ONE preparation contract (Markdown with a fenced `json sv-dor-contract` block), the source repository at HEAD,
// a structured pre-validation review record and a retained consistency-check log, and evaluates the DoR completion
// predicates SV3-DOR-01..05 accepted for SV-003 (B-136 / D-446). It writes one receipt.
//
// A pass means only: the DoR criteria are complete and bound to their evidence at this HEAD and these bytes.
// It is NOT a DoD attempt result, NOT Phase 2 completion, and it grants NO commit, push or release authority.
// Jev System One (`scripts/jev/`) is not used or changed.
//
// Usage:
//   node scripts/dor/validate-dor.mjs --repo <root> --contract <repo-relative path> --review <review.json>
//        --check-log <log> [--out <receipt.json>]
// Exit codes: 0 pass, 1 fail, 2 usage or unreadable input.

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { isAbsolute, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const norm = (s) => String(s).replace(/\s+/g, " ").trim();

function git(repo, args) {
  return execFileSync("git", ["-C", repo, ...args], { encoding: "utf8", maxBuffer: 1 << 28 });
}
function gitShow(repo, rev, path) {
  try {
    return execFileSync("git", ["-C", repo, "show", `${rev}:${path}`], { encoding: "utf8", maxBuffer: 1 << 28 });
  } catch {
    return null;
  }
}
function headBlob(repo, path) {
  try {
    return git(repo, ["rev-parse", `HEAD:${path}`]).trim();
  } catch {
    return null; // absent at HEAD: recorded as absence, never invented
  }
}

/** The fenced `json sv-dor-contract` block of a preparation contract. */
export function parseContract(markdown) {
  const m = markdown.match(/^```json sv-dor-contract\r?\n([\s\S]*?)\r?\n```/m);
  if (!m) return { error: "no `json sv-dor-contract` block" };
  try {
    return { contract: JSON.parse(m[1]) };
  } catch (e) {
    return { error: `contract block is not valid JSON (${e.message})` };
  }
}

/** One Register entry section: from its `## … \`D-NNN\`` heading to the next `## ` heading. */
export function entrySection(register, id) {
  if (!register) return null;
  const lines = register.split("\n");
  const start = lines.findIndex((l) => l.startsWith("## ") && l.includes(`\`${id}\``));
  if (start < 0) return null;
  let end = lines.findIndex((l, i) => i > start && l.startsWith("## "));
  if (end < 0) end = lines.length;
  return lines.slice(start, end).join("\n");
}

/** Tier rows whose disposition says "unaffected" with no reason after it. */
export function unaffectedWithoutReason(section) {
  const i = section.indexOf("### Tier applicability");
  if (i < 0) return null;
  const rows = section.slice(i).split("\n").filter((l) => l.startsWith("|") && !/^\|\s*-/.test(l));
  return rows.filter((row) => {
    const cells = row.split("|").map((c) => c.trim()).filter(Boolean);
    return cells.some((c) => {
      const k = c.toLowerCase().indexOf("unaffected");
      if (k < 0) return false;
      return c.slice(k + "unaffected".length).replace(/[\s:;,.*—–-]/g, "") === "";
    });
  });
}

/** The keys `snapshotSource` returns on success, read from the guard source. */
export function snapshotFields(guardSource) {
  const f = guardSource?.match(/export function snapshotSource\([\s\S]*?\n}\n/);
  if (!f) return null;
  const ret = [...f[0].matchAll(/return \{ ok: true, ([^}]*)\}/g)].pop();
  if (!ret) return null;
  return ret[1].split(",").map((p) => p.split(":")[0].trim()).filter(Boolean).sort();
}

function reviewVerdict(row) {
  if (!row) return "review-missing";
  if (row.verdict === "Reject") return "review-rejected";
  if (row.verdict === "Approve") return (row.conditions ?? []).length ? "review-rejected" : null;
  if (row.verdict === "Approve-with-conditions") {
    return (row.conditions ?? []).every((c) => c.status === "closed") ? null : "review-rejected";
  }
  return "review-rejected";
}

/**
 * Evaluates the contract. `inputs` = { repo, contractPath, contractText, review, checkLog }.
 * Returns { results, outcome }. Each result is { rule, subject, ok, code, detail }.
 */
export function evaluate({ repo, contractPath, contractText, review, checkLog }) {
  const results = [];
  const note = (rule, subject, code, detail = "") => results.push({ rule, subject, ok: code === null, code, detail });
  const head = git(repo, ["rev-parse", "HEAD"]).trim();
  const W = sha256(Buffer.from(contractText, "utf8"));

  const parsed = parseContract(contractText);
  if (parsed.error) {
    note("dor-structure", contractPath, "contract-unreadable", parsed.error);
    return { results, outcome: "fail", head, W };
  }
  const c = parsed.contract;

  // Review record binding: target path and hash must be exactly the bytes under test.
  const reviewBound = review && review.target?.path === contractPath && review.target?.sha256 === W;
  const row = (dor, tuple, scope) => {
    if (!review) return { code: "review-missing" };
    const rows = (review.rows ?? []).filter((r) => r.row === dor && (tuple === null || r.tuple === tuple));
    if (!rows.length) return { code: "review-missing" };
    if (!reviewBound) return { code: "review-stale", detail: `review targets ${review.target?.sha256 ?? "nothing"}, tested ${W}` };
    const inScope = rows.find((r) => r.scope === scope);
    if (!inScope) return { code: "review-wrong-scope", detail: `scopes: ${rows.map((r) => r.scope).join(", ")}` };
    return { code: reviewVerdict(inScope) };
  };

  // SV3-DOR-01 — identity and authority, each tuple validated independently (F3).
  const accepted = new Set();
  for (const t of c.tuples ?? []) {
    const subject = `${t.id} (${t.entry})`;
    const reg = gitShow(repo, t.registerCommit, "docs/v1/V1-DECISION-REGISTER.md");
    const sec = entrySection(reg, t.entry);
    let code = null;
    let detail = "";
    if (!sec) code = "entry-absent-at-commit";
    else if (!sec.includes(t.objectPath.split("/").pop())) code = "entry-object-mismatch";
    else if (!sec.includes(t.objectSha256)) code = "object-hash-mismatch";
    else if (!norm(sec).includes(norm(t.scopeQuote))) code = "scope-mismatch";
    else if (!t.objectFile || !existsSync(t.objectFile)) {
      code = "object-bytes-mismatch";
      detail = "retained object file absent";
    } else if (sha256(readFileSync(t.objectFile)) !== t.objectSha256) code = "object-bytes-mismatch";
    if (code === null) {
      const r = row("SV3-DOR-01", t.id, "identity");
      code = r.code;
      detail = r.detail ?? "";
    }
    if (code === null) {
      const u1 = review?.u1Review;
      if (!u1) code = "review-missing";
      else if (u1.commit !== t.registerCommit) code = "review-stale";
      else if (u1.scope !== "U1 registration") code = "review-wrong-scope";
      else code = reviewVerdict(u1);
      if (code) detail = "U1 review citation";
    }
    note("dor-identity", subject, code, detail);
    if (code === null) accepted.add(t.id);
  }

  // SV3-DOR-02 — intent links through the mapping (no inline ID required in the entries).
  if (c.inlineIdRequired === true) note("dor-mapping", "contract", "inline-id-required", "intent is validated through the mapping");
  const fn = gitShow(repo, head, c.requirementSource);
  for (const m of c.mapping ?? []) {
    let code = null;
    if (!(c.tuples ?? []).some((t) => t.id === m.tuple) || !accepted.has(m.tuple)) code = "mapping-unknown-tuple";
    else {
      const missing = (m.requirements ?? []).filter((id) => !fn || !fn.includes(`| \`${id}\` |`));
      if (!(m.requirements ?? []).length || missing.length) code = "requirement-absent";
      if (code === null) code = row("SV3-DOR-02", m.tuple, "mapping").code;
    }
    note("dor-mapping", m.tuple, code);
  }

  // SV3-DOR-03 — tier applicability: structure at HEAD, tier-sweep in the bound log, human review.
  const regHead = gitShow(repo, head, "docs/v1/V1-DECISION-REGISTER.md");
  const logBound = checkLog && checkLog.includes(`HEAD ${head}`) && checkLog.includes(W);
  for (const t of c.tuples ?? []) {
    const sec = entrySection(regHead, t.entry);
    const bad = sec ? unaffectedWithoutReason(sec) : null;
    let code = null;
    if (!sec || bad === null) code = "tier-table-missing";
    else if (bad.length) code = "unaffected-without-reason";
    else if (!checkLog) code = "check-log-missing";
    else if (!logBound) code = "check-log-stale";
    else if (!/^\s*PASS\s+tier-sweep\b/m.test(checkLog)) code = "tier-sweep-fail";
    else code = row("SV3-DOR-03", t.id, "tiers").code;
    note("dor-tiers", t.id, code);
  }

  // SV3-DOR-04 — execution and verification boundaries, each equal to its accepted source at HEAD.
  const b = c.boundaries ?? {};
  const rule = gitShow(repo, head, b.expectedBytesRule?.source ?? "");
  note("dor-boundaries", "expected-bytes rule",
    rule && rule.includes(b.expectedBytesRule.phrase) ? null : "expected-bytes-rule-absent");
  const ex = b.checkExceptions;
  note("dor-boundaries", "check exceptions",
    ex?.file && existsSync(ex.file) && sha256(readFileSync(ex.file)) === ex.sha256 ? null : "exception-text-mismatch");
  const fields = snapshotFields(gitShow(repo, head, b.bindings?.source ?? ""));
  const want = [...(b.bindings?.fields ?? [])].sort();
  note("dor-boundaries", "binding fields",
    fields && JSON.stringify(fields) === JSON.stringify(want) ? null : "binding-list-drift",
    fields ? `guard: ${fields.join(",")}` : "snapshotSource not found");
  const roleSec = regHead ?? "";
  note("dor-boundaries", "review roles",
    (b.roles?.phrases ?? []).length && b.roles.phrases.every((p) => norm(roleSec).includes(norm(p))) ? null : "role-mismatch");
  const adopt = entrySection(regHead, b.t2t3?.decision ?? "");
  note("dor-boundaries", "T2/T3 adoption",
    adopt && [b.t2t3.t2, b.t2t3.t3].every((p) => p && norm(adopt).includes(norm(p))) ? null : "t2-t3-not-adopted");

  // SV3-DOR-05 — structure and no backdating.
  const tpl = gitShow(repo, head, c.template?.path ?? "");
  note("dor-structure", "template", tpl !== null && sha256(Buffer.from(tpl, "utf8")) === c.template.sha256 ? null : "template-hash-mismatch");
  for (const d of c.dorDod ?? []) {
    note("dor-structure", d.dor, (d.dod ?? []).length && d.evidenceClass ? null : "unmapped-dor");
  }
  for (const s of c.states ?? []) {
    let code = null;
    if (s.state !== "proposed") {
      const ev = s.evidence;
      if (!ev?.path || !ev?.sha256) code = "backdated-state";
      else {
        const p = isAbsolute(ev.path) ? ev.path : join(repo, ev.path);
        if (!existsSync(p) || sha256(readFileSync(p)) !== ev.sha256) code = "backdated-state";
      }
    }
    note("dor-structure", `state ${s.item}`, code);
  }
  if (c.resultRoot && existsSync(join(repo, c.resultRoot))) note("dor-structure", c.resultRoot, "result-file-present");

  return { results, outcome: results.every((r) => r.ok) ? "pass" : "fail", head, W };
}

function arg(argv, name) {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
}

export function main(argv) {
  const repo = arg(argv, "repo");
  const contractPath = arg(argv, "contract");
  const reviewPath = arg(argv, "review");
  const logPath = arg(argv, "check-log");
  const out = arg(argv, "out");
  if (!repo || !contractPath) {
    console.error("usage: validate-dor --repo <root> --contract <repo-relative path> --review <review.json> --check-log <log> [--out <receipt>]");
    return 2;
  }
  const full = join(repo, contractPath);
  if (!existsSync(full)) {
    console.error(`contract not found: ${contractPath}`);
    return 2;
  }
  const contractBytes = readFileSync(full);
  const reviewBytes = reviewPath && existsSync(reviewPath) ? readFileSync(reviewPath) : null;
  const logBytes = logPath && existsSync(logPath) ? readFileSync(logPath) : null;
  let review = null;
  try {
    review = reviewBytes ? JSON.parse(reviewBytes.toString("utf8")) : null;
  } catch {
    console.error("review record is not valid JSON");
    return 2;
  }
  const { results, outcome, head, W } = evaluate({
    repo, contractPath, contractText: contractBytes.toString("utf8"), review, checkLog: logBytes ? logBytes.toString("utf8") : null,
  });
  const self = fileURLToPath(import.meta.url);
  const rel = (p) => resolve(p).slice(resolve(repo).length + 1).split("\\").join("/");
  const selfRel = resolve(self).startsWith(resolve(repo)) ? rel(self) : null;
  const receipt = {
    tool: "validate-dor",
    version: 1,
    head,
    validator: { path: selfRel ?? self, sha256: sha256(readFileSync(self)), headBlob: selfRel ? headBlob(repo, selfRel) ?? "absent-at-HEAD" : "outside-repo" },
    inputs: [{
      path: contractPath,
      workingSha256: W,
      headBlob: headBlob(repo, contractPath) ?? "absent-at-HEAD",
      differsFromHead: headBlob(repo, contractPath) === null ? true : git(repo, ["hash-object", contractPath]).trim() !== headBlob(repo, contractPath),
    }],
    externalInputs: [
      { role: "review", path: reviewPath ?? null, sha256: reviewBytes ? sha256(reviewBytes) : null },
      { role: "check-log", path: logPath ?? null, sha256: logBytes ? sha256(logBytes) : null },
    ],
    results,
    outcome,
    meaning: "DoR completion only. Not a DoD attempt result, not Phase 2 proof, and no commit, push or release authority.",
  };
  const text = JSON.stringify(receipt, null, 2) + "\n";
  if (out) writeFileSync(out, text, { flag: "wx" });
  else process.stdout.write(text);
  const failed = results.filter((r) => !r.ok);
  console.error(`validate-dor · ${outcome} · ${results.length - failed.length}/${results.length} predicates hold`);
  for (const f of failed) console.error(`  FAIL ${f.rule} · ${f.subject} · ${f.code}${f.detail ? ` (${f.detail})` : ""}`);
  return outcome === "pass" ? 0 : 1;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  process.exitCode = main(process.argv.slice(2));
}
