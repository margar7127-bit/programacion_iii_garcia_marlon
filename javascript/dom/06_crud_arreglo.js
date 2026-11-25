let personajes = [
    {
        id: 1,
        nombre: "Rick Sanchez",
        dimension: "C-137",
        estado: "Vivo"
    },
    {
        id: 2,
        nombre: "Rick Sanchez",
        dimension: "C-137",
        estado: "Muerto"
    },
    {
        id: 3,
        nombre: "Rick Sanchez",
        dimension: "C-137",
        estado: "Desconocido"
    },
    {
        id: 4,
        nombre: "Rick Sanchez",
        dimension: "C-137",
        estado: "Vivo"
    }
]

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const dimension = document.getElementById("dimension");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

function mostrarPersonajes(){
    contenedor.replaceChildren();
    personajes.forEach(function(personaje){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent = personaje.nombre;
        const parrafoDimension = document.createElement("p");
        parrafoDimension.textContent="Dimension: " + personaje.dimension;
        const estado = document.createElement("p");
        estado.textContent = "Estado: " + personaje.estado;
        const acciones = document.createElement("div");
        tarjeta.classList.add("acciones");
        const botonEditar= document.createElement("button");
        botonEditar.textContent="Editar";
        botonEditar.addEventListener("click", function(){
            editarPersonaje(personaje.id)
        });
        botonEditar.classList.add("editar");
        const botonEliminar= document.createElement("button");
        botonEliminar.textContent="Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function(){eliminarPersonaje(personaje.id)});
        acciones.append(botonEditar,botonEliminar);
        tarjeta.append(titulo, parrafoDimension, estado, acciones);
        contenedor.appendChild(tarjeta);
    });
}


function eliminarPersonaje(id) {
    const personaje = personajes.find(function (p){
        return p.id == id
    })
    const confirmar = confirm ("¿Eliminar  a" + personaje.nombre + "?");
    if (!confirmar){
        return
    }
    personajes = personajes.filter (function (personaje) {
        return personaje.id!==id;
    })
    mostrarPersonajes();

}
idEditando = null;
function editarPersonaje(id){
    const personaje = personajes.find(function(p){
        return p.id == id
    })
    nombre.value = personaje.nombre;
    dimension.value = personaje.dimension;
    estado.value = personaje.estado;
    idEditando= id;
    guardar. textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus()
}


mostrarPersonajes();

siguienteId = 4;
formulario.addEventListener("submit", function (event){
    event.preventDefault();
    const nombrePersonaje = nombre.value.trim();
    const dimensionPersonaje = dimension.value;
    const estadoPersonaje = estado.value;
    if(idEditando === null){
    const nuevoPersonaje = {
        id: siguienteId,
        nombre: nombrePersonaje,
        dimension: dimensionPersonaje,
        estado: estadoPersonaje,
    }
    siguienteId++;
    personajes.push(nuevoPersonaje);
    mostrarPersonajes();}
    else {
        const personaje = personajes.find(function (p){
            return p.id == idEditando
        })
        personaje.nombre = nombrePersonaje;
        personaje.dimension = dimensionPersonaje;
        personaje.estado = estadoPersonaje;
    }
    mostrarPersonajes()
    limpiarFormulario()
});

function limpiarFormulario (){
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

cancelar.addEventListener("click", function(){
    limpiarFormulario()
});