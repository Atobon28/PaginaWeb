const params = new URLSearchParams(window.location.search)
const nameFromUrl = params.get("name") 

function getProduct(){
    for(let i = 0; i < data.length; i++){
        let map = data [i]
        let title = map["title"]
        if(title === nameFromUrl) {
            let product =  new Cafes(map ["nombre"], map ["descripcion"], map ["tostion"], map ["gramos"], map ["cantidad"], map ["precio"], map ["imagen"] )
            return product
        }
        
    }
}

function RenderProducts(){
    let product = getProduct()

    let titleH3 = document.getElementById("title")
    titleH1.innerHTML = product.title

    let descriptionP = document.getElementById("description")
    descriptionP .innerHTML = product.descriptionP

    letmainImg = document.getElementById("linea")
    mainImg.src = product.imagen 
}


getProduct()
RenderAllProducts()
