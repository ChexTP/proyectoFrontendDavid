import axios from "axios";

const url = "http://127.0.0.1:5000/persona"

export const deletePersona = async (id)=>{
    console.log(id);
    try {
        const resultado = await axios.delete(`${url}/${id}`) 
        console.log(resultado);
        return resultado
    } catch (error) {
        // console.log(id);
        console.log(error);
    }

}