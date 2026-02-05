import wspBrown from '../../assets/Imagenes/wsp_marron.svg'
import correoBrown from '../../assets/Imagenes/correo_marron.svg'

function Contacto() {
    return (
        <section id='contacto' className='w-full px-6 pt-30 pb-50 max-w-6xl mx-auto grid md:grid-cols-2 gap-20'>

            {/* TEXTO */}
            <div>
                <div className='space-y-6 p-4'>
                    <h3 className='text-primary font-medium text-lg sm:text-xl md:text-3xl'>Contáctenos</h3>
                    <h2 className='text-3xl md:text4xl font-bold text-primary leading-tight'>
                        ¿Listo para impulsar tu<br />próximo proyecto?
                    </h2>
                    <p className='text-gray-600 text-justify text-lg'>
                        Póngase en contacto con nuestro equipo de expertos en Lima Metropolitana o Provincias.
                        Estamos listos para aplicar nuestra solidez técnica y visión estratégica a sus requerimientos.
                    </p>
                    <p className='text-gray-600 text-justify text-lg'>
                        Ya sea para iniciar una nueva inversión o resolver consultas sobre nuestras seis áreas de negocio, 
                        le garantizamos una respuesta rápida y profesional.
                    </p>
                </div>

                {/* DATOS DEL CONTACTO */}
                <div className='space-y-4 p-4'>
                    <div className='flex items-center gap-4'>
                        <a href="https://wa.me/991746659" target='_blank' className='cursor-pointer w-10 hover:scale-110 transition duration-500'><img src={wspBrown} alt='logo whatsapp' /></a>

                        <div>
                            <p className='text-base text-primary'>Número de telefono</p>
                            <p className='font-medium text-gray-700'>991746659</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-4'>
                        <a href="" className='w-10 cursor-pointer hover:scale-115 transition duration-500'><img src={correoBrown} alt="" /></a>
                        <div>
                            <p className='text-base text-primary'>Correo electrónico</p>
                            <p className='font-medium text-gray-700'>arvenstudio7@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mt-12 w-full h-70 sm:h-85 md:h-100 lg:h-115 rounded-2xl overflow-hidden shadow-2xl border-gray-700">
                <iframe
                    title="Ubicación de la empresa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.3356840342648!2d-77.00424296093934!3d-12.088672856228758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d3c02409fd%3A0xe576750e96138e1d!2sEdificio%20San%20Sebastian!5e0!3m2!1ses!2spe!4v1769802433243!5m2!1ses!2spe"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    )
}

export default Contacto;