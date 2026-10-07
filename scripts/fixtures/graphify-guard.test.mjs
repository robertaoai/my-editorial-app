// `B-050` stages F1 (`D-418`–`D-421`) and F2 (`D-423`, corrected by `D-424`) —
// the intended-case proof for the guarded-rebuild validators, the `docs-drift`
// journal check, and F2's generation, composition, fixture-only publication
// and owned recovery. Every case names the boundary it must reach, including D424-R1a, D424-R3a and the D-425 F3 matrix. A passing
// run is not live publication (F3), prevention or B-050 closure. All
// filesystem cases run in a disposable temp directory; nothing here opens the
// live `.graphify` state for writing (the `D-424` cases only read it, or link to it).

import { afterAll, describe, expect, test } from "bun:test";
import { execFileSync, spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, symlinkSync, writeFileSync } from "node:fs";
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
  test("running the guard with any verb but prepare, publish or recover refuses (D-425)", () => {
    const r = spawnSync(process.execPath, [join(REPO, "scripts", "graphify", "guarded-rebuild.mjs")], { encoding: "utf8" });
    expect(r.status).toBe(2);
    expect(r.stderr).toContain("stage F3");
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
    expect(live.reason).toContain("fixture mode");
  }, SLOW); // `D-426`: it builds the shared source repository on first use; it timed out at 5,031 ms under suite load

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
// Compared with the state at load, not with absence: since D-425 receipt 3 the real live parent
// legitimately holds `.graphify-receipts/` from the guarded release (`D-426` fixture correction).
const liveArtifacts = () => JSON.stringify([".graphify-txn.json", ".graphify.lock", ".graphify.recovery", ".graphify-receipts"].map((x) => {
  const p = join(LIVE_PARENT, x);
  const h = (f) => createHash("sha256").update(readFileSync(f)).digest("hex");
  if (!existsSync(p)) return [x, null];
  return [x, statSync(p).isDirectory() ? readdirSync(p).sort().map((f) => [f, h(join(p, f))]) : h(p)];
}));
const LIVE_AT_LOAD = liveArtifacts();
const liveUntouched = () => liveArtifacts() === LIVE_AT_LOAD;

describe("D-424 R1: one fixture boundary for publish, recover and compose", () => {
  test("the live ancestor and live-as-staging are refused before any write", () => {
    const f = fixture();
    const up = G.publish({ target: LIVE_PARENT, staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source: src() });
    expect(up.outcome).toBe("refused");
    expect(up.reason).toContain("fixture mode");
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
    expect(G.publish({ target: join(link, "inner"), staging: f.staging, reviewedManifest: f.reviewed, fixture: f.parent, source: src() }).reason).toContain("fixture mode");
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
    expect(G.recover({ target: G.REAL_LIVE_TARGET, fixture: f.parent }).reason).toContain("fixture mode");
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

// ===========================================================================
// STAGE F3 (`D-425`): guarded live publication. Every case runs on a fixture
// "live" target in the live layout (a parent folder plus a junction link), with
// fake generation/composition; the released root is only ever read.
// ===========================================================================
const sha256 = (b) => createHash("sha256").update(b).digest("hex");
const ACC = "### F3 acceptance record";
/** A fixture live layout: parent/.graphify state, reached through link/.graphify; its own bootstrap. */
const liveLayout = () => {
  const root = join(F2, `live${++n}`);
  const dir = join(root, "parent", ".graphify");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "graph.json"), JSON.stringify({ v: "released", n }));
  writeFileSync(join(dir, "branch.json"), "{}");
  mkdirSync(join(root, "link"));
  const link = join(root, "link", ".graphify");
  symlinkSync(dir, link, "junction");
  const map = G.hashTree(dir);
  const boot = { releaseLocus: "a".repeat(40), algorithm: G.MANIFEST_ALGORITHM, digest: G.treeDigest(map), files: Object.keys(map).length };
  return { root, dir, link, boot, P: G.transactionPaths(link) };
};
/** A clean source repository holding a B-050 handoff file. */
const sourceRepo = () => {
  const r = tinyRepo();
  mkdirSync(join(r.d, "docs", "handoff"), { recursive: true });
  writeFileSync(join(r.d, "docs", "handoff", "B-050-x.md"), "# B-050\n\nhistory\n");
  r.g("add", ".");
  r.g("commit", "-q", "-m", "handoff");
  return r;
};
const head = (g) => g("rev-parse", "HEAD").trim();
/** Fake generation: pending until a description answer exists; fake composition copies the candidate. */
const CLI_SEEN = [];
const deps = {
  pinned: () => ({ ok: true, cli: "verified-cli" }),
  generate: ({ work, answers, cli }) => {
    CLI_SEEN.push(cli);
    if (cli !== "verified-cli") return { status: "refused", reason: `unverified CLI: ${cli}` };
    if (!answers.descriptions?.x) return { status: "pending-semantic", pending: { descriptions: ["x"], communities: [] } };
    const state = join(work, "state");
    mkdirSync(state, { recursive: true });
    writeFileSync(join(state, "graph.json"), JSON.stringify({ v: "reviewed", d: answers.descriptions.x }));
    writeFileSync(join(state, "branch.json"), "{}");
    return { status: "generated", state, checkout: join(work, "co") };
  },
  compose: ({ candidateState, staging }) => {
    cpSync(candidateState, staging, { recursive: true });
    const map = G.hashTree(staging);
    return { ok: true, manifest: G.treeDigest(map), files: Object.keys(map).length, graphSha256: map["graph.json"], frozenAt: "2026-10-06T00:00:00.000Z" };
  },
};
const stateOf = (work) => JSON.parse(readFileSync(join(work, "STATE.json"), "utf8"));
/** The caller's trusted context for the work commands (F3-C2), with the fixture's disposable root. */
const C = (L, r) => ({ repo: r.d, liveTarget: L.link, bootstrap: L.boot, workRoots: [TMP] });
/** The canonical acceptance record for a ready work folder. */
const recordFor = (work, over = {}) => {
  const st = stateOf(work);
  return { kind: "graphify-f3-acceptance", version: 1, disposition: "Accept", scope: "F3 publication", reviewer: "Lane B", workId: st.workId,
    graphSha256: st.ready.graphSha256, manifest: { algorithm: G.MANIFEST_ALGORITHM, digest: st.ready.manifest, files: st.ready.files },
    analyzedSource: st.frozen.snapshot.head, baseline: { releaseLocus: st.frozen.baseline.releaseLocus, algorithm: G.MANIFEST_ALGORITHM, digest: st.frozen.baseline.digest },
    pendingSemantics: 0, ...over };
};
const FENCE = "`".repeat(3);
const block = (text) => `\n${ACC}\n${FENCE}json\n${text}\n${FENCE}\n`;
/** Lane B's review commit: appends text to B-050 and commits it (handoff-only). */
const reviewCommit = (r, text, msg = "review") => {
  const p = join(r.d, "docs", "handoff", "B-050-x.md");
  writeFileSync(p, readFileSync(p, "utf8") + text);
  r.g("commit", "-q", "-am", msg);
  return head(r.g);
};
/** A ready work folder: prepare (pending) then resume with answers. */
const readyWork = (L, r) => {
  const work = join(F2, `w${++n}`);
  expect(G.prepareWork({ work, ...C(L, r), deps }).exit).toBe(G.EXIT.pending);
  expect(G.resumeWork({ work, answers: { descriptions: { x: "X" } }, answersHash: "h1", ...C(L, r), deps }).exit).toBe(G.EXIT.ok);
  return work;
};

describe("D-425 F3-R1a: the acceptance record (schema, then the commit that introduces it)", () => {
  const valid = () => ({ kind: "graphify-f3-acceptance", version: 1, disposition: "Accept", scope: "F3 publication", reviewer: "Lane B",
    workId: "12345678-1234-4123-8123-123456789abc", graphSha256: "b".repeat(64), manifest: { algorithm: G.MANIFEST_ALGORITHM, digest: "c".repeat(64), files: 3 },
    analyzedSource: "d".repeat(40), baseline: { releaseLocus: "e".repeat(40), algorithm: G.MANIFEST_ALGORITHM, digest: "f".repeat(64) }, pendingSemantics: 0 });
  const t = (o) => JSON.stringify(o, null, 2);
  test("a canonical, exactly-keyed, typed record parses", () => {
    expect(G.parseAcceptance(t(valid())).ok).toBe(true);
  });
  test("extra, reordered, nested-extra, non-object, duplicate, wrong-type, wrong-literal, placeholder and non-canonical records refuse", () => {
    const v = valid();
    const { kind, ...rest } = v;
    const nested = { ...v, manifest: { ...v.manifest, extra: 1 } };
    const cases = [
      t({ ...v, extra: 1 }),
      t({ ...rest, kind }),
      t(nested),
      t({ ...v, manifest: "x" }),
      t(v).replace('"version": 1,', '"version": 1,\n  "version": 1,'),
      t({ ...v, version: "1" }),
      t({ ...v, disposition: "Reject" }),
      t({ ...v, graphSha256: "<64 lowercase hex>" }),
      JSON.stringify(v),
    ];
    for (const c of cases) expect(G.parseAcceptance(c).ok).toBe(false);
  });
  test("only the record the review commit itself introduces is accepted; inherited, duplicated, quoted, prose-only and out-of-range records refuse", () => {
    const r = sourceRepo();
    const analyzed = head(r.g);
    const rec = t(valid());
    const good = reviewCommit(r, block(rec));
    expect(G.acceptanceAt(r.d, good, { analyzedHead: analyzed, publicationHead: good }).ok).toBe(true);
    const inherited = reviewCommit(r, "\nunrelated note\n");
    expect(G.acceptanceAt(r.d, inherited, { analyzedHead: analyzed, publicationHead: inherited }).findings[0]).toContain("adds no complete");
    const two = reviewCommit(r, block(rec) + block(rec));
    expect(G.acceptanceAt(r.d, two, { analyzedHead: analyzed, publicationHead: two }).findings[0]).toContain("more than one");
    const quoted = reviewCommit(r, block(rec).split("\n").map((l) => (l ? "> " + l : l)).join("\n"));
    expect(G.acceptanceAt(r.d, quoted, { analyzedHead: analyzed, publicationHead: quoted }).ok).toBe(false);
    const prose = reviewCommit(r, "\nAccepted " + "b".repeat(64) + ".\n");
    expect(G.acceptanceAt(r.d, prose, { analyzedHead: analyzed, publicationHead: prose }).ok).toBe(false);
    expect(G.acceptanceAt(r.d, analyzed, { analyzedHead: analyzed, publicationHead: prose }).findings[0]).toContain("outside");
    expect(G.acceptanceAt(r.d, good, { analyzedHead: good, publicationHead: prose }).findings[0]).toContain("outside");
  }, SLOW);
});

describe("D-425 F3-R2: the publication source rule (handoff-only fast-forward)", () => {
  const setup = () => {
    const r = sourceRepo();
    return { ...r, snap: G.snapshotSource(r.d) };
  };
  test("a handoff-only fast-forward passes and records the publication HEAD", () => {
    const r = setup();
    const h = reviewCommit(r, "\nreview\n");
    const res = G.publicationSourceFindings(r.d, r.snap);
    expect(res.ok).toBe(true);
    expect(res.publicationHead).toBe(h);
  }, SLOW);
  test("code, mixed, dirty, config, other-ref and non-fast-forward changes refuse", () => {
    const code = setup();
    writeFileSync(join(code.d, "a.txt"), "changed");
    code.g("commit", "-q", "-am", "code");
    expect(G.publicationSourceFindings(code.d, code.snap).findings.join(" ")).toContain("outside docs/handoff/");
    const mixed = setup();
    writeFileSync(join(mixed.d, "a.txt"), "changed");
    writeFileSync(join(mixed.d, "docs", "handoff", "B-050-x.md"), "edited");
    mixed.g("commit", "-q", "-am", "mixed");
    expect(G.publicationSourceFindings(mixed.d, mixed.snap).ok).toBe(false);
    const dirty = setup();
    writeFileSync(join(dirty.d, "a.txt"), "dirty");
    expect(G.publicationSourceFindings(dirty.d, dirty.snap).findings[0]).toContain("not clean");
    const config = setup();
    config.g("config", "core.lateflag", "1");
    expect(G.publicationSourceFindings(config.d, config.snap).findings.join(" ")).toContain("config");
    const tag = setup();
    tag.g("tag", "t-late");
    expect(G.publicationSourceFindings(tag.d, tag.snap).findings.join(" ")).toContain("other than the source branch");
    const nff = setup();
    reviewCommit(nff, "\nfirst\n");
    const at = G.snapshotSource(nff.d);
    nff.g("reset", "-q", "--hard", "HEAD~1");
    reviewCommit(nff, "\nother\n");
    expect(G.publicationSourceFindings(nff.d, at).findings.join(" ")).toContain("not a fast-forward");
  }, SLOW);
});

describe("D-425 F3-R6: baseline selection (bootstrap, then the release chain)", () => {
  test("the bootstrap matches; a changed live map refuses", () => {
    const L = liveLayout();
    expect(G.selectBaseline({ liveTarget: L.link, bootstrap: L.boot }).baseline.releaseLocus).toBe(L.boot.releaseLocus);
    writeFileSync(join(L.dir, "branch.json"), "{\"changed\":1}");
    expect(G.selectBaseline({ liveTarget: L.link, bootstrap: L.boot }).ok).toBe(false);
  });
  test("ambiguous receipts and a broken chain refuse", () => {
    const L = liveLayout();
    writeFileSync(join(L.dir, "graph.json"), "{\"v\":\"next\"}");
    const live = digest(L.dir);
    mkdirSync(L.P.receipts, { recursive: true });
    const receipt = (name, pred) => writeFileSync(join(L.P.receipts, name), JSON.stringify({ kind: "release", manifestAlgorithm: G.MANIFEST_ALGORITHM, target: L.dir, reviewedManifest: live,
      acceptance: { record: { disposition: "Accept" }, locus: { commit: "1".repeat(40) } }, predecessor: pred }));
    receipt("release-a.json", { releaseLocus: "9".repeat(40), digest: "9".repeat(64) });
    expect(G.selectBaseline({ liveTarget: L.link, bootstrap: L.boot }).reason).toContain("chain");
    receipt("release-b.json", { releaseLocus: L.boot.releaseLocus, digest: L.boot.digest });
    expect(G.selectBaseline({ liveTarget: L.link, bootstrap: L.boot }).reason).toContain("ambiguous");
  });
});

describe("D-425 F3-R3/R3a/R3b: work states and commands", () => {
  test("fresh → pending → resume → ready → committed review → publish → published; the next baseline follows the chain", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = readyWork(L, r);
    const before = digest(L.dir);
    const missing = G.publishWork({ work, review: head(r.g), ...C(L, r) });
    expect(missing.exit).toBe(G.EXIT.refused);
    expect(missing.message).toBe("this run did not publish or create a transaction journal");
    expect(stateOf(work).state).toBe("ready");
    const sha = reviewCommit(r, block(JSON.stringify(recordFor(work), null, 2)));
    const res = G.publishWork({ work, review: sha, ...C(L, r) });
    expect(res.exit).toBe(G.EXIT.ok);
    expect(res.message).toBe("published: live equals the reviewed manifest");
    expect(stateOf(work).state).toBe("published");
    expect(digest(L.dir)).toBe(stateOf(work).ready.manifest);
    expect(digest(L.dir)).not.toBe(before);
    expect(existsSync(L.P.journal) || existsSync(L.P.lock)).toBe(false);
    const rec = JSON.parse(readFileSync(join(L.P.receipts, readdirSync(L.P.receipts).find((x) => x.startsWith("release-"))), "utf8"));
    expect(rec.acceptance.record.workId).toBe(stateOf(work).workId);
    expect(rec.acceptance.locus.commit).toBe(sha);
    expect(rec.predecessor).toEqual({ releaseLocus: L.boot.releaseLocus, digest: L.boot.digest });
    expect(G.selectBaseline({ liveTarget: L.link, bootstrap: L.boot }).baseline.releaseLocus).toBe(sha);
    expect(G.publishWork({ work, review: sha, ...C(L, r) }).exit).toBe(G.EXIT.refused);
  }, SLOW);

  test("a record that does not match the work folder refuses and the folder stays ready", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = readyWork(L, r);
    const sha = reviewCommit(r, block(JSON.stringify(recordFor(work, { graphSha256: "0".repeat(64) }), null, 2)));
    const res = G.publishWork({ work, review: sha, ...C(L, r) });
    expect(res.exit).toBe(G.EXIT.refused);
    expect(res.reason).toContain("graphSha256");
    expect(stateOf(work).state).toBe("ready");
  }, SLOW);

  test("publish from fresh, pending or failed refuses; changed answers after ready and a changed source before resume fail", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const fresh = join(F2, `fresh${++n}`);
    mkdirSync(fresh);
    expect(G.publishWork({ work: fresh, review: "HEAD", ...C(L, r) }).exit).toBe(G.EXIT.refused);
    const pend = join(F2, `pend${++n}`);
    expect(G.prepareWork({ work: pend, ...C(L, r), deps }).exit).toBe(G.EXIT.pending);
    expect(G.publishWork({ work: pend, review: "HEAD", ...C(L, r) }).exit).toBe(G.EXIT.refused);
    writeFileSync(join(r.d, "a.txt"), "code change");
    r.g("commit", "-q", "-am", "code");
    expect(G.resumeWork({ work: pend, answers: { descriptions: { x: "X" } }, answersHash: "h1", ...C(L, r), deps }).exit).toBe(G.EXIT.failed);
    expect(G.publishWork({ work: pend, review: "HEAD", ...C(L, r) }).exit).toBe(G.EXIT.refused);
    const r2 = sourceRepo();
    const ready = readyWork(L, r2);
    expect(G.resumeWork({ work: ready, answers: {}, answersHash: "h2", ...C(L, r2), deps }).exit).toBe(G.EXIT.failed);
    expect(G.prepareWork({ work: ready, ...C(L, r2), deps }).reason).toContain("not empty");
  }, SLOW);

  test("preparing: alive and unknown owners refuse with the work unchanged; a proved-dead owner fails once; a held claim refuses", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = readyWork(L, r);
    const s = stateOf(work);
    const set = (owner) => writeFileSync(join(work, "STATE.json"), JSON.stringify({ ...s, state: "preparing", owner }));
    const snap = () => G.treeDigest(G.hashTree(work));
    set(G.ownerRecord("alive-run"));
    let before = snap();
    expect(G.resumeWork({ work, answers: {}, answersHash: "h1", ...C(L, r), deps }).reason).toContain("alive");
    expect(snap()).toBe(before);
    const { start, ...noStart } = G.ownerRecord("unknown-run");
    set(noStart);
    before = snap();
    expect(G.publishWork({ work, review: "HEAD", ...C(L, r) }).reason).toContain("cannot be established");
    expect(snap()).toBe(before);
    writeFileSync(join(work, "STATE.json"), "{torn");
    expect(G.publishWork({ work, review: "HEAD", ...C(L, r) }).reason).toContain("cannot be established");
    set({ runToken: "dead-run", pid: 999999, host: hostname(), start: "x" });
    expect(G.resumeWork({ work, answers: {}, answersHash: "h1", ...C(L, r), deps }).exit).toBe(G.EXIT.failed);
    expect(stateOf(work).state).toBe("failed");
    expect(G.resumeWork({ work, answers: {}, answersHash: "h1", ...C(L, r), deps }).exit).toBe(G.EXIT.refused);
    writeFileSync(join(work, ".claim"), JSON.stringify(G.ownerRecord("held")));
    before = snap();
    expect(G.publishWork({ work, review: "HEAD", ...C(L, r) }).reason).toContain("claim is held");
    expect(snap()).toBe(before);
  }, SLOW);

  test("a prepare killed mid-run (real termination) is classified failed on the next entry, never resumed", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = join(F2, `killed${++n}`);
    const script = join(F2, `kill${n}.mjs`);
    writeFileSync(script, `
const G = await import(${JSON.stringify(MODULE_URL)});
G.prepareWork({ repo: ${JSON.stringify(r.d)}, work: ${JSON.stringify(work)}, liveTarget: ${JSON.stringify(L.link)}, workRoots: ${JSON.stringify([TMP])},
  bootstrap: ${JSON.stringify(L.boot)}, deps: { pinned: () => ({ ok: true, cli: "verified-cli" }), generate: () => process.exit(137), compose: () => ({}) } });
`);
    expect(spawnSync(process.execPath, [script], { encoding: "utf8", timeout: 120000 }).status).toBe(137);
    expect(stateOf(work).state).toBe("preparing");
    expect(G.resumeWork({ work, answers: {}, answersHash: null, ...C(L, r), deps }).exit).toBe(G.EXIT.failed);
  }, SLOW);
});

describe("D-425 F3-R4/R4a: outcomes and messages", () => {
  const reviewed = () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = readyWork(L, r);
    const sha = reviewCommit(r, block(JSON.stringify(recordFor(work), null, 2)));
    return { L, r, work, sha };
  };
  test("an entry refusal leaves a peer's journal and lock byte-equal", () => {
    const { L, r, work, sha } = reviewed();
    writeFileSync(L.P.journal, JSON.stringify({ stage: "prepared", target: L.dir, runToken: "peer", sourceCommit: "x", backupManifest: L.boot.digest, reviewedManifest: "0".repeat(64) }));
    writeFileSync(L.P.lock, JSON.stringify(G.ownerRecord("peer")));
    const j = readFileSync(L.P.journal, "utf8"), l = readFileSync(L.P.lock, "utf8"), live = digest(L.dir);
    const res = G.publishWork({ work, review: sha, ...C(L, r) });
    expect(res.exit).toBe(G.EXIT.refused);
    expect(readFileSync(L.P.journal, "utf8")).toBe(j);
    expect(readFileSync(L.P.lock, "utf8")).toBe(l);
    expect(digest(L.dir)).toBe(live);
    const rr = G.recoverLive({ liveTarget: L.link });
    expect(rr.exit).toBe(G.EXIT.refused);
    expect(rr.reason).toContain("owner is alive");
    expect(readFileSync(L.P.journal, "utf8")).toBe(j);
  }, SLOW);
  test("an owned failure restores (exit 6, verified); a blocked restore is recovery-required (exit 5) with evidence kept", () => {
    const a = reviewed();
    const before = digest(a.L.dir);
    const res = G.publishWork({ work: a.work, review: a.sha, ...C(a.L, a.r), transaction: { inject: { renameNew: () => { throw new Error("sharing violation"); } } } });
    expect(res.exit).toBe(G.EXIT.restored);
    expect(res.message).toBe("restored: live equals the prior release");
    expect(digest(a.L.dir)).toBe(before);
    const b = reviewed();
    const blocked = G.publishWork({ work: b.work, review: b.sha, ...C(b.L, b.r),
      transaction: { inject: { renameNew: () => { throw new Error("sharing violation"); }, recovery: { restore: () => { throw new Error("access denied"); } } } } });
    expect(blocked.exit).toBe(G.EXIT.recoveryRequired);
    expect(blocked.message).toBe("recovery required; the live state is not verified");
    expect(existsSync(b.L.P.journal)).toBe(true);
  }, SLOW);
  test("a receipt failure after verified is completed by recovery with the journal's original acceptance", () => {
    const { L, r, work, sha } = reviewed();
    const res = G.publishWork({ work, review: sha, ...C(L, r), transaction: { inject: { writeReceipt: () => { throw new Error("disk full"); } } } });
    expect(res.exit).toBe(G.EXIT.recoveryRequired);
    const j = JSON.parse(readFileSync(L.P.journal, "utf8"));
    expect(j.acceptance.locus.commit).toBe(sha);
    writeFileSync(L.P.lock, JSON.stringify({ runToken: j.runToken, pid: 999999, host: hostname(), start: "x" }));
    const rec = G.recoverLive({ liveTarget: L.link });
    expect(rec.outcome).toBe("completed-release");
    expect(rec.exit).toBe(G.EXIT.ok);
    const receipt = JSON.parse(readFileSync(join(L.P.receipts, `release-${j.runToken}.json`), "utf8"));
    expect(receipt.acceptance).toEqual(j.acceptance);
    expect(receipt.completedByRecovery).toBe(true);
  }, SLOW);
  test("every outcome keeps its own exit code", () => {
    expect([G.exitFor("released"), G.exitFor("refused"), G.exitFor("pending"), G.exitFor("failed"), G.exitFor("recovery-required"),
      G.exitFor("restored"), G.exitFor("rolled-back"), G.exitFor("aborted-live-unchanged"), G.exitFor("completed-release"), G.exitFor("nothing-to-recover")])
      .toEqual([0, 2, 3, 4, 5, 6, 6, 7, 0, 0]);
  });
});

describe("D-425 F3-R5: no instruction routes around the guard", () => {
  test("docs-drift, SKILL section 9 and README section 4 name the guarded procedure, never a raw live rebuild", () => {
    const drift = readFileSync(join(REPO, "scripts", "checks", "docs-drift.mjs"), "utf8");
    expect(drift).not.toContain("npx graphify hook-rebuild");
    expect(drift).toContain("guarded-rebuild.mjs prepare");
    for (const p of [[".claude", "skills", "sync-docs", "SKILL.md"], ["docs", "graph-fragments", "README.md"]]) {
      const text = readFileSync(join(REPO, ...p), "utf8");
      expect(text).toContain("guarded-rebuild.mjs");
      expect(text).not.toMatch(/^npx graphify hook-rebuild\s*$/m);
    }
  });
});

// ===========================================================================
// D-425 receipt-1 corrections (Lane B `d3e020b`): F3-C1 work-root preflight before any write,
// F3-C2 trusted caller context, F3-C3 the verified CLI through resume, F3-C4 the actual staging
// bytes checked before `reviewed`.
// ===========================================================================
describe("D-425 F3-C1: the work-root preflight refuses before any write or generation", () => {
  test("work inside the source tree, its .git, the live target, outside the disposable root, or through a link alias refuses; nothing is created and generation is never called", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const alias = join(F2, `alias${++n}`);
    symlinkSync(r.d, alias, "junction");
    const outside = join(REPO, "..", `not-disposable-${n}`);
    const cases = [join(r.d, "work"), join(r.d, ".git", "work"), join(L.dir, "work"), join(alias, "work"), outside];
    const before = CLI_SEEN.length;
    const srcBefore = G.treeDigest(G.hashTree(join(r.d, "docs")));
    for (const work of cases) {
      const res = G.prepareWork({ work, ...C(L, r), deps });
      expect(res.exit).toBe(G.EXIT.refused);
      expect(existsSync(work)).toBe(false);
    }
    expect(CLI_SEEN.length).toBe(before);
    expect(G.treeDigest(G.hashTree(join(r.d, "docs")))).toBe(srcBefore);
    expect(r.g("status", "--porcelain")).toBe("");
    expect(G.workRootFindings({ work: join(F2, `ok${n}`), ...C(L, r) })).toEqual([]);
  }, SLOW);
  test("resume and publish run the same preflight before taking the claim", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const inSource = join(r.d, ".git", "w");
    expect(G.resumeWork({ work: inSource, ...C(L, r), deps }).exit).toBe(G.EXIT.refused);
    expect(G.publishWork({ work: inSource, review: "HEAD", ...C(L, r) }).exit).toBe(G.EXIT.refused);
    expect(existsSync(join(inSource, ".claim"))).toBe(false);
  }, SLOW);
});

describe("D-425 F3-C2: the caller's trusted repository and live target bind the work folder", () => {
  test("a STATE naming another source, or an identical-baseline copy as target, refuses before any claim", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = readyWork(L, r);
    const sha = reviewCommit(r, block(JSON.stringify(recordFor(work), null, 2)));
    const other = sourceRepo();
    const twin = liveLayout();
    cpSync(L.dir, twin.dir, { recursive: true, force: true });
    const original = readFileSync(join(work, "STATE.json"), "utf8");
    const st = JSON.parse(original);
    writeFileSync(join(work, "STATE.json"), JSON.stringify({ ...st, repo: other.d }));
    expect(G.publishWork({ work, review: sha, ...C(L, r) }).reason).toContain("source is not this caller's repository");
    writeFileSync(join(work, "STATE.json"), JSON.stringify({ ...st, liveTarget: twin.link }));
    expect(G.publishWork({ work, review: sha, ...C(L, r) }).reason).toContain("target is not this caller's live target");
    expect(existsSync(join(work, ".claim"))).toBe(false);
    writeFileSync(join(work, "STATE.json"), original);
    expect(G.publishWork({ work, review: sha, ...C(twin, r) }).reason).toContain("target is not this caller's live target");
    expect(G.publishWork({ work, review: sha, ...C(L, r) }).exit).toBe(G.EXIT.ok);
  }, SLOW);
});

describe("D-425 F3-C3: resume verifies the installed tool again and hands its CLI to generation", () => {
  test("prepare and resume both reach generation with the verified CLI; an unavailable pin fails resume before generation", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = join(F2, `c3w${++n}`);
    const seen = CLI_SEEN.length;
    expect(G.prepareWork({ work, ...C(L, r), deps }).exit).toBe(G.EXIT.pending);
    expect(G.resumeWork({ work, answers: { descriptions: { x: "X" } }, answersHash: "h1", ...C(L, r), deps }).exit).toBe(G.EXIT.ok);
    expect(CLI_SEEN.slice(seen)).toEqual(["verified-cli", "verified-cli"]);
    const work2 = join(F2, `c3x${++n}`);
    expect(G.prepareWork({ work: work2, ...C(L, r), deps }).exit).toBe(G.EXIT.pending);
    const calls = CLI_SEEN.length;
    const res = G.resumeWork({ work: work2, answers: { descriptions: { x: "X" } }, answersHash: "h1", ...C(L, r), deps: { ...deps, pinned: () => ({ ok: false, reason: "tool pin mismatch: cli.js" }) } });
    expect(res.exit).toBe(G.EXIT.failed);
    expect(res.reason).toContain("tool pin mismatch");
    expect(CLI_SEEN.length).toBe(calls);
  }, SLOW);
  test("the default resume path verifies the real pins and passes a CLI string (never undefined) to the generation bridge", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = join(F2, `c3d${++n}`);
    const seenCli = [];
    const gen = ({ cli }) => (seenCli.push(cli), { status: "pending-semantic", pending: { descriptions: ["x"], communities: [] } });
    const pinned = G.pinnedCli();
    const first = G.prepareWork({ work, ...C(L, r), deps: { generate: gen } });
    if (!pinned.ok) {
      // No pinned Graphify on this machine: prepare refuses before any write; the bridge is never reached.
      expect(first.exit).toBe(G.EXIT.refused);
      expect(seenCli).toEqual([]);
      return;
    }
    expect(first.exit).toBe(G.EXIT.pending);
    expect(G.resumeWork({ work, answers: {}, answersHash: "h", ...C(L, r), deps: { generate: gen } }).exit).toBe(G.EXIT.pending);
    expect(seenCli).toEqual([pinned.cli, pinned.cli]);
    expect(typeof seenCli[1]).toBe("string");
  }, SLOW);
});

describe("D-425 F3-C4: the actual staging bytes are checked before reviewed is written", () => {
  test("staging altered after review refuses, keeps ready and leaves the live state unchanged", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = readyWork(L, r);
    const sha = reviewCommit(r, block(JSON.stringify(recordFor(work), null, 2)));
    const live = digest(L.dir);
    writeFileSync(join(stateOf(work).ready.staging, "graph.json"), "{\"tampered\":true}");
    const res = G.publishWork({ work, review: sha, ...C(L, r) });
    expect(res.exit).toBe(G.EXIT.refused);
    expect(res.reason).toContain("staging bytes differ");
    expect(stateOf(work).state).toBe("ready");
    expect(digest(L.dir)).toBe(live);
    expect(existsSync(L.P.journal)).toBe(false);
  }, SLOW);
});

// ===========================================================================
// D-426 PR2a (B-050 revision 3): the baseline is captured under the publication lock. The capture
// record binds the frozen baseline before any copy; a held lock refuses without failing or rewinding
// work; a dead capture owner's lock is released only by evidenced recovery. Deaths are real (child).
// ===========================================================================
describe("D-426 PR2a: baseline capture under the publication lock", () => {
  const DEAD = { pid: 999999, host: hostname(), start: "x" };
  const captureLock = (L, over = {}) => ({ ...G.ownerRecord("capture-run"), purpose: "capture", workId: "w",
    baseline: { releaseLocus: L.boot.releaseLocus, algorithm: G.MANIFEST_ALGORITHM, digest: L.boot.digest, files: L.boot.files }, ...over });
  const killedAt = (L, r, point) => {
    const work = join(F2, `cap${++n}`);
    const script = join(F2, `cap${n}.mjs`);
    writeFileSync(script, `
const G = await import(${JSON.stringify(MODULE_URL)});
G.prepareWork({ repo: ${JSON.stringify(r.d)}, work: ${JSON.stringify(work)}, liveTarget: ${JSON.stringify(L.link)}, workRoots: ${JSON.stringify([TMP])},
  bootstrap: ${JSON.stringify(L.boot)}, deps: { pinned: () => ({ ok: true, cli: "verified-cli" }), crashAt: ${JSON.stringify(point)},
  generate: () => ({ status: "pending-semantic", pending: { descriptions: ["x"], communities: [] } }), compose: () => ({}) } });
`);
    expect(spawnSync(process.execPath, [script], { encoding: "utf8", timeout: 120000 }).status).toBe(137);
    return work;
  };

  test("a held lock refuses the first prepare: no resumable state, no generation, the peer's lock byte-equal; a later prepare proceeds", () => {
    const L = liveLayout();
    const r = sourceRepo();
    writeFileSync(L.P.lock, JSON.stringify(G.ownerRecord("peer")));
    const lock = readFileSync(L.P.lock, "utf8");
    const work = join(F2, `held${++n}`);
    const seen = CLI_SEEN.length;
    const res = G.prepareWork({ work, ...C(L, r), deps });
    expect(res.exit).toBe(G.EXIT.refused);
    expect(res.reason).toContain("publication lock is held");
    expect(readdirSync(work)).toEqual([]);
    expect(CLI_SEEN.length).toBe(seen);
    expect(readFileSync(L.P.lock, "utf8")).toBe(lock);
    rmSync(L.P.lock);
    expect(G.prepareWork({ work, ...C(L, r), deps }).exit).toBe(G.EXIT.pending);
    expect(existsSync(L.P.lock)).toBe(false);
  }, SLOW);

  test("a held lock refuses a resume: the prior pending record is restored byte for byte, never failed; a later resume proceeds", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = join(F2, `heldr${++n}`);
    expect(G.prepareWork({ work, ...C(L, r), deps }).exit).toBe(G.EXIT.pending);
    const prior = readFileSync(join(work, "STATE.json"));
    writeFileSync(L.P.lock, JSON.stringify(captureLock(L)));
    const lock = readFileSync(L.P.lock, "utf8");
    const seen = CLI_SEEN.length;
    const res = G.resumeWork({ work, answers: { descriptions: { x: "X" } }, answersHash: "h1", ...C(L, r), deps });
    expect(res.exit).toBe(G.EXIT.refused);
    expect(readFileSync(join(work, "STATE.json")).equals(prior)).toBe(true);
    expect(existsSync(join(work, "attempt-2"))).toBe(false);
    expect(CLI_SEEN.length).toBe(seen);
    expect(readFileSync(L.P.lock, "utf8")).toBe(lock);
    rmSync(L.P.lock);
    expect(G.resumeWork({ work, answers: { descriptions: { x: "X" } }, answersHash: "h1", ...C(L, r), deps }).exit).toBe(G.EXIT.ok);
  }, SLOW);

  test("a copy or hash failure fails the attempt (exit 4) and releases the lock; the live state is unchanged", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const live = digest(L.dir);
    const res = G.prepareWork({ work: join(F2, `copyf${++n}`), ...C(L, r), deps: { ...deps, copyBaseline: () => { throw new Error("disk full"); } } });
    expect(res.exit).toBe(G.EXIT.failed);
    expect(res.reason).toContain("disk full");
    expect(existsSync(L.P.lock)).toBe(false);
    const res2 = G.prepareWork({ work: join(F2, `copyh${++n}`), ...C(L, r), deps: { ...deps, copyBaseline: (a, b) => { cpSync(a, b, { recursive: true }); writeFileSync(join(b, "graph.json"), "{}"); } } });
    expect(res2.exit).toBe(G.EXIT.failed);
    expect(res2.reason).toContain("does not equal the frozen baseline");
    expect(existsSync(L.P.lock)).toBe(false);
    expect(digest(L.dir)).toBe(live);
  }, SLOW);

  for (const point of ["after-capture-lock", "after-capture-copy"]) {
    test(`killed ${point}: the capture lock stays; dead-owner recovery releases only it, with a receipt; a retry succeeds`, () => {
      const L = liveLayout();
      const r = sourceRepo();
      const live = digest(L.dir);
      const work = killedAt(L, r, point);
      const lock = JSON.parse(readFileSync(L.P.lock, "utf8"));
      expect(lock.purpose).toBe("capture");
      expect(lock.baseline.digest).toBe(L.boot.digest);
      expect(stateOf(work).state).toBe("preparing");
      expect(G.prepareWork({ work: join(F2, `blocked${++n}`), ...C(L, r), deps }).exit).toBe(G.EXIT.refused);
      const rec = G.recoverLive({ liveTarget: L.link });
      expect(rec.outcome).toBe("capture-recovered");
      expect(rec.exit).toBe(G.EXIT.ok);
      expect(existsSync(L.P.lock) || existsSync(L.P.recovery)).toBe(false);
      const receipt = JSON.parse(readFileSync(join(L.P.receipts, `capture-recovery-${lock.runToken}.json`), "utf8"));
      expect(receipt.baseline).toEqual(lock.baseline);
      expect(digest(L.dir)).toBe(live);
      expect(G.resumeWork({ work, answers: {}, answersHash: null, ...C(L, r), deps }).exit).toBe(G.EXIT.failed);
      expect(G.prepareWork({ work: join(F2, `retry${++n}`), ...C(L, r), deps }).exit).toBe(G.EXIT.pending);
    }, SLOW);
  }

  test("an alive or unknown owner, a malformed binding or a changed live state leaves the capture lock untouched (exit 5)", () => {
    const L = liveLayout();
    const { baseline, ...unbound } = captureLock(L, DEAD);
    const cases = [
      captureLock(L),
      captureLock(L, { start: undefined }),
      unbound,
      captureLock(L, { ...DEAD, baseline: { ...captureLock(L).baseline, digest: "x" } }),
    ];
    for (const rec of cases) {
      writeFileSync(L.P.lock, JSON.stringify(rec));
      const bytes = readFileSync(L.P.lock, "utf8");
      const res = G.recoverLive({ liveTarget: L.link });
      expect(res.exit).toBe(G.EXIT.recoveryRequired);
      expect(readFileSync(L.P.lock, "utf8")).toBe(bytes);
    }
    writeFileSync(L.P.lock, JSON.stringify(captureLock(L, DEAD)));
    writeFileSync(join(L.dir, "graph.json"), "{\"v\":\"changed after death\"}");
    const changed = G.recoverLive({ liveTarget: L.link });
    expect(changed.exit).toBe(G.EXIT.recoveryRequired);
    expect(changed.reason).toContain("bound baseline");
    expect(existsSync(L.P.lock)).toBe(true);
    writeFileSync(L.P.lock, "{torn");
    expect(G.recoverLive({ liveTarget: L.link }).exit).toBe(G.EXIT.recoveryRequired);
    expect(existsSync(L.P.receipts)).toBe(false);
  }, SLOW);

  test("competing recoverers: a held recovery token refuses and the dead owner's capture lock stays byte-equal", () => {
    const L = liveLayout();
    writeFileSync(L.P.lock, JSON.stringify(captureLock(L, DEAD)));
    const bytes = readFileSync(L.P.lock, "utf8");
    writeFileSync(L.P.recovery, JSON.stringify(G.ownerRecord("other-recoverer")));
    const res = G.recoverLive({ liveTarget: L.link });
    expect(res.exit).toBe(G.EXIT.refused);
    expect(res.reason).toContain("recovery token is held");
    expect(readFileSync(L.P.lock, "utf8")).toBe(bytes);
    rmSync(L.P.recovery);
    expect(G.recoverLive({ liveTarget: L.link }).outcome).toBe("capture-recovered");
  }, SLOW);
});

// ===========================================================================
// D-426 PR3a/PR3b with revision 5 (B-050): executable bindings, the selection oracle, the
// selection-time bracket on both extraction branches, fresh-vs-oracle equality and the
// rebuild-vs-producer-merge comparison. A simulated producer drives the wiring and refusal
// cases; the last case runs the REAL pinned producer as the fidelity anchor for the model.
// ===========================================================================
const DAY = 24 * 60 * 60 * 1000;
const PR3_SLOW = 600000; // each case builds two disposable checkouts per generation
const OLD = "2026-08-01T00:00:00Z";
/** A tiny repository with `main` (current), a recent `feat` and an `old` branch last committed at OLD. */
const branchRepo = () => {
  const r = tinyRepo();
  const env = { ...process.env, GIT_COMMITTER_DATE: OLD, GIT_AUTHOR_DATE: OLD };
  r.g("checkout", "-q", "-b", "old");
  writeFileSync(join(r.d, "a.txt"), "old");
  execFileSync("git", ["-C", r.d, "commit", "-q", "-am", "old"], { env });
  r.g("checkout", "-q", "main");
  r.g("checkout", "-q", "-b", "feat");
  writeFileSync(join(r.d, "a.txt"), "feat");
  r.g("commit", "-q", "-am", "feat");
  r.g("checkout", "-q", "main");
  return r;
};
const ukey = (e) => [e.relation, ...[e.source, e.target].sort()].join("\0");
/** Simulates the pinned producer: selection at `at`, the producer merge with any prior graph, valid lifecycle, observed_at. */
const simulate = ({ at = () => Date.now(), edit = (g) => g, calls } = {}) => (cwd, args) => {
  calls?.push(args.join(" "));
  const st = join(cwd, ".graphify");
  mkdirSync(st, { recursive: true });
  const inputs = G.selectionInputs(cwd);
  const o = G.selectionOracle(inputs, at(cwd));
  const k = inputs.repoKey;
  const nodes = [...o.branches.map((id) => ({ id, node_type: "Branch", repo: k, branch_name: id.split("#")[1] })),
    ...o.commits.map((id) => ({ id, node_type: "Commit", repo: k, sha: id.split("@").pop() }))];
  const links = o.memberships.map((m) => {
    const [relation, a, b] = m.split("\0");
    return a.startsWith("commit:") ? { source: a, target: b, relation } : { source: b, target: a, relation };
  });
  const priorPath = join(st, "graph.json");
  const prior = existsSync(priorPath) ? JSON.parse(readFileSync(priorPath, "utf8")) : null;
  let g = { nodes, links };
  if (prior) {
    const ids = new Set(nodes.map((n) => n.id)), keys = new Set(links.map(ukey));
    g = { nodes: [...nodes, ...(prior.nodes ?? []).filter((n) => !ids.has(n.id))], links: [...links, ...(prior.links ?? []).filter((e) => !keys.has(ukey(e)))] };
  }
  g = edit(g, cwd);
  writeFileSync(priorPath, JSON.stringify({ graph: { provenance: { observed_at: new Date(at(cwd) + 5000).toISOString() } }, ...g }));
  const head = execFileSync("git", ["-C", cwd, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  writeFileSync(join(st, "branch.json"), JSON.stringify({ schemaVersion: 1, branchName: "main", lastSeenHead: head, lastAnalyzedHead: head, stale: false }));
  writeFileSync(join(st, "worktree.json"), JSON.stringify({ schemaVersion: 1, worktreePath: cwd, gitDir: join(cwd, ".git"), commonGitDir: join(cwd, ".git"), lastSeenHead: head, lastAnalyzedHead: head }));
  return { code: 0, out: `Rebuilt: ${g.nodes.length} nodes` };
};
const isFresh = (cwd) => /[\\/]fresh$/.test(cwd);
/** A baseline graph carrying one historical membership outside any current window (sha not in the repository). */
const baselineWith = (r, extra = {}) => {
  const k = "repo:github.com/example/fixture-repo";
  const dir = join(F2, `pr3base${++n}`);
  mkdirSync(dir);
  const hist = `commit:${k}@${"f".repeat(40)}`;
  writeFileSync(join(dir, "graph.json"), JSON.stringify({ nodes: [{ id: hist, node_type: "Commit", repo: k, sha: "f".repeat(40) }, { id: `branch:${k}#main`, node_type: "Branch", repo: k, branch_name: "main" }],
    links: [{ source: hist, target: `branch:${k}#main`, relation: "ON_BRANCH" }], ...extra }));
  return { dir, hist, k };
};
const gen = (r, base, tool, more = {}) => G.generateCandidate({ repo: r.d, snapshot: G.snapshotSource(r.d), baseline: base.dir, work: join(F2, `pr3w${++n}`), tool, ...more });
const PASSED_GIT = "docs-layer restore failed"; // the next step after the Git checks: proof the checks passed

describe("D-426 PR3a: the selection oracle reproduces the pinned rules", () => {
  test("default and current always; other heads only within 30 days of the selection time; 200 commits; repo key from origin", () => {
    const inputs = { current: "main", def: "main", repoKey: "repo:x", heads: [{ name: "main", time: 0 }, { name: "old", time: 1000 }, { name: "new", time: 50 * DAY }],
      revs: { main: ["a"], old: ["b"], new: ["c", "a"] } };
    expect(G.selectionOracle(inputs, 30 * DAY + 1000).branches).toEqual(["branch:repo:x#main", "branch:repo:x#new", "branch:repo:x#old"]);
    expect(G.selectionOracle(inputs, 30 * DAY + 1001).branches).toEqual(["branch:repo:x#main", "branch:repo:x#new"]);
    expect(G.selectionOracle(inputs, 30 * DAY + 1001).memberships).toHaveLength(3);
    expect(G.SELECTION_RULES).toEqual({ activeWithinDays: 30, maxCommits: 200, sinceDays: null });
    expect([G.repoKeyOf("https://github.com/a/b.git"), G.repoKeyOf("git@github.com:a/b.git"), G.repoKeyOf("ssh://git@host.example/a/b"), G.repoKeyOf("nonsense")])
      .toEqual(["repo:github.com/a/b", "repo:github.com/a/b", "repo:host.example/a/b", null]);
    expect(G.REBUILD_ARGS).toEqual(["hook-rebuild", "--scope", "committed"]);
  });

  test("revision 5: a stable bracket passes; unordered, invalid or cutoff-crossing brackets refuse", () => {
    const inputs = { current: "main", def: "main", repoKey: "repo:x", heads: [{ name: "old", time: 1000 }], revs: { main: ["a"], old: ["b"] } };
    const edge = 30 * DAY + 1000;
    expect(G.selectionBracket(inputs, edge - 500, edge).ok).toBe(true);
    expect(G.selectionBracket(inputs, edge - 500, edge + 500).finding).toContain("crossed a cutoff");
    expect(G.selectionBracket(inputs, edge, edge - 1).finding).toContain("unordered");
    expect(G.selectionBracket(inputs, NaN, edge).finding).toContain("invalid");
  });
});

describe("D-426 PR3b: both extraction branches against the oracle and the producer merge", () => {
  test("valid control: an old baseline membership outside the new window is carried and passes; brackets and observed_at are recorded separately", () => {
    const r = branchRepo();
    const base = baselineWith(r);
    const calls = [];
    const res = gen(r, base, simulate({ calls }));
    expect(res.reason).toBe(PASSED_GIT);
    expect(calls).toEqual(["hook-rebuild --scope committed", "hook-rebuild --scope committed"]);
    const sel = res.evidence.find((e) => e.stage === "selection");
    expect(sel.branches).toBe(2); // main, feat — `old` is outside 30 days
    expect(sel.brackets.rebuild[0]).toBeLessThanOrEqual(sel.brackets.rebuild[1]);
    expect(sel.observedAt.fresh.length).toBe(1);
    expect(res.evidence.find((e) => e.stage === "hook-rebuild").argv.slice(2)).toEqual(["hook-rebuild", "--scope", "committed"]);
  }, PR3_SLOW);

  test("revision 5: a cutoff crossing on either call refuses through the bracket, even though observed_at exists", () => {
    const r = branchRepo();
    const base = baselineWith(r);
    const edge = Date.parse(OLD) + 30 * DAY;
    const seq = (times) => { let i = 0; return () => times[i++]; };
    const crossing = gen(r, base, simulate({ at: () => edge + 500 }), { clock: seq([edge - 500, edge + 500]) });
    expect(crossing.reason).toContain("crossed a cutoff during the extraction (hook-rebuild)");
    const freshCrossing = gen(r, baselineWith(r), simulate({ at: () => edge - 2000 }), { clock: seq([edge - 3000, edge - 2000, edge - 500, edge + 500]) });
    expect(freshCrossing.reason).toContain("crossed a cutoff during the extraction (fresh extraction)");
    const stable = gen(r, baselineWith(r), simulate({ at: () => edge - 2000 }), { clock: seq([edge - 3000, edge - 2500, edge - 2000, edge - 1500]) });
    expect(stable.reason).toBe(PASSED_GIT);
  }, PR3_SLOW);

  test("the fresh branch: an omitted or invented membership, or an extra branch or commit, refuses with an unchanged lifecycle HEAD", () => {
    const r = branchRepo();
    const k = "repo:github.com/example/fixture-repo";
    const fresh = (edit) => simulate({ edit: (g, cwd) => (isFresh(cwd) ? edit(g) : g) });
    const cases = [
      ["omitted memberships", (g) => ({ ...g, links: g.links.slice(1) })],
      ["extra memberships", (g) => ({ ...g, links: [...g.links, { source: g.nodes.find((x) => x.node_type === "Commit").id, target: `branch:${k}#old`, relation: "ON_BRANCH" }] })],
      ["extra branches", (g) => ({ ...g, nodes: [...g.nodes, { id: `branch:${k}#ghost`, node_type: "Branch", repo: k }] })],
      ["extra commits", (g) => ({ ...g, nodes: [...g.nodes, { id: `commit:${k}@${"e".repeat(40)}`, node_type: "Commit", repo: k, sha: "e".repeat(40) }] })],
    ];
    for (const [want, edit] of cases) {
      const res = gen(r, baselineWith(r), fresh(edit));
      expect(res.status).toBe("refused");
      expect(res.reason).toContain("the fresh extraction does not equal the selection oracle");
      expect(res.reason).toContain(want);
    }
  }, PR3_SLOW);

  test("the rebuild branch: an omitted carried membership, an invented historical membership or a changed carried node refuses", () => {
    const r = branchRepo();
    const rebuild = (edit) => simulate({ edit: (g, cwd) => (isFresh(cwd) ? g : edit(g)) });
    const omitted = gen(r, baselineWith(r), rebuild((g) => ({ ...g, links: g.links.filter((e) => !e.source.endsWith("f".repeat(40))) })));
    expect(omitted.reason).toContain("omitted Git edges");
    const base = baselineWith(r);
    const invented = gen(r, base, rebuild((g) => ({ ...g, links: [...g.links, { source: base.hist, target: `branch:${base.k}#feat`, relation: "ON_BRANCH" }] })));
    expect(invented.reason).toContain("Git edges without baseline provenance");
    const changed = gen(r, baselineWith(r), rebuild((g) => ({ ...g, nodes: g.nodes.map((x) => (x.id.endsWith("f".repeat(40)) ? { ...x, sha: "0".repeat(40) } : x)) })));
    expect(changed.reason).toContain("Git node fields differ");
    const dup = gen(r, baselineWith(r), rebuild((g) => ({ ...g, links: [...g.links, g.links[0]] })));
    expect(dup.reason).toContain("multiplicity");
  }, PR3_SLOW);

  test("raw null or no graph on the fresh branch refuses before the prune", () => {
    const r = branchRepo();
    const nulls = simulate({ edit: (g, cwd) => g });
    const rawNull = (cwd, args) => {
      const out = nulls(cwd, args);
      if (isFresh(cwd)) writeFileSync(join(cwd, ".graphify", "branch.json"), JSON.stringify({ schemaVersion: 1, branchName: null, lastSeenHead: null, lastAnalyzedHead: null, stale: false }));
      return out;
    };
    expect(gen(r, baselineWith(r), rawNull).reason).toContain("raw metadata refused after the fresh extraction");
    const noGraph = (cwd, args) => {
      const out = nulls(cwd, args);
      if (isFresh(cwd)) rmSync(join(cwd, ".graphify", "graph.json"));
      return out;
    };
    expect(gen(r, baselineWith(r), noGraph).reason).toContain("the fresh extraction wrote no graph");
  }, PR3_SLOW);
});

describe("D-426 PR3a: executable bindings are verified before every tool call", () => {
  const pins = G.pinnedCli();
  test("a changed git or node binary or version refuses before the tool runs; valid bindings pass", () => {
    if (!pins.ok) return; // no pinned Graphify on this machine: bindings cannot name a verified CLI
    const b = G.executableBindings({ cli: pins.cli });
    expect(b.ok).toBe(true);
    expect(Object.keys(b.bindings)).toEqual(["node", "git", "gitConfig", "cli", "pins", "argv", "rules", "studioApp"]);
    expect(JSON.stringify(b.bindings)).not.toMatch(/PATH=|TOKEN|SECRET/);
    const r = branchRepo();
    const calls = [];
    for (const [want, bad] of [["git binary changed", { git: { ...b.bindings.git, sha256: "0".repeat(64) } }], ["node version changed", { node: { ...b.bindings.node, version: "v0.0.0" } }],
      ["git path changed", { git: { ...b.bindings.git, path: "C:/nowhere/git.exe" } }], ["configuration outside the checkout changed", { gitConfig: "0".repeat(64) }]]) {
      const res = gen(r, baselineWith(r), simulate({ calls }), { bindings: { ...b.bindings, ...bad }, cli: pins.cli });
      expect(res.reason).toContain(want);
    }
    expect(calls).toEqual([]);
    expect(gen(r, baselineWith(r), simulate({ calls }), { bindings: b.bindings, cli: pins.cli }).reason).toBe(PASSED_GIT);
  }, PR3_SLOW);

  test("a checkout's Git configuration changed between stages, or a shadowing git in the checkout, refuses", () => {
    if (!pins.ok) return;
    const b = G.executableBindings({ cli: pins.cli }).bindings;
    const r = tinyRepo();
    const co = join(F2, `bindco${++n}`);
    G.prepareCheckout(r.d, G.snapshotSource(r.d), co);
    const seen = new Map();
    expect(G.bindingFindings(b, { checkout: co, seen })).toEqual([]);
    execFileSync("git", ["-C", co, "config", "core.hooksPath", "elsewhere"]);
    expect(G.bindingFindings(b, { checkout: co, seen }).join(" ")).toContain("changed between stages");
    if (process.platform === "win32") {
      writeFileSync(join(co, "git.exe"), "not git");
      expect(G.bindingFindings(b, { checkout: co, seen: new Map() }).join(" ")).toContain("would shadow the bound git");
    }
  }, PR3_SLOW);

  test("resume fails when a binding changed since prepare; prepare freezes the bindings without environment values", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = join(F2, `bind${++n}`);
    expect(G.prepareWork({ work, ...C(L, r), deps: { ...deps, bindings: () => ({ ok: true, bindings: { v: 1 }, envNames: ["PATH"] }) } }).exit).toBe(G.EXIT.pending);
    expect(stateOf(work).frozen.bindings).toEqual({ v: 1 });
    expect(stateOf(work).frozen.envNames).toEqual(["PATH"]);
    const res = G.resumeWork({ work, answers: { descriptions: { x: "X" } }, answersHash: "h1", ...C(L, r), deps: { ...deps, bindings: () => ({ ok: true, bindings: { v: 2 } }) } });
    expect(res.exit).toBe(G.EXIT.failed);
    expect(res.reason).toContain("executable binding changed");
  }, PR3_SLOW);
});

describe("D-426 PR3b: the model against the REAL pinned producer (fidelity anchor)", () => {
  test("from-empty equals the oracle; after a branch is retired, the rebuild equals the producer merge and carries it", () => {
    const pins = G.pinnedCli();
    if (!pins.ok) return; // the anchor needs the pinned producer
    const r = branchRepo();
    const run = (cwd) => {
      const inputs = G.selectionInputs(cwd);
      const t0 = Date.now();
      const out = G.runGraphify(cwd, G.REBUILD_ARGS, { cli: pins.cli });
      const b = G.selectionBracket(inputs, t0, Date.now());
      expect(out.code).toBe(0);
      expect(b.ok).toBe(true);
      return { b, git: G.gitSubgraph(JSON.parse(readFileSync(join(cwd, ".graphify", "graph.json"), "utf8"))) };
    };
    const A = join(F2, `realA${++n}`);
    G.prepareCheckout(r.d, G.snapshotSource(r.d), A);
    const a = run(A);
    expect(a.b.oracle.branches.map((x) => x.split("#")[1])).toEqual(["feat", "main"]);
    expect(G.freshOracleFindings(a.git, a.b.oracle)).toEqual([]);
    r.g("branch", "-q", "-D", "feat");
    writeFileSync(join(r.d, "a.txt"), "three");
    r.g("commit", "-q", "-am", "three");
    const s2 = G.snapshotSource(r.d);
    const B = join(F2, `realB${++n}`), Cc = join(F2, `realC${n}`);
    G.prepareCheckout(r.d, s2, B);
    G.prepareCheckout(r.d, s2, Cc);
    cpSync(join(A, ".graphify"), join(B, ".graphify"), { recursive: true });
    const b = run(B), c = run(Cc);
    expect(G.freshOracleFindings(c.git, c.b.oracle)).toEqual([]);
    expect(G.gitMergeFindings(a.git, c.git, b.git)).toEqual([]);
    expect([...b.git.nodes.keys()].some((x) => x.endsWith("#feat"))).toBe(true);
    expect([...c.git.nodes.keys()].some((x) => x.endsWith("#feat"))).toBe(false);
    const dropped = { ...b.git, edges: new Map([...b.git.edges].filter(([k]) => !k.includes("#feat"))) };
    expect(G.gitMergeFindings(a.git, c.git, dropped).join(" ")).toContain("omitted Git edges");
  }, 600000);
});

// ===========================================================================
// D-426 PR4b (B-050 revision 4): every derived studio file is checked against the pinned
// producer's projection of the FINAL graph and its frozen inputs. The valid control is a REAL
// pinned export of a REAL extraction (with real citations); each negative changes one copy of
// it and must reach its own refusal after that control passes. Skipped only where the pinned
// producer is not installed.
// ===========================================================================
describe("D-426 PR4b: derived artifacts by their producer projections", () => {
  const PR4_SLOW = 600000;
  const pins = G.pinnedCli();
  const INDEX = pins.ok ? pathToFileURL(join(dirname(pins.cli), "index.js")).href : null;
  let BASE; // a real candidate state: real hook-rebuild, real citations sidecar, real studio export
  const real = async () => {
    if (BASE) return BASE;
    const P = await import(INDEX);
    const r = tinyRepo();
    writeFileSync(join(r.d, "lib.js"), "export function alpha() { return beta(); }\nexport function beta() { return 1; }\n");
    r.g("add", ".");
    r.g("commit", "-q", "-m", "code");
    const co = join(F2, `pr4co${++n}`);
    G.prepareCheckout(r.d, G.snapshotSource(r.d), co);
    expect(G.runGraphify(co, G.REBUILD_ARGS, { cli: pins.cli }).code).toBe(0);
    const state = join(co, ".graphify");
    const gp = join(state, "graph.json");
    const graph = JSON.parse(readFileSync(gp, "utf8"));
    const cited = graph.nodes.find((x) => x.id.startsWith("commit:"));
    const cite = { source_file: "lib.js", source_location: "L1", quote: "export function alpha" };
    cited.citations = [cite];
    cited.citation_count = 2;
    writeFileSync(gp, JSON.stringify(graph));
    mkdirSync(join(state, "ontology"), { recursive: true });
    writeFileSync(join(state, "ontology", "citations.json"), JSON.stringify({ schema: "graphify_ontology_citations_v1", graph_signature: P.computeGraphCitationSignatureFromJson(graph),
      nodes: { [cited.id]: { count: 2, citations: [cite, { source_file: "lib.js", source_location: "L2", quote: "export function beta" }] } } }, null, 2));
    expect(G.runGraphify(co, G.studioExportArgs(state), { cli: pins.cli }).code).toBe(0);
    BASE = { state, cited: cited.id, shipped: G.shippedStudio(pins.cli) };
    return BASE;
  };
  /** A disposable copy of the real candidate state, mutated by `edit(state)`, then validated. */
  const validateCopy = async (edit = () => {}) => {
    const b = await real();
    const st = join(F2, `pr4st${++n}`, ".graphify");
    cpSync(b.state, st, { recursive: true });
    edit(st, b);
    return G.validateStudio({ state: st, cli: pins.cli, shipped: b.shipped });
  };
  const J = (p) => JSON.parse(readFileSync(p, "utf8"));
  const W = (p, v) => writeFileSync(p, JSON.stringify(v));
  const S = (st, ...p) => join(st, "studio", ...p);

  test("valid control: the real default export passes, scene-only bundle and an optional present:false entry included", async () => {
    if (!pins.ok) return;
    const v = await validateCopy();
    expect(v.findings).toEqual([]);
    const b = await real();
    const m = J(S(b.state, "workspace-manifest.json"));
    expect(m.artifacts.some((a) => a.present === false)).toBe(true);
    expect(m.graph_hash).toBe(null);
    expect(m.artifacts.find((a) => a.name === "graph").present).toBe(true);
    expect(existsSync(S(b.state, "studio.html"))).toBe(true);
    expect(G.studioExportArgs("X")).toEqual(["studio", "export", join("X", "studio"), "--state", "X"]);
  }, PR4_SLOW);

  test("scene: a wrong color value with unchanged keys, a wrong derived weight and a flipped weak flag each refuse", async () => {
    if (!pins.ok) return;
    const color = await validateCopy((st) => {
      const s = J(S(st, "scene.json"));
      const k = Object.keys(s.communityColors)[0];
      s.communityColors[k] = s.communityColors[k] === "#000000" ? "#ffffff" : "#000000";
      W(S(st, "scene.json"), s);
    });
    expect(color.findings.join(" ")).toContain("scene.json differs from the producer projection in communityColors");
    const weight = await validateCopy((st) => {
      const s = J(S(st, "scene.json"));
      s.nodes[0].weight = (s.nodes[0].weight ?? 0) + 1;
      W(S(st, "scene.json"), s);
    });
    expect(weight.findings.join(" ")).toContain("projection in nodes");
    const weak = await validateCopy((st) => {
      const s = J(S(st, "scene.json"));
      s.edges[0].weak = !s.edges[0].weak;
      W(S(st, "scene.json"), s);
    });
    expect(weak.findings.join(" ")).toContain("projection in edges");
  }, PR4_SLOW);

  test("entities and citations: a wrong structured description or citation with unchanged ids refuses", async () => {
    if (!pins.ok) return;
    const desc = await validateCopy((st, b) => {
      const e = J(S(st, "entities.json"));
      e[b.cited] = { ...e[b.cited], description: { status: "generated", description: "invented", source: "description" } };
      W(S(st, "entities.json"), e);
    });
    expect(desc.findings.join(" ")).toContain("entities.json differs from the producer sidecars");
    const count = await validateCopy((st, b) => {
      for (const p of [join(st, "ontology", "citations.json"), S(st, "ontology", "citations.json")]) {
        const c = J(p);
        c.nodes[b.cited].count = 7;
        writeFileSync(p, JSON.stringify(c, null, 2));
      }
    });
    expect(count.findings.join(" ")).toContain("citation count differs");
    const copy = await validateCopy((st) => {
      const p = S(st, "ontology", "citations.json");
      writeFileSync(p, readFileSync(p, "utf8") + " ");
    });
    expect(copy.findings.join(" ")).toContain("copied citations sidecar differs");
    const sig = await validateCopy((st) => {
      const p = join(st, "ontology", "citations.json");
      const c = J(p);
      c.graph_signature = "0".repeat(64);
      writeFileSync(p, JSON.stringify(c, null, 2));
    });
    expect(sig.findings.join(" ")).toContain("citation signature");
  }, PR4_SLOW);

  test("reconciliation: a wrong record refuses, and a malformed queue refuses instead of the producer's empty fallback", async () => {
    if (!pins.ok) return;
    const wrong = await validateCopy((st) => W(S(st, "reconciliation-candidates.json"), { items: [{ id: "invented" }], total: 1 }));
    expect(wrong.findings.join(" ")).toContain("not the pinned queue query");
    const torn = await validateCopy((st) => {
      mkdirSync(join(st, "ontology", "reconciliation"), { recursive: true });
      writeFileSync(join(st, "ontology", "reconciliation", "candidates.json"), "{torn");
    });
    expect(torn.findings.join(" ")).toContain("the reconciliation queue is malformed");
  }, PR4_SLOW);

  test("vendor, manifest and bundle: changed shipped bytes, a wrong manifest hash and a stale embedded scene with unchanged counts refuse", async () => {
    if (!pins.ok) return;
    const vendor = await validateCopy((st) => writeFileSync(S(st, "index.html"), readFileSync(S(st, "index.html"), "utf8") + "<!-- changed -->"));
    expect(vendor.findings.join(" ")).toContain("shipped file differs from the pinned tool: index.html");
    const manifest = await validateCopy((st) => {
      const m = J(S(st, "workspace-manifest.json"));
      const a = m.artifacts.find((x) => x.name === "scene");
      a.sha256 = "0".repeat(64);
      writeFileSync(S(st, "workspace-manifest.json"), JSON.stringify(m, null, 2) + "\n");
    });
    expect(manifest.findings.join(" ")).toContain("workspace-manifest.json is not the producer manifest");
    const stale = await validateCopy((st) => {
      const html = readFileSync(S(st, "studio.html"), "utf8");
      const marker = "window.__GRAPHIFY_BUNDLE__ = JSON.parse(";
      const [head, rest] = html.split(marker);
      const end = rest.indexOf(");</script>");
      const bundle = JSON.parse(JSON.parse(rest.slice(0, end)));
      bundle["scene.json"].nodes[0].label = `${bundle["scene.json"].nodes[0].label} (stale)`;
      writeFileSync(S(st, "studio.html"), head + marker + JSON.stringify(JSON.stringify(bundle)).replace(/<\//g, "<\\/") + rest.slice(end));
    });
    expect(stale.findings.join(" ")).toContain("the embedded scene is not the validated scene.json");
    expect(stale.findings.join(" ")).not.toContain("scene.json differs");
  }, PR4_SLOW);

  test("inventory: an unknown promoted file, an unclassified input, a changed graph copy or a missing derived file refuses", async () => {
    if (!pins.ok) return;
    const unknown = await validateCopy((st) => writeFileSync(S(st, "extra.json"), "{}"));
    expect(unknown.findings.join(" ")).toContain("unknown promoted studio file: extra.json");
    const input = await validateCopy((st) => writeFileSync(join(st, "ontology", "profile.json"), "{}"));
    expect(input.findings.join(" ")).toContain("unclassified export input: ontology/profile.json");
    const graph = await validateCopy((st) => {
      const g = J(S(st, "graph.json"));
      g.nodes[0].label = "changed";
      W(S(st, "graph.json"), g);
    });
    expect(graph.findings.join(" ")).toContain("studio/graph.json is not the final root graph");
    const missing = await validateCopy((st) => rmSync(S(st, "scene.json")));
    expect(missing.findings.join(" ")).toContain("missing derived file: scene.json");
    const unbound = (await real()) && G.validateStudio({ state: (await real()).state, cli: pins.cli, shipped: null });
    expect(unbound.findings.join(" ")).toContain("shipped studio files are not bound");
  }, PR4_SLOW);

  test("the shipped studio files are bound with the executable bindings and re-verified on use", () => {
    if (!pins.ok) return;
    const b = G.executableBindings({ cli: pins.cli }).bindings;
    expect(b.studioApp.files["index.html"]).toMatch(/^[0-9a-f]{64}$/);
    expect(G.bindingFindings(b)).toEqual([]);
    expect(G.bindingFindings({ ...b, studioApp: { ...b.studioApp, digest: "0".repeat(64) } }).join(" ")).toContain("shipped studio files changed");
  }, PR4_SLOW);

  test("fidelity anchor: the guard validator accepts a copy of the real released live studio", () => {
    if (!pins.ok || !existsSync(join(G.REAL_LIVE_TARGET, "studio", "scene.json"))) return;
    const st = join(F2, `pr4live${++n}`, ".graphify");
    cpSync(G.REAL_LIVE_TARGET, st, { recursive: true });
    const v = G.validateStudio({ state: st, cli: pins.cli, shipped: G.shippedStudio(pins.cli) });
    expect(v.findings).toEqual([]);
    expect(v.summary.scene.nodes).toBeGreaterThan(1000);
  }, PR4_SLOW);
});

// ===========================================================================
// D-426 PR5a (B-050 revisions 3–4): the disposable, unpublished repeat. A first run is prepared,
// reviewed and published through the real commands (fake generation/composition), so R1 is a
// guarded release with its receipt chain. The repeat regenerates C2 from that run's frozen packet
// against R1 and compares; each case changes exactly one thing. Nothing is published.
// ===========================================================================
describe("D-426 PR5a: proveRepeat — B0 baseline, R1 release, C2 disposable candidate", () => {
  const PR5_SLOW = 600000;
  const BASE_GRAPH = { nodes: [{ id: "n1", label: "N1", description: "D1", community: 1, community_name: "C" }, { id: "n2", label: "N2", community: 1, community_name: "C" }],
    links: [{ source: "n1", target: "n2", relation: "R" }] };
  let variant = {};
  /** Fake generation: the same candidate every time unless `variant` changes one thing. */
  const repDeps = {
    ...deps,
    generate: ({ work, answers, cli }) => {
      if (cli !== "verified-cli") return { status: "refused", reason: `unverified CLI: ${cli}` };
      if (!answers.descriptions?.x) return { status: "pending-semantic", pending: { descriptions: ["x"], communities: [] } };
      if (variant.pending) return { status: "pending-semantic", pending: { descriptions: ["y"], communities: [] } };
      const state = join(work, "state");
      mkdirSync(state, { recursive: true });
      writeFileSync(join(state, "graph.json"), JSON.stringify(variant.graph ?? BASE_GRAPH));
      writeFileSync(join(state, "branch.json"), JSON.stringify({ branchName: "main", mergeBase: variant.mergeBase ?? "m", updatedAt: variant.updatedAt ?? "2026-10-06T00:00:00.000Z" }));
      writeFileSync(join(state, "manifest.json"), variant.retained ?? "retained bytes");
      return { status: "generated", state, checkout: join(work, "co"), selection: { oracle: variant.selection ?? "sel-1" } };
    },
  };
  const published = () => {
    variant = {};
    const L = liveLayout();
    const r = sourceRepo();
    const work = join(F2, `pw${++n}`);
    expect(G.prepareWork({ work, ...C(L, r), deps: repDeps }).exit).toBe(G.EXIT.pending);
    expect(G.resumeWork({ work, answers: { descriptions: { x: "X" } }, answersHash: "h1", ...C(L, r), deps: repDeps }).exit).toBe(G.EXIT.ok);
    const sha = reviewCommit(r, block(JSON.stringify(recordFor(work), null, 2)));
    expect(G.publishWork({ work, review: sha, ...C(L, r) }).exit).toBe(G.EXIT.ok);
    return { L, r, work, sha };
  };
  const repeat = (p, over = {}) => G.proveRepeat({ work: p.work, out: join(F2, `rep${++n}`), ...C(p.L, p.r), deps: repDeps, ...over });

  test("valid control: C2 equals R1; B0 and R1 are recorded as distinct identities; nothing is published or reset", () => {
    const p = published();
    const live = digest(p.L.dir);
    const head0 = head(p.r.g);
    const st0 = readFileSync(join(p.work, "STATE.json"));
    const res = repeat(p);
    expect(res.outcome).toBe("repeat-equal");
    expect(res.exit).toBe(G.EXIT.ok);
    expect(res.receipt.predecessor.baseline.releaseLocus).toBe(p.L.boot.releaseLocus);
    expect(res.receipt.successor.releaseLocus).toBe(p.sha);
    expect(res.receipt.successor.digest).not.toBe(res.receipt.predecessor.baseline.digest);
    expect(res.receipt.raw.c2.graph).toBe(res.receipt.raw.r1.graph);
    expect(digest(p.L.dir)).toBe(live);
    expect(existsSync(p.L.P.journal) || existsSync(p.L.P.lock)).toBe(false);
    expect(head(p.r.g)).toBe(head0);
    expect(readFileSync(join(p.work, "STATE.json")).equals(st0)).toBe(true);
    expect(G.REPEAT_VOLATILE).toEqual({ "branch.json": ["updatedAt"], "worktree.json": ["updatedAt"], "studio/workspace-manifest.json": ["generated_at"] });
  }, PR5_SLOW);

  test("a declared volatile field may differ; an undeclared field in the same file stops the repeat", () => {
    const p = published();
    variant = { updatedAt: "2026-10-07T12:00:00.000Z" };
    expect(repeat(p).outcome).toBe("repeat-equal");
    variant = { mergeBase: "other" };
    const res = repeat(p);
    expect(res.outcome).toBe("repeat-stopped");
    expect(res.exit).toBe(G.EXIT.failed);
    expect(res.reason).toContain("branch.json differs outside the declared volatile fields: mergeBase");
    expect(res.message).toContain("revise and re-review the allowance list");
  }, PR5_SLOW);

  test("failing repeats: an altered retained byte, and the same id with a wrong description, relation or member binding", () => {
    const p = published();
    const cases = [
      [{ retained: "retained bytez" }, "retained file manifest.json differs"],
      [{ graph: { ...BASE_GRAPH, nodes: [{ ...BASE_GRAPH.nodes[0], description: "wrong" }, BASE_GRAPH.nodes[1]] } }, "node n1 differs in description"],
      [{ graph: { ...BASE_GRAPH, links: [{ ...BASE_GRAPH.links[0], relation: "S" }] } }, "occurs only in C2"],
      [{ graph: { ...BASE_GRAPH, nodes: [{ ...BASE_GRAPH.nodes[0], community: 2 }, BASE_GRAPH.nodes[1]] } }, "node n1 differs in community"],
    ];
    for (const [v, want] of cases) {
      variant = v;
      const res = repeat(p);
      expect(res.outcome).toBe("repeat-stopped");
      expect(res.reason).toContain(want);
    }
  }, PR5_SLOW);

  test("a changed input packet, binding, selection or live release stops before comparison: never a repeat pass", () => {
    const p = published();
    variant = { selection: "sel-2" };
    expect(repeat(p).reason).toContain("selection differs from the first run's");
    variant = { pending: true };
    expect(repeat(p).reason).toContain("needs new semantic answers");
    variant = {};
    expect(repeat(p, { deps: { ...repDeps, bindings: () => ({ ok: true, bindings: { changed: true } }) } }).reason).toContain("executable binding changed");
    const answers = stateOf(p.work).ready.answersFile;
    const keep = readFileSync(answers);
    writeFileSync(answers, JSON.stringify({ descriptions: { x: "Y" } }));
    expect(repeat(p).reason).toContain("answer packet changed");
    writeFileSync(answers, keep);
    const busy = join(F2, `busy${++n}`);
    mkdirSync(busy);
    writeFileSync(join(busy, "x"), "x");
    expect(repeat(p, { out: busy }).reason).toContain("not empty");
    writeFileSync(join(p.L.dir, "graph.json"), "{\"v\":\"moved on\"}");
    const moved = repeat(p);
    expect(moved.outcome).toBe("repeat-refused");
    expect(moved.reason).toContain("not the first run's release R1");
  }, PR5_SLOW);

  test("an unpublished or packet-less work folder is refused", () => {
    const L = liveLayout();
    const r = sourceRepo();
    const work = readyWork(L, r);
    expect(G.proveRepeat({ work, out: join(F2, `rep${++n}`), ...C(L, r), deps: repDeps }).reason).toContain("not published");
    const p = published();
    const st = stateOf(p.work);
    writeFileSync(join(p.work, "STATE.json"), JSON.stringify({ ...st, ready: { ...st.ready, selection: null } }));
    expect(repeat(p).reason).toContain("frozen packet is incomplete");
  }, PR5_SLOW);

  test("repeatComparison: graph serialization alone is not a difference; raw hashes stay separate evidence", () => {
    const a = join(F2, `cmpA${++n}`), b = join(F2, `cmpB${n}`);
    mkdirSync(a);
    mkdirSync(b);
    writeFileSync(join(a, "graph.json"), JSON.stringify(BASE_GRAPH));
    writeFileSync(join(b, "graph.json"), JSON.stringify(BASE_GRAPH, null, 2));
    const res = G.repeatComparison(a, b);
    expect(res.findings).toEqual([]);
    expect(res.raw.r1.graph).not.toBe(res.raw.c2.graph);
    writeFileSync(join(b, "extra.txt"), "x");
    expect(G.repeatComparison(a, b).findings).toContain("extra.txt is only in C2");
  });
});
