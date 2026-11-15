console.log("Restaurante La Casona: Operadores");

console.log("Operadores Aritméticos");
let platosPreparados = 10;
let platosVendidos = 5;
console.log("Suma:", platosPreparados + platosVendidos);
console.log("Resta (platos que sobran):", platosPreparados - platosVendidos);
console.log("Multiplicación:", platosPreparados * platosVendidos);
console.log("División:", platosPreparados / platosVendidos);
console.log("Módulo:", platosPreparados % platosVendidos);

console.log("Operadores de Comparación");
console.log("Preparados es igual a vendidos:", platosPreparados == platosVendidos);
console.log("Preparados es diferente de vendidos:", platosPreparados != platosVendidos);
console.log("Preparados es mayor que vendidos:", platosPreparados > platosVendidos);
console.log("Preparados es menor que vendidos:", platosPreparados < platosVendidos);
console.log("Preparados es mayor o igual que vendidos:", platosPreparados >= platosVendidos);
console.log("Preparados es menor o igual que vendidos:", platosPreparados <= platosVendidos);

console.log("Operadores Lógicos");
let cocinaAbierta = true;
let hayMesasLibres = false;
console.log("Cocina abierta y hay mesas libres:", cocinaAbierta && hayMesasLibres);
console.log("Cocina abierta o hay mesas libres:", cocinaAbierta || hayMesasLibres);
console.log("La cocina NO está abierta:", !cocinaAbierta);

console.log("Operadores de Asignación");
let caja = 10;
console.log("Caja:", caja);
caja += 5; // caja = caja + 5
console.log("Caja después de recibir 5 (caja += 5):", caja);
caja -= 3; // caja = caja - 3
console.log("Caja después de pagar 3 (caja -= 3):", caja);
caja *= 2; // caja = caja * 2
console.log("Caja después de duplicar ventas (caja *= 2):", caja);
caja /= 4; // caja = caja / 4
console.log("Caja repartida entre 4 turnos (caja /= 4):", caja);
caja %= 3; // caja = caja % 3
console.log("Residuo de caja entre 3 (caja %= 3):", caja);

console.log("Operadores de Incremento y Decremento");
let clientes = 5;
console.log("Clientes en el salón:", clientes);
clientes++; // Incremento
console.log("Clientes después de que entra uno (clientes++):", clientes);
clientes--; // Decremento
console.log("Clientes después de que sale uno (clientes--):", clientes);

console.log("Operadores de Concatenación");
let nombre = "Carlos";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
console.log("Nombre completo del mesero:", nombreCompleto);

console.log("Operadores de comparación estricta");
let mesaNumero = 10;
let mesaTexto = "10";
console.log("Mesa número es igual a mesa texto (estricto):", mesaNumero === mesaTexto);
console.log("Mesa número es diferente de mesa texto (estricto):", mesaNumero !== mesaTexto);
console.log("Mesa número es igual a mesa texto (no estricto):", mesaNumero == mesaTexto);

console.log("Operadores Ternarios");
let edad = 20;
let puedeComprarBebidaAlcoholica = (edad >= 18) ? "Sí" : "No";
console.log("¿El cliente puede pedir bebidas alcohólicas?", puedeComprarBebidaAlcoholica);

console.log("Tabla de precios: almuerzos a $5 cada uno");
console.log(`1 almuerzo x ${5} = ${1 * 5}`);
console.log(`2 almuerzos x ${5} = ${2 * 5}`);
console.log(`3 almuerzos x ${5} = ${3 * 5}`);
console.log(`4 almuerzos x ${5} = ${4 * 5}`);
console.log(`5 almuerzos x ${5} = ${5 * 5}`);
console.log(`6 almuerzos x ${5} = ${6 * 5}`);
console.log(`7 almuerzos x ${5} = ${7 * 5}`);
console.log(`8 almuerzos x ${5} = ${8 * 5}`);
console.log(`9 almuerzos x ${5} = ${9 * 5}`);
console.log(`10 almuerzos x ${5} = ${10 * 5}`);

console.log("Tabla para dividir la cuenta entre 5 comensales");
console.log(`Cuenta de $5 ÷ ${5} = ${5 / 5}`);
console.log(`Cuenta de $10 ÷ ${5} = ${10 / 5}`);
console.log(`Cuenta de $15 ÷ ${5} = ${15 / 5}`);
console.log(`Cuenta de $20 ÷ ${5} = ${20 / 5}`);
console.log(`Cuenta de $25 ÷ ${5} = ${25 / 5}`);
console.log(`Cuenta de $30 ÷ ${5} = ${30 / 5}`);
console.log(`Cuenta de $35 ÷ ${5} = ${35 / 5}`);
console.log(`Cuenta de $40 ÷ ${5} = ${40 / 5}`);
console.log(`Cuenta de $45 ÷ ${5} = ${45 / 5}`);
console.log(`Cuenta de $50 ÷ ${5} = ${50 / 5}`);
