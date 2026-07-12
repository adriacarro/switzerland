// Cabecera a sangre reutilizable: imagen de fondo, degradado y título superpuesto.
// La usan el listado (sin enlaces) y el detalle del día (con enlaces arriba).
export default function Hero({
  image,
  alt,
  kicker,
  title,
  className = '',
  titleClassName = 'mt-1.5 text-3xl md:text-4xl',
  overlayFrom = 'from-forest-900/85',
  topBar,
}) {
  return (
    <div
      className={`relative -mx-4 -mt-6 overflow-hidden md:-mx-8 md:-mt-10 md:rounded-b-3xl ${className}`}
    >
      <img src={image} alt={alt} className="h-56 w-full object-cover md:h-72" />

      {/* Degradado superior (sólo si hay enlaces arriba) para legibilidad */}
      {topBar && (
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-forest-900/60 to-transparent" />
      )}
      {/* Degradado inferior para el título */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${overlayFrom} via-forest-900/25 to-transparent`}
      />

      {topBar && (
        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4 md:p-5">
          {topBar}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/90">
          {kicker}
        </p>
        <h1 className={`font-semibold text-white drop-shadow-sm ${titleClassName}`}>
          {title}
        </h1>
      </div>
    </div>
  )
}
