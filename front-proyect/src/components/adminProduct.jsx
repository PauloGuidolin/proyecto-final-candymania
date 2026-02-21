import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AdminProductos() {


    //2. ESTADOS (la memoria de nuestro componente)
    const [productos, setProductos] = useState([]); //guarda la lista de productos
    const [editando, setEditando] = useState(false) // switch para saber si creamos o editamos
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
            descripcion: form.descripcion, // Ya lo tienes en minúscula, ¡bien!
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

        <div className="min-h-screen bg-pink-50 p-4 md:p-8 fonts-sans">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-black text-pink-600 mb-8 text-center uppercase">
                    CANDYMANIA ADMIN
                </h1>

                <div className="bg-white p-8 rounded-3xl shadow-xl mb-10 border-t-8 border-pink-400">

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        {editando ? "Editar Producto" : "Crear Nuevo Producto"}
                    </h2>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        <div className="flex flex-col">

                            <label className="text-sm font-semibold text-gray-600 mb-1 ml-1">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                required
                                className="p-3 border-2 border-pink-100 rounded-2xl focus:border-pink-400 text-black"
                            />

                        </div>


                        <div className="flex flex-col">

                            <label className="text-sm font-semibold text-blackmb-1 ml-1">Precio</label>
                            <input
                                name="precio"
                                type="text" // Cambiado de number a text
                                placeholder="Precio (ej: 10.50)"
                                value={form.precio}
                                onChange={(e) => {
                                    // Esta lógica solo permite números y un punto decimal
                                    const val = e.target.value;
                                    if (val === '' || /^[0-9.]*$/.test(val)) {
                                        handleChange(e);
                                    }
                                }}
                                required
                                className="p-3 border-2 border-pink-100 rounded-2xl focus:border-pink-400 outline-none text-black"
                            />

                        </div>


                        <div className="flex flex-col md:col-span-2">

                            <label className="text-sm font-semibold text-gray-600 mb-1 ml-1">Descripcion</label>
                            <input
                                name="descripcion"
                                type="text"
                                value={form.descripcion}
                                onChange={handleChange}
                                required
                                className="p-3 border-2 border-pink-100 rounded-2xl focus:border-pink-400 text-black"
                            />

                        </div>


                        <div className="flex flex-col md:col-span-2">

                            <label className="text-sm font-semibold text-gray-600 mb-1 ml-1">Url de la imagen</label>
                            <input
                                name="imagen_url"
                                type="text"
                                value={form.imagen_url}
                                onChange={handleChange}
                                className="p-3 border-2 border-pink-100 rounded-2xl focus:border-pink-400"
                            />

                        </div>



                        <div className="md:col-span-2 flex gap-4 mt-2">
                            <button
                                type="submit"
                                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-pink-200 transition-all active:scale-95"
                            >
                                {editando ? "GUARDAR CAMBIOS" : "AÑADIR A LA TIENDA"}
                            </button>

                            {editando && (
                                <button
                                    onClick={() => { setEditando(false); setForm({ id: null, nombre: '', precio: '', descripcion: '', imagen_url: '' }) }}
                                    className="bg-gray-200 text-gray-600 px-8 rounded-2xl font-bold hover:bg-gray-300 transition-all"
                                >
                                    Cancelar
                                </button>
                            )}
                        </div>


                    </form>


                </div>

                <div className="grid grid-cols-1 gap-4">
                    {productos.map(p => (

                        <div key={p.id} className="bg-white p-5 rounded-2xl shadow-sm flex items-center justify-between border border-pink-50 hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{p.nombre}</h3>
                                <p className="text-pink-500 font-black text-lg">${p.precio}</p>
                                <p className="text-pink-500 font-black text-lg">{p.descripcion}</p>
                                <img className="w-24 h-24 object-cover rounded-xl" src={p.imagen_url} alt={p.nombre} />
                            </div>


                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setForm(p); setEditando(true); }}
                                    className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-bold"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => eliminar(p.id)}
                                    className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all font-bold"
                                >
                                    Borrar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>

    );


}



export default AdminProductos;




