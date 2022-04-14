function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();

function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);

(() => {
  y = 10;
  let x = y;
})();

console.log(typeof x);
console.log(typeof y);
v = 10;
let g = v;
console.log(typeof g);

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

//pet.bark(); //type error

//An imported module is read-only: you cannot modify the imported module. Only the module that exports them can change its value.
// counter.js
let counter = 10;
export default counter;
// index.js
import myCounter from "counter";

myCounter += 1;

console.log(myCounter);
