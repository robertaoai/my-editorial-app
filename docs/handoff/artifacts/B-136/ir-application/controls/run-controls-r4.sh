#!/usr/bin/env bash
# D-438 controls r4. Changes from r3: C5 (tampered ownership manifest) runs inside the sequence, before the verdict;
# each run gets its own work and evidence folder (never shared, never overwritten); raw logs are kept in the evidence
# folder before the clones are removed; the summary is written there and the script exits 1 on any wrong case.
# Usage: bash run-controls-r4.sh <helper.mjs> <helper-sha256> <ownership.json> <ownership-sha256>
set -u
HELPER="$1"; HSHA="$2"; OWN="$3"; OSHA="$4"
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC=/c/robertaoai/my-editorial-app
BASE=128e0d4
B136=docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md
RUN="$HERE/runs/$(date -u +%Y%m%dT%H%M%SZ)-${HSHA:0:12}"
[ -e "$RUN" ] && { echo "run folder exists: $RUN"; exit 1; }
mkdir -p "$RUN/logs" "$RUN/work"
RES="$RUN/results.txt"
[ "$(sha256sum < "$HELPER" | cut -c1-64)" = "$HSHA" ] || { echo "helper hash mismatch" | tee "$RES"; exit 1; }
[ "$(sha256sum < "$OWN" | cut -c1-64)" = "$OSHA" ] || { echo "ownership manifest hash mismatch" | tee "$RES"; exit 1; }
echo "helper $HSHA; ownership $OSHA; base $BASE" > "$RES"
wrong=0

fresh() {
  local d="$RUN/work/$1"
  git clone -q --no-hardlinks "$SRC" "$d" && git -C "$d" checkout -q "$BASE" \
    && git -C "$d" config user.email "241258103+robertaoai@users.noreply.github.com" && git -C "$d" config user.name robertaoai
  echo "$d"
}
# run <control> <want-exit> <want-reason or -> <dir> <ownership-file> <helper args...>
run() {
  local c="$1" want="$2" why="$3" d="$4" own="$5"; shift 5
  local log="$RUN/logs/$c-$1.log"
  IR_REPO="$d" IR_OUT="$d.out" IR_OWNERSHIP="$own" node "$HELPER" "$@" > "$log" 2>&1; local e=$?
  local ok=OK
  [ "$e" = "$want" ] || ok=WRONG
  [ "$why" = "-" ] || grep -qF "$why" "$log" || ok=WRONG
  [ "$ok" = WRONG ] && wrong=$((wrong+1))
  echo "$c | $* | want exit $want / \"$why\" | got exit $e | $ok | $(tail -1 "$log")" | tee -a "$RES"
}

d=$(fresh c1); run C1 0 - "$d" "$OWN" s0
d=$(fresh c2a); printf '# Note\n`D-438` is reserved for the setup registration batch.\n' > "$d/docs/handoff/X-conflict.md"
git -C "$d" add -A && git -C "$d" commit -qm C2a; run C2a 2 "not in the reviewed ownership manifest: docs/handoff/X-conflict.md" "$d" "$OWN" s0
d=$(fresh c2b); printf '\n## Lane B — setup registration note, 2026-10-15\n\n`D-438` is reserved for the setup registration batch.\n' >> "$d/$B136"
git -C "$d" add -A && git -C "$d" commit -qm C2b; run C2b 2 "not in the reviewed ownership manifest: $B136" "$d" "$OWN" s0
d=$(fresh c2d); printf '\n## Lane A — IR application note, 2026-10-15\n\n`D-438` is reserved for the setup registration batch.\n' >> "$d/$B136"
git -C "$d" add -A && git -C "$d" commit -qm C2d; run C2d 2 "not in the reviewed ownership manifest: $B136" "$d" "$OWN" s0
d=$(fresh c2c); printf '\n## 5.14e262 `D-438` — other act\n' >> "$d/docs/v1/V1-DECISION-REGISTER.md"
git -C "$d" add -A && git -C "$d" commit -qm C2c; run C2c 2 "S0 D-438 already in Register" "$d" "$OWN" s0
d=$(fresh c5); TAMP="$RUN/ownership-tampered.json"
node -e 'const j=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));j.entries.push({path:"x",line:1,sha256:"0"});require("fs").writeFileSync(process.argv[2],JSON.stringify(j))' "$OWN" "$TAMP"
run C5 2 "ownership manifest hash is not the reviewed value" "$d" "$TAMP" s0
d=$(fresh c3); run C3 0 - "$d" "$OWN" apply
git -C "$d" add -A && git -C "$d" commit -qm C3; run C3 0 "five paths, every blob = expected" "$d" "$OWN" verify-apply "$(git -C "$d" rev-parse --short HEAD)"
d=$(fresh c4a); IR_TEST_INJECT=docs/Modular_PRD.md run C4a 2 "E2b written docs/Modular_PRD.md" "$d" "$OWN" apply
d=$(fresh c4b); run C4b 0 - "$d" "$OWN" apply
printf 'X' >> "$d/docs/specs/SPECS-PUBLICATION.md"
git -C "$d" add -A && git -C "$d" commit -qm C4b; run C4b 2 "E5 blob docs/specs/SPECS-PUBLICATION.md" "$d" "$OWN" verify-apply "$(git -C "$d" rev-parse --short HEAD)"

echo "--- cases: $(grep -c ' | ' "$RES") wrong: $wrong" | tee -a "$RES"
rm -rf "$RUN/work"
[ "$wrong" -eq 0 ] || exit 1
