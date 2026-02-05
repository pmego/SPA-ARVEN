import { useState } from "react";
import { services } from "../../assets/data/services";
import ServiciosCard from "./ServiciosCard";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import useVisibleCards from '../../hooks/useVisibleCards';
import useSwipe from "../../hooks/useSwipe";
import useIsMobile from "../../hooks/useIsMobile";

function CarruselServicio() {

  const [index, setIndex] = useState(0);
  const visibleCards = Math.min(useVisibleCards(), 3);

  const maxIndex = services.length - visibleCards;


  const next = () => {
    setIndex((prev) =>
      prev >= maxIndex
        ? 0
        : prev + 1
    )
  }

  const prev = () => {
    setIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    )
  }

  const isMobile = useIsMobile();

  const swipeHandlers = useSwipe({
    onSwipeLeft: isMobile ? next : null,
    onSwipeRight: isMobile ? prev : null,
  })

  return (
    <section id="servicios" className="relative max-w-6xl mx-auto mb-70 mt-40">

      {/* IMAGEN DE FONDO */}


      {/* TÍTULO */}
      <h2 className="flex items-center gap-4 text-primary font-semibold mb-10 px-4 text-lg sm:text-xl md:text-3xl">
        <span className="block w-12 h-1.5 bg-primary rounded-2xl" />
        NUESTROS SERVICIOS
      </h2>

      {/* Carrusel */}
      <div className="overflow-hidden max-w-full"
        {...swipeHandlers}
      >

        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${(100 / visibleCards) * index}%)`,
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="px-4 flex shrink-0 justify-center"
              style={{ width: `${100 / visibleCards}%` }}
            >
              <ServiciosCard {...service} />
            </div>
          ))}
        </div>
      </div>

      {/* Flechas */}

      {/* Izquierda */}
      <button
        onClick={prev}
        className="hidden md:flex absolute p-2 top-1/2 left-1 xl:-left-12 -translate-y-1/2 z-20 bg-white/80 backdrop-blur rounded-full shadow-md cursor-pointer"
      >
        <FiChevronLeft className="text-4xl text-primary hover:scale-110 transition duration-700" />
      </button>

      {/* Derecha */}
      <button
        onClick={next}
        className="hidden md:flex absolute right-1 xl:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur rounded-full p-2 shadow-md cursor-pointer"
      >
        <FiChevronRight className="text-4xl text-primary hover:scale-110 transition duration-700" />
      </button>
    </section>
  )
}

export default CarruselServicio;