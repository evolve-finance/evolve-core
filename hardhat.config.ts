import * as dotenv from 'dotenv';
dotenv.config();
import {HardhatUserConfig, HttpNetworkConfig, HttpNetworkHDAccountsConfig} from 'hardhat/types';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-truffle5';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.5.16',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      
    },
    cronos: {
      chainId: 25,
      url: 'https://evm.cronos.org',
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],      
    },
    localhost: {
      chainId: 1337,
      url: 'http://127.0.0.1:8546',      
    }

    // fantom: {
    //   chainId: 250,
    //   url: 'https://rpcapi.fantom.network',
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC
    //   }
    // },
    // fantomtestnet: {
    //   chainId: 4002,
    //   url: 'https://rpc.testnet.fantom.network',
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC
    //   }
    // }
  },
  etherscan: {
    apiKey: process.env.FTMSCAN_API_KEY
  }
};

export default config;
