import React, {FC} from "react";
import {useAppSelector} from "../store/store";
import {selectBusqueda} from "../reducers/personajesReducer";
import {useGetPersonajesQuery} from "../services/personaje.services";


const Grilla:FC = () => {
    const personajesName = useAppSelector(selectBusqueda);
    const { data: personajes, error, isLoading } = useGetPersonajesQuery(personajesName)

    if (isLoading) return <div>Cargando personajes...</div>
    if (error) return <div>Error al cargar los personajes.</div>
    if (!personajes || personajes.results.length === 0) return <></>

    return <div className="App-table" style={{marginTop: 50}}>
        {personajes.results.map((personaje) => {
            return ( <div style={{display: "flex", flexDirection: "column", alignItems:"center", marginBottom: "20px"}}>
                <label style={{marginBottom: 5}}>Nombre: {personaje.name}</label>
                <img src={personaje.image}/>
            </div>)
        })}
    </div>
}

export default Grilla;