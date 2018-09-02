import React from "react";

export default class Partida extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.estadio}</h3>
        <div>
          <span>{this.props.data}</span>
          <span> -- </span>
          <span>
            Hora:
            {this.props.hora}
          </span>
        </div>
      </div>
    );
  }
}
