console.log("ciclo for");
for (let i = 1; i <= 5; i++) {
    console.log("Atendiendo la mesa " + i);
}

console.log("Cuenta regresiva para que el plato esté listo, Chef");
for (let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " minutos para que el plato esté listo");
}

console.log("Cuenta regresiva del plato con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Plato listo para servir!");
    } else {
        console.log("Faltan " + i + " minutos para que el plato esté listo");
    }
}

console.log("Nivel de inventario de la despensa");
let inventario = 50;
for (let i = 0; i <= 100; i += 10) {
    if (i >= inventario) {
        console.log("Nivel de inventario: " + i + "%");
    }
}


let consumoGasPorPedido = 10;
let totalConsumo = 0;
for (let pedido = 1; pedido <= 5; pedido++) {
    totalConsumo += consumoGasPorPedido;
    console.log("Pedido " + pedido);
    console.log("Total de gas consumido hasta ahora: " + totalConsumo + " litros");
}
console.log("Total de gas consumido después de 5 pedidos: " + totalConsumo + " litros");

console.log("Promedio de platos vendidos");
let totalPlatos = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let platos = dia * 5 + 5;
    totalPlatos += platos;
    console.log("Día " + dia + ": " + platos + " platos vendidos");
}
console.log("Total de platos vendidos en la semana: " + totalPlatos);
console.log("Promedio de platos vendidos por día: " + (totalPlatos / dias).toFixed(2));

console.log("Mesas ocupadas y libres");
let libres = 0;
let ocupadas = 0;
for (let mesa = 1; mesa <= 10; mesa++) {
    if (mesa % 2 === 0) {
        console.log("Mesa " + mesa + " está ocupada");
        ocupadas++;
    } else {
        console.log("Mesa " + mesa + " está libre");
        libres++;
    }
}
console.log("Total de mesas libres: " + libres);
console.log("Total de mesas ocupadas: " + ocupadas);

console.log("Ventas diarias de la semana");
let ventasDiarias = [35, 60, 45, 80, 55, 70, 90];
let total = 0;
let diasExitosos = 0;
for (let i = 0; i < ventasDiarias.length; i++) {
    total += ventasDiarias[i];
    if (ventasDiarias[i] >= 50) {
        diasExitosos++;
    } else {
        console.log("El día " + (i + 1) + " no fue exitoso, se vendieron menos de 50 platos");
    }
}
console.log("Total de platos vendidos: " + total);
console.log("Número de días exitosos: " + diasExitosos);

console.log("recorrer empleados con for ... of");
let empleados = ["Carlos", "María", "Andrés", "Lucía", "Pedro"];
for (let empleado of empleados) {
    console.log(empleado);
}

let restaurante = {
    nombre: "Restaurante La Casona",
    mesas: 20,
    platosEnMenu: 35,
    empleados: ["Carlos", "María", "Andrés"]
};
console.log("recorrer propiedades de un objeto con for ... in");
for (let propiedad in restaurante) {
    console.log(propiedad + ": " + restaurante[propiedad]);
    if (propiedad === "empleados") {
        console.log("Empleados del restaurante:");
        for (let empleado of restaurante[propiedad]) {
            console.log("- " + empleado);
        }
    }
}
for (let empleado of restaurante["empleados"]) {
    console.log("- " + empleado);
}

let turnos = [
    { nombre: "Turno 1", platosServidos: 50, meta: 100, mesero: "Carlos" },
    { nombre: "Turno 2", platosServidos: 30, meta: 80, mesero: "María" },
    { nombre: "Turno 3", platosServidos: 70, meta: 90, mesero: "Andrés" }
];

let exitosos = 0;
for (let turno of turnos) {
    let porcentaje = (turno.platosServidos / turno.meta) * 100;
    console.log(turno.nombre + " - " + turno.mesero + ": " + porcentaje.toFixed(2) + "% de la meta de platos servidos");
    if (porcentaje >= 90) {
        exitosos++;
    } else {
        console.log(turno.nombre + " - " + turno.mesero + ": No se alcanzó la meta de platos servidos");
    }
}
console.log("Número de turnos exitosos: " + exitosos);

console.log("Uso de break y continue en un ciclo for");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se alcanzó la mesa 5, se detiene la atención");
        break;
    }
    console.log("Mesa: " + i);
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Mesa par: " + i + ", se omite esta mesa");
        continue;
    }
    console.log("Mesa impar: " + i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se alcanzó la mesa 7, se detiene la atención");
        break;
    }
    if (i % 2 === 0) {
        console.log("Mesa par: " + i + ", se omite esta mesa");
        continue;
    }
    console.log("Mesa impar: " + i);
}
