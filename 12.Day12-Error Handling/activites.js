// !Activity-1: Basic Error Handling with Try-Catch:
// Task-1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

console.group("Activity 1: Basic error handling with try/catch");
function getData() {
  try {
    throw new Error("Something unexpected happened....");
  } catch (err) {
    console.error(err);
  }
}
console.log(`Task 1: ${getData()}`);

// Task-2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
const divide = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.error(error);
    return a / 1;
  }
};
let a = 10,
  b = 0;
console.log(`Divide ${a} by ${b}= ${divide(a, b)}`);
(a = 10), (b = 3);
console.log(`Divide ${a} by ${b}= ${divide(a, b)}`);
console.groupEnd();

// Activity-2: Finally Block:
// Task-3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

console.group("Activity 2: Finally Block");
function getEmployeeData(user) {
  console.log("Function start");
  try {
    if (!user) {
      throw new Error("User is not provided");
    }
    console.log("Inside try block");
    // Simulate database operations
    const data = `Open db connection,
    Get ${user}'s data from the database,
    Return the data`;
    console.log("Returning data");
    return data;
  } catch (err) {
    console.log("Inside catch block");
    console.error("Error caught:", err.message);
  } finally {
    console.log("Inside finally block");
    console.log("Close the db connection");
  }
}

console.log(getEmployeeData("Rahul"));
console.log(getEmployeeData());
console.groupEnd();

// !Activity-3: Custom Error Objects:
// Task-4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

console.group("Activity 3: Custom Error Objects");

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}
function checkError() {
  try {
    throw new CustomError("Something went wrong...pls check");
  } catch (err) {
    if (err instanceof CustomError) {
      console.error("Caught Custom Error:", err.message);
    } else {
      console.error("Unexpected Error", err.message);
    }
  }
}
console.log(checkError());

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}

function validateFormData(form) {
  const { firstName, password } = form;
  try {
    if (!firstName || firstName.trim() === "") {
      throw new ValidationError("First Name can not be blank");
    }
    if (!password || password.trim() === "") {
      throw new ValidationError("Password can not be blank");
    }
    if (password.length < 6) {
      throw new ValidationError("Password must be atleast of 6 characters ");
    }

    return "Valid Form";
  } catch (err) {
    if (err instanceof ValidationError) {
      console.error(`Validation Error: ${err.message}`);
    } else {
      console.error(`Unexpected Error: ${err.message}`);
    }
  } finally {
    console.log("Validation completed...");
  }
}
const form = { firstName: "", password: "" };
console.log(validateFormData(form));
const form2 = { firstName: "Dev", password: "chai" };
console.log(validateFormData(form2));
console.groupEnd();

// !Activity-4: Error Handling in Promises:
// Task-6: Create a promise that randomly resolves or rejects. Use ".catch()" to handle the rejection and log an appropriate message to the console.

console.group("Activity 4: Error Handling in Promises");
function randomPromiseHandler() {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);

    if (num > 6) {
      reject(new Error(`Number ${num} is more than 6`));
    } else {
      resolve(`Number ${num} is less than 6`);
    }
  });
}

randomPromiseHandler()
  .then((result) => console.log(result))
  .catch((err) => console.error("Something unexpected:", err.message));

// Task-7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function randomPromises() {
  try {
    const result = await randomPromiseHandler();
    console.log("-----Task 7----");
    console.log(result);
  } catch (err) {
    console.error("Something unexpected:", err.message);
  }
}
randomPromises();

// !Activity-5: Graceful Error Handling in Fetch:
// Task-8: Use the "fetch" API to request data from an invalid URL and handle the error using ".catch()". Log an appropriate message to the console.
console.group("Activity 5: Graceful error handling in Fetch");
function getUrlData(url) {
  fetch(url)
    .then((response) => {
      if (response.status === "ok") {
        return response.json();
      }
    })
    .catch((err) => {
      console.error("Something wrong happened:", err.message);
    });
}
getUrlData();
getUrlData("https://api.courses.chaicode.com/");

// Task-9: Use the "fetch" API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function getInfo(url) {
  try {
    const data = await fetch(url);
    console.log(data);
  } catch (err) {
    console.error("Something unexpected happened:", err.message);
  }
}
getInfo();
getInfo("https://api.courses.chaicode.com/");
