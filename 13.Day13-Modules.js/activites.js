// !Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script
function add(a, b) {
  return a + b;
}

// Task 2: Create a module that exports an object representing a person with properties and method.
//Import and use this module in another script
// !Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script

const getPerson = function () {
  const person = {
    name: "Devendra",
    gender: "Male",
    getName: function () {
      return this.name;
    },
    setName: function (name) {
      this.name = name;
    },
  };

  return person;
};
export { add, getPerson };
