// !Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
console.group("Activity 1");
const age = 36;
const name = "Devendra";
console.log(`I am ${name}, age ${age}`);

// Task 2: Create a multi-line string using template literals and log it to the console.
const aboutMe = `I am working in NMDC Ltd.
It is a PSU(under govt.). I like coding
and I am tech enthusiast.
`;
console.log(aboutMe);
console.groupEnd();

// !Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.group("Activity 2");
const arr = [1, 2, 3, 4, 5, 6];
const [a, b] = arr;
console.log(`First : ${a}, Second: ${b}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "The Power of Now",
  author: "Eckhart Tolle",
  year: 1997,
};
const { title, author } = book;
console.log(`Title-${title}, Author-${author}`);
console.groupEnd();

// !Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
console.group("Activity 3");
const arr2 = [...arr, 10, 20, 30];
console.log(`Array 2 : ${arr2}`);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const sum = (...num) => {
  let result = 0;
  for (no of num) {
    result += no;
  }
  return result;
};
console.log(`sum is: ${sum(3, 5, 8)}`);
console.log(`sum is: ${sum(3, 5, 8, 10)}`);
console.groupEnd();

// !Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
console.group("Activity 4");
function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log(`Product is: ${product(5, 2)}`);
console.log(`Product is: ${product(5)}`);
console.groupEnd();

// !Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.group("Activity 5");
const month = "Jan";
const days = 31;
const Jan = {
  month,
  days,
  display() {
    console.log(`${this.month} has ${this.days} days`);
  },
};
console.log(Jan);

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const nameprop = "name";
const employee = {
  empid: 1001,
  [nameprop]: "Devendra",
};
console.log(employee);
console.groupEnd();
