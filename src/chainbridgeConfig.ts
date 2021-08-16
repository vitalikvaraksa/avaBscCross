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
      bridgeAddress: "0xd456Ed988a60156643Aa460421C58D5Ac90a530e",
      erc20HandlerAddress: "0xf4690FbC7903239FEc7a1281Ccf88db047411B4a",
      rpcUrl: "https://ropsten.infura.io/v3/ae7e51244f7141848b377da95a776361",
      type: "Ethereum",
      blockExplorer: "https://bscscan.com",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0xe92481C62aCF2b621cD5e6830c2Ba93D5E3B4585",
          name: "Tether USD",
          symbol: "USDT",
          imageUri: ETHIcon,
          resourceId:
            "0x0000000000000000000000e92481C62aCF2b621cD5e6830c2Ba93D5E3B458500",
        },
      ],
    },
    {
      chainId: 1,
      networkId: 4,
      name: "RINKEBY",
      bridgeAddress: "0x45C0BA3B5996406814B965fe0ADB1692617d9367",
      erc20HandlerAddress: "0xF31bD348773C60856e95A109D17945840b991F15",
      rpcUrl: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      type: "Ethereum",
      blockExplorer: "https://cchain.explorer.avax.network/",
      nativeTokenSymbol: "RNK",
      tokens: [
        {
          address: "0x58aeB0a6d4ee141E655d34d2ca413c204970d986",
          name: "Tether USD",
          symbol: "USDT",
          imageUri: ETHIcon,
          resourceId:
            "0x0000000000000000000000e92481C62aCF2b621cD5e6830c2Ba93D5E3B458500",
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
