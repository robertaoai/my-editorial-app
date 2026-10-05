// `B-050` stage F1 (`D-418`) — the intended-case proof for the guarded-rebuild
// validators and the `docs-drift` journal check. Every case names the boundary
// it must reach. These prove validators only: no generation, swap or
// publication exists in F1, and a passing run is not prevention or B-050
// closure. All filesystem cases run in a disposable temp directory; nothing
// here opens the live `.graphify` state for writing.

import { afterAll, describe, expect, test } from "bun:test";
import { execFileSync, spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import * as G from "../graphify/guarded-rebuild.mjs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
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
const o = { sourceCommit: "x", ...JSON.parse(process.argv[2]) };
const inject = {};
if (o.failReceipt) inject.writeReceipt = () => { throw new Error("receipt disk full"); };
const r = o.op === "recover" ? G.recover({ target: o.target, pauseAt: o.pauseAt, pauseMs: o.pauseMs }) : G.publish({ ...o, fixture: true, sourceCommit: "x", inject });
process.stdout.write(JSON.stringify(r));
`);
const child = (o, { wait = true } = {}) => {
  if (!wait) return spawn(process.execPath, [CHILD, JSON.stringify(o)], { stdio: ["ignore", "pipe", "pipe"] });
  const r = spawnSync(process.execPath, [CHILD, JSON.stringify(o)], { encoding: "utf8", timeout: 120000 });
  return { status: r.status, result: r.stdout ? JSON.parse(r.stdout) : null };
};
let n = 0;
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
    const live = G.publish({ target: G.REAL_LIVE_TARGET, staging: f.staging, reviewedManifest: f.reviewed, fixture: true, sourceCommit: "x" });
    expect(live.outcome).toBe("refused");
    expect(live.reason).toContain("F3");
  });

  test("a valid run publishes exactly the reviewed bytes, writes a receipt, clears journal and lock", () => {
    const f = fixture();
    const r = G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, baselineManifest: f.baseline, fixture: true, sourceCommit: "x", acceptance: "fixture acceptance record — not a Lane B review" });
    expect(r.outcome).toBe("released");
    expect(digest(f.target)).toBe(f.reviewed);
    expect(existsSync(f.P.journal) || existsSync(f.P.lock)).toBe(false);
    expect(readdirSync(f.P.receipts).some((x) => x.startsWith("release-"))).toBe(true);
    expect(digest(r.backup)).toBe(f.baseline);
  }, SLOW);

  test("staging that is not the reviewed bytes, or a changed baseline, is refused before any mutation", () => {
    const f = fixture();
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: "0".repeat(64), fixture: true, sourceCommit: "x" }).reason).toContain("reviewed manifest");
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, baselineManifest: "0".repeat(64), fixture: true, sourceCommit: "x" }).reason).toContain("changed since the baseline");
    expect(digest(f.target)).toBe(f.baseline);
    expect(existsSync(f.P.journal) || existsSync(f.P.lock)).toBe(false);
  }, SLOW);

  test("a held publication lock refuses a second publisher", () => {
    const f = fixture();
    writeFileSync(f.P.lock, JSON.stringify(G.ownerRecord("other-run")));
    expect(G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, fixture: true, sourceCommit: "x" }).reason).toContain("lock is held");
    expect(digest(f.target)).toBe(f.baseline);
  }, SLOW);

  test("an exception after mutation is rolled back by the OWNER, keeping its lock until done", () => {
    const f = fixture();
    const r = G.publish({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, fixture: true, sourceCommit: "x", inject: { renameNew: () => { throw new Error("sharing violation"); } } });
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
      const r = G.recover({ target: f.target });
      expect(r.outcome).toBe(outcome);
      expect(digest(f.target)).toBe(ends === "baseline" ? f.baseline : f.reviewed);
      expect(existsSync(f.P.journal) || existsSync(f.P.lock) || existsSync(f.P.recovery)).toBe(false);
      expect(G.transactionFindings(f.target)).toEqual([]);
      const s2 = join(f.parent, "staging2");
      mkdirSync(s2);
      writeFileSync(join(s2, "graph.json"), JSON.stringify({ v: "retry" }));
      expect(G.publish({ target: f.target, staging: s2, reviewedManifest: digest(s2), fixture: true, sourceCommit: "x" }).outcome).toBe("released");
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
    let out = "";
    proc.stdout.on("data", (d) => (out += d));
    await waitFor(() => G.readTransaction(f.P.journal).stage === "old-moved");
    const r = G.recover({ target: f.target });
    expect(r.outcome).toBe("refused");
    expect(r.reason).toContain("owner is alive");
    expect(existsSync(f.P.journal)).toBe(true);
    await new Promise((done) => proc.on("exit", done));
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
    const second = G.recover({ target: f.target });
    expect(second.outcome).toBe("refused");
    expect(second.reason).toContain("recovery token is held");
    await new Promise((done) => first.on("exit", done));
    expect(JSON.parse(out).outcome).toBe("restored");
    expect(digest(f.target)).toBe(f.baseline);
  }, SLOW);

  test("a failed restore keeps the journal (non-health); a later recovery succeeds", () => {
    const f = fixture();
    expect(child({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, crashAt: "after-rename-old" }).status).toBe(137);
    const bad = G.recover({ target: f.target, inject: { restore: () => { throw new Error("access denied"); } } });
    expect(bad.outcome).toBe("recovery-required");
    expect(existsSync(f.P.journal)).toBe(true);
    expect(G.transactionFindings(f.target).length).toBe(1);
    expect(G.recover({ target: f.target }).outcome).toBe("restored");
    expect(digest(f.target)).toBe(f.baseline);
  }, SLOW);

  test("a receipt failure at verified is recovery-required, then completed by recovery", () => {
    const f = fixture();
    const c = child({ target: f.target, staging: f.staging, reviewedManifest: f.reviewed, failReceipt: true });
    expect(c.result.outcome).toBe("recovery-required");
    expect(G.readTransaction(f.P.journal).stage).toBe("verified");
    expect(G.recover({ target: f.target }).outcome).toBe("completed-release");
    expect(digest(f.target)).toBe(f.reviewed);
  }, SLOW);

  test("a malformed journal, a lock without a journal, and an unknown owner each need evidenced recovery", () => {
    const a = fixture();
    writeFileSync(a.P.journal, "{not json");
    expect(G.recover({ target: a.target }).outcome).toBe("recovery-required");
    expect(existsSync(a.P.journal)).toBe(true);
    const b = fixture();
    writeFileSync(b.P.lock, JSON.stringify({ runToken: "r", pid: 999999, host: "elsewhere", start: "x" }));
    expect(G.recover({ target: b.target }).outcome).toBe("recovery-required");
    expect(existsSync(b.P.lock)).toBe(true);
    const c = fixture();
    writeFileSync(c.P.journal, JSON.stringify({ stage: "prepared", target: c.target, runToken: "r", sourceCommit: "x", backupManifest: c.baseline, reviewedManifest: c.reviewed }));
    writeFileSync(c.P.lock, JSON.stringify({ runToken: "r", pid: 999999, host: "another-host", start: "x" }));
    const r = G.recover({ target: c.target });
    expect(r.outcome).toBe("recovery-required");
    expect(r.reason).toContain("cannot be proved");
  }, SLOW);
});

// --- generation and composition --------------------------------------------
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
    const dup = G.proposeNames(d, join(d, "base.json"), { 6: "Alpha" });
    expect(Object.keys(dup.names)).toEqual([]);
    expect(dup.pending.every((p) => p.duplicateName === "Alpha")).toBe(true);
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
    return { cand, base, frags, staging: join(root, "staging") };
  };
  const compose = (b, frozenAt = "2026-10-06T00:00:00.000Z") => G.composeCandidate({ candidateState: b.cand, baseline: b.base, staging: b.staging, caller, frozenAt, fragmentsDir: b.frags });

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
