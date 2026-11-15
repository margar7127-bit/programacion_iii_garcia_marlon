console.log("Restaurante La Casona: Switch");

let mesa = 4;
switch (mesa) {
    case 1:
        console.log("Atiendes la mesa 1 (ventana)");
        break;
    case 2:
        console.log("Atiendes la mesa 2 (salón principal)");
        break;
    case 3:
        console.log("Atiendes la mesa 3 (terraza)");
        break;
    case 4:
        console.log("Atiendes la mesa 4 (mesa VIP)");
        break;
    default:
        console.log("No es una mesa válida");
}

let inventario = 50;
switch (true) {
    case (inventario > 0 && inventario <= 25):
        console.log("¡Chef, el inventario está bajo! Necesitas reabastecer la despensa.");
        break;
    case (inventario > 25 && inventario <= 50):
        console.log("¡Chef, el inventario es moderado! Puedes continuar, pero ten cuidado.");
        break;
    case (inventario > 50 && inventario <= 75):
        console.log("¡Chef, el inventario es bueno! Puedes seguir adelante.");
        break;
    case (inventario > 75 && inventario <= 100):
        console.log("¡Chef, el inventario es excelente! Estás listo para cualquier pedido.");
        break;
    default:
        console.log("¡Chef, el nivel de inventario no es válido!");
}

let empleado = "Chef";
switch (empleado) {
    case "Chef":
    case "Cocinero":
        console.log("¡Hola Chef o Cocinero! ¡A preparar los platos!");
        break;
    case "Mesero":
        console.log("¡Hola Mesero! ¡A atender las mesas!");
        break;
    default:
        console.log("¡Hola nuevo integrante! ¡Pregunta por tu puesto en La Casona!");
}

console.log("Calculadora de caja");
let resultado;
let valor1 = 10;
let valor2 = 5;
let operacion = "multiplicacion";

switch (operacion) {
    case "suma":
        resultado = valor1 + valor2;
        break;
    case "resta":
        resultado = valor1 - valor2;
        break;
    case "multiplicacion":
        resultado = valor1 * valor2;
        break;
    case "division":
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
            console.log("El resultado de la división es: " + resultado);
        } else {
            console.log("Error: no se puede dividir la cuenta entre cero comensales");
        }
        break;
    default:
        console.log("Operación no válida");
}

if (resultado !== undefined) {
    console.log("El resultado de la " + operacion + " es: " + resultado);
}
