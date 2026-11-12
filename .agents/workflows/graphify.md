---
command: /graphify
description: Turn any folder of files into a navigable knowledge graph
---

# Workflow: graphify

## Steps
This repository's live graph (`.graphify`) is built and updated only through the guarded procedure
(`.claude/skills/sync-docs/SKILL.md` §7, `D-425`, `D-426`):

```bash
node scripts/graphify/guarded-rebuild.mjs prepare --work <new folder under C:/CoWork/outputs>
```

Never run the graphify skill's build, rebuild, update, watch or hook-install routes against this repository's
live state. Use the graphify skill installed at ~/.gemini/config/skills/graphify/SKILL.md only for read-only
queries (`query`, `path`, `explain`) here, or for folders outside this repository.

If no path argument is given, use `.` (current directory) for those read-only queries.

The global skill and its own update, watch and hook-install routes are external to this repository and are not
changed by this workflow: a stated limit, not prevention.
