const tareaInput = document.getElementById("tarea");
const boton = document.querySelector("button");
const tareasCompletadas = document.getElementById("lista-completadas");
const tareasPendientes = document.getElementById("lista-pendientes");

// LISTENERS

// // Para el botón AGREGAR TAREA
// boton.addEventListener("click", agregarTarea);  esto no hace falta porque el botón en el html ya llama a la función. 

// Al darle a Enter AGREGAR TAREA (al pricipio el btón me creaba dos )
tareaInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    agregarTarea();
  }
});

//LA FUNCIÓN

function agregarTarea() {
  if (tareaInput.value.trim() != "") {
    const nuevaTareaLi = document.createElement("li");

    const nuevaTareaTexto = document.createTextNode(tareaInput.value);

    const checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("eliminar");
    botonEliminar.innerText = "Eliminar";

    nuevaTareaLi.appendChild(checkbox);
    nuevaTareaLi.appendChild(nuevaTareaTexto);
    nuevaTareaLi.appendChild(botonEliminar);
    tareasPendientes.appendChild(nuevaTareaLi);
    tareaInput.value = "";

    // Tuve que poner estos listerner dentro de la función porque sino no lo consegía

    // Listener para el checkbox
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        tareasCompletadas.appendChild(nuevaTareaLi);
      } else {
        tareasPendientes.appendChild(nuevaTareaLi);
      }
    });

    //listener para el btón de eliminar

    botonEliminar.addEventListener("click", function () {
      if (tareasPendientes.contains(nuevaTareaLi)) {
        tareasPendientes.removeChild(nuevaTareaLi);
      } else if (tareasCompletadas.contains(nuevaTareaLi)) {
        tareasCompletadas.removeChild(nuevaTareaLi);
      }
    });
  }

  //Más fácil 
  // botonEliminar.onclick = function() {
  //   tareaInput.parentNode.removeChild(nuevaTareaLi);
  // }


}
