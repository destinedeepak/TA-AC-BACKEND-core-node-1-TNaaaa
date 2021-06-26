var fs = require('fs');


fs.readFile('./read.md',(err, content)=>{
    console.log(err, content.toString());
})

let buff1 = Buffer.alloc(10);
buff1.write("Welcome to Buffer");

console.log(buff1)