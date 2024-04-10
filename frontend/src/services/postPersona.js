import axios from "axios";

const url = "http://127.0.0.1:5000/persona/"

export const postPersona = async (persona)=>{
    try {
        const resultado = await axios.post(url,persona)
        return resultado
    } catch (error) {
        console.log(error);
    }
}