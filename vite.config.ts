import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import path, { resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },

  // Enable route-based code splitting
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
