# Stop 2 — route 2a, fixtures launch (2026-11-13T13:40:39Z)

The run stopped before any source-repository edit. The source HEAD is still `30db8d5…`, and the source tree is clean. CL HEAD is S2A `b77629c…`, and CL is clean.

The route was resumed after Stop 1 (Judge-authorized). The resume validated S2A and its hook trace. Then `bun run fixtures` failed to launch:
- Node `spawnSync("bun")` returned `ENOENT`, with exit `null` after 11 ms and no output.
- `bun` on this machine is the npm shim `C:\Users\rober_24syk4j\AppData\Roaming\npm\bun` / `bun.cmd`.
- Node cannot launch that shim without a shell.

**No fixture ran.** The shell shim runs `exec "$basedir/node_modules/bun/bin/bun.exe"`. That binary is `C:/Users/rober_24syk4j/AppData/Roaming/npm/node_modules/bun/bin/bun.exe`: version 1.1.30, 109,102,592 bytes, SHA-256 `b8359896a96f945977bb193f2e9a3a8a2676b1659e4e6e7ab44fb8f70be9df06`. The two startup checks ran `bun run check` through that shim from bash, so they used the same binary.

**Proposed change (needs authority):**
- **What changes:** in `scripts/lib-run.cjs` `run()`, when the command is `bun`, spawn that exact `bun.exe` path instead of the bare name.
- **What stays the same:** the arguments, the environment and the working directory.
- **What it affects:** the bun calls only (fixtures, `jev:selftest` and `check`).
