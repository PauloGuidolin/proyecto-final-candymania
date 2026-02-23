import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import Footer from './footer';
import Hero from './hero';
import { Link } from 'react-router-dom';




function adminProducto() {

    //2. ESTADOS (la memoria de nuestro componente)
    const [productos, setProductos] = useState([]); //guarda la lista de productos
    const [editando, setEditando] = useState(false) // switch para saber si creamos o editamos
    const [listaCategorias, setListaCategorias] = useState([]) // guarda la lista de categorías para el select del formulario



    const [form, setForm] = useState({
        id: null,
        nombre: '',
        precio: '',
        descripcion: '',
        imagen_url: ''
    });

    const API_URL = 'http://localhost:8080/api/productos'; // URL de la API

    //3. carga inicial de datos

    useEffect(() => {

        fetch('http://localhost:8080/api/categorias')
            .then(res => res.json())
            .then(data => setListaCategorias(data))
            .catch(error => console.error('Error al cargar categorías:', error));
    })

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            const respuesta = await axios.get(API_URL);
            setProductos(respuesta.data);
        } catch (error) {
            console.error('Error al cargar productos:', error);
        }
    }

    //4. losgica del fomrulario

    const handleChange = (p) => {
        //copia el formulario actual y actualiza solo el campo que cambio
        setForm({ ...form, [p.target.name]: p.target.value });
    }

    const handleSubmit = async (p) => {
        p.preventDefault();
        try {
            // 1. Creamos el objeto con el formato exacto que espera Java
            const datosAEnviar = {
                nombre: form.nombre,
                descripcion: form.descripcion, 
                precio: parseFloat(form.precio),
                imagen_url: form.imagen_url || "" // Si está vacío, mandamos un texto vacío en lugar de null
            };

            if (editando) {
                // Para editar sí necesitamos el ID en la URL
                await axios.put(`${API_URL}/${form.id}`, datosAEnviar);
            } else {
                // Para crear NO enviamos el ID, Java lo genera solo
                await axios.post(API_URL, datosAEnviar);
            }

            // Limpieza y recarga
            setForm({ id: null, nombre: '', precio: '', descripcion: '', imagen_url: '' });
            setEditando(false);
            cargarProductos();
            alert("¡Producto guardado con éxito! 🍬");

        } catch (error) {
            // Esto te ayudará a ver en la consola (F12) qué campo está rechazando Java
            console.error("Error del servidor:", error.response?.data);
            alert('Error al guardar producto');
        }
    };

    const eliminar = async (id) => {
        if (confirm("¿Estas seguro de eliminar el producto?")) {
            await axios.delete(`${API_URL}/${id}`);
            cargarProductos();
        }
    }
    return (

        <div>
            <Hero />
            <div className="min-h-screen bg-p-4 md:p-8 font-sans">
                <div className="max-w-4xl mx-auto">


                    <h1 className="text-4xl font-black tracking-tighter text-white mb-8 text-center uppercase">
                        CANDY<span className="text-[#cb6ce6]">MANIA</span> <span className="text-sm bg-[#cb6ce6] text-white px-2 py-1 rounded-md align-middle ml-2">ADMIN</span>
                    </h1>

                    <div className="bg-white p-8 rounded-[2rem] shadow-2xl mb-10  ">

                        <h2 className="text-2xl font-black text-gray-700 mb-6 flex items-center gap-2">
                            <div className="w-2 h-8 bg-[#bdf5f0] rounded-full"></div>
                            {editando ? "EDITAR DULCE" : "NUEVA GOLOSINA"}
                        </h2>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">


                            <div className="flex flex-col">
                                <label className="text-xs font-black text-purple-400 uppercase mb-1 ml-2">Nombre del Producto</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ej: Alfajor de Oreo"
                                    className="p-4 bg-purple-50/50 border-2 border-transparent focus:border-[#bdf5f0] focus:bg-white rounded-2xl outline-none transition-all text-gray-700 font-medium"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs font-black text-purple-400 uppercase mb-1 ml-2">Precio (ARS)</label>
                                <input
                                    name="precio"
                                    type="text"
                                    placeholder="0.00"
                                    value={form.precio}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (val === '' || /^[0-9.]*$/.test(val)) {
                                            handleChange(e);
                                        }
                                    }}
                                    required
                                    className="p-4 bg-purple-50/50 border-2 border-transparent focus:border-[#bdf5f0] focus:bg-white rounded-2xl outline-none transition-all text-gray-700 font-bold"
                                />
                            </div>


                            <div className="flex flex-col md:col-span-2">
                                <label className="text-xs font-black text-purple-400 uppercase mb-1 ml-2">Descripción Tentadora</label>
                                <textarea
                                    name="descripcion"
                                    rows="2"
                                    value={form.descripcion}
                                    onChange={handleChange}
                                    required
                                    placeholder="Contanos qué hace especial a este dulce..."
                                    className="p-4 bg-purple-50/50 border-2 border-transparent focus:border-[#bdf5f0] focus:bg-white rounded-2xl outline-none transition-all text-gray-700 resize-none"
                                />
                            </div>


                            <div className="flex flex-col md:col-span-2">
                                <label className="text-xs font-black text-purple-400 uppercase mb-1 ml-2">URL de la Imagen</label>
                                <input
                                    name="imagen_url"
                                    type="text"
                                    placeholder="https://tu-imagen.com/foto.jpg"
                                    value={form.imagen_url}
                                    onChange={handleChange}
                                    className="p-4 bg-purple-50/50 border-2 border-transparent focus:border-[#bdf5f0] focus:bg-white rounded-2xl outline-none transition-all text-gray-700"
                                />
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="text-xs font-black text-purple-400 uppercase mb-1 ml-2">Categoría</label>
                                <select
                                    name="categoria"
                                    value={form.categoria?.id || ""}
                                    onChange={(e) => setForm({ ...form, categoria: { id: e.target.value } })}
                                    required
                                    className="p-4 bg-purple-50/50 border-2 border-transparent focus:border-[#bdf5f0] focus:bg-white rounded-2xl outline-none transition-all text-gray-700 appearance-none"
                                >
                                    <option value="">Seleccioná una categoría...</option>
                                    {listaCategorias.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>



                            <div className="md:col-span-2 flex gap-4 mt-2">
                                <button
                                    type="submit"
                                    className="flex-1 bg-gradient-to-r from-[#cb6ce6] to-[#8e44ad] hover:from-[#b359cc] hover:to-[#732d91] text-white font-black py-4 rounded-2xl shadow-lg shadow-purple-200 transition-all active:scale-95 uppercase tracking-wider"
                                >
                                    {editando ? "Confirmar Cambios" : "Lanzar a la Tienda"}
                                </button>

                                {editando && (
                                    <button
                                        type="button"
                                        onClick={() => { setEditando(false); setForm({ id: null, nombre: '', precio: '', descripcion: '', imagen_url: '' }) }}
                                        className="bg-gray-100 text-gray-500 px-8 rounded-2xl font-bold hover:bg-gray-200 transition-all uppercase text-sm"
                                    >
                                        Cancelar
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>


                    <h2 className="text-xl font-black text-gray-400 mb-6 uppercase tracking-widest text-center">Productos en Góndola</h2>

                    <div className="grid grid-cols-1 gap-4">
                        {productos.map(p => (
                            <div key={p.id} className="bg-white p-4 rounded-3xl shadow-sm flex items-center justify-between border-2 border-white hover:border-[#bdf5f0] transition-all group">
                                <div className="flex items-center gap-5">
                                    <div className="relative">
                                        <img className="w-20 h-20 object-cover rounded-2xl shadow-md" src={p.imagen_url} alt={p.nombre} />
                                        
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-gray-800 leading-tight">{p.nombre}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-1 max-w-[250px]">{p.descripcion}</p>

                                        <div className=" border-green-200 border-2 p-1 rounded-lg mt-1 w-max  font-bold">
                                            ${p.precio}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => { setForm(p); setEditando(true); }}
                                        className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                                        title="Editar"
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button
                                        onClick={() => eliminar(p.id)}
                                        className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                        title="Borrar"
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <Footer />

        </div>


    )
}
export default adminProducto;