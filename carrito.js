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

// Cargar productos en el carrito
renderCart();
