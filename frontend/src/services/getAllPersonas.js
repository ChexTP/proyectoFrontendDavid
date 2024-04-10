import axios from "axios";

const url = "http://127.0.0.1:5000/persona/"

export const getAllPersonas = async ()=>{
    try {
        const resultado = await axios.get(url)
        return resultado.data
    } catch (error) {
        console.log(error);
    }
}