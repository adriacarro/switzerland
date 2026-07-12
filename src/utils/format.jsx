import React from 'react'

// Renderiza texto con soporte para **negritas** dentro de una cadena.
export function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-semibold text-forest-800">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  )
}
