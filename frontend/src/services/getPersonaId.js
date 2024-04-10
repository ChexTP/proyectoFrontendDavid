import axios from "axios";


const url = "http://127.0.0.1:5000/persona/"

export const getPersonaId = async (idPersona) => {

    try {
        const urlApi = (`${url}${idPersona}`);
        const resultado = await axios.get(urlApi);
        return resultado.data
    } catch (error) {
        console.log(error);

    }


}