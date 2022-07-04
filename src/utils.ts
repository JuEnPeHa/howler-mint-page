import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
import { getConfig } from './config';

let nearConfig = getConfig('testnet');
const keyStore: keyStores.BrowserLocalStorageKeyStore = new keyStores.BrowserLocalStorageKeyStore();

export async function initContract(): Promise<Contract> {
    console.log('initContract');
    const near = await connect({ keyStore, headers: {}, ...nearConfig});
    window.walletConnection = new WalletConnection(near, nearConfig.contractName.split('.')[0]);
    window.accountId = window.walletConnection.getAccountId();
    window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
        viewMethods: ['get_saled_ids', 'get_saled_tokens', 'get_token_by_id', 'get_current_block'],
        changeMethods: ['nft_mint', 'get_account_and_current_block'],
    });
    return window.contract;
}

export function logout() {
    window.walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
}

export function login() {
    window.walletConnection.requestSignIn(nearConfig.contractName);
}