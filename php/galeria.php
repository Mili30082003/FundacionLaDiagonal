<?php
header ('Content-type: application/json');

if (isset($_GET['action']) && $_GET['action'] == 'gallery') {
    $gallery = [
        [
            'content' => ' 
             <img src="./img/bluebell.jpg" alt="heladeria blue bell">
            '

        ],
        [
            'content' => ' <img src="img/libreriaJunin.jpg" alt="Torneo Nacional Tucuman">'
        ],
        [
            'content' => '<img src="img/LIBRERIALEON_300x300.png" alt="Torneo Nacional Tucuman">'
        ]
    ];

    echo json_encode ($gallery);
}
?>

