// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

export const toogle = () => {
  $("#toggle-menu").click(function () {
    $("#oculto").slideToggle(1000);
  });

}

export const Applineas = () => {
  angular.module('tabApp', [])
  .controller('TabController', ['$scope', function ($scope) {
    $scope.tab = 1;

    $scope.setTab = function (newTab) {
      $scope.tab = newTab;
    };

    $scope.isSet = function (tabNum) {
      return $scope.tab === tabNum;
    };
  }]);

}



export const count = () => {
  $.scrollUp({

    scrollText: "",
    scrollSpeed: 1000,
    easingType: 'easeOutQuart'


  });

}
export const listo = () => {
  $(document).ready(function () {

    $("#SliderPrincipal").carousel();

    /*
    Lineas Sliders
    */

   $("#categoria1").carousel();
   $("#categoria2").carousel();
   $("#categoria3").carousel();
   $("#categoria4").carousel();
   $("#categoria5").carousel();
   $("#categoria6").carousel();
   $("#categoria7").carousel();
   $("#categoria8").carousel();
   $("#categoria9").carousel();
   $("#categoria10").carousel();


    /*
    Lineas Sliders
    */
    baguetteBox.run('.tz-gallery');
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });



 /*   GALLERY  */

 $('#galleryproductos').carousel({
  interval: 5000
});

//Handles the carousel thumbnails
$('[id^=pcarousel-selector-]').click(function () {
  var id_selector2 = $(this).attr("id");
  try {
      var id = /-(\d+)$/.exec(id_selector2)[1];
      console.log(id_selector2, id);
      jQuery('#galleryproductos').carousel(parseInt(id));
  } catch (e) {
      console.log('Regex failed!', e);
  }
});
// When the carousel slides, auto update the text
/* $('#galleryproductos').on('slid.bs.carousel', function (e) {
var id = $('.item.active').data('slide-number');
$('#carousel-text').html($('#slide-content-' + id).html());
});
*/

$('#galleryclientes').carousel({
  interval: 5000
});

//Handles the carousel thumbnails
$('[id^=carousel-selector-]').click(function () {
  var id_selector = $(this).attr("id");
  try {
      var id = /-(\d+)$/.exec(id_selector)[1];
      console.log(id_selector, id);
      jQuery('#galleryclientes').carousel(parseInt(id));
  } catch (e) {
      console.log('Regex failed!', e);
  }
});
/* // When the carousel slides, auto update the text
$('#galleryclientes').on('slid.bs.carousel', function (e) {
var id = $('.item.active').data('slide-number');
$('#carousel-text').html($('#slide-content-' + id).html());
}); */



/*   GALLYER */



$(".filter-button").click(function () {
  var value = $(this).attr('data-filter');

  if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
  } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

  }
});

if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
}
$(this).addClass("active");



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



$(document).on("scroll", function () {

  //sacamos el desplazamiento actual de la pÃ¡gina
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
/*   if (d > 400) {
    $(".main-about__item__items").removeClass("zoomOut");
    $(".main-about__item__items").addClass("zoomin");
  } else {
    $(".main-about__item__items").removeClass("zoomin");
    $(".main-about__item__items").addClass("zoomOut");
  } */
});
