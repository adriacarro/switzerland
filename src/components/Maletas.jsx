import { useState } from 'react'
import { Plus, Trash2, Check } from 'lucide-react'
import { maletasIniciales, miembros } from '../data.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const STORAGE_KEY = 'suiza-maletas-v1'

// Construye el estado inicial: cada item -> { id, texto, hecho: false }
function construirInicial() {
  let uid = 0
  const estado = {}
  for (const m of miembros) {
    estado[m] = maletasIniciales[m].map((texto) => ({
      id: `${m}-${uid++}`,
      texto,
      hecho: false,
    }))
  }
  return estado
}

export default function Maletas() {
  const [listas, setListas] = useLocalStorage(STORAGE_KEY, construirInicial)
  const [activa, setActiva] = useState('Común')
  const [nuevo, setNuevo] = useState('')

  const items = listas[activa] ?? []
  const hechos = items.filter((i) => i.hecho).length

  const toggle = (id) =>
    setListas((prev) => ({
      ...prev,
      [activa]: prev[activa].map((i) => (i.id === id ? { ...i, hecho: !i.hecho } : i)),
    }))

  const eliminar = (id) =>
    setListas((prev) => ({
      ...prev,
      [activa]: prev[activa].filter((i) => i.id !== id),
    }))

  const añadir = (e) => {
    e.preventDefault()
    const texto = nuevo.trim()
    if (!texto) return
    setListas((prev) => ({
      ...prev,
      [activa]: [
        ...prev[activa],
        { id: `${activa}-${Date.now()}`, texto, hecho: false },
      ],
    }))
    setNuevo('')
  }

  return (
    <section>
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-forest-800 md:text-3xl">Maletas</h1>
        <p className="mt-1 text-forest-500">Marca lo que ya esté guardado. Se guarda solo. 🎒</p>
      </header>

      {/* Tabs de miembros */}
      <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
        {miembros.map((m) => {
          const active = activa === m
          return (
            <button
              key={m}
              onClick={() => setActiva(m)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? 'bg-forest-600 text-white shadow-sm'
                  : 'bg-white text-forest-600 border border-forest-100 hover:bg-forest-100'
              }`}
            >
              {m}
            </button>
          )
        })}
      </div>

      {/* Progreso */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-forest-100">
          <div
            className="h-full rounded-full bg-forest-500 transition-all duration-300"
            style={{ width: `${items.length ? (hechos / items.length) * 100 : 0}%` }}
          />
        </div>
        <span className="text-xs font-medium text-forest-500">
          {hechos}/{items.length}
        </span>
      </div>

      {/* Lista */}
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="group flex items-center gap-3 rounded-xl border border-forest-100 bg-white px-3 py-2.5 shadow-sm"
          >
            <button
              onClick={() => toggle(item.id)}
              aria-label={item.hecho ? 'Desmarcar' : 'Marcar'}
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                item.hecho
                  ? 'border-forest-500 bg-forest-500 text-white'
                  : 'border-forest-300 bg-white'
              }`}
            >
              {item.hecho && <Check size={15} className="animate-pop" strokeWidth={3} />}
            </button>
            <span
              className={`flex-1 text-sm transition-colors ${
                item.hecho ? 'text-forest-400 line-through' : 'text-forest-800'
              }`}
            >
              {item.texto}
            </span>
            <button
              onClick={() => eliminar(item.id)}
              aria-label="Eliminar"
              className="rounded-lg p-1.5 text-forest-300 transition-colors hover:bg-red-50 hover:text-swiss-red"
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
        {items.length === 0 && (
          <li className="rounded-xl border border-dashed border-forest-200 py-8 text-center text-sm text-forest-400">
            Lista vacía. Añade algo abajo 👇
          </li>
        )}
      </ul>

      {/* Añadir nuevo */}
      <form onSubmit={añadir} className="mt-4 flex gap-2">
        <input
          value={nuevo}
          onChange={(e) => setNuevo(e.target.value)}
          placeholder={`Añadir a ${activa}…`}
          className="flex-1 rounded-xl border border-forest-200 bg-white px-4 py-2.5 text-sm text-forest-800 outline-none placeholder:text-forest-300 focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
        />
        <button
          type="submit"
          aria-label="Añadir"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-600 text-white shadow-sm transition-colors hover:bg-forest-700 active:scale-95"
        >
          <Plus size={20} />
        </button>
      </form>
    </section>
  )
}
