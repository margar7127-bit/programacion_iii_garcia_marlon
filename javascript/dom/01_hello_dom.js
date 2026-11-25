console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Laboratorio Interdimensional";

const estado= document.getElementById("estado")
const boton = document.getElementById("botonPortal")
boton.addEventListener("click", function(){
    console.log("Ejecutando click");
    estado.textContent = "Portal Activado";
    console.log ("Texto Cambiado en el elemento estado");
    alert("Proceso de Activación del Portal Terminado")
})

const botonMorty = document.getElementById("botonMorty");
const mensaje = document.getElementById("mensaje");

botonMorty.addEventListener("click", function(){
    mensaje.textContent = "Morty Listo Para la Aventura!"
});

let viajes = 0;
const contador = document.getElementById("contador")
const nuevoViaje = document.getElementById("nuevoViaje")
nuevoViaje.addEventListener("click", function(){
    viajes += 1;
    contador.textContent=viajes;
}
);