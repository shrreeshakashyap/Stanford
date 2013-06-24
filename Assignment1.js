#!usr/bin/env node
var fs = require('fs');
var outfile = "Hello.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);
console.log("Wrote: " +out+ "\nTo: " + outfile);
