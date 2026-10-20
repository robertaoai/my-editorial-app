// `D-446` U-V selftest for `scripts/dor/validate-dor.mjs`.
//
// Every fixture is SYNTHETIC: a throwaway Git repository in the OS temp directory, with invented decisions
// (`D-900`, `D-901`, `D-902`, `D-903`), invented objects with complete registered paths, and an invented review. No
// fixture is a real Judge act or a real registration, and nothing here reads or writes the live repository. A positive
// case passes first; each named refusal must produce exactly its code.

import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  entrySection, evaluate, main, normPath, parseContract, quotedPaths, REQUIRED_DOR, schemaFindings, scopeClause, sha256,
  snapshotFields, splitTopLevel, unaffectedWithoutReason,
} from "./validate-dor.mjs";

// Each case spawns several `git` processes against the fixture repository; on a loaded Windows host one case can exceed
// bun:test's 5-second default. A timeout is not a predicate result, so the default is raised for this file only.
setDefaultTimeout(60_000);

let ROOT;
let REPO;
let C0; // the Register before any entry exists
let C1; // the entries registered
let C2; // a later HEAD: the Register gains an unrelated line, so historical and HEAD reads differ
const OBJ1 = "supplement-a object bytes\n";
const OBJ2 = "supplement-b object bytes\n";
const OBJ3 = "supplement-c object bytes\n";
const OBJ4 = "supplement-d object bytes\n";
const H1 = sha256(OBJ1);
const H2 = sha256(OBJ2);
const H3 = sha256(OBJ3);
const H4 = sha256(OBJ4);
const P1 = "C:/Fixture/outputs/checks-01/supplement-a/SUP-MAP.md"; // same basename on purpose
const P2 = "C:/Fixture/outputs/checks-01/supplement-b/SUP-MAP.md";
const P3 = "C:/Fixture/outputs/checks-01/supplement-c/SUP-MAP.md";
const P4 = "C:/Fixture/outputs/checks-01/supplement-d/SUP-MAP.md";
const S1 = "This unit only. Excluded: supplement b; any file outside the unit; Register writes; push.";
const S2 = "This unit only. Excluded: supplement a; any file outside the unit; Register writes; push.";
const S4 = "This unit only. Excluded: supplements a, b and c; any file outside the unit; Register writes; push.";
// The grouped reasonless row, and the reason a later clarification supplies for it (B1).
const ROW4 = "`docs/PRD.md`, Charter, application code";
const REASON4 = "The registration records the existing custody approval and changes none of the grouped tiers' governed content, scope or lane state.";
// The real guard return shape: a nested call whose arguments contain commas (B2).
const GUARD = "export function snapshotSource(repo) {\n  const x = 1;\n  return { ok: true, root: canonicalFsPath(repo), head, branch, origin, refs, upstream, config: git(repo, [\"config\", \"--list\", \"--show-origin\"]) };\n}\n";
const EXC = "item 6 check exceptions text\n";
const TPL = "# template v1 (synthetic)\n";
const T2 = "Confirm that every bound ref other than the source branch remains unchanged.";
const T3 = "the independent reviewer runs publicationSourceFindings read-only and stops on any finding.";
const CONTRACT_PATH = "docs/attempts/SV-900.md";
const REG = "docs/v1/V1-DECISION-REGISTER.md";

const git = (...a) => execFileSync("git", ["-C", REPO, ...a], { encoding: "utf8" }).trim();
const put = (rel, text) => {
  mkdirSync(join(REPO, rel, ".."), { recursive: true });
  writeFileSync(join(REPO, rel), text);
};
// The scope clause wraps onto a continuation line, as real entries do.
const entry = (id, path, hash, scope, tierReason = ": no artifact created") => `## 5.1 \`${id}\` — Synthetic approval record

**Authority.** Synthetic. The object is the unit defined by
\`${path}\`
(SHA-256 \`${hash}\`).

### The decision

1. **Action.** Synthetic; the same words appear for every entry.
2. **Scope and exclusions.** ${scope.slice(0, 40)}
   ${scope.slice(40)}
3. **Checkpoint.** Synthetic.

### Tier applicability (\`D-54\`)

| Tier | Disposition |
|---|---|
| **Register** | ✅ this entry |
| **Build Spec** | — unaffected${tierReason} |
`;
const HEAD_REG = "# Register (synthetic)\n\nLane B writes its own U6 and U7 records.\n\n";

beforeAll(() => {
  ROOT = mkdtempSync(join(tmpdir(), "validate-dor-"));
  REPO = join(ROOT, "repo");
  mkdirSync(REPO);
  execFileSync("git", ["init", "-q", "-b", "main", REPO]);
  git("config", "user.email", "fixture@example.invalid");
  git("config", "user.name", "fixture");
  put(REG, HEAD_REG);
  put("docs/fn.md", "| `AIG-02.R1` | channel |\n| `AIG-05.R2` | approve is not permission |\n");
  put("scripts/guard.mjs", GUARD);
  put("docs/template.md", TPL);
  put("docs/rules.md", "the committed blob equals the expected bytes\n");
  git("add", "-A");
  git("commit", "-q", "-m", "c0");
  C0 = git("rev-parse", "HEAD");
  const reg = HEAD_REG
    + entry("D-900", P1, H1, S1)
    + entry("D-901", P2, H2, S2)
    + entry("D-903", P3, H3, "This unit only. Excluded: supplement a and supplement b entirely.", "")
    + entry("D-904", P4, H4, S4).replace("| **Build Spec** |", `| ${ROW4} | — unaffected |\n| **Build Spec** |`)
    + `## 5.3 \`D-902\` — Synthetic boundary adoption\n\n3. **T2.** "${T2}"\n4. **T3.** Before writing, ${T3}\n`;
  put(REG, reg);
  git("add", "-A");
  git("commit", "-q", "-m", "c1");
  C1 = git("rev-parse", "HEAD");
  // HEAD gains the B1 clarification for D-904: a later entry with an entry | row | reason table.
  put(REG, `${reg}\n## 5.4 \`D-905\` — Synthetic tier clarification\n\n| Registration entry | Tier row | Reason |\n|---|---|---|\n| \`D-904\` | ${ROW4} | ${REASON4} |\n`);
  git("add", "-A");
  git("commit", "-q", "-m", "c2");
  C2 = git("rev-parse", "HEAD");
  // Retained copies live elsewhere: relocation does not change the registered identity.
  mkdirSync(join(ROOT, "retained"));
  writeFileSync(join(ROOT, "retained", "copy-a.md"), OBJ1);
  writeFileSync(join(ROOT, "retained", "copy-b.md"), OBJ2);
  writeFileSync(join(ROOT, "retained", "copy-c.md"), OBJ3);
  writeFileSync(join(ROOT, "retained", "copy-d.md"), OBJ4);
  writeFileSync(join(ROOT, "exceptions.txt"), EXC);
});
afterAll(() => rmSync(ROOT, { recursive: true, force: true }));

const tuple = (id, entryId, path, hash, scope, copy) => ({
  id, entry: entryId, registerCommit: C1, registeredObjectPath: path, objectSha256: hash, scopeClause: scope,
  retainedObjectFile: join(ROOT, "retained", copy),
});
/** A valid contract; `edit` mutates the parsed object before it is serialized. */
function contractObject() {
  return {
    kind: "sv-dor-contract",
    version: 2,
    attempt: "SV-900",
    contractRevision: "r1",
    template: { path: "docs/template.md", sha256: sha256(TPL) },
    requirementSource: "docs/fn.md",
    tuples: [tuple("J1", "D-900", P1, H1, S1, "copy-a.md"), tuple("J2", "D-901", P2, H2, S2, "copy-b.md")],
    // Shared context is legitimate: same commit, same requirement IDs, same holds (F3).
    mapping: [
      { tuple: "J1", requirements: ["AIG-02.R1", "AIG-05.R2"] },
      { tuple: "J2", requirements: ["AIG-02.R1", "AIG-05.R2"] },
    ],
    boundaries: {
      expectedBytesRule: { source: "docs/rules.md", phrase: "the committed blob equals the expected bytes" },
      checkExceptions: { file: join(ROOT, "exceptions.txt"), sha256: sha256(EXC) },
      bindings: { source: "scripts/guard.mjs", fields: ["branch", "config", "head", "origin", "refs", "root", "upstream"] },
      roles: { phrases: ["Lane B writes its own U6 and U7 records."] },
      t2t3: { decision: "D-902", t2: T2, t3: T3 },
    },
    dod: [
      { id: "SV3-DOD-01", condition: "mapping accepted", evidenceClass: "review record" },
      { id: "SV3-DOD-02", condition: "boundaries adopted", evidenceClass: "decision record" },
      { id: "SV3-DOD-03", condition: "J1 and J2 evidenced separately", evidenceClass: "documentary" },
      { id: "SV3-DOD-04", condition: "attempt accepted", evidenceClass: "Judge act" },
    ],
    dorDod: [
      { dor: "SV3-DOR-01", dod: ["SV3-DOD-03", "SV3-DOD-04"] },
      { dor: "SV3-DOR-02", dod: ["SV3-DOD-01"] },
      { dor: "SV3-DOR-03", dod: ["SV3-DOD-01", "SV3-DOD-04"] },
      { dor: "SV3-DOR-04", dod: ["SV3-DOD-02"] },
      { dor: "SV3-DOR-05", dod: ["SV3-DOD-04"] },
    ],
    states: [{ item: "SV3-DOD-03", state: "proposed" }],
    resultRoot: "docs/results/sv-900",
  };
}
const render = (c) => "# SV-900 (synthetic)\n\n```json sv-dor-contract\n" + JSON.stringify(c, null, 2) + "\n```\n";
const contract = (edit = (c) => c) => render(edit(contractObject()));
function reviewObject(text) {
  const rows = [];
  for (const t of ["J1", "J2"]) {
    rows.push({ row: "SV3-DOR-01", tuple: t, scope: "identity", verdict: "Approve", conditions: [] });
    rows.push({ row: "SV3-DOR-02", tuple: t, scope: "mapping", verdict: "Approve", conditions: [] });
    rows.push({ row: "SV3-DOR-03", tuple: t, scope: "tiers", verdict: "Approve", conditions: [] });
  }
  return {
    kind: "sv-dor-review", reviewer: "Lane B (synthetic)", target: { path: CONTRACT_PATH, sha256: sha256(text) }, rows,
    u1Review: { commit: C1, scope: "U1 registration", verdict: "Approve", conditions: [] },
  };
}
const logText = (text, tierPass = true) => `HEAD ${git("rev-parse", "HEAD")}\nworking sha256 ${sha256(text)}\n---\n  ${tierPass ? "PASS" : "FAIL"}  tier-sweep  ok\n`;
let n = 0;
function run({ c = contract(), reviewEdit = (r) => r, log, noReview = false } = {}) {
  const k = ++n;
  const rv = join(ROOT, `review-${k}.json`);
  const lg = join(ROOT, `check-${k}.log`);
  if (!noReview) writeFileSync(rv, JSON.stringify(reviewEdit(reviewObject(c))));
  if (log !== null) writeFileSync(lg, log ?? logText(c));
  return evaluate({ repo: REPO, contractPath: CONTRACT_PATH, contractBytes: Buffer.from(c, "utf8"), reviewPath: noReview ? join(ROOT, "absent.json") : rv, logPath: log === null ? join(ROOT, "absent.log") : lg });
}
const codes = (res) => res.results.filter((x) => !x.ok).map((x) => x.code);

describe("validate-dor: helpers", () => {
  test("the contract block parses; a missing block is reported", () => {
    expect(parseContract(contract()).contract.attempt).toBe("SV-900");
    expect(parseContract("# none").error).toContain("no `json sv-dor-contract` block");
  });
  test("an entry section runs from its heading to the next heading", () => {
    const sec = entrySection(execFileSync("git", ["-C", REPO, "show", `${C1}:${REG}`], { encoding: "utf8" }), "D-900");
    expect(sec).toContain(H1);
    expect(sec).not.toContain(H2);
  });
  test("the item-2 scope clause includes its continuation line", () => {
    const sec = entrySection(execFileSync("git", ["-C", REPO, "show", `${C1}:${REG}`], { encoding: "utf8" }), "D-900");
    expect(scopeClause(sec)).toBe(S1);
  });
  test("paths normalize separators and the drive letter", () => {
    expect(normPath("C:\\Fixture\\a//b.md")).toBe("c:/Fixture/a/b.md");
    expect(quotedPaths("x `C:/A/b.md` y")).toEqual(["c:/A/b.md"]);
  });
  test("an unaffected row without a reason is found; one with a reason is not", () => {
    expect(unaffectedWithoutReason("### Tier applicability\n| a | b |\n|---|---|\n| x | — unaffected: reason |\n")).toEqual([]);
    expect(unaffectedWithoutReason("### Tier applicability\n| a | b |\n|---|---|\n| x | — unaffected |\n").length).toBe(1);
  });
  test("snapshotSource fields are read from the guard source", () => {
    expect(snapshotFields("export function snapshotSource(r) {\n  return { ok: true, head, branch };\n}\n")).toEqual(["branch", "head"]);
  });
  test("the required DoR set is the validator's own, not the contract's", () => {
    expect(REQUIRED_DOR).toEqual(["SV3-DOR-01", "SV3-DOR-02", "SV3-DOR-03", "SV3-DOR-04", "SV3-DOR-05"]);
    expect(Object.isFrozen(REQUIRED_DOR)).toBe(true);
  });
});

describe("validate-dor: positive case", () => {
  test("shared context with distinct valid J1/J2 bindings passes (F3)", () => {
    const res = run();
    expect(codes(res)).toEqual([]);
    expect(res.outcome).toBe("pass");
  });
});

describe("validate-dor: V1 structure and coverage refusals (fail closed)", () => {
  const schema = (edit) => codes(run({ c: contract(edit) }));
  test("tuples-missing-or-empty: empty", () => expect(schema((c) => ((c.tuples = []), c))).toContain("tuples-missing-or-empty"));
  test("tuples-missing-or-empty: omitted", () => expect(schema((c) => (delete c.tuples, c))).toContain("tuples-missing-or-empty"));
  test("required-tuple-missing: J2 omitted", () => {
    const res = schema((c) => ((c.tuples = c.tuples.filter((t) => t.id !== "J2")), c));
    expect(res).toContain("required-tuple-missing");
  });
  test("required-tuple-missing: J1 omitted", () => {
    expect(schema((c) => ((c.tuples = c.tuples.filter((t) => t.id !== "J1")), c))).toContain("required-tuple-missing");
  });
  test("duplicate-tuple-id", () => expect(schema((c) => (c.tuples.push({ ...c.tuples[0] }), c))).toContain("duplicate-tuple-id"));
  test("mapping-missing: a required tuple has no mapping row", () => {
    expect(schema((c) => ((c.mapping = c.mapping.filter((m) => m.tuple !== "J2")), c))).toContain("mapping-missing");
  });
  test("mapping-missing: an empty requirement list", () => expect(schema((c) => ((c.mapping[0].requirements = []), c))).toContain("mapping-missing"));
  test("dor-coverage-missing: a required DoR condition is not covered", () => {
    expect(schema((c) => ((c.dorDod = c.dorDod.filter((d) => d.dor !== "SV3-DOR-04")), c))).toContain("dor-coverage-missing");
  });
  test("dor-coverage-missing: the contract cannot shrink the required set", () => {
    expect(schema((c) => ((c.dorDod = [c.dorDod[0]]), (c.requiredDor = ["SV3-DOR-01"]), c))).toContain("dor-coverage-missing");
  });
  test("dor-coverage-missing: a DoR row with no DoD obligation", () => expect(schema((c) => ((c.dorDod[0].dod = []), c))).toContain("dor-coverage-missing"));
  test("dod-undefined: a reference to an undefined DoD obligation", () => {
    expect(schema((c) => ((c.dorDod[1].dod = ["SV3-DOD-99"]), c))).toContain("dod-undefined");
  });
  test("evidence-class-missing", () => expect(schema((c) => ((c.dod[0].evidenceClass = ""), c))).toContain("evidence-class-missing"));
  test("duplicate-dod-id: an identical definition repeated under the same ID", () => {
    const res = run({ c: contract((c) => (c.dod.push({ ...c.dod[0] }), c)) });
    const dup = res.results.filter((r) => r.code === "duplicate-dod-id");
    expect(dup.map((r) => r.subject)).toEqual(["SV3-DOD-01"]);
    expect(res.outcome).toBe("fail");
    expect(res.results.every((r) => r.rule === "schema")).toBe(true);
  });
  test("duplicate-dod-id: conflicting definitions under the same ID", () => {
    const res = run({ c: contract((c) => (c.dod.push({ id: "SV3-DOD-02", condition: "a different condition", evidenceClass: "another class" }), c)) });
    const dup = res.results.filter((r) => r.code === "duplicate-dod-id");
    expect(dup.map((r) => r.subject)).toEqual(["SV3-DOD-02"]);
    expect(res.outcome).toBe("fail");
    expect(res.results.every((r) => r.rule === "schema")).toBe(true);
  });
  test("unique DoD definition IDs raise no duplicate-dod-id", () => {
    expect(schemaFindings(JSON.parse(contract().match(/```json sv-dor-contract\n([\s\S]*?)\n```/)[1])).filter((f) => f.code === "duplicate-dod-id")).toEqual([]);
  });
  test("duplicate-dor", () => expect(schema((c) => (c.dorDod.push({ ...c.dorDod[0] }), c))).toContain("duplicate-dor"));
  test("scope-empty", () => expect(schema((c) => ((c.tuples[0].scopeClause = "  "), c))).toContain("scope-empty"));
  test("a schema failure evaluates no predicate", () => {
    const res = run({ c: contract((c) => ((c.tuples = []), c)) });
    expect(res.results.every((r) => r.rule === "schema")).toBe(true);
    expect(res.outcome).toBe("fail");
  });
});

describe("validate-dor: SV3-DOR-01 identity (V2: full path, exact scope clause, independent tuples)", () => {
  test("entry-absent-at-commit", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].registerCommit = C0), c)) }))).toContain("entry-absent-at-commit");
  });
  test("entry-object-mismatch: the same basename in the wrong directory", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].registeredObjectPath = "C:/Fixture/outputs/other/SUP-MAP.md"), c)) }))).toContain("entry-object-mismatch");
  });
  test("a relocated retained copy keeps the registered identity when its bytes match", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].retainedObjectFile = join(ROOT, "retained", "copy-a.md")), c)) }))).toEqual([]);
  });
  test("object-hash-mismatch: J2 bound to J1's object hash (substitution)", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[1].objectSha256 = H1), c)) }))).toContain("object-hash-mismatch");
  });
  test("entry-object-mismatch: J1 authority used for J2's object (crossed authority)", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[1].entry = "D-900"), c)) }))).toContain("entry-object-mismatch");
  });
  test("entry-object-mismatch: J2's registered path offered under J1", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].registeredObjectPath = P2), c)) }))).toContain("entry-object-mismatch");
  });
  test("scope-mismatch: an incomplete clause", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].scopeClause = "This unit only."), c)) }))).toContain("scope-mismatch");
  });
  test("scope-mismatch: unrelated text from elsewhere in the entry", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].scopeClause = "Synthetic; the same words appear for every entry."), c)) }))).toContain("scope-mismatch");
  });
  test("scope-mismatch: J2's clause offered under J1", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].scopeClause = S2), c)) }))).toContain("scope-mismatch");
  });
  test("object-bytes-mismatch: the retained copy holds other bytes", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].retainedObjectFile = join(ROOT, "retained", "copy-b.md")), c)) }))).toContain("object-bytes-mismatch");
  });
  test("object-bytes-mismatch: the retained copy is absent", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].retainedObjectFile = join(ROOT, "retained", "none.md")), c)) }))).toContain("object-bytes-mismatch");
  });
  test("review-missing", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.rows = r.rows.filter((x) => x.row !== "SV3-DOR-01")), r) }))).toContain("review-missing");
  });
  test("review-missing: no review file", () => expect(codes(run({ noReview: true }))).toContain("review-missing"));
  test("review-stale: the review targets other bytes", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.target.sha256 = "0".repeat(64)), r) }))).toContain("review-stale");
  });
  test("review-rejected", () => expect(codes(run({ reviewEdit: (r) => ((r.rows[0].verdict = "Reject"), r) }))).toContain("review-rejected"));
  test("review-rejected: open conditions", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.rows[0].verdict = "Approve-with-conditions"), (r.rows[0].conditions = [{ status: "open" }]), r) }))).toContain("review-rejected");
  });
  test("review-wrong-scope", () => expect(codes(run({ reviewEdit: (r) => ((r.rows[0].scope = "mapping"), r) }))).toContain("review-wrong-scope"));
  test("review-wrong-scope: a U2 review cited for U1", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.u1Review.scope = "U2 filing"), r) }))).toContain("review-wrong-scope");
  });
  test("review-stale: the U1 review names another commit", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.u1Review.commit = C0), r) }))).toContain("review-stale");
  });
});

describe("validate-dor: SV3-DOR-02 mapping refusals", () => {
  test("requirement-absent", () => {
    expect(codes(run({ c: contract((c) => ((c.mapping[0].requirements = ["AIG-09.R9"]), c)) }))).toContain("requirement-absent");
  });
  test("mapping-unknown-tuple", () => {
    expect(codes(run({ c: contract((c) => (c.mapping.push({ tuple: "J9", requirements: ["AIG-02.R1"] }), c)) }))).toContain("mapping-unknown-tuple");
  });
  test("inline-id-required", () => expect(codes(run({ c: contract((c) => ((c.inlineIdRequired = true), c)) }))).toContain("inline-id-required"));
});

describe("validate-dor: SV3-DOR-03 tier refusals", () => {
  test("tier-sweep-fail", () => {
    const c = contract();
    expect(codes(run({ c, log: logText(c, false) }))).toContain("tier-sweep-fail");
  });
  test("check-log-stale: the log binds other bytes", () => expect(codes(run({ log: logText("other bytes") }))).toContain("check-log-stale"));
  test("check-log-missing", () => expect(codes(run({ log: null }))).toContain("check-log-missing"));
  test("unaffected-without-reason", () => {
    const res = run({ c: contract((c) => (c.tuples.push(tuple("J3", "D-903", P3, H3, "This unit only. Excluded: supplement a and supplement b entirely.", "copy-c.md")), c)) });
    expect(res.results.find((x) => x.rule === "dor-tiers" && x.subject === "J3").code).toBe("unaffected-without-reason");
  });
  test("tier-table-missing", () => {
    const res = run({ c: contract((c) => (c.tuples.push(tuple("J4", "D-902", P1, H1, S1, "copy-a.md")), c)) });
    expect(res.results.find((x) => x.rule === "dor-tiers" && x.subject === "J4").code).toBe("tier-table-missing");
  });
});

describe("validate-dor: SV3-DOR-04 boundary refusals", () => {
  test("expected-bytes-rule-absent", () => {
    expect(codes(run({ c: contract((c) => ((c.boundaries.expectedBytesRule.phrase = "absent phrase"), c)) }))).toContain("expected-bytes-rule-absent");
  });
  test("exception-text-mismatch", () => {
    expect(codes(run({ c: contract((c) => ((c.boundaries.checkExceptions.sha256 = "0".repeat(64)), c)) }))).toContain("exception-text-mismatch");
  });
  test("binding-list-drift", () => expect(codes(run({ c: contract((c) => (c.boundaries.bindings.fields.pop(), c)) }))).toContain("binding-list-drift"));
  test("role-mismatch", () => {
    expect(codes(run({ c: contract((c) => ((c.boundaries.roles.phrases = ["Lane A writes U6."]), c)) }))).toContain("role-mismatch");
  });
  test("t2-t3-not-adopted", () => expect(codes(run({ c: contract((c) => ((c.boundaries.t2t3.decision = "D-999"), c)) }))).toContain("t2-t3-not-adopted"));
});

describe("validate-dor: SV3-DOR-05 structure refusals", () => {
  test("template-hash-mismatch", () => expect(codes(run({ c: contract((c) => ((c.template.sha256 = "0".repeat(64)), c)) }))).toContain("template-hash-mismatch"));
  test("backdated-state: a state above proposed without evidence", () => {
    expect(codes(run({ c: contract((c) => ((c.states[0].state = "tested"), c)) }))).toContain("backdated-state");
  });
  test("result-file-present", () => {
    mkdirSync(join(REPO, "docs/results/sv-900"), { recursive: true });
    try {
      expect(codes(run())).toContain("result-file-present");
    } finally {
      rmSync(join(REPO, "docs/results"), { recursive: true, force: true });
    }
  });
});


describe("validate-dor: B2 snapshotSource field extraction", () => {
  test("the real return shape: nested call arguments are part of the value", () => {
    expect(snapshotFields(GUARD)).toEqual(["branch", "config", "head", "origin", "refs", "root", "upstream"]);
  });
  test("nested delimiters and strings do not split fields", () => {
    const src = "export function snapshotSource(r) {\n  return { ok: true, a: f(x, [1, 2], { y: \"p,q\" }), b, c: 'x:y, z', d: \`t,{\` };\n}\n";
    expect(snapshotFields(src)).toEqual(["a", "b", "c", "d"]);
  });
  test("top-level splitting respects brackets and strings", () => {
    expect(splitTopLevel("a, f(b, c), \"d,e\", [g, h]")).toEqual(["a", " f(b, c)", " \"d,e\"", " [g, h]"]);
    expect(splitTopLevel("a, f(b")).toBeNull();
  });
  test("malformed input fails closed", () => {
    expect(snapshotFields("export function snapshotSource(r) {\n  return { ok: true, a: f(x, [1, 2 };\n}\n")).toBeNull();
    expect(snapshotFields("export function snapshotSource(r) {\n  return { ok: true, a: \"unterminated };\n}\n")).toBeNull();
    expect(snapshotFields("export function snapshotSource(r) {\n  return { ok: true, ...spread };\n}\n")).toBeNull();
    expect(snapshotFields("export function snapshotSource(r) {\n  return { ok: true, a };\n  return { ok: true, b };\n}\n")).toBeNull();
    expect(snapshotFields("export function other(r) {\n  return { ok: true, a };\n}\n")).toBeNull();
  });
  test("binding-source-unparsed: an unparseable guard is refused, not guessed", () => {
    expect(codes(run({ c: contract((c) => ((c.boundaries.bindings.source = "docs/rules.md"), c)) }))).toContain("binding-source-unparsed");
  });
  test("binding-list-drift: a field the guard does not return (missing from the guard)", () => {
    expect(codes(run({ c: contract((c) => (c.boundaries.bindings.fields.push("extra"), c)) }))).toContain("binding-list-drift");
  });
  test("binding-list-drift: a guard field the contract omits (extra in the guard)", () => {
    expect(codes(run({ c: contract((c) => ((c.boundaries.bindings.fields = c.boundaries.bindings.fields.filter((f) => f !== "config")), c)) }))).toContain("binding-list-drift");
  });
});

describe("validate-dor: B1 tier clarification", () => {
  const withJ4 = (edit = (x) => x) => contract((c) => {
    c.tuples[0] = tuple("J1", "D-904", P4, H4, S4, "copy-d.md");
    c.tierClarifications = [edit({ tuple: "J1", entry: "D-904", decision: "D-905", rowLabel: ROW4, reason: REASON4 })];
    return c;
  });
  const tier = (res, id = "J1") => res.results.find((x) => x.rule === "dor-tiers" && x.subject === id);
  test("a reasonless row with a bound clarification passes, and the clarification read is in the inventory", () => {
    const res = run({ c: withJ4() });
    expect(codes(res)).toEqual([]);
    expect(res.outcome).toBe("pass");
    const item = res.inputs.find((x) => x.role === "clarification@J1");
    expect(item).toMatchObject({ kind: "git", path: REG, commit: C2, blob: git("rev-parse", `${C2}:${REG}`) });
    expect(item.sha256).toBe(sha256(execFileSync("git", ["-C", REPO, "show", `${C2}:${REG}`])));
  });
  test("the historical registration stays bound to its own revision", () => {
    const res = run({ c: withJ4() });
    expect(res.inputs.find((x) => x.role === "register@J1").commit).toBe(C1);
  });
  test("unaffected-without-reason: no clarification supplied", () => {
    expect(tier(run({ c: contract((c) => ((c.tuples[0] = tuple("J1", "D-904", P4, H4, S4, "copy-d.md")), c)) })).code).toBe("unaffected-without-reason");
  });
  test("tier-clarification-unbound: the clarification names another entry", () => {
    expect(tier(run({ c: withJ4((x) => ({ ...x, entry: "D-900" })) })).code).toBe("tier-clarification-unbound");
  });
  test("tier-clarification-unbound: the recorded reason differs", () => {
    expect(tier(run({ c: withJ4((x) => ({ ...x, reason: "Some other reason." })) })).code).toBe("tier-clarification-unbound");
  });
  test("tier-clarification-unbound: the cited decision is absent at HEAD", () => {
    expect(tier(run({ c: withJ4((x) => ({ ...x, decision: "D-999" })) })).code).toBe("tier-clarification-unbound");
  });
  test("tier-clarification-unbound: an arbitrary citation (a decision with no binding row)", () => {
    expect(tier(run({ c: withJ4((x) => ({ ...x, decision: "D-902" })) })).code).toBe("tier-clarification-unbound");
  });
  test("blanket exception: a wildcard row label resolves nothing and is itself refused", () => {
    const res = run({ c: withJ4((x) => ({ ...x, rowLabel: "*" })) });
    expect(tier(res).code).toBe("unaffected-without-reason");
    expect(codes(res)).toContain("tier-clarification-unused");
  });
  test("schema-missing-field: an incomplete clarification", () => {
    expect(codes(run({ c: withJ4((x) => ({ ...x, reason: "" })) }))).toContain("schema-missing-field");
  });
});

describe("validate-dor: V3 receipt binds every consumed input", () => {
  test("the inventory lists each input with role, revision and observed hash; historical and HEAD reads stay distinct", () => {
    const c = contract();
    put(CONTRACT_PATH, c); // an authorized new file: untracked, absent at HEAD
    const rv = join(ROOT, "receipt-review.json");
    const lg = join(ROOT, "receipt-check.log");
    const out = join(ROOT, "receipt.json");
    writeFileSync(rv, JSON.stringify(reviewObject(c)));
    writeFileSync(lg, logText(c));
    try {
      const code = main(["--repo", REPO, "--contract", CONTRACT_PATH, "--review", rv, "--check-log", lg, "--out", out]);
      const r = JSON.parse(readFileSync(out, "utf8"));
      expect(code).toBe(0);
      expect(r.outcome).toBe("pass");
      expect(r.head).toBe(C2);
      const by = (role) => r.inputs.find((x) => x.role === role);
      const blob = (rev, p) => git("rev-parse", `${rev}:${p}`);
      const blobSha = (rev, p) => sha256(execFileSync("git", ["-C", REPO, "show", `${rev}:${p}`]));

      expect(by("contract")).toEqual({ role: "contract", kind: "working", path: CONTRACT_PATH, commit: C2, blob: "absent-at-HEAD", sha256: sha256(c), differsFromHead: true });
      // Two revisions of the same path, recorded separately and correctly.
      expect(by("register@J1")).toEqual({ role: "register@J1", kind: "git", path: REG, commit: C1, blob: blob(C1, REG), sha256: blobSha(C1, REG) });
      expect(by("register@J2")).toEqual({ role: "register@J2", kind: "git", path: REG, commit: C1, blob: blob(C1, REG), sha256: blobSha(C1, REG) });
      expect(by("register@HEAD")).toEqual({ role: "register@HEAD", kind: "git", path: REG, commit: C2, blob: blob(C2, REG), sha256: blobSha(C2, REG) });
      expect(by("register@J1").sha256).not.toBe(by("register@HEAD").sha256);
      for (const [role, p] of [["requirement-source@HEAD", "docs/fn.md"], ["guard-source@HEAD", "scripts/guard.mjs"], ["template@HEAD", "docs/template.md"], ["expected-bytes-rule@HEAD", "docs/rules.md"]]) {
        expect(by(role)).toEqual({ role, kind: "git", path: p, commit: C2, blob: blob(C2, p), sha256: blobSha(C2, p) });
      }
      // External files: observed byte hashes.
      expect(by("object@J1")).toEqual({ role: "object@J1", kind: "file", path: join(ROOT, "retained", "copy-a.md"), sha256: H1 });
      expect(by("object@J2")).toEqual({ role: "object@J2", kind: "file", path: join(ROOT, "retained", "copy-b.md"), sha256: H2 });
      expect(by("check-exceptions")).toEqual({ role: "check-exceptions", kind: "file", path: join(ROOT, "exceptions.txt"), sha256: sha256(EXC) });
      expect(by("review")).toEqual({ role: "review", kind: "file", path: rv, sha256: sha256(readFileSync(rv)) });
      expect(by("check-log")).toEqual({ role: "check-log", kind: "file", path: lg, sha256: sha256(readFileSync(lg)) });
      expect(r.inputs.map((x) => x.role).sort()).toEqual([
        "check-exceptions", "check-log", "contract", "expected-bytes-rule@HEAD", "guard-source@HEAD", "object@J1", "object@J2",
        "register@HEAD", "register@J1", "register@J2", "requirement-source@HEAD", "review", "template@HEAD",
      ]);
      // The validator's own revision and bytes.
      expect(r.validator.sha256).toBe(sha256(readFileSync(new URL("./validate-dor.mjs", import.meta.url))));
      expect(r.validator.blob).toBe("outside-repo"); // the fixture repository does not contain the validator
      expect(r.normalization).toContain("exact bytes read");
      expect(r.meaning).toContain("no commit, push or release authority");
    } finally {
      rmSync(join(REPO, CONTRACT_PATH), { force: true });
      rmSync(out, { force: true });
    }
  });
  test("an absent input is recorded as absent, not given an invented hash", () => {
    const res = run({ noReview: true });
    expect(res.inputs.find((x) => x.role === "review")).toEqual({ role: "review", kind: "file", path: join(ROOT, "absent.json"), sha256: null, absent: "file absent" });
  });
});
