//!Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const introBtn = document.querySelector(".activity1 > button.intro");
introBtn.addEventListener("click", function () {
  const introPara = document.querySelector(".activity1 > p.intro");
  introPara.innerHTML = "The paragraph is changed ...";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const hideImageBtn = document.querySelector(".activity1 > button.hideImage");
hideImageBtn.addEventListener("dblclick", function () {
  const image = document.querySelector(".activity1 img");
  image.classList.toggle("Hide");
  this.textContent = this.textContent === "Show" ? "Hide" : "Show";
});

//!Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
const changeColorDiv = document.querySelector("div .changeColor");
changeColorDiv.addEventListener("mouseover", function () {
  this.style.backgroundColor = "#6f7ecf";
});
// Task 4: Add a mouseout event listener to an element that resets its background color.
changeColorDiv.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#6fcfaf";
});

//!Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const nameInput = document.querySelector(".activity3 > input[name='name']");
nameInput.addEventListener("keydown", function (e) {
  let key = e.key;
  if (e.key === " ") {
    key = "space";
  }
  console.log(`Pressed: ${key}`);
});
// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
nameInput.addEventListener("keyup", () => {
  const p = document.querySelector(".activity3 > input[name='name'] + p");
  p.innerHTML = nameInput.value;
});

//!Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const registerForm = document.querySelector(".activity4 form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(registerForm);
  for (const [key, value] of formData) {
    console.log(`${key} : ${value}`);
  }
});
// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const state = document.querySelector(".activity4 form > select[name=state]");
state.addEventListener("change", (e) => {
  console.log(e.target);
  const span = document.querySelector(".activity4 form span");
  span.innerHTML = e.target.options[e.target.selectedIndex].text;
});

//!Activity 5: Event Delegation
// Task 9: Add a click event to a list that logs the text content of the clicked list item using event delegation.
const qualificationList = document.querySelector(".activity5  >  ul");
qualificationList.addEventListener("click", (event) => {
  const li = event.target;
  console.log(`You clicked: ${li.innerText}`);
});
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
// Dynamically add child element
const addNewBtn = document.querySelector(".activity5  >  button");
addNewBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "9th - CBSE Board";
  qualificationList.appendChild(li);
});

qualificationList.addEventListener("mouseover", (event) => {
  const li = event.target;
  li.style.backgroundColor = "#e5ca4e";
});
qualificationList.addEventListener("mouseout", (event) => {
  const li = event.target;
  li.style.backgroundColor = "transparent";
});
