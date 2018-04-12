


<?php
    use PHPMailer\PHPMailer\PHPMailer;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/plain; charset=UTF-8" />

</head>

<body>
<?php

$nombre = $_POST['nombre2'];
$email = $_POST['email2'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
if ($nombre == '' || $email == '' || $asunto == '' || $mensaje == '') {

  echo "<script>alert('Los campos marcados con * son obligatorios');location.href ='javascript:history.back()';</script>";

} else {

/* Envio de un cuerpo HTML Como Respuesta a Nuestro Clientes, Mientras se Lee su Consulta.
 */


  require '../vendor/autoload.php';
    //Create a new PHPMailer instance
    $body = file_get_contents('contents.html');
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPSecure = 'tls';
    $mail->SMTPDebug = 2;
    $mail->SMTPAuth = true;
    $mail->Port = 587;
    $mail->Username = "ronaldo@yamoshi.com.pe";
    $mail->Password = "RUSIAMUNDIAL";
    $mail->AddAttachment('Brochure Sugeinsa.pdf', $name = 'BrochureSugeinsa.pdf',  $encoding = 'base64', $type = 'application/pdf');
    //$mail->AddAttachment('images/FICHA DE INSRIPCIÓN marzo.xlsx', $name = 'FICHA DE INSRIPCIÓN.xlsx',  $encoding = 'base64', $type = 'application/vnd.ms-excel');--
    $mail->SetFrom("ronaldo@yamoshi.com.pe", "RONALDO - SUGEINSA");
     //Usamos el AddReplyTo para decirle al script a quien tiene que responder el correo
    $mail->AddReplyTo("ronaldo@yamoshi.com.pe","RONALDO - SUGEINSA");
    $mail->CharSet = 'UTF-8';
    //Usamos el AddAddress para agregar un destinatario
    $mail->AddAddress($email, "Informes");
    $mail->WordWrap = 50;
    $mail->IsHTML(true);

    $mail->Subject = "Contacto Sugeinsa" . "-" . $asunto;

    // HTML email starts here
    $message = "<html><body>";

    $message .= "<table width='100%' bgcolor='#fff' cellpadding='0' cellspacing='0' border='0'>";
    
    $message .= "<tr><td>";
    
    $message .= "<table align='center' width='100%' border='0' cellpadding='0' cellspacing='0' style='max-width:650px; background-color:#fff; font-family:Verdana, Geneva, sans-serif;'>";
    
    $message .= "<thead>
     <tr height='80'>
     <th width='100%' style='background-color:#28303b;padding:10px 0 10px 0;font-family:Verdana, Geneva, sans-serif; color:#333; font-size:34px;' ><img src='http://www.sugeinsa.com.pe/wp-content/uploads/2017/04/ff.png'></th>
        </tr>
     </thead>";
    
    $message .= "<tbody>
     <tr align='center' height='50' style='font-family:Verdana, Geneva, sans-serif;'>
      <td width='100%' style='background-color:#fed443;font-weight: bold; text-align:center;'>Bienvenido ".$nombre."</td>
     </tr>
    
     <tr>
      <td colspan='4' style='padding: 15px 0px;'>
       <p style='font-size:.8em;'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
    
       <p style='font-size:.8em;font-weight: bold;border-top:2px solid #28303b; margin:0px;padding: 10px 0 10px 0;'>Mientras espera nuestra Respuesta, de un vistaso a nuestros Catalagos</p>
      
        
    
       <table style='width: 100%;'> 
    
       <td style='width: 30%;   padding: 10px;text-align: center;'>
       <div >
       <img src='https://promart.vteximg.com.br/arquivos/PORTADA-abril.jpg?v=636582709942630000' alt='' title='' style='height:auto; width:100%; max-width:100%;' />
       <a href='' style='   
       width: 80%;
       border:1px solid  #28303b;
       margin:10px auto;
       font-size: .8em;
       font-weight: 600;
       display: block;
        padding:10px;
       text-decoration: none;
       color: #28303b;'>Seguridad Industrial</a>
       </div>  
       </td>
    
    
       <td style='width: 30%;    padding: 10px;text-align: center;'>
       <div >
       <img src='https://promart.vteximg.com.br/arquivos/portada-marzo.jpg?v=636550024342630000' alt='' title='' style='height:auto; width:100%; max-width:100%;' />
       <a href='' style='   
       width: 80%;
       border:1px solid  #28303b;
       margin:10px auto;
       font-size: .8em;
       font-weight: 600;
       display: block;
        padding:10px;
       text-decoration: none;
       color: #28303b;'>Seguridad Industrial</a>
       </div>  
       </td>
    
    
       <td style='width: 30%;    padding: 10px;text-align: center;'>
       <div >
       <img src='https://promart.vteximg.com.br/arquivos/PORTADA-febrero18.jpg?v=636531105243630000' alt='' title='' style='height:auto; width:100%; max-width:100%;' />
       <a href='' style='   
       width: 80%;
       border:1px solid  #28303b;
       margin:10px auto;
       font-size: .8em;
       font-weight: 600;
       display: block;
        padding:10px;
       text-decoration: none;
       color: #28303b;'>Seguridad Industrial</a>
       </div>  
       </td>
    
       </table>
    
    <table style='width: 100%;background:#fed443;padding: 15px'> 
    
            <td>
                <a href='https://www.facebook.com/Sugeinsa/' target='__blank'><img style='width: 50px;'src='https://icon-icons.com/icons2/602/PNG/512/Facebook_icon-icons.com_55914.png' title='Faceebook Sugeinsa' alt='Faceebook Sugeinsa'></a>
            </td>
            <td>
            <a href='http://www.sugeinsa.com.pe/' target='__blank'><img style='width: 40px;'src='https://png.icons8.com/metro/1600/domain.png' title='Web Sugeinsa' alt='Web Sugeinsa'></a>
            </td>
    
       
        <td style=' float: right;'>
            <ul style='    margin: 0px;
            padding: 0px;
            list-style: none;
            font-size: 0.7em;
            font-weight: bold;'>
                <li>Sugeinsa S.A.C</li>
                <li>Av. Jr. Camana 1043 Oficina 404 Lima</li>
                <li>Lima-Perú</li>
                <li> (01) 237-4491</li>
                <li> Email: ventas@sugeinsa.com.pe</li>
                <li> Web:www.sugeinsa.com.pe</li>
            </ul>
        </td>
    </table>
    
       </td>
     </tr>
    
     </tbody>";
    
    $message .= "</table>";
    
    $message .= "</td></tr>";
    $message .= "</table>";
    
    $message .= "</body></html>";
    
    $mail->Body    = $message;
    $mail->AltBody    = $message;

    // HTML


      $mail->CharSet = 'UTF-8';
      if ($mail->Send())
      echo "1";
      else
      echo "0";
  

/* Aviso y Reenvio de Correos para nuestros asistentes de oficina y puedan respondes a nuestros clientes.
 */


    $mail2 = new PHPMailer();
    //Usamos el SetFrom para decirle al script quien envia el correo
    $mail2->SetFrom($email, "Hay un nuevo Interesado en el Programa de comercio electrónico y marketing digital");
    //Usamos el AddReplyTo para decirle al script a quien tiene que responder el correo
    $mail2->AddReplyTo($email,"Hay un nuevo Interesado en el Programa de comercio electrónico y marketing digital");
    //Usamos el AddAddress para agregar un destinatario
    $mail2->AddAddress("marketing@sugeinsa.com.pe","Informes");
    //Ponemos el asunto del mensaje
    $mail2->Subject = "Andes Accelerator";
       $mail2->WordWrap = 50; // Ajuste de texto
       $mail2->IsHTML(true); //establece formato HTML para el contenido
       $texto = utf8_decode('Registro de matrícula - Programa online de especialización en Comercio Electrónico y Marketing Digital');
       $mail2->Body = "<h2>Reserva de matricula en el programa online de comercio electrónico y marketing digital
    </h2><br/>"."Su Nombre es ".$nombre."<br/>Su correo es ".$email."  <br/>Su telefono es <br/>Su pais es <br>.";
    $mail2->CharSet = 'UTF-8';
    if(!$mail2->Send()) {
     echo "Hubo un error: " . $mail2->ErrorInfo;
    } else {
     echo "";
    }

}



 

?>

</body>
</html>
