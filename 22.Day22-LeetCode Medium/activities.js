// !Activity 1: Add Two Numbers
/* Task 1: Solve the Add Two Numbers on Leetcode.
Write a function that takes two non-empty linked lists representing two non-negative integer.
The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list. 
Create a few test cases with linked lists and log the sum as a linked list. */
console.group("Activity 1: Add Two Numbers");
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}
// The digits are stored in reverse order, and each node contains a single digit.
//* this means leat significant digit is at front
function addTwoNumbers(l1, l2) {
  let tempNode = new ListNode();
  let current = tempNode;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const sum = carry + (l1.value || 0) + (l2.value || 0);

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);

    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return tempNode.next;
}

// Function to print linked list
function printLinkedList(node) {
  let result = [];
  let current = node;
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join("->"));
}

let l1 = new ListNode(5, new ListNode(2, new ListNode(9)));
let l2 = new ListNode(4, new ListNode(3, new ListNode(2)));
let sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

l1 = new ListNode(9, new ListNode(6, new ListNode(9)));
l2 = new ListNode(2, new ListNode(4, new ListNode(4)));
sum = addTwoNumbers(l1, l2);
printLinkedList(sum);
console.groupEnd();

// !Activity 2: Longest Substring Without Repeating Characters
console.group("Activity 2: Longest Substring Without Repeating Characters");
/*  Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
Write a function that takes a string and returns the length of the longest substring without repeating characters.
Log the length for a few test cases, including edge cases. */

function longestSubstring(str) {
  let longest = 0;
  let substring = "";

  for (let i = 0; i < str.length; i++) {
    if (substring.indexOf(str[i]) !== -1) {
      substring = str[i];
    } else {
      substring += str[i];
      longest = Math.max(substring.length, longest);
    }
  }
  return longest;
}

console.log(`longest substring length= ${longestSubstring("abbccdefg")}`);
console.log(`longest substring length= ${longestSubstring("abcdefgh")}`);
console.log(`longest substring length= ${longestSubstring("abcabc")}`);
console.log(`longest substring length= ${longestSubstring("ccccc")}`);
console.log(`longest substring length= ${longestSubstring("")}`);
console.groupEnd();

//! Activity 3: Container With Most Water
/*  Task 3: Solve the "Container With Most Water" problem on LeetCode.
Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
Log the maximum amount of water for a few test cases. */
console.group("Activity 3: Container With Most Water");

function maxWater(arr) {
  let maxArea = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const width = right - left;
    const height = Math.min(arr[left], arr[right]);
    maxArea = Math.max(maxArea, width * height);

    arr[left] < arr[right] ? left++ : right--;
  }

  return maxArea;
}
console.log(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxWater([1, 2, 3, 4, 5]));
console.log(maxWater([1, 2, 1]));
console.groupEnd();

// !Activity 4: 3 Sum
/* Task 4: Solve the 3Sum problem on Leetcode.
Write a function that takes an array of integers and finds all unique triplets in the array which gives the sum of zero.
Log the triplets for a few test cases, including edge cases.
 */
console.group("Activity 4: 3 Sum");

function threeSum(arr) {
  // sort the array
  arr.sort((a, b) => a - b);
  const tripletsArr = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i - 1]) {
      // already visited before, skip duplicates first entry
      continue;
    }

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        tripletsArr.push([arr[i], arr[left], arr[right]]);
        // skip duplicates 2nd and 3rd entries
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return tripletsArr;
}

console.log(threeSum([1, 1, 1, -1, -1, -1, -2, 0]));
console.log(threeSum([0]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, -2, -2, 2, 1, 1]));
console.groupEnd();

//! Activity 5: Group Anagrams
/* Task 5: Solve the Group Anagrams Problem on Leetcode.
Write a function that takes an array of strings and groups anagrams together. 
Log the grouped anagrams for a few test cases. */

console.group("Activity 5: Group Anagrams");

function groupAnagrams(strArr) {
  const group = [];
  const map = new Map();

  for (str of strArr) {
    const sortedStr = str.split("").sort().join();

    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }
  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(
  groupAnagrams(["abcd", "dcba", "abcd", "dabc", "xyyx", "yyxx", "yxxy"])
);
// Output: [["abcd","dcba","abcd","dabc"],["xyyx","yyxx","yxxy"]]
console.groupEnd();
