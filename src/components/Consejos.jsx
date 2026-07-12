import { Ticket, Plug, Droplets, CreditCard } from 'lucide-react'
import { consejos } from '../data.js'

const iconos = { Ticket, Plug, Droplets, CreditCard }

export default function Consejos() {
  return (
    <section>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-forest-800 md:text-3xl">Consejos</h1>
        <p className="mt-1 text-forest-500">Trucos prácticos para movernos como locales.</p>
      </header>

      <div className="space-y-3">
        {consejos.map((c) => {
          const Icono = iconos[c.icono]
          return (
            <div
              key={c.id}
              className="flex gap-4 rounded-2xl border border-forest-100 bg-white p-4 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                {Icono && <Icono size={22} />}
              </span>
              <div className="min-w-0">
                <h2 className="font-semibold text-forest-800">{c.titulo}</h2>
                <p className="mt-1 text-sm leading-relaxed text-forest-600">{c.texto}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-swiss-red/20 bg-swiss-red/5 p-4 text-center">
        <p className="text-sm font-medium text-swiss-red">
          🇨🇭 Gute Reise · ¡Buen viaje, familia!
        </p>
      </div>
    </section>
  )
}
