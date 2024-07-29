// !Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
factorial = (n) => {
  if (n <= 1) return n;
  return factorial(n - 1) * n;
};
console.log(`Factorial of 5 is ${factorial(5)}`);
console.log(`Factorial of 8 is ${factorial(8)}`);
console.log(`Factorial of 1 is ${factorial(1)}`);

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibanocci(n, cache = {}) {
  if (n in cache) return cache[n];

  if (n <= 4) return n - 1;
  const result = fibanocci(n - 2) + fibanocci(n - 1);
  cache[n] = result;
  return result;
}
console.log(`3rd Fibonacci: ${fibanocci(3)}`);
console.log(`5th Fibonacci: ${fibanocci(5)}`);
console.log(`9th Fibonacci: ${fibanocci(9)}`);

// !Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in array. Log the result for few of test cases.
function sum(arr, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  return arr[index] + sum(arr, index + 1);
}

console.log(`Sum of arr is: ${sum([2, 4, 6])}`);
console.log(`Sum of arr is: ${sum([7, 8, 9, 4, 2])}`);

// Task 4: write a recursive function to find the maximum element in an array. Log the result for few test cases.
function max(arr, index = 0, currentMax = -Infinity) {
  if (index >= arr.length) {
    return currentMax;
  }
  if (arr[index] > currentMax) {
    currentMax = arr[index];
  }
  return max(arr, index + 1, currentMax);
}
console.log("Max of arr is ", max([8, 6, 7, 12, 5]));
console.log("Max of arr is ", max([8, 16, 7, 12, 5]));
console.log("Max of arr is ", max([-5, -6, -8, -14, -787]));

// !Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for few test cases
console.group("Activity 3: String Manipulation with Recursion");
function strReverse(str) {
  if (str.length === 0) {
    return str;
  }

  return str[str.length - 1] + strReverse(str.slice(0, str.length - 1));
}

console.log("Reverse of Anuradha is ", strReverse("Anuradha"));
console.log("Reverse of vipreet is ", strReverse("vipreet"));

// Task 6: Write a recursive function to check if a string is pallindrome. Log the result.
function checkPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0].toLowerCase() !== str[str.length - 1].toLowerCase()) {
    return false;
  }
  return checkPalindrome(str.slice(1, str.length - 1));
}
// console.log(`Palindrome check ${checkPalindrome("rajesh")}`);
console.log(`Palindrome check ${checkPalindrome("racecar")}`);
console.log(`Palindrome check ${checkPalindrome("Able was I ere I saw Elba")}`);

// !Activity 4: Recursive search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element.
console.group("Activity 4: Recursive search");

function binarySearch(arr, item, left = 0, right = arr.length - 1) {
  const mid = Math.floor((left + right) / 2);

  if (left === right || left > right) {
    return "Not Found";
  }

  if (item === arr[mid]) return mid;

  if (item < arr[mid]) {
    return binarySearch(arr, item, left, mid);
  } else {
    return binarySearch(arr, item, mid + 1, right);
  }
}
console.log("Binary Search found item ", binarySearch([2, 4, 5, 8, 9], 8));
console.log("Binary Search found item ", binarySearch([2, 4, 5, 8, 9, 12], 2));
console.log("Binary Search found item ", binarySearch([2, 4, 5, 8, 9, 12], 15));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for few test cases.

function noOfOccurances(arr, target, index = 0, count = 0) {
  if (index >= arr.length) return count;

  if (arr[index] === target) {
    count++;
    return noOfOccurances(arr, target, index + 1, count);
  }
  return noOfOccurances(arr, target, index + 1, count);
}
console.log(
  "Occurances of 4 in [2,3,4,2,4,7]=",
  noOfOccurances([2, 3, 4, 2, 4, 7], 4)
);

// !Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
console.group("Activity 5: Tree Traversal");
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function inOrderTraversal(root) {
  if (root === null) return;

  inOrderTraversal(root.left);
  console.log(root.data);
  inOrderTraversal(root.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
inOrderTraversal(root);

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function calTreeDepth(root, depth = 0) {
  if (root === null) return depth;

  if (root.left !== null) {
    depth++;
    return calTreeDepth(root.left, depth);
  } else if (root.right !== null) {
    depth++;
    return calTreeDepth(root.right, depth);
  } else {
    depth++;
    return depth;
  }
}

console.log(`Depth of above tree is: ${calTreeDepth(root)}`);
console.groupEnd();
