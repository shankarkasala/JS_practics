console.log(x); //undefined
var x = 10;

fn();
function fn() {
  console.log("hello"); //hello
}

//console.log(y)//Error: Cannot access 'y' before initialization
let y = 20;

//console.log(z)//Error: Cannot access 'y' before initialization
const z = 10;

//fn1()
var fn1 = function () {
  console.log("hi"); //Error: fn1 is not a function
};

//**Note - Variable initializations are not hoisted, only variable declarations are hoisted:
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

var a = 2;
var b = "5";
c = a + b;
console.log(typeof c);

var a = "5";
var b = 2;
c = a - b;
console.log(typeof c); //3 -number

x = 2;
y = "hello";
z = undefined;
x || y;
2;
x || x;
2;
x || z;
2;
x && y;
("hello");
x && x;
2;
x && z;
undefined;
