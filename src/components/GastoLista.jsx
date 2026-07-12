import { Trash2 } from 'lucide-react'
import { useGastos } from '../hooks/useGastos.jsx'
import { formatImporte } from '../utils/money.js'

// Lista de filas de gasto con botón para eliminar.
export default function GastoLista({ items }) {
  const { deleteGasto } = useGastos()

  if (items.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-forest-200 py-5 text-center text-sm text-forest-400">
        Aún no hay gastos.
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {items.map((g) => (
        <li
          key={g.id}
          className="flex items-center gap-3 rounded-xl border border-forest-100 bg-white px-3 py-2.5 shadow-sm"
        >
          <span className="flex-1 truncate text-sm text-forest-800">{g.concepto}</span>
          <span className="shrink-0 text-sm font-semibold text-forest-700">
            {formatImporte(g.importe, g.moneda)}
          </span>
          <button
            onClick={() => deleteGasto(g.id)}
            aria-label="Eliminar gasto"
            className="rounded-lg p-1.5 text-forest-300 transition-colors hover:bg-red-50 hover:text-swiss-red"
          >
            <Trash2 size={16} />
          </button>
        </li>
      ))}
    </ul>
  )
}
