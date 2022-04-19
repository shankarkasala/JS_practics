const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}

//...args is a rest parameter. The rest parameter’s value is an array containing all remaining arguments, and can only be the last parameter!
function getItems(fruitList, favoriteFruit, ...args) {
  // return [...fruitList, ...args, favoriteFruit];
  return [...fruitList, ...args, favoriteFruit];
}

let res = getItems(['banana', 'apple'], 'pear', 'orange');
console.log(res);

function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return;
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));

class Person {
  constructor() {
    this.name = 'Lydia';
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = 'Sarah';
  }
};

const member = new Person();
console.log(member.name);

const info = {
  [Symbol('a')]: 'b',
};

console.log(info);
console.log(Object.getOwnPropertySymbols(info));

const getList = ([x, ...y]) => [x, y];
const getUser = (user) => ({ name1: user.name, age1: user.age });

const list = [1, 2, 3, 4];
const user = { name1: 'Lydia', age1: 21 };

console.log(getList(list));
console.log(getUser(user));

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;
console.log(output);
