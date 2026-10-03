# C-007 — Lane C Level 2 review of Route A (`SV2-U02-A-R1`)

- **Raised:** 2026-09-28 by Lane C
- **Kind:** finding
- **Phase:** 1
- **Blocks:** completion of the §3.1 route schedule Level 2 review for Route A, and the combined `SV2-U02` report
- **Receiver:** Lane A
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-28, read at `b3ad627` (receiver per `D-272`). **This meets `D-310` in full.** Lane A re-ran the pinned scorer on both probes, and the outputs are byte-identical to `score-v2-probe1.txt`/`score-v2-probe2.txt`. The cue mapping (C1/C2 `CLAUDE.md` tails, C3/C7 shared core, C5/C6 `AGENTS.md` tails, C4/C8/C9 negative control) matches the key. The byte alignment matches Lane A's own for `D-312`. Recorded on the `SV2-U02-A-R1` row (`D-313`). **Route A's review schedule is complete**, which completes all three routes. The combined report is next.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent of Lane A's answer/application; scoped verification below
- **Evidence:** Independent verification of Lane A recording/application, scoped below; inherited evidence: `D-291`, `D-310`, `D-312`; `B-146` (at `44e4326`); `SV-002` §3.1/§3.2/§3.4; external kit `C:\Users\rober_24syk4j\sv2-route-a-kit\`; fresh scorer runs and byte alignment; Lane A's re-run and recording (`D-313`)
- **Verified-At-Commit:** 1a242890bc79a8d22a400c612d298afd0103ba0f

## What happened

Lane C independently reviewed the Route A R1 evidence and documentation chain to discharge its §3.1 Level 2 review obligation under `D-310`.

### Scorer re-run and evidence verification

Lane C ran the pinned v2 scorer (`score.mjs`) in `C:\Users\rober_24syk4j\sv2-route-a-kit\` against the pinned answer files and transcript (`df9068ec-ce09-44e4-b94d-4d70774b027e.jsonl`):
1. **Probe 1:** `node score.mjs 1 answers-1.txt df9068ec-ce09-44e4-b94d-4d70774b027e.jsonl` produced output byte-identical to `score-v2-probe1.txt`. Cues `C1` (`CLAUDE.md#end`), `C2` (`CLAUDE.md#tail-start`), `C3` (`shared-core#start`), and `C7` (`shared-core#middle`) are `VISIBLE (exact)`. Unique `AGENTS.md` tails `C5` and `C6`, and negative control `docs/PRD.md` cues `C4`, `C8`, and `C9`, are `not visible`. Control 3 held (no tool calls in probe 1 window; no tool calls earlier in session). Control 4 held (no `docs/PRD.md` text quoted).
2. **Probe 2:** `node score.mjs 2 answers-2.txt df9068ec-ce09-44e4-b94d-4d70774b027e.jsonl` produced output byte-identical to `score-v2-probe2.txt`. All three `sync-docs` cues (`C1` start, `C2` middle, `C3` end) are `VISIBLE (exact)`. Control 3 held (no tool calls in probe 2 window; eleven tool calls occurred between probes with no sentinel in tool output).

### Harness byte comparison

Lane C extracted the injected instruction content from `attachment:instructions` (`root.attachment.files[0].content`, path `C:\git\my-editorial-app\CLAUDE.md`) in the transcript and compared it directly against `CLAUDE.md` at HEAD (`6a6a82d6…`, 29,709 UTF-8 bytes):
- **Injected size:** 29,263 characters, 29,521 UTF-8 bytes.
- **Observed difference:** exactly 188 bytes ($29,709 - 29,521 = 188$).
- **Byte alignment confirms exactly two omissions:**
  1. A **187-byte run:** the two-line `<!-- SHARED CORE … -->` HTML comment span (lines 139–140) plus the trailing newline of blank line 141.
  2. A **1-byte terminal newline:** the file's final trailing newline.
- Every other byte matches `CLAUDE.md` at HEAD byte for byte.

### Level 1 classification confirmed

| Classification line | Lane C result |
|---|---|
| `CLAUDE.md` loaded completely, with HTML comments stripped | **Confirm**, with the 187-byte comment span + 1-byte terminal newline byte-qualification. This is loader formatting/comment stripping, not substantive content truncation. |
| `AGENTS.md` not loaded, natively or by import | **Confirm**: unique tails `C5` and `C6` are absent and the harness lists only `CLAUDE.md`. |
| `sync-docs` loaded on demand | **Confirm**: all three sentinels exact; on-demand execution verified. |
| Negative control and control 3 held | **Confirm**: probe windows strictly isolated; no contamination. |
| Byte explanation: 187-byte comment run + 1-byte final newline | **Confirm**: independently verified via byte-for-byte alignment. |

## What you need

1. **Lane A:** Acknowledge this entry and record the Route A Level 2 review against `SV2-U02-A-R1` in `SV-002` §3.2.
2. **Lane A:** Compile the unified `SV2-U02` Combined Report as a new subsection in `SV-002` §3, synthesizing the completed review schedules of Route A, Route B, and Route C, and submit it via a Register entry for the Judge's acceptance.
3. **P4 remediation:** The rule/skill fix is designed in the remediation decision and subsequently re-measured. No fixed byte ceiling is set in advance, and the per-file vs shared budget and `graphify.md` discovery alternatives remain to be resolved by that re-measurement.
4. **Judge boundary:** The Judge decides separately whether to lift the `V1-SM05` block after `SV2-DOD-06`.

## What you did instead

Re-ran the pinned Route A scorer for both probes, verified the byte alignment of the transcript against `CLAUDE.md` at HEAD, independently confirmed the Level 1 classification, and filed this Level 2 review. No rule file, skill, or application code was edited.

| Item | Verdict | Condition and follow-up phase |
|---|:---:|---|
| Route A R1 loader classification | **Approve** | Concurs with Level 1 finding; all controls verified (Gate 1B, P1) |
| Byte explanation (187B comment run + 1B newline) | **Approve** | Empirically verified against harness attachment (Gate 1B, P1) |
| Completion of Route A review schedule | **Approve** | Completes SV-002 §3.1 Level 2 for Route A (Gate 1B, P1) |
| Combined Report compilation | **Defer** | Next step for Lane A in SV-002 §3 (Gate 1B, P4) |
| Checking `SV2-DOD-03` or lifting the `V1-SM05` block | **Reject** | Precluded until Combined Report acceptance, P4 remediation, and separate Judge decisions (Gate 1B → Gate 2) |

## Lane B independent source verification — 2026-10-03

**Read revision:** 1a242890bc79a8d22a400c612d298afd0103ba0f. **Actor:** Lane B (Codex), independent of the Lane A receiver/application. The Judge's request to resolve Lane A's incident selects this source annotation through B-154's committed delivery correction. This is source-lifecycle verification, distinct from any historical Level 1/Level 2 experiment.

**Observed comparison:** Independently compared Lane A's D-313 receiver answer with SV-002's Route A schedule, §§3.4/3.5 and D-312/D-313. C-007 is recorded as the distinct historical Level 2 review; B-146 remains Level 1. The recorded byte-identical scores and the two separate byte omissions agree with the inherited source receipt. The schedule completion is represented accurately and feeds the combined report.

**Scope and surviving obligations:** Verified for Lane A's recording of the historical Level 2 receipt; not a replacement Level 2 review and not a new scorer/harness run. D-362's later acceptance and D-356's separate Phase 1 activation/adherence follow-up retain their original scope. Receiver is Lane A; Lane B is independent of that answer.

Lane A's answer is preserved. The source header moves from Applied to Verified for this bounded disposition; earlier Applied/unverified wording remains dated history. Lane A must receive this result in the existing SV-002 review/clearance and applicable residual homes. No tracker cell, canonical requirement, lane state or work order changes in this commit. Verified source headers are inputs to reconciliation, not whole Gate 2 clearance.

| Verdict | Item | Follow-up phase |
|---|---|---|
| Approve | C-007 scoped source verification of Lane A's recording/application | Phase 1: Lane A receives the actual actor, revision, scope and source commit in the existing tracking homes |
| Defer | Surviving obligations and wider parent closure | Follow-up phase and owner stated above; Gate 2 and construction retain their separate prerequisites |

## Terminal annotation record

- **Current-Resolution:** Verified
- **Annotation-Type:** verification-evidence
- **Annotation-Act:** Judge's 2026-10-03 Lane A incident-remediation request; B-154 delivery correction at 1a242890bc79a8d22a400c612d298afd0103ba0f; Lane B independent verification under D-364 item 4
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 1a242890bc79a8d22a400c612d298afd0103ba0f
