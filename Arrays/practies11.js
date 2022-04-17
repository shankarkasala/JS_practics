let ar3 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
let ar1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5];

function sockMerchant(n, ar) {
  // Write your code here
  var res = [];
  var num = [];
  for (let i = 0; i < ar.length; i++) {
    if (ar.indexOf(ar[i]) !== i) {
      res.push(ar[i]);
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (res.indexOf(res[i]) == i) {
      num.push(res[i]);
    }
  }
  let out = res.concat(num);
  console.log(out);
  let l1 = out.length / 2;
  console.log(l1);
  let sum;
  if (l1 % 2 !== 0) {
    sum = l1 - 1;
  } else {
    sum = l1;
  }

  let output = sum.toFixed();
  return output;
}
let output = sockMerchant(ar.length, ar);
console.log(output);

const g = ar3.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});
console.log(g);
let ans = [];
for (let num in g) {
  if (g[num] % 2 !== 0) {
    ans.push(g[num] - 1);
  } else {
    ans.push(g[num]);
  }
}
let values = Object.values(g);
let keys = Object.keys(g);
let enteies = Object.entries(g);
console.log(keys);
console.log(ans);
let res1 = ans.filter((a) => a !== 0);
console.log(res1);
let final = res1.reduce((a, c) => a + c);
console.log(final);
