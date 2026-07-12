import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// En producción (GitHub Pages) la app se sirve desde /switzerland/;
// en desarrollo se sirve desde la raíz.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/switzerland/' : '/',
  plugins: [react(), tailwindcss()],
}))
