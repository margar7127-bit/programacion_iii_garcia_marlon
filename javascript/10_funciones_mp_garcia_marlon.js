console.log("Restaurante La Casona: Funciones en Javascript");

function abrirRestaurante() {
    console.log("Restaurante abierto");
}

abrirRestaurante();
abrirRestaurante();
abrirRestaurante();


function asignarMesero(nombre) {
    console.log("¡Chef, " + nombre + " está listo para atender las mesas!");
}

asignarMesero("Carlos");
asignarMesero("María");
asignarMesero("Andrés");

function reabastecerInventario(inventarioActual, reposicion) {
    let inventarioTotal = inventarioActual + reposicion;
    if (inventarioTotal > 100) {
        inventarioTotal = 100;
    }
    console.log("Nivel de inventario después de reabastecer: " + inventarioTotal + "%");
    return inventarioTotal;
}
let inventarioDespensa = 50;
inventarioDespensa = reabastecerInventario(inventarioDespensa, 30);
inventarioDespensa = reabastecerInventario(inventarioDespensa, 40);

console.log("Calcular descuentos para clientes");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}

let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio final con descuento: " + precioConDescuento + " dólares");

function evaluarExamenManipulacion(gas, correctas, totalPreguntas) {
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (gas < 20) {
        console.log("Advertencia: Gas bajo, nivel actual: " + gas + "%");
    }
    if (porcentajeCorrectas >= 70) {
        console.log("¡Cocinero aprobado en el examen de manipulación de alimentos con un " + porcentajeCorrectas + "% de respuestas correctas!");
    } else {
        console.log("¡Cocinero reprobado en el examen de manipulación de alimentos con un " + porcentajeCorrectas + "% de respuestas correctas!");
    }
}

evaluarExamenManipulacion(15, 8, 10);
evaluarExamenManipulacion(50, 6, 10);

let ventasSemana = [15, 10, 50, 30, 60];

function totalPlatosVendidos(ventas) {
    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
    }
    return total;
}

let platosVendidos = totalPlatosVendidos(ventasSemana);
console.log("Total de platos vendidos: " + platosVendidos);


let ventasDiarias = [100, 40, 78, 93, 2, 40, 55, 3, 63];

function contarDiasExitosos(ventas) {
    let diasExitosos = 0;
    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i] >= 50) {
            diasExitosos += 1;
        } else {
            continue;
        }
    }
    return diasExitosos;
}

let numeroDias = contarDiasExitosos(ventasDiarias);
console.log("Total de días exitosos: " + numeroDias);
