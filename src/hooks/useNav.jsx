import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const NavContext = createContext(null)

// Navegación entre secciones + "ir a los gastos de un día concreto".
export function NavProvider({ children }) {
  const [seccion, setSeccion] = useState('itinerario')
  const [gastoTarget, setGastoTarget] = useState(null)

  const verGastosDeDia = useCallback((diaId) => {
    setGastoTarget(diaId)
    setSeccion('gastos')
  }, [])

  const value = useMemo(
    () => ({ seccion, setSeccion, gastoTarget, setGastoTarget, verGastosDeDia }),
    [seccion, gastoTarget, verGastosDeDia],
  )

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

export function useNav() {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav debe usarse dentro de <NavProvider>')
  return ctx
}
