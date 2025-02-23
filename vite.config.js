import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://task-mern-backend-git-main-vishwas-works-projects.vercel.app/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
