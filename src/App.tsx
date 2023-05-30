import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import init, { P2PKHAddress, PrivateKey, PublicKey } from "bsv-wasm-web";

function App() {
  const [count, setCount] = useState(0);

  const addressFromWif = async (ordWif: string) => {
    await init();
    const privKey = PrivateKey.from_wif(ordWif);
    const pk = PublicKey.from_private_key(privKey);
    return privKey && pk && ordWif && P2PKHAddress.from_pubkey(pk).to_string();
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            const address = addressFromWif(
              "Kx9FX9hp85GgLRf2jFuUUycaJDu1JthKgbJKhBhJuMAk5Q8MAuL1"
            );
            console.log(address);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
