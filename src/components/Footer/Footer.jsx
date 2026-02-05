import { Link } from 'react-scroll';
import logoArven from '../../assets/logos/logo_arven.svg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='bg-primary text-white pt-10 pb-4 px-6'>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center md:justify-items-center">

                {/* LOGO Y DESCRIPCIÓN */}
                <div className="text-center p-2 flex flex-col gap-5">
                    <Link to="inicio" smooth={true} duration={1200} offset={-100} className='cursor-pointer'>
                        <img className='invert brightness-0 w-40 inline-block' src={logoArven} alt="Logo Arven" />
                    </Link>
                    <p className='text-sm leading-relaxed'>
                        Somos una consultora integral que fusiona diseño de vanguardia con rigor técnico-legal
                        para garantizar proyectos de alto valor y total seguridad jurídica.
                    </p>
                </div>

                {/* NAVEGACIÓN */}
                <div className='p-2 -ml-25 md:ml-0'>
                    <h3 className='font-semibold mb-4'>Navegación</h3>
                    <ul className='space-y-4 text-sm'>
                        <li><Link to='nosotros' smooth={true} offset={-90} duration={1200} className="cursor-pointer">Nosotros</Link></li>
                        <li><Link to='servicios' smooth={true} offset={-160} duration={1200} className="cursor-pointer">Servicios</Link></li>
                        <li><Link to='valores' smooth={true} offset={-10} duration={1200} className="cursor-pointer">Valores</Link></li>
                        <li><Link to='contacto' smooth={true} offset={-10} duration={1200} className="cursor-pointer">Contacto</Link></li>
                    </ul>
                </div>

                {/* SERVICIOS */}
                <div className='p-2 -ml-2 md:ml-0'>
                    <h3 className='font-semibold mb-4'>Servicios</h3>
                    <ul className='space-y-2 text-sm'>
                        <li><Link to='arquitectura' smooth={true} offset={-90} duration={1200} className="cursor-pointer">Diseño de Interiores</Link></li>
                        <li><Link to='ingenieria' smooth={true} offset={-85} duration={1200} className="cursor-pointer">Arquitectura Residencial</Link></li>
                        <li><Link to='tecnologia' smooth={true} offset={-90} duration={1200} className="cursor-pointer">Regularización de Edificación</Link></li>
                        <li><Link to='telecomunicaciones' smooth={true} offset={-90} duration={1200} className="cursor-pointer">Licencia de Funcionamiento</Link></li>
                        <li><Link to='videovigilancia' smooth={true} offset={-100} duration={1200} className="cursor-pointer">Declaratoría de Fábrica</Link></li>
                        <li><Link to='consultoria' smooth={true} offset={-100} duration={1200} className="cursor-pointer">Independización de Predios</Link></li>
                    </ul>
                </div>

                {/* INFORMACIÓN */}
                <div className='p-2'>
                    <h3 className='font-semibold mb-4'>Información</h3>
                    <ul className='space-y-3 text-sm'>
                        <li className='flex items-center gap-2'><FaPhoneAlt />991746659</li>
                        <li className='flex items-center gap-2'><FaEnvelope />arvenstudio7@gmail.com</li>
                        <li className='flex items-center gap-2'><FaMapMarkedAlt />Av. Aviación 2405 Piso 10</li>
                    </ul>

                    {/* REDES SOCIALES */}
                    <div className='flex gap-4 mt-6 text-xl'>
                        <a
                            href="https://www.linkedin.com/in/arven-studio-arquitect%C3%B3nico-6ba69139b/"
                            target='_blank'
                        >
                            <FaLinkedin className='cursor-pointer hover:scale-110 transition-all duration-300' />
                        </a>

                        <a
                            href="https://www.facebook.com/profile.php?id=61584353079723"
                            target='_blank'
                        >
                            <FaFacebook className='cursor-pointer hover:scale-110 transition-all duration-300' />
                        </a>

                        <a
                            href="https://www.instagram.com/arven.studio.arquitectonico/"
                            target='_blank'
                        >
                            <FaInstagram className='cursor-pointer hover:scale-110 transition-all duration-300' />
                        </a>

                        <a
                            href="https://wa.me/51991746659"
                            target='_blank'
                        >
                            <FaWhatsapp className='cursor-pointer hover:scale-110 transition-all duration-300' />
                        </a>
                        <a
                            href="https://www.tiktok.com/@arven_studio"
                            target='_blank'
                        >
                            <FaTiktok className='cursor-pointer hover:scale-110 transition-all duration-300' />
                        </a>


                    </div>
                </div>
            </div>

            {/* DERECHOS RESERVADOS */}
            <div className='text-center text-xs mt-10 opacity-70'>
                © {new Date().getFullYear()} Xigma - Todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer;