import lapiz from '../../assets/Imagenes/lapiz.svg'

function ServiciosCard({ title, image, items }) {
    return (
        <article className="bg-white shadow-lg overflow-hidden w-full max-w-sm rounded-lg">

            {/* Imagen */}
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
            />

            {/* Contenido */}
            <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-primary mb-4">
                    {title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-2 text-base justify-center"
                        >
                            <img
                                src={lapiz}
                                alt=""
                                className="h-4 w-4"
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <a
                    href="https://wa.me/51991746659"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-bold bg-primary text-white px-4 py-2 rounded-full text-xs hover:bg-[#72564B] transition duration-500 cursor-pointer"
                >
                    ASESORÍA GRATUITA →
                </a>
            </div>
        </article>
    )
}

export default ServiciosCard;