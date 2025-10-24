const CACHE_NAME = "hoops-cache-v1";
const urlsToCache = [
  "/admin.html",
  "/manifest.json",
  "/style.css",
  "/index.js", // or your main JS file
  "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"
];

// Install event
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
