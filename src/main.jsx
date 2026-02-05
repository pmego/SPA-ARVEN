import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero/Hero'
import Riesgo from './components/Riesgo/Riesgo'
import CarruselServicio from './components/CarruselServicios/CarruselServicio'
import MetodologiaCarrusel from './components/CarruselMetodologias/MetodologiaCarrusel'
import Nosotros from './components/Nosotros/Nosotros'
import Valores from './components/Valores/Valores'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import WspBoton from './components/WspBoton/WspBoton'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* SECCIÓN HERO */}
    <Hero />

    {/* SECCIÓN RIESGO */}
    <Riesgo />

    {/* SECCIÓN CARRUSEL */}
    <CarruselServicio />

    {/* SECCIÓN METODOLOGÍA */}
    <MetodologiaCarrusel />

    {/* SECCIÓN NOSOTROS */}
    <Nosotros />

    {/* SECCIÓN VALORES */}
    <Valores />

    {/* SECCIÓN CONTACTO */}
    <Contacto />

    {/* SECCIÓN FOOTER */}
    <Footer />

    <WspBoton />
  </StrictMode>,
)
