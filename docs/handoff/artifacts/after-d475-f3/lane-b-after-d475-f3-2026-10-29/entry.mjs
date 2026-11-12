import fs from 'node:fs';import path from 'node:path';
import {E,A,W,REPO,B,R,S,sha,save,gates,ck,git} from './gates.mjs';
import * as G from 'file:///C:/robertaoai/my-editorial-app/scripts/graphify/guarded-rebuild.mjs';
const read=f=>fs.readFileSync(f),J=f=>JSON.parse(read(f));
try{
 const seals=[];
 for(const [dir,name] of [['evidence','SHA256-MANIFEST-E1.txt'],['reviews-1','SHA256-MANIFEST-R1.txt'],['evidence-2','SHA256-MANIFEST-E2.txt'],['reviews-2','SHA256-MANIFEST-R2.txt']]){
  const p=A+'/'+dir+'/'+name;
  ck(fs.existsSync(p),'seal absent '+p);
  const entries=[];
  for(const line of read(p).toString().split(/\r?\n/).filter(Boolean)){
   const m=line.match(/^([0-9a-f]{64}) [ *](.+)$/i);ck(m,'seal format '+line);
   const f=path.resolve(path.dirname(p),m[2]); const actual=sha(read(f));entries.push({path:f,expected:m[1],actual,pass:actual===m[1]});
  }
  seals.push({path:p,sha256:sha(read(p)),entries});
 }
 save('inherited-seals.json',seals);ck(seals.every(s=>s.entries.every(e=>e.pass)),'inherited seal mismatch');
 save('BOUND-PATH.txt',B+'\n');
 save('entry-gates-result.json',gates('entry',R));
 const st=J(W+'/STATE.json');
 const extra={
  publicationSource:G.publicationSourceFindings(REPO,st.frozen.snapshot),
  bindingFindings:G.bindingFindings(st.frozen.bindings,{checkout:W+'/attempt-2/gen/checkout'}),
  freshBindingFindings:G.bindingFindings(st.frozen.bindings,{checkout:W+'/attempt-2/gen/fresh'}),
  baseline:st.frozen.baseline,
  receiptCount:fs.readdirSync('C:/CoWork/myeditorialapp/.graphify-receipts').filter(x=>/^release-.+\.json$/.test(x)).length,
  runtime:J(W+'/attempt-2/staging/.graphify_runtime.json'),
  rParents:git('rev-list','--parents','-n','1',R),
  rPaths:git('diff-tree','--no-commit-id','--name-only','-r',R),
  bunSha256:sha(read('C:/Users/rober_24syk4j/AppData/Roaming/npm/node_modules/bun/bin/bun.exe')),
 };
 save('entry-extra.json',extra);
 ck(extra.publicationSource.ok&&!extra.bindingFindings.length&&!extra.freshBindingFindings.length,'source or binding findings');
 ck(extra.baseline.releaseLocus==='77af44a2fcf84a7e7c05013308cc474e6bfaef41'&&extra.baseline.digest==='a51dc92d0ee08082c87b871dfe3117d08fd68089851f9372cbd3538bea8eaf4d'&&extra.receiptCount===16,'Q6 baseline');
 ck(extra.runtime.runtime==='typescript','runtime');
 ck(extra.rParents===R+' '+S&&extra.rPaths==='docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md','R parent/path');
 fs.writeFileSync(E+'/B050-at-R.bin',read(REPO+'/'+B),{flag:'wx'});
 save('entry-complete.json',{pass:true,at:new Date().toISOString(),seals:seals.map(s=>({path:s.path,count:s.entries.length,sha256:s.sha256}))});
 console.log('ENTRY PASS');
}catch(e){save('entry-failure.json',{pass:false,error:e.stack,at:new Date().toISOString()});console.error(e.stack);process.exitCode=1;}
