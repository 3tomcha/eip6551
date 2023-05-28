import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";

async function getLatestBlock() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const blockNumber = await provider.getBlockNumber();
  console.log("Current block number: " + blockNumber);
}
function App() {
  return (
    <div className="App" onClick={getLatestBlock}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
