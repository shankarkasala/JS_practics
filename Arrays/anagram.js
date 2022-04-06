const strings = ["b", "g", "a", "c", "e", "d"];
const res = strings.sort();
const defaultSort = Array.from(strings).sort();
const simpleSort = Array.from(strings).sort((a, b) => a - b);

console.log(defaultSort);
console.log(simpleSort);
console.log(res);
function anagaram(s1, s2) {
  let t1 = s1.split("").sort().join("");
  let t2 = s2.split("").sort().join("");

  if (t1 === t2) {
    return "anagaram";
  } else {
    return "not anagaram";
  }
}
let res1 = anagaram("army", "mray");
console.log(res1);
