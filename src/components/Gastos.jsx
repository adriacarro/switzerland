import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { itinerario, GASTO_GENERAL_ID } from '../data.js'
import { useGastos } from '../hooks/useGastos.jsx'
import {
  sumaTotales,
  formatTotales,
  mediaPorDia,
  totalEnModo,
  CHF_A_EUR,
} from '../utils/money.js'
import GastoLista from './GastoLista.jsx'
import GastoModal from './GastoModal.jsx'
import SegmentedToggle from './SegmentedToggle.jsx'

const OPCIONES_MODO = [
  { value: 'original', label: 'Original' },
  { value: 'EUR', label: '€ EUR' },
  { value: 'CHF', label: 'CHF' },
]

export default function Gastos() {
  const { gastos, gastosDeDia, totalDeDia } = useGastos()
  const { hash } = useLocation()
  const [modo, setModo] = useState('original')
  const [modal, setModal] = useState(false)
  const [resaltado, setResaltado] = useState(null)

  // Si llegamos con un ancla (#gasto-dia-<id>, p. ej. desde "Ver gastos"),
  // hacemos scroll hasta ese grupo y lo resaltamos brevemente.
  useEffect(() => {
    if (!hash) return
    const elId = hash.slice(1) // 'gasto-dia-d11'
    const el = document.getElementById(elId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setResaltado(elId.replace('gasto-dia-', ''))
  }, [hash])

  // El total incluye todo (también los gastos "General").
  const total = sumaTotales(gastos)

  // La media por día sólo cuenta gastos asignados a un día del viaje.
  const gastosDeDias = gastos.filter((g) => g.diaId !== GASTO_GENERAL_ID)
  const diasConGasto = new Set(gastosDeDias.map((g) => g.diaId)).size
  const media = mediaPorDia(sumaTotales(gastosDeDias), diasConGasto)

  // Grupos a mostrar: "General" primero (si tiene gastos), luego los días del
  // itinerario que tengan gastos, en orden.
  const grupos = []
  const gastosGeneral = gastosDeDia(GASTO_GENERAL_ID)
  if (gastosGeneral.length > 0) {
    grupos.push({
      id: GASTO_GENERAL_ID,
      kicker: 'General',
      titulo: 'Antes del viaje / sin día',
      items: gastosGeneral,
    })
  }
  itinerario.forEach((d) => {
    const items = gastosDeDia(d.id)
    if (items.length > 0) {
      grupos.push({ id: d.id, kicker: `${d.diaSemana} · ${d.dia} Ago`, titulo: d.titulo, items })
    }
  })

  return (
    <section>
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-forest-800 md:text-3xl">Gastos</h1>
        <p className="mt-1 text-forest-500">Registro del viaje en € y CHF. 💶</p>
      </header>

      {/* Selector de divisa para los totales */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-forest-400">
          Ver totales en
        </span>
        <SegmentedToggle options={OPCIONES_MODO} value={modo} onChange={setModo} />
      </div>

      {/* Resumen */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-forest-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-forest-400">Total</p>
          <p className="mt-1 font-semibold text-forest-800">
            {formatTotales(totalEnModo(total, modo))}
          </p>
        </div>
        <div className="rounded-2xl border border-forest-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-forest-400">
            Media / día
          </p>
          <p className="mt-1 font-semibold text-forest-800">
            {formatTotales(totalEnModo(media, modo))}
          </p>
          <p className="mt-0.5 text-[11px] text-forest-400">
            {diasConGasto} {diasConGasto === 1 ? 'día con gastos' : 'días con gastos'}
          </p>
        </div>
      </div>

      {/* Nota de conversión */}
      <p className="mb-5 mt-2 text-[11px] text-forest-400">
        {modo === 'original'
          ? 'Cada divisa se muestra por separado (sin conversión).'
          : `Conversión aproximada · 1 CHF ≈ ${CHF_A_EUR.toLocaleString('es-ES')} €`}
      </p>

      {/* Añadir a cualquier día */}
      <button
        onClick={() => setModal(true)}
        className="mb-6 inline-flex items-center gap-1.5 rounded-xl bg-forest-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-forest-800 active:scale-[0.98]"
      >
        <Plus size={18} /> Añadir gasto
      </button>

      {/* Resumen agrupado por fecha */}
      {grupos.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-forest-200 py-10 text-center text-sm text-forest-400">
          Todavía no hay gastos registrados.
        </p>
      ) : (
        <div className="space-y-5">
          {grupos.map((g) => (
            <div
              key={g.id}
              id={`gasto-dia-${g.id}`}
              onAnimationEnd={() => setResaltado(null)}
              className={`scroll-mt-6 rounded-2xl p-2 transition-colors ${
                resaltado === g.id ? 'animate-resaltar' : ''
              }`}
            >
              <div className="mb-2 flex items-baseline justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-swiss-red">
                    {g.kicker}
                  </p>
                  <h2 className="truncate text-base font-semibold text-forest-800">
                    {g.titulo}
                  </h2>
                </div>
                <span className="shrink-0 text-sm font-semibold text-forest-700">
                  {formatTotales(totalEnModo(totalDeDia(g.id), modo))}
                </span>
              </div>
              <GastoLista items={g.items} />
            </div>
          ))}
        </div>
      )}

      {modal && (
        <GastoModal titulo="Nuevo gasto" conSelectorDia onClose={() => setModal(false)} />
      )}
    </section>
  )
}
