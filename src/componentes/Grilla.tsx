import React, {FC} from "react";
import {useAppSelector} from "../store/store";
import {selectBusqueda} from "../reducers/personajesReducer";
import {useGetPersonajesQuery} from "../services/personaje.services";
import {useAddFavoritoMutation} from "../services/favoritos.services";


const Grilla:FC = () => {
    const personajesName = useAppSelector(selectBusqueda);
    const [
        addFavorito, // This is the mutation trigger
        { isLoading: isUpdating }, // This is the destructured mutation result
    ] = useAddFavoritoMutation()
    const { data: personajes, error, isLoading } = useGetPersonajesQuery(personajesName)

    if (isLoading) return <div>Cargando personajes...</div>
    if (error) return <div>Error al cargar los personajes.</div>
    if (!personajes || personajes.results.length === 0) return <></>

    return <div className="App-table" style={{marginTop: 50}}>
        {personajes.results.map((personaje) => {
            return ( <div style={{display: "flex", flexDirection: "column", alignItems:"center", marginBottom: "20px"}}>
                <label style={{marginBottom: 5}}>Nombre: {personaje.name}</label>
                <img src={personaje.image}/>
                <button onClick={() => addFavorito(personaje.id)}>Marcar favorito</button>
            </div>)
        })}
    </div>
}

export default Grilla;