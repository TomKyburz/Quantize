const CACHE_VERSION = 'v1';
const CACHE_ASSETS = [
  '/quantize/home/index.html',
  '/quantize/home/style.css',
  '/quantize/js/three.module.js',
  '/quantize/js/three.core.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(CACHE_ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_VERSION && caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const resClone = response.clone();
        caches.open(CACHE_VERSION).then(cache => cache.put(event.request, resClone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
