// !Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
console.group("Activity 1: Understanding Closures");
function outerFunction() {
  const text = "This is from outer scope";
  return function () {
    console.log("This is called from inner scope");
    return text;
  };
}
const inner = outerFunction();
console.log(inner());

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter() {
  let count = 0;
  return () => {
    return `Count: ${++count}`;
  };
}
const incr1 = counter();
console.log(incr1());
console.log(incr1());

// ! Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
console.group("Activity 2: Practical Closures");
const generateIds = () => {
  let lastId = 0;
  const incrementedId = () => {
    return `AAA${++lastId}`;
  };

  return incrementedId;
};

const generatedId = generateIds();
console.log(generatedId());
console.log(generatedId());
console.log(generatedId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function getUser(name) {
  return function greetUser() {
    return `Welcome ${name}!`;
  };
}
const user = getUser("Rajesh");
console.log(user());
const vijay = getUser("Vijay");
console.log(vijay());

console.groupEnd();
// ! Activity 3: Closures in Loop
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
console.group("Activity 4: Module Pattern");
function createFunArray() {
  const arrFun = [];
  for (let i = 0; i <= 5; i++) {
    function fun() {
      return `Function at index ${i} is called`;
    }
    arrFun.push(fun);
  }

  return arrFun;
}
const arr = createFunArray();
console.log(arr[2]());
console.log(arr[4]());
console.groupEnd();

// !Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
console.group("Activity 4: Module Pattern");
function itemCollection() {
  // private
  const items = [];

  return {
    add: (item) => {
      items.push(item);
    },

    remove: (item) => {
      const pos = items.indexOf(item);
      if (pos !== -1) {
        items.splice(pos, 1);
      }
    },

    listItems: () => {
      return items.join(", ");
    },
  };
}
const myItemList = itemCollection();
myItemList.add(23);
myItemList.add(10);
myItemList.add(9);
console.log(myItemList.listItems());
myItemList.remove(10);
console.log(myItemList.listItems());
console.groupEnd();

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
console.group("Activity 5: Memoization");
function fib() {
  const mem = {};
  return function fibonacci(num) {
    if (num in mem) {
      return mem[num];
    }

    if (num <= 1) return num;
    mem[num] = fibonacci(num - 2) + fibonacci(num - 1);
    return mem[num];
  };
}

const fibonacci = fib();
console.log(`Fibonacci of 9: ${fibonacci(9)}`);
console.log(`Fibonacci of 8: ${fibonacci(8)}`);

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial() {
  const cache = {};

  return function fact(num) {
    if (num in cache) return cache[num];

    if (num <= 1) {
      cache[num] = num;
      return num;
    }

    const result = num * fact(num - 1);
    cache[num] = result;
    return result;
  };
}
const fact = factorial();
console.log(`Factorial of 5 is ${fact(5)}`);
console.groupEnd();
