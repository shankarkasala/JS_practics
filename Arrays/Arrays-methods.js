const fruits = ["Apple", "Banana", "grapes"];

let res1 = fruits.length;
console.log(res1);

let res2 = fruits.join(",");
console.log(res2);

let res3 = fruits.indexOf("Banana");
console.log(res3);

let res5 = fruits.filter((fruit) => fruit.indexOf("Banana") == -1);
console.log(res5);

let res4 = fruits.includes("Banana");
console.log(res4);

let res6 = fruits.push("orange");
console.log(fruits);

let res7 = fruits.pop();
console.log(fruits);

let res8 = fruits.splice(1, 1);
console.log(fruits);

let res9 = fruits.shift();
console.log(res9);

let res10 = fruits.unshift("mango");
console.log(fruits);

let res11 = Array.from(fruits);
console.log(res11);

let res12 = fruits.slice();
console.log(res12);

let res13 = JSON.parse(JSON.stringify(fruits));
console.log(res13);
