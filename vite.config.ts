import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@logos": path.resolve(__dirname, "./src/assets/logos"),
      "@reels": path.resolve(__dirname, "./src/assets/reels"),
    },
  },
  server: {
    host: true,
  },
})
