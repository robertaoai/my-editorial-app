# `LANE-B-WORK-ORDER.md` — Lane B's work order

**Written by Lane A, 2026-08-24 (`D-103`). Amended `D-105`, `D-106`. Rewritten `D-113`, 2026-08-25, raised by Lane B as `B-035`.**

> **This file records no lane status at all, and that is the change.** The previous revision opened
> with one and headed §1 *"You are `Active`"* — **a status copied into a second document is the
> drift mechanism this corpus keeps recording** (`G55`, `G56`, `G58`), and it drifted here within a
> day. **The live lane state is `docs/v1/V1-PHASE-CLOSURE.md` §5. Read it there, every time.**

> **What `D-113` corrected, so you can tell this revision from the one you disbelieved:** S0 is
> recorded complete (`ea84281`, `config-coupling` green, `flags.ts` present) instead of outstanding;
> `0002` was **PROVISIONAL** (`C-30`) instead of "still blocked on `Q11`'s name", which `D-111`
> answered; and §2.3's verification list is **generated from the files** instead of naming a
> ten-entry set that is no longer the queue.

**You do not need to read the decision register.** `D-86` is binding: governance reaches you as a
**flag, not a document**. This file is where Lane A writes down what the flags mean and what is
already provisioned, so that the register stays Lane A's problem.

**Why it sits in `docs/`.** Your surfaces are `app/`, `lib/`, `components/`, `supabase/`,
`__tests__/` — Lane A cannot write there. `docs/` is Lane A's. This is the same arrangement
`.github/WORKFLOWS-SPEC.md` uses for Lane C (`D-92`).

---

## 1. Whether you may commit — **read §5, not this file**

**Rewritten 2026-08-25 (`D-113`, raised as `B-035`).** This section used to be headed *"You are
`Active`"* while its own preamble said the live table controls. **Both cannot be operative**, and a
heading is what a reader acts on. **The heading is gone.**

> **The live lane state is `docs/v1/V1-PHASE-CLOSURE.md` §5 and nowhere else.** Read it before you
> do anything. This file never says which lane holds the lock.

| | |
|---|---|
| **`Active` means you may commit.** | Exactly one lane may, and only while §5 says it is you |
| **`Blocked` means another lane is running.** | You may still **read anything**, and you may still **write in `docs/handoff/`** — that carve-out exists so reporting is never blocked (`D-103` §5.1) |
| **`Eligible` means the lock is free and you have not been selected yet.** | Still no commits. The Chief Editor selects (`D-108`) |
| **Phase 1 is still open.** | It closes last (`D-99`). Lane A leaving `Active` is not Phase 1 closing |
| **`main` is not your problem.** | No agent deploys. `main` lagging the working branch is expected |

**If you are offered work and §5 says you are `Blocked`, that is not a contradiction to resolve on
your own.** Raise a `spec-defect` entry saying so and stop — `B-034` is the worked example, and it
is the correct outcome. **Do not begin on the strength of a conversation**; the repository lock is
the table.

**The one hard stop while you are `Active`.** `package.json`, the lockfiles, `tsconfig.json`,
`eslint.config.mjs` and `next.config.ts` are **Lane A's**, and Lane A cannot commit while you hold
the lock. **So do not run `bun add`.** If you need a dependency:

1. Raise a `dependency` entry in `docs/handoff/` — that directory is open to you always.
2. **That item stops. The lane does not.** Carry on with everything else (`D-101`).
3. It is provisioned when Lane A is next `Active`.

**`D-86` says Lane A provisions ahead precisely so this is rare. If it is not rare, that is a
finding worth raising as one.**

---

## 2. The work, parent first

### 2.1 S0 — **complete. This is history, not an instruction**

**Committed at `ea84281`.** The thirteen `CONFIG_LOG.md` declarations and `lib/config/flags.ts` are
in the tree and `config-coupling` (check 12) is **green**. Nothing here is outstanding.

> **It stayed in this file as live work for a day after it was done** (`B-035`). Recorded rather
> than deleted, because a work order that silently drops completed items gives a reader no way to
> tell *finished* from *withdrawn*.

**`config-coupling` fails in both directions**, so if you add a declaration with no `CONFIG_LOG.md`
row it goes red. If you think a row is missing, **raise it — do not add the declaration.**

### 2.2 `0002_*.sql` — **yours to write. `C-30` is closed** (`D-114`)

**The window is genuinely closed and the authorization is unconditional.** `B-036` was upheld:
`D-112` had released the hold with Build Spec items 4 and 5 never put to the Judge. **Both are now
disposed** — item 4 ruled in full, item 5's classification ruled and its floor deferred to a named
owner. **`0001_init.sql` is frozen and is never edited.**

**Read the contract in three places and nowhere else:** `D-112` §5.14bs for the typed columns,
`D-114` §5.14bu for immutability and retention, and **`Modular_PRD` §6.3's classification table**,
which is the governed form of both.

**What `D-114` added that you must build to:**

| | |
|---|---|
| **Insert/read-only** | `workflow_transitions`, `publications`/`publication_targets`, the report record. **`articles` is NOT** — it mutates by design |
| **Enforcement** | **`REVOKE UPDATE, DELETE` *and* a `BEFORE UPDATE OR DELETE` trigger.** Both. `REVOKE` does not bind the owner or `service_role`, and S4 introduces that connection |
| **Publication state** | **Append-only events**, never a mutable status column |
| **`publication_targets`** | Rows created **eagerly at approval**, so a never-attempted target is a row with no events rather than an absence |
| **`trend_signals`** | **Append-only.** Do not recompute in place |
| **`allowed_transitions`** | **Effective-dated** |

**Two things deliberately NOT in your scope, so you do not invent them:**

- **`C-31`** — whether retention on `articles` varies by final status. **Open, and it does not block
  you.** Do not add a `retention_class` column; if you think one is needed, **raise it**.
- **`G85`** — the *"seven-value status enum"* is named in four documents and **its seven values are
  listed nowhere.** Derive the event types from `FN-PUBLICATION`'s behaviour, **and raise a
  `spec-defect` entry naming the values you derived** so the governed set gains them rather than
  your code becoming the only record. **Do not treat your own choice as the specification.**

**Your parent-first sequence:** verify the authorization packet → draft and test `0002` → report S1
evidence and the `DEP-05` limitation → **S2 only after S1 is accepted.**

### 2.2a `C-33` — the local database is provisioned; the test is yours to run

**`B-044` was accepted in full** (`D-118`): `__tests__/s1-schema.test.ts` asserts on migration
**text** and never starts a database, so the DoD phrase is **not yet earned**. **`D-120` supplies
the runner and it needs no credentials.**

| | |
|---|---|
| **Provisioned for you** | `supabase` CLI (devDependency, `2.115.0`) · `bun run db:start` / `db:stop` / `db:reset` · `.gitignore` for `supabase/.temp/` and `supabase/.branches/` |
| **Yours to run** | **`supabase init`** — it writes `supabase/config.toml`, and `supabase/` is your surface. Lane A supplies the tool and does not run it (`D-86`) |
| **The database** | **Disposable and separate from `main`/production.** Apply `0001` then `0002` to it, run the contract, destroy it. **Never point this at the provisioned project** |

> **`DEP-05` does not block this.** It withholds *"Supabase credentials pulled to `.env.local`"* —
> the **hosted** project, and nothing else. **A local stack uses none of them.**

**The eight-case contract is `C-33`, and it is your own list from `B-044`:** valid
`Logged → Validated` with exactly one preceding transition · `Logged → Drafted` rejected · a state
change with no transition rejected · agent execution of T5 rejected · a concurrent duplicate rolled
back with no orphan transition · UPDATE and DELETE rejected on every insert/read-only table ·
approval without an eager target rejected · publication without a same-transaction live event
rejected.

**Keep `__tests__/s1-schema.test.ts`** and label it a **static migration-contract test**. It is
useful and it is not the thing `C-33` asks for.

**Then the claim becomes:** *"local PostgreSQL unit-tested; live Supabase anon-key behaviour
unverified."* `DEP-05` is unanswered, so live anon-key behaviour cannot be proven from here.
**Never claim it fully done.**

**S2–S4 stay unscheduled.** `D-112` authorized a migration, not a sprint plan.

### 2.3 The verification pass — **the queue is generated, not restated**

**`C-26` asked for ten. Ten is no longer the number, and no number is written here** (`G75`, `C-21`
— a tally restated in a second document is the drift mechanism `G55`/`G56`/`G58` name three times
over). **Generate the queue from the files:**

```bash
bun run check
```

`handoff-response` and `closure-readiness` both print the live counts, and **since `G83` they
agree** — check 10 used to report `0 open` while check 13 reported `open 4`, because a blank
`Lane A` field was counted in no bucket at all.

**What you verify:** every entry **you raised** whose `Resolution` reads **`Applied`**. `Applied`
means *the fix is in the tree at a named commit, and nobody but the lane that wrote it has said it
works.* **You are the independent verifier**, and Phase 1's condition 2 cannot be met until each is
`Verified` or rejected.

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

**Two deserve a hard look, and you found both:**

| Entry | Why |
|---|---|
| **`B-011`** | Anchored at `983f058`, evidence citing *"check 13 installed and negative-tested"*. **`D-102` rewrote check 13, and `D-113` changed it again** (`G84`). Verifying at `983f058` certifies a state that no longer exists |
| **`B-007`** | Its evidence is `config-coupling`, which had **no negative fixture at all** until `B-024` said so. The suite exists now; the entry predates it |

**A pass that verifies everything and rejects nothing is not a good result — it is
`a_check_that_cannot_fail` in a reviewer's hat.** `D-93` names the **reject count** as this
mechanism's health metric.

**`C-001` is Lane C's and Phase 3's. It is not in your packet** — do not absorb it.


## 3. What is already provisioned for you

| | |
|---|---|
| **Toolchain** | bun, pinned. `bun install --frozen-lockfile` is clean |
| **Commands** | `bun run dev` · `bun run build` · `bun run lint` · `bun run typecheck` · `bun test` · `bun run check` |
| **Database** | Schema applied; `supabase/migrations/0001_init.sql` is **frozen — never edit it** |
| **`0002`** | ✅ **UNCONDITIONAL — see §2.2** (`D-114` closing `C-30`). `Q11` is fully decided: the shape by `D-97` — `satisfied` | `not_applicable` | `override_not_four_eyes` — and the name by `D-111`, `line_separation_status`. **The contract is `D-112` for typed columns, `D-114` for immutability and retention, and `Modular_PRD` §6.3's classification table as the governed form of both.** `0002_*.sql` goes in `supabase/migrations/`; the `docs/v1/drafts/` hold is discharged. *(This row read "still blocked … its name is still open" for a day after `D-111` supplied the name — `B-035`; then PROVISIONAL until `D-114`.)* |

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

**Before your turn ends, raise one entry: `Kind: turn-report`, titled as your turn report.** It
states the three things `D-75` names:

| | |
|---|---|
| **Done** | What you completed, with commits. **"Nothing" is a valid and important answer** |
| **Specified, not applied** | What you worked out but could not land, and why (`D-56`) |
| **Open** | What you are handing back — including anything you disagree with |

**File it `Phase: 2` — your own lane's phase.** `D-104` defines `Phase:` as *the phase that owns the correction*, and a turn report is not a correction, so that definition has nothing to give it. **`D-106` settles it: a turn report carries the reporting lane's own phase.** Without this the field would be required and unanswerable.

**And leave `Resolution:` empty. Permanently** (`G84`, `D-113`). There is nothing in a report to
resolve, so it never reaches a terminal state — which is why it needed its own `Kind` rather than a
convention. **Filed as a `finding` it was indistinguishable from an unresolved defect**, and four
reports sat permanently inside the *"still carry NO resolution"* figure. The checks now exclude
turn reports from that count and **report them as their own number**, so yours is neither noise nor
invisible at a boundary.

**A turn report is not where you raise a problem.** If your turn found a defect, that is a separate
`spec-defect` entry: the report says a turn happened, the defect asks for a fix. **`B-034`–`B-037`
are the worked example** — four defects, correctly filed against `Phase: 1` because Lane A owns
their corrections.

**You owe no turn report for a turn you never held.** If you were offered work, found §5 saying you
are `Blocked`, and reported that instead — as `B-034` did — **the entries are the record and no
report is due.** A report is scoped to a turn.

**Raise it especially when you did nothing.** A turn that produced no work is a fact about the
sprint worth knowing — it may mean the work order was unclear, the environment was broken, or the
turn never started. **Silence records none of those, and Lane A cannot tell them apart.**

**No check can compel this**, and that is stated rather than papered over: a control cannot fail
against an agent that never ran. **The register records the absence instead** — if a turn ends with
no report, §5's `Selected` cell says so, and it says whose observation that is.

**You do not hand `Active` to anyone yourself.** The Chief Editor selects the next `Active` lane at
the Sprint boundary.
