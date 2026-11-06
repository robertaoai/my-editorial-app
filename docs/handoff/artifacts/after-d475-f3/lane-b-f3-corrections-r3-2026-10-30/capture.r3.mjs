// DRAFT ONLY. Requires exact-byte review and Judge release. No shell redirection.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
const root='C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29';
const capture=root+'/capture-run-2', launcherOut=root+'/launcher-run-2', childOut=root+'/f3-run-2';
const node='C:/Program Files/nodejs/node.exe';
const launcher='C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.r4.mjs';
const child=root+'/entry.r3.mjs';
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const sha=p=>hash(fs.readFileSync(p));
const args=[launcher,'--child',child,'--child-sha256','52ff2b33ab9d743a4345f45172de2028639200c6d3fc601c1a980cd51cd340c6','--out',launcherOut,'--','--out',childOut];
const rec={record:'capture-completion',started:new Date().toISOString(),node,args,cwd:'C:/robertaoai/my-editorial-app',launcherExit:null,signal:null,errors:[],completeCapture:false,exit:6,streamFormat:'raw inherited file descriptors; no text decoding',environment:'inherited unchanged; launcher controls child environment'};
let owned=false,of=null,ef=null;
const err=(phase,e)=>rec.errors.push({phase,error:String(e?.stack||e)});
function noLinks(p){for(let q=path.resolve(p);;){if(fs.lstatSync(q).isSymbolicLink()||fs.realpathSync.native(q).toLowerCase()!==q.toLowerCase())throw Error('link or alias: '+q);const up=path.dirname(q);if(up===q)break;q=up;}}
function write(name,value){const p=capture+'/'+name,b=Buffer.from(JSON.stringify(value,null,2)+'\n');fs.writeFileSync(p,b,{flag:'wx'});if(!fs.readFileSync(p).equals(b))throw Error('read-back: '+p);return {path:p,bytes:b.length,sha256:hash(b)};}
function observed(p){try{const b=fs.readFileSync(p);return {path:p,status:'present',bytes:b.length,sha256:hash(b)};}catch(e){return {path:p,status:e.code==='ENOENT'?'absent':'unavailable',error:String(e)};}}
try {
  if(process.argv.length!==2)throw Error('capture accepts no arguments');
  if(path.resolve(process.execPath).toLowerCase()!==path.resolve(node).toLowerCase()||process.version!=='v24.18.0'||sha(node)!=='9a4eb5f1c29c6a2e93852ead46b999e284a6a5ca8bab4d4e241d587d025a52de')throw Error('frozen Node mismatch');
  for(const p of [root,node,launcher,child])noLinks(p);
  if(sha(launcher)!=='1906c92a8db4b59e1eb28492fd5bf628deb641954fc2195e409fb0a7525ba462'||sha(child)!==args[4])throw Error('reviewed hash mismatch');
  if(fs.readdirSync(root).some(p=>/^SHA256-MANIFEST/i.test(p)))throw Error('execution packet sealed');
  for(const p of [capture,launcherOut,childOut])if(fs.existsSync(p))throw Error('existing output: '+p);
  fs.mkdirSync(capture);owned=true;
  write('capture-start.json',rec);
  of=fs.openSync(capture+'/stdout.log','wx');ef=fs.openSync(capture+'/stderr.log','wx');
  const r=spawnSync(node,args,{cwd:rec.cwd,env:process.env,shell:false,windowsHide:true,stdio:['ignore',of,ef]});
  rec.launcherExit=r.status;rec.signal=r.signal;rec.pid=r.pid??null;
  if(r.error)err('spawn',r.error);
  if(!r.pid||r.status===null||r.signal)err('process-outcome',new Error('missing exit, signal or absent process'));
}catch(e){err('capture',e);}
finally{for(const fd of [of,ef])if(fd!==null)try{fs.fsyncSync(fd);fs.closeSync(fd);}catch(e){err('flush-or-close',e);}}
rec.ended=new Date().toISOString();
if(owned){rec.stdout=observed(capture+'/stdout.log');rec.stderr=observed(capture+'/stderr.log');}
rec.completeCapture=owned&&rec.errors.length===0&&rec.stdout?.status==='present'&&rec.stderr?.status==='present'&&Number.isInteger(rec.launcherExit);
rec.exit=rec.completeCapture?rec.launcherExit:6;
process.exitCode=rec.exit;
try{if(!owned)throw Error('capture folder not created');write('host-result.json',rec);}
catch(e){err('host-result-write-or-readback',e);rec.exit=6;rec.completeCapture=false;rec.partialHostResult=owned?observed(capture+'/host-result.json'):null;process.exitCode=6;try{fs.writeSync(1,JSON.stringify(rec)+'\n');}catch{}}
// No timeout/watchdog: an interrupted or hung attempt has incomplete evidence and is never accepted.
