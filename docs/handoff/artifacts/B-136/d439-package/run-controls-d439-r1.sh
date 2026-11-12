#!/usr/bin/env bash
# D-439 controls r1 (EV r9 §7b), on the D-438 harness r5 pattern; the r5 harness itself stays unchanged.
# Every case runs in its own disposable clone at BASE. Required: K2 complete case passes; K3 omitted-E12 case fails
# and names E12 only. K1, K4-K12 are support arms (S0, ownership, overwrite refusal, E2b, whole-file comparison).
# Every setup step, fixture write, fixture commit and evidence write must succeed, or the run stops with exit 3 and keeps
# its evidence folder; each case log must be non-empty. One work and evidence folder per run, never overwritten.
# Exit codes: 0 all cases as required; 1 a wrong case or a hash mismatch; 3 a setup or evidence failure.
# Usage: bash run-controls-d439-r1.sh <helper.mjs> <helper-sha256> <ownership.json> <ownership-sha256>
set -u
HELPER="$1"; HSHA="$2"; OWN="$3"; OSHA="$4"
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="${CONTROLS_SRC:-/c/robertaoai/my-editorial-app}"
BASE=317404b
DATE=2026-10-16
B136=docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md
RUN="$HERE/runs/$(date -u +%Y%m%dT%H%M%SZ)-${HSHA:0:12}"
[ -e "$RUN" ] && { echo "run folder exists: $RUN"; exit 1; }
mkdir -p "$RUN/logs" "$RUN/work" || { echo "cannot create $RUN"; exit 3; }
RES="$RUN/results.txt"
die() { echo "SETUP FAILURE: $*" | tee -a "$RES" >&2; exit 3; }
[ "$(sha256sum < "$HELPER" | cut -c1-64)" = "$HSHA" ] || { echo "helper hash mismatch" | tee "$RES"; exit 1; }
[ "$(sha256sum < "$OWN" | cut -c1-64)" = "$OSHA" ] || { echo "ownership manifest hash mismatch" | tee "$RES"; exit 1; }
echo "helper $HSHA; ownership $OSHA; base $BASE; date $DATE" > "$RES" || die "cannot write $RES"
wrong=0

fresh() {
  local d="$RUN/work/$1"
  git clone -q --no-hardlinks "$SRC" "$d" >&2 || return 1
  git -C "$d" checkout -q "$BASE" >&2 || return 1
  git -C "$d" config user.email "241258103+robertaoai@users.noreply.github.com" || return 1
  git -C "$d" config user.name robertaoai || return 1
  echo "$d"
}
fixture_commit() { git -C "$1" add -A && git -C "$1" commit -qm "$2" || die "fixture commit failed: $2"; }
# run <case> <want-exit> <want-reason or -> <dir> <ownership-file> <helper args...>
run() {
  local c="$1" want="$2" why="$3" d="$4" own="$5"; shift 5
  local log="$RUN/logs/$c-$1.log"
  [ -e "$log" ] && die "log exists $log"
  EV_DATE="$DATE" EV_REPO="$d" EV_OUT="$d.out" EV_OWNERSHIP="$own" node "$HELPER" "$@" > "$log" 2>&1; local e=$?
  [ -s "$log" ] || die "empty log $log"
  local ok=OK
  [ "$e" = "$want" ] || ok=WRONG
  [ "$why" = "-" ] || grep -qF -- "$why" "$log" || ok=WRONG
  [ "$ok" = WRONG ] && wrong=$((wrong+1))
  echo "$c | $* | want exit $want / \"$why\" | got exit $e | $ok | $(tail -1 "$log")" | tee -a "$RES" || die "cannot write $RES"
}
# only_e12 <case> <log>: the refusal names E12 and no other active edit.
only_e12() {
  local r; r=$(grep '^REFUSE' "$2") || r=""
  if echo "$r" | grep -qF 'E12 (docs/Modular_PRD.md' && ! echo "$r" | grep -qE '(^|[ :;])E(1|2|3|4|6|8|9|10|11) \('; then
    echo "$1 | refusal names E12 only | OK" | tee -a "$RES" || die "cannot write $RES"
  else
    wrong=$((wrong+1)); echo "$1 | refusal names E12 only | WRONG | $r" | tee -a "$RES" || die "cannot write $RES"
  fi
}

d=$(fresh k1) || die "clone/checkout failed: k1"; run K1 0 "S0 target paths clean" "$d" "$OWN" s0

# K2 complete case: every active edit applied -> verification passes (working tree and commit).
d=$(fresh k2) || die "clone/checkout failed: k2"
run K2 0 "inverse check" "$d" "$OWN" expected
EV_CONTROL=1 run K2 0 "post-write bytes = intended" "$d" "$OWN" apply
run K2 0 "10/10 edits present once" "$d" "$OWN" verify
fixture_commit "$d" K2; run K2 0 "every blob = expected; 10/10 edits" "$d" "$OWN" verify-commit "$(git -C "$d" rev-parse --short HEAD)"
cp "$d.out/expected.json" "$RUN/K2-expected.json" || die "evidence copy failed: K2"

# K3 omitted-E12 case: every other active edit correct, NG-11 keeps "owner TBD" -> verification fails and names E12.
d=$(fresh k3) || die "clone/checkout failed: k3"
run K3 0 "inverse check" "$d" "$OWN" expected
EV_CONTROL=1 EV_TEST_SKIP=E12 run K3 0 "CONTROL RUN: edit E12 left out" "$d" "$OWN" apply
run K3 2 "E12 (docs/Modular_PRD.md: new 0/1, old 1/0)" "$d" "$OWN" verify
only_e12 K3-verify "$RUN/logs/K3-verify.log"
grep -qF "legal/compliance policy — owner TBD" "$d/docs/Modular_PRD.md" && echo "K3 | fixture keeps owner TBD | OK" | tee -a "$RES" || { wrong=$((wrong+1)); echo "K3 | fixture keeps owner TBD | WRONG" | tee -a "$RES"; }
fixture_commit "$d" K3; run K3 2 "E12 (docs/Modular_PRD.md: new 0/1, old 1/0)" "$d" "$OWN" verify-commit "$(git -C "$d" rev-parse --short HEAD)"
only_e12 K3-verify-commit "$RUN/logs/K3-verify-commit.log"
cmp -s "$d.out/expected.json" "$RUN/K2-expected.json" && echo "K3 | expected record = K2 expected record | OK" | tee -a "$RES" || { wrong=$((wrong+1)); echo "K3 | expected record = K2 | WRONG" | tee -a "$RES"; }

d=$(fresh k4) || die "clone/checkout failed: k4"
printf '\n## 5.14e263 `D-439` — other act\n' >> "$d/docs/v1/V1-DECISION-REGISTER.md" || die "fixture write failed: K4"
fixture_commit "$d" K4; run K4 2 "S0 D-439 already in Register" "$d" "$OWN" s0

d=$(fresh k5) || die "clone/checkout failed: k5"
printf '# Note\n`D-439` is reserved for another act.\n' > "$d/docs/v1/X-conflict.md" || die "fixture write failed: K5"
fixture_commit "$d" K5; run K5 2 "not in the reviewed ownership manifest: docs/v1/X-conflict.md" "$d" "$OWN" s0

d=$(fresh k6) || die "clone/checkout failed: k6"
printf '\n## Lane B — review note, 2026-10-16\n\n`D-439` package reviewed.\n' >> "$d/$B136" || die "fixture write failed: K6"
fixture_commit "$d" K6; run K6 0 "1 later handoff record line(s); 1 commit(s) since base, handoff-only: true" "$d" "$OWN" s0

d=$(fresh k7) || die "clone/checkout failed: k7"
printf '\n## Lane B — review note, 2026-10-16\n\n`D-439` package reviewed.\n' >> "$d/$B136" || die "fixture write failed: K7"
printf 'x\n' > "$d/scripts/k7-fixture.txt" || die "fixture write failed: K7"
fixture_commit "$d" K7; run K7 2 "not in the reviewed ownership manifest: $B136" "$d" "$OWN" s0

d=$(fresh k8) || die "clone/checkout failed: k8"
TAMP="$RUN/ownership-tampered.json"
node -e 'const fs=require("fs");const j=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));j.entries.push({path:"x",line:1,sha256:"0"});fs.writeFileSync(process.argv[2],JSON.stringify(j))' "$OWN" "$TAMP" || die "fixture write failed: K8"
run K8 2 "ownership manifest hash is not the reviewed value" "$d" "$TAMP" s0

d=$(fresh k9) || die "clone/checkout failed: k9"
run K9 0 "inverse check" "$d" "$OWN" expected
mv "$RUN/logs/K9-expected.log" "$RUN/logs/K9-expected-first.log" || die "log rename failed: K9"
run K9 2 "expected record exists — refusing to overwrite" "$d" "$OWN" expected

d=$(fresh k10) || die "clone/checkout failed: k10"
run K10 0 "inverse check" "$d" "$OWN" expected
run K10 2 "apply needs the D-439 act in the Register" "$d" "$OWN" apply

d=$(fresh k11) || die "clone/checkout failed: k11"
run K11 0 "inverse check" "$d" "$OWN" expected
EV_CONTROL=1 EV_TEST_INJECT=docs/Modular_PRD.md run K11 2 "E2b written docs/Modular_PRD.md" "$d" "$OWN" apply

d=$(fresh k12) || die "clone/checkout failed: k12"
run K12 0 "inverse check" "$d" "$OWN" expected
EV_CONTROL=1 run K12 0 "post-write bytes = intended" "$d" "$OWN" apply
printf 'X' >> "$d/docs/source/README.md" || die "fixture write failed: K12"
fixture_commit "$d" K12; run K12 2 "unattributed byte difference at commit" "$d" "$OWN" verify-commit "$(git -C "$d" rev-parse --short HEAD)"

echo "--- cases: $(grep -c ' | ' "$RES") wrong: $wrong" | tee -a "$RES" || die "cannot write $RES"
rm -rf "$RUN/work"
[ "$wrong" -eq 0 ] || exit 1
