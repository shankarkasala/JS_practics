//reduce

let e = [29.76, 41.85, 46.5];
const a = e.reduce((x, y) => x + y);
console.log(a);

const b = e.reduce((x, y, i, arr) => {
  x = x + y;
  if (i == arr.length - 1) {
    return x / arr.length;
  } else {
    return x;
  }
}, 0);
console.log(b);

const average = e.reduce((total, amount, index, array) => {
  total += amount;
  return total / array.length;
}, 0);
console.log(average);

const c = e.reduce((x, y, i, a) => {
  return a;
}, []);
console.log(c);

let aw = [];
const d = e.reduce((x, y, i, a) => {
  aw.push(y);
  console.log("im x" + " " + x);
  console.log("im y " + y);
  console.log("im i " + i);
  console.log("im a " + a);
}, 0);
console.log(aw);

const f = e.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);
console.log(f);

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

const g = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  console.log(tally[fruit]);

  return tally;
}, {});
console.log(g);
