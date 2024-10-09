document.addEventListener('DOMContentLoaded', function() {
    // Llamada para obtener las noticias desde el servidor PHP
    fetch('php/server.php?action=news')

        .then(response => response.json()) // Parsear la respuesta como JSON
        .then(data => {
            const newsContainer = document.getElementById('news-container');
  
            // Limpiar el contenedor de noticias
            newsContainer.innerHTML = '';
  
            // Iterar sobre las noticias recibidas
            data.forEach(news => {
                const newsDiv = document.createElement('div');
                newsDiv.classList.add('news-item'); // Puedes agregar estilos con CSS
  
                // Crear el contenido de la noticia
                newsDiv.innerHTML = `
                    <h3>${news.title}</h3>
                    <p>${news.content}</p>
                   
                `;
  
                // Añadir la noticia al contenedor de noticias
                newsContainer.appendChild(newsDiv);
            });
        })
        .catch(error => {
            console.error('Error al obtener las noticias:', error);
        });
  });
  /*MARQUEE*/ 
  