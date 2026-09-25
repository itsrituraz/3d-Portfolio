import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Three.js core — lazy loaded by browser (only needed for 3D sections)
          "three-vendor": ["three"],
          // R3F ecosystem — lazy loaded alongside three-vendor
          // NOTE: @react-three/postprocessing removed — it is not used anywhere
          // in the codebase and was adding dead weight to this chunk.
          "r3f-vendor": [
            "@react-three/fiber",
            "@react-three/drei",
          ],
          // GSAP animation library
          "gsap-vendor": ["gsap", "@gsap/react"],
        },
      },
    },
    // Meshopt-compressed GLBs need the decoder — it's bundled by drei automatically
    chunkSizeWarningLimit: 1000,
  },
});
