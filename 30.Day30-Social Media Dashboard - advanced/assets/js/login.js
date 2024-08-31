const authForm = document.querySelector(".auth-form");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

document.addEventListener("DOMContentLoaded", () => {
  const toggleFormLinks = document.querySelectorAll(".toggle-form a");

  toggleFormLinks.forEach((link) => {
    link.addEventListener("click", toggleForms);
  });

  loginForm.addEventListener("submit", handleLogin);
  signupForm.addEventListener("submit", handleSignup);
});

const ls = localStorage.getItem("users");
const users = ls ? JSON.parse(ls) : [];

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find((user) => user.email === email);
  if (!user) {
    alert(`Email ${email} is not registered, please signup first`);
    return false;
  } else if (user.password !== password) {
    alert(`Wrong password`);
    return false;
  } else {
    // Store user information in sessionStorage
    sessionStorage.setItem(
      "username",
      JSON.stringify({ email: user.email, username: user.username })
    );
    document.getElementById("login-form").reset();
    // Redirect to dashboard
    window.location.href = "dashboard.html";
  }
}

function handleSignup(event) {
  event.preventDefault();

  const email = document.getElementById("sEmail").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("sPassword").value;
  const confirmPassword = document.getElementById("cnfSPassword").value;

  if (!(username && username.length > 0)) {
    alert("check your Username");
    return false;
  }

  if (!(email && email.length > 0)) {
    alert("check your Email Id");
    return false;
  }

  if (!(password && password.length > 0)) {
    alert("check your Password");
    return false;
  }

  if (!(confirmPassword && confirmPassword.length > 0)) {
    alert("check your Confirm Password");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Password and confirm password must be same");
    return false;
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    alert("User already exists");
    return false;
  }

  const user = { email, password, username };
  // Store user information in localStorage for future logins
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("signup-form").reset();
  // Redirect to login page or display a success message
  alert("Signup successful!");
  toggleForms();
}

function toggleForms() {
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
}
