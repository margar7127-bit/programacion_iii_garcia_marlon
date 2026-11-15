let stock = [30, 50, 70, 40];
let posicion = 2;
let nuevoStock = 160;

if (posicion >= 0 && posicion < stock.length) {
    stock[posicion] = nuevoStock;
} else {
    console.log("posición no válida");
}

console.log(stock);


let empleados = [
    { id: 1, nombre: "Carlos", ventas: 99, edad: 45 },
    { id: 2, nombre: "María", ventas: 80, edad: 32 },
    { id: 3, nombre: "Andrés", ventas: 100, edad: 28 },
]

for (let empleado of empleados) {
    console.log("id:", empleado.id);
    console.log("nombre:", empleado.nombre);
    console.log("ventas:", empleado["ventas"]);
    console.log("edad:", empleado.edad);
}

console.log("El chef organiza las cuentas de cada mesero");

let cuentasPorMesero = [
    {
        mesero: "Carlos",
        cuentas: [30, 50, 60]
    },
    {
        mesero: "Carlos",
        cuentas: [20, 30, 30]
    },
    {
        mesero: "María",
        cuentas: [90, 80, 70]
    }


]

for (let turno of cuentasPorMesero) {
    let totalCuentas = 0;
    console.log("Mesero: ", turno.mesero)
    for (let cuenta of turno.cuentas) {
        console.log("Cuenta cobrada: $", cuenta);
        totalCuentas += cuenta;
    }
    console.log("Total cobrado por", turno.mesero, "es: $", totalCuentas);
}

let preciosOriginales = [30, 50, 70, 40];
let preciosCombo = preciosOriginales.map(precio => { return precio * 2; });
console.log("Precios de combos para dos personas:", preciosCombo);
let platosPremium = preciosOriginales.filter(precio => precio > 50);
console.log("Platos premium (más de $50):", platosPremium);
let totalPrecios = preciosOriginales.reduce((acumulador, precio) => {
    return acumulador + precio;
});
console.log("Suma de los precios del menú:", totalPrecios);
