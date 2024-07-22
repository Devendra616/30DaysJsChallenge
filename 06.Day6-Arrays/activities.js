// !Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
console.group("Array creation and access");
const num = [1, 2, 3, 4, 5];
console.log(num);
// Task 2: Access the first and last elements of the array and log them to the console.
console.log(`First element: ${num[0]}`);
console.log(`Last element: ${num[num.length - 1]}`);
console.groupEnd();

// !Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
console.group("Array methods: Basic");
num.push(6);
console.log(`Array after push: ${num}`);
// Task 4: Use the pop method to remove the last element from the array and log the updated array.
num.pop();
console.log(`Array after pop: ${num}`);
// Task 5: Use the shift method to remove the first element from the array and log the updated array.
num.shift();
console.log(`Array after shift: ${num}`);
// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
num.unshift(0);
console.log(`Array after unshift: ${num}`);
console.groupEnd();

// !Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
console.group("Array methods: Advanced");
console.log(`Array before map: ${num}`);
const num2 = num.map((n) => n * 2);
console.log(`Array after map: ${num2}`);
// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const num3 = num.filter((n) => n % 2 === 0);
console.log(`Array after filter: ${num3}`);
// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const num4 = num.reduce((acc, n) => acc + n, 0);
console.log(`Array after reduce: ${num4}`);
console.groupEnd();

// !Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.group("Array Iteration");
for (let i = 0; i < num.length; i++) {
  console.log(`Element at index ${i}: ${num[i]}`);
}
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("using forEach");
num.forEach((n, i) => console.log(`Element at index ${i}: ${n}`));
console.groupEnd();

// !Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
console.group("Multidimensional Arrays");
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(`Multidimensional array: ${arr}`);
// Task 13: Access and log a specific element from the two-dimensional array.
console.log(`First element: ${arr[0][0]}`);
console.log(`Last element: ${arr[arr.length - 1][arr.length - 1]}`);
console.log(`Second column of the third row: ${arr[2][1]}`);
console.groupEnd();
