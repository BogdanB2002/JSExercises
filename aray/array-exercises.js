// exercises

var a = [1, 2, 5, 8, 6, 9, 3];
const odd = [];

a.forEach((number) => {
  if (number % 2 === 1) {
    odd.push(number);
  }
});
console.log(odd);

// ex2

const b = [1, 5, 8, 7, 2];
b.forEach((num, index) => {
  b[index] = num + 1;
});
console.log(b);

//  ex 3

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const lastItem = words[words.length - 1];
console.log(lastItem);

// ex4

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = array.filter(n => n%2) ;
console.log(oddNumbers);

// ex 5

var exerciseB = [2, 3, 4, 5, 7];

const belowTreshold = (currentValue) => currentValue > 5;
const array3 = [1, 2, 3, 4, 5, 7];
console.log(array3.every(belowTreshold));

// ex 6

const belowTreshold2 = (currentValue) => currentValue < 20;
const array4 = [10, 20, 30, 40, 50];
console.log(array4.some(belowTreshold2));

// ex 7

const students = [
  {
    name: "Bogdan",
    class: 1,
    grade: 8,
  },
  {
    name: "Bmaria",
    class: 3,
    grade: 7,
  },
  {
    name: "ionut",
    class: 4,
    grade: 4,
  },
  {
    name: "alex",
    class: 5,
    grade: 5,
  },
  {
    name: "dorin",
    class: 6,
    grade: 6,
  },
];

const reformedStudents = students.map(function (students) {
  return { ...students, grade: students.grade + 2 };
});

let  biggerStudents = students.filter(person => person.grade > 6);
console.log(biggerStudents);

// students.filter((student) => {
//   if (student.grade > 7) {
//     biggerStudents.map(student.name);
//   }
// });

