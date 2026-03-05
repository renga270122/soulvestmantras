function isHttpRequest(request) {
  const url = new URL(request.url);
  return url.protocol === "http:" || url.protocol === "https:";
}

self.addEventListener("install", (event) => {
  event.waitUntil(Promise.resolve());
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") {
    return;
  }

  if (!isHttpRequest(request)) {
    return;
  }

  event.respondWith(fetch(request));
});
