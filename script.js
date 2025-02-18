// Restringir acceso al formulario de ingreso de datos
document.getElementById('ingreso-datos-link').addEventListener('click', function(event) {
    event.preventDefault();
    const password = prompt("Ingrese la contraseña de administrador:");
    if (password === "admin123") { // Cambia "admin123" por una contraseña segura
        document.getElementById('ingreso-datos').style.display = 'block';
    } else {
        alert("Acceso denegado.");
    }
});

// Manejar el envío del formulario
document.getElementById('formulario-datos').addEventListener('submit', function(event) {
    event.preventDefault();
    const tipoDato = document.getElementById('tipo-dato').value;
    const jugador = document.getElementById('jugador').value;
    const cantidad = document.getElementById('cantidad').value;
    const fecha = document.getElementById('fecha').value;

    // Validar campos
    if (!tipoDato || !jugador || !cantidad) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Aquí puedes agregar la lógica para procesar los datos ingresados
    console.log(`Tipo de dato: ${tipoDato}, Jugador/Equipo: ${jugador}, Cantidad/Resultado: ${cantidad}, Fecha: ${fecha}`);

    // Limpiar el formulario después de enviar
    document.getElementById('formulario-datos').reset();
    alert('Datos ingresados correctamente.');
});