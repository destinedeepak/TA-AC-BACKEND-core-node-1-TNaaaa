var { readFile, readFileSync } = require('fs');

readFile('./read.md', 'utf8', (err, content) => {
  console.log(err, content);
});

var result = readFileSync('./read.md', 'utf8');

console.log(result); 

let buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');

console.log(buff1);
