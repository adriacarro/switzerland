import React from 'react'
import { LUGARES, mapsUrl } from './lugares.js'

// Patrón con todos los lugares, ordenados de más largo a más corto para
// que las coincidencias más específicas ganen (p. ej. "Interlaken Ost").
const NOMBRES = Object.keys(LUGARES).sort((a, b) => b.length - a.length)
const escapar = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const RE_LUGARES = new RegExp('(' + NOMBRES.map(escapar).join('|') + ')')

// Convierte los nombres de lugar conocidos en enlaces a Google Maps.
function conEnlaces(text, keyPrefix) {
  return text.split(RE_LUGARES).map((piece, i) => {
    const query = LUGARES[piece]
    if (query) {
      return (
        <a
          key={`${keyPrefix}-${i}`}
          href={mapsUrl(query)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-forest-700 underline decoration-dotted decoration-forest-300 underline-offset-2 transition-colors hover:decoration-forest-500"
        >
          {piece}
        </a>
      )
    }
    return <React.Fragment key={`${keyPrefix}-${i}`}>{piece}</React.Fragment>
  })
}

// Renderiza texto con **negritas** y enlaces a mapas de los lugares.
export function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-semibold text-forest-800">
            {conEnlaces(part.slice(2, -2), i)}
          </strong>
        ) : (
          <React.Fragment key={i}>{conEnlaces(part, i)}</React.Fragment>
        ),
      )}
    </>
  )
}
