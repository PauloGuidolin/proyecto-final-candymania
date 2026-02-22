import React from 'react';
import { auth } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Corregido: signInWithPopup
import { useNavigate } from 'react-router-dom'; // Agregado: Importar el hook

function Login() { // Corregido: Nombre con Mayúscula
    const navigate = useNavigate();

    const ingresarConGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        try {
            // Corregido: nombre de la función de firebase
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (user.email === "paulog162003@gmail.com") {
                alert('Hola Paulo, bienvenido al Admin');
                navigate("/admin"); // Aquí mandalo al admin si es Paulo
            } else {
                alert('Bienvenido a Candymania');
                navigate("/");
            }

        } catch (error) {
            console.log(error);
            alert('Error al ingresar con Google.');
        }
    }

    // Corregido: Se agregó el RETURN para que React pueda renderizar
    return (
        <div className="min-h-screen flex flex-col items-center justify-center  px-6">
            <div className="max-w-md w-full text-center space-y-10">

                <h2 className="text-6xl font-black text-white tracking-tighter">
                    HOLA <br />
                    <span className="text-[#cb6ce6]">DE NUEVO.</span>
                </h2>

                <p className="text-white font-medium text-lg">
                    Ingresá con tu cuenta de Google para gestionar tus compras.
                </p>

                <button
                    onClick={ingresarConGoogle}
                    className="w-full flex items-center justify-center gap-4 bg-white border-2 border-gray-100 py-5 rounded-[2rem] font-black text-gray-800 hover:border-[#7ed957] hover:shadow-xl transition-all duration-300"
                >
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6" />
                    CONTINUAR CON GOOGLE
                </button>

                <button
                    onClick={() => navigate("/")}
                    className="text-xs font-black text-gray-300 hover:text-gray-900 uppercase tracking-[0.2em] transition-colors"
                >
                    ← Volver a la tienda
                </button>
            </div>
        </div>
    );
}

export default Login; // Corregido: Mayúscula