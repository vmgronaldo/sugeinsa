$(document).ready(function () {

  $("#frmContacto").on("submit", function (e) {
    Asunto(e);

  });
  
  $("#frmCotizacion").on("submit", function (e) {
    cotizacion(e);

  });
})

function limpiar()
{
  $("#nombre").val("");
  $("#email").val("");
  $("#email").val("");
  $("#asunto").val("");
  $("#mensaje").val("");

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

    success: function (datos) {
      {
        swal({
          position: 'center',
          type: 'success',
          title: 'mensaje enviado correctamente',
          text : "¡ Uno de nuestros Asistentes , en brevedad respondera Gracias! " , 
          showConfirmButton: false,
          animation: true,
          customClass: 'bounceOut',
          timer: 3500
        })

      }

    }

  });

  limpiar();
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

    success: function (datos) {
      {
        swal({
          position: 'center',
          type: 'success',
          title: 'Cotizacion enviado correctamente',
          text : "¡ Uno de nuestros Asistentes , en brevedad respondera Gracias! " , 
          showConfirmButton: false,
          animation: true,
          customClass: 'bounceOut',
          timer: 3500
        })

      }

    }

  });

  limpiar();
}
