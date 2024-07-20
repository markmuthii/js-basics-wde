class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  goToClass = function (time) {
    return `${this.firstName} must go to class at ${time}`;
  };
}

let student1 = new Student("Huda", "Ismael", 20);
// console.log(student1.firstName);
let student2 = new Student("James", "Wagacha", 24);
// console.log(student2.firstName);
let student3 = new Student("Susan", "Achieng", 22);
let student4 = new Student("Stanley", "Mwai", 23);

let allStudents = [student1, student2, student3, student4];

console.log(allStudents[4]);

for (let i = 0; i <= allStudents.length - 1; i++) {
  console.log(allStudents[i].firstName);
}
