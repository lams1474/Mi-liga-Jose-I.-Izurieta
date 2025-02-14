// Datos de goleadores (hombres, mujeres, fútbol sala)
const goleadoresHombres = [
    { nombre: "Jugador 1", goles: 5 },
    { nombre: "Jugador 2", goles: 4 },
];

const goleadoresMujeres = [
    { nombre: "Jugadora 1", goles: 5 },
    { nombre: "Jugadora 2", goles: 4 },
];

const goleadoresFutsalHombres = [
    { nombre: "Jugador 1", goles: 5 },
    { nombre: "Jugador 2", goles: 4 },
];

const goleadoresFutsalMujeres = [
    { nombre: "Jugadora 1", goles: 5 },
    { nombre: "Jugadora 2", goles: 4 },
];

// Mostrar goleadores en la página
function mostrarGoleadores(goleadores, elementoId) {
    const listaGoleadores = document.getElementById(elementoId);
    goleadores.forEach(goleador => {
        const item = document.createElement("li");
        item.textContent = `${goleador.nombre}: ${goleador.goles} goles`;
        listaGoleadores.appendChild(item);
    });
}

// Cargar goleadores
mostrarGoleadores(goleadoresHombres, "goleadores-hombres");
mostrarGoleadores(goleadoresMujeres, "goleadores-mujeres");
mostrarGoleadores(goleadoresFutsalHombres, "goleadores-futsal-hombres");
mostrarGoleadores(goleadoresFutsalMujeres, "goleadores-futsal-mujeres");