$(document).ready(function () {

  $("#frmContacto").on("submit", function (e) {
    Asunto(e);

  });

  $("#frmCotizacion").on("submit", function (e) {
    cotizacion(e);

  });


})

function limpiar() {
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
