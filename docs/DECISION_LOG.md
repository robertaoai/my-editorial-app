# `DECISION_LOG.md` — the ratification ledger

**Status:** provisioned by Lane A, 2026-08-21 (`D-91`).

## What this file is — and what it is not

**It is the ledger of ratification *events* for the decisions that gate a config value.**
`CONFIG_LOG.md` says *what the value is and what it depends on*; this file says *whether that
dependency has been answered, by whom, and against what evidence.*

**It is NOT a second decision register.** `docs/v1/V1-DECISION-REGISTER.md` is the register, it
outranks every derived tier (`D-58`), and a row here that contradicts it loses without
escalation. **Rows here cite the register; they never restate it.** A `DECISION_LOG.md` that
paraphrased the register would be `summary_outlived_source` by construction — the exact failure
this project has caught repeatedly.

Two things live here that the register deliberately does not carry:

1. **`OD1`–`OD3` ratification**, which is a Chief Editor act against build evidence, not a
   build decision. The register cannot close them — *"the evidence that answers them is what
   the build produces"* (sprint plan §11).
2. **Unratified `A`-item values in operation** — a value the app runs on today that no one has
   yet approved. `A4` and `A6` are in this position.

## Who writes it — `D-91`

**Lane A owns this file.** Lane B does not edit it. A ratification is a governance act; it
reaches Lane B as a `CONFIG_LOG.md` row change, which reaches the code as a value change.

## The ratification procedure

Ratifying a provisional value is **a config edit plus a line in §3 below — never a code
change.** If ratifying something would require editing `lib/`, the value was written as a
literal, and that is a defect in the code, not a step in this procedure.

1. The Chief Editor answers the decision, in writing, against named evidence.
2. Lane A appends a §3 row: date · decision · answer · evidence · what changed in `CONFIG_LOG.md`.
3. Lane A updates the `CONFIG_LOG.md` row and the register in the same pass (`D-54`).
4. Lane B's next `bun run check` sees the changed value as a flag, and implements it (`D-86`).

**"Resolved" is not "ratified."** That conflation has been caught five times in this project's
history, most recently at `A1`. A decision analysed, recommended, or defaulted-into is **not**
ratified. Only §3 records ratification.

---

## 1. Open Decisions — the three that gate the most

| ID | Question | Status | Ratified | Gates |
|---|---|---|---|---|
| `OD1` | Does a distinct executor type provide Line 2 judgment? | **Open — not closable at scaffolding** | ❌ | `LINE2_EXECUTOR_TYPE`, `LINE2_MAY_EXECUTE_LINE1_GATES` |
| `OD2` | Does Line separation satisfy four-eyes? | **Open** | ❌ | `FOUR_EYES_MODE`, `JUDGMENT_INDEPENDENCE_STATUS_VALUES`, `INDEPENDENCE_BYPASS_TOLERANCE`'s reporting |
| `OD3` | Line 1 roster, Line 3 identity, headcount | **Open** | ❌ | `AGENT_HEADCOUNT`, `LINE1_AGENT_ROSTER`, `LINE3_EXECUTOR_IDENTITY`, `FLAG_AGENT_ROSTER_MULTI` — **all `UNSET`** |
| `OD4` | Proposer → Critics → Judge | **Rejected for v1, retained and deferred** | n/a | Nothing in v1 |

**One hard stop.** `OD2` resolving negatively is a **pre-launch blocker** — there is no valid
replacement for `FOUR_EYES_MODE = "line_separation"` (sprint plan §8). Planning proceeds because
`OD2` has not resolved negatively, not because it has resolved.

**A sharpening carried forward, unresolved.** The Charter's `OD2` asks whether *a distinct
agent* provides distinct judgment. The Addendum answered whether *Line separation* does, then
retired agent-instance distinctness as an enforcement mechanism (§6.3). That may be the better
answer, but **it substitutes the question one level below where it was asked.** Flagged for the
Chief Editor; not resolved.

## 2. Values running unratified

**These are live in Phase 0 and nobody has approved them.** Listed so that shipping on them is
a visible choice rather than an oversight.

| Variable | Value | Source | Why unratified |
|---|---|---|---|
| `DATA_RETENTION_ARCHIVE_DAYS` | 90 | `A6` | Assumption, never put to the Chief Editor |
| `SCORING_REVIEW_THRESHOLD_ARTICLES` | 50 | `A4` | Assumption, never put to the Chief Editor |

## 3. Ratification events

**Append-only. Never edit or delete a row** — this is an audit trace, and the same append-only
discipline the product enforces on its own audit log applies to the document that records the
product's decisions.

| Date | Decision | Answer | Evidence | Config effect |
|---|---|---|---|---|
| — | — | *No ratification has occurred.* | — | — |

**The empty table is the finding.** `OD1`–`OD3` have gated this build since the Charter, and
none has been answered. Do not read the emptiness as a formatting placeholder.

## 4. Related but not ratification — pointers only

These are **build** decisions and live in the register. Repeated here as pointers because each
one moves a `CONFIG_LOG.md` row, and someone reading this file will look for them.

| Item | Where it is decided | Effect on config |
|---|---|---|
| `Q1` — Line 1 roster shape | Register §5.1, needs `OD3` | `LINE1_AGENT_ROSTER` stays `UNSET` |
| `Q2` — Line 3 executor | **Answered `D-57`** — v1 has no independent assurance; `FR-11` not built | `LINE3_EXECUTOR_IDENTITY` stays `UNSET` and stays declared |
| `Q5` — scheduler | Register, open (`TC7`) | `PUBLISH_RETRY_BACKOFF_MINUTES` has nothing to fire it |
| `Q6` — re-enable build gates | Register, open (`TC6`) | Not a config value; `bun run build` is not a verification gate |
| `Q10` — tenancy column | **Closed `D-73`, narrowed `D-79`** | Contributes a tenancy column to `0002` and nothing more |
| `Q11` — judgment-independence field shape | **Decided** (`D-97`'s shape, `D-111`'s name — `line_separation_status`) *(corrected 2026-08-30, `D-161`/`B-061`)* | No longer blocks `0002` — written and applied in `0002_s1_editorial_schema.sql` |
