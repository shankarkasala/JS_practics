const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

function deep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, cur) => acc.concat(Array.isArray(cur) ? deep(cur, (d = 1)) : cur),
        []
      )
    : arr.slice();
}
let res = deep(arr, Infinity);
console.log(res);
//flat single array
let flat = arr.reduce((acc, cur) => acc.concat(cur), []);
console.log(flat);

//flaten array using stack
const arr = [[0], 1, 2, [3, 4, [5, 6, [7, 8]], [11, 12]], [9, 10]];

function deep(arr) {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}
let res = deep(arr);
console.log(res);

//using foreach
const arr = [[0], 1, 2, [3, 4, [5, 6, [7, 8]], [11, 12]], [9, 10]];
function deep(arr) {
  let res = [];
  arr.forEach(function (a) {
    if (Array.isArray(a)) {
      res.push(...deep(a));
    } else {
      res.push(a);
    }
  });
  return res;
}

let res = deep(arr);
console.log(res);
