var os = require('os');
var {readFile} = require('fs');

console.log('Welcome to Nodejs');

console.log(os.cpus().length, os.freemem(), os.uptime(), os.version());

let buff1 = Buffer.alloc(12);

buff1.write('Welcome to node.js');

console.log(buff1.toString());


console.log('Hello');
for (let index = 0; index < 10000; index++) {
    console.log("Hello") 
}// blocking code
setTimeout(()=>{
    console.log('10')
},0);// non-blocking code


