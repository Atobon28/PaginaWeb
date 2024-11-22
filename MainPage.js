const cafes = [
    { nombre: "Castillo Lavado", descripcion: "Café de especialidad", precio: 50000, imagen: "./IMAGENES/mockupnaranja.png" },
    { nombre: "AeroPress", descripcion: "Equipo de preparación", precio: 300000, imagen: "./IMAGENES/AeroPress.png" },
    { nombre: "YPI Natural", descripcion: "Café de especialidad", precio: 90000, imagen: "./IMAGENES/mockupnegro.png" }
];

function addToCart(index, type) {
    let product;
    if (type === 'cafe') {
        product = {...cafes[index]}; // Create a copy
    } else if (type === 'otro') {
        product = {...otros[index]}; // Create a copy
    }

    // Get existing cart or create new
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.nombre === product.nombre);

    if (existingProductIndex !== -1) {
        // Increase quantity if product exists
        let existingProduct = cart[existingProductIndex];
        existingProduct.cantidad = (parseInt(existingProduct.cantidad) || 1) + 1;
    } else {
        // Add new product with initial quantity
        product.cantidad = "1";
        cart.push(product);
    }

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optional: Show confirmation
    alert(`${product.nombre} agregado al carrito`);
}