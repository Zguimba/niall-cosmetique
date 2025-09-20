import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Crée la racine et rend l'application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* basename = nom du repo pour GitHub Pages */}
    <BrowserRouter basename="/niall-cosmetique">
      <App />
    </BrowserRouter>
  </StrictMode>
)
