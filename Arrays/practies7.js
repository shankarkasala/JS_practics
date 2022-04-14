//The delete operator returns a boolean value: true on a successful deletion, else it’ll return false. However, variables declared with the var, const or let keyword cannot be deleted using the delete operator.
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);

const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

//Properties added using the defineProperty method are immutable by default. You can override this behavior using the writable, configurable and enumerable properties. This way, the defineProperty method gives you a lot more control over the properties you’re adding to an object.
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));

const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

let num = 10;
const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
