import ETHIcon from "./media/tokens/eth.svg";
//import WETHIcon from "./media/tokens/weth.svg";

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
      networkId: 3,
      name: "ropsten testnet",
      bridgeAddress: "0x1C2282d2d1fBC25eE79f8bac06f4BcD9cc5efD0d",
      erc20HandlerAddress: "0x927DAB50F8A4feC6e915f5565AeE3ac14e8ba592",
      rpcUrl: "https://ropsten.infura.io/v3/ae7e51244f7141848b377da95a776361",
      type: "Ethereum",
      blockExplorer: "https://ropsten.etherscan.io",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x3F7B4b99d3AA192B95cf291FCB12A0eD9EFB23A1",
          name: "Canopus",
          symbol: "OPUS",
          imageUri: ETHIcon,
          resourceId:
            "0x00000000000000000000003f7b4b99d3aa192b95cf291fcb12a0ed9efb23a100",
        },
      ],
    },
    {
      chainId: 1,
      networkId: 43113,
      name: "Avalanche testnet",
      bridgeAddress: "0xDcE0E394C6342e1E182dAd8adfbBdC3CEc79bEdd",
      erc20HandlerAddress: "0x56c0787af2BF053Dc11Eee4AB2C5722892EdCaDF",
      rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
      type: "Ethereum",
      blockExplorer: "https://cchain.explorer.avax-test.network/",
      nativeTokenSymbol: "AVAX",
      defaultGasPrice: 75,
      tokens: [
        {
          address: "0xe92481C62aCF2b621cD5e6830c2Ba93D5E3B4585",
          name: "Canopus",
          symbol: "OPUS",
          imageUri: ETHIcon,
          resourceId:
            "0x00000000000000000000003f7b4b99d3aa192b95cf291fcb12a0ed9efb23a100",
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
