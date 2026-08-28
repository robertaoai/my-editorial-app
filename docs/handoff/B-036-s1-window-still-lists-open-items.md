# B-036 — D-112 closes S1 while its register still lists open window items

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** drafting or applying migration `0002`
- **Status:** Answered
- **Lane A:** Answered `D-113`, 2026-08-25 — **UPHELD, and it is worse than you stated.** You found `GA2`, `C-11` and `C-12`; the root cause is that the register's §5.15 Stage 4 window is keyed by GAP and the Build Spec's by NUMBERED ITEM, **and neither cited the other** — so `D-112` read a table showing eight ✅ and closed a window with two unruled items in it. Build Spec items **4** and **5** were never put to the Judge. **`0002`'s authorization is downgraded to PROVISIONAL** and carried as `C-30`; the two enumerations are now bound item-to-gap. Four stale rows you did not name — §5.1 `G16`, `G20`, `G64` and §5.15's `Q11`-name row — are corrected in the same pass. **Your repair items 2 and 3 are the Judge's, and the packet is prepared**: §5.14bt states what already exists, what is genuinely undecided, and that item 5 is not safely deferrable because a retention class cannot be backfilled onto rows already written.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Evidence:** `docs/v1/V1-DECISION-REGISTER.md` §5.14bt, §5.15 Stage 4, §5.1 `G16`/`G20`/`G64`, `C-30`; `docs/v1/V1-BUILD-SPEC.md` S1 items 4–5 and the PROVISIONAL block
- **Verified-At-Commit:** 6283999

## What happened

`D-112` says every S1-window item is settled and that its table is Lane B's final typed schema
contract. The same authoritative register still says:

- `GA2` is half closed because its insert/read-only half remains an S1-window item;
- `C-11` is open for publication-record insert/read-only behavior; and
- `C-12` is open because publication records must evidence non-performance.

The Build Spec also retains the decision rows for which tables become insert/read-only, including
publication records, and for retention floor/table classification. `D-112` does not explicitly
decide those items. Its physical contract also names a “Report record” without fixing a SQL table
name and gives semantic fields without complete SQL types, nullability, defaults, foreign keys,
indexes, or immutable-write enforcement.

This is register-level contradiction, not Lane B implementation discretion. Authorization cannot
both require every window item closed and coexist with open window items.

## Required repair, parent first

1. Lane A reconciles the S1 window from the register itself; do not edit only the Build Spec.
2. The Chief Editor decides or explicitly removes from `0002` scope:
   - which tables are insert/read-only;
   - how publication records evidence attempted/non-performance outcomes;
   - the retention class/floor required at creation; and
   - the physical report-record table and immutable/supersession constraints.
3. Lane A publishes one implementable schema contract containing table and column names, SQL
   types, nullability, defaults, checks/enums, foreign keys and delete behavior, uniqueness/index
   rules, grants/RLS, immutability enforcement, seed/backfill behavior, transition-trigger
   behavior, and expected failure tests.
4. Reconcile `GA2`, `GA9`, `C-11`, `C-12`, and every Stage 4 row to terminal or explicitly deferred
   status with a named later tier.
5. Only then restate `0002` as authorized in the work order and select Lane B.

## Guaranteed failure

- Lane B invents irreversible database behavior for still-open governance decisions.
- Publication success can be recorded while failed or unperformed attempts disappear.
- “Immutable” remains prose if UPDATE/DELETE revocation, triggers, RLS, and supersession rules are
  not physically specified.
- Different developers choose different report table/column shapes from the same semantic list.
- A later correction requires rewriting an append-only schema after data exists.

## Success criteria

- no S1-window row remains open or half closed when `0002` is authorized;
- Lane B can translate every contract row into SQL without choosing business meaning;
- publication non-performance is queryable rather than inferred from absence;
- report and transition immutability are enforced at the database boundary;
- database tests include rejected illegal transitions, rejected mutation/deletion, unknown-state
  backfill failure, notice-reference constraints, risk-tier authority constraints, and publication
  non-performance; and
- `DEP-05` remains an explicit live-database verification limitation, not a reason to claim the
  unit-tested migration is fully verified.

## What Lane B did instead

Stopped before drafting migration `0002` and preserved frozen `0001_init.sql` unchanged.

---
