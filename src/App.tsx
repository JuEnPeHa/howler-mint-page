import React from 'react';
// import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { IdResponse } from './models/idResponse';
import { login, logout } from './utils';
import { FunctionCallOptions } from 'near-api-js/lib/account';
import banner from './assets/bannerhcc.png';
import { FinalExecutionOutcome } from 'near-api-js/lib/providers';

const hc_db = axios.create({
  baseURL: 'https://howler-api.juanenriqueenr4.repl.co/api/ids',
})


function App() {

  const nft_mint = (id: number) : FunctionCallOptions => {
    const url = `https://picsum.photos/id/${id}/200/300`;
    return {
  contractId: window.contract.contractId,
  methodName: "nft_mint",
  args:
  {
    "token_id": id,
    "media": url,
  },
  gas: "300000000000000", 
  attachedDeposit: BigInt(10000000000000000000000).toString(),
    }
  }

  const [loading, setLoading] = React.useState(false);
  const [id, setId] = React.useState('');
  const [error, setError] = React.useState('');
  const [ids, setIds] = React.useState<IdResponse[]>([]);
  const [minted, setMinted] = React.useState(false);

const handleSeparate = async () => {
  setLoading(true);
  console.log('minting');
  const id = (await hc_db.get<IdResponse>(`/id?userId=${window.accountId}`)).data.id;
  console.log(id);
  handleMint(id);
}

const handleMint = async (id: number) => {
  const response: FinalExecutionOutcome = await window.contract.account.functionCall(nft_mint(id));
  console.log(response);
  if (minted) {
    setLoading(false);
    return;
  }
}
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

    if (!window.walletConnection.isSignedIn()) {
      return (
        <div className='App'>
        <main>
          <h2>Howler Carayas</h2>
        <hr />
        <p style={{textAlign: 'center', marginTop: '2.5em'}}>
      Por favor inicia sesi??n para mintear
        </p>
        <Button variant="primary" onClick={login}>Iniciar Sesi??n</Button>{' '}
        </main>
        </div>
      );
    }

    else {
      return (
        <div className='App'>
        <main>
          <h2>Howler Carayas</h2>
        <hr />
        <img src={banner} alt="carayas" style={ {width: 500} } />
        {/* <p style={{textAlign: 'center', marginTop: '2.5em'}}>
      ??Bienvenido!
        </p> */}
        <br></br>
        <Button variant={!loading ? 'outline-success' : 'outline-danger'} disabled={loading} onClick={handleSeparate}>Mintear</Button>
        <Button variant="primary" onClick={logout}>Cerrar Sesi??n</Button>
        </main>
        </div>
      );
    }

}

export default App;
