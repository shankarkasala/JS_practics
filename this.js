//this in method of objects are refernce to current object
const video = {
  title: "a",
  play() {
    console.log(this); //{title: "a", play: ƒ}
  },
};
video.play();

video.stop = function () {
  console.log(this); //title: "a", play: ƒ, stop: ƒ}
};

video.stop();

//in construtor function this will refernce to empty object (BCZ of new operator)
function fn1(title) {
  this.title = title;
  console.log(this);
}
const x = new fn1("b"); //fn1 {title: "b"
console.log(x.title);

// this in the regular function are global object
function fn() {
  console.log(this); //Window {document: {…}, name: "previewFrame", location: {…}, customElements: {…}…}
}
fn();

//regular functions inside object are refernce to Windowobject
const sample = {
  name: "shankar",
  hello: function () {
    console.log(this); //{name: "shankar", hello: ƒ}
    function fn() {
      console.log(this); //Window {document: {…}, name: "previewFrame", location: {…}, customElements: {…}…}
    }
    fn();
  },
};
sample.hello();

//this in arrow functions are unbound so it reference to current object
const pen = {
  color: "black",
  write() {
    setTimeout(() => {
      console.log(this); //{color: "black", write: ƒ}
    }, 1000);
  },
};
pen.write();
