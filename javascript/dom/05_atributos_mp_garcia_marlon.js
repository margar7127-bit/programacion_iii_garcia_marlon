const plato = document.getElementById("plato");
const cambiar = document.getElementById("cambiar");
const verCategoria = document.getElementById("verCategoria");
const categoria = document.getElementById("categoria");

cambiar.addEventListener("click", function () {
    if (plato.getAttribute("title") == "Encebollado") {
        plato.setAttribute("src", "hornado.jpg");
        plato.setAttribute("title", "Hornado");
        plato.dataset.categoria = "Plato fuerte";
    } else {
        plato.setAttribute("src", "encebollado.jpg");
        plato.setAttribute("title", "Encebollado");
        plato.dataset.categoria = "Sopa";
    }
});

verCategoria.addEventListener("click", function () {
    categoria.textContent = "Categoría: " + plato.dataset.categoria;
});

const local = document.getElementById("local");
const activarLocal = document.getElementById("activarLocal");

activarLocal.addEventListener("click", function () {
    if (local.textContent == "Restaurante Cerrado") {
        local.style.backgroundColor = "green";
        local.style.color = "white";
        local.textContent = "Restaurante Abierto";
    } else {
        local.style.backgroundColor = "red";
        local.style.color = "white";
        local.textContent = "Restaurante Cerrado";
    }
});
