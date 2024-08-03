// Declaration and Initialization (Assigning)
//  - var
var variableOne = "this is variable one"; // declaring and initializing variableOne using var keyword
// console.log(variableOne);
//  - let
let variableTwo; // declaring variableTwo using the let keyword

variableTwo = 77; // initializing (assigning a value to) variableTwo
// console.log(variableTwo);

//  - const
const variableThree = true; // when using const, you have to declare and initialize the  variable in the same expression (line of code)
// console.log(variableThree);

const variableFour = false;

// Reassigning
// variable declared with the let and var keywords can be reassigned, but variable declared with the const keyword cannot
variableOne = "variableOne has been updated (reassigned)";
// console.log(variableOne);
variableTwo = "variableTwo has also been updated";
// console.log(variableTwo);

// variableThree = "something else"; // this will throw an error because you cannot reassign values to constant variables
// console.log(variableThree);
// console.log(variableTwo);

// let f = "John";
// let l = "Wick";

// console.log(f + " " + l);
// console.log(`${f} ${l}`);

let a = 2;
let c = new Number(7)
let b = "2";

console.log(a.toString() === Number(b).toString());
