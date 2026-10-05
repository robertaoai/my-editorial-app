// `B-050` stages F1 (`D-418`–`D-421`) and F2 (`D-423`, corrected by `D-424`) —
// the intended-case proof for the guarded-rebuild validators, the `docs-drift`
// journal check, and F2's generation, composition, fixture-only publication
// and owned recovery. Every case names the boundary it must reach, including D424-R1a and D424-R3a. A passing
// run is not live publication (F3), prevention or B-050 closure. All
// filesystem cases run in a disposable temp directory; nothing here opens the
// live `.graphify` state for writing (the `D-424` cases only read it, or link to it).

import { afterAll, describe, expect, test } from "bun:test";
import { execFileSync, spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import * as G from "../graphify/guarded-rebuild.mjs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { hostname } from "node:os";
import {
  canonicalizePath,
  containmentFindings,
  findForeignPath,
  lifecycleFindings,
  readTransaction,
  transactionFindings,
  transactionJournalPath,
} from "../graphify/guarded-rebuild.mjs";

const REPO = resolve(import.meta.dir, "..", "..");
const TMP = mkdtempSync(join(tmpdir(), "graphify-guard-"));
afterAll(() => rmSync(TMP, { recursive: true, force: true }));

describe("canonical path validation (v4 condition 1)", () => {
  // [input, foreign?] — Lane B's counterexamples (404af56, 2b60cde) plus controls.
  const cases = [
    [String.raw`"C:\\CoWork\\x\\y"`, true],
    [`"C:/git/my-editorial-app/docs"`, true],
    [`"C:/robertaoai/my-editorial-app-copy/leak"`, true], // sibling prefix
    [`"D:/robertaoai/my-editorial-app/leak"`, true], // wrong drive
    [`"C:/robertaoai/my-editorial-app/../../../CoWork/outputs/clone/x"`, true], // dot-segment escape
    [`"file://server/share/x"`, true], // network authority
    [`"file:///C%3A%2FCoWork%2Foutputs%2Fclone%2Fx"`, true], // encoded drive and separators
    [String.raw`"\\\\server\\share\\x"`, true], // UNC
    [`"C:%5Crobertaoai%5Cmy-editorial-app-copy"`, true],
    [`"C:/CoWork/outputs/run/clone-01/.graphify"`, true], // disposable root
    [`"C:/../../x"`, true], // escape above the drive is ambiguous
    [String.raw`"C:\robertaoai\my-editorial-app"`, false],
    [String.raw`"C:\\robertaoai\\my-editorial-app\\docs"`, false],
    [`"C:/robertaoai/my-editorial-app/docs/x.md"`, false],
    [`"C:/robertaoai/my-editorial-app/docs/../scripts/x.mjs"`, false], // dot segment staying inside
    [`"file:///C:/robertaoai/my-editorial-app/docs"`, false],
    [`https://reuters.com/a`, false], // a URL is not a path
    [`({file:o,count:i.length})`, false], // minified property, not a URI
    // F1-R1 (Lane B e843edf): each was missed at 296a47b
    [String.raw`\\server\share\leak`, true], // raw two-backslash UNC
    [`//server/share/leak`, true], // forward-slash network root
    [`file:/C:/robertaoai/my-editorial-app/docs`, true], // malformed URI hiding an allowed path
    [`file:garbage`, true], // malformed URI token
    // lexical controls kept by the F1-R1 fix
    [`see the file: section`, false], // prose
    ["a `file:` URI", false], // backticked keyword
    [`https://example.com/a/b`, false], // URL, not a network root
    [`x=a//b; // comment`, false], // code division and comment
    [`{ file:loader, mode:1 }`, false], // object key with spacing
    // F1-R2 (Lane B 658aab2), through the public scanner: quoted values are read whole
    [`{"path":"C:/robertaoai/my-editorial-app/a b/../../../CoWork/outputs/leak"}`, true], // space, then escape
    [`file%3A%2F%2Fserver%2Fshare%2Fleak`, true], // fully encoded network file URI
    [`{"path":"C:/robertaoai/my-editorial-app/a b/file"}`, false], // in-root path with a space
    // equivalent representations at the declared boundary
    [String.raw`{"path":"C:\\robertaoai\\my-editorial-app\\a b\\..\\..\\..\\CoWork\\outputs\\leak"}`, true], // JSON-escaped
    [`C:/robertaoai/my-editorial-app/a/../../../CoWork/outputs/leak`, true], // raw, no space
    [`"file%3A%2F%2Fserver%2Fshare%2Fleak"`, true], // quoted encoded
    [`%5C%5Cserver%5Cshare%5Cleak`, true], // encoded UNC
    [`C:%252Frobertaoai%252F..%252F..`, true], // double-encoded escape above the drive
    // web URLs stay out of scope, encoded or not
    [`https%3A%2F%2Fexample.com%2Fa`, false],
    [`{"url":"https://example.com/a b/c"}`, false],
  ];

  test("encoding left after the decode limit is refused, not read as 'no path'", () => {
    expect(canonicalizePath("C:%25252525%2Fx")).toEqual({ malformed: true });
  });

  describe("one bounded decoding policy through the PUBLIC scanner (F1-R3, D-420)", () => {
  // Lane B 962a309's four missed inputs, each through findForeignPath.
  const missed = [
    "file%253A%252F%252Fserver%252Fshare%252Fleak",
    `{"path":"file%253A%252F%252Fserver%252Fshare%252Fleak"}`,
    "C:%25252Frobertaoai%25252Fmy-editorial-app-copy%25252Fleak",
    "C:%25252525%2Fx",
  ];
  for (const input of missed) {
    test(`refuses ${input}`, () => expect(findForeignPath(input)).not.toBeNull());
  }

  // Encodes the path punctuation once, then re-encodes `%` per further depth.
  const encode = (s, depth) => {
    let out = s;
    for (let i = 0; i < depth; i++) {
      out = i === 0 ? out.replace(/%/g, "%25").replace(/:/g, "%3A").replace(/\//g, "%2F").replace(/\\/g, "%5C") : out.replace(/%/g, "%25");
    }
    return out;
  };
  // [target, kind]. The expectation comes from the TARGET, not from the matcher:
  // foreign targets are refused at every supported depth; in-root and web targets
  // pass at every supported depth; beyond the limit, a path-like value is refused.
  const targets = [
    ["file://server/share/leak", "foreign"],
    ["C:/robertaoai/my-editorial-app-copy/leak", "foreign"],
    [String.raw`\\server\share\leak`, "foreign"],
    ["C:/CoWork/outputs/run/x", "foreign"],
    ["C:/robertaoai/my-editorial-app/docs/x.md", "inroot"],
    ["file:///C:/robertaoai/my-editorial-app/docs", "inroot"],
    ["https://example.com/a/b", "web"],
  ];
  const forms = {
    raw: (v) => v,
    quoted: (v) => `{"path":${JSON.stringify(v)}}`, // JSON.stringify also escapes backslashes
  };
  for (const [target, kind] of targets) {
    for (let depth = 0; depth <= 4; depth++) {
      for (const [form, wrap] of Object.entries(forms)) {
        const input = wrap(encode(target, depth));
        const beyond = depth > 3;
        const expectFinding = kind === "foreign" || (beyond && kind !== "web");
        test(`${kind} ${form} depth ${depth}: ${expectFinding ? "refused" : "passes"} — ${target}`, () => {
          expect(findForeignPath(input) !== null).toBe(expectFinding);
        });
      }
    }
  }
  });

  for (const [input, foreign] of cases) {
    test(`${foreign ? "refuses" : "allows"} ${input}`, () => {
      expect(findForeignPath(input) !== null).toBe(foreign);
    });
  }

  test("an undecodable escape is malformed, never 'no path'", () => {
    expect(canonicalizePath("C:%E0%A4%A/x")).toEqual({ malformed: true });
  });
});

describe("containment against the live target", () => {
  const live = join(TMP, "state", ".graphify");
  mkdirSync(live, { recursive: true });

  test("alias, contains and inside are refused; a sibling is allowed", () => {
    const f = containmentFindings(live, {
      candidate: live,
      backup: join(TMP, "state"),
      staging: join(live, "staging"),
      evidence: join(TMP, "state", ".graphify-bak-run1"),
    });
    expect(f.some((x) => x.startsWith("candidate") && x.includes("aliases"))).toBe(true);
    expect(f.some((x) => x.startsWith("backup") && x.includes("contains"))).toBe(true);
    expect(f.some((x) => x.startsWith("staging") && x.includes("inside"))).toBe(true);
    expect(f.some((x) => x.startsWith("evidence"))).toBe(false);
  });

  test("an alias through a directory link is refused", () => {
    const link = join(TMP, "link-to-live");
    symlinkSync(live, link, "junction");
    expect(containmentFindings(live, { candidate: link })[0]).toContain("aliases");
  });
});

describe("lifecycle records (raw null refused before rebinding)", () => {
  const head = "2bf5c3e74a8cceb16d07f2bead5a20d1bd1d7d5b";
  const expected = { head, branchName: "features/feature-V1-SM05", root: "C:\\robertaoai\\my-editorial-app", gitDir: "C:\\robertaoai\\my-editorial-app\\.git" };
  const good = () => ({
    branch: { schemaVersion: 1, branchName: expected.branchName, lastSeenHead: head, lastAnalyzedHead: head, stale: false },
    worktree: { schemaVersion: 1, worktreePath: expected.root, gitDir: expected.gitDir, commonGitDir: expected.gitDir, lastSeenHead: head, lastAnalyzedHead: head },
  });

  test("a valid record passes", () => {
    expect(lifecycleFindings(good(), expected)).toEqual([]);
  });

  test("the B-050 raw-null write is refused even beside stale:false", () => {
    const r = good();
    Object.assign(r.branch, { branchName: null, lastSeenHead: null, lastAnalyzedHead: null, stale: false });
    Object.assign(r.worktree, { gitDir: null, lastSeenHead: null, lastAnalyzedHead: null });
    const f = lifecycleFindings(r, expected);
    expect(f.some((x) => x.includes("raw-null"))).toBe(true);
    expect(f.length).toBeGreaterThanOrEqual(5);
  });

  test("wrong head, branch, root, stale flag and schema are refused", () => {
    const r = good();
    r.branch.lastAnalyzedHead = "0".repeat(40);
    r.branch.branchName = "main";
    r.branch.stale = true;
    r.worktree.worktreePath = "C:/robertaoai/my-editorial-app-copy";
    r.worktree.schemaVersion = 2;
    const f = lifecycleFindings(r, expected).join("\n");
    for (const s of ["not the analyzed commit", "branchName", "stale is true", "worktreePath", "schemaVersion 2"]) expect(f).toContain(s);
  });

  test("a missing record is refused", () => {
    expect(lifecycleFindings({ branch: good().branch, worktree: undefined }, expected)[0]).toContain("worktree.json is absent");
  });
});

describe("transaction journal and the docs-drift order (R5)", () => {
  const journal = (dir, body) => writeFileSync(join(dir, ".graphify-txn.json"), typeof body === "string" ? body : JSON.stringify(body));
  const valid = { stage: "old-moved", target: "x", runToken: "run-1", sourceCommit: "abc" };

  test("the journal sits beside a link's target, even when the target is missing", () => {
    const parent = join(TMP, "pub");
    mkdirSync(join(parent, ".graphify"), { recursive: true });
    const repo = join(TMP, "repo1");
    mkdirSync(repo);
    symlinkSync(join(parent, ".graphify"), join(repo, ".graphify"), "junction");
    rmSync(join(parent, ".graphify"), { recursive: true }); // between the two renames
    expect(transactionJournalPath(join(repo, ".graphify"))).toBe(join(parent, ".graphify-txn.json"));
  });

  test("no journal, a valid journal and a malformed journal are distinguished", () => {
    const d = join(TMP, "j");
    mkdirSync(d);
    expect(readTransaction(join(d, ".graphify-txn.json")).state).toBe("none");
    journal(d, valid);
    expect(readTransaction(join(d, ".graphify-txn.json")).stage).toBe("old-moved");
    journal(d, "{not json");
    expect(readTransaction(join(d, ".graphify-txn.json")).state).toBe("malformed");
    journal(d, { ...valid, stage: "done" });
    expect(readTransaction(join(d, ".graphify-txn.json")).state).toBe("malformed");
  });

  const docsDriftIn = async (cwd) => {
    const prior = process.cwd();
    process.chdir(cwd);
    try {
      const { run } = await import(`../checks/docs-drift.mjs?case=${Math.random()}`);
      return run();
    } finally {
      process.chdir(prior);
    }
  };

  test("journal plus MISSING live path: a finding, not the absent-state SKIP", async () => {
    const parent = join(TMP, "pub2");
    mkdirSync(join(parent, ".graphify"), { recursive: true });
    const repo = join(TMP, "repo2");
    mkdirSync(repo);
    symlinkSync(join(parent, ".graphify"), join(repo, ".graphify"), "junction");
    rmSync(join(parent, ".graphify"), { recursive: true });
    journal(parent, valid);
    const r = await docsDriftIn(repo);
    expect(r.skipped).toBeUndefined();
    expect(r.findings[0]).toContain("MISSING");
  });

  test("a journal at stage verified is still a finding until the receipt removes it", async () => {
    const repo = join(TMP, "repo3");
    mkdirSync(join(repo, ".graphify"), { recursive: true });
    journal(repo, { ...valid, stage: "verified" });
    const r = await docsDriftIn(repo);
    expect(r.findings[0]).toContain('stage "verified"');
  });

  test("no local state and no journal: the existing CI skip is kept", async () => {
    const repo = join(TMP, "repo4");
    mkdirSync(repo);
    const r = await docsDriftIn(repo);
    expect(r.skipped).toBe(true);
    expect(r.findings).toEqual([]);
  });

  test("ordinary local state: no transaction finding in this repository", () => {
    expect(transactionFindings(join(REPO, ".graphify"))).toEqual([]);
  });
});

describe("entry point", () => {
  test("running the guard refuses: F2/F3 are not authorized", () => {
    const r = spawnSync(process.execPath, [join(REPO, "scripts", "graphify", "guarded-rebuild.mjs")], { encoding: "utf8" });
    expect(r.status).toBe(2);
    expect(r.stderr).toContain("stage F2");
  });
});

// ===========================================================================
// STAGE F2 (`D-423`) — disposable fixture targets only. Crash and live-owner
// cases run `publish()` in a CHILD process so termination and liveness are
// real, not simulated in-process.
// ===========================================================================
const F2 = join(TMP, "f2");
mkdirSync(F2, { recursive: true });
const MODULE_URL = pathToFileURL(join(REPO, "scripts", "graphify", "guarded-rebuild.mjs")).href;
const CHILD = join(F2, "child.mjs");
writeFileSync(CHILD, `
const G = await import(${JSON.stringify(MODULE_URL)});
const o = JSON.parse(process.argv[2]);
const inject = {};
if (o.failReceipt) inject.writeReceipt = () => { throw new Error("receipt disk full"); };
const r = o.op === "recover" ? G.recover({ target: o.target, fixture: o.fixture, pauseAt: o.pauseAt, pauseMs: o.pauseMs }) : G.publish({ ...o, inject });
process.stdout.write(JSON.stringify(r));
`);
const child = (args, { wait = true } = {}) => {
  const o = { fixture: dirname(args.target), source: src(), ...args };
  if (!wait) return spawn(process.execPath, [CHILD, JSON.stringify(o)], { stdio: ["ignore", "pipe", "pipe"] });
  const r = spawnSync(process.execPath, [CHILD, JSON.stringify(o)], { encoding: "utf8", timeout: 120000 });
  return { status: r.status, result: r.stdout ? JSON.parse(r.stdout) : null };
};
let n = 0;
const tinyRepo = () => {
  const d = join(F2, `repo${++n}`);
  mkdirSync(d);
  const g = (...a) => execFileSync("git", ["-C", d, ...a], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  g("init", "-q", "-b", "main");
  g("config", "user.email", "t@example.test");
  g("config", "user.name", "t");
  writeFileSync(join(d, "a.txt"), "a");
  g("add", ".");
  g("commit", "-q", "-m", "one");
  g("remote", "add", "origin", "https://github.com/example/fixture-repo.git");
  g("tag", "t1");
  return { d, g };
};
/** The source every fixture publication binds (`D-424` R4): a clean tiny repository and its snapshot. */
let SRC;
const src = () => (SRC ??= (() => {
  const { d } = tinyRepo();
  return { repo: d, snapshot: G.snapshotSource(d) };
})());
/** A fixture: a target state with a baseline, and a staging state with different reviewed bytes. */
const fixture = () => {
  const parent = join(F2, `fx${++n}`);
  const target = join(parent, ".graphify");
  const staging = join(parent, "staging");
  mkdirSync(target, { recursive: true });
  mkdirSync(staging, { recursive: true });
  writeFileSync(join(target, "graph.json"), JSON.stringify({ v: "baseline", n }));
  writeFileSync(join(target, "branch.json"), "{}");
  writeFileSync(join(staging, "graph.json"), JSON.stringify({ v: "reviewed", n }));
  writeFileSync(join(staging, "branch.json"), "{}");
  const baseline = G.treeDigest(G.hashTree(target));
  const reviewed = G.treeDigest(G.hashTree(staging));
  return { parent, target, staging, baseline, reviewed, P: G.transactionPaths(target) };
};
const digest = (d) => G.treeDigest(G.hashTree(d));
const SLOW = 120000;

describe("F2 publication on fixture targets (steps 6–7)", () => {
  test("refuses anything not declared a fixture, and the real live target even when declared", () => {
    const f = fixture();
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed }).outcome).toBe("refused");
    const live = G.publish({ target: G.REAL_LIVE_TARGET, staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source: src() });
    expect(live.outcome).toBe("refused");
    expect(live.reason).toContain("F3");
  });

  test("a valid run publishes exactly the reviewed bytes, writes a receipt, clears journal and lock", () => {
    const f = fixture();
    const r = G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, baselineManifest: f.baseline, fixture: f.parent, source: src(), acceptance: "fixture acceptance record — not a Lane B review" });
    expect(r.outcome).toBe("released");
    expect(digest(f.target)).toBe(f.reviewed);
    expect(existsSync(f.P.journal) || existsSync(f.P.lock)).toBe(false);
    expect(readdirSync(f.P.receipts).some((x) => x.startsWith("release-"))).toBe(true);
    expect(digest(r.backup)).toBe(f.baseline);
  }, SLOW);

  test("staging that is not the reviewed bytes, or a changed baseline, is refused before any mutation", () => {
    const f = fixture();
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: "0".repeat(64), fixture: f.parent, source: src() }).reason).toContain("reviewed manifest");
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, baselineManifest: "0".repeat(64), fixture: f.parent, source: src() }).reason).toContain("changed since the baseline");
    expect(digest(f.target)).toBe(f.baseline);
    expect(existsSync(f.P.journal) || existsSync(f.P.lock)).toBe(false);
  }, SLOW);

  test("a held publication lock refuses a second publisher", () => {
    const f = fixture();
    writeFileSync(f.P.lock, JSON.stringify(G.ownerRecord("other-run")));
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source: src() }).reason).toContain("lock is held");
    expect(digest(f.target)).toBe(f.baseline);
  }, SLOW);

  test("an exception after mutation is rolled back by the OWNER, keeping its lock until done", () => {
    const f = fixture();
    const r = G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source: src(), inject: { renameNew: () => { throw new Error("sharing violation"); } } });
    expect(r.outcome).toBe("rolled-back");
    expect(r.recovery.outcome).toBe("restored");
    expect(digest(f.target)).toBe(f.baseline);
    expect(existsSync(f.P.journal) || existsSync(f.P.lock) || existsSync(f.P.recovery)).toBe(false);
  }, SLOW);
});

describe("F2 termination at each boundary, then restart recovery (abrupt-termination boundary)", () => {
  const cases = [
    ["after-prepared", "aborted-live-unchanged", "baseline"],
    ["after-rename-old", "restored", "baseline"],
    ["after-old-moved", "restored", "baseline"],
    ["after-rename-new", "rolled-back", "baseline"],
    ["after-new-in-place", "rolled-back", "baseline"],
    ["after-verified", "completed-release", "reviewed"],
    ["after-receipt", "completed-release", "reviewed"],
  ];
  for (const [point, outcome, ends] of cases) {
    test(`killed ${point}: the journal blocks health; a dead-owner recovery gives ${outcome}; a valid run follows`, () => {
      const f = fixture();
      const c = child({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, crashAt: point, sourceCommit: "x" });
      expect(c.status).toBe(137);
      expect(G.transactionFindings(f.target).length).toBe(1);
      const r = G.recover({ target: f.target, fixture: f.parent });
      expect(r.outcome).toBe(outcome);
      expect(digest(f.target)).toBe(ends === "baseline" ? f.baseline : f.reviewed);
      expect(existsSync(f.P.journal) || existsSync(f.P.lock) || existsSync(f.P.recovery)).toBe(false);
      expect(G.transactionFindings(f.target)).toEqual([]);
      const s2 = join(f.parent, "staging2");
      mkdirSync(s2);
      writeFileSync(join(s2, "graph.json"), JSON.stringify({ v: "retry" }));
      expect(G.publish({ target: f.target, staging: s2, reviewedManifest: digest(s2), fixture: f.parent, source: src() }).outcome).toBe("released");
    }, SLOW);
  }
});

describe("F2 exclusive create under the RUNNING runtime (Bun 1.1.30 Windows defect, D-423)", () => {
  test("createExclusive refuses an existing file and never overwrites it", () => {
    const p = join(F2, "exclusive.lock");
    writeFileSync(p, "first-owner");
    expect(G.createExclusive(p, { runToken: "second" })).toBe(false);
    expect(readFileSync(p, "utf8")).toBe("first-owner");
    const q = join(F2, "fresh.lock");
    expect(G.createExclusive(q, { runToken: "only" })).toBe(true);
    expect(JSON.parse(readFileSync(q, "utf8")).runToken).toBe("only");
  });
});

describe("F2 ownership: live owner, peers, concurrent recoverers", () => {
  const waitFor = async (cond) => {
    const deadline = Date.now() + 60000;
    while (Date.now() < deadline && !cond()) await new Promise((r) => setTimeout(r, 200));
  };
  test("a peer is refused while the publishing owner is alive; the owner then completes", async () => {
    const f = fixture();
    const proc = child({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, pauseAt: "after-old-moved", pauseMs: 15000 }, { wait: false });
    let out = "", err = "", exited = false;
    proc.stdout.on("data", (d) => (out += d));
    proc.stderr.on("data", (d) => (err += d));
    const ended = new Promise((done) => proc.on("exit", () => done((exited = true))));
    await waitFor(() => exited || G.readTransaction(f.P.journal).stage === "old-moved");
    // An owner that exits or never reaches the paused stage is reported with its own output.
    expect({ exited, stage: G.readTransaction(f.P.journal).stage, out, err: err.slice(-500) }).toEqual({ exited: false, stage: "old-moved", out: "", err: "" });
    const r = G.recover({ target: f.target, fixture: f.parent });
    expect(r.outcome).toBe("refused");
    expect(r.reason).toContain("owner is alive");
    expect(existsSync(f.P.journal)).toBe(true);
    await ended;
    expect(JSON.parse(out).outcome).toBe("released");
    expect(digest(f.target)).toBe(f.reviewed);
  }, SLOW);

  test("two recoverers: the second is refused while the first holds the exclusive token", async () => {
    const f = fixture();
    expect(child({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, crashAt: "after-rename-old" }).status).toBe(137);
    const first = child({ op: "recover", target: f.target, pauseAt: "after-token", pauseMs: 15000 }, { wait: false });
    let out = "";
    first.stdout.on("data", (d) => (out += d));
    await waitFor(() => existsSync(f.P.recovery));
    const second = G.recover({ target: f.target, fixture: f.parent });
    expect(second.outcome).toBe("refused");
    expect(second.reason).toContain("recovery token is held");
    await new Promise((done) => first.on("exit", done));
    expect(JSON.parse(out).outcome).toBe("restored");
    expect(digest(f.target)).toBe(f.baseline);
  }, SLOW);

  test("a failed restore keeps the journal (non-health); a later recovery succeeds", () => {
    const f = fixture();
    expect(child({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, crashAt: "after-rename-old" }).status).toBe(137);
    const bad = G.recover({ target: f.target, fixture: f.parent, inject: { restore: () => { throw new Error("access denied"); } } });
    expect(bad.outcome).toBe("recovery-required");
    expect(existsSync(f.P.journal)).toBe(true);
    expect(G.transactionFindings(f.target).length).toBe(1);
    expect(G.recover({ target: f.target, fixture: f.parent }).outcome).toBe("restored");
    expect(digest(f.target)).toBe(f.baseline);
  }, SLOW);

  test("a receipt failure at verified is recovery-required, then completed by recovery", () => {
    const f = fixture();
    const c = child({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, failReceipt: true });
    expect(c.result.outcome).toBe("recovery-required");
    expect(G.readTransaction(f.P.journal).stage).toBe("verified");
    expect(G.recover({ target: f.target, fixture: f.parent }).outcome).toBe("completed-release");
    expect(digest(f.target)).toBe(f.reviewed);
  }, SLOW);

  test("a malformed journal, a lock without a journal, and an unknown owner each need evidenced recovery", () => {
    const a = fixture();
    writeFileSync(a.P.journal, "{not json");
    expect(G.recover({ target: a.target, fixture: a.parent }).outcome).toBe("recovery-required");
    expect(existsSync(a.P.journal)).toBe(true);
    const b = fixture();
    writeFileSync(b.P.lock, JSON.stringify({ runToken: "r", pid: 999999, host: "elsewhere", start: "x" }));
    expect(G.recover({ target: b.target, fixture: b.parent }).outcome).toBe("recovery-required");
    expect(existsSync(b.P.lock)).toBe(true);
    const c = fixture();
    writeFileSync(c.P.journal, JSON.stringify({ stage: "prepared", target: c.target, runToken: "r", sourceCommit: "x", backupManifest: c.baseline, reviewedManifest: c.reviewed }));
    writeFileSync(c.P.lock, JSON.stringify({ runToken: "r", pid: 999999, host: "another-host", start: "x" }));
    const r = G.recover({ target: c.target, fixture: c.parent });
    expect(r.outcome).toBe("recovery-required");
    expect(r.reason).toContain("cannot be proved");
  }, SLOW);
});

// --- generation and composition --------------------------------------------

describe("F2 source snapshot and isolated checkout (R4/PC6)", () => {
  test("detached HEAD and a dirty tree are refused; a ref or config change invalidates the snapshot", () => {
    const { d, g } = tinyRepo();
    const snap = G.snapshotSource(d);
    expect(snap.ok).toBe(true);
    expect(G.snapshotMatches(d, snap).ok).toBe(true);
    g("tag", "t2");
    expect(G.snapshotMatches(d, snap).reason).toContain("ref map");
    g("tag", "-d", "t2");
    g("config", "core.someflag", "1");
    expect(G.snapshotMatches(d, snap).reason).toContain("config");
    writeFileSync(join(d, "a.txt"), "dirty");
    expect(G.snapshotSource(d).reason).toContain("not clean");
    g("checkout", "-q", "--", "a.txt");
    g("checkout", "-q", "--detach");
    expect(G.snapshotSource(d).reason).toContain("detached");
  }, SLOW);

  test("the disposable checkout carries the caller's origin and exactly its ref map", () => {
    const { d } = tinyRepo();
    const snap = G.snapshotSource(d);
    const out = join(F2, `co${n}`);
    expect(G.prepareCheckout(d, snap, out).ok).toBe(true);
    const got = G.snapshotSource(out);
    expect(got.origin).toBe("https://github.com/example/fixture-repo.git");
    expect(got.refs).toEqual(snap.refs);
  }, SLOW);
});

describe("F2 generation refuses before rebinding (raw null, tool failure, no-op)", () => {
  const setup = () => {
    const { d } = tinyRepo();
    const snap = G.snapshotSource(d);
    const baseline = join(F2, `base${n}`);
    mkdirSync(baseline);
    writeFileSync(join(baseline, "graph.json"), JSON.stringify({ nodes: [] }));
    return { d, snap, baseline, work: join(F2, `work${n}`) };
  };
  test("raw null metadata after the rebuild is refused, never rebound", () => {
    const s = setup();
    const tool = (cwd) => {
      writeFileSync(join(cwd, ".graphify", "branch.json"), JSON.stringify({ schemaVersion: 1, branchName: null, lastSeenHead: null, lastAnalyzedHead: null, stale: false }));
      writeFileSync(join(cwd, ".graphify", "worktree.json"), JSON.stringify({ schemaVersion: 1, gitDir: null, lastSeenHead: null, lastAnalyzedHead: null }));
      return { code: 0, out: "Rebuilt: 1 nodes" };
    };
    const r = G.generateCandidate({ repo: s.d, snapshot: s.snap, baseline: s.baseline, work: s.work, tool });
    expect(r.status).toBe("refused");
    expect(r.reason).toContain("raw-null");
  }, SLOW);

  test("a tool failure (Git unavailable inside the tool) is refused", () => {
    const s = setup();
    const r = G.generateCandidate({ repo: s.d, snapshot: s.snap, baseline: s.baseline, work: s.work, tool: () => ({ code: 1, out: "fatal" }) });
    expect(r.reason).toContain("tool failure at hook-rebuild");
  }, SLOW);

  test("a rebuild that writes nothing is a refused no-op, even with valid-looking metadata", () => {
    const s = setup();
    const checkout = join(s.work, "checkout");
    const head = execFileSync("git", ["-C", s.d, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
    writeFileSync(join(s.baseline, "branch.json"), JSON.stringify({ schemaVersion: 1, branchName: "main", lastSeenHead: head, lastAnalyzedHead: head, stale: false }));
    writeFileSync(join(s.baseline, "worktree.json"), JSON.stringify({ schemaVersion: 1, worktreePath: checkout, gitDir: join(checkout, ".git"), commonGitDir: join(checkout, ".git"), lastSeenHead: head, lastAnalyzedHead: head }));
    const r = G.generateCandidate({ repo: s.d, snapshot: s.snap, baseline: s.baseline, work: s.work, tool: () => ({ code: 0, out: "Code graph updated." }) });
    expect(r.reason).toContain("no-op");
  }, SLOW);
});

describe("F2 community names: reused only for identical member sets; unique or pending", () => {
  test("identical member set reuses its name; a changed set is pending; a duplicate supplied name is pending", () => {
    const d = join(F2, "names");
    mkdirSync(d, { recursive: true });
    const base = { nodes: [{ id: "a", community: 1, community_name: "Alpha" }, { id: "b", community: 2, community_name: "Beta" }] };
    writeFileSync(join(d, "base.json"), JSON.stringify(base));
    writeFileSync(join(d, "graph.json"), JSON.stringify({ nodes: [{ id: "a", community: 5 }, { id: "b", community: 6 }, { id: "c", community: 6 }] }));
    const r = G.proposeNames(d, join(d, "base.json"), {});
    expect(r.names).toEqual({ 5: "Alpha" });
    expect(r.pending.map((p) => p.community)).toEqual([6]);
    const dup = G.proposeNames(d, join(d, "base.json"), { [r.pending[0].memberSetSha256]: "Alpha" });
    expect(Object.keys(dup.names)).toEqual([]);
    expect(dup.pending.every((p) => p.duplicateName === "Alpha")).toBe(true);
  });

  test("an operator answer keyed by member-set hash survives community renumbering", () => {
    const d = join(F2, "names");
    const hash = G.proposeNames(d, join(d, "base.json"), {}).pending[0].memberSetSha256;
    const r = G.proposeNames(d, join(d, "base.json"), { [hash]: "Beta and Gamma" });
    expect(r.names).toEqual({ 5: "Alpha", 6: "Beta and Gamma" });
    expect(r.pending).toEqual([]);
  });

  test("an integer-keyed answer never binds: a renumbered community stays pending (D-424 R2)", () => {
    const d = join(F2, "names");
    const r = G.proposeNames(d, join(d, "base.json"), { 6: "Old label", 7: "Old label" });
    expect(r.names).toEqual({ 5: "Alpha" });
    expect(r.pending.map((p) => p.community)).toEqual([6]);
  });
});

describe("F2 composition (step 4): refuses rather than repairs; frozen bytes are reproducible", () => {
  const head = "693a6a79e5ef7b8e1334881ce629017d80ba1250";
  const caller = { head, branch: "features/feature-V1-SM05", rootNative: "C:\\robertaoai\\my-editorial-app", gitDirNative: "C:\\robertaoai\\my-editorial-app\\.git" };
  const build = (mut = () => {}) => {
    const root = join(F2, `cmp${++n}`);
    const cand = join(root, "cand"), base = join(root, "base"), frags = join(root, "frags");
    for (const d of [cand, base, frags, join(base, "cache")]) mkdirSync(d, { recursive: true });
    const graph = { nodes: [{ id: "a", label: "A", community: 0, community_name: "Group A" }], links: [], community_labels: { 0: "Group A" } };
    writeFileSync(join(cand, "graph.json"), JSON.stringify(graph));
    writeFileSync(join(cand, "branch.json"), JSON.stringify({ schemaVersion: 1, branchName: caller.branch, lastSeenHead: head, lastAnalyzedHead: head, stale: false, worktreePath: "C:/CoWork/outputs/x/checkout" }));
    writeFileSync(join(cand, "worktree.json"), JSON.stringify({ schemaVersion: 1, worktreePath: "C:/CoWork/outputs/x/checkout", gitDir: "C:/CoWork/outputs/x/checkout/.git", lastSeenHead: head, lastAnalyzedHead: head }));
    writeFileSync(join(base, "branch.json"), JSON.stringify({ firstSeenHead: "f".repeat(40), createdAt: "2026-08-17T00:00:00.000Z" }));
    writeFileSync(join(base, "worktree.json"), JSON.stringify({ firstSeenHead: "f".repeat(40), createdAt: "2026-08-17T00:00:00.000Z" }));
    writeFileSync(join(base, "cache", "ast.json"), "{\"p\":\"C:/CoWork/outputs/old\"}");
    writeFileSync(join(frags, "frag1.json"), JSON.stringify({ nodes: [{ id: "a", label: "A" }], edges: [] }));
    mut({ cand, base, frags });
    return { root, cand, base, frags, staging: join(root, "staging") };
  };
  const compose = (b, frozenAt = "2026-10-06T00:00:00.000Z") => G.composeCandidate({ candidateState: b.cand, baseline: b.base, staging: b.staging, workRoot: b.root, source: { repo: REPO }, caller, frozenAt, fragmentsDir: b.frags });

  test("a valid candidate composes: caller identity rebound, heads kept, provenance retained, disposable paths gone", () => {
    const b = build();
    const r = compose(b);
    expect(r.ok).toBe(true);
    const br = JSON.parse(readFileSync(join(b.staging, "branch.json"), "utf8"));
    expect(br.worktreePath).toBe(caller.rootNative);
    expect(br.lastAnalyzedHead).toBe(head);
    expect(br.firstSeenHead).toBe("f".repeat(40));
    expect(br.updatedAt).toBe("2026-10-06T00:00:00.000Z");
    expect(existsSync(join(b.staging, "cache", "ast.json"))).toBe(true); // retained from the caller, not the candidate
  });

  test("identical inputs and frozen time give an identical manifest", () => {
    expect(compose(build()).manifest).toBe(compose(build()).manifest);
  });

  test("an unclassified file, a pending semantic file, a fragment-field mismatch or a name mismatch is refused", () => {
    expect(compose(build(({ cand }) => writeFileSync(join(cand, "surprise.bin"), "x"))).findings[0]).toContain("unclassified");
    expect(compose(build(({ cand }) => { mkdirSync(join(cand, "label-instructions")); writeFileSync(join(cand, "label-instructions", "communities.json"), "{}"); })).findings[0]).toContain("pending semantic");
    expect(compose(build(({ frags }) => writeFileSync(join(frags, "frag2.json"), JSON.stringify({ nodes: [{ id: "a", label: "Different" }], edges: [] })))).findings[0]).toContain("fragment parity");
    expect(compose(build(({ cand }) => writeFileSync(join(cand, "graph.json"), JSON.stringify({ nodes: [{ id: "a", label: "A", community: 0, community_name: "Wrong" }], links: [], community_labels: { 0: "Group A" } })))).findings.join(" ")).toContain("community_name");
  });

  test("D424-R1a: staging equal to, inside, above or linked to the bound source refuses before any write", () => {
    const b = build();
    const outer = join(b.root, "outer");
    const repo = join(outer, "repo");
    mkdirSync(join(repo, "source-folder"), { recursive: true });
    const g = (...a) => execFileSync("git", ["-C", repo, ...a], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    g("init", "-q", "-b", "main");
    g("config", "user.email", "t@example.test");
    g("config", "user.name", "t");
    writeFileSync(join(repo, "source-folder", "keep.txt"), "keep");
    g("add", ".");
    g("commit", "-q", "-m", "one");
    const link = join(b.root, "alias");
    symlinkSync(repo, link, "junction");
    const who = { ...caller, rootNative: repo, gitDirNative: join(repo, ".git") };
    const run = (staging, source = { repo }) => G.composeCandidate({ candidateState: b.cand, baseline: b.base, staging, workRoot: b.root, source, caller: who, frozenAt: "x", fragmentsDir: b.frags });
    for (const [staging, role] of [[join(repo, "source-folder"), "source repository"], [repo, "source repository"], [outer, "source repository"], [join(repo, ".git", "x"), "source Git directory"], [join(link, "source-folder"), "source repository"]]) {
      const r = run(staging);
      expect(r.ok).toBe(false);
      expect(r.findings.join(" ")).toContain(`disjoint from the ${role}`);
    }
    expect(readFileSync(join(repo, "source-folder", "keep.txt"), "utf8")).toBe("keep");
    expect(g("status", "--porcelain")).toBe("");
    expect(run(b.staging, null).findings[0]).toContain("bound source repository is required");
    expect(run(b.staging, { repo: b.base }).findings[0]).toContain("unavailable");
    expect(G.composeCandidate({ candidateState: b.cand, baseline: b.base, staging: b.staging, workRoot: b.root, source: { repo }, caller, frozenAt: "x", fragmentsDir: b.frags }).findings[0]).toContain("caller root is not the bound source");
    expect(existsSync(b.staging)).toBe(false);
  }, SLOW);

  test("raw null in the candidate is refused before any rebinding", () => {
    const r = compose(build(({ cand }) => writeFileSync(join(cand, "branch.json"), JSON.stringify({ schemaVersion: 1, branchName: null, lastSeenHead: null, lastAnalyzedHead: null, stale: false }))));
    expect(r.ok).toBe(false);
    expect(r.findings.join(" ")).toContain("raw");
  });

  test("a disposable path in a promoted file is refused", () => {
    const r = compose(build(({ cand }) => writeFileSync(join(cand, "scope.json"), JSON.stringify({ root: "C:/CoWork/outputs/x/checkout" }))));
    expect(r.ok).toBe(false);
    expect(r.findings[0]).toContain("foreign path in scope.json");
  });
});

// ===========================================================================
// `D-424` corrections: one fixture boundary before any write (R1), hash-only
// names (R2, above), full edge-field parity (R3), source re-check at
// publication (R4) and changed-symbol description review (G-D423-1).
// ===========================================================================
const LIVE_PARENT = dirname(G.REAL_LIVE_TARGET);
const liveUntouched = () => [".graphify-txn.json", ".graphify.lock", ".graphify.recovery", ".graphify-receipts"].every((x) => !existsSync(join(LIVE_PARENT, x)));

describe("D-424 R1: one fixture boundary for publish, recover and compose", () => {
  test("the live ancestor and live-as-staging are refused before any write", () => {
    const f = fixture();
    const up = G.publish({ target: LIVE_PARENT, staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source: src() });
    expect(up.outcome).toBe("refused");
    expect(up.reason).toContain("F3");
    const asStaging = G.publish({ target: f.target, staging: G.REAL_LIVE_TARGET, reviewedManifest: f.reviewed, fixture: f.parent, source: src() });
    expect(asStaging.outcome).toBe("refused");
    expect(asStaging.reason).toContain("real live target");
    expect(G.fixtureBoundary(LIVE_PARENT, { target: join(LIVE_PARENT, "x", ".graphify") })[0]).toContain("fixture root");
    expect(digest(f.target)).toBe(f.baseline);
    expect(existsSync(f.P.journal) || existsSync(f.P.lock)).toBe(false);
    expect(liveUntouched()).toBe(true);
  }, SLOW);

  test("an alias of the live target through a link is refused in any role", () => {
    const f = fixture();
    const link = join(f.parent, "alias");
    symlinkSync(G.REAL_LIVE_TARGET, link, "junction");
    expect(G.isRealLiveTarget(link)).toBe(true);
    expect(G.publish({ target: f.target, staging: link, reviewedManifest: f.reviewed, fixture: f.parent, source: src() }).reason).toContain("real live target");
    expect(G.publish({ target: join(link, "inner"), staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source: src() }).reason).toContain("F3");
    expect(liveUntouched()).toBe(true);
  }, SLOW);

  test("a missing root, or a runtime path outside the declared root, is refused", () => {
    const f = fixture();
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, fixture: true, source: src() }).reason).toContain("declared fixture or work root");
    const elsewhere = join(F2, `elsewhere${n}`);
    mkdirSync(elsewhere);
    expect(G.publish({ target: f.target, staging: elsewhere, reviewedManifest: f.reviewed, fixture: f.parent, source: src() }).reason).toContain("outside the declared fixture root");
    expect(digest(f.target)).toBe(f.baseline);
  }, SLOW);

  test("recover refuses without a root, on the live target, and on journal paths outside the root", () => {
    const f = fixture();
    expect(G.recover({ target: f.target }).reason).toContain("declared fixture or work root");
    expect(G.recover({ target: G.REAL_LIVE_TARGET, fixture: f.parent }).reason).toContain("F3");
    const outsideOld = join(F2, `outside-old${n}`);
    writeFileSync(f.P.journal, JSON.stringify({ stage: "old-moved", target: f.P.target, runToken: "r", sourceCommit: "x", backupManifest: f.baseline, reviewedManifest: f.reviewed, old: outsideOld, backup: join(f.parent, "b"), staging: f.staging }));
    writeFileSync(f.P.lock, JSON.stringify({ runToken: "r", pid: 999999, host: hostname(), start: "x" }));
    const r = G.recover({ target: f.target, fixture: f.parent });
    expect(r.outcome).toBe("recovery-required");
    expect(r.reason).toContain("fixture boundary");
    expect(existsSync(f.P.journal)).toBe(true);
  }, SLOW);

  test("compose checks the boundary before reading or deleting anything", () => {
    const b = build();
    const sentinel = join(F2, `keep${n}`);
    mkdirSync(sentinel);
    writeFileSync(join(sentinel, "keep.txt"), "keep");
    expect(G.composeCandidate({ candidateState: b.cand, baseline: b.base, staging: sentinel, workRoot: b.root, caller: {}, frozenAt: "x", fragmentsDir: b.frags }).findings[0]).toContain("outside the declared fixture root");
    expect(readFileSync(join(sentinel, "keep.txt"), "utf8")).toBe("keep");
    expect(G.composeCandidate({ candidateState: b.cand, baseline: b.base, staging: b.cand, workRoot: b.root, caller: {}, frozenAt: "x", fragmentsDir: b.frags }).findings[0]).toContain("disjoint from the candidate");
    expect(existsSync(join(b.cand, "graph.json"))).toBe(true);
    expect(G.composeCandidate({ candidateState: b.cand, baseline: b.base, staging: b.staging, caller: {}, frozenAt: "x", fragmentsDir: b.frags }).findings[0]).toContain("declared fixture or work root");
    // An unreadable candidate proves the order: the live finding comes first, before any candidate check.
    const r = G.composeCandidate({ candidateState: join(b.root, "absent"), baseline: b.base, staging: join(G.REAL_LIVE_TARGET, "d424-probe"), workRoot: b.root, caller: {}, frozenAt: "x", fragmentsDir: b.frags });
    expect(r.findings[0]).toContain("real live target");
    expect(existsSync(join(G.REAL_LIVE_TARGET, "d424-probe"))).toBe(false);
  });

  // Reuses the composition builder from the block above.
  function build() {
    const root = join(F2, `b424-${++n}`);
    const cand = join(root, "cand"), base = join(root, "base"), frags = join(root, "frags");
    for (const d of [cand, base, frags]) mkdirSync(d, { recursive: true });
    writeFileSync(join(cand, "graph.json"), "{}");
    return { root, cand, base, frags, staging: join(root, "staging") };
  }
});

describe("D-424 R3: every declared edge field is compared", () => {
  const setup = (links, edges) => {
    const d = join(F2, `par${++n}`);
    mkdirSync(d);
    writeFileSync(join(d, "frag1.json"), JSON.stringify({ nodes: [{ id: "a" }, { id: "b" }], edges }));
    return G.fragmentParity({ nodes: [{ id: "a" }, { id: "b" }], links }, d);
  };
  const e = (extra = {}) => ({ source: "a", target: "b", relation: "references", confidence: "EXTRACTED", ...extra });
  test("altered confidence or omitted declared metadata is refused; extra saved fields and key order are not", () => {
    expect(setup([e({ confidence: "INFERRED" })], [e()]).diffs[0]).toContain("edge fields differ");
    expect(setup([e()], [e({ evidence: { line: 4, file: "x" } })]).diffs[0]).toContain("edge fields differ");
    expect(setup([e({ evidence: { file: "x", line: 4 }, _src: "a" })], [e({ evidence: { line: 4, file: "x" } })]).exact).toBe(1);
  });
  test("parallel relations match by declared content, each saved edge once", () => {
    const two = [e(), e({ confidence: "INFERRED" })];
    expect(setup(two, two).exact).toBe(1);
    expect(setup([e()], two).diffs.length).toBe(1);
    expect(setup([e()], [e(), e()]).diffs.length).toBe(1);
  });
  test("D424-R3a: a complete assignment is found whatever the order; insufficient or changed edges still refuse", () => {
    const gen = { source: "a", target: "b", relation: "r" };
    const spec = { ...gen, confidence: 1 };
    for (const saved of [[{ ...gen, confidence: 1 }, { ...gen, confidence: 0 }], [{ ...gen, confidence: 0 }, { ...gen, confidence: 1 }]]) {
      expect(setup(saved, [gen, spec]).exact).toBe(1);
      expect(setup(saved, [spec, gen]).exact).toBe(1);
    }
    expect(setup([{ ...gen, confidence: 0 }, { ...gen, confidence: 0 }], [gen, spec]).diffs[0]).toContain("edge fields differ");
    expect(setup([{ ...gen, confidence: 1 }], [gen, spec]).diffs.length).toBe(1);
    expect(G.unassigned([1, 2], [2, 1], (d, s) => d <= s)).toEqual([]);
  });
});

describe("D-424 R4: publish re-checks the source under its lock", () => {
  const change = {
    HEAD: (g, d) => { writeFileSync(join(d, "a.txt"), "b"); g("commit", "-qam", "two"); },
    ref: (g) => g("tag", "t-late"),
    config: (g) => g("config", "core.lateflag", "1"),
  };
  for (const [what, mutate] of Object.entries(change)) {
    test(`a ${what} change between snapshot and publication is refused before any journal`, () => {
      const f = fixture();
      const { d, g } = tinyRepo();
      const source = { repo: d, snapshot: G.snapshotSource(d) };
      mutate(g, d);
      const r = G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source });
      expect(r.outcome).toBe("refused");
      expect(r.reason).toContain("invalidated");
      expect(digest(f.target)).toBe(f.baseline);
      expect(existsSync(f.P.journal) || existsSync(f.P.lock)).toBe(false);
    }, SLOW);
  }
  test("an unavailable source is refused, and the journal binds the snapshot's HEAD", () => {
    const f = fixture();
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source: { repo: join(F2, "no-such-repo"), snapshot: src().snapshot } }).reason).toContain("invalidated");
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent }).reason).toContain("source repository and snapshot");
    const ok = G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source: src() });
    expect(ok.outcome).toBe("released");
    const receipt = readdirSync(f.P.receipts).find((x) => x.startsWith("release-"));
    expect(JSON.parse(readFileSync(join(f.P.receipts, receipt), "utf8")).sourceCommit).toBe(src().snapshot.head);
  }, SLOW);
});

describe("D-424 G-D423-1: a changed symbol's description is pending, not replayed", () => {
  const setup = (withHead) => {
    const { d, g } = tinyRepo();
    writeFileSync(join(d, "b.txt"), "b");
    g("add", ".");
    g("commit", "-qm", "two");
    const base = g("rev-parse", "HEAD").trim();
    writeFileSync(join(d, "a.txt"), "changed");
    g("commit", "-qam", "three");
    const state = join(F2, `st${n}`), baseline = join(F2, `bl${n}`);
    mkdirSync(join(state, "description-instructions"), { recursive: true });
    mkdirSync(baseline);
    writeFileSync(join(state, "graph.json"), JSON.stringify({ nodes: [{ id: "na", source_file: "a.txt" }, { id: "nb", source_file: "b.txt" }, { id: "nc" }] }));
    writeFileSync(join(state, "description-instructions", "batch-1.md"), ['- "na": "na" | kind=function', '- "nb": "nb" | kind=function', '- "nc": "nc" | kind=concept'].join("\n"));
    writeFileSync(join(baseline, "graph.json"), JSON.stringify({ nodes: [{ id: "na", description: "old a" }, { id: "nb", description: "old b" }, { id: "nc", description: "old c" }] }));
    if (withHead) writeFileSync(join(baseline, "branch.json"), JSON.stringify({ lastAnalyzedHead: base }));
    return { d, state, baseline };
  };
  test("unchanged files replay; a changed file's symbol is pending until answered", () => {
    const s = setup(true);
    expect(G.replayDescriptions(s.state, join(s.baseline, "graph.json"), {}, s.d)).toEqual(["na"]);
    expect(JSON.parse(readFileSync(join(s.state, "description-instructions", "batch-1.json"), "utf8"))).toEqual({ nb: "old b", nc: "old c" });
    expect(G.replayDescriptions(s.state, join(s.baseline, "graph.json"), { na: "new a" }, s.d)).toEqual([]);
  }, SLOW);
  test("an unprovable baseline commit leaves every file-backed symbol pending", () => {
    const s = setup(false);
    expect(G.replayDescriptions(s.state, join(s.baseline, "graph.json"), {}, s.d)).toEqual(["na", "nb"]);
  }, SLOW);
});
