import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const hc_db = axios.create({
  baseURL: 'http://localhost:1996/api/ids',
})

const handleMint = async () => {
  console.log('minting');
  const id = await hc_db.get('/id')
  console.log(id.data);
}

function App() {

    React.useEffect(
      () => {
        if (window.walletConnection.isSignedIn()) {
          console.log("signed in");
        } else if (!window.walletConnection.isSignedIn()) {
          console.log("not signed in");
        }
      },
      [
        //window.walletConnection.isSignedIn()
      ]
    )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button aria-expanded={true} onClick={handleMint}>Mint</Button>
      </header>
    </div>
  );
}

export default App;
