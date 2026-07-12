import { PlusCircle } from 'lucide-react'
import { itinerario } from '../data.js'
import { useGastos } from '../hooks/useGastos.jsx'
import { sumaTotales, formatTotales, mediaPorDia } from '../utils/money.js'
import GastoForm from './GastoForm.jsx'
import GastoLista from './GastoLista.jsx'

export default function Gastos() {
  const { gastos, gastosDeDia, totalDeDia } = useGastos()

  const total = sumaTotales(gastos)
  const diasConGasto = new Set(gastos.map((g) => g.diaId)).size
  const media = mediaPorDia(total, diasConGasto)

  // Días con gastos, en el orden del itinerario
  const diasConMovimiento = itinerario.filter((d) => gastosDeDia(d.id).length > 0)

  return (
    <section>
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-forest-800 md:text-3xl">Gastos</h1>
        <p className="mt-1 text-forest-500">Registro del viaje en € y CHF. 💶</p>
      </header>

      {/* Resumen */}
      <div className="mb-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-forest-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-forest-400">Total</p>
          <p className="mt-1 font-semibold text-forest-800">{formatTotales(total)}</p>
        </div>
        <div className="rounded-2xl border border-forest-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-forest-400">
            Media / día
          </p>
          <p className="mt-1 font-semibold text-forest-800">{formatTotales(media)}</p>
          <p className="mt-0.5 text-[11px] text-forest-400">
            {diasConGasto} {diasConGasto === 1 ? 'día con gastos' : 'días con gastos'}
          </p>
        </div>
      </div>

      {/* Añadir a cualquier día */}
      <div className="mb-6 rounded-2xl border border-forest-100 bg-forest-50/60 p-4">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-forest-700">
          <PlusCircle size={16} /> Añadir gasto
        </p>
        <GastoForm conSelectorDia />
      </div>

      {/* Resumen agrupado por fecha */}
      {diasConMovimiento.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-forest-200 py-10 text-center text-sm text-forest-400">
          Todavía no hay gastos registrados.
        </p>
      ) : (
        <div className="space-y-5">
          {diasConMovimiento.map((d) => (
            <div key={d.id}>
              <div className="mb-2 flex items-baseline justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-swiss-red">
                    {d.diaSemana} · {d.dia} Ago
                  </p>
                  <h2 className="truncate text-base font-semibold text-forest-800">
                    {d.titulo}
                  </h2>
                </div>
                <span className="shrink-0 text-sm font-semibold text-forest-700">
                  {formatTotales(totalDeDia(d.id))}
                </span>
              </div>
              <GastoLista items={gastosDeDia(d.id)} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
