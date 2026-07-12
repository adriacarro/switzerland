import { useState } from 'react'
import { CalendarDays, Luggage, CloudRain, Lightbulb, Mountain } from 'lucide-react'
import Itinerario from './components/Itinerario.jsx'
import Maletas from './components/Maletas.jsx'
import PlanB from './components/PlanB.jsx'
import Consejos from './components/Consejos.jsx'

const secciones = [
  { id: 'itinerario', label: 'Itinerario', icon: CalendarDays, Component: Itinerario },
  { id: 'maletas', label: 'Maletas', icon: Luggage, Component: Maletas },
  { id: 'planb', label: 'Plan B', icon: CloudRain, Component: PlanB },
  { id: 'consejos', label: 'Consejos', icon: Lightbulb, Component: Consejos },
]

export default function App() {
  const [activa, setActiva] = useState('itinerario')
  const Activa = secciones.find((s) => s.id === activa).Component

  return (
    <div className="alpine-bg min-h-screen md:flex">
      {/* Sidebar — pantallas grandes */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r border-forest-100 bg-white/70 backdrop-blur">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-forest-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-600 text-white shadow-sm">
            <Mountain size={22} />
          </div>
          <div>
            <p className="font-bold leading-tight text-forest-800">Suiza 2026</p>
            <p className="text-xs text-forest-500">11 – 18 de agosto</p>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {secciones.map(({ id, label, icon: Icon }) => {
            const active = activa === id
            return (
              <button
                key={id}
                onClick={() => setActiva(id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-forest-600 text-white shadow-sm'
                    : 'text-forest-700 hover:bg-forest-100'
                }`}
              >
                <Icon size={20} />
                {label}
              </button>
            )
          })}
        </nav>
        <div className="px-4 py-4 border-t border-forest-100">
          <div className="rounded-xl bg-forest-50 px-4 py-3">
            <p className="flex items-center gap-1.5 text-sm font-medium text-forest-700">
              <span className="text-swiss-red">🇨🇭</span> Viaje familiar
            </p>
            <p className="mt-0.5 text-xs text-forest-500">Greta · Rita · Raquel · Adrià</p>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 md:pl-64">
        <main className="mx-auto max-w-3xl px-4 pb-28 pt-6 md:px-8 md:pb-12 md:pt-10">
          <Activa />
        </main>
      </div>

      {/* Bottom nav — móvil */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t border-forest-100 bg-white/90 backdrop-blur pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-4">
          {secciones.map(({ id, label, icon: Icon }) => {
            const active = activa === id
            return (
              <button
                key={id}
                onClick={() => setActiva(id)}
                className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
                  active ? 'text-forest-600' : 'text-forest-400'
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                    active ? 'bg-forest-100' : ''
                  }`}
                >
                  <Icon size={20} />
                </span>
                {label}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
