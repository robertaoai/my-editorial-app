// `D-446` U-V — DoR-completion validator for the SV-003 preparation contract (V2, a separate validator).
//
// Reads ONE preparation contract (Markdown with a fenced `json sv-dor-contract` block), the source repository, a
// structured pre-validation review record and a retained consistency-check log. It first validates the contract's
// structure and coverage (fail closed), then evaluates the DoR completion predicates SV3-DOR-01..05 accepted for SV-003
// (B-136; D-446), and writes one receipt that binds every input it actually consumed.
//
// A pass means only: the DoR criteria are complete and bound to their evidence at this HEAD and these bytes.
// It is NOT a DoD attempt result, NOT Phase 2 completion, and it grants NO commit, push or release authority.
// Jev System One (`scripts/jev/`) is not used or changed.
//
// Normalization: every input is hashed as the exact bytes read and decoded as UTF-8 with no newline change. Only the
// comparisons of a scope clause, a phrase or a requirement row collapse runs of whitespace; paths are compared after
// turning backslashes into slashes and lowercasing a drive letter.
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

/** Coverage the validator requires. Fixed here: a submitted contract cannot redefine it. */
export const REQUIRED_TUPLES = Object.freeze(["J1", "J2"]);
export const REQUIRED_DOR = Object.freeze(["SV3-DOR-01", "SV3-DOR-02", "SV3-DOR-03", "SV3-DOR-04", "SV3-DOR-05"]);
export const REGISTER = "docs/v1/V1-DECISION-REGISTER.md";

export const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const norm = (s) => String(s).replace(/\s+/g, " ").trim();
export const normPath = (p) => String(p).trim().replace(/\\/g, "/").replace(/\/+/g, "/").replace(/^([A-Za-z]):/, (_, d) => `${d.toLowerCase()}:`);
const HEX40 = /^[0-9a-f]{40}$/;
const HEX64 = /^[0-9a-f]{64}$/;
const nonEmpty = (s) => typeof s === "string" && s.trim() !== "";

function git(repo, args, encoding = "utf8") {
  return execFileSync("git", ["-C", repo, ...args], { encoding, maxBuffer: 1 << 28 });
}

/** Records each consumed input once: role, kind, path, revision, blob and the SHA-256 of the bytes actually read. */
function inventory() {
  const items = [];
  const seen = new Set();
  return {
    items,
    add(item) {
      const key = `${item.role}|${item.path}|${item.commit ?? ""}`;
      if (!seen.has(key)) {
        seen.add(key);
        items.push(item);
      }
    },
  };
}

/** Reads `path` at `rev` and records it; returns the decoded text, or null when absent. */
function readGit(repo, inv, role, rev, path) {
  let commit;
  try {
    commit = git(repo, ["rev-parse", `${rev}^{commit}`]).trim();
  } catch {
    inv.add({ role, kind: "git", path, commit: null, blob: null, sha256: null, absent: "unknown revision" });
    return null;
  }
  let blob;
  try {
    blob = git(repo, ["rev-parse", `${commit}:${path}`]).trim();
  } catch {
    inv.add({ role, kind: "git", path, commit, blob: null, sha256: null, absent: "path absent at this commit" });
    return null;
  }
  const bytes = git(repo, ["cat-file", "blob", blob], null);
  inv.add({ role, kind: "git", path, commit, blob, sha256: sha256(bytes) });
  return bytes.toString("utf8");
}

/** Reads an external file and records its observed bytes; returns its Buffer, or null when absent. */
function readFile(inv, role, path) {
  if (!nonEmpty(path) || !existsSync(path)) {
    inv.add({ role, kind: "file", path: path ?? null, sha256: null, absent: "file absent" });
    return null;
  }
  const bytes = readFileSync(path);
  inv.add({ role, kind: "file", path, sha256: sha256(bytes) });
  return bytes;
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

/** Structure and coverage, before any predicate. Returns a list of { code, subject, detail } findings. */
export function schemaFindings(c) {
  const f = [];
  const add = (code, subject, detail = "") => f.push({ code, subject, detail });
  if (!c || typeof c !== "object") return [{ code: "schema-missing-field", subject: "contract", detail: "not an object" }];
  for (const k of ["attempt", "contractRevision", "requirementSource"]) if (!nonEmpty(c[k])) add("schema-missing-field", k);
  if (!c.template || !nonEmpty(c.template.path) || !HEX64.test(c.template.sha256 ?? "")) add("schema-missing-field", "template");
  const b = c.boundaries;
  if (!b || !b.expectedBytesRule || !nonEmpty(b.expectedBytesRule.source) || !nonEmpty(b.expectedBytesRule.phrase)
    || !b.checkExceptions || !nonEmpty(b.checkExceptions.file) || !HEX64.test(b.checkExceptions.sha256 ?? "")
    || !b.bindings || !nonEmpty(b.bindings.source) || !Array.isArray(b.bindings.fields) || !b.bindings.fields.length
    || !b.roles || !Array.isArray(b.roles.phrases) || !b.roles.phrases.length || !b.roles.phrases.every(nonEmpty)
    || !b.t2t3 || !nonEmpty(b.t2t3.decision) || !nonEmpty(b.t2t3.t2) || !nonEmpty(b.t2t3.t3)) add("schema-missing-field", "boundaries");

  // Tuples: both J1 and J2, unique, each complete.
  const tuples = Array.isArray(c.tuples) ? c.tuples : null;
  if (!tuples || !tuples.length) add("tuples-missing-or-empty", "tuples");
  const ids = (tuples ?? []).map((t) => t?.id);
  for (const id of new Set(ids.filter((x, i) => ids.indexOf(x) !== i))) add("duplicate-tuple-id", String(id));
  for (const id of REQUIRED_TUPLES) if (!ids.includes(id)) add("required-tuple-missing", id);
  for (const t of tuples ?? []) {
    const s = t?.id ?? "(no id)";
    if (!nonEmpty(t?.id) || !nonEmpty(t?.entry) || !HEX40.test(t?.registerCommit ?? "") || !nonEmpty(t?.registeredObjectPath)
      || !HEX64.test(t?.objectSha256 ?? "") || !nonEmpty(t?.retainedObjectFile)) add("schema-missing-field", s);
    if (!nonEmpty(t?.scopeClause)) add("scope-empty", s);
  }

  // Mapping: at least one non-empty row for every required tuple.
  const mapping = Array.isArray(c.mapping) ? c.mapping : [];
  for (const id of REQUIRED_TUPLES) {
    const rows = mapping.filter((m) => m?.tuple === id);
    if (!rows.length || rows.some((m) => !Array.isArray(m.requirements) || !m.requirements.length || !m.requirements.every(nonEmpty))) {
      add("mapping-missing", id);
    }
  }

  // DoD definitions and DoR coverage: the validator's required DoR set, each mapped to defined DoD obligations.
  const dod = Array.isArray(c.dod) ? c.dod : [];
  const dodIds = dod.map((d) => d?.id);
  // Every DoD definition ID is unique. A repeat is refused whether identical or conflicting; nothing is deduplicated.
  for (const id of new Set(dodIds.filter((x, i) => dodIds.indexOf(x) !== i))) add("duplicate-dod-id", String(id));
  if (!dod.length) add("schema-missing-field", "dod");
  for (const d of dod) if (!nonEmpty(d?.id) || !nonEmpty(d?.condition) || !nonEmpty(d?.evidenceClass)) add("evidence-class-missing", d?.id ?? "(no id)");
  const dorDod = Array.isArray(c.dorDod) ? c.dorDod : [];
  const dors = dorDod.map((d) => d?.dor);
  for (const dor of new Set(dors.filter((x, i) => dors.indexOf(x) !== i))) add("duplicate-dor", String(dor));
  for (const dor of REQUIRED_DOR) if (!dors.includes(dor)) add("dor-coverage-missing", dor);
  for (const d of dorDod) {
    if (!Array.isArray(d?.dod) || !d.dod.length) add("dor-coverage-missing", d?.dor ?? "(no dor)", "no DoD obligation");
    for (const ref of d?.dod ?? []) if (!dodIds.includes(ref)) add("dod-undefined", `${d.dor} → ${ref}`);
  }
  if (!Array.isArray(c.states)) add("schema-missing-field", "states");
  return f;
}

/** One Register entry section: from its `## … \`D-NNN\`` heading to the next `## ` heading. */
export function entrySection(register, id) {
  if (!register || !nonEmpty(id)) return null;
  const lines = register.split("\n");
  const start = lines.findIndex((l) => l.startsWith("## ") && l.includes(`\`${id}\``));
  if (start < 0) return null;
  let end = lines.findIndex((l, i) => i > start && l.startsWith("## "));
  if (end < 0) end = lines.length;
  return lines.slice(start, end).join("\n");
}

/** Every backtick-quoted token in a section, as normalized paths. */
export function quotedPaths(section) {
  return [...section.matchAll(/`([^`]+)`/g)].map((m) => normPath(m[1]));
}

/** The item-2 "Scope and exclusions." clause, with its continuation lines, up to the next numbered item. */
export function scopeClause(section) {
  const lines = section.split("\n");
  const i = lines.findIndex((l) => /^2\. \*\*Scope and exclusions\.\*\*/.test(l));
  if (i < 0) return null;
  const out = [lines[i].replace(/^2\. \*\*Scope and exclusions\.\*\*\s*/, "")];
  for (let j = i + 1; j < lines.length && !/^\d+\. \*\*/.test(lines[j]) && lines[j].trim() !== "" && !lines[j].startsWith("#"); j++) out.push(lines[j]);
  return norm(out.join(" "));
}

/** Tier rows whose disposition says "unaffected" with no reason after it. */
export function unaffectedWithoutReason(section) {
  const i = section.indexOf("### Tier applicability");
  if (i < 0) return null;
  const rows = section.slice(i).split("\n").filter((l) => l.startsWith("|") && !/^\|\s*-/.test(l));
  return rows.filter((row) => row.split("|").map((c) => c.trim()).filter(Boolean).some((c) => {
    const k = c.toLowerCase().indexOf("unaffected");
    return k >= 0 && c.slice(k + "unaffected".length).replace(/[\s:;,.*—–-]/g, "") === "";
  }));
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
  if (row.verdict === "Approve-with-conditions") return (row.conditions ?? []).every((c) => c.status === "closed") ? null : "review-rejected";
  return "review-rejected";
}

/**
 * Evaluates the contract. inputs = { repo, contractPath, contractBytes, reviewPath, logPath }.
 * Returns { results, outcome, head, W, inputs } where `inputs` is the consumed-input inventory.
 */
export function evaluate({ repo, contractPath, contractBytes, reviewPath, logPath }) {
  const results = [];
  const note = (rule, subject, code, detail = "") => results.push({ rule, subject, ok: code === null, code, detail });
  const inv = inventory();
  const head = git(repo, ["rev-parse", "HEAD"]).trim();
  const W = sha256(contractBytes);
  let headBlob = null;
  try {
    headBlob = git(repo, ["rev-parse", `HEAD:${contractPath}`]).trim();
  } catch {
    // absent at HEAD: recorded as absence, never invented
  }
  inv.add({ role: "contract", kind: "working", path: contractPath, commit: head, blob: headBlob ?? "absent-at-HEAD", sha256: W, differsFromHead: headBlob === null ? true : git(repo, ["hash-object", contractPath]).trim() !== headBlob });

  const reviewBytes = readFile(inv, "review", reviewPath);
  const logBytes = readFile(inv, "check-log", logPath);
  let review = null;
  if (reviewBytes) {
    try {
      review = JSON.parse(reviewBytes.toString("utf8"));
    } catch {
      note("schema", "review", "review-unreadable");
    }
  }
  const checkLog = logBytes ? logBytes.toString("utf8") : null;

  const parsed = parseContract(contractBytes.toString("utf8"));
  if (parsed.error) {
    note("schema", contractPath, "contract-unreadable", parsed.error);
    return { results, outcome: "fail", head, W, inputs: inv.items };
  }
  const c = parsed.contract;
  const schema = schemaFindings(c);
  if (schema.length) {
    for (const s of schema) note("schema", s.subject, s.code, s.detail);
    return { results, outcome: "fail", head, W, inputs: inv.items };
  }

  // Review binding: the record must name exactly the bytes under test.
  const reviewBound = review && review.target?.path === contractPath && review.target?.sha256 === W;
  const row = (dor, tuple, scope) => {
    if (!review) return { code: "review-missing" };
    const rows = (review.rows ?? []).filter((r) => r.row === dor && r.tuple === tuple);
    if (!rows.length) return { code: "review-missing" };
    if (!reviewBound) return { code: "review-stale", detail: `review targets ${review.target?.sha256 ?? "nothing"}, tested ${W}` };
    const inScope = rows.find((r) => r.scope === scope);
    if (!inScope) return { code: "review-wrong-scope", detail: `scopes: ${rows.map((r) => r.scope).join(", ")}` };
    return { code: reviewVerdict(inScope) };
  };

  // SV3-DOR-01 — each tuple validated independently against its own historical Register revision (F3).
  const accepted = new Set();
  for (const t of c.tuples) {
    const subject = `${t.id} (${t.entry})`;
    const reg = readGit(repo, inv, `register@${t.id}`, t.registerCommit, REGISTER);
    const sec = reg === null ? null : entrySection(reg, t.entry);
    let code = null;
    let detail = "";
    if (!sec) code = "entry-absent-at-commit";
    else if (!quotedPaths(sec).includes(normPath(t.registeredObjectPath))) code = "entry-object-mismatch";
    else if (!quotedPaths(sec).includes(t.objectSha256)) code = "object-hash-mismatch";
    else if (scopeClause(sec) !== norm(t.scopeClause)) {
      code = "scope-mismatch";
      detail = `registered clause: ${scopeClause(sec) ?? "none"}`;
    } else {
      const bytes = readFile(inv, `object@${t.id}`, t.retainedObjectFile);
      if (!bytes) {
        code = "object-bytes-mismatch";
        detail = "retained object file absent";
      } else if (sha256(bytes) !== t.objectSha256) code = "object-bytes-mismatch";
    }
    if (code === null) ({ code, detail = "" } = row("SV3-DOR-01", t.id, "identity"));
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

  // SV3-DOR-02 — intent through the mapping (no inline ID required in the entries).
  if (c.inlineIdRequired === true) note("dor-mapping", "contract", "inline-id-required", "intent is validated through the mapping");
  const fn = readGit(repo, inv, "requirement-source@HEAD", head, c.requirementSource);
  const tupleIds = c.tuples.map((t) => t.id);
  for (const m of c.mapping) {
    let code = null;
    if (!tupleIds.includes(m.tuple) || !accepted.has(m.tuple)) code = "mapping-unknown-tuple";
    else if (m.requirements.some((id) => !fn || !fn.includes(`| \`${id}\` |`))) code = "requirement-absent";
    else code = row("SV3-DOR-02", m.tuple, "mapping").code;
    note("dor-mapping", m.tuple, code);
  }

  // SV3-DOR-03 — tier applicability at HEAD; tier-sweep in the bound log; human review.
  const regHead = readGit(repo, inv, "register@HEAD", head, REGISTER);
  const logBound = checkLog && checkLog.includes(`HEAD ${head}`) && checkLog.includes(W);
  for (const t of c.tuples) {
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
  const b = c.boundaries;
  const rule = readGit(repo, inv, "expected-bytes-rule@HEAD", head, b.expectedBytesRule.source);
  note("dor-boundaries", "expected-bytes rule", rule && norm(rule).includes(norm(b.expectedBytesRule.phrase)) ? null : "expected-bytes-rule-absent");
  const ex = readFile(inv, "check-exceptions", b.checkExceptions.file);
  note("dor-boundaries", "check exceptions", ex && sha256(ex) === b.checkExceptions.sha256 ? null : "exception-text-mismatch");
  const fields = snapshotFields(readGit(repo, inv, "guard-source@HEAD", head, b.bindings.source));
  const want = [...b.bindings.fields].sort();
  note("dor-boundaries", "binding fields", fields && JSON.stringify(fields) === JSON.stringify(want) ? null : "binding-list-drift",
    fields ? `guard: ${fields.join(",")}` : "snapshotSource not found");
  note("dor-boundaries", "review roles", b.roles.phrases.every((p) => norm(regHead ?? "").includes(norm(p))) ? null : "role-mismatch");
  const adopt = entrySection(regHead, b.t2t3.decision);
  note("dor-boundaries", "T2/T3 adoption", adopt && [b.t2t3.t2, b.t2t3.t3].every((p) => norm(adopt).includes(norm(p))) ? null : "t2-t3-not-adopted");

  // SV3-DOR-05 — structure and no backdating.
  const tpl = readGit(repo, inv, "template@HEAD", head, c.template.path);
  note("dor-structure", "template", tpl !== null && sha256(Buffer.from(tpl, "utf8")) === c.template.sha256 ? null : "template-hash-mismatch");
  for (const s of c.states) {
    let code = null;
    if (s.state !== "proposed") {
      const ev = s.evidence;
      const p = ev?.path ? (isAbsolute(ev.path) ? ev.path : join(repo, ev.path)) : null;
      const bytes = p ? readFile(inv, `state-evidence@${s.item}`, p) : null;
      if (!bytes || !ev?.sha256 || sha256(bytes) !== ev.sha256) code = "backdated-state";
    }
    note("dor-structure", `state ${s.item}`, code);
  }
  if (c.resultRoot && existsSync(join(repo, c.resultRoot))) note("dor-structure", c.resultRoot, "result-file-present");

  return { results, outcome: results.every((r) => r.ok) ? "pass" : "fail", head, W, inputs: inv.items };
}

function arg(argv, name) {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
}

export function main(argv) {
  const repo = arg(argv, "repo");
  const contractPath = arg(argv, "contract");
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
  const { results, outcome, head, inputs } = evaluate({
    repo, contractPath, contractBytes: readFileSync(full), reviewPath: arg(argv, "review"), logPath: arg(argv, "check-log"),
  });
  const self = fileURLToPath(import.meta.url);
  const selfBytes = readFileSync(self);
  const inRepo = resolve(self).startsWith(resolve(repo));
  const selfRel = inRepo ? resolve(self).slice(resolve(repo).length + 1).split("\\").join("/") : null;
  let selfBlob = null;
  if (selfRel) {
    try {
      selfBlob = git(repo, ["rev-parse", `HEAD:${selfRel}`]).trim();
    } catch {
      selfBlob = "absent-at-HEAD";
    }
  }
  const receipt = {
    tool: "validate-dor",
    version: 2,
    head,
    validator: { path: selfRel ?? self, commit: head, blob: selfBlob ?? "outside-repo", sha256: sha256(selfBytes) },
    normalization: "Inputs are hashed as the exact bytes read and decoded as UTF-8 with no newline change. Scope clauses, phrases and requirement rows are compared with runs of whitespace collapsed; paths after backslash-to-slash and drive-letter lowercasing.",
    inputs,
    results,
    outcome,
    meaning: "DoR completion only. Not a DoD attempt result, not Phase 2 proof, and no commit, push or release authority.",
  };
  const text = JSON.stringify(receipt, null, 2) + "\n";
  if (out) writeFileSync(out, text, { flag: "wx" });
  else process.stdout.write(text);
  const failed = results.filter((r) => !r.ok);
  console.error(`validate-dor · ${outcome} · ${results.length - failed.length}/${results.length} checks hold`);
  for (const f of failed) console.error(`  FAIL ${f.rule} · ${f.subject} · ${f.code}${f.detail ? ` (${f.detail})` : ""}`);
  return outcome === "pass" ? 0 : 1;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  process.exitCode = main(process.argv.slice(2));
}
