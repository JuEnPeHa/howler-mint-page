import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { initContract } from './utils'
import { Contract, WalletConnection } from 'near-api-js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
declare global {
  interface Window {
    nearInitPromise: Promise<void | JSX.Element>
    walletConnection: WalletConnection;
    accountId: string | null;
    contract: Contract;
  }
}

window.nearInitPromise = initContract()
    .then(() => {
      console.log("window.nearInitPromise", window.nearInitPromise);
      //console.log('Near contract initialized:', window.contract);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
})
.catch((err: string) => {
  console.log(err)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
