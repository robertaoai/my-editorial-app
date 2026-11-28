# BCP-1 setup trace r3 — Project-scope chains (answers Lane B's audit of `9a19342`: G1–G3; r2 answered `5dc2148`)

**r3 delta:** G1 — the F16 residual asks for recovered records or the searched locations, never "none exists"; G2 — §3
now points to the exact per-file transfer manifest; G3 — §1c adds the identity and scope check before any recurrence
removal; the `0002` wording follows Lane B's normalization. r2 and r1 kept.

**Status:** draft for Lane B review; self-contained. **Observed at:** `9a19342`.
Extends the BCP-1 map (row IDs F/P/T/S reused); not a second ledger. Paths in §1 start at `C:/CoWork/outputs/`.

**Chain (REA-TRACE-6, adopted as the tracking rule):** intent → requirement → bounded consumer contract → inputs and
allowed effects → actual result → independent review → custody and close. States per consumer: **planned →
provisioned → tested → reviewed → closed**. A row is complete only for its named scope and stage with every link present.
An undeclared effect is appended as an observation and routed; it is never erased by a new baseline.

## 1. REA (REA-TRACE-1, REA-TRACE-2)

**Purpose (r10 Parts 2.3–2.4, 3.3):** a bounded planning trial over five copied JEV files — directory/file identity,
static imports, reference import and a missing-provider refusal. Selecting the tool proves no product benefit or
readiness. The earlier r3 optional-tool classification is history, superseded by the Judge's TR-1 requirement.

### 1a. Claude Code consumer (route D) — **provisioned; not tested to close**

| Link | Evidence (consumer, stage, source, limit) |
|---|---|
| Intent | TR-1: "Require ECC, Ponytail and REA specifically before SM05." (B-136 L6997; `46c7417`) |
| Requirement | `AIG-03.R1` measured loading; `AIG-04.R3` proof through the claimed host; `AIG-04.R5` bounded effects |
| Contract | `lane-a-sm05-selection-draft-2026-10-13/SM05-SELECTION-DRAFT-r10.md` `b6e523f0…` — Claude Code and CLI consumers; accepted by Lane B `05ac2ba`; credit = load and planning only (Part 3.1) |
| Inputs and allowed effects | `lane-a-tr1-setup-2026-10-14/state/UNIT-ITEMS-MAP.json` `1ca9937f…` — retained inputs, live dependencies, disposables |
| Actual result (provisioning) | `lane-a-tr1-setup-2026-10-14/state/HANDOVER-E-to-S-T.md` `b509312b…` — A-S0–A-S4; image `sha256:21cd0944…f374`; `claude mcp add -s local rea-tr1`; later steps marked pending |
| Independent review | `lane-b-tr1-stage-a-handover-review-2026-10-14/audit-results.json` `93466a52…` — 10 static checks; matching MCP argv and installed copies; limits and a Ponytail configuration discrepancy recorded; does not certify later sessions |
| Observed extra effects | `lane-a-tr1-setup-2026-10-14/state/LEDGER-ADDENDUM-A1.json` (`afbeff95…`) — plugin-data directories absent at P0/P1; accepted disposition and later marketplace-stop kept. Not attributed to F16 |
| Close | **Open.** A-S5 trials, A-S6 close and readiness not done; pre-S-T run stopped (`ee411c6`); hook routing Open. Owner Lane A; next: the r11 design return and its G0–G4 act; trigger: Lane B acceptance of r11 and the Judge's act |

### 1b. Codex consumer (F16) — **observed; test result unverified**

| Link | Evidence |
|---|---|
| Intent | The Judge: "rea - .codex/config.toml was used to test the setup for REA in earlier steps" (`07737b4`) |
| Contract | **Not covered by r10** (r10 excludes Codex REA registration; Codex consumes retained REA outputs). A separate historical contract was **not found in the searched records** (B-136; TR-1, r6d, r11, isolation, setup-map and F16 folders) — a bounded search, not proof it never existed |
| Description of the file | `lane-a-r11-2026-10-15/R11-CONTRACT-PACKET-r3.md` L84: registers `mcp_servers.rea-tr1` for Codex with the unit's argv; no Lane A record shows Lane A writing it |
| Observed file | First seen untracked in Lane B's review `9dfd84a` (2026-10-15); 704 bytes, `fd3c37f5…`; created 2026-10-14 15:49 UTC |
| Removal | Judge: "Dispose of file first", "Remove, keep bytes (Recommended)" → removed, bytes kept `lane-a-f16-custody-2026-10-15/config.toml` (`b0c8290`) |
| Recurrence | Present again, created 2026-10-15 15:28:47 UTC, same bytes; removed again, copy `…/config-recurrence-2026-10-15T152847Z.toml` (`62ae54e`) |
| **Residual unknowns** (separate) | (1) creator; (2) test run and result; (3) recurrence mechanism. File times and equal hashes identify none of them |
| Residual row | **Owner:** Lane B (the Codex consumer owner) supplies any recovered record, or reports the searched locations and that no record was found; Lane A records it. The result stays **UNVERIFIED** until evidence or an explicit residual disposition resolves it. **Next action:** reconcile against the unit map. **Return trigger:** a new recurrence, a recovered test record, or a Judge request for Codex REA use (a separate future decision that would change r10's exclusion) |
| State | provisioned-by-unknown; **tested: unverified; reviewed: no; closed: no; no credit** |

### 1c. F16 recurrence procedure (G3)

Before any removal of a returned `.codex/config.toml`:
1. **Identity:** compute its size and SHA-256. Read no values.
2. **Scope:** the Judge's disposition ("Remove, keep bytes") covers **only** bytes equal to `fd3c37f57cee30a67957da01d571ddbaa481c907e3a164cb56d6848952b4f954` (704 bytes).
3. **Preserve:** copy the file to `C:/CoWork/outputs/lane-a-f16-custody-2026-10-15/` under a name with its creation time; verify the copy's hash.
4. **Apply or stop:** if the hash is equal, remove it from the checkout and record the event in B-136. **If the hash differs, or another unrelated untracked file appears, stop**: keep the bytes, change nothing, and return the observation to the Judge and Lane B.

## 2. Other Project-scope rows (REA-TRACE-3, REA-TRACE-4)

Sprint labels are historical; current authorization follows the Build Spec (`V1-SM05`/`V1-SM06` MMF slices) and the issued
work order. Owners are A/B/C per physical artifact.

| Scope ID | Source | Current state | Artifact owner | Next action · trigger |
|---|---|---|---|---|
| `FR-06` | §7.2, S1 | open — construction | Lane B | work order for its slice |
| `FR-11` | §7.2; **excluded from v1** (`D-57`; Build Spec §6) | n/a in v1 — not built by decision | — | none in v1 (reason: `D-57`) |
| `FR-12`, `FR-13`, `SEC-05` | §7.2, S5 | open — construction; S5 Line 3/degraded-mode portion held (Build Spec §6, `Q1`) | Lane B | their work order after `Q1` |
| `FR-14` | §7.2, **S3** | open — construction | Lane B | S3 work order |
| `NFR-01` clause | §7.2, S1 | open — `allowed_transitions`/trigger in candidate `0002`; local application/test evidence as recorded in its own records (not re-checked here); hosted migration scheduled under `D-381` (`V1-SM06`) | Lane B | SM05/SM06 work orders |
| `NFR-03`, `SEC-01` | §7.2, S2 | open — construction | Lane B | S2 work order |
| `NFR-04` tests | §7.2, S0 | tests: control present (`__tests__/`, `bun test`) | Lane B | review link to be named by Lane B |
| `NFR-04` CI | §7.2, S0 | control present (`.github/workflows/ci.yml`, F17b); review link unverified | Lane C | Lane C evidence |
| `NFR-07`, `SEC-02` | §7.2, S4 | open — construction; secret rule standing (`AGENTS.md`) | Lane B | S4 work order |
| `SEC-04` | §7.2, Phase 2 | deferred | Chief Editor | Phase 2 |
| `TR-API-01…04` | §7.2, **S1–S4** | open — one interface per sprint slice | Lane B | each slice's work order |
| `SHARED-01` code | §7.2, S0 | **delivered** (`lib/config/build-config.ts`, `flags.ts`; Build Spec S0 row) | Lane B | none · `config-coupling` each commit |
| `SHARED-01`/`02` docs | §7.2, S0 | **delivered** (`docs/CONFIG_LOG.md`, `docs/DECISION_LOG.md`, `docs/v1/drafts/`; `D-91`); Register | Lane A | none · each act |
| `NG-10` | §7.2 | **standing control** — `TC9`/`O-01` no-bypass; "fixed, not configurable" (Build Spec §6) | Lane B (code) / Lane A (rule) | none · any auto-advance proposal |
| `NG-11` | §7.2 | **standing control**; **policy owner Open** (Register L13262) | owner undecided | Judge names the legal/compliance owner |
| `AIG-01`, `AIG-02`, `AIG-05` | §7.2a | control present (lane-state, lane-boundary, handoff-response, terminal-return, closure-readiness); review receipt to reuse where valid | Lane A | name the accepting review per control |
| `AIG-03` | §7.2a | complete for `SV-002` scope (`D-434`); TR-1 loading: §1 | Lane A | `D-437` batch |
| `AIG-04` | §7.2a | selection complete (`D-433`); **Table A return conditions preserved** (FN-MULTI-LANE §Table A; `AIG-04.C2` planned) | Lane A | an act that waives or adds a route |
| `AIG-06` | §7.2a | complete for `D-337` scope (`rule-budget`) | Lane A | none |

**T-row pointer corrected:** BCP-1 T1–T5 are Graphify, Ripwire, gstack, ECC and Spec Kit. **REA has no T row**; its route D evidence is §1a. r1 wrongly pointed REA at T4, which is ECC.
**§0.6 coverage:** excluded with reason — §0.6 is the Portfolio/Project/Product dependency index; its Project row is the
frozen PRD and Charter, which carry no setup item.

## 3. Custody (REA-TRACE-5, G2)

The exact list is `TRANSFER-MANIFEST-r1.md` (same folder): one row per source file with full SHA-256, destination,
existing-file disposition, reviewer (Lane B) and trigger (after `D-438`'s health record). **Status: custody plan drafted;
no file transferred.** Destination proof and custody commit are pending until the transfer. Governance drafts and raw
evidence are separate: TR-1 raw evidence stays external, cited by hash, until the `D-437` registration binds it; F16's
configuration stays in its external custody folder. Governed final documents change only through their acts under D-54.
