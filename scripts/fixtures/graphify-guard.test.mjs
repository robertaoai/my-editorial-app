// `B-050` stage F1 (`D-418`) — the intended-case proof for the guarded-rebuild
// validators and the `docs-drift` journal check. Every case names the boundary
// it must reach. These prove validators only: no generation, swap or
// publication exists in F1, and a passing run is not prevention or B-050
// closure. All filesystem cases run in a disposable temp directory; nothing
// here opens the live `.graphify` state for writing.

import { afterAll, describe, expect, test } from "bun:test";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
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
  ];
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
    expect(r.stderr).toContain("stage F1");
  });
});
