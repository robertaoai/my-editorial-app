# EV correction packet r9 — complete application text (answers Lane B `07737b4`: G3 amendment; r5 answered `24c070f`)

**r9 delta (Lane B audits of `8dabace`; Judge: "Judge Approved: draft EV r9 and record in B-136"):** E12 reaches the
application contract — §3b heading, §7 scope and §7 acceptance; §7a adds the coverage table (active edits only; withdrawn
edits and proof-step labels kept apart); §7b specifies the E12 proof with expected bytes bound to this packet and an
omitted-E12 control. Edit texts are unchanged. r8 kept.

**r8 delta (Lane B audit of `5790fe9`):** F1 — new edit E12 corrects the live Modular_PRD §2.5 `NG-11` row ("owner
TBD"); F2 — EV-5 distinguishes the frozen V1 record, a continuing control and a later scope proposal; the tier table
names Modular_PRD as affected. r7 kept.

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

(EV edits E5 and E7 were withdrawn in r3: Version stays 1.44; no §0.1 row. They are history, not active edits.)

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

## 3b. EV-5 — V1 non-goals: Register ruling and E12 propagation

**The Judge, verbatim (2026-10-16):**
> Non-Goals started from PRD.md are specific to V1; the product/project scope under V1 once completed will be validated for completion before releasing from non-goals under V1 where are not-built due to non-goals;

> these apply to ng-11 and historical dialog all labels for non-goal like ng-11 is not the project/product scope itself since these can be broken down to be a new scope; from b-071 non-goals are normalised to link with the versions e.g. `V1/NG-11`; hence `V1/NG-11` policy is frozen and not reused;

**The Judge's choices (2026-10-16):** on `D-188` (`B071-R96`): **"Keep controls, freeze labels"**; on `NG-11`'s policy owner:
**"Withdrawn (Recommended)"**.

**Proposed `D-439` item (exact):**
> **V1 non-goals.** Non-goals started from `PRD.md` are specific to V1 and carry version-qualified records (`V1/NG-*`). A
> record is not scope. Preserve `V1/NG-10` and `V1/NG-11` as frozen V1 exclusion records — the exclusion, its rationale
> and its disposition. Do not overwrite them, and do not reuse them as scope or policy authority for another version.
> A continuing control cites its own governing decision: `D-188` stands, so the `NG-10` behaviour stays the `TC9`/`O-01`
> no-bypass control and the `NG-11` behaviour stays a standing legal/compliance control. A later scope proposal defines
> its own requirements, acceptance criteria, owner and authorization; it may cite V1 history. At V1 completion, the
> included scope is validated against its acceptance criteria and each V1 exclusion is reviewed for a later version;
> V1 completion triggers review, not inclusion. `NG-11`'s policy-owner question (opened by `D-188`) is withdrawn; no owner
> is appointed by this act. Freezing the V1 records does not establish that V1 delivery is complete.

**E12 — Modular_PRD §2.5 Non-Goals, `NG-11` row, "Excludes" column. Old (exact, once):** `legal/compliance policy — owner TBD`
**E12 — new:** `legal/compliance policy — standing control (`D-188`); owner question withdrawn (`D-NNN`, {DATE}); a later scope proposal names its own owner`

**Tiers:** Register ✅ (this item). **Modular_PRD: follow — E12** (the only current reader that shows the withdrawn question
as pending). Register lines 13262 and 13275 (`D-188`) are history: preserved; `D-439` records the withdrawal. B-071
corrective plan L1180 ("standing control and policy owners") is consistent: unaffected. Build Spec, Inventory,
traceability map: unaffected (no owner or label text there). Encyclopedia: unaffected — Entry 06 maps Modular_PRD §2.5.1;
E12 is in §2.5 (local map; hosted parity not checked).


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
| **Register** | ✅ `D-439`: the Judge's JE1 words, the reading (§0), E1–E4, E6, E8–E12, and EV-5 (§3b) |
| Modular_PRD (E1, E2, E6, E12), source/README, traceability map | Follow: the applying commit |
| **Build Spec** | Unaffected: post-acceptance records (§5) add no DoD row and change no scope or sequence |
| **Inventory** | Unaffected: §7.1 is a subsection; no file created, sequenced or retired (`D-54` permits a reasoned unaffected tier) |
| Work packets | Unaffected: evidence stays where each release keeps it |
| Frozen PRD, Project Charter, `0001`; FN; SPECS; rule files; fragments | Unaffected |
| **Encyclopedia** | Entry 06 cites map §7; §7.1 adds no `CR-14` text → unaffected in substance, flagged for the act's review; hosted parity not checked |
| **Graphify** | Governed drift from `D-439`, cleared by its own guarded cycle |

## 7. Application unit

Scope: E1, E2, E6, **E12** (Modular_PRD); E3, E4 (source/README); E8–E11 (traceability map). Every target occurs exactly
once at S0. One act commit, one applying commit, and the application act's byte-proof steps **P-E2a, P-E2b, P-E5**
(proof steps of the application act, not EV edits). Helper with text-bound ownership and a pinned
ownership manifest; controls run by a harness that stops on any setup or evidence failure. Order: after `D-438`'s
health record. **"Canonical destination" = proposed until the act is recorded.**

**Acceptance:** no current clause in the three files states the Business Charter as required; `DEP-09` names the exit
strategy as **Open**; source/README lists `PRD.md` apart from the plan pack; §7.1 exists with both tables, the rules and
the sentence "No release-feedback rows are recorded in this section."; §8 has the new trigger row; `Last Updated` = act
date with the Register pointer list; **in the `NG-11` row's Excludes cell, "owner TBD" is absent and the exact E12
replacement occurs once; the `D-188` Register text is unchanged; `D-439` records the withdrawal.**

### 7a. Coverage table — the review basis (active edits only)

**Active edit set:** E1, E2, E3, E4, E6, E8, E9, E10, E11, E12. **Withdrawn (history, not active):** EV edits E5, E7.
**Not edits:** P-E2a, P-E2b, P-E5 are proof steps. The presence of an ID is not coverage; each row must link all columns.

| Edit | File | Target (§) | Tier row | In §7 scope | Acceptance condition | Proof (§7b) |
|---|---|---|---|---|---|---|
| E1 | Modular_PRD | §9.4 checklist item | Modular_PRD | yes | no clause states the Business Charter as required | expected bytes; old text absent |
| E2 | Modular_PRD | §7.5 `DEP-09` row | Modular_PRD | yes | `DEP-09` names the exit strategy, **Open** | expected bytes |
| E6 | Modular_PRD | §0 Last Updated | Modular_PRD | yes | act date with the Register pointer list | expected bytes |
| E12 | Modular_PRD | §2.5 `NG-11` Excludes cell | Modular_PRD | yes | "owner TBD" absent; E12 text once | expected bytes; **omitted-E12 control** |
| E3 | source/README | "Gaps still outstanding" | source/README | yes | Business Charter not stated as required | expected bytes |
| E4 | source/README | "Related" | source/README | yes | `PRD.md` listed apart from the plan pack | expected bytes |
| E8 | traceability map | end of "On the Business Charter" | map | yes | Judge-direction paragraph present once | expected bytes |
| E9 | traceability map | §7 `FB-07` row, Item column | map | yes | pointer to §7.1 present once | expected bytes |
| E10 | traceability map | before `## 8. Maintenance` | map | yes | §7.1 with both tables, rules, empty-state sentence | expected bytes |
| E11 | traceability map | §8 after the `Sprint DoD written` row | map | yes | new trigger row present once | expected bytes |

No exemption exists. An exemption would need a stated reason and authority and must not omit an active repair.

### 7b. E12 proof (planned; not run)

- **Expected bytes:** computed from the bound source blobs and this packet's exact old/new texts — **not** from what the
  application helper writes. Each expected file hash is recorded before application.
- **Complete case:** every active edit applied → verification passes.
- **Omitted-E12 case:** every other active edit correct; the `NG-11` cell keeps "owner TBD" → verification **fails**
  because the Modular_PRD bytes differ from the expected bytes, and the failure names E12.
- **Helper:** a `D-439` helper with its own bindings and review. The `D-438` helper r4 and its controls stay unchanged; any
  adaptation is a new reviewed object. Status of both cases: **planned** until run.
