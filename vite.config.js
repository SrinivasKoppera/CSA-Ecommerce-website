import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Enable service workers in development mode for testing
      },
      manifest: {
        name: "Vite + React",
        short_name: "Vite + React",
        description: "Vite + React",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        workbox: {
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /\.(?:js|css|html|json|png|jpg|jpeg|svg|gif)$/i,
              handler: "CacheFirst", // Cache first strategy for assets
              options: {
                cacheName: "assets-cache",
                expiration: {
                  maxEntries: 100, // Limit number of entries
                  maxAgeSeconds: 24 * 60 * 60, // Cache for 24 hours
                },
              },
            },
            {
              urlPattern: /\/$/,
              handler: "NetworkFirst", // For homepage, try network first
              options: {
                cacheName: "homepage-cache",
                expiration: {
                  maxEntries: 1,
                },
              },
            },
          ],
        },
      },
    }),
  ],
});
