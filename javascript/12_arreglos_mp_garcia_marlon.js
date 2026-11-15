let platos = ["Encebollado", "Locro", "Hornado", "Ceviche", "Fritada", "Helado de paila"];
console.log("Plato 0:", platos[0]);
console.log("Plato 2:", platos[2]);
console.log("Plato 5:", platos[5]);
console.log("Plato 4:", platos[4]);

console.log("Cantidad de platos en el menú:", platos.length);

console.log("Incluir platos al menú con Push y Unshift");
platos.push("Seco de pollo");
platos.unshift("Cazuela");
console.log("modificar platos del menú");
platos[0] = "Bolón de verde";
console.log("Menú:", platos);
console.log("Eliminar un plato del menú: ");
platos.pop();
console.log("Menú:", platos);
platos.shift();
console.log("Menú:", platos);
platos.splice(1, 1);
console.log("Menú:", platos);
