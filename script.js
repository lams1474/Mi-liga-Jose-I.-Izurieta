// Datos de goleadores y tarjetas
let goleadoresHombres = [];
let tarjetasHombres = {
    amarillas: [],
    rojas: [],
};

// Función para mostrar goleadores
function mostrarGoleadores(goleadores, elementoId) {
    const listaGoleadores = document.getElementById(elementoId);
    listaGoleadores.innerHTML = ""; // Limpiar la lista
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

// Cargar datos desde el archivo JSON
fetch('datos.json')
    .then(response => response.json())
    .then(data => {
        // Mostrar goleadores
        mostrarGoleadores(data.goleadoresHombres, "goleadores-hombres");

        // Mostrar tarjetas amarillas y rojas
        mostrarTarjetas(data.tarjetasHombres, "tarjetas-amarillas-hombres", "tarjetas-rojas-hombres");
    })
    .catch(error => console.error('Error al cargar los datos:', error));

// Procesar el formulario para ingresar datos
document.getElementById('formulario-datos').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    const tipoDato = document.getElementById('tipo-dato').value;
    const jugador = document.getElementById('jugador').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // Validar que los campos no estén vacíos
    if (!tipoDato || !jugador || isNaN(cantidad)) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // Agregar los datos según el tipo seleccionado
    if (tipoDato === "goleador") {
        goleadoresHombres.push({ nombre: jugador, goles: cantidad });
        mostrarGoleadores(goleadoresHombres, "goleadores-hombres");
    } else if (tipoDato === "tarjeta-amarilla") {
        tarjetasHombres.amarillas.push({ jugador: jugador, tarjetas: cantidad });
        mostrarTarjetas(tarjetasHombres, "tarjetas-amarillas-hombres", "tarjetas-rojas-hombres");
    } else if (tipoDato === "tarjeta-roja") {
        tarjetasHombres.rojas.push({ jugador: jugador, tarjetas: cantidad });
        mostrarTarjetas(tarjetasHombres, "tarjetas-amarillas-hombres", "tarjetas-rojas-hombres");
    }

    // Limpiar el formulario
    document.getElementById('formulario-datos').reset();
});