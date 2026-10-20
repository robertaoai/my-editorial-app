// `D-446` U-V selftest for `scripts/dor/validate-dor.mjs`.
//
// Every fixture is SYNTHETIC: a throwaway Git repository in the OS temp directory, with invented decisions
// (`D-900`, `D-901`, `D-902`), invented objects and an invented review. No fixture is a real Judge act or a real
// registration, and nothing here reads or writes the live repository. A positive case passes first; each named
// refusal must produce exactly its code.

import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { readFileSync } from "node:fs";
import { entrySection, evaluate, main, parseContract, sha256, snapshotFields, unaffectedWithoutReason } from "./validate-dor.mjs";

let ROOT;
let REPO;
let C0; // commit before the entries exist
let C1; // commit with the entries
const OBJ1 = "supplement-a object bytes\n";
const OBJ2 = "supplement-b object bytes\n";
const H1 = sha256(OBJ1);
const H2 = sha256(OBJ2);
const OBJ3 = "supplement-c object bytes\n";
const H3 = sha256(OBJ3);
const EXC = "item 6 check exceptions text\n";
const TPL = "# template v1 (synthetic)\n";
const T2 = "Confirm that every bound ref other than the source branch remains unchanged.";
const T3 = "the independent reviewer runs publicationSourceFindings read-only and stops on any finding.";
const CONTRACT_PATH = "docs/attempts/SV-900.md";

const git = (...a) => execFileSync("git", ["-C", REPO, ...a], { encoding: "utf8" }).trim();
const put = (rel, text) => {
  mkdirSync(join(REPO, rel, ".."), { recursive: true });
  writeFileSync(join(REPO, rel), text);
};
const entry = (id, objName, hash, scope) => `## 5.1 \`${id}\` — Synthetic approval record

The object is \`…/${objName}\` (SHA-256 \`${hash}\`).

1. **Action.** Synthetic.
2. **Scope and exclusions.** ${scope}

### Tier applicability (\`D-54\`)

| Tier | Disposition |
|---|---|
| **Register** | ✅ this entry |
| **Build Spec** | — unaffected: no artifact created |
`;

beforeAll(() => {
  ROOT = mkdtempSync(join(tmpdir(), "validate-dor-"));
  REPO = join(ROOT, "repo");
  mkdirSync(REPO);
  execFileSync("git", ["init", "-q", "-b", "main", REPO]);
  git("config", "user.email", "fixture@example.invalid");
  git("config", "user.name", "fixture");
  put("docs/v1/V1-DECISION-REGISTER.md", "# Register (synthetic)\n\nLane B writes its own U6 and U7 records.\n\n");
  put("docs/fn.md", "| `AIG-02.R1` | channel |\n| `AIG-05.R2` | approve is not permission |\n");
  put("scripts/guard.mjs", "export function snapshotSource(repo) {\n  return { ok: true, root: repo, head, branch, origin, refs, upstream, config: x };\n}\n");
  put("docs/template.md", TPL);
  put("docs/rules.md", "the committed blob equals the expected bytes\n");
  git("add", "-A");
  git("commit", "-q", "-m", "c0");
  C0 = git("rev-parse", "HEAD");
  const reg = "# Register (synthetic)\n\nLane B writes its own U6 and U7 records.\n\n"
    + entry("D-900", "SUP-A.md", H1, "This unit only. Excluded: supplement b.")
    + entry("D-901", "SUP-B.md", H2, "This unit only. Excluded: supplement a.")
    + entry("D-903", "SUP-C.md", H3, "This unit only.").replace("— unaffected: no artifact created", "— unaffected")
    + `## 5.3 \`D-902\` — Synthetic boundary adoption\n\n3. **T2.** "${T2}"\n4. **T3.** Before writing, ${T3}\n`;
  put("docs/v1/V1-DECISION-REGISTER.md", reg);
  git("add", "-A");
  git("commit", "-q", "-m", "c1");
  C1 = git("rev-parse", "HEAD");
  writeFileSync(join(ROOT, "SUP-A.md"), OBJ1);
  writeFileSync(join(ROOT, "SUP-B.md"), OBJ2);
  writeFileSync(join(ROOT, "SUP-C.md"), OBJ3);
  writeFileSync(join(ROOT, "exceptions.txt"), EXC);
});
afterAll(() => rmSync(ROOT, { recursive: true, force: true }));

/** A valid contract; `edit` mutates the parsed object before it is serialized. */
function contract(edit = (c) => c) {
  const c = {
    kind: "sv-dor-contract",
    version: 1,
    attempt: "SV-900",
    contractRevision: "r1",
    template: { path: "docs/template.md", sha256: sha256(TPL) },
    requirementSource: "docs/fn.md",
    tuples: [
      { id: "J1", entry: "D-900", registerCommit: C1, objectPath: "x/SUP-A.md", objectSha256: H1, scopeQuote: "This unit only. Excluded: supplement b.", objectFile: join(ROOT, "SUP-A.md") },
      { id: "J2", entry: "D-901", registerCommit: C1, objectPath: "x/SUP-B.md", objectSha256: H2, scopeQuote: "This unit only. Excluded: supplement a.", objectFile: join(ROOT, "SUP-B.md") },
    ],
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
    dorDod: [
      { dor: "SV3-DOR-01", dod: ["SV3-DOD-03"], evidenceClass: "documentary" },
      { dor: "SV3-DOR-02", dod: ["SV3-DOD-01"], evidenceClass: "mapping" },
    ],
    states: [{ item: "SV3-DOD-03", state: "proposed" }],
    resultRoot: "docs/results/sv-900",
  };
  return "# SV-900 (synthetic)\n\n```json sv-dor-contract\n" + JSON.stringify(edit(c), null, 2) + "\n```\n";
}
function review(text, edit = (r) => r) {
  const rows = [];
  for (const t of ["J1", "J2"]) {
    rows.push({ row: "SV3-DOR-01", tuple: t, scope: "identity", verdict: "Approve", conditions: [] });
    rows.push({ row: "SV3-DOR-02", tuple: t, scope: "mapping", verdict: "Approve", conditions: [] });
    rows.push({ row: "SV3-DOR-03", tuple: t, scope: "tiers", verdict: "Approve", conditions: [] });
  }
  return edit({
    kind: "sv-dor-review", reviewer: "Lane B (synthetic)", target: { path: CONTRACT_PATH, sha256: sha256(text) }, rows,
    u1Review: { commit: C1, scope: "U1 registration", verdict: "Approve", conditions: [] },
  });
}
const log = (text, tierPass = true) => `HEAD ${git("rev-parse", "HEAD")}\nworking sha256 ${sha256(text)}\n---\n  ${tierPass ? "PASS" : "FAIL"}  tier-sweep  ok\n`;
function run({ c = contract(), r, l, reviewEdit } = {}) {
  const rv = r === undefined ? review(c, reviewEdit) : r;
  return evaluate({ repo: REPO, contractPath: CONTRACT_PATH, contractText: c, review: rv, checkLog: l === undefined ? log(c) : l });
}
const codes = (res) => res.results.filter((x) => !x.ok).map((x) => x.code);

describe("validate-dor: helpers", () => {
  test("the contract block parses; a missing block is reported", () => {
    expect(parseContract(contract()).contract.attempt).toBe("SV-900");
    expect(parseContract("# none").error).toContain("no `json sv-dor-contract` block");
  });
  test("an entry section runs from its heading to the next heading", () => {
    const sec = entrySection(execFileSync("git", ["-C", REPO, "show", `${C1}:docs/v1/V1-DECISION-REGISTER.md`], { encoding: "utf8" }), "D-900");
    expect(sec).toContain(H1);
    expect(sec).not.toContain(H2);
  });
  test("an unaffected row without a reason is found; one with a reason is not", () => {
    expect(unaffectedWithoutReason("### Tier applicability\n| a | b |\n|---|---|\n| x | — unaffected: reason |\n")).toEqual([]);
    expect(unaffectedWithoutReason("### Tier applicability\n| a | b |\n|---|---|\n| x | — unaffected |\n").length).toBe(1);
  });
  test("snapshotSource fields are read from the guard source", () => {
    expect(snapshotFields("export function snapshotSource(r) {\n  return { ok: true, head, branch };\n}\n")).toEqual(["branch", "head"]);
  });
});

describe("validate-dor: positive case", () => {
  test("shared context with distinct valid J1/J2 bindings passes (F3)", () => {
    const res = run();
    expect(codes(res)).toEqual([]);
    expect(res.outcome).toBe("pass");
  });
});

describe("validate-dor: receipt", () => {
  test("a new contract absent from HEAD is recorded as absent-at-HEAD; the receipt binds every input hash", () => {
    const c = contract();
    put(CONTRACT_PATH, c); // untracked working file, never committed to the fixture repository
    const rv = join(ROOT, "review.json");
    const lg = join(ROOT, "check.log");
    const out = join(ROOT, "receipt.json");
    writeFileSync(rv, JSON.stringify(review(c)));
    writeFileSync(lg, log(c));
    try {
      const code = main(["--repo", REPO, "--contract", CONTRACT_PATH, "--review", rv, "--check-log", lg, "--out", out]);
      const r = JSON.parse(readFileSync(out, "utf8"));
      expect(code).toBe(0);
      expect(r.outcome).toBe("pass");
      expect(r.head).toBe(git("rev-parse", "HEAD"));
      expect(r.inputs[0]).toEqual({ path: CONTRACT_PATH, workingSha256: sha256(c), headBlob: "absent-at-HEAD", differsFromHead: true });
      expect(r.externalInputs.map((x) => x.sha256)).toEqual([sha256(readFileSync(rv)), sha256(readFileSync(lg))]);
      expect(r.validator.sha256).toMatch(/^[0-9a-f]{64}$/);
      expect(r.meaning).toContain("no commit, push or release authority");
    } finally {
      rmSync(join(REPO, CONTRACT_PATH), { force: true });
      rmSync(out, { force: true });
    }
  });
});

describe("validate-dor: SV3-DOR-01 identity refusals", () => {
  test("entry-absent-at-commit", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].registerCommit = C0), c)) }))).toContain("entry-absent-at-commit");
  });
  test("object-hash-mismatch: J2 bound to J1's object hash (substitution)", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[1].objectSha256 = H1), c)) }))).toContain("object-hash-mismatch");
  });
  test("entry-object-mismatch: J1 authority used for J2's object (crossed authority)", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[1].entry = "D-900"), c)) }))).toContain("entry-object-mismatch");
  });
  test("scope-mismatch", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].scopeQuote = "All units."), c)) }))).toContain("scope-mismatch");
  });
  test("object-bytes-mismatch", () => {
    expect(codes(run({ c: contract((c) => ((c.tuples[0].objectFile = join(ROOT, "SUP-B.md")), c)) }))).toContain("object-bytes-mismatch");
  });
  test("review-missing", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.rows = r.rows.filter((x) => x.row !== "SV3-DOR-01")), r) }))).toContain("review-missing");
  });
  test("review-stale: the review targets other bytes", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.target.sha256 = "0".repeat(64)), r) }))).toContain("review-stale");
  });
  test("review-rejected", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.rows[0].verdict = "Reject"), r) }))).toContain("review-rejected");
  });
  test("review-rejected: open conditions", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.rows[0].verdict = "Approve-with-conditions"), (r.rows[0].conditions = [{ status: "open" }]), r) }))).toContain("review-rejected");
  });
  test("review-wrong-scope", () => {
    expect(codes(run({ reviewEdit: (r) => ((r.rows[0].scope = "mapping"), r) }))).toContain("review-wrong-scope");
  });
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
  test("inline-id-required", () => {
    expect(codes(run({ c: contract((c) => ((c.inlineIdRequired = true), c)) }))).toContain("inline-id-required");
  });
});

describe("validate-dor: SV3-DOR-03 tier refusals", () => {
  test("tier-sweep-fail", () => {
    const c = contract();
    expect(codes(run({ c, l: log(c, false) }))).toContain("tier-sweep-fail");
  });
  test("check-log-stale: the log binds other bytes", () => {
    expect(codes(run({ l: log("other bytes") }))).toContain("check-log-stale");
  });
  test("check-log-missing", () => {
    expect(codes(run({ l: null }))).toContain("check-log-missing");
  });
  test("unaffected-without-reason", () => {
    const res = run({ c: contract((c) => (c.tuples.push({ id: "J3", entry: "D-903", registerCommit: C1, objectPath: "x/SUP-C.md", objectSha256: H3, scopeQuote: "This unit only.", objectFile: join(ROOT, "SUP-C.md") }), c)) });
    expect(res.results.find((x) => x.rule === "dor-tiers" && x.subject === "J3").code).toBe("unaffected-without-reason");
  });
  test("tier-table-missing", () => {
    const res = run({ c: contract((c) => (c.tuples.push({ id: "J4", entry: "D-902", registerCommit: C1, objectPath: "x/none.md", objectSha256: H1, scopeQuote: "x", objectFile: join(ROOT, "SUP-A.md") }), c)) });
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
  test("binding-list-drift", () => {
    expect(codes(run({ c: contract((c) => (c.boundaries.bindings.fields.pop(), c)) }))).toContain("binding-list-drift");
  });
  test("role-mismatch", () => {
    expect(codes(run({ c: contract((c) => ((c.boundaries.roles.phrases = ["Lane A writes U6."]), c)) }))).toContain("role-mismatch");
  });
  test("t2-t3-not-adopted", () => {
    expect(codes(run({ c: contract((c) => ((c.boundaries.t2t3.decision = "D-999"), c)) }))).toContain("t2-t3-not-adopted");
  });
});

describe("validate-dor: SV3-DOR-05 structure refusals", () => {
  test("template-hash-mismatch", () => {
    expect(codes(run({ c: contract((c) => ((c.template.sha256 = "0".repeat(64)), c)) }))).toContain("template-hash-mismatch");
  });
  test("unmapped-dor", () => {
    expect(codes(run({ c: contract((c) => ((c.dorDod[0].dod = []), c)) }))).toContain("unmapped-dor");
  });
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
