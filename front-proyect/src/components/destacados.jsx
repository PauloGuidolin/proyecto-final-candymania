
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function destacados() {

    const [productos, setProductos] = useState([]); //guarda la lista de productos
    const [cargando, setCargando] = useState(true); // switch para saber si estamos cargando los datos o ya los tenemos

    //funcion para traer datos
    const traerProductos = async () => {
        try {
            const respuesta = await axios.get('http://localhost:8080/api/productos') //reemplaza con la URL de tu API
            setProductos(respuesta.data) //guarda los productos en el estado
            setCargando(false) //ya no estamos cargando porque ya tenemos los datos

        } catch (error) {
            console.error('Error al traer productos:', error)
            setCargando(false)
        }
    }

    //useEffect para cargar la funcion apenas se carga la pagina
    useEffect(() => {
        traerProductos();
    }, []);

    if (cargando) return <p className='text-center py-20 font-black text-white'>CARGANDO PRODUCTOS</p>
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Título de la sección */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-[#ff914d] font-black tracking-widest text-sm uppercase mb-2">— Los más buscados</h2>
                        <h3 className="text-5xl font-black text-white tracking-tighter">Destacados de la <span className="text-[#cb6ce6]">Semana</span></h3>
                    </div>
                    <button className="hidden md:block font-black text-[#cb6ce6] hover:underline underline-offset-8">VER TODO EL CATÁLOGO</button>
                </div>

                {/* Grid de productos (Acá iría tu .map) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 1. Usamos 'productos' que es tu estado con la lista */}
                    {productos.map((p) => (
                        <div key={p.id} className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500">

                            {/* 2. IMPORTANTE: Usar p.imagen_url (así se llama en tu base de datos) */}
                            <div className="relative h-64 w-full overflow-hidden rounded-[2rem] bg-gray-100">
                                <img
                                    src={p.imagen_url}
                                    alt={p.nombre}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                />
                            </div>

                            <div className="pt-6 px-2">
                                <div className="flex justify-between items-start mb-2">
                                    {/* 3. Usamos p.nombre y p.precio */}
                                    <h4 className="text-xl font-black text-gray-900">{p.nombre}</h4>
                                    <span className="text-[#7ed957] font-black text-xl">${p.precio}</span>
                                </div>

                                {/* 4. Usamos p.descripcion */}
                                <p className="text-gray-500 text-sm font-medium line-clamp-2 mb-6">
                                    {p.descripcion}
                                </p>

                                <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black hover:bg-[#cb6ce6] transition-colors">
                                    AGREGAR AL CARRITO
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default destacados;