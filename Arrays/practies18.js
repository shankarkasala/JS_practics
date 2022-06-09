function sum() {
  var total = 0;
  for (var i = 0, len = arguments.length; i < len; ++i) {
    total += arguments[i];
  }
  return total;
}

let res = sum(1, 2, 3); // returns 6
console.log(res);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
let res1 = capitalizeFirstLetter("shankar");
console.log(res1);

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
console.log(today);
console.log(dd, mm, yyyy);

var d1 = new Date();
var d2 = new Date(d1);
console.log(d1.getTime() === d2.getTime()); //True
console.log(d1 === d2); // False

"Good morning".startsWith("Good"); // true
"Good morning".startsWith("morning"); // false

"  Hello World   ".trim(); //Hello World

//How do you assign default values to variables
let b = 0;
let c = 2;
var a = b || c;

var str = "This is a \
very lengthy \
sentence!";

fn = function (x) {
  //Function code goes here
  console.log(x);
};

fn.name = "John";

fn.profile = function (y) {
  //Profile code goes here
};
console.log(fn.name);

function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
console.log(sum.length);

var i, j;

loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {
    if (i === j) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}
