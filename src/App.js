import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = 'Roberto';
  let conectado = true;
  let estaciones = ['Primavera','Verano','Otoño','Invierno'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor='nombre'>Nombre:</label>
        <input type="text" id="nombre"></input>
        <h1>{nombre}</h1>
        <p>
          {conectado? "El usuario está logeado" : "El usuario está desconectado"}
        </p>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {estaciones.map((elemento) =>(
            <li>{elemento}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
