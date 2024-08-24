document.addEventListener("DOMContentLoaded", async () => {
  // get existing cart from local storage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartCount();

  fetch("./assets/products.json")
    .then((response) => response.json())
    .then((products) => {
      const productListing = document.querySelector(".product-listing");

      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.imageUrl;
        productCard.appendChild(productImage);

        const productTitle = document.createElement("h3");
        productTitle.textContent = product.name;
        productCard.appendChild(productTitle);

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price:  $${product.price}`;
        productCard.appendChild(productPrice);

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productCard.appendChild(productDescription);

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => {
          addToCart(product.id);
        });
        productCard.appendChild(addToCartButton);

        productListing.appendChild(productCard);
      });

      function addToCart(productId) {
        const existingItem = cart.find(
          (item) => item.id === parseInt(productId)
        );
        if (existingItem) {
          existingItem.quantity++;
        } else {
          const product = products.find((product) => product.id === productId);
          cart.push({
            id: parseInt(product.id),
            name: product.name.trim(),
            price: parseFloat(product.price),
            quantity: 1,
          });
        }
        console.log(`Product ${productId} added to cart`);
        // update cart in local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
      }
    })
    .catch((error) => console.error("Error in fetching products", error));

  function updateCartCount() {
    const cartCountElement = document.querySelector(".cart-count");
    const totalItems = cart.length;
    cartCountElement.textContent = totalItems;
  }
});
