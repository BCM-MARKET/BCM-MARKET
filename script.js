function buscarProducto() {

    let texto =
        document
        .getElementById("buscador")
        .value
        .toLowerCase();

    let productos =
        document
        .getElementsByClassName("producto");

    for (let i = 0; i < productos.length; i++) {

        let contenido =
            productos[i]
            .innerText
            .toLowerCase();

        if (contenido.includes(texto)) {
            productos[i].style.display = "block";
        } else {
            productos[i].style.display = "none";
        }

    }
}