import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useGastos } from '../hooks/useGastos.jsx'
import { useToast } from '../hooks/useToast.jsx'
import { itinerario, GASTO_GENERAL_ID } from '../data.js'
import SegmentedToggle from './SegmentedToggle.jsx'

const OPCIONES_MONEDA = [
  { value: 'EUR', label: '€ EUR' },
  { value: 'CHF', label: 'CHF' },
]

// Formulario para añadir un gasto. Si se pasa `diaId` el día es fijo;
// si se pasa `conSelectorDia` se muestra un desplegable con los 8 días.
export default function GastoForm({ diaId, conSelectorDia = false, onAdded }) {
  const { addGasto } = useGastos()
  const toast = useToast()
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
    onAdded?.()
    toast('Gasto añadido')
  }

  return (
    <form onSubmit={enviar} className="space-y-2">
      {conSelectorDia && (
        <select
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          className="w-full rounded-xl border border-forest-200 bg-white px-4 py-2.5 text-sm text-forest-800 outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
        >
          <option value={GASTO_GENERAL_ID}>General · antes del viaje</option>
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
        <SegmentedToggle options={OPCIONES_MONEDA} value={moneda} onChange={setMoneda} />
        <button
          type="submit"
          className="btn-primary flex flex-1 items-center justify-center gap-1.5"
        >
          <Plus size={18} /> Añadir gasto
        </button>
      </div>
    </form>
  )
}
