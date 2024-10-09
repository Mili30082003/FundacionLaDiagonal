document.addEventListener('DOMContentLoaded', function() {
    // Llamada para obtener las imágenes desde el servidor PHP
    fetch('php/galeria.php?action=gallery')
        .then(response => response.json()) // Parsear la respuesta como JSON
        .then(data => {
            const galleryContainer = document.getElementById('container-gallery');

            // Limpiar el contenedor de la galería
            galleryContainer.innerHTML = '';

            // Iterar sobre las imágenes recibidas
            data.forEach(item => {
                const imgDiv = document.createElement('div'); // Crear un contenedor para cada imagen
                imgDiv.classList.add('gallery-item'); // Añadir clase para estilos (opcional)

                // Crear el contenido de la imagen
                imgDiv.innerHTML = item.content; // Utilizar el contenido HTML de la respuesta

                // Añadir la imagen al contenedor de la galería
                galleryContainer.appendChild(imgDiv);
            });
        })
        .catch(error => {
            console.error('Error al obtener la galería:', error);
        });
});
