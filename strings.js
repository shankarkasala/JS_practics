let rings = "B0B6G0R6R0R6G9";
let res = [];
for (let i = 0; i < rings.length; i += 2) {
  res.push(rings.substring(i, i + 2));
}
console.log(res); //["B0", "B6", "G0", "R6", "R0", "R6", "G9"]

//length
var str = "hello";
var x = str.length;
console.log(x); //5

//toLocaleLowerCase
var str = "HELLO";
var x = str.toLocaleLowerCase();
console.log(x); //hello

// toLocalUpperCase()
var str = "hello";
var x = str.toLocaleUpperCase();
console.log(x); //HELLO

//indexOf
var str = "hello world";
var x = str.indexOf("world");
console.log(x); //6

//search
var str = "hello world";
var x = str.search("world");
console.log(x); //6

//slice
var str = "hello world";
var x = str.slice(0, 5);
console.log(x); //hello

//substring
var str = "hello world";
var x = str.substring(1, 4);
console.log(x); //ell

//subStr
var str = "hello world";
var x = str.substr(1, 4);
console.log(x); //ello

//replace
var str = "hello world";
var x = str.replace("hello", "hi");
console.log(x); //hi world

//includes
var str = "hello world";
var x = str.includes("hell");
console.log(x); //true

//charAt
var str = "hello world";
var x = str.charAt(0);
console.log(x); //h

//charcodeat
var str = "hello world";
var x = str.charCodeAt(0);
console.log(x); //104

//lastindexof
var str = "hello world hello";
var x = str.lastIndexOf("hello");
console.log(x); //12

//trim
var str = " hello world hello";
var x = str.trim();
console.log(x); //hello world hello

//split
var str = "hello world hello";
var x = str.split(" ");
console.log(x); //["hello", "world", "hello"]
