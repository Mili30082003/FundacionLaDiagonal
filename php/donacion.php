<?php
// Habilitar la visualización de errores
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; // Autocarga PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Procesar los datos del formulario
    $cantidad = htmlspecialchars($_POST['cantidad']);
    $nombre = htmlspecialchars($_POST['nombre']);
    $apellido = htmlspecialchars($_POST['apellido']);
    $email = htmlspecialchars($_POST['email']);
     $empresa = htmlspecialchars($_POST['empresa']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $dni = htmlspecialchars($_POST['dni']);

    // Procesar la imagen subida
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] == 0) {
        $directorio_subida = 'img/';
        if (!is_dir($directorio_subida)) {
            mkdir($directorio_subida, 0777, true); // Crea la carpeta si no existe
        }

        $archivo_subido = $directorio_subida . basename($_FILES['imagen']['name']);
        $tipo_archivo = strtolower(pathinfo($archivo_subido, PATHINFO_EXTENSION));

        // Comprobar si el archivo es una imagen
        $check = getimagesize($_FILES['imagen']['tmp_name']);
        if ($check !== false) {
            if (move_uploaded_file($_FILES['imagen']['tmp_name'], $archivo_subido)) {
                // La imagen se subió correctamente

                // Configurar PHPMailer
                $mail = new PHPMailer(true); // Crea una instancia de PHPMailer

                try {
                    // Habilitar el envío por SMTP
                    $mail->isSMTP(); 
                    $mail->SMTPDebug = 0; // Habilitar depuración
                    $mail->Host = 'smtp.gmail.com';            // Servidor SMTP de Gmail
                    $mail->SMTPAuth = true;                    // Habilitar autenticación SMTP
                    $mail->Username = 'miliantoni12@gmail.com';   // Dirección de correo Gmail
                    $mail->Password = 'tggy mfsb tgbv ttvg';  // Contraseña de aplicaciones generada en tu cuenta de Google

                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Encriptación TLS
                    $mail->Port = 587;                         // Puerto SMTP

                    // Destinatarios
                    $mail->setFrom('miliantoni12@gmail.com', 'Nombre Remitente');
                    $mail->addAddress($email, "$nombre $apellido");             // Destinatario

                    // Adjuntar imagen subida
                    $mail->addAttachment($archivo_subido);                      // Archivo adjunto

                    // Contenido del correo
                    $mail->isHTML(true);                                        // Configura el correo como HTML
                    $mail->Subject = 'Confirmación de Donación';
                    $mail->Body    = "<p>Hola <b>$nombre $apellido</b>,</p>
                                      <p>Gracias por tu donación de $cantidad.</p>
                                      <p>Detalles:</p>
                                      <ul>
                                        <li>Teléfono: $telefono</li>
                                        <li> Empresa: $empresa </li>
                                        <li>DNI: $dni</li>
                                      </ul>
                                      <p>Se ha adjuntado la imagen que proporcionaste.</p>";
                    $mail->AltBody = "Hola $nombre $apellido, gracias por tu donación de $cantidad. Teléfono: $telefono, mpresa: $empresa , DNI: $dni.";

                    // Enviar el correo
                    $mail->send();
                    echo '<h2>El mensaje ha sido enviado correctamente</h2>';
                } catch (Exception $e) {
                    echo "<h2>El mensaje no se pudo enviar. Error: {$mail->ErrorInfo}</h2>";
                }
            } else {
                echo 'Error al subir la imagen.';
            }
        } else {
            echo 'El archivo no es una imagen.';
        }
    }
}
?>
