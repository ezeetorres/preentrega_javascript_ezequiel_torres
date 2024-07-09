// Lista de tareas (array de objetos)
let tareas = [];

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
    alert("Tarea agregada: " + JSON.stringify(nuevaTarea));
}

function mostrarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas para mostrar.");
    } else {
        tareas.forEach((tarea, index) => {
            alert(`${index + 1}. Título: ${tarea.titulo}\nDescripción: ${tarea.descripcion}\nPrioridad: ${tarea.prioridad}\nCompletada: ${tarea.completada}`);
        });
    }
}

function completarTarea() {
    let titulo = prompt("Ingrese el título de la tarea que quiere marcar como completada:");
    let tarea = tareas.find(t => t.titulo === titulo);

    if (tarea) {
        tarea.completada = true;
        alert("Tarea completada: " + JSON.stringify(tarea));
    } else {
        alert("Tarea no encontrada.");
    }
}

function filtrarTareasPorPrioridad() {
    let prioridad = prompt("Ingrese la prioridad de las tareas que quiere ver (alta, media, baja):");
    let tareasFiltradas = tareas.filter(t => t.prioridad === prioridad);

    if (tareasFiltradas.length === 0) {
        alert(`No hay tareas con prioridad ${prioridad}.`);
    } else {
        tareasFiltradas.forEach((tarea, index) => {
            alert(`Tareas con prioridad ${prioridad}:\n${index + 1}. Título: ${tarea.titulo}\nDescripción: ${tarea.descripcion}\nCompletada: ${tarea.completada}`);
        });
    }
}

function mostrarResumenTareas() {
    let totalTareas = tareas.length;
    let tareasCompletadas = tareas.filter(t => t.completada).length;
    let tareasPendientes = totalTareas - tareasCompletadas;

    alert(`Resumen de tareas:\nTotal de tareas: ${totalTareas}\nTareas completadas: ${tareasCompletadas}\nTareas pendientes: ${tareasPendientes}`);
}

function ejecutarPrograma() {
    let opcion;
    do {
        opcion = prompt("Ingrese una opción: \n1. Agregar tarea \n2. Mostrar tareas \n3. Completar tarea \n4. Filtrar tareas por prioridad \n5. Mostrar resumen de tareas \n6. Salir");
        switch (opcion) {
            case '1':
                agregarTarea();
                break;
            case '2':
                mostrarTareas();
                break;
            case '3':
                completarTarea();
                break;
            case '4':
                filtrarTareasPorPrioridad();
                break;
            case '5':
                mostrarResumenTareas();
                break;
            case '6':
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    } while (opcion !== '6');
}

ejecutarPrograma();
