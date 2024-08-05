// !Activity 1: Understanding LocalStorage
console.group("Activity 1");
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

const str = "Devendra data fetched from Local Storage";
localStorage.setItem("user", str);
console.log(`Local Storage: ${localStorage.getItem("user")}`);

document.getElementById("localStorage").addEventListener("click", (e) => {
  document.querySelector("#info").innerHTML = localStorage.getItem("user");
});

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
{
  const employee = {
    name: "Devendra",
    empId: "A1359",
    dept: "C&IT",
    location: "CG",
  };
  localStorage.setItem("employee", JSON.stringify(employee));
  console.log("Employee: ", JSON.parse(localStorage.getItem("employee")));
}
console.groupEnd();

// !Activity 2: Using LocalStorage
console.group("Activity 2");
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted.
// Retrieve and display the saved data on page load.

document.querySelector("#localStorageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  const formData = { name, email };
  localStorage.setItem("formData", JSON.stringify(formData));
});

document.addEventListener("DOMContentLoaded", () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
  if (formData) {
    document.querySelector(
      "#formData"
    ).innerHTML = `Name: ${formData.name} <br> Email: ${formData.email}`;
  } else {
    document.querySelector("#formData").innerHTML = "No User Data available";
  }
});

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

{
  console.log(
    "Employee before Removal: ",
    JSON.parse(localStorage.getItem("employee"))
  );
  localStorage.removeItem("employee");
  console.log(`Employee after Removal ${localStorage.getItem("employee")}`); //null
}
console.groupEnd();

// !Activity 3: Understanding Session Storage
console.group("Activity 3");

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
{
  const userSession = "Devendra saved in session";
  sessionStorage.setItem("user", userSession);
  console.log(`user from sesson is: ${sessionStorage.getItem("user")}`);
}

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
{
  const employee = {
    name: "Devendra",
    empId: "A1359",
    dept: "C&IT",
    company: "NMDC",
  };
  sessionStorage.setItem("employee", JSON.stringify(employee));
  console.log(
    "employee from session is ",
    JSON.parse(sessionStorage.getItem("employee"))
  );
}
console.groupEnd();

// !Activity 4: Using Session Storage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
const sessionForm = document.querySelector("#sessionStorageForm");
sessionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(
    "#sessionStorageForm input[name='name']"
  ).value;
  const email = document.querySelector(
    "#sessionStorageForm input[name='email']"
  ).value;

  const empSession = {
    name,
    email,
  };
  sessionStorage.setItem("emp", JSON.stringify(empSession));
});

document.addEventListener("DOMContentLoaded", () => {
  const sessionData = sessionStorage.getItem("emp");
  if (sessionData) {
    const { name, email } = JSON.parse(sessionData);
    document.querySelector(
      "#sessionData"
    ).innerHTML = `Name: ${name}<br> Email: ${email}`;
  } else {
    document.querySelector("#sessionData").innerHTML = "No data in session";
  }
});

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
{
  console.log(
    `Session data before removal`,
    JSON.parse(sessionStorage.getItem("emp"))
  );
  sessionStorage.removeItem("emp");
  console.log(
    `Session data after removal`,
    JSON.stringify(sessionStorage.getItem("emp"))
  );
}
console.groupEnd();

// !Activity 5: Comparing LocalStorage and SessionStorage
console.group("Activity 5");

// Task 9: Write a function that accepts a key and a value,
// and saves the value to both localStorage and sessionStorage. Retrieve and log the values
// from both storage mechanisms.
{
  const test = {
    title: "Welcome Page",
    pages: 5,
  };
  function setStorage(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }
  setStorage("website", JSON.stringify(test));
  setStorage("name", "Devendra");

  function getStorage(key) {
    try {
      const local = JSON.parse(localStorage.getItem(key));
      const session = JSON.parse(sessionStorage.getItem(key));
      console.log(`Local: `, local);
      console.log(`Session: `, session);
    } catch (err) {
      const local = localStorage.getItem(key);
      const session = sessionStorage.getItem(key);
      console.log(`Local: `, local);
      console.log(`Session: `, session);
    }
  }

  getStorage("website");
  getStorage("name");
}

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
{
  function clearStorage() {
    console.log(`Before clean-Length of Local Storage: ${localStorage.length}`);
    console.log(
      `Before clean- Length of Session Storage: ${sessionStorage.length}`
    );
    sessionStorage.clear();
    localStorage.clear();
    console.log(`After clean-Length of Local Storage: ${localStorage.length}`);
    console.log(
      `After clean-Length of Session Storage: ${sessionStorage.length}`
    );
  }
  clearStorage();
}
console.groupEnd();
