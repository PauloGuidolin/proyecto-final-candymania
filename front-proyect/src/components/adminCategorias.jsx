import React, { use } from 'react';
import Hero from './hero';
import Footer from './footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';



function adminCategorias() {

    const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorías obtenidas de la base de datos
    const [editando, setEditando] = useState(false); // Estado para controlar si estamos editando una categoría o creando una nueva
    


    const [form, setForm] = useState({
        id: null,
        name: "",

    })


    const API_URL = "http://localhost:8080/api/categorias"

    useEffect(() => { // useEffect para cargar las categorías al montar el componente

        fetch(API_URL) // Hacemos una petición GET a la API para obtener las categorías
            .then(res => res.json()) // Convertimos la respuesta a JSON
            .then(data => setCategorias(data)) // Actualizamos el estado de categorías con los datos obtenidos
            .catch(error => console.error('Error al cargar categorías:', error));

    }, [])

  

    const cargarCategorias = async () => {
        try {
            const res = await axios.get(API_URL) // Hacemos una petición GET a la API para obtener las categorías
            setCategorias(res.data)
        } catch (error) {
            console.log(error)
        }
    }

      useEffect(() => {
        cargarCategorias()
    },[]);

    const handleChange = (p) => {
        //copia el formulario actual y actualiza solo el campo que cambio
        setForm({ ...form, [p.target.name]: p.target.value });
    }

    const handleSubmit = async (e) => {

        e.preventDefault(); // Evitamos que el formulario se recargue al enviar
        try {
            const datosAEnviar = {
                name: form.name
            }

            if (editando) {
                await axios.put(`${API_URL}/${form.id}`, datosAEnviar) // Si estamos editando, hacemos una petición PUT a la API para actualizar la categoría
            } else {
                await axios.post(API_URL, datosAEnviar) // Si no estamos editando, hacemos una petición POST a la API para crear una nueva categoría
            }

            setForm({ id: null, name: "" }) // Reiniciamos el formulario
            setEditando(false) // Reiniciamos el formulario y el estado de edición
            cargarCategorias() // Recargamos las categorías para mostrar los cambios
        } catch (error) {
            console.error("Error al guardar categoría:", error);
        }



       
    }

     const eliminar = async (id) => {
            if (confirm("¿Estas seguro de eliminar la categoría?")) {
                await axios.delete(`${API_URL}/${id}`);
                cargarCategorias();
            }else{
                console.log(error);
            }
        }

    return (

        <div>
            <Hero />
            <div className='mx-auto  flex flex-col min-h-screen'>

                <div className=' flex justify-center m-6 items-center '>
                    <h1 className='font-black text-4xl font-back flex items-center justify-center text-white'>CANDY<span className='text-[#cb6ce6]'>MANIA </span> <span className='p-1 bg-[#cb6ce6] text-white rounded-lg text-xs text-center ml-5 mt-3'> ADMIN</span></h1>
                </div>

                <div className='flex flex-col justify-center p-8 bg-white m-5 mx-auto rounded-xl shadow-2xl' >
                    <div className='pb-5'>
                        <h3 className='text-xl font-black text-black border-l-6 border-sky-500 rounded-lg pl-3 '>
                            {editando ? "EDITAR CATEGORIA" : "NUEVA CATEGORIA"}
                        </h3>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit}>

                            <div className='grid grid-cols-1 md:grid-cols-2  '>


                                <div>

                                    <div className=''>
                                        <label className='font-black text-xs text-purple-400 pr-3 '>NOMBRE DE LA CATEGORIA</label>
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={handleChange}
                                            name="name"
                                            placeholder='Ej: Gomitas'
                                            className='p-4 bg-purple-50/50 border-2 border-transparent focus:border-[#bdf5f0] focus:bg-white rounded-2xl outline-none transition-all text-gray-700 font-medium'
                                        />
                                    </div>




                                </div>


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

                </div>

                <h2 className="text-xl font-black text-gray-400 mb-6 uppercase tracking-widest text-center">Categorias Existentes</h2>

                    <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto w-full px-4">
                        {categorias.map(p => (
                            <div key={p.id} className="bg-white p-4 rounded-3xl shadow-sm flex items-center justify-evenly border-2 border-white hover:border-[#bdf5f0] transition-all group ">
                                <div className="flex items-center gap-5">
                                    <div>
                                        <h3 className="text-lg font-black text-gray-800 leading-tight">{p.name}</h3>
                      
                                       
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
            <Footer />
        </div>
    )
}
export default adminCategorias;