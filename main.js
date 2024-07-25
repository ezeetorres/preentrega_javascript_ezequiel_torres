let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

function agregarTarea() {
    let titulo = prompt("Ingrese el título de la tarea:");
    let descripcion = prompt("Ingrese la descripción de la tarea:");
    let prioridad = prompt("Ingrese la prioridad de la tarea (alta, media, baja):");

    let nuevaTarea = {
        titulo: titulo,
        descripcion: descripcion,
        prioridad: prioridad,
        completada: false
    };

    tareas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    alert("Tarea agregada: " + JSON.stringify(nuevaTarea));
    mostrarTareasEnDOM();
}

function mostrarTareasEnDOM() {
    let tareasDiv = document.getElementById('tareas');
    tareasDiv.innerHTML = '';

    if (tareas.length === 0) {
        tareasDiv.innerHTML = '<p>No hay tareas para mostrar.</p>';
    } else {
        tareas.forEach((tarea, index) => {
            let tareaDiv = document.createElement('div');
            tareaDiv.className = 'tarea' + (tarea.completada ? ' completada' : '');
            tareaDiv.innerHTML = `
                <p><strong>${index + 1}. Título:</strong> ${tarea.titulo}</p>
                <p><strong>Descripción:</strong> ${tarea.descripcion}</p>
                <p><strong>Prioridad:</strong> ${tarea.prioridad}</p>
                <p><strong>Completada:</strong> ${tarea.completada}</p>
            `;
            tareasDiv.appendChild(tareaDiv);
        });
    }
}

function completarTarea() {
    let titulo = prompt("Ingrese el título de la tarea que quiere marcar como completada:");
    let tarea = tareas.find(t => t.titulo === titulo);

    if (tarea) {
        tarea.completada = true;
        localStorage.setItem('tareas', JSON.stringify(tareas));
        alert("Tarea completada: " + JSON.stringify(tarea));
        mostrarTareasEnDOM();
    } else {
        alert("Tarea no encontrada.");
    }
}

function filtrarTareasPorPrioridad() {
    let prioridad = prompt("Ingrese la prioridad de las tareas que quiere ver (alta, media, baja):");
    let tareasFiltradas = tareas.filter(t => t.prioridad === prioridad);
    let tareasDiv = document.getElementById('tareas');
    tareasDiv.innerHTML = '';

    if (tareasFiltradas.length === 0) {
        tareasDiv.innerHTML = `<p>No hay tareas con prioridad ${prioridad}.</p>`;
    } else {
        tareasFiltradas.forEach((tarea, index) => {
            let tareaDiv = document.createElement('div');
            tareaDiv.className = 'tarea' + (tarea.completada ? ' completada' : '');
            tareaDiv.innerHTML = `
                <p><strong>${index + 1}. Título:</strong> ${tarea.titulo}</p>
                <p><strong>Descripción:</strong> ${tarea.descripcion}</p>
                <p><strong>Completada:</strong> ${tarea.completada}</p>
            `;
            tareasDiv.appendChild(tareaDiv);
        });
    }
}

function mostrarResumenTareas() {
    let totalTareas = tareas.length;
    let tareasCompletadas = tareas.filter(t => t.completada).length;
    let tareasPendientes = totalTareas - tareasCompletadas;

    alert(`Resumen de tareas:\nTotal de tareas: ${totalTareas}\nTareas completadas: ${tareasCompletadas}\nTareas pendientes: ${tareasPendientes}`);
}

document.getElementById('agregarTarea').addEventListener('click', agregarTarea);
document.getElementById('completarTarea').addEventListener('click', completarTarea);
document.getElementById('filtrarTareas').addEventListener('click', filtrarTareasPorPrioridad);
document.getElementById('mostrarResumen').addEventListener('click', mostrarResumenTareas);

mostrarTareasEnDOM();
