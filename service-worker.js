const CACHE_NAME = 'hoops-admin-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.jpg',
  './assets/icon-512.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
