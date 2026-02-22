import Hero from "./hero"
import Footer from "./footer"
function nosotros() {
    return (

        <>




            <div>
                <Hero />

                <section className="bg-white py-24 px-6 font-sans">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

                        {/* LADO IZQUIERDO: TEXTO Y DESCRIPCIÓN */}
                        <div className="flex-1 text-center lg:text-left space-y-8">
                            <h2 className="text-[#ff5757] font-black tracking-widest text-sm uppercase">
                                — Nuestra historia, nuestra pasión
                            </h2>
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tighter">
                                Somos <span className="text-[#cb6ce6]">Candymania</span>, <br />
                                tu dosis de felicidad.
                            </h1>
                            <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Fundada en el corazón de Mendoza en **2020**, lo que comenzó como un sueño
                                en pequeñas ferias y mercados, hoy es un rincón mágico repleto de los dulces
                                más exclusivos. En Candymania, cada golosina es una historia, cada sabor una
                                celebración.
                            </p>
                            <p className="text-gray-500 text-md max-w-xl mx-auto lg:mx-0">
                                Creemos que los pequeños placeres hacen la vida más grande. Por eso, te traemos
                                una curada selección de delicias nacionales e importadas, pensadas para endulzar
                                tus días y tus eventos especiales.
                            </p>

                            {/* Slogan Final */}
                            <p className="pt-6 text-gray-800 font-bold text-lg md:text-xl flex items-center justify-center lg:justify-start gap-3">
                                <i className="fa-solid fa-heart-pulse text-[#ff66c4]"></i>
                                ¡Cada dulce, una sonrisa garantizada!
                            </p>
                        </div>

                        {/* LADO DERECHO: FOTO GRANDE Y REDONDEADA */}
                        <div className="flex-1 relative w-full max-w-md lg:max-w-none">
                            {/* Contenedor de la imagen con efecto de elevación */}
                            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl shadow-[#cb6ce6]/20 border-8 border-white group">
                                <img
                                    src="https://images.unsplash.com/photo-1579546342154-8c887413d33f?auto=format&fit=crop&q=80&w=1000"
                                    alt="Equipo Candymania"
                                    className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay sutil para el brillo */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-50 group-hover:opacity-0 transition-opacity"></div>
                            </div>

                            {/* Ubicación del local */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-lg border border-gray-100 whitespace-nowrap">
                                <p className="text-gray-700 font-bold text-md flex items-center gap-2">
                                    <i className="fa-solid fa-location-dot text-[#7ed957]"></i>
                                    Nuestro local en <span className="text-[#ff914d]">Mendoza Maipu</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        </>
    )
}
export default nosotros