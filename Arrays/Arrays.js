const array1 = [5, 12, 8, 130, 44];
//const a= array1.at(-1)
const a = array1[array1.length - 1];
console.log(a);

const array2 = ["a", "b", "c"];
const array3 = ["d", "e", "f"];
const b = array2.concat(array3);
console.log(b);

//every
const array4 = [1, 30, 39, 29, 10, 13];
const array5 = [30, 10, 13];
const find = (ele) => ele < 40;
const c = array4.every(find);
console.log(c);
// const isSubset = (array1, array2) => array2.every(element => array1.includes(element));
// const d=isSubset()
// console.log(d)

//fill
const d = array1.fill(1, 2, 4);
console.log(d);

//filter
const str = ["small", "call", "tall", "hello", "mall", "ant"];
const res = [];
for (let word of str) {
  if (word.toLowerCase().indexOf("all".toLowerCase()) !== -1) {
    res.push(word);
  }
}
console.log(res);

//indexOf

const indices = [];
const array = ["b", "a", "c", "a", "d", "a"];
const element = "a";
let idx = array.indexOf(element);
console.log(typeof idx);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
  console.log(idx);
}
console.log(indices);

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

const update = (veggies, veggie) => {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(veggies);
  } else {
    console.log("already exists");
  }
};
update(veggies, "potato");

//case checking
function checkCase(ch) {
  if (!isNaN(ch * 1)) {
    return "ch is numeric";
  } else {
    if (ch == ch.toUpperCase()) {
      return "upper case";
    }
    if (ch == ch.toLowerCase()) {
      return "lower case";
    }
  }
}
console.log(checkCase("a"));
console.log(checkCase("A"));
console.log(checkCase("1"));

//remove item
const items = ["a", "b", "c", "d", "e", "f"];
const i = 2;
const filteredItems = items
  .slice(0, i)
  .concat(items.slice(i + 1, items.length));
console.log(filteredItems);
const f = items.slice(0, i).concat(items.slice(i + 1));
console.log(f);

const items1 = ["a", "b", "c", "d", "e", "f"];
const r = "c";
const re = [];
items1.filter((item) => item !== r);
console.log(re);
const remove = ["c", "d"];
const j = items1.filter((item) => !remove.includes(item));
