function agregarTarea() {
    var nuevaTarea = document.getElementById('nuevaTarea').value;

    if (nuevaTarea.trim() !== "") {
        var listaTareas = document.getElementById('listaTareas');

        var tareaElemento = document.createElement('li');

        tareaElemento.innerHTML = `
            ${nuevaTarea}
            <button onclick="editarTarea(this)">Editar</button>
            <button onclick="eliminarTarea(this)">Eliminar</button>
        `;

        listaTareas.appendChild(tareaElemento);

        document.getElementById('nuevaTarea').value = '';
    }
}

function eliminarTarea(elemento) {
    var listaTareas = document.getElementById('listaTareas');
    var tareaElemento = elemento.parentNode;
    listaTareas.removeChild(tareaElemento);
}

function editarTarea(elemento) {
    var tareaElemento = elemento.parentNode;
    var tareaTexto = tareaElemento.firstChild;
    var nuevaDescripcion = prompt("Edita la Tarea", tareaTexto.nodeValue);

    if (nuevaDescripcion !== null) {
        tareaTexto.nodeValue = nuevaDescripcion;
    }
}