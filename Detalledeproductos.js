const params = new URLSearchParams(window.location.search)
const nameFromUrl = params.get("name")

function getProduct() {
    for (let i = 0; i < cafes.length; i++) {
        let map = cafes[i]
        let title = map["nombre"]
        if (title === nameFromUrl) {
            
            let product = new Cafes(
                map["nombre"],
                map["descripcion"],
                map["tostion"],
                map["gramos"],
                map["cantidad"],
                map["precio"],
                map["imagen"]
            )
            return product
        }
    }
    return null 
}

function renderProduct() {
    let product = getProduct(); 
    
    if (product) {
        
        let titleH1 = document.getElementById("nombre");
        if (titleH1) titleH1.innerHTML = product.nombre;

        
        let descriptionP = document.getElementById("descripcion");
        if (descriptionP) descriptionP.innerHTML = product.descripcion;

       
        let tostionH3 = document.getElementById("tostion"); 
        if (tostionH3) tostionH3.innerHTML = product.tostion;

        
        let gramosP = document.getElementById("gramos"); 
         if (gramosP) gramosP.innerHTML = `${product.gramos || '350'} gr`; 

        
        let cantidadSelect = document.getElementById("cantidad"); 
        if (cantidadSelect) {
            cantidadSelect.value = product.cantidad || "1"; 
        }

       
        let mainImg = document.getElementById("imagen");
        if (mainImg) mainImg.src = product.imagen; 
    } else {
        console.error("Producto no encontrado");
    }
}


window.onload = function() {
    renderProduct();
}



