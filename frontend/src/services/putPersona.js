import axios from "axios";

const url = "http://127.0.0.1:5000/persona"

export const putPersona = async (id,data)=>{
    console.log(id);
    try {
        const resultado = await axios.put(`http://127.0.0.1:5000/persona/${id}`,data) 
        console.log(resultado);
    } catch (error) {
        // console.log(id);
        console.log(error);
    }

    
}

// export const putPersona = async (id,data) => {
//     try {
//         const respuesta = await axios.put(`http://127.0.0.1:5000/persona/${id}`,data, // Your data object to be updated
//             { headers: { 'Content-Type': 'application/json' } } // Set Content-Type header
//         );
//         console.log(respuesta.data);
//     } catch (error) {
//         console.error(error);
//     }
// };

// export const putPersona = async (id,data) => {
//     console.log(`${url}/&${id}`);
// };