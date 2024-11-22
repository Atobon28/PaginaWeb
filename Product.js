class Cafes { 
    constructor(nombre, descripcion, tostion, gramos, cantidad, precio, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tostion = tostion;
        this.gramos = gramos;
        this.cantidad = cantidad || "1";
        this.precio = precio;
        this.imagen = imagen;
    }

    htmlCard(pos) {
        return `
        <div class="producto" onclick="productSelected(${pos})"> 
            <i class="fa-brands fa-gratipay icono-esquinaa corazon1"></i>
            <img src="${this.imagen}" alt="Producto 1">
            <p>${this.nombre}</p>
            <p class="precio">${this.precio}</p>
            <i class="fa-solid fa-circle-plus plus1" onclick="event.stopPropagation(); addToCart(${pos}, 'cafe')"></i>
        </div>
        `;
    }
}

class Otros { 
    constructor(nombre, descripcion, cantidad, precio, imagen) { 
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad || "1";
        this.precio = precio;
        this.imagen = imagen;
    }

    htmlCard(pos) {
        return `
        <div class="producto" onclick="OtricosProductselected(${pos})">
            <i class="fa-brands fa-gratipay icono-esquinaa corazon1"></i>
            <img src="${this.imagen}" alt="Producto 1">
            <p>${this.nombre}</p>
            <p class="precio">${this.precio}</p>
            <i class="fa-solid fa-circle-plus plus1" onclick="event.stopPropagation(); addToCart(${pos}, 'otro')"></i>
        </div>
        `;
    }
}