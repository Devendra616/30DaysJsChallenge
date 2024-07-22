// ! Activity 1: Variable Declaration
// *Task 1: Declare a variable using var, assign it a number, log the value to the console
var num = 12;
console.log(num);

// *Task 2: Declare a variable using let, assign it a string, and log the value to the console
let name = "Devendra";
console.log(name);

// !Activity 2: Constant Declaration
// *Task  3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const isTrue = true;
console.log(isTrue);

// !Activity 3: Data Types
// *Task 4: Create variables of different data types(number, string, boolean, object, array) and log each variable's
// *type using the typeof operator
const marks = Number(100);
console.log(typeof marks);

const lastName = "Kumar";
console.log(typeof lastName);

const isError = false;
console.log(typeof isError);

const employee = {
  name: "Devendra",
  age: 25,
  isEmployee: true,
  address: {
    city: "Bangalore",
    pincode: 560001,
  },
  marks: [100, 120, 105, 90, 110],
};
console.log(typeof employee);

const rainfall = [100, 120, 105, 90, 110];
console.log(typeof rainfall);

// !Activity 4 : Reassiging variables
// *Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console

let temperature = 100;
console.log(temperature);
temperature = 92;
console.log(temperature);

// !Activity 5: Understanding const
// *Task 6: Try reassigning a variable declared wit const and observe the error
const id = 1234;
console.log(id);
// id = 2345; // TypeError: Assignment to constant variable.
// console.log(id);

//! Feature Request

/*
 * script that declares variables of different data types and logs
 * both the value and type of each variable to the console.
 */
printType();
function printType() {
  let variable = "Devendra";
  console.log(`The type of ${variable} is ${typeof variable}`);

  variable = true;
  console.log(`The type of ${variable} is ${typeof variable}`);

  variable = {
    city: "Bangalore",
    pincode: 560001,
  };
  console.log(`The type of ${JSON.stringify(variable)} is ${typeof variable}`);

  variable = [100, 120, 105, 90, 110];
  console.log(`The type of ${JSON.stringify(variable)} is ${typeof variable}`);
}

// * Reassignment Demo
let day = "Saturday";
day = "Sunday";
console.log(day);

const day2 = "Monday";
day2 = "Tuesday";
console.log(day2); // TypeError: Assignment to constant variable.
