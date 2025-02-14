// Datos de partidos y resultados
let partidosCalendario = [];
let resultadosPartidos = [];

// Función para mostrar partidos en el calendario
function mostrarCalendario(partidos, elementoId) {
    const listaCalendario = document.getElementById(elementoId);
    listaCalendario.innerHTML = ""; // Limpiar la lista
    partidos.forEach(partido => {
        const item = document.createElement("div");
        item.className = "partido";
        item.innerHTML = `
            <div class="equipo">
                <img src="images/${partido.equipoLocal.toLowerCase().replace(/ /g, '-')}.png" alt="${partido.equipoLocal}">
                <p>${partido.equipoLocal}</p>
            </div>
            <div class="info-partido">
                <p>${partido.fecha}</p>
                <p>${partido.hora}</p>
            </div>
            <div class="equipo">
                <img src="images/${partido.equipoVisitante.toLowerCase().replace(/ /g, '-')}.png" alt="${partido.equipoVisitante}">
                <p>${partido.equipoVisitante}</p>
            </div>
        `;
        listaCalendario.appendChild(item);
    });
}

// Función para mostrar resultados de partidos
function mostrarResultados(resultados, elementoId) {
    const listaResultados = document.getElementById(elementoId);
    listaResultados.innerHTML = ""; // Limpiar la lista
    resultados.forEach(resultado => {
        const item = document.createElement("div");
        item.className = "partido";
        item.innerHTML = `
            <div class="equipo">
                <img src="images/${resultado.equipoLocal.toLowerCase().replace(/ /g, '-')}.png" alt="${resultado.equipoLocal}">
                <p>${resultado.equipoLocal}</p>
            </div>
            <div class="info-partido">
                <p>${resultado.golesLocal} - ${resultado.golesVisitante}</p>
            </div>
            <div class="equipo">
                <img src="images/${resultado.equipoVisitante.toLowerCase().replace(/ /g, '-')}.png" alt="${resultado.equipoVisitante}">
                <p>${resultado.equipoVisitante}</p>
            </div>
        `;
        listaResultados.appendChild(item);
    });
}

// Procesar el formulario de resultados
document.getElementById('formulario-resultados').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const equipoLocal = document.getElementById('equipo-local').value;
    const equipoVisitante = document.getElementById('equipo-visitante').value;
    const golesLocal = parseInt(document.getElementById('goles-local').value);
    const golesVisitante = parseInt(document.getElementById('goles-visitante').value);
    const fechaPartido = document.getElementById('fecha-partido').value;

    // Validar que los campos no estén vacíos
    if (!equipoLocal || !equipoVisitante || isNaN(golesLocal) || isNaN(golesVisitante) || !fechaPartido) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // Agregar el resultado
    resultadosPartidos.push({ equipoLocal, equipoVisitante, golesLocal, golesVisitante, fechaPartido });
    mostrarResultados(resultadosPartidos, "resultados-hombres");

    // Limpiar el formulario
    document.getElementById('formulario-resultados').reset();
});

// Procesar el formulario de calendario
document.getElementById('formulario-calendario').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const equipoLocal = document.getElementById('calendario-equipo-local').value;
    const equipoVisitante = document.getElementById('calendario-equipo-visitante').value;
    const fechaPartido = document.getElementById('calendario-fecha').value;
    const horaPartido = document.getElementById('calendario-hora').value;

    // Validar que los campos no estén vacíos
    if (!equipoLocal || !equipoVisitante || !fechaPartido || !horaPartido) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // Agregar el partido al calendario
    partidosCalendario.push({ equipoLocal, equipoVisitante, fecha: fechaPartido, hora: horaPartido });
    mostrarCalendario(partidosCalendario, "calendarios-hombres");

    // Limpiar el formulario
    document.getElementById('formulario-calendario').reset();
});