// !Activity 1: Sorting Algorithms

console.group("Activity 1: Sorting Algorithms");
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(array) {
  let isSwapped;
  let n = array.length;
  do {
    isSwapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        // swap
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSwapped = true;
      }
    }
    n--;
  } while (isSwapped);
  return array;
}

let nums = [4, 6, 2, 46, 15, 6, 18];
console.log(`Array is : ${nums}`);
console.log(`Sorted array is ${bubbleSort(nums)}`);

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }
  return array;
}

nums = [4, 8, 2, 20, 19, 32, 25, 21];
console.log(`Array is : ${nums}`);
console.log(`Sorted array is ${selectionSort(nums)}`);

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  i++;
  [arr[high], arr[i]] = [arr[i], arr[high]];
  return i;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

nums = [4, 8, 2, 20, 19, 32, 25, 21];
console.log(`Array is : ${nums}`);
console.log(`Sorted array is ${quickSort(nums)}`);
console.groupEnd();

// !Activity 2: Searching Algorithms
console.group("Activity 2: Searching Algorithms");

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [5, 2, 7, 5, 12, 65, 15];
console.log(`Linear Search: Index of 2 in ${arr} is ${linearSearch(arr, 2)}`);
console.log(`Linear Search: Index of 20 in ${arr} is ${linearSearch(arr, 20)}`);

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (left > right) return -1;

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

arr = [2, 4, 8, 19, 20, 21, 25, 32];
console.log(`Binary Search: Index of 4 in ${arr} is ${binarySearch(arr, 4)}`);
console.log(`Binary Search: Index of 32 in ${arr} is ${binarySearch(arr, 32)}`);
console.log(`Binary Search: Index of 6 in ${arr} is ${binarySearch(arr, 6)}`);
console.groupEnd();

// !Activity 3: String Algorithms
console.group("Activity 3: String Algorithms");

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countCharOccurances(str) {
  const map = new Map();
  for (const char of str) {
    map.set(char, map.get(char) + 1 || 1);
  }
  return map;
}

console.log(`Occurances in Mathematics: `, countCharOccurances("mathematics"));

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstring(str) {
  let longestSubstring = "";
  let currentSubstring = "";
  let visited = new Set();

  for (const char of str) {
    if (!visited.has(char)) {
      visited.add(char);
      currentSubstring += char;
      /* console.log(
        "char",
        char,
        visited,
        "longestSubstring",
        longestSubstring,
        "currentSubstring:",
        currentSubstring
      ); */
    } else {
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;

        visited = new Set(char);
        currentSubstring = char;
      }
    }
  }

  return longestSubstring.length;
}
console.log(longestSubstring("abcabcdebbabddeabcda")); // Output: 5 (abcde)
console.groupEnd();

// !Activity 4: Array Algorithms
console.group("Activity 4: Array Algorithms");

// Task 8: Write a function to rotate an array by k positions.
// Log the rotated array.
function rotateArray(arr, k) {
  // if k > len
  k = k % arr.length;
  const firstPart = arr.slice(0, arr.length - k);
  const secondPart = arr.slice(-k);
  return secondPart.concat(firstPart);
}

console.log(`Rotate Array: ${rotateArray([1, 2, 3, 4, 5, 6], 2)}`);
console.log(`Rotate Array: ${rotateArray([1, 2, 3, 4, 5, 6], 4)}`);
console.log(`Rotate Array: ${rotateArray([1, 2, 3, 4, 5, 6], 7)}`);

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const merged = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
  /*  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged; */
}
console.log(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6,7,9]
console.groupEnd();

// !Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence
// using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
  if (n == 1) return [0];

  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib.join(",");
}

console.log(fibonacci(10));

// Task 11: Write a function to solve the knapsack problem using dynamic programming.
// Log the maximum value that can be obtained.
// *Given a bag with maximum weight capacity of W and a set of items,
// *each having a weight and a value associated with it.
// *Decide the number of each item to take in a collection such that
// *the total weight is less than the capacity and the total value is maximized.

function knapsack(weights, values, capacity) {}
