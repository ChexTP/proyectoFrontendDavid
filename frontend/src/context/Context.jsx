import { globalContext } from "./globalContext";
import { useState } from "react";

const Context = ({ children }) => {

    const [bandera,setBandera] = useState(false)
    const [personaSeleccionada,setPersonaSeleccionada] = useState({
        cedula:"",
        nombre:"",
        apellidos:"",
        correo:""
    })
    const [cedulaActualizar,setCedulaActualizar] = useState('')
    const [nombreActualizar,setNombreActualizar] = useState('')
    const [apellidosActualizar,setApellidosActualizar] = useState('')
    const [correoActualizar,setCorreoActualizar] = useState('')
    
    const [botonActualizar,setBotonActualizar]=useState(false)
    const [botonAgregar,setBotonAgregar]=useState(false)
    
    const [showModal,setShowModal]=useState(false)
    const [showModalNotificacion,setShowModalNotificacion]=useState(false)
    const [showModalConfirmacion,setShowModalConfirmacion]=useState(false)

    const [notificacionAgregarTodos, setNotificacionAgregarTodos] = useState(false)
    const [notificacionAgregarUno,setNotificacionAgregarUno] = useState(false)
    const [notificacionEliminar,setNotificacionEliminar] = useState(false)
    const [notificacionActualizar,setNotificacionActualizar] = useState(false)
    
    const [mensaje,setMensaje] = useState("")
    const [mensajeConfirmacion,setMensajeConfirmacion] = useState("")


    
    

    
    return (
        <globalContext.Provider
            value={{
                bandera,setBandera,botonActualizar,setBotonActualizar,cedulaActualizar,setCedulaActualizar,nombreActualizar,setNombreActualizar,apellidosActualizar,setApellidosActualizar,correoActualizar,setCorreoActualizar,personaSeleccionada,setPersonaSeleccionada,botonAgregar,setBotonAgregar,showModal,setShowModal,notificacionAgregarTodos,setNotificacionAgregarTodos,notificacionAgregarUno,setNotificacionAgregarUno,notificacionEliminar,setNotificacionEliminar,notificacionActualizar,setNotificacionActualizar,
                mensaje,setMensaje,showModalNotificacion,setShowModalNotificacion,showModalConfirmacion,setShowModalConfirmacion,mensajeConfirmacion,setMensajeConfirmacion
                }}>
            {children}
        </globalContext.Provider>
    )

}

export default Context