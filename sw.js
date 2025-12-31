self.addEventListener('install', (e) => {
  console.log('[Peak Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // Logic to allow the app to work offline if needed
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
