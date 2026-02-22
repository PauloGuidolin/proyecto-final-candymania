import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config'; // Ajustá la ruta si es necesario
import { onAuthStateChanged, signOut } from 'firebase/auth';


function Hero() { // Convención: Los componentes en React empiezan con Mayúscula
    const [abierto, setAbierto] = useState(false);
    const [usuario, setUsuario] = useState(null); // Estado para guardar la información del usuario
    const navigate = useNavigate(); // Hook para navegación programática
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userFirebase) => { // Escuchamos los cambios en la autenticación
            if (userFirebase) { // Si hay un usuario autenticado, guardamos su información en el estado
                setUsuario(userFirebase);
            } else {
                setUsuario(null);
            }
        });
        return () => unsubscribe(); // Limpiamos el listener cuando el componente se desmonta
    }, []);

    const cerrarSesion = async () => {
        try {

            await signOut(auth) // Cerramos la sesión del usuario
            alert('Sesión cerrada. ¡Hasta luego!'); // Mensaje de despedida
            navigate("/"); // Redirigimos al inicio después de cerrar sesión
        } catch (error) {
            alert('Error al cerrar sesión. Por favor, intenta de nuevo.'); // Mensaje de error en caso de fallo
        }
    }


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

            <div className="hidden md:flex admin-redes text-[#879aee] gap-5 font-mono font-bold text-lg items-center">

                {/* LÓGICA DE USUARIO */}
                {usuario ? (
                    // SI HAY USUARIO: Mostramos botón de salir
                    <button
                        onClick={cerrarSesion}
                        className="hover:text-white flex items-center gap-2"
                        title="Cerrar Sesión"
                    >
                        <i className="fa-solid fa-right-from-bracket text-2xl text-[#bdf5f0]"></i>
                        <span className="text-xs uppercase">Salir</span>
                    </button>
                ) : (
                    // SI NO HAY USUARIO: Mostramos el link al login que ya tenías
                    <Link to="/login" className="hover:text-white">
                        <i className="fa-solid fa-user text-2xl text-[#bdf5f0]"></i>
                        <span className='p-2'>Ingresar</span>
                    </Link>
                )}

                {/* TUS OTROS ICONOS (Instagram y Carrito) */}
                <a href="" className="hover:text-white">
                    <i className="fa-brands fa-instagram text-2xl text-[#bdf5f0]"></i>
                </a>
                <a href="" className="hover:text-white">
                    <i className="fa-solid fa-cart-arrow-down text-2xl text-[#bdf5f0]"></i>
                </a>
            </div>

        </section >
    );
}

export default Hero;