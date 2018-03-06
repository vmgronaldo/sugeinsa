// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones


$(document).on("scroll", function () {

  //sacamos el desplazamiento actual de la página
  var d = $(document).scrollTop();

  if (d > 100) {
      $(".main-header").addClass("fadein");
      if ($(window).width() >= 1024) {
          $("#content-logo").css({ "display": "block" });
      } else {
          $("#content-logo").css({ "display": "none" });
      }
      $(".main-header").css({ "position": "fixed", "top": "0", "z-index": "99999", "width": "100%", "padding-top": "0px" });
      $(".info__head").css({ "display": "none" });


  } else {
      $(".main-header").removeClass("fadein");
      $("#content-logo").css({ "display": "flex" });
      $(".main-header").css({ "position": "relative", "top": "0px", "padding-top": "0px" });
      $(".info__head").css({ "display": "flex", "justify-content": "space-between" });



  }
  if (d > 400) {
      $(".main-about__item__items").removeClass("zoomOut");
      $(".main-about__item__items").addClass("zoomin");
  } else {
      $(".main-about__item__items").removeClass("zoomin");
      $(".main-about__item__items").addClass("zoomOut");
  }

});



export const sliders = () => {
  $(document).ready(function () {
    baguetteBox.run('.tz-gallery');
    
    $("#SliderPrincipal").carousel();


    var timer = 4000;

    var i = 0;
    var max = $('#c > li').length;

    $("#c > li").eq(i).addClass('activo').css('left', '0');
    $("#c > li").eq(i + 1).addClass('activo').css('left', '25%');
    $("#c > li").eq(i + 2).addClass('activo').css('left', '50%');
    $("#c > li").eq(i + 3).addClass('activo').css('left', '75%');


    setInterval(function () {

        $("#c > li").removeClass('activo');

        $("#c > li").eq(i).css('transition-delay', '0.25s');
        $("#c > li").eq(i + 1).css('transition-delay', '0.5s');
        $("#c > li").eq(i + 2).css('transition-delay', '0.75s');
        $("#c > li").eq(i + 3).css('transition-delay', '1s');

        if (i < max - 4) {
            i = i + 4;
        }

        else {
            i = 0;
        }

        $("#c > li").eq(i).css('left', '0').addClass('activo').css('transition-delay', '1.25s');
        $("#c > li").eq(i + 1).css('left', '25%').addClass('activo').css('transition-delay', '1.5s');
        $("#c > li").eq(i + 2).css('left', '50%').addClass('activo').css('transition-delay', '1.75s');
        $("#c > li").eq(i + 3).css('left', '75%').addClass('activo').css('transition-delay', '2s');

    }, timer);



});
};


export const toggle = () => {
  $("#toggle-menu").click(function () {
    $("#oculto").slideToggle(1000);
  });
};



