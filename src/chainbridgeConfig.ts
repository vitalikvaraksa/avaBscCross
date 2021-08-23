//import ETHIcon from "./media/tokens/eth.svg";
//import WETHIcon from "./media/tokens/weth.svg";
import opusIcon from './media/tokens/opus.png'

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  erc20HandlerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // BSC - Avalanche
  chains: [
    {
      chainId: 0,
      networkId: 56,
      name: "Binance",
      bridgeAddress: "0x811317825CdEF7E6b377e4930e48111EBe11f0b8",
      erc20HandlerAddress: "0x50e93704448F6d506bb695a8BAd0f94F1386137C",
      rpcUrl: "https://bsc-dataseed.binance.org",
      type: "Ethereum",
      blockExplorer: "https://bscscan.com",
      nativeTokenSymbol: "BNB",
      tokens: [
        {
          address: "0x76076880e1ebbce597e6e15c47386cd34de4930f",
          name: "Canopus",
          symbol: "OPUS",
          imageUri: opusIcon,
          resourceId:
            "0x000000000000000000000076076880e1ebbce597e6e15c47386cd34de4930f00",
        },
      ],
    },
    {
      chainId: 1,
      networkId: 43114,
      name: "Avalanche c-chain",
      bridgeAddress: "0x7c8BF2a0F332cCeA06741fdF451a620c53395DDc",
      erc20HandlerAddress: "0x639D24ac591BB403843Bbc4719b453fc9B089A84",
      rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
      type: "Ethereum",
      blockExplorer: "https://cchain.explorer.avax.network/address",
      nativeTokenSymbol: "AVAX",
      tokens: [
        {
          address: "0x76076880e1ebbce597e6e15c47386cd34de4930f",
          name: "Canopus",
          symbol: "OPUS",
          imageUri: opusIcon,
          resourceId:
            "0x000000000000000000000076076880e1ebbce597e6e15c47386cd34de4930f00",
        },
      ],
    },
  ],

  // DEVNET
  //   erc20ResourceId:
  //   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
  // chains: [
  // {
  //   chainId: 1,
  //   networkId: 5,
  //   name: "Ethereum - A",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8545",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthA",
  //       symbol: "TESTA",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // {
  //   chainId: 2,
  //   networkId: 6,
  //   name: "Ethereum - B",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8546",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthB",
  //       symbol: "TESTB",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // ]
};
