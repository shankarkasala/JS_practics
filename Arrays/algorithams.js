// palindrom
let arr = ["ada", "car", "pop"];
function age(arr) {
  var res = [];
  for (let word of arr) {
    reverse = word.split("").reverse().join("");
    if (word == reverse) {
      res.push(reverse);
    }
  }
  return res;
}
const b = age(arr);
console.log(b);

//turnary operator
let user = 60;
let a = user >= 60 ? "seniorcitzen" : user >= 18 ? "service" : " teen";
console.log(a);

//sum od 2d array
let acc = [
  [1, 2, 3],
  [3, 2, 1],
];
let res = acc.map((a) => a.reduce((a, b) => a + b));
let sol = acc.flat().reduce((a, b) => a + b);
console.log(res);
console.log(sol);
