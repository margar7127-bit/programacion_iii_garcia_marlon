console.log("abriendo las mesas del salón");
let mesa = 1;
while (mesa <= 5) {
    console.log("Mesa abierta: " + mesa);
    mesa++;
}
console.log("Todas las mesas han sido abiertas");

console.log("cuenta regresiva para abrir el restaurante, Chef");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " minutos para abrir el restaurante");
    i--;
}

console.log("Recarga del tanque de gas de la cocina");
let nivelGas = 50;
let recarga = 10;
let totalRecargas = 0;
while (nivelGas < 100) {
    nivelGas += recarga;
    totalRecargas++;
    console.log("Nivel de gas: " + nivelGas + "%");
}
console.log("Tanque de gas al 100% después de " + totalRecargas + " recargas");

console.log("Consumo de aceite de la freidora");
let aceite = 100;
let consumo = 45;
let tanda = 0;
while (aceite >= consumo) {
    aceite -= consumo;
    tanda++;
    console.log("Tanda de fritura número: " + tanda + " realizada, aceite restante: " + aceite + "%");
    if (aceite < 50) {
        console.log("Advertencia: Aceite bajo, nivel actual: " + aceite + "%");
    }
}
console.log("Aceite insuficiente para otra tanda, nivel actual: " + aceite + "%");
console.log("Total de tandas realizadas: " + tanda);

console.log("Preparar lotes de masa con do ... while");
let harina = 50;

do {
    console.log("Preparando lote de masa, harina disponible: " + harina + " kg");
    harina -= 10;
} while (harina > 0);
console.log("Harina agotada, no se pueden preparar más lotes. Harina actual: " + harina + " kg");


console.log("Comprar una freidora industrial para La Casona");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;

do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorro + " dólares");
} while (ahorro < meta);

console.log("¡Felicidades! La Casona ahorró lo suficiente para comprar la freidora industrial después de " + semanas + " semanas.");

console.log("Ventas del día: se omiten los pedidos menores a $20");
let pedidos = [5, 10, 15, 20, 25, 60, 30, 15, 40, 45, 50];
let objetivo = 150;
let ventaTotal = 0;
let indice = 0;

while (indice < pedidos.length) {
    let pedido = pedidos[indice];
    indice++;
    if (pedido < 20) {
        console.log("Pedido de $" + pedido + " omitido (menor a $20)");
        continue;
    }
    ventaTotal += pedido;
    console.log("Pedido de $" + pedido + " agregado a la venta total, acumulado: $" + ventaTotal);
    if (ventaTotal >= objetivo) {
        console.log("¡Objetivo de ventas alcanzado! Venta total: $" + ventaTotal);
        break;
    }
}
console.log("Venta total acumulada: $" + ventaTotal);
