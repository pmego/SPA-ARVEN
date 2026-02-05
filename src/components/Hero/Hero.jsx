import { useState } from 'react';
import banner from '../../assets/Imagenes/banner.webp'
import logoArven from '../../assets/logos/logo_arven.svg'
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Hero() {

    const [open, setOpen] = useState(false)

    return (
        <section id='inicio' className='relative min-h-screen w-full overflow-x-hidden'>

            {/* IMÁGEN DE FONDO */}
            <div className='absolute inset-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${banner})` }}
            >

                {/* Contenido */}
                <div className='relative z-10 flex min-h-screen flex-col'>

                    <nav className='mx-auto md:fixed md:top-4 md:left-1/2 md:-translate-x-1/2 md:z-50 mt-4 w-[95%] max-w-6xl rounded-full bg-white/30 px-5 py-4 backdrop-blur-lg shadow-lg border border-white/30'>
                        {/* LOGO */}
                        <div className='flex items-center justify-between'>
                            <Link to='inicio' smooth={true} duration={300} offset={-90} className='cursor-pointer'>
                                <img
                                    src={logoArven}
                                    alt="Logo Arven"
                                    className='h-8 w-auto'
                                />
                            </Link>



                            {/* MENÚ DESKTOP*/}
                            <ul className='hidden md:flex gap-8 text-base font-medium'>
                                <li><Link to='servicios' smooth={true} duration={1200} offset={-200} spy activeClass='text-primary font-semibold' className='cursor-pointer transition-all duration-500 hover:text-primary'>SERVICIOS</Link></li>
                                <li><Link to='nosotros' smooth={true} duration={1200} offset={-80} spy activeClass='text-primary font-semibold' className='cursor-pointer transition-all duration-500 hover:text-primary'>NOSOTROS</Link></li>
                                <li><Link to='valores' smooth={true} duration={1200} offset={-10} spy activeClass='text-primary font-semibold' className='cursor-pointer transition-all duration-500 hover:text-primary'>VALORES</Link></li>
                                <li><Link to='contacto' smooth={true} duration={1200} offset={-10} spy activeClass='text-primary font-semibold' className='cursor-pointer transition-all duration-500 hover:text-primary'>CONTÁCTANOS</Link></li>
                            </ul>


                            {/* MENÚ HAMBURGUESA*/}
                            <button
                                onClick={() => setOpen(!open)}
                                className='md:hidden flex flex-col gap-1'
                            >
                                <span className={`h-0.5 w-6 bg-black transition ${open && 'rotate-45 translate-y-1.5'}`} />
                                <span className={`h-0.5 w-6 bg-black transition ${open && 'rotate-45 opacity-0'}`} />
                                <span className={`h-0.5 w-6 bg-black transition ${open && '-rotate-45 -translate-y-1.5'}`} />
                            </button>
                        </div>
                    </nav>

                    {/* MENÚ MOBILE */}
                    <div
                        className={`overflow-hidden transition-all duration-1500 md:hidden ${open ? 'max-h-96 mt-2 md:mt-26 mx-3' : 'max-h-0 mt-2 md:mt-26'}`}
                    >
                        <ul className='flex flex-col gap-4 rounded-2xl bg-white/30 backdrop-blur-lg p-6 text-base font-medium shadow-lg'>
                            <li><Link to='servicios' smooth={true} duration={1200} offset={-70} onClick={() => setOpen()} className='cursor-pointer transition-all duration-500 hover:text-primary'>SERVICIOS</Link></li>
                            <li><Link to='nosotros' smooth={true} duration={1200} offset={-10} onClick={() => setOpen()} className='cursor-pointer transition-all duration-500 hover:text-primary'>NOSOTROS</Link></li>
                            <li><Link to='valores' smooth={true} duration={1200} offset={-10} onClick={() => setOpen()} className='cursor-pointer transition-all duration-500 hover:text-primary'>VALORES</Link></li>
                            <li><Link to='contacto' smooth={true} duration={1200} offset={-5} onClick={() => setOpen()} className='cursor-pointer transition-all duration-500 hover:text-primary'>CONTÁCTANOS</Link></li>
                        </ul>
                    </div>

                    {/* TEXTO */}
                    <div className='mx-auto w-full max-w-6xl px-2'>
                        <div className='flex flex-1 flex-col text-black mt-10 md:mt-50 ml-5 items-start'>
                            <h1 className='max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl'>
                                ARQUITECTURA INTEGRAL CON RESPALDO TÉCNICO Y LEGAL
                            </h1>
                            <p className='mt-4 max-w-sm md:max-w-lg text-xl text-black sm:text-lg md:text-xl font-medium'>
                                Transformamos espacios corporativos y residenciales
                                garantizando viabilidad municipal y registral
                            </p>
                            <a
                                href="https://wa.me/51991746659"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 flex w-fit items-center gap-3 rounded-full bg-[#91766D] px-6 py-3 font-extrabold tracking-widest text-white transition duration-500 hover:scale-105 cursor-pointer"
                            >
                                <FaWhatsapp className="text-3xl" />
                                CONTÁCTANOS
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}


export default Hero;