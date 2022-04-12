const person = {
  name: "Lydia",
  age: 21,
};

for (const item in person) {
  console.log(item);
}

const num = parseInt("76*1");
console.log(num);

let res = [1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
console.log(res);

//Arguments are passed by value, unless their value is an object, then they’re passed by reference. birthYear is passed by value, since it’s a string, not an object. When we pass arguments by value, a copy of that value is created
function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const p1 = { name: "Sarah" };
const birthYear = "1997";

getInfo(p1, birthYear);

console.log(p1, birthYear);
