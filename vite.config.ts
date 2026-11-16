import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { siteRoutes } from './src/constants/siteRoutes'

function staticRouteEntries(): Plugin {
  return {
    name: 'static-route-entries',
    apply: 'build',
    async writeBundle({ dir }) {
      if (!dir) throw new Error('Expected a build output directory')

      // GitHub Pages serves files directly, so each URL needs an HTML entry.
      const entry = join(dir, 'index.html')
      const paths = Object.values(siteRoutes).flatMap(({ paths }) => paths)
      const routeFiles = paths
        .filter((path) => path !== '/' && path !== '/index.html')
        .map((path) => path.endsWith('.html') ? path.slice(1) : `${path.slice(1)}/index.html`)

      await Promise.all([...routeFiles, '404.html'].map(async (file) => {
        const destination = join(dir, file)
        await mkdir(dirname(destination), { recursive: true })
        await copyFile(entry, destination)
      }))
    },
  }
}

export default defineConfig({
  plugins: [react(), staticRouteEntries()],
  build: {
    outDir: 'docs',
  },
})
