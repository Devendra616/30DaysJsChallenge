// ! Activity 1 : For loop
// Task 1 : Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2 : Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(`${i} * ${5} = ${i * 5}`);
}

// ! Activity 2 : While loop
// Task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
console.group("Activity 2");
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`Sum of numbers from 1 to 10 = ${sum}`);

// Task 4 : Write a program to print numbers from 10 to 1 using a while loop.

{
  let num = 10;
  while (num >= 1) {
    console.log(num);
    num--;
  }
}
console.groupEnd();
// !Activity 3 : Do While loop
// Task 5 : Write a program to print numbers from 1 to 5 using a do while loop.
console.group("Activity 3");
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// Task 6 : Write a program to calculate the factorial of a number using a do while loop.
function factorial(num) {
  let j = 1;
  let fact = 1;
  do {
    fact *= j;
    j++;
  } while (j <= num);
  return fact;
}
console.log(`Factorial of ${5} is ${factorial(5)}`);
console.groupEnd();

// !Activity 4 : Nested loop
// Task 7 : Write a program to print a pattern using nested for loops. Like this :
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += " * ";
  }
  console.log(str);
}
// !Activity 5 : Loop Control statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.group("Activity 5");
{
  // skip 5
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}
// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
{
  // stop at 7
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      break;
    }
    console.log(i);
  }
}
console.groupEnd();
