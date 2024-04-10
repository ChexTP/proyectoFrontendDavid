import { useContext, useEffect,useState } from "react";
import { getAllPersonas } from "../services/getAllPersonas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilePen, faTrash} from "@fortawesome/free-solid-svg-icons"
import { globalContext } from "../context/globalContext";

import { ToastContainer, toast } from "react-toastify";

const TablaPersonas = () => {

    const{bandera,setBandera,personaSeleccionada,setPersonaSeleccionada,showModal,setShowModal,setBotonAgregar,botonAgregar,notificacionAgregarUno,setNotificacionAgregarUno,setNotificacionEliminar,notificacionEliminar,setShowModalNotificacion,setMensaje,setShowModalConfirmacion}=useContext(globalContext)
    
    //usestate para los daso que llegn de la db
    const [data,setData] =useState([])

    

    //llamado a la funcion que trae todas la personas de la db
    useEffect(() => {
        getAllPersonas()
        //si obtiene los datos los setea en data
        .then((r)=> {
            setData(r)
            
        })
        //si no obtiene los datos muestra un error en la consola  
        .catch((e)=> {
            console.log(e)

        })
        
    }, [bandera])

    const handleModal=(persona)=>{
        setShowModal(true)
        setPersonaSeleccionada(persona)
        bandera==true ? setBandera(false):setBandera(true)
        console.log(showModal)
    }

    const borrarPersona =(persona)=>{
        // const result = await deletePersona(persona._id.$oid)
        // result.status == 200 ? setNotificacionEliminar(true) : setNotificacionEliminar(false)
        // setShowModalNotificacion(true)
        // setMensaje("persona eliminada correctamente")
        // console.log(notificacionEliminar)

        // bandera==true ? setBandera(false):setBandera(true)

        setPersonaSeleccionada(persona)
        setShowModalConfirmacion(true)

    }

    const handleModalAgregar=()=>{
        setShowModal(true)
        setBotonAgregar(true)
        
        console.log(`mostrar modal en ${showModal}`);
        console.log(`boton agregar en ${botonAgregar}`);
    }

    // notificacionAgregarUno?toast.success("persona agregada correctmente"):""
       
    
    return (
        <div className=" w-2/3">

                <ToastContainer/>
          
                {/* mapea los datos traidos guardados en data  */}

                <div className="mb-5">
                    <button
                        className="bg-slate-700 text-white p-3 rounded-md border-2 border-black"
                        onClick={handleModalAgregar}
                        >
                        Agregar persona
                    </button>
                
                </div>


                <table className="w-full text-center table-auto">
                    <thead className="bg-slate-700 text-white">
                        <tr>
                            <th className="border-2 border-black">Cedula</th>
                            <th className="border-2 border-black">Nombre</th>
                            <th className="border-2 border-black">Apellidos</th>
                            <th className="border-2 border-black">Correo</th>
                            <th className="border-2 border-black">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((persona) => (          
                            <tr key={persona.cedula}>
                                
                                <td className="border-2 border-black">
                                {persona.cedula}   
                                </td>
                                <td className="border-2 border-black">
                                {persona.nombre}   
                                </td>
                                <td className="border-2 border-black">
                                {persona.apellidos}   
                                </td>
                                <td className="border-2 border-black">
                                {persona.correo}   
                                </td>
                                <td className="border-2 border-black ">
                                    <FontAwesomeIcon icon={faFilePen}
                                        className="mr-5 text-slate-700"
                                        onClick={()=>handleModal(persona)}
                                    />
                                    <FontAwesomeIcon icon={faTrash}
                                        className=" text-slate-700"
                                        onClick={()=>borrarPersona(persona)}
                                    />

                                </td>
                            </tr>                          
                        ))}
                    </tbody>
                </table>

        </div>
    )
}

export default TablaPersonas
