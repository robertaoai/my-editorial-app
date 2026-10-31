// Preparation only: reads inputs, assembles source text, writes external drafts with wx.
// Does not import the guard/producer or execute the child, launcher, projections or any Git mutation.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {execFileSync} from 'node:child_process';
const P='C:/CoWork/outputs/lane-b-after-d475-f3-r2-preparation-2026-10-29',F='C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29';
const R='C:/robertaoai/my-editorial-app',A='C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29',L='C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29';
const sha=b=>crypto.createHash('sha256').update(b).digest('hex'),read=f=>fs.readFileSync(f),pin=f=>({path:f,bytes:fs.statSync(f).size,sha256:sha(read(f))});
const save=(name,data)=>fs.writeFileSync(P+'/'+name,typeof data==='string'?data:JSON.stringify(data,null,2)+'\n',{flag:'wx'});
function map(root){const out={};function walk(d,rel=''){for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name),k=rel?rel+'/'+e.name:e.name;if(e.isSymbolicLink())throw Error('link '+f);if(e.isDirectory())walk(f,k);else if(e.isFile())out[k]=sha(read(f));else throw Error('type '+f);}}walk(root);return out;}
if(fs.readdirSync(F).length)throw Error('execution packet is not empty');
const st=JSON.parse(read(A+'/work/STATE.json')),git=(...args)=>execFileSync(st.frozen.bindings.git.path,['--no-optional-locks','-C',R,...args],{encoding:'utf8'}).replace(/\r/g,'').trimEnd();
const before={at:new Date().toISOString(),head:git('rev-parse','HEAD'),status:git('status','--porcelain=v1','--untracked-files=all'),staged:git('diff','--cached','--name-only'),config:git('config','--list','--show-origin'),refs:git('for-each-ref','--format=%(objectname) %(refname)'),tracked:{},trees:{}};
if(before.head!=='71dfbbe7a09f194a9986c1f29d42ad507aec1af7'||before.status||before.staged)throw Error('preparation repository baseline differs');
for(const f of git('ls-files','-z').split('\0').filter(Boolean))before.tracked[f]=sha(read(R+'/'+f));
for(const dir of [L,A,'C:/CoWork/outputs/lane-b-after-d475-f3-2026-10-29','C:/CoWork/outputs/sync-20261028','C:/CoWork/myeditorialapp/.graphify','C:/CoWork/myeditorialapp/.graphify-receipts'])before.trees[dir]=map(dir);
save('preparation-before.json',before);
const paths=[
 R+'/AGENTS.md',R+'/docs/v1/V1-BUILD-SPEC.md',R+'/docs/v1/V1-DECISION-REGISTER.md',R+'/docs/governance/agent-rules-reference.md',R+'/docs/v1/V1-PHASE-CLOSURE.md',R+'/docs/LANE-B-WORK-ORDER.md',
 R+'/docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md',R+'/docs/handoff/B-050-hook-rebuild-resets-graphify-branch-metadata.md',R+'/.claude/skills/sync-docs/SKILL.md',R+'/docs/graph-fragments/README.md',R+'/scripts/graphify/guarded-rebuild.mjs',
 L+'/PLAN.r4b.md',L+'/launch-review.r4.mjs',L+'/INSTRUCTION-R4B.jsonl',
 A+'/evidence/SHA256-MANIFEST-E1.txt',A+'/reviews-1/SHA256-MANIFEST-R1.txt',A+'/evidence-2/SHA256-MANIFEST-E2.txt',A+'/reviews-2/SHA256-MANIFEST-R2.txt',
 'C:/CoWork/outputs/lane-b-after-d475-f3-2026-10-29/SHA256-MANIFEST.txt',
 'C:/CoWork/outputs/lane-a-worktree-coverage-2026-10-24/inventory.json','C:/CoWork/outputs/lane-a-q6-record-2026-10-28/stray-sync-20261028-freeze.txt',
 A+'/work/PENDING.json',A+'/work/STATE.json',A+'/evidence/answers-proposed.r1.json',A+'/evidence-2/resume.out',A+'/evidence-2/resume.txt'];
const inputs=paths.map(pin);save('input-bindings.json',inputs);
let body=read(P+'/child-body.draft.mjs').toString();const changes=[];
function replaceOnce(from,to){if(body.split(from).length!==2)throw Error('replacement occurrence mismatch '+from.slice(0,70));body=body.replace(from,to);changes.push({from,to});}
// Preserve the same config queries and frozen digests; relocate only their neutral scratch folder and retain it.
replaceOnce("function run(exe,args,cwd,label,timeout=60000) {","function run(exe,args,cwd,label,timeout=60000,expectedStatus=0) {");
replaceOnce("res.status===0 && !res.signal", "res.status===expectedStatus && !res.signal");
replaceOnce("function validateBindings() {",`let neutralIndex=0;
const CONFIG_QUERIES = {
  effective(checkout, gitPath, env) {
    requireThat(same(env,ENV),'config query environment');
    return {status:0,signal:null,error:null,stdout:run(gitPath,['-C',checkout,'config','--list','--show-origin'],checkout,'effective-config').toString('utf8')};
  },
  outside(gitPath, env) {
    requireThat(same(env,ENV),'neutral config environment');
    const dir=OUT+'/scratch/neutral-'+(++neutralIndex);requireThat(!fs.existsSync(dir),'neutral scratch exists');fs.mkdirSync(dir);
    const result=run(gitPath,['-C',dir,'rev-parse','--is-inside-work-tree'],dir,'neutral-not-repo',60000,128);
    requireThat(result.length===0,'unexpected neutral rev-parse stdout');
    const rec=R.commands.at(-1);requireThat(/not a git repository/i.test(read(rec.stderr.path).toString()),'neutral refusal has unexpected reason');
    return {status:0,signal:null,error:null,stdout:run(gitPath,['-C',dir,'config','--list','--show-origin'],dir,'outside-config').toString('utf8')};
  }
};
function validateBindings() {`);
replaceOnce("G.bindingFindings(b,{checkout:cwd,env:ENV})","G.bindingFindings(b,{checkout:cwd,env:ENV,queries:CONFIG_QUERIES})");
// Complete final recorded execution output binding; no trust in a ready label alone.
replaceOnce("const selection=ST.ready.selection;requireThat",`const runRecord=J(A+'/evidence-2/resume.out');
    requireThat(runRecord.outcome==='ready'&&runRecord.exit===0&&runRecord.workId===EXPECT.workId&&same(runRecord.ready,ST.ready),'recorded resume output differs');
    const selection=ST.ready.selection;requireThat`);
const guard=read(R+'/scripts/graphify/guarded-rebuild.mjs').toString();
const matched=guard.match(/const STUDIO_VALIDATOR = String\.raw`([\s\S]*?)`;\r?\n/);if(!matched)throw Error('validator source absent');
let worker=matched[1],workerChanges=[];
function wreplace(from,to){if(worker.split(from).length!==2)throw Error('worker replacement mismatch '+from.slice(0,60));worker=worker.replace(from,to);workerChanges.push({from,to});}
wreplace('cpSync, existsSync, mkdtempSync, readdirSync, readFileSync, rmSync','cpSync, existsSync, readdirSync, readFileSync, writeFileSync');
wreplace('import { tmpdir } from "node:os";','// Scratch comes exclusively from the fixed child output; no temporary-directory environment change.');
wreplace('const T = mkdtempSync(join(tmpdir(), "guard-manifest-"));','const T = o.scratch;');
wreplace('cpSync(studio, T, { recursive: true });',`cpSync(studio, T, { recursive: true, errorOnExist: true, force: false });
      writeFileSync(join(T, "../manifest-original.json"), readFileSync(join(T, "workspace-manifest.json")), { flag: "wx" });`);
wreplace('} finally { rmSync(T, { recursive: true, force: true }); }','} finally { /* preserve scratch including partial producer output on every outcome */ }');
wreplace('for (const rel of existsSync(onto) ? list(onto) : []) if (!INPUTS.has(rel)) f.push("unclassified export input: ontology/" + rel);',`for (const rel of existsSync(onto) ? list(onto) : []) {
    if (!INPUTS.has(rel)) f.push("unclassified export input: ontology/" + rel);
    J(join(onto,rel)); // malformed optional JSON must not become a producer empty fallback
  }
  if (has("scene-hierarchies.json")) f.push("unexpected hierarchy output for this fixed no-profile candidate");`);
wreplace('process.stdout.write(JSON.stringify({ findings: f, summary }));',`process.stdout.write(JSON.stringify({ findings: f, summary,
 completed:f.length?[]:["graph","scene","entities","reconciliation","citations","manifest","embedded-bundle","shipped-assets"] }));
process.exitCode=f.length?2:0;`);
save('producer-worker.draft.mjs',worker);
save('assembly-transformations.json',{body:changes,projectionWorker:{source:R+'/scripts/graphify/guarded-rebuild.mjs',originalSha256:sha(matched[1]),changes:workerChanges}});
const child='// PLAN ONLY: exact-byte independent review and Judge release required before execution.\nconst INPUT_BINDINGS = '+JSON.stringify(inputs,null,2)+';\nconst PROJECTION_WORKER = '+JSON.stringify(worker)+';\n'+body;
fs.writeFileSync(F+'/entry.mjs',child,{flag:'wx'});save('child-binding.json',pin(F+'/entry.mjs'));
console.log(JSON.stringify(pin(F+'/entry.mjs')));
