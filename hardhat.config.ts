import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import "@nomiclabs/hardhat-etherscan";
import '@nomiclabs/hardhat-ethers';
import "./tasks/accounts";
import "./tasks/blocknumber";
import "solidity-coverage";

dotenv.config();

const GOERLY_RPC_URL: string | undefined = process.env.GOERLI_RPC_URL;
const GOERLY_PRIVATE_KEY: string | undefined = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY: string | undefined = process.env.ETHERSCAN_API_KEY;

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.7",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLY_RPC_URL,
      accounts: GOERLY_PRIVATE_KEY ? [GOERLY_PRIVATE_KEY] : [],
      chainId: 5,
    },
    localHost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
