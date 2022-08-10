import logo from './logo.svg';
import Componente from './components/Componente';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';
import Propiedades from './components/Propiedades';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       </section>

        <section>
          <Componente></Componente>
          <Componente2 msg = "Soy un Componente desde una prop"></Componente2>
          <Componente3 msg = "Soy un Componente Funcional con una prop"></Componente3>
          <hr></hr>
          <Propiedades 
            cadena = "Esto es un string" 
            numero={49} 
            boleano = {true}
            arreglo = {[1,2,3]}
            obj = {{nombre:"Roberto",correo:"robertojimenezg@gmail.com"}}>
          </Propiedades>   
        </section>
      </header>
      
    </div>
  );
}

export default App;
