# UX — Multi-Lane AI Governance: Platform Interaction

**Date:** 2026-09-27
**Tier:** `SPECS` / `ux` — interaction per selected platform (`D-34`), for the global Project-scope family
`AIG-01`–`AIG-06` (`D-271`).
**Behaviour owner:** `docs/fn-specs/FN-MULTI-LANE-AI-GOVERNANCE.md`. **Platform owner:**
`docs/specs/SPECS-MULTI-LANE-AI-GOVERNANCE.md`. This file covers only where the selected surfaces **interact
differently**; it copies no rule.

**Canonical syntax lives elsewhere — link, do not copy:** handoff fields `docs/handoff/TEMPLATE.md`; lifecycle and
commit procedure `docs/handoff/README.md`; lane map and commands `CLAUDE.md` (shared core); decisions
`docs/v1/V1-DECISION-REGISTER.md`.

---

## 0. Section origin — `D-36`

Every section is `[V1]`, introduced by `D-271` on 2026-09-27. Claims about a surface's interaction are **planned**
until observed in use.

## 1. How a request reaches each surface `[V1]`

| Surface | Receives a request by | Returns its work by |
|---|---|---|
| Claude Code | The Judge's chat message in the Code tab; the repository files | Commits on the working branch; a turn report cited from the Register (`D-138`) |
| Claude Cowork | The Judge's conversation, with handoff text supplied | Draft Lane A answer text for Claude Code to commit (`D-227`) |
| ChatGPT Chat/Work | The Judge's conversation, with repository context supplied | A drafted `B-` entry or review text |
| Codex | The Judge's instruction in its session against the checkout | Code commits in Lane B's surfaces; its own `B-` entry (`D-184`) |
| Antigravity chat | The Judge's conversation | Level 2 review text |
| Antigravity IDE | The Judge's instruction against the checkout | Workflow changes in `.github/workflows/`; a drafted `C-` entry |

**The Judge is the relay between surfaces.** No surface messages another directly; each request and each receipt
passes through the Judge or through a committed handoff entry.

## 2. Interaction differences that matter `[V1]`

| Situation | Claude Code | Codex | Antigravity |
|---|---|---|---|
| Opening a **fresh session** for an `SV2-U02` probe | New Code-tab session; no prior transcript | New session | New session |
| **Withholding file and search tools** during the automatic-loading probe | The operator asks before any tool call and rejects a tool request | **unknown** — measured by `SV2-U02-B` | **unknown** — measured by `SV2-U02-C` |
| Reading the context readout | `/context` | **unknown** | **unknown** |
| Where the receipt is typed | Lane A records it in `SV-002` | Lane B's `B-` entry | Lane C's drafted `C-` entry, relayed by the Judge if it cannot be committed |

## 3. Review hand-offs `[V1]`

Level 1 (ChatGPT Chat/Work) reviews first, then Level 2 (Antigravity chat), in that order (`D-266` item 1). A review is
text returned to the Judge or appended to the existing handoff entry. It records a verdict; it never applies the fix
and never writes `Verified` for work its own lane answered (`AIG-05`).
