//A pure function is a function that always returns the same result, if the same arguments are passed.
function sum(a, b) {
  return a + b;
}

//The add function is a memoized function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a cache object that stores the previously returned values.
const add = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));

//With a for-in loop, we can iterate over enumerable properties. In an array, the enumerable properties are the “keys” of array elements, which are actually their indexes. You could see an array as:
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}

const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
