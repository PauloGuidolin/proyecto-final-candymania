import React from 'react';
import Hero from './hero';
import Footer from './footer';
import { Link } from 'react-router-dom';
function adminGeneral() {
    return (
        <div>
            <Hero />


            <div className="min-h-screen  flex  justify-center p-6">
                <div className="max-w-2xl w-full text-center mt-7">
                    <h1 className="text-4xl font-black tracking-tighter text-white mb-12 uppercase">
                        PANEL DE <span className="text-[#cb6ce6]">CONTROL</span>
                    </h1>

                    <div className=" m-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* BOTÓN PRODUCTOS */}
                        <Link to="/admin/productos" className="group">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border-b-8 border-[#cb6ce6] flex flex-col items-center">
                                <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fa-solid fa-candy-cane text-4xl text-[#cb6ce6]"></i>
                                </div>
                                <span className="text-xl font-black text-gray-700 uppercase">Gestionar Productos</span>
                            </div>
                        </Link>

                        {/* BOTÓN CATEGORÍAS */}
                        <Link to="/admin/categorias" className="group">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border-b-8 border-[#bdf5f0] flex flex-col items-center">
                                <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fa-solid fa-tags text-4xl text-[#4a9d96]"></i>
                                </div>
                                <span className="text-xl font-black text-gray-700 uppercase">Gestionar Categorías</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default adminGeneral;