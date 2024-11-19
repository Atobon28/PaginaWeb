let Products = []

// Función para parsear los productos de cafés
function ParseProductosToProducts() {
    for (let i = 0; i < cafes.length; i++) {
        let map = cafes[i];
        console.log(map);
        let product = new Cafes(map["nombre"], map["descripcion"], map["tostion"], map["gramos"], map["cantidad"], map["precio"], map["imagen"]);
        Products.push(product);
    }
}

// Función para renderizar todos los productos
function RenderAllProducts() {
    let container = document.getElementById("grid-productos");
    for (let i = 0; i < Products.length; i++) {
        let Producto = Products[i];
        container.innerHTML += Producto.htmlCard(i);
    }
}

// Función para agregar al carrito
function addToCart(product) {
    // Obtiene el carrito actual desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Agrega el producto al carrito
    cart.push(product);

    // Guarda el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.nombre} ha sido agregado al carrito.`);
}

// Función para manejar la selección de un producto
function productSelected(pos) {
    let productselected = Products[pos];
    window.location = `./Producto1.html?name=${encodeURIComponent(productselected.nombre)}`;
}

// Función para parsear los productos "otros"
let Otricos = []
function ParseProductosToOtricos() {
    for (let i = 0; i < otros.length; i++) {
        let map = otros[i];
        console.log(map);
        let product = new Otros(map["nombre"], map["descripcion"], map["cantidad"], map["precio"], map["imagen"]);
        Otricos.push(product);
    }
}

// Función para renderizar los productos "otros"
function RenderAllOtricos() {
    let container = document.getElementById("grid-productos");
    for (let i = 0; i < Otricos.length; i++) {
        let Producto = Otricos[i];
        container.innerHTML += Producto.htmlCard(i);
    }
}

// Función para manejar la selección de un producto "otros"
function OtricosProductselected(pos) {
    let productselected = Otricos[pos];
    window.location = `./Producto1.html?name=${encodeURIComponent(productselected.nombre)}`;
}

// Llamadas a las funciones para cargar y renderizar los productos
ParseProductosToProducts();
RenderAllProducts();
ParseProductosToOtricos();
RenderAllOtricos();
