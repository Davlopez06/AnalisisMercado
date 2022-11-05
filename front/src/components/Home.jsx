import React from "react";
import "./Home.css"
import Tabla from "./Tabla";
import { Link } from "react-router-dom";
import { setPage } from "../redux/action";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home=()=>{
    const dispatch=useDispatch()
    const data=useSelector(state=>state.data)
    const allData=useSelector(state=>state.allData)
    const [page, setPages] = React.useState(1);
    const paginate=useSelector(state=>state.pages)
    const handleChange = (event, value) => {
        //Metodo para cambiar la pagina y la vista de la tabla
      setPages(value);
      console.log(value)
    };
    useEffect(()=>{
        //Metodo que va al actions y cambia la pagina de la tabla
        dispatch(setPage(page))
    },[page])
    useEffect(()=>{
        //Cuando se carga la pagina empezar en la pagina 1
        dispatch(setPage(1))
    },[])
    useEffect(()=>{
        setPages(1);
    },[allData])
    return(
        <div className="home">
            <div className="Nav">
                <h2>Analisis de ventas</h2>
            </div>
            <div className="Form">
                <Link to="/create" className="button button1">Formulario</Link>
            </div>
            <Tabla/>
            {paginate ===1? null :data.length!==0 ?
                <Stack spacing={2} className="pagina">
                    <Pagination count={paginate} page={page} onChange={handleChange} className="paginate"/>
                </Stack>
            : null}
        </div>
    )
}
export default Home;