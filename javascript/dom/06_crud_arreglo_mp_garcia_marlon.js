let platos = [
    {
        id: 1,
        nombre: "Hamburguesa clásica",
        categoria: "Comida rápida",
        precio: 5.50,
        disponibilidad: "Disponible"
    },
    {
        id: 2,
        nombre: "Pizza familiar",
        categoria: "Pizzas",
        precio: 12.00,
        disponibilidad: "Agotado"
    },
    {
        id: 3,
        nombre: "Ensalada César",
        categoria: "Ensaladas",
        precio: 4.50,
        disponibilidad: "Disponible"
    },
    {
        id: 4,
        nombre: "Limonada",
        categoria: "Bebidas",
        precio: 2.00,
        disponibilidad: "Disponible"
    }
];

const formulario = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const categoria = document.getElementById("categoria")
const disponibilidad = document.getElementById("disponibilidad")
const precio = document.getElementById("precio")
const guardar = document.getElementById("guardar")
const cancelar = document.getElementById("cancelar")
const cantidad = document.getElementById("cantidad")
const contenedor = document.getElementById("contenedor")

function mostrarPlatos(){
    contenedor.replaceChildren()
    platos.forEach(function(plato){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const nombrePlato = document.createElement("h3");
        nombrePlato.textContent = plato.nombre;
        const categoriaPlato = document.createElement("p");
        categoriaPlato.textContent = plato.categoria;
        const precioPlato = document.createElement("p");
        precioPlato.textContent = plato.precio;
        const disponibilidadPlato = document.createElement("p");
        disponibilidadPlato.textContent = plato.disponibilidad;
        const acciones = document.createElement("div");

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";

        botonEditar.addEventListener("click", function(){
            editarPlato(plato.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function(){
            eliminarPlato(plato.id);
        });

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(nombrePlato, categoriaPlato, precioPlato, disponibilidadPlato, acciones);
        contenedor.appendChild(tarjeta);
    }); 
}

function eliminarPlato(id){
    const plato = platos.find(function(p){
        return p.id == id
    });
    const confirmar = confirm ( "Eliminar " + plato.nombre + "?");
    if (!confirmar){
        return
    }
    {
        platos = platos.filter(function(p){
            return p.id !== id;
        })
    }
    mostrarPlatos();
}

let idEditando = null;
function editarPlato(id){
    const plato = platos.find(function(p){
        return p.id === id
    });
nombre.value = plato.nombre;
precio.value = plato.precio;
disponibilidad.value = plato.disponibilidad;
categoria.value = plato.categoria;
idEditando = id;
guardar.textContent = "Editar";
cancelar.hidden = false;
nombre.focus()

}

let siguienteId = 5;
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nuevoPlato = nombre.value;
    const nuevaCategoria = categoria.value;
    const nuevoPrecio = Number(precio.value);
    const nuevaDisponibilidad = disponibilidad.value;
    if (idEditando === null){
       const platoNuevo = {
        id: siguienteId,
        nombre: nuevoPlato,
        categoria: nuevaCategoria,
        disponibilidad: nuevaDisponibilidad,
        precio: nuevoPrecio,
        }
        siguienteId++
        platos.push(platoNuevo);
        
    }else{
        const plato = platos.find(function(p){
            return p.id == idEditando;
        })
        plato.nombre = nuevoPlato;
        plato.categoria = nuevaCategoria
        plato.disponibilidad = nuevaDisponibilidad
        plato.precio = nuevoPrecio
    }
    mostrarPlatos()
    limpiarFormulario()
});

function limpiarFormulario(){
    formulario.reset()
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}
cancelar.addEventListener("click", function(){
    limpiarFormulario()
});