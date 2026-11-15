console.log("abriendo portal de la nave");
let portal = 1;
while (portal <= 5) {
    console.log("Portal abierto: " + portal);
    portal++;
}
console.log("Todos los portales han sido abiertos");

console.log("cuenta regresiva despegue de la nave, Morty");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para el despegue");
    i--;
}

console.log("Recarga la pistola de portales de Rick");
let energia = 50;
let recarga = 10;
let totalRecarga = 0;
while (energia < 100) {
    energia += recarga;
    totalRecarga ++;
    console.log("Nivel de energía: " + energia + "%");
}
console.log("Pistola de portales recargada al 100% despues de:" + totalRecarga + "% de recarga");

console.log("Consumo de Combustible de la nave de Rick");
let combustible = 100;
let consumo = 45;
let viaje = 0;
while (combustible >= consumo ) {
    combustible -= consumo;
    viaje++;
    console.log("Viaje número: " + viaje + " realizado, consumo de combustible: " + combustible + "%");
    if(combustible < 50) {
        console.log("Advertencia: Combustible bajo, nivel actual: " + combustible + "%");
    }
}
console.log("Combustible insuficiente para realizar otro viaje, nivel actual: " + combustible + "%");
console.log("Total de viajes realizados: " + viaje);

console.log("Activar portales de dimensiones peligrosas con do ... while");
let energiaPortal = 50;

do{
    console.log("Activando portal de dimensión peligrosa, nivel de energía: " + energiaPortal + "%");
    energiaPortal -= 10;
} while (energiaPortal > 0);
console.log("Nivel de energía insuficiente para activar más portales, nivel actual: " + energiaPortal + "%");


console.log("Comprar una pistola de portales para Rick");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;

do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorro + " dólares");
} while (ahorro < meta);

console.log("¡Felicidades! Rick ha ahorrado suficiente dinero para comprar la pistola de portales después de " + semanas + " semanas.");