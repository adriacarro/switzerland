import { useEffect, useState } from 'react'

// Estado de React persistido en localStorage, tolerante a errores.
// `inicial` puede ser un valor o una función (igual que useState).
export function useLocalStorage(key, inicial) {
  const [value, setValue] = useState(() => {
    try {
      const guardado = localStorage.getItem(key)
      if (guardado != null) return JSON.parse(guardado)
    } catch {
      /* ignorar (localStorage lleno, JSON inválido, modo privado…) */
    }
    return typeof inicial === 'function' ? inicial() : inicial
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* ignorar */
    }
  }, [key, value])

  return [value, setValue]
}
