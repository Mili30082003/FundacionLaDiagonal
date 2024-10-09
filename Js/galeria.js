document.addEventListener('DOMContentLoaded', function() {

    fetch('php/galeria.php?action=gallery')
        .then(response => response.json()) 
        .then(data => {
            const galleryContainer = document.getElementById('container-gallery');

           
            galleryContainer.innerHTML = '';

          
            data.forEach(item => {
                const imgDiv = document.createElement('div'); 
                imgDiv.classList.add('gallery-item'); 

           
                imgDiv.innerHTML = item.content; 

               
                galleryContainer.appendChild(imgDiv);
            });
        })
        .catch(error => {
            console.error('Error al obtener la galería:', error);
        });
});
