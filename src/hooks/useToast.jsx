import { createContext, useCallback, useContext, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const ToastContext = createContext(null)

// Muestra avisos breves (toasts) que se cierran solos.
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const idRef = useRef(0)

  const toast = useCallback((message) => {
    const id = ++idRef.current
    setToasts((prev) => [...prev, { id, message }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 2500)
  }, [])

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-24 z-[60] flex flex-col items-center gap-2 px-4 md:bottom-6">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="animate-toast pointer-events-auto flex items-center gap-2 rounded-xl bg-forest-700 px-4 py-3 text-sm font-medium text-white shadow-lg"
          >
            <CheckCircle2 size={18} className="shrink-0 text-forest-200" />
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast debe usarse dentro de <ToastProvider>')
  return ctx
}
