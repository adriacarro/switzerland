// Todos los datos del viaje familiar a Suiza (11–18 de agosto)

export const itinerario = [
  {
    id: 'd11',
    dia: 11,
    diaSemana: 'Martes',
    icono: 'Plane',
    titulo: 'Llegada, Chocolate y Lucerna',
    subtitulo: 'Zúrich, Lindt y casco antiguo',
    hora: '08:45 h',
    resumen:
      'Llegada a Zúrich, visita a la Lindt Home of Chocolate, tren a Lucerna y tarde libre por el casco antiguo.',
    highlights: [
      '✈️ Llegada a Zúrich a las 08:45h',
      '🍫 Visita al Lindt Home of Chocolate',
      '🚆 Tren a Lucerna',
      '🏘️ Tarde en el casco antiguo de Lucerna',
    ],
    detalle: [
      { tipo: 'hora', texto: '08:45 h — Aterrizaje en el Aeropuerto de Zúrich.' },
      {
        tipo: 'bloque',
        titulo: 'Mañana',
        texto:
          'Desde el mismo aeropuerto tomaremos el tren hacia la estación central de Zúrich (Zürich HB) y de ahí conectaremos hacia **Kilchberg** para visitar la **Lindt Home of Chocolate**.',
        nota: 'Llevar las entradas ya reservadas online. ¡La inmensa fuente de chocolate nos dará la bienvenida a Suiza!',
      },
      {
        tipo: 'bloque',
        titulo: 'Mediodía',
        texto: 'Tren directo hacia **Lucerna** (trayecto aprox. 1 hora).',
      },
      {
        tipo: 'bloque',
        titulo: 'Tarde',
        texto:
          'Llegada y check-in en los **Galaxy Apartments Lucerna** (Gibraltarstrasse 15). Tarde libre para perdernos por el encantador casco antiguo medieval.',
        lista: [
          'Cruzar el histórico puente de madera cubierto (Kapellbrücke).',
          'Visitar la escultura del Monumento al León tallada en la roca.',
          'Paseo relajado bordeando el lago.',
        ],
      },
    ],
  },
  {
    id: 'd12',
    dia: 12,
    diaSemana: 'Miércoles',
    icono: 'Mountain',
    titulo: "El 'Golden Round Trip' al Monte Pilatus",
    subtitulo: 'Teleféricos, tren cremallera y barco',
    hora: 'Día completo',
    resumen:
      'Circuito circular al Monte Pilatus: teleféricos a Fräkmüntegg y cima, bajada en tren cremallera y vuelta en barco.',
    highlights: [
      '🚡 Telecabinas panorámicas desde Kriens',
      '🛝 Fräkmüntegg: juegos y tobogán alpino',
      '🏔️ Dragon Ride a la cima (2.132 m)',
      '⛴️ Tren cremallera y barco de vuelta',
    ],
    detalle: [
      {
        tipo: 'intro',
        texto:
          'Hoy haremos un circuito circular espectacular en el que **no repetiremos medio de transporte**.',
      },
      {
        tipo: 'bloque',
        titulo: 'Mañana',
        texto:
          'Tomaremos el **autobús (Línea 1)** desde el centro de Lucerna hasta Kriens. Allí nos subiremos a las pequeñas **telecabinas panorámicas**.',
      },
      {
        tipo: 'bloque',
        titulo: 'Parada intermedia · Fräkmüntegg',
        texto:
          'Nos bajaremos aquí para disfrutar de la zona de aventuras. Las niñas podrán divertirse en la gran zona de juegos y tirarse por el **tobogán alpino de verano**.',
      },
      {
        tipo: 'bloque',
        titulo: 'Cumbre',
        texto:
          'Cogeremos el gran teleférico **«Dragon Ride»** hasta la cima del Pilatus (**2.132 m**) para disfrutar de las vistas de 360° sobre los Alpes y los lagos.',
      },
      {
        tipo: 'bloque',
        titulo: 'Bajada',
        texto:
          'Descenso a bordo del **tren cremallera más empinado del mundo** (¡hasta un 48% de desnivel!) que nos dejará en la estación de Alpnachstad.',
      },
      {
        tipo: 'bloque',
        titulo: 'Regreso',
        texto:
          'Frente a la estación tomaremos un **barco** que cruzará las aguas del lago de los Cuatro Cantones de vuelta al corazón de Lucerna.',
      },
    ],
  },
  {
    id: 'd13',
    dia: 13,
    diaSemana: 'Jueves',
    icono: 'TramFront',
    titulo: 'Tren Panorámico y el Cañón Glaciar',
    subtitulo: 'Luzern–Interlaken Express y Glacier Canyon',
    hora: 'Día completo',
    resumen:
      'Luzern–Interlaken Express, check-in en Interlaken y tarde en el Cañón Glaciar de Grindelwald.',
    highlights: [
      '🚆 Luzern–Interlaken Express',
      '🏡 Check-in en Interlaken',
      '🏞️ Cañón Glaciar de Grindelwald',
      '🕸️ Pasarelas y «Spiderweb»',
    ],
    detalle: [
      {
        tipo: 'bloque',
        titulo: 'Mañana',
        texto:
          'Cogeremos las maletas y nos subiremos al **Luzern–Interlaken Express**. Casi dos horas de viaje escénico bordeando lagos turquesas, montañas y superando el paso de Brünig.',
      },
      {
        tipo: 'bloque',
        titulo: 'Mediodía',
        texto:
          'Llegada a **Interlaken Ost** y check-in en el **Central Beauty Scenery Apartment** (Jungfraustrasse 9), nuestra base para los próximos días.',
        nota: 'Aprovecharemos para comprar provisiones en el súper (Coop/Migros).',
      },
      {
        tipo: 'bloque',
        titulo: 'Tarde',
        texto:
          'Tren local (aprox. 35 min) hasta **Grindelwald**. Un breve bus (o paseo de 20 min) nos llevará al **Cañón Glaciar (Glacier Canyon)**.',
        lista: [
          'Pasarelas suspendidas entre paredes de roca de 300 m.',
          'Intentar caminar sobre la «Spiderweb», una red suspendida a 7 m sobre el río.',
        ],
      },
    ],
  },
  {
    id: 'd14',
    dia: 14,
    diaSemana: 'Viernes',
    icono: 'CableCar',
    titulo: 'El Valle de las Cascadas y Mürren',
    subtitulo: 'Pueblo sin coches y cascada Staubbach',
    hora: 'Día completo',
    resumen:
      'Tren a Lauterbrunnen, subida a Mürren (pueblo sin coches), funicular a Allmendhubel y cascada Staubbach.',
    highlights: [
      '🚆 Tren a Lauterbrunnen',
      '🚠 Mürren (pueblo sin coches)',
      '🚞 Funicular a Allmendhubel',
      '💦 Cascada Staubbach',
    ],
    detalle: [
      {
        tipo: 'bloque',
        titulo: 'Mañana',
        texto:
          'Tren desde Interlaken Ost hacia **Lauterbrunnen** (20 min). Comenzaremos la ascensión a **Mürren**, un balcón alpino libre de coches con vistas directas al Eiger, Mönch y Jungfrau.',
      },
      {
        tipo: 'bloque',
        titulo: 'Mediodía',
        texto:
          'Cogeremos el antiguo funicular rojo desde Mürren hasta la cima de **Allmendhubel**. Picnic mientras las niñas juegan en el **«Parque Floral de los Alpes»**, un parque infantil integrado en el paisaje.',
      },
      {
        tipo: 'bloque',
        titulo: 'Tarde',
        texto:
          'Descenso al valle de Lauterbrunnen para un paseo por el fondo del valle hasta la base de la icónica **cascada Staubbach**, que cae en caída libre desde casi 300 m.',
      },
    ],
  },
  {
    id: 'd15',
    dia: 15,
    diaSemana: 'Sábado',
    icono: 'MountainSnow',
    titulo: 'Miradores: Männlichen y Kleine Scheidegg',
    subtitulo: 'Royal Walk y la Cara Norte del Eiger',
    hora: 'Día completo',
    resumen:
      'Teleférico a Männlichen, Royal Walk y caminata fácil hasta Kleine Scheidegg frente a la Cara Norte del Eiger.',
    highlights: [
      '🚡 Teleférico V-Bahn a Männlichen',
      '👑 Royal Walk hasta el mirador',
      '🥾 Caminata a Kleine Scheidegg',
      '🏔️ Cara Norte del Eiger',
    ],
    detalle: [
      {
        tipo: 'bloque',
        titulo: 'Mañana',
        texto:
          'Tren desde Interlaken hasta **Grindelwald Terminal**. Subiremos en el moderno teleférico **V-Bahn** hasta **Männlichen (2.230 m)**. Recorreremos el suave **«Royal Walk»** (20–30 min) hasta el mirador en forma de corona.',
        nota: 'Las niñas podrán jugar en el parque temático de la gran vaca y el «Tree Top Path».',
      },
      {
        tipo: 'bloque',
        titulo: 'Mediodía / Tarde',
        texto:
          'En lugar de bajar en teleférico, emprenderemos la mítica y fácil **caminata panorámica desde Männlichen hasta Kleine Scheidegg** (aprox. 1h 15m, todo en ligero descenso), siempre de frente a la imponente **«Cara Norte» del Eiger**.',
        nota: 'Desde Kleine Scheidegg volveremos en tren cremallera hacia el valle y a nuestro alojamiento.',
      },
    ],
  },
  {
    id: 'd16',
    dia: 16,
    diaSemana: 'Domingo',
    icono: 'Waves',
    titulo: 'Lagos Alpinos en Grindelwald-First',
    subtitulo: 'Lago Bachalpsee y First Cliff Walk',
    hora: 'Día completo',
    resumen:
      'Teleférico a Grindelwald-First, First Cliff Walk y caminata al lago Bachalpsee.',
    highlights: [
      '🚡 Teleférico a First (2.168 m)',
      '🌉 First Cliff Walk',
      '🏞️ Caminata al lago Bachalpsee',
      '🛴 Trottibikes (opcional)',
    ],
    detalle: [
      {
        tipo: 'bloque',
        titulo: 'Mañana',
        texto:
          'Tren hasta Grindelwald y teleférico hasta la cima de **First (2.168 m)**. Empezaremos con el **First Cliff Walk**, un vertiginoso (pero muy seguro) paseo por una pasarela metálica anclada a la roca con mirador de suelo de cristal.',
      },
      {
        tipo: 'bloque',
        titulo: 'Mediodía',
        texto:
          'Una de las caminatas más fotogénicas de Suiza: la ruta casi llana desde First hasta el **lago Bachalpsee** (aprox. 50 min de ida). Las montañas se reflejan en el agua: el lugar perfecto para nuestro picnic alpino.',
      },
      {
        tipo: 'bloque',
        titulo: 'Tarde',
        texto:
          'Regreso caminando a la estación de First. Si nos sentimos aventureros, podemos alquilar **«Trottibikes»** (grandes patinetes de montaña) para bajar rodando hasta Grindelwald de forma muy divertida.',
      },
    ],
  },
  {
    id: 'd17',
    dia: 17,
    diaSemana: 'Lunes',
    icono: 'Landmark',
    titulo: 'Cultura Suiza, Lagos y Cascadas',
    subtitulo: 'Ballenberg, lago de Brienz y Giessbach',
    hora: 'Día completo',
    resumen:
      'Museo al aire libre de Ballenberg, barco por el Lago de Brienz y Cascadas de Giessbach.',
    highlights: [
      '🏛️ Museo al aire libre de Ballenberg',
      '⛴️ Barco por el Lago de Brienz',
      '🚞 Funicular histórico de Giessbach',
      '💦 Cascadas de Giessbach',
    ],
    detalle: [
      {
        tipo: 'bloque',
        titulo: 'Mañana',
        texto:
          'Un respiro de la alta montaña: tren (dirección Brienz) y bus hasta el **Museo Suizo al Aire Libre de Ballenberg**. Pasearemos entre bosques descubriendo decenas de casas históricas de distintos cantones.',
        lista: [
          'Entrar en las casas y ver animales de granja.',
          'Demostraciones en vivo de antiguos oficios (queso, pan, tallar madera).',
        ],
      },
      {
        tipo: 'bloque',
        titulo: 'Tarde',
        texto:
          'A orillas del turquesa **Lago de Brienz** tomaremos el barco de vapor y bajaremos en la parada de **Giessbach**. Subiremos en el funicular histórico (el más antiguo de Europa en su tipo) hasta el Grandhotel para pasear por los puentes sobre las atronadoras **Cascadas de Giessbach**.',
      },
    ],
  },
  {
    id: 'd18',
    dia: 18,
    diaSemana: 'Martes',
    icono: 'PlaneTakeoff',
    titulo: 'Despedida Relajada y Regreso a Casa',
    subtitulo: 'Interlaken y vuelo de regreso',
    hora: '21:40 h',
    resumen:
      'Mañana libre en Interlaken, tren a Zúrich Aeropuerto y vuelo de regreso a las 21:40 h.',
    highlights: [
      '☕ Mañana libre en Interlaken',
      '🪂 Prado de Höhematte (parapentes)',
      '🚆 Tren a Zúrich Aeropuerto',
      '✈️ Vuelo a Barcelona (21:40 h)',
    ],
    detalle: [
      {
        tipo: 'bloque',
        titulo: 'Mañana',
        texto:
          'Última mañana sin prisas en **Interlaken**. Podemos pasear por el inmenso prado central de **Höhematte** viendo aterrizar a los parapentistas, hacer compras de última hora o tomar algo despidiéndonos del entorno alpino.',
      },
      {
        tipo: 'bloque',
        titulo: 'Tarde',
        texto:
          'Check-out del apartamento y, con tiempo suficiente (sobre las 16:00–17:00), tomaremos el tren en **Interlaken Ost** rumbo al **Aeropuerto de Zúrich** (unas 2h 15m, con un transbordo fácil en Berna).',
      },
      { tipo: 'hora', texto: '21:40 h — Salida de nuestro vuelo de regreso a Barcelona. ¡Fin de la aventura!' },
    ],
  },
]

// Listas de equipaje iniciales
const itemsPersonales = [
  'Botas de trekking',
  'Chaqueta impermeable',
  'Forro polar',
  'Bañador',
  'Gafas de sol',
  'DNI',
]

export const maletasIniciales = {
  Greta: itemsPersonales,
  Rita: itemsPersonales,
  Raquel: itemsPersonales,
  Adrià: itemsPersonales,
  Común: [
    'Botiquín',
    'Batería externa (Powerbank)',
    'Adaptadores enchufe (Tipo J)',
    'Crema solar',
    'Tarjetas Sanitarias',
    'Billetes tren / Family Card',
  ],
}

export const miembros = ['Greta', 'Rita', 'Raquel', 'Adrià', 'Común']

// Identificador para gastos que no pertenecen a ningún día (p. ej. vuelos
// pagados antes del viaje).
export const GASTO_GENERAL_ID = 'general'

export const planB = {
  lluvia: [
    {
      titulo: 'Cuevas de San Beato',
      subtitulo: 'St. Beatus Höhlen',
      texto: 'A 15 min de Interlaken. Cuevas con formaciones y ríos subterráneos.',
    },
    {
      titulo: 'Cascadas de Trümmelbach',
      subtitulo: 'Lauterbrunnen',
      texto: '10 saltos de agua glaciares dentro de la montaña, accesibles por túneles y ascensor.',
    },
    {
      titulo: 'Visitar Berna',
      subtitulo: 'A 50 min en tren',
      texto: 'Soportales cubiertos (6 km de arcadas) ideales para pasear a resguardo de la lluvia.',
    },
  ],
  calor: [
    {
      titulo: 'Burgseeli',
      subtitulo: 'Cerca de Interlaken',
      texto: 'Lago natural templado tipo piscina, perfecto para un baño tranquilo.',
    },
    {
      titulo: 'Playa de Bönigen',
      subtitulo: 'Lago de Brienz',
      texto: 'Baño en las aguas glaciares turquesas del lago de Brienz.',
    },
    {
      titulo: 'Lido de Lucerna',
      subtitulo: 'Lago de los Cuatro Cantones',
      texto: 'Playa acondicionada con césped y zonas de baño en el lago.',
    },
  ],
}

export const consejos = [
  {
    id: 'billetes',
    icono: 'Ticket',
    titulo: 'Billetes',
    texto:
      'Comprar billetes desde la app SBB Mobile. ¡No olvidar seleccionar tarifa 50% y llevar siempre la Swiss Family Card!',
  },
  {
    id: 'enchufes',
    icono: 'Plug',
    titulo: 'Enchufes',
    texto:
      'Los enchufes son tipo J. Los cargadores planos de móvil encajan, pero los redondos gordos necesitan adaptador.',
  },
  {
    id: 'agua',
    icono: 'Droplets',
    titulo: 'Agua',
    texto:
      'El agua en Suiza es gratis y excelente. Llevar botellas reutilizables y rellenar en las fuentes.',
  },
  {
    id: 'dinero',
    icono: 'CreditCard',
    titulo: 'Dinero',
    texto:
      'Se puede pagar casi todo con tarjeta (usar Revolut/N26 para evitar comisiones). Sacar muy pocos CHF en efectivo.',
  },
]
