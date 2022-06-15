// Print only those numbers which have atleast 1 digit 0 in them.

// Example: 301,2401, etc

// function printNum() {
//   let res = [];
//   for (var i = 0; i < 200; i++) {
//     res.push(i);
//   }
//   // console.log(res);
//   let sol = res.filter(a=>);
//   console.log(sol);
// }
// printNum();
function print(start, end) {
  if (end - start === 0) {
    return [start];
  }
  let arr = print(start, end - 1);
  arr.push(end);
  return arr;
}
let res = print(1, 100);
console.log(res);

// function fibbinoche(num){
// if(num<2){
//   return num
// }
// return fibbinoche(num-1)+fibbinoche(num-2)
// }
// let res2=fibbinoche(100)
function fib(n) {
  let start = [0, 1];
  if (n < 2) {
    return start;
  }
  for (let i = 2; i < n; i++) {
    start[i] = start[i - 1] + start[i - 2];
  }
  return start;
}
console.log(fib(8));

function prime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(prime(7));

function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
}
console.log(factorial(15));

let arr = [1, 4, 45, 6, 10, 8];
let len = arr.length;
let sum = 22;
function triplet(arr, len, sum) {
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (arr[i] + arr[j] + arr[k] == sum) {
          console.log(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
  return false;
}
triplet(arr, len, sum);

let arr1 = [1, 1, 2, 3, 2];
let sol1 = arr1.filter((a, i) => arr1.indexOf(a) == i);
console.log(sol1);
