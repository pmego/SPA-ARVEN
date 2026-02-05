import { useEffect, useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { pasos } from "../../assets/data/metodologia"
import MetodologiaCard from "./MetodologiaCard"
import useSwipe from '../../hooks/useSwipe';

export default function MetodologiaCarrusel() {

    const [visibleCards, setVisibleCard] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCard(1)   // mobile
            } else {
                setVisibleCard(2)   // tablet + desktop
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const [index, setIndex] = useState(0)

    const maxIndex = pasos.length - visibleCards

    useEffect(() => {
        if (index > maxIndex) {
            setIndex(0)
        }
    }, [visibleCards, maxIndex])

    const prev = () => {
        setIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
    }

    const next = () => {
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
    }

    const swipe = useSwipe({
        onSwipeLeft: next,
        onSwipeRight: prev,
    })

    return (
        <section id="metodologia" className="max-w-4xl mx-auto px-1.5 my-32">
            <div className="bg-black rounded-2xl p-6 lg:p-10 flex flex-col md:flex-row items-start sm:items-center gap-20 md:gap-25 lg:gap-35">

                {/* TEXTO IZQUIERDA */}
                <div className="w-full text-center sm:w-1/3 md:text-start">
                    <h2 className="text-white text-4xl font-bold leading-tight">
                        NUESTRA <br /> METODOLOGÍA
                    </h2>
                    <p className="text-primary italic font-bold mt-4 text-xl">
                        De principio a fin
                    </p>
                </div>

                {/* CARRUSEL */}
                <div className="relative w-full overflow-hidden sm:max-w-100">

                    {/* BOTÓN IZQUIERDA */}
                    <button
                        onClick={prev}
                        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-700 text-white p-2 rounded-full cursor-pointer"
                    >
                        <FiChevronLeft />
                    </button>

                    {/* SLIDES */}
                    <div className="overflow-hidden"
                        {...(visibleCards === 1 ? swipe : {})}
                    >
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{
                                transform: `translateX(-${index * (100 / visibleCards)}%)`,
                            }}
                        >
                            {pasos.map((paso) => (
                                <div
                                    key={paso.id}
                                    className="shrink-0 px-3"
                                    style={{ width: `${100 / visibleCards}%` }}
                                >
                                    <MetodologiaCard
                                        numero={paso.numero}
                                        titulo={paso.title}
                                        icono={paso.img}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BOTÓN DERECHA */}
                    <button
                        onClick={next}
                        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-700 text-white p-2 rounded-full cursor-pointer"
                    >
                        <FiChevronRight />
                    </button>

                </div>
            </div>
        </section>
    )
}