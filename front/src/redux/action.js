import axios from "axios"
import Swal from "sweetalert2";
export const GET_ALL_DATA="GET_ALL_DATA"
export const SET_PAGE="SET_PAGE"
export const GET_DATA="GET_DATA"
export const DELETE="DELETE"


export const getAllData = () => async(dispatch) => {
    //Obtiene todos los personajes de la api de star wars de sus 9 paginas
    return axios.get("http://127.0.0.1:3333/data")
    .then(response=>response.data)
    .then(json=>{
        dispatch({type: GET_ALL_DATA, payload: json})
    })
}

export const CreateData = (data) => async(dispatch) => {
    console.log(data)
    //Obtiene todos los personajes de la api de star wars de sus 9 paginas
    return axios.post("http://127.0.0.1:3333/insert",data)
    .then(()=>{
        Swal.fire({
            //position: 'top-end',
            //position: 'top-end',
            icon: 'success',
            title: 'Se crearon los datos correctamente',
            showConfirmButton: false,
            timer: 2000
        })
    })
    .catch((e) => {
        console.log(e)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error en la creacion',
        })
    })
}

export const setPage= (page)=>(dispatch)=>{
    //Cambia la pagina de la tabla
    return dispatch({type: SET_PAGE, payload: page})
}

export const getData=(id)=>(dispatch)=>{
    console.log("entra")
    console.log(id)
    return dispatch({type: GET_DATA, payload: id})
}

export const UpdateData = (data) => async(dispatch) => {
    console.log(data)
    //Obtiene todos los personajes de la api de star wars de sus 9 paginas
    return axios.put("http://127.0.0.1:3333/update",data)
    .then(()=>{
        Swal.fire({
            //position: 'top-end',
            //position: 'top-end',
            icon: 'success',
            title: 'Se actualizaron los datos correctamente',
            showConfirmButton: false,
            timer: 2000
        })
    })
    .catch((e) => {
        console.log(e)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error en la actualización',
        })
    })
}

export const DeleteData = (ide) => async(dispatch) => {
    console.log(ide)
    //Obtiene todos los personajes de la api de star wars de sus 9 paginas
    return axios.delete(`http://127.0.0.1:3333/delete/${ide.identification}`)
    .then((data)=>{
        console.log(data.data)
        Swal.fire({
            //position: 'top-end',
            //position: 'top-end',
            icon: 'success',
            title: 'Se eliminaron los datos correctamente',
            showConfirmButton: false,
            timer: 2000
        })
        dispatch({type: DELETE, payload: ide.identification})
    })
    .catch((e) => {
        console.log(e)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error en la eliminacion',
        })
    })
}