const taskContainer = document.querySelector(".task-container");
const addTaskButton = document.querySelector(".add-task-button");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const close = document.querySelector(".close");
const taskForm = document.querySelector(".task-form");
const themeToggler = document.querySelector(".theme-toggler");
lockIcon = document.querySelector(".theme-toggler .icon i");
const body = document.body;

let isDarkMode = false;

// check for stored theme preference
const storedTheme = window.localStorage.getItem("mode");

if (storedTheme === "dark") {
  themeToggler.classList.remove("active");
} else if (storedTheme === "light") {
  themeToggler.classList.add("active");
}

setTheme();

themeToggler.addEventListener("click", () => {
  themeToggler.classList.toggle("active");

  setTheme();
});

function setTheme() {
  if (themeToggler.classList.contains("active")) {
    lockIcon.classList.replace("fa-moon", "fa-sun");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    window.localStorage.setItem("mode", "light");
  } else {
    lockIcon.classList.replace("fa-sun", "fa-moon");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("mode", "dark");
  }
}

let editingTaskIndex;
const taskKey = "lsTasks";
let tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
checkEmptyTasks();

function checkEmptyTasks() {
  if (!tasks || tasks.length === 0) {
    const emptyTasks = document.createElement("p");
    emptyTasks.textContent = "No tasks present. Add task first!";
    taskContainer.appendChild(emptyTasks);
  }
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = event.target.elements["title"].value;
  const description = event.target.elements["description"].value;
  const dueDate = event.target.elements["dueDate"].value;

  const newTask = {
    title,
    description,
    dueDate,
    completed: false,
  };

  if (editingTaskIndex !== undefined) {
    tasks[editingTaskIndex] = newTask;
    editingTaskIndex = undefined;
  } else {
    tasks.push(newTask);
  }
  localStorage.setItem(taskKey, JSON.stringify(tasks));
  displayTasks();
  closeModal();
});

function displayTasks() {
  taskContainer.innerHTML = "";

  try {
    const storedTasks = localStorage.getItem(taskKey);
    console.log("🚀 ~ displayTasks ~ storedTasks:", storedTasks);
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);

      tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("complete-checkbox");
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
          task.completed = checkbox.checked;
          taskElement.classList.toggle("completed", task.completed);
        });

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        const titleElement = document.createElement("h3");
        titleElement.textContent = task.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = task.description;

        const dueDateElement = document.createElement("p");
        dueDateElement.textContent = `Due: ${task.dueDate}`;

        taskContent.appendChild(titleElement);
        taskContent.appendChild(descriptionElement);
        taskContent.appendChild(dueDateElement);

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("task-buttons");

        const editButton = document.createElement("button");
        editButton.classList.add("edit-button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
          editTask(index);
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          deleteTask(index);
        });

        buttonsContainer.appendChild(editButton);
        buttonsContainer.appendChild(deleteButton);

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskContent);
        taskElement.appendChild(buttonsContainer);

        taskContainer.appendChild(taskElement);
      });
    }
  } catch (error) {
    console.error(`Error loading tasks: ${error}`);
  }
}

function editTask(index) {
  editingTaskIndex = index;
  const task = tasks[index];
  const form = document.querySelector(".task-form");
  form.elements["title"].value = task.title;
  form.elements["description"].value = task.description;
  form.elements["dueDate"].value = task.dueDate;
  modal.style.display = "block";
}

function deleteTask(index) {
  const confirmed = confirm("Are you sure you want to delete this task?");
  if (confirmed) {
    tasks.splice(index, 1);
    localStorage.setItem(taskKey, JSON.stringify(tasks));
    displayTasks();
    checkEmptyTasks();
  }
}

addTaskButton.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  closeModal();
});

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

function closeModal() {
  modal.style.display = "none";
  taskForm.reset();
}
