// !Activity 1: Basic Regular Expressions
console.group("Activity 1");
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const str =
  "JavaScript is a programming language. JavaScript can be used to code frontend and backend both.";
const regex = /JavaScript/g;
const matches = str.match(regex);
console.log(matches); // Output: ["JavaScript", "JavaScript"]

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
{
  const str = "Th1s 1s 2 5ecred Passw0rd349";
  const matches = str.match(/\d/g);
  console.log(matches);
}
console.groupEnd();

// !Activity 2: Character Classes and Quantifiers
console.group("Activity 2");
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
{
  const str = "This is a Test String";
  const match = str.match(/\b[A-Z]\w*\b/g);
  console.log("Words:", match);
}

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
{
  const str = "this is 123 test string 988734ing";
  const matches = str.match(/\d+/g);
  console.log("Seq of digits:", matches);
}

console.groupEnd();

// !Activity 3: Grouping and Capturing
console.group("Activity 3");
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
{
  const phoneNumber = "(123) 456-7890";
  const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
  const matches = phoneNumber.match(regex);
  //   console.log("🚀 ~ matches:", matches);

  if (matches) {
    const areaCode = matches[1];
    const centralOfficeCode = matches[2];
    const lineNumberCode = matches[3];
    console.log(`Area Code: ${areaCode}
Central Office Code: ${centralOfficeCode}
Line Number Code: ${lineNumberCode}`);
  }
}

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
{
  const email = "devsingh@nmdc.co.in";
  const match = email.match(/(\w+)@([\w.]+)/);
  //   console.log("🚀 ~ match:", match);
  console.log(`username: ${match[1]}\n domain: ${match[2]}`);
}

// !Activity 4: Assertions and Boundaries
console.group("Activity 4");
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
{
  const str = "Hello! this is test Hello string";
  const regex = /^\w+/g;
  const match = str.match(regex);

  console.log(match); // ["Hello"]
}

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
{
  const str = "Hello! this is test Hello string";
  const regex = /\w+$/g;
  const match = str.match(regex);

  console.log(match); // ["string"]
}
console.groupEnd();

// !Activity 5: Practical Applications
console.group("Activity 5");
// Task 9: Write a regular expression to validate a simple password
// (must include at least one uppercase letter, one lowercase letter, one digit, and one special character).
//  Log whether the password is valid.
function isValidPassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  return regex.test(password);
}
console.log(`Is valid password: ${isValidPassword("abRac@d23")}`);
console.log(`Is valid password: ${isValidPassword("abRac23!")}`);
console.log(`Is valid password: ${isValidPassword("passworD")}`);

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
function isValidURL(url) {
  const regex =
    /^((http|https):\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return regex.test(url);
}
console.log(`Is valid URL: ${isValidURL("gmail.com")}`);
console.log(`Is valid URL: ${isValidURL("https://gmail.com")}`);
console.log(`Is valid URL: ${isValidURL("http://gmail")}`);
console.log(`Is valid URL: ${isValidURL("http://gmail.com/")}`);
console.groupEnd();
