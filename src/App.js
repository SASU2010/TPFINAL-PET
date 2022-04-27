import logo from './/assets/img/xxx2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ESTO SI ME GUSTA 
        </p>
        <a
          className="App-link"
          href="https://www.bestbuy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todo lo que siempre quisiste
        </a>
      </header>
    </div>
  );
}

export default App;
