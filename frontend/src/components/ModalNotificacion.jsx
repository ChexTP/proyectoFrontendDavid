import { globalContext } from "../context/globalContext"
import { useContext,useEffect } from "react"


const ModalNotificacion = () => {

                
    const {notificacionAgregarUno,mensaje,showModalNotificacion,setShowModalNotificacion,notificacionEliminar}=useContext(globalContext)

    useEffect(() => {
        setTimeout(() => {
          setShowModalNotificacion(false);
        }, 2000); // Cierra el modal después de 3 segundos
      }, []);

    return (
        

        <div>
            {
                showModalNotificacion?(
                    <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
                        <div className=" bg-slate-200  p-5 rounded-md">
                            <h1>{mensaje}</h1>
                        </div>

                    </div>
                )
                    
                    

                
            
            
            :("")}
        </div>
  )
}

export default ModalNotificacion
