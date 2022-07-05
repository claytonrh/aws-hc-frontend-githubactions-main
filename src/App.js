import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Mais um projeto desenvolvido em ReactJS.</code>.
        </p>
        <p>Ambiente de desenvolvimento  Release v1.0</p>
        <a
          className="App-link"
          href="https://github.com/claytonrh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clayton Salvador
        </a>
      </header>
    </div>
  );
}

export default App;
