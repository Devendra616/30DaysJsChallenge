//!Activity 1: Function Declaration
// task 1: Write a function to check if a number is even or odd and log the result to the console.

console.group("Activity 1: Function Declaration");
function evenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(`Number ${3} is ${evenOdd(3)}`);
console.log(`Number ${46} is ${evenOdd(46)}`);

// task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
  return num * num;
}
console.log(`Square of ${3} is ${square(3)}`);
console.log(`Square of ${5} is ${square(5)}`);
console.groupEnd();

//!Activity 2: Function Expression
// task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
console.group("Activity 2: Function Expression");
const max = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};
console.log(`Max of ${3} and ${5} is ${max(3, 5)}`);
console.log(`Max of ${46} and ${3} is ${max(46, 3)}`);

// task 4: Write a function expression to find to concatenate two strings and return the result.
const concat = function (str1, str2) {
  return str1 + str2;
};
console.log(`Concat of "Hello" and "World" is ${concat("Hello", "World")}`);
console.groupEnd();

//!Activity 3: Arrow Functions
// task 5: Write an arrow function to calculate the sum of two numbers and return the result.
console.group("Activity 3: Arrow Functions");
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(`Sum of ${3} and ${5} is ${add(3, 5)}`);
console.log(`Sum of ${46} and ${3} is ${add(46, 3)}`);

// task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const isContains = (str, char) => {
  return str.includes(char);
};
console.log(`Is "Hello" contains "l"? ${isContains("Hello", "l")}`);
console.log(`Is "Hello" contains "j"? ${isContains("Hello", "j")}`);
console.groupEnd();

//!Activity 4: Function Parameters and Default Values
// task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
console.group("Activity 4: Function Parameters and Default Values");
function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log(`Product of ${3} and ${5} is ${product(3, 5)}`);
console.log(`Product of ${8}  is ${product(8)}`);

// task 8: Write a function that takes a person's name and age and returns their product. Provide a default value for the age.

const greet = (name, age = 21) => {
  return `Hello ${name}, you are ${age} years old`;
};
console.log(greet("Rohan"));
console.log(greet("Shobhit", 25));
console.groupEnd();

//!Activity 5: Higher-Order Functions
// task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

console.group("Activity 6: Higher Order Functions");
function repeat(func, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += func();
  }
  return result;
}
const Hello = function () {
  return "Hello";
};
console.log(repeat(Hello, 3));

// task 10: Write a higher-order function that takes two functions and value, applies the first function to the value, and then applies the second function to the result.
function hof(fun1, fun2, num) {
  return fun2(fun1(num));
}
const add1 = function (num) {
  return num + 1;
};
const mul2 = function (num) {
  return num * 2;
};
console.log(hof(add1, mul2, 3));
console.groupEnd();

sayHello1(); // Hello1!
sayHello2(); // ReferenceError:Cannot access 'sayHello2' before initialization
sayHello3(); //ReferenceError: Cannot access 'sayHello3' before initialization

// function declaration
function sayHello1() {
  console.log("Hello1!");
}

// anonymous function expression
const sayHello2 = function () {
  console.log("Hello2!");
};

// arrow function expression
const sayHello3 = () => {
  console.log("Hello3!");
};
