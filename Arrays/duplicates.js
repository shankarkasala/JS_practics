const arr = ["I", "need", "candy"];
const res = [];
for (let word of arr) {
  let l = word.length;
  res.push(l);
}
let word = arr[res.indexOf(Math.max(...res))];
console.log(word);

function myFunction(arr) {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}

const arr1 = [true, true, true, true];
const res1 = arr1.reduce((a, b) => (a === b ? true : false));
console.log(res1);

//remove duplicates
function merg(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  console.log(arr3);
  let srt = arr3.sort((a, b) => a - b);
  console.log(srt);
  let filt = srt.filter((a, i) => srt.indexOf(a) === i);
  console.log(filt);
}
merg([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);

function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}
