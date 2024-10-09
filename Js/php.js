document.addEventListener('DOMContentLoaded', function() {
    fetch('php/server.php?action=news')

        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
  
            
            newsContainer.innerHTML = '';
  
          
            data.forEach(news => {
                const newsDiv = document.createElement('div');
                newsDiv.classList.add('news-item'); 
  
             
                newsDiv.innerHTML = `
                    <h3>${news.title}</h3>
                    <p>${news.content}</p>
                   
                `;
  
               
                newsContainer.appendChild(newsDiv);
            });
        })
        .catch(error => {
            console.error('Error al obtener las noticias:', error);
        });
  });

  