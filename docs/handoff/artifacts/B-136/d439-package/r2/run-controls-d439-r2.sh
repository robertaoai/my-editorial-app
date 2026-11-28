#!/usr/bin/env bash
# D-439 controls r2 (EV r9 §7b). r1 and the D-438 harness r5 stay unchanged.
# r2 vs r1 (Lane B review of eb0aa44):
#   F2 — every result line goes through rec(), which stops the run (exit 3) when the write fails; no branch writes
#        results any other way. Failure paths are exercised by selftest-d439-r2.sh.
#   F1 — ownership arms expect refusal for every line outside the exact reviewed state (K6, K6b, K6c, K6d, K7).
#   F3 — fresh() writes the disposable-fixture marker; K13a-K13e prove switches are refused without a valid fixture
#        and against the governed checkout, and that the protected files stay unchanged.
# Required: K2 complete case passes; K3 omitted-E12 case fails and names E12 only.
# Exit codes: 0 all cases as required; 1 a wrong case or a hash mismatch; 3 a setup or evidence failure.
# Usage: bash run-controls-d439-r2.sh <helper.mjs> <helper-sha256> <ownership.json> <ownership-sha256>
set -u
HELPER="$1"; HSHA="$2"; OWN="$3"; OSHA="$4"
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="${CONTROLS_SRC:-/c/robertaoai/my-editorial-app}"
REAL=/c/robertaoai/my-editorial-app
BASE=eb0aa44
DATE=2026-10-16
B136=docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md
PROT="docs/Modular_PRD.md docs/source/README.md docs/governance/requirements-traceability-map.md docs/v1/V1-DECISION-REGISTER.md"
RUN="$HERE/runs/$(date -u +%Y%m%dT%H%M%SZ)-${HSHA:0:12}"
[ -e "$RUN" ] && { echo "run folder exists: $RUN"; exit 1; }
mkdir -p "$RUN/logs" "$RUN/work" || { echo "cannot create $RUN"; exit 3; }
RES="$RUN/results.txt"
die() { echo "SETUP FAILURE: $*" >> "$RES"; echo "SETUP FAILURE: $*" >&2; exit 3; }
rec() { printf '%s\n' "$1" | tee -a "$RES" || die "cannot write $RES"; }
[ "$(sha256sum < "$HELPER" | cut -c1-64)" = "$HSHA" ] || { echo "helper hash mismatch" > "$RES"; exit 1; }
[ "$(sha256sum < "$OWN" | cut -c1-64)" = "$OSHA" ] || { echo "ownership manifest hash mismatch" > "$RES"; exit 1; }
echo "helper $HSHA; ownership $OSHA; base $BASE; date $DATE" > "$RES" || die "cannot write $RES"
wrong=0

# fresh <name>: clone at BASE, set identity, write the fixture marker; prints the path only on success.
fresh() {
  local d="$RUN/work/$1"
  git clone -q --no-hardlinks "$SRC" "$d" >&2 || return 1
  git -C "$d" checkout -q "$BASE" >&2 || return 1
  git -C "$d" config user.email "241258103+robertaoai@users.noreply.github.com" || return 1
  git -C "$d" config user.name robertaoai || return 1
  local top gd
  top=$(git -C "$d" rev-parse --show-toplevel | tr 'A-Z\\' 'a-z/') || return 1
  gd=$(git -C "$d" rev-parse --path-format=absolute --git-dir) || return 1
  printf 'D-439 disposable fixture\n%s\n' "$top" > "$gd/ev-d439-disposable-fixture" || return 1
  echo "$d"
}
fixture_commit() { git -C "$1" add -A && git -C "$1" commit -qm "$2" || die "fixture commit failed: $2"; }
# run <case> <want-exit> <want-reason or -> <dir> <ownership-file> <helper args...>; OUTDIR overrides EV_OUT.
run() {
  local c="$1" want="$2" why="$3" d="$4" own="$5"; shift 5
  local log="$RUN/logs/$c-$1.log"
  [ -e "$log" ] && die "log exists $log"
  EV_DATE="$DATE" EV_REPO="$d" EV_OUT="${OUTDIR:-$d.out}" EV_OWNERSHIP="$own" node "$HELPER" "$@" > "$log" 2>&1; local e=$?
  [ -s "$log" ] || die "empty log $log"
  local ok=OK
  [ "$e" = "$want" ] || ok=WRONG
  [ "$why" = "-" ] || grep -qF -- "$why" "$log" || ok=WRONG
  [ "$ok" = WRONG ] && wrong=$((wrong+1))
  rec "$c | $* | want exit $want / \"$why\" | got exit $e | $ok | $(tail -1 "$log")"
}
# assert <case> <label> <command...>: a check recorded as one result line.
assert() {
  local c="$1" l="$2"; shift 2
  if "$@"; then rec "$c | $l | OK"; else wrong=$((wrong+1)); rec "$c | $l | WRONG"; fi
}
only_e12() { local r; r=$(grep '^REFUSE' "$1") || return 1; echo "$r" | grep -qF 'E12 (docs/Modular_PRD.md' && ! echo "$r" | grep -qE '(^|[ :;])E(1|2|3|4|6|8|9|10|11) \('; }
state() { (cd "$1" && sha256sum $PROT && git rev-parse HEAD && git status --porcelain --untracked-files=all) 2>&1; }
pins_unchanged() { [ "$(git -C "$1" hash-object --no-filters docs/Modular_PRD.md docs/source/README.md docs/governance/requirements-traceability-map.md | tr '\n' ' ')" = "8dcaedc82729a6968a23f340103ce3ce9f70d108 ba7b0db3bd14fe95cf9ab288c4cefd1b89ba3d0c 53fcb80e2f4d17807f8061bcc93d29c0f6401dde " ] && [ -z "$(git -C "$1" status --porcelain)" ]; }

d=$(fresh k1) || die "clone/checkout failed: k1"; run K1 0 "S0 working tree clean" "$d" "$OWN" s0

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
assert K3-verify "refusal names E12 only" only_e12 "$RUN/logs/K3-verify.log"
assert K3 "fixture keeps owner TBD" grep -qF "legal/compliance policy — owner TBD" "$d/docs/Modular_PRD.md"
fixture_commit "$d" K3; run K3 2 "E12 (docs/Modular_PRD.md: new 0/1, old 1/0)" "$d" "$OWN" verify-commit "$(git -C "$d" rev-parse --short HEAD)"
assert K3-verify-commit "refusal names E12 only" only_e12 "$RUN/logs/K3-verify-commit.log"
assert K3 "expected record = K2 expected record" cmp -s "$d.out/expected.json" "$RUN/K2-expected.json"

d=$(fresh k4) || die "clone/checkout failed: k4"
printf '\n## 5.14e263 `D-439` — other act\n' >> "$d/docs/v1/V1-DECISION-REGISTER.md" || die "fixture write failed: K4"
fixture_commit "$d" K4; run K4 2 "S0 D-439 already in Register" "$d" "$OWN" s0

d=$(fresh k5) || die "clone/checkout failed: k5"
printf '# Note\n`D-439` is reserved for another act.\n' > "$d/docs/v1/X-conflict.md" || die "fixture write failed: K5"
fixture_commit "$d" K5; run K5 2 "not in the reviewed ownership manifest: docs/v1/X-conflict.md" "$d" "$OWN" s0

# F1: a new handoff line is refused like any other line (r1 allowed it).
d=$(fresh k6) || die "clone/checkout failed: k6"
printf '\n## Lane B — review note, 2026-10-16\n\n`D-439` is reserved for another act.\n' >> "$d/$B136" || die "fixture write failed: K6"
fixture_commit "$d" K6; run K6 2 "not in the reviewed ownership manifest: $B136" "$d" "$OWN" s0

# F1: a second copy of a reviewed line is refused (counts must match).
d=$(fresh k6b) || die "clone/checkout failed: k6b"
grep -m1 'D-439' "$d/$B136" >> "$d/$B136" || die "fixture write failed: K6b"
fixture_commit "$d" K6b; run K6b 2 "not in the reviewed ownership manifest: $B136" "$d" "$OWN" s0

# F1: a reviewed line that is changed is refused.
d=$(fresh k6c) || die "clone/checkout failed: k6c"
f="$d/docs/handoff/artifacts/B-136/ev-corrections/EV-CORRECTION-PACKET-r1.md"
node -e 'const fs=require("fs");const f=process.argv[1];const s=fs.readFileSync(f,"utf8");const i=s.indexOf("D-439");if(i<0)process.exit(1);fs.writeFileSync(f,s.slice(0,i)+"D-439 (changed)"+s.slice(i+5))' "$f" || die "fixture write failed: K6c"
fixture_commit "$d" K6c; run K6c 2 "not in the reviewed ownership manifest: docs/handoff/artifacts/B-136/ev-corrections/EV-CORRECTION-PACKET-r1.md" "$d" "$OWN" s0

# F1: an untracked file is refused (git grep would not see it).
d=$(fresh k6d) || die "clone/checkout failed: k6d"
printf '`D-439` untracked note\n' > "$d/docs/handoff/X-untracked.md" || die "fixture write failed: K6d"
run K6d 2 "S0 working tree not clean" "$d" "$OWN" s0

# F1: a reviewed line that is removed is refused (the state must still hold every entry).
d=$(fresh k6e) || die "clone/checkout failed: k6e"
node -e 'const fs=require("fs");const f=process.argv[1];const L=fs.readFileSync(f,"utf8").split("\n");const i=L.findIndex(l=>l.includes("D-439"));if(i<0)process.exit(1);L.splice(i,1);fs.writeFileSync(f,L.join("\n"))' "$d/docs/handoff/artifacts/B-136/ev-corrections/EV-CORRECTION-PACKET-r1.md" || die "fixture write failed: K6e"
fixture_commit "$d" K6e; run K6e 2 "reviewed D-439 line missing or changed: docs/handoff/artifacts/B-136/ev-corrections/EV-CORRECTION-PACKET-r1.md" "$d" "$OWN" s0

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

# F3: switches without a valid fixture marker are refused, and the protected files stay at the pins.
d=$(fresh k13a) || die "clone/checkout failed: k13a"
run K13a 0 "inverse check" "$d" "$OWN" expected
rm "$(git -C "$d" rev-parse --path-format=absolute --git-dir)/ev-d439-disposable-fixture" || die "fixture write failed: K13a"
EV_CONTROL=1 run K13a 2 "no valid disposable-fixture marker" "$d" "$OWN" apply
assert K13a "protected files at pins; tree clean" pins_unchanged "$d"

d=$(fresh k13c) || die "clone/checkout failed: k13c"
run K13c 0 "inverse check" "$d" "$OWN" expected
printf 'D-439 disposable fixture\n%s\n' "c:/robertaoai/my-editorial-app" > "$(git -C "$d" rev-parse --path-format=absolute --git-dir)/ev-d439-disposable-fixture" || die "fixture write failed: K13c"
EV_CONTROL=1 EV_TEST_SKIP=E12 run K13c 2 "no valid disposable-fixture marker" "$d" "$OWN" apply
assert K13c "protected files at pins; tree clean" pins_unchanged "$d"

# F3: every switch is refused against the governed checkout; its protected files, HEAD and status stay unchanged.
before=$(state "$REAL") || die "cannot read governed checkout state"
OUTDIR="$RUN/k13b.out" EV_CONTROL=1 run K13b 2 "EV_REPO is the governed checkout" "$REAL" "$OWN" apply
OUTDIR="$RUN/k13d.out" EV_TEST_SKIP=E12 run K13d 2 "EV_REPO is the governed checkout" "$REAL" "$OWN" apply
OUTDIR="$RUN/k13e.out" EV_TEST_INJECT=docs/Modular_PRD.md run K13e 2 "EV_REPO is the governed checkout" "$REAL" "$OWN" apply
after=$(state "$REAL") || die "cannot read governed checkout state"
printf '%s\n' "$before" > "$RUN/K13-governed-state-before.txt" || die "evidence write failed: K13"
printf '%s\n' "$after" > "$RUN/K13-governed-state-after.txt" || die "evidence write failed: K13"
assert K13 "governed checkout unchanged (protected files, HEAD, status)" [ "$before" = "$after" ]
assert K13 "no output folder created for refused runs" [ ! -e "$RUN/k13b.out" -a ! -e "$RUN/k13d.out" -a ! -e "$RUN/k13e.out" ]

rec "--- cases: $(grep -c ' | ' "$RES") wrong: $wrong"
rm -rf "$RUN/work"
[ "$wrong" -eq 0 ] || exit 1
