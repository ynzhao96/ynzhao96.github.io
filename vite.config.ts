import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'html/index.html'),
        home: resolve(__dirname, 'html/home.html'),
        404: resolve(__dirname, 'html/404.html'),
        problems: resolve(__dirname, 'html/problems.html'),
      }
    }
  }
})
