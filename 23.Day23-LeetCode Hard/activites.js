// !Activity 1: Median of two Sorted Arrays
/* Task-1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
Log the median for a few test cases, including edge cases. */
console.group("Activity 1: Median of two Sorted Arrays");
/*
 * Median is middle element of the array
 */
function findMedian(arr1, arr2) {
  const l1 = arr1.length;
  const l2 = arr2.length;

  const temp = [];
  let i = 0,
    j = 0;
  while (i < l1 && j < l2) {
    if (arr1[i] <= arr2[j]) {
      temp.push(arr1[i]);
      i++;
    } else {
      temp.push(arr2[j]);
      j++;
    }
  }

  while (i < l1) temp.push(arr1[i++]);
  while (j < l2) temp.push(arr2[j++]);

  if (temp.length % 2 === 0) {
    const a = temp.length / 2 - 1;
    const b = temp.length / 2;
    return (temp[a] + temp[b]) / 2;
  } else {
    return temp[Math.floor(temp.length / 2)];
  }
}
console.log(findMedian([1, 3], [2])); //2
console.log(findMedian([1, 2], [3, 4])); // Output: 2.5
console.groupEnd();

// !Activity 2: Merge k sorted Lists
/* Task 2: Solve the Merge k Sorted Lists problem on Leetcode.
Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the Linked lists into one sorted linked list.
Create a few test cases with linked lists and log the merged list. */
console.group("Merge k sorted Lists");

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function mergeTwoSortedList(list1, list2) {
  let temp = new ListNode();
  let current = temp;

  while (list1 != null && list2 !== null) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return temp.next;
}

function mergeKLists(arr) {
  if (arr.length === 0) return;

  let mergedList = arr[0];
  for (let i = 1; i < arr.length; i++) {
    mergedList = mergeTwoSortedList(mergedList, arr[i]);
  }
  return mergedList;
}

function printList(node) {
  const result = [];
  while (node) {
    result.push(node.value);
    node = node.next;
  }
  console.log(result.join("->"));
}

// Creating linked lists
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));

let lists = [l1, l2, l3];
let mergedList = mergeKLists(lists);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

let l4 = new ListNode(5, new ListNode(10));
let l5 = new ListNode(7, new ListNode(8));
let l6 = new ListNode(6, new ListNode(11));

let lists2 = [l4, l5, l6];
let mergedList2 = mergeKLists(lists2);
printList(mergedList2); // Output: 5 -> 6 -> 7 -> 8 -> 10 -> 11
console.groupEnd();

// !Activity 3: Trapping Rain Water
/* Task 3: Solve the Trapping Rain Water Problem on Leetcode.
Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining
Log the amount of trapped water for a few test cases.  
* YouTube link : https://youtu.be/UZG3-vZlFM4
*/
console.group("Activity 3: Trapping Rain Water");
function waterTrapped(heights) {
  const n = heights.length;

  if (n === 0) return 0;

  const leftMaxArr = new Array(n).fill(0);
  const rightMaxArr = new Array(n).fill(0);

  leftMaxArr[0] = heights[0];
  for (let i = 1; i < n; i++) {
    // at pos i find max height in left till now
    leftMaxArr[i] = Math.max(heights[i], leftMaxArr[i - 1]);
  }

  rightMaxArr[n - 1] = heights[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    // at pos i find max height in right till now
    rightMaxArr[i] = Math.max(heights[i], rightMaxArr[i + 1]);
  }

  let totalWater = 0;
  for (let i = 0; i < n; i++) {
    // water trapped at a position, Min of (leftMax, rightMax) - selfHeight
    const water = Math.min(leftMaxArr[i], rightMaxArr[i]) - heights[i];
    totalWater += water;
  }
  return totalWater;
}

console.log("Water Trapped", waterTrapped([3, 1, 2, 4, 0, 1, 3, 2])); //8
console.log("Water Trapped", waterTrapped([4, 2, 0, 3, 2, 5])); //9
console.groupEnd();

// !Activity 4: N-Queens
/* Task 4: Solve the N-Queens problem on Leetcode.
Write a function that places in queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the in queens puzzle
Log the distinct solutions for a few test cases */

console.group("Activity 4: N-Queens");
function solveQueens(n) {
  const solutions = [];
  // Fill 2D array
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // diagonal before
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // anti diagonal before
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function placeQueen(row) {
    // all rows completed
    if (row === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";
        placeQueen(row + 1);
        board[row][col] = ".";
      }
    }
  }
  placeQueen(0);
  return solutions;
}
// console.log(solveQueens(4));
console.log(solveQueens(6));
console.groupEnd();

// !Activity 5: Word Ladder
/*  Task 5: Solve the Word Ladder problem on Leetcode.
Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence
from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
Log the length of the shortest transformation sequence for a few test cases. */
console.group("Activity 5: Word Ladder");
function wordLadder(beginWord, endWord, dict) {
  // for fast retrieval and remove duplicate
  const wordSet = new Set(dict);

  if (!wordSet.has(endWord)) {
    return 0;
  }

  // [currentWord,level]
  const queue = [[beginWord, 1]];
  while (queue.length > 0) {
    const [currentWord, currentLevel] = queue.shift();

    if (currentWord === endWord) return currentLevel;

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
        const newWord =
          currentWord.slice(0, i) +
          String.fromCharCode(c) +
          currentWord.slice(i + 1);

        if (wordSet.has(newWord)) {
          queue.push([newWord, currentLevel + 1]);
          // to avoid reiterating loop toy => joy => toy again & again
          wordSet.delete(newWord);
        }
      }
    }
  }

  // end word can not be reached from start
  return 0;
}

console.log(wordLadder("a", "c", ["a", "b", "c"])); // Output: 2
console.log(
  wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // Output: 5
console.groupEnd();
