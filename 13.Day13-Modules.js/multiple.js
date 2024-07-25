// !Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions.
//  Import the entire module as an object in another script and use its properties

const PI = Math.PI;

function squareArea(side) {
  return side * side;
}

function rectangleArea(len, width) {
  return len * width;
}

function circleArea(radius) {
  return PI * radius * radius;
}

export { PI, rectangleArea, squareArea, circleArea };
