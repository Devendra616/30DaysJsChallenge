import {
  addNotification,
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const updateProfileForm = document.getElementById("update-profile-form");
  const postsContainer = document.querySelector(".post-feed");
  const logoutButton = document.getElementById("logout-button");

  const loggedInUser = getSessionStorage("username");

  if (!loggedInUser) {
    alert("Please log in first.");
    window.location.href = "login.html";
    return;
  }

  // Handle logout
  logoutButton.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "login.html";
  });

  // Populate the form with user info
  document.getElementById("username").value = loggedInUser.username;
  document.getElementById("email").value = loggedInUser.email;

  updateProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateUserProfile(loggedInUser);
  });

  loadUserPosts(loggedInUser.email);

  function updateUserProfile(user) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // Update localStorage
    let users = getLocalStorage("users");
    const userIndex = users.findIndex((u) => u.email === user.email);

    if (userIndex !== -1) {
      users[userIndex].username = username;
      users[userIndex].email = email;

      setLocalStorage("users", users);
      setSessionStorage("username", users[userIndex]);

      alert("Profile updated successfully!");
    }
  }

  function loadUserPosts(email) {
    const posts = getLocalStorage("posts");
    const userPosts = posts.filter((post) => post.email === email);

    userPosts.forEach((post) => {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);

      const deleteButton = postElement.querySelector(".post-actions button");
      deleteButton.addEventListener("click", function () {
        const isConfirmed = confirm("Are you sure to delete this post ?");
        if (isConfirmed) {
          deletePost(post.id, loggedInUser.username);
        }
      });
    });
  }

  function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
            <div class="post-content">
              <p>${post.text}</p>
              ${post.image ? `<img src="${post.image}" alt="Post Image">` : ""}
            </div>            
            <div class="post-metadata">
              <span>${post.username}</span>
              <span>${post.timestamp}</span>              
            </div>
            <div class="post-actions">              
              <button data-post-id="${post.id}">Delete</button>
            </div>
        `;

    return postElement;
  }
});

function deletePost(postId, user) {
  let posts = getLocalStorage("posts");
  posts = posts.filter((post) => post.id !== postId);

  setLocalStorage("posts", posts);
  const message = `${user} deleted a post`;
  addNotification(message, null, user);
  location.reload();
}
