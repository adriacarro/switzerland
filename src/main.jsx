import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { GastosProvider } from './hooks/useGastos.jsx'
import { ToastProvider } from './hooks/useToast.jsx'
import './index.css'

// En producción la app vive bajo /switzerland/ (GitHub Pages); en local, bajo /.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ToastProvider>
        <GastosProvider>
          <App />
        </GastosProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
