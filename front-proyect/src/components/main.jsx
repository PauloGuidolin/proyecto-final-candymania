import React from 'react';

import { Link } from 'react-router-dom';
function main() {
    return (

        <main className="w-full">
            {/* 1. BANNER DE OFERTA (10% OFF) */}
            <div className="bg-gradient-to-r from-[#cb6ce6] to-[#ff66c4] py-3 text-center">
                <p className="text-white text-sm md:text-base font-black tracking-[0.2em] uppercase">
                    🚀 ¡PROMO ESPECIAL! 10% OFF EN TODA LA TIENDA 🚀
                </p>
            </div>

            {/* 2. SECCIÓN PRINCIPAL (HERO) */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-16">

                {/* LADO IZQUIERDO: TEXTO Y BOTONES */}
                <div className="flex-1 text-center md:text-left space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-[#7ed957] font-black tracking-widest text-sm uppercase">
                            — Mendoza, Argentina
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-black text-[#bdf5f0] leading-[0.9] tracking-tighter">
                            Hacemos tu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cb6ce6] to-[#ff914d]">
                                vida más dulce.
                            </span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md mx-auto md:mx-0">
                            Explorá nuestra selección exclusiva de golosinas importadas y nacionales.
                            El antojo que buscás, a un clic de distancia.
                        </p>
                    </div>

                    {/* BOTONES FACHEROS */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-4">
                        <a
                            href="https://wa.me/tu-numero"
                            className="flex items-center gap-3 bg-[#7ed957] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#7ed957]/30 hover:scale-105 hover:shadow-[#7ed957]/50 transition-all"
                        >
                            <i className="fa-brands fa-whatsapp text-2xl"></i>
                            CONTACTAR
                        </a>
                        <a
                            href="https://instagram.com/tu-perfil"
                            className="flex items-center gap-3 border-4 border-[#cb6ce6] text-[#cb6ce6] px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#cb6ce6] hover:text-white transition-all shadow-lg shadow-[#cb6ce6]/10"
                        >
                            <i className="fa-brands fa-instagram text-2xl"></i>
                            INSTAGRAM
                        </a>
                    </div>

                    {/* MINI FRASES DE CONFIANZA */}
                    <div className="flex items-center justify-center md:justify-start gap-8 pt-6 text-gray-400 font-bold text-xs uppercase tracking-widest">
                        <span className="flex items-center gap-2"><i className="fa-solid fa-truck text-[#ff914d]"></i> Envíos rápidos a Toda Argentina</span>
                        <span className="flex items-center gap-2"><i className="fa-solid fa-star text-[#7ed957]"></i> Calidad Premium</span>
                    </div>
                </div>

                {/* LADO DERECHO: FOTO MODERNA */}
                <div className="flex-1 relative group">
                    {/* Elemento decorativo detrás de la foto */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#cb6ce6] to-[#7ed957] rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

                    <div className="relative rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl">
                        <img
                            src="/public/MONSTER.png"
                            alt="Dulces Candymania"
                            className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 ]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Categoría: GOMITAS */}
                    <Link to="/categorias/gomitas" className="group relative bg-[#7ed957]/10 p-10 rounded-[3rem] border-2 border-transparent hover:border-[#7ed957] hover:bg-[#7ed957] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(126,217,87,0.3)]">
                        <div className="relative z-10">
                            <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">🍭</div>
                            <h4 className="text-2xl font-black mb-2 uppercase group-hover:text-white transition-colors text-white">Gomitas</h4>
                            <p className="text-gray-500 font-medium group-hover:text-white/90 transition-colors text-white">
                                Las mejores formas y los sabores más intensos de Mendoza.
                            </p>
                        </div>
                        {/* Círculo decorativo de fondo */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#7ed957]/20 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
                    </Link>

                    {/* Categoría: CHOCOLATES */}
                    <Link to="/categorias/chocolates" className="group relative bg-[#cb6ce6]/10 p-10 rounded-[3rem] border-2 border-transparent hover:border-[#cb6ce6] hover:bg-[#cb6ce6] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(203,108,230,0.3)]">
                        <div className="relative z-10">
                            <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">🍫</div>
                            <h4 className="text-2xl font-black mb-2 uppercase group-hover:text-white transition-colors text-white">Chocolates</h4>
                            <p className="text-gray-500 font-medium group-hover:text-white/90 transition-colors text-white">
                                Importados y nacionales que se derriten en tu boca.
                            </p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#cb6ce6]/20 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
                    </Link>

                    {/* Categoría: BOX REGALO */}
                    <Link to="/categorias/box" className="group relative bg-[#ff914d]/10 p-10 rounded-[3rem] border-2 border-transparent hover:border-[#ff914d] hover:bg-[#ff914d] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(255,145,77,0.3)]">
                        <div className="relative z-10">
                            <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">🎁</div>
                            <h4 className="text-2xl font-black mb-2 uppercase group-hover:text-white transition-colors text-white">Box Regalo</h4>
                            <p className="text-gray-500 font-medium group-hover:text-white/90 transition-colors text-white">
                                Sorprendé a alguien especial con un combo explosivo.
                            </p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ff914d]/20 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
                    </Link>

                </div>
            </section>
        </main>

    )
}
export default main;