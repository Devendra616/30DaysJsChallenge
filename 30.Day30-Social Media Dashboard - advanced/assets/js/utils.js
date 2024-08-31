// Utility function to get data from localStorage
export function getLocalStorage(key, defaultValue = []) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

// Utility function to set data in localStorage
export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Utility function to get data from session storage
export function getSessionStorage(key, defaultValue = []) {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

// Utility function to set data in session storage
export function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

// Utility function to create an element with classes
export function createElement(tag, classes = [], innerHTML = "") {
  const element = document.createElement(tag);
  classes.forEach((cls) => element.classList.add(cls));
  element.innerHTML = innerHTML;
  return element;
}

// Utility function to get base64 string from file
export function getBase64(file) {
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

// Utility function to add Notification to local storage
export function addNotification(message, postId, fromUser) {
  let notifications = getLocalStorage("notifications");
  const notification = {
    id: notifications.length + 1,
    postId,
    message, // 'like', 'comment', 'reply'
    fromUser,
    timestamp: new Date().toLocaleString(),
    seen: false,
  };
  notifications.push(notification);
  setLocalStorage("notifications", notifications);
  // localStorage.setItem("notifications", JSON.stringify(notifications));
}
