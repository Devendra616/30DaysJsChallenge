document.addEventListener("DOMContentLoaded", () => {
  const cartItemsList = document.querySelector(".cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const checkoutButton = document.querySelector(".checkout-button");
  const checkoutForm = document.querySelector(".checkout-form");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let isCartUpdated = false;
  updateCartDisplay();

  function updateCartDisplay() {
    cartItemsList.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      const cartItemElement = document.createElement("li");
      cartItemElement.classList.add("cart-item");

      const productNameElement = document.createElement("span");
      productNameElement.classList.add("product-name");
      productNameElement.textContent = item.name;

      const quantityControlsElement = document.createElement("div");
      quantityControlsElement.classList.add("quantity-controls");

      const decreaseQuantityButton = document.createElement("button");
      decreaseQuantityButton.textContent = "-";
      decreaseQuantityButton.addEventListener("click", () => {
        decreaseQuantity(item.id);
      });

      const quantityElement = document.createElement("span");
      quantityElement.classList.add("quantity");
      quantityElement.textContent = item.quantity;
      const increaseQuantityButton = document.createElement("button");
      increaseQuantityButton.textContent = "+";
      increaseQuantityButton.addEventListener("click", () => {
        increaseQuantity(item.id);
      });

      quantityControlsElement.appendChild(decreaseQuantityButton);
      quantityControlsElement.appendChild(quantityElement);
      quantityControlsElement.appendChild(increaseQuantityButton);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        removeFromCart(item.id);
      });

      cartItemElement.appendChild(productNameElement);
      cartItemElement.appendChild(quantityControlsElement);
      cartItemElement.appendChild(removeButton);

      cartItemsList.appendChild(cartItemElement);

      total += item.price * item.quantity;
      total = parseFloat(total.toFixed(2));
    });

    cartTotalElement.textContent = `$${total}`;

    if (isCartUpdated) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  function increaseQuantity(productId) {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      item.quantity++;
      isCartUpdated = true;
      updateCartDisplay();
    }
  }

  function decreaseQuantity(productId) {
    const item = cart.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
      isCartUpdated = true;
      updateCartDisplay();
    }
  }

  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    isCartUpdated = true;
    updateCartDisplay();
  }

  checkoutButton.addEventListener("click", (event) => {
    document.querySelector(".checkout").style.display = "block";
  });

  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;

    // Simulate checkout process
    console.log("Checkout initiated:", { name, address, contact });

    // Display confirmation message
    showAlert();

    // Reset form
    checkoutForm.reset();
    // empty the stored cart when order is placed
    localStorage.removeItem("cart");
  });

  function showAlert() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.style.display = "flex";

    const closeButton = alertContainer.querySelector(".close-alert");
    closeButton.addEventListener("click", () => {
      alertContainer.style.display = "none";

      window.location.href = "index.html";
    });
  }
});
