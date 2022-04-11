let greeting;
greetign = {}; // Typo!
console.log(greetign);

function bark() {
  console.log("Woof!");
}

bark.animal = "dog";

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

let number = 0;
console.log(number++);
console.log(++number);
console.log(number++);
console.log(number);
console.log(number++);

//If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!
function getPersonInfo(one, two, three, four) {
  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);
}

const person = "Lydia";
const age = 21;
const place = "piler";

getPersonInfo`${person} is ${age} years old im from ${place}`;

function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });

function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
