import React, { useState } from 'react';
import AdminProductos from './adminProduct';
import { Link } from 'react-router-dom';

function Hero() { // Convención: Los componentes en React empiezan con Mayúscula
    const [abierto, setAbierto] = useState(false);

    return (
        <section id="navegacion" className="p-10 flex items-center justify-between lg:justify-evenly relative ">

            {/* LOGO: Siempre visible */}
            <div className="title cursor-pointer" id="inicio">
                <a href="#inicio">
                    <span className="text-3xl font-sans font-bold text-[#ff5757]">C</span>
                    <span className="text-3xl font-sans font-bold text-[#cb6ce6]">A</span>
                    <span className="text-3xl font-sans font-bold text-[#ff66c4]">N</span>
                    <span className="text-3xl font-sans font-bold text-[#7ed957]">D</span>
                    <span className="text-3xl font-sans font-bold text-[#ff914d]">Y</span>
                    <span className="text-3xl font-sans font-bold text-[#ff5757]">M</span>
                    <span className="text-3xl font-sans font-bold text-[#7ed957]">A</span>
                    <span className="text-3xl font-sans font-bold text-[#ff66c4]">N</span>
                    <span className="text-3xl font-sans font-bold text-[#cb6ce6]">I</span>
                    <span className="text-3xl font-sans font-bold text-[#ff914d]">A</span>
                    <h3 className="text-center text-lg text-[#879aee] font-bold font-mono">Mendoza</h3>
                </a>
            </div>

            {/* RUTAS (Escritorio): hidden en móvil, flex en pantallas medianas (md) */}
            <div className="hidden md:flex rutas text-[#bdf5f0] gap-3 font-mono font-bold text-lg">
                <a href="" className="text-lg font-sans font-bold text-[#bdf5f0] hover:text-white">Inicio</a>
                <Link className='text-lg font-sans font-bold text-[#bdf5f0] hover:text-white' to="/nosotros">
                    Nosotros
                </Link>
                <a href="" className="text-lg font-sans font-bold text-[#bdf5f0] hover:text-white">Categorías</a>
                <a href="" className="text-lg font-sans font-bold text-[#bdf5f0] hover:text-white">Contacto</a>
            </div>

            {/* BOTÓN HAMBURGUESA: visible en móvil, hidden en md */}
            <button onClick={() => setAbierto(!abierto)} className="block md:hidden z-50 text-3xl">
                <i className={`fa-solid ${abierto ? 'fa-xmark' : 'fa-bars'} text-[#cb6ce6]`}></i>
            </button>

            {/* MENÚ DESPLEGABLE (Móvil): Solo se activa en pantallas pequeñas */}
            <div className={`
                absolute top-full left-0 w-full shadow-lg flex flex-col items-center gap-6 py-8
                transition-all duration-300 ease-in-out md:hidden z-40
                ${abierto ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible'}
            `}>
                <a href="#" className="text-xl font-bold text-[#cb6ce6]" onClick={() => setAbierto(false)}>Inicio</a>
                <a href="#" className="text-xl font-bold text-[#cb6ce6]" onClick={() => setAbierto(false)}>Nosotros</a>
                <a href="#" className="text-xl font-bold text-[#cb6ce6]" onClick={() => setAbierto(false)}>Categorías</a>
                <a href="#" className="text-xl font-bold text-[#cb6ce6]" onClick={() => setAbierto(false)}>Contacto</a>

                <div className="flex gap-5 mt-4">
                    <a href="" className="hover:text-white" onClick={() => setAbierto(false)}><i className="fa-solid fa-user text-2xl text-[#bdf5f0] hover:text-white"></i></a>
                    <a href="" className="hover:text-white" onClick={() => setAbierto(false)}><i className="fa-brands fa-instagram text-2xl text-[#bdf5f0] hover:text-white"></i></a>
                    <a href="" className="hover:text-white" onClick={() => setAbierto(false)}><i className="fa-solid fa-cart-arrow-down text-2xl text-[#bdf5f0] hover:text-white"></i></a>
                </div>


            </div>

            {/* REDES (Escritorio): hidden en móvil, flex en md */}
            <div className="hidden md:flex admin-redes text-[#879aee] gap-5 font-mono font-bold text-lg">
                <Link to="/admin" className="hover:text-white">
                    <i className="fa-solid fa-user text-2xl text-[#bdf5f0]"></i>
                </Link>
                <a href="" className="hover:text-white"><i className="fa-brands fa-instagram text-2xl text-[#bdf5f0] hover:text-white"></i></a>
                <a href="" className="hover:text-white"><i className="fa-solid fa-cart-arrow-down text-2xl text-[#bdf5f0] hover:text-white"></i></a>
            </div>

        </section >
    );
}

export default Hero;