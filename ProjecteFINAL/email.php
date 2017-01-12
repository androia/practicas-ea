<?php
$destino = "andreaarubio@gmail.com";
$nombre = $_Post['name'];
$correo = $_Post['email'];
$mensaje = $_Post['message'];
$contenido = "Nombre: " . $name . "\nCorreo: " . $email . "\nMensaje: " . $message;

mail($destino, "Contacto", $contenido);
?>