// !Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
console.group("Activity 1");
const book = {
  title: "The Power of Now",
  author: "Eckhart Tolle",
  year: 1997,
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
const title = book.title;
const author = book.author;
console.log(`The author of book "${title}" is ${author}`);
console.groupEnd();

// !Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.
console.group("Activity 2");
book.getAuthorTitle = function () {
  return `${this.title}-${this.author}`;
};
console.log(book.getAuthorTitle());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.
book.setYear = function (year) {
  this.year = year;
};
book.setYear(2003);
console.log(book);
console.groupEnd();

// !Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
console.group("Activity 3");
const book2 = new Object({
  title: "Think and Grow Rich",
  author: " Napoleon Hill",
});
const library = {
  name: "Self help",
  books: [book, book2],
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Library name: ${library.name}`);
library.books.forEach((book) => console.log(`title:${book.title}`));
console.groupEnd();

// !Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.
console.group("Activity 4");
book.getTitleYear = function () {
  return `${this.title}-${this.year}`;
};
console.log(book.getTitleYear());
console.groupEnd();

// !Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.group("Activity 5");
for (prop in book) {
  console.log(`${prop}-${book[prop]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(`Keys: ${Object.keys(book)}`);
console.log(`Values: ${Object.values(book)}`);
console.groupEnd();
