<?php
header('Content-Type: application/json');

// Verificar la acción solicitada
if (isset($_GET['action']) && $_GET['action'] == 'galeria') {
    // Array con imágenes simuladas
    $imagenes = [
        'img/FotoDiagonal1.jpg',
        'img/FotoDiagonal2.jpg',
        'img/FotoDiagonal3.jpg'
    ];

    // Devolver las imágenes en formato JSON
    echo json_encode($imagenes);
}
?>

