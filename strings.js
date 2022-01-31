let rings = "B0B6G0R6R0R6G9";
let res = [];
for (let i = 0; i < rings.length; i += 2) {
  res.push(rings.substring(i, i + 2));
}
console.log(res); //["B0", "B6", "G0", "R6", "R0", "R6", "G9"]
