import { add, getPerson } from "./activites.js";
import displayHello from "./defaultExport.js";

// !Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script
console.group("Activity 1: Creating and Exporting Modules");
const a = 10,
  b = 12;
console.log(`Result of ${a}+${b}=${add(a, b)}`);

// Task 2: Create a module that exports an object representing a person with properties and method.
//Import and use this module in another script
const person = getPerson();
console.log(`Person is: ${JSON.stringify(person)}`);
console.log(`Name is: ${person.getName()}`);
console.groupEnd();

// !Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script
// Task 4: Create a module that exports a single function using default export. Import and use this function in another script
console.group("Activity 2: Named and Default Exports");

import { checkLogin, namedModule1 } from "./namedModules.js";
console.log(`named module called: ${namedModule1()}`);
console.log(`Verify login: ${checkLogin()}`);
console.log(
  `Verify login: ${checkLogin({ name: "hello", password: "secret" })}`
);
console.log(
  `Verify login: ${checkLogin({ name: "hello", email: "mymailid" })}`
);
console.log(`Default fun: ${displayHello()}`);
console.groupEnd();

// !Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions.
//  Import the entire module as an object in another script and use its properties

console.group("Activity 3: Importing Entire Modules");
import * as Area from "./multiple.js";
console.log(`value of pi constant is =${Area.PI.toFixed(3)}`);
console.log(`Area of circle with radius 5 = ${Area.circleArea(5).toFixed(2)}`);
console.log(`Area of square with side 10 = ${Area.squareArea(10).toFixed(2)}`);
console.log(
  `Area of rectange with sides 5,6 = ${Area.rectangleArea(5, 6).toFixed(2)}`
);
console.groupEnd();

// !Activity 4: Using Third Party Modules
// Task 6: Install a third party module (e.g., lodash) using npm. Import and use a function from this module in a script
import _ from "lodash";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const partedArray = _.chunk(arr, 3);
console.log(`parted/chunked array is=> ${JSON.stringify(partedArray)}`);

// Task 7: Install a third party module (e.g. axios) using npm.
// Import and use this module to make a network request in a script
import axios from "axios";

function getImageData(url) {
  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .then((data) => console.log(data))
    .catch((err) => console.error("Error fetching data:", err.message));
}

console.log(getImageData("https://api.thecatapi.com/v1/images/search"));

// !Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like webpack or Pracel to bundle multiple JS files into a single file.
//  Write a script to demonstrate  the bundling process
