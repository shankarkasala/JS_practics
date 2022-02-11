let nums = [1, 2, 3, 4, 5];
let x = nums.length - 2;
console.log(x);
let b = nums.slice(nums.length - 2).reduce((a, b) => a * b, 1);
a = nums.at(-1) * nums.at(-2) - nums.at(0) * nums.at(1);
console.log(a);

let s = "Hello how are you Contestant";
let c = s.split(" ");
let res = [];
for (let i = 0; i <= 4 - 1; i++) {
  res += c[i] + " ";
}
console.log(res.trim());

let words = ["notapalindrome", "racecar"];
words;
let w = "word";
let f = w.split("").reverse().join("");
console.log(f);
