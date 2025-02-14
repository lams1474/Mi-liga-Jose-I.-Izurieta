// Datos de goleadores
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

// Datos de tarjetas amarillas y rojas
const tarjetasHombres = {
    amarillas: [
        { jugador: "Jugador 1", tarjetas: 3 },
        { jugador: "Jugador 2", tarjetas: 2 },
    ],
    rojas: [
        { jugador: "Jugador 3", tarjetas: 1 },
    ],
};

const tarjetasMujeres = {
    amarillas: [
        { jugador: "Jugadora 1", tarjetas: 3 },
        { jugador: "Jugadora 2", tarjetas: 2 },
    ],
    rojas: [
        { jugador: "Jugadora 3", tarjetas: 1 },
    ],
};

const tarjetasFutsalHombres = {
    amarillas: [
        { jugador: "Jugador 1", tarjetas: 3 },
        { jugador: "Jugador 2", tarjetas: 2 },
    ],
    rojas: [
        { jugador: "Jugador 3", tarjetas: 1 },
    ],
};

const tarjetasFutsalMujeres = {
    amarillas: [
        { jugador: "Jugadora 1", tarjetas: 3 },
        { jugador: "Jugadora 2", tarjetas: 2 },
    ],
    rojas: [
        { jugador: "Jugadora 3", tarjetas: 1 },
    ],
};

// Función para mostrar goleadores
function mostrarGoleadores(goleadores, elementoId) {
    const listaGoleadores = document.getElementById(elementoId);
    goleadores.forEach(goleador => {
        const item = document.createElement("li");
        item.textContent = `${goleador.nombre}: ${goleador.goles} goles`;
        listaGoleadores.appendChild(item);
    });
}

// Función para mostrar tarjetas
function mostrarTarjetas(tarjetas, elementoIdAmarillas, elementoIdRojas) {
    const listaAmarillas = document.getElementById(elementoIdAmarillas);
    const listaRojas = document.getElementById(elementoIdRojas);

    // Limpiar listas
    listaAmarillas.innerHTML = "";
    listaRojas.innerHTML = "";

    // Mostrar tarjetas amarillas
    tarjetas.amarillas.forEach(tarjeta => {
        const item = document.createElement("li");
        item.textContent = `${tarjeta.jugador}: ${tarjeta.tarjetas} tarjetas`;
        listaAmarillas.appendChild(item);
    });

    // Mostrar tarjetas rojas
    tarjetas.rojas.forEach(tarjeta => {
        const item = document.createElement("li");
        item.textContent = `${tarjeta.jugador}: ${tarjeta.tarjetas} tarjetas`;
        listaRojas.appendChild(item);
    });
}

// Cargar goleadores
mostrarGoleadores(goleadoresHombres, "goleadores-hombres");
mostrarGoleadores(goleadoresMujeres, "goleadores-mujeres");
mostrarGoleadores(goleadoresFutsalHombres, "goleadores-futsal-hombres");
mostrarGoleadores(goleadoresFutsalMujeres, "goleadores-futsal-mujeres");

// Cargar tarjetas
mostrarTarjetas(tarjetasHombres, "tarjetas-amarillas-hombres", "tarjetas-rojas-hombres");
mostrarTarjetas(tarjetasMujeres, "tarjetas-amarillas-mujeres", "tarjetas-rojas-mujeres");
mostrarTarjetas(tarjetasFutsalHombres, "tarjetas-amarillas-futsal-hombres", "tarjetas-rojas-futsal-hombres");
mostrarTarjetas(tarjetasFutsalMujeres, "tarjetas-amarillas-futsal-mujeres", "tarjetas-rojas-futsal-mujeres");