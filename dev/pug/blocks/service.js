if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
          scope: '/'
      })
      .then(function(registration) {
          console.log('Service Worker Registered');
      });

  navigator.serviceWorker.ready.then(function(registration) {
      console.log('Service Worker Ready');
  });
}

    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-59325548-2', 'auto');
    ga('send', 'pageview');


  
    Offline.on('up', function () {
      swal({
      position: 'center',
      type: 'success',
      title: 'Verificacion Conexion a Internet',
      text: "¡Conexion Establecida Gracias!",
      showConfirmButton: false,
      animation: true,
      customClass: 'bounceOut',
      timer: 4500
    })

    });
    Offline.on('down', function () {
      swal({
      position: 'center',
      type: 'error',
      title: 'Verificacion Conexion a Internet',
      text: "¡Problemas con su Red , Verifique su conexion Gracias!",
      showConfirmButton: false,
      animation: true,
      customClass: 'bounceOut',
      timer: 4500
    })
    });


