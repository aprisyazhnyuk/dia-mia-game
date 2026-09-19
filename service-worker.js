const CACHE_NAME = "dia-mia-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./game.js",
  "./pwa.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./assets/dia.png",
  "./assets/effects/luna-cat.png",
  "./assets/backgrounds/bolyachka-bg.png",
  "./assets/backgrounds/anxiety-bg.png",
  "./assets/backgrounds/work-bg.png",
  "./assets/backgrounds/pms-bg.png",
  "./assets/backgrounds/final-bg.png",
  "./assets/enemies/bolyachka.png",
  "./assets/enemies/anxiety.png",
  "./assets/enemies/work.png",
  "./assets/enemies/pms.png",
  "./assets/enemies/final-boss.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then((response) => {
        if (response.ok && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
