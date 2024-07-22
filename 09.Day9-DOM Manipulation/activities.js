// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.
const p1 = document.getElementById("p1");
p1.textContent = "First Paragraph";

// • Task 2: Select an HTML element by its class and change its background color.
const p2 = document.getElementsByClassName("important")[0];
p2.style.backgroundColor = "#ff4949";

// !Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.
const div = document.createElement("div");
div.textContent = "This is added dynamically";
document.body.appendChild(div);

// • Task 4: Create a new 1i element and add it to an existing ul list.
const checkList = document.querySelector(".checkList");
const li = document.createElement("li");
li.innerHTML = "Check LED indicator";
checkList.appendChild(li);

// !Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.
const logoutBtn = document.querySelector("#logout");
logoutBtn.remove();
// • Task 6: Remove the last child of a specific HTML element.
checkList.removeChild(checkList.lastChild);

// !Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
function changeImage() {
  // change the src of image
  const newUrl =
    "https://img.freepik.com/free-photo/bible-wood_1150-17659.jpg?t=st=1721565244~exp=1721568844~hmac=692c6d7c6fd6455017993c81a5f3a090b9e5f92f1ac2db70a36cb3600d1641bf&w=1380";
  document.getElementsByTagName("img")[0].setAttribute("src", newUrl);
}

// • Task 8: Add and remove a CSS class to/from an HTML element.
function addClass() {
  const element = document.querySelector(".important");
  element.classList.add("highlight");
}

function removeClass() {
  const element = document.querySelector(".important");
  element.classList.remove("highlight");
}

function toggleClass() {
  const element = document.querySelector(".important");
  element.classList.toggle("highlight");
}

// !Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const changePara = document.querySelector("button.changePara");
changePara.addEventListener("click", () => {
  const para = document.querySelector("p.changePara");
  para.innerHTML = "This is a large paragraph which is modfied";
});

// • Task 10: Add a mouseover event listener to an element that changes its border color.
document
  .querySelector("p.changePara")
  .addEventListener("mouseover", function () {
    this.style.border = "solid green";
  });

document.querySelector("p.changePara").onmouseleave = function () {
  this.style.border = "transparent";
};
