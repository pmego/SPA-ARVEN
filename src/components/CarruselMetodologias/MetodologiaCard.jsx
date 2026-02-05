


function MetodologiaCard({ id, numero, titulo, icono }) {
    return (
        <div
            key={id}
            className="w-full sm:w-46.5 h-42.5 shrink-0 bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between"
        >
            {/* TOP */}
            <div className="flex justify-center items-start">
                {/* NÚMERO */}
                <span className="text-6xl font-bold text-primary leading-none mr-5">
                    {numero}
                </span>

                {/* ICONO */}
                <img
                    src={icono}
                    alt={titulo}
                    className="w-15 h-15 object-contain"
                />
            </div>

            {/* TÍTULO */}
            <h3 className="text-base font-medium text-primary leading-snug text-center">
                {titulo}
            </h3>
        </div>
    )
}

export default MetodologiaCard