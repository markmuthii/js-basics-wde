let student1 = {
  firstName: "Stanley",
  lastName: "Mwai",
  age: 23,
  getFullName: function () {
    return student1.firstName + " " + student1.lastName;
  },
};

console.log(student1.getFullName());

let student2 = {
  firstName: "Susan",
  lastName: "Achieng",
  age: 21,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(student2.getFullName());
