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

function productSelected(pos) {
    let productselected = Products[pos];
    window.location = `./Producto1.html?name=${encodeURIComponent(productselected.nombre)}`;
}

function OtricosProductselected(pos) {
    let productselected = Otricos[pos];
    window.location = `./Producto1.html?name=${encodeURIComponent(productselected.nombre)}`;
}

document.addEventListener('DOMContentLoaded', () => {
   

    document.getElementById('searchButton').addEventListener('click', searchProducts);
    document.getElementById('searchInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchProducts();
        }
    });
});

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; 

    const allProducts = [...Products, ...Otricos];
    const filteredProducts = allProducts.filter(product => {
        return product.nombre.toLowerCase().includes(query);
    });

    if (filteredProducts.length > 0) {
        resultsContainer.innerHTML = `
            <div class="section productos">
                <h1>Resultados de búsqueda</h1>
                <div class="grid-productos">
                    ${filteredProducts.map((product, index) => `
                        <div class="producto" onclick="navigateToProductDetail('${encodeURIComponent(product.nombre)}')">
                            <i class="fas fa-heart icono-esquinaa"></i>
                            <img src="${product.imagen}" alt="${product.nombre}">
                            <h2>${product.nombre}</h2>
                            <p>${product.descripcion || ''}</p>
                            <p class="precio">$${product.precio}</p>
                            <i class="fas fa-plus plus1"></i>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = `
            <div class="section productos">
                <h1>Resultados de búsqueda</h1>
                <p style="text-align: center; font-family: 'Poppins', sans-serif; color: #3c2307;">
                    No se encontraron productos que coincidan con tu búsqueda.
                </p>
            </div>
        `;
    }
}

function navigateToProductDetail(productName) {
    window.location = `./Producto1.html?name=${productName}`;
}
