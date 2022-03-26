import React, {FC} from "react";

type BuscadorProps = {
    buscador: string;
    setBuscador: (query: string) => void
}

const Buscador:FC<BuscadorProps> = ({buscador, setBuscador}:BuscadorProps) => {

    return <div className="App-table">
        <div>
            <label>Buscar por Nombre: </label>
            <input type="text" value={buscador} onChange={(e)=> setBuscador(e.target.value)}
                   placeholder="Rick, Morty, etc" autoFocus={true}/>
        </div>
    </div>
}

export default Buscador;