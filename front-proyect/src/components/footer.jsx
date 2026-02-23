import React from 'react';
import { Link } from 'react-router-dom';

function footer() {
    return (

        <footer className="bg-[#bdf5f0] border-t border-gray-100 pt-7 pb-3 ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-6">

                    {/* COLUMNA 1: MARCA */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black tracking-tighter text-black">
                            CANDY<span className="text-[#cb6ce6]">MANIA</span>
                        </h2>
                        <p className="text-black text-sm leading-relaxed">
                            Endulzando tus momentos desde 2020 en el corazón de Mendoza.
                            Calidad premium en golosinas nacionales e importadas.
                        </p>
                        <div className="flex gap-4 text-xl ">
                            <a href="#" className="text-black hover:text-[#cb6ce6] transition-colors"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="text-black hover:text-[#7ed957] transition-colors"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="#" className="text-black hover:text-[#ff914d] transition-colors"><i className="fa-brands fa-tiktok"></i></a>
                        </div>
                    </div>

                    {/* COLUMNA 2: NAVEGACIÓN */}
                    <div>
                        <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-6">Navegación</h4>
                        <ul className="space-y-4 text-sm font-bold textblack">
                            <li><Link to="/" className="hover:text-[#cb6ce6] transition-colors">Inicio</Link></li>
                            <li><Link to="/categorias" className="hover:text-[#cb6ce6] transition-colors">Categorías</Link></li>
                            <li><Link to="/nosotros" className="hover:text-[#cb6ce6] transition-colors">Nosotros</Link></li>
                            <li><Link to="/admin" className="hover:text-[#cb6ce6] transition-colors">Administración</Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 3: CONTACTO */}
                    <div>
                        <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm text-black font-medium">
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-location-dot text-[#7ed957]"></i>
                                Mendoza Capital, Argentina
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-phone text-[#cb6ce6]"></i>
                                +54 261 XXXXXXX
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-envelope text-[#ff914d]"></i>
                                hola@candymania.com
                            </li>
                        </ul>
                    </div>

                    {/* COLUMNA 4: TECH STACK (El toque pro) */}
                    <div>
                        <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-6">Tecnologías</h4>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'TailwindCSS', 'TypeScript', 'Java', 'MySQL', 'Spring Boot'].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-400 text-[10px] font-black rounded-full border border-gray-100 uppercase tracking-tighter">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CRÉDITOS FINALES */}
                <div className="border-t border-gray-100 pt flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-black text-xs font-medium">
                        © 2026 Candymania Mendoza. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                        <span>Diseñada por</span>
                        <a href="https://github.com/tu-usuario" className="text-gray-900 hover:text-[#cb6ce6] transition-colors border-b-2 border-[#7ed957]">
                            Paulo Guidolin
                        </a>
                       
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default footer;