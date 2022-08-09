import logo from './logo.svg';
import Componente from './components/Componente';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <section>
        <Componente></Componente>
        <Componente2 msg = "Soy un Componente desde una prop"></Componente2>
        <Componente3 msg = "Soy un Componente Funcional con una prop"></Componente3>
        <br />
        <br />
        <br />
        <br />
        <br /> 
      </section>
    </div>
  );
}

export default App;
