import React from "react";
import { DeleteData, getAllData, setPage } from "../redux/action";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import "./Tabla.css"
import { Link } from "react-router-dom";

const Tabla = ()=>{
    const datas=useSelector(state=>state.datas)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllData())
        dispatch(setPage(1))
    },[])
    return(
        <div className="container">
            <ul className="responsive-table">
                <li className="table-header">
                <div className="col col-1">Identificación</div>
                <div className="col col-2">Modelo</div>
                <div className="col col-3">Factor</div>
                <div className="col col-4">Prueba de manejo</div>
                <div className="col col-5">Satisfacción</div>
                <div className="col col-6">Editar</div>
                <div className="col col-7">Eliminar</div>
                </li>
                {datas.length !==0? 
                datas.map(data=>{
                    return(
                        <li className="table-row">
                        <div className="col col-1" data-label="Identificación">{data.identification}</div>
                        <div className="col col-2" data-label="Modelo">{data.modelo}</div>
                        <div className="col col-3" data-label="Factor">{data.factores}</div>
                        <div className="col col-4" data-label="Prueba de manejo">{data.pruebamanejo}</div>
                        <div className="col col-5" data-label="Satisfacción">{data.satisfaction}</div>
                        <div className="col col-6" data-label="Editar"><Link to={`/editar/${data.identification}`} className="link1">Editar</Link></div>
                        <div className="col col-7" data-label="Eliminar"><button onClick={()=> dispatch(DeleteData({identification: parseInt(data.identification)}))} className="link1">Eliminar</button></div>
                        </li>
                    )
                })    
            : <li className="table-row">
                    <p className="nofound">No hay datos para mostrar</p>
              </li>}
            </ul>
        </div>
    )
}
export default Tabla;