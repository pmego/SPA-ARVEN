import nosotrosImg from '../../assets/Imagenes/nosotros.jpg';
import ceoImg from '../../assets/Imagenes/ceo.jpg'

function Nosotros() {
    return (
        <section id='nosotros' className='max-w-6xl mx-auto px-6 py-24 lg:py-32'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center'>

                {/* TEXTO "EN MODO MOBILE ESTARÁ ABAJO, EN MODO DESKTOP ESTARÁ AL LADO IZQUIERDO" */}
                <div className='order-2 lg:order-1'>
                    {/* Etiqueta */}
                    <div className='flex items-center gap-4 mb-6'>
                        <span className='block w-12 h-1.5 bg-primary'></span>
                        <span className='tracking-widest text-lg sm:text-xl md:text-3xl font-medium text-primary'>
                            NOSOTROS
                        </span>
                    </div>

                    {/* Título */}
                    <h2 className='text-5xl sm:text-6xl lg:text-7xl font-black leading-none'>
                        ARVEN
                    </h2>

                    {/* Subtítulo */}
                    <p className='text-primary italic text-lg sm:text-xl lg:text-2xl mt-2 mb-8'>
                        Studio Arquitectónico
                    </p>

                    {/* Texto */}
                    <div className='space-y-6 text-neutral-700 text-base leading-relaxed max-w-xl'>
                        <p>
                            Nuestro propósito central es transformar ideas en espacios funcionales, legales y
                            estéticamente impecables.
                        </p>
                        <p>
                            Operamos como una consulta integral, especializada en proyectos que exigen el más alto
                            nivel de rigor técnico y visión creativa. Nuestra maestría radica en fusionar el diseño
                            arquitectónico de vanguardia con la regularización técnica-legal y una ejecución constructiva
                            eficiente. Este enfoque integral garantiza que cada proyecto que entregamos sea no solo hermoso,
                            sino también, eficiente, sostenible y de alto valor.
                        </p>
                    </div>

                    {/* CEO IMÁGEN */}
                    <div className='flex items-center gap-4 mt-10'>
                        <img
                            src={ceoImg}
                            alt="CEO"
                            className='w-15 h-15 rounded-full object-cover border-3 border-primary'
                        />

                        <div>
                            <p className='font-bold tracking-wide'>
                                ALEX RETUERTO VERGARA
                            </p>

                            <p className='text-sm text-neutral-500'>
                                Gerente General - CEO
                            </p>
                        </div>
                    </div>
                </div>

                {/* IMAGEN "ARRIBA EN MOBILE, LADO DERECHO EN DESKTOP" */}
                <div className='order-1 lg:order-2 relative'>
                    <div className='border border-neutral-300 shadow-2xl rounded-xl overflow-hidden'>
                        <img
                            src={nosotrosImg}
                            alt="Proyecto arquitectónico"
                            className='w-full h-full object-cover justify-center'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros;
