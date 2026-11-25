console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);

titulo.textContent = "Restaurante La Casona - Cocina Tradicional";

/*--------------------------*/
const estado = document.getElementById("estado");
const botonAbrir = document.getElementById("botonAbrir");

botonAbrir.addEventListener("click", function () {

    console.log("Ejecutando click!");
    estado.textContent = "¡Restaurante Abierto!";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de apertura del restaurante terminado");

});

/*---------------------------*/

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");

botonMensaje.addEventListener("click", function () {
    mensaje.textContent = "Mesa lista para atenderlo";
});

/*------------------------------*/

let pedidos = 0;
const contador = document.getElementById("contador");
const nuevoPedido = document.getElementById("nuevoPedido");
nuevoPedido.addEventListener("click", function () {
    pedidos += 1;
    contador.textContent = pedidos;
});
