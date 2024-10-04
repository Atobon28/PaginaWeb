class Cafes { 
    constructor(nombre, descripcion, tostion, gramos, cantidad, precio, imagen ) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.tostion = tostion
        this.gramos = gramos
        this.cantidad = cantidad
        this.precio = precio
        this.imagen = imagen
     }

     htmlCard() {
    
        return `
        <a href="./Producto1.html" class="producto">
                    <i class="fa-brands fa-gratipay icono-esquinaa corazon1"></i>
                    <img src="${this.imagen}" alt="Producto 1">
                    <p>${this.nombre}</p>
                    <p class="precio">${this.precio}</p>
                    <i class="fa-solid fa-circle-plus plus1"></i>
                </a>
        `
    }
}

class Otros { 
    constructor(nombre, descripcion, cantidad, precio, imagen ) { 
        this.nombre = nombre
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.precio = precio
        this.imagen = imagen
    }

    htmlCard() {
    
        return `
        <a href="./Producto1.html" class="producto">
                    <i class="fa-brands fa-gratipay icono-esquinaa corazon1"></i>
                    <img src="${this.imagen}" alt="Producto 1">
                    <p>${this.nombre}</p>
                    <p class="precio">${this.precio}</p>
                    <i class="fa-solid fa-circle-plus plus1"></i>
                </a>
        `
    }
}

