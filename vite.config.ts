import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'github.com/ynzhao96/ynzhao96.github.io',
  plugins: [react()],
})
