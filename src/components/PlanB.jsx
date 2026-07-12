import { CloudRain, Waves, MapPin } from 'lucide-react'
import { planB } from '../data.js'

function Columna({ variante, titulo, emoji, Icono, items }) {
  const esLluvia = variante === 'lluvia'
  return (
    <div
      className={`rounded-2xl border p-4 md:p-5 ${
        esLluvia
          ? 'border-sky-200 bg-sky-50/60'
          : 'border-amber-200 bg-amber-50/60'
      }`}
    >
      <div className="mb-4 flex items-center gap-2">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${
            esLluvia ? 'bg-sky-500' : 'bg-amber-500'
          }`}
        >
          <Icono size={20} />
        </span>
        <h2 className="text-lg font-bold text-forest-800">
          {titulo} {emoji}
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-white bg-white p-3.5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-forest-800">{item.titulo}</h3>
            </div>
            <p className="mt-0.5 flex items-center gap-1 text-xs font-medium text-swiss-red">
              <MapPin size={12} /> {item.subtitulo}
            </p>
            <p className="mt-1.5 text-sm text-forest-600">{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PlanB() {
  return (
    <section>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-forest-800 md:text-3xl">Plan B</h1>
        <p className="mt-1 text-forest-500">Por si el tiempo tiene otros planes.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Columna
          variante="lluvia"
          titulo="Si llueve"
          emoji="☔"
          Icono={CloudRain}
          items={planB.lluvia}
        />
        <Columna
          variante="calor"
          titulo="Si hace calor"
          emoji="🏊"
          Icono={Waves}
          items={planB.calor}
        />
      </div>
    </section>
  )
}
