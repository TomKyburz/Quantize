// Service Worker file

// Define a version for the cache
const cacheVersion = 'v1';

// List of static assets to cache
const cacheAssets = [
  '/',
  '/index.html',
  '/style.css',
  '/index.js',
  '/manifest.json',
  '*'
  // Add more assets to cache as needed
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheVersion)
      .then((cache) => {
        return cache.addAll(cacheAssets);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== cacheVersion) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();
        caches.open(cacheVersion).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => caches.match(event.request).then((response) => response))
  );
});
