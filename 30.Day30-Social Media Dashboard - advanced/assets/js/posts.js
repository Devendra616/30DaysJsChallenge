import { getLocalStorage, setLocalStorage, createElement } from "./utils.js";

export function getPosts() {
  return getLocalStorage("posts");
}

export function savePost(post) {
  const posts = getPosts();
  posts.push(post);
  setLocalStorage("posts", posts);
}

export function displayPosts(posts, loggedInUser) {
  const postFeed = document.querySelector(".post-feed");
  postFeed.innerHTML = "";
  posts.forEach((post) => {
    const postElement = createPostElement(post, loggedInUser);
    postFeed.appendChild(postElement);
  });
}

function createPostElement(post, loggedInUser) {
  const postElement = createElement("div", ["post"]);

  if (loggedInUser && post.email === loggedInUser.email) {
    postElement.classList.add("my-post");
  }

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
      <div class="comments" style="display: none;">
        <ul></ul>
        <form class="comment-form">
          <input type="text" placeholder="Add a comment">
          <button type="submit">Comment</button>
        </form>
      </div>
    `;

  return postElement;
}

export function updatePost(postIndex, posts) {
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
    posts[postIndex].comments.forEach((comment) => {
      const commentItem = createElement("li", [], comment);
      commentsList.appendChild(commentItem);
    });
  } else {
    commentsSection.style.display = "none";
  }
}

export function toggleLike(postIndex, posts) {
  const likeBtn = document.querySelectorAll(".fa-heart")[postIndex];
  posts[postIndex].likeCount = likeBtn.classList.contains("my-like")
    ? posts[postIndex].likeCount - 1
    : posts[postIndex].likeCount + 1;

  likeBtn.classList.toggle("my-like");
  setLocalStorage("posts", posts);
  updatePost(postIndex, posts);
}

export function toggleComments(postIndex, posts) {
  posts[postIndex].showComments = !posts[postIndex].showComments;
  updatePost(postIndex, posts);
}
