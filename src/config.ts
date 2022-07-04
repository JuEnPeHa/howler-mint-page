//import { NearConfig } from "near-api-js/lib/near";
const CONTRACT_NAME_TESTNET = 'hc.jeph.testnet';
const CONTRACT_NAME_MAINNET = 'hc.jeph.near';

export function getConfig(env: string) {
  console.log('getConfig', env);
    switch (env) {
        case 'production':
        case 'mainnet':
          return {
            networkId: 'mainnet',
            nodeUrl: 'https://rpc.mainnet.near.org',
            contractName: CONTRACT_NAME_MAINNET,
            walletUrl: 'https://wallet.near.org',
            helperUrl: 'https://helper.mainnet.near.org',
            explorerUrl: 'https://explorer.mainnet.near.org',
          }
        case 'development':
        case 'testnet':
          return {
            networkId: 'testnet',
            nodeUrl: 'https://rpc.testnet.near.org',
            contractName: CONTRACT_NAME_TESTNET,
            walletUrl: 'https://wallet.testnet.near.org',
            helperUrl: 'https://helper.testnet.near.org',
            explorerUrl: 'https://explorer.testnet.near.org',
          }
        default:
          throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`)
        }
}