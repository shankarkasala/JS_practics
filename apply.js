const numbers = [5, 6, 2, 3, 7];
let max = Math.max.apply(null, numbers);
let min = Math.min.apply(null, numbers);
console.log(max, min);

let big = -Infinity,
  small = +Infinity;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > big) {
    big = numbers[i];
  }
  if (numbers[i] < small) {
    small = numbers[i];
  }
}
console.log(big, small);
