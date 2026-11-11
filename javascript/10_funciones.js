console.log("Rick y Morty: Funciones en Javascript")

function abrirPortal() {
    console.log("Portal abierto");
}

abrirPortal();
abrirPortal();
abrirPortal();


function pilotoNave(nombre){
    console.log("¡Rick, " + nombre + " está listo para pilotear la nave!");

}

pilotoNave("Morty");
pilotoNave("Summer");
pilotoNave("Beth");

function recargarPistola(energiaActual , recarga) {
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Nivel de energía después de la recarga: " + energiaTotal + "%");
    return energiaTotal;
}
let energiaPistola = 50;
energiaPistola = recargarPistola(energiaPistola, 30);
energiaPistola = recargarPistola(energiaPistola, 40);

console.log("Calcular descuentos interdimensional");
function calcularDescuento (precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}

let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio final con descuento: " + precioConDescuento + " dólares");

function evaluarCombustibleExamen(combustible, correctas, totalPreguntas) {
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (combustible < 20) {
        console.log("Advertencia: Combustible bajo, nivel actual: " + combustible + "%");

    }
    if(porcentajeCorrectas >= 70) {
        console.log("¡Rick, has aprobado el examen de combustible con un " + porcentajeCorrectas + "% de respuestas correctas!");
    } else {
        console.log("¡Rick, has reprobado el examen de combustible con un " + porcentajeCorrectas + "% de respuestas correctas!");
    }
}

evaluarCombustibleExamen(15, 8, 10);
evaluarCombustibleExamen(50, 6, 10);

cristales = [15, 10, 50, 30,60]

function totalCristales(cristales) {
    let total = 0;
    for (let i=0; i<cristales.length; i++) {
        total += cristales[i];
    }
    return total;
}

let cristalesRecolectados = totalCristales(cristales);
console.log("Total de cristales recolectados: " + cristalesRecolectados);


cristalesRecolectados = [100, 40, 78, 93, 2, 40, 55, 3, 63]

function misionExitosa (cristalesRecolectados){
    let misionesExitosas = 0
    for (let i=0; i<cristalesRecolectados.length;i++){
        if (cristalesRecolectados[i]>= 50){
            misionesExitosas +=1
        }
        else 
            continue
    }
return misionesExitosas
}

let numeromisiones = misionExitosa(cristalesRecolectados);
console.log("Total de misones exitosas: " + numeromisiones);