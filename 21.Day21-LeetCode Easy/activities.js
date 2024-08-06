// !Activity 1: Two Sum
/* Task 1: Solve the "Two Sum" problem on LeetCode.
Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
Log the indices for a few test cases */
console.group("Activity 1: Two Sum");
function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    } else {
      map.set(arr[i], i);
    }
  }
  return [];
}
const arr = [3, 6, 7, 2, 0, 9, 4, 1];
console.log(twoSum(arr, 9));
console.log(twoSum(arr, 11));
console.log(twoSum(arr, 20));
console.groupEnd();

// !Activity 2: Reverse Integer
/* Task 2: Solve the "Reverse Integer" problem on LeetCode.
Write a function that takes an integer and returns it with its digits reversed.
Handle edge cases like negative numbers and numbers ending in zero.
Log the reversed integers for a few test cases. */

console.group("Activity 2: Reverse Integer");
function reverseInteger(integer) {
  let str = "" + integer;
  let sign;
  if (str[0] === "-" || str[0] === "+") {
    sign = str[0];
    str = str.slice(1);
  }

  str = parseInt(str.split("").reverse().join(""));
  return sign ? sign + str : str;
}

console.log(`Reverse of 123= ${reverseInteger(123)}`);
console.log(`Reverse of -1234= ${reverseInteger(-1234)}`);
console.log(`Reverse of -12340= ${reverseInteger(-12340)}`);
console.groupEnd();

// !Activity 3: Palindrome Number
/* 
Task 3: Solve the "Palindrome Number" problem on LeetCode.
Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
Log the result for a few test cases, including edge cases like negative numbers.
*/
console.group("Activity 3: Palindrome Number");
function isPalindromeNumber(number) {
  if (number < 0) return false;
  let reverse = 0;
  let temp = number;
  while (temp > 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return number === reverse;
}
console.log(`check palindrome 1232=> ${isPalindromeNumber(1232)}`);
console.log(`check palindrome 2222=> ${isPalindromeNumber(2222)}`);
console.log(`check palindrome 12521=> ${isPalindromeNumber(12521)}`);
console.log(`check palindrome -12521=> ${isPalindromeNumber(-12521)}`);
console.groupEnd();

// !Activity 4: Merge Two Sorted Lists
/* Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
Create a few test cases with linked lists and log the merged list. */

console.group("Activity 4: Merge Two Sorted Lists");
class ListNode {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
function mergeLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let mergedList = new ListNode();
  let current = mergedList;

  while (list1 !== null && list2 !== null) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  while (list1 !== null) {
    current.next = list1;
    list1 = list1.next;
    current = current.next;
  }
  while (list2 !== null) {
    current.next = list2;
    list2 = list2.next;
    current = current.next;
  }

  return mergedList.next;
}

function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Test cases
let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);
let mergedList = mergeLists(l1, l2);
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

l1 = createLinkedList([1, 3, 5]);
l2 = createLinkedList([2, 4, 6]);
mergedList = mergeLists(l1, l2);
printLinkedList(mergedList); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.groupEnd();

// !Activity 5: Valid Parentheses
/* 
Task 5: Solve the "Valid Parentheses" problem on LeetCode.
Write a function that takes a string containing just the characters '(',')', '{', '}', '[' and ']', and determines if the input string is valid.
A string is valid if open brackets are closed in the correct order.
Log the result for a few test cases.
*/
console.group("Activity 5: Valid Parentheses");
function validParenthesis(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else {
      let peek = stack[stack.length - 1];
      if (
        (str[i] === ")" && peek === "(") ||
        (str[i] === "}" && peek === "{") ||
        (str[i] === "]" && peek === "[")
      ) {
        // right pair
        stack.pop();
      } else {
        // wrong pair
        return false;
      }
    }
  }
  //   stack should be empty at end
  return stack.length === 0;
}

console.log("Check valid parenthesis=>", validParenthesis("(){}[]"));
console.log("Check valid parenthesis=>", validParenthesis("((())){{}}"));
console.log("Check valid parenthesis=>", validParenthesis("((())"));
console.log("Check valid parenthesis=>", validParenthesis("(((){}))"));
console.log("Check valid parenthesis=>", validParenthesis("(((){}{}}))"));
console.groupEnd();
