const cafes = [
    { nombre: "Castillo Lavado", descripcion: "Café de especialidad", precio: 50000, imagen: "./IMAGENES/mockupnaranja.png" },
    { nombre: "AeroPress", descripcion: "Equipo de preparación", precio: 300000, imagen: "./IMAGENES/AeroPress.png" },
    { nombre: "YPI Natural", descripcion: "Café de especialidad", precio: 90000, imagen: "./IMAGENES/mockupnegro.png" }
];

// Función para agregar al carrito
function addToCart(index) {
    const product = cafes[index]; // Obtenemos el producto

    // Obtener el carrito del localStorage (si no existe, inicializamos uno vacío)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Añadir el producto al carrito
    cart.push(product);

    // Guardar el carrito en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.nombre} ha sido agregado al carrito.`);
}
