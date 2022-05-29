function modified(arr, callback) {
  callback();
  arr.push(100);
  callback();
}
let arr = [1, 2, 3, 4];
modified(arr, () => {
  console.log(arr);
});

var string = "Welcome to this Javascript Guide!";
function rev(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}
let res = rev(string);
console.log(res);

let res1 = string.split("").reverse().join("");
let res2 = res1.split(" ").reverse().join(" ");
console.log(res2);

function counter() {
  let _count = 0;
  return {
    add: function (increment) {
      _count += increment;
    },
    retrive: function () {
      return "The counter is currently at: " + _count;
    },
  };
}
let res3 = counter();
res3.add(10);
res3.add(20);
console.log(res3.retrive());
