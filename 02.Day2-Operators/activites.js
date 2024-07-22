console.group("Activity 1: Arithmetic Operators");
function sum(a, b) {
  return a + b;
}
console.log(`${2} + ${3} = ${sum(2, 3)}`);

function subtract(a, b) {
  return a - b;
}
console.log(`${5} - ${2} = ${subtract(5, 2)}`);

function multiply(a, b) {
  return a * b;
}
console.log(`${2} * ${3} = ${multiply(2, 3)}`);

function divide(a, b) {
  return a / b;
}
console.log(`${10} / ${2} = ${divide(10, 2)}`);

function remainder(a, b) {
  return a % b;
}
console.log(`${10} % ${3} = ${remainder(10, 3)}`);
console.groupEnd();

console.group("Activity 2: Assignment Operators");
let a = 10;
a += 5;
console.log(`a = ${a}`);

let b = 10;
b -= 5;
console.log(`b = ${b}`);
console.groupEnd();

console.group("Activity 3: Comparison Operators");
console.log(`${2} < ${3} = ${2 < 3}`);
console.log(`${2} > ${3} = ${2 > 3}`);

console.log(`${2} <= ${2} = ${2 <= 3}`);
console.log(`${2} >= ${3} = ${2 >= 3}`);

console.log(`${2} == ${2} = ${2 == 2}`);
console.log(`${2} === ${2} = ${2 === 2}`);
console.log(`"${"2"}" === ${2} = ${"2" === 2}`);
console.log(`"${2}" == ${2} = ${"2" == 2}`);
console.groupEnd();

console.group("Activity 4: Logical Operators");
function isPositiveEven(n) {
  return n > 0 && n % 2 === 0;
}
console.log(`isPositiveEven(2) = ${isPositiveEven(2)}`);
console.log(`isPositiveEven(5) = ${isPositiveEven(5)}`);

function isWeekEnd(day) {
  return day === "Saturday" || day === "Sunday";
}
console.group("isWeekEnd");
console.log(`isWeekEnd("Sunday") = ${isWeekEnd("Sunday")}`);
console.log(`isWeekEnd("Wednesday") = ${isWeekEnd("Wednesday")}`);
console.groupEnd();

function isInactive(user) {
  return !user.active;
}
const user1 = { name: "John", active: true };
const user2 = { name: "Jane", active: false };
console.group("isInactive");
console.log(`user1 is inactive: ${isInactive(user1)}`);
console.log(`user2 is inactive: ${isInactive(user2)}`);
console.groupEnd();
console.groupEnd();

console.group("Activity 5: Ternary Operator");
let num = 10;
const result = num > 0 ? "positive" : "negative";
console.log(`num = ${num}, result = ${result}`);

let num2 = -5;
const result2 = num2 > 0 ? "positive" : "negative";
console.log(`num2 = ${num2}, result2 = ${result2}`);
console.groupEnd();
