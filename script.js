```javascript
// =====================================
// BCM MARKET
// Buscador de productos
// =====================================

function buscarProducto() {

    let filtro = document
        .getElementById("buscador")
        .value
        .toLowerCase();

    let productos = document.querySelectorAll(".producto");

    productos.forEach(function(producto){

        let nombre = producto
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if(nombre.includes(filtro)){
            producto.style.display = "block";
        }else{
            producto.style.display = "none";
        }

    });

}

// =====================================
// Mensaje de bienvenida
// =====================================

window.onload = function(){

    console.log("BCM MARKET cargado correctamente");

};

// =====================================
// Botón WhatsApp flotante
// =====================================

const whatsapp = document.querySelector(".whatsapp-float");

if(whatsapp){

    whatsapp.addEventListener("click", function(){

        console.log("Abriendo WhatsApp");

    });

}
```
