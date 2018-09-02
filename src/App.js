import React, { Component } from "react";

import PlacarContainer from "./PlacarContainer";

const dados = {
  partida: {
    estadio: "Minerião/MG",
    data: "11/03",
    hora: "20h",
  },

  nativo: {
    nome: "Galão da Masssa"
  },

  visitante: {
    nome: "Cruzeiro Inchirido"
  },

};

class App extends Component {
  render() {
    return (
      <div>
        <PlacarContainer
          partida={dados.partida}
          nativo={dados.nativo}
          visitante={dados.visitante}
        />
      </div>
    );
  }
}

export default App;
