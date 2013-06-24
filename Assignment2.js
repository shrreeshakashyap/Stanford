#!/usr/bin/env node
var fs = require('fs');
var outfile = "Primenumbers.txt";
var arr = Array()
count =0;
number=2;
numcount=0;
while(numcount<100)
{
 for (j=1;j< number; j++)
 {
  if (number%j==0)
   count = count + 1 ;
 }
if (count==1)
 {
 numcount++;
 arr.push(number);
   fs.writeFileSync(outfile, number);
 console.log(number+",");
 }

 number++;
 count=0;
}
for (i=0; i<arr.length; i++)
{
 fs.appendFileSync ( outfile, arr[i]);
 if (i!=arr.length-1)
   fs.appendFileSync(outfile, ",");
}
