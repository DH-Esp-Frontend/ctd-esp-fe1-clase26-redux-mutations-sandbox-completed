import React, {useEffect, useState} from 'react';
import './App.css';
import Buscador from './componentes/Buscador';
import Grilla from "./componentes/Grilla";
import {buscarPersonajes} from "./services/personaje.services";
import Personaje from "./types/personaje.types";

function App() {

  const [buscador, setBuscador] = useState<string>("");
  const [personajes, setPersonajes] = useState<Personaje[]>([]);

  useEffect(() => {
      buscarPersonajes(buscador).then((data: Personaje[]) => {
          setPersonajes(data);
      });
  }, [buscador])

  return (
    <div className="App">
      <div className="App-body">
          <h1>Rick and Morty</h1>
          <h2>Buscador de Personajes</h2>
          <Buscador buscador={buscador} setBuscador={setBuscador}/>
          <Grilla personajes={personajes}/>
      </div>
    </div>
  );
}

export default App;
