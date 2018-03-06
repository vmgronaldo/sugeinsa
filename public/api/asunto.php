

<?php
use PHPMailer\PHPMailer\PHPMailer;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script src="../js/jquery-2.2.4.min.js"></script>
<link rel="stylesheet" href="../css/sweetalert.css">
<script src="../js/sweetalert.min.js"></script>
<title>Formulario</title> <!-- Aquí va el título de la página -->

</head>

<body>
<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
if ($nombre == '' || $email == '' || $asunto == '' || $mensaje == '') {

  echo "<script>alert('Los campos marcados con * son obligatorios');location.href ='javascript:history.back()';</script>";

} else {




  require '../vendor/autoload.php';
    //Create a new PHPMailer instance
  $mail = new PHPMailer;

  $mail->From = $email;
  $mail->FromName = $nombre;
  $mail->AddAddress("vmgronaldo@gmail.com", "Gabriel Ronaldo"); // Dirección a la que llegaran los mensajes.
   
// Aquí van los datos que apareceran en el correo que reciba
    //adjuntamos un archivo 
        //adjuntamos un archivo

  $mail->WordWrap = 50;
  $mail->IsHTML(true);

  $mail->Subject = "Contacto Sugeinsa" . "-" . $asunto;
  $mail->Body = "<img src='logo.png' alt=''><h1>Hola mundo</h1> \n<br />" . "Nombre: $nombre \n<br />" .
    "Correo: $email \n<br />" .
    "Asunto: $asunto \n<br />" .
    "Mensaje: $mensaje \n<br />";


    
    

// Datos del servidor SMTP

  $mail->SMTPDebug = 2;

  $mail->isSMTP();
    //Set the hostname of the mail server
  $mail->Host = 'smtp.gmail.com';
    // use
    // $mail->Host = gethostbyname('smtp.gmail.com');
    // if your network does not support SMTP over IPv6
    //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
  $mail->Port = 587;
    //Set the encryption system to use - ssl (deprecated) or tls
  $mail->SMTPSecure = 'tls';
    //Whether to use SMTP authentication
  $mail->SMTPAuth = true;
    //Username to use for SMTP authentication - use full email address for gmail
  $mail->Username = "vmgronaldo@gmail.com";
    //Password to use for SMTP authentication
  $mail->Password = "ronaldoviza123";


  if ($mail->Send())
    echo "Formulario enviado correctamente";
  else
    echo "Error al enviar Formulario";

}
?>

</body>
</html>
