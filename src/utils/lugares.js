// Lugares mencionados en los planes → consulta para Google Maps.
// La clave es el texto tal cual aparece en las descripciones; se enlaza
// cada aparición. El orden no importa: al construir el patrón se ordenan
// de más largo a más corto para que "Interlaken Ost" gane a "Interlaken".
export const LUGARES = {
  // Venues concretos
  'Lindt Home of Chocolate': 'Lindt Home of Chocolate, Kilchberg',
  'Galaxy Apartments Lucerna': 'Gibraltarstrasse 15, Luzern',
  'Central Beauty Scenery Apartment': 'Jungfraustrasse 9, Interlaken',
  'Cañón Glaciar': 'Gletscherschlucht Grindelwald',
  'First Cliff Walk': 'First Cliff Walk, Grindelwald',
  'Grindelwald Terminal': 'Grindelwald Terminal',
  'Kleine Scheidegg': 'Kleine Scheidegg',
  'Monumento al León': 'Löwendenkmal, Luzern',
  'Kapellbrücke': 'Kapellbrücke, Luzern',
  'Allmendhubel': 'Allmendhubel, Mürren',
  'Fräkmüntegg': 'Fräkmüntegg, Pilatus',
  'Alpnachstad': 'Alpnachstad',
  'Bachalpsee': 'Bachalpsee',
  'Ballenberg': 'Ballenberg Freilichtmuseum',
  'Staubbach': 'Staubbachfall, Lauterbrunnen',
  'Höhematte': 'Höhematte, Interlaken',
  // Estaciones / aeropuerto
  'Aeropuerto de Zúrich': 'Zurich Airport',
  'Zürich HB': 'Zürich Hauptbahnhof',
  'Interlaken Ost': 'Interlaken Ost, Bahnhof',
  // Montañas y miradores
  'Männlichen': 'Männlichen',
  'Pilatus': 'Mount Pilatus',
  'First': 'Grindelwald First',
  // Pueblos y ciudades
  'Lauterbrunnen': 'Lauterbrunnen',
  'Interlaken': 'Interlaken',
  'Grindelwald': 'Grindelwald',
  'Kilchberg': 'Kilchberg ZH',
  'Lucerna': 'Luzern',
  'Mürren': 'Mürren',
  'Kriens': 'Kriens',
  'Giessbach': 'Giessbach, Brienz',
  'Brienz': 'Brienz, Switzerland',
  'Berna': 'Bern, Switzerland',
}

export function mapsUrl(query) {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query)
}
