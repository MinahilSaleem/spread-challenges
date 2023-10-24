"Use Strict"
// Task 1
console.log("Destructuring: ");
console.log("Task 1");


/* Write a program that defines an object with properties name, age, and
email. Use destructuring to assign each property to a variable with a
different name. Then, output the variables to the console. */

let student = {name: "minahil", age: 21, email: "minahil@gmail.com" }

const {name:studentName, age: studentAge, email: studentEmail}= student;

console.log("Destructured variables are:");
console.log("Name: " + studentName);
console.log("Age: " + studentAge);
console.log("Email: "+ studentEmail);

// Task 2
console.log("Task 2");

/* Write a function that takes an object with 
properties firstName and
lastName as an argument and returns the full name by using
destructuring. */

let obj = {firstName : "Minahil" , secondName: "Saleem"};
console.log(obj);
function Name(obj) {
    const { firstName, secondName } = obj;
    const fullName = `${firstName} ${secondName}`;
    return fullName;
}
const fullName = Name(obj);
console.log(`Full name is: ${fullName}`);

console.log("Spread operator: ");
// Task 1
console.log("Task 1");

/*
Write a program that defines two arrays arr1 and arr2,
each with three
numbers. Use the spread operator to create a new array arr3 that
contains all the numbers from both arrays. 
Then, output arr3 to the console. */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];
console.log(`First Array = ${array1}, Second Array = ${array2}`);
console.log(`Combined array: ${combined}`);

// Task 2
console.log("Task 2");

/*Write a function called getLargest that takes an array
 of numbers as an
argument and returns the largest number in the array.
 Use the spread
operator to pass the array to the Math.max() function. */

let array = [2, 4, 6, 10];
console.log(`The numbers in the array are: ${array}`);
function getLargest(arr) {
    const largest = Math.max(...arr);
    return largest;
}

const largestNumber = getLargest(array);
console.log(`The largest number in array is : ${largestNumber}`);

console.log("Rest operator: ");
// Task 1
console.log("Task 1");

/*
Write a function called sum that
 takes any number of arguments and
returns their sum. Use the rest operator to
 allow the function to take
any number of arguments.
 */

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // 15
  
  // Task 2
console.log("Task 2");
/*
Write a program that prompts the user to enter 
an array of numbers and
then passes the array to a function called calculateAverage.
 The function
should calculate the average of the numbers using 
the rest operator and
return the result. Then, output the result to the console.
 */

function calculateAverage(...numbers) {
   if (numbers.length === 0) {
     return 0;
   }
  
   const sum = numbers.reduce((total, num) => total + num, 0);
   return sum / numbers.length;
}
  
function main() {
    const input = prompt("Enter a list of numbers separated by spaces: ");
    const numberArray = input.split(" ").map(Number);
    console.log(`The numbers enter were : ${numberArray}`);
    const average = calculateAverage(...numberArray);
    console.log(`The Average of numbers : ${average}`);
}
  
  main();
  