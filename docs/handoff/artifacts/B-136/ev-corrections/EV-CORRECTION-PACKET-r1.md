# EV correction packet r1 — evening-audit source corrections (answers Lane B `c90ed39`), 2026-10-15

**Status:** design draft for Lane B review, then a Judge decision and a **separate** application act. Not `D-438`; it does
not expand `D-438`. No source edited. **Observed at:** `c2c81af`. **Proposed act number:** `D-439` (no reference to it
exists in the repository at `c2c81af`; re-checked at recording). `D-437` stays promised to the setup batch.
**Pins (blob, `--no-filters`):** `docs/Modular_PRD.md` `8dcaedc82729a6968a23f340103ce3ce9f70d108` (= `54cd178`);
`docs/source/README.md` `ba7b0db3bd14fe95cf9ab288c4cefd1b89ba3d0c` (= `00d21cd`).

## 0. Parent decision JE1 — the Business Charter's governing disposition

The sources disagree, and the Register is silent (searched "Business Charter", "FB-07", "DEP-09"; only the unrelated
`MFB-07` matches). `D-58`'s table: "Two derived tiers, register silent → **Escalate** — the register has not decided it
yet, which is itself the finding." So the disposition is a Judge decision, recorded by the act.

| Source | Says |
|---|---|
| `docs/governance/requirements-traceability-map.md` "On the Business Charter" and `FB-07` (§7) | "a recommendation, not a requirement"; an earlier draft that put it on the readiness checklist "was an overreach and is withdrawn"; "No obligation implied; this blocks nothing" |
| `docs/Modular_PRD.md` §7.5 `DEP-09` | "Business Charter and exit strategy" — Open, production go-live only |
| `docs/Modular_PRD.md` §9.4 Release Readiness Checklist | "- [ ] **Business Charter supplied**" |
| `docs/source/README.md` "Gaps still outstanding" | Business Charter and exit strategy: "both are required before a production go-live decision" |

| Option | Effect | Lane A view |
|---|---|---|
| **R — recommendation (`FB-07`)** | §9.4, `DEP-09` and `source/README` align with `FB-07`. The **exit strategy stays a go-live condition** in `DEP-09`. EV-1 below is drafted for this option | **Recommended.** `FB-07` is the only source that reasons the question; the other three predate or ignore that withdrawal |
| **G — go-live requirement** | The traceability map's section and `FB-07` reverse their withdrawal; §9.4/`DEP-09` stay | Exact text drafted only if chosen; it reverses a reasoned customer/project boundary |

The Business Charter is **not** the frozen Project Charter (`docs/source/project-charter-v1.md`), which stays unchanged.

## 1. EV-1 — Business Charter alignment (Option R)

**E1 — Modular_PRD §9.4, old (exact):** `- [ ] **Business Charter supplied** (Entry 006 §7, Entry 007 §3)`
**New:** `- Business Charter — **offered, not required** (`FB-07`); `PRD.md`'s derivation stays unverified against it, and this clears no other production condition. *Corrected {DATE} (`D-NNN`): earlier a required checklist item.*`

**E2 — Modular_PRD §7.5, old (exact):** `` | `DEP-09` | **Business Charter and exit strategy** | ``
**New:** `` | `DEP-09` | **Exit strategy** *(the Business Charter component is `FB-07`, offered, not required — `D-NNN`, {DATE})* | ``
Rest of the row (Governance, Chief Editor, "Production go-live only", **Open**) unchanged.

**E3 — source/README "Gaps still outstanding", old (exact, two lines):**
```
do not conflate them) and an **exit strategy**. Neither blocks Phase 0; both are required
before a production go-live decision.
```
**New (three lines):**
```
do not conflate them) and an **exit strategy**. Neither blocks Phase 0. The **exit strategy** is required
before a production go-live decision (`DEP-09`). The Business Charter is **offered, not required**
(`FB-07`, `D-NNN`); `PRD.md`'s derivation stays unverified against it.
```

## 2. EV-2 — PRD separated from the scaffold plan pack (source/README "Related")

**E4 — old (exact, two lines):**
```
- `../` (PRD, ARCHITECTURE, DATA_MODEL, …) — the repo's own plan pack. **Not a governing
  document**; see `../README.md`.
```
**New (three lines):**
```
- `../PRD.md` — the frozen customer baseline; **governing** (`D-29`, `D-58`).
- `../` (ARCHITECTURE, DATA_MODEL, TASKS, …) — the scaffold plan pack generated with it. **Not governing**;
  see `../README.md` for precedence. *Corrected {DATE} (`D-NNN`): PRD was listed with the plan pack.*
```

## 3. EV-3 — Modular_PRD document control (includes a `D-438` propagation miss)

Modular_PRD's convention: each governed change adds a §0.1 changelog row, bumps §0 `Version` and sets `Last Updated`.
**`D-438` changed this file (IR-1, `54cd178`) and did none of the three.** Only Modular_PRD among `D-438`'s five targets
carries document control (checked). EV-3 repairs `D-438`'s omission openly and records this act.

**E5 — §0 Version, old (exact):** `| **Version** | 1.44 *(was stated as 1.8 until 2026-09-26, `D-267`)*`
**New:** `| **Version** | 1.46 *(was stated as 1.8 until 2026-09-26, `D-267`)*`

**E6 — §0 Last Updated, old (exact):** `| **Last Updated** | 2026-09-27 (`D-271`) |`
**New:** `| **Last Updated** | {DATE} (`D-NNN`) |`

**E7 — §0.1 Changelog: insert two rows immediately after the line that starts `| **1.44** | **2026-09-27** |`:**
```
| **1.45** | **2026-10-15** | Claude, `D-438`, Judge approval "Judge Approved: Route B; publish after receipt; authorize receipt route" | **Correction, no scope change.** Prologue authority wording and §10 `Q8` aligned with `D-29`/`D-58` (B-136 IR-1). *Row added late by `D-NNN`: `D-438` changed this file without a changelog row.* |
| **1.46** | **{DATE}** | Claude, `D-NNN`, Judge approval "{AUTH_QUOTE}" | **Correction, no scope change.** §9.4 and `DEP-09`: the Business Charter is `FB-07`, offered, not required; the exit strategy stays a go-live condition. §0 `Version` and `Last Updated`. |
```

## 4. Not changed here (existing owners; cross-reference only)

- **Publication timing, concurrency and recovery** (`SPECS-PUBLICATION` §4, §7): **B-078 Child 4**. The reviewer's
  eligibility-versus-dispatch example goes there as an acceptance scenario input. No new work item.
- **SM06 snapshot identity, replay key, effective-readiness query:** `V1-SM06` DoR L75. No SM05 prerequisite.
- **Old Graph Report (2026-08-19, 42 files) in the export:** export-only (`docs/.graphify/`), not in the checkout. No
  repository change; the export tool should label or exclude generated entries.
- Frozen `docs/PRD.md`, Project Charter, `0001`: unchanged. Repaired `D-438` findings: not reopened.

## 5. Application unit (for the later act)

- **Scope:** E1–E7 in `docs/Modular_PRD.md` (E1, E2, E5, E6, E7) and `docs/source/README.md` (E3, E4). Same contract as the
  `D-438` application act: S0 bindings and exact-once old texts (outside `docs/handoff/`, fragments, Register); one act
  commit; one applying commit; E2a/E2b/E5 byte proofs; only `docs-drift` may fail until publication; guarded cycle,
  Lane B receipt, publication, separate health record. Helper: a new reviewed object based on helper r2.
- **Order:** record `D-439` only after `D-438`'s guarded cycle publishes, so the two units stay separate. A combined
  cycle is possible only if the Judge names it.
- **D-54:** Register ✅ `D-439`; Modular_PRD and source/README follow; Build Spec, Inventory, traceability map (already
  says recommendation), FN, SPECS, rule files, fragments, frozen sources unaffected; **Encyclopedia unaffected** per the
  local map (`ENCYCLOPEDIA-SYNC.md` maps Modular_PRD §0.2, §0.4, §2.5.1, §4, §6.5, §12 and `DEP-05`, none of E1–E7);
  hosted parity not checked. Graphify: governed drift, cleared by the unit's guarded cycle.
- **Acceptance:** no current clause in the two files requires the Business Charter; `DEP-09` still names the exit
  strategy as **Open**; `grep "Business Charter supplied"` returns only the dated note; source/README lists `PRD.md`
  apart from the plan pack; Modular_PRD Version 1.46, changelog rows 1.45 and 1.46 present, `Last Updated` = act date.
