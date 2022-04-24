import React, {ChangeEvent, FC, useState} from "react";
import {useAppDispatch} from "../store/store";
import {buscarPersonajes} from "../reducers/personajesReducer";

const Buscador:FC = () => {
    const dispatch = useAppDispatch();
    const [buscador, setBuscador] = useState<string>("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setBuscador(text);
        dispatch(buscarPersonajes(text))
    }

    return <div className="App-table">
        <div>
            <label>Buscar por Nombre: </label>
            <input type="text" value={buscador} onChange={(e)=> onChange(e)}
                   placeholder="Rick, Morty, etc" autoFocus={true}/>
        </div>
    </div>
}

export default Buscador;