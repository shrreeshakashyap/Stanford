#!/usr/bin/env node

var fib = function(n)
{
 if (n<1) return 0;
 else if (n ==1 || n==2) return 1;
 else if (n>2) return fib(n-1)+fib(n-2);
};

var fibo = function(n)
{
 var phi = (1 + Math.sqrt(5))/2;
 return Math.round((Math.pow(phi, n) - Math.pow(1-phi, n))/Math.sqrt(5));
};

var firstkfib = function(k)
{
 var i=1;
 var arr = [];
 for (i=1; i<k+1;i++)
   arr.push(fib(i));
 return arr;
};

var fmt = function(arr)
{
 return arr.join(" ");
};

var k = 20;
console.log("firstkfic("+k+")");
console.log(fmt(firstkfib(k)));
