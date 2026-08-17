# RACI Involvement Matrix
**Version:** v1.1 — **proposed, not ratified**
**Date:** 2026-08-16
**Origin:** Chief Editor, 2026-08-16, reframing OD2 and OD4
**Status:** Recorded for ratification. **Closes nothing.** OD1, OD2, OD3, OD4 remain as the Charter has them until the Chief Editor signs off in the Addendum §2.4 Ratification Log.

---

## 1. What this reframes

The Charter poses OD2 as a **cognitive** question:

> "Within the five-gate pipeline (A1), does a distinct agent provide distinct judgment sufficient to satisfy four-eyes?"

Every prior attempt to answer it inherited that framing. The Three Lines Model answer — *"agents in different Lines provide distinct judgment by structural design"* — tries to settle a question about agent cognition with a structural claim, which is why the sprint plan flagged it (X12) as answering a *different* question than the one asked.

**The RACI framing resolves that mismatch.** Four-eyes is not a claim about whether an agent thinks independently. It is a claim about **who is accountable versus who executes**:

| Letter | Holder | Rule |
|---|---|---|
| **A — Accountable** | **Acting Chief Editor** | Exactly one natural person, for the whole business. Delegable only through the board-approved LOA window (Entry 007, S5) |
| **R — Responsible** | **The agent** | One role only, per task. Exactly one R per task |
| **C — Consulted** | **Unassigned** | See §5 — not invented here |
| **I — Informed** | **Unassigned** | See §5 |

This is answerable without resolving the cognitive question at all. You do not need to prove an agent reasons independently; you need the accountable party to be structurally distinct from the executing party. That is the standard control, and it is what four-eyes has always meant in practice.

**Why this matters for the business shape:** it lets **one natural person hold Accountability for the entire business** while agents carry Responsibility across the task matrix — which is precisely the operating model the Charter describes, and the reason the project can start before there are more people to scale into.

---

## 2. The distinction that must not be collapsed

Two different controls are in play, and conflating them would be the same class of error this project has caught five times already:

| Control | Rule | What it protects against |
|---|---|---|
| **Accountability separation** | Per task: **R ≠ A** where separation of duties is required | One party both doing and answering for the work |
| **Four-eyes** | Across tasks: **R(execute) ≠ R(review)** | Work reviewed by the party that produced it |

They are not the same statement and neither implies the other.

Concretely: at **T5** (Drafted → Reviewed) the Responsible party *is* the Acting Chief Editor, so **R = A for that task.** That does not break four-eyes, because four-eyes at T5 is satisfied by `R(T4) = Journalist agent ≠ R(T5) = Acting Chief Editor`. The two eyes sit either side of the T4→T5 boundary, not inside T5.

### 2.1 The mechanism: successor-node review

Four-eyes is delivered by a property of the phase gates themselves — **one agent per node, and the next node is the default reviewer.** No node reviews its own work, because review is what the *following* node does.

**This is already specified, not newly proposed.** It is written into the Addendum §3.1 required-fields column:

| Gate | Required fields | What it reviews |
|---|---|---|
| **T2** | `source_url` **confirmed live**; `source.platform` identified; `source_author` **confirmed**; `source_published_date` **confirmed** | The Reporter's T1 logging |
| **T3** | `duplicate_check` = passed; `topic_tag` **confirmed against scope boundary** | The Investigator's T2 validation |
| **T5** | `fact_check` = passed; `taxonomy_compliance` = passed; `meaning_invariance` = **confirmed** | The Journalist's T4 draft |
| **T6** | **"All prior gate criteria confirmed"**; `final_readthrough` = complete | **Everything before it — including the Acting Chief Editor's T5 judgment** |

So the earlier reading of R = A was too pessimistic. **Where R = A at T5, the accountable party's work is still assured — by T6, its successor.** Line 3 is therefore *additional* assurance over the chain, not the sole assurance at that point.

**T11** is the one terminal step with no successor. Its exposure is materially smaller than T5's, and different in kind: the approval T11 records already passed T5 and T6, so what T11 can get wrong is **clerical** (a mis-entered `published_url`), not **judgmental**. The audit log captures that by construction — executor, timestamp, and the URL itself are all recorded.

---

## 3. Proposed task matrix

Tasks are the Addendum §3.1 transitions. **One R and one A per task**, per standard RACI discipline.

| Task | Transition | R — Responsible | Line | A — Accountable |
|---|---|---|---|---|
| T1 | Discovered → Logged | Reporter agent | 1 | Acting Chief Editor |
| T2 | Logged → Validated | Investigator agent | 1 | Acting Chief Editor |
| T3 | Validated → Investigated | Investigator agent | 1 | Acting Chief Editor |
| T4 | Investigated → Drafted | Journalist agent | 1 | Acting Chief Editor |
| **T5** | **Drafted → Reviewed** | **Acting Chief Editor** *(human-primary; assisting agent is metadata, never R)* | **2** | Acting Chief Editor **← R = A, see §2** |
| T6 | Reviewed → Approved | Chief Journalist agent | 1 | Acting Chief Editor |
| T7 | Approved → Published | System | — | Acting Chief Editor |
| T8 | *any* → Needs Revision | Role holder for the current state | same as state | Acting Chief Editor |
| T8a | Needs Revision → target | Role holder for the target state | same as target | Acting Chief Editor |
| T9 | *any* → Rejected | Chief Journalist agent | 1 | Acting Chief Editor |
| T10 | → ManualReady | System | — | Acting Chief Editor |
| **T11** | Manual publish confirm | **Acting Chief Editor** | **2** | Acting Chief Editor **← R = A** |

**Four-eyes check across the standard path:** R(T4) = Journalist agent ≠ R(T5) = Acting Chief Editor ≠ R(T6) = Chief Journalist agent. Both boundary crossings hold.

**A is invariant.** One natural person is Accountable for every task in the business. That is the design intent, not an oversight.

---

## 4. How this sits with the Three Lines Model

RACI and the Three Lines Model are complementary, not competing. Neither replaces the other:

| Framework | Answers |
|---|---|
| **Three Lines Model** | *Which Line* may hold a given responsibility, and that Line 1 and Line 2 may never be the same actor |
| **RACI** | *Per task*, exactly who is Responsible and who is Accountable |

The Three Lines Model constrains which Lines may hold which RACI letters:

- **A sits in Line 2** — always the Acting Chief Editor.
- **R sits in Line 1** for operational tasks, and in Line 2 for T5 and T11.
- **Line 3 sits outside the matrix.** It is not a RACI letter. It is independent assurance *over* the matrix.

**Line 3's role, stated correctly:** since successor-node review (§2.1) already assures every node including T5, Line 3 is **additional, risk-triggered assurance over the whole chain** — not a patch covering a hole at R = A. That is exactly what Addendum §13 specifies: triggered by risk signal, not standing. An earlier draft of this document claimed Line 3 was "the only control covering the two tasks where R = A." That was wrong, and it overstated Line 3's load by missing the successor-review property.

---

## 5. What this does not settle

Recorded so the framework is not over-read.

| # | Open | Why |
|---|---|---|
| `RACI-01` | **C and I are unassigned.** Who is Consulted, who is Informed, per task? | Not stated by the Chief Editor and **not invented here.** The Addendum §3.1 notification column implies some Informed parties; that is not the same as an assignment |
| `RACI-02` | **OD3's number is still open.** "One role per task" constrains the *shape* — one Responsible role per task — but says nothing about how many agent *instances* exist, or whether one instance may hold different roles across different articles | RACI assigns roles, not instances. **No headcount is back-derived from this matrix**, and none may be |
| `RACI-03` | **The authority gradient: will a Responsible agent return work to the Accountable human?** Successor-node review means T6 reviews T5, so the human is never the sole reviewer — the earlier framing of this risk ("a lax accountable human makes four-eyes nominal") misdescribed the role and is withdrawn | What remains is narrower and **falsifiable**: if **T6 never returns to T5**, successor review is nominal at that boundary. Measure the T6→T5 return rate. This replaces both "do agents think alike?" and "is the human diligent?", neither of which could be tested |
| `RACI-04` | **"One role only per task" versus D2.** This points at deviation register D2's closing condition (a) — distinct agent per gate, matching Charter text. But RACI constrains roles, and the Charter's phrase "each executed by a distinct agent" names agents | Close enough to be worth deciding, not close enough to close silently. **Chief Editor's call** |
| `RACI-05` | **Nothing here is ratified.** OD1, OD2, OD3, OD4 stand as the Charter has them | Ratification is a discrete, dated act in Addendum §2.4. A framework recorded is not a decision made |

---

## 6. OD4 reframed — autonomy as the destination, not the fallback

The Charter records OD4 (Proposer → Critics → Judge) as *rejected for v1*, with two reopening branches: ① revisit if logged data shows independence failing, and ② **OD2 resolving negatively is a pre-launch blocker.**

Both branches are **negative triggers** — OD4 reopens because something went wrong.

The Chief Editor's framing adds a positive one: **OD4 is the extension that permits autonomous workflow once judgment rules are clear enough to be codified as SOPs.** On that reading, OD4 is not a fallback architecture competing with the five-gate pipeline — it is the pipeline's destination, reached when the judgment the Accountable human currently supplies at T5 has been written down well enough for an agent to apply it.

### 6.1 OD4 is intra-node; the phase gates are inter-node

The long-standing tension — "OD4 replaces the linear pipeline" — dissolves once the two are seen as different layers:

| Layer | Mechanism | Provides |
|---|---|---|
| **Inter-node** | Phase gates T1–T11, one agent per node, successor reviews predecessor | Four-eyes, sequence enforcement, audit trail |
| **Intra-node** | **OD4 as a separate system**: Proposer → Critics → Judge running *inside* a node to produce that node's output, once judgment rules are codified as SOPs | Judgment quality at the node |

OD4 **hands its output to the next node in the phase gates, which already does the reviewing.** So adopting OD4 does not replace or weaken the gate chain — it changes how one node reaches its answer, and the chain reviews that answer exactly as before.

That is why OD4 can be a separate system on its own: it is separable *because* review lives between nodes, not inside them.

### 6.2 Why this is the point of the whole design

The purpose is to let **one natural person preview all reviews and judgments produced by the workflow**, and approve each editorial against the corresponding audience's rules and regulations — rather than perform every review personally.

**One natural person doing all roles and tasks manually is not a sustainable business.** That is the constraint the whole operating model exists to solve, and it is why the four Open Decisions matter: they are not bureaucratic gates, they are **the conditions under which the business can run without the accountable person being the bottleneck for everything.**

### 6.3 No Charter amendment is required

An earlier draft of this document claimed that adding OD4's positive trigger required a Charter amendment. **That was an overreach and is withdrawn.** The Addendum's own Sync Gap Register settles it:

> "Charter is the baseline; the resolution is an evolution, not a contradiction. **The charter's Open decisions are resolved by subsequent analysis, which is the charter's intended process.**" — Addendum §15

Resolving OD4's path in downstream documents *is* the process. The Charter stays frozen and unchanged; this document and the Addendum carry the resolution forward with traceability. Recorded as `RACI-06`, reclassified from *requires Charter amendment* to **documented downstream, per the Charter's intended process**.

**What does not change:** branch ② stands exactly as the Charter wrote it. A negative OD2 resolution remains a pre-launch blocker, "at any point, including before v1 ships." A positive path to OD4 does not soften the negative one.

---

## 7. What would close what

| If ratified | Effect |
|---|---|
| RACI framing accepted for OD2 | OD2 gains a defensible answer that does not depend on a claim about agent cognition. **Still requires a dated Charter-level act to move from Open** |
| `RACI-04` decided | Deviation register **D2** may close under its condition (a) |
| `RACI-01` assigned | Notification design (Addendum G6) gains its input |
| `RACI-06` accepted | OD4's positive trigger and its intra-node architecture recorded in the Addendum. **No Charter amendment; §6.3** |
| — | **OD3 remains open regardless.** Nothing in this document supplies a headcount |

### 7.1 Why all four ODs matter to the business, not just to governance

The governing rule holds: scaffolding and prototyping proceed under provisional assumptions, and only production is gated. But the reason the four ODs must be resolved before the business starts officially is operational, not procedural:

| OD | Business question it actually asks |
|---|---|
| **OD1** | Which work must the one natural person personally touch, and which can they delegate? |
| **OD2** | Is the review the agents perform trustworthy enough for the accountable person to approve on top of, rather than redo? |
| **OD3** | How many agents does it take to run this without the person becoming the bottleneck? |
| **OD4** | When can judgment itself be delegated, so the person previews and approves rather than adjudicates every case? |

Unresolved, each one collapses back onto the same single human. **A business in which one natural person performs every role and task does not scale and is not sustainable** — so these four are viability conditions for operating, not paperwork ahead of launch.

---

## 8. Changelog

- **2026-08-16 v1.1:** **Three corrections from the Chief Editor, two of them to claims v1.0 got wrong.** (1) **Successor-node review** — one agent per node, next node is the default reviewer — is the mechanism delivering four-eyes, and it is *already specified* in the Addendum §3.1 required-fields column (T2 confirms T1's logging; T6's field is literally "All prior gate criteria confirmed," so T6 reviews T5). v1.0 missed this and consequently claimed Line 3 was "the only control covering the two tasks where R = A." **Withdrawn:** where R = A at T5, its successor T6 assures it, and Line 3 is additional risk-triggered assurance over the chain rather than a patch. T11 remains successor-less but its exposure is clerical, not judgmental — the approval it records already passed T5 and T6. (2) **RACI-03 rewritten.** v1.0 framed the residual risk as "a lax accountable human makes four-eyes nominal," which misdescribes the role — the human previews an already-reviewed chain and approves against audience rules and regulations, and was never the sole reviewer. The real residual is the **authority gradient**: will a Responsible agent return work to the Accountable human? Unlike its predecessors this is falsifiable — **if T6 never returns to T5, successor review is nominal at that boundary.** (3) **No Charter amendment required.** v1.0 claimed OD4's positive trigger needed one; Addendum §15 states that resolving the Charter's Open decisions by subsequent analysis *is* the Charter's intended process, so it is documented downstream instead. Added §6.1 — **OD4 is intra-node, the phase gates are inter-node** — which dissolves the "OD4 replaces the pipeline" tension: OD4 changes how a node reaches its answer and hands off to a successor that reviews it exactly as before. Added §6.2 and §7.1 recording why all four ODs are business viability conditions: unresolved, each collapses back onto the one natural person, and a business where one person performs every role does not scale.
- **2026-08-16 v1.0:** Created from the Chief Editor's reframing of OD2 as a RACI involvement question — Accountable is the Acting Chief Editor, Responsible is the agent, one role per task — and of OD4 as the autonomy extension reached once judgment rules are codified as SOPs. Drafted the T1–T11 task matrix. Surfaced that **R = A at T5 and T11**, which does not break four-eyes (that control operates across tasks, not within one) but does identify the two tasks where Line 3 is the only assurance over the accountable party. Separated accountability separation (R ≠ A, per task) from four-eyes (R execute ≠ R review, across tasks) so the two controls are not conflated. Recorded six open items, including that **no headcount is derivable from this matrix** and that the OD2 risk moves rather than disappears — from agent similarity to accountable-party diligence. **Nothing ratified, no Charter text changed, no open decision closed.**
