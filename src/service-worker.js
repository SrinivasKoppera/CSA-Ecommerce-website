self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      // Cache essential assets during the installation phase
      return cache.addAll([
        "/",
        "/index.html",
        "/src/App.jsx", // Ensure App.jsx is cached
        "/src/main.jsx", // Add main entry JS file
        "/build/bundle.js", // Vite build output file
        "/icon.png",
        "/icon-512.png",
        "/pwa-64x64.png",
        "/pwa-192x192.png",
        "/pwa-512x512.png",
        "/maskable-icon-512x512.png",
        // Add other static assets and files that are part of the app

        // Cache images (ensure correct path in production)
        "/assets/shopping_home_image.jpeg", // Use the correct path here
        "/assets/offersbanner2.png",
        "/assets/first_banner.webp",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated...");
  const cacheWhitelist = ["pwa-cache"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching...", event.request.url);

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Serve cached response if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise, fetch from network
      return fetch(event.request)
        .then((networkResponse) => {
          // Cache the network response for future use
          if (event.request.url.includes("/assets/")) {
            // Cache images dynamically
            caches.open("pwa-cache").then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback when offline for images or other resources
          if (
            event.request.url.endsWith(".jpeg") ||
            event.request.url.endsWith(".png") ||
            event.request.url.endsWith(".jpg")
          ) {
            return caches.match("/assets/fallback-image.jpeg"); // Use a default/fallback image
          }
          if (event.request.url.endsWith(".html")) {
            return caches.match("/index.html"); // Fallback to homepage if offline
          }
        });
    })
  );
});
