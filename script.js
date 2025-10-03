const cart = {};

function addToCart(product, price) {
  if (cart[product]) {
    cart[product].quantity += 1;
  } else {
    cart[product] = {
      price: price,
      quantity: 1
    };
  }
  renderCart();
}

function removeFromCart(product) {
  if (cart[product]) {
    cart[product].quantity -= 1;
    if (cart[product].quantity <= 0) {
      delete cart[product];
    }
  }
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById("cart");
  const totalDisplay = document.getElementById("total");
  cartContainer.innerHTML = "";

  let total = 0;

  for (let product in cart) {
    const item = cart[product];
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${product} x ${item.quantity} = $${itemTotal.toFixed(2)}</span>
      <span>
        <button onclick="addToCart('${product}', ${item.price})">+</button>
        <button onclick="removeFromCart('${product}')">-</button>
      </span>
    `;
    cartContainer.appendChild(div);
  }

  totalDisplay.textContent = total.toFixed(2);
}
