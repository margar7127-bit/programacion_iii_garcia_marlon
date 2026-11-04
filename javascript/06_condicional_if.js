const prompt = require('prompt-sync')({ sigint: true });
console.log("Condicionales If");
let energia = Number(prompt("Rick, ¿cuánta energía tienes? (Ingresa un número)"));
if (energia > 0) {
    console.log("¡Rick, tienes suficiente energía para continuar la aventura!");
}


console.log("Condicionales If-Else dos caminos");
let combustible = Number(prompt("Rick, ¿cuánto combustible tienes? (Ingresa un número)"));
if (combustible > 0) {
    console.log("¡Rick, tienes suficiente combustible para tu nave!");
} else {
    console.log("¡Rick, necesitas más combustible para continuar tu viaje!");
}

console.log("Condicionales If-else if multiples caminos");
let dimension = prompt("Rick, ¿en qué dimensión estás? (Ingresa C-137, C-500 o C-300)");
if (dimension === "C-137") {
    console.log("¡Rick, estás en tu dimensión original!");
} else if (dimension === "C-500") {
    console.log("¡Rick, estás en una dimensión alternativa!");
} else if (dimension === "C-300") {
    console.log("¡Rick, estás en una dimensión desconocida!");
} else {
    console.log("¡Rick, no reconocemos esta dimensión!");
}

console.log("Condicionales If anidados");
let energiaNivel = Number(prompt("Rick, ¿cuál es tu nivel de energía? (Ingresa un número)"));
let combustibleNivel = Number(prompt("Rick, ¿cuál es tu nivel de combustible? (Ingresa un número)"));
if (energiaNivel > 0) {
    if (combustibleNivel > 0) {
        console.log("¡Rick, tienes suficiente energía y combustible para continuar la aventura!");
    } else {
        console.log("¡Rick, necesitas más combustible para continuar tu viaje!");
    }
} else {
    console.log("¡Rick, necesitas más energía para continuar tu aventura!");
}   

console.log("Condicionales If con operadores lógicos");
let energia3 = Number(prompt("Rick, ¿cuánta energía tienes? (Ingresa un número)"));
let combustible3 = Number(prompt("Rick, ¿cuánto combustible tienes? (Ingresa un número)"));
if (energia3 > 0 && combustible3 > 0) {
    console.log("¡Rick, tienes suficiente energía y combustible para continuar la aventura!");
} else {
    console.log("¡Rick, necesitas más energía o combustible para continuar tu viaje!");
}   

console.log("Control de viajes interdimensionales");
let combustible4 = 400;
let energia4 = 50;
let rick_disponible = "si";
let summer_disponible = "no";
let nave_averiada = "no";

if(combustible4>=50 && energia4>=20 && rick_disponible==="si" && summer_disponible==="si" && !(nave_averiada==="no")){
    console.log("¡Rick, puedes realizar el viaje interdimensional!");
} else {
    if(combustible4<50){
        console.log("¡Rick, necesitas más combustible para realizar el viaje interdimensional!");
    }
    if(energia4<20){
        console.log("¡Rick, necesitas más energía para realizar el viaje interdimensional!");
    }
    if(rick_disponible==="no"){
        console.log("¡Rick, necesitas estar disponible para realizar el viaje interdimensional!");
    }
    if(summer_disponible==="no"){
        console.log("¡Rick, Summer necesita estar disponible para realizar el viaje interdimensional!");
    }
    if(nave_averiada==="si"){
        console.log("¡Rick, tu nave está averiada y no puedes realizar el viaje interdimensional!");
    }
    if (rick_disponible==="no" && summer_disponible==="no"){
        console.log("¡Rick y Summer, ambos necesitan estar disponibles para realizar el viaje interdimensional!");
    }
}

console.log("Mision interdimensional");
let cristalesObjetivos = 200;
let cristalesRecolectados = 150;
let combustibleInicial = 1000;
let combustibleConsumido = 800;
let mortyHerido = "si";
let naveAveriada = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (cristalesRecolectados / cristalesObjetivos) * 100;
let combustibleRestante = combustibleInicial - combustibleConsumido;

console.log("RESULTADOS DE LA MISION INTERDIMENSIONAL");
if (porcentajeCumplimiento >=90) {
    console.log("¡Rick, misión exitosa! Has cumplido con el objetivo de cristales.");}
else if (porcentajeCumplimiento >= 70) {
    console.log("¡Rick, misión parcialmente exitosa! Has cumplido con parte del objetivo de cristales.");
}
else if (porcentajeCumplimiento >= 50) {
    console.log("¡Rick, mision regular! Se requiere mejorar el cumplimiento del objetivo de cristales.");
} else {
    console.log("¡Rick, misión fallida! No has cumplido con el objetivo de cristales.");
}


console.log("Evaluacion de bonificacion por desempeño");
if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200 ){
    bonificacion = 1000;
    console.log("¡Rick, has recibido una bonificación de 1000 por tu excelente desempeño!");
} else {
     console.log("¡Rick, no has recibido bonificación por tu desempeño en la misión!");
}

console.log("Regreso seguro a la dimension original");
if (mortyHerido === "no" && naveAveriada === "no") {
    console.log("¡Rick, has regresado a la dimensión original de manera segura!");
} else if (mortyHerido === "si" && naveAveriada === "no") {
    console.log("¡Rick, has regresado a la dimensión original, pero Morty está herido!");
} else if (mortyHerido === "no" && naveAveriada === "si") {
    console.log("¡Rick, has regresado a la dimensión original, pero tu nave está averiada!");
} else {
    console.log("¡Rick, has regresado a la dimensión original, pero Morty está herido y tu nave está averiada!");
}

console.log("Resumen de la misión interdimensional");
console.log("Cristales objetivos:", cristalesObjetivos);
console.log("Cristales recolectados:", cristalesRecolectados);
console.log("Porcentaje de cumplimiento:", porcentajeCumplimiento + "%");
console.log("Combustible inicial:", combustibleInicial);
console.log("Combustible consumido:", combustibleConsumido);
console.log("Combustible restante:", combustibleRestante);
console.log("Bonificación obtenida:", bonificacion);
console.log("Morty herido:", mortyHerido);
console.log("Nave averiada:", naveAveriada);

