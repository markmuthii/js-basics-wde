// there are two ways that you can create an array:
//  - using the square brackets
let arr1 = [23, "hello", true, "hey", 77, "hey", 23, false, "hey"];
//  - using the Array class/constructor (OOP)
// let arr2 = new Array(2);
// console.log(arr1[3]);

// When acccessing the elements in an array, you start counting from 0, which means that in order to access the second element in the array, you will use the position 1 and not 2:
// console.log(arr1.length);
// console.log(arr1[arr1.length - 1]); // 77

// console.log(arr1.indexOf("hey"));

let indexes = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] == "hey") {
    indexes.push(i);
  }
}

console.log(indexes);

// const students = [];
// console.log(students);

// students.push("Susan");
// students.push("Stanley");
// students.push("James");
// students.push("Huda");
// students.push({
//   firstName: "John",
//   lastName: "Wick",
// });

// console.log(students);
