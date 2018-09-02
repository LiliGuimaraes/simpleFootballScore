import React from "react";

import Time from "./Time";
import Partida from "./Partida";

export default class PlacarContainer extends React.Component {
  state = {
    gol_nativo_inicio: 0,
    gol_visitante_inicio: 0
  };

  marcarGolNativo() {
    this.setState({
      gol_nativo_inicio: this.state.gol_nativo_inicio + 1,
    });
  }

  marcarGolVisitante() {
    this.setState({
      gol_visitante_inicio: this.state.gol_visitante_inicio + 1,
    });
  }

  render() {
    return (
      <div>
        <div style={{ float: "left", marginRight: "10px" }}>
          <h3 style={{ textAlign: "center" }}>Time nativo</h3>
          <Time nome={this.props.nativo.nome}
                gol={this.state.gol_nativo_inicio}
                marcarGol={this.marcarGolNativo.bind(this)} />
        </div>

        <div style={{ float: "left", marginRight: "10px", marginTop: "30px" }}>
          <Partida
            estadio={this.props.partida.estadio}
            data={this.props.partida.data}
            horario={this.props.partida.hora}
          />
        </div>

        <div style={{ float: "left", marginRight: "10px" }}>
          <h3 style={{ textAlign: "center" }}>Time de fora</h3>
          <Time nome={this.props.visitante.nome}
                gol={this.state.gol_visitante_inicio}
                marcarGol={this.marcarGolVisitante.bind(this)} />
        </div>

        <div style={{ clear: "both"}} />
      </div>
    );
  }
}
