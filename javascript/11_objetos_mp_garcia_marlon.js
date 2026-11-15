let nombre = "Restaurante La Casona";
let antiguedad = 15;
let ubicacion = "Centro histórico";
let ocupacion = 100;
let cerrado = false;


let restaurante = {
    nombre: "Restaurante La Casona",
    antiguedad: 15,
    ubicacion: "Centro histórico",
    ocupacion: 100,
    cerrado: false

}

console.log("Información del restaurante");
console.log("Nombre del restaurante: " + restaurante.nombre);
console.log("Años de antigüedad: " + restaurante.antiguedad);
console.log("Ubicación: " + restaurante.ubicacion);
console.log("Nivel de ocupación: " + restaurante.ocupacion + "%");
console.log("Estado del local: " + (restaurante.cerrado ? "Cerrado" : "Abierto"));

console.log("Agregar una nueva propiedad al restaurante");
restaurante.tipoCocina = "Comida tradicional";
console.log("Tipo de cocina: " + restaurante.tipoCocina);

restaurante["mesasReservadas"] = 5;
console.log("Mesas reservadas: " + restaurante.mesasReservadas);

console.log("Actualizar el nivel de ocupación del restaurante");
restaurante.ocupacion = 80;
console.log("Nivel de ocupación actualizado: " + restaurante.ocupacion + "%");
restaurante["cerrado"] = true;
console.log("Estado del local actualizado: " + (restaurante.cerrado ? "Cerrado" : "Abierto"));

console.log("Eliminar una propiedad del restaurante");
delete restaurante.mesasReservadas;
console.log("Propiedad 'mesasReservadas' eliminada. Información actualizada del restaurante:");
console.log(restaurante);


console.log("Recorrer las propiedades del restaurante");
for (let propiedad in restaurante) {
    console.log(propiedad + ": " + restaurante[propiedad]);
}

let despensaCasona = {
    arroz: "Costeño",
    aceite: "Girasol",
    papa: "Chola",
    bebida: "Jugo de naranjilla",
    despensa: "abierta"
}
let producto = 0
for (let productos in despensaCasona) {
    producto += 1
}
console.log("La despensa de La Casona tiene: " + producto + " tipos de productos")

let inventarioCasona = {
    arroz: 20,
    aceite: 2,
    papa: 15,
    bebidas: 23,
    huevos: 4
}
let total = 0
for (let i in inventarioCasona) {
    total += inventarioCasona[i];
}
console.log("total de unidades en inventario " + total)
