# `SV2-U03` — code-navigation evaluation (`ripwire` as candidate)

**Drafted:** 2026-09-25 by Lane A (`D-264`, Judge Q4: evaluate now, read-only). **Attempt:** `SV-002`.
**Method:** Public sources and repository measurement only. **Nothing was installed, downloaded or executed.**
**Status:** Lane A evaluation drafted; it awaits Lane B consumer evidence and the Judge's outcome.

## 1. Consumer need, measured

The first `V1-SM05` child is not yet named (no work order exists). Measured at `3973e73`, the application surface is:

| Surface | Files | Lines |
|---|---:|---:|
| `supabase/` — SQL migrations (the trigger and state-machine logic `V1-SM05` builds on) | 3 `.sql` | 1,566 (including `supabase/config.toml`) |
| `app/`, `lib/`, `components/`, `__tests__/` — TypeScript/TSX | 11 | 859 (including one `.css`) |

The codebase is small, and **most of the logic `V1-SM05` touches is SQL**.

## 2. Candidate facts (public sources, 2026-09-25)

| Criterion | Finding |
|---|---|
| What it is | C++23 CLI with an optional MCP server. It builds a local ranked call graph (tree-sitter parsing, Personalized PageRank) and reports blast radius, tests-to-run and co-changes. Maintained by Red Hat Emerging Technologies (`redhat-et/ripwire`); Apache-2.0 |
| Languages | 24 grammars, including TypeScript, JavaScript and Markdown. **No SQL or PL/pgSQL**, so the migration logic is invisible to it |
| Windows | x64 build is a **preview**, "until Windows users confirm it". This repository is developed on Windows |
| Maturity | Pre-1.0 (0.6.3 on GitHub; an independent review of 0.4.0 calls it "pre-1.0 and changing quickly" and advises pinning a version and keeping a fallback) |
| Measured value | The same review reports that output tokens **rose** by about 80–105% in Codex pilots, and strict answer satisfaction was 5/12 against 11/12 for the baseline in one benchmark |
| Distribution | Not on npm (`npm view ripwire` → 404). Installed from a GitHub release zip or a `curl … | bash` script, which the `D-86` provisioning path would have to review |
| Repository footprint | No index written into the repository; cache in the user profile/temp directory |
| Overlap | Graphify maps `docs/` governance, not the code call graph, so the two do not overlap. The existing code path is `rg`, `tsc --noEmit`, `eslint` and `bun test` |

## 3. Lane A recommendation (for the Judge's outcome)

**Use the existing path with evidence, and do not provision `ripwire` for `V1-SM05`.** Reasons:

- It cannot parse the SQL where the slice's logic lives.
- The TypeScript surface is small enough for `rg` and `tsc`.
- Windows support is a preview.
- Published evidence shows a cost rise for Codex, which is Lane B's agent.

**Return trigger:** re-evaluate when the TypeScript surface grows past roughly 100 files, when SQL support is added, or
when Lane B reports a concrete navigation failure on a named work-order child.

## 4. Still required before the Judge records the outcome

- **Lane B consumer review**, filed through its handoff route: does the existing path meet the first child's needs?
  Include one reproducible navigation task on the current code.
- **Negative control:** a task where `rg`/`tsc` alone fails. If Lane B cannot name one, that supports the waiver.

Sources: https://github.com/redhat-et/ripwire ; https://wavect.io/blog/ripwire-ai-repo-context-review-2026/
