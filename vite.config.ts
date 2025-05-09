import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    host: true,
    port: 3000,
  },
  optimizeDeps: {
    exclude: ['@capacitor/core']
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
