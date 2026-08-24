# `LANE-B-WORK-ORDER.md` — Lane B's work order

**Written by Lane A, 2026-08-24 (`D-103`). Amended `D-105`.**

> **Status: Lane B is NOT currently `Active`.** Its `D-103` turn produced no commits and `D-104` returned `Active` to Lane A. **The work below is unchanged and unstarted** — nothing is re-specified, nothing is withdrawn. The live lane state is `docs/v1/V1-PHASE-CLOSURE.md` §5 and **not this file**; a status copied into a second document is the drift mechanism this corpus keeps recording (`G55`).

**You do not need to read the decision register.** `D-86` is binding: governance reaches you as a
**flag, not a document**. This file is where Lane A writes down what the flags mean and what is
already provisioned, so that the register stays Lane A's problem.

**Why it sits in `docs/`.** Your surfaces are `app/`, `lib/`, `components/`, `supabase/`,
`__tests__/` — Lane A cannot write there. `docs/` is Lane A's. This is the same arrangement
`.github/WORKFLOWS-SPEC.md` uses for Lane C (`D-92`).

---

## 1. You are `Active`. What that means and what it does not

| | |
|---|---|
| **You may commit.** | Exactly one lane may, and it is you until the next Sprint boundary |
| **Whichever lane is not `Active` may not commit.** | It can still read, and it can still write in `docs/handoff/` — that carve-out exists so acknowledging your entries is never blocked (`D-103`). **Which lane that is lives in §5 of the phase closure file, not here** |
| **Phase 1 is still open.** | It closes last (`D-99`). Lane A going `Eligible` is not Phase 1 closing, and nothing about your work depends on it closing |
| **`main` is not your problem.** | No agent deploys. `main` lagging the working branch is expected |

**The one hard stop.** `package.json`, the lockfiles, `tsconfig.json`, `eslint.config.mjs` and
`next.config.ts` are **Lane A's**, and Lane A cannot commit while you are `Active`. **So do not run
`bun add`.** If you need a dependency:

1. Raise a `dependency` entry in `docs/handoff/` — that directory is open to you always.
2. **That item stops. The lane does not.** Carry on with everything else (`D-101`).
3. It is provisioned when Lane A is next `Active`.

**`D-86` says Lane A provisions ahead precisely so this is rare. If it is not rare, that is a
finding worth raising as one.**

---

## 2. The work, parent first

### 2.1 The 13 configuration declarations — **`bun run check` is red on these right now**

`config-coupling` (check 12) is failing, and the failure is correct: **`docs/CONFIG_LOG.md`
publishes 13 authoritative values that no code declares.** Run `bun run check` and it names every
one.

| Group | Variables | Source |
|---|---|---|
| **Routes** | `EDITORIAL_ROUTE`, `POC_ROUTE`, `DOMAIN_APEX` | `CONFIG_LOG.md` §6 |
| **Line 3 flag** | `FLAG_LINE3_ENABLED` | `CONFIG_LOG.md` §7.1 |
| **Sprint flags** | `FLAG_S1_CONFIDENCE_FLOOR` … `FLAG_S9_AUTO_PASS` | `CONFIG_LOG.md` §7.3 |

**Take the values from `docs/CONFIG_LOG.md`, not from this file.** A value restated in two places
drifts, and `G55`/`G56`/`G58` are three separate recordings of that happening here.

**Three things that will otherwise cost you a round trip:**

- **`DOMAIN_APEX` is `UNSET` by decision**, not by omission. Neither lane holds the apex. Declare
  it as explicitly unset — do not invent a default.
- **The nine sprint flags are all `false`** and enable at `S5`, which is out of v1 scope.
- **`FLAG_FOUR_EYES_LINE_SEPARATION` and `FLAG_LINE2_HUMAN_PRIMARY` are DERIVED views, not stored
  values** (`CONFIG_LOG.md` §7.2). `config-coupling` excludes them deliberately. **Storing them
  would create two sources of truth for one fact** — do not add declarations for them.

**Definition of done:** `config-coupling` goes green. It fails in **both** directions, so a
declaration you add without a `CONFIG_LOG.md` row will fail too — if you think a row is missing,
raise it rather than adding the declaration.

### 2.2 `lib/config/flags.ts`

The inventory records it as the genuinely absent file. It follows 2.1 because the flag values come
from the same rows.

### 2.3 The `C-26` verification pass — **and read this before starting it**

**Ten handoff entries read `Resolution: Applied`**: `B-001`, `B-002`, `B-003`, `B-005`, `B-006`,
`B-007`, `B-009`, `B-010`, `B-011`, `B-012`.

`Applied` means *the fix is in the tree at a named commit, and nobody but the lane that wrote it
has said it works.* **You raised all ten. You are the independent verifier**, and Phase 1's
condition 2 cannot be met until they are `Verified` or rejected.

**How to verify one:**

1. Read the entry's `Evidence:` line and its `Verified-At-Commit:`.
2. **Open the artifacts, or re-run the named check. Do not verify from the `Evidence` line
   alone** — `D-93`'s rule is *read the artifacts, not the summary of them*, and the summary is
   exactly what `Evidence` is.
3. If it holds: set `Resolution: Verified`, `Verified-By: Lane B`, and `Verified-At-Commit:` to the
   commit **you read**, not the commit the fix landed at.
4. **If it does not hold: do NOT edit the old entry's resolution. Raise a NEW entry.** There is no
   `Rejected` state yet — it is drafted and not built — and silently leaving an entry `Applied`
   after checking it destroys the evidence that you checked. **A new entry is the record.**

**Two of them are already suspect, and you found both:**

| Entry | Why it deserves a hard look |
|---|---|
| **`B-005`** | Its evidence says `.agents/skills/` was removed. **Your `B-014` reports it came back.** The path is clear again now and `sync-docs-unique` (check 14) guards it — but the entry asserts a removal that did not hold the first time |
| **`B-011`** | Anchored at `983f058`, and its evidence cites *"check 13 installed and negative-tested"*. **`D-102` rewrote check 13.** Verifying at `983f058` certifies a state that no longer exists |

**A pass that verifies all ten and rejects none is not a good result — it is
`a_check_that_cannot_fail` in a reviewer's hat.** `D-93` names the **reject count** as this
mechanism's health metric.

---

## 3. What is already provisioned for you

| | |
|---|---|
| **Toolchain** | bun, pinned. `bun install --frozen-lockfile` is clean |
| **Commands** | `bun run dev` · `bun run build` · `bun run lint` · `bun run typecheck` · `bun test` · `bun run check` |
| **Database** | Schema applied; `supabase/migrations/0001_init.sql` is **frozen — never edit it** |
| **`0002`** | **Still blocked.** The hold location is `docs/v1/drafts/`. `Q11`'s field *shape* is decided — three values, `satisfied` \| `not_applicable` \| `override_not_four_eyes` — but its **name is still open**, and `0002` waits on that plus the rest of the S1 window |

**`bun run build` is not a verification gate.** `TC6` sets `ignoreBuildErrors` and
`ignoreDuringBuilds`, so a build stays green on broken types. **`bun run typecheck` is the gate.**

---

## 4. Before you commit

```bash
bun run check
```

**`config-coupling` and `lane-boundary` are the checks with opinions about you:**

- **`config-coupling`** — red now, green when §2.1 is done. That is your definition of done.
- **`lane-boundary`** — reports a crossing if a commit touches more than one lane's surfaces.
  It **reports**, it does not forbid (`D-83`). If it names Lane A surfaces in your commit, you
  have touched something that is not yours — split it and raise a handoff for the rest.

**`lane-state` (check 15) now fails if the register does not show exactly one `Active` lane.** If
you ever see it red, the Sprint boundary was applied halfway — stop and raise it.

**Do not use `--no-verify`.** The commit-msg hook only asks you to *declare* a crossing, not to
avoid one.

---

## 5. When your turn ends — **raise a turn report. This is required** (`D-105`)

> **This section previously said *"Raise nothing special — your `Status: Open` entries are the
> report."* That was wrong and it caused a real failure.** Lane B held `Active` for the whole of
> `D-103` and left no artifact of any kind, because it opened no entries. **An empty report and a
> lane that never ran are indistinguishable in the repository**, and `D-75` requires a handoff at
> every lane boundary — *record what is done, what is specified-not-applied, and what is open, then
> stop.* Open entries are **not** that record.

**Before your turn ends, raise one entry: kind `finding`, titled as your turn report.** It states
the three things `D-75` names:

| | |
|---|---|
| **Done** | What you completed, with commits. **"Nothing" is a valid and important answer** |
| **Specified, not applied** | What you worked out but could not land, and why (`D-56`) |
| **Open** | What you are handing back — including anything you disagree with |

**File it `Phase: 2` — your own lane's phase.** `D-104` defines `Phase:` as *the phase that owns the correction*, and a turn report is not a correction, so that definition has nothing to give it. **`D-106` settles it: a turn report carries the reporting lane's own phase.** Without this the field would be required and unanswerable.

**Raise it especially when you did nothing.** A turn that produced no work is a fact about the
sprint worth knowing — it may mean the work order was unclear, the environment was broken, or the
turn never started. **Silence records none of those, and Lane A cannot tell them apart.**

**No check can compel this**, and that is stated rather than papered over: a control cannot fail
against an agent that never ran. **The register records the absence instead** — if a turn ends with
no report, §5's `Selected` cell says so, and it says whose observation that is.

**You do not hand `Active` to anyone yourself.** The Chief Editor selects the next `Active` lane at
the Sprint boundary.
