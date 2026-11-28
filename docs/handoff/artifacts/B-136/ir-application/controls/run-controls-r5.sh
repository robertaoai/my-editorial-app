#!/usr/bin/env bash
# D-438 controls r5.
# Changes from r4: every setup step (clone, checkout, config), fixture write, fixture commit and evidence write must
# succeed, or the run stops with exit 3 and keeps its evidence folder; each case log must be non-empty.
# CONTROLS_SRC overrides the source repository; it is used only to test the setup-failure path.
# Kept from r4: C5 inside the sequence before the verdict; one work and evidence folder per run, never shared or
# overwritten; raw logs kept before the clones are removed; exit 1 on any wrong case.
# Exit codes: 0 all cases as required; 1 a wrong case or a hash mismatch; 3 a setup or evidence failure.
# Usage: bash run-controls-r5.sh <helper.mjs> <helper-sha256> <ownership.json> <ownership-sha256>
set -u
HELPER="$1"; HSHA="$2"; OWN="$3"; OSHA="$4"
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="${CONTROLS_SRC:-/c/robertaoai/my-editorial-app}"
BASE=128e0d4
B136=docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md
RUN="$HERE/runs/$(date -u +%Y%m%dT%H%M%SZ)-${HSHA:0:12}"
[ -e "$RUN" ] && { echo "run folder exists: $RUN"; exit 1; }
mkdir -p "$RUN/logs" "$RUN/work" || { echo "cannot create $RUN"; exit 3; }
RES="$RUN/results.txt"
die() { echo "SETUP FAILURE: $*" | tee -a "$RES" >&2; exit 3; }
[ "$(sha256sum < "$HELPER" | cut -c1-64)" = "$HSHA" ] || { echo "helper hash mismatch" | tee "$RES"; exit 1; }
[ "$(sha256sum < "$OWN" | cut -c1-64)" = "$OSHA" ] || { echo "ownership manifest hash mismatch" | tee "$RES"; exit 1; }
echo "helper $HSHA; ownership $OSHA; base $BASE" > "$RES" || die "cannot write $RES"
wrong=0

# fresh <name>: clone at BASE into the run's work folder; prints the path only on success.
fresh() {
  local d="$RUN/work/$1"
  git clone -q --no-hardlinks "$SRC" "$d" >&2 || return 1
  git -C "$d" checkout -q "$BASE" >&2 || return 1
  git -C "$d" config user.email "241258103+robertaoai@users.noreply.github.com" || return 1
  git -C "$d" config user.name robertaoai || return 1
  echo "$d"
}
fixture_commit() { git -C "$1" add -A && git -C "$1" commit -qm "$2" || die "fixture commit failed: $2"; }
# run <control> <want-exit> <want-reason or -> <dir> <ownership-file> <helper args...>
run() {
  local c="$1" want="$2" why="$3" d="$4" own="$5"; shift 5
  local log="$RUN/logs/$c-$1.log"
  IR_REPO="$d" IR_OUT="$d.out" IR_OWNERSHIP="$own" node "$HELPER" "$@" > "$log" 2>&1; local e=$?
  [ -s "$log" ] || die "empty log $log"
  local ok=OK
  [ "$e" = "$want" ] || ok=WRONG
  [ "$why" = "-" ] || grep -qF "$why" "$log" || ok=WRONG
  [ "$ok" = WRONG ] && wrong=$((wrong+1))
  echo "$c | $* | want exit $want / \"$why\" | got exit $e | $ok | $(tail -1 "$log")" | tee -a "$RES" || die "cannot write $RES"
}

d=$(fresh c1) || die "clone/checkout failed: c1"; run C1 0 - "$d" "$OWN" s0

d=$(fresh c2a) || die "clone/checkout failed: c2a"
printf '# Note\n`D-438` is reserved for the setup registration batch.\n' > "$d/docs/handoff/X-conflict.md" || die "fixture write failed: C2a"
fixture_commit "$d" C2a; run C2a 2 "not in the reviewed ownership manifest: docs/handoff/X-conflict.md" "$d" "$OWN" s0

d=$(fresh c2b) || die "clone/checkout failed: c2b"
printf '\n## Lane B — setup registration note, 2026-10-15\n\n`D-438` is reserved for the setup registration batch.\n' >> "$d/$B136" || die "fixture write failed: C2b"
fixture_commit "$d" C2b; run C2b 2 "not in the reviewed ownership manifest: $B136" "$d" "$OWN" s0

d=$(fresh c2d) || die "clone/checkout failed: c2d"
printf '\n## Lane A — IR application note, 2026-10-15\n\n`D-438` is reserved for the setup registration batch.\n' >> "$d/$B136" || die "fixture write failed: C2d"
fixture_commit "$d" C2d; run C2d 2 "not in the reviewed ownership manifest: $B136" "$d" "$OWN" s0

d=$(fresh c2c) || die "clone/checkout failed: c2c"
printf '\n## 5.14e262 `D-438` — other act\n' >> "$d/docs/v1/V1-DECISION-REGISTER.md" || die "fixture write failed: C2c"
fixture_commit "$d" C2c; run C2c 2 "S0 D-438 already in Register" "$d" "$OWN" s0

d=$(fresh c5) || die "clone/checkout failed: c5"
TAMP="$RUN/ownership-tampered.json"
node -e 'const fs=require("fs");const j=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));j.entries.push({path:"x",line:1,sha256:"0"});fs.writeFileSync(process.argv[2],JSON.stringify(j))' "$OWN" "$TAMP" || die "fixture write failed: C5"
run C5 2 "ownership manifest hash is not the reviewed value" "$d" "$TAMP" s0

d=$(fresh c3) || die "clone/checkout failed: c3"; run C3 0 - "$d" "$OWN" apply
fixture_commit "$d" C3; run C3 0 "five paths, every blob = expected" "$d" "$OWN" verify-apply "$(git -C "$d" rev-parse --short HEAD)"

d=$(fresh c4a) || die "clone/checkout failed: c4a"; IR_TEST_INJECT=docs/Modular_PRD.md run C4a 2 "E2b written docs/Modular_PRD.md" "$d" "$OWN" apply

d=$(fresh c4b) || die "clone/checkout failed: c4b"; run C4b 0 - "$d" "$OWN" apply
printf 'X' >> "$d/docs/specs/SPECS-PUBLICATION.md" || die "fixture write failed: C4b"
fixture_commit "$d" C4b; run C4b 2 "E5 blob docs/specs/SPECS-PUBLICATION.md" "$d" "$OWN" verify-apply "$(git -C "$d" rev-parse --short HEAD)"

echo "--- cases: $(grep -c ' | ' "$RES") wrong: $wrong" | tee -a "$RES" || die "cannot write $RES"
rm -rf "$RUN/work"
[ "$wrong" -eq 0 ] || exit 1
