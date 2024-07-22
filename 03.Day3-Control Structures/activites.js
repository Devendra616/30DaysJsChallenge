//! Activity 1:If-Else Statements
//Task 1:Write a program to check if a number is  positive ,negative or zero and log the result to the console.
function checkNumber(number) {
  if (number < 0) {
    return "Negative";
  } else if (number > 0) {
    return "Positive";
  } else if (number === 0) {
    return "Zero";
  } else {
    return "Not a valid Number";
  }
}
console.group("Task 1");
console.log(checkNumber("a"));
console.log(checkNumber(-1));
console.log(checkNumber(0));
console.log(checkNumber(1));
console.groupEnd();

//Task 2:Write a program to check if aperson is eligible to vote (age>=18) and log the result to the console
function isAdult(age) {
  return age >= 18;
}
let age = 14;
console.log(`Is Age ${age} yrs eligible for voting? = ${isAdult(age)}`);

//!Activity 2: Nested if-else statements
//Task 3: Write a program to find the largest of three numbers using nested if-else statements
function largestNumber(num1, num2, num3) {
  let largest;
  if (num1 >= num2) {
    if (num1 >= num3) {
      largest = num1;
    } else {
      largest = num3;
    }
  } else if (num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
  return largest;
}
console.group("Task 3");
console.log(largestNumber(10, 20, 30));
console.log(largestNumber(12, 6, 3));
console.log(largestNumber(12, 26, 3));
console.groupEnd();

//!Activity 3: Switch Case

//Task 4:Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function dayOfWeek(day) {
  switch (day) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid Day";
  }
}
console.group("Task 4");
console.log(dayOfWeek(1));
console.log(dayOfWeek(4));
console.groupEnd();

//Task 5:Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console
function grade(score) {
  switch (true) {
    case score >= 80:
      return "A";
    case score >= 60:
      return "B";
    case score >= 30:
      return "C";
    case score < 30:
      return "D";
    default:
      return "Invalid Score";
  }
}
console.group("Task 5");
console.log(`Grade for score ${90} is ${grade(90)}`);
console.log(`Grade for score ${45} is ${grade(45)}`);
console.log(`Grade for score ${20} is ${grade(20)}`);
console.groupEnd();

//!Activity 4: Conditional (Ternary) Operator

//Task 6:Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
function isEvenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.group("Task 6");
console.log(`Number ${2} is ${isEvenOdd(2)}`);
console.log(`Number ${3} is ${isEvenOdd(3)}`);
console.groupEnd();

//Activity 5:Combining Conditions

//Task 7:Write a program to check if a year is a leap year using multiple conditions (divisible by 4,but not 100 unless also divisible by 400) and log the result to the console
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.group("Task 7");
console.log(`Is ${2024} a leap year? = ${isLeapYear(2024)}`);
console.log(`Is ${1996} a leap year? = ${isLeapYear(1996)}`);
console.log(`Is ${2100} a leap year? = ${isLeapYear(2100)}`);
console.log(`Is ${1900} a leap year? = ${isLeapYear(1900)}`);
console.groupEnd();
