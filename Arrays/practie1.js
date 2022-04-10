function sum(arr, n) {
  let sum = 0;
  for (let num of arr) {
    if (num > n) {
      sum += num;
    }
  }
  return sum;
}
let res = sum([1, 2, 3, 4, 5, 6, 7], 2);
console.log(res);

function nth(arr, n) {
  let res = [];
  for (let i = n - 1; i < arr.length; i += n) {
    res.push(arr[i]);
  }
  return res;
}
let res2 = nth([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5);
console.log(res2);

function myFunction(a, n) {
  let rest = [...a];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (rest.length < n) break;
    result.push(rest[n - 1]);
    rest = rest.slice(n);
  }
  return result;
}
