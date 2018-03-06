

<?php
    use PHPMailer\PHPMailer\PHPMailer;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>Formulario</title> <!-- Aquí va el título de la página -->

</head>

<body>
<?php

$nombre = $_POST['nombre'];
$categoria = $_POST['categoria'];
$email = $_POST['email'];
$celular = $_POST['celular'];
$archivo = $_FILES['adjunto'];
if ($nombre=='' || $categoria=='' || $email=='' || $celular==''){

echo "<script>alert('Los campos marcados con * son obligatorios');location.href ='javascript:history.back()';</script>";

}else{




    require '../vendor/autoload.php';
    //Create a new PHPMailer instance
    $mail = new PHPMailer;

    $mail->From = $email;
    $mail->FromName = $nombre; 
    $mail->AddAddress("vmgronaldo@gmail.com","Gabriel Ronaldo"); // Dirección a la que llegaran los mensajes.
   
// Aquí van los datos que apareceran en el correo que reciba
    //adjuntamos un archivo 
        //adjuntamos un archivo
            
    $mail->WordWrap = 50; 
    $mail->IsHTML(true);   

    $mail->Subject  =  "Cotizador Sugeinsa"."-".$categoria;
    $mail->Body     ="<img src='logo.png' alt=''><h1>Hola mundo</h1> \n<br />"  . "Nombre: $nombre \n<br />".    
    "Correo: $email \n<br />".
    "Asunto: $celular \n<br />".
    "Categoria: $categoria \n<br />";
    $mail->AddAttachment($archivo['tmp_name'], $archivo['name']);

    
    

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
    echo "1";
    else
    echo "0";

}

?>
</body>
</html>
