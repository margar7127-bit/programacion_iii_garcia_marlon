const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Mensaje desde la cocina: el pedido está listo";
saludo.innerHTML = `<h1>Bienvenidos con innerHTML</h1>`;

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
<h1>Encebollado</h1>
<p>Categoría: Sopa</p>
<p>Precio: $6.00</p>
<p>Estado: Disponible</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function () {
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = "Bienvenido a La Casona, " + nombre.value;
});
