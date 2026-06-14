/* Έλεγχος Δόμησης - Service Worker */
const CACHE = 'elegxos-domisis-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './elegxos-icon-192.png',
  './elegxos-icon-512.png',
  './elegxos-icon-512-maskable.png',
  './elegxos-apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // App shell: cache-first με ενημέρωση στο παρασκήνιο (η εφαρμογή είναι αυτόνομη, χωρίς εξωτερικά APIs)
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetched = fetch(e.request).then(resp => {
        if (resp.ok && url.origin === location.origin) {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
