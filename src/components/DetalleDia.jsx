import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, Wallet, Plus } from 'lucide-react'
import { RichText } from '../utils/format.jsx'
import { itinerario } from '../data.js'
import { useGastos } from '../hooks/useGastos.jsx'
import { formatTotales } from '../utils/money.js'
import GastoModal from './GastoModal.jsx'
import Hero from './Hero.jsx'

export default function DetalleDia() {
  const { diaId } = useParams()
  const navigate = useNavigate()
  const { totalDeDia } = useGastos()
  const [modal, setModal] = useState(false)

  const idx = itinerario.findIndex((d) => d.id === diaId)
  const dia = itinerario[idx]

  // Día inexistente en la URL → volver al itinerario
  if (!dia) return <Navigate to="/itinerario" replace />

  const anterior = idx > 0 ? itinerario[idx - 1] : null
  const siguiente = itinerario[idx + 1] ?? null
  const irADia = (d) => navigate(`/itinerario/dia/${d.id}`)

  const total = totalDeDia(dia.id)
  const hayGasto = total.eur > 0 || total.chf > 0

  // Separamos la intro (si existe) del resto de bloques del timeline
  const intro = dia.detalle.find((b) => b.tipo === 'intro')
  const bloques = dia.detalle.filter((b) => b.tipo !== 'intro')

  return (
    <section>
      {/* Cabecera del día — imagen a sangre, como en el listado */}
      <Hero
        image={`${import.meta.env.BASE_URL}dias/dia-${dia.dia}.jpg`}
        alt={`Foto representativa del ${dia.dia} de agosto: ${dia.titulo}`}
        className="mb-6"
        overlayFrom="from-forest-900/90"
        titleClassName="mt-1 text-2xl leading-tight md:text-3xl"
        kicker={
          <>
            <span className="text-swiss-red">🇨🇭</span> {dia.diaSemana} · {dia.dia} Ago
          </>
        }
        title={dia.titulo}
        topBar={
          <>
            <button
              onClick={() => navigate('/itinerario')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white drop-shadow transition-opacity hover:opacity-80"
            >
              <ArrowLeft size={18} />
              Itinerario
            </button>
            <button
              onClick={() => navigate(`/gastos#gasto-dia-${dia.id}`)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white drop-shadow transition-opacity hover:opacity-80"
            >
              Ver gastos <ArrowRight size={16} />
            </button>
          </>
        }
      />

      {/* Acciones de gastos — gasto a la izquierda, botón a la derecha */}
      <div className="mb-2 flex items-center gap-3">
        {hayGasto && (
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-forest-100 px-3 py-1.5 text-sm font-medium text-forest-700">
            <Wallet size={14} className="shrink-0" /> {formatTotales(total)}
          </span>
        )}
        <button
          onClick={() => setModal(true)}
          className="btn-primary ml-auto inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap"
        >
          <Plus size={16} /> Añadir gasto
        </button>
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
            onClick={() => irADia(anterior)}
            className="flex min-w-0 flex-1 flex-col items-start rounded-2xl border border-forest-100 bg-white p-4 text-left shadow-sm transition-colors hover:bg-forest-50"
          >
            <span className="flex items-center gap-1 text-xs kicker">
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
            onClick={() => irADia(siguiente)}
            className="flex min-w-0 flex-1 flex-col items-end rounded-2xl border border-forest-100 bg-white p-4 text-right shadow-sm transition-colors hover:bg-forest-50"
          >
            <span className="flex items-center gap-1 text-xs kicker">
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

      {modal && (
        <GastoModal
          titulo={`Nuevo gasto · ${dia.dia} Ago`}
          diaId={dia.id}
          onClose={() => setModal(false)}
        />
      )}
    </section>
  )
}
