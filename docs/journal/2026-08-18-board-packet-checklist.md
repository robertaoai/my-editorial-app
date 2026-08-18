# Board Packet Checklist — Approve / Defer, Plain-Language

**Date:** 2026-08-18
**Status:** Analysis only. No application code, no migration, no commit or push made by this entry.
**Scope:** Plain-language approve/reject/defer recommendation for the 42 pending Board decisions surfaced in `2026-08-18-sprint-readiness-consolidated.md` (`APD-01–10`, `B-P0-01–22`, `MFB-01–10`), followed by a detailed addendum on `B-P0-17`, `B-P0-06`, and `APD-09`.

**Correction note:** this file was verbally described as saved in an earlier response in this session but the write was never actually performed. This is the first real write of it. Treat any earlier claim that it existed as wrong.

---

**Glossary**
- **OD1–OD4** = the four big unanswered questions from the founding Charter (who's really in charge of reviews; is the AI's double-check actually independent; how many staff/agents are needed; should a formal "propose → challenge → judge" AI system exist). Nothing in this checklist closes any of these — they stay open.
- **AP-01** = this project, the app, as it exists today.
- **P0-EVR** = the proposed trial: do the same editorial work by hand for 5–10 real paying customers, zero coding, to see if it actually works before building more.
- **PSK** = "Project Scope Key" — a tag meaning "the team added this, the customer didn't ask for it directly, here's why."

No item below is recommended for outright rejection — the source documents were written unusually defensively (every item already builds in "no code," "no Charter change," "preserves the customer's original ask"). One item (`B-P0-06`) is flagged **Defer** rather than pass. Several others pass only with a condition attached, explained in the "why" column.

## Batch 1 — Portfolio decisions (APD-01 through APD-10)

*Sets up vocabulary and control principles. Doesn't start any real-world activity by itself.*

| # | What it's really asking | Verdict | Why |
|---|---|---|---|
| APD-01 | Call this project "AP-01," one temporary piece of a bigger continuing business | Approve | Just a label — changes nothing about how the app works |
| APD-02 | Lock the original customer requirements and Charter so nobody edits them later to look right in hindsight | Approve | Protects the historical record — pure upside |
| APD-03 | Agree on 4 ways this project is allowed to end (done / accepted risk / handed off / cancelled) | Approve | Gives the project an actual finish line instead of staying open forever |
| APD-04 | Confirm the hand-run trial (P0-EVR) is a test, not a new product | Approve | Keeps the trial from quietly becoming "the real thing" without a real decision |
| APD-05 | Say that any future "continuation project" needs its own separate sign-off | Approve | Guardrail only — doesn't create or authorize anything new |
| APD-06 | Stop using the name "OD4" for two different things at once | Approve | Fixes a real mix-up already found in the docs — clean win |
| APD-07 | If OD4 ever actually gets triggered, it has to be its own separate project | Approve | Matches what the original Charter already says |
| APD-08 | Whoever approves the editorial rulebook must sit outside the systems that use it | Approve | Basic "don't let the fox guard the henhouse" control |
| APD-09 | Agree that spending, time, and risk limits need Board-set numbers | Approve *(cond.)* | Approves the idea of limits; see the detailed addendum below — the actual numbers are the `B-P0-06` boundary list |
| APD-10 | Require a firm decision date instead of letting this run indefinitely | Approve | Prevents an open-ended project with no end in sight |

## Batch 2 — PoC & Editorial Briefcase resolutions (B-P0-01 through B-P0-22)

*This is where real activity would start: real trigger topics, real drafts, real paying clients.*

| # | What it's really asking | Verdict | Why |
|---|---|---|---|
| B-P0-01 | Confirm the trial is a side experiment, not a new product | Approve | Framing only |
| B-P0-02 | Confirm the actual app and Sprint 1 don't change because of this trial | Approve | Zero added risk |
| B-P0-03 | Allow topics to come from the founder's own research, public forums (Reddit/Quora), or a paying client | Approve *(cond.)* | Fine — but only if collection stays 100% manual. No scraping bots; both platforms' rules forbid that |
| B-P0-04 | Require every topic to be turned into one real article link before it enters the app | Approve | Keeps the app's front door exactly as it already works |
| B-P0-05 | Confirm a "trending" score can rank ideas but can never skip a review step | Approve | Already the rule everywhere else in this project — stays consistent |
| B-P0-06 | Approve running 5–10 real paid client engagements outside the app | **Defer** | Creates real legal exposure with real people before anyone owns the legal question (Q7 has no owner) or the spending/topic limits have real numbers. See the detailed addendum below for exactly what's missing |
| B-P0-07 | Approve testing whether people will actually pay for this | Approve | Just a way of measuring — no commitment attached |
| B-P0-08 | Let the Chief Editor make the final publish/hold call, with the AI only advising | Approve *(cond.)* | Fine as a temporary rule — but it's standing in for an unanswered Charter question (OD1), so it can't be treated as that question being answered |
| B-P0-09 | Require client feedback to go through proper review before it changes anything | Approve | Stops "a client said so" from silently becoming a new feature |
| B-P0-10 | Confirm none of this authorizes actual coding or database changes | Approve | This is the safety net under the whole batch |
| B-P0-11 | Approve the "Editorial Briefcase" (a paperwork packet proving the work was done properly) | Approve | Adds transparency, no build required |
| B-P0-12 | Allow six kinds of starting material (article, LinkedIn post, claim, source, idea, observation) | Approve | Reasonable, and every item still needs a real source before publishing |
| B-P0-13 | Require 6 specific proof documents (claims, evidence, what's unknown, counter-arguments, fact-vs-opinion labeling, plain-language draft) | Approve | Matches how real newsrooms (AP, Reuters) actually work — solid practice |
| B-P0-14 | Confirm the client gets the "how we got there" package but NOT the finished article itself | Approve | Important — prevents a "we paid for an article and didn't get one" dispute, since it's disclosed upfront |
| B-P0-15 | Keep the "explain our reasoning" reports short and plain, not a dump of the AI's raw internal thinking | Approve | Sensible scope limit |
| B-P0-16 | Confirm this is paperwork only — still no code, no new database fields | Approve | Second safety net, same as B-P0-10 |
| B-P0-17 | Give the client a window where they get to publish first, before this project does | Approve *(cond.)* | Good idea — the actual length of that window is still blank. See the detailed addendum below for a proposed field design and a draft default |
| B-P0-18 | Require a plagiarism/originality check, twice, before anything is approved | Approve | Straightforward, reduces a real risk |
| B-P0-19 | Confirm the trial can't be used as an excuse to rewrite the original customer agreement | Approve | Guardrail only |
| B-P0-20 | Require a fixed decision date so this trial can't quietly run forever | Approve | Same discipline as APD-10 |
| B-P0-21 | Require any "continuation project" to get its own separate charter | Approve | Guardrail only, same as APD-05 |
| B-P0-22 | Restate (a third time — see redundancy note) that OD4 stays narrowly defined | Approve | Harmless repeat of APD-06/07/08 |

## Batch 3 — Media-feedback disposition resolutions (MFB-01 through MFB-10)

*Decides what to do with the 8 open customer-feedback items (FB-01–FB-08) found earlier.*

| # | What it's really asking | Verdict | Why |
|---|---|---|---|
| MFB-01 | Approve a plain-language glossary mapping internal jargon to the 5 stages the customer actually sees | Approve | Pure documentation fix, no downside |
| MFB-02 | Approve formally labeling the 6 features the team added that the customer never asked for | Approve | Honesty fix — makes hidden scope visible instead of buried |
| MFB-03 | Approve building a real "topic tagging" feature, since the customer asked for it but it was never built | Approve *(cond.)* | Approve the direction — the exact fine print isn't finished, so don't sign off on final wording until the trial tests it |
| MFB-04 | Approve a temporary rule for who has final publishing authority while the bigger Charter question stays open | Approve *(cond.)* | Needed to run the trial at all — but must stay labeled "temporary," not treated as the real answer |
| MFB-05 | Approve a temporary "extra scrutiny" process for cases where independence is uncertain | Approve *(cond.)* | Most important item in the whole packet — fine as a temporary safety net, but it must never quietly override the Charter's hard stop if the bigger question comes back "no" |
| MFB-06 | Give the editorial rulebook its own approval process, outside the AI systems that use it | Approve | Same sound principle as APD-08 |
| MFB-07 | Adopt a temporary "which rule wins in a conflict" order (law > source protection > editorial policy > platform rules > client wishes > convenience) | Approve *(cond.)* | Sensible as a working default — but it is not a legal opinion and shouldn't be treated as one until a real lawyer checks it |
| MFB-08 | Accept that there's still no company legal/compliance handbook, and proceed carefully anyway | Approve | Honest about the gap rather than pretending it's closed |
| MFB-09 | Require every new rule to be written as one clear sentence at a time, and leave staffing numbers undecided for now | Approve | Good writing discipline; staffing question correctly stays open |
| MFB-10 | Confirm this whole batch only authorizes paperwork and evidence-gathering — still zero code | Approve | Master safety net for the entire batch |

### Two patterns worth flagging

1. **The "OD4 stays narrow" rule is approved three separate times** (APD-06/07/08, B-P0-22, MFB-06) across three different documents. Harmless, but it's the same repeated-fact pattern this project has been bitten by before — if one copy is ever edited later and the other two aren't, they'll quietly disagree. Worth consolidating into one canonical resolution once ratified.
2. **Everything flagged "(cond.)" shares one root cause:** either a number hasn't been picked yet (`APD-09`, `B-P0-17`), or it's standing in for a Charter-level question that's still open (`B-P0-08`, `MFB-04`, `MFB-05`, `MFB-07`). None of those are reasons to reject — they're reasons to label the approval "temporary" so nobody mistakes it for the real answer later.

---

## Addendum (same day) — B-P0-17, B-P0-06, APD-09 in detail

### B-P0-17 — field design and reconciled client-facing draft

**A. Field design, plan-level only — revised after client-input clarification, cross-checked against the graph**

`graphify explain "Client-First Exclusivity Window"` confirms the canonical source (`board-proposal-professional-evidence-review-poc.md` §16.4) but returns only one extracted edge (`--> MVP Internal Folder`) — the graph's extraction for this node is shallow (degree 1), not a field-level dictionary. A follow-up `graphify query` against the Editorial Briefcase cluster (community 5) surfaced the actual canonical node names, used below instead of inventing new ones: **POC Client-Facing Folder** (§16.3, `references` → **Explainable Draft**, §17.2 Artifact 6), **Client Decision Report** (§17.3), **MVP Internal Folder** (§16.3), **Publishable Article Artifact** (§16.2), **Client-First Exclusivity Window** (§16.4). Note: the graph does not carry "Post-window independent-angle workflow" as its own node — that part below is grounded directly in the source text (§16 of the same document, verified by full direct read), not in a graph query.

Three data points, not three independent fields — the third is calculated, matching what the existing §16.4 record already names ("exact start and end date/time," "event that starts the window," "duration"):

| # | What it is | Field | Source of value |
|---|---|---|---|
| 1 | Window length | `exclusivity_window_days` | **Client-confirmed**, not Chief-Editor-set. Pre-filled from the Board-ratified config default `EXCLUSIVITY_WINDOW_DEFAULT_DAYS`; the client may negotiate a different number; locks once payment is finalized |
| 2 | Window start | `poc_delivery_at` | The date/time the **POC Client-Facing Folder** (Explainable Draft + Client Decision Report) is actually delivered to the client. This is the existing record's already-named "event that starts the window" — the clarification just pins down what that event concretely is |
| 3 | Window end | `exclusivity_window_ends_at` | **Calculated**, not entered: `poc_delivery_at + exclusivity_window_days`. This is the existing record's "exact end date/time," now specified as computed rather than typed |

**Correction on who enters what.** ~~The PoC's approved scope explicitly excludes "customer accounts or self-service onboarding" (§8.2, and `B-P0-16`). So field 1 is not a literal web form the client fills in themselves at this stage — it's a line on the manual engagement record, negotiated with the client and entered by the Chief Editor on their behalf, same as the rest of the Stage-1 manual pack. A true customer-facing form is a reasonable later product-stage evolution, but it is not in the approved PoC scope yet.~~

> **SUPERSEDED 2026-08-18 by the charter separation** — see `2026-08-18-poc-charter-separation-and-revenue-model.md` Part 2. The paragraph above reasoned inside a single-charter assumption: that a client surface had to fit within AP-01's approved scope, where §8.2/`B-P0-16` exclude customer self-service. Under the adopted separation, P0-EVR is a **separately chartered project with its own PRD**, so the client does enter their own Topic Brief on the POC surface. Struck rather than deleted, per this project's amendment discipline. **Note the open dependency this creates:** §8.2 and `B-P0-16` are resolutions inside the *board-proposal* document, which the new P0-EVR charter would sit above — see consolidated gap register `G3`.

**Correction on what happens at the end date.** Reaching `exclusivity_window_ends_at` does not auto-publish anything. This project has a Charter-level fixed rule against auto-advance (`NG-10`/`TC9`) that is not adjustable and applies here too. What the end date actually does, per the existing "Post-window independent-angle workflow": it lifts the internal hold and lets the Chief Editor *choose* to reassess newsworthiness and open a **new** workflow with a materially different angle and independently re-verified sourcing. It does not release the original withheld `MVP` article, and nothing fires automatically.

**Suggested draft default for `EXCLUSIVITY_WINDOW_DEFAULT_DAYS`: 30 days** (14/60 as brackets) — unchanged from the earlier answer, still a suggestion pending Board ratification, not an invented fact.

**B. Reconciling the pasted "Fair Use" draft**

| Draft section | Assessment | Why |
|---|---|---|
| Title: *"Fair Use of Research & Writing Support"* | **Needs rename** | The existing docs already warn about exactly this collision: *"'Fair trade' ... must not be confused with jurisdiction-specific legal doctrines such as fair use or fair dealing"* (PoC proposal §16.4). "Fair use" is a specific, different legal concept (US copyright doctrine). Suggest "Client-First Access Terms" instead |
| §1 Introduction | OK as-is | General framing, no conflict |
| §2 "Clients receive research materials they've paid for" | Matches existing | = the client-facing `POC` folder concept exactly |
| §2 "set number of days ... to use those materials for their own article" | Matches existing | = the Client-First Exclusivity Window concept exactly — good plain-English translation |
| §3 "Option to provide ghostwriting services" | **New scope, not yet approved** | Not covered by any existing `B-P0` item. Reasonable idea, but it's a new paid service, not a detail of the exclusivity window — see the new draft item below rather than folding it in silently |
| §3 "research is the client's" | **Needs softening** | Existing docs deliberately avoid deciding ownership: *"Folder placement does not decide copyright, license, or ownership. Those rights ... must be recorded separately"* (§16.3). Stating it as settled fact oversteps a still-open question |
| §4 "Agree on timelines before starting" | Matches existing | Same "before payment" discipline already established |
| §4 "Define whether the freelancer can reuse or adapt research later" | **Needs tightening** | The existing rule is stricter: a later angle must be "materially different" with independently re-verified sourcing; *"changing a headline, synonyms, paragraph order, or tone is not a different approach"* (§16.4). "Reuse or adapt" as worded would permit exactly what the existing rule forbids |
| §4 "Keep communication open" | OK as-is | General, no conflict |
| §5 "Fair trade means both sides benefit" | Term is fine here | "Fair trade" (not "fair use") is the term the existing docs deliberately use — keep this word, lose "Fair Use" from the title |

**Corrected working draft**, with the three fixes applied and the ghostwriting item pulled out:

> **Client-First Access Terms** *(working title)*
>
> **1. Introduction** — Research is the foundation of good writing. This sets fair, clear terms for what a client receives and how long they have first use of it.
>
> **2. Client Rights** — Clients receive the supporting research package (claims, evidence, sourcing, reasoning) they've paid for. They have an agreed number of days — the Client-First Exclusivity Window — to use that package to publish their own article first.
>
> **3. Service Role** — During the window, the finished internal article is held and not published, licensed, or reused by the service. After the window, if the topic is still newsworthy, the service may revisit it only with a materially different angle and independently re-verified sourcing — not a reworded version of the same piece.
>
> **4. Best Practices** — Agree the exact window length, start event, and end date/time (with time zone) before payment. State plainly, before payment, that the client receives the research package, not the finished internal article. Keep communication open to avoid overlap or confusion.
>
> **5. Conclusion** — Fair trade means both sides benefit: the client gets a usable research package and a real head start; the service can responsibly revisit the underlying public topic later, on its own terms, without reusing the client's paid work.

**New item to log separately, not decided here:** *draft B-P0-23 — "Approve offering ghostwriting / alternate-angle drafting as an optional additional paid service, separate from the research package, with its own scope, price, and byline/rights terms."* Pending, unreviewed — it raises its own questions (does it run through the same five gates? whose byline? new rights questions since the service would be writing for the client) that deserve their own pass rather than inheriting `B-P0-17`'s approval by proximity.

### B-P0-06 — the boundaries that must have real values before this moves off Defer

| # | Boundary | What's needed | Closes via |
|---|---|---|---|
| 1 | Low-liability topic boundary | Explicit in/out list (in: the existing Agile/DevOps/ITIL/AI audience; out: defamation-prone claims, whistleblower/source-protection cases, regulated-advice topics, active litigation) | Board decision |
| 2 | Spend cap | A number, for the whole 5–10-case cohort | Board decision |
| 3 | Time/workload stop-loss | Max elapsed time or Chief Editor hours, per engagement and per cohort | Board decision |
| 4 | Payment collection mechanics | How money actually changes hands (invoice, transfer, terms) — "outside the application" is already decided; the mechanics aren't | Chief Editor operating decision |
| 5 | Cohort size / WIP limit | 5–10 cases, one active at a time is already drafted — needs ratifying, not just describing | Board decision |
| 6 | Originality/rights search process | Two-stage search is already designed (§16.4) — needs ratifying as mandatory | Board decision |
| 7 | Client-First Exclusivity Window default | = `B-P0-17` above | This addendum's suggested 30-day default, pending ratification |
| 8 | High-liability two-key escalation route | A named, reachable Board contact/process — not just a policy sentence | Board decision |
| 9 | Legal/counsel placeholder | `Q7` (SEC-04/SEC-05 ownership) has no owner today; needs at least a placeholder (public resources + named mediation channel + explicit "hold if this gap matters") before real client work starts | Chief Editor, pending counsel |
| 10 | Fixed review/closure date | Calendar date by which the Board reviews the 5–10-case evidence and decides continue/tune/stop | Board decision |

Once all ten have real values, `B-P0-06` can move from Defer to Approve. None of them require code, a migration, or a build step — they're all decisions and numbers.

### APD-09 — cross-reference, not a separate list

`APD-09` approves the *category* — "spending, time, topic, rights, and risk limits need Board-set numbers." Its content is exactly the ten-item list above plus `B-P0-17`'s window default. Ratifying `APD-09` doesn't require deriving a second, separate list — it inherits this one. Recommend treating `APD-09`'s approval as conditional on this same list being populated, rather than voting on it independently.

---

## Addendum 2 (same day) — shared Topic Brief workflow, POC/MVP access separation

**Scope correction applied here:** this section stays at intent level — what the workflow shall do, not how it's built. Field names, domains, and auth mechanics are Technical Requirements work for later, with developers.

**Normalized against the graph + source before recommending anything:**

| Term used in the request | Existing canonical term | Source |
|---|---|---|
| "Topic brief" | **Input Card** — no graph node is named "Topic Brief"; this is the closest existing artifact | PoC proposal §17.1 |
| "MVP package" | **MVP Internal Folder**, contains the **Publishable Article Artifact** | §16.2–16.3 |
| "POC package" | **POC Client-Facing Folder**, contains the Explainable Draft + Client Decision Report | §16.3, §17.3 |
| "the research phase gate" | Reporter gate / Intelligence Layer relevance-trend tagging | `CR-06`, `CR-14` |
| "Chief Editor manual fallback" | Already-established project rule: *"AI is preferred execution, not the requirement itself; manual/rules fallback is mandatory"* | SOP-fallback plan §6, already the approved direction under `MFB-03` |

"Topic Brief" is fine to keep as the working name — it's a clearer label than "Input Card" — but it should be understood as the *same* artifact, not a second, competing one.

**Recommended forward direction:**

1. **One shared workflow, two entry paths — not two products.** MVP and POC stay one system, one five-gate pipeline (`CR-10`). What differs is only how the Topic Brief gets populated before Investigator work starts: for MVP, Chief Editor/Reporter-gate research runs first and a topic is selected from it; for POC, the paying customer's own request *is* the Topic Brief's origin, because the topic is commissioned, not discovered. Both converge on one identical Topic Brief structure before the pipeline proper begins. This sharpens what's already in the existing trigger-source model (§5.2's "natural-person commission" channel) rather than inventing something new.
2. **The fallback logic isn't new — it's an existing rule, extended.** The reasoning that the Chief Editor can supply the brief manually if the MVP research/tagging gate has a problem is exactly the pattern already committed to for `CR-06`/`CR-14`: AI is the preferred executor, never the requirement itself, manual fallback is mandatory. Recommend stating the intent as: *the Topic Brief has exactly one required structure regardless of source — research, AI tagging, or Chief Editor by hand are three possible ways to populate the same fields, not three different processes.*
3. **Access separation by role, not by product.** The two-surface idea (customer-facing vs. Chief-Editor-facing) is sound at the intent level: a paying customer's surface should let them do exactly two things — submit their own Topic Brief and receive back their own POC package — and see nothing else. The Chief Editor's surface keeps everything: research, all gates, every engagement, the MVP package. Recommend stating this now as an access principle (customer surface scoped to their own submission and their own delivered package only; Chief Editor surface unrestricted) and leaving the actual mechanism for the Technical Requirements pass.

**One thing this touches that should be routed, not assumed.** `CR-15` — *"Web only, single Chief Editor account, no notifications"* — is a real, hash-anchored customer requirement (`0b8cff04`), not a project convention. A narrowly scoped customer submission/receipt surface plausibly reads as a different thing from "a My-Editorial-App account" in the sense CR-15 was refusing — CR-15 reads as being about the internal editorial tool having exactly one operator, not about whether a client can ever submit a request or receive a deliverable — but that's an inference, not a confirmed fact, and CR-15 bundles three separate asks in one sentence exactly the way `FB-08` already flagged as a systemic drafting problem elsewhere in this project. Recommend routing the question "does a scoped customer submission/receipt surface conflict with CR-15's account and notification boundary?" to the customer via the sponsor, alongside the FB-08 atomization work already planned, rather than deciding it by inference.

---

*This entry is analysis only. It closes no open decision, ratifies nothing, and amends no governing document.*
