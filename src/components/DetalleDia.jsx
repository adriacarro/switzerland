import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { RichText } from '../utils/format.jsx'

export default function DetalleDia({ dia, anterior, siguiente, onBack, onIr }) {
  // Al abrir el detalle, subir al principio
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [dia.id])

  // Separamos la intro (si existe) del resto de bloques del timeline
  const intro = dia.detalle.find((b) => b.tipo === 'intro')
  const bloques = dia.detalle.filter((b) => b.tipo !== 'intro')

  return (
    <section className="animate-fade-in">
      <button
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition-colors hover:text-forest-800"
      >
        <ArrowLeft size={18} />
        Itinerario
      </button>

      {/* Cabecera del día */}
      <div className="rounded-2xl border border-forest-100 bg-white p-5 shadow-sm md:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-swiss-red">
          {dia.diaSemana} · {dia.dia} Ago
        </p>
        <h1 className="mt-1.5 text-3xl font-semibold leading-tight text-forest-800 md:text-4xl">
          {dia.titulo}
        </h1>
        <p className="mt-2 text-forest-500">{dia.subtitulo}</p>
      </div>

      {intro && (
        <p className="mt-5 px-1 text-forest-700">
          <RichText text={intro.texto} />
        </p>
      )}

      {/* Timeline de bloques */}
      <div className="relative mt-5">
        <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-forest-200" />

        <ul className="space-y-4">
          {bloques.map((b, i) => {
            const esHora = b.tipo === 'hora'
            let titulo = b.titulo
            let cuerpo = b.texto
            if (esHora) {
              const [hora, ...resto] = b.texto.split(' — ')
              titulo = hora
              cuerpo = resto.join(' — ')
            }
            return (
              <li key={i} className="relative pl-12 md:pl-14">
                <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-forest-600 text-white shadow">
                  <Clock size={17} />
                </span>

                <div className="rounded-2xl border border-forest-100 bg-white p-4 shadow-sm md:p-5">
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-forest-700">
                    {titulo}
                  </h3>
                  <p className="leading-relaxed text-forest-700">
                    <RichText text={cuerpo} />
                  </p>

                  {b.lista && (
                    <ul className="mt-2.5 space-y-1.5 pl-1">
                      {b.lista.map((li, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-forest-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-300" />
                          <span>
                            <RichText text={li} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {b.nota && (
                    <p className="mt-2.5 text-sm italic leading-relaxed text-forest-500">
                      <RichText text={b.nota} />
                    </p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Navegación entre días */}
      <div className="mt-6 flex gap-3">
        {anterior ? (
          <button
            onClick={() => onIr(anterior)}
            className="flex min-w-0 flex-1 flex-col items-start rounded-2xl border border-forest-100 bg-white p-4 text-left shadow-sm transition-colors hover:bg-forest-50"
          >
            <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-swiss-red">
              <ArrowLeft size={13} /> {anterior.dia} Ago
            </span>
            <span className="mt-0.5 w-full truncate font-semibold text-forest-800">
              {anterior.titulo}
            </span>
          </button>
        ) : (
          <div className="flex-1" />
        )}

        {siguiente ? (
          <button
            onClick={() => onIr(siguiente)}
            className="flex min-w-0 flex-1 flex-col items-end rounded-2xl border border-forest-100 bg-white p-4 text-right shadow-sm transition-colors hover:bg-forest-50"
          >
            <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-swiss-red">
              {siguiente.dia} Ago <ArrowRight size={13} />
            </span>
            <span className="mt-0.5 w-full truncate font-semibold text-forest-800">
              {siguiente.titulo}
            </span>
          </button>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </section>
  )
}
