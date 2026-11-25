const inventario = document.getElementById("inventario");
const cocinero = document.getElementById("cocinero");
const cocina = document.getElementById("cocina");

inventario.textContent = "Inventario: 100";
cocinero.textContent = "Chef: Carlos Pérez";
cocina.textContent = "Cocina abierta";

/*--------Selección a través del id, class o etiqueta----------*/

const plato = document.querySelector(".plato");
plato.textContent = "Encebollado mixto";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Proceso de Cocina";

const especial = document.querySelector("#especial");
especial.textContent = "Preparando el especial del día";

/*----------------------------*/

const estadoMesa = document.querySelector("#mesa5 .estado");
estadoMesa.textContent = "Pedido en preparación";

/*----------------------------*/

const ingredientes = document.querySelectorAll(".ingrediente");
console.log(ingredientes);
console.log(ingredientes.length);

console.log(ingredientes[0].textContent);
console.log(ingredientes[1].textContent);
console.log(ingredientes[2].textContent);
console.log(ingredientes[3].textContent);
console.log(ingredientes[4].textContent);
console.log(ingredientes[5].textContent);

/*----------------*/
console.log("Recorrer a través de for");
for (let i = 0; i < ingredientes.length; i++) {
    console.log(ingredientes[i].textContent);
}

console.log("Con forEach");
ingredientes.forEach(function (ingrediente) {
    console.log(ingrediente.textContent);
});

console.log("Con for of");
for (let ingrediente of ingredientes) {
    console.log(ingrediente.textContent);
}
