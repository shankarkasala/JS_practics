function getFruit(fruits) {
  console.log(fruits?.[1]?.[1]);
}

getFruit([["🍊", "🍌"], ["🍍"]]);
getFruit();
getFruit([["🍍"], ["🍊", "🍌"]]);

class Calc {
  constructor() {
    this.count = 0;
  }

  increase() {
    this.count++;
  }
}

const calc = new Calc();
new Calc().increase();

console.log(calc.count);

const user = {
  email: "e@mail.com",
  password: "12345",
};

const updateUser = ({ email, password }) => {
  if (email) {
    Object.assign(user, { email });
  }

  if (password) {
    user.password = password;
  }

  return user;
};

const updatedUser = updateUser({ email: "new@email.com" });

console.log(user);

class BaseClass {
  foo() {
    return 1;
  }
}

class MyClass extends BaseClass {
  bar() {
    return 2;
  }
}

const obj = new MyClass();
obj.baz = function () {
  return 3;
};
obj[Symbol.for("test")] = 4;

// Does _not_ copy any properties from `MyClass` or `BaseClass`
const clone = { ...obj };

console.log(clone); // { baz: [Function], [Symbol(test)]: 4 }
console.log(clone.constructor.name); // Object
console.log(clone instanceof MyClass); // false
