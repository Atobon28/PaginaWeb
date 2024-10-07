let Products = []
function ParseProductosToProducts () {
    for (let i = 0; i < cafes.length; i++) {
        let map = cafes [i]
        console.log (map)
        let product =  new Cafes(map ["nombre"], map ["descripcion"], map ["tostion"], map ["gramos"], map ["cantidad"], map ["precio"], map ["imagen"] )
        Products.push (product)
    }
}

function RenderAllProducts () {
    let container = document.getElementById("grid-productos")
    for (let i = 0; i < Products.length; i++) {
        let Producto = Products [i]
        container.innerHTML += Producto.htmlCard(i)
    }
}

function productSelected(pos){
    let productselected = Products[pos]
    window.location = "./Producto1.html?name=" + productselected.nombre
}

ParseProductosToProducts()
RenderAllProducts()

let Otricos = []
function ParseProductosToOtricos () {
    for (let i = 0; i < otros.length; i++) {
        let map = otros [i]
        console.log (map)
        let product =  new Otros(map ["nombre"], map ["descripcion"], map ["cantidad"], map ["precio"], map ["imagen"] )
        Otricos.push (product)
    }
}

function RenderAllOtricos () {
    let container = document.getElementById("grid-productos")
    for (let i = 0; i < Otricos.length; i++) {
        let Producto = Otricos [i]
        container.innerHTML += Producto.htmlCard(i)
    }
}

function OtricosProductselected(pos){
    let productselected = Products[pos]
    window.location = "./Producto1.html?name=" + productselected.title
}

ParseProductosToOtricos()
RenderAllOtricos()