// Postbuild: genera un index.html por ruta con sus meta de compartir (og:image,
// título, descripción). Necesario porque los rastreadores sociales (WhatsApp,
// Facebook, iMessage…) no ejecutan JS: leen el HTML estático de cada URL.
//
// - Lista de días e "el resto" → imagen de la home (switzerland.jpg).
// - Detalle de cada día → su imagen de cabecera (dias/dia-<n>.jpg).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { itinerario } from '../src/data.js'
import { SITE_URL as SITE } from '../site.config.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const HOME_IMG = `${SITE}/switzerland.jpg`
const DESC =
  'Nuestro viaje familiar a Suiza, del 11 al 18 de agosto: itinerario, maletas, gastos, plan B y consejos.'

const template = readFileSync(join(distDir, 'index.html'), 'utf8')

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;')

function setMeta(html, selectorAttr, key, value) {
  const re = new RegExp(`(<meta ${selectorAttr}="${key}" content=")[^"]*(")`)
  return html.replace(re, `$1${escapeAttr(value)}$2`)
}

function pageFor({ path, title, desc, image }) {
  let html = template
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(title)}</title>`)
  html = setMeta(html, 'name', 'description', desc)
  html = setMeta(html, 'property', 'og:url', `${SITE}${path}`)
  html = setMeta(html, 'property', 'og:title', title)
  html = setMeta(html, 'property', 'og:description', desc)
  html = setMeta(html, 'property', 'og:image', image)
  html = setMeta(html, 'name', 'twitter:title', title)
  html = setMeta(html, 'name', 'twitter:description', desc)
  html = setMeta(html, 'name', 'twitter:image', image)

  const outDir = join(distDir, path.replace(/^\//, ''))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
}

// Home (normaliza el dist/index.html raíz desde SITE_URL, para que el dominio
// tenga una única fuente en site.config.js)
pageFor({ path: '/', title: 'Suiza en Familia · Agosto 2026', desc: DESC, image: HOME_IMG })

// Secciones (usan la imagen de la home)
const secciones = [
  { path: '/itinerario', title: 'Itinerario · Suiza en Familia' },
  { path: '/maletas', title: 'Maletas · Suiza en Familia' },
  { path: '/gastos', title: 'Gastos · Suiza en Familia' },
  { path: '/planb', title: 'Plan B · Suiza en Familia' },
  { path: '/consejos', title: 'Consejos · Suiza en Familia' },
]
for (const s of secciones) pageFor({ ...s, desc: DESC, image: HOME_IMG })

// Detalle de cada día (usa su propia imagen de cabecera)
for (const d of itinerario) {
  pageFor({
    path: `/itinerario/dia/${d.id}`,
    title: `${d.dia} Ago · ${d.titulo} — Suiza en Familia`,
    desc: d.resumen,
    image: `${SITE}/dias/dia-${d.dia}.jpg`,
  })
}

console.log(`prerender-og: ${1 + secciones.length + itinerario.length} páginas de ruta generadas`)
