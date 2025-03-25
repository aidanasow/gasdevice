import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [react(), compression()],
  resolve: {
    alias: {
      app: "/src/app",
      assets: "/src/assets",
      modules: "/src/modules",
      pages: "/src/pages",
      utils: "/src/utils",
      ui: "/src/ui",
      styles: "/src/app/styles",
    },
  },
});
