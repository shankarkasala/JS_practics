//With the import keyword, all imported modules are pre-parsed. This means that the imported modules get run first, the code in the file which imports the module gets executed after.

// // index.js
// console.log('running index.js');
// import { sum } from 'sum';
// console.log(sum(1, 2));

// // sum.js
// console.log('running sum.js');
// export const sum = (a, b) => a + b;

console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol("foo") === Symbol("foo"));

const name = "Lydia Hallie";
console.log(name.padStart(13));
console.log(name.padStart(2));

function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(game.next().value); // Do you love JavaScript?
console.log(game.next("Yes").value); // JavaScript loves you back ❤️

console.log(String.raw`Hello\nworld`);

async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);

function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);

//Object.freeze makes it impossible to add, remove, or modify properties of an object (unless the property’s value is another object).
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);

const { n: myName } = { n: "Lydia" };

console.log(myName);
