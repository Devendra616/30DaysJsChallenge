document.addEventListener("DOMContentLoaded", () => {
  const newPostForm = document.querySelector(".new-post-form form");
  const postFeed = document.querySelector(".post-feed");
  const logoutButton = document.getElementById("logout-button");

  logoutButton.addEventListener("click", () => {
    // Clear session storage or local storage
    sessionStorage.clear();
    window.location.href = "login.html";
  });

  const loggedInUser = sessionStorage.getItem("username")
    ? JSON.parse(sessionStorage.getItem("username"))
    : null;
  console.log("🚀 ~ loggedInUser:", loggedInUser);

  if (!loggedInUser) {
    alert("Login First");
    window.location.href = "login.html";
  }

  const posts = localStorage.getItem("posts")
    ? JSON.parse(localStorage.getItem("posts"))
    : [];
  displayPosts();

  const likeButtons = document.querySelectorAll(".like-button");
  const commentButtons = document.querySelectorAll(".comment-button");

  likeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      toggleLike(index);
    });
  });

  commentButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      toggleComments(index);
    });
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

    // Create a new post object
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

    // Add the post to the array
    posts.push(post);

    // Reset the form
    newPostForm.reset();
    // Store the updated posts in localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Display the new post
    displayPosts();
  });

  function displayPosts() {
    postFeed.innerHTML = "";

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      if (loggedInUser && post.email === loggedInUser.email) {
        postElement.classList.add("my-post");
      }

      const postContent = `<div class="post-content">
        <p>${post.text}</p>
         ${post.image ? `<img src="${post.image}" alt="Post Image">` : ""}
      </div>
  
      <div class="post-metadata">
        <span>${post.username}</span>
        <span>${post.timestamp}</span>
      </div>
  
      <div class="post-actions">
        <button class="like-button">
          <i class="fa-solid fa-heart"></i> Like (<span class="like-count">${
            post.likeCount
          }</span>)
        </button>
        <button class="comment-button">
          <i class="fa-solid fa-comment"></i> Comment (<span class="comment-count">${
            post.comments.length
          }</span>)
        </button>      
      </div>
      <div class="comments">
          <ul>
          </ul>
          <form class="comment-form">
              <input type="text" placeholder="Add a comment">
              <button type="submit">Comment</button>
          </form>
      </div>
      `;

      postElement.innerHTML = postContent;
      postFeed.appendChild(postElement);
    });
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        return reject(new Error("No file selected"));
      }

      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Error reading file"));
      reader.readAsDataURL(file);
    });
  }

  function toggleLike(postIndex) {
    const likeBtn = document.querySelectorAll(".fa-heart")[postIndex];
    posts[postIndex].likeCount = likeBtn.classList.contains("my-like")
      ? posts[postIndex].likeCount - 1
      : posts[postIndex].likeCount + 1;

    likeBtn.classList.toggle("my-like");

    localStorage.setItem("posts", JSON.stringify(posts));
    updatePost(postIndex);
  }

  function toggleComments(postIndex) {
    posts[postIndex].showComments = !posts[postIndex].showComments;
    updatePost(postIndex);
  }

  function updatePost(postIndex) {
    const postElement = document.querySelectorAll(".post")[postIndex];
    const likeCountElement = postElement.querySelector(".like-count");
    const commentCountElement = postElement.querySelector(".comment-count");
    const commentsSection = postElement.querySelector(".comments");
    const commentsList = commentsSection.querySelector("ul");
    commentsList.innerHTML = "";

    // Update like count
    likeCountElement.textContent = posts[postIndex].likeCount;

    // Update comment count
    commentCountElement.textContent = posts[postIndex].comments.length;

    // Toggle comments display

    if (posts[postIndex].showComments) {
      commentsSection.style.display = "block";

      // Render comments
      posts[postIndex].comments.forEach((comment) => {
        const commentItem = document.createElement("li");
        commentItem.textContent = comment;
        commentsList.appendChild(commentItem);
      });
    } else {
      commentsSection.style.display = "none";
      commentsList.innerHTML = "";
    }
  }

  // add comments
  const commentForms = document.querySelectorAll(".comment-form");
  commentForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const commentBox = form.querySelector('input[type="text"]');
      const commentText = commentBox.value.trim();
      if (commentText !== "") {
        const currentPost = form.closest(".post");
        const postIndex = Array.from(currentPost.parentNode.children).indexOf(
          currentPost
        );
        posts[postIndex].comments.push(commentText);
        localStorage.setItem("posts", JSON.stringify(posts));
        commentBox.value = "";
        updatePost(postIndex);
      }
    });
  });
});
