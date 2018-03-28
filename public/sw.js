/* self.addEventListener('install', e => {
  const timeStamp = Date.now();
  e.waitUntil(
      caches.open('SugeinsaServicio').then(cache => {
          return cache.addAll([
                  ``,
                  `index.html?timestamp=${timeStamp}`,
                  `catalogo.html?timestamp=${timeStamp}`,
                  `contactanos.html?timestamp=${timeStamp}`,
                  `galeria.html?timestamp=${timeStamp}`,
                  `lineas.html?timestamp=${timeStamp}`,
                  `nosotros.html?timestamp=${timeStamp}`,

                  `css/bootstrap.min.css?timestamp=${timeStamp}`,
                  `css/ihover.css?timestamp=${timeStamp}`,
                  `css/nprogress.min.css?timestamp=${timeStamp}`,
                  `css/styles.css?timestamp=${timeStamp}`,
                  `css/sweetalert.css?timestamp=${timeStamp}`,

                  `js/bootstrap.min.js?timestamp=${timeStamp}`,
                  `js/angular.min.js?timestamp=${timeStamp}`,
                  `js/waypoints.min.js?timestamp=${timeStamp}`,
                  `js/counterup.min.js?timestamp=${timeStamp}`,
                  `js/sweetalert.min.js?timestamp=${timeStamp}`,
                  `js/nprogress.min.js?timestamp=${timeStamp}`,
                  `js/ajax.min.js?timestamp=${timeStamp}`,
                  `js/scripts.min.js?timestamp=${timeStamp}`,
        

              ])
              .then(() => self.skipWaiting());
      })
  );
}); */

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then(response => {
          return response || fetch(event.request);
      })
  );
});
