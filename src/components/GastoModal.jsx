import { useEffect } from 'react'
import { X } from 'lucide-react'
import GastoForm from './GastoForm.jsx'

// Modal con el formulario para añadir un gasto. Se cierra al añadir,
// con la X, con Escape o pulsando fuera.
export default function GastoModal({ titulo = 'Nuevo gasto', diaId, conSelectorDia, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-forest-900/50 p-0 backdrop-blur-sm md:items-center md:p-4"
      onClick={onClose}
    >
      <div
        className="animate-fade-in w-full max-w-md rounded-t-3xl bg-white p-5 shadow-2xl md:rounded-3xl md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-forest-800">{titulo}</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full p-1.5 text-forest-400 transition-colors hover:bg-forest-50"
          >
            <X size={18} />
          </button>
        </div>
        <GastoForm diaId={diaId} conSelectorDia={conSelectorDia} onAdded={onClose} />
      </div>
    </div>
  )
}
