// Apply the drafted Stop 3 prerequisite (tier-sweep routing + its fixtures) to a scratch clone by exact anchors.
// Usage: node make-prereq.cjs <W>
"use strict";
const fs = require("fs");
const W = process.argv[2];
const once = (t, a, b, label) => { const i = t.indexOf(a); if (i < 0 || t.indexOf(a, i + 1) >= 0) throw new Error(`anchor not unique: ${label}`); return t.slice(0, i) + b + t.slice(i + a.length); };

// ---- scripts/checks/tier-sweep.mjs
const TS = `${W}/scripts/checks/tier-sweep.mjs`;
let ts = fs.readFileSync(TS, "utf8");
const ROUTE = `
// \`D-479\` item 6 historical-claim routing (Stop 3 prerequisite; Register entry and D-481
// authority bound at recording). Nineteen dated tier claims name \`V1-SM05.md\` for the packet
// that held that path when they were recorded — the \`FR-15\` evidence slice, which \`D-479\`
// moved to \`V1-SM07.md\`. Only these decisions, and only that one target path, are routed.
// Every other claim on \`V1-SM05.md\` (including current claims on the new packet) and every
// other target on the same row is checked exactly as before. The re-slot state is read from
// the two packets' first lines, so the routing cannot apply before the move is present, and a
// state that is neither "before the move" nor "after the move" fails closed.
const RESLOT_ROUTE = Object.freeze({
  decisions: new Set([
    "D-251", "D-253", "D-254", "D-256", "D-259", "D-260", "D-261", "D-262", "D-263", "D-264",
    "D-269", "D-287", "D-288", "D-289", "D-306", "D-373", "D-379", "D-380", "D-381",
  ]),
  from: "docs/v1/work-packets/V1/V1-SM05.md",
  to: "docs/v1/work-packets/V1/V1-SM07.md",
  preFrom: /^# Work packet — \`V1\` \\/ \`V1-SM05\` \\(\`MMF-V1-CORE\`\\)\\s*$/,
  postFrom: /^# Work packet — \`V1\` \\/ \`V1-SM05\` \\(\`MMF-V1-PIPELINE\`\\)\\s*$/,
  postTo: /^# Work packet — \`V1\` \\/ \`V1-SM07\` \\(\`MMF-V1-CORE\`\\)\\s*$/,
});

function firstLine(path) {
  const body = contents(path);
  return body === null ? null : body.split(/\\r?\\n/)[0];
}

/** "pre" (move absent), "post" (move present) or "inconsistent" — from the two packet headings. */
export function reslotState() {
  const from = firstLine(RESLOT_ROUTE.from);
  const to = firstLine(RESLOT_ROUTE.to);
  if (to === null && from !== null && RESLOT_ROUTE.preFrom.test(from)) return { state: "pre", from, to };
  if (from !== null && to !== null && RESLOT_ROUTE.postFrom.test(from) && RESLOT_ROUTE.postTo.test(to)) {
    return { state: "post", from, to };
  }
  return { state: "inconsistent", from, to };
}

// The target files for one claim after routing. Unrouted claims are returned unchanged.
function routeFiles(files, decision, rowNum, findings) {
  if (!decision || !RESLOT_ROUTE.decisions.has(decision) || !files.includes(RESLOT_ROUTE.from)) return files;
  const s = reslotState();
  if (s.state === "pre") return files;
  if (s.state === "post") return files.map((f) => (f === RESLOT_ROUTE.from ? RESLOT_ROUTE.to : f));
  findings.push(
    \`row \${rowNum}: \${decision} historical claim on \${RESLOT_ROUTE.from} cannot be routed — D-479 re-slot state inconsistent (from: \${s.from ?? "absent"}, to: \${s.to ?? "absent"})\`,
  );
  return files.filter((f) => f !== RESLOT_ROUTE.from);
}
`;
ts = once(ts, "\n// Shared by both table shapes: given the candidate IDs", ROUTE + "\n// Shared by both table shapes: given the candidate IDs", "checkClaim comment");
ts = once(ts, "  for (const file of tier.files) {\n    const body = contents(file);", "  for (const file of routeFiles(tier.files, decision, rowNum, findings)) {\n    const body = contents(file);", "checkClaim loop");
fs.writeFileSync(TS, ts);

// ---- scripts/fixtures/suites.mjs (tier-sweep suite only)
const SU = `${W}/scripts/fixtures/suites.mjs`;
let su = fs.readFileSync(SU, "utf8");
const FIX = `
  // \`D-479\` item 6 routing of the nineteen dated \`V1-SM05.md\` tier claims (Stop 3
  // prerequisite). Each fixture writes its own packet state and restores it, so the suite
  // proves the same behaviour on a commit before the move and on a commit after it.
  const SM05P = "docs/v1/work-packets/V1/V1-SM05.md";
  const SM07P = "docs/v1/work-packets/V1/V1-SM07.md";
  const SM06P = "docs/v1/work-packets/V1/V1-SM06.md";
  const H05_CORE = "# Work packet — \`V1\` / \`V1-SM05\` (\`MMF-V1-CORE\`)";
  const H05_PIPE = "# Work packet — \`V1\` / \`V1-SM05\` (\`MMF-V1-PIPELINE\`)";
  const H07_CORE = "# Work packet — \`V1\` / \`V1-SM07\` (\`MMF-V1-CORE\`)";
  const o05 = existsSync(SM05P) ? read(SM05P) : null;
  const o07 = existsSync(SM07P) ? read(SM07P) : null;
  const o06 = read(SM06P);
  // The FR-15 packet body, wherever it lives in this commit (without its heading line).
  const fr15 = o07 !== null && o07.startsWith(H07_CORE) ? o07 : o05;
  const fr15Body = fr15.slice(fr15.indexOf("\\n"));
  const pre = { s05: H05_CORE + fr15Body, s07: null };
  const post = { s05: H05_PIPE + "\\n\\nFixture-only new packet.\\n", s07: H07_CORE + fr15Body };
  const put = (p, v) => (v === null ? existsSync(p) && rmSync(p) : write(p, v));
  const probe = (id, label) =>
    \`\\n## 5.99v \\\`\${id}\\\` — fixture-only probe\\n\\n| Tier | Disposition |\\n|---|---|\\n| **\${label}** | ✅ fixture-only claim |\\n\`;
  const reslot = (name, { state, s06, table, expect, shouldPass = false }) =>
    fixture(results, {
      name,
      modulePath: CHECK("tier-sweep.mjs"),
      mutate: () => {
        put(SM05P, state.s05);
        put(SM07P, state.s07);
        if (s06 !== undefined) write(SM06P, s06);
        write(REGISTER, origReg + (table ?? ""));
      },
      restore: () => {
        put(SM05P, o05);
        put(SM07P, o07);
        write(SM06P, o06);
        restoreReg();
      },
      expect,
      shouldPass,
    });
  const SM05_LABEL = "\`docs/v1/work-packets/V1/V1-SM05.md\`";
  await reslot("tier-sweep re-slot: before the move, a routed claim is checked against the original V1-SM05.md", {
    state: pre, table: probe("D-253", SM05_LABEL), shouldPass: true,
  });
  await reslot("tier-sweep re-slot: after the move, a routed claim is checked against V1-SM07.md", {
    state: post, table: probe("D-253", SM05_LABEL), shouldPass: true,
  });
  await reslot("tier-sweep re-slot: after the move, a routed claim missing from V1-SM07.md fails", {
    state: { s05: post.s05, s07: post.s07.split("D-253").join("D-2X3") },
    expect: 'D-253 marked ✅ for "**\`docs/v1/work-packets/V1/V1-SM05.md\`**" but absent from docs/v1/work-packets/V1/V1-SM07.md',
  });
  await reslot("tier-sweep re-slot: new packet present but V1-SM07.md missing fails closed", {
    state: { s05: post.s05, s07: null },
    expect: "D-479 re-slot state inconsistent",
  });
  await reslot("tier-sweep re-slot: a current claim stays on the new V1-SM05.md", {
    state: post, table: probe("D-999", SM05_LABEL),
    expect: 'D-999 marked ✅ for "**\`docs/v1/work-packets/V1/V1-SM05.md\`**" but absent from docs/v1/work-packets/V1/V1-SM05.md',
  });
  await reslot("tier-sweep re-slot: a claim outside the nineteen is not routed, and other targets keep their check", {
    state: post, s06: o06.split("D-251").join("D-2X1"),
    table: probe("D-255", SM05_LABEL),
    expect: 'D-255 marked ✅ for "**\`docs/v1/work-packets/V1/V1-SM05.md\`**" but absent from docs/v1/work-packets/V1/V1-SM05.md',
  });
  await reslot("tier-sweep re-slot: a two-target routed row still checks its other target", {
    state: post, s06: o06.split("D-251").join("D-2X1"),
    expect: "but absent from docs/v1/work-packets/V1/V1-SM06.md",
  });
}

const RETENTION_CHK = "scripts/checks/retention-policy-coupling.mjs";`;
su = once(su, `    restore: restoreReg,\n    expect: "marked ✅ for",\n  });\n}\n\nconst RETENTION_CHK = "scripts/checks/retention-policy-coupling.mjs";`,
  `    restore: restoreReg,\n    expect: "marked ✅ for",\n  });` + FIX, "tierSweep tail");
fs.writeFileSync(SU, su);
console.log("applied");
