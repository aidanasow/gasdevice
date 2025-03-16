import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
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
