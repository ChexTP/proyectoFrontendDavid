import { globalContext } from "../context/globalContext";
import { useContext, useState ,useEffect} from "react";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import { putPersona } from "../services/putPersona";
import { postPersona } from "../services/postPersona";
import { ToastContainer, toast } from "react-toastify";

const ModalActualizar = () => {

const {personaSeleccionada,showModal,setShowModal,botonAgregar,setBotonAgregar}=useContext(globalContext)
const {bandera,setBandera,setNotificacionAgregarUno,setMensaje,setShowModalNotificacion}=useContext(globalContext)

const {
    register,
    handleSubmit,
    formState: { errors },
    
    } = useForm({
      
    });
    
const initialValues={

  inputCedula: personaSeleccionada.cedula,
  inputNombre: personaSeleccionada.nombre,
  inputApellidos: personaSeleccionada.apellidos,
  inputCorreo: personaSeleccionada.correo
}

const onSubmit= async (data)=>{

  if (botonAgregar===true) {
    const result = await postPersona(data)
    result.status == 200 ?  toast.success(result.data) : toast.error(result.data)    
    console.log(result)
    setNotificacionAgregarUno(true)
    setShowModalNotificacion(true)
    setMensaje("persona agregada correctamente")
    setShowModal(false);
    bandera==true ? setBandera(false):setBandera(true)
  }
  else{
    putPersona(personaSeleccionada._id.$oid,data)
    setShowModalNotificacion(true)
    setMensaje("persona actualizada correctamente")
    setShowModal(false)
    bandera==true ? setBandera(false):setBandera(true)
  }
    
    // console.log(personaSeleccionada._id.$oid);
    
}


const handleClick=()=>{
    setShowModal(false)
    setBotonAgregar(false)
}
   
return (
    <div>
      <ToastContainer />
      {showModal ? (
        <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
          <div className=" bg-slate-200  p-5 rounded-md">
            
          <FontAwesomeIcon
              className="ml-64"
              icon={faXmark} 
              onClick={handleClick} 
          />
            
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="  flex flex-col "
              action=""
            >
              {/* input para la cedula de la persona */}
              <div>
                <label className="font-bold" htmlFor="cedula">
                  Cedula
                </label>
                <input
                  className="w-full mt-2 h-8 p-3 rounded-lg"
                  placeholder=''
                  id="cedula"
                  type="text"
                  {...register("cedula", {
                    required: true,
                    maxLength: 10,
                    pattern: /^[0-9]+$/,
                  })}
                  defaultValue={botonAgregar===true?"":initialValues.inputCedula}
                />
                <div className="text-end">
                  {errors.cedula?.type === "required" && (
                    <p className="text-red-500 ">la cedula es requerida</p>
                  )}
                  {errors.cedula?.type === "maxLength" && (
                    <p className="text-red-500 ">
                      más caracteres de los permitidos
                    </p>
                  )}
                  {errors.cedula?.type === "pattern" && (
                    <p className="text-red-500 ">
                      ingrese solo numeros y no letras
                    </p>
                  )}
                </div>
              </div>

              {/* input para le nombre de la persona                */}
              <div className="mt-3">
                <label className="font-bold" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="w-full mt-2 h-8 p-3 rounded-lg"
                  placeholder=''
                  id="nombre"
                  type="text"
                  {...register("nombre", {
                    required: true,
                  })}
                  defaultValue={botonAgregar===true?"":initialValues.inputNombre}
                />
                <div className="text-end">
                  {errors.nombre?.type === "required" && (
                    <p className="text-red-500 ">El nombre es requerido </p>
                  )}
                </div>
              </div>

              {/* input para los apellidos de la persona */}
              <div className="mt-3">
                <label className="font-bold" htmlFor="apellidos">
                  Apellidos
                </label>
                <input
                  className="w-full mt-2 h-8 p-3 rounded-lg"
                  placeholder=''
                  id="apellidos"
                  type="text"
                  {...register("apellidos", {
                    required: true,
                  })}
                  defaultValue={botonAgregar===true?"":initialValues.inputApellidos}
                />
                <div className="text-end">
                  {errors.apellidos?.type === "required" && (
                    <p className="text-red-500 ">
                      los apellidos son requerido{" "}
                    </p>
                  )}
                </div>
              </div>

              {/* input para el correo de la persona */}
              <div className="mt-3">
                <label className="font-bold" htmlFor="correo">
                  Correo
                </label>
                <input
                  className="w-full mt-2 h-8 p-3 rounded-lg"
                  placeholder=''
                  id="correo"
                  type="text"
                  {...register("correo", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  defaultValue={botonAgregar===true?"":initialValues.inputCorreo}
                />
                <div className="text-end">
                  {errors.correo?.type === "required" && (
                    <p className="text-red-500 ">el correo es requerido</p>
                  )}
                  {errors.correo?.type === "pattern" && (
                    <p className="text-red-500 ">ingrese un correo valido</p>
                  )}
                </div>
              </div>

              <div className="flex justify-center ">
                <button
                  className="bg-slate-700 mt-5 p-2 rounded-md text-white font-bold"
                  type="submit"
                >
                  {botonAgregar?"Agregar":"Actualizar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}

      

    </div>
  );
};

export default ModalActualizar;
