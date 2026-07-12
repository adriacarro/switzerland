// Utilidades para importes en dos divisas: EUR (€) y CHF (franco suizo).
// No hay conversión: los totales se muestran separados por divisa.

const fmtEUR = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })
const fmtCHF = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CHF' })

// Suma una lista de gastos agrupando por divisa → { eur, chf }
export function sumaTotales(lista) {
  return lista.reduce(
    (acc, g) => {
      if (g.moneda === 'CHF') acc.chf += g.importe
      else acc.eur += g.importe
      return acc
    },
    { eur: 0, chf: 0 },
  )
}

// Formatea un importe individual según su divisa
export function formatImporte(n, moneda) {
  return moneda === 'CHF' ? fmtCHF.format(n) : fmtEUR.format(n)
}

// Formatea un total { eur, chf } → "12,50 € · 30,00 CHF"
// Omite la divisa que sea 0. Si ambas son 0 devuelve "—".
export function formatTotales({ eur, chf }) {
  const partes = []
  if (eur > 0) partes.push(fmtEUR.format(eur))
  if (chf > 0) partes.push(fmtCHF.format(chf))
  return partes.length ? partes.join(' · ') : '—'
}

// Media por divisa dado un total y un nº de días con gasto
export function mediaPorDia({ eur, chf }, dias) {
  if (!dias) return { eur: 0, chf: 0 }
  return { eur: eur / dias, chf: chf / dias }
}
