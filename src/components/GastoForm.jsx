import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useGastos } from '../hooks/useGastos.jsx'
import { itinerario } from '../data.js'

// Formulario para añadir un gasto. Si se pasa `diaId` el día es fijo;
// si se pasa `conSelectorDia` se muestra un desplegable con los 8 días.
export default function GastoForm({ diaId, conSelectorDia = false }) {
  const { addGasto } = useGastos()
  const [concepto, setConcepto] = useState('')
  const [importe, setImporte] = useState('')
  const [moneda, setMoneda] = useState('EUR')
  const [dia, setDia] = useState(itinerario[0].id)

  const enviar = (e) => {
    e.preventDefault()
    const c = concepto.trim()
    const n = parseFloat(importe.replace(',', '.'))
    const destino = conSelectorDia ? dia : diaId
    if (!c || !(n > 0) || !destino) return
    addGasto({ diaId: destino, concepto: c, importe: n, moneda })
    setConcepto('')
    setImporte('')
  }

  return (
    <form onSubmit={enviar} className="space-y-2">
      {conSelectorDia && (
        <select
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          className="w-full rounded-xl border border-forest-200 bg-white px-4 py-2.5 text-sm text-forest-800 outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
        >
          {itinerario.map((d) => (
            <option key={d.id} value={d.id}>
              {d.dia} Ago · {d.titulo}
            </option>
          ))}
        </select>
      )}

      <div className="flex gap-2">
        <input
          value={concepto}
          onChange={(e) => setConcepto(e.target.value)}
          placeholder="Concepto (ej. Comida)"
          className="min-w-0 flex-1 rounded-xl border border-forest-200 bg-white px-4 py-2.5 text-sm text-forest-800 outline-none placeholder:text-forest-300 focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
        />
        <input
          value={importe}
          onChange={(e) => setImporte(e.target.value)}
          inputMode="decimal"
          placeholder="0,00"
          className="w-24 rounded-xl border border-forest-200 bg-white px-3 py-2.5 text-sm text-forest-800 outline-none placeholder:text-forest-300 focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
        />
      </div>

      <div className="flex gap-2">
        {/* Toggle de divisa */}
        <div className="flex overflow-hidden rounded-xl border border-forest-200">
          {['EUR', 'CHF'].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMoneda(m)}
              className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                moneda === m
                  ? 'bg-forest-600 text-white'
                  : 'bg-white text-forest-500 hover:bg-forest-50'
              }`}
            >
              {m === 'EUR' ? '€ EUR' : 'CHF'}
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-forest-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-forest-800 active:scale-[0.98]"
        >
          <Plus size={18} /> Añadir gasto
        </button>
      </div>
    </form>
  )
}
