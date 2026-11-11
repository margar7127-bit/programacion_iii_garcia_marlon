let nombre= "Rick";
let edad= 70;
let planeta= "Tierra C-137";
let energia = 100;
let averiada = false;


let nave = {
nombre:"Rick",
edad: 70,
planeta: "Tierra C-137",
energia: 100,
averiada: false

}

console.log("Informacion de la nave de Rick")
console.log("Nombre del piloto: " + nave.nombre);
console.log("Edad del piloto: " + nave.edad);
console.log("Planeta de origen: " + nave.planeta);
console.log("Nivel de energía: " + nave.energia + "%");
console.log("Estado de la nave: " + (nave.averiada ? "Averiada" : "En buen estado"));

console.log("Agregar una nueva propiedad a la nave de Rick");
nave.modelo= "Nave Espacial X-2000";
console.log("Modelo de la nave: " + nave.modelo);

nave["capacidadPasajeros"] = 5;
console.log("Capacidad de pasajeros: " + nave.capacidadPasajeros);

console.log("Actualizar el nivel de energía de la nave de Rick");
nave.energia = 80;
console.log("Nivel de energía actualizado: " + nave.energia + "%");
nave["averiada"] = true;
console.log("Estado de la nave actualizado: " + (nave.averiada ? "Averiada" : "En buen estado"));

console.log("Eliminar una propiedad de la nave de Rick");
delete nave.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada. Información actualizada de la nave:");
console.log(nave);


console.log("Recorrer las propiedades de la nave de Rick");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
}

let laboratorioRick = {
    cristales: 20,
    pistolas: "XD3R",
    nave : "aP03",
    cerveza: "Duff",
    portal : "abierto"
}
let objeto = 0
for (let objetos in laboratorioRick){
    objeto += 1
}
console.log("El laboratorio de Rick tiene: " + objeto + " objetos")

let laboratoriosRick = {
    cristales: 20,
    pistolas: 2,
    nave : 15,
    cerveza: 23,
    portal : 4
}
let total = 0
for (let i in laboratoriosRick) {
    total += laboratoriosRick[i];
}
console.log("total de objetos " + total)