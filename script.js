// Aquí puedes agregar cualquier funcionalidad adicional que necesites
// Por ejemplo, cargar datos dinámicamente desde datos.json

document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos desde datos.json
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            // Aquí puedes manipular los datos cargados
            console.log(data);
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});