const socket = new WebSocket("ws://localhost:3005");
let currentUser;
let isConnected = false;

const joinButton = document.getElementById("join-button");
const chatWindow = document.getElementById("chat-window");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");
const disconnectButton = document.getElementById("disconnect-button");
const connectionStatus = document.getElementById("connection-status");

// Function to send messages
function sendMessage(message) {
  if (!currentUser || currentUser.length === 0) {
    alert("Please enter a username before sending messages!");
    return; // Prevent sending if no username
  }

  message = JSON.stringify({
    username: currentUser,
    message,
  });
  socket.send(message);
}

joinButton.addEventListener("click", (event) => {
  currentUser = document.getElementById("username-input").value.trim();
});

disconnectButton.addEventListener("click", () => {
  socket.close();
});

function updateConnectionStatus(isConnected) {
  if (isConnected) {
    disconnectButton.disabled = false;
    // Update UI to show connected status
    connectionStatus.textContent = "Connected";
    connectionStatus.classList.remove("offline");
    connectionStatus.classList.add("online");
  } else {
    disconnectButton.disabled = true;
    // Update UI to show disconnected status
    connectionStatus.textContent = "Disconnected";
    connectionStatus.classList.remove("online");
    connectionStatus.classList.add("offline");
  }
}

// Handle connection open
socket.onopen = () => {
  console.log("WebSocket connected");
  isConnected = true;
  updateConnectionStatus(true);
};

// Handle messages received from the server
socket.onmessage = (event) => {
  console.log("Received message:", event.data);
  // You can append the received message to the chat window here
  displayMessage(event.data);
};

// Handle connection close
socket.onclose = () => {
  isConnected = false;
  updateConnectionStatus(false);
  console.log("WebSocket disconnected");
};

function displayMessage(data) {
  console.log("curent", currentUser);
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  let { username, message } = JSON.parse(data);
  if (username === currentUser) {
    messageElement.classList.add("my-message");
    username = "You";
  } else {
    messageElement.classList.add("other-message");
  }
  messageElement.textContent = `${username}: ${message}`;
  chatWindow.appendChild(messageElement);

  // Scroll to bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage(messageInput.value);
    messageInput.value = "";
  }
});

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  sendMessage(messageInput.value);
  messageInput.value = "";
});
