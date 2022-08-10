import React from "react";


export default function Propiedades(props){

  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.boleano ? "True" : "False"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.obj.nombre + " - " + props.obj.correo}</li>
      </ul>
    </div>
  );
}


Propiedades.defaultProps = {
  porDefecto: "Las Props"
}