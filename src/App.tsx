import React from 'react';
import './App.css';
import Buscador from './componentes/Buscador';
import Grilla from "./componentes/Grilla";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {

  return (
      <Provider store={store}>
        <div className="App">
          <div className="App-body">
              <h1>Rick and Morty</h1>
              <h2>Buscador de Personajes</h2>
              <Buscador />
              <Grilla/>
          </div>
        </div>
      </Provider>
  );
}

export default App;
