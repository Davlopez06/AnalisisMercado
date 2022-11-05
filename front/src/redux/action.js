import axios from "axios"
export const GET_ALL_DATA="GET_ALL_DATA"
export const SET_PAGE="SET_PAGE"
export const GET_DATA="GET_DATA"

export const getAllData = () => async(dispatch) => {
    //Obtiene todos los personajes de la api de star wars de sus 9 paginas
    return axios.get("http://127.0.0.1:3333/data")
    .then(response=>response.data)
    .then(json=>{
        dispatch({type: GET_ALL_DATA, payload: json})
    })
}

export const setPage= (page)=>(dispatch)=>{
    //Cambia la pagina de la tabla
    return dispatch({type: SET_PAGE, payload: page})
}

export const getPerson=(name)=>(dispatch)=>{
    return dispatch({type: GET_DATA, payload: name})
}