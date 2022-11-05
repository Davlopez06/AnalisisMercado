import React from "react";
import { Link } from "react-router-dom";

const Create=()=>{
    return(
        <div className="create">
            <div className="Nav">
                <Link to="/"><button type="submit">Volver</button></Link>
            </div>
            <div class="container">
                <div class="brand-title">DATA</div>
                <div class="inputs">
                    <label>Identificación</label>
                    <input type="number" placeholder="ingresa el numero" />
                    <label>Modelo del automóvil,</label>
                    <input type="number" placeholder="Año" />
                    <label>Factores que tuvo en cuenta al comprar el automóvil</label>
                    <div class="content-select">
                        <select>
                            <option>La reputación de la marca</option>
                            <option>Las opciones de financiamiento</option>
                            <option>El desempeño al manejarlo,</option>
                            <option>Recomendaciones de amigos o familiares</option>
                            <option>Otros</option>
                        </select>
                        <i></i>
                    </div>
                    <label>Calificación de prueba de manejo</label>
                    <input type="number" placeholder="Año" />
                    <label>Calificación de satisfacción.</label>
                    <input type="number" placeholder="Año" />
                    <button type="submit">Crear</button>
                </div>

            </div>
        </div>
    )
}

export default Create;