import { useForm } from "react-hook-form";
import { useContext } from "react";
import { postPersona } from "../services/postPersona";
import { globalContext } from "../context/globalContext";

const FormularioIngreso = () => {
   
   const {bandera,setBandera}=useContext(globalContext) 

    //funciones propias de react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  //funcion para obtener datos del formulario
  const onSubmit=(data)=>{
    
    postPersona(data)
    bandera==true ? setBandera(false):setBandera(true)
    reset();
  }

  return (
    <div className=" bg-slate-200  p-5 rounded-md">
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
                placeholder="ingrese la cedula de la persona"
                id="cedula"
                type="text"
                {...register("cedula", {
                    required: true,
                    maxLength: 10,
                    pattern: /^[0-9]+$/
                })}
            />
            <div className="text-end">
                {errors.cedula?.type === "required" && (
                    <p className="text-red-500 ">la cedula es requerida</p>
                )}
                {errors.cedula?.type === "maxLength" && (
                    <p className="text-red-500 ">más caracteres de los permitidos</p>
                )}
                {errors.cedula?.type === "pattern" && (
                    <p className="text-red-500 ">ingrese solo numeros y no letras</p>
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
                placeholder="ingrese el nombre de la persona"
                id="nombre"
                type="text"
                {...register("nombre", {
                    required: true,
                })}
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
                placeholder="ingrese los apellidos de la persona"
                id="apellidos"
                type="text"
                
                {...register("apellidos", {
                    required: true,
                })}
            />
            <div className="text-end">
                {errors.apellidos?.type === "required" && (
                    <p className="text-red-500 ">los apellidos son requerido </p>
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
                placeholder="ingrese el correo de la persona"
                id="correo"
                type="text"
                {...register("correo", {
                    required: true,
                    pattern: /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                })}
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
                Agregar
            </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioIngreso;
