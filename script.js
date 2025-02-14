// Datos de goleadores
const goleadores = [
    { nombre: "Jugador 1", goles: 5 },
    { nombre: "Jugador 2", goles: 4 },
    { nombre: "Jugador 3", goles: 3 },
];

// Mostrar goleadores en la página
const listaGoleadores = document.getElementById("goleadores");

goleadores.forEach(goleador => {
    const item = document.createElement("li");
    item.textContent = `${goleador.nombre}: ${goleador.goles} goles`;
    listaGoleadores.appendChild(item);
});