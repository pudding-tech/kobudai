import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "generateSW",
      workbox: {
        cleanupOutdatedCaches: true
      },
      manifest: {
        name: "Kobudai",
        short_name: "Kobudai",
        theme_color: "#161417",
        background_color: "#1d1d1d",
        icons: [
          {
            src: "/kobudai.png",
            sizes: "144x144",
            type: "image/png"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
