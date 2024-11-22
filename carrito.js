function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.querySelector(".products");
    let totalContainer = document.querySelector(".total-section");
    
    container.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        // Remove $ and convert to number, then multiply by quantity
        let price = parseFloat(product.precio.replace(/\./g, ''));
        let quantity = parseInt(product.cantidad) || 1;
        let productTotal = price * quantity;
        total += productTotal;

        container.innerHTML += `
            <div class="product">
                <img src="${product.imagen}" alt="${product.nombre}">
                <div class="product-info">
                    <h3>${product.nombre}</h3>
                    <p>Precio: $${product.precio}</p>
                    <label for="quantity${index}">Cantidad:</label>
                    <select id="quantity${index}" class="quantity" 
                            onchange="updateQuantity(${index}, this.value)">
                        ${[1,2,3,4,5].map(num => 
                            `<option value="${num}" ${num == quantity ? 'selected' : ''}>${num}</option>`
                        ).join('')}
                    </select>
                    <p>Subtotal: $${productTotal.toLocaleString()}</p>
                </div>
                <button onclick="removeProduct(${index})">Eliminar</button>
            </div>
        `;
    });

    totalContainer.innerHTML = `
        <h2>Total de la Compra</h2>
        <p>Total: $${total.toLocaleString()}</p>
        <button class="pay-button" onclick="checkout()">Pagar</button>
    `;
}

function updateQuantity(index, newQuantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].cantidad = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function removeProduct(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function checkout() {
    alert("Gracias por tu compra!");
    localStorage.removeItem("cart");
    renderCart();
}

// Load cart on page load
document.addEventListener('DOMContentLoaded', renderCart);