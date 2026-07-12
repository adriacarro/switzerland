// Configuración compartida del sitio: una sola fuente de verdad para la
// ruta base y la URL pública. La consumen vite.config.js (base) y
// scripts/prerender-og.mjs (URLs absolutas de las meta para compartir).
// Si cambia el nombre del repositorio, sólo hay que tocar REPO.
export const REPO = 'switzerland'
export const BASE_PATH = `/${REPO}/`
export const SITE_URL = `https://adriacarro.github.io/${REPO}`
