// - Write a function that takes a name as an argument and logs the name on the console.
// 	eg `printName("John Wick");` should print "John Wick" on the console

// function printName(name) {
//   console.log(name);
// }

// const printName2 = (name) => {
//   console.log(name);
// };

// printName("John Wick");

// printName2("John Wick");

// -  Write a function that takes two numbers, adds them and returns the sum.
// 	eg `addNumbers(4, 3);` should return 7

// function addNumbers(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNumbers(3, 4));

// - Write a function that takes two numbers, multiplies them and returns the result.
// 	eg `multiplyNumbers(4, 3);` should return 12

// function multiplyNumbers(num1, num2) {
//   const result = num1 * num2;

//   return result;
// }

// console.log(multiplyNumbers(4, 3));

// - Write a function that takes a number as an argument and returns "Even" if the number is even and "Odd" if the number is odd.
// 	eg `evenOrOdd(7);` should return "Odd", `evenOrOdd(2);`should return "Even"

// function evenOrOdd(number) {
//   if (typeof number !== "number") {
//     return false;
//   }

//   if (number % 2 !== 0) {
//     return "Odd";
//   }

//   return "Even";
// }

// console.log(evenOrOdd(3));

// console.log(evenOrOdd(7));

// - Write a function that takes a number as an argument and returns true is the number is a prime number, and false otherwise.
// 	eg `isPrime(7);` should return true, `isPrime(4);` should return false

// function isPrime(num) {
//   if (num < 2 || !Number.isInteger(num)) return false;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(4));

// - Write a function that takes an array as an argument, and prints all the elements of the array individually on the console.
// 	eg `printArrayElements([0, 2, 4, 7]);` should print 0, then 2, then 4, then 7 on the console, individually

function printArrayElements(array) {}

// - Write a function that takes an array as an argument and returns how many even numbers are in the array.
// 	eg `hasEvenNumbers([0, 2, 4, 7]);` should return 2

function hasEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(hasEvenNumbers([0, 9, 4, 7]));

// - Write a function that takes an array as an argument and returns how many prime numbers are in the array.
//  eg 'hasPrimeNumbers([0, 2, 4, 7]);' should return 1
