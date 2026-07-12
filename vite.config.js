import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { BASE_PATH } from './site.config.js'

// En producción (GitHub Pages) la app se sirve desde BASE_PATH; en desarrollo,
// desde la raíz.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? BASE_PATH : '/',
  plugins: [react(), tailwindcss()],
}))
