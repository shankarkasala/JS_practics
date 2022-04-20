const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);
const myPromise = () => Promise.resolve("I have resolved!");
function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}

firstFunction();
secondFunction();

const set = new Set();

set.add(1);
set.add("Lydia");
set.add({ name: "Lydia" });

for (let item of set) {
  console.log(item + 2);
}

const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ["pink", "red", "blue"];

//console.log(colorConfig.colors[1]); typeerror

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
var name = "Lydia";

function getName() {
  console.log(name);
  var name = "Sarah";
}

getName();

function* generatorOne() {
  yield ["a", "b", "c"];
}

function* generatorTwo() {
  yield* ["a", "b", "c"];
}

const on = generatorOne();
const tw = generatorTwo();

console.log(on.next().value);
console.log(tw.next().value);
