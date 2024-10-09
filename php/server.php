<?php
header('Content-Type: application/json');


if (isset($_GET['action']) && $_GET['action'] == 'news') {
    
    $news = [
        [
            'title' => 'Tucuman 2024 - Torneo Nacional c9. c11',
            'content' => '
             <img src="./img/FotoDiagonal2.jpg" alt="Torneo Nacional Tucuman">
            '

        ],
        [
            'title' => 'Misiones 2024 - Torneo Nacional c15',
            'content' => ' <img src="./img/FotoDiagonal2.jpg" alt="Torneo Nacional Tucuman">'
        ],
        [
            'title' => 'Esquina Corrientes 2024 - Torneo Nacional C20 Norte',
            'content' => '<img src="./img/FotoDiagonal2.jpg" alt="Torneo Nacional Tucuman">'
        ]
    ];

    // Devolver las noticias en formato JSON
    echo json_encode($news);
}
?>
