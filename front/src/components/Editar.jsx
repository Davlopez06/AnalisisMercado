import React from "react";
import s from "./Editar.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getAllData, getData, UpdateData } from "../redux/action";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import Rating from '@mui/material/Rating';

const Editar=()=>{
    const dispatch = useDispatch()
    const data=useSelector(state=>state.data)
    const {id}=useParams()
    const [pruebamanejo,setPruebamanejo]=useState(1)
    const [satisfaction,setSatisfaction]=useState(1)
    const datas=useSelector(state=>state.auxData)
    const [input, setInput] = useState({
        identification: 0,
        modelo: "",
        factores: "Seleccionar",
    })
    // console.log(genres)
    
    useEffect(()=>{
        console.log("Entra")
        dispatch(getAllData())
    },[])
    useEffect(()=>{
        if(datas.length !==0){
            dispatch(getData(id))
        }
    },[datas])

    useEffect(()=>{
        setInput({
            identification: data.identification,
            modelo: data.modelo,
            factores:data.factores
        })
        setPruebamanejo(data.pruebamanejo);
        setSatisfaction(data.satisfaction)
    },[data])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    const validateModelo=(modelo)=>{
        if (modelo<1990 || modelo>2022){
            return false
        }else{
            return true
        }
    }

    const validateIdentification=(identification)=>{
        if (identification.length>10){
            return false
        }else{
            return true
        }
    }


    function handleSubmit(e) {
        if(!input.identification || !input.modelo || input.factores === "Seleccionar" || !satisfaction || !pruebamanejo) {
            e.preventDefault()
            Swal.fire({
                icon: "error",
                title: "Ohhh!",
                text: "Llene todos los campos",
                confirmButtonText: "Ok",
                confirmButtonColor: "#0b132b"
            });
            console.log("error")
        } 
        else if (validateModelo(input.modelo) && validateIdentification(input.identification)) {
            e.preventDefault()
            console.log(input)
            dispatch(UpdateData({
                identification: input.identification,
                modelo: input.modelo,
                factores: input.factores,
                pruebamanejo: pruebamanejo,
                satisfaction: satisfaction
            }))
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Successfully  actualizaci??n",
                confirmButtonText: "Ok",
                confirmButtonColor: "#0b132b"
            });
        }else if (validateModelo(input.modelo) && !validateIdentification(input.identification)){
            e.preventDefault()
            Swal.fire({
                icon: "error",
                title: "Ohhh!",
                text: "Modelo no valido",
                confirmButtonText: "Ok",
                confirmButtonColor: "#0b132b"
            });
            console.log("error")
        }else{
            e.preventDefault()
            Swal.fire({
                icon: "error",
                title: "Ohhh!",
                text: "Modelo no valido",
                confirmButtonText: "Ok",
                confirmButtonColor: "#0b132b"
            });
            console.log("error")
        }
    }
    return (
            <div className={s.content}>
                <div className={s.nav}>
                    <Link className={s.btn} to="/">Volver</Link>
                </div>
                
                <div className={s.all}>
                    <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
                        <h3>New Data</h3>
                        <div className={s.containerInputs}>
                            <div>
                                <label>Identification: </label>
                                <input 
                                    className={s.input}
                                    placeholder="Identification"
                                    type="text" 
                                    value={input.identification}
                                    name="identification"
                                    readOnly
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className={s.order}>
                                <label> Factores que tuvo en cuenta al comprar el autom??vil: </label>
                                <select onChange={(e) => handleChange(e)} defaultValue="Seleccionar" name="factores" value={input.factores} className={s.select}>
                                        <option value="Seleccionar">Seleccionar</option>
                                        <option value="La reputaci??n de la marca">La reputaci??n de la marca</option>  
                                        <option value="Las opciones de financiamiento">Las opciones de financiamiento</option>  
                                        <option value="El desempe??o al manejarlo">El desempe??o al manejarlo</option>  
                                        <option value="Recomendaciones de amigos o familiares">Recomendaciones de amigos o familiares</option>  
                                        <option value="Otros">Otros</option>  
                                </select>
                            </div>
                            <div>
                                <label>Modelo: </label>
                                <input 
                                    className={s.input}
                                    placeholder="Modelo"
                                    type="number" 
                                    value={input.modelo}
                                    name="modelo"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className={s.order}>
                                <label>Calificaci??n de prueba de manejo: </label>
                                <Rating
                                name="pruebamanejo"
                                value={pruebamanejo}
                                onChange={(event, newValue) => {
                                    setPruebamanejo(newValue);
                                    if(newValue === null) {
                                        setPruebamanejo(1)
                                    }
                                }}
                                />
                            </div>
                            <div className={s.order}>
                                <label>Calificaci??n de satisfacci??n: </label>
                                <Rating
                                name="satisfaction"
                                value={satisfaction}
                                onChange={(event, newValue) => {
                                    setSatisfaction(newValue);
                                    if(newValue === null) {
                                        setSatisfaction(1)
                                    }
                                }}
                                />
                            </div>
                            
                            <input className={s.btn} type={"submit"} value={"Actualizar"}/>
                        </div>
                    </form>
                </div>
            
            </div>
    
        )
}

export default Editar;