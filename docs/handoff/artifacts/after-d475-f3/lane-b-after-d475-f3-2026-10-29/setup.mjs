import fs from 'node:fs';
import crypto from 'node:crypto';
const E='C:/CoWork/outputs/lane-b-after-d475-f3-2026-10-29';
const old='C:/CoWork/outputs/lane-b-d474-kn-2026-10-29/gates.mjs';
let src=fs.readFileSync(old,'utf8');
const substitutions={
 'C:/CoWork/outputs/lane-b-d474-kn-2026-10-29':E,
 '971b789e3131fdd93a4f68e20a0a8934fdb9b07f':'71dfbbe7a09f194a9986c1f29d42ad507aec1af7',
 'ddf0b922f72f8dc54f41ac19698df80691fcd6a1':'22b0a8ce2fb06c16152fa9490d21aae829a45974',
 'C:/CoWork/outputs/lane-a-graph-sync-q6-2026-10-28':'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29',
 'fbdb0e40d2ca96f3b0be6d69f03be9fc5cab1f15eb6c2d4f50ce4f34a5688e55':'1fd1a8885ac5903e4707057cce53e28b9dd8a044131e55dc6bfa8f12341db53e',
 '379e37dd8c0cbc7269ee65a6ddd186fe1e233c2ff2287d6c822f436b19455a50':'89965adfdaaaddb8d463c2b2644f137f547c85f3cfe2610e068c07c355f97e70',
 '4c3829a57f1dcc0e45d55fd045ccd56b9cfcb80c1cc3f6032cba4a1bf39a2ac7':'df076c7c23af91db3b67b9eaea576c0976bec7bd0f2b844254b687be9a01f557',
 'a51dc92d0ee08082c87b871dfe3117d08fd68089851f9372cbd3538bea8eaf4d':'34a4edeb9516f11cb36d6d2dcfe1ddac99913dbe0427647f919354c4a9990b13',
 '8ecb2368-cfc0-4137-a890-b231b5cdc9e9':'7bd2af2f-82a0-40fc-872c-31009278ff1c',
 '20f414950b810a2614db8c49c2cb4c44976799a0':'7e28fd350438bb6e4b1cb871d75ad9185d44703b',
 '20261028T153957Z':'20261029T112219Z',
 '74ac8848ed86b0e1de710ab00f52d93fc126c2a415b69164c1a74ce7520af6c2':'4c3829a57f1dcc0e45d55fd045ccd56b9cfcb80c1cc3f6032cba4a1bf39a2ac7'
};
for(const [a,b] of Object.entries(substitutions)){if(!src.includes(a))throw Error('missing replacement '+a);src=src.split(a).join(b);}
fs.writeFileSync(E+'/gates.mjs',src,{flag:'wx'});
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
fs.writeFileSync(E+'/script-provenance.json',JSON.stringify({source:old,sourceSha256:sha(fs.readFileSync(old)),substitutions,adaptedSha256:sha(Buffer.from(src)),note:'Read-only gate adaptation. All original artifacts and seals preserved. Current Judge instruction transcribed from the direct human message in this chat; no raw source-byte identity is claimed for that transcription.'},null,2)+'\n',{flag:'wx'});
