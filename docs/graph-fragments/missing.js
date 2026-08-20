const fs = require('fs');
const path = require('path');

const graph = fs.readFileSync('.graphify/graph.json', 'utf8');

function walk(dir, acc) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.md')) acc.push(p.split(path.sep).join('/'));
  }
  return acc;
}

const files = walk('docs', []);
const missing = files.filter(f => !graph.includes(path.basename(f)));

console.log('docs .md files total :', files.length);
console.log('missing from graph   :', missing.length);
missing.forEach(f => console.log('   ', f));
