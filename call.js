const name = {
  fName: "kasala",
  lName: "umasankar",
  fullName: function (city, state) {
    console.log(
      "my fullName is" +
        " " +
        this.fName +
        " " +
        this.lName +
        " " +
        city +
        " " +
        state
    );
  },
};
const info = function () {
  console.log("my age is " + this.age);
};
name.fullName("piler", "andhra pradesh");
const name2 = {
  fName: "sauchin",
  lName: "tendulkar",
  age: 65,
};
name.fullName.call(name2, "mumbai", "maharastra");
info.call(name2);

function Product(name, price) {
  this.names = "bread";
  this.price = 60;
  console.log(this.names);
}

var names = "apple";
function Food(names, price) {
  Product.call(names, price);
  this.category = "food";
  console.log(this.category, this.names, this.price);
}
Food();

//console.log(new Food('cheese', 5).name);
// expected output: "cheese"
