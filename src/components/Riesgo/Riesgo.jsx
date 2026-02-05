import bgRiesgo from '../../assets/Imagenes/riesgo_bg.jpg'

function Riesgo() {
    return (
        <section id='riesgo' className='relative w-full bg-cover bg-center py-24'
            style={{ backgroundImage: `url(${bgRiesgo})` }}
        >
            <div className='mx-auto max-w-4xl px-6 text-center'>
                <span className='text-xl tracking-widest text-gray-600'>
                    Arven Studio Arquitectónico
                </span>

                <h2 className='mt-6 text-2xl sm:text-3xl font-extrabold md:text-5xl'>
                    CONSTRUIR EN PERÚ <br />
                    NO DEBERÍA SER UN RIESGO
                </h2>

                <p className='mx-auto mt-8 max-w-2xl text-xl text-gray-700'>
                    Olvídese de las multas, paralizaciones y trámites interminables.
                    En Arven Studio Arquitectónico, diseñamos con la ley en la mano.
                </p>
            </div>
        </section>
    )
}

export default Riesgo;