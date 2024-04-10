import { globalContext } from "../context/globalContext"
import { useContext,useEffect } from "react"
import { deletePersona } from "../services/deletePersona";

const ModalConfirmacion = () => {

    const {showModalConfirmacion,setShowModalConfirmacion,setMensaje,setShowModalNotificacion,bandera,setBandera,personaSeleccionada,setNotificacionEliminar}=useContext(globalContext)

    
    
    const handleConfirmar=async (persona)=>{
        
            const result = await deletePersona(persona._id.$oid)
            result.status == 200 ? setNotificacionEliminar(true) : setNotificacionEliminar(false)
            setShowModalConfirmacion(false)
            setShowModalNotificacion(true)
            setMensaje("persona eliminada correctamente")
            bandera==true ? setBandera(false):setBandera(true)
            console.log(showModalConfirmacion)
    }

    const handleCancelar=()=>{
        setShowModalConfirmacion(false)
    }

    return (
        <div>
            {showModalConfirmacion?(
                <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
                    <div className=" bg-slate-200  p-5 rounded-md flex justify-center items-center flex-col gap-6 p-10">
                        <h1 className=" text-lg font-medium">
                            Desea eliminar la persona del registro?
                        </h1>
                        <div className="gap-20 flex" >
                            <button
                                onClick={()=>{handleConfirmar(personaSeleccionada)}}
                                className="bg-green-500 text-white p-3 rounded-md font-semibold"
                                >
                                Confirmar
                            </button>
                            <button
                                onClick={handleCancelar}
                                className="bg-red-500 text-white p-3 rounded-md font-semibold"
                                >
                                Cancelar
                            </button>
                            </div>
                    </div>

                </div>
            )                         
            :("")}
        </div>
    )
}

export default ModalConfirmacion
