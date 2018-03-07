$(document).ready(function () {

  $("#frmContacto").on("submit", function (e) {
    Asunto(e);

  });

  $("#frmCotizacion").on("submit", function (e) {
    cotizacion(e);


  });


  $("#adjunto").change(function () {

    var archivo = $("#adjunto").val();
    var extensiones = archivo.substring(archivo.lastIndexOf("."));
    if (extensiones != ".docx" && extensiones != ".txt" && extensiones != ".pdf" && extensiones != ".xlsx" && extensiones != ".png" && extensiones != ".jpg" && extensiones != ".doc") {
      swal({
      position: 'center',
      type: 'error',
      title: 'Validacion de Archivo Cargado',
      text: "¡Archivos Permitidos doc , docx , xlsx , pdf , csv , txt , png ,  jpg , jpeg Gracias! ",
      showConfirmButton: false,
      animation: true,
      customClass: 'bounceOut',
      timer: 4500
    })
    limpiar() ;
    }else{
      var file_size = $('#adjunto')[0].files[0].size;
      if (file_size > 2097152) {
        swal({
          position: 'center',
          type: 'error',
          title: 'mensaje de archivo cargado',
          text: "¡Pórfavor el peso maximo de archivo es de 2 MB gracias! ",
          showConfirmButton: false,
          animation: true,
          customClass: 'bounceOut',
          timer: 3500
        })
  
      } else {
        swal({
          position: 'center',
          type: 'success',
          title: 'mensaje de archivo cargado',
          text: "¡Su archivo cumple los requisitos , puede dar click en enviar Gracias! ",
          showConfirmButton: false,
          animation: true,
          customClass: 'bounceOut',
          timer: 3500
        })
      }
    }
  });
})

function limpiar() {
  $("#nombre").val("");
  $("#email").val("");
  $("#nombre2").val("");
  $("#email2").val("");
  $("#celular").val("");
  $("#asunto").val("");
  $("#mensaje").val("");
  $("#adjunto").val("");

}


function Asunto(e) {
  e.preventDefault(); //No se activará la acción predeterminada del evento
  //$("#btnGuardar").prop("disabled",true);
  var formData = new FormData($("#frmContacto")[0]);
  $.ajax({
    url: "../api/asunto.php",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,
    beforeSend: function (datos) {
      console.log("peticion en proceso");
      start();
    }

  }).done(function (data) {
    console.log("success");
    swal({
      position: 'center',
      type: 'success',
      title: 'mensaje enviado correctamente',
      text: "¡ Uno de nuestros Asistentes , en brevedad respondera Gracias! ",
      showConfirmButton: false,
      animation: true,
      customClass: 'bounceOut',
      timer: 3500
    })
    done();
  }).fail(function () {
    console.log("error");

    swal({
      position: 'center',
      type: 'error',
      title: 'mensaje no se envio correctamente',
      text: "¡ Vuelva a internarlo! ",
      showConfirmButton: false,
      animation: true,
      customClass: 'bounceOut',
      timer: 3500
    })
    done();
  })
    .always(function () {
      console.log("complete");
      done();
    });


  limpiar();

}


function start() {
  NProgress.start();
}

function done() {
  NProgress.done();
}

function cotizacion(e) {
  e.preventDefault(); //No se activará la acción predeterminada del evento
  //$("#btnGuardar").prop("disabled",true);
  var formData = new FormData($("#frmCotizacion")[0]);

  $.ajax({
    url: "../api/cotizador.php",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,

    beforeSend: function (datos) {

      console.log("peticion en proceso");
      start();
    }

  }).done(function (data) {
    console.log("success");
    swal({
      position: 'center',
      type: 'success',
      title: 'mensaje enviado correctamente',
      text: "¡ Uno de nuestros Asistentes , en brevedad respondera Gracias! ",
      showConfirmButton: false,
      animation: true,
      customClass: 'bounceOut',
      timer: 3500
    })
    done();
  }).fail(function () {
    console.log("error");

    swal({
      position: 'center',
      type: 'error',
      title: 'mensaje no se envio correctamente',
      text: "¡ Vuelva a internarlo! ",
      showConfirmButton: false,
      animation: true,
      customClass: 'bounceOut',
      timer: 3500
    })
    done();
  })
    .always(function () {
      console.log("complete");
      done();
    });

  limpiar();
}
