import valoresImg from '../../assets/Imagenes/valores.webp'

export default function () {
    return (
        <section id='valores' className='max-w-6xl mx-auto px-6 py-32'>
            <div className='flex items-center gap-4 mb-6'>
                <span className='block w-12 h-1.5 bg-primary'></span>
                <span className='tracking-widest text-lg sm:text-xl md:text-3xl font-medium text-primary'>
                    VALORES
                </span>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>

                {/* COLUMNA IZQUIERDA */}
                <div className='relative rounded-2xl overflow-hidden'>

                    {/* Imagen */}
                    <img
                        src={valoresImg}
                        alt="Valores de diseño"
                        className='w-full h-full object-cover'
                    />


                    {/* Texto sobre imagen */}
                    <div className='absolute bottom-10 p-6 text-white bg-black/70 mx-10 rounded-2xl'>
                        <h3 className='text-lg font-extrabold mb-4 '>
                            VALORES DE DISEÑO E INNOVACIÓN
                        </h3>

                        <ul className='space-y-2 text-sm leading-relaxed'>
                            <li className='text-base'>
                                <span className='font-extrabold'>• Agilidad Tecnológica:</span>{" "}
                                El uso de herramientas avanzadas permite una colaboración precisa.
                            </li>
                            <li className='text-base'>
                                <span className='font-extrabold'>• Creatividad Estratégica:</span>{" "}
                                Capacidad para resolver problemas complejos mediante el diseño.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div className='flex flex-col gap-12 flex-1 h-full'>

                    {/* CARD NEGRA */}
                    <div className='bg-black text-white rounded-2xl py-10 flex-1 flex flex-col items-center'>
                        <h3 className='text-3xl font-extrabold mb-6'>
                            VALORES ÉTICOS Y <br /> PROFESIONALES
                        </h3>

                        <ul className='space-y-3 text-lg font-semibold'>
                            <li>• Integridad y Transparencia.</li>
                            <li>• Responsabilidad Social.</li>
                            <li>• Profesionalismo</li>
                        </ul>
                    </div>

                    {/* CARD BEIGE */}
                    <div className='bg-neutral-200 rounded-2xl p-8 flex-1 flex flex-col items-center'>
                        <h3 className='text-3xl font-bold text-primary mb-6 text-center'>
                            VALORES DE SOSTENIBILIDAD <br /> Y BIENESTAR
                        </h3>
                        <ul className='space-y-3 text-lg font-semibold text-neutral-700'>
                            <li>• Resiliencia y Adaptabilidad.</li>
                            <li>• Identidad y Raíces Culturales</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
