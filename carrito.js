function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.querySelector(".products");
    container.innerHTML = "";

    cart.forEach((product, index) => {
        container.innerHTML += `
            <div class="product">
                <img src="${product.imagen}" alt="${product.nombre}">
                <div class="product-info">
                    <h3>${product.nombre}</h3>
                    <p>Precio: $${product.precio}</p>
                    <label for="quantity${index}">Cantidad:</label>
                    <select id="quantity${index}" class="quantity" data-price="${product.precio}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>
        `;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceContainer = document.getElementById('totalPrice');
    const clearCartButton = document.getElementById('clearCart');
    const checkoutButton = document.getElementById('checkout');

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = ""; // Limpiar el contenedor

        let totalPrice = 0;

        cart.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');
            productDiv.innerHTML = `
                <img src="${product.imagen}" alt="${product.nombre}">
                <p>${product.nombre}</p>
                <p>Precio: $${product.precio}</p>
                <button data-index="${index}" class="removeFromCart">Eliminar</button>
            `;
            cartItemsContainer.appendChild(productDiv);
            totalPrice += parseFloat(product.precio);
        });

        totalPriceContainer.innerHTML = `<h3>Total: $${totalPrice.toFixed(2)}</h3>`;
    }

    // Eliminar un producto del carrito
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('removeFromCart')) {
            const index = event.target.dataset.index;
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1); // Eliminar el producto del carrito
            localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar el carrito en localStorage
            renderCart(); // Volver a renderizar el carrito
        }
    });

    // Vaciar el carrito
    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart'); // Limpiar el carrito en localStorage
        renderCart(); // Volver a renderizar el carrito
    });

    // Función para finalizar la compra
    checkoutButton.addEventListener('click', () => {
        alert('Gracias por su compra!');
        localStorage.removeItem('cart'); // Limpiar el carrito después de la compra
        renderCart(); // Volver a renderizar el carrito
    });

    // Renderizar el carrito al cargar la página
    renderCart();
});

// Cargar productos en el carrito
renderCart();
