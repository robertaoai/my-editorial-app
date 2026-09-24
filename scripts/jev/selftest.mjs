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

// `D-261` (`B-134`): Product-intent parity — a separate fixture set that declares a Product source.
console.log("intent parity");
const PRODUCT = [
  "| ID | Requirement | Priority |",
  "|---|---|---|",
  "| `FR-15` `[V1]` | Record business evidence | P0 |",
  "| `FR-04a` `[decided_target_held]` | Held target | P0 |",
  "",
  "| ID | FR | AT source | Given | When | Then |",
  "|---|---|---|---|---|---|",
  "| `AC-23` `[V1]` | FR-15 | — | A commission | It runs | Records are appended |",
  "| `AC-30` `[V1]` | FR-99 | — | Other | Other | Other |",
  "| `AC-05a` `[decided_target_held]` | FR-04a | — | Held | Held | Held |",
  "",
].join("\n");
const FN_ROW = "| `SM-N1` | A commission | It runs | Records are appended | `FR-15` / `AC-23` |";
const fnDoc = (rowLine) => ["| Scenario | Given | When | Then | Product |", "|---|---|---|---|---|", rowLine, ""].join("\n");
const acRow = (id) => PRODUCT.split("\n").find((l) => l.startsWith(`| \`${id}\``)).trim();
const ANCHOR = (over = {}) => ({
  source: "product.md", requirement: "FR-15", acceptance: ["AC-23"], disposition: "active",
  rowHashes: { "AC-23": sha256(acRow("AC-23")) }, ...over,
});
const IM = (anchor = ANCHOR(), over = {}, rowLine = FN_ROW) => ({
  ...MANIFEST(), productSource: "product.md", chainDirs: ["fn"],
  behaviours: [{ id: "SM-N1", source: "fn/spec.md", dod: "Acceptance cases", rowHash: sha256(rowLine), productAnchor: anchor }],
  ...over,
});
const ipacket = PACKET(GOOD_MAP).replace("`AC-01` passes", "`SM-N1` passes");
const ibase = (over = {}) => ({ "product.md": PRODUCT, "fn/spec.md": fnDoc(FN_ROW), "packet.md": ipacket, "m.json": IM(), ...over });
const held = ANCHOR({ requirement: "FR-04a", acceptance: ["AC-05a"], rowHashes: { "AC-05a": sha256(acRow("AC-05a")) } });
const bare = FN_ROW.replace(" / `AC-23`", "");
const dual = PRODUCT + "| `SM-N1` | FR-15 | — | Different | Different | Different |\n";

withRepo(ibase(), ({ root }) => expect("positive intent fixture passes", readiness(root, "m.json"), null));
withRepo(ibase({ "m.json": IM(null) }), ({ root }) =>
  expect("scenario with no Product anchor", readiness(root, "m.json"), "product-anchor-present"));
withRepo(ibase({ "m.json": IM(held) }), ({ root }) => {
  const r = readiness(root, "m.json");
  expect("held Product acceptance used as build acceptance", r, "product-acceptance-live");
  expect("held Product requirement used as owner", r, "product-requirement-live");
});
withRepo(ibase({ "m.json": IM(ANCHOR({ acceptance: ["AC-30"], rowHashes: { "AC-30": sha256(acRow("AC-30")) } })) }), ({ root }) =>
  expect("acceptance row owned by a different requirement", readiness(root, "m.json"), "acceptance-owned-by-requirement"));
withRepo(ibase({ "m.json": IM(ANCHOR({ disposition: "held" })) }), ({ root }) =>
  expect("anchor disposition not active", readiness(root, "m.json"), "anchor-disposition-active"));
withRepo(ibase({ "product.md": PRODUCT.replace("Records are appended |", "Records are appended and more |") }), ({ root }) =>
  expect("Product row edited after pinning", readiness(root, "m.json"), "product-row-pinned"));
withRepo(ibase({ "fn/spec.md": fnDoc(bare), "m.json": IM(ANCHOR(), {}, bare) }), ({ root }) =>
  expect("scenario row does not name its Product acceptance", readiness(root, "m.json"), "scenario-cites-anchor"));
withRepo(ibase({ "product.md": dual }), ({ root }) =>
  expect("one ID with two rows and no mapping", readiness(root, "m.json"), "one-id-one-meaning"));
withRepo(ibase({ "product.md": dual, "m.json": IM(ANCHOR(), { crossTierMappings: { "SM-N1": { canonical: "fn/spec.md", decision: "D-999" } } }) }), ({ root }) =>
  expect("one ID with two rows and a recorded mapping passes", readiness(root, "m.json"), null));

console.log("completion");
function completionRepo(itemsFor, mutate) {
  const r = repo(base({ "__tests__/ac01.test.ts": "// AC-01 — failing-first, then passing", "__tests__/refusal.test.ts": "// test" }));
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
  ["a test file that does not name the scenario it proves", goodItems, ({ root, run }) => {
    writeFileSync(join(root, "__tests__/ac01.test.ts"), "// unnamed test");
    run("add", "-A");
    run("commit", "-q", "-m", "drop id");
  }, "test-names-scenario"],
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
