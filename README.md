# 🇨🇭 Suiza en Familia · Agosto 2026

SPA para gestionar nuestro viaje familiar a Suiza (11–18 de agosto). Estética alpina:
verde bosque, blanco nieve y detalles en rojo suizo. Mobile-first, con navegación
inferior en móvil y menú lateral en escritorio.

## Secciones

- **Itinerario** — timeline vertical del 11 al 18 de agosto. Cada día es una tarjeta
  desplegable (acordeón) con botón **Ver detalle** que abre un modal con el plan completo.
- **Maletas** — checklists por miembro (Greta, Rita, Raquel, Adrià y Común) con pestañas,
  añadir/eliminar elementos y guardado automático en `localStorage`.
- **Plan B** — dos bloques: *Si llueve ☔* y *Si hace calor 🏊*.
- **Consejos** — tarjetas de tips (billetes, enchufes, agua, dinero).

## Stack

- React 18 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- lucide-react (iconos)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # sirve el build
```

## Estructura

```
src/
├── App.jsx                 # layout + navegación (sidebar / bottom nav)
├── data.js                 # todo el contenido del viaje
├── index.css               # tema Tailwind (colores alpinos, animaciones)
├── utils/format.jsx        # RichText: renderiza **negritas**
└── components/
    ├── Itinerario.jsx
    ├── DetalleModal.jsx
    ├── Maletas.jsx
    ├── PlanB.jsx
    └── Consejos.jsx
```
