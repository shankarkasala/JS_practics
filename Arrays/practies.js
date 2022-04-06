let str = "abcdefg";
let b = str.slice(0, -3);
console.log(b);
//char occurence
function myFunction(a, b) {
  return b.split(a).length - 1;
}
let res = myFunction(
  "m",
  "how many times does the character occur in this sentence?"
);
console.log(res);

//whole number
function myFunction(a) {
  return a - Math.floor(a) === 0;
}
//contins
function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a;
}
//two decimals
function myFunction(a) {
  return Number(a.toFixed(2));
}
//number to Array
function myFunction(a) {
  let myFunc = (num) => Number(num);
  return Array.from(String(a), myFunc);
}

function myFunction(a) {
  const string = a + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

let l = "tpi%rcs";
let p = l.replace(/%/g, "").trim("").split("").reverse().join("");
console.log(p);

let arr = [1, 2, 3, 4, 5];
let res2 = arr[4];
console.log(res2);
//negitive numbers
let arr2 = [1, -2, 2, -4];
let count = 0;
let res3 = arr2.map((b) => (Math.sign(b) < 0 ? count++ : 0));
console.log(count);

// function myFunction(a) {
//   return a.filter((el) => el < 0).length;
// }
