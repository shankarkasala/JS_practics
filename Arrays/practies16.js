const person = { name: "Lydia Hallie" };

Object.seal(person);
person.name = "shankar";

console.log(person);

const person1 = {
  name: "Lydia Hallie",
  address: {
    street: "100 Main St",
  },
};

Object.freeze(person1);
person1.name = "shankar";
person1.address.street = "s.k.d nagar";
console.log(person1);

const add = (x) => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
myFunc(4, 9);

const person2 = {
  name: "Lydia Hallie",
  hobbies: ["coding"],
};

function addHobby(hobby, hobbies = person2.hobbies) {
  hobbies.push(hobby);
  return hobbies;
}

addHobby("running", []);
addHobby("dancing");
addHobby("baking", person2.hobbies);

console.log(person2.hobbies);

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

const person3 = {
  name: "Lydia Hallie",
  age: 21,
};

//let res=[...person3] // ["Lydia Hallie", 21]
