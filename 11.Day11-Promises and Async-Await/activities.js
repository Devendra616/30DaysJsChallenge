//!Activity 1 : Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
console.group("Activity 1: Understanding Promises");
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is resolved after 2 sec...");
  }, 2000);
});
myPromise.then((msg) => {
  console.log(msg);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const erPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is rejected after 2 sec...");
  }, 2000);
});
erPromise.catch((err) => console.log(err));
console.groupEnd();

// !Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server.
// Chain the promises to log messages in a specific order.
console.group("Activity 2: Chaining Promises");
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user data");
      resolve({ userid: 1001, name: "Devendra", status: 1 });
    }, 1000);
  });
}

function fetchUserPost(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetching posts of user ${user.name}`);
      resolve([
        { id: 1, content: "Post 1" },
        { id: 2, content: "Post 2" },
        { id: 3, content: "Post 3" },
      ]);
    }, 1000);
  });
}

function fetchPostComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Getting comments for post ${post.id}`);
      resolve([
        { commentId: 1, text: "Comment 1" },
        { commentId: 2, text: "Comment 2" },
      ]);
    }, 1200);
  });
}

try {
  fetchUserData()
    .then((user) => fetchUserPost(user))
    .then((post) => fetchPostComments(post[1]));
} catch (err) {
  console.log(err);
}
console.groupEnd();

//! Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
console.group("Activity 3: Using Async/Await");

// function that returns promise after a time
function resolvePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 1 sec...");
    });
  });
}

// Async function that wait for promise to resolve
async function displayValues() {
  try {
    const result = await resolvePromise();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
// call the async function
displayValues();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
function rejectPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("The promise is rejecte after 1.5sec");
    }, 1500);
  });
}

async function task5() {
  try {
    const result = await rejectPromise();
    console.log("Promise is successful", result);
  } catch (err) {
    console.log("Error: something happened!", err);
  }
}
task5();
console.groupEnd();

// !Activity 4: Fetching data from API
console.group("Activity 4: Fetching data from API");
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const url = "https://jsonplaceholder.typicode.com/posts/1";
fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error("Invalid response");
    return response.json();
  })
  .then((data) => console.log(`Result is ${JSON.stringify(data)}`))
  .catch((err) => console.error("Error:Something happened", err));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function asyncTest() {
  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log("Task 6: ", data);
  } catch (err) {
    console.error(err);
  }
}
asyncTest();
console.groupEnd();

// !Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve
// and then log all their values.
console.group("Activity 5: Concurrent Promises");
function firstPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`promise 1 resolved after 2sec`), 2000);
  });
}

function thirdPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`promise 3 resolved after 1sec`), 1000);
  });
}

function secondPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 2 resolved after 1.5sec"), 1500);
  });
}

Promise.all([firstPromise(), secondPromise(), thirdPromise()]).then(
  (result) => {
    console.log("All promises are resolved");
    console.log(result);
  }
);

// Task 9: Use Promise.race to log the value of the
// first promise that resolves among multiple promises.
Promise.race([firstPromise(), secondPromise(), thirdPromise()]).then(
  (result) => {
    console.log("Promise race called... return first resolved");
    console.log(result);
  }
);
console.groupEnd();
