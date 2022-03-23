const arr = "hello world";
const res = arr.split(" ");
const res1 = res.map((a) => a.split("").reverse().join(""));
const a = res1.toString().replace(/,/g, " ");
console.log(a); //olleh dlrow

const b = arr.split(" ").reverse();
const c = b.map((a) => a.split("").reverse().join(""));
const d = c.toString().replace(/,/g, " ");
console.log(d); //dlrow olleh

let text = "How are you doing today?";
const myArray = text.split("o").toString().replace(/,/g, " ");
console.log(myArray); //H w are y u d ing t day?

const arr1 = ["car", "van", "bus"];
const res2 = "";
const res3 = res2.concat(arr1).replace(/,/g, " ");
console.log(res3); //car van bus

const arr4 = [];
const arr5 = arr4.concat(arr);
console.log(arr5); //["hello world"]

sentence = "thequickbrownfoxjumpsoverthelazydog";
let freq = {};
for (let letter of sentence) {
  freq[letter] += 1;
}
let count = 0;
for (let key in freq) {
  count++;
}
console.log(count);
console.log(typeof freq);

const alp = sentence.split("");
console.log(alp);
let sol1 = alp.reduce((a, b) => {
  a[b] = (a[b] || 0) + 1;

  return a;
}, {});
console.log(sol1);
let c1 = 0;
for (let key in sol1) {
  c1++;
}
console.log(c);
