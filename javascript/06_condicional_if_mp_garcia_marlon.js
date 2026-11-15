const prompt = require('prompt-sync')({ sigint: true });
console.log("Restaurante La Casona: Condicionales If");

console.log("Condicional If");
let ingredientes = Number(prompt("Chef, ¿cuántos kilos de ingredientes tienes? (Ingresa un número) "));
if (ingredientes > 0) {
    console.log("¡Chef, tienes suficientes ingredientes para abrir la cocina!");
}


console.log("Condicionales If-Else dos caminos");
let gas = Number(prompt("Chef, ¿cuánto gas tiene el tanque? (Ingresa un número) "));
if (gas > 0) {
    console.log("¡Chef, tienes suficiente gas para las estufas!");
} else {
    console.log("¡Chef, necesitas cambiar el tanque de gas para continuar el servicio!");
}

console.log("Condicionales If-else if multiples caminos");
let servicio = prompt("¿Qué tipo de servicio es el pedido? (Ingresa Mesa, Domicilio o Barra) ");
if (servicio === "Mesa") {
    console.log("¡Pedido para atender en el salón principal!");
} else if (servicio === "Domicilio") {
    console.log("¡Pedido para empacar y enviar a domicilio!");
} else if (servicio === "Barra") {
    console.log("¡Pedido para servir en la barra!");
} else {
    console.log("¡No reconocemos este tipo de servicio!");
}

console.log("Condicionales If anidados");
let ingredientesNivel = Number(prompt("Chef, ¿cuál es el nivel de ingredientes? (Ingresa un número) "));
let gasNivel = Number(prompt("Chef, ¿cuál es el nivel de gas? (Ingresa un número) "));
if (ingredientesNivel > 0) {
    if (gasNivel > 0) {
        console.log("¡Chef, tienes suficientes ingredientes y gas para continuar el servicio!");
    } else {
        console.log("¡Chef, necesitas más gas para continuar el servicio!");
    }
} else {
    console.log("¡Chef, necesitas reabastecer ingredientes para continuar el servicio!");
}

console.log("Condicionales If con operadores lógicos");
let ingredientes3 = Number(prompt("Chef, ¿cuántos kilos de ingredientes tienes? (Ingresa un número) "));
let gas3 = Number(prompt("Chef, ¿cuánto gas tiene el tanque? (Ingresa un número) "));
if (ingredientes3 > 0 && gas3 > 0) {
    console.log("¡Chef, tienes suficientes ingredientes y gas para continuar el servicio!");
} else {
    console.log("¡Chef, necesitas más ingredientes o gas para continuar el servicio!");
}

console.log("Control de apertura del restaurante");
let ingredientes4 = 400;
let cocineros4 = 5;
let chef_disponible = "si";
let mesero_disponible = "si";
let cocina_averiada = "no";

if (ingredientes4 >= 50 && cocineros4 >= 3 && chef_disponible === "si" && mesero_disponible === "si" && cocina_averiada === "no") {
    console.log("¡Chef, puedes abrir el restaurante!");
} else {
    if (ingredientes4 < 50) {
        console.log("¡Chef, necesitas más ingredientes para abrir el restaurante!");
    }
    if (cocineros4 < 3) {
        console.log("¡Chef, necesitas al menos 3 cocineros para abrir el restaurante!");
    }
    if (chef_disponible === "no") {
        console.log("¡Chef, necesitas estar disponible para abrir el restaurante!");
    }
    if (mesero_disponible === "no") {
        console.log("¡Chef, necesitas al menos un mesero disponible para abrir el restaurante!");
    }
    if (cocina_averiada === "si") {
        console.log("¡Chef, la cocina está averiada y no puedes abrir el restaurante!");
    }
    if (chef_disponible === "no" && mesero_disponible === "no") {
        console.log("¡Ni el chef ni el mesero están disponibles para abrir el restaurante!");
    }
}

console.log("Meta de ventas del día");
let platosObjetivo = 200;
let platosVendidos = 150;
let inventarioInicial = 1000;
let inventarioConsumido = 800;
let quejaDeCliente = "si";
let cocinaAveriada = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (platosVendidos / platosObjetivo) * 100;
let inventarioRestante = inventarioInicial - inventarioConsumido;

console.log("RESULTADOS DE LA META DE VENTAS");
if (porcentajeCumplimiento >= 90) {
    console.log("¡Chef, día exitoso! Se cumplió la meta de platos vendidos.");
} else if (porcentajeCumplimiento >= 70) {
    console.log("¡Chef, día parcialmente exitoso! Se cumplió parte de la meta de platos vendidos.");
} else if (porcentajeCumplimiento >= 50) {
    console.log("¡Chef, día regular! Se requiere mejorar las ventas de platos.");
} else {
    console.log("¡Chef, día fallido! No se cumplió la meta de platos vendidos.");
}


console.log("Evaluacion de bonificacion por desempeño");
if (porcentajeCumplimiento >= 90 && inventarioRestante >= 200) {
    bonificacion = 100;
    console.log("¡Chef, el equipo recibe una bonificación de $100 por su excelente desempeño!");
} else {
    console.log("¡Chef, el equipo no recibe bonificación por el desempeño del día!");
}

console.log("Cierre seguro del restaurante");
if (quejaDeCliente === "no" && cocinaAveriada === "no") {
    console.log("¡Chef, el restaurante cerró sin novedades!");
} else if (quejaDeCliente === "si" && cocinaAveriada === "no") {
    console.log("¡Chef, el restaurante cerró, pero hubo una queja de un cliente!");
} else if (quejaDeCliente === "no" && cocinaAveriada === "si") {
    console.log("¡Chef, el restaurante cerró, pero la cocina quedó averiada!");
} else {
    console.log("¡Chef, el restaurante cerró, pero hubo una queja de un cliente y la cocina quedó averiada!");
}

console.log("Resumen del día en La Casona");
console.log("Platos objetivo:", platosObjetivo);
console.log("Platos vendidos:", platosVendidos);
console.log("Porcentaje de cumplimiento:", porcentajeCumplimiento + "%");
console.log("Inventario inicial:", inventarioInicial);
console.log("Inventario consumido:", inventarioConsumido);
console.log("Inventario restante:", inventarioRestante);
console.log("Bonificación obtenida:", bonificacion);
console.log("Queja de cliente:", quejaDeCliente);
console.log("Cocina averiada:", cocinaAveriada);
