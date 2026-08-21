# `docs/v1/drafts/` — the hold location for migrations that must not be applied

**Named by `D-91`, closing `G27`. The location was already asserted here** in the register's
`D-68` rationale (§5.14, *"`G27` holds its draft outside the apply path at `docs/v1/drafts/`"*)
**and never decided anywhere.** `D-91` records the decision so the directory exists rather than
being referred to.

## Why the location matters — `D-17`

`supabase/migrations/` **is the apply set.** A file placed there is applied by anything that
walks the directory — Supabase CLI, a migration runner, a future CI step. **"Do not apply" is a
note; a location is a property.** `D-17` therefore holds the `0002` draft outside that directory
until every S1 window decision has settled.

## What lives here

| File | Status |
|---|---|
| `0002_three_lines.sql.draft` | **Not yet written.** Blocked on `Q11` via `G64` |

**The extension is `.sql.draft`, not `.sql`.** A `.sql` file is something a tool will
eventually run; the double extension makes the file inert to every runner and to editor
tooling that auto-detects migrations.

## The blocker — do not write the draft yet

**Irreversibility begins when the draft is written, not when S1 opens.** That is the first
moment a field name is committed to text an executor will apply.

`G64` records that `judgment_independence_status` **cannot be a boolean**: `G-02`'s definition
excludes logged overrides, which requires `not_applicable` and `override_not_four_eyes` to be
distinguishable, and a boolean maps both to `false`. **`G-02` cannot be computed from its own
declared Data Source.** Two shapes are specified; the choice belongs to `Q11`, which `D-68`
deferred past S1.

**`G64` must resolve before the draft is written (`G27`, S0)** — earlier than `Q11`'s own row
implies. `Q10` is closed (`D-73`, narrowed by `D-79`) and contributes a tenancy column, nothing
more.

## Lane ownership

`docs/v1/` is **Lane A**. The `0002` draft is a Lane B artifact under `D-75`, so **writing the
draft here is a declared crossing** — `.githooks/commit-msg` will require a
`Lane-Crossing:` trailer (`D-88`), and that is correct: this file's whole purpose is to keep a
Lane B artifact out of the Lane B directory that would execute it.

**When the draft is promoted**, it moves to `supabase/migrations/0002_three_lines.sql` as a
single-lane Lane B commit, and the move is what "applied" means.

## Standing rule

**Nothing in this directory is applied, ever.** Promotion is a move out of it, recorded in
`docs/DECISION_LOG.md` and the register in the same pass (`D-54`).
