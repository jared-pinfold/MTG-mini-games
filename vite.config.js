import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import netlifyReactRouter from "@netlify/vite-plugin-react-router"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), netlifyReactRouter()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
