const platos = document.getElementById("platos");
const precio = document.getElementById("precio");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function () {
    if (platos.value.trim() === "" || precio.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    const cantidad = Number(platos.value);
    const precioNumber = Number(precio.value);

    if (!Number.isFinite(cantidad) || !Number.isFinite(precioNumber)) {
        resultado.textContent = "Ingrese valores válidos";
        return;
    }

    const total = cantidad * precioNumber;
    resultado.textContent = "Total a pagar: $" + total;
});
