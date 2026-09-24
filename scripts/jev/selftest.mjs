// Jev System One — the proof that it can FAIL (`D-259`).
//
// Every case builds a throwaway repository in the OS temp directory — never
// the working tree, so unlike `scripts/fixtures/` it needs no clean-tree guard
// and cannot damage anything — then asserts the NAMED rule fires. A positive
// case must pass first; a negative case that passes is a check that cannot
// fail, which is the failure this file exists to catch.
//
// Run with `bun run jev:selftest`.

import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { completion, readiness, sha256 } from "./lib.mjs";

const SOURCE = `| ID | FR | Given | When | Then |
|---|---|---|---|---|
| \`AC-01\` | FR-01 | A record | It is logged | One row exists |
| \`AC-09\` \`[decided_target_held]\` | FR-09 | A held target | It runs | Nothing |
`;

const PACKET = (map, dor = "- [x] `DOR-R1` — contract") => `# Packet

${dor}

| DoR row | DoD obligation | Evidence class |
|---|---|---|
${map}

## DoD checklist

- [ ] **Acceptance cases:** \`AC-01\` passes
- [ ] **Refusal and replay:** duplicates refused
- [ ] **Independent verification:** a non-builder confirms

## Owner
`;

const GOOD_MAP = "| `DOR-R1` | Acceptance cases; Refusal and replay | Integration evidence |";
const row = SOURCE.split("\n")[2].trim();

const MANIFEST = (over = {}) => ({
  packet: "P-1",
  packetPath: "packet.md",
  acceptanceObligation: "Acceptance cases",
  dorRows: ["DOR-R1"],
  behaviours: [{ id: "AC-01", source: "source.md", dod: "Acceptance cases", rowHash: sha256(row) }],
  negativeRequired: ["Refusal and replay"],
  failingFirstRequired: ["Acceptance cases"],
  completionExempt: ["Independent verification"],
  ...over,
});

function repo(files) {
  const root = mkdtempSync(join(tmpdir(), "jev-"));
  const run = (...a) => execFileSync("git", a, { cwd: root, stdio: "ignore" });
  run("init", "-q");
  run("config", "user.email", "jev@selftest.invalid");
  run("config", "user.name", "jev-selftest");
  for (const [p, c] of Object.entries(files)) {
    mkdirSync(dirname(join(root, p)), { recursive: true });
    writeFileSync(join(root, p), typeof c === "string" ? c : JSON.stringify(c, null, 2));
  }
  run("add", "-A");
  run("commit", "-q", "-m", "fixture");
  const head = execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim();
  return { root, head, run };
}

const base = (over = {}) => ({ "source.md": SOURCE, "packet.md": PACKET(GOOD_MAP), "m.json": MANIFEST(), ...over });

let failures = 0;
function expect(name, receipt, rule) {
  const fired = receipt.results.filter((r) => !r.ok).map((r) => r.rule);
  const ok = rule === null ? fired.length === 0 : fired.includes(rule);
  if (!ok) failures++;
  console.log(`  ${ok ? "PASS" : "MISS"}  ${name}${ok ? "" : ` — fired: [${fired.join(", ")}]`}`);
}

function withRepo(files, fn) {
  const r = repo(files);
  try {
    fn(r);
  } finally {
    rmSync(r.root, { recursive: true, force: true });
  }
}

console.log("readiness");
withRepo(base(), ({ root }) => expect("positive fixture passes", readiness(root, "m.json"), null));
withRepo(base({ "packet.md": PACKET(GOOD_MAP, "") }), ({ root }) =>
  expect("missing DoR checkbox", readiness(root, "m.json"), "dor-row-present"));
withRepo(base({ "packet.md": PACKET("") }), ({ root }) =>
  expect("DoR row absent from the map", readiness(root, "m.json"), "dor-maps-once"));
withRepo(base({ "packet.md": PACKET(`${GOOD_MAP}\n${GOOD_MAP}`) }), ({ root }) =>
  expect("DoR row mapped twice", readiness(root, "m.json"), "dor-maps-once"));
withRepo(base({ "packet.md": PACKET("| `DOR-R1` | No such obligation | Integration evidence |") }), ({ root }) =>
  expect("map names an unknown DoD obligation", readiness(root, "m.json"), "dor-maps-to-dod"));
withRepo(base({ "packet.md": PACKET("| `DOR-R1` | Acceptance cases |  |") }), ({ root }) =>
  expect("evidence class left empty", readiness(root, "m.json"), "evidence-class-named"));
withRepo(base({ "source.md": SOURCE.replace("It is logged", "") }), ({ root }) =>
  expect("empty When cell", readiness(root, "m.json"), "gwt-complete"));
withRepo(base({ "source.md": SOURCE.replace("One row exists", "Two rows exist") }), ({ root }) =>
  expect("source row edited after pinning", readiness(root, "m.json"), "row-pinned"));
withRepo(base({ "source.md": SOURCE.replace("| `AC-01`", "| `AC-01x`") }), ({ root }) =>
  expect("pinned ID missing from source", readiness(root, "m.json"), "row-unique"));
withRepo(
  base({ "m.json": MANIFEST({ behaviours: [...MANIFEST().behaviours, { id: "AC-09", source: "source.md", dod: "Acceptance cases", rowHash: sha256(SOURCE.split("\n")[3].trim()) }] }) }),
  ({ root }) => {
    const r = readiness(root, "m.json");
    expect("held source row without a Judge disposition", r, "row-in-scope");
    expect("ID pinned but not listed in the packet's DoD", r, "scope-authorized");
  },
);
withRepo(base({ "packet.md": PACKET(GOOD_MAP).replace("`AC-01` passes", "`AC-01`, `AC-02` pass") }), ({ root }) =>
  expect("ID listed in DoD but never pinned", readiness(root, "m.json"), "scope-covered"));
// `D-260` (`B-133`): parity must hold for every ID shape, not only `AC-*`, and across a wrapped item.
withRepo(base({ "packet.md": PACKET(GOOD_MAP).replace("`AC-01` passes", "`AC-01` and\n      `SM05-N1` pass") }), ({ root }) =>
  expect("non-AC scenario ID on a wrapped DoD line, never pinned", readiness(root, "m.json"), "scope-covered"));
withRepo(base({ "packet.md": PACKET(GOOD_MAP).replace("`AC-01` passes", "`AC-01` passes (`D-242`, `DOR-R1`)") }), ({ root }) =>
  expect("decision/DoR references are not behaviours", readiness(root, "m.json"), null));

console.log("completion");
function completionRepo(itemsFor, mutate) {
  const r = repo(base({ "__tests__/ac01.test.ts": "// test", "__tests__/refusal.test.ts": "// test" }));
  const rr = readiness(r.root, "m.json");
  const rrText = JSON.stringify(rr, null, 2);
  writeFileSync(join(r.root, "readiness.json"), rrText);
  const evidence = { packet: "P-1", readinessReceipt: { path: "readiness.json", sha256: sha256(rrText) }, items: itemsFor(r.head) };
  writeFileSync(join(r.root, "evidence.json"), JSON.stringify(evidence, null, 2));
  mutate?.(r);
  return r;
}
const goodItems = (head) => [
  { dod: "Acceptance cases", ids: ["AC-01"], artifact: "__tests__/ac01.test.ts", revision: head, result: "pass", failingFirst: { revision: head, result: "fail" } },
  { dod: "Refusal and replay", ids: [], artifact: "__tests__/refusal.test.ts", revision: head, result: "pass", negative: true },
];
const cases = [
  ["positive fixture is ready for independent review", goodItems, null, null],
  ["a DoD obligation with no evidence", (h) => goodItems(h).slice(0, 1), null, "dod-evidenced"],
  ["refusal evidence with no negative item", (h) => goodItems(h).map((i) => ({ ...i, negative: false })), null, "negative-evidence"],
  ["acceptance case with no failing-first run", (h) => goodItems(h).map((i) => ({ ...i, failingFirst: undefined })), null, "failing-first"],
  ["a result that is not pass", (h) => goodItems(h).map((i, n) => (n ? { ...i, result: "fail" } : i)), null, "result-pass"],
  ["an ID outside the pinned scope", (h) => goodItems(h).map((i, n) => (n ? i : { ...i, ids: ["AC-99"] })), null, "id-in-scope"],
  ["an artifact that does not exist", (h) => goodItems(h).map((i, n) => (n ? i : { ...i, artifact: "__tests__/gone.test.ts" })), null, "artifact-exists"],
  ["artifact edited after its recorded revision", goodItems, ({ root, run }) => {
    writeFileSync(join(root, "__tests__/ac01.test.ts"), "// changed");
    run("add", "-A");
    run("commit", "-q", "-m", "later");
  }, "artifact-current"],
  ["readiness receipt altered after it was issued", goodItems, ({ root }) => {
    const p = join(root, "readiness.json");
    writeFileSync(p, readFileSync(p, "utf8").replace('"pass"', '"fail"'));
  }, "readiness-receipt-hash"],
  ["scope manifest changed since readiness", goodItems, ({ root }) => {
    writeFileSync(join(root, "m.json"), JSON.stringify(MANIFEST({ packet: "P-1", dorRows: ["DOR-R1"], extra: true }), null, 2));
  }, "readiness-same-scope"],
];
for (const [name, items, mutate, rule] of cases) {
  const r = completionRepo(items, mutate);
  try {
    const receipt = completion(r.root, "m.json", "evidence.json");
    expect(name, receipt, rule);
    if (rule === null && receipt.outcome !== "ready-for-independent-review") {
      failures++;
      console.log(`  MISS  positive outcome is "${receipt.outcome}", not ready-for-independent-review`);
    }
  } finally {
    rmSync(r.root, { recursive: true, force: true });
  }
}

console.log(failures === 0 ? "\njev selftest: every case behaved as named" : `\njev selftest: ${failures} case(s) did not behave as named`);
process.exit(failures === 0 ? 0 : 1);
