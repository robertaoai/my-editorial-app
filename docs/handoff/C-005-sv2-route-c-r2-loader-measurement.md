# C-005 — SV2-U02-C-R2 Antigravity loader measurement receipt

- **Raised:** 2026-09-28 by Lane C
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a conclusive `SV2-U02-C` result, `SV2-DOD-03`, and the remediation decision; does not authorize construction or unblock `V1-SM05`
- **Receiver:** Lane A
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-28, read at `b4f4a42` (receiver per `D-272`). **Level 1 review done: Lane A's independent re-score is byte-identical to this receipt's evidence** (`D-302`). The measurements hold, and four wording corrections to the classification are made (see "Lane A Level 1 review" below). The result is recorded in `SV-002` §3.2 (`D-303`). Next is Lane B's Level 2 review of Route C (§3.1). This records Lane A's reading; it is not an accepted result.
  **Operator facts, added by Lane C at `c4442d2`, checked by Lane A 2026-09-28 (`D-304`):**
  - **Conversation ID `26930b3a…`: confirmed.** Its host transcript matches `c9470a1b…` byte for byte.
  - **Carry-over check: confirmed, and extended.** Antigravity's knowledge folder holds only a 0-byte lock file from
    2026-07-08. Its conversation-summaries store contains no R1 sentinel fragment and no marker.
  - **Build:** the installed `Antigravity.exe` reports file version 2.17.0, unchanged since 2026-09-23, before both
    runs. So the build at run time equals the build at review time. The "2.5.5" label is Lane C's reading and is not
    confirmed from the installed files.

  **New finding: Antigravity does keep a loader diagnostic, in `conversations/<id>.db`, not in the transcript.** The R2
  conversation's store holds one injected rule block, `AGENTS.md` only. It matches lines 1–329 byte for byte, apart
  from SQLite's 4-byte page pointers, and is followed by `<truncated 7958 bytes>`. Under `D-294`, Probe 1 is now
  decided by that harness record; the quotes and the bracket corroborate it. Correction 4 above is superseded where
  it says Probe 1 has no diagnostic.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** `SV-002` §3.2/§3.4; `D-276` item 4; `D-300`; `D-301`; `D-302`; Route C R2 kit at `C:\Users\rober_24syk4j\sv2-route-c-r2-kit\` (`answers-1.txt`, `answers-2.txt`, `score-probe1.txt`, `score-probe2.txt`, `transcript_full.jsonl`); kit hashes re-checked against `D-301`; read-only review at the commit below
- **Verified-At-Commit:** b4f4a4212b0c60bc10a7364c5c10cd9d5f2c53fd

## What happened — Route C R2, 2026-09-27 / 2026-09-28

The Judge operated the `D-301` kit in a fresh Antigravity session. Lane C reviewed the evidence in a separate
conversation; the verifier key never entered the probe conversation.

- **Tool, version and backend:** Antigravity IDE 2.5.5 (ProductVersionRaw 1.107.0.0; CLI binary 2.17.0.0), Gemini 3.8 Flash (High).
- **Operator facts:** conversation ID `26930b3a-4ee2-42dc-92c1-abbcf03d2870` (recovered from host storage `~/.gemini/antigravity/brain/26930b3a-4ee2-42dc-92c1-abbcf03d2870`, where `transcript_full.jsonl` matches SHA-256 `c9470a1b...` byte-for-byte; individual JSON step records in the transcript omit the field); R1 carry-over check confirmed via host storage inspection of `~/.gemini/antigravity/knowledge` (contains only `knowledge.lock`, 0 bytes, untouched since 2026-07-08; no persistent memory artifacts; furthermore, absent sentinels and new R2 bracket lines are memory-proof per `D-303`).
- **Pins at run time:** checkout at HEAD `9c37602` (unchanged pins per `D-276` item 4 and `D-301`).
- **Windows:** Probe 1 at 15:48:16Z. Probe 2 step 1 at 15:59:24Z; step 2 at 16:00:45Z.
- **Kit integrity:** every kit file matches its `D-301` hash.

| Evidence file | Bytes | SHA-256 |
|---|---:|---|
| `answers-1.txt` | 1,301 | `1ef8185730b52fcd45dd3092d9e3826d92d47a96aabe2cf7d7a9592f39de239b` |
| `answers-2.txt` | 214 | `1dc220d13f900b4498a095cdba201397fffaba9641c3124203130e5b4393dec8` |
| `score-probe1.txt` | 4,108 | `378c85238ea47895b6d27523af09b21dcdba48a23302557a0e759ef70c785ce2` |
| `score-probe2.txt` | 2,261 | `3cacba4a834d79fa0494494a826c7f900819d0cbe948ea9c9e67848ee10fc474` |
| `transcript_full.jsonl` | 58,025 | `c9470a1b800e23d8a9cdb31538ec75a9102aec57fc6db3b6c5da9c4290da9135` |

### Probe 1: automatic loading (conclusive measurement)

The transcript records no injected rule text in the transcript body, but Part A2 quotes provide the harness wrapper
and truncation diagnostic directly.

- **Part A2 quoted wrapper:** `<RULE[c:\robertaoai\my-editorial-app\AGENTS.md]>`
- **Part A2 quoted truncation marker:** `<truncated 7958 bytes>`
- **Bracket sentinels:**
  - `cut#321` (line 321): **`VISIBLE (exact)`**
  - `cut#327` (line 327): **`VISIBLE (exact)`**
  - `cut#330` (line 330): **`not visible`**
  - `cut#337` (line 337): **`not visible`**
- **Delivery boundary:** delivery stops in `[23862, 23963)` — after `cut#327`, before `cut#330`, exactly at byte 23,962 (the newline ending `AGENTS.md` line 329).
- **Scorer verification:** `7958 bytes on AGENTS.md -> 23962 bytes delivered. CONSISTENT with every applicable quote`.
- **Rules lost by Antigravity:** lines 330–451 of `AGENTS.md`, comprising the rest of `D-88` (trailer and crossing classification), "what is gated", the lane-model-vs-Three-Lines note, the command table, the current-state note, `D-186`, and the Codex tail. (Note: lane ownership, arbitration, commit identity, and deploy rules are in lines 1–329 and are delivered).
- **Larger finding — `graphify.md` never reaches Antigravity:** Part A and Part A2 name only `AGENTS.md`. No `graphify.md` wrapper and no tail sentinels appear, even though the entire 21,750-byte file would fit under the measured 23,962-byte cut. Antigravity reads `AGENTS.md` and receives the Codex lane tail, while its own rule file is undiscovered.
- **Controls:**
  - Control 3 (tools withheld): held (no tool calls in Probe 1 window).
  - Control 4 (negative control): held (`docs/PRD.md` lines C13, C16, C18 not visible).
  - HTML comments delivered: `core3#html-comment` (C9) **`VISIBLE (exact)`**.

### Probe 2: on-demand skill loading (partial load / tool window cap)

- **Execution:** Step 1 and Step 2 were sent as two distinct messages. Step 1 permitted exactly one `view_file` tool call on `~/.gemini/config/skills/graphify/SKILL.md`. No tool call occurred in the Step 2 quote window.
- **Diagnostic:** the single `view_file` call delivered lines 1–800 (46,893 characters). The tool reported `Total Bytes: 70373` against the pinned 70,373, and stated that content was truncated beyond line 800.
- **Agent response:** the agent replied "loaded" without paging.
- **Cues:** C1 (`graphify-SKILL#start`) and C2 (`graphify-SKILL#middle`) **`VISIBLE (exact)`**; C3 (`graphify-SKILL#end`, line 1353) **`not visible`** because it sits beyond line 800.
- **Cross-run variation:** in R1, the agent called `view_file` twice (lines 1–800 and 801–1354) and delivered the complete file. In R2, the agent did not page and delivered only lines 1–800. Across runs, on-demand loading of a skill exceeding 800 lines produces non-deterministic loading. Trimming `SKILL.md` below 12,000 characters (<800 lines) eliminates this variation.
- **Controls:** Control 3 held (no deviation; separate messages). Control 4: n/a.

### Proposed classification

1. **Probe 1:**
   - `AGENTS.md`: **complete loading through line 329, per-file truncation of lines 330–451** (23,962 bytes delivered, 7,958 bytes truncated; fits a 24,000-byte whole-line budget).
   - `graphify.md`: **discovery failure** (not loaded).
   - `CLAUDE.md`: **not loaded**.
2. **Probe 2:**
   - `graphify` skill: **partial on-demand loading** (tool window cap of 800 lines / agent did not page).

## What you need

1. **Lane A:** a Level 1 review. Confirm the independent re-score (already proven byte-identical in `D-302`), and record the result in `SV-002` §3.2 (`SV2-U02-C-R2` row).
2. **Lane B:** the Level 2 review of Route C per the §3.1 route schedule.
3. **Remediation decision (P4, Judge with Lane A):**
   - Address the non-delivery of `graphify.md` to Antigravity (first priority).
   - Address the 23,962-byte cutoff of `AGENTS.md`. Note: whether the ~24,000-byte limit is per-file or shared across rule files is unmeasured.
   - Authorize trimming `~/.gemini/config/skills/graphify/SKILL.md` below 12,000 characters / 800 lines to ensure deterministic single-view loading.
   - Remediation success criterion: **re-measurement** showing full delivery (tail sentinel visible, no truncation marker), not a byte count alone.

## What you did instead

Reviewed the R2 kit evidence read-only, verified `C-003` and `C-004` in their own headers, and filed this receipt. No rule file, skill, workflow, or Lane A or Lane B file was edited, and no DoR or DoD row was changed.

| Item | Verdict | Condition and follow-up phase |
|---|---|---|
| Route C R2 evidence and kit integrity | **Approve** | Hashes match `D-301`; self-tests pass 9/9 (Gate 1B, P1) |
| Probe 1: truncation at 23,962 bytes | **Approve** | Conclusive measurement: lines 330–451 dropped (Gate 1B, P1) |
| Probe 1: `graphify.md` not delivered | **Approve** | Input to remediation decision (Gate 1B, P4) |
| Probe 2: partial load (agent did not page) | **Approve** | Tool line cap; justifies <12,000 char / 800 line trim (Gate 1B, P1) |
| `SV2-U02-C-R2` conclusive classification | **Approve** | Ready for Level 1 recording (Gate 1B, P1) |
| Checking `SV2-DOD-03` or lifting `V1-SM05` block | **Reject** | Needs P1–P4, then `SV2-DOD-06` and separate Judge decision (Gate 1B → Gate 2) |

## Lane A Level 1 review — 2026-09-28, read at `b4f4a42`

### What happened

Lane A re-ran the pinned R2 `score.mjs` (`47e32c79…`) on both answer files and the transcript, outside the repository.
The outputs, `score-laneA-L1-probe1.txt` and `score-laneA-L1-probe2.txt`, are **byte-identical** to the operator's
(`378c8523…`, `3cacba4a…`). The self-tests pass 9/9. Every measurement in this receipt was checked and holds:
- the evidence and kit hashes;
- HEAD `9c37602` at run time;
- the three windows;
- the cut in `[23862, 23963)`, and the Part A2 wrapper and marker consistent with every quote;
- exactly one `view_file` call, showing lines 1–800 with the tool's notice to call again;
- controls 3 and 4.

**Four wording corrections to the proposed classification** (the measurements are unchanged):
1. **"Per-file truncation" → "truncation".** Only one rule file was delivered, so a per-file budget cannot be told
   apart from one shared across rule files. "What you need" item 3 already says so; the classification should agree.
2. **"`graphify.md`: discovery failure" → "not delivered".** A file never discovered and a file crowded out by a
   shared budget look the same here: no wrapper and no tail. Item 1 is the same open question.
3. **"Complete loading through line 329" → "delivered through line 329, cut after it".** In §3.4, "complete loading"
   means the whole file.
4. **Part A2 is a quote, not a loader diagnostic.** `D-294` defines a diagnostic as a harness-recorded injection, and
   the transcript has none. Part A2 governs as a quote, and the cut bracket corroborates it.

**Two factual corrections:**
- **"Conversation ID isolated in `transcript_full.jsonl`" is not so:** the copied transcript contains no conversation
  ID.
- **"Run in a fresh session" is not the R1 carry-over check.** The check was to look in Antigravity's knowledge or
  memory panel. The build, the carry-over check and the conversation ID are therefore **not recorded**.

**The classification holds without the carry-over check.** Memory can only produce a false *visible* quote, never a
false absence. Every absence here (all three tails, `cut#330`, `cut#337`) is memory-proof. The bracket lines were
never shown to Antigravity before R2, and `cut#327` being visible while `cut#330` is absent fixes the cut by itself.

**One note on `C-003`'s verification section (item 1):** it says the `SV-002` §3.2 `SV2-U02-C-R1` row "records the
exact evidence hashes, the run window". The row records neither; they are in `C-003` itself. The conclusion stands,
because the row matches the receipt's substance. Lane C should correct the description with a terminal annotation
record (`B-113`).

### Lane A's Level 1 classification of `SV2-U02-C-R2` (not an accepted result)

- **Probe 1:**
  - `AGENTS.md` is delivered as a workspace rule through line 329 (23,962 bytes), and lines 330–451 are cut
    (7,958 bytes). This fits a 24,000-byte whole-line budget and does not fit a 24,000-character one.
  - `graphify.md` and `CLAUDE.md` are **not delivered**.
  - HTML comments are delivered.
  - Controls 3 and 4 held.
- **Probe 2:** a **partial on-demand load**, lines 1–800 of 1,353. The agent did not page despite the tool's notice.
  R1 paged, so loading a skill over 800 lines varies between runs.
- **Left open, and answerable only by re-measuring after remediation:**
  - per-file vs shared rule budget;
  - discovery failure vs budget exhaustion for `graphify.md`.

  A remediation that holds under **both** readings: keep the total rule text Antigravity loads under 24,000 bytes,
  and put Lane C's rules in the file it actually loads.

### What Lane A did instead

Recorded this review in `SV-002` §3.2 (`D-303`). Closed the `C-003` and `C-004` rows in §2.3 on Lane C's verification,
and added this entry there. Lane A changed no kit file, key, scorer, rule file or classification decision.

| Item | Verdict | Condition and follow-up phase |
|---|---|---|
| R2 evidence, re-score and controls | **Approve** | Byte-identical (Gate 1B, P1) |
| Probe 1 and Probe 2 measurements | **Approve** | As classified above (Gate 1B, P1) |
| The receipt's "per-file", "discovery failure" and "complete loading" wording | **Approve-with-conditions** | Read as corrected above; the open questions go to the remediation decision (Gate 1B, P4) |
| The operator facts | **Defer** | Not recorded; the Judge may still supply them, and the classification does not depend on them (Gate 1B) |
| Lane B's Level 2 review of Route C | **Approve** | Next, per §3.1 (Gate 1B, P1) |
