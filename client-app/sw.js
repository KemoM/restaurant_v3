/*
NOTE:
In a development environment, you traditionally won't want a service worker installed (since local caching can mess up your ability to 
iterate on code changes), so there isn't one generated. The local dev HTTP server responds to the request for /servrice-worker.js 
generated from the service worker registration with a HTML error document, leading to that message being logged in the console. This error 
can be safely ignored.
*/

const CACHE_NAME = 'v1::static';

//This is called only once, when the Service Worker is installed.
self.addEventListener('install', (e) => {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      fetch("/dist/my-manifest.json")
        .then((response) => response.json())
        .then((assets) =>
          cache.addAll([
            "/",
            assets["aspnetbundle.js"],
          ])
        )
    ).then(() => self.skipWaiting())
  );
});

//Fetch-This gets called once per each HTTP request. Here we check if the requested resource exists in the cache.
//If it does, we return the the cached version, otherwise, we request for the resource.
self.addEventListener('fetch', function(event) {
  console.log('Fetch'); //eslint-disable-line
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
      .catch((e) => {console.error("Error on the cache",e);}) //eslint-disable-line
  );
});


//Activate—This will get called when the Service Worker is activated.
//In here, it will clear the cache, to make sure we retrieve newer versions of our files.
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((keyList) =>
        Promise.all(keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        }))
      )
      .then(() => self.clients.claim())
  );
});