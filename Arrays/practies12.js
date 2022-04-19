let arr = ["bee", "superhero", "ace"];
let arr1 = [];

for (let word of arr) {
  let res = word.split("").sort().join("");
  console.log(res);
  if (word == res) {
    arr1.push("no");
  } else {
    arr1.push("yes");
  }
}

console.log(arr1);

const person = {
  name: "Lydia",
  age: 21,
};

let city = person.city;
city = "Amsterdam";

console.log(person);

function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

//console.log(checkAge(21));

console.log("I want pizza"[0]);

function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);

import * as data from "./module";

console.log(data);

let newList = [1, 2, 3].push(4);

console.log(newList);

function giveLydiaPizza() {
  return "Here is pizza!";
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);
