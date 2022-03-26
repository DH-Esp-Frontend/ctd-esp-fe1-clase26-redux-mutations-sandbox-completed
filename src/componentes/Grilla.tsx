import React, {FC} from "react";
import Personaje from "../types/personaje.types";

type GrillaProps = {
    personajes: Personaje[];
}

const Grilla:FC<GrillaProps> = ({personajes}: GrillaProps) => {

    if (personajes.length === 0) return <></>

    return <div className="App-table" style={{marginTop: 50}}>
        {personajes.map((personaje) => {
            return ( <div style={{display: "flex", flexDirection: "column", alignItems:"center", marginBottom: "20px"}}>
                <label style={{marginBottom: 5}}>Nombre: {personaje.name}</label>
                <img src={personaje.image}/>
            </div>)
        })}
    </div>
}

export default Grilla;