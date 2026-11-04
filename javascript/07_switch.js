let dimension = 4;
switch (dimension) {
    case 1:
        console.log("Estás en la dimensión 1");
        break;
    case 2:
        console.log("Estás en la dimensión 2");
        break;
    case 3:
        console.log("Estás en la dimensión 3");
        break;
    case 4:
        console.log("Estás en la dimensión Marlon");
        break;
    default:
        console.log("No estás en una dimensión válida");
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia <= 25):
        console.log("¡Rick, tu energía es baja! Necesitas recargarla.");
        break;
    case (energia > 25 && energia <= 50):
        console.log("¡Rick, tu energía es moderada! Puedes continuar, pero ten cuidado.");
        break;
    case (energia > 50 && energia <= 75):
        console.log("¡Rick, tu energía es buena! Puedes seguir adelante.");
        break;
    case (energia > 75 && energia <= 100):
        console.log("¡Rick, tu energía es excelente! Estás listo para cualquier desafío.");
        break;
    default:
        console.log("¡Rick, tu nivel de energía no es válido!");
}

let personaje = "Rick";
switch (personaje) {
    case "Rick":
    case "Morty":
        console.log("¡Hola Rick o Morty! ¡Listos para la aventura!");
        break;
    case "Summer":
        console.log("¡Hola Summer! ¡Vamos a explorar nuevas dimensiones!");
        break;
    default:
        console.log("¡Hola desconocido! ¡Prepárate para la aventura!");
}

console.log("Calculadora")
let resultado;
let numero1 = 10;
let numero2 = 5;
let operacion = "multiplicacion";

switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        break;
    case "resta":
        resultado = numero1 - numero2;
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("El resultado de la división es: " + resultado);
        } else {
            console.log("Error: División por cero no permitida");
        }
        break;
    default:
        console.log("Operación no válida");
}

if (resultado !== undefined) {
    console.log("El resultado de la " + operacion + " es: " + resultado);
}