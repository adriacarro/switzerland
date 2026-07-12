import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronDown,
  ArrowRight,
  Plane,
  PlaneTakeoff,
  Mountain,
  MountainSnow,
  TramFront,
  CableCar,
  Waves,
  Landmark,
  Wallet,
} from 'lucide-react'
import { itinerario } from '../data.js'
import { useGastos } from '../hooks/useGastos.jsx'
import { formatTotales } from '../utils/money.js'
import Hero from './Hero.jsx'

const iconos = {
  Plane,
  PlaneTakeoff,
  Mountain,
  MountainSnow,
  TramFront,
  CableCar,
  Waves,
  Landmark,
}

export default function Itinerario() {
  const [abierto, setAbierto] = useState(null)
  const { totalDeDia } = useGastos()
  const navigate = useNavigate()

  return (
    <section>
      {/* Hero banner */}
      <Hero
        image={`${import.meta.env.BASE_URL}switzerland.jpg`}
        alt="Paisaje alpino suizo"
        className="mb-8"
        kicker={
          <>
            <span className="text-swiss-red">🇨🇭</span> 11 – 18 de agosto
          </>
        }
        title="Nuestro viaje a Suiza"
      />

      <div className="relative">
        {/* Línea vertical del timeline */}
        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-forest-200 md:left-[23px]" />

        <ul className="space-y-4">
          {itinerario.map((dia) => {
            const expandido = abierto === dia.id
            const Icono = iconos[dia.icono] ?? Mountain
            const total = totalDeDia(dia.id)
            const hayGasto = total.eur > 0 || total.chf > 0
            return (
              <li key={dia.id} className="relative pl-12 md:pl-16">
                {/* Nodo con el número del día */}
                <div
                  className={`absolute left-0 top-1 flex h-10 w-10 flex-col items-center justify-center rounded-full border-2 border-white text-white shadow md:h-12 md:w-12 ${
                    expandido ? 'bg-swiss-red' : 'bg-forest-600'
                  }`}
                >
                  <span className="text-sm font-bold leading-none md:text-base">{dia.dia}</span>
                  <span className="text-[8px] uppercase leading-none opacity-80">Ago</span>
                </div>

                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-shadow ${
                    expandido
                      ? 'border-forest-200 shadow-md'
                      : 'border-forest-100 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setAbierto(expandido ? null : dia.id)}
                    className="flex w-full items-center gap-3 p-4 text-left"
                  >
                    {/* Icono del día */}
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        expandido
                          ? 'bg-forest-600 text-white'
                          : 'bg-forest-100 text-forest-600'
                      }`}
                    >
                      <Icono size={20} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] kicker">
                        {dia.diaSemana} · {dia.dia} Ago
                      </p>
                      <h2 className="mt-0.5 truncate text-base font-semibold text-forest-800">
                        {dia.titulo}
                      </h2>
                      {!expandido && (
                        <p className="mt-0.5 truncate text-sm text-forest-500">
                          {dia.subtitulo}
                        </p>
                      )}
                      {hayGasto && (
                        <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-forest-100 px-2 py-0.5 text-[11px] font-medium text-forest-700">
                          <Wallet size={11} /> {formatTotales(total)}
                        </span>
                      )}
                    </div>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-forest-400 transition-transform ${
                        expandido ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandido && (
                    <div className="animate-fade-in px-4 pb-4">
                      <div className="rounded-xl bg-forest-50 p-4">
                        <ul className="space-y-2.5">
                          {dia.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="text-sm leading-snug text-forest-700"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => navigate(`/itinerario/dia/${dia.id}`)}
                        className="btn-primary mt-4 inline-flex items-center gap-2"
                      >
                        Ver detalle
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
