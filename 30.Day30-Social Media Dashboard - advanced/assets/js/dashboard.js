import {
  getPosts,
  savePost,
  displayPosts,
  toggleLike,
  toggleComments,
  updatePost,
} from "./posts.js";

import {
  getBase64,
  getLocalStorage,
  setLocalStorage,
  addNotification,
  getSessionStorage,
} from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const newPostForm = document.querySelector(".new-post-form form");
  const postFeed = document.querySelector(".post-feed");
  const logoutButton = document.getElementById("logout-button");
  const notificationsSidebar = document.getElementById("notifications-sidebar");
  const notificationList = document.getElementById("notification-list");

  // Load notifications from localStorage
  const notifications = getLocalStorage("notifications");

  // Handle logout
  logoutButton.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "login.html";
  });

  const loggedInUser = getSessionStorage("username");

  if (!loggedInUser) {
    alert("Login First");
    window.location.href = "login.html";
  }

  let posts = getPosts();
  displayPosts(posts, loggedInUser);
  displayNotifications();

  // Event delegation for like, comment buttons, and comment forms
  postFeed.addEventListener("click", (event) => {
    const likeButton = event.target.closest(".like-button");
    const commentButton = event.target.closest(".comment-button");

    if (likeButton) {
      const postElement = likeButton.closest(".post");
      const postIndex = Array.from(postFeed.children).indexOf(postElement);
      const message = `${loggedInUser.username} liked a post`;
      addNotification(message, postIndex, loggedInUser.username);
      displayNotifications();
      toggleLike(postIndex, posts);
    }

    if (commentButton) {
      const postElement = commentButton.closest(".post");
      const postIndex = Array.from(postFeed.children).indexOf(postElement);
      toggleComments(postIndex, posts);
    }
  });

  postFeed.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target.closest(".comment-form");
    if (form) {
      const commentBox = form.querySelector('input[type="text"]');
      const commentText = commentBox.value.trim();
      if (commentText !== "") {
        const postElement = form.closest(".post");
        const postIndex = Array.from(postFeed.children).indexOf(postElement);
        posts[postIndex].comments.push(commentText);
        setLocalStorage("posts", posts);
        commentBox.value = "";
        updatePost(postIndex, posts);
        const message = `${loggedInUser.username} commented`;
        addNotification(message, postIndex, loggedInUser.username);
        displayNotifications();
      }
    }
  });

  newPostForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const text = document.querySelector("textarea").value;
    const imageFile = document.getElementById("post-image").files[0];
    let imageUrl = null;

    if (imageFile) {
      try {
        imageUrl = await getBase64(imageFile);
      } catch (error) {
        console.error("Error reading file", error);
      }
    }

    const post = {
      id: posts.length + 1,
      text,
      email: loggedInUser.email,
      username: loggedInUser.username,
      image: imageUrl,
      likeCount: 0,
      comments: [],
      showComments: false,
      timestamp: new Date().toLocaleString(),
    };

    savePost(post);
    posts = getPosts();
    newPostForm.reset();
    displayPosts(posts, loggedInUser);
    const message = `${loggedInUser.username} added a new post`;
    addNotification(message, post.id, loggedInUser.username);
    displayNotifications();
  });

  function displayNotifications() {
    const notificationList = document.getElementById("notification-list");
    let notifications = getLocalStorage("notifications");
    notifications = notifications.filter((notification) => !notification.seen);

    notificationList.innerHTML = "";
    notifications.forEach((notification, index) => {
      const notificationItem = document.createElement("li");
      notificationItem.classList.add("notification-item"); // Add animation class
      notificationItem.innerHTML = `
          <span>${notification.message}</span>
          <button class="dismiss-notification" data-index="${index}">&times;</button>
      `;
      notificationList.appendChild(notificationItem);
    });
  }

  // Add event listeners to dismiss buttons
  notificationList.addEventListener("click", (event) => {
    if (event.target.classList.contains("dismiss-notification")) {
      const index = event.target.getAttribute("data-index");
      console.log("🚀 ~ notificationList.addEventListener ~ index:", index);
      notifications.splice(index, 1); // Remove notification from array

      setLocalStorage("notifications", notifications);
      event.target.parentElement.remove(); // Remove from UI
    }
  });
});
