# B-129 — A01 operator facts are a one-time SETUP-SPIKE-000/S2 baseline only

- **Raised:** 2026-09-23 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** truthful identity-evidence wording in `V1-SM05` and the B-124–B-128 readiness chain; no application construction
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Judge clarification 2026-09-23; `D-252`; `docs/handoff/B-119`, `B-124`, `B-125`, `B-127`, `B-128`; `docs/v1/work-packets/SETUP-SPIKE-000/S2.md`; `docs/v1/work-packets/V1/V1-SM05.md`
- **Verified-At-Commit:** 5284bbac19440609c3eec7273a78125b802c7f3e

## What happened

The Judge clarified that the five A01 operator facts belong only to a **one-time independent
baseline at `SETUP-SPIKE-000/S2`**. They cannot be reused as evidence for other linked activities.

This narrows the interpretation currently carried through `D-252` and the B-124–B-128 handoff
chain. Those records treat the accepted A01 receipts plus supplemental operator metadata as SM05
pre-selection readiness evidence. Under the new Judge clarification, that reuse is no longer
permitted.

The five facts remain historical provenance for the S2 checkpoint only:

- local assessed commit SHA;
- local execution UTC window;
- non-secret Supabase project reference;
- Supabase execution UTC timestamp; and
- Supabase-side assessed commit SHA.

They do not prove SM05 DoR, SM05 construction readiness, SM05 DoD, hosted migration readiness, A02,
final `D-251` production classification or any other linked activity.

## Parent-first correction for Lane A

### Parent 1 — record the Judge amendment

Record a new Register decision that explicitly amends `D-252` item 6:

1. A01 receipts and their five operator facts are retained as the independent
   `SETUP-SPIKE-000/S2` baseline.
2. Their evidence scope is non-transferable: transfer mapping under `D-244` does not transfer this
   baseline's evidentiary credit.
3. They cannot satisfy or partially satisfy a `V1-SM05` DoR/DoD row or any later environment act.
4. Each later activity must produce its own contemporaneous evidence under its own acceptance
   criteria.

This is a substantive sequence/evidence amendment, not a wording cleanup. Under `D-54`, propagate
it to the Register, Build Spec and Artifact Inventory in the same pass; state whether
`Modular_PRD.md` and Phase Closure are unaffected.

### Parent 2 — correct the handoff chain without rewriting history

Append dated supersession/correction notes rather than altering historical evidence:

- `B-119`: preserve both hash-anchored receipts and the five-fact request as S2-baseline provenance;
  remove no receipt bytes.
- `B-124`: supersede the claim that the receipts plus metadata close SM05 compatibility readiness.
- `B-125`: remove the five operator facts from SM05 Parent-2 readiness inputs.
- `B-127`: remove identity-compatibility readiness from the SM05 pre-Issue table unless a new,
  SM05-specific readiness requirement is separately decided.
- `B-128`: correct Parent 3 and the alignment table so the five facts are S2-only and are not an
  SM05 DoR input.

### Parent 3 — correct `V1-SM05` readiness

Remove the current identity-compatibility row's dependence on A01/five-fact evidence. Lane A must
not silently substitute a new gate. The Judge must choose one of these explicit outcomes:

| Option | Meaning | Lane B assessment |
|---|---|---|
| **A — no replacement SM05 gate** | Identity A01 was setup-baseline evidence only; SM05 readiness is R1–R6 | **Recommended**, unless another governing requirement independently demands a new check |
| **B — define a new SM05-specific identity-readiness check** | New purpose, procedure, owner, environment, acceptance result and non-reuse boundary | **Approve-with-conditions**; requires a separate Judge decision and must not reuse A01 |
| **C — keep using A01/five facts for SM05** | Reuses the one-time S2 baseline | **Reject** under this clarification |

Until Parent 3 is decided and propagated, the SM05 DoR must not be presented as complete and no
Issue or feature branch may be created.

### Parent 4 — preserve later database evidence boundaries

The database lifecycle in `B-128` remains otherwise correct, but every stage generates its own
evidence:

- SM05 State-2 local replay and construction produce their own replay/xDD/DoD evidence;
- hosted `0002` deployment produces its own deployment evidence after accepted SM05 DoD and baseline
  promotion; and
- A02 produces its own hosted assessment evidence for final `D-251` classification.

None may cite the S2 A01 operator facts as proof of execution, environment, result or acceptance.

## What Lane B did instead

Lane B stopped at this handoff. No canonical Lane A source, historical receipt, application code,
database, migration, Issue, branch, PR, remote, environment or Graphify state was changed.

---

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Judge clarification: five facts are one-time `SETUP-SPIKE-000/S2` baseline provenance | Phase 1 Register amendment and `D-54` propagation |
| **Approve** | Preserve A01 receipts unchanged as historical S2 evidence | Phase 1 handoff corrections |
| **Approve-with-conditions** | A new SM05-specific identity-readiness gate | Phase 1 only if separately defined and authorized; no A01 reuse |
| **Defer** | Final SM05 readiness and Issue creation | After Parents 1–3 close, plus R5/R6 completion |
| **Reject** | Reusing A01/five-fact evidence for SM05 or any later linked activity | Preserve the one-time independent-baseline boundary |
| **Reject** | Rewriting or deleting hash-anchored receipt history | Add dated supersession notes only |
