function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());

//typeof 1 returns "number". typeof "number" returns "string"
console.log(typeof typeof 1);

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

(() => {
  let x, y, z;
  try {
    throw new Error();
  } catch ({ x, y }) {
    (x = 1), (y = 2), (z = 3);
    console.log(x);
    console.log(y);
  }
  console.log(x);
  console.log(y);
  console.log(z);
})();

let res = [
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
console.log(res);

console.log([..."Lydia"]);

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
