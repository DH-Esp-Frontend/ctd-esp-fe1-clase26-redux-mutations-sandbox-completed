import React, {FC} from "react";
import {useAppSelector} from "../store/store";
import {selectBusqueda} from "../reducers/personajesReducer";
import {useGetPersonajesQuery} from "../services/personaje.services";
import Personaje from "./Personaje";


const Grilla:FC = () => {
    const personajesName = useAppSelector(selectBusqueda);
    const { data: personajes, error, isLoading } = useGetPersonajesQuery(personajesName)

    if (isLoading) return <div>Cargando personajes...</div>
    if (error) return <div>Error al cargar los personajes.</div>
    if (!personajes || personajes.results.length === 0) return <></>

    return <div className="App-table" style={{marginTop: 50}}>
        {personajes.results.map((personaje) => {
            return <Personaje  data={personaje}/>
        })}
    </div>
}

export default Grilla;