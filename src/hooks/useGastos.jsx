import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { sumaTotales } from '../utils/money.js'

const STORAGE_KEY = 'suiza-gastos-v1'

const GastosContext = createContext(null)

function cargar() {
  try {
    const guardado = localStorage.getItem(STORAGE_KEY)
    if (guardado) return JSON.parse(guardado)
  } catch {
    /* ignorar */
  }
  return []
}

export function GastosProvider({ children }) {
  const [gastos, setGastos] = useState(cargar)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gastos))
    } catch {
      /* ignorar */
    }
  }, [gastos])

  const value = useMemo(() => {
    const addGasto = ({ diaId, concepto, importe, moneda }) =>
      setGastos((prev) => [
        ...prev,
        {
          id: `${diaId}-${Date.now()}-${prev.length}`,
          diaId,
          concepto,
          importe,
          moneda,
        },
      ])

    const deleteGasto = (id) => setGastos((prev) => prev.filter((g) => g.id !== id))

    const gastosDeDia = (diaId) => gastos.filter((g) => g.diaId === diaId)

    const totalDeDia = (diaId) => sumaTotales(gastosDeDia(diaId))

    return { gastos, addGasto, deleteGasto, gastosDeDia, totalDeDia }
  }, [gastos])

  return <GastosContext.Provider value={value}>{children}</GastosContext.Provider>
}

export function useGastos() {
  const ctx = useContext(GastosContext)
  if (!ctx) throw new Error('useGastos debe usarse dentro de <GastosProvider>')
  return ctx
}
