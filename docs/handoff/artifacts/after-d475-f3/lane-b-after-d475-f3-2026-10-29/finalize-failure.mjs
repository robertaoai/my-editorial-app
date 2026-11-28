import fs from 'node:fs';import path from 'node:path';import {execFileSync} from 'node:child_process';
import {E,A,W,REPO,B,R,S,sha,save,gates,ck,git,hashes} from './gates.mjs';
import * as G from 'file:///C:/robertaoai/my-editorial-app/scripts/graphify/guarded-rebuild.mjs';
const read=f=>fs.readFileSync(f),J=f=>JSON.parse(read(f));
const state=J(W+'/STATE.json'),env=G.sanitizedEnv();
const pathKey=Object.keys(env).find(k=>k.toUpperCase()==='PATH');
const candidates=[];
for(const d of (env[pathKey]||'').split(';').filter(Boolean))for(const ext of ['.com','.exe']){
 const p=path.join(d.replace(/^"|"$/g,''),'git'+ext);
 if(fs.existsSync(p)&&fs.statSync(p).isFile())candidates.push(p);
}
const inspect=p=>({path:p,realPath:fs.realpathSync.native(p),sha256:sha(read(p)),version:execFileSync(p,['--version'],{encoding:'utf8',env}).trim()});
const actual=inspect(candidates[0]),expected=inspect(state.frozen.bindings.git.path);
save('git-path-diagnostic.json',{
 at:new Date().toISOString(),method:'Same PATH-key lookup, directory order and .com/.exe order as guarded-rebuild.mjs resolveOnPath (lines 953-966). Read-only versions and SHA-256; PATH not changed.',
 expectedFrozen:state.frozen.bindings.git,expectedOnDisk:expected,actualResolved:actual,
 candidates,pathsEqual:actual.realPath.toLowerCase()===expected.realPath.toLowerCase(),bytesEqual:actual.sha256===expected.sha256,
 entryFailures:J(E+'/entry-extra.json').bindingFindings,
 note:'The candidate and frozen files were not modified. No attempt was made to change PATH, substitute a binding, or retry validation after the mismatch.'
});
save('entry-command-result.json',{command:['node',E+'/entry.mjs'],exitCode:1,stdout:'',stderr:fs.readFileSync(E+'/entry-failure.json','utf8'),meaning:'Entry stopped on bindingFindings; no F3 producer-projection validation or K/N check started.'});
fs.writeFileSync(E+'/STATE-ready-copy.json',read(W+'/STATE.json'),{flag:'wx'});
fs.writeFileSync(E+'/approved-answers-copy.json',read(A+'/evidence/answers-proposed.r1.json'),{flag:'wx'});
fs.writeFileSync(E+'/B050-unchanged-at-R.bin',read(REPO+'/'+B),{flag:'wx'});
save('candidate-file-map.json',G.hashTree(W+'/attempt-2/staging'));
const final=gates('final',R);
const first=J(E+'/entry-gates.json');ck(JSON.stringify(first.hashes)===JSON.stringify(final.hashes),'after-state hash mismatch');
save('after-state-proof.json',{
 at:new Date().toISOString(),head:git('rev-parse','HEAD'),tree:git('rev-parse','HEAD^{tree}'),parents:git('rev-list','--parents','-n','1','HEAD'),
 status:git('status','--porcelain=v1','--untracked-files=all'),staged:git('diff','--cached','--name-only'),
 hashesUnchanged:true,hashes:hashes(),createdCommits:[],K:null,N:null,
 candidateChecks:{K:'not run; prerequisite failed',N:'not run; K absent'},hookTraces:'not applicable; no commit attempted',
 fullProducerProjection:'not run; entry mismatch requires stop',
 publication:false,prepare:false,resume:false,regeneration:false,fetch:false,push:false,
 coverage:{historicallyDelivered:61,locallyPending:[{kind:'D-475',commit:S},{kind:'R',commit:R}],healthRecord:'prospective',freshServerClaim:false}
});
const inherited=J(E+'/inherited-seals.json');
for(const seal of inherited){ck(sha(read(seal.path))===seal.sha256,'original seal changed');for(const item of seal.entries)ck(sha(read(item.path))===item.expected,'original sealed file changed');}
save('inherited-seals-final.json',{pass:true,seals:inherited.map(s=>({path:s.path,sha256:s.sha256,files:s.entries.length})),files:inherited.reduce((n,s)=>n+s.entries.length,0)});
save('provenance.json',{
 judgeInstruction:{source:'Direct human user message in this Codex chat, 2026-10-29; opening: Lane B — complete the formal F3 candidate review after D-475.',file:'JUDGE-INSTRUCTION.txt',sha256:sha(read(E+'/JUDGE-INSTRUCTION.txt')),capture:'Manual content transcription; not claimed as a byte-identical raw transcript export.'},
 inheritedCopies:[['PRIOR-REVIEW.md',A+'/reviews-2/LANE-B-CANDIDATE-R-REVIEW.md'],['PRIOR-JUDGE-KN-RELEASE.jsonl',A+'/reviews-2/JUDGE-KN-RELEASE.jsonl'],['JUDGE-CYCLE-RELEASE.jsonl',A+'/evidence/JUDGE-AFTER-D475-CYCLE-RELEASE.jsonl']].map(([copy,source])=>({copy,source,sha256:sha(read(source)),exactCopy:read(source).equals(read(E+'/'+copy))})),
 graphifySkill:'C:/Users/rober_24syk4j/AppData/Roaming/npm/node_modules/@sentropic/graphify/src/skills/skill-codex.md',
 graphQuery:'Read-only orientation on pinned candidate; no memory write because the explicit candidate/freeze instruction overrides the generic skill memory step.',
 limitations:'External evidence is outside Git preservation. Existing manifest-retention, linked-file continuity, D-473 historical-proof defects and unavailable original D-472 instruction source remain qualified. No continuity is inferred from present byte equality.'
});
save('REVIEW-RESULT.txt',`# After-D-475 formal F3 review — stopped at entry

Verdict: Reject this review attempt at the executable-binding gate. This is not a finding that the candidate bytes are wrong. Full F3 acceptance remains incomplete; K and N were not created.

Exact failed obligation: D-426 PR3a binds Node, Git, their configuration and the CLI at prepare and re-verifies them on every use. guarded-rebuild.mjs bindingFindings (lines 1070 onward) rejects a current Git executable path different from frozen.bindings.git.path. The Judge's current instruction section 2 requires any mismatch to stop the unit, and requires an interrupted/incomplete validation not to count as a pass.

Expected frozen Git: ${expected.path}
Actual PATH-resolved Git: ${actual.path}
Expected SHA-256: ${expected.sha256}
Actual SHA-256: ${actual.sha256}
Versions: expected ${expected.version}; actual ${actual.version}
Both the retained checkout and fresh checkout produced the actual finding: "the git path changed". Matching version text does not meet the path-and-byte binding. See entry-extra.json, entry-failure.json and git-path-diagnostic.json. The recorded guard function returned the same finding for both checkouts; entry.mjs exited 1. No workaround or retry was performed.

Passing read-only observations: HEAD R ${R}; sole parent S ${S}; source tree 7e28fd350438bb6e4b1cb871d75ad9185d44703b; R changes only B-136. Worktree and staging empty. Work 7bd2af2f-82a0-40fc-872c-31009278ff1c remains ready, attempt 2. STATE ${final.hashes.state}; approved answers ${final.hashes.answers}; graph ${final.hashes.graph}; manifest ${final.hashes.manifest}, guard-treeDigest-v1, 583 files. Node, pinned Git file, producer and guard hashes were present and unchanged; the effective Git path separately failed. Source/publication fast-forward rules and refs/configuration matched. Linked inventory matched the accepted inventory; earlier continuity remains unproved. All 4,306 stray-work files matched content and mtime. Live Q6 baseline K 77af44a2fcf84a7e7c05013308cc474e6bfaef41, digest a51dc92d0ee08082c87b871dfe3117d08fd68089851f9372cbd3538bea8eaf4d, 16 receipts, no lock or journal, unchanged. All 53 sealed predecessor files (21 E1, 2 R1, 28 E2, 2 R2) reverified before and after.

Not completed: full producer projections of scene, entities, reconciliation, citations, manifest, embedded bundle and shipped assets; fresh-extraction/selection and final Git merge validation; lifecycle/source-protection checks; renewed fragment parity and member-set/name/pending-semantic review. Prior observations are retained in PRIOR-REVIEW.md, not promoted into completed results here. Its two inherited undescribed nodes remain qualified baseline facts and were not repaired. There is no positive F3 verdict.

No B-050 append or staging occurred. No K/N checks or hooks ran because their F3 prerequisite failed. No prepare, resume, candidate regeneration, publication, fetch, push, amendment, reset, rebase or history rewrite. Final HEAD remains R, its tree is ${git('rev-parse','HEAD^{tree}')}, and the repository is clean. before/after candidate and B-050 hashes match.

Failure route: return this packet to Lane A for the bounded environment-binding finding. Lane A should determine how the review process can use the exact frozen Git path and executable without changing candidate bytes or frozen bindings, and present a concrete corrected invocation and its source/configuration evidence for release of a fresh full F3 review. Do not relax the guard, overwrite the failed evidence or treat a rerun as this attempt's pass. Any change to the bound producer, source or candidate requires the operative separate authority and fresh review; this packet grants none. K then N remains conditional on a later complete positive F3 review. Lane A's independent K/N verification and fresh inventory remain later, because no K/N exist now.

Coverage remains 61 historically delivered. Only D-475 and R are locally pending; health record prospective. No fresh server claim. Preserve accepted deliveries, F1, all provenance gaps, U-C held, J1/D-440 and J2/D-441 separate and both transfers held, B-136/B-158/D-439 Open, work-r3 held, cac590ad frozen and excluded, and every other hold.

| Item | Verdict | Follow-up phase |
|---|---|---|
| Entry executable binding | Reject | Lane A environment-binding diagnosis; fresh review release |
| Fixed candidate/freeze observations | Approve within measured scope | Preserve packet; no full consistency or F3 claim |
| Full F3 review | Defer | Lane B after entry mismatch is resolved under released scope |
| K then separate N | Defer | Only after complete positive F3 review |
| Independent K/N verification | Defer | Lane A after K/N exist |
| Publication and push | Defer | Separate release; none performed |
| Provenance gaps and all holds | Defer — unchanged | Existing checkpoints |
`);
const files=fs.readdirSync(E,{withFileTypes:true}).filter(x=>x.isFile()).map(x=>x.name).sort();
const manifest=files.map(f=>sha(read(E+'/'+f))+' *'+f).join('\n')+'\n';
save('SHA256-MANIFEST.txt',manifest);
const seal={algorithm:'SHA-256',manifest:'SHA256-MANIFEST.txt',sha256:sha(Buffer.from(manifest)),files:files.length,at:new Date().toISOString()};
save('SEAL.json',seal);
console.log(JSON.stringify({sealed:seal,head:R,gitExpected:expected,gitActual:actual,createdCommits:[]},null,2));
