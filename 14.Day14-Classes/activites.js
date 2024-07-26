// !Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message.
//  Create an instance of the class and log the greeting message.
console.group("Activity 1: Class Definition");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Welcome ${this.name}`;
  }
}

const rahul = new Person("Rahul", 36);
console.log(rahul.greet());

// Task 2: Add a method to the Person class that updates the age property and log the updated age.
Person.prototype.setAge = function (age) {
  this.age = age;
};
rahul.setAge(29);
console.log(`Age of Rahul is ${rahul.age}`);
console.groupEnd();

// !Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID.
// Create an instance of the Student class and log the studdent ID.

console.group("Activity 2: Class Inheritance");
class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.studentId = id;
  }
  getStudentId() {
    return this.studentId;
  }
}
const vijay = new Student("Vijay", 30, 2);
console.log("Student ID of Vijay", vijay.getStudentId());
console.log("Greet Vijay", vijay.greet());

// Task 4: Override the greeting method in the Student class to include the Student ID in the message. Log the overridden greeting message.
Student.prototype.greet = function () {
  return `Welcome ${this.name} Id:(${this.studentId})`;
};
console.log("Greet Vijay", vijay.greet());
console.groupEnd();

// !Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message.
// Call this static method without creating an instance of the class and log the message.

console.group("Activity 3: Static Method and Properties");
class Person2 {
  constructor(firstName, age, lastName) {
    this.firstName = firstName;
    this.age = age;
    this.lastName = lastName;
  }

  greet() {
    return `Welcome ${this.firstName}`;
  }
  static greet() {
    return "Welcome from Person class";
  }
}
console.log(Person2.greet());

// Task 6: Add a static property to the Student class to keep track of the number of students created.
//  Increment this property in the constructor and log the total number of students.
class Student2 extends Person2 {
  static countStudents = 0;
  constructor(name, age, id) {
    super(name, age);
    this.studentId = id;
    Student2.countStudents++;
  }

  getStudentId() {
    return this.studentId;
  }
}
const ankit = new Student2("Ankit", 18, 3);
const vaishali = new Student2("Vaishali", 22, 5);
const rakesh = new Student2("Rakesh", 28, 7);
console.log(`No.of students => ${Student2.countStudents}`);
console.groupEnd();

// !Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property).
// Create an instance and log the full name using the getter.

console.group("Activity 4:Getters and Setters");
Person2.prototype.getName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const vaibhav = new Person2("Vaibhav", 26, "Kumar");
console.log("Full name is ", vaibhav.getName());

// Task 8: Add a setter method to the Person class to update the name property (firstName and lastName).
// Update the name using the setter and log the updated full name.

Person2.prototype.setFirstName = function (first) {
  this.firstName = first;
};
Person2.prototype.setLastName = function (last) {
  this.setLastName = last;
};
vaibhav.setFirstName("Kranti");
vaibhav.setLastName("Yadav");
console.log("Full name is ", vaibhav.getName());
console.groupEnd();

// !Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money.
// Ensure that the balance only be updated through these methods.

console.group("Activity 5: Private Fields");
class Account {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }
  deposit(amt) {
    this.#balance += amt;
  }
  withdraw(amt) {
    try {
      if (this.#balance >= amt) {
        this.#balance;
        this.#balance -= amt;
      } else {
        throw new Error("Insufficient Balance");
      }
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
}
// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balanace after each operation.
const account = new Account();

console.log(`Initial Balance: ${account.getBalance()}`);
account.deposit(1000);
console.log(`Balance: ${account.getBalance()}`);
account.withdraw(2000);
console.log(`Balance: ${account.getBalance()}`);
account.withdraw(500);
console.log(`Balance: ${account.getBalance()}`);

console.groupEnd();
