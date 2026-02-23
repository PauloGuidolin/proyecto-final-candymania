import {Navigate} from "react-router-dom"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/config"





function ProtectedRoute({ children }) { // children es el componente que se va a renderizar si el usuario está autenticado
    const [usuario, setUsuario] = useState(null) // usuario es el estado que almacena la información del usuario autenticado
    const [cargando, setCargando] = useState(true) // cargando es el estado que indica si se está cargando la información del usuario autenticado
    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, (user) => {
            setUsuario(user) // setUsuario actualiza el estado del usuario autenticado
            setCargando(false) // setCargando actualiza el estado de cargando a false, indicando que ya se ha cargado la información del usuario autenticado
        })
        return () => unSuscribe() // la función de limpieza que se ejecuta cuando el componente se desmonta, en este caso, se desuscribe del evento onAuthStateChanged
    }, [])

    if (cargando) return <p className="flex text-white ">Cargando...</p>

    if (!usuario || usuario.email !== "paulog162003@gmail.com") {
        return <Navigate to="/" />
    }
    return children

}

export default ProtectedRoute;