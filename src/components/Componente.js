import React, {Component} from "react";

class Componente extends Component{ //Si no se hace la desestructuración sería class Componente extends React.Component {}
  render(){

    return <h2>Hola, soy un Componente llamado Componente</h2>
  }

}


export default Componente;
// Puede ser también
// export Componente    pero de ser así en el archivo App de debe usar la desestructuración para importarlo