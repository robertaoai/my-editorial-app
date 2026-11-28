# B-014 — B-005's removed duplicate sync-docs skill has reappeared untracked

- **Raised:** 2026-08-24 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a reproducible instruction and Graphify-drift snapshot
- **Status:** Answered
- **Lane A:** **Answered `D-102`, 2026-08-24.** **Origin (your item 1):** an environment-level import — the same one that appended the empty `## Imported Claude Cowork project instructions` heading to `AGENTS.md`. **Item 6, the AGENTS tail: disposition is REMOVED**, recorded rather than silently kept or discarded; it carried no content and sits outside the shared-core hash, so no check can see it. **Item 2:** `.claude/skills/sync-docs/SKILL.md` stays canonical; the duplicate is gone. **Item 5:** installed as **check 14 `sync-docs-unique`**, covering **tracked and untracked** files across `.claude`, `.agents`, `.codex`, `.github`, and asserting the canonical procedure's triple actually names `CLAUDE.md` — the defect itself, not just the file count. **Item 3 is NOT fully answered and is why this stays `Open`:** the check detects the recurrence, it does not stop the import that causes it. **Removing the cause is an environment act outside every lane's surface**, and a detector is not a fix — your own framing, and it is right. **Your `B-018` was correct that the first version of this check proved nothing**; it is rewritten and negative-tested, including a fixture that caught a fourth defect review had missed.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent of Lane A's correction
- **Evidence:** D-400 canonical-procedure correction; D-401 bounded observation acceptance and docs/handoff/artifacts/B-014/; independent 19/19 checks and two isolated 293/293 fixture runs at 6bc0e99, including sync-docs uniqueness; C:/CoWork/outputs/lane-b-verification-2026-10-03-final/summary.json and check-during-runs.log. No eradication or identified-writer claim.
- **Verified-At-Commit:** 6bc0e99ab8ad672a6ff6427c8f05e2ff27bc3c33

## What happened

`B-005` was closed by removing `.agents/skills/sync-docs/SKILL.md` as a divergent duplicate of the
canonical tracked skill. After D-101, that exact path exists again as an untracked file and is
being exposed as the available `sync-docs` skill.

The recurrence contains the same class of errors B-005 removed: it says the shared-core triple is
`AGENTS.md`, `AGENTS.md`, `.agents/rules/graphify.md`, and it restates agent identities in a local
lane table instead of reading the authoritative shared core. `AGENTS.md` also has an uncommitted
tail addition, `Imported Claude Cowork project instructions`; it is outside the shared-core hash,
so check 1 correctly cannot detect it.

## Guaranteed failure chain

An agent invokes the available untracked skill, follows its duplicate triple-edit instruction,
and omits `CLAUDE.md`. Because the file is untracked and outside `docs/`, graph coverage and source
sweep do not report it. The repository can therefore pass its governed checks while an active
procedure instructs an incomplete propagation — the B-005 failure recurring outside its original
detector.

## Required repair

1. Identify which environment or import step recreated the file and the AGENTS tail.
2. Preserve `.claude/skills/sync-docs/SKILL.md` as the canonical tracked procedure, or deliberately
   replace it through a recorded Lane A decision; do not retain two independently editable copies.
3. Remove or exclude the recreated duplicate at its source, rather than repeatedly deleting the
   generated output.
4. Correct the canonical procedure's own duplicated `AGENTS.md` references if present.
5. Add a check that fails when a second `sync-docs/SKILL.md` exists anywhere under tracked or
   workspace agent-skill roots, including untracked files on the local full-history run.
6. Record the disposition of the AGENTS tail addition; do not silently keep or discard user-owned
   workspace changes.

## Success evidence

- exactly one canonical sync-docs procedure is discoverable;
- the procedure names the real shared-core triple once each;
- recreating the duplicate makes the local consistency suite fail;
- the AGENTS tail has an explicit keep/remove disposition; and
- Graphify review-delta reports only intended governed changes.

## What Lane B did instead

Did not delete the untracked file, revert AGENTS.md, or modify the canonical skill. Those are Lane
A/environment-owned actions requiring source-level correction.

---

> **Sprint boundary, 2026-08-24 (`D-103`): Lane B is now `Active` and Lane A is `Eligible`.** Lane A can still **write in `docs/handoff/`** — that carve-out exists so acknowledgement is never blocked — but it **cannot commit anywhere else**, so anything here needing a change outside `docs/handoff/` waits for Lane A's next `Active` turn. **A blocking entry stops that item, not the lane** (`D-101`).

## Verification review — 2026-08-29

**Keep `Applied`.** The repository is clean and the detector works, but the environment import
that recreated the duplicate has not been disabled or formally exempted. Detection contains the
recurrence; it does not remove its cause.

**Draft owner fix:** the environment/integration owner identifies and disables the import that
writes `.agents/skills/sync-docs/SKILL.md`, or records a single-source mapping to the canonical
`.claude/skills/sync-docs/SKILL.md`; then Lane A reruns the uniqueness fixtures.

## Terminal annotation record

- **Current-Resolution:** Applied
- **Annotation-Type:** cross-reference
- **Annotation-Act:** `D-401`, 2026-10-03. This entry's residual, received as `GOV-RES-001` `GR-012`, was observed under `D-400`: no writer seen across six tools and two trigger rounds in a 31-minute window that the Judge accepted explicitly; every tool discovered only `.claude/skills/sync-docs/SKILL.md`. Accepted by the Judge's individual reason (`V1-DECISION-REGISTER.md` §5.14e226). Evidence: `docs/handoff/artifacts/B-014/`
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** a81e2bb8adcc21411e2fb496b467a7f75900e700

**Lane A request — Lane B verification (`D-324` Level 1, `GR-012` G12-5).** Verify the following at a named commit:
- the `D-400` `SKILL.md` prose;
- the observation log and session record against `D-400`'s contract;
- `sync-docs-unique` under isolation.

Record `Verified` here, or reject it with the failing item. Lane A records no `Verified`.

## Terminal annotation record

- **Current-Resolution:** Verified
- **Annotation-Type:** verification-evidence
- **Annotation-Act:** Judge-authorized Lane B verification, 2026-10-03; D-400/D-401 completion contract and the independent review below
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 6bc0e99ab8ad672a6ff6427c8f05e2ff27bc3c33

## Independent D-401 verification — Lane B, 2026-10-03

The Judge confirmed R-012 means GR-012 and authorized verification in the current conversation. At the read
revision above, the canonical SKILL.md carries the D-337 single shared core/import, authoritative lane-map
reference, governed-intent exclusions, per-fragment parity and descriptions-last sequence. Historical triple
wording is explicitly history. D-400/D-401 amend the old importer-removal criterion; no second business
choice is requested and no current writer/controller is invented.

The observation log and session agree: 10:49:26–11:20:26 SGT, six tools, two rounds, no recorded change,
empty symptom directory retained. Recomputed log SHA-256:
`7d773745a56ca9e9d7ca722542f0eb377d1cdb69011f55b7050a077135c37017`.
The Judge's trigger/discovery reports and individual acceptance of the shortened window are recorded by
D-401. This review verifies those preserved records, not a replay of the human sessions. Two-second polling
establishes recorded observations; it does not prove that no transient or future writer can exist.

Fresh check: 19/19. Both isolated fixture runs pass 293/293, including all sync-docs cases. Distinct pinned
targets are removed; caller tracked/index/untracked bytes and the pre-existing empty directory are unchanged.
Evidence: `C:/CoWork/outputs/lane-b-verification-2026-10-03-final/` (summary, before/after manifests, concurrent
logs and caller check). G12-1/G12-4/G12-5 independently supported; G12-2(b) is the Judge's recorded acceptance;
G12-3 does not apply to outcome (b). The source header is Verified under that amended bounded contract.
Lane A receives the result at GR-012 and SV-002's existing ledger/tracker; B-154 carries remaining reconciliation.
No symptom deletion, settings change or application construction was performed.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | GR-012/P4b and B-014 bounded verification | Phase 1: Lane A receives actor/revision/scope at GR-012 and existing SV-002 tracking; retain the observation limits |
| Reject | Eradication or construction-clearance claim | Phase 1 evidence is bounded; separate Phase 2/SM05 and Phase 3/SM06 authority/evidence remains required |
