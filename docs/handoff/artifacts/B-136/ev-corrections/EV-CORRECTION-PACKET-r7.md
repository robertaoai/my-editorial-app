# EV correction packet r7 — complete application text (answers Lane B `07737b4`: G3 amendment; r5 answered `24c070f`)

**r7 delta:** adds EV-5 (Register text only): the Judge's V1 non-goal clarification and choices. No other change; r6 kept.

**r6 delta:** G3 — each disposition row names its next action, owner and trigger, or states none with a reason; the
unsuperseded disposition decides current acceptance; a later rejection or deferral does not inherit acceptance from a
superseded decision. Changed: E10 (the `BCD` table and its rules) and §5 step 2–3. Nothing else changed; r5 kept.

**Status:** design draft for Lane B review; not applied. **Observed at:** `35e1ecd` (targets unchanged since `24c070f`). **Self-contained:** every edit below
gives one exact target and one exact replacement; nothing refers to an earlier revision for its text. Earlier revisions
r1–r4 are kept unchanged. **Proposed act:** `D-439`, recorded and applied only after `D-438`'s separate health record.
At `24c070f`, `D-439` is referenced only by Lane A's EV records; ownership is re-checked by exact line at recording.
**`{DATE}`** = the recording date; **`D-NNN`** = `D-439`. Both substitute only inside the new texts.

**Pins (Git blob, `--no-filters`):** `docs/Modular_PRD.md` `8dcaedc82729a6968a23f340103ce3ce9f70d108`;
`docs/source/README.md` `ba7b0db3bd14fe95cf9ab288c4cefd1b89ba3d0c`;
`docs/governance/requirements-traceability-map.md` `53fcb80e2f4d17807f8061bcc93d29c0f6401dde`.

## 0. Authority and reading

**The Judge, verbatim (2026-10-15; B-136 `8842c1a`):**
> Project Charter is setup for V1 and hence implies there is a Business Charter built inside Project Charter; since Business Charter had not been provided explicitly the project can request yet not a requirement ; hence survival of the fitness of what is validated on release will be the progressive inclusion into the Busines Charter at each release cycle;

**Reading:** V1 starts from the business intent in the frozen Project Charter. A separate Business Charter may be
requested; it is not required, and its absence alone blocks no release. Accepted release conclusions are added to a
cumulative record. A **technical test pass** is not a business-criterion result; a business criterion needs its own
evidence and the Chief Editor's disposition. The **exit strategy** stays a separate go-live condition (`DEP-09`, Open).

## 1. Modular_PRD

**E1 — old:** `- [ ] **Business Charter supplied** (Entry 006 §7, Entry 007 §3)`
**E1 — new:** `- Business Charter — **may be requested, not required** (`D-NNN`, `FB-07`). V1 starts from the business intent in the Project Charter; accepted release conclusions are added to the cumulative record in `requirements-traceability-map.md` §7.1. Its absence alone blocks no release. *Corrected {DATE} (`D-NNN`): earlier a required checklist item.*`

**E2 — old:** `` | `DEP-09` | **Business Charter and exit strategy** | ``
**E2 — new:** `` | `DEP-09` | **Exit strategy** *(the Business Charter component: may be requested, not required — `D-NNN`, {DATE}; see §9.4)* | ``

**E6 — old:** `| **Last Updated** | 2026-09-27 (`D-271`) |`
**E6 — new:** `| **Last Updated** | {DATE} (`D-NNN`) — §0.1 ends at 1.44; later changes are recorded in the Register (`D-374`, `D-381`, `D-392`, `D-404`, `D-433`, `D-435`, `D-438`, `D-NNN`) |`

(E5 and E7 were withdrawn in r3: Version stays 1.44; no §0.1 row.)

## 2. docs/source/README.md

**E3 — old (two lines):**
```
do not conflate them) and an **exit strategy**. Neither blocks Phase 0; both are required
before a production go-live decision.
```
**E3 — new (four lines):**
```
do not conflate them) and an **exit strategy**. Neither blocks Phase 0. The **exit strategy** is required
before a production go-live decision (`DEP-09`). The Business Charter may be requested and is not required
(`D-NNN`): V1 starts from the business intent in the Project Charter, and accepted release conclusions are added
to the cumulative record (`../governance/requirements-traceability-map.md` §7.1).
```

**E4 — old (two lines):**
```
- `../` (PRD, ARCHITECTURE, DATA_MODEL, …) — the repo's own plan pack. **Not a governing
  document**; see `../README.md`.
```
**E4 — new (three lines):**
```
- `../PRD.md` — the frozen customer baseline; **governing** (`D-29`, `D-58`).
- `../` (ARCHITECTURE, DATA_MODEL, TASKS, …) — the scaffold plan pack generated with it. **Not governing**;
  see `../README.md` for precedence. *Corrected {DATE} (`D-NNN`): PRD was listed with the plan pack.*
```

## 3. docs/governance/requirements-traceability-map.md

**E8 — old:** `That limitation is recorded and accepted. It blocks nothing. Logged as **FB-07**, reclassified from Gap to **Recommendation**.`
**E8 — new (the old sentence, a blank line, then one paragraph):**
```
That limitation is recorded and accepted. It blocks nothing. Logged as **FB-07**, reclassified from Gap to **Recommendation**.

**Judge direction, {DATE} (`D-NNN`):** the Project Charter carries the V1 business intent; a separate Business Charter may be requested and is not required; validated release conclusions are added to the cumulative record in §7.1 at each release cycle.
```

**E9 — target:** the `FB-07` row of the §7 table, **Item** column (second column). **Old:** `**No obligation implied; this blocks nothing.**`
**E9 — new:** `**No obligation implied; this blocks nothing.** *Policy and cumulative record: `D-NNN`, §7.1.*`

**E10 — target:** insert immediately before the line `## 8. Maintenance`. **New (exact block, followed by a blank line):**
```
### 7.1 Business Charter record — cumulative, by release (`D-NNN`)

This record holds business conclusions the Chief Editor has accepted after a release. It is Phase 1 intent. Release
evidence stays with the release and is linked here, not copied. Rows are append-only: a row is never edited; a later
row names the row it supersedes. A technical test pass is not a business-criterion result.

**Input rows (`BCR`).** One row per business criterion per release, written when that release's DoD is accepted.

| `BCR` ID | Release and accepting act | Business claim and source (path, revision, anchor) | Criterion | Evidence (path, commit; existing or planned) | Result | Limits | Supersedes |
|---|---|---|---|---|---|---|---|

**Disposition rows (`BCD`).** One row per Chief Editor decision on an input row. A changed decision is a new `BCD` row
that names the earlier one. Each disposition names its next action, owner and trigger, or explicitly states none. The
unsuperseded disposition determines current acceptance. Earlier decisions remain history.

| `BCD` ID | Input row | Disposition | Date and authority | Incorporated as | Next action, owner and trigger | Supersedes |
|---|---|---|---|---|---|---|

`Result` is `met`, `not met` or `not measured`; all three are kept. `Disposition` is `accepted`, `rejected` or
`deferred`. An input row without an `accepted` disposition is a **Business Charter input pending incorporation**.
`Incorporated as` names the release block version `<release>@<YYYY-MM-DD>`, where the date is the disposition date;
it is empty unless the disposition is `accepted`. An input row is currently accepted only while its unsuperseded `BCD`
row says `accepted`; a later `rejected` or `deferred` row ends that acceptance, and the earlier rows stay as history.

No release-feedback rows are recorded in this section.
```

**E11 — target:** insert immediately after the row starting `| Sprint DoD written |`. **New (one row):**
`| A release's DoD is accepted | Add its `BCR` input rows to §7.1; add a `BCD` row for each Chief Editor decision |`

## 3b. EV-5 — V1 non-goals (Register text in `D-439` only; no source edit)

**The Judge, verbatim (2026-10-16):**
> Non-Goals started from PRD.md are specific to V1; the product/project scope under V1 once completed will be validated for completion before releasing from non-goals under V1 where are not-built due to non-goals;

> these apply to ng-11 and historical dialog all labels for non-goal like ng-11 is not the project/product scope itself since these can be broken down to be a new scope; from b-071 non-goals are normalised to link with the versions e.g. `V1/NG-11`; hence `V1/NG-11` policy is frozen and not reused;

**The Judge's choices (2026-10-16):** on `D-188` (`B071-R96`): **"Keep controls, freeze labels"**; on `NG-11`'s policy owner:
**"Withdrawn (Recommended)"**.

**Proposed `D-439` item (exact):**
> **V1 non-goals.** Non-goals started from `PRD.md` are specific to V1 and carry version-qualified labels (`V1/NG-*`). A
> label is not scope; a later version may break an excluded item into new scope. At V1 completion, the included scope is
> validated against its acceptance criteria, and each V1 exclusion is reviewed for a later version. The V1 exclusion
> history is kept. No excluded item is included or built without a separate scope decision and a bounded authorization.
> `D-188` stands: the behaviours of `NG-10` (the `TC9`/`O-01` no-bypass control) and `NG-11` stay standing controls; the
> labels `V1/NG-10` and `V1/NG-11` are frozen and never reused. `NG-11`'s policy-owner question (opened by `D-188`) is
> withdrawn; a later scope proposal names its own owner.

**Tiers:** Register ✅ (this item). Modular_PRD, Build Spec, Inventory, traceability map: unaffected (no text changes;
`D-188` and the B-071 corrective plan already carry the `V1/NG-*` form). Encyclopedia: unaffected (local map).

## 4. Evidence locations (G2)

| Evidence for a `BCR` row | State at `24c070f` |
|---|---|
| The release's work packet (`docs/v1/work-packets/V1/V1-SM05.md`, `V1-SM06.md`) | **existing** |
| Feature-run record `V1-SM05-FV-001` | **planned** (created after selection, per the SM05 packet) |
| Acceptance-harness runs, `scripts/acceptance/` (P22, `D-259`) | **planned** (absent by schedule) |

## 5. Lifecycle (G3)

1. Release DoD accepted → `BCR` rows added: claim bound to its source path, revision and anchor; criterion; evidence
   path, commit and state; result. They are **inputs pending incorporation**.
2. Chief Editor decides → one `BCD` row per input row: disposition, date, authority (Register act or quote), and next
   action, owner and trigger (or "none" with a reason). An `accepted` row is incorporated as block
   `<release>@<disposition date>`.
3. A later finding → a new `BCR` row that supersedes the earlier one; a changed decision → a new `BCD` row that
   supersedes the earlier one. Current acceptance follows the unsuperseded `BCD` row only. No row is edited or deleted.

These rows are **post-acceptance records**. They are written after a release's DoD is accepted, so they add no DoD row,
change no delivery sequence and create no SM05 entry gate.

## 6. D-54

| Tier | Disposition and reason |
|---|---|
| **Register** | ✅ `D-439`: the Judge's JE1 words, the reading (§0), E1–E4, E6, E8–E11, and EV-5 (§3b) |
| Modular_PRD, source/README, traceability map | Follow: the applying commit |
| **Build Spec** | Unaffected: post-acceptance records (§5) add no DoD row and change no scope or sequence |
| **Inventory** | Unaffected: §7.1 is a subsection; no file created, sequenced or retired (`D-54` permits a reasoned unaffected tier) |
| Work packets | Unaffected: evidence stays where each release keeps it |
| Frozen PRD, Project Charter, `0001`; FN; SPECS; rule files; fragments | Unaffected |
| **Encyclopedia** | Entry 06 cites map §7; §7.1 adds no `CR-14` text → unaffected in substance, flagged for the act's review; hosted parity not checked |
| **Graphify** | Governed drift from `D-439`, cleared by its own guarded cycle |

## 7. Application unit

Scope: E1, E2, E6 (Modular_PRD); E3, E4 (source/README); E8–E11 (traceability map). Every target occurs exactly once at
S0. One act commit, one applying commit, E2a/E2b/E5 byte proofs. Helper with text-bound ownership and a pinned
ownership manifest; controls run by a harness that stops on any setup or evidence failure. Order: after `D-438`'s
health record. **"Canonical destination" = proposed until the act is recorded.**

**Acceptance:** no current clause in the three files states the Business Charter as required; `DEP-09` names the exit
strategy as **Open**; source/README lists `PRD.md` apart from the plan pack; §7.1 exists with both tables, the rules and
the sentence "No release-feedback rows are recorded in this section."; §8 has the new trigger row; `Last Updated` = act
date with the Register pointer list.
