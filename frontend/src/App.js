import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import ERC6551RegistryAbi from "./abi/ERC6551Registry.json";

async function getLatestBlock() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const blockNumber = await provider.getBlockNumber();
  console.log("Current block number: " + blockNumber);
}

async function createAccount() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const signer = provider.getSigner();
  const ERC6551RegistryContractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
  const contract = new ethers.Contract(
    ERC6551RegistryContractAddress,
    ERC6551RegistryAbi.abi,
    signer
  );
  console.log(contract);
}
function App() {
  return (
    <div className="App" onClick={createAccount}>
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
