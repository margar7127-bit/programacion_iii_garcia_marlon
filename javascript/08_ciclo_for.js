console.log("ciclo for");
for (let i = 1; i<=5; i++) {
    console.log("iteración " + i);
}

console.log("Cuenta regresiva despegue de la nave, Morty");
for (let i = 10; i>=0; i--) {
    console.log("Faltan " + i + " segundos para el despegue");
}

console.log("Cuenta regresiva despegue de la nave, Morty con mensaje final");
for (let i = 10; i>=0; i--) {
    if (i === 0) {
        console.log("Despegue!");
    } else {
        console.log("Faltan " + i + " segundos para el despegue");
    }
}

console.log("Nivel de energía de Rick");
let energia = 50;
for (let i=0; i<=100; i+=10) {
    if (i >= energia) {
        console.log("Nivel de energía: " + i + "%");
    }
}


let consumoPorViaje = 10;
let totalConsumo = 0;
for(let viaje = 1; viaje <= 5; viaje++) {
    totalConsumo += consumoPorViaje;
    console.log("Viaje" + viaje);
    console.log("Total consumido hasta ahora: " + totalConsumo + " litros");
}
console.log("Total consumido después de 5 viajes: " + totalConsumo + " litros");

console.log("Promedio de Cristales");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia * 5+5;
    totalCristales += cristales;
    console.log("Día " + dia + ": " + cristales + " cristales");
}
console.log("Total de cristales recolectados: " + totalCristales);
console.log("Promedio de cristales recolectados por día: " + (totalCristales / dias).toFixed(2));

console.log("Dimensiones Peligrosas");
let seguras = 0;
let peligrosas = 0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Dimensión " + dimension + " es peligrosa");
        peligrosas++;
    } else {
        console.log("Dimensión " + dimension + " es segura");
        seguras++;
    }
}
console.log("Total de dimensiones seguras: " + seguras);
console.log("Total de dimensiones peligrosas: " + peligrosas);

console.log("Recolección de Cristales de Morty");
let cristales= [35,60,45,80,55,70,90];
let total=0;
let viajesExitosos=0;
for (let i=0; i<cristales.length; i++) {
    total += cristales[i];
    if (cristales[i] >= 50) {
        viajesExitosos++;
    } else {
        console.log("Viaje" + (i+1) + "no fue exitoso, se recolectaron menos de 50 cristales");
    }
}
console.log("Total de cristales recolectados: " + total);
console.log("Número de viajes exitosos: " + viajesExitosos);

console.log("recorrer personajes con for ... of");
let personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];
for (let personaje of personajes) {
    console.log(personaje);
}

let nave={
    nombre: "Nave de Rick",
    combustible: 1000,
    velocidad: 500,
    tripulantes: ["Rick", "Morty", "Summer"]
};
console.log("recorrer propiedades de un objeto con for ... in");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if (propiedad === "tripulantes") {
        console.log("Tripulantes de la nave:");
        for (let tripulante of nave[propiedad]) {
            console.log("- " + tripulante);
        }
    }
}
for (let tripulante of nave["tripulantes"]) {console.log("- " + tripulante);
}

let misiones = [ 
    { nombre: "Misión 1", cristales: 50, meta: 100, persoanje: "Rick" },
    { nombre: "Misión 2", cristales: 30, meta: 80, persoanje: "Morty" },
    { nombre: "Misión 3", cristales: 70, meta: 90, persoanje: "Summer" }
];

let exitosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + " - " + mision.persoanje + ": " + porcentaje.toFixed(2) + "% de cristales recolectados");
    if (porcentaje >= 90) {
        exitosas++;
    }else {
        console.log(mision.nombre + " - " + mision.persoanje + ": No se alcanzó la meta de cristales");
    }
}
console.log("Número de misiones exitosas: " + exitosas);

console.log("Uso de break y continue en un ciclo for");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se alcanzó el número 5, se detiene el ciclo");
        break;
    }
    console.log("Número: " + i);
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Número par: " + i + ", se omite este número");
        continue;
    }
    console.log("Número impar: " + i);      
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se alcanzó el número 7, se detiene el ciclo");
        break;
    }
    if (i % 2 === 0) {
        console.log("Número par: " + i + ", se omite este número");
        continue;
    }
    console.log("Número impar: " + i);      
}