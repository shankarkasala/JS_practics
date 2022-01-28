let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

let names = studentRecords.map((name) => name.name);
console.log(names);

let marks = studentRecords
  .filter((mark) => mark.marks > 50)
  .map((name) => name.name);
console.log(marks);

let total = studentRecords
  .filter((mark) => mark.marks > 50)
  .reduce((acc, cur) => acc + cur.marks, 0);
console.log(total);

let sum = studentRecords
  .map((mark) => {
    if (mark.marks < 50) {
      mark.marks += 15;
    }
    return mark;
  })
  .filter((m) => m.marks > 50)
  .reduce((acc, cur) => acc + cur.marks, 0);
console.log(sum);
